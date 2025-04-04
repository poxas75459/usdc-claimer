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
    "3om3TcCXZuf5QthGL37V15Q3ZwWE3NNBYr5KkSWQJUZDxdkjwLmvGMKKWHjznXmHoEzemEScMktZvyY8ZE1Rr8gU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25rofvkjFqgiu2xQgmKmFZmJqoaaQznaEQV44yGqfgHSHHpAU1YAxoumVLBcUahbZTV4uexWoQtDKnz9w3Uma23a",
  "key1": "33TAXNojc2f97PaA1zcYxUvq9J1xSayrd6B65aEbM5oceBzzgaHU6TN5tGjTomfnM4iE6xnP4LaLgY1SfFtWnJx1",
  "key2": "2Ws6VAULYQ6dHcssqiR5f9SnsJ8qsSheFiNZ6quJgMEJprNZsPadMTUyPnY3Y2m6uQVD1kH962braaHGyoLnvFeZ",
  "key3": "48DKZCcF9oJiHdeUEnnzpUKp84zUFnStpWHKbqVt28SYkWizYEc7YzK2JeREXkjudVE4yKpib7e1nZAoD58koKQf",
  "key4": "mX4aYpFw1DDCipLFM8tCg4Zoa4SuRQJND6WV3ycDsnabidp6CZd99sJxQfAYnhEMbfTAG2UvUboADjaku1vrHBL",
  "key5": "2S6UZf1Swq8c47mgFAt1BFVUKHTPHpDYand9F9eezDTkQjiRyzBHdTSbmPmAjo5apyCNhfpVtmh7CXb5ckP4oeQL",
  "key6": "4sT1cryx9vjmWsqZTxZntv4cBqsSWAMCWbYrKyLwnHJfaw8Sm7zcVuXd3WrgXhojFXC865mpPtLVb2AtAeSSAMRu",
  "key7": "3XdipY2JZxqAn4pB8oCmEUhAZ8LYoWBDNfNn4RrwZ9Lz447gbCDBmisZfrcEY1qoJGHW5sWPd8L2s7oEoUT2uF5r",
  "key8": "EwY9m3NZMw7mdhGKUPhEN9sb5BGULprzyV9irqnNHKdGJ8aSSEdc6maLH9925FoBq4VSujnj16EKkcB2in7c8cs",
  "key9": "47jk1pGVjXapUuYmiXFdGbpnbm2BBFmMKXWSGLcQ1Qb5iJopY9NBuroNRtVsTBHHcUneSosbkRuiFKW8q3Gg2kFH",
  "key10": "UTi9xQyEaKXpwbqqZr38eAw94RUcTs9J2379SFjzQ3ssdqv5mAa26yZNBjydty4MKYvetmHi7has7Jmf8f7aw49",
  "key11": "ncfMyeX62HPxVzWpXj2qHVsE9VGCuSY25BdZYr8QQ5QgTj7cwjkbA8bTXyL2wM472zxdKK6ChRvqBNrhhGms3bM",
  "key12": "2ues9UXwPNQismqw3f3Lj8PT6dcvNoMLVRFXjnV3V7pWmz4ZzDSHoityGB9DAmMwwsrJ55zq4ZJXWkDJqv3DAgvh",
  "key13": "5FiitTCkYCsELEKwULUbCBvVAJ5ePN53YKd6bXF9297g612mT6opbjYwHSFymqkD3QpEqSAkSSmRrJb95Q1rAYin",
  "key14": "LnAojJNqXeGjKqwDg1ychu1hkJ2zMjSvf3zWSFvKLSD2pbCpVT7dvQxUd9KQCNWf38oSEKL1DwJ26HeKsZ5ubiC",
  "key15": "2sYaKe8rm8xmrhg3YRz4SMuoCGCR8TpJUWeN94uWmwMFbAmuNAuefRy8va4arwVRa1m3Ad3ftqat7U9wS6izyBq1",
  "key16": "2dwvJHEkNUVz7tKB5fcuQE8fcEkyeZ6862xm2K95CEgikncBpwwBCEXwjP1hmVnpz1wMKTXCyNDhurfEmPixLbB6",
  "key17": "3tSdHvnT9ig1XDFZVTRhoKuhJpiokugcoT49jVshNSkhdi8ghm2Grs6evAFNqh9dr9JcwqP2XSntRQKnbwQ7SbRw",
  "key18": "5P5AQ3QaQyzrVydRiPRerDYih9oW5vbfpg7yCtVKbbG2fNgB7fpuw1iQNyca7Q7vR2RLrBWHMT7UErsrRc5puic8",
  "key19": "59W4AVFfMByh65SJrgzJkp6USrztx3KWvv4KHdHUNpmwQ6qqHKJUhxSo5V2JJBn69ewACNXMv8Pq9DXp8dBEhe8K",
  "key20": "5LC1F8xFxpBt7HxamvPJvwQJxSiCApz2HJrNFhDoPijXTvD53tcXpjmSK8kAyJZoSLYzAJxnuPr1pHnt8guvzC8J",
  "key21": "56crGUUkx5cPVtHAu7CmDTcqE2voxx5DDS92MuZWFYp83iJnptPBw43dLwDT7v6qiZzW4CPdSjNBbaCmUNj8VDj7",
  "key22": "2t8pjoWzB4JnxAFjrsNETCQzNyP8qeWBHisD19mQB1XKSR3Jxtk8ezyFe72XPA3432kzDMD9iZf2pkMrKS2pabKe",
  "key23": "mmtdTdtgdNBKJ2VpmS8poDY2B4DACoJQ1GA572cFrjvVMmW1QhMLJiEwBaChVxGmwBLecCt1SgD1QrpavwDd87e",
  "key24": "3NMPq4KovCuyHSZkAw62R6cWzqwaunhtKdbpGeg7QHR8y5Z9ZnsBfLmr3oBcGmDLhYHguwDM4BRBf9PsUCQAnCGL",
  "key25": "xg4j7gyzFpiuw9LkRCgFNuuv2X8jbSLDxZmXQKxFrggRH1Luyc4CHtpCBP1d74TbiMNKqRHH5iUHwJA8eXSJNNZ",
  "key26": "5GLLWXgogs5txpcZFYdCNfmjEmT9W3SYyyFrzWkCxbpxDjYmsPpt7RexwJEBtpFJMqV273PXu4WLsAqz3bQo1FnB"
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
