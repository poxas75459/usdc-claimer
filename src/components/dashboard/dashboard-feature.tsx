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
    "RycF4ckkpfVXtZGt47DmdJvow88zXxLSBJ7trVHEce99ew4zMwsbsmysxdK92hK2z5gxjuV1VnhhtzD567MtbjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ubMe8H6inHpvtNqhH6SfRLmboyUT7NJ4NyvSbZRzBUZgroNJkr5TCy82mcMB1zgn3Vmm9WfzhBR431H143yWqkE",
  "key1": "38RWsfRporhuaPfqTAEDsgQN2sYsMm5yGXhvBjdgA4gQtikW7e5mWnsaL3GxLnvx974NW7UdNYjCAo8cpBYPvpj9",
  "key2": "2XyAwzszh3PivdzgHuxNrM4nDjMAGJVhcyZuXCzPzrshs8ArWtuVEjhETRVJk7Fyi1miz6oXf55rCYk9vZRpMA1",
  "key3": "2cLbqQHtZRDujUjBdzSw14U7NyGKkCEazGfqbKueQEFbsB6Q8ccDjEAyGrspurm9XDy4UxHzJcrZR57uWBtHVcuB",
  "key4": "ZzTCnTgvHUrLfXReda515AEeRDbg2ifg27Q7rqNLbUp3HUhzUCriGTn4LgMMYtEWkp18YZwXYxERe65Fmp63NgH",
  "key5": "5XasQNn8BSmCyngXeBhXtCgFLHjEoBbJ7s8SSbNbkH5V3XpZqrUpXPoMzewUhSNYT97iiXk157EVD5pSZbQD1gBJ",
  "key6": "3btmMdu92K31y3HckAL72D8sfvxY7WPnYwqScnMzwPBZ5TpdhHnoh3GDdu1r7xjwMBwr2Rj9djBJxzPeiMRiw9eL",
  "key7": "4hoG7KvcjgGNGNe3Xn5Pppkfx6WWxH37HgGeSZ5z2q6NQcQBAHmfKosDCj3XmJSWa7dPXqSv53UAbRKNwTMtnyZK",
  "key8": "4Vp1pUEN1ajgrPQz95LP9XYTKmmgYv7mBsUsCF6SpUqkBwUXhVj4zVfPy5sMCeLvG7x5cbTVBbmbKveSTB3u2t9x",
  "key9": "3u1u15VbgQZYDy7sbv1pnnM7kag5aMmjXbpE2SjSbrpiqoCLgsaykUjv3ZWKNdwyV6E8jHC9hPHZDcpiKDFvfJQ",
  "key10": "BbxaBTX8dM4bz39a8MF7Ma7kQdD7QDYH2Vwn7fKPKhxDcwQ8xxsSA2CARwdjTfdA7t7j8Bw5qatQLo4KN85KPCW",
  "key11": "2ntqzPpG5kQrrYh1ywaDKVCWZXQkG9qUvMUonKSP2PkWWuoj231pbiADjbZBtgbL3PMRfwjqF2opxZJCiLweUJcJ",
  "key12": "3SCHTmvRWdwdNzrMBv97dayouiL6Uek1HUNZptbCE14FeShQBhfdHvbxU3Nj9uhppDbReppyH155diLcLW8W99Rb",
  "key13": "56EDq9eb1mbVomoBithJGEGm6jmWXxhuFjYczxU2c3e9ybfwEJU5d8jFu3vfV1XgGr5s3o8PZ6zdT2owpMsxLSUD",
  "key14": "5gtruCc7CxCqY41SzwE9wTqmAZHTpGnnnALq5mEBPyTDvLD4dwFYCmSdbKcynourzzErcwhhrtahFdhm7B1SSJh8",
  "key15": "5SXS7VimPf4ZeRucQc7dfhrFFjbg4Kzya1hYD5J279RsmLCxQJBjoTdX2pW1Q86HwWzW19M318NGbsjiqPwfjXCu",
  "key16": "2ZvpivsCg5x5FxpyLMW8jgJ4p16xqDhftXgGMz2nwepXdaKnwvvMxCedsNFgMmksBsUR9zRngh4EEYKWYTmdg7Cz",
  "key17": "4ZAkxD71mkjtAUSRTh3azSDh3VjgnTwPuWKxgmTgGtRYMuYHXGDdYKcvEhnvxeKEVSVmrms8aTdThbNQiGpru2MS",
  "key18": "5D6kCP4C5afvwvywHtSLF6s2ToFUYpdepzTEmJ1PdwFcZ2ib1BLkM2XxaitzataR5FAP4yrfwhEJtJmTVxU8hvkK",
  "key19": "2qhhurmUjBqBgwbz1aSn2kWm6TtRidbgHmXuZjt6opfp4vDMFzvjtPJwDaRR52RXugis7z5nwm1aniXz9bRgxaQE",
  "key20": "3XLtxoLtMFhLRgcfLrGbKpdUA7qQ15HtzGZpMSfRwFp7BzcWPyTUrYPScL5gfJMviu5q2pwaXsgHFyCmAGqF7tth",
  "key21": "2VYJvumuo1LEWc6y9UY5Xvhuddi8ifumNVNWNKW9ZPaNj8AXFJAZemr8VeVhL1ne4wK7XvndAXfwGKpd6w3k8CR7",
  "key22": "5J6TZmSEXUe4Zauxwb6uBuaYMQmgtBaU3r6kzRXHHoJyuhyuJfE1RoPMX9Avv6wnwikfw7gsp3NiLr3ThRx9bUfZ",
  "key23": "5ffBy2RmX1kVX3f54mwA5rbsjF8yweagZJfJAYgv6QqfrKwdJw5ReGfXbXZT3GyJzMXc8t4ingudFw3sjStRC8NJ",
  "key24": "5XJ6RLUCaJss2YzNpbJnbgjs4ToRLrNF6iAqLYvKbZYQeARpw9HjM3Qdq1d3Qe8gpmcp9wL3SVKpe5h6YvErtq5a",
  "key25": "5Lhswjm3By2M6M8kF9gTQfPXQVnNag3cSp5opaBotszdAAn3b6fCCGzwvFGhcXtsWMSaQY32tMjU7Q8A57hxDMmF",
  "key26": "57Yc3jnnz9QcmAWpqUPn4pnmwmEdFmyPaT5qP4FxdXRt4rT2pQsk5i7pC3mSUm8wKMtJ41iE6phunQ1uJT9hyjw9",
  "key27": "88b18QU6kN4nccBjjX38NNvqiXL6XvvWzoTk35r6TMM1gVX9mJEfgEJdipMxXyuEsDQKp1C6yG7LwTJPWs8TMqw",
  "key28": "4rKmHW7c2Dq3n5Z8ruhkJLBqs3mCZnYKJCwAqdw7w7DEQA3Dzs8Dv8BBW5gec8Ztost86uSV9jHYGzTtGoYW1TFG",
  "key29": "3kYMmdxjSD5J1qLBYrUhs3ycGPABoknpUYbxPTQQDrtMQ7LYKn1LZQXxBXNu4FJXJeNHyQWhVQbW5pVDEP61wQzy",
  "key30": "2RrxpB12wnqQBERjW2y74U1RSB2ZDZkR5NLTopcXagHVS4RhhHjEjzxcThpuhZEkLyBiVaHLtVmaVgWPdBBoGWhb",
  "key31": "794UAjWZSvzrigLsc5b889ySS3fLT5ZrqCWiZqWYPhzCTAWvwHHsRBTzwDQKbY62qXk5zbddgNYsLu5ELG99PYZ",
  "key32": "2Jf2vRWrRMUx7Ze5KPVELwai4oX2cTR12LyDCXAyM7SuABZD3DSveE2hRDVPPEcDZY96SSeXV3keuD4G55oowFfz",
  "key33": "34SeEGLatTHKaLYsQkSuwVi4cyuxy7zBWYPr1hud47FnDVmC651AXFy5kbMi4fE6HL68eiVKLiDci2VJ95NMZV5Y",
  "key34": "uFv1RdrZPy75PHwjt6V8mmGLmBpTmZvuoBWiPmo7HhBtgztFJwK1EwpwWydZFkkb7nwJHETFT2xtMzSdFyF6qmd",
  "key35": "3YXfB2uvqVyteqMbGJvGwZydPUALLD8Ww1vBfPD1krUBANSZM8TE4QQLuXR1bmjSSYNhPSKZK1ddatJNEBZoLv2b",
  "key36": "5CfBpozuFAdn4ytqkEYxKK13Ej1M61UAhoTGZKfapwsvGSoAPH1w73nUyUnTs2FKZVgBfevkUKCNmNntjQS8P6sd",
  "key37": "8yUvUHZTcGGi89XmT6iMfKNmr1CKwnciYXE2BohGRx2NXYcntCxZN8SyBsEPxE5eS6C8Arv5Zb5fzCGCakjugBG",
  "key38": "45v6idXmjWXAa5S64YfgJmxfP9PjC7zZ6TuSrhSwKuQmEWgAN5zW7CWBNm6dLMoHw58xW4VPj8JK5pcB4yrv9y6M",
  "key39": "5NZqZrj7Ap33B9E2xkokMmVg7EmVLwDg4X8bJifgswWbhNV9zFKd4F6rtyuaf2gsdykgBpdM5uQSZga8kE7ciyU5",
  "key40": "3jD6nfnsS27wV7VvHibFGjehyavRBFZkLA57E8TsgKU5vyiJEst2fV4QtEBfpQNbyX9LV61MMLRnjMsVvgc17NyV",
  "key41": "5BQxJSXquUj5UayNEWedTNumbtx4C4QA9UcpA3dXCsEqWznS45GhU5v74iNmEQuciziEtMkhZiDkEqB4r7prn1wA",
  "key42": "4xebQGhCbiSv8Xo7hH5qdR8jWpEXZ4bdYxUn7SELd1tQ91C3JiTm4aybcRgY33CAcM6eE3KbJFWJ2DNdgyx1HrPi",
  "key43": "5YfYuMiJH9vY6NQHvAJr8eB3u5dww9gdFKJeyFtZiNfH19KfdKDURfJi4yUgsgXZnCcUjBAaAdYjZBnFPPDoCh8U"
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
