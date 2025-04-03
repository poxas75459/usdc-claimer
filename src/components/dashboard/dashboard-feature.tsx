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
    "61XSdFf5UuiSNh9hfFPc6YJP2wZGhKXSg1eS2qcBZSQcoourAEtomLPoLGJ53d4wtKLsicUgyYuQtsJQMZcJpE8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33rhA3Lggd3ajAxtbLqgtJf9pV8rZQhz7d86gheQeQXg1cqnGHxpRuMmPUEz9vcDSWCXjJoqLosM4DzgQgZBEoF6",
  "key1": "3y5GyLFgSuYNgsQMcUFvJ5NCxXMWp4M8koi5TkN3nPw5wJ7f46KFosU7X6Bnc38PBfAastLGrXBjDAwHvzUsprEq",
  "key2": "VYQGjhMKUD8Mdfw7Zes28mUhAahKNRvTLDsUiyzyX5x5tofkpMbQWfCJ8cPtqonGcigmFUXsNhQS2xAJefGr7u1",
  "key3": "3eshT1MqjKCwj685Ni6N7uBpnwXR4QWDWkNFCbKTvRZbY2QnKkhvaWFuGRGsmqEquNRwXnrCeinhc8X9UcQFm7SY",
  "key4": "4QM7hERXLHUWy3AeBmRgbbdtAjnFks9HPL4egaT3geQ5TTwyfr6oZFweucr8EDL1JYUwp3AuWwh93tPbH1rGnixj",
  "key5": "28weMEWiZFHRKmNAYz4bAH1kk2xA1v81VcwswZoE4vxxgYRbYMjUnntTt54sQp1dBsVT5gKtbGdGje2KrzLmQF6C",
  "key6": "4hQU436nPSpCPd7CX81biW9rbKCiEZCAj9NG6tFaGaNsb98QqYZHCgTthKmsiqvcp3Mgc13yiTbRhuPVV3buupK9",
  "key7": "3dYmyUA4cKqixzuZFPRfCgL8eT35tGPMEXEwXSeEmF1SbvKVBmMgGNu4jzpnaFQzaTpgvDEjSRmnxFzZii14z9Em",
  "key8": "5F5M6kp44mHzJv31EyHmPwrdPgvMfjfRR7mnnC6aQdsrhzw9X3h2aNkgALGZujasbirSxrd36qYVtcQgtQ9yCxZ1",
  "key9": "5Gs2BjcQLjG5tZsF1YgTjTN1s45QfLYVjuFjin4Jo5xNZ53GqZ6xK23aVVRAGYMcjBmEUP551Kg6EajMngraHWSb",
  "key10": "5rUcGCQo6a8AV3J81SEPztdzbwuWjSoq7J7bhdDe2rhnzSvu6LFpCwXQBb2aNoFrETMRJwUp1x9PeAwZP3WWwQtY",
  "key11": "5Xd9PNpZVPiPHSvn9UyBGLReUyStnuNY4HcfU7EMUWdpoak4hoV9TCwbehfzUt5zPkY8kd2GMkjmvKVd3SF1oNWM",
  "key12": "kurhXLXRwSbesvmr23D3Csy45g8EN3qHEJe4MUQng5oaBXMRwiQpTXdf6cEqvGcfvKTzgeeGNinmUAwUSZifwpC",
  "key13": "4nowj7kbm8PWSLcjf1wY55bdVvck2uh8S6ZP15needtAdTmtU3gZat6JLLq22K1s3p9HVPPxy6AzSLFBXSZJLaNp",
  "key14": "2NUgvfsxZzydXxNuvvEgpnYnd2E7smBzUjcWQEtZGR2QxTntMBNpeU2bBuLVH82VAG61Jt1bCvDbmmmqm4kA3nGo",
  "key15": "CDFnVDmsMyWCsBL8qtas6dPj87W7vNbCibKq4kFgH3fvhiE42YEN1ieZTiD6Fq2jeAVm6cGfM9CteJ5vnovWAGw",
  "key16": "5PMqJDZZzgd7ihxqHt5H7XZC32r9tCRaQ3aPVTby2rXVNVg8pNrqQE4fQv6Gdr2weVZR6zogpUN6NokdFQ8LZYjX",
  "key17": "5M87hstty3jSCuk1QgistdVU6M4XiJiB3HDKtj3YNU61dFCFV3iJgKXnQpXAB75CMc8mi11N95TjJ9D8yXkM19Be",
  "key18": "4PVSSaj4feL1yJZqU5tC4F22aYCu3tb3JhcieZPyfUnGV5bPXaemLzdNJScZuMV163MonTHjt4DqbWVKBR9D2MCC",
  "key19": "51ogJHmyKRutLmuRProG96v2eaDuQJLy2rFMv3GNkU6by1tJcz9P2V3kbFQjR5dAS9woT5atthDfKYwkkhXvC1ZA",
  "key20": "5Kv7XZXiQVAzZh9QhnxWx8Wy9hnso11c9fFagvya1aPcJ1NFoKkLqMXB2EEyQRGpwuX7Q7yEKswTb8ymURoaTgQb",
  "key21": "3bLzSpR21sB7djrsVeg7WJFVTHpfBNYpadrmHRBmcMUdm1EpDkuC6AxMnCWAcikF2ve86h8z8QgkrwmM3qGTNBPc",
  "key22": "3YiSUymFBLcQxyTof7vwhLDqi8skwkS8zB2zXqNSSqvaTbnnK4vN59nbXhXsrtD8e31URZTPTQpp4kQZtogf72LA",
  "key23": "a3LaGeRXRuUPXtTdYh3L5FMHkbw9U2QqKuQi9Ew5EeRjdEZwfdiWwvopni96dRA14jtuJTMgXf4b45FVMAZzLFm",
  "key24": "34vuM6dYrYszphUCEt1UAV55XnQ1rUwzBbqztngAq7Ci8sbBw7WiKGg9Wtu2NVVApZFFzwXJG1LXjpyub3XbSxxu",
  "key25": "2SpX29NwhReABfbzvfCrLGrSr6ShvAk7JUd27QfHNvP682JnVpcBAJ7eKYLUh2hz5srvQLTbspmt3QszmSfhc8cg",
  "key26": "2XAh1JvBthEs6D18MKv2Wtci7xCJKmEueQDJ6fTXsSM1pJ9tnyjGCHFLLJaZP1GEgQZDMNxoomFcZLDJuZCQWcjE",
  "key27": "5qZuEk7W5rai9ycyNfbU3VJpbZkgTN4uJzWYkyxt29e99ghtoB4zNdUipgSC1r3WfCq1vgBxvfiT3jxVBpeDqd72",
  "key28": "XbUvpc5U8ddkmCPg87nURdjp6dBUWdVWYGbuB51PmRttMYdyfYkaReUeFDTFdtgk562xr1izJAmPrBLa2sW71wk",
  "key29": "pmk9Qexc2LCokvP2UmRVmu7E6T6QbTCmFiQHnczyUa8fhBJxG5nPmLhrnvjVaFvYcQ2edSXkSf46VxLccXwSW56",
  "key30": "3rF7VcjhiQeKmtbK8YT1tofyRZdZb44rAU52NGW1YoxFsB9Cgv9LLcJSiLWhjKh3qJrKNDP6zkwnf71MYDVFuPNC",
  "key31": "37nr2HtVqyWdNU6K75kf6SnrJB8ReourMW4iwjJ8JdSgtRvtCELgBn5pKrKTBCZHAdzE9rdJ9fTe7DMDWsEkc77e",
  "key32": "2ajjb7jYa52Uv5AcNAJSS3HTpZcUJVBtdMRBjFis2ooE39zKNBTSa52sCgUXCc48CLLtYJ6A2ZESjzV6HnptBqqy",
  "key33": "4g7a18bC2SZzYEPk9fv8zVvaRWpg7y771YFdaUYm3JEoNULv8DS8aKWHvyagM7iSGWZqLsMSQh9tv8ftccoW9utA",
  "key34": "LyUz3bwLVrPUZsGPjSk8SNBcBxPk2VjXM8qnhpqcoJjcrjDNKigic1BtuYGqwU28xozo5CjoptXgMurZVJHasqN",
  "key35": "jE6fVL6LW26NZcserCgCm9FeTbvrcG1eeaWn9NCwr8ew5ZXc7mmKdxA5JWtiGxGXXWW1JiAc5nrohmYAMeVWoaH",
  "key36": "3XdiuiFs5LXnYSj2hhGDXSFUDGKgxWwTczpfSNryB2Z1muPx2SRTqa6q2Gknpk51nqRUC2f5T6XvXb7hPZMYuwZP",
  "key37": "5AF3kcs3joKbCdY42cRPkJAfnkx8WCKkTLnb7hmdntWZsakpjzz4VGGvdgDXdNprGkLBnMBSKiZf2iVc3NbwKQ3G"
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
