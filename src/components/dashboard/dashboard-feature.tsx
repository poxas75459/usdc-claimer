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
    "34VjBy4PQScgr3MNHT6fDdkhMNSmEwhxZVoa9tYUTHoNRvoZReymmqNij4SRm1dGpsrsXh1gFdYn8GmJeFMhDaah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oPL7YBTCHxZ7avVkTtttcNfWY15ME3huDq5WqPuEjf4RALMdC3Hbf2v4rNnCyvWWgMQctqm5pY7WspG5KLKyrCG",
  "key1": "22K8M6QW2AD8nhnYJuyPRLaQqPxecQVkCNKXE2YcBMMXQV2cPCYEtALDwsBV8Sr69nxeUhz2izgKcFvQZZxWMwWU",
  "key2": "3LsKtxpVZvKuGhv12Rqvpv9HsoU17XYeACY1p6GJyphMYBpFvTZZiPJG8SPnQ5ExkKrJpg9zkx8s2E8k3LF2Veh9",
  "key3": "4w2KmoZDifAHgZCk6ur593NemDds3NdLqd92HxtH9hD7dGykrfuxjW4mosR3hYVqBdyiDMz8W39D3jPCknN4RQFc",
  "key4": "dXHEEnFCbV6WveNBs7K21sdLx83z4cF8p12w1XnNYDPDDGNtnpcqro9ieiWvm73EnX9oY8hfvjmGptywq8TUM7m",
  "key5": "2RqxuuwrGtJdHfecdg2cCbS9JpWYSf6TbjgfZahAFtkyi1xKhWdMuW3hWD9VzuWLo37WdigqdCbcKbsojUUoRKpa",
  "key6": "2cFG5XQ1gbyANEPihhJ17b3WPSKBUVyHSk4rtcPhbFSXj5PzAvCjEkR7Ac1mqHBZwjv4EsQq9HkKvaTQdmnMtbnB",
  "key7": "2C2MnYPgQjw3vQFhbgDZv6RKDVzninEg6dddyFRHizpDuMUcnEZ4itGZhZT6xnwGEUAHmgDxuVU6bF5nov5Q6Hnp",
  "key8": "3vg7khmNLpcKZJLdwVgV9smpyxi6Sj4JngRScxQFC7aBgh7U4FRCVc2AuSYHCHZiA4GcLkU3nZBvkshznSi9L8o",
  "key9": "3Hk6511qvbN8MiwQG4SBrAUpEZ57o5pmpvWEf9kh3gbsdnFXt2Zx5q334XXdKXm63KGma74HqTsHtMFNZLND4aRQ",
  "key10": "jkFkhT3CViKg7NqQtuSrBBtF6rDFHYS7f2scHpAAHWZdDHMkDSgvQAL54NfSrBp6U94fhDauyhGriZSPtdjLAMu",
  "key11": "2w5tGaQsN3bzosg5pVrVMQHeTNa9tqrBbSKeWu88Xf1oikvpDT8xSCGP2aUmjT1pRZCnxFZ3vjuCyVPDYjKhLo99",
  "key12": "3L9cAFkcGB3dfm5y9gv8w5D7vG7e4MupRxR8q89fGmRjsrsh4h1cP3BEAmFc3DzZQsPnyt3JBAs8AKhUL8vKviJJ",
  "key13": "59HrZQjGYLmnRDvWUQPdP9LDH4VsbRcN5LAbWzxBXA1k1oMA2G8BtxqLBcjBNeYzHUfL8QwhUUby4vD9mtncFtg1",
  "key14": "3rLzFREoNXahUD2UCFmoiG2qnYhpmbdaCzJpD1b2so1NHsrrPkhEBh8mLX4xroFf1TbC3J97P6FXvc8yZkm3U8f8",
  "key15": "4AW6yPTN7W2B9R1Howq5wDDwRrmMLotC7hDh4JQMh74bsUXiqvr7uFXY78gbQx34cUxKQy85gqq2EtxouaptxbQ",
  "key16": "27GjeeGu9WMgfRYbpZTCpfdKeLLt8nDUcgCrKbCwPa1U38Xz2U5TUDK7uqvN4GccSYnfCw7LcnZjxf3Jmp3EokkJ",
  "key17": "2HgG222TKusiRcNn8ahEDYcJ3exQjDmyfuLpgq4bWJaU31tEzxH6PzFTYNWaUV28sw8FiUWySbrDeTQZomdgFpkP",
  "key18": "2FEvTQKRjGW1C8LHzF8SUrvhPbG3t6SU9NUYbDsfjSHFbQUv8BFF1cxm6hc2DFx8wtzaiDiSqC94o2d2K5DaeeSX",
  "key19": "29TpLgfMtdCmGpFkbaD9aLHjfZ527ST2B8ZgUUNdGZjw6SAFS8putWs3htMoiwXP6CJFNyrHpjETkPnrHh24hou3",
  "key20": "4AYHBfuj2rbdRpuzac6UFDDnE3i6cagJXKcfTEe1hq84FDSByoHHz8rMnLYHtSJAPz89h7HkEkGUJTYJvHHwqRH5",
  "key21": "suvQjAUQHfFh3votNqeo3EkUfk21yUeVi79bs5cKy3g2ptzXvyb5dfM3vcY1mZth2pRjtaYWatNrNyd5gnbjoAj",
  "key22": "57Muc4WDdUiWDqLjAgbsty3NQ9zb73z5vUGhoh7UwU3hbHcQWhNPDfF2fo2KmevX1G4WHvR53oCGtZjtau5iqCfN",
  "key23": "54FitFYeDLhYRqAigJBdCyTGfb7xgNcdtXjgeXiQTYTBiENccutNKhBUJGkN3o6iFuyngf9xUy9S8tB1pgcaeH47",
  "key24": "EAa2Cbfiy3y6PhYsYawJ6mMS5dgpSJFCwChGst4uTvZiJwdRVbNVjbjrgyRZndKQYYP31n4HtWntGxA3TkDoT22",
  "key25": "42njpdduKJp5RZgm9JiZGwRsEWkXM7LEfvxGVuv8YFZMmwaU2piZCbh4fAerVfqbUhjQrCGrsQaDgXgxx4SuaFko",
  "key26": "47LHjcEz9b8Hm3c3YnsuEekQsiUdPa1k2j91c9eHp4XBTScBfzT76fHfRMXqVt4Fu16VNrfo5ykxMLQf7ApvSq24",
  "key27": "44zoGicKgYKpCsjk37AbRbxfRccQkd853UYQYMzEh4Z4LpV1FNHmFGmBpfayNWCY2TCAnFkHsnW5usjxMLfx2C6f",
  "key28": "2skCiE6w3abdUYDzXayRLSL9zUYW7JmkdDqyM3SVTMr6j9EmFjRNHn2pbzPGEZkS92G2Nnp8bKwkcLYUBytnRFvr",
  "key29": "4qkNAWNpEn9upxnkCJzBz5eDgrTiCyc4PPkJzHgCTDX74QXKkkraXz4VPy28uDVYNNZL76d1oCE9pvigZkmKEncM",
  "key30": "2y3kuc8EASWwXQsrH7zuPrcA3VyHqQi1Gtv3NT5WbWwEayhb5jWvZE1ovVGAgqRd6qj3KUD51LEZUrvUHdwU556C",
  "key31": "2ScFPJngbLmfwGAddWpwRBvdGXc85PdtqS2nuhodvhJuy96uMiDauZsv8nXsL9FhCodzjpuFJtdKG4zRFB5JNDww",
  "key32": "5KfJDZ4b3goSUj5jDjZr9zkRq9pC9ieXeZZf5mQEMks9Uj2fosVfkY9osY2LKiqwtBvdwoAgpJi23q9Fd5tEQ7e3",
  "key33": "4SAUSeyjZsChCk6oGL8ERNi5HLiPPf3xuyugNRov2qojyEd2aKTr1KrrVoibd85TVftgWbyfmh8jeddEtPVMbngk",
  "key34": "76ZrtPQx1KvW7zBBQ22guxG26vy8KxqarrCmtB9ADqutpJt98Sw4STqHpneybHNVDWtvtbvQZazcvSmMFLC3xiF",
  "key35": "4U9rQpshejKPTzxYiU3QxFNiWirsyH3abHrM8odKLw2Wn4GjYboa3Lz9cyZ7jV14oRE1yhq1j6LAN22QXxQXHuug",
  "key36": "4wN1EXN2J8mqLnRXjEmv3wdjmG7CiE96AfFEaFKVPSoPRUWx5wKHZiVaGmGaSA1spYmTb7rDR9u1rbgdhEdrznJS",
  "key37": "2ixKFvD5Y6PRhUnswJkqYLwiLBrEQFjatnCdsRRcdsGRAhjdcVQQ9GKTzS9FqBzKVokrx2f61dZSpkZsi3HqEw2m",
  "key38": "32yxAJcVg8M924M9RoHc9D4EJDF4y5KccTrioeH7t2uUyPuQJuTkmYwQMVKR5V9AAr4NUCErKFUz6Yht9r9MBaFJ",
  "key39": "33guJ2vCGE5e7Sy2FUMunWRHP7fuLstgwBxMeMCs445GRDMz3AhiLnGjgKVQbB9FdNWeGJrvodbMVQDM984r12YN",
  "key40": "XRHxbD7RJfxSjQdD86Qopf3FpK9ofoQVmaX4b4uehkRHA92job1joiQ7NbNDzXyJGjHDbDCEz97k3c8PjG2zvX3",
  "key41": "jLUmQKBjaahmMUYHxt6TUuh79qhK4w32rYsqUHA72X9QKhuEce2DiVHmTFajfNwyEHgfGdNEeQcQcqy2BftkzdT",
  "key42": "45NcoEiUSnCAxPK4uGdHTZJpQZ5dGyUwUxbkEUPqHizmHvafTm1RVmtstCxQdPFSZ5W5cqWbUXbjTkfx3T6d5exW",
  "key43": "3hZinj7BHZyNNn9p2thQMbXvbS5wojWYzM7hzWRVdE8Ei73WdBWeNUK24hVoqsbDdVbnthDRKuwVF4ykDJSw4N2c"
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
