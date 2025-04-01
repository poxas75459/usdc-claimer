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
    "3HjBvHDj7ainy414BmvWdAUCn26zKiAnA9g65EVNumMHxavP8WN2FewPomiQ4x5PvzMFP1mnqQZYQb6ASSpCv4MY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wA1a1k4vmXDZyb8yHKiP3UkztHLzNbkqK4T9wCGMZoFhFrjaZWV3nh826od8DXX4GoNctNGCJvK7fVzikhXnbHR",
  "key1": "3pnqKiSnTjqyZx8WU1PKJir7RtpJrRvoHzS1YN6kXEjEQSsJwrni1Pfcz2TE3FHT28VT4kWSvHNobaCmMUv6Q4sA",
  "key2": "2DeZtgdj3JSrkz24nsKnQX8EuJAw1JpiMrGbu5NZz5P5SdDYCXMaEFJ57C9ybpPnp2ap43GWW3ALYFhjehQbQNSc",
  "key3": "4Ngmrfu4n5bGvfqjZ6voXZZdJXhBD6DumXtcnx9idxkxjd7aF5tJQSwYLD1fpm3BF3ccy9Dj672XPAmeca229Js3",
  "key4": "2Qxm5ijuhYwYLrtWM6JjNtSMdq7v9aAjLnsVRZtFJVFdsAYh4P3PwUoFVWHLGwHDE6FnmydwHu4cet3iGTChe39z",
  "key5": "4UjsaitYncHVYyzFuxyKYPQx4rxajw1kAj4JXqiNRr5yXrQMEpNGkkXZRsakA23sWJy6NtMeEiDwUzJ6F4riFTZF",
  "key6": "BAEcWRhmvw67i5hCA4ERjJ5jBnVA43eyFkeSbym78puuMk8xbQMi6pu4qgjdLdLd1J7rFaxWLbUhNoLQCurJwJT",
  "key7": "4LrgLW5LXnrZew7nVrGxjUERyhEuERjk6CwLhbaepWHGWr4YdguF6dJ8JTYsaoup2AYhQZ545rE482LnPEFh973c",
  "key8": "3WpeWwiePSjjaUxEriFuSjPQXpz948eo8SX2ZRYcwJnfz6rPgqxKkkmJvPbzYNKVxLWzG98b5NJy3LqFxof74Mew",
  "key9": "2zLhCph5rSrRAWWJWobaBJugfjQpD6shZQKHEXTVV4pnfio7yc4sh23dumUSZVYcto45x8LVmr1coSYF8nGMHfpv",
  "key10": "4UsozvofJZTmWKq1DKYumuYKa8fZjV1paJussXrVvZfTfWSxxSrGX1Rc23GANZEsFkmBQ1XaLifWMtsn6Pd1kA6B",
  "key11": "yW4QnCTAoTecDBKLEGUwjhXbz2rjP3gpahSHZDNRLcfbcGVFBSJQsoYKZWqGrxrHM1pCXwft3Ww3kABcdeyn1Xd",
  "key12": "37w69WR52sKn7jmRnRiBtUoL5jSyvQpLQhooNyFq9kFMXYhjMq4Y2KLBW9cujKLvG3U55X9upinwN9QeRCCkczri",
  "key13": "4EYmGtqD42n4M8XHsBy8NkmRTZwHxgcWofrPJyasKL12EGBhoYsphYGNx4yH3KushpTtW6WUHj919KrA8DPgbkn6",
  "key14": "29kgr5sQq2Cda9CuZKbFZwthYNyhP2zZn9PECEvgTzBDJAxWBRUa1HGEUKYAAZBXxJLnwevZqhrmiQZ3riH1Sw7r",
  "key15": "tis23bc9ThbKRtTjV5bn7RgxzrgT7Wxq6ppeev1vP2g57ucDcNLyAydyh9C9jqo6rEWi757o5cMzW5F2ExMPm8C",
  "key16": "352zv31Ro46y8DnqmmXJbrzYvH1DxQ69w9739XSJP74ZYohsTP6rVBnSSx6cPBSPjoJ4Sz3wRGDLY5VdeGPEVV1f",
  "key17": "34MdkMqWNpztThr4z1moEKFCD7oCFFuC8zgAGs5P5DmXK1NkWzXGjkb1UB1QLM3a3j3FKvSbSTiVstEAEvZ6jtva",
  "key18": "4Wncvg74PdRrWCS53vLoCnkhzBq7PpzchKkcdFwHYmEPTV6rxYEJzrTNBTuj3YQCaD3sY7zcBNzx1gYfmuaSPEET",
  "key19": "3AREF7BsL1J1G3uXCD11yhfTRheWeyzQd9n5oTphX7qUwn12zzob7WM3QL2hQj31eyiVMgLS3p9BtY3yb4xnhnLU",
  "key20": "46ofgZTxjUGYaufyQp6ShZbmCDqmohc2GDp7xMFV5WPEEoPguyVmLGcAqsnkbsDa3Pfp8EYQsGk5GAs7uxubnmBF",
  "key21": "5MLAf6WYN9eotqoqL7AEVZtKQTwtkmfXSkmkwiJuzfs9pDFakU5Bvr7oWSWyCCpJcsxmAAVf9tJzd8UktWFFh38X",
  "key22": "5qTBiLoZmXvBwt1cqi6Y7mDFrT4WoXGbDh27rRacVcdT324gWDoFFR3uTQSRdg5sfycKiss8qYoWGZ3dkeCv1pUy",
  "key23": "2aexqYAnjGNLWw5E23bdhSeeMFjpDzUYBPVC4UsqLkTsByMmD5kXJQ9K2g3zLF6uzrHAZFDG47yZBSppsJn82kKj",
  "key24": "5iQatkzRS9U9FWmoERsV9ueeuK4gtvGvuQ1MDqGuouqwxs1aSmctey33JiSBTW77x1nfAwBiEB6d9j48jK8bc2uJ",
  "key25": "3UoVDCNB7iVi4xyhLftuonYm3KFXHPzAMfB7gQTtaQaP5ag3MfHoQ1VcMYaRTqnZ7rDpRhw35a9oW6fmVYdnt6pf",
  "key26": "2cbs1cpyzR6NiNSPxcy3pPWfStMCf4LgWZgj3h9s3AhVH7NuPu5b8sc9VqosSfpjsccDwLn2KYDvZvk6vHFoG6sB",
  "key27": "5qsUURCQMGZKyTC5qAof7uhuWQihuqLMu4kRYSSZVu8xhoMXxSFsxTWHRLFSnkaHAf58d8ZD1GVvTNNHsRJEZjvq",
  "key28": "wjF9qj9eVBRvuUmxYki8ke5GxEudVjjJhfYAsdmeE5Afetma921hJEkVy5Um5nMKezzVmiHJckkrc1qfUq5Cqre",
  "key29": "2aewFUAFBfT11qjB2nQXZXhtnZCWdmM1eUua1HMxQtAe12zG95sMjV3R6hUgxW4EzwEjPy515CX9h3MUCJkLLgYm",
  "key30": "SjwpZQPSD7WNTHR7R2URr1U9MCKoCYyPgng2nLNkAFMCuGYNuWGDS4uyQFfRywgY1Y6cECt3uGxaeUdqNAthHSu",
  "key31": "2xUbk3v3ATvubJDPqhjy2k52SyjZAKXpGaCx93ZbBaBuD2Y5uHoQN8BX12Keu2U7AEoEeek8AaXgrC3uPLtQxt6n",
  "key32": "5RpZ7oW3AwX2gVfEFLDhrtHKCZQywK7EV39fNxqgpu1KjhVpDThxdtU8oCc5Ha3JSpoz5sakzDBL5ZGGa1ZYo5Jd",
  "key33": "3spJ2CRRqjzycQfPv8FJiXbgPwWwzc2MobdMdcHvGBVVbmsgrPb5xp9J97SsEJxng3tp4epzWv5iceA1quMTGJkF",
  "key34": "26PXdfFxma8ZvcCAKCjvcUESyT3Dw9MRwhCaN7wae1JkgbaAvCQKjJPsoeB8x1UojT9HDBBVmGXFgNQCPb4zXDLn",
  "key35": "3DFeCC9P8Dn87Nwk1zYbakR9eqpaqkM7vL6Gtqcc6AfgqDGg13mapiHdPrZXDaRRRGN55YNVHji2uAySqgqo2TZX",
  "key36": "4UJWNhGh3gT1HFCLixF6MCJNYzbSj1AYwjhuKgkTpQ4wGvyknpa88qqmL6HEHvEVzcHTQW9WZR1yxdy1KcYdWJ7f",
  "key37": "4n5NMnBWksyfyXGCJvNU8heyz3sDLYVtiLwT4tCuwHmnkmk3JRX7YY2m8gLfGLSxDscSnuT2gtJ3NvdJDKfXQpQv",
  "key38": "2eazVtEbKX2mpAVnGTZRtJ5JmGU5yaDTxAWjH6vNhcpJoYHy4zFyoiLCcJY8enj4J1s3efgFxec8QLq4ByNhWBmB",
  "key39": "2gAesPMCxNNGxNFkcxjVZeg6UmXFQj5p4iJbfVtoSJqpdtFNHrsHy6oANnSjuyTrNk8uWe81y4HzSNa9X2CNgP5J",
  "key40": "k9ChviqRxpP3YAptGQ4LRZsWbsNF5iabmsvvLQsLgyBEpxJAf1CDjT5xWrWegYYEBcFweW6t3gzvFsqRCLcWHjN",
  "key41": "6G8e2MsTCpDrZbUzrWdXecG3sZZmAQv98dHuy1167XorbVsd68zrjNSoDKWeDiGaRKL2G5ZcL3k9bdH5rYRpjS3",
  "key42": "2rxDmFRSETMGnatDPv49efTNEa4EGjmDKRhyKzTE3XSk1KacqAUEmUATk64GqevZjNELSvZrZG5s6QdidNYf8ZmH"
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
