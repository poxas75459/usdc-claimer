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
    "4A2qmtA9XmU7i67SkH47qurywLJ9Kof7wdXSdUW4om6ZGryPAyrT9R6TyTjBz1MYNeYeqNJaoaLh7frWmGY6cZ4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FoW3UQEjTiKnpAUZUsh7zztdnDiNHGnMwpozq3UqYq48NVVkgUC42nXA8ATin3AqrTQPq5wn65s1J6xbfhsXHKe",
  "key1": "2TmvY2Kxkw6GCBB4SMfFW7WP4xYE93BiPvDaL4fmXidSokSjAfY1pNkNhmNyKmsoq7yb8tzk8NXwhteHPV5axFT9",
  "key2": "2YAcnLzxVPS29Z3eYNJTgKoxbk1X8NrHBtavkPsLxXKBJo78k9gUxPejgnHiQEaCKWgWHjvfs7J6h3aXmbwgjEcx",
  "key3": "DH6fiGfhV9uzMsQWwquQPfYymcMowJfkyRtSHq5EwzE8uCsm4wscBTWC35EtaYGjGPpQfx92cNYC8JB9N77UpRg",
  "key4": "2mn5mMJQDY7S4Z9EF2FBMTZHXyduBmELhETY4QdVCPGy9vBZiDt27i5oTtgtEpTfLWK8LZmufiVf27Wp4B56TPSf",
  "key5": "3yCGzr8C2GW3K3jaRUi4JZ8Ms2Raw8oBX36YcFi2MyrSwy6djxXbd91phoh5sNJxpUTcYpVbpdNzXA6dLf4zYWYH",
  "key6": "abKFxcXAHBSXGw9GpDXmDdKeQFyzF3oNWjTweWPgnekQSQ7SN13SH856MxTUsoGdyqzFAtCzX5cmobEtmB1nrhV",
  "key7": "2ZEQEMPJoyiBcNJpYdUQnQF2mjzvbmVGZqNQvFGFxsHJdbDXutx2oLDEf4zkpuaWBYTzCivmgXKs3q3rU5xMju8w",
  "key8": "672UPxsCv93qeFLENNT1bXtx32G4XUEMp45ASuhnx7g4SAuw9Y41MD7cLwHv9qTS4eBCtd1gU6cvATGmTq4Yyuwe",
  "key9": "4AExp1PHF2vm2JG32u16wrKPaVMc1BJYQT8dJK5BgJy89w4amSprVdzbVZEi4ztBPtKWQmVTLH4PFR6zSjU9sWP",
  "key10": "3gvQUh1bcRpm3gnxW1fR4zQHTQGcDh6rJJp2eTaShmMfb6ihXczx2g64wvpU4KEXAbjy271zvjNgYNyocnp5TDvf",
  "key11": "izu4xgUbMaRjdfm7fecy8Qi5KtMrcoRWjikKfLP7yz57XeK2mBc4kWotcaowVxPyZT7W1jirWZUrKeVGgSVaw9H",
  "key12": "gYAgS17JMSc1daMhLZZvQarbG3DfRywuofMPCSfiiPvotwGiaCgJ2HHj5YVYSYyzg3hd2FdLj4JjsEaAUeeNG9P",
  "key13": "4EadNMk6ytkHTiWv8iPi4RHFWTRAiiufPvLGcEY1eSnu7zTWUtH6xVrVo1JAv5wADqiyxNneroikhz2512WMEqdi",
  "key14": "4h32QvL97PLtrzkEj3XK6aNsLh2vDzJDT94C3gABhDcckgDYYnMJi2TzCVHcufpjWdTr4hjaZQQk5YDzbcAN6a59",
  "key15": "YfzAGvLBmTAqNUAegbKHNjLkzzFJXxLDMTrpHxS3G7gPb62kRjQtW1FgcFMxuentgbQwejueuap5tiZ37qpsvXJ",
  "key16": "4dTvNRdr9oFpyDnbuQ6KEp2QdkU6uwuj3PpD3iH1aJB3LkK1FVeuazZjfJ6sUdEGEKmUPqndZeUqbEt7PbW694TX",
  "key17": "3HC8VNzEcQ77Wj9okRXvqFjjsQ4X22iM6c2jC1nNiSFj2uf7BvjtHW9mJbxRBSSyZjoHcoHjLftAGH5QpedDUM81",
  "key18": "3BgL9LU1Y7NxZDp9iMnaJHZWH6y1w33occu4mhDwnAH1LEX5Ezy5qcZXq8Kpb9J4PuFRmf7u9rnBD2ysGv5PWrkU",
  "key19": "5uF2jjVzV1YbvGvebAYUrqijzXjPN2kaWqyyA9nBQgbbbRwDMZ7EFaPx4yc56cd9y8x24WyWGGFhqAG3mnmEH3S9",
  "key20": "UHtxnJBRWXdu893SDrRiz6bLts6ks4WpSeyU4bWyufJU4FTBNJmDNENQqK9fFq2xndL6WbxZyW3QRC4iLjGtpER",
  "key21": "2ft4EFDHna45mCmpmfjWKJsk22HmppxUawcgRVEubJipriNrwxNUbBaqWVHsUTMKYMPiijmJCfP7HKYnh2iV7ZSD",
  "key22": "5EavFa4z59eoN93bG6wL7J7v8PSys4tdyuBDy1MsfBzrYunEEtrV2dqeWtjnEPjfRzKgpy3gfTpDXuads6eByDMo",
  "key23": "QwJk5XMiH64LSzLbMqbbZ6KuMVDMKGE3WRuopXoN4idLDsa7Ug1xdLaJnVUvaUvcG8tcZcxJUWBnzPZ7SinGiMD",
  "key24": "5aZHrdNAMFwFiWFGH8YhycBD4C9WEdCP3kp3ib9HozFxQMreSHvWe3R4dgxns2S5HuXp3twpmTzeJ8nw36xqavyX",
  "key25": "3ATKMriHuT8AgNpeZabDfqRJgKDoHJEQYPiQa97KAk66U1s7acNTb1Kq6uSVNWfha4dqVLwhiSciycFcqjJkLhxp",
  "key26": "5YoUvVCGAo4MQsPstZfAVUGtHXgNffpE9m1jSCE6JgwFAXTd1bTA5AqcgaMoGMfnvFmKTRHZzhzBXXN3etfBE5k4",
  "key27": "iVZk2MzbVxLsQXDrpZrB7BdM9DiBVPJjgYzbtHhrXZRw8cV8kizW3xLUNRPBAitfvtyKqGNZk5V1BJ5NUgtZ3Gw",
  "key28": "f8TZ7RVxzsyxeEmsJHd7bQs4FJSpnojia4myq14rWi1aFaNvjrvqpC1LgKZmJqkTU7t55k3bgV66SzrmE3MpJas",
  "key29": "3ct1iWHQWjNYXwk2Q6K1yqHjfQc7jW4NwWQmeQax3yEhdt4DSXVurUfSDfSUMrbssPQHVG5FxjQiZbNoBtDbrmAZ",
  "key30": "5YGStd55mLnk4ba1TbGhvjUkmY8s1nymjsd6iNJvwD1SKaifKpEVUrE3i6z9euJuRBs852jujnMtsWRJDRQ3WhUe",
  "key31": "5i6cbkDnL3ePr5f3ZLrDXvxQcAbq38Jjg5v4UcKU95YmdZp3xGEz9nWMhmDik8h5sczdFDahYciAhF12hmEvLAgv",
  "key32": "2b4tkWv4PsqxyZe3ofuJ8Za7S1cbdbWRB5SUGxZKhkWCeiThVxqQjBMuqv2BBLgoTGJXa4gqSV3e7cHpgPjXeoja",
  "key33": "S23d8Lv15FgXWWa2w9PNw2LQB9fr8tfv3WSrf5Lw2vF1RZiwFA5HxzPD7TvPEe9ZGREjnsyoB9gfoTppxPKGzpi"
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
