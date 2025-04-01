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
    "S1JTorGpZuMCXaa5Hj9UJ8psKAPqr8Rk6CaLzmS7FSxab5aQQYbAFmbPwFwsryrXgCVN8CAUyJKshFGHfLkUUTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdfv3oMrD1PGYhmjmEgn9UAJfFmC7jmrJWXoCK9vtGAKDbQ2Ekd2P1bsjYytiJrLYD2eBqQA2rpYEp7TFx6QUzp",
  "key1": "2NypKmAXynX6pLT8yvFww9HaZdkyPa81nKSnVKZei82THLTbtYukKFnW3ahPdpb9RxqxBe2eaMTeRVLF6QTLVadE",
  "key2": "3Ri6vmfiA7k1dfjKRw8QEiAj5YVcLpyDkhE6Fw9cq7n2JGjNu254yww8d6Prb2z9dRVzp4Nt4Et8ZuvfBKKvJzpc",
  "key3": "4APM5dXAuHwPz2NwPcthQ6G4dZdxBcUJd5APJfgyVCFPgDaTSUacsnw4Jwv26RHQiBRS89RzLsDYi6wwvCLmbr2",
  "key4": "5AjnsrsEYV3cckze35Aa69iFQGRKAXwmUqruGHA7fvPsTkKHAYYp1uHKrmqYiSQuVjqJuMC7opHwwKy4wHtxDCdi",
  "key5": "5R6aB4eGouxaVNqQg96U5qhbt7PHBdpeKSyainJnAzmdeSLEym4pLB3xEBxSBrtRWH33tFA9KxjRS5p2doR6ctfk",
  "key6": "4bDs4vP9VRpJMog4eq75QZQjkquMTHovNVnuTcDh8o9LLAPCL7a5fWEATeNDCdgNKzPfyX2SSnU2EHswbhR4szwx",
  "key7": "5AoBBCpKwxdkLtUz68fPZ9nZy5eoDnvNqtNoPb2FARHiWBZBRfaZvRB43FNMnRW3boytb5k9KkNrEvut7SB4LyXZ",
  "key8": "GtodESZrq85x95wutbEQ2iBHhqiLPcv5MbxDrKg57FDbmL6mFu48cZnr3qsnwiJwmqSY8XrrHLMkKU1HH3F37nD",
  "key9": "5aZ4V3GmGnTvip6MNgSNeBrN5XvkXk2tZfaqu1MeCntzh9D1i8Sb29yqfdCzryfEo3AfPPVSMDExUcweXhE9FhFB",
  "key10": "4ag2aCJfxtC7C8JqsD1GqnGjgaZAxdkCppRh4Su48Lxjoi9DwhYzidnXeuByL8rL853rcaZd4m9W1VNZP6innk7e",
  "key11": "5sHMJf2Ax1Wtk7F7WMq9aKifAA1rHTDvywcXTnmuFr1pJ2SgV6x38cC2sF8eoeG8HH8LiGELZPt1cDiXmd15ii6m",
  "key12": "5E1X19ZCaKQzGsk6WLyF3whBFxaJ7XaepMJLt1HGu7P5kLio8vZH8PxpKciGVnFa3Nz7WUrmUzGEwRNkpB6yPY4U",
  "key13": "ZLs32vpWKUsfDPNtwBw49a28Nsh9AXPdzeuiAoomVmhsF3oFtKJ1CeSh7j2E9HrgCBwaZi1MYKnjMsszYJWxd3N",
  "key14": "38GyUeZj2CC44vXAUYFTD8FWwfEE5QRiznviiBDdneje6de8GYyTbrZDyyUKAgJeX2Abcfc3UKykCgRCSvMJzbFK",
  "key15": "4qviAfFBLio6b3ZoSNpKahdwn3i8BbG1b59TyphtVBm18FT49HitQNKFNGzgs9srHb3CMrwobNYqXoHFsSWVaC2z",
  "key16": "254jhQes3uAvovzaff9yUV3D2sZTk83vQ2bCdHy5yUt9HJJfNxfrxLtMmLn4vfh9kZ7uWeYPY7qRwXTmHSVX1CYF",
  "key17": "4ha17KwqtqseDAVWKjsDUDCy7WQWkAynKuipaYHxxZcsKcg4822FLutrsFT2Z6hRgaPTrzxGtyBgU1LV9VStFN2a",
  "key18": "2teVxRW9m7o3gGx61gvUkrHL9Za7pQwpFi13sYQh4BR36yzAD8WoDYxkwPLFesiVSM9H2UhXfSykx9SkRy5m8j81",
  "key19": "2tk1154GfSoxJJ5qv7okuhzjNq8exW14ufdXisC1c3cjSJ8Hp7BLuWYMMk58Wag7c71PosghsGTng1MtRgnhVMdH",
  "key20": "2kQF2aPj4ZmGtM6T4T1cgsu4HBP2nYvnSG9KdYyzTSzGnth28PUUCUxzHD3Fq7a4KLvazvm7KMAuVwCuQrsqGpU9",
  "key21": "3h2jq4NGzBEc3gW58MPSaQBeNgeDdepgHUGhS1QtrGgZkthweYkmF8MG8RauDrJJi9o52Q7UTNY4fsFgatknD7wf",
  "key22": "2QcAgtjZeDuMrxpxyFBbedmutY2FPmUXiJBGdpcVY3bcbeoDx2YvqgGjrMtK6tZwwF1qFqWaZy4oSxtisqQPBDAs",
  "key23": "2RE93mDnLYNSh8eJmfNvW4VgMF2ASVhpb427WoRRkgGH27Ag7gJpfuNv1B8wWqfPvSgfQ2AB19he7suxfbwmj7Gn",
  "key24": "3SGMn2TUXQUdkrTAydHPxRcT5TCJYdesYr2XPW13KN2AuuKbHEr4u7hHcCo3UFf4VxMyc5DNvS5Cbs4fjP72yfZX",
  "key25": "5VTX9JB3EMJVQfW5B7HardAAiAfDWjmVpf1EG1TarE5mY99L27GuRJkNwraUQrcsXSr2icftcgvXKBq1CvLwwPPk",
  "key26": "5oDPFKkxTTzHYSS55cdJ8USJTW8iofVbatRk2qiHSGduvLP6ZtKiQRQiPVrQiY9MWAJKvy57sJdLMRDdLTNd6dTf",
  "key27": "2pmqstLUjaRfTkQ7rtqZVTmn6oZLEcyH17M8Vp3NhQk1HkBochvuhE9xPGwPpVRXAGVEV8RYhVHi7Yv1UznXG2fp",
  "key28": "5N2iy8tkzffCkJ7Abo9hx5yDFCi2S7f3yr6erCiQoh1pUwMMfTg2cpeXpzHZijKszfYumEBVspNtvC1qEATLBwYM",
  "key29": "bJ6yFEtgKzfeHcbcKk87EA3tjXutgzU1RL7Z2G3KwNNNuYzUygNkWKyLaBWHctojGBapzrBthonKTmPTWrvaVQB"
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
