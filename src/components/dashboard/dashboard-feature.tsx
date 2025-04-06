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
    "63bjvSp5sZuNNNhKknEDwCrkkzdorHXo6BkfpomDSkmKdSGyCVXdV2gNQgS7Lqx6dr1boGhsgQgs9gDz89d1ggN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqn4jnyzureQ3HSqwSXGrzH1w2TQYN6sv822mCGCsJRmNt7F5faDEwgui9amhUoQmwah2tUvEE4wRYUFo5XS6fT",
  "key1": "63oYMZu27hJATdLkkxCTAZY3QTsazBgPg2bbkv3zPa88PnKr7NTqo1pC5aUofBeCUao1zRuATKwehZSnjzuuQkyg",
  "key2": "2rEBLXkoRGZ4AVkeUnngLwRo4J6egfPa2S1YZHiCWiJgMQnqgLEdfierRoWFCUUNreDW2Pq8fe4BXuAaSaMRwEvQ",
  "key3": "5kfEHSJddUkojbfUJv7uwPL9RqzMz1TekaR7NU3U8C7HBfpY7uX2U7PLNjw6B8YR24RMeYGJquqw8rATHhdcjL8i",
  "key4": "53QtcmRRWnMKogSxEzzZ3D68MmJaHJqMAji8L67tdk1BU99Nx7zfXH3VuUMidXw8YFzc8YAXcJm22853wdoxKcan",
  "key5": "4xfooFkTwmCxYedcESZpoRnnqEAJcaLH6iJMiZdePVNtY6R3NC8a4Y8UdTDyF28fuwtqEdZPoce9RoDrq7sTCkLW",
  "key6": "xHQDed8mtDMyQct2g9TRiVuVZ2FRp6SugBXSXTSYAhQrGshYQsdWCv1zzKjcUHvXftk8GFCrF86xQGZH3rkrdZs",
  "key7": "53TEChciHR2wwFKT3cXUNwAxVzDFAfxQeyxAoEfg9ahoAmzkye6JwEKpE1EZ4NYPXm1oEv4dYzHg7Y3zFaTabas7",
  "key8": "3YMw2fh8CgVXYjQPUKDEvEt6Pj79kFsNYF5ZMMwYH1wG1jD1MMAgN9y8SN5oJayf8i5AyAy6bLEaEYsNEk7YjReo",
  "key9": "2FitLUXPwNTzs9Mn2PqAGvpgPgJLts3t6mAB7kQgZaydyM7aM6AGZLjnycP7UHgQKR9cKu3PzJCHK3AgTxcn9qM4",
  "key10": "2F9PiNR63qyXbG2z8yMj557xorDsoyH5tWeQLWjm1tGT5EGttunA8EwiZeVUhZPjFMSamTtgkjpkct8TLgWgHf4E",
  "key11": "5ke5kdLM23MRKoXjsPpubkngz86pT1VdHyFio26Zv9xC2SATexeZURWGBLBjZAzyzcKu6KDqveRNquovf5Mjn3kd",
  "key12": "3EuzpBsouyHrzZN4u7KG7ArFVeFfQ96RoMXng78Fb7JpFdXBrecB3VJwbLNDKD4TGpXvLzuvZjHZEB2g89H8Vgx4",
  "key13": "5mNZQRRcQecANdNuFS42vNNdsXh5UwXFxMYESbx1cBAVrzYDo3aW6AN2YrF9jsLNzoVo88ZETarhMb84VquoTv3M",
  "key14": "2pThKYja7UnsSjjrihSkkVMqcRCGLwE11C2iWttksopvnfCvDAvGzDXxxbjZ94aXhymgr9gVgYHVF23RzsuVGTQi",
  "key15": "3KhWWReQoMziBngXH4mqTZjsZfdXWGW2hW1X4CDfyyhPJMuUXzEHkiCCphb6xvnBySXiWswQmdWW1KZnZk2CEAy4",
  "key16": "4HXa6zscqUTs3FwGgB8eDv3cznh5gPP4AsMvMxNBBNkuFuXakYbCuR6ZXcw1HgoC8B5whnc98MbKoRVYMrGaqX38",
  "key17": "WPdeNTKLWwj99arFr6q5UJ23NuHPLwHY6RJf3cB8v38vKFGEsC6UfAw4yfXnrE76b89f3zjUncagGuswfz72eut",
  "key18": "f869Vp8qwJhgFkMn8YBTrjTFhZVPMZsRLYeoN5pYmZuk12TmB6KmSWBNfTmgYyw1yrVazVRbKc1wRwrN1crLTqr",
  "key19": "BmVVpw5BtLkXi4xUkmwiXcgYyYVsmzQWksyBh9UjYQhgZLD4yX1mXKjikCowzxA5PW32oPifHp2dqbbQaTBxFor",
  "key20": "5tbp6QdAeanfUpBmRK48zZaDTCS7z1T9yQf2A8wrZth7B3bfHGHZktGeszEtMu97152DaC9sQZU4P59aF3EXUN8H",
  "key21": "2HmBbtvvtX8R1Bx8jSzzeywA5WHt11m8yMEgqH2vcXG8rjCVVbCn5A9zw6FQsAjEn5yPyZtcngd2sy755PDTLxD2",
  "key22": "3RFLSmmKYdTBhhgBXh6s1TiBCYn9z5c8SKfLKSaPxX8izbfESiVXKjFfov15GCb7yMp663mYRCsQD48B6utLF1rx",
  "key23": "PmV4DoiHtYXbjNxg2b7PPbjBGUH1bxB9hzNC8rGnkQR8bQpBiHhGdFRJ6kijPAqipHdYUk9eWBf1inEt3DaTwHC",
  "key24": "64xTh2tL5Ua7GZtTsYirxgEzptjGCXVxuMQS1XJkS75EzpgfbhE18oYhFQmj1HkhFxZcNRZGBtGNDrYCnCfX45yD",
  "key25": "28GSRyFxuchX79d2m4yvJAY26AV8NLQHnoG6AUzamVtCf9EPmTuy6WwPypXFHBwevn1e4SwWG3X7drnNsuPGoPo7",
  "key26": "4sknAnKqD2kTxsrFhwMu4KqGhn4TbnxX9gC5c3ojXxnmcPctsQC5u3Qay5qDyGK6SgomyQMNVSVAwxGCRwyMNNYF",
  "key27": "3H8UnYbnpSjdpcjWDGRxQHS6wYsnxcm3J8dVVx3fv5v9VTkA5k1sdtFTpaCFMfm6MecGQgYh7mzadW8HusGec1Ae",
  "key28": "4EYUdERzftechg6qbZKDrw1EvEYkdNpxpqw6PjuuufKFmkSRoFVS2beuB8JiwaTe5hKscFAPkKmmfoZkjVypK7m9",
  "key29": "21Tcd61oi5sWjz3RgQjBjJsFwHY3uLs1hUXP8ES8UL5EaVWFNLEofLSuaF4E7hHn22WxVX9ny2zkXqJ3NZ4S5nCr",
  "key30": "2GL8afP42PLUVuPvzP2xEtdn9ZJndeDYBNuzCpYxrhi1uLx1HApVyrcBEcJ8HvyC7XUxjeHfVYp9xULCNbnahVGG",
  "key31": "4RsgbJkrZYsqiAxx8qhmJ2V8dcjZj273hAZX98RtsU7AyYKuazDT9BS8WSkoSnw9ZksgZCuAkuYLmWsGtfRkXra5",
  "key32": "3F23oYTNQtKaXj1LhjtMkLpT4D6yjVKqKZ2FgsFGJvTia4rvWQxp4MSRPa22Ga2zAtffbR6ZDfeRDfPRxripXZif",
  "key33": "5mhrXYVV7ZQ81DafCrMWqnQamm2DLCehYrdKgxTXQr1SCr5CdLuAq2z3PmgmDENZYWAH1cMhDwQn2h8J81QvwyoX",
  "key34": "8kXK24rxvPCPKPYU5NMKDU5HrPpY5Tv8MegWZ3shGsmHUKxYXBXCVnTdKRQ2SEF2PsrXGHhN7xpWfRBJUd4SRka",
  "key35": "3fawxdNHaKE2gdgvsU7Ctub8erUmJBPhnFCM9XkEjZA4fxZ6h5kf63zmpDxhRG3GVdqqSLnU3DBRgfWAron9rU9s",
  "key36": "WPbRFdfJsYYMo2fQfkE9VCHqc1aApHMfvXXiCxn2SFqpQf1K3RhJ9LmAbxaz4sbvottXhCsYqL94xf7Kd23EXRx",
  "key37": "2xWAYd63vciitAzUCtLJkf6NqpsFf5zdCMvoJMQzFkqyewJ7TLphx964r8YJH8JUfLbdiBkNyHFr1qUjYs2CVABS",
  "key38": "4EUsKW77ft1u7jq25ip6x91Hto4fy1bbAbWGeNSPYVPdieHJg8ZoJcnMSiXtvw4WQA2T1Gv3TnqJfhWrwiyz1j2U",
  "key39": "LUYrHLPCG36n5S4wVctMgZkb4yJWP5wMPdDohBSZNiNa8k5yb16BcTE6vFHg5W81bEwCwv9jFsyPQ1kLMXhfGUt",
  "key40": "4pr4MaWzvSJGHWZ52CC5Wfj4SwqVPYH5BxvK94TPGftmkA4jug6DGLUxqoqUSZ5DRkVZrpbb1BhVZcer74gn63he",
  "key41": "3V4bTHKuCamghdrvDfHGVbahLGzG5Jf3nFfGKfhY6mxVib4oJcbNW8ayDPpVnvvNNaf3XPsaqNhQBuSdgpp4FHvj",
  "key42": "7c9R46sWvS5TqdD2DHYqDjiV1rdyRNs6SNN7zgj94oRWvwNgijWdcjUwmHQBH4cwrkTduuPUy1ND9YTNTTFmg8U",
  "key43": "3DzfGXWkQRgopcaxu79koRXva9BQ4bicPFZgTSUg3tKxAEgCVyXU2App4uhtf3RvtjUAe2bqNqnhqVPGpnGyfNGs",
  "key44": "4SCvsLJ753hK8WUFN8Sp1zV6bBpDXezdwpPgYw7Kjh14bchy1cSTxdpn9RCY6s97MrpXV6PKUqYmHg7FV63xo3Yz",
  "key45": "4QzY1ZMDBKW4KWg1gTjnkP1vAkLk5vCNo97Fh2Nk8KeY9zkeQX2UMgUnW3J6VEE1MKWsNFsWqHg3nA1ExQMwZw15",
  "key46": "34PWDC7znLC1Fv9WmTfDNuusNn6mT21Q1ogYwDQje1gEvKnoYhUeeYRpHCoXE7qHswSohSm4RSoG67CCKcPXfjaq"
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
