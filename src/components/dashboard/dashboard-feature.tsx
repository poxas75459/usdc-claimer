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
    "5RTxDdVTygYQfmh2MRc84oSr7w6XH8hDiUhBESpCMiz3MnZi6k33BM4JxvRosLQ6b7nfJtQcNfZppGS6eWc5gvkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QspniTkAUbAb8pNDPAgABih6N9UN698vJ5PQz686w38xj2BqhqZBgptLVeBtjMCmsLzeuToiU6gdFzxsWkiXYh4",
  "key1": "4jE8Qb8FeaePYmVKSRxnzKGjoVnd7utb64aBBSn5trwDKh2tQriEdvzsHwbyJqsr4uyvq2Yc7bhXVyPSCAvCTPfc",
  "key2": "2o5Pz5VpBNjDLfndFr1qE855weVKSQxAcFUqakfN75HwwCxQTqbThpH8gDMCchx1qcfn8ohpDHetZ13N98pQAHnv",
  "key3": "3bHzHyfN7WZgEu5YRaBAKuvVQUfuQ8hXZF3z1u9EmUkKzU3uHfobEtu25PE8QtFzs3oHLYbVUiAfSsrkK5bqtBbn",
  "key4": "aoMqCLXrs5G92SwFR8wpHcVCRyuF5cjW4KziBYiyG3zmseJEqSfHRVaU8jm5RfRzNgw7RT6BsdWnmPXRAhJNSq1",
  "key5": "3xCfvuEHSUJCQMyikNxbKGorEMRAfTBi7ZpGmb251Fxu1xiBTkZdMMNdeizmUFGcgJbGc9TdfxwsAuUMSsrzVPGs",
  "key6": "5FCwiyxmuncVyWcgxnpLxrMfcXPQPWaX6hwaV58d1WUKbjScbL1Zp2D2FRQoVXZfCPHXNNupWPTfTJXCUgfuVdvi",
  "key7": "62QKPJDKRuDNr9ph3xJY4JtcLCPJUGchVhXwizkApvv3jcHoDccMZ6Vh3UwpZJCKSMAQLdty3qcQHZ8CViwgyAJg",
  "key8": "5QiNDZHf2EZEp2guaCVDqfKLFTS9wLmFUfaWmDfqPg8FGKubEbu8173JkWZpf6CBB4yfocmqT8eFFghGb2dGshyo",
  "key9": "tnUyr7fuayAPEMUhsfAb7A5yJ8pKHgU3HiEQqLT3BgEXZoLhM4nK4auSLMQJFgdNzR9ttDMhsEDkPGfCLg1NQFr",
  "key10": "4uLz7xStJVXyXoKhzEjkSS47DGqwSkgDvhw1L2V8P158EKYDJrtp8QAqDvrZa3hPefgEdBsZX8so2ErE5uMH5Wrx",
  "key11": "4D7bZJS3LJFW6ZvmKWjnUZXDrebX6DHBv1dtqPXyrzENPGUC8esNJFtiM3195TFY6QyLXhsB9VCgyj6eLtqDmpzt",
  "key12": "5S6q5F7bjfKd9SYHQWLiw9yhNFdBd49fE1fqtLjC2EtJ3jSP8wCwrYQBvFXB9P5nKjUAYpv5hGd1kt4SGJgLaYfM",
  "key13": "3n2BFDf8zU2yVEiJxuuGGi8qi26vAQo5KhZYsGfF3B5R3kdRNoFjttuGG4qAwk6m4uNAwLdnBmNujzp6Bzpods1R",
  "key14": "4adQKKJ1FNf9RNpkMe8NejgB1fqD8ExmevFgprtHUynJutNZmN4raoHipq5eJXsD8NqqgdwkpCzf64qFGmQFYjE6",
  "key15": "5xmYQSW2vpKmAqHgdX5pwzV5RDMy7MDiGYbyW26EJkE9C6x2FKmuqZjvZLxhdj6Z4nySC6m2ZFghTWrq2QSVzrFm",
  "key16": "4xLK5i8wFkVLqwGTv8j3X179ML7DuatY42gfz4beGqFtQwGLLfJbeYPss4NfF6es7BMcWKu865tn4bKRX4HFigeU",
  "key17": "41HhP9LYaz9XGhfDRNfEs6apC8J7qfeodUi32RVXUfuG1wVU8oXvPgwdNyAb4amuX8zAP3XAfSL7g78C49iDG94n",
  "key18": "2Vo79K4RuMT3jnARsV6E8ZHVzEU1SxyrzxBo7XCtfCRXNNSfPeRLUQ2oxdv3Q6emGap3R6ijwMQRxBtLzqfggF4e",
  "key19": "hxvNHys4Jj2jGuWqKyNkfcim4NXHgSzAJzmrBCndc5ENeWepfFcGa7DXdJ11jY638XCWLh8E86dupXmP3Dz9Soq",
  "key20": "2aBnWyAac93S6WFKmw4rCqA2PJDmSDkwJccG9wZ2HrSMREkrJRo8bUWRB3GQ7Sms8L2kCxnxvHbBuhkqjfBxXnHv",
  "key21": "3DrUZpR9nWeRAZKseiSpgJ1hBA573KzWTQuxL62AsbE8i6sGewfdKLJ1CxEa7QRZfqZGUh1S862nBnPNuvDZcAWH",
  "key22": "2J16wcKMNSQVTWpTKRuyD67drqGv5wW9LAcL6E49u2t3qL4T8fEsDdh22gPrduDsiThhtbGXmnRksuJyt6RFwtC1",
  "key23": "4rcM3ZCFxPSbYbZHH2rtjX8n8i9PmXSHaszrVRNYzHATnJHDgfB9mJbQocAUb8oC2N8nvzBJVeV8wLXWVt3AQaTR",
  "key24": "sksD2jXVM7Yc6KJdVY6GRd5JdqGYF9t1d23tavj5VwiNna25vfs8uhZN7BjZaheuLJJSBN4HSSF3HCbt11CMmxZ",
  "key25": "2bwczSgcnphTPRHWfHqjtWdYrchgqREjUK6niLdUBYtRpGuzBfUzxxu9HuyoUiSUTATWyHjYBs4jBxGiwfxRevax",
  "key26": "2sFUspTk14Y6btqZK23AseYZLvuYPNCTbZ9q3CnnjLaYHftXpSSdRUHL5KpSy91V4d6VwJbDe75o71EnYbQuECku",
  "key27": "2R7yZCoLj5SPjGsppgp2nVkWwt5Mupei16qwHaBjVrzAAqVsB7o94RBXU6LZ8dLCH9q4GVe2GcQ8G4aqKb3BuDZ7",
  "key28": "3KK4CZ9WGhGGA81qvxegG57ahbMDVnUKN8KomvRMm5Wg7fwBn6wdHaimuiAv7AbTgfnCqvSZabnHMZ26vwtzHtWb",
  "key29": "3bhgQfpWD87ZQbUpRLMoPF28HTheoqejXmEMje1haXuyG8YMPuM3xJdCwCUfyuubfk4VDwz766VkNx6ZF91hD9tz",
  "key30": "5cBhtK29viLANtg2g5WPhiGCyfn9zHjDKqwFRFUZ5UfsJJkDYv9fuPb9RqP1HTx5RFr3NXc1ire9EDFHmFc4HTmX",
  "key31": "4LYEb4Vc4XtV6BEg6k6Ur3Dk1LjPVFdRpxLjTVwrfR1rmZLfuF1nfCNPxKV1z1TLf9D7B278azbZShtXjVz3UjT9",
  "key32": "5s8W2uStuoVJoj4WTW3msvEo36HCNyAysEFV3G2s6RVFMdiHRuaY1Pg9bsgduMpebnU6VKkE7kfYMP5oV1Ezwqkq",
  "key33": "66edJwm5LY2r7xLK3tHbuNJqLHUddQKj8EXywY11YS3eRjXuebZDvFudQMb7M5hdLkJzrvxT5L1PkoabypoCgPzf",
  "key34": "4DmqbF7YfmKZfop9k48wifzs8xNaxb8ZcUTFY5gbtgyuhdmGGRZph4zEbZhfEVGw1P2RzUWfRfZAaSQq6kbo3DXD",
  "key35": "5w5AqLPBLWPhVhFwGRdR5ojHTEDhnUGe1KMFKhNBNzkeLSdZiQCWDgtmjLvBW93rWMhg5cduqfA4Ao5ixoDaDudS",
  "key36": "5z3rkqNWEjVRMnda2zqu1xhYa43nEUKTeUBmJKLcPCeKpGCaTcS7Xm8jYCbvfzK6YbdaCRX5W7CTTWvzC8PM65e4",
  "key37": "22FbQDCDxuBQUFpysHAnG29Jm3H8Y1EJsncpQ4sDgKrz68BmKxRtA4c8gMSpsFJxxfgjuiLUyGzBYZhoupRSgAmn",
  "key38": "4iJCRjuTUBytR51XgAJdF61nHrSMVJqYHWULCwWdvqZ4zgBaHf7goJWPzTKgyqnKFdSSWGb4JyYryXv8dyz2o6FB",
  "key39": "4Wwd9LpsWG3mea7tPDwgbHQx2F6TbiGdBQv95bBtQDzNiGnoEYS82Ekzn1Lk6yaYuXBjVwAJsebbAzGU2NFvZzx8",
  "key40": "3vCkqd7ZUwSmqzqLKri39NvanE9VJ7eLyaBNWVTcjbfkeGxsc8XMgpE8ietLEDAiU3VoJG3eFZmZf42zyXRfMgF",
  "key41": "2Pp6NnXL7yru41hpMoQKQ5d1SDWvmYtRPTGw3pCkqtaf56bvWnU1cTnQMK9QzdrU1t8rHq72HiKus9gg7huKQrkn"
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
