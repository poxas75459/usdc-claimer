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
    "4metCgqmpDRyxnhqGHQExymXJ1ShBYynM6tgLerTXP1oUa2JyCGJW16kdLiS9Uwct6rUbPJ1u9ccqTkgUyaGLRiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRrENLKYEmdarP2Ru2Zr5fTd2qCc8aA8ojrVyT2wuAmPBYfmWRn1iiESPqXgAgjwaUs1motEiMaCkaFfiKb3vdQ",
  "key1": "2fT4TQZg2xEXoaqFjeKxCYwgnqTpbnGLnvh9dQQ1ycqy4BNAZuZsXLXfS19oXHhTrBLkaQ2QfgL5GZ15MEsYpNwd",
  "key2": "2h5L7UxGfL532xxpyigNXxmXvvRw9Ev2qtg9iaoc8QS4AhQSWCwSXcZhXof19e9c5YAyXmajTXPPFwXkaFMfrv6x",
  "key3": "34AXcCYGMXYnzoorYNhv9VVQqjQU3sNvFgFu6KrTKC3pmv4KTHQepqsAbgqq8uxU18PU7tdFTHcz5iRZUBnRp9Ng",
  "key4": "4GXLdX5LhdkXTKeqsSEfpzVgM6PF2Gd4ieDfmuZXPdrAgUX3LPJrRRtPFEy9hW5k2tDuHXyvgoDnR5JL8w9mr7RL",
  "key5": "48jRB5cj2atc1De7WG27sGdJPzJTDNdcNKKWczM5HjhSn6UH9uB6iEQi33MvnCHQ7piEGGfGE9kxnGcbRs65PhBi",
  "key6": "31gXWpsJCDhjg2p1rV5GtUCojqWApWxsNxKrqLxeVQmK2SHNFEqGg2zMHsFP3ap3BMJp85Fa7nvU2LyiaV42ftQx",
  "key7": "5x5S4znCk36uuD2zbwmmHqSNickBTbFQScasnqJAMbHEmR4H3XUVCLSr1RrKe5esHp7TMGmtxWXSFyx7MHTRw93",
  "key8": "3dKvfT3zkdKWRJWZXy4Q6bvWpURb8JRUBbREP36SB548oWvxsZJC5zgVtE7ZhJau2SUDAo1LtvFnajGNEzU6ze7m",
  "key9": "2uYNDuxDypTSHNbWkRHSGd9hp4xErKDi6n83zDCfAr8CBHufaEBEkCSXDg3idCivNUs2tLxAcbKc5P3YfmZiwKJu",
  "key10": "3qUzuMhfFGotkVAA36exCdHvN9eW6EEzqVFC1jGmRPMTvzp6yeyX7pfT57cTYkHHjEq2DJVWRausKyY1NJrnrnU1",
  "key11": "PhbmpYykEFD7Y9BeWrtAiQHAyiv2nm7cvVD2iBwmwwVRZSvtnkj6T4AYg9RJRqCEcj1NySraFeaxWbHBnPYGv7m",
  "key12": "qRdstae7C5DbPicwXPEFx1Ei7pJSsJbyQvHmc2uqff4oK1zJxqGmCQpxEqGWvyXET8XDnurBdxjn8pPBbqL3MhU",
  "key13": "3XX2U4wuY4oh2KnFiT8yVTAFPKQamDUXmjgzUC3LNQ2h5seGS5Lug9gBUzAEDZ9koJfkNRoQNtgqSCUmsoMtjVqa",
  "key14": "5HqUGtDU9eC88H5UVg8VuGEmcWnL4hUUfdyrCt9YxmfSB3v1XZNFhuSmVTzLJZjsfaGhvun7p9s99ivjyEQC67Mu",
  "key15": "HoniadXAmVP19w3n264E8JabBdjcdvueJUtniv4TBKSth5FP7hqsnQ1kDg8ZFaq3YncLtDEyWtAwUKnNDBj8ugi",
  "key16": "AW8Q4Pv6p55gyvrqHsH4xw6MCZPJkx1hWomLmGrKcBYiGcFgNRct55PDDQdTusmLR5XyoxM8wzsah6cXGSkLpSB",
  "key17": "hyafrJQtT8fGdb4aKDsZKPxpQ7in2FAeEZeJGj6sqahR45figQUCR69TAMpaLXEf9sGeUm43eVGHHVXDGWTng11",
  "key18": "jBYd2RUKjWt6W2ZF7geLXMn13HZ3zKWks9SAVb85ntYye7T9B3A3yrKHetygb7uiBXsiT9JoQ4zxhEMWLc5BXB9",
  "key19": "3wF1uaGFRnox6MmXScFfgRYRoaEErD1m5T8ucaB2eKZmAxq23JbB4CTnLvQ3sUxDaaZumtc1rB5ujBgRTsnhgoZ5",
  "key20": "4rANchT6GgUXQ6KqsY9whe4UorCwphuq3SeixF9X43a5b3rQ4baNsN3HKg8tvo2eiEM1H1SsLZ2rvXH6Dp8T4J5",
  "key21": "59fpAhFfFGXWZA9oaN23HM1uGQ8Sa71bfgFSi4gCRk2nsvXqYCVfEqYiSYw4xT7RZZHJ2ibq2eJ96UokXMpwT7DY",
  "key22": "3wtUiVUkW2C2kyZHEAX7MreYx8YG7d6rKGyfrBTB5Pabw8i4T7VBzs66RNxUytdwAjpTAAgXubHiXLWAdjuJHW6H",
  "key23": "4MMwBUi1F98tfuc6n4JnJ4Z99vdRWeULEtNqfHNJJ1HsA7UchnLFu9H1p9uYCZQHXkiF4oFwhjiU45963QF63J8N",
  "key24": "3ib71FK2HmJmhZ9weouun4jdXysyg9ML8jzWsXMK8V1jGZEde9XuGAH5wLNhHc3oy5nnwJ8e11YMjKnm7tKkt7rj",
  "key25": "3MoDd2qDDTVC4PQHoqAqGE2WrDwMGVoS629skhmFVQ4B1kJFLX1hqdVUMfM3kmKSTp41qNhFoEunC21G2wtf4kcG",
  "key26": "E9GpUBQE3VFdVRaUJM1tMdPGYwJA6yq9PS9EyZQW389bb5zWbU6dnnA3Xy7y7NEQYsQF5gxhx7tKG1nUGabzp8A",
  "key27": "5KHWUhgtbqBteG7oKhFDHET9S4TZorzx3bvTxfou5Z35oYuExtaHGJyhwCYjmSK4ekQCp65E6gpfb5esxjXEXK8f",
  "key28": "5hJUq1bt22T45Uq6cAx4oqrAhW6TpNYayQVCLL3qYD1X3988XHk26bJLEH8mCti1JjKo4hVZXzoQQdpU3ahCg1PE",
  "key29": "4UhZZu9EJ1KAJXfpThwvcFj3fSyCnTkxeUJeteHhDWQMYJuauWKXZhGqezWHNZWA3s4u4kboCsgKEULM4oNqpbF6",
  "key30": "43NXCoSpNp5Ky7PxyfwxhLRdPDDvAu87xgqKdpFJ2pyabEPKVCxjvvnstLG56kM14EmstTpSsG484FTigMfCZTtW",
  "key31": "2mcrcjS79845MARX22wUVTzztzu8PK7P26djAinEFdu8uC82GZ9mfYZhkYT7EBbmqXvG4qjmganJbyj8xN4EMM2z",
  "key32": "nzujFdeyinsA4gBPdSSquHzmAw9aWe1TKjp52LEnf9GYm6maaFTPF45hB24Ro964mod2X9Ngu26p2hWdp3Fqz96",
  "key33": "5LUwFmA7kxJ7Y16k97SVujiSNkCs7xW4MHEyZXxf1pfn28cnDUzLQfEaPB2mxedAMNA5sQ7pesWjfXEXKJGEAsdG",
  "key34": "434MJR4DPN8V1BoNogciinWH7npnowVvGeSVZuqyT5J8zU4jeXvpMb7Av2DgtHBhiqhhXuVQbxt1W3Ey5tFS6fdt",
  "key35": "2Cg5jziHYvm2sTxmVa9s4PBFGKQBoYAhrHRXwBMNSyJCSvE2g7EZXsNHigaAspXaXfjLsisYDPVC6BRLfpSNK81S",
  "key36": "2USxNq1aBjYg5GUqUXDL5bXgJHmGEzvdGxMpD3QQK8j2vZDGELm2Br2E17VwSKX3n5MBdXNSx1qqV9JuX7jxZi6",
  "key37": "5eoM3EQ8chk3CTgkoWXPiy3Ld4ag37p4M2rMGQhrdK5h2qZWwNXUaWdjq9wotSfGAT6qqAmXDGAnQBDbJBa3qf7E",
  "key38": "5rNW5ZpymUGu1FHWRAwiKmDuJZjdUFF1ECiAcNsCFgnbVPr6MNnikgyZbWNyauJwmPd77MJnDGKfBzhLVyME9ac",
  "key39": "54zQ6wonenTp7NuKrgZJxhsfDaj9iEDL559BK8TBja32ocVa6xDFe3adULaxGNs8UgRsxvKxwci1xqQ8X7tgxMHc",
  "key40": "2aZdmCKvNqTicBHYkExYXFXG6zcUd8k28qD1XNDgbwoxtTcJzdxjhS5XMGrcBoSrWd35GC4Q3gk3EsXocMsq1CVv",
  "key41": "4N3W7F4hWo5hWBKMdw7J69jjav1xiQWYkqZsoU8VWcjJe6bxxNssgQUnqp9u5WizLyuriJ39LbDrHrNXAEgpaETR",
  "key42": "5u88wNcr3gfs29bBBaezJdcit2xJEJTGr65ZvxmgSi3yFBTRBWHTQCrmsySSeFZ8V7XHHm6uHTXUNzxPLsgbPA7v",
  "key43": "5wAFmvXqn6q7iZTYgxrC7MthBFXWUVjjd9y3Kbmt644oLLHR4ahZD5fyqqBGYCj3fAxaeTNkW2QkuhoAXCeNfnLc",
  "key44": "3JfDyrgVVRkG7LuVjKJT1f1eqNMrfaVMD4PD7BydDTio4MwLggmFCabekHvWZ5Fkkb33KDzJqgkx6EQJ7NHFieLQ",
  "key45": "3NwFfaBwPgv3vQ4KfmmhKfYeKkBCau8Wns6gfMqA2Rtu51Ym1fQA7GyqGwHW8p5dsYGvbfqhfYcP5MyeEZfaXSeL",
  "key46": "2doKA8efqhBsprWthKtC2y5bJGWwHCVrxipL38hqJ9STMY1boB22m6xwZyW4y5PBTYgww2zgAcjq3Qc1gA8zmvKC",
  "key47": "24spE5n7c3QEzk3ZC4kNBQHV5dsBSStbnpkn6KmjnF1CztRWgGaTa5G4x8FoeXmvRxbRzYJUX39h5dWzVqm5ZqMs",
  "key48": "54j5sL79ZUmwqSBwoSqYKf8CWkayou1k8zz7kL8yGP5mJDKVij56m4LK6cjE4N2VCw6ymU4wKArixhzZQ4GKHhNj"
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
