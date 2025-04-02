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
    "3Eyp7vkSp8Rv71x1vamVVfh3rBHygLdwgxvJHEsgLQCxiZDGGXwtxBFiUXjNjLvcawJusZEDdX5rP8a6NfBosRnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmWDGfqwNJs6cCbxfMn5n4iXc33zTw3RTYRRFJpnEgfJRChBkyv3vqNL6HGqQGLg4ajQTJDAjLE41Q2WpuyBW6v",
  "key1": "4JxjWwr7kHRWwYPKF1GQtifGwRDPt8r1qriT8W4TL6DyYC1Y9bmEWDpU8t7dV8Ye5NomSaBWPgYSSPWs1kkoKGs2",
  "key2": "fvKCsUupsJWdKN8tHwwUQQtRQ5NhyPFkHUWdYqTZn5WMKKXusyBL2tc8LDdQnEHTKtcUFHdfpqH8L5tPdR9G2SA",
  "key3": "29hWNgK4daVtvfNSGKEiMMqZMPUX2hyHKiftSA61eHi3E6WjwoHqCRhB8szj6WkfVMGzq2jgxEbcZ24ZBKhQStTt",
  "key4": "b8bdBPzo7VzY3DrrMHtQhckYmm2UQe4kgbMqoqiaxn72ogkbPmzMg5rHwrwoitq8w9cBUCHN6k97BtbJkzGRBRh",
  "key5": "2D95g8SkdjYiywx8N4qqao9JevgL7SB8ENgLyVc8ZqDeyXqbkYtn9zACi4A9hmpKA6BgsggxUXrh6VXGaEPTeyEr",
  "key6": "4wUFgbGEf9etbH2fbnNNf5TznYDXSiFFFcjGQCpJzgrHSvXBX2snQQqKHmpsK8BFP8cig4J8YftGx7FuAba3VRvr",
  "key7": "f4UESj85yxAUAFxUkBJoBcTj4k7CpmsmH3tgJLshT4kRA1rwdn4dMDxuYfBTvDTSnYJxUfSTTKYENS2i766BHNg",
  "key8": "4bL5bZwGH8Wr4hoFbjuLbqYxyvUanYjWgJKJJUdfTsbdEo2MpHmYDsJ9CT5otj9eqKqdxBQMUzhMxtuZBwq2qFNC",
  "key9": "4MZEGqhLAWC6mXsNjwV3Q8h3NoLuwZrYshHrdjd4sYmYNziyq7PkyYM5JgQnbPpHGDwRxr27GDuQFSZ3FCDhszBx",
  "key10": "H4RPCbUFm1C8VmxA5i8idXwaGaRHkJBHb4eQ3vrzvfx1cTTKtJ5b8tQqPP6czP7TehiE7SkYhHsiM5HWRkuuU6d",
  "key11": "3xMFPgncrUNUGRy1GaG8RbESP64EonBwALiZDf6WZX8B8HR5DsVDDLAB1gfQapeGmUkfy9yiJSvWdQKNi2BAuNHF",
  "key12": "3QyGFu7xKosjKXVQMR14g7Loo3d17gRVLNFNR2QrbxkLK73x2pkbAyXXnGRJmxh1wR3o8G1a2tzAamSCc8h24gMf",
  "key13": "KT6KvrEvTaV85cPLvhRQPeQw3uYfU5YJtScCCdDXReSz3XEYpF2fLeqQu2NBfuSSwKCkZHNRTvNoCD7yGVE5C8Z",
  "key14": "3FocoEoUQbU6gtTiE6WWesdBpapevDxtUgn3xHnyFZocZ3RpxvWL7wcFD9ScQzKe8XXz3sx6qWk5kYYm9AvxGrFT",
  "key15": "5tFkWZg9PPvd76F17EW6ZWCujFcXkpFKGH6spVTuP3HgJ84kpon7siA83qMPkTzkuyjA58D9Vi3huQBS31xkjiHe",
  "key16": "2eKGQWgD7YuU5zgYkjqzKf1qyHwiBc2vtaDbQPC9GLzFXjaGRwPRYaEa5JqopufQaNtHvuoCey7oU7KbxUk3Sh2X",
  "key17": "5Npa4PQWUwm3nMsu6dyF3WrjiczAvJpsRrmXDR7hYeGfGoeuiVx8YLnAzMsTv16FC1xbZSnrBdqn7vSWwBEi4wnX",
  "key18": "3qoAgdwAtw4r3GF6hJxZiLuHZgCcYyUuN8hW26pc6k5uju9dHFo6DMcPM7B9VM7WgeBkqd5RAjLZaHe44qN7xgKs",
  "key19": "42yHkE8uftdbYec3HbgcwBQg8di174LK15Mq1ywMe89YLAyu7VTRsdthgJmkhqWTqE9mBP2Jdv3yG2QwHrVK4kJ8",
  "key20": "5imDznJWzriAJ5A7umteiGGvWvnCe27dz7LzHjiQffrcdyfHSxAqFbSGdd9f63BY2RoMmWZXX2TGYhsnDE3ecz63",
  "key21": "4ggcV25mXHVtY6W8K7vxqVbgMdCujFnMqKKfPnSJPh3ErNU2dC3VW9XNhJqwWgjmivP55H97iQLg8kwkTVPa9Fsn",
  "key22": "4vspq9ZkygNoP11ncA8xQybrmLN3D5DfcrUWFw3PsfeqzyhKRMhDSyPYMmWbAzbSnQAyYbikExfPrg3SMbyGxe2m",
  "key23": "99qbzNiWjTRPcz91EbNduJ1cYQdCVJ6N3fmamPt8U9ebuvfDDXDRsuYkZovbZz3JeB3S9WyjeRGKhFm9aJ9feW6",
  "key24": "3bCHVpzLBgQzZ7VKQ2Gmg8CdcJabNN1ETbYQYHCeh1pecEXXmx3T1t7o2HvsiCPL5SeRNAYALaDDHqaH1zoXfRTN",
  "key25": "293bveCzDdqCwYECncxDXCMWizMwzKL1HBgQdcXFPtDHrZrw2jbBL4kWjmyGHU3xKBoydansbBeQ2MhQFZYKNFvb",
  "key26": "3TFhzfma9auaDAcFnC4QXNA9Z6XB7i2aLwMh2buxNDmaD4vVTPfdUEZ4FMi9jxsxXkgmFDiRrKiZWgS5TBrrpD6p",
  "key27": "281RYKBTw7XTvFEdwRGLGLTEhoizpcxE6zmE2yGXdjDTf45QhhoPW4VKHT8zJSbs87JFhUHSaLHceS9eH5KJ8GQr",
  "key28": "3yxGuyG1vPjfbmY8SeVtuSxgZJsdgsdQSNpYesktmW8SHaAMrUpyTtUwrNSv2Gqc73CvD1dSRWEPPsabf64FGa4u",
  "key29": "4pfoZfrXM1uyneQkVm1MCB3ePuGQEgubnouJoU7FEAKVGeGTxQHcr992CnpK5seE6L96R33g9jTfR67HeEcqD8MP",
  "key30": "4e7xaQFi8t5sU51t3kbhQ65HT8A7zhRwsmKUfKnEe5esMettYFxrPDUzB6vxiFZha4vvxFFAUPwuQfr73H2MXzPo",
  "key31": "51DBfvSYbd7LShvDnbz6wcfYEpAz7MDV5Gw4UGpjX54ZpAYmjLDVkjPS55JfZTqVWEaKfB8rF3EL7aLEjqiP8gwA",
  "key32": "5GeRN7fMMA9NU15GBqQLP8Jvd7P7XdRC6md4XdmMgfWirbdfzhqv9RxAyKmrwxnYA4eUiPwGQT85FSFG8XgF3mrq",
  "key33": "8Aqf33yiy9zFUaUMSvVN2bJTGtFuBb9UubjZr97rjzURrBgnfRUAXWSkb8aJDBaxsdPxnhyabuiX7K96QfvyTFG",
  "key34": "3GvGHoAFrt1BtzYmxnURwAxRbbGyoLjrCSqsPWAcvtn9EETKi2dPbKvWJozQcjPpGHevHg6VWL5E5fRpLSqvHvwN",
  "key35": "2ugX3zEj45Tcaw1VofSq9x8GSdXHGfwN3nP5ki3NrQgFk1am1Nxjf2sPu21hpDBQiVw2rcFhsAn4myFJZQtVkJHU",
  "key36": "42Z8kBrpwBm4QaAjsRGsxnFZeP9egjRGWEKAU39bGbc1B2MmzCNsqJQBegnPGKw9G3SnmYK7gVaCw3tMp6C63XR4",
  "key37": "554TmkVoQErjVfTFw3EwGYwYZ3KuqbdPv5YKd559VoRGj3b6A8uCcHtjrJ8WMQwZ9fUuMLgXKQ3Qktq1pok4ULZw",
  "key38": "2aXXmrHQ6WVbvXzAfNdWLge2cnXmYbPVHbcNtGNn5GtKVrSnDRcgMW2iiAvXNhVpbcJFaNHSTZsR9ocJG3govBjR"
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
