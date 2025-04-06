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
    "3A4GHHTCwLdx6JSMAvVe2Yha3LXDd6zWFStisYLmNMvQdzZEopFqZVaco8pfPhmjQhMj2ad3vamSqcfqnHhSTXiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xpvwgyFLM726o8pbZ7ZSw4AznaWB8RH5u9hySkiKxKdPraUBkD1bjfELMrV4B959e4L4VeBJHZVXiMbZm2t9Hg",
  "key1": "3zZaKnCzoVda9LPb3ie7fFaMniRZgrvSC6uKeJAEeCDdEJDkxAP24MQLxJhiNSESnbYjxQVzYrusiKSA42h2WPVH",
  "key2": "3j5JD3DBi9UwdDnNDMxn6VGQt7FMxSV9vQyZRg33LsV36bzzy8tt4c5ekj2KY2GJoEWwc9gVDmffMwSPwMfckcWz",
  "key3": "3bUHjHdbdvY7fWasnRn58wRyffiNV74JFbGBMifBe4os32D3Pt1wLfpwXQ9J87z7N4XW55NJTmDXvXeQ9rUpCbrL",
  "key4": "2n3yFSkw8gHqKErUuaLNwZ5ZxeNXvavsLFtJJfLtw2TneQrevB7LTd7LHV88Dyenc8pYBiAZh3NdJMFrbwaLEtAp",
  "key5": "4RSBLuTJPVyxcmPqRDG2qTEXdiqGEkCXyoXRFvANAwtABaqC8upqqWHq8pCauxhRMg2GD8p7LbMSFDCjJva3tiiB",
  "key6": "3j33GiRAuYbNKb8Zuv79Pi6VycHPEjtPuvEdgjFraFSxTx4DBmnRypKmmAe916nGX8GHHjejjBBWENcEwWsUy7kR",
  "key7": "4cDrfprPFJV96Zyuxhv4Xip2U7nTxw1YrVnPHp4r94A3awk5uiF8Yxf1rgjjWWueTDtd1GcmkQyXghgFWqSAcex4",
  "key8": "43kT9WzM5ZKt4mz7iQk4e1cn1SafQq9AcBFZHajXoKstfQTgo48dEb9fdBNW59LSrcA8yUSHcdCA4Fcfqa9cpCto",
  "key9": "3h3wxGPViLwF1MbaEmwr6DG8bWSK4c9qsKT4Pkchpr4T47RMwrKamFBNLUiYbH9Z8zgfAsSUPyPNU1VLKodNzWHh",
  "key10": "2phrqh9GSXe4XazvFHD3Lw28JU2C1C2zGzJURJPyo2rxtHeCswmQCSnK9uQT1B9ADquxmY8AjMrSYTKL54dN5Dzn",
  "key11": "43EUETQ2ESwgLQAqA7uQAN3QKYxdM3sco4n9cemJz48wRgX7WkrzL5Bbivm8MaJ54zqovcvgY1g2rs4RxTmu41s9",
  "key12": "45U5argts6NMvSJstqtLCX43VLQTMDEucC6tHXmstttCn1z9eD6RnmP4DBCu7KMVLRZSLo1gZ2WynC3qKvEaU7xY",
  "key13": "qfU38bezPYMiaWg7iS5797GismpHWWveU3ED9gDSN8pyjRbUKZ9GUHycLuckWXeg1hkswLBER2FRWvdk8H8zYdf",
  "key14": "51rdUUTTwhoqNohh1goov5dk7oeido9pr9sNuYoekcWK6bKTnSLNjNJbAMHN8KdQiopmDrKNpijgT639BayoYP3w",
  "key15": "4nAGh12Na85JnZZRwVqQbEUYU17vLZtkEHemR8BYdSWGVBqFXiAjabWw6Z1zoES9BrsTy1xCrGqz9FXpTndwcoGT",
  "key16": "3dW1Ru6BfMWtBxrYGQLQSsuCDFbVwVb75giHAQvirmPRBUax7iLWm7hgHhLenduCN5mPuwHz3r5WAhzNsaazC8cE",
  "key17": "3vwV3dz7RnsVBLpEU975sPQVfk5WcQvGnKDML2nLyep1aYWshPeY939bsouEZ19r8SFx8FPnozVDJ7YTAP7ifSvQ",
  "key18": "2YrFYbD4uLNHtgoMUU7mFQg5jRGLjZ7r1ZS9wV8jv83RmL8CSCoHPK8WMgfdC9G8sCubdV6rpKjApPBqq2qrEDCr",
  "key19": "M3CFfojyt8TTmU5nWY6o69SSC3MqfDWYK2ktStyeGgQ8q1QQnT3p2XuQVkNmjiaffvDk7aDQm2kuc2LpJrKojBr",
  "key20": "2Ao3MzncUtZ2eatyQTfaPCauqBnb2NUnkwsiuizicdSTEhtRjg1hgqBg6oJzbC136Bso9njUa5EYgRujAaxmT8Jm",
  "key21": "52z6Zzs86jHmpFwnKQqYJvUNtt8gCDpyx4WoyyBpPuw9WWzUh6NQgB9tM5UYKcW8Wdf1WutU2f9dq4zw4GqSccgX",
  "key22": "3UKzi7oQtSXUpKaUniaaFJarbRQfJCAsRSyJUiNkW6zuJZgnvceD1C8f67QB689aVjmCRprdPFtJmZgXd7iKguLE",
  "key23": "5e5Y8fugTKkRroYTNpxTdWivs5N5duF31DhWYJFrurQq5cz5ukoMQ2cgUNwVRk6B4p2SnXmSFfoj4BHFZccFuX3S",
  "key24": "5U1tLYDoDRvinAVXLbzAH1nhqFi85HsZ4B4ppN2JZTzzHH44YtpUsG8sieAG6XTx4hTr8a9mw3UTithHDRy1ZcTZ",
  "key25": "4ddDTnCBYPRZD2EtdPrg9xhiPJUyZ7LWDrE8XN61xxgVfkGbjZb6YFeKFoQTdiKTEdagsMZuqobNva4wgdPS9DJN",
  "key26": "3e1aEqB3nxPypMAhvNqodpkoeDsgjy6acM8bYaxKcYH6jEmirFq5ReJw5xjDdzkTe4c7S9jWo2JkNqPe7wUteQgy",
  "key27": "4ZzwUZcRuUQPycZJfeKgx3SriWPZ6xs189WSRaD9boaU2xfSQU9cf5U4sicaVKfXzUR19KvWTohAbHFn8BBMniiJ",
  "key28": "4LaNUTEQ2tar2L1dBjdTHDPpbwsCeTm4RnXuJGdVWZaiLQpsf7wiTxhj6wceUMhpMbkdUJCxV944xBsLqUqibYr6",
  "key29": "DDXtEhwzerV18xTd3hjMhRjYSqQvyPMzHG1xCXHJrKAydB5ndjsEFPEB3AtFrNdwgFu3KNMN7cCWTL5LEmRA3SQ",
  "key30": "3eqjKX4g7eBMGMSK1iEWDQgpC9mH2kRR4VKwQ78Qnps5gtjhZntQZAViSBqfykZNpKyZgTRRBsBjnxszEu33cFrW",
  "key31": "5JNPv2FZLd1NWEd9jcdxti82qYJPJEB9e2NUAUZx3wJ9Qkrvp8kBmdxsHY9Kec3tg5HwPVRfxioEsTSHsEDoFtJQ",
  "key32": "2fFCMKApFm2gHK3PV48SgNnWTT7bUtmFjYXNf5a8n9mV77HoDjE2DqSMyvq4qMwSAbXXY8SfSyaNWtP16GXCGvPe",
  "key33": "3exKtxkpJc3RVhurBNTp8N37htVVKUGi6h35MNTNGX6aHidE1LEuuKHBNkZwiyTnnUh9nYBmGGUMRrWzUQCtv3rv",
  "key34": "2bzKASDDsfrhrZzZnmVzfNPkXfMpsC5GZqc7F6am9tiTXuvNvo7azYFUk85mcHDomfuq7UEsvbCJx6kkE3VCaB53"
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
