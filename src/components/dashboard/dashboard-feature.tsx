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
    "5cKEm13jzsmKc7XHTYxPCPSf6zVUenjiUcSaYAq3v6EezvAPLgJN8g6MQsRUALaR3vygjhBU3cDzQSNCwsvW1Ukc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gu3TCpdJak6K4nFevj3wkP1HsTwExGbBGMbJhbpCuPj4Yfa92u674tuCz8stPYurxLTTFZc6fZpZrNmDuJygTH4",
  "key1": "4kukGebrqHMbCDCnX14enUzvKaynuy6gmDbcWbeKqrFseFATExf9ZHuHXpPeXeKuRuuEnzvRoy1sRGr3JCsY79yp",
  "key2": "eWhZf1KX4YXXoUkPRaAF9pPS5MEjU4RSJWgdQgxz3x9V58Fxp2dxCiuoKtW5rvS9EzsLD51Cou4nm2cQAk96jJ3",
  "key3": "3w2cB1mdWvobNtx6iiedh3DyzDynSGVuuyyHfgv6qatBmarCgqh4YN4Hqeo6qp6CyJVLxWPJEPuZx4hHtde6m5fp",
  "key4": "5HXfyijXMa8YqUj55cBkTshG7zTDNxQNT7wNnBNR5Hm5BBw8h69vRCVWzQWbtgf7SQQWDdoJ6S4mqDA58BZ7cGdF",
  "key5": "3vbdv1i35JQ2mnymHKS2owpXh1Yz91WZLNj7iUJcZzu7CgaBquhjuidY8d5FEGTh2PnVacDePqWfbBZBgaaZ8VXu",
  "key6": "3X3dSfMXZ7NjvT1vELt2ZutDD4S1sEKNhzgdwj3npzVEmf7MEUoUKZvtu3bwPaeNoyCTocrVWBugk8XC1yNmdfbd",
  "key7": "2YaxzZNpVyuocvqPsCxHpqmgyuB737BJYxJT71jMB38hz3yehtDEPHPWE59AbohsGBinJgvmw5fUd8WR92AVS8f4",
  "key8": "4VybXZMXqm6cZNgmZeieCxMxAoYM7XDxKPLAPrfQ8Q9Atbh1eUF2JUAT4aemouxH2aREDASi3VDb8fwbn4ARX8Rv",
  "key9": "3unpWZSEctyomC5gWpX2ZEpXNJoCZ4gqmu1p5dWYtxtDxhBKy79GjqkVVTe56Vh2KMTd3dzheT1WhNji4DvGBhJz",
  "key10": "3FgixpNmLBVKdRSNa2Ei7LvhW7FuED9UoYvuKQRHyscUierV4E45AU87NSPRimwwyThnzhnEzud1VEFnaxKmUdUc",
  "key11": "525ipT6y5n91b1hbmwXVSzf9not3y4vYPmwCKn9c63MZqkjDqU2aE425zCtjLJmW64hztRUuuwHTr8mP1qiS6Uem",
  "key12": "4kAQxBA9UBJEp7Y4XPEw8tbuDtZfrTddwV9Feqh2gFDthj8jCtVGsMtkJUYKfQ8xuj2RVTUVYYAw5bnPacKwzKHW",
  "key13": "2pHSHV6NeDDY8JmMKLrBKU8TBY6YYNbiK1ovbppf5iESFPJDP33XRDQr9s38DqHvCF1fgo2iVzEbPaAmRBsZcMBH",
  "key14": "4omuXPLvBQMgRMta9sVZZKgXGQCTVeXdH8QU7JUA71tLTgXdxWR8n4j4jmnyXEqgAqMBVzajcAN2ukv4gNjzkiWE",
  "key15": "5Bc6qC7HRfursRYXtXg51cdYfPQMdPqyqE2vEKAecQTviBUW8S5JTJHpAeNE3xjik75kT97E1zC9wy1X3AUUBAf9",
  "key16": "4S23gkmvAEQr8UjHX5XotnH9eKFm7YwutyPge8cLKcgrDueGq77okk6q3z2sZyMG192K82frHdFQnDfZKvxe4h2B",
  "key17": "3pTFqxcyDeJB7hjoqqzfFWNpRk3FdfwkqYjJTR5f6bxuawbEk7mm8TttwHTydsy7uyYTtBo3dDHhNtYSvi7qPG33",
  "key18": "45rK2qoEZDE74rdn9cQ38pEuygSh77zndcDQ7E12Pd3G5z4s5HriWYsou9ofxBVwHNCBGKfw7Myrx8BuP7VdMR8",
  "key19": "Kys2nWUFQ2BHoPPqnS1pUZv1eXudCJbyciTNmPYD6B1JGvQYzcrxCi52RVoLF6NSnsx9a2Zx5cFNcX78dSQJoLY",
  "key20": "3HzFm34HAymMT52GaQohgbzRk7BNjnJMNfbr837taqEjiDJfYMZbQxqtX2Fwn1CA8qLrmr9E2Xj2kY4JrgfK33sB",
  "key21": "6ARr2QbmSSDwBaGrFaS35mkMD5q2SwHcf3cS4weRjjEYs8yRmYrHxxi2TpkGgfi5bve7NANNaWYsnZjbqYHvoJZ",
  "key22": "H6ydyXJLGtQNuL1aiSWN9ovEf1sPFcADJdrPoAJPHzrApPJczaGmqw4cK3oQAHyrNqikTYq6CqJCTCFHJsWMpdC",
  "key23": "48qkiskk5aKChMLASJn5yx89xJtVHVCAQVctqecG7Cqhgh1kGb99igRquyv6Zccebb7461oY636dpLfCFWNZahmV",
  "key24": "4Vw6UaoxrHzNDi7PtHjY93N8rhaatHVdDyPtzYAZMvQ3CnBehWYZsHCeLpYV7bmv4kgz2Vn1vrk1ewhjA6m52CHj",
  "key25": "2mSkRi3Yd6CLJEuq3mx99Pmzew1bLMorQMYzfF4VJgXckmW86GJiGTHHjHYYRGi7DCa8eJXH5DPZeP3oNjZeqUqR",
  "key26": "FH7Eemhg59HrjvkqWHtHMfyjhSZ943XQRuJsrzm7HrCK6dL1XNj719xgXWM8bwjVcNoA89hApxRHw8QUxpQPWVo",
  "key27": "4uH2gqcGJWfkEeWer7hCw8VKRR18kLAxRTNmSEsuPEnFGA44uxrJYwgx33rJez57V6UK2fBWft2bnXcgnQqDqNTz",
  "key28": "4nXcbP4EUwbygztbstPtraD6Le9MELyF6GcAQr4QQGsMk2Wwu9j821BV7ReW2RaL4dxhPKgnjrAsMex4FdbVzr6P",
  "key29": "2hPFYpt5Vy6y4ahkYtzJeY9k2jRi3Jhj7qtb9mEBGQ1A2es5x9189ygGGxvK1MDvdjehgWUDBR8K42Qb3DWnRkKH",
  "key30": "26DYg3nVDMsEYBuwEwu4wpnKJ9f1r6ANAaXZ8FHhFcnQqdadoiefScJrEo1fWjTbdjbMptBQKsM128YvaudFY4Pf",
  "key31": "5EuhmNATFf7ondt9qqTYW4yuaLKYWa9EywkZZLh1RDPSFD5eqW6n477CGcaAwws3NGKK62qB63HmDKkmwjaqJNBY",
  "key32": "3RFrbhPFrZRZa7eZPB4pQVNBCyDyA2JgWArBfRNXacPeahErev6sx1BZ6xMQ9jyXvKGtthwNYowynpohHVNQRSYa",
  "key33": "5gdnSLcKdXHphogPetQn7G9aU3QFSU2SEsvkdjY58z3hzhNy8imxfhKTpPsqZRjkt6wo9oC1BQ2K5nJLdj7oPGGz",
  "key34": "xyXLKM6Yh681NQ16bS72ABeZnCPYdS6tgqcxjoRbb1j9HBM1y9KphJj7gf7sBbFHBkiAoZZPakHX4mXdABDAGVd",
  "key35": "65ntd2WSJmtLUiXozeqqLtDPi3CWaaNJueA8ztzAVMMnJoddvbURMZ3Hf4urRKGg1HpopPrrNyBQXvjgUrPAmeBr",
  "key36": "3ZaVozzmvgYQKvZU1jGuC9CwVZVfRcKSwanHHmJCHeXUfH7DHNJyEYnTdvwRh7XxtThknMtNtfhBoZRV5JGkTKuL",
  "key37": "RQHCDP9JSwcBo3DwHy9ce7Bbizg9ai9k5du1V7oJkxEz9J4tWFoVJD6i27TxtALEjgc8BBQWgCtxSf7mU72xqro",
  "key38": "5ByHfAVWdXHKC5GsLmmxN2e1zfBdhrv6f3puYwhobWtWsgTEhPsNMPHapmu15Jnu7yLxtmkahbbvHKqK1tCi3Nzw",
  "key39": "43BBwJNPmELL1wAjrVbcFNbM3LkabBUbv84nrKUMBdu1LmG575Mba9p5P3xBwBaXyiSGNNoMN5PvQxRDRxirAVif",
  "key40": "5dbPzsShd6AbNqygWVm5AnzboxyfejK1AmoaCD6DCE9WLkrKdcWLzofc17KTZzukpvA7pijYpohowzPmEX6UFeTo",
  "key41": "NH2mQYHKwB8tJD4xxE3uKJkZE1RmrEAvRuTxLYLe2Qg7z5EEZLHxTxJunU49Wbg9dBoKoJ7ZE4wiyDjc9YQffsr",
  "key42": "5yh1JD6Rb8ArjjzVcCNzPup7xz5nyJW1kxPUdKov57288TSZyDXyedwL8LjNgomkyj5MTTS3jUQwyNdyetUrjBoB"
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
