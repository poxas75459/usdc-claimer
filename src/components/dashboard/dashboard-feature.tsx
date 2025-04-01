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
    "3HbD6gaBhEABze9ZNGHTsx68vtmjRNe4bwxnscso4yMRxskhmshtf3RS8AyHAR9H6D142UzSvfFkJgfpvTPHE5Mf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoZYyT4zh8mPsaXAawM79dJDV7dYPYCce1kugnR1ArHZqnfeyCUUvMWVuMhGSFT6az6eXfzoEc2yEQGyGyvwaGf",
  "key1": "2xcNSxzZGFxfcyJtPQ4EQBjzQhcSDdguutUTZ43t8vxzwPDbE1Z3W8pziKxRHBqUtKesbYXFernCgc9nqPYYdsUW",
  "key2": "4wh9G6Hro5UmAnCDh7cbaE7HyxXuxmfX4Cs6K6to833yADPZBCCG1v4SWZdvhzxVyrYVJKLKG7tLxVQ6vW3Bxxmh",
  "key3": "4bVwiWQeD9TcbEoa1w1aYBktJ8YkfsEST3F28FFLh1MhrgFcTSeLCDBLYKgni9mSKMLeVhYRfByksiWFqtPK6Xsx",
  "key4": "24HZyn9NDb1hxLd2x28jRzobmJ4VNJntKpczHPWAzHEcapnLywhbiW6QyVZMJQRJ88Qkc74ykU5bUyxEYtefcjLY",
  "key5": "2Dtp4xB5Z4PCpdV2ede1GK1xze72ddj6rfCbcyHsiBWd7mYHTQZtzEmnbW7mai74W2YPtKxBxnrdSBRPazuMaszx",
  "key6": "3brqs84qZHxTUiki9cbrRb1dKbCiEVV44aHiWHpuQyttf8bMRdaZkRLkk8MkAq81EoApf6DpYBqvP9FxMMKr5TPQ",
  "key7": "3vbXzVCSVtBwT8sCtF1qjRHd6Ntgdw4wPaa8SR5WBuGUbuF3PQqhTHAfdNXyuTuR3H7zgKhRjmF7sxNPvgoak7LU",
  "key8": "58ALxWqCFgA6kp5TCWnwb4o89jahmcjeMjQi3xYKyGDRMmRGHDSwZeLUMSNfPJwZYgXRJ7y39se827LRySo7QsWr",
  "key9": "RooV213FpLsiqmcJPPuEXBPbGnbK6ysDjT1usY8KpQWCY48z2W1RxviQdEo1n2kR3ECtTueUCy2JM3p814kpbDs",
  "key10": "5zcvpEjn9RNK83MfKfGwqnk9vjN7xWV6siaBFLzRRW4ir79qVbYHsMXiF1F6iGnTsgkjPLpdjsvrZ96xa5j5NKU2",
  "key11": "QvnNJpwSEa5JTPbFL8Kpp3ehiFZ8FTVEQugPjsdqyeRfPmaCvzSUYc134RPaa3gXn1S1YsbF6iG65xc3bCVJffN",
  "key12": "poNW7MS8XKD6HgG4Jj45QyShoYYXzx7e3MK3szXEvEBoSCj4zRfBQJUP2yedUY3y6VDW9geCpNEUpKVBs6E89jo",
  "key13": "4G4z2fSixBDyi7WXe8kphwKySpGrTGpsg4E6Vkz58mDUXrEjJdsEsWw658SN18BvqUGzz2VHcPfSSGKG7N1fyjsT",
  "key14": "4FfyWTmVbgR2AAPvsnK9e23GqG76k2GLokwiwuGBPLsEtURCtCBxGYdaHN9B2kyikjhhp1jJnxGe7Nyt25CujQ4q",
  "key15": "48Bk3bFwsBZrJNwJVfUxCZrZG2Soxcwbognw36Ew12mwrBYEa7JrzaLBpgMP4vux39hGYwTUVYPwJSim8WAiEzAT",
  "key16": "2swoiGVmyG3CxyLbMm5HUycqz8bMv9sg6KJzMucRBrDMBFaEEuAYzThKibkrQSntP5y3Cai6UjKo2P3XQ1tDg7L6",
  "key17": "61iY185eVAh6rZ7s1bkmVd278tnNP4G2F2MXb22boU5wL2hpk4uwuhDX3ft1TJTo4igfxBChyWo6bSuW4rNHXkhU",
  "key18": "3sDAWt8ce4EUW4TJqvW7waEodee8Wpm8aWDqoc181og6yLBEAwMtkcutRXnt7JuGqMKAa2CoULTwi4F32tnqLcBa",
  "key19": "2ZXUiNP4MqZime1SXkQvsbf4eXHysxu27JVQDjhFfbx82hNq1ftQdq5fpHZ4aXLoFSsxgWhiiHov24nktrVD3UNB",
  "key20": "3jizGxr2auzzHLJK19DfWmnc6JzgJRVRDNFcBFvb7j8nDYgUXBwGnMwWdw2YovWiM9zBqC8w53s3XBRbzJdYoenL",
  "key21": "21dY55YhMNoSL8dCjAfzrafwukERmfu7rV4cMvHcz4qeguwfEbtYpTwVMTZCB91tU8phjC1F7Fxm3bzUStNRL5N4",
  "key22": "4P9YaaM2sTQcE35jtWLFska9RD9JK7CJxhEeybMYTQDwA8nY6xgrN5GtwnjNeTKq26fszgA7Y6JYmxRjNugaXbr",
  "key23": "3put71PMZ8386jHPJDvMJKkDMUCmugEhXNPRdg6iQq77XVHH69DKekCTXCd6fYuHzXXFABrpMgisLJA8E9ZjXfSo",
  "key24": "27Gf3XR6PupzfWNmqRw5mCTR6hFGU5anG7wWcnLGgLCnoX6Ywgm84Cd61WDGtmPA1BkW3muoyg4HnQEQriu6WL4C",
  "key25": "5u7eC2uC7ALP8a9D1fcegKx6YYmCriGaAULmyW37QpreHCQSa2tsZSyZGBTssjbEV2QjCTaFJALLPVmV1YXRKvn6",
  "key26": "aWNoNkg5qbt8VY7Qo5jZth7DDpNuRsugJXPyhgsEiJn3Wb3HoAikV6TqXk7udNPMzwy8HM83kJqbGTjyVB56q5w",
  "key27": "4sFEua37ne9PsWtRjPp6Fe94SjtDdf5h8bstk7bTDtQGpX33CyyyUNCk8NaaN42YkBuKjuk3zw9753njBUGrb1c2",
  "key28": "34sS1N5Q58a3epCCXimWjSBS7HryqudfnmzG9acwosGyVJj7ZFDdjeG1RRBARTeKqpooRJoGYnCmzFZ429rtNcBn",
  "key29": "5a7gpf8WPcdYWp52EN8E1iDaexZZUmQTdSTenKYAsyJcqhHYX9GwAqDtiuqgqEdqkzzKxV46n1FmxrXYpfH2eZbo",
  "key30": "3dqPUM2yGjAkHQaUi2dS4g3RHA4m6GhQeMqje1MKvPc6KqUq3ae4jHKGD9e3addYGXkngUDpHbbwxubcAwxC1BGX",
  "key31": "5gmRZRn1y9VphtN9gBEwb16SiTWJbWK2LddRg1aMCsAE77XEwc6nEi9wGZt4FHUamDpR6qAedHmak4ShWZdUrA3b",
  "key32": "5RWVy2JsKmkTEnTqqpzaf14QusAth8SGt2yzj3cnH8MQ3vZ9kPARJwMBURZrvqrEc29ty7cNtxyD2cHgGgim8Z7G",
  "key33": "7mBErHfAGqTi8NjWusoWPY3AhqmM497tBimj2azFJCr5wgkAeZjzPyUDm8GQ8EaVs8LTemDmSBpVbWHYa6z8NcT"
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
