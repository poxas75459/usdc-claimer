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
    "yCX2CEGBxoDjpyDUQd8fi6R9d2vTTy2pYXvtSM1KzpCWAbCBncQXHwUH1ra9AkC8jqYvGjc1Gv3ej9iC4j6XhYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eh4KEq9jLzT74ZbB4AxLwmUQg2qEvxBVfRM8qrEWvE1Hn89rM8EgY2eyQntGbgNi3Q5Xdj61WPU1kpSrJWbW9Ga",
  "key1": "51GbF6169o3LC2TkukVwmNbrqjXRNctGqKuimU5qo4YetWy33r6rBwYpxrb9iLZK7vJYijyiDDc585Z87Bqe25KR",
  "key2": "cCqKk8iU8M21E31v6YwQaT3776RyQRnK3XfS1DvHXrzbEPShKmvUpsPTkqiD6igbhWx7Cb5wdxSjYMUBqRg3tdh",
  "key3": "5Zy43BNntmwyRfpwWfcbaSkwR5w6VpP6CwGTkLABweMaFNGzsjeFb8uJTQ6vSHeczk9d4WKNZQmLD25PM6Y9Nn6p",
  "key4": "4SfH3LWTjRCmbefkrbS1uxhbTJFHs7Sqqp7Ahs4WS5SiY4mEEuFaQPUrRjPgczse3vuKNnio92dcRkB3aomAeHUy",
  "key5": "4B4cm9d9Mb8daX4JPrbrn6W82vGEFtENqEHfMpbn4hy6i1oR9GfGuR6EiCBtkJziVGH5Kf5WFs6XfTnBJKJfnzZx",
  "key6": "2QQYVjoYkkou2em1xsLvV7QREAVKRnkn3LhwCvVsARfE1D8vVuoEwywbUXXXUhQtKerMJRq1FeAzahpCTk9hhoPv",
  "key7": "4GC1ky7GFMNQ2H5o2kgEd8f45BJc3yeUZFLCyCYJMpdD8htZ29v3aJYyoJ91AvHb9vwC6KXKEEFB4AWKnKDx2ms4",
  "key8": "4uMYa11TXrVXyZEsojDkqhNmqcxRxgMbVwZRFA1tjSr1nN76qMNrkkbbY5JZQpqSFEKvcUYjvWQBuGbrz3YDiZ6R",
  "key9": "25oZmLPoDAkghUBJZQWEkgVtwdkKYDdjWFLBeuYBQAcnvL4bvGTHVgUkTRzx4xg4NehE7KsX6QdQFjFnUrYE74aS",
  "key10": "2mhby9fbC8pPX4bWqRxpaZ7qDVtMuQ1Xvrrv3GGEPqcDfmorcqKQ1Afqmconxn9qQuM83yuDkvb2WPAxi2zGM7RL",
  "key11": "2YATbXpeBhdKZEU5UEAkyxt6kXGgNA9RVFmJtymucaBUQB4xY1siXgmHWo1B58fKE3SYXPuvruVHHfanHddUf21q",
  "key12": "269UKfugKUqFYbCVavu27brvBUMFKiuanNZCUV7BXHrZPVfNzKetaM2zYF8vAD4C8sNBvG9BWEqkyGmpuQJywaD3",
  "key13": "5TnLu3zRzBR1LkStdNV37JyB9B48W1xU9xUQYr7cDqWeuMETY7vJSeoyzdqnGqFrcKRSMedoJcmPJ9Y9rqgnMDTq",
  "key14": "4T8MzhMPWZcn59w3fkf3PRTDjFtrD2pSLDeEd5m5DnxhBx3Q9hoWXLbXii5wh3rhUK8vXJqgVRSg7ZGqYW1Ge2hX",
  "key15": "S8RUVXyV9B95RgYnXq33QEySASHEpV9acSukcBbspagyQrJufSpwsHvEGDyEby9hmNz7cANku7uGEMvGNStgKKi",
  "key16": "5zQENZPbDKEU2nrxhFrtL7MFL1hRpVcxW6Ptwtb5xTo9Qrv8AFHiNpwsacgYCq5rupZbyQsNQwoK74nCaS68aPkP",
  "key17": "3Akbn5MR6hU39vnHpkvd3JaaddPPr8JpU4MKnTw7FgNJCoZkVDMPQXb8rawvnXVWWxwf76WVXJmweR4RVfLDWh6J",
  "key18": "4MZXJ5ZUco6dDJAxJPX1Soo3LRoiWDYr5nxZyqvyTVnnssT67oTbyn7t8vfkBMnthCVp41hAKjLtvzodXsP3k9sD",
  "key19": "4n8F8TNV7DH4qCL2uvScc2fdr3xi14XKpdcQeYiwWTQEuNVt5TBpyb2tQw4D27PuHB88wttqBTngs41JiW5pKMhB",
  "key20": "52sMB8xjVdVdCynMdRzU3R9q2kZJdai1WsxhfHbygKU5p4kxMS6A4jYqeENXA5zZGVuC8x4KWxK2Q7jiuvkqSmR6",
  "key21": "3cxHwZDVZBtBBPAaSX8YrYz4gwp3JsSg5Eq3iY1SFeiyxXo7yfF4fCGT44syFCNHy3Wf6Ca9YVGdrsjqbf64dHq4",
  "key22": "FNBGLA7KxVCwFVAyMgX6TAQCEA6VHYKL5eAtPwWG1LXr9zKMHKwWwhfZ53JCv67dqkViLwGfvvZLmotsNUPygyM",
  "key23": "3r66G4GBPTPsUs3PEGQRpZYdGFRtctfTvpuHW69gUxRzXnWSXfYctEyz82nY9nRK6c1dNZE65VVZRwAT4FZxKpb9",
  "key24": "4K3NPnCbbKGvJo1cSf46SATmQd3GPtmooQ4jza5DfEsUF5iH2tgUyCXD9ZqTKT75a4tCWYiB7UrDrepsZKyayxt7",
  "key25": "SrTbmEvWjLd9qAjBG712pm4kzpqw132b2CjizN3MFCV2aoKTPuBtHDwapD4JrFafFJWegLhcAEGCEirHKFgXGrd",
  "key26": "NkUyU3kT5VLf8bnDToJEMyB2dE9xhYP81NZuQoxBrNwHghBjRQxyTQpvJNhWzFiDjqJnoLS7nvN9HyC3rHu2zxx",
  "key27": "2q13bpLBpUSEsQKX1JVvHbb3kRKtQjUiEbScXp9JbSxP4hDf2kF5RXASWHKGnXyVeEhkcbWrNToLCYkCkT4SkG1o"
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
