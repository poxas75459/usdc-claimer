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
    "4ftSCaGknVnsFry6oCacGpSZYMNLkn14M6sUUfmkqWUd8eAYfJsH7TEB8WX65qV36irePEC2fmhDEGy81JrygiDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5znyP9VwPejgYbcuYi6EPoVbLvvasc7a4hHD5jWw3er3z6xy4JxwnWTrM91Uw6pRDLAbuyW2eiYaodJNX7zqPRtm",
  "key1": "4zk4rRUYpDcLi2uRTWA57E1fKLHvahbzqZBeUKud74DP6ujJVqz73EcKzidRtGKQcj8LJsWtdpWJoZsZg5rahUsc",
  "key2": "37Dzd5k3HiyJKPSxarKarXjftvySJMQUn2eJkeqzVuJL3z5TPZJyXaa87JKBfwUwiyVgasc8ZBxeiEbgczEWBCV1",
  "key3": "3ojVEycmotD9ZJzybyanvBZLKv4vggzbfsyKLXtBKNhieQPusqoLfBVtK6ZLp5GMZ2D1J5xLoAUyNjUEKsiV6P87",
  "key4": "fVg1hBuFGE376nrA5ji2ZpvUy4HwVpEkUFYp4f8GYJ7DjoFqrkJH5fMF7DSfFwaWPY8jgWE5zPCdNQAkNKAmevr",
  "key5": "3ac5BHQWCZYFoVSNXYP41vtCnDnUpGdWWcnBAmE1w6QZfipvXtmoMMcQgcjgNsxVs8UtoFJpygHZp1uiD2yjJvQ9",
  "key6": "2X34S1k2QGXaMdjfaBae9nCW361nzxWbgovKtBW6B4VhdS8SwgbKAfK8qAK9wpGz22GFDbnNkddBW6EWGHPqgSaL",
  "key7": "3QkAdkYTqUQXmDrD8GhrBxq8ZTaD48nFDfL8qX8HaRZ2NJof3u3n1DsErcLS9rdJZ41tAh5ah5enmvQcYMWCFwBu",
  "key8": "gseu4F2h9L6YHePiZk8x8cVouGL7mzW8rzxgVMUexvMLUre9Q2DPJQ8o7rNx9mrLDCpq8pCUwfnZzfWbhgovdXo",
  "key9": "45fmgiMm5ijrjZ5rzFonAAJgXVnoor124QDhEUPtTx3VfFrPkTsffmozDSFvY7Snju2HwarYhGTbBo18H7qf4rZT",
  "key10": "2Xu8CVCiW3su22VXCfhWJNrEWm3dvz4v3EKe1Q662YbFJ9gyLTHw27M4QVqMZmebzGLfaXLk7MTCfsmWpBEPeKMF",
  "key11": "4AHB2tUpnaybhicCFNk1ZEd2vcgHSG6zAMmHzQCkDaSdMPvRrhTjN7CPgoNXtXw89p6Wpt2hTN3ioDkderraKLSB",
  "key12": "RwKJMgAWUuqKWL4xDgpkuZDRhn1gtiEgL5geghvQ6KwoXrNtkWg7HRwrWGGs9XWbhp5U17cjGgJpoZyvQFbAWY9",
  "key13": "5XfrKMeKTRxZdHQoYci6sViFRQHd7zBQyTBqyNieqiTGNRcrms85kFMzkLdiUG1zJeTDbLWy75U919sFZGgdaQ5a",
  "key14": "3J9S12Cu8HCmrqTt5GFjCpbUSNATrz6fotiPbW8t4DNwoQin9TCKkwJ6KzZTdRQjBepGwjx4aJ4YcHpKobkkBrqJ",
  "key15": "C27ihuReHqXoDAvk2AJLUFX95GX4AnRYSMWNWoR3oqq8ijL8Qwj7WGH9eYw17qYYe1uFGRCqGNGCRe9YhDCvsoR",
  "key16": "b8oPC4vik4t1ZWXLaa1efSnanNRfhGmhq2M6APzs2H53xiaUVwjHDS9sFqZea3gC32NjAbiKbnbNgP7H7UZVpmG",
  "key17": "2hbPaAqvCZe9ifq3a3nVV7ttLywhXsSRB6cQg5pmpMqASbdMTJKxyZew8v6NtrS1uEPaRPKopqCx9fSQy4Hfqybp",
  "key18": "2U25FVoLkUNPK85vUtsEZBRghE5asU2oKuN8LdvHKb1iLk2DYXaG6rkCibCTndYqrveTJtQi5icLfdPJNG6KfkQQ",
  "key19": "4ieJxXbKCKTcMJh8NP9bXHERztzW6fsKUECTXzHdoUuuV3gx7QuTeWFGynSPabD3YgJa4So83F81EwykmseD5XrM",
  "key20": "3iM7hU8YyxbtHDnmH6qNpMqMsu8P5B4g8HaHx6WSHDmoa97DnWSk4y8xpbUhGQ2dEu86mv2oPHYeZUmwTuc54wfN",
  "key21": "33trqZQiwFRpZdEq42Q5UmVw4T6WDjrxCoK96B7dv1XjxFSnRuiPUbKxrwwKgXA4jtm47eNDXa8FcxLNYt3SgML7",
  "key22": "2BZbF3AJKjsUa57DgsrWUGP4ctgm667MByVG6PY5pnNkBAK2puz6aD7vE9AkfMieC1B7KtDcxdyh4srStRQVUAnW",
  "key23": "49rsw1H221KgwuJNQYe18KgVkhx6cUdC2DeegEDyc82GsZcRpwvqVekDMrX8tyfTghvsqGvmy6cuoRUmUcZk4Fzb",
  "key24": "5k8gSKfpPTgKCAjCU9XikgqcRgXNV6sHo21VEoxon2aK1MGkmJEvg1HKb4BxTa4UuvJktTCSqm48eJtfPzXEQA8L",
  "key25": "3vjetE5t27jiaZUbVcfxfvFfHt3feKfDwKfmfsc7XWYySsFjvdwXsUczm4ZUep8aNuYdRHA8psHaLAr9BBgymciK",
  "key26": "JBRbKyuracsv55Tobsw6tQRKF6mh8wxGpokab3jba5YtvU8Uo2qNUbjmSoQRyWkCvbrNhu7EnuYx3hAjrMSyRbb",
  "key27": "3LJg5ggqbTpiqVZEB4sLCabDbbnNjVnkJUXPeFe8PEWrBRaAgry8Cyo75uPPkzVSfUGZhBBd756WRcJG9mn63Bf9",
  "key28": "gw9FHgsUFavU9wDCr3HvD39orb5VkaaDB2H7kUZUR784SLZN6PNzNJC7wimgYnJyDZkHJ9gLTb194uYKJ9DHgzB",
  "key29": "4MyF3rV3TtzSacgRLS6KbLWEz4J8dhJ6zT5RkZZbQ9X1Ms8rwrPwfmYYevnqJfEam39riEQ3K2CuTJH1g5WbDtqe",
  "key30": "2DHCQHruJxaBm4EUpgeE57eX1mFZfBUqedGdsFWoXWZcAWvW8eiwSeWwB3M8jYURUDhpkoSAr4b9rFJyQVVt5bzL",
  "key31": "keSCC8MTUchKfUezjQt4py3dpDjdGCQ8hKgygWZsuvX9BSkbKDM4wGBGDiwA1rh6vF8qJVDPKKnBGuoAboM56R1",
  "key32": "5AbBW1u16ni8yaeLiGjLSFhuSV2rTXtFxTNYuaY4CMnLvS9UadbekzjoSEM95SXdTHtks4WdyzPqCakof7jMfRez",
  "key33": "5EAw84yvjnKT9zVRHQ9bn211F3rCGyuEV5HbV36Z96z4a8rCmNu1U8Z8KUt3fCpk3YKzJ9MycnY3EugwiSfFJP7e",
  "key34": "3CT5Vo7NCJpYDsnJ5YXgLaDUZ63CxSCWZ4Hh62GGBFXKJw5PNfFQR93iFkcxu2FwoHWwdpgzQWXpf7fs6yH2Mcc9",
  "key35": "CVD14Zw4DUgrVJPc5e93msEnaak3gW7HHYtf6isU1NyqKKGu7KM9FWeJF8QZto4TBZgFMdfAjz3LEABFaVKBKLx"
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
