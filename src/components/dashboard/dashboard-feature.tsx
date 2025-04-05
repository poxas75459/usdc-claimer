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
    "W4sbnBAxebkW1j9GRbR356KEWTyTa1RGPr4GgCf8n2ZuXgkVMrusWkpwCHUckWmiqEqzw3BzRRKAeqb8yfMbeG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43uZX1TmKDfkZ2vVMC6CMJS4ayNJgM1ecreYSqueJs836TLKu8JGo6SqJ9k2vkFoDvgwQru4EJH4379N9NdALWQB",
  "key1": "3VZLRLYcB1HM1hE6c7XSCuVecTnyYGAVSMkcuwLBD6yCqWLNBRqzPn2i5GdLrs3qY3Mu61D7cPvmzADXrF9TaKR7",
  "key2": "3uk2mp4PKHUocmq4ziDQW5mQ7X7dC2E5ff5MS8cjuHRwAw7CpsgqB4N6jNGheBTUa1rS3xhxunh1Cfrhuw39why9",
  "key3": "m8CR6i24XAwxc8fSK6TTeCVRPggMi2654ZfgUeHSyqnH14Zqm3CDzEsMj8m3tpcNUjQFAjvHxiVuLvMcRYyNUd9",
  "key4": "AuxbTDuRL8bXiE1RY5efPJWiAmER6W9MSXuGLPsrTt9LijFKKzJjRnyBAQugvQvHuw8aKKLjYA7KtH9g54GDTUq",
  "key5": "35bMaqHJSqNMq2uB2tZfwFvQ1cqxhyagLS1rKXhS2u85MzoxS5iJ1pbgb5CqNksN2GkvK37R9A5jhebSLW9RfnYY",
  "key6": "2ynmbCRTKDNbyqBBhQ2k4SGPVLbJU4DBK3jvKn1Wqxe46SwytyYBCeY8D2Lq4zyeJ458uSF3aA8qGj81RVdFwJMo",
  "key7": "4tG4BwNb8QedwAqP6R4G1EyDQ6rTSMPwtD64a6jFiuUDby34M5iC8rU9HudhKx2m4MirG8kJucgBevJSid55RYF3",
  "key8": "2dkrcifFfsVuJR43TwPtb94WZLfdJwqUHM6Kh8PzVexwqJgVfJwGj2FovvxU81ThqH9kAe1hM8VG1WKM7mP8dfFs",
  "key9": "5aQSN85zTVgzcnAoKW8ycMQktdkhaAkourFVJYnu5md7WxhoJbiDADMHE5Pc3AoDXL3EVEHLdmwiW26CBp8f1SB8",
  "key10": "bFzCrtM7gQpvxG6VrjgTV82YzTLR28pTtpAunBmWopQ9Dh8PMD2Xs59ihDZs4y4HK9UUx273uUJGVHKSxswptX8",
  "key11": "21LK8J6CNdjbPTDxfiJxAJFoyGXAkLdFkjYfy5Uet5ebEKR433Qr153Qq7p8yNUN2ZVRix7JzYGbRbokXfH9foeD",
  "key12": "3S5ecxLkgUHWTQSyz42HhvGygkoqWUq5NXTgU9mLu3vnh7cqTsZnmyaeMhBku5RNDhsDv6VW8bsy5NA9iTriaJj3",
  "key13": "2ouTz7u4SjtcXaTjFEjvUS8R81cERVh4wYgiwNRN5ycLhN5iknCQiZT8qzh9YxPqRwkVTQTEon53f1znVesRsvvq",
  "key14": "5YatpcTsDDbfrxLAXPsQjbxV96ZFsaYfTKNDM1Qq7DrCBy8qL6w4dLTpxoJ1Q58JFJ5zHhxPMrCvCKvzqBy6moFf",
  "key15": "3bdDMjuBgw8FPn48gPi2uRPBnpxfkRjkLRABJWH6cKYZasgLCfX3rTV86wLiLVfakz3QmffWjFWTbukP5peAK6pF",
  "key16": "3p7nF3mPeW5weMhdWNPFS1r35mPFvtuXmg2nqpnCLqhVbEv5AkRCkPjDcMfGR3d79FJkd9Sc4TkPuUJzUGdo7bgj",
  "key17": "3XL7gKA8P5Jo5k6PhLxewWdd2ZLvpKyw1gfqwQcHjSqoF5Ga2TkDyKaD2XfxC7oYmLrN6FKvMH7ZfR4C6J6hDdJV",
  "key18": "kijubpPSUN6wyiZWs1epkZK1rPpJe6oZUfSFnpZfzXeFNmC2uPr9Z4tDKBCB3dRMWe1bi6X6CTzP5RGj1nJwQCF",
  "key19": "5LdGmYKfFuk2Gkme57D1jLD8iVfV8qWg7ETa1PfLt6jSxP3QqSJDR8Fc77tet4fEQpSscTyVgLbCGp2mntetT2oz",
  "key20": "2qxSNA9sy1yBdJVMuGDK65r3SYPQXnq4Z8ftuqeP1hEN9DaMUBvZpKzWEsEqHRfHBuEpLTfeMJz9x4Nrs2arGASS",
  "key21": "3n9owxqztwxKGrQJCBZo56G8vLHHSA7PW2izF1LfXsHBF9wfQxLn7pqWwgWFa6KSrQ1cp4XynaQxYjxeqEPWZaBZ",
  "key22": "46VXLEv6D6QTpsU6dGHNKpCyBNKqyDoHkmm5GD4RpEk3Y7Dh1QrzcypYqqgJM66ywWJAmLNDCBgkYZynE9anS9rm",
  "key23": "47eKKC1uMzDQD6nq3HEbkNGMdPiwqmFUgPk3pq3rRw4kReh7ez8xHHk81NHrHuk6mVgTUPASV1f28poDdCqfttHf",
  "key24": "5BdRqsCuYVdaujfDzUqqcYEETz6A2aPTAPFhVqKgk1Lx7rLpdupVs8UYfmC3uLfYPdtDSCXUmU778h598MCzeDUY",
  "key25": "3un2gnipGTL7T2CkuseDioksfg4DgUiYuNFNzF9PGyrTp3sjpFvKct3KhnUT91xTzsnLHqi8XQ6D9PLTNTAbERqr",
  "key26": "2RjPbeAHoJixLB5Si1JNSeZyBp4nVtmSJXJJENSHeaSXFStLWonyCGp144cWF64vvDy1ZnBbDEqoKozqjznBC9Cx"
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
