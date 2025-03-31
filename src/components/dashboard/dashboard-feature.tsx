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
    "3CfFCcHC3NTnHWtY5x19Q65atkgxFgkii7soPpgZECAk8P2QoVUkaHJmMibuhPHVbSdsRCKSV7wmffHHdN6nAZKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4QLyTW8wPprcc9PEmUCFhNnvnf2GRQYafRCz4gS1swTkyzKM9M6BLeeFBwE8BuLSCDg2KS7WN142GFRmyENfcp",
  "key1": "2NuDDfo5xo4SgWQRJLcR6AYzQctAmDFHtNRa9y6rDpkqo2rMCmeDjKZEtLgqjEGSFxBzjEVKfUAp5MLXscVS4oeH",
  "key2": "59FB4392FEPsRFFffCkJeCXq7iusP5Ch4CPEzfYj5w6bbGiuy89fE8akJ1eXCSBEuVu4SBdeDvoq1Xjb9nwy4U4f",
  "key3": "4hJEjfB6KaA3DTJJKtnzm37L7xpqJSTb4dcCe5yKzSkjJZHVCptXKHzyjH3Ccm63YThVczyq7CeCFcdrLs7Ryqfg",
  "key4": "3VZooc9Yx6NjHXz3qbi6iEyqRVJ7t2wHLStjxyxoJ4YZ4ptDsAjR9kmPBb1hUiBDhj17LuXUzc8XxzcqJo172VBb",
  "key5": "29CDFZhpjbPnyKFgoYrywyxhigLM75Ps9Gfeyoxo87bWgYgZXSyqqkfPCHh426nchP1pm8GyvskhoWhz36LiLtiC",
  "key6": "2uhe75MTfSAzTumvH3XF1pEJdfNiNMG68EdJbxr6NnzxZUue4pyxJQzAZrPzWzb91zJJKCzMDYSXpfLFUxBiCe2T",
  "key7": "5X9vxV5mH5qfzBdSuinskDzHHkP8m93atxnoMy8UhikbppsspSw2NGC54Yr47yDGvNJuRg7XdWkpta2nrE54JUKH",
  "key8": "4NBGDvi3viP1c6wbRCzSQJBu1jyo9qr9kYZLZK5ASGcdGK5JM1KuDrpMtZyyb6Be1UWb8So4zpPjrrt4PtbtejEP",
  "key9": "4cnSHHSuGoN9t8m6AM33ALh1a2yngwCMRhykgsA2iaWrNWkeyu4oEHTSCYBwRepQacBCKVUv3Bw9j6dapNJZ1nsw",
  "key10": "55APxyXwG2HN7nvvK5Ce2DtmnYes9vNbPfJ7dhrg8WDxsUNky8D2JQmMm3cE2Wnt4v6nxMwpjQhdCNgfr9YREsKj",
  "key11": "5uTdmMvSCKN1tG9DsmUXdhBHssR4LD8iyTJC9FH4Z1k17Yo3ZAXfd2KMVaNeiLnYDaevBbjYnwMLK6rvRYF64f5e",
  "key12": "4URK6Bc6rXt7ny5dKrWUpBumBkpboxSL4omr6YhMk6jymoYm45gdhHrvAGhuujtwFRJcVJBXEZmzgbB2XvRu5VG4",
  "key13": "K6cTgetd1CDE8YzXaJZFrjySPc7FHU6rkt72Di1zk5Daz15BU1ZykrYqyt4YVtoBCW8EQspxLiHLzS4m47vbcjB",
  "key14": "5tt9YXYb75oRWNyYFHSkUpNpVV4R72PdBr9ziUChLCLuYhySZddwjV7CyYX8ascastdpDzxHLarywDRYs8SRWvTg",
  "key15": "3EpjXpF9qGhB2w1Sp76sUvYQqixcg9cCGLHGdz8Dzv5JeQfSUL9a1NvyQ3ttwLCxv6SLc7CvaqV6sdJqmtqXktEj",
  "key16": "2P28Jj5rKJcaEM3PfYuz3uV7a7Ju3mDbiqUQwfhtdyVPJ5HW48hJAAyESfFFScv5a1GA5xuJZoGxHm5GQUneG7MK",
  "key17": "3eRnpwoLGF9XVykMp9eDsV1aegLVXPx3H1GEYfyjZ5orP6RV6q3NyyKR7qnYQACkuL7Rt2ui4E5pUY7UobsPYtKt",
  "key18": "3QZWLfmFMwbXDtY9uPXrAL8MgJx1Y6pVkZ52TiPySrgbzgkuj9rsQmj6QoGi48boXpdPH9YuJKjL3y7xWC91788b",
  "key19": "nsob84s31EVW4gTwsGhheYwRVenxN3eAGSgnhEX9f7MmKa4rj1XG9Qu5hq1xpBZUou44ZVgCYBHkkNJzb3Ws58z",
  "key20": "2jtxP6JGcvzNGpnp4Qo33L5En4cjm5T85YNrLXbsdhCPACXgFUnUuF7PnFJSE3MiDN3VGUVZ6cViYtee6ewrX3od",
  "key21": "3QHQ6VpR4MZrndovgtVsUMjpkGRsFkh9RsNxUtW9xjWYYrdNw2YWqjMKsy9MzBPd2NXnjyeJJfJboqfmmVPJ7EpZ",
  "key22": "5erEhzWCxVtvTrKAchE5Pn67P3C46Es5PnPoWgpJ4K8xhMP3WJaRBb5HdMoKkCqwmPa25Zo8NpYXXogiGDrKaLyc",
  "key23": "HuswxTUTAZz5sZ8XVCNbTP4kEntJ13z9F19ryCwwADgRfx3Pw5nkMGmP4TpbQdusceWgwKMPmt41AgXgPBfEAfq",
  "key24": "314eH6B9FsB862bWvRncCy72vER63NqhS6AoQH99V8RvMErpcoggP9yR96m2JMF6K4uoi1Jyi61fHCkSQ349sG11",
  "key25": "o4iczmBarPdW9P9FBzMG2cFiiBHP8FBQUxoBpoTKQKxXHRrvvXT8iDYKiGo8AiynhoKxrfqtBTMufqWR5686Zpn",
  "key26": "zgN1Whd6cY8vto9Nt3VCJ68vE12kZJYN4S4452hbqR9Qf98wAuMcbmKJhibXMB2NMCdmUFAdyG3xKNap537dJVT",
  "key27": "5VMkr24ek8ueGWHEk1f7mwRTKjY27MMM8owF4HNB9zJcbEe1Nj7acQDdHif4RPV5vPJrf1WxdEf9M19hWogHVUn5"
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
