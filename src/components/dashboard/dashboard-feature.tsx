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
    "3dWsV8q8x8MYuxVF9H14pFqopUSMzFHzdTfRDCrmjYP1hmcoVprxhTSYqqVaszWZxuUE3Z7ub2u5duw3cwp5i6Es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385Ci8ZsoWqRAHCUjziYNa8YmDs58yQuPWdDXrRWKJbKt6cozwxn9echUFLGXySooMXQb68ERMXK9gMCbB2tRBU7",
  "key1": "3PbMbFWWQsZ6Rq3WHYBXUW7aDMqW8AViRnbxf8Sqqyny68WnAGAHLdPyd7ZQkdJquikNEBZ99y6414eLVPdmGbMJ",
  "key2": "Gu3GqysEqtqpgNcJ9daPRUoNFGFKyUNr7bfo1TmJx1BCRuHapyhmLquA5vWj5XJuiRA4KL3K9XgDzYdgg3n1mZ6",
  "key3": "47LdBaGJwEKmtoWBk8gq7z1mPyCqk3GWiy6cUHvJi3LM7xh5c1PxFv5neck5S4FrDbwb9bMLPSzbnRwTbuJkxBp9",
  "key4": "3e7EQ7uNv94MLuq1GouYayR1ndLiGDLpvm4ZDrvPPEDwPZneAbaeLAGRs2qSUAbqoCbhArbjUNJX7faN8cRvggRE",
  "key5": "3KVpaqmc5eLxNLVNqKQDSs48kM8cCABNE82LPGnRZtt5cj5bEMmjoEZcKadxhxKvdutzDETJ1XyCn4kQKbdLXCrk",
  "key6": "3A1rJ1v4E9nAmxaHogGF5vehp9Tg19uE78iozJmFfPm7cAQ3XwhEZGRNXEwnvbcV6QaYREh2vtHWFFxUcWqYLaQQ",
  "key7": "3zmjuR9ZK5rFXP8cf1B5U8RAzHWMvpqKeqcje7KiM9a7Z76KxR5cWnPkryx5W7qrzY7uVFsNsX8kv31LQ5VNok71",
  "key8": "4u3ZdXmECApUZdNtcfDFMmP3bPYyn9J7P2nsegE7ok4FbimS5ktLk8CscS6iQxtQFiLseV76qXLr5AT1SHwws5FD",
  "key9": "3byj47rYnHQAPeGisJjaZef1WLJfLZTaTo6gox2RFoZhEC8SqWHRzWzqQ4rW6jXExu24yJdQAY4He9gkNJtdkPmS",
  "key10": "5LUXVPJ6uShPUX65K7bJvTUVs8jnvK47CRf5cz6LZVKv4CV2t7haycfb7LSW7gQfyfC6mZhBSo5nNarT6SnoaEDB",
  "key11": "41cDnaAjnLFh4bnHosUYttwPWHgtJgKWpTZxdG9MYAXYzaJySm2YnvSzPiWcrXBCGQDtNFK6L6TW6q9Stvghg4GV",
  "key12": "5fvgAg4KaPvvAQvoutskd3Z3MVj2WkMtnQgBzB8cRdgJme5tc53iMeXGkyup8G99f55fq9djkm52FNKxS2RrGuzy",
  "key13": "3CrciKjPGF92iuj5JgdBmHr7jdtqa7L7g91vD4ggr9EoXSfnorenwK8Jwrm3MzvPwbqZk5K14qAgvX6SUUbmaDnC",
  "key14": "3QkuM1ed4wHvXM1hCZSYAJtEEfiLfJDx3E6Kz7ZLcrz9oQyPWuMA8uVREJMbF6yB2va6nA4uq96ssA7ryscKsExi",
  "key15": "u9WUA4mCHUwkRFjAdY9jT1gCzta4kftxuWMPDQGYwYgBXRSHBsB8F6o8si8JFfGJAASFYF8nD2FaCHZ5KhNwFzv",
  "key16": "3yM9yE6PZ9qbLmQvUAxaLhFt2S3DwwSGTzwvMLgZtoQaFRGYufPqaZtmxKQ2JGdbMVGRY3RSF1cyGRDLmNvrgXaJ",
  "key17": "4LYHSCHkL3CVFTvh8Ut4kU1uSQ8rBKymBauqmFTwbtw6QLg4kef3rRPJC83C52ovV5sS3h76kcXwSeRwimo1nga1",
  "key18": "2PpDwQk2be8m7aB333XK4hUqa15MK1MMSkYWnW2WKFJKYMZ2NoJqgxmMVASposBVCxJeNWzGG34SbxekSaauNCav",
  "key19": "4PYdk9KwPDDj6c1SM16HihshGMTkYc3dj1B4q8k7KRKKVPDDjwgE7cXB2CL2rfdTkfwktrPLALiANefA526u1Y17",
  "key20": "DuPb6qKVYBSKvL6CC8HKHfXL9GkHqsWZUrHTFxjoXVdU9EJeZkRdGAi8dL9geTTpu7hcFt5td9WyqPGoJgPoqPb",
  "key21": "2Q24ZqnX1PdQ8VAzaah6Q1G7EJswBkop1vXM7NyshBHh9aV4XUucgLeyTJcUFZiAfKDucorRpB5qHh6ksrroD17o",
  "key22": "5MbrtVC23sx9y5wwfcuuAKhADBCWotc5RmZUFYQV9dC61zSoG52HdjdAHM5k2RPQ5xsu8mrrwLpd9G2KFoUCk5rR",
  "key23": "3LDj3VQZWVhrxnod729ov4GtCzuVa2UT8GYynYXT5Z3197QN3myxtYpar3DZDZgNoBezNqtcw8H9yvMdFh5Qqbia",
  "key24": "215UtqVQFoe6FWUWFrUtq8cNfV93NYYcpcAVjnS6zYyvwcHt4mNaY3yK2E8L3LiCWXQwDKAK77DBK4kGZ8T9Drqd",
  "key25": "U9e7UTo72VUL85SXbDCGMWFCdboXEAhDgbhkDVyQEheuBj1DLmVWsCHN4HuhGJ9h91mFdJWYb52yT86zAXkrj3F",
  "key26": "5Dm3pmZhj4jnVr7UdS2XjDfcJDiLpV3ZY2muDjT2NDRuXNunrnhdqf51EW4LkBfPeFUp1EKiigxoNFvcRozDHcEZ",
  "key27": "5jLirN9P7bwc92boMqo8T6SkouSJV6bNU3J4sNMdZYcxb1qC5dbxDvVXAbaXK8ZK4JMrqo6eFp6qxjY1RHf13Xw6",
  "key28": "BcTVMfcupP7PzqwtBm86VbMUWKSyvaiwsuwus74nv2MZxY2Me28ktbCU5NkL97TyAw9a6XMeaME1JZALTvkQQzQ",
  "key29": "5pZzo6De4hUQU3FyNsfsdyR9HW6Z6ZQ8gEzMNfe8yxKjrWcN6nomrxyABXgSrd8yqRkz2PJw7CSiBsU9XKa6ELaM",
  "key30": "5JGTtXNEYQCzf5qA3qgUxLNDGDAsgZgvPTJopqwL5zg9XGZa5Y49Hg5DEt1z9pKW8BgmyE25XSxefsbosEsRHR2c",
  "key31": "2JAsLm4i5EdsrQFNzGJbn4erxZEi4egJec8BwGkhUNMo7Ah3QAdfMnB53tKz7WmTiuWbiDZ2wkgNFRc5AKnPxupR",
  "key32": "2tCW6CEiWUCtik3DzSTWy7EH1Vkg4VE7rHsvZJCF3gkwGw2mh8nnWGVGDLBQ2Ai3Jrvj34oAAvUXYUQMHeTMeT2d",
  "key33": "wchfxTMJoQ3ssKv2jsWxQoxhDRgV3tphtZDemQQRuauZByFN52RHTDVB8aSMh6dpxkHAi5V7uy52PPfhd8eHMLu",
  "key34": "2r4EhnNUT4BFex1mD7aYVox5ofDn1dY5zF9fCgXL8TLCdWjWAteM1vpN6sSX4VE1AyoJF1nuni9FqqeHxBh2QWmy",
  "key35": "2M8smXYnUAtwjeYUwSGJzYchuU2TgcPnqFHUzBdhbxBNr915TW7WzirBgq1cruoRrpcmTyhkpbduAMpVPAs3v6As",
  "key36": "5k7pud2JXzGjnvtpP2uTbDDxhW3L6bsrM4v9EJkuPBGcUcyTrpePrLE6wUPmsCbHdPeY6hm7G2Lpsg4mwd4KgALj",
  "key37": "29oQ1W8Gwefagt92Qr2EDHJpxxqt8iXMgQJ7VLG8urwJd6y3HgBqqZjEL8Ho6KuCEtu8X4gVRf9a1dqFpjQbUZcH",
  "key38": "4dJ7pob1v5JKJMCzWrXdWFJqgTfJAVg2UmHStwhpmcWTK41sDKbKTs1bjaz5tHSuzBhmR8E7rY48d5LLS7kW2nko",
  "key39": "3Qt3ucp9aHUENY8HV7jcRZmh3pKFbFKGrLSXrEJRBwTTZ1HHVowF27NrfAfRvB5TktfG6huTYPDYqqykuVqqEXym",
  "key40": "3ruG5n6ctL66yH8zCcfcuQAPFQMajmfWjzdQfBP5HpNPnpE9JnuXgegCaU3YN4K1tPfrqAJ4MQAv6AJJi977sPnb",
  "key41": "39ZYg32aTPUz6NARcxX18TsQFuzM39zWxdcpL9Y9wBbPfYcYrGvmygwjzAvVTPqEkZqASeDurhpL4pZzeoycE1TW"
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
