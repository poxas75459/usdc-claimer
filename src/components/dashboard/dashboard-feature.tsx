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
    "5uWEs4mfZptgM5AUXTw2s2BJ8ND3NkYzmiKNSxW96jDQgxWmNW1KZZUGc4f1WDSFQ2Jy2MThPKd2ra5SJdeWkZQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UB2fwVN3ApCg4xh1BqTWrhJUFhr5kjFv7ig4m7dkicTBdenzwjf2NiBF69qJcjW3CB5NA1c931vMaBq6yWeYEi8",
  "key1": "rqQ7K2SUHyXhpPapysUnx8pGU3fuLwE4cPy5fYEJZMRLoSF1DSvr4juS4HqPK62PM2XBEfpxD2WT7Tnc6AqTGLS",
  "key2": "3LcJSvbue65NdAQrC3JJaUhoErE8x8bWfTnfeDWs5TWM4BKmqXt5qJHsYCVLMLb31KWEctX6Nv1BogNgbw8wnEZo",
  "key3": "4TJfHvrhyDLYsqmnm61mnFPxyhtVUNg4gp3bCrUL7WSdSsvxcqhsh2REMDyA2749UxGS1HcR2xb3LLVgVSqP7Vwk",
  "key4": "2JXf5BewtMUmnCAu5gLKCvN5J2TfGywNBNe4Ssxy8MibrrvpfDStKWcrShQ1p7zo8vJEkhYsQKfjAMEkXWpFyRQg",
  "key5": "3mFNjfwAJQFQc2Aygk6NquzBdbnHKbNkPFK8p9F3JuGfDXJnDnGs4bhXX3HB3RLtRmRmr56URPZP8LNkMHxqf45h",
  "key6": "39PNiGZdEmTfaAZfsBgthB8GHZiCqcfwWujZRi3ch4VPmyeeZhZi44Vztyur7d2WrsnwMJW6uLEvF6MEV4AYKNie",
  "key7": "2L6kgxU6eYbmyszZr1VFXBwdt4PKV2Jm7fdNHoPSJ6AVKTECMiSWkoXERFX5Exa4DtQfcxNMPH8dj6oKoPNW58kf",
  "key8": "2PWVzjtE1BGDN4iUcJQVx2xcrcrhfeRcesredLumZM9onSPjyeWPJaQ4p29h5PzQYbwcfTv9Wuu9wej8z4J8fkxa",
  "key9": "3KpJJWeUEe9RxE1gqvA8zp7gwsy6fAwz28gs6Q7L1ButYzMzYzx4mEvotnv9nyo7wWNwbSrs2A7AcYqp4XZRLeJb",
  "key10": "4sDyvT55T4ZvdMTHoxMKnengyfB2fdsP9sHhZDDtL3mCghBk2MRU29QqWZkp1gYJcKp2HtTGSeL7FKsfGv9JQSFy",
  "key11": "zudib12yY8oSr9b73BGNcnJG5xD5KQUxgpV5aXc92Bpj73CrN7Zvtw9HfJyYE13MDQi3xokWSZcWEosRRPgZRi6",
  "key12": "4a59EvamBsaiFGWCofzdJZcvezBKdTxBwnQaSnrHDrwWqTpmAPhNRDnS8tAgYJMXH6qtyEb7vLYWg1VKBQrzww7M",
  "key13": "fydjLguMt6msMLyX4KC9cJ4dVrfGLrQs4ZDoucAXFaxnzwtWTqDbnNhiRuGhCoXucKjT1sreiVvCJm3LMsNHMyi",
  "key14": "3a39uYxmNFf4Qrcbic5kDetHov1HCTzf3557FriiTx8wJpnw7AVW9ATD772Zn1qQLhXqxgPqYWzsdMgyumC4gLBM",
  "key15": "5D7WgtrCcX97n5uxGJdZ6NUe1w4mc83ksZAW8PFkUM8oicUiLfCnrDmKabBs4dLPShDEzNU5Xt9RgnKNHTAPMXzy",
  "key16": "66HzxV9jkH9kyzqfjR5KubcKBCuc4ZvfiXW7GptKhc5zYnhwfeoUGh832Z8NrDYudqDjfDTn6NHqQviWQkhm3kz7",
  "key17": "4cjctd1cMntHgFNW9AYruC7JMr5ht9eZ4K1xyCE4Qu7g9LahhSfQYoCzs76WN7bwA8ULaCX1D2r49UTc5NTgdw8M",
  "key18": "5SHX3Cvz1FQ7j3fL3abGC16ikS9iE6qQbrNLDiQapsjJg6BaQkconkYHGArG2k8PnKGjzPJjCt3hwkJQaoaHoYrf",
  "key19": "5RpDESdkoxKuXMjcuLT2rCGsq2vFNvHwEe5MC1RyRRZXx6FS1zd6245Vp6Htck3WVgGNU3BPWwWLi9fEauRPicYL",
  "key20": "25xansHeRUYHAGMfBh12TdjzQWnoatwqUcnAkjjSi4xFQkha7Msa3m4pRDL1U7AuXAsd6ZdMBDfkUmcmQfrdnM2q",
  "key21": "5jTxRsx1D6y3g6a1QoSW65xVskssHWSgP4fdJdLvVkrchxytQYCVESz5g1zMJkZ2pswDkQLsMFpWmqnrautYzWND",
  "key22": "3xqsfHNaJ7xuS9Sqfs7UefMrnCRrUiN3XrT7DLkJkUytL8hZYbCJ86UE826hD384ibdR2nR9W9ekB85tmVBG1vpv",
  "key23": "5M9HWrKWAFi9c5C9fyf9k5z36fTWKr9fvWrJEjucHpJRfX1dA1M3d9651kPtUpEuYbruJM2uaeBQs7J2VpGif9B",
  "key24": "3H7TLZMHRN1vuz24J1RCjpWrw5RRXAXN2xxvtpqPycnB1Yh4LUBLDLPmBahRrHo6maWQW7qumEmJGj8ZYRuVVmac",
  "key25": "jDv9nCfnvUrVHwD82vCjrr4KKseJfsLoDfZ2pSL7HDAxTPUpnZaSuUdXiCZtdxUPHtu69KMHB8Cf6TsHzrUm6je"
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
