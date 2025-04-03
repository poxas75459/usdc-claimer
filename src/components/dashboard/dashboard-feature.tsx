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
    "pAfwWF3vcwa8SuuBKg6i2s9tDHM1Mo9Srjr3ZNq49hkTRBgV5W9oxmeVnP8vf42QBEhdFcxzh4YS5NEkn6sy3km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ND5sGViKJJGEwyUD1meMAEPcWsE9urz6T5tF5CPfm46oiBir3ZA3vDXk2zVXRWdhQ8DuQ3WPzbhxvPJ6mwEuoH",
  "key1": "3pMdtLWod5AW4KgFVXxywhMRw7TVThaS8HkaG97USj7M7iyveuE1KCBkYXVYwSw1XPZqEVWEe14WuzfKfn4Hxgnj",
  "key2": "5dy2cnq9jmS2dLPJbpkGpckYkiiodG8Pfbku9XMXbWb2hhNTciDfZ6gGTCgAnk71NyetaojDXnCoPtmzPE6Phg3",
  "key3": "wX81B5EJbV9y99LuqCrP1PyEwND51NxjoxoeaFxTmKEuwGvCUTsF6JzJrdMwX7gv55bgR73zZrXYLnprUrtnTrb",
  "key4": "4BQjNAX1C4qXCGGc78dAErZQSV4oQdB7B2ahzfnWaUgkZKGywKHc9jch8N4HzzFdjy82WX8rcXTyhjV2HiVzySWr",
  "key5": "2tJ1BW6fqs82PoS6VUYNb3h57LusPBdnWCdLSiUJfkwEfutyXZ8wV8qDFgdPbxeK2sfpwtd5sv5ysEn9nyw2v8x3",
  "key6": "3KPAvDugZyf56jJge5a4kbJKQdXxedD4tXdTqdmzu7yAzZH7vT56dKGWa7WkHaf9RKQEopTwTkBrtmS6nrgsmHX7",
  "key7": "3UWYpJornCPex9WKDGZiDsRL6mw4iyj8WjVeELXydJRUcoa9Bix7P9Gr1A6ef8mEePD9acWPrQGh8Fwooh3nufZt",
  "key8": "5uHFkbdv8jkJdtjgJaBFkxFfhwkfXYKHL9UHdHiPVvpSWykVWGynwR7yoqFTFBPveNNBkS4QitM4EGMp2wHLdfag",
  "key9": "52jtFcr7uRVTGkKg1dLt6F4rjVpjrv74r7q9zqGnPh8YzWLyuAsLqbhW7Chm5SxkRLPZMjj6cr5Anf5RyW8z4w8g",
  "key10": "5Vggw58AbmPKEpYip4Fw1DwZwcbd6mRPjqnTDiGdWYTUva7o6aHgUVvxCdGtYDCYHGPP9HrAkfc9tEVYjQQ3LLey",
  "key11": "23mjb79wUqNhH1Vf6mJgjJtcM32QuLDv4ymunN8P7ra85W9efU4Sru3LBe4RcN1xgB59hft6nfvdjmpeVQtCpMPB",
  "key12": "5K7RDKDD2BzVbNe6bn2eFMq7xBmiRxbZAfGfgfv68c7mPXPPSrCcbBSFciN6nhr3bSRszKQMRCdyWbHcWiNPvb6Y",
  "key13": "3p189MaG8Xj5FTnPfsm4uWfwrCKkxy4dJS3hvsyjjXMQkP8F8d3XWHhWTQ1dy9pCSQJfkFBCShPAhxkvyx8tsnCq",
  "key14": "3afqA6JumX1ekWJhRexMki1dnEwAJpPn6eMNFgRRCDe9f31MAbKaHwvVG72KAVKeokskT4Yvx66CbibVxYpkdfj8",
  "key15": "4SuMor5k5K2SDELogHXDNXQdBxTMvCn42fZqwWL6twfifsYztZqvbSb85BDT7UjEdRzyCBv3tcW4XTrFon2ELHRV",
  "key16": "3pyVXa7WTBhUCjZwUNCCN4oCLWm3RXKTM5uPS4d7C5i8QCZzaNZkcRzYCW855MtihCGRbwZMNEtrZAy1ymyD4A2q",
  "key17": "BbEaCGNdmQ68PCyBkMeJZ9UrjRJDXmSVXuvHzLYLyHELtwJw2eyMnQvryC4ye6FrWMKRHKFmbF4DEkyFcHuwKut",
  "key18": "4HcHA9uTLX55jgAyE1qspzuageCvXLZq5mDaj46C4dmDXrKrXtHWhMbkhGNT5UxewnuW4DwMawUiu3qWheUTGiPm",
  "key19": "2nBFqX8pYwA2nrLWwBSrKzsWBASuaS3RsLoG73S16ACmWtbhRbhWNrLVSbbFSzLqfBoeCSV43eyz32jqMTS2rh7y",
  "key20": "22wR56CKcT7KWYqPWs51FVSWEn4sM7fET8WqCcYvwGGMjiy8FokQEEvDyCmnfUR5Q2ysPY7b3N6HFYKcahW9a97K",
  "key21": "BUzb2qTYAvgJS9hKUpKnXxQZqV1HoJivdswZjmGSnkXXyLT9HTXiaY6cU7sLHKuoPLtoCRcdVyRz7m9s7yu5zvJ",
  "key22": "1vfiK2FhaQguRVo1xbaKKepCUgGMVhPB2EUhRJVQYhu3kPiAoRRWbz2x6JKTcemBzBYxijNL2aSg8bk6oiLUydK",
  "key23": "5ctxn1d1A9gEcNpzLgXxJ9x723Cu8MzYAseQU4bBCpDvtBadjk5eeZniNBEqduiibJvE62za72cDHbUEWCLcbkTw",
  "key24": "5fJqKvMfPDvWbG4s9V8mQ8An5WfWv1i9p75V6cKkLcgLVwTwvsvpcMtpZuvusW8SsS74YmbMfsJmwMwhn62BK281",
  "key25": "4nvjw1mZeCEfSiCsgQk1Au3TxGev4Rpfp4Lw8XZTSDgowNpiZQ9CXH2xMcUF99Tbr1cyjDPWUzCsmycMhXGX2VYg",
  "key26": "4pQmYPFtjPiUuQpZKg2bqKHBYA1USxyYVWZV5Rq7fMgZrx6yTjdmgYy83Dmhh3WJoCYD31y3Ypgyyu4UmsLrzHCN",
  "key27": "4Gj4N6jgGPUhtA4FSusn7ay6nwPyQdgha1hhgihGVZJPZW9hsV4jU13ghBdFWXZ5XyGRpjE3ppx8sLm891R6N2eU",
  "key28": "3cSzz89Su9D1fzCcHvXePJTkmsSForKvEccCuwAAsYz5DmFyVJNiPwhswNacko8hdKbPT2zav5q5o2jEPsy1Zx6K",
  "key29": "ACPi6ox8LkZ8bzE9QYWogs9gHyHtdEJsx5TsVvEkB63vcVufwnj7zuTfBgwdyot7G2N9xj5RAySYfZ4bZzmCeQL",
  "key30": "TD7WE6k14UpkmXUJLfGKigUFmERdmVigR2Qt2n82yPuworMuZ7bHBnnzAFd4aXZ6pannAeHZNqzg3zKcJZbg9Vo",
  "key31": "2pWKoNcurwNuie8PXNqDiAbpYdHWD89otn9cATSo1ypyPKoQDZTWFEQ1JpXojPyCCcBugCd6HMQS1isprZ5bY7ur",
  "key32": "4b4LjCQBUkYq6qvkq4j8g6WLscht7LUr5Lbq1VSYcCDXYmcEnEfFLtmiNkHvhYqhk2E91KdsN6QDUvaAPZZjF48q",
  "key33": "4xTdj8NsKYSLvZmFsGCwbdU3FqUwBoaqTUXommmdeRuhpybKkZ9NRxD3zDqbEN2CXVi75HuaPbv1dMzQ6DKubhsV",
  "key34": "4jfJpzZ7ikFWbpNbQ86mbLE1wuX5m1CyF3P9tXgaEYohYpcdHuCBmXRdYvBc1n7FC3ZgXjM3TKBprJcD3DMXRb5n",
  "key35": "4i4LJ2b752rnkF7QNDBP7CVG819GZHcLT4jF8vZubMRAVvUaC1JTaEcS1M5LtHsXZpmijL99oqhCUhtwve5AC938",
  "key36": "55SUoqacT2Y76WEgRnbeSUJcZHFkm8KyjFf8iekKw5VcHUxmXPW895Aj8PVPRSyUbJPZxfCkaFC13AqDNwt4UHUU"
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
