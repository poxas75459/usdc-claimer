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
    "2tg9JUVMZaR7YAQVSevDwddckiwsGzcJEtzSB6hbDWbnA5i2jTyiW6uUZSDeeSeTEstXiafGCBf4XbthuHyZ7xrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o3jvCEsPeMZdVVH8mTNsrcbeNwhfJwh1qzaM3KqShCZpCvh3w7QAQ3cmer8JDphNpLQ9DnGoGVDtJFFsx1KXJsf",
  "key1": "3nuvAV1Mmcng9twHJbRnuwmJFW1ehshYPhtjDFeKvGfQ6QDU6Qq3NeWPqmZwZgDdduvhoSyXiSv11LZF6kfKaBay",
  "key2": "94xGi3aLhytghyCRVqJU7oMfPbTcAvshvDLHTD3gtJRLxejS6LW7a1DP6wZAKxVfTaxmdbySDmU2rWt3GzaP7s2",
  "key3": "55SBei9q3iGrfkFj5TmqJ6TR5ZCotsoK8WdFJ26ptvxJQTPmpbBWPQnJtGMXPqHLTjpGgZvzoFrv6iXvdXwH8AJD",
  "key4": "5TYB4Ch7aJQ6bCnZrnsnMtn8BjGTfzqV2rDDqWSPoatQ6hK4TygWHCd4FsqaAkw8FuA3Qks2cWu2SjurG7X19JUk",
  "key5": "4MxrRg7w6jV4jWeAjpamHWEARaN3c9WLc1hovHpnPvfEmdwpNLjoL7fkjWcWxridoj65VshmXpm1n8ocCbgAtCet",
  "key6": "5Td4txKm9M5y6urFcQzpLGQkKHx5vpp8Wq4FZvzWyaP569qgAeSd7L8v67SK9ktmtptgwGfmM6dmGzfnDL3mT4or",
  "key7": "3TfPgVAuF7SLuoaFu8ZsKZtc71Mohbq4piVtAuvYvrNyU9mwxyjYEC53UpvQdRhK6gfHPu9c3Xnpddi8TiWx8Khx",
  "key8": "4UC9ELy2aVG7919QkW36NKv1RZQNEEb4dASXXtrgC49cj53nGY2LkMoBXzMB35hxXgM83gcwsC3BgX5JKyhEBgoj",
  "key9": "4FtMXmfh8nWBjLM8DCAXYjEwxrt4iBTVPRUbTGpbzWHXmovmvdwQcnE1Xqa9JygHHR5eYRGVfzYLnSF9myVu6P44",
  "key10": "Quzsank7LJL9c3mgukvd3EBqvNs432i1XGiGo5VA1ti41nZqaPuHqT8xfyKpDARcbuu6CEA3pY2dq2HM97quCak",
  "key11": "2GAVoqMPw6GGW1dNG1DK1LX8Pw3xzk248uNux2MYgVHbyXbn3RUrLbL5ox5pHdNUWnUfj1y1NYbYyRqJJJJRRBgQ",
  "key12": "5eM6893kr7N13gFgWEtBYRMpa1P377UVoX5XpaQ3AcroAZZWeUwdjzZdzx7uLx2YT7tbMXJqvKcoFZve9v64zs7",
  "key13": "2mFscHjvjLqZLUKogLCn7HPxj9Q9RSCf2Sz5QzCePSHKEY8YMhfjLwfvg4pWq6uLXdzRvvZvQYqPHgjRuUqSPsnG",
  "key14": "45kCtwWficLpdj7BFHTqcbxgmcGVgKkQLGgsGfqfCuC2khC83h47Tj88uP7xfUTh1Mfg6yqYn8zUbz4k44oDS5e4",
  "key15": "55ywZPDWSXJW66kZjE2XibJC8SikeiFzXp97C7qqh4UL1CGRuuJ9Nj1HxjzsD2sbtD4uaUhYjCE8mSNZ5BmSCCuo",
  "key16": "2rszMH4Km3hXxjaQmZn4MmBoPnFd7Zc3PrXf1V6zjp8EEmwcMF2yRMe4WVVPsSSRc8GnSnJ29is3yG1A6oWcdr5P",
  "key17": "45u6qqiwtVTZYg6bZT5nvkBB45KzdPBB42bgbGWR8otuDScph3GYfS48rVXS89bVhn2WXq7ZNPRnYKuRGXn3c4mm",
  "key18": "3W5Hhroo8sSf8wu9fR9SN2kTkru96U8pwCs2dZeHrdoxWt5Y8MnVLkWXKB7jeR2WPAy6TZ1qttWJvu5uKPM3fCjM",
  "key19": "3cURiBrh8RrBtuLJKSX1AqtMw8Wga5VNebuDHRchd8WsT1iMrDmnpPFFAeHH8gJaU4kEPbC9ceszQnMuBxhDRBDc",
  "key20": "6VYBm2rwGhTBEs2yKeYCsSKd6rsuvW64gUqWD5nCN2WuoCDXbCKX975s3sSaFmramtw2wg8vuUktsMgfyV6mXcf",
  "key21": "4Fur9LY1PL9fV9398ukaWRd6NNexmgErZvqgxEzM6uBimSf3DF4D1mGG65zEejtW3acFjWi41DZ7DohuBdieEfSY",
  "key22": "ZXEa89nTGZadBKHWinuyfQwzCiGy9YS6weATxAYcuKFqBhuzSjAJNfLB3LtWm123iKdmTDerLJF1c2ZvzBHd4m7",
  "key23": "3oc3KudygZNfRPziwiKE4c3NrU68euXBYtvZuRCaFkGHWo3gTsSBwvDVEQhymstau6c34vRTBPHzfBa4dDVNGjD2",
  "key24": "2i9RYQU4ba3XqTaNui5Mz8xx781Xf1NTvofpMyov79A3vtSB1GGhH92bpXvmeVtPFXgTiFh7CcLgMk6mYsW7Z73v",
  "key25": "2bXMsKDVGNyh4sspTTw7ZvYfZ2wxvx8pmbmgteBwJsaLXeESFqqUeoehuxv6eXK1uLYjmsuETVEbjZu6QDhiZ9Nh",
  "key26": "5tNoxLRjYfSCsPEGJmjhRbRi3DRUd6kfZxeefPwCQ28WtU5zx8AH5PRNVnERdR5W4xKug242imYYSExkZW63GUzi",
  "key27": "2DV7i1Q1ywhWvHkz2W8HtA9uYQ6MsrMPmxMRpFy8DCMYsASTRGuJdABJuKGueDr75stQyC6AHgM3PRXubj7cuRX9",
  "key28": "4nycJgSYDXAaoMDXyNL6Lg7oALkoqGf1f2tDsghz5WjW7p6ZJyztwe2YW5a3vyj5xjHkMFjkn2ApRQHfhR4sc4VK",
  "key29": "2EuiNGFdrcmjp9JqhhL81RpCgXEH5ycWYCw1LjYHr8u1ubm1Tyn8NHvaXrsD9qNzDuW9uM4hysaTa6KaRSZqX4hx",
  "key30": "4NwK7ekUaTAL5UXZ965kV5exUsYtiVy5er7ADkqFV3TBAVCVrjMyYvEjRB1mLG9rATjdiuRjKJAcjpCPQKMehYAN"
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
