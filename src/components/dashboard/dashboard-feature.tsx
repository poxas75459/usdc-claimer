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
    "jdkKNbmiDha7KytgEetFnhzSRNw9MgoRfGFEU3rbC2mibyd6ceNh62CcVXE2JZFFpnWM5jdDJLBSnrQbtRjwpVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dt2ZT7Bw21BLZ9bMRRadjYFeDSYbciv75ScskSERPRL4tV2SFzUW12kzNWtCoyggbtwHUGcmnXorTDLfEqKSwrJ",
  "key1": "67jVahK1WN8YdQDKXQtumoccnFF46duLE46wNVvbHEtAYWnQE4umWP6hnimKC32HdKuYp8MZYAbuhjw9A7V2Dwnp",
  "key2": "3hJsLqwLXaCUwTb6oMn2cj1tLDKJmXriP2gPtVSjvYNp9RFpbEnkxKRHnGyBmYT2kGHoQFpiHTE7N8psBLoUVbMB",
  "key3": "62pprRs4AdgiQnRimjBzVfYqhTCYHpqadLwufmzJwHaz9xAd7cehL7BjA26CbFfatEVkAY63q1nKJfEfQtzZzQ8A",
  "key4": "36PTBQw5Cicqoy38AVCeWZj8wnFBgZjs7RZoUSxcGnAgHiSCqu6HXKikfkwxXho13hVLDvb4vK1tExsbzrMHNVBF",
  "key5": "ztoiRUD8GTAk8ACaAC9Ht1ZHA5FhmHGj6ry9wwEC7nuyhVHdj5ijW9h4TCgnFCaD5thpQoCPfwSxXiWXuxxkBfx",
  "key6": "4ccrCZeEwZqGPMaESnXFEYUFkYpUbPoLvqRVhtidJuUXC2dH1BRYj62Rh6xVtcJmn7iV76obS7rHQZaqPNPZS2wi",
  "key7": "3fHAnRLX9hkEdmUEDzUCPDftVV9nvsxPsULQgiRAYqLyNmYgXV1nVtmPFcurFXi8udzRSRSrwG5t3FmkyVmoqf8R",
  "key8": "64pmVMdFi1EzdDsTQox4N4TRLdNZfbx3k6Mkua6rxDpE62zxWzhT5s8LF6K5iBjTUh2cVw65RwMZTs1bK518Rncn",
  "key9": "4PNQafMFe6U6jevRPYp2C4gKSXPbDQ5WR2tpkeZaoSyv3tgpJS3F3cmtWYBf9Gp4CZHZhZajUxMNbDgDBZ5TyXpS",
  "key10": "5AJhKTuGTLU4XiJZGzcDKRLFT3wEx4Jz7b8KuQpQM9FEoYiDPqoa6kmSiqnkHW8nnAvMDiYsi1XES53DBwLkradV",
  "key11": "2eLHpAtJcVK81XmJfC9Z2K7h394qWmJDmZaMd2P4DeafvwDeE2fcvESo53UhYaDyZfj4rJVyWDNvgdoJNoYZi4DM",
  "key12": "3XUfwxfRioseAw19TkZmpmwmragy3vAJpHCZwPn35CQGgYtK2xPBfeKvFYWQa4EpHqH6SZNLxNEhgbzwCkaiYXNx",
  "key13": "28Um8KndMmMbniNZz1ZFd8ndaKmq5wNHMBN2iN9a8bG3BgsTiWALGZLktVd5V9zjZXRm1wnMU9KFdcwW7WtHerX3",
  "key14": "3oh7EDeEgV3YKzTE9xqgnybJ97jR9Ya4ofDYWYNUPoyV45ZCPAeKLo8c9HcNGaWdgqM9CEbYpAC59HDFHwoKiFi3",
  "key15": "4gAA46GYQzLP7k6KsNTZECCBS1ijtdVneTLu6mKHArGscJSjef4b1JyCNiCEc1ugAsHzRL1qSBU91e4QdrudapWS",
  "key16": "5yMhADskSAGqhgk1FPfxBYGUPQUwZgU3vAiBGEqDbLh6k1ey3n4A82k3qKBYca5rJYUR9W4RGyMuBxZZK3kAAybm",
  "key17": "5F11Mnee9gWW2pHs7QLhaKTwHymJb5Z3zcnEAQgRp8gwSxJSgjrkrvqAinAdAxBT3DYEp5QEQTUVDWRzpVUWDNM5",
  "key18": "5d6YazG8F7VypZGaNchUBkRRUy2oeA3MB6cEVoz3VXoFQZsQPzKzSZu2h5RRTL5NU9QMcU5PoLnLSLy53AS25rzh",
  "key19": "55XdduYdXUAXuEtvmcWwJZHAZgbSMi6yNJsPU63EvPeXoth44b1BoaKQQCLS8rFHub6tcA5FQskzFJfav3VfcqMj",
  "key20": "3U6zgzJSvqmJAziXGZ3RsxeqdvYDst65pTfv5H3CtZ1rkNyKnPadu7Xxub4Dtnwpjf1GkRZs9sWXDUktpZ3TzDGH",
  "key21": "5vmTWfu9iP2XtEVRWeEGXgZuKXfDH4hKtwyMF8qM9eGprfv4kwbACoTSnKK3yGc3MP7xeqqKQ36ZtUV1kY6WWBhi",
  "key22": "5N3D4udbdFH5hnyafpxeUqgAY88DVMngwa6Jvx5ZYjnvDrqN5Mu8ht6sYa8Yecc7CFznkfefU9XHpMon3HtDwe9L",
  "key23": "22nusyxpN7sq4H9iQe4ay9iPwysG5YG2fxva3LGD5A884V6AHuH5Q1n5Jd3bZi1RsGPVh5zymHnaGKBDetrvwsWE",
  "key24": "u1qMMHUfozwLYbmMt8NkBoXDihK4tH5pKumNSLXpGGVJJAWhYUY7wmKgAjTLzUZjXnpGr8gRC1wRdoXPaG4VJjB",
  "key25": "247R4RybHHyB9xBvtVPaPmzWoENHtt1zvfNPaqx7sxTyAW9wAcQw3fW9A7XtWrQn3tBAwW2Qne4PBVkojW2N4qrX",
  "key26": "3bmR4uCPG5v8sbEpHtM3FtSVVaYt7vj5nJJmbDJGaR9LzRcDeCM4a27k63XVZ2tTgtqhCaiB9bvif2c59qMX7ta2",
  "key27": "2tjshLZ4UnQFLc21kQ7EKPT27MsExi8symaTCnhk11a5X2sXQeGfYX1VkQdFHB4CvYfTV5T9ewaQQTbgDZkYtwUY",
  "key28": "zXuwKT39AGioEVxyyXAMEUhJ4LDZejnrVs4JXcjDCnRDYAZLXGqc6oBQCWiFSYVM4pShNN7hpupqW3nVXHYEynb",
  "key29": "1g9iTBrnBkzLeoqcPD5pmWGYWt9e82ghqswm8sUTG4Dwz3BiPYrLdi1NH4xQMaUkE38qCJ6xN9t5iAXAFzsLpN",
  "key30": "5paN3BYWhzed7cy2AwTTBF3LM8Qkj1MJ491tx82Ezhtrt6Mc11wpj7FkN5MB1SPn5SSgnaXCA2rGX7o38bStgv9U",
  "key31": "24umT6d6UwNXsMkfko5dhmYLyuaDtfNEnNQbjgeX3g4f9xY6sTdc58DVrfh24v3FoJPKqpyzELX953PrWfey1rnB",
  "key32": "5d3UhiwSqijVr2hk6XZeLjq1FBZP6dSdK2Q5J7drYJQ66vFVhSi7hkSCzxF4NwXsmtj1YhgFV9nkkXhJ6nsatijM",
  "key33": "4PgZpZKuUQCsBQHcnUBtemopNvTVHwuo9kmMjQuTmnch6ntgDMwoqT35CGUXXJmAKgrDbsUAySmSHgs3c82oCgS8",
  "key34": "3gHEE8wAvhzRmVvsQHQmWVhjFXQNE5WXHX13XyaNg145p288mpCcmktMNecpnwaq7RwKQ1q6CwJT26PhcbzFp68f",
  "key35": "agmB1iN6R6dsMMUoUCdxg7z7BkttZEdZbbU24aUBMfavuEL5kipZwJeaBko3JMzS5CXunSzmcUzwZ5H9g3rydMk",
  "key36": "VM9wWYXEjRwj7GfrCev4B2tKCuLgeAmRP9FUp8gr7MJATFcTx8koBvMKxGCJt8qtbUYV47DjHZrZyzwXJDjuvvg",
  "key37": "5s4n1t7pmHHL8UkYwwgJMkuhP23ycKdLGhdoeYzg2AGaCfAvwcwaVCB1Yo38Y4tXnw9fSnDk7BHewKfvogD5xCGs",
  "key38": "31a99hSuetTaYeR7ia1hEeMfwotcPPpqsPoffpz9bWXEF2YzaStCTiBNyZCMe6WRzs7HxCr5oMviwu8fghTjcUZ3",
  "key39": "5H86hCK76xofHqrSNPQRYyKuckxd7rd7jdwJCHULkjn5zKstcYHEGPpZrys16NgaaTosf1mg8pqrVUDjbjJYW2YV",
  "key40": "wZYWMQNa9qQSLbZ4zmYyViWvxvqCkza1HQ6yx2r5HMoBNyCRCzn3hH8TxkVwMoSyWNxF6w8QhcNsGQjSUTzpcTr",
  "key41": "3SAcsHBYVRnQc5pqCSZtrzmYQv9nuoLMLDHys5VQmPeF89SHhzuqq1BcvN5T8PeeXr684CVnrReG9ZesFsHQ8J5C",
  "key42": "4nQsweuikztxY6mG2d1cS428UxcfZataZUawn2NmgdxuVGfiibhrou2Cgp7L5MSrqX7i4hR4Y9PbkFyUf9YHkGsN",
  "key43": "3sopRTEDmDugYGwK6kyaWkZW7Xhhs8mTucTD48H1vY29ZA6mThR2GzoVLRaFo4w5YSivueTpC6PQSdr38xyaEsAY",
  "key44": "55aU59oNhnqX6SZgS79SVfHvQPACsUmUbDkus6qcohL9rdWGp2742SLDWLKX5WUszc9XdkWEK5HTD6MR5k2PYHKd",
  "key45": "67NVjaazyTVRzjfoYXrEHdGwTTowKhaEaN5kE5hGDiXDzWXtu33Ufdke6MFeoNYieBBQdZgHrhpfpFwkQK8Gpji4",
  "key46": "2pJPBHfez8czSau33Df21BXK1vTfK6MGFFJK1C5FKBMRaJ14sXzGKAuwtNDADvE41pKEFLnphEWbnq5G6TC3VZqs",
  "key47": "5FN6bjB4Dykt6XXCHwip32UxcxWoEXUoH4pPGWsV9RtesvonnH5NEZUBTsNxYk2TBAyufTgjEo7KrtLgqUD2vEL7"
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
