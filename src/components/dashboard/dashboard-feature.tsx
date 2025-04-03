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
    "5BZgoP1gDXYLWJzotxT7XDhfoSxDzWDBq7SEod1BskvRmAr6zdPWwERaKXWgUtVsqm8Wi9jD63ZLqy4enhtXUiXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3moP2wU93AXGupgiG7xeKUnr44k3ecsPmNMxnXBtQZ9HDXQVM6X5Twnx86a5JMzrxz14A4ih57Wf3GtN13UVsydh",
  "key1": "4jUjL5EvnVgWrCJMB2zeF8NJNyMBwCeSrPW2zbcZAWfdYya21Rq1nmR5PHbQG1WnUjdNjXNxRP3PmzbuTtjcvXmj",
  "key2": "2c1GbxwUJ7R6S5x3R4HzHkNXdfxTmoreJgko6cRPUq5267CYxFWPNiVi194Kuzoiss5EdFZYAHVuWCnRm6G8wKWE",
  "key3": "aCeCVKtqcXWdL8pCDYmjEXxt3WDxhheLxhJxxvzGgx8zd5CX9qntZ4AZgvvsQGuoKfdnoTVLGiC6qRm6QnXFZSm",
  "key4": "2eXvmJwLu5y6rwaLxsAVSMGnJuyGEfnyYCsy936G6xn2HEkcnmf5BdDKrHsZ7WB5QxmoWyvoggL9uM9HX3GqJm4c",
  "key5": "21LXWy19ELXG37HGBTvH8B9dkFMKBi8VWHpiWGgUZkqbvzUNfsrhJJeZyaeDwDAKLHhLmaYGnLUXHdMMyXxQ7Mq7",
  "key6": "2u2RuTvyfWEghciXhRxRhtvKHNJ97HwS8qVy6YXvxQwRnDvsmXXdUoT4rU5tSutQT9gQps7N8oSk7LtFEnf4mp3U",
  "key7": "2wTx5tbEwcDD4YNMMicKuYeZb2Qtt4XjEwCm7xoALzQjxKGFrxvLeYnaCEurtyvzAZmu7qAUoUAg83PivMJdNRRX",
  "key8": "da4tczmMzTR5YmMf3JGMwdLwCmj1ACFDFyJXS5P7mkTTcoMK9cPERmcvvJeijhq9tP1UwM8rUHZ6LhzsBb1AQxv",
  "key9": "29fUkaNBFhe6NvCopkeFtuy3xN37AW5GNU2sK1tNKuQ9wg2Ameg1Z52gEwVzGExynUUviyg1vmopdwEYb1Vnic47",
  "key10": "8gnnxPxNx2W2tBj1Lu4aL7w64ks9Un9iaan2iANjdPPcDHqVmQWyhDpEN72hP31sZZS4tXF2KkYUcS64apK12LN",
  "key11": "RJt2DAZnZNMYVuu8LEg98BCg9upwoohQcErLTpZgi8E6Qdy1XXqp1bR4RjSYBxQsG4W4mavnSRwhtacdyCh5D8A",
  "key12": "3s2MAbtJ4GzzXCDopJLDC88zMNNqPmAEaJR3ZAhLtTQwDmmSYyv6VHcx1u6DFn2aJjrhQgQ9fiVxe263wtKsmiXp",
  "key13": "3Eb6uKY3WCgNX55eTEbJgnibDrWSD4CWYXd31LoVBswpM5gemYdp7BLD3DS4z2ETwi3TgmjLp9jzVF3w2oErkrJy",
  "key14": "3XWEEwcsmz6NPnemjDxv7Mr5vSFWwRrykGCqjhPrK3BBMP1dPwwFEAhWz3uSfjoVdx1xYzVP2L4Y1QseotBMdMxi",
  "key15": "5wyC65es8zm9rMVFLo7BKmFpF2Qjq9BawoRuxhQJZHzN5mp4MKPYMnzL5axZUrbdL2Gk2nJnCFnEjb68df3bovtx",
  "key16": "qqB8dgB7tH7W2RUrWxQ1JDxv97RtW8eCq7PoQD49aJwMjpAspa4uJTGxME76gx5ERRUbNPHoNEUtWznbx5JMsm9",
  "key17": "23SC4e9xDFJi2FhGYPTxuRJEyFygLcRux2v5UNexHiatVrypojvdHQqC8neG3AuBNQ3VyLsYbpGfKJcG51nZCQGn",
  "key18": "2tUxiFx1yMZif955Kchb54idjo86awXnYfkoFmJbpmR6JFaCQerLjShb3uByaFZsEmkBrN79VkfQfpAyKhRVCF4b",
  "key19": "4JAdb6jV36bkcwUcz9npoUyVNm99MBxy8iYVMAdgdzt4EHgjxAAms2iH9aJZ7DQ4zAG8bXdA7422GaBgbMNytgcG",
  "key20": "2u387qwijXsHhcq2A8HcdFCMuH5KniZMTHo9Cxxeoe4Bv66UrW3h2GDdgfNNxZsGwEYTkPkMHNpLo5pMrSXvcjFo",
  "key21": "4MaLAN9JDTMGRH1EM7NF2T743MRM5bCpqVksxiKP4NVNeBgBgyVcaoQSFUuVDyzQF7U7GHMi6Z3Vvy2oWKMq8PNF",
  "key22": "2Co1eVq1fjk5RUj4jEnRnskRaYCLxQkNjSPm11kvPmfmN8aeqNh9h2B6u5DxSyM9afNweCAgtptR6RaSJH6kF6Jf",
  "key23": "3gMCUVKuuLKPLqpE6St1rigHP87JMx9ZZvLfiwNoLBs8N9vHmFhkS3NyhzdZG97P2Q4FMaASSwuEDGyrxRusEzBv",
  "key24": "4Uyu5Z87T1gh7gdUKazRzwK4YkZVqaE9Pd5Hu75L24w17NHh61rcp1FxhjewRWHAzWiMfb4TgCGrmzBgCi8BMVF5",
  "key25": "57C4t3gSpxDa59E2XZgm89XD2zuoL35EbyQEVTRgsqMoCFfA1mQYdMsbp1xCcY3Rfr7owrHkn46Q5cTtDGbQYYHh",
  "key26": "5TQapRQD8eJcmH7zhpAXzezohGv1S7EL5AhrySfet339myemL2F9HRs7zifKxhpjDkxtU4mu6VAbNgMsoKujqTVH",
  "key27": "2EXTqyEw1KNz9ggGoGEp69FGamgfY9fgosWpqKWjam9LDEmBvjWfyggjzGZs6HQjgP6yZVigDVeMAraJEBaoL38v",
  "key28": "2VoT7vMLx1p73MjNnhikdm9mRZPxEHGTq9roWrrJa2HtzF2K3JTJ8sZrxfTr2CpN7P7MWvkKCrZyweeMG5zohpJ3",
  "key29": "2KyMZMSZ33AiWzd9kJSYVh5WmbRjr2AtErgZKfgef9LQECoTn5zimYGUXgPweX8HmFRRwPnpVpBL75JccbBJ5RF3",
  "key30": "5Mkk3kaEQr9KG7zCMS9fYXzkALmzpNZLZrjrz4ceM5wt9jgZRFKMJva9TAqAkdhEC7cw9tNXxxGjcpZRaTL2JdSi",
  "key31": "C5w5Y7cSnpTrSavCMnkx3eamtrkNwHZNeTFvmnHEcrTzDccdB13WBRnsne9D2YhoULWYym4DYtUf99AoBed8HGp",
  "key32": "2NwWmDtTz7rhB2Le9jdeCWccL7kv5nK1fqfn2foeZHBLr3hDpNtX376VfeHfgxiPit7CcK9zHp2hdHPUgXhf9PDL",
  "key33": "2jYnUUUrErrvmJjP41sUYywzWnKuPscwo9uA71M782YvjpaRjHR2ZyaKCReZUX73x45AARfVs6YcvR2AiwoCuDHH",
  "key34": "yrZHKLTRCdPVKV2FW3Sb8ES1De4Z5wQEb9gMyNpqLFM7wZ5UdHKc4orWosd7Xk5WCndyTgGuWav6JJqYKzDFEMZ",
  "key35": "4L8fSb26HRS9GCprPuEDqP66MRsHdQ1RQvhe8fhn4vje6PoVShhEMKEKQo4t4H9gekNH4jydeiQMYTnc17MhvbWe"
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
