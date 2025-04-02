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
    "5rzuujjXUQscH7xiRQULXZZEPdXg9BVRodFfcUNm9KTTGhoRTxmSafuGvJ4rthD4HD6hbojrXFrsgCT3mXvMwKok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kFddfzgrjC235c46MXFfqWbsAct796FHaQYWCbBvsTjTN1v9x3yRtu7zuxhaZBm45r8JRUefxNBQasvsfkSWAnB",
  "key1": "2FtFpwKSm2Z4XunnhPrR7bKodbcYqrWrn2vPoCFpoM3ss5q72UCFoecWzrSVUP2qDuUVawpWBtsrRyp58Prf314c",
  "key2": "5cGqJBMyjXfbfF3ReinyBdWpXZpTDgnQp3P7tC5Mcy6JCRwrW9Pfbcy1a1yJFbpAy3vmWULg2nYkWa4PMCgbgNWK",
  "key3": "2wHySYg6Yv3PNwJ4g4kdbW8JYYHUsEsSDgfHGWBgbkV6nRvEs3sgkNtzbFwBgKt9MwVjEJjvLcYnzXnHW8KfkYQJ",
  "key4": "3NzjXwMzsMBRwZH6o35yT9MtJAKjTv3NNvGHeK3k9bVXdinPpdJEbKJcZnoGjk3zKKUWUje5MvCkzfEwPNQGAqRd",
  "key5": "2GW2ekKodxbERpHN8kAHfvg8R3hxL88pY7z7tr9c7sPqnaZjbaJhaALZZ7KrF6EkoUCsaAd8udL4tCQRgFTXFq1n",
  "key6": "Z1YzY81eztobP8gq4Js5e8ZVeCTe2rdf1qwEdLuAYucDEdrKSxxBWjYKsEnCNuLSVwe7pic1oeQexrDCMFVY6gG",
  "key7": "YSrjUbs81JEpeaHLgkPGZ2i16LxECeTd2vFQDYuFhoxAPD5u7JgDXqDZiEJbegyUEswo3unUXYsE8rxTSLBCouY",
  "key8": "2K8nuCxHBT9gGgdPC66XbbyW9kA2ipunNq5vSTCsgoFtcqwYNgWzopd6ivjHwMALrWASQPyC9kB5MdYWLx4BhrRQ",
  "key9": "4Mw5QMogHb56q6XWXewM748dcycNmxUwfV9GU8cmNxv3q3aVsbyczDfHw5ai74TUcT4NHNN1WH4ecnwEBkuvPH2K",
  "key10": "wzHUzzZAkwgSPJkzmmkQgJi334W4aV5q1zAeXExKCgsn7bkstFMU32wrA1JEBr187FDCjZP3SVNcy9KwUCzhrhj",
  "key11": "58bL3EyA1vCxQDTNp1vKC3uQeL2mwPNSFn6bnAzcyRs2erhx9Bx6Y9vJGYtCi6MXzJVSiEFV29rJPdDA39TnZY5m",
  "key12": "5ShybUQ6EL1iK4C2MaRzokBUcy3wZrnLTssAZn1nHnqE2UeKT7uisKnKCRby7ffJgM8xQvyUEV8jLxkn1x74JfRp",
  "key13": "2QaP7mkuK1Jm4DwVR4WNLT77oWRihuPS6kCq6xYctf3N6moP6VvxckfWwMcrzgi2wTQ5BH793ojirx4fW4e3rh2x",
  "key14": "2qXYvpwnYZ84cmJPXQptXYFF6V2XpNiaPDw8x7pAvehL9H3QCjR4viAZ9wUEE8YJ5QzkpXny4VU8Wfz3e7PqhseW",
  "key15": "2Vn1aWFBDpo9Mw8o8fKXSWeTBSdWTuBsDFLL6W6vfnEM8JfFpgxTSU1AVJTZY9vcdPkPxmZW6YV3QdMgkMXApkNa",
  "key16": "5hH6FeZNHGR3RVmdCU5Y7iaKw6QXgj5FARyVQd4ywu412k7DtEAcrP9VhyUpNnEKuwBgtFJQ1yaa8z1ovK42T7ov",
  "key17": "4EdqmVWbB4GLfiTpxvGjJvyTyF8s2BmgKTeZHzJPD4njrnBdxaH5Rm9AS7joNSaWGRRFzcRBH7piLrciiKdENTef",
  "key18": "5Hq75i8H1fufCg73w8RdE5UPNYSjv9YyTU4fYwcp2UHxygQBq4T5qQexLxeSWZopBWSi3s1v1x3bJa3TUbkd2TYn",
  "key19": "4AyHNgAhVGXEKKH25zLMNkCjhPXDWimJBeYERA9Q6rbVLuQTkpKJQYdKMyLRnLPFd8BFhjJ4MhK8FxCA81682rNk",
  "key20": "2HA7y9o9pSZrcY16HSfcviENj5s9N17FtZN4EpYKMvCvbKwmfNrXFtv9zBozh9qWAUdxeqRcM1ukCxAxSyHmCw1y",
  "key21": "56gg2inRTNZwNtUqMDxsJpAKi44BWuaPSTYAcBUh21vySC6SxGEC4ABWRKVpAz6BE8tzGG39JK8BxXAf8nPVXyh4",
  "key22": "4vbYooxFxx96V6Us1ehaUWQkjWrVDbXZ2FsnByo7KyXz4kzCUkuGCAQLsRp5qGRhqcBJa3Bk1JCVoscKRHiEjyVo",
  "key23": "3G94LRUiRPDaXrCPgDkMqFDQoLUxFc2fsapHzmEST2hxeiTWMpcLxUmbAeATBUnNpS2cPXhUcR51Rg9f6ZdhZzA2",
  "key24": "D7F9eijpL9gSSkTe91t6jx9fqmpMzmJ772XA2TrixvFr5xATPJQSmP5bFmqp76gm3CyYWnPdSVHBNb4GyP37msW",
  "key25": "4FnkRArHKCcM18iJd2gh9R37dAYZmGNvhCuzi9KR7ywQsj6CmPJWyQNCwLsqVagwrMuTHzyyr2ocw4xSzmmPLB5J",
  "key26": "gQKAyDFocxc6F4XeC5d5vbotLonAB1JtapHvQD2pTrv637zBQFiP7Ga8jSupzjVL512ohqTRqHaut79RgTSsAVH"
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
