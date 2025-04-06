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
    "28RXm5qSVKqND79Ejd9heJoy8VzVdUV6X5mHNZKzv3B3PuGXKcto47ANUWH1XjCue65VHnZrEwAmd2gTy9659b2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ibM4E5NvpAXRTEik9zSNz4QFYmMGiTTso5mQ8o7NSrSdfpNvGVxBrmLKeXjk1y99z8Pw31VhD5T6za1hP9MDwXc",
  "key1": "63emJGXrx6UMJd3gimmEMdeCVbMju3CAAcHAkty6ZiMdnaJTrrSLHpyPfMwFsqznCHmYzwYrVZuqdwucJQnDNkUR",
  "key2": "4QRfkw6Lv15mwe8gJFUU42w7Zw1L7tRoYMb7BTaaTzKG9f97PZ8uekf1qGMXYYsucsVw1foJb55Q2eYBHwwd5qr2",
  "key3": "5dCCw4hz8SUsRWW5CPD3HRhTjpEAWhAbuGp9UhaQp6YiVd1e2W5wDVsHgRHZE9fTNbqduGoZmiRQ5myrMLCeh2tq",
  "key4": "2tc8VM7Az1ZhvYrMDQ91JFwixHrMGZarBJXnyrz64WydJmSEwQr7Ubo4eoJuhd4pBySvgQ7yTYDK8L2VfUqHqzRV",
  "key5": "2pZJhkekAYGkiNELNAF5aJ5kE5iK8utgeGiutGjqpXiwEmndAq5oDjJTkhD8GukKTfL2yDvPESTo3MMFnkMwYxBh",
  "key6": "5tAphsBKp7uiiE1TD7YwHKq1DepdDewkee8anBjfL9GgDVXgZhNMgs46ShuSCfqsSQqzofQ4ZjJNrMEWiAJD3Zrb",
  "key7": "8Q1ZhP12yjpuWvgUPa2FfvQvouKYp4q7to9R6LocuHYxd81hRZshwYS5sCPNvV3qGrj8Y1obV6ua9ePdEyyuCzK",
  "key8": "3R7pTfEd3yKggBYcPavKSfzqQy1GgKdVqvZftgs2dvBsF6x8CsPDGo8JeP8JP4p9zMRpkeyCx4zvPgVG4zu1QApB",
  "key9": "5mEierJ4GN2BtNG3Mm7tXN6dPPErUmqkq2f1ivgcZDV9qk5gWT4poCYnsuhYdUwhNPVsmgor7bw2qXEsbwXd8egK",
  "key10": "54Kfd7JgJj7vT1d5Sw7HMQ7tegnXbMKKskdbDWTx6GdktQftwj32JFtH3Wk3A9saWVPHGNNHdJbtTdJw4xKNdLW8",
  "key11": "4k4bSzAPzxY5tYH7pZWrPWuJg5wSrKtneHZU648zNTpcGapeP6pGxaqpzDtooQf1Hqzg5ukVRP7zdWmP7ucv7Bbn",
  "key12": "4eriALixskXwd1HHLQqvFLkTR7LTDtELhGimHyUKwHA8aXpAmtC6VnEwFVDF3yXrsmxpZJsBFbHYwDzqUw6BShSe",
  "key13": "5MMWmnN8wFCHKzmn4HSWJDW629C8dC9diEKaXA5cQyWu9vaWvUuD4q4k5G2phCyECB9Apz1ZbMVT7VbRXoAsYnCC",
  "key14": "3DjzrFQbSo3vyBy71udpyQQmUvcs52AWx8DAb8YhYR3swQaN5ufrSZrwnSmMCL3ut7DXCaRrGEUgCMGRBr8GJZcY",
  "key15": "442nTrdeMAe7BqJ5WVcFAmJSQt84YLi7puNfnkBpRVCSw86PMZyw6nDH4WEDz6sMiHTQgdJS3skFKrVcC1zA6UH1",
  "key16": "2us6PeBPZ4GmT14dwH8KEkLfXS6sdRpZDrzfHQ4xAfKPGTFoJunFfpTHcKpxYqLSDcGECh18ecVDuz6CwFasnhkf",
  "key17": "dbRPKgepK2MtWRqwqNEGmNvuVK3XKDTJsce3vbQyZGJ3cmVoPku9zvayfehkijQsVsmDZ2Mtf85GuGh66Bdwwgq",
  "key18": "hB7DmXkC9zcro3eq9R1X9m8mKPPSfF8U3JkjHReW5rmHS4E8nbuwikbjVzgppVYopaoBXYFRXQW8vGPSrL4q3PW",
  "key19": "4CHjdQbfkKEHC9bpbrR5bYMkrWS4ax5BJQ6M6F928DYyYnbeR2GJHDg9vDc88DnHEj3Gxd5XKv75fvEcxCY1jdhz",
  "key20": "3db7iRodwLGXb7JETGtBPg76Jgg1WitiJbpHpcD9Qki8pNnKRyQtjTDg5S6C5KU43WcnbP9y1DqXAYL4P8H9U6PQ",
  "key21": "5Sc1DGx3W1BenhWwEwxWDUPWAoHwndTueJWEFBkWDHM7VbqoTd95kN66yjCeoGFs9NTCfAw74gFBaoF3cpTCDKCj",
  "key22": "3eAN3ufz7LuodqeoCSymL8xTGbFv8nNVqEvS9P5zioLuBTrLQ17Pt5o8W1kJLHG4VQAJKh5zEWuJqUyZHxW2GdSk",
  "key23": "4PqgH13aSZHGH6xtZsJx7NSxAoZzxWMnASYnqcgo4qU9NfgRhtR6vpahVuy7GMqzuCNZLU9KguEeonPqSt2PR4tk",
  "key24": "4Lo9naDLhUSRkht8tdpRYLkqU5fcsGrbzQAodUyQKnNB6t4e166KLC8nwFzyBotjsoi7CFYeRKBwo7iX2shNq8Xb",
  "key25": "33jWWXxRpHPNQEYor1n86hcvhb1cuR61V2BqnypACSDkCUfYjTHkkDAgsDzJDThFQtU1SDjgWfsgys9QAbdiNjkM",
  "key26": "31u8dxN7AMcwRiQKqsaaxHRjSLe599DZuurWA4dqpmUKZtx8xzF3ktFFzhvjcSEe59XAmMmJhU3vjZHh8wAqT3Sr",
  "key27": "3TLKU6NByoLzVTfDbN5dRWeVEy7F1LkGerv3R8jQdzru3S3gECYo6ut5PkC2LYhzEMFhXEdjggvRp9zDkKWQ2Wfj",
  "key28": "4LJ6phae58MtLZLic7xupXQT1WPdA6x9Ezpz7G2pzVNmLbdLnV9CvDSVLct7TEsJjFC4mZfiF5C6G5LHXP6pWcLc",
  "key29": "4mmyUcwyPtEeggaSaynqHVzg91sDpapqvCDoBhUQEwrikjtYarvSHL7U8uTiCwyT7kLGNzYz9NZsgfCQs7CXZCQy",
  "key30": "2aLgYm3VNUXwhguKsgqMMY8mPfJ3mXqB6hR3BNk9kuFfyXUBxmx8w1Kr9h59UCNwFqebLCsZzGLf7Zx53xA1BjA2",
  "key31": "3YKuYmtDk86PABi3npZyXW5HpNQdmWx6cFiM2YRUFZPV3GZzKasjKuV4hJzncRC2nBwQ4N7L88FQR5nks7vToyCJ",
  "key32": "vAnPA5q8kLvnCt6oL1jakEsdkSxy4FkgeEwV8VmoPnZNQdmreskDwpjqWCFJzWGbDbxFEhcw1zXmBXV4bABAMLG",
  "key33": "73BUHSVysApn67rwE18pprMNzu3U7joDKiqNfQc1NKiJjUiYPxFxzCSwBRHBALB17my6mkkY6J1BcAdc5WeMGU4",
  "key34": "iSiv3CjdvD5QSC85PckN1Gfdc4CVS6KAoNsnRWYUdvZMHq649PBCng5EkPrMHAPQ7y7ETNyuvpgpR7qm6HuCVHA",
  "key35": "3Qdg2U6ACM6XSm1XxzEyVg2VWCrT55ZovxLfZEyzSVpYXhJUXQ6tJTTbrfCALzuHQuwRBPXSmvsAwmjtiAv1CwfQ",
  "key36": "51s97cjE5A1Gu5zqzRJspsizDtKirQny7enjoGTsMCXbuf7QXqwxTjnxHpqVprFKcc2hfeA7axg9d1iTe4h6J144"
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
