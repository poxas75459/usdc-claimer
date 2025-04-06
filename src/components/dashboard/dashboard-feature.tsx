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
    "5Hwjp7rDaZEo3BXjXyowoZbb4NBPmRGriqw6D2KVaYABkizVo8WRMizvSMu3N3wKmxZLFfQmQ7w8QiCv47cutuvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDdCUqQAprcwCbon9mpJN1pvFM3K9ss6TK4ySZcRC8p4irNG5c1sCJH7NV7P81AkWMTgR24ektT6mfQaB9vzEBz",
  "key1": "3XrS5fV4AY717xkDSYqwKB5N7bp9WTG5YxMVzf5bd3zyVorXb53Us8TknTwG8PJpEnRjCrUYu42ZQmY6zVyAE9s5",
  "key2": "2uNskkN8SsMybWeEyN6dwr7BzUw7xmWyk4L9qJ6sej5HQEfhCq4kzvUQXnBKPm72HPYgXNDAZdQZtQXNmcCkGNiu",
  "key3": "WFudf9z7tJL5M89swNB1ftU8XTf3iRb8Fsz7GGf5aasunV5jywqEJk2Uw1wyfyXavtXe9CJzqXVFtBr5Ev2PE5C",
  "key4": "4XEMPJbQVsEbYZKkc8m72zH1vG59kKNvYrmNffNfCtv2ysNpJDnhZZGuKFrAaiKGsvRThZu6ZgQnpB3xdHj9osyZ",
  "key5": "4xmJzEbUcnJ18HeD7KZfbLBoGSeuQUqbBV73tmQFopsWhyccW6EUAPGRZKNVphGSDMFGVGfAXcFLtVXEkLJzU713",
  "key6": "2tNyA8zxUoNpAhr6ASJGQs5uAghMn6BEzaTz9tNUcu8t7KAavrF7X14s6kWdDwEWAA2cRWvfSCxw15aL3Mbn2HhR",
  "key7": "3h77iYrkqGDUnDhNrRNKnfsxGC4oBHTTxhp3ky9iPWzUDNxcabdkzkJK59w3zX9h2imeCcTM5TAJJ5EQNNGdb3vT",
  "key8": "5kBqvWmocY48VzQhw1yrriQgVkzEsiWW4UUbubX4jWkuexNF2PgVvNGUHmKCH1AWeggQwZwBHR7wNnv99JQWVNdy",
  "key9": "5naVG4WP4TEPxhxRZqV7oaMMcpdk1fjJBhNwBbxJDqs5xCJEeLGD9iVujCxcKLzk3xtbj4esQ4v2mvCAZVjfQwHD",
  "key10": "3vSHp6Myekm1nU9LyyHvhYFBL3LL17ti9BY5YssBG7iRi9i9jsUhYNXt3M6qaNLKJpykgy1XSxyRn3fwsB3awoNL",
  "key11": "LsYaveRh5ezvA7NxQxgJjDZ8F4AfsBc221Se1NALgcaEee7e76NYwJCjr1BiX5pNTU4sUKV4hjfZ7XaXUezAc1w",
  "key12": "2Jio6Yh874xPSwme6oSYPqtCAJibZRPVDYwn9dNGVLvSRZDCoYGAh9XmsCa3b31YitaidWJDrU8T5F7x8THthF1N",
  "key13": "4Q36yjozmpG1qzLB3f3VS9qDpsqFr4RSM9s2xEgWo5f8pgMmtzuui2vcj9WdUNobR1doSE5gTYBAJrT1Za7YNbwm",
  "key14": "5x1gTReoWjdCg7PKy6sEQ563c6G6tDaLGmhM4niCu4SKFaHozkKhy6BSaV2RKH94v4vNbzz5M4WATbqgQramyRmg",
  "key15": "66yD64ASmJddWVpDv9ayUjNxqmFgL4pB2ckPWqrKa3bo7qjRzfqbtv7ucaVTxPCcCAMwxeYJe3ja5yQuUaP1R3WG",
  "key16": "3wYB2SWA9oBSkjCg8NGKD2ZYXDwAqQyVrQRq6iZ82ANiUpUt14oqCqh6hmspMDfFSxD55ScVkHQM38kScJ8x5GTx",
  "key17": "ikASLK2YrmnKH67MP3LQPrrX8yafqFvLtKYH5PvUzS2r46qhBfLu2V13o1D69rPgfA8z9tGD24yDrcDUmMp3mY4",
  "key18": "3VLkQAdZihfgxQtayZgnTsbp4FWGJ3pCCSusNiGTHNiRG5AZ595vbc8Ft8RDpGPMHXMEK1qm4TffZo8GgW84q6Ji",
  "key19": "k2ym2oufdoegxjZLfxb8duYXKtZoAGT2zHdpXTLzzrEiaRDyU3V2tVa9idLj33Bz4sHBcu3S63fKAUZH3SK7QmV",
  "key20": "3hXrsTNSJvBzDhbKnHB2ajDY4URAg4EYStXti3t6kCWTbPQcDu4sendi1uCZfhmUFDpcqUaBVNLpgVfcJaxzL2cv",
  "key21": "eVvhcDLQFkKG7S8iVhedFCBcfmjno95kkcxeaRypwDvKwpYWfb4oFrrqJJGmoEaJcSP6Ps2gAAr2mpLer4S7ecg",
  "key22": "2E25ouBcWDjFmSuoLgpkmjYktnAYh2LxNFsPSemUedZAKTkiavLZoAFpRbgNd5ZT7mrJ1ufG2ASUvAWUoa4x6RKL",
  "key23": "2E5sScFWzV1NrTu298MseN5arYfVGjchoMzAMju7fyg27Whg9AcbuEw2WePDVenJorLCZ2X6TBZ4LU9CtujBCqZp",
  "key24": "2QEdFvNDzj74DojQqNSFt6Ay4A4EwodBNN9CSxsFbaTYSpryxgHiu41m6RapofvnHuQqyy9fBuF9sbwStdC8EuL2",
  "key25": "5qs1hMjRcqs3fDSTTpJG6hrSxWfNw1auTRyprsDa6T9zNVpTPbJxFyfG21KLtUtkM1HnnUrGSYyNpA479Qr9VSbF",
  "key26": "5um6nk6qBAZbZroh2rBExjzCZVSCu1uj6Ht5mnKwq5r57vxi3DXbG5HDRJ64bLo8PLdtNRYpBdkFX8vagFstZuzJ",
  "key27": "5ncaLuU8eb6pg2te2UmHtwj9f8VJLrXjitLBiG1YD612hW3VYVnkX6pNYA5RqvAvmdNWZEk2b1H8fTKHSGwCMax3",
  "key28": "3EZ3BffcLos2SzgYeAtimAsNHVbmF6aFHJ6Wcf9kd3t5xAaYSFmBTbRfUT3M2qpgGvBUMYG9FH3j72wyCACufuY",
  "key29": "1kCKeUj6YiCQvbAtC7NPXVpk9dHyNs6g9GHLUoQN5WC127h1U94AEP3NMcsaygcMyVVZ1WRt9ptLezX9pB1btin",
  "key30": "54QNZ34p78aPDZnmx7CPRVvia5HSe2UhJuhftRuAMo35qiBAtyTb7QdWk5mEEoNHhBr7kcm128QHTHgpPHY9Bhje",
  "key31": "4BqGCyDop7horgjXE6xAsYEgnWy7SaZBQ2kPsw7xMqh8pD38B8foKraTLnydSFvX8h1w2LHGpT4bW6VTPzBmdoSW",
  "key32": "47sLbTynbKT5tjYjSkM6e5hQ3jvjPmLpkFEVoZ7G56kWkrpYQkPvskThqY3wdbYUVxSQwymVgmToPQ9nYwWv1Gcn",
  "key33": "54EuFtnyUR3NGt9gno76zHLsMRmRwvsk4Ef9uwPM8y2bozTFXipDSzVBUe5FCCr2YZexYD7Qci6QHXrNB64F2cxs",
  "key34": "59NPRbbbEZw4ivinofxg1zkgX49gLdtG3NtmUpHqTpFu9pwf63rBSgyL2fzJyTtRyX8AxXy6KRXrQ58Bh7qe7vZK",
  "key35": "4QcdZrrzWpszoEgdw23WpTNaK25cpky3PvKKDhhwsj411jZJh7bnzP9DDCZH2XmLVvAhUKg2PTKPhpTNGDgyDQpP",
  "key36": "37g2MgEK7tJXhCdARssx41NJeEF6KsytrB9g3v53pyqWmSasoXzZ1AfBLiGkQJrHaEg6gZE2ttGRtoPLdiyWjdsM",
  "key37": "2Kad3ynEoDieEE3moo2XAqCc8WP6rFgyAtNh9BZ8CspuCyKBsqNJo2J8QojyURNL6enxzQf3E5YNF6azQTfek9zc",
  "key38": "23YohwGxvWGw8JBqwH35puu4mCbAtaPUjECysi6VEq7tMM9dM2sCL3CNgcSVPjWw956jucPYv17Kp33XaDgJQeZU",
  "key39": "4yyrAy93RuXnFjAzGioWU4Ci1dZpHbk6jxxZ3aSVXqKAT5Vxy6Pbv6jSr21UBA6UshbgpdriQyPzvkgKakwQaWeo",
  "key40": "5B8zVanmYWV1iX1gyBdDvkty4uhatnvfLB9RTFyHmvp2PMTSNGD93DJhNDcCdgqNMsXSgXXZxyHhri33DnrTBDuV",
  "key41": "5456DmxF3noyEV6c7NMcYgSWuQPxbC1izsA51fdKY5taEoTwajT1cwNAKLJGYHKCDRMviWoLkrd1g78WiR16tmQu",
  "key42": "3qeLLqYGhcNB92B4M1jARu2kXQX5TxJH7P1jJ46wgXdAk5iEbNBiW6UAzatkvFj9C5Fk8LGk8AJAMF1Y5RjBss6P",
  "key43": "F9exH2bhoXn5Qhp81kGGTKBiSpve2edAtnvsr4VNkwkFfhJRVDhTsvCqGXnSYa4JpkbLrHoHnBAsfAvjsUA5XsN",
  "key44": "38m3BBUPJWarLyMgGWUW5EKPxTXmrhAer7nuwq5SP9HuQd3bpKrrxELwXbJoo2sfetnnUQZJiyLyYsBaD2PQQxtC"
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
