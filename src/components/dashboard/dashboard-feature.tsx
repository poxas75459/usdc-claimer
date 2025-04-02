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
    "31ZTdzQdAoSnY6mgbPYG1D6aJjMxLCLJxoJWtXXAqngBZP8FKqU7js5jFoDfPeYdf6EeooBUxc4ZvWzuc5nrZYDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VdyZSKYY7KZBhoNbofRCJGCXJ97Ko5fbnf8JiYH8LDw83LkoPz9tKNjuNh2N1u8FzXHaEXoc3y5Vj4XQSHZDsve",
  "key1": "4uFzTAZmadq9LVuiamHwEwWn4soXzfZ827SRbeS1kfes2Wzpj5HLn9X7rrRVJu6WAyu3HP8F4mX7fu7rZ44Ctzp5",
  "key2": "BntRmrRfUdHZ7YHJhopQCrJi9mKhKEqfPaHUvg3fwYasF6PokMykDEewS91obmNZsvTmX5G825cTBSPZ5t4Q54M",
  "key3": "2aoyrBzckX7skwT3BsjMBhinPEjgqf51hhLaQAtzjFbx3v1fjLeX7GChuyGjGXxXCBchzcGBJuokiJw4UmSR8yFA",
  "key4": "4dXcj5Fn6LgiHqTCAgBaiZ23YNiBbMyVjF1dm55R2Zd5PuJc3uKhpcYnVTeYbvVXvfRgjYU1jf4S6rFzjWzSVZAv",
  "key5": "UYnhnfJEhn6aa7XZphrcQy7wHHdVhXp6sskFEFZzrJRjPnfAVo3bx8GgM8WDZzvo4iBTSj8kjbJxERpMcerQYiK",
  "key6": "3pjZWYvpcRbfg6c33qR937kQMFsAJDuBYVUo4rMo9PduWGDCeCczf7r5dRYKwjeeWcBGeov667dHa1WqvYvkf47Y",
  "key7": "4bJCxgiobtjUb4LDVwquSFTxAQ5u9noMwumR3NDqHxETddnzrdg8rTATUBRmNjLtBQdTBWpbEES8EhTWmPe3ncfR",
  "key8": "3wqzMHu5aYNt8jeo2zrPKTgDHrcdHTpnn7fviT5uTzW2JYBN8QQS7fyFssK1pbhVAFiGuKY1hrzcNU48KuLyLhTx",
  "key9": "5M3Wa9Mi645Eb2Kz6BXbT4HnGPgDV1xa3uG8PJ79G8KKNcLYWYNLFybz86btJ22H4JEV2JN7VVARezzUxzcgDeSL",
  "key10": "5eHfdzuyq6DBV2PcDh4PJmZiT3rMTHUn3w34UfHxemVCg4GyupCW2LRPPModCYZcbfPTxk7ohAAWU5X2sumPfcsF",
  "key11": "5UBJLD1rTukFAahygoVnJqch4fj8w5vo5hhwcgzZmgPUA7dgcwqgK72X4khocm12As348YrHTDQdSpC4J2nTWV6",
  "key12": "65Ve2P54WDwgm91WiLQR8sfH9m3h5Qf5gnCEPutGT4yTXzAYhr7mo4QWAx37SB4HUJdebHdPxcwi4dznxDieAHJX",
  "key13": "58Wnx4PSX14G9ApTcjPmawHshpnBz8No2cJeqW77v6fJisZ8C4VmBkqccfcRJHCaN6hetM9ZyRrqijhg7RrCc3pC",
  "key14": "31e4xFgKKknA25TLviYPFNhEizJQfP6cSHDK3YL3sB9Kv4soe7LvWxaU5Y65o6nzKdgwcnbWj1MXU3hN1KPYyHGf",
  "key15": "3nYG7JcHHk2YzCjF7ZJuZ7mGii3pKgcxN4StxZcFiNXAVA1i3mfcdYiwJouHcdKpbo7YtnKdVSDY1WB1pQHKiK2q",
  "key16": "4xJKhMTXebw2LiRz3UQR8CnnDjqdnERRm99ftpkmvTFAMN8To5AX8fXmQuo5uAVtrB9Lt6VdMFxtqbQsrCTTko5Z",
  "key17": "4bsMdMAnChdojHCQ4LEj9sgSL8Xo18KoUewYqcZL1biTuv4MRRtMkVgHWcYXLuuDxcVHMLiqbAsJwjNrscWFLVu3",
  "key18": "62UxHHnYJVbwTue3Thx1YNMBzdkvR11Et8SUVDj6WNBrNWipcs8GPWCAZf88gH7eAzT6moNxv9kCDHDyw4SkyiQ9",
  "key19": "2VLKYRF3T261N4teoczQ6cePBQ1DGwHxXd9FsdvRu8qyc2jhUUeR3YhPdQWFAjKsxY1uJ3S91NrnX94mpWSXDcPH",
  "key20": "3UJ4qmSBDfPzqNNqesFk9u7kX4h5yFAz3gbdynLzjYYcLyXCBncrZbKw4KksjF3LCQvLonAsW8EMHHG9o7vVhFJB",
  "key21": "51Vq7Ri9WvTztLy9TdHFt6aum8SQVojPo8Z9evuTRyXPJoB24yq45XVrcWzW3Vf6FEJxK6z9tTFHjmzzLcdeY1q3",
  "key22": "4bmPDHYT2t4rxZKqAEMiZiZNmWBFZAECQfXdzHmQuScCqX86VUoVPbHxhqhuGma24ExqtCAd6WnZaoQkAXkhBykq",
  "key23": "5SVdyBKyYGH8iK1VHLYu8nANQvoUqQLz3koxpsWvxcM82mdZ39USNBajKam8xJTpWse66zMeSikEjhdQGLScEUwg",
  "key24": "KAAr7N22ZSg1rP1oMsKtdSutdrmAKiuVznxcdz1td6H96cjC3RVryAzHG3B3rQSB1wP7Qwwf2Yx7o8kMehFeFsB",
  "key25": "3U6y5notJECDE62LcDLypKu9ci2qjhKHasvzwxBERobF8CLxSJDvDn1YjxLb7RmqAPAvAZ9X6tDmj7DqXHHBEpXB",
  "key26": "65YD8VNytf23ucSU4p3ubVMvQkxnzYbD4LA9dhPAz8XraBRArtYoed13uF3J4KAvRzhRiuNgW7Qqkv2j6P61GC2y",
  "key27": "4wBwEcTaVdCvug9FWdK7vwF6RkLFdgG88BYvKVARtXXuLmfqCFqC1BTm7NPGSmXs2cF9b4A1L5e1EJiU4zMjtYcy",
  "key28": "5kzH5YdKtUwZeX9WYNTM9ApxBrimh52b41o9cJ2YSvYg1LxuweRsfaeDMCrFGX3ttQZNrqENcvNgPK8YkiVwvuku",
  "key29": "3jvEDFNYjKNKsDCaJupAbg9my7GX7rGxi8WauR8dHPw1BrKrDXZsULM3yohxHFUeZrXyZ8nxRN9XR3zsXfuh4ax4",
  "key30": "3h1DqjKECMAPUZYrKNVkmUJ9YG8xSCk9NuLdhGNERmGYsjgSiujvh2Z5dMGarZUoCkcPK1NzBLo6PyUndwYXgJJT",
  "key31": "3YBLtKdGyYz2Tv4z4S4SQrY1m6L3k7iEJC9BmS9tvH4PBE8QL61N3S1hhv2Z8BfsoM3qC69tACpuZ4KXzgd86TUm",
  "key32": "tEWjEQARfqseNgRqisYktxDYbFEd4MurJDnyqcyoRWikvQx4cFjYw151nkcto3z9aUY56ywm3T12JUouXq2UPpY",
  "key33": "5PazwEJhbBXhWMEyZg1CH6tEgmMU55nKrJPqU7aBa8PrZYvtrvVz8Asnr11tQ5KfuQZTqaMxn5djG9EmL277ffZA",
  "key34": "46DYjDGN9JjRkyDKq7H9vqr5aVEBsdzUJYJAQfpzUsEEF9tQrmPDMk2AjcSTCMbUGjJYQAuxxvPucbLJvGuyeTXx",
  "key35": "2zb2CbWZMM9kUfD53LhQ6cwzGP5cSTV6YAQKRdo5gMohsEQva6gR1fLnHojhfoHU8HY8d88iRu7LcxMMviSfrBXH",
  "key36": "2d4KvrJXgWAjkVrgjEmEQ1GyFm71ZbHzZ1kYuX1aURuno3NzbGRcSmxDek4u5bHtikDt9cdLvkQWXY5R8n8ksvqA",
  "key37": "3p9Ei6n7XwNhN8YJMwJwq7FRUYD85jQWqNGWcYapqsX47xbqvq7H7wjkVgXhMS8y9r9Ri9EDjzcGH7dy6rVBKe8o",
  "key38": "5iPGNi1mvpQPSacKiauysvjxEPTVEBGmYJqNdrWMaboAV45AyzXAjnMT3RLMieEZtQtbpV1Vp8UTnLman7SdPjJ",
  "key39": "3dtioF2FmiP9ugUDQaH485mPUvPyYH48KcYBz4aVT2fAAU6P8DnrCC8Qppk4TAhyqEvV47YYPLxrnW3CNbpUjkiZ",
  "key40": "54i2SrKDJugHE2WTFxSaHt25uAx3S8cFjEj62kQVpN2pHknu782FuYmpvmAfeUYCs2tyyfGz6bEhQh3Q8cdTDsrp",
  "key41": "5KZ6gKXrxvf74FXc7mt7w8WxFDKVFfNYHJ7R2NSGnkU4vEk62rzeEcUHjDxh7JUPePFUTxdGuUM8T8ENan3joNLy",
  "key42": "4TTADTc5DmQGuk9gPvJ9zS8mUyrnQuK9G1CTdeEqoiTQCshR3Ug8fsFihePYJpSQvTkrtzWpQGmzGniG9iTYLJmD",
  "key43": "5XMmwEgig6iJ3Bqw6mCzRTpN7g4Qe3jN7nHSHy6aSCrvYkqbLmEEzuCjosaPnjLo7kg1tnnG7sqkLVnXVrwf3vz2",
  "key44": "5pRDXcsL2BBS9aiJ2v9kC9wx2MtnYLqpXwtk4EdNvRx6N5HVrvQNkzqNHSpM2cRY4m17vxTv33hyUt3X9J35uqvE",
  "key45": "3Jn2E7JwBTEKEdGoXLWnyrjoGJcaxNvnmkyz7mcNdetfuGhtmBmwwMEAWhwzNqEVrv6C7rFnz3X693XUCVRQ5mCC",
  "key46": "2U9i4ytqBKuZN33vpbshyrMnSsZ63CwTZHnreVrf354gTdpBKvbQkWBk9MoYgfoixb8CgbK4HbWQM7hqM6Qshbap"
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
