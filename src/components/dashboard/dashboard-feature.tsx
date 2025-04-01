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
    "2MaoDZENicordR3cQvyRwBHfxfB9ry1gpq3rdCqwxDqRi8Nq5YiyZXtwtAg8QKoRRjCikL2j2tM67Xac81o7BSbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "433s9QV2hjbBVadD2nLw2FSFaMNFqDvjU7y6HG5KQU6YiGvJRNGg7yymFUvfn3NX5mwJPV46ueifbjBAN5DAmivR",
  "key1": "2JetER2hX7ofKvGxvhW2UmoT2474zipak3dNqTmFc1B2jTsz8or8Ejc5pJiRxpcMKyJjXzRJGjWy8jTFNuMS3m8H",
  "key2": "CXcsJQKqKWrP6Dqr9o6P8bLtndX3mqz3zUr6j1vgRvsTeSQBzgVGwrUKzyrzJ3RNgTS2joTNd1dGDxas62nLQyq",
  "key3": "4vSTnh8Sq4AbiJhV6veAkCFCwmVnCiKjL197PSUb1MVYGhwYsYmnCAkqMKChYWPAZ3No9u3ei1qNSvdZY2CWQTpd",
  "key4": "3bWWYYKwMoEPGquJ9kqvuYYj6jwy4BP3QCvEAxfCuXTpwtsoyQYuwWWTRPUbTSpSNx4UUxifgDXQBEvRYdddbPP6",
  "key5": "gxBSNR9CrvdBiAkjFtvHrfJEMWjTqFMB384zAbaDEicjVRn6wwKZGhhPYkqP1ajUiy5GjdaSYGVPpgtsQqrsFFJ",
  "key6": "2STJob5a2JABcQAadvj9YLx3XpmNxQrYrTBNCUtG1B7mWdk9tMDHL9PPPAapCfRpEFb59UPyPnBq3PWoS45cCPro",
  "key7": "3mGG1cX6AwCprM8GQkkKPggYc2gpZ59HdtgGQfM1724912Z4yWgwRK1dUt9KX6J3YhCqnqBBVL2UaFLqATVGAaWN",
  "key8": "3VerLmzZH2o6BDpwSBye9maFDbdv1kFh9ycbTAruAHtFEtxQDEUuhJTdc8nG2wYnWfZGbBWTJUXJSwd7t92ecT8T",
  "key9": "Uprs2EFr8Ni37smuezSn2wWgmeLH5hu369Zz35ZhSj1qRHUeZ43SGgTgezaMtH5jBxFkDvNhTz3UibSppMv5ooh",
  "key10": "3rVbaN326w1w5MzbLXyFyz7GXctGR78Q1reznDPXUEgQQaywTipVPh2tN2nGaSNtXFhCzVpV7SebvGUvW7TRSsUa",
  "key11": "26kBUNFFxKDbdCVB299K24M4Mud5TztuSqtaQCNfTQZzQgcCSjdfkn6QMTwDmpQpxWmoh3Vw7xVcg4DHS3MY1SJa",
  "key12": "E7Ly2dXgUkCkXZrCGFRYEDHkdy19JEpUdRmS7npsGi2voi9t7JftdaXDVkf85sGQf7sRZGwye3kLAWT9nnqEPbt",
  "key13": "2QMRVrmLJEMoWkMJRKKyL1rdxVRhZ43SDq3WeWUYEcP2MGidvQvrrBSTxLpP4x9aaKHnTkBpmmy9nn8m4SzJRsCB",
  "key14": "2pAzc6HNJgqz1NRshXLBbL2RreAz7FH2ACCBQqnwLiBSecfnszGHfUwJ8SQdcQ1V4WHcsht6Jk6SdBWNgo1ochNU",
  "key15": "22BQp3tCxLBD5vnPAmwwQyR1PRd2fsDBcntP1uLmDEoc2wgtKEzdKurDr8D9TPsejdhzk34Hye7CmMqZYh5qQxdf",
  "key16": "3hrBLC5ZohZ5QFg2Kv6hP8p4ZXijwQ5X3q1K6YVij1G6rLNXnBqki2Wyy4odppHqcdHSpHCa3iLswMZ1GThjF2dK",
  "key17": "2CaHmUJhuLWonagTKUJmULoSmihyoMzAkDw1MfJZeiz5QQia8AzSuTbkCo51TM68uK6rtvzD2mEwVHwH4oh3kwtF",
  "key18": "2PGHmHe9yzthB797W1Q7RdjeJ4PkY8tR8Nho6EVhuQ2jTLXWqQQxGSwAqHEUtuA9QFSAkRrdgDP5XPGQy4xX4qFZ",
  "key19": "5umK4sR3tJ5YeSc3BL5NbJHdkHMoJMLoaxKwzCA273ZoFrnYAVGjmrgQCxxnpX8oGjLSQueWzUunC1Qnhp61GcZG",
  "key20": "2ZmtcNL6oa2LrsrDLv8fvZUkZ2FJj1vXDFJFZtiqkc69Px8eTjxNk72XZE3ZaKYrag6bZ2PntE5Yn78rRocDD1uw",
  "key21": "4TP89Evur3ys1Scgm9DcJVyMFGEtDybiDNdmK139Fxrwi5do8FXDKVg48DTqb2y2fUdy8QB3r8WB37UDT5TxggSX",
  "key22": "2DeUMh6MfN6KQb8EvRq4FbrK1qtQbosC4274Xh84W2bMGq5jWKMD4fZ1ZgFoqWGqtTB57NRs8XxUQgYMbsJW7TMV",
  "key23": "3oaJUJYB4ai7P7mqYR4xJXfmjDYJJ6iswLtANsncLyN3adQKq8xWUUCWKQaQAYkAyB4KXsbX4yQiEGMAur8SmxzZ",
  "key24": "2ZP84ivkNs2qo5Z11Gjk3mwQu6cdchVAyaAW4kKSBJnMiNcXL3mTWAe48q6im9UzxHkDdZxRRWWKiuqaeJzShPUQ",
  "key25": "H6GempwKHDsUqGT11TzxRsbcPJL63iPmZhNTewyhaDzHukh9kS9Cj2FSG2NTST99fBwrNP9juSxbcYFmcTyMA9C",
  "key26": "FP6xwXBs1WSfQgJvUFT2WsCTKkJZJj4zFVWXypzfKuwQzwM8WFvxZNcWcuxCwKs2dsdEJUESnhkNN47MyLh3iVr",
  "key27": "4PzgYPunxwX1cGnXkP2TNLHdhbQRxiw3LQuGoBvbGQxkC9N569ZHqXoSh4w1PCJFopWjY2Cq9Cj5G89J9NkodPzk",
  "key28": "7T1gnD7b9RoaC8ppmeEoW8J8pfK3GvFY4QJKEiTdUH8VRHH94BND1nKoAVuHxLRXavvHfGvEqe3wH38DJBzZCTn",
  "key29": "4pcprXKfvev2hUjnDjHUMHK6MC83EcW8EBpJ8FDF4JRnzSgbGx43spravYK9y8BavwhnZbpYHZDgELw1Msj8ncux",
  "key30": "5N4QwLWoxmVaKKVZ4JYivJguMxTgmLbjXnwRmEjedbx8GbH15U7tgH4aUmmeus4kpcnLp2599zLQbZncRwQczjFR",
  "key31": "4gMFHS1XF8W5Y6HcMEFEqR8oKa8x3G77En3KgXnreKRfNwLWuvYAq8jqtEn1yNrkbnsTii8dH21tNNSXvCT5Pr1W"
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
