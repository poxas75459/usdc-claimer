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
    "3HJazWqVjzNGMMkw7D4kgLsnsX4ZaU72kNeFmiYzvKKX6iFSEJXra6NW56Zm2aX4h3wpNiYsKkCv3rm7id7zkZYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RPeu5mzJ8K9s3gu6NZgXWDKJuxCGixmtB7fwtmD5aVJoQEq2eEyu1TTSSsCqQXDwAApUaCJVNLgLjcUGH2TM5Ei",
  "key1": "4r2Kba9rwmppGXShrkexUEZqBPfWUo1x6FT8CAVHWBJP9gVsAeqFc53zrZWdHEQhCrrgaexkewGzz42eFnHcQTxZ",
  "key2": "3YPkerR6LcbrsYJNcSDCWYZRPhx29Q7DzgPVvS7DAcBHQR31KuwdQyNWXx19R9ebMeT5jm7mkJdv45AQzyr1qvFX",
  "key3": "5Fu4KNLutXu3SwcxqtzVDrJaSANwaQZHXEu1kYZucJ49V881Mda5djqJcB7cGbEw5ujNZjeCPUv7J1LJbAuSXnYK",
  "key4": "5nD5AcUZtE7XJoREkAt2yxtWmw1oKF2AHT5apDwk9rwsmKM7Fq8PuzfwHeUFbh8dN3yToD2S9LPSu2zXn3F1v7i",
  "key5": "51KU5CzaCpsxozBnHZ7tkTvoztW3tb1kp1RMYZ2KYwBfvvoX61p3PCuLAFN4TfSkpMneMwYTtPyW61FEZR4wuBHv",
  "key6": "2cg5LS6sqyV8g31oUG5wJt1oXLxvDu4mfqL67UV2j2Qv62mQPtRK5Cnug4U5bFD2HPkuAAspbkVrXU3iDieJkEU",
  "key7": "2iwmN5zJQxQPPUSQfLGQBtX5T4x2ZK8FJ8D2kPgLsnddQzrYEVStX7a2CtQF6oB1qteTUoMWXHdaQvuAKJspVfZR",
  "key8": "2nFVuHaL58GKrcHurozYBJZrBtsRWLe9d9fiiXo3bngq21WC5yvwaYsx64qM1XCxPAVkmj9eYeGxatgaiWEh6eLC",
  "key9": "34zBak4wSbhsWt6L8Zhz3PaYBPr7teCW4CdnjZ62FLPiuHLxywFx2V4Dkpz9YxWQE2qyntu7EBxSf5i21N3Jh13H",
  "key10": "E2cqs6ZByARXuvNDgrfbFPSkKFQqjyNM9D7DozESS3yRXm4keCrEZe9nQpvoBLXNtVUzNEw9mCjyySC4X4B2cm2",
  "key11": "2ASSZJ6WQKFdssBNZoW1aN9RV56YtPQMrGt6Gg6Vm4ZhXLYhAzgh2qivrLFVs9NiwkqhffvRFjhDUGqW92NeV3AC",
  "key12": "4ASugvzkXWzziQKLWx9MboQ18TxZZiSdmRTX1aGBYmh5y7PPcaQRj8paBaC9XTchJ5C4DbfjedTuzYpwW2XwwiiD",
  "key13": "2khUgDfwjSiPzhNSroz7m9Xgec7CgMDzMEvDLpFo2r9FN1X3jWwpaGYR7BZS7HNSuPpsYPb7ScF27pciFBFExhgD",
  "key14": "4PHkur6xR9taUWh92MvCD2ZjtRcTCT8wuJoT1pcVVLTMn9wcGrKvuw1yeJiCKtL2EX5891ToAwDQGrPMnEQ2TGUm",
  "key15": "2ibDyagNHTvhvQANZCz9C525jDT3Sxw4oqNZtjBkbGymq8rwr7GX6Yu72JBFr5fnAojpsgFVLckhXHkdWkAXpPx3",
  "key16": "5iosa1swvN9gaftdh5wUSnbkbYEuyex4ihDYwwdoQnE66xwqNrUTTGXseG9Nc4d7hynHX749Jbft4BiYCSATpTrv",
  "key17": "AY7Ark4bmAyvNrtWfGfNbJxnszV5jMhttK2uHhKjjVRo4434MnvuDPnsikqhNRD4SdwmfurW37RpdpYT6Jmn68b",
  "key18": "5EDQ6qDRvJUTzRRmcHgk5an1a2UTBdLfp5bSkhJSusbT6hFtrt59kp1C4X1zPadFGqZyYi6WtUF8btUM6WwMX1EJ",
  "key19": "3R2cs75oA7KJwMHXf5LQza7k5A4e7mpUEaGxC83ZmN3S26kchnfAQRt2TaN2QAhW4KrG6kk5HHiUUiQX4o5Vba9a",
  "key20": "F7gNUTd9oGqGAS9XuokTjnrttnq6QFshL3ZBeNmiLHdR6MMH8RN8WgSKbnKx6bcDSujW8QxweCY7CSF5x7dVTs1",
  "key21": "CDMPekjQjYgiZbq7X5tw6BBuh6A25R3eoHFWv2jhjXW5151h5tj3BjvmWyxbriz4tHSB8aBzUByf5JBEe4i7HC6",
  "key22": "45oFQv7G7GpjZNRZTavvmba7sHugx8KCaWw9E47qnzyyS5KrPHwDYaP3ndUwDMtZb7MTUyD5QQHXE12rbsu6imw9",
  "key23": "2WNKCh5KEEKixNsCLwUmUJdiuKNBrP8upDyFWk4ZRazE4wBpzh4ULWRCUJ8eHe76rz6eoArKhyR8c7x2P2FonMcz",
  "key24": "3scoYActsSYKNHBHzo487V2xR6fHwMYhgMzsNeR5xWXkr1cUT76kwKNvEfc5MroSgy6k5z1KR19Awz7wat1Gfnue",
  "key25": "61fRMF5KxjVf92QEM8CwJkdjdJydXBbSH3z82aTGVxesvepat8BH4CadbjqHeGdprNaWEALVDuq28rACzjxmEBP7",
  "key26": "4CZ3ksJVaBwLygboJ6tjvdHpvUr5Yj8bosvL5jLGLkyJatYEW3ymr4PC2HyFYgUh6TXWY5ApNyue69WpHaYP3cKn",
  "key27": "2FxhCFRCghDTnit97P7ZRQYRqnnxJz7bBQbkQdkS6gvSMEFSnbhB1RbovqAUZUF99eX9TtCpD8Mh9AuJPr4UuNxa",
  "key28": "5oqq85YnYjARtArGbZco2uc6aiFNijWh5FkPCs81Jt3h2xVbE2VmeE1UaRRxPBWmyfkrT52Ca9wjntkmxRUBgine",
  "key29": "5fGjwhCokrPoYqj4riPn2EdWG5JPwXMX86vf3QHtBGj8kVqZ4QNtANaB2yY8RWyqv3zx8iUep6YPLxhWazBoTZAx",
  "key30": "4h9YcNeMJzGg9TGHxfeDmWFeimM2wwCaxpWGbk9VNCbTDEgTyqkmmFuxazmEc5gxnSqVpsnTyXC8fbGWeUZN7rEi",
  "key31": "2gh4rEqLxP2j8KNLyYW2tARv3YwnAaapARAqF7SURyzFzq3FJEJWgXaUBLXbvYGTtpKLHuBHDFxUgMPDY5DQ5Yvw",
  "key32": "22uUg7nRgk8hoyK3arab63LpiuvBGddhamAWRweZrha85YY6JM3ihb1tA3LghxtYNym63BZ5m7DGnx8ZUDqRBY3n",
  "key33": "4Y5aMz73bgHPLwMpVZH2szb8bfJw18633Tnq5fF5YwoY3K9zS9NWiANU241ZPMckzNJNTYyQMnSGZnAdyJd9h56o",
  "key34": "33fFGiTkxf5Qo5DN3Mu6v11K7niK3WBbWYhr9hxySqVfg4Cje6SPfmrDChbC4NwWAYDSqoyFCh32SxauLjrqbg5E",
  "key35": "5o11GSNiw5pYJn1iqyTcmNeScXy7sMsDtyn1BBkpYJ7CbdxNUKx8F9npFPCHfa2x5TM4tcmc8heQ8KPH1Jkkqig5",
  "key36": "4kBLLYPSjzBuzWizNeQKkE6EXokFAZNWKe5ya31eQBSg6iGWD75JW84hDkbRbPaydChpTGjiJty1s4eekkei29ux"
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
