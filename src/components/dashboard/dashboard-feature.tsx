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
    "5SCnji5XNfjrHas79joRYtJY91F7sCqg4saruzZSc2BBt1g9McrXU4YF31oWBZXusQtetFRrEUkRY4FS97XmyDb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27nxNjbHMF8PynE9oCmWkKpecKj6xR6H7Qqz47PxNciy7Jmjv2mB7nmgtRQsr9CfGM8YNgsQmQPndwCqoTkE9BME",
  "key1": "52FzEjFUo2ALYmckX7U3WDLajFjBSWWhmVUGD7b1CHkbN9EEcgtCa6a4Ju97m7ZRoiZFSBR5BLgfgV59rsk2zr8N",
  "key2": "5h3nst7YxLf3LpJF8QmH5vwAJuBQ4SfNGGyjuKDdYf4jfaFycyvskVm7yjGHHvtG3GRz7hxZe3cmzPjVMiEhLfHY",
  "key3": "GCuiExwC4pgw518WnE9anxJHAdMNEka2AGpU4H9HGBU87bXrtsyNSwDoWw4xBc6Ro18FnrM1tvLVHe6jHn52QCS",
  "key4": "2r5bMvqXYqK3C6tNNBwxAsXpPc5rUirtzC9NxAaygxDB1upk4YXE5Fh2gm6U8zWrmLif8ockWX2y8bEuTSSzpZaw",
  "key5": "2rw2kSV5mLejpeyvAGVBX4U8cDp9DaAT8GqJ6dxbd9gS3Awjtr1QbeE8fHYacLzhBB7hAmQa6cMcuvTEmeWL3CTA",
  "key6": "35Ezsd5JLeD37L6MV6rdmHZBzM7vLdoC79EpQ1LBbkCzSZJueStaBZ2AmQ2JsTauLyCyKQd7k9kxB7uAg3Xmkdo6",
  "key7": "7CEcbum5G1aBxBaMEcCgAtTeq9f9aX4UTLyxbFXKN6BycTc8MRCkQZikPkjmnfcxFvMztWy67DyAVMsa65jndAV",
  "key8": "4WUeer7vEkU83o7EN4g2xxfohCF8wyYmqVYZoHhKKvr4kKUJqTh2hjFVcxELpD9fA6su23Qc63ZQ4nARKLNmpHZ8",
  "key9": "2aUxeYSGFnbfyspCR8judKP33fnZs24XcJN58jjZsEtmbY4z4a3dCWriUWJMgPzwSMJztt28ZrdW6mzUpfAQaCM5",
  "key10": "4LocKpLSnCyxdapu9F4jUz7sB8aupUb1v1p5Wu8gsDfVxvjZDZKCAsUDjB5TjG6RejPPZcJMAGDZ1epG7Mt3zsat",
  "key11": "3FYfYwiz6XyRGUJf8gBoA2Rk3sVsBDEKVaYCzjwBS8YGpzS9xDTAWeB3fdySEEosWkTbLsSLPkzDH3yL3bpr18V7",
  "key12": "1s3g7jfS8U4Y7cm3p4EFGvQf9Vj7jPGDuaRvwnB8DMco2WdcTx3CCTKmcVek8P4f5mCPWBXmW9h9jjrkfRmDvAX",
  "key13": "5MqSZiEYfrtm3obGyY1TjDMQqCaCPgbnC8KmuEXtefxijBKJ959nnUwbkggCE2QqBJ6YwKDkbzTJrQkcSbABdQVy",
  "key14": "4kZmpKsRBJSDU1eFqrigMTtkaxkqpZ5kEXAs6nRamorvguXsCYpF6uYw1t5AUdqAq2gtgSMjhyhkYpNoqqkD1FHe",
  "key15": "4998rwKsS6RL4HJD8JQub2QfHE1bYoSPtPoA41o3jWE4ft11MQKvze4ZL4G66dyNMXftgQ6VEL167sY16JsqxsAK",
  "key16": "5BTahUaHGGfJ55THEXxkG5rkGqwQy6cEqTtjjRBumeGhN2eaZTEcvQp4djhFoUDVPXYcvu6pxUXeA9QqHfcwJcRb",
  "key17": "3Tfj2qgN5RZDQ6ttjBpD5GUALvvL4ZjqVehM6WLtrYsfv3jCmvFjaPaq67YBYzAqU1XMywBKyzMVHXGtfhKtEp7B",
  "key18": "2qextLY54W2LgzAmDTRMafaQfAd5enoSccj9NTHBkCWrYuwQGYQu5X8bXYjb9Qm4eFT91KvLzTbbZT71ven7Qgc1",
  "key19": "3o66EwdXGJVoN2NmaRnz3TVvKzzbwSDnhj64D3V9wF4xztqqnSBbJFAy4C2xtmMtxhsgubhUgb6UayhGZW7f8D1r",
  "key20": "2yhNNzUKGtj8XCNJ6WiNVPCy5nDoPzoHJQcVnjDWDqH6QdpXcs5oF1fiLxpTkxE69GAwyBKXNPpehPepXuAr2zbV",
  "key21": "5nMk77JxmVNS5A2RoAuYnfZcE6P74Wqd1fEaT6TnG7SrRFUkneMYs3o2PS9L1xoEFcypVXBkvnR8y37sn69K7Pia",
  "key22": "2iBhvFmhLvhbVhTMv9Qu7RL8Ke9H4UazNfFCC2NkWQXZbt2KF9vg7wATuc2f8xgbXGZw93sq94E3ZmT7FUvGQ39f",
  "key23": "52zKa5HXtS2Ey6SWNVL3xrsVzd6wcVyFcbeUmjqV23umMh18AsNKzs5ficG1GNizzA99Mz8LrxpCGLZrH5DLd2Uz",
  "key24": "4TPkoAXp4m9p4pTSz2qJohmRW3AGTq1H62WebxLBp8H4fn88NbkS1JubVoD1qbaBcxW4s6cg2Tvqypg5amKkb8uk"
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
