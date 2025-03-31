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
    "4kGChPwJn53jEKcmEw4nL2xjLhqq5mH4uJAnmaMjCeAziFFTsygKPW9hwu1ALTnuwQzzQvoRWBC8Gkr8UmbP5wpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z761rP67nrSkqnFnrTdxEjdWT9haqWgKHDESo1ADQp6Ybai7QKiCcZPQgWcdJ9o8wFEPwmJv1L4Cye3e2WXHq9r",
  "key1": "5gFMdWuEatdnum6Li3j98pgeT9FLJSMMtMGjNhTsFDeVo4HKKqReJ5XcjiJzhxAvXeQUxmGrzNLRULifPUuyE75z",
  "key2": "2VBWS1kBLubndzwezJ2JY97dN2Ze3LCM6QMisDz4nJfP6ZH2V5biRR2aFFD9cBaCcw6qnK1NKcgiDXSWEgLaQmnQ",
  "key3": "56VfPyrwy8DVDt7gtwSdFqfLyx3REWN5YGuEzT6ByL7CUCKefJAsLLyP4K1hUq67sU9aohKmznQSbstbbov6UM3r",
  "key4": "5URWrdTc1STBfCckayjhi5XLvH7Uy11mQZWyspKwUqrL3WX2odupCULeafEtEr5fxFt8cr7T4cGJf7dj969QkD3j",
  "key5": "3YDsTAFhkyT98YcyzAomZ8qbhd2RwQd658zhhvgwSHcQL82gGxG5oyw9BqCgzseapeK6LEfTJBfFFu8WGQqMLJeR",
  "key6": "4y9HG1TR45aFB8KQYFVuvRAm5xw5BEEXrJrkQKkXAZikd547YcQa7AYz7HCuYpwcB2oHD6EkGbr47LiL2x9xb2Ug",
  "key7": "2wRWo5ZaFUpt6EJJAKWxbPm4pEkmnggmmy9d8jEwiuwkXpTo7Ab5WMd4jA5NaZR324uuH1UKnNwKi5i9T2Kvaonv",
  "key8": "3nES9kHfUtydoZTaat4s7zwwxiRe5Dy1Y7MDpKvdibPbP5diaFuTtG1BL6Bmkhs9W73pjRASH9gcJbDaVUfCueza",
  "key9": "2GsaaespE3qZB6SyW89fpi6wHsqS3ABqGfvbq1Rya7HUHJBmwVm3Wo3QjfT8yeaFY8S1Bg43RDYvr5YMNHwpULGc",
  "key10": "57EkKry4EahGDH5XkH3zRPNoyeis45hXPXWGi5eYXtkrEAMDuNkWckiq4mLbBLYEgAtZDp9PAwHdBQ54HHNDEFUc",
  "key11": "5nu6qJfHzxhvz34fqLgteCkz6vwHCxGi8Vd9EDMsPURTcamZfpkWTYSyu1axDjq5LTaagwJEjqWWLxPFhw8LQ74X",
  "key12": "2FSxvq7KN9M1yURaUgrTFGSN3ymCbAK7JpWmkuakRwncDwM25iVxdSSLBKBzTa6EiVgwsfN3BjqH86htizRXGe4h",
  "key13": "2YCVZHLv1JaLm7YzFVsfey4itEzAANYXZzS9aophX5LHfV8diDVjXgzBmfCQjVaBqQEKakKvgWEHtjYh8REbeMHB",
  "key14": "2Pr55jmFtvtg6nxoNzqK8NvgqXta67idBZDwqfyRhe5vHQBfVGNrzLK6arXQtUmL9Vamjud4r7L9Zc7JAZSxFVAb",
  "key15": "4YNQdXBc1FE7cgK2tnozLqgzG79Pchm33M5nSBrq6CZHuJKx2KoPTF56HDHczk6KGV4B5VjbjwMc1Lr8VErP4avP",
  "key16": "jLVPWKEsoLSNHnqbiAyqaiJGPatPGLENmtEsj9XFDFG3tMSd5ZgenAVsTQH7aXYsv2YcMpNBcjzavrkgGx9xE47",
  "key17": "5cxzhx5DKeaEyZLbg7MTgkK1fyovAUG4TY8C1pq8a8wWHYt4Hgom3eRFKfAGaXkumC3kDMXwj8h9FZDJowEnhYNg",
  "key18": "2xaKGGvLVxNdBQKJ6kAms4pPzgNX8hn9KHCAMWbHxTE9bpbadjeTTA8YFRPkxEZavyAfi4rc47prJBkdj3U7hHbM",
  "key19": "3w6Dpzbt2U6ap8i7CR5o8gSWoM5dwjLi2UocWmg3gciDAo6USoJbEpJj46syuNMupfSKwJ3Dxfv3PjKNSuM7dG2d",
  "key20": "4DhJLAjfRuxNBWxnMt1L87WQDpUiVBWweHXuyFfw6CwRtMCFfzZjQTCfPngbgQwQwM884fDkkmjd4FPXSkBU7SAb",
  "key21": "2koP4LfK71UBTk6SBPkKUFsroZJqayn2aju9b3GEgTrCYWHAxjafDhnmUe314Pm4xuAyKDvtXC7S9facFVJvgL5N",
  "key22": "5iu3Peig3XbzdHokgY87wjBx5MeCbCtvajZnABzW1ZpAX1rJuvVbfSokBUY9cJFut99LFqcGYdu8CBQBLG9LYceq",
  "key23": "3VdyQhJXgmWDKbQYcbKbbxdp7N7TQqbT8oVVtNjkYKhgCVD9CPXZPCCY6U3kH8aFMtkFEkAPGu6mzf4Lj7rkrjky",
  "key24": "3G95BBSqdGFp5K11WmWHDnVnuSriYkSYJXpo5N12qyjPUdM4auknuQxvfCH54Ki7XAJkSgvVTbjmHy1wNh3GK4Ph",
  "key25": "3EXmDJQJbCMZCck8EQSGpBoqSpRn8Qwj9cxq5NomvTDFvdPRrtshaAvXCTXGZugckZF5ucN2L1fXX88W46gWbSag",
  "key26": "2CZcetrCCALTehmRv2V7g6KdhvzyvidtLRzgPqezNGii2ouVUeCS5sZD1J6PJHZK6FbTafEXs1AUMDJBvj3n8qZr",
  "key27": "3SbYeXA4y7aFtftSuaXWysEoaC7vwTRHgozYmWaUuUE4nhx4ja1s9y82oFroRWW7Lo8mcW5gFhJJpMagrgmiVJvs",
  "key28": "4h5EVWaXUQie461WeJ5JxigTs7uJUMA73oeUMbfsfnDWgsXga56AFWoDR4dnywfhSqJW4wLZLd6JsKd2EhAyjXQx",
  "key29": "3ZqN8UY33mdyCo3wXQum1VU91u4HXMEVTSNruGDamk76wZBSqrNRAj72jb2NbUnc3ruACp4fzN1KMAYsUmQ7Wv5p",
  "key30": "3t7c52dJgd8vcZVres27aZe23vbWURRok7fEefs6jYwKzrgTxMqDsQb4YBuRZQdU8PngQWSXyWYbbxTqHRqSAMVW",
  "key31": "22qYFfrvwaCiBYtfHpb45o3ejgtfxYcB7uioo2WKaVHcmtQ4XkaCdjfbxBsZJeHhPBPDaq7HmFWrVMxgLAh7NtkU",
  "key32": "c1S2KfvXJWPihVcJWZoLuU99GeZHQi1ieMLLrCkNCKjokKMBH2c35Ax1sY4fpNVLcizJGBTy42r5WE4uRNkrFbm",
  "key33": "4wVT3UaV4kwiFCvHuoQFnW5rGRZM53kuyfQL6A2pJWrMJ2kmQSh1JrRWVC1j676oVDSA3kguwGz8drJEe7FjKbMC",
  "key34": "sjcbfT8A4nT8iXkgo5gZsh39R3xYAFV6tU98BvbAvprEZRNr8fTkMcgHvLnGAhM2L12K4SExAkGE5ju6fPgTeZb",
  "key35": "58k262mpdf4VRTJEdbn2K6LpkprbfuWvDNpHpy4azizLEWbZ1SjU8U9RudkzxKYAa1JfGuUjagr7KL2faAZD6TKx",
  "key36": "29itXdPvoY9Qb8fWyTpDkADzM9L6YfGzh7seoc2t5pE9Cnxwubj7Pvqaet7zRjAMHHnZUeunXMeA1yRmS2HBRfrG",
  "key37": "5pGYhwWYxfp8WMSYHzwUSCWhEd3umVm1uSmhWoVrhcD8Kg9qjH8F6k5ZeAcHPrdPk2dbnR7EkDSbCSPtowfDQTiA",
  "key38": "2Uaf9i5LpQLdC1FabVK62VBrz3DF6TKxqSkNAxiT7cgawzrMfTp5qQjTMNdh9kqLp2KPQr6maz1nJsHLC2RmUCYN",
  "key39": "5GzSHSnv2WjX8tMGtJ5TAfr8DnRzBkRKauxaq78AqRariTyYfcs2VXn7eSy5ChyZF8ysD651e2CrVi2xWssdKzBJ",
  "key40": "5Yhvbs2mS2eDh7i7Xs4iV5pHWuH6kjW8TNiBkVAxcGQGnScNy6cjojXrcDd1oG7BHmwG5XAB5WDXNCWgB59EtVQx",
  "key41": "64vkSccSxnRDJW18HwVnuKfhzP6pvmFQ43mg6qccbQizE523oUMdMUVYhUDjYsjx8gbe87pdbieypQ17gQCKuNb1",
  "key42": "jixg2WgPEhNgT2XLdsGsnjAM4zAN2SGvLbJjEeKSS4vuEftQPT5TxgVsh8vM9saUPqaNrCR4DPc8cd128WdmCRc",
  "key43": "91mYtWMA59YoENSgnXrygZUnxm4MAkTfoPUjbogPyxtPeMGsXENtHWDWmQTP7a6vFMaSBdXT6MSYqekuM1SJow6"
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
