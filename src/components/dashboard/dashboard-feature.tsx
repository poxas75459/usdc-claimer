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
    "2FyeRbGFpQjQjzAQkuVWu6bb5jvUGZcnmBY1ikgPNmWxMDgop6EoFwg76f3S2gYuuzaj14bJoQT9TUUd6DB8sLuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53TAjfxpxnCPTMZ7A9qiZX4uSwNaVKahBRmmfVs7RQ9fHEx9MkvMsDXkRByYYAJgYU6YTs6aQ6GobqcJHRpDcVpg",
  "key1": "5QJq5Yc8tPmj1vGTRn5X5wooBYpQUCFJnWbK74Kw2H3BwsgUHXEeMymQgNEDfmsyRBsiAvWzzkzA7zHmobZKtqMc",
  "key2": "4sZU2UTyvUyHtkZLE4FR7xRuhmGPNEz6eXcHPjBdi5J7zqXwXKcjEArav2tTcrUhiuJEdW1oNVbXk4rNw1kW61tJ",
  "key3": "2ejV9E1vyQseWfdKWYauNhJHj9r2o3u7C9Se5V5e6LTvzWwEgYUX4PtScrAME8QvohpMfGYtZBBBpDzNdxkcTuzH",
  "key4": "5tQg746Q6Kq58nHpe224sMBvCH4iJvsa8YStthboUzosscHz7eb5hGh1gmcBG3vveFqsLjEcB5qHXLu9eMZsF3tb",
  "key5": "5PFpSHYCDEdSRkoHXG84XM2UCprG21vdX1vRVPnbsnbDBmnE7e8tAtzSHnpjHeD42DfJ4chL7XPizJjRiNG5NW7G",
  "key6": "QX7qCdZYv6gsuLRQxoq5tvn8cjtfYc6j4p1nQmSsYUcMAt5Jax44SGH72dXg6YJemWjRyKhJgYG4oAiLJfAKLz5",
  "key7": "RfvpTzRPThRYP8vWa6K4EHToKtXDcg5fjZPDtB8soA381jaTrU1bfeYuf3EnCpf26LEzjGaZhKT88VgMQbfD9Hk",
  "key8": "5VkLRCsSHnhUyoYCyYZnjwpYD7amV76MR9m8X4LG5hDFywtNRjYamKrHBXHvz774mgEnUkxiA2LHXLDci6SLPUFo",
  "key9": "A3UePPdTXSarTikB3kD6dpXpp2nAub5DQmQnNtR3qGRSGnLRFTTi3Wdbb4mx9cnwnyxHdFXnXrpBBManA7PSPKE",
  "key10": "2wGZk6eckHvhVLgVVtcNL1VMSK3bMT3nZaqEV7XHaVjYELwo46MYP7azXY3U3t3CXACCdw1pEL1em6G2wqE3YCVA",
  "key11": "2dszX3ZxegsbATdCX3XjGadijgM9WmxmYrSsx8fgmbCJ945yyUAjGhdDuDmXTS2WuVVkw7qMViYtiF9VymyLUdAt",
  "key12": "FVbDRMtd5ZLHw1KWJhFpHtwdUjLrNtMNpxKfQvng7Mkoa1YGhbfUntKcGmTMwyv726UDpqLqEaTqv4BSSkkmGad",
  "key13": "3YKqpzDLxxX2xFU8sNj8Fdgv6TSMSr8sJ2csKE4x3tVpbvC616bBB2gA49ocQyKVJQRuexifpAyxvXuGvUN5gjid",
  "key14": "3huThTUFNsRgKhRFzU4Gi7dfnMyE83nQZLgEn9137EJSAtVZdsdyqNCrbM5SRsRqDxXuiSJLiV3nTNauPQe4NCa3",
  "key15": "3hcZzn1SybwSe3faENzx2AW2L2UNnKNTveY5KdxFtA45pKuySp3hBkSeTcEMMqEzAGikwP3FxHqfK3gz4KERdNbi",
  "key16": "5gwm9FLet3WX3KVf8ieyLKRu4MAg8CJvMrxgKykBSkox7tXwB8xFSPYdc7kTYPXrZtcbvFt1Khi45ZUTdbNM6Amd",
  "key17": "53CkogQoDkKqmBcCuJKnV7vWAnLyKyv1zojz7f7Tv7yPtckZjsd6JXcFL4qWBdeqAj1P5U8PvR1W25mSBaPm8wHQ",
  "key18": "4rpG58BQfowPmDxwCfSCdscvwxMFvDyX2h71JXXP6FDq76Z5XJ8CgG7sTDuSCUZUqDnVkyw4sK85JQFDYi2nEPgd",
  "key19": "CRNeYiFpQxLwgBYxezLGeGGWPsxcuHcS4BcYyg8LLmcKUK9iUTogo9giPBS1ehaEx9pD4pTjyhZU4oXLLCZtHJH",
  "key20": "2gt2fg4THkzgUxUrZ6ENv62aLQhSw1Y4YsSi43SVk2DooiekKM8DVZrXwumE3qNkqfScQ7tkbYdbfRe4W3CdG2Ku",
  "key21": "3RT7BpGSufscVUwC4P1mc49zMLiiVPQH9ia6s2y5qKPL9jZNxYvWhjgubJZg9vwQpVQkpR7gmeimjAgyQTahWzR1",
  "key22": "3W4GGvqCLVpTubLiXcA3edsfDEhyxM3UDe2sZmUTApqYHEeoepuWJ87oWtbfAUhupmFEmtPQTadocxahGu12wqSg",
  "key23": "4ZJKDH3TaFYCSwJHYCaF8Fos7eDexZiNevCmDSFXmLeteqcUNgXWpxMUKX7m1RkW7Tr1h1ZoqYZKyQBA48vKVLQs",
  "key24": "3Ans5m2oSPy9Z2Ehyk7Yc7k32wz7SAbfxaYNspmusS1JQsUhqP5CkK8rDU7Lpt9JQJx2L8kYeuhgEfmsT4Dw2iyn",
  "key25": "42SetYHjDxrKpqbQC3w1LpMwcXxx8cXbrGsM3cZ3cKxxtXurEVDMc33wfqZa4ebahMvPKeGcXZbi1gWt1cRWTVGj",
  "key26": "4aEvBg4ENDhXt8aqp2NHvYMXTn4kfrndnb2MX1Se35E2wMjaMGuUC9R6WPPtSXW92evGFC83wLdji2vefAQHx2Eo",
  "key27": "3q7kP9D8zLvSHb3J22Mk3LHVXqBnyUwAoDdXgJcbtmt8XTmdi4H5mVuw3mfn8M5WWPzvHq7r1RQprtQkqm2eesjn",
  "key28": "2ttGFKKgghepjJhEn33dR9fD1k8NyzLv2MvE8kmeQc1zUiBn2b9JPbYoGFxEcPHqWsn2vjnRUBRxnxeoSKupGg5x",
  "key29": "zSJPQ4gPjy6wAhBJG2VUxNjYwaZykchAedZB9EVmsEXmYRpCwY5kkxQt2DWRnJHtVLEFEoESjLTs3uTjNi4k3oM",
  "key30": "2WDiDzXbq9qQ5TpMBCCNQr3vHM4oX2U6c5WhvQtPJPeWRW8J5B5eUknQGt3zxkErdaukLSZk39CRXtKEoVaX54j2",
  "key31": "3pSJf2D7mEKei6obxsJX4EeyGgv9truAqtnEypyz6GJqavqeo7qeF5L9DRzHE6WcBo6JXuUAq9DQBtZs8hQtWXRY",
  "key32": "2uN5re8KG7ZkFTf3LAXJtZdXJhjKtjJTUtq8WqHFevnM6n9nb55xeF5LEbRrAFz83TZc2fAZ7GL7oMpLaTc9N4m4",
  "key33": "4eWfUXHuahUzNBnxjeq26Mvatf9K8iKSkxpET11Ppq8zAK3c9F7Cn6Su7bfFa1WbKgdJHmJ3gcBntVLL6DRJbgXs",
  "key34": "2DSzuYR8MUi1c1vYVyFkP6pTWAurTMEhVZbfj7r9is3JiGiscgzf5uMV1PsXtKTKeoUVmWRACWtGuBSBjdVYE5Qh",
  "key35": "jLaz1LShRe4pJwLpw3WD6nZ6XeNsFkAJ5cPCcsYfzNLhhh8UtwYDncSQRXPPUAwGevpgN15hA3GuZFY8Dg4gpEV",
  "key36": "zrdJzrTvjs4bPTesmvdmDdy2R9ks99G7T2ThbqcWd7R2QjVFmVJGdM9SwaLBAqZtYXjQ7YCp6hzqkWyqXSMBpQ3",
  "key37": "3cHdmcGFRUv7PW4XFE9jjG2xxXeeu6ZU8rdSmaxBisK8whpmk5BcWok4aqMPf8NpYnLqeG6TYhQXGUFHQgK5FEGW",
  "key38": "2f8R1do7m1wKsXiwaxSrGmg3ADTGLCjaW6UJYsuFLcYMUifsnHkkgnHmdkSMNTH3y9rgYmggBynArHzVUhjsoWcf",
  "key39": "4VmrA4cxjKR5w46RUucTtLyw8UnX6kY93wGvQ8KakEULhyvAXzyUtrr3aFA2VfWbupV2Wjmk3GQSE7QBz6ji6cfw",
  "key40": "4srbmGDUBscgvBm5gCGEQCsfhJuNoxJxwwjuzTUSgMwLHJ5F4LzA7qsjaHj52MXUaN5EC8vrvjoh8mb4P9nEYDUn"
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
