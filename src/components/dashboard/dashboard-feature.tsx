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
    "5SeAnQ9cDjxRNqwXxDG9Z7Z7JDVfDyCo2bdNqr1XkN8p1VDBtGEiCii2vQjKdH6ZKterEhmRSnJUsoP5Bp9XWAk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bxagu7f2QiC6XqfHwtq2P9wWqfdz45Sw1bsKwgHskihNXkY1Faz6zhWN9HtnVBKLpLU1V9k4MsGUf58uk1BktPa",
  "key1": "5C6NBAfiaSmibz9vd93tEp1f12JJKAPfKBwio5mrGFaC5KkppiZ4z9hJZU18umFNUQ8wkozXEzBoWF7HPus69yPx",
  "key2": "4ruvrcbrbsqPXp4YdR89NzD5nhyzaaQBLYtBxZazopXVBvzM5GHzqNtw5ucQnuhRmKu5ozrAAW6u57524f9c7wrG",
  "key3": "2NiV555gmURRWyThU1sqhXmbQ11gbYn1E34NzJi7DHSAVdPDS3v9jEBfEMd83kkEZgQ5GScxs5Z2adUZG54RPnmW",
  "key4": "2om1m4k1xsJXT6pitjH4Ph8zC8j8p1HnNMQ6NpfkFzhWps6FedVCeUghQBPShXXDXqsVjgthfbead2Jif1WG4TGV",
  "key5": "CWfd7vWFvkxc7JxTrAmmbEyhhXoPi7jN1bQfG8xFjSgaMeM4aAkL4dve2hW6ZycgA7Pfb1D1ZvQ6DeTfM9aRZLZ",
  "key6": "4ZoQDD1afPCTjMciVk494mC9XjkU5PLVRxmTEznqJVJkJ4VCoDEPNTZdbZi3tkhapaSd1xcvv6E8pJM3QU5Mxt3i",
  "key7": "5HoQnJukf7h47v5TWyZxR5qfWdKyJt2xdnmShCazg13tU69B5ThZa1MN6naaQdE1QebYV1Drtbf8PoNrwZDVBoKC",
  "key8": "2Jchnde16hqYDD74bCNZfscd5znQYbxCukHJHdYYLEsYRzSYaDcLhTUbHqdMW5rMWHN14wM598Bc69suHZef1ph7",
  "key9": "5FwHjP6vWni4ccdDZ3mC3uLhmL2KRnqr2ihe1CespzK2ZGdQ4kWUw4pUhRBDALQn3hXGQuAqM3bEwLgKLRoxUXCo",
  "key10": "4kWvUZjcbL3MafLygcWzS7yYngVxW5hu4pCpu9vhKbBsUtq3dszjpSwd9v9qnmqEhAK4ygJRqEKcPregXECnj51x",
  "key11": "4FufYVRnVvXwF6tU72uf7p8AVATw3gC34iRsA6wdyjapFqx47xypFqm16yTSL29dwkuHQ8Li9Da3hrqjBj6JR8Lo",
  "key12": "49zDXgTb2dy9nPud6aVVuzWQPnGoFm6uE5zUi1MBmWNj4aywiqaPCUoCfaXkzR5vS9VpSny47ehhGMDB2k5gJ3sK",
  "key13": "5SJ2qMggXG36xPWdqAHCBjTtjYYbpNFsDyKKgtM38moJFsQUtPphwq84m1woNLxDREunvnqgiXEraX4K28ukmy2H",
  "key14": "3SY3CYABemefsubHra57a9GAMVZT4gNWKJHdcXqyEKuY6SAT8j2eNRRDJKREkHzwfzUictwZRfsWyYNGW4XheCJZ",
  "key15": "2QiCRgUxyr7HknWRRGodCdfofC8T4jDuXgKJP1yt82QL1LWhgEZGQcD3YPbEZo3A3oxbvseoHRtAZJwnXVPRCPrF",
  "key16": "3YTBP7v8YMUGYiqeL5dFj2kHxj76V12Ad5TAGDdBhfUo5G8omSynHRkVN6wzCtoCTzddFUNfNkvNWCrXZ6bjEpNr",
  "key17": "JSkA794EE4125hevgSbfqsGKntAVwPGrJDzmRSSJ3wCp5Zwe9j8VXPDgEcj7dTn26aK1dkYTcBPx1vRTp4EbKQj",
  "key18": "2puS7C5tXt8jjbb8F1xmLWU4359ym1zXYnn8MySGtaKNz9cuCAQLPTe7AArx4xHJxSCp9W8mZ5fiMw2B7Civ3Pud",
  "key19": "3f828q61AYQA7bgURDatu3jhZkar82NvouCMuyQojupbyXRJQaVkkshQRPPRNkuF4JEJFeuu5zAxJQK1WXMURQmp",
  "key20": "2cmdtUj46mJ5S6d9mr5vqhFR8c86j5wn2KjrwT7D4FfDsWT4RngciChBVAqUJEQ8FcdkhtNse8qkpJTwJUvWR8n2",
  "key21": "4VeuzBobzUVp12Hgc7p3SXcp7tGvmpnExp1PCog9nducyaEGBRbEeMbxrNzQaPyoF4Q3LPBkdLSbRJqLMa1vo6yd",
  "key22": "4gKpjJEVzickZcZDr8tv9vQYyXFffudqaqcBcYTMESrakawZVcsH8KhofYqpE2qpdcN8P4M9imDQYN2yYsRPxBZu",
  "key23": "montymdJkJ9UVHdZrbvDYPL5hErmYozWuwjoohg9neeq4SMX763PYdJV8WEQvCx96LAsCqFgReLLNtp5T8AS6KV",
  "key24": "2DCUSfL1pmo7FNKa19XUhwNMr3kLxndAJSY2XJV85NxaKbYP7UbJVGfv4kuMY3bx7iUyeaTEigLf2yJhJKm2GfXA",
  "key25": "o47E3in3ZareLprQdYfCNe6h2L8nzpqgKhfCR4k4GzN4b1Wbw4avZdYPeTReNGr9kvwLBZ61q75sroPTKDSJKzD",
  "key26": "5ExdiPLGfDz4artYKZV1k5gNibJnjbifhsYdkrNATyfGG5FXoDxbgX47ZUqwFBhHTDbRiqghfNrcmk5mmaSWKatg",
  "key27": "61LyQZZ81L1CqkpcZ3nLKVhyFkY6CVwdmGZ6jR26So6hWoLj7GUG5tteTLcuCW4YrtnasvEHfKQVVgSWJy7u4btS",
  "key28": "2pKb924sz7fV36SyUm8kRc5at11C8pkvF7wSuapwse5o1nk2bHomPy5FRjwUvQaznLGHLsSjCHVGD3u2DtEHfRcn",
  "key29": "2Fq2HhcFRNv79ZATTySMLCFmXQRnqBPCZBQpD5q877sv1CsJrg8cJJ2H59Cw1EHMJfu6ngnvTYNuTsytDEdWRCW4",
  "key30": "2iLtnc3oU6Ks8TA7XgdFo2Dk3T91ZY8H4QxMJJZPb1JHSvPYrpjhezB1ecZKDNWPmjiy8RUQeCmYMAg11KtEW6YP",
  "key31": "4UtoMX3Kgcb9QPr7fcVkoJxFgWmkBSLyUfN3EHwyoCcRuoEoHLy9bcR2Q5brD2LsBQ6uf6BA6gc4iN6MM5CeyqZj",
  "key32": "5oi1u82QbWXMYGt7qarCRj2erk8Pe2fopxsdiBKLHVMGr7Yqt5KycdQozqThyuzvthraB9LnXrtPYNcpry72Lncb",
  "key33": "5xZ9Q3hVZjhVJ3cb5ZjvSEeWQsNRnp9Y9qK6YJjWSpb8wcJ4pVhTNQ1rtZKrZ4MMiNRUxW9jiKhGuRL1PQfX9qiL",
  "key34": "STW3Z2jaN7r3718cx3Hja8f9Qimy4QTgfCX76gGDee9zZkY9u38CYEjXoLuJqPk1z2qcRSsuSrmRkkmMsCgokYs"
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
