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
    "VPyJ6fZb9SRyEZXoEktrsy5QpJn3xHsAc6z8Ztvx666ubAVeFkAKz8HT4AfpbR58GMyw4Y8eqmTG2CtPxoSsmqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32vfCPjE6g7VjLgMRDvB6VVEw526crz9CetshP6DCfL6mYXiqrxp9NB4cjZ8bxQyShCHQS5pwsCmj51qvpkoFTJh",
  "key1": "4TWQAg5uZLdgQH5a9a8UTBXLQ5W2tpC1DworJ5MmR3heuHPAkGk4cPsg38P328cvcZVTKC6DQJzq7tcjayM2tk68",
  "key2": "1AAgnebf418pfXfSqeKmbSNDHjEgjq9Ams33jNJqLcnAFcdtGxJdM7ef7awvyX2F1qPMFVJJ81svaX5Q35D99Nt",
  "key3": "5473Q8X2U4gePeMyJBUBVTrDJKmuACVeEDbejYQzq6Akf1wbth3Ahg99YWvbptRE5rcKx9EwpQxsDyp52D7nJxyk",
  "key4": "52g7CxvRmsniK2vEGzNAc1DYNpkW5pnTf4K4vf75XG1PFv522hMX4BbNKZuGyCYd3fF2xinwfFSGprqTNyVteMz7",
  "key5": "2M9txXFCBt24JpxMFuC7AtxaR1gnmVKSptqYrULowx2MYmDdSsCZbBKKaWNi1zh9REqW3VG8pb9NxAVwuw5dZzh2",
  "key6": "tUmz88XNoxVboz8qQEJxx2FoovzqZZXRAMdH3YhWtRXCdCWuXsgqyLFmfiWLTas6b3NtV8VecJBnSfdVegjrvSB",
  "key7": "2jCzr6veV3otHTDJWR1dLqhqZ862kwngc5dLkWNojEFPk6safXTJLdKDrb8kGsuMeoJrjfggARdKEtaH9cAgBzDC",
  "key8": "4Y2fG7gmooTSUdrqCJcXXxDzPXDo3ZRdM49GGk6vCo6eynAGhrNcNRJr9e1ftht2xFw6fpiFVTmLtSomo2uoLB4L",
  "key9": "2V8oq2xn3jqFWwsAEJksgcacnqcMfB1nZhp3X2vRdZArJWy4xD6iWfBBre28S4g8DAkzXPCTJsNUR4mnv1aHNzWV",
  "key10": "485k5PciJJe9jyELiBvpsLCqtNCV9Uub3Ryp7u9qkkCAVQU7xbVbUCiWGUHYKwupPxuESBsoS3vEcbBE1VvpUo3g",
  "key11": "3LxGMt4BAot4TbYQjoQGc1wZmig3EPNyqv8PmiD2M1o9fnk3iVRSXUmqDvDrCeRGnvNDG15LXypiHubtdFsLiq4i",
  "key12": "461Vok2i1dJyfSj323ooxHMzWRjMiz6FuD82xC5KYN2R9GtRzV2c5dKm9TnxjryoP96X5pq8bzZrPAJXwA31nj4r",
  "key13": "BJZnccTxV3fkbySE1gCb4zKP4fC6ocp6LvFD7EQZbxpzxKtTh5mZpKouzEwtBfyNvRVNvfY7Eghv6dTVjduqBhd",
  "key14": "4sgMTvSUtYmTmw5Bau4E7Z2vhoAn3cHxyWxZbeVVCnoum3u6VqciZMx1Q2PTebGnPGG6k4mi6o3hgiWorXgHV4qK",
  "key15": "qs83gSepa2XAS4HNRZxFPVLmxZHkzRLQ2r5VgdbXa9h5oT1ppLpicnva3SZc3pwLznBWPBwnbesTMJLhpRX7wk5",
  "key16": "67e6knqZRiTJthM6zoSFC7abCu6V7gLwFbi2kdBmUH7Khexio5Y55dCo9xskpcsVkNL3CqyP2vnYxWJ7Dha2BYJk",
  "key17": "5EMPYfmjbRgMqHAokeSWMcPofKaGqq47JSp98eutxgJBdFhEAomdYz9NP2R29AtvEos3SNTKKXxpy15SWGwWMFab",
  "key18": "6gH7qLiBjTqPb32XD9fvynv4Xd4n6cKTMMxBcYbWpEqxXqm5M38YLqw4JcFfpbFDLvdyead1wV4kFQtY6mDfXpw",
  "key19": "5aGCBjG6BVKELTrrE5VJDESuQDtnyTSzBneV4PKkhXp5jtj6Yw9kv1Ehz3okAC7gkaNG7ZocLkPSEPneZiSBvAbv",
  "key20": "2xUJ3ZmgfmprCrpELSnN3eWAUFDPNH8LHqH269TLPLQSbyFFCFnt6hZDttdmRiX9NcjhaoPGPj1cLJgoyaUaWv9V",
  "key21": "e7E9pTmuA7DoAiZcTGfxKh6kLsxLzeQXrsEc5UsXG2kV6iegt9AGipGFvvbsy475oRTRcMbgtExiiKshyXSPcjx",
  "key22": "3ocJiAomVKWm9AujYeH2FZ6ksdYuMCBtxWEw45we1ejv71F7b3iH8yA3D8WTrM8HbDBzQ2RsXadg7PDHT5brxX9V",
  "key23": "4msVb43Ui5HbfKKqNHH5WJjvaDNW9rSgBtdSdCLRfXavziFCnk24quaYufBgMeJ89YspP4mkJYWz4aqZeVkwmbaw",
  "key24": "2gPRKbQymoSm9zpaBaUDw27MZBRGGFNwnUZqEC9ZPdQPjQGzWpHfmgoHQDRdkT7onaqn7Vo63RcC6jC6zf3JYN3R",
  "key25": "26bZ7w7E2b2SZy9YmS9MLPSzuMWTRiFfsJSKSGNXn39hZcwCSJScsVcNruR4MfidD4F5z2HdhiasZ9fdNwEKvoK2",
  "key26": "2xVA65bL8ds33YivyKAyfXhmwY4WbV2KY1Cdqw7ieXR8G3Yb1cG2nBBEViMUefSN4yWa8Yd9QMPK87cn6fHnaAVQ",
  "key27": "4AJMi2XqP6sP9q6tUerb5oZdL35X8ApDaZQZZXXCfFno3YsAZn1JicTcGuTSxmTDKfwmkPgcD1u59ST5SjgcvKpG",
  "key28": "5tL9eTWdxKdFUTntcmm6ay55QXenekVh2YyWqRdYaga35LAKtye1fi87kuofW5CpjjSHQkpqUFsFuDiGWoMJgK4h",
  "key29": "45KWSteYK6rA7Ww1fbNuxzMRXjRpATbYW2E6oexWsiPaR2t5eCg9yW2qUBBjTb6xmbPJwo3s3vVrf7H4iKoK6cJ7",
  "key30": "235geLm8ouogHNwNfKWchXfj2UZD69jqrrsKQSNX7KwJ9c2ZRp2Y33thSEfedc99Xs3ogZiRekp6mwDdm7Lab7pH",
  "key31": "2K9cPnWRYUPwtSTJR1js9xRHBAeTWUoHkZAjBUSj8MHQwohGWi6v6FoTm3MsHHJNo3qXH7Mxc5p1CzjyVkrXtyjK",
  "key32": "33nqMQBbZe6kVKiEkJkS3buoWMJW23MeCmfRw9MJkP271LomxxjgP5w4utxnPjBtR469hz5Msp1L6Bd34JSjSkhf",
  "key33": "53YoruJrDxmagt5da3HCyNNAZb8V6co76Xr6HxHZHYg5BV3Kgf9jPkGe2n8YUiUMfbnuEnyx5a6eFGkxDLJQJjDD",
  "key34": "he5RksZyxGRp8H8wjpUQBKFwGT9V5V6aXQx4fUbmeCX4AwVMKQ93cSR8sUasq34PMxP98HuRGzU8AfH136SoBUD",
  "key35": "3dCjidAuUc8mZx54EU8cvq1ptDAb3EiyLUaGaPsQDRDEEBgAsgScF4fUjpJRYezNixhtMwE3cJNMps4pUGNn9418",
  "key36": "2KQYmLmfN6pdGqF3pKAY53ZcRMixZfodLouNxxef67TT7gF5cD874ceEfno9ADUsSra9GvRuxozRZuT5gPVHVRnB",
  "key37": "3DJhbKeFome8muFsFkoJHsFU6Fm991KXc4xSbqL7o3msL78CDPpqpmsNB3gjAj3ssvcfMNoKs7CkdqF2DmfDX4Nw",
  "key38": "4EZyWithTjWNHMvA4qBcYkQxyugrMEZgXBXZdHBcw2ayLbyj2Nf5KqTbn9NKDkvq6yh4K389N6mQU1SPu9fW9kcz",
  "key39": "3GAASjJdYEaLkbZXp5T2dFSvKhFe7yQUugPspdCHZsMPTXGkxdoFHFyPkm2pKhDFBw5RAivsEqMYsnYSd98V2tXK",
  "key40": "3Xc3zFw3XRAdpNuEG6JgvJpMfTpmivWqfVHDRS2E3zqhMjmPaa3CZAMrjWnDeAYBTdLUeih49D4PfyfdH3cWwkmZ",
  "key41": "3rdfSkdsGFkSnyGVsfVXhUjAXCs1XRPdWBgmoKTzbgrHU9g3ThMAafcyFMRsfZoFDuEPK4fVUHP2Xv8UZ4YVhBQi",
  "key42": "3vwgcskFmiscRNidCyvVmp2eEHZnCWuW8XNZoSTbGpZ94X1eVrpjXVJ5uCYwpBRn1Y6g1EPy3VAvMKESE9naGwdm",
  "key43": "3Y9EnivA9FsDdH9Uo6TZzmX6a6tM75pDbTFFmzG4z4QzNtQJx7pSCKdgnRX97gtCqXmSpknhKcW5NTGeoKmJNbJp",
  "key44": "3sgjJoHhEcKa7jiJ7yTJcHVvbWKJxUsGed4Zmr1KJaViybWb17UQ3rVFU5tzfMUQY61ofVEstGZwnZhQBeXJXctL",
  "key45": "5YjKjrwGodS7qwiGHAiGFBtSABwGRWiuefMV3CaSmvU2NWqCFyNNptPqRS33qwqtT7u7epZ1VX4ubZs9VtgW7f2h",
  "key46": "3aRD6pDiryeUNk8YFRBvL4iZc8cPJKV6HE3ZemwKnjG7YVi67RCSfdRYEhhVP8xoFopDrWSui6ABpRP5tid3srTj",
  "key47": "4Z1tjDEwsFUoSGAEE1j7n7NohqWsbjHiQoiuMQWEH2FcE76A8rVWhWYHkagNKQg8nYz9L8sua6r28a27sGw93FZP",
  "key48": "369vN1CNvEfPxr1ufqkSDE1BkCp2XJWEULW9zuBNypf2R78GXsZWZwAoCEXynvyfDburWB2ByhPboJ6H6A5fqrKP"
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
