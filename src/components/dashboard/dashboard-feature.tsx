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
    "3Xosa4urh68pNtnCm37zjexYti8s5LES2Y9Ps5eak2jBFhwj24s1uJjPuPqHwxEhN55Fp2upEQrnoxNEUnU4ehD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKwAbDed1V2rGf553fugY9iraErR47MC1MvACghkRmUXbdA9ZLWHPsziyMGuZHY4ovokGjDU7Q8eEQadRGaPQGq",
  "key1": "5q4bM3RxmiLZR18mH1xi4YrupuXs9xbFgMA3wP8sNAEVEyF5Kbv9oemFCAw5grMVyzwCFjLeDG5BgGSFm3RpjPTF",
  "key2": "4LwQeDap9i9y946NHeu74HNoKxZ1yyiw4ovvpK7hSNcTXj7nL2xog8PcA8Fw9TqwX3kgTQbNQDv5vweecaDvWxMR",
  "key3": "5yqFhp5eB2PHzWveTfCMuwRqZmZu2ZuuBFeWQyA2ymW7uSFQjjimhsfrhTjEv2HynsY7ANMUZwST6XKGq4T2xNeq",
  "key4": "5gmHdVEs7Be1Dn9gLBYhKiENUZWsDFyxnnqE6JhVJQorY91pqDtvQKSrrsSajEqSjMgTe4xgrfTNz9Gxdvfkju8A",
  "key5": "3urSBH8FNREPAkDZ76qzGwqhGxo3q5sEHCkCNzaLdjU2cZqEgZ9djFTrvGSbZQseWaV1FY1nFHViSRErQQ119Ds6",
  "key6": "ehA45JABTVtbAsH1D9pvtJPjs3XmHS82aVkgfpAzJi7JZs5x3h1jZpP79fj9P28brq8PG2Vrbfn7wHt3ZnXDzBL",
  "key7": "4EFXCkKpz3yYWjkhAeVwP1UoZ7xkZnFV49E8hTcUBkUbVrXsUbzqyNA78VfYrJKqT6uARisHBjeNTmdYF69sxi5P",
  "key8": "4JT54hw6uo3y4Ep9QG6oQZxEM1NeLxoTA5iGu2nyeQyF7FUjyBgFqf1jHS2Ga9hL5WpqFRCiVJSvoZQxtaHTvEWt",
  "key9": "RPaErW8sSPmr48WD8DpAUpG7EKpocEJSMmYr72DpzX2CcV2cNxFWT9PdMSj2B9vWXUYvLZ7eS9K2hHGrjWJG11U",
  "key10": "5QsGjoKdHJXmrEjpx8rSN9b1Mwy2dzzKL9RVJjDDLEwkcqyd6apofKB84ZWmVPavNekkXG9rWtZMNa4u95KjWgeN",
  "key11": "bjYEni6W3FsYpwJaZVYDPTLQapMww7cG4o2ExAycY8WQtuMKuqfdryeynLkeRkq8vDFCaooyhqHMVRuQhL93qdY",
  "key12": "3r54V2YtTo53273CvLVgSrkFCBNxTWCvaTxMNBd6K7XyZgzcvgyZV6VZMe3zUzBHrfMkYJevTKeF5qzUqrhvc9Rn",
  "key13": "3yR7HdxVQ2gt726YML4rFTnfaXjb1QLUNkzBv2NGA79ueY5FWpc3ysMj8Pghcc2UKfvT8XUbepXyrUnmoTCtv3bu",
  "key14": "5hJFQuTfrcjtfq7pjHUvGeZx8RYJuTxvru9AiJgtNudqAmZEEgpoP21VTaHY4f6PtCPpU9cQKZj7Np56SD2kZ7mY",
  "key15": "2ZkPzmBPf6imhvUD5WyyFgtwp8a9VSz2iDDBpH6ViT9F8estEfFN1fxE8W6MLWx34Np8fXRbzdusVRsTXJSdD3P1",
  "key16": "4uUPAtaqBsFWHSRShrKQjpM7QD5HFrcgnaMeDcg5CX19QJxwaLRqoKPQ6AXa4SHCEfzpe67P7oFhBVVYFD88UCa8",
  "key17": "rG4uDQzXG6gWBH6wYQD9s1x3L8aMivqVc56YSbxyTBLzQHjWgxwGb9HXbTTKxyBa3ZLTofeT35FDtdymYfUajcV",
  "key18": "X4XV87W6UD3ba41jkhxfrWe6otMjoobg5XeJfieqyQrxJT5H2zFuqGh3ZM5cpo5Unr8sL43W13aV4g1xkVry6Ys",
  "key19": "324wJBABCXM3g2iNZQgonKFyuceBEbGVMLaxZjmwc7BWJEQsqN5uHyKVZgNs11yYiBso8PfYa45szAMk9iriXaup",
  "key20": "2SBZRyJ95NJhXnSXEJzk3zc4gSWVPwshzrnnCBYxioSXs6qWYsWNCceuMQVD7QUjqamgsBvuMwAU3z7V7wyu36TC",
  "key21": "64kE4iGE6jZ3yWYYeDprjQaxhghGZEnyz3vRgJRaaUmB1qEk2xsicT92AMVT7tejnX85G5HdR9u1pbAzFsmjqz1m",
  "key22": "3vXrNQBiNyYBAQSKw2NvTMstxdTuQx6XzSc9WWZaVwBNexaawdPHzruXXrTciPUSuDBZMK1K8mmQ45xw7Tj6PAuP",
  "key23": "55axnbJJnYXT2qxu4AtLf84TwLUcUkYvb73BFDKT88jAhKhKX8JyTjneyqjwM6Z4jfmfFu7mARdsFrcgKSLo3U4U",
  "key24": "2v4SABVLZzJaKXe6j5RQQpFEqnUWDGVzbX7upS6iiZVVF2ZRodZNLUpodDzbUHE22HPe2nSAg6fwfpVveaiBhd4o",
  "key25": "4oEG95XZKb38tmvA9a991iaciD1PT16NCJBRuc9WX2CeaygCyHDLFXZzBYQYusacTnyXHife6nmdJE5LVsqBVnHe",
  "key26": "4cjrFKTA4H6Hp29rJoErDXmdAmN3QKn4mKhzfjw6YMXa8FhRg9ipcq4mNLNghCo1S14rWevK164NSYawgKERVau6"
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
