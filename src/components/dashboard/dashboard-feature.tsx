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
    "uY92ML9axUDypGkUErVHNMCnajz5AKpaWzPTSXm6P9uk3NGoe1grihzxRJxzCZHCBgrYVQtSE7d8AqxGYmdLfy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxEiRvuMHy8621ujqvsJFmcQxM2qSNLHfzrRU4nhUXTkprUgsLUg15C5qwM9xa2PMgk3A4Q9Bq37PyirgP99GuC",
  "key1": "4wd7Dzmesy4AKu4sRL2cJATQeRLsTVwDzevRdkvSg6FqqGmkqNBe1RcMbg9LVUcLHsUeu9MLN3RyiPQQUfTz6NJL",
  "key2": "qKsAa4pvg6omogBHhsab44jEzap4RDQdfzbCBcrn7gkLyNzAUQibiqVFxqHs55yruQkYRbjNrUWuVoP1Xctpk2b",
  "key3": "2H3JkUqfsWfQaiBUuh7rQVuHKRokc4EHF3iut3x4DmD1yGy2L1fseJ8vqfNPwdarnkf7wyE7EkdELzS1zvy7LfaN",
  "key4": "47FLjngvdotF7zJqb3GLgUEKLzzy8P5gbbrA2EDX2R7wKAUfr9bnZxQb6PRbRhmFKmd38SeU4UTx7odvpXMjTY8W",
  "key5": "xSPS3MEWnzjMKxDixaBLANRk8gy2joNb2LRLPTfdQH5guvncpgv79k7RvjFYiuRrrsLXs3oqra4y47qsGxfkd9V",
  "key6": "7qvsChQYiUSEX1wMdn7NnKQrs87hAsmsm8yemucHMPzsZKAXmm3gpXTYaLbFd6hq651iT13z4dQ132QvwZmWQxD",
  "key7": "61H3wX16at5WD4h7ZnU7HHVr3CEE3eyBmGV6bv3d23u6NUo9J87rwvoeNiSh35y3c5ghKtYpshHu5fJFsNXvVvUS",
  "key8": "2zSPMUT3gAtRhsWq8ZwHjkA312i4K5duDYhsTFH8MxhxzPdQfNe2YWAuwM65ZsxBJda8biBqYVy6StEPJtncN63a",
  "key9": "2nR8KqD32WYGJSFXFLRJaV7q4ZXzArZ2UfSJ5eHEXQjfGH3ZHQM2aKenWYBvVF8UGtY8PXqBQx7j5xEn9LQsnwpu",
  "key10": "3soPyuMtobbUbirmUUKdgsUTSc2oreMEKhLLZmHHWhHB387YvpPrTct7XZRohDVKpneGdNDuy8VAaqqoqhKVwgQ",
  "key11": "5URb1tt4iBAzEWneTpjRvt1VjV4pdFL8bmzwQFdvgCHXS4qZ21NkW61MMPyByz33QNLwh4ihumHPqk2LA7ebs2B8",
  "key12": "4teRLS4mtxV2E8Pqgocxq6ekfyRnz4o4VLBzcgJNvPVE5msE9PWZMa2tjVnMRLrqXmC8JFgZFkQ1j7A1kroLCufn",
  "key13": "3FHWzFWTBQ5kU5Kb4Lku671LANG6CJJH5R2khrob1ugV7HL9S5nwfJMnKnhNDQdgA9RNXbnaUBFqX7gsxvTfHLai",
  "key14": "4bBRRwqPrVCutGgc7AtU5SeyBXecwxpo4saYuDhXb6k5Zb75npvMPPpLRUFAiPHy1inwVkyjwxff9mW7W3rvFLCA",
  "key15": "gCz8AStXkSPiv9FjTt3xF8cVUjowGXkm4KybTsuqqPs3nEnsf4VsAZJ7iabRgnnTtkG4z7DuxwfuEBGMiLkiqPz",
  "key16": "2ExJkYjPaQbBfcunrGUch49kkcZcfhWj8KeEo17xvx9jRb78jv8mV1pj9Q2ZeN1N9LioHcYsvzyu3q1fWwx5fN89",
  "key17": "6Lv4NtN88Kq5SVxjXFcsjw4PHiVmxUmwRfpv3qN9Y9vEvBLPqWDwbBgeyfNo2JeJvJh6vruAAKK7gd1LP4id4B1",
  "key18": "2YnSzozaLQTLvosetqz4LtGFw9mewwm4swoMMsC3CTM1SjxZeSSsZrzanTpvznvmtmbMxEAfFpD2PKmGofFygYMw",
  "key19": "3TYxUSVoEAvAGNVSE5mnQnmsQ2dR3J1tUWM1LDtuJB8PTfMCETpVbmfaJXn59tkwGRHiBJp2d3XAwQRcYqpqsnr1",
  "key20": "5cKAVLH5x6oCPqGXcGvfWhYr8wypUF23tVbvbNtzGGsJuG7iJCPstEj8r9o5qvRGna2KLLS7o3j2LYLeywDvz1RH",
  "key21": "5m34hczi3ZKwgG5wBDPU44cDeQXVyRdEpHhXgqLGAbUUeZju43SqKEemMwtq5Pc9xChaNdfTfxmKPEPEq1ZdUY2P",
  "key22": "54U58BaWXG3WXCzMwghZH3yGdf4jPUj442VWxTbtYUv38R8EEYMHaPAqA28XAofGG1KvyTsSbqSkQMqBVY4CXBAQ",
  "key23": "4S9UNzCzhnhdbKmJBeMovhaS7XeEa5SRdame4JrcvwRB5c9FvfGc99tddmqVFQSJGBLQWeXLPywD8mHFFGUCyrvN",
  "key24": "PJmQx4W2tZYpT7YHW6ozoj6DTmnUGS5CXEs3SfSfAnCjSTwc8eKraEfNchbYXbhVPBstrjAdub2pEmz3WDixXNg",
  "key25": "5tNrH7czcp9jAwrt3KSAaz1hMUFeXMa5VFAALFbC2bVVBhV1SgH4xukRsD4F7orDZu24cyVzq75JnmFaZRsrowgo",
  "key26": "3fq9SFzuaVy3shKVvCGcbchHgX8ZiVKVqpSzLSHhuLDPNh6WBwvga8d97Q8RN2nZej8n6tTodxenirC4Es6GSgv6",
  "key27": "briqQSm1YGisEewBUKfT2XPsW2tQJTeBr6MzuHWjp3cEWUhhnxg5XArXPuS6BN238Ux7eVRNTDiSP8c95rEsbmT"
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
