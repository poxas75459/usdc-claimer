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
    "5N7xeNoHMQaKQPTLqD1cHfrvXeVykryWENiEd9GsVxEQA4qsP4vL5ferPJDJVsE3eyXmWGnFRC6BfuprPA62eUHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286UFUgakGrDReQuZafrSTb6WvzxLkqPW5kquweRkmRftrjyFHq5THy7SMGrx1empk3djhtG8DprFk52ixpkESGY",
  "key1": "4bQ8AqVg4Adwj4LGmgRcwRt6E5eXhzTdJKwVPJjNNKHAuCSCeBUWpVxDoc73EuJUhb3kmdkSGmhYPwrGzdATBFuS",
  "key2": "2Ud4hZauG91pMgyaPH5fgQt8aAStkjcTsBLkU5PAuNLgE7ocHFYEALc5d6srmz5mb5FigUJjECFEBYhxzzhvX6Db",
  "key3": "4Nxkp3bURB4b9Q5SiDPittDeukeEDUJ7deSjTLad6QYZ5zcruHBqt32ign8q9FXvqCETHDJQqXGACDohg3wVMtAs",
  "key4": "5XAWbvsw1RqZAdYojZRJvHPFMS89H2Zb44foDNdcG3HiDGYZXsU8kjWRd2WsdQWsFnFbjMok62yh9vADE3RtntHr",
  "key5": "WMMosVoB9bkRnbJU2VwKtpEto51S6ccTVHLrNJik6ZgbxTv7nt8s4Cu3xEL4RzWyBQbFJfKQkH7sW8WmJD7c5Ga",
  "key6": "2ttXPzNzGMbGJUSjaHoTmotoxWjDBVPw4MRd1L2gLbmmcST23gQpTYRhfKXVdrPr678wVZHnnNvKFaN3AEfFGCM8",
  "key7": "5bsr9JCqTNH8jRrjTz2MbVqhbhbP8f2mBRZQjN47TJs5PUzqnjSQj54yyizQPv2ksp8po4USPPRYK3ECyRqTu7DU",
  "key8": "5drqnm4XuzQ8Pyarh1V4HQuQPRw7pvSwjpcCBFEYnp9b6Mmja9uErdhQRiqup3tJSYZfJY7rM1v1Loc9xjkaRMra",
  "key9": "5QB8zN1u7Eyb6YJcKNvCaCjVNMLYKasuAAAWSW9NPxaY3isuB1pjQ9dsXcr8jck4FMU3xjVn2aNnT2wpVtVGb6vP",
  "key10": "ePdkLkSmE2e8tjbGCZjA6tTskYGP5wx7LhecuQrQk92udUz9U3AxjQMDrfgthTVu4WzE4YjwxY5kc5ZbF8pmWyR",
  "key11": "5iESWAtVGP9nwR8hau5T2D34VN1tQip9MPRugKKGsJzV1vHA6bgqx1vcTeHd42BhpPQLsKYYENyhM5XEqbyAZTV5",
  "key12": "XKaSxEFJD5UioDuao7szJxP8GVATRnzMwqhn1dZwS1e6KfmbHtj5C5XjAnoc4dt6Aj12mPQghxcTcaWZEwuMhMH",
  "key13": "49ySiWA22jtfSvteBofujUgCxbb62zia7Mi6jnZgpGjh2bbk4yQD7S9xaLBEvoUu2pMBH5WEYRxNya1XMsJLqsp1",
  "key14": "q4aByxp7mArh7eWHnRP4NNgTsHEzvcEzmy9qivffAPV9FDW3JJDkS44gapUZ7wAKmZrpmDa85n92o1srViCkKbq",
  "key15": "4UHgh4Sf9cGobJpRzhMz2RsTdP6tSeci7zhts7SKDmszE5cNEJbCWzWDKc9o5FSkgcaQ4ntMDH2MquJmUvDimGDa",
  "key16": "eWypygueTUG8zRjodaYGpjj6p3ni161xGkwQ6zU42Wb5pdCFHcQbiefoHGzRdjQ7VUyRWwkpnAm2tB2VUVJ2DsP",
  "key17": "3N24VA5MMdsQkQzakUybpqnpWJzAcDFhvaZVP2jx2ocNNEVji8X7jBP8xVcx9SkgVV7EyrodY3aFDX1kBCURpGeM",
  "key18": "3JKqR7yd2yuZj9dtSyDicu3gVkCErCNhVeU2yFXinBprzPvu9V4dzPcFX8iEqY68AmaPrkwqqw9r1nBBfbhjrpCa",
  "key19": "3tYMLa6j7UDkYUqxYc1t4pmpbEugV7gsneYg1eiFNuvtmTetzsGVbFDarb4V4XwPFd8Z8rnSxiSEuLdAwYoc9jW7",
  "key20": "34mcrfDJbJAKBUwBuvH5UXmxJ8jv1EGAriKcSfb2geEi7nncSNdhnuxmpEpwnbHQ5swtny1J1Cpyk2Hty6dEMENJ",
  "key21": "4me92g27jtwPmjA3uUYSrbnxtNFetKYPKsAWLEjhRnGtFzxixsS72tUfjXFam1MtkLhUh6CTiqaQjDSUpWfFtgSW",
  "key22": "3njXuyDGzVX5Fpr2FPpQH74M9XiSbo4DRP21nzfb349131zm9GynQpuNuqPzAAx6Uuz774ZaNHESxaC6QZB2Hjbr",
  "key23": "3P9usbLKQFYUumq5UzTqRJwEc79TLsamu48jGzwNuQUrsgkdKXnmKDqoSHhhGW7dGo6F9hBM4TZfV8yG3wYyyjvg",
  "key24": "3LVWPAFnTwig3LPpkVswBu1bNSya5DAjqG35FP1D6aWAwyJW9w4bc1K5fuQim7x68QcLdd9f2WuQ4w8a7Asj4Cfk",
  "key25": "4jxj5he7RB1XRTfCbu8HPgxMXCnw3LqDmGztUJZC2QUWcxMDAMsfR2vkp9wN5SGz2bRRHTGj1vU1AuJuT1qaxmBK",
  "key26": "4T3btLqE69MvCBXWb4qb5E3MefaAmRiADLjkmsHNZUV2T85JViPpL8Aa2PZo8ryS6vdSaU1f6CeciDQX6kvkpc7V",
  "key27": "2xQ817LAtgmnWCPFjziHpk1naXi9NBQjUUZHJ37haLqXBp2uYknN5Ra97HZjzvijh2z52TUzmzpafBgDLsRp6ERW",
  "key28": "2KgaBRv5bTS1HR6oDYg6kNjuNmRZUDTpRpcuRNiqxuCwt3S65J71mzm4E6QACDZqa6ZViG1ZJ9JvR66owN7no7y",
  "key29": "3r7VUH4H3z5wujBwLGnmmEYWyN5QPMMeLBHKXnAFdxTcxptwW9qyHp62QSggyGgc5eeMCC1s9DsKMR3wrPs58SmT",
  "key30": "ZeAcbpuXGHm78kzjsSheNEAyPXb51munDMLMWFkXoV249FduMfoB2TT3ttzbqTxBYBNB4okQz48QcsnqknRMvKV",
  "key31": "2JyExRxDv3Uv1BpY4Rrdt5V4YuPVWtT6uaJYmJRTSvwiB4QskbCdzg26FDsB7H4988ifyvD4wuYxZY9EfxETv1WK",
  "key32": "KTsuUokefJYZrwrdF9a3HvqmMuj8mvSxyHMZsqJH18jTcvdU7kMNqeaoMyejBUAND7gGhz6kctRQ8MPmayDtAXL",
  "key33": "5VMXRpQxKWScXw519hxWdYSWK1VGwy4h1JBmp4YJsSHtZVpN9WuezvE8D72naHHsC86YEJi4c21t8RKxRAZtTBkq",
  "key34": "5JzPJ2jTv1AjkrpRb3S4wMC4intQyTghht2s5wJc5TEvd2RsS8mpEYGA2uVpiUQoWZaepAmTqHHH8rNQuwWj5bhu",
  "key35": "5LxGX8xanNR86aUzCHgaqrnzqZ5wDrPrWqVtBchgU8FTtKLqYidRBjLxAkctKq24ghjVvTmAEU96jGi6pZUoXgjD",
  "key36": "3kh6RaZi21QUZK6hRTZvbVnuGP3BJyZw3cpywGAWVZsQcJBDsVacRwz7Lp7i72LKZZCwAR8JJG5kq8K9MNYJWQpC",
  "key37": "SHbJY92cXydTVAKk25JjRDFMpNcvA49hUNrzPBKGhxG94iSpX9zpJUdj7T4mmLV8HwAQocx3BumGdSr9PNWQuaL",
  "key38": "3fYR3gNSc4VfXXiy9uRxK7k5Mo8BkeAwxv1m1xo4UpfiXQZofi5e2Vtdb53hSY1cMy3sQtEee67dMf2rk4xHvrVh",
  "key39": "WUb5TRMB8XnnCFXDgWo6My2fcsz5Mek5NvEkpmN1ts7BkvtyygDbgYdsPMgvG8oEpkrS4S18Vczetw97oQXtscE",
  "key40": "2QwhwXWVbrVCpNMSQB11H7omoqne3kVnEfhBUgD7TpGDwop5atrEqNMFFYgi4NEshneguY2uQmmKCg9MF13w8EcZ",
  "key41": "3zWnmY4PnZCvNjRNsYPzMUgposMnC4uBxroG2PaBuiDaFWbBHLp3ZBg5VggwF3mRrCATkQJzBHoUwxriPqCmVaWi",
  "key42": "5K5SJnyuWjNX5uW5QHoYvXmVHdgX2gUTdyqbkkH138DHW8j8wnon8hpuQpJkN2ciwEJ7tNWPiq7KTWpjEGt3HHaM",
  "key43": "4NMhxnCMtvg2gRMM6kjWYK4rJPiJhFyLYtUuXH7YtDZpvoXuWz8bxPsj4j4sdeV1S2Hyy9ZxYjXTewVtxsiMLPe3",
  "key44": "pRhSC6yTq2dq86VaRp6ZxTs3KgxcKjcYmv8QDAYXWzJqgLsUEda436DZcPpCH2wnkrMZAQ6Nztnmn7ygQBWE3xD",
  "key45": "5T5pRo6z13TNqjnxMVhU5mGhhdEeqsFm1Xx7zTMoNZutbEoxpcKcSTZhr5DHtHsHErybEdjZZ94hZQiKLB5qPvXY",
  "key46": "5R7YbsVT79qBaKcJdZcwXSt5mGC7Gvwz9A64DreMVU7UJHb1bZehUtAfYMvMyc73QyBfNKxQFZDXS7Ca8RYmfXtb"
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
