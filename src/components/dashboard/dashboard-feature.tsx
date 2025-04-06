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
    "5Qg8XX6TT8Hjrk28oPhvKvNhA32kdtRnxJ5mJkm5Y7dEDWzTR3GZ6mGrAsaGqy2QkK6AwBTHb34nAa1K2uvZu494"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "371H7uxSQyCfJjV2aRESoWyADRhzxkTRN4E7pD1HrnpAKRVw1EapWbcbnVTH6eqzWXWNiYeEAYRGWFbBeLPNNBav",
  "key1": "5aroVDZppCivxRQEtAFr6E9VzM1VdEsW3rrQ3p9Ji9ZeKiHezbtxSmHZvCrZGS5AhRJbsXXUXM1HnX8MAv2nsH5J",
  "key2": "3JRGThBdDhump6SCtSxUi3PqjCy2jBjFq4f9BEQGrH7wf8BowMNAQ61PZkEfv5wcF8AM8czX2i88ufzE5wSYM6w8",
  "key3": "5h9hgHix1i7KmMXjr27kyxuW1XHUeosF9ETGhaHuBvZs2vmfFnzPUc6x6fQB1N6vPDxBnfxmisDU2P7McJtEqaqZ",
  "key4": "67hb9Q4UzJvKSvsMLdYsNCcH1V3daVNxJC9MLBwCbkKJj3g3jdHJJLNNP6YP35yPNQ3Ej6mP5Z2wm1487RYhGQYx",
  "key5": "4fjG4UFdUweMfA81eRPi6QYLSovxyubbQe7ySt7eBReymTZyZUbmzHB8P5f2HgFhHdepcJqXij2YDL6sj4NLK5vM",
  "key6": "ZMyWNwh4ZkYm6XmdWyqpau7JMnopGdPbiyS2PNHyrHPdCVy49xDwKvpQBEPqwjF2zDpFaFDdfGyRu6SxfmpGnk6",
  "key7": "55X1pBYK7yTdUgWQ1kbiVJtfzmwsCxKiZ9Bdeyqf2gUoCxWrFxG81Uj2ZUFD4PpeFSjHUe2kLn2gLFjtA84B794b",
  "key8": "2hrKWfiXBGBRy82bKHE8t8C7Gg4ELmv75sLhRFQDcVS4hy4HCYKWZnAiDhSZdwVWUSaNhBk3z22qqYtFJiJRq5fS",
  "key9": "5ufAyh9aUwbAxJm3wQpMQWUdmb17JsiGhLnRS9C5yJKCPno3zKa4NhGv3TYQXGghuwxj3tNWEQQtt3cg4iT87F6q",
  "key10": "4fuvTia9rQ7XPS85BSsWqyaXNpb6b9d33zir7BD5sttHSA2fCqi3eSgyPCdmaxkXYwPRxAj7MMqGGDaZkMY9ub4A",
  "key11": "4ohFK2W3F9eKHfjryk5DU34RM8jvsAXa13AECqcf18fuYWwR8wmHBZyGKZ2qPN8tLGf1tppQfKLyiRfrgFQ4ybc8",
  "key12": "28aCX8CiAFGksapjH7RZMmw1udA52bpnk7jQpVFsFaBRPDb8KKw6mD6YL5jNihcp5sbda2Bsh9rQdmvFTjPXyCZS",
  "key13": "62QjafYtkmKWS5wNS4VpJ7gvcwYdLHddr8gnmgNTz9VBEowPBjzeyWmYRpatLv88hsbT3CfXZ1F7QruLW2FDn9Lh",
  "key14": "5ssDFu1oiiJ7U49FRwAHAPxMjms96fzXoDGQxoVm8gV5ECP839UghpBsFBXWbFDuBrGKmqiNUi8thAXUPkyjzSHo",
  "key15": "4FvwPwrdyrTpjMEy1AUvrGNfCeZmgu4m7hwQonBRHVmnHYGv8hZUdvpVm8cJuoVRaC2YCk1CTANrey93hPEMiqAZ",
  "key16": "4y4FQgkpPPKW2YUVvrJX8aQBARApUeL9mWip8mL3U86Qd9WdAKqwCmPFy68K37zNyRQYcus24bPkN1ZjUZjNwy9q",
  "key17": "9YckpsCAgHCsG3u97SELCrVtUTh3nuBKhJoY3VRDpmbn4riWTDdehLfUpsVEAaN2bbD9PMYB6sRzAAnyFDT2qwy",
  "key18": "5WaMf2qUL39xqLHTXS2pWmHJ4DVzHhHf5f38Lik3aAC8RNPEaeSm74VadiNnpHrqfgdqzbCwW3PTxBvQnbDRzfFV",
  "key19": "5hgeMVcaBQtzyTa1e8eLojLGYfFZSbFHYdo78HnThgewAykyh87NqGwCRXUyv8CzFgg8LQ7GydnWAiwBxU6HxYif",
  "key20": "5ooraXwTZ63iVM2ssFxGCVxwVYmJbvEDBfKafrbEn7WgKDVftyB5mgJp4VAv2vMRDfLaXC4XbvZ5WV7S2rRnBVJY",
  "key21": "2qSkEQMmgNorCM146BmAC3Y8GJCB966xFUkgKivLPszX6JWiatXW82R1DiqyubCZqqRHDQVBQGzL5zPEcyZ3Dqoq",
  "key22": "3YJpAtFNwFR8CvKNwh4LYWNFhE1iE7ufkZN72WrNZtqEbPdbM6UXZgDchuiWRfUWEgvYdPSXh343qYYedGJbV2YX",
  "key23": "5BPbwbRYzNY8yKAfU44BSLbnnpcCAt2r3GBJZJgcFtS9qzU4AVuTm5B6pH5eatZDdraUA2yojqtWPjeE9Y24ZafN",
  "key24": "3Xo1yrBhdPj46g5jC3ADhGcjTjyeucaEsEedEFVZyVuAYPvJdSWKMFG1uTQgYrj4bXiWb2ewMjCEaDkr8sN3qcew",
  "key25": "34QEFKp6sdui6MDgMYXwAcgJfJwVtysuzJmpuhBjahCFY3RxG7rdxMhVK2KEEcvYZZ9zTdotQtZJCGGAwVPt8t9h",
  "key26": "5jTGyzQMBxHCLnQNiTLbBGULG6fSCikbcr7gvA7mcriaHLhugmSPCQHw1qnz92pd3AEcqMFetsFQ1A68WLTqPSvH"
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
