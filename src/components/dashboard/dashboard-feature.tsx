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
    "2Z6tE17xSyfGboekPZ9fSPLhMgfL5fMawySRPVkcfzwxDn3fq8jgWcVuwhN8uk9D4zkn8XbmEk5yb67fMaXQ28vX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZQUmV4zyTyHRoK8f3obivPUhw1z4FPR95ALyJiDoNcHkhbrhBPx4umMQccKvmUCppruV8riXTernpaA4AJ8CRbe",
  "key1": "2R25gjqef2aPrRdcj9nLRCGtprQAWAfNpv2U6Eu7RfjA9PVYqczvo3EkgVcpcgZ41DXTzxHd2ddTR4j5kKVUYzx8",
  "key2": "2N7QLUHK53iaURDUjon1QASccVN4E2g4diRd95qhUS4tyqtaXK2gdNRyVhR2BumwkEFw1VQsX5ekz6b6tyf22CAi",
  "key3": "vK4HF97JARUxLMLhqMYbZFkG2YVtG9k1S4f6HTnTcLuHk81MeSyRtZH2SrETDs8SJm5NAdpLMZkmzR1zdMGard1",
  "key4": "4U5gSt5X23huRMndnLQAT1pra4U3Fu15aYtf37H7SoVFyRhbi1MKWJVnWiLvB4KWcSHG9FLMtjXubBvxnR1UL1WC",
  "key5": "xXEfHwQ1Rc24Vr4TMj4Ca4esSR5AdPhhgJvWSM6yzYYG9S9rBJp1hKnyfasPeMoemUH4RVmxTUJsu4NJKdwzBzu",
  "key6": "65BsdJXXnA5UtvsutEtMLAkomZVYft89zAKc6xSxFjha9CHmp4ReYcandvvmYpW3x7BZbMi9achBgg79CDWXbTeE",
  "key7": "2Txyhn42Dug71C2hhxeTZCtW3YdDzNw8zAhRz3MtuhZQCSfyGGBcK1KVSeLFUQHvFLcWDqDk5SSgDDioeSA6HVy",
  "key8": "29Tqp9QZsv6UWS8yD3FDv3H2kazxD7frFAhDwRauQiD7hNsCsTAZ7zSXEgZLKecPqgjqu1NtDnUhnkknn51PiAYy",
  "key9": "3GSeS6HSBwaJ92H2PY7qNpBcqnsFxekg3W5J34gTwdbpigVQnJJvq5kU3fpVwcuXVzJnyBvg6SScfy4nFNUaYtxT",
  "key10": "4H3cSv4zYEP2NjcapN78cy6X8xfQAg9YUce7UtknGr3crwHSvADbMDfk1HeL76gcVoMhJAbFpFVJaoAUFwRfqeEr",
  "key11": "3688Ac2nDUjH4CqNDF3fQQCeSdSRfuPv41UPvvmJGF9dJyogm1uhB928QXjWu9tHVy6HdXVyo3YQ5AhJNtgL1LdN",
  "key12": "3RxbhQUd6JmkKZ31RbDB2ZgcnC1QUxS3g74sfsA4EzukHeP2ywpFSfYkZ6vqAWz9YHAyg7T9LQ9pivCuUexhwen6",
  "key13": "4DLQfHqjdNizkKanFM4LUsX9SRpydGAwME9e4motLfSuGdE68ZWDWcrKsWmsFGzoMJPy4SnRz6LnNVLnGrW8PXUh",
  "key14": "5impdUaB3NWsZU1Cfi8jAB4mp4Vw8JwziEpkU8HtiBmtKdKRxnz9YRg6rP5TA4BpuctWUpmWNEe2dnwfY5gCHPun",
  "key15": "5ue3K7igedVsBLNVqdf6Jc4eVRpaYDNkfy8P6UkveAJLnHfne2hVqJNvKpqxhxNGvPxsWen5zvrbS29UHRbYUJQH",
  "key16": "4jQoCPqExTSJFG8ybbnSrqRQVd7WMPC6gccKysxHkjwm14c5Vqy1spbGiQQq6mEKZH1YRqb5qf4Ubm8i26oWmeXx",
  "key17": "2xMuQaShp1D7btky5Q7BSXm64MaNR7WK7JB9r1WfHeUMB2JYQb6jYJyfsAn5GCfbbVi3xv7bLjBXupUwHTN1MjXk",
  "key18": "3oEgVCHuiUstr2WRAP6F656aFe4BSBJJfYkDMjNMcVDXtuQx7X7uaZ9YbSj2VrnZrK5ARTyyndyLGfxe4PSEccj2",
  "key19": "2tqNJwjjHuYmprvcJjxsGw3uxJYqnFnk8o7bY5JVPz9NUGTTZ4ogs2NCRmQVBp3VL1EYRRAH1UGqD6R87Za7ct2Y",
  "key20": "4FGGXsGmcBVGiZ9pJ76zKbWKUcnvamSTZAeKAVJzWnDsGhTmMjwAHUEGDiTetPhWd1nJhTgV1BzTuimtcLmimDR4",
  "key21": "5mqJQ1fGA3b2q3pipjVriEBEc9PG3jtdB1DqjNZ7NqfPvFxhhaTHbgBsKy9q5ommrVuZVDzXk8EqgY34JQfw4wV7",
  "key22": "3DS1RtbPHSjrPB5tYPQGWtVehXVLChQsjtfPUMJDBTkzyPK5yFWMrCWX1uz4d2K865FKhG4fDiXkD6UPmC3Tbsyy",
  "key23": "uXoH6hyCYQ39hFJfcDGBa7Vi3oEiFyS1sbLDpekY728vH8fFymveotdoVVpyoLZRcoTPtyCsxRYBzGA9CqoLUMD",
  "key24": "2Gfhy7VpdorXewr38pHJ1kh6inBKVkf7RCeYnjqJQYFjoG4C4RtJrE5otxZDfBg9gSN6ubpG5HqMz4ECZcRWDVG6",
  "key25": "8JL9KQxSnZLpVNxsKQmbt7U5kzUDoED7ELJpdU4WcBBZY9VoxJBEqSZFd9g5jQQaHsqBnuprCutzkf6Mn1L67xN",
  "key26": "4H82NB1c9VVj4mKMwzVzKxWQNjbVt9qeFtRb4a81EJ6p5sbYL2bdoESk3gCPBER1vmCctPTHJ1xVn8mzXVMctBPu",
  "key27": "4yse65foCkaCypkg52r6M3TojG5V1F8HGF5BN1BFmPVteuugXHZqAysva8rKXyryheBQhp3YG5WP3NrRS6ebGuJw",
  "key28": "2R3ASD5hAqeEPw7LdQ6qZn4QYXoSZr5VTXeDnQCZNNifxrgmq4N5k611pa1NZKCu7NvwbKzXZZdkGQT57zTiyz6q",
  "key29": "43sFV6BBbgwaqqGwBPVM9AfxZxEwocxwzQYGiSpkrkeeVSTD8DAxzTEZ3LqKjPq5j9x6azVU6PxRStuPBziKD8aK",
  "key30": "5SeudUq8ERRNcDYqxX1Qr3WTTRuLSuRbLViPmFZky3DfuJ1ySXB9T3peT7rCf5JofZ2TSEnKx8MJCioBixGAJet8",
  "key31": "5XoUgkq9tkjEbbTxEgh8JsyvBTQDvdcRhzhNyKGTugEanx8KHRT3bb8eKfM1syqmvdi1kUFr6s9Uup4g161gRmXY",
  "key32": "4a78jN1EJsdWBjd9eHMkPkHXLUawRw8nuyjBry1YaZDq4YD6M1xvLQDKhQZDeZf72kMS8Sg27FjarHV2AEyedZRi",
  "key33": "9Dvt3qKYpLuqUsPEwdyqhJss8Rqvhew5sm5i7FXjybDRisY1dB5eapJTwZ8RrHSSvNTd168TDyFu2MP1esaNuiV",
  "key34": "5tEAmRbMUvYavT7nHCUcMjNhwk6ShEdjj7SB7D2ikGFxysau62nyN9nb3yHpoS3jRhm8x3sMuC8PWxPFgz2ToGDS",
  "key35": "uwToabaGyYa1zEGvkLmw4CeKtLjweSuf7mgrAbayeSX4KrHwrQ8KLHb5m5e5UyicCF7rF8kCrVaUaGdmnwUC7hw",
  "key36": "5R8URSvzLBKBUpM7KaZDJpweDEHocydxB7aNAPvCdH6X3YGm3dkp6JsAbGtsRKqdCVabzDvMJYx9Ea6UjNU2sGmj"
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
