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
    "4YeNZtQ4yvaudCTnvsDM2w6bsf9MeawGntQArJCJnJMpQcSRJ9t26K1TqRiYHU26asLbRA7tSaUmVfUBruKUdHa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SZnRGBXxmZ1VyXSj45K86BWq8VSuoUsuikhAYL25EH9Zqdc4dch9rEEtMNiMKSaYjZTtFNB52DNJCDaDHzEg2xh",
  "key1": "2NScnaCc682Wai2ZiNht7zEVacTyf9T4AKTG5zxJVrYfEFwbP3uF5d2rDtp6KE7yy5QRGLrgUZeTaJYwVcxT1wgG",
  "key2": "877FVbH2h6Z4eEcqxvnsfwAGhGN8oLHXZchPoN47XPqUz9vmBxwUDvwy5LXrHz7AFwrhv8Bk5P4UoKHb369AWrq",
  "key3": "XyxezkryfyAnMBUjvHoiw6HkjKMzcZ2U7chpAJ9zMDMcxGq7YvXb7EdjGVsFJXLFRTQwmVsV44B9gWr2qJ7214o",
  "key4": "4tkkZzWCQu4cXzqQKGMBswsEMNLh2mYEfhR62G5pCEiSZqQtmmnx3jNJh9jdjoXU2FHhKdbodNJWFsH3brEi6rMV",
  "key5": "ZLp3Kg64oxHpA89Rya6uimKLJYKyxEB7MoGxCD8uwjjydoeT7vYoszRbRZMWPL5Z1Jn6teiziMaSpZ1L6FMuVAM",
  "key6": "24PhDivqKW5CoAqB95xwvYAHxmiWYy9hobtiJN2FjxgCXjpNwoPSHoTiRbjfn3qLKCsamtZxg5jcbLQgXhzZxd98",
  "key7": "xdHLYkgCc7AWeBV9ungR5YjJuhn3nqboPaZtSh82xEcWdgJu58FcsDw7SfpGaDQtpb5T7WDDiCqzrrEU5cwHtX1",
  "key8": "42NraNscPkZBvz3pj9STNDD7mD26iiPuQ36ZQUheDhGhfXWiqJ8sp5vYKZpy6vjkow5Uc2jXn9iQoKzD4RUF9SYv",
  "key9": "55A4WymEijHnCF896d8KjQugMAjM7kVzarJNzPi24H1rSSCJkm2FkuMDKLw9EneKWCwbA68eaz54giGWMWGhLLWk",
  "key10": "134UVY6jxAwrjkwMA6JwJLRfkfSWeZsqSektxnLxzhPRLAhEDJCuJUrSCyAE1A3apPpfMYxHsPfQYHyfstWrjb8",
  "key11": "3XVg2xsEVVxaXpe3FwPKrkajyCWtj4pyJNTAWtvE2ev5BPacfY47N8Kcf1nu139irwP1f3smfkfkUA3fWZygwXsy",
  "key12": "3f9cYvbrVPRWGRVZS2gysDbxBsb1WUaCTDLFnAzCXm6ZrKtJ3hycpgTKqoEgQCsTizFvbfKwBZRp8ppgdk74AZn9",
  "key13": "YJaUtHvwXis6gTRCp3jsrjUjSQ6TpghcGG1AJ7PXJAiHFFyVP1w7rueUFBJo4JFsmDugK8JdAUAqToSH2te24g6",
  "key14": "4nPjsebwLraQCyNTooB9bdNv2JpsGjgTevv5n9MNRvsgAtUPzkd4W9XtM7DQz2AwD5akJnwQMHZdG4um3RE6m83M",
  "key15": "3Bm8V3wkiHs9E6MwTcwV7MSM2QiLJu4YkuZaW6x79WEYc33dMkL1cwCCgrDjRCXaiFMYMNBpGBkCmXYQdHh1CiQi",
  "key16": "38A55Foq2on9LxnAdfnzYGCbjo2gZ1RxUwSQ2QFEAprs5LyvUM3SyubkwpDrdmSJNb9vBfC8EVbPm2khzxXDSpbc",
  "key17": "4c3NUxE7k1esWpHybGA8sJdJz8Q4kyvWWDBEMmj6P8o7Y4b74GaGGkftm4UW5BnxWmaUMUVMZ9C91ZAfFJTMAiic",
  "key18": "4K6kDhCP9gLrPn89Wg6hTZ5svhgW3957LN5zRScnkqXb8actUPize9tZVHMbcgmogtTzrKLirEmy862fcfHEpzgK",
  "key19": "4XGHr2qRDr3qKEoHrD1aHDnGHLiV2S7TvpZYZadgqt1CrHSBt2FfzqmQ3XAqGUAgbASTupXeScXJd1cG94tjryGk",
  "key20": "oAPDz3PREnXPzgFVhiPhkMx7GY21Vdk5HbCep495Bb7iZKftHqvS8pm9kPJAnsKaVBJ5gp1cgDgcgJJYduwa4zB",
  "key21": "Vfs6tJdsh5qBDiqj4v8DQtjhne6NWe6L9PdbPp95B2PDmATY35rts6oGvCLhpsu8TtxsNNWfsp5gkuUqAoY4LGC",
  "key22": "3vnegK6tAnVuRtSEanxDHjtRsmKERR8gRbVPb1c96pRTb6ih4jJ2xv9CRuqE8SBPKidJR2u87isinudYVoWTFL6H",
  "key23": "3jYLeePoqbCWx2NCKFn7oXwXp9ZkqmPeSL6qH764EicqiRrJKykDgnxBuLLNxproWPAA5zgLNZZ1qpZY43St1K1H",
  "key24": "61kmRswx96GdNMED19F41sVHuiMsKsUz2cVR2K6kFBqUMbZZ37i5sY9dwvC3dbdXqbg5xJr3XaFE55LPb8EKYdNW",
  "key25": "4VSuamMbwgFpb7vVpkfEoWLU25Qq1iFMsBB66AHajX3iQVXMrgYNmFP9PS6Yswbq72rX5fCToZao48mDYbnJK1MN",
  "key26": "3JmfDDPc8c5Q9LRpK61ifQooj9SSyxQQgQNgC6eKWtmysGY6osx6L6UcvY4m81KNGy9LzfNMX5CZ8LKEkWEwYkMa"
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
