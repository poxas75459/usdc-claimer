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
    "22Hm6g4EQ5dASmfdPBmBRG42PQQRdiWsGhY4VPrZLMqULy7fyp8Azq6GH2JiBP94BuXWWE2eqEYVzVypKb9hXWu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BjP9JvcFyxDTWexCwbzm6b6DFmNAdBVmbfuGuZhW9a183jZL6PQ2ZVcDBZVuow7SDxD6XiQXNNLfmXi2NQgTagH",
  "key1": "85W7rSaHngApxCLfR99bqRMnQYXZWJf1jReTutNTQSgKj2LTQARfWNiyms96TqpUQEnwQWYxjHECvRmyaAdPkhF",
  "key2": "2CciFmSuLVB54Z8mDcZvw6sua2FZFjvJE6sK7NyHcwVTeJDnsvpfah1kQrLSQfXuzKubpM7XPPsTiv5vhapvi4cd",
  "key3": "2yCJGjkZM7nfZgXFoKfwbzgRwFBntXMrenUYfBmWYbE1FR1TNpAe8rN5XaguZR6LabcbKCXiKSdhpXAgKeRi6GtD",
  "key4": "3yP6mnkHM6PBR3niof6QveSw4Kjc6ZtKnZ7BK4G2pUrNrRbLyyvBSK4xBM27uix1kLrmswksf7uPoiWNP7rZzDLe",
  "key5": "43fTEzZjaNNpv8dTzTJFQP4nxgd2V1sS5wcCeS6CtV7fWt6QQ8nnpSa483rdVDYjhmb3op886XhYEBDzbzCK3Y9q",
  "key6": "4vmazZibhSMYe9eAFZAzHHc27rnkyyQLETdADAnkyMRvnZV6D5kzHCBVRszksvcQeFsNsM45o9FD2yRbW5qJzPAw",
  "key7": "42E62x5a5rP8q3FoJvdcCzuz8JaCr9meo42ee9vLkPV77veiqGmbA5Uc7ea1izHYCsLttieVZYigah7GW5etAzsp",
  "key8": "mjzQRuG1MS2W6NbVvn26UhqQJ2vACDUm42YXguJunZaDdUQoVMevAx9UwVTMB9CDxteMYbKd8b4AuQ7gHQZQQLP",
  "key9": "2d5RMuDLdLwMCLH79aYrGHfAUEHFeCrdvyiagtAPiPDbXDWJ4uC9t6FbEB6Pkx7cRxV4dVYyWBXJe9oobDduzCTg",
  "key10": "5PDLbnWjDgdsUFtjxxqjvsA1ySNmfADSG4bY46mGoYRRZw14iZVymgLi9bNb46vkypWRFXE1ctzw6jWZ2dZpXLGL",
  "key11": "3oXas9r2Gx1HCq6SpRGPFosQTRLXmnCBvoT3dqimLALE7NNENWontCx541cMFpt3ZUey73QnPfP26NF29cBPm4Xk",
  "key12": "4PyqG4G2ddLWJkLB8WJwzQqcVJu8yRyJLkRmgVyLw9FtiLKrVrjFw5oBaAEF4QHwGCmrH3gxzAQkj4i9RQ2PJjU1",
  "key13": "tBkuMLXgEsC4BVW8NDwrZqsw6BwaYREYYG7k4yEDXi95B8imQjbcmRBLGHQznNpb87nk7VSm3gJafxexVBgqg8e",
  "key14": "4KzTuSQuw47xF5mrVcnpYeYFjySkGWAHVXx9qs8Q6VwB57D5KDpcRsfhYFZy7TiBUTgrGDGAasiYqTN52MgHdbKM",
  "key15": "417LaL2nK1p4nvaEBT1NUfExokHieYcqd3p2p29Vaz5NqgcBntHoeK1TgXhDfDNG8HbPzRjSf7jxM1gMSc1TM98B",
  "key16": "36airy9W5R4u2UfqwzshP2pLM8TmEPira2B1qvjhi7tAgu2fq7vHJro2WM17WVuMUmNzJHqbyzfYuU1fsyPKpTeE",
  "key17": "DChwTBKcB7BB2Q15VXJk19XhHfC4sMCMXNPjgjgXEpRK8V4k3RvNbVLQ5qqCvVPJ8j9StRtzmc2DzqcJwDTyUPC",
  "key18": "5eGGT3F4ohkM3wx7YEQ7EVTV5zsPzm6nL9oW4WWj3AFs7ytDQ1xKpUG8Dh41wNfiZFsAeKH8yahTJum9viYPAMco",
  "key19": "2FL1j5Z3WMfze9HjPFuoM5JSe5U8xiGCf1iVU6RXsf5zwVhazjPMkknoZeV5RBg34bmCgt37yXbC69oNamqiRy4v",
  "key20": "2vTC7M3eTgXcF2rYUu7ECrYje4EZVQf8R1iG3CYSRQvoYCSBL5xd3bdjaBq3M1Bf4FucNbnghTqA78VXELSU5aTY",
  "key21": "2xP8EMASJjSyvgqin3gSvh6NzpVjM9dijxELuvpniiszw3y7Nst9MH4SzGvTskZRvdUxjnvX2RnpVwEqGVEtEPjP",
  "key22": "3XVVcAum6zjzie9BBVSNam4UQDV6CwB3M9fTnDvRszbsYx5tmAZV96zGVHGqzyLnRrDv6zNbdbmKJt3kPziRAbVE",
  "key23": "mJqSw6c999fKdT27LfbZNbRXCH3k8KpuCLqSDTuT3NVQ4ZGuK4xcHybcYDKt3KYHxnPJ4g5nJaga8cFaoNyFBUy",
  "key24": "42SoDXZntseMGxvMcsW9rPHb1PJK4hbqCr2TzD7eBuCVcdaQvCTKVzG54HnmkYwgnEnGRqkjwom2dNMkGUbMEum2",
  "key25": "25n4CpTXP79Axtz16NxB6ez6FY8YMUrcVzib8zSkUXjBfNWfDjR3kQBNgcSuZBXaV66f5dM4TGBG4c2pcnj6Mmtq",
  "key26": "3tzTVA4rWBXLVaSa4ZB9M1ynjkF6QadH7XhhuftoBKRif9W6mjjNy3c6b5RuM4NdRUrdPYfsJiH1LFbQKWjCPpDD",
  "key27": "5P5bUYXCdvw5uRrFjCLV35hdmkADnMjvYmPddpgpZqYfgkjNQypHM8yJSTz2C5oqxARPe76et3cjL71bCithKF2Q",
  "key28": "5xwWDPPEGWKCMmPiQ8tZv95mAvYDbbNcckyvhu64xjwnWYC8Zk2kaf85EddnQaxPgUSvydiMt7sRdFxHyZ37i55u"
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
