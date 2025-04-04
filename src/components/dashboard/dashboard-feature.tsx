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
    "nCgBe2SUbLZs7FbA991Es1TAP9HJGUbL63EsZNoDDtiDwnjKkb7BN2nWFR5cK9qZPadCmF7ZxhombeQTQLuoTQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TewUPaEE7bNrwEMa18sG2z2WzeL5P2Ps47hBm3nDqGdmSa7vz5gQ7QA7Hdu4VpjyteA2iqyVbzmUXJNKjhhPgMU",
  "key1": "QWmGdNP2ckKAZPj9ciHBS72wAaCvZBZFeyF6RtMYCyMEocGLGEBmNqq8HjCBpTXRDx7ZzFdr272LrPHqkhDySuR",
  "key2": "NC5wT4AQuYg8osSn6bjcHd5gZ6ekifRWQcBRJxcmeZ8M3WTdMUbk2MkfwP4g8t6QjVJ7XB5FXdrnM5qxGGnMccC",
  "key3": "2h5mnVi13Lm4awKRW2DH6cMUVyAjdK6uYXnq4ht5MScpxeDsh5EVqnbnMBLfG1rQefCGKLUeP9D7RZ6kywPjLKfw",
  "key4": "4hwe1G95FzAXLvKBBENfFuxGAqwHoGbYCsdpUmjFzAepnKVTcYD4eqEkqLsGDZH1uf491T7KMFapyZAN7bT5Hukn",
  "key5": "2TC3fy2CLhH8coEX9zQnr6kkUnSu65aEXjujud6q6pJtxNrZpSKiasqyPXUMEQgK4XEbCcMpdT3LjaKCTGm5mbfJ",
  "key6": "5qP4a3QJxYC26YAKX9CLxTbuLEkax3DtGkeeBfjRfoXb4HBvSeifAepzU9JriwU7F1cerpsQ4uax6B9z8SWAJE2g",
  "key7": "Ru1HfFx6NKzXaiwBoQsiktm51CYGqUMeB8M6apPTmcbm8NJMjkqywTd7EAGUB4gko4s6cUFYBCBGCgjjjEVXvQV",
  "key8": "5k3DWKgUdb8H6LLtsfFeDQm1Ge332ueYTEp1iHZ8mUv7j1sJSLMpoRxwkVUV7kXiqqrxdcEyBjmWTFvuARU6MyYW",
  "key9": "4YRjAwxjEjaEHcUrbRTxB8k8R4rsEmx63UGWNkZgCbHKztUrxcSUe7vXeezHWbGGVgqWT5Wq1yTAM9qpvr3GwL5j",
  "key10": "3oAYuCh2FE8aC1JQSYE5R5xbWP554Tu47RWwUsH1tELFkyGqe1N6PsktAyqurCA1NUxfGmMgPhRPiCre958LeVEK",
  "key11": "4MBag6BPx5gJscdsGukpWxdANypfhT8qXPXEwULhN1QyYRDQq41oGFFehivsFBEqZGC4fV7uqA3ZiAz74yb4ffBQ",
  "key12": "3QG2wdmDTxE2WDqb8ioDLoW3wxGcByaPF9z2cR9DbRMgSZ3R7g5bPoFWSreGhuvpbarJWQcmiDqBbB4WXWegAaFH",
  "key13": "3awuQfgXrbVn8NRYCUcboRKf8tegbNDxoVXSJpg841WLRpnD5KHNsPCZp9qic1EHYHuQHDixYJLqzCTXceAAgBpj",
  "key14": "3Lbv1nLtA6RzcgNcnfc7iHzLAHnVNqMBbAVH5tbTzNUQMQhFeEHjfAZ3yqJxjm84JWKgubPDarEc9dwU1nJjGjza",
  "key15": "5fJh1XZf6czJpGFEXfZoRx6rK1Aaek9m3rgSDbkiKRxq54S466xAhsqSQ4Zqa9xYvcF28JyG47EDEr9qaaPeTnE7",
  "key16": "LRqPCKAGarRLAAwYWTJdKiVKLUzA87RFLiHpoCPwMZzadNoe336LeP2zhVgmVu3iY4xr8yW9CSyi7h7GzmC9iHL",
  "key17": "v2a9Y4bd1ZPNx6vvGjbjojuFLbGq6sDijhCLebkxmxoE3sr77xE8CEj17bLj6yVc3jy7sGBGD5H7XuB74qkxEtU",
  "key18": "4DPfEfhnSGfCwchVp4mxaTMYTanGDHiPmjQZ4Nnpp5vYtWdnQNetKoqes8u8LDPm7LBfynG95uDuVuk8yniJtfRQ",
  "key19": "4PQghhBc5y9HCBr6fjKHN6EkAE3GT3XoAPcWpSrJGNHFgaRecfKLcrMDVkyTBAFvxRmPT44fdzSe65ikWszgyS5i",
  "key20": "3gWBSRqEDxbtSHSEcxGNqZv64zPStWQ8uKCiDE4HDb7C2x5BzUZ8wtu8jCLdguxMmrULPZAjvPcCtibjEcpWFv1Z",
  "key21": "49BpMQtypxDR5qUH9Vmv1XWxGan2jMVh2gDAiZgutHz8mesrm112Kk8x7B2L552NAoaFpNqLJBqkFzteMtSbEbkL",
  "key22": "55rfpb99S41mXK8c9U9p8bDn9drv4PXDCDEURjNa4ZR3VhKULyXKgEgUMyQRxAyDLwvFA2uSo51Xmds3smQqe46b",
  "key23": "2rJ7EQ6bpXZQm2eFwdbrWxieXmJPodUPHboBTfqnbjApaxNnzYfUfx29wgLeHwaSwE81dS5MFUJdj8B2U673WcsU",
  "key24": "5XD4pbhZufwYAyH5z8L5Syq5K243hnjjw5ayworAtSXifJrHXhtvScE1VvQwfTp97TRBWkg37XVdYT4nRnwK7S6x",
  "key25": "64AGr99fqiByQ6cW7b3QfCdTC4YzFYmhYrkubGCNPdmZt6DzNyEFmpYicn2Fb9zNB9p7WLfU6o5rYHpj3Cp1S7jF",
  "key26": "DYJWduioWoSmoiNuusCWYPvmLRdVaLYm769fRJHDHHKFwXftJ6hytrTEhQrq1X4rR7HEauAGMJmtjKZGPLaawr9",
  "key27": "2Cj73YbXnNgq1u5yCH2smygbzycSxa7MNC3h7ak7a2RnAPEry6PYCjrRjgd55iD2wzak6XUatAQ2CyjzBv1Wbqjy",
  "key28": "4a7ajGcDNe8urtmcTVmAYhSMEVZtHYv499wfC6qp5c2f2EFNRA9VK4i1tqzto9SWTrQ5oiMWfbxSRA3bhHfuH7x1",
  "key29": "3QafXE2kkFEMUuqKh3S8PMpAtmVauZK4puTAEYbDrLWCfkGqVJKSgCYi3C35gCBqFCoFNnixw3Gp53FCxL1EVgvF",
  "key30": "5nJeuduR6YKXMtiMQo66bwHAxQBKN7Y7JbSCUzVNrF5XLjP5EeDi3rjCFfg72TpgiBXaAcVtpfwa5svrLosQUY8h",
  "key31": "4sKH1f5KbntT5kUuGbHBKWkPPFEbe7QRdWera4QbfRuujYKHqkc7PUX3ta1VyNiEjqMMKueaTdpdkTAAaNeCWWLD",
  "key32": "3NvdY5ATYHyDSWtEMT1LnGYYFkKzebA9XEonfDhSE2dnEzQiLVTQfYRWcCnkKyN1mQ68E2Z1MFXZcqHk2QLdwAHw",
  "key33": "43TcHW1iQJComQEx88CQgFjHStiM5DjGs7RqTf3ZzTp1nzEuzknnb4y8ANj8NitdK8QkCLovvJ9k1xavTYUuiuvx",
  "key34": "47G827Qv7FheB5jV8opxGkKSuSa6Hy4Sra7t2Z3rjH8bbKz4TdDSgbjKawwRrStpkqdkrPudEmPBXBrPu8B4xdWU",
  "key35": "F59nhSEdoX1jorsEv5eJDKZuKJhBhViQgrF6ErtL9CSM2DTxfe5p6acC2nSf6y65eoA9Nci6RFBjqZXHPTURQqG",
  "key36": "5pGofi8TB9dtjvgsYefS6sLxZwkS1eJMrYhDZXj2XQmRtYatkVbj57KY9QJdfAaoZ4rm5TdRsoTkK2VqzgU55JS3",
  "key37": "E38R4jMtX3Ug3xFJy8HaYvnnsiRTGz8xSvJdZsCsQLyHciccwNNLZCgsz7Lcy8dHc1v45SPzTy9BgiinQeUtZKZ",
  "key38": "5qXY9dH7VuDLyiT5EkS3rz2YDUxNZ22oWaiRkqzVNJeAPoygMikVbKbx1Tz4GF7oYH2sEMrU35a3DSQBk91LDsW7",
  "key39": "3epUa2ErQwdYp5E7djZnAo9zvXyTjkbyiWCamwWrr7ALcQSZwf4tNPu9c5SRay6MjdwNjz7NgP1skpUNKkPH9qSX",
  "key40": "2p1EYBucNJQNbN41csdkVCy5euFnMJuXin2xTD1oYDLg1S5dS7bwpcuEehuhaSLE9W8RJJZUUNQtWeGXbDrFwMjA",
  "key41": "5brQHgdjWE3oDwVbBoAAeG2m2RiLUwDCosTLZPMLVegB27FLAegTToeH7uS6t8PCLDxMsczyQHYSGPkMK1UV6Rtm",
  "key42": "3Y4YvP8ZiA1wHkzki6ufc8hcpx4FDBehswWWjcQtSZ5xxCys13sKZZCpGoL3NZdT9HgVr5ciiWZ9GNpk9njZ3LX2",
  "key43": "3WQiReTJyd8b8FjoACj6QTnWWrY1K4RNEsMDeo7veYryQk9katdc6MZKmTfBpKeXpr8xZErWP5u17E4jhHXDq1DZ",
  "key44": "QfsBPDCYbwYgR3rxJE1AYbkFAMLx54RUiqYogc56shpn8mDaeFo1YSpLfL4qqwdrUTTJPwVo7qS4keST9J5ombd",
  "key45": "4tCmUxDet47hgKviAM2QRWTuwuAHyAXtVhvU7GTeJZEgs7v981teXWet7btkjdhvCBJ9d2EG3xRJwUX5Ca1tzBrR",
  "key46": "4Bb53RSyQFYBnaGJWYMEYiWovQ3qj38jU4CneeESjPtapo4Yy8GLsb2Hq6YovT7eHwjZ8PHZXZttvg4gxBRzswK8"
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
