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
    "TkP2F4Cy8HRH9qCV7Ar4RyK1kcHpDi6GXox7YvANyv4hxRrtG3kqecxB5UkGhpEDcC2My6AeoJ1qT7onRZJzw8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32wgXCLXzpiVLCKJmTQT3M4oqrLi91absauT6Z5RmyzdtcMvLnMoBk5LqR6sx2uPKNYdJsiHykE7tzsc8FcmrBoc",
  "key1": "4FxiR65AwmKc9NSdD1zEQ3mrHC18RMrFUVjPPL9V8rP1gnzXjiMc4zoGvuaybzT3CBXA3qEUK8ZorvxNGSbgZkgW",
  "key2": "5mHMUPBH2RoxtaxdTFJzpgBmCYNziG6QvVAabCrGHADHbDDM6KRpfxsAbfQphVB1rLPNyy5yYQzehv6owrGL3Byn",
  "key3": "3MuBNpiADaj744WQaMGfL87kg2nBBH77Jg36VwRh31FZkpNZKYcpWCRewNvgKi34GW2wcfBbk6BnzhuC71TVWC2e",
  "key4": "3Egtz3wdSRDWKj8hYUN2d3PXEdh4JepqvrRotjxZDVAacWidXUSmeTkrxip1VDaXRxDqRqwKLQLFxQVtDT9cV1v8",
  "key5": "3q8ciMczbnYHrABxsF6h57GMctH3fq9Ys5TDVjyYZGMqxq6yS4wnE2f39LXtLLLNKqPQakSXwwbqViXJw3AkiGAU",
  "key6": "4hcq1C7Lt4cqGiGbckAqdMxe3oisHkBVNqe6SPimEFbUKU3eJKB6sdGRk3A3H338rqRxwB1PCtnVFheuQ2Nb8Atr",
  "key7": "Cz4xCLqqZCKm3D9L9Y6y2hwJdTc4cL5DEKyTWVzXa5KPjCkGDCB7CPPxKqF1yZ1YVAtsMfatXTuQFRzUmtf9Z3U",
  "key8": "p1w5x74z4iubxAzNjVrDFxxJSYr7MSpVzfu7i3cYXA1BseyfsmffoynAo3oRxUKd8za2r6brDQ2g6LbprCaa1vf",
  "key9": "48b9ZY9oUcWRTdETdxThHjHbQBcgRRgmnXwYgeW7JVEnAVU88HtEbJGPPvZGQGseUcm65abwoS2pdgWb4k95s4Gv",
  "key10": "CgXkLYJkk8X3s297iwawfGuSeT1Tgvujpuk4UPhL3u7yV4ep2cNWDcHRTpQz9ruCg6EGGrqkFeU9GXYPfX7GmA8",
  "key11": "2QXgdeKBxbamVotChoeq5iB3SzvT1wj7GE2Wu16bnxcXa5wZrYgY4DyMgAmtpxr9nAL5X4pAJypKqWAcANoXqv4x",
  "key12": "V4MRkcDnCHsSf4BqkEpezHopGZ7QybDpesMvV2npPuFL3BNfMDGspAdGu6JzqUJAonuQLPcpGvLQy8f344n2ZiQ",
  "key13": "2pgAAXidUG1u1oyNzn2N2krmV8SztmDVMhY4UdvdTQABNvfpQvfsEvoRUW4rUdE6fXvX6VaAt3BoicEkyC7zB8vd",
  "key14": "4v2FWxdXWgxM7WFLzz6EjGq29EFaU2U7fcBFpWjCZAGqNaikDirUjRbYx8ybXhf44epE7gu63u1gw3BNqMsVZGQj",
  "key15": "jabj5VVc7w6YDHqQdDZhMZJqAzWKndvaj59WqamG7JsS1K8b72678VK8yqprg4Yz9JzMx8jiqoGdcW59UZtv2Ra",
  "key16": "26QhxtzADKfeTRLwknP99tTULABLBF2HcnTDBFfx6z32LDitgSXGYGiLSLoTVAf7VXXhDhhuFFjiFHK53DqZmaUw",
  "key17": "63UZvbMBr7uiLfBPaVrzgL8UAbxJNyEHbFpoaLxvh23bHVXnPsnkw4wykdKERLzbKZCpQUxuzUo5atqYEh9V1BRQ",
  "key18": "5jkQTVMAMpjrcqvcLJWhr2SYYFbVzRN4YjvzmaL4Ge8cJCfNGeKReYDLUjUULzsFio7x973d5BrB1D9X44rKamNT",
  "key19": "5yZDsLuSEkpVzYR3n7bCWdn7cUCMJaFdnETddSLuMqoHciVCEFkFANZjP5KrUedicTs5yFnxCunCSC2p5rzcqRRS",
  "key20": "5iQt3FUBZK6Ee7S1FDuHAmoEFwrBRV6uvNaUvDKTAqaLQTse6Yobcf4TZA5Hcx3F5SdDJ5aEeM36peTHCvSEw9e9",
  "key21": "2VYoi638vy6vtjPkaBv9ZR4xFQR3VjCNuQZk15yiFb6Fjvpa7M4wmXDLye7eci4BwzCWNhYF51uZNYoSaTrvTMA9",
  "key22": "4gyRX8uVbeCtCAWwvds6oXU8ErdAKLhAKU2zcRRsygGRrpxBbfPmGpdiQeD57FGS2E9uescFhzVh52CYiP8NZ5Pq",
  "key23": "3kHzHMgjbKLp8k32st4NCPAYuCw8jzMGVd13APDcAgAHmHE5h4izRLh5jQ8c6qLdxZiafHrNHv5eRuU7ZGvveemb",
  "key24": "pbHcXvX9wW2uyMw5VZ3yPBdYx3PU1aWcXzghzAaCPK5UVGexSt8Kfjxto8CgY1FvshcDjqU4GTCPjhGiDzbC733",
  "key25": "2krrpJwLVrXr47QJLcJhsqt3ZdhbSyri7YRLDkANVZm7MgxcAv3gxrqcTZUa4hJdxkL62uHX114SiBZHtwQBoGt5"
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
