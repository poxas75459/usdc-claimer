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
    "wv7T3dPWRpria3XjrepGBGLC7FLmbYC1PTievh5giykvBseKpmRzSTf6hynif3jgd7WWkZ64BCuXG2ngK2uA1y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnaEHB4tsNkrW57Jnz5pr6e2afDsm5KPWYaCYQsixvtd1BGnUCe1SmrTfhM8JEMD9YR6XSEoF4ijGXTAVVJYUAm",
  "key1": "4GQvoUVLE4c8ypeZhCejkjqNYJMgy5QvNYdVjYKTtg9aTcLK7rkWw3UZPFU1v33kA7VS4W5LFsTuY5kBHQuAse19",
  "key2": "3qmcsSXGq1uMB9iNqbTZQGGqPKV5twsqQWivJmuXCtYSxKZxgAJM1urP392sjEcWGFLoyfKNeVdcS3QRbuHrAumv",
  "key3": "4Fe166zKwnCXK5ADfcqLP9BqpV1NfxDf7y2Q5GpKJr1fvufxpJ7vb9hiFtBPtAUPkXVZReoDVnZBDpbFSjQjQZnZ",
  "key4": "2dCpoDgpFymFotYmK7T8TDrcFqNXVKP2nThG5xCTuiDxBdxg6ZSf2wP2mztu2QnQHEFmGjm3dQszV4uSH2A1wCb1",
  "key5": "gDf43xrbo8bXhQnyw8ujeycC85ExvPamkpdDCdij4hyruczUhrivmhWix5Ng2AWsGg2V5upgwCmKb58HFziSKXp",
  "key6": "3X7tXwDgJ1eWPBGPTzSBR38ZruPdTabs8SQpSCU7PjrapffXUBtbdpViKJ8iY5BrfvWuQ9FkwadjCyyriRk6D1Ty",
  "key7": "5SHu9qeNN6Uwe8wtzLv3g7dBnxtSf76uMBzNMwokTjSDyJn3zsVACSvE6jATWvvzM1memiX5CeNJhbnFnNzT2AUg",
  "key8": "2vxAXpgMEQY6gU7PMgGHkhLEjQ8Wzo5Gw4D4Har7s5XornG9U4jKsGeGP3xfCS4XjU7ng8cR8EytL5fKBmmPQca2",
  "key9": "4cqtbcHK3t6uVMPKZWECmfLFShYyk3o7213SCNWyjmQYp6dX3C7VShH49yqu6xk292YHYg9LLpwXhmgUFMaMsPsu",
  "key10": "4zddswyotHEHM6A3ucan6inyHzJ5TF5x9FD6Wixr7ZNHWdPfzUswByTpaEDwRB1gM5fKaWxQJ7zmFiP8hQy8DMEj",
  "key11": "3hNPyjqWT4EcpKpLDG5vyKTkSJuXZfdNSqq2hS9XQbL2jUh6GXqx8WfByHjQ9uKfbcpAtGA71F6BmGJEoVbcDjZw",
  "key12": "59id9MT1Cyy4WPhUPiCYoVoRzxZm7hLYf1ueFetMt39XuaR9sLTSXXHrm4FspbobofdmipXTh1SPisQRFt9W57zU",
  "key13": "5Fi6HU1QGLCAXU2m2J2z6yBt8z1sxKV7vzFq3WAkMLs6J5QMkiUawsAN8cPdbHv5MxtS7iFyump756JHAKDek2tu",
  "key14": "2sknGjQXYTTMBzXTjtQQoqi2kX9M3G7TXCCpn4x9wu3YcxSeakt1EEXuGnU1vNd79tUWycsTs5AJjU8wHehY2k82",
  "key15": "2ihBAU4i5TazyoCbHY2466U67mzY4YXCrNDMDis9jhS1eze8TnJ7ppL2V1PTRNwpPE7gwtvcAa54sgpRikMsZDuE",
  "key16": "3yZJbSNBAMBo55a8P63Fn1B3anRY7iDqY41yxHkCE7dNx3zEYGTrenazwmzNm8JBwyYnuAMi8Cgosfpoivu9vQwf",
  "key17": "5uH66fHkBYt9Uf8gPSGtBEEiVgDxe8Gm12ZRv9VfmgCSYwjEiDszCRCxqN3pUWDazRzba748DmYXVt6KPorbGgV3",
  "key18": "4ipHh2SVQ1puw8qAHEUVg8h52BEUNYrGetAoCvyEMUdaNrHwbVXgMhBH468mchq6yi8qnctPoauxzdoE1rQQ5PMu",
  "key19": "338wmxERBiDXdMD2m8dbD4FpF47j6nU2jhUg5YetJ3UQGTV9FZdaxShs2JxyxiStQqZvvxpvgNS8EvZXm8CbQfWo",
  "key20": "23FpVhZM8ranoLDYRsDHFsFFdeUK6EijJYnfH6ehdzVbs39dkv4WfJdSYVMSLsm8GV9fLSD7W8ccim9npNS9r83U",
  "key21": "2xyjwEJBzPcmdt9dBH2YV3pBRke5im86Sz5HtXwrqMeGYmrPCbxZnXe5wcDeZfwUMs3SJkw6Cz3i7pafxJ7tQKUK",
  "key22": "2UijwJr2JJA3PKqMcvBf1zWR6xG2z2yLkFFP7jxwreL5eAmSb7YQFxiX8Zyb9QANUezqpDnDNsdT4vw4JyY8PdYe",
  "key23": "5LhLWUfFTZYUuSu1LCfHJZnZfihTYiHnoCcEAGScTaExD1BiongYic97rVUndpcFRGbwt47tBj4ysSt4Sh2zct83",
  "key24": "4CkMb9589tNRNXXqrnvwkaxqYuoCfcBJHYCNfUyPMM6nJxAUpLiCLqWDorGm2ogakp7SyrYecJGRLCXUDiC3FGdW",
  "key25": "41KMiqYMHG1GsDRjvzPuwZx7pN6AuSPq6f6st9AHzgPKFzALCbhRdZuTMnGZWwkGQaoE6mCaP67WRd13SkF5B9GU",
  "key26": "4fAXKWwxbtQfdc74bpB53JKGSNPjLKUKHt8PFJGjAEe2AJbtN36UQ32UpBmXGv1Tjvcqm7NCPTe7r9YcBhistBPC",
  "key27": "2rwne4jnAFhVrh7xn5ifqrYKf6rDxLLtCT7X3NSyh1cmU1NCN3NXDTigR153URyY5LdvXZGNmfFBZgKeNNcU8sGf",
  "key28": "WvTwLkMrPjcZRkfYdczLeYbJaWTB8sFmWBZsG3sHHiSvATkV3GMnFezgmkzBnxA8oQVySFKBJG97DwcrW6fZ4gM",
  "key29": "2zWwJpE43vBAjLyomgiQABPi1NQr2Wzqfgt8ojLAjHkaPZvvabW5Ffu73dfxuvvj7SPYBi7Ue6ia3UjHqJdKUxfz",
  "key30": "4mbZzTkMbNmCDw7Fo6vvbK8syLzsSeVL8Fsb3qonaFF3Rd9CsuptPg9zyMBKcyVS3Ho6tPcksZ9uG4BCpBW9yHtz",
  "key31": "5X5DL11MmHcWkweg5h36TwujXnayYdNweb5VpWhA7a7U4tvYsGueQxF547yik33fRpKcWdTY6FXSnekuvr1P215G",
  "key32": "2XCRkJTYdXQt9bCTWvw3Q7wfucRAPKLYAyAY6EqFLc7CDfoWCVRstXKaGbVmMQWvzjBCMM18VzhoU3GX6bHiDsZB",
  "key33": "2BWRQg2XC2KPLf5tKkirbG6sAZyPAwx9siZzrz1hpUBzY3KMngXQYB6CJmnR6vPbhV3r4vwuWuwNBTffqLYTQY72"
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
