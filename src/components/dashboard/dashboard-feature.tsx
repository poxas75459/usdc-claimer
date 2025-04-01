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
    "5ecMY6HpeRTF5bFwB3YUs7YWJpc9i9dQc22kPtAa2w558fzHTZjoXTQ5sWtKJQ79oFP7pzbK8h1NJw9w9F68HvFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wceC9mjgoX6cwLh5GsxCqpmQ9yQnSgthiY1o64z9E77CsowAFpvNVppwkc3kDv9VHfsv2GQq9L2iWjvMawESQDs",
  "key1": "5gnrof87qk5R7eGPzniafWyRJnWPdmi7xKYvPn34pS4k87pmL8P53VzQFANKBh7Y6ELtCy2YYnUH2GtfDrC534ra",
  "key2": "4A1XXARKvNwsoUWe3ceFWsdsGwNcNUEzFCbPPfHpqxxp4XsbUSvbkHyfHoFZUAxnyiSB5mDRAyzZVKJVRyHnhyQE",
  "key3": "61KsbCSkJNPvTQbpw5ukzXhura5o8KeFab7V8JZYaBT8NAsybmi4tycHXRX2wqxGXSDJtiGYrrJX7Cq33UZw3pdu",
  "key4": "659BsnetUtUR7NHWdDbVBhbRbab22QQVa5UQHbSmziKHzKSUKVcdT5bMAsYVnkq5u12acxVGafqEvG4G89jQf31S",
  "key5": "VsCzmiACjJWsyoyKzENJtHJKd2wRNYHt7ke89T45LQegs6vyJt4NWpprNPwXz142THnobbVX7Y8sNQgai1q4Ust",
  "key6": "3PfMhGnRTTNUxSQKh6NFk4jahnQy3qUf9YukcGc7jMYBiwGVHSEMhvJ9UJn6485uPweryeZ8Wv1HFiRjwqMQq2sT",
  "key7": "36YvvUDEKictkEfCv3NZTVeGHVcLeCBNtLAGBJs6VF9gbPw6c6ATPhiHPrzJ7T9R11myxKjcWDAUf92jwgy6hW3U",
  "key8": "2xCp1RsKgrM2aQFUaLE3BMdUoiQNycaLkaR5bdwdawyTqJxoMsT2C1FLQQPuFRJp1QikVbTmr2uh82v12oGwUaLt",
  "key9": "2xB9wzyJ7Yivu5jJF3DAVsnL75XVzaFZjP8eEpaUPRaxkzesdR9WJXjfkSp1xMYsr6QwSLBqi5apdCQuAfuuTFxb",
  "key10": "2THumhudjW4esSM9G4JtoaUyfsXURL9sQpbTYzoYNWWHHVDtfTZMACPi9RXoLWzp8N631J1H9Hue4BXyzPdUz2KN",
  "key11": "4EHcpguzjbKDMwTrUE2YjJKx5PtAgkn9EecYiSpfbw4eNfYRidAa884CsiuokTVeBjKLTHJfFBG8bw6jgjrjgjeF",
  "key12": "iA78wEp2D9aiC2ZrjTsEvPzfXg4kqNmseL5k7enpCKawLfxPPf5KvKK4QVQpvDwaeaAeo7CcRyycbchF3TYDzpZ",
  "key13": "27yKRy1Wh6xbqmU9JyPtgSjq3pPBvrXg9QMu9xnpy4gbzTXE6voauYXighNBRuhCLhaw6y9yyZGpMfUC78TJzW5L",
  "key14": "5wBLoRUqaCnDH24YvNrPUv148mqjvnkmp6vLbZPWPiwhy5usvnnp6a3FVUeNpYEAwcsPv5nu4Eoshk9MqfMnUAx",
  "key15": "4cxFAZpEV3uBA8GnsVCdgSXcuRMSA9yhv7aeB4BQtaQLTfn9nBnzhuMEuVp1xCmFfdUBsWku9nUH1ZbcDX1aomXn",
  "key16": "33XonMYWY688FXwpXSbzQk5Zy88nC5jUkuioZ31gXBSuaNJcqSK4XiHBA2joVMGbF1hEhhu89aQAGToKRQ96iV9d",
  "key17": "2jHa5KpazurUrPGzWdJ2km4gLnDCMJtTzZXCMTPQyifecoGYMRvZVLJqn21yLwrpjbi7pSr8mEsBGWY9iZEQVBsb",
  "key18": "36amEtEcn6EoFqq3eVFkMAPWumvkJrja9t9vJRTwiag2135weZuYicCipDWhPg7LEJV6p6r25HTXsPKN8uFN6136",
  "key19": "5CnAJpWUZw67iFACW7gcURARBVhwtw6QZ7bTSN8bLWwjhg7G1BRHMRoftNKYdhubR6AxNa8KCNDU6neqA2QNZiDi",
  "key20": "5UrgFtATEKmPAEH5zB9GtdCmxiuqK9FATBun5XWoVWVcREZMCi3MZHpr3n2xD6j7Tu2YFKwguU4HGuHLyNPwyF8u",
  "key21": "47ZUXyNig6zkdWDEEbTLNK6ZZL3E3bdw412jm91k6t8Vta4ThLHbxfAGEXkvcmWUhpLYvLqsgrYu6b7GG65LQWnT",
  "key22": "5kHcB6CSAuUyK8rJZduiQo14E33PQoJZ9HsVy743jNjvboepZx9PFBWdgT6kUTXbcWNCt76PSxfr6Vkwh4obXEB6",
  "key23": "4TSqnziJMc8sRANL9NwwU2xtz3U6JNKavtarVEgFi11YYQWuuGCN7cZjNZLjg1bKicive1St6CpCZkKtmdgKU8aq",
  "key24": "KnbTsuVtN9bjbCq7JP7z47nqyFohSCGiDfTKndDvix45WpLFrBGECjS4dz8ZLrifjGCa6YBbgsUYetWmEoDVfgz",
  "key25": "3HqYjaNtcJM6AjZn4uTErgHxqVvr8ZsqYk1eNw8MYvFhzDZz3PzqkzyNbYgsN6LZ6TNUhKyAfv5jhYM8aiHniiSh",
  "key26": "2ZCyggbjRe3QYh6U43r5rLcgcPxtTf3ogopf6BARX2mEHSX7eYJbN8R63Zd5wAUDn3BFWh49AaU5jcJ4V4kjyygC",
  "key27": "3LRNJiFEfTqCHhMeCxfBsp7QKKTeANQSdsJLSWiDo5RDuUJwnXbdmF1GeaxZoTGEUfr9LDdPDnnsENJCxiWaFxYx",
  "key28": "Rfc6jvRBwxonybKU5Ct6kNob6qpwxhhkmreyXskyajubAaLXhYTjc43G9S8xJM77bBQfqYLE6MGHnF9MLkWxZPy",
  "key29": "5iucMkqgA2UD9KTgMYRp4oKRuEcYqw7VmTTnXDgxPFiWNDKWoMqxs155Q9kJfUDurBQoyW3PH7FKvc7xev52PUyM",
  "key30": "3HSmFM3cwM668vZdU4SQJTnHo3KNT9gbCea46v48jxCydCQKxuEXwb8XYPhm1yBcSHQXWbxLHFQLPvfuxMtefcHk",
  "key31": "2TGaaedTDRdNeLjU3Ymm4xC4FCTgQZP9FdAPan79mNo7DfqXxaen1GutR4obXTs1FhzGH2f12mySZnbF7q2HVdis",
  "key32": "2n8VNgsZHHXY6d6rr5HTPthXczcNzU7oTKQKRFwfdcLx875SX45cd1NaV9Nz8CU15DiAtHPXtRCMT77r6VJD5Hrm",
  "key33": "icRbuntHyrxkp8WG4oXMGF7QBT9Q6dXBW7YcxFhgbBPejhbR6v3FYX9nE9a3Ziry38ESmQreH4McMRQjhdFHQZk",
  "key34": "5Xso41ZpC1qashbJDWEiqhH2ctiX6xCdT1XVnPb1a6McUEiyLJrjKHhM2fyMTfFtU6VWxhrLLbp5JfX6Phqkn6ZZ",
  "key35": "5mnWAceSLF139txfYtDZBSEy7eiK2XgeGfgoTxikPgECrRLjWzXHx3JfAjPzz6WwKTdEVY8NtMeLwFx1L9ipsiKL",
  "key36": "5yvXe85oRAE5kXAQK1v23HBXW8NvZ6qpQToAU6uLySZNAkvuWnQvH19o2bZLZdMgfrEqkswKFRkC3kcTNi4CBkdm",
  "key37": "2UriFLnxGVQF9R5NhcrUgzd5xie6NXA4s18Jsj8vVmBi2fHLSpqcLszARaZTcaM2peyXSLV5bcbGkcVNcA4M6QzN",
  "key38": "517qCvKvTYR7E1r3sLXtZ9b1uWZxA7UagMdHPjKoC21UjcyE1k7GBHmLPSAKJyZ7X51St4mFjb5QiTUFCXninNjY",
  "key39": "5u5j8sfi9JZvGDvU1F2reZ1YMTR9Bo7kLGNPFkXJ4V5Sa7cwKqYzYeWKcsG2xjRVQRFcds779z4KEqYonCbmLaH1",
  "key40": "bk2Uade9VbTnBcARo15Zza6oSxFKtmeeNBdFLvBoxNuDtTBjEeE9ng8nC27Y6mTZ6E3HdULLRgPS8GCv9dPEyhP",
  "key41": "2pE9pnXt7coJmyRDT9WFrnyvtrv1aegDtzxBU21MAtt9v9MrnATTkSRA2aRT6Tn3eQCqqmLnThQ69cNrP9wNFb45",
  "key42": "3W6XfG9ZYKRri4UZxXeDWuyoTWtwhhEjnNfuuXi97N68AeFpNvPe99zjN9nWXjQuyKs4vnSZsuC1pHHhNkLdRz4k",
  "key43": "4CGZ6zWjTEfoZXT47i5X5c4jw4aaNcKm7jtwgdUaFemB5aU3U71uoXKvSxsBat1KWrrcoUCT8ScLjJvCJAWMyaGj",
  "key44": "2espTfqxy5EmHnogBvMhdbUSUvvSPzJ5y7fq7vjPa29JWSBvZyYC5s7Xek9Ltp71AMCAG8Y8nx12DKo1EHC1eFJc",
  "key45": "L5Ja7uogDmbwbpESGCU9ZfP5JJQ9AAf28xzWH88PXDrf1cQES4GpKog69yewza75vehKQ5NM2CkKcaoJsJ36J5e"
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
