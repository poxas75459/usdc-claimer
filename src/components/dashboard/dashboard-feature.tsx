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
    "jEtU8Lm3Rw8REJAcMEqitJjfqJaYNSJyStENHnjLgAHpcBT5RkkRQBJVhiacsrsk4rBpWz3o853PWRdbUJzjiTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sks14FHjmbWmGVZazv4tTkLHDtuYmsNEA9fNXXvGDMNtzFBVD2NCNfrRznL3TipYUZMoo42Qd9JB7XvxphMskf1",
  "key1": "2vibvXP7DYXKjkkdaG5AewBiS5kwfHWy4BTHcE1RugMBsBAHsyGXkQh8S1MVb9N49h9hYf3t7KegiLzSbCh14EQa",
  "key2": "4Y7yEoqZiQNm61i27DsW3c7bqkMrShkcJVGRheXPRvE6xX7wgdGBxXcPsFNuuWEnzHTZGxpTNzYrwKTs4Q6giVJn",
  "key3": "3ax13kpgUQ3LDQjrE1DtXSMVSwjj4ycEynx7q713C9y5wgCWVWfWpfNbvg985SMWpHLBrumGAmWimzN9LkzNsomX",
  "key4": "3kM81e7pHASAj9UfnBoYndE74WonQrVkLP5pJSW9Lv7itWJriQrASP5hakh7jAxFYpbtjD3moixCfyHaCtriuTRr",
  "key5": "2LYXqT7uGXSboA8wT8LjU1nUdreASNiR84BGuLFmyZ35vUjJvPL9hrUGxKPs8etf9xaCkvL65oEH9iP8hXRwjE8Q",
  "key6": "5e2R3QGDcmTmFT9z9HPESNkXaE7sxq4xvR3QL1pGqfudgkeYkKv6rjdUPvBZJwmGnJzKwhYYQsGjGXWDPYUhvBvh",
  "key7": "2XbauyULwfXtDBm3WVcMY5YyAvYp9RDbgv4h7EFvk1nLXNDZ4yqqrbRqYepLqiGvvgWWKwcYDs1ZzTmnoJYXrEDM",
  "key8": "3qKbfivF1z4xnjBRrT3tai4Lo4Jks3Q9WD48AdA7ZJjp58T6oNKceUKabonroQk91t1MfrU8uoxBe52dVqUwQZYn",
  "key9": "9yYyY69YiNw532YaxymnHxAJShmw1dnHPpgwneK9F678gJYXioDztZtUjF9p8FjffGsoi9XmVQYcgD48QmQnC4b",
  "key10": "5L3R4QdhWiMBT7K66n9XYnTgFnqYnPGKj1cPnDmzN38A5oJMjSbJGh5ReS6KgKTbdCuZQnLYwqrzKWpUh4TatWS8",
  "key11": "65bvYXuWN1yBrResnnEHc8QKPwsw7tMAce5JM8rs8xFc2Hhb3eYo3ixLF86zbaoH5QWM1Dton5b92ketTNBLPFFn",
  "key12": "1eXmwqvGPT6hVk1JS8E1stkPxNM3XHESND9v357tMtADLUPB4yH2CzqWDcUX9djrZXPGesMQdkKty44iHwFXhgr",
  "key13": "2uveR8kYEY5GemBS44LS6ZfGKMbjYro2E9MHMuxNmm3tvZwMy36Ao5BF4LpTADG2kzMg3WY92rNcrq3MaLBtewJW",
  "key14": "3aQeFAG6kEouh3M6BhyMWLuz6broVm4Gkcc2qfwPM1cxwer1qnH88282T34jbyL7eqq8zQd63SSMkRkS1qHy3yLF",
  "key15": "3qQWC5ZAxcvt6eB6WB66htLfraKtWhWNbdah5HhSwPxc1GyNqcUcw7RAT86GJLkootEmKMeU9eMxz6ahmLLSk93C",
  "key16": "59YT5W59pyDRHbMp3Ff8Rsu8LQmKVbF9FnniFgkS7drUgP73qk6uFriHcNDuvVXBsMmAY76ZvWrzEQxgdH9mDeXt",
  "key17": "urMQ8ZwJQDPySLoHAQDDXCMRTGhvuykkigj7dsb8g8vfh5986DUhWcetK3rJH2nkDADs1izw4sMtuxGkGAJPDKm",
  "key18": "2ajZT8nRcUtJbE9Xr7ob8rCHbAQH19bHLVWuqR2SV8d4ANbS2yehH3NrbxF5zcSjE2ua73FJjBZPksMm8sjiEaHU",
  "key19": "3XdLgBkFNvpDKWRSRuKoxBHRxJXFVtQsDbL6qA8bmt3i2YkKVWrq7qgF7bPmTuQWrPYijYGo1fsvo1GnsimjMYAJ",
  "key20": "4vdiS7vadXANV1m4wbAuQa5FHWxiaU3rzARbsAH4b9kkKvQ8sUBJEKRUW8BiPQm1hvdGSKFfR9NQhjeB1mmNRa6K",
  "key21": "wQFMKhTjh7QByzScYZ55tA1wDHPZSpqpuHjCZJbBPbB3XpXCWdyrzhYTJB12W5qc82c7MvYoT1AotKpdgZZHxCe",
  "key22": "27aaz8GMDf67e6cMM843s72QKYdam16wDukvcSNVeGJFznsbzKoqHijzYwEYUnSWCsWzYDUaqmfB37vSpdfG4mXB",
  "key23": "5UCU5hMxYLEvT2rGjiemKriKYAfhWayA4AJ81D3yRB5p973ssphZgxxb3VfEcBdaVSPuo49tnSU3yNuqH4UTKEtF",
  "key24": "2oHVfyDVn8Ec2qv3Xx6ghBg34rmuJxpFz4bwqRpfRC83741A3iSeVJJX82RbQ9DveBUiBCzadiJuGk3s2Y5SitSv",
  "key25": "58dM3TsqLeKhK5awRZ2MDep11BGm4NqrBTz16vv6TAC7e8VVNcBLGnUxdcavpJHb3QJaDjHfGyqs737Eu5YQ1nKY",
  "key26": "2Hb8GzYejQSrBcMUxyq5kHaG2MDUr4w71y9bGPYXJZZt2uLVfoW12Fthca96RhRKMj2zRzjrPVZaHvGDeREfXNud",
  "key27": "32UXz8BdsTLZ4o5nuQ58FmkyZNXHz9Dj3KWvPBrTXV9Es52JUeTudSqfB2r65ggjKvSSLvFRCVHzrkrfHaB8Rzr4",
  "key28": "4noCEYa4BKLbiT1JepnLwAK3kHYfoNdLy7SNaxPCE2iZQm29YmN473hAC86pwgUzm4fg4vax2gfxggkL1zRjqhCW",
  "key29": "45npAgMys2wFsnECxRZAj21EgDj6kB4R3GFfgnNBZFoi7soeuTF2yX3nmS8DnrYvGhebbGSSXmEwDa5KdQRj49cD",
  "key30": "23i31fxQyTVLeTiRPmhacKdQR6UFX2UtT9W7SsS6uzY852smNodVzB5SXiF6izEQ13rrYmyM4raf6Db5r94XXau7",
  "key31": "3sptnt9eF4UWV1uxALYU7BxeTgGGNMEzdVS24NgPcUkZWPM76qrb15o3QnrfdFZMgNtkMtyFapvec3Q79rdwoHQu",
  "key32": "3H9NbhHetor1TZCHfP5ghKzuHtGbePybN81NoiNZ3GyWjBZormSKag9ny3PVda3GGsXAq52Qi9b5uA8zRsnZxpMp",
  "key33": "oaEEkGyJge6atUQKNUvnK187jidNPGwk6aEFoUwZqd1Y2AqJVo5Sz3eUj5oqqyjZFnMyN7GY2zqqXt8qeQS8oXq",
  "key34": "2evscBSVYmyz4F35effWmikxkyN9MBs7CcswTmAdY68CWfBLwsdsPQmj45QgQ8GhWpWxmBp4ZBUVrUGsAVRJXqRS",
  "key35": "4iKW79rxdW8P3GcW5V6fhAtZ8GenqTB8UxoPFgQ76ATef5wwAnYK2YvE1B34DfNWrrHeCxZs77qwK6ei9X4s9WMg"
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
