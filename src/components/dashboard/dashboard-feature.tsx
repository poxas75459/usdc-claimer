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
    "24H1MQQYwnuuLrJYDkC76ALAaCHnDkomf13aH1AUnD5UFYABBiK9s7gbA6mcbQKr1pWU7pfYAMtnH9FzjzWsCpTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dN9ev66g4niHapvEzF7MPaisctMAEwyKYeubLV3qGwa2jB2EAqWx784hEqANKmjdNpJqR9bhCDUk7mrvybjgTLJ",
  "key1": "3EzQTev6Kfq3dFxD96N3Pozyk4TbPGHK8KY7ebykXrSAoWSRPdHobVeSyhxXmzVcviKrMm3uQ7aVDJYKrKggen7i",
  "key2": "31PUGBvNkEyBm3E9xtoiHv9HTj1BkjNTZYrCyrhmRY99LsPfospxn7amdFiuemhRAmTDvdUexsLMbfMYLx33aM4K",
  "key3": "4spRGrM9wLqPJ8RCwU6XWziZXXK9WSPkbdATwQwpnQXPTyjRS9GBxThnGtYg6PAbKqyQHt4crNCeJWsWAoKRYtEP",
  "key4": "5SbBZVxrQMnCZ5QyeFgJ7GjfxqsmmC45GYPHEf52u9mLYtQwY7RyJKPwSK5VUw7zEbzDSYPoNJBefovjr25MzYiT",
  "key5": "uAyWGiry4iUqoNA4dUBcL7ctN3DbtLhnbLJxBtGysAAjqbKtKmhVWJRZVWcAquk7XctLvKgfbma4P5b61Mg5yzy",
  "key6": "4YmnKMQT8smKhBhwc84Kk4QdvaVbmRyq48hmJN8h9KkerhtSY3jwZAv8DN6htUx1zEs1pz8tD7sFMiHF94ge8vkg",
  "key7": "5BsveieDb5VgmHmdJUJJcKq5B1Pb9Z34gwSawN17eqjmqUi7HThg9epBecrzuLXZjnsRak5kwtgdJ5UbXxEkh9bc",
  "key8": "CYJg5P63PGhcurAsH8hkYPfK2GEiRjpVye9aJG9X3bWfkn5zYBkBzdori5CGP3KKzndmtgYsJpLMsdscZBWFbVT",
  "key9": "5yrgDQPEGev1bsUG8dRnugcUCLBAtvoSkz1BcTMNKp8VqxuG42i8NYjhAE8ahF92kJP7aKrGqm5NMtCxdUwtnpRH",
  "key10": "5cjDsvRKsVzyCK5YnrHGBDFpGgrQSpbePeGbN5uDgq4d5VJVShE661STMLi4trDpDRjND6gmqgTHQ4Sur9LhtShn",
  "key11": "4NAbVKM6WgA7LR1FodjHaYzN3GJy5DMCaYj2EShiPrjBHyPegU1x5ChGWrLPbAiif51hEBsKaZBenJyvqY8x9kw",
  "key12": "q79Zq28PE5wKVwqRV9e8Zi5rUrFjzFTPU7Zwo95jJXuXGmKnAzgX4KfsxaquNbkEZV9jZHezGW9iefehGWqyvUn",
  "key13": "2odquV9C1gi7UGnAFKRgi7BNPGZP7Btt7TcsYyo7KKAnfXygqroXE4af4ZZNp2EjpMB35mdG1WLosBtVskwMb8Yv",
  "key14": "2y7C79pQsiVG7vbJd2EEDqZactPFZcumoWQwg58H71zVKYbVrk4jU6aho5DC7TzX4458DUDXnpjNRUQVFbH2geKM",
  "key15": "4GwbF3r9bux8ALsBahNAGq9oXnURQ1cnARjEwYUBKinriiQG4KfqDaFRSJeK3CQxN9fFGJrFF1r9bEjYx1bkvp3s",
  "key16": "SSXsggTdgqr6nE1kpJHAm33Es3dQkBqXYyZ656heb1FyyKUo87dMfqQhNESo1nvtds4eFUijJmAbtP4rvfZkrfi",
  "key17": "5JeQ74bNhBpVU1gzFhY8swQA1JhsJMbzhxQ9GfKDrDAmjQXJXJWBKSSsENrWP1JXcoiYP4oLx6Vi8fMrQKWY98DW",
  "key18": "3za3wqs5ZMepy7uCMCj6Dsosv4wrswuZDMj9CiaFQLRmdhw1QxVqcqBwWs7otqxxN51RTYPMc1iC4MnFaoc4fQaN",
  "key19": "56dnyyqppphiJpc4qynGvf7cT5t5uCXhgKo3p33RZu9HqJanwU9oEzLkSC4y1BsCpwGxPQuL39aSZC2JeLkrPb4M",
  "key20": "2XVRdEu1krg3Xc1tMEuwrQmKU3sVLcGFib1jxoMLKbo9kyCYgvfYhxvr96LegA985aDXYGNCNAziHz8Wz3ckeCYA",
  "key21": "AfqMFdoRQu37BJzcqfbrnsVg2KVetkmtgb43EnrtZQYP6Y6UZN55UJmmzohzc15zppaNAR76xUiGJ5aHwPMcv9W",
  "key22": "4o3DZCtqhXPKMuTjh9YDSzRmyRmHzGqZZAhdRpAPh5qG3kJZiKcihQtDtSy84kh6UKs5Z6CDdnXBhwBEwRk5KCDn",
  "key23": "5bxZDniGNVveZRtGVHeJAkWZ7VEH9kmYb7QPFMfj8vuojRE6uGZtmxm4Nz67r2ZqGX4MxH9uHzEZziuZP3PLxLEU",
  "key24": "26YBxNykMegqo97s7RD1euDZAcFdhvRYEwxecEsmRKM1CDbE7LAWeJcM3njuMZmPxrqnREUEPb7G68TdynnkWn7c",
  "key25": "Dhc31UqWqbKiw6S2Ku4uFbcj81ZeVWM8tx6Xjq5NGgKUceTJCRVhmFoPS3a3wW1PijmjQABhWYQGHkVXfZFMGXa",
  "key26": "4A6GXtAwdyXy7eTGi26FfFCEhUpgSZPMSkyVGBwq8KzFVktMaMv3topY5RwsCjP2HBwzDD5h1optUmkhiNprosbk",
  "key27": "654Za9VBD9qYRdfTRX4JdFV66gwYe9pRt9bbNDbyjhaM6ZJPiB8Y2ANzxo2papYBxvFsyBXkY8LzWyGEts2LFkW9",
  "key28": "2CXq3BhpkB8SX5TEgcj4yKnP68oK2MMtycvXR3XEwbd1ZcYsdgqCB8Hz84o2i1bWKD9Las62fZZbzwbusW6sYZCS",
  "key29": "3VhYCfv9dX4GnDnXUdYYYdLokMxkB13x89UXFf1hdwp6yXf3udWhDNALqDuc4Vy2MA25sSPGA3UNUsAEwhNsiBXq",
  "key30": "5xZ2F1dZzWbRCxnsWUSYE5WxLQKDXiphgGBESH5VG9FE3BkL3JEo63KgHsrCbb5LsgFEhKcJfrdnZj7fsYthxp36",
  "key31": "26VVpW6ooskqkpptecsJCGFE6Gx91vK5rKRY5CrASwZv2fWG6CzX3iUMTpt4gZHUbUj4FdcXQekbHnWFErHCsu8Y",
  "key32": "5b4UtxAJLgDAaYGTEfh3Da3fwtsp4sFxZ2T4pcaopSmZGnkH9YyAovxBurS9UJghLL51Ewxx5rYBZWoPAYs8Pbgf",
  "key33": "5VUyzXbi6MuQ4vBE1obLB4HuPNqGhHmazHZ7CCb94AhSZKC52RQjHGr9fDvo3eg6fA8TftTzaMNndcVY1HnN3r7g",
  "key34": "58a2JPardp6EHSGew8n3R4B7CdyTyU4TD6XeZb2Y9dfRWVtDeXzRYVf1q9Pc7C55XmnALfro6iGhcD5oYuS5x7TX",
  "key35": "3ayxmxdDw6zAN1Qr1VFCrCubachno9YhByNoKcQjRnRs1twtPBzSRScnmokqtPYqEYXtystbsy7ghvxayL22sgh7",
  "key36": "2AqqHU9rc8TPiPddmRSN1ZUDKWKqqjrvMsgdAnsoRhagh7PQc5UNJppK1n9GjvnoCShQcKrnwsjNyfCz2GAuWGQc"
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
