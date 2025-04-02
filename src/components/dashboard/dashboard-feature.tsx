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
    "2t5iLucyLLGBADUeaQPwTR3ThGRLGwf1pw2MBQz5LGuJFjqMwHSEd2SR9RWGMiDmPXHgjP9yRoPHnwaaMEr61Xux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CE2hoF6Kk21DPkcCsuYpg1ehWogqbkEadtmg13t1uw11XTAmJEaoCejaSuswumyryGVpgphXfTPhhcjeVHRrpj3",
  "key1": "2Hu9hr4d3zxFQtgmFFim2zs4teQr9uKfj3iNAUE35yrqt3hphGsokFfZmaXDbpFZg4tbFqaDtU6tF9EsVdgq3pE9",
  "key2": "2qWVkiRHDWMNZwDArmYn3nByAuAAVGa8PLXf4G7KsCwkjgzmq8xAnHvp2SNsdPDUsehzWTgFXXyJyaY9M3F6uarH",
  "key3": "3zyzEJLAwnWc2oD7trraBNBXdZc6YD5W8Kxbxp546ZfW4bSVd4mGe7zZbP3nzZsnwUJtbMT9smku6pARmePhvDA6",
  "key4": "5PCVnsfz1E2b1CsnNFjAb3gn5EQziCBJ9rmzQxBFjeG3cxuWVsVwwjacym3xcZ1otqYKbC91LHu55isqACtB2jtF",
  "key5": "5PiUU6C2rWrbX8ZPiKka65mveiiqyokrWsPPFfoyYadDXtRGu4nxZEvydjf39ZUsoAVaLvvHe5qUskHn2JHyRQgy",
  "key6": "rMHMxgqQMVKgdiS4w7tBfjHmQpufAcfE21XiAdnQ63EcrAnkaJMLnn2wgNUchokDajqAuPS9AtBMz3JeeevcTne",
  "key7": "7MoAfFYXdUWB3QAXSSLfnPikGx2XRTQFK7JHHU9DC9WByn1rpibc3SDLFgQ6N5zJ3xcXjmiaHR8v3JK9RdUnMjn",
  "key8": "4TSVk5AtPTzzE6WkMALwpNx4Ks5YsDhWr8zYbpW5qwKtBM7r6JS2mmQGBy8oLeC7C7KD1Bf8Znj6QqspPQS6WmjB",
  "key9": "62om4DbfYnEWuY7rN9b7saC1EPLXjjNrDZnvEtPyCUiNy5eApDoZo1dnu9dewQJd33ciqqYVeGBWjD5J6V8Bc2oP",
  "key10": "5ccWxsKg6XVTo7w1qSrPx5qSQMbiR6hBPXag1YeCa5r2MpfPzsa3T1R21pfZhorWWKqFB32ZQNFzNwzDuZ5NYFQB",
  "key11": "5ATdJq5L3sd7WyFYgM3Lb5JRtbwi3p9u8u4UR6MkpZ1uXWTbMp2dhjPp9CBbNnWXbTAcnP6dJ4dNHRjrFamzPzpb",
  "key12": "3HiprPSrTnzSPoT8RKFRzY9oBNzg5LwnYNkCPJSecjQwddar9iNkxZYYwwYuHLoP65zPbntTycKjzXQf4RFTnC4a",
  "key13": "4z5z7MT68RUvJLug892htWF7mCQWX5Sw6nBitrdDFdJyjLKyj5CvZ6FiKsSz25BRyvr7Qyu6BswHAD3LhrLbtPcy",
  "key14": "61LqfPJHFQDKpmMBPWpYDVN8cStc9o2YqqHD7FThGdHMwZq9gFW6HX8KhVtA5cUkfWRyuT1d4wn4SdqKk7WoQxie",
  "key15": "5Z4MeC8GZ3XV52UakrSKyfBv9WrESvhhuJBrdniMBQnWy1mRQZ3bhFqJmi8pUK4aumGTooQZih36PcTRoTFn3Gqb",
  "key16": "28pU7jxHT8URGTFMNTBfRhjmGjDvrEiRMMnryw7tqzy95o35iNgWrCLzJtHYqrpxQjLzS5b46NHZ6i2BjHw2uS9C",
  "key17": "Pr7nrmNdgMKQ8c4ihS7XBQM1u6QYZgrb9Mf7xTZMw2FLTZa6n3Zv2hC5AaJ5RmMEWzhcVb1Ck5DMZDxMUFchTnB",
  "key18": "3himJpsnShxBBLVvbYoxyxnFJ1abyUmiS4VQHHkdNUDaSUWrPnJwuHnPaURzBWEVD55TVjMKcjZTo2hzJp848rc1",
  "key19": "2GdZ5zxAW6cEveCSmXyrkSCXaQyd1o37YQH6fc1SMaL5YziwHzCWiTbnimGQeb7oHHinnFtsoAjNbePNwDfquz4Z",
  "key20": "2RRJRyJitcSf3UWJP8gXgYPbxKVsVFNWFtGh7XrW4FzvtrkuzL5GcaPeiXVrZQkMFQoC9RVVqHbfDFb51x7EZyeh",
  "key21": "59F6SY2yaRUNF28gTuXJPngVW62syG6VaxNg2wZAfhWxaTwtFcU5Krcqn913vYYWPmptgVMH6xuh9dCwhYrf2bpY",
  "key22": "37xBfxCkAGRRMgWL1vNjKnQRcejJC2mP3kzWgBK1nSi4W6sbaNhokUEn7JPvKB7RfvqVSowjNwwftQrCScFPGqvK",
  "key23": "3iPoZ7pZoCrKNaVAKg5uJoaNA8Gb5jPaLW5UAstT1tkheWHKBz52WPap5VntTEBk6qGkuhB6YC2n1iferqDheToX",
  "key24": "4XyBGWDjRMsWbAPTCE2hURjfUJfXV6zV9Ywcw6kRFgfZ6QgbPFY1wzRcDpNTRgZPc2ttcD6dfGhn87QzVzEGkvpt",
  "key25": "5W99W7npzJarG7GVSM8vBXk8YtCYaPndKEJrVLYnjQoocp5X9K8GcBPw3YB5twrqWz4KWN6iv3my9KF36WSjuZHo",
  "key26": "2Lm11sFYc3VeurrufJF51nGhpFcRJyrnJwgiswoRkm3weqSazAvRUWVxEwAPUcEfaL1S9kjHhpGxaHQWMb1sR5Li",
  "key27": "4zcpAxrjWsTGop9xQnseVPtmc1N1vUM88AsZPc4b51MCmaqGQ67yEYpxjszMfw9uVvRdhHN1CBeJStWbEzJKXwoe",
  "key28": "3wJGafWF2YbrxVodheZUwyakoMCjaJUS8jbCEVbHvLVZmVziJiTuH8ScB65xLbUrFzsD8qTwSw6Qd2kYJrsTKeqc",
  "key29": "q7js2nhETUVCjueXWQSi7fRH165ynjKq26zWfVaH36dM6eP2hTRJxFoR2k1ocVFQyeLyEgRyveiYVgmLWKzvRzp",
  "key30": "2F38yypb4ZecuqnagVLYVpcq8aHxUnk136QEeRBw4CVnr8F8M67eLqo7WEMDzhj93ELYNTXG7JrWPi5LV5aRjiD",
  "key31": "2nKPhAyZ8LK4YxiH6Z1UzkUEwU9oY39UjT2TAZPRcXHZKxaKBw5ac1U4CAPh4JBU9CrDw1xCLtcyACdbEfv75f2Z",
  "key32": "4rmvQedBmzsiQE6yZ7e3qPKn9YdzW4U6ANuo51KuULEkpoHtzG2oRzgcCVTTPpTyzy7CL6nit3E88BpXhUpNkEDs",
  "key33": "2Mi4mfNwvxg7XeJtgFNFk33odCcZTASDTKp88qZLBoqCtPSUs2sBQg3chBwPyJZLsp2KpTp6UauAe28PesVcTqs2",
  "key34": "5npwKWUGafwNwdJesptnKYBmUNfkCCyFKpEyGnmMPWiSxPBNxwVDtCqBwHppW8MZTqf7aeDY3nihGLddN6ExYtbg",
  "key35": "5HJLCU1okDCSHWhyrJjpbx7t9N2zaDWdDNUkwTaoVKKjM6UudrubyxiqDHCtx2fXAG4AMRPDVqZoSTggV47TACcb",
  "key36": "4K9P5247B9heiPM4RPCyAc48cmk8LU1QqmdupfrgmGxQWp6cy4A2kThMPeTxXVf9xxJ9QWZ2nptyCm1i8WHtNZK4",
  "key37": "5hKzaBvyXdLPfY1sHutQSM1XxVH9eaQsTLVLGdAzpHiT9QoxQVAckSx4JTgtHzkYz35iEt6jHfcej8T5VmuLfhUH",
  "key38": "3ec5MpLBZRAFY1UagJqKkigMNbV9G3KvPKrsZKVuLveb75DrXS2DnwnUVZ1DbtK8vwiRiiRAyXj8eqnvgy2srMEm",
  "key39": "4tFVFYsuC2DrzQUL8KwuPWYkGZqB3DEDGjKnXwCNn4xqgNufoWCpQLYBfe5e4bMDJziiUFwpYxEKrdFvfEYH3Sje",
  "key40": "4uiTt4qEPX5vWYYUbTHy7Mo3MAN5HKPTXCutECXznMUpPAFzzSujUwLDWn8Frh7ocoPjKrHxknQMGmtyYm1ZDxSa",
  "key41": "38ZmhUsexAnsusvV64n1EkJmXkbQVBKryjqNbSxFTkK9Ca7gjewPZGKrs4NZSvpLZLZ71QbC12CKSUheb1ibYTx7",
  "key42": "4aUvPgzd4oiUCCpmhpSimTdeDPEzFQZpfdSGi1wdWd7anBaXZmhChE5uxazgVdLaNTAPJtKFL25PPcgRYRkSX7gM",
  "key43": "5Y14daiFUvLRScdFY6WH7upd4Ehj73Mt8nRpNsZ1zFFdfsrtv7n7a5tYX8WkvmY7Uj5HxtiahPQxfA64nmzVyCDx",
  "key44": "4RbMiDRk8qc1wL7Z7eg8aV6frvoXkvFNPHWyTWbCUtX2PqRBxYnGFDiY8E2z9GJ77rA9LUrSFTXq5dSdH9bmDHPC",
  "key45": "QEyy7TLfeyM4x555qeKfwDhyVRz76puWnXmT7d42dwZHaSeN2MkhVoMhnz9JwfBxYDcXUX7YyvCJRZtcWaJHBxv"
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
