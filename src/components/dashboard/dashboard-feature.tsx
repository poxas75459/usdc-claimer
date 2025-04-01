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
    "hcLjrRSVFGwuskWL1hLnDJFtvGWdfUbAu7vdRKnVctRpAgXW5fws6J9DGZ5EMuYAdsbFg2JGWdjcwy1TKDNsT3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AAxnRLWjAepB4VVPKUnxPgZf8ugqAoq62ccMhXYP5wVYTVBLLyawP1m4vrHbQtNkdj8iAipJcML5mFrvj1WYr2e",
  "key1": "66C2gdUcYxtiETPF54UPpndhFodo5z2GfrzqLModyvY3RGVWg1RwVxzP6QqhL9XnestF7c6ZKPKDA2sV3ZgdCkWn",
  "key2": "5dFT7qUur3uXFDqPrdZk8si9BE4r6LbLBbCH1uFGXcbfsFwTzRwexusmT7SQSqZkpujgPTDvTAFRh89aXTnuzyHw",
  "key3": "UN5Q6ziy87MDzjttRxXKhR4dMHHyDL6tbby2uGPxUdj9kUJMRWs2YxDAZKMi3ce2q8ik59sBgwbDTguS1QuyFxA",
  "key4": "5zrqsDoDiCic9CsrdQw4MTdY2gLXzzjC1JkDrrjgx2SiXu9SVVXweqZj2axhYzVUXTjJtCfcCZZ1bUKdRiZJf6fu",
  "key5": "2cV4ohSfd6UvzufxbmxoS3FkCePVNPyYuKqFpjSzLDybz6dW77N31GdHoYJvSfGx2ShRTPvNdXntVm5uqwpyGCvo",
  "key6": "5muH7Hruj71P1ZZkGkRrRpPxZrU16PhVc7CPPDRr7mzamYupNqPcqFwmYD6jvJWH9sB4tJS8Abi6MXWaa5gSYaVX",
  "key7": "3wxdS2Ge2KPEw1Z8WCyXnJuAXFf9LgpS8uv35L9orzkKLgF7izzjH14Tt6CufKWx7p7nRQcZLCvzfkqGgoCD2ZMg",
  "key8": "41xcxVtSEdo9pj6UaTUnNyYLWE2vWLH6h8KeYPGAfzZXQ4crgQLZtjz7ormNxBgmEEtGDBr3FGQBP4yqbgNvA79v",
  "key9": "BPGghw32cxXFZSXazu8aBsin4opuDpDVyGf3WFqgDx7Curx7F8eqPNsZQVACKsS96VyvXxkyYbJn3tJZhjRoWAj",
  "key10": "37yf4TzJVSknWjvZLTLe4jL2HS2L1EebLr6jvY5NNEfCjtygQ9tC5bCftyYjqERoPPPU3fjoH8gcLULguAwHyJiR",
  "key11": "AbNkDV3vkAHHfF7s7FvQa2oeV2CLAaWXASXju7H8srLBH6Eof7GUKkyBbbcPh2qrQAvC44F1VunW9sZ81LYyz3f",
  "key12": "5Pfd9HLQtoyqcifmsrKzSGnSfJ6icwujecANcGntncBnUq7PpZxsAm5s1A6ntK6ZR5YpSTyHFDUMvTCNZ3La2t6N",
  "key13": "akmUzdnL3nd32gewkUuAj1jNVrHYWpeYUfiFiP7S94c913K1rNXNYXPQaDGPrP917Zw8VksG7Q8W3rm8EWkkqt8",
  "key14": "4VdvepfwLjfBESm8RYFNM39HZXSAU9cYqf2mvHr6HYjVSvJHNYG9B6xAJ3qjc8U9GrfKc58Ro1ELvy2YTb9pBs82",
  "key15": "JQynz3zmf5eBVc1zXmhtaUEtLTUmXFi8YK2Sm5DZwXcBCqS1Qvi3igNJK2jCuAY9XMmVfeVPe24v27NndNQvgtG",
  "key16": "39d6NQrHvbaUirk9XCtoRM7uirSpA54Nkmyao4BLErRUNiXncd4FGJkHn4nvWQrxTxHV6sAfWYYAx93MNWcxLj4p",
  "key17": "2jLbu2pNz3rTtgFY1XQAj7FfKHMEjLdNUDDiqbPoXYxUx9eR2ZRxUhZvcKHJrYh1XqbfrBrdTbXbHtUpBNPbYoqi",
  "key18": "2ABhj5k96kGa65cLB4MSpmHEXNjtD1Rq5gqMHudQ8TrHsfStqSdRqBdKkDS7vPW4b5V5osR2w574e6qxmpA1DDJC",
  "key19": "5jMbkzdxFCVXtYtkQKdgYue34c7uCYBLZ3Bz3q6nnnhvN2LEf6AEC5ZNt3vs4E1pvD3fSBhkzcbTppRzQVmRN8tn",
  "key20": "4HJ7HN5jW7xtuEetKRGo6KDkrtJA92qq11jaZf3tKZabe1pV1RSmzegDQL2n6DcEwv6qgTBLtu9aXDNaAQLpzGLv",
  "key21": "Eyiz6q1YpjfhWf1zww9nusdYNR5GFMUDYHS5XAGvZH54dDhFaj3nrX5NvBrpQt6D4qK9VZYfXjBTRUcARFsqjMd",
  "key22": "4TbXhqNuGvuQKu9yD3NnWqfCPuhZXvWkdbctLqnd3XZCBKr7d5gWyyNo2vVwXXRfmYAXiF1y9q3ny8yeomUKoX32",
  "key23": "264HjtKkhVi3qVUbE6Vki4TY4PiKWArdrjrVWjkQX5GnZS6TgUFZ1jf4oF8fQDeevnmRkd5qekaRt25ZVXEx3K4V",
  "key24": "4A7bfZHccUVmahSKyzzZBNwsGtM2dbjAcAhMzqWio4kQgpNzQb5fQFvgxjSUyr9Dfg9E7LAV1TULyLVe9quFZgfq",
  "key25": "4rnN3b8xECh79xsNhZwRofL5Zxrt4mY9PaGQauvSfTVSpsWALDevqPxB1AFCCpHZbNjJKQXrD3REY5dncaeqLfEV",
  "key26": "meBXgZGT75Gf3BrAgnquY2c3KcZq5R4bRdH1hutJpbFPE8AojAQuUojTt678SSracH9GUDh5tdDRiRKPjX2rg74",
  "key27": "4Qm5w9do2KWYGLP7RDKn2MKxit43y9AEv4piDQxxomCq76NZZBDYaf2kfWfBA9RULQ6iPgd6KRVuKZaLP4sh7bER",
  "key28": "3fWwR6vCbauboBw5RX63p9AHCwvgdg4KqFcSnjwMbnHzcoEWoHCsH5btv5DFpJqYqH9JF7rMKi4s9pQYStXnYVsv",
  "key29": "44j1ruEBcNyk9nAKc2RSWEiETFDECe2JaZLpx26HyhLfEmWwCgL9i3kLSnqQLjuS9uVogygjYcSWuJc4dyqFoMa",
  "key30": "4C3mtaksgyC5NCAb4rkibPwrFmsgEnXrR4vviyhuURKCJzGqmGmJrrwNziRij1SyRW1sVNYk5Y6kJbnHb75W1Tua",
  "key31": "2Pbjbinrht69n3NbDMxSsXFyySRgZUFQBggPhZgTq22jvdG95Go3y91dZ7GSsK1d3SwqhvgsUNEA8PfpGMcfSyfG",
  "key32": "Wfs9cXsNMDLG4LAgAZvCg2Syrtj59iQftoKaZEDnJV1QNZvvUm6e1mjcZ18ecgvm2VciVCKvw9rXYJY554avYvc",
  "key33": "4wXgLDdctMEm4qASipniJu1m7rCjT813mkMHqsjSXT45s3eDxMKMmMY4vKsGZcxASm2AVqsKwUCVdXs9JoMhEKJK",
  "key34": "33S5koPnAWcJ1SSbh4rSZMgeraRrbEj1Cbvz9jN4nzMFcvPY4hScDX587FNQErA8mbccEn2GHnKsJEd4Kyhx1HJg",
  "key35": "4pRt8Waq3NmaLdZPCsnBdLKRXZxZrzLo2Srksu9BqZtf7q91LH8w2vdPNwFbdW1ky9oT34TzuEEd4DZgi2vVYrFp",
  "key36": "5eg78ntbgYdKxUsePk2fxU2MmrCfoJRX3tHjzidWg9aAif23aAcXGgwURPZocjmWxrkXCiX7J4r2oq2bgSkYTJNN",
  "key37": "MqazNHkyfBdaHTm3gFoPstG7apMZRQxRC4wYHjFcxURyZQK9L2Hh47K1cq78DkXwW29MtnCpNBQvsi9tChFWDeq",
  "key38": "5uSi8QwujDj5sCiCADY8SQzKDXWDyNQv92xM3hnnqNJTuoPH2Abk1VWiA9U8AUhUbMWnYKfx1BXPYBRYWhTxHynp"
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
