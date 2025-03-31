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
    "3fLbRwwQkoFphAULbV7PP9aXm8iXcvUbQwRbJFdD4dE7g1xzBRXpLxU64e6o5cQxgS9YTDSS6Y1qH8bgMHQuSTbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "erx8tTA82ptcQ4SDXhv2A8N9J37HdjZ1qpDYTekR2pnsqBrYGfSqvASQKimytcdHnD6Mrof8zu1vqW9fY45DPqX",
  "key1": "4dbv5X4WwAUWM6cT2c1MtFe3TCG3jTRp6oThFcu21zL3HaJC4RGKcYf6aconFcKepTjsX1TEYyPz9Qo8z51cSvwX",
  "key2": "5NdEui3Jvaiks7CPjDtZeXNkGW2iDaRVRcn2SHBLDCdsVnY6SNRo5nnggBiyrJw8dYnxLnUWg5d4LQMVW9mKrUd5",
  "key3": "4MQAabpjRrUNj15uZNfv2xtxotgXic8ZkjvbQGnMLS553UhTcQUrGLavsTKj4PPErNjQLWiSYHMRTSX1JsmLHdCd",
  "key4": "4sw8ksruSbxH1tZuySJxWGYqHBm2xpbT7nyEnwiLHruR4FJ3bNPFnM9cmCobf3oMWUDBGaRJdhrztU66mDJbCCLy",
  "key5": "3WKnXk6GASiKqb4DCYm2LEbNASSuhDZrskLm3pBcqFG7Mg6eDWUJwgHHjtddgqk94rbZmbCCHdvLhGr5TNbJ1Ky9",
  "key6": "2KbhmEQu6io4xK8F8CTQTYcMogiYiFVd89KwoszGignFzB1n68WmHqf9YTxFDtmskHKWXFYJNX828obgZWDouaAb",
  "key7": "2tJWbmuDGtXzwH4y8nLVBgp4voaVwRv6mc1vGB98oy7kRp4PskEeeFsCgmeC3LqyH7VJdpEssTQpw7FGt1iVQ7Vd",
  "key8": "4j4FsVr6QtxaWCzyr7rWHdMPvMwcygJWxYncV82V7RSwR6U4q23g8LDC2beMqvKsXBq3rQtDjdVsvX8coEaLQ9p1",
  "key9": "3ctxHvg8Husgm42gCmPMUjP13pfdW3ke3vVGwuLcCAVYPxpnfP5eaWKYFZwy7FzmCSrJAY4GxJbywacZsqHy463W",
  "key10": "5EdVq6AinoS4QbLTWKFDsWLABeVR6PRUVQ76Z5iLNj53iKGeyG7AxtnUuSmzivR8v8iKba75pAhLQQkY4MdrdoKn",
  "key11": "uiM6YRPuoWjfzvKifjxJNqc8PJsB3bWBDn2omrmi1kk6doHoQ519tZtpvcpvAPJp7cGcma62SgLbDfYrXcgyGTC",
  "key12": "2pSiNDAS9xJjfLyav6nREM3v92DBqtgfshnFnectogzpzyDcDkC7JYQ8cdqkhyGQpLaWvxrF1ihvbSmYTnXZrWzb",
  "key13": "2u7DfrREvZasitUP9kj82Gn23BkoagDn5xMvXLKyjKqtsAL8QjYkvkcoyiG5q6bcnB82XvTM2Z1ES2N6cBbPUhcL",
  "key14": "QYdHA6FewSR8MyRkKjWVTrfDyjg9vKef5aaCt2rDGeE56u99rrHKQeZ19uH3YWDwL1WRLmbXN1p815Vm9doQKoN",
  "key15": "jZTWicqSH4UfrEorxavMJJkXxTbnKT8FYgKDMqLSUhQGL3PpoDNW6ozAE4hdiZ8gkS1W1QcmtCVLPH9cuDfXKZM",
  "key16": "2uVxuvi12CpcwQwhKPu1W5rBcQAMAh1tskWKC9v7TdhiQ6w7pATidunbE4WkC9kKXW1igRf8up3JcgkZmtkVejCm",
  "key17": "4YHW4ruuQy28VBRwhipWQ1HHwkqNuzTYGHkRiaXSjNqSkuTxEZyggCwR5fMr5XgZJApYUTcgb3bogu1x72EogXyM",
  "key18": "5s1xMaLfeVBbxtTZVMjzWLDBgo35nkkL7KQuQq4YfbNUZCpTTduA2ddkbks1gN4CuD9dUhj14PZkZvusQ9vZYhtW",
  "key19": "3ekmZvTjVKcMkx3uCcR6kAkhCHVJ1UQFHxgv6AD1FEB2DnUdqHNQCBHv1eWk6KM2wzCAWjTdKgjXfHGDe5298HNf",
  "key20": "2cvb17J9fdtkBAtng9U1Wzqcwu7VUGrZYwQjJYzrDH151ckdKpbcS6Kq2bB57XnuWmW5CZsK5t7yhSVZEHpAsVYx",
  "key21": "3cbW8K7wF5apgmLewnesZz1PBpkvEQQxf2DDtBT6SMexqxiipiJwBYfH9uu2r4LEQTgQvKmmEuTHjxnKbqBALZTw",
  "key22": "3Js43YXavr8iA8KD3aAf8pRL92qkTBAbzrZSSkNuWXAz2hkP6w3ETP6LiRPxj9XfY7y9RygahqvTdKdAyYgfTui8",
  "key23": "39w9dD1FeNxuzhFuGKkFNZDtgtLPihv9VgKZM4bRYYAdzhHcGhPGyifsieMZwhAMyGDCLcSoR68iwAu7KSJ4dmLY",
  "key24": "5eyrgUbUMoJ4EfF6RmEEtJL2yZLXhX1GMQbeGwm2Qgu4RLyuBNKSQypEQWWQW8EDRHJH48hF9edyAipNM9fiwHav",
  "key25": "XeBMdiCF9q7gmx3vcDr4gfevR6q1mgV7q7K8je96HsGRR4o4xKztAawoeikNQ2gAPuJ3TBKHksEzMEvgeTGqFzH",
  "key26": "359goKnCE9LGjRGdxxJCJvkmEedcrDgsY26t5KC2GvHBnwcQPTdcu7VYGVpmDaW4eWNYsKQCxHNSNP7U2dqgoP8N",
  "key27": "39RnV59rsszfAfwt1cq9b46E9wu2Hpxui6BdszxfLsCTK88dmV2cQ1mQAxTs6iDZyXZLw8vDbiZ9sLf9euv6QFyz",
  "key28": "dsPsJejKfuvPfDcNh37tYGPfxFNtPS95f32khgxHEJohSWYg8E99RCRubuwfcLLwxCEo9ovhF9ec9adovGcyXNq",
  "key29": "5NEJsVwTxm1LcavBwemXP7a92QjtGtMhSLQZzascGwGSP4o7Tzhvi7puEPA4Pi42dfmNZA9Cyn9tzbdmMqrrNhQS",
  "key30": "5DeBJTHFysMp4Drjz25gTCGyi79nnsfVb39XjhUny9x6qrnUi9NBApEHFJc8632xEXDyZLKMWYVxa4nEJfqqcv9z",
  "key31": "3ZWHt9fFMr4pS2kF1YBnGVVqKKpF3gSvUwLqZp4iBAacKoBbeEwyJBjJTrnMXdtCpFtpE1Hhb2yaUv12nsSWKhup",
  "key32": "4AzWp8dXSy2NfpGQB45NfR65scEPDrX8uSMVqjMmtcHCsk2Zn8DJhqWz7TegCDen1XDdfmKsLp7qVHBP2ZBt2XQR",
  "key33": "4eBhQNW5zPqW1xqNgHMF7Nmjr3qUBoqE62mv5PkmB3iAfXRbFCcBiQAHRkfDyjvVqB7N6YdfF5PcbHB891C3JmKt",
  "key34": "3WcKh3h2wPo9J1ju67vNAVggyTLQcmahaAXDFzb53gLoAnvMDXWECa1ccpqeWK9NC2s35J45VwNZoxK1mVfH9XFL",
  "key35": "3J6b2MNPnmd14g21TDjSH2NSYKeMr8XmSRwjPmWxBznqGSkfUfGC9HQ1SWmW2yRavxhMesKZZhEYKNYN2EtzB7AN",
  "key36": "5E6ogUmLDCVLGcugRNhQm4HCgH4gsBcMVS3WQL3MatMMVH8Bh8QWMc6ywM67sM16FGaoBTetwZyVrkazZxneoymG",
  "key37": "67mTHbCzbY7JwnrnHEgW8hojvZYHMD87a2UCYCVwuUHjGgGR5VF45ic2JQMjw4aLh6aTTaaR2mSUefxzQ5AALVoS",
  "key38": "3XMmzEJsdKYTuFnsiWqBTwt55CCQ46RSALuhkFoX1m6DXt6QJGA3BEdzXGCZvhwBZaaaXz4xwKM9mygL3dh87zCt",
  "key39": "442UU7YaBdSjgQYRrrjbCh5VckVixhcfFbc4j6yNLPUEXT848XvyxqVBJvbjAW8Fugo1H3KcT9zNJj4tybBHY4ug",
  "key40": "597LU5kt6d4hFsTso7rdWtNFafiQXNnNusgfwcFjE6Uc4zVXzWHimPbeSA3NL8b3d2SpsvAMviZzz4Ume4UNQAkz",
  "key41": "5SyiCdBjcBNzwHjbqE26qjnpEsMCpfxzm65Nj3ycREtUeA1TTxA5nF8dQbJE3WLfUy9tAbNoqBRbgnK5KTMGJk6J",
  "key42": "5nTxw1pNrmyCtdHb4UFjWqVeRGxajCG6DRNqk6Xhmod5N5N9ka3xwee3E6MSrqLXTdaGfSdWQsWcb5eCm4beALMd",
  "key43": "TianhUZjgNoYMQJ5G9bzWKYBcNEE7Yqyv8Kp3nLhuFxUBRSegWijPB4ZEKrvZDNP8QhDutcK3aoEXZFVVgF7UAt",
  "key44": "4Bmf9B3zn5xTTpkyZoTyTfoFwPmUYBhzvySNX2p2TNhgWo39YMLAuVXZH1kGZ1XH3n3KD5zBHm1RGRkoeyRDxJWd"
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
