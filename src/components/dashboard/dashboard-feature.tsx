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
    "4ar2HNveJYcuKareWokmzci3b5pDeM96nBhR84uU3UwqrxzfFjqpwxRmzEGYaMT1MbRhDGKefUgtVPbdFKCStVWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XU2zyv8FfwLeF8G5CEMmpFeDeVM2rudLRh6YbCuuSzaWUa1RX4fkuPYBr4yFojia761bWp576ersjG1SvF6NrMP",
  "key1": "2L9boFWoxkMJc9aMGLrxRSJd5NycZvWhk5o29RogXUaDbSsCSFQ5uUACa1WhNipjSzqq11HzqTjnTUfffWzyfSA6",
  "key2": "54cD1GAKLjc1R9grjpb15DnzJCAYQbD449u44HDyuYjZLCKpZT4LtkvviJVwno1bzzbRUqLkMVMX5wg94aZsw2j2",
  "key3": "44zFkW6eMZauzxQhiKkGzzEFnoghhdP5MMytPR95AEd2vpASLds3R3dVGrXtTCpyQnEfkhrZX4zeMzZeiEPVCPkM",
  "key4": "485Ux5MoGbpJ4UPZnc6JgGTULKdFx9AAffLw7ztPXgVBtbVqXybLcgzP2Ey6WWk68jbGuPNcyQMNq2RyRr9PDaD6",
  "key5": "omxCwCm2H2CZTVQYA3MQCDkjpqPNqBvX78hvfWDz5LhwUaPpP16HGXkhjNxHk4mByRUVxgBfXsJpRh3Jmo5sSsF",
  "key6": "4Y9FGHhtkXgFYrFK3njmbQehwoLo8csHaAitHMXc2cZbRqS2yZ2Qjc1nvUgNzK9NRbx8QqjJHVNkitRiq13B5jH9",
  "key7": "2Rxyt6ddm4eHiZNqTL6vFQH3ei7pugFtS8dH2Zq4utxFJviKYYJrX5RLm6fEJnY3XvfQi41SyQtnM57okjSRqKg9",
  "key8": "5RAxBdiPSJu1bskD5WUQbkcQsnNeqQ3BJX2zCxtdrmtYvAAk44MXCtfNTmdMHbW6dC1HckG5Xe2m2387pKNtdxNe",
  "key9": "2A97pNXPYuPWvDbZNt7gdGMeooxz33gg9GBm9L8kxgMrsgEXczUmwnsrg87YscCgwgdjiGiQpJ6fFRvJxJnGYmNb",
  "key10": "YuXVGAAr2kBRTof4MPydUqTxGJAbTtm9vrW8S6rigN6bqzEJR8vq5mRStbESoMRcK7CjV3DpNRm8DBEKXv58YYb",
  "key11": "PPxUyxxAjqMWRL1cpVtp1LZ1sZFvK9gEYeiZ5kNg1LVwxCrM5X6Crd5MLor39Airb857xEjvbCCdyH2obEFHNib",
  "key12": "63pVqGQcbbc27SwvbsdPL5dEeU2XDEvHVgNrUh3JUmZvvH3pEKfFViLsCuFVEi3mfAgf1dsE7Ps6GwPA7nG8NuCU",
  "key13": "5sECBpeQont9Xp97bM5YKGefq7V7RVq9wTC16Ejdtjkua7fPrx3xj3dWPqHLMKtb1Qx2LtnWJSD9WTovzJZ7LsBQ",
  "key14": "2TEWon2S4qUXhAycjcSP8tF3GhTw6gwp728hbVf5MVTEuot6ap5Y3QeYYNLZVXcVu9cbKusURagTvSFDmSwJXXHk",
  "key15": "27Soc2tkQaineHSWPygMCXnTrwNMfTsCnPJuYQeSKd3QBtGrkSeA6Xteh3GAGtkhUtmYG8bJstUrhLsjgCqTTzJj",
  "key16": "2HMv15B288rRtoz3EV13V9MbuXT4ToU2cSiWzuFZCtkUCGqR3uuGGV3rro7Rhtb5KHPibU7jdGwGVfVsVFRg4Sw3",
  "key17": "E9uoDE8Uz4FnZtaepqqEGx7CGBMEqAmTGqj5N2TLvBkw6xiAEYh2QJEi2EGW2gUXC1eBRu2a1BVUJjdGBmpy9QQ",
  "key18": "3GvnW7x4a17kEXM5UQ53vw1pWRQJn5h8JWwQaWQSiapnaEwZRoDhApdpjyPpecmN1TAxr22sUaeTWKTuT8ApzTH2",
  "key19": "4UbUaVzfRQ3Db76X5jxhDzhoFGdcMXBYBveyWSbg8iECEgzTGnL61doKn9m48Rcfouitwsb8wW5FUTY26zLHVesM",
  "key20": "5F3vYTeCu7rXi2UUBZ3fGXSGTjWU1y6kSdu4nB9cjc5Xb5TrV97kHgHPT2X8hJCaqcXpxx3DVQEDpXZBqLCCiQ8J",
  "key21": "3j1mEGPQUqTp6BJZx2qVfyyy7qkqaNA5KX6onuHT1jYnvBXPutXx7f4z8ZCd4j7CwZN5URyqSN9kUU9YruoCK3Dt",
  "key22": "CrP9gbQUhJ8CvkYf9euQxriMP9DcastMGZNbLXddNocLUNuMnXa21JdjxKdhcNw7hEuXdyRZrG3s762Uoh7N9eU",
  "key23": "3UZwXiqCHADKNEssbhcALk3Lb4t6NtwZwbuyCoTCh9b7j3ejivDDztBdsGv1vrLoeN6u9zaCfcK7W1aggpVZSj3L",
  "key24": "LasakVgsLFvMHCNiwoaj4dgvaDkGMmL5Nj9YjG663cZAvLi1zFf7uURwSHhpz4N8NFJcgE2z95kYpT83n3dYE37",
  "key25": "TkrLc3jSmMLomvYoYKU9Tmcnosnkanco7RoNt6mXfyr78jBpZhJM6piuPhiV5azA65agokhtbbkqXj4a4P9sSLt",
  "key26": "31DN7HZrfy54TJYT989VvX2p7WYZvZXLUqYHYcVW4aNbFt1jsboq74ob6D1g8LDsep7TN8H3RG58kNdPEfmuNVcG",
  "key27": "2jwv5mnKunvikxrURHseFCAwErJuho6GKK2nPr2PuuxTz9PY4YBBXMYCtSHAaej2PLpskFCdkxsKmnbgJdsHA7CW",
  "key28": "4NZKbyQnsADE3455gzk9GJUmrXMw98cTKRdNGGvngM8Ttps9g8nWqcCdtt58yqjFkrb2zUt9zAMYEMFjTU3dMgh8",
  "key29": "4yP2rPZVVdkQUQUJieUZr2CNh5xuvoZk3BspeQT7iwTwEURKPpujRixuiJ6LKXqmxxssNtD7fzUtZpw2T9q9zieW",
  "key30": "EPjkqKnKmkUYPt5tPiszU3dczhHA6Qkwkf2C55R9JMK7G8zrvFBy5r9sYchxokRvUW4b6DdmfrG6ovZXa9tNgnN",
  "key31": "5PrshJ2mj3FuSvgpF22XJdXJ7wXpqTCoNqLo5X3g7exGFDmJCs7BsEE6LTKfXSS5x9itXDfkbezHp5GYaCjpwRwe",
  "key32": "5R3kXK7FsiJwzyTU5rxzMCtXnsc3EL6HdmFiNvETY4FWJYPHDGhjpQo3ybfBcrVUCQuMFtnNxEuBDfdy4DN1ySfT",
  "key33": "43SsaFddsY8teqbox1CdCM2J3BxdaYQnoRYX1coALPGzJZW3bDt6Fbyzf7owuaos4mRPFz5gmCYxtkiKN6s7zwTF",
  "key34": "3zRhGPyFQn4GHwGKbu6VtWK3cXUeZK9vsh8zqvEa4RbsbFoBVoVU1HXioQsEDQF9uJR1BRubULzLcZcXhF9VRkJ5",
  "key35": "2vKyTjq4UB733aAvQzuuS1DPCiCzpFf3FLnUMC1UNv18X53a5FKitm5GHX9fHU6VhoS2ktNDSGmr9bTtHtDGkhjw",
  "key36": "28b1MNqLHvEEnGGGgmtxDjaegokZYMB4qHmjDRBUFgspy39Dmh8qunu9Ph62uBZVx295VPZseUJ5q3AiX7sDSyFd",
  "key37": "536uaHvTNwLozy5Nra2QpBGkRriSQBUXH5FdbYzdCfztqwh55pFm37KzhGWhUeN3djY1JAMEzH45LTjsi3RjFAcs",
  "key38": "y5H8ZrE6GEJ56eRt3S8GK64XJiMUa5X9vshzAb4Y9LMKZ38ziFTANXR5ai5Z6AU44e2ikesRmHGTrS45bBptxnW",
  "key39": "3VXp8GFd7jiAMttW3XAXFE7Rov29TEt6AMCqGomWgEh8WHyTxvpbcoQsuB5fCDjoAw9wzQcv2aHRCtE2PXwE5gUD",
  "key40": "3NGZM82DjUTd4qJzhd4Wxx1bSJH2bxykLVbj9nEjZPF994XwypSwh85DX6sTBwSYZSmGrt7rJC3cq7mKGdozMr7U",
  "key41": "NebLGCZ2VAZWDsCQYubs4GUidJPj763E96Q8UFq82tqMC5HiFuC1X4sMkmokKwQfB6eLfMruic5uuv5ZEMkLEr6",
  "key42": "3kxRaQ2ut7Y8B7D96zJKssXukQATbFb4Dg9tCvokhm2ruvhWBbNrwxqpZ2M7H9nUHLNuMBi1fj3hAb5tTHv7TvAz",
  "key43": "3z5qxKroUJMS8FkVhvZTvBpdNY8yf1JFkmiLVVNe2CZj4tep7nB78MHi8wErALAMNdAvXZiX9BEuCeHCX7PRGPSG",
  "key44": "3frGbkazhqm7DyKUkYJFYvkVzwSJurRHHLarmQuQ1QFzwG4fcwAJRFxzasi3uX34NkyPujBqSk5uFAftYBEhkNzU",
  "key45": "5xMAVP2BVevz1qNtXfvPtTfBsCxd5PJFjTa7AUGNmECsZsjPMNKvRttynkKPgqPfud8jwXzhgBLPT7gQQAjNnZwY",
  "key46": "8DHKzEu7cy2vj2xhAadW7qyCjVeLLfFNQgUX3w7UrWqMkCcMUEJJZ7BrrEwUbLZZaiqdutsY9YGMupgDYb9eAuy",
  "key47": "3kPdA6kJrgspbe5QWACfV8DDmirRQqT5Vz2TVCndQMSgdYYYtSJnhXDxKAK46zB2mh9rmbiY5Q14TozcJfZA31CZ",
  "key48": "rycp41FgSKReFJVjbYr4ZMkqPGN8F46Mbt9bJxwuTTuXZ4pApKpcTDEPLqaozWtGi3u37DZDTLdPMXUQR1bhR3Y"
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
