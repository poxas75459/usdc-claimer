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
    "2an7aQNrezpYKcTaukajSuCQ24KpW89LCZCHryvsLdtEev5DKK2CVNPCgZduSuEsrm9jWdk6CjYV1cbDApq5eS6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Kuf5iAJewBNJjKvRCvZhhiYneR87HYRGmomYZHLewMQZo8Faw8V1ZuDoisBs4ZcHDPqLzmiu3wVyB1QMBv7ZCv",
  "key1": "3tZwNzuNUK8AUkBVegNMYQk6Fs99tN1dKdTdK53SozxkG8eqrj5VP8bhiJ7RKBoHVgYTeK1gWNYqeHMbuLNDR4wm",
  "key2": "3NmWLadJ1zjHR3mn4c6cFajDhktM7T32YkedLP7beHhzoXNFVrw52F7yDFmk4xTJ7PSfGuDJCkVJ7pc8HYG1aGiV",
  "key3": "4PMPSbp1UVNCSvafSwePpseymM43CC6iipn38VWnbq5UN3oMZynEnYwkDCioq19ymy6TrGHXBAbjPhZqsfKEseYP",
  "key4": "2ifpKKu2B8dJQbDfboQ2E1kDEzcWnwd4cXFAnewTA74GxXZGQabdkMowPUYypr1RVWqpRXxTcRTRkcQsrr5nzprh",
  "key5": "4T29GR1v8RxmMoYMsXCU4bx1G7iR2heaDG3HqqkxnneaAPNzSTxtZBjWJyLt11uRxG8qYA3YzPpcFxk7GKR2nKNQ",
  "key6": "4DEkwRVbXxChqafXdMcQv6K1imdm72nq7JrbJ2nLK1oKFowzPrXV891hxeF2tTA6YMRMDDocMtiiEmbX9QQYb2oX",
  "key7": "4cMeUdUwUuXc4YRScpdQLNbUdrkepFek97yaFXoBF5ushDC1N2ejRWc3pJWeWmoszPgV4tBDvCdoYaQnS2eCobAC",
  "key8": "5HnND5aUuEcAiX89UCTqYvNjWfvnKX9hs89KhDyhzxT3CHZDX5ZfYtBChSnDH2YRRxobHCTRkqiPFDebJfXH6dLf",
  "key9": "4LLpzN85JdoVMEvY34gn2PixRin2KVidWU3vAbMqR4JJPqk7MWeamG5gWBksCRZToQBpgLvgLNwu3Kp9cYeoDcqz",
  "key10": "28GSsoigoMyV7pTp78vSfjkVoJAJiTdAv1MQkf1evGayHpbPEAWuScsHvntRBHpdFkdnsQ6u2q6LGfeFbG3iGzMj",
  "key11": "3dPXoN2PCrrtP4ocbPVMbD5vM3MWSMPQ2ohKa4usxH9y53gH2sKbN27KW5WXfyQrh7X9wgYT3uRPR6nTUaBMfdEz",
  "key12": "tHLrLCTGvjnQ6zZsYYeQsT9ZacBvQijFH2PDt525Fw9WXwySBFfbyYrhWC6tYordwoaqZ4su9ZK63TRDbkMjper",
  "key13": "5uGR2zHSAMApAEd5SYoo8Dy7rixZ2SWgsoNRTSVCXVDYkVzpDpwnEyBgQ16zoUounz4EK7nCZL6oSwSM1bqU28rm",
  "key14": "4k1wBAMj7pL71m89Rx99TMZVLfQxvwCATKHdpjTW9EvWCCNwtWdgq6cyvpsqUsXv6wDPa2RR8RMkaufuFTpbdxPr",
  "key15": "vY2h2kHp6Cfm7HTxx1zvJpiFmQWYjJPVxu2ygZrUEb99rFQfwWDXTHp22Szy94FYaLSu524j4DZfs9KyXgwXe2d",
  "key16": "65LxDeWQ2Griz4VMkoQ6QACsmCqjXJbZtWb4kNuNifAF5AL6rcvPF4Hgvana5a3oweddFh6pXMSELSHVQ9e1s4ZB",
  "key17": "4k4vEGqeZ9ZrqYVpeqqUAmjM7nGqFRadsQU67vxkZmS2T8eJMBCUxaAu22oeYYFUH7XGeTA2RJt92UwXVUtMDsbd",
  "key18": "GinfiKupvB3wjhEmQK67AtDmMadL46vBmhVZMZVuuq2dpyyQqLjpGYgNrJKWduxLMadJSprGEpin1oeGrA3USYA",
  "key19": "5qv1rtmzua68qhFdX39m2Te1mroLzxSVmJQD2NBVx1q58wvWg5BhC5fV96XHQ9gMBvk5No11WTNJNQnkumDQezr5",
  "key20": "5qTgijmhcwBo8dr9bMN9yCmV3Dr5hBBDeCJzH8Sd9yQNbcpf7bF84puCNoFXofv3RFrcPbjo3Wya8nBnyPXLpZdd",
  "key21": "2AArVbWfXv2txUyHZJ1FuKbKVsNapm1WygpUGunsDeXXJ8feRswumHvUUgRYdJJN3Pgjm4bnCmiJUuciC2myagMd",
  "key22": "zSdn6aHBJHNEFCEBQD9yMjU91XM9qNwCVE6z76pkED22hjQDHczHCs2hYrRLpMBM7ExjZUPqYFCLg3WnuWmv4we",
  "key23": "M9jQ8G87XE3XENZu8N1bJuKUiEGv3Pxs2nH13tdE3JFr7y7w2LuToDzr811twV4wuMMBngiCwjYmWsTGVdeTJjm",
  "key24": "3wKq9gPVz9VJ8zKh2FdSqHeMrubtPMZEx5vYk8npgYRiN9fgS3JeC2g3sJYFKvB8Wya8FRcDs4pYK9rLsMGE4NJb",
  "key25": "61QjpXWBupRKwgtBP5155mcciaPmioL7nDrrv49ydsaPkvdqR4ZyAwbwLFz2KiA6tzZuZmSWmt21zNUDRjSunaYj",
  "key26": "LB8UbExdhANg8k9W8k74XJc4u9sn7XxrDNgMp5Rf5esGZcEirHUp9RMTVyEynwgK5BPBZLhH2fpoHtBaAqdAdTf",
  "key27": "4Vs7qd62KNEYdTutZDJYbCscCXb7A5yytWP7kFvS5aHt2K5VitKB3rdYewivtYDGFKwMkNtW4BbrhL8225UVKb6S",
  "key28": "3kzLsyVrmeEK4kfFco3sJiM9cJounQVgvVkswxFS2G4bjRyTbuQoXyEFr49yoGkmrJR9qyczHijMUCEVYzkVNcva",
  "key29": "3f7dr7ZhCsU3Z8Gsnhze6ZE24o8nepSvdoak3VvJjLux6km7d73rQosUxPJTWtAHjMrJuLTeJVXwq2xkmVxxFeBS",
  "key30": "2aXL7smrWL6DnPrWxoSXm7q4C9xSRYPPJ5gCSxG2TfNpodcpbbEF65kVKLXseT69uzsshv3pfes15XDTuhjqQ1Bz",
  "key31": "4gPpyw5VPDXBLYsWC4C9P3Z5jRWyoUjYD4nvWo9TgU6TZBJq2XrA6DaX2ywNz87qkxwfMmnfQwsypsyuAPPRpmRm",
  "key32": "3LuLueTQjafNenxpRv5KTYeYmFvQdkJucNW9Mdz4Gcq3uyqdxRCdSZnMZ3XPpn7oaWe1wRcMo3SYTL5pQJe6Eayk",
  "key33": "63VA9uvmX5rDoHbrTKS6vJfFrwQ865GkLkf9FJD1qKqUq47ssreVNDD6nLKjtN9qv4LKDTCJrR8Nnm9LZV53qEHY",
  "key34": "34neDyRZunTQfnGBRLp6C3i1xLg66o6Ns2igVMgLMmemebSE41MeBbcqkRosawf5Xb3GbGBK4yxuLFtWsXT8zuaJ",
  "key35": "5vjm4kVb5HsXhjM1rCb2AGedjTTJxwVqmQLv81svm3VoXQS1rNf6RR2kiSfQXoU7C2fFae8Qr52F2zCD3PUqTzgb"
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
