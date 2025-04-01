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
    "3WMfXM4jqdQZsuG1csLZ7wTjAbQiMyiJYKCGBBrVfSmX2tc4jCGxJ7tyX1fnw5iDhURgdfTxDCA1MQV2zcWkENo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hRYZuCoWXGk83fGmhXy7XqekzDAfd4M9Btxvhd5ZVaviRLWhXkrwZXZVGN4b8JWAA7qGNTXDwFSg4fVvygpJNk5",
  "key1": "2pbbUkuWx7ZiNayYV3VBNfrfZsXoemuMLSHYN8euraCyDuzfqvq6dN1CJgpahgeji2nRrsNhHzLh5mFnnrSGtD1z",
  "key2": "5JAu6DgPuhZZ9RXKTMR9xoiiHsJBiD8cQnY8mUN6oHKgukcVEgCD7pdUdPZ9qP8oVVG2LPvuvxeEaDG6KFjqDVjG",
  "key3": "2hYJa8s84gfcL2oKcbfBewTiuru49SdYPUH3tfnW8cY5VUJJhGMPApsEhqdsrskJf3momeyXywkpqcia9YLU2DKx",
  "key4": "2GPRuufXN2zrReDFEDaoCRw9PfwEPFf27fKKUsPf9skSytVpA4Hw5iCF7oVRDmwo7QHbRGVBgjYmDMCe66dHd9hZ",
  "key5": "gPy3Hf9zjSfMbDhAswLfaqBvihFt4WLpmDd6tuGWH8ENQfpcVMn3fFyqhWwRt3TCnKhMjPNjam3Mys1mweoxgTK",
  "key6": "3Hww3zFeBgh4H6P4zCKqW9uc5pxVBunZ8WieMLfDTTjmbYG4itwvyhtasejNvuL6u3BK3oMqCkiU1GU2rR2Z4o9j",
  "key7": "4bi2jDgjqgg8LyUFEsonSE7NYoWKtFhBgGxgCyWoHnbDUburuKiPyv1y64ciJ1dmB8gVk1NSm4SwgMSzJUTdCr76",
  "key8": "3UbeJMvBLGnT22z3y6TDDUJGqoAK6Yzec7SPY1k6pigKqthSErr8zwmrNJYPy4vTJGfTLWShuvt9gNgyE39qcay7",
  "key9": "4KG6gjpNhViqxAz2aTtFvhkZ5zEB41ZFaBM2ggNndomLWKPFgLe5GgQj86cLYB9GWmcmoNu9unqSuUTcHNfz4xj2",
  "key10": "4eDKH49QbzoXpadx6yZHCMy8NUJiwvvpgx4whbqdAdB4fMppSKM4efoTSp3iiNpwjKNVC7Z2Rjh4UtnMK7uKb6QX",
  "key11": "rPJgAmNvUXnkj9GnKbekwMtGco99LNtkp8ssvpvKFTY5LiD5M48osLers2rhvu92bFcji5kDkhux55agT1EKcwg",
  "key12": "5HizHbztxtTb9w8HTFcjSEhLZGmuBu8NqUk1yB7MtedCrfDZteTdcc9R93xjH8gCshxgqAjWmNaTjbwDUSyt63cz",
  "key13": "2QUjHrzdXNsTqkKWjenn4HbgKDmsTcAU3upXGB7CGcupPC8T2D5oGpJkgorJ23qArQNSDdoZrQKPnpivrmPetmLz",
  "key14": "2fBWcz9v6tZVNngy6jEPeBLM7kXAXKFzqFWi8e4skoNFt9tqWjQ3eNhKzpxTaWgGnMYRv7ucghdQAW26j2wn4Si4",
  "key15": "4ZHLwRy66WXSVs7P1jKFd8ES8XC1UJNhbQAW2DWGTrS2m6wEahCMFrjXTF6C2NYVrfLVsK7VPF4yM5Lpqf8ueXk1",
  "key16": "9ijX6Y36z3ARwT7ZCRwWAammmdTE7Lx3xrJ4APxTXBNpVJGzTir8YoyxrBN8WH2fvojmnyRkjrrxoEUJtcdX6oo",
  "key17": "468Ad7oEXjvBy3fuU1UHkKU6gB9qZ7Nz8GERnZJrXAeMWFCZpKDemkW3oJD3iH3CDwQQVP4aSpgKtjkpLBDyc1aT",
  "key18": "4M59BECvmpAQpaQ5B7eLKYUKNDDm4CCKqrK1htHL9drZ1ahRW2B2XefJAvVRD1a3qym4bx8yHCAvJEKpHukWdvpL",
  "key19": "dEEmvV7p4HLvNih6ipRmidYvfpAD9bdmTTtduRp33kaYZJy6S71y2uqP4XFbmnjntDWMnmUUaS3uz9WBbXgBzny",
  "key20": "21ZshfB7yzwSURE5VbiEHeU8D4KFmULufVSHXo4gWNhKHCx6JT54VQhsQg13ApwDPfjKrW6GFQeqNHJn7WFJXVjC",
  "key21": "3ESV2eRifqJpBwg1MLq4P7ajMsgxgxfAsA4AmT4HTC5UBj4QKkD93kCd6S1uJmRgBS1vKmkvpG5j1Q83jCYppNRN",
  "key22": "3TJrDs8ZTYxVYGVqT7BVL5Bge2NeNuRcvSaPS9Kr4ULorpZExnxKQ2UQm8YGC9fjsWbrWtRx7sx41Q5yz5KGLFuC",
  "key23": "3L2JEKQMRZVZmUxGcgZPSDPQ8kBrXE5ZktqarfpnSQLMTmQXDEDpfHBUTch1UPDfjRR4dYzB7DywrDxEp5cvJSpi",
  "key24": "WfYMbCNwtvn1XvnjWjNpKUNPrqXm1qP1MNvrjhKxDoZJzShYrkd6ZwqmFGDmMTaomZrRMhxJFyqiNacVZgBdbiC",
  "key25": "3r95CT5YjMyhe3xJzt3prYpqnb7c8W2dLsZAZ5oXJj1K76MT5GePCt5qHWj7nhrTpZ1ebSF7rchbpah58JxmiEAK",
  "key26": "2RNvJZH7sh1VQgd587huap2afd7dspNHhauedwp2xwUH7awjWBHmfQhw96GgV47ins3ehSVSjA1V7eM5RVSz1o8T",
  "key27": "5tX3R6ekr5owWN7dF562rQYY9xCC85rbbLnfi1byz9cSREsY1xMTT571VbEcE346Y8L7SJKdzAWA52MP4Wpi1287",
  "key28": "2Fzpop77V1gFhAfswC3Zrf5sPDbbe5S42vzn3UVcVQPZkApeFTbsSxnu4jkPDeGSiAZooQF5HckCjE2fRyxW1auR",
  "key29": "XHiVKKnd6uYbo8fQ4jNEqZ9RP1dWejS5MMEJ4tywqHEuoodPDbkz6XkrKW6edaVdEkmjNyxue1mpiJ5mHUeaHht",
  "key30": "4fRoV2F515jukGNbF7SdTThRQYKinn2jxk7Tw9C4kcPpnSfhjTudwWtLD6U6CK3QGeqj4CGH7gHuWKkCZQcG6W2n",
  "key31": "2qER7mLLoQf5GQ7uqNPawWnrfiETRjmQG9ewHmk1D85X1oXF26e5b58m5F9afbxfcR6SQKizZ9a35CchVtZKzwq3",
  "key32": "2xtokLQWAVapmqVEequT77ZdqTJKEuVbsYcXimU1prFd6jfhSz25NGhobmxR2dwUToTtNPACHqYd4KFJxnosLsGT",
  "key33": "2Sg6HQGqV8Fd37WUS4Y9wkEk9rHcRQ8vMh2gwzSV8KQMbDSLSaCi1FCamCxcYDKEzD1m47nNreJCegm4LMxK31Gp",
  "key34": "2B7mpPrqMfXdd5qG8kwsZUjxjfvuv9irfUvFjNT97zVWGPxrTTo15bKGfm5kzvSVqTjLuWHQrkF8kCMdpbiS9quD",
  "key35": "CtmHz6USBraqcwmQ1ZpnZc9xyrDwbGznVuW5AbJQy8BwbZX4qBE3cmz8qNx1xdduBZgtYrxQAUKFYMKeC2uZNfJ"
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
