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
    "xCpGtgGmQ5B8wWLF2KoodWxTQ5ogx8LoTpwB2tNazw2xQv13zpAE1WZen2Eq8taHzgMkDhPxUXPnMDdun5SnX5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyAfYwbhGb32kgT5tzFDuGd9m5N3HvZUsPwSyYQTUKsPaJmE83YhwjJqSkCHDPruQNB7rJ5tyxX1YQtW5h4bKjm",
  "key1": "bm73MoLeUQ3ePpdqGAANc6pnqkAeYd981wpxsrJwKiTzYe7khQvXhhxJH71fDX7TcwKCVgQPrRBey5WX6i2wQTA",
  "key2": "3ox5PCruVf2r83HAjkTSmsng99jNgfABwD9tRjtwKXDpRqq5QMPo5y23seCa8n62oHz4NGpxPreV4GTqmcRWQ3zV",
  "key3": "4g3dfKzykpsKLJpbQDTMc3hJkktaEQUfhWJuRu7KzSqUebBSKvm1eTtXeieR4HXAQmF7SYxBqMhYdUuVFro12TKm",
  "key4": "2nq4R3ok79MMCw1Sew9y5625wVGJFjQMxxKqhmhYXPRUS3gKwsCvmRyEvTDFtkTucDFJK6FLFq8UK34WMov6y6jT",
  "key5": "45jbjBPj6eNDNs1zxQL4NASuJdBesj3xSkKKieGZYdgYRfj1wsLKEL7w4H2BVCdVVbHfHxvW9XowNmfU1WYxrum9",
  "key6": "2KAUDw9eZSbcUXmHp1pbYqM3ZHRB4oMFtd6VoDEym7mvy3H11Chq8k4MGe9D4oyj5DRayPunBstSJZJrg2AVViR3",
  "key7": "3Sq7J9a5wEKPr5UhAX5YgjCErN9iz6quuPQA6g7BHcGhH8tkoyHKXt9XAh17w6yKiuRxRXV9AGYPjMjaB3PCTbFo",
  "key8": "3HFoAD84JgnG2cazVfZ9r5Wd87iqgcvGCqBryJRyrJsqHec5Nbd4MjzECQc1Khk71y2TvtNmjhEXUVAAjLKzi3S5",
  "key9": "2QcB2TUvq3gFAQUyBrJ3w1WtkDEm5UASV8R8M2aLqE7Hr88fQsf5bXAhUnbZNFzujSKCSM7fWc9dXi3EQAnmMss7",
  "key10": "3X3aB79Wx2BabRAQjHnBaMJXK16iMBUD9sqPeFosdui8HdPGFQemPUheooAQhrR1vtPoBdXcAr9MehZGNMJnAzHS",
  "key11": "FnK9SxG8FdBrdP6wky1AYMPnCRqzXZMchwUsh3bPwsiybbTQUWFty9XwL3UMLv1UF3TuJvsthrV4NXH2J3UG7TJ",
  "key12": "3TLP4mbCmx3CZQA6ZWciaFFph9Lcf9hjiUc5ehqHPdtwYbKkSQbDAKrGdJQjS1P5WsTvGx9Kw2dN2DRujCf7UAJa",
  "key13": "2AYJk6zAJB2UB9FHye5LHfNaa6QdUAJFShWxoyVKtzy2vb5trMmiPHbC1PUbqmxhX4pnvFVtTnmY3HpJjqcgjDSo",
  "key14": "5iYu8Fm5aNCiCd6cDw1qXM4YoySKpTMngBnntXZtFhWsL6mCEFpDjKuVkJbYZzZkimuSQqHNRFtALk4adrrCynCK",
  "key15": "5yMM3j43XMVpVoEV8bhLJGmdS4CKvhZza8qjueGk35tx7mzPfSeaMvUUsdmHqkRw58ff8kCfmfw8NvVoEXikmRXj",
  "key16": "3ynx4PCzsA4BqN9XJnK7kftQGZMSgMvFeD5XQ234KM639cNxc3CxhE4ETLc6M5bnisvQUwQsrphsGynQnKTGk6yH",
  "key17": "3B6rEdXJqG3F8ccEB9iFM7knMDVss1QTtHEeH2WVwPe5dkKBydfMWERxFKGes77LqzYEbdGKYSaY7GQTQtqMcL2Y",
  "key18": "55bnbJ95kpvCpVQqHXXsJNvkRjuSgYowV6by52UjKzx6sjXWg1NHQQZUpMDkWYFKnETsEkLTh1cYvrzBwj96afWf",
  "key19": "4fMweLwjywEHkaJ9jZgLYG1FapEJffptbdfR2knuzsQP6NCWwFcAqksjdnPUR82TQat7x4XdRJvEe8iF3EAUc2L",
  "key20": "4wzxKyP8VGYMGYwfZJBrVaR2tmznRRp62MrtUdDCDBWiR6tzYNSVmo9Wnj8tk641rY71YHbHzMRySxYEunnM746i",
  "key21": "eX8tCB19zALmGCZqaPQ8rfWQGBZHaJS14rwv2kKZJNzyzHB7C7XNonHPD5XyD6gbShcvGRikqEDxNxxNhMHbup7",
  "key22": "2c3oxcL1C26Eutnu1bDqRUgbJe54e1kmFx351MHJumJDxMZZ3pUKiJtgfyBc4xUXx89WHHMXWwtKA2UYjYdgtsMY",
  "key23": "2bwYrJ7wbaCtL6J2vizLbKpeBf5qS7uD36AFKP2MM3niqqVqNAyXmBo6q1Z2pi84yydh6ms1LGaWXMWyhHk6e8jN",
  "key24": "46WYRVNMgJQNrR6UPs9YzN7g8vZMfGNGrJkzWzHG8mU2hP96tUA4nmm2jUszh8Wby4XSDCKVBxbCRGdZ7GcvE9cp",
  "key25": "4pZE1EeSqk7fdzAgaUvSsj12hgGswodhU56pqM5iUANW46zi4XEuevRey71Gsq5nyZgW1wHeVMiipowJwHFe31DX",
  "key26": "5kbZvbKv5ZhspNLgdsjDcqxn6wuqMyebqg5pRSrxD9rHwzKt4LsKnud792A6sASMgGdvD5HZLYeSmzB766wW6UTL",
  "key27": "2XDjB6tamyMWPoiej5JwkqcrVKUWZSaB4STtjJrmKndKdTBe4Vg7ttikcoMd8g8957yrbDeKG76Q5D9jmD3YDabB",
  "key28": "26Eayf7m55HGYQVa5uBtfrCHZ3erdf2aUWEzh2nX9XyCVSjbDMz1qZopWGH8e5xiprkCBZBNYS2E7KfWD8Rb1tVZ",
  "key29": "5p88MqCBYDQx5rmQCMJHAiE6XWS7rYupHtXRLzFhV2s9migVZ4xE7xRWUwaDE9PP8WRbGSktBDVBruW9WWG5xrhg",
  "key30": "a8PmUcX65vWReMR14V7ucgfk943os3YWhkE4wVxnzSP72FvNKJjhqWMLrnHGtfBGAwbPbcvDURnSzT1F586a72K",
  "key31": "2Aagj2ztLctXAb13Fu8KJKiMdVh6fxokj9cTidL2yKDAzTXEGPRBQesGiLQaoBwBRny2SUJqbWod33kWP8GZfRGd"
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
