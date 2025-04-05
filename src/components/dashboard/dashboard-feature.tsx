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
    "3hGjWGH5zEd6jrgVZzdB9TfWHDrnuV76YxMAZ6iDf5mjMPAxAHi73NgFF2H6bEbfo7HTfxd3hdD5sGBWRTWASQNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vtzJr8nhnw6indiFe8Sj5134XNkwsJHn1txJnjV2UjHrSPHnapKUXYJRjccMZM5teUuYqCybxQiWVGrMhxCUNhf",
  "key1": "3HwUWKTvgD6uBc8TNLWcnhb4hYUUnt6hFxpnyfnh9x4vHNseZZPJbwghZ1RVZ6PXJowTqEdyB7oUBk4wHoHZCE1C",
  "key2": "GvagmAaswVyJy4f5L5f28bwiGaBNjt56FqJahB6ccQXEpNxUhoQUn3s41W8SEDNLCs7LpRQEsQQEqn6jJ12dn3T",
  "key3": "5gq3Vh3FgukaiY5inXc7HHKNng3PUE9MiCk4RiTgapLC5BQvhppfxhKzFoYrTGr2Zvj2DpCxTPsqV4n9dUpVaoRo",
  "key4": "4aa2mvoRY2JejTjxvEVnbnp4i9D62Wx6VapH6pid7aVFVFiqqm3MvKnsRPDmv67dtVz8mdsxgMEvc4aU2bbE8BaL",
  "key5": "xERkZ3229yga6nHYrxUZVwBQ3sh2YCE7LeR9x24gxgXSRhbSzTjkMDfknxv6nJ7SLNGd7pZvVgtCDWmC73n9NaT",
  "key6": "4G2ESZz8Ytzr6Wrm953qYRo2zBJvXFoYn4aBKFpArZGZJ1V1HDW6LKCsxvA6DoKKgvMXEG7rfaBxnJnEyb4stsao",
  "key7": "F8s16cgHtBpNxc1Pcau9bK3C6nLVjsCpQELQqHpDhaHVEhGpw4XCkbcSwYU2w8BetEmoJyipYhoFYcbC2sJNBMw",
  "key8": "23MqPa1EFTc67zdqUupBLjKnbDQ4Y9pyr9aGxkYFKTEz8CJHGARCzRrqEnSL5RVbMnEWVoEhtveWfKZVRvJeGDNS",
  "key9": "39A4YYNz56G3YqnWHc49BqsoFGHwdY72vj6BcPYxVu2dbsPRNnx5WGkVA2Vg9ZrPGaoRNJS29GrKLvB8KrZNwffc",
  "key10": "5zdnH2MXyCryci9yFdanwfXsjVKRHDFYZnrZAg1WMMachGuDaoCzezbuwj9wx3xmwdqPzggUAe37YopzfsgquPF7",
  "key11": "5JirFCftt3wKn3e6tcftwVLJ2WrFcMp4jwHyFGrRKeLQynKvHJVMQs1E2TbtSC5Ke7hLZXiEAfuJznUH3aGPKDBU",
  "key12": "VAzaGLZwujxCEv3yJ5sVjbayk5xcy63Vm6nGWxPRAGL4exrg3fFdP289bzT9UVgVi98MPdtSmY8c8dHE2S51RJ5",
  "key13": "4Q6pyAPXDYxWFtS9pDm9vX3N9iQfmThThzeGzuyzHsyyPcMMLoRP4aPxKV7YpwppwgLg2HjfUDVnpAQCVQvmVu14",
  "key14": "2xcgnKSFqAniQRo5iV4GGVaQc1ruxS7eE2XeDgQfnpfDCvx4NPdRneRqfFdzau3eH8wGgsrDcaZXdAYh3tanXb4G",
  "key15": "4QWEgrK4b19ymvSfUL1JotDDf5EsgxbohP8FTSbixHkghXXPX9eQHs7KNy3wQBu8iDWrryi4Mb5qHrcEht8zv67W",
  "key16": "5B7GSjhGW2b6UrhxQMu1RTFLDA8CJ1wYmtDuBiTjHGFDEbCCMPknKnDXvsA1TYgTmmBvVCgoXYfrjGMheo9gzhsz",
  "key17": "4F17HWJLkyfCow8bevFsWyT2G1SiyK7YaS8W2UkXSFgEDscKNABwTtBUXsvTCZcRfoVGEfPs1bRHpntmKju4zceN",
  "key18": "3mQRLoFCaK6TCM3ZpKJNty2dJdtnT4yHPYTCErLtD942V1ePw7iobX9eciyPJbv9hnABAxjZZqSmQXkvkBraz5Ew",
  "key19": "XAVvtk4pYod6iD2YGB5cF93cFicrnXM3Qx7m13zmwZ7pG58jav7da2ADNRCkJKscJbJ3untD2zgatYeGEUCrMF4",
  "key20": "4jd42GBS4hhTg8SWTpRQPdhzjcpzcPDZ6knd7vchu2AT8kueG5gPzCpvqT5gArcMEoXyvDw9aiTor6NavGkgc9nq",
  "key21": "4MHLjWFWqDxHP58ACVMtvgV3AAaEWYbTHBtT9VSecwppUmMTtNPTryQaQU2pPQxCFxLAvargqqb2RXM4768ya6ct",
  "key22": "3BZEBRAmUGrnFT7pEVC6YNMe5UzUFdKw6R4VAo9jRaJXDnwCJewYiEYpVj8ugaUFEkFU4y2rwPcnmaqGCMQ8w6Mv",
  "key23": "4xHeebwS67a1iPx1fHhYg3b2by3zzyTk9XPdRVyCEzFYSvfSrDoC9roGm1TxnE439fhBLQt4NZSd4sZhrjKFJJ7C",
  "key24": "3a1ry17Vcw1GVaNFZsJ8NmouXrZ8FcbYHfn9hEw4xiV1RMXuGmWkn77nz1odPXuXrdYH7XaTpedeFgEVC7Ecwahi",
  "key25": "5UvFx3jRV7FUnuE2xcdduEfeFQSKw4JVq4Zt1mHyrDdzPu4ETmYWPTVpDo3wmm7qSvbBzbWpgsRsvEm9WeECri1v",
  "key26": "s3B5HHqtd9CwpLzxZvcbocQJFCiPWs2UnXLVxjgWiU7PmtD1iVdMT8goQijPiBcZVTbbQkgTQ8Lyrgfv7Pa1QxQ",
  "key27": "3UuN5BUPHKdKcrcuKCeWFikgxHamXjVxFV4faGLQPqitzQAvgXr2gD2MdA2kvVcVpv6KJHqEMko4wP8v7H29DSYQ",
  "key28": "un7ViyBxbf7bgad3Ku3iWrri18SkPvGcmrHpgbtivxKnTiGCvBD4duzd5LFca2H43YbzwqFDPYFFFjDfhXwKhR5",
  "key29": "21qQwPjSPPsGDfmwxDXrSz8fqtmBEU2ZC74N2G8a8DcmMQDYnJrknpij111bsV4xm4JVwsagmjfxjFzgbjyeYcRQ",
  "key30": "4VqeTQ1UgtowvCG9ucCvSY9spxbbguZPv7BQ5x23L9eV2R1tnXzkmTddJEw2XDE4V6xoxChzV7MRe7cko3ZMbcEj",
  "key31": "3bibnZtxZcuViXVuJMKhYv4PFduRHPZjpnXEc9d5PShVwChWXcLjz6y9sAZ8GQeuVuh83qwAUyYzVpDWHXxzHrrF",
  "key32": "4RUGQbtVMBRcgcmxhPei4b1BNVfZeWVwWNhYpqfcsdUb8CHDKmvHZprW1hKdgNdUEaXYfEjCWzud1LYKXbf6qGdb",
  "key33": "3YjvK9oJdUTKBkSbA48zSWtfbEzTQPMBho7jF8Mh7bMJmkbnyMG5RqwnPZYeMGbi4NUyjLoh1HmQfBWghmRMWgZD",
  "key34": "5UkPLQ7QQ5A7Fj8ui22tmPmhNaoMgaKx3SKZdxGj4qKQkYXBJS4feVCcy8DkQzRoBTTZNqng8SfmJGNxsqACCLBH",
  "key35": "5cdviqfRNKHSnCod626YccdVDqa6D8PMgZFpti9oPWXiSbN2UdXaXbYPGMxmgXec9mnePNq6raHYzyyne7xKWLpm",
  "key36": "XuSJADGmQGckNKENuAZxNbGehzgYyK3an7BFC3uqYV33EtSHjG46myTcKzpqqTFaa2Kn8gWJAoAGMbgVFTDFZD6",
  "key37": "5hzAJdCejF3bdN2vDqSj9JpRsarwyFYXaybm3jXdMBDJtY2pM24MhWNQA76NQuPFafy2Vw9rBsejHZiGenda169N"
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
