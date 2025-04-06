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
    "nUhnzVvXuJU4NjHvVbhNUTTVyvdK1k6Cik4G2dc92kKYzNtyNHD66KJHk12atiEkBYdpTGBMfuoDtLzipY5tRzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DEyPtf8Kk3MqHhAsybMRp6TtxxbjnLRF5j58ECiacCxAhpM2gGix2AAAjqEPT8dymgd1BcrpVH8tMhPkPL53CkS",
  "key1": "2VuYFyDhi76As8oQ4vWswBJkqVY9UnNoYRLD2FoK58R67hgtcC8GR6yEEtMiSYFFdwEgPjs2BKUnBpRRsaPheVUN",
  "key2": "jU2wHXRoXerk5CC7yQFafE3af1X1Fe2eGwALDq8TCEqUaDL9Ddg4r9EuXXPfwELoH5J1SxnSBE8UxWPTp56SweY",
  "key3": "RDNsTHFtz2xdbJaPGnFxcJ7rkdC8HQRD4unZq1nyAYkcSE3NkN1SEHg2HUq1pgoLdZaw6DbxmdS1afMW5uAGuL7",
  "key4": "ZNFtoZMPWshYjWKcjZHUFTDftFpkAUPQ2hNRjgcYd1RMZbLrrpwN7HvKY8V7yj1G2cdRZU3Qv3kJBxUSLkFjhEG",
  "key5": "24Ys7zcLui6uVx5GcBj93WB8Hhd8uz2SD72wMSiSpRwoy62BXCceNQDYVNbLSrVY9xERoXQ63Az4axdg9RoViPan",
  "key6": "5kukcugQN2X8B5LGzipXPoKJuR2mXPogiJt84wq9w9S5zsVdVnmh2DXCUjxP9AdmaVSrhdqmNXD2joBGukjAX27V",
  "key7": "58caMtQuzSGo4j9vgdLC6iyNiURNWpFCDv4vaWtGwetsforgkoVaKSYJgGNeRtihWHS1aqJwzwgG1DPrx7mcFmuH",
  "key8": "2PLYTSBTZjs9ENTZyQsMNESQuLGxNKNWZ4HjBZTmRzrWib7SKZvq2CdHVwACA5A8wkui6mau9sCcnaV43hBywNYU",
  "key9": "2quq8kv3EyVtBtuGSTLmMxUh84Nt2Eig6HQ5c751V9a8UgM5EqYik4Gf16mhdEJHVeLUGwsyYLUoSFSYLotckj8t",
  "key10": "5tqXjKLk5BGJt3f5QLpZr8HQDNMvFaPUtzuMKvgEQ9wWyp5M5TKurxVcrzQbJ2WK6hoFzZ8wptRSUheSn6wksh8S",
  "key11": "48o7WJ1kAec78bFfY1nwgGmv7PyL1t7L4FnzXfTQs8Lu9erJNmXoCxRdd8XAGZiRmKWMoLpD9YkycDyEftuV2anF",
  "key12": "32tyokikXv4eyTnbNfpHf3UnfZH1j3mxHxQTA2Xmjw9BrdzYT6bYK3jsrXMKywhrWnsrbL3EP54DWcW6Bjds521o",
  "key13": "4u7jLYcZVDc6KLGFEPwVJsTcxwvzeWmqioU4sLJAHYrMCB1C3HCUPEZy7xLt69tw96h4AjKBRxV7mi5qUSAFpWDm",
  "key14": "2sK3jEFMoVpXDzwvszBcWVgF9M1doAQzaDrnVTCTnjShdd517fRTDWFVW8Y26jMcCtWkoDhw6HHvqzzsod8xuLRx",
  "key15": "5JZRKoteqfrhsbenxs3Mx2G3jxJLPK6oYznVnzhhn9aGFRAA83xYgxrbBaT1GbUNp7fCiJ5rM6buS1sgcagx9uit",
  "key16": "4AMgquEM2UQ76z3v5qzLzWygTWateHYkvzYc6MvjMK66n1fgDFupYDy98XgufwMETdYSzyApGjGcgMViUVyZMs2M",
  "key17": "2ocSZ7A4CDPr5THvAXtRki9F2w8ZTCBd46msMtYjj3gMp1P9vWam9L9K9XpQKmU6pbDBri52C3Qhr7fbYSVNi9bT",
  "key18": "4L6Pv5uJJQXZiWtQYf9P2hm8Yg5skma4emzRZYZrws1fvjdgzfLF61qmEVKYA74sVvrKJABpzNySQEgn9ak9dfDw",
  "key19": "2qK2WioqC7VbmBHU7tMmDfkyDrsTAMbXkgYeGLZ527B6AYexc9nXR2MZsumn5HiBAxHWT94fhbEnHYUQ12ncXtzy",
  "key20": "2F4tyhJmqHQ7sfNpSYH8vQiuAz6avnHgMRXvdAQZXzyYFbtaLed8RwSxei4AEhs3RRnKZDibiYGUwS1CzQwPN65z",
  "key21": "5AXTPqmuwAwDr6feawdmtjFrD9WHW4kwZkZpcAVMBL3XxA2mbc1hnD2ZCQMKDJzNTq2x59DXwyBkL7aAqNKt3yNg",
  "key22": "4LW1JGrECoRvMjhb6v9sbPmTvZxasPFPyftwpcsLf4ieVsLKGMwqpqmwHEtdoaRq6Q2YjxMJfcw1L4fr5LbB2rof",
  "key23": "5hxJHwrnfc3rfZrhMg8nyYDhyJoxTux6HZNVHU83dbyJKu8YYT5HYgxWV3gDkh5wxXdcB968VFLCaAyvzcPX4mNy",
  "key24": "QQD7GJUVqt3t8Kf2Z3pyezybm1jyaZAHNyHzoEwKbtDpiLTGyaAWHCAWv7JWpTC9dYbpBPSKKas8gXriHTQn5Z7"
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
