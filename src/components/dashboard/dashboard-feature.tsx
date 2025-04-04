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
    "4LBeSzBrxYzUkK6PwbcwTDmRiJTxasy7DB8Lio6Q4CqUZZVkMNpSthUfJ4GxGD9dBLSxcaoy98b9wLecwy9DBJas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34EVwBcV9ZkZRfiMB6uB3suYrnktmvve2zbCT1Y7kXaTNJJEQfkLyv8JyqYR8yDRpeXdut8pyQvRktNDDuVuiJSr",
  "key1": "2t3dEvaZ7gFbM7QAsuArvyXbEwefaLn3iFLE3ji7ENMDza1z7vqUVp2Fs2p232Wtiudm4XVWA9YS1927kZkA456G",
  "key2": "3K1irRnagAkUnUotSaUWoNC9X7eQG4Ee5y694YSUcjXqMdzEfrgnSeAZZnPwxAfwbirzz25Sz2CE1aXKMn4YuKa2",
  "key3": "31WkEGFwQH6qB36ZtXZRs1emCiGdmSBE4tK8S86YpiKfgEwFTJnymWiozYm3fg6VBMuv9Zq5JzGkcHdtrENViSEV",
  "key4": "5D1834kLmmYPMeti2uJC2d7VKiCh6CeMhSnVepohKhjGRE5nRE5qHScUSb1o7joz4zJcqpyxapkb7LBcf1FmKDaw",
  "key5": "2KR2YygDoFRFG3cmbxDQU3ejypFM1MMkn2uy51kDfg9huaTiSWNcgyPpV891mEJsCsjWvjNUZfMGNicfPE7CVLLh",
  "key6": "5ZDYdibX8GTYdRZZ2up273LMFHMyCe5nkwo2FYfMwiJJ7t4jzm7EzVYjkMqM3n7kgLYULTkVe3VvTshvYZvcVhov",
  "key7": "4FXB5AWE5H6nQX2YANs4KwTUWc5uhWt2KibtmhiDZzVLFTdTyH4farB6K15Pnqd3dYAqiWiosEHvZY6d5Mr2PcMw",
  "key8": "4LNBQEq31BFC7GWm1coxYxbdS3sva4ZifcJE2mc6FDYxou6232pgbjqDDGHfwSqLPKvemsnyQHrpPxDsE4fpshhB",
  "key9": "65E2TnYrKbJfjdPh5gex33v7R39LHfEvnn821WuLk1vhpw4Gn7HzC47q6MJArcrHF16dxiTgbgvZtSYNh8PYr1H6",
  "key10": "2xKhWpWmkLWpAszAmfbZUCgDrDDCSyi64QnkNgPzCWGG4isktvKeP82xs7MpXTpTzn4DaZmvQNtLeWaUN9H5y5kk",
  "key11": "x4WJTzEDZUg6W4bcGgCrh1BCXcwJUYXoVVsFvmicRn7Ws5hBb9xQ6Rr7sfKuooJcDHtmfKFk4sGXKoXYsGZgQsL",
  "key12": "67ZLwpVhn6ZG3JnigqAT3wDaPLJcALqfJwTccSLcvuPEBSgcwbLwx18NqBcqERzvFTpPsPywY6vhnKUYTGCHMjaL",
  "key13": "5Zvcote6T6KqKgU4toeKxXayHFKk8endc2PB6h1FFrcTyRPotJvYd6b1kYXwbSRGfBVS3huNN31jRW97gji1xxUa",
  "key14": "5ZW7QrXNnQ1eiv7MjL8gJsv3JzLHnHvipJaS4XRSP534Gfvy3f1qpnvhzCuorUF6NFhYVX5Kz9YnoEEEGcgcouYu",
  "key15": "38BJruAxm7LV5E61a88in3vJ2RXTyz7WEvmNkxa4FvKH4kJ5XB9n6UQ3mXSYtBHFnk274hyQahdoePpBf34j2Srq",
  "key16": "5mLreM551kL2m8NRD3vnxZw7zjRojTq4Hs8GppXNvqSuVKva5m7BP6s1w18L4zKTtAvgrKbkrHoFJeVeRXUEgZ9g",
  "key17": "4TbQgWJSBLHDGiegXqMHzLRXT2ykGHimAcSFobFA3hhTaheJuePYuP2JSgciDghCf6AkEw1fnwGenuDntxuVnkon",
  "key18": "641XV7f8S8VzE1wruuP9nTynb8vC1wJ3yKbNqhvTmwBdrH7pnagVfUCRa1Fg2sTkvQHmPswLsvzZkzVQDMNcV8wS",
  "key19": "1RqLMHn7NgP2v11tQH5CHa8qELjmXXAh1s9NNtjekHYq9ved2SkivZXGvWfGA9Vsz3VP38VFns6vKdPdDCQedGD",
  "key20": "5qX2KKZqRrg1XetnoDy4KRz2wP88SdisdHb8JpHVsz7d5vPSsqLJWFVtD6inK8Jx7q4HHzW9sLSHCgSrfr6Lzi6k",
  "key21": "27i9y2h1dBTcD6TNNmMQQHbFwQzF6ASnGND8QLHpmh1mk3mDQCgyTyVqRAAL1ZhwTX2gv9dzBL73yPYp8umSHKGw",
  "key22": "2VNAcy6ahQZsPSNYK1H4ASmwPRdfSB2tCtT7VRGacnS5c5EHnA4xfbRk7uzYYz6EBqT9hbATehzmDnRwb3FXQ7r2",
  "key23": "64SbRdafBM9V5xf1RvTtAoHudqH63RHXCXG3GtPyHBs6LYxxX2PMZDLcidyyyrmLFQCEFzYwWbyhC64FWXPPTsmZ",
  "key24": "25AZqmxzxnqrbiU2VWQTv99e3N6xt2h5hWHE7WgpejimQxBsxa6yaQT6cbHd3QX2iXTp8EGSbAhdjUpuz95QE7rn",
  "key25": "32FFtQgpUrVPDGHGZfMirPkhZBuREu3FUY3xcPCQ7kHiqvwTWfEcDrQ4dwuNg1i4bDPQV4apojHqbx11MwRNjr6N",
  "key26": "5JZzeyeLL2wF6fae48cQNdFsmresHFYtUtkExqFpJU32Vi1vwj3Uea75fPBC9ntD9xbHMmcU4tuNXWEPQ7nfCExV",
  "key27": "2aax54pvqk7xgXWfkBQZNdTSzA7PWcwHvpWoiWYU6v562zWSN4drQaca4apRH5JuZ5pukq13tiG5BDU47BrtUPTt",
  "key28": "5iUmx6BP4trT2gbBDyue9vnAeaoNxEYi71VT8sFgNDRnxXD1iGofzhzqtvMorerTRKSHdHvByWg8W9BvBP18aJ55"
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
