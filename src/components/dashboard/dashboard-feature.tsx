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
    "3RGcniSLYAgxstiAdeMV2ZSU2D7MkaXAtw3acPSbeJzJbGjmQXHNZnsaZZuUxLjxASK6Ch6PWdoYVYX7kfwcy7C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1X9HyPK1bHUsKFqsfVK5PFiVJQxNXzcikfWL5SQ5pBPNEHZ86zVcZhUuiwgJ5EE2gcSvHRC8CvSJneQeGVzgKp",
  "key1": "4c4Sf8it5DgQ3DVZzoQ2bdZkxvUrgVHi9a92LkKWP1oM3RrQJFaJRqdVVTTVGbR2wQthLDo3v5Uae5r7E7KYMzs5",
  "key2": "5VvnTH5bRsYfoiov58UzizSoLL9aCwA6rXMZtXWaTrWvHEAywB9XN3rBE4GFDbz7yQrKwhZjWdSDZLjNxmXJJqzJ",
  "key3": "4xfCz4b6M4EnbsKdE2tMSQGBJPrSGvutd15A4a4Mt5YFvWMRCQdLZE9FbLdo5QMDnXnPWCiosSErRbbiKDkheshF",
  "key4": "5ZWgt615pxnDG87bWU2BrektUXVz1MnsStw4JptbELVwup9b9gvcCa72n69WuffCUjbetwAz44Bve4LQpyR5yAT3",
  "key5": "4jts7nQjpZw3cCMnKf7kVgAVK8vb3SFLsD6NQoPE9nc9Ky33ZKqDuRmWdoKCk5W1nnhduTthfiX1d5wF8B847bQU",
  "key6": "47CsyyZqaWPT8aJw2FrFih9jQ1K4JW8ohFEZasvmeRddpbdVQyJg5zxVuDX11Mz3XS69T4dUv2y2g2PJhWG6c2pD",
  "key7": "3vD3pnFjgdg8DBVhdSH4XzBrGSDBBB3MsAQgQteV83WaFBQ3WLZ8RiW7sT3w4fGZbSf3CWn7q332qnGzUr9zqcKS",
  "key8": "jg3MJgv45VetfV3Rn18RsLY1azPKM2eAToXCCL7pCkZd3aZws9dGg2DLwqxCHzY6zveanELFy11KscJJa7Cvtio",
  "key9": "5m51FN3QPwASivSzyLG4Du5HrY2KK5foBFpPgJXM4UYx39j1h2xQcZdF2LwpLDBCGjhkzmRqBZEA4TGJtWmTXBXN",
  "key10": "2TCzyyvUxShStEQfoRjyEp15JwUtp1QBztW4AaC4WCveVyvZ2pFNwj68hYULBW1gUNiPPgS6mUbDz2qntbX1HQZN",
  "key11": "4PuYW7KxNYuJp4Hb2WqBzoNJtnJPZwDcMxVSFPvHF163Q1JK8BYX9J67Q5NisvkHMNSNRXyG9rE3tCoLBm18f6mT",
  "key12": "59FSTc9QtJWiAueKAhjA6evvexdxtmWf4U4p747qyhC854x8iS2xEfPL8927xrNUJLrvTHdj9FQfo3Ho7vy5GQHG",
  "key13": "4kQPgv6vs8ozwkRzBuEpTgs6r8iGinXDfaL9GJM9woNmHMSBKyQ6bydvWrJ4xCND4sim794vgEWZkS5hvFosREWM",
  "key14": "BgeivJv33T9nN68REB2vPrH5M7TUfxMHxu9MxPd6zPiXes8L8ZQHP9vXyn6a88DjRn4uuAzuKcfuVmhcViKznMi",
  "key15": "XRYXPLzmgpww27RqgTXEqnUYBkcLvsen6MghXtVYawLgCG4LdxHsCHr1BHTjKorKaymq1ijJgS9kRapMRTB8M5D",
  "key16": "2ULfgX2V76dcdJ4YSDgDMyLEc1M82BxUrKji1E3qRC7H62wZjmQDzPaoFcDiHAiWvpmJQkYDoZ7pCxNjxZmB9A6B",
  "key17": "56DZULixCegHpeX1uLq46H6hZME9FszznQEwadfXBw2kGci9tyKsPkEjjyPZN6T4h56GxJUUCTS5sCpc4LM6FihP",
  "key18": "2LvBY2xCi9zBMkqHLWnwWJGy8myqkEQqmgZtGmFUWspyeX52kqBhidxMejiik7XrnEuh9uyHqP7XNLw5UWxMGeCJ",
  "key19": "krYPTC8YBUXoDyGaiAx3KrW9LiDowzxTF7oHND4s9itLRL4Tx22NMXPL6bRk95zpMJZJvkMQouFrE5yJkt4FP36",
  "key20": "41sD4YAoAN8HdpanXNmUhUpcRLsT73pmGEZj64zgZ9akK4k7LcnBw38thPuCUXG8vEVp5RTaEn5XkQEZqZo7hDDB",
  "key21": "3724HmWFmYnMD2dbWuVgMYbY7ZRcmL5bhJ9Gxv9RkaKXPwPBhGybwqjfgfsMqBXsJQzj6KA48PRzYcdqDCRR6xe7",
  "key22": "VJ7hVmHHDtdzbeiXUzVoqfeQdynHEyQ1Byvt4D4jzBuR5f75FmanLMCZ6QXWJbwgt27L6Sfy4BvKU5eArc1baWK",
  "key23": "5UrBZJtsUnZP4Vy42WG1TkHbLMNuL752TUXqrzRuYWAZqnwnHcZXL2gkB4LGaQX2ox6cHzygpMEdgDLnSPcBViCH",
  "key24": "9Sj5oUDghwhRnEyNr8gPxBs6UzgR2PGabDUzdvA1axg8mTdKJWpigXh3xJMiMnSCYVZNTykpBVAc2JS4cnv8EQe",
  "key25": "23aBQA7rWZcSnXnFhHNLZaed9fJtRrxLT2FufDqn6hckdpysLNzbrh6HT2xFLaAH9AnTr1SepTC5ALx9pnfvJyxy",
  "key26": "4mnXBzf8Wm74fD6GF2EDDpJiQDpNHzFQJTYwjdbH5K7gPZchqtUf6FzoQN6NcaQowSiyiKnZFtCKdv8SnXLHp2E7",
  "key27": "aNZGyLsmQsGxKAK4KMyYi6njet1isyyR9cDyBoa5k4mcrbPJLWPwcwRu5Qxp8SH2H8cYjrH67MqfUbiNShQTraN",
  "key28": "4wDyQhViygskbrFsxVvKtyb9TA8jkAu4kFKQcDRkfztKDkMehpaLspY1CiCWAKcmCEn8fUqFsL1Uh7n7ABZA4WJ9",
  "key29": "3zwzdEhuC4yT8nYhccYuGrckpYMJN92dK9xQfGGQmpmgqH3nhhh5EkCn2jSRVaX8MqSuSvr1DkKLKc62zrRBnYpA",
  "key30": "4mYZG4FCrn41Vkiv2tsCpbLWmZy9YVkUDwqddvWPsbZGkRfQ8yoTRhbFfszStHgByDU5nQ7kXzJtkSmuQzRE8if",
  "key31": "5v1TTJjhCL6yJfDp8FYerLjcyE2WMJV96iVyRzSeZggjoR3jcUqjVZ6Q1X3pjGEnoUBjoDQACZVVixpPrvSvG5eU"
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
