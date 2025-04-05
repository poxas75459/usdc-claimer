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
    "2H5gwHGpFp3NRTsG6rCdEganGXEnPse4HoU6RtSEqVmXTT923qddWMyf2EbocguiitCn9RVucEt9b4Pp6yQxqvhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGrfBfmi4DRHSM7CCBwMBa3FL89UiMjat8ZwdjdoXkUcneH63etdTjdEEgxr8mpsnmvC8bSXFcgowmkbDQeuCZ3",
  "key1": "5x1HtiS6Nz3iH97S1PBmufVEpScv4DY58P8zYKZ4Bq8FiaEn389PidcpGx3hZSPHurpF8tFL6c2Xh85JLpG7tNsB",
  "key2": "fvf6vPLvQU6sdMVxJqrrLRGtMTuV4SXX6kqy2U9PecgeXKiAQ5EQpKF6yBayRcBE9zMRSDeZy4mjDdqqbZQdqKb",
  "key3": "4Hm9LRiMr1cAau4mYW3ahwfx427pFn48JbCfnpD99HirsgJU4yRVPeMk96GbtBvdE2tFzr4vkqEPXGAZTwxfpTem",
  "key4": "36hhgm6T2pD1yyeStBg8Eo3MTqjUmomf8DuSGrjPqCo5V9DShzE2hAQ573ihmKDFbUwZmtgVtn3DR1i1XUP8rj1P",
  "key5": "3PpnSa6YSE2Z2ZsZ7L1gZtoCR8MbNDm2agqntoKCb82km1gdHnq2a8jEZ8ZUaVLPXqLysLyYrgt1qAtKQ9BdfZWW",
  "key6": "45eM95mZ9HMqvJyrxensNhE33aemH9p3qzof695QHKSWuahX3kFCbt5tFfQLQK9VATVLHLcadZiwxaS4jLwBNgNe",
  "key7": "5Jva4JkBscQyRdxUUZSGL6QqPWSm7nCasxqSwifYZATGXHZZo45Twp65QikTS6wP4FX8n4Yk56fdpG73v2BgGLbB",
  "key8": "3iNFt6J3qbmBgZ1yoxfq7hryArFnur4besdwDjU5gpm7wVzrhsymBqXUd2pLTghcUcuvyDGK2yuQe47NN415Q1oz",
  "key9": "31zBhobexbid2YFiDQ22L8PSUcV11EhnP6pXvYX6mSvjT3sPi6KaVs8LSgpKZUJERdv3XS6jmvFnkUiwT7JeW9jH",
  "key10": "61kyed2ddpwQtS8ccJXwV4k5MYetWG9Cn12TDSjcdiwUJcn1seqwssRFbGkivN3Fwa9b2vmTFf3UJX2mJLBteBRL",
  "key11": "XyTo7qgm1zRMk4TgCF55fbxbq9rbz7KsPa6L7ge3REN7XHoGb97SQ8L9NiBkqvnurRvd46S8Bbaqmpm8SEvdaKQ",
  "key12": "4yFEm9gquzpmbcAAX2DuEPAcktgyQVyWQvYsf2S4gn6A7Hn7FdMgdbbip1JGD7b1zyEDynndH6uBwvJAijvhBuDq",
  "key13": "3qZRmD2vktU68LPCiAz2QMsKD3kY9M8FYar3VwkojgBGwiwiGurCP6njRbusXYE3Z6EEqmC6coTSncR79uPEMCb6",
  "key14": "MxbqinzLRZ3Gt59wduTgkHseJ7ARTaVb5aeYSDsvqkHU4Yz6F1kcR2a2j1ze1EhChUjqcDMeG1ypj6gTDgAhYXg",
  "key15": "3uuSi18KaAMjhQEu89otBxfGMyJxowCdrgYPK17PUKe1vGPj4aeU9vrM3ruwh7nZF1pPgPj95uiyXVahMDMtt5tv",
  "key16": "5WqFNd61z1zANK5FBHFw19mnboxkYYVw2C1Mm1SYK2kVHu6AoxooRXrBP2BVvs1Qp16tBUurLA9PBTAvLymYq4JE",
  "key17": "5mWTt38UXx1N4CcPEhvhJ7DHGZqfezFF7PAVheaxxiH39FfKrMet2p5LQAiN1oRDeKp2JymUuwbYaUfmYedUPLTR",
  "key18": "B2rQxipDPd8kjdRd2iq73TQaEYsWFzJzqjkvf6oLS5hivik6d2DpiN6hyV87H2dihAWemVyTrDuEFUnWGXyRzjL",
  "key19": "3mnjX7rCehAtB9kpak6FLsrbX2pYPJ3siiwXt43qnLFqztrrtKj6M5S4K5YnbfRjAfLqmRdk1W9axhybtUq2FFJT",
  "key20": "4mjk9fZfGfc2Q7QyZowWn89MnyWu7kJuqPhANGQjMtz4TjPKpsGTeWrCkjfnH2MMnvixkb1kLvwT3Yf8dbD44VMU",
  "key21": "2fqvQLpUdc1CBrXVstDqnriDrrZgLfdjxhtHZwwpwWeEanyGodrCtyFeLSz2NZEA1utzpoFdqz5CnqHjBeUzUk6A",
  "key22": "4FwiabzMteXqjo515zm1pz3HgcYXbispjzqQkcPXBpQpaZWTryfsEPSmgUiPLyaSGCns9drvGXoN4fmBMqgA8G8k",
  "key23": "5NrcUX9Y5PdiXPQzB7azYKfRDm3DMUB4k1tDKVcUPz6YAqbPwyK5DBKjaCVH2JtetNCD7BEcLinqyUMEczsLhE4d",
  "key24": "XBABa6wWqVAnEJKZgEXbHv4xAigX1nxibbSpPsVy5svXDta3q6iykfqzw4aseN7yKokCLNDZxBkpDwPKVcN5W2R",
  "key25": "4gLAYvDgz58qb4uY4pPTWQNU84QZJaXn7LiEDmMs9mYRtUysAq68io6bMRtBCjU8kYzb2xkpr2b1JM7nK8fzjr5t",
  "key26": "DUZ7fEbLos8ifDrFVojA2GJazZvuKU5rzc2in1pb3XogGC9vCNnvTaVJAqaerjSeZiDPKUQaqSb8PpppPX33kpS",
  "key27": "3ERuu9RBoJXzt8tQ5f7vgPtjxdfFeo6S99eHpEBr8bRvrs9DkfrHBZpDP22iNN6tR4wz9fB8tYy6VMTZCWF3EP6X",
  "key28": "2MLHga4Vn5wRZDWTvYMPziohvdPrGw5KXFc7Vdh9oaTX5bZ1DficmXcYsx5dkddRZw4mvaYksYFvgeVKYsGmBjhJ",
  "key29": "4a9jZuQuTfbZCckR9FNw5gGWRxM7iVySLoYNzJSJfXs6BhQ31xN19mpMPDAqPHaqzfCbNMkbNsNuJhUqSSGGTa6N",
  "key30": "2wSv7FnfD1vQdQJWMSzbKTcatGvcEGzp1k512AMGiA1E6xt5yZqBKzWptFmfbSXYGZcTo3WNdybsaZ2i3NXH4oga",
  "key31": "2oVN6GHnssZhik6PLBbHi8n6enkGSHxmcbKjJzKayztuyhr6CgsiwVfTm85UpEH2N1C5Mo3KAbkDN97hiQ36uF9D",
  "key32": "3xafjv8c4Ca9Lq4365h21C494uGMq5P9EzsGV99Bdc6V9wPzSENh5cH4M2qFnUa4q8BgW4ctT1SSE1NgpMwVeKAZ",
  "key33": "4iCquiF5LupLjrEvfTejHEt1k5nfb5z55uvoDKyds8coXQCTqRhaiUWZXaKTQnmd7BvK1m6eaE3TDMS9jsmCcHdX",
  "key34": "4kG9okJo2AsA5pL8GtkvvRF5rLWaexG7SiZVq7rX3BCAVscdHgbpiC3ERCqRPxDwXX75S6Xo3i4t5sr24tQjAYgk",
  "key35": "65c8EFyCdKVudVE3CvxTMVERX8EejUauSEsbAXbs7UwEaCuRPvYoXBbkaYnj9kLXrtbCNbYw1HwAvdfXXdto6Qv1",
  "key36": "2zMx4V1x3xpLka7N3LSqMHgmXLuhG6vEwgUSa8RcqA6rH5cndDWR1u7SLdVitzHSQH7rpf4iD9eBff816ijvWQTU",
  "key37": "2faxookn3dxXbL1H8BooCECLPxoch4XuKGDtGs7VXrTNCYyWerzx5PdGLHHvCKUpHpGyc7jjZ3Ht9219Qfh87MEM",
  "key38": "2uQaknK7GwpkDoWc5kQp9RmSUvtxxMijDns8TZ5Sk6MgwcH3Jm93DWoTqYGGeUUxEYz1L93qhKUHf66ABr7z8bzt",
  "key39": "2hCicBjAcNnBHAuBFNQy2RHiBqsRtQ3bfypFMV1g41UR4WLWuRyDngobAGsiyL852wMPVi3wP4nXUNYGaHnwyh1u",
  "key40": "jYBVXpEvrqEMs8dys2rqetbLdxVJLf6Q2cg72SgCyxyu41cPDvx91aCV9SiW3wuPU4ZTJL3CKfTun79z52AWHY7",
  "key41": "4ZibQDErTnRT1593rr6SNqs91VaSDXiYgxsDcNt8U3MEXg2QKcYi6kSGWrvwC7eWi8UN7WMYo39ZdsqQw4XuSSvq",
  "key42": "4jUECZTLvMu6fKKpJeuBRUWY7XCUFpArBQkyXRP8DAv6weCKq6AA7ANUbTU96SrR3JVdvDdLPwK1oJPBdBjdp9kQ",
  "key43": "24gteDUXpkogsavMsXVv1AspjdcLaARiWTERdi72RJsFQC9yTEJ8MTcJ6TGXBUpqhxtmZZBm4So4skP5izvMSN3j",
  "key44": "5zcfiZQeFU9PggarX7kiTdBcwWsX3VBhcPdURK5oAVhSdaBYDxeaEesXVLUWoVSyYFGFaiDhM4n8ZBXHCK3vgw1r",
  "key45": "4FhLqi9ZQBwxJky8fMqiuRBWenqqzGnTnEECLjyg8gXStpJNgoQC2hce2Uu5uAkrsBVRekv6F7CBQQpEoKCqs6kg",
  "key46": "3bnGScDpthNrAewzAwF1y41yje3pQ8jRwe8TBuwM8yErB7Rd7j9HKKaEwTM1ireMWNf7AdC8x2tzabk7e5HjBP7o",
  "key47": "2jzwFbHw2ro5nSPPDwqzExJsDR7qcGUf342XtoCpbDVxyugnKDMPFNRMchiyk8V9wykeKvqvNKYF3r1gpEMsK53J",
  "key48": "62kE1czPXLNU2HkMWWTo1p6iPJuiELCcyMC4nwGx7aymHKV9FEc7Fz9NVRJCgx73bHkWM2fPBCi9GAkKYZC6VrXs",
  "key49": "656K1scjmPxWErctUsVsNMrcftWQ8eoXs5XPCt52FBzZUrEn7AYRHiQKRWKHc5Ji1gK2btPqYaKuizLdzbnvb8jm"
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
