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
    "qyNZMWw592FJnGTwXg5ea7RFXWuphNQLG1DBXrS7vxSX3dvw75f5ePtUtyDUVSVGnieqNuwc9XjjWSCjMNXaRev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCwsDi8ipGbkvd66U2mAQHq4ztUtpne8crGTEaAQUJPZziUW7QuLk8xsPaX5ZJc6ZZA7VjafhCMWmsTRB4xKWhs",
  "key1": "3WyyLDdMHroy7o1WiVybcqaVAGtTyNgvDo6Ly8U2kP8DHcUFf9mdhmTsEUpqP1s8VrYmp6mfGREMxY7soeNxZbxV",
  "key2": "66JBxRmdHQGvbicJ1M81RwkasTuC9FMEquXXbnD8EhC77rbdp6ZPxySKggZMX4jEH14VUda5VZLFtKkHqkopzYkB",
  "key3": "5azVdwqM9dhRGFUuMf2L9AiFBftb7z7cHHhH1ur6HJVGqs2xwSbqRdLzHaHg1YixNBUv2Xrb8ncoTSRLwXBVEX7X",
  "key4": "5sj9z3xVKygp83QqSkJBPXiwowe9JwYqznf1vHSnpnmWRuLvcnvL1f9Rq3jwB1t1zRsB3dyEN3UfETdP1Y7L7KYN",
  "key5": "2xBPosQnK7vHGmjeqLwsumsx646z8h42DYyzSD4UAhSURtC66Eok8AqDq3uFz1fkFaZhyK19gH4rKyMnoeyD1hQH",
  "key6": "3rPCy6eCqrLr8w2K689waWdH6cq6DgXAVBpYoniN9wP7tKPHbPAYZJeraU3soQE6NNSifLzrnVeccAYn3J816d9c",
  "key7": "5d3R9pLL3xcFsQfJHU9VCLfY1uWJnwLcevzsi5uhM3DGQVVTeQAUUKR4pPPuc4FNgPcLKZyeFbMR7aM4kyECnu82",
  "key8": "4SwzvdPMckdnXP1KRXZN2acmPjwiNaG7kVgbkvEhDnyz6m956uRPM1eQSugLwvFfRXUZi93EicAchxHjq7WNHmNM",
  "key9": "5TFMNciEsLNvYgnKcQn9RFJpYnYRbtjPqPGvNivhg5YurNm5yUnv289j4RtFmAGLYCU2dQLTovjdnptD5SYsUsvJ",
  "key10": "whwnWYodqoEJMMnwLjpMUeELM1Btd24jEVANPPQdDQEzux6TxvyraLzJPkgcqNFGQwhWkHVyAbxpkEQJ6QMjvTZ",
  "key11": "kfnctsLqiU2RvuiCptFnQ5Yx4StAm4d47TY3UEMS38igNc94Dc731VxATmzWF9VVM5RspAHt7xfFHoWY6A1SbJy",
  "key12": "5MGmwLBcAPpBNfWCvUZ3Mh8BggDKQfFopxhbH8eKXg37pz2XnLckjXyR5hv5Wzm4L9nu18VQ5pTj4PezWdWC2nwS",
  "key13": "5WQEJ6uHc15ryPu9HLUkv3ywAozkJMgQdjW2Gotg3QbCwLr9soGsc3DW9G5Cii7f8wnxYTT4QS5xmWwXk5y5zdF7",
  "key14": "4gu27HZwY8KKZ6oV7Naj5s81s23WYcjShmSbU7vT3tymmCAEyfSt94wxJ5Bvir6RXKGNKbbDGpaeVvJ89AunXM3y",
  "key15": "2M7joF7EUyNpLQF8QVebiME9VzKo89HPYJgWH9kQ498QCffBkEKwbaJ3vrGJjCUz2rfw6xRtyPJMsHitvUgMJqpM",
  "key16": "4R67uV4etjJ6ybfoFRuFfQPSZkF7fKfph32JewN2Wwd3VWxCwwp7KaVCzZb8fjkJMek2ssvJEZ5pi59G3QgJwThx",
  "key17": "3wNym42rGhS3LBuHreFpc19pYbgqcTygjEvSyihhYxYqwYNo1bzDKq93u2EnJia8jfMe6jm9ACfWjkKBb3M8avJ2",
  "key18": "3VsBiQHnTb4fB84pVhFGSRp1GX5YGyM2ZxtK9w3rGv1ZJAhJa4eSUNkhhqkHW9p4qThAaZxfh1kCQFNYEiS2FMXX",
  "key19": "HJp6eqgTZQMbZE5baV7My8koQiyfirbPTcVhjXxMVrBMqDPubTscER8jWUNjo2mad6TQBmipZK7QT6gtVszEF87",
  "key20": "5ghXrrBF71S2aawt6UcXg9jbCiVnMbLamzmUzCwtpar6tQn47KbchYjaFWn9Sj9RH9BSH58sENuR85SxLHaVv6tm",
  "key21": "3FdTotqzGAo2ZEye9iiFRXS9RnNHL22jDqk1JYvqTq44BS8hfa5qZJaWortSKggzE1ENs1vyQE4DQmC48ZJ3WMLL",
  "key22": "zff7zVaKrWrg4i5hD2NdM4Xn92JSetDZZP878pfy5cZ6aPEWgFLp4xvamgzvD5capQ3dbxXLu67USXrj1MwmLqJ",
  "key23": "5mUiVnbWCrY474NMVA4Gc69JpwK2YkhkvuUUcyESk3fXKaBRsk9be8M82NG47FRDyKaCv5Rbfiq4DjdFrhxDR5U5",
  "key24": "3t8jYBV7zxY4kxL2d7UBFQt9yG9oo6AJBG6cv1f5HWu1W3ModU4CpnDWBpsiSqsieMTAdA7gy1ZbXf2GkCtboH2c",
  "key25": "5en3XzjoGeAtkUcaB63BAEaHuwDtUc7zGhQXckYq6iw2NpAPVGATUChWVrJ6XbKCgM6KS489cWEhNimnzg88DAZD",
  "key26": "3Nd7aHgbpr6ytwak4PjMRa6KFHKp2ABuUDEVT3jgUuvN6igwcTvD929gGtP7AvmwbDrGpybXRBDDWKkHoAZJDsTb",
  "key27": "36LwGDPvsf8LJ4CKx4FsWgaVFXxo1cDuMrPHEeJDPPPWCpmb1vgVDoVZuwLBFfC23zimnAfewFNfwsRZHHca796b",
  "key28": "4KYVt2mgLFUJ9hBEhTJ9cPRTdr14RiHqyqqDESPCNowCfDXYBZnBV71jvd8h8be66gkfsKdUpg5dvgVSimY2uC75",
  "key29": "4tbSDzLmKCkd8wDutYbCSFapW7B72MfWRdPi5NoA4S6pgNiMzoWUh8Ubg8Rb3FzC1jSkFz4GdRDWwFbsrkqbi99X",
  "key30": "2LyP4GR9WTXZraQZ8QVFFUSkPKut2qJAmvkpPyLkK9GZ9tsbNyu4mq5TFPLBRR3rdeqDsXjWDju1ThZt9QTYh3DE",
  "key31": "61sEWXdAdf3rbU5HPWkq1R6UkMvTjHCVmrwJUyta5wmz3yFNdqdkYFh2U5LWajvMXR2ccdcnwT37DfwPy9hB4XFy",
  "key32": "5EJeDXJDtCwV5pgS8u7cyDZdzgdzFAKsrvE6ByuJR4LzdE7MQT4fhswY8NGhdp1bKamboFc2dMiNGHM43vJGgzse",
  "key33": "4erRkixkUqCMSfuU3RChANivieq7VkfDog4Ax16Q6kZSpfnRDJV4G88GgGn9udUTrs4khRn9GqsFC6GKANJTXW4a",
  "key34": "PWmQGzDa29jPabZqxysS4DxPEPzb47if917HeueeZQfmoQ9VaGa3gea8gK448RwRYP2JJit7p6s5UTWe53SwRes",
  "key35": "wV8LY5WECb1bSbuUeWQvVSYazwBUgkLtGvkfBaYWvAKXd5tMmfMCkWrQsS5CD7z9WyQ1W7NMcFLc5JCUnU2vt8h",
  "key36": "5Q79gVk3RBsanuMCzFxuT2EDjGj2EXHASQyWTKJSkLtndafovVvEpnZVuPRMUqJnEnTdEJz5ZhPign2YLaLwAKDC",
  "key37": "Sv4mZqdtrEjCpxD7dqQra9g5PnGDZE3mJwVArs1pdv4X4EZpxdPWLZcRCBFWwLkLL3bLXipsPivTnzTALGcKJnu",
  "key38": "2jqc1b4bxNgC5pT9CiRFKZ7tUE5prpWFAUbCBPsgGx4HBDDH2Y6naqbvju3Wbq8C8cjTnUra5KUEdZttqBwUx5U5",
  "key39": "fNTR9UUVi8Jsx7pNW9Z95XYHmcoXmwaibPNyAW47vwFch1s1LyAsrcpjpmPbogAML3fANf3ah7mxPurEdAudevv"
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
