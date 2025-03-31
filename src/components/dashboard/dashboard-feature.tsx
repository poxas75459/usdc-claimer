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
    "5ACdRHxtUAC7u1o9LiUGxtad4bHHQ62GCKQ34VyLXNNSzzCJsLorfiy64vSx2rEVsKP984GaJRRRcWrJCGLPmqyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b1DYboeUCSGJA8MycAn9FE9urMvebgT7BY7Wwu9NLaN42VfaaxTV3EKm9hYpCxRygk8gMtE7vYeRZuvVDJV8CqK",
  "key1": "5HVqk2CAayWgwAim5uCuWtHM7W3pcqAwgZGSztUU4PiVHjWavPqMJ6nwfaNDCB1fE8QS1ZcRNGY9hTcKfhd7yT65",
  "key2": "PhG6mKkUYcJxNMAeYZ1xgUq7vGhGben1VyVRi4NGDNx7pTsqqNbiq1s9KZe3ST8LFTjW6x8pJRcF1VqohiLY2rD",
  "key3": "4MiUPV4T6RNYvH9A28ux6uM9aKaBLaZsWr43kaL9UvGEYtLv6SvyFXfvShsVpBanudj1xwBXpgziuRw42AWHeDtF",
  "key4": "63QvXsfeCgyyaeLMekBREt5N1xQun54X5HprPcnWs9kSoEmFo5HU3wiXtJwuGmTdt6a5e7TyVmhneMLMk7uHGHik",
  "key5": "33b71Wt1YCZp7Q2ueBXC66M1aBSh3KbWkokmfUb1QsJR4R5fd1RGfNFbRy9WrSu8TWb8VPqsCiE7BcUaMuirLgHA",
  "key6": "PCzAbyme26TqB449jiejimzNPPiJ7tv6eCNjJLMFqb5NzwcWaK1a3xkksUEVge5ZGYWLggU9d83SoARTWbgufUo",
  "key7": "2rPJqk7PAprrzKfPHBhEfBBmbQ1rd2QQwtSDKfKuUPBRPdoNqYv6YJscRFLirhvLwvpJEDNM4JDm7veKJmtFsE2w",
  "key8": "3UUZEJxCftm6qHQHekfCfCXrHeBTPqQhYkpTUnhAynuaEfABQajwKRPvHqn4Pv2Xf2UNsihJeUzmQ1jS9CTq1DF6",
  "key9": "3fnLXJgjtaWvfZdspqKBSW8pyHowwo7V7KDhT2ULmr8NvegCVhECRbuns2UgcYmmyEfY4zEZsvj9jhvVk248ZUmx",
  "key10": "4zVneRHQtEajkAamPPKKAbHgzVZw8sq5Y5Kq43evCrFAt14jENCFY8UfXdW2RXjM9wZy5pB2sbdZENFCbuuSBbMA",
  "key11": "hWg6KfVQEAT95bQDMimjbQhhPN7XWS53XkPCNy7wo8Hbk8DGg7AxNrqVwcSGcDRY2QmGWeWdhvgJeDedUrBNGfR",
  "key12": "2Vp1QeuKutsgWKWDunufyjVNBjCHDf9zehSFiUmBZ3Uh9Wm2YdKh7E2x3TEz1DATDPyiLQ7vwwb3a45LbE6EmJQp",
  "key13": "5FtwveSs8vd85efiEduzZ5oFZLSpnSBsYtuC5LGYCmsNRgbmofXA622DREV5yXSaq2amSrbbtFwpAfaLxchnTcZ",
  "key14": "47yfC4yQufn41QLq2W4ovGbuvnP7nc856SVPSxwxkYYMwp15UGtUfombY7PyVNERf9qL3NUGtiDpG75DuDYHrwxP",
  "key15": "4z2navfXo2eAycPL3i6jd39E3VhjBvPyeRVEN7qGxMXu32pNr7W48g31EexyG3H2WM6jbGj9bLU91uw6sUUZ2qME",
  "key16": "3rwUZfT1YUrqCms6upNmnvonxEubhkrRDtznTYkn6c6CPEpusn4F3kj8jWrqCaUC1P3RApmAAEMhFBhwMpvYeYpD",
  "key17": "sijGuSEoayrbf2G8ks25FpJu2qiWUG9w5ReTWXENKgNUbDxFh5Rq6n4Fb8UiHt1dHyc6YVDZq8wCDH435KK2w6K",
  "key18": "3HArm4xaQxhx422LR9wyJ3p8fa9csjuaBBYxmYB9B9Amak7om1pB1yE5T3qA6jufEqndXNkQdrY7S1TynqusCQz9",
  "key19": "5nAiUtZeuRNE33kDGvHmWVKQkY9bbjgbV373uevk9EgXFP8GC7JLra5P2d1WhuBfSrCVYitstNxRFQGdrc7MHBJF",
  "key20": "2gqHoQYvS9orGMQW3eWEFf3FVpYcqLkbTbVsjwTktLotUTug7RtbpepJfTXFEcTkA5VftT7yRRGFyszgy7XH5SqS",
  "key21": "5oyGPTDreVaYnpzaizraCA2v4uSAXyvF8WbE4ykybuUhvGi8BbGqqwhKfFFqPnaDE9hw3PT3eJfMxTz7EdJxDp7a",
  "key22": "52QE8dDqZmuyKJZyUHBy4tNbFbtyscHTbWxfgmYgscKeNChCiYaifwr65CQJ5gMdRBbvi4vjGE1yJsm9skaLh7Du",
  "key23": "BzfHAHqt4rKY4yo6zLMng58Vb22tP4hL9M6rc9w6Abqhq7PQQGZyLvxrnRPorke7AoGawk7ML2Gvnid7YXaMaLC",
  "key24": "QmHn2s8VcFrMwpZ9NS1iQCvVK4nBwmg3k6rnDCWM4YW3G24KVGUfhLgowiji3PSaMLGWX1hgfdUMfhDtHeUt9KU",
  "key25": "2GS4EsWpiQxEDNnPxKCLybVbWtYme4mRjKPHsqCcKEGiohcjbWkku4UpJTX2tfuLHMVVjhxWVYm5tSwgv3CfYyhJ",
  "key26": "5Sz7VVjY8QhE5Vow7EkLBRXWFXLRNhnzgs3mpUNLd2nAHStEw75U7paGAEy2X8uNRMYMaTbBa22dPb7RD4kzmPoz",
  "key27": "4tgZN6WskhDAzHnkGthm75yZyeBDVi2WiWW3XCaGUS6eXcbizujxsfUAK7JeGLFMWLmBPTt4WX1V4UFE2xCRann5",
  "key28": "ZzDn12yghjNaAs2mP7M2EQM8PFy7wwuahQKAcQNpRAgRhMcXthFwWVhb8oBiXCps2nSghChdYGPzQR5EuG1Uh8M",
  "key29": "3Tu7wsLXAVQZanTZo8WeUPmXT47QmfFrFD2TLSrQeC1ohnSXw2T28PArw7gcB43xM5cKApLtK6QGSS2eDkccxfSj",
  "key30": "3WM85jHKakAFjjSkonma5WViyfuX32PdGKyFhaA1FT1S84jtUhJz2LUHwjd1fc2EDBLPMUbHN4DtWPCNYkXvZEPA",
  "key31": "5u7CeeYUB5pAjGUtozGisjnwxcdpdDQeNAeL3J9DCwLJW1q9T7eurMWCdGKXHouF1SzJm3nCWST9tXcYoT3sLDqJ",
  "key32": "64GhDoe7XqpVGRi2zPqCaWnK6mgCtDUvPLBjyW6E8gUHy6y3xHaSjFiFex6E1U4vYxWyZdsU94paSwAoJSA2yGFN"
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
