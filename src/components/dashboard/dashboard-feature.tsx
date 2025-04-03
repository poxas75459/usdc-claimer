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
    "5HiJqoduL2x7MAkNaefNkuvn3kdSoKdevDjYx1SUKVZUXkGRhsTgMWqrhbrLw7TMSppWjf8D2wiB4UZeYuRcDkjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpSSJxZ5cqRFVjLyvnG3q7bpjxGH6dd1xXqZLZQD7WmrsRHagoY6RB8UD8QUhfYykyidm4CUBho9Hu6MzNhWUbj",
  "key1": "2VEGhy9kFh8PqMxHgqdXb7WVaN53XQqv3zxLHMBwdCj3uqrYEyjFuTwSWnFi9qNQtjNzSR7LRwsmmsqiYeiWxi8t",
  "key2": "go5oHbm3EcgyyHK34QmALucSQ2pyvV7CrpLHWTmfxCa93qLcsoqaZUVJGkCYsUKt7Q9g3GPzEc4iU6w7bAqDMk6",
  "key3": "6g5gW9xRCAV5QUmGhaBqY3QE2r6fSzV3WJazNoteXsYaKL6GPs7xWbcibNjREmXBpke2VqUT1b3BtS6zPFodYSC",
  "key4": "2sxBDEG6pVxgPbV7pLBm2zhBaXqhCWBpEQxeA26oGZu1a4pmZTivJU3SSfmbBc8tkgjtTnYDpx4V6PkGTvUepeTe",
  "key5": "5UpPhLYxT2zesogRMQ1ATboNpfa9FZGDyzzrbVv3gLNM5aQMQVNqzv7ZvSvKrtso5aAQi11uMxao3bNuELShmRKy",
  "key6": "8N4sTsBtgJFpGUmFqYYn7TzokkcZS65qTbFYN76Z5uAnVFwPC2QV6QntE8jQ37BzaBSwo8Mn9Cv187UMhoPnsaa",
  "key7": "2nEDTKmcpDS5MH4j1DATJ28s67rbxNpxb93fDntjttbZj7yB4bCbzTTxUAnqQzYqzgxC33KDuVgyTFAa1EKftmM6",
  "key8": "suzvjuYj7wPinor1nytzaHxYjUHsMKKX7Sb6BJMz6z9yAAFAuPioaSwHwhnyLpgQ1rmVjPM8SCC8a9S5vyFyXCL",
  "key9": "5uA6KYfBTgsqubabNPFMUPPxQ1b6RqCA95q4C5ktHNzgPvqTDJrYGBqMesLk398Lf7zAcRTPpNk1iAVzG5wfc1fF",
  "key10": "3QkrdwwFy6hkAWXKEH4fLvoo8zCeG5cmkBNvmsjQEm6dGtKKFfPduE6XQfbPEWktB3bZv34WttuCQYRHXPh96RLa",
  "key11": "5aeotPgwfD7D2c8r9EzoeMsUYZLJUYsvpozwhKUWUa73ixwCRnBjYkeCRdFYaPnitMywwjuiKuTKU8qnTnQ8SRBZ",
  "key12": "3trcWNeptNiVUVpcKRnw4VgSerRanERxqzab1H3sCLWsB5XujnKsB7Gd6mN4uUgfFMxUthMLXG1EuPNcJginpwWS",
  "key13": "2XZGRqG6Cms7ZmWYmduzNUM89FJvNFygDry7RkAEQJnkugg8n3VCM7iWUKPwZdYjXcvpGYavu3wVwxdrNNUSsy11",
  "key14": "2DMFmZRA8xusVZ3abPJXyLkXonP8wpXwg4BYsgyzjr2VdMUsCi2aRaYbwyQxQRh17aEXwmSDRpR5CMH4begqef5i",
  "key15": "4vVC7BEQ4LnRi3DBWUu25LZSwNHwmhz1547VGUtu3WVkFTcwdb5VnR5yGWASWQFiW22DCiBjjPPN69ruGpe2FeUx",
  "key16": "4j6Zz66gtD3x1fQE9XiL7eG6PqAwpeDz6zLmoVdDR2gUi1gsbjVqGgfaxd9bNXcVTKDooyTdvFPHHVhSy5J4yUV5",
  "key17": "5fqKZ3nULfHTtU7ZgGJSgeZ6CsrNXLwpd3k4dZ19nRf2hefaS8X4R79nvRzyzK372fAF1wfPURGEya8SK9Wf1Kmb",
  "key18": "26LRwnY7EL8LXEkRcuBjBebo6DSg5WVHHg4dooYmRn31oARHAmnar5HS27BG2k9EQg19zW2mLML5FUUgngc2JFWN",
  "key19": "2wPzsuAeYaivtJWdADaUTSPUvNrVpTiaqaVEbMsfKx7Lv6eJ1AShxj8H8FRYhyEBe4A6KNYfogPTSFjpMNwfVksd",
  "key20": "3dBKgLwPJdEDLjTFLXKkW6hVy68CuDwRvraoUUid9hybHDQ2CCYGGqJDVqMBhNLf1FaaRNVoaKidQCPuKBGqcyGx",
  "key21": "4u2Qqm4V4ZAcFMrPmuAfeUMrmRw8vPNjMZpoA2FCD7Fu5fyz9JHZgAohPUqNcmjNNDjTG5oTvnQeygryCvJcXyxk",
  "key22": "5jxBnCPYgk1eJ12F94GfFdSPPn5tANiPPyj2GsmNyZf9jNFUtG7Ktz6LjJRUXakDhiTkZhUpPo13mRqQDwjN2qDx",
  "key23": "qoYWaR94mYwm6hsdudRmknnnB3gGaq3dyAWxxDYwp8Cy17ekaow9pbwP3Lc6Bj5ovJ2qbDwpF9zxfetpXiTGz63",
  "key24": "3SUAcBciqnpWXJgHMFikSzZE85os3LEgk9KWM1Vav7X9nfJeH8LruVTbBuRsGwmH77BVP1ZW1et7mT7Tw9q3WRGj",
  "key25": "wjSNVrsFrqG6WKEYrhVaiFJTUCqprpXEcDhADFUivsk8BV65ixfsdKt1oA4W9uu8awfq8LmahU1auetGqLKsEhe",
  "key26": "3FUTnee1o7Dha9o6MEyRhVPrQ7K8geccUsZZkcng3K7Hgct6oWgQ4owoH4tQ2LmiQb2dWYh4hTjtvyC7zjmx4EC2",
  "key27": "LTW8RYJr6jB8rKuH6iRBJWaCkjrDdpvxMr5a7yjdXqWRssthBr2g4WwXFEoKyMztpWyHm9zbRgCY15b7hZL5u7z",
  "key28": "ycWubzYa7bQQ6knB8cob26NWty767GbUBK7XzCVyPZGtmuVWqz8Q57SdMbwxPcEfVnvz8goVAmKyrbhdT9y734y",
  "key29": "3er4Nqpdc8gGbwdGyG4UkvEtYG8XbD9wWJKH3c8jvqGQJzwPCSEHmyAcc7PrnwCEKHeDGh1z4A1ZDxDRmFVF13p9",
  "key30": "4jgquDFekW49wVZfq2qpdoe2VHobMjYBDbMi8BJiiysA7gEt39wjQPq3d9pyk2wSjo8xJYzKhfP5SsNmbXxLWYMX",
  "key31": "3kU13W4XuXmMVsSTkQtjryRGycRNRJ7qiEuSP3TSkuCNmo4HWT3PE7d3KiNvgyMPJf6VhrQ3kpHjrdeCLLT6ezvg",
  "key32": "5T9PunokK9hWFGfWysMvwonHkYu8ziqGd8BoGy47gqwdDTHaumRYisVzMy2M7y295oakLXCQius4zSZGAX3inbhk",
  "key33": "5779RdyqttZhz21opYXKdUayPYx1vDWZPotVmnDkDtrBd5naBzg1PDVYbsmZ6cBThwME41DBUXFkACH1vrGymtti",
  "key34": "ZXyTffGH9NwR8Fxxabvz2U4u5wWtV4rzBcrpu5cH8fbLeW5hdNKGDhikYE8tbHZpt28amEgxXAjSv2AJHKFavFe",
  "key35": "5HVR3FdLqs1G3Nb975rmmxT7M8uuVuuWrCTcw9wD6A4JzgJTTS5NY7yfvZ3aHzqaKpEw6Gryn1ADwQGpQ3ZpoXhE",
  "key36": "4y2sjutVn4mxZYePV6qRN7pemsNXYypftmAZJc2YMmZdJUf8eAh87GPA8HmE2bXKXBYAQGqj3K3jvea3zordCs5p",
  "key37": "4s9fHAbsZHEnTTYcryJunorRgTMUJsPthssjL8oXwYQpTLSzwbk1CVp9TmQTbE5zj3kQaGshDsoSrYDAQZTv3LNZ",
  "key38": "5qM1G3uTY1CwkYoDDXJD4zcbzi53mKK71jAftroUCUBvtprv4AsqX4S9zUN96eYGMZsaqxwhhyWZyjopiryYvuVX"
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
