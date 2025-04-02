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
    "66x39rttdmiJcNbmYLoxQPhpbU7qcMdSyEAgnqdxRbBM6wfHKH4J8LRzK9amSAgZxDsLgAu2aomNLfeCR5RpbBJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbj54g7qgzbJLyQnGUv6pbm6BKQEbQcs8pSmCNELxqKwpUAwuB9PdzHZVd51xhigpAJMmuiihZspWUpiDdyEJH1",
  "key1": "4GFBPHXXYscAUpJy81GaZQiQC6bEbFUfLUzW7Nsi2YdVUKMT5c3DKffGsLodLVoPmQLxADJU5s9dG6MdGyK5bfTv",
  "key2": "4kry968ZubCJjF6qWLayHdbWeBDcQTp8baHJeAkvmGk5VW69R7Sjchv5ewrb68MJbXVEVwTX9bnoccDUhej36MNp",
  "key3": "5866g1oCdUSa9zdao3K2pNHDCHQQGLiGe6732eMBy7D3sSz8ETHDBcCz1HaFpT33JzFx2EgZqkoejQ2BSSB9ubHP",
  "key4": "5o2DyA9em6ZfdjZ8bL69siP92zrVtb3mUbbVApqP3xeGh3GS5zDwwL6SxVxH1Kf547zUR5GaSxSKuQWe3r5GzrX9",
  "key5": "4v2WD28izSg1qkodnoTM7p11owkbA4EFEgJZ8k4gbD4c1QvPP5grbQiXX91tRqQcvDo5X5VSRynVB7Q7sAZqeuwW",
  "key6": "66VkfbWZbbNsCUYywmyBhUpWH3fipXHhS4pX3a2SZW63xZJPgdipmz2ko9TQq3dGfaaPPFiNNmdNYUz1Z2u2w4KU",
  "key7": "4ULLB7SVm3kUvwGJLaUhDFtqQAtiGqc5RVVKhauieLm5fkkbKz7jaHw1HE4dBpB5MNv171ur48pQRtuiTbuxC1YA",
  "key8": "2wxgVYQioWGdT4vGxkSpwPAUpTja2qNoeEdpSr3GGzVtc4EbTRz84xU3LMyQon3sN7xkSCXnCKymQQGHzg7Qzz8B",
  "key9": "2shuNCc15cSngudsrPwtw3Y2UZvfrhqN6Jiu4Z8pB1sP1G2aajjbN7wwqXDosjpNQfixngE2TSmk1jvuynq7NzQf",
  "key10": "5mgD5jwVUE6ggW8UG1suGpk9nSBvEBhaUJtKXkJbef9Y4jDgTzrbDY7bpEznpwP7uMUhFHUHmCCE43775bMP4U1J",
  "key11": "5wGjcCWne57xwqakXGxBDcU7utHyYExRPKKdq9vN3N728LySdyteF9256jrsTMpKxZqufeE9UHkp8mfZuabyjPZh",
  "key12": "3sMXCSwbyYHjAurpnaniLiq147bMifdYN53uh7c2fzwJkXZJ3qQPyVXeoRgMUCzFxt9LsNgKwnU3r48qncAJFpiw",
  "key13": "4C3zdoxZLef7iu1FYt242y7kJBnp2brpoq2gcJoJAfg5oDWq4wiU2vZr3WMmcaKd3JTea4zzdtekUAzXSJ46ZmoM",
  "key14": "63tBYUzqjAveYoKK2pAw4pbMT836ZkJ2VmngvsQ3CEb4t6QVpMZsAG6AQssKPNU5b4SoBnncRc1nk5ESQbvzsyVa",
  "key15": "4Y5zkWBbLaQHFd3kS736AW8ksX1s4JGURn54XmLgrYBkPu9KkahUABjoj8ayp8nWjDXd7ec43kgjd5KYjXJ92Nyq",
  "key16": "5NMsbcz3c2iUiGUnHU8q96qAEWnsKWNmxpo7TvcVfu5YpisHvVfBM49tvyXhkqiZ8meg2Nxgm1zLHRQZdPEB8BsJ",
  "key17": "3yszrUKLEusWUCn1GaVkddNpb3eCQcEtVCGQcoBWW8E91g8CdMejQGdnTnGQfAzHn7QDN31jGou4dW6xSmifmndB",
  "key18": "5vBhrcE6afXbxcQxm1SeBpjPvPPevb4MsnhGw8ewE9z92zMpJYwc9BVM2exsjHxBiJCij7jBchdePZ94CSt3JUmx",
  "key19": "2KdX2EjP19gCKXqJVECmR87kWr9Y7a2x8pQhKXYDUtwSm3xDfcQLQkMMQc5Sg67NwoMLgCvtiECiziKyeXiR6FzA",
  "key20": "4jwG5fR346zNsnjSE9QSLzFmyQKQtYs2gTMaRerjNBHkX4YxQDVJtXbQhqPtVMEuH711u1mw4fFscHkBz5SQtuR",
  "key21": "2nsvA3eynj7GR2MUGwKdheWTWsQSA7fAAQodSjjbuKFSmhJAbsa5RQb7WdmMWX4zFkYytKbVUJwQJjoroNp43d2j",
  "key22": "4yUdxUvZh1bHHfVNiDmMsTAuAL2FduCBCRCBAERFWa1dgDUdtSqq2dHhdg8KJBtLr7UrYc42mojeHsYWz9HRUd9n",
  "key23": "GuowdTSs8Dxv11veWWoPfxHSXRqxCiiuFJcF3QBaKt6QsnywaTyVAiSqQqikvfc7Gm9QfUfUALx9RGqdQAyRxQ2",
  "key24": "3gUynChFiZtEcm5NFgPorXAxqsaxBqhSkV4NqjzJcgaGkv8g15WRiHhkmKRWiqL73Cuk2TseWFxmeTtquG619MAw",
  "key25": "4Nx6Q3Zgwur7XqBTKQmpLBpUZ1hnia1JNSfp9dGpsZ5JkcvcJ72zutsbTeoxooenjxGSUtusZ54vCLqxZ1e2hSev",
  "key26": "47z3EeP4y1DM9irVUdBwxq9YHn8bwJgiMBTdJ2VbtzPK9Bic49RTAvVu9vSB8QFwQJz9jFzQVEdGki31k1DZJM3m",
  "key27": "ieiWZEgqFsQYok3yVvjHqEFhBVSNHdZwP6ZANGBDL6mgU6p2N57shAwC4pTqFrwp4wiv2yyibyVfKmB9PpLzUjr",
  "key28": "4TpTAtB3GgmoypSwsF3pXzdYKLcNWHX4bCMNn3dm8HLnBSYyXWNhVwFXVP7uDXEUYmCgzPjUi3kB2bjzaahQsjxt",
  "key29": "5g7ffsGzAKKf6sdugFydiiHeNUBu1KcA79hBevbBjhrYfLhCEvZyXFabso93naeDK3ieFcBozTud4XhC5puiwxEC",
  "key30": "2mhxKSy7HKwqsGQXf9yjpVz1ueUzM9XVXRqi3ewTRS4bASTSLfx1H9hAjPJ9Pe2EE3RvTzhjHQrsBe5sfQh2ZckA",
  "key31": "ZuZRRujdCtMGyjbtWTmecjGSVqA4dbxyybQg3hL8bLr53FKzM8yUvitSFbSSxiYzaiTYtAGzhgn6n9Eka4HsZrt",
  "key32": "467sAQCSdo5DuZEuWLez47w8K8ExNVDSJ1oaqWfZQzSrTiHNoxsc6exqhKRd2N6LdRyXFnvEEVgSBEkBWmD8yEyi",
  "key33": "3eb5kJAoe5Kz36FmdDGK23mNcfunU5Ymi4hmPs9QjKTbEddotetAMDrXu4ENmJHjssyW216iERbkf7Td752YYi8N",
  "key34": "yjm9XyUvDjoi9prfP58bU2zk4WvmGRzi9gpxivkbyq8rGvzF9aU1ekFU4HKLZZqTce1o5PeT3182wZvC5VypMVP",
  "key35": "3CZRc9MXE4WnELFv6ScipLbTn4bFJzxfn6nFFHaf13g8vu8qFFVXRqc5VksxRpQaqu7ezBvLNkkaYaX5JR4oVnVC",
  "key36": "4x8jX4LmC8g6Dy4EdnaFYUWWUoP5TM5u5XSao7V5QQx7EMjMY17CxwERv6zumBdfBHPaxk7jw4BWnSkgTTiyokzo",
  "key37": "5CCXHqX8xJv3FqDsFXDwGcFHHWuiWKV2ioCzHG3tRBPEWUr8roJAdsYhoEcnZi4U9ZFndSJKALHPA5BQx6v8NefE",
  "key38": "3CWMCmEaLxF6EquDVrivxUktPoDvz2G9a6NCwh2HtQZHZyiTXdz6ynLFyvYnGyoxNkywUPQtTfMtJtfdRdgNX73m",
  "key39": "59iw3JYHgEoEurTuKqDAtP3BQoDg716LEL4Mh3j6uQCTLBFZXk2cvQC3ds6yc9V8Y5KY61EaRsCFmpissbVQGLpd",
  "key40": "4c2AJJvg9gEghZq21hwk5iPmdFYcgez2cBfyofGtJvSMdUreiX2cW2BWsuEq9p2Y7RkqTYqvdWz6T4QL4MGvdFYt",
  "key41": "5irX12zyJ3zk7dK7AAQpKTUzZ4shGminY5svQGKauDpA1ZUk5nsECVnYUYe5ZTNKy4wH6J2JVEZE5us2cPgxD3DR"
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
