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
    "5TqnDGt8JANVTAZwZNR4BYLcz4T99p94SwYWrVyo7cr9sKngifpooaPBh2vdrMCLjeStTv6TMEBPTu5da9CftF8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxNxV1nWmWmr5dD6DRhwsQr6FVrrJ7aYyX3himec2vf3RbGWcZ6ZDM2Jt92L5xBJF2KMDGAv7QrioziC7Ya6k71",
  "key1": "k7NRDYyBFJwBcLYbJSA7FxSVntqm1XGQhku2BsbgC4pU5rV7ZDqvtj477PqBTcvybigwf1uXqHxZNuYFzP7Lja8",
  "key2": "3HBF3kGJuj1TuYWiFvxoUceCrpX47ErXKR3fZdoWfVUkbZCXcYaCvfyaKMEm8eHaSRmJAdgAq6uKtiAMaEqdDZfn",
  "key3": "4RvjrgxW6RcMphsAUepEcukKNKvjrhQ8A5zgeLHQsi9usaEp4kZARt1fobYRBaxDtoPEKaHcP1iMxWxeYpipKDZY",
  "key4": "4Y7rfNsoTSNhDP3nvqSNovVKbGRLf953tDmuNyci3Rp9rJHk9Vp6VEs3KE6ePebiQQJs6a8SFhRyVy9taqiThRFf",
  "key5": "5huHtAf9s9rKH4XsxRrZdvHEQq6hgLzxjz36JTwFLMFcLCv98b7ifjXBBBfMPCiuzdZQ9duWWrLpEY8hpfWDguNc",
  "key6": "LFhtwevnTnnBiRZ5UsbyMvbS7VLinkS9r4tpPBBBajLkb6FHz76msesrUBNVe6NSbb9D6XJC8jCnhKG1BQS6EHX",
  "key7": "TNZtGq86ieqJQnxcBKdEw4QBeDuhHrYE6MnZrHJy6C5WjaxqsxonTCaPTE3VRLxHfPXAy85mynTzrP9HhBYbdgV",
  "key8": "2Ax7JFZ1QQpcBS6yx6PaYjyL9SJZP3BmWZ5CHuxVpEuk7Vm6ELy45SCnJ1atXhsxUkDChh826yvTxRUnFMRTMYux",
  "key9": "455h2UwkG1Xn96i6bGq98irBRTLQsopU9ZqMW8PDvYZ9Z2aaqhcHqA8ohF3E2uLmJnyFXRsG5P8RyUrHaMQmeqCL",
  "key10": "gFafnsv4AE3rzvU9Rj72uwQ5uGpUBNJeEe71QTbrMtFukLcNqdFvU6FseqFb1tFajjQRjHJrG95diMnfJ9nPSSB",
  "key11": "2rBrwQ63dmxdR82dNMaJuNmahtE3JmJD5Jwob5iLZW45G2ESZmrBwqmUZsXK8WaCvf82fNZu13Peux81FdrjShBV",
  "key12": "5canY6h8xsM3LNKM6v8nNfFrTudxB6thn66iLNwNr4Bc6HYkSfsKzWwkGMSsDbzacywBU1PfFUbir4WgVMifeSdw",
  "key13": "2QDefN9YFoEwsEWzUXa1PrKW5AxfhDj4XQtE1dVPT3aEK7L7ycav1xc11F3rTtfsaPyqzsSSkq4CeJswWcjtyUFg",
  "key14": "5VHrdCKR9NRJV3Uu9Xus6ZJpV3hBt79jZt8eZj42eX7e4cLYrahxfQnJackzqCSLoQJkRGyKsr8pX6AjxgBo2hwb",
  "key15": "5QhKAyDteRmU7voy2ti4t23er5aNCRBKnz71Rb83HiTPBnvQi72Hf5qqXnPMPvghnVJktpfTUcR2juq6HUg4dXtq",
  "key16": "52nd36XkgCFPqBCdCKpBbz9E2y8gn4NjTuebLzawJThaTifojYyCcFfS9oAu1FCqR1Ne5tzBqaUCRLfizCBtriKE",
  "key17": "5ztYM3zncJN9dtuwAWWhBnwMhJNUvBKRBSgw3CnYDc8zeGKTUHVSxJLVwLdUjS1SbMyCRRtmiwfoXp9DTF1aGJJT",
  "key18": "3vA342rPggAkU5gkzBtJsStbuNyLVpToa2HJeZk7VqR8jKdX6VV33oFEoB3GZoeuPVDvnm1o3TiCURPqViiBFhRu",
  "key19": "psJpXytW6gxi9Hm8czVemdRn6RPo3MjWMyunR8DA2UedrTr5b6R6J2YUSyW9AHFs4xzptSQcvMAXVfe9UBAL3EZ",
  "key20": "2SyUQLCW1G5qbhaNR7etLRyG5J72VB9N15Ax5pErDnFBieauC9cEZTSEDorhHgcF9KpKncxGW7BrfCWiNKyan2r6",
  "key21": "2cFQyDnsUGeTEfBCAQ78cVgrzMNNwmVuoqo6MT2JBEZKc4qWHiz6pfeynskJykKKT1x9jz6oL3K9hsf6d1rPPeAE",
  "key22": "5DbKaLpy7KjwoRQwHiUR251AXSm4xdXNszTcLoBoZTNMTkGnRAuCPA5zq8HsGpuEq3P8WLyD3NH6ijXQabJWcQPt",
  "key23": "mQUZ2ZYV3A21Wgrx4kz2fqa2pXMx3RLqiBEtPX9SGnC4Zcggxxj4PLBgi1x3dzwM1FWS5f2ZcoWdQuM9FZHZV1F",
  "key24": "3Sk4jJ5M7HMAcyyYNv5MLMUV5GXFmzxnyrbDTZ9P8sKunt8YtkYSDVaUEpmUqBm99hAzCNC5UApvqQ968GCEgnwu",
  "key25": "2cWwh2xcunCkYdbAPNq2ttCqpvG7dJETx62JSrZSLdMesrkETs5uBzsJqsdNvJNEQJXvg2HMu6kfe54zgqto3M6q",
  "key26": "JQ2RWk3nVQyMizXW4MPSamdbpKqLgPRXDwSMimXtpfcAKAymPpfJdTJmVzCvwAi83vKWNtMEzP1QPoffWa7Tj1Y",
  "key27": "XJ2AFFNhCEVAbMmG1rgS6gQh9U6kNaq11BDn4gHeqSYxiUDeNZ3dexGnyQNjAVW5hXZckpGAtjerkECoubwHP13",
  "key28": "2uRuRssMdmy2PDem7wxRCsfWHGKiVEqngTNJJMzPiR6BmeiifK5L97PTwCAuWN8vrtc7KyHThMZxJ4vzSeGCn9WJ",
  "key29": "JdHo4Ffsz3F7SGQbX4hvKF3nsbrK9hwEHyQbiMNPy1AU5TRa2YG6JF1hfgZVGCPjDMGFraEsjv8NC5VsJZfTGPC",
  "key30": "KutmcdkDU8crN3nmwryHdqt2iPecEN3NqTCsXbTwqeGmTV3urmyS7r7MHEPUwboWaWYg277sJXU8BmNJDWTqjPK",
  "key31": "Dc4WagVJGEMToGYZbyCpbnQntuLrBXejMbSLvWAgpUxfeuVtc9ddp2FozPgqamyTdMuNPj4jdcEtjKzWZszy92d",
  "key32": "HEvAD9Q42TtSoKMWukzZhYBKmiDdYAewsZxauWnkJSSsDZXNnh2mbFs5XN2Hjz4q4TcFcyfXA83LMAdGnuH5Rt1",
  "key33": "bfNm76suLabAwXt6v7QncWgPx7bU7WagtLFrUop5uWLghhb8WnV4g4awfwQXiT7dDiCecHUvLp87pt5qHVoM6zM",
  "key34": "mfQxVrmEwRHkQRRPCCzzKGVr1efPQxTvBGbXoMxJ9qNKB6PuZo739aaSQg3G2Zfo4sLZSwF7fznN4sRCbKLwJnH",
  "key35": "5dv2doaCkQ6zxo7pFwpGx9Yez7o25DGZe35138kT7zb8GXPNDe7u1khKTsamGW55BV8goJNK6NsJ444E5wDQuuUU",
  "key36": "3yr4gGZUKveHxgs9ywhWwzpKhaQ7jF8M9YxwbNMbahCfiGTw2UtUXJrwbrZWgW5EDazqn1nruj2PMkeXbcZPQ4cH",
  "key37": "3CGoqdfycF6jtrAakBexqwiYuHCkWKmrEmp5uRGP92obBcF4HaJirUBRmYHpvqKvcUxqQ2tYdmzSXMVahrtz7mdv",
  "key38": "4ZGqmnoz7jh2iHUzGUaND9V2qusq4DBqnQkXvuamZY2oRxNRQwujwUfhB4GaYDL1tid6cP3jf8R88W84PCM3Uvi1",
  "key39": "65WxvevkRuUX5DNjSr1TwUcSotEhivcjinsPmNUCcBtcE31HDvMCXDPwJHUdaXmYLBFrcWDyDEphv2fKNmNa3mt8",
  "key40": "SKUzfj91YrAZcqtfuun3TVHKVZUVq1upf3XS8cdMAFyJTDHRyJpGgVXvnLbnvBuFsmFoK8i1omVRJ9qH6cZAX73",
  "key41": "MbW3CFzMDS1WPHQ6b2YfoaKuKn4ujKCfoAP88gdJvbYsLdSptensFkQzTwVi3oCsQCqqDfFGRZUmAi7SkSVkXkY",
  "key42": "34eUiFjoGP8xNNE5x351mMzYNnU8N3536JWbswvYmkSSUkyyHmRZ9omor3A9e58e19SFgMLZqQbUAzNwEsv1djT3",
  "key43": "gEcX4FWwYRHN3MZft2aN7Q3vs5hCBZUu8mL6RgdDHg5LRpMau87K3cyvdHxUrD7H5cirMVwHASaBD8fJm1fy58d",
  "key44": "5NVV9gZwBbrDxocttFDh5RuwobSzmfH2pzi3W6u7cBvYJH44ZnHNizaeSN6TzimmTnPDNteZwtnEgvKPX5f564P4",
  "key45": "5fkPw3458Q66tzQk85mbzzNxghyCLRt31LqZcKSFAKjFKvBuiVpX7j79D9ppvUDiwJLjQmefsEoM4opQrpXiuS2R",
  "key46": "3iTkBQ7sUPDSX1BCZ6vZ2uEqbTyQP3krzAWUjr1tDium19RxcDfjRR9txkiseHrRxWD41HAtrw357iVvg2SAHXia",
  "key47": "Li67Hm32eDrrCNejp1uRiahaWDhkvGq3aLy9yGhUCdGiZRrPsdkeL5PVJ1u6wXWcPoVQa3esjf4msoNdGNRmJMo"
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
