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
    "42HKvBEDshB8zbKH1zdQjAoNa26dToMBFRQXAfhtZVikYbM23CWuDYLQVNUzDiwF1xBQLJNxGef5TXEYEn9nVzYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PPjKRJZ6ExTPszYH6Q2zpayk3hHZyrMqrzgmR56m1dftiNKEmKtxnVQzewVLvv7AqR4w2TDRZyAmcEXdL3rcM16",
  "key1": "52YLDCQRgM2UTrfKg3RMnGmEPQ2uzQRj5BNfJubTCbHQcpjx36nSLTbohL8YpXxHbYTZpHMLC62e5VsMCK8yBCuM",
  "key2": "5PnqkETMSE9iyqviMKLSyNhaDwvedCUcUsCHhMG2JqLZr7e5Qaqfp7C36bPiGvZSTqGqEB7Wv8pg946YAWi7kenZ",
  "key3": "3wsS2mEqzMsibDojqsD8XGaG21Cg4ZWZDHRH4CoKM8aB8dJiPEMLMJQi3rbXdvWUwvAnCKUSAZ9iznR5XQnkscJv",
  "key4": "gjxyRCm9fB659msRDjPEpdboAusfyHR5qwDmsG4MfWyHM4idCzrBAFKpM5xN9FhKDbCGcapeMaM7VTSzyBVMs3e",
  "key5": "42RbGsBPBQrZZ6xw7EUji4wbd7qvVZmGxR1yNk1UFvNhR1v1Ybn6AJ8rMccZxrSvkngS8z86VZU79BcvafJqUMnz",
  "key6": "3Lb3xkV3cK7zMRfspKm3dTcx21sM2GuWBuXYnSeH9z8XdBiWduYegRrS28fEdgqhJcXi98QxVhtYENNawV5Z7ucj",
  "key7": "eQYUpUaEdWDhoLQS6SCKg2h3WPN9B3a6dtwUDRbWAsgAvZehtpy3WVpM7x5nw3KQxFmDGkMSEjczbEow6Vh4hqa",
  "key8": "2s5yvALUXw7nQ7c45NeQJEF7c9qgEw2Q75vNXzT4JxtqmwbHjcPXGaKySsPwtsg3biAf7C6bKxjDYxf5zXo1wzTd",
  "key9": "3NFaWRVH9CuvAjDTEgqmi5V5o77jtYjjCA4sgEHSuJTDpZy1BZSzc2ypHHDg1s3BhesVG1sC4hKH9TKpzJkyJsr4",
  "key10": "3pFu7kgnzHDeJLutFWJmFRCn7mdLaC5gErmBwLrhqTER3BKZQX8iGUbU1tBs3wsaZaMvGQ8MR4PLUDYkPyQAFAR5",
  "key11": "4UcCu2hjJhZZra2KJE1XkuV4c3QyQE4c4TExzsPDaJXnGCKSvNmUUGToQyEss5KAEzpdM4EmFQSEUKGLAmXGD3W9",
  "key12": "3CfLR3DgRUHEuQv6qmjQVt26sagjPNnveRaQfuAucWrB5KpvdCQzDT3ZUFFjTf2NNpL5FHS8q4XcmLwh8j5M8oi5",
  "key13": "3GyqEK2qipJFCdiQaZb8fYuxwuAm3mhgRVstPSwzzkuruHSda6pwQZMFqkRVbMzSGeS8tmczBv6pSRgEp29xq1TP",
  "key14": "3GmKLgRznHbcNyxURBq1X6nvNt8dryfbBMpgpz2izwPAziWwhYJQsT6BQkKcHN3YVG2bjSUxAjkS89x2wF9Z6h4x",
  "key15": "2RCjwMqdzEjrqgmG3A9GJ2KNJqC4ot3hvPfaunTYZLzJLVbmsYKKmsCuAp8qhbcEk2D4GPeWMn2LjM3Y8YSXedR6",
  "key16": "5ziEeCReDHuWrH2fyTv4pKLpthCZsczaSDyVge4YJsRKc8LVP9QnhAAWxeuBcQDKqNgaW2vXYGrP8sLuBnCwVzCy",
  "key17": "K1XYJm9ifCRA22jzYSN8g9aTsGUupMdsv4Qo3DzwkyUv38YLprA7ddAyiuRorG7rxhkAWwazjN7jnSYC5WHonAM",
  "key18": "4WmcdSWWPQ8tecku3ydrWLopsuwsAJk1Gyqb2tbw582bdfE4tHJXrMSBqNwUYGQeqB2Ji3tHZ7vdNNL8JAGnJtDc",
  "key19": "4fv2rZqQ4Gfba2D9vBzpYVXvaWX314u62TMgmXpqVumYnFVRuvpuiAP5XjKMiuau97QJJHHiY1P3FkFU3iYjcXQz",
  "key20": "ByGYq14Cc3baXo5NzGsZWMkVXK9QU5BKMy784MGvun4sjNhSNMEEbJAEMJvyMSarj1kJ3y7MPBJiNFMqvgUP7hd",
  "key21": "3HfCNHBiiFL4axn9sZnsyEZmsgAaPy89cKQKoX3VGghie3WUgozLLeNLtct5J2byVSGjav8Cz6KXJrb6uchUftfb",
  "key22": "4mLgjqNmJHvm6gjTQqCqWHMuXn4rcrbWMBivNYdxzHoHETBognFxBgRQNZ44hhvEbpGfnpKuFuhKrHk9cX6U4ovQ",
  "key23": "5iaXvLsg2UN13m3S2Uc8dQ2Dw7uCxmaCY3YThvEHRkrSQDs9jCm2tL5jX3YkyRYfHpxqiVqtsJ34zzxEfTqz2big",
  "key24": "24kWmgrsko1yj94rtutSEChX5ThQzaznDu1dpoiDPAX6cr84hyfuoSZPjBfM6uCcq6tBABjA6tXPRmxyzKdE3fNw",
  "key25": "2A4mubjk3t2xp6dVhGTUuJQfTJ75a7DHDsSFjzx3mACTyG9zR1JTX3DJFZa7y5fZQcmYMEGx6X6UnicoBZBdHNx7",
  "key26": "jbkDP9P2ha1RXf3TweRGVsXEV7ZFW38TTA9JwqpaARfM7i4wrLtseNwzRzqBEntzZQGYZMGUJmNPg2su7QNHVp2",
  "key27": "3ZJqHSeHMs4mq3LQjKgJVp1BZn8YUkFzEhmrhV982H4tA8C5uhfxvF9M91DgoCaTkA8yeMSUmStqtduG93oGhc4F",
  "key28": "HghngpPQrQyjAF1CTFt23KoD8V4T6q8w6HcsVRstvr6ddDfk7kr7tFWiUTfYLQWpWEF2M8sGYQL6gu9NziaiiHE",
  "key29": "3EGPeS4vxz1uY3ozBGh6acC8WXTnbCzRRF3s6sCzj8HD6vQaAAQDA8GDG8B9gmobVftR1frTNDBdLD2gJACMiXMw",
  "key30": "38bNc8fiK16mPzr41HeE11pGWosGR4GWVNyLoyQnzQ6fakoQ5j1DNEzYCDS2SkkdsLdKGN5WGPCAE7bMYzYNqTLz"
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
