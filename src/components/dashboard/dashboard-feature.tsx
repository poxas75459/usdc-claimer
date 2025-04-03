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
    "5ATUtcKv85ZdPVaR7L1rGb32QtERF9PHNGsUNK2masJDTHqkk32Y8LYYKXudH4y3uiqMAnN1kGMkHJWsAyG3hHUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDRnpr4mTQYFWuC5F4ihSCwSdEFAqEAdA2w4Wo9b2JXms17eAWMeMobddtboMCyaHFuacNLoB1MGSxVNnTbupqD",
  "key1": "2pbyoCspnYvHQvrobajSadyRm5N2bbBzhYxUApoLN8MyiTPKqQbEpos3SeewV7ohYaj2rMzNTMRY6h8XDCoEuaE3",
  "key2": "4YBT3V6raEEQb7dQEGHZN7YR8TR6ZQ8Z3FU7LvU8KDXoQd7Xh2A89Q6RSeV7oqVt1kYQDs41Db8TSUhr973ubaNL",
  "key3": "48U8s4SbzWAF9KaAvWNugQSGC5xqWNCFvVVkMbVDRw461upre6Zcd2b4wSnsFasFqkiLJ9W4WFt47BUYAVDKV1uf",
  "key4": "WKK7z4Z8zPyti4ti3RjkYa8HRmLM8bneC4BnYRG8MkHKUzwnBRSUQT1eX6ir3q8NJVkZpVQbLLUioCZ2m645ySu",
  "key5": "FCdKyFaAi6TmfsqY3igbLzqLY51rJmRBwFc6s4Md356KQ7XGeUn8vDu5CKPETfmQWW8QBfm4V1AsBCT8mp1Pqia",
  "key6": "3uQUadZzrCJobSbZGXfnb4rkCbBQdKvvo27heczeTLEPAG3W8fE5aAe7AfjkXsdbdE8xGBwKqcg1zY4UiLMA2kJ3",
  "key7": "Q4Gu65XU6F8dLGzFDz54QWMfNQW3RmycUJxNxgGW55HrTrzpVm6sUScPBZFRx2gdFSoHhB1p7GmDUjv22WWzD7g",
  "key8": "9ZHLT55wCKepy4p5pFSms2T9jYMfqvMkCqpYAywQV8WkewRF8Jk2tcX1UNSSwxoCBTCHaRMbT1RG2ntbqQBSNqL",
  "key9": "MjmCiVdXL9ZnaFrd7kXwBUK9izk2jkp1oPUsHcK3BLfmfg93h4mFbgsp9NFM2p5NMtCjSx75FhaXE2uG2ZkkyiA",
  "key10": "4fEdZj9Q8Hho93vYeV3JaphZFBZBN7PGPSpLij5FJXHfuZxspFHCQinurvtS597ZPdF1Ty7ay2kTqUieFVoHdmrp",
  "key11": "36rYZXVLQjCnPxiShrCdncY8d6FwEJs3QC6CsSy6MozckMJojTrqzNHxDyMM1p2Ayi8M1nvFyKyigNXSg7v6zBzH",
  "key12": "3XTr3JLogvnzuv1bPi8wH26vL9dTvtNhPp4C3UxVwv6oFq5j75Zv7XBTg8SsPadki9wJmZVNBHB3P6X19LyxueGR",
  "key13": "qMDN1mP6gCCCCQe9raGHdoX5WfigaKiykKQvEQ6Gxu2gMjqtng3cbHLQKdkkvJWfmpPFm4p3Gr6oKvh2aMfeLvA",
  "key14": "VZYr8Yu31BapmGi2pT8fNiXfJbAgdPqYx6febRgHjhxVYcoUKcC47S31NAkTUS7beUF4U6iFA7LtMng6jvTnYKQ",
  "key15": "2K3rBgS3WixaiBm3PnPfZseVXTkkpMKz4bwJCWUXCtwQ3wEAZDkgZLTqdYGZ7fnZYzzxuFQxFdYweEM36HwVsgrh",
  "key16": "2mB9eMaqymEhQGgXUakVxBB5tKFfDUXKqva1HxhCt9TfTsPvucXxDXv9EA5cBewPieomh1HmRfyniqYi1RqA39DY",
  "key17": "5TA53rELZ1vgoz87F9K28c38J2LJULxp7T1WheA8UAx9Rigu85j4pyiVA6fvksqSATRGVbXTqT22ubghyBEwCDzs",
  "key18": "3pPKAZUS9ttvu3axPek5CHyL8xxmQEvdfQLto5sCDv63uktLmu8LTtJRNMA1sHrUXAvAeTk6qznBHfj24Cuns6G3",
  "key19": "5e57LZF1c58xtrWUgbNvZuZtZsjPXABkvCDsSt1uM8uGiWWdb33243zU14kK5cixVJxzvrZzwkLvXNmc2n5ztWtv",
  "key20": "4Eqr3QfofjJKi31qvy9c7jRMZgU55ZgAL2iGxUpT1vrfdx1SEgiJ2K4T8ysJpXf7W8M4WpWbKBJH3oCcYcYbsFyb",
  "key21": "5V2nkXc1rKBsb7z54RwfRxcqJ6xiJXVw3ETAyGda1ZRvfXTJDNypmBRqpePMFKkArCnzSa69b1bkqRSKhuhCtHFM",
  "key22": "4hEiGVuz1TM8QhYAJGJ1nczGr7578kQLPMRBp6qu9nCdrPixarzwj7D9Q8sdiGxe4dsKqv2WfQEczEW2nFppmip",
  "key23": "Ny28CtxcZUb3tGTAqvfGWB6Cjg9DpsC1KunpvuENRR8CedW1BacAYAXjk9tvnf6TKW1FTNJyVhQm8BW4X8GoqUg",
  "key24": "xeHY6NTwaQXRRXMkc9GYG9dtfEtrpnTK5KPo32pLABttaiiftmzfasS76RfJ5q33Fk5qGKu4wkzTCSrCnw73RnM",
  "key25": "43MJxYuVWxW1DuNsLvAqfGN3BMqDYbS7QiXFktPn93VdRMFqm7Fw8WRnWyFpffNn3s5JbVvfGpz5vF8hT68GTaq4",
  "key26": "5QauqvGVarXAFQTMFqFMZQsgstCYeGFbbiPBsVatuaZ1jDaCKP5u5kJ63EeZqRFPfKQE9zd42tyTFQZXRf9uXQq6",
  "key27": "4dwKyUxxWKt65s7NE3FSLkaAXydeEXW62UCBussweWdwAW526kyFAz5ZaDC9rLxqX5wNTALeuRHJaFioU2AjoSqX",
  "key28": "2NAXsfnr8vd2LyrTiutjVfyMK2nUe5VS3FYLMmnz5eL2TQbLxiaTv7rqZRhkTbMdrjugpERM7peTVhoWT1Y3jh63"
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
