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
    "2XA9TEntVe9NfstNVnLueDSv4zVFdSKG8zndUaPifHxJBzyKqxEVb62RRxoEJGjfHwxX24pq5u7NSJFkcLuf6xGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TGwkEDopMNPABtVK7dWhKvNgqKKc8kHxPbNkLuppbtGjh1sc7RchmzdaBbgBcBFyHSHAF1vJPaydosjj5GCqeN",
  "key1": "3UWc529nRbyhtGVR4rfqAdkevL1f1ZCWW9S3rq2aMaVfxK51YZP7VYE6vdHP1obyzMtFCGd3GfwGxFViyZpdqBM7",
  "key2": "4D13UVVoQuJq5T8BMz6zuNwt4hxKXEh9DZUGZx1osWGZh4RCFwRoDKhSRENntjF8oVPr3ZAWperjCxnH8tgWmbim",
  "key3": "RZtK3X8hAzMRN62PNVgyYa4VXZtu2szoCTYg6Mh9NGPEtQUukEw18EhSHxogmn8jxFT4sY5fiDmeh7hWKQfsaKg",
  "key4": "2RaSWA2buhYaCoRGzSQUfY3BD3kuR2J8xqEq7y4kVpx9EZ5jvr27pBnA37AUgvMdMkWCwzLQ4L4EXxoCjrLP2qUT",
  "key5": "2Aw1kpcskEBefh1cCgSDzNztaxvc2AC944DnWYUWi4EaRFDUxbFiSmgaVW9fzeXaB6oLfSupsks5whYaD6mJwYjw",
  "key6": "2VbdLTVVWP2KqNiS7v6hRpDvkmMUJ5kgaFAGogAomSHJyELgfmQTEDcKHcTdw9GS5CFdydNMzbKMb26oX32pGPPo",
  "key7": "2CNNk61PzSK1589mcuhiq7oYhe2ean1JuSGXtEUA9qXrNYe9eSyf8vqh1fxJRRaDh5GbTaoAimZgCTjEivRPrjEv",
  "key8": "twwAQAMQuHEjBuixxD4NYhDHxLyAoy9E33wPmnvDsWBrTLWiwSgZhrfdg8ETByWJy9xYFzAquK4667G31BwiPYj",
  "key9": "3bKn6kWMMWPjB1DvTtMkGct2yxTQokV87SN5XxdPSKyEmPaiyhaKYpAHeEGVvci18j9LAoYcN72DJx7gBxBymfXH",
  "key10": "364ut9H1XebMA2apxuNGhPQ2vFeD5jYXvUAQTY4Rxnej64bqeAtfRn7etacLLn6TrMAmwKfMCJr2QBS5rCk1y43w",
  "key11": "3Svs83zfkJh9NTGVYHC8dfK3taHBFfTAB5zk3CC8eyuHsnj1ZuDt6mKtiaCFktvg4EtJ9sFnXmYxgv12JddpG5Ch",
  "key12": "3J1jz7zZpf37kaZ4S67vJdD4ZE66ZjU838mKUgpfufqarLqVUX8QNAShtfHdycweREKWCLro9B9F5HzwwJFRT7XQ",
  "key13": "62Yc1hjpAHBsnzUJmAXcWiH8zVJXZmAPa7wo3nxwfA16urTMQH8X86xNBJ4feWx9UNtHU9jU5yWU66h4sV4szfRT",
  "key14": "5isDuvxvKYfTGN5p2UAS9dpKNMefi36bPGZLp4ttNbsxQqunvX6MCSYgLqPWeorJRCK1rbYq6VABKWdEmrUz1XkN",
  "key15": "5MmFj2sJ7eQmhWeeX8UPhkw1A9Sdch6DqYMxHQt1VrxrW2p7ixEXA8DCE5xyUHhgkbeYDuStmREhmC3Hd9tgipS8",
  "key16": "4ozTwPyq3M2GgXfvdk8PLUAYixLEmDV2ufUDqPovwqcpgZHTiMagXkn46u1S6HTtCBrK6JeTG9issk3DMF7M784y",
  "key17": "3gx3mhq5vG9ABtk3Tzt5Mx8ZC6hYfGhEFW5EbF6bQUv5pK33axKfPxa4PoafogXyyUKi6pmvAxGkQPCNjpR5pri2",
  "key18": "3R4Jp6kVB9jxc7yMNjXryMBu4kcQfEV2AAfjZuj53H9DxdkhiP9RT5RvJcWhcuJghxgL1X29YvatYWyCv2Fnbsy2",
  "key19": "eMqV5zYpPmYc2Y3AdsQjiNJvCoe9dth68mUTfBJQ7hWfPQ7j6eLsFzXJbPFjpFoKWcDVDhyFEXpVZCasZvXUDAH",
  "key20": "4W8f9aLe2uniudz4bMu79HGAck7JAxPxCv6YgvLDhQLwTHwuwQAeQ23hWSHDiFuENX3YjbW3DwQ9wSSnRuHwnYgL",
  "key21": "2791nZJQmZuh75HjhNuuKJ4Wiq3YYmmBPUea3KZTth2LAvMQqXyJPrBegPd7kiPCmcCKh6dMarBX3RBhz7jRvxzq",
  "key22": "5ovjoxtzKieE9sfKKGFE8Ru6rwtsLM46esa1NeZD5DSXH6QB9pYnWvUfdWDo91LFuo6stC4VDPjZfDsbdc7rgajd",
  "key23": "2syAA2TNH72hVLY8n5bA51sDMjeHMmqW1HsWeTeWgkYGLbaBbpAV195Z5Pggcz733KSity94KYz5bzhZq91jVKRT",
  "key24": "2VHJXhErdFNaYxWx7n1J5fbuPTHhewerMn894sSVWZV9AxEtLApuL7G5R5enSXMSyVKN4CUaPBizUgRBoXBaEX2T",
  "key25": "3nt2Nq9gYPuzHRYeMpiK7C2iUhjRhVqf9JGQPHEhNHf9Xe8sxqnG5FDDuYNQ24SF3wW94Uf8vnw3Ym2QSZNWrvaX",
  "key26": "B8YU6KmM4WLshrv5N9LazN6CiA5WMiYYBou8siKStriUPhZWAVMH7zDVXdZDmeSgM7pUayRaST9aSqYHVBooYHV",
  "key27": "3Ed235amqMrmaeBfTs7QFBLSSYTLfadyXsQRr8MtSYmP9Cfu2oGNaLhnNbTTWHLUwozv2mVHoxUdzmGphb4pg78W",
  "key28": "2wT9Sgc5DQngs8LZ2gdvc8c6rMxvDdyTqBqLB2nT1QB5R2EXmnu8993PL5JtzhE46jf69Eqdz6vLND1B2hY8TQRm",
  "key29": "2NV3kkp8AyjbesPB1GuYEkWPjqBJ8C9ev1k92Umo1G82QGNyVguLDZ9tmeQdPzfuPuoxiN4AkEtYMn8CGJZZ5JzR",
  "key30": "33su52ZwW1kPbbdwXPsMjQrDyTUaZpUufqRi3NB4rqDc7YihhXow8jQvZrnVWkxMhtCykA4y4CrEjiKwy3zmrwtr",
  "key31": "a1CLy9apTk21Dyoz8jHmY8XyzW3dEkLScxcyR5wsE4R6z6YwbMjYkJGA2KkaaPWi1S3rsknYJ8J89sG6rYYhGFY"
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
