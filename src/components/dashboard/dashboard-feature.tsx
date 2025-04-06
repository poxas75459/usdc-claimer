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
    "5HMKXzn71ckgdNRvZR7qjCAYekHMZKEC1szgVChjvBEP6JWe8d6xH7utR95QjHYeuohPhrpi7rZWDDQRA5999JEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4higo9afMVseWbgrwbsaVa4iy8qJVYkh2Pargs4F4ao6dS812kUuzSNQfwqcknQjMTvJxtCbDSNwo5e3D6cA7rZ9",
  "key1": "hCjnanyZ5NmNeYC2Xs7iPCj8fNp6xuHANUC3N82pUeLjArHXndddMkRTTx2pwWPcYFd3vCmTnQNDF9gZGJb1qYc",
  "key2": "3Q3EErDuAyQ654Pda9r1F2w8SARWTx3JhKCfzGVto5HWWMw8evKzYMgDvsurLSXCM61zEaLfgrhHEZgACVJkt2kG",
  "key3": "64aWGCYwMHcF2mbCxBWHriPbXmLGkzmMY8wfVzhporr7c2aeL5XR32jd1wtDs44dmKfCHcHYsZdXeE6MiotKYkyM",
  "key4": "34QPobeU9dE47NkUsN51Cbi7ekdMQpFvka3FFweD4oDpGekvWRXHvpyFjb4Cq8dsYUm51yfZLV2xgQvWpeKE61uc",
  "key5": "4iwBhVVgR8i32ne9Z9c28g11tXuTtrbT7PmJQxZTAoPyt7TCgmMhsWosEC3GNe18XiKf1mPmF4rfVaQKvBWJDbMQ",
  "key6": "xbzeKM12ePdAw8faJ5gPub878QgF8ipe8VHvDHxU7skzCjn6NchJYSk9CtNtpZa7W8rE1opXe8LXNt7zsZZxMJx",
  "key7": "5HoxFsmP96N1yq1Qi5dZSCxoZ8F3trtZKsU3KY1pHQKXvZK35cdKWA5Tjb1ZEJWzQxFLhz461TWfHSp6gg8KeMhM",
  "key8": "29KmFgHjfLap4fHjh94wwBDwRhXg5grwp1tLuoEno6N5kJck7Ldg6ceEZ8rNjywNY7BDEypZBRrZH7nNjQb6YUFX",
  "key9": "3AGvUAbQytisbyQiFyTDPNfyRBzkGNBxYcjUoJge28qf556rnCuiWBSuw8kAvSCd6DGCSX4EPNkUAjPVK42pZoTN",
  "key10": "3CMrz8snnjVVEXRiFVYW1vZaW3145MwXRL3Jt8V19WGoWxb6G2Vz2HeVkfhN4DmfipWTXg8kuU4ec69GFz5Sb7zz",
  "key11": "49y9pgVnZT5xNYRu68vPZk5SDfwWEyo6B438f4LwRG5UX1wRUBJa7jVzkL156ZTeWbaQoohLWkpRBv8PcHd6gry2",
  "key12": "3RyNxP4J6j7x9xH5Lgrfdk7Ut64RBnWDDw5s6L2DxHbhFcQA1NZP7YaesRAbntxeBzqnVQUNRCKTha81CpVKXNah",
  "key13": "29UeifRB1wi7DnHyXsUEPY6jWp28sBNvowjVokt7rcg6bT7KD9uqEEPvsJsyb32bzGYYzS5ftPAsY7mab8VnH9jY",
  "key14": "4pox5ivt2weLWwaEiH6dcXsGSDxkmfWUAYj8UtXZqH3mV1SmH7FiK6Ks84PYb6TyP37FDT9PSssVKJtAf4sK2mdj",
  "key15": "KgezSYgB4m7rCW1yKTjeGkGpuBP9SLsJ2SAxcEuBcQnMm6QDL2u53NfwiWL9HSFmoJ39hoV9eeFreqxmokzJVKf",
  "key16": "RaDKTampX2BraRb82UZoYeymach8vqH8xjxiph9zn9EazMcDkTHf7oFyLPuSx3L7bknNCTiVWnUQ6EaGvMbYox4",
  "key17": "2AKcLysFkyE3ctNcw5Yh1gHEhf5ycmQcZ73gLjfFgx2mCRnhodkYiEmCyMA7HhAHy5QAcAyj7YdPmwRyWDD1FtDZ",
  "key18": "24JJjvfBzUaxtCjmvH71asQSTyLZ81ngyiBiRHutvHzNNmne9RmV2epHvcRkYtGUCB4Y4rd57X8A7S9uemreNLWL",
  "key19": "5HXwe1aTChW3fkRKFccLmSaCqRfYB7sJRg79cjzuTgGqeFHjDABRRyuXitCGSGYwg8ys9bcc2MEGu5whzLZCtLUC",
  "key20": "4Q58nGEojabnUGHp1KYiEKNa1kKfFJop5Uu6yPF8dQibz7CRGr6Js8qwY3zojL6S5pThUPZhMJnPbck4TK4vPen9",
  "key21": "3GPRj8WSsshLjC5ckyYyNvW74AWaQFqGzX23uQUNKoyDgaYARDmVfsm4rJWzbhSykVe9tSdZWoBW7VyZ6wFTVtTm",
  "key22": "3pSZGTk8DJJHNzpwBhfhVqJ2jPfnZy5KPCT4H6fjrCEB4vH94kimqUAZvfsuNK6x8V5MkXmX49fP78c9v4RYpPyB",
  "key23": "2i9RsmS9M3QBp8zzSGwH6KUfEdfiawLsrkpjDEkvw4iM4pwH7f7P75TWtYnycUGYszfFxE4JWFAaK1eY3yTBBZs9",
  "key24": "uZEBxg3AvmRoo6jiCZdDUGFJASsLXkWKnkGssr7fgQnLm3WWjZGfqLAfZfM9nxRQAqJdgsXtUWTB9cv8etsbQF8",
  "key25": "2VxtJZBFRm9Nez8FQtCgeXdjgmsnrfGpka4YHDdMQwMvu4R5jhj38TWWHZKNGNsrBYgzyv5C2JYt1h4hbB4VhnDr",
  "key26": "4D55RP8uz4ABAJqzESWdvFpNdJRLLszj9X5yFsk3sfvEPJNhYKctc4oSWSoWrXoVfLPR8Gguqzk1WeHbz4NqVF8M",
  "key27": "3kZPJmVMsXYDLvZNRKLNbnqbVgZ2Rk8pkfHbp5VcsyMCjmr9QFL3QRYpThLkYhAHzgW3n98QDhK7co8cxiD2qTBg",
  "key28": "4PX4ahFu7h9iDhLaygR2eD1z45N5V4VCozEQhkieuSHfjCQEWBSnQMYjuN7aJJtFq77iGE7wJC6cwapxwoBC7DAt",
  "key29": "3HKjb4raam71AaSDdmWCUsSg6xu6AmbCBwAf6WDra1QQQivzLjGTjm9gQEvWjWzye443jKdEecmm5nwjyKiVP1rz",
  "key30": "3wEVMEYaVUa7TQhbQuJwuzWgDk17swYHys23gAh3Vz1ZfFeuZqLNuHqQSTCsUVEkkUaiLNKMacQFLKp3bN4Sdnyo",
  "key31": "vLSdM2FhYN3DgPkJkVSBgHSDCpoqp5JX2jPE4LpFVTFfmkMuirSkUtsGvihobZp6aNh8ArmSUBmucGzCrt2M9V6",
  "key32": "4dbmH4JvhdcXJK7r9kwQVm2wPvqwn3MGybb1AGfj2snWfLH7E5pjFYXw6HXMpB6jvh5Lfk3HfNzycCMKcfefgPLT",
  "key33": "4tFgiX6u8sZYo683Qkp5j1ouTV2HZvBEDPBbcvhyw6hnNvwC65thwQC4NKVa44MhhsfdmjKeVLWy3BsvBGe56dhf"
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
