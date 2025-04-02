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
    "4ZG5qagarc7x9tWqKFbesWYdXPUsGeYjJ9nNn4F1sPHQWaW23QSzG5w5Rz7h8aam6wMkVfuXzDLcboWLM6SPevTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CvVY7ossLnVq5UwqHcfw8eumz2UXjJDj2YkWMESRSJqkuCcoWDj5hhiUaHwRkCNaYaEXge97MjLNtyyQujAKDzM",
  "key1": "2muHCci4g3PXyDLmffAkpyM4rNVhnCJmR52hSmNkKfrnrnLDzoeMMrbnKG19EsCSybpVLGoPW5KdG6ePXkc6FAmK",
  "key2": "SXK61dBfG6VpewsykR4zb1QN1WbLhC3oWpPvG5Hck5MFEPZEgo3r2nC1mJy5boBB3Ph4rYHeMGxZZ1w6mrFkY9Z",
  "key3": "2bPHWgXowuDW25sTWaCMX8s8GrswqbFvtog4ueVVMzStnkREmZCV27RJgM6s4zucfjeCxKigcegkSoWmD3okr5Dv",
  "key4": "2vE1CVJ5qEP1yoRtGDwZcRForCdu5fT2yHrBzvCdyuQiGME9zadLkuFypHE7uprFkEX32rBgSxtVZsnkkWmEcxdB",
  "key5": "CdGY2HQrfac8YZqmQB1B2Rm9aFSefsqLucVe99shZCDP8pyAtnVLtBie31gPypwmXQrF13j8DRHwAWMYGdnYKBD",
  "key6": "5AmBzVfQ7kES7y9NinksQFHNKLvVZ2S4ZFrcK47PVHqGdULHK3WYvbgzYHj8oXwF6WbBoRssQ6Ur7iQYb4gjSBKY",
  "key7": "ejDwf2B7F36ske9knQ7MFeLquVsVFHACyeNnpN86h9hjkJM9uXzd8zxu6ubNPDL4M8kbPzJW8GfqzAXa6ReEkkT",
  "key8": "4oVTf5BChNaziZr6MpW8zjQb2cKazM1TF3YfWZBu2bDkgpznb4A2cLJ5zrQyA4XHqQ3yU5wJF31RAhxvNGjFgVLA",
  "key9": "3UXLoxG7Tzjcp42uhaq8q7Hs4ydDLQukvQZjq9w3zTzXE7S1ho4Pj2rXTXBpQ3x8DG8WURWo3FWRAhb9512NmUrz",
  "key10": "5pGh83QUyZSrZAhXQZHyxgwz22LkpJoSGNgmaowu8s394Z4GRimTkw3dBVq3Q781Y1TokuWEnwhzv13m6V71Thmv",
  "key11": "3QBz2mpHfk3UfbAarY8S4p3xinUABqnaEeA1jRAhwdTZJD2aPqyDwhmVJFbNDssTUeVxAfGbRzWAvH4s1F6UxS5F",
  "key12": "2L4BUPdLjnm11qbp68NcMuxYYjLYFnKWyDQc8UTfkWxEqzmjwJQv9SXu9PQ1mH7n6gqdz1CRPk5KELLDNgmcBNxe",
  "key13": "3WjC4DYn6fCnk4MLmgV77euQ5Lb7qyxsEXBo9zEwCBmY8fqbh72wDZsasy5J8Pwaf83rdcFCPrRpjJxb1CqvABSe",
  "key14": "3sPC3ezWfGDXS1MkS3TFQhHSeAjysYAk7fQBcEroBUZNH5rN7McvHjjYWusnbn1TyTMmKucsMx6Jw5Z5oonZkoLN",
  "key15": "3yfWih9EUPESx8duV3niLNQEZWMsnpSJpGWoaADb46TMy6XKLWNo1XgPXut9kkj3UorRavKGy4VcHCwra7Cnj1KA",
  "key16": "2vWDWFPddSWyC5fYCb2ccorP7NhfPJidPL4KzmwB3rkSyqAbdTzAkepWqJ4X171MQQunL2pxbCkR5gxHPvkSpgCw",
  "key17": "4Gqfe8m29KsJwGWroWTAZonYCQjfVVUcV2fT5TQPXPKkQjggVTrqApmsPEGMvxgUP8CmFw3J64f7tQ1t4SgrGCD1",
  "key18": "5WFpNBhCKbP29MvpvCEdfvKUkymfEjDFesMbzxoHmnFsbP9BDPJdWWnuJ6vVRZ5dTyZUGHH7m38PQP1sm7Gi3ZVq",
  "key19": "gusUBWdTAqdpNgYYLhTacbUtdoUfX5FmxtqCQR9VLeVSFmptVXKMThYFFZASoo9VhE56kGdbxoVEDoiaZAqWzKe",
  "key20": "tuT9j3SjgfRizwRKMkJxCvsjutgWLCnAr1uCVB5pUyTVm86SgiyMM9MwCUrPJxYTR5WUeK7iDMMAjgYWtLsxc6X",
  "key21": "fzDwz9HYFtaeqZhsbNnFcQF5g4mMhPwEx8xV6reH391FgBESbGHuvNdHTcJB3ZxWHU2EABvyB3NqTh4XnMN9mKj",
  "key22": "4woYK5mDrA6XzK4XYmTuu2aDeHvPut8gM47ywAYgNxmCMRvqxXs5zUexkH11aeApwcD8P6trMkMo8THeZUPYVm3y",
  "key23": "5uqo2xdfRRZC5JX9jnySGdv5dC11DcYwEJUvNshhrcdHfvmW2bmP3YuYzkt9XASGs927BKDsjJekbsNNb5TbxnVc",
  "key24": "5UAvujru6fS7M5jWU5juC6zh2argaft5STH4sMfuznGXYpdxGfXiFhujg2ZVza7wdxR5eD58dn8NTRe4gegAsX1S",
  "key25": "3MNhaLmSMv3CzMe9DHrrg6qXeibzbBbXhFfRmDYg2qaY4zaoX5t4GMivTFSbXZVgxUaSYSawPzthU9n3GfkRzJmX",
  "key26": "2HaUE12rYsFAyUafoSBwDSiuVNyiGZn4i9ji3vFoRFcnGnRFcGT9fK4c8Nx3V6Zk2jqukiqhr2KKm98zbTMcMLCF",
  "key27": "5HYLBjPK7uJDUiBh2sJGrzhsZYY87UdyyUKauN9hh5zyWq5erNe7rtzcgY6yW58JGomyBxucF2RKuZZpTCrPziQu",
  "key28": "3mwu9ac7v4E2vwnNCTRQ55ksdrNtkKuu1kPw5pzvgWwEvHijYNEmEj7McTPFr7thF6Y7KH5CtG4ovEMuSKDwAY75",
  "key29": "52dmVvpEfwNdQyqR4tgYejumnqH9689GeQty4Kd4F8iUKJe4xfyAZEzUBsJnfF6YoiT9BcTWamWYskBfVLLtbVSg",
  "key30": "5cAHtVnEX2HnUnu5vjWwDoKwX494ajkhRpkJjHuJ1MKHymhxER5XCTim3TuMxzqyfaQnJGC2LCJVAvXRWYtLLxTV",
  "key31": "4GZ9GzhSXwySRx7vExboS3fdVEJoH5p4u4LdzvRCwh8AVVPsMaAzTRNmXqvuEniWkkYMDkVZsyRoMvVt7X6JT6Yy",
  "key32": "2wNCZgKCQGcQMjPDZqG92FcdjMitm7MqdU8eGCNB9Fdr9PLQ7tDu778HcpCt3tDmR9wdBHmg26rsc7336we76Y9G",
  "key33": "4Ci5eWkntCYvvqx3U22fwzBHrMD67YPaaw1T6QfLYRQijGv3gV8YndNhHAbDXfsJ9qWVRMrycFps6jgLQCLzDRjw",
  "key34": "EvGjk68LZtUtNnryU2en4EvSdhWjtzdsWMxyp5NiQaa698KRUs3UUpHdQsrtehcrcD6tsNvuRUyXbo9zpFasATL",
  "key35": "2vU3WbPgC1MeF72GRZwnyxmwSDZaWdh7bc1BBQN77gLF3V7gAD9GZEgj5ScD44NofusaHfgtnfNMLrf3RyL7dUxP",
  "key36": "3HY2KYBoBR3Hj19iGdBajFrrSMWoioipxTQ5Ugf4uV8SfJh7yscGDZcth9o1SzsvYpwNqZsudbQcZSUfT79WBmZr",
  "key37": "4uZ3DdD1y9ysXBZgKkQ9fXS7hPWUdJuJzAbZU9HrstxKfTCxh9djnsgYfBdXHvxNZ4DC81c1hx62z716TXTM11c3",
  "key38": "2sTotqpXvL4rt296oCpydGTAU8kfpcwmCVk8PH4iRdkwQj3gyLsXdDgUbiwp1PKkrXQNvRWfGRTeVyPQyVrRDPii",
  "key39": "2FmFyJThCUbBgm5sKDJ9YNYu2LpzsPQQ8ZJqvoYWuUJJHhFCo52Y59z1pH3ryKRZuPKVyCBZy82sh2J7ypKC7J2z",
  "key40": "4nB8L7kHVJs3v2FqSrMvarRM5zKPSauPv67DDuGZ19C6kXHTjdjHns6vLqrfEUeNUajHco3inuFR7A847oRaQwF2",
  "key41": "21CdTXEHhhjnymckv2LnzQwnph5SyqzoBDLRAozmL6WUrHU9ygL4Adk1WdLiGNc8HrDn3mx1FaRsS8WFRf4CFZ8q"
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
