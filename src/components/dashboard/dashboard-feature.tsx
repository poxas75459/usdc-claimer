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
    "uoKbKykZ9j4cVoFX2jnecfC62nu3J6uMo9vgQ9VRnCoRWT99xmfspS63WrSBivDcweeMiHNF5VYCjcuro1QPSF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abUvYRDbzejnKu3UBE8VBo2rbjtoJFxPKTVxjotsiGchPTiqZBrtmKZ7j29EtVaxjzUrSDTN7LrwbtrVjawgxzn",
  "key1": "4RE6Lu37bAAmiuw5QYgLvCkb3r7mvDRwViqii5zZEn6VP3rQPz9khCUCS6VMebWqSU8mEJeG6EiVSPpqkYJHuzb5",
  "key2": "2KtdFYVDZvC8udGh7Mdi3Kn9aEWPx4imztQfiYXLbNNSkfa2v2oHaa8n8Ubnr9JPUHJRVW5vJtSAXN8h6guiXZYF",
  "key3": "56vaey1RnGyDg468Wym6JyVrr79BnPfTNPfYnbbipu4Cne1SMcdCkG4XsYXYdcBuZwJNhBeorjgvLHR3cbJx1r62",
  "key4": "2tFseMiQhwUH5oMWUYgbpzpGwwnkGGFpgn8TubjHWFjTP4pxAXaonDgjbAfsHEUjMP9tEheqkackTCd95KL3NRRU",
  "key5": "29mDJSCqqkU6DWsbuTxCb9duWyoedhHPUN1mdSKmWkybw9LJCc5jhjEABcWCcwB8V3WGY7fUdVTiLKjuWx9x8VjU",
  "key6": "4PqsLZxq8rHMGZacmj5ehmA66nozrCnc9aLX1bgEYW3WLHbo9TRXaLx1UkZhaF7b5j2hAv1oCFMw8TzVpatVcqNZ",
  "key7": "44vrEZymwXyy8F9u3rbMJNDQzHg43LYzHMcnRVkZTiScpRXYzLMmeXmT38nEQY9YP1YrBgBWo2as61ortRaUwzQq",
  "key8": "3RejMoNtg5JzQC6MxvuNVCjqQYVwyAXt5cwHdwhTgenXoY8DG79kKvdCwNRRmr5j43D43T8HAPqJCu5sS93xmRpj",
  "key9": "R5YqeAQhP1PuAJ27s2MfENaYAioQY21AGeQ85pakT23Se5RTsMkz62BowpRQCUTyqv7tZS4KUHjGNXJLv7rR3kE",
  "key10": "5WXzdGZTMH4Pxs8Wg6fMZu46ecGSxWTYCrGyPaT1QF6dhr6nGqMzq1NFBiwnPa8bhwHps88asgA8zoPYiyVRKnNP",
  "key11": "545Ec3WFNH2YvmQqyKhsFjyxmSiGGLqgYsriuS3ykFitSbyFKubuXLt2hCJu1bSoKoCG2ShTqrfsd4AA4UiKY3LT",
  "key12": "5Rj3iVEdexXn5SwXVPyhMyyzLdhFSsyVXDzgQhMGAjtCXWmYUadh841iDsnvycAwiP4eSiDrnrbUtYx7nHyLhzkh",
  "key13": "5EsjjJUjNcWGZm2bFieeLBLva3J7zh1wnfjh1EppXmdbjrL5Va46J5h8gYzQx5bEqh4T8ARfqnnYympK636f5XL7",
  "key14": "31cHFWK77X1MvKhqToNKySyL53BSs3uuc7ihqgLejCR2tFhohbtQbXs3PJ5yuk2rVKx3DcpwDW9jYfW1NdNR6o8M",
  "key15": "2kSDwZhe76CYZKzP4aSdKuLzPBqPjwD8m8a7qBZzemt2UrajAFu5iqEfXX2RreBJ7sUhFcfb7xKuvxm9w9yorPsW",
  "key16": "26q34Pcqt8ZTRUMV2CqfjBLcdua8ZduQbca7C9KyQkTXQE5wfbScYYhmAbjMX73vjy5NyGmsFpS3QAP6wRuBLz1n",
  "key17": "63shzGG9thYQykfgv1aUEeBLo6ZFx7yFvbRy1RZxmxRJJBuACHu3vKvBjrG94CgY4L22K6NwBTgfBrnAac5qRNdj",
  "key18": "41cZXL3v9zbA8Lj3krKkhrd8tS5nhHXh2wAQ55nyLDENVgGWEXBddPe7ceJeWrv5QSCsXeYqrCEMrza4XqUZaE8C",
  "key19": "V7JcL6kMpMeKuNbAqypNgTcmwrrVYqk3gqhVhrVmAkhPBA85MchVbB3pD49XsK78QZzsVawXdEzRLQTvopY8f3v",
  "key20": "5WWrMqFcvscHVYubE2NEtihEHr9WChtEpcstuqJFZ5uYDzhmjqJoqscRDFfwB4APT6pite2UfCyHPswP7iD62eJQ",
  "key21": "2KjMhv8wGXg7bTpCaVN1f6DKAETJXZuYpzmBSB7NZKcSvo1VRVWF3ajq2xkB87RrBb9KMD9p9w3x7oABfbfragma",
  "key22": "5PWwEsmN4hbCrPT9vEW4tKUFMmwPte64jixZDC7mVQUa4BoknoS6ihhJGFzayy4pWvo7v4vGm8nQQk5QL5XDuAg4",
  "key23": "rA7fbHxXKGYwRF7av37YmSSuw2xU7yu4W3yEfc9LcJNXwskG9zqrPR7Q7WW3StuyoaAN3fTj1WjxvTgxBmZcMVZ",
  "key24": "2DS3BLD8xzNMvbNiFhnG6dnhtgBLcxT4LRYr3v1DVEzK7P3Zg76YRaZ8i5Rhdc2xVYBCWvaUtGRyq23SghLYnTko",
  "key25": "nBdt8zXY4cgqK67MKptzcEdxrTy5GrP3RVrgNCs9AMNG8r2M26ANyEA53HjjjB95hVa7CfcnqfQMjRUj6YFMtmx",
  "key26": "4NiS9RGeWp48mWpz48rN7RHhv3gVo7SJTQ7B5KH2jetEzTW1M21s6wMWZWVShQyBHJmZcJ6dbma36d7z8UCbW6qf",
  "key27": "2jmK81udtEf7cSZ1AdrHRc3xj7Xo9fy8712PJUw4RSg1K4r92SU5Ypyiqmi3EQUBGc9X6uQmWp4Bk7acjoSfbDnc",
  "key28": "5Hgj1ZfoiY8UcpcXWXnbzrVfyBhqRWnEx77skFxEzXpHwraSgFaibsVbUvUWbDYVWXWfktj8GzTVx2sGyGQ6JuiP",
  "key29": "3vSp3cPgJurSyQvLDwUmCbZsoXuHcndCX7nTQN356G4AHW491NGhjY2d9cEGquGRT5RGUZGot51nzAdFwV1hP4ij",
  "key30": "57W3fjUqhcLFkU2P3X2czGAykd1dmJ7Vr9tatC2wzYypXmPvPmdowiqCbRDHgET8jgNgCj89y8qqUcY492tcynwV",
  "key31": "5zZpxpkRqxYfqLXMueNyjVxJ92XhL3GWrBQasBmTwakCSPL2URvnhoxXAffLvC9vAYm9K2uqb997GUjAZyKQbKa2"
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
