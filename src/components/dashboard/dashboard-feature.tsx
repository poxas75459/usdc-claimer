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
    "4pV97dLF6KQGza7tUR4qR9W5CzkDN173to4zUrySJhGLwJPKJAEUucTNfLPzn3L7JAasp54aXHA8Sv885wcqEKyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeGB6Lz4JTmhWR6LmskN6jqfCTQJj1vyLsfcFiN2Et78aNYasNrMdh8bQrjWedo2r4y1Py33gEZ9sKoxfUxn5Lj",
  "key1": "yjbp1qdrHxcizCUon9XQqouvmz8TDRQkixugGo6TEtmSxKCpMTsLWUmLnfo5wJx5QVhjcK4VfHuKxMKCLtowxxV",
  "key2": "2kVFAxsYTkoK8RmFcvCzXma34GuvrWbxKr1vfRTLmoQcqMBWWksu4z6q4aSWYMuwejukKxMKXeYbmkURsofUkBH6",
  "key3": "5WrNryXJFf87xNx7DdMfU6yEAoaVxSQkosq4MEXqLrUXkAYwXqA9vuPFsCDrDUViUtjmbLviX1tQMQL4nP9LfCuF",
  "key4": "4vMxQrvDh7TThEKtGV2hXAdAWALiN861DrHA9KiWL165BCxMbWmBfguNejTh722LngrQhk1fe2cyshnrwge2eg6q",
  "key5": "4r6pVpbudvv1BPEai9pLGmuYhJTX8uxpH9YNpJP2ATx5EPDEMqx9QMsbLaQQjCTF1fsGDVgQ9CoKpoyssDCftnHK",
  "key6": "QEQuL4tbTViafaxgio2QKmP6YcXfYXeb1L28VYrbNS6kpmWQoejYVrkzdrt3Nj8p6vocX3XhHLJsrgPuJ6C6vdK",
  "key7": "jSD4683VYAdBv2HTeSYuBLy4qr7FGKDzwiyE4piKAgZynmsS7vcWiFUGW7VikheQrCuV9pGAnHo7PsxxG1KkZpC",
  "key8": "4z1LxzZwaRnY89PCE4SKVG4XmLtwgifjk7WwVbqdhVWpBuRv2GrxhTjZYLvBHseuTN8eetjZMZ2yfG2mJc1JTrUN",
  "key9": "52KQM29tbTi7Ak7Sd3ABzgo53WHiszr23fRop3VKgeZDr74azM5FzFcH5qrZinUQ7orWQhMrraLbFyJK2pBiAZJv",
  "key10": "4G4E32KcaSXPaiCeCgJb5CnY1dJ1TEGfriBQHLPPEDr1825jkrUzhsatEnefVrkVtvgCv1Qab8ye47nsX57cE8Xu",
  "key11": "4W7PvbWedXZgurkeggVqasrNoLe4GBVkS77q43BgPsXFBzZ5whMQnUd8XY4dDdeE1QadUrTYbP1pXkUebW5c3QhV",
  "key12": "5mJaqgXwyqh1WTTYvcf2fKj5jRaSHEhCq72jM1ZDBdUUH1vTWd97a4JsxUszU9hkMKWfaHYj1Gas4MEbpinVYPc2",
  "key13": "4XBWp5xBVia7hBXs1UWLwQqPs6k1appQs6dDLQu99aSaZLnh4wkZvscsJurAPBPmaw7LDjhNt4haEY7c5aKswnKZ",
  "key14": "4gdNfD6w9F2pF1dxPSbtVtkAt2NvxSqZoJkjJuW9V9JUotbgFD1imqDPmK29ZwjBrqKeGYNouxDSAC73SS4KhWfZ",
  "key15": "WA7q5PRPDSzQVYPcqtTxgGdf1WKVY8ZQ9gp7pekG42VqUU1MuXMtLyootDg6g3se6dFfR7LVzMgL4fvMKPCeLGf",
  "key16": "PzUuDYjnS7R8STYwckANp694p7A1w2wrAyTvApeTphAku3qGqziT24fQ6J7qg5iowCiED4spj17jziHsj59XtC2",
  "key17": "41khX5BsFrW12vpbB1pCZ5EfSzpLoPKjWSZWapoUdHQzF6KJY1wtRpWuX2C9RVsLD8FwUKshGJsaNsetXbaZD3dd",
  "key18": "R4JStEFvviH1i4ZgLNwwrRbefDVCCp6VmnKV4kJVnKkw7fJeWfpbd4DiP24xV4W7bWzVg4hD3kdnwhvJotP3RzE",
  "key19": "35QNv1RnYianBDMeU8bahmda5XWbdVo1sPW9HXycpmBirtyo5m7uwwkzSHvEm7NVonscmVYmKB2tjNiaxUimtBqq",
  "key20": "2JbPudW5zi6JgXtJEsRWup1vnEWoNE7Qq79AidDtbdmCtofqTkBpcE9JF1p7grLUWn83E77xRBfH1ccZ4C8xm3E7",
  "key21": "4H7J5oWb58meypuaxTKxYkA7cDVbtUaTS8D1hcPr7kP2RdmdNmJ3Xbw8CK99Xcs7L9UbWXcoqPUirJufGoPt7qSJ",
  "key22": "4vfkgkGZER91qwV6jvkANdcuVR54JgJXmc9Phe81sSmCnKvF91JxFAkrPno4fh6NEdbSv7fZYvGzvEwocCUCi797",
  "key23": "5eVHqGBhL8rsHwzzuhXETK4CQkDykLGsg4Tbr4LEvQNqd8cC2wXd9f7pnU2HFo6iDsEgNbcctZTJPv2KAwjNZh7z",
  "key24": "4B9avgFetMj46UMcvDMwQAmHC7oPLx1dckU8Ss7rnFPYgvxxvijuAqnXdD32tytsJKDY3htV6KK1JAw34otVWwLP",
  "key25": "ZhPUohai2Z7xefsegBseBsqTYjFCTLm4VnrPwicVd1gFfk9Gi1gU15humLrocFfdpz2xuEpvq7ajw9BSLwwvqUR",
  "key26": "dw8mUTTwt5qNdzQ8uBLXjogFUNno33Y6ctoNdRrCq8gG27Xuk1EK3KCDWpmpDykm7yUC54ExVyhMyXGbac8MXCH",
  "key27": "3woxVy8ABvtaxhps37dm5VuRm8L3UUFJrsChjYa42so4WT8PgQdJgbZCpiZs5RMVJvYc2ET5QDat3WDcjbDHQWKK",
  "key28": "5iAGkTMasNiELBcUgS6gZUn5DFqAD5pyoDEn5nwiKrcjRXmGtVCLMxqhUNwdHhf64yTn5QGYST7bDQq7wLgkRcpm",
  "key29": "4nuUH7oFPZ9dUnXP5Y2vf3HogQCSUzkQ7yqowmz5RsDBLzj4SNQdfEt4j16qgWhifzkj2BzemCZBDh8dSaoc1skK"
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
