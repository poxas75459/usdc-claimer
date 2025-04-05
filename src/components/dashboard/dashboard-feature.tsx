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
    "Yr8qHnTQwvKxE32JBGH4ogs5RBSykxh4DtD4SFMUGLDeY1A4wRrQmCNJhygqWhdzoeFLtofLnLURaRspNTRsuDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48f6x23NuRbx7mt6av76LHen9VRAQccDNkuAWPNCHDUHzWor3PkY1cpcwPVfSAdgVakLiEpELE9bZ1vqtAjosfCk",
  "key1": "XRv9x7Z8SBgqyChTYGB4u91vefoiGgDVeMifY6GFmNujzmszk6FFZHAkirws8XTWcyNzThwxXpf3ZEkKYQRhmsd",
  "key2": "2E532fbXGPxg1J535Jm1aMjqhcRArWbxthqvD4BTTt7Y1KEeg5DdzRa3MGL1JmkUgtr5kd3cPVPv3E7JdLoJXod1",
  "key3": "uk8tJN5S1Nvf61tjjvooqBn7smycCipPo1kHh63sxr5dNQwVutJKTEL6DbXiedjE2hmRfPcEUtwTSmsrovEja8k",
  "key4": "5xXJmDsuq4zi2pwHfcG4QwNVxKCFqM3jbMC9rJTM1Hpmw7Cp36Kd6zeS4K6ercHiNLKzc5wxDV3m23FHHTVcVfx5",
  "key5": "53KT5a5LGH1LD5QMsmjDaqaP4gPk6uvB2KDY25WTQv6PRE2fv3YYmd56KeavLyeDy464KYEK79yJwmPELJhSoEpT",
  "key6": "4nesuCFWJf31rcJWeJVRCNCMSbWEbtQMBBLJpzop7M4jBmxyoVdXdX1DVWFgAaNnSXsKRXf7yHz1FXHssyorMDkg",
  "key7": "4DrvtCHySx7vG6cLfRp9rPdsQf6JNHqv9EPkQhkXTtZFRdSeahwdU2Q4Cb8uYV3eSufyHYPCPiGe1fKJn4Jgj41b",
  "key8": "3cxXaFjGdhEBWvqF143kNnPjqhbt76MtKtzvzgJ95m2eqFs1sdXTyZxKVRrVizdmf92AVrFRAKUoG24z7cPoPtBD",
  "key9": "3qA2jmjnARYTax3bw8HWhx7xmD3mK2cvmQkiJyQnsQq8pUnw6AS7AKK2Kh56rjCfGWESTCAzDU5W3GW9b9hGagnz",
  "key10": "Qaa3ATYtQhRgmTGWY4Tb4qsSvkUNa9tduKNsdkTxcQsU7HWSSosfjmN3MtVER5mYyGk65DXj9Y3U9ZJXwTEPBFd",
  "key11": "31K2qEQ92qtvL7w2dFTKnudT4nZbDLC2CTSwUdxZ9YtqvTM27Wgj8NNZy96NtqLY3i41r5jXmKL17u9mdov9WeUQ",
  "key12": "4M2MbdVTncY7CBMHVpfKQU8ZyPb2y7H6iN2MpJv9FwzbtviHruzBPvq6tz5b6KRCU5zN2M9cAAT8ML6b2LxRcxb",
  "key13": "2wWNtr6waaWCv48QHqsCxfk5LicwQ8YAqPPZNssgYV6SspsRDTaNi5P45LPeFdW8vAto3251gVxHXp2sxGPCVkKa",
  "key14": "2F9HvivBHESn1zhyXvQ1ntCqKdWdYdHoy3ot4523NAUN3G2bNS2Zeu7XJvnmWgipvR13M8HkqMqjp2quKVoabRym",
  "key15": "533vBQRCPRBCrGd6CEyW8NiKYZfrLor6Tyh68BYB667NeyERMjJyGxmLGZZDr78UhRm9HBCdZ4NQxRgPrct2GifN",
  "key16": "5KfYZnvDV9dYV6qfKkYrYwx6wgNzWUKY8jFUBmTqe2WsfDYvsv3r5teRQG1mNSffP81RHb1tuZWCxNEMt9J4U7g6",
  "key17": "taDokbkZ8zz2aPzA3dyu6RUEfUzpdk3svdEHdqMhprUQ2iAikwp5jKeRDKiJEfJbnAVF95oTwTLHaMbLJtXyFv3",
  "key18": "4sCULNYd8m2MLpD7DuJ1bPLajsQMd6VjSVS8QustQdHpNZscQEG4nW8tDeM1MmQmX6CFdgwiELL6o9ownbUykbzL",
  "key19": "4zUJNNURX1G2hX3HvD3YqAUHDwJNXHJ25zrLQHqHiEN5rNCYzaByZsU6k8NSTXJKBZxw1djokzZFCHhzr7ZUnVGm",
  "key20": "42PhC8LHBgZabaieToLuwxewc4i4EapAuYGW2QkegfrPc8hCHpftxwAaaBqNtJdZnji4eLS5EjLDuMSWFTaywv2F",
  "key21": "2Md2X6YJfK6gJh1etZw2TNbxtVbjLPbXNRhmCqgvekuBJ8nX9Gz6kxkRBmgzDeJoSsuhD9o1BYijziguUoRevXum",
  "key22": "3uKnPq3tACRC8sRaNKW7pfSVbNmJJiVoWKbXBFCje6Y1ptq6vvsYBk6sPCv3cTPpuJfK7kq8gBZbAFGz4rRjPRBe",
  "key23": "4QSkVyVK1PyGdSMNGjVdo4KRLhQ7VPNuqMNuxkq4eNhNz6VrEyXmVVpiBxUcF4d61bB7R21CFV18zrs8VcbLKPAf",
  "key24": "4sdvQ4dVj3HuN6y5rwpt9jczCHMbfsogXVXbdgK3obqtqonERDJhJbnDbEGCjAQPJFsJsgmEKre1CVzv9SP2nY1c",
  "key25": "5m74FiuDhRPkUh6pZvX6RLoTHcrXHu9Z4PsRkQauL8jzMQtVVQDjd4d4kmDGMmXZFehLWfrNAoVjpMvL8bghQnqz",
  "key26": "2WafNzEqPszN3CsNjiQJkWLWoDcYddwdKeLiHWYbrqvvvkhur7XBaA5Zh3TYtb8XJKU8ndRKw5T26tKDpe5XPtom",
  "key27": "2zmFvP2LSSNkwAP4tTr9rtLKpUCwibdHe4sBkVHZmjFADFRZHL36jPbvyXLpVm22zaczLQAwdyoH46R2vQNNkfmT",
  "key28": "23XcZSoodvZBKQ5odhsobzXLZ4SPp6sCgzSGCW8PP35cPAzXnQPVSfBxVu8Hss6SR26b3ERzpCkJyeUGp3PKETEs",
  "key29": "4Y4nNehQiC26iKNBMwegiiiqbKpqxSq4fqPQVuAnXZr5ksJka9BxyRmau7FJoqhmB5fLt1NSGnvx3rMpzGkiqrmq",
  "key30": "VK6rFhJebDv92Wu2oaCWwLiShzYHeCZ8jPaFTtChVAeSeqaSvsGaaoRibCymJaMaXKeF1AidCFoRXZ3kgsiHg5J",
  "key31": "3f9qDx6fNnzrYT5QUoYmXvr1smCCnhn9FyNosw5baM38HqnBQo8qyGSLnHLnmbKzN42yYAJLyUMdYhSsojx7yUzK",
  "key32": "5pL7nVCvMZxVfu4sZffLFPg5t9Px7wB4Zbp1pJgj9pEUWu7eaMWJej1hBA7uJ5LpvSkqj8BggWnYx1ki5tD1pujq"
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
