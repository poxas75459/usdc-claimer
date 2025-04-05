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
    "2Wu16DTxwG3yvPzxDwgBUgNAWeRPTmWFumoqL6XSSQdgPcmNsHzym7YzwjuhyFk8z6Dwf9VPHHPyp1oC6KkNkpWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z4BW8vqWDihkpjiCHEuLfdcNwbWsZRnZ31ohTeZ845UJeVs3WDiwZdeVpiwdnUXzicAr4P6mtHnYHTFg2pADm9X",
  "key1": "kgBoBXrLqHJPbMTatoyM8KE2mPuSxiwPb1apcL8ytJM51sRdHEJYxvopZXgJTJuqYphtQNxEMjvkFoQtoXJDxtb",
  "key2": "4zBeYhfXowN1PiG4ZcwT1hWGN2vqkUqKEiRRa2iDx9rMxz7fDURyKrtD7awHcnTSPHSHDUpH6ux844ArAFqAFapC",
  "key3": "ZceaqETJQwshurFubu3ab5w2d6ibigwAcBHdS413SKrhqD2EWdjjxX4zmNr8R3YUkoV2zGaknDZpN2jQ5zSP2Xy",
  "key4": "ZpF9FBXGnRMMwxgX1z6yL5vbhTUGLC6QiBvoEMTd5bbG5bKMn4Rn336WDSTqZ6BtPCZtBRsboVvHMwhdjKeH9Eo",
  "key5": "y5TMwg9tDcRpCrAiUSP4ji7XoSRxqmyTQwy6VbGXmDngVKNg6EfH31j5ZwdjwxX6CFJTq6dbwZFPzNTAHQr3ziB",
  "key6": "2B2RZao69JGLC1ecpv4khX627Ug6SsCydDbBT9f6qBP7nm5jC3bApBieFAFmVGUWZ3o7mwC1doYSDdNANHKndHrZ",
  "key7": "NgqiC8NKiroDg5qS5qwUsvvMDs6tMF3hcX6APaoa2ovkzh18grjC5vYPMztniGoozeFENfeatLxUaNr9FiNKYDm",
  "key8": "3yxLtn3mKyZmPAXnmkWJMMRCe1dbxiyZFztopGAWqJDAhwZMeWT2ZtsgQjRgtLh8wZXQVHk7Za3qR8TPNMjUdv2m",
  "key9": "5mqaTU8vNnwSPEyFkVY3ZmZpBwLB3CzNZaSh1sj5965EJr9a3DToVF2rRZ5LHna5iFbbZwoPgZnzJN4CE9iEHsug",
  "key10": "5LU39WE41vrY9SjTCvmVG1D7RkF7WtrWFNeVJgYW13S2RHDx8tGPR26s1adukfYy3aWg5dnC6a2EqUsU1HQ56hKa",
  "key11": "3yC9sv85b7n34scwYpW73K7X8BLsthnytNRRURe2iJ9iBXfogQwo9oBSWKSbNSndGJrXejbsEuFKZVWpaV5to9yS",
  "key12": "4PF8SM6qSTEe1EXXpm4iZZwXaog69Cc1hyZEE7TN22YpDhXWyh6VRp5st4yZaXVPuWGa6WKtZB3dbswXdpRYcRk",
  "key13": "2NVPb5mJcr7jCJ6ndpf2H2gz7mnSH3FydEm7LQjZAowSyCEtGqNTjvtjXCvTaxB2qgqHPTwUPoEcmLby3Cafp18A",
  "key14": "4aXpqGryq9uMpLzhA2yyo2BFDwdw6u44sx8RFKEPAMHo7e3AC59WZub7ZmRAkytSDCsbu3tStH6fXzpskJGUsSSc",
  "key15": "3x1m2NvmcKGmHaKCDj7vkYGwDNVWUAQvKjGC8YJ4BUmEn46CfEqZF3paWCm6orpqW6EAzYeNysaVs2sauqyVZz4o",
  "key16": "3CJJhH2VegCJmsmPpxuZbEroL69Qv9MZBg8bwDhsM3aJUuQ9vZSCE2wFjgy6MLi9ofrqBemqFqbDYbKdBdVnE1La",
  "key17": "guPPNNmK3FemcNTqYwVo2q8Tni4z5HKHrF9R3qUDibzmRhKRxLx7GesgrFSFLiiFZzhRPgJWbDxVd3Pq3Uidr6U",
  "key18": "7ZyHuBRM6AxicBMiC16uXSRuG9VErgGyd2BmYXDtWMwVbLVJokcfsVEDF4JnhL5trJHHUX3CYUMAQdV3SB4DuEh",
  "key19": "3zEj8cvXErEYUNRxExX2JqQzqjZH88BFv8ZsyYzJa6uPVGZ1ULPanM5SFoEnhXGvuAqiFdRHCRMXxMWpFSqtabkd",
  "key20": "3Z1xQiEh8CdNQmrAAacdzurLKGct1tj1hqEnMkNyPP2GvYrN8fgkW2z4gse3YE5a4Uqk4286hVrFnMJpReSYgj5E",
  "key21": "pJwko5JXeiPfoph8yJeZkJs63YDyopAS7VFejXpFt42YyPu6cy33SgSdsevwYQp1fMgUG3eV15eGgDuGVPjxvBU",
  "key22": "4GvMjaPY4NdxBkvixga98mkqPaRAqCBrcmEUa8NXZUWHaiHUvwYgF9oi9vAA5eaka1Annew4dn9UZTUXwaef8PJ3",
  "key23": "677sGk4WAT4kPQ11TXtVcjazc62c2ARdypkBgqitypMX554E7urJUEkHCU6DpYV2KTsWfkXrbaoszzjCHXijphH4",
  "key24": "Se4HbJQX5ne9r1LpaGNUvTLPYrrzbdQHeLaxNhXBe5yMDhCQGQ2BTNx6W6TEwFxsBentSXJKVW7MBaaekK8vGmV",
  "key25": "242jRryBgof6gKJNLKUxeuCu8vM6pNJWnVrPM6V7zarT5NyY84Naz9V3GrWVJvU55qbtYWrCgtbF8prbNSfjtLzg",
  "key26": "4Jqy2AAc69n1K1m8ouGzsgq3J2a2G5r9hUs88GcfULdi6rHvCqhMWqi4sEt6iRJQaA5DxoiPHtmnTRiZpoaLERoY",
  "key27": "GggC4VT2bWcfzNvycsaeAsjRH4pfVqas4r8nboQmR1Wmp5u2NpDM1R9PRiLQX8WmrN7rcMrKQxUkLxnCQCLGDHo",
  "key28": "2SQj3dGhV8NTPLKzb8kz98JtPndn6cpk2snRRttdFgFdBgGJL4NAAPWG7DUfCye1VqVqCzZEyfm8gZY8x3khW2xa",
  "key29": "5U2Hq7bHZdXM4UJHgvsAhWQnQ6CcdvADBCHnzK7prirfENzigSx4cUjYRadf1R11bGZLAJtWTPRRu7puTDYt6n16",
  "key30": "5ZW3CMxsPJVEaFskYh5aeoY8uBYQAvzcEuJZ3RLJNUxSVSHzCRTkYG6V79uNCMZFB2qegY5wh5kkNMaxrb4V4tuU",
  "key31": "3LJURYBzxZZMcs1PHNGwQpFKhz1svwNMmGexVdnSGc2U2zcZ1hv5qaJgJ7HL49E6EH6VmsVvwjVQdeEV28eLvsE7",
  "key32": "2UAfmGq1jix44ekcbKqPrjJQGhjJdfqgNKgcU2CxSGw2o4wY3HHHs184DHR5yyYDEX9x3Kyyagvh79M4Doxse2j2",
  "key33": "478z2eR8dBoNV6BucULLgXxoSzDVMLpyFKDkPXQutBxh3TTH7DemXXh6LC3BzTTsRWiZEVLrnoccTSpxhWsUqN2u",
  "key34": "3p1KiJsfnvtwctyJSpiWoAZM6Ya78myGDkciJcbSyUWj6wc1EwuNTSEWBLamBhojwyoxbJWZik6nB6XwxEQEodf6",
  "key35": "3JMToG4DYjmCeaxMB6S4n3b4X36RjoXyYMVm2SJKhdzMZpBCQqAfK3FX996hL6NMg74hM8mm3qo4QQNsAYmhWXAr",
  "key36": "3SiYZ5SeXPLwKVw8jaenBKV93qkUwaT2668AADzpfh25aA5Y6498PqNWX1HAiDDcfEwB8XeD4PzkaFBww2nKTkX6",
  "key37": "46r6DXzr2NstMjWFPFpkL3RH2QtuEDuzECcwaZaie2zxxZ6DGeWHXPTVWkMEsqLCJMQpx2qgizPS4J3wWfEQoC3B"
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
