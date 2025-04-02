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
    "3dhf7NcpmtNvLPmbmGxrCEAuLGgphedoQXduaSCrRdHggoFxz726EJmHe5fm8k36AEn7ct9W9CxnmQ4ptv4cC8BP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M9giwbV3LA9MFtroSRw4yASuhiUL7h9bqp6RpZm7pJmDsjFU4hNPjfn5V39S1THzzJ6Uokpx4A3JjvorrZGbNW5",
  "key1": "5CjiJSLMwELTsnzeuVWwgaUjRRUgnbbWquumkxcphsxWiqmtFxgu2VwiWLGZvtGNv359RHZmJ2k8V4JioGofQHWS",
  "key2": "3QkW7LvKc4iq2DTmwESDg3zmbBu8RvgUYtxh4NGXjAQ3GeSZGX7sx3TqXvqoigihtv2aX5sVsBS7QzZHYH22pKnx",
  "key3": "4SwSrBtXMHpWizLkGinT2pKZWLnmFxbja7axoPno6jf35xSBEJTHqhFX2kUKy8wXzbU7DgxzV8JQUuoK6hR47qcu",
  "key4": "3AsD2tGSY39KzLsdM3QPhfWcX42t8xPND8Dj4UqX4eZE5echSXEAEeEenBheaLzWM4zXGCMK6sjVPkdRWp1K951C",
  "key5": "rJpkSwXhvkxc1Vjh4iCrd1MmyoBcv6xLvVW68B6ASiirMbEoNoQ8Xus4jdzafp1E1CdrXtoKtdhepFMfNqhxZQo",
  "key6": "5VP27uPQHfNzCuzMScTkNpbyvWTAcwdihxJtHbsJ8fsDAVTuPaGHw3fWf2FFFDKSe4xU8TWFf1dAtZDS3jRaJmLA",
  "key7": "3qb4HKdRBToqfojnEtcvLvejh842GpCJFaWiDvg9wgR6UC87YGL4gs94wCreH5ueQsWkWW4hbxia5kHHV9avuicb",
  "key8": "xDf8tHvA2P9mpDn1ahc7YuB6SwHt4CVkHFL2pXEuw8x24AqawifXma7HdYVqZeGqbyVQW56PixUXUQXkfv9TQub",
  "key9": "2dvTEo7cReWnT7q3tLDnvZTWZRKvJQGsek2surhnPhRwWCWRmRzhhWS41ZdT8JS8cez3JnQUGuMuHth11N1nmFkd",
  "key10": "2L2bw4D6mwEHWD6mYkG3YYmUtFB6PUiVFms67hdFXgXeKH1Ypi2DgBn5SB9cvyV2P4K4rehEKwYQ3c3PNevFxPgQ",
  "key11": "5vWceDbbFMbgY9kyueBy3w5G7jQFx3KwuwamjznF4mrqCyHb8AEZmhqiS3ofBEFYAE7EALn2LKum94UWYAkASMse",
  "key12": "5AK769NgK7B6Li4ptY9LcMZPAGLMAUMq5wisQMwrY8gyUFodimRQZNvcuKcpZSaKSj8MLLeRqQ1pmNfzHdZp7DeW",
  "key13": "5B2wS9MwTVj4dbkiixNvYEeik5QrG9DJtzFbbsaWAm6a2VgT3GDgBhBKi8g9qcGDDePooFXrN7cWyoZjCKeF15Yv",
  "key14": "2UX56vxsG8oNg5B1zEfhJrLp93R14Z39ZKFMBujgZrK9CH8L4iktgQikUtyzaTK5zTHTZJG2doPqhfxENSxxVqmk",
  "key15": "2RPDuobKKcBNws4zqfBLkNv5vYphxeNRMNez8KjdmaQaEHmiE7ZJBj8DZzY9riZhQdaeqnurewHuHhkZrviQz7QH",
  "key16": "2PhGpRKDNJpRT51hGAncZc9o48JYNMZjJfJ7UmC52M5eBXzUvRbYWCZ1YF8MfPs4erpTniBhEd7MrweJaQZ3EdiN",
  "key17": "3kQcsBiF67RxegW34t7ANcRNWc39dBmpWVAFrRjhC8pcfh7wVaa6dfniRTGqZaTcsnSXD4f7jcYTdupRnookeq4A",
  "key18": "5qiK4Yk3mT4Bu2SY3v3hEshYg1cmmDLhXPVZ9SqdNvuYEdhRWyEVPpRRT1CXmJS54tQoYSUuYKsGjTm1Tz9tXx1c",
  "key19": "2BLUFULaPxhDqN2d7YpGQGcpDyRXcV1ecuGhneZkBPBqtrqWsCch2QNgEzba71EzfsymAYDuNRVe82goFSqo53yy",
  "key20": "3ZF17R4kWWXpEWkScsvnzp8WiYd744MJnFQ4PgdhY7rqaRaonNGawfgFUGdvkKHmCCfdydDPD9PN9cPa4jzgF33x",
  "key21": "3BdheZmeepvp2BRSNedVn5TZKrhKK2G3pmjHabC8ZEP97pMMuPYQUSHXahwcAKn2Ad31ehwdaqqvmzC1JQtXRokg",
  "key22": "Cj7hQJ4nwmHLUmjgCMNrpcZLcrNJsY82CQttKBKJUwLrzSDUfpCwLqXD1JnP9zMSQgucihDtibqWFwULubBiddL",
  "key23": "4HmL1TXm1obyBurTVa3oiELfdMTjQxj294L75Z4UHKu9ByVSgVuWG751y2TZqWEgFmdJnNFZwi5TeFJnoFAuroeQ",
  "key24": "48AH28f9d9Fr4Z6ncVJbR7jQgNJ1sMSpMEfkLrn3bQu9MWH3757HG6iPoB5Sfvx2fLWwPmFoB5Y7YFBVkxTvq2X2",
  "key25": "J7UpTUsq3j9c4ruKMKAy3NqNEby3Cn8RH6nGLcjWbejTU4uPFXtPuArVriQF8Yhfwc9Knpsk4XhSxEAVXvUwKbF",
  "key26": "2e8vDGj3cVhJb5ZrCEyJLmHwqCzRvWPgeQx7Djt1z68rHzrbPuUdvtCEa21CSjZi1yYziefRoTNEgMQpqgJWJ7HH",
  "key27": "2uobrW8mfXbg4taHt9SRdwXy2tTHGWjis432pQzFTYx66DBkRDGEL6RfQFPjEJWS1pypg72K8PS2HUcojsj5hxuD",
  "key28": "Nkn9Dxs35KWJvwicqwmKxkp7XkTBc6XbKbDgKsRVVjKn1rzTrGmJDXT6rqdf2q9GF6cFH2AkYjUzQJ89YR7ZEDT",
  "key29": "9Gt2GY7DK8ZM4awjWDvGgPvavffmnWiqDspfij95Z3XJET6fgSJGWpP359fSReSPdEs6xPwSpFgrLQ8hAERkjWw"
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
