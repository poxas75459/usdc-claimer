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
    "2chW7fFQwkzb7HY6aa127Ez8Fs2MFeJ2RPjrK5dtB7DadBZfx3Se3XnMkmrFMBtUCVcdgFBkx2B8UV2RLKbdXoy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BrPs4bowPF9xGwJeyD9gVxSCgQUHw9CwmctZhA5w9LXZgqLsiZ2ZwPQ4F3jmsTGLEbaix3B2dZZQAnFmvR7KZ58",
  "key1": "h1RJiRRem581undkN2E6pGpufkcuFGFYJXHr73sYULqWrLy9Ayxi3LA2oU36uQ59LmaBQDcfE4mGMTH99BTUh2X",
  "key2": "28hJvpbeSvvmjLYrnQaxsggotUoBRF1t3R7HPbXJfsznZpM3j1TJ8n1fTZjRhbezfyvNJnBQkRm3fb6B3TXqfx6g",
  "key3": "54vLxyu4dZ8uc8pS5rf733cPxNkXfBqXChiav5KXbAyYffGfe4QybqQ66R2kg54fcTPDvT7QysMEXb2P6HuEJCY4",
  "key4": "3dcuTA84CLaw41WBX7DcDitLtjAZrZji5doUrr9YL7gGCWY2ESKpqjKTsQNd9DN7pJrXKc8d6gdKPoPwTkApJ32K",
  "key5": "2H7rLUG5wKmNc6GgCJC9KDazPtKWbnCtPJSUW29oYuTmCcquZ6SB59eMieeykqK7eVACH2EMGn7m4DKxnbajoFYo",
  "key6": "3o8P4fSPC8JWj1rBWJSmBUqChmFKh5eXm1KKZkXTAtNjsrw1UgGX64uNWZsi58jdMGLW1T6juSaBYht1QrZHwtPY",
  "key7": "VH89o7jKiQvQy33cXRT7t6xfYXEro929fu7cBuuYxpPaANQxfXYnsGqEuXv9ZznkscvXAZghKfDkiguWqibqmNK",
  "key8": "5YsfPpcSVAesBGq1vyTRwvTF8EjCVwfL2u6A2mpbAavnmG3WkE6sMscjpDgi8FiMcA1g1LRwWJBMwtBrJBqY8Wi7",
  "key9": "5542Xvc3AtLYdSP7QPtu16EGkTSEk3Ak85wHu53ptEhu3jtrtQKeHdve2SrASRFmMiise1BRyujoSecoKrD21U3q",
  "key10": "xjL5mT58Mc26KFZs7dcTsa21Y7dmwKFHa58eAyFpKyc18Af32h4osHG7gPtJNpAG97zUej52s2igEFM8ZjAnyFM",
  "key11": "4HSJRo2LcoBmKy8C8PUj55EBvGFjgi4aPuPS3hmf93rb2iZhfStQo5oaDDFmXaYQkFvrTCbnMSz1AvRJeqgrDNTE",
  "key12": "wHydpgtcrMyYHaYWSmyG8Ntf3AWnQbLB7ndvieit8cXTF27bqhVj7TTeMyKMFpMx78eBFFE4nYqmkzYWq1oQRHN",
  "key13": "5Y4DcD4ukE7EpWPhAHKuyd3HJGRPtZyc6wHbfNy2WA15vT1V8wdn4vpUpXUKrLAvzYTN2YT3u2zCVH7Q9r71b8z6",
  "key14": "3i1cJVhJ5Y7KP8W3kFfrUkqzkZLs4AfekGKaEBDMDGXyMFqFJ7iJyYYAFG28jJdXq4wd6yfPjqkgPkz9f38BjJFb",
  "key15": "4mpDSEGi6oKBhCct62SMKGENCwDvdT8GJJjwMB6qViorzZG2LJP6MznLHAUPr3BweYzesqL2HSLYuEgvMckG74Wn",
  "key16": "5SVH6UP2XUAu13Q3E3xRsgcGp9aM6rSdJedBbPLRbPjdAUGsQ3FxEut5jTDnXXdxW1Dnpu8VFScfKerVhxfb5ahE",
  "key17": "5sqHKd4nrKk2ezvGffWcghDD9KHtYBhDR6VXRwzgnpvJvL5APSod1sx9yPqECqvG8srknrmcFLxMdpT7qhxvREUR",
  "key18": "4AFdumBmFnUSrFRySzYSJ2HftUyzoX2JKqmyUTeHZaRjmevza5oQRv1VpwcENGN9fAYYMqCCXAXbeiKnBRsWxLs9",
  "key19": "5YFSE2LqiB4J4ACq2xNn9cmq7BnSMd1Td1MFgFiAvhqfSuCH4aMS9HcU6M7j1H58VFiJuQVx9cQ56R2CB5giQnTv",
  "key20": "59d3pgDTVCY9un2s2Py68Fz8rjcEs265mKCDJaamHX3oqWyqxxz1jCSbYEQGA4ofrPA96ak94XdVtuCFeCETwxe5",
  "key21": "3HciL45ur71sSjBL2WAeDQGmrdrBwrssgQaXUjQNjNQFweH5wXdWpUw9UVELdWYrQbWCJctGs7H6G9wcCtfDnsQB",
  "key22": "nykEYuaYsNGRj21hNJKT9mVh5nqZvCXNWZ6gqzmgCKSZgXEvm3L4JCHt8HCxF7b29BFbDq7xAKB7MnRZcMWTj1q",
  "key23": "2PWrUjBbp7yqJYa7327kVufywX4EkUvZinH7Meu6ahu7PQ9PWuoQJGR8vkgQtppxUHJLWpCrEtGN2LigLS21kvuQ",
  "key24": "5VGRAu9zVjrC2mT6aB4vUgK6STocYHnmRFR6GorLRJLoJGqii5HdmyZuwM25xJ8MCoDqbhPhSHTjg5zmdb6rk8da",
  "key25": "X4iJssdiahuefH1jqWxrWENCXnHNj4NPb5Uvh1TMRjvnrMFV79boRNHpeSKe8uZUXcZtMbzpCVBj2ffWQXtdcDh",
  "key26": "2tq9P3aVpU9Trayx6mGdK85D59XTgduw3W5dDCEXq22uxKPf9jr4v61NrkRt9aX8UJZ33Hu55Vq5duULDCn2nAe9",
  "key27": "328Q7YX1m2KtAvaEipA5iKCuoLn2DunLdrJaGeafQ6nq6GwTtoC26Z6bwmnLBNPDteBNXmufd3t1QJdjo6eMV35h",
  "key28": "5uV5NRpqGyYgLfg6rkh51yu1g7f1umK3DefxaSWLyTLtZhRLMs3jpZkRtLDegWwh5sKMhjPoxEAyLw8dAXFJhX92",
  "key29": "35pSkfJdL6c5fcAKquYXKaSfksHvRFfBbmPeNDrHvEt9SPvS9T1m7BZUEnKznA14fYNRrXMKCqYp4BZZtBfxrHDj",
  "key30": "p2XRjTbuNnNPHkGJ8t8pa4DoveTSSVp7gqzDaiGeHGTRqx3MjGnwZj4Rh7BnddoAuw96tqunjx4ygqUakFijXq8",
  "key31": "4pLb5qWabVg8zXe38vnuL18GiTXLhYATHCQQKFMiPwEFaHw59N2eXsv9qkjxMUYjUqjAajnNGwHNjRQhr9koTU3W",
  "key32": "5kxDJbXiuNhkbsztw52USwg8QLEgBUYHSLMRVDymhpfGjNeF8dEYPzevLvsCSK3METtMaFNX2kfBdLNtdNPPhXug",
  "key33": "xMJCcQD96i7Fc3FsbHsn7dB9cKXnNR1NkU3xSYSNKx1N8y4hPtSqVqfoK87EFufFvA3hhCHzDJisEoNx9yJNTab",
  "key34": "4i96iS41eoHRhWUSR13qtaVamviXZop69XnGTNRWGtvKPuYnetRaMStnuVw6aTWWYm4ww2LcPuiBz6xPMYmyxAG4",
  "key35": "67ooBj5BYWBRmjPTnPWFJxY3AXg5ikW5cvTZrpcZYmYK8kZMjqpz4pd9FVXjdpEAujaJejMHbp9JX8xW4nqKFFVf",
  "key36": "GTrtSBGcjd2cxNVdLVbrMLGPKFgpYKR4nyqVMEqS1pbf19u9py3fd75Er27kUrHMBFeUyVpVSB6CUBLRco5BytS",
  "key37": "2pu7doytetoEsj3aLJJeAacB8GPqyCBDRbzkqVAv5Aqmsme2VSoUbcs218dD6vYXUcZGTVpJN3D5UbH5vyDDCJ48",
  "key38": "5CadshE365FyAotSEpDfQq5frFPWsz1rnPEsAWztpTMDoDQSxC3Dx4ocBx1nxVkFNDMWSQnpBDUQC9Fn8cnxnxKL",
  "key39": "4DfxJV8x8Uyho5cxq8aj7H4fQx5MBfEj2rJwhUeeVDzBwwgjvet4iJ69qDTovvjMfCLJF8erm9nJj2MfZosTaeYs",
  "key40": "2V4p2ARHvZMqFkzPQo5vPrynUD8yZXva5AhPNm7F8WQJp5sB5z1cxcYoyJHF3YzyyPv3fNNuSmwznACQs4QrWNuB",
  "key41": "5sMopapDZHz5AR3U872SmJMeLatLYErCyx7RcH9ciSuoLDw7BRiuSJ7VZjLi74itNw4iwPyRvMm97xCnBv1KWn6U",
  "key42": "5wAvmCxNSWdFxAsHHc7iSAa9QDmPSJy2TNcv4TRR656EWW5NHR3STVFcou4ZrQqZeZpLvdfqsZcM4UZpWyUs6YqZ"
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
