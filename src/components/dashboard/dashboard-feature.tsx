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
    "5bg3NCoU7YG3bJWAtuRcZ5E1GPkP2dYvBZTUE2HEGCSxwAyvMGfdkV1ujBLxu2ABXGZob9gtfG6vG5JnPsYiDVGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u5tHbhPtGyHfM9JAdPDwKk7rotvVpVDm3YybLierXRCmqXBTU9FSaT6tALXRLHpE3EHLJfjqBh2AxTvMRAsj7nL",
  "key1": "3mcSUMb3CwoYxju5Ko2tbqh6J2s2naEZWyiaBmMfnHYTNemjW4a1YBUzEyHuUtBcunrJnd4TewQfFJVsFgTMojFA",
  "key2": "2m1P6vE9LEpcPcv7MCgMhEkjuTVj1oo2L9n35LynXwzxAQtnNv2PjF1Q8i3HH95p5Hm8QX99kNzbVP3hcPoYANhL",
  "key3": "5borV6CbwY7om1gxihRURHXGz2MPuJu9uhrATCwcDbJDpbUh8H1oxj5ncjmh4VA5Q2NQSBB8qBg36phm46nSjjS1",
  "key4": "L6Gc1dVYMc4C6WiFM7BrYY9zno494TBnS9Xbw3bxqfcAKJ1iyiXYg2Ccm33C9d1k8pQBHJ5joKz1Yw4VpyieZ2F",
  "key5": "5c1iTMYoEQQ697tFWrRQutJagXVq9QM6iTTYNfs1hk91sjyTzBzxY2QaVaW8Jct6UwgP5Bchvwy6MYam4weabQTD",
  "key6": "j4kgV1oQKRWCMhnbBNuLpegjVg4eaPXFqmCsW8v9t23564Aomrj4q4qbtVsREK1BdZ44HxyrsdkbWDgTEfZoiz2",
  "key7": "nxUF5MgK8qF3ZMnBFd9vtSw5Bi4zQS7RBWFQjrYrbg9KZoMW7bAcMeReX452j9rBXwQFvNndsh3FPzCuceLzj9E",
  "key8": "2ctFxKdp5bLknbZizmXa2hgBLHsXpYVcZtEDBLtGwtwMRXs6RwKFK5Jcof4egTnTdQa1kwgfcg8p6qo4u6c87gws",
  "key9": "PyK3PNKeqjPWetq9834uk4AD8zDYUMHxoAi4ULAqe2dy36RTw5FjsopJNJw9C1N9EC5TWK2t1kdpdHzb65bagyF",
  "key10": "2M1ug9CUdAE6S6TtRvhTgUV3SSEsGwrZnWCM6PXmmD7uMEnuQvAs71FQq9Edm2WurNXYAAj2yan9iNjNX3VeE5rd",
  "key11": "2MDuySFZfz2XvJQp2te9nuT1XXuMYTbYnuixonNMtZnTwnNqR5wxWWwzVZ6MCu7pXvDsPoEbeVJsn7URao1Ef53x",
  "key12": "2TgVzHiUp9AWg3LGKi1E2hX4fxH4T9Y5C96MxJd61sCAVf1wiB7c6LhGbsdzZzSwMSu5jLzMdtnG91nufjS3UHwT",
  "key13": "BEBJzZkSrMdy6Dg4XVBp2KLvqmP3EPmnnrCDLa2BqEi6EY5SZJY1QmBipy8noh5BZBTrB1U3rJ6ffUKGx1pW3Nw",
  "key14": "5VcHFZiNqnG92dm9vyejXw7kz7r1K2SCGit2ZiVmtmBDLPhy6Emq2J7GEtG65j6XV8KMWEQYK2YzeXwo94f9HvLL",
  "key15": "3p1oireb5e1wCBJMpQMV1gfbTReV5myP3EjC76JaSessH9VVLX1Crh5TeswRWiDPNrjnXbcX121FAgRy2HnrrqNz",
  "key16": "4M2sE87xcjk62nP8dP1tVre6NPbm3oVN2YvPbLryTM8mRMyy4F5ADW4SkuNUAP9QmX2TgcmV4dLKmBcwz9RWH5Dw",
  "key17": "4pyQ6iUGjfRcbhhs76DWrM1HEkfLHSKHGXYmypQbWTosMBEW4GwKiZAmcFCDtVPZ3BXNKupydvfJ6e3mwVhSqYv8",
  "key18": "27p6hN8wtn19D6NuT5LxnxiTg9cNMUfjGhc3rLd9J2UnsdiqDTxvqZcpr1Y2KxxLhNMVH1sM5G9Ntk8j2S55zPwr",
  "key19": "4xiWSoEfDFLM7J3iCBFfraFnwmZv3kEsVMqgVhWnyjt9cjye4ZhZVRXdSpbqFSdrb1sBtYnHySMVrJo4Wq2Sy9ai",
  "key20": "4qx6KQFghkxNPAgzAUmWu47snircfNYjWXBJtk95Uv86tZbzJ3uW3ybqv6b1EpVjjSTbnZ4E9BsXN7wTGR1XhtRc",
  "key21": "3vq7U4kZtbtB2Bc6dccymn7BbjJ4XbRTVksCGzi7KrWqFz2bEZawpZ1PqBGDoQfWNgLxCrqWELEjJQoFNDKKQutn",
  "key22": "4Tbqo52idVAK1f3oKSvmWaHqZKvqyR6pa5SQV6SLPmMRFQwrBxjzLvRkdJuGX2kqS1sJgeHA2aAZ5TiwSA1kx5mF",
  "key23": "31F16hneFTnozaGiUhAApyXSBsB83rukhUxwqQh4icDLrprrXc8HfT2HdzwiJCGn11Xo6BSv7twSbtUJfCmtjpdK",
  "key24": "RC8gPxtbPnDFfHnUXMdrA9StcyU54qtYogGASB1vhLM8R39Mw7kqaU72bPD6B8LX9yLd3CJDZHW82HCNGWGzgaB",
  "key25": "2FUcrL99UmDcVtqQumF3YQDnixa7SaKMayzPXEYzJKsa7N2Dek2j9Xrfe88N3bcTpWNvbjaauUs8iTraVYWK9Tih",
  "key26": "3Y3CT111JyA32TxT2hbeBw5LxTSLMMqCx2V8ieWU8TwkUcgb6eGunxWGFQsW6k87AVYgN4KrtfqCyJEvwHniPaKT",
  "key27": "32wScYgSjNbKuQUbYtDrCBFyc47vcSVtyMxPZ6gqD6VYM5ep6DKjhDM7kHDFQmjZjUPbMgbEYkTBZvCB8t7EziyL",
  "key28": "4udkokhMvPn4RvbWM9thD2DmRUcNm36ruNkY1ak9mQX7eGsLLvSFDzw7DZcQS4gmhsMe3NwinHv6z9ATreCPvn29",
  "key29": "3fm3taFm9m27dYKa8TNAafJUmaV4X2g7kJA3D3gDBNvpXrmzoPYN1CJVaPAdhggTchHfohcqTMxEd6wAye9JqXcW",
  "key30": "oJ2jZ76XkR2jBpk5bMHnuReTrkYBjQtMpXvejp7CPQzaFkBR4g6Sr6hV4jyZqBpMzTE9S8kk6sKhbZ8VDkHiQTT",
  "key31": "2BJ8fHryfH995rSvmbcAPbjemTXm5v23dkFHCMBgL5AV4LQUL8piqxQ2Ac96uBZ5Dq9rAk28gfvTRvEXsVE7ijNM",
  "key32": "5qJDjwqRAHD8kojUT5E4nE4aicMrRdc5eR5pRA88ZP59jB8MV28HEY2e5sBuMuvg6hXDrLzMC6HmTD731vYFamds",
  "key33": "5DeLgUXW6BSvuX98N6zuo9jFsfpcqJdDPr8qup2ydqoZkETDfM6QuE4qJDmuqofauiYwnF5kL5QMZiYGh8HvHHhR",
  "key34": "avz3YkhpTSGc8LrqZPEC5tax5cAHrBUHUyF6ouxppnZWHXBWfTUo33YneQ4PzD9DcvZ96dTYk727iJz1qzXygLo",
  "key35": "4ayaKT6r81Dzd86koqWaaQ5JUgFQ4FibjJo2HrTUs4EgiZh8Kz3hzUzvGdYGK7GwUbdDEqkp25QZqLM7avpx7XP",
  "key36": "4MjHm5cAqgMhZQsUAFriXuKeN1mV5nwwyPZFsxKNi3Cau2dC6KPFq2UkEgfjEebZRcvQQ2LJKk3bZsSBctgEkJUJ",
  "key37": "5FVFCZ2UBFZqiFvhvjetrHVGTME4gVkvH1Qok2zQHd1mQ65hhvyeUgg7dmJY7duHRm7ZZfY8KbkbciYHVyT4N35K",
  "key38": "4gBrzuH2t5dYQgiNgNbHWqCjnxStzTScEGqUTCQntVQNbaPeUD71Zwc1MoQFPCv2ot4FNKMzXrmRqJdBarH7bauS",
  "key39": "3qe7evRnZrKZN1Z44BFugHRNgs9bvh3Ff256EkdQsooAPXTzLEht64Wrsa88wWFQYzFER4zPrXCU1Uo5wX4UwCKu",
  "key40": "32og8uGgFLkTxbfwoKjV6aw5SuCT1xdk2BjVUj9puLRkRAdGTTB41AV2ms4E8cjSWniDB5N4D1cnFNWx8TXL7e4e",
  "key41": "4p1T8GW3ckdGDPv1pVWo5PzoCyegK1eRnCV2Nt9QpsWfyyUUqEKRdujiRk7WmqN8henR7htSSpxiVDm95MUcq6ka",
  "key42": "4RjEcWrioHjrNM8NnNZWVjZDA1M3mTAH2eDXgySF7TbTV1wJwwa4DvjHUPVzH9ykzkxoueN9LeHijyzacaXsdBVY",
  "key43": "VWdDSpLhqKBcqdVkrLuMaQcaWSWq1916LW7ejqhWBuLhqoqh4LsvTm9ftkGkA8VDvKbwvNNK6DJPwQVAURotNoi",
  "key44": "33YmHdpzBfT8bhBhgf4UT8CzjQ4hSTrUbg1Ek8yfSbNjdVgD6qCtzbKrkGyWcJtowv62hVPqZBphAfmagfNb7KF8",
  "key45": "5UaryTas68hao6HPdVTNTp3Nv47qfnUhNhUvZxjPfpmxnZ4G8Rbhb7wwQrycwCYUj96APRkVTvMTJBaXhKsYxBpw"
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
