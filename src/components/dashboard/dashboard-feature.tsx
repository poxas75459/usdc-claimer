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
    "W9wJSvrSr8pLrC4TvawP3q3Y1EyFABUYk2e3hmH4GYmBCgM97rSJMDP3zoRFAurhqNHGxHAECoFuJPVeuXEzdsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbFAja4yEo7x3yFH2pVmSLswCYYcS2ZFNSxydXX7fMbnaZFu8xnBfSASe96vtFjGG4C14LzVQY9AaKeZxz132HE",
  "key1": "61MdBHBrBRFbuoUtxejmshBozFmpKNxjA29Kmgk8xw1Nwm1v5MJFwxkoDtRmb3wdegZQPPqGHDwWMJEPGekTaHTq",
  "key2": "4sDAiGpwQLfuQRdZPxYnvX4iXhQk9ofxV3dDuXudgu2LC93kGuc9Jgp9pFMY7Eq9WRx8vXtoWpRW8CdDNHaAJ4W7",
  "key3": "5q7jWPWaMyzZxRZjgryZ6oRsK9JovnEWkYhcKYVnX9gcikFUCFCbva4BzCwyV2UBiukoTTxbjA8KqFSQ6kJ7RVdP",
  "key4": "KkKXj1TqiMMKDVeguyv3vgEYYbbrSRXnrbzrL3RBffw9HJcQKo3WmqRb6hHwEboXcKAFWT3PSscM4SA5cHJkScQ",
  "key5": "4BkMCCASGLeDcBfAbxmFTuSwH77s9PB3dKugEui1HSKQYsNnRHzfsmu8bWj8e6qYTer7AJozyA72n27ojdFXViAN",
  "key6": "2UAzEs2zYAsJZhL54fHXKoNPPPJDHRQ1P8LaYUynw8fED6NHAdaMGkfBAX99VvFJGK64zsZ8GkTHrYAhjRmkXRHX",
  "key7": "AVWVdte2k7EiUNQDyTpG83TT4MVXz7gSDuT1y8ePK6riNivUzcAAeMybXu5aM4wJGCLD1iPG4GNqmjKEgtPGFcm",
  "key8": "2CFZFA2PUD1PXFKQKoC6xosH2seHbrXKjfnPSkxjxN81WiHkvFje6niYGk9qjf44q97drmRGZevaH7zwBtzuaFx",
  "key9": "4hD2HkMMASZiKJrmQFhesAXdAYMKqP5SX5gBwRGL4xaYWFkEnr2rLsLdMUQeZun8LupJktQKnUk9v2adfQTn4zbz",
  "key10": "2RDzm2c6FdxTYLgwKTeyieyxJ7zLmcvbvQdcSo3Qdjst2VzvvQPq36PNTepRgG4ZpHjk5S8Q5W8A3sieUChUEGUs",
  "key11": "3j1e5e5Ycohgs5ud3NB7k9F7CURK4Arc9DTyFQzrjdjPMJ7SkgL8yGUcwCP5pB6mupQL8Hyi6T6Mz2Hc4gkTXT1A",
  "key12": "xBTeBmbBdr6c3yUdm2KxP9DDB4f1dEjmnmmMCy2i3aCkDsa9BV17mMYq9vVNnc3iTPnMj1AGvhhdDJhSpnpz1ET",
  "key13": "57Jjp1PyRavZTqEtbjreH53uVz2nznr7P7uu8qNep6FsREFGZd5xK5tQsQQGMocQd8zp3dUeAHCGvYMTZ6m7Gpdm",
  "key14": "5xDQxL3sFV9XnDquQ4b9xSc2C5spiQYn6JVzzKiSfS2cXDWddncamA9dfUkziSCgnG6SD6nC74YGrSizqgFFkP2V",
  "key15": "23kYswn29zJUnULss6JmS5TEFeWbjvp5rmk8TYfAF9UQx4CVAazd3iLo8hU8pRUkhQYS6rW5n2agDdZuJaT7Uev6",
  "key16": "4TMBkNPXPxQiKrCdvjgnSTpdezon8dLwoHp3KESQCfp6G9N7AzEnjtTA98oxhN1VTH19R3ZnvEC2aSgAdWCgMt16",
  "key17": "652aCFnezjSuMwhfACUcN7JErxV3JihpZvxojFMyYP4LH1B6w7qBHLiWX9xm2jQMfFqc4Mv62tkBjFTzAgoW1Vrc",
  "key18": "3NESRMXtTJyAS45RaUJxDGDFT3XcgeAp7NvgqdHd1gStGnL4tWH5wCvQQJPHumrA4pV4jYJNH2YuNy2fk38Eqseu",
  "key19": "4v9Su9SpVjn93mYNDnywkPE1JMyKYbinegAnm5ZwzgQDBWtNCu3qpbJ6vUiK5NdxYwUDrXWtDWPKuDxo7FAefopQ",
  "key20": "5LvYgAUunwPWwtBgWAQrT4wioXUJLcqMhuahd8McDaLLor5rgZ58UQexH32ePQNbaPQZnzkFSPX7EtsprEUuWqtN",
  "key21": "3MPWAUYGHpP5Y7F1jLqdjTGCytLfRJherPkvdar2UXAh1qgsnrcJNdTXcG7kBtQJGVifTQgBeoHCQSeqQG41osoU",
  "key22": "PHtCA8yBuFdkKdCuoy5sn5eSdXtRVVjDGysx5VoWGx2GnimuV25RUayMJjdPVu3zp8tXCSQiYLjGkgm9iuWs8dp",
  "key23": "3kkEDZoFtcYxhfUD7BCDcweJBXtSMbkDYhXAC2trMpaYUqcc65zQkS4tyVs46gdPcmGySKCFozgwVh2oR3LSw4FC",
  "key24": "43ceNG4qseUjV4jrFnGh2Kzjo72b1vL9eXSc1xuotdqeQhJf87AVds4Q3nmNeDd7FAozTDMw9frUUpMMfUgbqgSJ",
  "key25": "ENsz6WgR1WzcTgx8Ckx5ad96Z9jRoxC2CBHE9w9cS68pqdMxY7EivtKxh6VboyxkppCeeqSaqhomhjKm3Wodboj",
  "key26": "3gXTe3hbeHaQv6DWk4oCR4SSvEbDn3CXRVKcE82Lv4UEvDnK1VNwtS88UUEpgeL3octMeotSSUy6dz8AsMzCrNme",
  "key27": "2RfReJJCcF8V9fjEWo3R7qbmqKWKsGCLYVRrqzMXS8j3V8YPtQmKQYSo3CXpAqJXjFg9FRLRvaPc8jQ2t35PMAnw",
  "key28": "LzRTmSVmF2B9wyuvmFxLWgWDkPgerwyRdHBbAL7QMDS6qmuPJVASM7qfTJFxAcYXdzMR7UbW9RPyx1xAcGrynfq",
  "key29": "3iKh78BkuJXyArwxkcEgATi3cGGnkk2UwSw1FEat4PC4JboqtAmdJiAfFNymmAv3vL78gEJhPiy11BF7MaGg6cUk",
  "key30": "3UhX6ksW8J89ZiSe6qFf5wrDRm5nVoMPgaGPRMbnEnBMhe7m3qV5xxXyj3aTyN2UBcBGTz8Bdi7btW1sYYdtFmxG"
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
