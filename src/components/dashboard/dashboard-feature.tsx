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
    "bxyakmzgHHsKAod1WqAV5CEYe6VE8oD9JCVxkNXw82YNpz8aVLXRRKU9XGM1N4MP2GRxTh99n62VL8RBJv6piwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRW5kjwZUxAdADEJAFhwhHH9tzNfFc3xtWtPKCiZm4RFDV1AZV67WC7vfpGpqtzWB7ouahFrVMHVrFv1Ju11Fkf",
  "key1": "2gVninjtpb4TxJMgC5JCPuU3EXieUxU7Veo6RRhLH7xFjzwp2uZT8HC3XVC3C1awKcseTuGR2fErBRmYhrqPDypk",
  "key2": "57k9tCnNeECh8WXCHfuBAWXgYRqMfcCU6axwiGBGi59iTN4yLgxksXfKZmkYFjq7oP3g5TdjNhjVsErqGSx8ANGw",
  "key3": "3vPdxVrTMVSDpHMYza7Phi7rsLUM2mnQ5ekffWKEnrNHjKwzqRAj6Le96MPrRjDBDBMokVipWDwWPGAvi2JTVVgL",
  "key4": "5aYUkuJs1seq8VBgSKM1Gbpurm73TW6TNorFTTbSvF1qGLtSiW2iuK6NKj3epNedaotaNcwJLBpAjmdMnGw4ZPsU",
  "key5": "5dEJdPp4rkAVutTADfG4f8oRVS6N7dbsnanujeRb9sbPvuuJyN7hmcQyHM1W6TxQxn5vk4vQwGH96MPw3FwYRzx4",
  "key6": "4hLka7r97ReNcQd4Vsxvo4thd1isxYx3R2Cq7m2ajsWHhFitSYvS6eBUaRa743i9WHTWKtPKoYxfD17AyVx2LtQ7",
  "key7": "2tX6chY6uPndjEmiwciXfRtdgoSyx4qDi9Q33kKTWZ7zHvKL3NPEJFBCJZmhkWTopH3nLivJU3JaHvb1Jd9FTx8S",
  "key8": "5YduUyWswBGCtrWdCgPMHjttVXE7u7PbuNX6pWscw34JFWUwcCUHTCfUo3ArPdQ3K7KrZyuDiz9WkmGXvrFHsoH9",
  "key9": "2YmxRfd9TRsAyG87vZfHGHV8C9rNho7awCAhPgmqJF4NhDCJ7dD39XtQtvq5omdNF3uPFUacBB1j1V9cGiEMXTBD",
  "key10": "2WsZExnuSUVzxP4oH3WqxTP5nd4XmqLnhjJaHE1YgQv9btvub21jcRmVz9KosXzENiT1USp1nUzUMJYGMuyif49g",
  "key11": "2sZXFEhwpE7a47awxofXPkumJJ4JUP7qJd8L3BFfa1pXR7XoCfSSCGCJ8YaDM2A9pAyWgoLFK2ZHnoRF2jpDFtNz",
  "key12": "31XYBhGggDjVSVTxPEBHUu7a1DhCLYMxS58VWXz57ZFvA31uHNk3nt74brq7PCEXD6qXeMGqD59QtMjLWCPmpHdi",
  "key13": "4tYtB6vSFSKYqKLAYcB4w8Sf4pdxXTFDEsqCyo9h6RTTBfYq2wutDaoqb4nQAGW7SmbKEAdoXbhwgHkUvAAQPVWX",
  "key14": "2Cmdkm9VHgy9gfpfhDbhBRHE3XmeRuTAR6qh3yHXEkV1bq46F7Zb49Srzx6siAuX1N5HXP6TuW2VHY39GUnzLyuf",
  "key15": "9Yw6rDYBofWm1aaU7RG14EFPK9XxjwYGxuTfEhTHohpEKhaHmN4Z6x8hLWPK2LQSXFpA13G3XzdhqBFUscUwyCP",
  "key16": "5rTgHo2fFrRJXB68N4ngmusdqNUeDNc3GSLJNbUuE1NKtDBqCAfTUKmS8CX5F3kB7UEvHCxyeGnANoxCnrNFJQzq",
  "key17": "4TDWTtdLbtCwVzvXZCrWFCeeY3Wshv8YuJm7SV48JVZ26HNMu4pMjHfB23mDTyfr2V1zCiB5NCzC2cXp78eBN2oj",
  "key18": "wx7EhUhqG2uXvm2APuKCSTEwLTVsAsJhry5uchvPEJxUMFcLTTnYqJ91HjptDGU2VJQjiZSTmPnkjhAppXrECEh",
  "key19": "2ZxPcVoYDqYwwebcqZuzqJ61cbo6DM4raokVfWrMNjN7AADD6CFVtaz6p8LbzDHPz4zHcmerfLM8Suk5nZBtKSnG",
  "key20": "2X5MeL4xEy6Bx6zoxozWtzTefF3DasxCySbAhgz9YJkSwdskR1n3pHfxhVQrDkkJYf6YkjgDQPpHPhJ6B2wzZYyX",
  "key21": "a4oCQpMNoFfPhYXfaAwapyZGAa8iUhnK9DysGkVC8YVqKxGK3JpGXRewnqPSJNTAaM4u66RNPc8QRPFK4pTw8Gv",
  "key22": "4LXkjg21Xe2NHWeLh8k9XUHUWij1QhDq6LMMxqwBqSsJ3pQ6NgFMwqNXuxjBWhSRrYfyv3XQwncpwcWS29sB5aPP",
  "key23": "WqFYRAagd3fPdfAJUcFU8Kt8SM9Jf3zGsyvNJU7daYEQg4ajkJRKJqqvi8uHR61NCKgwDdU9YZq9LmRYwfYgCuz",
  "key24": "4v9nXvEMtt2xYPanqVTSMRZqRymVBBCQXUjpBVcJDVjJDLuSmBCF9ukSkXeAsDHpQQi2uH27yC3zLqyKPFVULi1X",
  "key25": "62W3KipWEhcPzBBa1DeQrrcMcQVEkpAhXQwk8N3sVbN1pEeMG53jbRsB2xNkq94Ce3pBfLoDuUfZJ4oqLjUx6mvn",
  "key26": "2hEkfh6yS9CBCkZtb8SZobVazU3ct9ae1NeGA1TdYyBkUA6M1qCaV7VaKuHif7J2zTkGwP2GxWZSf7T46baMFE87",
  "key27": "4nykjQopQcrfyE8as7mzAFGxnWdGHcnkfvcs9CpWFa6jnQQCYVtizKWy1aevQrgqWktiaK3gaU3WiGGidzfgn8b5",
  "key28": "5An5sSkiYZBoo8KyTvDJ7i92Kgbyt7aumgKjeuz4PoABVaj1cSoYSR24wQmFko84JLiVCWsMm6Ztm9ARHELzncBP",
  "key29": "34u18pGGr6BHcM4WsKYq8M81h5nDpe1u2b9k1L4y38Ud8UNDLXrfRTLSLfHFpWGpvnT5dR74yvP58o4zP3wrCfvJ",
  "key30": "62zo5h1rwq82G35siaPjfDZp2yhytexPW2yBciq5yAuSqxxX6fEmHtyiTG1VMyLfHNFnt2Sqtx3ZGYyWSyKTomar",
  "key31": "e8B7tY8ysaAeVvYZ5HcGkzc3bujZV1FNzhUC7hqLVQHgYLD8rMoKPVuHAHV9TtvYeEMjVYqeAbAijcoT5vqG5cn",
  "key32": "5SSMTo6utWRdYP1J8UzRgaYpieHQtJDMPKBj78X7ThHoyLUPhQj9K7HsugmCULnkKFQ5q7KwQAjffnutpw9TYbek",
  "key33": "2YYts1PuCrHPVpHUuN63XrcuF9X67VxAsGKD9bXLQQmXTxcGuqFQLb6Pdz85MBrRxDLTCDMeDqHKpmVWbtehZxxD",
  "key34": "5DX2vga6mRHsnruYher9wBbU8aPaQEw2Vk3xJVJS6tsMZp8sfkRjNNBc5g5vWFQgciPJVMUUcttdn4APU9XMHePP",
  "key35": "n5zV82LFaePozchEesgJkCWmDeyCv2fP7FXrDRZTVSYkrhsJ6Wfbwqzgn8CLrt5Ape2BPs7NknYFV2CDCp579ei",
  "key36": "3fgFdecUEyEKDgB1y2yuNLnEb2p4GQ9tQ9cQdKPBC6Mog7GtYYU1Rg4urrHVgLigPyp2e7suB9tnr1C4URxEPGnN",
  "key37": "4Dv2AFwZE69pp4aPzmGdqkznRGbz2MsRLXusjqvRjyR85nEH7zYSZt34ctNvY41UoKjA7dZhbP1FKZQVCTSK9X73",
  "key38": "5kKybU26GnQnHQ7CJtKW5YExq9T1PdTEfmc4azyjsFkj537247nD1j1sEaNksGryLszM9Zsmpc9XHbjdGoVWaA95",
  "key39": "3rTMsBeBuzAFvcqZVjbWRGndmjXQG2r6GLHtgtrfCQ7WUzxkVtncSnoRYH55J7soWUiCqyaT6DxLMcv9PwGboe5A",
  "key40": "4YfMn4tdbcJGYQWTnoCpeDFtDLnHJ8XAHoU5dmwszptiTCEqU5sLhyKuxPMX4QeUeCbRRKjzCpK9d9diUC3aEH6J",
  "key41": "5qKVdMZKgkwdvBPdxk24bLNNsWKRqt9xitS4sDySbPzCWWdt8bWndqufJUT5RTQGLBsZYDe1X9XPZntKNSMJ9dfM",
  "key42": "5RGNLFE7uY5yijrH8w9QrNHu92Lkq3GbysXfLWkD7dCufkg9Tak6n5VichyimqfydKszqMgW89krZBANbgmqis9J",
  "key43": "3HiXBavNzmTCMA935Gy7udNWGyCQK5ESDwYEQFdAUj7WrMiYdtrgBETVNgmx5zUi1WipXgqxMaYNztphq9SobLM",
  "key44": "4QYMv8Q2hxGzUv43pFvbPeGzokyAUJx4W4bef52cFW24ZiTVC7yZfncfXENkXFvSCTmKnzgemmZZBvZW5LhFViwW",
  "key45": "4ev7swqbeY5iykhd6D52tP4aZezzSq8VkSxabCg9mHtLmvp9KEQK5LjBwjPGQz2Tft9eXBTDXJ3ri79Uesjbtztm",
  "key46": "3Dj1T7AwNgo2ikmdevHYf7UJTcWGXQPrD2sifNgicCEL5ZC83eYNBXjwtGF3a4SS2kzz5J922aJgz9mWN2M6JptY",
  "key47": "51dabkAqSBG7ubZdzPA9eXoi2AUAgWejyrujPVGbu6TV1vq3H2NHfaF25fDjtDpgrEakpZUWmeggrXxYbz2DYHUK",
  "key48": "5EDBiBY8KUMFszZw1djts8KmScCyvWLfEAUYAEiZ7JhuvVSBH2DVPDEWU3afEiDo617zgFXkMHGVwTo64cEVGp5Z"
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
