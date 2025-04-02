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
    "5sEQfkycNTgoXdfSFiiNXnE5SmR4SjmptwRU4GtdZHkqZ6sYzzjZLBkogies49RiLmtCwWJRrXDn1G9ruDLvQYk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hrYg4iabBnmfGH9je1rFF7VSHqX9Djy3V2ocagz2RAqnCwDoFCHVwCNtDPbZCGCYCoz1gnXcH9ztMVH71pWxRuV",
  "key1": "Rny51f6Fvy8vgygJ98SdV3m86r2deJSGZV8bv6xgbWPmMKV3pi89gTgU8gr7uugndzeGhFhPcE9VPjEfhixtM8k",
  "key2": "37TgffFdUu4vFqjQyeJRGxwxzntB7cW2jmxTJ1hbvCehXSUfVJUAqeuL9ik2uyt9R3beEhhPux7my4x2XbinKMwW",
  "key3": "4Me8siCnmZxLzTF5Lh1Ut69E7VMmBQvmdqz9qWo46QHKQw4habKJMB2gNiSLEBKaUQAYnNo1XZwZGdcENf7eeNM6",
  "key4": "3Ctaza1pnEBn2nhcqzcBnQumSfFTyu49yjFuJ2xJT1G7q6FzQS6BMgx2WboDLaUyGBhu7YpBgELuZKa8nXDNJYf4",
  "key5": "3tLgHe8cf4EEesBCicbNVJqcMtXuzEZEnV111pwB1jnQ7Tm14DwHrp9a5hpMshtdMx8i531Ngdt291FKqAYjSJCa",
  "key6": "3G6b7KC2pAcDufTp7uEBptteBP7YEahksppWt7Fj8RiyEGEuEXLSRGCQhEdk2sHdhxjM3BBSFbKNqbfgUxGCct3D",
  "key7": "39GXu17HABDpBdbmvPxum9LCyaS2jAUHpBnMh1He4FGRQpCJ7SSqCP4zbxmJdBxk9F2TUi5g88LSMVrCZkwQLtug",
  "key8": "5A8ZBhojpRqpsMrcurcr7LJXjcFVhZQZ4ZCavKc4HFogspw6yaiyi8AiES5q25mSZSMTjFdG65Wce7ArSi7VDENb",
  "key9": "4VFCZfTRcQ9vWqXLfmMjhteK1vKVFAKuNsAdVwafJrVRCU5cq5L9teusjcvgM3bQmvHLhiC7hfv7Arw6ck1aRNo5",
  "key10": "5978bsFTnd1SSkVfy1Wkx5t72GSt1NqNwp5n9vCCpBPisTdoSL73oZvkaDEvRvuTM9RskRfVqbVKrtYCyYPE6Ufq",
  "key11": "5tXS31AskxjUJyAYHZHmxfsX234fynV2ztx6Zc2hPmR7MmqHiPa71bX7couHvds6zuP1qYmnwPN2z7WyAJNMW9Co",
  "key12": "5LgP52XUYWB5CNkFV2GZpTc3ViXXydG4HRMVG4VdQLCdy22MRHRGxfvR964ghrvqypvxgES5Fxs8ZwdBHrGNqHmq",
  "key13": "59RV1ikiV5ej2AX6RvxzWJZyuunW5Q1XuxJDUwKiArK8jg4YGK6ituM67gHtmYBaY8swskuD8zi2LiH8DMx1aM4V",
  "key14": "2SAC6DmuE6HZNY17BQHFKNQSGtuGBwC79SdMkP3KkZfV9fKwXp3GJm81WWGhuK6TME98qYPDZu8AtiMMxU53ZnFg",
  "key15": "5gbc3M8fSscS7yJDVqrJhExxqW8K921EDXJ8Wz4wXNSNwfMw7s8dmfPBwSnL3VzXgSucCTLF8bxsEy1m7ZtkeYxs",
  "key16": "5YrueGLLJ8GmMX2S9ZUVbTeFGk3zaaKeTqE9mvwpCNtmaGCNzcLuyq9tWenWNLtWeSJheDXKjXYEVhevSdk13t6Z",
  "key17": "5kaWt8qkJkfhTj1hgsupEGMN8FTXhHjqP1fytqJygU4jREiGrc4ok2KbhPCm8eKX6EzCqefMLvNjZajPD8AxSfJG",
  "key18": "29J6RkeP9G4y4sBah3W4U47sw5i6ff4yhH8drjXAfbaU5Dojg29UZ7NVMqgTyH2JEkRN67ZyzT86ZEZTJfJYQxvD",
  "key19": "3Tr3311t8xKsPJpV6iFhaNN7ra6gsvxnbd1RAdbqb5oDUrnYzZo8VDEg7CwogohQNXhpU7PUutb7WTBxRYS2mN2j",
  "key20": "65roUif2BYANX69MecUFvrALub97J6sGhi9ogqYZ26AGhT6JXXMYpMnVfwWPcmat7xPu9CLhuEuLrUZwQFjbqnDp",
  "key21": "25ourEQA14Sre448wPSemeHzTewS1acqa29W1CgptsBuqyYjdZe3caNBfHykMH48UofHbKWQf6LYHVTVZuMoQC3g",
  "key22": "5TBbgCPd8z4sZPAPvRxmNGy5ZmWnUr13tptX8XGh8dZGMKex7dmoxHzVcJ1V7ctVaYRc6LECfpwyKjS3ckixXbEv",
  "key23": "3oEtfF5ajVS3D1E2mcqgj9bUwfKngCHW7o4cMecHZ2JtqvLJSj62BEauoCQJpP4UgsEK7ccim9whJUSAEWbkPhs2",
  "key24": "2bsGa1wcAVVB1tdMvxhxcxcvmaYUZpviJqN9mJic7Vt23HZvthxfszw1GceDLffmsB91NmN1PjyR9hxqP1oeRcah",
  "key25": "4kavMjctx3zVJdz6RLgLS26Ta5tYQ7Sf7HNzshYh7i9ztq8PAXkRXtFFNTxBH35UaxuEqP2ReugFNVnHSwfVgJfb",
  "key26": "9sxLX1t1Zt5U9oNaBSy2PRxGcmkmzLFYnJ8NPNoSu6NDpWwqoZW7MNnuDHtffSH3vHSJ5KpSZzvtwwxRzKLbee4",
  "key27": "2PaLkwDYaDmmC3VLb7azefzpda3qTwBqwGGErQyFfWZShwu5YJXuq8FCdtfZ9xUP4myKgEChHUrAkTutPj3hEZwR",
  "key28": "3LxnQtVFtsDYEToJibWAgnZaVY6DVb27iHzZwdqsKgU84ZvU13dDYLbwwv8ewWCWfxh7ixmx8CpHKmCgXxQDYN2v",
  "key29": "g7bYTra3q81UuKd9pwh2W9H7MdF8wWKXwbJM9zardLDeKF2jCzHzQ2WhZnapa9uQ6cXVb8QyPEdHGBxJKsFSZx8",
  "key30": "57jy9WPEAEQH5DEm5gXTcDGpqxBdWSSBE2UKYpXRg8KiCCTJVnXCY5FBYdouCUosJfR5JGbwYennbnuArzbRSLez",
  "key31": "iZnxzwTixHEfPRHDRWoCLEjmb8Akuik8Buvh1BXo3gjahrPa3Sta3g4DQefHWXL46NtBP6FQxXFwkqib31ffBcr",
  "key32": "6jWwmcHzKazREYrtuxQjxhKnW4W1wxX7us3tEARL5Dsb8Ce8nJ49SMHB6PD9rETLPLgCrDsbmYc7Zyci9PzP31J",
  "key33": "3JfR9hqpLq4iqoq82ahCAP1QV2qCWWNd4k6RvpiEsQaJRLzs7iPL84XU7h2EShpchZrr4N7X5qFTFLuPNMGaSB3P",
  "key34": "4Rz2U8YPyWdUz13QxDFJGP2z33QLaZw8Qc41KjPGJeeYYmrfiHqZhVDW8YgmfXEx7R4qZLVDLeaK787Fk4JjpDT",
  "key35": "3F4CU6d6w55yrBwHL8vnCjgcHy1YC6vLSSLy9hZjGh9tCDLajapAdq4P3STL2xRwTefSjNdLZC5Zr6ASEm7YB1Mg",
  "key36": "Zm1YrpYiCpWUXCpioHpPC7Lc3e5BYQeJ3AzHKu4fm8BkCCSD3q24qSqp2fSGc6swhRWD8d8xokWsBVzj4tMwLir"
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
