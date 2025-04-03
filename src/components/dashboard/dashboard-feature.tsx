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
    "Q2LnqahYcCBCEepN7jiDRWeg6htwxSkzDCBH9SRcE1SkvbvKNc7Gex8jtq29dNgZKh9NG6KTcjdYojUn7QSoUGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eyrfcUzCG7n8AYR9sKnBUL2TPaTX12xHnnABYE6gPbcy51JgcaF2ZxZyk8evM7tMo5LmL3qufPA1zrEgchi7mDf",
  "key1": "2ZLCWJ6nCB7eahUPwvCiHqPvsQUtfybjpsNrqgjJ44Esic4xTHGRvPhxeHZKHHy6Yevsx1t5VueA79PFkp3V4XiL",
  "key2": "2R97AJ69V27q8oGAGpphgUZMGnxQBBXpp27NSSLuo6ni2imQHJx7jzzfWdRbCVuPpmfemaN22MfJiCqGhrb88aA4",
  "key3": "5p5riqs6Zz1wjkopbtZdXr7BqeYcgBNGe58FDtFLj47AwmRziVNk1XKp6FrdQ76BquJzp59y9rEiGeBJq9oo6zp7",
  "key4": "3KrsWAhpigFgGGFcbNiBheEDPaNkptyV1tCAuGt3y8shqsxUNmGqiB3wNdJBHeFkDChsZuCXVmDJCY4evsbvLAdK",
  "key5": "5MAdtkeQ4MQYxpFkTVsyrcxx4hKZVZZLkdz6hmA4aD96ThC93bEAwkimq3JyRTtkLVihv1bqpEQtg8oGBYjYnZsj",
  "key6": "4M2CArF1RfPcwwtd5B6PibyWkk1XDiC9Vgoc9H8PoSvTugpaQroHSM9vcisS46dERpFCwx9P6zaYt4UDDZo4XqsR",
  "key7": "daQVWDf5ywn4J6vMAhAap2VGRRFx91mwSnms8v1yGQzxh22JVMn3uVbUvHgdgMZQNyEz2ksYAF3iVemKQTcVXEd",
  "key8": "3YvpX9ETZEHctK6seu3kZtmaZ3qbqKGmh56vkzuQSRwCX63CH5iQ8STmUQviCVQu59nHTyBAFCfjB9VBS2V73hxH",
  "key9": "28Np6Yos1gz8UzdNA5ZQceUCWY8BbDwGkrNv9gKujMM8jGwUAYJg5g1TyycM4cjDSzp9kunHZb9SZoBjbR3VF1Jh",
  "key10": "4wRR68Apighj36YYJsDFJRtDpT6f6sn4K7u4Nr4UejbZ4ZRjJ4WicR7hypG7kCUJGeSMjMaEaD9UAchEeg2vEwsP",
  "key11": "2h4ySF31MzPL85Dz7b9uKLGWb7tjSWBXSz5A4nwvyr5eBZEXJKJGd4k3y4vas8m7StxnqCoeP95FTPj1dVUxWL8q",
  "key12": "4Q11RMeeFofwceVB75jQTnP35M7K1c8u4UpRLBik186KUu8d77bDkYhPmAELmTH3rnhqwoTmQixP8DY88uRQSuGp",
  "key13": "3834K7gXez1XsgvTTaQRSaJyKGSp5hRdZSQxQMk82sGWDqQpjcvUndSD5f1EdNymothtjaiHSkiAwV1UBpr7irmm",
  "key14": "h63VBtZEfgCyrwkJbthpgwmv9RSuiSp3Jib4z6qEd3uc25pBKGjGfCUmjF8PtJod381BVUNSi4hJ67jKxvUyXnP",
  "key15": "2UXcvZv81mtdq7ERVJH2xmzTZiXJHTZ49FF9evMG56T91kFtWXt8DQjj1kxpP2NM6ay6euYLuWz3wk8w2EEMCWMG",
  "key16": "5W9yFkDc7h9yxtHBXJn628i4bmKRnkFomfxRACd1PBhdEBS2Mbw7TpstJUFPimzjPbDn857jzu6mRJgh2Ty4QBLA",
  "key17": "insP6cS1uUYpfrrMKNJPdYoXCcVW98pNpG8RnL5skFFPxZHtvDTGiSyJ9F8KTSwnP3vp25tSx9ANEJE8w1qFLf3",
  "key18": "8Y3CG5CvKF6xydGdAQ9wrMSmeavLFHdyz1APaUj5QAcBuk7isqPZ1gc9atd8YRhGviDPLZaVV55y4GzKS5pJGuw",
  "key19": "hPrVcxHkhjXrU3cWp5P72HLoNsim9DXA6Xc5tkPpK2hLudVUnR5r5iCvuT1NrgQzQEftkjiAKXseSLCA4B8RFVp",
  "key20": "2Zm385fAakybo3mwkyumpA8be4ntzdFnYs2wLSZp8j78FJVTM9aqg9CJ9eYCqZ91karqss7R6C2kp8z2xYyp3yJy",
  "key21": "5c7Wzg7SbwvEMeZZjd8gFPz1pDgQLD2GGX1fvuP4K4ciwytKCvRSWva3rtVndK9XnCJQ7E2JFSH2dufqfW4bbD7E",
  "key22": "4vjFdUL3WXFwKUUtQqszM6EMwyzkz3zzYSVEixxWaXvxf9y6NBDJqTJdHb4myR1sRLNZyBiQH3TWWHEF2gGXw7Yu",
  "key23": "22QnrbYunCegrixuXbuKSUCdarAsWLAgXqAqbdXmKnVaWLh67PgePqh5VvPoeBjCZ7GvxBbEm3C9JkbxEiA8KYfq",
  "key24": "zZkGgu4DWjuUdHE8B33k4q2LED7ETbkq9LvseCAwqYyTctc2kcgYnvxVSywPNYw4bwe8kGtr4KzZzXsv8YSfHXQ",
  "key25": "5unhMKtFDFhSWjFE5uu7AtgMETefafsUZGjDyLwWcbertGapP5xgD6Zn26R9hPrZYZW5bCgegMStXxW9czzuytWF",
  "key26": "5xNyyoFxnqGPetavnHxbUX3oYra2wgwfbJ4xstCfPP3U1CNBspEgXYAfcCbfFALBbFpvDQiuonoakAbZVKcd7jKM",
  "key27": "3ar2hTydJ7p2XjrZ672LH5qanXogp6QegHwArHQGyaB6Sc4C3RoMAvRZguRMcg8oyhWkT9BKyhmCezxpiB1BJCmb",
  "key28": "i6jXp1M9XvCVZgr1YzHD2FEzGrgfw5koYVNTbC8kit5T1niXPsm13nqWwTyjxP2bvH1UZYH9FhGFxhWg8jJkLMp",
  "key29": "5P4T7nHWEMb558rYxMCg8ChFq2i4c3Qa2jTdJ32wJXgEfVMGgRgpbpsd4HPAoEwvKWQCR4DwxzfGRm7xZMq1aUZW",
  "key30": "3hJSffbsWwrsYDLE98PJs4QxEKa9N21GBnHbJd1XnLZR7AuZ2LQn81bAtLw6TWchaSorbEYNAEj2R9h9nTdCGtDR",
  "key31": "4uN1XC357H2bM4Uyv5q4BxFAAU97aXEAGjx2XX3mB1PeW8jXiV43WjsPKd8hGMngdDEJUQqPgWmN22RuaRKSdgzH",
  "key32": "5o8SddV3cBepWYmTYTBVfXab8t1sPRi6hYdGVY8cmYN8r27sCgH4Kh9ZEfCwUYiMdxWQb9WivMCtdrPCV7f7rhGo",
  "key33": "3nTFekFg6iNDUiiRQ5g2pfKmGTgad8LW5g85uUB1Gbos1ozUbQgEoNYj3ByJVZW7XQZhLMd1DxdQ6oEy6dPScUzh"
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
