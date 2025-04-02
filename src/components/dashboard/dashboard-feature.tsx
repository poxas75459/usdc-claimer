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
    "9onHjAP2ZqTHAYnHAHiQUgPhg6CFkLMqV5VvbQS45QyXkt7kw24safHmDNw9nLarGqLUMcRYKsoChVdnWiJMYDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2NAFUe5geQzLqPEgCjzkLzo2wSoAzVsgAF5CUcf9jGRYcA1qRUXaeqwXfMbr7AiM5qeDZYajoiyV682oLkPfdw",
  "key1": "4WZjiHnVzyrnY3k8p8iu7JWJ8Zg5By85qofA8rod86hyo66XcSWWE2bKrtJNeZXsRFfvN3giC5WyC82e1N7jfEYD",
  "key2": "3NJwcX27Ub6QUUZfiXqKKpDQdewfksTXoReqPE8TVdBdvHZzT6STAqBg6PMsuGXSTKkoJRwGB95hxuRNNebZKYUx",
  "key3": "3h5BZtzcAbxHJA4oi7g5EPEVDfcbQaVMTvFUbjiNdfTHVQYN5Y2hzhe71iZ2onHBJSALTsTEk1d873rNrGiBfsp3",
  "key4": "nraoF3g4a3xx5pEL3GmHpwWwf6tn27RSUhdHntgahkpS8b9EStDWzjF9SgpFiZHwiRCjFo7WcLn26VAmzedsVKc",
  "key5": "3FGer6xcZWMNuCUyn2gwc7uAfmQQdgUEAMqTHmhRwsHFZnfY3JDj7SoCXnufzPu7PbMGCwxs96nbMEyHHJyzcRi7",
  "key6": "4g6bQuEBnRdNvSiSBcTtMc3LCEoEfQQdfmQAPPcw8vBUSuKyk6qUtEtk5vDMMBX6xHAE9QhoQjU2wLZsgzsYDBwr",
  "key7": "5x3rDFHAEcvV9RKpuLiPhBLDNWZegAGES8kWineG2TYgjgcx9gS8NPTLdsmucFpk9qxaZVgdwKjUHBdS43b7PUYr",
  "key8": "4H2jixiTyPRqfgL9knZk5FVRRL7ZbcX99TxMaZEjE85io2NE8N8A75RVqna2KDVGd2XPdChB9nUqbWpvsXQ6WcwC",
  "key9": "4U2a9Bp4Hq5ZFf5XWFkQ8fyDUp55amNhChobM9Zi1QQn5wUvKuen9CCmpv15Jxx8FUqy4VfFdUPBQJuCCc6NB63o",
  "key10": "SoJqsP9Tu5EGmYXwc16rHoEnjqrF8oHuvmAWHDtJ6enGMRqVgY4RYLFU4xhFSanQQhrAfBniju2GeV6JDMmo4k6",
  "key11": "31nGGxiPwg4bnqgH8dcNHNcjbDjQQCgrgV6mdQCntsuYhDdCJgTc2HQbTWhuCnTuJ21mHesrM3Bbwft5cax9Lgfr",
  "key12": "A4hZK5ya12PLMsutXYCKHR2bEZm3Y7hgvMoXX5GXaonTW6gFBj838qxygCcuzZsA6p3qDSSd3ZanijTVsCsCbZf",
  "key13": "47AUYLmsU5PnRCNQ5Q33S4i9bK5vjaTuSBnMSUewuuJiC73nydmygP2ADPop7mJP9Q8JEFZz9nBTRHrX6Fzs1Pb9",
  "key14": "2bk9MRL9VnpGYy1BPEuN91rwWzBBNodDoqcvLQTsEwKJUyZw8QY3Bg2TaBfjotWHrz1GmGSgWSkPZiX56R1WTgq6",
  "key15": "4kXRYxc84f2ugrCB9o5U2QRUN4ynDQgDQ6J6SpiQQGmRP5CKp96GoUaxbNkt9PWydPpgZgy2wyfqx5Whq7ykkFt6",
  "key16": "4qrZ8fDCoGN7WNVWTBMHZ4Pf7qkwFT7n2Nb3GXeJZVGBk8u4G27vZZ9WiSJy471QC58HyUHNiiTWsmp5B5EZxQ82",
  "key17": "3oUiDEDRL59pEp6bU2Yrnrd1W5yEYxAAG6UpkhNaGcKAvBu75CKpjhq5wwivbPGEdnxbmd1kRJGxWf3b7CgCfCqk",
  "key18": "2J3B9rxfj2KR9AHZ8MsWHmD5LLwCpA6B4SW8jADXimun2k4wtbp4uKQr1SBSyu9oYj7x2BudfcZsBHQE369Y7Smd",
  "key19": "3bVWo1Lcoi4kah6nDbZ5VDVRW1X5gXwHH5HvzjtnLf9sv13PXcsdo8Xt1wPnTSyvT85QtDUuGA76dXQ68x5qRDTE",
  "key20": "4ZbRztFd5QWx2VFunHMkzXeV6deR9T7gcUWaJDKEHMGeFowdZyWexaQW21xqcP6zuWZeJ2zHQRKdYTYsJWUEUt2g",
  "key21": "2vdYEjQQsShAZNgfk7Ka1g9mKBYsSN1x1XWysuif4yzUA9B6XbAHCk7xYSBJ9ecM9ggAKXzQeGHq8g2pyHukEr1f",
  "key22": "43V27oENe44a1XexgrtPR83criD71ui23xWnAz5ksBkDWppnMRmrKwjrMVbEZJj4JhHi21CpvtVyrTXQ3CuprVRR",
  "key23": "5SmJPE2tLwPUqT3WmmnXH58hoLDEsN8uP9kTpeJck4y91y8HAoWViafGrL6nNgtuu56Sh2Eb6iGU6RXpMYPYGH4y",
  "key24": "56GezgLmoeq3tkpLS5tYvVjKo2k3HbwRY8po29eZMpP7KN8EAko96M7ySvnQRFVmDkRAtCJGZpjjzeE2EFKg23KX",
  "key25": "21XRUhSUUWy4ZxuqJBZ9U6eGpjKdw8NywRUciFrWEkXPBNUkKWW55358uJ9EHNkt1fHWKigo3VYbFH4aphH4CfHg",
  "key26": "3qjyuKjPzaJdnnvo4qM4KdoZL9zUkmtFkfMLCKxVG36gwGWXooErm4Ad7zkzjseKsVrxJbhUQUKrmQ7YNBGvbyST",
  "key27": "pG72pHagZkfjDgqTtbuom7ez3gxzckUQDBywJpicTWbUnpn2gzLiLL5ZoCewWgH3DoMMnnPabGcZbZYZgrTmPjZ",
  "key28": "5cCc4xTHwrtPFreMYyVKacsJXJfLrWBjeAj2iBzeAmPANw7GS2m3yU9JSz2EvEJVYnGiafiy5Uk4vWeDddXcjuAK",
  "key29": "4YeXt9B7QJj6yQzNgpSzTnp5gsAnr5cSozbayZjSqb4JYo1vnst7YgkaUrJDwWAcdss4RgEY9U6N692b7CWj6eaN"
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
