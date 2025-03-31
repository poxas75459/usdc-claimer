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
    "4fCD9qny9xR67w8W3M6u8PTUm8XHUii4e7Xbajp2RMpafCt6WkiNQ38XUuHycg1ebZbEBJABeNFMEB3nHMx9FG3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osomTyZpbfbVrVqLuZYSe76GkFGSGTbswG8F1YrqY9mSHxyLpCAv2qJVnoovMWEUCu5ypD9pDF6eba4tnkyStNg",
  "key1": "2AkXZYxCRsrsPwj7QN57hA5n1oHkHgCcEXoo5JRLgqQx2Z3afVPcuqkFDQ6h6yXtJPNEfemj5fAgY8ZHpRFSqB1d",
  "key2": "5KXmq4UvqhNCeqQh237D4BtwqAtaHRezko96ih1xSjyTs3my1Q8ki9UwADUFaV5K94mqAGHZvM7KYmx6GLBULe8w",
  "key3": "3UHfqsoqunsU6SJ1TmCNs5cWyAfWDu79woa24gMMGV7iFZpa35AnzKzzUZv4akqDiRx8frV8YLihyStHaELhD7Sa",
  "key4": "3yqpAG4zUgCaTumtxevF3sznY1wLXuUFxcKARnXmSCyDoWEp5uCTuGxzmPnYTNRoAPTdPVw4DYM1EvWYWSkhhVF9",
  "key5": "YjR5wenr5UnxMrDA2byR4QzaVWmd5oE93Ec1We8JMJwNvJHA42PJs3vv6YEsW9iG67rwVmmej5A3uKe1wxSWguc",
  "key6": "sU7W9RsBck6WAKtLui18ZBTUpfLiXurvaFcxyuvEZ8DQ5oX9yi6Tynj37VdXfToFp1kpvCSCVb1wWBiFZEZmo7u",
  "key7": "5xh63rjFgXKuvL1BCjkjnNk8KDT8d3N1LqZFgYx6Kh2Gf3UySiySWroCtQFc9Y7JUW2vQC7DKwNehe5uf8srZsVa",
  "key8": "3XWnAg3BgMCYKXHyHibR75wRjgJAezPKPBRmJtw4MC82uC8vDABJ1Ne1raPiXbW5bdrC6aSFyjf457gNXdWUgiyN",
  "key9": "CTN914cqBrGAsnZRopLXNH6tAzw7WYDEWiHRh944QRra48ct4jr5oVpBDetfgYrDtsE8HgFZcKoFD6H6Cj8jncp",
  "key10": "5SiXc7TGM1xt9549zkeVRpdLHtm19R2Meh1UskmpL8Bv6ydwBrVytATEYoP1YZHRHCGLKWWq7weKcdnnp9ZGWChs",
  "key11": "3qLQY4icY5DWgv4HUYkxmgLzZxmR6rLqSEC4FYEHSAhcpHyfnnK1fjEqxr1TU7QsQuuHbTQpdE1GXMe6AfAq5vXU",
  "key12": "5YkDP555fxE7zVHbiaTvpQV1Z1mVXWEh7bdLeW6BvRq5RvszYCfsdKPMKKtrS4GUbVndtsB3Q44aXEAXSZTVCeDf",
  "key13": "3SXoiPMXejRo5W1o7bE719EANMGM6VtCwHmLXFhS9PX5qzLZUVub2rLEGMkTtQPjiXDtD4aeEj7fQGcEdYYz9pFd",
  "key14": "4ex6sjp6JYyxYVwz32jgVAYuYeL8hREoQM79K9EqK58XkNEoabTZHVtCWL9SxJQmSM7jUWewPdvohbkKKaePTFWb",
  "key15": "3hpBkiigNiBJzq4w3R9x2HFrdVbwfQU9s9pwGpVUoCjPDvh3Jig52b5ZdfswLnvPWgEg2rBgweiZxpNJeutac7nS",
  "key16": "3H4XzKbvaGuuya47f4DNgcRB9f7FRg6CuvFCgveoZvRbEbM2Du5XhgZxMRz3aFt32K3rNpFH9cMCKuhTk1UmrVNd",
  "key17": "4nHAPWcLMa2rtxjxETExPDXBGh2WzLw2yH318RDnDTHPXXRsAqS3KqM6kSNDfeWJ2yTgeuyr5PCLsDWYZwDaanMy",
  "key18": "YFi449spRQj5PdRastAkQo2Rtor8HxQnPGLtcTtUgssKRszkCMC9PaX6hAeqoGFi6eUnR6hHeVNpnCxD4Zw7Qea",
  "key19": "5e7PYdB5bD7TQSajVQdPwEM4QKAuQKu3y293nnp7VsSCjbeLfJQZxc6QruUpcxwsJE1Yfh2GdErXsK8eBjYLBa9N",
  "key20": "59RJNXCVesaWAZbbxYR8JywXzYz7sjkuZTxY4f3zMzEB2XLDZzTDm2AgFr6KFXPQWGm1gA6KRoQQ42LWXBTxLZjM",
  "key21": "2ERWpwDr7F6925zZhvHnzseFRnfqmoPHxNqP33fMTRBH3N2DNuUcV6pCY1jUwMpfUX2dnt5EFPdD7rVKb59ZuGYn",
  "key22": "4JukeMdrXZ823WWZ7fKk971dpKrG8KyFEEUy5HRf7TF5aDoTgcerYDVP4AxTGfzoZAMnJpCXLt1HjVX8GSiqoKVu",
  "key23": "4HqHPGhxBZSwGpde2YKPppbBUkJA4UqhdeR3eLcfAh6wZkhg1hZqFCqueM6kVN3UoGJVuwV1XgAc6mNjoiNr5zMQ",
  "key24": "Fxosxwf4y3LJHVPJc3u5ooF17MtWTR5nhoGitaPmCkfVzronMxfKLSEgyGkH9JVuF5co8dN3hijssW4CcCrqbP3",
  "key25": "2C5JCNhG7ArRMRbrDDh5ZDjr41CgdMxUKnEZzNyFfRXPLYY4ucFKtySkBPn6LSdna9cmkmVjjRoq1MrQ4miJLQk5",
  "key26": "67qELaVNxYnYHwrWBJn99EY4xGF76tXLtTdynDVkdB85cpATtQad2HqpxqhXFrTtbQ2EJFcgMopDEMy3rkD6wMhE",
  "key27": "4Tje9yJ31x8RRssQH6sH24DBFitk8csTvNgWkgb3srFTcvZ3n3bGxiEzgfK7TWKYMPjwFytzQWWvM4ARpugszqSa",
  "key28": "qrfdFcJdYk141JCSwUnQuHaBpsNoKSALnMn3zoAfo2Jb1mA6BPqLGBExpua8g8inmHVqhfXouZgbaShKX6qiQBb",
  "key29": "37M73ahYMADsJrkuKtXhQ6L8CzV7w11Y8HJHWrY13S5kFMhNprNLSPiDNP6dqB7Y7NSYk6f2of7z624zmPN1voo",
  "key30": "PBw95mVembTW4Daq5tkNEgTSkRyhwuDjXbvaCvggYD6hMBD7vmnhRaPczEsGUvYFw6CBNRrqPdMba3sL2FJ8YaK",
  "key31": "2tUi9ToZhS7UYzdmFLZTkqgcMwXEwUTVLU94UxhXfsUy48VwPS6vuRkz7jPjhiQWNH22tsQd9aAACpbu5Hc9ESDY"
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
