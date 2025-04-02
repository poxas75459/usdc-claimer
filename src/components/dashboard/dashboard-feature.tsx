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
    "3jnbk6ig7rMUSS59hPVJb8q6q52uAJ2H8igQpmGyXf7e3V4kuDbHgCgdNyQg78hW7PFZD3xoSVmZ7hteRfWLZ9FY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ciB5T9Wb1DPrHp7krnFir66cGcKSzLELbv3so1MVzVVxRCuDvVvCdQ93gcYwv8FykpmmmzAaHL8ckoFonqUqA8P",
  "key1": "4DHUyUgJRMskkHeQhu9ZVvF4VNgn14Vg2hqmvGg527LwxbbYcunaNuwaPnLHYyVgYUpmGn5VbSaS7fHqSNVjTvh6",
  "key2": "598gozcePqnwAJ59UR8QxJH9HysSg6d6AUSHkfYVkCubKwCfM5k7tUced6s6TBoeZ9jYNFE81dTdqWb27jHw4uHj",
  "key3": "4kDuzqJsPX3aSbruhukWXo1E7TVvXYkEisMLrN6ZvtHCLHVE3HndzJAongKua6ybFXjXx3kAN3FmtHmUwAVSy2sS",
  "key4": "2YxGyugyxjhda5JRH6pf9t7rs7KvAM9eXzDNrGfqpFc4eq3cxtEqgkmoCKdg98jNRmdBNZzS69rNoMzyxpzhCWox",
  "key5": "3b9rxvZLx7sjbCkebXw1CS1Atw1kPk6s9KhkcTcvxwyLuhGpGdmjcckgYr7HdPfHKtFkRRiHkowoH31fPAr5uzKy",
  "key6": "2ja6Rgz9Z9TsSAMJJxysVGFn2zWVMMTP7r1JRZkNKBmtemdEFdpoeJzW1EF5Vi48DGSBjDQ3WX5jknhqfXnwSDaB",
  "key7": "2vyynnU6GbWdPY8UsrGetZS9vsLYgZTCq8PTdYNUnQe7uhuwZkPELRVoD6xt2RR5CJPmkFYKSsgkWiZivvhcgTyv",
  "key8": "nPMfkQYxLtaz2fkhuSJFGc3EnVX5WcfJV8fWPqHNXVb2UZVxa1uYwgdFm8bY4Q6QzXse9RJEpPFfGnuPY1vzVW9",
  "key9": "2mEb7JFLDV7MYctys76DxD46eRAkPaHCxVChgJKpgGJEubYjGgNDQJLHWBV5ikS8Hbey7PQxYfp1Jp9ibc4JjcAn",
  "key10": "3edLP9RRRomgBiSKQmNCKzgbXzSe6ujVU4zUvMfovPxRP3Uygexm17Whma485RDhrkDQK5KbexyAKiCUN3bqJRBg",
  "key11": "5fSVXYXuWx1KsZjVhjS51yPM9inpWk6h2xaSTN65CkeBXdReyDQdwZ13DkYMY6P5yd95HkHfWMfroL2QZn6JiSaP",
  "key12": "BWRjew2hrC2aUgiXDVCUnjcKHbjSDwVudfg1WkJpyYPJVY8AhF5XQTwMwsLEKbfsGXmZb9FwBDjY8UWR33R3RRj",
  "key13": "63FrCAFarc5D5Xms9VFHzyYd9KoupF6u7BQ1QQoaxYsnQ4pjTNoFAT17LK6zsqXvLbJwecCsJUQevy6vPVRPbK1F",
  "key14": "LCn2orkoSmCjvEnqLGEcodmV8psPTR4LjxGaXdZhZhDJmXvuZDtA6YDfgXARrob2uTwy17dCCPUsgjSq9RiPGR6",
  "key15": "2zPmfN3fZsBFbkygQhUFTy5LnejP29mnPWmdZMpzXyENaNcSNLPU93cw44A8hPTyH6WBnZcj1kTXJwSQ1duJuJ8X",
  "key16": "5AvkWtj9vGNTetr2HWcj5WdrX3X2HXY65CfFziwDNMrmqAiTyvhZkaYky2S12DDB8Fa9YbUA1r1Kq6rgBhPjSWLj",
  "key17": "5FC5ScQGW13ejT9w7n3dikmT5bgzpBmumzRDzkpqyYga1VHn26DWMM3EANuS7tUVdz2sunCPsd3fLD4AMUifqii8",
  "key18": "Gc4Amzw2WdXT1eEwKPjhE2TRPxpWmCBW8zotog6SJTpMsqgUs6DgHS6DvddTLqnngdUashU13FMLycZLRFZZX4Q",
  "key19": "338FArDaQvxVwuR3TkAii5xrbTcKa9Rt9qrVrkgjMD78qRYAskbBqnYBYfv8vof6SbEUAGwUThaSP4c635DXd6gx",
  "key20": "2rWr1QJGBABjASMZazYZz3VkrcCo9nagGq4vDHVzTJtevuEbREPHPwN4wyfVJRCkz461FbDtjNk5W6UJehuzppGA",
  "key21": "3Xg96TSuQagbNbFdhN5g7sPYL7q25GT4ymmrmmC3CPvbZCW3RvHVbftFq72wBaNsGHTEBj4RGm6XfkWUPQLShroK",
  "key22": "X2GF5KUBKpsU3WGNXzXZtjipUC62oWyRM1rjYYu1M5A2ZpQL5TffxSLRupZk2bneBap7cxZCBnELF9kzP2SYUV4",
  "key23": "43mK3cKcz5RysG7uUdokBAC2GQzktC1ozeHmABZ7aQcNSSe9DzC7eC5RhUHKhTRdfbEaQnV6wre3XeDTu6ahosbP",
  "key24": "DtXC7PZWUHJuEcGQ8MmdGGv5usG5EECgdoYfr3dNYk84RwwmHuxvCWsudehaxgdPh13k7ey8y1utepTA8GLqCPF",
  "key25": "49q3GjW8FuqJazscLS5uVmnoqpqdfi7dz9XBTsepV8a9BVSmuRaxZX9twKuBKoxCabNcsEi9hUAAkmGPhJZLzDuP",
  "key26": "5Gpr3xcMXxTvX9FwEsfmACTCf6tJwZjEs4QwnUPkMAWX1kyMQzQDUd9ba52iEAk6e6pgLsTyxuKtu9aLEEMv23Ap",
  "key27": "4gy7Asu7KfPDhPKabkvaY7vbYxeSAb5ThAvKr1J63sb9Cfz9etW5v3RKFPg3psHRb1LneCsQDsdosMqc9vMH9Qyo",
  "key28": "pvuitqXih7GPaAF5JAUnrggRuSiTmznUrintJuY1hW22eU7h11iDYP5X1xpdtjTqwwWWB2e6ykt37ZAW6ipZybt",
  "key29": "5kcGprQU4YRTpPL7s9GZTf1HxBrxtc5zJPhNTfc3fwzCx1bndvsJXdrRXGc2RH4UHnnQNq7dRyML2iQvSx2pdbht",
  "key30": "Cjinfy8D21TszGN4skk3PT3p6BwBu7CEntVkQeR7uCxKvejzhHDyzai2WtpJ6tbksQbNM8BVjqYcYZJWsNJfqhx",
  "key31": "5vwaBvuwiEeXiXkaQwWZwk1PHfFiMrECycD4jZ4veLJz9F74UN4vTd5rG7Nr27bipVv54PLePKRm2mP7GVn7TCwy",
  "key32": "286rjiUSJgZACFQtts4tJkQqiNwYdDNDbCv2HV1E21j1J4b8NzCjreAWR5HsyehWYVtZKr8DTb9C4AMerG93DAam",
  "key33": "3fcGpCHduT831FJewjKYAcWakYnx6kofMqbzUJb4xefFkE8uoyzztai79SbqFVAmG8urk3QxWYZsziSRNjorinD2",
  "key34": "3spEQx8cijQQcpk6Euvt7aR5bfBu5sZKvzHfeBR64DtQxgEbkvPXMtiVuhq6jvUxar6hs9tWHUCcLmeVKfFW1bBn",
  "key35": "4ihp8bJtFMV3jjBhZJxB4NcWkRWPBx5FPzuddkfxGq9LMAfpbGewRPTCCm7nq8BJktsU4HwJHsceCrMomjBdRaUK",
  "key36": "65bi67vndm8oTaUyuoUjDuEiE3bz2A1EdJykBXP35JBbEJrwfo3rk7HbZ8qF7sJa3MXMcb2PmskJBTUBi8xm4mMh",
  "key37": "4GZzkLFwgec2VoRAYNP5kkqiPZKYN3tjUGv69dt2kcUWJeKU7vAZNGj4PfT5gpD9SGCnu2meaNsK4ubh9yg6ADfd",
  "key38": "3WPPDKqGMSE1tzRm71ca3euFaxVc3MYW2KUFoTSV1MFWELRxeZxCjdpDJSKJBAYUc6RZrXw8vSk8CnFcHRNyF6TC",
  "key39": "4YW62nxRDNyrYmcm2Fyd5rZsTiCcpTdGXBxXxjgrHTExaAYsUYSvLttstVpteEGTwgDpqNoATe6S7DEkpUQ9JreE"
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
