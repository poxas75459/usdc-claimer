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
    "5pQry2azhcxjFY6HhtYsgaUzVPjANwGa7BfKMFvMpH9CbEwD8H8mZuR4rEGjLtxM5WuHNSmTuHmeg2tiwCkZx19H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGwQwgL1tc3TQNRNWav3dypiLPqPuWT9Q4LqmAYJA69K3mFkLB2ZUeEv5qYWh7oYujYXzCvUdNyF2nVK2hybWYq",
  "key1": "5Xn1C1ELSoBpkEQZXqAnfGPFd2zpD7wmV6L6qBhHmVfXotevFh86av1KkywtyjCWe3xuJoKTvMhVTJLdzm8L4WLv",
  "key2": "4jbZzVfNGFLKbgfnat2qcQwLdsQbmafTMwgbBZjhq4Qf7fMm5Qh4TrNRHbGt9nCFsp4LCUKMJmSxrE3GomCXPXxa",
  "key3": "Gw8PU81u98TFP2xwBx4kFpuXorAxteJJYYiXGyRpJscLuNrJoKnH4ghTowix8NVYM55n4ZV1ZtawJpchBWxTnfh",
  "key4": "2ZECSuUD1irWF1rsycYZTfUUFUhFXGcme26CjBAg39LrdjHCmLiFy6Cc77sgvbVjyYbGnqrvqDjtefcivZHzJYgP",
  "key5": "4AaoyF3QC3JbFu4sSCWFzRXr7Lk21xruNQirYBmmRPhvLmq5NgD1a2hen6PuoBA9n1LtGjkZggXYFjw1iuKPDZ9E",
  "key6": "3Hm4eYAXL3cDKANXr8vZ7MGdRZ5kvFrQ4HkcBVjGADXoohDGYKa2xAwjMvDShg4SjcAKV2AwCimBHNgsbYcNA7cb",
  "key7": "5Qq6CJsU6tDdqnpFvLV2A5k12PNUKDQCsHzqeJsD8YXbqhw7bmsbYaH2j17wftQGguyBVU7wNBKE8GcNLyrMRExa",
  "key8": "4wXgL4TKoZcr2kMQZeLJXc71JUeP3ZKskS3M8RPkt5G1vA8UmJ4by4ECc8qYgxHwhNzbJqrbkDFvrcQJvijbRmYN",
  "key9": "GvfgBeAXPGQG6iunueRacKkzCHz52xRgHuFiXvKhy4bGReEsZU2EWp5a6pvwvFwkgaYQ8fbrytoFssEsKQGNkjd",
  "key10": "Amg4siCqDKiQdiKsCvVhwkhHUYNMjVfpccVHHLCG8WrdgmiQM9hL4yxbn4wRuaKp8mxStwe4n9Eii941NWHR5pi",
  "key11": "5dPc4TAGVCpDUR6PTwvw1YcVA9BbArKexYpuQvizuMX9x7Fbjj6wv5VxALvhUCrwc2QmQEjafNchpne9GUfj4sgc",
  "key12": "4jB18vigyam1PiExgFrvJL7Kc4qv7WoPyupEqw82FsGJ6ksjJpzpfdvFZS4PLZ6HcXG5m7zRoji3XLTXfEDGBSDe",
  "key13": "5rg9SttEFUUecoU2LtJCRgcyTRnCJ5NpLUg1tBPpKtwNbVAb2vkewJkhsdDY8b356Y4U34yDsHybbWGixUQckUaB",
  "key14": "4x8AGVyWytefdkUR8vnrg4x4j7x8tcGmKRpQSE7Sc8P24GdDpuXuQDiF9CdkMfmwbceRHDzAaFmnLNFMW2ytuFTC",
  "key15": "31kFpvw3atMLiEpohxz94HfJXYhkdJkjfCZud5cQsu68FYv9mvygpEFRPRQfYt9NQBF2cM5Ric8UTyeXHSX75FLp",
  "key16": "3SiJwKtY9T4hAMTLdfBr5QGryW3eLuacvuDGGmAPU3BvfDDb3GNxwGjUiEqRD7Bk8hvm5rhaJCybnE74MCqP74tc",
  "key17": "5LL1vBw2j8qxMp2gYDNWPuMtfeJPjq4niibth66NQAvu7heJduPDnWHgd6mFh9NVi43Ck7YBu4zT3tatPM2xY6NG",
  "key18": "23fTNx3bRA4Yw9qRCd64WxdztdWykN1MkeSQj1gbqovgVtq8pfgFMHM1Rhh76Ja9QF5SCRjcFsjaTKWoAxgFjJmi",
  "key19": "h5YD9dmmdUzuJAbQ34CNSCc9dsDEpZw3HN3oHF57RqfGS26NKAteM5E6AgZG7L9taCe3tZ7LxxBsg9izmXAYuug",
  "key20": "61BjMzbZen3UuUtmFUSfKs331NsakYYib7imsWNDoRC1vMupQQvW512BAHDuMpUrwPw8RBj1xEByT1Rxawqu92cV",
  "key21": "4NTWLgaUgV6H5yCWj7yv3PWJBV6tYhEMRut2bSCaxW4E9dX61kr9eN8udCwwF38sqFLHTaE1kDniaPqYoXX7EBwF",
  "key22": "4VkLBsZ9owBx6NNVFZfB92UUsUWCswbhfbfSJpFRwH8WntcxQa12g8rTrHi7py9rBRk4ub1gmvKQCWHX9j9HY1sr",
  "key23": "4WWBz3J2qTuqJVRYfaDPZRa9EpbjSDAbNN8wpzdxpziz9qak7mZBZHyjzZ2x4Ss1uLavUqKBvUvfz2m1oXv4SUeN",
  "key24": "5AQSqNQijBiCnn2bRgFg62o4kq1LviQcN7yPYRvUKQ4LJwCd149gZYr6oNMzkipkcJnoMpxDByPKTQo2znStK3So",
  "key25": "3763xmYBHCVd98X59xutAGwoUH3yS22KKEJYtHBMYfruELP2kBmHjiZVHsevaWW8VoJFtSV5yKnkMxLkn9vd3nPV",
  "key26": "32smgoZr55eZFjFhFAck36RQgYcuCHPrLVwSMjLa8GHCv3CcR34kC9bke959TYL6X4UJpYVGsADb9hv4L1rqkk4m"
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
