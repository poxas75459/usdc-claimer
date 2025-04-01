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
    "4YsA7s5V2gQV8tkvKwSUcbQQbcXCmiabomUCgMC6pbRVfA9osVhzd2yvksHaBom9jxxGp3XVPnv5wuh9XpfKAf4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PwMNi14P7P86jm56xLYWwjoZ5C8JnsQzuKycJ3W6GWsZ897yABtFK21U6krXfLoREvgCv5EngBPV2bkT9NBxVuS",
  "key1": "qHCMGxRBNFMbbLJpo51UchJ31y4qXLeba4ydawrmcndezrZHeJTKag7aU32soosi7yW58EHPrZKXK7cmN2qZVk6",
  "key2": "3eQGSL3fEDPUWWBxmEwjeSoZATx9n7PuVX6Ps1vUSt7S3Kmw6TMz2Nm5wvjq9BGT6Xqt17PiS5A3qjCQxwT3gPh9",
  "key3": "3tBJSTLdZ9rjWmp2DN6tVzqd58nEU1zhmBe6YmnPJsj9CUg5W3fVrRBkLNrUsWKqX6KYXbatRuKfuremc7qYX7K8",
  "key4": "3RCiGXJNvwKQyLiUFtJnhq4kKa6DSwDdYKyG7MdMpTbJqjcuujEk1mbDvVXkguFEKDSZNoYTfE69S7Q81pt8ALsQ",
  "key5": "532SDGcY8UhFNuGs5KJea4UxNnJWo1ydqKbifBoMGAeBYJQrfQgqzqSU38aEcoWfa4YEYBdqzRu4HEN9rRBPwTo2",
  "key6": "3rA5CcXZgWE4zN6Mrt5YonAe3ytL8crpxdZqy3gEhpJ79365tj7aSCorxjy8HMitnf9v1CBmmTXyHN8Efw9gaPJp",
  "key7": "3of25ny8C7PwL7wp2JQqq2LuxwNBioSJRe6oHXNoQo8524JKNJibwWzybCpFQv8pEZ12Lm6jctMBeS95sESC165p",
  "key8": "bzYFBdFLkb7xADKu19KbqaLda9ZoXQx6QUDgS15ncD5DPzHLsbseUbfyUHNEwzz3xpCZ51KTKNMeq7b1KZcLuTc",
  "key9": "2z2zyZedg43VnMXFkNfBRPgYYQbSszaWenPR2jmgLDiNE8z9cu2Catg6RGM1hrrKKoqoXTjvydSZZjgovder1Lis",
  "key10": "52zAq8RGfRJkWxpqJkLPZTJF9Z75zMWiZ8ShuawaucyxCTcyTHDbPPFB82nTW5Xezhu5gbAdtmAfCXjhTaSZpBps",
  "key11": "qoyxW196Xae54gYJyStBWkJcxdoVKjZjog4ET5kz7C9VVFL8vLDDf9gkH9YUQdHwyk8Nt8QKTuhZnwuoE2MPYtN",
  "key12": "iNrnYca29Zob1m9tiqvVhrGEeDeRTYWqvETKGuL8cnDoCezde8eYt34r93vtbLkyGT5Ufdx8iMq1DH1npQF3XLH",
  "key13": "2UixV2HnpT5DfHfc6LoGswPHzkLbYFLpoBo6ULXfiFvChiyttgWRvehXpgXGpo3iaBbRQDU2ABebFt4oEw83wVer",
  "key14": "61Ey3tS8mvEij6tjKTKfqocYmKSHqV5or4aNGGUvFiP6QXUF5eCCKJwah96VCCTT3U9Xy8Enh8QYWsahPoWo7W4i",
  "key15": "51wtv6vaipXqMVaH7Yvr7LCM5JVcRU9HW8Bz365bioQXmSvcZuLZTTDsychkG1TUCgVKNk1B9PQg4rJ9JrjLwvx9",
  "key16": "4AU2F6ENoiGSqpXELmpPuiPzRi3Nk29eJHLADgmpZj3noSRf2eMZ6hi4QuJVE1Pvs35G11H9K7LnaCyLaFPkqNXP",
  "key17": "31JU7sYqYYRRP8sTAF4C8xWjCuNYuir82JXqJhPywjtNBud3EsGDcFK9FSPNdWbvH69uCSpqZnPPJ5GtWoQ836dh",
  "key18": "2odo6VbVwSwojPfpvDMoo2NWEVQqYoq7QQRdoFmYf3oc82fy9PfCcj84njQ4FBtTVfMZY745fbPBeVcfg4vW3Vrd",
  "key19": "3Luf4Hxx22WvSaJaBPiAWeFZ6d7E7GQrnfxyoeaFc1zdE9vbwN5LuABmAyFPkcmnhNxYDa4x3vudi9MSUwMAxZBo",
  "key20": "5t3bvam2bT3XbxqLxJpDXqd5XTxE7UHJsK7Qqq8CNZAH8J6VNmLcr3SeEcjJNBHye9tfATcNeqEVjxcgjneBMvcP",
  "key21": "4zmFiHiSfrXq1kyzyytpibFRMdh8hWf8scy6bDeWNZEbdKGcDs3UmKXS4C6WfdM3vkyfHySLbTuR3ySb7vcT6sxa",
  "key22": "63bULHHvnUmErzYANC2Z3tJrYyFNo5L8L3CvGF9F4gvmEE3aEMn9M9RuSz5TyWhiEqSFDdLgHNNwWTuD3xLMiZ1L",
  "key23": "2H9uWLWTxY22AtLchyEbybYt3dxPvTg9FhuVWNLqhzcoXUPjce8VjSoUhYuJv5sx3vngQWBnGiqfgGaxAvkE78FL",
  "key24": "4sa6EeCc5x9tjrAE4QPi2Q3vWYuPfXJ1B8YbpN2QLgSvzg68d4Jrz4hv3yttEvj73dyBatEeVqoVhHoMc9ehF9oN",
  "key25": "41bBzQgRD4UsCQPpcpp4UAGzZu6eCMkKhYW4vxJ7ru2HBbCiARfeK5Gd4cBUWavY7Ex883JTPcC4u8HU3N4ukNm6",
  "key26": "33jDJHs5ZcnGiNvN7Eogeiy9qh2jFXSM3ZddJgBDeSfdddSjLZmnTN5kmeZDdqecMKosF6eUQczibiUdeLQkVcnN",
  "key27": "2zew8MUHiwD5QK247J2QNWHbmqKq1PFRpKpxLoLkXwHh2ztcqVXo67kQfUYEuF5iYLDMvePVvzEeFwftVPo7sXWA",
  "key28": "2YvVBp7h467GBXGYJz7sxvbZivVvVomfi4AM7hRzk8ZcwTRrogaRJWufs93sUcYSbaWscPWt13nuLkiMuM5FBjAm",
  "key29": "5KHnDxamFHxU6jjU2ZhfNgSKUNgmX6QaVwaFh6SqEMvNQcPXwFnEmM3N9ZEoeD5SmH6hLKVnkaeEBZL6edVferJF",
  "key30": "3dfrkzmurpsxKPQ1Dw6DEpU7pz2VsATmhgbSTBTnMmXoGrVxpEHgTwDhFPpRf2mzxYaUg9YCParrG6f2TLHoqcqk",
  "key31": "2k6cLjeaCUmc2NZCmW3mM2eLXrsvRJ7yiS7p5Xnvrhsw2PGUUWwAzMKcomjmQjSa6xVrr49FfWqX25DSPqajg9kn",
  "key32": "2ep4z7v7inkAr29dj6nwgKAWuHSTrG1n5m8nWRbpCiw5AHZGNXh7a3zDRae63fm5RLbcoT8CTD2vNzk4gRVs3e4f",
  "key33": "5ic2QPzc41AJQFWTHQMvw6q4KYnyt24BNbXpqBs1ZFEGQzdYWGsHsFKhzmSnoSPfnCo6NS4GHTBC8oSWdB97Rq9s",
  "key34": "5D9n2oq53R7Sccv6mVVYk2Lt4f3WXHbKBi3RJvmP275DmS1PAWdfrBwUYx8gchjiPF6i7Y73YekAtRHCEBAcvCRF",
  "key35": "5QGwo6RoZFApK97WtexXqLBUeiP58rAZMjHfcZ32UnQK9XhVQUNwd2fsAFdFeLNZpnK71iF9uywEo1oRbMvNsTRL",
  "key36": "3sRrEtPSFmeJVAeCqcRueqBBk7PMutymtF4NtwyPKxGsRiK2qkgLh2kAiKQ95RSV849AAj9UkJnu1ENbNdbABbFs",
  "key37": "4ojLniotGXhQLgbHWSKiWnxV8b5ubXy261DLVgjEe6Ay9HQhFDyHta4Q6Db4Txj58UzSaGrQyDVtvUKBfXYvL9Ge",
  "key38": "zKYNqn6KtE28H41g5kajzcudx3ZVttrZNYvvtpVSEbN66MKQ6HBiPpSCXHqWXcu8M9yo8MnjEYc14652G1jDNus",
  "key39": "4SPF3n5dTus8ZABQJoXeg8KxAgMvSHRc5wiZ54aMuc9r3dG8guZyo3FxPMX9ihk9N4J5cSw19myiTxodxdP1QutD",
  "key40": "2UQdWnx5y5G8T2GMogwH64vRA3tgmCV5msziE9p1pg6xGgHzAhzKXKgoa7Xfv1jsup5qkwRuL3Rdu9oi3CcN95b8",
  "key41": "2Kj9usmDt6tbHzBWz9r8KFwhis1gMpxiVg9ACddgUgsEGbjWAew8TTFRXfbFmuCzPqqc5G4Q5MpjoGjY6oQeRgKz",
  "key42": "34KmVwPNiw33ieGKdyDqfcwvx5Y8DMSJKCj63LUkeGXurZPM4MFJmvngxKGgNNPYrxaUNF4ZELiHUMZX9PRkcrsR",
  "key43": "4NUS8SWiR6oXXgSvdngkHDHSvy9oh6Ncx882rNYrHkdNaqoQoje2nBmbg4u6Kbg3nwPE9yshttAVa5BfHcHhcYiw"
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
