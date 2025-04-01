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
    "2MMyB8UCdsGteL25ztRw3BbvwfCtC1hSBDK7PwoJJB89hsRd3mzWrKojCCujHWPw4UfdEWYfKjeQmJYh7ziLHFD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGMXTZihn3vpryaencjBYsfUQwwitH34wQVVs6rmN58MWrPPfGJ3o6GCSNzFujPFBvEybvcsVVEVfdxLeMEQaE8",
  "key1": "229SVAiwppTejitAyUk1bxak2TRjWgWCHkpRSNEH5fULYbK6HfZ6bjKnwXdzif98o52fhsJQg8kdCLHgE8LHAUGb",
  "key2": "5VTMAL85kPjgPEWVf1wfvR5kggxqeCCfWr3Ecm1Wfj5i9vDFi4dMApegQC27rLLVgFc7BJfhwobmFJkBGhm1wU6N",
  "key3": "rRFwQRbH5NCvHfghdGqH2wWc8PQn9GCmmqXtdpsykMYBeyf6ULFXN2juJNfxZo18RYMLFu3bqpCgr4esNqZmMgs",
  "key4": "3RkBWSsqykYFJhJjJq8K65YPesRYK688fK8f38WhkfoHkMi8oBA4H4x9mNrzQG1myyyPwo9fagjn2d2jLkgdj9Ea",
  "key5": "3pVo7Ai65H8SEjA7SJJQeAQoLhmqUNHyUYB4SH5XGnTjWdDPyTGj1yDBDQCpG3cdrBFXvBTWewMSiqKaKeGjQAqP",
  "key6": "3NCy3UDssj1wB34KUge9VDE2Gd3wSrL2EpHh3S9yckGfdbxWPQyGzg7AcSEA7Svj9EJ7hi985uzW5DbAtZBvSfg5",
  "key7": "HdJatSYjLK9BHWv4ECBmDpAXKzoQi1qLULoCKVzbGeGejJugvocy83fVQ8cCXnUSJswd5aFpGbFzh4Bodt2JPpo",
  "key8": "44d3MgWsqj27J9xkRZf5mEtZGX9vphMxaptv5CXi7HvKNKfpJXCDYEeY7CPBBJqyAts5EpdkFaVwhj3UZ5BQ7wgF",
  "key9": "2zaf3rbpY5svusmvGRUNgKyYPSPu15Mnysnw8r7krayu5RimcPAC31o8uCcQXKxoT5atyvpGkeRCfnnmGZ8ihpaV",
  "key10": "hXuUTksMRYMNVLmbQ7HxWPsuuQUQZpJHBzAawvg7NjBYDWCLZuDKswounZeYC7hT7tdmPhrpAGLLa8rd88K6QzR",
  "key11": "4VzXniRw9jP33TQ7rd2wNNhdkBWJXvdPg7Nx8jKZAXYgkAhqyt594sXrSyaJdzonwxyskP7g1rjWFb9oGA4x4hcZ",
  "key12": "4hJLDJHLz3WvhAQLrhKSzkxGFUaYnGpc3tm2yZy4DMhYw5WQYLpBtYcaTTpWXGtUPzDUmBzkeEXMXkgWN42ZYwfL",
  "key13": "4mnANF77vmWHiyAs8viPq6wLeQ4Zs4gEoxXhBVsdEFnzCxKok99EV8AK7oM43iMp872cr3xvL2BXxQCaEAnTRR3U",
  "key14": "5dWmZ5yZQf7YHYQmJGb97k5dBxU4FK9J96pS6b9LNvgCZrach2q2zGEuWs45LtJj9sCfpgkjUWGnmCDKGCVc2tBC",
  "key15": "2w4WbgfrcwetBJJFNR1QVTij92qqDyja85M7wfPjiPaoHCrkMjTiqJNCuyigkonKGMNy6naGLoDxoFUU67dRgAQB",
  "key16": "5xqSXoYJwTibrTi8VRDQTZWdBv83cs9GiNiFH3eZFwfj7EvEH1JeNuvCh7d7HxCq6xfe8zt9J7hQk9jqTVET5PWj",
  "key17": "25TTqGSmDXFj1Cf2dqsRBUPZhb3PQgundCjWLR9TksdwLHDbpSa4GTTt7zTrRWsm9YRXut1zAV6LgAQvr8vCtH6C",
  "key18": "3ett6dWdoGR56qnzddP2n59zyKi8eb48vrBps3YGs743GBsu6i5k3B4BQYgUtbB9DUyP9gG1B22zejGcsMvQwb5M",
  "key19": "58xqBJw75vL3bYx1cv8yq9cPJ18s6AzafuTb5bqVdHxzNUdSxZXazczXbe951g3wJtcFSXRWuWBJ9wgVa5fguUjZ",
  "key20": "4D6jG455EUQSc8oQQKYr41xjmHKYjPrCJ7hhYvDeQjrrVHxUBFPFEPdw5i5dDJEvqwBfGLem2A3KqXnqZ9BbEodx",
  "key21": "2EVvpx2Rpt94o3NhePeH1VXb5LCYeYYWz1FPTTCXyWw1ojR73FHUgZ7E7VJ3VqiuKP5yn1x6QrYiGZBD9GHe21Ay",
  "key22": "4hDdYV8H3KkE4oPzu875a9jScmkfw9Qh6f3aDx7sPjXWV7LgHCo4QXVSz55VR6UZfMmpNihSd8oU6Nw4gLxVvz7x",
  "key23": "5vW6rmoGDzhjk1eBvsSivas3Mzstvt5cVWktcbXATg54SmuKWwC6PZthCYnFBKDnkc2uz7n23cc5sd3cQbmYahmV",
  "key24": "52U9CyrD95zt4mLaqRJimTTh6oUKMp16Pmfwk8LNj9fVtzjWEKpdoNafHAdsEzANPMZBJBFoGWgpV7afgMbo2fu",
  "key25": "2Sgt3s1rv12oVBcKRTR2nckqpopBJ28inM4PWsYcvDPxjunZoxfEB3kUVN6A4z9gsmSRCVnNWBrtkBRo8EkiAiLh",
  "key26": "36SfofVVPniYDMw8K8xvYcisUC6pse5a2NKfpQsSiKAJ4NLy7y2CC1emgNJ1rXEwtUeF7biDPAvoNRMcFwd4Cisg",
  "key27": "3TaJj7U3hc7QMt8Q5kHkDExjbGnkmyAY8Ku2dgxF5S7K5CmHFfHc2u8y7Fvrqg4MwqxZNVLBQdDXciKdYwsPzFMN",
  "key28": "5uPgBBxUYmTCi75GtXBdxYgV6T28VfC2yVi1dtETKwRwcbEguBm5aePvLYAR42gm3Xc1RhQCrYkP6y4hVSFoFC1z",
  "key29": "3fjkVKNqCCpzT5s7Eu7TteJvVSh4t4MT4PeFfaLQLN9Fa71DHSd1e4eZ5iu3pF92WyWsy1RfoHJ8Z3Pvmy6ZwFwj",
  "key30": "VGvGtEewrj4yvdrN8DULpZSc7uCZ5faRs4iUw9ey7rsnWckuzxq7ZX58eBiT2TGCnqPEde5kmpZFp2P7iV9MxLk",
  "key31": "4CFEW6jAzLExVBpd8BC3YbWs72YrMXq6fesPmNcnL1EjFTk8kCvJmFJhHubAbRhAYaxkXnkmXJnk3na2kHeX3Z9p",
  "key32": "2q3qdRAXsjw8JMfDA2J2cgkk8ouwcay8CjSRZANNZHJPL9xvHVqYHYxWigVaQo2GpriCk8NZgUECtMuSGFdzmTDF",
  "key33": "5PosVeh7bX9s1b2hKYogcBeNuhcWzEpJ6dDhXNFkTm1WS8azidjvvTHXVY6StzDiw9GR7FFATsXT5Sa1EHYrjhqo",
  "key34": "cRwTwkpdH7SW3PqANqcmUZgtDpk1eAEskjc4fR5Fz8QotrytETPnGEPwgiDa8HJXfyz54freuHMkuJ3HWEYRD8F",
  "key35": "5KKTVkPDe2FLZhNSRRER68nUUecH3tHS37X6ELcxoxYQYxtjaVfDGfrigUR6SXUP3rqgxrA3jsL8HNDCjuSPGJMt"
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
