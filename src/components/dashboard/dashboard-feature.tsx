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
    "4adii7VawKrEoqsib4tGVmPgTaNYAYscY4x1tHT8ahwchd4yF26afZ71hqD1tu84WQq36o6U3FMM8ufuFnVFoUqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ES9hrLsMd6XmK6iu2THVXPU3k4xFtc8Bi3ir3du7VQFMfb779yeXENADVCGHciZ9DQxrH5smAStBoswJRhnDqNE",
  "key1": "4WqjsiBHuzcDABt6WeFYaJ1q5C17TbkFx4v44QbRGg84DdMoHV8ThMpmE4RgAHtKcMyKo5J4DtLCSxHouibNWVo6",
  "key2": "4Exdu5HWubGRfMTozK7WstA6iekRutKgNcJ1RY4RwiAYVBS56AzXDm4Fjjnk1EQ8qfUjQSNFS5xjavzQ3cDnrBBw",
  "key3": "2DpFUSBZLCNUhAnCfvi3iSTgKAX7gh5gsQWjQtd7W6dU2dQtwXWpksqSXYt8kHqk2rubYynJoKn66GMyKtY2HfWr",
  "key4": "4KcsBwMtnZY25MRUXPEEvJy1JYkCkKuKhKNAjNMoKw33oFPaDKJPrV9FekkSQ8FwmdFdPT5C8kSW33XpVC5UBoT",
  "key5": "3HQdAcVEEQBEEJMzWGqZAC9ZW4TwVEosk5dd3RBJBpkW1Xh33TxKr99Zn2Y5YFF4hjrV6utiZhgJdtzuYdqMd7iK",
  "key6": "24ShKmxTLhqYnrbk6k77tfCFAMNLoaEj1TcaSvYwT1mjtvEg2v3xPSUT6hsCXP8nJYQTVsEzvZwyqUuVj1PeYjaV",
  "key7": "4enRYd7k4TonZ3kLNvvhs8tF2yiYUsWKpYsbGg7iGdAxzMYX9sXNbGJW84bv3nf7PGuKHrCkvL3St53hncutc1H7",
  "key8": "665bwaCAVk6YZWU7xnaiPeDFVtLgyYB5vdjbv7S5x4mtrbwszi6gf38wHb4FEuZiUrSHmmkdqkVn1vKeWXDCDZx9",
  "key9": "54BbradY4zRf8R3va6YwqF7W7b22wqa6mANjHGm46pRX2aF6qSGZZw2V6GcCLrPc9dYci2TFbCsWewCTbnb4vsd",
  "key10": "4uFisWziX8iwZucLY3JpY9bknHmC8hcEMkWi6wG2XpDLz211FmaKacVqemN23rNocEjbpxKUnEwACDSpVf2cBUEf",
  "key11": "3pv3yrCXfNcLm9bBP2RAvYXBJFyfCamJY5ie43zrMxnXCKEyGuuwYF1i9LRq1fahqy2WWFU4Djp5aJWVHVJ49dmV",
  "key12": "4a2kjwx6ypjxffeY71982PupKyeYUAN3DRtbBBamTYeF6cx86j2eWt3tHphM5wsChGRSQEbt1Ze8ygmFGejMSS3Y",
  "key13": "JR7SAQqYRvR2tEqQN7SuE7ErjVjQoUiFhrDrjetPoNHo7sHzseZ2xYZeBrzbTgbzsMzHFRJpdeER51SWCVMizmH",
  "key14": "4h1Rki5dZfYK4bsBTheRZBe1uFjMhmKw3gRA7qZfRamRSkbYr3efsxkkjCreyXLCBZuG2mFMXbBR2TkXJX321zkV",
  "key15": "3yofMnNzaftBbEaWNLUGRCD8sDXTKj3GJdDfRQ1mq9PJJWSiTgsQ5JvGZnv3Gqstm5MKknEnfcPmG5eA8nciAPjD",
  "key16": "32h9zfCGjUyTpXVzRZHFEqbdxcQc4HXckcUFjkEqKpx8WK2ACA3e6zCJXhEBDE6skztvxYirAn4fc6Ec5szPwkZr",
  "key17": "41Fhke7bovx1dksxVTPcpSYUDuwnDHGiApBLcekxkpR74QVxeomuTpeNU2M5M9WTdxobeacZP3vvs7K6m6jsW6Y6",
  "key18": "36FqabgsPhdXLTsfh7Uup8rUasCBgmmFh4FFxUzvk5psxxRrT2XLi5QdvdyCtzcPSr5B4PN91jBNdCGvCLETJAYY",
  "key19": "7k1Tk2CvECn6DtGFtWgVEKhKFu2XEUjBPg75ECWHt2dNQxkLwMy8PMdoFz9GuHTdDTsgDEB2fqyUkxagpMfe1te",
  "key20": "5u5HBYzd5Kd8ZEFTpr2dZ9wB97Cx1Ea8Mqszk7ovuDeKxzduthkotzob9Qo7tLuXvHU4usUmitcDZ7MFFugsuEGi",
  "key21": "45SKJV4HaQUeqLqPVZNAUcgM4JXPqe134TXnTm2itP1nns74GM2QdTirn5HnbVhTVitsHepkcakq349cSCqqWFtZ",
  "key22": "2JaPe3VoRyMqfy6wa1CGCSGR9gdDZtFRNePZnRm36N24NTomHjjxTseijuQH3jqHZnDDMSvyk3K3x9uVKgibHbwd",
  "key23": "EZGdkgManiEH5ssrqRG2P6SMto6AFQ5VjTtVo69DHJxjuhw6qCLHckyfMSEvoAa1VW8XUwHJ1hmKG6Bqx1wC685",
  "key24": "5TtTy8EmRAdK3TsVbTzkzv2fBw7QtQ2tQ9otxCfmh2qWY4D6JojxVgXMrfqemgrtXF3Lc3shNtew7MZWEbgDWFqk",
  "key25": "3WWi1K1w6Uzgdyf8pFQx62uFZBvj1UB8vcxL2R5QYe5nzFDxP4rFQMpBo7PY7Kmns7SgufRAZ2gKMz33oq2EuQHK",
  "key26": "5auYwtHPogVfUqh7mVvGjYFYPRSbapsBi5SmARw5fMHvJJMUrvzJqanyhh3CcAxRhfLmcQZSf2qkHyna7JR34Tm3",
  "key27": "2Hky5Cst5YfnaqQZV66HkDbG2AQ4FRtjNMzwAxLf1XgzpkHUePipJZLiVAxvPAVNg5d3noNqknHYjaSgVsHHWwaS",
  "key28": "2NUeSdnwcLf3hoyBLxmRttmMzdhssTF1eCUMtYCNyPKLauW4ZXAdn5uURpsHmQFQbsmRunGtHPA5vTRHe6VD2t4s",
  "key29": "5RtyRRqzJnQEAvTJw7XxZCZRMqajx8CY6Ty2dG7nhW5P8wjPEZEsoKaCGQQpBcLP98P66auwwK3XsF78Ue8oVJG1",
  "key30": "3VAsRjXYpjSXcUqEUHhN4VS2n758cJuVXVQA3yG9VwStZikVwfmyJ2pXHGjW3FbcnHYY42Wnc1MciMYS4TjiiDH5",
  "key31": "5S6YBkSWiWZg1JE897xCcGWAXqSZPpGTNj8zfGCPs9vkmaHchwhDTGfVW8EDAuFuBPNs5YXHGs8SetiyJocaruKS",
  "key32": "d1zikCnpuctwgsi7JWVWrjUg1bCmsRXgmuWYfBGnFVs4rZDkddqRQEcQd9YnGExfjJ691rmdC1XBQn1ri6k6qK8",
  "key33": "sWuqxLFktMB4bj1AjhyXmprtceamA5vz4iB3LBd64Xd392cDe4gXZzJUqzpHNj5Ty4Ky8eH4gY2ne1UUoye9tL8",
  "key34": "svRWCq3hWsuG5i8chnWdUZuPk6jo2gBZCT8qiWSAZsAamUs6GJxEDoJnRT5ni6PLMvy6b8Qui5fTvLD6TaQoQzL"
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
