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
    "5yWVu5c1Te7VRAxEFbopkpAbnpVNcaDjqM9dL85Vp7TBLUzfr9WsLpLLJuDwyvGARXeBTpXdPx7xK43XoSBrt4Dg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqhZUnN3dNwwgrpAXTmYtbwq9fyVwTfWAk6qE33fgGMuxKSfUY7bZWAjt7PqdQr5SHNWVwjVEGYFJfxgwDcA6yz",
  "key1": "5Ec2ou5txAesq9hXrykDhgb19jBnkvo1XXnfu5gvqhDZGSGAZxGCpxkCYAJEoKJZMyD4cUtg8p8S7bvcdkcqYXbF",
  "key2": "2kUNL3UGtjZv9r1iXgnMyL8ePtK84X79ryLBaxb5ZVVPoXghusKmA58JgXrfx19fGRWmdJfDkkDdg8vZrF5g2vHZ",
  "key3": "7DwTVhywPbBwHYC9jmSuyAdEXfzbo4Viaw8s771qyugXvsavFD3dRGHhKM9M7cxtx4P9dWJ3RaENYapwTT1Tz7U",
  "key4": "4nu9CWx31tMqBF3KGWiwgGzg7dqtorT9bd37Wzps9RiDqKfEEB8ouayPVhnxj6BpGAXNinPaXmJkRRcz1c8qggMX",
  "key5": "woe4sMvnKBJ9R3nzHC3K5gatDRT28hcc78eNe367oaHRxaEkeajSd4r64M1H1gLyzJmwtq5pcpngzZsTCWPtw18",
  "key6": "3F9hZRa2Sn661t9h8Xo7qzLnaDRDtEJ1oFZ4f6bWuFPD1NpTft6DLQtZvdZKes7AQZsZzupTqgamqncA1qByePVg",
  "key7": "2JREEN1aeve1cuyURMw7ft9jiR8B8yZvuFmTrHw99jNJxpeoq6Jty5Q48s28jzd8S9WwmuSmcsUKS9TwvrX2emSH",
  "key8": "sVCRDzE1MYoKKZfBetnRX7b1CheH6P58LNTMPHZc8aoG76nj1JqxPkYSzFDjwSfPNWp1Uua4WjYXuYqodgKsv1C",
  "key9": "31LmqRViPn9jN4PeLacdM4buR8Cs7FVBPTckTNTNnWkx6HUVmarpeHv2cNojWECsvy5VLwfJ3bHaJGEEt5UPeBdc",
  "key10": "HmUZFwPbMjhNPGkxh3K3Qm8USc7aVq9bQdHxvKuXPHd1moLvnFd5GQSFmYnvK7mYHvR17wBVzGYsun6aB4dgEtq",
  "key11": "2XCJbwKeYsPXaEGLUNJzxvkEqEf9sApoi1zgQUFntEUH29nckHuP5YzDwQLxiUjZcbv6Wmx9SAkNegqQRT3sSyGM",
  "key12": "3maUktKz16z2zZTmmSLzbLVxLywin35HPjDE4r1Ww27WnbmrtimPp9rCZPbN1akBPuafWk4AkPb2EorDy3Uw7Yry",
  "key13": "4GERc7Hf7g7RJmaPPCoqPwjQ7u1MkhCaAQD1SDivy3LCx9LfYKbKzqCw34xnpqLPRC6CrdtJ9iAaAzSysmXhGLP1",
  "key14": "5ABnwzXWbrUHKMTRCrGM3QvNHKs1B63Jv7RN9uAhKB7QP8xP7Lfa2bmHycV4pupigLYTc5c4RV3UTKPdspwUxJXD",
  "key15": "7wQ4WPQSuop5towJK6eYsHxRU7zp4SHHEAyPnEQ2HsxMBqj3PUdc4zV2MxJJS3ZYsBELWFmXFKBBczL5GEFfzxV",
  "key16": "2R8cgy2qcdiYXoDVV1SAM7tCiu4Rw9r354Cxg93kzUdjahUPu3V53itWSWom7rDuz2yHRGnquNdNLjCwdcNrNWtW",
  "key17": "3gvtgH4jZcrpqhrCcoyotqsAzidxW8QwDtw7e3j3TGztdCXtMJUKFURB6368J51SDfd2UnMVrmoPwiuDrVfTaV71",
  "key18": "24ZchnPVNFVHJodsVCRS5GAz6uQdme2P1pdCFVNRVbqC2CD8L5s5yPBH8qi7YeUdW49zngypvn9JSPWP7jUHXJ7v",
  "key19": "5ycYYJTxxAyFjuov3P7bfGkYBqYk42YS948cTmMbGeE41QDAhNoAe92quW1D4ovteLd9xH12WfiWBqAWadmbJ2ri",
  "key20": "3JkfxGpXhcqxFxeQCbcCb5p2C4BUGDq7mUigHCP8jqK7PtHPDDgE5Bf11jAXiR7WfasmpDXZidWho5YG8UG8e45e",
  "key21": "5UjNKihDQ4QFBdPidxU8pGXSvj5R3W3H9iA6XmEeNFXP155F42c73r9HYrNJKxR7qkNhUcj4MjKzwN4mKKaQ9dvr",
  "key22": "4HHhK62GPt1YG9zqF9sDu47uqWqcnRuSqgHeWENqN3B3nNWXVnm4qDsUcRrRghBkMeWSVyWvu9fR5um8VHPcmiJA",
  "key23": "FTrxNwB1kb2UZ58YUQJNU3smWDTQcWzA81ByyasmDFuUAdRKEpYMykNwdr4GeKWWdv4koZpHzJ1VpnMs8b6Wg55",
  "key24": "3QR8uXKFgYTbvT6TQqkEZmP2PxdtsjvtB8Qtx4YVFo7ChBeU7KKFmxyJPfTMgCVxAt75Eew86doK5NjSbiXAzHBf",
  "key25": "3wHxrrZ1xGEpshe7BTSvMUPcJCTnrpeZckhHVBtJqceGV91JMUwFimeP1uHA8mnkz9okStWR961pLZQ62Bn8yXBa",
  "key26": "s4vEajpbvS3kY9Mjc9H5BhKJGzfGbf3SHXkRjw9vuy2AY1coQioKJnMyMrx8sNEu3sCsRnazrFJacBUFhzYhoSb",
  "key27": "2p9XDRbPDCMTvEVsR9sX4XMJD4nBPwK8k7yrqC1FrKFgEWu1WKWaFVNfmRRNiX4BxYQVhyze19rscHqbB8hUYGiS",
  "key28": "37Uw6VrjgWxFzdWFYiz3JrKK6PVnzCYpTGMhZSd2sndcqRcZprahczXcSJoB7ESdXD6kh9dE3hG8fFnLK8iyS9cR",
  "key29": "G1ogKysveuMancwL2oRjG8ZnUFHrdYFqFFrQMKEAGWa5VHxMTwHAEGHaq96uyKZBF48c3CBj9UsbmvvmArh3mkF",
  "key30": "35o64ztX1AH7Cs8L7iPMrWNhop7YFm438phrdw5ZRDtfGwDiQ5ph7kombMEfQC9nRdrhcgDGSyVzSq9RaYFMD1T2",
  "key31": "4zPhmpH7tAPhweXirvvRwy9tsr2zJF9EFF7ZeRiwNguu89jJfsBqw7nvCBtTc8qXQfPSvqWor3HGqWLZ3poMyFqR",
  "key32": "9gAywkd2NDn5q4A7ZS771VD21Fi8ToLY4FvyP59JwBisQ13xQBFR1GZx6YnftAX5p2HKxwmraNMkPkg33gX3CFT",
  "key33": "3jBGvXnce1jPujASUAy32xwTkaZ7n4Z3bdWHo9uWyJbwF5hZdrA5EidWXbDYsakTpvkZ7GuPw9aTDBxXCifb5fYg",
  "key34": "5VU2XG2mavQAvxVhdGrgtmDmdRqEujxq12y7EDrWMyxjfJbTCQPjUyRdHvcg3yS2kj7nTGPxwY2Cs8EWbLshuBc2",
  "key35": "a5PhRnbXbFF2eQm18xKoPnn93mTmUbZLvAip3DUAmdJ6qFk4fQ6kfrEknq9dB54Cx9Da5M5hsEoCr1tJkSgaPbf",
  "key36": "HjHgwchj8BAnXjoRvvJUX3mcYWJbfsxmezZEjDjsWv8jy9zCRv3vDve625cHdGwQyc25CJDxPYMtcbhrzV1itKQ",
  "key37": "bQHp98yEGnUkEZs9Rz3ThVMFeYqksV76CN9ADEUFt2BoBctw6RWhX4WcSmBwHcrtYJ2Bu3SC2LdFtEM5TzQrv2B",
  "key38": "pdhyZboiCCNaRqTcsPrV7R9b6r9MATFVjM9HpF1wCS4zx9EiYm43o8FXeqB5Qt7VzH5aZbUexxMGFHKSmR593Jf",
  "key39": "4qLHwQBNQv7xvdAUYDcecXHdq77Pwh9zdG6jXPLg41y6DgUytRWQwHXo7jCDhhFXMFSv7LvBU9hgdZc7G6Nuwd6u"
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
