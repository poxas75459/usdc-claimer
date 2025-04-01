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
    "412BH2rjD2VCmfijoX31SzeHmoBt7ACTGc5aHLbuQYap7gWJWyDGL9skcz6VP8aTQ4PFd1cGL9sJM7GLTcPbhk4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQSQRc9Qwre2sgSEkqbQPXHLZq1KfmBh75tXoMAHC9YyoLkynEgp5nh6RwW3P3na8NXtj4eqGmCoJedNBaVh55n",
  "key1": "4Qp7yP5GdhgSjSV1nNhVvXczL9n469jVc6YLwk47MwWEZSLcKBSrwe4kc3ZrihAZ4ZnJhZRRtTAqVRPjVyWFsMc7",
  "key2": "5RYAG6iRNoBrKPsgB6Z5Me2VSYvqu3c3oThTNDDQsfoKoo4TtKS6gSPwWSGLAgGDQuoTRxp1XUi5vPhhggqF9UWJ",
  "key3": "2PYF48sSYhpSraj65TKmmYWFbsjeC1p6UjxUfR9aTT8GhFaz3YxFfJZbJWVHE5kUezgA3yekJfLeGXPiBbzffEkL",
  "key4": "2VLHo188L95eAT82PoTtvZ51D2EnMen7PtaFzqSRr6ihHvG5aD7sTFEgE8kerLMxMotMLoRwn35GZhBXX8kAGr8c",
  "key5": "5fg2fBt1eayiQ5GTFTZEgoixzypLS2Mg3waEdREXZoQrKXuAmAPiTNRUTZLzEe3UL7q1waCEv42K2gYrQZZGLCio",
  "key6": "2fouQ3c2MFc8SPviyTBw7YtP2Msu1LNWnp8YXArsL8eJ3v9PcHFq9yp5Tnwy7hvgJae2oqbw4WBaWUox4msCT7Fv",
  "key7": "3kQMSoBons5SNhkAa9cw1wvE5tWoUcodqrmKbnvz3b3zeHM5VyvBJZJEDxQQbgMthxubYitPUYNWS4binqVBPf1x",
  "key8": "4Tr9R5uEdAH87ezhmVBMxDSv3VV6heWpKNCBoMvS1mjq5DySXqMRQUuSkCTg8QGKeDw1C66LpUPGVn3ocB75UsSD",
  "key9": "5qWNXANG9Tb5sWXJ4ZCDBS6gjiZ1RKpuavK1gnh6wrQ2Q8FnBy4rCJzL4TTjgX43eBnSQyzvwkFYmPvnWg2ty9sm",
  "key10": "4Y6YnQrJ6iZZ5VunmZDDr3s8t14KrbsLy8nPnL3bX9AokoSchCnWpj4BAqZh3f4pQdJRi5HiYFWNqcf4bZYUCQLw",
  "key11": "2WFdEF1HJZd21GwDnbKYgLjYs8KyhP8x55H8W6nMcFLhZSQYwomfG1T2Vn11BUSStMiG9arnDnCmxoxxXVEnnrvk",
  "key12": "2mwvqCQkXAqGJv2mJe3YfWULGWMk5Y47fmvHhHh3RwiQnk4Us3qPhhq4UHWgbTghHNtwpYaucMsYEY34tFYxeJcd",
  "key13": "5EfvjUrqsrW5aZb5ptTEF9nbKo3xEmm1eFKtWLBnsDZEjcNtP4EuUDiMBnsx7JCi5tVHBKmfkfaJWTL8dE9ZriUY",
  "key14": "3y6QkBpPBCkFAQZrPxQKTeDsaMcYnHRkRBMd9Xwgf4GxYiiZy9jYccjvuFT2veuMncsvLjDJ3LuMRFBR1TE2hxMP",
  "key15": "4KUn3coDHDbrqVMJVLGdriwd7r5iuaVfqeTnjvPF2SNzb1vmukXbcK31d6TPohjGZ8FqanCE9FWFroFN7erbDyVZ",
  "key16": "5N67DZixJ1nQ6zxfkN6vXMT8c6btqVrNyJiMqSbJJFVGUhCwMT7et2HRegdjqGQroLaBMXbQgFpqN6qPm9Ut8jcf",
  "key17": "54MtiEgThHRK7czS8jGjkjVMsnFoeqxN13dVKeT7wA81nKxPTciVZ63hWJXzpdw8M7cudZUXpF1Q6Yi3dNzeZuMH",
  "key18": "3mybJvmGq2JRhxSHMZge6uwbWaecaCnvX1DxzWy9YfseR3DPR4GU1CZrDDLozceENtJcucP4ubBWF1DhcZRQPjHV",
  "key19": "585VQZoE651FCDdkdgmU6vQvqN8kVh4csBkUKT1LVPqPBD2rApy1krpqHWbMs7YKkiE2EZrqBWxsje6Mqs2pJemj",
  "key20": "4M28x2Ni5fQQhA1SKFetV3W8yW1WtaYjBjbF4vXc35gkPmoehdwKS516Rh1SunPMwLpt3L2TnwAergvwXSw8PY29",
  "key21": "3tQtqXWQFLVdKqrPot6SQuNhaXmjiDRT5ThnWrHW2tvX3zCYKkifBiwkUMLicst96493N3nZCi9RoGgJ8ie2EAiB",
  "key22": "5c78muCHrPXSQ83WGufQs4UjGMDggEmz7Ln7rKDbcnfCguT3jeJSfRbGAxNxsJUo4fx2JCJwjugFpAHj8cRG5mAy",
  "key23": "4GxWk5fgktL9NoT9jQ19vYGXnThR7cZZxb4vvcyFkCrFuHZhZjQwQXYFw1LaM9HkjQbEkeR8aX6NFEcewC6EwMYZ",
  "key24": "2NGcyE324za4tuKSJHCp7RAyfEeUYomj4tJWVXyXSZPoJSCbKMsC496kJrpgzmgzUZhGXmCdjruB6uSW8biBeMQ5",
  "key25": "49eKQ6qdraUHNaBebuLfjjF2cRe9VrNybcwKrYKjtEPj2x4KwKrZZ8c5TUEaurMBdR2qpMM1FXAgHj6fjjJ3zP2d",
  "key26": "2FFe8ns5vY1i2EUMKTWVAMtyxsEzjwfiknS16NjqoxaN8Q7SJ89mvVoRGPNdLr84GS4rGvfj51XDbqSJa6nZ2tvJ",
  "key27": "4ikBwWBhGFZY9UAUbdBfBMac5881R9mkwZzar5DABReT2ERfMV5qjhPPBmMjA1xHtp1BULvQbQmTHVrPvvVwyQ4x",
  "key28": "2JedLnHpUxydqzWFe5jr6Ed4cGzfiyCcwKdZ5gVaLgYoPsSXKvVNqma8a9AyE8UbhbFtJQRjVPPqUbi3xaT1AwfP",
  "key29": "vqu64g9XwaMUwRwAfcw6XHydSZ7hCru3w3K7gviKKWJMYX3Dw6DWaRcUDQA3a4hgCbc3xNC66kucwXxKDiz4wYP"
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
