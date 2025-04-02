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
    "3bXoiEthB312U89YHoAgycPQKQ38MQnJsHU1vcuQGoUVzHmJTDWkzp8zuhxJTscUKS3p2KwSheS3FiSgsGP8kab7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRnNXFgYiqfWNTVZiGwjjaPDS6TfYbir5Rp1s2K17Sqk4AoWqRwjgD6oFDPNpvTycsZ6nxukWnYjdNnXdG8eM4o",
  "key1": "2csmhNpdGaDr6Ssepb1pXmGLQ1dwe5JKD7LANonHqPhCx9NEE1XySDdB24BgEuMNa36ogCKYkzh5CyMV2uJ2Nq25",
  "key2": "5bd4uHerVw5fAnAFofA7utDAa5mPu5QCzgd5iyDpghztu7KzJtudTZEehuUvJdjY3tE9UsZRX5cZ6CZtKPY4cfrh",
  "key3": "Ui3doPLMGaQsc7zGPtH9JfQ54aDY6cWYLJouTN2sdhaV4XsACkzqissywaJMHaJHhGoghC7KhvMRqDj1jsLy9Hm",
  "key4": "2fXokp8BzgGFcC4zucW4GNSTQkMrGYDjgEHXfJAp6u89AVFfgCSwY4tK7eLXScDMwTT5Tt4AR6S4GKTjUWctQN6N",
  "key5": "3NqjeybMMTP1fezyUB9oZ3fQearHhrmxQdMyQsC3jehPiX4Uy4qw1fbmrcUFXd4dKC5m3pTZ785DmE8Jagrxmj9E",
  "key6": "3Fi1CE359fn3FYxnVS1Pk2psQZN5ufDvfgsNaprALeZrNjqa4HApZjrdggt7FhkShPDPf2dRdsVHwGuyBFYdCkFs",
  "key7": "5zc7ScYZ7gkaFajrwfn7rWGJ7iieME99hi647GJx8RjLjn4zZ4HpnYC7WSqtUQ7wSnLv9deUjdERL9hYcdBkwiwc",
  "key8": "529iJLXrKp4TgSWqacu3BgPMWU6n3Fds3uaaAjY7bEgBJh7Ss9djWTV7jJpB8rsrf8yr4JYrdYvAtokW6LpVonMr",
  "key9": "5bVHdTnLAhEmuHn8e7nBh6CjknT824wJoRwSLWb1ZqsBgQMkhW8P6mjQHRVJCpyUSBwwG4Ab6PB4GqPqjocjp7fH",
  "key10": "4qeKuRorxcVSArK4nnRE3bZ3EDWNmytxSuCnz9b3sUjGg7zCePsrrrfFJXJRtoQaUiRwzrLWsvyw8ubz5vFPWK6d",
  "key11": "rvDaAZwfh76dEPaGxdnQMvEFBmfhaER1XVA3wvqcefD4bUrnM571nyz5oLRdGke1h7xYfKxW3XtBb5rFPgWQ6Rx",
  "key12": "2eAwZRR2Fwmnevt2neeshZHFtwqctNEgXU5nLRDnNR9fyiF6A85a2kF5H28g2F3TvbJ1gSq1JLBUz9kJCJRobPzg",
  "key13": "Jm8yfJ1HXEn8nfPxXAJDAvusbYNfgfj29NCJjDvwEiTBQbbXvWPufLP6C9ZVZ7PxTADBcXiNiSKx4Y6cLcpgZMV",
  "key14": "5cAtG8BGhwVNeGuggPJYrVLXfGh53W8ZnLvRGV2qFMDMckxgJ49RxMu4KuVBziaPFmGHCzpfgXP8xUJBacthtEAc",
  "key15": "45CREjQQaKeihFDfXnLLK8UaZhvkG2F1oydATrEvMbgMz7tYV8JLoVW5s7vmK49ZXhAQ25JT6eQmzPDE12MEGJyz",
  "key16": "2YdGvWbjrmNqHpMsQTeLYxXpXe8BZ9TDWxi468sdxWtrSRb2h5ND3LEPBk4QfjE7s1w5gVDfDgeftzn6ydNP7YYH",
  "key17": "3JwgGa3Mp3FsHcEALj9bZDsNEUH8unpKWfibGhvjn9AwjQhdbvvExbxgeyR1aHCKR4QHpSqaXwPphsrPjBdaw12b",
  "key18": "5knPd9X4uabifSwYXBWLGmkUUvmUHJ6ngHhwGHpx1HY43dSu3zfqDBMS7et2WbiPEi6q6KyvpGJ75re9swAi4NTf",
  "key19": "5ZPUdNRo2BjtKxTY7t8ZfjMdKTFk3JtNRihBLKS2Y1C5sSp5Ngw1un2wcWzD5AaN1uKZdx2JJnJbCHBcwkfWjwXu",
  "key20": "4Nz335x6KEQDq5hFyi75rzTcmSJJE1WYN6LaTdqXsfjU5SsjgWRwdZ3ZAMKFGNYoC98rpnNNuu2BMQxsHRSF8hDL",
  "key21": "BpGSCwPierPMi6APZpyRoY5wx5ZZMB6kZoBXZsje6n7XQmisKLkmrtvKrnTyXjofKGRmHKd1LzYp7kuK6Nr78vA",
  "key22": "hXJgTp6EJXWMKyWiURNTdmDkbLyBDHa8froJBUQ3NeeZd8znv36PchriZ4iD5rUdhEdazP9AgDGEExNu6JVRCPu",
  "key23": "4fKVmyF9UYpQgpHVbGaxVabveaLvsLf76quPzALz46PZQJz5uxwggZSkXojXVbT4hfix5Rp7aTunMVHCRdMtAzRK",
  "key24": "2ihv2XGRhb727KFULLwtqij7cDtraHzPYrYSSs6GDkvf3Pu724q1iEr7UCsCMeBac5M3S87ywiynMKcE4exGCczN",
  "key25": "4M9D7DGFzqRuDj1H9wUzs5eDsUXMNvjXMPhdne4brkD7ivrA4MdX3XZD4rkLakuMaYyoHeudFjePvpw9LWh5a7fW",
  "key26": "5bc6mS4uN9QHTzvGcFAB6xpjUhWRbFGe31fx3ep1YAr3Cz8knhtzrp4ghkkCERGLrsz8YzcqkYUnrKRzf23PcPRL",
  "key27": "2cSZpgFXEvggW6Xz5icz4eJeh81jUfjU5QDS1CxyQ3fAEkasYiug3vD3CvC1q1pwU8izeX3K5NHZBCPtVMq7amJW",
  "key28": "iiMnQDMekCs1eGmDns6316DhfrLAddCbY81tQUVVdjzpRA6UEkCqYcGWFapnoY4gfnKLNYfmFsQxCWuK8U4dBEu",
  "key29": "5iE7TVmCfHtB7aYB4eEhALFMbeSkud9qtkETddmDc57CddinWo8F8Upgk43pBxXfhUX5z1drgXWTxbRyHioFomNU",
  "key30": "5mTYGJMAZunjcPi9FLhbkrATeuDUsuBY66GVVx4Gbg2oUqLqTP3JJtSZj12dttzrqDuBZNhEJi38TvWQYs9d5jtq",
  "key31": "eJQYS1wXS2LirnVFoyuvFSTF6TjCASkiT9qX8gqiwhmMHara5UxnRaR9iE4ZxqDUHjhjo8TJWQR6iH83sxcvHSe",
  "key32": "gz99Bp5CyMXgXCJ2fcmXWPcXmJfAuzVrdPZcpKBEZcGf4JrZ5sX2sTyt2QGNuCjUZhd7Vd25tHxcA3PETpe2bsT",
  "key33": "5qYjKKnbMsUEkTX8PTupcagTvyH4pbpa2ggWeWtRLX6RFmrUjWKirETWYtW8ZqJdHLUQqXSuhE7KxAQES7tmySZ7",
  "key34": "nA3Q3QFF7MDYwVna5GibUHKbko5CA1DLGajUTRGBwV7EhwNZoLQv5ZEs4qiXQi9J4X4me4rLcdbW7E6fyWfTjC3"
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
