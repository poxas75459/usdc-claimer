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
    "38i2VQrhMt4v2fxZ18tRxdzAijmYCWQJ419d9QpwPCSHsKqrnTTuQQHgo5fyN1Roo7djefnQSQ5iySwKkKySvgvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SjPGJ8g4gEtxiJnSa75HLRq5jo87SitchTFxEaKqwaXbBUt1fvx1sG3D7EeqACXiu9vaop7UTFNkN9FRiG4BeuX",
  "key1": "ML5AWpK7CnoS4vawAiskEbe2PLqqr7L1QWZirv2JcWoDzhyKp8PRv7sBTEhHLHCnZ75bxqoKbz97VXYof1LrFwq",
  "key2": "5T2pGqFenBEBrMFf6bBz6mgnnu7Hs8inmGHaVYeFQUSsUXB88E15ZRiQMj6UN6Yavhgca99HJxidt8NUikurwkK6",
  "key3": "GP9qJKzTkPBa3C1NME3r86oJvA3B6NaVWoXxVM9bwbMfYrvXPou2fRNCY5xJZ9LTJfSvwm4LaB1brxTPLQT7RTw",
  "key4": "478npuSmjicgJyFNGjzkpihLjAbRnHfLbcG3DbaPH5VKdb3y128Yf3J6LNmFNa51KzKr3n3LngEEcPe5nYAagNYh",
  "key5": "iYL1ndE1nxJGDBwcwi84CQLWSb4XcuA7thektD6wRi7V1QwCv7UnWWuA4daRVs6v89HZD88uqgfHH1mvSDWQg26",
  "key6": "NeJYcG8XvYDW96STGd4nuNKMUwLMdpzELDVRfW49EzZGqzbgtieWV7pQgUFtNRSSaYrQJFwc7b4EL8nY166SCsS",
  "key7": "5xiWfrN3MKgswDZuwGibc41wtCgd7cpZSPkUgft2pSBgVKYpmcDgdA8311CFKernKxv2u6vbhs4dQ78sLETMKK8m",
  "key8": "57nnETstpedBQXcXHpKVyZLM55bJM31itmZ43DXasAZGMpKYj2aa4eGyYA38nASXVwKcWpM2xcY3h44h1NtYcq9Z",
  "key9": "5jEQuMAZvPE2EKtqy28rkkaYrjnXMs6eHMeKsFwBidteianp65uQBZFKTtHG3uGoMU2Weoooe1k8FNZM73S88b2K",
  "key10": "hwcgNhz5TPbj3EChw6DLeLacQF2Mwd1YxfmLzkfdo4qPQPtHYhcbhfZN7pv5YVajdjAanmNwr4idsrd6b7AxwL7",
  "key11": "3HLM4S2REW98BtZdP8YdWqKc5vVxn8fWMqZNS4m1P8rRpVVd7Sd5NDSMtP7ZVVgczQ2QrW2AeHBcobUBAVf62FZE",
  "key12": "5A8uJCniS64SN7N896GX5kC2Tayb6Bf8g4KEkxvRaaeqxpyHdXb1cj2qMC2vfvN3pTyLL94BxaJYQL1x2BYevkcZ",
  "key13": "2jGyBqPmaBYanLwvYNVTU3Pq4ydGzMpvp1a42LNxE8VssfxMY8XUcdDTLgMnzVBut9e8WFkhRKXWxniKtGXkyngm",
  "key14": "2DiqiRSnNZjj6aD53gNKkz9XEbgBTBpi8djUvVRBWB15cRJirSULkrZr5xLqwQ11Cx7wbvrGRwoquZrPKDiAFZRw",
  "key15": "5qjk4KJhycohJeAzxnjMQzxYFDYKnLgYvQB6e9UTb4GWUTLEWZG4y2yqv8QQXtrWNm3ptrmZghuiaQNX9EmBtsJu",
  "key16": "3285PnWAcZu7hpSjtVveX7z9Aj2wBovYzFVPWS8eWLviYADWbjKsFQ2U8v1gYEjoXC9gmTbtGAgmE3qvpb1BJCfN",
  "key17": "5v6xXDQgzgMBnBjQ1FtrLcwsnWenG3DNyF5JK9WQCBPwHQqgX4yf6WwMGgYAmdLTc6ZewmRuA4uNXU11BMDkFGdt",
  "key18": "3hCjnzDXhJV7fwewWGQq4nmPUzmy1Nuu8eGnPZ5TmtU98DKAMPRzGtkYf7E5Kz1aUf8d5tBZsksHyFfgbMRMmjfz",
  "key19": "3KapnBRj9cd1U48gCK8CWasThYQE84cbiripFFeCxU5ks45fLib11jHyKRdBQHugPDT3TtveQawPDff1oLgp2bXC",
  "key20": "rxStbcLLpawuQTF8y65gM7AvJ5pJL9beDqibUGZRgWQTFBekxSH1SJByMZe8KL4vn7vCpfJvD7fuLde9DDmohJ9",
  "key21": "2agHDNRGvrFStJ1TAbnKfochshKaScN3vj35Cr2tBAzPLwpPS1b4zbpiKgCosXjhGKid6bmgvQicFu5zAMMsDyDC",
  "key22": "VgufcyM4ActNM7nm8NygoqrjtNrg19xaY2Don2EFxhmvrnK1do3TXYfmgvd6FGdUVNdmEECWehkin4xYwNV86yM",
  "key23": "419Mys2S6M6tZg2JUboVzpSVQLwYuT1sYPxyQNW3cH4NHEU5irC3VmoNhgzaVGCJxrrXapBkpVh4cgbZuGqcXynX",
  "key24": "4gAyWr7PaXhnPjg5T1EKU5Skr3GHUWGirHPAKP8Kb5kduFpQmsrNt4ytA3z81om2aRq6ye8bNVA3ti6LqMoWoVdt",
  "key25": "4TNeLXveB54hWj97kawqYsJsiQKZ5ZZr6PjqszC8xsRRadefZvTjEzzgtR5WNXPFHyELqzyiHyqCgtnB6TMfPm2B",
  "key26": "5PZbVZnM9dMKPh7oEtyiXDtdeT1NSoZSYHVhf42jB9CQyBMdHoyNQ4XoGNzdfVY6tGRNcQyzMEny1NJNRYXe1CkA",
  "key27": "61SQHNQMoTMCPiEoZwrqQBef5JCPmqeMTjMPtwPqVptqHKH7xcK9ZBPgZJuYMbNsRQumWV8fmYKeiiXkPvAaaER",
  "key28": "Jt7hdfYeTd5XomjUH4DA8kpTrtUFEunhphQ4EJj5SKJd5fxDiYvKRyjmHo8Ldd5tFw1GB19QXiM1rCXG9747sRi",
  "key29": "3exYKmG4SEWKBL5i8b4etQMSNG4Vy9WNPFibzzAPKmeNr2danPLMhg3KojPYdVes8UCUYZYZ7bGYjpYboqwhcBdv",
  "key30": "29mme4rr3aLt6TXtAbRVurnCnVztHLgegfyMc6HUxq9aWpu677Bd9QmVegAsy42YoZaK7SvGcvjQCTNYQLT2qLeD"
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
