/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2FGX9eSKPUuq2bza4qoE7cHFvBBNwUSRqdWvH6MmMYRDmPcfkeLjUtRGxCWFtQyrZafs96CPqp9BVGg4xKGX7WrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tiyZ71CdnEA8uei9a2JUTUi97QUpDmy4ACHyE71xFfHGhfQVnzQd8cu4NrDMQhkXBVmUsBk1XJNtizzQzNAQXYD",
  "key1": "3vFKMTGAgBXbRJQ2MZQ1sQsRrTGsoWg58CDV4uAYDm5ER7pw9HUKQu5ArVYekVJJZaBjZAVfvf31LepPBcyF7b7Z",
  "key2": "2dFxsA4hrPsgoBjayaYPUC6XZdEsAeojUF3gPZey3XQeHBZMT7WUtEo1M7o35PEtGUQE2RtxAdNv4e6FKru8rVxj",
  "key3": "3bAHeE29CNApbKAjHvruU68HegcwHUuMWaTvmbWFtrCFv7Y2fLDW64gjfaA1M6WvYVYmDqueWTh24Upc4L6sXEUD",
  "key4": "3qyU2aeZvuxm2MuzXuBeuhkZhz375iuu2kN7KYM1un62PJT7km5frLkEDepwr28K71XHUNyYrFSCdH9xEaVf41XJ",
  "key5": "273D46MCTa1zBFptrv1kteZxk5wi23Gs5DGwo9DeKrisnDj7QAgwLNhx7MwXDURseYBwBVwPcrpbUkTGT1hzoMUY",
  "key6": "3CDZWsb4is9QGke3UW3caDKhVYrMipLfhWapyogrNHReHZhLV3NUVhqCGK5yVkxbeLvqcd4vFWQ1zPcA3pPyvGHQ",
  "key7": "3gpqfPVduT2euc7QWWtXssbBy7VpVJa6V38HVcrQmUj4dLjjJaCwtnJaGTJnccX8CYj98x2g4aife4fdDynz9QSw",
  "key8": "2wpvJKL6aJxqGMR2ncUKDRWzVyAS9hDrpebzBQd2MEPAf8RXjfG5HZxQUaUAgFphcBYr21urED5WqB2jEmTrJwA4",
  "key9": "3EEsKkERjvKhFzwNUR9e2J9zo9dWzoyLKSuMZHqLFzYBXpLT7Eb8ScFTc94SobRhcKmennKuDcwXU4Cao1GcFXMR",
  "key10": "4K5Yo4mdLYyu5hAWhG7pvgJopDS1c3ZYwr99ZZc9HF55FehdgXhYy9tHpZ1fLuFvCUdCV3974aLoMhtPcFzkhgP5",
  "key11": "59EskujaExUHXm8nv6QEJdfLrZRNsY6LsFkS8MNBLKtxG4Zt3TjFiPwkJGbypdDAb6xyyGixixZgF8c97fwcJDPJ",
  "key12": "3abuny1oXtJbqxvwkWaTrwwDP87honBmD5vn9jMFqNHmtMyABK1UNMSD1EZAYisxsVUQ3DTC36W9c18nHGrM3DC4",
  "key13": "LXjxdkiohbb4hLssWConCspDJLQGFqWyernapCtjC4qJUZgcCWHvwVn2jLsAXHwLAZiHHU2ryzEUpL49f9JWPtG",
  "key14": "3K3ZUCYsLRBUh96ypPmmhvQcrgAz4Bx6b4wBk79Ri5hQGTme4jtLHLx5i3TTgwUZmnqW2Uvof6s3fChoUCggyLro",
  "key15": "2PBbR49BGToCdqKrMyCM9VJ35VvJHD4n8S89ZbqTqpFpkivdhYco2N6vygKtjijRY2ofxaX1aCRTTVxmBrsjcGjf",
  "key16": "2pUk8qUAVhFYtNhcgHmhcwpbQ5zcxEG4G4WWR3tV2t6FjqhKSV4ABsokFNbkkQML2nAEyVx2E44fmqjDKSv2Ss7G",
  "key17": "2HbaWAvrqY2kohKFqjr5wyvzKJR8NirvdV98kuhWJEkcrvTvfTuwNgQeZJeguQRo5M6sx5CJtYHdvSbLijDo4WdQ",
  "key18": "49KphjdNeeQLhfsfiymthFwMFqq6PGAdwBEGJrYb9Tp493R7dSz9CNPVNY5qaYoaM3umK2KzYxDeEXbNbxyaXEpT",
  "key19": "3tfNNkjYauy5QceACMqwGs3aw9PFpjrojkQAaPkg2Pi5AgVtvFtCs2x7Ecb1DRzTPyPXqrnMj3Y6Quo7TjwcV4iw",
  "key20": "2QzbSEj7sgxd86uLozu8EsSNe36mxJCemouYaquZxhp7E8r6TwGFV2mczydFtLivfUfyJv6UtpD1Hs4xJg9v665Q",
  "key21": "3eWME2CFSit5DYM7FebJzpasUVNTHp8V5aMmdxUEfVkAX6AtViKXbkqTfUzyNmkrCBDehvLRuiQ9jsoKLzmNCT2f",
  "key22": "uvngbjLrY7UqZmtY3Vmvf2MEPxHVXRR1MGG5maGHNR9RidqmZjWtmYi7uzdrsMSiEue5TcHq3aq8rTCw5TeLWTA",
  "key23": "5hTCiVp4Z4DWSSMckwFTmHfdrimpFxDpRCdTeKZdPCD32yF41mm3piNBLEfABA83GSAMJhegeAdsq3uH1d2uiwG8",
  "key24": "2uDqDAHN1tzHXb8wXUxbwKg1FzWyzrnEEKhv7v3BVd2zS3KHg21fMzqNS64okutGydeXU3StHDWZgdJrvZh41f7J",
  "key25": "436ktbz3vZtHGRGJ26YoGgjP7z4UsZjsStAMJpMi3QSsqBgvrtLRybiXjMcj9hLGbxXYs6tyethYZN4ciGNDFBbV",
  "key26": "PyZzdLVeqtnpb9i9RqnUD7YuoozFQ2NFou2GSJMVaNPJ81fFcWLsiMArJKj2g4no3njrqrnaSDy3gNkZHLbU7yW",
  "key27": "epHSvc4gZhomzCDVUxLdfVP3WiEvedNyUvgjhKeXqDHVGd2sNYAGMkVRfy5qaEiCP9LwMmVwFoEo6MfUFNTw6hk",
  "key28": "419vdpY5vjWKiaygbvSsmcnfJ9fEH5Jrm7KsuLb4BdySd2NdxcankEWTBwh5gSLSXUmGaMR7TyfB9Pxc59aDoAWS",
  "key29": "5kdJUZQfKaUq4FMa4U4dG4cqc7PfKqg1dq4neup51wxYkt6KcNUtChBawyRf6JNk3u4j2B5RABupeNSRmpRtKRid",
  "key30": "RgogQx5JMnK15kPLoh1XYFxHenDNhxfgvpCxapLwLZML3McuMxeQa5r3Jg1CL3hdR7YHSc4yth3oqMwiqQcBHBv",
  "key31": "5yfazteC3vzXuCq26LpDvTsU6HXqvRADUwhDE1jVdhno8R3SiLJtmG25ZyvXyZaZZNmQYYrEtfL5WVVS3kTysM2b",
  "key32": "4xkWAVvTkGGXp1DssVnek6pLw5jrawQwG2BircXnE27ahxzZQN5dMDwJuS7QQ8Jd2ZfaxAaXthfUFVNQqu4o6Zaw"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
