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
    "cvozKjJ93sApmTjo35bMCrHWqShqtrj4jMFx4CJNNSYxKfDb4yxU27Sni27MfjqQoUCGoLDngez9651kYMo9ayA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7hm1QLq3PHoSc2Gi8kpromvrsTHiZUXMMboHGaHQucH5k1tj8KUjjZHZnCYc14kSGkvr2e7hxCYyVaPL3iGBZ75",
  "key1": "2MN51AKPQq6sYMBs95BRbXuT3eCSF5xYQAbcsMcRCifjg66qmpzcQqVHcz2MDMReB1fFMWoGrio9XhvkwuQ6zrZZ",
  "key2": "56cfpPFQh4W4traLxwNwKdsfUVf7TkSAfrEPEe2dQmw7o7e8GhgQ8rcyeWip7Ar2kFfgAWPnXLW2iWq7FZVyFvFF",
  "key3": "A8EVRCuoJYcv8wgg3SXhv1GCZ21UBPcp7RumFGmwW4iaZbFJADvxoT3XjSfH1X2efaVGbzXArSQoM6S3k8XeUxN",
  "key4": "QAYRiYrdQYy9LuShjRa5DBSDJ3azRXHZQy4Ebafr1oWNgUjnWVrcM1G8nBPyGpwFhmpPJsoCuhfRWjxZMH3ZxBP",
  "key5": "QcW2EErf2XK8dWtJcrSdLs3FxePkb4Nmt4NmPqryLbLoq6zgpFYbQ7zBfANi1i1xxxk8E3tZjW96rqQaxDaCCUP",
  "key6": "5B7J3MJy7BxWXyQFAo8HVfGH9VJ7yyBvsaWZhLv6mJhPGDa1QpgJHCUKTf2VpddecnTCvki9r3gYZXFDbdkQHAok",
  "key7": "59ZTzZTRQhtxGMEMmqhZUkev8HmaHjaMNGCmE6ny6bZ8CLWUFSwqg1RJYC8M4Rm639FW1fDo9bDS9suZ835p7m6t",
  "key8": "3B5HABH1UMdLvAdvNrJ9iV7QmR8m1XkHx6bwRNaUSd5s5RBcquCYb68a9rj6dmSgXusi86DG7NPLxRcuYd28WJyD",
  "key9": "5Dz98jLoMoxjNB3ypYH55aMRPaHggQ1Vvbtcc5JBZniNoZRwuX8C6hxUBqWUoijNjB4vQJTHAW7RjcEFffvMunVY",
  "key10": "JdVyNEXZNV2WDdinccJzwSTNKqQ8NVuBkPG5XrhfhThuWCHarT2WyFMqjL7rJATHyGoHC29FwRWPMhcxf89Ne1d",
  "key11": "261j1eS4gJy6CbseF7Uou7xdjvmsZLiTZmjsoTzWzwZCME3zamBj1edaT8w8xbnc3WGxqyGEB21Tvy7tNtmprdvy",
  "key12": "37oa1tZtStHWnyFLsk664qBAgqxhwWQSf5WXtg61zy2WQ5XVuv1XU4GFyyXMeJfE2wmaU4GQ6WrDbYZapAgbR477",
  "key13": "21JyW6oFogCqFA5CEW8dgRTEarjoCYavpZJNKfMrjtEvc8LhKPhBBwghKHen89bW2UEMV3z8tWUGbc4nGcqysLqW",
  "key14": "ESH3t2ddVBcrZwyhJQaJT7Q6rekfzTf4okwzG5LQ4oPJMwHqsr8Siv98PCvRVScJ1aEg7FR8K8fAuakGC8bZYNq",
  "key15": "4vW37P8WvQE8xaMatT8iVJfmX4gQ1NheWMaoyDQ5TspZNNikH1xUTbEtasBW6PxGc9rH3ryoZrV6GK1THZcpNGHN",
  "key16": "62BComo17whfiL7Mhzn1DLfnDNtwegNVrqJZxDv4RzGMNjDRquwemwafXgaVcAsf3A89XAiMRf2VcjiqzzvNDtmV",
  "key17": "36tCJRdtM7V6vEwfe8mkXRFZcVPGiob6gfY3wSghFbwgxZtDYg9zk6AbRyoEy2kY3MFhpKosPj2bUFSDBoC4a3g",
  "key18": "3RkqfnAuNFKhFPHiwJcjTS8Eq6RfLWSi2fpRJ69xqnNWvzkhCZv2ryC9iLeCdfAi8V658Mw4t9Dyxukrx1KVw1Ck",
  "key19": "WWE8da8VTxpQF5qpvS84dhmbcXyCNkwQCcdVNCrEjkWApbYEAqK2mmXQ6xQT4Wc6NSkzQePrR8BX4LvyxxmwuYA",
  "key20": "5Xx1vpZg4iqMkWADs9sECxVkxy7Jb7Sn6jfUzZkBXi6xy2BfZqrYpNg45zZFBv1F3xgNpZ7Yg7Ef6qS8ngZcmpAb",
  "key21": "2x6XHWefpviM5r5qoiGprmrESfgG1Fgj9VWFaDwaCnMYxgDW2gFABmXeyA1NDocBsmtvg5Jq9mcktzcGWt19FrJZ",
  "key22": "zYfKnVhWLEQcdt68yAuRgkouWzecfyvd8h4yD1rzQSYX8bErt4EiecDeQ9shcAHVRBdL7TyjiiTBmnz5Ar5YyH5",
  "key23": "zhVB3pDMAYNHGozuRZuoArZEovX5TbbAgbdvakCZkdH8vHHnXwKLTqRFz7NsE1uqXW6eudchqfocsBCyLdUYSvK",
  "key24": "4Kh9GL5d8gTeiz5DJdijpbLfiedJvZKe9nVoTvBiZrmaUj3NSLnj5m9Zs7LiYEXcKuf2NAeKFYhcoxuzpP2iiaQY",
  "key25": "3fL2x89T9XGy74BfSsc971VYkqCZqexQnyZEBWnGcUF1vnsXsktbwtaevjdSfc8T2vEajVohkjHWeaWKSV182Xcm",
  "key26": "3fGb62VrXhTuMcMBKE1Qcb64pYx1pTRHB5CqRbsWKdt1jWnTLjrxhS6rtfn79dvJnDXCTxPYsbmHveEDhhjFzkkV",
  "key27": "4VykCeLQtjAcdfPgonYF11Xoa6WUv53BNG1kG89rKiCZRK6jcTEtTNvWBKoFWtr72yfXZ3ouoEKHyQVakP2TWR6j",
  "key28": "Ji9hLjtR7xhvZU761NRcQZM1qkoVRrCdzscyAUJoA82NAwGviVjBkBqSobvpmy9kxUw6MwEZmDZabWiwMEBSTwh",
  "key29": "2VzGFonsjGLN5F8V5uk59jiGVhN3EYzvLQcPwfTQGqhoCt7LC6QpNARekGGgtbePEWeq8aDFtuqy14EJpe9j1swv",
  "key30": "47Ridbf1Kk3VLcqjW7hntBMfLuAYfrD7jEqk7vhBa65HVHjA24AEGsPGUZhoeUspYUKCx9wDbtWSxZ95muZ1SGVv",
  "key31": "2GFuZHiMCEmEdm8mAwqPSdp8nvLJhkcXMo2gAPqRYQX4FwQ7qoaXdoB6JkgyrbHKQjqvhzvHXH294cp6PJRLuAQJ",
  "key32": "5cEpQeFVLADLbwMQMho9GJzg9HjiLYK3mhf1U4DyncDZC7npcgcyyYEe49Hkbc53KbnLVXPoi5SEJYQTLn7qyo4E",
  "key33": "Nku9YHrpSgCncAUguGcLKHNPUnPVz2kGcSaZpwZDZGiUXCvUhb9dGs2Q574whwkTHUzKkTH1Tz7Uod6wBWkVpt7",
  "key34": "2ZrQUDjBUeVDsyVuMYoH9HauLr9XRsZjQvhCCJKKhA2c4SVdgqQdVrMUkVATaRqTM54o8zSweeMpZj3g7GBfP5Yr"
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
