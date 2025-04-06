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
    "KSRSSvxTSfqk17V2stYAqe6EKsv3yByNjfUiuSJuhcig6N6uDgqvneyTkBWG589xWatQd14DDdBeppytRm3N82F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aboUDZHHBWCcNhQ2ZNpDhfWppizBqQudZcLpLeLBQxoie73vyQTUWsuG7ceCw95bc1cZvwdARaqNFrXWzcKdC95",
  "key1": "44ZkSTd2v98CbSaHY3KSASDTnxcVReML3PXqcTVvNc49y3gtgdk4vref8i2mfEHkAci7Y5XY9mhHTbHqSzZTNfk1",
  "key2": "2jtrfS6aADXvzGhu9Ss4xJLbqfnqEj7JTNnQUADE8njXf4PcN8kWUzBCeLAsrmaY5EoQ4Ci6JD2emexmWRP8x7Hg",
  "key3": "3sJbBJ749aSBaWVsFjdJKM3kSfEq4dQiTmzrpJQxWh83ScT41vPBFvbWaRgUSKQWnkobhTpxTcmYHGhGUGUmHomF",
  "key4": "9S5Zu4UASYFquwkwpxavsHuAwofJv8tdZJ44XSi31yQgttjQhC4ziLa7MPR8c1CBDtBuL5R3b9nfDqLs4SzHh6W",
  "key5": "4PCoTcFMC63DzgGuAQcmaHzxPxiT71cpqtFbHfjeE9zRGz2B6G9grbKXHnjJq3EqXw2KVURQfici8cPa2Xs1DDCG",
  "key6": "5mMXYjcnzANmw4GBTSMZ6xw6Rkn8c2zBPzJ3hpAAMjSJNVonrKViddVpe6kZSvdgs4vk3cQxRkpM1wrtiHS381cc",
  "key7": "48EdFmsUKXEuruuh4ZZk2zMZmogpdpDszTgKXnkw1L3iNDHvMpvT1oqo4UcbGDa17yF3Sg3vyC9LtiP1iZbvXHLZ",
  "key8": "3P5FvytZWpMrYMMyhfB9EXbysWp1KXyv66fLs6nj82iPtcTZ5W3GV9kLLP5V9dpmDHTDt9gCnmGRy3j13M3oyHMd",
  "key9": "4VikhDtxkwiYvgGwPRZqsF5zWcxyAjLZQJ5MGKaFtqvTYzoYYmMHRRUUCWzVG5nPLeNSqf5LcuU2g7MrhUJMypWL",
  "key10": "2otDXewbivbd8QSiFjQfHGbAtu9EcDX6rwnuohTuG2PPKFBAA4FETe3mxRbVDrF3sFLNZ78Sw6wou5HK7T4RVC2G",
  "key11": "3RsdycRrNLVHh2SPRpcxRMquPdCGUFWfAGvwGXrQ8nknqmZUzHurShfP7XNqcvxYSF2dcdz9pcw2gFqWsZ7StxFr",
  "key12": "3uFz2xK6mk3fyw4kQ7gU5kmeENPwpoPgR6vVPMWL3fxkDUzwpY1HxVQxDwmfqQGPDWN83nSHefxc9Xo8d9YqEEVF",
  "key13": "3L6ok9SLF45RPq2eQsUbwwEqsLVWUdaRo7RpA9ynoFzCRfRS68AqpzUKwkHJDiGVL3jcR4GzpLUxxGJhS2HfigWB",
  "key14": "4yTvJ5Br1E4f7DB18c8bsZYhY9NUzdS5AyWRD558qALgccyErFN2b7tEsLaP83QdKp2XtMrtNHa4E9r4VWNu3nnM",
  "key15": "3Lqu6pi437vJn33N3G9DRWX56KBPADks3gNiBU6MdKomkj53MaoG9RfN7rXxoMitLSVpfchqaru6aoHxCSL8iH3z",
  "key16": "7aYvNNcRTSrLCE2pizRhmsCGgqUMx5ow5or8Gav6t8NVAYrGmvJxE4yZjhwEAZWZsPN3i2YipWEa46B1gMJXZ98",
  "key17": "4aKCt17CvCBBx1ttqtHWFU9YC8rpV8kJRfo5jikAxBTkpc1a9HZ4rMCb71qRd2yrf5gHDuNXKL6MQyHTYoNU451y",
  "key18": "5Xaarzn1SKaeD9bjcKx2GWG53YNj263LJGog9LXEWPC1rgVuGpxzUqTJkwCAfwFuMbLherv6FvcmaYCHvVutTVUt",
  "key19": "2VtAEb6UNAVzKroYtprDNisHPMTcBTwfKyaKV4yofeoMkMj6WBHeh8X65b1qEofzxAKVuRR57h7ijV4qmMtJDjxS",
  "key20": "2tfri7HnWXxZeYpC5bSeNk1PeJgm5nbisNBrNuowc9WbpnJrerRLEsNJ9JU7qg1E5KL6hsnt3SSDRxYgf61ZjPsx",
  "key21": "59kjZMEsVWzVFpfivDozNQDWwNYBB8qBPFjgHnGvBM7eA7VjJxBYXb7HZWaVAF3XfFvc4DGeyEvyZU9igiaYi2DJ",
  "key22": "3ECtHFABQy9k53uM8SBFkUbjQFm2zmFatyXS3mbSeVgCj1oez1VkKSFAK76Wo8gqxf1zpBVy8b5fohRTrJZ9p88M",
  "key23": "445VKwMaHw8EumS9fswsw6ZiLWWvPbyX28qATkng77LZ8VrxWbW5F6S6XLjQtEQAwNbffgV8seyT7oRNjSbZKz38",
  "key24": "3WD8yJ7ZX5VjWo5u2BrCXhzXeFvX5pnz5DcFyHPnuj9jNNmkoRjQH4v5XQgNeyLcPvLoDLZazsoayiAuMNVzgwSE",
  "key25": "4ahVozvYHoQmjTDHheLMsY6SDLMrrnBjC5Xp5dfQLfa7hzz1mnK6ZJYwZhyJQiU2wS5UywbSetuvYxHYDARQAHaX",
  "key26": "3K3nCCVMFAf6AxuMRrE26SKKr7V86ycQHUS1E5AzVHfeYdgz2J1YsH84XFmAf3TW1Jy4GrQkKPy846RuCw6NcbuD",
  "key27": "41XJHH7A25B2dXmbtknp5nqRPczCj885D8Rg9Mz3cUzYhFQjieTVLPJm21Z1MxUuKaRxCVSWEKxcu4g7JBNoRL9A",
  "key28": "5jH771KKMuqQYYNrHpaDJj5qKB4QBotyEZarQJiHvUYTSwLankFC36XjMAJRWRX5YxgQnbNqPBAzqWbFj5iSJ66f",
  "key29": "ej2uSwx9Kc3pXfhDYqLJSEeNbGQ37SWweoJxHNy28EJGqqAt8vNWbqEenG8VBvqD8ubwqwt8x6NYsjinPSGwocj",
  "key30": "Atpt27KqRrCiorBRHwvSzWNJAqBhMt4mzUvWgk7QqtrkHXKqwcmEyKMdEqne4dqcKp1pqtaXi5ct89RKcphwbig",
  "key31": "3X9Xf7ZsU7cSJP4A8tPmb6AgTieuAPaEEN6dKuAuYDmzsCWSwbL3bU3UAC6gDj21kQcEtRk3aWhDsmNxwkPKMKgz",
  "key32": "2mkyXbYwpnf8vLTdUWp5ncjBiJwzB7faSaP4SGJVCa4YHWUUNuG7SQ5CqHTzmx9XvgENacGucih1d2oXmSjyNgop",
  "key33": "3vUitjy1btVM7oiiJ9hEENFuBsiDDuLM1FVJgvYyJyyWcQqU4HoypRLHyAUdYUGQuLQPX3g942Pq7g2NFu4Q4XtX",
  "key34": "3KmuQPRUegRE3dCnfWUJ8FpJJJYibXqcLpebcASG1B6ps6oU5Ncqh3GkHRdykFeD4hAsjSNMfpgfwVhVnJFB5E5x",
  "key35": "4VYYy9U6QcsdMAnikomDiJSjGJnAvVqsddYmYVxNbBmAUji3oEwwqbq4zMN3uFRkhRjgWgUyZmgsanF5Wj2GnwM7",
  "key36": "5oSUkgtb5vV5NUsKb6W6RUgvm386PzNnZZohRKP9KKYSq8WiXJFykMNi4UsXPg2mJLHqoFu2nvg86omHKfGd5srf",
  "key37": "4RcHvRJ9fo9dCjc678DYJs65jZLcg9my5KNXh64FvpGEVWHjTk814i7CC3j1hSVCqLH96n9HyKc8FmUKcFaH4aHD",
  "key38": "6VDajAVFx9QhUw9odEHDTNPGNb9UkT4XHxrdumNoyT6bu1Cje3sSQtJZ7ynrjmhDGyeDj5V245PRdPdeEZVBJZn",
  "key39": "3wKxzGtdvHAUvEGXDtrpjXqS1C9k8KEPQZ9BcRug7kRKhWd6Z5kLkW4XvaFBcoXEM9dB3TWEvshEunFu22HzssPf",
  "key40": "vzPmecr11zvfSZsg89esYpdYbRvKyZv83L9o1qspGiqsbGvTAWxAeFpuHCfrJoqryVnRfccJh5FbjXpEZHgVsam",
  "key41": "22kZSSRQtx5VoFFtYKauTGD4ppvgXuSZELhLMPYm1Pvnjfub9QaK7vcRiHQhLCuVWbY2UB1ZhMmm8ajcijhz2W23",
  "key42": "4KWXRsXXSy6UquGs9hvx9LqihEVrtdYrL3LLx76eyTGQE4QYwgEdg2Q2VQX8CPv4gY6j1de68wQjvwtbTMRfR4Li"
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
