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
    "T9Um6e6hfLVdsdibT7wjtdbDr5wU4coUvhEWawpk9orYWvGA4KKumcgknM6wfJuUwP1YmoZ57pz2RVybQRnuF8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g73HjeFkKrRGGAevBb9qqZv8n4nGq6ZTNDqoT6Aj4ijjNkoNDiGzyJaeCX5ZCvfvoZukXJDaoNdNLmQ41s8sASc",
  "key1": "5gEeUVTiAQdCBwFZuqjCnzBAfDw8K62TFmU1awDsJCgZdEwXjES3u4pyMfAhRj8jgPRqqgC193DhHXsAHMdmPeSr",
  "key2": "2LHTePNmkZtZUtErfBiU8sMJTDtTHz7s7fFPjxJ5zh1XB3uGEugfMY8aSCB34ZCvwYTguBtPPP8cEwBtv8H1u8vd",
  "key3": "cXjKF473m4nkeLxmCWihD5sK3WJB8pQcZEezx92E8ESX2NWFn4Qur8wiTVS56iT4bS8buhciKr2Z3Hu8vTvdLYP",
  "key4": "2KnjUhgu25toN3ybYrRDQSoYCtrks72JZCcDDbGFHSk2476CchBs5sJcGU7ALnFHZiUwQLaQacWum8S8BggGSrjK",
  "key5": "9E6Jio7ZVATAyipYKcvxTc8ziPLsorpm9M9Jm5xAJfD8oMAJ4j5X43pLeKQhfq7yRX7wBD531QRdJhDHWga4sKx",
  "key6": "ccdujxE1yB9VJGoSBNmsopXv6Yuh35k6N2e7Zv4BaPB5xbgg9fh6EJzvrMYV9TM1qVknMkobzxBWEp5eheL23Zn",
  "key7": "33qhNvgf2sVRUZ7CG4o8LygEDFHxuLi6FNpd5Z8nYmomqtGJ8MJLrR6sNC33qtpub3HAFYHJZX7qzoopYUAC8URE",
  "key8": "S15gDcfnfJkEfu15mBgRGy53BydWMxTdzwz3iVYB9FbvKnbdm8uAWqtJidAnGF8JU8Cv4QrmvLxDRCEq9JJynVZ",
  "key9": "5CEVSJNUGrxu8aZPSfLkqfbNt3i6nGuCEVMvfTBq6mFgAFUMLyqospxciP1uyz8R4mDb6H5qHqNmqYnaZV7RYTd3",
  "key10": "52zR4aNKvZWbdoyDP2p5e2K1UYBYT2k4YrndZHEWhMkkaLaHdTmmmfCxc8nqhwHrSyS94VHxgub7f1r1H1Agf45u",
  "key11": "qDcfoC1nZ79nrexu9jsmmQS7BM9PF8644ausKvjMYFv4FdmSWU5gR9yVWp5MhWaJ1qzUWeKcPVYAgg3uFHeiDxV",
  "key12": "4cv2SMMAVasxm4HjttuxDNLhbw9vPXEWfaXWhvXHpe7EsMMPm6ajxPTK3gJHrKYbgJHY4tcUFuy3aLMpGNkwfkKa",
  "key13": "49AixKS4MBS8HbNPG9Np8BVoPLAsr7uCCkDTywXtaybJhzd7Nr1MGQ4mhoPSi2h9uGJXJFe2VD3UG3S1vdEQLFAD",
  "key14": "5unFrBZjLGCZk7DLV551rnqyb8vpDrjSGJAr675LUGVZeiZqqxkja1MMpn6uV7wM98RWmLNaS7nQu7sdLh7nS99d",
  "key15": "4YWAG7LpcHeYyKXGMXiPqCN3gfpjEsTnLGjsVczTdUi63ELk7GV4qC1kAUVwXZMHUHBVoVrWKezUPCejkMZXCxRZ",
  "key16": "HdEMAfEVK18gRgUBpfv9L2RqQ3pRQZTS9vMJhcigo5SKBbdJfeVC2kynBFHGn19HwFET7tGYKjZqDpEH1rVriFP",
  "key17": "jphzuXNB7z82bHPVDdeocWYL7FrzAyUUEwCrXfk7wV59SuqTs91FBB3RALxku32UdGTn3hFcK1YD8ToLjPVyMMy",
  "key18": "S56CzPqRXJCp6UZXYuRyKo4rgNY35N1GNTrNrYfeZuJnuZpk8raaVXLFLmpMncYpvQxuUTV12kjGSNz1teSHKmT",
  "key19": "4u8cRx9URX7CvHWB8rQjurfQPjwQTwjPVq4XWuVdnAs2y5GoVYXokn4bNHytRJBjuP28PqjsXd1piSUA9RAQCwb9",
  "key20": "2NwFH6FZcru7zqEMd1GJGEtchnfX9YDYVErRuz2QiY2GAq1k3U5XiZaezoefEtWXkvYzaseo1JcV4v7NpPFhYXZi",
  "key21": "4qvnwHaST5gmWk16bCHXWdRPKwZWAyAb9D4rzg9iNNcCa8bCZKdp2a1k6YrDgAFRLduYaicG4QY9yGmeFgHtF4Dy",
  "key22": "UspSRW5A1Kp8jvs472gGqQdmEKw1vmcgtpjdGFH6dK9AZmPeYNz2eUgQmKcC4hcgFSGs1BPazdUVszrkV6NLbeX",
  "key23": "63pzHJdusZnJtB7mcChaqGZFsrxq7Z4dAz6VNzzYd9XJZ3sC3QEprUDM6A4Zmd8aahx1zvTphCShcJSny1tyGZsu",
  "key24": "3koU5HbFKwRZHWgWkhhPdSi7ZSCuX27yqE4sVnUmwqWtCnhi33Jd5Zqybcm9Bfafyf6GwK3aVzbk9cGU3Hv9PiFg",
  "key25": "5ggrJvWCYj9ya6MUVFpuWnEkt22XWfJZha12uVVD7J8mNgGMjMxPtPYkkMDy2LTkf5pMtGkqP4vM7xX5j4zzL3Ad",
  "key26": "2PJW4sS2cupyatA5P9oYGpQ36SwjCUpFtayxUbU448rcbha8JzyHGv1wRUoesH3XuJ5picSDZ4G2uctqUsXhxggY",
  "key27": "3Hr5n2oXWoa66U7NU9WAHRKMW9eeMc2ZUnarby2xaKu8o6QkE39DNXyxFeMLPnLJfkmq92GwSZhKAcn2vYvipcV8",
  "key28": "2YMHhQcF8YsG75a9RtJQq1iFNuNGeKkmZ7iuCTZd3tzspuUQKoXkY25EE6UtkL2TUELpNA7vK23qJVUfSVAGczF3",
  "key29": "5X9xWQqwZMztk4vqfcb2i1mTxVsHN6Afyix4whEa7274CZjbzcQ6UL1Ecv9s1JsQda1RhcdZyaDLg3ZA553N3YVf",
  "key30": "QX1Cb2iFE1rDZhQwp4UD1d6wxinD8X9pWRKgP2zg7SqKP6R92iATWr8GJVxBphMgC1toqmynuCxb3r3KJdvyMHM"
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
