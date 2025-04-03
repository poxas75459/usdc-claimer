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
    "4rmEuZfspWzaBT6VLjSxhDNQsfb2mRLhWLP7cmJb3wuFD2awiDU3nE8oTHTPMh75RqGupaDpx9KNwQPQkzzCXCEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rkmb1rhSYrByCzvRFXzy9YUmHWjQd47swrWPGZoufYhV7PzAzEXQrjoJFxoq7Mp7jjVxndJftfbtb6ioWRcB77i",
  "key1": "4GWLzwr2Kt7YVCkY9gtEo4hZxdkiLJZRogxXDuLYKFoudkWgEFezJEAqcziu9RniFhVErxaK6mJD1ysb4z4fT6Mu",
  "key2": "yMQRMyTMMtnnKzUbMYJNzZnJogmhau9TdF3C1Yr5wPSTD3fKcFagKXk9685w4SoFwdhbYLMs7N6JWa5z6EJeYoY",
  "key3": "3mFsd1Wcbjq1nmfRiMNiBDN9rYQebdg47FN2R1XdszPmquNpAF1cpwxR7vvsV2HHjoFAaxbf8YHGTiK8RtMQKN6E",
  "key4": "3UwB6p8vd45B4yrJ2cPHHtFNEbhDggJaT7V9w5aK5yARuGc4t11x6rTUYPUHruVATTDpCj7LnPVqy11JW6uKd6KW",
  "key5": "5aKebXfwdwdW1yjCBxef9H74tZqk288mURpA3wkmpM9kzVdEJNpAVdVrnJcnVUUL7FQM2VS8SLEYiVxxVq9tH1Uq",
  "key6": "YqErXfGAG9hx2xZeUdmn3ukX5YKHDRESTvcGBC6XWmm4qttVxtX4Vrzyb7UMLMw7ugdbPctDp4aQaFfJUzWZeNE",
  "key7": "2P4YyXu4F2hbnPpSpvydZt4ruGBVJqACNpY1VH9vk1CwfqB9bxTxy5xzn9tSn7nnP3Eo49fLPgg4Bn3QevHdJvf6",
  "key8": "2X7K7ynVHGseuNryA1PYkPottLzAQmAkWPp6UHBmk7gNMbutTf4GqvS94vhA87S5abxacyHaYgXWUF3rcf8FyM7Q",
  "key9": "2XVJwCSDbqdqGdMXuhPSJtMgVi3mrjw1DfAWMgvvRmEY3eapz6hghduWNoUQJ5HSC7kTnNRkDSc43C2HPBWDiFcD",
  "key10": "4pBtzrMMKDGgeFAWyVK9Wvub3odRJud8Gah5n2Agu4iir3TcFc8tzhQvTX99xbkzYabe7uajX5VThJc9cmyPqvjJ",
  "key11": "2G6fL7aXRJqJpyoDcj1ksytpUvdwf1M91JzdTLuEi3Z6fAE4SXo2auY6tTpNsXi3XL9jrwEAuKfqiDwo6iUAhHD3",
  "key12": "2UdKiPhQtXmUgUYqMp3bj7pxyZ43HCF9gxkX9gTmnvCHMH7GaiGD2ZFSEU6jTD1HsQYDF9BJdkjtgi6WJXnw4bZS",
  "key13": "3QkYkZvXZcz9Y3GLQUD37NWfkf7detxP9cUAXBHqx2N8TuyY6yfnJqY9BhbE1f5Li2CgVvNy2XLwDw5CytqjCLo1",
  "key14": "537vgoiGZapaJ56AwRAqrSGVyNhGKeVeJRUiW1KuPqP23euLbiEoEMWaRmTfnDEwEXapfWHUG2woi7LiwpJat2xZ",
  "key15": "X1XLeb2xwvnLSLBuoNanjwArSppbofZ5fHJy9Pg14iSgDwhjB3tUn1qssWKBjqbaY8ZRFAxCSEXxMXRvypzd7bs",
  "key16": "3qKRkY26YXsYv8iFYaMbQY9Js8SjBYcTjzYEjrsg1xq7HYRLZbmwdU1Mgiqui5xf9vdP159zH5dupKdJXGJVKtLh",
  "key17": "2aN1Esu6TVJf3Ww74z3VsBhrbAMM8UNaUXRcmg8xaQMJFrzS7KgfYrPBAZnTYJdCfStpwVQbnxKzJnaUgXM7akt6",
  "key18": "27u3mM16zwMhqGmHH6FUT8Wnga1EJLofqycp3YXXY2xWrWzauWobkJLXd3r5ocN7M9kgDHhBfXoDJL4DzeAnjEGd",
  "key19": "2T6gXXmwTkt6ajttYuuHvdKpuMZsQRjFraNdD6jo8Rcfm6oTjY4GozBZabWHavD7VnvghsFBXUKKBDgu9avxV1Lz",
  "key20": "3BNZP2zFo45pV8LoWyZNUhk4zjfZySANPsyPUk3VjowTDsfT7Hbg5U7mHDYqKpjye6FWaLUJdH8gdihAnKQtbPQR",
  "key21": "5HmNJvRHyTyzghG51E3LrDJkrGAcwLGqxSARJjrgbbnxgCEYG7nXEwxenDvGBvexw7KCKsPE4D94xi6LVT7FyLGC",
  "key22": "5noTSZVFmPjV5rhV5HciCMXG72QytmHg4ViiM5WAVMegTxspb8i8JvytToeZNgRiVJc16VCKX4sE19LGeZv8g7R3",
  "key23": "5z5zqKvHkSWU5MraYCtNPRyWDzwUafMf9MqgsVXYFxkPc4SMR5M6RGYNM37ANPQxPXQkKbhqisXkqxmskaKnMp8v",
  "key24": "5QzSMPSJviFL9z9N9g53U4DSgeXMk3hkpps77cdEPrJ7EFXhGc6oU87quwhKhg8YqZLN22id7ayBTRW9bkXYy1SF",
  "key25": "48PoqZNnqJaggtteHMTEQX3h6SKcMZTwR3rwcTEFQbszechNv6zWkVJ6FBKsaccd6FNobcWyNUpw8JqLKHPkWto8",
  "key26": "44AhXhXLK8zuQerwdLrhUeyP9xCTcM5BYmQHcFPow5Uj4KTEkUDtMaKoRjuhP8KkBTuNNCnuzQFQ5rnDeY5uwhA2",
  "key27": "4bCJncz1tKR7L7UomMmZxH1RNKFuMSJVK7Er2Z3iMTdFGDnMGkeRNkbqYXS8FD8LK74MntQWDwMK9T4EGEPHaifb",
  "key28": "LwzTeYV6LD4NzAhBAwAPqULjxMmuKxdnWPdwviTMoqiVD4rpAyFFoUQUchrKkBhQcGYBeu2P5p7NrcPdkTxDV4Z",
  "key29": "EfnATCfPjrY5UhP7xe8rv1rffA6AbCvHkFQJoFCJpqcCseSFuFhiFKbRRsePc15WjgfgiovProVNmktZsJRUaNi",
  "key30": "26V639xd1MguD2UgAJvT3K2kargSqyUnm3a1ExEvnTLy6N5h2EACoLGPE2PDQsgtADcMnC8rQzd6qmrqJr1ajpur",
  "key31": "4uPyerLgLkGRELKKPWWgcNGVYtHdkR2XVemuARE8iLDkjhqutK3FB5dzkLwwatuzvrPsPJS6mEdv2wuQN9fw6LCo",
  "key32": "3WMwno3rXvywYSuxgnDZDAMmZjPAJKbGoY18Pb1QunXevs1wQnM22ZnVjKyKmUfDS8NutY69BSWQJfVeZEDu3Xgk",
  "key33": "qWMwnftqWoNsGbj5fCHYm8j2EHWowe8a8o6gcptoaBVsYMgHGKnmv7nC3z9rtjPSq7VBofe7QkBexZfE7M16YiN"
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
