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
    "4NABby7uQhhRbMKK1iJXPuA5CM7BkWWgXYV2MQFHqaLcm9B5tQyrPSPnNy6xv78aV5rceNFKwCfW8BNCLVozWcSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ign85sGqcHYzeMpsAzo5um4v8V2YFRARLfkC4KvTKGXNFNxynCPmv2dFukWTda4Kx3WaDwecs3sWW4EwpHkU6Gb",
  "key1": "2Ynuayx4bVNGwVpFmwtekbSqckKQprRgpfuKM9LABLDybMd44FDwV4C9G7Hr1QrokUPL2ZjWXd6hQYfFo4aQSAoP",
  "key2": "5n2A3Ws5sxNRst1csePoFp3B3NmURWiHeZcaGLK7FyGTNwwWaHNdSj22fhGbVecEu6fYC8jV5qaArs9w9dRV8d2R",
  "key3": "4Tygs4gmUnmAHXEBQZ6Pd6gYMeopeq53dva9TSugnGBUfHmsDdDTz89oD5dUB7dUKGaaNFS7z8NyoF7LZbztKp9x",
  "key4": "5Np2Yd6BLXxERsb4gVmzbzF15Grtsp3NZ29F3sRyHhrw3dQT5MYFehNi67s5SyWUhmPN3KA4XiJJX6T5okH7rkuE",
  "key5": "44J9akSviSerdB6pfJ1DWmvjk2mfcc4M7dTJL3Dxw8jPG3HKghgPu1sqNBjFYfZVMh9VwTUfSv154jpz9rwWE6pU",
  "key6": "5dk6ufE87JwPz22542JDHSkpQTsFqeq1FbPJgHocM47h5EyJNKRMbuXqEmvWV6creydhCfR9Wbf6HW8n6hodJdVC",
  "key7": "5iKwHhTP6QFVr1g65EMFk9SWd7qBxUbuiA51jBAYWZVUPtz7AtkcVHGeEEq5fX173JjbXfkJ7QQCBCzuEc9bydUM",
  "key8": "4QZwvWUpYUwfqLfF8SA3yCLxREnw6m4f3Pga1zpjTUaos4pm3Lu4xohLFLAa8tkCsj3fRM2Qa1SAh9ujELJyS3iM",
  "key9": "4KKt3vbrDEf9Hg1Xi8GgySqjXLDdjCeK8bken3vMC3eeD2QW6pJ4PdrwVKrf3JkZFZGLXQz6hJny6ctvgkWYVYyA",
  "key10": "3cxouBTszcu7yrL71vdpMQdt1Jx32QYvjFbYB6ZPNtL9N1YGbGXhf13mGFFU8pPuSH4nbtwnwyqvZu9fgqSMj1x5",
  "key11": "3w5zJbTpKir8XAnzMSwdZ9dLpbaydDcXrqf124GwsbVA9By7X3iggYTWscKEHe4wUniSvwZAA8ZpWZvnu96u1XF6",
  "key12": "2GpY3tkFDJ5TUPC9XKKackUPA199S3M4Kz7pptBb6TFuXBp8rowKz6B9BhabSKgSJWXq9JVWZvVDWem9iT8BS4eF",
  "key13": "r3oQgg9hd79iCjyFgQwjAsmyFSYXsqfZDbMhkzvmZPDgbaYqgrVC5E3LXaLjvVV5GzUprqackRyQTHm8881yXgH",
  "key14": "63yiT65TvfeCXGpjfzYuBd2iaq6JUKKVX3p8GVNUECHBbv8w5QEjXuPcGu48DxivDyZ2kFKf1Wv2Af9ioaaWpCDG",
  "key15": "3wYzpkGZGG1sPCKreWijRsUZKyhhiQ3ukPp1ZRjH1N7teUZWt5j17stzrAYmZVyFZHknMWy69FJRdix2ebbBrqnB",
  "key16": "4efuV5GdGv4cSeU1QTBLaBZkv9tSY3EWZLUWovQa8CEQfF2cnd6kkiuokhwhnjq248BKdKaXY35ebLJyEvN2DTh",
  "key17": "3Q6QM2eXjgtcCBdr6mJEmjQegmWaYNYYmurmjvV95fQu6NSimoxX1z4Zisc4nyfSxvjPfJwhdxxLUKf8ifAMeHEA",
  "key18": "2JzF4pN5ZXvHMMPK7E68oT8Tcj6uK2Nhf8nNqzewj2rxPFGgHvtLuc7xbUwbWdAq5psp1nXY3dxbjrgVCxB4dEsP",
  "key19": "5yCRcKvJu2qpGztsKd2zj3ASBy7vF4XAs4dee8mYtQozmd72bPaJZPVtAs4H1K8Q3Gcbj7QW4AUWDkkiaqUT4QLQ",
  "key20": "4ToHRDDhKi79d8ocJmEnVsqsf4GZLSFWCXcQZHZ2h5C8c2xh5WVraBS6b1fwvvoJKUnDxYRx217dWVBe9EXLT7hy",
  "key21": "5MqksT3VHDMMpBSvgnn73MzkA76PTVdD2NPd8V7ze23J3GZryvfshYCgBCnqPzTaDMERMwTW6FRPK9bBnV8yBnwF",
  "key22": "4pdDtPK1EdHt6PKgjcs8a5NheY5dgwy2pPehvq1N628hvgfFo6z9TApbiXNQdH1dXhkVzCGTE2qMbYkqPUrW4AXb",
  "key23": "3YAd4oHZ7u5aQQNFEQGAZJSobX1gDPgi4VcLy1hw32Vnq97ADsU4rAvmMSQSi1Vzii1q5xUsTvgZubbVp9CgNJ3V",
  "key24": "4QFJRJ6rqVWzuskZyeZYVi1ukn63PsCDgmSBqGyi7pFZncFL8fWFtkKSBYfv4ELaCNyH8vCG7gJUZYrTaQp1pVdU"
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
