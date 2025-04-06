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
    "5GdcVYqTchric4GLK69Rs4ERDKsiyiQEdgdzMAbyQH589jRvDv9XYEz4UfecGBJTmXb4xBXW71pMUpKCis9NRdom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQxzQAYdYSThew5vGmFqvi4eoNSKKWFoKTiMBAiNRYrJsTR8TNPXLzC2k2JGm3HuLQ5maeDkYgLUMzjct7tqjQG",
  "key1": "4LbdnhEfSewrBNYgfFYesbEatde3McrZqK9dEro2nk1ZvCNxGNvT7Pc7LUzfifTjsv1rWSMHWxKJpPhdyhbMtWUj",
  "key2": "JZEfhyvDBjJLA8uwPvxWiQQTR38dEdgtS2h5NWratepbywqoYLV4oFnKtNHNo8hoEfb5TkviyAPLxSSobNwEqFQ",
  "key3": "5K1RsdEmCUY1f21WEEfkzYxgkwRs1STT8aZD4ES82YfDZnLrwKuC1KYBhFm7QXBVuzJGdKJvuQmoLX16WNNyrxVL",
  "key4": "3wzBC8t7TkYRkRisASitLNTMeSbntKukmpc2BmxTFNji1n6BKwZ92SyTzads9P9BXB6xLmpGeo96pKcQQ9fk9UXn",
  "key5": "4gvzzxxrFPJ2nwHnfqeohBpWCrfSLqAJfce3H13CeGpda6yfoMvMSaYWxdoUXr1AcKWoyx4jDAxvQNRXxY7ZRwN4",
  "key6": "4MeB9o7rURoySJoV7c9ZXSZRD1JBXp2odVttuySHZ6KwFEZxELBDGCcrpW7hn8HUXoVjCZzmAFRAeSfcyMAUcnC",
  "key7": "4GgefxZbbwW7zzdb3vSCWR1v2XFxBTkTRSuFmt5iaVRdV4nXdwNT872RUQH3s22dtPxP2eQzAfrYgXPSbvWQvhMa",
  "key8": "5X7oqwp1BgzFjdMvLCvfwg38TDNvheh3APCJ3VYUH3tWGjVALQNWd3SN8fwrgk9ZJJKVpDEGLnodkr1T761PpVT6",
  "key9": "JLe1GwUo6LYLRLg1TMk6PxuGzVt2syTWYErf8nfqoQSN1dz4mHLAMqaW3FKEPENTbegoBwLbQd1m6Jjpdw8ns6D",
  "key10": "2xVRtBuGiZCWurc27SrC14jU4CMb2SRB9391iHXgn7DswBQie7Hhj4DKBR2aRdG9GaE9v48hy67wDj3mt3aZW3jb",
  "key11": "rHFqvUZCn8am59zyBWpCS3bHcs7fWDhpQoFff483zZrHEKiVmshn22GpNyoSkv8ZFtxKQodrqebAHrsWBc9W8YP",
  "key12": "5phn7vQsspkL9HHYVZ42eUQUQXvq8UtWQVQ1Mg8viir79gYepNMLEhKbVviE8aXsAjtdATtFV5yTt5bWcwRhLecc",
  "key13": "2cD8iKpJQYUD9jhteLXV7ZTK5uSrcy8NgCePDgZTwbV6UQ83be77V6tqCTzSzrKqdHdGsjQk66gDosW6d1mKQHN6",
  "key14": "2wVHLDP3FCaxaExnGMjWFHJ6rbMbBj1C2aLBwxHJ2Sjjaz5yYVkXvf59AYAxuYQzfQJaqNiKMbFgyxyCch8AMG7d",
  "key15": "5TEVML5Uy7rZUApjFGbFw3qR4NZktVoMtfKD8e8xQDBbunfWcWWH4KD5qWna7daRsmQRgL4g11EwyUJLeKZ9tADQ",
  "key16": "4teZLrCfrCkTsBrFuqBtGmuVSvceyEcXWDEDKBShT5EEorDXQmoGSufBNU7ffAsANRmSzqRkpqKxP61md1wsYDgS",
  "key17": "4z4kHq55PrZ7Z8U7cZ13eNJ9ec6MqwK4yQQZY9jx9D1SpKpEgb8RQAAZPqHCd5vAuEkNDvJnntk1tQynBqB6tbav",
  "key18": "QQ1r9qEQnPZiLyYNYCyV9WSWJQkJuVeSqjXjxHUBNeQxueK2UMXMGkDEkty3FazZz5asakF2NsLt12UvP1Gb7yv",
  "key19": "2qKmwSfRiJAWsNUP129bJ6stdgZcFCBuXE8f4sUs6knxE3o7WwVgqJJSSzedjaCUi22weF6wThDLN4TC1EoKBsia",
  "key20": "3bkYwXvy8FZmqaVGWK3fdRDL69HZDAnGefhjP3yY73LcdNbKsreSGovP195E2Ys6o3qqQHJvTtHZ4okZ4McSdqt9",
  "key21": "5em9n6xkf6KwG7BshEZWMxZh8WQ4X2fmPkuhRQGJsNvsH4H3dWZteL89fg1MViAt9LvQhbwo597AJsSypykEtusd",
  "key22": "mXfX537FM3hwawsK8P3cEasPqH2bksGMuHsoASKgGE1MnbtmQxJbGXEVj8wtryaxS3BYpdgDmTrpe1EHNYTEfdf",
  "key23": "2UUJekL7qKHp4Z4a15ypdorhXhNVEv2KPqAHXG6rJuyZRVhRDRof9GRqjbqhhGJ6Q8HiLxiYiX9ZLuvH5kVdyGxG",
  "key24": "4S2ZQLuN3pd7euvbrtAv8Q1ZcYrhowken5QpJdmLZMnJcT3M6wZHGTsVdDejMNiY6QXzWVrpewMJbHvoRSFJLtdV",
  "key25": "2z8HerRnZvFPkoj5kNFF5DpetPK37FUjaZhPemxkajWwfwvRJhRp5r6sQoEKZ5Yv7HWSrfEYR3ENdHCf3qp2e4ij",
  "key26": "4UqvYY7Dj8X24wGTurKbMDgxxDc2qxJATmJm7gfTApRYoz27y44ijyMfZsDnDnZg38LWJK14MPGsnFS1n9igJv2i",
  "key27": "36JhWma1UfumNGE4VEnhHcX4WHjG4gddPypCZApcWtyd25ukVJX2SEshKDfQxtMRonuVvMzUnV7vdYBuVaHRDtGZ",
  "key28": "4akVxk7Jn8JuSZwz8bSDqozVicKg5F6SxysYBAUNZxbmu4cofizeSmpaBTpx1Gkki7i6Pgaf6ttG8fvBGKmnzWM8",
  "key29": "66s5F4T1RtCUosfBU3fmYznF9HcNum2tCgCXcaH2A85sAuHCqWzecwP6Hag1TfdVtuExdNMdBdBUGWNUnmFzAzim",
  "key30": "4junfTdjo3145KkGwEzsAdfyaAAse9Ufroy2v21coWW5m4FnabjA1CVKVgM2dtMGLmAeuENb5U53WtSd82tprA7C",
  "key31": "5qd25NVQMpFv7B6K7QyJseBZLh5aGBSb6mZ7tPuzkaMymLZX34SNcCeY1ViKQ8trwGcbuJhczRgG49nKFDccggC7",
  "key32": "4K2iSa9YUdbJXn6h63bgsvkhKRynT5VtnSx2dJUibXB22Ko7fJ11rMAYUT3HVwhdQYq4jNxhi1LmzzKEuzA1qHbJ",
  "key33": "3xvTyrbUHdiQQ7TGvFtqgCSRLAVYjioLpXHDfAqXSmRUbUDkbPWpTk3m1C3ircvcNMy3KfV9MvNJtiWCepehd81H",
  "key34": "JcbQNcENqEJrwXxajnmeuYUVoeGpH2zXRdrhNrjEYaYuA3MGP5KyF2d1Qgkq46ssB6atx64ApfXEmtHx4NEWgRZ",
  "key35": "2bezs8sD738f3y3dfGLVGDnbVgP2w67uA7iQFs3wpJuVSe6AbfwUpr4tLTL2N2t8DQqdbXdC4S7xt26opD5dpQSr",
  "key36": "4HvhYY9E8Uh5vGoP2ckb8wpHREcCKK17WXyhbsZdLps3hor3zyzZyG7Bej8Hvgi3MXa89Y7JPHzKFc1iKEGk1q2R",
  "key37": "61DKako7dfQy5rxbpPHxe7ediqvVCvNBajiQ1JuZ9VpvaK3BbuWy6aBPTEuMieCoRqLxiNR9DQFYGcecz1ho6TvS",
  "key38": "FSsJgAbAV6ucVmzHfp2zNzs6EhfhukxW6HsDbdeDBQj75qbLcnmoLaQK6dogkb62c1QeX5mipAjAQTuAFCET9rY",
  "key39": "1oRxK57hoAXdkTP7nfKfEAAAn6PiUMvuhb56kLZE1CjtP6vmceya1npdatkmEuFQH4vW6dM31J8kuQtRJQpNCa1",
  "key40": "32jrEvcCC5PgTvU1eW4ZBa7wqwBexShSzb6PTYz9gHr2DBwhJ11vByaNZJLTyba9YbxDd3YwXSsYittDzrQn5Lpc",
  "key41": "2Au3RvNQ3S4QNDdpJtbvGvHDkhHNpmjuUNJkfanH3eJvdXWxdCmeNHQGGT6hfGsBtk3EmwBKM8xNzDqyFA2kzcNN",
  "key42": "5hUzrRz6UD83oXmdrR3ivjG5TgTSN5B1XtqoRaULn2fbpjpF2nWMGNvf3QdcbRayYZaHWfVjgPtGrQBwkFHViPyq"
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
