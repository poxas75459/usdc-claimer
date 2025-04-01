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
    "4THw5DG9Mc3jVPHMqmiXz6KEpeX53DkVAbJcTv18VagTDu9k5p8TdUcHn4DKxeHdtWiiqGuAKzpA9vyswfjegS9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuoArvuaNEyvbynG8qFk5DXMKhso4z9MBkgxusjuAX62GWLJMUPwfUzA5Y7WV7MZGyuPyperaxi7n7TwrbXTgzV",
  "key1": "3xfTGA93b6RqzjS6snLKD8WYSZMcPz5Grs8j97DeFAJfTcS6ze419vkVrcEZc6v2DeB8cSN8q4o9FNxgWyWAMGi4",
  "key2": "4pQ92krds7CcMDK6bG9VUmz6ZNJhyrAUXQJXoXibdZHxPnCUDCrZKFTwofPvPwC7V1xWpobUz34iFVpLGGykA8Aj",
  "key3": "3oay6werhVFV5gzoRydnSkGTLrhHTSRHFuArHrdPndQDTndcLxaWDwnxkadKWMPVWFWciR9zrtvRwxqPEyfsGQ7r",
  "key4": "3wDAokcddKbqWiQEpqXdvdNqkrb2t7iLssTucYrn8MqLtqyXKThYFK12Cgn8qTGTeXNcZU7t3bQgJKcNM2FQ2oqJ",
  "key5": "2noGeUspsYGNtMrZg4ZoVW8HwqXkdXZ262N8z6ZBRBmSvKdM6ptsD22He4gTCZ5EsEMZYjP3zwKiCx8Ndm5bmZCN",
  "key6": "BVRnWisLWN99sYF62yBYsbarGN7RfDpMm3qCFfaE6yx2r6BJWmpfRBXqC9MEAiUuMqtY9cUUbfNkzVGGYTFdAfH",
  "key7": "4LBzYNGmotKm4xttVYQqW8MaA8yx6CQW1xmpBvCSpN82uucomKEiZQZgyiYkAkVWxba2ZkCrG9EbGCQTVPfPH8GQ",
  "key8": "44PWBnYrAtRBQpzUnQEsWZJy8kwhezMEquaCqhFe5agS1CabF3vffNvvfEaHz3xnUFXcEM1K9V5nuB95NkPxgsbT",
  "key9": "2s6tte4uDq3Aw8uJh15Yvux1aC975Szxm1RiKX2W87YUCkEREEZZbTRtsjuidgsJohdUnEDcnfbqjFxE5Rfh9mZZ",
  "key10": "2V1Jn9DpgDixYSK6Sn52dbR1zsseLTdvpNtnC8ZZtSMv4XJuv9NyXtYomHEDY7ivfGgKPeo3w9F63EGE6LKeUWyk",
  "key11": "5iEuL5uibmDeDfWEyoxhXGpAmCqHqvPBejztMdyB1Ce7b4m81Pt2dZw7uj61cLm9azVQdNGyb5jvq1xdrzDN4iEK",
  "key12": "4cjJYTPPjoJRTcXZweGAstKkBnMPWu9svGq9D87BPaQZzKwjnYXdiB2HggYMFdT5Hy1AA3rkfwA9Zetcqq6mmXF2",
  "key13": "44DaU3dG9vdpbHdz1GnnXKioPBEBhYdDminVcD5EwjpdyZpXSwC1QKsobz8eiUxAtLD1t1H3GHHiFJj86XEseiMz",
  "key14": "5yqfD8ZB4vKCD1iwntRd52BQzZQEmeTbcUMzRSjHp5hzrT9PxPLPGt2uTio2CZNWDw5vKnQM6ReL5q1TRtQWpaTb",
  "key15": "55d48EmeLH4oMyhCHGxnNDKjWt5wiEgJiFt3huB9y8onUQTjhobtKgRvq8uakK5tbPQcwaZNTZvUV8gYfqPDNT2Q",
  "key16": "5Nh8dy6ZgQwDyCPaQ7k7NiveUxU5c7798ov34ctFf6agaRA5b6W522RKRsYmHz2mZb6YNSZGrmKKcPjR3QWuyN3v",
  "key17": "4VpNGe6rFBs8q264ZeSszmDBpahc1FBYatPABdQWxsDxQ3k1ZNWX1FHVHEePCycsy81dqmHVn9WkqEpZAqpuSGWz",
  "key18": "2NpqwDRGou6YExk2zkydZWXDD36bmVmiPPEy1hxnfEn2LBXFMDasTRnr8Zho9vLTy2ztbbhoDJGEy3BAnpVLdrGb",
  "key19": "2pKph6vjtGGTtiRzBZKAr8kwGVEF79vKFQCzCdFYSXE3PPqsLLTqgxsavFqjDgoJn3CKnmbpeUqXYYyDxSSTRPWY",
  "key20": "2oZwwHFxojNLv85kA5qNRPQaZRgJJUNd67tQUBD3Krp6Bszn2dd8izQuwcAxrVLhnBMkxVeWFRLhmBLJC5wbyhah",
  "key21": "5kgPQiFxfBteakb9iSGa5UqVyLqCHnxK3XhpRDdUMRxFSX3kFtZDvf4sFCdgYdo7NKybKGKoJoyzBxwVgpDincUP",
  "key22": "2uJYuDSf2Rz8L5x5tM2hKN7FqYPFNrxquqvseSHcShTksD8yCVvZCvP8Wx7sVjtDv8yRyYLkLvdMWof9JvkARfCe",
  "key23": "39XgXva2NsdLM7pamkX4Ncg1EWKnrwLWa9iP9dp5aJzrDUqbKdVhz6QShtKTsp1Bgjx7f1oFLonzpTZub97KN3vG",
  "key24": "5qW8Euurv3p6E8x9hjWRvvGWivy3gpG4ZgdkhvYu9jsou1F9DfoUPASdUgemidDemGn4MRrYPagpnWb59rL95mmu",
  "key25": "4y2ejXKCMpXdznXnsoeDfagV9bfXtXZQCvUaYAe5eTaVtCHxoic38LQUWWrJS3NsqWAwdfE9rBU5roDtv17UNCAw",
  "key26": "3KpmMZf479GQ4Vkc6zdAZg9f1x8upgkzKtzX2CeFVZAFVACnLpmPMWwnWQeasjU9D7HHStGv3S5ERXuRJYyukc85",
  "key27": "4pPQmKZPNgW7aNpfRPCdTxegKAv9BrXwB2gZNUmLv4KHj3tNFQTuknZrdD81wp99A1L9tUSotBkbJovBDq8JNMSC",
  "key28": "45mpcCLuD9h7m33JpAzDCQUtRYnp3DjNF4xy1ikEa4PBp1dQH2ComvsdbZoMWecNTdhodpDAWRQtWPjKzRgHQeD7",
  "key29": "5hoqA31vNT7q35YDgyeR14ttqmt2jxFikQMpXi69EaNQVKVPM7CBEP86f5SAP6MFDsymJyQRHCexZbUkHphFYuwN",
  "key30": "zNBxenXqaAt4ejxdXD1Nxv77nEcAE2tocNj88EFiU9ju7n46xAEYFcz6X2cfN9F189RtxBDwMTUBvHbyRAQAK1L",
  "key31": "jDhHq3mTfxyo52gyCoGJBpLFyNz2t7fPRf3PN5dHnACHmEjvLwF1Qn7RPfTRcmnj9kgrwd9QnBUfZUznTPdffB5",
  "key32": "VXsxLf723AHT3YkoiDf57uk83fcDkM8UfAiJHa2wACTAXCyUrBFEYZ95af5ug4LjFVJQ9PDkpWngmmSpBHCwzaF",
  "key33": "5maVQJ5MCYSi8f3rqFetFWZeXDTBdnGgGtZy82KfghX1yr25ukKniEpubXB4bvS9TtRQDz8HvRkKNoKpcYgzgqaD",
  "key34": "2DLTuETgAiMxjhMFZ1Rrf3EpEFYwyMrY4BQm8Q8CQoAsFWvBDFwvKpQwHoRCwuA9mrrGVeW3CFxrS4UeZGyXCDr",
  "key35": "44nkQ6aC5ZTxqsh6Zj6V8u41L8vM37DnL8BBVpzrNTU7x9dvM6unRdDBnzgTAHVvfTq98xJhUM9ftkJuGpdNhjvv",
  "key36": "2e7b48Gw3hwdxtbvknTrxTZ3t4NtvkFrwa7TCw9MTxG2KcQm7CZ4xVyMXxZoq3Uavzj3tnriCLzQ9gVchPpJ8tD1",
  "key37": "61Mtz5hdgJb1GKyUk6NAj7x1fUL2xzsiisLzdh4E3xWmeqAHiziyTPmZf5tkk87GSsUCGmejShVoMthVcjAEvYik",
  "key38": "2MxwuPWZTVzWiFSWX2T9vwVTkaUFZPXriq5s1QqdkzZQMfg8WgeVdtSXAdAEkci3ip1XXbndPMKEDUomzLvSkvU",
  "key39": "3GCBdsPY65ETNspVM5nmSminxtFwnMTVmCiSHrqPTftDUTpKneVb78eF16vM7EUQZYhPh391sWe4Nk1tha6ZNgHv",
  "key40": "4wPm4SvrtPUDGukPnxr8E1YrwoGTuv1FfbsJe7F3Q4pNT4HSgPhMcEamehnC2Znbo4xJxf7EC5h4QCKZ4nnZkFHD",
  "key41": "5d1pbfgdLYMuJZxhLbbRX5VP3v88TxD8KmgMfn8Xf8ZsR7AzNmGNKCBZMbWkVrmYzzcGT8HwJfSsDUmQok1XjYc7"
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
