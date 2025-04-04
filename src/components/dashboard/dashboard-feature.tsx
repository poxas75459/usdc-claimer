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
    "4XgSDmNR5RBe7xYFgZF1CWnsCWRsf1HVETt1WnthhMecKakBG8QKZkooqnUfLmEaJkJVRkMrjM5XDQE3MCD2Uwnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sySmaCUxcxsuaidrjUvN5YuENMRu7a8T3s1KgnEcXqaZ8ZfpbKwvf98w6Nyw5K5BYW1bg19gkkfSSzGAXo141tm",
  "key1": "21LatFYKGECzyLRdVBP4oLuQnVbofu73obBd54dUVvLHXNtEYtPTHAMFG2nEvDNGRnufDujJKppWYgnnWpdUxggJ",
  "key2": "2H4wrvSX1dhVGoi2HPnk93QnbVGfMfes94m48ECUKhqDK1C1NE5iRor5n4pSFw4As4mWCWc4QpxwmFm6HcuEhCRh",
  "key3": "41XAy87j6UwQeWGbgv8j8wREjHicTxXRd8VKMHRkX4E5w8fb19cwMwGsdc2NZdgFGqCoghEfsuEZKXaDDupUqJKT",
  "key4": "rsQjNuoJLKTakxd42suYneaSNoTiU3JVJ6p73QFZxAaGkReVwfobPcd8BC2dHDP4zrtpVAv5me22cvwtr7vyJ1h",
  "key5": "4UeDYuXQcMjhSK1QGfWE8cpRZJoTtG8DkwQyULdFDrjCM7sN6Hkzos8LQydBJiCxvvjBZ1uSZTCUx8HW4cXqsh4a",
  "key6": "JqMdEEkiJRAc38kygtGBPDp4acUgAthtkmU2g4JhyyvscEpBtJm9Yiv7vrSunhn5GKhiMpbHmxwgEJ2gwrPygnK",
  "key7": "3HanGejHuXAF1F2aTfCrYg5s91MkSScGRspBTqgtoyriU1ZKFx9CYdKpKCw6qeT4AzZZvCE2N3WUHVJE2PtJD2fJ",
  "key8": "3o3koNsoPEo5PB6KUFrfr4e6U9oYgAoZ6zwMZGAC82L49dbEyyfWZUonHqoCBHKqX7JfCTVhe5XGEMXMp9W3MvYP",
  "key9": "4T8ku9LJsaX2EgnHfhR5DzuPBtFubpNKuqVcWhip9Em4CiP2too6Dqd4fmzPgvs1CojtKK3aycCZtd3HXL7ydscW",
  "key10": "31ZE62s7ui1rNjxyMkhCZBjaAox5gXXCmA76XN8cvkyP6LFKNZhDwc4SpU1xn4V7Vmvr7NXGV68gcLUnQrrXMVoU",
  "key11": "45QdpfpKbb5QNN7ckKGmKUx8DeQ7ek75JQpLXMB24wqyBLD1X4uYRNTyZAubLxmFfh32qDiyuV3tnJUq9fjzWfBY",
  "key12": "3irRxGPH7L1bVbWv5rXtw2AebLTAAmPwDt9dnB6FcrQTrnGaLE2ngcukyY4PQtvj1bUpjbWUFKvLtioMeeLoLCFf",
  "key13": "5HuL7Q4wv84pvHTQkbcaBnitvh8KtCn6gnSvn4BVwU1qQtdS5Jeh991pkccY39Rw1RuJRBfxJExMejExvT9wdLbJ",
  "key14": "2NN7EYm5A94goxt7uyEHwWpTcHqwjf3DCHXecZkun5xGuzMMD5SiDep2oxjFNJcQt9yuNmVHPXqXxh5mxAVf5vjF",
  "key15": "4oTiGnAs9vehm3st3jHAy2s9Wa1cAJyJaufRTuZ2837okZpdNAXxEXckqm9ixfYUeMwRDRWiuz8GxTMAXnMmRvFG",
  "key16": "2rq17Y5Z1YHMNrdYkFDLZc7LaWNbWAfzqJDonaMtzhq4EqgcvsKTKYdttKrug3ZBysZ72obkRCCbqXnXQ6cRrQvt",
  "key17": "4cBakfJhyJL4q8o77tAoxLqXukUVgVk5M3ZKKojpaL5MJ4mnkDhqxCjfEmP9RkHLN7NLZkxrQ7RbyHZq1MtKDwp1",
  "key18": "fc7k745TScVMVUce6mgQMGp8q2Zdi6DJgdXsTvhpLm3NEVkYdnaLiaJaexX1r6ESHWNU8YHiF7EX3xBA3h2qBY6",
  "key19": "KAMQuBTqNuhWHjXNXE2Kp3Ve1P1qPE6iT78yhhKfJJkJZJVgSMjD4reW3DQnBzRcg6t9eX8TePE5p9haVXDSESQ",
  "key20": "LS9PqLriKxkNcKeJR4mFmte29wM9JLfHjyW5riuSPPL6Y73DLbZ8Xup38TBgKREYc4S4w1ZPetTc7HTkvvJhhce",
  "key21": "5HRNzRRakK8cdgEdBBYgMpfMsyRd2HnkkMzEXsTNcc3dhiK617nQAGqC13bdBhMqArbxdUhaa2qxMmA2gf8RSsxz",
  "key22": "63i9xrtRtt7LScepExq7XanoFNxXAK4VuzzTVqDQwKMUtqAoPQV9CznCkfnXs1BYuwx3ybg5xjzhGZZzjWLxX8yK",
  "key23": "21chFL2a5HKKk4gUDf9riBcMFPtLZ6Ufw48wkfX71QQ2jXM8sRiBzngUUujrU8pjZuWSYpUmxnzCnqAwM48kaDav",
  "key24": "4asc5mv6hsgv7tC28AWn8oBHWLMZajouBABHvQunp6cL7DH4ooUm8fbuWrNReFeHoeMDhRvPBdbrkQvsxNts1f1w",
  "key25": "3HMRpkT935fnzASgr91Wi9KaS6KYc4Mc5zYvZVvfvCQ74ndddrSapdHuNYh2ZhkFRKbT9dKNu5kqvuGqWGekc9NN",
  "key26": "38Zy9B9KRniiADzuwsx833cba4TkULWK5KztbjXLUQWQEfhcq39xYUdnUHwQwk2HhCVsDajZ5wJMrKWfaD2jwQud",
  "key27": "56zc1YKEFErDPen9LWLmNPUUZvz9mne7PsaBCJefoS73Y3dJ1JkfhW2zktDrbEXUBj8aDQGSbzEMyxPgZNdy4TLK",
  "key28": "55vbpksUTBYGu7R3q5stPMPiVJDZaPdysU1U7Jk7bFBvXNSDpyMrZ4An9vFUHCrjygmDwJPqJ7Y4yh1XvpJMYGZE",
  "key29": "2Dj1s9bAAKdiYmXPnPmiwa8k4K9Q3RT9NtsQevJXLkT3F2Kjmqgpw4GAQAq6GTacAoXzu7Lwkh7LcTtLQWtjwAaW"
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
