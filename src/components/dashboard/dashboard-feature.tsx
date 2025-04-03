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
    "2mDtyV43FpRY3D4LddDt6hu9kW8yeeWkiWNeYY8n3BUycFGqJbvcdHX6REvs5gwrov8cY4WKvMczHduiF3uMxhbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTen6D1Bs3fUe3mFCE8q2tift8cPDbk7dkNYJwSyh1QuGqB6z38MRFWnPsr67kucF4saXfaQegLAVzwENENAYB7",
  "key1": "PobCfuvg9Pdoai1MGmu8pHmtcEWmALP5zvoKR4agp4Jo28N7MujziaYn3gdS8rxyaopCEMgsGzfvmHmDmN3hmCe",
  "key2": "2HxBAiQu5txbygUWi9mQTW65WokaF1qvfZKehnz58GxqagrQeZkTPfbnMHATvzcs98XKMj8FJTsTtrWyBRuAFZWG",
  "key3": "5By9UoY68y8YErgzeSvch4DydR3f3xiGQy3rvWibf8PSkHg4RW3gPDtRopD9f8NSHkwdMCFfBxELNnRmL7E9HCBi",
  "key4": "4HtGekSAoTFYBW5GEp7nP3w9JTCRoGmiZmLymW9SUH2de4yfMfGM67AAQg4uhGFYVp6G3FnbuavzT9HS71G1LbmG",
  "key5": "uXPJNXvXZd9rRKrWrr4XAdNAeqpFxZeacbDWD7LvzcaKohJDsny711Jd9WNxYbFuz22D2Nbyq3TcTt2dQHwJhB6",
  "key6": "2DBg7EMtdY6dmRcXpdXq53pBY51jKi5WwHRqSLvgmJdGHtR1VfV8eRZ1tMTUt5UKuRJoM5zgvKfD1nfXdiVKLFMS",
  "key7": "kAkbKFBBHNjq4A4iWjPNJ9PvuG7fPi29NLAeuvBTAS72N2PR6gr2QLiu9JjXW8JKrvBErzaQTTip7nrmFPyjedm",
  "key8": "4jakhYZLFw9kFzd9HUZBkSESHvMRLxzQNRY5RpvzYTQ3YYmbiHFgyzLKTnbM12Wh3T1g2BYELQNLaPLu53CatjPn",
  "key9": "3bTQ3vRYWCRG6iPRgLpWBmh3bpzuSmAss7LwwogSTp2W2xgmZpesHgUiHVu1izZdeoQ69iSBAmDwPMo6Zyzm7M2o",
  "key10": "3E9tk51P2ynCPaH6zZdwfnRKAND9uU9ZgMqZszPk9tmeS3sS5u6T8Qn4L9C2dBWt3hyAF7Qhd4jCts4A3iZ1vCHF",
  "key11": "36emDEFbnsBsWNLVo79QbbyBBdEwe7qefuhTK4zH4SrcJJr9z6FduFxRESRrcmkmuLwN2G4uQTfVvPXFVmncnPAJ",
  "key12": "39SkMTq57gxa7SoBNDjQNfV66CxWCrQgEYn4NdUXQrqrzqQbYeNiF2FGRcLw2td23oPjfgEC5v4PsQmQM2Kbeu21",
  "key13": "4CNPVgsowcURMCgsTYPLtup97W73ZyraNsRrBs5LQ4T6CzAcEkGqeV6ektn3HBktJCPfLMqrXPHiLbVcxxcaSbdw",
  "key14": "21qLP86kKkL2eVog8dutTz4a3Sk12SGdn5v5oxXTCdrGNLbwmoShPFExcG4cYen6UbtXHBaB7gKCtCzStkjk6iYL",
  "key15": "47S1CMjpCPk5aMgfmwL3PGScGJDVMXGQPA98qyeMcadrCuUpr3pEx3BbZFBqiGbdUDbKNYTArAaQ9fbDdgQsSDRH",
  "key16": "3a5xm4RZ45oTs83ij1qYYoRtFzzgfHNSkGwaNa42skC4Sh1kVuN5QVfokrgC4gvLcXEyNfpJHJAAYJgdzS248Vkq",
  "key17": "PNd8e8a63jQiLgMrpHUmp5SJ8QyUoGMg4JGU179F8ecF8Qp72SzYGTqXK8gmoqLAFnUr2u7y1TunxVYoeEjLB7T",
  "key18": "67fngU5ZsFdpRWhqKRPdzKXmy848cxJjKJm3g6Z7TJfbfWPRRCbBYTEMpz5wEopR8fFQqMnfKmdV1mLQD2KbPJRS",
  "key19": "4LDdBjdrMb9phC1NujmUsMxmBiCSc1H92UKNrn1eGUYDUEunezRWGsU4hn4tSrWN59ZkrZNeAr2ZPgQmqzbSkMYA",
  "key20": "2QvGWiVi8sRJv3q3JZmsnoJwC3njjYo3B3TNsFnu9RaqRKT3nYFbMpZPvcGEyJxg8cPT9YXUHZEB3ba3RVKsGtr2",
  "key21": "4EPY7ePbCCBijpXzBHMALsthHfcFSRPa9BNQAZGwsdd6DBuJ8KLdc4zTN3X1Kk8QCbEcUhhrHym8B9YX5EvKiRqN",
  "key22": "2zi8URfhdpkv1aKwGUAnpbzTMbmXkpL6ydXN3ySXnBAHQVTV1w7Fqh8BbzmY3nPLLr7ajv8MgYnQq53RnKb9QtQh",
  "key23": "4TwwghoCzn96vLpai1sVcUNijwg7BMeKrD3KdF8G8KJXuSaDh6a5iCu26WZhdKQV9d9b33Yru6s5QaWs2RaKqpEm",
  "key24": "5e2wZzq8oyz23QGxZntwhHbWiKPJoziipFDQoFXE1rbC5A4YwC2Z4F5qVxa7h2ALJU5uUvnZhnz4i9UWuEoe3nR6",
  "key25": "3ua4hwLrKyR5HRLkcHj2v3X2faq8Xo5FckZyEokETZA3VSuTCZncYK35AtbwDYeM1xuL9BDbnCojoZkzJt5gTZ9R",
  "key26": "4Bha4UEEfu3b3Z6ENSLewefQ9pJ76doCaX2oWYZZ6jKzABBFaWT3dgmQrhKxvsrPhr93D37PJaL9dwr2DAMey4P",
  "key27": "3AKCURYuK7FoXWNf8fMcsF1Z5npmmwCqTzZURiCtAreH7LfdsASmzBTSm9QWfzWeP5ucaLxFYLPmgCneSidp5bwF",
  "key28": "F6xPDXKAwG7rKsWTKVLyUqoozmvEy7LAxqEnv5iyG8dgSAwjAWnSiVUpeE21hQrjod66wNB2T1NUxEHsrWiFiCW",
  "key29": "4PCJW7Z1sgYRgrPGvA4dycP5K3G45JPv7HghRyFQaU9FqsXHBREza8WSKfakLEvxyDmoSN3jaTkfZGeCz1hN8qRK",
  "key30": "2VVXXLWvopmKfRkK9HkQfbd88X1TSuhooauLNu5yCx67SUpWvs2K3RWdryed1LZbujW6Jw2PS62usEb5FoNrtGuJ",
  "key31": "3z6nEGxzf75q3jAoWf5KDfQJAUqPuTSfQg4Ci8mY3ymEAVp3twCkR3JNNWddrWBYowNwdm7cqAaWwDgxAhBqcG4M",
  "key32": "5CJnvHX79EyyMqk31DveoTGKrJKHJs9nf7er6ouiV2iTtVdE54eQvpyfBf7Lp9FBL3A23iYCy2FXdxvUbxuLtmGj",
  "key33": "4f9J5WNcCTayTYCEbSx1MYo1v18SR3Y45ntHFoDViPidEJ4ZY8zWWC9c2Ug1G8sug3mQdG5MokNBxznraLeQK2o9",
  "key34": "fRQqY8hXSum9eGvAMpWjKooGfcVfJb8mXURQxsygm3MziZPsbeFuzWi8ziUHnifCdsCkAbu1uEbs8E9Pkytna76",
  "key35": "4XLbL4YN3tr3PpvczofwHTfoUszDQsZ4ajqpuyrgTaEvUF86reoWdDyzV29tExDRQCfmfJ7vgDL9RJ8La9SQWxMV",
  "key36": "4nGbjfeYVBYuWhE5kAB6kkTA9qJJ8QPtQoLzqAJ7NsfcebV1wgYjsQVb5GHTVp5a1QgBhsnrWFNosh9yRbpg2emg",
  "key37": "9NQA8oZGArS7gwGjsjaX4pVF65vM7j5w8UbcPXgjC3eeGADhhTLnpw6twMqdGS2rbeW25p87e1o7v3zFSmBeDtR"
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
