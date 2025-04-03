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
    "65ibQAHoi55VGPTNVfDB7Q7dGZBMBxpWF9uqSVEjcuAMWqRpTdjN9QPhUASj4UrzCcpX7mDj9v7Kfm1oLVrZMupc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nEsuhaHCS5ovKEAusCbcnUzdRQWdFTZNNugDNTKTg8TMxyqykg7KoDjMJebivYvrdTLr3NCuBhhLHujiFguhkWM",
  "key1": "5zRxQiYEPFDGrMzkXWDJzQyRWLaexNu2HMvH48r77UhcyCdtvKQq87EsYBSqVcG846o9GiaEDUL4pcVitcrHhEkn",
  "key2": "2Doj7qngmLAHnhP2RJvMeNX5HQqKQ1MSB1wQfe9cGdRSeQSMnDYsCBsHLUbmQTmpYh7Rq8NNVDvzPRFg32sYPmQk",
  "key3": "2zMmrH2CsXcie27HHnPjg6vxnVAu8p3pmxFtuHE6wG6t9jNwduFHAUNQBt4yW7Y4FLVtdbunJNWfdN2MhGkr6K8j",
  "key4": "4Ym1rprLfgRFNzNTqpy2uXfZL9E7JZHxcj3Jj1cHhXircQD5TWbTt8KNsn28DX77EWm7pqtMoKHtWg8HV6t3ngiE",
  "key5": "QoNsfjMavyq47wVVvK5V5SjRfXa69dkky2yYnmhjVjziGqg91iFkfkZ575u9HDLJmUmFLZsmEeQa8FQq5q644cP",
  "key6": "53cffxn9NQtNx9D798XDEyTrdtYy9ikz13bf2fnczRKLrAd7BamgXZcPVKZBgjzYFZg5rDAMZUyc7SzgKKUJA8nx",
  "key7": "wrPXZBfTPTcySRPhTMuLXBVNY9Puo4X7ouq4nFdJpKhW2ku5hUMFuwedtQ67WJCdpfiDZXrMv4rbdZCDVA7Bdjs",
  "key8": "2xRUR5krdUrGAU5xXDQBo1hiNTTWumAsVm864GAUq75pkSe4Qs8iBwgzUiPD44KeLtpMTAB4yWhgLi7hYWXsdrXi",
  "key9": "SQDKs3YfcQMBM8HnpJ29JSBaPtaojw4YnMbRs2EvgAA6R9XQ52ntfTcFPzq452se2tRDftDtA4pzp4vy7sBKzaA",
  "key10": "2cKSZaVp4inHpbMjg6TUsGTJovRsvHDZejwitvvPsJcRGJEZHKVFSTWKQA4Urgh54JMCQyeBtwojH89hyeGe8NJk",
  "key11": "2A3sBTKNcRaV9ANz5jEVdsjuVzKsu74wxQTFyamG6mC55NVwJ7xSZUUVgU4MZqVuTaboy72fpwXcadoAjKYnGt7h",
  "key12": "2sXjU4KufM4NhiGSm2bQ5ngaoQzALQBBsBDswQXtxWn7bz6T4UpyQMtqtXpGsBTVQPFSJkzVCXpDFCbfBGYdwcCq",
  "key13": "PUYNyEs6TtLcwQ8Cp3mjadfGacmGF2iiboDFk2jUEAVFaE3WvndDq6txNhQasWtNFEiEebvSKj5KCdFwtY9RoLw",
  "key14": "5b2uZrRt3kztXWZ5fmuttZpuyygiaUjZFZS3DzsfVUk7HznLYnPwLNN5bwNMjm9uiN2icBbpNkpAJUzmFiCbHNpD",
  "key15": "4JBq3G5HHuZtyxdSjvrfgHaHGneZi9z1Y6tKkEJfR2q44GeuagxBpDBXXMrYDLngUxJzPk5UjkWhSo4CFcFc4oJi",
  "key16": "5m2xkQ9pfgwSXFz19eeK4smveQ2CknAA2aZRZcsFezWjmVT14MjeokKY4ybeDmSWDKLfV7SLqnBn7MSBjdMTzHxP",
  "key17": "3g5MVwz77Y8vjSrRhvukriFDvXLf8yySN1Ee8aQY6RLPDZ2XpUb5bJkoA1JP41NxKpwqxUB5PEK43s8T54yQmCNi",
  "key18": "3Ua9rGvvJemVHH9WrnnPVtPDsr8WQKbaXfNKgAJYAkK4NMhWWuN9LcCSfahU3gkcb2VtKF4d9o1Gq7UKUJ7ZX3ZT",
  "key19": "3GiDPGmd2N65tYPM1EgQqPQAzXf4BzwBGdaptcWvuG5v1impQKsv7h6jDZfKPVybySXrDPTeNUVPeV4sn1Su22K2",
  "key20": "4FdyzRL897DoQWiajkeKoqatbrUx88xuoubAGBFzZ3zaRuBc8gJZVD67yu3TaaBZNybQNfj7HysCyWAPj18vW7W9",
  "key21": "5ijakJVNVb58dDxYLG3geNezpdz6NpxjybmzTzqprVFUzF3h77beii9p2zcRbiXj4eaRQx6Knmiw5xGu2RvJSVHE",
  "key22": "2KTJw975c1deTQ3dT7RopvYgrvoUVfp7dPicN7xNPSh7AVbQN9YScANEL4SRcp3FJLaB51AePLQeShCfTXFX84jb",
  "key23": "3WCrK6xjLyDB3AQtu8J7hCCWgFvMLuQLMKKm29QtfWiCiHTQRVbdxQYdiQruqUSiGC8koBUe4mbG6q9267au3fmS",
  "key24": "3118wQ8SVhUCe6CkuB6pZWp224SJVedLXTVQsGP8Ysf1G2W9gg9xQ4zxXtjFQATVRRw1zMG9m9fnpCej2FemAxvU",
  "key25": "5aJxuJp6Sr4Tppf7gyAEhUe33ENA2kiHrN7BVRmbrQamqUV1DrbLRQtSHicJoR9QEvHWCWEaYkUV3FB2hQTidk6D",
  "key26": "3HgErbcs8hGY8zwvwer6bT4HhbEqACgrhCrbeZdprDRWeCRq9gm2x9AUJxoVLUSoZuuRYag7kCUQbNnNkrxeTWAp",
  "key27": "4a6KqC8DTE16bknvCyZ5f4qBcDTa7KTHQnqDUccaSDahdcQHM8fiYBjxetad76dytHsJwSTbd5ELSH1c9E6f3ZGd",
  "key28": "58EjAho2RfSCrv23hLv676LeonUvZ62b282RVbveuQrFSmVfXAPMthEYxLm7RR98weJGur1TmkXFyPMjyRZVa44v"
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
