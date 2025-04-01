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
    "31aWC2wBVvY4EzmzHTZobFPrqfjy2cCGCJEGAwSDEDmAC3x8GMjvfdhK6NR5xVg3ReJGJX17GLSko5Z1rSt7FaXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4C1rz7q9hjQiuXfURw9qWTzXnwa7ZpAw1RrupQUciCUu96Nju9iTWhvhDTtMWyYLQUh2ksutiZVj4UtkDQpCnj",
  "key1": "4ehTSrwGonbndBSgruREXcEP6wHkR1yX3Da6AVVwHNTaQATGbK2VChxrnEsK3qZkfbXuhBw1oVDattTjQDUuA8uZ",
  "key2": "49taxPMqU7U3mVMgCXQq2R8BUBRCmQWNCLFDzJcg8Fe5cY1sVSpYonAXmrDyGbB2v4xhNm1h6TEaXHcxBThxGVhP",
  "key3": "3tPkUXw9xCKBzfFt27QVc5LqGuGo2GRECmYkcQuBDW8EeRZ7erJz34ScqDCdcXaAAF21R1pkmi2atPKeFAoQfuL5",
  "key4": "5iYvQgepCHgtbVcKJSCMxwoGxHN6m65HeCWzh1VTFxUVBEXhR6NodAWcP3CoBUCqUweJ3bzDiSwj6s8Sqt1bojvf",
  "key5": "5aysdaeLUsMDYutg9hBiUVAqDJvgYiwv25RBg1SSg5E9qXHhxTo7iAy5kv4rNBHQF5gkNToH5Kf5wi1KBLfi2Do1",
  "key6": "2gHDxXdLEySEKmvchAfUNQwYgexCPTkqGfyhDPU7ZeAfDmj1WxywHvL5W8ZpNfivzYSf23yT3eNBAtQKqG9Pi4r",
  "key7": "3AKmEyVQtYTSfCvMVsDSYVGHXrcu4xK4sRXtefXT5vBp5RQ8GHga824unbxCuVRceRi7FfK9wUgVjpQMJfaj6EGM",
  "key8": "5Mgg3fcxHN8hz6HoBXWR9fv1sF5ytWk49KuD5iBecnocFmhEpq6rsdUavwzSsMbmXEvcAxcq4Z4GDkA3C2G9vtpA",
  "key9": "2E1iyFrFAvRdjxuNmrjWmYY5JJ7Piq2W7acdCJgLCKkSTDx1TQnioovNDKDYK2PbZmojTdX7qZsiosDNy2gYAqKH",
  "key10": "5qePJVVi2wUFXXNzkGYxyUMHqQCbh4q748uZePpLrff15TAbAxg8LmFhmrzuTrTdEeSCvZYTAqQL5r1KXeT8VtSu",
  "key11": "211nKxMtBFhSbyyNZcGcR2kzoYoA3REsUwR8P14h6f4Wn4s3HS6xEbw1sKDpJ215tS2k8WtwYcRKe6VbWkegqHbi",
  "key12": "3QoycYFHWZzcEe6suGT5ZeRs96cGo97o6SLLRSkz8wLP7Ao4KTCZRS3RBFNzno3B6ZZH8pkiJEft254djoNZ7akf",
  "key13": "2GZ9G9eCN1W7cxa4uCYG2dLepkHotyNFVPrX6yx7kK59dESgP2HUwJnEh5gkj1VWciRSnB34VchGYdc25uQNtB4A",
  "key14": "63mjsJ3huxXiSMu5brvvrvN7xM8UzUP864k4P7Lm1YYzoqEV6DSegPTwfXhK7ZNNoUFbFS2o3Y5kUFXf1d8K6Dsd",
  "key15": "618YQRzxJ3JhGgRYK8hxWDUZB3Fa1CQyu7dXfjh7crz99bdoSRebJnnhJ6GVxZ8G824JMjjLDmwGR28UZUeTkqsD",
  "key16": "3K2axFSgLH9671uGBK1EK3gurS2PXS7jApabE3vMcYGVQNVZBFM4PVJhHYaXWPYiv3T4bgYqLmEm415CDwMwFBZo",
  "key17": "4dXqamxzdEkQ547GrxQeSMCp6zha334khfjEQNDzFMxd7po1vKZoVtbevQhox8DRNDtFzXPQawaJCsZEHUKo5FSc",
  "key18": "39oCwheGa21fAAjNS5Upz26eD6eyR5APFV9nvmKLCosSqfS1LQ2rBkjYQYVq5evkfH2fitPuh2T4XJhzqgdueeHC",
  "key19": "4njcVCKFiLojvc27YCyJasLvFCDBdWGp8Je6fFJK7QXui4Aq76ds68dbhZAUS5zbzK9eyXWSa4bUBA7e37uYbQQy",
  "key20": "3dAg31yDprRYtVt6pm4vKoMabpf4mCueWYcpvABnhDYbvyff3x8R3ozZ8Aryde1ajd374WYB6dhicKQjqC176tnc",
  "key21": "2FvjU1D2eb7RCHqRnSW9Tpy1sZ8f9L2mfe4G33uTuDPNLw4DuDYBcRTrueEUNb9nUFCPfMTLb2KFr1VEb2nDrEQs",
  "key22": "3RpxaL5j7U4qiaeyWiAdD7ebfZs264TzS4AgS1Kb8AQRzAHcPiy3eCgLj84F4GiCdFwj1FDRRJg6FaMxwKrP94oq",
  "key23": "3m8XG8vYrnBn1Rg3zz5bsQevoo5nhGi4ecj52g15Wmf1orgVkRhng1R5c3zBbjFabH7HSk82yDRsv3JTtecJAZ3r",
  "key24": "2ZTcrv6BvaUN3jESvqGwKmnM3KbUrmZTbL968cDWehFKWnCRor2GqyvNLVLz9pgUM7mdtEugaPzficKMhNAwao2f",
  "key25": "vrjt7P5xnnqznQzyLwD7fEVkF18abi5TUKSwbZ6i4eQUSrBbViQRVLLTHqyKmi1A5dPXKUQWWF4gqwCEsnBip6s",
  "key26": "FSnG8cCfVSpjiPd2WJPMJjPPZoBS9HTDDDujkbP26stbK2V6trAaE7v271mKUv7U4c9f7qTzNGzzdrkpbq9bm4D",
  "key27": "47m7SaRLqPwraSVCmZXwTN1vbi2WswPuWn8cHA2ue7zMJ8zzvxb9EZxBZgHw9eV39Bb1gEwYfmhBtoBt5Y6FmguR",
  "key28": "2Mf2ybSCKBnT44ZT5ujvxEvVms7t4gfs1e4M1bLNY4Ac5atjHrnFbtHpzEyrVqrCtsbcUJUrKuBaNrgFrhNmMe48",
  "key29": "2266LyjbU9SfUMXaPbR2WyQE8KHHRJvULPS3DPgaqjBUVkEQfVkYhxCiMqPBJJfSrJmCHSHHmUZRJfvrmwCt89PQ",
  "key30": "FX7yFxnRpyH3wHcmubDwaEtL11zhP9xBRiurAidqRdQTs34q375nvjzF9Jtj8TpJkyEEG7QJZ71NREKKZfaDrsk",
  "key31": "2Af3MPCKHCGvpEyzge8PpgFb9ZzMHTAC9QvupYoZtwAr8AzV4BJqdJ2qNcjwDZtu3tu7fNHrMzc5P3NfB9Ezvhtc",
  "key32": "24sT5ttwXeth8LS4jFkyuAFBVXJeEhGFU9ALUTPXbwXpVHZs7qX9YZZH514hsPWaHthdT4prJxjY9oJAk9MsnW3e",
  "key33": "2poW6fGkcXh7rEEfBV71Q5Ud8H8UuXb4KL2HWhxDDxJV1NFmmeVq5FowdCVfidwdYJGKrqkyLt4YAZwhq2JDqdDK",
  "key34": "xjKuQxBgFjBzuJwJPxDLonDVj7q29UnQNYXFkreibuWBuhWftunCTjkakF9xMCyALDzXeN7Rjat1B6dd8kjqQtB",
  "key35": "eheMNDEkv1yZk3fbm9gVj4iEU4EVE658eCGitK3hppZjsp66k2KLW5DthYrze2BSJVGXz5xty4MsYbeqzygLx1r",
  "key36": "29TpUPGj9DpZuvK8QvKEsfM4EbS5ykpVhnUyJSDyLEwrfeGLrWNqLi1NUh4N6J3z1SFBShUZx6nX1izMyMsEvi1z",
  "key37": "5WEnB3Wmn3wp45WkoeMfZnwHNamUE8kePFzhEkKBhtMNukvUj9vEj7Jbcr25gsEbgHJEijFwKpbLNnMXFs6jB6bc",
  "key38": "2k8dTPKxumx56x21j2nYZRkE3HKfr81vA1TS9fBPDjnPCs1Xrs68HrG1qFj5FnqXLtkEXM5gDZXJiqfgzCTd49Ez",
  "key39": "2KL26hBFyjVBqddfDvx2v3t8S9igCNGTYBpbTqWXwU4aGbVXM2pRQ8YxiWCeYXGJRQMGnyQibbh8VqWr2RH7wAW4"
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
