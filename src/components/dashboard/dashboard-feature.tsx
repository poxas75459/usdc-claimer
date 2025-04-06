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
    "4mJYBfgZwNJ4fNdd9EGuXHYbb23okDqFN2ycAGxbgUizdarFfETxJapgD9A5G6cTEQFEgWrGiKaYbXcAhzPHQhdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPWwyHBDwhUcfJtjKaJom7t76kqSXRazY8148oGaemwMSsejXuH84mV5Q3wJgkWo1KZcmZ8oKyJMzAAA57A8nNE",
  "key1": "5sGT58vqtHpJ3DGmS7pHmgtLkrGBk7U19WqR111sf797Wsz6TKAsHwq3Dc33ghpfVaHnU3wcXAxkeH7GehejrcTD",
  "key2": "KafP5vqjB7AjZxjLPm9nqY8A5JPxfhKeWRgiZrZmtCaRXiioRExBAwN1n3UetRSTzsLofuU6zTzHyYHBT73VoSN",
  "key3": "3LqTM5gAyEeE5e2cjJXgE2WvvA1B7oeLf49kwUgjf2yBSU69UuUwaSKvzAqVMqm3GuhobB43UJDeXoFx73zNLxrn",
  "key4": "66s33kvp9Q8HdtFmf7hGDjgb6T6fRt4QFUg5urnQwZBFd5v5f8DHaQ2qQTfLF8FFYLkUeKN8rbmr7ZD2SEwGWjFs",
  "key5": "5XCZu9PeKRfmmG3Tq16b4Y7UtduwQ1czbdZFWRDnDQZzwvFL6mcENHitQJCtu2BMGV5q3325XDkegW3QdF166XSE",
  "key6": "ZMfQ3pGdLPhLdLp9kj9aNeFFPVEAnueNvC17EjECjEuaUwMaF956c511cA9MpLVnwLQwX6DA6w93SfJCXGquLYV",
  "key7": "4242WH7M7rxfvcSEGvJRhJ5aKqBKbW22mKREFTUfh1HQJnTpAtZBfRoYaKB8dU16eJT79L1hpFh5gVHDNAXwnVnc",
  "key8": "phedZvo4CpFzqzAQusXriEg55xhvRPYDRwYLCEPxXoFUmMchfxn8r68sTqzDGombJ8B79AbmoJ44zd6LVaeCzZe",
  "key9": "2wcRYJnTVCcegEnMktKGc5xSt2gjFNX1LAqPuJ1SBEDAR6X5LdxmdNWVidYPrLZaWjUz3NkSnQ7S4zXvmXi7Bkbv",
  "key10": "GTtBgGwVaJyGrDHMUG99paNCFRkFdfJYVQT5Xrnccg2FAYX5ckNb6TRWyL4Nv6mDwxDcv9QDEaDc6wDh9PXcfQ2",
  "key11": "3w6CZki4PpRBovpSqx53GfHcKGSgzmPhFczWthpfWu3f4icB5GGyDjBdBBNwtTqUGFkDPD3W6DWEdQaDfWm2Asr9",
  "key12": "3C8wsse3o7TjzF7eHwP7cmXSBHCtNtrZjz1tSsZ7DYXyGvpNnaMMidwmbrKUNpsJoC3itYgMwRH4BzrVvU5F2ZEL",
  "key13": "56X3DSdhfevQdG5G7H4Y2VEgNvhmuRSFssfmwHDim152k6D2AgXZuaycmDu7fEppAXGpbKjPfw4DbqcVZDbjWzJk",
  "key14": "2c5VuYjAJA6BoUXcb394tUx1qL6eVNKQRazQ7XMVGEQd4yVd3gfisoMyVM7HJpmzow6Pyus7H2P66WJtXuDA8CHq",
  "key15": "3nGHu6zhu1sjzi7jSbjArYv7vnEULM2ufvdSM7jQu3LmBkywMRgi6uKuXn1se8mx157ZeywtRuMvwRDSmpJz6F1P",
  "key16": "2TnRLyivhmLF1MER1eHfYaz7QfNXXryb7nSs1oR3ev4rbq6iikUj6wnPeYcCa9CTTpJk5uTLwZ8d8o9KM8HZ3XEy",
  "key17": "3n2r7K7kgi5jJfuSNvJizittR1voxeatfWp1G6hBRHGgC9vby3zh5QFa1gZqD666raswXUwqsHkRMpnm1rZXMUba",
  "key18": "217EgW9LLnNEhnhDh687Lbt4AYPVZ6hLXsDrgyS15MvSSwrmvYmWD8V65qpwvyzQ6JNT2HkXXzux7AZqotRTmper",
  "key19": "4g54E5iPfJvzwihQUC5zx2zn8AYXG9d8FaBfStrTrfQj6GM5yBS8fPZeyAdkaJ5G1WWNCThB4EwXgCRP7eG9ZsPM",
  "key20": "3dHrWqiiR3vHiUMGY9zcVktZYLgrVxyJg5QD11H5axjWoSPENbizS6kVoJLcGo8MRgCnx9QTqAxEMtxWbey3Fr6e",
  "key21": "4vxw5VyAiqjjvNDKWroEebnasmhKHfMpodjwY44GY2cxMCL1A9EwZCV4jxu2znMwkXxSquC56cBHTin4KB1S2ijU",
  "key22": "3P84uytF1mM2W6Fb7V8AtKUzyF8kDupZMQdvJqCxUs4Ty7NwqYCw76vyywZWSdTC4YN4hwhDuU5b7MQMwmSieFTk",
  "key23": "4p8dSEGmAHCHW2jsCdW5wY3x1aaTKTustturd5MQdf1FDGFLS7s3w7XsEtCZvLrrzahg4sWS66zQvpDSzVmkcHn4",
  "key24": "3htyXzZikVZbuUBugFgKfB6wwgcrcVDN5TgUv4fnWhvBqPNp8xFn6hdf7MzYam1PSTfB1Kctm326v3AyFE46ccc2",
  "key25": "4rPMrUJFjEMyzXTPTJGQmFrpNRVevUrePT1i9xmrF25HdVTzibGx8ahqzGFED1JVitHogfft73VAiGdAFLpTyGky",
  "key26": "errMCqyazLZULZLvkVPwGCLyejgcJzoN2gqDYepJ2syvkihUJfyLug1V5C3MV4myMyuGg3xYUtTHDHnEh5dSs1T",
  "key27": "4MGa8GgVf3FsREm29yqz33eapSRUt55ESZKLcYkcn3HwqZoxkbjouEciFHYBjNnoNEZ2NCgVDJERGFFfEpN65RXi",
  "key28": "4ZEPPBqJ5U4jufLmN7RjoTiBqBo9MAfQP26pWa9zBj1JqJgAXNhfjcbyei8LZUjc45YXFCLxuceV6auqsZdPRSmM",
  "key29": "2VzMNHo5a4xxQjQr6ZjkEbF3ihwd5kRjiCyAuETYypkpaF4dLpnZcXr2vXsUyXxzZpBrhXH6usM5k7Xav4djfviM",
  "key30": "4AyDkHpzcRihvrKnWMuZg5DhhtgSdGWyJfUTJa2gxSwFiQwcJGZQbKFS4sEeHn7HKzzmRwKbemVRP89FLRyTWsc2",
  "key31": "2CNKim8UVUR7Qh4zeL7z8vJDZPW9MoNmoGNtj8ZM1TrmvzannHMooCWKan2xNpCDG77detu6Juy7FjNPcuomMxd7",
  "key32": "4xkxBUaGgQVGrTHqSVeNUndsESVCwwXsFMFF1FpNXtgNRpDSVEdcAfkWoxRJpfQp43xuMdSWrYkLs15ecz3LYBiW",
  "key33": "iivKHaFSMbWXSSgd2TT48uXWWCDj7wYu79DHsZ3A3xkW13eDrLEjiHV2owYFhkUgguUvc3MS5ukCGTG7NEv9gpa",
  "key34": "4jsfJ4bBJ4PyHmuSYc24VT4Kibnkp78Cu3FaDU8dPsaWZHKz8L4nhYZU5EXLALBjfWKn8zrGG8EUVJn8qB6ZaTxa",
  "key35": "6ZgecjhYhywuuoMdT6zJ18r6e67JZqdgEBd3trNsribETEz3MqX85RGmqboQ986V9zcMa3jekKxNsphMYenp8j7",
  "key36": "4NXQuuBb4ft6sL23GBDH86ht5VtuJgYZuPhf4U7WxnQdjPLZdeQMDZWrvMr5KWWjtd4aAB5aazc55zainAaTffXP",
  "key37": "48bcGS5AUrNR1YxxLC4oxResH6yP2NwnyZbrLVLEdv4mRZC3z217L1r5GKKuxKZHtQQmoG7ffmqNnMLCi8smkPe4",
  "key38": "x3b58aguvYRWtR3uQiRby6ZfkDbkMYNLYQBbpJJA7ajsfY4AWLXZHfQhhmq6XTeSnS4PhfDweT3djMk741gJ3KS",
  "key39": "3oiyB2xxF5j359CD2gQkED7FegNUCr33cCt3pa3wnYFA3G3QFUcKtTkGtdDWJYzsASQ3s3HphJMdYZ1sCkwaj1qB",
  "key40": "Wfym7a489bGGyxu1nzbYiYNcbrDjSjsohTEcFjtfpedX4hDGQ1akoPtST8DMdCkoRwZ7cFBjkRk8Fze4F3HZMJ2",
  "key41": "2Faf6K69T5JnY25Yu4hfvNGXCRCeiuqgTXLPhN3atWrUsC1aZuQc3bXTCCcPCjLy2oFJRnqkTDMULnp9km2kNm25"
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
