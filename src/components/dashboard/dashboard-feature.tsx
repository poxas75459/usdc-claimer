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
    "2GoTi9AjELAcZj38ppc9YfbU1WHkWpwqfL3CqDqXe99hJZo7qJmXNhEggdTQJNBCH6jspFfUk7Qm9L57qQjGtAxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gsnXVDQQN13PKi9CwE9c4T6psjGLuBGDsBzwovV8pGT9Tq2qqAgPpf8mq9dmF24wXngTyVzYyRy9PgSWzyaPp4w",
  "key1": "2qRTUhHDBirKeTmJtXVkN9DSFtXQRoqqxuRWeiNLQjfnqcJi8jSXf1kbZAZfTHvYj3h3gAg1AxJVewbghnBWATQd",
  "key2": "3QaYrnEmrWTEt9xLpoXBYwvLvZRPQqLExee1TTjwhqCSrz6YXTx4ZanmhHoHgjWewcC5LY8KFisB2Fm9Csw2YNGc",
  "key3": "2JpyiPNfrjvmJRaFhKsgscR6jFgD4E1zwyxtnXt4UyKMzgtUm39BGSFQk8hMAHe7z939YgPaDRAk1q8PgpdbWVde",
  "key4": "2anjC9LXbKfxEDQ7ziTdBHYEsKCJq7T3EbpFjXzwuzuwE4kg5SosvkQnxrSYZCPHfz7Ugx94hHbzkEZKwcWCoP2A",
  "key5": "2NbHEPHqUqaJLA7ptrpi9Cc4DQUZKcBye6JUAT8D33io659ALLGhx6fe7A3aQd3QzSKH4phfYLHYPFt4aDHjbCRS",
  "key6": "37xnetybUQhEd11hfPsAb1DEKGdosRXWWLiYBvrab9tLk3xsNwL9TVZkKQYv2ZtK6zrfQhXJzxquqPGzFNnWBJE",
  "key7": "5YgDRaA2LxBtiz45VatebUwWAvwcuLGSL1PJWVzNiNwnSoRVyJG5E8G2ZbCx9hC5FiBE27Q7zGWmHT6FJt2tkDwQ",
  "key8": "3cth9cDBEJkDhjMXMKjSaFRTfUNYL9TVhCLni2oaXgBoo57wyA9Rv8UnLefKn4LudG7Hz5rTqa9tA7KDK5mKPy3R",
  "key9": "3SnbfDdBSzPjqrpSMJ7UhP1t5Gka2bwXT8zsJEuWvADQv7GgRsCK47txheGKB7unUBumf5JmXtvG98MVsBVfEogD",
  "key10": "2xJELThkJmwJhuD3Vv6LoXPuzXew9JRaBBuMLZzXTmAL3HxLE1ySGKTBJGAfMDLaDPDbPsetkPQ1kpnfAePMbVoP",
  "key11": "2wEt89W46gfjWpRdyy17E3qGgpYh1mHjNFcWEviRQLy7JmMKDY5QdHMu97pfLQwciqkYzqQjKPWx17iK6X1juJnx",
  "key12": "5gcAoywUFYhiBHuh7v1cFtvZvdAczW5WXZP3MVJgg8R6VHsmGRhLf5ijShYiFdYSrxxKxs9uNEgzAwFkPJv7uddN",
  "key13": "3BCcoEfdf84QVfjx1S2dWs6WXN8cxCNbCpaMDMvgbMdRxPoeegfVHrbSuXPU6nFE3HWGXtRbMdv7r3pZKu6LWR1r",
  "key14": "cXtHyw1jfE4zB6ZofFD8dMWNffumrV2vqBA83Ms1EESTr1xPNJWgReEXmyPzpX4j5FbayNCUexGMQc6nNAA6YPc",
  "key15": "ABnaCC3sMa8uRpHVev95quvoAdihmM7tfFVRYFfGEYs7UN1AfoB9d4FdB1MNd4LvU1sQq6jv91sGhxkhnMPWKPv",
  "key16": "45qzigCr7hszweTFdsYe4HsZS78ifPuoC8mxtP9bhcqP1QW16XcYPpfNSWcjDp6pSRgLXet1KqWeUYee2t9wDJ7u",
  "key17": "bX8RmtFMtzzNjfAAhoCDGDkPZgV5ghJ51FGJgM9T55G7mgoiPg2nj6kQocBi1LBsjLPhhMfNtJMiasSffotx4RD",
  "key18": "GEKPhqf8CDawp5BKY4ypA6TZS2VeVnRZhZptJmMBJv3imLMpjXtiGyRzbyUF53DT1wiW3xmWwCSv8uh73G9qqJQ",
  "key19": "3pCdx4EDA5z5ihxQdkTr5DX3vzEQD8WDC2w7A3J7oxr4XmbwAKnVC6STUPgrCe4JVQapM1HvpMQr8mktEknK3ESZ",
  "key20": "4i2Z2VAR3Dia7szr3e4gssCzcYhkokW7v1cPMb1xqMcCnYRj8STHb11JWwvFjAGUuVovXqsWzuULeSpB6ndidnPZ",
  "key21": "3q24LFf9DWNgh5NL3FfVRjLoDu8nVddDuawqSMREA2vmXjbzkQh6vrj3iQE33kg9Aw2HyvVpWKNyh1SAoJb78cT7",
  "key22": "2e2oHrskjXJeHrGvisF3FDTobe5f3LYrWkUEMFKxEVuwbRAZaNroFLnQr5KbnrgirMhG5PgBLjkJ5zmidJ4WtCCk",
  "key23": "2xb8uMfr6DFwedrjirXmFS9FncPZV8xh8jp3SowEz8oyMsS5H9Y9RcYSkdXJqZCzovqfRFDxhZzL6qsWNjbEAwMC",
  "key24": "4qmZ32KCk1Mcka7hN6kBcVrrDTfMgXYFzZDPHNAZ4PXVZjT3ssp3ZAtwQNKtADZzaajU1eU7aebsTrEVXe4UVrg",
  "key25": "2PsUbThKVc3NmBDrq3H8D64knF6rDLFNzysbT2x6ZB4HQNPWkk2MUGQcMk2yirisGnu7sPYvsfKA7PRRtbgoZg5p",
  "key26": "5XtTZGto7yqu1cEgj89JHNWej3HuR9j7V1DCP5sBM4FgVthc3iXZZBFmsGbRUwtpnXRpxMmXXsMwiMW1DMsyZ4Kc",
  "key27": "3vqeyaHEaqiW5FXNXKV871nTZXrRpjFfm4QcWVNF9nbKEtALzA3vsj5RVvqVjmj6XKuHpuiNQhQDRuUr1MsUegXd",
  "key28": "5cXYe1mvWbmGGFExznG9tREDTW9isN1znZYj6xgSwJcnRBGL47a7rtLxazxEwW9MrAZMxN7Hgi7tZ1uRgP4jsac9",
  "key29": "4DLz6JLtRWtQYyXHWf5koUBubajYzU64qnji6gK9hGFf6dPgWxwdQdXUEiJPbNyM49yr831VBitPwzTr6ty1gZuG",
  "key30": "5xKW1JYVb74qVLSNSPuUUrbZnBc3ycD2jvtRgMHxfSJtVsYyyrFKsgzDzZ1WDqgCBqMifArxk5Es7bDX8mVU4VUH",
  "key31": "5VxNHsA7cq8Bz6rd2TQXkaXjnMLGK5QnstQshxjRZsrorVpWbreuDr8onJqnKfyJV7ke77BMLKu1YbWwEtsvUE8u",
  "key32": "23V3D76tWRvjiDrQa1RtBoq2PwDm8QnPfMmZynhfK1njnrxRT6JBX1WEsEdxwUHPfgoMzTLNKcMWgrABCyENEoVG",
  "key33": "61de4kR1Fhx1HBRdXQTsMnhoaDfA77tmS2UU2RaGmoT1Wnhz2VGFoFiAutqAgZG7nXPF4PcsRff7PfXhbego42rM",
  "key34": "3QQRRGPaudhPraFiHWGJ77ohWpR1MnduH5qWUyBtUZK13VQFMNxPJFG8VbYUe9shEeeq2fszAEcgdYoY4TZB7AY3",
  "key35": "5D4rKd59RypCQsmWVdabg5yDCSfHuFZG9yZf6ZQJmR7AafcLqif1894bQ3s7szKEXwmtn4rpKwJ5Se1WPk4kvJAE",
  "key36": "5y2CmnuGLPUxn9jrGS2MPkBfSJ7abD4LPmg6TgwBFvJGAcGxXSgiTmPC75QKPRvk3mKeW11tSNP4dRSgMyueDGXB",
  "key37": "4TcmjEzvK2TSp85KdRbJGV39LZFaCx8hEUdSqUefvUVp65ddp5m8QEFuCMvLYb84KW9JSL5r3hPMop9UXGzCx9da",
  "key38": "3F3QsQ1DJhmBuL5SZyHKv4fgoSyZs6S94P7aFFJRf4kahRTR8J8HBUZLrTFBYMNYR2xpsYK7gqmvc29czZxXq81U",
  "key39": "bb9bHNPXG2vThVwo4bZocAdkqCnPbk9neAEyi6ViBxueN5o1rekGKC9Yr1XULUU3gM5rpmF76ekokCRMxHprWJL",
  "key40": "3rUJxU3LdJanUvfx4bxWyBfrCmAeeRbyZFSErYiD5MDabpBgSB1s4C6z49pX1fckcYYssHxHofL9zRvs3QXQRQry"
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
