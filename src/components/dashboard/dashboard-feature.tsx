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
    "3fYaQfup4X6dNQ3X1DvqKu5a6xXkMfYigeTshoH5SpTSmFzonoviwEWEvoCqnTbMNKXRDJhJ24HW3hKE89YfYjdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NcW1woTbMxMQcwCbDyK78RPYn3Lg5pyLG5F4LSocdarLPHqF2QbYXFHXBmtUHdZDvGhrUMynFJ9aiuDx6oWG8hR",
  "key1": "5RcoUGnLnLoksZYnZGxAurzWrj4whAfiXYcfUKpv77D3HVbou1j1BkZMSJwWiSUy1L54gGHZCGJAqVFotC7hTSXX",
  "key2": "22PBfY7wsYzKKcz9QTBQWyTUxh7SdDR166opeFGX7s3dbRvJYexqQPLP2uBBRAuK3edpC9M7MUqRwdg1h5yngLw2",
  "key3": "2qa1fnMQ9WNY4fKg1JmXsnp9Z2B6jGX3djU5CNfXcQ8hKtWtSJQnsBEk3weiVBTnoLQakW2794XYTQv4PRgWYhNq",
  "key4": "4SCvJq5WZFiGfKqCDFKRw2SjXzf6kwbQ9LTNRvXCBVyFMBzCT1YrcayTzay44mkguRdFi2ebcKYFJ9mbdog1MW2T",
  "key5": "5TEYsif6vihYVQ4Fh3Gz1yDD6dYnb3kJXE632m1fn6ZS4bLKctfy3tz9FRnSz6xZRGDYk5M9G9r1jkpo28Gg9y5s",
  "key6": "2fukRaZAwTDvjmZ7nSpp3gBtnXtYEJSGabHvVQ3JUnuJ1dMuUirMVW5mWtUTpVXz141ht1d5qLGvyHRWgpeaRayW",
  "key7": "2QC32dTzGG5fUgM5HooJNkiKFmTRXvzoPJtadCquKZUhn9r812PVrWM4t22fg4Bjtt84JMyz3EWXQLUewWPLEyrB",
  "key8": "44TeTp4pm9efxbCVrHGXHEXNx1Abs1e3WyLQNssNuedYp9FM8k7bSwSQBckBBAGjRGb8HYHJCsAoepvoFw4Ssfes",
  "key9": "49a7NgYryfvb4joTcHkrDboRReF15xmM7Z8zC5774KjopAKTJcreePkkDPd2KewEUuFWsNWDgtHwwReeHa9sMzmK",
  "key10": "k1TatagY2v34U3P4XKgE8ftysz6f2M7LMkkBVWAF8UX8ysmvY9bJkSisYiV5y3QsLPT3WVLoLTD7fVW25LMZKCy",
  "key11": "kdyCJmuG5wfFpFHEbNALGDwZMQa2wpgwVC6dufVE1LPYwpKtpPYV8diwo1i552JuAXs1b4HkgLp2BKpRHkwgzpR",
  "key12": "2J81xqvVsEejKcYRzqxLKbkAije2ASKUgZW44hpBJFGe2eUkBjQ2iSNsyJsdv95oyat4DndKrQdQXyMXD8rtcF2G",
  "key13": "3xQnBEx1JmuUKpEVJGomsgcu23ohq8NhoqaJEFogGGYVnFQd3Epb8quJ1vBWWHJjJCDU9HWYQaeqqpPhSTAEd5t2",
  "key14": "4D9kLixFzvXUGjdUMmD4ftfxuQrTrBX5N42Xa6r23vRF1HdCMwmbGM3DACPig5EoXgRQeEeBHqQ3WjaZqZ1fbuVT",
  "key15": "5LYtBpLNbvdEeox7HWSbY2mbzjwdhY7RnFXVQ2kXvuHdGuDFBnMgPEVALyC2BdvPUWW8CqnA3qw9AmX8nSHEiYk3",
  "key16": "3XzyHpX2iHbBCwuE4DuChRwdjKyXMTpKPKvqZzMWW1bQP7GUJrBGyoDRvb1BXWYRWTG22nbrBJuymrQLQiHjQFS7",
  "key17": "67RNA2BxGNbrTsTfrFrW9npmL5TZyvijwKMRunubM54WmqaZndUBqf3G72VaKFnj9ZAwj5PcLk6HpJ94EHXzz6Fb",
  "key18": "2fwRTd9fHLsVBzRDbkBYr8iRWK8mCeCLSdDcmfu37pemypbXVRd4rPYZPa5EcCHo7Ktn54rLP9jPAMdQPSkcoZ8H",
  "key19": "MMpJuWxNqVr2hJBbjnFMeicWQuFzEKeLhWqqerEA4hdDaW74VZwnU6HLEoF7rsFNhYQPn5Hyzup83UCXWLY8AEt",
  "key20": "4qKieyKzugMqGiV648eWSKuT6BuHdBPsk4m1N1ZXuJYJBBeSW3iUwRtwPhhU7Eqh8xJZm7H7qWdJJYbNYMTdUiyC",
  "key21": "2oXZfb1etdhdkkLQGd2s14PeD5Lm4uhMJ1ZsNPTke6kyXWHm14xqtFed79kDwJXBZXGeD6kcEy3RVrGs7unUbu6Z",
  "key22": "2RuPXv2HTiRhDdfyNymMAotucEpkgN4r7KrDXQDtKVVTmTXyXnVzXWPqoQfHAZNVzwk5szPBbje2NrWUg9kG9qj3",
  "key23": "51P3S3YNKFP5dGu2DZrQoctsH6WbFvuDiAjdwxVKAkGLhzHUk4x1mGj5DL1HMPmfnVcY8jJXjdowMHrTvcYVZLfU",
  "key24": "4CGEVq3JQNLS5pbxNpiLse7HRtxgrzcP7K7inzRXAdJ4BPJtprsVDyH1FoAypNMeJCdzdojcU5628prubLZR7CZx",
  "key25": "5LeZNA4rJCM2jQwrEaApP1TVB5BCbDLV725ivKV768deJJPwZTEXW6i9Mb4qyfAXehi11dbtzdPTvxXePMvyNC9r",
  "key26": "4ZCHxBUjKdJNk2FwgBjUgFc8f3hAjjWS2c7Hsijdhpx8vsjJxLDEPrgK9Wv2dyg8gkpYphChW9zuGS2aepA8YyFH",
  "key27": "5vMRJZusFs8eZMSMu1JLpngw7khpqDYXQpu6phin9gkvLSWPmUnjG4JX4UuX2AfCnQ29dZuPq3iF5atuHCeD1GBa",
  "key28": "4XvCGDELdFfrRtGKwQ8RKZmqpiS58St3fGsxbHEm99o1YtNvX86UPi4N6szzAi1netn46b3wfqGsvFwCqvRQjC95",
  "key29": "4w6pJpcbJU64rqrRaHQ4RmhynM7kbswecG5MJrX5RtGttj2rEy1reaKjFj91HUBfACpmrCFf12XiDA1XEZNu5icU",
  "key30": "67r1yZzxhvwejnzvLhW9ieqVo85z2pHYVZki3ZFGctyyh7ijcVgRin3rA2PYGdda9oX6F2YqT3LYxA7rdn7eXz7j",
  "key31": "4dFYwcE53aGQw9SGVSBTvwbUUWzr5oMK5hbGBEoDeZQ3D8LrXZd75Zm3i6RzYhJhQ2Z1RvXdN7P71weY7RfTf3bW",
  "key32": "2M4ToPCHT8j83UanShJue5e7oZjavgpheWMRGYy6mR7gxf7ADGziopSoGg6pixik7Epp7PnauUehmHAaQk6k142p",
  "key33": "4bnuw6fuwicrebRJ2vnMeLG93PdcXpnKWyat6foW31FcWBVmnnSmuNkGvN7bTyn9BuHZVEm64vtenHpiPMKDpaX8",
  "key34": "5U8NArc8VDHBbUYwf38Awf8HAmnQadHPSGGfHqsXPBixhK3tPBDhy3wcuMNdnmAFZUc5F9ic2qDWRCueWiYWXRH6",
  "key35": "2QtgfnAYD5BSK44PVJrjs8TcPr38AwnorwBTcFQBNnNCcrAhahdLjPNZpDTQfb56VkRE8NxqZMvt7Qndqa7TkB1k",
  "key36": "29ccWEU3rMKG8ScnThVSfD2JcQaNDb9SzTfyCCXzfzEpMS2MEt66VGj5MGDuXVSyASv9PVtocpbnzJtvKv4LGxZf",
  "key37": "2xxsQqAtb6uyP6J6Dt44uHVbBtwQxW5bjxw12F2qHxCuxzrF8XAhnAUz8hn7XSzMmTyJiGW5WHpNMRxXjjuL2DT2",
  "key38": "4rHEoraV8bw9QPVLs2zTMPLwmKCz3dPbfZFF3Cd74rZXgBMgLudSmvRJ7UktZxcoRa8YE6mMfB2xcUHupnrVcr8v",
  "key39": "2bJ1rk1rvWZK5cbzstpHQmjcvczu8LVXg3ijpryYzsq53z3ghdERn2Vizfod9iCDUnozckEMqm6hWtCJiMTxZfns",
  "key40": "5tfVRLesTdzezdU8mEEKPX7nazR1qBHdyxjpnfWeQYStiG8yd322UzrQy8BDWpuJD48VNqiHcEStSz8VFWWFPkV5",
  "key41": "4nGkxRepSkzuWcnSCajCUvdkPi2qvZMssvmuBEvvYkiE7xk9Tw5pgRV4kRfqvAsi6U4FDSyr9tk84dR7ffPFJ1YK",
  "key42": "59kA9z6WjuTNT3i7FE8pU6dV4wTfoWS8XznBQ5cMgVGAioPyKcPPjBZaacw6mhYNmq8NVhsaGCg6sLkM6WeMhcrT",
  "key43": "4M4zp2awrK3wzpmuYanctpvzXurXAszBvvUuhxJ7VdKBM5hk2ktzmpboo6ZyXVBkZtSJrizcqx9G3qwkHamVeiYt",
  "key44": "2rHYgMXdxHDQ6CkcFDxLUeZ4BQyEBrx9ZSTy7bCASwqpFcfkBFcPQfH5uKutWKtkhZ7kCYbf5ioAzcxDTVbuBy64",
  "key45": "3toDsje23AycgnUcLkyLjZC4ByX3bfYstr5YTWGmm5uzqq4xCQTJZe8WTP46zqMFAxjZtpeRCyw1VGVuKbzpGvcn",
  "key46": "2aRkdQyfZGHbhGCa4fqHz1fC1czZgy92QGz3oU3csjSgvYkGRgKT1u2DZYnWA6dQ477FQbZ49sSpeB2Ntghgfgjw",
  "key47": "2FKdDQVtEaoz6S5vur49G6KH751gvFS61aDGuVnzF8T2dZPXgTzqRXxxqZEinQ8uEB2vznczcMSLWHRtD3UkyiLd",
  "key48": "4jDLMuHUyiYRWFnfCfYwdn2YgZRpabd8h7fYSw8VtKFj9ntvSGeHZCHMyvKLhyG2tHKH3nvcbUzhnyzQAnusdS9e"
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
