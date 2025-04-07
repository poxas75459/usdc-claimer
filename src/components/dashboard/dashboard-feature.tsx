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
    "43gDYkJAcr3BTVbv4eVK7rH7U7csG8CMLT6t4L7WSjt4DntmJrPEDKkEcuk5VBsBWHz7a2See49vHWehtokYz9uZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTFCgznLRCQWmSaeAamUzzuAsG63jijeinLza8aUn8d1sDb84w2S3TWXjFN7HSs39uWB97AzxT3bvqxc3nAXXZ5",
  "key1": "5iSfVnr3nREp7GYN7NFK351aF38SfonV9tjWvQ3esN9q1eAkwokGQMw9jtEejsxDBgUsUaBvR4NSQ8STBooBSyrm",
  "key2": "5RWwGVgWqp7qQGh84PhmFY5QuwqHmqjcYADCb5g6YkokchzkoRq6nNe3cWxh6PCozLNA7CjJrqKEhvL3o7mPyhnV",
  "key3": "5FWJEePVSBnaetr3SGSgB1LbqRQELgQAGY9quzkHSAqEcvnA3ZZAt2osq3MbtoavZiEJivVuByC8vCTEHcvNbGkh",
  "key4": "4cBsCBhFfzJEHTSVZ3e4wAWuKTEGbWYW2DSioR8fH3u76NWx4FXdY3okuVP7hFBa35yza9Exnzx2BuCYmrkFfox6",
  "key5": "3DS8zgiYABP13EMfC6zHUgTRGcyMfr1b7wNu1fPLi8aUoMQNnNk7mBdyELgws7cKik95ro7yNcTSj9cFd35YowdC",
  "key6": "3Jm7Ygs7a6t2seUr9dCHXpJWcgPTdQcstMASGc2B3PDQ5kaq3vR2N5h9YAvmZgPiCQEFLp7bTcrLAMUJkQMAnnvo",
  "key7": "BQ79DoQfaLGeF3D9E73mzkaAjZ6fvPScdYoNiPTG6VCC5ohapnamgN5QXEgbnSWuuUQgHGVm6voaAr3gL1V9n2m",
  "key8": "5kf9wEL7gkNraJYXajnHSxF7B4XVnNY4DSSiRaWoTnf1QBXKWH7thnDcNYmxbNKjL5RykQz8jscGEoNNW4VRKtwm",
  "key9": "52hn1VwqHVfLAXDNdSNeWWz3fhj7LzDK5yELdFabsoznJhioQBtYQmbNKxvCeK6ru7B7TK8UhzdVp4ZeRPXZocXc",
  "key10": "3X2EsJ9NWYsC7fHfoAc17zWTBSb8zDHbo8iGYoWjsdK2RNn3myiqisRdCYN56JEScwAjcoJorJrk4ftGBYfh4uL",
  "key11": "T4QHh1aMGm2VNBHqaiXaUFEkBdiKSvX2XqMc4H682mfvtxVmthXmXAFPZJv97zw4QTFmrd2Bg7hMExD5Nc2gjSP",
  "key12": "5zdUG27U9WBGBmVzGFdMxsrLpiyj2BFoBRVfnNZU2HZcsv35y7X4qrfCQf36jVuvhtB9AmztDoECX12p2GD6GroB",
  "key13": "5SQaHkkmt2iFVXAwSjdgyVLBUKscAgVDnLSP19ZBoWXL7AzznZdUik63Rj6j12jvmr1SLQDJfZUNnts35xeefEa8",
  "key14": "5FowCxiS64SXGtgAKegFVdbWCgPS1De7gYDFq6xAZAKZqmErZXR2Hfv4oF58ntfQ1BbdjAVWTzAMo7Qm9zJ2LQPD",
  "key15": "D2jMBfBAvaZFqabhcP7m91otSzGa6J7QY5kJvhpJ4qzETa5hwJgeBHySCNxW5At1yg1yyhzaHRxwrXndyQHnTV3",
  "key16": "5LRXB6safkd2VNX8V896PdSoiZCGD2DnH7rRm6PTJB7wLb4kuoRaiPpE3cyExJQuKYBaFdxptu4KTuiQvtYQZyQw",
  "key17": "5SxBqGdcthyJ1P1etGX7D4TxYxqoTj4JaTSd6mYMeXxBeQeKQEaLSjpkr3GRyFsYwZkszgGJdpfSjHhqUBhzNfST",
  "key18": "4Kcje5hA3bCu2UwqY93FqV2Yyn35T6ebCLgCL2HjEPmsebbM9kG4VVQTfY7YGdBSCu89DPMzU46jsv5GJfYS9Fum",
  "key19": "3bWEkRGjycPwqWLPFmFDyTnMo3Zix3EyVpoqrhERMjAqkxzjyrUuVAsx57X7AoPn5wpf1KLPXyiVzKZTo462dZJ6",
  "key20": "4eDMHEnw6pdrALCWwix9vgEj7WADQZsjqcmiqvcup7eyFm2eurBzy2pWYGx12q6gKDUFnvzSzk15Yy6q6hKBkGpf",
  "key21": "2iJDQzSdKsTwVP17tJGoaRkLrEX4Tmwq9E5dwhoeT8QjxEeET8ePeZywSRZm5Wwpsm4SqKjp4moyUad1LYaas3yj",
  "key22": "5tk3Sv63bSq9HZYxHJRme22WeVUvJ94N4VZCqM7grZPmhn2euozpniYnhu5JnfFCYGxXXNrRS3cRYCm5hh9RS6s",
  "key23": "5QLHZZgGMqp512cqL4Wb4BPUYvBsoDg3NvcCQo41v2bo675kWHbKbVrahKRxegnAiUqBP9n1Tw3QWTxkFfRpmPko",
  "key24": "3tBh53gBEr7pHxFvEERVKUfcLJbGDjL4PeVoBpzKqVWzVYDuGcuQNH88SEKEbNMicFZYUWFRe8EhSMCoZjVhpGFc",
  "key25": "3gttg6qTQrTH6wx9kpFiismE94tFc3ziDiMmaM9G7hnwrpCVYkJXdpXo7gBRF4obmhKhSs6uiigGfadopSWkN8xq",
  "key26": "2N5BtR9QEies2gYuePXt3ETsgEQM5Nj4q4WWLZs7PBJcKmWcxknNW8DE7Z19WBdmDo3mM13TLGspyo92TGhrfvE1",
  "key27": "5YPsNcsSubL4Wy7sqAFrJsGEYRDAvF64tdsjF2HP8AWw2sL8YWFZsHdF8Cx6nSpy5inA7adk2UjRfep8YWFw4AYL",
  "key28": "jnSGFtnX2BBg916nsZHqjGnLxo9YnQUgk9Yzx7P1Cf6oGAeaX45tXa3eG8UiC1cnR6P25kTQqGNknmpbTB8gAEz",
  "key29": "5dC99Pp5WcckjAR4jjXHmqK724xiCSXWeTgeTf3uP2p9auZLpeSwAD8zUEHxQRK9aogJJJFC7oJPGWFeEZ6gWn69"
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
