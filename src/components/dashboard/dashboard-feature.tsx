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
    "2kPvb37cao4wyEWWyRh7pjJ7A8mziPonFkCNr8eGh8PUDZrwzpEVex8g5vZKtKBB6EYwYdwtfNvn36tnzLAmDff3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dgCm7NrjW1SUmRS72TimuiFDhV48vcLSZCQAbrTnfjojfjnqcsXYsSrRCLsDz3cEWZqQ34E3dpPtJStbCS1tvfZ",
  "key1": "bQ3rCBDR2GTw4zCefLvXXkCotndi3xr6QEEYdWrVeo1s3TSuRGirsRXC1rGTYPViaC2f1Swmyg4PGhzCqUcgB4K",
  "key2": "59BECHQPMpNBxaEkwWegbSrCvj1D2uA3r4qsipsQ1YWkbHVyQGZCtaK5WraAp7CkRFh2FD9ENj8hv16nqM1jV2Pj",
  "key3": "629qHvVvwXgM5TgMUeYtqHZrh6EiG4yBHyvvCa3MBZ4uKcHYA6YiHZ7aWh2jkg8VCR4tTre5MA2q4XFU6BPynFAk",
  "key4": "5hYBzMoTSjNb9EoPrXQND24k7LGy65oRWSKsFM7igWdbo8pE6Uk4jNbzRrRXH3vS6ir9s5UaDuENcyuYZsQ1jXY1",
  "key5": "4LKjBe68gnVrj1JyNQcwnqiZvPYwCNh73isHaL66F7Xsxzhn74urSsVbG1Y1Fn9MDXwEw3DEvcGZwyxfc1qxRF34",
  "key6": "5RnNa5uvM6fzNQw8QJnmeXmFFpuB9TRmhKK6tLJzavS7BQkVtv9wHvBzubDEDrpkuY48h3geFoKEN9UnnK6bkMBm",
  "key7": "5xeqtf5fxzrKWZEaNRRAkCq7DwkQfLVwLKc8GwV7YCStd8xGnaQZsVT9TdiWzMEgJ12y1ZNYeYEPXbH1kvLvXwHQ",
  "key8": "5puJkwDLuKvWVeoJ3caZUYnBE1iunzTc5t9pigW9ig79XqgtgsCc8ZdLWKZXtaXoXQaMzdEo1fArieafdaDpnMXn",
  "key9": "4dkL9jDVFJHMhPzBcU75KLYty78edWcZBZSq29iVZif3AGRQtL7c6KDQP1D4e6iwPonLj2LzWfxcEZTbpboXLjrx",
  "key10": "5upzBth3AkKCybCq55UV27GWbMNdD7oR2oH59gEGSHAxZiuEwzchx36BN4HzywgRP4iuRryySzN8yRneEDSvhP9J",
  "key11": "3RcssGYwMU8MN9nsUH92sj2pVwPuJ2c1XAhRNEyEJ46xApxyEwAxdLcS3crn1g3gntFvf4DFTJ1ZsNE8qR3LdpJm",
  "key12": "2Pg3uaFWiSfrqpwDUTwayKheyBWAnEpzQi7t2rC7u6dwycCZs3RdMnwabMJovKYTdPAt59a8SLrexamosAeQLaQh",
  "key13": "3TjbNGR2f4m9VaMFJ9YgdnsRvTJ9bvzMRALrapPkxrXH2yy6e1kQLbYymWZeuaSmkbZ6RMvQVJp6b8ejTuZgiWKj",
  "key14": "MBovyB74GAxKM7K3DhQjgWVSvgBC1S4bAVsNi7SepnCU4Q8gRrKoaSypV2zbZJ8HsQnwNrRPC4sxWCbkYZfHQJX",
  "key15": "4Qijh7Q5jP2BjtEdW1TEGG6eEHiTmzD2jXPUq4DJAVg6fhG8nP6gfi2qKSHzSnZexYUpdn6FBvKpietyXH5Qzbng",
  "key16": "4MXL7LBFBqE9CoLFoyEnWXeWZtNUgdeGhrKaCV7jUVZhSMx95ZyNHd3ecoK22iifMaEfHowbYFLSkEemPsJnwqWz",
  "key17": "3EbQEJtC9LMqMX3zuNbhEPu4iC828VJyaXDvLgxbj26R8TqnokJAqBrHkqvcPhQxykG842xxLWadpyU8HNj9tRmm",
  "key18": "2GGxeaHsBrcebePyVTmgQLroKfMvXeN5u8yrv3UF2zPeL16XEF6TcRpvGEgBhUtsQP4PAKBkm1BrCkBxqcUyLmtj",
  "key19": "3DmZ7n5KihJy8R4tUnCcBwbS5q1Jd1nV2JFzgj2Y8qgamhBswAbwidrU9iWNFqgVtyX2YaYJhZgqKN6cTjy9CnfG",
  "key20": "4oK7AqsJZ3BuUEbXxGzS5RfQukpuH2JG7SXdUFMCgzmZB2L4WXWwBFGKHdBM24GRsWYPF8EhWG9bdY2NENQMuT1",
  "key21": "5KWvXjqfWTdE6hMvb3L7fkC8623o45QZKjPho7HKyUwihyRiuy7bAyd8qC8gr6rsD44bYHSC1j5EzJApQHBb4x91",
  "key22": "4CHueCerZwLsj8H63Gh3Dr2iGGd2gNGuPmdE6SM19aWXUic6N8nnSSVAqEZBYV46E3znTffUfDT8XiD5bh1sQjGW",
  "key23": "5B8qU67oicPKhUX4SfmjiKgZdo1TAgBg2Hp33JLi8QvWe3eNra2CdLm18jB2bpCwePFH1FYdHSV5TGeg3HXTsKbb",
  "key24": "gXjyccMud4A2t37CvvbJw61Sjbg1TUDKkmn8MB2RChpAKneugYS2Sf13MLoEgw8CM9uFrqXdnqzoxdu1okm3fDt",
  "key25": "5Md4e2UQcAgVyHZxjMSW32RTNq4THdJxD9he3bjTcsqKdE1GVCKqb6nge1AoHfoVkYKRy5u8kDYZHQ84k4ZMaJjD",
  "key26": "5Mp9aMqAFkuGxCR9FY1EevNSV6QCpXX4PATYdPZFLB42fRD8BtjgstThWAQ8udFAgmFP3AsqSmnDtShd9x7aD4mc",
  "key27": "51h1LM9cH4KuRVkd4dqokbfjRjruLiDX77oxmFyQ4Xprw1gTC1gHf7iQteVLrWiQNTstmdE965Haw1yuWayBp64H",
  "key28": "5EXNfFZk2WPNYq5SCDfpwq1djUTvjfcE3VJKjKQvtr4dR3MpjwXr5uwc9Ux2zJVfHFb2dpkBNYUacFif62irBTeK",
  "key29": "3u4fhH9GtWGnd2U1pDCGiq3r72BjkExUAanKNppkXj3Dyi3mtc9osNbiXbFkDHCZo9hm4mUCE4YBAdrp8CoPHvaN",
  "key30": "2W41Mq4j3fiQAvut7QDHgWPrD1n8k6CVRmXvuY7YXh1n33VZefU64DuuUq2RvT5HNamPfjAJRxDHmaTJrkhAVRGU",
  "key31": "5MSxVDJqDMTxigx6h1UKq5QRqBdzCk9QuR3w4WsyuNaQLxpU38vVeYgaDdGxDUgmJRN2YEzqK3ReBufpxmCDsKDP",
  "key32": "imgwgZAG5XXvjL8FwPNEF6JHSuwEyjUVXYGNTVpLNnpd3DedipF9Xn9PKEyEPAf6jPVz4pDJU8wkjrRJUcuurDx",
  "key33": "N5e8pUwjg9pbVCf88ABN6h13jU1zpNEojeC5xPD93KsCqBWyPDaGTqr2bN2Guft9hsDELw9s4AtFdjSMcX5D2M6",
  "key34": "5zfXPkWaVg29j4ba3Q5X43eXVyYUXduYA4wFXt8xeTsWxmtE5toMH5vj4L1Noni4qKUFnZabvmw8fVBAStSryF2J",
  "key35": "2tSLyud2cKodRq8ekrYeyqYfHcRKPLSQ33vJoEeKSu7JQsEuyvTZ22evmkFUPGSDSBL8SiV9ebyjLNkwrJ2RcXX1",
  "key36": "FwaM7szBY6pLeeuuSirto6PqgxPcTYay9TZM9t1v1SVpQ9Pw9xSZvXvb8vbotbFwbwbZXb8t1sSFSkxkUqnWEMG",
  "key37": "SeynjtaDnaw4xQqHRDgTAzpy97jgX2ex7p2TQ7qtyDLJU45jxFeytcXoPEfsMdqmGFji7UQ7hEPyzm3pN2nP4HQ",
  "key38": "4ijzZ91sS931XxSeNd8PAQtFGK6jzma2nYPaPPKkvgfETLvA6ouWYBp5ZPYtDK9Lmd2taKW5sdedWe8Rp2gVGTyh",
  "key39": "3XoZBFe8bv69xXpF85yj2KAzGYEFkGxhmHMLXDFDuU8ioeqoCTHVxUZRb8B4iSQ6qytr5UaVoF96J23bP8niCyNb",
  "key40": "4aBTWYZHiy6zn7tPPbPf5mrzks84gxBuLTtpD5dMPT5VYZNA6VqH4nScUu9w1pErsKfeZrucFfKjnDrK1gDWLri7",
  "key41": "3x6C7RjvXY6iwXxURVp1VjMfRW5SR3dqmmm6yCo7MkPVwpf5HroVnDqvLdUstd4qJGotjSWRQZcXBXWzuacNbRKs",
  "key42": "2gCHqWD7CxBx8BVzsZtbQxcfaoMtjYttTRnE8fJ6JMekf717NMxBpRFfFsKJgCA33eckBMwqUEMjtNU1pGzgyjmw",
  "key43": "4LBGvCtjksAa8i2BVDN8cGbxXFKqN5tRusVprVgMjkSudJoz4YFAmAmHgZwi4GaeW9T8BTnjQAzsxN7dnKLiQWuF",
  "key44": "4ourxpJSq3fohGFTCNKQUZz5SzveVEpZCtAF2VKSx8MG5JfNzpXYyo7kEmuYgQWMrDMWh1uCkbjQ5JnzNdLq4TLw",
  "key45": "2G9KDR9ZcqcpRxtQd4UniBEHFBwSP6TRAHJ1wKUGRtXaUNZ4s42cTdqqfdk2G27Vjj2cxzzkuaaXdHdq9dyGe7Sf"
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
