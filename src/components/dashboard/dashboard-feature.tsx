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
    "65fY4hWmwAeCDQUtsDHavJ8u1rX8rMFfQcv944QiSxaJagf5F6E9vTYQ6EcJ6sXFrjWsg5YBUeUbgpF5GJN6NpER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57rQkeENYXbJKw6q2JridFzrc7WSDojV7ExXztZjVmR1veHCa5VmVfA98D7FUrjnTo1qie3Gsi8vdWxqpcAwLmMG",
  "key1": "4ai3vx1Ljw7xJta7yfbsuLikJNq9PtVtrNc7KjLJaXE3i8T3UDuJTrxDsS3TVGbLi4Ebm7bjQUrC2bnwyBgoFe7z",
  "key2": "Hi4wRMUeCz1tHUqMLALvT8zPpgj8HQmssuc4A84w4boR3ZKL8qCCGn2X4nTJWfFfBMmpQwRrxSG7GehZoGBapMM",
  "key3": "5q1nApRuCfVFZP7MHeDUd2ryhArQwggDHkyCKuYY3JzbpjthUrSbVKfAyprXUfStwwRxg21KU5DWSj8BYoAoqcEU",
  "key4": "Jf52iYtKCMx7f3Nz4kiNHJaUgEs84vCxPiapQzCE9BWiqR7yCtY75eNWPqox8VmDgvbB5ZRTCWrnZckUTeTBmW3",
  "key5": "2bdE6j2oQ7vBho3ZDDduRxnZ5XFynYhbBXFykY6Caum5Y8fTXdnSMKB595YArvged74G8hT6FCdUt9MZkGUk1yjG",
  "key6": "3t8wYgeioMfTsz6e67jkdTEDnadmLofhfT6d6j1G5HNxQJ7H7oKnKHG3ALFBW2CitLa1TCLUtn65Ho4hun3WFwxa",
  "key7": "5dZctuprrnEjmKqs6hhfEQqUGhhEuxiNLVVFDEbw5fyHGQaqNiNk2zyQU6JsjVrcPyFE4npYfH1JxDTaxCpE6rNj",
  "key8": "5Pg53aR8z1tycDvUTtTHQo3MMb1WDX8RXXN54TvpiNxarVfWe7dGGiJYVug7YtN94XvskJnxh8Hhi7WJhvQBuacy",
  "key9": "4afmz2hwQK96KjLXRdCuxrAckq5nhFznE3GcdUU6eiSymyrcqTLE5tNQwaLNWzUfwF9Cijqp7ezvK1BzVv4iixgf",
  "key10": "4HxYvuwDEHKW3CoiLhRL43FuTe9PhCpvWJMbHuHEoMMDbUN26wE4yFZWTHUt6C5UrobHTjxDiZreEaXAg5aofE7A",
  "key11": "HN9QHDwKeBEL4Ne5r76Yes7jTpdvFnEaejDPN4PxVGm8WCDftMDh4VkkSgTpW4Dhwix5w4H7whv3iTWY8op1VfR",
  "key12": "5Ncr2NdYdEAY54H4TRTo8rHKwszwMeWkCknQ7GDi8PwFLXSZzpGdpsVb5h34kHbXbss4DFBUqHRyFLTuXkEaEVRs",
  "key13": "4FzLs3BNKsKgCzeQFH2xRepLKb9UaiHWfFfvZm6q9jxzJe6CxuvkKCAEyW6tFZGf8yiLdfCmXS5MjSY765eRBtQz",
  "key14": "dvXnTr9omdPQ5nLir1ocet6oPfXEtdtPmVCbeS7Ur27mkz8tYgLX7hy2GhZy8ySuKhLtEaZQNGjvTjqf6ErcTe8",
  "key15": "5JZbM3Q92L5vtY2R91mnetViH9cKA5YeFPGrTP8Nxvxr6ZGw3YKRxp84tvxEdpFmVuEYTuiyA2HEL2ZnUQLd6r23",
  "key16": "KAvgp4Tpc2vBRVKxAtvKWs6DZtFKyoVQyUEBXfqHHGroC7qDWUmbULRptjoGqEX5XbPLdLH82wrcqVnkAU98RRX",
  "key17": "29VA1W9KTDenZBGiq6RFg1pNYRNwNPH3tQY6mNubkK8yscaRFEjtraxGqg8d8a8GK9AgF8SRebXYQybB4dEA4mz2",
  "key18": "4fzHWqcSVBuwbK6yZFxhbyKg9pWt3MMnxnxP4yRKKKfsrakaguHjZkA41g9vz8oNZVXiHF8C4FQWTSLMfuxdzaev",
  "key19": "4cV74dXNGqJrjf5nmG1Er2GNSHN18Z1uZPYNuD8GvUsMdnBYSa5TN1aCXCeAVX5xne7RzPpjqQsXFpngkXmu5ELc",
  "key20": "59B55vTzynV32keypPsE27iibZMsX5JsXtdD6sTskE6xMRFtUa7emyXTLa2Rv1KgTAQaTeY8yVQmPVrVoB64i17w",
  "key21": "27hcNycBdxiYubPArxQWd1QJFiRuRiUGk7VWcjypWPkYMr7ND4UxNDuyvizGdTF8GaV4nRyVKYdC8jE33QTqZ6UG",
  "key22": "2Wtw5kPjutEu6hqM7LVC39oQmUDjFQSRM1D52ogsmyhzxJFDXBo14KgoCiGjJcTPi2rtJ9vkBzprGsSkcqGhYZR4",
  "key23": "3okxj8avLr3BGmqTGeyXbZEsMXd6ur9dpDYm9ogejsE6SeXRPTSFKHqzYFk53aDX85CeipgiWH9GrTGSumin2rpC",
  "key24": "hppRvQccmqtxc7qSqzg2prDQjAR37K77r64PvSoBF6vwVWx7BYUvv9hWwSvv42mv4mhFTppJczhKAxjS9H6ttTe",
  "key25": "AiKXE6UM3yXhZ8zPkijDurjMfiVQKoPyiM3GZKZk4GUvQW9ssQXM5sUAtkopCLPJomYx8ANqrumSyRqe411Vpm5"
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
