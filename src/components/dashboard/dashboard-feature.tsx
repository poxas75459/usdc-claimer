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
    "JvF1mz9oyzw3HAJkpjqHqKqDuiAuLFn7HkjorADKqioMjU54NyD8QQ6BHimcEF2ebWMijbGGYgoRnWCzWacYGQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pb5zRWqFuf3Sx1DmryrxcTmw6DDVXPbrU5BCCBki264cvMBRfDMZnyPqS468BwvY4VWbdxykfTnoJ3yqkMn8ij9",
  "key1": "5az7FKAZGANHLC3CeXwcNz6JY3v4Wb9ytGb99juq1p77agd5WhUoS4S7TG4Ff97Sp78HTbC1veHQWP88tp2CtKDC",
  "key2": "3s9y9NBi82j2VSN2YJxf3EJ6CRMA6k1NG5mJZDjNYzk5uJKrPc2uMugmJZxUvAkE5mAroTcuvkwMRscNcVAMKC6u",
  "key3": "65Ys2i1qAXCyMnPp5e62R2MzbNTavnPub42AKcZgtifwdtYcfNhEe52AueiAxS4tGMoExxURDCjZPHawTJYb9P5o",
  "key4": "b5zG7kTbeiZ1LY4q76ySskbMk7cQx484wYURuzPnAbZis9oAtGzhspWur9i8Am1xL4twMp9Q4RzX2WwbBqKsZDJ",
  "key5": "2wnYNk67zPbFbeaMbHkFvZ5LfaT7YWYH8d6tpexhenowYABbYTHHVTvK6gB4sQ9JL1V3cAmsWTGduCd765PqiCFa",
  "key6": "t8wHRV4CAz9JXXfSebYZdpkfZaJdQPZHpLTi3rP7SWHBzY5ugBCdxNNGfbMWGve2FNK2PG3fa4Cq7ctZeTVghsH",
  "key7": "2hXKKvLpgWgtkshNKstXFFMw7pnM2oTDf9JSQxzJ33hSbtWxfMAeb6R2i99hWZm1TKQsc2QwPZTYzktvhPd9uonj",
  "key8": "4zmmE5ZuNzRawoFzJTYhdUWuTmrWiw7yjNMEEtmnA4yPuWjQrXEAxDF81vg5nVbRDfJWKsLd4Q41Pu29yKv8KYjA",
  "key9": "5J7L8gY1PRFWJtVsq9jBbQ3KtWLGa9mphha3fVFZh8W4dbc9mZmGpYrRqEAwrKAvLnWKr7CRB5CHLqV2ZN8wsBXE",
  "key10": "38W9hQgMiteUciGZgcb42YVPZauc5EU5kJWqLQmqpdG54EcQiqnx6CK3PUsCRSyDchoAy7NhHcDv5Xwvxf86X8FS",
  "key11": "4Gu9y57vkymD7Rm4e9BkiHBjKTmvWg87BmE7iJvmspJ4C49SdSWz2Urh2NyXyJRgz7P7N18XWLtTaRd66ei8oefJ",
  "key12": "32NniSc8gk1ueLHkK8ytQ2cc4UKH523QoyNJJnzUdZ6Mf2cxoZQbYgccVEw5kvXCpUbXEW72YegqVTgu7JqTdpSk",
  "key13": "5QsDwhiRAxxJNPpdr69JpzB6LHDF2H7m9vwKAADNZPv2UENy7RoLkVMLCTHWMyEFNkvqvVoSJ1UydeNxPHBnW765",
  "key14": "23QLAaaa7Mnymx1osFuZreSfAZBSsQjxz1EfmngJVmwUAU3FDR42NFuvaBGpEVBhCrAvR44z7vfQHzyoGYWUkPDB",
  "key15": "56Cbq6hwFphQh3sBrU82pAMHX1vXMvmAK5TQK3tqbboK1VxMqfka9Fe63GBqNkh465yoDud6BsMNZ4imvC5pqYAu",
  "key16": "34g6ZmhYgnAUUKSowbiCC4EKmFodBjSS1sbZ1oF8wy1j3xxESbkJ5A5BMgiR1uKLZ5PkjfpXBN9KqLKFpJgTkL2N",
  "key17": "59sMBrkWrFkmtczEMPuL4yYNDxfdUNX6nCSwaSt2CtgUKpvov3M7hpLLCyFkojY5tV3Yi5cnGqyKtLWEg8Ty5gJs",
  "key18": "vDmWCmELwZ4MVZt2SWf77msiA4jH2GsdVT4YaVsz6K6BfuZLEU6ZcK4kWHzdWje2XvNEE65VKwSuiBYk2tgAEx7",
  "key19": "42opY36Gedtcr4M3ceUr9ARBy31WzCu9VQewvZFpngzyAGctdMbCreADt1CMWns2odnDPnANqqdn2taxVBKcxPFk",
  "key20": "5ZKbwYjUm8GvcxNtsbiutmaa1YSVxAMH1WTiahgWMoFApqSg1EqJGnQbZQbJmdQa2SQjzxkDagogLQehGHSu4b8f",
  "key21": "3j2g4XtMmjpwDe9RVy6YcFhkxNNSwsQ7qLwCdqQg6ABPPG82KSBUXEmveoDqwxzjrBv9YyAD5rsivySYpN4J48gq",
  "key22": "54YB9J2boxnWGtSLhmzyZ24CkPr4wuM7bfQQeMMM6B1GGJbknGDSu8ngXQnK3VqthtUYucTZbCzhPPMFpqaPN7kG",
  "key23": "2EsYovdp6aYHEWtCqnyCxJi3pkMDvJZiGcALKtCcGTTkCzn6DhKmie2eQ7nDxXbwrpNcBKpHohVW4L7Vgefnphue",
  "key24": "Rx9isQfoc24aSmaN6UCKRX94t5hjKKAgeTusjHsSNyoabRCVDZDCpt6iSkeLtbtZbsnETv49bDEvZwwa7cEuAmk",
  "key25": "3iCtrYFPHjjr96nxTofjf3VCW1sSU2gUbs4bigx5U2GwkjkmjDFRW2BNvA5UcECfu7uCbAWzrMGKdt8dknqwJx1M",
  "key26": "5oJbNri1MeXcPoR6Eb8RpmaBk41iYqAQUy1kmy26uYVUQrnsJtce2AKpzbdLjVwabaB8M1KMUEYGEWoMtHqcKtrn",
  "key27": "CtSnkSP2ZDeZup7YwvNCupucCGG25G8d4P9wG5irVbon1TwTZaz576khAQgGeeNpj7UBvth32Kb9DSTAmk87sdg",
  "key28": "5xetEwVcYJTBvPPj6cEeU3yiXFK4rrMq1GHGEgHJAC6aK7vv1QhWr5cfXuEq9Eg9rSRQ8wRu4U4zAWZYqSiFqLaX",
  "key29": "4WcAgtgSPed5rmUCnSJBv9N6FeUkMCEQBbNUajRPyfpTkguhx6HtCjSWmJYDtC9SaSAfbRzYmrsVHkQsGgnTuqS5",
  "key30": "4TEa51xv1y2HRLn27gs7gQyZkeQ3YaLwwCi2KD5p5FgALXPiwStzZtB4AJJycdMFohJwR8RrBXWhg9SG1YHbfaoF",
  "key31": "58jemF2YkYKkKjgk8jxXJbyFnq4VUY3K9CivPGSqnG5HvvzzjLabfUzyEEYouabSAw8iFsEBa7XoP3sAYydLNz2s",
  "key32": "2n7d1z3PjB41abzZt3K7W5zSnZqXB1TKzvpaeF6XCEKnANLfDstA5kwxHDDZFTU6BkBS8VPnVR1zoBjXcHku9czh",
  "key33": "2EXk3W87kZhwGXuZGZRKSmqdt13SDFgPPUfb4XzKkSEzsum6rpyfkSzdrw4coAFnLhPL3sK5ixDumn2y7WbBN1bz",
  "key34": "QanHoAtTokDDDQZE5C3NkSBLmP6VtumgWnUW3YVjE9rDVX9YdrcQnoGLL3ePTyoDERbBy6uBEH9bVvdrXsANKE7",
  "key35": "5FF6GX2gtBg8Mns6Dqgswjb4iKDyLT6MnNVUPod628q4svZrCmd6PLEm6xKqRz4WTrPGi7CJZFrDmmUMmZsxU9m2",
  "key36": "2ti4r9qp89SVvNAp9q4sDFy6t2BwW3CeZSNMkWDy6r7RBAkPhyXrL47BB2cznU6hCa6LfHpvEbsT2NfAAbEHZ8UD",
  "key37": "3wgyvootEXJ4A4EMpStecHhB6WwUAhfi3WCvd7hZiUGonGp8er3GtqbHkNBDWVnEK8xGCCjwynuYkZN6GwsGjtmg",
  "key38": "57ozZFuQWrEuCtohcFB5ojfEeV6KwJTxPtLQY5ic3UoPjGXZTe8H7ENgpoP4WybufakQDbQgWDQLBSxGFJfpgurZ",
  "key39": "L5Czak385XgMywYNSCWf1D77J7FqgkrrWHwhDtrwv2P3a1fLHnSP3PMkUWktB8HJzZxakwFeifW9gun6XoYbMbm",
  "key40": "4aD3FDguxGoBbnooUSnVFnzs9ygsqgr9nPvhfFCq5UCGasUF8EqAGPZSjbeLreYNpcPupkcGE2Xk23M3JbhWTURT"
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
