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
    "YVCzZbGJpDiLdzjUTcp3LEhRKTYwh5NoXzRz4yfmnuhpRxyGo8mPgUBdYSZHuFK5uXpD3aK24dFvuB273qGg6pz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZ59C3s8xsMJJETTZHBezrkqTMo5jFZNdP1oZGnVdfwyBuQ3amCTf2FhKT2EpjgxNeKVNme98LTnetAxyB9vfj7",
  "key1": "5SPthfydSq9b5cLYSMYs7dV9RearvrJXp2rtgWZ7k9Yzoaroirf92XwMH2tPgdyefJoPMHC2JrwzYKu7URFG1asJ",
  "key2": "A5azFFr7byKA9K8mMz3Q1n55S3DDnJWpwBvhL2uQf2LCuuqsvzKNFzUiNC5pJKs6orZLuN9JvXWuWt4M4E3QmVm",
  "key3": "hgma6vmDHTzNdYyFRSTseLjZTTitsXgaqhwoMiSGWpsDpWzSv8RDAx8Y21ef1VdikrX8GSjSDBACrfXsYcgCtny",
  "key4": "2VYY8WFECtCDvN2Qh8koftq5uXghDGMugxbGm8YAnXwcUWBYFkM9QEqJoXdEzygvf8mZAjNYcjn9uNPdqnvB6DWf",
  "key5": "24cP6zM1T8H3RDUHssV14BV6ayqRBVEPcHuqjcEfRAByVEtRh6V3i8V3RLvABfq2CTs1g14GVYR4VZzwMSWJRNys",
  "key6": "2xf2Z8p81nsuDDkZgf5Eemv4umK1v3crqF6kuMdLa3cvYgWDz41D48TY3SeV1a1FEk9d8kLKtWW3zk68EMq43mtr",
  "key7": "4JnLayfa77V4iVr7Fzj5WNox1HHE7HULbxx5nD9A3p5UmD6QGX2hcgFQ2EmQwcMM4TU3Mwit6uucg5yQKNJqtR9s",
  "key8": "4MGCen7wwuMW77gHCgq47U9zCWF2b7PAczYsV2vPZrURLiNBKuNJs9znkUagXF3yXDprwmGtofD7m3DqxyxYi3gd",
  "key9": "5e7Quq6En4Spthg6cKCxqjjgfqX5AGNQ4RVb9CoJodxjjT2wYvNtGpydu6aoiKtfB7avYMbL74SRsHnYxJZXTgfn",
  "key10": "3T1M4CdX7Jw8qUJGHuC9dYwPK1BAgjXZtdzSLaiTVtxECvUyhpZ8Hnc33ZYqHbHC2RSNCHg8uLuxoe6AHeWWCAC8",
  "key11": "5ePaFaJYDdwTJTng88u3QchuNmE16hsGaMPGjtW1mNDmYWvL5TfYodhXrc1Dhmqyr1z2f8yC3fcYApw8bks1Vf1m",
  "key12": "2GioMw8cDYyQeipRr3nRFi9opbr2yZYX25wzt4cpw216Y5C6gEakQwJd1Wu1aMj9178vKfmTi3fFJpT3yS3u6koN",
  "key13": "28TuPuem8j172ryt9onb7YMYdRBEQXWJs4KNvS2NrDwoFJJcJQXptpTvcgC1XdxSnb4qeduB4SmD4ZPCX8ACAs5S",
  "key14": "3mtMLmvQoWhgM6k56JHR8Mk95pRcQcf749qfGiJsXHbYpKrt7pbJFLaHicVLcQ861q6UPdBX3UQkySxiC4KsgrJj",
  "key15": "458QP72fKuWrdGALo8hq7e4K8Rrjokjt2n7gH2YKpG3rnntWbLNeWYmUE9gHPC54AX8EV7fGajkj4PMTyNTnoVpk",
  "key16": "3BVZFQnhuhdWko1eKnLmpEn5NpUpAnWq4TH9s4vGGZrtPar2i83jU1FYD5vtx7mLgkNvScToDmug2mu9TyxfUBsY",
  "key17": "5JKk7xjE7pyvuUW3egJ7H1YqFqw5YHaaivqst74YdVGFXcPMsnzYKfY8mTRePeFoyjYzN9at74gCceuT6kaMXMKJ",
  "key18": "4T7VLN1EXpHg5egrJRFoBEg8nkaYGyP7HSuZux3RNusQBgPCYYc9VyAG9fBFPF36c1FoGdXXtPJHrVSpQDQDb6ZB",
  "key19": "3VT5W6h3yvF9k3mNYCXuSns4eEvz5vNrEqWGJAfF7rAJTGneDck4WEPd4w8r81Mowwp4uUt4oHUX4EuCANmZN5Vb",
  "key20": "3X8Yu2hfv9Q51g64vFjLgv8GDbGtP6pAf9TzgR85J8CbZmVCPWmakyXET2RTjmGAhDQAVvGph3zNMptMtrLqGZ6g",
  "key21": "4t5iEXnDKZcECNUfCF4H7bqgysBhAeX5VXPiVCfrvW8FDaUf9XCZ8ivsms5ZK4wNXMgoFDJhtw3LQKNEKNMARKe1",
  "key22": "4EikxszgbjtshrzDuuJ8qY4XPVne6jscsm9kYpt7zgbsFJsMxyoeJawEyeUSJJgoQgKLTbFFyhfJZT29Y3v1s3Yv",
  "key23": "4QxLiKsAHaJh6UM2QzA2mKMy3rZR3RkAGGXhcQSfGDR3p58ww3zt7AdJpJnsdm69ibFFXiVhFdJaLbRndVotDfqg",
  "key24": "1mRPCWAeGUWqEjzL7AUDnKRdjWz8YHQ3cbUUzaW2WRWyFmD92Jwr97ySdrzAhErUZ1LE3pFfPCTEcThHfad8x5T",
  "key25": "3BNJjhVyMSTvpHrH4mvsH2uBQcNf9mXzMd6j8fUWYY73JwaW465CsZi4rk1utKZFRhgwTvM5Jj6s8essFtCudvSF",
  "key26": "2q1BPf6WENgpanixjbNutq9Fu8r3ejupiN3r4tn4P1N7z9m3T8nAGgizupX5hMNwaR5t28xcKpsBtWzJxH5FLV4A",
  "key27": "xFtRofE6tf1qrg9LZYoRSXiK4yLEvs3z7rq8rbcyKe6Keg3a245HPQmcsn1ZUkAJiBoNsPRUsv1d48CrHGxbPpH",
  "key28": "xwhB8tn3QWBGUscR8qnQQyVP2UZ7EiFXGduaVaJJFPET8JbddMG1xxsJQWxLgfE9UAxbv2ACevdetL1TiYoN9j9",
  "key29": "8PeBpYKh4xcn4FnAJP7bAELaqin3SyLsW8yzTBhRTTA3LD7K45FS4p1n5CE3KLLNqdXnEdXwBMNQ6dRWCx74f2k",
  "key30": "2gRUiq2gXXBrf489QdHNx1zhzoR9CHXtQGUyoXqp1fBGjkMrdauxZEP5HT4nY4NgVdyQyeZ22wLoC4Ku9osiRjZt",
  "key31": "p9eyvE8oHP8deS9RUVmazNi67p6Hhs3XenRBD1d4pKpBKy5HrPnmi8MegEBBC7h2xxZGJcr2vX7FdWzktnaBh9i",
  "key32": "3e4dZvxQHK7dVKP4fYYjoLkXFWW2hExvWjV4mMxUWszQHTQtM2MuDzxNcWe4Tpb6h3MvitaQRhhryH57HoQvxM9q"
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
