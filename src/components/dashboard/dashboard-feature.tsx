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
    "3jWS8u9ZM5sqVHoVgjsvBHQLNE5xyJKs8nXzGcdxFnDQk7q121CHfLk7PNpjrxDWSgsBHeWuGfzEMsoSmFuveReH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fs6yX122MquoCJHLktJhHKuhg6YACpvjUysp7RU37iu9wyAEGLzwDG1Kn3m5jiLRzYqFFW2mFNHVSGEue4WLGj8",
  "key1": "4geCPVMiFUzPhdoCYb9oMkNCaDjzfqPD3g3D4w7F4RBHbYJAJfUASkiSPprCF2aRs8V2HmvLqQRDMdDm8Zar3hMK",
  "key2": "3EtoV2L6nimGJrVxDXYDqmtvvGgtxYeeqGsom6vtbpm7g6axmBTGrLZvDFBXbkHGKcdW3utyHuyfDTYo6863DGEQ",
  "key3": "2ejAiKdGHgefSFDxD2To8QJTguSaExmniHbGqtMmERdvhfSdz8BzynpYCuSLcVTVKxmneBodYDiUwX5UBxQE9sn6",
  "key4": "4yfKyg2oK4BDdru5Dn4ckx5oWqX6PYszAfLwumPSRkBkwWRe8JPnrXDqqduSwHUs79CJ8fMpggvzZgPy1xJEVGDU",
  "key5": "3r9fhGezimRAq1P41bPuFUAFZi1xjaxEGkL7KsuAzJfo7DB4jKnNVbyzP9i8Dq36LJyjdz1H1rHG3KpGdKv84bDG",
  "key6": "5GCzftEDc9vi68JczMgYy9sCenv5di25ub4BpbMPLqo41XgDn7XRZuxbvivncwvHyiQVsb4yk4GkV8q7rTM2eDZe",
  "key7": "5om9tDvtvUHi21w4ziWRNkpktLJqtt1cdszQKhBzyyAPCL5dsExGo7g5bs42WYRMGE3AsBHwGog1Vgq7fvrAX58u",
  "key8": "drKrK86UXVTUNUiH2H8DaA3fvKHMKpeyDAkNvSg5g1eH6K3Rn5eWd1ZN8xubYWW2Dtgj6P4u1PkQ1CoeQs7hcz1",
  "key9": "4jw1T82NGUGUtuetFg868mSn3fHJVpbHM9gdFfrVuZkZUwXay8opmGkW2NxPyuQgGnzBbmuzvoXWCber4bA6dDE4",
  "key10": "2TFXbdQE9oFA6smzxciYbNmaTgpxDRyuxQGnHwytfkh2iMC3HXQxw8vwE47Ef58nnNyaVdCHuYcFeyoLUZpbmWbn",
  "key11": "2GJJf1HgGiNMcj6Zk3uDg3JKKABu2SyDbCwJd5A2a1SmpXfBaPzpUyBVFNjaX2zaRAPGfBni94kC8SCzMWZ3YwJp",
  "key12": "49qbauFjRnJbz9aLUygt9V7F7cEt25PBAToCWxDWkmdkbKJmLXzJw5gaA3hoieMcPVEMwzqsgRbhjKHJHpq2bSRp",
  "key13": "53Sr5PnZFA5WG2kYCARsuNcSJeotFVWFFcmnS8XBmaC8QZcGStboFTbGkCPyAhCyrPva7ib8yzf6jbj3K8fMt4xF",
  "key14": "53CXacs31RZJC2XdjVDetcHDiXio9xv2RLfxEJE3vwzuamuq59FS85nv7kELSkU6Cz4uPFve7gSdEGSJPTeLVnLV",
  "key15": "hDSZzcgmgFdy6CF2okj1SLmQetZpW3318LA41jJQf4KGxizQSeDf7YyhvVUFGK1kabDLbHybQXxEKUR2gZALhV2",
  "key16": "5mBioHicj6AhqgjNqcBXNXKqpMfHbhqJVSiyd5dSZcAZJzg1vN7sdwEYZzXKRAoGcyVhFLnV2ZYsHqXypSgbu9EP",
  "key17": "2U3xkCNJa5cCXPP1MatnrjW8GQ9wd1MQksuHe9y1DSd6vwUUMdEJi99UAicRBpuJqA5fGYtkA2SVD7MwTZtnJFip",
  "key18": "5tY9e4kw8aMnVWHmTe3wT6GTFvKtsdfx3UaNmjtKJBVCNjxv6GY2QkvmbALUD4RZXL4JtsoKcAgsYDEpH3fPvbA5",
  "key19": "34zUJ7oN4jYXtXLHGmwCfaBvTrEmXeXwjV5RULGdv4gt8hTEb9Jh4z5jdJ3FdgkrjTP5fX8SEfRNhvuf1niFwTjz",
  "key20": "3P3TRMmEiuhqg1rYquRCuWRGtaA5hUyZDLj9KEJshrQzFqmdXDWxxHYRpeMPsBbUFr2eKUJD9A7reN1YC8Zb5zvB",
  "key21": "3bj3QXqEB37iExEKMBCMYvjWJdcPW2x2ATsFcQwXgv5F2AWm9jBcdL7rHKjmnuxBbDAYYZr2ag1V6mKpPvZts1Dc",
  "key22": "662KRPN5LSjKHtUGqycJD8eror8axDz9XZ31LB4anvsUAcRJwTmPd7ehGgyFcHS2v595zBT5iwRENh3nZp9BiLv3",
  "key23": "2eLMntXtDQ5aKp17dju743DxVgosKNntJ5oXMGv38n2RdCBCNg3xPVxWiuKBoG2QsEFryRudWQDj3GxCyzARJba1",
  "key24": "5s6SqmFaZSDXpwbvteQfkV2JXRm4T1L5Xudazhh9B82NzBusqZ9itSYZXz7zKVYFcGv5AhK5RJzg2YMhXohHDbj",
  "key25": "62aA5DfDrsBprYcTMqgSZJBr8qQ5Z2MUngZiMaXz1RhspqAUzk8G9eJyppxZJHDjrcH4kqyZp7AYwKcwhcviChEy"
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
