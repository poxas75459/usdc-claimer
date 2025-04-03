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
    "2hWRq82jT1uSJpLHRVBnKzLERRncoeAXZBnkB6DHyyVQ8LPcBt5MUyvxUEwUPkG3BBeySbRsNe2rygNrH5fZv1Pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57BcXgwLoHstgUAX1MXmUyMceGjoNjTZ7R9RiKFqbubxZNE4Hrh5cd3HMRoWNYJ8VjnCSd4MqCP3d4tLJ77xhcSj",
  "key1": "5miuXhDSkS2QuzKBgc94CFsiPuuK6sadaY7quCQr5uoo4P5z6WiRy86QjT4UquGhoS5xLjqSaYLPCCXKGrCeLLuC",
  "key2": "4VKawo2ZYzMMjv8RBYJ6hdH1hkWJDnmCBiggSXzAw3pGSYuH8xA4BdkNNd6Gtjh7ijhzgg3QWW5iDBZaWPaNhqG3",
  "key3": "5Ps47EDEk1nnstz3PP3DcAHAD26QmhhyXjaf1rF529PqSpRUF1oQtLUKcuYYisD4EU3aVZLvxKvxno1aNLWDxTJ",
  "key4": "5c8fX5iYUjrUvRNkYXU9MwpCS3cU9QKgF5SDSmcyjsASYRZZMdsKXEqVX6Hv7TCZcoCkgjXjN6cug217xqdq3xpK",
  "key5": "34qbjj1e71h8YTCinFapNeqnwbzsAqNy9To1ez8FyEBUX7nMqdiApsnxzsFLnUhnUfJkj3aLMrobE1F7c4inR4Z2",
  "key6": "VojJ4gxiJJPrqcezrszyNv2wxDcJkQafrJf91c4rrWtonc7xyjQqKBR4kFXk3WfFpdfxDxsoGi2bg7qg6Nhbrtd",
  "key7": "5ZQphuD5g1txgyhMJCcuaR3TN9qUEruW2pgS2siabPNu99FcKPRZiDBTq95v9uCMmBwCXsRroszPrdXyy79p4d2X",
  "key8": "5muiGCdooyDbLtnt92u1R1j6XSR2txyZV3T9Js8Jbe2rT9pgZAUQZiYreGc3U2dPVMgPZMz1hntw8QtXeMA7EH36",
  "key9": "3fAg4oGSPdou91KkaEqcvDsm3V4XEYysugvAHkE2DS9rittxqhMQQg8qnSt6BxX76P86vCBVvjAJbGuQwyfHbNiZ",
  "key10": "DwB4a1Lid9CkveqnzP23Tcp9UQ7KQovLptX6W9c1WEhHT9wV2MnkAVaHtT7ALk8kBZeNuqcG8dy1GycTKGoUDeB",
  "key11": "3XPforRNMHZ3twoJhDmWhN6vKcAAQdqk8QcPgoWfwyiLpBspMHGcJ3fgBuFCvxK6DmNGQ3L7C6AmN9VSSQcqHj9",
  "key12": "2757z2ZcozGVMLkaVnPNsb9A5XusJULKEyjPUiTE3xHge7EBF97Etyx2jqoLwC5ANNvrtVMS8buAC3ov7t81ZC5w",
  "key13": "5dFVjMEhmtJDdetUk9JTJgWvTE9SP8jpnuSb9J7TDCFu1PdSAagSKqQTSn7aXx4B24PuoXvpdLfVNwSiJJQUqzgs",
  "key14": "4tiSEoLWjQf9hEueboU5vG9uuuSQ8som9KJaCu6HDP18zNYsneo8WKEjKDWxvES5kxrN7hPH6PqZuz6s8L8r7rWZ",
  "key15": "22ghVZoLuYTmPvafEzzL8vor6ach9tqXV5hqVb4CzTb1AE39HZYjmkwLZCsToopHANR135zY5wyL7L6Du3Ty7FE9",
  "key16": "8Xwmfc2sab23ipjMrrjBKxK3jEWcmz1RmBTbMoPFB6swHrAZUfd84C4jKUne4nns5xYN22uRTrktPqQvGZ4X7xE",
  "key17": "WSZGpNxJhiwFBYkNZTVPcg7NFYJC1MTSHQZT1Q6xDZq2bkhmez3hY9ZaMNJA5obqZF5Y3aYWwRdQZc4kSb8FLAZ",
  "key18": "44sUAm8HmUrdaqWmDc7XwMJVGftuJBe8UVsNdYc1URYRCxH8VbCAKZtQQMtStJzsMmrFtLHDGfoKzJrY5idCAgzT",
  "key19": "3Mi767UP2EjkWaH8TZPzkmLWqZiFSA1qtRx9eX5YbhHfwQzSLzqiHpF9zRzjkEbGvPvxwwWXeGQ7ekPMyo8vkES7",
  "key20": "2dtuw7XbLx94nDxerUTU5zqSCpZzwG8dgqXFBcKjwDRRuSbm4ehtGE7axH8iWZoci2L8D11x2roUXpfQr92GJx8u",
  "key21": "3GhXybKA6x79f3C65Yeo4EPN1H1ycKJDCrADcFvzkd8ybXSMiZNCPPfQ5fc1QBPNGD3rUWXKzXbLuHSEudxw9tYY",
  "key22": "56STDmv7THmojKjQZNeZS4xjGjswMD3xzgS3KLBa1pWRrBuCz1ENL3cx9zQikoaMHKYTM2qE7Ss2BuceUtpkPRtH",
  "key23": "3UwN17dcpohrVee1EzZrdsfDPR5fnDi5bbY9NgRwopRjntHPjiceRacyznQw6TQbXcTsdrfXpxVBwh3vGSkACrrB",
  "key24": "NFeLmpJmFVrQMVH1ENjnvNYkMXwjbnoyFKjejzzeKvnHWCqdyW69m5USs1FRL3TfhVdturfoumqANFKZKR9cPyT",
  "key25": "hwjtzeUurSwRiJaA6h3MnCY3noowqUTgZNJjBwVLCT9kvKupLqq61sgMD8j8kj7k9LCoTta9fesPuwMCzuqSk4K",
  "key26": "2DUotZGFfkLPJnC7ybNkSSLpGBKdkMMBRr5jcb8CMiCQpwNJeWSAUTBzMx4XcudkXrKSsGGb4HzYK2GAgYBXF1Q6",
  "key27": "Gc5NDGewUDtz3Czg55F17zLzWdfnz38ekuSbbGAL1TdSBv4vqWQKPvVWz9A5rD53UB5L9AkdmCVDpDtfzigQP5u"
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
