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
    "5L35nbFdQDdazoZ4cAzpghT95qBPnijRLWncDC9wvYeDcJ2p9ikR82ooFEL9rQckHtrT5sW3uBh7z298Y8CbWup8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dayjck9CU1p1UXrZDLN39SvA1SUcTbs5Cyq8CorPW8NkEKjwYYt9PqMp948H8z2sRWmigB5Z1V9pAgWv2YztDhG",
  "key1": "4FTZ4huwuoUrF8KAFgXtCVt682vGn6RbMEnitfW9Q6BdyEkUiizzbFMdahCU1aEzgCx1KYtT6kmTNXix8Kyxigzu",
  "key2": "vYDSNyiPzxRCqURZE9xdHbS9j2BTwaKnik3kifbMkz9y76586aPPWi9njfnMmDgUvgtp389hw9fVPm77wgvdbMT",
  "key3": "EAeEuRK9bxuB6BUvzvJQvjYSeH3VjGLSwmPXb5jpXbkKwePEpfJ4J2nWtfpnfNtCavNnk1gDgFCtumYbAittPLY",
  "key4": "nfCmBqoatA66N5p1YmtBSGNTe8nreBaVTZvAKuMmcYbNKyDSFpMsPPYG2qDmAAZGfPxqUrErYyiEv16TrmmjRhD",
  "key5": "chy51cASYBUQpYujMnNoVHDhmbgpJuz8Mmfgz7YEtF8MkvNdTx9WTu4ux784PiwgmHox4NUVHcZJQtmWBHJ7QG8",
  "key6": "4GFrmELmsr4TgkJZkuiiv8W4WhW7iW2tT5LUThVc7AejNSGDwTQE95qD6rY8RLxj3XXBsqmUGPDJzG4phzEj3i99",
  "key7": "33nqL6dTWkyqt5QXdviTfb1iFzpJRdL9WTzoD1R7z6BKX6irBVQTeKL8SVf2L1KuHSf4cQyZfe9eziNU7189sq3N",
  "key8": "MuLcMvHL5ZAnfHox3iQPXBbmRAUwMg6uu1q5sxGYshwL36TW31zDBnAaahFZxqQ3DREYdTFVjLaNpRfoCKQ3DnL",
  "key9": "4TZMCwQkowfa6q1dJciSHrva6fLCbD3bA5bg6b8qJU7BerzWTbZYwJymwSpchTFo4GwR9Kt3AYxPbHN8Kk81pPhT",
  "key10": "7X2Xdp6E25ivA2hhwqR3imftqs4TrCjzywLw1xuYqGRaHsFzC32hpbzfW8jg6jECHiXmYGcjUE3eNaVD36X1Gub",
  "key11": "4Hcgw9n4ExqfFhC5F8tPEEVVFaPNoobonyf1r7nQf2wJ2rKE8Sw9wNFzcqDu1hqsu4TfLxiQdp3SPYnAkTTtxEEA",
  "key12": "2TR36e8QL3gdmRKS9mRDxM4HHUG6gHTdvHidAHeJY38GR6vH8vbTq9tf13XT2n9pZkxGifo3yAreX6WEEeMBz7d7",
  "key13": "tXJAqXbTVGgznPWe7XzBmbkns7tK1TecboCxaCa4KRmdH5hmitu2SNDhmbHZFRK3fFGKxvyopVtenRC2hXX2UD2",
  "key14": "3kDBZXSTqTdz1NSrTcgTmusj8opCfYiZ7ozgnqy22PksTDFbSvpDNoyTXKC6CK63JXQ1TxWq2HdJAEtxb9zoPnAi",
  "key15": "8rBQh7hGG5A1YXxRGJKvYizsrAUjegT2mPcEBwCUWnUad9v7x3whdSYRvJUwm9A4Divaq378CAyRMEBinXYUm3c",
  "key16": "2HPgtMpwjmCo9j8ax1Hg7gy7rxU2ndTPQyEfs5QLfx9NLL5ikSTwb5FW6VLgj3fXfYvPUkDwXywy44YCGUj8nqAm",
  "key17": "4hXXZLmBnJd36L8A1aM4j2cML1ZRba5xBFU4keVitSsfNYLb8hz6FgEbJG6LZaBQCfaRFp6vAQN1AoH2ydZrxryp",
  "key18": "2tGdgDkmDTHQvZmjRuxJct4hXxRJdMZxvKvv5EazmpY4WrzBsjkA9KrHkkYEtQAhk282zmCJLeRDebwnXfmuVaqe",
  "key19": "5iArDwRthUZhQNLC7AEnnj8xw711G2dteF879dGfSY3sjTFwphzvFaVhALo2hRgpwqT3NRVAp45k2RRyqwYn5Pk6",
  "key20": "3HkLRxxyK29zbUFEN6QK6XoZ4hVYwboQnSzHPXACksfnAbxhtL2hHE4mzjtUcBGkUtvAegKxE6fpxjpiEA8hJBkL",
  "key21": "tV57sXFGbmU6ZfRhiPQdKdJVQE8HgEgsosdzziR8oZgu6zVvZBfV9abMXCwtchBJ4nM8ar1sVBBSjBCn7gxSenb",
  "key22": "sgxbuNDshtskRnPLcZFAeUKyoXxgPp71KKGrGTCtw2aYrQgtipSgPAVyvzKMKQNSLqRsKrCNpRSEjTGtdn3aLZV",
  "key23": "3PWSyqYqzHXyqn9oHBTowPBT6Xb3Cd3kPAAmVYtL8EEbBKjGvP8HLBeQebcdKSc4jMiXpngBevxqPF4vpEs6Ri66",
  "key24": "5SizHnz29XNeizueEbx8jcCWsfZ4uhXhVPHcFx7UjKsDVHzU6tZZNwmcwB4b43S4PLXyx6E2Gke9dKyjVZRDwLAd",
  "key25": "2GPVvBZdgdpECttEqK5yXQs2F37d64LAcDoJFrg56PkBPeRv5qtUtRJNSkcEHkp8qDWmfd92SwJVaPngZbNfhtRw",
  "key26": "38pAULer7virnZXJAUdTnUeQJLUa6Ji2j66gJYuV4ac3ZWkmEH4CbbKbNWTopU3ctuAryb6HTYJcf1yNAvoT2Rca",
  "key27": "4KBJxZNHRdqDnUeX4wpmwzPefxAQ4qu2zzJFhYpvaPyZ1kzcGMnWrwaJ8JfswWadUxCrq45Zu2btk3BBG2wpSY8v",
  "key28": "4tJQvzQKMPWL4Zc6oNtp4f9UryDanBFh8HdR5E1BeZVhz6EUD2cFpa4zrQdZpdxztbE92h6N7XjysoLbWpmPprbc",
  "key29": "4Qe8gYfA5WHCmDpoCnkLGcUtoDCxHQU1BaykpsLCWtBGjgKu1k4c5Pcuf4G5Fa7RfpHa9V16bJeraHmJJKL7Rvjh"
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
