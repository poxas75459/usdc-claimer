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
    "3zjzDMELAgZktiXVAz8vzcKUXcR3Wcg4s3vua5TY89otjAhJ7cgMaxcgtK7pqTrRgVJC3KXM67jnv5KgJ4nndbYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhcAmyWeQnLmug7fm6Bxi7KpJMmcmRDZbAJSpwozpy697vxmBcbpdDaABdjtbQ1eMmtuGoGiZpvLRfFao72qfFk",
  "key1": "3xLBPnFf61vPTAXFiSK4ovdTaGWZJNiMJCoQnzLeHXj4SNbnKzJQoyQJkGHiPjtzbhr5fsCodueNPVZu1hyvLYwT",
  "key2": "yh9XLAXi7Ui445SjXX4haNGhDs6pY4DLE9RQSyVtHN9wSdmKLjMWBegJjGX9d1FzTHSe9cQXRiHNyAGjG74gajN",
  "key3": "35iQ5amkRmAQhGU6puAMiucJB6HXDtavHBXVWRvJUZKNj3ZXetS9RXRJk6M86qndyf1rtrhax4ZX1PX6E2py1Vcs",
  "key4": "2YGMDVowE7UgZVXihprdyCdfrEeokpyACwgtKA21RGLPq9kJgE1kaNcs8qNQYpZmP5sbAujSdTcge5TLaF1xAwLc",
  "key5": "YpcC3Sc4CaWrc8xoiAUcDwhzGiG2f7RxmTLgSCnZH8tGipQZvH1um6NViEmXLzc1Az7Q2kSZ1UyvPsWY2LuFqJo",
  "key6": "5fuqBi4QfZQiESncdu4aQ3CcZMjKrffAFd8STvv54zbmA64Yn6ecr2R3vcPohZeEZpvHDiBQQtRRRKoeVUenCxyS",
  "key7": "fKDwa91cvwHs1xVd29FKDuibAFFbc4TuS4UgCpTnJZK2GcZER7dH1QPi21RkVz6pLSMnq5bqm9HteZNjCYf8CUk",
  "key8": "2qFk6C8RKpC3Ltwb3A2kdmZRy9STBRw3q8UQtwaWwSNEr1JZm2rCfKM7VdeZaRcvfqQsSEUQ3LkNrutmjWBAkxBh",
  "key9": "Kpdem4dhqjmkMgbp8x9dh95Hh29N3md1hkFURToDyHyyEu4CZWQiokpkPoYDZ4vmrqCEFcGwua1i5HyKZZg9iZF",
  "key10": "DWCaYsnJGGadgoM81UiYHQT5vNNSV6BL8DSRJbx2nmEbU3rS6pidnE6WidREV6UU59BDCd8N8fwvQQr3tGG6iH7",
  "key11": "4x36noP6RzZ2RiCGNiCXizRUAcW1st9DmZQknQxjZPW8iDBfD9Z1GcerS2hn2PXaRHBAABmbB8foASnwN49nwkhD",
  "key12": "5vyFb69s9Gsc3XQJFbWyJzWmFF9miTEXgfpm3HV9SzTYrX1BSaRqfZsHiWtPFeaKeG2uY22rio3CYdxLDZPjEfaK",
  "key13": "5oWfzMpqDQbX4XXGbyZiv2QcbbryDQPujX6c7VbFhsX2FTnHWxoCV9QT1b4dLNM4oraZWVNr1KLK4LhqXvmZ5kgh",
  "key14": "3gHseja58H3yMY9xEZy5AvfFY7rwrkxoGQJSh46JBhJSJtdnJgcxspXu6kU3LthumgYnj1uXoFdauVDPK7Yafd2S",
  "key15": "hi8KRcoqrDkruzteVJRxH1vu3UyXnK5qhXukTVfZxu2dxVyq3DrQozcaiV1DMUqWm1hpihCntYA1kKUgbbrPFL5",
  "key16": "24a2FsbZLKV3eoNkUj1o4qfAM9eqF6cTEtcgAnMEWFp4wVNKiGioxiB9Kq1T6yQoJp5v6EwfjdJ8gpma2iuCLHwd",
  "key17": "4MZHesvbviwUzxkowncLYa5vgwweWru3StnXwPJr5D8U96ACbiyBHtzHeG6vPBZ6WWBAGhYqd9RqHQFGNWyGBdNP",
  "key18": "5yGJFFYdgLPqQD1M2WhGZVZTCVP63KnCAS2JJFHp2X7v8DMj5WM3qffajoVkCaDCza1ntjWzoUAg9PSNvJUcX5yz",
  "key19": "4iAGrrx9f8MNAhnVc5YF8J1YJkafmGAwThP6DMtybTJn6xSJPtnhws7kqaiH2jmQNcWuLYcCNHfkBoxh6A7SWq9j",
  "key20": "4n3eihw8nS2VjfwY5K1KXp121hCEFZPnY7X4CK1jQkogtqXStCRRpr6NbSbo4WgQpzEmtLjucqqr7zFoEhvEN5re",
  "key21": "5cnKtPoN1ZHg3yP8BDp5Gt3MqoSLyzwjjpnXKXrn34dWhJyjRVjagm1KiDwRPCvwkuLJ1Bw17fv7wBmaoi8hje7U",
  "key22": "xXpzmxJJntsTcYuh5suWjeRs9RFuq8Vaqewx5VNLXU6E8npakiSzjxzaD6dRWwVDuso1yaL7UMQvuTJ7kBoSWmT",
  "key23": "5hrjSnDjMR6WVVTS2pEpxJEJDvyrd8nZqoKbiMo5czn8tuyiL56BVmCPnLXMWj5WYEAF4MBnSTWPFAvNTk6rSmnf",
  "key24": "3Gfndi2UpQ3sPrFACkZhjSfJPQdgk59VungXT77VF1WrVKYHcuVyqPQJZXgnbiDhE9nSmkdUztQ7WMfTscD1rqZt",
  "key25": "MyTRtNCexJJ7WydJjHVUNN6m9dBVuBoSS5owWcWC7WMhSvCPB1J3Aogtp571DX2yEzSFyw979CmXuTxNGnrBs6a",
  "key26": "5r2S94FEkM5VV6XmYTW885gakFDTafbb1G5SpWkfPdXhwSounocxidjgu2t5QiMDY9u1w3PFtpM1gjUHzXSE76sK",
  "key27": "24mCfYUF98vmS2b6jn8xp2KMwqQhMA8bKnXaXuBLFufd98CGSpjvx4Bx4KkTMLquDFMQa46HNdBZbqD38TctFJhm",
  "key28": "4qNJkSfsXtz8wWzdbCsRQbRdYucMBE2mr5Ua9vswMVjrzAWvfjqGcEUQfsheebs3Vhgnv6mHCuEPDYt1vf2yJNq8",
  "key29": "2v4Nfrgpm7Y2ABnAS2M115skLxbZxDier9eVKxCoeaRP1t4ubVZVSsDkqyMpbh92BTATKNU9MyVsj4dJyuMN88Nh",
  "key30": "3gg3VAdXNRZ79773trpTfgVkseznAwgCxpBffBxQAuFqCukjPW2yxaDe2WMGj8yZ2giepAHM9dsGVG4GZ4gU4aFT",
  "key31": "3j9VKw8FKPEaq3UbRXbV9wm1e5CGbJbpQzQFLCwPnYM1neT7HA6Uice7NpUT93QCb7iUN7xdDhzZyyULUAwk4oep",
  "key32": "4FnNFsZHYCRoVtLzTAzfWd4nkiQM2hyZyDDfj96PAUANVpT4wALhEz3fcSrBXdGGSAdVBEd3T2HkUbxkebPAxHFq",
  "key33": "4LPnGXFfjttX9SXAZyPsnxTATCuLsxn6ncKbYAyQLcaR4gCNnpT34HCbFDbg5DCDGPVvExk9G9fNYsexhZYyJEGA",
  "key34": "26KFS2RBrcjp2uefy7faih5Taw6qcN8owYsomi2C5o8fHxzZuGgKFy3LYTfw73PeeBhpB5tcACh94mkXtg8CE2Lq",
  "key35": "6c7ucf7dRDoNmVreT9ZfHshYdRMwnvDrKHH315Ch99Kx7MwxevAVPYhKjqEAyhBwa56iq5ZjP4jhtuMmABweFdp"
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
