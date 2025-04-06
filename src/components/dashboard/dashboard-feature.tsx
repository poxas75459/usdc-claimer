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
    "2u88vjnpRyQEhQ3q6yJA4UPvtsJt9SDYqxnfZf6tz9KRXcTEZ8ExGVGWuYSbjULJPoCEtQeYFu7wnh9pWrBJ5efc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rY9ALcqMWVPc1vgsbKQwGKBvvJUr5GN8UST5QpcHLaLBKkj6u3tMCXuo26Pfsj8LKLYKWESCcLPco8Tri3XHgEL",
  "key1": "2RnKEVWW2rVinShCBAtXwfKyCsxYvaWYG7NYWQqvQ3ZCFntXgtkyJK8RNcDUjfV4sxFXMwEJzTyYNSbcBepHkWqZ",
  "key2": "4NkkgrNmbxQSxL1CJNPK8SVakk8gAzLSpNi7DtEnbdw3APjQZ5eaauEtTg1Gay8jsWU8rDHL1MpFibhCcPGJQ2qE",
  "key3": "7PpKqBf7999gxvoB4hKV3oxzsAC7yWwvaczJtVaFSMiswcS2y1TR1pquQvkfvxBiXYxupqNYQmT5SGJoKxpWzBx",
  "key4": "YDDw87KB2PXWfendE1oR6WTgmHPmGE8L541vxk6HgDfLAT3CcrftxGmGciM2cF4r3LF5znZhZ7Ex48qB3f4e45Y",
  "key5": "5Bs7iEBi9X5kaU5qGXz4vySfKMEfFVyTQUcmr3YF5REVpe1B4i3s7U8mfwgEY2r8FJDosSp9sfn9fPjDkPVPtkC4",
  "key6": "5daP27LTimGEZVDtS6ha7up2qvpZiP4CdrpvDb3LUZ7wsAeFYU9LnFNypSGRqTFmfZa6Wd2KYQ5e73KSiBqTkvrU",
  "key7": "5ZMEBU4G8wrA3ejDBd9A2wubss8aeQomXj3zjz7UPCuGPtybMHyDz9f9WDKEzai2PGX29Vy9CBndqBMASY7c9kYV",
  "key8": "3L3U1be5zG2ko6wcUj19D4gEJdwKi4cJaKehcVg3Lv2ohZnAvbQdakJ4gRXBYZGBgFyT96vHf4RmgcgFYBBMmGBA",
  "key9": "5dmy5DTZaBcVPFmqYyAB76MxvMt2r2gKZezqduGxng3uGPFQ2VLFmwAb8Yr5QLnMqrsyEyE8jwBhQHnXs7hMUxFA",
  "key10": "4Qdonu6DBzs7V2Y8AVZ7Qb1Z9jBKB2Hzk2iHzbJ6jRjz7ixr3rFCY3MQ3xU3CiXUWvSq6BFUms4xryA6g8SBrEPB",
  "key11": "2TckjKbofGyE1DbTmwnumR2Uy86SQQr3LfwyKmwdg55wNvPYPgZuyFfnRXPdSEmQxoNrkYzxp9DybnpfYbUp21Xd",
  "key12": "3dSP7RRzGzW76xSuX7VPW4KAxgS9euSszGNwmLL1E6ssKavL9DHKX6ijUEht2cX2BtaXBXd5Hd4hP1ENEZxfXW29",
  "key13": "ep85mafNin2iQ7BpshyPQKa8pdeM8EmqsQqCCB1obetEP7mbq6vqREimMv7X69vN7r8n39tmCGmM7FepPhvq7De",
  "key14": "5yG3V93d2TQbH52LSekt5arAZZWbfEEkUyCco4eq1T36PPxz24jM8o3LPYtBS9rKWfuxSRZEZe6XhiAzJAN6Wgf1",
  "key15": "5H29MwHPm1bJ2fh36Zbv4sbbcajTimKSKGhKLwn1ELJH2W7Zmr2AKNnG9ExQPmMKr7ANDSADKxRsHhC5Fdq4bkrQ",
  "key16": "2Lj6AU9J4VtsUMGEP2iJZxR5gmxvWPQSYsypamLTRW9yiay4Q4FGiuzBr8E9eoYsJCp7Sx8UqHirAoEsQRbWWuXr",
  "key17": "5VsHrFYGmBHCu77CWbBjqrprVMwspL2rwktVS43S116QYmJJ1LsLhzon7REkqXUijNWpo2NFsNESbeSJRoS8A9fM",
  "key18": "5CV6etg2GRfwBat2QGcrpm7nD3DUbMUu7Mq2vLNcJ9udho7Lq51ydEmdzorLGYFTZTq4RQ4Ddaxh9kugkb86pidV",
  "key19": "52AgPUTsQ5NZmQHAyJP8XhXiitBv92KicgbYndWk6yezAyW9XStHowGyVnSxQe9uEqChaWhEavubGFWH9nEEmTNy",
  "key20": "5g3SuHhJ8exrNVnWtU3p25EbhU3gTkiSaj54D5vhmzuip6sLnbwGZx4RTZjhsPtaGgeU7uNy37prq6YrPVXG6gce",
  "key21": "4vJEmqTGwxMX9YuJHJCHGXj6i3gZ25FG6KfrXWpw2t2JhkiF6Xq38Yna65QwK8FRD1o7umh7hdPirx7nJsXrFwrF",
  "key22": "2LsDrtw6ticdDnt4vdGhQQ5shsYfEedJcnP9F5uQTyizYoR27ZuzJdG7WVmArkdJvbLBLBEWuahytns9qtnfZN4N",
  "key23": "4DEGQV9rARSZQffdDqoaC87SBckqUg6EE6EuhNSCJ8NJSBNWRFbordrRkXTJenDJR666VceXhbtcMsCrDqbikYw1",
  "key24": "5FwtYKY3TxUAu6JHQKHXod5LrDzwaMbZ5fETFepSpB8xMRxQ7XF2rBSgKVr3nomakP8argFdchd6YVszXVFR3MJA",
  "key25": "3GqKC9AnLKtGFokPP1BevTvMZKt8tyNGmkMHqjTDFMjk3k5KrUbESAL1DpRthhLWWfuoY4HdaPRYGRXP7Zpd8wnx",
  "key26": "3DNJSfzvPJBJHDX1AD5UVX33n6r2f1HCmF2xxo8mYXVZ7WMiJuMGZVxjnRG8hEQz7C3PVyCpCknVxp8hSEiibrW1",
  "key27": "4qCtY7qSqF5pRihTEdPgkCGVAurRk7XCk8znahU6BVYCrN5gakfYq48j3QvWM2pEC9RQpEH4rE1oVhM56tioSYeU",
  "key28": "5fKQ21CKsWBSXyGEscNQqSPyyTiQPCZUkg9BhLTy7mnKza4uTc2EPzz3ans3Hguosv4KX4TqXHGz9Rt1x8f9JAPo",
  "key29": "65ZFuPL2U9F5YRxj5a4d815FwMWrWYfhTkJP6FVU8LLuwKqrLEpKAaKx66nnhbp7usYzSX5HKJHo5WRkZJtbfakq",
  "key30": "2AHssX98Va92DWAhFX1WmzypLhb4K9mihGpm8JB84mUEv43M9gos1DFL4LS77SqwhVa7HMRUezFDgNrjVzkDd9vk"
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
