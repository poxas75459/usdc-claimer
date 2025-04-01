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
    "WF9nBhqhDx9U8JWQj7wvAmnuP6uZuWWZyUavSVkVMizFX2jEnf7jxBsKD3qiR5mXkSHYpoEajBMLpCfgVNsNzJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtPemQdN3zCmpbAFsxpbkuha9nRW4AyWzvNHrmLHVrBxa3DaXP6yenwKUnzFG3VRjPvsQYNVaRWLdVU4RgB2cqo",
  "key1": "35CsNCERwG6ukUHA8sRM2Qfmebhi6G6iX9J5GWDbNYW26FsJ4sbFX2J6p99ivjXmtM4d3thsmiKonGkaGJrDq4Nn",
  "key2": "WbYUnhzVkGahwncKshnNpWFzBcMEWx8yWv6PW9QskYCbtayeSe9f6e3JsB5vtafbMVsoSHgfpZLVwM591JCHU7n",
  "key3": "ADviu2wnSSzw8UUck6ktC1FcSyAWynNsZJU36GxUtJ2Px6z2xwBbgGq9LhWx1PFpqdyUGemSaCj6rLkR4LQiiNm",
  "key4": "2PaLUcpqrdFiGoN6r57SWnYGbkfbdgvXaBp9knvfYKTED5UkTVwEUxXbfsCQwmjxWP6zRREKG2z5kFSupeTtJQmD",
  "key5": "4gUYo6N4K2uaZcb7DkrzbkLaK5XJJDben8RP1dYm7uwckKMcnqiYZqAXm4xY9W3TkTjZajiu8Hj6eQP9ZQPtrDvy",
  "key6": "kSKBtE6JsBUpCEojmaWArutgLyeqBeQCzUeoo2AdzJ2dpUMqttq5Ugs5ouv7UNx5uDxAGFU3kW5L7gHewbQp2xt",
  "key7": "4Xe3RSNKVLv612KZsokxrZhGst1KC5kGwWv5hYeXRAWq4FRt5LV1KUG9Xg8DvyVqScTEjfnM9Gxqnr78DCz53YKb",
  "key8": "5fPvyjs2vcxdjTLE9LRuSQjatJytsxvUHYxwWiBPdNWdySC6cRsHLSHBP3dTazd8gLb9TYj1PN1DowU18q6G8mg2",
  "key9": "2uhwUge3f6cqGLgiUXQuuE1ouVXeauqrRE1B9uyAojtUexHMF9i7zWzE8ySxmAmEVCbr6ABarrmrQrkRD6fiDj9N",
  "key10": "4HvFdNPAjxNnpFbFVCFLiJ1MYYW3QXW46SZHS5NHre1PcH1osq7AkaZWGzzQn3nNgrnqyt6QnqDswdRvjZsPCZgw",
  "key11": "BYmNsaBuWry7RQSvxFG1T4b5ZQmiiMhXpoGSfkgnfWVSCxz81pnV6sCYu1e1zhpZiD4endcZ3Tj7THrmkqXorjv",
  "key12": "637FG46ExHisjKbzPfWrxoLvU4Q9cczKThJro2UsFPVi13DDhiJPkJbxribeVPCkXqLxpLK45DJMMMwU2je3iBKh",
  "key13": "4u1hhFoDdu3BPCUJkhguBZ1kProFTpbBeifcTFBncid7eGJAbAC7pU1y8XmfQE9TQrMFWAHnCBJVCvFg77ZY11XG",
  "key14": "42s89n3xChhJb8oXPRvwCZGT1KmUSDSQnED4LymsuMaRdwieexSzP8D2VioroyAAuRhcu5D9XWjaQuKpZEiuG2X5",
  "key15": "3CV4TdUPpRYNqbDu8zfLPzCUkuV3KC7JLHLDAwBW5oDPxm7a35xqvmxYXmxB6pZyjET2JHEm6MNVCDMTfoCTYdS2",
  "key16": "4uaeyYrWA5YMP6xdNsb4PhsFjcz6L5Hhi5MqFGxLBkBTvUA12XVRc9APHTSdCKAcNFj1bFo5hJ3gn9rdG5tKAgQi",
  "key17": "4Wxw81RPKiMZy1HciWDqGxDVCSSGmE1juADHFP1x1SjamZC65FbrHys3kUnL1FTGV1xnbWGnrcXnx3XnofXXGZ6d",
  "key18": "22Rrz2cRpvisdjVgSZQ4tt2YgyG6p3x9NDuEiHpsMXWVacVxeumFq5VxrgAMAoah6fhkdyy3W8U9fDZ7vAmcRBf9",
  "key19": "5TLESWcMd9F6xBui3rhfvPzGHsMNh4HkVCgVHhTfyXyfe2pHLYbgoFsF1kvChCQY4MrBnydcwbbuMmfMH1gQ9eKZ",
  "key20": "4FeMM2p2eZyH4DXrYPcbLtTyGXqWmpVoimD2d2LzSwhk5AnNXM3MJgjJGXYvHD5x48pfKRZd4FL6sojMM8kfHnMg",
  "key21": "5snuUgfzcJ7zJyYoLk7QeBZrjEVafk4VNB5zLN9AxzYdnMy4mUipmj5sEBYJEde4LGqguC5Ro4XAoSu4zkppd5Fo",
  "key22": "uH9bXjCZM7gtcfZAPskqYJnfzdSeTtptBS7F6j1MG7RQ6j82hMkZYrraqM1x4nyeBkJTXvtN11Jz2dnyTCgxwuE",
  "key23": "EKCzi494EEgyrcmNuBMcoVUABC4CWaPhptHffdkkLqL2WKehDzFGr67coCUNmPtUxeYdvKWFTijhZfqbpDxcn7e",
  "key24": "5kJDaj38diCamgh9brX8MkXaEJFsrmhh1Y5EdR7BDdQFbjrWgqdbgpLbhe5UJ25TEkFFeD273gQTuxnwwwE7g3uK",
  "key25": "bekDjs4BRvQRG5DA9ZiCokjp7divRchPa4EW4gmiUGG91PSgUGFwELRZ4iV5anonkn24Fincft4AGGWYajQUNQB",
  "key26": "5WqVhRA3aitrnWEYHA6WXZ2gXKK1qyUTWrW78r3YMZu3yD1yJfXgpDjShc2m6saR51DYQSsyNiQwVhoGpbhAx4Fn",
  "key27": "3HumLaqWtdApVVdVz2RqX4pBxCKtBdVtqh9pSvQXeygfLyb7PWNtRfrcygsZSMSMQZZcikX8myxFxEAsVS2M72jr",
  "key28": "28YL9k4jWeR5UK4CVuLDzFDQknhFqodqzk4xMkqVQXToJEuFZ3DSebV8cC6jtzWkYRkMFtrZhzCXgKuR8MZ1ZmYA",
  "key29": "4byfJacYQCiUxke4ZB8uVKoNmTP7M4XUSrj4DwgqYxZ7PjTbAusaymJWFX5mjFFXigeD2xzdEaZbGqVDkLxe5YT3",
  "key30": "5zxuLZs2QPjKCVHRGPqxbeUoPvy3FaBW5b3pM28ihZRePGBTXry3z8tM2bkx9Mg1Y6K6pyb1jnZBLV6PmqYzjggc",
  "key31": "dNEmwcDNubAfmnEzNJ6JaSBqHfvmkwfNr2AVb8DyDw2Aa9Xy7bdUUMd5fyv5pV8sKqam9tLgBQxxeu4yLVo2253",
  "key32": "5MUTg6KPDuaBLQ8M8zoUohTA1QiZBLcw5KhLZL7JWivFvArTYwV2KDRgiSyRPjAcNTPHsebVQb8YJdXNUGaWFViX",
  "key33": "3xr6Lwzh8Jr1u5qc81ehiTFjZRVsgRgZYa8tNWrfqjw7UN9WhFS9xes3Z8yRb62AFa6MGm1Cq1HxQh57EgoPZJ17",
  "key34": "3NHH7TpB99TvN2XYitNdbYhyMWmJtkznWbZ5MGWwPgkzEL5gTVVfvtggEFw6NyfdLDdA73cxMboqBu35hzncKCRg",
  "key35": "MafaBhpq9GWFU5zgUx3GetMfUDGwTVMPjgruQDMEZSSSGvh23XtCySLdzL3F5HMAYqiuFUXCFBMq3W8BdmuLWd3",
  "key36": "3LVDoSa7XDd9zkHqDfJp5AZjzXfrzmSWSbgXZZRyEdikLpTFqUCbsqQvZZfCHoFVZf7AaNSs8ucgrjHpvXmNs4mW"
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
