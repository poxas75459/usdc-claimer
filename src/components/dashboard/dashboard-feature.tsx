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
    "TJ8KM8Cm7fpRdYGW5ENyJBKodYL6quCAJdgXTH3J1JcCs6BRgKvPouW1BaQr7eYPgBQqXX3utzrsp1TYFfT3GfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkQd32aYFYCfzuPyahmWr5qDCNfqsn9ogVJH2ntgydtvtGwbyK25ZCb1tkd9D5FuRz5Uo9UNLi5WLD2RyeY79bv",
  "key1": "yFYHoBEFMvERRaunBgsxuTKAQdaHYoDsyc5iTPYJcwaoeRvHT8UVA6aJPjUguEu2BLqEH3AYocKpBnapLzcRFLo",
  "key2": "qXRt8hwRam4bgd9uvjE32ZYeygEi1NAEKKziVmEpfhFfbbjzeASWqWZNf9g5iE6FaxRDB7Ef8q3jp5BRJe97aL5",
  "key3": "sLcMP1BPAhukpBJvnp237EkkAqJCmXpUW6QuMcWEr7uKQ19sHBeMZ1J55K7PFyqa6wJxHjx62syjhtCUop4Zskn",
  "key4": "64VQ5bgLhNUg4endzEtXbU9k6AURUTYLTmAXojJnPexDxhpz3TWqFa7QeuEgdaGYi7Q9KS2jj54aniF6z6VfisfF",
  "key5": "5wGCwDtgNfX9Q3UrxHDBAoubWVABctg5fUGnt2KxbDmUWqVc5otkXNozwgGJY9zzfdbsZADmhX7vzZmQ8GJK5Sxu",
  "key6": "pzDw7qMWuJJyuRnjJ4Hggodn14Q4X2iYF27FcFcwF57Mr4gB6XwLyHysji4XB6SY2NZ4A1pR1FKBF9NcTQmWZLC",
  "key7": "3ejHhYwGpWwQMfrVyAbj3zEMQgwiLjesrkyFVtA2XnKu7tVtBmkV9HoqSp43Di1Yp9hP3tbznisBc33MMUjbmtcS",
  "key8": "3WdYeVDfmSFfo421eu9PNMGNyiU3NFJ1ZTCwd8kW92ubJh5Dn8PCmbKsteq7WFAyGADBtCSCxM9EaPuK5eGPWp4n",
  "key9": "2BtvLFeaBau2ffyeA4hzJU1EGe4xKLA6e1HPdcbHGM4aAqjvMPcMrzqCY2zbziLcxjqzb826mniAEfaE1uzLyeq8",
  "key10": "3s2pRrQ54pwXEByJomtPF6T282VTrBhZRVa41jnaXeoz6hJqJDBStxDGesvnd9U5AduMZnDviTiqEDT9xz9Dpu4h",
  "key11": "3Nfe96pDn36ezXVuYKDH1meLQkCbs36G1RZ9YENHLodJNQy9iWzNvrx1idgewLrzC7dWQDxvP1UiiJT74KwXgdbs",
  "key12": "5xmRbpPbwjGuWAMmsAPdSwcgqhwPmiwS97W9DZuHLwy9w7fJtUhWKiYcqSog3toNGQdjpjERH91kTB8b3h9v9AzW",
  "key13": "2PjCRwUc2in9Y9zCHp31P4DyVwYySUXSqaKTrpovHhbt46cxgHEsHR7Fr7mrwxKiTuP7AQYsPk7Shyx4ybSR3zCL",
  "key14": "55wBe8TRmjau8zDwrohaqdRvkizK8mRSnL5UscLNfYQadVoo7A1Tgc5UiLmRQLnybwfd8iPsgLBjuCLrZuWaLCQ7",
  "key15": "Z3csXxQDZqRMfm1a2BRSm7KnAXF6pFxhqUTFeCPG9tRHUghzrXP5JAgXqEVFUmsKK9u2oMXHoo6ZPQ2tEDTgw1K",
  "key16": "35KPJXqZniBK2h6jfVHzoW4xD3Do5TaXXUKeMiZ42vJvwpyNHsJr4Fw84EtDFD6z2NK4LN28CKGAEDC94za6jL1U",
  "key17": "tK1c1Hbzt5XFx2BYwrD6zSPiB9JPuavYv73yY32u7jryBWbimpTUmVwY5Lu4icJE2FL2SFwHFRSNmYZu913L5CZ",
  "key18": "2JDYsq7wwXeoCoGaH5tJhhKMXmpGDRraN9EuwZiYDsuQijiyDxjpcmRYsjCZF6HSWhDQWXSmBrkgwMMUJY6UoE2u",
  "key19": "4RYD3JwMDjowr9JYdHagTQp83gUxNDygbA4Swpm68xZV35yFHhHpGeqg2DhvDjjrxy8WRXuxSqZvCXF1KDcbbnRE",
  "key20": "3ChfU4wHweaoUqgtr5Eg6RC6sWqGtVvf1sSUUwzB32X9DXHUeqHRN5N41V8RcynVsmy3warYuPtcmWjigyBxzHAh",
  "key21": "YvbfKcLjbmytVU1nQAEpg2SzViVLQnc5iwkQvMo6k3FgZvRbNjH5fCZBUktZtLhDSHuRkHGP3LDPKN4CvwzrSn2",
  "key22": "2aHnQ1rJH6S7Jo5mmEqbPMoWArwD9VjCeWkD8cA7EqDLTn6oJfTYTZ8a8pzAGezYeV2LSdAq6tukrGsQpw6zwzY7",
  "key23": "1fLr8T1EMBLVMf4fNBvH5Nf8LUMna8mV8Bo4WLVhM8KH4XRMMG46PKzN7LK84KxxBb2mBYnXwzSTr6Vku4JWnxR",
  "key24": "TBP7CTwpgcgMyY9HPp6kVyUoSLGWAnbixCsBhRJMm54FgQBN8VLXpESA3kiquienU9ddr5rcC5E29xhUc4591u7",
  "key25": "3fSpxwd2uvT3cQCFTVie6Rd6ciof26kqnotJZxETk5G1Zdu1xP7LrkcDS9uaQBbP8RY5JM1anCNiMiykgLGhNHjE",
  "key26": "Cpx9fMo9JkMzC8cebwwfpwcyJNm9r8W1t5aHHqnXz1g8XJveHZ5EQdb8j5SRvGY8jrCq2Ssxfsoc7agAQgR8nA1",
  "key27": "5reEeT3jdB5JFqzTB4jJYXgyzkpJ1omXHdTTVHrVvXWkeBeuuzcPHmNepdBrLaBKKXNavTvmjB9NKdPeMmcAb9zK",
  "key28": "Eoq9Nd3U8JfHCExTZ67Qz2dfwWNVXSbPgJKLSwRxzZmUvCLMEoRHvQE2YxXrvw5hLDw37QAJpWL7v3rxvcoWbUC",
  "key29": "5AaNuU9mZizwMDmiz2VkN57yDd8iJFUK1CsNrktRKhn9dpHgrkBnpn55Qc7novfW1obC9fiQgJLLzVijgC9Nfw3T",
  "key30": "4nZh2owvzwSLsNHqz3wnT3ybmMGHiPiuf4KTuUrwNGZwqUgGhR21aXcYSW2kUv4rfpUmoyiBx6U8CUDGxqHK79Sf",
  "key31": "5gwu6Y81ZdRSD6WCzjGwqYPDL66NYk8xyevYqS23FKVGgKs2js6y3BmvaMPjKifNXrPBrizHLTKntpiMoPExYDCs",
  "key32": "23W6thMU8DfFkVPBYPTqUvU2Pmao8gCY4CmQimGgpQguuZxLvuqDyPBaawRHQseNnLwyZdJ1axhMcRmsbpBKVspS",
  "key33": "2q5NXnUtxurckirfEkf9bRhVRNkFhq4gq6YeMEuvoRWkNED9Cw6jMBjMUNSR1GK2XoA9tt51UnpuHKDxXU9LKap9",
  "key34": "3RRKKnbmJstKezPyhGG4Wy8KCriveNDwpGfAoWtWSYSjF5gFKT95FiuTX4oLYPnNiXaLPrp12jJ5XBmmvrURw32x",
  "key35": "3oyKiZc2ZXybrK16FjWKi7CX6ny4cEQEmiun7G5B8Vt4xJksEo71PrnEyzRLDuXHnpc8nKmXUaBWBgQ9o2SEdpi9"
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
