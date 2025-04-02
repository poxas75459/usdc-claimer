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
    "3VmTvRW5ocWkDSZ6XeWRkjZxJb17WfEHWJxjEv9zJ9kzF1SUyLMnrj1Cq31NWeuwh5f3FxXmT2gskTxbJ8aU9nAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gu2G1CnooQwCHX4r4jhPCGYExRfMXhRzdzmfUiybbjVtbugMx5ZzF21ZpSPKRHYHDjMEfQdG3sMoinE39DomLDu",
  "key1": "4Zw3sKTmHLY9SL4iEGKSkSqMR2JDKQrnqDQP2Q7uwYDYFD6qX9SrQuvNNBYbD5PWkA6Q5YAepPztPNNbRu9Qhrsa",
  "key2": "5fYAmsaQf99m6YJoWPVAVPN8QeMf4UKvjtXtM9ctoK8m4WMDnqQmKevMegc38gBAahBs9SvZVFYepXVfSaJMxJ7d",
  "key3": "51JyYVWEU2QkKzGkxxFLbQCuNqp5N7UaRW4W46HHxL5X6GFVLPMiVyanU4WV1J3hMzEUKhB8ASk7YUw7Ft5ytBTi",
  "key4": "2m7hxLBUQy5HiRKtv55qzusFWSfoM37GU6Ws6yNQQS1KTdPoacZyzjPdPt9b9hh2zBhoyha8eyTZuaRnuMEuqmYJ",
  "key5": "25ns86YCdQHTojvoFF9fAjHnu93pW6nGRRNESUnF9Egnd5nx3rauJxaoyoZFwVSpCqhMs9SKc6t2zgyaA4fmVTAE",
  "key6": "4BuH2xPbiJ3yCdnofe333bkBrzgDHH8hUZKwCPJCEpQBzQzX82TTXpBJGUkWWezgEC75yUtS83ZiGV1YCWYD4ibY",
  "key7": "n2PkEP8uSwfUszF7uCVSjhZULvbGeDq74vxuUFwv6N2Tg64magioGnNRGRXuVcKNmouNuVAs6gmouCN5UX4qAog",
  "key8": "2Jm8r4dRmN4yi8Ba4pe3KXwUFNy13dV9kYsi8CfRzmzxJxGYu7iafvAhAv65PhCUdvAC7sgHin7VFMFpxoTw75Df",
  "key9": "dkkaqTe6eVQUGeBWE9uNqW5qcpcHbunRxBd2b9jVqsfNSaNKaz98rU6Cd9SnfPReJne5rV4GP6kDm8x5y9qMnKo",
  "key10": "DcWdpCNnxUaxLMGxpCGJdwzn6UnXpH11GAg3NpMPagKsqdNXmLrS4ds9u3ZzTh3tNRAxDLzeKWTZvoiXVbaeg56",
  "key11": "2GSHTw2eBVxPwc3yLaLJTM6mbbbyQPbwNmkAPBog6VVgTiBr8BDYBiwZ92amCrz2tTbNANWbJJrPqCMJfyNFrxcp",
  "key12": "2TsoASLvercid6b7coKXzfz32DCdzVSsYKy7mXwEyCsZ1xm5gAMLWv9UzDPhJxSuuifYSmrUTqdcpsY5JyGgBHYM",
  "key13": "2zJteiEsekWTVaAX4jACPmUHxAWp1eiEPzrU9HHJzBcdzPpGMxvcsGJsy5iScjukzsSUuFk4HtamvBnYU45CAZfU",
  "key14": "4XzvEhroVRMqKSquyX3vWqa9VbShxK3dSVW7sxc4Rcx7Y8u586osGU1RsHK8vCHMSGJZbEsEEDs9jFRG6e6XedhJ",
  "key15": "3MHGgX971v3VXu8RBZyqqUzZfQNbABSeVbyevieY2Pc3zHDvgxrMS74YKSCuEzkRc2hQ1uta9S4K36QGKF7TUuB7",
  "key16": "5SvpccnPQh6XKiWFDhDePVeNfa9rt3nrpk1ws52a4CAyPK3GFTxRbhre7Fc4EtVyfAAMKMzrrVztZJswN1dymQcz",
  "key17": "52e5zTi64ujtuwKLXKfyJii9ucMrv9sSvivdUaLaNwoQs5BMYFqfmiXKoNKs3ftM7tWSJUZD4fiq7MSJ4MMKVmvD",
  "key18": "2YLhk9zKoeKXxPGT3Q5RGqikGmFieKMYp4prdRi6ogkuL3wm3aJKYamHbcMRSwFaGtkRKLqJEPPCgAuYKeLqCbyD",
  "key19": "4GcR92Fqd3LNq9DngmUPSCUQ29r1s7YVeAszZspKZvUdNC2PsnqMqYNmPCNPpE8bbQ8nWwWNHHztk1P7MCuUzdGL",
  "key20": "5M4aKTKYZuTGWBHA3YceK3sfcYexzBz43DA3KzDUWnshgsHtCZigMLFBnGEJWNrH62HwYxSBkm8y1RQorimgekwe",
  "key21": "4XjpYk7Sb8qk33LurxSvrP8Tzz5sEGmEEeb93XtZQdSZBc37vXBJseGEVR7csBRmumbqA3NnKySFNqvLNsGY1zWm",
  "key22": "4NWdfvKkoRXCrWvdBMuNnDqoWJGdADMSkz18LDa3NA9qkJ9DXY7vivjmNj5Yp4LqsURWeaQ6GSndVAbFETAEdtuQ",
  "key23": "2xXBD8mXhCETQUGgXBtRFHuRogzmpsa5wZewAAj6xyFR3GSWGGeM5onNgMPkrHFkc64gfdnHyHT2QYAqDeoJUm2D",
  "key24": "5K7oitWfia4u2sTwGcMTupJGyxvdWX4CcDRn4o8h2oGekoetLoi7pqBF7F4U9s587GizvzYxtH2tZBhNXYoTcjkj",
  "key25": "hNzrAun6WE9PKKrnVRoMLys1b7vT2hYdaFXGs3t2qiQXNUj5H8S5jv8SP2YJE5TyZv1tcUM4ZtaPzQneRmcq78v",
  "key26": "v8NMt86TV25e24jtYpGREV6N7vf6Ezh5g24fVUNr6iDjoDmDJHQP6fpQMN6W98od986b1jC1SVW2FqBnfW96NGb",
  "key27": "HyDoAc6fYv5KgtQaeGuF9PoN6eucqEkuKEQYnoa89Vf3hzx22WceUHjVM4pDhuruBdpxd1uxvs5Bb4bBjSDkyvX",
  "key28": "5b4WJ7SdjNEuPZyA2d3Zd4GzCN8BmgaurDK9RF8N3z9PCb6qo4jcQZS8ZMpJbVvgdxd44cxDcUEY73iULiymvemQ",
  "key29": "63zrgGyauLMonYVEArrcGSvrC74Rn3vFVSc27AdppZzZu3ioaxqPxJkY9yPoxEeyNb7mnnrKec4WqQvrmoSrVfJs"
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
