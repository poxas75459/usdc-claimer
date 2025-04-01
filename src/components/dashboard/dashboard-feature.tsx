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
    "qN4es38pJkALxUnexX5Vq3U8c2w2dozRv5ASFNcw4JuKPzaZoDYLRTss3AZRHWjNf34HNJwuiBVZdGD7HYsozGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ak5rdn1pM9v9CNs2bZQ2nB1YTiqsifWgyny9SHHPCpad4VJGyvXhnmq4P6Hg94aqWUsLE7jz8NMDCWygYBDmyA",
  "key1": "2EeZcgc9RzaJmBjTeJbhedkGSCdQPwRsiHXZLFhbpVaJrNq2i4Jpxbv9qq4B3zCYHuF7cwFkrK3jkmk9ias46EAi",
  "key2": "5sTpuykk6LtudTuKSEekN88V4sgFvcCXDt6nHRfsyRuKVohFAJ6qGuEeBnURvrGepQTzYAvNuD38pRYfmcFTK6EP",
  "key3": "67AXnys6Dsb85t7oUqmjBEdLsmwZ6knJkyczjvJcvFSudP1E4FDssJVBVx6ULT16tDwgT4JuCbyTT3qYZXEBHsZB",
  "key4": "2J1Yo9K8Rd7picx3LnGKMjdbMiqPG99yMAXf9HEv56nN35cWNxTxudzoAmSN4H3UKBJEX8tdsMFNdoE6rz9KSS4F",
  "key5": "4hhCAnsLkks8fBjarQduDGMxUPsWEwvEzcPnA58AGqm4nWZGPhwfCeNVUHKvyBchuj24www6GNiFT2gZDv5bUtKT",
  "key6": "2yGDrQxqgMiARtykghrRrZ4xNbLahpE4FYdRshgB5Ke2ZcQois9do196wbseteWvsFaCQrWeKMHcQsuwqmVYiVVB",
  "key7": "36zdqbpiMFXHYtSjVxYijHJufpj6F3kKB4E3Tc3AkQEETmMpBVSoAcVoL1gDGRyLTyyTVpMuuvi3HKaeLtdjDheD",
  "key8": "1cTTY11RrVX53AR8s8HzJ7WJoLxSSHQLMBaZ7wTPafsgbzeSUqtWEDxEL95pmGFEWrGTU7HathR9kEcE6oE3wiE",
  "key9": "4MsQxJqxcMYbtmDMuagUjQVQXeFnzS1zFuDZmDHmJwDEa3zC7zK4GEUFB7qsCBc4TBaZ8Zf2TUsZkcHJFvgjWAaQ",
  "key10": "3ZAXCJuoxCxhVoKiWaUZACuhdXNNxPYswtwwAgsTcPReqWJ8zEvcu4M4pTXzfWwzzVuDZnVtkKxxD557377UZii4",
  "key11": "3hRYrg2nni6XcjPhsW3HvatUGhBjHF3qYYstNy6LTqZuPpHh654ybPTVi9E969PceVCQ8YWnHsUZ1Qgzgr4teQJ8",
  "key12": "3oEw8GXH9RTqBmk93JTe2vkropP37b2EmAAj7fXRFvLEWtesMBMUA9tSfSsE6a8bJh2drHb8J9DA3Fxggx8Ld4xW",
  "key13": "5Ma8FzUryXJpqx2X4Zoz3kc1335AoHMDHoLkDeb4JpH4HSg3PByQpw33KFCWo8sfcnCr857bKcEKqSTmkAcDrnSV",
  "key14": "3YPLkyYBqmpbBx3JJqfumLkiqQo8EV8B8K39nHheR15b8Fn2LD37Ev6ozodhJCSmTGiqF2pAdbP6ph8XHKdX4gN9",
  "key15": "2zqZ7XTWJcW8Sm27BdPF3z67owYy2BDrNgWyi1nY2UKtLBLctfxUkUTkr29Nwo3anmnZywat85YN3VUYwoFP6XEg",
  "key16": "51sxhJz3smWxGZYiY5peoeigZnXkbkk5RyaJEs6BUEaVTFjNzb5n8Jo893nVoqLFgx4fWyFFrRgvgaKPkBkrgg1b",
  "key17": "5Jg9JSMCbwqhogypzyaLvUijsMT271nw7fDp2CtB1ygm37SZkdgoHL4MMtuWfbGJaTpvTkgqWumUq8ijFvUDdmym",
  "key18": "oADBjLP5k4ndfjQdTBE1EcYGbjyeD8AzZPB2toVSAgRihND2fhHuxsvgvgNK193GPxrrVQtzrUCuN8gpzmcupGF",
  "key19": "35RJabN5FnKGvfRVZZv6R7pAhEA3Jc8ZjY5HAcdzBrmBzM5mX3Rc3ZmaXcHwZ1wxMbGE6sQhVZRhFfhc5fbagdVc",
  "key20": "41tnpGAVUQnvVWnMytjV4cTnCJnEBAKJjvFkYNsQY7hxfaeS5GKmD4cJm4osN51pddhv3cbzoeZ2gYcmVvtkKpED",
  "key21": "2VG6jXUjK9VHsZdqpCvLfuUauzXbpDjShHvmhVfsSpzZE34P9CGftDuC6SyTqrS2K7Bnar3fDuymSsLoi79t7pM9",
  "key22": "3KisbF6kcgUcLikbRuWB1rEbCGWsz1XjF8UVCqqZa3GcyM1SMDG5pCXgPV4yvVu3vCBAhGXek1tm6p1MJWiXPt8a",
  "key23": "2vGxXSQ8EkwtfYrLWEjUkWYCBANafG1MwSf5RXjyXTpxhbdmn5ag2PWFAH3vixt6eupJUUyq29JFwapqqHy7Drfb",
  "key24": "5GXFrjECZLcrP9t86piT4idJocBA4HgZ49bEdauJMBWMEKETH7BVjBgJnN2jVKHP3xnAu66XunTANvHxvKgGedjd",
  "key25": "5Ly4s5xBdFnVaqXgHkG2wuGfqXZMtZwt918ttv4B4QRUWhUpa9Nid4invp4dSh7rPvWUKhVPNMHMxf5dzKDzFi52",
  "key26": "V93y6DHRTHYvp72TnRBxPmqm5Q4DWLqrbdHe9BzFvXsoeKFMbjhK8e989MrtB7rbKCwD7WuE4PTGFknUjj1VnzH",
  "key27": "PqZe7qMsAFXrMfXhxUTME3vqU8AYf81FWz4SyVjcYmxP8ATprNHqbTYsp7GA78UMWv7t2rEfMXM6QcLCSGgyc9X",
  "key28": "9zYXjBM9vza6pMqRxoHaP87PanWFpiEp2xKG8f77M9pLTSewMDszRUJUevKPiyFrRQXAydCRfj8Ukzzn4pNRVFF",
  "key29": "2p3KqeiXwcEiEvX5L4qXhspL5eXaY8tpPYvRGcScc7YHAG18krFyGjU4nwanfjjLcsRRfgdzjYxMi5fcfP5myozB",
  "key30": "5dtfj2nz4dqGAFdAaPB7En8F46qKs9StJP2JcdweSB744P51MsgrXGcznvrE2B9Wkp6PabKxQ7XC4TUXhyoVhatN",
  "key31": "3bYNb57kLKsx7NGqLUss2KiwPr5TwEk5z2a5KwLwUygeupKgJn9ok4TNSnFz7K5PB9M5wgyJ44X3QsESFPr8zz15",
  "key32": "5mF3TNWkZESEezaiYrqxt8YFUbQZbcb71JA9TMYs1K6d2ZtNsNZMNYqJ9RGMwEu1UmMHi2ZzaW2Gn2rcFEe9HMRE",
  "key33": "5zPjZossYwhBFPpdJ8JLphpfdvTbNNEgzTBGRDjdjkwJrpeFX18WpobTqx3jKLNBGdveuUS1LX6TLaUq1iCWLt6Y"
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
