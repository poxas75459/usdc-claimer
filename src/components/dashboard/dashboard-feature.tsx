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
    "4nTfoyEopfPK6X5WkydL9hsBvMFJ9F56sJ3sUtMjtSfh6cCPEofpv59JfFd3M4WNpViLsaBYKkbB7636LBsPMSF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DysU9jnyx4qZuY9x4jvdz1yEdJvG2WKe6zWbQdc1HcqxaPBsJxUMBWS6WV6yncgHyWbiG5sJeGJ5SMSyNgC3Xy8",
  "key1": "2s1gxXd8TKS6B8qXx5BeymczV8aDzFPB7pZnHLmNpM7s6rSybYwz82GeG6L5fheLetQgjQpSQa6BU7YkBWLk8aUh",
  "key2": "FGtE1VJ2y1cjRHRE6Q8EEynW58QVnVK8Zp2m8ewGusnKBTLNHetXnSv1syJXDD7wp1bQtUmDg6htkZmLr9k4Ktz",
  "key3": "2hsWWRZYtCgnqHc2dWrYdDYayA8TzBN89hfdJvxrSijh6SNtuZnWMAqw83nZojLg5pmXEgUnii9zfmWh7BWWDXib",
  "key4": "2vD8VJ824S3eiBkD3sCyj8aao1eLE1w4oxEi5Hp8k9F18GA3sf3Qoo4u6xYh5B9FPcdNxtc8oFtNTgH1rmqNtPDz",
  "key5": "3Nik8io12Xdx5qQzjmbfx45zh97WtU2aFwL7mNxuzPUA9Zn3RiiwVKBF8SZfGQTtxD4KG6774hFwNbnVZECE3fLG",
  "key6": "5FLyPS9ZfJ4HpvgBeudMeQZQCFkuUDJ8uZotapJG8DKvMWDsMijK91P1tMWdTezDjK9Nr9LCdxmX4cRkYDcydqwM",
  "key7": "5LzEzRbm7R3A98mAR6XArsAnci5vp9aw6Ck1aB2w5Zx5JyKdKkKwhBpFM1b8eUCgdhkD2CbnkMAL6vEdDW65eDE5",
  "key8": "S424f12dT4C1sJNYMXpUQCJRbyeYGLMdxDXLEWWemJgFEARPNwZXhR9ZPTmiFkbH84SAX5UU8Pg6Q3zJD68yRzR",
  "key9": "3HDy2M83EB18yfH911PBougUnE7BbwE2jbUHsjtVRAHbk36C1SfjPyNqAmZamZtpMyLCfMzpYWqtjtsMyPsbMi9K",
  "key10": "3v963f6Gc7e8eKrgwTsmabfc9LQr9Aj8JiRjRnVFxpDU4pHzp9eDnE34ayjaYTx3teTTGhgMPa9QfJHmtFxZwfL8",
  "key11": "5FqxamgT96uRfQpDcaqR8YHSgmEnTfmhFTeqgSKU9H4itBG1Kesv78cZF6iCK5kKrLP1gYDbP2Y9QYbZWndudf8B",
  "key12": "3geK6g9opAETKS526eKNFNwPSoCE49M9UoVdhCrUrxf18aPjA3J4UocY6PP9HR9TvRnZ1Vz685X4aFbKR4QRFqM7",
  "key13": "4XBsFRbmwHKrENSEyEHBdkBJxVmT2Tw5MbE3W8tAgMtZJ95cvry8nDPt4mPEgzhEzFVSsEaJATyu48NKsp9s9xEk",
  "key14": "LjtYBmnp8Cnm6tWq5w1yqLsgSWxpaxzDBzVBrsXz3kxubJkVYrx6WarzErh3WDfZatMmp7u1qXnMLpupSNCNaYg",
  "key15": "4s9XTT8jEv3KGtWw2zjM4a7PD55TWCbnmMbg34uCtmqb3VLaSVDE5uvf9iUW9RzuUEkVsrGPaibNcEiswHx1nMhX",
  "key16": "5etoW7TQEtXxdccNGU46JHYiZ1NZppFXWW2gtPjG6B8Xhj6CXNWmBrgdABpC6PGJTSqs4WU4nwPjDtFDBJU3Rz3C",
  "key17": "4tfrZz1x6x7W3BrpG6uMoBrQ5uyx2FmTuqhxNqL3EuRy75fST6cvmotDGMuYYSyYmGWFC8rNDgWNadR13SvEiva8",
  "key18": "3Nb5nFY4r1uxxNLR7NW7kLQx7EfUD6XU5DvqJFVszvzZ7kWwpvd3jKe9FvbaJ34GUXyCMSgGHxenkBLmfbVeY78o",
  "key19": "3FXk6VW6RorASM3WYV3hxQib1mt5cbHC7n63ZS9PjqDF8LvUeE6vSTCfkNt9eyKUvtXPEK4DVVs667n5dSmAGH4u",
  "key20": "5mWsSExToT6rEYd1dSGEJaj5xdwtQJg1gzcwGXxNS9zsxgCtZv6Cm65HLU7aaehjgDV28JVBkAxBJPM5gVuJjJfv",
  "key21": "2nFvGGiAZ9yYTcC4FPtzSNSRB3NuwTydFVe4GE7pmRRa79HLMRTntQw1knzEL2zktDYJVu3rpTcL1db8G5WBw2vg",
  "key22": "2ZQcMNYC4DfS7bpRMfNPvkhfLCKWQFJmHdJkBv9QW94Cn7tALpZQLBuoChk122AQiGXWUfeTHyEuawLWFqc7XNh7",
  "key23": "v18DNrNj4UKRx6NPnWepNeUJCCQhBjetgRniSUfT6jEzP4W6wJtsKehSNRhALozpEAWZsx7aykQ9bVQy1ChRKSo",
  "key24": "3KotXdHwwfCnzJiESbHJC5BdmhM7Ynu728BqQZWSSBFCWmes1mbcqg7z1Lg8zKnHYXwuAgEan3ZBhLdE5zT3s6BM",
  "key25": "5RA7chtuJx8JrJnme8qmj4JjoxX59Mgq4wcrEyxDbQxJQ5b9fNHZULQ4fiwXURW3FPjhwKACbY58YsA4wFdgFqnz",
  "key26": "CUgR1ejpc3wp2AC89CpKibk1PmY7CPJS6M9UxPNVPsJzSE7o2SVYqQfUkSY4deEQLeGx2dxWSeB1SZnL4J192Hd",
  "key27": "4wjqkEKiJG99YzaQZ8sCXmf9uRtp31p2dHs7DRPxANnJLNZDeLzqgZtCSP1XCxiSdhumK8Rsv84xbY5i8TBiC8jc",
  "key28": "3UPhnuQoDJ8f1sYzn6zooo1gqhycNP6oSJdKXDFWG4Bkp6FPFfPiZpZAPtBXpQrfrUfMxAT8DEThGAAf3FsFotLE",
  "key29": "5iit1KKgy1ZUSxzYJgdeWYaT3oEdyUz63NzKUZLqeGTQZGtcVxbE74Gq4uahf7PeGXFJqKT5ZMQak6oUe4NQnhsi",
  "key30": "3idooBVNArYbppAWPghpgS5S7mn9pnTPL8S6WsJWsAJ8dRjm9irTi2ZoMK6F666hiEds8Ai4coueE4D5iE7VUoUd",
  "key31": "9st3KfeeCz299ZJ88mfnPGRmg27FWp3KfAm2KW2DMi8vCBaaCQFMD4xVc7s5T6ybHsyPCQe92SXVrFNjgMPYH2k",
  "key32": "426AztXBhniaNue8rnb7LdZQuyfqKkUmtAUMnSARbXHdkkce4Ad87CyhRGZn23tV87E8hXheLopUN7wirfN8tm3t",
  "key33": "58jVQZLEqWqk7bKwPTLqoiSwDZHuRQkQkKVBaQNN21YsV6y7KdnebrZq6ySH4dHG2nEENiVprNiZh6rCyNjFcZzP",
  "key34": "3kuyeHHEkUs4UqoMdZu2uaUuwBDc797mJUKvwUL6FegvinZK9rvCXGiKcEPoLFoujgJLrb92Scij7vdQVUnBX29N",
  "key35": "2K3DFQUZiRxF2koxdbXCKG5SunfcvDDgsFPK17Bs5VwvYU1FqLwt3BbnkKmkfvP9GFTGfwbWw8gFkQHsyn98trq8",
  "key36": "5VrnQjBt3JtH5uVDAoLBMPc16kNGP8xQNmTHpmuiwmy7D2fYyD1LfAaJbgp1eynyttmTKuPqj3d3LUieS5Rxo4DS",
  "key37": "3gWuJmZAxLP1ovv2BZFHWHZJeMcReX1zyULL1U5CqSeNPFxAPz75N4gHfqokiTtdaS4NLvianxMwVW4ygSPHPgxT",
  "key38": "29VuYnC2eSckSPzj8cJ3qdJUHATGqV1Nu9kjDHZMkaK1rELSTZG4nU63WCZ2RqDayScwD3CZL2suAbMrZ9wJcJzM"
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
