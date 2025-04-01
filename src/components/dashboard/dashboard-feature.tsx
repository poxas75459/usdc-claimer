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
    "555E7uwKJwBHeKdRezjMPcmuagGZpkEyGd1qpZ5s1PTydWDhmGDgP3CaxB1FLupaodeeaLDjAKPFo6QfyZ2P463B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MarEHSa36oiG4j7x98aEj8esZ1euzMgdA2txF28iThy2bepYhrMzKpz3gWYJndDNfagWtDAwf2SZmdH8cgpxr7K",
  "key1": "32f2fYypPabj1uRVSKbB6UYjeaCP84ELJ38thFSMDv7D7znPESbsouajgkr5kmud7yvmB6AtCvpRhtKwooYXJbnr",
  "key2": "5jiYN8fJFYSrhhwzsrMCRgRoSUzhUJcSig6zo1H4VhYrakZzCVEujwhfMz3bFf5QFy5v9JvEn5JCEeXus2pErkUh",
  "key3": "qv8BMLSvindvuNB8UioHMCHxVqrapCwrb1J9fwwPiUvJxasaF1TNH5QeiKKx6nrc6KnQPZEXq6Fcv2sp1zX8Crw",
  "key4": "o6LXbDbsjPfN9aFwCzzwB1qnBqeLeSXVwRbumffcp6JVdxBqz6A6ZG8pSg652RM1g3HSDQkBZxKNY86RnKYXgZN",
  "key5": "4DHgcdng4pn8pHjAyrknuo8D7m4VwjX9kQhoRaKtykbPdA381vWM52S71uy8z9reXepuN5xBf1oEtKwCgQiQ1KKB",
  "key6": "3VDWUNmY9W4dkTGBzffZMiTM3xiKJMGJxPTapSQF9RhF3zNajEWe9CA1CY5u6nsWC6q5td8Aw6sPuhwyGLSbcRHu",
  "key7": "2J5zAuVMMsURRbTMFPb6wogVLJHmS5iSvNXFmnHakFqj29mSLtbPXe64MQtb5koaAMbgzb9ape8sfLBwDsFDHjYw",
  "key8": "3hjZWyEW2gh7VFnWWa8dtPtEnt5x2YzeoJRTQ1M7BP6QatZ6MBBccAwWzmQkaHaiLmZhtKYmKBjcRF2VzwvKTeZJ",
  "key9": "n7Fx8g9jB7ywG1YL74EG35t5T7j8xrvQ3VYNKqNB7aaoM2jzT36GdZoJgUvRReV7pmPZjoQBhZjNFG5SWT6LDSH",
  "key10": "AAebwY1JfmRxCRFcEP2huugFrDyz4nU8faKQ57XtA4qkG3nNT6DnpQ2jCJBLxi3NxpksxsoFSJg5o5oVXQzRpGs",
  "key11": "3TFw7vk4EPJZEhDuMbeVveadVNwLGtYchEb7R4AqfBR43oZfzB2kxoPHCR94C3GDYECXrgFEMjh1nvGM2oGcDNC2",
  "key12": "2M5L5iSxvtnNKAh4vXXhHdXxy5q9aZuj8E6hosoYvuihFnwuYYtocx76VM2GJ7NG76X1BTnqsu9gNbNFBUsqL1km",
  "key13": "4T6sMruT77JhiWiuo3XR8K61sZ6UwNy8agDpfbiG6PLcrJ2h3pZwB2PqUoYk6GadmsoKwh7zM7rmsETACNkRtYyA",
  "key14": "4qDcEmKi1Q6ExwP4HQ54r12eD5WJwuKndTGSbQutjbbrgUTQCapyLbirA8mztqix7vk1XoAhTaP9NDhxjSR5kNvw",
  "key15": "o7N8CY1APgzZk59T7eMcvkL4iUvEBo7DLmBfNzZhnFU2cW2YcwynnrKmTh5K3TaUG7J4SP4Hgm8etMb1RFokxJb",
  "key16": "3iTKkV7nu3PZnYvqPiquWDVrsYvEaRCewD4crh6KJG9VNR8ggwLp3MHoqvyr4Z5wG4dFzfL5Lxj3AkR6J3uaKmZ6",
  "key17": "3MwKssXjbPgpcX7DeSJnA73xUxJiuspmmETqohTW7Dz6qtLC5rkc5VwaaBFg8X3CozEUhXpfoYKdjDniuT1y6HtF",
  "key18": "2HzQ3rvnd8DDhRf1Ve1vfp3U4F7UMkaxJgVSRDMK3D7qwF4H9AVyYfPMCFnGnXJDVrVMGxfJVSLe6pAqAXedEfxr",
  "key19": "3jPpPmXnCmVNYoHw5jCZGP2BLBAP3vsYze3EVJqik7Gjsi6bVzpU2wu6uFXQwXEoy5qpupieUGHGrTCCfkJV49pg",
  "key20": "2C22Gtez7svF8b21v9f8ELhdqbfEQU23H1jE6LovQaEhwpiaK6MGty6eDpaxMArniLQL14Sg6gut5RaD6QDtY8WF",
  "key21": "2bUKDVVHGzH6sBNvjanx6DorVBijUgp5icPM1kEgyDYytKCFYX9FviiMb3cDEZmkRpPFSvH22ia3KafYkPKmrdJS",
  "key22": "5QYxn9CXoawcHCo2p2NQQdgQ5dBqziUTs9Mneh6fJDG5TizrP3Vjnarhoii6WFXs29tAwTst9pZBy3W4q6pYdmbP",
  "key23": "Uy2XvHUkH1Bs1qfL1SZVqmkzC3N18a63LnC74LKXWbqqjfspETAJ1VhzwSnudG9Z9Hnay5LrWbKW3xQh9GLxMsi",
  "key24": "sJmPQZSaxFT3ZZoF3xQao224WgV8E9VWZJ1xSMVT7eeF8fEhWVuASgUL6kRE798P1qAeM7AFEf76CkAhge4Smjv",
  "key25": "4mT9VvhRDgxMa5izBcCDF1xeVf1Fskhydp691uDi7C27ccQRMFGYD9maRQ5vM7mcomZvFp2LmSzDQt6q4emGPRxm",
  "key26": "3LiFdYmrCuVFMWBNh2X88TNmgVV9FDvqhG1Rpe45XfDcEanFsGk6gJhNKrnPG7rtqt3Q56oEd1JGSex2AJ5Qu9mF",
  "key27": "23Yg3o1GMjEtA8crQ3zFdFzjvqkBEeKwuzQUK6q4kdeKHXaGKoUvG5YV8cDwuGZfuhm7sr5G24rzmiCiVpcwLBVX",
  "key28": "q35WkGHF9VcNLVc2XuenDKWAWKqcU2opaTMTRgyFFhsApBuGuoDnsyztbEq3doZ6Pkz5ScTiqknDBz4cy6YeKKy",
  "key29": "HQWhvxqa7RFcN1CdtRHmvNbueEykCT2jR1NHVsg7s9tDBqeUqhMbBtD7ijQUmt7sDoqmQbvxZw2H6drt1iuKNGh",
  "key30": "5x4qKtZimJ9EvjqbaPbYzyeuBP4M9Y9hzvUVXjKRJaEzTexrg3AqMM9AYmY6gGHgPP8GdwFwuns7WWsa4h14rh8L",
  "key31": "3VNYLbCZW8nC8X28jS1vV4fk8EpYoSSMGh1kvjpTWd1QU8htHx7icNxfo5ACKNBPgEjrYYusG8i2soMyGfAoQ1YD",
  "key32": "JwTjcmVTtrQBoqxNa62zHzNzkioxKtGuMLjH93CfAswduzFAEPwFxZWFRPGvfc7cav4wbiZd7Ad6mVYmhuQ3tiC",
  "key33": "5z887QpGAXvGFqSR4pk187uzC5cHH65xNWNigiCWkFikJdehvc8yr26B8bnLoxJ7LFrPRGKXvWhzYT7z9vFxTASf",
  "key34": "3aomCEHJUHvK8rzzmiNThFnSqQvXj5R771DyHuf99JCt397w2ALLn3BnZ7te2af3H4w5GYKuApYw2WyadKS9BCNR",
  "key35": "4hh7GLcTumPPjskWkSCH942RGACLZQk6RZUoYXj3LLqy7uNrExpL7fgiQCNpb9iDUcLeJfMvLcn9FgZ4y96S89ym",
  "key36": "2fpDg4h5pAWTLbYs6NySq9kV89gwfqSj6QzDQWNuj68b14b1fpSj6Njsm8xpUnWR36UAGYSQAoKxS9u3oobmfpe",
  "key37": "5wQ2pvxKXRC9d7xM9rbZWEPjDGYAAMjYPnDXjSVXE92gFpBPtK2mqd5xncazmcMBaiwS7VwEdZqgudgXyz34LNWR"
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
