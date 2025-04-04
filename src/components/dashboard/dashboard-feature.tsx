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
    "2dW6J8f7vF3SSqMdsH77pgKeBYTxhTgkRK4rRzemzVNEZZHtCcWr9SFTuRdtc68XRZg9ZqBgC1kDm6LWzsxan3Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y4ZzgSmcVj1T47BSVPY4yv937d4BpBeLC7pVA9F93pS1A5jTZ5ch5PSYKPyxxmSgTF2uduELNk8MJ2QGdzjdsck",
  "key1": "3i9eFnGGikkrAvcCwtU8SLj61ue1VGXvQRz5PKxv3DrSxx4vAUncem2kviWhJonEJhbpLw46onTYh1FiEdXTKnGW",
  "key2": "3LJ6UWNBC9ZRhDErXMvTvUxRmaExLp5ZNAmw1HmtArJr4EtNtuuf8F5ZzKuftn6vJ9ZdfW5NDsWKJPCQe6B8GkEd",
  "key3": "HXWQMR2k7zgCjgS5zQxmbiURWDZuc5wyJSpV1tizycFL2TWA7UeppVyRVw2KXwjWMbCMkcJ4LdJihDdSeCzaH6t",
  "key4": "53BBhUTpWj8rbCMZGsX2vkGhLb3p4NL3hSgaddreiqcAgx14PkLE798mpdaVoyuxRtWdKZPGGn1EP84tRAsQvQ5W",
  "key5": "BudFVjNNr1G1q4QYyRfR47z7JT1G9TAYaBPQir9AnkJdmJFCtqrtN8gMbmZgD3jK3XDXiRSN5VEz4ZWSpkwjwa5",
  "key6": "4dknLYXjapw7xfr3juqTRFZL4Zz44HovhGEJvfa4ziq1ubrvrenJTqga9cz8qWs8oz2E9gxGscuxR2nqYPfzjc1n",
  "key7": "YnrhwEtpAMs5iRGr4ExoAVR8DCsjcVCBVNNzdsHVis1UdZB41pW6M6GhTmyBicAuZQJ9cTB6xrMf7f8AzkjoRnr",
  "key8": "2WQidFk4nvW4YqL2LcxxAf1nYpy9t3hhsXdYeiat6rZSLhPLPHXoYoE5MiuBFMdekv9CBctxS4njEXUDe473cPDo",
  "key9": "XQM9ZEJ5zSp383oUZZTWbGWQ4yZKA7H7JY52d8jLqyAqfaaPChG8TDk45FF6FBhbTwJfH9SW6KCxo7awFJ2Hzc9",
  "key10": "2NnUixhtEyUGAQvdJ2zaiCZ2kgtjNYemHwPrm1yfwXY2te9A8S6JqTRLo7WusUpdemMHQ2kfWxLEjKo1ZTubSTRu",
  "key11": "3Nw2n31h738t6149nVUzm2Fz4s7YFmJ3VQjyLpnvTxXAt2DSdHEP5XrViK83k1tqqedLrhhbMsU4XjQGbJTLUQLo",
  "key12": "NuxcGT8WMn4w9L2BpqZXb2g3UMZqz17MZDT1kuXmCDKg7EPz6vuFUuhBkjzQ9FFuxejL98yoSFJBqr4bJurnBo2",
  "key13": "27tNMbpr4j8tQ5GchLHw53GTwXf96xdi16RfY1hJZKx9KbAvmRLTN83phYhmPMBKeQks7NmRwahCWMD2gmWt2Bci",
  "key14": "2xkKASUZUZAVpitz8VPaCEsofiLEJAneEB5ZRkN9nTu3pFXReTGLAXWE2jkXQC6om6bC6Ac1MnnuKyiPZFTN8Poq",
  "key15": "58jdQ6y92AuRTPqmWiafianBRh8trzspyXCczzPBoDwaiCFUoMbnp5dZi7wX9GCBwPPtEUEVagx8icBzjjUeVHqk",
  "key16": "3PkCEQTE1fVUpPoWWz6BL961ozErXvhDrq8R2iJPmxYuWbv6KEHLBM1NNg1Wx4xjSRQLXpuHJntRBRKw4Rqf49yN",
  "key17": "2dviKrcms1nBU271prVErR9s7EGkkVWaghjMBttE4AgtwG563mNRbF6LEHMgzyasvkA8rsJQpH4SPxWe1TvHK23p",
  "key18": "57exWJY6iHRZcHDixWEP8wT5ercd1F9NmBrcxa5sSCA6oP8sknoy2Udgcm9TiyZyMoiaHXt2FGcqXUd5KCfvDEuL",
  "key19": "3U4biHgc5sAwFP2ChLAy7CRroQ59R4D4SFX6mMto3BJYhqWeLcKU1JQRzbc43CoQGTEyme1N3u4844HTe4VjQAwm",
  "key20": "tV79JyfFLZCe6CsRxMdK7bbr9GQasJzcMMzGep8gzXNZjArhDAjwC1x5YaLQmKUhsKVXniPqM5N97Dw3z6hzsCT",
  "key21": "5mEsQpvQME4f9GoreEpa992bV1Tdwz9fgL5hZPacSrucftohV36k9giyo1YALkxwwMbZ5gBJhYQA2NHHDmXiztLC",
  "key22": "2uJJEoTpkHtPvdfj3SCjf3MffjNKgVcgKBvLnzemikhbRS8YsQq8Y2cM9Z1Rq95oWBTTgKs8WYsEuPFmmn1zvdWF",
  "key23": "2urGD7sN4WZnjCred9ByKVWuuAzVE9PYnfh87LbRsS54fNaR22EvCNhjX9fc5VB4Qgc15AwzaHyRtJqEiCWEiZkE",
  "key24": "47UaP8nipGMWyks223uPziWYCEVRJH7z3FWicVwYmZ4hkNuNBm7RRxySN73CJFBZ4z1Rf8aLW9ZALmsgPVJZ6xSf",
  "key25": "4rna4J2hDnLKFAPq2u5W22rMwE9P6zHH96Utr875T3FRqvdkihcdb1obqXsyhMtqEMCbgUyzdxEzak2D7LFsVMYo",
  "key26": "3ARPrZnb2uzYidhT4rjfBKfiUmZgkuUkyt7ErRXBXp84mmuL5g2vb8v5FVDQH6ihijaUJwBEyyX2JRdGkpzqV6tU",
  "key27": "47pNHehp6FL34i3NUh1MtahSCRPKqvUHy2m2a7vUe7XEh55L8biXzFRU7aXNNtyVo7HR1zYqkkLNAvKByLVcsmmv",
  "key28": "2Nf5C1DVetcqAjN1kxVA5mLfHYkyRRrCdbG8HuWGP1BhjmjgWynMxLjUqrvuBmjfRsGaAouv5UvRt9HkEkGFK5Ud"
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
