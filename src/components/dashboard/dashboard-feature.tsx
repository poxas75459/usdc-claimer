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
    "h5c5sh1xNoiE41P5YLptMso72VpyoGqs7xPosgBC7QweTrNYh6c9am4joHmmsegCAWrQMPXyD6QCE821yzgVHV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bg8cTLMxebrgwNzKxLvxkzYnDovt5C36rxpvikREFBsu8uXWCNUTiWuqbyTk8kzGPjpstJUMX68zBNqD56sVpRM",
  "key1": "4pFLoTRppaF9KHSjWimeps2dWSdw6PPmbFhqvsx5p3N6w6pAHG6cAxMuEFgqAw41JdVkqBiVCkuXiCjFcbhmcwwB",
  "key2": "2Ke8vWatvFxfs1uJy1r6HBqjEGe4xLAP5gzCJbKbNArDpbJptL2p2tx2bULfVkKNmrBWkxa4Rs2QbBXEW1hfcHGt",
  "key3": "3QVgLx5pTyri7M62k5jvVYBt4yvSJvWhB7eJbnB8pzaJ9UX3pzN9UuMx6rf58JQiNst6rvy9o5yvj39vJjErdCSW",
  "key4": "4c1BZvTxK81tPbnGJhH8BL5Au8m3ZoAcAqrHbGaNpYBwu6htR7CgTNDvCcJrR6x6sHvkRgiJ6obHf7ndh3yHKuW4",
  "key5": "3ANDDEEHNBJgXYaavfoo2SPVyJoCzN2ikg9hG2JzrkCuS3saxFSon8AvV2bmaAGnPyuSaCPv9iaTEJ3NDtwpTvhx",
  "key6": "5oWnSaP2dJfSvj7VqmDhvdb8bnRgaCJYdf3KdLDVk4drv5KtiWEiHDVWhFTPMgru3xmJpgWeo4MqM91v4DXKLPca",
  "key7": "4gn3gqffheEMvHWyFSGBigb9N6U9kxqgQeHURaPvxBeWkpQmW2Z7f7qfm4tDHcSYrP6gURojnjicQsDDDv3m7rJt",
  "key8": "4qQARJT16fdZVs2VrqpbGvChMpAYpVwtAjEA7DN4kEpquDLtaC664S4FFaGnSE2y7mNC36rmKkn6eH7F41UcJ4FG",
  "key9": "4je4aYz8DweY8kRpmgmbQDgKPb4Uq1Y6Jnt2BwSTQ4LK5N999spKdTEmGnRebWdPxm5A6XNupZ2BdXst2umEAbj",
  "key10": "5tYV9qRPZ7AAHDtb9EM8eCe95zE88RZoiEqzWMcgEdte34DxWMjzyHTbCQ7srqGCnDafRU4ioyEgKa2v18foCGxP",
  "key11": "5dYz1xTscMKPB7ACAZjoVJJPkuUXmjvkZrT8zvLSnZJshaHbKp4nSTfJRcChNzTPYD9aWX2cfPqyUajMR6SRVpcA",
  "key12": "3kX3pvMCGg2ZDKazEDoWCpGZA8kKBjmcumW7rrRtpCNxHw2ZZqRQ5Mkq1WS75eDc8t6rxLaQXZr5SySyx2ZTfp6F",
  "key13": "4DMTqpr3aFvapNEpLGNW8XzAhY927gYESPmBjaQY4P6hscaFoBa4bAvN1Lp4uGExCwUdnGnAs5DTkxw1Z1hkeUvx",
  "key14": "4Zkw7CU9NXgxcyKvtGAcQwg6wLDnatmHFz7U2VuCfmE7wBKLfJjdFWYYWikHnXAtG13xyuFV6TPdjXhNrhigz1eu",
  "key15": "B7S29QpxGVb5o8rWb4Ah3XtF46i5oo8d38ESY5RVGDjTUmypRGg8qaTDN6gfxHJmXSUab8ibT6VuwUxgzVk5VCY",
  "key16": "5mvzzx5LJVedkacLfZidZisJv6Zorkdo2qSKHPtDA4ySceCoiT3pD7PmsSA5nnQtzsuNMVPB4bKZ3iz1jEahfVBu",
  "key17": "28fVmn2PUJs7eJmSFyUsNtFnAcswiqSD7pM9CHKMRYm9xF447JCNxPz5DwuAMQntRYsdNDbePQyxJsM21KmQc9Dv",
  "key18": "4oYRxcf8Eq2RawNMXX8FTarho8Y4mJH13JgVQCSKrRdiQSruGNGTTmEJzKM3ELG75ntqRosdKDoPkaD6co3M1NMV",
  "key19": "55X2nNXb6YSzmRX8n1MHUpbwkf9hVsx7wTgrsuSnAqsrFQWsCdyEvSrzMeEPMH7zAyB7vmdR1cSzeZNjfRZQ5BzE",
  "key20": "5L6v5Pnv5PudHYdWF2tuT1zejdiJwg9e7pvd1GhZ1BxdYPCihbSNHwDsW7EjnqFS8StbiKuLvEDaqAshmSXkwP96",
  "key21": "35PmZmgkdFGTJVWYeDjiMLkK4mHsLBoXK79LCen3W5w44TcRPAgiegczw87rNTzhYHT798zZDsKdoJsnEkvBSW1z",
  "key22": "5g4D58io6mdGPrnvn44qaTkc3nLrVrFtdrotuh8LxfVP4XHoZ9DHaqUDMvFugvZjuRSg5gLyjLgsshFDFTSPGhGF",
  "key23": "4HfdYPXipFY26SqY3wzaKixnY1WWhdudjyEJYymVfK17coXZQQGPe8Vgk3xR99ry3R3fTxM4nuLqUabE3cwr1uTZ",
  "key24": "3DihsVBgWgg6n1jq3ZSDTpKV6dsSKR3Wda1cMGeVLvttttscxLyQ8Tzk5hJARExgVq9cAczhxmztNCtnZR4FkvSi"
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
