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
    "Hf4nthQ4473QNFpP56yq8EcBBJSz6uXqwgMH5jw21ziCCX7q7jmGjV1HqkavcPgo5HwF5jEm8fupEtLfux6mbMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3AwBsuKHzTX9z6Q9eVZtZ7nrWj4Rm5BuxSvGWsKuYV7uumWT2aK6Ri2wrUgGEqsbzwcZnpST4jA4kHdLJ1kATK",
  "key1": "4iUey7x5kWb4XRyYg22bZoDxkreUmmpYQ9t6NRNi6SM9iszw5yykruuF8MBSPNH9cLFRADKSseXw8mpnrR152GoR",
  "key2": "2RswpMWiWYDrPMRVmRbDPsATuxEL1dhLqM8D8PMqZp944xjuJkUaqXBtcsrfpt84XKcnMGAW8Lz6QBFB9rpWhisc",
  "key3": "3mjHuqYPT8nfk8ySNdMUuZSR42PwYs8PHoTVMrimuMub1CM7iHCHRViWZfYvKk9DV4ng6yzdz8q5C2DFahFTo7sg",
  "key4": "5PpAqcSdNHPxToFse1qW62pfNnK6AAtgTKRvMx36frtaVn1AfSPCmnZ6UdsCmfdPhkWGMz1px5ZwCm1wyv2BpLg3",
  "key5": "3cy4f75A2S13sghrWCYsatsKFAwEH1tHfiSpm5dqwTghh6tesVeSYCWsrXckucRh7rb9DfZR7gZ34DMtCqQScHbh",
  "key6": "3rRMMf2oqKs3idAoxEUFJbQxZLG5PStFEob28SE8cLLn8gjTyWBwuZcY5B191dJrBZdGfu9Dp5xwonKX8Mu56zMC",
  "key7": "2R2xUUtYw7DAjH1Qt7hNj8NvkCiWcwwozJUaJibDb4DjDVCrXVHLJn2wfK6v7DrzysvSs4kHvuFRBtUDrtsaxPMo",
  "key8": "2muBjxA8snfPRxGgAX2upnX5V8n1r2PXo5VAQXjHTirKGjo15aAi9NGzuvvPnKe1e7HHpFu15uDGhUC6eZ5aJCFd",
  "key9": "VhHsNoiY3WXLefyQTqhGTAPwTBAZncp86vydq3eMyXzZbFZfqDfCWapEhgnx25tr2Cy449s23vEt9gj1TVsA4BY",
  "key10": "2Mh4eXoGzgbDo3ZmW3wRV9iyxdTGKFXv3tLwxbcDrv17fwPtEbu5xSjAYRQ7xLDhpc67TYniHXrdhSmapyewZ41L",
  "key11": "4M1diLkvacosgYXz8DPWZSmepmkGMC7na9MXz8TZ9QoVBRQNvZyALmau7VJiDHhfZC7oLYnXur7etpEfWcvCSTDg",
  "key12": "3TjwmL6b2B9u2bpFUyaW3qUco6aNNFYYJ9nX2eqUJvPNDBaUTPubT9mg5rbQZMZgSgSuRGHFeh75Dyvi2dboDEvf",
  "key13": "3EvVHqtioPsh5H5vxqvfPo9987TQU7t3VNCcchs1wZmgHaHvnpMguBARfHT12RCyrPYxNL5Fvart6dhrNZ5adEvD",
  "key14": "52GHL7ntJVCgLAbqR34iMQeyPcvgjYQLL22WUiYpHadyw647nf9oAgFdhxRLkW2qtmiuCs1o5HzAA7zrvv2QhENA",
  "key15": "3uzycmt6C5kMUktPEHjHeMC7Gbx6FJsdjJqr4mcbJSmyuueA1g5E3mtc3sKczPKdxDpCWFWV8HwYbzoVvkHWcSmp",
  "key16": "2kxsiyjjZQV9GoomXJfefnR5nFRoBfR3Dh1m6VgR7fq9U2CNhwdouZCFnoXimvMwqGvSJWqsZBPftmsPfCX6jTXL",
  "key17": "3iF57dyBAkQ1qBGfRMiFSZdJSdpb2btL37TToAUFD35uYaXpXC7BGqS5hyVT2zytD4H5WJfaXSz9Y73vajCBfHz6",
  "key18": "3TRS7V7Hr6WUuDPBb9rfYBEVC7zCZnWUkbH1cdTP1rGYSmLfJra4TCs9mjPPFSgEQcSbsGEZteQkrz6XWiFDqZo1",
  "key19": "5pzkab28h9RZtnPxnAzxs3GTxER7kXBbQmEFycAtEqd2rggFqYkUgo9ErKWPbenC921BqQRxN7vrKXvm7GGftBCF",
  "key20": "2fbBYiqSFHcQ7PQQAKbLHQofWwzb62yd9YTSeUmfnEBBBGDSjtSK7uXtWTBLcSTFWkEuXuub8e88JMh6z8VD26aa",
  "key21": "4TsQesMwzXG4r3V55VerqfxyB8E9LXB4VNQfvT3k7g6T3uMPEefnbWXFaDgxWoCHPbdfGksbaXsuR7khNjs5pQky",
  "key22": "5GBM51N892Zte3srQ6rcWybX7TzRTdqLk2kvp3n8q7pQhTwKmbc3nwCXFZwCNyXfvA4E9LjGTn5r39P31MpjggoF",
  "key23": "5SMtXudvQy5umAU6fcCX2x1DyBCimXA8vmi8kpBRPmzfeFJV6wsRC2aKWSKs1Nzjheapu3QuGS4JYkhM6pwymneG",
  "key24": "ynkEuVz8eFLVa4ABkfKkeP9puucGc8WF3y8ce9oES9kB4tzuLpYKQD5zCZFCVozSRgbYZ2Ct6aUuHZXA3kpeHRi",
  "key25": "61KrBks1whQimGQsG5cq2gbYUPAwQYhj4Yxqd2h6wtNenkef5dcCDmvr51DdJ13hWjB4GDRy4XntHDfRvPSr7qDU",
  "key26": "85xdDrV5E8zHgGGk2LfPMtoPrkeCVZjYgWnLmDz5DR9QPX11b2mw13a4p8i6rDUmVBVrVLHyEKiYFNiV2yniqzS",
  "key27": "4bRWs8MxuQuwsY2Zi8c5GtGnj5neRiFGhe9MHaQcBVkmfZynm83RHGhCKK8h5PuepPUgxibKfLrnyHw9WeNPHbQJ",
  "key28": "5Q3sVhYwoQ2122F1NJCJ289d3AjvDafexM8g52QW9pVAWskqbNMzpT6DR2XWMZia7DdDu4rrGH1urwti1Mpty5BV",
  "key29": "2bLqTvKoPijAwMXfgPA5ua3cVTbERwg5YMpAGVM41EXhDaiDSvWBVNJrSSLoi4YAM9QTq3is7eudznYyAvuwJu8n",
  "key30": "FZB8wbzbRvUwj7tB5bBw2gYTan5NgED4eV7QHQCiDpixXqf6NpXsJR3oxxNW4EaN87hvRcjSo7zcDFtNcgyPTM6",
  "key31": "2izJwia2miaHbqP7VfadT6djGWSSdjmRsfFvTrsAqRg5QLu6XdGhMj7kSvW2SivCDdq9dbKjPTi6AkuMmb7TEsow",
  "key32": "3XsuGxPtCD3n5GQYJGyXr8xqqUsbzEzXrhLNcvRqHa5oK4aH7tbn654LZJt2hjCdY7vsQ19wsgRs4bRucEgQhm7k",
  "key33": "5EdhouMJ8nTJB928jYLv1CLpqsDgtwvT5KQZdtHWGobXCZWoot66YFFiaFzngBMweHn5vKbEvyvc8wSsnhKgYRxe",
  "key34": "coEL5sMWAuPvBEvEMppYfwPFXVnkvAJRisxd8gpRVnLrJMyBt8jjbAGZDrJBNddgQ9WdfRtoGxkk1p2pAjtHBT5",
  "key35": "5vSrem84JadSDetie6XUcrkjDaNPfzqxoJRGZKYp72VEQ4R6dvMKyN6e6YXmUZuxZaH4jrtAasBbTeBifpUtSoLj"
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
