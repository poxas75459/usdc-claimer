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
    "5Wj2tBHZsCUj9zcw4yXzkSqBnpjjGyLjVKkyAMonaQx2EUqjWB7pyma1YQKC4RDo5ZQDCtMEq6g7B3ogXs3wrxqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUSemmAEX3hFZwroD8GpZmJLsxcyoEeTbBbuvKqqx2qb1pbMofwPimCij7woo9fMy1eSzetYypcMxPG1174TQTo",
  "key1": "GQRgp2Cnyf5R1tpEPpvpuQy68YeKZ4iuLW6WYd8LvsgupsZwEYoGTGTNbfVDqicPmHzTLcKJLwDTD337wvvFVPt",
  "key2": "xZZpnMc1xH7FJEd9FWkAwgZQd83TRjTwiww3AiT4dpmuNTMjmKVNnGZH5mtkAqiZrLWEiFfmshaggp5wfwtEYXn",
  "key3": "3b2kdVeWPgwzejDe5GF5MpZamT3zzVqYnyWzkWMuDST8Lt4LhTthk1zwGkxU56saPeN9RJ6eHfsXehYU7k9sNSPv",
  "key4": "3MB7qKYg3BtJdPq6eZeHAudpHN6Smy3RqkD1zQDMyiwWGgymttx1QvDgok2edvAzFa9DQRmJ9E5vWcEkiqbkiS2C",
  "key5": "P47VEmJWg5ZsmatoF1BT4ZoXHQHDi19BmV8qLzTD7JTqRSJHNHoURqe5zkuMb1etuHzKNF1Veh97CNfbDVa6pej",
  "key6": "43LS5KXZ3Le3DQNc4gvLTdnQacH3giDWLw399qUvC17GuS9Vetr2FiPVkjZC9QFSY165nx55nAy8Nw1HkB4JpDKA",
  "key7": "3aY6dYZcERM56fDXpo5TNfwcnK9rNxP5TxanLvUpqTK97Yk6dAC9tVXVCRdTX7k9Hibvi2BjRCEoZw3nRdBGNBRA",
  "key8": "2SssEQ3g3BvCdyxChBEha6e1MVgVRewsvpPw4eBxZRCPjvwUWu8KhBNY8GyMA8Sr9JgshusACUWgqKCL5DE8ExMr",
  "key9": "2uqrEqvFyjtyAnSJDcEzRC7WixuLFTH2t1yEFotY9fmJaBrLaxidfHcGiB8fpo6LSpRrjzZuG2pGAMp7u6x4YQ2i",
  "key10": "4JHhufu4A3Hh5484aVrQMhhmq6Lgcts3XBC83JvBs6LyYoQMQvN2bomFtkhioNfYRdaGozypd1uW7uqzmkcpEYak",
  "key11": "2k7NuZaHNoiAHEprGcqfimcxj7o4BYM8yX1XVa4jfirVLtWDt6df5s8Tw2Sn9L9jFDWyN1h1EsqKnb83QBcFsmMd",
  "key12": "29PgvMdvD2oijpiAwT3n5TvnkjNmrrQmpSk8qK72pqErzHD1BzA2tXG6xoDmPtoDynBpecWLxzq6ZqmABWxcbKQa",
  "key13": "5kz32DpVK2ne4oZhXvHzaTUuFGNJXyQp4aSoGuLvd6oWQafGLZhyUhqjh5MPRm7tjDqdkawEb9yTBYK14KDuRAxJ",
  "key14": "4x4Hjcyd54kyYy2gWt9wKcJGMNcdRfq5TQNpW9unPVq4jtQgWtzYrT5L7CMEADkVeiimKAvSKVJ8E59zpqhK13E",
  "key15": "3LZABa2Rfa7C8TRZgJv8sjJxPDWjgRdoXwTRVJFrA6fCpkVr7NBwZE4FtBL5mJQPb29Ka6ckfsKoD9PRAZPuKJ6q",
  "key16": "rgj4v3Xq4UnEabUdoMNZprXJo8LvjE1eysM2NE3FJPYyWEJo39zVcPwedWfN1nbQpaY8gkriTy2X8kF14LWYad4",
  "key17": "zqXD7qKka6MMzrsvtUABV7Rh1vHyQwuSUXAEaMb27do7iVeHRZqMyGhtmVd11viWtcG2NANUyGsoN91kPZnmb1Y",
  "key18": "3e5RyaTFzhYVopYPz5d8YUDe3p12EhBZs5yni5BhWWBLqds7pUGxKajCV1RVsK6uJ2N4VmAqDRcM4J4yqesP2hs4",
  "key19": "3UD55X4x4FGGvckxHz6tQif9XyNMhofbyoB3aG6tBVDGSKaFkdGNezMvyAvSkq3R8fMzD7hnetQQEcpmmy2V9Tqq",
  "key20": "51oLDPg5dBaahsN2okYxTAKpLu6QhVn5KpWyh4sCGa43amUbw5XKoUqL2MHNRfcKg3gtyDhRJcG3ydZ3MsxidQx3",
  "key21": "2EynnbV16FawEdBMxgueoAmDp6js5XAvq69xNbiG7LNNuU2rWNK4ACXrEDChChSkrucD3xpZ8ctNwrBAQmuYkaei",
  "key22": "4vxS1pLvMfkor4SfJdUkkKsBB525DHmh8r6sd8ocR7QucE7tPvhCpBkhtNYKr4MM5UjR6KdAa5VjwasfnD9uaCU2",
  "key23": "3PmV7L5g1F5AqdXHJjAo67HbExm1TXTMRoZwMWpVZJ1KMT9jxnmnz3MeGoYr3BHD1Uuro1gJEpiLWFRAFxKXwidk",
  "key24": "2wKdfaC6vvvZrDckccy3iYAmnMzGQHeHr1rXkvaU7e1FHnaApUCdph6UNMy8o1YXf6QiE3hWGGsbkvXYwzVHzEXr",
  "key25": "GTTBbfbSifZakGraeTeCD9pYCHS48rCt1Mz3VGKEbCDo4DEHjxTt3eTQgL4J5kGtcGH768NY9aL2YwAYSqDLYiH",
  "key26": "4CyXvgrcBWxKwwBmucPy44uizfGR5v1jLQeMMGg6Cj5jaiDKnPMxdjFT5vFDxJgbaAGbmdH6rTRZ5txPiAKxHExY",
  "key27": "2QZKEUpqLp6UADpgUykS2kLtvtXiqxCN1tMA4Ef2ppbC6KNUdLhHm3myU7WXBLJwaSdet5Wj5xfxfLjgvgfChAv1",
  "key28": "2HZHgDtVRtxTB1DP2raMtgGYeYcJFzej9sbqQe9oHS42A1hwNAcV2mMgdS9oKbQELw2X3tpAvULTwsXkmq1zyTMQ",
  "key29": "5ijah589QRB1vxrKXzQ54KLDyBZ1yQZbqcLeBKgfM5TfzN4JDRCAxSp1Z1hQjxeJRgAFEN57R5tHVZxunr8bj1Vf",
  "key30": "639TAbnXKpeJQx8ntgu8JRhsGox3SPXHpuSB8UsDGHhFFswTwHm18Rf6DcrWZYBVo4sr2f7VuMscGrdFofqHJXv7",
  "key31": "43WEmuNBWPP4zvKqXo2mXDoJRqPbGY9rkpLv5DmQ3Pmvoh9mz29BnJzvmoLfLui45tbC5LTx8tEKGsiZHredHqMw",
  "key32": "5TUV8hsBSzCkNktnwnXYCwmEjXJhWb9tKe5Ap4Ns6f29RaapsjQv5SKLj8ENuFc8XNrXfUh6H18vyug5F6m8YHbg"
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
