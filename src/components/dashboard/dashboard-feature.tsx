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
    "ZmGnUFjymrXFFhQEiBPh23UJUJHqPWNKw3FXrxppRX22E3tkL75SrpViv8V1o1rVeSX8BaiCQYJc7G3gsEVqhsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FRkjhQLFFtnfY5LR9DhtQtekLysvN6eqAnxhnM7vTde5do16qGLtgCmCxEFY6Qg456t5bxaawKiYZGdDg3nXjvG",
  "key1": "4QM8M4UMkwujJCvpnKHpFMGhhtoad8xp7armj68XFrVjpX4yiEDR8ir15wejxCAmzkAsVq4siRJAgrDzsQTeEoj8",
  "key2": "25kYMdHHJtse8fkNrYsLZcXBMp4Ye1faYQpj7JMn7hvqt29t5SsxkTzddwqxLch258iQt7ZAKZNHFBHx9TEmpMMc",
  "key3": "2EZtQiX5SKvzg694BNTYGshAZHDE4iNrx6fNr25UyqwCVzT9Np22Wm3MA6n63JXiY1pUXXToN3U15akhvVWpsvP8",
  "key4": "3F3jz11uLLbV3dpMuo3siZpQ7wzcSVc2X5zrk8z282ZsSPhJfH5oLok6b7MtLtmxmUdmSXs7M5Y1eWmxWSZVXe3Y",
  "key5": "5A6x9X2dqvXQjuZE7GS4FdMCMTGA9XLyuK5gePtjnYEP4kYbGtQx49uH12M8A5rntYnZ5QNdYSMB26zUC8FrhvDr",
  "key6": "2tyYxqoTLHyoasTfiyR44wjyarSwE9ZS9vK7oWk1nGEwszDreDHdgAw6RupZkZKEaMQ67JQY6RpFLyCLZkQ99dUs",
  "key7": "3x6mEmY8LLcdMtn5oyxBk6yMEMY9VKpuVc9aavQKUbLm1vKmbUBciecBF3xEgAcFD3whdAxUFkn2zABRYYZFAoue",
  "key8": "2rhs9a8tRyctEary4nDF4eCruesMBAoVZ5FsxW9FC8TD74treWRSRGrjdfvVH64RW825pBjrh7d61vRu7q7RFaXb",
  "key9": "EKA5X2D3rWftmmLBe3roVJyZDHan4pe8QjXaauMDeTtavDX1w86U8cgRAKdf6GiyYSSBqVN2sJuEuYmhMbb2sJJ",
  "key10": "3vz9puf3GWYN7WqvPSx8s93JjfFCdDvf8GyJYy3YK6uErHEtn7NRQnNVdDs8YEKwtoUWKB4sgxfARK5VVT2Jpw9U",
  "key11": "5zZ1aKsPg8VEQcbP7MoxrEmNBkYprHQMRJB28LhrVJsup4K8edzZHbQJEF2PNvA2uiC6Q4qFTXy1o2PSTEejNYbg",
  "key12": "5dsD17a5EeF787wS7hHhbeT52VM3MFippxW6L83DCinPD9KnovXajN6J9w9K29G8zExFMvFntW4qBNajBQM7coX7",
  "key13": "3egf5ZsdMdwob7j8MKsRrd9GQGwiFi3EKmNaWjtokfQyxaubDbrZiAGPfTvA7YWtjHvgHEEVVm8uy9aott5GctkM",
  "key14": "4MhdeHd4THjNy8oNvJBuCBXEaYTcfXSbsr479gSKXTRvtFwGiy4kScdbBvSCWsCUPiZHDtwpgGz4aQq9KkZDsbDj",
  "key15": "iKrGY176UYsHmoED7heivK5uefnAC8UQZv2PUypjGjBhhB24dex5HWJuNNgZrGvpSRUxX4UUT6vyuuHLfHsnTth",
  "key16": "2EzbkJG9fsQ38Q3Tp2cgjG3TT7Zq4odfjiCrou9PR4qtPc5jBz4HgVTCke6sCS9vou3ann5rsv3XiTr15sbjnZPx",
  "key17": "655uc89bG229nM3cNXfqKL6gbYyW3ayJyhCuRwYNXkU5Ny1kDvDMo5dDjNuk6MLgMzRCk3irpQiaaS9CqSEL2kuu",
  "key18": "2bAMEcD1hqoeE3MdpKMQcEjijGsqQehMSUitxCP43DC2Mc9TLnczoooVpiZKWFfojcDqnyeQCSSBFhcmNzoa5vPf",
  "key19": "3DdwgprPcuBd2TK7qTQrQ6XW5fkRPUxXWTVVkhTSXdtSBVXs6g3ZXN6zsakeTmgQ9aopx2me37aHA4EuURwGFiLt",
  "key20": "4pYjAYMZXFJJ45g388XoUPzZ5DkY7iD1Q64KdT6v5zwDaCZXHr7gSikCGcyfdKVY6KR79MMmdEu9t7UuUdn1Xcyd",
  "key21": "4VVCPsQL9mCdM7KjKWRLnuWQsYPMab4kV5qd37gsTRCrrcKiDELTJUhJSMfchVzSoTyCjuDrW8nZg1FcPUBTmq7c",
  "key22": "5PuXZXjytYxqVShqnM1hRwUSEFCGix3LkegUH2LrryYaFVgjHA3ak76r53WhdGYnrPHb9pAm2bf3VPL6WhbcVK11",
  "key23": "28L6YimwfR81Y2V1EkjMvMueUQwBh9tT93Rn2u4TYPJjaS9B3VNffszzno88icWyC8Kkcamhd8ML3mqroqjDiWpM",
  "key24": "5HiTrLLVqKBYNgcYpZ7xkhFsVvc3rdPA3QkKiuzMTLpthkD7X3DXVJD2Dm3U5XtTHTuvkwLCtK8h9wSxTb47xjFV",
  "key25": "4SukB82o6poyo3cmTpJFjwfLsCehAudcEsmXWbGJKWhfGELBHhcywDG5688YeEbBEFpCzgKPihvQyjNgnLByv5kX",
  "key26": "s82QmUjSaQ5maVg7Y5iTPjvWzxfT1KGfyRsx5EDNPmYWDw9dAdkoRt72ebHTiuz2PDsqUZh3Fqg258vCQsjKXtv",
  "key27": "3BrdY1s4Ruy9kRhU3mF9UcKZqczPziqejoD5o89ndA8kTE2i489XyeYzVZ7oLQSPoeZL9JFY15CN4GAAkA7MAkBM",
  "key28": "oMr8QyAqZpi4yKYaqYRNqDFuHLbcRbA2kzbcbQtcPXu3eZiFZU96YCJTpPdZTWWvXrU6QxhDDSQYpEsAH6Q5weD",
  "key29": "48oA7XbzE8p1d1EXHfHMmFN9tuiwb2rs9r314d3jKSsv67xtCXxW5FiBEj132WPx3KHLDVUg2gCtJUMghWTkKUct",
  "key30": "5GLNE6kk2oLes5fKmFUuCvKhU1pMZ6rtn8GC8MCpBmZBP4JpCx99r5Lj9URYeYbPHYMB7Sw12knRdiYr2JsXhVs",
  "key31": "2gnpw3yAuqKMs5HSLSnBiabBhWZRToVJMj9zpm54vd3SxQS8fD7438znuamsJbM3ZQknd6ay7K65bqT9UTjQ4AGw",
  "key32": "2cmgvWvBysAwxoNL1MhyHHq3QgRssvijDzP7oxxkzvXxcr34axbfnXv7BNNtiMq8E9zyKRxwa9HtwSy9SPJ7Bxy",
  "key33": "2jkAUVtBBq27ENzvusu1WyuJVpRArLTS3AX4q6ogQgr883tK8mucWTyAqrT4VSLd1fFvaGxmD9o6xBkzYhhxTh1g",
  "key34": "xY3hAPttDeJemdp7V4M7GvY398TLY8ibWoZsVki1mnGkxmprRYqtTT8JV4H1sYeFUt2JPdDhoA9F8GGFhU2Gqfb",
  "key35": "8miUYEiJmoEB9kfP7qHgpzqETFNNkP1V7TA4HhzK6qkN15KXHTEiq976N5ipD39gNe8ApFBgsshgHWG43oZUxjg",
  "key36": "kbTXh9mCXPS6J4F2VXTQNdsmyUtoRkAwd3kHpTWTT9nA6ihUHCakW9NQgK6aFzkkJB3gJokLTVHZrvHiSeah85n",
  "key37": "21iRcNb4ufgzeA3atoLjbFHd8XxvqctiJmUkeVVuSqWZpHRxKX2gvCwx13TAFfbwXdfcmrN7tP14iBrHb5gcQbaV",
  "key38": "61GdjQTwSv4WpUfU8ZuLR8vQmmQNmAaS3kHuGPm6hzYzytzANgKwfwittX6obQdz8ZzaVvYyWCi4JB4fZ1wcLTpP",
  "key39": "4NEemfu5ztD51NRh6yvuMeE8wA46f4qN8DfL5yRVqVHZrTgwoAXG1A46ryWricJSt8aEXmcJxXzmkJuQSWL6fw45",
  "key40": "csnPkzfhNx8f6s3KsHt8TpDpSPPdy55eBbSbYBBFciiCLr7u6kFrJCeg3pxWpx2UHJ9X1a4CMTshbVEXL88b3P3",
  "key41": "3dz2RcLrueo7VXAtC2p2ToPkcuzacVXhcALjgzNW8ictjki9CipKcuu7CrFCxnPhQhKqY9E4fzpzSon5W65Bvsyn",
  "key42": "4KUvRCFJGPPfKoncgCoX3Kddcw27GAgENGurW5VMu9nrjwF1zfPUjrkQB4QhPVxKwypdYZja5yLAhXW3YQBzJGkw",
  "key43": "4RFxT3ty3YGwgPaKq7owPBjUXnT6MabyLUe1PSeiW3Mt5MRhnt2RxA1j4KMZC4ekmgznrpfY3WD6K1bWhLtYktZp",
  "key44": "3ekVf5ebfwJ7Vk6sKag193ZeM5mkGHVcWH1Bzi7my3QJ4AVrCd7NjUeLmGSuDkFRmJggPZ9nTPpa5XunJrhuFq4i",
  "key45": "2L66eL3joKQWDb57hgYoLrPDcecEsNjU3vBb6jKerGCqodzZLe7f1hzWtjdiSX4ksfo6v7GmfB94rKmSYcFknRZP",
  "key46": "2AQq2nLeQUdJ1o3rf5WW9fbexUvzvFf9Q7S9wdnTJDPHQums6gD2ymLRZZyJtiaboU3ar4kUuv7qX4Dpbe2xLAvX",
  "key47": "56muxMdR4qjmMHbaxz94prQheEBbYSEi7rwymBVFyyLrY93aptPDQGonhJU1Rr7tm5VyP2zpvQQ2KPmMFQZ5MZcs",
  "key48": "5hPk63n29wEH9mrTGhNPrbrfHDZ1LRuNQ55JSWvutSS3XWa589qjsK3iNEzcG9evzCC7KiQ28suVAUnEYPRFtsNr",
  "key49": "5reLAHu47oCWLqWdsfvE38cSW4KuuXSAjUEpov3MK95YqxUnkyk8yumcjAafAXkhAmLhaD86vK7tYDpJzcFAVBVh"
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
