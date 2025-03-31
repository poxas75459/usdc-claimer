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
    "4RjoAt8ubDrixTkiwNzz7S6c6Ap4NvKYLGXiwRKvKV87619A9jwA3gHtSpP6pPWAaBw5rQyLvHziwnrpVZvB8cE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WhLEKYHh2zHgnK8vzgmKbehm6TRm1uA65P2PFXFMtJQ7WbUsvCpNy7MA2SQx6sWS93LXYddiyREBcUmTLyjcG1P",
  "key1": "2ffn9jrkR3rxJiLLTzu8LT7XWa2HYkGrdx6NLoPi8CmVa8GiXz44r13xxa4ZytdJjCzaysobeaMTTW4wi1qCXuRW",
  "key2": "3drf2yBgChfsjwbeCvGj2oj5P491JVvD4xYwYQrLcuU4NxueaJi4UJ33JDYjp7nqU4rKgaZq4in98BSPzXyWFr6Q",
  "key3": "YApRpsHinZiGSxhT47n3QutLN5GG5u2njakVowsx9wypBHxDGvspVt7uVkdhg6Rfh2xHtQvooEA97aAYuJa9Uut",
  "key4": "4eUxgC5i1rcc4AbSff4bKVYtK3wVTH2i3B9UesAX6J4X5M6AB1SQV9DD3DagFdpPrAVZmVK6ZwqR4wJe6CfsL2SC",
  "key5": "3b31xBTURuBg79t7cDyes85tEVAn8E37kgv6UDseELkJGSs4bbjJc5bz4453bTUZJwvYtVpKRGJWcFe7EZg2h6oR",
  "key6": "4oPcvZsQccEj9xjzURz7TnCU7Sq6rrv3LSoUVeeTWoNggauo6XPbXAHGC6u3gAXPLbK6W5LPsTJEf3424vVgRYf9",
  "key7": "2gzgnzRJeRcbuZ6rCtosV3Ws5Y7c5iHhBxVgUbspNVBMpCu77EnqK7Kqdbm2xy5S7UD9K2cayUuKD93crBbFTpEx",
  "key8": "PbSnnD7ARiAxzUvVwasohXn4qyTWP9frZGQjR7Uo85RXnfRq16R4wZ5ZBrNqjHJHdoEFxxK8izFsoqAdfpAn4j4",
  "key9": "4nSmVEaA1ujLu2MUnWJFdANpLGG53TUBmQJPz2GQxT5MEWGT77rNpvm2AXehZsedRgjADR4CgrejSebYRkdcc2Rk",
  "key10": "39K71vecAGcq7NbVDEUNv9TqZAErvztdJuCTyxzomfmxtZoxrw4j7bXGawRCNzmgj8rk5bS6AUxt6rauX8qmvwDL",
  "key11": "3Vv2siFdMDhw6uqb9p4UagWevnrrEQmywneucHPwTag2Ai33CbPxpiYm8hzToECQnqTXL9sLjN1UPdUqjwXKZWMs",
  "key12": "2VbLHhCJr4v6mAmrRn1GDfxcRnFeWty4hUX7DhVnU4dwLVb9pZzfpmaUFxgWZ2jkjXLz3MFzx5jPWLqQyWMrGUDF",
  "key13": "5xKXu1DRkG6CV34AEgK9qNZWdt3XzqS8QLpBAu9Ey5Adfjh4PXoGCojNEVv8v79m5KM6m5RVJWS9tCLX6nYNJuLZ",
  "key14": "ryhApZ3uEc9LnnEaya5yw9rZHwREmt5oPCXyek8pC6UnmgM9kYSAUuK5nDBPdDh7mhiNLKLK1GuMFfVpYvTJEHY",
  "key15": "34wiAy3gHte3gQLF96kiGs8JymDvTuqzLK6m5w3tP7BpNuCxABjVyyZ1vDLNpkJ1p6K4wy3iicADCWNJu9Q6HZbs",
  "key16": "4pujXd5b6mjhmddSiG4EfvVq2VP4m58VmwdSthGGSYGo1G5XiNWTdPXz8q6UKhiqAMt31VsXPtUaGkjxhPEhrJdL",
  "key17": "KoEjwrRugBqTAHgy3DCBiLgf8LK95y8KK52J6uG9oG5jEJ5VqDHWxWpiKjPazS9g5TMWKAM7zZBCuz42cWM1PJr",
  "key18": "gzKiPmMEs8tVmohiubUTQyKBcn5hWheBZA7ReJr24kMY21pH2xCMBiqQfs9JKsmX6JyYuuiyD8djdLN61WcL9EC",
  "key19": "3Mxa3NVrF5SYB7u9NJ5HjkwaZPAdkmvN6PdBNRx9UCF2t8hark3tSimMi4wDPFAWfFBJeYWFtgHnCEW9CQE2yzdv",
  "key20": "bCJJqPYwmTPY6Lb8EKJGsqi9EzLoN97b22bQWqDkoFZxEJ5fZc1CkX3mckzLiq2YZKy6whpUMrwyt8ECjeWPSEp",
  "key21": "3iTbs3xZKvmUFNvTt9CgiS9MkEhT8nfLKz6ULzEdWzepzNZj4bZymdkaG1tTDZX88AKJAMUhVMMMtFPPJgSY2KRK",
  "key22": "4wVPxMs1tKGdA5BcSEyxG5FqMRDMYE8K8Pg9KczdnX2PqrTwdVTGumrR4LWa4snYTKKxSUXj35SVX79wBvWops3U",
  "key23": "4b3gFMVQGaPufFFHWftxXvBjACnRmYYmrZ7DbeQG25h6BSiPGqcn1piLNmtYpAykNKsJgeEai2smBk1vqeQ8tXVn",
  "key24": "4mRwVB8Ao1tgUAcKFzmteWbXgvGVUNq4YwtsY1GU6dm8aDPMFYDLg13Xvzgd2h8UgDDpqQe3NSTr35iFpxMDbU88",
  "key25": "2om4gSEZc3inTQnqyTuct3kWHYd6yxCC5w8jj8DyNxzZjcuixgJtvMAkHcK6qvRpQSigFNE9454dAn7tHaCEMh9J",
  "key26": "DTxZkLr2SSsUCFdtx4mPEJuniQ49YtF6nwp11CEb1HnwwUPFwobTJj1Xu3vhYXJarZwv76EcRGTugfgWVTNrRXQ",
  "key27": "5ksEjoLHrT7vSmiv1YS9VrxXSNA2c7xRbjuD1FuzEkE8SsMjqa1qGZJmGd4HKasJfPiQQqm3uUD55kHNU3QBgsd5",
  "key28": "2VkdKnn1eaNDVobA9okhikcdgNsRVHVF73ZMEXPsgim1LBX9TAUyv3XePthSiUkU2TwmCFyh22dyQNMiN5Rojiw2",
  "key29": "2rKfSfs7r9mQHo8SNcMKVhDRTxcypoyuNbtxCRteFF3t5ZEqKcsKYG1CejNwP6S7mTS92zAgaV3Gii3CpBo53yUo",
  "key30": "4CYurecqf3i9xqPXWsZLhfdZMvkqyGe1H7XVy2bTBEGzZ3DozhHrAXxpwQxGFLx3XK9jdZzwnzuNzzG3wUm2sw6T",
  "key31": "4c5SwTVzski7yVgPV3ZR5y6Jt1rR5oTDtzZeXiwjUveJbTC4Xa5vqR68VsfnkCQGbK1kYVyG3eVkMLjwuXeuHuNr",
  "key32": "4EY1pQPYTTDN87UPRT2htw7N8abwPY3o9P8MF2odyjp6THzkBov3nNBfvMJAmkAajD5ZGQ4VnikgdndLW1zGVpPN"
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
