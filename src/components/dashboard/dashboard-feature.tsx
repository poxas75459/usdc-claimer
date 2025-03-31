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
    "5UmxDAJxwSsHMG65LUETKQ5V5bupQ8M4LSxMm7Ymu7LtNCbgmyBKp9aWRwkZkHdwrZSM95W9Zs6xiasdz9LhPuHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qrZUUqwrmLto5rd5d5H52qqhCrhcLbMijK9q9f86AiX9r7KmaUdkP8RkM2MV1TFptophfaFoS3pLhN4aS9eTDUb",
  "key1": "2KcdsqHQpBdMLpPgrP1LF1kjr2CFygDuZvaNGTK3G7KQVdQsoSUnFxWZhSRjCyF1HY62MNg1zFyPta6NBM8pwBkc",
  "key2": "5L8xodXfyq9weAj8sWtVrhjANT9Uu86ESskuVJKHyZ138qXPPGXa3Vce69U4MCxc7fc2L4QZTaqGMcY3EwtWJv1Q",
  "key3": "2g9W3dZPENdf7Qjqr5F87kxUgrMgvA7UmE939etsiSD3v3PogYFPiGbhTpsTXoCSfrLskUrwLSawySpqtQ5Hiz4G",
  "key4": "2ZG8MUe248wsG8dQPLKU2gLvw65JK7zqN7d36kyvHxCkZ8bHU39TWP9YzGPWvtLEfetxJ8j8b1Hwdrd4tMobA6DE",
  "key5": "4oBHASQ5he3uroCHGNzxQTGfnGBgpyNtrEPtGJxwnVqAP9VqPvn1GjFhCdq1PueSkc6yUuZ1uUALaCRB3vhcrYL2",
  "key6": "4vgJPUS1Xdt6SrAZtf2RsxkFomrnF1r6rkah8azGXCL3xNmqzcrbbUqASSWes4wJPAcQuQpvoq13h1PF3cpi1RKn",
  "key7": "5B1vLGtKZWp3BrzHKN5iJoMZRosQeFenCWbaDfrX9KsJn5SM1JTt8oqfrxu6iScTU3wKYxGHnMCqy3R13BxUDmUb",
  "key8": "2sEfBYbWnquNiwHHybQtpGTxqHpeW25HiHwcPTkw7jZYQTfWBLQi899X39YuYcJQ3UgbrZfg7cvGGTEDzAAoWs3L",
  "key9": "2EYBC2mV9L4tpf5g4LXjfNZNcQ2S56zVAz3Dkznux53UZGzozKo4i6TQBQ3MPJkC1RYwzkrJja2VQLGMqeBNeRwG",
  "key10": "5bQymjLPrftJDWhdv2WZmEBvPVcC3CMLLEyygGstc3FSJbJHJaPreGrUxGFdMXZKysZWPKExWsjeU6rbL7wkcKex",
  "key11": "NmJeNwn5ZrTzgrbt86PoudMnArfCZh4vSpdwsVC6PhGPzbFWwB7fbGANhx6D3Y8XdtoFYy2M26dpkrDKvX2VASP",
  "key12": "pdUHLnTUiT1KfUctC16cfPBpsm7m8cZ24ZSWH5YtZKebA9oRrHB3sV4ZDtymcGTzw3MY6UTLzRaHgUCN35rzRNK",
  "key13": "3DfZiUTaaqLes4JaqauRWVrJB67YX58NPxskpfoDymDz5esCw596f3g2EnG8Asa1pRgnKaD7KA2981jfQhxp7Jxc",
  "key14": "3xkdKzwSadwyxjkXW9CGrzWrEBcw7QB72HobYg7uvftkiWXYrLPSEr3TwpjYAB7vjUUuyQNQikzeNmtrwH2TrTsJ",
  "key15": "2neyfGoUzAEsNUAPDQnspKpRk63yvXifFMwA7do3os4tJd5UcTFLR9efA57PPUPG9WsMSqGzK8CDQmKfeZpjxmUC",
  "key16": "3GTnEVfJZB1T6F2X3nWRt9xasdopCHRBdrk5RnVgFd4zYixirXbY6wbmkc28Rd9KzWyYEiyjUaTwdTNeuvAVy2os",
  "key17": "Rcs4BxY7U3nHJMsjMMuCdhXppq29x9m1s7xfKgBNQt6qPF6sMvjJHfMmqoenYApDNphrhZUWAtacqu2RVGRL7Wr",
  "key18": "3TDZqSiVmUqHqXrFSeCQMCeiZ3pdLF19t6bRvcuj7BzS4vL9Lgm6ePHF55fcLxcbHYjxYc9ucExyf45TMBkhocN7",
  "key19": "5RM1ekenuMCCDu9F54h3gQ4uh8kSgqDtpCqz9NrHUoGiiQDAnStmNVi7jeBAsD3Z5QgEqbDL6YhP3Gv8ZYbpNHse",
  "key20": "qitpvEk2VSffmESr4DCurzXtvTwiUsLnp1kS91qsu6y1Wp5pBMS6v6HVKPmYe2gFtwPhDwQD2iz49vwYFS4KAxc",
  "key21": "5p3UuxNEZ3eTnJsDm6UjjGyNZMux7ZYGhP9CEWuiV8eURUdnhjgPL5aitwX7vut4wmtSahzGNDnqm1CHGZtjrQh2",
  "key22": "2X2ZMLgdaA7gXf8Pp5F6PiGYAeDuTgfn5Huq4GfBxie6TqjeDWzhebHQ1CPUYjPGQbnBFAaw8oqkZeXeCZFWu2VX",
  "key23": "4EkkvxMX4CrXMoxWKNubCgvYaeWzSYuFKRSXxsFiFK56wRTWECi6vRECzZjdc7jGfCEqwemxMTdYyndQAD2fBzNa",
  "key24": "4sSscf3Pf48Qkm1C6FqRAoNmJfrub2CLzDFrvwgPNRC5Tcz75gaZSwBz32URxM1QXsr3Y9tKkBYmaUbJSxgDhHBU",
  "key25": "qZkViDSqFhC9Yeb7r6XGhoJG3hZHEbbDa2LSgNng9amMZHrgj4FZW6rQ2yS2JLemdcfTMESWtvLBfrK4wipxidA",
  "key26": "5QwqDTVRswUXEeEfJDrmEpXpXEF7y7XeVPB6xLexxfVJCwW8hEaG2umJxXhYPZAwDQA1iUjwfBci3H8fXZrd1BLb",
  "key27": "4DijoWtVt4ma2ijoRbXkf56gQGHEc1t7JXiY6UacLqPMbKQ4zdHymc6JLJB6qCvw7FgHbhVxzKY5QBAGpXsJRFJ7",
  "key28": "2HXU3ELucrEYDeZSYY4u3UBEtjf8y59ppidEybcZxE33Rpd3Xy1rgkjR8qpS7fsLcX2DueKb9bwaUCq3wxc2bDHz",
  "key29": "5N8Wpx4u5JfJkdRxp7xgVL4jYptSb8xkXmiUfZVLy56vcQFAGXJYdxwF3WVGqZWaFUG8SUX4oho1eQV35LP6bBkY",
  "key30": "dtYsbCLrWF1KYE1wRtskkxbJMqLsH1SnG4QM5K1hq4CoZNV2xjx7GzYqA4PdLgNYZUvTqz7kNgPmgUmz4CiEfcT",
  "key31": "2T6LK3rGhchDedS9GGvtPrKfuf1o3Wsqki84WQaUjrLVUWcHSuREQiLQdqQMzeT9H44MwwMing4Syh1V5rZX9kDx",
  "key32": "4335Cih3SW4QwPfenoTxmaZEC8A5xvL99w7avZRJUAPJUdjwhMbW7n9jsLR8TzHdckhKpjsmtoFdasESodduMKG4",
  "key33": "4SU9zuFNY7o4MdmdpaQDgexggmHkbubdL5PBcLfi2dLEgf6EowQFQDVjsb5st9oTbmspziD5TmKs6tzjGvb4zVkE",
  "key34": "4eo4AvDnjG4CUDdPoXJ5477FN7WK1sd9utq1nobCtE7FkGVESz5rgXUeZE7yuxoUud5F84f3FNhciFbEvmeNqLzk",
  "key35": "5QjpQBhYc12c2MjSacyYK8KQvuyjHsk4KBLoqHR6aBCYpcs8C8BGFie2ExqRGNqDewrjC97Rq23dKFV6MuFit1br"
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
