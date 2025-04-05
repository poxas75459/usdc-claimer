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
    "2RzPfGdZqrsYR6irdvmztch8r89nwTpBAFTfPqFs7nYtCecVkMqTuBWoXHgX88bVQh4f9GgHq6PZXhKkcSkuxnhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62p5s6LKs8xkcm2kW3beaipVvV7GpTxHPty1vYe4oLyxSpPgEdqJHeG22pUrHUwNAWmDUyg3Brv7Kai4tKpGYw2a",
  "key1": "44FowMqezdneT2pVZoZJPQ6Xu5b3UF94tZ8W313SpNkGDcZHQKH7wYNqTDxrAN9mfUJvp7orfdWwGQKAHSG6zzxH",
  "key2": "4eMZrb1t34fyHv4vy7M7mBSdM9q8b6L12CQpFVD4sTyzooLerPJkTGgiebrztgNEXySrqCsK9vnhCLHXXG7vmR8s",
  "key3": "Ghz9tPipw5KZrky79oSEsXPAGyUc8XyvWQChPpMgBkHeJMq8qvHPgxJXzvxG65JG7FGAdvComAR6d8z7HsvKVSE",
  "key4": "3vK98R9pJc5QrpqkER2mAhZSghDFbZL5ARA6cRM3eywACNH3YSUSCTh6UuGavLh1nuA8AB6tEEuGBb1CG9vD88k1",
  "key5": "5LuBm6dSZkzq6uwvhp96KXYGw1a87KpEwzR57vsiS5aLxrq4SmRQQvzwrw5pGNgc5SHFx5ToTv2WZWMTvNkUwJx4",
  "key6": "3puR6vpR7dVptpwgR7c4U3ZESTWaswihpD7NWqrYEdY7tLFh6F9mHq2gy9agFWxxxHQK9A8f25JUieCTcZpdN5sc",
  "key7": "5ffEBLPSz9RvJmiEw1P53NviDKvaJa2hTcKBq3dJHL8eWLomvYxFm1egXk72Yd2GskLmB252kzDGNRjJ9r5uoQ34",
  "key8": "21vLr2vaKJBH1WKf9RhbGLm2Hsf22XpPtRauq4xFcZejebvtninavaYZDCgAw4Viov4vEAAJ3PrtnfqBncFJgTEg",
  "key9": "3eUeJrfGBd6MdB7BNXmtjF381uKUg7kFKj1fG4m5BMv2NUDpwDfXq5xKFYs78n3eTLeL4UJuTqiFza4XwCR1ysX2",
  "key10": "1NtxdXryEcPQo5bEeCgnSb838MbXJqbyFftmbTLgjKQcT3haanBHRmC2iQ8wEsA4YWqee4LcW5qxg5vHtk72bBU",
  "key11": "2yMtUr6TP8YWMNvVWN4ebbLikYaT9bbP2EgUUmc9CsGmeuXYsiwCFz4LkxWR2VYMo4mMMHnEbWjKuENsQaFkD3da",
  "key12": "4L4J2Zj8HLVQeLptCDHdkbRp29txcMhzkUJLuE8H4yZZRM5zqPzgvbFbuiSVYP72zncu8FsEy3iwhvBi5Jh6pjb3",
  "key13": "2BjYVwRYgXE5XmGSC9LsVXmFoN1UUELF7qa1jQq3UxSvxtxdkXAeivTkSKhV7UEVZz54GAYKvJSiq8RVGxGDeNt2",
  "key14": "3AUW6ynNrbr9mZK1An2axzbYmoJ2qKhrKpB2zStU5Rpse6AmK5EizNDyB2XZnQTxR7CvHMt9UpMALXM9dM8NuLrz",
  "key15": "46PbEqAYnXyi52dRdgx7FBXiRC97Gxj6Msr3qLfWU1PhJEoE522ybut4Kw3DjynX2P1urZE4eJ8Xia6sfbUnsUqW",
  "key16": "2ewqcyXea3EEAK4cZSQCpUjR4RzugaUztiCyY2c9LWJKgxWcAxHxs42HNwEm2Tm365Ah8zH9zNCjPhJ3WRDySUhQ",
  "key17": "66h7UBez4nz5rJ1exqDH1uKh1afHCBCrtzTUPheQY8qt34tgKqYgte874rmkvQFFjt2G6iQEaGntoEV37S8Nq7ZU",
  "key18": "2Da6vUZutKzSFm2SorbbneDY5bptstrT2dCxktzfA3kKwzhdQtdeKP1M26QCymifhY3xX6KRhDrQPZeHFVE8rY1a",
  "key19": "2rFqUHkyaThrALdFo8UnsPDfEYKuH65idq3H6Rjxy3HmtF1TLidj7oJh7C1xBLWtdrrVx5jTYWFGUisoVimuPHSQ",
  "key20": "34rGe9A6xiSsMpi82yh4ob8dTf7cZBKftcrBpXbeJcaM2hp7SxjRCpa9ACP3YJNmFopwuQfvCLpBDPPXe9YjqDBG",
  "key21": "3soB5yxvqmAsPtmEvwzUiTWuWSjK6AF4jsvNGZ2HxRhQrE6m8r3m3cipAD5CcFSSdHaRpHTrPxt97M5NYwkmt94w",
  "key22": "2HDPBfg3q7sXS5CJ5226pF3Fz8j9gNEswiHjNCHV19gvfiSh3WGVgUHRy5Jr8nLcvsCRFmHgbmwhTFk95GnQGVrn",
  "key23": "2X77ebHmoo5h1SDpXXY3LobcQqWCJ7yeHh79S5hEgVWnEmows3uKH91jBi1poriqR6oqx1iC1mvTV9LRcMb2iqdj",
  "key24": "3buvuzFx6mTxtK1ubhnc6j22up4GBwdnUjjKNp1j2pTXAPxjvsLrME7E9jBNCvy81NmSshfssLKxCGHT3mtn3hN5",
  "key25": "5oT31stwN6E5ZWHXZ8reaDbdW4jHs9rkHdw3D2Eu6GNXro8VM7SK39M8eKPYpMGPPMkECDhuAsVfkny5UkYad3LH",
  "key26": "t4oqxtLB5Rqsfh7pPf4G5dwyksZqFbz6g77oBLmACmfLTXGQwvH9yGpdx4QejoHackxsSJUX83b4hMmkQedq2ih",
  "key27": "2KrUGyFfAn43xU5B8192Vf3Bmy3Mx7dArD8CgengzoFyAV2maZpLNJBEeyDghmSwQGKE2tB3a4WP4saQejhEfT5t",
  "key28": "2N6ba1WX9T5rWhQREv4q2KiHR18CgfnimF4jhV2PKqADPJQmdEqFLUW28jFSHZa4HkR9VFPyNDsjJ8tWAmc8ydno",
  "key29": "3NsEPfqWzJmz9WawENJzB2VXNF6QiQywZRvrKs3GX8gt9aiM2kPHZumf2ru3xqN5Twh1ePjM5MbiYf1CZhSw6BL3",
  "key30": "5jHMGYTr9VbLa1HVmuW6pUWTYsqgisqj45CEpk35UwhDA2NNRmYYcPjjFA1oMXUNrtHPFNRFxbB3LBrwDczEogWA",
  "key31": "4FebyYxds9EWyZ5Hd7rCUapiYsM8Vdjxw5HZejez7BQ4wYCBq6GRH15hq6evn5kjdvq1DDqWJb1Z7QGwJDyCid5B",
  "key32": "5DKJ8AqkU7Qrv8ci6g2yiZ5LR9ojKR17S1RQzWDjkVJLBRqh6jBRfkFYtgGmEeMyYKyNCKYecZGC77PU3eZReEt4",
  "key33": "2qg1NA22GKJNQFLKiTZquc93s725S9i9PcnwxvvAKSxtaifVsPWpx4hmHDT5aSjcC95bZgVu4aAeefHaNXBtpZr5",
  "key34": "3SZKyTQB38DzYuSvQjfgjJWhTqASgVgF495M21HCZDSvH8Q2wMpSL2KxDswSzubYExW3PbMXRk9a5tvnDH7PTQUc",
  "key35": "2u5nR2SvmBKEL5ZWRietJYFBBWqPj9Wvuhf7Z7jAgykQQ9RGCgwzbLJ9HSzwy51wwcVQpaShkMs5Bi9yqYUC38pS",
  "key36": "4zfaBgCFJQ4VGiYPcF9PZz9PsM6S1XFQymPYHyUTVrNvdSsj4JiDqtxqk9W8AzMvYdpMVKfwDbwBMtEngwHEDrt2",
  "key37": "gouCmtUmEojEe5BJnxsbNz7qX1xCKp2eU6pybX73YHPH446KkZnTqJeajfkSRhak6eBPVMM7g556Jx1CzD88qvd"
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
