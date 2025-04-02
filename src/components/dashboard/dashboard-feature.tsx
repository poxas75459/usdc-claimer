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
    "25FF37dDGCKGMfV4TSAuPyP5omFJL3aWCYwQPmwyUaTGWm3i9UgrBSued9mnkT2e5xhXumwEdwCbSr9eicmLmohQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ArZosGtvftkzWxPKFYHoMasGSzvo3u11Uw6josXtuDVDo9gYvma5PRVc7xBEUXWze1KwcDbRy9LVXfRacB2rfU",
  "key1": "2ye7dfQWgdwTNvTNr8hUvVpxHnAjgnXLSGnwCKZ2nbHBnQcaaxGHjVMU5v5G9P4LkCkiarC4zXgKjSp5K7hXzFQ7",
  "key2": "Sw9sAL1GMNFKyFJQfqpXUqvho4UQPMjeUgf2FgxQnfVk7iRre6uPzbCZp7kMqqZQmuUNbsNKnzoYkHD75sAi5uw",
  "key3": "5ngcn3XZXty9uiJ9955za93SysjP1Z7cVq9y3Q97bazFzgcuGxX5ypbLzcqWdzWTfrReoJG9aPPyUixhDcwnVMwn",
  "key4": "zWB5V9SVcw4P6NrXZfph2PkuJqmaX2AsG3tZTahHzCLVryHfkUUSFLLCLpApoKcVpcLQMLRFG15tUApU5Ga386L",
  "key5": "2WaALFQFdGe2Br8CYM8o8c4NN8iNXLAtfoj6egJUcnNCMEuGafXdvKTtBjQCN3Y3ncWGiTADPf9Z9cWgBb9UKWpN",
  "key6": "3VYhxuZUrUAJghEE1Qw34yprsGnWtWz91XW7D9uXyVcET157AbUqHKWUwEAsBfAh4RghXYRADK3i5QrRWVf4CTWK",
  "key7": "61eCpmqMvKKCojR5ss3KmNF1LxwuUs8gt3x4XFqDeLiqdnSbyAd6ko2bJTFA6vtrbimLciEkEFBMQccDLUuadMvj",
  "key8": "3d2au3DFRhDiatmd7uqBrUA5iM3xamn8QzNmjqRspkNNpjncfHS9g35oHR7JJGqzoeUDSdMYGcHF32QKFi98mVQ5",
  "key9": "jGMTzpw1Yju5UWHfF4p7gnpg1ZVLL4FvixnmmN33Yo6iLVxMMbYpkKcy2J1BazdYhsawKkMsNdEJgQrc9NYeJcm",
  "key10": "4Bi4jV8uDhmHVVba6ibJ8TgNQkKYXAWYVUcS9D959LiGUzNazjR966BhP7X5V9UtTt6FXNBbAAHvcmX4Gt1Jg9wg",
  "key11": "2zGRH3S2T6KWZE26uhwHS1AdMwmDkUuBw2siJU7bYU8JPiaPhu5sN3gN4XM3Ua5QtLddx5mKgaPZsXr63h6MpuQR",
  "key12": "22yuHibzmWVF4uMDByjNAXuBJtzQZkitVK5kqX6kq4p8Unc96WApovBCdP6TPbFWD5Mz8nRLGX1rCGvgYKo1imeu",
  "key13": "3wLGukjhQX4Rhu1yakLQm3rFJQsKu8GFA5ptMzuVLqHM92ANNrTmWRVFrYtwzhCjp4TX9kMnYqExBEioA4TG17Eh",
  "key14": "4MU1oCS5MUhT6BpeNnVbyXSEBy5ausLwA3WaARX8rBQDGmgeES968XRz1X5gSSVrURWnmxoFA9zQbeVQuaHQm7Fm",
  "key15": "5hnvVWPoJGR6vr8VmSKf4HmV6M5UiLyYJ2BJCH6g3fyiYbNhN7gASgVcoCqaHrKxb8jG43hMdotS5eTcq3rgPYRG",
  "key16": "2W4GDuEi3VCQyN6B9RKGfjZKCqCE89sNsagkr1i2tQADxeT7M1LjQ6UP4t2UddTwLzF1Ln7caNo6hfZLw41hCpoE",
  "key17": "3kbWcjyG61DFcaZW1LMvYgPpwATt3E1bz6sfCUFQXvPh1PvP5Syhr7mrbx5bprnnj8x6RMrxdXDccTZucW4sJHNB",
  "key18": "2as6d8ahADuZDbbBXQS6RmLBCt8yduD5y1yMrmT5KGg52EZtn2z9pKWZBStNmsEe85Vp5rA47BgE1i8zK1RY5jSq",
  "key19": "4EeSQEtuFSYR66wckNn2ZxVUJ4C8XBi18jftThF6J2vvFrnNgvEeRNG8ifykfBUBrBCrN2RNXCYXFqGTMq5bum1x",
  "key20": "4bbR5S5cNdPk7AHG8fXiUr9G97b4WiMDcZwD2XFJqcFvUbEmr5LV3Ebi2cyan27FszJWV5YwfAT18aaWu3ARCLD5",
  "key21": "4fhNvEMwbtdA8nx5RqhQ1ZqdCdFTvuXUTwA1paRwJm1j16pjHQPBBENg3vJuXCLDqa4trxCpLFVPQphPui5wDGAX",
  "key22": "2izgALoVJEvxMq1VYXsubTwpp37KFzWd17uQXkvCt2d1t5EJVYoUWedvTv78DNGnt6irnfJRXDFN91wqQSPr4w8z",
  "key23": "NZUaVUV9ZKn333ok3qvVy8w1AS46ZzhFvy2ah59x6EGoXs13umE9Br25EgENEtdXL1UJR6qSLHQTjTRTPx2uF5z",
  "key24": "He23gTCvdcRLLSJ9edcnrhm5jLT6ZobPCuvsEwiB5E3pmTfaV4Ridey5r8D8HbJsSUbDvUXK265NXQWyiYZhhSs",
  "key25": "4qE5B5ZEVs9FxDZyzuDicJszuc1GDDdg9iC4bJU7dsj7ckbXSQxKW8thdcWNxptcoVsiZVn44FcVozbRm9tAbbei",
  "key26": "5pEu6qY3iUK98d2YBnfCWde4Zah74xwdAuSSCER1w8odaX66t26VqyUqFzPAt1CJ9iRvyjXQfgqcFwwAqUWk9UfX",
  "key27": "DVD3TFHqXAKFNmeN5rhik1vsxZyvUUaxzhgYvthRNwhxucecVYDNKLCyNW2WFNPFfredrZkwi1YKFhKmifTzjok",
  "key28": "4mVNUgfKgDCGnTtd5syeujAyLXMhFgGmdfutbsjXHcBYeQ9kdw2NMSVaGkhEmwvappw7Q74pmJ6GG5Ac22dMCnwh",
  "key29": "2ANsKhCCPbyfPNjbsfxvW8H4zmM8VDwwXJNyVJRn7B84yPSyM4zDnVVjBULKzQTnRzeJTxMq2tPSzzRXX3uaM7Js",
  "key30": "3Qyc6mrUemUVfnc2M8364Dcm4kKPt3L8Hosj3yYHCnHRzfCgovmn2q6V8G8SLQsjHmF1iWLDnLbkCeGKv3TD9HXm",
  "key31": "36wbFAzXxzpSYYsGwGcgMuZT4UiZAMRgE1PEU4E5H2aoscp4tfAndd9bzgLtgKnYCLkBV2aA8D7xDzdYh9kqJiw4"
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
