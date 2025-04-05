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
    "GkJ4xz9T84ZDeqYBvZSQQbDFauRXL6Kvhjmpo9hj9VTavscfGrjW7QNUyyCeDMtbjTxRMZB8ksGosLkke2k5k74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzY76D1UjX7bjqY8Yqi2pLQVberx36MHxuUyupPmvdq9EKs94nRYstUHXAg9xjDvP53fvZaMyquAHarY6BXiVes",
  "key1": "2WAu4F8xxLiBvvDZ4NKT7H1L92h7ksViKNDvAJ98pTWpR7HAJgVdsLgEMshoFtHVY6uez3W82P2Q9vZGLcnERQE",
  "key2": "3dmdeijXXBuZEKhFXf5tMPr7CkHbDA3MHKenmJvAB3bzMicxVak1mmDhE2o3i7nFPCmatYDH7SwoDdSeUaz8PnsL",
  "key3": "4JmfSei9S2DV7ojeUUZJoj4HH3r3DUBeD1hn8zKhV7EYGsmcNf99XZ7hs7pptNMPbtidG8rwYFA7EDUsYP9kv4Lf",
  "key4": "32wBCsH7NSXi9AukpnEXsKwY7tWoBwAmMejcNjZbDYH9Uk15c2FkhzTWrUC3WwEedvd9sHtHKq4KKjtRXy65LFzE",
  "key5": "yE2PMGDauv6GMWkPbG5tFn1ML4XQiMooA84UjbZR3u9LKh6fGnXi7zZ18YysCtVMEkd7D5uhconEFe5vTK2DReP",
  "key6": "3j2thcwA7RFD8ATqacQWvQwv7ohvXMh1QF3AzaNx5dFn7bsy937dsksgexgJ3vb95NYrCeZqVfEaZd9XGUAwG3F6",
  "key7": "979hrrBf9WJZCXF3gtdDURkXJTQhWh8EXcnKUsnL5XLuso7FY6KexPDYEjFgEZsUfpCNCvgoYC61FFHEuFWWL2M",
  "key8": "33kSvRTsWeEQ8UVgm6kiY84LPyY2kGjspds4AzGX6VwGhWWsoJXN9JC6zihcyZE27JkffeKfXZJx8yfXXMs1ebjQ",
  "key9": "4bMsvRjoPmeayBHG92XHz9LZoYhpXZM1wND2Bg9bwfB8iJxuzFHhnbGENnBLytPn2pfwXEEgijdiuG6kTqaEKeNM",
  "key10": "24U23J2tNPQSsBtDjqvfkaosTNarYXZU9Py4HRMxeFaWuafBNtndfTGyroS72KpMQ2dxZXVNVbHSyfQoJHJ4rZ5Z",
  "key11": "4Rupb1UUGUp9m1J3BJSiwx4b71sRmHLq68d7tHz3p12GhNn6VB5HaaWi3JM6X3SD9PW8L9SeWcrpxoMuaiwQBBur",
  "key12": "uSRnYQNWJzZJczffHWmtQd1FkJGwjuZoGnTT6sPtLuLYrycWPb5UQ81YJoYBTLz1Zirh2BYa7kxXumdLYHgvidj",
  "key13": "24wbkAyizYR9osxvKSr8AJ5zmvgZ2Br411HxdmNQjvV1oNKY19j5ERYawC1eqmaoh9CceWhBJyv4M1A1f1F7gai4",
  "key14": "iTH1twd4SzMhTJRSy6n4VdBRkcBj9cEoRHWftzkCHmjgbY482bKwdm6jSCnDhLNupyFuNDHN8Cetz232UgBysxK",
  "key15": "3vV2YEZXdHGCQYUvYtT8skWXPMDevHoxUdCVVksKeHxDzq6M3V48Z76H9uq9jQDJ69HFXiyvByhXpn9hjLBCXmXw",
  "key16": "Z2m5YDZez8VsQmLAUz3JChN5Lu5Qv1tGXMLj8j5sZYmMuAtF7j4BkYtSBSror7pQxu2w9esLTSnJfoLBYDU85NB",
  "key17": "21xBdHR2FxL6C3uv66Qt642jGFvHw4NN1MofPdYwooSWgB5n7KsFz4Rtsndjg1bagQN11BqMbYfFzERxzVrTH3vj",
  "key18": "5dSdfExxm2UPyQ6wugGZVtyrFtJtPk1RTU8JhMVRuE6q1gB5tCWa5K3Jt1M7qEH2SUdv6hGCeVr28DQXCULnjnBz",
  "key19": "3ghQ4SQRC5zxSLW7MqSdXeQQnjZdiY2aFjgRzZf7rzZbuyr8hTfHFThJTnWYGTcGbVkdbdRK8JrQiQbXDtEiDCpL",
  "key20": "57ZT6rM9E81e1sQMtmSgvvtfpzQpU721JQXRPwwBKP5BUsYALzyTkxzSJ4VmZyMz6FfqhVzw1jiXMdhbCTWvuZGp",
  "key21": "38ia2wcZANzixTtruv8gN3AzjHVNH9ajeaugEDKWWHZZF3hotmAioskWPrUUCf7q3pGKX3L5iM268ntb3LW8dCMr",
  "key22": "2Yimru8EX7PhBEoTFEUhGQjzbAAQW11oLwen3BNPuF9NfprWTYgcoijBdRZgtwjR1utxzNQrqsjaLeq1idXBz1WV",
  "key23": "2CG2pznkhEHnHbW3JR8FCmo5NjYXCb5JDzMcd2zhAQZUEYEW3mfu6214xR4ztJbd3KcT95n6FnAHi5KyskdBiZW2",
  "key24": "3GQUomzNZrd7C2nk63gjm2qRxmaE6VXRjc1G4M6L5i4NrvqmY1oKC6TGsbpYFNexh1ETkiDFbpBVW9H6Vzk13g6N",
  "key25": "jmxwtSz8skRLCRPnYPhABXTdH8Fh8pvfNYe3p6Jcdo8UkxBFfoAaE9bCLxfHTRBqa7w5CpNqAn42DAvDrXR7Cic",
  "key26": "4MQtMzJRRU4CN2GhEtcR6a7Rq6pQ8Npza6LCSkahRaP7y2uCnehVsaGkPWQEKVHJEh8tcvxY6UNTXTfjyHkYV6Fq",
  "key27": "4KojuTaeBBqw4F4sLS2cyus35LDGTgDXNx1bZQthTj5AtTyvQJpSBRnFjFkwZKEhBCJHbEZ4u5k51xPcMYu2dpFJ",
  "key28": "2WaqdCUZcNdDhpAJS6HWErGkzxsYocZfzjjbFdMr52RNQfCdQ275vCpu1yvd9zhrGKV83D4C35LzBZshhyUDKgnF",
  "key29": "4BpDqpi9AgtLf1p9D7kPWtM5UJpDpDgS4ptaY63YSXgsy3L1UpysFsoZggW2Wyuy76UpnDfwVSuhAmsjeeDYAK4G",
  "key30": "57PLCf4KfSK5g6sLLLSDgUiWYss6cqdTfXSbVVyaXSjUFPk9FJ5wfokghAkuJfnDKtyhetGBqYfj558Ks9e4sZvH",
  "key31": "57L8GpsCiMwRoXgNofhiRkA2KbhuZtf4chtWxi6GzUkzf1JB5Yi4j3RaViMhmRm2EdYrVqHo7FRKE3imfcSuGKjp",
  "key32": "YxTgF2QReMxvXZ5naEBDSHPV7VkLaxcDebJDoGtzKwpbiBQwAtXYAowcP6Zd3PSNq9s68otxCSoAAm9YPeLYUgp",
  "key33": "4tgfwKZbxsgxNbSGWkEQeF1E4Uv7UvajHAU8RswHv8JweGYjaRPXXXfgZxRtFREu7dY64KpTsZEvdEWGyQpm5SWZ"
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
