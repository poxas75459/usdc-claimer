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
    "G1ik5aeuvXp7ZK6vxCf7NA351K7TcavmdTwwxkGyqVjqjJ6SnvpxUvo3DFNrgBQc9X5Rz8PqnaYErr63U7yhT84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jhVQ8Tw4tFkPMroXoo6Xq1zkUqUMMknJ8inG5kMtQNWoNew1SeaXGMHu9o9mrwC9zpwp4YNiNQguc1yV9Wh7tn3",
  "key1": "5X6ng8HK2TUncWNnZDacX8RcreZwUkcLdFEncnqPVqE8mRZUm6AZBngrkPTxPdaq9arWNfqCvHb3ATr68qL95Zdq",
  "key2": "48Ad4XgNgdfvG1G8UXbXoStBfk8jfzhcxbPYachcigfWEdN25ADxhUdEd9jnhomgZ2iyUyG4rwHzAshzA9EyVV43",
  "key3": "Q4rnQGw6CWEPc2vW9YMGNxi3zeYzcg8HR8bRUzoGBZSKZdgQLYAqxMW2yNiveCrsyzkJPr1n5WYvRtvPUVMdtLF",
  "key4": "4EAH1DHJ2in9Wcr2By3MyhP8dPsS9HkFqKA8cLeDiDm4EsrT9vhnDucnuujjDp1JGthnVZ54ARgPDDjLEXpPFrH4",
  "key5": "hZC9fBBxzgrEetrUnRSGHSw3tA45mioU3vp1NvYDKTtyhwKVZ4hjwwTkf1GWE64GoASxEWA6ahf47pDgvFgWdsL",
  "key6": "45dzv9qURJjtFstwsNtJsjRexbBD7MRqAir6odfUb5RHX33xVWNTCP2VyYTJ99bceWhYhmG9pKtJWRQY6D2bLqcM",
  "key7": "4ySPEB5DmnUu4muf43up4pjb8tT8ZvGnt4dMqus1C8dYfweVhyzerK3zNyw2FDvXrMeovkMFBEgMrc9P7GeqgiF5",
  "key8": "5de4htZdYAPfq6rpX8eZcy8q8MuweucoDmNzQa8FWGprDaQYbeRUQcVZx6Drj8ZmzhMazPeUkFscbHSkdWYyh4M6",
  "key9": "3Wbe19oD4xmLQvtof36tNyuSCjmChjgPc2cnqyxAjgzb3pRt5dZHHncP1JjBYdtBTpED2QFAus4oEuWNZQCzaiEL",
  "key10": "45i6pfha1fizJTP5fvhWn7u1xnGsQDoDWRtGPJWEkyJBF2x7nQ5ov8iMGubBUc1Rf2KKZY4iFLxknkGgrxCADBhD",
  "key11": "3Y496AAXHPJe7cqgRuR98JLg2GqdmjDsGsVSEhMvhYevuWYF5xhzJUhVfzo6ZaQ7sKPconF6qRFYFETm8aDRMbse",
  "key12": "6eG4iXf65bxVk5ENPjP1FiEw5wCfGRAdLuHsFxmPsTDUwbUWBymGeBLimoZzY8zvvuS7hTqeZAjKxAkP1vq1j9Q",
  "key13": "gswRABLimWLoQmHW7mx6MeYYcpr36cppWbZcCC5SfSS6KJL9V8ehwYMGm7XUrEjfpFZsXye9cVfLY6tiL2HnQQd",
  "key14": "4z3Lmm2oN8KyvmahLRBb2mojdnwhV1KEBpQhmqGkAjSUkn9yi8G8BySorViqquBKLVcvoafUvUoEhuopM2AEFnno",
  "key15": "5it1eAEP9PEC1xf1mdHydB7Nuw8TW4ReyRfZ5wtKfxghUbwy8XHj9z2zDVQK2AQvMYqjvUBXz15feCiFNLGhpEkc",
  "key16": "3LPRk7qZEsND1Axb1SDAp81VG2bRaWZWLjXp3CZqfeTM9nLaUm5D5gQuXWPehu74PtvpZ5ad1uj5zxuy3FgktEcb",
  "key17": "2Myce3aew8nNfVJH4y2NaFF2QBTzDbNxxkMBuTXmLiJ1xGGrFQxhib3t91jhDberosMG4nffHV4ZJi52FMg6mEwB",
  "key18": "5A9JAUxWUUXtsjzzUCYFvGqVSNT8BswhFd1geUZBgQ4Y77WMbioudUhPsLFK2TGRzeG7DKH2PMXRoc7xpb5cLfqQ",
  "key19": "3SMrkvDHKgqx5kPRnTDjbLBqSm2Z29AVkYgNWa2oLfRCE7q9bBBu6E6iVtngZKgbg5RehJ9wfiG1A8NxSMwdnANu",
  "key20": "5xcRhtiRpXbcWVgeQA3PiAcoqYfknA5aT5QrUhCFT5w6rtLjWNow2seRxDn3PRVc592fB7QoLqu8RCrZr6dSPFGm",
  "key21": "5bBwqdzYxX9krzw2iFwESeh72KrJQovfEwaPgoyhFbFc91KcteFUqNhPQtCsmq4eDb3F8PR5Xks6CvkoTa9Dh7ST",
  "key22": "5nPks3DCb5WQwaoXGbVN1fs8gXtjuW3iECxpz6sy156ihp4FGBPbiFVtQYCt4ShQxSeAd3nUTcGR8R1AGy6tzbHZ",
  "key23": "3FaAkVTWYezFaPZtL2EPw6MKGuzwBpnZLnBC9sgL4Gfj2zn5PnmGcoYTbJCKi2uKvUJnU2PAfniXv27yH71Xh8AR",
  "key24": "4mwLC5RXbVBYjSQ9QJRfh7fTQH9aY86Vhag3pE37Guu2T5mB15KpELwTJzvbjAooPLsaPFEDYQrFik5CKiBgiBLV",
  "key25": "4mHVQffvm1joNSZjay52VC3GBhzXoAAo3Zc1PJuhoyUkEBuo3PT1aWUd3PxWz5p4D2qV4Svi6iWUrr2dDzJz6V1r",
  "key26": "4wtdSo4KmjSwiR4dmj9ea2sT1Fksgzo4ZhsALhQnzuU9L8PYSm9WoQpCh13kJTdeUtytoJ6BQvnWb6hDLQHeNy3X",
  "key27": "vkkcRCWfZBopn5tkUvyuAnX86X4sqNfD63MpGxZu1jCrBEpuQvm4ek4wF3DwpsbxDHv7CrgAJCDr22yfVnb59pL",
  "key28": "2DmFYKwUCFb2siY5cEmqG2DMdy9CEHMxpzg1LjRdbpWrreeQF6mzfnUm8yZPZxJEBhxUo1B7UogzoFfSoE9Fh9Hk",
  "key29": "5uDvjQu847kUxzc6nX4kgXBWskf2MaAHdTajwG2nyvpZxEDrXuF7RvXB2DLXrh6Vdeu2YkNngd5DA2enUE44eu2r",
  "key30": "MXDHVZXNouLjKreft8a4DqQ91ps7H4tLPD9sFGH2NHLa8LBrBjFeuf2nVNqFb4QLssE1KKJk9HRDDZbk5241eeo"
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
