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
    "3qB6vFbfqKXvd1hmFzV2CQ5Fapcdi8pYJCSd1gJS2QnTaPCzdysCizjCeba3zVTjdyjRbqBNuRQ6qqgKDKY9kh1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qCtZrPWZGy8KRBEqqibywj8RVdxeZNqp2PP4jBbRjJ5mUAzaoAzn3GDSfNbmCXzPcvYbsDmdiDb7eWwWhaj83mM",
  "key1": "53KrbP3P1fKEfDcxVE7rHgPnmWXPZDYzTJrQagBKMV7C3K5KeV23prNEcfmzHi5hZtnGGrTbL3Zb5Wr4ypqW3SWY",
  "key2": "3BT5juLt5HxizAqg4MoUsNBv13VgP7rHdBWomvA8xozb9VUoUNj75TKLzdj8KrqXhBjVLhRvnn1PJSpjdyDwoFbg",
  "key3": "3oimWrgTkCQU38BHXbN8hZDqavfxhxfjN6772CDKUoDSfuaiF1ZV6NEsusGUX5BF5uS3BVvdap8nkpANupcmXEe2",
  "key4": "2KmF1AgTTUf6b6jX4ukoNUknv2daF8SD3V2LeSzu1XidxruGWT43Aq8ZSWWyrxM15RDncC63d8RuhXSddeJ5XBhy",
  "key5": "4dQLc7p3PNn1rG321ssCtryHayPF8eeBVvbUc7YedgmkuXcmnSfvfJSXW5qcnfj9H83sPH2zsT16T2wT6rXfmVBa",
  "key6": "3XCdo3Pyv9PKMqMqBWwhPdNM4a75BWauH7pDD9Zduo18ipmVMBYi18BYnCqWiUbRbaiPpy5ETBczHZ6mL1nr2sxz",
  "key7": "2jY4KqRFsXoSvSbQ6LywBzhP4yS76E2mF9X88JmQp9MrPeFqtF1ho4mL22TQPqUrDfwb7cY7QNnDsx8Nkpm6YtwD",
  "key8": "2r2dtfgKYJE6vZCr9Fgc6Jy5fzaynV5bhHHqswxm6st59Mf5itQ4HXkyvyeiDYB472C6LNBXsWoxXi3cTTt88at6",
  "key9": "5JRQ1ZWENmgRwUeyEQ6GHfwqDjXeMoNyHVRrsJg4ZcHrBGSTmKzg9stc4Qvifgt9g1CgwQKcC1sYbKZE4ZytUGp7",
  "key10": "8o6p9R75awXEd8hcfsGWNysfi5H3Lep6xPHwReW9JE4DSfoCKD4YLHbr44CWCUEUWn26fjS3SfHVLbxPN9EaYwa",
  "key11": "YVDrFZ53iZumF7y98AzQouTazppivXJSbDf3nvioFzVUmgbuBYaE1e3p8Dt7wW7ZQJcF6YuMkmMydbQ3zFnbzaL",
  "key12": "2vt1HFMrTz2aSC6CWrqVm67s7qooYyEqg32HPvYAgbvxhQmm5AAorxD4odyLegKwGavX7gUyRMHPAa4vV3i7NCYr",
  "key13": "P88BJNKDK3ZyyfGYXkacBjjQKMfWebNdBzUKMwY65REpVSyHUii5W1ekBpbdUzUfWGJWk1ZdGHoq5PqWDpXwvKa",
  "key14": "5Bri2tRjgVmzWRYjHSbrrhBuRgQrKKMvZBKWfj1M7mo2m3jn7jVi48yVPCbbDENdyci5XH74UzPpJd4wo4Va7arF",
  "key15": "3GXCU9qtFa5sjkfZM3sZLZBpAFdoeAYrWDpARUFAw7zrAe6N4FZwgiz6SaqbZ2dhCSPXc1wooSRw4dUCEF2m1t4Z",
  "key16": "4rjZvk9HcttKQAVWRa766iz1kUK8UFgrPs2NNDZ3dutqxcUcpLx5hCvQv81TEyFimW9Un7kJFGT5GEeST5uNHHm9",
  "key17": "kki61a5WtLkJH8cfffjkyrPypTQDuxndXuRMTVXedcKVChsSkU8TuH78kGEWNywA1wr5bdXPC4sW7yWCGbFUQXp",
  "key18": "4wXXzdFPTEPdTF6FB2ntmdwnca3M2HiZUk7FzY1p9BVhcajByHk75zeynUgwU7GqVkDmXNa3WAu7Z7ZoGQzAqWSt",
  "key19": "ksUB54CPuy4DhDvU9UjhQPno2jX5H18wjj7P8vPKWdcghpshfn7TsDiCRrNv7uWYBUmc1STj2vDR4Gxhv179USX",
  "key20": "2VHXjVLKrEw8ryZBKgBKyygMW9ZNTiqYtU63jzGzWRCcTKGfzzqeBvQ26L2Xp1YsMLqJTPnSVYBy3FodW1FttPj5",
  "key21": "4aXn2eciSUNApUNPf83qjhzEeoaL1jKBUiobZBoQmLdPqjriBQVC6q2f3gTg9cHeRCLfnWYTWAP2m4kxPx6j6jJo",
  "key22": "3sbEyrHuhWbBjVeVggAk35mqXvsTF4RWEnto3mTYndptH9ScfdkpH66nn96XrZnBroYPYfPRqEst8y2fNvp6LTUU",
  "key23": "2Ew7FrXu43QKAar91XQutiSHj6gBkb5JWBQtrxfRVESj9YCof91ZbAoN13oVJw3cfKShVT7gt6iCyyjstTdJ4Ny",
  "key24": "5cvT4NrCWu73bz4cEdGgzLGvCuCzpX3eHQJ1xssawWYYJGaWZCshsyZGp7NMjpPe1zTgy7a5HJq5giqX6evaLmcw",
  "key25": "4q7B4BbghivTBo9VdjVetGV9KvXUrJvyU7A98JK7wpMszNgXcjDh2tKnCnQ3WoE6aQyTNaKrREPNa2FdK69f2ntQ",
  "key26": "4LNmZUkDy1GtNMxw6ywgTKhZni6oZEypJnLnLvkyvzcpegwsHC6Emxqij75eJdEx88Mb854zpk1nAMns7VmYyHiQ",
  "key27": "2VhxKC8ctnAjUuqHZDaZr1fGn1uYz3VjbfCV3irkixdJeMk8FeEMzx26PdQ6La6YhcfgkZaFD2JDGWT63pb7tvPv",
  "key28": "48CgKsAJ1k2ypqH13qCAzTciwcGzEMfoepnHAAAnCfdpGRcB8WifTPwXLshxfe2sYrt5ex5AiAph2rfpZMcnUPtP",
  "key29": "4wZCjbeucT6iQmcS8DU3gAbxN7tdtk9HDfF1Z9rErdLAUHX6Wp7WCVpdguEmbs7ZCs4NqVcGw4uzHF4CsgJMUwgK",
  "key30": "4FWJTjXmE7VLBoFu8WHjTVgGYBggUKN8dvwahTdySBn7JVuxHS9iy6WjZxDUaGZDHqhdZ73Fz48wDVu5rNZ2NDL2",
  "key31": "34G55Yd3QsCSyeMDGe1rEb6DgRCWwDwEr6wVh1HDT8piXMSqHbYXtXGpZbS5ZnDEaxtyDRKjf9muMrfrE3gP1m9m",
  "key32": "2VkmyyyB8GMkoXeaPi798HewLvKxyzeRKgs1LxWMG1k4QBMinNiCDiDGUsLCiU7HuuQKvVkxBFWJQBdHi5wDy4Tw",
  "key33": "5SWqXm9WiPE3hHtbvVRiacN1WWm1Pidbn3i9ScdZhH9szQghWEvLd2F8UMaqcpq4dWY1M7KefyBVvmEdYBawhADc"
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
