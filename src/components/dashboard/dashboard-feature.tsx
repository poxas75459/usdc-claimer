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
    "UXbfDyjKE4RKiyXPEFpTcFtgzpCAyqe7F3eUcvJTXnUhEpYKdp9e3CbyGF5itHkqrY8Jnmo6pYvtCL2nKGUrdv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31FbX5EHp5ssAgfSCymBqAhtveekCZfpYusD6RGYHv5m725pDHJM4B9ae4JdfCchtU5y6feR42G38TmS6noizNV1",
  "key1": "VNvcPgzj14t6AYyZBsKsoQXmPqEgbcLN7UwS7omaVviQTvGgtXyQM7QfrgdRtP9TuHBUkM8ZhS5NmJNYvUBye7q",
  "key2": "5h7zZYJK7XxCJsRYPE8qGF8W7rRw1Xfu3Lsjh6zjU4LdNmRdJxgoBxxaM2sMBsqDZ6vz9E6YS6QNjNNJCZ79VULH",
  "key3": "5rC6c2GiNscsSv5fTbDMjzr3W5FTsm1rEavgsnexuZY3Vhs4juqLZTs82ACvsJSBhTnLn65yyMxgcFQ2kVD7LhSM",
  "key4": "5nFjCvyKjTYthbgdr8SxmYcvMee4QDVUCpJ55dGcThxMMa2ymhWrbrai1YaUpq5EzPPu8A3zbxjh1encPNrbbuEj",
  "key5": "ZruKX59imTNMm2zkATcUpmFGEUbdrVeLMpRvwrVJxaYZtbPwfMXCDBmmoqqP2XaRwYZtHR1FMAaw15bWZtGPHMu",
  "key6": "263SFjkWRChX62Dzvm7EkJANuFTHzav4BFSQupLNV1VrtGRHFS6dsdpTd5BZ8VTLPSgM2q7jE4m3x4CVVbkEYeFQ",
  "key7": "yRNp5aezSXe23E4sSjx4CgmT6dke9YUk1uXfyVZGoRZSGFNJtgC3hPZA3rUWZ83ZvRyaWut9uSSb94Ny9kREcML",
  "key8": "32v8mFW12qeKVVy8YshBaYZDJ1aWKPUF8JmKRXf8HSNr3T7yv8xhX3aCKzYgJD6EVGXfKeSFRkLRovsb95YGL5EF",
  "key9": "2nCGQ7pmP3BrgQKedfTRnsEeE7Gyqm1Ad9wZN8gQf4mFEfcZSLvDT1BSfKV2evqHSrfMTp5DxfxvpqcAwcvmsvXo",
  "key10": "2pGEcDKvzaeKuP7UFp7kzbHgDKbDoM67LFLrhZe8wAD1sjmLTMqz3ZLwJTZAQZ6AbV5fx5k3wxSBLUkhWM55Mopu",
  "key11": "3MzyDH5MVb35S1tV3QtatWBEBcMN92Vs6kDmLMtiQRYrYWPRvQVG1Sbf74DAoXWBgjx8j7od9X3he2ADcvDPFbzn",
  "key12": "24EbBsfowFpCjNRRzsML8RBgCCLeJ3dLE6FG9FCejLhnxwCCwrdxiAZMQWDUqcnjxvTrUhF3udRB2KoUc4x6R9n1",
  "key13": "3ayEWMZS4ekTgubgJFneYNhBVqXSVAKwCWtRoW9QT8K7bCAVmhv7fQGz2bY1Axtg2mYStTGWeaSr7hbqD3WwTBzM",
  "key14": "4V9nmNv8FVaQUrSddsCg1sdtyZhc3aZWtiWCkLijQAJiwLjzny7R2yp9eYvtSeAeHEeR14X5DAKVP81QYJrRArYS",
  "key15": "5DKGRzHcNSiXK97tpQvV13LM7KtwbnYRLXitXigUyTSZZRde1ZLbxN8hUo2157CDHv3EGzphUab2tLcRdsvBa4qR",
  "key16": "4ogk19iMWDS7gqooGsCro3rqvwayhkZSG3veGTzXfwcwtK92aEj5rTmaQjnM8JKFCtHLbEU46yDq1a7ruoZRuJnE",
  "key17": "5eKBajU5Mcmy2egHJdcsLfJTGkL4uBn4x6ujpbPJoCK777MfSxMaAYjT98dDrFJ4f5hgPwnsGfZjE6rssu1fUUWq",
  "key18": "5W7mxw6dfrEcCEyr8hwAjFMu6mySVZQ4uokHpfuN4TvHsX4LY9HRe6gHZzDe7SaAXz5kycDSf3h3CfmBUMadgjP6",
  "key19": "5WPPbYRsZ9JpxAG6PRFH46zSnUMkBDtr8q5f9f8fDPtbSTMjnKKbiqb1v6sv3eZkRcLVxn36t3GJCS3BF8Qq3bAR",
  "key20": "5iBS9NxnPq1ubNpUe5EyXz28yZiugyjbE67SUKipThzJnxZ1mQCAeaUvraRAzsse8nnVMAepGNeJYZ3JrmVMjevX",
  "key21": "3FCfEcKDpxhzAt1TV5XcWNnucMgKDhLZJJvAnczf9GkG3miM8zqwUzBvihwqGfRTzZJMJNWntiXPeFgqAhZXWZyX",
  "key22": "3yrRzVaSqrjhHfSm6XLochH8oqzFLEVGxQGUAuHRgW4CP2LbFJuFYYAnKjL5W4n23vGa9S4UbU1c7sUorY47qXTj",
  "key23": "4QHAWWLRXAkgt8XmnHQ6jnCryKsbKmNKzYo7yx8qScLQRHECavu69BSu7Y94L7xQi5rKNrTojpAZY24sHjofrRqK",
  "key24": "37zJRMRfmjtAPCUr7XAgeQz3KVSs2iL7LezWB7CDtpXGzeBxvrA8giJeBzicALaK5C1jwTuqnajVkswq9kU9mGpY",
  "key25": "qX8W5i7e3HDNzx6Ysju4MVud8H9EUFgmNBkgFs8FxoTdbaZnKYPWcbie5vgwfndPjifpFWtcVJmVXKT3M4nDVnu",
  "key26": "4h7bYbr4NytRRRfBDEzoCVRULw3qtkULoaGbdBSEsJ31z8dq3a27qVc96M4ot5DPqbNbQnc8Uuw73nYe7Lix1nob",
  "key27": "3y1dxA2A9Zj9kViYvv5rcXMTS6Y87U3FRasMfXS2DJavHz6FsFdXiNmtnBjyPyJG6gJ596H1edgjQrunXSjf5DNb",
  "key28": "2bHD2VaxyoKA9v6HMsPuyS5MCpsNS94rGt7uLtixSy8PU8dpXy6GATeteDr4m3cfNj8buah9YDvh86GMBZSeYBkE",
  "key29": "275SMdEzeqhorEhtDP7cqgrBEFtUhiMEMun3yjbkyDvDihRNHKeWXVPQu7VxjXYvsnPXHfCGyrhbLu3xEdSDUXim",
  "key30": "38QypWHVqbXsJHD2bzgZVp1B19jiFc2ianeVWkUW1gHExuFWSHwP7Qbt8RqSkSoAiZcK1gz2rrckt74ZAqearD24",
  "key31": "nj7mvvo8RHnCKXM3hujdpjJi1ZLvSUX8WmneCPVQkmiZh7eAfC3QbbbN3CFWVafJj2d7jBHNCVuxEghfbhxHxGn",
  "key32": "3nGGJ6mho6r8id2mmmquqgPfLnFMKE3cwwmnjVGet2nzJzXxGUhdeWQHq2TmdhGqsYMoPgLVqqA6KiMYxGAB9ByX",
  "key33": "4aALPJ1R8U8YpQB2NdXb2TaPBnu4DhwsdBoSBHTDsjakwSFuqgiWdFYXupMraidZ6PmRjhdmS9xomyjgd5ZqgT14",
  "key34": "3TJEZSAFNRVJtL7yc88gAi7ectrGH7rdNEPvUknfy7tRac86k9yScNPzTxoi8xWr1S2gRpd1ye9JhArG9EoztsP5"
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
