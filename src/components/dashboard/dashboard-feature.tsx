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
    "5KB2yVoTpkQBpQL1BfChtyUMcLoLWBqEQwDfzWUMpE8qPxTrfeBXjbFpWtfhjamdTotLSQPtFnQRvrgXtofNfw18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "334cTbY1UaUG35KfK3fcvCj7Zmefjoqdx5QYrHhBUiajwqdJHNaKSypzTaLHSYCdTnQycWnjYbWw5s3UUiGHerb9",
  "key1": "2zJmFL9tzyGFcuZegxbU2jeoQB4AjoQikZdEVibYW4hNoVWhc8128tiKL5Ua94P7yQUoS2MF8MpAg7maL4Tc9RTn",
  "key2": "4rQryT1YaM9Z7msthTDVGcmdKANBBX5K4FPo67PPxvFoKGdB4NA3tz5TNYkxFupM5dXd1eUQq6YncRrbtsHzdV75",
  "key3": "5FGDS4s14UB8ctFRVWPLDdoJAk2u9okZs3NVZAMFSNvgppSMrvQHrN1Ms5Pcdqf4PRcrY6aRBorbHPTKuESZhGMx",
  "key4": "5fW359QdQKCyEZ6QwgVhjrX3ag19VHJVqnqiM5gtZAzVarid8E1Q74kGaptYRcZjHkcE7Dg5mQacbGeJ9CuuTHNH",
  "key5": "5Nkid1f7Wasz23hSMo6ZbrE4d9VZ4LSuQiUH3geh1NLVFQpPUd9jtwaFtc4YbQKKPMnyjEuyp2WFcaWEBx3sV56R",
  "key6": "5RwS3WLbnzgujNjH1esuxqsTgsrbiA2dHZ1eWRfbZxadTCnXcDjg2Sz2GF7tCfyv8DGtAXBxcxF8FG4EcxvA1HTR",
  "key7": "FNN4rveCTsghTnQkrPRcxKV5vZ3CGVRtUvuoFWtWzjjAjX8YT34KS663qS89LTq15ktEHUAKcWj9ZRkSKpcWdik",
  "key8": "2YXSCZ3QSaRWEqB6JWPgUzm4fC7YDHACTGHC7gbs7etY2eKtmV98yTJa9FatRHJm7Ehy2BfnTMq3qZghhGzXWofr",
  "key9": "t2AkpJeqSBBCxpUmxcZMzicqrooiv6inex8L7pYufhtz2WvVEJ8Lmc8225FhovfaZzCCqacaNhwusTVSVDeXXMN",
  "key10": "4CiidYFpJXuFaaFGrqaMWKHaEru8PqRHEGGSN8NmUjXraByK1uk4Eno4NNCpQb2c15jN2u3JfEc8rBRTHU4W2vsD",
  "key11": "58XjgTzvhT8nwgFsrTqP5KMdNmkkRMPqXE72mFipt1A8358a4igGfUMnCGpB6fskcKpbM42tyPLfFFzTL69UVAZB",
  "key12": "2VnAzftQWw5CKk3Q1yjs9uGKn7DZHMJoWLwnx7VMvrAKepS4ZCgkbb7dDKrTqhKskWfXSV1osfpUCbf8b9uKydWM",
  "key13": "3TVvhjdoMjWRpQ32LZHNqj62Y7La6SdjG1RJJ4YnKKAPmNJwo6Jdo3ZMRprhcWNocYaM7sBXfjVhyJ9FxaoJjErC",
  "key14": "3HYk1wpvyAYzpjojNTYH9nYhrM1E8QaabBTh4EfoqqMU1BPWwLjgJqzDA3EBF4zsYi6h6U1JCxG8dEj5U2tq1nUV",
  "key15": "3RemRE1CjLr8pMWs6XTr7XC1kdsTix5aRsyXrMa4DDXaJnCHgRvxUBmJqe7caagiq5yuxaGPdCBDVBNeMKkzdo3J",
  "key16": "5NkgDnH7pYf2QWRe2znjwAM57h2xp33caVwkN7N6DHpFxMFXHsfaeYAVavzGCTk9RmoawavYviEGKwJtmcCK4mgi",
  "key17": "2mAZervJQgCpkTbihB3DNSeyj7ttuBRkdvxijR2vvCur4iq3BvFCtZm5WXciYnhtjtwdfcuAfa5VttnJXKXRsQA3",
  "key18": "3WgLyz6sbP5rMWw9gM4Gh7yuSQnnpGscx5PUkymEigrZwi8UDgCNSic9uDFBYcy21vo2v3yWCF5Xg7vzyRuCLZU7",
  "key19": "2MRAwYQcV2hgdyZnbzYMMVJWb3aUohPsFuUp5aWcuNap5Uqa9m1Q1kAm2J4BMRwwdU9hH5SGN8EWuKS3pFymH5vL",
  "key20": "GMSYG5CK9czfDaw3QsiiB7dPXTYip71mfGQKb5VXDc2PfcJ2ztuG3m4bjCeZG5xSXbd7MwwrH2MmPfhihMxyQct",
  "key21": "5WE8rMMrvVLyGNDRsZ448GhCuHoQmDQJEPi6oCFNki4kgdpERtpDbntBX1oSMDpEpGjPgdp11n1vmp1RhcEvvA6p",
  "key22": "TndmXbsFuxw9HaanfFH5qFb17yaSsexyAvr6Ymgdq8kgvfDRfpSxg4PHLWNnaNf6UwtmJ24np2P6wSqVkw75cKC",
  "key23": "hNW8K7hVV9ARzpYhprvZHsqfeCvFX3eiPwsRSnW4RVL3BowyCrDKpsgBxFiGwwS8zfwJmcHSCwK8pupqocNFLcD",
  "key24": "xvwaoVZAp3SA7LM9Cvi98kGvFYHKbE9WvtryRFf8S73mG6QnqiHEEh91Lyo38PkzWQLVLy3QnbVPv145yPabYiS",
  "key25": "32VEcPkP7Y8gwg6h4h6fP5ky1Wec6smSLSZ5MxSapMP2AomCLPZKwrc9BhkhEfYx2auR3iCXD9tEgWsbp4MLThsd",
  "key26": "qtr3deznJ2B7DmHenf21b4NVpkL3JbBoGUgmJ4LA3JmQ2VtFGRR4TRTmeAGXn5nYmPmM4RDzuME36GxMFus34ot",
  "key27": "32ZBSZDSGT4b1xLcC2JZAUn75kHMRBqhcXy7DAMRCAu3CHfvucS2kHxHVvF32nLLRdeu8YeSZSLmij5HQDKy5qfW",
  "key28": "2CzaiFDLmKeJCuasaLw4E2gpBJnrjG6aSdXMihDhQm4RRYj9N5HQU22zjqbvc68pgDphYc6EF1aubXfdF8KwMmfX",
  "key29": "4z23c2nGg7BV8zDA2dX1DYoQCNuabQqvBwh3RnMXzMUzBQJWtfM24Ye1QKRgq7rzS7btnhn7w47AkeQA5KfHnDuK",
  "key30": "5ckm4mAaCVUYqyePk9hqrhu4gdDn495ZZgKJrin13crC3XiQpYkK12ewxUbmpBXFTsh2hv5PEkwoy288BYBci9Fk",
  "key31": "4XCrwJqckb9vNRDvnfKj9vEF3fwm1nsaHtzU92g9kwgdDxLbuXUjdYGAauXQqLAbSeLSMnZuYTNiHCzEWCCANdWi",
  "key32": "2GGtNxXwhAiSduW9MqXzr6HSA6i8RBugRJQisuvBYse7WR2AQ7n9voCRCJBAxLwERw8BjqzF7phvgNCvSDe4zNpq",
  "key33": "2GzuLz3E4raYxbK8o4h3m1LT3FL7MjxEbRznqGJgReAyAKtTDxJmuE19bH8kYrrH7XViZHMmC5pTobHHbv5QC3vr",
  "key34": "56G4bG1VMWgH5nyMAKCKWiowVzVvXTeAYCuin48j6xb93j64JL7odFskGgzhE6ogYPfx8rcy9zwf7dtL5CyQHVh2",
  "key35": "4C5nkaAtc2KeG5RiXxc4QHpmdhwi3geKMEemMi5mjWBZ2K7Sf6Yc4C2o4hwzks6fKBznVBjWBch4eETjT7SF5D9g",
  "key36": "4Ke647bmACAyT1h9W46NAFGcCx32VZyT2R6K2StkifXeRRmaX9bLbGBXnnqJfeBmjAqFpbqDi2soekQrgPtC5251"
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
