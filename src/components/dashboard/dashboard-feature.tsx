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
    "8hbnNs51Tes2cbeecQzK4kdsc9y3RqDboHqo6w5z6VnwhD3ftXd5QvbPMvAqUSPvofRgbGafn8tRYJZQ6iBuZ9R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiVRSCshwmRcYMjAcmZ4SrBLy48wFMZgpUbEPjYzi4KV9ub4jxy5kxZJw4FkQrW4YoQfdpviuBzkU7e9gpVdtED",
  "key1": "2h6E5nguM7pP5tHpyQAdyvfipTqDtrhJvepiNycc7nshHbvrvTJ2KTTxwiXRHrAyCWwGna1fKmeMtP5ip8UjH7CX",
  "key2": "3GwpFrgbfX8a2ZzF5HKpeouv4xBmrmtssqvWEKv4s38JTmaYSFPc2yR1fFmHMg5xHrz65A4Zd3jwVMpWUaCwY6Wb",
  "key3": "3Hv4bTEYQbJHY7KFj5NhSxnfSyYED2HnEz6XWoChS493DReFvmoHYUZzMaiDniaG13sRUduQf3w5qJGZeWzbxvfx",
  "key4": "w64fzkB2qw1B6LWwSSRy5Z3nUJjpbFqcYGxDj6w5Ah96SmUZBoGNKk46hdxfeJhZmW6yuRHpWmnUKeQdCrqGNyw",
  "key5": "2ovJGiBDxfFcr4YqBWWr9jpVtRu5RKLmsvTFAH3EFJTxAmkFKbUebKMXYUUBEmmAWYDx6PwnqgRNx5LKxjvBHL3S",
  "key6": "wob5JNE8KG77de4MxbQTrb5PDYDUfej3wPxQ6uZ7rtH1nN4bJcrcuTTySpUWDWLriF7fkzxrqi81ib6EfBN8pXs",
  "key7": "3jWNY1vJCoGEKrJeEgfL9yxUFbWzhxHoHoFj1MoidX8WErVNuHAw1EqtP7u46nzHxv8P4jk2e1mZ8ACeGWnc9xRQ",
  "key8": "3zsWuUBQSgWXVr555z6onU3eFzs4LNinztGKUZp4Mug97CXgLDb5wAPJ4xXNbs5pU14CUp2DRFM3xpVFzBwXJDxH",
  "key9": "4buaBBgGaPau7b3Nwp5DpL7Dos2RvG3vMicry19yf6ZtikiqZqPHR8po9m4NwGSXreqxPWVUMZb6niEnMQ1NYBMX",
  "key10": "2kFdphG15AiWsFxmAEfXZR1NXSrPAnDGBxzs8mnGN7cX2uBfK8jdgBq28MWxPQqbucXzrWLKvPZ8xrpqa32o4NtE",
  "key11": "257nyYHhM7wPs4eoVtzB1tYmUcB7ZFCCskREVZ29t5Yvo4PNKi5Cmb9Vz95KiZzwZAkzfYMeVyQDpgox4drEadeF",
  "key12": "4NoCNz4CMNtRcD4cLcJXrzh3dDBSLfDBjSUEEr1jn3PXHA3EZUV4HJobiniCxQ4DWmCpEYYTsevgrtNmBez8SG2P",
  "key13": "2EC425MPnNj5eDzzbcK492nuxCXi8Krmn4ku6DRhChx1Y37eMzLA33pM9s6LT8xvmzALP5jhCqFwTpRhQiAeVDAC",
  "key14": "3x2zkiszyL8PYcb2goWPByiHKfGLXL8HkvsrFNwArQGHWiv9QBMyZwfiXrgU2BXHjMvAh8aGHMXQvNqVfLpQw3RY",
  "key15": "4sCrNCyqEaMKGtdrWD8NA4tx4UcmGBaGVJv1MdvVqFQbLnYEUxndS73rPEKwZsWtg3zYZKGXY9CNKbEmfGSvtyNE",
  "key16": "5NZBNRT57ERbaypPwdJgojt8gn1jFSdTfsDSUE6H6Bg755P1RnPjmV6JrEbTSSefaM8gCM8Kf84bkCi8nyvD4s2m",
  "key17": "3LA6KLFWvFbmu8QSUNnm3m1zTcnWszDxThVRYzVkmGnCcGNGzKyc6uRmoujZpT6ZrA7n8WyWfSETHmYZVKdKTMvx",
  "key18": "dxt5USskbzunD2X7UFgaL7WH1wkpv7Q3UNkzDUdbk7Tt1S6mSrXRyJoucqkNP7ExUFbNyt6GT7vzYXPCW8xnbUi",
  "key19": "Hr4xP3f4CZBH8YdkZYoVzER4o6QdzJTxC6Qi5sDfxozrJeTeeMaAeyYbCDoyJQuUsUzXWkjn9RP6ze82iQZ5Hx7",
  "key20": "3gfKZhqa8asPYExxQHFMnvP7Fmmmqvn6kRtP2LhG4D3YZ6ggUo4pSkqkBwucywh3TnVa3MPM2bauG3YKVPFkWbVa",
  "key21": "3d7FTj8qCx1RdBrULvwDBXApsKTEDQBSBymxPuB8krUdnxEWUksHpg6eGZyAoTPpWgvdRPdW5wJMGQBgRESETstv",
  "key22": "5GMc3oNVLSJBp9GUnNYmWTWiRMUJMnqCdFmcK3P38Qqp3nRyReKXcgVMwbdc8qSyyJWtAC8vfVDtsUf3bjwAbeGb",
  "key23": "4DvXM7XyzYKzaHKkY4yeoQwQnvzex4efci4jEGYEPfb7LSFbsN9x7y6aBCVgkJunMRpECGvhGZxftaq2ky1shibu",
  "key24": "2g9VxAouUnADHTT1mFCpM2wdspUE8uUwGwctRenh4X6xAzFT8Wustc4DcJr2WtY64ThtokmiqGALcBzg3G2F8Z9W",
  "key25": "pbjUZCmBaLB7oUfDYxcfvw7QordL75vQ9XAKUcUk9YNZv16C6TtaCPWg1oKb3FN5os2F2s6eVdPFkLgEfaYWsFZ"
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
