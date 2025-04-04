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
    "3XJR1MsCXbBgDLGv8Yp8TW3piXHjaVBQ6mLnGhiH4bT6KiWd9QF4ZJgEXFUWAB6F7j3DHKgCPc8Zzxj9j4byjWM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tsmmyk5MmTH1Jqxj1brfEaJbvYWANS4ibDCWj3VbcGUFjub1ttJrdtuoSJJws7UNuGrv4gRLiCv1N2F139ziCDC",
  "key1": "2JSNQro23y1qBnFc4zRLoEhonsTaimfmQ1B86V19uggseuj4jVch2Mnz7trX4eS3PHwLKWTMEq1QkXZWB4ubvpiU",
  "key2": "5azrCRhfKPRmBF5iva2UBYgP2eCcUKY6vZqVbGyDd4qrYhoP3HbgsCoMKtfNea4zrthsyNjxu3QD54rSDNyg2B7N",
  "key3": "TgBrZ853Q43oBuQzbcPhz9qdZgqbykneybpZppRLJizDPh4XFGeaKbhqivJ9wgspqme4Kho2rhYQ9rq3VGMVvX7",
  "key4": "4YArFicxB77seuTzsqqaLq3zusBMCTPvgLVh7pv2JPYySDgjwU6e7w4CC2sTvojQo4koHMpG52dQNNyvZdrHJRej",
  "key5": "T2Boqi5Xw3Kq9dSNAKurVaZ44i5Q8xy6cYFkSwaaZrdoDNP3douiMpFKaMTNTRboxBphCu9KZAopBE7ZjSPD2Z5",
  "key6": "51C4Xx5kUi7ND97cLNXBz2g99Wggw4maxs5s8bvhE2qY8mDfs4mKmJWAdYCrsznoj2Uwf5iyDn5Uhjf8uGCPBJrN",
  "key7": "3zznGJaz3ikCe792vXpXNESgP2DiKKyW4iXYpqcmXYw3n7qHNPiw9iKLRFLKm56QoQnZZrUeMB5iWisZXGubN6f6",
  "key8": "2WtPJyTUpJpyN2WsZi6KoPfMyCFC4stLpg1sDdF9BUZH1JGH2jfh2ZQsC2BV9mpFsUhMajvEuvPQGAuKnDLktXEJ",
  "key9": "2ipE1vupqi94PTsdf9WsQw19NfGCNLkZgBQFujovi2vo8Fgq9tq2HP1MAgZCj2Zs7upBneMLgeswHBAnKFe5k4s5",
  "key10": "5EQyi1mH2ryPCJehWx5KmTtiCxrqXGxGtV7ETCHPzJFzHra2Tx7fzuvhL3uqLfP74yJTEEVSDZfGXaEWLWBUrT4o",
  "key11": "49SRvkzS4sNAL66Vrst6RmMCstUhaHQg55C5qKUsHs5iSCfDhxmt2BYYZhoj9wkNCf4oGtDh815AtJfzq5suTHMG",
  "key12": "5AAieqvZz6TcwJ7h8pXXjLeTaN3zgwQuCcRVoquZsjjPfWuAoEU83PFL11iteQcwGuQLpqssHUuoiBR3yxUjJ9Y6",
  "key13": "5R7UwLaPCBFfV2xvP6j4HS1d8WiC53KuiFy2Riczo92TYkeDSm9FwpC8hsF8dqZXzX93HkyWUNPCmaKrMfdGNYcg",
  "key14": "2EK8brSssJ5SQVYPqpkGpWZtxm4RcXCEgEEGS6aHQ51H3rmxXqnGmKR4Z7WvuprVS4HLReeonhTKaaRPGBXq7Gk2",
  "key15": "3vGk4JkskXc4VHA94RquAnv7SdCXzZPCKxVuaQhAjHiGFCjMSjkCdip9eKKYZKCm5idEK8B3arUeBiBEos1hMxy2",
  "key16": "2vB1Qek8bRqyrgqCoY3ebtuVbLE6TNG4fJ2BdxieBL98ukGVCkBA6Z1En3u69mX5VDJvCJye8z1LxaVbgRwtAQBp",
  "key17": "2ac1nwuZoVPJTJxTM1NcVi2NsWrJcKLKMxZvyqgbsfsACzt5hXm1tYTdsrs4q6bEGaDZsMAgp2rgfXEGqL7LnJKR",
  "key18": "3qGjZ6RjteMnsgVyHgbQ4VvBKXqJ7wTvDL6YyN3jHMKrjBAttXDj8bkQhkfb56rfEQhbwgQ8LB5b56mDi4MQjzmR",
  "key19": "5mMJifF5ZMnvAzqVVhL8WGCZNUHCQENVGhEKU979DrK622uR3yE6yMeMjmmEHAd1QSYDfpvZzAFTBuMh7PkXLb9J",
  "key20": "3NXbBx1JTgSGSuid43hxQSUkGSDNK6q2Poh1omC9vsvFBNi1D3mh7mGmoKKGU9DoL749Zc5sUrTYnefLo5tSnGjF",
  "key21": "4CYdPdgT4fRVB1hpgbvV9EvSRDcj9A8JnyEdYzzJMeKD7zCPLeuV5zFoEsEm6GbRpGyhCjzdgqyEbHSXmsXjkKXt",
  "key22": "wnpdFaXK68aLCYvRkRp5ryWZ8Y1BzHezg5pKhMSsZtgmtEdNFnR6CgioBZGpp7arPQ42U2rCKKjjSRLt3aDS2C6",
  "key23": "5ukkXwhyRjvupg4KtwsVLb5rJxXmf9Z2sNzAYPmkMT724HBApQPSi9omwjn6FpCxMU3KCQCoh1GuupczZpxoumLD",
  "key24": "5dFP7PtnEsDcL6kfSTEQ7uBWGsf5B2z1sX9aYcd3M3ueH5VQBhVKb6jcL9kK78EaXKKjMNWK8hvD1bkVtUoyrkGV",
  "key25": "3ALiFV7oX3vnc9PGBc4Z2SUqX1URSS24vAkUzh9As6Qs1C6RF8FmgP18qW3DTrGL71zgQvKFUNLomPqv7EMMsCKK",
  "key26": "5Xkwid1frVfAKJqQ5EZ5Fw2ZBfyEbB1FkTm9gPmfewsVeaN1VV8ynAWYp3qjW3J51rMrHbGF5jgHGnAkYgigCREG",
  "key27": "4vt48xj1Wp1zs7MUYo4dsCfQHKf9cNxQftVtGE4TzM2kMafJZKHAear4HirJcadHmDB6mYJzHfeA96p9314fPTSi"
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
