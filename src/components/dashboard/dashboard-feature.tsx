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
    "3yzbU2CFEriZTRWMYbYyb3b7U1gnYna3asPgnt28Nuy4gnFWGGUtf7ZWxwyT7n3QzSyWVWy1m9Mj9RWE9316QF5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2oUgss2pg96peUiACZLAgbpwWpMSY63NYipr2SrhAG3vLJ6ivFzGxRJaLyszfYZHqjv18Yc3a1CLbntJMwv8LU",
  "key1": "KHbjQig4KqySqmBFDPowLL54d6FCb5GHRAV8A5bfcJYiWasbcxWqWZU5aDdfkDUoKapqiBb4VJDwdoayuFP62xf",
  "key2": "2pfBDiFGCuv2rbrnNcdxDsQqA2QfrcngVTdbpWZyAJ2RnXP1PgZatwYQXYspFS6rmoj3h6AfD5cQDzkNFEx75Vax",
  "key3": "2L1jAPYWT7HNWsFSQh37nyuDkzfhRMbNCCUCGC4QX5AFdBzSdkrokZUqeqDjLtdHkCDDo1K2zZpRESwtLVJXQyep",
  "key4": "3jxyFA5GcZSQhGJbAc933YTE3YMm56CAAmpVqvTEfjQzhVEdTRZucnznmepkTxayAaS3x6pSYXyKszaasyC5cBwT",
  "key5": "2xFt98GXwhsEy4MNx23PMF9p55VL9oUKwZqBmYhYJtthn9gmDwcMuBFpANEe29NZVUbZrPu1xhpcsV4TPmTWtStA",
  "key6": "bcUL6KaXHLpzZKPwJY8aCn9vh9RWPHMWqLwzgoeg1pyR4WqASmQaDZTxkRKKyh3RALhUT2fA7knuQaMKbq86CNi",
  "key7": "5D9fD23Z8zFUsV4UTvT45LH1uDzGP8A8izztiydPgakCQqYoNt2HU3VF5cJSKENgQLKvsWL5QKYeWugzGa8PK9Ek",
  "key8": "2zsmEkjxxwB93LV6aJ8bz5D2KWx9NChEH1gMMciC3EYC5gAZqHEduVPGz8gzToBTwfa9VPXoCpCSUcM2shLHN4c1",
  "key9": "29tAmBwa5YewzKbpZGQGXsJRu63YWLd74SMJ99oKrE2spgh84uitABEj7yyTjVAuynKiXXZ71sFSycYenFTLgHBV",
  "key10": "4GDWwnJvpEmB4a6XkcAhHAatf1GzTypXdkuszWRp8bi3USoBnaxnCRqpVJwmW6iENAAZaQxT3frbxTeXUZsjq5gv",
  "key11": "3yUcXMTAkS2RjYY8onhqmddQpanc6DmQ4rKvr18TfhFE43htC8P9RyFcy57hqaGDG4ddrMWYHoNposUg9fnCCEDV",
  "key12": "5QNn1phfgKrfUjHSXWopH2ZLJvebRqax32AYvhDCxCEjPTKGDHsRzdVViS8dGVXZaC8rZvowy9is8W7si1uZPCAv",
  "key13": "3K8cRmvhziwTUWW1XRrE5SedaZepf1qHBwgGtNGVyqrD6rQafXjALoDWUU4m474joN753kURwmBzELgLAxEWY1PA",
  "key14": "3K32R1VPSUmLoyzk1wRG9fhvZhn1YvV4xYo97hpxV2i2wPqrwUU77iLEMWhjwm1ARXDURGGfxA17QRDWUvf7okcy",
  "key15": "ahexz92ac7zpw989WsdvLqBCxTo7D2jfEbesHhNKaQj8oyMYpLjTFh6u5AQ9iBruJghqTEknVHhWopJPb3PwjUd",
  "key16": "kCHGp56tPTyjoD35s4xoipXiEBR63FnL2hk9AHbknToJAHGNXYgNCwHQ965Wg2xUAcdazUBGCbaGwb4vi4dRLrX",
  "key17": "2hi4EPbyBfm9HWHELGeoA11o8tiBemFSZxQNpU6usKLX3un9t9wu6WBHxCmyx4vDGNncgobxX3f1jwgndx5WaMYf",
  "key18": "5AxnRDJesUPgk6w5tz12gNfKXKnUdd5MVM5cQmbotmbPLuaYqvSD4cx3Rm2v6DCFT47YgTRLneFKgW3huucQmmkY",
  "key19": "3ik1zf1dX7CPYGhhYz4eS4L7aT5vC4tjdR2qv3L6rbGfc9apnd2q6WzsjuUPrYJ2kATRFQsJAcFrNPSuwTcXa1Lq",
  "key20": "48nhz8wXDvUg9tBrighNe9V9inkgqS1xmFSYwQqeU6qa16idQdHq6BsaLAnX5Ccnck4EF9L3m1RodvGvBHyX3j3b",
  "key21": "5VLaBtMnaytq89E1cc9ZojX4asv65etxdGWsaWn6s9m2pQTXmVFSu5X6LNMxNuXh9AYACawVgVNJy1ZTTKHSzRj6",
  "key22": "3DYDokZULCEvzTzzKki9L2SgKRAJX3KdPFmyWKpHvrgtkMdBAvgugb6BH1ZWDYcnJiBZgDUsh3pNRadAcWqLFirA",
  "key23": "R3gH375Hc5HLgXy8m8dCAuRMVaAcL8R8bAfAXZc1jLeMrXz2Cny6kvNmkeRX1jsWe8V8oGbWgR8peBpxNQCrgXq",
  "key24": "QzCj6eqqVAtoQJ7H6BexYNd8zRSFTqny7aHYaij8KyEcrBPRFxVrSDdZphu6DdqMudB2SwXfuZanRZxPjPxHTeH",
  "key25": "3k4n9AkCNjrpriEfkTC1KyjQsubikKN91RBmczqLqzApMDHHiTsTwa4Rq2JaoqvANSX2SayzWGaYwbsVW8aGtYQq",
  "key26": "5pNwwZbVpCPgGn5QhKhMvxFaVZxHB2cLsucDanq2866MFbbnjGBQoP31xNRsr1P6f3ZFkHHMZWSKhJuUPmPm8saQ",
  "key27": "2sePMGWj6d34BARuVHGFuvPHkYpV2JDuSgrstDPiHfsNxL5hCDXaiduNwQpm3gHu7LocbVYw9jsxA7fyRsHc8iPB",
  "key28": "Ntovb3FizHqf2NPHoPb8WMhb6Tm3RaneERLPhasmSi3TWGrYXoCbP5siUawqhckmdVpNgBfNghyXVv5dycrXe9Q",
  "key29": "5KxptqqRQxDH4FYCQTfcs6RfPL7gcA98uQ1HTxYr2aQ5RUBNn7QSN1dywEJMRWPkkRQPaAc8yBTTck4x8ouURZHN",
  "key30": "5QgaaB8MReDdZ9iZmuhyfEyKuYwXhMLrqJWFyb8z5B78QkBtJadR6cxjfqTLW9ZwGdvk9TZrWUp6Tb7fumZb51qq",
  "key31": "3AWV7pptu3i8WvsZs6BMEnRt6UEERuP29AMNwvn6iEwQh7xQxv3MjRA6iPFXqRAgo3x2p1WHpjjYTp8wAWRk9WFy",
  "key32": "2yHYJHj6532rEG3L5SkJsK5FmXXzcKX2XURCyNMG5UEY8aV6vEtWtr3CPWgYzbs52ZXgnEJyfw5fC2VUsUhCsfhV",
  "key33": "4J4w7aew1qZiqAYk711fB8QyrduALNenkyVLRfUxunhS4ddPw6MhuSuxgP3288j3v4JSB3PMYiJ3swSg3vQJiRKL",
  "key34": "4z8JjPXoPALf7ZcLkyBNsGoLdXhG1NdFBEt6eYtcSJCUHTP6mt9YyWBLhmR8nfYKthFFrD274UPAgz198x8hRd2i",
  "key35": "25XxbDHetqrXsFKdizSd2Vpv1qWNXfGqto3SSQ6sbtpS16iyHCnsQVe2Xfm8Bpy1FbtVxsFeJzZowjGLNmeQ96tb",
  "key36": "4vLLSo84nyP52qXeuDx8ESaQx38EfGo5i6ow4AwvTcufU7EhdZcot7ERRd6f68jEZsVYtsARZL87fSk8SqC18R21",
  "key37": "5cFCoxTpjGz15JHbVfAzT1WH85Q5TX9HyE4ooS3SMVcsoTwzF5MaECcT1NkEnAmyPdijGCdxU6RQWcm2D3vi7GEq",
  "key38": "2NH3u9w1igcdYbmavTb4QXZrgMMFfRHTAWrvYHFB9iBnbLniLitS8AnGk6sFTQLMjXgGTvCsHY9MHY2PuaxDiMdH",
  "key39": "3u1sRzKho9xBT42yRVz9zHNoSEtUKRPoJPrEuYe2oKCH6C4U6Ek33MN6C1AVjDE3BqpnyKpjeoLiVVvLYFixyu2z",
  "key40": "3JnX4SEUYTAGtpsrSq1SAeer3fny4MRxHmVtf8SK7ib3nzUYxZckPfXJDMA49XStxVuSSX8xS7gbkxgxfkaasa25",
  "key41": "5nJFNBN5d9ua2qNGv1jMQgBVRuEqzJDvbVknxkunU4hwQLf93RhS7PngPiSzQwpNqkfjT1WtQtxHb2tNdee2BYkb",
  "key42": "3aGHeC2ytZKMY1M5ruE6nK13jSgpWdK7HrgbdMTbcDZtZXVoAqUKAtqmn5t4rSVcujEASyorjNr8sBMiirvNy1vM"
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
