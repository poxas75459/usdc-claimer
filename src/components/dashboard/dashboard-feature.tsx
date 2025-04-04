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
    "wKppWszDtfCPB9mwcC9V2y3u613bwaa6yL4mKwjB2RDaYJZcFRnFgq5ZJa9SpiLpQfoxeNyVH2PiyBCby3QYk4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nKz5LPc55nVpMFhovH8jwYPgDjysP1xxsPPhfHvGUqzE22gTjahXgnwBoLBKobQW33w3wNSy4G926zkZBagftb9",
  "key1": "3TDeHYBbiVNWquKP1bhvEbUNLeQqYqqMwPS8QNW2e8GbZDZGkCmPBz8KoWT9jtN6UNZpXmjNbdkmnTugyhVuyPay",
  "key2": "3q47ZomqHsMqvF2bwAeWb1pXwc8pSVSPHbNw6kQNunsWkP8YpC5ns5NB7x6P3mWRSM32vVFU3yDT7XQJ9MRkV1PD",
  "key3": "4N3Yon5tVhebwa1roMGSNa8AudRS81nuzWCLsQZe7ySCSHzWEDLi9o4J7P3X5DP7YxMPxbaarteyLw179rtuNQp3",
  "key4": "xJUKJcHTd8aAYh4qd6MUPB6KeyUqqbWFsQGCF8H32D1265Y1fTh4VPtbQuRHTAaAgc3pv9GtCtdfYMRU9dtxcUQ",
  "key5": "3oWK1yUBdgCg1pJmDGPbbzcsqqBfK2pEfzFCU8pRzsz5ecz55hp5X8oeMM2KgqVCSvv37YYWkXZWosUdqr3c24fe",
  "key6": "61fbbtHYgk11Ng6aBqovRREy3g6KZUad46tiHp2LNEVLZoeTz11VHJWRdRsYPdmqs8ufkc1EVfpbrc2HigSbfe7j",
  "key7": "2j89LHgkt4AkwJvkYyXuVnNU5jfTzSTzUCDNwGEjDKFpWtqHL5ctFxoEa2ZE5au2E8XRuChnGT5AM5q2SPFtTKSr",
  "key8": "5aYL1FoUMuPtv1V9eqeNF4inY7whMgSTVXmrCXk62mgJkTTTXKpwbVo2FsoNpyvznquK5LMjuD9BkjgFQjuoSa21",
  "key9": "EhvNxjhYuPaoj7Ze6ciusHRbj38szj1e3RXejGD9CQbPtiiYoCFPBHd8xoA9hHnpgdBQ7hmwtMTzcQ5giTvsHt5",
  "key10": "5zX85eApcHYCjk8m32qWQiDAp3vtxZG3k8SuZ4KSg8eFfcrRurEcwRMTucL4z5Nvp331LCPEvMJBRT28Q1Ue1qT5",
  "key11": "59qzKRfjuMh3Kgsy7LqrfaGQP52cfLYBK3JRqf6u3TXbPVB1vrAVZaXEEcvhWbhapvvMzAnFxe5UnfaJc6WJC83g",
  "key12": "666nS1LNLB9LcgHC1Jq9Exk6E5prmMJYPvLLUdwJV7TFAWbop7fGCiGZYqPL2fL2mpep1PuzKsmyBoTgJWxTvsM2",
  "key13": "3VbJyVGuLgjZeaJ6sfAB4kKZcYF6o3rLUVgbXvYrnJYdfF4yerbTExaxjg9UBUAyUMjvy7DFkeJnK91GwhKg1yYt",
  "key14": "3PBCRdTuTD7zb9mrr94hD4oteHptMYYJDQHRwojwa4KoHUEEV3nPiuwNc7q9D5CRNHvbokkDgj3ZfQfNrMrBAKPU",
  "key15": "3tAPnaNz2FE7m46VnS6EaoTgA6g311SvGmWbhSqEHneWa72jVj4DYWgamytfAkaLyYbEcSbn7qSVoLExxVWezKRf",
  "key16": "33WBxiWVJ35LeNRRP4NXbGXSaZYT3qmGyNaoR2btyjK8br87Mmc5D9x8s98NyzqY3RVjvGu7deSvVWiY1vXBeCXy",
  "key17": "3uVDFAE4SsvoDpt3kjwnvuD8cpsVzy2u9Z9rgyKBDXUY2uXLxZSo1vE8f7SJCiuTxRk6HvhrT73vNeovGJEeXhYF",
  "key18": "7JyrUzij9gX7dMRfkABVtKGqQXittaeCeRUK7x46twhu1SaqvZ3AcNYdCQgur8p6NgZht1shwvmCA748MVj9v8b",
  "key19": "5P1bzFcefeSEZtWA6gDzpi4cQpitpUgirXmdfmHFoBXo2HuqgXAiSmpc8mFkGpCgHiWWXcDo45voBknQp7pvo1SK",
  "key20": "5Qs9ydSSvpcwPeWLZwwD6HGJQPYnaWt96WBCTSR1zkKK2Xm8fKjdQ9rm4DG6ABs8atPjWf8wiPk8Ymgpxrn2A8ga",
  "key21": "2ti2e19LiRnpo1iX39gWryUDRidM16BvFiHYZPLgxwyxn6b3jiaqjzPf3gtnYHTk93zYaYDGm2hztogboBgPabFa",
  "key22": "3s2u1oe7FKUMYJuG33dCNZKSmP3vrd3qhdbkhUrdnkQVgY7kdUYK8atJzjZe92LQfKsVgVtQjf7vLYmyZxnQkHsB",
  "key23": "4SxfDhXnPL1LzuMAGkXJh1dKkEr1wP8qNUk5ursVCreW5ybVhevoKLfeyXX3AS4DEqDFAgXVuJaj8M6UaxS4f4nJ",
  "key24": "4wWyFARenevc3jbSyp3aMJ5zMZrAR93EmxsZFZ6DfZfZRgJPaCCAhk1X7AMofeEZCEq8sxMGwzhDLSx9zJLPKBH2",
  "key25": "vA4m7wz3GswvbLrxf8vWBNV33tYd3FXu7bkKoUWCcXTAs5rA7Aj3wQpGChKFfpxFfZJt4rshjgxxnaQ1gXTM53h",
  "key26": "5RtFBs17YcvngsUgP1GM5vUNkXLSQEDJrLGThMC6vpD7iZnPcHmN8nrR53LqkfybznUAGCrrHzqGXHzTuqSYR7MS",
  "key27": "344UKTu98th2AmYrxG8ZXxYa1hfMFEZ2bFkrLCcCmoufy1ziuoFVEerR415YGdi8oCDqZFvMVjnxb7D9SDEYQ6NU",
  "key28": "3YTgFw6cK3NLjbc6uRg7M7tovZqqC7QyXKt8v1joeqGKG7UnkdwGUCz3ocpoHg4v7tKhAdi3msw2vzrC8yhmMpFc",
  "key29": "3FR6DtMPAnnXh6GT1b8nqJ641ksx5sF7b1j1Yr8e2P6dqUscEbWsRgJuPj5th21Co4SfpTiRJocpxYnyG7iYeQez",
  "key30": "49fT6zepCyTY64twBMS9jEBEKE288RTXoAZB3RH3eDcQWUiirnk7mLfG9C9khftHtcSXn3paNjQwnpE6hkMfGfGc",
  "key31": "496CwKpU7daAKRvKFLBeeD8kJ5zCWQ6DfydYsNSPrT72aBcCAYmGUMheCeMYRr6d7geWZp8tyqoh8YxtXBkDyQcd",
  "key32": "kj3HcZJCMQENHtgEwAkLcmmqP724NSYZFLFdMicHYTPEqXDPT2Z5Jz1QKYghJcmAqiKE7T7pTektkgBEVu8eN4C",
  "key33": "2M9Xh6ApRf4m61Sr2v3vMLF4xEtuhG3cQZdmYxjWHso4xDq5oYAQB4ocHjXMT6LPt21c2BR7xMCj5zDW2vH56bsZ",
  "key34": "4FV96zB2GbWFru1UkaUa8M75YbMsH2Y5yvmTKRfgyJJDw69FcQGC1QgSc34osj7sNTkWh35Ns2EDwArE1xGabDFi",
  "key35": "3mhd3LmVLLBU3L4N3godfWpibCoBrVnFcCo6pbdgSv9sr6RodnPH6siAVN4eaCEE6xt6hBRxx3tw2Dp33uiPdkrB",
  "key36": "67njE8JcqjfJYwJj56xh65yHQ1woUj7HjbRwxULZi6W57uZY1oEsdHUay9iAe5zMwnf9k7ds2pXEjGFATg24bPtN"
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
