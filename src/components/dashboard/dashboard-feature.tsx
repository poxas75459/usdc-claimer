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
    "35xSy8mgC95ovkAbH5hCShHNCyLKnLAKnNq5r6VvVLJ8oJdCQ7nU7EtaggUcGySRVRqwsumoiayNTahRsF2ovf3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46WcQhzdqa2QGPYLxhKRLpWfoABFDyh4a6E7kWbCr4kBHovzeSFjDY2ujpdcwCsXGYXpYvMY2LaoxKVySAtsCTwT",
  "key1": "4dhdsqtYpDyDbEiBe96U7zofCTfJSd83kA7wwNf7jqL9eHFbdxWE2gK8D41cUNYMaKR5gVDwapvoH5Jia7iMtwvJ",
  "key2": "BamVgvPLc6X1ou7uUTpomrsZ8rsuFJNR4H1a6Q6rpHHP9kzSPgXYvVHmRFqMUZsRYn77obBuLabKsgUQfWb1xW3",
  "key3": "5yGuXkJNryrV3L3DfWGPtx7MX7ymVcsxMyXCzCvtPAMcv63rFjCy9DpmT5NkRLkgBM1FxYCVqyWgfaX2uEmj5uAa",
  "key4": "kmjWWQu5qPvic2oBG2Amyz1qs1xQVNFHKWsXRpx8WPeVzjotZfe3F21NzY4k1qSfEjRKPLL3iZKduWMM7Z4RRkS",
  "key5": "CUuY2nfC1yUyd1kqA7j5UwbVnFpf2GumdcaNACyuqUhQm1Kq2MKEKDsGbsE3nxHxTMrXY8gBrfskT5a7fyXHsv8",
  "key6": "35sXidN6sfFkuVodvZUCmhe3WkCRbH3uhm6FD5umGDnTViFvAf2gtWVE7WEiP6LVdrpSkpLkWwNaTcKREP7sQPJj",
  "key7": "4FkCBiE5phuYjUEDmqBDkLFxt7D16UnocweVL8tLg8f9AVxhgwB2RDLL7bg1bqiontkhXU6RccifQ5RCCRJZ4Zu7",
  "key8": "49vWZmUE1zAXsK5ijK6AiPVrpayNqkQt9DsF4rv5mfiyz2TzL6uRSYf7P9TsLdufPv1MXywdPURNnn3JCtTWgVqn",
  "key9": "M5tC6JFi71v9bSmTV4Qfbh3VvJvsGFpzsvUJADBU9BrCzEhdKhpBEDetp8AruAJdzgwnY57NEmPiSJYJfzfAJET",
  "key10": "4nD1cFW7y7faVsvvUiCquXnRZbe34xiQfiUrtvMmt2VzBT4f69NPVkmENp2rFS5xYBPxmBwVBDhz7Z2DNK3seLhm",
  "key11": "2tFQvh1pE8rxRpsL8djU8WQjBiGu8N9R1AmX1cRGdFJ5hYA6unyzPFWCUkiLXWSUbes9wuNQsKQu4fFHoGhNZm1D",
  "key12": "2kfuVitkE8v5gYwBjvHMMPj6Ev7mfctfpDhWcCze23TQ95ZWK78cTC2uoLVLcPJe2cV9vCyopYFLRdVgSfojqASz",
  "key13": "3ty5ZBwBCGR56AEXvUi2tTgH3pvj4YXAeddLZzGpXtnvoSz3hCPs85GgbP5MMBmSS9DZpJUsnLGPRQRX33mgYpdB",
  "key14": "38V2ux7STvgemF3n3vmTFJdL3La7sD8Wng6APw39WeGspBGqpjtmNbbNKJMZGohaseAKWw5WYTNBCJLpsQLrWgtS",
  "key15": "DsVPCgNZWUwoECTmWNPoQfj8pnNJxZUVr52rQC8YkVNoShkCELevR9Zv39pP3KcTXzEWJKXcFrcShG6gkvGWp7V",
  "key16": "25V7Qz5YDrk9uM3Ye3CBjCb3SRdevtFnFMcJmaqrEGeUwqqrAam9CRvn6buHGQ11odqLWGN9BFfRxR2T3FzfkJpc",
  "key17": "5PDC56GeWe8X3LqrjWzVjMK6sfgPsPvkK6arcRE5TTXrFhwZSmF9et6L56QEJaFaZoAo2LrxzCBJqGRikpRWP4HC",
  "key18": "4cRbZzGaqQufXa5HmR8b4yWzFBijsznQB2ALesPmmfQVb9GQAzXLjKmSVck3PbosdENpMNXebUQENWo3JAGV5Ny2",
  "key19": "35GiKRfrmdCZ1cPjiDH723Msm82pdAXcttNuXnB5dTPfPHfG1AiYLmp6g4n2vxxWcPAZ73kdkQ2XiaS9C9Rpku7J",
  "key20": "2fe5B6rcEE2Y8br2BZLW6CCu5b7ufeXm54Cx6XahrwTTtUU825gicTFjhVDxcoPhww8yFUcJfdfRPgXYh5zJj64C",
  "key21": "28NU3hvC7QzZqoLRCqDfSPYtdWR15H7DtUEPwRaWK2pJDtWKsZN187QUGqRGMuYx7BviYoeiMiFQQk8voXBo1R9T",
  "key22": "2zD4bZw2aw5FJRuvVZcUKgoJ841dZancUw2LEV8MQq1pvwKAjEL8CtNr146Ee9fyzgXwYPDEQdFSsEN3hPoP7qFW",
  "key23": "4BWH89euHXreHbFX464uDfZ5BSsjywWtLZzHbUAg58LJDo9Uu11NxWZLkNtFfGRHgKnJ6STQn24mL1sfAvfveD9m",
  "key24": "5Zi1Yjr1ZgwTUmaaEhB2tczK1Kc5u9ZmL8pYxG6on1nyv3LWT61hn5y48KoHWmNpsSZg8pMfYwbq9vcLQBsWhW6s",
  "key25": "23mryBhkkCTonYrFjM471HWhjvEiLeND1DcXco9x6HMQd9hUWyMotoieL9wuyFkP7QgcBbY6qDsjV73WCGHhys5D",
  "key26": "2Z7uexecVMRr9o7Uff8ztb1YgHmNNY7MTMjMGmEmgpw9FPzubQpjwLaEDxXrFG68MungPnKBjdGydBPCjhPPEhTS",
  "key27": "56TyuqkLczWr4dtuSzme7PsunJGvaSisNQB1acPSuYz96gUJoiU7CpaJ7wzLjSJVRwgAgkwMTJunnXNQEibc1CqW",
  "key28": "64tcW6oJo1FhhzpHFZAHF6pYLfXnBXGDpSgsMtnwcfRkemwXpcK8Y1D47ninznzecfCco6WqNhgrd2PSoYvfJ8BG",
  "key29": "Gz4JfJBSYkggv14u7Uwb4h7BbNjkSTWQRHQDDmARF7178jF2QgsnVb2ZMPBGCm2QETR8GkHrSKaZBg7CXxWHBoL",
  "key30": "5LDwfxqdJcM2gidJTLoVxEC8TBv5bBGWc7DyUY3dr92S8phTPfJGckSoawoDEdjbFYXrhh93ypxg7ewD5KQcxAFQ",
  "key31": "41bN579zcZXrL91wpXLyrhau2CwXZHk5ZFvXmsm8y8RkvHfc4YUounfsJ77BJNVWxPWD9Su1GTcNnV3imLYFdXmR",
  "key32": "5Rsp5pfnKjQEWYen7cYcjWTYfLG2Dd38wYZSeSwCUx9Az4aYGsyAx7Tn1fyRxVFVNtDhbFk4uHfe5N5TTMXskAbE",
  "key33": "2MMpLjtzNsDgKvKv3pKbtUSLKWcvu2W24E1MCsiUyEJWM12e6YAHRoyjAFAd6doid4jCaE3C1meZb9UcMGtbdFHh",
  "key34": "bJXPteDyMfgsjRjAUcS94sWzryF74rmTmUuWZiANYdPyjgAw5MaJbQdUFdFUkvUompRHhxxnEdbyyK5NJkQTWE2",
  "key35": "VHt1k8KcVza3KqaPtgLe4GR4YtLvb8tKTSEE5v1uMafbMbs14EQnZ53SAmQuZT4zmVyJPgUco6q7CfDYjRP3N9S",
  "key36": "5bv2H55NXtRja5jME2n57FD6vHSj4H7SiQxU67JYzyF8SkPzi5JL9CpnrJLvgaYDeBdyS8aZrpVY1essEmquDewn",
  "key37": "3nJafDMbMx6uhKYeRN3FE1xPeBSLwRcUaE4Z4omz4ZPVCVXDiQ8LuHPTRPZgLBYJzKsX4HrrYXhsvAJg4AhcBn93",
  "key38": "4UPHd1UNizxoUEBvYYRwESSKr8w3o9jg3DDZArgMPGUXEazw6172iqN83Qpf2VKBo6WFYgeFapMoQVTRi5oSfzd6",
  "key39": "3y8W5Gy2AyJJsmELsnGMt7WkY6ZJLCEuGnduqm2Bu3QNGvwXG43QajLvaHhNufrLCUdUwiz4e6aBLXQAg4DjM8vw",
  "key40": "4ivSqWVX8uNGsFvr9PWiNkzM3BcbjznCYeAa31TRzcuPapgrFgxjGZjPDgy21uRtqGHPCbgtHHLR6B5e1fCSe6UH",
  "key41": "5VdAedbj6gwcHuqikWT2nuy4egp9gbtxdHKpTm4M2Ft4qoXYGsNJLxBpFt5NwcgcMgDBDA4jyzwJ2mfmSpy34rdz",
  "key42": "3s3ZAmnzU1cbtPmRBdqc4y5XHJVAiiXPip8G6fFjTi8hg5vTMDijVzyHZcj8i8ESjLrKz4GtCkF58QGKWCmNH29V"
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
