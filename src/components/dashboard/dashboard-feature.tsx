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
    "2ZnqBksTtriSLg95DhzRiyd29hqJGiLeYFiTyriHrBfg4WDS3WHvRXCELNJVxKohbyFfyiPVqb8qeHCK94tuktrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pFM652wiEaHbg1ZtmcVSDZg3teTbDV1PYUjBZiHHLoLEtsEwi9CqqrnriZwAvcTYruoWs6JCA2sWVRaPonvxrde",
  "key1": "4M7pGk1tNjU32GnyMqELuFpgxaAkfgJDm7cZa7yL9ft6sVc6sEjMdjZRbQ5S9FSkTHf8mD8DWmj7ibvKm7xjhobk",
  "key2": "5UzoksEAGLgCk39vbfQhyHy7HRogupidpdH54L5AZEahQLPVDqUd25KxJoRLzYgv8omSkKqQSMzNrUB2gWuUHvhF",
  "key3": "3nzyBJCE4zdFDSoLokSaaVFAEXV3rhyZX6KJSTaxaTBDSR9ZE3Kp9ScoxqRFHPxXNhUrqVWuyLw2uyXxeVdEXvCb",
  "key4": "5yAJXztUyWZgh1huZu3KnSVQUhbqewjUbZKQ7e8TeAtXvToSb9Pg8CvYDwJ65n8Qxx1uuaRXxN5rvNcZE9r7fuJb",
  "key5": "mjdVBf7fqsyZbL8TwxfgYGGpkqQzkYSFREXPwZCPH22QUBbpvTNaoXFTRMR5CYP6sueJKFGnk5RWQUSuiuL2sBF",
  "key6": "3idd1jsrKjJBqyRJQmJtqqUpDHZ7Z5Ge8VvX8FJFPFyH5RYDbtkBAje9LLwbzXGww4Z9bTiyNidWHEPkccfv8qCz",
  "key7": "5cL2Johqd5JtUHnw8vcTso3iJc9tdyhJFUGf2iEXD6C1QjyxvMmkAJR2MnSFh4JvCYWKQxF5dwR3GBVuza6kqwra",
  "key8": "3GRhF6LagYzv8Deg7GoDJqQWvXE3axfff99WkfaFHDsAYZCoQ2oPwhkt6hGsXW3hj6sb5YU6bhfzahaMVQcE4o7P",
  "key9": "hPa8XTasTrye1Espww5bU64sPcvS5PmQ6WaKRbCFYRB2Gi58MadvD5U7vjyocyZnkSLuoVzDGmY6pjLSL2onNxQ",
  "key10": "2oJKWd9YYLkhEXbHhFKBWcntzEAH5reX7HXL2ztSjnj7CZUpUvV4VG5trgYTxT728qGf1fp7yEuEs6NqxTN3P7as",
  "key11": "2bUyJ67qjMCpu1A5uSvTzeXxFTtVakC3sZLZAcr8tZyZdqBfhP6YrmXJ5Sm3kfABnxB2TUkco66NnzFCMgxgQeR3",
  "key12": "4nWoGJ2prq511gEzd7VaMu8tP7J9THAHmGGBEeBdoH85zguRxLsJiWpdp8sJKMcekcdc8ASVQC6Pc4EgQnnRQS3x",
  "key13": "2RY339wWxBU1tPkdxPDG5h1XT9rp5ajABRLRoS1HBEEcuL1h7W5cfkvJnPAPa5s4RG5bDrDpghWmhrwViGS3N2vF",
  "key14": "3Gq2dwUS1kLbi7mzoMnYJaPf2LwqeJdDaN99ipag32RNjyCPuez2MKy9upuhsxsBE8AihrXC5xUnN1yESGmhXSW1",
  "key15": "ZgmjiDFoaFXhiW5rdeeTwvUWL8iw3gAfm2jv4wsF66qMG4yRgPZHvWid5pFfkcjBx2yNRGTd1nyAW7dgeWZz8Vw",
  "key16": "3vEthYocNqV9HB3mkDUoeCQRGyhPEGpXEdr7oUggvtonW72X1qEiLQtvm2UyErARzYNE5qGFrGYxaiEM1gS2aPCP",
  "key17": "3WewyKCFKxmopYJFoqbYzrvLyhuRyHdgB2RjYytku2o9hYZpm6BWnuaF5FAjiHo2szXv5q34WUL7hShaYQfSN7Jy",
  "key18": "3zqFezd5vUmB6JBvdjHZKeF1ZUb8NWSLpsmMFKRqvX4MA9VhF373z4gTvGWSP8E4erFXBFCPbNx4h16cTCfFnA51",
  "key19": "5Uf2WyadKzmdkAPayXpSRVQcDV29yrTH1tdw5CyauxYfdFtHe2NUDTfiJQsZXt5xTNXm8ScBgLmVmAY23Trqa8KL",
  "key20": "4MR3eHGFFaaSQk6nNiLWFLdrs7oMqtT9zatmKd18ytrCLxvyKJ2X8YbA4oQGGDkTsC1aUsp69CrMSjx2Xnna8tde",
  "key21": "6nZ4A1KcBnZgQqLuJBcJVoNjCxU8Vcx1KgUehHHnZPSZkinr8U8DRKJupArBWxa2g9nTvx4ovqSaGCKiG19HKM4",
  "key22": "2PJv1GZbjoGJsoDDcunZSxf4AMtiavhZfj8S2W1DiHaQNZRsEwa6oT6Nv2ksDGwszZZt4YCYAxgmfwuxCKkKbVDK",
  "key23": "4z1U4rHLs454eUPBjxF7CcH9nPNtrDeBBY9vUKJQkbvKqAkqFrPNBn6z4TcE7QSJdCP5GySd3TUihNDs7C5X3E3a",
  "key24": "3b8QjrxBAXqbgMD2RyJ4GyjEo3TEEu5m3Ynvq6h9avgWTFW5EXA9MEUseuPsS6vCMQgFPBcahScEgCXptMv1oFem",
  "key25": "2f5cBPywaByvYvjBmaZSEs9CBK6Q7ayGSA2BfxmpaAaczpdfwJFMS6CCQGUcVxfWguGPm376mCBY5uLz5Q7bv9qZ",
  "key26": "58erGHvg9SefzpePC3vLJyrVnC6eq7keuVVnPwL6kFsPNRdfxikrDKCX9E2oWQSt5GLEAPaZngMpw7D4xT6s6gJn"
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
