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
    "RJQHZi22Qu9bKxaHeBwYw8jTZXfr7n6KFgiPR3gZbueYLnsjVBiSK7EYqVEzG2HqZNCKegRgLJjEKKkbteVJA3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HngJc7xLWZ28uAdFXYEoskMGbEa2nYE2rK8k3b9uNffQn9dNqp27j4jm6UcQnqMQoSYtFFtnEzxn7kbtWXdRzg9",
  "key1": "4psduy226Ntdddo9QKzRpt8h9MqFmJXwkNLKRk32Dh1BQib18kYZUybSWtnrVfZtmbuLJZNWuJFQdN65Vjmjmj94",
  "key2": "56hnUXJEApQFju2yxC7u2Bteh5e3kpw6YcqNHYt9no3ZgWFzToJy9mQ71gxU5C4MnUe4qkwGwbkLB64H5U9qVTPc",
  "key3": "QjqFtMw8ieKTS6XLKSrmYJrbSveyUPMx5DC6eszMMfX5bpgrfL846Tmn5jW5KP1vgSKwmnbiPX6nVrowVGzzVUt",
  "key4": "4DE73uM6kBraVPbhmAGiQSHsLNAYKPnJVnVNQ79P1XCod7sncGw4F58ML8r43vXv37VK9Wrr54h8ojHKaeh6JGBG",
  "key5": "5WQRyt8fT2CXGr61Z8YpE715E1NPdM4pEQZLGzek8FhHeRnsA4KiXRVvoArLrT82qAAghJtNDuQSCnLNbTesQRpE",
  "key6": "3AnpdxbqCDN5WJwZY62uGNrevVLitM6kR7v8j1La9KjegSfkjFQJ46L7kA9Luq8aCgpVtybvzTHHvjgVdMmm6dSK",
  "key7": "2GRrJVifVfqAqtxxxMTpkhBCNMv86Dhgu9npBxRbtGkNXp4ssTf7b2UMTQUEcd6qenkKBfRpVp1oL87WpqRbANzq",
  "key8": "2YTZbKj4USDxVeqCngVj9NpyTN4i84vAk6p1UtREC93QuvBhgC9K4MYm4HrZdxcPL6mqgG99Cw3G9jXnp5eV5evF",
  "key9": "2aZwHfaxyxYk7bNs9wS6D87mfoY7aBjdkdmrzuKTn7KDJxTzC1eky7DBtYwE4LBm3KRUGnQpU2QuXf1ZCQBQKPPz",
  "key10": "hitMoHgAzUUv5rRg2JzecfjfE27htfojuwAEYJTB85sSJzA5CNECcUtoCo8y3PWJjxPsqEXNAjpf371TyGFVdg5",
  "key11": "5NBN7KuAHwSPGzZf4FbVG4ERsi4hNsXxFaLF6L1wATdWXr36nuupQpBFbLW2Y6UBmTTdciAeTgqaZcaTTbLrmsLM",
  "key12": "3yiAzNY5DiFWRn6PUUBukWgLv9Kjy4HT8WKK869n7mYZvWocsAB6iTeph1FhddZUD11yMo2eQS8KfEr7ysR8d2vN",
  "key13": "4Yw1vqZEMZBEMdXGdw6ZJNaVJsfiFbVeEiRW2tSs8TfgpjuWGBCzs6bp7jfpj8fXrW2xARiLjQeqgJ39VEAAJ9PQ",
  "key14": "4qfAEghYUUqi7wu7gvppbxPyPEmEsvtrWD8deTJ2p2k41BDMUCMB5dvXx86SascTyANzQGPzxSXUpjTxjQbzyrTK",
  "key15": "U5L7D5DgV8rvPeGRGcYSBGU2uugDuhx7NiuAzDCVNxa9Gbpy6wkQ4rPdaU2jFWa7aBcfud88npPEhJaLYdn8j9e",
  "key16": "2TLp3mvBhrzh5LKJqScgbWBiQn2YHF6DakyugaTcswzLo7QUCS3PiCcPtmdxng7XSeSUR5XvPtwwwfPEMsfGsGg4",
  "key17": "4oPic95AsEddLsVVzywrxDXnvzAQBxWyiMxw9Gk49TyDn1nSc2SU9CRwzQQQiVxvgwxbXhbYLwYLWtPdZEpnSCPi",
  "key18": "3qUDDdBxHvwzRzMuq9Mf6RRWB1cx7BDRxG1L3AjENDxhJLXPj8h3KkwMogUAXpc4caLhEfbaesv1zGTbJSsehVyo",
  "key19": "5WuYvvvhNF9Z7MCkzt47sKH7ccFhpGKw3BMomEVn6kdaJSnzKaYswDQL26ki6hDa1EJo4VT1rxMZP5H68uB4Utpt",
  "key20": "4EAXppXEzYK5d9W53yLyrVTrJRVjjdRkAVYv87AsgTVeBcy41je85Q596TiL2fgWarNeZtigRCc3maeioufRymkn",
  "key21": "3ZWKkQdbu8GAWaqhDcDVV4A8oSmBVYb814E1Wr2MytNhLEJ5YcgWGsQ2xa5tJobkBH6se44DMyQ5trJHW7mSziAa",
  "key22": "2g8ymSHuhoJ4UHtNAvh1bqtg6JRBwDxAgnNPvs7QaDQuJcSTnMB9P34kotVbdCrR9PZFMCG6pBo4PBfPa27quDvG",
  "key23": "3aZVwmF1AwhnaS3YSX2HK5u8yrEzyLJ8uXYHHXfiCMkoo35NKL5k4G3exYk6TzR8MkLaB5uBgsecFj6Rjfv8KXkj",
  "key24": "5xqQuRx37EYBwkruXVYEcDghpf8tetJHeZDLSJ3euGm3AuxXqLANSNFRCMPqU4BSQuwHozucDgthZSeiENHnTPdG",
  "key25": "Fv5t9YxAajh1wjo8o47gQbd7SZeWqwm5iHgypm78ErN195PrLPrV8bfEteF1cwTvEBP1Hm4rsYHr87WysWgG65D",
  "key26": "31Xeu1su7aTagM46yzVUpjmYovcogkV1hJHU6pCBcHUNJq8rokasCyhmCqJYFmgpQ5F9paAJcR1ZTuXdt9p7x82F",
  "key27": "5BBz4RGCJWqh14yvi1zD1qZoeW5pi4No8YT3b9b44scXDQNmxAHfbHreXNnNhku4Zj9jiLBXdhXKbUWTTPQcKLtK",
  "key28": "3Hnp2EjpGSXrjGqhohxT6aMb1H3WKGHi7adyy96bxH8pbzhEYNzZ3N7qwMEhXohZ5xrnxaXwAA4ac3a36hzBFk1G",
  "key29": "4Dva4pAQxH2Uuei2LJfqP1Pkfax8yDFiStdViMFqKxQYDFU1dpuXJnvTEzrHyYGNkQ8GL5Zo5dQ7nCW2Mo64RtuY",
  "key30": "4WaxTDWCmrSmi23HpPdRUFwZBHZecT28yHxVNFTruPMp9b6VgpxLMeLYfNUT3HDAaaLj621asfJ4LrLfpmLeYD6x",
  "key31": "x8uiDM2MT1pxc4nsiptQtHKjygDLPdcfaaLmNEQEMjyFTYg7sdRjSfhctLfhfYQ9avqD7Pm1GYmxXJcVjCvCKSM"
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
