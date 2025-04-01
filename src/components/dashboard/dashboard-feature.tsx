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
    "2dzDdmU7tkPmJEgUwJTS5cEtGbTN9iLMTQhxBnvKhknCZB6sRUwsSTeeiynvwgAWHqdvwnJrRGDb1mVmvdGBHbjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uRkM9iZcLuuhCo5FBAE4vSpinXFcMWJazEdZ9HDGSY79qbfrdQGXtLm2v1zw15iS5ZZdeDKuhxbxcQgFabGjHK",
  "key1": "3btHwDb9ZyH9xW1YajamtyXqF7PAKN3MBBXMrDTSBeYFC8Yrrj6QyeDymXhCejGaWpks3gG1eyeVWTxqqnDB1eEU",
  "key2": "CgoMmUV98FwWiBsytk7d9N6vg3inYZZySuSthz5YxbPeAFowyXgrDWJnQWV3gp58RMKxSy1XKMsHi9wkKuV3mA4",
  "key3": "4kJBFPycjcvRuhSGedtNvJzMLk9Z5GHmRKNsfaeAbcg75uKGvjVg5zzTZVdBpGHfRGDi2eKEMhpSornHCec2D6nK",
  "key4": "4KJCZDBBG9otKqnPPiHh1cZY2qizDCHg9Z8vjrctsDWEdeWQDRFeChtkNT4Nyg81Q3AxdRZfdAG6eodzYhSMPC9M",
  "key5": "42DQmVYmknvAQntQ9s9DvsD7iw24gka21qCCJ7Rv1WGnDJLs9uzjMDfLADByaJn5Q3cG6mNvjxtBSsNqvhhYqFP8",
  "key6": "4q2dhNBc6KkUsTYKLc3TQxVm5nHMuzzUKcATv85BKDzP5Gkg347MUMKJLePcLbTdsLxSx7SbPw4JbzuNnx2zuhmU",
  "key7": "fcB4BES9gmemGtjjJsJxW1px64yNzBqf6arPEGp6iXxb3nU6Y5UUKo42D69eYrcomhVqB69BniFpyAee2dHr1oX",
  "key8": "XRuuaLXT1mrCwoGBYzd5ZhHcRKsozHgcbqcAC8JW7guBGu7XSqk6GMvJ5GS78c9sgHENZU55Z4ne8U8tDNkTL7X",
  "key9": "Wkj1NEL1Huk1GjGzobmqbDGkp7fqeMvyh79Hk4vGF6fAJwQVKr5sTaXBRfuNnx65YxTZyVS3C6YpJovYuJYZzQq",
  "key10": "EvZSUN4woZkoehHpi23FxgJ9Mc2ZXDxSK9cpj2wW1PRZJ88eR6qLUbqJtQ1PzS9HbEUQEPLiroAvJVGTQ28eY9r",
  "key11": "5fWeGxjX3ViyDC5AbwVTmuQz1L9CPW5RfiVoutJx6uD7KjZx2FEGPfFmcSApB6MXqkLJd2VRidPXATgZgk5d77K5",
  "key12": "o3jLyNny64PMWnygdSiPhvMcxQNx2GE58R8JXyCiRcXt9MmuyBVk73Q4mxuzqrVoAKmLRH4oeQCRcyGYaXhp9Jg",
  "key13": "23Jbqz6CBdSbAZgKWN3MLMcHL8avsioR5y7Jsf2hr3sPQ58W1569UdxdZWAQAn7Wqd46op7MR4QQEti2aTsiGwQW",
  "key14": "4TVXMtkjUxKoxh1vtSuEei9CtGtwJa9FZuPTrEYJYKKCoRXaVT59WwFxMbDwtLVkrN9xZMPsYi6aaGaMfwRJce37",
  "key15": "3qQAkLRyg6V1a8bKvvRnepN1mGvkz4wBPkdu56JKFKjya5ANnDTZPFRv8xXQZ692YEYbGH8TJ4kPj5Xn9YFSuFRf",
  "key16": "2Hqnm3KsR1tnxsvhmMrXCZcWKJEeqiG6BPRsAHLgUqmvBokxGXbj1YbTPQwW7Yjcie6y4y7ALy1WAa51dzrG8jZ4",
  "key17": "54Tw1zaN2Xmbbkw8jeEhsQPwmSRBaULxEHx3r12t5ZN2PDsQkJiZ7rF6ngRx4GJyYfcCuG5YweZdvoe9bsfPaKts",
  "key18": "3dVwZeTEtV4YkZEqvj4uTXXzHaLNrJ7ZYz1JHreQ5QM55GjqQbQfJELzJeWfsLEfyKDiNntcPZDFK54VYj89fBiF",
  "key19": "3S1THMnoLZD79ZkSbv8KeVHheBWDGkLB8AMoqu5vehKordDu95n8DyUTJKYFCZLT7MoyGS9F5s2WXrDYMBBKF6jQ",
  "key20": "FD3QmNF16tEyPVZfqT3Y2qqD8oLJ4WP7JTGRenxQwKtaTkv2h3KkAyFwqB7ug7qTE6XnzD5sUkyUVc1fPvjDebr",
  "key21": "2ZjEzbHqztNLYjr1SuTL86EF3M554UEKQ5BeVS8rSGvc1MQK22ru5kG6HCJyRtsufz2RjyUAb67SvHsvKJ4qJc8A",
  "key22": "26KW2MzKgyxjtiYVq3ssycwFaKemM77xLCqwG1dkjfT4m8p82J5tdjFugRj6nKjAtmZWZJPibhQ1nwPFo3iqWrzC",
  "key23": "274pb1RwLTgAJ2FA1vy5bCKg83WYBvp8pguTHDSLpSdvCGggz97C88LAuuM5gT4x23rhALYSnCWGaBmJoQwb1kCT",
  "key24": "5zA1s1QuDcLxFhZQxkt4o4oChvondNJx3x1A2ufR1wUvqKASdwHWRASkaQ7CKpdML1gDAXnaHJU9h3QxEsbSR1re",
  "key25": "4PV5vVr1nZpgcKwADURiFfBct7KsseGx9wmppTSXQX5s2EKDxnUHcvxUpURxbfknCx5iSFnkY482gyZJXwKjDLmo",
  "key26": "3uJbdDKiw6J3WLdQ5HU4XGVCM3vfQTogVHkgjCBhgVXLEVpzDXQHsGypJxb2Ltz34gfWMbMqgaw1dxaWaAkx62bb",
  "key27": "2Dp9zDUsutHNcoZmbPzWAN3Di1kfomHfBUia6E5aqhL6v75w9SjuqScfFfP6od7A7SVs9rSgg5fCBi7KPsrmp9Gv",
  "key28": "2UDHdybeq262qA68vQFdxA5Y1SZ5mpwcTNg1H6tWGH3DDyMEGcf9BmLbhTm5GGRn9N8RUXWXocMoCcoyi1b5KR3A",
  "key29": "2kuqURULKWWBQzKNsgonQLVAb7CpjLkJqANTLysbCEZphkE9MNsKuywcdvPNipW35xnjC7wuvaztWUgJJroRXeAK",
  "key30": "4aHN1cFwfsYq3y8YUAA8WznwZuGthSvoshV2JWp13wcoigZb9jFqhyqeRr188wViVsHeE6xAkxB3366vYvFDhZBL"
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
