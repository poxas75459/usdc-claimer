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
    "26ddtxvDkfF8retZuq3TBEC5hAccw9ZRCBbamXtLRokC3t9xTDMAFL5Kwc7wv3N3JWVxzorxUCG97nfnywpnW8zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UunRRaQQr7Hbdc6VxFzGCMvuMwb4NMkwW1dz1QoGC5fTA8LFowLzMYGaZew4ruaHafwfxBSXzi464DCEPnpW3wp",
  "key1": "2YW439NvbeqTzR6Nv5yDvo1x6rfyBsfCzG95V3U2FZeG5kiSf6XeXEwXGfGpXXXnkfJ2US8c5ELxoXKJJyPLdLby",
  "key2": "41ptpUeR9dKznEy3QXW5oV5MCTjqFLkZqPFgwt5MDJ3nmj6ton8FUwppBHz6cEz9MTMyp3D5X8R3UAVFWBYk48Ls",
  "key3": "takoAQnETwMp6pwzcfzLJ3EUsG8YBGXsftjRZiGn3oC4gPJ5vE1xdQNa1nwT3YPJB9tts4ro6ZSrfY9seL48aM4",
  "key4": "56ZYWgfdjXZipMhrAQQoFYNUa7pyoqvZJKkeyAzGkRv4EdpGNmYYwhtuCVMhLg5aQauobL2vDF8UZ3c9buGjPNg5",
  "key5": "5FFco1bJ4iQrJpvrCMY8VnyUN6zBXR9R7Z6LcfZcoJXBVaubSjmcUNCajGVHbCjbZe8b2FMByF3N7d5VNEUVhmpc",
  "key6": "2xQts5KGztdeFGwUJe6UGRnFk3pVXGMVcG33kYN9GNf2zMVco7afDSjijGHH6shAQm5vHZDujWRLKfY1yqcRcYU",
  "key7": "5LG7eHbQHrLjHe4BNN65byHcedBjYgACPxUgw8gZ6UhZzkCDgQoXbngf2Aqn7hnUtjbXTHurYeN7AFVRmZfKLAhm",
  "key8": "2NsGDvwG4Yf5PD31pUJ17jvhETNenSPqaFqVoaGJQerWTFcvDR68H4f8Hxq76FCZW3Ckx8xCxW6woRmoK25fMRHb",
  "key9": "2rp1vUhEyJA3S25sJfYB7jNmJvNx6A1zRPZGf83VEyTmUJro6Cmevhz2Kgw1m2Uzv4wh4Prf7J1yeVJh6yzHmG1r",
  "key10": "2xpZ34ha7q876mU7SHPeLVYBuNfCFt6PZewWrPegmXKqYv5MfV49hMJXN5zrZBViTMLhC92qPtDCWNsy4WirYM1Y",
  "key11": "8Vsi5nQ3n76a1wRAZCc293tDFBFPhCkHzkTg9ZxaUWSG6p5Ye1qG7KgeG2yskvFRAw4V9xJB6XA6tY4fTtaHh3L",
  "key12": "5eetzAoo37YiQk2u8BwEHQc43YAvk8kzPJM2UuhYbskWzSuVyyvHfwFNZro32jtW3jet4cKBaEpE9kwvG2a6oJLs",
  "key13": "2eC5HYXKhEryAQ1da4VEvB28pPcXKxCUGX5W6FaNnFsycwYB1deFgRezviRRpprvSfCkRrGLqJs75Rw6pQymCvDn",
  "key14": "2WZ32Lkzvxw2HS8a7aLn2N6T9T8bmAB5tDGxiUmqAgUztTfNgE9msV4rQwDozimoEdKkFBXuAU6H6SyThsc5gyrN",
  "key15": "3w3ahZ3AJNJUvc7Gd3vSaA5K2AF22YQpXk5HqZsn7NvWFefyCWEYCJFMA9Tjd3ehLKXUbMnvN61bGbRBroAVPrHj",
  "key16": "5wk7ouK59aEffTeH7JehrZMNssdhcp6aufMp7z4QhKtKVLVJcfKomCU7cMm3CkDH1E4BMpwWQ52KKKZbYtXpPWZY",
  "key17": "4CD1UWVYu5qQUWc1zy27iraEsiqAQCredZRKc73Ci27pdJKPMuMn7SUTVUJDBbstH6nQkddNFUMD1mVLfugFJaGa",
  "key18": "32n7pwX4uLhrVs6F3CrmaSDuS7zX4gMMuT9QHYWzWZ4XoKy92gZb6Tiq25rHD69sf6v1qEHg3xc34pTjBFPiChkW",
  "key19": "PjiE9fqKn2YZn1jeVFEV9AJePKP9nwon7Rd9Ljd36VwhhJw8yFPkTRpKzLo8FvmLurtkTugUcHxkZAdpx3LjFFd",
  "key20": "yCizSSttQD9mV86gUTr1cSWge3sU8pSTaDsGfkQu7JKD6Jys5Db9o31zrK2bkAFjsWpBnETKMQvWGGERY5Eegiz",
  "key21": "2LRseYsrZnUudxGR2kd6nBUiRXCrEERoXiBJh1NGpi5XtW6QkkThUEnUF4ihhyM3AsiNsdvqrZpQR75QAGsQ8Tn6",
  "key22": "5gmueCsY9hmf27cScykQ6zsi7iP1LxkE2fHzvkVy2iWqd9L7F6dhXc2RFU7bp3VDD7zGqSDAGUiYdcmrCmGK1peB",
  "key23": "2HxZc8Aic29CrFKT5nANBxApgo6vLjuq6T1KdDYE1NQPd45NsYTJdMBheUaYd9cDdEdZQJam8UDgsS1rZ5QZE11T",
  "key24": "2n1QRSvr2u4pYyXL95e69xPQyTf7nyTFJNkRGuHaEn4vtUsn6tgfYn9jZaExqkGdDEZzKnNkDn452uQ4Edz83Eds",
  "key25": "46KKM8NbqbyZXMDi1UJ1BALyDQ7Ja53mpHnAXFwBZBxHjxdQDQMkawaz228Y3eAUoP66YyBTk5JnTFqwm4uiY3bK",
  "key26": "3Fnr1zogbwBDVVtvTonTBsmuy3ENHaoVaamzS3QYGE9eRBNmkxL8ShNJCuDEoztAHp1cVSBwZih4HW298t62WRJf",
  "key27": "5A6DBQMiqirxkDko2UUP6NKQcZgBGAyi4PxJ8mRFWJDoLtYeQzrTsH6aaKyEu4oHMnfM7fUWhY3BQfZs3BSQU83w",
  "key28": "3cRs3ZU9rMqVfBSFSauGPy4iDzbXLJLrokhxtWAWNgpvtkQFZhDEPVTKL6pMVib9jhbaSPSMwMArUeS62enGxeSz",
  "key29": "ftNnvLob53CYrakcZedV2AgHXNvEBK1rEyJ4fSQQWQHHUNTNSBjC2X7Cdok6cqZZoaj98mVAvHg4woqPS4mSypz",
  "key30": "5FMgpU1aTmsnZgnLdP8aob59SaXB44D4uWJ5aLYKHauoUEnsiTiowZde21kZvKunoYVAhH3NAc9dGJvoS16EHSic",
  "key31": "4QWWQ7Ng1Ba3LEvqEbS83pMXZVWfZ2yn4jYFDDtjaA8NgEs78UUt38EMP5VHd7817EcCqrD8ojusnaoLaRUgtrQZ",
  "key32": "5JDt6xp61Dje57cA7uBoApE6LGH7RBs3B5ZwnCW2snaeKLCa4eLGg9MedvTEuSzUyg9U8UkphimTe1YdsZCt8vYu",
  "key33": "2rcz7MbuANMEFVNgkgQwcxmptqiZ9Z5uhBMRLyZfbBUysbhAKN9zDLrcc5uagEJtQYj6vtRQGyGMVpmcHpnLC6Y6",
  "key34": "5RiBwQrYJvoxWUTNx15mAxuvupRwd5W5JmxzHXCWvvmzYm1euKJd49zWmZrj7r6q62mgBpyp4ug8eQ72Shaauz5B",
  "key35": "5bQyeuAp6ba6AdpXjgTGxyPXbxAPcMzRPVHtpokpaB2xivHQwmtEzACnvdbj4zBT19yDj6SfrFhVBbR1NZecEouh",
  "key36": "3ssBk2NRZZNVWeWJhizibz9ojMWzB45yEWmu82bY8WP7i9VnkeAv1kXpu9i1kmj4hLNTwpLUqnc8kjWGvEktFXsE",
  "key37": "hpXXpqGdmyssPGsfvCNbZRkqYoowJio9CRnf3sgutdZxg9nySFuQCq4tKrjytUZgNLp5cEqv2bKNZNpHM4VBef9",
  "key38": "ZQCFmp6MQnuUp1HuXBRfbYBELU9aFnxddnFqysJ11vnJsbAV3N6bCcyACmzv59rAXWfWoVrNTaz8YAFHoNcRuom",
  "key39": "66BP2UcvHoKxHp8JcGRvPtjijcrpkbhuuitS6T9kBX38TH937ZtWEWsdSqjA8yQxewGcVSG476JS4K9T9Fp1Mbjk",
  "key40": "5VM3g1RNheLqHwakpAbqmxdvNuC5AMDJsT8skCu63wa5TLWVY2q1r8LLUnLnV4zNkoMWX9r5mXkbwo5ivhNHrNs4",
  "key41": "4Hc4qNE9J9Meg9Ee61fGfnz4pjaKy1VQ8cJDQCsUHVw1RkK4JREgmT9gamrV4xdbwfHuAGz5YR54JKTAYxSkVFNN",
  "key42": "3FESYRPKXFCztmPPAMAAzybcqRrBdvTDLMwPMa6DevPHRmQkBac3Ac3uozPPuBPExcCWmqNsTnvuKfKU4bcigApi",
  "key43": "3s9VUByhWuRy3rRvX3q9uGivAtc8i6xxUfc9V72sWP68U2WvZfT6miB8QfWo8urBm3anLPVkWfN7ik311VR4WVL7",
  "key44": "4BomqKAV4BqHeYRvbz82pkPCxscZGZmuZso9SZ4wCaGsNNKxEUMBx7tkFUVqLDxhxGrDTVMNB35aitLFFpqGeMAP",
  "key45": "29K7Xj5PXL8x4tJm9d3gnvrb9PMmBy3EjNxhEvg9mnG5ZxhozPkt23Ax7NiQcSLBCxhK4KrnZaeSuhoqL7Br9XAE"
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
