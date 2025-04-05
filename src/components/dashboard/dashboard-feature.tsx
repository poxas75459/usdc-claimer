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
    "di6XvhiTNHm7M2aFvbCBZHbT3AtN85goGbdNyDXpn8ZNXVMGqXHfF1xshV2iFHpvtVZLs8Mm5Su7JAqtMVmmzDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQwdUTZFzMy7nkE85jP8xJXKVgt6p6iM7pUFQFeg1xKaVspWpAjvsac1sET6XHuxrMUe54uraTXvtGpobvM58wT",
  "key1": "4hs4MVnq33GUk4kfYMenEFJTBxCjvgLg4LieQy8YKvrgPBPRXg7CaMZa1PvqsHjyWNfsNR4Ect6sLtW9WsnyBmCH",
  "key2": "2ouZzE6eNbwGn2vB1fnvKjUgmBfgAswk75PkQ9phiXEMLGdt1f6jGcvu4MYbud5MK3Jvqj2ud1WahTFBvPeCxmaq",
  "key3": "5GRCP4LFNdW1fCPsa69Mg5VcDy7gukykvviszYtC9hSqw99WFc84QZLtDiYrfTMb4NffvMdgimR3PkoTHFknSxkB",
  "key4": "4DLLvoja9accZg8TQFdLSxsuRazpSPpU1CfW16xVGt7fVaj7nARJa4CuXTMiwfHsGTYe7Naab2Agfwek3oHbWNjZ",
  "key5": "hAfXw3oYupMbdRVWyC7pG8SBcAnwEwDFP7ahv53kxEuTaJ2DYVqNqazHo4Ze3TcqhoojuTHBAjAfhhAACwqsg1S",
  "key6": "5e31oWqe8yeNcTHqZTNtuu6uMN9dNCba6Gantvrsj8bSoii53XmMk7YpSpxvSXs3rsMueSSkMqNggxXyoawWiUAs",
  "key7": "5dgoxLkcx99zUTuZGMVGDphMUPmd5iZt5XrZPTdnevsRPHb842fxuemdhDhef8FzACmPaYvEQZDzuBJnohJUfFhw",
  "key8": "2SWomkoLzKuipr4bzs9ToSiMeCrzsjuoGyELSG5QQhdFiCDpNc7LgaEjtcPqPZ1RWiw94EW1uyHSf9dKSdctfEkx",
  "key9": "zzwXw56WxsqSGA3UbSJ3GCqrnGe3NzxRVqdLxAgSW6sDZ6fWQdr2mzGHmnDBna3JbXDHvs3YDdiKj1FgAWPoL96",
  "key10": "5AzuQgYPVaaUCYazFb9RtsxV2ymEXUeAx4V1VLE3EjbBifG2arTkDQXoBdUeXam8UAZZfrrjXWMxZgndK9LizP15",
  "key11": "63Wcs4Bw2CMj7HuN5y3z7Luu74i2krzxCyFtf8YuwKgNvFVCUGpZ6e6pDnehKrD5AX4wDmyGdJVADQ9jFDdvbDDf",
  "key12": "Z26V18e1Mi1XXohxyqU2tUqvyqkvfoX8f3kZr8uJ1TA5HKr9PSYYoNU99WaN4jfURrXu7HPr8QMeX2Rnmcxupas",
  "key13": "AaDPUW6vGXXq9dH3JwXKUGWs5VQEx8JgqYtfR1VQ2mKZVympmHewS3MYXoQPfZB9YCfjrSGV8zzJaJDyDTGd5p6",
  "key14": "59txXyU3T2m1BKcXhiMxtnwSjjQtRky1f8FvvRyYjzJLXBAZXAJAJwiLUfTQWg4hMxYygPRSX3FCVMEfQ7wgq7MP",
  "key15": "4jpWbRU29uwbJoNoKZMwkuSUFuv4YJiPHmL12Yc2ZXgP97ov1VhsHwbMrHRqiVJwgccy74satfVXdhcL97uvEDUz",
  "key16": "2jPrHJjNZL6yXpz9AjEf5KeTw7vSEx78PnhoH6nCFktJxjGy1vKmZTEvgc9sjhGYUmXReuEgbguWtQMzvcDubvSa",
  "key17": "Zzsmmbkde2QHrm1tyo61UueEaxeehbWfKhv7iTpix7cqaMahrsmgijmyTZ7qnEsgJKY9sbtJD23zQbEW966sJZK",
  "key18": "M4wueR4RKMrMvPNS8SdMRn76NxGDhPXjQMYhD3sEajua976Gjy8gwoUwjQAjK12vxYWo7pw7E6nnNh8gAhXa3Le",
  "key19": "3hYjR3v6ij64RKNaPeTuyMFeFrLxJVs9qub6e5tpUX736FQCSXfTHVhKXDtJRu8RorkNNDGA7RT644cSS7Lmfia3",
  "key20": "5nZnfCK5mZKNZ2eFpzp9mqjb9TkFdaqfVSrtbtp7x9NC2SPaBu229GFBk5CxN2wKcJxtkSaus8Hb3R6vRpkucWrt",
  "key21": "26Hu9JHhzN7M3WqC4G1U9xNwZ4CzwAUCiKKzBQhv16Dudt3Tgf9eTsCWUyuVHWsxMtqukWKLVsjTVL5kRftENDZU",
  "key22": "DdWfqqLsYEyBvkpiUANmkjhzoRGiGT5Ypu2mHir7xxoiPHCZdnHn5bV88vCFGe6km6tP5pgY7VVdH1b7HNzKA3c",
  "key23": "5F3pZgDshDwHyvayniN4H6HbG3wp7y8oQwwEfvPyFa8joLBnypzF7JaFuTFcaNzN15uwa9kZw4oqKPaNgx35xS6g",
  "key24": "fYH5V83ePB6RhLGWs9JiFmqwvRwvxGhpALJad4VGQ8HUne5wEEfSPrJPD9vT1PVKgGtLXDMECVSuXihQHAHKB9j",
  "key25": "4FhoZVXQrJyp6uTSourUsy8C1hx4ejGC3aB59xdm9K2ZYAyxK5LeJpuvRe4eFuzCnAbGC8mnnxMP8WoULkY8h7hW",
  "key26": "5Nao7XPci6sge92Ci3ajQ8mVqLXhLUBCZqBwEGpnKzQGH1tTLzm2d4Bizj4AtFggSeNfDhvKwDTf46gYZsSEVGVD",
  "key27": "4CciqLfskTf6YPF1xuqJd3gURAhVdd2aUxTegJcrVn4wkBznDU7kvojvJ7ZAJhnzYCFzUkjQZZNXUvhorBfkpLGT",
  "key28": "3qqAWCPP9KJtgGb5iVVjN2Ng58cFannviR4sibr1C9ue8Ly6QeDofE8rD9BaDBLQa72g251RDD5WuSfoTB35N22k",
  "key29": "5BZqF5F2nkpc6mTVGug6HWhEJs8dgaVfnFsEoJ9DFuVeoHBLaDDVGaGgjt6zhJPop3NvJKpjPpidXnKswKSpgvG2",
  "key30": "3qrR6EBu7hzNq8i2vboyskc9LcX22HH9V1v7VrbSAdTiNLuc5BkQ5UsXAnKmiY4TgsdZ6wZj4KVX5c9EmDiz1PbT",
  "key31": "nnGzvrfB9miu4nq7RRqD8vgVDY5uZtzBequDxk3UmRMQJCKodwWqXMmEg1WFvva1cBCBkNNpSKWaLQ21d9ZnKmn",
  "key32": "2mF34uQSKftrXeX6wzyNehNBzjEmhzoWnRpxwDNwa6gAoH9yHXXGLKubs1aWNsJAVcw4ed7q2vMM8iBTdtSCQHuU",
  "key33": "2TEKyiYFwW1CeFjorxbYwEyai8LXuYddsU3QrJkrj3kgRSSE38B4A5d68gxSeUErS7jLRBRABTph83tMVUt3N5ej",
  "key34": "4ptKegbGuDE7ih12W3EsqYh8SbtA1iHPiyEhAfbUmh2kZt5cER2uvfjwgzvEf8t1Y2CJGHzaPu3y53TKp3CJgk1x",
  "key35": "32sXg2Rx2DoeyXG52WdmKKV2HL6Vszjw7XMq56jpN5MRGVDrDWrERiRncc9vd3qby3xCCCji4CRSsq57AdCSfUA",
  "key36": "2yUo8GGTuUvMeCkF2rHrPk46sydSGDaENHMfYHmwN6DAZSLQKA5Zs8yV5gtQinRzPWZ7S2BR7xkGjzJVFw3guZmq",
  "key37": "5PKpe8XbabbuaqrUeJiAmZNs1fQwLxCPUVNkjQwB1MjNfuE1H4qRiYR8t7MCbFrLP9cQz8YYFKnPougruvwCML8A",
  "key38": "4oDgHwG64puzvmmphaMqz1dEnN6w26YHE5nRcGBD11qhVo8JxdhvVkTp3BgWgxm9FAZ4indfqzza8f9BPvVjkykz"
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
