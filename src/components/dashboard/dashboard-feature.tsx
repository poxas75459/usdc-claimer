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
    "3tBfFNHTvjpkCxBYwMyM7TULTddcxycWABx8YAfGHku3LfmfT5Gw3cnzftkHr8fmB5WP4PonxHfXkZY3CtH7jtmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqfb6u8Q7PniaAd2mf5q7gkKdofiuenHzQqvNXyhDwjEMJ5cV8fajBC4vRTGbuPdM9sGpkqtV7xmJu6icLqapsG",
  "key1": "2BnpCBdUQ6PF8672TRqgmNZmiWRNx2UdM8y33kwx8VzdL3ksvLZiaTfRyQZeLykx8txf9njjwKv15kFe41xL7Hi4",
  "key2": "5YTvg8RbeSwiEFdw2X37eSdjLxv4utrJG7SEDdr2DUgC96c22hc9VLY2NirJCaDEsedj8baJSX3NCugX9X94WoRk",
  "key3": "5qBhoKwH3uvoKAkngvTJqTtLPjp3BX9iiaH8fVackJBNLsETNW7LFjpDvNT7wn96Dzm5f5X8tieowP63Y5nVJk4Q",
  "key4": "2VMAeDJh6qT2jBMNQdL8vdsTafjPHAVPWxxiLMDPkMRDarUYy3RVMMXszRfe644UA1bDqFRFTkragRote1whD7qC",
  "key5": "4kRJH3xjrNpX7dswqjeiHRDfJXumSr1hTTNmb4Q5mU4V63K3nDp3Hwjji5bFE3TeP5uZQZ3Qs9ACgoPdjTQfnFYC",
  "key6": "8gAs89mYpYLteJQPVChk7RDMLf3DjKgCqUZu6BMz7EmpQDtHZx7w7XnwfCfaguRGc2CKXjNJcXsytsZzSUAQX3B",
  "key7": "2fRNUiQtmMMPZDPzmfrcKHSuTK4P6cBSX7Lq69o5NCnFcXpbn5ibQ3jBkYh2vUinRK7HrYtH3BfUCuV3WDL5sfAH",
  "key8": "5sc3HcCWA5DzbpCARyGhxYxA7ckHpQoDz8QKvA9yHq7RXS27rivLZd2WHv6iJKzkVd1gKBePvvortzEAfKyVyYNz",
  "key9": "K8iD4iZxm29Hm9vURCCoTu7vxzbgurFZHcyCx9fJw9knqTruJyyJDxap3uNpvKGHNYjSRm3Q1HpHSFKrPLynWNL",
  "key10": "36mJfXuRdvbUVKHuWW1hiV96stLtqMaEiirZMf9bf9e3u8w7v3dNsmV6KdFGAA3Bx5eGxtwYVw4XHg9QxEqUUu1M",
  "key11": "24kBfKwH9RFeLZG6Jk9ARyL2gAvupmdaoZ79WPB3La5ymMTvDeFbNXve9ohoYWtuvSh1coiFSEwejT1AkSTJvPQD",
  "key12": "3jv9t2FvVJMru2L8pHNdhKATQcXbP8Edi2UYNdkjA7PGVtrW4YkQBHNFsobP9HnCUG19v3toGJVi9BXZUEUQS6nr",
  "key13": "2PccsqfniHx2tEwRBnAHh4XqMtLFSnmFedP5JGrbhqJy19MV8f8NPTC6TRt5uH89F2f5osvaYw3chp9nD9YhzGJ3",
  "key14": "2ds764UMjGhpKbezyck1CAXuTRxoVEfrTUZ6EkRwiMqUU5Y8JfVy2WSxVMtQyHvCE1stCUB8ZtEVcTTvC9PWUbGo",
  "key15": "5X53ruT4qm8uMBmmoyS1saz4isoyuEPHRLM2AwrUDrLkhSBQrbL1LZPzFqCZRnCtnTE7qW2e2j7hMHDeFE94DHfg",
  "key16": "4DjDvPD1wZr3S5dpPvfPCpTSAyUESwbw2KtSBveVs4Zxxo2GD2NXGmaLqSHm7HMdTEAqr23ekUPCenujxV23EmvD",
  "key17": "57hhTrqG2grFmV5D1gvVFcfe81ktP4MkBYCCFHN54t4Yi4LdhqCuSdt8UCGo3ck6pMLWcs9z5H2Ji3JTN5HYuw7K",
  "key18": "26AVwmWTj5thR44HwRLJ2biAhFsrFH1QunJK6p6tWB97S5MpoVdjr8jUJ6p3pNnJcYLAouTnhyYjF1TyKoxg78Jc",
  "key19": "5ckGHbyY3hvCBUTkPR5Y4k5FZBHzg86pEps8w4sNsCH8KrEU6GHuh3NLmUS33BdysbNawTKwBEb18acpf6nN55Sj",
  "key20": "hcgtysvHR9niJyLWpdLfjhhxWjNmjsZ5VuDRYLcmmccL4A8AyfUc67w9tKgF569PZEfG2F5eTDKE2YKe4jF8VHS",
  "key21": "5Xd64j9aK2h6GHE7rMQJpnbd4nahcTD8HUGiN7Zn8sVf95ZrfFByH2pndVZwKDYKe46s1koxjaHysRQUtjeBUJPv",
  "key22": "23B8fBxy1d7CGHbPCG1ShASAfi5YesfX1uEvWFMmJnrdaEk5aor8LF7bWXhdmC5sdqXjE3fsqEuSbpGU4KB9UzRL",
  "key23": "3dcpfmv5z5Dz74u8fSddtLS1sdcnUk2Y5yiQfqir4n3NXQPXS8UbhoFBCPgzNyZW94bBTAh8owyVL1XbahN6DWBc",
  "key24": "5LvaYpCABNGq4ZY7mUfJBPU7XyMHrU9FUGcmfKKB5T1ci876rnqMB1DkytpjtEQuZegP8h1nychZYNwo3ifSM9RC",
  "key25": "3wFmm37M2RpkkBax229LFjon86xSB8rBnxxQfSSMx2eJhPMAntBAokwCjq2kJr46YHRLWh9J3Ac1x3tifzfpwtN6",
  "key26": "FopfUJKaFbYm3f6TBSthuRKAAA99D1PrFsksaSRFKk9dk6BxwmVevhj1KQiw1y5VdMJKNM4YuS3EL9FzcS1uPug",
  "key27": "3sYVkgZRs1witk7jj3VfiJscvcFzDYANbHzJYHm77Fa1tNbP5bSQ2RsoxpRPvdPwyQa6B7cfWJ2JdLFYfzFAfWtA",
  "key28": "3DQwuLMdT1mtgPEnaDcYgf4v6J9Cc5p1iJJf95Wp5teV8ntddjW8oz9PkV1CiBTTpsgUCDu4ygwVJniQiMnVkbdh",
  "key29": "k9zoK2VbwZQ2MJp5tRym7TqrxjZKwxZrGWEnogDWkn4AqsK8ZYH9L8a54PN2GAex3BEhMoCAckDK86bUEPMgbPj",
  "key30": "2dMThiWnVVvfUdoiuiN9LFzpaYU5Y2aQ41vyE4jnho5uGV7chw7mw7m5G5MtACHA1yvQ4724JttUHr7KGctUE6LR",
  "key31": "2nWEr3BD4HULzJF5Ah9AZoCSvupDmwMW8od1duPzwciT7a9ADFRha9JaGLz34BHfxmf2LwaRGo4GxFR9P9n7KhLh"
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
