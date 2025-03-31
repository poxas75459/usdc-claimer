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
    "3FR3PtDtrjAPFieeFNfa9dY3qpkh3g9591SpMxg1nF9FcgELtHbL7qLUiEGYRVDWbjAS7FLzZ7wsqH3pqNs4DFph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jWSvrLr6hiHV74wFx5UHQNXnjRhvwrfzfceUKNsQQJLhogKbQC3LAJwRgqT4VNts2yT6FVfR4cs1817GP2kZads",
  "key1": "3BSfAEwe7zWa4QyxYP7ehaJ8dwZSMdaK29JFwZMBpgiJYNhtibjDmGQiASwaUYh1StiuSEN1mNmzujjhpTbu9L3Y",
  "key2": "6LwMNQRWh23C6utgQosdfsyheYGpvWxZXsn6rKnQCqP8JatoTzN1fbV4GF4Y5kKqLjm1Tk67q6k97DefeYN62GG",
  "key3": "nCY5YB99YqQYWC2sKpM15cMFtXixZmv4L1mpUm8MbyvmY59CCnbRR2oyFLKpDFi4xi4NiMnjgwFJh7DtwZjnR1N",
  "key4": "4pyPbgg16mRTiUf9svdW8hkBhXhvFTCW7zcNM3AR4Pr8CgxuWETzv6Ai9p2kUXG18HPdnb9ijwhMUVRygzKcYQ4C",
  "key5": "4FiijhYeJX8wH8JZC5r2UHttrfwcoKMWgZczz9GzzgCfgHLkXBWQFKqiEGiSjnbRYMJGx1BDAU69DzdKXf74Ddhk",
  "key6": "F5gk6W6xj2D9FZw1iweynWLSuKf54FHxyBsVkwNABRrbRJc24nZy9v8WLhvGcY1QPXh9Sgp7hwyyyt6b4oYRzjT",
  "key7": "62fvvcdEHD3gdJvZXYdAr8Dx1pZyMJQFJrEJMA32dze664uwMKnrW8EYS2PeXrdNwYaJfiPJBidnYMZks4ijUzT7",
  "key8": "4BEm6LmzTdVVJhZBk7Tk2FjZzS62Aq4T8gH1JCSjmMJDyfL9BtHXJviAjGfLVPd95Qr4aeVgKpHM7aoTfRDCS2JC",
  "key9": "4GTqh1j7jkRayBEerpQAx5rkBnuguykakXiuman99kGGuaT4f8SsJ4rQ2BLpAJwFJP5WdaQGsAS1GpMEQAhcRQWG",
  "key10": "mFQNQHjSgQu8SueNoKSz9TuZyWvHoaYeNot4hNxvZhyfTeuw6zSeBAV3WCoaEe3XP3dM4oUTodFihyJVkftLKa6",
  "key11": "3tenfdRVac7xxwyFRLdcZeKyDfd8WgFRCBsePCwnUno2aZ2jpSPVyj7KULcVLPpEHzSBJYZ9Hfr1XPxpv2AdcWK1",
  "key12": "44n5jEomfDr3Cd6wf12uGXKLHSuKnYehLD2gtXYhDod7SNsZPcjYQdZzewi2RknLAJGy5gGFrGH3ZEJnAcQwvgeD",
  "key13": "AE9HEtNwYrLbuZcdy24QsQNtxoL8tQ1DpAmuqC1weTFDAXLByKfaFg5QvUAuH2eGR3BR9MyQs2uK13Pw9KwZ7ho",
  "key14": "5zDNBpTUQRRuAwToqKkzcFdLmQZVWLeQPhgRsm1daQKrkYGiT6yT4ak5Udvf2gY5Gypsb1RaYvpzEswrpDVLxe8D",
  "key15": "5jaWPoHy4tx1pLLwsF7daXQqdxSJgxrHmwuWwiPVLST6wxKrynRn7pPtYijA9gQgERUw32fJNRP2L96MR9DMMaNx",
  "key16": "3noY3nTP2Cs3NY12CBh5hAzMLwcqFEvfPiGPuohnHQmXzzjcK66RJbLVqrSioUAP2XtVrA2LKAamjVtBFYHw2mn1",
  "key17": "yJanAeJTCy7nXkZWqqYJ3K9vWUPgcYi5wCostnMiCQLwjPY4hZ6g3knPYEFbG5pJVcsqnQ65KdbR6pAq3WFey7q",
  "key18": "DEw77fcWqWQB1soVBSzjXjt4g4oDzDLTs9gy2ZXN7FV37Q1KZaegcfy3rzkdxVNwHk99NNvuZ7FHQeja9igBRJA",
  "key19": "2ciuMP8E1MBJYYDric6v5iGoNmNFKGCAgMXRe5bEaKjZSzRBhdtbLs9srxJVwgDajjZxG8NSdyY4cgtRN1TSMc8i",
  "key20": "Cx5oLL24kQWX6og9F97DL9ky3dcM6VGrbNuSMLxq8ALqYPMPyTmic8cR6nxkhwGcA7P4WVCGAnv6nXGwhaMnuug",
  "key21": "28xYqFyQ9TRL15vuEHrAmoWhoPz15r18cpGwZfic7u6Avdn79dzVRRsYNGza8evMmCfxt37Yzz59R2pNBgFLhPh5",
  "key22": "4M83t7LuksGPmbxEdmop2T7F93UacpMD43BqkktPEFpuPPq3SwKcgnQD5vWNdT9pV5it1eUqCqr8ArXENf6TQts3",
  "key23": "3gaYyrhPtMZcJ8Cu4vLpfWAJ8zTB8EM7zcAdE7CDvYZv97jicwp9c3xVsfW51AypM3QuuE6wGgZk3G4qCqWPdCX8",
  "key24": "4UwfgzZokjauPyXrRjga7Bw1pmDrphVFvNAZCiUPCQfHn8neT3gdGJ4nHEvrN4JvAf7kP8vjWc2mkARL6ToEsNK4",
  "key25": "26yJoSB4vcmkxngvnRZ8aCT7Mgv72oQpEHic4KWw5M3uVoo7X2tKBEahcrhCpdjHrGJeVBGh6WGCwQktNSumWBan",
  "key26": "4r75w11aydzLfqaWW1zYUGJzuBqu3485XVNV3k1iB8UuEqoYe7cXXNC8NBugodNFpBAKuz2gDXPeK1jzyThL2awT",
  "key27": "3FQmN67J4G5SELeRZkRgz3A6ZzbwfP1BJASNNUV5eaEeVuf6qUbgWHRZsgvSTmL4bziopq7PiWVtC5uLB6STJPK8",
  "key28": "3U3EMBpW9MDUcuBSPYsXeJMWvaCq6puFmnkJrgAYqziAbnQWw7yDuNiASUVNvvHXv86nMj8FCGjXXFNX9RsySzk9",
  "key29": "5h3W5gnvWPjQZFHCWaXNXHcctXiVsp39PV9VMNrEkJMiGTYL5cHGT21v4qjamhzDbj42cNZGpmEFsG86mQ6QmvQm",
  "key30": "2snRBZsDb1LpQ2WQ3DHNSuFbYJV8b7dtiqkzdcAaPRLidFRDEBAdwkTipy5BgqGnHsEoS1jvBtYxfqUtUJd1Rbxj",
  "key31": "4kp3Asyaxuk7pUQnv9aTFgDhACF8tXaQpeZMbVddRGvri81DgWnzUm6rijVmYFqeUmMZQiV3dHsmjxBmi2xhPSLV",
  "key32": "5cW5X4p9a3KzBhZwfU6A8uan75mHkf49FmdTjEMxJfZiLShJm2hPxgcc3e87MPPkfSxXm8ZXsaQ95HfeBLqnEKbG",
  "key33": "3xPNA3ZFdmvyjBx7oTUztmgrNNjXmjfccxieMKGpoLx6SgZuuVaYqsgdLZbs97quHdKeGAVzEpb3siaYGBZ9ceqR",
  "key34": "PK36t5baENppCxuA1F2EoswbR3FiwtcMbqLkRR9FdV3J3Y1s42uyJ89XthcnFWjxLHH2SAP3S97W7zWiqFnArWJ",
  "key35": "4t3oxNv6C952eQs7MceZYxs719Kf9XqYN4e9CCWTiRhSp9vmBoVKTB4JyJghwNkR43pkFpiJFaJn14zN2zUTatpA",
  "key36": "3iqKb5j2iJi3zjNcYPN4azoJRrpCaNjQcPKqoHBPkZjRR6P7qEUj2iuF7d9hBaYGjhkndXxNh98A9f265gic229i",
  "key37": "3vK6ta2XFt6P7H56N1p8rRmfGZDkzbpx7HJZWYrYuB6AFdbE8XAk6hidavf37k6V6mhxpRbaoPfJSNWAXayK8scV",
  "key38": "43XQksGhsPQeJRU6A5rxnzNK2nTBiTr2YyWgDZXZ8NruXzh9ZygGZo4AWVzZSPqfNct7dDf2ovaKkDyhFbYLqVcF"
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
