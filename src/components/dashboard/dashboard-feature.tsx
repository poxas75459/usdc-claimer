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
    "4Yub4RP2irnv7yLX4nvZJG93ovXe9UkCBoSF4AD2oZCMiXSLx7hP6PsaZsQwXrC4E6C8zCGgHLRgeyLmcgBFn3mE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cmit1PZ5ffmugbZwGqzxKrf59F4syF2htCxhFAhKRdRYC1ydxTdap1X1AVbZ3hmiqYpScSNNCKbunRsbQ6rBcF",
  "key1": "3L9ov8j7CG9Q1hMMMChe7EU3WXuVP9cyJzaPCB1GQwfFWsLsQA67A859m64LGNJorKivnayJpkemH3QgmJcNZdNm",
  "key2": "4NnBbKfta9Y8hFoYepinmQLBArkshLwZbEhAxHyVRguhhg8z11xJ2ksVN6iwuCuK1ANG9AK2vwrFXx98tfckSfkC",
  "key3": "2544NTQ6pqzu3Yz3XrtvgzxJqRZPZuf1sBifXrRt77hSfqGZbufgJ7jNtTVT6ArRr2Hu5ZFY2gjzcoNAGZx4Ec4p",
  "key4": "3jbypSvHyowKn9ai3rLqDStwbBtQph1ejdMddmhLAf71UU1bbNKQarYKRB9x92w4hZyzAshUwRDEVBaj3ydP4Cqv",
  "key5": "qKfo4a5kLjg3cCDCZCP1LPUjDraFNjzfkP4yXT9eGibEhAHQzfnMm8qfiGKZcRm67X5QJtBzTWavxMgcFRvriDv",
  "key6": "4iL47G6MK9ULBHtq7v4sHM1pQzJwYU6eWrMctF2J6sF56rtXmRHJtPoVm8Q3VyZgzkGjv173wNtzqZwUQPbxMZ6n",
  "key7": "2wmDhdhF6L3pDL9iGb89QE5CecQVTDH2yWJqajVqLc1C73a5XgCDHAyETbTpwMUhmQ9trRrtiwWwkYzpgyKgeXhN",
  "key8": "2xHD1nb56NgvCovBR1iZxVE3ebDm35gSGZtHszSexruPXzYTmqdEtmLi6cgriwFbdGratXqS2v1QSKkAadnXhiLL",
  "key9": "3J9uGJZXACk3Nhj7QGv4fovwdasLLkr9e3Xa3tNd6VGbuDb2npjdMpNEVyxEz8BbYCyPo3Rztw67EfgPFGQjq1Y8",
  "key10": "4wQpA2T9J6BNJGRAxmSHB7zcSKrJxan5dLxuf5sCCiK38hU7AqFhYp7ibFWCacX6TFDT9unpEvcUcsrcLAxvw7zf",
  "key11": "2HpQfvGRKkVAkMvVXqov3t1hJfTmqUkJTKNVPbwszTx2e5nm3Df5PnKgDy93ubo9dbfk9R1Rv6RtPtwwmo6gG7Th",
  "key12": "56mjyz5hLtm4NUF2zgyWyvFR44S9VXzsYYD736tw5SH6NBCzR3KRjt3DWATT9PTn4RV3ycpA5JFZVLnWrACW4cDW",
  "key13": "2X99wPwv2MCS2rHM3BnrUHAK4URwc9zyEG8QGN2jcZWam9bMfgVKEB1BjRDAUcc1M8gd8sknW8Ta1EeF8x2gyYNX",
  "key14": "3zSvHxzvaFqERsMrvMyCaFjZQyVtQP2FJy3QPZnGuFtrca5oLt58Krnx1xV5xeksnJNqnh7qfh4ez97y1D65ereY",
  "key15": "62S9Tjii8yHWu36KcoWqQ2XEy41MZrKVm1kTJk5csL9cNwFf8d2LzG9r2nZgKvRyQu8sJTesEu8eoGEFC8HQmUQk",
  "key16": "3BfLgLcpDjBkzJ8RJm8AocFKY7xwWkRmQQRA4wEc5J2bjeAPWYBY6DUayPNNXuY2hwVxdE9TGrcHfRE1LScbpRgF",
  "key17": "55CAhr894yXtySi7MSXcPo2K3BF5rgfnVk1WQNGxoDuNeGLhn4YdFiXCweZLW35mR7YyZyVVf6o3YphKHcQbCUcF",
  "key18": "4zCxZbDpPpP8XifJ4YCYCJErV3zvLtYezWRzfTopH6LKBkHvYJ1PEd7z6n6gRebuzSWuZuGrdLbWt5BBf55siCmP",
  "key19": "66MA6MRGviw7BrQZYSFfj3LtokpdncAxdmkhXHvfGKpyuU6MLxjaqgrHnNVk9MmfVuXgofiTwxmuaTMfBMtatQVT",
  "key20": "5z1vT3BXXctsDrd4WPRB7aEwvgWKMvQPNq8KPF4MF7bnk97Saqj6At98aEV4YsDRbLipzBTwqK4kghEzk1nfVgT8",
  "key21": "3L2VjC6gh9bZDcJjX9FDnmVuAVHFSe4uFdsJxLQXJDvbY5UJPNXnT1UtwCwfkGd2rG4duFFHMLinNtg8Awsar9z",
  "key22": "2Rn1XggALe9k5mhtccGmF9XeYAs3TbwGi5NWFfNjpaGFnSTyYh9QJYeqbnid86BciYprKxhRXK6BPUKoc6uSbFfz",
  "key23": "4s9VAK91uSk1cB82yMuktbg82z8Y8R7nzryWs3xmqk7o8X31T6ipTPrmFvydUGi2ekmVyPX84wEGYTiBi3ZKcHKh",
  "key24": "5YwMxJvtkU1SXCZxhNDp6hSPQHFpZwBcPeyZQNC4KrSsSUKnW7sbddwZdokHtrsMtN8eJv8jH3nDwdozFTidNqED",
  "key25": "45N5pMtvJsnVupmNKvQgV3K5NtMHp7irLSTrLAjwWfZ9Fvay5vw85RpBmCEu4JSY34YCBS16FaqsRHqy9rdTBK2Q",
  "key26": "5vNb1qjieTdHJsJijjzmxVZhVuWbb2GPWQJdKsJyr1pnHMbGNXQssKoDEyXqJztKu5g7Cf7N1MYEdDpxZwQbm1az",
  "key27": "65BRwvoK1RYDEV21idjvtpVdj7yx23pZ2LBFht9sEpVYVGn8KTCzLpCD3q6Wr7n7MUWKTdy5Q4znq5dNErS8cSre",
  "key28": "4XnCJXnPX7sFDN6k8PcUYSSCEMewMSajows4MD4RzFv7DUpJpG4gD2W5nRTd7fTYjhM41AxSMwgx7qfs7gsuGaWc",
  "key29": "D8JRBQdetxLmEkaxbfQBXSyC7PHTs5cHZo5cTz7moe8zeVScWqurcVgpEjFhACoSUfoqYHJYG2QabqEht7cMTYn",
  "key30": "4EwS8wNpoeQHo1wnRRm4DhC9Wvy6XrnkLt6KxehHZDPXPdpptRq7PbWedkupK8Qtcjd49RTnzptmQas5uAysCCbL",
  "key31": "4fTFYyD5quPmLbwNxSEhPrceZRHtJdeNQNsPQyvt6y3Y3GbQpBKmB1MiJaGYpg3efUDFDwFbKtdcMYXvJMoWh2PW",
  "key32": "oziBY2THLCfHqw7vdW95eg6GiCheRGMHcJCzbbETfBFuQjLQ7zKSNt2vFLDJyQgqGaevqBMTUo88sUjQKrEVGUe",
  "key33": "2xbS3fBiRcQXeUr8mPvRio7i67gvk6WUQGs3pzXJUmUqD5eMVKqVKSq1epGdWQ7ErTC4393FXe3QNQ7WNKQMYpMY",
  "key34": "34fQPccYpySYCW2dcJVqNYJeFMPn7jZQ4k5XAfSTYiGn4yB265pKcQsPBCuJELXtVzPZ8dAD4uj4ZUapxPPoziEb",
  "key35": "MUMxqSN6vSPZrXwba3zqNb95Z3dFC51QHbKqRsCw3akDM5B9H3VNkwSWgT2MFrAECK6Zi5cVuhAEBPqP51Bfqeg",
  "key36": "3RGEzrw3TPMZMGCiPAvgr7bEF42JWfCLDiZYGfHNb4D6zPvZEqDsUsqJswujmnT4F7bva3uofGApjD63S2PBHD4p",
  "key37": "yUnYQeQn4KVKB7jeV85mT3cBf9cX6CvWBQgakpUdeT2dUw4ALNfGSNhMWfxAsu8dzswV7hNqUWKL4Mhx25mBBju",
  "key38": "WH3c84KhfFbBT5XwLUZG1kuWtrTysxzJztmPLdssPBrApGRdHwCKE9VEU96HiFiybKSysnE8mcT3m771U9yv9qu",
  "key39": "Rh9QuQy8cKC23mAuXkZxujACECKNqtqX5dkfpRLE6oh8d44M7pwHVnRBpk4rjqHRzTf4Cc2BGvgyBmfgSAqRdS4",
  "key40": "5ESz1PeAi8wM6PkDR4jFTduJSkYYKd2uqBWrwV76mb1jknXUUFzLJg8CK8naJsRvnKY7cnuqTmsztqCdgneM97VQ",
  "key41": "4iKLmQkNPi6aqUetqN2xgg1eVqv8FSEcSFyHFYeok7Yi82nBm9bK41VMwpTxQaFmDH2zMboHAWDc2rsTAVyEAPxt",
  "key42": "2PFh6KsXw5c3GPNLCDwpJ9pp6Sq6LvqicxUdjs9VKcxY1KNrs1o4rfwNwxz9Ah74gWpujQToHVaTghQfo5PKH5v3"
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
