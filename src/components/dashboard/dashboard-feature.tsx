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
    "SrAR7xgFLGVK4YwRZ5Dxc296ru4hhyZG59ALU74f3vdYxPXrnrwnjp8V5T8cUMy7dJ8AipANaMzQaVRPu73KPtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YJQrZvnqJJhPYxdWx2hFMjGoX7dMUagg3ijXGQ4eZd7JwYgqMwbLatuhHhzdtqUDkD9qRjVJL7vE3iFQ1WzDWkL",
  "key1": "Zc9m6NnkzYr6kHYVjrHzPr4aoo1aFmpm3TkBFpDeJseEW8NpH34juLwPBYm3oAqR4YaQX3SAKufAHGB8iojTn7t",
  "key2": "MBu1kx4W6uBkJEBpaB3YwTAjjxpTejrgjdFe2JqzA41kbdjCroJxMf5kQNce6FZC6aekhViGCRdUJquuCds5EiB",
  "key3": "5qBQ1UxjBwX3PSbnV7kMMT34CXwg5SicJvxP7K4AUSihAxraEwuW2WSwjFNq2WjmWaKgJ7ArpfJNJsqNBrwpHjk4",
  "key4": "FtczKPLNc1SopUZov6MDW7fzTPjUMDgpyZztbwP8uoXRPL9isLTV99Yvnifp5t1NhnxherB7jDEGoS5ci1j2KG3",
  "key5": "2K1F76iALDM4DzGBiyRNanjbX3h6H651tb5Cuor8oLf4wnwuPq7J55KW6k733jLExVf3RpZDP8hmEukT9ZvPJ3sE",
  "key6": "krFmEcW7DTVrotJLuHBKa94XZwMiyYuV8N66gB9x9CQgjdxcifh7cbWpL7mwBPX4tKRLk4QtYnm7J6evuuS9u4U",
  "key7": "2hnNHeBESByn4pYSAhdf7ZodDdnKoMWJuA3JFnyqxwV8rfzfKKJENW9ZR1W7p2wjxEEkVCWtZovQCsBq1QVMx3wR",
  "key8": "5NLapYPfuhmEstb3MYSg29q9Vzs9acCXfkphWrQDwcm3k1hYFKqKJm7SXLKwUrXkWwNtHRwhkpsJCjMWHM31q3B9",
  "key9": "4vm8L4qMVr9P9pdN9aJ5LpFvNjcDpZtkmKNT6wxwGvUnPLiXQLYRiaziBzErgin7hTAgb3VF5yUkttHHx1XWwwga",
  "key10": "5a7dUrkGRYoRHi9SyJU69jMWcKWSbm1nmnvXajoxn6Kh98zZPzKsufotzLA4FNJK9Hrv6ZK781uvPSjRTifpa2yz",
  "key11": "XE2uckofNCptYbxWrdmNufNeTQncsFfRnaWAcY35odAA3bH7kjAcwCedaFMoVYDuWj6LRCbi6RtjRXUHS9WhuKP",
  "key12": "2hVvCcafeWvHD2rav1r3kRjFAsobfjzD9TLTnPeoLsURpJNMZj6rQtwwxhRozknH7Y5NyvLyGuzxyABTQ8dL92hF",
  "key13": "2oUmwgmomAAnNML9ZhzMnxopovdGmjz5NhwF61j6hXgjYLWBvd2s713TA9TZVoSwebxf8mx9JALiRYWELYSte2vA",
  "key14": "65urHyRDWAHhmC6V2SdX8yRLVi2jJGTDfUw8Z3pFXPvzeSEoYXAp8FqifJKZ4wDqTGBe931NKrHsU28CYMi1wPcC",
  "key15": "2FUU1L5sxK1Q4r4f7vBqhL7mAe5CrEzbTSUQGKCDsqKRSDchRi5rtrWGfsavFSkTJsYzb32VWSAKkKBK9Wss2wcK",
  "key16": "nMXHWoq8CdFm2jxYWGd5XUq15dMqHJz6ib3PXqnzejHFwSJUD6BCBTKhA2mavJg7hdkvkgnNzhKSGoCf8S3Tm1o",
  "key17": "EzCmBNfMsUvH5nprGEo9SW5rbsRK1Eaz6H9MMdsRR3K75VSx13XGv7E8Zq26LxyvMt2AHnEPjnoCyjci4C4hgWf",
  "key18": "4YpLG5j8qefTmsKzaqy1t3kXHADmmT4QBxGrfByfT48coJrXHme1k79fUtohLsmKUX7yJKxWHDj3EGnTG5Mf8Kpf",
  "key19": "2HKxACFva2v9syR77U6mM1j2rg4N7zQeUpx9S7BnCLqsnfYh1CRscirJTLRauMhJ3DTvdsCGbGebawM5nwWcqw4v",
  "key20": "7NiQ8Vi4wtmUatEjncCZ7GgZjDbJKD28yDP2bpVCxKMcjtoADFWJZEPQgHv4HVmX6xSw2R2XzGZBWjYaykrkZQs",
  "key21": "4YN73yPBEr5tv1zzzFo2oQJRpkeQpWs1KbRf7Qxb9ewnoqiZqH2RRnPjdTejcWpaPhTVKaZr9mRFpo8caiuQEgzz",
  "key22": "2EmfubV4wtDiyfDmaa2JB9Ys7KCytxv2FsxVqBd1RDXrqaZji49pn2afojwyX6C2oRQLfxWjAcQ6BKuPpN8VSj1h",
  "key23": "4omEpnBk12oAfDVZUMr8pxtzMZeWosRdkLNqTdqZzLU9PowyQvwZStXu7igJkmXRGQR3GF1DchNX9pLbBmJptxsy",
  "key24": "qo9KzzCxgvT9UjbQ9kadLc4rkH5eqPrvmN3PWfEKMeE99VqTpfgvE3cfiFuqTtpxZ6bs5scKcpVtS8L3Q1ti8Zi",
  "key25": "4YBdxMyqJsrbweSWAQtmkqRh2DK7vZd25YsLEFpxvRcokMrsHawR5fJ7hCXDgxVdHF1LWnt85aPLvmFroxLoUDWw",
  "key26": "62TiXeZJYcGV5jaQQMmkuWTht6UV82Z43m8QWPaNzszNiMBZkYVYHFoGu7XPy6SgKosB6vFtZ1TUF1sgMaPuYvdH",
  "key27": "3RXo7yjmqy8ZYGoLyA4FRcnBxXtUMWkPFBmTHVasn35deHxo3MkJsVd6Z8Q9v2NGstTff8PzYKfRfnCBhUYtUVFT",
  "key28": "5rdTX5G3ZQYrM3dA5uJiZ3RN7inmphmzhshaKKLPULr8MZi2uzQSnqWEkSYJ6TqGqpb9ux6K2ttTUePhLKUQvH67",
  "key29": "3JTuJq6BwN2Lx3vWwqenhq2FT9SPATiksJfNq1FnEGeAvc8y4pgDU3AyeRJcnx8PdfMU8hNupb3gTr667XkWPkoF",
  "key30": "4RpfCcNXCXURFVECrCpPessJL9eHYQ62wn5MBkebN9rD287cCQyY45FwQxFMzK8FqYpRMGpLotGrheoFGv2fgZBW",
  "key31": "3LFqi5ks9LBk7hEzGfz9CjVE3mWhbAdirWJZ6i9nRUT6AMeTAbfQWMxD44QeLGi9UpBPcvqHfJoz5vpg1nqqXNMf",
  "key32": "5SZhPhYuaQBkf3DiY6yEZrP9ss2wBiCojZqR3tymP3wTeKq8eMnwLY6bzZDnX5FkprPJdaJFp5zJXyXHcKMVEmVK",
  "key33": "3bhRT4PM4TXcUVA4EfUHxa2nafCeUVRoKg6JSx4KR4gBX849gaW24EJF2Ca9vhcEL16uwY7MaNK4RotjZd6i2nzj",
  "key34": "22SHz2Ykr2G77aHsReChmxpX9CgZbPmBxzwxNdY5DKZdC3LYVWUW2dx3YMGauAJ8GraQJjG8X4ikt4xsQJCnozhz",
  "key35": "4az5GetLV2Q3TSoXaW4iqf6u9nrWP1yhESzgDmG7UR3aSxLEeQGCeNtuPZPKEsRrvwyKLTF9fszGvqVzrnrBQXVN",
  "key36": "gxWVCCFPx9RTg99y4Ch94eQSoSH12xRcxnfSR7apUzEPaq4f9Bx5aPq597fbta8MFi4VJFMjFzHUmyi78vCBZuz",
  "key37": "5F61MjjVBqUc8QYiiTXmKCCcx31RLVh7aYgSBCEBcpPqPUneNFK2ZMt8EEMEDeHJHsPbv6LZPtir87azi9J5gUNJ",
  "key38": "2SEC4WZzmtDQyQ8K2AQwFNM5oPV1kYuJFdJV1qz5yoQHXTceKhSg5qbZgggykpALJ3t8kUfutJ7DjW7N3TDUkYUe",
  "key39": "2GrpYAiBwi2ZUyPoYMkjfUN3pSp11eQApe7SJk4oQHbj2HaU5DF2pky4ArTwN1zmU4nnjKfEeT64TSWBVyVpfmcC"
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
