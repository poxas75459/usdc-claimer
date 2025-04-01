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
    "3dQkVSH7CBTmsAaPYMnz2D78uXscDhzhKA9n18m2Wmfu1gb7soENbEY3c6esQRYSWHfWh1wnSrPNFnJPfMdQJopS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7SB7Fy2uC8ytvgWKAPwPUo7ovzcfY1MaBJNLntHtArdjwr2pQ93QmW3rP89hZXTBYxec2UBPSVRwajUe1o1q9D",
  "key1": "5ucQJCj1FzPsbqGY1prR1vB6i8SnAhcy8ypGVgXoYcE8oganzEuq5HySxDwG6M4YY1Eio6pDFceZP9fgngguPsaY",
  "key2": "5RLDt69nEgaLF2d3MR62n8ytNMs3xZMgMQR5dEzvakhtVcZp3FJdaZWiw5LP1fXMMjHFKKSfASv4j3KTh4L4ysfY",
  "key3": "3jgLY6nQiXzD3DvHwWyk2EWKWZH29L8z1G6RPUNUXAxjx23VdQsrMUB943uFP7zh7ZnkQLMFuCVWbzAqA516bwhr",
  "key4": "354yDMYCrNUvvF88bChdnt9fapvRF9QL6TBk15HLUHfG5v17KeTE4eHtr9nnhLX3xFfemw1YLdaoMWicmpUhPyty",
  "key5": "5GFectCpLvq5xQrpJMvx1sm1tq3priTXGeoGEy3FZF4EGvNBmL73kU22mMKJD24v1opQvusQCZvUN2tiv3fjHQHH",
  "key6": "3xQx9T26W3uRoBdztM37b2XiYWijdbnAnHhKTYpAtqLTPDsGg7JKWR5sgsHkHGYSR6m69WH9CqdTPXtCQEef5MoX",
  "key7": "nNJXpGyz5wu2pzWCPUQVoLjJbFYkBiYA66u7QTCNZywSKMD4HtDYM9XkNgP8VAGjjGbBaCCu7RytuY9hfWGHnC9",
  "key8": "5LGV3WhADAf96ekadAU1dXQ6EKiKHdcAtxMUHh3gbp2fdX19vbedcVzw7sisLxrhBp6Xk841Xu5FbeVnKHkEsrzx",
  "key9": "3hbL5iYNTgUevegXpueUHJub3dxUVZi4H7bEVzcrRnEMdhxYdFUWRs952kMrbpfpkpCKW6fSNNz1LhvtHbwJi6uQ",
  "key10": "4uRK3eLBCdL9LVe3ibbXSpM254zn2VmjocCJEYUVncA7nmKMuPWxwBsY4AVtZZUsjKNsmEcosK2BY8vnV2ts8rSi",
  "key11": "3HCqG4DhgUaAYtG2W1VmhG1DSHD3gg2dAiBuPCx39jSfLNTUjYcM7cNHZXJkFGyNs4hhrYpxNFevnjW4wF6A3yKo",
  "key12": "2AunJnavmLdBeA3zh7t42k5LadDwds6H7nzapRLstxfzJ7GeHcCBzruuWTHbugn2SEmN7ZB7gLbZeWcaRvxJKbZi",
  "key13": "2c4QKGAVxFWuU8KZp4GUsCijwdih8EbvwpzfyN8ZSLsr4Lqg6usixXfzDGRh6RWSx7EWzCUDMz9HwUWyPukjTeek",
  "key14": "56SsEFmDfWGyYQSEsnQBcSsw6FDjyC4MpYtyG76kVtaXLWMqXjPpL7CjDesGkXuykyFqBUMMmd9dNR3Ak2V4bSi7",
  "key15": "2hEUqn6bNK6aqqeZPYdSuzUgamm1jvjjx5AjJwMUiEoPN4Q9FpUZZ2zkdVhYiiBdY8W57EXhih2M7QwAHSSRgwfh",
  "key16": "4j8A5jJAEt9TTwifn1HC9NbHcgNouqN5kcQ9q5Dk3G7HfNQnuKPgFLuLgK9s6iUiEMiZeCmoivGJ3dovG1cRPzQ5",
  "key17": "3manwYNQ25mjaETXZtQaYbCBjrowMrVcXxAv2CE6W14kGq9Vq616CjR6rQTfMBwLNpaB85856xUnxUb1PcQN45vZ",
  "key18": "5VcaH4z8XhQoKbNT9eaM9CPMtBygXhzuzPkdEbCKx2zmsz7uy4tLcYdC5rFHVmD6LZXowCxA6Wq3uh74W9vR4wrZ",
  "key19": "d6tarBipPVYureiLgamDhRGHftvRFS97zaWS7Zeadn22iDSqKiUczCsVEQg9txDWV9bWqUVzZYAJsymMjpqwMgN",
  "key20": "3hLvkoU56cuNmt5oMU3LaVTKREUiu5hew7Rp8LDpzYgyVdozzQtstxivvjam8SQaYNEx9gKxEfsUyWokMCr2QuMD",
  "key21": "2biMW6jNaJdtLksYFE4nX5376gTWmBfz3YLsJRETKVg6NBt7QXs4rpTXiAzaEFbhxLnB4pWFcYr4z2vaSRcivyYk",
  "key22": "5gKtt1MKbqmWqpZeKpJR653nh76DrQWZayaLnX23QSGVYFMQwopLCJPBZH2fGCk3Sd2HPfMndHGF5qUYink62y1A",
  "key23": "3x6XiksGrvs9Yo37A3pR8pGbF17KSovnfkean8EwApR81S5BqoZaN7KR5io8rFuiPiDNc4CNVyu6gvR34Kt87cg6",
  "key24": "56yN5qsmcpSvomRRMtxWBfts36z58Hrs7rFhAiyQpokxTwMz2CEvqkDierLqtMZwKno9qQuyCc3GkGFsMoqkkmSs",
  "key25": "3sxGqTRzhLge11XfnrG7s4wNZEMKydAsLDZoSSw7z3kwBhSpCU25jbmyk2yZD6EnQ8saTW71BtMRgtXMh2dXDUs5",
  "key26": "sGQFPpPygXFdunQNNYUsKEVSdvoBqpgM3eggUGRVRcaKeGjyP1Rcm7MJFv1u9q4Ekt2s8TsKfBpAv4AMfWYwGJF",
  "key27": "3nsm2rineZuLpTe3tQTxvzVCU2izvEAwadQKYHaroUecgTbe9DKJUQ1pHdLM57N5ULGHphi5g4HEvGRuwJuyHg6"
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
