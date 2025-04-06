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
    "57vnFk6uG5S4qnyqhH3rzPamsPiYyiw5Qxh76365kMXKWBnCx9rdyDkFGH65EetTUgdJn17yrHqzUyxq5n6HBaLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53nEEZVu5evSprUZMbkqiZxe1uACekTJVh3edZ7jCiqYcdBtYyNFZqUbkQbZ9dfqMArrp41ZuBTgNfiwssy2Laxf",
  "key1": "3W1fBESGFAYAHa66rnGf2KB7k5PfmdmTs7MA2gLkKPCwwsquGWwKDfi4HBirPgoWqVHLqsHoeY82vwS8ExrnYcim",
  "key2": "2hY4FJgMPVz26ZwL5M1SBtdfFvci9GUUHKCDeQvejBRDQgxCUE7AUfuDQah35TaJAeyre7JZpJSsTmfenkP5Qh3r",
  "key3": "28anBNdJJSoztaTqtMWQbN2NvtKZWuLFh7BjmhHRoEEoajePeH3TY7BDfLwMrNFt7ji7waA7oohZSf8qhaCn2cZ3",
  "key4": "2ekf3zpahYJpZ4MPFrnF5C52zGbUCxJE1WzkDNkWHYvi635GzEPYY12sM26PAo3tPtsVt6Qjbyz1c4hu1rcHk2VM",
  "key5": "2m1sSEud8UvxuFvGajWqDJJbAh7qscJ1iNQPM6J8P19oXXMMYyGuTC71jSDMJsHZy3XoERFgtN6QyiackjD1LUoR",
  "key6": "4crPHUzbDDwvdku5XkAxXA3BwzPiDD5MWru3YFtszKeeFuBrQK2Jm1QDSJY6E9TRxkSLu9hUroV2RHoiVdpibww8",
  "key7": "2FEHWi1heoUyAQm8EzcmQDJ5FRQJF91bc4Pcz2XPjwUtGYRGxf7zbG3gb7uKUMxiMrjiKasK7tFpX9Vj7uFcx8ej",
  "key8": "3wNJPusKcxAh4DDbp7oXHiQZ6FWqemfDNWwxCsPEi6tZTAwdGzuW7X7kbhmAXVWYfPseb4nEKvhMcr3rBLx3DHB1",
  "key9": "PHKJycESU2pysG9VSGhsMxccQBH1aiAyijgCd2eWkoJJjD4oPQ73jgJ4JkQDdv9pEiJQ5ovWzw2ELCVcSCTnvBC",
  "key10": "32fvAdUwrsK5HwBZAfEk9G4KFUiMqZ7MXgYJbPwLVivhW7hsN7Z6JNyDqwf37wkfSxNcNpTDuR5saK6CuASqAjxB",
  "key11": "2sD3J4KjbFsjn96sojFJZpDRvSGqqNXWk1pNEh2KMdiauMd6STkKCVQf3aJFCKNC8CzdEAc1sUXz8yP6iJ3SSW6T",
  "key12": "3qxYCkRZwHN3i3KbEVadu4PFAJbhmDdzeN8A2uDaQu5JHFjZMt6uhVjJQd8HVf2siKoHxrBFvn1ef8A2Gp5dpBzY",
  "key13": "2DJZvvAbDNhmi3u2VxdvZTXvbxxiDF93iumQbFgJHTbVF6Lqy21YZTQXsiPrCmruxf7tgoFTqRstF8vNZDCmcU7u",
  "key14": "2J5fatWsaC8jdHnZq2u6S7sT1tZgpKiHo1u71C6CKPM9Jwaeq9Hr2so5xvYg9wu7GRZedQtR9vrDWHygZAL4EA4t",
  "key15": "5fRY7AqwepVafJLpCASUmRfw9h3G1rC2fw7U1nYRXRdpT6NF4AAoh1Hq9ZaiRX67xLSWfJmDchbfwbf2hB85Ke22",
  "key16": "5qn139mV5dGEfiNYPPhreVQYpA8ErizRQaiFVqn7DVjdb8kfq8GePWmT1DMxhxsqAKis7TAUWnWNaip2oHm5J4zK",
  "key17": "4sULuP1YzwiMXgaeZ5YrNfRadYxFA4XGRPDgb5VDTbTH8MMFxHWuLApVKEfRGGrJkaWqz5HUVctC3kGsRf8phsoW",
  "key18": "gH4EtcyKnro6r2dt8d3dcBUX2AHTkk5MbeVmHETzPmS3oCs4GYp78jsD2a5pNb2nwXpsXByBBkV4hH5dBJBeAuq",
  "key19": "2kLYXsQbEewCTJpqui9soaNNDySfaukahmndNKqUyCwM2KMfCReEC21ZpJJbXt2FDvh2vc1sNV2RzomA7izNcKGu",
  "key20": "67LmdG2BHQQkdtMFUbrpicyXRQY1qiSW9vEuEEaNjvPUEoDGzy5Qbo4AyjsAaZGuzfqbQntVf8g877o932vkqeuN",
  "key21": "3V5eULg2z8pJkFGEPCBdX7DN67YPAGDNHR4NbdjRP9iXhJvPxAtRwzYytsbKNfJnKRRzrcstKuM9JVRjirTWj3Yo",
  "key22": "298KQsCHDFzpdU2x4DzD87yepp4BEZjS3eoUksZ3V2dcG5qycd1u86mXAR4AvzTcXZa3RuvnpvLqAH97xxBWFjKn",
  "key23": "2yF9Y4tZ8vaZHqikV9BXcy3qMo5zxFTESvPRtuxrVzpM5Gf3Ti3dVJwuEe8eEodhivhTDyn4xhvMDbm28YaVenhh",
  "key24": "4dPDoFmwqBs4FZPjPp6uJH6jLaa7Fqz4ccTAUHymHzALf99RVDGRmsYgWaQhyYRjhJBvougEUy1D7njMuhx6QCMK",
  "key25": "ybYM5ejCyYCrYZoHFvcGAEaWL8KfDr5sYWKtSQGPoUp1A2oMahdHGB7kYGXsxxuou6o5dZnJBHQtVwcVKCd9MZM",
  "key26": "21s6xmdPnHjopq9uMfmoGMzxUTmMryzV3NLUAFqf1doyzNzCntfcKSDs4jZbHUbqMGrfGJb6jLm4raA4CQyuiQhV",
  "key27": "2VJiqhEpmamN9V7b14wZgy2NGE26NYXcdAfYFnwUZtNAbv7dqbukrpRbQj6YQjjEm7MqvbHpegt4ihKL1cB1DKHf",
  "key28": "4rgTnWuMd2weQnzxsynbCXRWBL5c5vFn1P2bWTtDMyiJjex6m511pBSgWaE4qj3m5SMEYVtDcmspTGV7pkSYhp32",
  "key29": "5fzAr6KpTtp69sY6fDxE4wnPAaVyMpZw2wzX5dTehLWQpaMPLceo1vFPbx85jNxGNJeeG6K7RJ9yrxHHbwWsBLzo",
  "key30": "36n3eEew2DrRn3xmjo2MNjcds3vJbHLdp1WJceJZKv5tv3nx8aFS3koojnPBX48bndqM8exnDPsQUeKV2sMf9Y1C",
  "key31": "2z5pAhqagnnBjjhCLVZabEEnBc5bRXbD6bntGehWVu8uyiRE2inuys3ScJfrXcPWhZNoCd2mDQgixCTiUDYNfZVA",
  "key32": "qa6hrofAC1Tt3ZTQFfEqtPRkqhoaiGajeTFDEdrsFCQSxUvdomjmx9SgJGiCMe1SjknnoeZWBcGo9GU6rQasotJ",
  "key33": "3UVqmT6YErGKRnz3sxeRqNv9FwECyQLB5pVoVJJozonXBiWDuiorN5ySpFXQeA6ge99qF5mMsTY78Q3fXfcJ1dwG"
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
