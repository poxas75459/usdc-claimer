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
    "JnkiS1m497fnbsEZmhpZbCuCRu2NDcGmGuadEk7Ge5pjxHNwRNgSRkoCEuEMYG7RJeYEuiZizfLA5yURaLbSvPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUMr4QoRar3cX3rbNhWwq2RT1c1iQ5wsdd6WqoPr2YquUTxg29gGNmjsuGT6aBRoRRrXCY7tedXZtzMyvvihD68",
  "key1": "mbyovzLqiSbDRJt7wMgNenuXzjiTweDbxwV5WfTAP68UpR1HWzd69AvUGC3sWD9mctkjUseJwGbHrkoAY55nuuJ",
  "key2": "4MVmN8FNxkngcW6VPNcd1KqNMSRXCPwd9PogSiSFMCZk9z8tra6QH2kgMzwHw4W7D3E7mZawCKg3J199MYtQExAK",
  "key3": "cQoBMHkDyLH9f4F1j3WsXyGJr2f1XXET4UFqXc4wMcAXcGDixUZJN76MMzdYZNAw9DBD14WTqrjCkFTNfNUSpU3",
  "key4": "2EAnNHkNoAxaHqHUqtuDDU5j9mctXx5J7UTBuiWMwMJVE8pKLuwaCA9SGNapNkLqpkK13rMpdSY6rKhvHAmUfCu4",
  "key5": "2io2JP1MMJWsg6ZG5fCdohmyHKUhZrhHsbBnTfRwWmWwo5BUzV7iKu2BXg1wyqYtJ2McBUfAgsHD1Jn2cXHoM912",
  "key6": "4JtqigUbWvX9NMwcyW5UzCydYJ14Rf5MUvBDK5CdxjFyFR4Kg3Ytkiyyxkny5gsUfdzUb6Esd4juhueqebmrrUrg",
  "key7": "S2X1cYdyuxchxcbZ9dRXQJmbbcDsvrJxe8EDW9AufCAu6N12uKVcUpHNKcfaiWHFkLDX8N6n8y22mkZFaBPvFrd",
  "key8": "2PYKDwHNidCN1qYuD6BBEqLFTCLr89SYcSgbKXgnmdPnvaGRKCSGbVtGye8KXCLkdPp6cMP2XwustdZrdE33XZoK",
  "key9": "5KNNhhHRuYdtFgxu6sxDLCH1U84XEgpxwWYfhSf7w2VDxX4CKSV1NBFudef3sMsWSoV7BkHzC9eogU2fdfZLycNT",
  "key10": "8JeGqmQhfrArV7EYhKCgNSB27YSCZ8dDiEDJxm4UJcUh1dAMjCV5a8Nx17YBeSBC4sUqtHFEoiwGjvqT9K7eF91",
  "key11": "2eRawwZCiFF4cwd8iS7VWy5VeeHWD9geeeivJECzoy7xpCN1h9To3fYJxf2hAXeJeDcAgJQ6Qr33j37vnKDs1wi7",
  "key12": "5Mnuba5jH7uBN4vZSpt6GmFuKhzBdhchn5iSumvG9WyEK5i3tadnBodXBmw2vCxxboFmy1M6TK8ckvbzvQbj1aDt",
  "key13": "pyS1xxXb9Qujkrqm2fko6KKYHw7pVMj3RyL2uxSLRiEU7GoNftW9sFigPbSge4eSBhjzHSiJeonYNf26hNL2hoN",
  "key14": "3ya1FCCcqLqufsjsPMjJcjMtEwZkxJubzezj6LqjYVrCzjRuP114EJkTerhQsbrn15RhcQLMrZgbLn2eFTk8Kfmx",
  "key15": "3xFX9mhwANV9HXr6BsaQ7f2ZXGJt7TKpd4DGbayq5GayWbTaxroHYb3RHt2Ub2fiZ5dX3UB8hzfDcty8DF3wLP8D",
  "key16": "4sZd5CuhXNkHL5WGC6LqxRXfmNMfi9AnepB9iqzLWkcr2sMKvAit9ddWzdeeN3SX7fh5qoLrzTgXgwy4AJbpPCL8",
  "key17": "Fj1WkL3WCiH9x7aN8x6PEGFePYYjmcGbMgkyjycjt5jkVLhfxmmpzDDJ3KXZmHJVgs4Z3YsRrHU1Utp3jwcQmxT",
  "key18": "23b1FcdkwQZcYrCgmxPXzD5dEEbckGcqs1j2ZFZx9cWJ7Qmqrh2yhHhRejGpmKVVL4asiqUYhbXRbN1UBRk8xNz5",
  "key19": "4WhCwSbUUhfE3F2KTr369dPwhrtrVa62XabpDw4Cpco1guZHB3S1z7iKmAarmyd4qqfU8qqoUmasiqTMLFN2ekFk",
  "key20": "5y3qpJuuNcdL3CumgGAmny7HrPHQ6gmTF6wm9FswrUAWe5it6NHKNbTcyPEwP2a7XpzXSA1p1SKP5TVeJk6wWuSE",
  "key21": "4YYxR5wEEmc299g5v9pZVh9TejUny3ivpRDaRRTWc97mS2Rq9J5Ya2dVbdbfwKX51uYzuZWPYbhqwAYx7qpF71hB",
  "key22": "2wqPyQowkvvpRYRDthJPPuT36ewP3DWvjRzNKfs2zo9gTERSKbQnfhGKcNqUaGGFUfJpZGUaevTpZbi6fNtL7cc",
  "key23": "4a6hAggwVCt558Xvp8KTZti4bVqsKWunU1q5BPhC6vUhmsmguLa3RCRpiVbKcit4fCM9RBTqKPJxshRW5BeFLZem",
  "key24": "39tEuMkdTudtWQ1zavL9dbGBEHMTUe6XC9ngqc31qvqCaNwwW9dYj2usXYh7sxwJopwRYdJCHGUU5DfmL1vKnK28",
  "key25": "3dMcLLeFx29T82Pp8bCH6giNRAVxEftUpbBSsc1cFqd6ZsJMfNrXrxqw4v6YpFMANtFc9QAfD5UcdL2xqYHA4fec",
  "key26": "28qJvvr67ugGta65Nyw5VgfLrqGengUVYu72JhgJ1TowK7LxNjVmSvXd57QBJWhPThU1YjhhfkpGka8tyoWNSD3U",
  "key27": "3WFK6NV8ZWJsjJZZqwzkNFVwapmD8mKgMaWsAKW4CQAgPLJqst4Qpnvb3hMZR2ehbLVmdmeojXdmJkir92Eraz1H",
  "key28": "5a9Wz297fzcsR568Syxg7wHbsXVQddewEeEcso9tZymaYcUctVabETNKxAU2ARebzEPApxCxDu3AP7LN8EhQQmML",
  "key29": "2qxJdwtvxvDX6bJKA5i6hsCXLhUySpeHohUtvH7fRjsSjmvbt6dBPcy4RuH8Zoefaho1TmVsWF92CDiFPeSzHVkN",
  "key30": "YDPDYEC5uo7KLQe5L3C8dkk9UwHHWEbx9YEBau5n1ctxzDBH9PtEUVajRgRYoHJ23stkrvaPE52SSkjUBpZQ5oo",
  "key31": "2ZqEpp68EtkEbq3rSqwrURf9DUPeWB1nQUoHL1gKkE1g1AsdDiQbKWu1ifqHrpCYEiRR7oW7EDmoh1cUUj9bT6nK",
  "key32": "2N6kkZPmnV1TUp5Z5tn57ZgdR82UpHGCZTJ2pAWS3DT2v6H2nn7JqSFRWD8zcATcZcr6G4vjFt2ChiWcxHbzLQwU",
  "key33": "4CWZLxL2utECwg2nYvJG4pR6kkg66nbpMF1LcsgMqgXRHMqpwHq9yX8f27ZnjvM2jFtCkgZudNUTyg3xvWsSUPSd",
  "key34": "4UNcuPPrRSjjGxNHBHe7YkwkEVazyEkPXFUgfmajWhvuPc2fmQ91JW2KRr8Kq3SaL22eGYvUTSqYYRGWyFkUxAM9",
  "key35": "3E3BWbbEsBpyeXLxAJkSWuzQnc7ucrFscqZ7ydbJpGg2HHyXPjhaAXET9NirQhFcxW8TjKA5tjsWrRkwfr5ZjaTq"
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
