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
    "aTZjTVQ4zBPDyWPtRN7GE85VPcD99EhK7np9PAh1E9yk8M7LdZ7WwxJBWxgPy2rHazvHdnAUckRju3FF4X2VxCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ugA1e9RjYy6WeLz74WNKR14PiSmZyTmS6K1z4V5BpVMq2rGQMAM39fUMP7czzfLoZBAA7JZ4b6zivmzdzDtWz9H",
  "key1": "517Ha5TX3tYnQXUKe5oqneExLyXv53Hx2ySDmo1kJ8urXLzid6GFAVSU37YyjN1evqXAMFAfHoKYW8bouVUnNWFc",
  "key2": "5PgmViJufWCSKRNkvSQBBZfg6FptHj5C798ahGSfsxCzxsz2Ej1koFGeWHeywkCbNdBxDm2iz9gHAXsi3tJk6xTd",
  "key3": "5iNaXMksYxvfsqEyzwmtq7caJkgYyMoTsLMZcUrfPxAfMMsBZJrTCJp95UESJyri5uV7AYdwQhdv1C4WSGSnzWTV",
  "key4": "3p8oKZynzS2DTALGmvNbkdMNL91sPFvtZJWVGmJdMkm5ShewYN3j9FSWEGQekNzcuGxquBqBZMz5sumujGoxmrsU",
  "key5": "5n3p3WA7e5BbH3ZXUyVdKg6moLqsXZZYMpt7S4oFvpt58QZmof7QPVysnZt9rFuysRf6pTv1cuEQ6jCsFhVk2Ab6",
  "key6": "3njEWHJSeLBSZQ2jasnSuEq7geXm9xCZobc1oQrgvHAqALtWhPZcrfC1W8bW8XCQB3M3dT8WNTaap7Mb6RCNMKjM",
  "key7": "3DbGSYgmJLGN69hXoB8n4vTUND3T9JgTFFfAhEyPZjawrhu5B3nSewdqVyBdFW4djeb7qjjtTRNCshMSEKjgM1Jn",
  "key8": "T2GZdLnwaGkeNn8Bt5JgQzP1KkMEsCAdnZ22o1yFZjEmY5372fD9oALuNKGSj5nAiT7dqw5WAz2Aj17gaPsMLcQ",
  "key9": "3fE8oTGHF4gahgase6ScTvoQPSV2htBDJaKhJpTLYQaU7QECNKPvxvRHfAv9TwCnqAjhf4Bn9i6oDvfATcazGJ9T",
  "key10": "5wgjMfX8ovqX9q8RknKq3zrh7AsWDRDZNgNxCJK1cnwgSz2RnJiz491xuxDi9T1gv9QrYVyjNfsDcHrXXXTis792",
  "key11": "4bb7vxRvFCESZpuXfnXr3XKtwLRzUWxCx5HGZ4Chv8No5RnL16hXzLdB8RVQL5hTT2AKG7rpWvpW8MhgGDFVYBMu",
  "key12": "2jLG7SLemZFhBe66bRuh6bVen5a28Cz34J7gwTk7fmazMxhggBv8s98GZtW8aTE5y2snB9ZoHwUfaDwV2AGZhFoL",
  "key13": "4jvbQyeqirhKbg6aNz7KPp9CX2eddnxs3MgpAMStL7m1okwXA1SavYbsMZCvnJSRiS4bJdmXoK31yaTTsS19kE2j",
  "key14": "5KHtnwncR2h9pm4FexT63DrnePMRXj9jBjCNdh8N9fgpnKS6Hen939hf2dnEKDJPtY9ojyJY1dikxiFa8BqjYzBB",
  "key15": "49NBPkzz9wtGbHWJrik5u4iw4anaoTaAxvJoPBP14rbECfV8EZAQF6EBzAkepjWVF9bWg8AR3BSMoyJY8y5jdFFp",
  "key16": "2AiBTjtaRLci2pbt1eCU7fGWbPEw3MP5meyHeHnf2eBVrdtHXjP8F7uc8KmHrhq29B21nf6QcPMDq8sTiXevVeDP",
  "key17": "2dBi1CJYprDamS7GKq1b9YZH5kYuypHeLprh8eFqjhnwZhwcsTP4SXG2Ez9qCHLhXbU2DytsZt87kpCKjLQgeftr",
  "key18": "28WNterhY9uN2GP39Y551SmVE3CC7goHPRjUaH7QJzuqfb8Sz4aSwjS4WEdPVyD1zmrzoJnsEPSvMzE9VBeiwzzi",
  "key19": "4vfNmAHS6uUcuVc5qo2an6BVC1ngjQN7iRexR94MpM9CNDSKCq5b98uYUL3rBW2hnpMXzvqm6yxGQHpdY1gVNTF9",
  "key20": "WDJ5uWwSSRs8JXvRRN3XFWXMMpd1CUQeZkPL77cA4JYT2KuDQY9nuwq6vCzYxi5hLAwYgw7LpMR34jL2vUvJXeR",
  "key21": "LDfcXfqKJS7E7ScUZXyqu4sUeLCEorTaVf6fSvRmkUPs8jL2XhpjTsda92SJr4is69Sa7eXQ2QHnwYTdW5swRS7",
  "key22": "2GxGvGjykcHExhEJtydn6QEXJ2BJAcpao2mVuBCzF5jrMPKNGX8UeXzaveqVkqJ21KRhSF3u7oyxFDc5rVSc6YVF",
  "key23": "2zCFDqXGxoYLbpPY3gTSpUmeEZmKuvxoNU73FugJDtwmBK4AtxgguD71cRwUi6h5ifR2P9zabumyn8xbfv6zeNUk",
  "key24": "5XD2b6VKRvZXo12jsdm9WgWY6yEnCjnJRPUpKB3RLtFeTFY1puvs4QaaijDh1nq1zzAnwwiiuLyw8QpineaTMJRp",
  "key25": "45GiQMPVmSpizR3RFwDJHPwGFF55tg6tY4F16hfeaph9asXLW1hKvH2EqfGgyNBe9LqNYJpWgMSga5oXFGwjn1Kw",
  "key26": "4UsRZhMqzo6rep6HBtecok1gbfmhdzWRLpEkRevN1jXBSNHXXQ634SQjLoDUnDbZFdSnfLUsCKTyrhnGrsFhLum6",
  "key27": "oap515tkL4FjpYk6j699Vb5Cyqf3WwvgR7L27p2AyoLhbjNP6ZG6PEBfmN3UR8QUTvZpzK9qk9yHkU1m9XKRku5",
  "key28": "4SoYL1RKYEDKp3hKXcWDfeY79dVtRmCy1g4wbqLbvh2ipkyDSYt7wARaCnGwDMvyH7rZXfddPerbqDahYmFF7nFf",
  "key29": "D6SyM2ueWcDneSuJZNsdUKkpSYFkQsX2CtugWd7ADu5gET1FTgu2XS36tXC5Z7HbYQriFTf4yt4zkaEmRbQ3EvH",
  "key30": "62ei52dpEXyiLyvd7toidN7kLwyj3VLVVc2hv1WrrF6YL2mXcWuekYcDdiszbvHXLkddBGFGKxgmQ7nWv946MsjR",
  "key31": "545iWbsDzNbR55ZFJjRYDNfR4HT97B7KUzYsKC8Uff635KD6hoZuS3ijFWGuRybjB9ah7VwkkLhMRFpmGWsgci7h",
  "key32": "4Mxa2Tz7oz9uijn1rcSfitjeQxrjM4UxoCVHhzrENxaYQBxCk6tDrJgSPzeQRD7jzt1jcsK2oCsEHFVf5gG4gKKF",
  "key33": "4uS5qQk7JmmJtwNcfwCcJCf5Bi29sXWq12GCAsH6Yk9aDbHhgPcSMhkR63mYYGqbXRrcpEiyXyJ62BzCH2JUcuaH"
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
