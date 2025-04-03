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
    "2dTSyG1RDzcZiTXH3EvZMfRn8BrbKhiKtDkT9ZSLC6xS2yiTPx7FYx5R33za68s84MNpURXKkJLVv512mZxu8Lj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DeYV8GKGiBm87oHUvL9kn7syexZHAuakvy9JfUxgVDEx7ACQj8y8Ppc2w7ULX12RRcz4PV4FUnXwnQbS4Mzdcwp",
  "key1": "35Qg7rmedNSQNPhdvAD2mHRhdxjAsawejgvC1a4CALeeitoZ5p3WacGiGePDV4SSE1pQyPZnJXHHwwjbUMqgmsSG",
  "key2": "3NZUFVVfCiEF3aj69wk4Zebh12NKtjAjwRp6mkS4UYL17FAPkoS7c8dcLjqrxDU519QGyRbciaCY3qtfkPqsZtF4",
  "key3": "4P6FgpVrcM8MqSfy5p9bbCT7LoYi9dpibqdvFawQX6CxSwpfKBXJsk7iNrfgabqR29X5DZNTD3fuKYqifoXTWK4X",
  "key4": "4Wa4RfwpVKjT7tvTbAuWX3pdapC5EEPoUFPwkPPCCcEAkGZgXAGNBYgpcb9xya27PwNSnZA77pfsXFdGg7zQ6fmR",
  "key5": "2tt9pegirVp8yM5B9w3dya1JKKYGqR7zZmGvCoUnYiY3Twb68c6LQtDKdJbDcqqVrge3VhquPyXfWNxsXQsJzBAm",
  "key6": "5h7gqSqDz7zREpWzh71isLcEEmN3zsHBCqABxJwbWS8abN3HnFMAQzXNS9Q1EytY3yr92QzsEN5b2V5c25uusiSV",
  "key7": "2sLsCS1A65qGhjzWn6924wYfDFY8aNN8EnQ247SL4A6m61U9MvAgJ2x641gx7SbeueAdvHUXyucoo1fnEM5VJPbM",
  "key8": "5DjDEe1Cr5HHhzAVyD2zeJynj6Gqmkzv4fk4Whjaqa5cQk5KNYmEGRt8rREBuz96djbGQLzkm4RazG8Kk8UKZ4yB",
  "key9": "63ZjmsVPiuSjeMD6R5NMWzx5mwMYQsXymy1i3nKd5bWaxWge4NXDmW65Lbjta2Lb7EbP7up3GhF4JTFRxY9tSTzF",
  "key10": "2NpcKpgzJvNaGntY1mXdMCXyqfHmmhztPgFZFRB46uL1anp5k7kouRAvCN2e9ZLCN4zYJTHHvoM3CVwzRN3hYuJU",
  "key11": "5kmUsrA8qHSeFmqUkYcRTFDP3i4MWkc4P7MDX7abGhs7gSvsxpTqrtmrGhUrfCryGTUMEKkodTXNV1dZr4Ns6nG4",
  "key12": "9ARWTp7YE9GqkXuNE9feVc6LSMNrH3CyoJPJWzJmuSBpimPCzyNHWJNnf2ivx4U77v1Ggh4HxHk4gtyg1SKboWU",
  "key13": "2ZGk9EPTSTXa6L5CBfUQRuejdivKF5BCK4XtQMk3E8snnoLEtNyjumtpgCa46NPDDs9A6HL2cqY8jsickNRek62B",
  "key14": "5zEbLMPqoFyuuFfSdE92SHLav4MU7eQ4SSc98jx3qShmik4SaiLjyDBCDFPRKdCs8g2pa8eBPMvBBLzQJxVrythJ",
  "key15": "5jVAemrLiXFPNufv4zxXUt9o9wc1oybDXymV81WhNZtphMuuitikA5q998o736PxP1qU8JdHsY8voErBbhgYrfLu",
  "key16": "4mTzm6x7AcqUNmAxGMrqxLvaHKumGiRvpPwGtkEQZHADaPDTCQuUSB2X3j5FpK6UCK4zjCXetGjoabN3M6SeM53V",
  "key17": "4Rq8j1p7vPggmy9GFZVQNX2n1gLaYZKbjxvksuxdaZQtDaoXJehwqhcgiZN69cFE1Tze3aN22qiLFVTG9xBoWoDV",
  "key18": "QCXQ3EkrvNdJPk5pixnvxsVMCa2RfCfmDK7Z5VfedjvhfwYC6sCiPV6kdHcjZcpTXkyKgAcHWaYaKHdEU7Yrmko",
  "key19": "5hPdu5HmT7DutYAShRT32iWDgvenr3yntfzTgG9wnhU3jWnk7wEGrtgWD7nUpz8QNugQt4vB1XP54xbsw4iomVkf",
  "key20": "4W5mDK3Xz8jXd77jTGnUVEyzmCyrFRBorkjUhiJhgBbwH4ZJrB8BRYBFHzYKix6s7omvB7Pxzce4Jybmn3DkZP5w",
  "key21": "5D6fCamfhWAi7WoniHdszeubXuDVAkk4QgzHveVnk4Q15Xid8hwMpMf852mZnCEzNMUevfxRm8oh1sVn4g8zpm8p",
  "key22": "2GPbeD4fGbe67rspsynFQvp2F8fEHxj3cXCJjjXHuh442recm3Cm47ZZrNAYAa9soWFi4CJcan4QwSbVKbAvuNr9",
  "key23": "54dg5Jnqr5y5qAPfSWsxFE9JXjUnUToHG2jzpUnmUHNBLWsrBi7HpgSt3uEPiSKN22KFnYQMZHf3D1fQvvugNAyA",
  "key24": "62zyFeHqJEC5nPdbaRgsrSqDWPgPkb4Ex5BVfpBzyWcb8VsVG434mCXxeuRMNg5NozyRfgpnFHYx6wjq23L4Dz72",
  "key25": "2WwFr5UAWRGr9dLj2qGjryNVurbPgnXq9QMGWsjCEaDNmbUbStNwrykGoh7hrL9WXE19RXVugDVQSjnwNYbKznoA",
  "key26": "26okMi1tfJwjXUmiuAyQQ4fuXxjLqZNTRoJ8m9k9jvrdotNp6QL42dsUHy3s9APTMVoYq1X8VzKP9TAywua7WfRT",
  "key27": "4DgFQbvb3Gr6vvpWsYNkrax5WJNAQXqHpkvh5SRnw65sKVY1CL6TBy7RyhgmCBsxKvseJ8Bq6Zjz8wMR49MneWiC",
  "key28": "53Tf7AVmyiJ2ZrVxGbxxf3e4YrWpqRRntLnYLM72iL4xQTixcPJpCeGj5ciPqzqupkR3B8AJ1V4yM7r9FagodM5r",
  "key29": "5hfJLV2L2nxT5VsrjUhMMaJBm9i5WYE1ziRc7Y8vJKJsLUuCLq83Ag9kaRevBA6NiKjVjBtt71JEDhNFVycJimvZ",
  "key30": "5RzYzaMeNxv3JVFgDc3M97AC26ovWm6bD1vaWR3RZSX3b4JFJKQu91CuAda3GDGXDZa5MUqm8nKLksR2cmtDKyUM",
  "key31": "4DVmJbVk1Jc8vvQdGMLUq6iJWG9k8PmroLKHtqW9uz6cks9dcY72Lv53FnC9LWS3vvMnTwRjeHFxDT3C2K132h4t"
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
