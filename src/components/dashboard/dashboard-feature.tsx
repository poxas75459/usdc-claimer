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
    "4GPwBKwFupBYPPYRG5TQYQSgqfPR126XigtCzfrgQCcgZsENfkPmMFuDA58TYKYzvr3jLkzVh6PPQA8Rqwxd9mYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a1dQD9xPA8RkM8cv7wStkHGewMcKgkMC97mGx5kHHqWhrhQuFbwY3PS9dayEVnbS7L7gMCSvJeHJSiGFwkqTT76",
  "key1": "2tToG4j6DwKS2qAoURnk8N7zGN2m9xxDc7hSjdjTRchZ85rcwGW7Ds44QxZSyNfbRDVaL9LNmqdxPfNLKJrDdfdN",
  "key2": "oE2PY8CoRMXz9CHQVXk4VpDio4Tp21RkC8mqJrw7jQ8hM6Q4DvEAcaKn94CnYs1KHd1Aii1nocPQVDRD2gHdiQD",
  "key3": "5GvcPhZ2iV6Z5QJYLkfGpFFa1thvnwz9gWritWvRxAa6g1di7nEEEopPeTXjzcrbASobAPKLsADn8TkW4V5Gxzi3",
  "key4": "4fGWtk6ye5ny1DQ9L1JXhdh6PNdWtyjTr9MQt3YfY1aFEv4VyrmVtAqYZjg6sBLbG6TBEuAMHz7EE5HeB7UuPsov",
  "key5": "3rkTy5QKf9FHxjvKQQ2QN6bMa82G7v26MCJRrUkPh252ToU48PdXzkxPincGc9Vf5xisjwDErqWpVuAGVegG1gpd",
  "key6": "4EQUpyzhJuhmnK5FWQpvMbu9hxNxp4iExi1cqmphCcJTUJL1vK7ySQqcP3KEBJtGfRtDAhZ9pznv79NG3WduDZWT",
  "key7": "3jw3euKscz9mtXN3qPHs69vQExkB6AggXh1aaShUVTtFGWwBA9Txvb2AycKN7TUX4vsfTxYidKeGRYnzDzLo9ptB",
  "key8": "4ZXzPxjjoRgwWsMkkMMBdr9ksooiM2dAKxWDR5ft2tGqVDaBYVY7zjgkh4zF5PTD4BBVra7hbgy2FiViKDam33CD",
  "key9": "2FUgv48NBaSTvGmYvLy9iwbi91aWksfvc5tJgruVQuVmrwjMp36C6WSjdvvPrGEcyMFK1nif4t6cD74qvSsUBgTk",
  "key10": "2vZasjhuywazkGe8FNiZxc1DJkuwwdroXaK9Q3ZqMtsbVZZh4EXd1hvEfjxncCp4UTzjJDRvC5TwYM5nLYjy9hTq",
  "key11": "wnHy6hkw9xeF1Ycw8BTwvF1MACByFjgef1VPFPR3aKCDiqzzYCpQRpZkzJZxqUzJfN13YqVtsb73GBMtWgdfkin",
  "key12": "5BxbzWASZiqzQ8MLpJpKun9CmKgtfFL8pGv9rb8uvo4bdzn3D5Xfnfh5aa7w61uczCEqxra7qH9fAARnC5qaQpJW",
  "key13": "2Nrxf78J1PjA8d9UyvLCSeURnWocLqrjre2KjnRYbhRAWQmPDSzRH2fS2C7H2DrGZYoTZgwrWmDnzTjvqeT9BerB",
  "key14": "3o48tvphz4hm4LbKn8asspK6XUFGJ3QRULxGfMbBDbcwMG6kTuaqQSFNZ9gLU6EDD8vYpFPpdgE7wKDuhSv8hPn3",
  "key15": "3bCz1JHzRC8GuL2Z4vastwGvgphGrYx6N4TFuCxWZ7MTFbHoCDn6SJiQFVmC65EMzvB2oC5CFYm11Hu9PrXhvFBy",
  "key16": "U4nxcpVe5VoQ6zmhGrGntqsryq67frrnsGr5Te86n8uoZeCWpwQ4hfZ3cgxFV8SJrp9gmTmWTofs4Zk1wWyCG9p",
  "key17": "32PHpJk4UQjPvdEAvzjgDWvjGGkSM8TWsVD5V3b3DoshZZXdNTYJWdXoS9QiMsmZykymPrFaeBfv4wHRDdHcEW1K",
  "key18": "434Re1BosnW5FGC2SWLDLZS2nP87LnSA1V35tYjbAgPGpjP5cfoNX4oQsZsDWks4ywKmxU4WRMA1Ym8hUuip5YAm",
  "key19": "3Lf5YctwPhoCVByoKcnAqCYup5vinQggGKLYr58mKe5y82vgxWNWJXnxAxi1MWtpp2QVQaFkJMjPGyLAyaNzuqXX",
  "key20": "6BTRYU67uvUfGfwFsi6F3Nx1h3HNCGafH8d3ZKK9ijNmfd9PBjJ8mbRvBX55Bj97Qn8gME1KZyzoGG8b9n9Y6Zh",
  "key21": "FPGLL1FarSiMQw9sTML813bAgDg1V4h93bKpifFBuh9e6feNTHJfj89aAxf2fTrTfJX4BQi3xuMDn4XrphFyr1b",
  "key22": "3zBqtfJq38SZNCeoGfVh8yfj7L6VnUZDSAXbBPjHccSr1ZkErLh6ECn3qkN5PrmpYpqKFy7PKKf8Ty87ZbY84BzX",
  "key23": "63pBKBqvHHyGhRg3pacSNqvQPYg2UKbX5EFHVgk7PvHMuYDHncmes5yr2YXnbLmqFJ7H3mEg5houuqnDTTkhgAq6",
  "key24": "4JmMNcdka2KtoKvnwhaoeS66JhJ2ACtkHE5tocWF2EWUtM5oy8uMAczLV7rFA6o42u9MLqUZRMjBwVskgmMA2C7Q",
  "key25": "37izn6Eke9BCZwDAu97sP4VJVckKpDWhjkokHcripqUAnxooNuzZzJQoWdtydEcW293FHGTsoUkEL5cFQ755PPNR",
  "key26": "3hc3xuZQ1CoPgifTqKJAAjY21vj6Tk2Ru6nFuGbauU7GkYV73iV7bVKeWXVCnEFroRpCxurssVNRT3cpR14ZesEr",
  "key27": "4w7xVJQqiFi49yh3n5kLb51S8jh8La2uT8BosZ98btcH9YLyjayQTraFimwaMckfMSZtsPcfwXnpJk5kwf6GBNNh",
  "key28": "55mwsGGdnyiPz3vXxuQPEEQ6SPtdBiVLzgrNooQPhN3p2MBkJCwTR9c4y65K85p62TJSZf4dwdLAxP41Y3v82hpF",
  "key29": "55DJACFSKiaxjRpw4D4vXHqJW999xmDENz8boEkQ6E7Vi18WsMNs75JicaQNB4spaahegNk7gaSCJPtBWBQ8cVom",
  "key30": "426DwbNZeLTv6sQVFxHG6HeYVsYBMGK1YRdVyhYcwdZrUDM4eh7wYVuPnwW6cq3raVNqMxBihYDtDV8DvXHp3wV2",
  "key31": "3P59PGN4Vx4Pk9XSSCu61WrKtaFpeazSogLh2YxJLeBXpWfAYdUAFA7btA3HGsfc58cNJ3XjkZgDGYLVe3JHDbzU",
  "key32": "wxRkJ8sMjLfGXFoLhrFfTa4tVy2N3fiaYaYQ5RETg2qV3KyUJfBJjtRcd5eg7AQw1oDFhj33yWCYsW7jFNwvozq",
  "key33": "2bpqbjcZ7ZPVYenkt6Bjqcd3nWErJ58LqaozHWE9JySFV3gLwUYLx3Xbb3UDy4hn2dhMsW7WQJ8TmbUkXCU9DpLH",
  "key34": "3Qs5B4HxAY6wwX1ZjJ1NRoH5VSjSnVxwiRfx3WJt7LL6hA9rKwMAS2313xJzUyhVuwfL1RG9A1B6mzgPgh6BvT7L",
  "key35": "2KuqvSertjHyj4fRUDNV14fuCALXeDAtDABYpGAYEhrMRcL8P9kVr4B2AXuBei2vj6HgoV6PTc9GpbGe8FNYj8Wg",
  "key36": "EvCT6tQ6vajqUZq87WmBkAt3Z7YTZxZBxRNToxrLhuUqWEAsWSCpxEL4sgYP8dES1WeWcHwNMk7fhptsnRvJcqC",
  "key37": "2N7BYzvTefYCiN5834AAvEJiVhbHz5wEpGK26zQX1dN3qw3KVeB3Myhq9bnwHup9MiwhYqq8mFi3mYLB6pALeKga",
  "key38": "5MCZvd4Q6aQYXUjpWg5BhMvJZeNud1CPCvKbYDbzwxGvXesj69ps8dUfigQwZdWejud8QERALnWgHbvEcR834DVK",
  "key39": "Um69sb1MxK1WHYSJGcR3GcvD5Xbpe39WgpMFArVAoUgSRtLe8aRRLzfcSDdDS3DYD6GZqG4zqFu1dhLUqxFMFMZ",
  "key40": "bndq9n1M6fBuG6kkyojdbpYKYUew7bRRxLPSFv6MujmzoTdwahRTWspso1SMAe3kYyS7Hifs1xMmecdJxEvpzDj"
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
