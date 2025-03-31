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
    "5ZqWRVDwscueLgtpnWj2ksV6vAXCnZVUzDfs2ZdLm3WtDCuLWA7Thzz7jpzxzqAeMKMAH91uFkimaiAZX4QZc4HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23nTQAA622aLtW5ANTD57a4xpU4wHAtdkt9cEqGunjkTFi4NG55498ZaQCGRg5Wnk2HbKdHDE1RkctoZx4vySPV8",
  "key1": "3sZ4JGexoZrC6EXDx5RSqMvFCdZywP1eYsSDRiidneHZUZ4ieFMkdcPfny8u6FvAYyqZUdZ9hZWoSe7AAegJ4oag",
  "key2": "48e4UZxDqtzghvMHbEBhMSyrf8z9qJoJmqPU9khmLiGxu5X88xL2RUr2SAmmcgDiz1jY4pR2bQeuCGmRY9uvFdMd",
  "key3": "2GwpF4qPh9zAARwy723rpYSmvS54C6rCs1mUBUzUiW2PamcGuBxX7qwJDRUBWuhBVkMsJBBX4fJfsi9c2c8wyt2w",
  "key4": "3mM9z4g3gmbg1fVVFqMsrWkRQip6rayw1WQawr9856kpRuaQ6rJYmuMNMFNdWJzMei8RM9KHKstsdL7qfFyiHxYU",
  "key5": "33DQwfxvVyd4pLUgQzLJF6aVBZNcitum7oTKiNumWG56jNy6Hz4YzpRuTXP4NK9rHgCJryyywSE3a7DE2Asv7jSe",
  "key6": "5i27JTLMXTRQpxti4NmoxnGKfm6Ko3ud6nsBfX8QdUKhorqhoANQfDEesNXWjB6AJ6SUNg4EdzRm7aY5C42EQdgD",
  "key7": "3upHKRB9JRH7fRWjZ1vhyD4kHNZ5mpdJk3TJDk1kobnXkQ3H68D3gonDeSrDc4K88vvaXazaovrpYJVs9zGYuru8",
  "key8": "5bZCkW21CatnayHUZfbNJchhVgfAYn9bx26sfR6CapNyBkwy17aqAaxQd4s5piWRYhdzGkKNJcfpB61ddshQzppv",
  "key9": "5LTbXz9eahCNcLxRiBWp42A7wNDxgWwhWRrfjtMo6dqLYUTt7XksGf1dfy4XvBxAcHDGDu3sxMRyuKtqvpHUw1aP",
  "key10": "3AG6qCmd1HjrkyyWW7kBoSvXZX7Y6nu838UFom57tiKJfEAdM96n4PfiKkU4Qb8QQ72pH9CHu2zukN3gN4kVfpmz",
  "key11": "3rs5LyA3PZ8dyRcdL2tJ5kyFsNUabqUu8NcjFTctzQT32TppojznsEX9BEFg7ofiyQQWtFH226iBjz8v2pCSKUtK",
  "key12": "64dtKNRgcLfYkCcC63FPScaeKXktBAt152cmqNpBYVKqsjwCfwbGBQ2NCjqZBYwGupJAwzPc72CSzzGG4ttw4fST",
  "key13": "57aXZmL31qTr3g3Jk4Zxgo1YgU6huxG4DV6MDL95Pro8Tn7yaTMXW3NCnrsiKwdUcxu9fph753s2vqNXzyVfaiqk",
  "key14": "3qHKN9EyiVXJ2Wmg3qo5PPwVp3a6DCjSLBgyivtbdubEUaDTK3YipyvunK6HH6rLdxnYyeU2ppez3GuqzWE9aXTq",
  "key15": "4vKF1nyd3aCJnpe7UtX7YaZhMJfM2geGeXFCcEqi5UBwEJ7n9CYdU4Ls7SKF4GNDD7dezD6eYEKYK9FqgWY6mqSd",
  "key16": "DHLAiovS6Y3uF893MZgaXsof2G7ZZEN5p15bGMxw2oJmhw5DYNHrwH4PuUWTh7in76JAqpvj2MZjxrNNFGgcMrS",
  "key17": "5UrZxZtAN8nSF1L9i4EsXUdg2WC4bkMHMQNvEAkbjkStSchBrM5ofxzzjgmxkBKnRgUTxKi9X5QTB9NCtRsgTMqC",
  "key18": "2uochn8YARGVt2WBXbX3W65DpfPnxud6uxEsXZggLFeJ1iTw1droQ2eVLMyNDFjg1ykoHL4uHifaoWKV49R7wzWw",
  "key19": "io8q4aEEoM9XhkLqzmX7z3eqoxkB3NsEDJNdTi3VHE8oabYyzUFCWPSqFdbRtqNfgMrbCynYLsDuuia932TeG6e",
  "key20": "5vHMS62GG9Pin7NxRypSN5syZdp7x57ctP8NdVRQSzk7PVkqZipzWGkSaCo2YjT22eNFsYM9NktANruUS6JB1g2k",
  "key21": "2KBbJ4vgePourAcYREBkfUkA25uuurMcXvjdxra6kfW1gKtS93yLdyEMsDWN8eeeeGuJj3iziu61SRmmRJDY4c4z",
  "key22": "52w9FgdmmPLGbvZJC2zNHSN786xUCoJDtSvzxu4LaDK2MBeE7u61x1YUkgVd9E3WTc6K4PTuxFGSim5FtBWGkLqh",
  "key23": "2rKW6AdV2KeCH85ZTgNNWqB593ePuJXyPr6U4cyoX2KJeoH4GwuK2FdW2j5WTiP9utYgdAsHf1iR5DrXdAmx1GMB",
  "key24": "5jwPQqc5H11yNPa9D3B44SHt9iKkXA86wNThBWSQsuP8d4m6QSaribzVjLdLX4gDUdgNbhq5cbQjScH77d5eg3gF",
  "key25": "3yie8wwwqUiZZVqKttH1kiJqovSgVFUm8oc4da2qNTw2FRX2p41nvLDuQxd6crkbAsFTn9LEruAWq5hbAFcgpPSK",
  "key26": "5oBUGPLeEvubnMXe4JYY1VnectUAeiDMqypN4YgAeqNmnHi6mqGxKS6nF5UUVBTEiZaawjcYyzyd8UFsQTKfzNXG",
  "key27": "2YYYCLTCmvDBt9tHHDDMbVPiVo7xQksBxLGpqyPntQ6p4GNje3ntHKTzBSuZrXeg9gjcQTaa1kSiLbFUg7ViVofz",
  "key28": "5CGQnwab5hM49mNfghp1dzwJytvtPv9wvSu94ffEwtr1Azgx4qtZCGM136wswrGptJP9LofeSvoUmb5c3KhhsX3P",
  "key29": "295VWp9vEpjgyQ9gE5n5CRygi2b1xJ89faHQxShNgc9YbLKwBeXu8XVhZTgFBEWTQ8QADBzgx2JbWnp2g1nsLyjS",
  "key30": "2gVAra7e99ZoSanSVfUxSuRabDc3VtZBLYbWUemr54cQaQfjpBNS6jXygn8svevDqPxDQZyHkx9QUrtoM8NTP2DW",
  "key31": "4oBpzfmbNhgdaQEN6KrH8D9mC27fN3zqhBBhKRMSU1jBzfQTfFUkGxFPWNHADmFRWzdPk7HqpX1QSCVCsWmu91eP"
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
