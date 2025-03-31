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
    "4FYAcbRAnHdgP4Ts4GwhSZRCoMkh6PUCFNdbDdeArgRAFFTuhyvVyv4ynKDPuDA5uDcwTFtBamYcWW2oazsMu39m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64dFVXZXn5ybztqdXS7P5dsGn8awY9apZGngSsPSVstGBb8EuiBgiro8kwZY47Rx74s7EvEaybWS3RYRQcB7EYUq",
  "key1": "3x5n5aY9yqBndPxnWpSH7A4nK5UvSHZkct7N2E1uzJPmvZsrHxQiJGGW47GQNeFUFh1Bih6Hpybs2YUaMQFwM7is",
  "key2": "fEUL1m9dKgA1urSgLQ8J463qHR6t5nc2B6ZobXxDNHLgnwkY29sAeKj3qm66R6BEUaLQ2oJA4HMpbNdssTvgLLQ",
  "key3": "4ootkkP42bH6RXyz2RkFbFXsmVqUhrENqbGaumpi4cpAquezyCgeevbqzKvDU3uHpKPzzRvShX8coJYTjksZjtG4",
  "key4": "5AcdtE4VGRqm1KRxGQU8kRAjMuwQpon67iT4MaWsBZ48ijDyYgQKtkWUEDRWXEquFd7QzBuVNCYGuQUnzBsHVFGk",
  "key5": "aqUdTKFbVV854b319YD8ifYxn4nEKN3YwDkXL1zCAcwY1L8FULBsaA9F9ZGVXQW162G7Nu3w7v4EdZ5UVRBwhho",
  "key6": "3sgnXDy6o79hd8RqcBENRMa1nkcHLrwHTcZWckrwsP32E2ziAEfnT4DH8QkmxSwfnjBDGdBEVtf2NkfMBfT4t6Fy",
  "key7": "3geuW8nzfgyaALvdXzzh29Lrj9wBob8xLmUuyd4esBCYR8UkqefFTrqgfoi8CcLgbxyhpkL8TC55BHnwuwe2NrMA",
  "key8": "tyySEHQSdQvYZZijkrRrdDSLTfoAu4fAmtBAdrEcKV1X9TG4nyWF2AAUJ3C5x2wMLp1cMdMdp4k6ezitUuPk7Cf",
  "key9": "5PssNqis9Jc3QtSqMR7HC5YAZkE3X7UicoZdXF8dNWzLHZJv75r5GuZ4tZLG4g1XUx41G7WWR9JGv7D57BC2ptYd",
  "key10": "3DZeRbfNAaZSWGFfLvuAfw12aWTvDvLwKJ7J4i5x777H2p58YSnrtcgi3Gezp36YAzfawfuMrWrkR3GsbaoGqjv9",
  "key11": "3BEQMECm5i5rYAonuVnu41K92PjE7NQSFrvPybTpJ9ewdpmLnZyyVv3Z41vKLmT3ohm4nz8P4YU4AvsedNyBrW6F",
  "key12": "TGd6GSKTzLLqCNSQx6gAnmxigPKrFk766e4ECdB8j8qzv5Mmp39Ey1FXhYHfxpz19Yuyv6iPD3EtideXMAJ5kvk",
  "key13": "4UNwYkGaYfefp568MHcpq4bcxqoGhm7mFZcdkKUboEN6pdRjJeE3AyYcgvtmQS9aLD4RbLJY8MENDV7h49rsJrLD",
  "key14": "34irEZymZopZtUai5fuFWCRZCprtHco7G4p5ndRCyyXEjAGTsTu6HPthHRXMEfoeA1SGj8eUWxqeqKHQEfg4GRns",
  "key15": "4HYbK8MN1LmxPLUfqDZ3FWhkjUUCfvXa58G5Bbi9mV1rhqinxsd3evnvHsnu8WTmy3PZn1vyGcqFdFUnUFYjsBpL",
  "key16": "2QuhsNNJ45ER1GXc9PGACExvfJvJ5j7KhnWsKJmisQiBaqyBUyfWft4nbE5t5BR6FEQ3xoNFM9GCmKABGt8ysmqS",
  "key17": "4NvyPYStVDhPQ1jQ1F6icAkzAB8kpxzoT3frzdoQ6SpyHHeZ5wzNj724mSX1sSaibq3Uq2pNY98CCAx2dJCdmfMM",
  "key18": "41U3vi1kxPKPx3uB9kWtt1YLgv7y9iGwxL7CGiT3JkbpaGz4SAXTUDbpPJvgAkGoDKhduEN193mw164AbkFGcCXf",
  "key19": "2n2t9CiWaEWUeXpYc7CkUP7kwgBUtKTVXBowzoW6ocV8EFCHQN3Rmed3xmCqp6g7SfqfHMeq5hg48AXh3MSvvyFZ",
  "key20": "2iidPAxqiEkM2AeLNQtfqSEe1fshvzyPfMsB5uQc7nrNAJ26f5GSmFh6ZdAchY71yie21i7Ao6aWPq3JRi2AXFdw",
  "key21": "3aXqZ34CU3KRKHwCJhLvYjFDczU7RnfRTU5QuQigwWDd9n6CEDbsk23qfYbCm1GWAT59P4mzz7ySL9jsQAeigjT7",
  "key22": "3Rik1XVJyPi67EWSM1fAVW17pSeSndLWRu3KQU2rtUgsmHs1nmgUD2LMbYgJDKnYhBNWbM2GE1ofF5EKsEARrJni",
  "key23": "2RBcM3N3yzN8p3HTa5WooNfBi72P7orMLf5xwEiBQQBTnmw1adTy8DpuaX2gfzZg9n5jsdPLbNpG5ExzppRFckKC",
  "key24": "4JJkBVxhdMMTNTJXkD3G8ChJMcEpB1MQr6hB6hYuguneuEAF4ScZsHTGa5wqVsvY5hraU4wfdpicXhhfUXG7wGW6",
  "key25": "5xLL5q3cepxLJaAMrGcqWW39JF7JB8hoSaKpmUkL4Up6odwrPbapdqtfnsGcZUoLVRupqq3pcU586R9YDm2zy5Z5",
  "key26": "3dMsg3in3nM74P1hFFnPc2LeXQicTxpP1Sf8vdXEs96KVGbUF7gz5we8c7VtG1ExYExTpV46QHqPjcNujvQYpQ1B",
  "key27": "2n5AXQ7ZV1q7pCK2uWtnUNgBG4Z2sP1GjYL3QiEC52ysZ24Z3zqoH2fzYQ7wXjeHNSqrxCJnfKfJnz6ESsDRphNF",
  "key28": "2ByE5AR6ELKaw995NWzWZEH5TU9wRKTEt1xc5uNofyk2NyTLoPZWfFqcLdjSSKjUZ9vLrww9RmnKr2AenGaV9ACq",
  "key29": "3fANa4aJc9UQBckDsd6RoLpi9itHVTs8gjnVWishbtdgZHcDpsPzJGpBCJ2AQ4Cput31srWwmKZV458aaUbBSbq",
  "key30": "3Ht4ENmppDqnrPb9sA7B3ABZrPUM4ewjRPbxVdWg6hqgrCVmrNTemXVbcQ2G34hC1g1rBmR2JXQ41KtcCVaxJeC5",
  "key31": "2XJU9zfrsB6efHtfwYzx8D8zz5xcN52JQ98ESvgpoMzNM37uuEpvhAoh1xbS8ECbCWP2ZKfxSjnFbx7podbSeoY6",
  "key32": "5842MghBP3KYErWkKTFSiRwqx4QEC73Jdwz1F3JKphDZk1nNYEQBRidw4VfkXuJrSeZwMz1LbWQpNZUDf3EPHS6X",
  "key33": "2vUdAmg1wA1NVphBxjwFZCd4gdzKVagMhhGqk5PxHeXmwFHiXTv3magoeitA7E9F2gMRaX3ji5Tu3GuhHN6ESPy5",
  "key34": "5CYz62uxDHhgKiqgqBnQWQcB8HPos8CvQ1bqZH8xgsCTDEDuXyh2HK1YPrrF8HS5Cv32crkp63AQiFbxawQQBksQ",
  "key35": "qcXibdJtcPVYph41o8v2ECRxc43GYPfPoupcitmTrnJ1rd33U9Vhi1N74rkCM11UDuukQHWZYroFxvy9GqLGmfP",
  "key36": "XxQGfqwC8PEScJHXpD6AYnSbDgYZSpsmwcX3bFTiJnrGqSowwQJz9PW5Bs6dYgW5Przws1tQBdJQZ1RKNWEJu9w",
  "key37": "2HsA1oybYWEzggEZvCiw8pZCH2ap7Z5V5Sbu4Jp6WhRnXC6ohNt47nYJnWu63qB1zBVX75grV1GwzMMTyuFup1pk",
  "key38": "4g7RppG7GrEAdAEpcUPgqvH2FXn3Qs4FmdfFZRWWHx7JVAFLCj12aWfT5fDvzxuYuBzeL4CQkFXgB9wJ7PuocNbi",
  "key39": "Rp64bJvqDeKUXLpeyw2DhHKQPtymzjhjBu1RHwjkuP3kxDVumk9JpTwQsAuZYVRXhfF4Y2ZwiYtnecV7QrSisK6",
  "key40": "2tnBPcHFfcbwWgmwp2sFb8PbcxRrMzsdjL1aQtuvytoyVVv5pNSUGv342Bc4c7Qz3m7h9Hn13SS2FTaNxc1CihKB",
  "key41": "3XfFpoEU9ek26QgL3t7eVMHxygopvRCdDij1HBiWHCPpFrdJPXqZokGLX2orQLgDyxvMawj78Cm3QXTQp99bkP8T",
  "key42": "5VYditGbBCZZepzccXsj9mXyVBua574FhGyFEXpnozEjQHuAWFDZZRE88r3jt7spTvCTtFJj7wzRKWLLxhSvYSaX",
  "key43": "66YbsMKLGGLeRN4LpgBqYJC2kWoE9GwctfJ798UXa794Z8y4b3QbBppgpKDTiedFpy8s568viyusjqHxAuZLroDn",
  "key44": "XyxS8usR1tPcg9RZX3KHPgfvs632NU9J7sM671itabTn76aWXrB4iuGdVi92b6oaWLGGxspu67VkjVGqYcQfMyt",
  "key45": "2hq6Y8WZvAu3CzaU6z1pM5RumR7eJXFCWfiTJNVfiGEY7frp7FskcZbCaq88Zhswe7nRZ8WMwn6zdzNRdcSzNcEU",
  "key46": "KLAP2sihPh6sdFcuGrxxH2Bx79gH2y4VMqxRKr1koWrP3WtaeDZTTJg4TL7g9FVxiwrghzqRPL9vskZZ6t4GGfg"
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
