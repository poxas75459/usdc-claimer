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
    "uSzg9Lyef5bqJfviFQbrFzCAYr28UuqJCvToV4onPjP2fgcqDDQE52wrBJDxctprPpgps9WmFbTLWPZemsRtH5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqNC9p7WbZsiVqKjqutr2jKNhZFk8P56jK56mZvwoe873fU5AKBubvc8b8CAT3XupHkwCdUfx1zfJ1JvsaWd2LQ",
  "key1": "3uCCz1SYnzqRxbNsCcSshtzLvRRgVmDetm7uRF3CtzoVg4rqaMK1AU6cc8carDq1eA4u5xrrJg91gJPyL42PTSmb",
  "key2": "25NaT1Bwze75ocxebBc9GCgmvx83eWaggQmsFUM2aJ5oAs9NC4Bf2cKbHKavdpJS2AAngxp2xTtmh3HzAg7wR4jq",
  "key3": "5TJrf95kZwgnjQpuNV2dBScApdF4g4NsdCSTZ7tNMMA3bACpcrQzFp2dhEgGT6YhhdWtvnWb7i8sNwFxbYNedhLa",
  "key4": "2cpeqsFbmJAkHnannfhRdqC7uEvGo4A7Kwt1jyy3no9tgsJFw7hpy6wWjub2p52PrSR6RNuXzSQ9TZ6NLNKFXVgF",
  "key5": "4BJ5nh31vZsNvygNfYwB7dMT9gv6v97zXy1kTCmi39FhT1f5CVEwq8Qz8cprnrdYoHJ7mpimdCXQHyHcujQK4uaU",
  "key6": "4fwnTADAGJuoh6wUcmEqijQpCNh9Nkau9rWuWafrfA2eLRcHzoZULAmk4jwGY5xPiMQR8h9iPGoBhe94aH9jNLkp",
  "key7": "xmanobGNyBGBRnDmDjk7vBaDTi2vDE99PHTVwywm4MT3ZMrinAgP2GHRmFtapnsqfvgBAK1HXzXXWHs3o5tQFVY",
  "key8": "4wd2tK88cX7svyXSrHsTuKTYdfKqZqU5sbKa7MAW68KuZXpk7VGyXcXFDbPwk1EHpRXBqgdGUi7TPU6etrtRTtaD",
  "key9": "39bKLvphf8nnJLdEdZYgvdShGfHzaoTBmTdPo5YzeWoCERAq4A4FVtRKZ9xXsC9xRWrddtyWLyX2CVcXQcqV9f3W",
  "key10": "29M5kGoCfPR2iFUBHp84MiqChSnjxfra566zmvs7eXEEtNmancseiYNzL1VUYcfj1vSzZfqySsNWJvUhzEFvNr5U",
  "key11": "4MtvDyaCodumXBHVxPmmFW3Yjvu4Yvy2XmPjFZahwZGkBH1J5jgNNJEXtZzJASHbaHYdUmcE3yTpAXXSqfDpY9aG",
  "key12": "c26dnkLBf8186CEvoTJb4pJj39FAhqyXTSYHFigYya6BEvF5GY4ct88hz5D1G2JeXE8sUUhK2K4G4oq3FYhyKRA",
  "key13": "4bwr8XexwM5rJ8TLxHKw8jX2fy4pdEu6KBww8ZHPDYfdXv3ijPe3g66vD5TA7NzQL2UwXXreUduuXhNwo7QazqwZ",
  "key14": "4jP6ZJ4LW6pyUp51Sw2AwP6AZPPKMk38kf3fjFU8XjkwwbLF1JSobmhbWXiGyzGaZeJzwRMvjZ6nVjwMQPG5XMuz",
  "key15": "4wKp5ibrFdwpyA35RNDzwyqpi3iiBEKFA2QrPvMpeVvcWJy2GzCamRY1VbVWfn2F8wyuVnY3bxpCwrbtJ31NNaPV",
  "key16": "4VBGBrjmGMLzsAewPwxw3cHj1M8shtXy3pkbkgeLBUnFk3ZVxkQExY1Q2Dah26LvvJM7JZ4nSRrfSjQwLqrS2KTp",
  "key17": "2McySeEL3vvm5hrqsazYN3K49tqpGdYmhYonyziD4drPRkiJ9bgQRNQwe7CFG6drnSZCB7qXDyFFajWzeMbWivUu",
  "key18": "2pVG7i5jdXgXLT4sCny3fw7CkL3uuijqX63kUHRQXXqY98SUMs8yh1SU4ttrzUHjFVkQn6i59HeERtYvDmDT1R3H",
  "key19": "2kQccgFPSBwBAiHZT5rT1zPrvgFxmfFYKR5H94J8xC7hfwoTfFnMaSvndkCwAsd9ExyGWR2MY9vvXKB2stX7kfgh",
  "key20": "4SqboAkBRvjQVV42ZG53Fji8hUKfgMG2w6SxyVRpaC1ePPkxmTtpTiQucNif9n3MfoYJNXKt8wyBMyjECtaWTot3",
  "key21": "4nRJSG5XikB9rdPnjK6sY2vkv1c5WHhX496wSStdcnr4CrsLG5zBHTrxKbLfKjVZ7ErRrDS1iNbAx7wzASxbwKMh",
  "key22": "2rM7VJThhkZsnTJXymqNE5ZedoyimWbHHK1f16ST7jNdRyBP6zJuSMjC2ZyWpBD29DD1K9isLU81Bcudf7rgmtvC",
  "key23": "24m6zXW37i4HVf1wHskywLvRfMHuXAVkjhJzU238A3e5m9pajF13PPhRQVXk6DBMwmweQEjuGfyrReLXQCoUFX5Y",
  "key24": "2JQNdCgrUFeJbXYACYJ4zx4MQdS2DtfMJEWxN3qiLix95M4yXQWNeQwpsa45ZpHUKXKtAjB2ZHSqBLrDdCZK6ivk",
  "key25": "2qSiR2pAnDte2EN1p6zjv7tEwVcjmhZXVua1E4ZjXwjKvV5mF8NkJ4V7cfKb1DPqmLwyAeo2fsyEpNPe8n2tttz1",
  "key26": "2nGGyVDmDs7JiYrnimf7W8weZ359ceZMAywPvhoAqZFgn4gfHMfgiz3gXQsj7W4vvTehepktTnbenbJ6aTLkeWMT",
  "key27": "3dH7Y2HVLNSK994FfY46GkPVm6pRyKhAua24Qzh9GGroUNzVbcsw6ZkYHK34tgWq6zHxSFCdtAkSoYHD2fv7jkTv",
  "key28": "5MsawoeEoCvb9vSFm2sRuBERckzMLs7fTh9GhcJ37idJmLiVdSf7LAPJi9HPWTMr3Cc6jemaDvRuEfKDwB9QQxR1",
  "key29": "MGnTyhxqTipnZgM86zGLAnegwroYeNhd3SKVtxFLaRnr4vXzXvKFFKKPDAGSujNXpgKANRxZhTvVph91XWNCPqm",
  "key30": "5pHi4yXunyeepcAxAKunmLVaZP9wDc5tgzLp4DNCBWQhM8Zb5cDx7R9a8SVAkGusqX2BudfAHG3KrGNw7kaHwmqL",
  "key31": "282fpBeSLd3sMCdH8MANAcJXNa4B3W4goW3vgPe7a8MyFqcEkRcXP3reHTZ9HbSiuw7mAa4nngRTtXXnz3CjkJPx",
  "key32": "5vkH5DHjKuiHGoNHAC3RTUH8vub7XGcWjrxcuPNfL5Du2dzvr94xkjGksbijTRNKssqR5fJEqraqQWvmkbzTkwaF",
  "key33": "4hwu15QpTwGPDPtkspY2aRuSpMxvyxS66SHGFFuYrtBEoTNDY4UrjRqgtrn9D1cbyhj1QHQ6Wv5QVMTRoYNCL1rv",
  "key34": "2aiHzdvoHyVF4CnUa899pbTMKst1BrEAXzR15KBDugnhHwcGQKpjmAqcsdiM5MhKVH5Y6T2pxpvs4Ejq5wMNa2Vu",
  "key35": "3hmJH7Dgt2xL8wg15RaMwbN5R9hKrCA8DQhUPpXmCDUcwt7ni41oDVkdwP9c9i3Fgtm5fSciSk8QXkajALAhtVDB",
  "key36": "5ZRqDN5xbGaCZAjC8uLPZEEdBxKj9MUuLzaxs6PrK6imRtRuzCWDhXpZeqjw3pataCDGnXDVYFvzWDU1zZtaR9Yt",
  "key37": "27L2qMTHdgygKk5cEvYT8qpK5yx69ZFEsvvksXYLjZdopHMm21VksuYTqeLEiHcz4G4SaS1aURY7Hf2bCacfKenh",
  "key38": "46vfzA2nW9dg6NmdTGD4xB2LJhPosEQowHvvUFYKHKGSXjhZEcigdxKdmz9SQxPEoaKL76zHccJzFz89jyPJ5RXP",
  "key39": "4ScUCexeXoLUJNxKT67LnpJjf2w2VMMbp3h4usknqm3q5RskT8oXXffD66X9arV7zb6uGhcUgq1LVKmmShP4oJME"
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
