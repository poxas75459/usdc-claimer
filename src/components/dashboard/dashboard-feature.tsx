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
    "2kvBACQzenJRQ37jwEyrPpALULB9mrba72WZ8o7qChTyPnWQiihCKX6g1jAKxGjVUvf1JZEqqh43Q31qA2m1dta2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aoih9hW1pTbJMaV7NLuzGZ1eBwZpKJsTPB8dpraJivmS4BWnuZQVYrtPBtXnwpyKzcPC2YibaqF36FCbXTsbECH",
  "key1": "4Q1LioNJPdQamAt4wxmZCFtGpsVG4Ck8LESUkUN4XFv58wBLTtMRaDrDvfqnTEDfBMP3uSTUctbYvFtMpYz9hiJn",
  "key2": "JdSDbEcNEYjmAVVRotPrSyutuc3tay9sW7xnr7xj5xW7qjDFowEhvLMZNVk8dNanBA5zCLfPZJE54jkCrUMuHtW",
  "key3": "5A8cKy5NRrjnyaLQmz8EaVHyiTAAevTFHAX417ToavEda6FirUUP9wChszp6cyGfRpzTEvkhaEnSszPDfUBZo6sb",
  "key4": "2uWGexSkftmyteW7oBHSuML1pT8s4jyg1MG9YceV8R8NxzPzDkE6cWYzPrasgNuMjk8qUDJj522QWtKCdywBCRtA",
  "key5": "4u1PHNoED4h4ENEFciSxNP22mU3ArD7hHDMqYSuVigGk53f3fVnY4haUPe1thS5NMKNKrohWNu8EzHA9y1patjiE",
  "key6": "3xcdQ9DLvPepWfTSyYXJJEKhM4X4bK9c6e8NknW7xaZFCBxoXhk7MdPeePfvMAuBBHjUQXLumoY9o1G3mnTHkTm5",
  "key7": "4NfobtABUriPX6hMYze7aFLdGktZSGhq6BAVH7TWqjscwYrVpsYt55gUAGGbwM1TgdqAnWnqHPTNepGzKmgZiGm2",
  "key8": "5oH2wGYLzEtRw28iKbWFCz9kbXiedN7sUMicrh3PwU7CPRXJWvT5dbdhkdKWnRpfyBK74k7tACWkRn2x3HVDKjB7",
  "key9": "4rht87mQZ2JKtMKC1A8RcT9Dgpgdk1S27xD8W4N33KoaLdXix21gPg9EB6TTVptngvMERvvJZMvFWgMw5KHWNd3p",
  "key10": "5m7Xt88Mem3QXuw5D5u7wXLt7NGusrjtAf5uuimFzs8zm8rh5A1W48r63RbZX92pM9BieWSSu4uoJm7TVvRRyWH7",
  "key11": "Q5MYVymCyuranuak3riaen1vRkbRWwCKtVRpK6tPEt22qmmDFo4X3SE1m69dmbxLjkznibkK8QEPsS5yH3zhH9N",
  "key12": "48jBdCAphwoVSSUFrVVU6xDJboPHAU5Qoyh7V3y63JTufDFqriBrxrkizNjndvzDXvWi8edJ2cuww1A28VimFoYQ",
  "key13": "3ibwxpF16ZAPyfkeXSh1kpASs3gbu4njkAVwdUJbQYZhzD7p4ZXu81Gr5A3K27FKmuxwxACWs25WgRtuaYxLyRUJ",
  "key14": "2yFaadnWgcJ4pRNyry7JcSDpmi79bQ88uUAVLeVZjNpWgDNWTBxuqgXd2ongDeFfNLCToekFHJGTAkPtSGNp7Rqb",
  "key15": "2cKtetY7jg7jdHSUCHsRGe9GVRddfVfPRJYrzABZiLiQLjEsHzeBL2VWFAFt24TDTuGpEdGTeYkBKHJRtTC46Vsz",
  "key16": "44eezmsQEnHCXUELnMctCriSC83AZyXHCpQFkzqSVEHgzfB73HeuShA2dzpe9BEmecpbw6Q2FXYwvj37ihkJo8VH",
  "key17": "2xEL27YPQ89R7c2op1toqvdnLeor7mdinRGMknmUif6ZJ5Bq1DoQkLaqNnFFfREwdWUoyPEdL4QTyJKNxzWF7XwV",
  "key18": "3Ekj6ErEepV5N9DDyryaooJ1guGEdGmpKtCmXhbBSPqEzbyFchchxhRyaxqhPqQZZACzJjgcufSyLqN1651Gqvff",
  "key19": "4qYzE87xvMuURJFjudPy3s66G6YcUYESbg1JtipyNJooaXWw4o6q6trahy6jkzw63KK7o3CAkFo5d7KBDZzvLMLd",
  "key20": "kJqUFFrVMf5dzfeeTJ96kj8UTc4aTftzgZaMAE2JmqeF1mXRZXSF4cS2HU8e82haTKLTZPQkGLtQVdDc96nuy8C",
  "key21": "4rJ32J3AW15nuQN3aA3n4CoPugifXrDSQPj2aVkodBeEWATA4urbikc3wubcEaDDSGFbFXkudEGDdDE1jyiS1Tht",
  "key22": "27kmmC1T5Mz9vHQeM9hDgBgMjPRJAJBUyk923zFrxhaPAsXRneBWzMYqmmq2XzwwwL7h4yDpDpjZV16H3gCW8mWJ",
  "key23": "4PQ7EyiwnTR4w8tJxLSiJqMnJb9tWfF28brCWvJWknV8FdYT9M3FuMPFibyVzAoFmfdS1n7t4r1q69orxppvjNzq",
  "key24": "56gXxXBQ77WZpRF8KN2BcReAKZBYVQCdcem5HRdatV6VYddiHPjGtkRrmYwZgWcmKyagh7F4h8Bu7WFyjz6MgEjv",
  "key25": "2NsPBRV6yVj7vQ1f69gum2BiDtd9tCvY4RFWBdfUNNGTzTcxeBRPD9Rjvw1sda429RerU1iiY4oN1syXr1JWXzwR",
  "key26": "TUhczQK6jCVQPHbtZ6w6udg8GtQ2gUW3NwmGoHQbQf4W84Tq4j36J7JbfizeHoQhMG8jQUj4qDPASf1Ek3Jtwdm",
  "key27": "2AS8jTPRBbyC85CbUCLn3eAb5RJyk8apYRux1nVWrFoW7ZuLUnSQbDE7hUrYqaD1s2wtuYGMyBJw54Hui6vrXAhx",
  "key28": "1JaRFLCGYSdxJeiSBEvmozVhbHeVWJHZ8mHqtzthPTCRN2SzoiHRVB2f8eJE9xevGjLcfhLJRTqLhbRv2qh6eba",
  "key29": "3hkp1MBPb6xEf4x4ufBLcmN2GqQ3JVixMDZF5ph5UJLeZyV5rHj9RtLqcZ8RDntghUh27eUqFZYuxQCuisoprP8S",
  "key30": "5Ara6br1wuYm3bbnF3QWngZxKicJ6Jxmayytr25qfEyucYSFrpwKtKmKCKeFi2fiS6t8VzctsN2YPGsV4ND6bafr",
  "key31": "41SaqzzXgqjYEkTYRVsdQiNsPKAGC7nQJsUAawFBWAX7FWSzTo4YzMSkjpjTdLqvM3PmEXWzVZLR7B4T1pCsZ1QU",
  "key32": "5krC2jMkMHcveUswYDqp13SxT41cYwavVvGJ3WYyBVENpdbY6xLVFU7G88EAkxttFfMvPX2g4HKfPGDnxXkjKRGD",
  "key33": "gUj49AwQfiDLAmEXfZDc8iVTCV92pPBnjBWML887qf3yLqCT7725hq2t6mFarnNvyLxNTX8UpP1kYAbT5cTgvWs",
  "key34": "4M4ZQLcroxne8Kqsx4eomcVZ6hh8itHAPTDqG8X2XVPYYMCfWpkJEdTTkHTWooMMFbjFMLtNhvhw9wFRmG8EoTcA",
  "key35": "67FmBB86dAjrPPsk4JCuEbXyW7dUzwTZtVFSbKbLJpy2nPaKuh5wkZ6qdRcUfJyoE11LPN3iCsogM8yw8ECSR8BJ",
  "key36": "2Wm25ssbuJ2hstdhjSrW7y8imHSZmkdVJiHtDiKBtwJJ7BCRSZLpA7RAtXfrJiWJy1W6hehuJEHsuogCKa7dKWeH",
  "key37": "3svn1CJZkUJprSpGjV5B9zfnyPQk714NxoswgE8h79Z6wmwRGVmgpirKAFJQEWhkuRtroRHLGTTwww8HrCWXHSDL",
  "key38": "3RYZDnicrqLjD1eZS99kUbi7rGv67GTmMTF2TkmGFeURicyFkUZw2PfZ6Lf4e8PGWrQ3tNcoxMnaCFv4LJ3kfN55",
  "key39": "3V83uMBNcLBa2oZvom8PRwccDiJMxVyonhF4FsV5xn6mLhVazdCEiLPuGAFpC2NXE4149LKM9io1zvHZAoyfs7s9",
  "key40": "5gFESitSXwe1wxA5KxQCS91hu1qDQPtfkFdb69oBzMqAy39V59Y2bT7R4aMr1R4EMDHydy7cSnGvgDAgwq6dea4",
  "key41": "wMyb5Czcm6XZT94jvBzExoBrAW696NCMDtGLMEsyQhW38c4kSR5wHdtr88YDXdpZeD7i5PncGfkDLa7kQcGfKsQ",
  "key42": "4jjYtwS3Vibo6jMNxDDRyBRk5Fe98yCKsPBUnoc3UvCet5km384bN5gdBGyty9gASuKhEfRnpwCrB8qXJbA3Df4r",
  "key43": "26g43Ymg33siQzQ5Q4Tit5JEYqcUER65KDrqXZbg5YcgwVPxBwX6qw8pTCeX8xtGa5gv3GbdTkhjxNiQN7UAur4M",
  "key44": "4PEf5NcDa6Y7rMMVWBAvXGUBWqoaMwrwu2sBJ7tG6SZoEQrN9PQo5gFbm4j292Gs7ZdjeDaMBF8VMnvAQVFbf6jb",
  "key45": "48PkJ87kAqCBEZnkM4mDxiKyStkju9krJQX5SEEHDzh83QrxAmTufcZiMGmDStSmAbM1XsJF1BCLw7AcaMJ3Umut",
  "key46": "2zbzXJFAvB9wMQjQu7kKiNKu7uGv4sFJfQTist9iqhY3YnogZkQHXRm4QMb2Nck5MbB3f7QgkftEUM9zDMett748",
  "key47": "2MJY7rntp7ZhCPZJ1PNZPPyfj8XeZRcZjB5jxTjjjk9nK98sJfA43KfXnMLXGiCHRgeibjbcrfedErGYKd2M2gKF"
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
