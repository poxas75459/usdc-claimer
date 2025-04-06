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
    "3vNgSVj1eU2FRWQYoKnLuoNvCTSJ12Vpm4z18itTuQKQGPeVYw1gXw9YB6EeA7kBrTmbsNMbmgx64i8yibhjDoWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kRfSeDozbdUEbmdrz4zMCYNqWQLCn3c7eDJH4cvjHpgRhtDRcESxWm3SzgC46dgn1wjzfVPbLNKMxQqoTKPej1e",
  "key1": "3p617cxDWLLEAegsT2hvniC7iUSMBccCqPa86GTdw65eUZQitbG57FHdTwiWskNV9td2biDb26naZa4GXixX6yEL",
  "key2": "23TzfZNinFdQ28MffgpXmk5cBgsfn7QkQtSJejZk3SHpjZHk4zeQxjKAmnx2AUnWFqAtwJZAQCLNAk25j79Hx4Up",
  "key3": "3Ne9wiBHHM2EzY4oqm7o9urbDdMGyXxhpuNsP8gynUKDC1LPK8RvDdX6Zs4YPaimaaDS1uwZ7rVhgA1bnnXeN5oB",
  "key4": "2dKqLeQ1jzxpL9igQxJT3hzjZ5Gx1XoetDLbLT7ZqPgLcgns7bARtoE7yVaPKbRriqqCaiEsi6CgAtFwLVWVGQrr",
  "key5": "4khj1U3z2RGmX6oq4ecf8MfASaHncysJ5sx4xEXzVz8Xk1pUERcBdvtaHdDVVawussDJ3Jk8o83pmTQhtGYLfcTv",
  "key6": "5NYqibiVLBAMAZp7LAgjTbmFgdJaEonek8yuvyEhhBPXHfpSFd3e4K1CfwRS5yCAuvhX1omRh4Q1GHxNyUNFN9FU",
  "key7": "3BWAkAL7DdZhhaaEWnVmcBiJPrhDeHr6V8mbLEXoke4qSKJFfz2KUkLHpKDTDiEAmNBjN5EtAMnPXscwp7BZFKVK",
  "key8": "4bv4VHo8z1WT9vGLXjLVX5FeYN7BMYh76V42Ws9oJzt9Jyj3EjH21NXZ62frzn5RSUn1PDzg2WepvjpGSnTVta6L",
  "key9": "Pe3MCK78Z1FYV9USVc9tUX4WvTQWuTBGwrZ29QWM1Cnp4LqgGdZCPN992nxFftWBc1cxFnSHCk8uXRNb77e8nET",
  "key10": "4kmpogoSriXKbU8gxieZ2XMM7nBHVeJwhqAqxELuw5oDNaPVAvirDK91bt2zwkCSxEZNFY8Q6bjz938J7RAxjjgG",
  "key11": "437Ra6w1mM6xCj2gZxeM2k6fg3sobyAuFK7dQ7gFA9P5Xmti8mkPCweKa7GJx3gLjfgstKwLVpP6Qxr2Ns8JrG3x",
  "key12": "5QombFy8Q4qMSSPBoR3xcdrgsXdm2WEzFVnFtHzEkDFK3y1gu6P9UukHcrN5Tfo6PLCS83gqC9s6GpL5bFdeaWM2",
  "key13": "3Z6bnyZJPSuYZxfKRa2bikQtYLvdsrsnN2kDXuCGvm4TJ2dfoy1QNZmPBUY1XQVJ1eNEfjsELxQkifZ8oCSoEUH6",
  "key14": "2zGC4Y62C5q7Y26toJ9GfwJa7dSxiaLYquBHqj35HULm7ntCqGPudvgV7df15Zrb7f9TBKzV6dZ9MemAQ1uwBJ88",
  "key15": "3NJVKVh3JnjNNGeLBWSj9FGRfjFPsTaxBz84bki9ELMjHzfoh9E1D8mnEgQm9dtUgUN9Ens1ZgGADCGNmWiuWLa1",
  "key16": "2aN25uDAQu7qrajznbANQRY76C8vLCZmo57MvSXtUDJgdodv849hHvJuV1xHNrkfcQPzYvBBtwVh7v8yHdqPfe3F",
  "key17": "2Avt4BDnkf9pWoSbYiBqhhKgigsmHJ2i75W9BXp5TRUU4dizwKmGBaxiEmJ4qzkmoqFwvDde4kjigbAA7npFfMd",
  "key18": "282LAp4iFnpD1u3qkpwrJN2cS5XeC2Jcv6p317re7ZH7UzuDVk4ayrQY3JqJ1C3NhZofJX6MFLr8ySz1xEZYrcmQ",
  "key19": "5f3GBoiBRYuMnnMDDQNsttVwS4gDPSkQNm3siCULo6NgJMeG1fcGRJGdhMDF6ZDAt3AJMgRg7rJm4TcKaikEwnuv",
  "key20": "5aLoBeoVVoQ1R73nmRVoZaV4ekm5caEkdL8QBPWWYT36zBQtkmhkfskhQYWaRkR8LKonwjJ6JnF1XTyqpQ3Wrf92",
  "key21": "4jsRvud5RKFASmkPZiCFzNorWvhYiskggZGCYDfgB86uUmenTeKxatZwY2MUUec2b33ruZv31aaCUu3UyGd7BF7E",
  "key22": "62Cd8huc59sKD55TdK3bnZfzzdHJY1HMNq6NYSQaz4Xdxj4MGSKj71c4va9YjjPY9Ybo2NyjcM7wZTQMb6PT77Xu",
  "key23": "5Y98PF24wbsZQ1z23kT2yVfNiZSTStmRwz9aJT6npMyY7TMRKc9o2mZPH441uwxxBfx9us3PLR7ujpZBLnpwgXzK",
  "key24": "2JBuJR18x3JEF9KD4FRKFsXwZaow77CZtLY5WjakmY7MSPY1RppvyGJ1Je7THiH6aAQBvTYRYo63Tr9mUVzzJcZn",
  "key25": "3jq8X6sM41avKmkKv2xASoch6ySBXrGSG7tFf5VoRgxjkQGRMTTsid6taBCCfzV5Sm4xUMysdrdJDAqkPKTvP2Zb"
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
