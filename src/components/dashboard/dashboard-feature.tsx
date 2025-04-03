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
    "5VcyJjb7kBRLPvLVpaSXVwStfQZdzBt6awrfQJchTscwVXvZxwq71Dy5rTgioGmji6eZPWVpiwb4RjzduffoUW7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bd32S34ZXdorSzFKz2qWSmrSkNw1HMiHzSXCkiLESHY11Yv9WieTsg7Urbzg4U3qT3HnzTbB4yeeNTrW8pY7Chg",
  "key1": "T1xGv8Bsdn94K8cr7HGxmN4zgVfKtZBmreHKSRYyd66kpUHP8omyKFnH3fTbYRkBELWaKpomxR3eM7LBxWCLzy7",
  "key2": "4R9qWMXVcCP5yPF72DcrYzNd8EUbx4FSKaM2anCe9LxKPByeFqVoRda9ACqHqMevRg6yHhL9kJWcvHTHuWy7wbRu",
  "key3": "xJ3SMHUAGDD6HsrHTXExzM4j9aD7dPTR9zjNFhzBrC1GiPQ4taTeE55usSMZdhXYZGxfVW3VqNh9nfUuEjPavUr",
  "key4": "2pJEXTovkZXoSum4AE43EzG5JBvEL2fHnf9AxKshLjNWUnL7KW6HjCstTAxHWdNgsLYzfrs4BAqcc1uUiQTrXg31",
  "key5": "rcnNqQXw91F8ZRHeGGDetcdmeYXPZDHeDoNBkCGFGxWJeerp12HU29mtiakCAJype7GgGJmyVkWHCEFnMb7Vhy6",
  "key6": "2X5ydNVop2AWDPcmnLsgGwLKCMShQB48CEWrN9F7KCC1CbCe29fwHo7zRkQqSgn4VLg8LtoUpZtXtSmhdvXYFTad",
  "key7": "583rMrPJUqJuJrEjr5pLKhhmM2F6DXnnTdAXnxF4hRppt1rGMktWWq3CX8zqWTrvDqFf2k2oTthhiyr6EgPX5VQk",
  "key8": "GSiQ4SujsNwQ1jMiBLBHU7Q9fgaduqw3dMHCcnuFPg5nGJXNgFUct78wFFPAzoTWaZLyqfnbPvArABtbG3ciA2j",
  "key9": "kKDD7821fDASERN9ivt6efbodFH4ShgeL2hFt4GTyvz1ZdbKRXb9f1boCjQBVikgXjcy35hwzWVTcT8KLqS7AVA",
  "key10": "K2JePm43f7nm14gyG7PVhL7qmEymysBN3ED7Qhw8ekEGa1FGGCBoGs6ACJpz4pffcUoHGNfGLcU2acu9J6vTT4m",
  "key11": "3r8wrE6cURH1cCc1yNsgWh4z8SqUintrT1RgojDjgshhBB3D6B1Xiuv1ZDGnRUuAQiocN5b3FYNknk16j2Tkch2Z",
  "key12": "5RtXF6eaJo9oFS9yeYFS8esTwwdZG7HLxyX3J3GcDYgbRh3rcPbNY9iFgSgTJVPLFvdYN1qscWHuBnXT1D1ZyzkQ",
  "key13": "5r2s6AUx6QT5W2pBzEQa6sdP6wcu7XRZbE8EYDNf2mwwtCbxvxwMVywwHq7rjfe4QWebriz1nJZTU2YANLe7vJNX",
  "key14": "2fVkitHDAaG2HJoqyMufz3NtRhHKTr55FAEB4CAaCApB5XgqqCRiibNQgaiT1hfynFmSsFQYbifXds2xkJKD21Zz",
  "key15": "3zWLP4zzkno9ig1RyMLBaYQexCc1o8oREnFMC8aBC35EEExcrqqR6pEzsKnTp6kecNy3PTovq5dkYXmv9nnadrrd",
  "key16": "5VoCgREWWvB7Vuj8icdzicd5BXadfBhGNjtPWbSVvSAMS1h367sWKvHu19S2HK8YfbEHDXwrgBffDXdEHrB9vZeT",
  "key17": "35jvH6BPHeiq8dVyS9FXJMPuZbS1bFLzBNsv8MvYA43eV7rSBbtE9fkMhsPZK24txfPZLDiTVe2fDs5zihCGSpN7",
  "key18": "4TNGTGaTaXH8R8yvDHiU9uAKENhGzUReaAFrQJhh4xMfKfVQuyqMChZjHe6zeNkQLG3MFkCNpLTGwCNxAq23UUf6",
  "key19": "5W6aEF1aF1a8kPLxN1M36HBYpqVmTsFqHyikBFYWMtSLEXQRaDWXn3XDcSEQm6S2MJ8p4ycyeciBLZsotsV9jnK9",
  "key20": "G5QaTisz81SQa1krevtQGBPja26Uschu9LTRyEiaWsHHrU3osbHABVH5eTWUEnxD8MMf3qVh6sBRmrjAxUNVAgw",
  "key21": "22QjLLDd2vPuuPgEntfz4BDH9wonSqj1K6Eeqg2w4yL9PKXZn7CLJuVmfhFeYVZ43cCWDFx1mRUzFt1aX3iuEXJn",
  "key22": "5qiLEubFNqwXMd2w4VFcWKSN6kJkeiLzz1U9Yp5RR3J6FTjVi7P1X3bW3hYhmHGGjEanaUGhg6P1zzLrwdZabpcc",
  "key23": "3Ds3WYp5JGxVuohzQDVYHdRvw4Yspe3DQsnXwmgevagmQXLH8urECAJsvj55E46u3BBppJkjvpY7BQkVEEXiqwA5",
  "key24": "5USsUYkuwxBouBS3TbQ6MWe7xU9V2U5uWdUWDLH6qxgjEYWER4a828gHFMLCLu8JMFQM1eRxL7uU7caAopE32dB3",
  "key25": "4UDYjNLqTrdnmPZFFrBE8UeH3vCCHRhvrJB12YwBrnGYa1sUE6oBnMHpTxvWptrubqQTpdS2RNXzfg6jXEcgqK9x",
  "key26": "4c46qGEgnZ41753w21V7A34SkcbLmxiy5cWRYXHzkLConiUhgmt4wjMq2Dde9DdCvfsU2QGdeArJYjv9FTN9dnNg",
  "key27": "4mX1ufagdSAheaXYrvTRzJKM9M7iHokoEJt8x4i9vShF527kupYgfherkcaMvwmFPnZy2i4SfM3tqp21aCHKPUXh",
  "key28": "3PNp9G9Sv2vGrWkMideypp71sQdyYebqNs5t7DvAVnq3wYb5ed1ja442AwCYeUVZT1cf8QtVkyeojtWBfSoY9JdX",
  "key29": "2xwYQtKCDNGSWVVTQ2QJLT9FuhFyzTm7vpUC4EUj6Au3oUzZtG2Zo5S3kA1HDtLmCmbihEUuZSQSTUtmkMbF1cS4",
  "key30": "3TH3q3MqhqgRbTHqNrsNQRj44fAVCK2bPyaDrUh6XKQQyBVpHmGPwXr8CbHAPWDbUktgVrmZE7gZ9986hZyZTRar",
  "key31": "5bzr8pUrBkinfY6iV1U5jEwWuPb51GfFyUqg1NZYbWM9gCmzk5hRsdnctDyCtyCEpD5msYeQX2d6MwDaTJhXyL9F",
  "key32": "Y7KMbVsDi629mnw7cUpHpRMPybimr6m5Sn52d2PwCotpYHPNqoCPX1doxpkT548fhKEKBFy9AbSaHm4nYHit2rd",
  "key33": "4xaP5akmpMjJTCcg2emwScGj4Ejbyh9D6asgdxute9wCxNvLRZzy874cqEzmDKut7UMN4ZVdcYJuY9uceP1NTGew",
  "key34": "47mgN5XqwPYP7S9QDoF6d7XB74P13S4Xdtwm7fQB4rGRGP7o82r3HsffZDCe5UG3oTkGPDxSQ7ZxPrMGG69DpNX5",
  "key35": "3tLBTFhxGNtviHrk4gTVgi9eRm4qhKZA24hHwmAQb6eMLGiD8LpUWnnN8SQ1nAUZxFeE3egwy8X4wyanfbWGoVCA",
  "key36": "4LxmD8cLBrQdTHRgr6RNd2q16xh7LQyu8CQWAo5QcTbqHBd8oNuxPW63Y4cHr33qwbg3HstRpa4LtShj6mUBrG1b",
  "key37": "3Qc6GgLufmDzdWs44bxHv6f8fb2hZN3WkbeUrwTryW71gjEGBPVCWuCZepZ51V8Jmoew8JodddF7Pdcdh14LcPGQ",
  "key38": "3RpmM63p7YXp9zTCkrGAFp3FkDhJ2ddi8X3dVHjTefNLf76XEiSh3MUCMUyWpZLYeA5cLKLkcc7gCBiwmNBpRYvZ",
  "key39": "4PFpQyqjDFMHg1A6UW1bVfwQaKXPY6LFssaK9pF8v5VbCtNep9i1qnxX9KnNGDMNcHVJZvSrSZD84vtyyEtMYwcK",
  "key40": "5DnJCpNeg1i2NuuJWRQ9e19aaAB8Gs9WbP5eH2gcxM7tVHQyhgVzPsUfC16Y6GN1bnvrL5HrEJsPYwYhCyMDhht6",
  "key41": "2gGRVikmLwrZLvtRhMXQqd1FcPJnhmpqHxSLjEtTpdCNTbWs3PaBacwF7gxahmqpAnrpcWiJpLG6wufq91NurkLw",
  "key42": "774xdFs6iazUXAwmpbDNF6wBMKNKbPkW2E5iXPSefjrLqD9JqWxZaj1FpMoTxraypTc8FrHmvopRu2Xrw6PNT23"
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
