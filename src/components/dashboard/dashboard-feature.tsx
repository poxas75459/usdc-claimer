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
    "thdwer3wDgnj9JxAFXbdogSJrWnKRbv3ZR4N7Q3hs6Vd2AyCcJ9bDXUNAvywn4QDyWbN96RvCGonxXfxYuEiCEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WXdLm5cyHqovj4GQMusu5HG6zrxMW7DQcYjbLW9b2MBkjQZSTVBNMust6KZjtjUbFkRM1JfEBvAzvUYfdXCxCiB",
  "key1": "2tWjyyd3WBTfvUKsLS9hFs8mP2eT8uTojHDFrddGWKJCQzm5HJtJCMQs35y1K31Z5Npgw2KdHnH53qw1BsRAsY6W",
  "key2": "5mwk7DLdr8Cb2oTDS7ASGVFJNvuEhwHSJ5JMqsXqsx3PVE5dm7D5rr9JXziweGuA1E3ttHSB9GRJ9EjahdsZ5bhG",
  "key3": "8E1eG2624znYmoWjvXYnWwvDDNajGAtNpkMxs9UynoyCL1ZBj9QeHH6n4QLwR9STmqP3zXwvx4LNUMufX9JiTjS",
  "key4": "2ZzBVjz53UvRaVjp3GET5w6G1TcnZ6MGC69WzU3RBzu5zKybzdzVgWq9VJQnYT6GEFeAcEoeJii2au3wtypzSPgg",
  "key5": "27fcvxZNMWRbFuZv8TUigyAcgLY4prgdo1xDAhvcfAnF7hAtgcsa3g2vWrPRgAPH2NC6WyJWXHz7WP9nPoibpYW2",
  "key6": "iEV7q566Dgevc82RmbYTKViobZbkns65zujZCvh9T4DzcnPz4oC3cawSBDBgRiNN1aUVCiGwnLzdqXhjcUH56DS",
  "key7": "4APH7Byy3QJu9g7CHZ5d72pg4GKa4nDSmwEbhMBGdkCEM5xoScWPvzBQAFrnxG2FvBedDaiYtHPQDvrACxDMnvFa",
  "key8": "3uVmaGiGTpdteurWCVEMsp7KkQCjwATReTkW4vgVpvhoRNxtYrsE5X52Qq4rDra92RDaUmYaGQrgF3pNtoEPcNdp",
  "key9": "Awob2r3ihDpkmp8TkfUjYyZSPEj6j6chdHXDrREto6owH2Lax2wuLwXaRNCxYhHfsNgZSRwLpDeDQmJPsAokwKG",
  "key10": "33KYQtDzfhugmjNR741hw3dSgduqtbv3JeEN9Mk76rbg5YXKWeo4EU75gHmiGnyGHf9SZnWpq1PLcL7gs2FgQDz2",
  "key11": "35HajipoXLbNqeKDNcvzLiwkCdTBirDBgqyLWinFojzkd3qAGy9d9qHHsd3tF9jbt7moULn6AhzcEvXe26QMAwyE",
  "key12": "28G1TRtSMVskredGvrNZ3wGWHUkcoiP3cNegGiERnFcJAcKGBJR2fppFNqDEmt8co6YNQMeMTPXHLVx1Zsmvmmmk",
  "key13": "4EDXkmKyDYgFDteaaMu33ftswFMbovQFhjSVCzyDphmF426eyfBrFKYt4YoYFkABnhNWirmLYvJ8ko1UynFWcDfR",
  "key14": "5CfukVTd18LQpp3Kpa81xG9ByzgPAJJe6iFuLrvDU9JfaZ6gFFyt7zUo41aNxowyRQVj5ZuEP4H9NsYuekzGyfnJ",
  "key15": "4ggKpLiXAtNnZgbe8SMpHQXw46DD4MsbvsbaYuZmWx4kJ4PyAvWpYEsErxaQKY6DHJwSx1JbjPkNHKbvEitu9JoQ",
  "key16": "57zjqj4UPxRdPxHFJuaY7WUcxMsP9Zj68FbSW3fcEUNvkwx5tpnvHknACUZN5GLtevY1JbegaGLB3eneg1L8rkLz",
  "key17": "46UuP8ArHRCUatEaCFkYA7kqCLFaZHK3JM2cQDmuocLsEvQjXdguR6jtvfcXw7pyfBsqYSueQcQ1pHtCVKt4mjAM",
  "key18": "21TZztS28HWHXkn5z9TN65627CnuQLm2vDKN4v7yLwNU9pz8wLhEVuzAT3pjzSesqq9Dk1s2ombf6fR5GaRUUoeF",
  "key19": "4vwguLY5UUNvnPNtb9NaxvNr1MaWiFpop8tSZGCimA4cQ7GhkNudwe2LxTnGHLgEQp882qMALWBTtGuxr1b7BdKD",
  "key20": "4SXswAn4wPGg53CtniUBb8rqrgE1ewidsFui3nmevEqJa8iTZLAUu61VTabDDXnKXGqsgWVWm3BZssLTxdZoMRsM",
  "key21": "tY6oRp3cLo7TC2CdWhDthugJgYzm4sWm6q31M1tdofDdFrwbVYBVc14ozjrtErLppP83K1js8WL6eN9p8dJdEBu",
  "key22": "2VBFSXZLevKtCEFPG4TU5aCoKPAKayqkyK1zcYYW9R7FsRCHnAJztFPu4DChAB4MwAEn791BqdwXh3cr8BBYg6Q2",
  "key23": "3YTdz8CwCNhwz51uJgLKZbgA3u5bsiJ2GCh7k96jEXaBzF7GGWU8BmtX4KjiujQk8jqX9mdMu5awgh92NJvwrxbe",
  "key24": "5H8BSsqJCE8LCqtcoddvKyGgncTaPCinxws7WbZNXGDrc3Tk34xvFnjEYfFUu7sSG2eqgVBjSjQa2f6gnLgWXJE",
  "key25": "5ZZAjxwTKSP3hwxMWWshYvXtk8hfwiESnMJWw2mKtEHStBj7Mt5vAE9YyVuTaVs6mRJzAGFXXek8pmgDBD16srpn",
  "key26": "24hk2mD7qEDxhwVA6U969pXDFC7NNtXL3XKz7BnjR8bEpoToDGSZTz5f9P2tyWLv3PGEdsbCtWPWqpNFKAFhC91C",
  "key27": "3XzH52XEneikBi597HL7wUXfGFLazb6HP5fcxW1LBE9Ax2sF4u8wayFGM31d5EwLonQpEQXpBNEHJaDPf56rmSN3",
  "key28": "2A66E3z3g6fmtxpZQWfCS6w6p81x8T4qvkKHTojXF2Y3etDYRBK9tUkoZnQKZLPowwy2Hxb1Ak1v9vhXEMhYmkDz",
  "key29": "5FkB2uAzN1hKqVAZqwP2b8e1Unxx2RKqwS1PSipkExLZDk4srXZZxx9uHc3fJcy3oWCYyTMzw6gyt8EoiLKLR3NM",
  "key30": "5SwV8iRdqAmDzb5XTd4TJuRamy3sZBpTEHbMnKj6eV3joABwHr3fQk3wkYXHa3VSEX3YdTGQiMv9B5L6MSWRae1Q",
  "key31": "4K27MSng9xogQSzh7inFEkgRiu76hpdpSt6BzZQvSX6T3JKcMv39eET6DW5tzaqTRVqNjxguc5r9fHQpQ9Fhc4ot",
  "key32": "SqaZkXCY6Uj9ZG1NJVL4f7gh3j7Ee4yVKKixmk1NdMwdzxHgZe2UtLP2iwkGpmJ1zVDpyD1a93poT6x1B3vbTHY",
  "key33": "5rwu69UcvJDW46jJ65EBnTtFCAFqi6RwKghQPoXR7pdHcAmTmXUyPv4URW1YCtnKRW48j2Unf7Pk996FsnojuPV7",
  "key34": "67gSsGLTiAXQ9TmwwJgtPV6T1aZ6zXxKKKhKnvK9ShKJPnXE6hea4eP97TKfcdAccjgTSNBrpzggoePs81fSvTCY",
  "key35": "3gv7ZmoCqvqwvV3fwdYQhSTsEAvesYeM2f3QyNf3PS68YevJsC4mgSBmApMy3F7QNqAfbXf7TVg5b3JpWQAQEDqe",
  "key36": "4UMxTnDymDTEMDTMLTBRWof2NXrP9SjTcdKZbXKMu34TECHTqyJWDaJQsDUtgDHMKdzXvPApFfjZZSXhKywpbvk5",
  "key37": "2s2rJrEJFL8UdT1cJe15FGXBM2t46gdB1KfM2bbJWp8wk2tu7TbBKm4U7TigMm59uyEPRTj6JxN42mThHmsX1Uz5",
  "key38": "3tDW7vdtMFeCgJkWmz6sfNCgqSmuKP4riLuRDK95WyT9zcRBMjzqg1EVk5mCFdDB7ZMoSfPS3ScgxdagL1BPV1Dr",
  "key39": "5XuAPFoLce9pFUhC5NsTsd97EQJU62uueBacfbdaKVT3jjcCYjSa7AMLWRMy7uhfjBwAj2MMKaEXgrZ3ChFxK6Fw",
  "key40": "FHC4jpDPmionxuspqxVwzr3NX8nYrg9MqSWNdKiwBQWHB4psKuhGPvc4ZRgeusHmfr7SfsmQjVns8zXpGwL6JbS",
  "key41": "3zKKUTa42PgG8GMGSGRNt4aEGJZ449K7Xaw5yns9MGH5n4GfJv1vqHeRMiFj1CAQ2K5QDV2dtqJ6y2P1MJHWCDph",
  "key42": "EcxjXbQzxxzvUUN9Kosx5bvRxUnWiGZkCeE9m3nCrR2BqaiWyJHVs5uSeSVNee32vxB4mPo13btwFw2J6XJ5HTS",
  "key43": "3FJfjajEvSKaa2deUV6BZHTF6ETAbKryHX2gdcjU31UEJQGNA1bYL2q1gWwVV3RzPQk9CskfKjRWeJjdacZo2CVV",
  "key44": "2PEFKncyYMVPLpeNwABpgCrhxBuGeTsQk6AuiX3NzKjPuKTkjUBWc5kB5UPiGXR6teonbbadQRAW1cPDnQBK4MBN",
  "key45": "2hQub2XevRAUkYo9PZgNpHwAvzNj2MMS6sWrNtsi5KUSq3HSCHRWMGt1Cw6SwWm54Y2s3bwBFyPk62aBkJK35kkH",
  "key46": "64nS4KoweNnPiECFupKcewPZnZXnMJkBrCJsXYek5oywfJS3FyPFyvR8QVgm7jkadULTptASxeg1s79GLSo4YFZi",
  "key47": "4cw7yMi2TRjZPZiW7Uu7LxwX6NmDBjixi6CJ3SPEEzJV8iV8TE9q6wT2MnSMsrcJUDkJTzxiYUqMAdagGSAaD7St",
  "key48": "4i9EW5TmVYNvAfTfnLjJG7aguVNJoU5fRd2yppccNyV5ULGBpVdacNyzfdApobRE1pwBVqhrK5q96xdGdEFXERmn",
  "key49": "GmHtkCcNg1vrBKXF1nPtBqbfM7RVjK2hs9tDZudeB74SPjRJRifTmnDpnN5ig6ebTVnw975y3DVJJKeHfkmeRGM"
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
