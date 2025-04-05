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
    "47msSAauSh3KznDGje1fC4z77xRmtwFeskZ4AU8rKNkVXbP8288JytUNCYkGtRLRbBrQRqciygURm9j1GmAPE1LB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3toees6QYQTjJmeHNCU4u3RWAL2xoC2eUwHDgNMa39SdJWdBKpKxnmodSxZS3xw7Ak9sTZ93T2YupJLkpm828jP4",
  "key1": "2gjuyZCdyqGdzQ7kVySB4BSo4EJvCEPFQXLhfh671etjtNmHJqzmjVJ4cuecQMbDDkVJ4rqQkTYGuwmEgZbgKSyV",
  "key2": "2GZpLNSEmT4PeNQyLJ8NXhgP2oYiu9vb9W15FnPWLN2BwLu3x5QHpiEpioTzS3Kx9a2YmTAXbvSWffVqG4tcevyu",
  "key3": "24irzjdKZAVaLY14P5UEwX5teyE51HmqK2pSQzdG5fj6iNAQSW5eEdPdkQX8jMsvJ4zKootz2cF2zqWgHaGoLLS9",
  "key4": "2LfZj4FbRMe2HpAdXi1X7u1DG898wFx6FMYeUkGHjJVi1Q24u7DfG76W9tS6nMuSmJqV6os6qcZ2sMKCjD3naimR",
  "key5": "5GgsT2e83anY5hhi9rYeEJDFbH2CWwae14EJHQKbJmP6eTQHUpoTBZfHw6QVhgE5ubt5CaqYnEJFAJqNum7evJm",
  "key6": "53EmK7mKE1ntefQheAdxGijoC6Zft3tWRpgWS49pxRNGQs4N9vfv9r31s3Jin6ZzRFuKNjprnY5txK2LZyZEGzZZ",
  "key7": "5XSEueBNXjJKgrTFcuuGQFS1RfnQttdKPSfVFt1GxC4tPJMBxJSERC2iVVg9vBGgaBCRaHsZpon5uEHfhaSPsQvk",
  "key8": "4K3YdokAXHGnujGVvXpg1YnYm9KfXtMPYdjUJSD2AL221HoxAFEymJhf9HMKyTFuQ4jmaDA8Gyg3cU6RCDyJuFr4",
  "key9": "3vMvzv75hTX5byddJsTNmjGuxPMhU99zufgRHkEWUbJZRwy6aaTo1EbkshuxahwKYXKr3quAUnPwjJb2HaoXKEot",
  "key10": "2rknsxebUp6f9YHDXyjYkevTjH6iuzJtWn9UcCWetJvwwFTSMW1yRkkfDsfvnJ7qDXUp2iRerKPoMi61HfVkQvjQ",
  "key11": "2mSDNcabgurPE7FJPNPBtfGkyj13hRsjHYoXoKaAPQr6TZCGRGCt1fW63QUwsrVnusD5mJ1xWReHfmkVwLGeLAAL",
  "key12": "4tqZ41yWCgF9eFjpgyxMs2NyTG6SSbw6bgyW7T1VppePRzzSPHBwZj3MYpqFgQw3JbW4yzJcDfpivgQyBMjbHWHi",
  "key13": "4AzSh4XJPUzFLcSKcTVjrpy2ubZEnNFaKbuHKRsECXxZmz74UHB4Puf8XwRTUgnxmgEGpja3xPqkKi6gVm32VGV8",
  "key14": "e4TopWJcThfHGDXvF5vRAsHnJ8mQUUYSn4ubGVyMYikV3RCMbog5DttxxvdfdYU9fw2eXcfwYqBrPpBBVH9fJD6",
  "key15": "5RS2kvGSMGzzQYSUdBDE3mkci7RRrcE7PBJiLZ5VKNnUwiEaoRu1N3km7dX6JeCfkTG5ci4nhKgmWRUQNJPfWksy",
  "key16": "feNH9Pv569VJb9mU79HqwuCY6iFzKAKacgM2CPwPCsfpDxGzUeyE6prcDNVGvcZxTNPUteAhfoezPKQXkJ4crAT",
  "key17": "4gWgmCKQQVhjVCcjhtzbku2bdhMiRVco4JMXjrxmcK8JRxL2sy4DTccf8AwWu66qNe1ZqKWNPyGXzyMswMxCZ3Cq",
  "key18": "4Ntcwszzk7Tzo4j3oUGqE1N77DDpmNfejqWcyh2XgGznxmewzKtuvVizmEMDC9k4LCyfCeZm1cBJY1b5SuMmDcG",
  "key19": "4ytbF2LMhE7VeBVy5hr5yTFn2JUjPka1W1bv3S41HXLsx6jSKFntFFf54mYgUPTvV3ZWgvN6i8V9N5UYg63yKhsT",
  "key20": "4b78Qr2WJhHvQXGgXKyWSbfhuCft4w4TNKkrjovtct4eCiENWWfRPUMfdFKjrhRMFf8hNb2MXDgsdsFiXsGb6tNa",
  "key21": "5RJU8YsAdGhXo195ncEukzQ9QSpdSNUZcGTRGi7uzb4PgwK5hHdfXUazzCAJEJezgBwG6m7sFX8AiBTCCR9LH7hN",
  "key22": "3HppduPErDoecs2hmJ3m3ybHYaJ7KYdCnL2ya9hQ5UpE65sy9RVKPah9hTcVUD3aeYXRG5YjbD1QjXoVeiQKka1G",
  "key23": "2KXE7EmuepgD9D5Uqmh5e4xsbeX9FXncZ9oN6RcBr4ggwC867MRS1myNuSpPSxdZmQqseBv46X19jjx3FDfXaCJi",
  "key24": "hsd5BeVwJrMmZE1YPBaWMmGbfzHDBQ8bve64gWuQmqiGLUwaV9HLqDLtNC3NQE5sjoy7yWDYDMDzKJreaCUsHHa",
  "key25": "behkQqmTnoKon76Dueg5uARDVqCq4gXh2DVBNvubYe3MUebvm86uBpDCMcG32ie8t5PjzHp6WcQxNegn7NgQVzc",
  "key26": "4JCv1ogkc3tyneiygXLiMvHC6UyYviFGg5XkH7rEYnckiAjKf7J1c9bTFrkECJ3uPZYim5bprWtBcbnwrBzu26p1",
  "key27": "2URbkdAyv1U7Tyg6jCtNFhmUijBMgKchD3goj5omVFBB3eq1KrNonyfyu3M4AmVLoMsu4uY1WYocobTB4q43QaJD",
  "key28": "BUeUZnZZMn6kK6PRt2DhEM11kMS3rXUtYL1aQyyKU36CxAvKi21z5zXMtSHE3ETARCJmc4HBfjgmAsLAu3gpffm",
  "key29": "4mFREL6DuyaVH9NKTK4ZrUuxGuVSy97KumgV3fzm2pvByxJhz17xNzTn5smptESnTWx4ttuf9rhmDPDfY86hsVyC",
  "key30": "LJj8R8S9hWj1HFEg5hfMtpKHszGaghfzfBEwbGpfATNLXHNuH1v2oFLM59ppkvDvVyabZuyNEkaPLMXYN96xJSz",
  "key31": "SLWqqSr7t7RgZ5hLco5eubXS1Lu1H4iUpnzHpMkNZYavQWHwj9HrDSgaY7kk7mv4YPpXnQtVppVnqgTGS9gnepK",
  "key32": "3d7TBDkJHHq7wey4H6kN5Sd5ryiizKJks8cwA2PnqyubLLZyE1tFPyH5UPP2hThyepNkZN8pmKXHz9P8t5aMLhr2",
  "key33": "3c1WFiqWHHvnatxDKdkuHnDHr1ujXg2yN6Enm4RfVAttihCadJJeGDZoZ1q4zT2CgudHzd8yktF89nWPmUV4A2Wt",
  "key34": "KnbGFmyzz8PMXYzjhVCHfsxRKp6eKxGVkHd4zUHVnyLTZvW4mBFccx5hwFmyYCBBjC9ua9uJpfX1x1VQNX6rsuc",
  "key35": "4SXB8GnAa7cmm6pEgZ3QiHNvtHFNxKuiyKLVoUWZPgLsm7WrYJH93YL78y4Fm6eDrJrs7w8C5aLVzCJ3NgkujZQV",
  "key36": "AenHHWDfKopUSrNJGm72EpvNBYaBF158LkYTtUfFLY2XrNzndqCuJojEma4H6JqjsosnS8eA5XLBBkfSzCDXZP4",
  "key37": "2QNFJ5A6JRsRWtTFxqQczLDAeiMxfT3jeK8vHd8UtjvpPFDLTWFkjaoJ2VhSiCdDs4Bs4iFMdSDqnbwCV2huhos6"
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
