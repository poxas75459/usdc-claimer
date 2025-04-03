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
    "3LUoW85yqKoE5vuD8uqpfWDGLEs49sb2MYGP1ea3zVvYcPSpxXeEZKFM2iZA9nF1fAQAmG8cvwxnf5ECigqdmZwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oofvNgibEq7CFkpDVZrNANMpifhr8LELf76C6nPRxtLkM9kPxGgq4T5DsKvua8xi2b7AKBKD3DeYVHANDtvHkr1",
  "key1": "57jsyy8cjtJScxWFX4dNWpzzFo83VBcncsXKwrxEVTHYxDkJcHJSXKgBrgcYR2kiMdRcK98nUoXPq14cTZAQEi57",
  "key2": "4nLNcTjJi234zQng7XiBeQJZeX1t3Z4LBAkPWG4sZBCjPFBBBXqwUVDm25rtMNdmg9WZ4hxkMek2nWAC7ZwXYjG",
  "key3": "A5DcFYUyBoTKk1Z4e5QUtHyffRXVMS8DKYbQ17jR7YmHXsrEfcTiYNybMf6z2KeijENhPxh1tkkjWjyx736QqB3",
  "key4": "288fEiVAVBmQPkSYytP1iuoopLSB9TBmXKQ3FGT499LGLho1Q2cwH6z5bwKP9CWbfhcTCUpTJhysYgj8SVVVXC8C",
  "key5": "49psvpWDYLVXinB4HB5EyYe8NGyNFi1CfLwCFN4jmVqRYRAhQwg8egArnLDjGiE6P9WYBWbXQQMwJZMeorR4rUhx",
  "key6": "B1FzQWhdfD2Jx188WEEt1ABKwwDLynYWBp3EaMUxacDqnYJYYKswZcP3iZvwz2uoSqf7rjmt6ugXSnAp21ihxGE",
  "key7": "64EuvxpPC4csPhTYij6ttwhWLyuLkkwbUntUXSnwF3pYS2f9kyRNJ3q4c8dvjt9yHeAiBHZ6QqkiKNK6Rp4cPoxH",
  "key8": "5MWi3qsbWRtx87u5YmcPW4SXSX5HzmZkNTUNYTFxK2fMK93E2y8XqkwKotS5uSw3YXYrFvA4jqt3AYdTejMM2Nb6",
  "key9": "2uF6cidhxK7stVsoRXqS4xPkQRvwTo1CEeM1hRW3HiTyh9GHZe7cV5TLkpTGRB3b5CWGjxtvQh63YeazwNUd8sov",
  "key10": "aC1Bgrs8vr2TZpwgV9JjmvMu8DaTSggDt6cRpSBBADBYk44Rca8cC4MFTNSbqzFDwZS6ZnuvsexTRP6EKhKm62y",
  "key11": "3JyACUX98MKKMLtEkUpUufy5kkMNSeiWJCRm3QqKd8Qb5rh2AztyuvSdaAv4w94nGCxYiUCGWkHfqLBZ82WpAA9u",
  "key12": "25wLzU4Co4g2AZRbhwHhYRMZmVSPQAEFZVPQLzvzduPLyygYETGYeKEk3GSYABDKn22kobt3Zck7hkNSTJM9ZrJw",
  "key13": "8LZ8MSDBtoiQBmxX5hnDQnYFtPi7Zcv8qqG5nSb1vcD4MpTsXaM5kPna5ShkFer5Ev8THDffBfSnfhGSqAWePRP",
  "key14": "j5t1t3ygdguCZeWF8pqKS77z3MiassymeKmeJisc3YNwkdJmzVD7LMGTtmTDxMzTK9MxHkgNQ7PEJy2Waei2mSK",
  "key15": "5hkWFD2yCnryT6cd3LBuVCwvnWFdQmVsvhWbHJFAceF1n67EKd8ga6jwrzy5gKiGoK1SkBouwaNqMu49BQcgXwMy",
  "key16": "5Xm7oua4nP6sTKpLSQnDrpdHmyusie3BLLGEnA9jVdGuNc1yQp3xLBYQ9fBM3WBJA8XdVskhnrsbLUfva5amrBpD",
  "key17": "3BMdMtz9duPCA42Y7maGh2yEfEFtxcDBdvB8RNVzLT2hidjqY5KmQXRqj3YWmY6orLu5iR59t79XwQPeRxdETHBF",
  "key18": "3fXzrw9t225RKqyKehX7VkAJm8u5VJC58vvpYApwyaNGPyfj8TRFiHgLiA8d5BqvpWBap9vNpwxN6WrUXYSPFRBN",
  "key19": "95Ba14dCA1s6kwxuA6JwqqWvxCSTzhJQgW6rT6ZR12hqde9u3tcU2n9QSABUcH5R44Je38LroJWzr8SJDKoPmPM",
  "key20": "2NYtmzNpAPEFx8DqRjpEDPUNx1WpLZhv8u3R2mN4GhWQifzeuocKnQsPdN2Fy3nBFej8v6mRzfiK9MKss653We3Z",
  "key21": "2eK7RQcghvYgvCn1NFCfuBuHXo8LR5uR8qLPP1kfvZSJZn3avSmtL6r3jFVd7DzJqpVdf843SyX9VVRWMjpCtCwK",
  "key22": "2MFyNG8grhFiirHg91CFYaZByYywEkCNEGQ9wgJYoFbiM4jsR512UerB1qfjsuAeEd2TGYXZhqqfXEcDfFDyaD65",
  "key23": "3fSZzmwqCQJLfWWEXCXAnKcPMMjAU5bdLAKoSmDcdR4D3Rk2tC5srtunMebW6MoGWLfo1HXxCbLMtzdMACszK2gX",
  "key24": "2tTMm3Nz7NB7PCE8wW6SwVmPogFsBu2TrirFx4EUjsCgbxWn4xnekeRkymq9JDboUTGVTsqpaLNoW7tJvJBxwZpj",
  "key25": "4eXKpJXR71bZkCV9JsSbSH7ie2PKdSMxRkn966PfL19MVrdGVJJsrZhymbfueLR5icS1wtuNUYJwTTkQx72h4b8q",
  "key26": "3eBuAbGLd1iBtpyHy7YLw1QDvYB6mAQNs8g1dcSLUKnFNH2pt6rLiuDbMoPTABfZgJAi67asijFTaZ2Eekgd6tAF",
  "key27": "d5AHwwz8WcaNNNZTgsqZKJP9kyXMV17DFxBnZCWSyn9XXxQQuNyZvsiBqwwadFWgUTgHKVqhefcD7rPP3J7EfS8",
  "key28": "2En1YPYYys7FsWwUTM2hhhSmMiwbUXxBngoBUHsu2M8NMgEw1UX7BhfbLg3iiWVdvymrdH7fucaJgZBfPnvjS5m9",
  "key29": "3Ww9paM6HU8VckvHBk2DS17eH3ZLXgYsfitdEoyCH1ZEhJsr3wQAARnZLReJcvni2zjCFUiTiPwKnb3dB4nebacM",
  "key30": "4bqs5xoogBovFQYyGQfABY3RGdGeTrFDkGDPqkM5kxUM5VrwGoCqNwxeDKp6nbB4t3B1G52X9qTLGcXbMMcybHDr",
  "key31": "5ASzBsssKPB6goLGNUGsffXF6d8PxUcQKD3KjuxaZNyCewHqSai4c8QFi5LWa61LBVRYAUGUrLBsftbXYCenYN5V",
  "key32": "3BsPmQfncLCNXpm6fPavGV4uHp19tTZSPjMzbwHx6DD4rBeM3mutr5FBfEGt3Fq6XBnJKLXkzhTFZXaqQVat2R2w",
  "key33": "HwbazUHBgvwJk46s6gbU8h4r3YCkcb4oD4cq4CHyBQm1dkLFd1fGaZpmLHS22cEwu7Av7q6EwdU4XyFBvWXC4su",
  "key34": "28SxT8L3nhmqdEwuAsRqMmGUKPaC7ucSYjbxbUNFtLo1xmaaJ1V1SvvpxhYcM7YHKbVMjmmX8bwuMUUkcDAAeuYG",
  "key35": "5ezhj2RDuwXBFT92dkbc8GJgC3JY6uSwEADrFzwY4KR741cq6PAcYbZZiPApaeCV7UwZxngcZKtmdoigU2BmMiEo",
  "key36": "5Sv3GXCoKpqiBLo3cCBj64UBp7H6Y9AnqfMDgm1ji6XP6QkutyXiz1yG2JwD3s5FXtMUZV2q1z3tUBxQMRfYgHev"
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
