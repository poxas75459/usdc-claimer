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
    "2TApMeAyXEDnqsHwuYNvFg2Ev1BeUKqXpj2Pw64sWVYnCiuAdBsXrcZVc7pUBKU1tE9iGhDcruQZsm3FsiMujHzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YNhLM5451EprMLcZENTEpPyAFJvf6XJp2LcypxJfzvzN8jCFpHCzCApcQUoBj292moEcd3o6iNtKnDqRYHvrsna",
  "key1": "KDi5FWEaMGEKZ7M8cJvk1wozoJVzckgeW2WqyADVfffwtFvZrm7uTiC1izauJg1uQEEq7rEFUJn6dZoKGEZEeBs",
  "key2": "H4Xpc3b9d5zW9Wa7epvRDubmsK9cjceGrdjM8ZeKyUJpB9mDjuGhKbmJyJCiz9FstKh83Xrcav6xb65wXPKSCom",
  "key3": "4n2fTV9g8qNgASS536JnRsAZ5oP5pN4BkW8bkztSBCNXrzRtA62pev8nMZfYSyXMPztHqdmjzxGEZw9cqQsMAUuQ",
  "key4": "3sGavBWYxbALg8x9fDCLo6DmgV2gS2vpqesFCXAUarwvhpsTwt7zPPtf7F5ZJ9Jd6ZAH3Y9kEpWSfjHDAPBRRFCn",
  "key5": "ibQ4YiepoxZkXiZxZVtZXs8RNCqpm4f7JipAv5d1wCddkcZU9vRSGGrvu3HDNPZtmTKXigLTKzYrWsPeohLHNBk",
  "key6": "4tY8aZ54Mn6WS8AiX1UdXy5TDa3fKYDdkdcVk8dEz8cMR2NP6xdHLMhrYkGu6sCEVsVZJUbNzfuYcKydvEM3QdE1",
  "key7": "2Us2cQUh9VjtqBAm3sB8eGkAf5tSPyrtvbCX3rFNZWgwTMC2yvC5uoby42Ky3kn8fZM6cdhRhwbUEKhGcQpZqPGE",
  "key8": "4h26zxFoTDNq4MbaZf4C3Tx7WJ5ipt1KZciRw8TnBxoFNLkHtdModcZSKH7Xv3HSLC5XRWH5qy1xnT8yvD3pFSkF",
  "key9": "dJa3LSYJR3Z4ZXwMenu4W1j1Rne6Mn8qXE1sndGJV5R9BTpodcn9cbrHdKLZbsFfbEeFZsbjVHGRk6TcLirgfwB",
  "key10": "2LeYbNBR1wtNSMHhLSYGjVTbLmkPE3pXuJoRre69zN7LTrZeDbhkfmwjeuXkhRi7Kn5uoZrBXctsB7tVVKsc6eD9",
  "key11": "4wGBympWMqFd5LDbHpjDDWfPQ6MxcfyJziNuPHdJQBHrozAcLrPi759heZaYWStP5qNRvbLewwT4gMWrGD7kvKw1",
  "key12": "5dBoWqRx7KDS449iXsXKGsbujjQxJRKi81QQcbYsGn8XaSv95bDcgFA9BkehumMeqtwgAXxn6FtoGTwt9Na5nt6n",
  "key13": "34pYD97N7Cc57pZB1THvxc1Do1UAGkdPJkcyswHVCP7sZVFEJ343YZRxEYyfmaENadGPYFsA9niHfxe6MFtyCX4i",
  "key14": "4o19dKQVpfiQvc7nFXJoeYzhrdie4Cz8pqVabWVRHSmR98XGwYYHstGFVsE4Ha6Fxyva6F883ZS9HE45Jzi5fVbV",
  "key15": "3SyVQkRhDxerPdiqbLp3dnc1GBRnpupYawuNL7nYj5xLtsJBwWGF2vK3MR3wf41B2aFMcsgAu14v38JSb65xVghA",
  "key16": "T43nr1jgtaHN37yyiSZg3J57dsDSjuTwH26r2HXt9XGjQrQBEVcbJdPjFkJK9fxKgS9GuFNP1cQDU9a6Fis78Eh",
  "key17": "7KYjHMWxUai2QFUGuzmG8CQj3ZYkVVHQhA3xZHPFweLYzdzCtw1g5Vevy4UgBj7S1ijKvV4cGg5392XVi7CcKed",
  "key18": "61piV87jXWJKcJeonbLZinTW6R9j9FxAWxpkH4x5wcJtXnpY4boCBRdnUdo8cfcCcafqmM3c1UUzxnhfvdLvwpN9",
  "key19": "2rpW34SEHcGBbZ2LvXkyv3uCdNcTXnHZiuoKxpYJ85rm3Mrz2CdzqNe4Rv1cRWM4RgVL9wEyHWJBAYFTcmqq41mF",
  "key20": "62Qpifii75BHofEvUQgWCBfbBTK6k7xgXRdZTfzHP7iAir9vesu7DsyHNP9aos8HTbV3LJBAuPXrGunGo8Y9CweQ",
  "key21": "2JaXNcbdMby3KLmtWiumdXcYRrRQAfgNLuBYZgaSiF6Uasxhygp8TRbL541HKFA6R4Jnw6o8EQhxMNttj7uR1BXG",
  "key22": "2H2YhLogy22MhQUBVa7GXne2TFs64gg6E9ak6mguFHefaNfCrC2fVAhh6GBS2jYHVqGaVaahRsGLJ5XrFBq6v93A",
  "key23": "5jNqK3X8HpLKMqS2Z39vqdk6rpRZv9fv8LZmJeXJuxiGnofd54789wvPykfKdst4VsUAs7YyeW1Db3qroKW5U3eo",
  "key24": "3eHspe8yo7EJGgzWZs1yL4iKuvuYM69Jg36J7tw9VCpWc5QijpSCEeeXWiHGBnnGkHMkALD9gfsHok5DA7yMoVAR"
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
