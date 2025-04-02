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
    "29gMHzPpa7s6tSenKBY77nzt7yD19zdCttob2DWDbzZ4Le5yj6r2SBqN6iQgNRHfYgy3ef6wpUoTCcBXpCpQyUnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eYzygHgLnHsooQikQgpGtRXVqoxKPR6uJQzMuLbSL3Rfybzya9VqtDat4dMwGWLkpZ6TbXYWERUMaJvjTjohrJM",
  "key1": "3nLaZBr28KRt1Yjan222bXNd5eYPoNDqcEkv366ZPZ4pijqGSGEsbtL3m29D7NACa33Fvn4RV114qDTfAC8DZN7V",
  "key2": "59ryyPtcBGHeAgU6qyhtxpUAY5pcCsP4a78detE1tiGV9UTmusZ6aJtEQNfCir2B1FAbGM8WNjfQnMBqsZsLyk6Q",
  "key3": "3dzWrwUe7MaTEMhiJyeaBYvvEfYFH5Vvi539CYEVUcnfeJkKj1Verbop8NgX1xH2CVhGvLki6zdDh4F2i9bG5Lr6",
  "key4": "51KayBeYtqRjDQBCe78E3QPJ56YBDRjEcBgtku81rvU6DQKa8ZV8t15UwzFA7PicdjFKF8gsDFhCpsQB4UAM5px5",
  "key5": "4tSZ2HYGnnyy9n263dq3YM4Bh99e2o1RZPSN8TzAi7fmFY57UXfnW3paPv44ZYQRFDQ98GUwmmQBvmkFxzTAGU8Y",
  "key6": "23Ph495ADQfsVnzg6auZQFhkcKoizGdUAPa2bW4N9KYk1dvUy4b9GAsc4ujXnd3HPXVsQ9oK7KaphXCFqoX9kECb",
  "key7": "oisdiRc1pMEh3PvKfzHY3EQnmGhJuJsvHNjbaz5MJMK7C3t4gNLKfRp3u1MJkTKz9PA9E1qQZS658pt9FL4Nguh",
  "key8": "NNwBdAtZdnU3nKPZAjpGTrkGwWw5FUyR6qBYidSZ4HX7dLzuGVUdg2bZ4NDmFVrcq5sDzmhEu7wLGZe5GRL3bJW",
  "key9": "5L8cYkXs8rgWrGFsfhn22dNLnY7XPsfDDyGuK9D9JhXxaFqbDMQiULVVwbSJ3SSF6vMQMSBsVfLM4dRcgsKyHTB9",
  "key10": "3P3cjqwc34fAG9G6W1D3BaAWNG2DHJHHSLf2vCVY2C8HjvpUJdnfacFVhYMavabx4DTTRVGVd3Dh3JjuDPg1ubHz",
  "key11": "3ciFYdGnTyJBozXGhmqmL2UnL1shDxiMbD3MkbD4nBKd1KD9dgBdc41QDm1uHnrVMNhw84ThTZnsGkhBrVKBczCU",
  "key12": "MMH98zmJFXnRxCzQMVw2f74fDWR8U59Urb6tKoA9nLDsFDKK9DfhqgJmCHnXuEbHugUyFcEfHA3MEr3YfzKgqrB",
  "key13": "37cwgiUVomM3NQSZFKVKS2T3xAhtj1W8ahnJHFtSGsGCAeJhRuWRyqRMpCkUuJshf8HHEPmvn8ZgKG32JWcZcsnb",
  "key14": "2sFykm1DEHNjoLBMNPto3qYvPXz4dYUNFjhamB7xrgr3ARVZa72cThVwtiFXqog1T6Vh2vhqLUtHXa8QiyUbmhWn",
  "key15": "3hAaqUoMfo2AyuB9pQQcLtBehbdf7xFH51MAPUiKAEsT1EEapQjiLTKNs54fZtARFVkdcE7ndtKt2r6gPMcPWXRL",
  "key16": "56maUmEpUoA6nhj8dFTBcZanNkqa2GkYMMjq9hp3nTfqnM8WJU4pNY5nWKzCokBcbizgTupicUadurekLnh19Smx",
  "key17": "2pTbsuoakpvpPuLvKYyu6LeC8xqsKwJUeMFBYDYNM3iZg64kPPiWqyzVZjWYtbzsHMUjTZSg3n2ocUu2BAQpakRd",
  "key18": "5ts39AUnJ2D2aM3nZseyNFYmw4o3dKmvDiE8fPniHedixLYnZvy832JXzaKnRDfqXLUHXMGphZMBPsra4BMebrUD",
  "key19": "5rjHJfhfWZJNm3pExvapUzXeDoQLCtFYogfSJhaCeHt2ZsAu4YHnkvDu87YShyvuNVD3ro3g9981qrvssNugbCEU",
  "key20": "24NNp3nhkj4b6LHgEzxrC493gA1MM9HUX1NFm7eYNwyUYhKX4x5dyaMK2sf1MYNu9dhtEQAxsNk6LgF37esmgF6f",
  "key21": "5JA7XGn6z86FF5uf5gPTiKVM21KoJdsEnPpWWVtda3m6T97Z5nxQAkoPskFLjUsBPkTLotHLPmirxrqY7neQCzqf",
  "key22": "uDqobjaCtrNrscC4TwnB6aovfnqfhQ4vz2HoJA2JCEFqmbxvCcn1yTcVfxZVa126TVgkcFieuAkJeM41inxpLXs",
  "key23": "N8DMBBadV7gYcqQBCVrqai5Y1zwqeupbEWu1g1GAN4XQQQnmssBP4ZmXpgFj6uYWNfkY3dGTd8qSTJVjM4je9jg",
  "key24": "2ZtTr57aEZoNbm8Kg1kkL3izdyQrxaLtjTowiJvYUox8TVmTVK876L5i9qmL6h55KkbAGLQZd7kisLchQLvoDG6Z",
  "key25": "g3sXQLm3qFuAEuD3ZYsRgG5Cf4j5Y5tRDgQmcJvBdRQQALM4C9feZuzoa9m7fBYkS7xQjAFVJST47FHuhf26LAf",
  "key26": "5UdUPqmwE9zB8cM44MtqayjJ8xYKZTDbDVTYM4kSCrEaEd9SVAZknBLtdgMq4ANtwTciAo9gVBtSvsvSFxqEBKWq",
  "key27": "2MiLDwTk9zabcfu66zyjSW8KWakvxLoRqSTB2h7S9UM1LMzDm8FcCMNHWm8v8JMPSM6Rjktejj13mrdVesRXqBzz",
  "key28": "2WefUKJrwWZjFf6DfatwChhkmaYDAVaAopKaVQreDeoxHiFJUVWCjbfQddahAFFVzzwim9Q9ZS3Np2aDjKyt9EGp",
  "key29": "5gG8kpYWBwMVCuCP26vRFFqkQef8tAMf432xFaKhjFGE9wvVzkFRB2UXY56b1E2WqhcepMSsJH5brqWWq2LEMzhr",
  "key30": "3Z4EYQKE1TZdXBjGVQta7F246Wboxgiv2puH6PSXdpgLFg3K9yCK689B7f8XNEW8D7mqvvsFZogv2mJ2BEZN1pPv",
  "key31": "2yfTN7xhSuBWs1KkiRRSxMenVA2L75DWxC2NMPLerkdfjWzf5EuYGoVt5tqzbci4HezaCiMbYr2XUnBVrgidfJT",
  "key32": "5J1yGbmdTsM5xuvFNLDagzrEftNBuiiXvDX6sHjdnZbpD1g9ErUGDxxspoMhZAnjwUa7soW47SeYix3YzRFEexq3",
  "key33": "4FXNZVgVRpcDtsP2E2gABFn1bUHfNosxHS1KCgaFbavg4ZATJLfHPoypJeGP9hkgNf8j94wBFHCcM5Yk3wRR7Pos",
  "key34": "3vYdruxmTnRnpkmmA6LZ77xoaXKTMs7BoB9APSaE4H7stuGPUFMh5hp8Y1X6XNGUe5VTivMpzzWSZXftBs7G7a6W",
  "key35": "2qQnkCZcrAxhtMkBD77WdyVnZnWYVFhJpDyzR4asQoWRP52uS6w1enfR1oi38KHzkDpsrumm2uJidW8zTdcU2pA3",
  "key36": "57ugC4dqjYmV1Nk2Rs63TnWAmAqGdaUSdGb5n3ccrMq8BwtVTc3powdSgbM527viHrxRZHHS7yYioLa5zNfyx6ZB",
  "key37": "2TerxuPyztWF2kSxenvGwnJWDGgDpCz16M5yS2mzBQFngQ3YyaMykHjTBgmzY1oghKhLk5GdwpAg2qGmYGSaEuRq",
  "key38": "2WZBJ5dkV8AvQDaNaV2hznczGpM8tpGyytMw7nnY8Rib9K686AQzNMU2X78hpT5yg67FoyERPh1duAJb1fMj385q",
  "key39": "55DvhLNEEHmnHqQW38cntJmWUFLJ2SD8ynVcZW8bfcKpgeCgEkCqA3U3LmmepXrWegsgaXVCHi8b7XoCJftNURb2",
  "key40": "5wgnKjyWC8zdQEtYtijkcHEs5XWNGNuHy8UWjDZTReiVyThCCb3YKhay935KoYJy8gFsdQdB7it4b9xbiwWZxgX1",
  "key41": "62qHwhSjDSYAoGVSZ9QvojYzPt79T3VNGva4iUtayaVVhvQmmir9si2PUf3yJDRNBcRvVSBJ3CE28Q1nJ7TnCjSS",
  "key42": "3AhygucF5gatQQrxcGbC99F4Byk9LmJCzQxDsKrtx1yhoQ3JSidZuWr59TFKowpMHDjFD87V5XoQikAUyQYCtx91",
  "key43": "rJ4PUSNzfP58Xm9onyzDGivLPnADCRfYE7wFiDHao8VTtLbVGJ2QsPsLM7Dq7BhhUT6S9H3uPZHFHovcsD4Y494",
  "key44": "3hCo1LoMb4seXR7kFYs8rZvivRXHVNPZiyTcWuqGHnphZkzLt7TteeoRSh8q8Mo3P639YHLNe8kyAVuqi3iZHXVP"
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
