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
    "5t37gK7ms1BzUJFvTbXdeySJ73k5KHDoM8JXWSa7rCjrFxQV5zadRBfvTLpeWfM58CS5LBL6PL3ftyHR3NoPaMnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z3GCwCfKhxht1xY8Kp7V7c2gxz7caVCn5aiwZg42JbqRpWTKWjptvjKxcDsWHvpRZ6E3Htgde2rtrtaRmBQpkxK",
  "key1": "2Q3aHHR9o38h4xone7yWSxcyKYWYndSsWhSaHywxBip81sTxEVjBvizocgjiR35yipEzNJuqG2noQwnQRUzyT7Xa",
  "key2": "5e5k33tkiHjeUt6bxcGJvUKPidVE6x5XhtpJ8vttidKqNr4ndFYuvjtnCXamx2b32hQjSuMwCSz7vhES84Ty9cvq",
  "key3": "B8hZq9EBSL8RtupcBDTeRPswv6r52fiZ9GFaqshacRjScscbUrjtZB1Ux3x1jkacd7ib4ccYSxSsA5fy7HoYQFJ",
  "key4": "T3EkDum8HGbgN4JJsN8Va2LRXf6E4fVKDb9QMha9GaaNzx4LmS7ouxvtJgDqpSsS4pBvyfUT7x9eLCd6DXxmSah",
  "key5": "2it5XxudUnFpnfJ5Hin7JxxYN9SniD8zZ1Kuo8TaMuW7ETAkaKq5U7aiBVaNPVt2FmZRpKT7nW9PzqVte4vj1W6S",
  "key6": "3vJNihieVT4XBJTJwrufC1gHCFetDY8cUKUbiknv3ckj7jX7qJNe1Quh2TdWSstyZaKvsYit3jUTHbmhvk6vUDC1",
  "key7": "3w34825HmRnUiDChmPgR9VbL59GTcaF3JraLc1BTDrerRbUdhRSZ9LsxNZ2tf58RApVCrGeNEtVVk6TmjYh5xYiz",
  "key8": "49e5XWALh3DXjCvxCvuYmvMiUybfgcVgLaMT11GnxXsoNJtFkELMTHrPBisoB9NX4RzYxcdwPZYAz34RoELhLbHR",
  "key9": "Bi1DVprJN9NajCC7waDE3kEmwBtmnw42hELPm43JCTR4FYZq21dLHir7daZy2kvBRosvbC4nmwsabV7xPGCwbQL",
  "key10": "2L43pxWLrWV5iDRPGZrU8u28xG38t3FjzYXaHTxXeoEXvActccLVR9Av9QFKHED6cRL5zJCVNrrzue15zrUPmJzs",
  "key11": "5ri2qxxWcLmvmUS1Qh1iahco29r3obNgzrDT1b4rHGH1FCqJyNvkgZaRA3WtZ1v1TC3rYGAf3D9CQV8Da9qSxsAN",
  "key12": "5QhNMRaXxfaefXB3cqgjC822FvfzdkQ1n64yNTHwVnQ5C2rjJ5dgxVvGbWQCG3u11Kgsr2FTa5SypqKTGUM1HTYu",
  "key13": "4RDj9VGefLnoB82GhcyUJVSqEaN1qVwJM4BT7bUN48kW8Azj2gTuiDZdSHVgE3bkvTAxng6ZLxYtPv19gESb1d2u",
  "key14": "gYR5KeRYkZH6P3cCzX7n8Tr3r3Pmn2ZqXkue8VkcNamBnQo9LbCAmZL7Z8rdYQoVW63KdsMyrdfXXUci75YQjHm",
  "key15": "2NDNutG89wnxSgFuKSjWQeKdCPmqaMx5rs64W9APYPNuyhmrFcKZHY4bfSa7sLu6sLPPMudt91rKqVJynmeADdJx",
  "key16": "4JKSdzkYjoK7zDF4K8GcvducAkLYFeJYVjktaM4YENcNUYq3ZRHYyLDvZBYYrzyaZqKjMCCi7xqhSDHgbMQE6Gej",
  "key17": "3AVDRVrBo45ZouqCUMto5M735K86yAsFy54Kz8cvrX87xtC3UAgoxYsxDxsgdDanVMjjWcNcKWinTQP8zh2Vhcei",
  "key18": "dWrTgKnnsdC17WZZgzMU2XJif8uH55ko3Gm788RDV4B1DrsFApr9jwF2FNkLs97xe2zLBcY3Z71nfgSTMtKqNFs",
  "key19": "4qk9JvxPkYx2JAJ5Vq5pPFKLnEmEanyHi5wjAPfhHJZmCW9CERkJdKj7BYm7VX8vPsimBaEopfuQD5RtsMAZgkjm",
  "key20": "4bYwm9kXwPLTrYW2a723RYm9kaz9WEXXMJYDQ1mYJCSjAA6RoitFTRWCwkHk18Cuj5sUvVxF8QNoD3TbgzZMZ8Aq",
  "key21": "5XjxzrMgjUjcx4TacM43hhsUNP3gmFUQTitE9fdnv8VXCEkgsw9y6mURBUygcrVyuTTuHQNYfmDk2nTA4HwAtfEV",
  "key22": "5dqAz3AVKEztHqdQaVFa4ZoVtuPDwfexjbxac2McEduPf5Fs5s61DNStZYbZryHdWvt1QknJpjhsqy8mq7oFPhx",
  "key23": "7f34u3cMwmLXRaQGpeqeoDaFp3B3r56PpXB4R5idgJkK3aKGv7aedbnSwZuWHdfAzumxBJW94DkgDn2azZrvMPb",
  "key24": "26qYqNuD3Xj9u1F61HhZee6haHiZuetmu4CtA8gtMhuZ1Dy5HSg1zyEz7ahyxv37YXYvgmBYwbf5rma7xu4xmERX",
  "key25": "4ea4MatfVS2rV64juRnTSnk7DtZt3BYrZGXMew23acKLTNv3BXPSoKYFxkWkKh3QNNPtExEzEcZkrXaAMCZbcgao",
  "key26": "4DJRvbFNg7EL9HLufZz8PrahhzTaNzK9witawomzzg6znTGC3BrvL5xQLwqCiZbt9TNwsqVdWNdQ7dnWQZReic5a",
  "key27": "3fyq5yQNY5rbVc8R8GMup167MCiYpoccN9xtjWW2ea91gr9xMf6GbzYYuf1cZdA8P3gz8QiJjkkWCW6RbDAdLfGo",
  "key28": "5uAznA4SPiV2Fmn7Y6u58jpqwEWQswzMXvQ9W8NoXRJu8dXJZ298jLY92kudyrDEhrZbsKA7kiM8KjhCkhte95iM",
  "key29": "segoNKGuhVhiJTU1nR2iJUAabjx565cE45opWcM4SJ9cFPPWgs7MdrpA1pUVCvmM2urrBcKNLwgF7FBGsWeRQ1U"
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
