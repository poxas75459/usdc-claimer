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
    "5dirShPjNxFnFi9aQKXrvzaWSmD2LuGuK9izZYHsriVmhWsLZV9Lmzg7UPUP1SPdutjBArRa1yBf8p36izgGhAxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JShGyEuRS9JKvFqd8PK3MhoT2PABb4V6U4Hqr4LcLh1kUKmc8dP9Asm7zxQqspozc64ZhX1T4rnfpRKpsXaNBKF",
  "key1": "tpiAXwqWikwXtBkNyAsmp7cRuckSQfRV45ybdsipsYLYAwquV3WvyU6mPpFJb6LXp1utPhcevo1cZMa32JDrbw5",
  "key2": "4P3BK91e8GGDvMQmcHshRXUJiVVXmpz8NEvvxukHDZcUN5x4AEGuQSWaWEcWLpKAmj42NN88pWX26ReM41vtscmo",
  "key3": "42dqdwXhMaX9pwkN1TLxTxrkHhbHhDScCj5b6VyNuYq4QYgQyopxqFkCU3GPpEjHV1wVTUeRJxYc6VWQ6n9YzVEc",
  "key4": "YknQTF722TQW53SuUXnFUa5bRvdJEjkqLpoCUSaVp2Biy3ZUDtYAvY9GucvgsMzraJjqSQb2wcpxr8LK1SAg9JR",
  "key5": "Mx4B8yLvdE1G9ezeT879Z3dDf4nBGHDWUojAp1Zzb96MFiZMJ9GvZ9Jxk2pG9YXNyxpSkat7XBUXEncHf9XEH1t",
  "key6": "4r7BT6hzfuNvNPGxPnYPgcKspFYSFtJ3APZVkVv1yN7jLFxDoYSQmDZ23eudPmdrNTuFnS7V5bzgWY5C2VchPnyT",
  "key7": "5beXvA9SzPa31auh6ibgqMyzQ5EFgUN4ijyJtwfM6sAcvDQFDCSeYFkPHTba6F6hUbXN5DH5ZUnYcRwAMW4PBEXi",
  "key8": "CtDCXMC3nHref1UcQCY8JUy5cheNyzeE9DGgNZTKynvfB7pfF2GTqhiHEKzqz8wBTro7si2QNVWpcTPqir1ghmw",
  "key9": "32eTsvdCq9M9xpuskekXhCVhpTDPakgjeYtPnbpxQncRv8VpAasCZmLQ6L5czZBqnwZbKfTyAjvqN9uNQz7SpC4K",
  "key10": "3AyxDSukXBz5VqTEuLWaPRD24751b9tXPHkB7yieUsqBs5cL7EiJwC8uBmuZZLEnC9NQgwuYqgRHBy7k5Lzzrefv",
  "key11": "2ruumzLhFmHgaUKY4cqKRKDzJCvHXSHyQGDzze3zj31dMPphUnUK9jzVKhSw6FZPYvE2svr43nrR7jhFzMccm3gp",
  "key12": "pgNwcV9T3SNTZ9VjJH32zW3SzSf4Mxp6CHDPi6J89Em7y39PxR53SmXkN4uSmagJuVxT3hXfjpUyNHKnQgaZciJ",
  "key13": "4qCLv4Kd1qYz3PibyXsT8afrZA8Q33dFzCea4tnNb344T3pRn9GpDTpHvWd4a49mcYcdBBqrc5kKfJeFbFa1z8wL",
  "key14": "32kkcANEZKxANCfv9aPQzUWSxMUrnDDUcAnvhtmLH2ctkhwfKL2hH1MQEPHAmq4rf2SGeEJHCZ9y7WQEGLPsmJZ4",
  "key15": "WRKB72JtPHxtSCYpKYqwyKSbPx1Z5vyZsydiY3jAog1nTqetfc2LJmycqpqaPjjAqv4mSrqreSAoNTxYkJWzTdw",
  "key16": "5rqhHphWkCdUspgcBqwt8gbDiESY43Et8FPMdWjUhtajWohMRdoEcevMgH68W8QqoPMZVYKWgFXgGhoqij6uEo4G",
  "key17": "39MdE8LHEjkSatGDhLfJHuGF9p2vtRpRKMiX6xfXnTGZMxC9xQNMmLMdj12hLpKdU6tsFFMu9xdBziTf9chgDaeT",
  "key18": "4aXrBsiVxF3rrieuHFKkoGLHVdeHhBG1uVQ134YaNHngd1VHHcQRBRP9Zwe2pQcekmEv6o7mAzBgVKBdosN7ed7M",
  "key19": "5jgzfGxBQupFYv2ccPjdRMATCG941u9ZgPsEVbWedTVKJVpjGjP6hdsB39Nv4na2pep8cUTiRijWSapmDUxFMHEY",
  "key20": "7qgBFmTmWFhifSU8nVQJvV1pYYL4YPHxybc7kR44CjDYtKFC8EWiegtX9fQjgzEkxEr8afQ1iTUuXeBBgVaxCrq",
  "key21": "28WZyT2JBHrxYzXwuDBFqZwT3xRu67yPwpQx7nFZWuSHzyNFziDwDh4EtKBuLQw1gUuBj4KvANhijDBEWMsxUyx5",
  "key22": "4FfdFGuPznf77BVDxfNCUQNUtoxskGsp9xf2TkP3bgEhup1ANG1ECLZi36kq2ScWvSVkE3Qw5CU7ZVX5aRZw8hNM",
  "key23": "mweZfBASEgsTRGZ94pfFK6AB5LE85oVgGna4h8JjRa2k34X4jKhfePfqhEooTuAZ6wav5ATm7eW4tozFRyE3xT5",
  "key24": "5WBLaq9FJFG7ABmjurBVpQXiqRAvgmmcRxugQR31uJLGZE7yjy18Lp8UKS7uLPJYtjDjmjDvjYXY3rnyVPKkM24m",
  "key25": "4NZuk8Gh4Sfwx7WrF9qm1X5gMeT3fPbsDYktjzzmFiio6oPbPUWs8ELLFFLRuRH9WH5ekSZVZjhwikfi3gJLKyyd"
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
