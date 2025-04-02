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
    "2cmnmfGAi6d72Y13jMtAtwfmG82FeKmiKG1m2TNgahVbdN4z86afaj2b7CuDeerwKBrZrZp67sd4gdKrwnCJA8UW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUVTegn8Mnfz8Ss6fZqHKQ1ViXPTLuBA76gTrteGQsxL5L5ZfXDtVVLJorZmrJpUxkgsCqjXXGKs43yRkAk3pF7",
  "key1": "ZA73cVb2eVZwkPBxZDsUeK5uXuU4ZfDSD388hh6EpmrbBw1mSGmhWFXit4LSuUDkx5dnS4wRjq2Y4fR2AA1nfNr",
  "key2": "4PQRwUcYTdMzhC1cz3Bj4wyoA6ChxBgSMDXRMsNSQ4yrchNcCgJTxnHoFCbV8Nf5MCrWdXbAaUkRoLoYKdP17UUL",
  "key3": "2TG4RiH6SqT2DrYHZQJgTA6YunREUUDC8xAekJbZ1N7zr16ucGza6D8eH98bCQBeQ9Qnk6sHduU8ZEQ48n1NyuLE",
  "key4": "2A5drmAkyMtXaPcUmgEJ7XPu9Sg5CX3k32dA9PsLvbavSwB4D1oafySgVtfLJJQsfSJdAm8VPdKcdtC5i4EkaCYM",
  "key5": "3rDi6K5wknTAqJbDognyibqDdxMkFqSRcQJA4HTNYuvTVQfbwSLKgF6cC5s639fWfEid68sFkPUtX4rfbiYR9q5m",
  "key6": "4HZJFzcQKFWKB8TLebkMCZBJwLRWE2gsJdVhps7M3nH4E7HVU48enueC11bBZ5YZnq6eQpuuFZhYC7hPjkHzs2gj",
  "key7": "2hQCQTFKDwPRRULjD8uAHWfFZPSF1iaenok86fbju46G5XibtyT6DHs8HB9tE2Mk9eSisNysRjXpGzE8BjzumHvV",
  "key8": "uNT6ox6nmuFU4BumEGcmmnnuSCyVrZjanM8vBcvAWRtJjdkcyXQ5oYqtzRAsKeQGzuxpjMaJQaJyv5Gnnd3aa7k",
  "key9": "58AF9AqYQg8kHeBv4d7zZ7ffvAcAY9Rh4xEeo4ZfeURenK22S4KWCVMAgNsyJnxwMTg6WwKMmuXkRg3wEt7hP3zz",
  "key10": "3tv9iXUCmddrEHnxobpSpNtGEwLbkre87yKzK3T9Xexh1bN2hNnKbmddnsEh1mmKKq9wkcYqw2ajiKdsewsVoEHe",
  "key11": "3Qg66equ6Mk7n5UT7PFWoK1bCqeYnFLbQEATpw9jvJFdxiTohoWFYJuWyR3myPM7Ge9fdojai19vyp6z9qnfu6Z2",
  "key12": "29ZaEsG6NhjohZ6jZuUFGVVCZPBAPQF1WjeBm7j8m4fJvkhmRCSzjnuhUnmxjcaDbxtCN5QWU76f8Hd2XQTqF7Hb",
  "key13": "32XUvNroTxu5icwp9EvXWMD1kqmAPjx71x3KEaarC1gV9d1v2XTzBPk7x5HB3WPMPWzFfKG92rXbfGSyZnzbW6ph",
  "key14": "4NFGSsDXdqmHzb6dENHMq6oPxGR9yHoEdtYmFNm6pKuQrzVu9sL6ZKtD76vLhjv833rxxJE11ZWMpU5tzh7YVv8h",
  "key15": "5GHjPRGPehLX53UJuzMED9XUoMKTwx5DBHVnepYVvVmVwpATPDh9uFWewqxN7iXbucrXL2PeRQhszxTBdkFYvYCN",
  "key16": "iuRzdCikM3ibRwRrC5MkYR2YZfcc4J8yg1tCjPfjfBP36XGK34mFSs4zXSLQTUFboDhdHmCzkoE5dYbqXh7kA7k",
  "key17": "4PKLXdghHzKfrKJZrHBW5neMgoRR8aCR8phebE6uWb23aQe2Kfywk8QB28vF1tyTe4xxVXTNWa9xh49RpiALDDWn",
  "key18": "3mShNAosQS2DkzUpAS5K5nSiyE6YNXDVJV2thjpUmuGKiKb1jx3HcL1BoF6Td6v2KaQyzgyqRskZeggw3SyyJzKf",
  "key19": "2hvkeJarpPP89fgwAh2KHDoCwh5fuGsM4foiQXkLQ42CCF4N84zQ6P6fmUKDJiKKmGDMQtWLd7YSjvdLrhca5gHa",
  "key20": "4C1YS4osM8NiZ3bcZz7jBm8qpLvDTkgZbgXp9aSA3N5Gxp1Ds7GY9J8YKD5kt16XRk4Bj8jRYTSetRfWtZMYzR9N",
  "key21": "42vSfyy8sp1qaBsAeqz29doipDcp1tWe1v9REi7RgJ1bcbVoLBsqTSwU7M1ZSjunk925qGauAptsBZ1acrZPDFxV",
  "key22": "2N23RU8ML2wwTbwhWbK19gnXS2CaJRLeGw2dJc2pXc7XPLhuAJahpi5bmiuxW8MGEYR8rWJj38iK2UEzYqTi2mC3",
  "key23": "3bPJVVvZxYCQstRNsKsrdpGcD2RdJZy35KcEGweRsKRGzgZqXkTfav8UP1wbhCNu2zyrMWW7KNRs9n2h4kJHSkTN",
  "key24": "5UPH61xq3LDChHu3xuZoWXkX2o1Sftqhzb4Ezb4aRs6cWue2Q8cPpjhTMESGC3xMUkFSp9FAtdamWyCnmCPZsom",
  "key25": "3NfNipmcUT8HEMD1Ddei3Dk2HSJ8Z83NHQ3ihh83sbRJCqTbrjWBMdSXFiPojodWWyyh49hh2JsjtaPcpDErfrUC",
  "key26": "5T6DzFnFAfnT2fBSpDKM8NGqutiw4XfKg9ES2DfggaZQEfT5D1YENUmvwZxyntoq8f8wnvkFYwYhfgrh6aSGUnQw",
  "key27": "2F2bcL1w7eK8QmaqNzzR7Yei2BYHoRG71qj13L1bRDomre9AKAdEb7jc7MWMpmeAgDarpseqq6HK243dr4MKR6AA",
  "key28": "2jWevYs9GP3wV19UZvoNUMxM63cjQY13DD6ab5QgE6WnvEEvdWYFbzgYhH6NssiUSSEoRfCRG6mVGzr4JLrXUp7X",
  "key29": "2hcT6JxHySZtfBxewKXEVn4MgKLHkFr5CR1C9ZLuJrrHnoEuqRsDjrTtH4PsJ8F4zYSvVzzF1Ev2xs9oZ8H2cZBH",
  "key30": "37fCjWWX2AFpDPkQnrQuivZhXWX36PLcHtUaG7oKtjbr5cHVFijXBEkyEKZ3uAdDp7BRW9mQ7XT9jgn8HY7P1PWK",
  "key31": "5tkKAVEuMcv4ejzzc969chABPCLBSazFnrzfr8ZDtq8nrHXvqi81jgiYbsLGW7QL5Ab5x7daEmWj1ab6qbNgd3ZA",
  "key32": "4b3K91p4R7GrcdPwKNTWbnXabX7TMgrjEJRzk8J7MQYXATyDV4PVoNMGcmfKpo2AWw2fc7jBJBwr7vBn5HSaMuWF",
  "key33": "br2ZDhdmwV2WeK2RYTpQ5EidENyZct2W8nG8sGUzNc54dcsiWty7zU8f94H6Q7WQuqkJFkXwLcx1rS2FRB8WBHo",
  "key34": "5sEPnh7ZePZ9UR4hJB6f9kMV5zEoZrF38jnNzJ86JPAUyfxSDE1LYgFHcXo28ZnKNnVfoGmwJVxxjngct1y7osxn",
  "key35": "3MYDi7puzunbaeztA2edeMPptkrF9bULXy558rrzu5YycFgMd5aXaPABwvbujH88esxUASb6mQkKn58dTBQK6cUg",
  "key36": "358sasA8L6z4Rg7PQgYsxAvbivwUaR8ai7yVNgTaqHwJKqSVj3BAhnQp9tEV2vqZYGsKMTAf1Mw4iCc37z5eZgXP",
  "key37": "2GHsom4zLQqxsia2J7woXoR11X5iTyv5WVajbU8p3cKyufURmynmveH6J72LTpdi82NyzGK4KT1RVAmwJHWjoYwp",
  "key38": "3zSAkYbwsyHEJq9pK1bc3C7SH6KcnvLVeaiv7kjRDNd22enmnMJCxr5aAUjdeTeFQGDKM3E57rT6xgQdHEqfnuuM",
  "key39": "5MLgPzwNF8cKmVBcTgYDW6PWuxe6tz1tT66TwXGrJDZRUN3rDyZsJ9PZLgrtTDGirEANXrei4i32WTvTo1MXJryV"
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
