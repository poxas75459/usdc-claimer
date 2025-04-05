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
    "546C5d8NCQLFLumN8DRWjS31jkdbGui8wurcpTqGMtCnFeU6GeHBLXdHpuK3cNcQzSyfWqjKyEbgGAnUNUqE3dLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QCEuajvA9i6E5ATbMoCqa6LpfnfjJJSbNaf8MKX58xHuecQKwwGGJEewsAtDBSKTbJw5EFm6hcKabgLDCgGxu9H",
  "key1": "36WM8Ky2eZkZZ7sSgxN8HaPo3WH7rWPd6QzEJMEHHKAKNKGtQtozmGn4d1pDPASRNmrAXFXpZkV66nHq4dfcvmkV",
  "key2": "61Pcphiuj1HbMjM6YAMruqY53DsDSPk2YxityfiGVSPGJNhJaBgbX4S6CyXtHA7NyUULaiA6wqpTbyTYGM7e9e94",
  "key3": "3Zwde6VzAU8EtkYLiZYDKA25jGhcM1Hubza96MJkmcq3GnwXCzgQC6vCvUQZYxwvYcAjphXQuHXrJragF3YWZyxX",
  "key4": "62rk4KyxxY3RKwHAtNcnBnstmn3LNa8vMvgh7MvbdNBkg98ivGGz7v8FypE52QEWvMfMrTgb1SFBWawjqk6wQKXY",
  "key5": "4BeJm3ipw4ETcbL1fNejwamwGxVj3BUyS4n5bxNHZ4RDebvXhV3o5cjjDoK9PBrWxdZv2cm1ESdZwYpVzagMEkeZ",
  "key6": "2bdAkKsGUEzLkZsJgspBvgo4xfgLF71zVf6UWuAwX6dEYMCujYZyt7Xv46FLDZAE7d4nJPGPSf4fvQB9r6pVjzeT",
  "key7": "3aCR9ThCAhgR2QyHUAaDrfLq2ZucLwEatSmmuZFuNuTFXX5V2oHonkpBJYzuKyzwsxbWh7bL4n5m4x7cdsKu6d1j",
  "key8": "2aGNUtthgemjJ8f4UuQ24ZFxLHz2Hy7LXaG4QpJH4vFuC479CSVPoyrFhooAPGctUrfhNEi2pi3fEuyTocnjQ4Lr",
  "key9": "2Wsp8X5URSiDiRyTWuW6LA6xqJrgyzNSf2jDmkiEY4m6tzVUb9uZDoFShuhwca7Jdyw7PydgHQ85hWEDYoqVAoSi",
  "key10": "2jfXEARpFRKzmce9am85cWqufVSyZFDikskJRNMCjuvt6ZiMCb938sCM8oKRefphJYTRvgFfd9URW6x31S7arzoN",
  "key11": "3zuiQYLpx1r16fD2Tf3wuq3E5m5CyeNEkYKNvovxUbXWLc2Ex69JGefHyp5bvbQ7dhhNkVymKbn4wWG74C9BsK4y",
  "key12": "5TMA3MjTcivQNbQyBBdVzmPrhcWuF4XwoAdfjSDm7ivF7J2qg4ujrADWMEtBrfF7DRyZiFzsttBBU7Ts2C3hrWBX",
  "key13": "57hG376yAAgkfgriqEUifLo7zWALgpQbeNnn1VVTGcECFGSGL2BCB56H1Nngxcwuqdfr5u6eU1vU7DsXuaeCAfVk",
  "key14": "367xDoR5AoWDbhhoBdpDGAFqUxV6Y3bZHxHE2W98xF5nC2YqLhyWcfhYXjm9jbsck7UQhN8PuvRukAzxiAGbLpNo",
  "key15": "P3dQfTwxUApfnJaEhdiE57Jgi3X7cc5oo3TtnhBxa3EszRzibmdc1gtifZfsafUkzk8Zm2yr9itfTmiLxQ9esNe",
  "key16": "42iKYYDpxEaqJ7JUFXUoMY81LCYZguWk8qkEp6NrBvV2J1GHTA3r8qSztySNnYXv8RTkujWUvfWYFcZVhjpaJeTY",
  "key17": "2Rx5qBCVXDdxE4A69bT9ExVWwVopF1dN8L6dzUw4e8Vtc8UCsG1e8syydxav5kQdhhHMfHGoTBK3EUrM9H75AmKz",
  "key18": "3dCbEEj5HggqoksczXArJhhJJGBXRRAEX4SnJzUTiWJDWJrvWpcWYhsrkzEGcTYxLzySUd68TM46B5TAJDbdgUgz",
  "key19": "5uJDrRDiE6D2Twf93M3wX4QDzgJMWq1zMXZXjbgUcVrDppntTuzuGRqrUqd3ogA6RdYg8vQpxeVdjesb4LeT1HpS",
  "key20": "dSpGbXB2C4GcjAHatLAjCqUd94W2JPxixZPaYi6847AKP19frPkJ9GjAoZopb5NuSUPrKb7xVkZyZmnB2M3sWzg",
  "key21": "7cWKDGW8hLLNNxPkWDhxSkcc5YoBryNwgYEB4mYZTkRdEPGzj7SBvUR7NKbmR9sj5whENRwUNXn7w15g4iwki4D",
  "key22": "PDWJ1GGAXzntt1Wm9xmrhkQS6giFnBY45iP8PkRXcZGE6xGaLHcfeBZgvj4VhdMyEZui8Wdkf6mnJvGfa3Q1RNn",
  "key23": "qMEK2bzAC2wREgtp3UEGMh6uJowqUwpTnCY5ERCNKmogTCJTgFCjwAephZGc1N6cGowR5j8vscU9JKxXrbPtVnc",
  "key24": "2tioexjzkxApaCQHvQPN9a9iTH37xZEY39fNNf1LmN19NH9FAtbXiLEPsp8pxXyjh23c1P9PFaTvrq4QLHULcYEA",
  "key25": "3AVYFEUdVbjJfSVoa6K9Q7TcGHQUGa28Hy6sRHnwChc2hmb16P3pZBqaBoJ6Wm74y5Y3oeWD6XEQDEc5831JZUbC",
  "key26": "5Ssd532QusDLFRFjrA1gtnqr2XnNCVuYqpPtG7xNfg59DE64wrA1tRBWzy3tCsCyEHjmx89QKEKmLxUzAGPVgfL9",
  "key27": "2xrttCpRDtSEizuF5RmUSriAxXWru6kY9RLdyGYJu5KoUqJQFmBGkGAUxmqodPNA5ELQa3d6zKycu3BFGP8GU894",
  "key28": "tYw7zKzBsvMVefH7H7itFEihHSXjVqy9rVUt96RgK2rWuQ7f2nwFASHA4xivmEDHgusk2yfeuRmHzFaftbwJ5qr",
  "key29": "2VXodArcRW3XDkywNG2vqjc4WZxZGSbpJnmykoPD9SjqHjsnvP62XqEs9QuSY2XfcQaXZWcQVqbnYiT3oNRHeQWj",
  "key30": "4ivig9JTY9pUS4FoM9Nw5AvbgprJXDW7bjv7QCvyo8TQThAdjHEKCqYE6VY6oSffZsguvP3nszLo4r8ZkQx2Lxa3",
  "key31": "491622qvPxhSVhmpkypZ5DpoqxkFpgjmrf4YWukPxVZucWyyXzQMieyTZNas1mNg3qhxubrZLmiCk3hGFgzQ4Tu1",
  "key32": "5zZcjdj7hm3tcebYkVgNo3FSL4dPD1Kgk5fCLvK7PKzJJPBkSYP6UQgCt1CZEtUFuWjP549P6qV7rvSa5DXAvghM",
  "key33": "4fGYKNK9wBQM5uYVK8Cpj4EayphpoGvg3GzFkFXHsuDTceJpmk7fsW11oviETPucYbbWBs9ieM8YvzZamKoZ9iJD",
  "key34": "PbctTfUAJRuCAEddi1Vw92xZVL49KaLWtdo2RbHSnMJArC2yazhjijceb9FagAcTpGYVK4isQczcCPoD4wmfSXD",
  "key35": "M9AjLdTCa73agD2hGFuESRyZxpe1gx66yEBap9wWGfgFEYsGAP22xBQ7QgSkC6RkMTSmUDrvwWGqhNFrJDGh1Ws",
  "key36": "2dUmzXfnrv1pr2CwiKVn8QSEjYTfWNhx9pwqRHmgJZK8RgWyxn3Y7YciEk4feSYNe4FPuwu3kMyqYNZur2771VaD",
  "key37": "AxC6VpSFKHzZ17Kw7aTuGMDyxwd85pvYF6YeGfumhHpvSQWqh4F6K5DwWrTuDmrkwQuFWV69k4N4or7B9zARwL6"
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
