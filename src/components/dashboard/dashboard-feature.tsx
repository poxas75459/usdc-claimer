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
    "4vKjPhJifXf9Kg69JQopGcwvRBVLd51rG4f3PrWrrrkV7Gk1deunMJUD6ebpm6Ub7Sti4724daJhb6Fwg8HABbTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcMwSobfb3jmpWASzhkchsj4VwGnUSueKr5K38vogtFS4P6KZt57vNRFdNj4BxxHhCRA13vmac5Pu3EX97ooitC",
  "key1": "4at53k6uEm9WHKABQ5dqhb8TEdf4JGvbXVAn6KWvQhEc48aZ2Fx7BAavqC71m4tzdehUZExqYz6bJi8DNuHEi4ks",
  "key2": "2bdADophYszyKjQjaUQWLZfGXk9FfPjWfCPMVp7tCXKypMuq3ixwymrjmaQFtUqfiYjDKYdQ83CPT7bcthw9c4z8",
  "key3": "65g76HGoyXeVzYAcbJRJh9EQAyuW9myNfJ9PQEfQkc43SoepkTFpU3LMjv7wYyE3ue4jvTxcwBdVPw8zKb4WFWth",
  "key4": "8k16FoUaww5nvvHuCDv9SDKedRSF3oi5GHaKRdtXGuaHqbq26XbmyFtZHKVSQZUAsiL9sy1qo1w95fqoapDZBuJ",
  "key5": "2QF6Sicvm4Cg2bcdpJFEaC3KR6rJsVvu7pdXaepUCfNp2o7ctLjkcoEwNfi2hqN8NL2ju3aAkLsNBbASmMvit48z",
  "key6": "2jy13qPxu4BESfqwQq4PYvnbjogaH7e1TmdAnrB6GyJ5g9dvhd8Tn2t9KvHAaXQUr5DnRevY49aVHtTpHGWy5GxW",
  "key7": "5ynFed34Tq9qpsULvM4kevzaGEmfeNe28h5sh64EUdaAdUQnt4BAcd2TXcom99G1Qkexrim1N1qXn7DcLssrf2bt",
  "key8": "5n3xqq8U2vsjeKR1cg2KZEhnZ7TaCj7FsP1UrzpAG8q2TyPBY4NiMLpJmw6p8CVSmCtXFr8Wpym4JN9HyBwpgLwa",
  "key9": "5XUGhjP7MyvDfDA9NEwTac3f3XJU7heZnKLSDuedyPiEfJFMGMgrFnfNKkVWPHYXFGgX23yReNtq2ChL6jc2mXNo",
  "key10": "4Caxae8SDMJXYmcQNibnJCQ21dQsxoKiYLdEdUrpexzsGdEktvKTYggXA7JdeCkESF7ZCoFvjiV5tJaaCBh1SCA8",
  "key11": "2tbQwHeWuvpqXBBSCM8DEDF1ugtnhMNJMsh2ca7EehZmb8HePiGSCASFjC6nJJxcVoRW7Eu1E2UxvsX3WdvNgXTA",
  "key12": "2zTe96SFiJFgM67bhBeeGMReKMH5ojFmYBcTeSmznEiUo6mSmhHhXSUc5xvaBjnp8wNZ8gz45VH5Tn3vVVMAxyfM",
  "key13": "sMX8Ssn2gCo2ovxyo8eXcH47M3kpRZayZsdZiQvAeTADagzZi8zhbpBLCYaeRnH4dq8fcwTyhKEvZoGnBqT4aGT",
  "key14": "5YgXZQM3yhQ5rAaEmMAmo8SB6KFME3QsaxUPByAAHM9h6PUWpgm58hTm8o9xdcDDkhA2uLzeHJ9NnKeim32HdvqL",
  "key15": "3SyuNiSJU3Ys9a3AozD15wwo1aQACsZ4PCE1qtcKsNRzffp1N6uuSW3d5sWz6UBJxnMTRyyfJgQMDm4TJn6JEiE4",
  "key16": "5f7vwZuyyaRcZigPYMoDM1tx67F5vWdSHy4SX9sbSQfRf8HnCR1VxxhNHMTv2vdNr6YNWSgV7b4PZrK35kBX6bf1",
  "key17": "2Sh3Jj55pQfxNJmwvS2f9C7R6ipJkpC96eHwHUH6A5wgVeyghzHRDZUERiwrNLKKG1jTnZnGTEypxVqBjRXQnB7k",
  "key18": "4mmReWPnne4orjdd6fVm9sHfkvYNqXuEZ9keFctRGRKrbWjkbjyze8BEobNfiqAm2XPENtxDv6rKJDMWfRCVUn2X",
  "key19": "4X5bcDWheVm8KM79mP2aeu6V5ScyxVJDhxDe2u3QC8kJVvFGkPotarGoXSc1mvbyPsiLkpbKDbY1uz44DpsHkqLZ",
  "key20": "4TQgJdUg6sZz9rH6GmFCzkvDLKR1EcoJab8pGKgaza79S22vCWvtB852688jJoYJhK17A1z9BMYkMrYHftqqtazF",
  "key21": "22MjEA8K718hxkisn14A7fBKPE7NnLfhFwqrHmj68zMAzVHnwz8Me4RLZ7ouhvb22RdLCujHmiomnTkAjHpJunpQ",
  "key22": "5eZXeLbWatvCg2nw5pJgnDezz9uqesFh85JnFBGv4zaLEs8b6M93LUS75U41c43ZYYpW7wd83iBJZuFgN9ffcSDe",
  "key23": "WG8g4h4SCQXXkhjf4Yk8Jzot9wsLhuPkT4TkEH2z8MQr3NEnJAi5QsgLoc2ruoaESzcojZH3rP55UJxJxBVcRmo",
  "key24": "3eM6Tuv9Fpsz3m2Tbo4ob29ttCc64CkXkEt1TANmDJdYhsvAhX3P9sZJ5mkk6vit29zHwuYaV2cfg4BDqd8oTMKf",
  "key25": "222oJQbt2quKGevXWiUhwT7N9Z5VRQCHyGH6EYS9bXcKQvy7SKnrccTNJ9c1tsY6uq6pNYJQry8LNTcNuBkz6yms",
  "key26": "CKZgZBb2ntiDSDmeYwtYNLhypS77daLmawVmBNnGpX2jRqM5xUqJPrwFu7rHUurc91j3qppj43qiFw2WcK8MizD",
  "key27": "KZLCfsrRtje8xGCMG49wNr6oswprTJp7VJDjLohqaWC1XmH7XGzk86wTVKeTjhRnWZpq2gGnWY2Dao1XZusX42z",
  "key28": "3r7htUeyiT5rv2YipGEEJwj3vKUgg5WMXrVdWnEBTxFVAqEXBxu97MJMNgJahzKbotR4RRkaJ6oKujLeJ1X7JgEs",
  "key29": "5o7CZBYTmjkp5oHBkxoryAHfzevJ65wJ4NDTPM8dTgLTgXvxc3n3ogrytcRcj4xJynNRRACcMiNHSY3nL3S2WUEW",
  "key30": "329Dwssjaupkin63u35yyXAwwhxKEmrPnxGpgGVggDqdYD6ZxdnvBgquErcvrqBxhXfMKFZ5uUjq9bpKtzXrp6SN",
  "key31": "9uywpqgzUMgYzqgcX9GDuQ6cuBNJ39FW29wuoQ8QAbdhvhutj3Wz23emqdatqyFwBXc8g6K6JaGchJtyBtPLGdp",
  "key32": "4CThvupriF9Lnc813wnD6fRHa76jCw42pPMZZsvacvTNQAh2U4s31cEbodwGg3hjcrWrjHnX4vGu3y1CiYZ6De3K",
  "key33": "5YFronRaygzUUjZrqzvKKSQs2XXnY3Jsgu2KLLqSnRSYYg7Axu13FDazN1MQCsehB6SyZWXbi3o9ZSeJLSkb7Usf",
  "key34": "4tdrwm15LBypUmmmoN12qFfN6Ez5fbBHgyGRdm71Yvo23vZN38sm5WmuqmXcQ5mxi5ybQfSgaM2NGPKZ7zCq4yU1",
  "key35": "5QEemiji4tZjnXHpVLrdZdxLNACPA9eep6Qh2qHFf4oEwQ8FhsLtzKy9wnAxXi6ivHEWHdfUPSMxanQn3dwMwv98",
  "key36": "8RunCkg2377n1EF6Q6AAZF5wx5qFejm77aY9Vosf9uhux6sXD7dWE4oeycnTjy2JNUYioSvNBTPgFjNjkLt6HyT",
  "key37": "2NqosZKzrTHjuSDhhr3HoaaqGp9dacKfkViEP52GDVh7W7SHkyQb3ncExAPtT2mEB83zu1qypwtFhopUwpoL2jRe",
  "key38": "3pnCEJYN3MSc7KA3i2Ky6aNMkGbRo8Hhk5hW5MUdp6EUz1hCPxdUjF3AAEic2fb1o9R72crzv7zNMFvmo5zkZ5tu",
  "key39": "2NmhL44k6CCRdxhY9cUKwYjwnTToJdcsoX3DpZDQJUsNWSSQmB1Vn1bt4ZRuqDos6AzTCMQ4U8XkJipz3YQthgEx",
  "key40": "5TsdQZXMHz7iN1pzgyPkvvMLgJQTyogRiQWbWXVLsCKxArVLoX1qm8mhgXeFgJ3fBM9Gac3taqyhQrFxPdg3WTfP",
  "key41": "33nTCouGb8JPEvhwTo1tRhuu4sX3gwBPT5szww7dgRqRZg3L37CZgsr9BL1g55MKypqbzgNCQSt8Zv3Jp26a7Vo2",
  "key42": "3BS45pJYsxiB32eikiJg471CDBrhYz4h7LTnW4XkgfTD3xN6joVjfdm7AEQSSWCtpvuhXr6vLz5DcB3o26LYcvTm"
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
