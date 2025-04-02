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
    "424TEnTW6BwujdQKZ9mHhTMKwvXe7mQqmWbJvHe5F1paprz53aCSVQZN9GMQ6ZnR39AKcL2azEzj3ezVVAt7Jg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u28AwxrZxmF7r84U93D5Bse6A6UpGxAD4pNFmrwoYsBt9xSACMoaNmmfSYBfDKUznkdUSqFyas69tNB2weM5oZ8",
  "key1": "38sGC6MpXLtoFSrjtfJekDSWR6fY3Bbutnj8H65Sv5d3ThJYzrPvEaJFtCR3xt4bdC1U9jqWFSNKqxren8Mvgc3f",
  "key2": "2K46MKfpbb898FaTPyXLdejFGcF5hKwZ7hmRJLSs9eL1ZwKzKr86Frq6zjoqQdcbJncD7ngUvkBWuLF9RjtibZQC",
  "key3": "3anYY5uYtbKQvQ2WP7vPxssWnsC5xgdVDhKrJW4X3YoLHnac5QMMhLfgsdoit6Zn1EFyGe5HBuEiZ1WaBEajAYPd",
  "key4": "2AMi4j8DqdEBNFq1xpXdDXk4ipC4NjZmqvKV1ishoEETZNMnNFU7uPmTXTznxxadEvmc8mbuLwie7nA3YMUaN84j",
  "key5": "2VfWg4T4dEWH4XV9fmpkTL4cNo4HvUcHDkAXPYbcX4F85udm9LB99QCkWXM8KSKQa5aNrXdxeEBq8fj8EoMtPtie",
  "key6": "22cT1eWivRK7EVKdgRZw16DjPPsYSQVnDK36nc8wrDDGqas3PWmoSuUwoCQtNKfWRjeCP8g4BVTGPofksMBYHsEj",
  "key7": "2nK1s3Bgz55qVtKwUGNcyontHxSmDPBaHMNybQ5YXnuLQ7kjRye8aFSL1xf9WXaegkcLahAReXZ8ybMk3A3V1Rn3",
  "key8": "4M3vR7A63WjVxgNFvREkqzUjiSC78VZXtGhA8oSN3989JR1P4r2gjZm6f3LkrCyPNciZYHvoRU1v5zUf17SCptgZ",
  "key9": "MMfuY4VCCdBmn4mcnMgAr5jqiF4YSnntj4Zjpo5pWJNEEGypwRG75XL289ga7Yar6CYdhQ2B9akGJLCu4gBqqeq",
  "key10": "q3TWT9F1zFVJGNJLg54JvKZGTbYtTx1hBDHQ8jiM8csghmWTA31EZPhtjsaRCKiXjuiNwX6S1yGpnUrmE7YRAJ2",
  "key11": "2N8H3CKMrRmbjz6aabFcXKypXm8uHP61Qxvj6pcAVwqdLY5mbGG76aruy1pMJNH8aNiRAayEe9aoUUzRUvM5Wsit",
  "key12": "373QfjehLACMinY7dazomfrPXVRQXYbKdq9VahPBxBZSJ6Ax5Z288rmZPNW8oW2uM95jUDMmuuD5KxRF6rswASgq",
  "key13": "3RiJd8PRRFzkmES5VNo2qVUNhxtbUwLs3ior7NT8tHBofP3eSmpr39krZ2s97oW4PfibCGtdRX8gMXdzSnoXgTzq",
  "key14": "6VNJQQx9AJWQ3P46fBgWWdTXp4ZhNu7PgB3UJqznYaueqgHrUVPodXeRDCTRvFQfrgZEPD7b5bBVnoDQAGctJzh",
  "key15": "3CtmTgCd7mGU7JjWHUu5ad49THqKX66m9s5ZodwCHfMou8FpHdsTZ9L89ACoybgT9TBccys3rMACzq5orYEWbkJ6",
  "key16": "8k8KRfjoeyTA7MZxh8Js9kpWiohBz934ZfxCf4V16sTPnZfkkdmYwWgZc2fnZMojGDVZRtnVrwnyaUsDPjMNtFA",
  "key17": "4MHWoFXTenBRUsgSpxYr7LzFHv5XPg6abqnvLpMWHyVtRcjYaP2RVYDM95HTeG5ETUmJBUpwa5zLc8atJFHFZTUe",
  "key18": "2BkgL5NUWXw9RN5kofjUYadzyKXLdUJaaYbkJuYGMozGzgjMdxs99NRf7K13UqKXLaoFLJgYwuAvx9uTN9w4oJE7",
  "key19": "3afcjwpKieTyF1En7Sfg2AuHYuT7jfW36yJ72TwdheLARZZJxNjvDYRrYd1izLf4vrGEeu2tXJfSzws65rjQjhYk",
  "key20": "2p7E4hRLaw2KJS8cd5QwA1eS5sjQiwWgH8cfxjYZYXEbq3L6T92kbop2jTtL3MU5rQgMo5u45s6c7k4K7vzmzpAo",
  "key21": "3RoEy74Emi6dznWtsHiez9zfxNRx7rV5YgtFtVAnQAx1ygNDVYQJZVSCFSFn4yhEwX3bQ71utLPs4Y5Sa88qTBh7",
  "key22": "5WswePW5bbqDCqkYjdzKTSyai6A7ygqCERq9mU3aqaWihtC3eLorPXUxvNpgRfJAaeJT15LadFYATQXk51yJePxt",
  "key23": "3A6W3B1G2L95CviuiizmnvEgY99ic8z62CZaPhoE5RPd8UA7DBwRvJEGb8Lix8iYUETwCcSis9CoKCyjPgezLB9s",
  "key24": "2sEKgV4kBTcarpWz82WS1wQoowP8xPiKWzoKBy262Jzp2G7SwJtoDuMvKCWXUAZcRz3NLqEPsVSLoUHBSY1GkoEe",
  "key25": "4iXhwrtaJrEJS5BCdtBpi6BRpwt7q4p18FyR7AqtccTaqMJQY1EcENhU5yhZhvnEcCeD5jhBYbwfrZ7zBCUMfB6w",
  "key26": "52wPV4nrUTAibxpwVHifMp8r3hdSZEiHsVu9Fz7qDzYgrYCMvxSJau5nKpDaEAWiFNwEGN3SFjtA7PobJDmMoq3W",
  "key27": "34mE74uwSi1jsGBwMSFXCgfAa4ZLTLHuX2DdsfpxHoTQimr4nZsmYBBnNCQ1JwfTnNnyvmZrAXBqiNPJHYQtAk3z",
  "key28": "Xv5cQbsbLqnFHiZRvFS6Ujdg41kh9obY7YQeMTcMaVwQVVGW9zRnUmUkkkbQzZ2kCRTXFqYFQcLzVnDmZKSrgPx",
  "key29": "4hqiNCggoJihWuMpvkvgBBdBRAjBHzDxFhr1Z1KnRFMF3RhU2UvtASeS3GCqzwQB8ZiqJK8WhHVM2fBxsTWoQAes"
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
