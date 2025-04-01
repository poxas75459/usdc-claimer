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
    "2s2TNPhKUe35bsitakXBV1pUg2v1m237pKGgx7jSNC8yLWGWfszDgg2y3kjDytow87XNGu5cAX3S8dTCpxESUJ1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26T8mw1DxRv7AWShjeCkji43UHEGRLx7LzEU7iJsMk45jZjNMfAbHfA96Y9w8ZjQmRSxJAx7dAGMJ3ErWg5sYtve",
  "key1": "3CUZ5iQx5kaL9tBH92JEM7SWUGUm1pG3E8VsSBPQtsT6QE38VY3XiSjpj9Aw3yFS1ek3pacddypTkaqeqWVySHxv",
  "key2": "37uo8vpuCFqXnZoiBmQG5mSgV42xeJS7vELTfvQW5utD39vnafrDXFat4QEChffeKp9Wnc3wny8GgypWPYdqk25E",
  "key3": "wcoL1MmvJYFpXmwr4ET7cnvm8T9PpgZgeTCt6LUNHbA9UbXdEj6Evi5aj4KPKYPqxhStsE4jV3wXWgGZhMGzoqD",
  "key4": "4xwCxZxio9Cd3xWurDXARVzigrzghKDFeaiNjqwpeLLe8b77VsdDqkLdFD5smZ1rvotR8sZ2SAkfLf33qZW1q7mZ",
  "key5": "57Up2tw65j4CFZDtyNN2QX1BZC9xb1Z59P9BGec6oh6GZU7zcYRAbmGiB7GXska8LTjPtt3DgmxZUSry2MJYhJZf",
  "key6": "4j95iCKMNrF3ZKmhPtFn3DzdEEaSVdFas5HQbovCXU68EubJPakhBoMccfBTB494PdWyPQ3tvM71ca2shA9kBKgK",
  "key7": "24NQzfg9dfFHAswC9Kf3jf9qru9GemxtHxgHEmitC5MxmZ8tB25aGeMEPdwPnWB8xJ5RMRQ8spe1yvRnzPATiSgs",
  "key8": "3FCbySZumSwNQW9r6J9sn92g5kCSWVmXwnp5hihc5ZanfuyUd3kDuthhndgU5okRTrGSNd8bPfABg3czQMAMnUBW",
  "key9": "4SVQiyEYoZyxXhzUhHut4Rj7PJXs77uABsd3o3PMTAcUZb9gtnDgHsPCgxmSuBHvgFUNxyRA87meHABudz8ZYHZr",
  "key10": "3fGeMcTyNESp1Xbh5NwrC6ukXnDHfShSuoqv2ZjYEantXCSy342T2KU7B8zxLxSubtDswgNWuxjQKRZ8ggGJ74bX",
  "key11": "5mLs37gRCTRo4JMTRKHNSh2q9bckJzeYtq49jbhEPNu7HuMS1as2GE3Pi5MYwtzkYwSg8uTgea8k4H2aFS6q2EiH",
  "key12": "HFchETm634Z9xxeGK73xfWZbou5eWeoiTcmBKFxHSFSZJaKm2mDzSbGXmXiViKgKBMwAPZAJNCmWADmoC6YigTr",
  "key13": "4WaYJgydHuW5CWXKBcuiDbteyNixkJwHiboAj2YCWqEP22xvMNGw53cvPYnQzraWTcmKgGRCr9FMAwbAwmPyfAhn",
  "key14": "3WAHnLqdSdgTdgSVUPbqM4Rsotc5af9zX1w6ifxGNGF2mbikAmMhx7LPuwvGqFphH7U8RqPUFVsGwB6HQTTjSR8n",
  "key15": "5Yyg3x2e61QJu5bN7czX4rDgiz8hjJYFkppXnHmMyctvVZBuLdRPpTbB4qbvwXvtkuStrUtLwm9Bm1Hbxmnp6hmQ",
  "key16": "3kGZDctWVyQUb2cvJiionuJNjStEwp1CnSnMU4njiciJpAFJw79Vdk49szvzp6Nx1di5bMpSxNi3RTRgXgMa2fyh",
  "key17": "3LbpLsjggXWwGRbH8RLTh8ZgUGfBaTErBjU1EYbuWqU9LhMubXR196qQGzJVVsC1PgDafDzhmX7fwLiJEwNdHquW",
  "key18": "39v39zDu1VAeAKP5kPSVc1B2aEdnoiSBriXnvsbQ3kvyHhzzVqwu1xPKsx7DNWXjZafmFgnUr6VqESatoqs7nHVq",
  "key19": "5748GJ8KnMsfmNgrph3sqaxUUA87nVFmcUobVMbsAqxa8rEAbpPRDtnWstgogYMC2sebRi6vModM73vrzjcHv7DN",
  "key20": "3bG9GMD7BsqCNBBMeQFzmUfvYkHi5v7EK1TYDXfahKd9T1R3w9SgB6xfSdHvxgoYZzh7X6bgA6ULb1BXXdrEcTmr",
  "key21": "5DQSB8LzbGJHqGgCMR5C3EnmFNXCiggo1ETufmpQEPkVdiTaEvUBXXeAko1CRR4DcUVySPbEG7PoLCgZ9j8X5Wsm",
  "key22": "2AQc55BVQzd9TC2e6JzDh1pvBo5DnNFwoMBmUjM9uZkQrWrP2RiFLzrUN5WuQZwk1fPC97LP9eBhmYsqNKUEycVt",
  "key23": "4w2ZumdhXFExP9A9gET3Qjgik7xeSZ2SXD4ko8334gyCR7vE5z28LNkChAgLURDzEHFZjXnwFTgBmefTYbyaG5Qz",
  "key24": "53ujksjFrYG2kEECnemp59ejjjVakbUfWjjPJqWo7tU3tMHaFryYCrWDvttgvTtUUKxCicz83Prv5dPvjRphVsJy",
  "key25": "vcXdVeGDvB2FMGNxuJrXEg4QTqkV9DBw5Kf2zBanPD8ezVfRotqt3N8Y6mDHvZyQRQq7gkMnEWPbKvHZHxtQTFT",
  "key26": "2izJBu5XbSDsTZBH5E3VEtZHnBXU55VZ3V2QHks9zEX2Sq6CUTzRdGrfeVVwttjckbswD53xYqdxrL1ZnzfgsvyV",
  "key27": "TyYiGtUzfae1ayGz2F8y1J7ydn4BgKfPBGCaFNb2T7CsTf8JYX3wsAJmj1WGW1fwsPk6iRagzf9VRoiD3Wic3pE",
  "key28": "4fKHfTqPyjrbFwfqsvN9Wp9osj61qiHEFE21tfwbn13mHD4USYVXMVcvtHapD2Di1AQzzUXvLZtsjwWHNjpvu8Jw",
  "key29": "3LBDnuzXCdhyc66qbRwT9W2MkeX3x5NjaZyPxr5WGB6bzXHJFJqvGmEspbJ8tWZGhfvtwbU82LyVb9PPTtXpj4uy",
  "key30": "3uCFs5nbHHURpaLwuAYGhkP4mgEUQH5G5izTFL1mRXueMjS2pcNzzmen5w6S3eyB6MHpRToMykB2SVhMJAFSHWRz",
  "key31": "4b25Jrb1KP8YtCQ68MrGX1qadQ9EpMrVTqGfUGwvRVPBd5jxTd1v8w24DPFoibb2hhtqwiyxwAaHXKRK1ffLDpik",
  "key32": "4xFwG7Xo3pmoXozs2qXdoYRAYhXHATm51Mduj1zVhUjHXNe7EBfG9uvXH7A1VHwtEbiX2vdq3wSgzttzNajsocM4"
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
