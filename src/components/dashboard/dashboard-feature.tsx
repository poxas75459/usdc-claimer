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
    "hiebK2wzRHvWYym8MqxNQSPgiduBqDJRDJJ188XAwXkoYyUxeV49tRj8vYGaWEio8f9ZRhJiqJ6oNKqg2nrcvEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iQdEbT1FGWXEgSqB7ReDvqrqXitrGaNqCQeD9QwnvZUnmm3CZezqGSjHKTw1stJfnmMCQc9zezV96GHkcvteL8",
  "key1": "6bCeR2sjqoVgQX6rdsAPr4oyUeoxrQBMKjAqMPh3PmVkmmyefivR6qEGT3KLNhZAexosZdSFSY3YfcmEVDpmSSM",
  "key2": "3S9iQQuitX1zB2crmYg1PzAnr7JsFbM8s5DEHVvAtexZspiYipDfTFeSWNPgbNPMh8eP6coqeH935CuXAZ8cxwLX",
  "key3": "5vLoqmJhuwvyHKcP92eweqvQpr3dgWpQv5Zgqdnna58r4xgUzMdoSa9oKKQfZWdayYke7s8zepQYyQgkd7PPmr6g",
  "key4": "QvrGGLdHvyz58ozZskHY1TXdv4kECrQHRa6i5zTATcsCpjuDzxkpCWhB1Xsw7Q9aeLCWkXc3SvsLLye3KRmru5j",
  "key5": "2ERu8peqDztACHLMq5J31yxcW271CxZRnwJjQa4SUgjqiw6jMqqN2RX3MR5iyEumAzJ8jWU9imrpJ9GcsAbZKjTN",
  "key6": "2F2byqztPkUYonDBcwScHGeqCENZn2TyYTWMcM5eeMLXRfNQR8QqKVNLQVP7QCgZTpDLTAiJuWCFU6qae9MtsL38",
  "key7": "65KzejyRq2FRosgq1F1fhaiRUWaxu8icoZ5q8Po9z3q1ovV5SzehMG2eXaFqb16BXpzUWvAW3DG12SsV5NnQLPHd",
  "key8": "3RtHJgHkG1cM5rLcvtR1K95MiTdghWcAvV2cTa6GtKVSiSr6GdbHUFkG3FAtj8A7NSMvC2dCqwNWShzWuJmy47D2",
  "key9": "3hEpASzPe4FiG6xgd74vE5QXSypuKkiTKk6FE3oDxnRR6wdKafChvtaCgtnwMsu2vXJK7UY1WCLiW6cLNWefRj5b",
  "key10": "66k7qUnRXXPhtH69s5vGC8h1imfame2AWVq93eTeehWui3xYQqxrosqaZveNGbQzaiwsxpdBNnA83Utai7si6ahg",
  "key11": "4a22ehU9s8XfLJpx89uKmTtaanXBqws4s8jvcW6Rz994bPoHiUGD9ZXUY4AFNr2FdDhiPzjVxXTR7kY9Fs2Ho8TL",
  "key12": "348UvvULCvY5MDYxbd17H2jbD8RifRyqKSR9DGNG28WkQvuwJQyjZHD6bW8eTjY4DEyCDAFxiVLy4o8Rc98EDDPM",
  "key13": "2vsYCj3xzcRbP26HGQu9NMvb28QXeRJp4ZG8PY3EaGSgLs5XSwGcwXomER2Yfvm625ZjjykQZzcUR7RjBwvDKu6",
  "key14": "5tVQiqy1zhzQwN8BM7eqFFEQsF6XwFKAcHbVVB3Sd7sYFpUmAwrGeR3RaN9RrzsW3XHqdpmkUNjxGq8kPwfoJ8F8",
  "key15": "4oTrKozingG86YBp3xZk3uNoZSszpcDpEfsz7gaZTGzK6F4KVX9YqKqWh7XVbfT2si54wmrJgv3sF77om2zffpsh",
  "key16": "4AJWkXzpyp3G4YLFeaxuM9thpXALmSZpTcDN4JheH67p3oJ4w93vJFYDvAbtdkqKokoQ9jzYQbaVfc4Z4MP2MNWn",
  "key17": "2N6AM98LBpsyTGRTvTJz1TQnygDnpWrcvicGaEsMTLKFXzTgWS2DgcNmN6efbtfUZbGprt3HRGCgtHJbYH5WBNTP",
  "key18": "2ACErB4zh8iCQaryNLSM8p8TfFJckg6Kw3vJCN9BvWQXSS68gQMVwepfH24J5y4UbG7gVrQqGH4Ct5v66jGudS6k",
  "key19": "5Vwsgk9WsLveGr9oZjgs9NDdfrA9S98qgP81NPpo8aoNNAcSzczsV9robbzsCyHsZcwHFhPx1VGg2xo4Qq8tkJBu",
  "key20": "5vPpTc5X8YTY6zLmMQTpS2ZEGo9UgfLi7tCKAGp97o4wKtWYqAXFW4arQkNjrdTJaqkcWsB8aSt5uZBMRsTL9kZi",
  "key21": "KzJpeeUfHbgxtFSxo4LigfNPijDHZHZto2L6wn4LYHW2pgLNXovMaj1Z1csx4jGBgieUCJ7B1nwpHCUbo6Xv5tk",
  "key22": "2NMyUyahg2LDb7TBYvhGexgkekKwG3KLX3HWNWfjAAh41J8MNRPhoNPorXdbuVeWpuo1tSEyzfNNf8fnwY1M2jKi",
  "key23": "4Am1xczzxtLDM2hzScGQJqF9y9fDtk8H5gxVjRzTVEf1Gfxgj9t1H3X4fa2BDihRDkBiNxa92d9ws5WSAs47SKzH",
  "key24": "RCcSEn6HxHCWewpCx1qnAU4Wtbh83ngWuxMKP1Qzyi3DpNSwdiHnA3XDYBd8ZSCbLpNXHoVirrvhziR35CfmHZR",
  "key25": "4ibGzjVgtUAknvAA6hGenEBqPWx9DFaXnmjAu8ME9jb6av92Dc9MaToLka59Ws1dptrftDtv83VQHSn8WQNXroKj",
  "key26": "3JvQw5EdWVpFBHfGXNRM9aUTTc3QjA6dj1FvP3p1DjEunniVUhh8Mhij4fTNJg6Gy8uwp8PuqFws7H9xf3Ex12XK",
  "key27": "5zTCTCMwKnykkPxCy4Qry1251KwM2PxAXmXmhHcASHvSnkq5jDsm3FRbKtDRCHdtEDM2FLf4CjnysHihty9nYJWP",
  "key28": "5XaT7Ay1n5vyn7NhAhKqPvrpVch3p5U36qruGCfAVM1tKw1yfufWxFoBCPWamnamfkiuDPccxQVS3nQ58Wx7WSiA",
  "key29": "4hb8RiuhXqZ6H2FbCmGLJdxX8wgh94BBsrLkaVAKpqic7Phrev2FkVeNLwLtGccrzEMT8hkedg7wCLzH4sskSfkv",
  "key30": "5do5sjEmgJU2DCRtZJKNvayRLC1sB35cU5USxPZHknS35De9Zq6RTKv1J1LhQ2zRiZEW3K9LLt4qiNs1zmD7Nvus",
  "key31": "488traQHbtuxWwNxpibVc3ZQ2EVqkzcUgRhsxtVim3gpnx4xDQxH2JWwoxWc2DFxGpnAFnrVeWhJV7ZKet3RB1nH",
  "key32": "5mnVgwxKYsSvdGXsVUL2AofWbFgzTQuEaz2BZaaJUMfWpKYm2agaXbBcFetnnhKqabJhzjTRZde9zZiKvH2UoB61",
  "key33": "HEuSNzq8QfvbQnrdtMAjQJnVfPLEiDspmarvcma5JMegLkGAsx3CFRiyiPDe6Y4CXWNbkpJQYW3HawN9BVMDkP1",
  "key34": "59KR3nQmmLVQA1j12Em7mwUtY1aqdRD4pGgeDE2yBb4PmmEcWY9t6ZbhKNKGzJX5GKWmS3kZ6ii83rVxDiny2Cif",
  "key35": "4xaXtTXH5thSJkmGNKMb5dZCtVYzZHmHnB9JsAfco7JAdQg5zocZa4iouZsgCCM2G3C2Q3JD3pKBrCWAHDxCnDLu",
  "key36": "3ybT9nMzLDyZQwLo6XFyeknPiPFQbqXskPSoSr6rju7RMLHr91HZguZxLyan3VX8bQ9mZ9VP9W8iRGawWGowrdXi",
  "key37": "4yNNy9MX6tsFfdQyuThUnBpjAxYKCaX9zXdEAunyaqbGptarq7m5jD3VrsAkHqwMJ7PjP9XbQjoVoRyZkqZ9W7x9",
  "key38": "ycRUN39ALpSDbRgPJHBkGreDeEBmLPHpYR7Ebkh7xHMnyztjtJY8tQvpu3nHzM59sZty59RsBb1jh646ygTEUZb",
  "key39": "2uD6ExTNunhzZWzNs1dQMA256gWgm4qTcFQYGToQzGLEbTzABnRHTRXfWLGEmxAoCTSDcKW1DubG7zRka2h7sVKM",
  "key40": "4JpYYctNee1rV91roXLVkKoowZEXujUxP8HBBc3dXriEc2srTmdxorhAjpXy3e86PfC9K4qE4kAQqb3G2kTXD4r5",
  "key41": "fro78ytGopWJ74Kw8hGDDsNB71xw7PMxrdF2i2sM9aQCTEEMBdkw72ZVeCSJVgE9QxueMTwgtqRwSQ3AmfzyjUk",
  "key42": "MXMA7urTUzyoiz29FZAMqcsx9jKeYqB63H2QHoSFS88zUHqs48a6QFPscyi1kZkk7ze3xRipweYxek7dRZEySsY",
  "key43": "EDQa4pTU3d5ts9td682RXai5bG9yYtxjxCgSac1VmnCPpGmBfduHvzq1XdJ4DwKcw14pfbdMGfSJaJeykkYsZJy"
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
