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
    "9rrRgNomVgm3qeEa6Q97V6CmSps7A1RxR6NX86Uy1tucPfXvWNniREq3Y2RPC5KC5T92uootPxKLUngzr7bPrTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bC64MYLFdVmc4vuS6xFa9X23z7vq16ZeCvzHnyMVcaTiUmfkkREuqWFNFgTDroGNfHuXmi9dT75eZBR8C4zF8EF",
  "key1": "3gqrYqyoUghTT6dkM3Lgb5888uUEgfgnMrd5XH1QEV3jHvAae6AemU94r8oYoTzD5DTCxyfJ4QZ9Tb9e8DnR7Cpk",
  "key2": "3tMW3avLgb41f64MzSbXnGnfKSjGEonVrkEWNcQhFpUPLfYZYUgAFiijNeXJnM7189vVH22pwpNGHiwdBDVfkyeD",
  "key3": "DA9Z2H8177sU34zQo9VgQuCPvaVo7x9a6HgcnGVrEXU7Y9qKKCn6uQkeGkuhv3QM8PtVQ872Fq6CCxoG4ePnif7",
  "key4": "3sxpGAAz3x2wM9WyvtGuP4sFfzmD9pvqFU7ohaji4cp5KitRX84e9yWT25Qq2Txq31pCPDPV45d25GeEA2N5iVWn",
  "key5": "2TDhrhgqCPG8VqUiLUxjV4LWYJChNhYB6T9xaihiXwyK8o45Rh6dPiAJF1E8oozB3cTn27k9qBsGfVpAFRJ2s6qz",
  "key6": "2A7bFjjzJ9kTC8Wesdmd9Prv4di9eCsR4yMmZPdJ8aLwyuiKXaPm8XwSbN8DqTMmdEsJpRyp5qGEkUtnLEoSyS9f",
  "key7": "2LF7oyAXpNirGaWa2sbfqczFSd8nTPY7SycqTuqRoXU1CbWhvxJFGWzhXsBPe7NpsU5QwceJB5f3Q2UvaG7KFAVX",
  "key8": "5C73GrPJcNiCXTEv7LEmUPFAX5hJmZeP4kgN691bPqw7zJVGie2T4wppUXUdwTw6NQZKAjL8tecnk2P9a6VyYGEK",
  "key9": "5JXteJ88iwPxNfJivKGoDG7RMLvEx2TrWbsRmEE6EbUpgnBZDRDu97nyVhmkzp71WtdCri7mfqhQisFZdJT2gbFM",
  "key10": "SWfsqFPZxGcAdD3Lc4ajQQ7cG4Fr5hZghwUdzZSex5RE8NNPD5czoe3eeLycQcvFKzF9W6TELmWgdoZX9DW5VNP",
  "key11": "3dXiVtjdDbHJ6A1LL4LiFaJmooyjcjLdShofdvvrZx68wkxSiyvfhxWBXZob8xpUF1iRRTKF1Uws5aC9gAZ2FF7i",
  "key12": "5PPUz7JCkbNmgcABLBgp2ieaYMvaeDHcBxSarbw7HnS7EEdm8orimCL18whJ422MQukh2EfrNUUWKUV65ySCvjXM",
  "key13": "3FSnkqjpfEKJSWrd5CLzyfzyvnMuFSGm7sChmvEXPbf1ZzSJfpJ7ZojeFfE3S4KK8N99SoNPCbGjuCCtriXiS2LF",
  "key14": "4rcfMyAHdGhMestvSbboSJH22L8aRKhQwdpeaZYu4kVasvncdtLsy69KZuw2mMenf7t3X9avgbcncvRcYo9e2JF4",
  "key15": "3jH1iYE6csF8VWYvvqLdWkXehG1uDkQfZA8AYFxcipJ94iRsjf3mWvWgcZJwnyWusUQQwaQ29zK6SKcSV2a5hyKc",
  "key16": "2sJ9NBuRBCa18zwS8kiAhqjKwBAPMf4Sgx8ZaxDrtZqrUbPhe5zuudaDqnTrD18gFVX2YBuBz7GkhS1EikeVcLj",
  "key17": "657k5JSDurSNDfxbuDTKqoA5LKsxfZRYdVwUGSYUkiD4gAytHUnkkSG6MMeExgSoYmTqcadvpVhsWhg4vf91AZoq",
  "key18": "3mMfdyQs4wsP6c2Y3PgYFzAQybePomzvH5emwUPBCaCTUp18HjREvs8C8wNk7whLqpY7r6aGiSyPENviLzVchruC",
  "key19": "4z6MWD1wQxCmApJTgVKLB6WKD3hMPqJ5GniCewxYjyK9naC1oBYspKqghZYkwb99TcwPCrfUVtnFRJgKCegk4PR4",
  "key20": "562H18LRyhWsmG1wPvzXuraYE66gt7ksX8g1dgVEcjgC7XmRCMj2Xow2DwnbfbM5xiyffQBfw8MMDizmYktr1XUZ",
  "key21": "KMMr8tHiJprnJuYHZSecrnKENCxVBjBY1e8mCbHQvgrm4X766rMvcJj7fJBxuDiVdAo3DzBibxAEyF4dDKE97V3",
  "key22": "2PadBptudJkZnaeSZAKj5t4Zy8e9a7K2eESkiEraPUZpSyBckTZCboVb73mjm9i6TthHyQHjAHxmzpBc2ijvpEW5",
  "key23": "3kNRMuMXeEJ5qrrTQhLeSUdeduVysKH6AjAZ5deqcAEth554ws3d8u52v27CAFKVdfr39QDU9d2tUmiqNkNxj3iG",
  "key24": "4Hxoj5GnRdkjt8ax9Q3L8grymebgn51NpLZpRknHVXCLdKqCL8yuBRvnoRMyQCDHVghajvR58KZN29bZxCTw8bEg",
  "key25": "3WDqhTm33KgaYcPfEDqpwQZD1pRCe1pD32iSu8ZXf7ubD4XZbSZRhHUuQ28cWSdGowkmPRw7mrKqnZ6eW85BxeSZ",
  "key26": "2jusXCmf5fSdZEFsBgDkAmq5XAkW2HDvkSCkm7q8zojZnc3ySrQsgpTDfFnrEoVZbusNYxSfEwR7GCBwmUrFtbtV",
  "key27": "47cNfucP2GDrKQNpJW6vxXVbFCTW1CXAyNoG9pQaRhWFJicNMUBAt9AJgSoY9rpxHA9Bmhw9JxducSXMc5AVaLwV",
  "key28": "2mtZfFeyzhTV4Tp1i8i4pZGtWWrjsDpKhFVhZrMti56jbhq1epYe4CArRPWpHCPd3AbhPJw5koF1wF4brupBNChJ",
  "key29": "5BRT72EDFurKfcvQoUwSZunU6LneQ7DjR3BQyiRCKZ9UqU9FnsvBvcqng4SiE1NGgRac1Y2fCHQda8B5Tabc2fah",
  "key30": "5htjJExgvKJTTf8L84z53BE2nPiJ34SL8VYfd1eamFWEQkPNroTzgmV21Ddx3EnivC3c9orpircVpiZgro1XKhHg",
  "key31": "3WrLcDhT2pAEaYNLvRwTTASttCwYxcoZWTB6d1DXhCuk2N9q6FeoTmPsMjptDgvaNjgrVqb8PpfiEmZQdPsxi5M5",
  "key32": "okQZH7G3E8cyUmq7zEq8vFipda84wSLYTi9AXKdJR9VeuzXQ7meJ7sXQQK3hFmASpLgaGu6JnN3gEMKzSbjwgxF",
  "key33": "3QxtKD5LqeQYSDbhBUaonz5HejQoy3AYJkK6zmTpn9Zo461Y1RyyG6sp4FySQiWdenbCJx1hMMykkf65kPhNjxuE",
  "key34": "zTLxrFDE5r8BuhAcPf4fXBfDTN8bKMt1xLMv6TDK8SDUQyP6fnHn1G6duaJxRKWU6REZEQT5hktY2gaA2b9SktW",
  "key35": "31hGDp6t3e1pWvZQURusqziEW6pkUE8PvkZ44QRxCY8tZKzyMWCggdxmb9fvZC5jQcWoD6fUVb35EVv6pJxcSBBR",
  "key36": "4zHm3La1QAGyeaLn8HELHh1xSLEpjGde5bTpoZcXofLtDiqoqeK4hSYydUaaEa5ZuJvdcY37rdcUDJrwKLb96Xc3",
  "key37": "ifNPDnj7cdvp33x6TVvkGFnjuktemb5RwkeiXS69Y4i4x5xryvMdtcF5JN7uxjuqLPTYrT4PAwZ4RrY5PyKTrMX",
  "key38": "4hvU4yejFK9jaUcSYQUekb6d15EMHBNMZfHkfTGHEkMjGFfZGBJrG3YxuSrapzCyu7HAXxo5cjhor11wXJbmUNiQ"
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
