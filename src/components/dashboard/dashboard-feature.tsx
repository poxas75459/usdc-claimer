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
    "CrtmmxyS6HgCyaxazcbng3FskZ564yJa2p6oAS9Cac759Pc32JZeZwrqDYmwBDKUzBBRr2HTnnuCqrK9oexDuju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wo4w5BbkcrZgDywLwewG2r9dEmMRRxpK9LPUZVXuuLE7p4DXgW8nH3KmoemoiHkSkCyp31TMK1SEtur6unmG4EU",
  "key1": "4CvEtbK1khgmoMFCmLC5dQFoVEDZeL8RWAMnCD2AnM2cTBmRVPVqwrpdj1zVFa815s4nVWALtkXWS4hqy2k5He5k",
  "key2": "Kcrd5qG3yBsDye3rSLiqg5mu6NmhMeMGhLPS4AqN6zApDCry5kBv3mLQKVqSJzq8S21YgC4ktWG9BskcQET9RUU",
  "key3": "2v3Mv8Q6Uwwv33DfUXitVPjDwhqmSn71gAohd8wcNKnSrpjGSG18wBpyMLcJ7djoeBd2qeATxuo41jHrqFewqDcp",
  "key4": "2VJj7kzyi1KYbDnMTMxhGpcZVEw8MmacCbuJ4tEshZ2uGJt1ifkcP3KoyZm8C8qVquo2TvEfnJv3qP2gvuPD5x4Z",
  "key5": "2Cu9UBYMgXspyid22UmC7JALFaS6BMb511fCDDcYjyrh8Q7HBhCgwdPnYGM1pEaNbDkTtzzX2RAFui4kQeeCSMxU",
  "key6": "5ub7mXSTpbMot5CLo8zHdvXrNStAHPHFRWcFxk1Gk9URWGwaFopABm81QjfQeLnjRvDMcy6eWAmgzEdkdq3rn5Cm",
  "key7": "4AKzeDyVjTJhNPEggXv8hPuCdhfruVZXKLh4coTBVZeLyEAEBfxJdWWPC5QeQ3GD4f5rRCAcrw4riFLCgkVuuR3W",
  "key8": "2ypcPfQXoqEDVFvqALj1PujJm1bxhRYje1gHy6HKJNja3PMoGKRVnzTRFWsGPwNwvGqSz9W7SvhHNn2Bh5ZMaD6z",
  "key9": "67SNjyoh8FVYtCuTd2UYoQdo1SZvEn1pHmZHFtc343iwjjjrGMRp89ueGVwRDLAM6NKhTmP5ibT4pLc5UFo5BuGQ",
  "key10": "58x3tsADrkFiWVm6UfwY75iiiFCpESugo1V5aHJFzjHcyHF4r35Fedwu2vj1gf4e2XdEvKs4W3w5RGGjW1XcAYxh",
  "key11": "Bf7PcNx4AwFPFjxcRijiBLNaXi3vP7BRKQjKz9DhwmjRC7doa9k1SQgpKvHSpPZKPg3PAMu3V33DVgRn5cLSJPn",
  "key12": "3gT4jzEiuvdPdVmz7fmwGXrRXa6gsPxLehJN8Z1M9ZrJL1YzmZusiZBMHXaHpfnew6FM9f4AWWyU2QAQwCALFfqu",
  "key13": "JLfPtfqLmhjqbSukZTiN87zAPMw9AzS3GqpP3kPKe9gBhEJc4jtWB69sswmAjShuyYJ4tYWsHovLzbE9nxydjMU",
  "key14": "4xi79pNZLr6GrGXw4VCs2Ejs9t8qKX8x636XQ2boFWwo5XfTJ8aVy1u6AfQnv1by5ZwzBZzWUWuWjx7yAEqjfTxw",
  "key15": "4GCRqA9mGNmm2kgQxSTJAan17guT2A2N1GpLr37fJgtWqtTUuSiYyVD9UarEt28XnohoG9DpmcRsi7LrPPnSFxcX",
  "key16": "3wTxfHxnxyQJV4VQLvq2XghdaxBGgLbF2CsLdJ67tSW3uknUZUh85EmRa5oSyhwDqF8Wp9J4cHWi7zsrhSTfKYNt",
  "key17": "3pE5agGNDaUkNY4ZZLZepwgms5NtgHRnVJPiC8mtGHC12vrCWfY3BvUrEGG89tzCuxST6uT4MaU8WMbvuccfnUQm",
  "key18": "3XV763AW8sWosSC2edjXJF6GLUgH2RZtPBVRW1h71JQsrtNBytJW2mQUgfguXwrdGvFMzKvujJZwL99ms2Ty7WdP",
  "key19": "4dnHMKAPTN65aYquVZE5pNnDzBGqEwLVZjx25dRq91o21gzQzhxb4aLuc3vUu3bWMmRwKKzwL55eCTHHEa8CXiCU",
  "key20": "5jyLFnRSXCWNWUjER8z6AJixjveXdSA7RubAwHHwLJraZVyzV9ZD9FQyL9RusAyhvmoqWoZHkWzbgDmQ1B86hsfN",
  "key21": "4k2SEX7eNUt4qyCFLPNB5cEd4gm14vVr1vYqkTozEmK26WCYHvzwr8wasgppfCdJr8kFoB2dESWTDbDtxcKVYvvD",
  "key22": "2oHSamKAVsXFYX4cwxRJcsFSLjgrNfSR9QcqaBcd5s2Z2Mm5HzbPQYnXKbVscNzSL4qCHNcUgTBhnf1naLKcvhrm",
  "key23": "myCisBSLmcXDw5CT769FHF4L7SGoWu5XzQvxszRe6QgCPk8JEZTgtpWApJWajnQAu29QvixCi2hr2UEkY3RiEkP",
  "key24": "3SwsbscC8ycYHFSXyMntfMbKhtutD7yUD27vbWNoJn1YvrcDirpM1REmxM1teTkq5N1ZEFgmriPxyZ5HXWpWm6aW",
  "key25": "5ukqLrbGShRYxboWTJKd3W5k7T12jB4KhULK7dUELu68mhYLgP4j1vZi3oyKjRf6WL2tTDM2JWAxJtTaN1JT2ns6",
  "key26": "3S5v3mhdWpPdzqD6TpiufNRTeGYBPFtM2FD8uv9Ctk8Jvu9CwXVKexr3GEKTCYuaioh1qir9wcoRPbtgKxArJoqP",
  "key27": "2tA3NkwrdnjGhxuZX9LC2ffgumLiXbeikw67ZcCQ9Fes6NWvjuzxbLxHoYgdr9odgNe5fwFKm3MFnKE9fZpMgirN",
  "key28": "33qF7esCvNKN9j29f1KNSbNeKv9aK6JCyEjzeRz9mKK1mTh6LgMtLs1LujbwtqpuxsYjRTqqxkNGciRsdwvNWAHQ",
  "key29": "2dMSUPH21eBSVB5SMSA3JfVK8eaF58DnGM3JcGqjhzAnzweQXospdgyjcRae2YEAgoUXDr7aCRuoYcfdGo8gjJ3v",
  "key30": "4caLfehfqZ2z7HbQQEENfo4XY6J8G15bpuWPLT2vNckjSF668VAjrMHTquuwwHbLZD2HdJ7hzBofCJo4wRdwrFzy",
  "key31": "3c88RYFgxpod1TjmhTio4jjz1U5ifLRU8CmZFKLgvd8rKoZTVYkgHYXfY24VPNfqZe5jGSQiri1sXyYKHbuQrbsW",
  "key32": "4564CXP7sHvnq48GL2E6o7T3CuqAyF6jkERrxe2BFchJBpRd5Nck4oipBYY564cB7TZF7o7nZeQaJD2dCF1KeCiM",
  "key33": "5HAsr4RPjefQvKosRts2NCqKP6UyEMSkUABnVxLtVNZnPVuU4wYvgcqmWqSBrEJNXb3HxDkcWVTvTt6pAkoa8fHR",
  "key34": "4A1f7mFXSgQeNYZvStQB7KRrRa82dYBEZQd4b36ypwUoXQEaQHaGUKXyENTjJgi3P5aXvcFWYxEgsdHc9uDN7CS",
  "key35": "54ewXevLiecKseYwVZzHkHU5zWujdPSF7qLc7L7v7odFjzuWsgFMmMUNZdueN7qDxCQMvEJZKPLojBbnhBRQYMmz",
  "key36": "35gC8GJ3o8ZpFtpagCqFrWd4NmnkjYKZEQjnpGVRQ6qrkJTckeDJnmPw7q29Ky2SKfALexj36ooQMmEs5eGHThY6",
  "key37": "5iBSYyZayuwJ2GoGXnhs6HRNeqbDPhahTWERBu3Bi9no5gJyXZRZUw3M5KnTp8TL8fcnfKwkJQuHLdoygB3ZN4N4",
  "key38": "3pvsTQ6bnufaNNN9WAqLWD5MffP7ubGiLemeWFrAGWYDBU5WWR1Crp5MUXpEiXGtXLYRoqDkPfbdfHabKLmPjWJ6",
  "key39": "5Ng6rMJuaebt1X2fKEW9S3hzf1b49Wx79xfTWgvCEUPQA75E7sHHCjsiWVJzf8Yg2BbQAhVcKTFXHFGTXZ8sDiqz",
  "key40": "RQX4XtiVAeMBpMhup3YaVqXdSX3DTYMps5La3EXHztsMW3NSa5zCMYHz3Lem7babuL8NTsxdVWqJTG486sCkmRU"
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
