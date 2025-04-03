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
    "4vKCK29jQMBMkFi2WCgziP1eCiTDReGP6qHgQwgecbU3MvK71oEwDMvgLEgmLCWyBSEn4YPA4ofw9nFCGK7FTcyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FxNKoFKeuQHWj6gsoesoaChC4ghSEiNb15FQBkB35yUrEG7MkBwhuWheT6FGbDUuZL99w5UvtF6dPLPYRqri3up",
  "key1": "372XLhVP5Up91TxiQ88EXYG4uU6nyHh8ntEaL5aSWH5hDGoKV3KsY3BNGEsR4EdDmKq8GbQ5vG3np3HnQbMNCe5q",
  "key2": "3mtiscmLswiq76aM5N548KzZ7THL2mjzo8V7FvQ9WH7Qaund6qp7bug61rDSceeNtevCGqusRTsiq2MvBnDt81qU",
  "key3": "4fJ59THotzex7uoZ58WPGhBLZKcKBe5VzTB8eeiGSoiguMGqBtEbZBNkcyXSKdxR1t6TiKRTCY6xUdmraaNTiEBZ",
  "key4": "TbpdfYsVHxkhZifN4vJQ7Vxcsh7VPvk31GLuPvtxJN7CdHmmbSPrMyv2739aXzLBagy1ndjYa1ND8QNKsaWkgsp",
  "key5": "5Gy3yNzp9TiNSKXoqtbSPsdGFr5Y5RUtDsgj2WksFZb2W3YRigXnHTapmLUxVR3Vqx1LoBgLT6xaSRi73m6X34WZ",
  "key6": "5YA3kYzNgh1mf8qryvq34Np3Dz4HNytnE5GmN48YR99Y2dzABwv89FGamrUa2xf4ekzSKLb4giJn7QFWXQWHjfVL",
  "key7": "4mDZxUimFd6KbZqmUC9AKn8g1dSRSHzaF5ASEa23tJf4pTQxfaKtcWaAzjWPzJ2WjErHAL8pjDrqYZvMug3wYcjU",
  "key8": "z7k1G43Vwu2MsvCpi3GREp5d39qKT4SWSydWkEC9Jq2We9CQk3pLEMA2wd5BbRd5PmBUo7NvoY6JgZaLtAzzyCr",
  "key9": "2kDpJo7CDj4mmirc7CNX1aRkWtg1HXcqTii2gRWDfx93SWpSQas1qnGbeNBWZn4VTSJaJFbQv2fZGEYXyPnZHCLK",
  "key10": "57dqmaaw4fcLHDW5xGpxALW6CQqZuucLxVJ1Vot7aKiqY3nWfX3TRLYhPtxTC3McdCz45PD3wqxrgUQ4UcWFNEYq",
  "key11": "5PCVPk1wtDf1mBLJV1cZJSjTbJqU65pDfuYMZXr5W598czKAgbqa1WRMcbeaDpZwE3UJnMttvJnJXeCJGukDL6zu",
  "key12": "2qw28mwRiURz4zJ7pvrBaiqzBkSyMZe6DQpEKvuiVRXvkT3qrqbix3zNUdv1RSh2zzD54sMruQP8sKTGBYLHGmtJ",
  "key13": "Kh1FC8ioZBFUEg4RexiqkcE93oTD3LcC6UCaaoRxSzZaXxNhTRH2pa3vm9oDHFHWCwRd7Ct9QiyBF6wjEazAX3h",
  "key14": "5M4tUVqSQrF5dsq2JU2g8MXoK2GjBL938bxCKFpYQ9Cfo9gvF81jqkiEHY3ibm8nuMTCceEBeLgv11osdUHnDunV",
  "key15": "2azZMej5P21Sbr8o294zKWcbESyUztgHqv85bFctsAQcGvsVQ6BYjyFw1eK35Fo74Pk58Fs1xdDV3jMouSopQD3C",
  "key16": "2gZB3WAaLnmkSoggE4q5LjAYkZDZY8J1s6Uw2qsNZ665U2j5BYrCRWmGWxgawcW5qqoL4P1a2uUPGDz2f9XwchC6",
  "key17": "2pen4VBMbbXcG4vg1KXhs4BJULr7SyxL2DyNRxTpr1XjVtPbvbmzzeo3fuwkNXwF7j7XUCWWY2u91y2s8KJuFWg2",
  "key18": "5EBcQqh2W4W7F6pYEuyYmFt7vEbqKKvBqhfUUgoeaGBHRbPJD4UDn56kNxRGe6hhge8y9tfB9rn89aUK3QKDyS36",
  "key19": "635kmCKSaBJSVpK6aQjfTtsAtwByJF4nvAch2CeektDi85Wa9CefHjspCimwg3NhPBTkbq8VVkmBdY6zDAZ28xrb",
  "key20": "5DzXFMrx89bzH3cYHo1NginichmzheuSM9a6AHuwC9XqTkdtkt5spoTBFDsWBKhu3mEkRGRVUmLskqsaHouACb5X",
  "key21": "4nNDeMrPBj6NxPQ8ZSFSwDd6tBYBfyByWyHcaK11J22AHWBw3KzvKY65thc6CuV1Bdn65qdZHzUGcY4vXJaxnDKU",
  "key22": "bX5dGh8Ko6uEME1dr1JBz5nAGLzJDLk8kjCQ9b6vgaALxdmGG6DYA3RfsyUsufKuvtPfrNwAP1Vrxn3zRCxn4oP",
  "key23": "72vp4qi3RiACkWTzPJAQCwpxLrUFL542bUYkmpLuvhtu8xKLDYpnAqkxpKqHtJkMCaVsH7JuWjzfvYTByALJ4K2",
  "key24": "2PTcpFNVWVE11SpSHhb8kpuzhdG47hkPHoJjSE4XEAcSPHeXjM4a16o8Zk7H48Wdw8VsQaZfDbGEhJqU3DfZ2Fmo",
  "key25": "HVVHETyHyfTxYBpWq97jTL6xsPJCwgRSFRywiRrPqdm8vcspbn2VDbYaMszrB2kvN91bcegWH8yPqcXUYuvY3Uj",
  "key26": "24XSAx76QZfLg7sXK2Hv8ya5RgkEqpm17GccJaJoBedFKKq9apACNvvxsfZvMzMj17dV3yazEsDHuxcoeKVmLVtn",
  "key27": "xjVBjs6dyvwWxk7YyayFBvp9jXZaegLfQ4oQvfkoYQNJk2Zc1YeTPnrPYLn1NSJ9MbAyA4No7bgbQGWz89c8hyw",
  "key28": "23mEirs6aCEQZjCYEFhYYeF1JfjVaajr53PpdJGQTgvooBxUtU3sJTfjks4ksG1CZ41Ze9Mg7nHLuAnFnCqw9gQw",
  "key29": "24wwpZVNgke56euhzbAGzEqsEESeCpEukDT9qwcu2tU7gD3fXewY6YX2Kt2KDu4hXdbXuL44vMHEjvpsCt5t9z1H",
  "key30": "tPmCEnPH2B4y3WAvybgMQ7z4VrVEgXkZVz5Mp5i8sU9Jw43ukFFiVXQXpua4B1j6rSoyPQ2UT3oG8uoUZW3U7vM",
  "key31": "36ktuTj2MqY9tGzJeLidb1TnD3mKX8ecCY3et3okcJE6VZreyXVtmmdfwEeSEDBc3YCMATcVCYY2nLsB6UCN4GpB",
  "key32": "61PtoJFcd11zYuQhLmKTRsa4F8zzSpuGSdFPpmnVsF2KwSHJENn6Hv48EnCzXLHMyUMM2P8Hfq4SknKKc4DTmUkY",
  "key33": "49wh3rjfX1g1Q56Dosuv6yA5ms3yrYJxHxkhWv8vw7imFzWfXiHpaX6pMniefiMPbFYyDePd61dEwULotbFsNU8d"
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
