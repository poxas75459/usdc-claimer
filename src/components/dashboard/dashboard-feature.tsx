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
    "5fSCw5NYXvRPmA2ZeCn9S6H3cWm8DDyQE3AQxxE61uXATUTV4R3mt22sHrMM1g4YmeNRKYSHwFUQSjKLFxQKjsh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ViV1LvmFjYHcHUqsE3mrcbRvMshN5HYgzVLEwCorNe7v73n6m5tdABAF8JyFwfU8J3h9izYtZWSWhndufdM7mAP",
  "key1": "3Nzc4y92WBZ9sHuii15zp6YHgNhmYhPSBa2Z2qTa1XJDqJe8bEJN72KnzpGfbsGva3HGjubv1Kuc89mHcTv4hUpL",
  "key2": "5gPvEvBMwuva4f2TqMwLRVmjeXPFSuHxiuHWarkrJECL6mtoTWzzU2DvwxxGDq1k2tjwiAZkWARF4CSEbYg7UbJL",
  "key3": "4cj7WN4LAoQYSn9igTVDq65rBxqTSxJLPjVRkDBjwxpxft78vxZZn8ZiUeFjRUuoJBCuiZjxn6tp59obasBwH1Sm",
  "key4": "5RS2YQTqXMpQbHwoMA2tzWGBh1CuxfszsWJijTiTHdst3B8wqYkx5DtCM8goBUMbJs5RRJEWNR4rm5zCLQnwa3xj",
  "key5": "v9gzfPg2KrpPMZ3xh5aKxpp7aPNYpinJqHyCmmRoJS4m9NVXWjveuQFAq83fCEahPHwEZx6G1sQKmRJ4E249w3X",
  "key6": "dvZJSaYoGNMuraRxzMykEPwQQaNt2TXp2QYHbaVeBAQe9PJM3me6qRFf9gxF3aY845y87wFuXafTXv1dFJRg5pk",
  "key7": "5MLHpMuywdN2Q8kred3m97Uv2ThjiEBgf2H5JpbhP4TN1X7KF16r82Dd3GQbNtAjky55bd4RpL5s9sNP5dD8kxbL",
  "key8": "44AseW6Rqvoe1wXJVjRSUgL1fxHvbMeJtHRQXF4wzvzVNiJ6znhQN6sGgMNzK99aYJFDqBkn5h6AU14sr8hnLZFM",
  "key9": "2Mzh6xmeZ8qS3bX9YxbvNBXvo9VJ9M1648btwMYVhXTFy9F1a9VyfiqkK2PUE8xNq2mZvs8BpEzQok4wCxKZiJuv",
  "key10": "66P1pimT95CB5yC99NHonvXLhjPPU2QLaFbQeWz1vYBBYn459VGgjxpqqLU6yqdv6D9rbjBmgh4DUsC35pBT7LXu",
  "key11": "34nLAKqBy7pV5S1E5BvJ9EJrf3pzfhsgBY9HrNFFh26aJtMNc1yHRnnyuhuM6h8H2T2k8F8Kn4dPFsgYjAwKXUxK",
  "key12": "3jSGECTce4p1V38Vw89VRc5TrsJgjHs4qaHd5estZcZuUimUuK9ZwJztfCpny5shH4mfo2G7QTMvgG6sHjiXTJcK",
  "key13": "EdfHekQ2jqZCJR6pG4w4mwTb4FW7E5Sxo3dc1g2PYMRbqJwC1Lz3Z4NJucgE2TTdaWJgZqGvB2r39Har98oHd3c",
  "key14": "ejJ27k1qr4sxnqnCkz531f8wAwYAYHAyFUUDwXSd8y6HRFASymMrbHnG7nyJodpDxKT2hPRJbb2eTnLTcbH64tp",
  "key15": "4fv71poQhr54PpNfYAftSrLdvQ5D9BE6oNY4CdGMnzzmXLAfadvm1xgrj728tBvfG82YcNFbZwBRA1yBxofSjR89",
  "key16": "avSKrCFNs392GMgcnhVoiSBhoHSccnSAxWT2rkiiYnwJ6KNXpgrSS5VxuCX1HPGmAnyZu968Fgms1u8t7E5zf7X",
  "key17": "Hg5ZeHxFU27osPXUNZirrAQySeTqKEFTuveQbpzjTXwajKn5kjt1TQp436hPCzUtKJgSGCNM2WJ9Vhr9KSYR45X",
  "key18": "4NSsZvrtA5x267Et2nsf6TU1qL3HxBy8AAYjqSM122mfPiqkxbx22HeMrD7dYxxSg5ALTnavnBkHKxhESxuDvZmd",
  "key19": "3pqtiWMSdDEyHLzDM2QTbvQvUgWTCYdrzMe9U1oQTawTjG54SW5tNQk2ATLQhrS5e2gM8jg7B5UcWcPP3V4Wk8k3",
  "key20": "5YoqevuXosvfcjTcHqfXKR1i2zCz32Fo4Ti4p4T6YFsQfuUdZ4SGr6jTmfJHNmeMyA2kUjT6aXoNTCWTDHL7QUKN",
  "key21": "2t73seSH3UbbrAUAPUnzELmy3pZE8DRw4z5fJCqLjxsT5q5BKMZn8Azu4xV1Bn2q1WFCBkYTKY1fYU9hoonHSkHq",
  "key22": "2dGGBzo2H5WzttYkRV4ZXFdNnWigz6GqQdfSYhapQ88ZVKcqDjDLx4xpwb2bAVBRayTBtiiArwj7MbMLK5cG6yak",
  "key23": "5HZbJLGPh9UcvG5iMeUyXKKrXJjbv3xKbuGTUGtFe6vMQAHQdjEnXYm5khQ4FepjEm7e52czpLkV6dR9H4pKdQeD",
  "key24": "58wgBUbHBAmvwKNHfmVxJKSY1N64WM5QPyvJqU95JBUTEWqKvXf9CMQntHQhsB2XutyMNxFnMeHdrytRpz9HJ9i1",
  "key25": "3bJhBcUjdED1XLuoTBRRXPjFSQ7pvMhTYqrL4KqoDqnv2oq9j5zqzuAk3Q4BThxC7k668dwCecgMq4YyZJ76uKhj",
  "key26": "5SNiVrCT4Qc8QnTAY48u8QN4rdx6N5fJkXvJhVSQRBerv9t9Hn2Hb6HrskNoHgwJPP8e6y18i5p8ESi3BCtxFMBM",
  "key27": "5sQJFMz7GjM64GVuJq6zZ4dMaeu1wEDddAHT766GF8PJJNkeFo7H8JkrcAViEHh1hf3qxj7FaMJ81GeZpsAPf5h",
  "key28": "48Gx4zmu6ynLrrSeBcLxu5dBgi61CpabUBpPLnAYwpgQkoV4MYFxQ1yPQN3rJ6XDhsCsAeVHJ5YpuhFvcLfzr9mP",
  "key29": "3G6hZQCK3qsZELRV67Kb5wrVXmVeY9LsssnpkJWHiK3XNKB1XdF4aoiZwD9ijMyVkEBmg6QbQLaRf5KabmdhqcQa",
  "key30": "2LVswkmKE86RXk8UtiEwiSyBud3REDiK4jht3QAKcLgJypCuk8r37ETSTypeK3XDKiRcRinLaFfriDnnanL4pKNZ",
  "key31": "4VwtBns8qETqgaWg9DwJExPJeySWx6A8PEkdvbLb5LUkW8pbAiC7sZ66WnSejsG1X8R5RzpoqddfFgxnheqVAJAg",
  "key32": "4LPaJf9JjEWBR845FUbm3wZcK8nnC8XJYse9WDGwipaDUjnrhKNce69h6ozR87XD69d6cVHZBsH6H4Qro1koyDKF",
  "key33": "5RJ5ujD92fRs9UmjVNuELL7TWQP6eSvvsrdS6VGZsBoyPcm8zFW7hzRj2KShWpefeoib3giGkVGCK4rhP1iTx5QX",
  "key34": "5R9JhzivBVzvn9XCmZaZmdjsvWviCcuhGEpQjGTMB1g3q4SgWE68ts85Gv2E7JiXCTxm1HJb3cEtMt1XZNbYEYZM",
  "key35": "a8eG8qPzS4tCXkXvpkr9iYfwKQk7u8XFawhKMp4vhhBhzZTfLpeQ1sFJcV3cCVzYzVEuTTfSX2uaympX5vgwH6f",
  "key36": "5bpkS4kJwEdWTMxFtvfEMdnSjiGeJ1VCqmikcNKYLsru76MU8q1NvVo1eTBdjLRqCYLoPknXC3tyCvrRDgP9fEVa",
  "key37": "HHHzxCoawKRaNaeg8nGeQJRECL7vtdCwY3X1VyD7dGJnCcnAxYpMdvb9a8srsWixrLhDAnZF7qJkP4h6bAJatWP",
  "key38": "5N3ew8hhhLfVNZuXHccu84nMsfSA9fuS5BZ4rfdxikekgXSkDUaBjkncFhykPPuQmxVvHQgDQQj3c1PhmvHwVxLq",
  "key39": "49xgSneYaf5kmk4GGhbgRPxnNv394CQMHvoui9pTRN5hvcfxquCGxaDfAxZqpE2PSeKPTMp9vDZfRcvTRbXcqiHa",
  "key40": "4MegfDspYN2kLekmnt5VfDdJXf1yAE2omxnLtfXz2Kah82VTVGXpnyRanqjgXWLff3imn3TUKSb7V8ryWANHDDXg",
  "key41": "5seWnw5k5JhRc3HQdwyM9cC8d1DW6XC6PxMHwS36exCukYHnFqBM4Vq42apAoBE5qkvakFry3K7AdS9d1TDAzuQJ",
  "key42": "8nG4RPH8JQrjeVH5YuaLggWF8b3BWVaaFnfJSe2E4VgfmE27vzXU59EETCVLhKBNBt7mVE9mwuvCBJ4uhJ3zjCp",
  "key43": "RZcRbLz1WWqb3mYyJz1zheFSpiXgXuJohw63HeLvswfcY7ZBFsjMSegzzYxm77qcTWAyxaxkjt2FpTuRDGiMZaA",
  "key44": "XvqevToFfVZ8z2S9VZDbHYdYYw6XPgbDSefQRFW8V9cWCV2kRUm5Sf7pjgNWL7Kxxokfrkn549G1tBDqbCtg7J8",
  "key45": "2RpUQbZvmLqynVQ5HPUBbSkCD5XYczF4RtF29n1ARiJZoBVjmWbJLpVHwVTfheYFtfYNFns6qkBTGFXpEFN16CTS",
  "key46": "53xL1hTtXDAWMeqXKtveG3AQdVxGBBLf9q1A1dZspZwkRSnuEinyHP5U38rGyCTL1kdKiUUU7BPyxd8Jt8P3jxAN"
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
