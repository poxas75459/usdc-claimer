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
    "671sXxtbkkp8L7LzQUk82dGDwgL7JvoKAZh1wdDrb4VeLAt23knHyHWxW6x3B4ZKTB93CnjR4Xuk7Y7WJXoBgK1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63q7yNnyUxXpueywe3bEwfnnEKo1cH788HRBYc6Cx23BTY3DYXDwbwuYE9BtoENuBpVx8AMNmJMkAdHMTTU5jRAo",
  "key1": "q67w8MXQJ3eGX2gxUezUDaHsQn3gX1cbkQgfKSUSSrMJdcQTGwC483k46n5zyjetwmXVrCaWgwkaa7tYUeZxGmG",
  "key2": "afGmGfBXWrfSL39MnXGRVugrx1tuAiinkuFvKkCw9zUHfUbpzpgTNKU5k9hWgP6FkeEtGEFbrgt6zvbzFmyKjqy",
  "key3": "FdEXPUxvjE5HbzS5vcctP6kwaEvH2CC9VzjgeMiAgEw1q1HD26oUhtJhGNArERnB1a4rx32Ekewmq82NWPDubBC",
  "key4": "1aLaWb5ohpWH3KKqjMuayz9dYaYVVqsKoVVmEADbN2uAEmh5RNiGJsBUniBaA9DkzyadfnrTycGrfa1e8wKj2qZ",
  "key5": "3VjLieVHdbLd8p2niaBWVT63LWR6sBhWpGeXTLvQwuikZAY7G5onCFjn7MyiSPXJgzDp9Fqus6CiNYpgeBzb4D6J",
  "key6": "53VWDwmo76bz61h1y9c9dzitgpj92JzVwRSMHnhyqcGFpMmsZmymHJoaZeYBFSasFx8xrEEh4H6XHCDsgbVs9P8g",
  "key7": "XsmgJcuPWy9fDb57qL5nqGZSgRx84pLWFQ6r99gr4sEURRLCDvX3Yz1CDEiQNdtHpo2HX8AMy2eqp21uCeCsYym",
  "key8": "5APGxDGGsaWq7da5qGsgBtHPWb1cc82Lw1K1sS9PPuHk7vbGzVkm4qGBKVamwssn9RzssDmgvVVKp2awWLv8yvev",
  "key9": "4W762JW3vfjpJApmDZxMtVbMoFMCBQjAHDhdXGpFy2EHfoNAiUrPaT2B8pbPgYB4aKYfQt2ockKCn1yEgoJqJoea",
  "key10": "4szdYwDZU2ESgzQqfEqSdEtpWhydmvf1856LRXV83UdPkd45T2CLzXCuwB3VK8xZW2GUEKA4hcgh3VK2tZSDFqrS",
  "key11": "3q5XDQBZ7dkdFiQ9LqBsiUmhX92cUoAcpMVX68TNHR7JZ788ueMpuM4p43wjMyUctN2GJaYTSJFWoDLfjiBcD9Nd",
  "key12": "22bdKaqyyYxb1HwA8oUidSq1jjEkemTHVBebDu3gNnDxfTu6ht6EiQHyaGscaobQWJVfNxr4ttUyT3GqPnGSH13c",
  "key13": "5v4mjZQQMSf5jCk3NisrR1mJyitbqc1FhkhqFwjksh9pbsRZgE2bHoTNyMFypgM4TKguSFxLAVNcQgxBeaWcEjEz",
  "key14": "35nuVTHH8YoqaaSk27tT6wmZyAoghSpkHd8J5iBAWf2RU1oWbSXE8aJLLtkNX5hvHtn7Vz37VgR6iWbEtSBzZrST",
  "key15": "2Ecfs2Mrv9SBowoksiG72j683p71xA54sZiQ1WuJ598fcWkEe53JPESbPQY9pRVSAC46WeEFDKshpJbMcycABWbT",
  "key16": "55KTrs5Ze17szfkm9ZKUGt8eLhsC5tvBWZBpx9GEYA4nC5uN5JLyJdu1u6uydAT4rqhK8WYHcSwcVFrz3SSV6GXU",
  "key17": "2Wezcb71vKNe3NDEX7TBhxsP5D71NKLRasUcKHEX8UhsknnPyE2Xh6LFRvbB8WG8gSWq9iZNYGfRecXc3mvNC18W",
  "key18": "34ynB4sSKxGjYZ8Gt8oFoYKVaemuXxUnd5zj347Tq7KyfE9GZB1qBYnAwB12EqEDdp3JRUJ6MBrLkv7Sdq6DT79X",
  "key19": "5ZZXSy1yRE1DXJg3UhPr2beHuvFcDZefDGYAmg2JdX8FmgZb8jdRSNdTKHk3ugGeNoWC9qZV42aSzRtU87Pv9ua",
  "key20": "3QQR5pgAQbvRp99iPUvjyDsrXQgihwvyiQYL2JxVhxFgKDVpWDPxSegVvivnKmdqW7rBMsVLyinf8vhHbdaJFwbd",
  "key21": "3WVxqx54dR2RXcTNXECzVr7nYE9V1cVLV1eLrNiv6baGgKbsRJhy8pcHZSziGw4rUUrvi6mPPhsRyXG1CKXvcFUr",
  "key22": "5inynoJTdm3oMicHarKwhxSd6rJMcsZpznPRbLNkmmWzdCD3ixTZeC7a6GPKwjrvfEDAnZyMYm9K6GpxdGCC1RcB",
  "key23": "4wuCEPxELs7jFCNeY2Tb6pYd9nGfsHevc4qFEEbZtZi68Ko8a5sTMCPnDq25DxDUsSn7whuoMKoMqrjPa3oYLTu3",
  "key24": "5gJWgHxK22MxEnt1AsQfxu6729v5gwAQjkZsm8Gws6aWye491DNBL5YVAxyWo7zAhhJFHqyJGtDcSS6C1KzzSKST",
  "key25": "C8vnxFLVMBWLB5KAvGzmUGgLsMLdSGU63cqTLBXbw674cbxQhkm7RPHwjAeb9jZvRcs151S8nkUR3YZcW5g6yur",
  "key26": "3w6tcLGx4xFqM2EUfpaUtYHr9hFVez675byUCpwAND2rGVBarvw1jRcvM32dJ7oRCUy49BNyvnVcpPqCp9BDC3EE",
  "key27": "4qDhTh3JfZq17bPNFD6DMsKfLrZXpNSaWrJsM6qK2nD5PH9a1f7Z6z98VtkNWYAtfSPmyNjRcN5gqsYVmotnboQo",
  "key28": "3UUYSS1Z8LDXkfHjhcE3mCBrArBHT498uyhHSyHMCKdYymJVB1cK6iLNpRQJXjkbZFXDsF5VpTzGxjXHFBDaeicc",
  "key29": "B1Eopc144TMeWRTYGnruKVDohFPKsLqmKdrRMp4CzYifHkbxJsBEoGjqchSyAdRMqgZ7W9GqnyxA9E1QrJndNkL",
  "key30": "aZrLiVm7HDS68b3PxQpJuwpqp3jLvgV3hJVFrXjvnvMwJfRjHb3FXuEzD35tDtLNtDXoDh1ELRDppz2oHCURjFQ"
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
