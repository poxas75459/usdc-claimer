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
    "2EF25G4qiEfSUq3vQ8ESmuqaksZ8eVVCCvQpYE2puJgKjPVy8ShkYg3N8AWhUkzTGk5gkaqWR4Y8N8cE6WDGxcUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NqoG2bzbSMde1SWepoYwdhcoUWiEHspm4CKMwePb6KbGMJwyzPN7SGxjtHUMvnj3qCSP7PSh6FtVAXqdirjChPK",
  "key1": "2aNPiV9HKDKncasp16WVwgrJ8FzKPfywqPabgcTHdnizbzguoPHNUXQ7s9Ec1L7SgJLNefx2gRYkoJU467hdpp9K",
  "key2": "4NNGpjtiqL18LawPvsPDwysZqGK4VPa1SDN8Kadunymg4CC5ZYUWS3bCTtyDogi5esYSuMwQnwFb5dhS8UGxH5ac",
  "key3": "4Mux8Uf62jkbQGxyfHDa4vyAmkQY99oPCPcmC3mDMj9obPAvovcSwLF3GU6ZXoTHMkZ3Q4g77U6AoacuR899i9QG",
  "key4": "3H2owiN2PaTwjt1A1DFZyEx55uZsZxEMKPwoWZbpyatk7WfyGBL6Ww9ZcdEVTwd6f8H1f4hzgS3FqXqpNW9wQdSh",
  "key5": "3DamMpMYk3Y85JQFYQdACcNQZrD7TyKwxyyRfh8frZ4adUyZ7ePJB1YgHH2abFLHywuskzLk2ZX38irTjMiCrm1b",
  "key6": "43X3VXsTsMvk1dUvy2aV4jtrb7LFqFQHt2WcyFUT9TTopmFrkWJUHPQbr6P5CMTVnbnENm8tEjrDbaGJQabvcWSd",
  "key7": "edwFs9TjDApLYmD7vW1AHKiRVQQXHXtug5cwFaC5snhsF8Hh1NnJY9zJgzPYxfM9z2cBiivNZbnWorqirCJm1vP",
  "key8": "4UyA4bHzkMjutfrefgZ634r9mnJkG2RVa7VYmd88bKJfR6QYuiKCt4i8tn7TNQHMfEFyEvURAXP3n2rEjTSVSfxu",
  "key9": "3eZZAtKqWfkTnZkR3pr8TJeP5Bd29J9cZ9vQDFViw5YhoutkcqUS6ZbDGcArKkDczmhW88kuzNn1PcCwJszn3VHy",
  "key10": "2DD5t31JvWvGWdRUeudLk88V68TivA1Fca1je6Rfs7ucSK6W4rgePwkaeF27FzpaVupEp8UiJqAyhw2KCDLdMAWy",
  "key11": "zZXYkgh5MNTYHX7NS6LbPCGc7Cqh11B3GhYzxh9xVXwo2zxGnCcdhDPfw3Bn6E7gVh53YxnWYEDppR1tfSVLwcf",
  "key12": "2nH8YWnSstrNXQsN9TVvwVNfqihf8TUREkVjv4JXwsJz8E3fRDEk7786n8joXJymB2X8TqNDZAQCQeGiRQQFf7EX",
  "key13": "3uujgjgm8CzKvWtcw3tXKXU46Xc8J5A8Pv3j9zu4FcJBztUQxSBWgEStu7Fw5Yk29AjUuzZPf9YtFnAtKKpwsmsc",
  "key14": "35XTALAjFRjtyWpQhgto7QfazqRHbJsdf13GGQgDdSNdqcJWkmz7WcrDoN5FsQiAgHjuNeM7mLd8DmSAXEAc483M",
  "key15": "2djvqajvrXkKxjHeJhe4p5HgvTgv2YgQLE2vmg51NJknFwGaKvo7oHWGJRcHd28goUL1hgUESBythUY3nmhDWt8o",
  "key16": "4hqCHvCo1NDHtc2W6hvJYZj2ocopoRxpxZTyo8ghBNifcfTNaJKbf9ihvXTX8UJx8p2BJ2xHQweDsk4CdS83PsH8",
  "key17": "5KUwj8QyCSdouUreMU7dBKog1pnpu9kQpr5RegYZwhjxs8aFHrbod8fjWzz8x7yLPWnNLPKjRAP1LVHRLVB79yht",
  "key18": "3yJt5r9geK6JAVo4ABGVddKwrSUzAw9MXGES8nvwxssM8KrADJ4jr7TFZaqqvEwBqB9bBZymAjiztFFqv87ASLpw",
  "key19": "4sn2sQJiX9FqL4V2mTmR2Ruouoh5tUpMtkwzx6exKFovPrVPvsoTmADth8VqC5hsTvNhasj9YZDyhpK8QsQ3wY9v",
  "key20": "5njja29j78SWymuv2r717srdtHYSKFL92DCd288zkZRqCir16fLVkbfvt6H268RAPNSQ2euygDMXTCsXtEYBAbgT",
  "key21": "3GJDNmbU9DC2i6wte6bLW2oqtZnY7ge46oYyv1PBn1nFSFBcZqYWF5NU8WpdoT7c68gbqqYtNuMy7GgiBvQ11eas",
  "key22": "25jfJLc8a4VbH1RpfLQ9rhA3y5L3fRYkHm6Y8j8QbbYNv4hktuq8jseKi5gXLE1PFRMrkodogLGzPnp97MMnS5kN",
  "key23": "41DL24xAXjMug8W4jLpBH2tjVH343jMS5mRGUQS5zUJWsJqvwrrXxGtJuWJ2575wLSsuut6rgJ8TTswCrgkYPLdM",
  "key24": "5L4uJaFFjCfzSGydNvXqSNwT4zuFveMTDvDjp83qWLfMG2Kz87tNxEPvn4AnWptUH49z5vpxt8k5JGYqcKfxptSj",
  "key25": "3uSyEvyK8sBGrNEodcHJ7WBPnZDARPU58ArZRAcpP5ryjh8HiXSxoaZkhhxmMcMYh5x25s6irCxtqpDtje36fqfg",
  "key26": "5L24S9T7ADxCYB7vw671A2xu1krE5HSvzUYia2HN1ydzFmKLop9hvddAAFNqUcGA5MKRci5dPPByqcWGAE2EuHNU",
  "key27": "2X4L3jDXPEv3EGx19fcugBw4u8vDTBXT6kHsLRQe8zZ2pw9ZDdrBUmSbaq2gSjt4BKC1izvtDbVvUMpFccxNutMw",
  "key28": "UGHyAFSRVo71s8tfGQULXD6ABUnX7frZtbGBdFTRHxHEoUET8zH1dU3WpYjigPDLK7XiCtPyPgTqHYMR1Z9cCic",
  "key29": "2EcvXBP8MhPLSXWwWdqqXU6cokhBCcyVkptx1jsMnNbCsq33WWL9uLAPmDzCZoDSNA8C9zxTu7NnAqeJZc77KpJ4",
  "key30": "2eM94CCEAsxizAY7SUCGrk9TpXUATNez9wJmwxJ4Khg9cdAszZTN3ACb7ELyippX1Ku4MeKBNqrgVxb2iXNz5edd",
  "key31": "4xa9Z5U9eYw61x4hXCiEjDs54KnTTExEgkCUdwXFTrREe1F9ZSKBdnd9SBVQnoMTNzUBm3wR8GZaSB8TTyd5Q35q",
  "key32": "5WbApkUokfjq5Ng2BXSYCR5tDMxoLY9aJeBTvAWxtEt5AL625hoeDLS2yfKNzavxN7JrCbrYQLfdeCbMdzK3XskN",
  "key33": "2RECxLBPDBstXjy6XJUXAxFy5h2ds9xHfaRgUUSE3qzkuVxu4U8tZn4Bq3u9TgNhHkPVGk9otJBf7XFUWvveT77w"
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
