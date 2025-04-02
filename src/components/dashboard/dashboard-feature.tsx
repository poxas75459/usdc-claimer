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
    "3EodVbqskBfgXHHWaYgiTa4KWhy5Sc9hbhUxgwdBubZDJrJLZRJYzJFry5xG2rhjWkgp47jUbELmbLGdbtrz1xsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23FR1F4cMeBpNfs5q1dmi9yB2zuygh1fVArzWxQMAZqh65qD3X8tjcDshTtBKQSPQRE6SjoHdtegMm2BpbTe1psX",
  "key1": "661R5gXwqvtHthEPcuHE3juGFkutm9RnVpx8YA9e8tV2brPvdp6PWKEecQJFYLFHFL5k6EmWSLMT3SVWU335uSWu",
  "key2": "4nayPrFosuvJ77yau47hw98THxD6RLeWEeTEQEQ7JN8totTHxMv2mvmcdLo7ExZppQCwXb3m1cuoL1SHaPgnvRSb",
  "key3": "4BGsNcKMdhnEk3KSCwUaWnHVzJ2R1Pm8FEKPyh4KMHeaqLsD4dJMg8vTgi1S2ixbShvgycHKVXtgQ3iKWLbdt6FZ",
  "key4": "5DGkYEoN947m2VepS1omWas1HYsFyu5yyf2tfc4zsfUF9hyqwkCPZX9DscppX2s5VzubMHDV61uD5gfCabmQHtn6",
  "key5": "3gDDHpAAC9iTVoL2gANoC5PwVdMYqQZqQoXEMLC9gDJWFDAd2Ze5xUtsdX1jYQha2GtGask3KD2wHTkBe1xiyGCJ",
  "key6": "5cB3fcZZegumGE41VpbaBfjSKqw8rdF2TGztEfs1r2GuT7HMkuhut1Q5waNrCju1zZkDT6EoaV5UncmJfqWptQMh",
  "key7": "gRJf6HnAdVxRWd1gUaBCiYnSte9ntRfqkgfQ2AHV8ipzabSo1J4Uw1wBy72fdhCa7pA2ycwEcqBoMWtgRtB963f",
  "key8": "4GQmpjtn4pVV4RLH4LzRNDrGcWi6N3FxjEpXhkh5UfV7SFg1azbcxS5GGVZYA8pLXnXMSEk1RkqnZQavVTTcDoW5",
  "key9": "55jW112RN4GPvA4UQfijsptoR4ibReW237BrJ88yazGoTkV3e5rgqhSrgrT9bi7NaWMhrscK9aA6buGT572n7kK2",
  "key10": "2gunMR3bTBh6RPjDTSYGaBrveRJJy7xzZijeobPWLBt7pDdYbkJ5TKxYidGzWA5htXWtDSRuD9zkVjT3FVvdaeUy",
  "key11": "2xGpSpgKoqMFG5A2onS7TxGfwkD26PtC82D4DxzB1LJscobViuHMsrvzSFvZ9M8VoXrfCq6LSeJKVBy4B5YRqrdx",
  "key12": "5vM5UdjXgZ2csFj8YycsnkwwUjCRyqnzXoUBnSBRV281n6qdgXk9GLbXDag1fDgTFukhQy1vFaWCY3r9TjLShMc4",
  "key13": "32dN6yKL9R1mPPMzt4982vUJa3Rktax2MEhaApCYhofduHzcxaxMDDPjfLH6aGqPbvKXBoyoEiupiHMLggstviNh",
  "key14": "3FtfEceZVS7Xiq3DeUf1QDoaa4h4hYLqF7St1dRrssF9FKGQsz3NRFdbu9FDPUpFGsdWZKD32S5JVLSTkz9AVtwN",
  "key15": "5iewj9HqLjNgZpP8dtiAnDJDztgeicHhNu5WttNgLuTExtdepWQdBtLKptAueJ5nMfbpMt1t6EVRtvn3ZkPgEWGy",
  "key16": "3qzx89e7JocEVNoozjTpYoVfp43HZzfpuu3qU2qaQurcmxHRRJhXhVH23aYfU7xmWEhG2c7QMnMej8DarZ2kBbXZ",
  "key17": "629rJRP6eV9QfdexxFvSkoUF5p71bLq9mdo77y6oPLC8Q9KgpcyigShZXr6h94nWoEQzP3bdoJJagc9et5eesJhh",
  "key18": "3cXP12Hcdxp1B7shHLjeJseSBrsXNfAZMtZaSGWceMyoEHkQdFHN7bPxXGgBerwFBnzpi22A2NVbbTFiYt5bTs5r",
  "key19": "2C82uLydQV2RThgc8kmadDizFYtmw4Hgr3fr5GDs3kf7UZNAyvpbNdj8YghXKzwpCrVQgyjHH1UbB49q6Y7Lo3ij",
  "key20": "4LMoyG6ZxVzE6nNjBBkUvRZ53qcZxuo5F3Rsmt7t7jAThvVeNJioaPjun9R9EcquqwCWyMUxCUUj8Y5eTx9Xie1e",
  "key21": "3U8o5RHtNK1H6jicj6UF3GqpXe3EaSnAYRSFPPkXfiTQBxioKe8qxWQHDxUqWfihSZ7EsbLppUKRBMrTXLVxbHb9",
  "key22": "3cc6HG8KdoadFcHCg31jPwqLJJAvkeaJ3KpfbvnMuiZ6twDNRKvRSobV196dkk3HnXSoEtMT279vqvKxHorxfTaL",
  "key23": "4hugahEARDfNsonG8FdjVQuGYqoGMysxCNt5dk56RMVCCYLtZmwPCSAsCPsnuyFdzQ21TtqWgDcV7dqEyH4hnXcH",
  "key24": "9nzc4eaoMH8tMdZapChCMPvA117K1jtHmkCnE54Y4CJxnwS18Q8m2V7YG9oWRwzekskS9xE73sZx3EahiUYvL8c",
  "key25": "2TQoAFmnM7ymD99sjgK3kZ5vKz4xPueNyfJ8U78FbZpcXnvrcYJ2mXKEAtRf4UfarCLXsvzmuExxYFRMEUQFAoaA",
  "key26": "2ZV89T24b9QjcMzVxpfvjMT1VX9kJG4d9crJJFNHAfNPHqmhEJNf5sSiJkjviXeyz7kbxnjW21hPAa9rMc28NWUd",
  "key27": "nuyD8H2zvtF9ox7BdZYzpnhg6sWrugpBbn3AsZXtHAKTKaihoKQvBUsBpdgNiNS1V9JEqcZos9X4DKbegvULt1K",
  "key28": "4hgBqeNSWhcszrqQKPzLDssFNUNUPHEhMfAWiVwt2ydvteEGraz9PFoJsxzKr3kGMftc2qQroiREyFFRrzM2gBna",
  "key29": "D5GfE9uDBqBZVD2eqxUAMFADXRevu9VUmjdb92Vkyu9Mbefv3iYgBqwGQG1KbYUL4ebcG1m3daMoowPCHBaW9rS",
  "key30": "tidVeS9DfA5EGN3S5e4EAq7jySGA7CoWgB1JgscpRKLLP4yN2Sss8y33nsD3WFAwLnov1mKYo2MoZJT9wX68TKm",
  "key31": "4JgyPv61SkFEDw3kuDjTFXkvVf75fb4bMtXKLUXDdcE5A6NJ89h9JduJ5QSzzDQmfMP6c4hBaqw7ixkMnK6Ev159",
  "key32": "4hQnN1oZ11WU6QPs2r3ToaPwwY6myn5VJm1VQmo3PKCHWC4iYmsf9ehPVhactswSKHexQdiURyHcSg3aH5gU37xc",
  "key33": "Nw2WsEJsEHrho2WhTZLcCrPRQaiGpkv518aikRfMxCSULG4ak4WSweEcpGNjwPeXhGRfAyX7KCC2dsJWSL2bfx5",
  "key34": "RnPVuPgymJUy8UZuj1BVQb6wrzB2vCZkfusMP2QoJrvBjsEgbJk2BYqWXAkbb7V44XPzjDJeRveqscjRktUkJwN",
  "key35": "5FGeDu6AmmZop5EtYdxWzx7XPCBGxFazLnNfRfCAFmaJuK9oZZQjWUpPW5ztFVTfKgBJGHRwyni3jdCZpygYcKwV"
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
