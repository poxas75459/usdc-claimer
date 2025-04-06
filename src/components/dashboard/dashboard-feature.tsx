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
    "39FS9VhKGhqsiZxJE188Y4qQkoEEXBbTm4KbqwfYd2rCVFbQt4ik8MpgawCFZHr4RmWZ4dMGjPwByfXWz3W3gENm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vd2W6KFE7HLnNMNPJJEhFgcHC3f29Ft2ueC16rqQxwYBYCkowuwpaDBjMsSkHJsL5DXarVX7ZpAGDSqWp391WVx",
  "key1": "dTY6g5gRbbPfhWRw33Eq4G32CgDPU5HNF3Lc6xHqnV6jCz2WXLL1CjgWmqsZJgPgn7Bz3PA1chP3JobTF18MXti",
  "key2": "64xipGTmXQCi87rkcauQDqc7sHWQFA5tR4zNGeY5ePXfGXays7Dq3LF4BkJJAcxjf8YrJyQEudioBh9gfxJnqA4x",
  "key3": "diPtWApq3xSSuwCCVdZ5zodyGKMm4FY2vw5Da8WgAhWXE7pqBwCEHWW9zRQ1bo6ZfoQvuPWUHWALJ9oqJK4qKYK",
  "key4": "KwmHS78TkY1de7FUkNyRTDTMPVWwXHYmbhHHCp6pMoXReRkB36u5VhvNFr6JWwVuxjcNDS57K6RAPgztX7E7JK5",
  "key5": "3CfND7Cs2xjtBMnWFHcgSZe52wupGW4svYZKETPmsqr7zLMfv3ttSX4DeTAmzC1E4xPbAdtptpgiFEtt1MeeWfGQ",
  "key6": "epVG14SXqv97JXdjDg4hkRBMcSK6p79SRsyVacMohzSkqvEeaBxpuBQTexhKazaUqr5uKpPZKZQ6KqybxGTqBeF",
  "key7": "4PWTYVfwrekwLL8jBC4VbMMpdVyC7E7Q3qTWYUDBUdyHyq9e785TbQkUPs31eMaBTMXmDcrbmznYCsbHmfdYfSSk",
  "key8": "4bJYrC28eFcaj1LALHYtPMYf1YyRnbJHfXVK6JdXEhGdgsEoFGW48smLMr2meB9Tz5w621jEaocRYSjCkfSezN5P",
  "key9": "4QVp6oFo8fp9RsbB4J7YSGgrQ622N4UGJqYyEz1Jj7BXwJoPivP8EMrzBi3kyGPMowkkhFDdCTH9xZgmrvNKLgcB",
  "key10": "3xAsqC3fMr7fTMEaPa5WBWbNd4ozds1hXxdc6nUko9CTWtKavvwrzbcfzKEw8ngLjqBmLJ5BoCs8GBb4Q1MuqXkH",
  "key11": "2M5YaESPfhGebpvHBPELPJeYTwnGhjN8x7uoZLh2Be9agcduJmopd4EuPsSiLMGtE4X6NXyCTfoiMAAxKJrxUCVH",
  "key12": "TdMfEjUkoiSMRgHj6TP9hu73AAJJnT3oVHDWQE7E8cLo7mngD2wXPKMbyJPLHw5D5jKinMSKkEboDiSckwjnuiD",
  "key13": "3NL1Xtu7F7SQ75xj9di9uTQyub6pTUw9quqpPcTu9cn7RDGw1gBLL5aXAeHj8Pi2J5w5r6PDZFfcgMjkRf3icZDE",
  "key14": "56ZmG85d2sE8QYhcrKWXV6dnUMr9idffaVmPXeGbDAE1G7pPtzWwVhLNyHFFkqwHsrSEdJwafSwZ4JxwTup8KQRc",
  "key15": "4HNjWN912dsdjB7BfHVZj4xWekLGe3Nspq3ZFBiBRygKdeZfywbyX9LZP2fCvMgmsnXCtnWJJ6iHgeAcGH3yw6Pz",
  "key16": "2G3bp6DaiBMygcH33SxchTAed4cuGehwhzMXsVHGUVRt4NgMx9sK6SoqR8ugMfoRtipjoc5BTEJYwkcBfKFkJ6FD",
  "key17": "2kW9cWmbj6oyvmgw9XoimScfCAQE8SFt4G6kPV98eN9nbVaTfzpjL6JQ6EQcXztEmqxGvUUA6EqLS95v9357V471",
  "key18": "4tCuMwSGMjWrnvhXkbnPeHREEct3tGqDHdfQSntjxz8ELAMNTYWcCdGELwfE9vmJVSkZLghmXpFx1cts2bEx1qxn",
  "key19": "5iGSLLZNn37fCjDayNWfLsTX8sohWBwu8wySyC81KPCEk5YvZVJa4Kv5g2S711JFtgBhe6cw9PZLMG7qz2BTDo1g",
  "key20": "3bANo4BNMAaXKMccihBbeNUiG7vDp1oAqheLQPReVfGjm4hbaTGEcbXzhHfdXD8EyN1fKLqnqRcW6dKJR3bweLdR",
  "key21": "mTv6xZF7Qdf4Jrh8Z55MhSynCsqhs5DrZMB12rDu2UJQn4QsoxYHRFEj91B3BWng9gTfe3juGsRybRQkWWSeMUo",
  "key22": "2CCUMABB9erG4mE2QwXcwVpHiVxsPCavnE7USA3AwzYeJtszrQCDicWZ6kx1qBYUnCoP2hF2as57DFC7dFHBEtG7",
  "key23": "EddYk9GpfeqXHTpLp5j6Gverirdv5XiFvNwwFc8LP4htryCzB72BS3DYJE2qc9owbPCpQ2FFGnxYZdc3mz5mCoy",
  "key24": "3ag9FM1PrVw8emDhjF98LKA322FXU15eDb4SbaCpDpm54YRPnKSbAXh1Fg5A4StyrMWvL43QewbC3yYKu2j6GqFi",
  "key25": "61AutjxUvbrWr8HnrWJBuYgPR1puj6DiAa8eHwsgXWCo96fug5rQDq666GYCS7w2de1LvkGATjBKAz8XD3mSw55w",
  "key26": "FBkisSdHF8DaNEKyVGE3PU9BEaN8jdxuzNuQceH2ES64vXjA9LLLT4FBPk6ZiT5yJLgZtpytswbWZLSitWxkG8s",
  "key27": "4MiXjkeyB3PXvJ8uFzy2bJQB1nwrNNjiVtyc2oUx4esQdtELA7qfLpsuxTqRBXJbMeVT2WwgKz5T4zdzALWwcLbG",
  "key28": "22mDKC6w9hkaSqqK9Za4bKzpm8b9DMB13dye5xe1HrsZdTK9VtbFjQiMgyi9wWU3KUhSRMUrLPHsx5y55WezCWFf",
  "key29": "3w48DgHrBkQgfiNQye2o8mdLfQokSaJEoZRJvKHBHGd2Vs9Ahyo7THBfgSUcV1zWWpfdsLNAsN5ugT23DtsTC8en",
  "key30": "4TDjYRRiThc8UfNkXMUBu34bCDsgyb94Y3hRx7m9p48RyQzkaWTCwFvhBtXit25tSK7djLtRm4UDvsbkTF9KFVCc"
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
