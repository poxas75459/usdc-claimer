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
    "61L1AfWPRHLamveLFqKGP1rcXzvHdtHAgMgjm4363rJxRuhDSHRuHDtCbHnYJUkBih9XhR9iDdGTNdYWPyqypkGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gVzqzDBPBguoDuGfmohyAMg3SdeEWEWDY3PWqGzDGaj3vf8TokbvJBiVedKV6jggptdjGj76wFHLWGwsxcL7Wty",
  "key1": "3Q3aKfKAy7gnAUX1UkoHSyKm1nn5GG14SzE9Au5MbgbzxEU6q9TjVD1J9vuaE7WkD4vRU4hsuznEmmFVvoqH96fm",
  "key2": "ShokKUT8cNALocnoYExcfs2x3Gv61No2sNesdncvdWLEZ42i4NHnXa5pH7NmizbF9za5UGHUcC2deziKgPrqcJg",
  "key3": "27sazEFWUWAsPyWctDdXFrcAZDHctVkPkNK4y4VrSdF9sUvrMXnsm5A214fumFxEwLbWD46BN66XQyjxPjBZG9hB",
  "key4": "XzrMJc1T5bq96dkZuVTJLDwSSs5gZf8wcD495F61UM4hRHVNdmyApqp1LvpJDJgPK6yE3q9PFBvVe4z45cHY4x2",
  "key5": "33QCQbmPYMwyWNJR9fxrvxW4XpRrfLL7ZTk8PCMicKM1eHLLhJSnvAsWEnNVkaquyEqefzAXLpsrKxTEETKeeJYX",
  "key6": "3BaEnXFcvpfZ8AwshYTvQZTbMpVKrrWQNkUgnLXxWMyqtdXE2peLQxo2CHvaXtPZtVyuAwKTptnzU1mAo8e1Sc9X",
  "key7": "34GQ1EyBBxAHncacZyf6GH5vtHUuWgF17sskh11ZTdbeK2rG726e26he9kZCuUbKjq3Pi6F1QxVCvgaeMuSNzegg",
  "key8": "2qAUKSYStVzHjebDFqkuLxBYvpR9JDDMcvfMwzNbn9gwhyyxJ1zZtj67JDZhqUufrr12SFVU8bazGoDcGZHfNsSF",
  "key9": "9Ch6rTuhc6rxpt4EESkTBYjb8xtTsqdjEWYx1aMKDbLnYHDoHcWPKDSaEV7LKEmtSUyxkohSjeD3fmGTkCPrJhV",
  "key10": "5PA95HoEcUdwR8rt2SfVRGihfk65yPYHVhzjv825S7iGEdrCs8xZ4DapzwKF8j3t526CMhdKtY4wLHtjWkNLKHqA",
  "key11": "5BXj6audXEZxwCaJvUsKg52kKJiBBk2UnabquVRYD71R6x9fKUZQ7zTZDsP8c8TTHzYKXPnJfFQc2La2bmYcfCd3",
  "key12": "4NM6s9WV3WgUMmFKzMrpD9u1QDjAtT51JAoMfyhtcR1vJuC8pMY9mx4eWYaKAH5H76MBtUiFMjyNN1BR36tsZCTG",
  "key13": "5Dr75prBmcundij55qnZiZtAMns39Cm2aFbN1ptA84N2eZ4coyVhnbFaPSUx2urTSJiHKoBbLXQ3qvz6avsQrtwp",
  "key14": "2ELGr2rsS7LSYmoYnjFGSauNq3qZk4TTejwZsGjLw3bCiMosf1SYpZmsG5urjYp9iyXrJWBJkQsjtisQGnZKCYBM",
  "key15": "3iyoigedTLVZwaqK6RuazrUVCz3rNbRtV42fZASDN3BGogiq2bGSpNzcdHiHw6VEmejB65VbLAQNuSznaDvK8EyD",
  "key16": "5qim5SCBbpA1NR5QFufQB5wmWqCHkpCZtuYiPAPi1hWyfBtKt288S5mzz6jMmhiob32K5mjtHmik3ds8inTKrkq1",
  "key17": "3Kz77K4Ako3UxXP1aaeyYeqs5E6GFekxWD4rU8wNizU6LYdkhyr7fCFRrE8pSeyZW28u46ERhvmdo4fNJtQiF67p",
  "key18": "5JAu1aaFqs3reKhU4XsaE6U2jjzDKTACDnoUeXWP2ypAa3RnUMe5jCVpRudQqLHmTUQiqSYyYDhF2wsqB8JZCLdb",
  "key19": "4vMJ9LGCMAGQf79SEb6Sihcsav5BMr8yPkPyDRDoKWGcpnFe65XUGse86xJSMptzBpWyZHLxMUMTSVwr4FJd1Mqn",
  "key20": "5seCugMqXWKYaRcVz1x7XJVVJDUPAW997m4gEhizTBKiu8a9zCYGPXRMAJ4A8LTymqWfW2ouAnc9fVf2D6nKAuTV",
  "key21": "Zzm2qYzyS63xZyHTLNXB3bRyJP457txY5y38zyd3K9BMHz7ahtYMJNJt5zjuRxhVFgayPhxXDEJigwFpGuRcS3w",
  "key22": "5dqmg8zx6EemybRjK8zsDVB25BwgonaPBSpbQqGWRajyJNNVFygBmEP3dPrniEtnmCm1y99yZaQMg65Qp4Vqc4sj",
  "key23": "3vUGmCcPur8uSiGWmtyMKdRjagypxHeujsfK4x5HHA3Ys7zP5pDyuNbGCMTidnDobnVa8ST1DSjqSQMQC9UHFr6z",
  "key24": "4QBs8GmCkNR7ZyhPRX5oPzPqb7Lb8ug99EhyzphiSw4mRtRM6Ma61aam5bpJmg8Cr6YC8acathoEG4GFW74Y2XRt",
  "key25": "4EGdv8tCNAQH3XntidSNu8g6Ek6TYteEQZogDKYvcmzcF3gfnEwxtHUAf3MQLUxNSAZVMvrFAAhDpxCc4YPEnixW",
  "key26": "3dGS9HYwUXjFgKDNWUy6b4pVm2xrDSk9o75ftiij5PG1KTDe3MfQenSvtAagQhjGJ7136i2CciF99joTCVsw9S1V"
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
