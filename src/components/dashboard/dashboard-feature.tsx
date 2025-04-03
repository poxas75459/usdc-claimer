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
    "TknjJ48Uixyjvbec4sRtWbBF3XSYidouxBWyaL3vMv2VygtJmkNkjZcSEy9Y7vgvpskJX3WsFJgZpjJW4eeiXot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CXvoAzAEqiibQGZDP8VfhGUinteQzNrSnKrMJCBvbE6HX3LYYuLTNnkjoqQh4J1699syGzFFsL9fxi2ZeA9wYtA",
  "key1": "4i5MUa8kA7iV2mYzCjUJvQF4HMidm7uBzEDpuGX2MA23kSdpXk7JFvBvyZZ8WEaqhTu3qRyLGfSkigNi2sJmAUoy",
  "key2": "tw6d3sLLrP5wCyXhVBX65WvJuwPdgfb8JpKwm8Gn7ZcB1Y3uoqtLjfxzG9GJ9QYrDY2JNVWraUC4G2UP8d1Dz3A",
  "key3": "48t6RGNtDJopvWga3SUJhM922iZyeyp1NA6qBGbqXeqbhxKwr9hQDEnZrPFG8BDTUXpNtgemz9i2GEzGzkcqquGY",
  "key4": "5RdHTmoUC7XgZct4NB3fwyHoK3zgLNn9mng38r7ZgLZNkX7apnBBPFbhMY7KcRNm2wvzFATDpLx6uRF4gmtxSSHD",
  "key5": "eP6oGc3L1kpiY1bXKkzdD9dqiEvRzwXrSWAfyJjodH6kfKiYYB5fwsKN4a29mLhezMKCJy1Q1SvzaohXSmR4XA6",
  "key6": "39cxRR6ADz5qBv9nzio1eWHNps7U1Y3hDongWmA9BVM7zYYvj9AmGPKivVxhSGiD7qcuZxfsSVPVoM2wEGfN2uWR",
  "key7": "3HABaSFN5vURL5iTHR1WJZ9qGHFhHgCQTTwffgMwSVGfG5Ktw6pQYxZvBPYJtdNWViYqa8fqpEi2zWD5zxjrX84V",
  "key8": "662bDPXdzsdyhdXeAkAKWkGgez8TvPswRrMrq4PjGxcMfQK8NKu7mzakqCZ6cWCQR5N2jgRSxZu231NxUVkcpX2w",
  "key9": "3RgtsQN9BSXMsFt1YVWxqZNQqGa2yAoKFA1pFtfbkV3YCmnmTXBLk5haz687Lqk2n3kpuzjCs9TqBtUp1meSKgY6",
  "key10": "4m2uKam3epLSeY92eEzKd4XAJezCCkStL2WUjexP8Ra8Kx7WmnwbV945rMeHxiHL8uRSimTMivTUWh8yhxQJxKzq",
  "key11": "FaCbyyqftP1d9Yp2odkrZQbkE1PUFTHXXvutHeAHfffgezXurNnzfWwjN3rpT9dcHJSD9YtDHyp9Bh4ntJTYtN8",
  "key12": "4SbZVAbVbQ4xdE2GYcEGWfDu4jv5FeWfXmkebjivxAg5FRyuWxxsnfP8djfvLmW784V4tAHTp1LW6eVntVsJ99xC",
  "key13": "8rYvKEGWzyNAMGEuzPaNP5hjaJTVm8kjdzmK7JGLZCtGn4FPUdsHh3tJmojeuAosdv8i57y3K6UiXs1ZmMQi6kF",
  "key14": "3gS1FjRFvcJexRQn3KcYqxUTb6AjuZvfsHbtVUNPrmg7SvLPpooR4Wk1ALNVwDA8wi8dVbhA4vbWEDyACTUKtVFC",
  "key15": "26JXwKqcbaAEBoHZpFXwymDTL4CwWuvWSzhpeNNUaxuqz9q42ovZ1oXqA4BvWR5LtS2mu429TkAYstHrkNJzAxMr",
  "key16": "8KBSETcPwUqK913ynq5xCieAkmnEQ7qYEddW3Bk6CtFPCyHbPLTVthP9KJQqNKgYkyhFXTiHf1xHRVZU2bGd87t",
  "key17": "5Lopjsh49Yj8UbFQzStovFwpzhjPLrzNspA9WSx8M55AipnLAK7WHiDPxMM62yq8k1CBjLcWhijarHqP1Rn2gZDN",
  "key18": "4sxkYbMLNMYkgowr1BLh1KuM32EH9bJaY87249WUKxW1x9xJUkKk9ZoWf6DC3ZLVMY4Gf8gU6qcfyLxFK6LuoeL6",
  "key19": "2SYT4H83ufPWpG4FBC4oEgMiUwS6F8i5cCzVTdSpteCM1LdGQDQun6Q1LsHuTnpM6hr8NnrrrvVztM5SedyZiEC6",
  "key20": "3dvK2MmzWjjwpFSYqm62KoRgimUEfm4iaEaxyjyomkFZgcnUvofJZNvhV4VMbg2UU6EXrUkuRR6kXFUbS5iJEfCx",
  "key21": "415jtWVgxGPkiG5XjQEk8JrTvEgjXKefPeQmepxfDrryJyd9e9KWXHaduf31Jb81CSxpcYyNGfty6oPHVqb2aNj5",
  "key22": "61m2WBKkWPbbv5rCS3rQSnCLfvFAhiUhr2NrAtK3e6jKcHE34JDbTmm3vpp3Vh5Z8eBtrhgcRYULQX5vEXersUUg",
  "key23": "23aeQAteRLzQ9oKjNGbk43KSwerRjaRdk7FPo8uWpQSSTU5L6dEZkxhF3KbJsDrK7drENAwDvE7Ak6aQUEm3cyw2",
  "key24": "FTtCiKNpmtmheyoMnth23LTeYXiMgak1YWWhsYg3LrfeDBWhtTDofCCqSasPbtvSasSGZzv5pVruKCzHWk2wimm"
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
