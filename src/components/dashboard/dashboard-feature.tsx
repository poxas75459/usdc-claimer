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
    "xHkuiu5vaRc6M9RynW6L1Jn1Z3pf3E1Rv8iS5da1rzC8JA5vd5g6cmfcBfCZ3geT6TcX2HihPB3YXrPmNH5hSrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QYT3uKmKYohp1NYnEEhJrZ6yxr5XG1QAsWHm58iyvSEFvrBK6ez6ee6mzNE5foj4D4XgwF9CrC4szSAEPM4DLPs",
  "key1": "2wc6LcobF4VwutaCH3Abwjt6GJe9xDouR2fUgvvoTiqRZbwG6uBxRnZY8o3xjS88nWBemkLhPUQJAhcXKBNVcuaQ",
  "key2": "5wdQungHFrGdTJUjQ9k6Az9jYJJAprSCcQKURq12rmXB6WQRy3E3N3oRCaUST376aY8odavSc8RnkuQwHHmUg1JH",
  "key3": "5H4pmLERvGKaqpXnPKL43B1RSPgK7Dp8XawaAVnwhLiPbMrhRwwDfsFRX4Yvg2vhWQrUFFuMvZx2CznbWBVdYraz",
  "key4": "5J2JZC1QYFzRNfqFz8TPSYqKnccG6Tj1m3ahdpxcCXUAAUnyYu65YuPMLVVPJDGLfjGeB47m7cTdKThthhx6Q78L",
  "key5": "Gvx5tLxNoinkw5zF8E9ATymmiKeCcxMgso6XCtH1p4b7LAhJgCQVVprzJsKgCdw4meqJdkyP2e34KhkwL9S8tB7",
  "key6": "3Cgdqnx44PYq5jTUaetrYT8GM3XgJEd9CLgk7M9FRfbu9BWZDoYSPEDQk1bk3S9ZRqpP7or9BA4GT86jKwdStdTs",
  "key7": "5u8wkfXx8CRDD9G2MMC6AcUnD2fD1zDahNchxHVE9RCySmmTtRCL4X1XsQCHLR8Ca2dRWAnbk6ke3qcV9Gk4oiLi",
  "key8": "5W5SqJjTEvEUgkdSnf2hfWg6CYNBu6Sh4JaBkAzCb2fdNQekKySMoRkPLdyDZ3ryoyBcNqQ8pjzzVDaLSopgogr1",
  "key9": "3ep7oBytrhNAszq37NfRKQAycyZy1a4hukDv8EDSdZ2yB1fBoR1Jy5nZZAPh1b5nk4UsbZYa6KRpf6cfWkua9Jx8",
  "key10": "Sz89zLVpvXCgtbwgiC6D3Qbr561LBCZwBhki5Xq8UpQbBap92J77j3U3ndraL5iHvC7NFhukVTPRMkdpmrsZDt3",
  "key11": "PfuweG9Brn99iHL6wgattnNgyaidqzz941Xq4JrfSigz8vDa82TM9FFTKziTuxXxPgXmoMfBj8Zq9tus8cwPJ5F",
  "key12": "4sLyFHqRAkBWbPBaAjaeZGfHKpyJhw6qXLAvMqbv78VK6nJPffAwaYcbM3FZcKnRA76GNNWUCXcjyRaPNLHcGfuX",
  "key13": "3BE9ZKeMGAWogaioL9LkzwVpuMAwd3P18KamZhAfra1NonKKZQ9A3DjDUfHpwegCipWT1JDoJdVZqHXpSwZrZzUT",
  "key14": "4vhfZm4KyteE16p1TtCmCKDd3ZG5QHCZ67p9AwdHjVTKmwXDPHMePWrYxaReg3iG3qYdKcQMaFp637n19eB2FZRV",
  "key15": "4E8KNXxhTMpeFj6wR17gpGKXgVMkNGZgiXorFTEaAuyNY21yyymg6aDqjt6dYWQsuKKRkZebXf9eBGRFM8TXD4Xw",
  "key16": "BvmxF7h8B5WK8cvTcwjCRwgCD3KQekdYPHMYADNw7K5WZTgfS78MXect4tnPHdxmJvYgoUdp5vnHkixfMCn18nL",
  "key17": "33KVGpjXAsSTCt76eDQ5xBSg8eUEV99wTWmjVUBqZhsPV6xdWZ21MspJ6esq3QQ5rxCwvsJgJLrooXsmRZt7sM6U",
  "key18": "3bqcKvLYNeshht2sD1gm2yfrJXYSDcKG6CF5Exe6jLstke7CRVmhn1RQqnCsAX1v7m9hkFXyzdQrseerW8T2pdyj",
  "key19": "4h3Ne2HznBZzL2ULVHWfPRnFik8v9kuJGT211ysf7nWEWzBGn3RwESgLoqK6WeEuKXsbNViVAnGRuz4pGCpfnc3m",
  "key20": "2MHR1b6D3AjS1RmbzQ5UYwu2Rg1ZrGwNQLbztMg9MAnApQx5xWXcvgdNGa1qfvmd9mDtoqfRBn595kao7vtBNwDy",
  "key21": "2tocXSBBFQT6kSRcLLnLRXY5nb4AZaAycgUYAVtV7n7Czp58iQHp2v3Xio4wYUJQMgvP9wJwZRj1x4vZh6sAUTkQ",
  "key22": "42C4pJzZbY3d39LsnLUDAEczoaajdV4cJLYfyB7wEaHtCVTDJaJTcw5ZqvKZf6PuNeeya2qALTGR4dVzyde3CdgJ",
  "key23": "3RpC3vpig4yhMCDy52Xz1Fe6RqNFj1Zj21HGnuV1hfogtPLNn3c3g63en4J5WSHf9o6tyCZxU8nsAyNoGn9xonFT",
  "key24": "3moyMkKv2YapABbFhf5TfPqw4SszHVGBzAnEY382YQyrHjMUhTCi7x46X9XyfQNqv1Qgfye2rsDLtPEV1CEoqir6",
  "key25": "37h3zHybNWvix2VCQfTEtxmyCtUEdFcRfg7tpDpNiNHdX6UsziPsRtzoTEN3kC5zL1WNobxHnq9VRgU4vU8ohLop",
  "key26": "2RsQSsnGBR2yvzyN1t8mgtXMztJfNsbBrmf3UUEruEtJz1qr7BMf7EtEkXEAWEuTBksZ7AQsz1k91MtsHYX8ibs5",
  "key27": "3a4fq453Uk9yj9noeTP7qdMnmMQvgjSK6Zh5mFL3p8N5MA9amxXqn386ARwWaU2fkBreEX2AwSKs557ZVX9QJf4J",
  "key28": "4GtbmMR8jeAsSPGUndRy7MY8niJ1XCDyZx6gSLEY5ZbACzEKKzeqYpbCSMrajp9MSV3pBGZHgvbcUWALnXDJTxvW",
  "key29": "61DmvGYeiY3tjmjZRx7DWcSs68tDNjZZC2LRwfG8KtdiPWt1AzCtpGgmvhaMPqdTf1ohE2X4r3REvEcHXqEwcyPs",
  "key30": "2nzpaoYtGBvLk79syBTSeJ75AUejXsPj8xL5sD7wQUwPAM7NkXTSES4XM4id6My3stwSWwddPxgYE1HrqebjFtGj",
  "key31": "cmSS39aN4KScpnZPY7Uaa7R1yCrBb8ApuCq9kz8jm4Hah95GZWZoNSdfh1THGGFCo17LGzQtpByF2LKxguC8Wup",
  "key32": "2jz8FRRyKkaPVPJJYwax66QRz95gBt7zbZELYEToibzBbWBHKaXFAmCNWTTn2BMVJv6o9DdMoptzy4WFV7kBASuF",
  "key33": "EtNUob68XY7GNf15cYUr9LnQgnyu7JHxWB7Cpg9CDkYyKKgmAcL8j9hVpnDLWZPuucyuxsNBXJv2sLqhj9pCeaU",
  "key34": "iQdMKKhzxz3TEoNjP7hFTq1bEJkN6b9pge5Sr8C4jY3vZvZpo4QPnHBmDTCVrrSWDfv2zs2ww1XhJSUUaFD5X1o"
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
