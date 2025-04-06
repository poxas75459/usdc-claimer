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
    "3ajp12eLS3UC68FBUP4ZRficqcZnwZFFnMihwCoXysqu8Z1ezGQwVdiiN2t5QnRbFwJQWtHaJG4RZESk9bGFEpiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RMSPh9Rextiv4zDKDntPZ8vmhAnnKt4eyV4tfbkRjkxUdLzcQWBVQahcdTQkNqTYBPnRkdfw79gqXN8fHeho1ez",
  "key1": "4SEGoBjmNqdTieCozjL2YEWWHhvfFdKKwbbx1QY5hYcp5oEJHZZTGSrFz7g8bxkFtE7W73arDmtrBsjbGPXG5ubT",
  "key2": "5JZ3UH8XwiYBWrjxeYC5A8HVCNDJReTReh5u7VHBduUy8imcmAzWP4a4GRbtghMUtZoUWqW1iwJgj3BgDTkNxHcr",
  "key3": "1jo8uHgsm3WDZT2xmzdptpnaJnzkDp6S6sY2jkjPyeLswRpYzumyCsrJVLzfiwgH2q1vdVYmu3zmxNFoWE4yJdr",
  "key4": "4SZtvU7RJ53xEDhLANteyEWbwXbxzXdnyFBWmiYrECuBZN1fqNVTUXd8iTCA8WJPKsHG7PGs955RmKPaD8b22tVM",
  "key5": "BjqVyWn2VeMVUTCSq7cVkZ6aPBbWokAC8GCpXRnWmZp5ujviaVqkqGBjmRB7CxnQdQXJCS9dE9s6hRzaXETR3gr",
  "key6": "5gGL8kNSV5fVcM4rFWGCfGWtregN2Aku25U9VYN6BSNPRibPZP5BZexpzvYvC7i5DKbWo6LbcFQT3yKrsJ2DcPKZ",
  "key7": "3bs4BSDu1wVtEibWCUbyDGBmbLkXdtShZF7d5tqqmnGiPkbPu1Pfrd1jrjLJLJoTS8skrZb3yFbKeXrWM8DB4WT8",
  "key8": "gA9xi2FJGgHHH3JpJjie2QgCqsZBxmhMNhnsiq6bQYh7v1Qv1PushxAibAudoj9EZogBJtcpTKPotJppcjgJoj2",
  "key9": "2ogi7SUasKVBfwaJToahC3Pw6XcLukgoBm8iriHuirzTbqnyHvbRm9eKhQim9FxD3Ukk9XBhVtHTdrptrkzfmjTm",
  "key10": "2sniB3er2CJxCzb41DqtVzs3orvv28Cu8vRpwDcuefbNJfZxHs7z3JZH9vzdDHbrZa6Vx8iSVBxFgNQkMxoPmKRm",
  "key11": "3UpsoZdp4cbe4gdy5NTq59FPZtiHwcfE2bmfXRjxXV97mbtBqfnMHSBJBXNEXUh4khZBwsLecia6xroCDd27kDnj",
  "key12": "34SF5S5UPKUEF8Gz5VXhFhphVYbLdoH6W8oC1GToxZVNEzGmsnJSbpxRophxZABjSvFPxiQHUipNr4JvEvzJCjvw",
  "key13": "2afi29bHsisUj7fVy8dwd9UcBZh6HqnFMLdpg7KY25Naw9n3kK3frdqpxxs6gc9UgJCmf1Q5zoT4TzEQw2FRfPtV",
  "key14": "26FzvHQBVTAPJpJfozo46bXSMTwwGyVkX4riwS5kcaNK7h8Rw4SBbXBFW1bg2avjRgCLhgbJVirLoNrrgeRfExSF",
  "key15": "3KNQtR45RBuCiozBB4VvLtSyt9bg3WgzJVJMzdRPZRo4HsEsCstrS7KFTEcwQL7PxThKUC21upX4rm9v4MmDxz5t",
  "key16": "57KgTEkByzeDQwaE2GKjDE9bjenA81sfTTf4zhL4Tq8edvWPQ9N6cbhNBYDX5WirX7ry5iHSCf7uQEWFZXaU9Vds",
  "key17": "35aVmMVR33drUSgijmtwj4oLGZY47LUDjPxv8emcJU7gmJhVZ4wLPGcDE7jqXw7hQ7rTWqR8uJqeqfF6BvieDmbr",
  "key18": "523f9X4ejW4Z7UHJHmNPzHB6nZ81cqGkhFonKR6dkfzA9d4NM9u4Yj8F9aQvwyfGLEgrtN7nhwwUesWLuL4yZuv1",
  "key19": "3nXgz5MH53LkpXbu7NbEvjTKNHPr6orHEcN1C4AUFJWEeoodQvnxWfbS3ijd48BTSBzdE27Nz5Lihb5qJywbUoBD",
  "key20": "4Cr1zmHyt4CB7yWhjcfgkwvPzCCHUSdxLWUHR8qWFAAooW2BDd8qxGpy58gErZLZwHz27UXHcHsWrZAvoakh3Aby",
  "key21": "2huJkkYMbqWHxhhEASGraSanKLwtTF3RbwNRJLTr1rr64UB5Y5gjSp7qFWqpxVSvuUDzejt3suCeYfpj1M75M6MS",
  "key22": "4ZuUroDAw5CWigToFFt1GniL168QGkiXjojYSwce58NR8wFfFpAgXJQZJDxtBs6AFxQcehK9Y8B6YyRyMW4dwAtV",
  "key23": "kemJseH7uCHMjP2zua9QDzymEFr8ogVjfX5Ls6ShnVgjTn8zciUNPpvoVeHhEx4Nann2efgmMRdDuw8vwNc8AfG",
  "key24": "3oMCGhzzN6NcT4Lr2UZYGBgNKQEMrEu6EkBftvAPZLMQpSe45CrJDFonw2LDvKM7f4qdnFvEheSgF8ULodNvCjAt",
  "key25": "5jtfH1P8qoHYb7pQdhRrH63zrNSsnQb2qDpnnAXEzUCekNJjQH4wALZQGt6ZYY63p8wmZxCyBXXkvbhmXQW8UM57",
  "key26": "nRi2tPqC2dsyxHyizTuZasPaAnvJbBe4ZJqRLDZFCdeeCazCqzUGz1Q65qKmkgHdicRqniKPtwfkTtsjynqeCLr",
  "key27": "242RPZb31Xt1sMcztEYfh7yqUxNQVHXteKvNvBc9tiqvBMW1YvHSp7B8GWig5XnbEiqL4BoP5nxKo75nQCQCrXdC",
  "key28": "4deGf2etuDEyV4CL5AgSakHnKnNRv6z4FvEsWi6wk7nvRQ8VMQzvCUkuFf4fLyCvp11QuTByTMptxahJY56LaL7D",
  "key29": "2NvQvYxAFnT4rxvdymPtRMu9ttAgZRJbzYVFtqmMvXuAieDGpBbUe2H3Y1ZaADsBpeLtX6EUxYuNXs4fLGfobTWa",
  "key30": "38LrortShFdfRnLZBCbFC2XnpiWoby7mkL86BbnipJSERQ96LH8yjj7WnVNeqbYofG6Krk9mFacdtebyF81nT7zb",
  "key31": "4qGNo6c6iQMxp395GBzCpr3tmnmpfx9dpiNbQ6u5xZw36Pjq9kHD4q3YJz8tR5SJUde5hU8423Hta6z82mUyX8nv",
  "key32": "3Ko86zWMNSxoLvLNsg8B9i6b52sW65GAqpmuehAKys7wPEwy6U7ckZ6xpeMWPHGrDUV6YHvWx33F3QzZjkRKNMz3",
  "key33": "5MMisbatRWum7CVh3GisTjojMa2KgnKwBUzvUaSm41h6ztejvNMcjZtmHUxqovQfWiVa6FupjYKu2f96SpmUoMxQ",
  "key34": "385S3uWsH5KNSDjgZcmRes5Ed2DGNyXf2W89KLZ5ya3fyFXjTSkX5pdon6ckuWf81sqb3HkSgcanrTzR2GDCYHTG",
  "key35": "126o5dpsGf65TDGsSyDQccKM7R8NnPFy68fC6Dr9VjS6hMyJG9dVdXJuayLkeUrgMGbZ2JgDdFo8ZXU6x6snPUUQ",
  "key36": "5LL9wLwbZ1uqpVWkr5TcZJ2qACdDS9sevF5V6w8MZvZETxWWmJ81cupPMNLw9CYS6pkKAyj7Aw7Rh7Be16hiA23f",
  "key37": "jHRxTKiDSKUpNnquSY6Fv8GDpJ3VCZmNAPjy7De5VNQCy7LEbzFmXk6AEqn2iwsUVR5ZhwmkDyCPJw3SVEHve7h",
  "key38": "2m6ACS5parJ9f1prA8EAeXsVARs8kHkzvETGYr7bkn3Rk2afkRcUo1QRdMYnXFL3xXjswTbc62FjAq9kAbREtQbw",
  "key39": "qkPusKCaYvT6cGM2PknZwQ73xJV5TpzVuDZfxbxBab3Q5yUoJvz1Cyo1mW9QFzrs4znadepmEzSApmiEYPVnFzf",
  "key40": "n6NP1xQfUsQiJ4atFEBNzNtTrGe8V7vKBRqFDcM8B9z9eRMAy6WNJDTyKAW4CzNwZJSXaM3SrwMw59NH5eLPg98",
  "key41": "5oxw34x6crJyRJdWiraSvQQbenxc2pCC97PRzgrtnkjEn1CnAT7hDRfBtiEGp2Kom79gC2ewmDv3YvcK4NkRmwva",
  "key42": "TQj58SWygP4jQFJHEK6KJWX84wkGkbA27HrNKKhPat34hdjJUHFsZBcZsG9fJC46YFgYZDzELFEpsbpN6ti1iPr",
  "key43": "3kJiw3hcEhUou8owwFdFEFhgLqDiq3KeNgc5gau9uas3azjSSebQTLT6rNb88S7LkDipTxJVd7S8PFo2FNz6YUT4"
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
