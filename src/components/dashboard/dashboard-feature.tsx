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
    "2Gdzi3BGwK9nsF3unyqMUbtAcEbpBctZBdsooXD1GH4HZS5JU8bf91S26dXKQyc4evHtvDWA9TSYX7finak9AQp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mjr1FjUTfP4ZQGjXz4e58ekYMSqxKEmhmgcjD3pESKebPc8KPqocrVSZzXUm1HiAJzUTRUmandgmoabgumQY44J",
  "key1": "2D4YQydEvJaKzs14JpDHsVhACJ2TjzfCGgJkv7sJtFH3dGudx8Bw7qLnmwUqRWcbbh1hY838HfXG6Ew8fLzPfXix",
  "key2": "5PSWXSzzaqi5R9phRBqQMdFxb7Fvyi4h55r62cYvx46rxP7bwc4CwUbb7kxX11NEMd4nUcEkqhYmRuvwsRWfeWzN",
  "key3": "zWuHXCSBag2LboSUeodBhyeGkiZQKVdpddLruKcV1LxRa8WQMyVKkqCT4UWym4cnrTjQv241dQm6THi7hNkXZc7",
  "key4": "3aHVz7MiGng73fEwo5ZKT1CsXKSGouMCq5vFKWmD1rY58bbXacsU9wVaS7thyj87yCiZwSfmGJZsaxK1XKqF53P1",
  "key5": "2XtetUeaVkEKYvQQmQsqdvDTyP8ACrbGizvPBaTBTYuB6xMhdRzH1UPN3sFBvqDdULesCLJGV7raZ3nFhcJC6s8Q",
  "key6": "3x6rf5f7U4FCvyC8VY6KTVNgGLBaYQ12oorC4nteTx4kwky2LewG1CBDX9GEXn9aZH5YVtsdtoCk5VHrCDzrjZph",
  "key7": "pv82g78EjoRzs1r4HyPxfnAQSKL5k6hF9T9a89ybv35gDiJTYmPqTtzVqPQwNNSyfu3RLT5ZN5VGbaUXX9Fvg1B",
  "key8": "3kYbciBzgoHR644STn5mcCtoLGKTKUPd41X68XwbwjZe8LV52dwfCjKQjQitEpZ9r1Yi4sZZ94KGruwtWSQ7j65i",
  "key9": "xeaeXwEszS5CukkALEQ3nBy93zdehbuCQD5Bs8gcqJKe9NbtLmYVABBcJVUDVFQdaL7daTtyFrhcFGXmQWgPi8v",
  "key10": "UG7JsBuKTX7JFPwYvTacLsoUrKV7NwgqXLSMdT27igRwNZPMwjVjSa5vNTVwXd6x8B1UvT6vMpActD3cr1eEg9o",
  "key11": "4FRQjGpE7e6tCEjyHw6ae2reWXgMJhtYxNXNJA83yg3b1SodxjWu979vnVuoBJDiReZH44Luy6ij6aqKK5Vxgnzi",
  "key12": "2rHvrehmfUourEkKcnj8EgNwuFHR3WjCxRsPow16vt2t9KCM5kxMoKugufsc8BNitSXGrtgJifXthULQeD8NG6Xa",
  "key13": "36VhZBBFBQnzF5RMgN1zYFnp2anCoER6tSLpx8AwzF3RF4MGGEZdJB2MLT6UzxwyQnTBLs1j8oYQmkHW5LnNECiM",
  "key14": "2kLgigjw6KAceffBy32zjKdDBCHy3uPL1E1wFuKXvri5AnYaksVW39bsqh2z5AcHBLCvN7F5MMpaDRVH3LW42isz",
  "key15": "3CMAtkvqxfQMJyKQhUDRsVWgCuJzkz1M4X5vouMBc2vKifN9YuzuFxbUS14f2XEZNXD4oHBV5vbrvsmHXfQXugvZ",
  "key16": "5Yb7du8SH6VcJL3fVQN2HnN143TNF7fqFeRW6RVoEEyGBNWbrcH4evbQ8T2PSpUapwAQNSp8JwC7YLM7sGYfpjdP",
  "key17": "2QC2Nn2zJAmt9BfHiGnH2BnHZZGfphAWgFAyE2spkRWY9RDGw7XLVgXxVwW4wGpayA6XdDazCufsSw6CEz3SXyNi",
  "key18": "5AThnSinuSXXaUPTUmV29XoxEUhkxkNEdSdhVdm3KdNXuGiP4drcq5o3CQPjptUXWzCuotseggXrSBeRvZvHxTKH",
  "key19": "5qgjS2NB6WzdbSrrCtcSkeAY9jVsdKputVyae9pBFyRcJSsoVrodEzhETmmuHm64tvBpGFfvQK2EDDT4AjTP3nkv",
  "key20": "4YNn4uUPbX7khqUiHwcvaE7tmNvW3JipH5XZMAGRs2Zwc3L7hgaMKX5kychRj5aMpxRkFpT6yDhtnMVQU13H4pr1",
  "key21": "LjJDmTsnwNmCENdKQjfgP55AK3Wh2ebNs6f7sU8QhXKUtkKFMVpGHRogYkLkqaKnfW5U2nxeiU7Bg9erQ3Je99g",
  "key22": "bfHxyKh2gzZ5bxAosT8kKvnrn1CqFW1RUPzzJHbVv236NEKJy1249HtJxyazfjYrcREs8b6RaV3RQ4a5ErGBi1q",
  "key23": "2QMVyzooVvGjykb51ZdLgGziBVnvwdW5WpWx9mDNSKD1Z3G8AL3DSRe9C2AyhGB2msGsR378JnZjvNwngZio9Dxz",
  "key24": "PrwRuGrefX5yKnmPEpYgtnuRGWcWmG3LYjseL18wWh6Fazbx96n8bkZTp5hoDJed7K2YgvGEnXJ4ZoJvReWNfqv",
  "key25": "2W6ZDuponhfE5q7bFpbNZ36mdKz85XYE4N3iMAz8NWJZ8R4qyHbBAMp2LSb5hKHVAnRzH2cvkkczTLa8p71HP3c5",
  "key26": "2Vz6CT7XoCBy66VZtzRGRrRcreC3HpYwSXsrpJMYNAF1b9DfKyBhJqS1EWsg68kngF1PXy5sH2TjJwLhDr3FAsP9",
  "key27": "5xb921Q6y4GyMJbJWJdgvri6v9usZpE8dCbwEjuqK7gmqxa7taBPZdLPDHLzUx5gnZrodANq7o2KwTbNxk9qr5Ai",
  "key28": "2ECBJEDg5uN1G2jrNrb7oZu5ks2bd7XjtHqvwww38AevXuG7ogQJkTt3W24xR2aYHUJjNzF3kF97BtR3wZJsvFXL",
  "key29": "3FA9J6w7oMB2BMKFgy36p53hkiGUeUwriD6iRkZzvvUKaYsomWSfXqJndp1B8bRWpRmMhjpy9SepCJGyFZ9oBGbv",
  "key30": "41HYxFz89YgyGvGphWDJaSD7hbX66ydes9PhtEqZWAZbic3BgDGeT3c2udWLqkwk4QJvgGegpdtVD8scd2GgkWTh",
  "key31": "pYLYoQroqD7LNyaKM6o9fFcij51YKUnK5aT8zLxsTvs8ap6K5PC6AHzUhyNJzYYLx8gfJbRt93nwuj8RFXtx5ax"
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
