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
    "3RsFDWxTQ5419Vc4PFN85T6Nx58D2NBx7CByqct3dd7j8Py4jiAfGrFdZAaFcrnA65Lcb3iV5K4xaGGpe9sV7Tz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28xmGqAb5x3y4utfUoitiS5KxZev7a9S9mvpz7J1YpjE3QMQxAed4LUGTxPB7kgwKzEUnUP1YxUQ294t2Aw9oLEQ",
  "key1": "4q6W3oNet6Wnm4J6fURLG3uKXzvAnTpaKEnrH675jPfYkygBjP9h1AjVhXD29UJ2jpG6MytsaLK6cPN86YLwH7bx",
  "key2": "28wNWvwTWdJCctSH2481drSRaau9CF8DHuaNG7y5EkLE63YRXq6RntFHa3DPY2hjDPxjrdwNngUCtzkJ6c9tRufX",
  "key3": "662c2oJS9ZyhrDFPztmodVxGaCtKeAqxVZwGwt6oRtAk64bczEBYvoALBBveS6X1ZkgukxUeCieVuGa2Ub6Pd2do",
  "key4": "bTacJGXUuXRD4YfWpQ9rsmARG2AgakPYJ7rHSEhV46cE6eP4Gue8R76GwNbETDFbEBAARxqhkYsvp4ApiifGFyQ",
  "key5": "47d3gjfW5HCqUtqy1LfeterLJiSfgcgc9qQ9rgcJykxCmw97tLh3fKccBScNWUm4BAcDHJnHn9nFGhcywumA7La1",
  "key6": "3rp4dyo2MZ7SgfQXtHSbw9Mna6UjXYLgyfgwoEsoVxCmDEv9RfRHsHKQS1BTnBZQoPx3hAFbnnT5H6Hr9kLWEZ1x",
  "key7": "5rRSevtX85qa5jUqcrHTfTN9AHsvMKp1nvMEuM6qWjYEoo6W6TsengjDzf5hhoWGVx9L9zi3o6ALaPukPpHbc3MF",
  "key8": "43PbXAdS4srDN64My8dUo4VXLTS6pvAKAJ12Ypd9r74YJzvpktdRJ9wFNnfswrCR67UwiZ9gwcXq8CPsu3kV1qcm",
  "key9": "55beHgoYFvHLw7d4NMp8GHJf2BRHpZ3EkSHjCNFtM9RfAT8yknuC5Q4yrxkZdVKSW3jGcyb6AsFMiT1Kpxkp6vYi",
  "key10": "5oBAyiL4JGFZYdM9u3JB7Z55fHkAhbSJrjJ9y2EnibgSsYbP2x97YspRVUGHfT6bppBTvBwhfniP4ieRyG64cXTo",
  "key11": "2MhFmrg6eT6kuvaRim5jcTn3YwBLRZLSemci4fEs6VH1BL4JNM99sGDGGwVUzWAVtNJVEFivF3jbGYHm8QNJsMSW",
  "key12": "5NgtvmLDyzZmv4tVb83dNwNPfR7JRJbtme7J1qEYKBm2poREd3GzvAx9JKB8Wwe77exUNAuXgHsmdwb1Z13BbPmf",
  "key13": "8nLj2V5x7eT7Mvk9h72ZtvYDQnYwEqcdrqe9bAaUHXX4LvAwfccSSzUxvFvMPcK9yumW2GLqWzfFFun4TVjwBVP",
  "key14": "63qWiSSaKzUhPavxKVhgR8yfkoanU1j1PHBcSUAXteyWBxtcB5Ee7qThob5YMyBDWT3c12cCLz7b34QzRJ8BnD8y",
  "key15": "3qutqHA5UCjQau5dcKu1dDnZ9WH7CTySwCvEkBQU5cSrRTPci8UHft4HHUfwJnPheKdVKnbhvwBr5U5vh1HroBnk",
  "key16": "1JL1wg1vX7XTw8HYhkWJubYyPAqt1paECYyHMsRBaWjJXxRGsnQWXq7Mjq1fwLFSUpB5XqoccHQhiwVrJytRViH",
  "key17": "51eD8THPVWe3SotdQbrXwzKXAt5GBh3rQ6YiFmb99wLtL8HpUQzgcWkSVnkmGx5DnpsXFn724b9o4mCfng5GETx5",
  "key18": "5qJpypB7By2fsYiPzvp6ejsX4f88Ua4m4pdRqqtA2QKXCJPSin4XAihEbcsgM93svoreiFr8hupnJcfxtsbmXCCT",
  "key19": "41ukyx58jiNAaHJmHigXe9fmKpZmLTvGUjhDDFuHjiFVv9Euwvd47gkdLT1o9hRMWB2xgAWovHB9yLnc4Qtm3hpx",
  "key20": "2BQtSk5sCEmU61h3G2R254CmPb2985nfVX8TAMdMD3idP3VYSFradmicMUnKj1whBsDk7xY6NKpYU6kqmzQQKCQv",
  "key21": "57j6KnuPJJai4zwacY91s4nLpcsvMbiEtWG8y3H7SsE5eMypj5SRJq8Jq8igSEqVXaf47QxM2Cj7X8rsMgVPSWxK",
  "key22": "28kdgtXTCW3UooejbjZJh67gVC2VkUbYLoCLFpTAebzxACz6844HGtR1NYzVyqTVfLf5rqA1DbAFF1r2Q4jRpYf9",
  "key23": "e1ja3NCdcVFGSb539nq2D88run6x47NEtbnbjzEkKU5JrMEi5Gbwqd62j4pSj7Th8zZWHn7yrP3t9rmGyh4DsYj",
  "key24": "4SJapPLvVjvcS8aFyCpeXJm6GrZXNwDJK4oqPN5KpzJGwsg9Am27yZ4RYhB5WVF8w9WG1NrC9q4XLkbEeKmsSFTh",
  "key25": "5Xmfu1ahv1joQ6s5L9BTn24y6BsDB8ohfdGgaSGJ4CdwCCtbtsibfM5zuDbPj2uMY2CYS5hrYHNHAA2tbhNaxaMZ",
  "key26": "4cmRddNBGnRAjQJdFUxM2dZNEyw2ktXVN38jm7rvAzYxgb274kj4AVnnXt9LYEG2ETYuhVfE6z5hEdRY7G4nWKAG",
  "key27": "4zCCVXTwCtxA7JK3GAVgmFgGx5dKseXhgKkxMfCsciDLU1tcDHru4UNGHUZicYE6s588Y8BKQpRjydN2vuf1wtWk",
  "key28": "2mR6ADFenh3oAAhAEnmiD3p1hDfpMUdK927PsjNesNEVKRD8joboaKJGJAHAb1jfKC4sTpieyUkmWGQZuFz1oyF6",
  "key29": "4Mj8c9BxHYxka6f6gcDMkeGTBjmjrnmxint4dAzdG16otkegW9A5jA9tngqfBRZsFKKpXtdawVYowvVvSaFYn88z",
  "key30": "2QcqjhCCjhh5PYdRwBJksT99zCYFBqkSYEXpMN1ChGSLZ5ApSWaYG55bnzvTHosVKW1NeSzXoiJQDBuDWAMBspVq",
  "key31": "4f7PZKi2k1vHW7ZVijxmPBwSGqiDibg2M6dXqzrJynZ9sPYvhmfG91SZrEr2mFa6qkUJ36RoxGCDkybyr7wyYTTY",
  "key32": "RGjTqRCtS8UtRUGY5x52hF84irbbXVDMWYvRdMwmHBV3SU5MSviLoEw3QBaZoSnBLKsMHB4yeUPuVBYMYhwv73q",
  "key33": "2Xhxuu4aq6vif4CZPzoevKDNvLBRGcRHKmsyF6kWmYcTPsbMhzB8xtBFtnFRk8HAn79b1Cabff8DsD7hLJdku3rr",
  "key34": "5oZ3KsHyujtHqbc1mJpyPzzFyxT3As4r3BVhjK2qudqNHgFtRcur4yqS5mEAko3pUkDwaG8D8RQExk2nnPaaPhz3",
  "key35": "4W5vjGinyfB1QCdbyhJfGxyFP8jW12QGyUDAnSLniaXCk1ZJEruSSBS3Xq8BckZsxd6FEKHYKkn1uAdUmnjLbE2n",
  "key36": "5aRrPAGdUpBZgpHvWBmS9Qe1yskcnrLkLkZmFq7zJZFbRbpaznSgn5srTB4wrpjxk4sxjApjH3Bjiu8pC8dYwzy9",
  "key37": "3PnNKUkrXr9tLxJAG4a2Z3wusqAZUZnMebcPNAsXrv9bBersJpECgdCTdQqog7PTpwCj6v41iJfcsZNsxc62hJ2S"
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
