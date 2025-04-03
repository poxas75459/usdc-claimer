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
    "5x7uhsqsk3KM2ZtbK635pBC2LvbT1Gf1cpbzbdfVeS4sfej4ji3X6hfVX28aYJizgjsAmD28BzzivHqrupypUb3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5A1xxBqmwxwK46a5DY5kemHnsxkS5FrtGFhZct8GM3aCtUdmvcuCT2LeMrpkcfsDvJcBY2hFzRNv9iJQThTRyf",
  "key1": "2ch7rSNziCVEcDney8KAHGACPoUuxiFEtoQoky12f8dLRPLLj7dm1Y2YzXVRUDZrk6psuqjRnA6rsGG67kRx74WC",
  "key2": "5hQ4KJfuvBEqjrCVWxQmM1qXqFAJKAwebQo75sw7jqQU8YsTo5bqcSfaiMD2BqGiJqpv7KCXxFYZpjj8bWvtUbHX",
  "key3": "4PaqAWrksFTS2uSamQXbnYviB3AvcPoKxmoTs49hNsLAJFJnDcsJagTSCD9skFgwcYJQ3j2LzbU1LGQukW6w7RBe",
  "key4": "5NTGpDHjprJGV42akYKdwmhN3TZ6cRY6VroaBVTDcEbNtuqAPLhyDVrTqdYjU2v1wCcg4DUE89AWmWur2s5NNnAJ",
  "key5": "4Bo6A9hZo9V5NTUNfCAjy79vG1mkHP64vU4qmNgMRWoguKuqoQKwByyy1fSvZFCwEwm1wDDc27xYz6LkTLJd4iXZ",
  "key6": "612VJAuofcm5z1TCbvb179P8ywz7uJCLoJpptoouDqVcgmPzps6st4SV7yxvSkNfgC1cnN9nqtdfRYokY7QESBdE",
  "key7": "t6LWWuQnTmPVsrSFYUrt4vpBftfRdBZX69VasNV2BPKNZx9uW84TZS8ydHuKHdjwALxLPADA28ooJfXptZDijoQ",
  "key8": "4pBX3nGhDtzrRcnEEVk3owiVXmd8XtKTvTkm88suYhnYhErBxZpwQeYWoKxiqKymMdXiaWq6VkEeUR5ZLjtJo9Z1",
  "key9": "LJYCpziWpRqvNtLD7QnBLvwprPnyzBFJHqZC1Dt5nENAzjv8zxQQApcg5eBga9tHZMzU28JADMHfByrJUuMZNbC",
  "key10": "qibWExzuCAs7smrNZXZmr4rsKTywt36zGTF6rSgjRuxy4AR4Q8NmqPAhHuV7QSAgqeQ9bsmteUmw8At5d8vxY95",
  "key11": "4Wfx3fLe9wBvC19A1qUrgprqj3DVf8v24LhAE7oJ7k2MjVkj8YcskkQnxhZUhsShmwD8XvtHt6ckmRc9w5dNeiUF",
  "key12": "4XRv4DD9poHQ4JYky8EeQYD3UaCgME5EKWBgs1qeLNtn4o64akQeYq4Y2quWHhAzwbLfQxKn9V7mE1eNDoARYtrk",
  "key13": "41sGUa3dmDsWaZBivkuwysDrAcNBYEEa3MRVRSj1mcMNz8akkt2MvwoyEL6iJKDrFdwgGQbnzu2FjtFXMkht2Soc",
  "key14": "2eXUzugYYf9dRKhaidor35AJ5iuHz6L7jz9DyM6NRpNuJDkihbukLrsBsHqrxFzQqmg4Qx3cNqPPKcXDTWq3tKdt",
  "key15": "ZwkdDZKTwHpFjWgB4EWAUSPGXQQwr9BQCdGWQkDdRkVZ55ikMgKW7dMYkhWTT1npzTtCwC9QRBtB6Ev4HJ54h8n",
  "key16": "2YnFh8K3aJygBWB6TX9bBvthCdqqckrJSMWqeLE2FRiwsEaVTqjYjMuY6qeghcpBU5TMZCiX3ARDXVaDCdGdNGY",
  "key17": "3uNvUqcanmLQ3shZoxoY5w5afKKwcsg1D9fRSgxdFw6LxBikWMLc9KuW7cXNUvuaUu46Yod3pw8goeK4BKXkB6Ec",
  "key18": "2pFZox5D6jGsD9Q9euDxVKvU3aHmqn61w7ySd8XH5rwc2sTj52PbVeFiNjpWFTGmKk8o6SzZf48qvz6BQpx1p8NQ",
  "key19": "37PzLVHz1vGR16JdwJ34YKkaw7TZa34cg4KbYMQcqTXFbN4QK7qwKqZgC3uuuvAMeaWHw5TTDHCr3UgKZuY156BE",
  "key20": "26AvYvQhi3z5SwBJUkoTdmNNfJQFqEo9XhdU5Q6QKEu76yCDZfKp6oCzUGC8JFshX7ouS6efQsnbfFYtjaZ1SPbi",
  "key21": "4GhdAw66342Af4hNbGrbYrnes8F1kLSZp9kMVQ1VkNgehoqXB2mrQ1DdkX98BDUrZpFKyLqbcwRr6ME2iNezU4FX",
  "key22": "3cuwkUdgELvZ1zd86RxWJD1dmWvwyPas9wESx7J8XQURBwqdUCw33zf1TgaFKADrcuMjBvJHD76rnQNTytcNcus1",
  "key23": "3Qg431gfiH4mdFMBNqcWvmFozsLwMRDPpJYSCXL6RxGPa18wwbu2SkFRjg13nMs6QoW3D7LiXAuZEfAmWqQMFc7q",
  "key24": "4eea9DsYurQ5WYchs1u1PpHwDSSdKfu1X2cjKVNMsRCXdTrBjk2TM8Mg2HebGTk7KCjLkWwqYz7GpizJhhjNi4Pp",
  "key25": "3BbZh7Ks8tpE6DGftzsxgCYuAgEH2uYhd6HF6AJNG7F3BkchPBGwNEeJCQw7ubjzJva4rzBFx3AKjGoj8gwL4eAJ",
  "key26": "22mRV9SNBoUnDkQbubDAhJE2hwfV7RAfaD34dPSnrXoiqivTWFEX493CWJS36y1pQa2541R3C9eRcnaMzc5kBago",
  "key27": "3qcyo8jKS9eGAxjBYwwm2KmnwELdce6p8gUyiG5jJ7ZGeHoYET4tqKtchMPARQtGqnf6uEaxTzMwxrB2xbe4pcep",
  "key28": "53J8A3aLXGau1xruwJbaamYpZwNt8XvasjM3zQgHujHeuc7wvzAD8H58gYzyuAphqFYh5jwvmJiWS2A1foFxhUHc",
  "key29": "5cVMbiRCgCVz3cMdYGGtEXynuAfe2GUtB5zYwFyiWt1X5JDwuHDq1k9szSB3dBLt2SZHPbzJrbyDXYgQX5L7ft8b",
  "key30": "3rNvuRSezaQn2K8vsvysUuijJCkQXyVWTtkBKaAXMg9xKtu39NsQFKrDkp6TUDPRFncBbwgfMb18diiRsgoyDPTv",
  "key31": "4zWFXkwxrtukLsgoYcgiCnbHjyv2HuuYTvb2pqZ9xJwhUBykqN3Jbf1gGmMiaxL955g7GQmybMwrF3TgQ1RNL88L",
  "key32": "4rPCVWgBwQTh3NbkJuyZY8CsvrEatqyT7xdYA9TqhbSmr6o8KvFzWmqAKrDjbFnHMHbDLGBXoC6inmQbqoqkhrJQ",
  "key33": "BWELZrumJTWcanbDxsAjnvZsMr1dNFHT7V6P1kLSEwmk75g9598EzchoXhcXekeGcJ5nZsJGeWpPnKunWyC8hBt",
  "key34": "3sbjA57ysTANTXq3e7DN13jU6LHuBHbfs8FVXrXsXGrUdVUQN29gMnmFES6Mm5p7BXy4UUmQ3ret74aRTY8Dez5Z",
  "key35": "4NyD1HpCdsr8kn8uptuGKBMZ59d134f1ncos4YSqut3tu6x6ACWsUGmXvNaNU5CrSkfifnhzzWYr7rt7sWDDEq14",
  "key36": "a2JeCA7AASoe72LzCJcyFDMBLGUdndnBW24GDgq9snBenf2jpKbNS2gpPEH65B46UaYayU9ELV4oipYL7FsASNo",
  "key37": "4M9YV42DJnf6zgAwuhXc2PTbNhpWLKoAJbos4ctcVdMGezTjKvTrYCg1RVJL5tMG3GWA6mAPM3n3Ug8N6SrzBQkJ",
  "key38": "4HfyV7xhw6yMkaZRcATfi3Ut3E3FwnAtufV5Ezb3dsE12y5szEyqTWS4Vf4XYppoAmnAWJXcWnRrLDkW7W6UQsaM",
  "key39": "4MN5QjQPW7BJdV9PTBnyCBow5QNPasiAbLeDd3ZWfHzXDZ2SYjVHsfFu5cqb46LXdv62R2NoZoC9r3b8VQ1w1gFA",
  "key40": "29EqVC8BmgTEX5pYPshooaCUwc85t5C7EH1DCGWKH2vszCotxCctbajYEy3fMjFFhyAFy3Xew3jz5A3KcSufxjnc",
  "key41": "5BJGJWSoEFKDYUwrDVmRRGqGr9DPXwhxkM2b9eB4KnTD7VPjNiAYScitRT4ZRGRPfvUpVf1ibRit8TSAxAsQw22v",
  "key42": "47k3MQi5sCZxZDEqoX7wGKvL6n2fCd3Hbs3wYPg3nUrUeJuzxWd2T3tBgSQPnZF3sRvdik3LAVZCsk4WXCMc3iCv",
  "key43": "WdH4LB5STvSTdLb275dZJ5GQFseifhArJFif6FfaQ14yPcedWrj3m3MhJtVwjDhrKFYueWmepkfWEbks5HeGqEc",
  "key44": "2Gm5UTTaNfurGAAM9N5hhusmbRLjb2PtKiW3JtZ9sE3Wx3Mq32rcfoPNnX8ZmRsBx68pw5HKVGAP6vRGJcg1fvLV",
  "key45": "4nZpZRqkXzhUSrtSZrggFW6f7asyLwgNC2KDQJVBDCqM26cuXPwgaARwFU3pF4kxhsNDRB5xDTvgmo95ZbLDRATd",
  "key46": "3HabdsneSp8iJfATctZiaSdtSJuDjk7sU1AQVjJ9Kx6T2XeAFxB8JYUS8TQffmoTL3bQfzDsxM2PLMh8kdrSBhyK",
  "key47": "vfV53cixFrVxweoTaZyeLr8t8hp5stW1tkQkAr1xwWT6Fmn3KzA5RWo9PVAbTy2vFwNuYnrHfTMzqY9P2XGChVF",
  "key48": "5zut5hUFNqxR3nmioynw61k2srjZDNCDQeDakUU3B3cRqLt42oeCZkj8mQNwnf9M9UK4az6DVudiwVKwRBedPZLW",
  "key49": "Ks5KSYNNzADgReDro2V1YJDJjkEpUgjQ1hfan7kvVtvsnJ8ScnMu92AKqVMGUhucckQ8zwRdTqCRU41hhLHiJJF"
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
