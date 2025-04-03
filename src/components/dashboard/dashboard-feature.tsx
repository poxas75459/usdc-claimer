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
    "4p9k7WmsvqQupH2Neusy8LXWoPNdEuo5EDq3tiHK5uhg4NbPCTdkJiRz5tUAvyGptYibsvXjAV8Dc5hN6iqPUdVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAVECiSims8vb4QNiy7AEjrHbEkhsbpuzVhwYMhDC7TDQJHPrhscvTTctxV292mVEV553F3o5uNg6txA5GLuaMh",
  "key1": "3grBiayJGex6DogvqsrinshTyPFby3irR6pYEhfgUPY6EFdW5LX9m47uMDU1MqmpxYyhZFU1q6hjhh4uixipWGQK",
  "key2": "44FRunHJcdcB3vEc5ZiX4vPdyeXc3bTGEjmPK4re2H5EUgXmqDYpnecW3QbqEFUCYP4Lkh36vUMVyJLmjZ5YAgFh",
  "key3": "3kR4EvY3ibHc17FLHafMHGvcCKGUzoxbmixGXTw7KEWBZmZZgjmv3R4zAbJerVRZtVjX9wuNtvmUYvEbm9AMT8ys",
  "key4": "2tkd3e8SYq4ccceCUcx3ZXVZGqWhMJrx2eqhkB237rp15jEnFcEqdfYE7RtknUApFTfSL8zXhsnvHqHYZxqDBttb",
  "key5": "2W5U1iKjkoiPr3JSKgm8ssQ4G7K9oS1GXP9QPrLP5c4HZau6KCHoKprohq6712x7NZPHDartrVEZSC1BUnj2XU5Z",
  "key6": "1sDSQomerG5jZergU4aDZ2STyH9vVQJbs1TePLW7aNkNobPmwih5W3xsMzVqdCbTwhyZhJxxofMkxrApmN3pz5E",
  "key7": "31bh8cLw5kamFsRuusBmQrBRhiuLNnWXL92YVo8wad5dZrh5zhi3uKmKGUFG53EcMRNGGkSropF9MqF89GdMQUiN",
  "key8": "YhDhwTvsorFwSihdCEkYjvjeGijjnrgwraAq56VsM5Qnk5N7cov29Ko6HyjKg5jEscJiGzCyMSDHyrWqwxrsKZz",
  "key9": "2GDYUWfMAhZyCwtqbXfR97scsFeNyDpWDqTUwovwmMUq1TvhDZySLZ5yhX3iuEBHRYTaTN6Mt9Nn3SPMaC8Qbjwk",
  "key10": "3Zuq8Cmpj9kXKPxRxVsGvZH9e3xibcFK98124ZHevyS4GSEFstsTXyHtHZbb2VBRUDSY1AcFDzDS5BmUzXdAedNt",
  "key11": "3jM6h9Nb3KTHfEkbhPr7sBhTaRnofmmYUCnf8PTKV39cEzsCciqx6vuuaA7FekE1Y8dtQmJe12ZULt3bErUQitcM",
  "key12": "5WjxznJGVGEpwkoYrka9gXC5Ge4xsC9NMpxMnyHQh88mRtGQjyprp2Lsdd4YDH4VUyxwTpS2Ptmazox8QiQBgE16",
  "key13": "43NaK4qe4hHLNZPBcj5grbGtrJddcS8d4CPFkTwejgtmSpFJmZC2q7skGDrtxsXQ8SoZMMPysqLLPBvk2bDJtEPS",
  "key14": "3ZpBicsnhcVEvfzkwMLNe4DcgTT91hyx8rvzPXU65XRLLBWS4ZMRQoQgA4aS8QsPaxXhgVvbgNsUTXqi9i1SYf1f",
  "key15": "5FTAEx8vZV7go3weLJkqsdCn4QEuB6JzXvqCsbcZT4gG9dh9XtHLb7sB4CrF9oiThuyqLbU3ZkcqUeJmNR196pyC",
  "key16": "2MbPQ6uR3tVHb8ZFAdBNU8DWLivY8Qe9qLn7vZZKkcnTqKYvBTcdRWNp8L1hzM4FirkHnssEtprQAZNzGK1viYK8",
  "key17": "31VMMGBrdUS6gY74bv7r1T1tJihJmgAzhiFD3qozAi2UVnSq4pF3rkhfgMDt2gCFrAV7biLzKrZrbN4duHoSwDcY",
  "key18": "5i94nx55MfivrSZrV4vuxtNELndkSE9zKLYnTGDssjnc3uszDdb7v9Ha78XGSirUbo7vFjqZmDpkYsWh9TW9SqZe",
  "key19": "5UU1hMEzHSi8yysA6zoinkXbQP18uP764y2BkdFHox26w2qhFzhy4VAaPpECsqwNrjSsPYen4hRs9WWEq8uHG3bY",
  "key20": "4oxwE7x8jzjNAihMrYsV46xCkjwcwHPEZ7YwDCC6TegpkYvDQUuAWDYKWRC1QejhknuTrcZmbP8X2sqd6xVr4f13",
  "key21": "5NpD2DZZeHHAnGeh7iG4TGcWiSTQbof7BnZfB19M6pFg93NNBNUaj1Wy5YPntF56qpTJ4eZsiSG1MZTDsPzwLkt2",
  "key22": "5XFmwzPGoFfrsg2fU13JvSPXh3nxNHMFN21RXeDoJ1ijSsjaSBoNdVf4CEWPyY83g6vLqZmFKyuSDviAN1hBr46P",
  "key23": "UPXS5Xnzq4hQtbvjfM8ASSgMt4vbj1mf5qimQavYRSHeYaCeqPK8G5qHPHRZZCeVDVwk96PyFXAG9nr8WTFopEp",
  "key24": "5Tn8KtVx3qtSyKTsz6EBuFvsSGdtqGh2qk2dJ1C1zhxXyvwPFZcUYekF1wV66wva8h8PjvSyVdFFtM7yxP9VBNDN",
  "key25": "5PcxRujGdko9wQvdBbyj5WBW71VRrVUwWKGzJjvYQ5WcSwEWTru6WJcwg1BEM1S67neKadhY9hM4WT9aXFLRhKEc",
  "key26": "5kipmy5aGAefphQcHYzkrzKDgkaioRFwqgG2wXHF67tG1fVdyc9bv9sSgJ7RhnoF1LD8HyTKm4bMFoLVSKp6yYvz",
  "key27": "7j5pwhPp9gNhnDpjAUpX4NH1uTu9maZWPEBNGyNMFUHKSdb7T1tyjVzYgEyxvKRKoMqufVCtUcWHcRgbGmpVnWM",
  "key28": "s9ZkdHkpJwukbphae13FMk6mb9sPZof6ALBSzbp8xCzhwJNb21uubhoyKTUtWyhQZZJjAyye6irZ1jxth1mbuQZ"
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
