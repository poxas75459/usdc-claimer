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
    "5Bwc38HutuUbakx1YyYMX1xXwJPnsA7zu7vygZJ1h8oXtZckRbaanZuZfj4MJg4PDerzE7CCJr99jFZTEPhK8Qyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "af4kE9qSCv1PU5gwqYBJ4zUBqChJA7B7UXaERQR4t7bGQqCtwBjLV625kyMmfVWreAZzXXBKw4QHf8iEfzbXMmT",
  "key1": "4f5vVbiBfjroVhYhMhG7ZRRoQjVrBGMgofS2TiWGDpMsjaMWmM5Kg7fyCAR9BBgV4rXMJt3BctjHWtDsnsDtU3sQ",
  "key2": "ZxhnLTmC5D25FeH8tWam1XkYDejt8kquMY7pBb2MG9zwBcU793ZLBfFRDmhrKFiVnPggHEVwCN3JMXYQXNQDzvb",
  "key3": "2PrWdRAFapncfhsrpLUgDb63dpFuNFMhTTPR9fhvukQpPRQxqCqditmU6F2juW8RmFqj3ZjKsMeeHMaPPkB2G9sZ",
  "key4": "3XHGB6zfkLgX638XFteCa2mLTpeuJpXP34mR8XvMkcdMNw6kGqojavLWqqo3XpdGK3QSuo781mbaCAsjf5XfyBtU",
  "key5": "5d5wKVwqnynJF6Zv6qyyeuj3rKgTKFD9headM93dPQMUW2FSj24RTbtvf58hFmjVeqj7ayEZKMuowKx8PFH2HNRW",
  "key6": "3gK6UxS2nTQAKg9e9SycKaLRqgHieNbXvQBgtm91VkuWpbtXhUudA1zLbUUzAJWCssLHupUGFsSK3jrFxMciNNpb",
  "key7": "4B3F6BWCcoMkadffwuZWWi8oUYJFdtgKqQfwXyjzkb6TehjebFSRwicS2yzTRgdyYSDMsJnyB6kgHJeZE47svkgf",
  "key8": "PZB9bWp9gakjVAZgFtwWrBWyMBQm621hHxTpD2rg2utFiGKCHVjqzDiawVAREdqUkJeAkmZGzD2jiTi42pjkS96",
  "key9": "ZWEQMjzm6MFZa7Q7EgRukTyGCkKTaPJHQ5ozUgGp5PtFhkSjksdR1AEo4Yu5adPhhmX5FqTUdbc5oAmehWA1ZKt",
  "key10": "5G6zFG1bkAc6yX42b5cD6XkqskRg9GV9KzkoqiyWmfdAavkZm85HzdcmhAkEDJZF1FWDcTv2S4TiG23SEVa6DZwB",
  "key11": "4n6C1kEkzaB7HxPDbWdAzVA2RissLrEnsxsYhuCQXCLpJ2Wgx8sYx1CEMjLh7jyUkmhx3WnCoWYDczHA9yi5ZFLs",
  "key12": "2EzuwLsAZ7sUJy7THtG6gucAjQDtHWUS77wCay8MXXnviAcnQSwFrWP6w4JcyGQK7dAxieBsEjW6L4W7u9A1Lv3z",
  "key13": "4RTsn2jxDqAt3c3nFMv7V6Riiigp8PuCo7RSMVPWHPKLfUVzc3tVHyyrMNaM6nHSXhs6iGLK55sEafczNuhAAtKq",
  "key14": "2MozjTjecQAxDDKzugfg1ZGE9a1ptrzEwe1Lx4GDooHtmqhKTB2PsZWQZU16nSrQWa8SLLUadS4hH31sPgjNm3rB",
  "key15": "3u8LU3n3EnqSWuh8946SSf1GdeG6PWPFRfqDLnR1G7vqibFhfz7qXxeMjGXztfDiUWo6wPHv64ZFnKnhEhx6mKvY",
  "key16": "5kEGogBq1KMsotQG7u6mUELHjFwYDArF8aGEuRKXEpi7iXz9FEEGo5hFoqJ46dcCYSEkcURNTM9weHSxoCbGsUJy",
  "key17": "5CXA1ff7u5UNg7ZL2ux8ryKwZjJgA9gTK3WDyrXWi6mftiGU3MQnpwkNr2JHsivDyzJvSJCocvsnKvNnzwrbxQMp",
  "key18": "42WC3ybfGjL3Uo6smULhk71fWkbmb4SKrnWkYqkR32LQ9NSjuq2ktbPiR1b6FyzCv1F8QMCy6kyG3h11JXTakopa",
  "key19": "3UJ6t5BfSyV6SLcem4gMxUrmtKG6MwKiz7wov3jDMfmeHiqKFHiZrBvcWBNN2Zf9fkx27k9iQ9f9jH4GcQRoY7Eu",
  "key20": "2CiDcMsrM2uux2D3Dj8NKanpVz6xomgFFagjaAzzduF6Fy8LPqfVJkaZYtMxqF5kR7UnqHrjgytFUXJnHwThnz4H",
  "key21": "3uH1LEpM6F8qEzEAGsrQJozyNLseyYf7zhGEbgzQPBifFjZd8jcTr4Sfqnd8xUwVt4C36DbGPtBdLgcnMoZfzL7h",
  "key22": "4Vw2NASTHbQG2ztxUWjhB725nj1Mt6J1D8RoPGRYdQNCPudqVfzP8tL1bh4MjsgLjg3GrXgsWFMH2xjSUuKfMAxZ",
  "key23": "3YuzrsB7poLe4eU8QnLbXpcMW1PYBzQEj97NXkg1VWbTaBzhksjx29CgPRyWtjAC5brFbKFrpJQ6dn7EgVZ8Q9uc",
  "key24": "4yPgVtUGV5j4NH7uyPrkHVM1Z3dZgqGKSX18aWL7QFaxxr8BLDF2i8Sj2jrUgtp9CoJM23DEjfi1ZJzTFq7swwiU",
  "key25": "5gMRmVJLGdWqhYZ69X8UkytNg4DeXB8gww1nJSLuH1wpkJ7BAe5Xa3p3rkXUriQyqPiDwLKrH4Zz5CYNYzB7EUgk",
  "key26": "3ix9YTUcU8JXcQ5TN3dXYjzkyjbNdWqv84iGBNRJjmGjgMWRduyM3rUnTPuGyhk7N5hbQqzAounGo1wH4VChbbv7",
  "key27": "wdZim5ag7ofzZAcYuFdVrFwQW52UrSXkjUFiopANfDdEGVQ48WswiMveCnY4UzhuTVTYpTN3i2XgaKzqtwt2H8o",
  "key28": "3ULzUs8w1qEQa7pFggNYKBe6fUkAC6v6JJFRPLimXHoLGvZn5PG5eYacaFDrJYmNwtfSk88czNVFTaJEU9pGpqsT",
  "key29": "53uKvFyrVS8baa2iXLuDgagTu7ZnfnYg3sT8SYYYP2KVxtof7kkKd27KtCHEL14LeZyuKRTXU71Yk1ryQhnhSywP",
  "key30": "2YLitFG1664weTnASvWbaBEr1GKS2Tjk4g1icwtC9Vqi5HrknXa9fA55B394h6ZqxxMVsiGzNqVD5eKqKjtmpLSc"
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
