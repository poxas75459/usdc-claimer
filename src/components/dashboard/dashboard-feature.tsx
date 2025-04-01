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
    "2WBPpKDJbCwK2EQX76bRJsCh7yfAXiqBNJE7QWxppGzhiGvq2hg51YkoUuy3PJPxJbU36tvuJiVZzUkyM4hdA6oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6UPqTafLppNiynLQjCYqjpMkMq7XP5XFTBFLbRvEKW99ceKihLuwpPynB3xYa9P2ULeGvJMvUSf6bepa3nrZRhX",
  "key1": "5Vni77Hce5s9oPbXrnaK47ZhmZKVBCCcY5RntDHm67BJagKecPanXgrtkb3P36eijt4J5kfwNUCBwZ8yoiTS22s8",
  "key2": "4VT3WpGc2FtG7es5JEhBpad6SxghVcy8wh1iY3yqP6KtSYsDfeUMteGppvfwYzHF98ESnMMQwsfy92YAt3CQmkEV",
  "key3": "5GYxtwP9RyM6XHqWp3bN39MJCyCGmLipgM98i6QfaBoy34bNe18L4nGk4GvT5cEEcmoQAVV5iM73afL2FZ2DcXhu",
  "key4": "48b6hmhvTGn6c6XmzwQwZWhhwqhTSFjdaqEym3uynCsTuw31vsMGK3jdpAobh36PYgtG9dtaX9PFBVqxNYSjQivv",
  "key5": "67XECSg19VJHLkJE5wRgeGEmxFhormiMRwSfnjbxXXx3qhVLFPUQYqfNGAc2QcvMK1RckmprfEjq2AEbdwAPbtCy",
  "key6": "chhw4HFEipJ8Bv23ybp1rgfr3i68ooZPeYfvvpCugg5CGC77Bj43nZxckFAVJifZoHDgSzqj6AX5UG1yZZGwY7u",
  "key7": "3r1mNQ4uDdCrGGV7gjRkmEcbxjo4nNnC2pUBEudfLbab9pPhq4b2ACcJXD59yzUsZu5g1Zh2RmnYQySvpu5xqSMs",
  "key8": "2jLSC9AkgWgpdQjw981CvDFBt3ETpwYB9XPbKMuy7qd6Tzz9XYpHM2bZj36a5fqsLCN3Xbo2K3w42um3di5y1ATT",
  "key9": "3NBBEjh9YxHLtbcdPe43hQGcuPZ1er9yJYu1H6ks1J9GE7gEDbN13UAdQDncBjcM6o2XSYv5d19RW6WvyzP2t1Sg",
  "key10": "25LBVZo7CfrrzY1d9CNkMdMRt5bc7zdP2tbE3qGpxwFKKGN5vcb3bCsxP4PPkZrJCjdHHdWD8czbU6iyyUKGiYo3",
  "key11": "SMzPkLzHkbP49megF1tuRRM9JcXwnBqWLGf5WAcemqzgnKd12jfFhsZ5CnUUDPRpMbMNnumTbMmmyYcvca2t6V4",
  "key12": "44vqxRh2v541WEYvAur7Y699Cco1KqmU5Wf4QYvdyJFZaRmxXooqECVT4riGmR1fBrsuBhotg8RM4NiYq1NC9UWa",
  "key13": "UXyhadacgvyQa3sQz2iTHxiUUueCN8ippbgbw76isVm9naw15wWWkeB4CfTWzyfEBMb7JMMhonDD2XCYgw7UytJ",
  "key14": "2TWARbZrh4qGTfUsykzE3jgToX9Dzx7P9zJHTEJHwFsVXcxWg2HSNvtKCcJPoNPUKRTqoNfvdwcuM1NsB5dvNBdY",
  "key15": "2jNo8McfKVgEAaD3aHutJf2a9LZkh231Cfus9wH88UqXWZrtpp5zGPXaEWDAW9J3mV4FNokLXeaFmP5XtF211U8D",
  "key16": "3UrRVat8z8kazT25QdzVggJidoZUp2QbXhieUNkcmg1BTiS4iigRs4znwDBY2R2RLC3LmnHiqxFm8VHUTNo1wnJk",
  "key17": "2JvGL68z2PRJcX7CVkJRGXZ8HY74jNZBRuxcAp5NQmaGULeKY6j8y6qMANbSggcbGZzWFhirYFp4ky2nwLyZkuVa",
  "key18": "FbYDwVoRVfMKpwCUW5hxZ7eQgPdSKqAK6vZPBUeWcmYPi8uD16g9BHoFq8xghDgHkF5pTzN5i7MEU11cgt8jefN",
  "key19": "2FcgXY51gXds2nLyrJyczKcnJiNAKkdGba3AYafsm467nqsBVJXuBnTTEP45T5SC7FhRZXQZvqj5YzYgdSBUMnTK",
  "key20": "XTvbEuxZPo8fkhrpLFrCWbsWFFFKtZgpd2WtPAT73Vy6jXzgMhhDxNxnPaj164jM5ZEDNhhbFvS1nXVncLh2qah",
  "key21": "56xYXh6Ak2JurFxm2fQPdPCqVP1YscVnX8Pu7uKwTDRVtcHP9UWDHDQ4UJc3K6PT1Q4TpLk7LTCQEj9hsAu68jz5",
  "key22": "4dNwcZhQb7UnyS8t5aWFKnMou5CcwaD9hgVX9z5NJHGGwRsL6ErygZHoA8HEMTMGh4YfADFx2qetgQT7L9kjEvPv",
  "key23": "55i3a3iJGB9sc6sm6NSfGGjMtcPnC7bQQi84duY93Fz5er5p6GsgCkqcC4ckkfE9NtmnAVxoXZ5LRbus5npGMjBt",
  "key24": "63aYEvHt9E7GDi6drfktME9DHrmFmvvBQJqycoYM5XidgkoykGoXxK3mTqKYrHefEd4LcQdQvhnHhwgJiXHss9Rm",
  "key25": "2UKE8UQkSniVNymxYXFuxmMvzdVbgcAH2E1XJ9N72t3H5zHL7hTwat8QtE3uqUkuQpAKBphcX9uDLmajeoJHRiQh",
  "key26": "KBPNiokxVRURDSzan8stW93DGBFVEnBHoGKZBWFwdr4gAqVvwF6h2Ceqgg9gw4GZYkLE296b3bpDnrsFS5bEWFt"
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
