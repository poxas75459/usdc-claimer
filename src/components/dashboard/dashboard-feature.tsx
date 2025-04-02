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
    "4ZyUij3SKunGvUbvhubAt6H7wmXajKU1GUtZajjM3TnKTpQgx1QTobKQiDFBhTToRzwaUCJhozY1hR69KPBB1xiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Gh49yw3mEf6mQ4yBjVrbR3yoPTdVkq2HUe63EtsJCg5pcRTAmGEdU2B9TJ97ZGwfZPRTceXW952jtUQz4J6UBY",
  "key1": "3KJQZhEbXexmHexyykVWu9kD1DkyHcT3Xzk8JTJieQYXiYEbdtwaZPWomb3VtVBWXT8G5JcxKjep3has1E1ygE9m",
  "key2": "3FdmP8W7Pd2aTXrkcvhU69TysA2xDJseu9aYB9aRSzF7MqUE2FVkoPwVADHrzCr3xu62SmPwMX1Cwcw7cfdWmhPq",
  "key3": "48J1AH3ss4J8Woo2fHnwZtG46chFoQ6sXEoPotws4XmTGTHBbXeUGW8MECyrLywaZZctPc3Ts5b9efLZqXnYHLR6",
  "key4": "55y71hEALvdzqLusx5PUBShWddjpYzSssSe6p5f7oQFxetp6u4S5qWwzLG1HvYViujmAWWtRkUgJ8JkUpXHmpf6y",
  "key5": "5ubvBYfyew7deVMq7nEiABRHmpxnQLBX6DWgMCTceQebwi7wty6WVVXQ7Lby1CCkfn2NMouXmCy9ayoQ7Wi1Fsu5",
  "key6": "67exaTjsTSFRcJcyByc4aSoz6i9JAGVnjt6zsttaGz6vF93RDsXWUHMKYERfmHthyQQTPF69L4saPyVLF49HkYqZ",
  "key7": "JcELtdyoWavfkuH1fDYqRRK8fgZdnL6uqcnw6HnuTTQg8NjQ97LK4a6VaTh6gjUCDDya7DNgqrLLTe1NMofNbiW",
  "key8": "5cEZfsZcR1gG624yZUMutWhtANXQsmKZZcss27RpRHYX1Uj1bc5S3a1g5j2xMcsuNo8tfymRZ34x19Cu9iSk4Bvj",
  "key9": "MZjuKL2d1xPESjZL1MGTLwCk7aLjfibQs5bfXHPEzuvcbRyL6GkYRcJPFaXNc7GUMUMD5RJLwz95NxEQad197sc",
  "key10": "2gfSwEAmBsBpD3txBHNqUeAM4KTWV55MBJxKG5EvLLc3hDffCqAFqYfBDkeNfWidHxMqf7Cf3atnxVKoQEw6yhHT",
  "key11": "29ZJcwM87bNwwZ2wTQ36xTEqeLQcLoD5FLeG8gDuD3jfyD8udEKdKcc5ZQ3HaCkaGbUJcUXAyszaRcBBAXHbH27g",
  "key12": "4KeLhAJ8ivf78RyN7ERQgevY2mf49QpkFbw5H8LKZtHjMr67UqxyNGp9wGLMXnWjVGdQmhX2sZrwtrnEv5FxWbb",
  "key13": "5bbq4m5178iu3cEJJ3wahGyc4Lh5AvR2FGNopNsi3FHQ9jLqHkvrf2aNZ1DLYY6YQzYD4mESZLrtbPvH9WtWaZTk",
  "key14": "55moycoMnUwmJ1Lyy2SSrxZ7vd3wGB1hW3hSPDDw2iP6sgwUosyCRg3pac4CtQaYRVMUCbRnotYbZJPGJFFb6cyA",
  "key15": "NKe9RkBV3z9cNEGHEEqVetcZhKEj5tJm1bCWDVqiNVGyQfxJQCbg4G2RpboHBbpRhLoK92An8vTQzBLrXkDrKGj",
  "key16": "4fwL7sdUuHaZkfhkMxNHRe9BZiHD6XPHvXdTFdK3p9z2XNoqGeGWVTyCxZdfifF4ccpfwxzSD1boxcLA72yMUzx8",
  "key17": "3gUZe5Sxm7p8DVxJdm6cBq5NdrXZxkxCAhN73iY1PZEfVr6ayTEGXnyPgUiehosGqgDcPRjPz1fwgVFUzinq98J2",
  "key18": "4rjqDCGvqwFRpebohmqbLPEDTstGzdUaqfjEPE8xVFqg5boHTNWKG31JABQfxwUUFVFjZzfNzqxyDAb4nzkrVFdY",
  "key19": "2bzgSosHyRTAdn5u9LLUscBg9orQwasSaHc3edSGazPhbdebC9QM7PFn6HV4C9W3hKA1gjuGCzbkFXceMQ74WkeN",
  "key20": "3hWECG2RvHGcLRLcXpv9SuBXXbgfxTZzeL9RkVA2YADu8GtnP9ByZmLLMUPRXBd5d8Jm44uUsp76cTA8bHsA7JRH",
  "key21": "3dYy3m3YcTtB9WRw1YKMEffRGt4BJM7Ty1r3AWrngrT7mzM2U8pF4JHB4rnvbPkz4isfCSNPhNK22vwvN26eXQUY",
  "key22": "4uTkhPwy9F7AofL9gUMC1JRM3numQmH9hihghtRepnHyTEnbdZS2tX1FPRe1x7QUniPvbpe8MVtWgouL33ZcmZqr",
  "key23": "5LQpn8yMnkv5rwWr9HuqYGih2Jhnu2we4DMimMiHJJ4PtAu5tS8nZdtvgDKrdeN395seUaKUicxK882rtCuMn6cm",
  "key24": "576A5MnJr3chy289hx5qUj1k57JENNQWXjX2PcxUHTowK1J1bT2irDc9W3YxRuzs1sEtvdrz3X82iw1hT66PthGm",
  "key25": "2WvbiHMpRgnXFpuCS4GerYX8mfRYHa4JdBnUvMGUmq4AfTNtXSf96fij1iFX9NognUfDPb8tjbLR8mF6EhZfkGVG",
  "key26": "6hoJnP2r5p6uYWisTXJGZUJfParT3z8Kx3rJfJVamc2SRHmCifBWe1Z2E4ZJb3ziyg5Na8eBZ9VTKSBMddcjZt5",
  "key27": "3mT82obxYEpiczGEjo9CcP4xhsGPn6mGj1Znqz12fZ4LktXuYUVdYHbzqg6xPEVXVtekjDX8GJAsmhLWDMLHrWaE",
  "key28": "4L4TkT4LsMhqnc9yMiuRwHfRiHAeb9JUiGzRGRDGBkFWpb1ZtLptEQuwDb9BrN4kvyxLxK4WETyD3nPEk3a2d1EL",
  "key29": "6Ri7biht8FNWqsnEnQtbGQ3ADLM17rK7jXef1SxYBzGBaRG2QZmCjsnU8pCMBSKwF8hs5kCne7aueYVatRm2ZiR"
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
