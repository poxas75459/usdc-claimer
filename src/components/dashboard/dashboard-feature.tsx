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
    "4koyJzjJegKdceAroHWtmocUQsB6msGSh2PnaLxJF5h1foR7x74nCadaxqr5cH5tfeusMJFxD85NnUVZcEiDMjPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SjneS9cMLMaoDunvzM6tQxuKvcrvYeWq3jv8hDrLYUSETt7xRxKDrQpEik7RNWHKkNDZtt8xKoufK2EfN5a6CMN",
  "key1": "6z4h9KzzJTqBEA6gsxJwP4QNYHRnTpCdP6PUMkdCRLupdyN1FXtibHeRoXbtGSr4i5ZD6stX3Pqp1yZhvEkQMhq",
  "key2": "7ieyhQTTVhA73PJwhWhX3AmzwVpcVX2cryjmrEs3XgNL5KDcHVjzqtFUW3XiGXLc2RiPaDA2xrvWr8FqAKZQwHc",
  "key3": "3hfXGw7ecQWGPcaFnKRJfNmP7gE2KdjBQLm8U72z3tCGr7YFR7Svof6YCtgxp7AJEpkhyxRNe2tm2VcQYinUDYKX",
  "key4": "2SS6iJiZTCGh98A8DyMBQAmQ2QBzVYA7CrMLV4kSx4AhGUkB4x6ubfRJp65Wh9o1SXiWuDs4w9QDcnjZFqZLz7UE",
  "key5": "5gRPk2fGWZPadftZkRKz12AtynNQpFCKnNWcPtopbyQHYgdDpizvTY5rxFjDGM8K8zjcZ8bUbvWvVGk3TW6hxM5m",
  "key6": "o2Qd8hGiqj2Vm6sDXoZKiXhuPY3cVFcggBujkrNLfYm2iXUNoZoPd21XfGddjmhJ12m5J6mUFC8cB8KWZgkDHeN",
  "key7": "5XNwPZBHi5mY1Vq6ah3UacZhcPTNWYdkhdnFUagQpdVrdqVzurpRKRuGoLeWiw46UTwyhzsRnTMRYG7CXDsoRcQd",
  "key8": "3jAeNvQt1e613v56M15sjYKdgJo77XbaW79zjiXpwX1FGRBAz2RK6cDFYnv6Jr7PGLTZw4Ai2VAszhaJrc4ZtSmv",
  "key9": "4BudXVxYVGzyoAHQvP8GNPrPMsGvdoS9eDonPdWYzNsBHzYiwq5ySTkXqouXVbpMsgiZJXgGCMWi9fqot3VnedGh",
  "key10": "57z1xXeg4LajRX8WzBBHiU7v7bD34Pb2dNU6Eeirby76e7gDYRe11kXGSwARzbTjL8E69Goc5UdWUQ5Kyy22swco",
  "key11": "3LLj4Y5GRNmkGD4jiYXkZ8ZC3PMmfdY6RtCsUBCzAWpxJsKivvAypDvx5asQn1VqRwyrxd5pUNWof6nxuAWDe6jg",
  "key12": "4zWZvsmekJozn1B8XqMWXgzxyAnr7JHxWoiQiLsdwnhtWmUdVNr8W41GDpzxqURpBpNwFcAbJC69Emu6yTc6ucnb",
  "key13": "GAzSiXoyuvvaYMdXrXb56wFf6c6ggYcauJkScLuANks7EAa73xjwX1Ke5M3X9cahZLtVeeiCr1tjVKdusabH1C9",
  "key14": "3rfvPgu3gBuqNyv8oYPQZMtsbQifXrDHTWRC5X3vkXNdzsvvCepgFodcZD2t3jvW12t9PwENrsxjnJ8thFxBJekX",
  "key15": "fkbUDBi97PyhkewWNrtznjcoa9zyKRAC71S1T9MUNkj9PoHCyV9R8nNzBinvLYVvvspGw3s4uEzX1VtoJuUAqo3",
  "key16": "3QiVBVSQpRJYV9DdSS47cmFZnhjoYmXnzevRA78vQJeYscao5LZX8KqrRMtaZstYuaezGjPiv1CjEZWMayehKT4U",
  "key17": "5ZPnskqzYE96gpTgnaXxPSkMy1pCLYctbKoGGFTkEnVNhyJPdD6en4bN6hC2QpiEVMwMRM44R3R33hF21uT7Xv1F",
  "key18": "g5S26SgRDMcQiBqzHHeheUknZBpsg9R1tcDCDG41WC5KLPgWvfQBXNZgJyBzaz94eh7nLaLpDkTAiidDGyMJmxS",
  "key19": "5rTWSWBMcSZZ7cBPswYfy9RFLP85natT9EtFagmTjB2KwGnFVMHiahK1zGrEHBtzoPBpKEywTSeoj3qgpFx2CsCm",
  "key20": "ryENVAHET8y8uuRFkVUZPBQEuzGThGaaYAoThaTK3ARTW2c3jgnKQ6SaTXRpWEFLELiqxvF2UqCNsMnWVwV33r7",
  "key21": "2A1Ga3mfwJM8ZbYbrceZmwq12ZbyAU7oBeentC2KC5WWSNWhZ3S1CkvkPVLvjAU1vVUpfy8n4CScF3ve8EFcopiC",
  "key22": "44kCeza3yyKfDqYRvLQXmR5A75g5diQWKHFbzsK6GreEfZUmWzQ6AYFm8h5DeTvvchkLaVGnRn4aeUmDc71NJtD2",
  "key23": "PFMYmuVWPRMC3b7zVhHh3TQwzkXzaefNjNGMu2BgR4oSpix2NL7VatyphmRxWhxpZNzkpVtRnGdkrbTDgWUVDai",
  "key24": "L1jRiwADDCTqfUKD2SJgWhRgBQ41wqUEpWX7NwFKBWYYyKb3HqNX5iGZYk8PvkyBQn5NWoaHSjCYFTyskSgrvF6",
  "key25": "2buaiJPTy2ZQm7kcmHiU97ruQXYEha5qhG5DatBA1BFjFXmj1txLudJrFAj8h14ZbFNgsL5wLtWYmjKwVBEAep15",
  "key26": "3FN9nYcLVkigmsouqXqKCeX73Zqdn297Hw5qQdVz3eQELFEW38qJgJhVVtdnoAnnLr3jgB5tzbsJgJjRadtJjxeE",
  "key27": "47VAegEmGAa4RfrS2DBzV377RN3rEktdzSnQLCyzkV7m2LQQVtgtXWv363ubsHJvgCrJpB5mW76n4UotzfhKXUwe",
  "key28": "28JnkqHahtYjhGDAJkQgEffrVX9ERp9nXeKUsgJ5hduiPrdCo36CY4rPuJgeu8aiXETMeCQ97kLpySbjZYqF8LVV",
  "key29": "343KiAvtSSrqnhspHFxHHdpy4Cdg9RGnGW99C5WUs63ahtqsjyd38QHs7G23zwR1KrCPMfxq7tBx4WJQQ5T8kQpc",
  "key30": "4F8ujKtFLorG2B3cJRdsHzqRwLAcdkBCgLstMrYYVRryQXoXzKBHxHoSiR1672giiRraosSJdjn3S5a2x4dJK6m9",
  "key31": "5juinEszp64uUEvfXFrGUUpo69kjyPV5yJHae1BtruzgzPD3yGA51jBGfsQVkFnzvQD5eEEiyM2UxYiZpyVRpDTX",
  "key32": "5JaP9nJzr68aoCsGDXJgTA5uKNEZCgSkeG8ofqG54bnPQtkfaLKCzHxkRYHzz3yBxJqxMv8ijTdvKP826R992HYF",
  "key33": "62Lk4mqxDddCdvkcxiuD869XTppo5LUiUXg3yBuzVkTAbNgzhZLV9pmzJHpiWcTA4y4j2ssjwQdqVWYDLrAvAsbx",
  "key34": "HvzBvYZizHcThabdeWcC8n27shcKdF7sRKjNmaaaeWQDAi7kjWdrkfkg443cKvVvFyVvzRdBxXn3PVsYGDkRbDe",
  "key35": "WB6ZAKji6onhWAWZafvM55tnYDNgj4pt6dNSTyKEPTVvuvHxDMJk4rEkN23EEN9ra7zytWuk3HRdwFysYotGZiF"
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
