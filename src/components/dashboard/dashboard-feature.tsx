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
    "ichqpcY12W4FFM6cYPJZxqzUfNpaqUQM4bBAuiAmkVG7ZsrkMAaxiQvjbHvoDXSQag8jLpziGWQbCW1dcHA4hJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BuyESKzSKcYHT6iVPioPhxCgdzwomVZdLCgxna23syqgvvg6ZTiC44sQLPhM7959EoW4CzbcGD3TQwBnVXwRbbx",
  "key1": "4YZsy3y6jqdprG7Azjk7UJw9G9G4mT6VADY1nKDjmXDpURUG41VVHVBx5AR6usXGdSTM54wZzJGCQvVzsRNhyGAg",
  "key2": "285wyBcDouiSufeHkrejzcTNkxBma97He9iUzVtKwjbv34yh6Z41Bi9L15x9o384mqW3fKMNLKUcmWoi4DH5mR2Z",
  "key3": "QhKTWdDuR9EirPdbDomApwLmVvRxMaC6tPcXqScTC8Tp9ip8MSmppwcmGBv3MSHb85ySXXwsJ5bPk9avf5Nqecz",
  "key4": "2W6YHn5Xo6jeWwn5jUCZBsZbeHRk2KFmRtsxfA9zc4SYq7UNsHWK7nwZcX7tQtmNoVLb6QD8vznodp6NKtjNtxm4",
  "key5": "5ukuGv85gUDyiuk2WQLyrTkvyftfNDaHYTC3a4gDbDiCM6MojSuZDm5x2aXuvvGJzXLFbqt9tMZF1zDFwvkTgeF5",
  "key6": "4qxgUcGXRGAtYnNjMZDPvXPTWezJPWiwf81fvpLUAkpFb6XmabEpk8tR6TUBDHGN4T5S8Bq179ccR5xLmruwkRKz",
  "key7": "uB6jDw5s1VVwxwSj2saTnJgr97HThighpTUQqjyxzxKtXbfRDT5By8qr5zy82URoRuNAZh47GoT8rQ3x95ZTrjv",
  "key8": "4EyiP8bm4wMvca6x9tmSivrbY3v8mNXt8ujmckBgF3PVA7kcpnJRuHL4nZVsnv5NEEiYbGsFbu5BQypQ9trU6khY",
  "key9": "2FRdJFoSa4Jy3Z5D5u8CNuEgQaySw6GT46EZZ1s9zX6BTmzMw99RhYKZNpx2tfysihfKzeKMuGdAm5Kb8ZtNN3kp",
  "key10": "X6iQQfyrg7c2Nr4Kj1ih2QArMaVUKSDgT6bw5eUYMSL9tJBqYU174fADUnTrYz8DdKN7ShbeRbScv7d6yRvAux3",
  "key11": "4giRTqoZfhJ7TvvPnnoPBrwJHRtW7RW5smCSqqst5RG68ZgYbjXq6pMvvJbwik9rcYE9jbJfaWYD6CJjYeLwQcaX",
  "key12": "62VT5ViA9S45MHspMmBr3URn2SNvRzk5d5Rg4ERpZ5WQBRcs6G4wpMxtLeuWYYwvCkWBCcqwFCH83XXomQEUEkKS",
  "key13": "VpVrse7QodMzDcmH8yuAsBFQQsS6SxY9DZ1bhukUxCE5d8Gn2XpPmadJipaf2D5SPwJqy9QXrCuovaYLDN5EDvT",
  "key14": "ScnorYTGbSRLNan6YHhE3ZZyauquQTSuWgNsYKrwoiy3ho5fsDW7touNr9msPAHAQJoBGRrkaAJG8dC3K9i4C7b",
  "key15": "43UfHGqR5CPQZu1bLjUaq5ceJg55yB6diafd7M211XxKXBmwwqNnmkLr74yMFioA7m3wy6wW8vvRWrSDoNef9tdr",
  "key16": "uJbVu4R2z54PwEKYrvFqn1tV6E1hhD6wJRLxBVqiP8WeEJhDr2DWKpKp6zUnowQsw8vXcsAcaHpLgzuRSjBwcNn",
  "key17": "5menRfkUNWxCseR49b1y871SyLoQsxAKFr3s2k8CUkz72JrQt9hj3mozuo19SqSegj2Ny7jcDjCPrFuacREWNsiB",
  "key18": "4zU4HPi9dXH8UR1EXXY77VMi7CVQUjMKdABQA6Ze19hymYYUWFRnG8M4zFJL2hUgeSYeUGZ6BfP5WzuHeYZqTWnj",
  "key19": "kKgD6cuCABTJzrKnQaXyBSRWBDinyJdmZ4UiiaPaqJtjABpfMRvVNek2vRErWoaX9RutmBcsWZCbcu1df8MD5a4",
  "key20": "5GQWHprMTkH7azR8K7vprBYB5vv4ypwoa5BSbg1d7rdZWFavbKhV3F5MMrh33GnLnEZU1CXaAytey8uf44ofFn5q",
  "key21": "2JQGpSDVrYh1UyMqeBZSc5ndaPzYqoEiJ54sggcK1X6JaRuzEhHtEdfjVTtLs8rzejhbyAk5aCfxUqp182DwswZm",
  "key22": "43QnfRhnqAy13ZFQYJPijmABs2Lmr6acnLEX1qoyeHZdRJ4C3iBtS8y4Y21DAWhLMZ1pV27Z2JAZeeMB7GDTXBYx",
  "key23": "5cZFvn13ZG1PajBEPRQFY3iBnrX7dhWHrgtHzTWVV5HFYtMe5PuQpzR3fGiTF8ThCoULG8KMY1uu23zd2Sb5QbPp",
  "key24": "51ASzgVaQhw3LMfwQfUzNBK1by8PvAbTijhmb19F53YxNQD9RFcnp3G6w6ovPVPLBAGkRsHmKVpRseMRUoJYZ1SC",
  "key25": "8vN2tKu12D2Q3V4zL8JpVhzgXd8PPFcr4ZUPToW2yVUShSxLWwZJguMvNP64Zy2nRhuCrr8b9ssHwNvgkmoxZ5N",
  "key26": "3TA6d7NYcHeDdGpD3ZnDBovphysqGJ9fjdKgBKXuj4ECokhY7RS446Kv8TJQujDAHvvDctjr1ih1YETFXKdpgY7i",
  "key27": "4TwAvcEFReq2PTdqx4A7eM1pJJ4LyE9Kir24zDm5PZgzMBoZsZaRgP1jFkbThJMGUNNTsFnpwWyqrcY5yUNR8dmN",
  "key28": "43dwgDFWawap1dKUcN6fK7kCSXCS7C1AGzGpkda7WHz3kPV62cPd7Hee4RjnzxUXyTuk98nSGtTiQZvQTEVBXaDN",
  "key29": "26wexfqWoiNJgkgDexzFwd9jDt2zeMrYRff1DgYxRrMxP5PMKF4LtwZaVBwKnwRkHabsiXrPiHTif2PbrC2UCaKk",
  "key30": "3fmDZfXQEEqkbCGFmKSL4SoqeAU8d8Md22cMg2yPb2FXVhnQ1Fs81zPxhbxmyZpPYd5pQem4ebNvePUFRVpLDx37",
  "key31": "aBLuJX5muQZBaEv6e3CR82KTBgRom6Va6nFjHqvuBF5AA5uh7tnRCsEehgGbFiU5HXJMxrSb4GqgW8Nmgs7E5Sf"
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
