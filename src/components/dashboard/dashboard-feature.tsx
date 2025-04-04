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
    "58t1zkRuz2jcxXLMc92k4GVqhS4M93UJdQsXgnH1yXxZRNtpXhQtq3zKQ3cM54ig8zuFnTyBq1QbGk8zPsaPi93t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYFrLJb9sG29S76pWGB6NrDXMQycEJ2BwpkxrBFJnA84jghYYMoZ7FmSiCdWvTYYZgo9EWWLFMbvuHkbuDeCLka",
  "key1": "3dvTF4pWFE2sE8KTqATevfhy6Zk9zQzUnCVGFvsR1PXs4qD6dUxKPBx8JWfaadbPBPfK6pQXc8uKZ3opjbun9jJy",
  "key2": "anpTi2wUKHCTR5vsaiRqy6FeVqHJFuzvoSfYAcp1cX4Rk1b6LUo8sSRm1jFks22P8JSaBHeXPrC37Xu9hKEpgXN",
  "key3": "ZGEdQmVB4NpoYY2najd3qDbpJTP5QVaLPahL5PnpUmnjZgsh8gwKWRLCvz6aKHWoVfMfWcPP7HVw3o3F2D15P2h",
  "key4": "3pkU4YCayYaeaj8Mevy6ic5aj7ZddCrYxvxKYCcnq2mMzbyKhnPYB4Am6QGPcBXyjKZAAgwXmYszwbnKpqRnAXRS",
  "key5": "2rWva3fNgL2jN2kybJZqjM9oiF7DosnwEZMn2kiWdXg3AEBM92hAsi8AoqWXGFUE6xcKXKKzgWXWti3zR2Twvi9d",
  "key6": "3GLVR6jocimBCjyjwjsH4YCQkEuV9pNxw5UZiN9tELMYjACEb2sBWdB5ambByZhboPxvdLgcPEXM4AqfNou5sipU",
  "key7": "5egkY9V35PNaUzGvvaykMePPaZ1XBR4xKETxzi6f9NyZSEQFZ4jTFVyp93hGDNuH4xkfDxDXWGN8pAKitUrkk2Bn",
  "key8": "A1eWbeNTLRPRwonGpJyymgK6xCdiTkjJgp9FSdSZxPQprF4mZgtQTFdap4X1SM5YoVcydSykccMnc3XZiv9aFDs",
  "key9": "41uhVnvYNT856hnnmjT465en7t5zhpCKo1m1ikVMjBaghttZFuMxZf2C2bscPp58gnqfqmDXYSDRMixLCN93UZc6",
  "key10": "QW2ju21o36WaDkiouEXpvptKjQMA6NcCjoCuPDzeQfaF6cyz375Ej7UUCxSG5uCrMbC3MUSbgCzDH41aSpNtJvM",
  "key11": "2PpwcxJC6jMUhBWdQ2d54vMTsES6YoGUPzAg1wvbsreDnvKGyfSLUrdj6wF5ZKxr1Zri1h1DUzef6Kp5fCWQFaYw",
  "key12": "5ixoU34M93yGfetwEejD1SMs5dz1i7dYUy1DH2CoKYVXvXG1pab6Su4nTiAmQDJwt3cYA8MXNP8xRFUadLRDZtgQ",
  "key13": "2AKmxkBU7c6MBXWfKJz6TwrueHNRxQ9sRRsEhL3oZdmcrLJJETozr2uiEBv2Pjxo3sBVsxg2ow3JHYT9fXsMrpma",
  "key14": "24Tpd4aU8rsjU2xhM2kDUduGE2bsGJU7KwFaibtEkjjy9iuiC4Yz8qvkzz4NtVRGN2WE9j9DmMXTRnMTCQXDLhkZ",
  "key15": "2xzkprACiGzJnXp3DN2rMzKVeQF2ar8BD8pynUw7S51mcVqyTrsrxyCKGUJbaygNyMAWKY63ZV2AzCbVA3WFsoVy",
  "key16": "2rvK4hVf7mBD1FcwKV2b2pjX93E3jGvhzvKteXPJA468DQFpotFSbW721SaNo7y3MwJkWTsvnptuKZ4G5mHeiSz5",
  "key17": "4bknQSe7qijXsf7AZdSZAGXTFpUkzBjqnyEw2V7kBbt6dR1KYukjgQD68f544Rkp9xfQYTGzPYMJjQgG9TqmnJKQ",
  "key18": "5TtSUmMP7cJk2P9be8winDZY3zTFcdhaZjeyAptba4a9aMxfLz3uZUZrqtMwY6tg9af8HtV5PuEawVKgt2yvWVow",
  "key19": "QrLe98w5vDvpQgdwqSRM4y2qzF77onRkh3iN5eMzFRXCjK9eLenNaWxQ33Dmmb1LdbY3PQyVC9ioE1THWjkLg47",
  "key20": "V2S9fhJG1t6z4h1uwU9LU927n1dPfniad3mAEr6JKoK6XdGoVNvyB2FYbCHbDo8MkBfEAyZhoT1TT8hLTA9Mpc5",
  "key21": "2YoQQJeFHjVLmmjH6RFHZX3LAcgbrLXSMjpE2RW1bw9FEwCvQe1j5LG89FvajSA67FeZARDDkX6qBJNeMZ7EP8ek",
  "key22": "3oFN7583aZBzqoQSqFgSL2nokS83zF4b5mLZsQfDmxHGaVSj6bkuwNThNxzEpfKCU2rPyfoZYsMXjAypPosmZTkJ",
  "key23": "2bQX1dZxNis1nnXBZSMVf99evdmHA69Su9uFuy9m2RgekUiG7peMeteCxHgAA8KgCqFo7BP87BbrgHXhjRaV2LrW",
  "key24": "4XuFkXr1mEX8Rkzzb8d9fCUuonxXS9kd7bbm8PhmySJxtqJtNj5kdYvwPPfw1vxJHz8ziaM1jCCmZzZiBjoJRAqW",
  "key25": "2t1a8rg141JqSH3CNR3BbsJ39J4BknVMCyRJsfLwxnAKWebDpbeMgKyCGZExHtAaEWmWDbfnniTSCuRftnJWFr9X",
  "key26": "4cLwa7C4unbnt9t77BTbfnyxGAsYbZVK1RQ1MdHnXGU5hmq6gbTUbVauXVp1WcfAQSQLTro8asSzcJLBzhCUqSqg",
  "key27": "5WBpVsn5tcjQyvSpp4QfWoR95hoihaM2RNAhcBRTQab4wzxc2tt1Dv1NcyAq3cShmyeNwBy2WvFxzbKcT3CTC4dt",
  "key28": "1Za8ypZDNxJwRwFFgX21E114gvahntgoh3P77qnYQrEgPSWPRVbBUUTRbATeuyADh8pNFLecVkDG2ZHgk22eznE",
  "key29": "4mbV5ydNCez3Z5sm9egjCciJyGAHPnuk8PStFdJDWGScNXs2fe6zashBdKECm1iYdDQwYrCe5umNSAegNF2tGtBU",
  "key30": "66S2A62w6BqwJjPHk7f7A9gg1wX3szYMWd6EWW7g9nefP3dp8QNtXrngPkjPLKJjDj7HdPW2w8QSLekYpyjB8Yzu",
  "key31": "2X7pd7asQhktohpcJrCaBrVGdpxpAfba2vSauxyS8ViKao86ZCRmZor9KksQkQtGoGFhqvT8Cq6hioU8u9Rmjwk8",
  "key32": "3fHsi8jgLVheWLkEiw1yQwrjC3z83t7L7ye4Qyd7JDuQwn6E6P8BaYkxPnYydyF6srpeMhzZB13Bkadgkk7HB8Ga",
  "key33": "3JpvSfS8XxCPzQKGiQWSXDEt45MjtMPsXZRHeVkZ5PH3sHMuLUjhd5vfk4gbzcyz1a9vukdiCAotHwuepMXPFEzt",
  "key34": "51akY3hXBUK97WQo2yszdxjVHLr1erphmkqiJksMTNA4C3dZB3UFPBR8nkGJNnMAvjBShaTuwfpYnHsZdjRydffZ",
  "key35": "27LTd7mV36p4nUzyFrboPqTNa4TuzZPiizGsakxgV11mzj9YmvEcm6UpHaNzZXz6CHkHE8fAavxsR6FwUcUL3TQj",
  "key36": "4XZcVoDutuEuuK66RemPoKXehEz2wCCDPaZJkBxr6iGNYGmfjKZCeb5L58krgcJVYrTQ1bfouANz1G3fZkStpucr",
  "key37": "2S7z5KzUKcf9B1dBtEu8Dxr2fng8sXYvu1Fu3P7zYUTmjFax82M7y4Q1hQSQDwo6uH5dwgGwmAdwuiK6uiaYDhzC",
  "key38": "3Wzn9JvDPphMfDzHEyiB5Y5JHm4jBfHNggFdX1VRxrNnoSu9MN8GJgQJHwK7fcgRFw97GFEcDwgke6rLdmhHYTD7",
  "key39": "3Deo8ijipeNufJrZe3xJVcvRMVAAWrQSNe3qyLNYu6jLHbAe8r98TdAiBaYpoGjHJMMpaTCYB46sUNoTM1BFgDms",
  "key40": "3FSStdqgUNc9xrJXjWC8FoaJJELZAsthvg3ZNMTpqr86bT824QVr4C2iTSnnmN5cHAwES9McHSF2H9ZyavxEf4th",
  "key41": "3AFri5ZF7s1oBpbt4W24HxPB4mFXYVGCrmoyGDzKgrTzaZBYQCtYHUMT1H9oeBUhGvQfNoy2mznUyBtF6qx9roCn",
  "key42": "5cVgtaKAy2ARedHr53wejJCmUgkNhCo3JzDQPjfRUfYgj6UhozFsmeuutQTsDYG8tTFYXLe3GKxpYTZziNx1rQmd",
  "key43": "5nnWq8a27dqXq5TfuMePTmxiegzpgR5VryR9EJv7jWwH34n7ih5PKqyZx93XNQNzqQUwLsv1VrMfdNgHMiTBTRqn",
  "key44": "5gzHoy9WFQc1sRzB1epGTsYw6T19KmKbUNHokk5E7cKrRBYYqiUatpuviZmwzvYpAQA1tYvhPCKmHmszM8veVfA"
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
