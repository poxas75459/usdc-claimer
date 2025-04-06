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
    "5rvdbKgKWCCcBE7Z59YMwJ5oLdskc6SsW3AuTDzfC6EJoPE7sXQk4SGP7ogU4c5nfyw6Tx9b3h69kUrQrvA4KTMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aBpyyyMrNeCJW9QiBYKxg6mVCgPaNHiBrjsfKEi26fzY6kMsV8zAtcnGZ27L4eMuGyUACZ56kQ7yFjxinq2cJFi",
  "key1": "aRL2zS7oBpcGgQnvCT9JoZjS4dJxXdQMKaP8rjrryJAHrSePNCfTpxe5qN2afcEoxBfTJmDVW4qWddkVYKTP9Qi",
  "key2": "2X31QX6UoAL8PfmauMRChVDQLZ6SMhbbp9FcDEaCytjtULLCnFaWXciRP4e3d7Yb3cYRn3i5pMuU21xc2WxzWmv1",
  "key3": "2pjoNKvzz2crNEPHgdCq4dSb6bp6R9MVXhTJSRKf5PY8V779Lm7YVWcT27m2U4YVCTMZWunpS8x1Gxe6jso1Nswn",
  "key4": "3Nc9nXYvkkA4cBec3EuCzGWQckamSfsksmVmCF3deuHNJiT6vqpLma27SW63LQ8quSHqBNgKSvVYjkNe5dRGkynx",
  "key5": "5zeDWZmR67uFJznArGVdhhTHE5bJQipBnk4KVYgtuWs5aV6VpM66j4b2ChHkRk6WeQhXJTjThJL7T2QRrEESgnCj",
  "key6": "31r79pHa983zz6Y7gpjKuX4c9Cdo3i4M4fkvcBc14XpKaAUHkYirkewaYx54z4FXp4jM14jYrV5tBxgJJHTotW9Z",
  "key7": "5QCQN9JAH831TAuTxFxJsq78kHWMk3tCzN98gciJAi27iCg5SjmpwSyMKrZ55DMTPbNufbVArQTsyRXPkp3FeXX4",
  "key8": "JdirJm3BW7mjM2rRjgg3hCgRu9Jf1amGXXopKRtUaSFByR3r3ES2xpB9kLU1nmSzdLPjyXtSR3TxSFz9eejwC3E",
  "key9": "5EAS1AcpyHQs6Qb5CAsdHwBf6eDHTSSbovn9kF5rPKbM1q4qAS3vZnshCPskvMdTQ3XZsQKew5m1SE3ywrSQNpRe",
  "key10": "35PmUzuVGc3YoprFonoXSK2ghQT6zHzxvoujGGwakWWYsaQoR8xYqN3ChZkzYvgZX79BYbtgDPdTSE3jEckVSqgK",
  "key11": "4W7FrQtRoPJyivvjLj54M1e9UKkiFLbfhBfLQwvDNqWLAA6Yn2V195t8fPX3y9WcAFtduEAhcprWjRs2urfkdPEy",
  "key12": "2z2mpSxgYkn5Dxu9u366ggr7GVn9Pva5yTM3xUB1X8Gte9R2x3wWXW45LeDeKHY2KrkCWWx53JuQMy2LjdBYv53d",
  "key13": "MUr4Demg3ZbUC9J1akixn9J6tjhJZQVx3KSsMWqbk2j1T4u8JBkomML21Ytmps33puPwiKaCxMfxYGA3bBm7Pst",
  "key14": "58fc4ezmHiBqcvk2S2z4jD3JBWR8zJDmH3QH643VMMkcRHS1ZXT93VKmyTvJsy31jA164L7kwyRoGeGqXpzSkuDF",
  "key15": "3eu4ague985TqAYdhyt6PYP1L9U8tG6PkzoJL2kJRjYyftecb9PfEGBLWbeVhMREfgHKesKGZPd7mtjtVPqd47MS",
  "key16": "3MU4KBvpfMMBzqC8CaVV42o1M9x1rA7hWuZEyQvggcDnSvaYzzGvVNxNwPd1AEsvt8cJcWkcssQ1NFhN6fZwRNb1",
  "key17": "35gF69fWr1CdXw8xAGLhCG6rRkeALKCqgfk5cMh34GnpRUBCm5HRvF48QFhSGZbeo4th3dyVJPfT2vLVtRsqWdNi",
  "key18": "3ZLSbEk8Juz4csiSE1zEgifM3u1oAvfQBzsXGapHE2WqF9Wohc1LLajKzn48iQogE5rVB7YpjYwciMDCJGCRJkJ2",
  "key19": "tvyyL8TADQwiqQiBsMFzoydaMcxSGqrdSico3cikmKUwDhiTvQKueFCZzfi3VHjMYP69sswckDioZE9eY5gb2Sb",
  "key20": "2dRZv6f1AVPBSDXvE8KkVhYvQukmUzoy1xpzQH5KJKms6VVXdiRZyVpjwGz76j2aYprRfvbmvC1tTXJrJTzN3Wb2",
  "key21": "THtq4T3YKypWGFzo8kKzNrNpyB3gcewhr8ZcN8PHFFj75aHe2zYFtwnfqMheYpeS5hTXinXqgPZkuEkZjMLt6SZ",
  "key22": "yuoNMKj2i8UJtJwN6NkCMkP9cFeHWMz6BhSjPHmf9wuF959mjQ9pXoD7uoHymeGFxBoFLKXS7zXQpyYnkruugfS",
  "key23": "5z8Xpp6Jz1Uiw5sXbqeTTutE7xqxiecva1NsNHsaCcX4MTyCsfJapWSBPUFK5V8qgXKqwTiQeT43CnDwyLg8QjuR",
  "key24": "63NR8TxtiDVi4UNFEo3Rn9iBjzctRGmNpZQ68wCbCw2Y4YbS4yun6FQqBRABatDfa5gmx72TXeWMoMjzKMvZDPGr",
  "key25": "5JYgc9VE5QsNrSmz6LdvJPeUSxgwHn6BZbf5PPCYSDzY29Ffgu2HuTesXM671yKSrYXG7wQH7KgiAUf5hdsTmLR8",
  "key26": "456esz7JuZ1feNZpjY7EUrJQLcraZBDoAq4gaochekmmLQW2x1GkmU3sbykA2xKZJo4FfftkCgUiM3XkCAirxbon",
  "key27": "3vmFjBfN79tTBZnq6DRhRES3vcZpq2qcndSzFqaHjJSNuf3ofza5VjGgy9Y1rrUSoTuLBzByRqWs5Lj8HzbBPwvT",
  "key28": "5daD1o217EXi1MNPSNDzi3KkNK3m3dMU1cC9BcK5hnTnyFYrRWzi1cJhLWvLMfvagFeERZNLvMWgabYDZna6dQNC",
  "key29": "5n48jkK1ikrU1aWQc2xmtKom9BVGqEWXe9ZaPnwtpfpmvpJ5a8eVmR9TH4gEgHrfsJzVp4LekE22ztRpF45dvxwC",
  "key30": "3FpiH1rxmwRmwVgX2YxtSYw7gsqs2j8YN5XmCFpGsRhXaL4563KqsEwYUe6aWoN39WsZqAT2NAZqswcsvy1SfizV",
  "key31": "4eudZs58Cs2MSgSjswvdpXQc8q8Xb3V4mtB4zkcsQCPUXtp7R3hj8J4cjtLvnEpTHMcis8j2PAFKEJ1CbjqRDWpe",
  "key32": "3FvdY5ZXjfs3D5qB67PaMPYw4w8Rq8qggjHrg3iPfBX4a9XdWjhVbN4NUSvzM5TUHQ7o54mbBbBYZ7krS7RMFNCY",
  "key33": "2cW5mWyVYPZzspSaVMMduepw9gRLxXvAsCiWVatEvhjBwC1A4HY1uTU3qcGiDBiTvD3LmG3UoDWtiuMyimVQb6MY",
  "key34": "4Loc5xizEo1qgD6pRWfJwBPfZku9fusuhTiS8dgZq3C3hi5JqqAFEbQTQgU5f11xcUe6wJ7BtyCmiVsD5M1mAmUz",
  "key35": "2tD9jq9xe4nrJApsTiPYvDvncidvN4UaCtLXRZrLBCZkTtE2ooaMV6bHHKRzvfxL1cDj8Z7D1SG9yf6FtSiHaKLj",
  "key36": "5KAQRwXwhY93a7cGGKgqPU2jC8FPHek25LiD6ZdBjqkyCrsvchtHdyC48394CAwy8NpWcjse4D98BWd4ZyRgWkLs",
  "key37": "35KumuKVveLFEQbge7pccVEY47wVqzk75FVTe1hRtH2FEPXp4asAob1PbVTTVMhXfi1pRmSD1ZGZbxh3vWjQBSTm",
  "key38": "5PeZfSL1GoG6iqM7iayYpTkdXk68vK77hH6K7xpE35TpAgZXfdj1fgu7EhaKnCDDN2uafBafW4X7exE62urHfwMh",
  "key39": "rcR2GzMHR2db4mbsSBaoEZ8NNyDF3YZ94VFe8vgmZPdTm3FX4kJHMij3NroyMR3Cw2YoAutVuUDZnKiKgXA1Tpq",
  "key40": "3isfV8Eokf2k314ahdjEuPTAMpWdekQdWr5B1APKG43mMgPGw4G1aMXaMEcYobDHdtDTGX1gfMhQzN7m9DqJdqJR",
  "key41": "t6P9dqXXosCNmuDdWnCRAGXR7YfBYFEqB5VuFx6sisJKm5ZhWNDmr6wTciMRGvFDmoPwrHH8f3L4AzmB6WF4mzi",
  "key42": "5YGrwMrKr6YVdcPz6QFtSVD1855KvYh4YDuhb4x18aNfbrXMXD4APpPvTMmSiRmKfoamc2z3AdH7f7W4eJ6AM377",
  "key43": "4eWNZBiVMcf69cnJqxRCKRSqpWepxP6hUdLPzSnrjU73tD9RT7i7jZbiiHPbhGMXaq7Mk4VWb2T6FpdXG77CmB4A",
  "key44": "5ZFkmY3486ynHysLp5GwjVXH7cBQh45Aitg7Y3sdWwisahCkm5C4SfU3FHLHH4q57sMavRQyhdkq1PQe88p787ub",
  "key45": "3b8z11ZiFo2YKTBkD8RS4XtHeEj9pdfXLxNWQwhdi9KMuLgmfsGMXAyvFGq1R9385eAv8DEBbrcpTbot9NUEjTMB"
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
