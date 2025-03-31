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
    "5FUh7AHpB45DtCPvV4KiFRfpT2mZXbvu7QPnjM2md9W216PZhY9JBbbyaGZg8ecFu4BPs2Zek3wMAwDtf3zkBTNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUttw1H69eCQxtr7xxJBP8Z6h8BBdEEjWQvUFbm2ekx4FaPhEv6rpLRpWrJvNRHTEwVp6TnaUMLUfQ6m3CJpREd",
  "key1": "bPMNbWnggEF2PorzKroVPLkxPaWLMbF5MAtrSPJHrAYkwrTi2NREtHWrSJE6wR5f5AdPPXRZGmqY9QiyUXhMzqi",
  "key2": "UhiWeKMJ1dGfqzif8wbypCbr1qTYwE33pefwchX3C1y9KSq6EkmbHgi3c2yyekCrtNUxY7o8TjuJvXRLSuboedS",
  "key3": "3jFhtEF2KM8guEEZ9Bh6CgBRrQoaEz2iU5nAL4gRNPfxoCPFEBw2neJpLnpp95D5CcSmss5H9Wq9sBzE9PE3NKTi",
  "key4": "Y1zBUftxah3ufjdpgBCFLrjXsX3PSpHNpMnDZrYiqfk6iZNtkMcyJdgW25hPbcFX6sUiaWLYyrprWSvFua8jYxH",
  "key5": "58Vkrc39gxwZdzEAHcL4rdmMqaLMKYQ62Xs3grxvPaop5xFfonxTDHuDfBTervoiLRJupVK6Ya3RtjUaJshKGcz4",
  "key6": "2WXPkwz3HCakTz8ELZbvHTzjFMFGzcb6ZjEL2wmNFBak46JxN2NHZV38tEWDoe62vxTVFh8vapjaMmrQreEieZCc",
  "key7": "59YCLp5ES3qT8k8Pax8HQza2VU92voj44F1TmeNtMpvjGbozZaXFcSJzavBp8QQyb9Usz37yPy18woFxtCzuCnRG",
  "key8": "5BJ99uH8GTcsyjV7hWhQuhU8TC53K7RgBVgw6WNBuCU3X4iiYgWmxQgH2FWw86RauPuLPRmGCBcaLb43JJuSh82y",
  "key9": "VecDBTttwJmgqPoJZzC7fieFTtZELDsP7F7sNhFC5tKTDJZXsNmZ4Z3uDjz7QFqbRfTuymKdReQ1DjT9aqNJGnK",
  "key10": "48FBFAai3B2LAtr2CHrrAjHU4npgB44R66hDgUZUHRHTbFS79aKn818p14SgDuhCSpjMXoFvFphU1Hg32cSXoVhn",
  "key11": "24Gkuy8Z9oH6B4KxagB2FLPBWcXmY5svDjBdxsrWbFhJqUpugoCsuocqiDc5sRdsV7W8AqxTfAiq6Q8JVQWu8Z1A",
  "key12": "66xhqk9Hzxee71FDDX6ZDkdKnu9oHZhgMSdxMYhTpLBFvyi2bybe8JwxLBJksMC569hPv8UxozsTNiUZJjJ5unVo",
  "key13": "5adLgTeoCvPHzdWXcVUF3scsCiSZn7gTM3qgPAQfa4UkPkYVYrUKsCbwRfYZHyvdgMN3A7wqdwtdqSmButiQ2gWq",
  "key14": "246pVdLaQjdAfJTXbnbYubLiE73zszYnYw8o2APT4SfNwV5i8KiQopmdkjfV3bTo1RJJEQPSV3pMnyWYrWwpENBW",
  "key15": "2NEFc9jiY7Nc84FS9roVHk5C4yRYFFHXMitzW953JNHzCepFPLLutY2kcaMxG83Ro511taiPFs1N2WZHqeuY3Gw2",
  "key16": "2CWUbS1yY3gSd8kum1iCW8m9ZGfuBV3EN26XWipBD2kkE3iGpnDQksRWq6LeUJgCVVNHbLWR5RCRupnAC6NUUhEz",
  "key17": "2McMXmuqXrpLCA6TT8PjWeFhaXFmMH335EdQ6wqeaK4n3yNjRFLM6ZUnVFRivtoThDxm2GQnepgth4sKCrRtqiMG",
  "key18": "5g5i6uBtPtFvZx72tP49STEWkPXyW7dbbyTRyTMRNnsvAcLKwkFpU9KxS4dNB4qDhHCYvHAo61rvqaxEJTE4BFvZ",
  "key19": "5uMmVZEjq8xiBVbctukeDzrnWbDPk6fzB6Af8ViyG2bu7Lw7372vxPeYuWHiqpyWqZ7bPNUm9SieWCKuQJtunuRy",
  "key20": "2kKzpdBci7fH8weYqpo2LYtBe59CzYf9E4DJEfBXvS4z4eTvTxFvfCcz7hc8tSjgNNhedgfB4YCBejb1EUijPJb7",
  "key21": "2fE8C9tqUKfpfshT9X4vovA6hH9NMoAUtzqxbcXWdKu4TEkBEnNgumpuwJrg3h1V2Svwfup2o9DihxJMKLBU6xH4",
  "key22": "2YX288GZrN9x6fRXMYMPMrmEs2Tz96MtjJc6S8rU7LKEEdXpyK4mFBqoj8G8y3yi2fLfFmghGWBXSzPDsQcnETK3",
  "key23": "3PczcsiCPSLCDTucoQNnCyun8ukqw4E2hhYssgCANLWMAajdGKdKcAB3WZcn2vzbwDRz9BkwCzFgrC1rkqtgjfUq",
  "key24": "5DZRypvw5mdNWmTfBR2BaUx28xqPWiD8c2G4mzTseuAwBDJRzdXSsPvZcTVXnfo9F49uoQoFJbdR96vi6oaNULR4",
  "key25": "4mcALXARYZN6gZo4uogCtadaVLJiTdT7AqZP235DA6hddvV15Y4zVRRAnSN4XhFiozPrWxT5PcHj2t8dgL8kgKbD",
  "key26": "4gD2mUvsnxtesNbETLM3MSfCTcX3V4oUBpaPJjrsnhzopBD7xSjPhSp7MrXCpmriwWvFyqvncF24VjZVThY7gyh6",
  "key27": "mRazLmN5ByvNJeDUnRAbFi3SiKqsgxrMn97UmscsEpDH37uh7oTCZ4waPQiJcFvATZK1RY3WDZm8nFtc76mQSKU",
  "key28": "3WMWP588FUERegWpmhacnVjXkCuS5jMJwaJcu1azwbzFRd8gooQdDWkDuJTfSMy3A696rvUGg4YxbyKGcYpUh6vj",
  "key29": "2G8uT4y5N4c8fgFihWjHoiTEFAgKi2eZUwnbjxYnMTn8EVgozJfpzVLn4UUx5jKvew5CUo7n2K6rWvkXasjGHFsQ",
  "key30": "52KgKVCJkPmLykuS5NzmZURWXs7H6TPMKN2W4twgqubZKVMz4z4mRJMQQJjmLRbVaeoW52mVHW1J6ykprHKPTKtt",
  "key31": "3s5rrr9VLexk4fz1EDvf77unAwmySsv3Nu6C7QyrUUykhnY64nUiPwfmtmB1ak2LFvbTTd5zN9iSDVZwWbQUW22b",
  "key32": "2rdsarcud6N3zeDuBRKtN8tHjRNzWW7rpWvDjLph7UDywjknxaiuAUaQRyVeofkf1uHJyDnJtdTauvEubxPAkfwR",
  "key33": "5px1pnDEUdFnzu78KsVJLq8R9UgkkNE5X56D5a3s6ue4qEVxr6nYip83kskzjQzhLVMF8DdVtiSsg4WW8iDsiNdt",
  "key34": "4HR1J4fVLBnq5DEffp5SjnsW5FBbMGc53FHHDVkt9Xk1SGHjc41HMbfU8VFRXn31txRzpdSy8EZdNV4nUDV6B2Rg",
  "key35": "3TUHMuWVe2kurEFSH7LMWsfVYtu4c79GXG25Zi8i6uVzRHrfMc6X6rpMFABVx36GTec8QpoMgiorjr5vP3es6sLj",
  "key36": "2gCEwfFgWkswjovbNm3QXBfuUVj3uovxJxhtBpw5J8mViKC2RNUiM6JWaRpzz4MtJ8T69A1XnADQNfoM6xfG4sW8",
  "key37": "4oRUGvkFD6ubx92z3x4T6SP7M6K6eWRspty861EwpNotho6VWRofFsra19KKptieNKq7sWptG8TLTo3UK9z3mnHz",
  "key38": "2TvKZRZXLhvfSSS42fj93ZD6zQ7cjokQPhLjRueK3xoDxt8CXXCwQcESQm4bCvhz83J515RHhojb6BuL2ZpUriMQ"
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
