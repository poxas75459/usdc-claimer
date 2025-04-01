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
    "vuVduA42628WaHAcu2yAtYQ8fNp3qEvsro9fCLtXgQMk8qDdrnZGZnnPhvs8GDk4VSd7UHnhGitYGf6arDVbYSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r7t4LXhH2qnmCqZy3o4j2tM2S3dr6oTB93kNtbq6Pn6VPX59VS9ewoxqHweoipPUs6BQ5LiKfznydVERmkkde5",
  "key1": "4XL4ocgTV9imSY1B4Du2ffEfDzXsh6wDX3n3w52MgvK3x6i7eS3f3qQby24NkdUviPSqCVcrdvz7Y7TPKdiC3m2t",
  "key2": "5GotiaaASzsK2iCP5DivV4MNQD7rC4E5ZWsnJS3qwTnZuCjezyxKPjai1h5YTRtRSBtARiL4jpXYzJEe4WCqjh6M",
  "key3": "4RxcFDcw35TQAoZo5Nc7rK8D5vj5jiwZ21rCqGGU4qYjocRcwmN2JSEZiMeeBYwLEQqq86Y21hhyQbmfprFoYUz2",
  "key4": "YNAWAHHYKYsJ5tx5XNUFDgBojUURFnw4ECuNF8WCJPydypWSPYed2AfuVfS1dyuU1NSbBTrBTFLnDrunfKDwMoF",
  "key5": "2KN4o6acEiTjaZsJxT64DwwwHq8zCjCQCgkMyr5hBUVQN3zdpzRGPxM1t3kgxuypFXH2FAFbq2X8SxXeC4C9S4vX",
  "key6": "2FgCBdzYXB1TCdmHGon1Wfor7jAddVYAmQxkCtkNtC1GhrdLC9kmSB8FyUKv595t9pHz8DjWc1axQ6bBDmnHdNKD",
  "key7": "66FPeH8m1kavVBuhBeFpgziigkT5tyBWrcrhb47iv9gqNRCymRLt5Y6mVnZ9GUxLLcdJxucr5vWwgqiSotwinDmU",
  "key8": "49ZiAacfaCcAAoJiyFQLC98NejiC7BUPC6SmfHqSDMuxR13y9KWPL71xs7HJkrn8UbXXmTdbCpyti7YiGFAs9rvn",
  "key9": "64d5rKBHH1x7JySDW82fLLG8t2ZaH8NUyqpJsiWx2i2ycz2EJ4YwLtAJsjtM6PLjp6fdWgDLrnTyzYCAG4BuVDVw",
  "key10": "27xogTLcAec5tHzDaLefWFZvbbc3unj7BC5w7mu941VujeoQ4gyUM1khyyPdW9WqXF3rGzMXwCCT9idfP9BvEg2h",
  "key11": "3sdDh3SdbypQX5YBpph75Sivge6ZJ3FCZPgad6zspxHSWSM9GiVjs2Htxffrc8V2G3aDMxXWN95bAtoGXiz8JwkR",
  "key12": "3Vr9foanoecid7YJ7yhHg1SR9p2YG3VfKhW7trHSa2NHMSfzFquYGDdkvnh1NfhAvikbEM1huNCyHdgLyS7FiiEQ",
  "key13": "4yggMVLFZnQGWmoqTzeuoW3Eyec8zvE4pC2t9gS7ajA8hiAqrSavXvNoSbBwbPpfTpKvyK5eEN9Lgan9iaHsUKM6",
  "key14": "5ddxgteR1udSNUXSbHZrMXDicKRCrPDnZKz92B1wc2rpChzbZbpKhVHdvo83ykfXJoCBFmKuBrdoKQjcgALi7x2B",
  "key15": "4Y1spRtdpdJpLWxdtqauB3t24ens12zJgAJ9Gi9M1GGB7ks8imWkfnAicK3r82ZPniuJJi6jVHzhBNs1Hvyi3L1G",
  "key16": "5sgpWJvMYpCTm1RYnUfn34HoEEAzy3FQB52c7EnZhFJkYFLFKZmv8hhyjQJh7h63C1mJiVpBWvpiMVuwuMVYZ97x",
  "key17": "4DFRRHVv5NPUygKdpB7xLXXqy1RPzyfpWg2xsNfrh5Xm2db939qPCND9Qc4Cc7Rj8sDvNYyY14kEvkgQxpmNwYeg",
  "key18": "2Y3PPAL3kT3qweMKMaW9nik1WQevSq2MjfLaDoLpg1HzvZ7sAquYFkhyQc4uh6iHwYgSFjVGMfe2YY5HzGG26b2h",
  "key19": "3CXyDagwzXLPVymsurMB55awdPWi4zDfsJovJ2aEeuPM92vR8rHyLwEJfDNyjBHpdFEjCJzdJLX5jHQ3RPuK42U3",
  "key20": "5wuNXsRTKSkJTqGoKU5Lgh96QFW6Dm6gqzo8gLT1RuGm8T3D1WZXEPEVyascpxVQUvvMmTrSzhexpN2kJgMpYvuE",
  "key21": "AxuiGBkDqTbm7sSmgY7rh255yreg2kEBbkjHDbnxUk8mCtJivTG61b2rrG7tqiRDjbPzHGuRTWgEgABwvd4QyMN",
  "key22": "4mZnDQRjwprtgMQHbC7BL6iwCdTLgVWCiFJ9URkKv6VCLp5usKQ7nmf8GH1q24aYG4R4p2wQx5hLUxx7xoK8Z9FG",
  "key23": "4DDbWFi8LdgWqPZzgqSvZ7MTX6nen3pxBmXUtGZMTkLo1hAip1F4DHpgw2o7GNapGVQtUwc9H2TKuDQ6KsCoM88K",
  "key24": "4F6dBD6MN2DC6JVNaCeq4Ak268NWJdhYnceSQFf3hPSJWdQ6DroqRJ3EcCVhHAsXcHkG3oD4GYsQyDpLTnvJujz5",
  "key25": "RoFeiAFk6VJaa2d3GfXmZPtPYfrgPsovcE5A7uvcyvSuBxaP8C3ZeBuiL238hC83d18iAnMwwFvwM5DejWEwDk1"
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
