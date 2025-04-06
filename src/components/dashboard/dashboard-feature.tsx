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
    "45RSa7wuuS5fckh6pShwssEFpspEKhc96PcDHi5mtWKrn7CUtXsW2ohRCNhffNuh74ZKZ1jZvHMwEtRydEa2NQym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kWfqerLooqS11ux1oRdXibGeL3K41uWSvqcHPPcGy6xRKVYHhsNTQotnfQFKv3RjUVK59KSXik1TYy2cAnQtW76",
  "key1": "2AB3TNE8Miu93wiwcsJVHDA7wV1JJ1zEgJs1YbEQudbqyJvuModoBmEQBySuPrmEzMBWJnYR16vPVgUiXAZhubta",
  "key2": "2LDjJ56ZsgnAdcRcKzxFqKDf6Y8uL2zAbHaYDtAxgCsMnvzXj3nie8G7dVYkxTUr7K2Criuorn9m6oCMsYbuyydU",
  "key3": "5ZhoXsRhyaMn5ACQHF8eJbrY1Vcz5UJ1hJ1mqa2zN5p5TS8uNHPDzA2xgNmpSpLwZ6ZW8A6VY5mxmuXFSzsH81yi",
  "key4": "44uJsp49CgfDpTqb6HzFthsWAdEnJ3do3hNj6EHrFiAvVNFGoGEUGdkzqSjgX44MyQZF2M39PmcN38FQyH6tXZuU",
  "key5": "44iFHDHmY41kHcFyUFP7rPbAyE7BdK9fLDTKqjCT4iS3tUfJUnYY9ED2PPDNwwSAB8ZZPhx1kkmpCZQficrD8M6a",
  "key6": "5WFfYLfRRwrkYWrQBLU4snQxnissZxRVFdS6voSoYBmDaswQsph79gGcCFT86BcGwiA57vFyUtqtyctpcdLK3Pcx",
  "key7": "5bu21228jZQG4uWW4H3sdmLYnjSoaNXTWqGaseDcm1qYSus8B9xRfMwooyuPt637KspwMWZkKyteDmHrjT6GvgCj",
  "key8": "3xzP7hTRGVofYiV1VDRdxV7B74RaiX71sghyyC6moyd3rksdEPNca47U1jta8A5av5so9dr8BLRCdD9b82y6pWrf",
  "key9": "4PwQVvPYcjbfd9WmPNfU3fTsqEzSvBBz4qxDa9rfxsW8md3sv3biEGTzj6mbbYh75qgduSbqbHrkapYbmHFZGvpg",
  "key10": "wh9MMSbMQHxvyE6CgwAHCMKBbwQKxuWu2SJszN5xpKNK2ToUKGPGEyyAKr2P3KzMCndgFmmmHE8wMkLJ5KTDEYx",
  "key11": "MmGimU751fDPVhExaCs9oRaK2MFj9hxqu8b8e8uG7n4hvdrf66V6LVEz63DfxoRRrP33a3Eyk2GBZvksEzN8VyH",
  "key12": "5sKqNSdDJmm3BT7p5VF1MoTXX9MBjWgqjoPYdT29VmKwK8GEFqCuhjt9m451KKcLubgjfWhV8oXgXmer4nHbKgPC",
  "key13": "3wqarQ2tqfh1jQcbLfs3m99R2YtVh7Lfhi12LUMQq1nsXgQyu7XjP8Y7hYdKT3BrjqNmzPTXUU9WN622zmRyxdhR",
  "key14": "5YA5HzWUq9nC9bpSn7Xvt6na4iVEBj3Bv87DUZjhc1QqgvLJYc4qWCDNDVinhCAwRFrFYuAWNa4q7CD1nrQvRyjU",
  "key15": "FgDKroCsh1V34cPitW1xbkzeozh8cDYeJ8g2Ua4aw4JY49wksveYVZHzkFvzwuoa4SFQAvrVaTjH7hefk7fSssp",
  "key16": "3WS2Hm5T95ZKEo2Y3i61B4HSWjKQ9DLbRRjikStnbQ22HizcEj94swNS4R9fDswvudCred6RdnkHQ9g1DKYrsBxc",
  "key17": "2nszeDEWWqeF5GdGZJBXXTvqDERR2ThqEj9qF2gyb2eutSTim2g9eDYPsyKW9djrvxqcuwiP7iH98neXpBXYuoZN",
  "key18": "4Sm1tg2JdSq3R2iHbccLxr4X7kmPFtypv8iKLiBmhVz6huPb2RZLzA9uW5Shy9VZtZTpPR6hKbgPYUdJgEg9qAmU",
  "key19": "2ttbdZNw7kTgUa92o6rpWLdVcyXcJHR7E2u48A9YNQfymRTSRTrVg2HZxgozeox4x55VvqrjqdnjiNK6oWHRCrML",
  "key20": "XwbvN8Hz7vdu52pY58Kw2cR59W1W3vSW3itbsPFe34TnZzbp3otZq3sME4zxnRr8f387Link6DjtHxpzYo2XhZC",
  "key21": "5ZNCrdgmmwVr5gqmaN3FbhcEFx2t38SyAycVdsVRFJ61ALwETGQan5p1mTNN9mjBZ2m132WCnA4TH6rqTTyNQHq4",
  "key22": "63sGcQRjXc8BekABMmJGNCPbHx5csh8GEANaHszpkhiKsEuKqpk17YGYZDdqfvQNLkeE9kR6WzUFoCHF3RDBcHzY",
  "key23": "4TTpdmZgFvkeR5evQJMbqbnCtHi2sh1pQknLLbGjicokzfywzgmEjFrKP17NgSnWBoSmb7DyqfFaC1gLzfvuikLU",
  "key24": "62QpA6oBXNezcyaaw6VSY62Jdp7T5PpgPYC9cADmKo3JdqRkWEm6s4XpPyzvayFPwRXoS1EpSAwF59ueyEqA8cPi",
  "key25": "5frVFJEofJk5WeYPDwfX2Qoi3VXipJ6YZQjw7g6rUdEEPUpjdXiSLSAUN9x2HBnKnSyYewKcP9hhuhpKFeGnBqtT",
  "key26": "3wkpMuR2P6KWQwWZ1g1X1hDp3Se39iwqMTPGyWdWmtBuERe82T4JA2v4BzkjJipxJToECbJ1LwDWc3nSfNMbF5ua",
  "key27": "5kFVAGomnTdg3K2Hbb4yoj6aXe7K7sVMPi1umkb7MLWWAdQBfvnQMEKVr3nLYX3rPnGabyAucvU6Rt81PT5EXqSd",
  "key28": "5WkxmnTXmG6Ysd99nq5dayHb62kVfHGZpNde2t2YcjaLFeCEDqP5cqCiXzPuAab99USJ4dmoZrRg4akHdmT5dA5x",
  "key29": "591ac6cs7tSzAzqenbGenKA7neMhBP7yQZBJifJtLHZ4FbkqDf11os6bHcH2NhoDj88tXP6YKNVaRhVgd96h3CT5",
  "key30": "4S99j54aFR7q6im7A3iSb4Ybcgg2tyz2DZJ8hzHpzkmoqNCg3NX3VtKbCcwg9GpDVwrqRexvgFc7S1UyqtaJXsA3",
  "key31": "27LMnEBWZ8KHqvKWkm8go96uXiBAweVi6wJsvkLBK1GBkNWPSW9TE9ZBJAhAQgFVpjhxgSYjhN4UmMPxUmSgSQBi",
  "key32": "66bvLERsTvYfENCTL2AUmEMdXuzJ6t5e63qpxccniGinS1nRfKh9CeYpGabSAVqbGkDNzDWhfZjhhMFfxwoqEzL2",
  "key33": "3JgUVZ6WNGtekuDD3RUaLUjpP5WoX5R4G1xaLmhFXJMz7dcVTN8ek7ATBTkaNMRyxBKBPugTL6qRNho1AepoZ1ad",
  "key34": "3s18WuMuKPSr4jccxNABfDKBqPyVp8UuPHNFxEvWBdP59LDhXpVtheDW73S3usVSons5ADs7QNnsMfE5ybgvgZ9K"
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
