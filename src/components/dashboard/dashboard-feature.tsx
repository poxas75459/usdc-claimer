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
    "jgQzB4fPYpa3FgnNR8ofC552Kuzjdse1A2nPFWYNBnxeZzagQ9fHSdf7N9CVTufar9P9UJJzC8GhEx6QX7jDDXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VeTR6J48hekBdj64u9XRMcZpgUjzRJD623PjqXrJGbrVz4ofjBpjpw8KRhBW14wuS9vE2vf3NmTmK34Le2bfGGJ",
  "key1": "4Vr5bHFYugQXyVFtvuK9vepuY34FPJaVJ3SZ8c5Hcvg79HE7HaZsMDAMuqdoDtY9kfjH1oCoJWqv6kqCqtA2yfnW",
  "key2": "2NFzdfkn4cfZyPpV514L1mU7mLU9jua4QD26Vy7sa171VwP2V2q9aogWS7h1xjQ9tPrddFFe5emMqKhycv98b6XS",
  "key3": "QMyEe37GhdwaS6JkCLL2Gs1F1oZA8FpjBSaxPkjnDLZQnzeR7Jd25JXgcLLDTR1hJPJvhTYmZA53CFbhwdrPF77",
  "key4": "3bRJeWfBQshvLghGwipsGspq92oeedeN8eKhNkuo9EJUggDUosUpZ4z2yqV2fknX37BR8CpCstYNgajGsvAFggA9",
  "key5": "4C4cVY1xk8FVnLxXtrDYvxiZJgJu7CM4uUhujoQDisVpRwV5hVhxuAqEmDEk23JyMEj84XMarca3FQDaPbRrfY45",
  "key6": "1n9H2SpdVmpfQni4bvGWZYuLc4atAFBiTBpqYXKkURKrp3ZEvG16kprXPWj5KYQu1zrqJgQbDpAMRjwUsCEVriL",
  "key7": "45RvLN72y4R6Rm5HkhiMiN4NyjnavnFXa1N5SGTg9B3Ecr1z9tpfurWQicrQ69oVtAUEWdNjuPoXse8H7gEwqiUC",
  "key8": "5R81ii2sAjYeU8gJhgULgM9RWmRGGWXjNAdMyc168HBeksJqXH7xwmh1y9CZqy7Cf436bYFek7HsAfismK1vyNn4",
  "key9": "2aWLwrwBjnpCqhoCurnZDqtnomFfE6pSFT3HhnxEDCk8doHmhAs9qqcTpn9hBjBuWV1fYrrqcSQBFzo5o1rHFFHP",
  "key10": "3NrvErSuPUVoohGREiwB5kKvEzS2zb2XM3to1gfTmXpX7hHLqS5DdUYZj7Qh2LJJbRvn8mRt1cZ9ZYUofZpnUj4w",
  "key11": "Dv3RJHvPGgVNh3m5VMsGXU6ZjXSf3amhSfMgZo14NzCXu3Wi3SVThG8JyjoD7rQ2aFLcDjtrXcjDyYXzw3aBTtB",
  "key12": "29hnnWz24Xt1avZNCChXosA4oQYy1xfmLSiXjdsHRW9VdoM9errL4iuiDTgoEaSso23SZDafcKco2PRtuAsVq2BW",
  "key13": "MExNomFkQ4Z1A4xSyMEYrsgzieg56UJ2teZNJKvjsyZmZkbJ3P1H3kCLQQ3X5kGXxAHDkHLoZLb4jxvraKbVrMi",
  "key14": "5a6zmCrjTAZUFLih6qpcYbZmnEBpfUkDynJDyZ83mvDjnEJfwPnMko4SHsX7A4gzc88HXDbaVJ5H1TEqkxEboHXH",
  "key15": "2rxvz99nx2wkMDAUkD9SbCYfnRfJ7WUnJZgWyHbYgxGmBiYCSp38PjpfPHbeqkcwo6RxwoMcmdnCqVXbsXoYrN6v",
  "key16": "2vG8sUUiVnZWoMAdwMobAddTaCVS33mXDjHduE2rTDhdXRk8RSaXyBGhG2VfFnn3TnzRbgjyFtZThai4DXwDWDKL",
  "key17": "5gtNyTB3H4FtSjj1Ayc6ZgVCHiYiY5nVwbCxuAJCuTW92qbLkmuCVsx74XbZChd1p4GyN9pKnYT2ocnTopXDWgyU",
  "key18": "646ypTX2XKvwhs4mfmyZ2QH2TvqFmq8jFx1mHx9dAnnBee99EUGsJMAwK5QyL5so5F27YCGJMw61aUJEWXghqcgf",
  "key19": "5TtquNo86Kzok5TBNEnWgANHoNg2UyxKUj6k4YTFCVpLKxitzKxsxafCsx3By6Xm2fREtJJnFS4hS5kwputhTx1i",
  "key20": "qRhpjhydM3ADWqqb4mwu7BY6uFnYKd9YZGmEEj5osGL6KYsZbZXVuoR2wcTBTQYSyz8bSKKiDchcJrqHfj675pt",
  "key21": "4tD4fro4YWj8ohSgnspm2493Gg35gfg8fcnDbdhKgLdCpe7vYPvY1eHgSEFufTFYrs5C4GkhURyg3nggwU6DCCEX",
  "key22": "5MdtGzmLS1wnJXP2HCzazVMUSBVa5RMiZwa51HAwj4qAUY6bUGQFiGUojhJrVmkcvYwJBBGGB8TvtPnWCxo4riiL",
  "key23": "nnmsbzf3i6FsduV2YVMKMH17DLteWPX1nrASrE4y6hSDUJmonLPBhVJJw1ei4b5DNGQWq9memaMX3bCYY1KgTmu",
  "key24": "2UyHEVYJjEWtpFaaoELfYNRTZi6HsxjAsJoWpPDbLDhZQXjsEpFq5CD79wrqXjP2aAh54SPazvdXAisHDAxSp4P3",
  "key25": "5KMYPDZdTX3QQm6cY5UfmwjzhNngLYRohiH49cJi2xqewBzQmufiGERk9KJWx2LRgg7RRQT7hDsaj2z9W89sj2M2",
  "key26": "3mg9T7on8cCjUPLHg24ePAp2mobB7mwjXtsH5jjXZyJ5tacGmJmL4eKdUHPikZjwgrvTUoiEL3sRwA7KycJtZq4n",
  "key27": "555UyiwB9earn8BeUQPyLTkFx8pLCEkJurURGbufWFBfEeMcud6LMxeocAxXSrUq4V12CsMqouLiKHbjv21iNc7L",
  "key28": "2VjbcXYhffGu6Q4hYD6dzTNPQ6kKGkmwLohYxNsLcxsGioTNCihtpkwMWKitaepCMJsD3hyaiJfHojquUJeMxNYo",
  "key29": "2xaby9NEkNh8dTsLqvjNPmT8Cjjj9MKNeZ7Q9Ww9wBRbHu7y8RT8geBMbxNUkD9dWJPaNPQU5PRva9vXBuLEp3EK",
  "key30": "5cid8EoGgXN8FB3J7vrEpv8aBUqZSZWRCTFcrUH6jFyeTR4SbwYxmKpZB8gV5zx9HQ7faUXBYdcp3LjBu4yDPSCr",
  "key31": "3wPNXB49vcgiZQ2wfxAVuwNPujhhbZpLWSAGNNj2czHntmbN6WusuTQTnTqpgtsQoiW1KXsSbRsD7KNwWF7kj7mR",
  "key32": "4BkJxj1i6hc399R5PLgHZX7hnPeYc17etnuwUrDyeHTDLFACjVKMjdk9vsdVRwaViu4dbUE6E3Qme5LRNCU6iKA5",
  "key33": "5RKrrnmc5qwjpkCZmNPtzcAkEoUbBm7dbSQyU9CsPYvGfQbMQW67yabYE6GF6hFa2XhPZPTJc5vFeyNhVNaytpcr"
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
