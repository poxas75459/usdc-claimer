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
    "4Kvqmckvcpt5L4Y26NjffXTeSWvHdfVW2tfq7sVRvof4GVKH3th9Wjxf3q8ti9WXqcs8tSuSy8SEjT5y5AKWh5mJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25nXNP1M9buhUXYEWxn2sKhGsX6mkr9AwdQZPDCLTr8YQsKsKi7DiEQ5V6y2U7j1hJ1in8AWUNfqHLCfPUu4NqEj",
  "key1": "2ooeCtos1AGdeVFry7mwbbT6g9WyrRGS4QYetMchqjreHjZ522zswZFYFKGuGKfAvCZFTTUPjbaP2xccxVGZBeL6",
  "key2": "3LEJjofPVzaQ9Cbjj7JjBm7qnZUq87HoAnZB9KfQCBhppyKANfzdbEX3oKM2FpQeXDPtHGzeXdM9czDhLxWKrG4E",
  "key3": "3AC8sv6rarCLqyEjtNDReqHZyb6XE2SNWffqQujgdsaCTbbTjyQEinYar98P9bEnyjf9b9eTXgamWqogFtUghEGR",
  "key4": "3rrmXNzrZiSkbuPSQrY8UTAPuDpU7e8PHy94uuW1EeAYCkKfE6T98rGoc13mD4WkyfDvBZwixV7gi7FuM9vn7T7y",
  "key5": "1ttZBfhqUpCR5rnsaLAJ9se5eD3fLPH2tpxN4N3Jns2zX2oTV8yysFJhh2YA8akx8PtgXS7Ed3FJkzaajQQ72sY",
  "key6": "2LBEKVE9xN76H5ufSteDrDXd6AsDuZvoaX1XqBnZzy8axQ1QRtJnUpaDw6rts3w5EfdKEWfrs5LdUBNNQNmomVTe",
  "key7": "3dsiPLmz7dsUMapKREKBNfxxWzNvvbKyoNsAb31PxSZSFN1cZbjFZssvCrwV21tBP3FxdvCo7kHAhEJXTuHD347g",
  "key8": "5iwBtT88Vki6EDqUkpgix8ft7cJHYg1gwCapwqPccZaFGpSE4KsmC4s6sVnyphdyLjkTskTDh7kAgkxW6WCyNPCJ",
  "key9": "2CDg4UW7sDv3dcoEcpsGVTntTM4zgBtzPFYYwEzGfB2bZWwZ16Gq9UMJUvEba1kFehKbhyuwP3yb1aoCv2SV6dqz",
  "key10": "5SWxKD7X2hJz5cutghKEw8FTubX3fkJsmqdSuMbaYW5HFP43fbzni7JU3D7FgyPYs6h7w53FN9LSL3gjseMEPW5v",
  "key11": "2C97feDKoQfPffeqUdbAuVW2HW5uT11sWuezedxbsgKovemdGFCzg6gGsDnnHHcta4U3RuhuhohWkjVGy6gLQGZF",
  "key12": "3Sukw3uyTSHufwYuxs7kYdfzuxQvoB2KhuNF4nCKmpWWG3W9B4wZuL2DmMGcfhuR6BwPKRBGU1xb4zPq4dscsUjK",
  "key13": "5H4KRcYbHHXEbKmPWPi9Dx1qTLx4qQcszgrRDaNWJYak6ukKTABCeu5ZP33Gm52Qv7TEMyFFxVwLMyVLxkmiFeTx",
  "key14": "4mmJVzreMEM3bMVyhA3nJS2bSH45ymB9vEuQZr24ka8XSiSSkTNNgpLWzvbTfgzsBVvx1wqSSkN2XUaVhL9VKFZ9",
  "key15": "buQkDhRNbkpNLqLsdt3vGNc1Qx6AfTMX6a69PRuSbwtDKMcVzwLjAT6LLDwbEmpLVJGx8rj1AFyM22qzGeDFWNP",
  "key16": "51vwg3qoM7Dv3oaMCwci8xJc4wKpwqnNYnQaaC4Rtx7mhgR33nKSsUC3hrKFaNhrBtqBCEs3Zm6ttyUfvXGdGCkd",
  "key17": "4SxJU5GHLEQFJrkUz73XZ8A8vx18XA1hqqu37356k1ASiJy48NNbd3tBF54tcM1ytMkMLSth5BiDxVBLPXEzLR7y",
  "key18": "3sDs2fxob3AWsAbAsQB99CJnjL7qCi9N1QgCNmfyBmTHtLmYoozxNVZHKQJxEEFJ9Gg1GvLimzbYNqGETQrZca1f",
  "key19": "3qsfknkwary13a5btyDaUWXbenqHgzJUhVmq7neCncwnpcgzun3bP7i3DTXL3rf9Scx1n9M5fPv6Kt8CsdnMYUwQ",
  "key20": "3bHBCbWQEgW8WEVpqQcDxKiGXDTVznKsjREgNDnpukuqEWW9hWs7G3AEHTJhFsbchFaTgPXpYs4C7VCoVeifCv8v",
  "key21": "42L38UdG9qgTis9ES2RBD1CAEpZBg5MJHNLppNBfxfPkn2EkwL2ohC5tXzuaVhUtDYRUjiySrqFKQP1DCu8bmMMt",
  "key22": "5Q2j9zP1z2Sk1NbxLSVxhwuRP1fUXAjsCZMc2kEncDNmMD76U5XbrYk6EEWL8y5jYx8PwcZJ9MEBLEBNu98qNwyx",
  "key23": "3rnfxyDXvCDuZSt3wuLv7Pnhwq7Wbtprc6Ap6h5x4x2vZ28AoLLqcrQpxSi3myiapU7z54Q63YNZqsJK7bje2QHf",
  "key24": "536UsZ3MctuDvQr7gETk1yPKmaft2W1WT79MQAHyc2bQBQDhyUf3rAPVsQryx3VouTb3XZ8HP4iZAJX3j5zpkFty",
  "key25": "2eChhpZEsew5Vp9J29jPLu4e8K5TdypuTFsS2CASap67iRtbaVyPvNgXQ9bFu5vULmxdbGqGLkPA2WSUcJybBMfR"
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
