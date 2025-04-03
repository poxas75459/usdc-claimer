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
    "4AL99tvvG6tLxSsdytxXB8JqgDm2XXtgKaSLLFxVJR2hasRCMvJQonGXr86utaqP2L3kPzsu2pTu4RUS6q5AKw9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvZg1tdeVZ7hwiAaFzJbstKtumY2Mt7s5zLz5d6fsCAkV3ejmDxBp1KHXR4nzLE6LPt94e3wdoQQexvUD1mLT8x",
  "key1": "wsx7CeKRWaGCUKvZPrpVBCZ2tfdZbCuJEAjsgvkyddYF9tUPRhwfY5wJ1scYDbpQPvCv6cBMS9qtRrASg29P86P",
  "key2": "55iZVsEErt2Ut8ouJKigbTdSiQ47PLJznmc1W5LYSUbKh8HNxmEvjn1eWyjgwVjksMZQCFAX8RGkuP5qNHAhYRFN",
  "key3": "3gRJ9EfAgLmrp3FVfvkftyW76MA2QDDBVTGfiG6A1v2tqQhQowxR7MC6wXhHf6RbKcxCYHMYYcjFnkAKLUTwT1Kj",
  "key4": "2yfEBFFBhZCvUzQio3wMZgLh9LsH8npz2DToFgc5DmvYd3Ubov6c4F5vnhdXsWscTRUT9p7VGpiuZNQXAmaQCkJB",
  "key5": "4kXZ5RuLKrJB4QRhNgkvy6Uu9h3DTQfVjc4fvpdrCyL6dwzXL5CB8kUqjzN7EHvuSYLFvfwpH9FX6p7MYT6LGbvU",
  "key6": "5LnhpNqNQ727bYKGAuHBsXyP5L5gCTAkFeWMRsNbGsWqrDjZZV13CcF37UiHQ51HgssoimspWmahaoRkgER9BZ6f",
  "key7": "5TFuyP1ajWPaGfYzwjNdc3zcDkiPTtQuxonPKpVLG4az83WR2eWErNyKNX5hKyJfUKv66fnfR6K8kNZNKdSKHLyS",
  "key8": "4WYQbvxMZUdZaf7jQKMgWW7QWdSmxVprssuAbnzxpGRc5oVa5b6MXYNpzz4k5Hjt4GRSoS5ikvgdnhgMi8ds2Vjw",
  "key9": "2Z9M98D42bLD5nPwbwSmR6WCAkKmmtaZ5V1GNb41c9t3hrYM2BmfEZktUygnTqDeiTyb8R3eaSRevxcfVZseVae5",
  "key10": "uNfVeLoxPY2Jh6Tomtk3ptYJfiUJ7DP6R5w1ocu9PCzAxyNr4PiQxs5ZuGxoX1VV8rUsn5NzUNaWZHe77n6m8Sj",
  "key11": "2qW9NGo4XTVEYPRQXa3RZYeD56J94TeoLjsqdQUdjzx43WZw6yFGF5z6y8KFhF6DRqGDL9a6zDETnNrLnxq2iGgc",
  "key12": "3xVMHN3pRAxVje5x9nodcXscwda8FNH7fFyE2cX9LGHYSyzFJdVckwoLtWwkAuC3oZGYyLQazV58x36pmUfhcphf",
  "key13": "5D55gUV1qFrMbGtif5xmXYj65U8awyLXmUaP3NHgX5UPUid1NSZiZitrCRnwodrfnZ1Nw8hqD372JVoGS3TAdB9i",
  "key14": "3ZBm5k65vN7mW6Ac6RhFZkcCFmFoAw3hRDVorMgpVog7uKiKLZ9oD6yVjYeCLQ77qtrn9drmiQ3Mmj7rhiFfS4ay",
  "key15": "3LjbDeV4p22eCKTwotNEbe7JcAfN8zevbcMytxqUA9NBKjeXt3PfYpFEM48fLVzeC8Y8LpKQHjCtGajqvesVN9NG",
  "key16": "z1C7BjvrybuLe4Zjc1xysNKRf9Ahr23pCQrRKTwaXzftvBK2gK7cGULF28ouJuR9z8YKaHx4o5jHsYBWDZojrc4",
  "key17": "3jEw31G78KCvdddnSLsEUcEhE8ZNbx2HL38vC38ao4GTwRGKY3hDvYNYMqQCGuAQBrUBtWRLERZQAncpuWbGyr4n",
  "key18": "53XLhHGbMGYVajJcZvcJKQ75K3n5FZoefamdDqpxv4VW2rN3kw3FNikjFMCJRsTGfWhnVNNUgK58R5CRe5tX16FV",
  "key19": "2SprE7i82HGxDDihmzjD71zNsyADqs2C8AJj3wqxWB7qWbND5sNx1qHivLtSQ2ugu2BdHVBpju33K6YprDCCuURK",
  "key20": "Kaz3xP51yxmwk5fvVBEzU18fkNfNZnNyo4gRFLNYTsRPhMykMejq45jfSFXNmAGKnrcxH4JfgWZBQVW7CL786R5",
  "key21": "3nrfRV6r3HhtFd3rJh9BmXAkoZwnERpD9cwZVYCKvWqVWMgpTcEBZ21Gvf1WrW6ddgXmz5AtSTcCPsosbmKEvcoX",
  "key22": "4uzZcpGhxWBngYaFQU8WsRMUu6TUULtwNwFkXgeJ7vah57DZxQkJcHS7wCvJ7oKeCcFZFHqjmni1yjoxqUEaeAab",
  "key23": "34bbwumkJZsQ88MEzZDMP3YfZcLksPEDYLqfZNELRoHsk1wSGzjzjt3wvSDCkNofamyqksU7gHuMTAok7Hrek3vM",
  "key24": "4ciwvNLfwdew8KDtmXsf4A3q89PPeZvKuDffKXMA1VUHt9URDVZWGXT1QTzc29VbX12LQ5gLn6AxCVk3u4goAezv",
  "key25": "nF4iyeWXH6DS2HgXdk1g919BbCKT7rL4oCxPXrEFQ6nBF4B5JbHkQNLabuinb8hSqaDmx8H6scjenSKPhhkyf1N",
  "key26": "3e6h1Vvsvy2EMEyfbV3KfHbw5xeXyX3WzVDAKTZYTUyefbEmcVe7aGWQgnG8hT8AVuAPvoNM5ehRtcFa4E59UMNE",
  "key27": "5yGEuF4W9RcwB2KZHYZtznFxnhUVxxeaZkLPMG9MyEf3QknpJna7qRcZyx6XRiUg6scNy4Wfxmfv7peou3ue4jNP",
  "key28": "5GSCcJUZunpbrMPS93xi87SxFLDBkqGR8F6jJydNWDjtg9FtGHW7nyLT6CoEJVszReRixPWQ6sXSo9EG9SrtErhC",
  "key29": "4sJcQ6yGjZbE39ojHRTKBy6WxoaDty34r117cF85iYZTaL7gkXtqStNhrmmm7cNmigsvcQEgUH1qJmw4hFo78fW",
  "key30": "4ERMKFkn3qAQ3cgaf4Aq3XTYPNsJ87CcytKmfeiZBFBkRRGiTkaUvSQQoh3PX5hovrmijwgxHdtWVQ1KBVtC3SbS",
  "key31": "5ruk5JiQNTbX28TJNz9Cr26aoTYrniCDnavwAN2ZxBi6AYvjeWZH8mZZRxWw14wRR2UmLrBMTKEgbqLfJdegMboe",
  "key32": "3d3zUvieCf2SjGuDqd3ZyZc1gSUBwGmU6y11m5PkrKb9qGKcMumLeV15tCc2E6KtP121YL1UCBYMRGBytQjidzWr",
  "key33": "5dKb9ByNnNE5nMC2drBHaeQfnd7YaXZAZxp48iQwYqmoaqynm6mNooWnwwuNutfR979nAtF5dAoH5xxqaJztXY9F",
  "key34": "5AY3NYXLKynQiDqveZv26Lp7scX4fC6ZqCFJ7rnpogjGjsdLZGijBr5h1FLKGCcvszLffRk1fmtXkXfvebEVZ6Bm",
  "key35": "3j7UDZZz9neZmN3ft3an75itHrTeoy1AzvLfuwA9qrq1symy7eqFNQDnyhYRQsxvEFLd9Kcx2eFicDXVTezNdP1c",
  "key36": "rkfpeJ5hkoSzf3cHZgu5Xsrt13mhHoQQfnLpZFWH51WEUN9jZQZ51VnR8dQQq9hpnXQGz21BmrFUyTGDBBANhSC",
  "key37": "2eTVTGjz2M98GwKT1VhB8SAdaKswKJcQ6RCuqFExW8kDmuZoNHgn29nsYkvKtxoUgTGrHmm3nmgLeYaJPauVtbHW",
  "key38": "2fUggYtNDCtBfWAKQ6xwh3mgahXrLUoQb51H42ieWuEbhRLg5wQFTgiKFHnSpPUnXYfowRas8ZnbhxDBvxpo7q7K",
  "key39": "4M5kZRNrQa1pbt85s1FNar9M4vfFcyQu8z2ezwkkPwi8R28UtgL2CTCWuUoBWJMUjt9C7vUK6XwrwcY3HPyjLFgV",
  "key40": "3yTfcBdKX1G8kGYThU3UBu7WYVBnFFCnYYVS9BnshRA49Ug4uFwJTvsZ2Nsbcsgi9ANez4wwvLdRttjNGEhD8BFq",
  "key41": "23ZJgZLSy6wftqW6PvggeLshxiPvTuqxYNZAH1y5zmkBeGDkWCzACa6bb4xqpKVSiC9PSmEseDt128CManCGszes"
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
