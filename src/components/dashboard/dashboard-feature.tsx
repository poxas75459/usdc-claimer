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
    "27ecz7F3rxbKG4E8RSLPESnPq25pM1Lt35jre922saLrEvRvV4h1hvkHEXrh9MrUACyZ6zdqZMsXPhZdPWjwNRwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7jZ4tbEFcZfcVEx6thJbibDD3Ks7VHfwnRq2j39SNheGF7jVdTQhwqCCC1u8FyizowbndwyuWjDCdyGe7nuzP",
  "key1": "3qfjR2eL5JwWPhJG26bq4fiQfAtBg2U52TNswkTVNd2sxXcgc6yDxgkNz93RMdmEm9QbvbkkJ1KjLGbifCd6taXt",
  "key2": "3aPc77bV1C6myVmZs99YMyk5fYbte9QjCgz8NPfsCW9Mm966nMV5YdkdwuBYg91B1pzkhhVmGSTrRtoDMuJ6AGSg",
  "key3": "3oBknqtnECE4ax4TK1AjXMcrJ4AiFPc4zUm9GKZHWUb7kKTwqr1LLpBhFbsAzJQkrALBn21KZSsaz17t9beNWjbz",
  "key4": "4fF5VBNXCGqMKqkv9sXAvHvAQFawtoDgCuCryxVm6wM6XosFZjDk2WQiV8pfpkutsSK5tiidXr2u1HxvkqD76U8o",
  "key5": "4u1MCc17qaPocDErQ5WfQMS6ofrZdQSxTHCmjdMmQCAgsBwJqT1eVH5aasLAPDypqaRW6cyMBSgbwZPSJ9nV47fu",
  "key6": "4FBwsDs2QnG7N7Gq1JNoaDDrs7V78UwAq8sHELcukpMC3Coepz6j5zHXW7qTrqFF5EUkHb4m9DmuUvd8bJPuQULJ",
  "key7": "5WdDYuaYpr6tbV3h1ndzF3Wr4SCiUTktznU6bbTPwtfdMy85KkrgJnc1bhfSQxLrSsyM4QxxTrL3JPhxHDH4zDxz",
  "key8": "5njCNU4aZ7hW7QTMNtWxizm4ttwEMX2oQzHD4HGmUdCw9ecT15o4r1e4ozm4L3UeKXcvfU11eM1JbGvX7awsztHz",
  "key9": "2cQjBE4WyL4FFh6hvsPv8tMo6eZFh7v95V1Q9nNArnb6n9niCnHoF6vzW4SXU4ZYYzVk16YB6PDDfgoiJgmZ4sp9",
  "key10": "2vAAo7QJ9p2xgMkTXQarA1XBoMi7U8kFJnrQUhrh3iEihpoza3iTzGA4ZvW2oYpqVuHtS99sTsvS1DSVEwj26Yi7",
  "key11": "2Qb46XbY4gGeXFAR1rHFTpEyQVuhjK195hn72xY3qMdXunprWqDjGW43CGDGDBbPjPnRhwvFdxgYPxcmCzksspWn",
  "key12": "3bP9N8KF11f3DQK7peN4wCg2EMAyQBqxxvnmDBSFzWgqwL3AWi8ySFJAzhsxfHMtYN4KKCRvFfXWarwM9aPSp7XG",
  "key13": "cEBHjnXDHNndoH6H64xW5UidzXb9z3tH9Zh8rjftGysV2LjBfdUttv4ew6deivXX4iSbfYzM1byGsw3kJipiTJU",
  "key14": "3sfmDLYvD7jCY9qppzF7DQbo3jBXnaj6gjHxipt8JVnjFidY2BHpybZw7rpHcfFuz4Ypg3Ndn8kSb3V9p85vuqFJ",
  "key15": "3PQvriqQBn5FeTiSR9gZ1wBauePswszaFnBNtao7JPZtStKJG4CwwVTTqfUnjpfs2V6ZpJFXbCuKmpfSmqQHove3",
  "key16": "jNa5GwL2cXH9htWSoeCBQ9Qod7BZ9p4SyiiekJ1UbBQVDuyzP9YfUmcRyP5AJQ9Sb3NWRDyrjeves8mfB6UuRrr",
  "key17": "4WBVBpPa7MxjaMfBKzRmix2Lo1ZdZsh1KGNtK4A9JXGzRFXij5LquoEfRZewxUmP42hAv38usMZ5NrnmJpzcPUqB",
  "key18": "4ncK7MkV2i2b5j7siNKvkjKcoAFDw8rEZkBVrScTkEVS3Y7xJBPptrv2AmWUxq9xBdjeoRtvYhX4rUWcUnV5p47p",
  "key19": "66DrAbthME6KGv4gqsuBkBfHRaFmfAJ9gHr9LYcidhdYGgw58kvUo4RNKQM7uSgWQYi35xTBGx2q8G3CFKohbR3b",
  "key20": "2zMRa4N46xLsgzDkNvkMvsfL4iXczvjBdM3o6VRev29kJACmT3RE48wrJia9TJgcVZDYkdvLDFxfJ8BrvvDJtusZ",
  "key21": "oVQgURJWiVP95eBN9zxaKw8NpW6kCzjFcArevSBe7dTGph84DkfQCynEF4FjVqH2xfPBL4WHVXiXCDrkFJSKgk1",
  "key22": "2KbEdu1qGiRanpG2f3XBAJHdzuEfcAVLUxBBCzuquHRjswcJVaaLNRDw9SNeShwpyakndpqvYsdFU7kXsNw3s7b",
  "key23": "1vYBDwiTrHn8GQJddRnWFcQxpEamCPfAVUKxsdrmX7faUmYp6PQiqi7qV9TtoCXmRjUcLkBzMZBeBThJC44q2kn",
  "key24": "4thSJff7nGomQnhVPaYPpGpYLg8LR89eDJxaqMEiMXumTUQ8inPWYC3A7N6igibyiqP5VcufzriCSE5n7SzTaZax",
  "key25": "4MeZqMUgTiyycJX7r6LN2vpuc61HSWBZHvXRQvf4uBD46bWnjDiDsddxfdiban1Sd9Gn6s7AGkT7iPKL1j7qdA9r",
  "key26": "sdTLTEdPFVNZ4LxxsZ3xoGHdSri7WYTszJx8Lq9MJXM582WbWvzkoSNUaiKbbCnJewqrUqSeFsXURk3iVH7rdPm",
  "key27": "38qVqd7QRFVmk8gdCut5Yd9HXFj1oXr5PvLzYr8SUBWYhMAmDrfcZgSZ2C1SaUr9a6RYs7NpijmQ1qkbtactacVG",
  "key28": "4Cj5rbuH9PKtRfKLy4KNaS27PL1a4E9RBNPJ8UDNoNDoi9ubvjiQyEbiU9v7qqshUCLxoXiQ6kp5tXfakNiGxJn8",
  "key29": "55Tt7X95kaALzwRfgDvYGSKxqE6KoUrdxmpkh1KcyMJ8GhGtZfhWa5WTBr4SHgnLPLfBggmxzowJB4QzLG4Vvkd8",
  "key30": "5Np6weewLsDwtyRC3nDfxoGzpooZ2oYEK17aTzZseyHjR4FVUMGKB2yGgpwcMvesNJgo979jyZh21a2pHG86vvdA",
  "key31": "5SvQGxVxjYxCnSqCUSVuEPRsP2Qfex9ygtcNoV65PNhNZUAryzKHKMfPkF8LdZkYU2tYFegH8FwnLebLLspfVAMc",
  "key32": "QQLnLmHZqtmfcScQUweviaoaU3iqEPuUgzV7GTaZDVwxM6is1cpmc7YBULZp44bEZ1FN9wNMf2ZbAjg58Qe4X88",
  "key33": "4giVmqDSahqswPokFMLSVD15LXpMws7vBZb9MdCVSKCk3RFsRhguAJSiYqnuity6gjuqasiPubLUJBtMBCsKpt7v",
  "key34": "5MiaWqgMgjLR8iQR8Agkpcc4gDfyW2fuTDwTvTVVZkwdB5LvW3BAaMeUWv2WJEsq5ni9BivWNuN1HqDSC2mf3wFY",
  "key35": "5bcnuKWM5usbVbc92E12KzfMfdFBYtKfXx2x7GxM4tz8nRcnGy2Zv4DjPJMB9VpdZEzDC2aaMQwruuxRtPEMmZkL",
  "key36": "3d5HoVN2v8VqfdEohJETAgXSuV5wrHjFLzkVjxXDibRSCBojCJo8n94HVo1mc6H5XLrFrx5DST5Mi5WLDkuASk7b",
  "key37": "4VVkVphFsb2NZjtk3XKDn5zW1unpwxpMWykey7dr5R5uVgwEJddsAkisnXngGsKwyCWqTVCp15wcPWC2Zae2Qhks",
  "key38": "2iPhzwK81SVpX4XErFuBJmWS2Cejtx3xUCvrPBVop25dRecTAJRDoSrJAZazyyUX5DpQcGLyBsHBaQZFszRNvVrd",
  "key39": "AJTF6pfZZL9U8bKVo4EBrA7FVzjTvi5Jj4LbYhRnb1utTHdQPzPU5ByKYgES9Xo3Ae7M2NJ7y7PNcfWrC686j3V",
  "key40": "2CodthpMbpp3x7k2VKcEgt4zJjktAUaT1SxtjiJ5tSG4SidW8vqNZ8hJ7aajMQcwndvyKyCr4BU3vf4LAybWLzuU"
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
