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
    "3EV4PDtBDFwZ6CjQAtUk3PSu1nAPDBa9CcubEAkDJ1cBLn36xyZAq9A9Zn9gAJkzRtaXi6kdzDMhcseRKUPyu7jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5wJtNR3oWeuj5LFzGEN9wiW76VMo4Ezznoe65R8ZURUDR5xC7xzXAqHLepoeNuLzcu5uuQqWsmXpTG6s6iwYqM",
  "key1": "2FA9bpmYcVgBWVTygCG6fhRifh2L1MTcte7rZd1xquTV5onPQmyXGc7eP6Bgymii4bTKGNznztoFMiC32Pm21y8a",
  "key2": "2uwK87os9eeWvpfKG9HzvdRB28Ea4mn6tYx57vM7BVooQn5hyuJiYEdvzja7YGphHDgY4ShbPRrX3bw8AYG9jsui",
  "key3": "4EvxRcZp39hJA2j4DaMCFogC96qjYpJmm7C3oH37bgR5UKNc4aMT8yZTWog8fuepuEDALUfaGBGHbrjDZkgxKNxJ",
  "key4": "jQx9KE179VfdeTyDcpdDniXhoutMuSrqF3CMk3NxcpMFckW7VFyrWqwobbbVrH3PfUcXGXEgVojCbDzyEwsg6QF",
  "key5": "njtoaSbr41i59TLfyvZ7ptZcawT5jLLk896shkizMWdSqK2xDT7yqjpFb1mVFMFGQu6s6HHdiWqmEU8SZpzGKtK",
  "key6": "2PSp7FMQt9yCGASTKRHeRTn7pkqQRFRzWpsRt5CCZPT9JhAM7Zd2KPDWftEua3aBuMZxhEoPtcANhSxJFLX481sQ",
  "key7": "4qV2tqe1WButvYL38ETs6hBQpTQkJH31bfreU7TqfTNkWFb2ykq6AkxTwad7ZP231Yy4XMVG8ksDYFyTJd1uKxUp",
  "key8": "4BQDoefaw2CSEVdFmgzPZvjhkavMzg3MnH1eUbYvNxk6w2mPCSmprDt8X1Dd6QSBswjPgAvHubMZi67uRDGSGSEa",
  "key9": "2XWwcZDrHzrUgMLUx6gkWZh2gZ1us9JhqsPzX6cGtbhsSnMCtbuWpC2SR9pSPKXnb3pV7kffP7oPdbeUraNUnE7G",
  "key10": "ug8cbmKha4TfwaHesbmq86ab42cw9HVEPk3D74JmGMGGfB4i1UFjKRKPZfforZKbXY7u61hy85XkJshRaTFAkdq",
  "key11": "3wTYoBUR8uJPtuEDMRcRrZgDMCXzGEnNqCmwBRFuAJTHjVFxLH4MTtZ6hc1qxicU1537HzXPfu7YowZdwDsRrTR9",
  "key12": "3CvoWL2Q18CenBY9FMCQ2R1tQrQABR4tjkDNFnQfYRtinbPmc9WQBFJP3aBSw8hEEMPUjsjFKzAKoqozSt3ybUX9",
  "key13": "3kFpaPzhmTsxzCpZShAZy9y3WmHpQcjLY8kbaGH1izpNbXPD91TWBxAmJCJmTyMeZJwGxq1zs1kMonZ4DXhvtp1b",
  "key14": "3rpwHkDDAH7VEawMWFpQer3KJJsZ6qseBxZCjgssVmcUkbEukhxwgEWB1Y4cbRHVUTEo4L5RAVu6SSzDrmquYzAE",
  "key15": "oRGj9GNRE7Q2Nykzt1JzQahjGyg8Ufrn8hKzRop4ZG3yCxHdxn6Kt5RYQENZKRNgc4BrNtAqcYvCG1tM6P46kyz",
  "key16": "Kyk7kgj2cPiFds1z3dmENm7x6AiPDbebDVSaJR9yXCCaQ8uGuFsrXC4897zoQ6pM1hjYfRySVWBddNCZbadxNxz",
  "key17": "59PnqiyiEKmMCdXGGZmosQsLFsxbYJFTWqyMBVzSaK5q4GGpiAS6VrpQVVbn7Usdb1HCUyySP6yPpGyAmfcrZJtB",
  "key18": "5ufnjBfcG3Bjn3Defm8VFmJia5ZK6gVCsggnQgXoSPnzspv2CcptmHE7quj458i4uaQg4679j1ADhf7hVSuSk2BY",
  "key19": "2fw5XxDZmLCTvNFCdAF7U4ymzXtuASEv6LvjVfc78hmwaDVbTiTVvatThZQhPng9wwB9x2croMuYsbcWLpCm3a9",
  "key20": "46Vege4E4hpnhCRKGML9f27gtvS1xkEB3sv4smj81ktV2ho6KTCqKp3RMkVZd9LRxCfdq2m9cCG4hz8kWTWtygDX",
  "key21": "5jH1xXDwLnr1EhimdEip8A2ak4rHHA4Q3CvNPNB7xwLEaFPsThF7bXUtqTAWdrGdEfzkNCGmx9SkVVm1t1bDutK4",
  "key22": "4M3n8H7nJUgKghCw7Dm4gDQPpS1ujWPZEScT8rv2FR2bhXpouG3uz3q2zgSXh87WYYRucwhWuMwNt5ypbsRL9oo2",
  "key23": "2pr2vAinCtQg21VPS2NRycDx3uFSxL5AUQm4hARHRJuQNjDuHHK7EGJZrVnPqWWLBzoN8fBykhWTcEZxqhzivXFM",
  "key24": "2sxKu5ZvF5ptfzRj76qGPAQWLaLJxtwMCQbn2Lm5N6z8Mt4BPadXf24MYkmomon4q9ohfXTfsBZLjLofMFFN3DXd",
  "key25": "DVwdK8T4rMeFufiMmumKNanRjWuG14p4h8koxj6BEMvQK9Y7vmhoSmEEWnisFAm2jBgMjaGHJefDy2QUfy5UxMV"
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
