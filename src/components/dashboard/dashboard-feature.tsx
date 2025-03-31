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
    "4qUPHMTaNYMLqpjcjbebAWtZdGo2LBdHtBJ1rUt5w4nZPggdK6P626hKPNG2wiUPKyCmLJDQv1X3hS4q6SPiYe3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KRSNLEz2vnDcd2dQrVEN8dZx62QJ3rT2GNiaTuvd82x5gvCCDnnCZUeLzQGYk1Zm95u4PYFWNtDewJAHfVRRhsq",
  "key1": "Vaq75E1gHNtWzTeX5C5JeEtF12gYwwHuSyH8FwuKpGjmfKsXwZNyhwXHJo1ssigfmf5fGq1zipK5sjpKPLNXLjA",
  "key2": "Vv2Yo9DEAbvVzAx3kYxWSh67CUyY9dtRndPoVVaX9hHKMkNvb6kKx9mtbAV8pXoT8tu38TVgUqpyJ5Nc5NHmqVh",
  "key3": "En25NrdEY6FB2j4DoRxXtXoKN2wcc2oARWA4UdnVqqp4tEvf8NTwGFvqdzZVwBhbwHZcccsjx4VvEzHzscZnaBb",
  "key4": "34TzGwcaCeWsuwB2B6d8i4j3FvnuMrV8A1a9UBs5t7gdVFPjLF4WjR6zrr56Ri6UwQfpX3Eiax9BAYzkYTHpULL4",
  "key5": "3fwTkMuFYUq2nfzvsz6dmsdBcw3e7qZrhwvMe8uLPubEBBgTQQdpfBKAnbB1ntDvhrKH6m3UKmxfnrbbmpumfLnh",
  "key6": "2GVvFmgKg6GZmkgpxp7io2rJomVpbvHLTBe5HXLKXwWJrqekyQ51JK3vR9hfzggVQbf9gCp26yJ83PCijH1EXiah",
  "key7": "6uV9qqMHV9n6sXUwE68XAs4EM9D9RmU2R3kax64An7NZxDZ85ByUrQFkmZXgNt3e7s4FEMnDnomRweUmvcx6pHv",
  "key8": "5EfrHCgfZS7QT8WjrNJBFsxWTGRak9NoDVdGZ7AxL5MjDbHFu4t9GE1BCrfPGEo57kHxt93veNDo6TxH8c5RfMZH",
  "key9": "3QvkyXFmSPGAxjYhqZS4dC7cqWMt7WSDmH5ytc5npks5qr4P4jE7UE8B96Yg41pywoEsx74TKJkTGVxCj58YE35R",
  "key10": "4x5HMQjMDb5tQ4ZvqjE2HNjSnFKsRGD1fopw1kVjCWyUh92NvLnjJTM82bwpR2nNeavqCfkmeiTCJeaNyRVuFH8b",
  "key11": "sqsybjngsQtCNZyn8S96RVA6bnmy7UtknGPEuhdTAsP2g1BbUYn895YNqsVBDzZRNW3BcodhGTyJjpbcvRY7KFb",
  "key12": "2KQgfaG37Z6szAcMV2e5dX5Sn9puHYx6kMUDrtEyqq9FospMYRAJMYEX5Ct2zrcrgBKcUXk82UkaN5LBf9kC4b7Y",
  "key13": "2oXa9tq2jP4hmGnZXzUthrwXyjSe2rvmFcazEfVZMpDtJ4kPiCwHk75Sp4csEeEQb7sZqVJpopBnKGTmxrkZCfR6",
  "key14": "m1Rxmxv94uvZcP8qb3jHvZzjEab5n2F8L8FHGvcL3V4ATvkFMr2omyGKND4d2ccp9mHWBwZqKCthiPTVtUdFVL6",
  "key15": "4ihc6VDyb78evXmhDejPzaaagVDTS4ZxsPfgZVk8QvKtYR4guU4WDeRvjCYZAohPpcKpT5juT8mbqtz2qmkCsrEX",
  "key16": "3xow9vj7BRtw5bDhcdGe6RUEgfu9V4V4skC6cRPtuVLYBWpiGjEpb5aYkovoxQ4STy9xEuvxvLPZsmWWoNwRDrNf",
  "key17": "2FfbSUL1YCVu28P44gNakFfuk58taaoqDPpYB78TanpvDM6dCUZAHse5uuMrw3CCrBNB1xbJ9QZuwDApph1n8r99",
  "key18": "2B2Lqk6PnNyjRi4e3NYoinmJryi1Z6GXwpTgiJWgZFJC7HANzBeH7291MpEfnS8jtdZgLq8ja1q6FrputMKYJ8aX",
  "key19": "5RjNgaHcVk6w71NTKjoM8VJroJ8RmHy9XFdQp3k8X17PqMAP6DSzHuXrjQFCgpaQ3iC6Wa5AHMBLQ4wtBKjpTnNB",
  "key20": "2nNLtGq3jC6kZg32sW8X95Rer9ocSTBGAavw9wYWZn9atfg1nSN3hNn4yMqX9WEBZiNkd8zYqwWyvb4Mhxneisxx",
  "key21": "3nCLY5JLuj3XEBMaWu8kdYX9r2JT6jqeRdvDFnefdWF5k1NpSsXKTw2fYUnG1eBwuqjBnfALCbKEudbmJrJEFCkw",
  "key22": "3xryPBf5CKMLKCEuWKCnhvsX7jvTBviYVavvrhCdgNPY8kwHd14WoiKp47F2kUm5sAq8Kebqf4UMfeW9AyDSSmVH",
  "key23": "qtmhzSGFsQdFRPx54cfkfC2ZW7eSivEKG1PDAviAGsE1a4wWUYmyqywbLnPmR7qjW7zLXbov1UHmP6keCbq4mty",
  "key24": "3tNsGE2SBaze1XXj8Hv5tGjbpQrf1k3auNecbhyD79LcenLsxEfXNA6AzqxaaECyUDN2fYw3XPq2zHCEtUEKc4ZS",
  "key25": "2uWQPziyHTL5ac62nfnXReoSS6FojhzJFaSeWszja7gHssHYJuRQmKg4NkNuJGxP7EwF1KxdBp6TFo72jq6pUJFK",
  "key26": "4HttHBzamfKxpBYnFSFLDRWvMLyahkULwEE18pQkmgGGWBLZpg6sNdz34B4HqyLYCLWdsxtVbR7Pvfsb62sS6vCN",
  "key27": "2ghYXDgWukB6rWrQUsHpjwfLEH6Gyucn2UadRRkuG4gBQZCnvyTCRjzwQzKjqgpAV5hEcju2Uu1uadVinBkSvaNu",
  "key28": "3uAvVi44eQ4M6Tw2KByF6qNPDjjB1evxqTeXEhR1vBg9AdwLXYXWjEkTfZZrtwompXxsCH8oFKhx5UvCtQ8hJ6H9",
  "key29": "5sirgU77cMNhVmZCvr9eV2uLxKd3Rby6bYtbLrUpQrjUhM5XXX9sDXCDy3FZ1ix4QEgiXrBrHw29HV6LwLZd5cVv",
  "key30": "3Ckz8Jh9rp8gic85yL91WmdyxRtAzmPhLhaCydzcBkT5eq8zVorMthdhz9yaN4MdERvbnzvDPKFbQYinXY6wGeQK",
  "key31": "hx6Rf2BZRyzsHsZUXsM1QavaRTmYdPu9JXPHUmhtWpUiYrztwHTbkKsGtNQiqJS8vnHNRFp1rNACzwYYuF2Dp6U",
  "key32": "5NFhBodtFumhiauqp2jSd72f4ztvoMvNr8bLRfiR8y4MUAKP1bxue5rmPDf7VYWdrUxdNZKpWH3sppEsr5CkNdD1",
  "key33": "5VoNSLnh4XKSNLN1LWgrt1p2tQPB4Ep9p1b6v4wEa36Tx2u1uc2xD1awZTc9ZuyRdpkQrbifizqNKjxyzfAhhMfU",
  "key34": "4dRr8PpPztHrvDSxKPCGFDkoYE9dzmKm4a7jPTt77CyhZDg3Sq93vy9UdwU3g7x7Pn914gzFzyQmHChPJzBN5Bef",
  "key35": "4rnR99XVLuvRDunWUM2VZqBumCjSnv8JRJjMS3jZbvkXXNA5TvARnhncNkc5YsB6n5QTFmhGdbLUTvnxA6Brbni7",
  "key36": "3fZQi9b8MaNZoa27JC61JBmHb4JqKqUVfbeSfw3Y9rMY3ficEWVp7AGVbHQPMG7jKLoUAWwT5Uek5jVvtoV1H1gM",
  "key37": "qXN6ia2C3sF7CMNQo9jFBkRr694UNEgw4KgRdEmCzi4yX1vrtMpfBePWsC7RHxWG39WYZ42PPhw7XL3LTz272WN",
  "key38": "3aKGj4gwgyF4hsMLpSr5N2ZqDJrU42uQurqpVjJAmf7gMAHyxe3bDXf3qJk5JoVGGb9LQZnyboToxL8imXZNxiEX",
  "key39": "5f9Ps4qYT9NV7HvZAfp8VEZhFehBDoGkd4jjHXe7cGiAPpKWuhvEpNURRyXduBr8yXgHcN61iZo68zG29dJxKiCx",
  "key40": "2GLSmbgRKuxygAARUCar6vCXowiTyC7HBAiFQ7hbaCvpmefEQPAr4GyqHVMN7hse2hK91FLCdepdqwhiS2T8b5qB",
  "key41": "5L4y9sbMVuJUJdYmvctTSoRYVWcnxAXrQYbk3pC2sR6FF9RSZFiy3DC7hUcf1TDdvHrs2wUJeomCct6UxgrdTkTN",
  "key42": "4tLSRRdhwRdEGVymuoFeLZUfeSerBF1w1sT3siHUQ45XthxaW2MAQ2p8QWXZeNPXWpsYcbtv1Grs5iQcLcmEBqjc",
  "key43": "4vXLVrepdTrR2AXpsZqVAz3mCj4c3Z26h36nBJqEpiY93Q1p3TvqXqbHHDGDvsaBu2wSbXTGm7PmBwzJsaNaw1XP",
  "key44": "3mJ8JBwrGedcu6mSxYa2gr85bUSuvUXZhqLYuiEJ7fuoyYkAySYy6QnZNBdstBESgFfzPuQZnq1HQ8NdKqzsMMDD",
  "key45": "5J7TVe1YRtRyZsghtcDyimSdFZBiJy4VzkgVYYsC2SUz2ULUUTSpWqAiDZq3DL4cXhuNnnbqW1yCRdhJrQKnzENm",
  "key46": "2wVkte55Th6JvExiWaXXV7TFeWzSCd2FgbsXWqvaz9EgY7JmTZSDD4p76dGnFk1xzHQk2WCeJWTrSgbYnJMqBfke",
  "key47": "Z1iyhNsKDEYQiT1XjRh6mashgxS8fqFKqBXUrBoMQ9RkiHEYLNJsmk5QYt8ikfQqetKjEPyPWNm25qWRwmH8a88",
  "key48": "45i7Z4cQ4Kk9FrSqzBLC2kyqrMmt2McksQ4g86NuZDY3EaWiWgFskSqEumKxLmNbsPoJf7iGaUV2VJGNUq7BLSz1",
  "key49": "5e14BRoYxADuiCH2ysLCWW4FKgQjoUz2axmR6kkPUmudVUMUp7amfCxvzUuQuGzFY8vwr7JfktvWxfwuYTtwkF2S"
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
