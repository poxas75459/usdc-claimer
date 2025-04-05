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
    "3D71vMYQKeMjkzY4HaEvgy2LYVrdmT9SF4Uj9LxuRaAyZY7jopYCqtmHnas3My8eeEKcx19LeFbVLt5QuLyiDCAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b21JyLqbMYDG24n6TcQPNDaQgu9Dg9SuzHxVfFUYHW5ZbhDuFxhNnAz8wYUJgwifUwCytjTQbm6aW26HLUKxw5Z",
  "key1": "3vG58MyGMKqngsAZaL2tHzEEFDHB6NX8BXQuqNM8DqUtiuJ7LHvpgaW6xSmSYK7yabm4J1qCKHhRWQd47vJSSqwD",
  "key2": "4cEEQwhEj865NgNrGsxfbQar2QSmLh6dLgz1noFPjps1eiEwVogR3eGcrGjcnUnng5qo2xRGSYBbZdy8N3z4m8GN",
  "key3": "5jKaigjwdozhCk6HrYLoJF5aUwHHkwYd5dHUvA4PMGo5XyK4cASznx3Y9Mt2t5T3dn41F3Bsn5er2BnKuj36YAYF",
  "key4": "3PtifQDq1GCuxLKT8v3uxW7jv2izvnRif9WFzs3QucCJomhN8ZczPMNmCYDXYDxh9S5zq2kEjgwAiKeVGJ5GJHzc",
  "key5": "3oQursEj9XnHJZjwj2gdDJ4v6ZEawHzvgNRe6eFjLgVFfB8mSJYMnoaqPijV7d8x5tZC8e4SDutqWBMNrgro5idk",
  "key6": "3vkTSL4f1TqQofmLTEUAmSRrTT58t2q8LerGnfJhwdFATvEHRVDxwxhtde81vJNn7yjyLNDTeXSwRdTyryfs9ixv",
  "key7": "2w9awjQP8WjZmW8jx3zP4yKbsig1MYc1wHRTxXQahZK3teUPu8Luxm43v1VQftQ5H6fLXTLiHNzMgoU6a9ELxqu",
  "key8": "qHHfrpyNa57NEpXW8JNWDTvLXTeomK1JM8VjQvRzfCLc18p5qXB1Mx9gcKmn2JZk49Dd472Jj13pwCybf7hRoDy",
  "key9": "3p3XKPqVV9sKLBrWwc5YaivyZnEeAeMT8oufXD9d7YyXz8ArFSkZerT3bcKSqNmHFydGNfmdDCz5E4khUQLvgWha",
  "key10": "4bQqitDMA13Crm5p9QABEoVKeurEmC61y3NtFmPfxnrrVwZZXomAFxv1RNtPegno1oWSoQAJDPoEdCP9KagMuo4F",
  "key11": "2XpGpvL5ButTtazpfSX9EzWaNqEKg5q5ZkgLoHy4xFZrE4WdN7mEc9Rshw9nrdYUaYCUbdM4vdBpeY8whKFepHMc",
  "key12": "3uF638kYX7qfSfHBGwdLKFKG7omUWDinMKK4eC44UqfRAqqC2d4smy7RLGdZayXfa2bJhptr8AxyuXkeYZMTZaG3",
  "key13": "ThwbRQ5rp7wgVnhuMeeNJMaohTQPA6XtjhCBiCDxJ2GCKA2gFGuC8Tcb5T4YWbWp8ZxJ9Tt8U3qKXMSPzfEsYQa",
  "key14": "4tY62pUJjXgXRmwBxMCKnGFK7NNq2s5uhgsA1iZNPc199zZ3RnWDMoHs22ApKVbR4S57ZtumCMCrfjaFhc4dtjwm",
  "key15": "3SxC3SS2XGCdERNSs1D6mT1wFtweJSD2Lyifs4GFQJjeNCjs78dr4GrwQ2RPPFzVgXEmZJaJikXUKWSfQDRLKpNP",
  "key16": "4Epo7gsHc73TNcwKangDYzREHDCWg8QYHEAsgvT4DYjuuhGSBrJB3D4LytbJwketmiiRJTKB2pkxULa7C1tHMk58",
  "key17": "2nvCRBLZKNvK4n8EJXXa27KinjkhdASm9nT2AKd6y2cmS5Tj5QdsYPP3naxwYXKqBYNouQMd8Si8bUPpQ2swjobP",
  "key18": "zwHFuNgdFq3tfFHvCHhytwjqaANdgbmp6qAHWbqL6coaKkQDiTtcHNsNAPZRyQfrtEC4yDRwZ2HCsk4sCdUZLe3",
  "key19": "3h1R2CSYAwAM9o4g8QwMSc6G5DSqAato7Eqi7JLPzYAoZU4XwEXSjcCc4jShHmNLszp4pwRSi25YVdfTp4BNACvH",
  "key20": "5eW1YMhAjri1dUYEHT2nBuCMDEmqCgAA8krdXo2Z3DTR3mm23MzL4PHhuACaEDocGF3nToT2xDA7BwKiMWygD9jk",
  "key21": "2c2eYZ7XBatQ8uCKSuMZRFf1Et1XsYQo9nqMgaa3FAKtNEps9QzgF3VRqDVryE45iRSnR9NHxGAHxAsGMDdhfFJn",
  "key22": "Dwonp5kj43AoyjS8F38yaL5sKF1M731AVB79JTX2iwsSSCiUv5ypUU97SBpVfQvrW9vJcHvLF6S37jXU3pwUzua",
  "key23": "2BThfGK34pdA1cCYJZMnGCBjKeajUUb3etyNJZdVqJ2BgAnUb4nbJs4vSu7Fyiex3yCT43KDqinYt9yZNWhqi1Gw",
  "key24": "2E6sWdzpF72qVVMoCWqAQfCry66c6r1xvsPyKR45HJPUPDoCoygDbunFjsAuJeYNpCBsXokRjdcx8Hmj6nKEKXSX",
  "key25": "3B88ZnPnZiPbFexdkDQDCenDSWykRoa77EQmsYj7jXkvnsxFTQKw5apgUzSxNqHBALbkA49jUGi6HWjrXyatLmeq",
  "key26": "4Fqr8Bi38C925Lp7dJwge3vuEi8VcR1ebNrcmRFyowcvWfk34WZ82WiMsgLRnoLzhF8D1fxgCW72yHAEebw2SwFo",
  "key27": "5dhHPJUYAvMqYhscs7XNExk5WqyAPCkQrXErM6q6LpXn17pL4CxbFzWELQDuDXfMMx9KkHVQkz6wy1Ua7xmcPUbp",
  "key28": "3BaSuFmhRAeKRgPpKu4Dvstmd3tqfRfqg1o4vHpZF74x811huvx9QmdCPkj74QBk2gaJKts99sxnAmjCfihBqSDa",
  "key29": "44WJKa4FYbtAjo4XgsC9uvaxJ2jbcyKzKUqdGuUQjj82qZ6dE6271HJPxkbyP5QEfPAU9bodv9xp5A3Gc3dTAr9z"
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
