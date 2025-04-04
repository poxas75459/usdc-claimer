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
    "2yR7CMz7eSctnHVUjtMwNjt1RwxR5iUxAxLeTGMq95xvFszZrdqwTvhn6t6EmpffK1SssgrCfnszFZ3Q6k5kn5v4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELLyUmTa61TSPd32SXGn4DgY71UM4NnQtSvy9KgtPNm1V3PMg8cCYZjXsZcEfLL4adRh9Hg821DjF61uJLRG4vB",
  "key1": "5MLAVuTK7g1amHNGDJyz2Qy9QXrfUTUvmgYtRKdYM7xsppiXcm18eSoivpoZGUuzy1SSzgAkBbr41z7QWA7oU3DW",
  "key2": "2Cs8MAE6iyZQxqPEyDTGNQwwZJZ8d4ybCJn5EU7c6fxftbsrv1YSKDV4yfbwnSeR6rnH1TuHbe6AbCzK3KMx8sJS",
  "key3": "5cSvSgompnAqgn171kvwsSu2tLBjFXBBn3Azbi8WWXEmCZhUrvdhh1P8RdFpc8Y1JX7j6heh5L8RPEjRZto8vs2Z",
  "key4": "2qK6bB2ffE7fiH1MnGjYXCb6iEKcBewe8oWDSmfNRQwGssCJtxPVNbiNW73dvg44HxNvzXAhtJ58neXqFrMPLTVe",
  "key5": "2v1Q2uCF4CjMXq2Qv1QJ7iJt8G8dQgNqwJXnVvymtsJs4FsooqsxqrQs13Zau4Wu2GPLjdFq7981RZcSKTtYd9du",
  "key6": "2FdcovHxHecSVjibjritbcJKdZehoKaSSijKrhDiMjeKu6GaJYVBhjUJVEQJGBWFZow7Vb27dJT38GVRughssVY4",
  "key7": "kr7VoAhiAuLkBa2Zwxe5oSG4ntrsU6W9bdav8huQhz646L9oG1279awJ6egdchULnZQTTugSsaEZ6b9DwXg8W4u",
  "key8": "Cxhy2Qd58S9LqZDt7xhsiYpKaNr4TRQDF1M8N5sLex9BNSnLhAqDuMoaNBT5HTjdnkUjitbx2p95GSK5ZJjPuTM",
  "key9": "58iPemnBc2TjYTV4YkR3iUsAgwj8vrNXyVnRthrBvzJCqFyzbVzH9Gtu1W1x3MCAcEckoKhvahFPtjcF2d8GhNX7",
  "key10": "2RjxXM6ocUqyHMAYUfyF5a387p2eUdVVbqHm24cTcwsvYC4pY6h5LutHbFUBy8gGUdbYHdHc3QTAX8dKitHFkwJa",
  "key11": "4W2w9fVQDmLppLHYgvtW9zJ83kAyCoNVpo9bqWgHYwqx5joYzByQHzckyba734MEHG7r4JzXk55sdgbK9L1mnRve",
  "key12": "2aZzaAdkyH9eenypUG7kLmzPDjtMyi8RYnWAAJ1WC4g3CYdBCncHT6okudYGwhkjWbdjiW6ChNJXjPkyLtBaGZuL",
  "key13": "suc7vvuUQEk8P3ECQeC8U6e2FHpyTViU3LzYXjgDhDfN3iW2PKjpM2MFAmUtpumMGx9HwEAn4PRv4nNcKi2t1LH",
  "key14": "2Nsyx1YEmRBJrMRvsTunzUphqp1w9SZ3zGrWRKCE2rY3KyHmR4MX75xkShJnHvCxDi4NKpUzUXse4gkj5M4Xnu6a",
  "key15": "3tbq8g9P8n2Ct3aKykoLpAtMFj32qBuhbmkzKib8bWvZQ3MbJQzfMCwrjd8Y1seZwzPqvboqx4jiMkRWcGinii5L",
  "key16": "2QWi3mmeL7RXFNz7bZ9sd6Get3BByjZLF3fVxydsuooqJSVqJHmBR2hNJ5KsEXvsK5Gbp6wZ61yTfsNMzFGWjPam",
  "key17": "3FjvoDZ5FiWzivEotJu6L58gSfGYLRBPUAxZo1oVruEbfcoLta9qmyySMMb51Toz2HWtkuoXtpdaegpYXeJbZSTm",
  "key18": "z1bgiATTwUXMAi44Sdduto9qLhwM2gpedeKerybkQPtcQDtDD9g6Pxn6uCYvHHh2mt1WP5ewePD4TR1KzSgqgKb",
  "key19": "SEF4ckikvxNcVSjtPDFi9cVqvw6WhnZPFcgW4LgH1nizpXBoX1bGUz9ap6C5Z5crcRwP3BE9JRb7UuYgzDwrYno",
  "key20": "43rng7U21BGk7mxS2v2uxpSDxbEsjiUZm1yT17hWrnWs6GwgpwpTSghKsYFH9PAt6qnGG76CzL2jeaLaBkYT98mV",
  "key21": "2QT1vNpgLEBacQoqvWnahkjevvMeT9E2kQwGo2FYLUtDSEbUr1bo7SZvQLoLt3sUuTjP8eLJbMC57V1UKLkaVpTN",
  "key22": "5vYwDv7EJk2n8Ro3o7BJHAuz9TPFvu1D9oph7aWyWvvp9whn8rqbUokLbEDitJFJ75yjWqUuiko2JbPr64dnkDGz",
  "key23": "5WPVS5RxsxjRU2hZMWsAqRRicQtEGESB28atMAmGVM5u8VepQc72NbZwQhS7TFWFcrk6j8LsabacBiZiy8N6WmWF",
  "key24": "4QeyY8XDQu1skJzvuaHZo7QqCvcLwQpAkzPNriSjbmGK9MEG2ZureUfxESJUNFPbiBY1LkgzRVAg1g7E3pNNJx13",
  "key25": "3pmTFY4HA5aHgtUSApzdyVCWzAHZmJatFuL5riMs1pped4bjZoXPvAhpd7d7raGcPFQ71455m4FiVSyoaqnn5Ybq",
  "key26": "B5nijmRCVHSmGEViSLsV3AWACVrM3yp8jSMZJuctH7X596Em5bMkuz4NK9a7KZvDD9XBNKmctHCc1HRiKrpNvjc",
  "key27": "2EkxgNTdXJPy9Cf9Wn22497ahFX4cGAu7Dejm7frq4nmNoE9soJLCY73nGVkXFx4QriqWi88Tt2A9druAzC1kZEE",
  "key28": "Lub8jn64ZwEzqaNbZmu7EP1C4gqsM4XFLdCPTonmnDGrkraK8vFnmXKTsyrTvjAn1LAiRSqJPBnzcrpP39QVh6E",
  "key29": "mbRhmUisexdd41Jv1AFseSRztk9gNxBuTzfbUDoqhjsMtJcVxNNVjbvD4TEpid53QYRmKD6yPo77XPD2rCD1YJk",
  "key30": "5rzzs5ov2yVfNYJdNy2BnKLEbnhPRuYLKiyDopNcRvynwmBT5JJR6wC3xWapWqjfKSBmuw3UoyjwNVxBKV8aBmsn",
  "key31": "3VBVEzEd9w9mosdsk3b5Qv73eAAfLdpRyyPJHSQxT5yQTpXgykS5b5Wc5s5pXxSGUHY15PAd4YFuzRXSDV6Zoxb3",
  "key32": "22ezqj2c2mDaQAiUMaPy21W39mmV5cRUWbJm75V3Qkzz2nYbojaMbKvDg4pkpDFjbSzwuxw3FmQ4LjdqLNY9LWNU",
  "key33": "4fyiHugF31GeXqssNJAsBoScJ9iWMSMceAScWseBefZMBiZnjAJ7AAUne67vrUvMJ8uRqPv5z3Xx16MEnx4b1AEM",
  "key34": "cTdqnbUtUX5Ej2iSZooVKPBEsxopdNpxmRh4o6BadPDnvNkMi58thw3wDLm4j9i7ahvSBuARyAXfUvzvfrQacqP",
  "key35": "3yVY9dsw9uxfDTttFnurHoN6eoPfv3zEiM7HEEQL7asMhD9d4CfFHj2P7Y6pYwYwLZDFMnxFUrX4BW8gtncfdkjD",
  "key36": "4R9LYa9XrEBrKXMMWN8BCGQLdYdBCGr4V7kupVy4nekrgfFxsQGb3GyfaNdBuNMqkvCw4PkP36sBa5D5FQtGA1uK",
  "key37": "Nr4ykcSiR2tBsFAhsrZqfPa55iZjCHMPXSyh7PwmDD8wRu6vnmHDz1oDAKsnMserGuHL4PUnuTxqhqSLE8Q1aBk",
  "key38": "uNYuSoireci8kNXWKxXxm8U5ZGgJ4kRTLV3CVwxwECpH5xSjcyNVsvbhvJcSCozZJdpSXxivTUyHzkz3jW9bdNi",
  "key39": "2xb8efJyxKqstm2XDp4vpVWdRS4PT2MDV7L914Ti6bxXRb6RnQZkboG33BgFwNgQRWav8Q7EZJAEqio193mPk9Gz",
  "key40": "2KriuqWJpuFcopCQD4cPWkuBJYnz8Da6eSfCgP1vAaVvdwSroqoRweMjpUdc756bdGwWijbzK4rLnq99w7vAncFp",
  "key41": "3HaaZmP2qddqbBYpCEXNf4QQjQ7w3K7jWUCunnZmMHBF7a8x4mtrJopZ2REpNU4ZZYGmHsoLirGGMeBBkfnMQ8iA",
  "key42": "5Q72YGaYvd2fjxTne8A3yXGRfMJuXxwF3iUff3XTW6XZMDjiAfCVAR3CvwG8MrxtyLaVkcuTCG3Rz4FTbM6CSEG8",
  "key43": "D43A9z3e77KCTxg5A5ivKTamR3gCd864p7Rb2eQs3nGp5npKBBm6ypp46VRHDJLQb718PxCT4Tuysp2oG7qRbT9",
  "key44": "47PudUKTcDNzxXFBVxbxKETiU8T1KdFXn1TWZhKg9y1ba1PHzfpoZEuqpoEEdJjQiwfnhnueYAQiz7kmcX5p21Pd",
  "key45": "2eEMbnAVN6WJHBMhwxHfcvVGrqatRGnuefo6tjapwnUNtdmgXf1xn3i71DyXVkRFSfQRzcSrq4WuU515JrhEr3Da",
  "key46": "misx3MVkHrETqoUh4DWHFr8hMWPZx2RmuQD4JW2ske95mNp8Q5xkDvFNLp9Mb1q4CnFtLd17VYJwea1pDNKzNmE",
  "key47": "GS4xFbfSDJxkNFHFiqH3pyXXqnwmNtxidgeraA6PwpDsnLz2waoPkvrYiYohLvj98f9C7vqPQyjoJvXL2hXRfCE",
  "key48": "5PoGv5RYQeaPFNzKizHSBueJM2juuz9Rhxa7epapxSRA3ae8eFTFNvBTTmaycBjeS74ypfy6a95jB5dEYZgooh2S",
  "key49": "3Zkxtbbi3YjyNkWWfpjg2QgRw1N1k578iX2t3QsQvZTr4dfKAXAz25knfziPpPoydsrSHwPMN4eRx7m5NWKYGFxp"
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
