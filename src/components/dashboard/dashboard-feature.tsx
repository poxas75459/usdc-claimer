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
    "4nXrLgccW7aWAVCP9PxFWotLPEmfY97FETGahNB7Yv3wT9uxmUt7fxzVwLvuPFQcJ5SZPRF8Dr9GKRP4tZzjLuQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ouFbBRYNSXXW6coDshdd1fnTpWiAGNMTkiCwvdkbo1bLTeHeJw2w2i6EqNdsLaqJZ92vhG4FDX8hE8gYFpneikT",
  "key1": "5KH7zLR6qFFcHJYuZnzKV2mfMJidJQZeij1LuTmJ8zHScx3UvdsJP2DwAznrfwKJ3VALi9Ph1HqQWDxyEYY7MVAG",
  "key2": "44g9pfKTCRYr9K6RSmHwFp6AdSG51a12AXqSHbjWFSWpMXoF1cJZxDbPh6NQfJYnSRZ6GbBEj5YExpRB7FGHLfL8",
  "key3": "4cdT73qS9DG2TKCKYuyk33b4iFtFUp2fzT1Y6d1w2z8CvfiTenXXpFGLm1sN2TVDgJhqjojtHXd4k144f7Psc8Vj",
  "key4": "5kw79s4SWtbyLfwCpM93FyJhyre1QxU2tZj8kq3SJKLgLWc65Wy267CPvyt35iv67vaDew6q5XQeKwWy5NVsKnDD",
  "key5": "3fQ9xTNUtMRmKVCkVGH7zce1E1e9yznbRTCSRR5hcG5b68LhhHQWiJdKnY5FxgXUKkVf1wjjRxdZ1xTwBr8BmaoM",
  "key6": "3eLkHPF7wDTS7gCYD1NpqeqsChH2bhfT27zWsHHv7m44eM6zMeaoTcLpwtgAxLUY6X7J97nT1XS8jwv1o1hXMBdg",
  "key7": "38MGp3BE4LP1JPXyat7TYxThhgoSkn4XXbeBNUHCBCH1ibqwxLGip3c93gFVpfsDyDXb1AoVomV6GGpRcHimbttL",
  "key8": "hFRTar7jQZuVgEEaASm8c2PEHFG3HV3RknfDE9ZT9goZxkq4A1y7TSY2GYpSrSYDZAqScVtiMJ3RkqV4ALxo1Aw",
  "key9": "25Xzfb32FzChfn4de6fbpxu4DciW5fTcTjZRVVhWsn2xx9Bg3xzJX6q4LEr3NkXHZPDynbCWN6GYCnD1ftMqZv5K",
  "key10": "byQMTxCQuub6HV5gEqvjgtkTiUNhwcCXcrKHMvV3J6LbLKjkdyHeSDZ4s1ZF97VQLSYkCbFgRpLVEag8hACjeWv",
  "key11": "5X2bZEainSs9T5YeYRABx7w4HLmrK7PCnKBmeRTUx2ZNnxC64yD5LkqQZFcmKzz46LFtBb7gqAcswJqt7ey4E6iu",
  "key12": "4dJBpMF2i2MBqFZFRE7qhDRqvxqvyrRaiovctJBT6L5kzQZFkZnMDboXc7YGHS2ps5A3ahC62nCf2yzAMMXWyN6Z",
  "key13": "5PryzyMzSFunNsheq3i3m5GwtaBqM8A832gGA5QdsrKxzRiErfLt71jmK6JLvTzXBFcfopaQbRyzihv3rgezthD1",
  "key14": "RMX7jT5XXifGYgGckgwKwiTKpDVvK1sJCBkEgHAvkTrj1KX16oGZvbyVBkacSgomxVMTzfsuDp8woxB5ZGr7zGG",
  "key15": "sAcjw2cd7gUnXPAWhvv7Bdp3kQeXCkpkWaCsvVbPvWFEw6nKtK9z2uQwYGoC8VMZEwQcjdLcXkTE9tiCXEWpK5P",
  "key16": "5CD433Dv4udk9c58398Jy4AGri9BP5ojApr9DkNBY69RhZHW53GGwzyuMwnFZXJEb8Y618cKes3a9nWym1Cy5tkT",
  "key17": "4akg2A72cWgQykKBeibYs8zJBrK62eBGm836o72hNYnK2PntczYu3yuC9dSK8EVR2rVgnRLuQAAy7rP19F9raerb",
  "key18": "4bgzsxQfKZLXyeTu7uLCRJbSsY12ZfT4oW9ekZSJMUGbQdqhzZhDA9KVn4Ci8qhJDZtvHKyqrtdjUvboW9ra785h",
  "key19": "4pXb7pZxP5yVL6P1CRKaTKdoYA5eoYAWFkCJ1HwcoF8bkogboyrqzMXwE1tqWe6gNrsLx3Si2MYaf539fxXRpc9t",
  "key20": "YutA1WxBMsNHnYZX57Lw86Jd21tB27PGFVR2yez8rNCMNxmNEaSL773tZCTngLWKePrQ5SxJdvTjaNdszKb2gUs",
  "key21": "YNfCUncAy8rLMf2Tgxj8ggiLv2sNoePuYXcgiuz9G4up1t3uK8GhmHDjcePGNTfpJHFSyaRDu8E7KRcE58HyvGK",
  "key22": "5PQC3XiPmzQsFumYhuug7mir2iRk3egteWvoU1ywHsQsSuMCABrePt4ZqM4cPfpRdVopa6QWRDey7W7Wwk4tqhYT",
  "key23": "2LbsEvopwwaAqb7hZ5LbnmmeaSdggRvvT45ijJMq1ttMxeNbex6eLcgbiJkDw2xrRBbcgK7BgmyxRnJo6nytYJHh",
  "key24": "2WREHVjwMmGh9jeF21x6UHBCEbP2V1uNzpi5UFUxNgAsriAJ3kdA1by62ujezddcffNDPabNyaVon91kg7hYmRha",
  "key25": "5r34g4RJ4cEqffkCPN5nD7YELTjchPVTyRRT7E2q5nFpexZ1cEY9Bb3XhALKXj5CzrU4baX4LZAMZuCYpeHn2ngt",
  "key26": "owXVgT7CLMhiViiQMqNVYYJzC39CY3q2ZByZt77JrJgAHjrALc1XBpiUEYsDVMhFb34MjL6fhALRyHc7VDP688w",
  "key27": "4xTExD4zUAMeE39zGYzZ1Xp1sWXrxdqWwwC76XsxabTPaniKdfoD1u8r6LBsEM17ikK4FGzfcaugVnDyPjadzSgb",
  "key28": "MtLYJ4aoh2gFdzeLg9V5psg2KDRtF4kiNjLrRey6BnZHKZa3AoQZmHfHaLzFw7Qfv1xkgGWCxajc6f6efgRS43f",
  "key29": "3riK9DLdKMVRSUHdTCdUFsYPbccNHcJ858cJLyKH3wtRdL2DP9SJTdK2MmCYA7vzHhdzuT6Ch7HoSR1m21SV4smf",
  "key30": "5X8ToWocHa5D2Ms5ZRq9NCU44nY4KjYhy8rUgGj8A4Kyewe7VKbnqdoSRwJcrSBYVMdKgxqWQ1JD816MYSj1yr3e",
  "key31": "5CA2r2noMXvjv38zqia57jwri97RiQxXXEmXhnMrMckMaTrPjDWfN4AYuSLgJ29E7PpCcTsugbTA74tBnt493crF",
  "key32": "58Gvywmbdqu71gRyZPGw3zsLVbyfDJUeRoy6NRYi3FbP24SbcjUYnAhRRrBcLqiKQ9rChyt3zTGwPVe68vUuPgaw",
  "key33": "3LQsW2FKGpQXD74PKYkjKPGUJHMtq5aeJyxJCq4kmcZy6ZohyrKoeGbvvEUrpqJYL1zAHtn9fA7MvEXAcaV2aJ6N",
  "key34": "3oizvz8Z6srBueyvqyixa74uR7FrpWiFib8pMgmigi8CHR1SdkEkVKJoUePYiRJRoMRNbtEd2tcbvdxsMRpmYgnU",
  "key35": "2E1jntwFAnsdZ8o4TuXsQLmWGcWCuzV5f6FigByPMczvHCoKR9zQoFPYtrBBH7dxhmj1x66gJo3DgqdutHHnobiv",
  "key36": "28iTKZT2eovVyjQKRQPDTRFptjqZ8qH5rcShsiCqbYNWEKKWwHPfEd4iq75jDtn6WbGwjE38N9pQfhKr8skSGkFb",
  "key37": "28rTFwYQFRf5FhNdB13FFm2ae3ux4hB69joTnjh7RXRfJuKKfTtLQELDwMtMo1Qsez7Dcifb2nVEPGcrXTxuf38x",
  "key38": "4FEvv4g9YVppSmYq73JvtJQQDFU2aBktfnejZDhNuzuWyD61JDDpYbswZcS1f2u66LqAwtnjGUVrREXhmwdAQbry",
  "key39": "jMkqrNMjkpKgZqWtU2VFqYGLM2Vh2cjwYcihs8GMgv89xXwNdprqahG6no4emn3ibVBFTFU2smBGa1qW2XczuxS",
  "key40": "qnrUu9Zy3TNswtUs411p9aRbJo1hwxUGLkzbTD8B2PVLWQ7TQEyGozNVFihsRkwCQ7dzVfQUA5U5XCDSZJtVXRz",
  "key41": "4D6tbRgozKk5d2VnfpyXmunrckk33oZchfibkdExi8XHKz4Whed3wqBfjoyCzcFcrEhoBT44txULNvtF8MsovQRB",
  "key42": "4DL5vaGKGpAxaHe4Yri7d2dBpgqZqQHhjNkANa9X951dbXm36RxyTCSpJJi6wZGdDYgMqAg6LAHtgck5vR3wpGiL",
  "key43": "2toqFnkZQbw3jx9GUYVUG1uiJP3Wa91qRjBxCFnsCkRRccKQDgWjxNZB3D6FBqfcXohy9J4jHwUy6TcArKiuRVEQ",
  "key44": "UveWxnzKrNhKmrBJ6eYoAbVPmgkXSgctxfNHGDVXXGsoTuZiaSFH29HwfPtHiYNbEPbwjSJMLHxhmRkT8TFQUfF",
  "key45": "262eEbhsAQsMXHFrsTnH68apesaph3DRM88P1eUBCjZrMA8gx1Jx2fbBY3HXtuh9iTmCKze1i4XX6ecN9AZZ182P",
  "key46": "3MdpcLsY5CZbYsgCTDCFZY27HZBZc3JNUczYbHicMDDkMGcAfhmX9ka8XYLQBDXzVEoFbvgq6DioUcR3KrYby9R6"
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
