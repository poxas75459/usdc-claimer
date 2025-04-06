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
    "3kw6ZVpAs242dtAaLhcszc48UCdCDVDsXN55X29p1vxZoNt23iTBT9pXvTXzvi5kxxnjwFdB27PHS2jHdgWpSEk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hkRju63rXxkg9RKjcS36YTxvNhpJkTp2QBKH78LVLEncjtxz57BXhwcDzjXbjqNLRPxa8LVHk8PXEoxkvmUVVL3",
  "key1": "5EmrxQnFVg9xLFkWFgsfZM5cr3AdxfWSy2R8aTYg1NpoMWoTcVCNpuRZxEWBE6ai98FaExjLATiWy2RqzhaTJxDS",
  "key2": "1DSg1Bk6KS7zdx3Do4F1nfCczP4LdAmuX8imJo6CBmhZ8epTvybZCT7EsBTVaytFc6KvkLEasRjSXPGHuDa7jZx",
  "key3": "4FAb9oyivB493zn5vogfS5wLps5UtQL9gVNwNoiFRQAwKLk9G3HAeVjgFD3D8P5GhwsPZKSG1TsGLkev81Y7KsXj",
  "key4": "2zFkneESvTUMsUsm9KUtSjc7h4c5bjU3z5tJNcnmuUguJgVxvA2eSLgRGQ2U7LVm7VupaPpo75stKpLw3MbBkkAW",
  "key5": "3ZEgBiyVxabaQrrf4PkTZbUgeGgtozg6ka4e7a4Yvw34G9Bz6Ncricg5afyMrTrQCzUCEoR9cu7GSnHcr5exK7mQ",
  "key6": "JDzP1te7e7eTqHYeWo39Auk1BGrGQf1zgCur8kNAR1YYvPmJeH1ToDuLhcmRWdFXL4UAPEunv1NDfbR7vAbzqBz",
  "key7": "5cQ45AFfrfHFEWyNGf7e1DWuC243AmivFd81soJ6h4XYdyZLw5ifS8zmcG43RwzQuniCCNJv23agpcQkgSats1kd",
  "key8": "4uUyC2kNwVmYEkrcKM8xnZ8kmNEg5y4Y2tnaTTLFrw3szBS4TkBxng2T2x9w7LqZLKaBQGWAZhZa1fsg3FpizuwX",
  "key9": "4JL5C1Vw6q6oFsHfsgEAJtkQZfqCrr2CWuKwZucmyWrw5ikgirGD2akhjFAb8tTh5RicZFwsiUbDx7kw1xn3zyat",
  "key10": "2bSfMYAVPnh1rG6tFfHpbGQZoywCACFyfpK72QkDdohtvxrxg5jsyHuJtMHG68DLcYxpDKmrRhqGzDv1vhDttYWy",
  "key11": "2Upu4grstBm4tQhJ3CeGqvC9GN87PJ45uimxZhgn9jQRqbR8pHa2HS4LteNfCHSy1cGdTZGivsh6RCpNDNzsjYEp",
  "key12": "4R9Jncr5KkKaVpXszebF5xSRNCx2RPFtCHeF25C8mLk9AWemzK9dZ64kK8UTKVtAXDCQrVLt5sv8LBmEnrwCS3Uw",
  "key13": "34PXn3G59fRoErN8w5Bp4m8Y3ctVauzm9M1Lqc1wfWdr76NBcZgsHZRe7tHme7yP6eB8ZGq6WsSW1uMA2mqmQ4B5",
  "key14": "43dwzWMtXUYGVaHsV5MiUQwwgVg2i8ifMTpHJ3nkDirhyGEh11TuLFvCzj7QjD9hRoE8LxA6g47UvpYqJ8TLKhTh",
  "key15": "3SWSsrKEkwVphDsn3ymVFw9qMSx4gs2v8ozF7XBCNT3vhqqgGR2tNqmmP9c4cXsPAuWcdReWrvoQz4NSy8MbeB5v",
  "key16": "52QwmvtS1oCx6doG3sjUTrg9MDRVJyCrUk9TSPjf4k1zJW36ukrDJD3Nh6dCaibmTui9NodMGqzSxoguNjXGhhFp",
  "key17": "5b7ptYiL33tDq8pT4g4JvRCq5aMT62RJuRocqhu7iGriy6qk5eXx1PoYjVyxZUKPax5XPQxw8UkbePYEi2Ksmuue",
  "key18": "6UWDMeuZXhmdDgqXgkaMFzvFzd6fVykFicsohiqkNhWm9wcuKLG3rfFGH1UAsYjFWrVWcJjSarsZxHKAu4EkstH",
  "key19": "3bKtJWvspxjKHfifQo2EKscWdjE92MYty5u4kX6r1dxR481PWguwH4PucBk3DbPXD72mERn3ZZogbJHhvLSQvkML",
  "key20": "4k6j3q58UVa8ivC1hg7xaCpuBrSqVad2M2hdyMJDYXX9CRzMZrdQSEUGNF5r6XgNT7Y3qBdhY3VwVT1SQjgzmfEc",
  "key21": "iZsioCZZifUkRsJ2kveNGtj9ypsgGQe1EQjnz55238kKDgkLCQk65XtcteKqfDfadFRFFFYQQkRpgAxfovCjLLV",
  "key22": "2X649gq3tnrs3SS2fKCHFKGFW48Cbh1LVQsL3vZec99jZSs6zFQcXjk3ZegvVsysVvedCdwi9UmqcxwwMNhMoLz8",
  "key23": "5ZQtN2tQNkrvzu6T9chRE7Prx8sqaSvYxsjxkHV1ZkKiRZAMBAM1Ymsz48tmhRQ779fQcqGZLFKm11oKSMHeiYne",
  "key24": "md1ThsYqEc3NAUknPNB3AhNjT6WWBxKfghvLz9y5Gac3okJ6TZnvE8MD377zE3uWq5Don7dBo3zmukdvAVZUAd7",
  "key25": "hquqDrwWd1KZwSkyKFSx36JndoXnUc8sWSoGQsPKirJxRXkwqq6aXEbqFUbczJynsUF2LTooc7fAFZW81jqtxh5",
  "key26": "26127DeLhKTSVjUVZ5XSXRTD8XJgo3bDxXB8TTB32RccFJK2GwtiNPGedN7L1ACHENRFxSbaHVWvZXYVD318vThP",
  "key27": "3QuybGwPJ6voxr3ypPWL9WUvFWfvSgF5AWb8EhwSMMr5Qjp9faEWEAKkt8dreGq6bXQnz3EWTfEXfir4bdwShdmL",
  "key28": "59MQnnR2nC7A3hfQAR1KG4D1jasqrHZGR1kUys4VKKtSmUbG8XQqMpm8tsTHD4X1k4NV1CwgXT8BKEChSmJXssox",
  "key29": "37nHhxQbjYGySLFFgYYivNuPn1TFDDmAkUGM5akSr8x2tqdgQmseD1AoxAkE7prcZCFRWgSnAwu3zcPCvThj9Mpb",
  "key30": "33qVY1MoDTJYxfWaFCpkbrUprHth3cGy3mynJkkcepWXVvC47N7fJQBuZxvFRpDZ2JpADAygy7EAXFbyothSgjLs",
  "key31": "2wtQeiwEZyqdKCvjEgrGhkvJTKPmQQKmnpW659NmPen5hhTi4TRSHwE3m8oTwJuyJxKHL1xcFaHhNiJrszG2Hbif",
  "key32": "2YwkF7PjDuTFptANVWEB9tEmNqCY9KpVMaJjX7sLPgnrmfwyswPPeguMDoM3cPFas8tNXxYoCGWsR5prq94cKbYA"
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
