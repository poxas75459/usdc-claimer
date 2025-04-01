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
    "5bUjNKTvCRj7YdwSsWqurefqAxa2prsJnMF9UyS1bHms6T9zYqKq3iuCcbfpnBDJ4NcDtE59Sw8FWhBGEC2uuo3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xHhapCqX3CDsCJeWuKpZn26mYuVUEUbp3bPVXX62qs9um91AJsepzW1avKGMGMkUqCbHPE84RTXbQeHjazNJtWm",
  "key1": "49WHSJscAbsHgbHsXJwBk2C4NgXNE83c5UzkqmfbaYt1ZQQDwebZcywCZYRwiPWyZEQvmya6tZaByjDzf3knxJKG",
  "key2": "2h6F82v8PCdx8jnpJj1DHf1Uy9HnNhPSU9pkEE8wfmz6Uzisr8genS4kQZ7shR8Z9UpJpygDhkvffQZsKoo7SgFb",
  "key3": "PsJLHWnAybHjxPPgLALxKxgu5HcmoszpLiEkowEjeros2MiYnqHr8jch8SLWhinZg3pY48M4eLnV93j5bZLJJch",
  "key4": "Ev4zitbxD8Fnyymk9Y5mdeUCuiSc2d6PXYtxoXPPmADRPyk9hcZKgwwwtnEnxPTLPAUDgdJtMBekY7nVSra277x",
  "key5": "2x6Aes9pRVQL7zTgz5tUJoi3g6MZ6ed3cmRiLam6PBAzij1241cSEHSmYhApuJnixnDZRfhTssAp1JRMtTxYthqL",
  "key6": "5JZY1X9WAh22Aj6MYy6FwCVmbrf5aS78i8HqKy3XG1RvXDCNmLfG9xsstc3NYzicVqq3exNRonryDT5KtvwXkkdL",
  "key7": "51U48vruzJu8KKCEDUS58p2CZTb3Car9EAKr1yBJPjVpPYv2EP6C87qEaa38xG9nJzrNV6fV4AxsWXXDFXzuvGzk",
  "key8": "5SDAQTjGjNQBsaruuf6vv46XoamT4P3Lak62Mg3CxGRQVo2irYQ8ge68S5dEwpxWrzcSa9gefnR6SeD629EBxC1J",
  "key9": "4SdYXrXJQcvwX14aSEE1CYHcwrkoF94q784bLxxLqEG77noSJJpZedfYgFSp3XTwWnVW1U4duA9XxD3mgnjnpdxd",
  "key10": "XRcy1LwfPFbUsx77Y4xoXS9Cwy1EU3o64FXnY8idX8vn2f5LSm441qwB8U84jhCdcvZKQa413g9MCvHmL66SS9F",
  "key11": "2pVtpPKZuXWHCf3Qf8FYHogdUqPAgpWhKEX2ADX4TdP9LEpMFuSdf2MeYpTQPZjUEhKVaZgVEpJH4TtTy4kbJWvA",
  "key12": "KAmmsZBezxwnTUSYW4NWjhx8FeDTjteuHXHpSxh7529Fe9eBhn3dt7tFDeiwd2mC6Wtq63vtsFJMuU5TThYu7WV",
  "key13": "2D8V36Ws9sijNaboaFuARjfXwxfYP3AyeyZRbvSVkjSxNV5csGtrg1ktittTc3qe1q4v7nY4ZGy1AwzS6rcxoMKA",
  "key14": "58iobsDusU68vLsJPgiqg77Avkb1CZBTB6ekgSQTXkErDtiApvL7ReQEs21BBWQRUZDE4jPNiR7rzoXfneW5ZSR1",
  "key15": "sx4aPt5p5vvzC4g5QQRjSQKe7WVn9jafk1JUZXiTQ8KNGnyCGWFpFf4xNPkWVTDf6eJXBTbaq4L9MGHSF2ygKDk",
  "key16": "5wiNT4otYaxfB5SZeTEqLFamTNKadePWAid3fLYLzMxCdyiaCF9YWVe7U36cvVRr2UD3dyHimfPZzmJ1o4KWzAt3",
  "key17": "55xKEC9843PFwekpJFo1xwHXeXRWVxF3kM1KuyAQ8RymkJ7KAc6WzHbSrt1Amha7r4A8AQZZPQ9xT2j7rioYWiCG",
  "key18": "5rJ9mrFX9kQxgsf35V2bfQazeEpbHKrAG6wLGvnSKBjMH4bRwKvjvtXEhespbyDggjiWXYMB1eLJp2FGGYcNyiFy",
  "key19": "FyCxLyE5xwFnvFGrJsA7mp1LV1kwqp5LykTFB19rbYtmjddvrcAGx6UssXA7eufcVtYQVKzJ8jTmXfdwLPuHp9h",
  "key20": "5FawY2qHc7gRj9RW8avChsy92uZ1LpDhs3aCRmcWb923iVMEbCMFHUMdic5FGG3YUszh4km9Pk1dz3M9Qw9UQmYn",
  "key21": "62RQTyHzVofBp4CdvJY6gdhQnLykXnsSTgFCMBGUC12LoQSUMVoAsTWskEXFFt5RnEFoLytzJfxFoGb6xYwKQgc8",
  "key22": "5qdEcSXmuchjaQpZ8kAzrvYtBPTqyYhxWiRVCJtBG8X3iJgjGZhcLhuKDHyXiqvBap1GkmQvx659C1ko6gxuPqUc",
  "key23": "2R6sV7nJe2bMk566o4C9TdNRNvfGDHkXNp9YSwiHNTobs3Bw4BUXiKe4j4AR6MDEcWXmTTAPkaXm8WiKALDxFDv3",
  "key24": "2vpcycTCyivic9CMrHBrUaGiqrsqTUNLH36EfuNpmhTDHDKxofY8KuDuBbY49MuEkhoTvCyLNbV1zNjLFMKRZAPJ",
  "key25": "4ucnYt8RLY2f7vZL18faXDko3teFU7sMfadobzuJovpsLdWbC4WUYdMa76RMYYP5nXbyq36dt4yPLCizoDU2wCpM",
  "key26": "5diVYKcToonrCzf4N3qNXgXfDXLonpD83bYjkLttVV5wyzoTD7SJ3erg57YeV3fTe8y1Y1VeRiQSo3tuu8aXrb1q",
  "key27": "2SJaFsGXaVpbhABbztbVYaTTNrTd31scRkrftGut7e2z2ujedNjCTmzqszy6bRyGwjiwXFkDF6tHwgieRf8EFPct",
  "key28": "2qXxRUcvt4wuWQiseVuWUWGPyfJ5YsQcRiKVPS3b417eSuyorHE1DasAUPx5J6VFDz1SfXQADc8xUGWQyo4U5C2A",
  "key29": "3wm8yoVPCdutVqJBqqQo3mKUyxgS6mRbgcwEop2Cp3uXpd2JzKJR9Ji4tSYS3mbsRgfXRrSjThXG32cbmksgrvow",
  "key30": "3G7PpsaKmJUdS1B6dZVSFgvDSaLQvkj1DSHfVmqGBqeaFzJZpJQgL2aubDAWRJYr5avZ6HnnPbgRPQbWzmiAvp8N",
  "key31": "5btNLCq29S9chAXiF25a4SJT4a8cA1LuxpoyM9yGBe3c4KqhGAjTax7yv9SMLToc2LYMWBs8egMUevywD7YCZhVi"
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
