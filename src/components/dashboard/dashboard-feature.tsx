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
    "3gevMgLssvy24MeGySDcS6gGTPWWaZSgkUJpLHMsL1DAdvyz29dLaAKaoj182bbZzfXNuvuLtVJJvWgBXX8EvvL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJhNfoYscjumtQym95aEiyUgc2UWRYqF4BFCiumcMpYnV91RtPnALyGJSLRH5oWe1Z7Q4iQw3taDr8qoFzzrQrS",
  "key1": "39iqJKn87iEM9QzemwUSjJWAEcVfbo4o92oWvEExWsn88XZyqdGAjox9J6fNxzW2CGKdQWtvBeNiwGCxxLErhJie",
  "key2": "qFZCQ715vEhyfSGps1phbVDsWvgUYbQLpQgTnsaDcPs655qkXds8AcggsT6jDK3A44DPjvnuFsv2VMQsTFStviU",
  "key3": "5WaWbyHzvbqsrt1MhkNZ2Kv7YsMG9WhffgJj5jaS6DuE2gVnwGpsEbguqhtwDXGvJUZnjMyfEXbCEyp6CddhqC6y",
  "key4": "rM8j36L3JWEzNGhboer92o8zV8KmTKHFepK6NpGhDH2hEUVDcdK9MStx7rMyCGfUhdNuabo1eKURr1tg7SRtkki",
  "key5": "5rEKPqMqokrEpxpmQNrdkHLFj4HqW2wa6eok5xuQTs6zF8qSd4LC4pYhhzr1DakfsY6LsYgC1ujyGXePunpANVE1",
  "key6": "4EeMfyBLjTKWcqvtZPJNPUZdzHnLgX63A71YzWQPVtoYZA8i2993zT5KNZhqRFNEC5ZeKpYA7D2rbcZKFmzg2jeX",
  "key7": "vugPDUx1gEXkPkF15VRfdggWScyzMFPcswiUaWh3Ahp8bYF1jfWnE7TqANvgjH8XCWyKmCK6KGNePL9Dczjckwu",
  "key8": "2TfhVW876sharCRAHLYuYPKSosKY5AMWzY8Qiybs6nzSKx1VXnfcZCjgnDCNv31Lvd7SLvKWjChyscW9AgPpLB6t",
  "key9": "55a3i1QJBrQBgXFKfMaqkRc9UnfVwTucHCd9n7geCeP2swcULw6ar7s1umC4VKNUeQbYqr7ZniJ3EBeP4SFrXHkk",
  "key10": "3v3XbdL9wQqozdHLeZCt726tkRAVkM9dT3sN3TcPwRdqv4wzqq9ZEMCAaBTKnpmNNZmyZ42s98qBg14yZ3bob14q",
  "key11": "4Qcd7pFutkmUtaoeZtP7rFtiYFUNz1CDJrP7Lwiq9pzW9Ri3DLRpGRmnnAhf6NGhN4yYJu8fJMigQjoqbe5eqG46",
  "key12": "KGPkFjdDVkiZs1FoDJGnpgGsqy7qfozNAP3UCba8HVhVuMxGEeqoUF6t5CxAu1V99B6xw668sAWcbXJGn3gKZQi",
  "key13": "2u8gfLmBhd7RYGrH3SyS8QgidaF8dAWK1p2ADFp8gCf2pKuA1RBHBbxShqdzsk9u55ViLo3LANx2jJVQd265VzoN",
  "key14": "XySmxAUcs2zGod2zJ6RypmvuayYNTZK6mAqg3dN52N5BSMe2jkYmWu7QVN8Tzp73F42HD5pGsgBVXAi4CJjvLxG",
  "key15": "5rYJxUc116pEShrgW7n6xqjPwbxFWtaJq1AS21kdKMLqrD8VPs9GEaGztfXadvDXxAMaoHGgx8LMjsFCs6uJqPTG",
  "key16": "5pYHBT2sSxTjpyrkHe47LDdb9U6jRmoxa7C52UVGB4v7vYCnEqWarrDt2mZJk6wrTV5WiFvtkzg9GhUuMATZbQiu",
  "key17": "4p9mg9uz2nZd4zUKJzgDBq2rZ8fLdUSEDzYnwR6KzpwK6PWhiFfxEWk1VvBisT4Rjr2hDDs4K9yLyeohh6YGoyQw",
  "key18": "4y12hK6oFJWjSgYf8NidoAjjfh4cHupVXiD4UVQ7HszGjqcyJHW3J8LfeW8UKzG6N4iCyDRm9ML8UbScPTMqDTvh",
  "key19": "2dSbFoPZAKgWg1FHZcEknFyQUAwSiAfyUH84whBA3jWq2TtmdGWhmcUZnYijbWijwbAqMWiebQDLAihnAJAZL4D7",
  "key20": "3iNYnJvXPRd288PU782kuFeWfuDs7GBGoQkE8RnkyRm6EMdFxEsRvoQjq4t7BbvBEz2g9hjbrvphnupb7N8xhwXT",
  "key21": "igpKdpdeVnHYxKecHeSxMFYFZDjcWH4BwHzAoydcm2Ydyim29bWHwiaqnJpdur45abxGwogL5pwrLcTws5mTRjs",
  "key22": "2P3Eid8QTHCnYHewxBrFWmZrFBXWngC4U9h2NwVzPbuyYWiyQoDTEvV5jmQA1q3XyW3kx1vXM24KWFiyfHjPS2Ff",
  "key23": "2WN11p7jpeipcJZQRE2gCbRGEBBRMqa4GXam51d6pnNrnSseqHeGipPAru2Q4kQt8RrMVRSZRp4DC9Kru7cUm3mh",
  "key24": "5y2ndPx9zggVMavvK1jhaoqnmtvPMSgWFVkJJN23MxuZwkY5YTv7N1mPSYWBN5Ke7Pjau2GcvEHpPu7TZuaJatpr",
  "key25": "5LJobSmFfSXrQoCXPvH9Fu5tqWVQTnq6doAAE8dRtDZzSwgcUgKj9aYxSXctwHRbV1Zppji729joopaNGm2tGzCW",
  "key26": "4xcUivXQDYeA15a61uW19J9ktt5MQZx8jGobvEXWRP6n8nswoopWjLGYNUg3kYgwN7uEvq9rdAnWU1SYoipVjBUR",
  "key27": "YXxpn36YiNKvWcwK81rXybtGkC4is3GNt41w6bbMc6qBrijzoS9W86SJxwy3wDKTyFXigwa5WHssTT5tLRtYnwA",
  "key28": "52nNEo1z8YxH2SXLuZzJUnBC9nFHxFDxLmAirqMuc84s9Vo64Vi4mu7xzkMqQXg7NopHRg7QUvEKJ5E1rtSG2XVE",
  "key29": "5zkgDQAahmp9oLPvASi6NjMBcWL7KPdAnLLj9N5FdauTgcUX1GNqcfb7EJg7Hp9gBHeJC2f5gRSEpKr6UrmTPqCx"
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
