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
    "455qgDruBCs2AyKUjv4s1sCohX9KRjWknRvgcHHEiG5gwbsA44UdmN7KzBmxXuiozACAdaRWsLcMQSnc62H485xD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvBvtC1a6ryUdsyFrYn4WdCYn9Z2DmVfFt63HtQE6k5gCtk43mhdZLxq9sS7fqK2LM3EnQywP1dhq8pK7XuFU7h",
  "key1": "JKEhTt6rsxtDh1WDgNjxYxnEHgTQdoCvoC6c63YUr1unWbbEPX7xPebh1ZKfcUW8DQkAhMVRNe5MRhhXQEey9ZJ",
  "key2": "2VWtDvnyX18cTfB86qXCsAwvwehLi4FEAeoT6LaE9f1nA6ARRnneTYtuwaqRz6zKmx8udrgDmWmiD4qkem2XW9ih",
  "key3": "3heUVhAkRDPEJSBJznGPK44wkWmGTMGwGEVBFbWuM9MV65Y5qk1Y1d21dpdgetJXQnLqCAz8QMAqu2wFzBee3Sdc",
  "key4": "5gmzgvBMUCNBTDSwXFgQKXYFUyRkEzVRkKWLXAter9jGc8C8tiP53Gs9isqQSezTMFGwHm45EBk1tJTJuDGxnNgd",
  "key5": "4LmySG1jdBu4ZkhAUU3FmLvRVnFfMKc7JwsuAiaeypcVBfNraYQ4nRMVL4APf7WFeSpVbnWMGA5yDG7HEEKGpN9r",
  "key6": "5JYPd2YxP1xGwd4DRcHJBwLVQC1JaJhHo9haWhaUmYJygCkwyhkV3tUKxRmcEZGSh3eJGaweDyTte6TzrTqbivPm",
  "key7": "2m1TF5YXGHTxXrrWgVm5Ey4yodeqX12vDauBCEE3KpqcR32b2xCYQK9AhUL42j9GyaEZhRf9EcK7bxEUwVdXLqKZ",
  "key8": "kkGNBioFvsXLojGjtRtjia4PpVCuyRyx397i62vUewe1p8dtQwymp9XPjsCoeY5M69Pr6DppYFiTmbeXbyWYUZV",
  "key9": "3P3jum8JqtPGSpvNLaXH6cuMy9HVB4BQ2G2wZDj6fVD2Hxt85ckFwVw2iMLemuJmddd9shfRJnk2mRCFRs5bV4fP",
  "key10": "4xpb6M3AQ5Rd4DD799sjRnkf8ZgCUNUXFoPbppjkg1WVUwEMLWvqSJ7fDGz3tBCLahBoqaxuzm2473X2nHFcSeMx",
  "key11": "5voHJpPgpC4yJ3CzUQY3JNK5xqKzb9ps3JKhUdnVEkafZ6KnLaGitNdDMjkGyuspc9siqUM2t5ugSaMGV4C28Ww6",
  "key12": "4wKqyC2UautiCU6NTW8DkZ6TbwY1xg2WzBqMZaoqkHjLg2QTJHcc1VYdcSot7AZem7cSAoKZv8ixCQnnmyH8fZHU",
  "key13": "5BDCfUtTUzSvPVfjoBG4v3TTvDe5ajHErxgSfNBZUW8Tyn9RTz6j4Z7MKyTo27Ft3F94asY7VicB9rLgMJjXBc93",
  "key14": "2AUdud7ZBQcQ4u8SAeRGXCBf5waY77xpRsYGy6ut1BReisBx4nrJ9tSercszsmEuU8gP6cUsAT9qWrfm1kkqUeZD",
  "key15": "56kPLbd77cZrYXowXTxQp6kLAMMCUEBhemL9bpEa1wYi9rXdKiHQZc1kQ1Hk9YJyy8J7XwYS9Ug5sM8p574nESaC",
  "key16": "577Ky2ofJB27Baajy2egJEjvTArufVoZVSjy5NX3TNhQwHaYYD5L6HhvnZfKcPhcypeiNwP9ECNRarkyv7Gh4pTb",
  "key17": "3jpmtQSLhKVmqh28eEJrJNuDeGPED1z58aVfhdjQif6HDqpamrhigppwZXquUZSAbdoUnPf4qhgkeaFFM5Cb5yWp",
  "key18": "4MHcQU6DEZ3QmbiJ9LhatWhejTb5znJvModQ2pE3uwpUotDhr7fxZ9tBvRQbKSYu5JKWNLUSP16KyaUzVdPuq2is",
  "key19": "GcU8ziKq1JTPEDWw5HKyt6RK6vhVLqGitdtnZ2b2pdndJK1kuAnZ5kZSiM8vEamjnFX3QyAj7GzgJiXzQzBnyuY",
  "key20": "45a6rDUkXKKiLSM7y6QhndqM2GDVVz3bPnSnYfCokRQSxrFDfqLjXSBYte2eXZr8867ANFRo1BP62vw345z1ERhw",
  "key21": "2Ytzooo2e3HnuknzsNNexvmJ3NhBZdhz6q2sJjvrjszsnJXybL1piBZJteXSmzKBw7wNDAryfDJAgg28wTtrLUMD",
  "key22": "3ZNT9uBCKfxoYqF5RBVSR7MLdgMM5RyKaapHAuHwfDZfymiVRsb6GdDooxEDfL569q9Y6MEBEih88WXniak1UtYr",
  "key23": "5Kx5wtN34pJBYNi9XCfMW2Z8iFp95rhsrcSN5wWZAXq3tP3Kp5uck1bUYrpNoMeuavri3KD1buSeC2VbTWbCouCM",
  "key24": "3RTDTLwEoYQDoNZKuKDCB4RKianaW166yTWUjXB91Szw6DTtNnUCjxxxZtfBMTduLchxuVfMxQm2QyH6Q9pDVXND",
  "key25": "4kcFHZZ3vKewSUdToRZzsin9zdYevGFDtgjqe3UA24MSCV5wsoKg3yoZQEeNfREnLp4hphsAupsACuTLKUFBSPZu",
  "key26": "2NJDE71DjDA3aZhhYpParYrtqHjkuRyxXzBt1FcyJZ9nA2YRx1BPi6gWU1endZvJiaJRtaQUQ9oZJgs74MwsYGAj",
  "key27": "4BDtQYUmpyNBz7zggeb3XCnfn3GYUuaTtPpMJxPo2CZ6ctF8t6CyDPBunaRzCY2okLD8bm7htKkfuSmDJLVN7ocj",
  "key28": "3rMJwP7N4Ve1Hk9pkfNvev9Rgb9Bz2sDvfRzLk55g387Qt9qrHzQmmVQ7aWnPPcuhsjBtdCS5HAs1cXFaqPmyoFq",
  "key29": "3vmums5CKkgnCRFNS247SnUe182uqFwdCccn6q47UZjPQRKZNMKXb3q7svFBja44XF5rdoFDPjrYdKLYvU2xAG74",
  "key30": "4ZN8Pwo1mPkWHhEVCVWJt91G4ndwMLJuQRMYEifHy8MctYJUk5UwYyuPn3QhPsxZXHyWWKHZGJorBXKRKEGvXyLy",
  "key31": "64EBs92c7HE5ciTGDwqZVgBzk2zAcbcxUmdjg99NNVE2RdUrgH69A3izku6Qdc3YmHK6EEZpz1mG13LqBtq7KsbH",
  "key32": "4CLMaYyZvzuQzYxFQGeWMJpkjg5BRRTHtxgHQ6xrBrJpG6CuqNaVuZR2gmqUN5izKCqSMVMCVbD4ReLE9kNGGSsT"
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
