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
    "3b1WpK2tQhsRr8UdLYHPTRbAkpJuXNhc52FEunWCYuw152BAu4oQWT9QXkVTNhV6LayP3JPX5CBAexLDi98gfbwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m7wknCah1C6176YrxSohrdzpMupzXsakwvJomUjLvd2y6LkGxbrxyCLE9NJLAgNqnXK5r9X6SvybjqmaFXnNcZA",
  "key1": "5g6WPdQgXAAF8XUxC6W48oGSBLYpadjT11ZPsNgpLifCHc2AjR1njMbcqCELywd3MpyVVZxhrBsz6oSCCdiFL3jS",
  "key2": "3LdctRSr8fLedsxehjeF4ce1wQUJzYcAsxi3WgVEST5hnamyBmB4rMXE38TpMApZAUK1TaJYEbnbtBvUF3rLFF2f",
  "key3": "2kvTCsM5tQXKtTdv44G1sxerYV4QoULSHKYyeChhHZkSDPVF1K6TxUfuv1xX4RTFtvNYkRXZNZpVukWnTkfnWUDh",
  "key4": "3zpn6djCuzRcHLQsX3sQNe4HGNcDQHUm3gLHEqcfY9tYtpe5Fa5BHCU4LeUgPWcyyKb54MxE2BahvvxoQobSAPUC",
  "key5": "5NTxVZJ4z6iPFvCg9iPh595VAPGP4eejLY8WxHpuMnk4VBZ2bWUF1uCzshWdGNXrYj86zJP6Mb5PP8tps2fmn8xb",
  "key6": "5TqWurN3i23JSXBYTRSULQoR7tPLu3JDPcNJcido3sunnj76sZbih3JxngUvzDskGvyZLYu36bQ2WVr1nBAzoiiA",
  "key7": "65jt4vsdqMssHcigBcrvx8hjKXcvyGBF9RcVE1y9YjnJguvqTx7jcgJXkgxMWHtQsR98f9254UL6rxQsVm3YnpDd",
  "key8": "2gW1bV316yZSHQTVJj7SwMiuNkhANd3h6V9VxwTZvg6uvoLAm2tuEhoBuvPDPEtmU54AH1a98LXzj5BmGmuhsYJU",
  "key9": "4u9xK9cHfonsAdmyFhWnZuNX8LGGhfd8rEjmS5UXVn8EWoaRAVTLHJv9eCpfw4C8b8ebvM4pGaU5ck1JBHUDLVng",
  "key10": "5rH34zxcie2EvxHxFQkg4pjfzqUPPSkFD8wXgXXoZ641xZuGpzSJqECVSSxiAQfU383ij1fNUSCbCooB8zezw4X2",
  "key11": "4zDeSpVwkFC9ATWGLN8ohtY1CuUX2DbgMUDXhxGXeh8VuCnkF7EXyCJWLhFA6xsvS8fsDNcuPgAFMQRvpWp4nb3m",
  "key12": "EQgppwMoc9LVVauzhcBykci6W7g1NKPMkkPPhjKcxCim5hHbZQK9M2xcdWvE9VTV9Mc8gy6BBW1jApMivW8hZrF",
  "key13": "21jZZsZoDqtfSMbr9YLa4sndizrFgjt7in3P3C3aE2GkTq26yjXy3AbRmfjvPQPDNeMhk5ZkTUsPrbVUVRHmuKxS",
  "key14": "VV8SQtpb3jPFBAaK4sq1i6c4vZxbE5sjp1NdCLMVuQs9EdJUwrFzxuHGZY5pdgMEeJYx7ajk86wJuXb639QDoM3",
  "key15": "3LefvjCA7gFcGqmhKVFqjLfCr641JbphqceRDy5bAz4cefycfkX1wLw8qGBJGtzVCokU34d6BHq8bhHaQwofC2X5",
  "key16": "23fAWXr1yikpkefFJpLoy31MUK38PBbo1tvyp4ZvrsqmqouHbP6w3GYUmx3mwzBm5rF3XNh3ktycShtmufNq5Ej7",
  "key17": "3WGaon3iz1ooGZugarAW5AQ9wLnBBXFB6VwhGQHfP9cMdSih9CAoiv5B4zaCy6FAm64iacbdyTwCcxjKrEwcavwW",
  "key18": "2ykG3QQMNaPtNTHewpmea4epAC2zddmpzmp7c5D6cwzHxZc5GTXevGTRCVQursVgzAneA5mJw1Wo58kFDD158tFa",
  "key19": "35GdTrFYU3NcuunvdewBEXLxHoFUTj5Kxqr73Xx97pc8LVsBbjV839sbEeGKUcmux1tXM6EdtpGM95WbS9ayMb4y",
  "key20": "5i9XVp2WtgAxSmJ6AVP1pauwKxMBuq9w37L9xm7QJ5NUyuhDm5Vs1WTxvsdBussyqBhXiQk6opEjMCYAmkqu1BY1",
  "key21": "3bU4QumNRxZgh1AJWthTByncLBDYQXhdMUAX2P44D8T6GrfxNVGFqgZ5PNXKquEtbrjis9ryNsSkzr3hCBWmaQGY",
  "key22": "n1wtSdxK4XV91FEyKnPokFiz3syZnzCHJhbZ3xejZxbj15ae3y2kn7U28narFvSkBk2TDJKgqCetxm4yeMZSd8K",
  "key23": "2LZj6xtwjJPRmL7FzTYmeTCntRZnm2SXmbwU1yj68QYaZbx6EnEJV5RQhKMYq1FxSy6ZixdLsN7nPw5o84cFnPVM",
  "key24": "z4AbXkEarAoDb32MuFJnmYPV65M3C4qt628MZdDmpzAVnBy5p5MostPFvhg8ZGG9pJ3HqQddNsRjAdTT9hUbftf",
  "key25": "gPu82CeryPj82DYTTKxknqxhWDxUTxXd3VPCUUAWQRqKt5G6J9tzvSng7UF1yE7Q7h7we7yqAdaHb39r7ZMVYi4",
  "key26": "4H7Y9bkQKwJKeSYwTZfRmjpz7MhjLkZtQb6uR96xNL24vdxSLMw82wLTacbuGbN2kpSnKM621vYha9987fqor99X",
  "key27": "4nKcJp8r5uCerntpConknjrhBPb3oJu1wYMMxNetry6YRY4Ws6GxN6i3kBMS5NpEQQyhwDw59P4BFm9TA2bYDqkA",
  "key28": "3MPdczVSjRXvoZaWHykuiKCPhE6a1P6tyD1eN6MERaZeAsFEsD8mL9DxgaED2k9Wt45JWVBfRcDFqesww4PS6LEe",
  "key29": "47dhPFV4QQZ2pHyApQpEjHQpNaUiT3AGqdj4pcFsDwAAykNAFzfS8j4cdDuv69EdfWwQarKMVFv5gw5MDJJRrfT9",
  "key30": "3dWNRfDWpU6TtzRE9oLiiuUL4Zhptuy1aKs8bpgexrfVZV4kqpnC4jL1H96Js5CLj4hVTRy9fmHfFcB8sGHsu89D",
  "key31": "4AraqK6A9uXwXC71rgZFBzg7h69vpQxd9wbrntHnJCgu175V8izWdVRruHaqsq4hjQTJR8ncUucV7GsUnBvvDEwa",
  "key32": "2GETZnCfHKBoYSK49KGSwr6nRttuSUmFKL9hEQyFNSbd9s5FaPZQa2AR27ypWcCHWWLcqnHsSubaoDXMnZ8ouYNa",
  "key33": "mBWjFNBcmjw6aAtFjYAbTVYaNMHPvBUenu2mXB8DchgLHPWQqQMcKUaT6nNkKnzszdWC7cyAp96P5y9yWsYGHgs",
  "key34": "3SWsPpv1FTqZfjAvwxnebrtTRqbMDwnnthN2jFXFPPYs66umnoCdnNwREiEGBktG7FdH36g5nFyqjd7hE6N7kbrn",
  "key35": "J93jqu6TUr5gQ8e38bnbsHkpoaJC46bi2p8aJHgord647us9gZMfuDe1ysJDBGwXaUeFGPT5kGz1LEH48UpRA3w",
  "key36": "3fBQ6jarM6FRbtWbLa9aB6agcT1povysfKUBfrhQhTu77wPooWgvdrfb4KGetMfsQrxsxkCAaHkjYYA9dZD2pDPJ",
  "key37": "5vmdTskzNms5XEk2H5xq3osEFtFH8NGPjwBG2BtaJrUpCFMptnVVckrRhcsk96gbRK4UBv5Pz8vo2eKoH47HibvG",
  "key38": "2s8rvyXVRZ5CjBGH5zyomJNzfVeMuRy1LdYYHbpdUPygmXCWqmeLWXNez4v227GWtzxYEMiMyXW3pg1Goo4t6Lfk",
  "key39": "4Gu4yuaQF8vxn8X5exHd1Uw9tTtUmFhnZ6VG1CrxKwHGEKpv7Y1NyKnVhVf48VcXLHiT2X1Xq7kF4hfm4dmHXFiu",
  "key40": "3LpH14sENGJADGA2M9jmaHKaS9q9NxXiZkmEiZndY3TxfhiPHAB85k69ZKY8RSEHFjEVCREsNCnCVXGMQHPiitYV",
  "key41": "L1cxE3xJ6CxUsDrm6dxenq65gt4vgu9HsaAX3b3Q7s27h4xLnmXi9x2QhgnPv4AsCg453HZ3MskcoeeYj6wMXBj",
  "key42": "W8R47BtZfB2N8UTsMCzd4cFa2jU97zR6RWCMDHEbbxsbnuLztrMHyAwAZWfYxytjy4NqSvvHRLGbu3AskodX1CS",
  "key43": "4Rm4HSLkL1VAAwN3g3tcJheik6qhqaBgPo4phG6fWWdxbav3S2vTF2uX5KaGs1HoWUJEvuJ1VFMTmztHXLpTKjfE",
  "key44": "AH7Y4jmxJ9zM2MskZPMRCTJmR1c1AL5XEBR6qnHtbWDke7RbvbzoJr3w7Myb4RQQ34ve66FYsTyR6C7DPH8TKCC",
  "key45": "28rvg6FdLSVqvae5NjrgDge1n93nQZ9FmRY2JhFM1SnNAU88ijPxXKNA7rqdPGPuPmv6isSEtocXDnS63HszQeyL"
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
