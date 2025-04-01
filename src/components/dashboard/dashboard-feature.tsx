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
    "tbD9W9gVyXk2raHRkFgt4QeYccgiwos4VNknmoYpqaH4jLmiSHxLNiGqCzkRswyRpYTzJ8Xib3iiQebBMdEL6vV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQiWKNq7G75pq1pg1fUpBVTeCcLk2b2AGNrYKaQnhzVkfbSstvQKAqA3tybmUTH1KmasMEcvRzmr4JHhxntVTTL",
  "key1": "588hfMokJGLf7TCNpXP2GZasGufDJWU1z3Vc8YDZW3Wwq7D2p48AZ3UgpQq5oMC67aW34qKhtWBeBHHMbuFzmD6m",
  "key2": "54fhPp3MorBt5WPnQzGXE3pLbx3TqCQczAnrdSEWKtmu42rEnjES3RoBKU63WXvw2hR3hXwyvt5LHoAy5te8MxgG",
  "key3": "5g69mpLr178792yDhWUVuEMPv7ZKXuubiYbCoMPeyPD33PGAoSFpWh5omce4TtqmF2rdyPGDucirEMiuQtnJCNC6",
  "key4": "5o9arEAAEWbocwqntA6ju7UBBUfxBqzRvdBAo77HkrqPTGYbBjMkjPLyc2V7ojJw4dSDgVU8jPHcL1R6V2QgZYKJ",
  "key5": "cZgtbnkW4ZXitwz8VbKK1Jmka1NqsKsLcCjsD7vJuRDwPDMwMFxfLtMifrYQV96qhWNcfiDFZn6YGuuYwq4V97c",
  "key6": "TDLhBy5k6hWW6ZJdKwfLUzUmTLKSEbqdu3xGZQRaHvAcDKGwvLSUDzdod4TkvzmfrKfbfvPdNiDPprGqirLA2ut",
  "key7": "5rbD6w2AVQTEkRdo3icneDhAMW7NXob9E8sMPFTNkjpaj6V2bSRYKRvta6qC8ZYWGY3UeWcCYHs2dnAHZEpCRkkP",
  "key8": "g1v6SiQZJufEnXtgo1rRWKDNk1yyZBjLvVS6GZBVDPy9A8ttLaCf8U1CjbzabMur7wxxm8BigHfmhVkUL73kF8Y",
  "key9": "j9iS1fj5MmJCtxbpkide47KE1TWZF3tXWLZqMw2Q1wgs3SJju1eyZKKsHTYwwsNsfwfnTGSRrprWzERX7C92ocW",
  "key10": "XC93n51CAHhJkTDZDumZB8Jyxkmr4DrzFJy2TWJzzafvgyLjPnHorHdwg6pvcGm9ezWu1HrXHre6XfrWFWKw1Z2",
  "key11": "5G8bhFXUpCZPWey77wee9HDLsEgh87BFnWMuSth8orpgViZBRCAfQHEgLrRduFPaGdQBg8jCVos9owZMKVb8434d",
  "key12": "3XpecY77tiVkgctEMBCzoFMdtsHj68SbHCvoPH2EPFSfxdVP7Rf9Mse4mY5UtweYBUHAVYe9WfXRahBi7tammF8Z",
  "key13": "3aSEYCCDnftPpDozxq6b7UmqQLL1PrwdXdfGEDSeBvSrRPAKxKWhF4rqqRLXNtcDUPr52NhnpczdCQpvWHRESwbM",
  "key14": "RBTvgmQm49hQsXrUV91GYtwBb8wCsW8vKbiWbYUqJSc5tNLjbMEGaEdEfqKBHkd5sdj41g1U7bA6dvkk3mV94eE",
  "key15": "HjaGQ55A26ioMsXAT2oz6sJ3GUnkuZCdAuJDKd7j4N39GekkLNnqct67CV8nHqEtqLPSbFBnc46vT9iKiEBv6dB",
  "key16": "y22psDCm1cTKG8aEdJdqdA4bi8gSEyc9xfPwCHy9WUxqUCLEuacseEgNKNo1d2uPTnSTUkWprYPTojJiUQek5kC",
  "key17": "5SBdFv2kk89bvRwuEEgWe3BSfbpraToRyjUamfK4n4A8zoRFy6mc7PnkQWTiZV5iAgKKRLdkVvWbbv8Tsvti3Nwo",
  "key18": "5vbM7L2sGgUst1NPxtFdQwXEcuz9sFUFTsFqphEFvFcW91YCMoZUfCDTtVUWfFNKBNVzcPpZxTiFGypqYcYkBG2Z",
  "key19": "5YXbH9W5aQHTKXNkfJXKzscgWDYh91nMxNiHwpre1HzUJ3hbbzUWjHgc3Aenb27AuiiH3NieeacWeyV3zrkTmoco",
  "key20": "46v5axho1jBE1uTCmyZbwFqviCetJZwTGNxy9Ct4kMcxhkbyNfCmkwxtqxAfFgmZapuRurBFvmiotJFWyodvbYE8",
  "key21": "3HP26DfnhRS4wGSD4bxffzCEiJGWsCe7sWE2XLxQjyqbh2qqyeKkPAqotRwQ6PsCnLgZJVx9CigkW8KiWRFBhNuv",
  "key22": "2EN64jyG7KXMrywnh95cgHCeqp7nRTjWWvstHxwtbmCbm2qMyLQrPXz5YT25GFB2BCH2JFYMNfnhZ4gnRtsXcfkB",
  "key23": "3iJZtnPf1gUZUuLugTs2BJtU7GzZxycW5dV8K4cRrAJ7kWoyeNsjHqm8cd2qZwbfEXV9S3psrAWkgw6uehxQFwN7",
  "key24": "5Wb3yG7FuJ5DPYdw6dDdgvoEb1JiquzVMQZmZRaQDMEsaYM3zqE65ZR77cE5CSjCuKUGJzLtoHfbcXVRf9po9SYd",
  "key25": "3yXsNL3SgFB8nT1v3MXtCcRupPVnMHxUWBsAaDxNbJn7uUHthGV6HYNpMM1ZJYKyLhdoGSGnJyB2Ff75FZZeZ2wh",
  "key26": "B2t45mnWxoRZmsYup3tNWRBQJ1hpPKGyXkHmaD6jA7Z2nbJGCDiW4uXWnsHABE7nSKQTkBk5LHWiaggUtz1yYpu",
  "key27": "21AD4owgSH32TpPxa7ag3S3PPzf7gsjWLWxZ3dYL5ZdH3JwgccC4z1gM8iM9TsZjUR5nSLi4EP3LonbdzJrha2bV",
  "key28": "2EmXrNZdWfew9KYmPVu277VgR33zcVJej5u5Kia6z9yLbBiiShtVg5vjZP7w4JnJFw3NoG2n72KLLUEFa91B1dUR",
  "key29": "2QucRAs3pFgcvAtwNJZ5wbopzFA6m6oLMx3sPweWqVSBKwDwAPcbSvJPVsQUkBXfVUr8VcS4pmF1aax6PzX3S5BM",
  "key30": "5utShBP61hicwBws71deqXeXZSe52Uj2fYLM6gunDp13X6VfCXnXYWuWFCLsGtEzApvst4pzqX4UBDzRjZyWAE8A",
  "key31": "4DrADv8NyKFytfcAJx1daurJ9VUvWHTmL4jKQwv5kNzBfab2fdMq99LEEGtUQLrQRyD96CY9bpeVGPQUeXGeJ7pN",
  "key32": "4udtNZaBesMhCVy8hWQuDtfmafmZqT7mNdDS4CUdZKxsXXjN3Nkdjv2rPvKnbCqaLoBGZ6C9iMFZ6ZzPshcrf4FE",
  "key33": "4xJsvea5kkgMJo36PsT1J7Quyv4Zw66WDEVwoqMGWDXaryLShaJuCcHjs9FFbTYyWjeL3Me1xyfUWhiDDacXb8VQ",
  "key34": "2ZQGdAQwaWtghk2eAtv2F6yMsPMETqQkfFxEY1hGRXA8uKfCzLUG5jXUdJXZQ9KzhBd1onn7PZZFe2dwjrN9zgxN",
  "key35": "3bfGT5RfAZBhkaprMnH9Wq7SHJzq3SAEmPGzW6uxWggVLxPYEqqZNQfWGnvDiWPvjkHJQVThFaJrGmMPsMwTpD4G",
  "key36": "RBpBmcWXBh6yNnhBwj657FbpWNKmqHJc4Pr28Y1uYxy5FCXrGrxRRUJXaxLtxFE6SwfJzN8G4AP48mbuN37VrT2",
  "key37": "3UcpWJMR8EmzMrvLpnLAGA9nZJgVD8WEgMp2W5qEqp62BcmDzXSfUG1PPxUBGVwpzVmsyS4aRELMBcuGQ1BYCzxe",
  "key38": "4z9cbepQ283mCEi32u6FzZFUnYipctHTFtpLnC7CjwMftSqBQZBJfHLXba5BLPPty5KQv2WhCJGDVoaBmpbDE7SA",
  "key39": "47cStDmHWSqF3q3pXgpHrzeUNe7tSEfmQf6HmfBuv7FqHzCdScxQKbh8Ruk7GbbDd6YBBGqXmJY17NihcSb88d3z",
  "key40": "2K49qypNLMVQfRkphF8gWwEbECmXb26FosUTCvQS6Q2RBShgW9t2UoPeAdpMg2ZLD2Au9rrLMtX79pkFum7RtsLz",
  "key41": "4Wq1gy5WtQqf67JeFjPhyoTvzhaaWoX2FofBkTKNMWxJHmxnhPSN2ZofkUYoPBQZZfHQAjo517n7Utk9HatFAsYs",
  "key42": "4b8iLgJFTVtnxgQdBvir5djJVQkG1f4EZdeKStk7GYwpT2oQTwhWE6dGTDZwQxHbozfDX4j9zH1XA1jYKw2wAmrB",
  "key43": "5co2oxNtcAJfNZ43Pj9EYg9cLyExDvFZyCWKDJty3cVva7MpUZWSRKQbb7uhrypHkFWVPbCAhDVaNdVr5yk5Vxwv",
  "key44": "58i3DxXALgo7W6grxsJ2iVn9D1xWVPa3Xx3SRivssiURe1QWU7r7QE3XdpoWFFSAgkBYazSXZvEw1tkryV8483MK"
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
