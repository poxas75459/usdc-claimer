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
    "5jPny57wR3WrPuRk4gCZd8DNAYAsmHzqzVnZFP4F8u9nyWJ2boMkJ9PfSddpqEgnb388eTWSGk1QJ94qp9f4Dcse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a47aMMni8CzQt5CGriERWpKBdh8u7914AwFv6yfCMpvSxhcc5nz8JeV2mnAhZkE5kgWfVem7pHinyHYsKfCVuMw",
  "key1": "5ZHppP8aC2LiDVMr8ShbNgZoYLQ9hN3mAp1UeJ14gX5QPSnX2R5VvHknntiyhqfLe6Y3DrgaK3PBUAv8VVY64a33",
  "key2": "4EEUSBxeA9tdASDyWABsuubU9E21nrM7DrZv5MhFQchXfuurE2Jv1QpdwTnDMbZfJP2iHcvcEt5bt2goX4sG9eCu",
  "key3": "FAhK3p7DxRg6hsKUDvWmTbMCeNu4jy9rF5i1BZuADJPraw4immm9MNkKF2Ci383s55ivdLVXzYpSyf6hYN3vWMV",
  "key4": "45wa69qywF62UgxxQBEETieEP84Kubsg66uMkX448GVL2JLteLifo3nSGxs9JuVyAjbSkLTyLDNhHNhfPr1DUSb2",
  "key5": "MCbGUqZfoLHBpFrjjSGoqah2idTc93bH1Bgn7WbDfS3Vsnd4VLnMLjZaUSfZX1b2SwqEMN5qmvSA8HL1Ki4ic3F",
  "key6": "222PUo3pgFiSdAcQEe8nLggWMV6X1AQCiiGpUpYvfgmbWikbSMD3fp8T3QQPQxcchA1mEQuVm789SJKiFr1ZS4ZV",
  "key7": "5hdU54nXL6A9dpkUzdHrnRQ2umj7mMiGqzhTwVSRvsMVC8NKJCNGZdN5N2GcYVoadoBD6bDnBEyBLiKiKFEumHaS",
  "key8": "44Sr6BH2ZLvdywx7CgsEbDHo29vYLBXadkmzu9yiDDCWAbKCeTvR6jph6iyobUND6zeHDnZSkgK4vNcCCZyo4dG9",
  "key9": "5hH6CiF2KxLKhDg5TkXam98LRYyXooEhsDhty4xRnbaWaKM9DpK3j8ZU1zxk3LMC4euAupKm6bmRWQvStdp5pWfh",
  "key10": "2hfkfLKLnZ2Cxybg3jEiWKACYpBXF7K2mvQduDGDKvL13DwceEaSq9xPUEczs36dmyDZ9LDSYripWA9c5MTdTSMf",
  "key11": "5H88H1xtQYy1tChMmawuKP72GxTBJgrCsG3cBbgdUbtzhvRrTEdvc9aJEb2KF7MUXk1PfgbTwa9YXQ28EHtpz3NM",
  "key12": "4q7WwQLmPmTxtLjUGfSpv2s7tRkpyJs1gBsrdjTUVY4Y9TP62pU1X3E7mceZkefEB2uvSq7aeryx6nPWVC6vFsg6",
  "key13": "VEBwvBqSBhDgnV9GQbALPoALPJDLi3ncNPqupY1NMdADvJz6XEdFf69AEPA1GyR86EKoyxiG26aPVHLKXmug1UH",
  "key14": "RQoisUGhzxrM23BvYJkmY8N19GC69vCXQYKVK6AHQPZU8QgGMioqt61yidAo5nGbpSk1W4p8ePFUsmcjJzWas8r",
  "key15": "4hjcqXLSEdJ5LzZGrXTnr8rkPGnj2QDcHEwrWJWV9JYhTYuJptwGsCb6iNJGR9DNQjHHT3wLPJ9yuKiGhy88Dati",
  "key16": "3Ao2PC9zYshyjxXNhUPmCk9oE8eEEXFvdNb8wrWwfJrNNewLa4NX1iGxS2YbgpETQbTK5P87ZG1VdkjqtonrhAsK",
  "key17": "5wA5VS2vWCv41m4J1qRGHQ8cyskxSWMtkQcs1iq3AZYM3s5SxkbtTLYt6uFMt3MrRr5fsWsAWyoFURaCk9DQBoRM",
  "key18": "66G4qVAMe94RjV1npAThWe6e7EfMheMfXjUrsULBxaiFZEDLwY8daYdR8UKvN2unUbBAqnxYg1afr8ULb1uiEDou",
  "key19": "vTmTLsBD4roNFjVuphrBjhNUR1hTJKRZDtxgcTgY3daeuvcDPBKSZ566V15XGSmz3ojYpTej4GrXxmAv6yy9sBW",
  "key20": "4QrkTJDAu3KiRLiYwjkEEMh7kE7mHvtkkYsB6sMyKbuDkEAYXfuSsP7NsTDUeUKFEjzbY85hjKjraBRJjsCyRjYB",
  "key21": "33YZRjJ5u5vkmxVi4CXuXYr3NQJTVTzJk1jVQe64f2CiR3e5NFJWRuH8nnXqm79svRXE8KUfCWzSgCVvpu7nA5rc",
  "key22": "hNzW9vUMgRcH91bNm3W1A1ehTbQqJRwbdacyLBepLdXCxbJ7B2nJDouLUGurPFGHf1nUABbqG6mFWgAxLtVeUFT",
  "key23": "TPbc4MjKTMS6LaWyU52CFoF1EfbRDFY2sopLs5RTePuHavUijVCVrXQUjLKsDWrFmtutkqCckJHz5PbCowDN5DL",
  "key24": "2AdSC3WuqpYS6obr7zSKXsoJLBPai8qzgCvUtcA5Xx1CWQmA6NeY9r9t27QFjdTVnHaS9FLCVvcsZEzugv8StTyS",
  "key25": "4vBBgvB1ZUZ68tq6wA8LVksudHVerh7114uxJ39zeELqRHRJAvSEmMvaAD6BbCSnFgP4rYs5aChPrutyQZpWvutW"
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
