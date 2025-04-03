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
    "3XKxxs7nCjgfLebsBnGwAxmqVgFbb3SBhkQxcoxcqnW8Q6shzeHuiPPotiteiQmF9MS9oTodwzyXCRUUZUWS9SF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5basa3poMr14yNHaHZY6pic82tuoRGzwWDxJUwCjuLNur1d5iun5L13L3SW7DuV4TFGDQ2QbFLcRQo3r4p9iatt6",
  "key1": "47WCbBFRn88sfPrNBJ7cFTU9KQGEG8EEWNumU9udYpHTQ3Efz1KscVrNsD3yFca1Z1rpurSh7MbwN9Y2oPJC4UyG",
  "key2": "2UFxLW9yYqM1xDwiCLebPZVoZKt5C98mp5WgRZRwPfbyeiNf2zWybyPMGAfKwYFy1Pqp5kspTPhLjmKzS9YzBU9D",
  "key3": "5bVe6NNoT5sjBbyizSahCy85ACY2UAZojpHutRRdkzswbh3tUfQmaeUmeWrNisK5JFp7MXnjvuQR3onrq14ENYLv",
  "key4": "iAi4E6Kf1uLAhongjCn6STaoJgtBfPdGXHKtatBQnNbo74uQjET9fgyN6gyv8n2nb55TZdcuKUBSmtLah2TU6GZ",
  "key5": "24eM1mGVByuN7Aa7xFQJ4UgF9AukGzJRCXymwYtqUS5geUTtcPTHrZFQ9rW95kMonumPUDUiHuJpUHsqUbEahY8V",
  "key6": "2Ps7v2bthqroK3HCjx4snKFFh8L181J8B8EXawjj9HfSHYzcKMGCZzyp6kYz5tfcn7e87tBooXr5MjwagkmbropB",
  "key7": "3vUjyHFuByALY6xA1ybHhDeUzEKNNGeR5kHK6MUnRwG7dHXYNqsS5cV5vjyWkLbWwo9QtAa6GyK6Pg6cS4g8KBBR",
  "key8": "TgvKJ23wSSS8uiVJo3mnPYUKeVLUxVzjMz2sc38po1p95ctY5vvcFmrcSQohXf4D9QK5N8USh91QNFfD3WT3FFW",
  "key9": "2scxmD3VmAzUsYVHrN3ujvtsRUjSg2KuTzGU9gKuLijt8q5P13p9mr3p3aAsfJirRC7xbGnrf4D9nLbaY8fU8yyY",
  "key10": "RJBaUksCeamUBbdMSq4pvR2E1NwTcyzuMdjopzVEPthjFh4n29tbLDE2N22hc7ENSebDBWaPT1TusnvuArt4ZZ7",
  "key11": "3h38dVWo2yrVK4qEGJPgUoiGDEekBWvuNfBZfDo9Dy14Z4KKcYr7gXmpx5ByYiSyYvyYtXFjbkSsxrvQzCvDpkch",
  "key12": "fFdgoPXnRc8YnkFND3ACWEEqB5h515WgyVZs3riQ6ZokTpLExJSEX8w4PxHP7yq5v3JwmuV3xvQsHTTuWaE1DzZ",
  "key13": "BKr8xwZCZtATgb9nVhTW4CFBVnSoTxbPqor2qmL5Gcp3pjJ1iwDAUkvN1J7LTmv32MdbrjsVXVESDBs2E1Q24HA",
  "key14": "62c6KtErMMVsN272wEieQzr7TVZf7LMaAjPoubiCiChe8ps2fbHsPQXB411zQqog2o2ttw9Qe5no3jnVE4MQE29M",
  "key15": "2EkbqiDbv83x5ZUrxUoWZ1aeBvg7TZdonFhi6rVjjcCFANbP2tdFAz4bAfuSnHCj78KNgU7BYNANWRVDpkFp6NcG",
  "key16": "3XFuJRVW6hYf5Dp7A8SVkHafcVmaiBhVq3gMbaQn6oug8CqNrqWtAxu3FLSEmf1FvrB8ZMNL5DCeVSbT73RuWPv2",
  "key17": "3FGfcpfGH4jTRhTQBk7sFWLwU4hutLqeftHuM1usTkDPpwJMkEvHCr7rcU7qiNd8JaqJdwBgHVXzdt3kYaW1DyFc",
  "key18": "5W3TnUioFoj2QaBFo1ns2yohYFGxhLSiqMi7X1cB3LXrKwHJg94pvckSA8Qqb6BZGfB5PD3NLbChbpm7XZNX4guM",
  "key19": "46WoJep4XXv4iZMrJq1o4xDHJCUdj1u1xWbo1wsQeZD4NjNGCn25bsBi8QsvYgwwnjTrzaEt6Pmda8FzLCBPPjqf",
  "key20": "67QfN91zfbsAutBij4KGfzfPWgh1WzRxHTQJGCzNYv9wYQJNSMq4NDRyYu9YiCbzwvKi8kmw3QD8m59gRV6DoedT",
  "key21": "3So9sFbDQtPuJPB4pPQZ9iibbMf9xsLCHJDqpYvRq1WrykJ6uNwQgoMUo1ji2W3zH8JKzq55DBRpR7ugB9y1Npgy",
  "key22": "3whUApXjZR2RbEYFAnRj81TM919ahtdPxGfZpuLrZfXEdzDer4EDPeseE9Ub39wWwqLHHKnHeQ4VyFMYZG3Nz96H",
  "key23": "3osPiecdan82zLPZu2kXJTfXQFVcjcxSwjAsXhCHkGgfgPXVpsXahG7V6fKUtXyYaiJ6wiDbyDVvgeeo5qzb2vrm",
  "key24": "X9wacVjcYkxc25kCu9tKmw2GwLXEjKaR33qpS8AQNW8rvo9RTnL3FUsdiBLa4ViLVEyhz9pvt7sfWrDj8aeXKy3",
  "key25": "2CcF6orbvQjekWNM3oBLBVjmGS7zBmq1LmWSrV4sCwgN6abfoCzm5AQospVt4yvyLzH8cG3F4ZiXvr6WTrin88f4",
  "key26": "2Pdk5eVW36DA7qS9rWhYMnmZAhm4n7s1p5CQQGXeJfqVdxoiwsa2h5tFe8L5AngXATrySQ62x5yjY17USq6zbwip",
  "key27": "3sfQLBnC1b3yENJaeFyqFsAzSkF9KhutPPc8bto2mwarxqkCADe3n5MbFgGMtSveytTRx5zHFa6HLpvVMtgaYTp",
  "key28": "4c2GGKJFojpA6ZFrW1eMphHJsARnheG7e3mu6CVvwGLrLNZNF26NPxsAdGwBqEnADpfYnpyPkXkQvNWtDQyav3xX",
  "key29": "5qc1GvH2ca3Ahf6yacLuoFm99NqAB1CRKE2RKuNy4Vv1CH6r4n8hNThX8TqtEwveUBJz6o2b7cS5KyxgpEtKSATJ",
  "key30": "5XpLwvL8wDbtf6F5x6Lv7AVTWnVabi3Sps9ujVnNUToA7Y6GDucSgkC1Do12vx2WTXqZ2GYrfht89cjFTG6aRfsq",
  "key31": "39jVgYHvXJayE74uHvf5e8vATuK14utXWFFLprPdfLrDyMTE51raRSDCGh8BfxCU9TFCLaNZutAvtC7cEowwvw2n",
  "key32": "4XtBc4qA8ZmrLw8dqNJQDkRzX8QVN3UeT7BX2JPN6F5onPjCKvpuTYcRd5XZUMGkyNhtXKkq6RXnLWxe9c6ZaAfR",
  "key33": "2MhTfc8ik2iacBUSVPy5wqrpM2TMxBJD8pWUznb7a5RfrXRT8sRe1xZyVrkjMbgx98kk4hc2VKXQZsHnB3dEmV5T"
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
