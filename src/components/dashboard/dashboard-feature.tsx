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
    "63WwEMJd8AfkSAqxQz58DzqVDeFpB4DFA6ry41Ra7mg1Vayp7nwa9b68kPL6uJorZAT3f39stKikRE6PEQ6ARR8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4SFqFvSNZY2Tfq4ADaUNBLzpHQmGHAN87xR1iu3AYEQk8vg4uaU1RcXy9w2jWcCXRsbScQrnTRvWScFP2AFSx7",
  "key1": "47Wy7Mz8UwmS5QWctxaxCAhhyFfwVj3TxU2Qk2hQVWFz9y4To4YQVerCTzTx8qfkyqApdqkT5EacXypZZUBSGKUJ",
  "key2": "3g4TWCVthsrLKewmqRd354Wq1U99vZbic6HjvEMNwXcMd7NPk1KbJ5UW1jUGJiFcX4ReY3AEbYfrxNXemBQaXTzJ",
  "key3": "4QDWXK7aLx3oGEYSypnzopkYdAStE3ypo3bavwbQvGZM2fpY2JUVKtRhqdmaY8wiD9RjeDCxso4LLo2sKTTtS51J",
  "key4": "2Kp9t4kTtRVckzG3BvYazo9SCLqSYoLKter5sCbqUSXM1MbWhasW2RkBtstguSDLTQ24qdG6GiG7NtMzETDUjKLf",
  "key5": "ShUiAureejhG4futexJVeGbeVdDNMmWzoVnTCcjkBSuRWbc1sBHWkzZxUvYD9Bio1y9gEyLZ6UFDNCAna2V69US",
  "key6": "5qLkw1KQgAkSb8Wsh13n87KSEp9oNzjpwMxGSzjtkHgoqAT8BhNud1VmGrsyTEVBiKBJFxump51mJkqxE86Zf1T6",
  "key7": "26cxo4o28SECM1kKAwmAYUfAu2qGdwDcBwZSovyycWLTDRzjFBxpN9vchSoYYcrwfam71iHkqTe8Q2UyWTB7JMCC",
  "key8": "FLNQAbp6zWxT76JeLGLz3r3hR8FbxNJ5TFP5UK6N2K9KMZiAL8BVX8KdULHZo8x9qF3E18gqA4JLf3iHq4RaV96",
  "key9": "4RAtSuLZMfmbUGoar5ABYaZHuHPUHaLJsaXEc9TmsmwzeCoyqYgrqTGjE7Aa15kKWLurrr5YhrbSoLLtNWfiVKDb",
  "key10": "51gK9ydiDysV1HN2WfjuW7y9H4kVYrSh4waWykGP7Z3hPgEz95Wsoo1hrbRrjRae3NA2t3RpMxMTSkQYVydm7otT",
  "key11": "aKQBULidgLh1om4mjMcWiCXWQJtbey2YjjzqNsNX8UKfiLsSDQ6N8Ediosz6jSGYgzVWovtvz8RkPB7bvoF7cak",
  "key12": "4hEf3fYstfH5KBXazXywZ17eBMu2PiA3soqACEURuBAg7q8RQqthUBqcKikQ4L3foCsoC7XsgE2v8sp9gFqujZyq",
  "key13": "387yW7vo28Y4Wk3pMq3y9w1huauocwCqJHUDYa4TKELDzUxvhTTKw9AAj6o1XE4RpUhTD7dziMUTQxEwWdjc3uUV",
  "key14": "3NeqPNqCuRonNCuHxa2x1jK8NWcDWZgMY2rPabM5SVM5NBT5kuRHGztPz3qNzpniDdyWGTJ1SoAegttzwUJ1NLYZ",
  "key15": "3AfTLrqd1Ys1p7cWtyHCLiyjUTdWGA4DbBMsjgNbcuHQt4kGkhYbi9g3Zf6QKfmGdrKPpXkvXNTLCCWooVLK4o5t",
  "key16": "393MHZqLKqUw53X2V9M65L1DBHMDPUiciEghEZYKxSFm7YZkX9Mu4DvKxRECnFhJ6pLvfsQYWHtwJpMcVksqT6dQ",
  "key17": "25WG2xUN3UZbbsMiip9n6F8ZyfRurnMoXcdxjJ4MzwXdRx6ecfkfeseKfq1ds6FCpiR4UqVp2o8ksby3nkj6w8k2",
  "key18": "28MNkJ7k5KTrr7FMt4rCgUon4rvbze7g4rKNF1ycBW66JdjVFJR5dd3h2zkcG5fQWDdydM5AXBzxNVxtz3U1g7N1",
  "key19": "2j5C6Dy39WeGU7qaw5rxjqEvEB8E9WEMq62JFczNZc49TYeztNV2XUSp4vug8AHTceJXKSiU9bAoe3bPPoXmC5pd",
  "key20": "56P1HoeSYX62FN1PzZUZuQ5Yyruu9Me7zAFjrwo4S9y2PtsPZwQaMJUYoVV6Ysjz8GafpPUrMrxi9WJaQCTBmxf7",
  "key21": "5EhBcn4LyCEz7ABFZiQne1Pb38WH6x5BiGFkyNyMdh3mhqB8nbw8u2ip7Ygxutu9X1hh2VCTuqyFtrNwn1pxWm8K",
  "key22": "4AzNZizBuu3ZH9e1CoG6vZVbowQdvkUjZpFYuacyyHxn3Dx8Wnc6GePA7DtkqDUPc4um9uKH5rvqXBHaJGec7Lb6",
  "key23": "3SXyTxPSBc2qJjMpW29MnogdQGRTZgbJN3t8rbDwkFrmPUXDmifpznRUTU5UPKhxMJKwzNEheRHqKC4EsVk7yihC",
  "key24": "vDQuUZq1MoPMY5QF7keweiFwicWyZ4fASeKEvrfm7bzJbckhwCZGJZEyEgx6uqEkSDq3SiAaJxEA1e1NBnLivs9",
  "key25": "3KKaHL61pji5cFKHHqv5tieebpwR2zdB7mTstxbikAHPxRX2Fs4ptsCTZ2Bip1QQNEabhznF9tkfXdCvYKZeY7ko",
  "key26": "3jzt4UbLDcdtrDsXiBRcTFeDkaWw3eWE72k8Gh8zywu434mVgUtA1tVZfZCuZdHBAMJyQovwKjdkqsL2e9rK6VYV",
  "key27": "5oDQHXZxs5dNUHoWuC5xkF851vESULEHe2vrmeQfsPcRwScJKzyn5xLmLD6CPsYw8Um3Ms3uHN81d7PMq75emfqC",
  "key28": "2GcmxPW4x9fy4nLeaUvJbquCdUg5na9Kf3SWZjfGBa4ywDnAatZCjM6VqspSkmjhQbwcNJ9wRHUwar8Di5RSGA5X",
  "key29": "4MotfKJciwXycy1FRweaRaWef4jGJDp9TmtUif78Ks9VRZnHhfPn6TmTV6JVZBV59rwri8yNaioNVcDffxQRKThm",
  "key30": "39ST4u11QiocEEWLZg9dRwFaRijSdigYE9mbg2BZrjdjq4ZAiBUxtsnWwac6gioiMHceGrav762o3uux2FKFDUHk",
  "key31": "5SK64wzKK5jRAq8zkqUXFemABkd8LXdJeBG1WT5wNGUjcN2AmJow52PgajkN1JWgb6gMtSYeKNqJaVqkaaPf9KBT",
  "key32": "4voEjUrrjkwFE3fk6VLqDjwFssHsiH3iGSJAFAcKBF27Q53FtEfrfoEdcwWxpH9Wf39vgX284GmChvoVBu59FqAN",
  "key33": "2HT6epRYeY6GEngVEHWsL7e5fzZpNtPKmFd62siUds1Ztk4XFcFQvEadapRnJGJJsjncno9DJZudLzVVWSeopdKE",
  "key34": "4h1FtBKPNL1eNvhN3psUjPPJ2gQRwuDFsNpFzdSZJsnohkVS4Fh6v9XgqacGa29gAUKsqwG98PH5d7uQYcwRnUPe",
  "key35": "2UsrbPT4rrX8cubzKsLmadJwpSU7tcyUhxphHZECdzXfPAEnUDcH7eHm3PviraMc7PhijBJ3aVAYso2W3Bc5E74x",
  "key36": "3GByxXh2zomZk4xgiACNozQ9axLP5UVJDWf6VzGoAfWu1uuEMnjnpyGr68FeV8zZ2QzWe8VwmYkxmi6YcmXtxpAF",
  "key37": "2YvUBkgnmLSKx7JreXNSN38ofDnH6nGi1Zz9nGq9b3NwkWbn3iC9ujm8C8VN2PXezgWgm9mK9YcY91HinuhaevtA",
  "key38": "4H178kfSbTda5nao6CgPBFpZXoJ8tw9hA4hqxzNfMLA4Zhe95RuYdPngjyTUXHA9HGscYR7RFBjYbvq8N3Se5P1R",
  "key39": "63dnam1upXktAYSq45KRY5Jojjw4Cp1S8m5Zf2pnaZ7w9BSt91ML7bUcHKJxFCiWExC5rS9PuKvwmS7VtFTbsTVx",
  "key40": "5XzyNPqDpnmcgKWZDBTvzLfnS7VERTcGvHxKy15wmktKAFxQcZZvkK4kefmBhzai6NdPUDqN9jzneg3BCHcaxKfR",
  "key41": "3pwUnxfQuGEKpDS7ERUdJmL1ukVPPmHUHRUhbvs9gDREh94qjXzH8emNZMSs1LUfaSSWVcQmpxQiVkoVXcg6njBq",
  "key42": "KgzCpAMP6u9assRHANQbFN5QBBPFFrstjZEJaJYyNR2uaAUPHDmtGNmMwb971vES8bsRKLW2Cjhtg3fLEzttAMY",
  "key43": "4JSBcvcXNVEmrG6orHxS4Ng4N1BLfvo1meu2k7nAdofXQfRuR3PpT8L5DBuBoxpCT3F3FdCtXjPECLcVUW9Trv4V",
  "key44": "5eXpKAa3e7MRjskKQ6RB8DnwubzcrLSpYBH7UQpHA36fcJ8npEn63JrYNquqTimFz48xkxmx32HChjANtrRWR6Bd"
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
