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
    "5RgWDDiZy3e7rGvswWb8BZZE6miFCP5GHSnaBZ13poSyzZjniVL33Mt6ad512och1idM55uGQBRpKkCwMGGVmeZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQ6GMrn3G3QXCQa1KuqoZhpcn8vYuEueQCBhn7Gk7AM5GEHq56qk3ASDBvzUiR5zGEK4oN76SarMmx3q6Qzgntd",
  "key1": "3nwLutuppRZC1a9RZ2V4Pb94jbWktRHUm2ornpDoXLNA4BadoFeTfWqQYe1B2XbEoazMM1vdTDu8ZYt4oSvjo9yd",
  "key2": "48TEzYwQWCuWDajJgVYqWaqdbxvdbXM7S5DAgyijUWG7zCXPfnSVvHF3bGureMZqM49JPczW6ez4gzLVASqfAtLY",
  "key3": "4jqemU2WS5ffavEzcoPvF6zPiLCXz2KCbnKKSKdGZTr4WL71265jmMot3QfqEY5zyehQV6vKCbkLrquM9ChtpBYK",
  "key4": "32iEYYiMfJEBfpvP9NynXBuMkEzgapeYkZ3E5K5sucsjBMQjwtcpQUbK4hxcG1WmR85LCoXE4c9S3rLdNc2CY4cG",
  "key5": "5bRdv6byEqkFEqSAWF8vv8okT5MKUWZTWhjCf8DrxQJeopCuuazxq6Ms1UYP2HrErnbDzhodhgXTknf3DUyeZFnT",
  "key6": "iKRkU6YshSmEovvu6tAKmjUR8S9HkQ7iBsYuXcoGccta3cxsBgAU79nK33fdUXigP9vNt28aNnbbicQCCQpvJmy",
  "key7": "3yfvDQi1rswwdWQDRHZQB2KZWZMriRK9JgVDgTfuB3HjDKAT8rW4ajntDVJya5L6cPdgeczwTj4muU1C2uCCgMH2",
  "key8": "5LRHSVhtWa7u2UefAb3fYkoyvBvaNRdLHpjZGmh9PHacb56g3jbcNTwB8xFvEyzxhQGqkUwZeLxbLFdtzaj1iMq8",
  "key9": "4Pw9Gt6KE1GaPhEqmUEZdkub72XSd3zBqx6TSJviY8GUhQRWyiZApXAij4xNhtfCiYHvioG5CEbKoaCjikfgNDjA",
  "key10": "3DNYUSkTNyYBRH2BdMxvdoYyQNGyYHrXHbS9TrNxURdVcgrZPSGmWsmP6uRvtu4NhYeFYSPZDo4z8CsmRynG93ta",
  "key11": "5SM7nM8ynoqFwb3Vw5vY6VUzLuGopkLGQ4PGiEpC1cfrJFoJ5fG8o9XSRYvo4DY7TMkXJmfQsh7AhPHwuNUugJFz",
  "key12": "XgATu9TTPGMRUaXotpAGoyHpcJphZZ7Z6e6CfxhYy7xQzkPTF15rqQCqsmUVEesXrCXaLL3MHVhivank99G2q3G",
  "key13": "KAG3ExUAEtcxz1sfCGcNTPhpNV8acG6ZN3iLESGfThLNVCBJNY7LuzuWT3BDCtqCqMAbsVMTAwra824dPt4nwEu",
  "key14": "4zdD1JrSTGQcdRALN2z9nG4gUKyJnTQwwic5d7E9bfe2rj8QRxdvF54macxjtUAoomf41xjvE6VPK9Kg5Sj67Ak2",
  "key15": "QUwff72t1LhwEFPFFYv4iyffHuhmDQgjgii7fep9b73pVDeszst2ZXFXM29tNAp3LHb7PUyafb31GxQdAmd2vgt",
  "key16": "5F86BZP9a1iWKn1KURE6HxJLRie2yF2tQbJ6WEqD8fa3E6mtevjtGCmACwXcZdWupJcuCovTHURprHeP8Q6d5D9y",
  "key17": "674kNdjAJtLmjDjjEK147HkGNRbsgHkkdCEmGhnjxp7nnV2WjFmtscuCcpFTd58qTQ7A9L5uXQn6SgCQiouzvuZP",
  "key18": "2BcHwnv8uFJJc6TwwUxbfLbFG1B5gmy5kRu7dpwheSukshgdDWuiM5xVf6u7TiPewuBUzsuoXt3Peoms5MVarQRx",
  "key19": "2ueUgSSdht3ZvxZZpvnhXdwwk2TzerJGhnYXWeCbNKPn5hdCFdhDkTypzvGUs5wJyHv4TzXFPtvxUKkPqGHUESqN",
  "key20": "WFexwNC4UiSa6tbCBy4vyc2Hv8pXYRudoeedzTDXwqNTqBUGA7aSZyW5u5nL1z1AVZaGsMPWeXPsz2BrriATVcF",
  "key21": "2XpNj9pKbG29Pu1J6tGv6rmupVS1krF4azgH6qcJFAAaMNhxhVPgDGk5gFErtpTG8VKWxWEtcBrgLRVNVrjsxgfV",
  "key22": "5f18qCoisD4xeD9u2ZZ9hV69mcaNKH9QnEGanMK1YNbnbiMofzmbKWTjwpgdF4CLiH2Yguibx9zWLf3CTUQ74eXA",
  "key23": "GKGncy3qZLqSvhTyyi49fBBM5dQqny9c3q7NH8vfz4yxho5gMzkoFRySiFeSqRyeixZcZZjD2SjXUMnF2gq52f5",
  "key24": "3McgWCrNZVXdiXaxhGts9fFZZCebSS7nS8tg5Mdt3fNjtcCteFziMZCcYhqYCwy15H6RRyTe3BJAN19njjMijMfD",
  "key25": "23LxRh3v5UNFFVgkM8iCEiqh8V9nimPwmFPqJCDKQN9DV2zqxc3iiZ4aFSJPZK21zufhzHvpG8Jk1fp2rLy2wunw",
  "key26": "QTDpQ1qVZhqW9qqM1N8KGp87VU2e7uMsmECvorQWnJ6eEcAcw3xUX3gEF1rLHgNvufUu7PKQa6yK4SYe5GGirvt",
  "key27": "3XiuAcyX2H4tccHjCxkVxcUgxXxNJ6w7NprxV18icvMne3gXxoHdP712Znzsmiov2RVfrPaBPNYttT1pLucqhHps",
  "key28": "2d1VMk5jhGDDkcGL23u3Mn8Ydy7teiTnvBe12irodABDVpcbZe6Z99bnPVqAh9QsEkZKxae74N94QioMegAPFdu6",
  "key29": "4rn7byKVmVF1i7hTsky4k7W9kTtDpyqwt3zraUzLoKu1JREexxoynHdsWbisCFvdGwk82VjTPjEkmovb4EQsgwhD",
  "key30": "EG36Jm4hmoX6LNbcfjXYuu1TU4qXnfvNbGU5M62mUtLKGtqRc4vZCKYX5NcJHE5JajPJuw7Ewnsw7VY1KynuQPh",
  "key31": "3SKE6J7HyNowHiHmK433iw4mciRv2YKCMEW7Q4W9N8Z6QnjTpaLPHPkUxRUm3wVFzngmUpjnR82MWfsqj1vr5dnq",
  "key32": "e84vCvAav1LsU1YhteNeuQSoTSHQUriviRSQLwp5oKu3UGnp22VgAUZdLCttNKq7reNNAvotrVoAmBr5gCwvWNE",
  "key33": "gawzxavTrLMP2S13cRVc7URCuSmjhpa8TkBQbphwC7CCrMz5tacQSaBJsu41ZG5DYhWSJNi7LFy2PN7zGHVJZJA",
  "key34": "45S6w2zrxoLvFvrYnYnhpeDZiYt86UEZFHx8cgkxuqViccjEs2X8bsMrQFnm8ASwuhLNVFyFeY3ehwsA46M5wrqR",
  "key35": "4friexS82MNjjbPcpemexGWQRKRbJCf3wt35aZksTG3cZauPPbicxgLcpHRM3e6dg2LRdrJmvSLQnXofAfcUjtGZ",
  "key36": "TqjLZA5MK7722VZQdHvWuK2YYy3RLrsjy9Hukg1pabRaa378kXev99qVHrsugRnvQ6xgXKuN5QBcubqgU9oPw25",
  "key37": "2LnQXcJza4BRegvZAkXNfo5KRHmGrUvtJjGv7eg4w8E95dajXn9J1DQjZhGDfzE4SUhh3Cc8W3VkhpggpMniXhJ2",
  "key38": "Pk9Z2BJFfd637jupVziU1oxCvKCUWuCZpYzZLPxQ2jt9QwvUSiZtzwHtbas1TsLmuY87tzLXTUscjWzKNUqafs1",
  "key39": "5jhNM1dxoCoFsjhyiJhY4wqZNgtnn1NXSM9z8aPgWX5Y3LdXnrgptuo4ejBuxg9FrMgPTE3a4KnzkGPWyRPza7Ra",
  "key40": "5FDAscrmLTBynRkbyqhdxT71yktcywzsXw28S3oa5Pt9MknJazpGFF55r5zXTJXxGqtPsdKwrPqV4dUBQiTMzXqv",
  "key41": "wHiNwFMdgpsVUDyiURtuiREtu73u5Bd5uxhov4WAkUgybUzXKokFDSGNge294adWFmzyjQh5QHEM5U8x9BWy8uD"
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
