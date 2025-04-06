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
    "4w5kGG8GDe2vkwCrF5aNY4X1diVuU5LpSxFRnaLnJ2MRKWQD7xVTwXwv7pPwtQgpQmJqycYr5gBspV5qcq1bG1ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tpsLazowf4Tr6MyUyM7cfVJhuK4z3R3UnYjoC6eDY4skMsUwPqcqZjiE9K65cNty3QUrorhY5Zcih3qHriGakHr",
  "key1": "4rgZJjfazp5AjPXLh66q4aAgoagCi7xQBry7A5eHw1ZgBQYS8kZbC5pVyT6BTd84K42cNUTNkdxngu34yTVCSwga",
  "key2": "fV7aLiVpCi8cbuy197HrbbtqWbDHnSV3NeqfayaTAKpk69vQUhmYRwQtxAqTWm5Dh3BrVdEVN6zJgPWd5cZqwhk",
  "key3": "aRcf6hjes7kBuzQGnniGTpgBEG3uHKyWunPp3pHWyPZUL4x5dr8oUTPkgiuWpE7S7N2wiVCe2umfKpncQ7FNaEk",
  "key4": "4P4qDeZ1ggp3xeNFUsXL3VyqrrA18co2GNkWp8cPs8AHqm9DhkpQnVxFBgUFnhFrXzDf5gNneGtKdQx9nKhjzZvj",
  "key5": "5sptiiVFrd1VFF6xBefcwbdedyDszeBB9YD9UBQhenqdvS6aSU2pKe8wKnss2WmAP6eWiPHRvVZc2WRQjJC7EvZo",
  "key6": "4qRS8V8Ueca6mi5dF8cKgWutYzzxHDeAtd61hX2qZHojkLDyJkNHTAi3fz2Gqu6Jc5XaCp1m4F4zRSsSf5ssZ4fu",
  "key7": "Z6TuTJsKrvufqpHqAxF77uKJ5r24ynzVwn62UrisiKo9h9Y2PoFCYk7GaEeeKoDM5JXLMFiLLKyvcUr3L62arHm",
  "key8": "28FyxPQRooNHNbvJ4K7bjZuygn79KLkQJaJ8ELA3LcQcHsJeQpJoxfiHRJitVuZ4Kve4TRGE8dmsVWjEB2yu9Ybt",
  "key9": "aujSkLLYVHgADaczKbBs6kJnhsLtwhXxaaCrWModXuTLNUw7tJhsrPeuANzdFGjheyaTV9SZ6gjh4MSFsaCxFs4",
  "key10": "2nFvnqtNB5bTb6TiEqpX4NyyA7iL2on4fHkJjjP1pqB9JhSf2mJG5RGuTkbh9cL7oy2LGGEgViCdQF2hFb3nV1RB",
  "key11": "3Pe1g3tUTJTv26StUtzHfUY9Rso9beQAPD6W3Uxdjwmx6h8XRHMhzcNV9skBJpDZmYSmNPsz7xfRP2NY9TFwxy1v",
  "key12": "5CVeGjgT8JxDs8PDH8DpiHGxeSwpJsBeeFUyib5d6L2haSbdVgSJvt5RuEFpdMKePLtRVXvb3M4mwqGozTVUi1Dy",
  "key13": "dGtF2dJ1pqVxbSzPzRpmbyZgumXeUtLWksAenWZFjc4u1WiNy9v2NCquSJtqMhFs6SWRchhdTFMCPDthLpPt8tT",
  "key14": "3xyEh1bK3xJdYVVSjX3NYruDrrBY41PudwKQCrCkfBYS8GDVUM7QyG1BtNHNefgpx5CrebNGhedZFY18WKamnS67",
  "key15": "2Avf3wnyqxWyy6v63Drxvf2idwWQiQwhratUJVAZ11qsEB36P9ic51Sa5yJx9pfFrRzLFKuK949GGUatPn4CXyh2",
  "key16": "35fgFUcDLnPKYT3KQDXFoGcNXJDbRZwz9vujUoiYsBkitndz7Z6ou9ZXtSeN7rKwJAdebJkaxA8yabynxoULE8NS",
  "key17": "4gZEC4nDRXWN7CpmCh2YpRAzfkLgfDoqb4dkTHvzyryaYVoVafWMjF2R2txNEBnubaiD7T19UxKyfaybYfQkoZ1z",
  "key18": "R1dN97jFaFQpYCcUwFAgz1mbf7CxumjwUDMQxrQuGk7h19TP8MBU8T43BzUPqDqiSMNjnz2hQdghWruXSoDT5r1",
  "key19": "3pPQzH1XCi7z4cMtP7RWCJ1Baeb3DZfgXDvCRkkYbeSjDyP4dqHsqaTQoWKsFNrWTdtBRSBtH1yyLaoq46rceNau",
  "key20": "5oXwFKhw8JwsggbudvtXe9oZLQVFqLYTjWyhrJ1LvdAUZhV74ireBHWta7rWHnae8fZ4vsEYBuVQLoiWBUMwYuSJ",
  "key21": "2HxNVQaoQCiqyzvv91AWhpFGF5LnEcEhaRWwTWt47e98YoBaLrYtvPZu8dkPxhUpunkd325KMR8uGp4kQCxwBD25",
  "key22": "3HmhW6DM1VEUauT5Y6FciwkNna6SxE7p1MUjyCX7cxhzNMJHkweTNDSiVsWeUdZckeDEjgYJrodcv9QbzjKU2q42",
  "key23": "2JSgCRMgyABTBbSV8a5XYzCabJ5aZqn4z1B2BbboHY9RDbHFc7Rv6db4bYSnLnZ5zrNeHwYVxJ17RMkJuSWS1gzt",
  "key24": "Lu914Tdr61V2t6fY2ewNhBT73Jt3F6Mu4vBs9A7rgkBCvRe1cEvpux867az5Zj6NejisJpPNEQhg1TB6VJFdUY3",
  "key25": "3qsMFqTCUe5AD1hfTWN5gX2irVEdgxjE6bfnNa3QmDSfD59eNfiwJ5mnAJEvEmHjRM3jdcQ582Qnqp45PLzRSbCZ",
  "key26": "5LGQHEQkRkJZLfn8BLb9BGMn57kMDP6gP9SEX69aCfTJkPde2RdBLsYBKqpCJjdDcYCSMrCrNMHBf2itTSHr5gT1",
  "key27": "mtD4PpBDxWkFNLPhyCTXdUR7SjbSAhoyQH91T8QqV88HWx3rWXgBPqHS6QqLSyqYvTzoCAnRWLcCvUYFfgwZ46N",
  "key28": "5bPNQ2wJyZQFBzogm4UKGb87gTF8pauevubM9wgKPxcvo9S6StQZPCYcthCdMq8ks4c9e3EvH1dApiddjmAbXXEd",
  "key29": "3M1ZKGXhwnVVNKZqgrk1vpULFYBaNXvbxKfBrqEMbC6XQa5QCUcxbhJcWoiHjcCxWTeaf9KcsThPeVu4X5iSota7",
  "key30": "3UBpgj4mWWHLyYUPmxKiixBxL8mkrf8t5EXa7DqEWjAGEMCtzZJRhPcTcAc4JkGQ4yLbon7GJCskXCH49u3NvSfV",
  "key31": "5d762hc1YWJg6kcK3QmLRim1XH3gXqwHbkaqwVCYqpXqtRRiwN5aaMzR3iKzm7VmVShaavHuHMiCzrzj5KBAqndx",
  "key32": "3iRMnseRA6hmAP7HBhwWYbUzjxaRXHMs87PrNGSFeF8f1YGpbraJ7rvJ5Qwuz6EsUbCsKmvcZeHCMqrw6c82Ef7T",
  "key33": "59gwR4NetWGq4mtiMfZC9H7PDyrcQwRggbys4H8HQyWTfkSJwCE6qbhxb2njxVmu9BswFCPnArLN8PN61FdB4zys",
  "key34": "2NSEMjrCnPjnXf1A3Gs5Tio4cFe8AkAipJwFJRGpkUhAK36sUt63hSR6c6Jc9SK86bSjuwiUcwW1QCwVPnAa5ws3",
  "key35": "4XavYhPPnkpKCGwSfM96u4UN6DqGHTPsqUsVmtgUhFBdFMHRYfZV5znxazZVmGtL3LkB47ozDN3EsbQmvQ1TnPog",
  "key36": "4Vru3njyLsgLQWsDphBkC6QYNYvDKc638Jgu9UJwc6VqXMe5D3mj3bttyFSv2XF3FoVfmkS3dZth7BMudHjix9KR",
  "key37": "VjpVirwLexUXeyeveGqEZ5NZNnnusiCFa1uQ6MyzeZDKAU83NRVt1pFSYp66gHWb1gWo4VVURoaBfpxapaAg8wn",
  "key38": "3mQtYB6ehTgyRm1sbZA5NVrPpzFg6FXoo9eGME8xNBUUpJyktPYFQmdjesGN2yY5TDHHVSeervtgQQ3WovPDd1bH",
  "key39": "3hycFnJPTyCc54uQrMneqnfaCC7jcipauJ8cAdfZttHoJ2BansX9NAvdgC9muC6k8ScTQnuvFGjy56t3Xk5PdCmf",
  "key40": "4Ee3WGjyfZmhtfRqtgmkv56VqhTdKrdtYymUrhKq1G2eEvBDuDmdhGAHsSeu1hAfEMxDBf1DSpYK6TREWNMh6Tys",
  "key41": "3fCm5gnAtVQ8VnQDd6u7dK9PZrhgZxq6tEYNqPhWiTTDaFDrnsx7KPhwJosz1Jozgi4wmymiod1HBG4x8qh5huk8"
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
