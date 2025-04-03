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
    "NpgdinRBv2vpm6CXv4e6DrALHw2UsXgRwDaCufnBfiJiexv6fAzAsnpaBZqi5DsKK5FjR1oNviCsQgZJMRBsJ6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "awjcJs93dcJE7C7k3Bou18fHrhszp6BSAHZFBnBTKK3yy6NY35DUbNW4woxxsTjAhi2UTDNMcMP3h4BJmwpmiJp",
  "key1": "4aAqs8ptXrPyzLeL4bCWMe1G1XzGrsaoTeiR31edLn1utZ6R4sryzJCrdtWxhxefr4AQsZ8U4XUAfDRLmvpP7sM8",
  "key2": "2yRd7oRJztE3d1s6BkuUy7LUoenEueDWAKw3Gv24U2haPzfw1hcM2wuo1XXAGbarzzNQXoBRPYgmZJXBe27vGNSt",
  "key3": "YmN7WvX7uQFVbEDdhRtKCM4LuxqD7Q1raZiWos2QUroEEBhkrujdG1i2mzApBU14fXKmkvGZDYD8GwbWwa8cn9X",
  "key4": "3e1LbqWgSm2wyeWGPDDx8YW6k6GSjS6GhqsLnK3o1yNkLoabmK8zsYEdz3AygNWhASV3JhaB3mHJrCS1kGAhqmQP",
  "key5": "VNBDNWEJeKg5XEcDkrhQysDnbVPUVspWUYyuWLrUYPhLHmQJMk3Nu85pU5DqKmZR9uXrYQWw5jE9B1mTufffHvz",
  "key6": "3V6jjbZWH3kkFSNR7ZNogAqtm4DKHbtfuEFPawLxVcYb6DDw9zBccDVV343idLNfFg29mfdHy1zswYDY1WHJpUxt",
  "key7": "PvuTT2ZbKSNZgogfWhxz5bsdeph7yzsyz2gQ8ZcqEiNz62nMjawaTbunGnJXKoT9uHBj7Dvwo4FmYqM9HX7QyRS",
  "key8": "3vnacQ4EHJ2fKHtDPqPeSUKm4v52aHhUVACvenmuTFxQ8qvMVPx2ao6VAeFgcb7nzBbv67AV4aTL3nuTDhwFBvXS",
  "key9": "3oKjVfaKzssfGUy92j5MUf1spb6FQy8GHHs869JEXVSuocq1BPVMxwrfAwmnoHUu5aqBmQaRrwTEic2x14eK3Saz",
  "key10": "2MxyfTmZyHFAaQV4DXQPS2ooqhAbPM3mysrLMWqsnCSywAzfbiAnBxSYBT92sG8rxszwnrpE52HhxDfm3Nx4Pfx8",
  "key11": "2gMyeu16yWgNB2XBFvddX4ezpayDM1W2z87r5ZDFhpecocJiSGwAqGwYDNNEMFsrXd5Bj2XBpeAYZLvkJD1PTYM4",
  "key12": "2bRVSiazyNepd7fpS5uxBonn3QmaXgXLnTNC58QUE3kZrQSZkfDuXu83b4xPEoBokhcXJ87WtwoUZVkrBHBtHEwp",
  "key13": "3CTVjX8N7WqpssarsjmDJmKkFVUkzrMGPmEnvQEk92VSQWaHXSQNGiqtU9CZ3SRyUAGf9Uvjv9T59yWiP477rpxM",
  "key14": "5ibguNqrHrUciWCYKYtRvsvqCZxq6bDyMAXRwzgSJ1BGkWccuRqSWsRdQKjP7GKXnFiR7uP7HQav55QjDfFEstFH",
  "key15": "2fLJEpDpW8S7sNH45vkjTpZxKdNCZ3e95kfdvhzv7s28DhQpZDjnVtQFGKEtpdvk5zHinQhzw2dnaVqcT9gU8iYN",
  "key16": "4Bbf6wF8yF378AsJXvEKqYNm4LLAKRftZMfgVTey286gjArHtBieo42hvmjUYPCYnSkDKSuDuBwHsFWBs3sWuuKp",
  "key17": "4VTbxu9WjNBMMrrrocvvFxhGdWk2CohNXTSTUgxTwFjMJfS5QCHoNaKetPeRrVpaRy9SYf2dneudX2KngV6svYRr",
  "key18": "42PWCZeTCERWnU4wfNjYb6miQuKVN5ZV8797vAZ4HybtW9dWwxkhE2cGEdAdGeDuEgdgRb69pCEqJWJFadpoV6EE",
  "key19": "5ttHjQAS4GDsawub1hiHYjw3vN8gC4U5vpZrBFdwbiGMeaXLS6ReRmdJrTxc53w7ys7HVED5566yJJdfBh3NBRwY",
  "key20": "3npsUA8Lib2Z8gbTDwRryMg5iFzAjzobcm2Dv2BekWudtidZz3UTPZX6xSSLnCyKRAhjQnQqEVy8kzDoLVMeDycx",
  "key21": "393zYUBiyTCgwqyrxmUXtmwk3FBuLobfhRXU7ynBR8pgDpBL5atbWq5XVhthww8xwfNo2RjHJECTe1mmgpTmGaMZ",
  "key22": "2Y42mBcg7sLVnbjYgZ47ZxHa3XV34xN5tN45bR3zMswGpP1AN9hBmpNjqWWngcYvwB9YstYyyp4LLFvF4kXzYue4",
  "key23": "2GF5vVNKdntRs6hSKAYBAWNFj5u6tGmTF5UZR7zhA4wEAWzif1hEs23eh1oPuh9VPyf9sux6BFcee6mntemxJLzh",
  "key24": "2GBdMso5PHs8oymQmQyQLPyJjAcEch1nmHgc9evuXgC5SeRrKMLuj1Ksz23JQb9BiNS3K6xxtknsRM8T7VXa2rmL",
  "key25": "2kHPiCTVuJUdTCk8q8eoHndd7LHbCuk3dT8x2m7xQzJNxRz8nhxsieeMEb2sTgT8oC3nLkS5TxvEBarvL6p2Kg3z",
  "key26": "2mJxqGDUfj8YwSogyci3JfpEA86btCyJDMo1zCu5PCBicTLipQB4tvMqQT5yrKQjGpkWvYdgQoLPGvyLYuaXA6W2",
  "key27": "4cw8f8PLMGhhGymeS9bvahoKbnpys8tfkjyZZQCCkiksSSeMPNcidWSZJ74KXMTiDK7w3JdETqUugWeGTeshBQpc",
  "key28": "2hG39KJ6zRo3amFDuMwxi5Di9ceqYwPyqF8A694C83A9RiMV4SHXcmuCUb4dTWzXvxGfC6zyu6gmr6TAmACnKssJ",
  "key29": "583ijLtajmuc7AYsm3EcTBqUUJieqYLy4epn8HAbffwAVCnUrSq1o8CJUiEHRuynyH1fJYHHHDbundKdmVFRusHk"
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
