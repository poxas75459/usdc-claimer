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
    "3YyjtCQEDMSBkgE1A86WFHMcXErUbkVJtpFRJhtCDbdECNXXa7g9g1u2xYEcYfGkoiRsVKHvLWz6kEmUMyscgTDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fD78dXg4EYtswrZy5nK4esv6UAmG2GAHvbJzwU2JJWsWyDF4fFy5bLHroszRae2SBUePQTbEr2PmB6HaLY63XCa",
  "key1": "3yhfLzXVFt5jsAm3WZNbghpLtejpnecutAemmSkow7u1g2fD8QVnkntunAA9ZgQLYcU51624MQPtuPp3MvSXiS2r",
  "key2": "5q4vA6PgU4TwBFoKdJdzDGgx1FRdUTkfdPwHofhFYocDsfxaxgv1zroGfC6N8yMVNGBuqA1vdiqycEoJrE5Emgf3",
  "key3": "6a2MkbKuKtup6WMfczt8uCT8tggZxMyBEWzipg1UVoEBRUf4G3zjRSdVwfx4o8Yyemu7pZAcLaZnw32Htx78EPK",
  "key4": "4L2QoURTMz5x7xS1mJsuu98kQMBZov3WCAESGErRLmuXJR2rQXSd3NdJKn9M7Wcp76jsU7U3Ahht6wzn2ugQNSNS",
  "key5": "pD5V38TfQU5N9HSDFLY8fLctEsiRhZN4T7FKjrHXc1t4PbtkPzpQ2dtDtmFtoGKZi8vqPgH1mECMjzn5u8zc8dS",
  "key6": "45bnACHKJtwNrvfpUaj88a6ijeSxX8kozRSfmNge4rBeiAgRAWDwmQQ5hLrmMmBVBKhnB9xQaPp2Lfi7R1MjPuJ1",
  "key7": "3FyPAnBaWJbHafjgXGiHPL1ijhsJpzxyU176zVz95kXF5uijrykdJwyGekYmYuuvbnLxNHuyBDWTJsCW17kthCze",
  "key8": "4R6nsPDmya1yZLdfEVteEj2PwsMy3BPX4QCdfSnDRZVXkkp1oPqhyN6t9r8aezUqtkRKi9R51HoQDzh6UkAJ8Q6q",
  "key9": "5sYnSdURKuCTXG9jBAJoVPaGYRcEw279d4rfNgpPxbVJ7LykSWVmLBKcb6EmPNgfJ8y74Kqy6DYWkcjsdEXreWD8",
  "key10": "22j8pNvzacsRcPKd3iasJAJKDerKXmZrdhwbjV3wy5gSfmz6c4htriocQtWFQsj8LnqqSpeP9aXafrdeYPDHrH5i",
  "key11": "4H86tZfd2X3RUZ1VWQz5KCgoX1YNvUY9kmrrAuZCPEGiUdVbPv7TjcMVM5iyoWkxS6A9mStu2Rn5mQfMsD1Sfm6v",
  "key12": "RCDs7aLh1hu6ybq1CQEuFgqQcPVQMVhQA4eJB5vNPVqaEzhegtBV93duUh6snXjHEg8Wn317ZVuBnpvmMbTS28R",
  "key13": "67e97qeGRg6H4TJnmJo9UktRvzC3HiuCgoCk52xNASZSvU7d7qcekLoaXYvEGFqfva7XhT6bMMW7S11KRrX5cubB",
  "key14": "2L786cgz9MzHJZMvrX4gw1hbtu8Drmrgx2dxCvSKg7PGhWF4B5VDF6MFmXNVQU8w3apPsgdh8Y3dJKbwJ9aEGjAC",
  "key15": "4MRUYMroWhNftQhQS4ZNWP9epG7tQMV9tr2B6tMqhLVU2W6rjc3aadjfLnTKFzCzPQKbSJAmz1xPkjLBfuZh9KCr",
  "key16": "4LsUKrehTqzFskn4JRBKZHqv1x3qivXoUit5YMMyRCFAetyowsWkJTrhFbJghqSPHnFqZyN8vQj6j7PELHi2ZtEv",
  "key17": "5f8tyoYR1CWt8ub7HaNXCPiDJ3mHKw9wy3qvxf25kVcSqTrTeqEyo3LAae6QSy2SB82ytx3DVcdmM5jC6pqL2H29",
  "key18": "4rhkKcEib9z955W4b1gACqoPHkUBLKK7eBxoL6PGrTTwchqqweJrdPB6KQXWDUVe4WJm1YHAPhxhjxYh9NYnZjvR",
  "key19": "VBUKEFntKHfN49keHZe4rBCVA2iWUNjqQTY73qvFuRL6YTwdY1xA6GBCM39d7VV8UtGFyGGNf19JRoNSyPYDbCz",
  "key20": "oAyJmyuznipEahTD6ia4KThzHPsr1cp5yNfgzGHpMr3dBgmz1DB4nDCPhHkzchivyCWEKEmBiURtig6p28D6Rf5",
  "key21": "3uwUDDNsPS5TzpE9gWdFKmdex3L5BgzD5fisr8Z6WFGjQ9ScY4pZ2yymv6QqeLrJuSux5DFGEnNSVrQrykqzufog",
  "key22": "L1khP1AVG14pPKkcp5hF2sbnXshxGA5VhBWdZhPUU4WsayBokRK14Rxb8Uzo2kKb1PapayKU7B58Z7yL4FcK3R6",
  "key23": "4Kfp8im1iTDhbz9dmP3iME86U3ND13xU9MXeR7PtVQkyebNcTqDLW28PgQRnGDdL597ZV4NWiJUEEkkW9LMDvKzD",
  "key24": "2aKJkp5ZbZxD4sWnntjKUfiFYRWcCR2sgdFH2oip8MYJaWePacj54PdgrFYogHbKQsGZP7BzMWyoPxbUg4Hi4dDS",
  "key25": "273ZsVvWqbdGtKnmxKS3ZSUyv1dDk8PkUE9RhEaaCgnHhGzECzWTkDWQ3XH4YNvg9VJhH6Y8szq51ddnkUnk6CMt",
  "key26": "5DNzBeD9h3HwWU3vWcf7abaaLmWLZM413zZX8UaoLZH15XixHeQLD3v4qU396eXBiMTqCMVJXriubU1gJYRCV147",
  "key27": "3nGTgrKwUybuDfX4GNQwDdaGDsX4XnzaYTHaJTiqtPh2pZhQ1oNU5ioGdhSpUinoM73jVXWDueTGNQTeaS4M7AQs",
  "key28": "efnkdd99J9jb2L6c5HPjsEjrGYL6MzszDbVUqRJZmj4uC5FXdTbREBjRMjVLU2gAohnLCdfDTRd4d4ujBqWbUjn",
  "key29": "64Ua9xdMieR3jXApC9PTNTKUoKRCgRPzi7x8R4uR6ZZif1DVr9UJNgdyHPbBNSd2qhJg2rzyVPpKQDerkLmbD3MH",
  "key30": "5BYKbRyhhdW8R72XWJoEjfvEpTEjUUWPjCg3tYnNUaMNL9RSYZGaDBUnzJ9MXB9AR6CMxC8x419MgrmndFwhfLc1",
  "key31": "4Nz4hbSypMKCfocZ1F1w72A1najJp9R6sXrXtVPSnDWyj6NoiWcAatJsKRwWzdEaMD5dxmt3zYRbeW1jAJAsg7kY"
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
