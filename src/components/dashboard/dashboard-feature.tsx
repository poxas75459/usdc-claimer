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
    "QetXvQPdDJRmZFaWiEtrKp6a9CqXNFQmNpHX5ibYRXgqXRXCisbUxhixScxDcSGLFK4gQB1BPyqSk88eJjtnj1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46VQG994xCFB5UKqdeFXgmzy86WMGP47HiVTs7bhn1gZDbRXFC6DZMwu36SJSC6zU7ypQV27NsX7hE29o6L6LCu9",
  "key1": "4iDY55sPRQCvBmN7mZp5UC25TtLNNzbwSivr2d2Z3nJNcc8PevLymwCqqYQU5BGFzpKmKdLBGczSxJdt78xokcNX",
  "key2": "XwXfpG9dZqmrkHCm8vWhvyz87AfJH95bzASzqQQBoUSb4v9ea6pi7TwBusttomfTZTXsibykU4kwo57pdfUPWvg",
  "key3": "4EktrzWGkNkdn5ybZiHPg8Ypj3jd6TVyREQKpBMW4ChowSHvcVD1YefEfuSpXrHbynrSUznUXmQQDg6DoBshei7f",
  "key4": "3B9Rbm9u7b6QhGiMTv4YdTgpXLevGMtNcWEm3if6YnnvpN93ub4f3R4wGDpTdmMH1cZBMjeLdyXTJsP6fXuVkAAQ",
  "key5": "2socswKQFAaqejdZNZApfvvnYrwWfvFi8G5wRs7vCtTs9BDZiaMCZoCDR8zupjZwQg55rxUJf3NGRCp4ySPtNcbq",
  "key6": "4qfQaMhbvTeo6whxJHS8HMiBhoQgCpRqYq8FWBcN79tvzrho9c2khkafVV64yTqKetyeEUXE4nz2zTv76tLrYLPB",
  "key7": "u9d85CG8gWCUevg3WUqCA2eTdao8UvEvvSqKrcgQWg8RvXQggNSaya9SpgpzjsC9dSTZNiBjamWUt4cUPGDoYpp",
  "key8": "2nqwShTpHSk6sCPDJBFAbwan3YyJt6qDS33Bp89pZp6WfzoKvAiuJWULx58MWKGf4GrsWmMgvrG6E3iyAD3qzb2w",
  "key9": "2t1GVhArd4cRJdoM6W47E3xxNgYZSP8pH4oeTnUP9UK4KVAuPPhK4tHgB8zGChTanAMEMMVL4PAoY5ByZYajHVLM",
  "key10": "679LqKGgrjCQ1nz7QWD9oCRMap7t4ocoMHLZ23BEugGHjX5WLWty693Q8L5ZyY6Zpm5wvBFYeqwySyBms2nZs4pE",
  "key11": "2ZGYdfkQZQHw3dFgEy1zprYNoFV6cRSb4aMvdcXaNAJ5JBwAM8TDkGKKt1E49bQmVrSeDbrtEJqbH4TdjSpGKWV1",
  "key12": "2Ek1636ZuDsFQXd5CS7pjeiM4ubTHhh8FYBuwhyTeNUmYtXBR6AUsqDEBWzxjXLmGArDd4aJHNm7MEXEcn1ZTY5A",
  "key13": "2yBqKw1fRcwru9PJ3kZYvunGib7AUj13NVV5pRTHmL4VnkDw5tsBdaRXucGkvpmh6FMCoCHPWFTHd9A1o6xSWFLk",
  "key14": "5bFFdH2ZRsa6CZMANFKZi8oPTi6gn3GesQYkHhuqQz9PDJ5X8xsymsXa1R5gAzss31yTLEooKdPD5dXr7AwL8xrj",
  "key15": "3XjVCHcd2xpdKRjZihMF8vYGt7HNeqjx2pVx8Qqg3oJhshycbk6beib7E1ZviBovZXbcnrYxWDnBNbcpQnmC2Cz2",
  "key16": "5v9g52eUVAs8VVUPfuFscbKvJAUVJrfZCTiVHdv8HcyHyVUvRtZV62GQCNDTDQnE9tcARNZpFPYrpsZ9LQ4PTRT1",
  "key17": "63G7v8Mfxb6kj1wnmPTgPvar5ncXC4aNj3wKuEgBqoVs8KzWfw7Sii1e9J2zNq4kJtFtRM97sRYJCsRmdXGyUjLR",
  "key18": "37867dBVmcPnqViqEnp7VvtbyApRo7smBR68WgMuze26t3Egt3FyRVFPsibibW6VpHds1MzUGosLJpvVBReNVRLv",
  "key19": "3kQyBE7R771peN1RfVrJ2qcxzvrW6wTnjgTEF4dRC9MtFVvhdjLBFeMJE72HZyAgZj3xNzMzSxQawjuyPnxymerz",
  "key20": "3to95WD3MEPXBigaF51TVi4CzYBQqNwhphkxxvWYRZCC5Jts2st1DajBN4ksYfB5exze8zbM4gWhq8bi67vridVw",
  "key21": "4JiQ6ybRp2VFKjS37qEVyEWbiFHCrruQaMfhWHaD3wm2HNxdcQb1VhHPRDCh1V6s9Sm9jBStbojcdPpy7hPhaBBH",
  "key22": "4nzjT9NM93ZjBpZJAsPLwQxJs8MKo6NXSGMqn6qtfWjk4KqBpnQPotrGiYCEJGAQGf3ECcW7aKv8pEAnBsLpM7qH",
  "key23": "xfR5cGGiX8Kh4pXfrh1ehfnsnfriYkKZsBiSk8jdAkYvpGprPgnJTKCeypyrnfv8N6Xok2vs284w2FupQ3ncqc9",
  "key24": "5nWZVukP3To4FdwH23EZ4hcrF8rXuGVvwSPkDyYvXD5QUznLmJfJWpZZAncPNwo8LkqMvYFQbkpTNU1Y2Hi8uFer",
  "key25": "FSdaNcvKPcTr3BKAD9RmA6wJEReUSxqydMiz1XNjhn6DqFyk9tZREbTe9F5JKDScLyyPNCvyAavW3bAxzMgGTzn",
  "key26": "8P3orQ5PvGPBmtPcQUDxmyZ9Wcqc583gKg3SErJWn5WAAuJhSwKDukjXkZQQNvFMrY6zgdGqH3qZD7iniQVmznE",
  "key27": "4EeEvsvxfC9Uay8647XbcvQi9iAiXQAkco9WXsgt7cqg2zqYSuQgG3CPCSAby32J1G2G3m1zgtAHzo5HxRWUevfQ",
  "key28": "3Vy35hhJ7Tmji6C3VsaqoosVTKiq2LUZ6be7qpZVbBg8TN76cjTXPqYpkV1Y3JBYaBAMy8FPnj1gWqon8b2pythQ",
  "key29": "2hr9k7r1N2tBzXNhuFkG7G7EFtgCT5A8BJeMDJkHY8GJWmg8tWPpVAdQgEe6iMsCvgiQBimeo9Qw2CdY3Jg3vcL",
  "key30": "4qpFDXP8mqqyTXPZjN6eGEfqvr6A3sJRYaUjHv2iRjffBRJHrqD1TGKphy2D9eLxF1ChbQkswfrr53Ks9N73gTB8",
  "key31": "wzHMnXRgkuU9eafQamoWXv7RFGSdngFppvgw2wYGUhy4FSqAT1HAvod3jkcLWDGqKAyB1jczyxLRcP5QFU3VpmU"
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
