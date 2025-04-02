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
    "539HxfjBN3w5xn2h4ASzjJRzzymfqExg21wJBQ7vcgdn4TaoAZ2stzd2iMesMtARjtq9YWEz1RcRr7ZxLzTJ1igJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SqdVpcUDkRd3nFEfcE5qefAAqK1YonK5fKgjfjdhikYRRhwvXSb4Jn7wSAiro5kgmeMLHz1dxTftFtgxCKwdcCe",
  "key1": "4YTdxqQgGMVMYGfN2irrVQJrgmXeAaT4Rg5WzizniCt9mNE2XrvbfRiuhRh1DEJMFEyGMZ3MZ7A4Fe3FvJCoFufP",
  "key2": "XozpVEiExj6YvtvPuGCe94VCYWtuoKdnXSU7oDudobxNC4izQGpJdPaNWX72P8ArR2vGj2NTCdStqovn5ovNABN",
  "key3": "z25GxKuHw2AYdfGL6waKGwFSizmYGcM225U5kDaPSCLEVTffqWd9PTQvcPvnCVgWC3zyADJp52PpPdWDFUbuR3w",
  "key4": "2c2QphsyyMsQiAwJZL5McjvVK8eC56qDkuhLiANqYjcXMeY7pjio888vBoTrn9GtNVdWJCvUQoxhyZGgQAGpLom8",
  "key5": "3U6LU8hAv2XAdVCvFL2oRbZFDEntf6k4SRnHDuPfQkhDrvwmwacPekyoNYcwP3pVnAiL1gAiRA2K9pMsdDK2KPDn",
  "key6": "45ZACHpsdRCAkXXko9Z9RgFTc18TTo9qahdM7hToUBZKBTrAy6ERA6YfrBr17ujW8NqMLSKBcAFxwDanBWuqbRM1",
  "key7": "5V9k7frKoJSa75u6HaFxLDQzKxte7xjTvPz33T5owoRG128ZjRp9XotoAuvftDFmLxfQtkMZxC2TAZt6F86MNAYN",
  "key8": "dQpwUspHEDC3H5aUCLwymZgmEQruMtkqQkqvGkk4T9SCu9gsujVJq1pWAGsVTFL2Gc2kasKhqrBXfiCfQAFhNWZ",
  "key9": "mJbM6eSgm1wK2hSAStYWSr3nP7RPh3BrTXV5gJhd4GA13SiWKJX5QEA9J6iZAjqcpVqhxhpytAacQEoKJb9ziXp",
  "key10": "5GKBwA2PkgkrvH2kwxKE3rZRK4EN9voGx9RAwhxGsGXNsaWpuH71Yv5SV5vE46m2cr7KurTjCh6F1KxygAkjSpZR",
  "key11": "47NgPozEcWJHPWP1jiTywfJivc91NmiP56HYQjDreAerpFbringfrwb46MivJf9kcpQRZN1CdaVFnFqna6wACRBS",
  "key12": "5mbyDPn12XA952mWBixNPYviN5AmTeiCXczaTnzcRboBQL2MCXSzhcGmSZ6DssLhciiBpkcx3J5iQEiPLcVnYG7X",
  "key13": "2KVGCrsG36pCJFy2o4rCd5nGei156Dpm1zBoNh6RPAgq8sJjrxXReMdfpYc2LLMt2xZ6tVvSqH6zW4ZptXaPZvnA",
  "key14": "4FwNzimvCTKx5VrXtnDex9mLZrmrvHjtFZET1kJMonr62MxghTWuKtPu443LwPFojVzJnesjKjwC2QbNEfLZWSzg",
  "key15": "44KcG77NsPHin2tqodiDEgeP8Xv4Rtif7o7gmBueBCwWN494r6iqmBZjoLAMuRtfuCoCoZ7sAKynRiWKYzWQvkHT",
  "key16": "GZx6utgMDxEkp2fn8i3DUsNYWQzMjdyGd9kKHkJHvkvQ9NjdnHbmyHSJJS41KrvW74HJSBuArhVemvC12GnzN1G",
  "key17": "4nMCNiSDFiRhfc7BebcWEvS3j5Fgw8f8NJpt1AfKqW3b7GZ7Xsk9ZRcP4w7fkVjZfaH9gsDTzPDMmDsXjPTYQqBR",
  "key18": "4GmQALQzvxnCuFx57YLuSi2smhAL897Jc4vFBsWY2CTrv7KxqwvXFZHgNESif35oZZz7VmLXwoEVWH9PS4v97T6K",
  "key19": "25YjDknhvxfPYwKy9fcrjSvaYyRpHyfXygQQHAPpTPr66h14ymiphqdY7fmnCRFoACzHx3FimeQANbiEuA5BdFfs",
  "key20": "249ML5fcnLzmeEnus6DNkKr2gGKzq5t5J6g8JU5PdPhd3xvaLiCz6uyWnXHp1KPdgy64FqfSTBMK3izWUW2Znc7q",
  "key21": "2bARUv71vEsxQpnvMw3kSZsqTwRfBrb4rG5YayMjZDwvF3b3h9Eq4sdr2Kcsdj4S818eQuRmGNHYp2Kmp7sx14Rc",
  "key22": "4rrmwcJRXZmV226KvXw6VCPsXJvHGL2m7xFZQ8khW19A9TFpgJgfThFKRXjZyTw2tDynpMtRWfmA7XDCck6pmkao",
  "key23": "CZEZBTQX78h7xv9N9WkcDJqZmtRp3qxxciLspdTvAmMvjHpGEQvdVtaQMp9W6SV2nCiaUjWE9RBUzPeLkEuF3D6",
  "key24": "22Uzrk2j8RknkmPTrZPzo8VhWA8FJ2RKpdC9V34pQdwbKJuz9Br7ExS9kDr5GWnpP7erwGgmCPhsPukLNnxZMMc1",
  "key25": "4Z8x28xkzZNykyNgqz4EvbJpBkzfwCFmNU7kiPQ39tdwXXxPfBCuhv56FnMfGZuLNpVvmz3kBHo8fXT8ZHxHnEmY",
  "key26": "5efYVD2VqKfgM9BVMVU8Gy5WPJPygWGth329aHCjCd7Umj8WHp6Bc5RpBDdJpgWUe9EownVG23BoYhdv1D3MrKcB",
  "key27": "t5Sb5qs38qTEMw8dBNipCuF5x61gSjkCmxnj6F6BGQWj6sGGd2p9vSpnE96hxw45bV6UxKbdh2UMQwZJS18Y85M",
  "key28": "3QfeRzJBrFuMcoWvSHxvjJPKGf3Tprdf5RDyNWk9NGAk6pqX3MGQAmXy8tKrWgXTyfFtDAofkiUwwJTPCKpZwwyw",
  "key29": "2pXjtiKsQvR6MuwDYnj6JryRzCEGTKUxbcoT9TET7AYbGhN6v6Bt1c8Uj7S5RhNthPo9HsvYXRpui9jftCjFnbcs",
  "key30": "h1r3VwHpJjzjxrfjT9C9htEi41ZgMWxF724m4bq27JsbrqWHVrhUvBo7dhnM1T6zR6gzNmn5kVe1rYR7USTUh9y",
  "key31": "3HcD5UbUGpPavrzkUmfVMnx2VjQHAx8teCUez9zGJD37eAfVx7fAZ4sW2Y2yJ5rDmrmyf1vYDzomVwLPgnvaA7Kp",
  "key32": "649z3UzUYYq8S7aKch9vWtTtypNccwW1HuBDSSPBDFKiQRsSshwqW5EX1hdesbbNN4rfncHDCSm7KjDUyKugiyYn",
  "key33": "eb9zxDUz8FSAiFp9UTeXLxHX8Na5Du23WWr7hEDX1a94c3UyRFJXSpMwAj1sdK66hVPiC1AwNNsvmSmHbxhTefU",
  "key34": "3gAHdodUtJ7pkNfnwyXNPXsASbdq764ud1XfnPj48wwr9NpfZBjRPxWi4UDjH6unuEn6KqKCSZau5gdMHLiTdmHU",
  "key35": "5cReDcWXDFSj9NhsTSmW9fgyzSBR7Eh9gDWcgdzfSKNoNtEbmesFad6zebsPk64MeiUyfKG6C1U3WTq8YzPoK5eY",
  "key36": "5N87nZgF6xqMHCBoZto2wpypiyw4RyLDHpWimqYM14eT11F9Ygm2gEKUBAqtFt4GHGNrVePm6SdgZCgZFA6ffosV",
  "key37": "3N3SgWSHJBjwMGYsaWp7xfsE1reZRq6o3sjEKCt2TKHPYF1te2iXhwE9bviPhGSPpkSXhzuScXfjWwB91ao1DdKH",
  "key38": "62K2f2pTgD1po75hzuRrRReoUSdoqFMiEwAVhaXuirm5b1VyWZFHLu15CAWetn9jjiurGMM5yNeNAxdG5FzJw57v",
  "key39": "5BbMdDVjFZD2Yc3t8me2FiRAw6n4xrmPR1yTDYnamPxPSLiUQy8YAkuxjLk6qwMDyLavnC292F1kyaDE3j24QgAn",
  "key40": "4Sm96qBW7bapo8Pr3weVvNeHfMJsoqziAYnFxjpr2rASRpWDzeBAqtuqVKpgJZZUwE7kvfTJeg2erMsVTePqH4LP",
  "key41": "3gzXsEpFZQppuJEPdq5NpDWV2LxxERFBzG8MStGnJCVQtp3U1x23VMr1QZqweAZiKQDYjgzNrBUUqsgetF8BZw1j",
  "key42": "5ov3w9LuT6wSp1foMGq5HhihTJQa9Hb6Ww6LBsHoG5iq2nqeqtCJ6buQj9fNRgk6ftBcZw91ycVQzPdqHtFm8WEg",
  "key43": "39aYLazuacoqrPJvTf3PJRZs2zJWBqPx8jYM5j6Ha6Kx5ewMaf7HhzrTFBuEfNpxoe37UTm5uFV7SDrniyjHteLQ",
  "key44": "27taQFUjarxCbRpkGB7rpZehuZ5k5BqQnDTQTdNpM2aX8iAyy51w1NKJpZ6zHfMYBbhmFQMejjMeWqzmeXfEtikJ",
  "key45": "4dU1yCijAdShfdL3K76LcDAaBNeb5NQVw3J21sYbEJ5KpFsg4WYM8Aq1i8UFYWXDT2RSi8HTmZABqFQXQ9UvuASt",
  "key46": "1TwxewyED3e89W5HDEj4M7PQH2sKj3Lc5byjWuAPTqZmmNmvE9zbVa3c4wBw5MPLUqv4DrSnqRfetRGsR8QGNqo",
  "key47": "2wjmRjmSzYJhokoUN81Z861WN1ND4F3kUbtm6ZxWP26JvWp7MfhRXR5WLh1tnuAsoC2vRQ2kPVjwUnNeieFgjvh1"
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
