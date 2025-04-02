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
    "5YuiYGDDFCrHFzhvEvwrqBqBkyGgXyXo12w8wxVkPN9hebAJnNLeL1o7NnHd2kHoCvaJbiu2HrCjd1GEk37shfjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYktcthWd8JRgVM5wJMsNLxggnD5XhrrDtDd27a9jVZJArp4voXPBsAroNvbFxfY6jnU2JTiyLKkVw42MMLEM4B",
  "key1": "2ehB5dYQQ9nMNSCvaKDZNXvcetBW8x5GcrCvnVvc5Bh4GMSwoL93PmtZpycziMtpo1bEeQ1njV4VE94yh5Yy8BV9",
  "key2": "KcuMFkrVCYh3VGJ6phU4ms8oWPf4waSa8YjB6UNTuKUq4rHZg1N58FeBZ4expzXaJjvEQSSLxXgYG1BYvKyWm6f",
  "key3": "5C2s7c2E4Fjp3rzrRFgM8F1jtGuUUbYEndCVMaQadsuXR1MkeHPyfuq4r3oT5HNjUg9Demxf7ttSDvXyUGpjC6v3",
  "key4": "55vFeSaPELv6bVsh4QWqXruEfMQhXNPNs1Fsa8royR9TJX74fN7ev3QLQ7jC3hhFf9ZdbB2vaJh6e3uQsJLss43J",
  "key5": "3mB2gH7UiBKeEDvbjS5WUUcWkk8u9ThHBMT99jNp6whBTrgPibvXJMXjNzjKbrWcaBjSXhatipaomRiMnoo7wKf4",
  "key6": "3LU6h6Z2mPTGs45qgaeu9z8EJKNMSyqyDhLtL56aS87K6JqRmFi5MwFkaUcYd3eVccWoENMrjU9D9RrdMo6YL3U6",
  "key7": "2nF8yn7r91on8YZJiRMXSTdSFhJ9pcafgug7JaZrNDDWSrb2EtSGy4CpMLr1UUkJz6Fv2NsdZvB2E79usq34Tr8e",
  "key8": "63nd943LoAG3i6gkv8Mvmfa7UKfhHiTBH3iUdwRG3ZWRdUV8CSQZFwhct3EwM7kBMoz6FG7VRFm4y5HkA3Gw9koa",
  "key9": "3Rhtaa3rsqAs85Mdkyb41RvBPrbbKLCVQxAH1eVmkRZiokQVi1DiVBvfWt7RiHMSTFCd44SoCrMHaSnEQ7vnXVuS",
  "key10": "3AwQLssfxd6CrisTqv9HwFj5BmC5h4kDFxUPzfTxU9vxpLzqv3aYjagZJBpdWvdxU7tAezPgD63aHdxB4xnNEx2k",
  "key11": "5sNc7L5XamnXoE7KHP1vzYdVBh53KdRLVeVZDCk3QVk1zCwvWqDobJLoiivwnMegVsUEtWqfcRzztMJcipAUvuk8",
  "key12": "hVzw6oQNJXbmkevfPW1wkVW7eVFXRzf3jAdwFs9mjtt1t8HvrWut9ZgjAQpUC2fcXYFiR3i8obo4zNDbuN81nQQ",
  "key13": "2SJZ4bgdWRWxHkoUC7Q1UFn485dEvyXELed81VZCuVEaSGomty3YUS9R1J8aTWGwtHT5NYk1xJeLGGQhprpRXdpU",
  "key14": "2EYBfNUgbRZNyycsDevnoreptVbaZMK34wtLsConsi1oze6CyVxpCBriJszoRkp8KCocG1zTZpQVJgLw1n7HoUzF",
  "key15": "suLdm2wzb5zoFpzuZm2i4CeoEdBanGBXkNsKdtiSeEfFhsu7n4YEn7CtVmN4QcsGC6W34Xvv7UrJfRGihtFCqRv",
  "key16": "w8s7A7fhmsToT8NctktNbfh49MXx7UmtMxvWk7irucqaRTHTqCjykWLH5ZSfi8NQ2r52vVJM615FQEyv3RtgmLK",
  "key17": "4zgXRLsipMUQACkY2JY2G3qh2DocQ7MsmcoD4y8jA2bYeTzx8vjtHvbK7tZA7bQkhucb6ACcoEDrL315a95kKHjR",
  "key18": "4g3j1LoP5Zb1N77MN1bVwJPKW6gVJiuqX8iuE7XVPVGnexxYBV8X6SA2wkaD4PnqtFEs8wabj72XxEgg2h3E9oqY",
  "key19": "3wP2D2cRYFjMxasevuiQk3pzcPPqJoXpSpkyc6p4sVLV3bqLW6Jyf53W9wQJ1GKEd8uCkiYfxQ6gcq68td7aYJUs",
  "key20": "rG7oroAgUt85jczrEj2EQkZzLM7EUDH2CbZJMsdbdHj3b8B9UpKFgquxQv2PbUSBHXNA359AHhcznq9xT77XQMp",
  "key21": "vpyCJrEyn6YTyCWbDWcx36EWJbsYZy8gw9AuCovd8Mtg8MKF9Z3XejapJG5KiZdYVBw4Sc8vk16pCoTSYrBnkvJ",
  "key22": "3z1ugTG9MhdV955Uss6Fi3JZpjP6H3ku9avxcuPMsqe85qc9NTbH5JjYEogswSBiGhRk2U2Wdr2QViPmxXULriTk",
  "key23": "MGBvYUxJLCfzjAEG9fut7DB6mJ23EbLnNKjpRhR9QqBbhCLmi7iXEaDgz7YAmEhrS3wUXS3G1bbusrdh73XuhnH",
  "key24": "FtZ2CUTttzesPqK9MdWEMqToJjQmUZc4M6ZMDiiPU8QXmpdfGLrBJUBXrsVew8mfZofJeArNDPWWQgk4TK7DTWr",
  "key25": "koe9ivrTAwr8Mt4oM3sJpsFyiUYKpHa3wuDAx2c7RRMkWpirATM7MTAYjaJy8MpBYw9KYxqSSenXrh2HkPoSkWM",
  "key26": "2hrU6RpoH9Mz7Vv9CB8qq9aP9tqGJr8mDuL4eYEY7PW9cWhQbEPHuhhMp1Xd5MqXxdiJTxvYrrkjHP6YSQewam5h",
  "key27": "79tdKd6vNTuxjPqEY6svhQ5bnQLk8VfsdaoEehYXgKBJAhG8x7byeXGJxxqy3cYbhR5nwJb8u3zhqWAsdRi6rEa",
  "key28": "2o12uNmvMp5fCUK7Sg9WShsESfheLufn4jHaV2pb68tM82fj6mR9SRiXg7RKZSxrFq8ZvTkhLdqWanMGYra4b5U5",
  "key29": "5HwzSJrRFDPK9nTAWJ6u8HZujpZRKrUpX2EvnKhUJEpUZrQpMLPWe7uswqY8LxZwTci5rJV3B24EAH4L29djerWy",
  "key30": "63sfaDWnuhmsqRQSzRGL4nPHaiBMNtbko87tG1zu1ajsHTKGqtpMys2eQdvsNKT8SxBRXpoijsXTTGds5SEbYRJX",
  "key31": "ZUzQ1AndguxcAyKeE53EkD9YJadad6WGHndCcbqE1MkKjT4uH72MJgz8UFP3W8Xh3GQx92oUn5N7NSA5XeLtwqm",
  "key32": "5LHyyDfhkWbsxLAY66LNviLkzqE5VmouVQX9czc4S57fDGY9jNF2WfZizqNPaCMwBNEGjwEo9CFwjv718zcFWx5x",
  "key33": "2LfbFhge46TaqfDFN2vCMz8jtMTtpWk8s4eE5YZQ8TH4BHNLAMyHBs7puxeMmgEBnjdj4FQUX1fEYBhvesr2Tqwn",
  "key34": "4yvs6SqmeEHyYstbzjXk1wsf62J9CM8GFyorGtZ46vpnz7FUMwo5naSvMMgzFXmomW4V3bhm41X1b8Cie89TgJYA",
  "key35": "5EDhCsBXMV6TxkmWUS13bKpK8yKi2ji4UhA3q22XT7GHTFC91nFC7jzvRB2jrWC8QSeuZoBeT5C8fGUxNxZtWCeK",
  "key36": "57m48qbjccQSUEHeWyFX97rLSNd7wbu7UAsmSfmohwsHWUmWrBBUVjyKQCU8tbssQq5op4Boo8KMBygxcTa61TMp",
  "key37": "5AybA5thRZu4nEaqvDysV21F4BaZxVHpAL4uVfTt96sSU3fzXoLh26bZhRLhYh4toNc32vvN6RzKEujmMfU9bkL6",
  "key38": "AuS9SU7VVE2NjSABf1egq5GuERUQKYyB8KY8uwGRxkESPrFT7Csm2CBbBDqvr7iU6LzRUG1hzi2YXUQjYtvFkwf",
  "key39": "23nYaZqSGBTLbJP9QC7GkfDV8MsaruH9NgZrgKxYYFmnzdzjWmPVXHnhEPu5o9BR9xZHd6FPLMnxzNbR25knoUkH",
  "key40": "2p6hXTcRuAX9GeBpjuyFz6aZbYYFYFspMRdy46wtA44q7a76L72suEpiJXGFsnyZ8HDpENjVGJvCEMFBw3XBFFmJ",
  "key41": "iQMyNfBnSSCtzA7JmuTQYHL8R65A8AXUnH68BK4VPtLFko1Z1uuqg9rNqqtt8xJSwvwy7XbDW3hLJGUdHazu6zw",
  "key42": "UiZFcwDJWSrBRAXxBJ6XwjFL2oeS83mr9uMAwTx4PPWthLeTe5eCPsHZjH7xGQngQ8UP7qhhiphoiiXLvm4A5Gt",
  "key43": "4hkt7idvVsUJgByfjrARye4dGY3p9VSYzeVRRzf2LhaqLqGNXzWCEmvmXdzoX6uFwXRKAmsK2g8VLsqWQfWGSvDW",
  "key44": "4Exdyb8gdakE6bGfRKeWiwm5mgJr4MRAsfY15Pz5FeNenryobXfA562A62ZuK5TRMCT15jZga4NNziNbj2xeDngP",
  "key45": "4UwX43GAWNpHhA5XSgQuSPhaptKHJnyVw99RN3CjA3Gd9CuvWpzLsvFb2Ksx24MMSBPGWeWXksdnPLmmjYs8TNWe",
  "key46": "uLhprGTFfTbSnAnXi5Zr1eUe6ahiyWMVeSvQXrzh9NPU3mbHJeNS5DQDEwjkStCcbisv4vXWyC7meDxSvXQyoz8"
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
