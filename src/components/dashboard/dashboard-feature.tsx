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
    "3Nfd6rq3UTP8T6CTQ4zh4ZQE5xjGBJAAeiJPmJrnw1ryPK8K7pqV4Ub9eXhu6ptgo4fcuBPu2MfspRP8aud869tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31jSFxm2zdMPBuD2aQ69ewXGfB5W46P3c52sUSBaWTdkaYnye3R2sYxipGSenv2aaZUtXbAiNnpbjvJmKsUf9GmY",
  "key1": "23mkYdWAcjAhsoCoGxqJo8UCeS396NocJ2XJd1Hjmb6pAnsNnrCcGSCo1NJvEktud6yEy3vbhnp93E8wEa4ECY6p",
  "key2": "4KHWeDWLHbQxVBeyVESspWbdgtsRoDEtiwGpz3jMKPXkCETg37kL1YSACeyQDQhjEuCv4zPuUxqnf1pGmABKmvR9",
  "key3": "2H4mV4r7aJBSWaWZgmw3TUxyq4ayckjSrWXG8ncjd4CtCgk8EMCJoF245F1vQc2WmVebQaTCZyz3kYeA5LBLzDhD",
  "key4": "2tPfX55YfTZiZQFF9N5pouuNURhEw1YrsYgn6bbtbTrDdvS3RJPSDtHmvRXS15VTJdfhMhqkiqEdrLS761nzxX9s",
  "key5": "4JTH6UbMBQh9nL3FKDjWB6zf5uoEXxaqW2A9XVYsMenosmCAnayTEoQMhbe7gXaDu5DHPDPMWm4CQRxJZ5tPmPRp",
  "key6": "3E4FC8KJEeAEz341JzZ8HENfKNg1kVA7yba2b5PeYXbh1jCLmAAfx7PfpDowWAgshDu6EVdivQzzngJjkNKvNLLT",
  "key7": "45NWyeRrtBJ71EH1PZC8woWtm9STEeviQjRg82h6h9KHh3k998mvF91J1VNdvzUV3qhYZZtKEpSLzvdDBb51N2xc",
  "key8": "5SmUprUxC4NvEXrBfFR7WN5z2zzio3xsJSgVQFCFBQuF25hBpCAkZaMTNnyiFQ55hPKUbjbuu39XWxxeJ3CYmVnV",
  "key9": "4jEHpsrA1LNyw2SNTfK4WzEhZdtB2N3fU3LBpGoJCiX4Zq5gaSHEVLNQe5MJp76Z7qqWubNY3hnQnCBFWSd6uTDu",
  "key10": "3sarVAHLgy1AwCjvjSHqybQyLUQ4EDHCL3XJbKjKLDNDJdeeT3ksm26qXexcaqCDN2MP3nwBdX8xifCd4Uik9JjC",
  "key11": "52acn94tkC5HjN2W5tEWCs2WutruCFCAJ9LHfZ6KvwWiA8Bkkjg21HHdvxbiXxmz8mZiYCqfuDwxmdsifBcdzCTN",
  "key12": "4wxLvze1rP97PCrF2Zvp6F6KBzxPrAccv6XetbjR5Eq53XjfhU9gwq2sZAqq31JbF6jJdmdLjJeHErYcrynovsNB",
  "key13": "3xmKwS3VatwA4d3aN2Zv6t76jNAteMSXRwuCtQWcJ8VYELyz3Ba8AWTzFf8uaErL2iZmhUWCyJ3gdnBGcdtsarSw",
  "key14": "4HwdEtM4QLLpU6bbD7PnZootk23uDoJBqMeWVXkgExBmF6H8qvBbGAVJGGxPeA3w7jJMTQoFNb6uaa7YDmCu8Bev",
  "key15": "32uBeuH9h2sn6r2BqtRerdv9gmQnZF34gbRnDDS4ooghhEYfUdmwS1gWz9LM6KMCafYTEdSAbc25njMykvdZNWd3",
  "key16": "4fCwsAMhGivxGWwXbop74kMKbuXxJJVbrJhaofny4XPCk1QkFXjcMthRXxnDSHrwUeUEKNLbaFexbeJ8gpqrUuC3",
  "key17": "3hCb1VEB4WaYmJqCWZszo6sKX484KjG2D7xneWUgSrv9dYVfRk8TTZzyXq6eHAFvnA6j4sYm2Ei3QsNz9wUFt8uC",
  "key18": "4i6Prdw71XpkwdqH43wCVXvWT4UP1bXyLavLccYwEq5xutXTKM5Z9nVQ67pz4bM63ViGtmnTbzBZvFhMvZGeHYFc",
  "key19": "35BFdWkpCnpPUTUn62CoBmKuDqeSeqTV42QvbBCDC5fesGo6azxctZRaA3EvozuNCZfY7iq7oLbpCipawAzhDjfq",
  "key20": "2Pp4rQaAwtHSQXwQyq92i8n4EaBMFqt2FUTGEd8CPYMRa5pUwTjQi9uFTmn92ReZUKjbL2ebrFW6XXCua4uMgemg",
  "key21": "p1N8GPpsLreF78gqULqATMtacdb4gU2gfjBXYjqdEJ1gzK3DLLzhn4yAVScRy2645KTyzQNLCampqJtTRpgv4nG",
  "key22": "g2pEyP7cKYXgsgq8A2mbxb3zxz5jAUowGfamYPTSajAXkrZTMUspjRG8wFFnoQBDTDwsJCqhsSgFs2TK4LKjtSv",
  "key23": "5KXpgmoyRac92VXJXzGjtQySRTzVSrjo1tLK2jjB5ds1jNFji9cUdd9W7CPWgLFGyzJDM4WQy6jGcCvqR8mzY7gp",
  "key24": "3PKa1DYub8j51V6tXmYv2FgncoaTNVH3oURgNz5WHjMxEqHdKc4pHqsqa4gSM74QjCwTWQbPCAGR55pzaB58RVGg",
  "key25": "k6YuqeFzp8jPeVqgY5BdA3QTJSVqcdWYfKFNbfC6Kvkh1B2ktRhfeUejZ67ziEBdGVfwg351KwXSk7aRFcMu93G",
  "key26": "57No4pqaWpP9aZo14gmsphS3HPMpWLZY8QuXAnFdiAiKFoUs6G3XcJPnq6XpEgoB1Uee5Ear6UQFD1z2AKtbBoJ6",
  "key27": "2frcSKNexXLdjR3kryqjWF9wHrSCya7EmPj1CDi9nuSS3eK1jkbijRewUGAarTLSdK6cPBdSbHAKrP1UcUYHNren",
  "key28": "4AXFszKJbtoRBqfEDzrWwdsZUpMpagx9n3Dg3m4YP15A4vuXQ5CXJjN9PvxvaVCmFvRGq1ALE26wVN3Eyc7fo69R"
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
