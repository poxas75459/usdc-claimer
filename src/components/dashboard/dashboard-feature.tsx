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
    "5tXUnoVeSH3E36TfdnRwuWKAwsFMyU2TApXTW4nLQr51MYJqwD868CTWjVxWrmmJSGrtz2kVrjrtSD51AnH7RMbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DaXfpwrKaDGQfZ8GE92mkgtK4NM7mRXgrTo61JCocxmeZVYVA7UiJncj1fqxLymXHi1WuAYg9F3QoxWMwg74gt",
  "key1": "3DaSncBKiXQ59BJnQVmwk7GwqDJ7rGMSCHDk1ZtnWAopRCvrGxqVE4BwAnWkwvMRMXZSXysvKv58g6RJaGUfM45Y",
  "key2": "2kLwHEDzzeYAix9rBx44qkztbKVTmovkkBQ3jhijA5xtzBahgqas36U6jMTrNiW3wUR8t9jmKpRepj1fp7Di67pf",
  "key3": "pZt4FP4eQLb3yB2Kao8EtgtxkrxLtNzZzAa3powEMAzkdKCBqBCi94S1Z36HCcjSAABnPRpc7vzDCKavkWvczPd",
  "key4": "5cJqh4Ybubsee1X4oebGyHeaw4Hh8utRaiMeW1yemtcyXFG6EiSEg6A45vkQdFybayQw9NNuCt5Y6gePZT9DWMDF",
  "key5": "5nUj6dLS2oB1iT94E964xSZhztajpdjQ6axkNZJfXv4DpcV4P4doS785WKmsXEJXyNtnJF9ufxuxk5S5zg1u2XHx",
  "key6": "2vFzTMAbJXTaMpiuXmZw4wYXNmHxEEgF5Z1YhDGuij9qJF4MgLFfPdCerSedYeQgLCeEyQYe8zaYm8Gq6aCUc6is",
  "key7": "3yafHaFnNqFoCQAgbAyUJpFp2CupF59HesH8s7hEaEGSwGZdbVEqxM61xGjtUDsQeYRRnGfhtR1Cvf8DvaFZ5Hwr",
  "key8": "3TB9JRX1WcbiXQLCzPyQMJP3stEGGVXXCXfkQ7ikUaHWreqrin2GHtRkMKdoe13naH2hi98TJgF4yPVmzVk6xgH9",
  "key9": "56AEbEoRtJgYTyVuZg9iqiNCzEduiLKbWotYLuNv2QcH93ZaY3Y24UNuD48KGgotrvGyRroRN1PZseCfQfAhPkr3",
  "key10": "2u5NJuA5vPvh4NfYTyLJbnFSKgNHLUyeZ5iVH4P6zj9m6EbDMBbiGAWnsYSrdBeq1cmCCipXmcpuaEcZdJDLoeDf",
  "key11": "qcCcSXLNTWQx44t758steoFg9wBax6kpmjT8x4cnUjUKbUyaZqqfaz9rUcdzjV8U6WUJFCwUwHe4YQFVtxD31Gc",
  "key12": "4L3pc84ZVHVVNDYSDZ1vRdiTtkD6yURJjiMxGnLUYQFohyWczvdNebCjPYHJNWF8DU5hLBUAnYW6oAV7kuFG3Ue3",
  "key13": "48oE62XTzVG3BLbve8KqGM7XEsfAqYPgCHuQnU6tHkBooMi3FNwRK1zigWYqXzNc8wiLFjWRmgRaqAkvhiCNrcsu",
  "key14": "3ZwLFmRYN56QMhCnWaV13V8Tmoi99SK1UeC2Yi5PpB6JWqRdSVTep1FX3H1FRRgctuqeYkpvTNg9sii9fc6XAbTt",
  "key15": "3FQGqeMsbHLs3omS9FvLvDsfvxLXBpTxmmYHvu68X6gGJwV1KiXr8Ss88zf1rdAUr8VVxSHyCRQujFEawaqb85xq",
  "key16": "4vSJowSVxjcCdJ2dQSHdpWfES924TSSXLJxgzMnnBoJhJusNKEFA7ADULwCRQetksYob5sayEnfynmNQ35MR5ohs",
  "key17": "48ii4JpQquRbhz3UnH7nz4YPkFotvhZEMuXgQGaJh1uCJaqX3rk1oSRSjiECePnjXr2hJ9SQgDuYoRHFPc4AWa52",
  "key18": "1UYwBwc6Aq1WwGKK1ei8PWjEqC3zPsA7CspqBm8u63CQH5y6BUXYMV2husRPm6Pc8sNFQdsEZHN91utrAzqWpVw",
  "key19": "2WB49FirVhwZsSTQ1yEqjzKnvu2Vhme8PtrEUe64qZdoXRai9CpjN8s9Gs2DnNppNaW9iNR9kejwGiW7fZm1Zomb",
  "key20": "2jE6Br1K2xWnZpP1zEDkJVLHD8WqWCrvACLzktgEa1Pxa5uwGz3FA4Va5h53pB9FketysFmAzHUDS9nkMWqgJECT",
  "key21": "2fQKkZMhHx6ZPK1kbWHpC9a1jkag1e7GU7hAaTxATfoTicRkPmVjhDRGAMfy7be6VUbNwn5BQDC9EKhxJ9fv7V22",
  "key22": "GH7JZ4eRZPUBFUR9Lm2Cf4a6YA2R7d67cEhdJguJ1E2zXQXavzXaDYyew4QE4WFu4rLkaYorEvkyqLD4dNoGoRg",
  "key23": "4DDPinpBcFtmHAHt8qnw4Y7EsLaL6kcCShZcNRqvHdsQc1LqYWHmM2A9xbVWw4C6fWn8cdmK4s9ftQZwvPFacrwR",
  "key24": "61Wvp2w8eo3qh9Paha8enjYakVvoNruAdcPwi1A5mdyAHn6JQ3s2czud63pbVnGBXvcmooVsh8RYr5rW9tKv4nHB",
  "key25": "4qfbzPRZAS2E2CiiRagZfDve61tWCj5wGo7q2w4iX5LHe64a7DNzyCQ7bVVyY1Ek2JVqbyv2jnpF72BzMWqARJUM",
  "key26": "52o29AvDkQ7fm16BefZfwDowKjko2FT2eA2FHLZ2FjLATcbzW266g2aHFpxzdaSEnf862n3QsGsfsGWSt4RBc9Ep",
  "key27": "38jMkUya83VjZY6m7seE6e9nAnpxrRedBbFBFHCZV492bFrKSjCDmTPzovSkFsktevS5QkKa7dzxAfiRV7dBut9P",
  "key28": "4ZcxAPPW9e7tg4shsLmzKnSj3PiSquKYwwDMKth9QgjJhwvStw74QYu9h19tMuHdbJkgA5TLSTBYLb1GcKS5eg8"
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
