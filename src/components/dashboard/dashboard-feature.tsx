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
    "3GqoZGEPUmFPjQgKBqkHoMo2pyHDymYVpJmvbUNjUdn8M2fKuBN9n3hBotspKhvPWHw6JubzGmAByGoYPJwP5uvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QAsK6ZfFsmqx2s1diAdJD6WAAeDnTsiQ1r9nLSYn9a9iisJvDjkaFSuc82dNS6FvZLKspt7dG2SxDYWBDsCBqfs",
  "key1": "3PmZpFv4mqpeHPYyCvrVXeXMkL9LSyXdiF9SLCSNiSG6h9WuX3yqny2Joa3RgVn2zw9KhtKfKpiiS6oo94c1cmoo",
  "key2": "3a5FjPPV45BPq6jiLe8A5zr15JSeFGbD86JGxizDXWn5yxGVc2ePdZMXmpmp39oE79MnnKJuH697RzbBrB2JkqKj",
  "key3": "aKXizjAQcH6rAa8VbWzAaoNMmNBYjXrVuw2wjunEAAJMMi9mEXD5Bfeqj57usyWTGt1XX8uKA4sPNtNN5X5Nkgt",
  "key4": "4Hn6QiSQfyvRQvqP7tsLUevQ1WhHewEh9HvLYrfAQs8SBXxvhC4Jf9RWYbhCtvuxt9Z1iFWTmEZtCoPggXbDrLEb",
  "key5": "2FoVmon9DgoPpZvqExEQhARA32K1J2kzFcmEPPBroQum13XpruJGJxBwiHQ1zKGP3Z6K1MXHKBTG8VHKQwMXyW93",
  "key6": "5WtrB7twF2Q3V1ZZKf1EEwo5rc4fK93DA5uawdb3PrT7VrmK913RBu9aM62esPxmWSffH6vBfAJKZzDg7mU1XGP4",
  "key7": "4i9dkMjy9Fo5hzqKnDvxtij82tBw97if5eJEE2vQ2DvU3rFFB87eEvoQVK8YnjFbUGVHZnzc4RC8KUnhNWKUE2pD",
  "key8": "2pWDif867PMmRs5m1YsByc52aDkMAB4DTP3CEHebXCG7GbvHKGXyYajzauyfaCNJXXK9e7Ad2imcFN1csbdWffmE",
  "key9": "37GNFsDsWiUxKmVGDQAZ6pw412TczYDZqtk83fALo3u6Afijh4AuWZXpC4RQE1MWk8TD4gLZX6WXbnNAGYyedCcP",
  "key10": "4ES3QjwXkhMxDk7UHEd1bJfWFCu1YvE9pa89PTgASqCffBFzrsympeVe4cTHDna3oURYB5UwDWs17Y6TwCMm2F1W",
  "key11": "5TfusPVBXEN1s15bP4N2t91JdMnkgah7L6aKpNz1bBiV8iRMfiVxofbGFisSZv3Fta4ja9NfuKwjPPRbafPDyasp",
  "key12": "3UAksTNVmHKxstQ6DbGzmAtFYpRxyZCr3ehTGEWEUpYD3YM3gdoY2TN8rhwZmJoxWg96FNk8uzWuxPP2hkcphtVq",
  "key13": "3jucd4WRihsj8ZkzqJYxkTsTRdQnMf3QMpsJz3kiJsh8GzcqpKrd3ejPXvcupas2pbj28UDEo2G68T6NTtVVE1CD",
  "key14": "3g4unqMTYg8aFfTdvBKqVu9aJ5utjwkV3uUR3kwLSicoCW3WRp8Xh8JLvRivqKrprPxPkvPKDQHd5knqKK9zHZgP",
  "key15": "2HeRqNRzvmw5UK3Eoa2PCW6KAjeHYY3R2rFg1buMAUbtASkB1UoWSJ2aCMfVWuDDL3ZebZjrv7dyroHXHP3QQRt6",
  "key16": "44KwtqrPsx6jUXodGXj2Uc5s6kNhdhtuKD2R4ncWFpHirLWQbm9ZVoCc3ah7EQ4Qjazwx55GY5oZRgG22EvJgMxS",
  "key17": "2bWL2cBcJJgNChZkDCcBvkdBdpPVzFrLdTTNu1DDqG5WiCciczyoSoT18xaaqfUJPfUupask7JVorPzgriipNpyV",
  "key18": "2igva2dGoHHRWH4wyMNhry4f5BMaf5Uk2pbVsvuP3AmBsFAcBXLY4dYvHBvLMd5AzKaVWXKA8ct1nqkFVmpZzeoi",
  "key19": "5SGXGKRitjuB2kTd4scDU7oGmy1S8XMjbVXv22s6DGBHzmLvDNJWmApNXfvA6JZJso1ewFA6B5338yNbxoFEZNP4",
  "key20": "4cqED1y8vwY19gPSQ98nNCKEsz9DFsWiRZz2h84NtdERmEnqkCpNCC29FWGC5gpvL2S5ncpk9MrqUJoZBayKPctG",
  "key21": "2ECvDBuXWZMPMv6mH5GULzCKdf2GjxbUKzfNPsxocraoEuwZn43JpaJEh2ZC2EFwabRwyUf9pamPkChXW7s8rDBZ",
  "key22": "4S5zh6ifinLMjNW8nZVwgboaVHeggL2CN6riYVC8K9ExEj8DQcLKKvHQRHr2HTAr3tZdyroKhmEaULKJVhgzUFQN",
  "key23": "3aHziTLiL8KFTnSHTWqqZ9LFF38MVKLPvEYfaeFFno3tJwwjrBP42hRuF9C6BLFKVFh2RBNJhy6prDMoQWyS6dSx",
  "key24": "241jaQckd7tdJwMPdQGCbFeCYMfBT13ZQoZ5APVYQYvRJ4RLHgF7anjgv1sK3FDUM4xXq4LJw3n5rN24zsY3LR5j",
  "key25": "5q5gBpyAkXN1NnQUH2jTv7pcAax6Aw4skU1WyezvS9LJBH57MiPCqhwAWyG4r3z9JH3Xt1cwE13SR2nnpbMbTMKx",
  "key26": "3VgiuipQBY9E7vGXcxa1LvzS7JAbEf2dcyd5WHX5FiVn2az5Ynbx73zJaqdycYR2t8PSpVF3CMSuP9VGVxuchh2H",
  "key27": "5yAJNJ5kB9LgYrvAeGnvQ9MRLf3HwYwP6esjHiasULfmT71UCmDf1CQwooHVbHiTZtXf56CHgmcRqgUGHrZmA5fC",
  "key28": "KFw1SC8xSQDz86Hp4mdewNWMULGsywoV3CWeTm8Mk6ox6JbvrsT9AENkNQU2K37TrjkJeUvRw9AT66f3dfPB2te",
  "key29": "2QYP7uRBzdVe9d3fq3zk1Nw4u7nn7kyooVLJr9qeVUJXXTN1WRLxbwC8N4hpRpwbUfKQ2kKrRR2F6S1PhFWAe8k5",
  "key30": "XFnRpo5BJM6iF4bEwH1JG7o6WoCAbKgnsiao5Js386An1mN5BJjNcN7BYXPsy8t7EvD7wpzxYGXfXs7oPXaaxu2",
  "key31": "2zLPHQ4cinJbUbW2FfC1LuzXoo8hPummeAoEKY736RBm6GHerUfPk4paKZaFag3pVjDSHcFVy2W55Y4kZLVGaLbu",
  "key32": "4fU4FmrKwCkNdSSR6ipbSacvbEp9JVk6frWpaxTaSat4xQQwiHW1cKHkr84EFtcupspZJY4tQsNmXL5Dup5egAEi",
  "key33": "PKaFCz24W4a9Uco5gSYfZUM6Swato6QBCybbfinvRkPyiRwUb2WmrrntJGeRexBoEzqcfHmRgur4p9u3AXKHwf6",
  "key34": "Xf2p9ieS51WVSaT8VvYQyxfJVYMM8BByirzaK96HKqJ1Gq58U9nr6UxyXtqdRSEKiVVG7drKf4uoatPq8kWRRZZ",
  "key35": "2oBuGtqzj6RLsUScosCgs4Xv83wy59dzCDiXZLSEK2jwHeCNqv3F9KUyzt2eUVc2NHLUC9xrDbxPcSwNsh7V4Mmd",
  "key36": "wZQNLRbnzsFKC3KBXmZn6zfkiKgQV4CR2T5rUqPFFggFoujkusYyEFWv5ZVHHJ4gqVL2wmDKUiXeY1ouPJhnaeH",
  "key37": "2qvuR4HSybkKKqP8qkW4sMwKJxFbXZAJeRPpjEtHtmqjmxBHpj6gjbUvR1V4L2UpfYaYvnrpgMQ1sjg8t9w2VXqo",
  "key38": "3e2TSxWi2JUSZzKGhpTH2vkPPpzRw6PKazyLtwox17vFZWqQSgrG4USQXPH6k4DhUnMqsFhmfVFVGvGTADAH3zrX",
  "key39": "4DB5f8ywFifv89d1z61i8SKgNn5ipobgsBY8rp27ixUsNVbjw69ob3esVNjU62FrgoUJY51e6KMx4HtdjyQGy8BY",
  "key40": "Xj3s7KP4vrnSjhohBpmK4zG96CZ7iJPMQGVRMYNGSz4XgeNgCC9Uk7g8jzcKamK9exjg65aEWG35gA4msBk5zYU",
  "key41": "5eXQhPodukbSbN1Y47sTfNtnCUmhoXiGKYbiJZEY3dy9tsF4aZDR4pqUgW9uu6p8QEXH3LavERABD5GLad12eMXx",
  "key42": "4mkwdW3KsUro9MrddHZar1CagbzXw6XBi67vaDSemesTHJbeLAPttFrFHaFko5h7SuWa6fZwpAEBZWZw1iPr7N5R",
  "key43": "36xqcxw6Wc2dHzkxkENpM5s9soSgWY56mCvwJKZQx2EZDPapdfKjn9LNJGvBJBaZuJ9W9oDdGpb32BYnLpZFZ7T9",
  "key44": "4AUiVKzUQvoHL5KALfpyo2w8AByGJf3kemHywbbsFhzQrytcf57A9QDV4XXLxVWCbS1bQNuJ513XhMhdRpaXuJRr",
  "key45": "3VVnxQzd8bng4wNj3Ad46fHydPUQU7JkaG8yaZoyHPbt3LneJANFommmaeQF9fFiPPHnUBp618SiCUEArnumrmLq",
  "key46": "4aLk1YWgGvxEvcaUKW4CUfFaqVj4z6bUbfS7PU5tujENXcbDwfaS8HW2yAisFMu8eAD3FMRiJDfaia1K4JN9Tnoy",
  "key47": "fjry3nKfwTUnGbgnJVSxu3ehbJzk4FwBC2riRQbtaw4grL1oEeXkVtNXFSkWV79Uo8jA9t9STJomRY6sBio1EvZ",
  "key48": "oczLWhsz5k3ydDiWgEMS5dGuVtCMkpAae3hGiYk6d4QiTyC984q7LtfekNeoWbvvP6oV8V9xLBKzUduCRAHV57b",
  "key49": "63xG3cV72FCS7KWfX3TkkBRJHSPf5tFLanEfxLrSo7XtQLi7365q143e5gsVTRYChmTU1GLk4KrsAcwJbhQp8tSn"
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
