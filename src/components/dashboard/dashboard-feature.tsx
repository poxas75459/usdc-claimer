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
    "5hmncMwXQ4CU8YDiMobhvHkcMXNRheZ6SyFnzSJggdRdFJhjBTTsi63tz1RPEsoRcJ46XWacfaLemdpxx4qDgmeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tguXQ9TzxW7h48vgM7nSBGWbmsF8wVXPjTrRQ7HeSjs2xiAF1KsTjpb3cSk5NHshT5FdAxUyPgzSQTA8S6GtMsi",
  "key1": "3w28A5vmTKc6c1imFqme6HhqHo6ok7Kd45DvLtHgABGziDiVKDonVDiGhvmKJfMxvucxyMvmGcengTdov8ufxd9J",
  "key2": "jWM5FGWUx5KfLShd5vSsRcRubx5gB5dwPUcG6TcqfHijR584vsN38q8FpCkVgiJyWUM91qBHo2bTjNcubJZkW1A",
  "key3": "4w6y9VsHFULWACsYAsyTEUKQqi27hXVJChtH7R687AfX8LcATWsQT6NvXkrtBodxwKrhQE79BXHEmwdmaNWRcZBK",
  "key4": "64sjbcNybikaJKxpHMGqjSGnHzSyNbdg76ZtX1qGKDt25aZxB1uvuwq5MNQdF7S7m1GMUr5o5SoXNs8RGXH5Liwp",
  "key5": "Ag2TnQirJa4V7PVMCwWYCTf2Evgu8q8r4sCcyzZuf8VD5NgxDhnNCGkLcs3d6Bu7P2kUDj6KBCSTzeri1sR5EPD",
  "key6": "4yajGJHAAyijMypt8AfxkeeJgj1AUNAomxfkwYgBPSsew3HZWBx8mQX4aBy1QvquLDs16qjXRxrdRP3Mst1pAbbu",
  "key7": "2qa8cX6jUM51iPKFkPDiYQZpsf2XCK3Qmzw18BmvRiCsVQ8KhiLTs4kTvqgAFGbFFfE3V2H2y3GhuYeUWrgaSvfy",
  "key8": "4CfphHc8NPXVvZZhJvSXXqWWmtyFMLNSqAav93hqbyv5xcrcXZ2Exq1wVoXG67qUdRAXb2fGKHJtyoX37my6o1tg",
  "key9": "3mFGkYvjZ8vUubZKdy87kdrkddLqQ9hMzDb8SEKQeeSKQREaBCjD8zECri4VRE5Qvvt2ApKAHP1iM7NwJVqw3pfn",
  "key10": "5TjXLzGLzwEnVaeKqjHb4qF6wedAic34sMT3Jo2jqSSbEQh9b3LY7XdrFTWHhb6SFdthS4CHd7HGVBJtuf7iAsva",
  "key11": "2NcdYYhXrL3m3c2sJVCQkj4dCjrqhw8ngcWoFgTq5VSgiPkMqP4KDwnGUDnohqCpmKvaMM18GPJhpndBwVzTGV2W",
  "key12": "2ZgQKPEQMhjdRYWYi82BJnVrzWHRSqsZa6iVkMVzZNXwp3EH6f8nQj2EkWA14r4pKCjBBowytGtrmxRTWagKLfRz",
  "key13": "4DnZpYSQceG6pUFbHcJ1mL4s7qQXSvTf5wxkuMBeqFga4o4u4TwidjCHk2DHP3iF3q1njXhvcQYKd8Lg2opqXVxw",
  "key14": "12iaLJxaCLo4azVGrvBcXw5WjzXqV6Cbyb7WeFpaMEEyhD5T3UQQ8RccaxzURYk6uftefwhwYWhnEsGZQ3TQ7mb",
  "key15": "5pFRqo7doTUWMvmsTy2pAKqvCEb31rFu7tWqTbGFoWWFSvqfrq1g1xVahTeJqZrCVoN3usHYuEEg4ZWa2cBpNzb4",
  "key16": "5AbQwyLNBU4n1KQHSHwinJWyLUqJZyYyje9quQrdu4qipUqVyQtMWdritSjP3XNE35rJp431ZnzhaZUJhR7otjJb",
  "key17": "3NDrmQNsAPngbFNffaf4SMv5YFwKbmPAyTunFhzebw3qXSjKnLwGNgX7HF3KB2akupW2TeCSBgtZgN9x5mAex3JB",
  "key18": "4XvZeceoDkoqMYsi2DWEgeyBsELDhCnVKK67jW5msPYNJFuymd3Sn9WmJAWxsFvhMn9VS5MJfRsb5ANuoQhuTfcU",
  "key19": "6617f24p8BfB5xqu1HEBnSCM8zBKpkvckGLFn4D5cVzxhEbUtRz9vXBPE5PL5i5BWL3BLBNMZCCefK36NNoUNULD",
  "key20": "5RRFYxpK6EHLbfGLDfsHgjogs1AFz11DrH3qQKt4vKovB6SU7iUW7CCQtUErNN51xwBM8S2pyrBf67gm9Q2QNXqV",
  "key21": "32jZWXEUeDTLLGLzg9SssVUBbJVEion7uPt6Eh1TzzCBihEDz5muc1bcDFUdUMVaP7d9GmL88t1nRPiN6mq1xBTE",
  "key22": "5NjAL3o1kiG5jfid9ERMzzerVDE4wbyVtxrWKR1Pm1M75XuXKfzAhwaMKzMWB7kHUc8MFxBWDNJ1F12WNaQMQ9xf",
  "key23": "2RMtg2h1QmAvwRHT4iwrB5KskGtxn1uGY3TfyVPaUWVXPvmv9kgJsMhvcDx7asgfKxMTVzspqPTASBrXuHj8dyk8",
  "key24": "3EA6SzEYfdYvAgC3PUk8mbQHohp8iKNfcBT8mjrm34434iBbaDULVZqSDUkm8Nxzw5G599Je71QeMwNYAXJkYErd",
  "key25": "58TDi8QTMBcZkp5KW2NeKFw6a7uGpNrpqJNZaN7nowF4uqZmAhVrBexZQ7cV5j9xKneMy7Y64xmjp3rHn3sBwy3r",
  "key26": "5S4qG7suPdE6Dodc7NEvLUDVGdwywGmQ99WDiyGTTKamczFhzqQbQtA4e2U6ZhrN97zu7pUVeTMeKgfu3MLL8b2V",
  "key27": "3ZUrXGVJkiNB5dboZKmJoLtsXkbyH2wAGGmB2eaDWHthfoc13Ht8LTL51y2g4bHVfAmKJG1DUVCLv4RFB4EP7Cab",
  "key28": "5raWczuuvQsmwbgV6qagbrzFggZnpoE7jNXUKLHkZcXZY9qqRSbPurm5exa6pZA5Tf81RVbZQuEU8XwcqDUePv27"
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
