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
    "5TWmeVjgzVu4BKAAMADxn6KChaAG5Y3cqbPzp1JNb1XCgFjF2JrrFZmhKkaEUuRvoLa2akuqGxQFfPSKV4ULPWYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7GxwnGMFS2SHRoHVxsEFFiTGmStJWm6dUi6PLkJL9faDgcKysMBMyjNrVR7nhYDMz7NhiqM5nE4qfUWsjcFb34",
  "key1": "2bsn3bhb4iftm5rbW3deLuio7rHeZwyvhjmMrzGZ7De4tPV1DqAskKfptFhusrxUJNFs4KTQ7776c8GCivB93kVv",
  "key2": "5W1AqdEQyGpPwFreA7LBuqSnn7zQGXWQdP3r9TVQxAof9qd8H84BAU9DLRo6eWxif44zWj1yBAu4U8NZWKPAydG",
  "key3": "2v3vCZ5sZArLSByD1CiKUQaoUqH685h9x7FRPrHQqUx7h1ecLMtHcyBzJ2GoeoD9aRbJ5QYbJ2VvdCxpuUPfJVLi",
  "key4": "2fqsgNg8ugR8p2m6mUssxmXMMM5mjpckRhHpdCjLKWTp3XTw9oDM92FPokNX3g9S6RiSKL4pyPjyPsDBULLGHfAn",
  "key5": "2fDaZoDNZXVMmECfNe5aRqj76RjY1vX9GG97gTgd7tQVzdtJn56TMitY5sunjUJVHfWLV1qsMnJimwW818V2FcZm",
  "key6": "4hvnGJ8HXJSvUeinRQvjL7m8ECNyof7T9KCAYBdVEev1BU8RobmSV8Cip4MhsZAaipMaWCLNJuMqhUjRXDXkTa8J",
  "key7": "5VbiP49KFPTPpptXeUn72TMS4u2xEzx6CtqjZvDFRZC3cxtqmnc1CBFHBgs48pseAwg4DREhXpEMLMPHx3qTFWW1",
  "key8": "4uzS48TmaKp83psFhCqgBMU8y5kezYbiPnfSkykM97R9oVx2XtKmbWfZbAYrbp6UhyDoWkZYpR9VmowtU4nudJh6",
  "key9": "3zKQt7buHWbGSf7MycYCkggprg51NGGBw84f52dNJC1tqiDDMCt4RGibrS1BoWPfUSewNM3v8iQwV2Ky2TukKtsf",
  "key10": "3S49KoT5WszrZhVy2jWUeEsZJvJN2Qa6z78PZZMsoXwS3vbLpBRh4Ak82U9L1H1b3Mb37RNjpRwnRTH4Dz19FiKR",
  "key11": "3iDUWgG5up77DVV5YcxC8kBYBymDUP1HTem4BCPrSEAy1zJXXjoRjskEy4563BK8tf5E8CTQJkjYHYhAkbb57v5A",
  "key12": "3eW4VsKK1NMG1yTXf7vBgWMvyh46xSjA3fmd15qyHUUGSWHTMCPkbpZCiAmwBvHwXbJRBor3DCc3oLp4ZN1vsnX",
  "key13": "S8BRVGcdUMSZihuSa1AvyNzAW1yypK3X6aoKqC4tuRoATF444rhJ5eFkyfe5b79zuCJ1UPCrnFfPTirp43Wn7kT",
  "key14": "3fMjnZGKjhwTuG6iBHBaxP4994VsE9KZtNvq2nEGCZBt4tbxsrWpSbUSpEeiwddj6qNa29XY3vSXZNXqBjJD41g4",
  "key15": "CggxqhyV2RRsmta7VYinbzPGJk1V84nrDu9enT9hp9T6W3eEgNqPGaja6yQ8vMtLUqGmwqcA1g6bisveADggYWQ",
  "key16": "5Gq6c16ASSki4LN6f8DVshQW1VmSFCRHVXffdrrkPY1NncL37UEaAeAAL3EnRryNrDg1q4WVbHxc7kyCpzZkEuMz",
  "key17": "AcdDuFE3xyc7priHK6SnxQWiWNaZWeH5ARYnA17TJWTA22ccNuxKZoaocHbhi3NPhUJ21qvQq4UEfewbVHiS33C",
  "key18": "24Vo1jisjDNa1PETUzskkuPCcoc7wZjMw2TEMfPCDct5pe76i6E4prcSuFWsUeYTq6mJrfDhZ5imsozYHQ7NJ9CR",
  "key19": "4CNWbSY1W7HzVoAnQr738MZLLyMYLkYutZoMBDGdkHw8zrSZikfwrDto6pSGsuCPRRVohQHjv3V3ydejbvPBXM12",
  "key20": "xAa9XV6tUoGP1FGivFHvQoHEuUmDRBmUyGMTpe8uxeT9ahVpBdnoZxeQTrKiVyaWYZ3GPXmV1C3ufMqQtYd5RPV",
  "key21": "5a1kcfXGNMFzjZvSFTp4AsC59Jc7vhSTkBYsca1L2XHkaYf2L86fNqbBH7TomZd5Ldyt15iJvL2UrSbkCphjkZ7t",
  "key22": "4pKx4HnvSZexHm4dMvG69yxLiHmHwV2FeFALERBVgWSs231er7M6nSqz4GNa8AAgX4zU9EmTv2C8jvyP2cDXFzVN",
  "key23": "wd832wZPEbZdbqK48A4SyWFXQUDEWzJVyxmLBZ3usgHN2kbiGrG68jGo4B5rE5RWerr55VXd87mo2XcREqdSby9",
  "key24": "23H941WDFnttqWs6yq8ceYMi5bJNyqmxdhyGWStGXun8ZhEB6hVFDajftJMVwYabZoNt2Q3qxxDdxYgLw8HzWYRD",
  "key25": "2aV9WGzQzQ85GKGYpLZavh9sUGdEn3m2uoab1hETDhpSjgJsfiYCPcciCswtE5KjYEdg54EiiGUJGfbaGYMiAKto",
  "key26": "2AL616UDgK6F7UcCvCBxd49BEk1sQ3R38evoTd5bCGvQG9BE6v9k5gdJM3Rt88a2z3CTVaCi8YtVPYkBdytEKAkf",
  "key27": "L3p2Z3Vf1cZ19EnrNX86RgkZgD3FZ4AEyasAKJctkYT6ebydm6bRXKBo2s7Gd531Y4GMWopgVAk7jqmomLekPJq"
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
