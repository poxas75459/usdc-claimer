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
    "63oEMH42ZjbifqiyrW8Yrf4k7mCQnUsEtuaZ52wUXbRmik9phYHVjQVnLhP7t6wK5b9mvh3p2w6JhRJV3ALrMR6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pUKhgDcQq8xpaGpkori1tacWJF6ihC8wmyEtQFbTEqiBjsxhmLjsXsmg3ocgrXZBvKHt8yfh8S8HXBB3qPkAWN",
  "key1": "xopEcJeVixGVWn7yaNbLnjCssfBAmPvQzs7w7smEZwQgjF7cGFqDxVAd8HkSEhznZu78hLQeaDUM3SkXqyA4Hew",
  "key2": "3WXrom11AAuzb1hkZ1YEjZfEETdcGTsnfwDB79XReT8L9imNZNbrua8iqs65LbVcSAGexacHzvXv3jawFCiFVmTk",
  "key3": "GYZW5eYDiirSruSHDjUuK2dMUpR29x2oWfs2B7J8VHktkqLnwNmYwF6C4CFm1exNhdDNLeJRkghUSUf7uoVjn5F",
  "key4": "33f6xfMKjxFDwQvHRNBcE2XXeT83mwFSbo6Sr8Cw4xR8zgp6hma262HtEjj3eWXGD1mMdk4RThYT9R88jYtuHFos",
  "key5": "22hVZuei3GkBPwCSkCMQMog5qFj615G1D9yrdSRVcHgtDC32RetHfQj3PTBnEjx2Nt3R2mu9no56kBL7FVXayYM4",
  "key6": "5JNhX7UPBi5RiAZ8mREep2jsXhpdxyKpkexD8XENEVC9xib8fCouR1trJ3ajAeTbTN9pef1HyB5CcThRadc4jTJw",
  "key7": "5SJf5Y6dCRRcx7MWpKXEpRG2DW4uzR1TA2LdPRk4EDw4d5DDtsDNuFkjFcTRhtdcRdQcWJmMDUmNYkmbheycsQB8",
  "key8": "4SWk9VRdJxkcoLaLcBbY8oY3A5HSdG142CmATjGuzVUzNFcBVJHR8mhe2sqg4gWfSbtnj4dFzBQDG3Kr9Ds9qTP3",
  "key9": "5CVNzgJW5j1oEMffdsHXRiLi1U8kFJA4EDakojkziM4iFQNHbqneavpBCNofpc4o9zFR9cuBfFR5s4FrAbrunsfn",
  "key10": "3sBqr2Cz7oTh6ecmVJy3CPFxFzmKSnEHhUsAkjxmhMngfoZaafG1psJhD8Bio2dJCHRcbC17voseLob16VVspLeu",
  "key11": "2cAYGUM5wheiWrrUNRTQUCTjB6zi411wkto6ntDgcmc6rx7fgvdDn4Bk4UP7pyiQTEtYxSmrzvhWfA6VacC65Hj4",
  "key12": "9Qa8zFmMRnHvp9YoArCnsbYayi14FV8LcQShiFFa4Fn6UgdEzScGnRziBEfYU3T7QXBzFMzRAkRwxbgcpFCM1jC",
  "key13": "3d7bxaTFZU4RF1DAfzCmADFzq75sHDstGJ2NQ7J9v8Pp9bff8nKnWvso4wztKFtmteAyCqwourQm5rh1GRAA9MDZ",
  "key14": "2VJ5wDQdTqDzXa3gsgKDBLaWAVacVkVFyRiMX2Zjp9uGYJqXzudLjQHi1VGxGAxiq9WWKZ5aN4t18fnDWMFcRT1t",
  "key15": "2CeWf3FUn78d7nQXYMqx4SbiU8ZHePfVvZdDb3hk3MJuN3C1UCNCtvoHjh2FA9jGuxRRPhQwVg115uwbDDBiypxJ",
  "key16": "5Vi8q3YB1KqQHqssLtHJm6Ub6KgKT2SB5iaZBDT6L876vWMt637LgxZSTk9Bpo7Uj6Cz2UnoHfF2WER8awoiyksq",
  "key17": "3rsECfSZZAFZtAbcT9kVe2CoUPy45P9rJdaTbwpUTuW6ypdDsu86M7rs7xT64mW5EQpP8s9JUV9czxGSM9DN3RTJ",
  "key18": "2GvhbdxUmEoqdTnCxZSVHz5saWJVkd73tVF9nqSkzEvU5Dt1AuUQc3FfKBZkRLGtiNe5GTx7EZsge3ZX3cw33Tun",
  "key19": "3yW9tdnRoqhbpNxkPaX4y75goU82UPYpACyVX5grBswfbhcpUCPYNMyKk5eJWLuHgRm7on7aFvhxWqJ8jVZLMFyf",
  "key20": "5PKr2jUz5qbMhCwSEZoDRtNkn3LtVUuXUrbinC67zKsRyAFEAFJLGqHhpBiWUaer3jNoDmp7nDvHgdsn1DkDJdtB",
  "key21": "3xshDXSJdQH6fH6HCxTgemQNWMkX7VoBsj1hUiEDGZ6ZqN88Rpjqjzx1cPm1tCiqZxtGczbGN8Ch3s5fiWBK1GQC",
  "key22": "DXwyPWh8RB84jxtVT8Am2QFt8ne7w4zskbPp5tJiEZ2wqGCsXMJsMAh3tnXpFAj4Lf9yV27kGNfAXhdkNgFG5jA",
  "key23": "5nba6oD75m5exy2hdieu2N4RhNiQdp9F1H9AF7a8J82aLbQwp1cWDbb4MSnNHN6btwG6tUr4uc5DJz4wHJhF4WGH",
  "key24": "2hRUX7XyGAEhhdYzzTQv2vqCcVivkRGKQZcemhAfB8wH3Lpe9jTRwg7p1rXysHfPGyMVuZacKrgooXyQ5JrPcxmM",
  "key25": "4cSbtJNe7mHf7WvEnEgaaQcrKBszdWx9AhVYMFo8emr7EZTTNXxrSX4PdV1u14KUi5EZc3UgwWKEBaFoxiqFEeud",
  "key26": "5uZCo7smN6y1NDRsSi5ZHayPUDGJW7vfKStTgv8QjwiSQ5TqE1Fbtr9Xh2xkgGoDv4Fe85chFJwRi8vczCi1aWMK",
  "key27": "5eikSYH8wjAhpLNjxbpY88C156t4zPjyXCcXvJascVUZFrJqqJpUcbE3KkzPy2YN7K4DcQN6nuG3HsuJ9jMdgxEL",
  "key28": "2HK2YUbGGP6JS54Pb94Dd1Hdok3QPSPUk7XGqWGXyRe8krMVs2ynGvq6atdEWtS8ZvDWdA4fkyEYP9R54VnngS3m",
  "key29": "4Uot9gcPVfhUhBbm5MbD8yaai3DVFkvFfHxmyKjc5mVasTqS5QSxxr4Ree6Lw6FKSs7xV8zovzA96hgdmTEDHNd5",
  "key30": "5n7AKdDsBKpcWAsrn4FZ9DknWowMXfrLQUn9NncZ4rGsZ5cbquKTJQPydEiVy8NsmLT3mXJ9XtTMsF42N8f1dE2p",
  "key31": "4evhHB82YKzzLP8VHgHqPcgrcSqLu8Z1Br2KPX2Vthmm2tR1iiS6CKUYgK12s5TyastVCF9aDRQdtAB4kRbYqk6v",
  "key32": "2jA4wNoBt74XEBBZuYrV9trgEKgwaLaVKDrVofXLAWLPc5F87Hjhr6wydXbw9RFyakTwDZWWB59zXoYLDHSJ6Aoq",
  "key33": "4P2uPxgd3GJQQYQtBDXJX6K7Lgixryhps3F5mVBb2GQBaRt1z5dQZAkSNSZuG54hXhNJD7Xy2n6Nyh6LgKzyFp6F",
  "key34": "65Y8Q7EHMXBy2AXar6VTeGPCtonmfamELK9yMpjQN6MkV8gk1FWhvNtBYhUW7L7fssX2ARMaYe93nMFuYVmjBA4j",
  "key35": "2RSt79BS1D5iJFvtnNCK6UUCfbQHyAPQFjW76zZanrqit4gGhmx2jCdwVdTLv7mMKjKjHrkMpWZiy6xCfiZREfGh",
  "key36": "2px1yF1eikMqFhgbAGqeQRF5Xb7GPRAqACdHdeYyS3T4MjrJ96eRXx45TLk3obRjZjmeTJLefucoMEJJpAnuKeoz"
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
