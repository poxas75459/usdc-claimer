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
    "3LBAix4cwbCZEE2m2KBPojzdtqmov5xqvxQSha9wtS8NziWMihEX6GpchsMBFMPzmgXjwrpUcf3TM4vE9RqZDMsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UsdpJtZRgWBRgYdbCyBrACeS2Cqk6R5s93MAsfYPGmmLriaiVHyJKkw4jMdyU4jXSSLd5YhvHozU7Z2kUpLxsA4",
  "key1": "4knnh7EwojdqJzUcgKwoZqGYq2eh6GCjpzQ3j1ba4wrDDdFZBAieiyyNUDtmSSGM6F17WVWSAvoZ2jKTkHXTgdQJ",
  "key2": "25dQF5RYsKLjQEjGQXLdu2RCyiCWf7LLWqbKyVLGNXWcJmXKknvRFYjHNykFha93oXVSqSHNeAdFP3ZfLLNS8Khg",
  "key3": "5uu92EAVhXVYNbr2F2ZGGHHUxEkfzy5gUZbkzK1HB6poGYiD3ywxbK2jjEkB45SZc7RV2B23JH7397SaMMS8XQ1u",
  "key4": "5pQPQuzdSvjdPwoUVMv33ty2EnK8zG13wCBCaDKGn8M4LoYZykA3BcniFv7bkQcPBMksVWt1Bb7tgxvDC97mG2Vf",
  "key5": "3V1mtWwyihceSac9bQ6fALtt7wfp6HePCzbGq8hpgubKm6PWEu7SYN9irP2Eoq4yrNptGitewtvUy2NKsQjwKfnz",
  "key6": "SpCqVqPqPZrm48WKCHfvRnAve7N94YdTF9ftvjQnwCgZG2JSAHDDJbaVDpGPq2BqM489acZr38i23Cxkx3QfGgr",
  "key7": "2rRXGr5cUcGhHdZaVEZNUokhpAin8b1iof4WpgdYCPKkQnNbgnACEiT9XXX71V4h7ot9jTG59yAxqSkyesMyRpBA",
  "key8": "2jgy8J5ew4k3HtG36y1XWxWd4PbHr5cdFyF8S3g65vKKq8Led4MtUv2AoRHD7PkcVq6YMMbAAH3tanPg9kmQXwgV",
  "key9": "2joVhhaVbSsEjjSz4V5LghSEBceAoGF3AJvwbsJxzqcaAfdoVtQcqcV2Bjs8qavsb4Uv2VmAPj2LeoxRzEpPMraE",
  "key10": "3AsZegHWcazBuSbShf5iwEdv1DviJwAbLr9mrU6yRuthwkbgaZ5pTXZiwWMTKcTsJWB5JwuBs5vMNZZ6xhVsdPY7",
  "key11": "2SLXHStX7CdErCoxRfcPcQ65wCAeTuVxYMMSQwfeQj3tdoDKFGHfDiJ1TN9Wn7ZWxxteGSFU6eRG1ew34SiCsE9B",
  "key12": "3tnRorLXuKdEZchhm5AsEyhAZCPsHemxb3fpNdfvz9NFxa4phqXGYAuN6J3Mgo4ieRJS3t75eoGkWLniqu16SN5M",
  "key13": "4GixoPVpnJmh1uHH4tWpYubLodBtyfkTqwv4PhsmtEaC1sbVJBLJk448SuoBbYevfUcMoZnpSo4bhi8S6FRekrsJ",
  "key14": "3MJAYFX7wP1mmGSz7NDGVjPTck8Kc9TvBgK6qwnRtRdtzsmuiR1HM9P3szFepJVFFbXq7Gmz2vt6dAueLhNWarAF",
  "key15": "WRbuGogkKpUNRoRej5eZaStUZBgbTKtGd435WNPgnT8CpTqHZbPsDuBfUddpenRJ5rGo988n2y6daExy8VrGntk",
  "key16": "2yLZdoqH75G91qfT9BeqVzoaPcQJcb4qxyJwHGvAKjRA1wWZnrAL1A6WUmqmZcSrJ8A7oBnEVbdq7LfYbgYUs4it",
  "key17": "4jsaCeyqvrn3cykyeVrvwxDCxAZ64qLEtS2dVGi76YSo7C4bbRbrLwTFqByrG8WSrktPBNBHbvgW948khxHcVmN",
  "key18": "3Xwuat975xrtiFC2sLpwv6dWxfuMpmqGSYfyy3Yo8W59yKen6oqqLELQdkXyyBvtLaJUBPTjwbGUkX9kmntkat58",
  "key19": "5Vv8Hspn9tYJD8eYPoH9uiLE39axW1rqHU7SRKjqQNmXpudpZ8JPYWPETBh7qo9pU8E3KCPSj36xyjKYLMfgzguD",
  "key20": "4zAgnGK6HG7asRLtvFZE14gpDEJ6o48t5JT7fXfSDpsQzS1zUf3u21AVs4jmvcpX3TjxmuL2AGt6yHm5CTkFttKo",
  "key21": "JGPgrTR3ruPhy7BpaKz1oYiFvLSfT65DWBmbmWRTYEurp7Msb6nyUpM5qDfhiG1ne9kfZqyd6HQB56ZeKUhVK7V",
  "key22": "595LVn9E8EZkLcboeBwcodC5pnyd9VTB4qA6swEoXSpNanbqS1eyCXQTkCzdYhodXWBjpHe9DXVJhBJkToS8mdXN",
  "key23": "3GEfDdUpLinD64zSdptuqRcLdGrkPxDCvf7NuDNnjAy6WiYxfqco9mLg9MA524smqtKRbadgqBs7MZZBhmSeVYLD",
  "key24": "3KyvJd3HuWXVBJhVVSieLxKHfK4cUtsQkFM5aaZmxFFcwcWpqyzwoFNosUQngisErGi7qDgHv5A5F4Tr1DiMghhZ",
  "key25": "5EBvS1Fi62vN5TB3MjkKDUukSp692zhUBT6e8G3CBEzYCsp7HyH8CezAyeVokiBZgZuWJJ33sFJrL8s3Nc7zpQ8h",
  "key26": "352BTtV1ikYU9iK7QGQ1gz3qALbHCp15kZjwLUg9KMo4LfmxHefFpGdX9dMHavFKz2zxq7WYExpfWmX8mwoBtJ5c"
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
