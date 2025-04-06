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
    "2b3MP4XL4gqRVc9mmnhznqxddN8kQk5rwUCPhGF9vgh9w4469pPAQa2A3dj47ogxUSAptx6zt49YM26Uap7jKw36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fiQGaK2T6pUr7qu3N2E55b3ZTsJLBTZArBMo1pjaHxeqr2vHi3d5kqMaS6hwWqLPdinR9GKgefmfKGGgWAXxKi6",
  "key1": "2sX7edaGVvcwArYvBgdko1YdvJdCyWXALK851bGksXKqUyTPuMamhKAMDeZGL7Q8Qt274DxaF5aPcNr18rhpb5dq",
  "key2": "RAbucy8k4sNB1iUyqTmTSnBHeNCwZ2zf4gETjjaqLuHy5tjhJ8soGjqUcp9ys48TV66ck5zFFgSDufLeD58KwbC",
  "key3": "3bvxzWGJVE1Kf9ak21UZA1jkZP1KN9g58ASQkdwAWEvaAbPomQxDHCo21yrRmvq55P8nxUCskgWQqf3ttKNT8ikv",
  "key4": "3WAx1r3iSFahSDaeaFFCik4iPZcjqGEDKnXiP1PStSWB8TFgq84WapkJJdeoQndwysYQtTCfoyYpUtrsFvDtmRp4",
  "key5": "4fkXwCP9vHYucvtb4gyFcDK7DN6PepL8qF7v3hZu4H4c797juiKe15kcj1XYNGPyeGVpevZsbZVdZwM1YwzncWZf",
  "key6": "V9PoJNTudSgwvn9qhkRg1Suf3Lz1xJ9K4FXkSXJ1QCWBLUogfA5guiRCZwtwtqaUsStsZTofBrUEuGQdy28h5nB",
  "key7": "4qAZhoVgA1eScJ6h7dDkqDP74wpdAyod3xHfGKMrRdSnM73eZEdRe5WHwJAGSfi7T6khEue9TsHDJMv7jeo5PNRE",
  "key8": "3R3bDMXCtiDbR5Xy727aoJzZ1rix2gPHnhWgqMWUAtWpaZx7vANgNhzKbwjNdzYGRjevUFCgkHpceMgMEcx9b6wo",
  "key9": "3cWVba5waNEXjyx3tHW8oojFQYrfHTG7JfjE88o4ipHyzc7KzJitkXRfGQK1tVJDeiB63dGxVyp4sRiQiz4jmMX7",
  "key10": "Yw4YJ14f81CgWURevsmvPEkJPghFY68LCqPa3g5GEckZByhXVrwAH9dptaesYFjwv6AEHxp4jZc4ezNEh7fZ1Ue",
  "key11": "3rM8hAqKW5N142jPNq4s1j6AznU8Uv8W3tiVxzpXUPMUaugeNv4hwW4YR4vw3doZFF9DppWYWF6L3acykmUWL5k1",
  "key12": "4HunR439LaXZrjJ6HUtM896jYbXmTs35JKz8DWhFrLBnaD2p46SCmJNrEYjdGxoQ4ojqV5LE9AbjEc6jVK4Zn3JU",
  "key13": "3s8RFmWfU1w9dzcjh76jpgmKWjTF5aixavYzWd3ng5YybaG5D1uxPHwBCBHGVUqPPgCmo65TXc3jPY44d7VwQ7Zg",
  "key14": "5Z8GxeCic7rJsahq45PZRcopt9CCr42NWz3LGp8LRJwAnSfU2BaaUmDyKcxNqf4dFCG2AoPgt9JpEvCXZDirWhfK",
  "key15": "3sgviohoEy46uw1XhaHEgEmcouB3SxigPEcfXiTwcCJZk2pwZ6guH7QwYVR9jP7W7gs2Zj3oHKeToxU4qNbiNZUr",
  "key16": "5XR2Hi7UniWkRMK6L6DxRsJ7LUZLRQmKw88BxyGHNB8pMLoHu3eHvhfyNk7k8M4vU1USU7gtpBwgF3Poyvd2pccE",
  "key17": "3ASLa7i69Q7uKXxo2Hxc5DwwqnepBmaQNsUnNefbVgs6rbzibPSE9kRoDd6RnSrdTi9YEdyWRrnz7Bayq7e89t1X",
  "key18": "2ScVX4GSXhtaLsPb6pH1Xi1E4MeoR1pf2qR2QKqVLGFJJhmZM4JEi6prNERYec9wyxh2yAUfDaDH7r3TYYMGxvjE",
  "key19": "2g5Q8dhZ748W8q67uhonVs5vzXgsvAsopTcxdydqKnzaEt1AV5Kr7iutHuX6kT8jFxhi7eWLNzBGwwRue7YJ8Dzx",
  "key20": "3V1VezgQG51WSQq2AnaxUoHGGkc2DAESjrnWpZFxJN5ydQzkjkWY1RxbmvGCwEaPWFPZbHFhnPp3wgP7VbpUhMLm",
  "key21": "5vGtnskWnLiasor5P7wxU1Hj99pcb1q82WXERWiXihV1gQsgTLSQLK7eVSJBdqjvYUCttbkzfCqefXYgfV4LWjVv",
  "key22": "3qd2xp4DWz6mjAvDkJPSYxBNzvsbG1WhCeVi2mWukuBSJg1VDp6MydiCouZgdCCy6md2QjqYJYH1zd2474Q75pxh",
  "key23": "Lipt8XfwcBupjr1mzbd3XMeB7sqa3jG9N5sbSoyLrTHS4UF79FFYFfQgpLxobjvnsh9gzh9yggyJa2ic2kTh4H3",
  "key24": "2hExUNgxocnUdHjVff8kNR8qYjYLWoHBkyoeEiWFjyhFcSCgbmwF4fiJGHGyAkHH5WYgcciLtNrY6JDJvZvHZd1v",
  "key25": "3d5fnGsniKZ4L15eQuuiGnRRZzYTX9QEPS31URz5xfYb5KtMMtkTyYDktaCni7UiukWqPc614PEV7LPJ2xQi7qRD",
  "key26": "2omkqwmgH9S36xhmXdXJRnU1DvPZhcce93UcrdG47KCp32gqb3o4MkEfrdy7un3Wbha3yV4ponhQsrk9W7EgkSrQ",
  "key27": "5VYUrmNafUueDoBvyYicE9A8LhgYDzi82PrMk1fSPt7LdqbDMknf4LShL18ahkVKq7LLaSPtruhKBvz784NJR2km"
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
