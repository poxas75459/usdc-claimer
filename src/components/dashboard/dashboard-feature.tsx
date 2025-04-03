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
    "2ZAUj3hGBEdmhGYXYbRmfvocqWPo2RiT7VVPSX1Uq8JdMm56wUiss4Tmn9tuiJkL98XGds6xTkppnD5qid4iMApH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBXcaA9oRk9ngD2E76uqrBhAwUMbUr9t4GVsnEbkT1xbSo3R5RxzptZaSrpbupiontxhTz9Z1DQDRNeThJxBEKC",
  "key1": "5zQZw326p61ix3wDRh7J7bacK9g6TcsPE7uk9sf11WSEor5nzh5U8hoynnZvJoNDGCZT4Ji73LQd6vnzKGv9sBM7",
  "key2": "4ad4p2DEUedgVVWvbvaEFQxsz8ww1DJj4drTDwKKbExtxK54htTnksbQC4qQ2d56x6dQUEGMHjMczZ6trugr6xWk",
  "key3": "2fh4XRmr6yQGWvTthUDK7itY6rRCrr4iAgA2cLChpyT5rMtAdftFzdeC9k1kq1nAZEum9BVjKd7gAoy212V5z2hR",
  "key4": "52rQvgyY57YogWNYoi6Fse6bbzmUWAmYvQDtFMJNEA3fM8q84yZDVWyHtZ6y9MueRyvojLyymJDgK9haYXGpJgy6",
  "key5": "4ShyX1jnZ6zZdZ4BejhHVyQLqithhVceLrXDAqJSJgkvmPMLzMbP4HE9vuFXp6n6GRQcpgxiyoYc6LAwzYX8bbS3",
  "key6": "2i2drCU79h7Vz4mfDDt925ucjUboFrStStSLqmnTo34d3JcKM9AejaTHhByxnMw5fEEX1qi65fxMN3hcLFNnGQCF",
  "key7": "3jjVD3xL8e1u3aycX6QSr88Kmw3WCx2VR72bvbRe5jfQwjQGUr7J9jmg9A5PBWNvMnLbZrbogWznkWZF6BsAqavF",
  "key8": "5TAPnefygoq8TTG9Rhys3yjVHUJSAs4pBkFLFNBRuZqwDNSSYkpvU7ermNvNSUEhZZC1TqvNdaNxbc3Pk2X1PxvM",
  "key9": "Gqu85CwcRBuCUj8vfr7ZbGcYXuSL81NuqyfvnrfjdiV4hAXGHHbvYmBm4FwH3sRsANtRPy8vnmKGXPudmdXRQTV",
  "key10": "2KwJTLZ968ufmhoyKhyo5csZ8RnZ7GREyZfK75P3duA4jN8zepwZXoaKKMqAeyKx36usvyTdrz39khPW4yf6zSnx",
  "key11": "55hxdiJ3tQQgf8nmaJRuDTr62wKowBy1uYCGoeDUyfaWmrJpY1HvteefGUFXnFGvYbecZsSserHs8hoTP4Hq4WJH",
  "key12": "35upjHftykqxv8tJzu8VPNa4xhv7Wtbd3o7ritiG4Ptv6KBVSif6AxXfMexStcv4vr2aF8VuphFh7ybBtutytWhV",
  "key13": "2xkjfixHQPADoviBhrdyvc4dx1oAgeMiTQgxApEJD9MXk2EahdPHSdn28nYnPk38TTRA3DpnRDt1vKcMxSHe5qwi",
  "key14": "5nLuKyH4WDAUngD7YzHjUWnsn9J2k693tbfipWxcaCXDS6tSSWzy4MxDMYN184c6sBmbyfC86KnwXkQzPupZYRNV",
  "key15": "5WQMrJYSTr33smMZXmmBGEahY1YZ9Cqea1rV7aEZuXCvRcGJLkceBbU5ZFMahYiJBPNwEPjmU2rJ8BM6sGg6EMJK",
  "key16": "5B9MbYEEzHMaTnoVFA3fobU21RFA6xVqNqNECiMP5bDtkWeZfDRgdeMDhZaMLYmHe1cwT7ZJFQJp8aDRwdPWqbXt",
  "key17": "vhPTjQZofhU2vhnmpbV94NckeSRdLunuPFxjtyQS5zGW3ihMSrQNpik16ATPWFk3zAUDupbu3KzYrZzpzzrZ7Yk",
  "key18": "4ocVsqSfipdFk8TDwkGdhY9JwgPSMaCruzx8UbN4u2f6Nxv9UTkRXCfLHzTXV1MiQBhT62a4XJrLMSVFUsLSH2cy",
  "key19": "3KhB9wndHA4xkDe9aBV5fqT5DXCh7QRzBDyBKu9SXxdqXX35NJKQgWAc7BUJhcVAwZGrenTKYUwYrC3nrp8HApXE",
  "key20": "4VyaZXBf4G7YdPo4GTJgszmkPm3ZFySoDVrmaZHvxUFGpRUhS8bXWJNdieeRQyaULnvduWNArFcqQ49gD51xoXB",
  "key21": "3XauYNLPM31apspYGkS7xj3jgYitxqGuJ1WL8jQDceGKYxsaYzwBktmWa5YMK9PgzYdBpgcMTCxw27dGfA3cerL1",
  "key22": "3ziciPPqtHYGvJrCkY6aczNfdgMAVAUCiT7prTrbu5n191UQUvhUeNVteCy9HByUHGDbHgiA53G7whgzy3wUB57W",
  "key23": "551nY2UDCaL5VBC5fu8U1KFFTCvdNnD97XEp34MzNHtHQv3rtxM3r4pydNWLYtHD8xic4HwgMmU86kBf6Y9BCCV9",
  "key24": "2SBEaxs7fSARtHYaaEnUJ21Jhs7ah5tFmFSL9kVDQEVGp8ECTjAyErDTsHfTJEFxVSi4mYoMWT5MbugRpVt1zPCy",
  "key25": "onwoVbkYfJnqwy8TrMmq9CDs1qspggWPA2bxxmUYhak3jcD9N7kexE2bWg6vyLHEgQYtjfbzCG3x7m8FuikfX8H",
  "key26": "5RNALq9g4Y6B5j2FDiEk32oXYcdN5pib4tJnuoSoFuhCsXU9FJyegncFsHbffci3KcqxobAsLy7N8szk6omF4Ppd",
  "key27": "aSQEmx6GqbddYM9RufLkigodbsAbKMyYXTwotuPSFoETtnHZRwDXoTXViwQQ4VejoNLKdJQHM221F1ctD6Y6sAX",
  "key28": "2DbpcvWp92QxCMn3Wj1JNjqkYSwibCgtCU2eYSo5TPX3LzMeG6x6gSP9TpeAtohRfA8LgCYaf6V1XmJ6gZmdjfWb",
  "key29": "5sa2GW46HftAiebgcfrvsZy8UBy8zATVPHmEdqNDo2zRpy3exksEzeiD8oWtrfMto2EcWWZQUjKwu19EeiYnzeqz",
  "key30": "Za2KiZf1WQ4th7Am5WS5fX3JxGRNJSeky1NJUR93dD3Fbkn2Kk2K8Wv3Q9vbBviDFeRdN9zrJZnecXfj4mNtUxd",
  "key31": "3rF32ViQfaVu1MEmrCSwwPvkn8GRvjerKGG5DdYHESJEgK8yH2rJPiVXDMgAhLCSHCU5Y2yGbTXSqpkoJyBJPvpZ",
  "key32": "2VMDMiJLdgZGtQef5tbRtndAmqgxb66HFVY37ydK6sbvZS1YixYhnbp4XTWeDMhvKEZhJY6SfUGadesYbtLzRBDh",
  "key33": "42JEmmGcsxrKh48hXLNFYgnx15Jt18dM7BTRCiHNXxDLoHUv4khSyAwcyNJm8yYyfs2vCv9PzjzfcspPauFhuDba",
  "key34": "cz1rEDRy1jTfA5eECau9cii4YPTZGjSxfj9aeGEUFySDAqjzYtUFj2Hc29ewn7AYstDHE5rWmnGN7rCNJdMckDQ",
  "key35": "27eMrDjY9pse1vwwHYmy5bAkgaCe983bvZxuJAJ8K3WByj6kFhmLkWk52MWAX8D3razEn6mYn5XfFinreP5c3d97"
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
