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
    "2drmCQKEpAa9CENFGhiKYK92QT9grC7QCTgYDvaXhDfVVfNHnPvDcLZHkWkN5kxiidyuuJYuvZHRaLtSHwstnfhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kkCB9huXZW1y1FmeXjHFMJCJjjWiUaoTx6uEExEu9DSiU8yPCSW16XrMzcjj9XNiXVp6se8FdqfZxHRvxjsrVfQ",
  "key1": "3zQHLpaFtH6oBBwduK521GRfeNe4YRS76oSPXFqjhxZkrq4d7fzqwLAe3vay4cME6EciwSjzpodb8BySJB6DnEM",
  "key2": "2K5BE28vR5W5FJfnzW8P6Rys86EDENjnurnKn2iAiANCrtVhPTQgkjsCVySd8KerhFoweemHauoCrQXENKECkyKz",
  "key3": "3kibWhw6QZRWZWRsvUCEXr5LiG8bn37PXmF8YiSm4bb2PHoQjhx7kJy4peqTi9rKffm5mRPurYEojQP8cvU3UNXr",
  "key4": "4bnaze3XURo2QUsRgcPCQJ2DYLhtEvgCJU1YqH4q3LFbpEkDwig5Wt5qCFdZARCCE7Fx9ogmkcnq9LJMpVB7keH9",
  "key5": "5Vra4j6LscUnYmXKAVSx2g5sR5PFmN5TsgpBDGzhSWSrLk5sKinNkoPGsNrJL2P6mToEz8UgE6pfZviGgAkD9idB",
  "key6": "4sh7csf85h5TB9nsio1zZiQopBAzKXvyYMwuhrfvAdmSb1zxMwDBzxWRoShtHMW4PgiYAfYKdPxhukETMQNCv5Yv",
  "key7": "5kHkAfE91Q2VxY7bEWmiHRPnD96jPsyR9TPxjBZeiPLeFKhyGNq8y5mF8Hwj21eiAaQrtFZR9DarrQ17xwRXXHpA",
  "key8": "4rvxUMAvSSayjq4S1A1KRUKiRx4VNPsHGrVEPC7Um1WMYV6HJLtdqTWsbGXBowuCWjS6r3AC7ydkYseNGPEkphNy",
  "key9": "2WBNhMrJrBLwTPMfbiCdAe6bGurNgKPyiSCzEsLpCtLKw3DdmvqGFUkLPoqLFB5UYp93CPJWDsqgrGgUNGnoZHj3",
  "key10": "4mpEtfUZ9dkGP4enU2KfW278mrsDtHMJVJVs9D5JewondjvXdzVSLWccjz9q1tMJHLkr9egVcLEfyYu9GV9j7KzC",
  "key11": "5UyNqgBYv69cbYCbZ8sqV4cpnSG4WtPjuAS5JqxpbrLrsSqGagKMx6VziWpSuzGceKrjWipPn6a4FbmPc8U3uQtW",
  "key12": "4hBBWTVVeo2amgiw1Cw1CiwLDRn8qnLQg55nKdP5by1N8JtvvF47PuG49AhwmTzDawEPnVXnHLtwmAc77z3Jnh42",
  "key13": "3YjpSQMPGtc9RMy1C7qQdooYnavBUnr92UZRwH8DzUZbChyNNa6vicQ4FxRnPFb4ZCPnxCPCkRTvh93aU8eQbi93",
  "key14": "g9vsS1AJ1Bogq56mMgsVQh11k9HAZrQh8FWSLcJXFWWzADcdVfg6ttNFqtVjYsJtnWnQD6u9bSLRtMSm7XMLADQ",
  "key15": "4gbwZTjHveKYJxYbVgrmvQvjBVHgjFJcBTWSvu2JPFx178u5RD9S6Arjrb614G2AM5jnEZJceJ1Brj4AGQLXyntq",
  "key16": "4BzZkk1TnhtBPyg2feYwpaXjU7GnQWbaj6UnD3nVh5cXJSSu7N1r2qr852HXYjWzf6gUV1YkHi6GAPsUhUGHnP1z",
  "key17": "61zViCo3SgMMDnxrEzkLbBbL1A3swfYYLRKbziJN5F3CeHH8cDDPEyRb9W41A938DFAHtA8Ly26MutKAGeWXx4qF",
  "key18": "4mxLyzXbnfWA18kqWexCenmVttianWLh3nFheLRzKqrYy856eEQcPEAs8kLnxbz9aXhibGdLyaghzyPttCEZHDV5",
  "key19": "4PS6FZy9uZ81hGrTi4gZnFaeQJ56AxuSk2wSLvwc8u5zWc7Q4KWiwj38SzRwTRoUifZKFMq4So5rBSorSDbYd7HV",
  "key20": "4c5A6cfPHK5J5LaCyruwSeJZYCqqUvMLGu12RZLW7ocxBddNarpFyNHjcqdt9vt5pyd5jdC6JYVYTBpxT3BJ98nJ",
  "key21": "33qa29ZfcArfiHZ4RmbZAfCnjXBptXuTKL588j4UnuYkpucFP4mN3fxfkrG2ibAKZ5v5oLxdjP5uTdinK8vbvwyA",
  "key22": "5fAc68QZLMBp6HfPd4v21JYBquHUoMGcaGfu4VKKmaw9wv6Vx5XcdzAy1gp2oz2aLdJYzxXLSHy8jZkPAso1vN2x",
  "key23": "3q7M36pGcKgUtbJ45toYaW1g7ZyALFtxbzdEdNkEPCuXRoermZa3MYp71UeZ9NUWHe4rW6vwEWyemPqu2rRFJ19p",
  "key24": "3j6cHqn5Yx4Yo4kNZ88JPp8mdo74o5rQagrx9vG9nP5H1T5zu8dAwWp7ALgvoFXUaSbiDNK6bZvwzGmkDqm5axDU",
  "key25": "3EaKeT1JADSRzSGzRSa22abSa5aUu9VjxEQGxDn4SfZWFw2S8ypXGBw4cmQSpS4vbfVeQYqPvQZKiAaSrcw8qPUk",
  "key26": "3G4iRYoSVhZfnambDwVZySjYLLUMHUzygu7tEn4wPZUNLSEx6HLrdtrr4657nJVtS5VN36HGqnnqiNtrpkDUkU4V",
  "key27": "HMcjQyR5EvQVaLB9uPVsKni6WmLuqKLxEz6Bxx4TSD92UYcVZLrnXi6KEEF3qe95B6BYpsGU1PxjpXPHEGjLsrP",
  "key28": "Km3e5sVRPjgqQ6hjxPjsMGJxh5JUUtevV9Vh5195XfVpv1ppZzhsmKGRwQSDeJLpYXhtKDFBZfBmA5HcVKo35AC",
  "key29": "hHfuzEfxtkDL2Jnox5B4DzaoSSf7UXvvRLmi3C4V185pwhwamiaynbNVpaatZy3aqc9MrP2A8ydnV1fHPdA57k9",
  "key30": "5ESH5s5To1HwvdfnfJjQA1S5k2ttsXRZuxFcCLDXDR86Pc1S48MyULqerWk63GtMdWZFpHGmCEVSjqCudtmh9gpB",
  "key31": "2FDktgfVVDYKGSeiMNtHMU1vFWoJoPdPZj9onaRVpyERniosUe7vuMfW9Wq4G8uABbKEZxGFNoqf9NQLxG9X3RCN",
  "key32": "KSSsYE4nbUBqUhnvzr2u3A1g8HYz5UhvPRp1tz69MGofWxugoUPjkHyRBsAVVs1bdxkjf3HEAbsc6PN31QUbEPL",
  "key33": "5SahNBfRKhtG8k6o9KjkKY3qBAuBBiUC7zDHMcJ8nHcx5ct6mk8qadc8bKRUyAB6HuaRE57RrcEN3sPnYzZvyhP3",
  "key34": "DGMtv53YC5FD5AqyoNKQT2qoYfmS5x6HJfAR3evHX3ivkRg8EQMXeewmLMiH7AasEbUprTMZoK2vmKfbjnhfbYp",
  "key35": "567vyw1WfPTf3yJnEW7i5bxYZgwpwKCM9p3YB9Endy9UMancPff5JUuftfdWGtfvkGHXGYfHMg3xGWJJrr16UTiP",
  "key36": "2i461MPdBzdTCFS2UrrHRFQcrcy51h4cH6hAa6tdjr3qQ7NX7BMKSBTjS2kS31VxfPhPyuUTyXhvHmNcFZeGDPXS",
  "key37": "go8UoBykBXHK1QHNyTzeKeAo77FYWT9G8iemoPYC463bxg8Qg8eGj1oMNgURmoi3ijEjTTXdWjaQULBRC4bKByJ",
  "key38": "5ZLfig4LrSYrZXJW3PjK7o5GSo7osfoZ4N4UdUmgrrTT8fsLNeFy6yVtf3LPE6WUrZ8ELg5skzYGFLQjjL5iLddq",
  "key39": "5iNRcsn1jv99Z882F2uiwGFBdYeg7JT1BUPMF2dVVdRSTxkFKFceHaDRn88RDduxnoPt8EobN6c7H8uAY8B7h6GB",
  "key40": "2NSZ32td7btwShKWqxPdgZgeP9KwKqgL15eoaHRsZLYqu1kRwThgmgrrJqnSaesStHyBavUEbZWEunP68kzJ6JRC",
  "key41": "4n2i4UCWvz2SLe7iw7yJjW9DbJdWLXAqSxWvexD1Y88PcK6mDxYh2BRUqirRZ9Rxsu6CkfawxE7FrgrTCq273nPs",
  "key42": "4oVAcv6we3SokfRs2tic7UiJvhrg72b4SMSM9YdUSSGcwTcthsbk3V3oJVEkVdpVY2AvtMfdWSD6rJu22xvtvV7p",
  "key43": "8Fm5yJX9H4KasBDYZeCqnZU7dBh1SGUqGwZZyYJ98Xcgxt1z1B78sxxEuZ6ZJsF43W4LUURFzqB67XS1tcbcKRX",
  "key44": "2YWq27VPFdsKrUXFTRasG34pZWZWXeZ5w2WF2LPs6s99NDA9K35MAHpqvK5fye3cf3ymq9cZ6PLmiYyXZnR1GWdz",
  "key45": "3VJNGzZTXmjdhMTbTJ9XGNoZ3C3aErz5uYi1xrXihyYq2rYdVaFHVPFnELXotHyy7ED746XBmzQdnbGGF5AAGEYw",
  "key46": "5pPUji54RhUU8WQTRTdNvKJx65GWMeGfL8fc2AEwVnN3ZkU8WndUy3Xxo1fiLEypw7PtPg8gtF2HFNjwR8btQJX7",
  "key47": "5L3pZj2zgrzYHE627rQ51HraD39SYRGJEZ9BZXP1Ckd6L9xr8BpSAh1Y8ewzttSdp4DAwtVESKJt5RYYfXwYBdRu",
  "key48": "67LpBwbCgkfpwbfZTRK6yppLdktR5YNQnS171wCXr8X15NQHWgJHfBKRsAjzaPNB9p1M2pbVMyCk4Wsm8Svu5mRD",
  "key49": "V32dLLj5WFNvV73t6QaN4xsi4JZyxp2exqwBoSW5MeomCXRXYBKbMaaphH5DLkMqvaGA8SMS1PD7zCag3CoaBti"
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
