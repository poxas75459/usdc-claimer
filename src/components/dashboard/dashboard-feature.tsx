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
    "2hXtAd91L1vAbUzMR3EDqQErNEGzCaeFa2euRemTAJiDGmzEN7uuXMnV2rqn7BhzJna8HTouH6EASZrKkeUftHoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fo74YYRWq1nPAtfBZ25tMvuZ2jh2fCZV4znt6JNZ8q3QPemJ4M4pDmXRf8yoiB2sEmS9QTdjG5rvhgfD9XQUkBe",
  "key1": "4cxaCQ4XJyLDGndUKurkvqMQKVgZiHAbiJt5d2bMj8ve9BRtSuCZbEmskbgUVe3P1HyShZcbykUUwi37bV6dH6aX",
  "key2": "5P7DTJHgh1gMHotJHrUzmtaG8X1YBhVNrafy3Epyj6GMToUB2ZKRDBcYTtt8EzSsRLnjnRm1iTeFrtWnzTjcWqbf",
  "key3": "62Zdfjtcm54vj4jdbMCCqb8uQ3crXvke6mFyP4HFD3aRePMKyrFMBN2Ydif8eVr6XxtkE8ZUe1FwDFQwd5U5JeFH",
  "key4": "5LEZYnD6RZJ3uP6Gq4dhMGc63GySVCtmUUeu7GMHP1q7z4x8SLnvjLix4uYcoycic25L8HFMsLVLzrNf9gm28zhk",
  "key5": "46pRCQ9H5RomPQ4NLVV3V8q56CMWtS3g3jCHPEVCxnL3jPrE7X5AZK6xCgjLtCNqRSwQpXTTk1DGSc1mBdimCank",
  "key6": "41842T3bKK8Gu51oWLejL2FhU5WVwSZtbNoiMzjnYGcpsEGBxE1JLAtarPkyBebkkvTaMLpNJNmBWZknByM7zyTE",
  "key7": "3KmMfAYQM74LG6FYthZKg3CNrEdUM6iTvw9gNa7j9MUTvqeJRo6q1cC89AmLqTsu6fsBnUx4NATmeRrxFApgaLB7",
  "key8": "5Nxc45DCfmFt8MmhHSujYNN2iqZnuGFWce58yXBTQ2j74oHeXr9NYw58jsxzxN6unRRua14xTaCjVArwcRjArYNa",
  "key9": "2GpXVgSaTxAVSmNFXzGYy6ZncEcha3U7PubYrXT79MAB69RmjAPr8gXA3AxFxHnWSqdd4sWsqW99GYdKgHh7noaF",
  "key10": "4sm1CTpoiBRnixKZgHaCXy7n6M1Jj52ZfFKf5RDL3xNgNgVfeGkR9P8Py2mUSUeYeAfdzCfBS6CJPYeXGKazVPH9",
  "key11": "2QPZysu6jAK9jkBrrAASGdUkpV418CvjBKrA8kPqwidfUzz5czGkBbDXHC6EuUu7nDZZr1SM8bKN2PprY3DURoBi",
  "key12": "4zoQi5RNX3yELT39St1xo8qWHYzhPEdRxwpEVaWccsp6zgDd8HnEM9tEXqMocBFJreBxW7NmsuDjjHYbukT5xcXc",
  "key13": "2JYnZ2nRgnnxmEK3VhGjGorQyBE7BNfKxZwwVy4DVuzEbjbTtePLWQNccviCXpQ1tWNCdibbsHVqtn66HRw9jJG4",
  "key14": "qcuiwTaYVFxjFTvx1dYBXvQfGkHLWN5LkG4Fxfk3Aw7GvPqgsKE2i3tFysyztrhEZEncrmMLCgL5B3y6JRop38C",
  "key15": "628aQEm9Ap6sv96eXoqgmB55MY19z8gtwic9wjYSPeDQeA6Y58h2AmLgNd63qELkf8tMTnPmLQwHXesGwzNp6rid",
  "key16": "5dDNFKHuaur6MbHTwqzSkdk5fb2KrAJ7W11PoUrEpGt8NZ2DTJZUAGAPpcH6QxiKLxd7sQPedFhxkVWe1Z59RPEE",
  "key17": "2jabCNw6xkuGxv2fG2oyQe8snjZcQ2JaKP2MPiH2QVq66Hp1K5fLvH5bcNx7DEvuFX7QHTgf9JdZqLavkxwEJH1M",
  "key18": "6329hiqyH6Ftu9fJ6chqkhMbW7nCedHWzWGHuMZQr9goUkyhBJZ3GNcy7tpDdAucG1kUsnkN2HPfCokwPm93ieKe",
  "key19": "5nVzWRGHtTBqkewaxFEBZ4pGKGLGNc4ZPxUwMiXqxm1uMXuT5AWcCrPzmxgA7Q5bZuJrYi3MthTWrx7daCmygD9W",
  "key20": "jxq11vuJSbvQtWYkiBY6oPF6N9Pu76bmAnK1HTNsAv5DwdbesVAg4b8KaYHkvu2HnKYpaGNC3xVcxMRYrbRnPoe",
  "key21": "53qPTTkoAp6qX1ECXj6CNE59nKxoFiGJHAze7qShh1qxLDTFwJGN8NUQwxKmVMSx4kfgs1bDamQAZGGuGZhcokX4",
  "key22": "3R8mq6vzzuhTX4iq7S2e37mtW2RzGVaZd6PyEJkxgob69FX3yn5RugPkpZmyT76U8yfSfRQChr7Lcixv2LNTPX8B",
  "key23": "5wxwBY57oMmYGuqY6vEJSod8TaBpMZcRfkHPat9xTig9ttoWzn6ncRnfvd9nkWDhaJEnpUbStHVrEQubtKc9KEEb",
  "key24": "Lqo5PUY4zx2kT96VrWq7fbFQoo3B9HZS93noYoqPAqooeH3FC2jwSvqK2cyKXtfPDsGkR6Wd4Cx5pGtr27VX5y4",
  "key25": "4H4WKmm5auBjS2yt4QAhs45PVubuQDWRjBChgiDUooKfBKREprYNJTaMJX6oaN2EZmG9QZK5gF1AAVPKFZ1nmvwz",
  "key26": "FvoXYU3uU1SRcT3EH3jZjThyvaTLntDiW6hD4utSaW2SyxkrnzqcvUSCMyKMKfp3t63HZDqiYZRVvrpvfDBYfHR",
  "key27": "45e3EZcwpekX6WLGtCFF4hb1BF4mKey6vL4hr4wPJ4RJLhTaFqcKm6XLNDhmEByzG6bAeuCDvJn9gud867j1YXCb",
  "key28": "373oErkC2JD68AW8oqXk8kgKR3miBadHeE3NEiv1mSUNh7mZnzuFma3wbeE7SiCBzJHd4VCbbcfQTHsZ2ciixfrC",
  "key29": "syJpDscchfk1HkPa8WSoZsvfvUGPCFuPjC5YePnE77UXLS3KhQtKDJLhERxos9ZYA2VwnrfrgJrqT8uJWWnFADa",
  "key30": "5xxBrVhgXGaTkpksopZfNAa4RPQDvs9uWmGm6pZogGz6ixFARPMV5reEsY7Ubh3y6CLw17w6pSJUhoc6mBrvphJP",
  "key31": "3MXXtcqf2cXeizy1jHTfjgRHQhaE3bHPU2zcC7AJ2Nrg7xLwL7vRtLJmT6vRAA1e9bEpFNXfyTZdCa9jjawsBVYZ",
  "key32": "3vgtgbAK9XJAQkQ9Vb5oQz6qrDWhjumMTWYrFzDJS91WMnUuvSHphLkWvpcFmtdQuYmNMLUUhYRRmwB25VSR6s1A",
  "key33": "2oMyZVN2f1Y2bBQWCMwvjsWR2SQtzYQchqgoyrxYd8nL7zkL9U7tDDULp7heZuMeLYArMwDqBWRP1PDYBzGxwsuL",
  "key34": "2BV3VBjbrdmhcMNnggxB7UovpoG3RdDfST28PgdU5nYsLyuRWM8vyiDf7FFjzHkdLNiTa7MPnh5Zn2oiy7Xt3VbE",
  "key35": "4es1GZPSHpcqsRr6UfJXE8jVQFUc6t8T3jSy9iWvWbA8bz1aFCkDrmR7YXCih4xVysTaF3xKGoNQF33eYsqgNr6w",
  "key36": "Fzq7JDQZRww2A9cH4bk1iFjJu5rwLmp7VisAXBbdPrLmxbbHmpur5orJFCVKubybCXfjLvwfehk1RgYPVeb2sXH",
  "key37": "gSzAKuCr9Hz7onYxi77Qs2vgqmuojCS8Fuz54KmdvvLLKdGoYfh4BeR8MeZ9yP8sEJp2bP94TAdncH3jAPToBhW",
  "key38": "5PSbi42ECBD1YSc6XGKERDJiSqYaNUxxKeMU2mqRpvX8HLFS9rVTLj3a2nw7MH9hW8WZ4nfkyGEPMyzP5qLQHqch",
  "key39": "2xxj5NrAUskJdG7Zs7tZixNMnXRQaEgtTVbveeVUd3EnC3GgET3tgUSF6DdAffvZ7MmTy5ksHaxctX7WpDWBS31D",
  "key40": "4fa1ZLFV4GW7a6gU6SZixNAfvTgKXULAo6sQ3Poy6SRuGxS29FNkXzLBCmNnwJWnX3JWMMwNZstWkWxrGNMs3o8S",
  "key41": "5FNXPtVEDWhKRMBAJq3wNs9usHKDZrdvZ6gj4LyXxBC23ys8dJrUPvSKMb7FtmMTdjt8jVdGopKkh8685hCbypn4",
  "key42": "5spUk5NZinGaFZHvRtruCSFgnZPPELbrA3enf2hjp2EUB1MtL2ERQEhfhMQ7R88e2hWD4x5yyYxq4neEpXsngrak"
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
