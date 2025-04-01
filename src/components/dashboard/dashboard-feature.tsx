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
    "5jheWTMcm7Ndo2iV9CS3Z9vG7oHgLhjweJYdKdQ4FmgFYGmGnUwjqXWnpGMhpqkQa5zbcXFrvnCz7bBzsJAFk7Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iaJQYj1edDACqUXCLHsqGkuKJUjvaPwLVv2kEooRHCqcH8tQugcvj5aKr2Cmto14e9D8zXkt1dgroLWAeYkTc9v",
  "key1": "36j62RqkwFiNSSpkcjLCVLMSbzRQFfvENY2jF3DVhfgrkuKTBYhgq24BgU5o9PjZH5c3LvE7V5WLG6jWaasGkCy1",
  "key2": "3AnZc6DDoMZhzZuCPAtrF2jwbMQDVQJvykpPN2cBDqqap17bpa2M6yVcEGAF6DhmfBfvwoteQPCQL1axEY9qxLZA",
  "key3": "gHpYxGyVjQfVEGDQWb62XgnUzLQV6gj672scRVk2uWoNv39MYE5mac8hkRRAK3K3PRujfE7aUimnG5GpcnAWbJa",
  "key4": "3Z7fmxQaN6pquPm1ACUVbDcWDcvA1iFUBWxUKeWWZqyWwCPY6hD6Dbekja6qZP9dfw9sHxcZ6utMAN1i9QDrTkJt",
  "key5": "26Pi6UHdABW8ZuCwZhxLDLqw4mv8bmtrRrh4DcHtJeN2odB7D9S2Tyy8oN5eQD4V4Pm94okR71rSjNtXD7AfSrQz",
  "key6": "4AX7ZqKA4z3UQtwek3cc1tty28EmEnHs6dmoSo3JVj5RfaNXnJfeYjBQPsn2cN1SrJDaX1Eya2Lmkiq7sj2fhh6v",
  "key7": "626sfefSxVRZa72cECSqHq7zZBdu5tvQpnj8azu7TxpeyT2X24zVct7CDeKpSycjvXFgKBoWF7q5S6u3KXPHo4Th",
  "key8": "3WdwQqUqrrXpVBUwcZGFgdeCXRjxP32i9g4ci8UHnWTTGCfsiDGLBuDsfDFX5qKgiBRtC3VXGorbvFtaG41YWvmt",
  "key9": "24ySSzpywD7nk7cQpMxJcEbLmCs14SHggvhcrTMSfKNGnc7ZpGLhcfaBJL4ZWGuYUCjbsAtDEW5sE5fryfAwPWYK",
  "key10": "qf3G2ch4zyG9rEDDor52WZoNSxDPcjcHBc6g3q3gHCSxrzVzkNksZ2d8QMpk5A2S1Q1M6RGeuNjJkSpstmyF7QY",
  "key11": "3W76bxWZELzw8BChwCTrtb6NkJMAQHu5czzAT7vfiM1knpy6wbbap1bZSJn9DMzimDFEG1vsyVoYtHgsYX5xbRDo",
  "key12": "4rQnVU7o7oYSuC9BarcGzrgowFDLkgo3jurrcLhDD9uUSZrX5iGkXyWng5jmJyNcVAs3ZoVHkfJym7TL3EEC2QSX",
  "key13": "2xQfxjzuQrMzhu7WfZVmeRu7psqPw6uniuknQZ1aGW55q6Jx1jm8vVkZzarfvKrsNjuJnFYcYEGx2jYCzJQpvHvC",
  "key14": "2juujhij8btaTTiuKPMT4oUKKmbMvGHrJ2oDi9Ya38gucBfJzDceEzXBsGaGbnD7XDFEMQSsfoYRoiQ9oSqvJwkQ",
  "key15": "38tuQMqNcq6De9nGhZjbD9hReB8p8QbZaAWwcghtX6oxec2Hn43oQmVUs6oDVx7CG1asbsKrmrLD5rBfs1vQpxnU",
  "key16": "59kPRgWbR5veUPe1z3RLipJEoQdtA63zE95a4hUn1JRTqoam6QoAt3L5YL8ScRnkEMTyenj2TFoF6fq8AioAMtYy",
  "key17": "4fHr3CxNxcKys62ETfUsR3FNrmm7XJRdMpoNGH4hngnAMq9sxdMCJdo1fiPCseMvBYGL9RQaoUUfSj7hf4z3FdRB",
  "key18": "4RzooRQPes5WWWNFgaXbxare9caDEKefY4UP98cMG1293nSwcUTeB1aMoFphH9CYyDPWtmGF5XnPZKtR9M5gycXM",
  "key19": "2qsohpP6UFcB34kpJCatQ75j5vyTR81KNmKcAUzeAD6cixCVT3uoRwMFLx34zKmP1eAxARLiSS5JCNXNvdcVhshL",
  "key20": "4zVQtjr2iY7haQt4xSG8uZC8pHMrKvHvCNYUxMzS7JX5FrZJgp8rBpcBy2FXMWCJNu7J9sRLpRhAZN8ieANjiraq",
  "key21": "4wYif6PBArrE49SLBRfwDVh8cK4z1mDvaGQ3HS3YPF9rgZVbeibR5maA56t6zcAVCV4nrJhMUY3vfpqAobJptgpF",
  "key22": "2m8K87LmxiZt1UM4ZzPoJfBRRAg5nibYBR9SefMYoKdbysFec3bFifjCzz9NTdnPdkJ9D1PcxtJyGr6UTY1HzaKa",
  "key23": "4vpajwGGetZjNFxUNy9hUE9Acgvm6E4cdm8mSMeKQYASkLmBQkknGrLuMqXaaxw8fjQrmA2JXCpg4GSwnmedgcay",
  "key24": "bLPD97fdnqMD34PY8yJbJ3f8fNiDA2d6DonUNX9qbGMb6wAhxoU9EJ8jFebN2p59Ugv9gYLfqavG7mN7HcSS9FN",
  "key25": "3rTKBJos2cAXovHFh1R21CdenN3qYfiiMRb51xH6SZexJT5gL2q7ndHcPdotuxTFcvqAFmx3U1Us64FowJo1jvum",
  "key26": "48d3sTkdH88RVGrNEYxCagmRoesTThgEQ6LAetm2JTPn26za5SKwK4YHbDBur4kvDHKAArvUXHzgvPWHFpegA9ri",
  "key27": "3MBjtjQNLGGiJzCWfkVHctsc41MuvVTC1mAXY4aeJgCMsaoZPKZ37kEd2oLqVQ4ChtyVPAc88YqcvF7RnE7PdNXY",
  "key28": "2X6VEpQCaF93HwkzoNXjLwhP1tYQoEMEnvRa8Pr8yuo6auDkUcAeQcstxH4X4Un12wDpMekhAx7upCjufgkijqTP",
  "key29": "4CF9Pe6J8XLdQpJog1Z1YD1nuXLx4wLL2CPqZWRD4HAEtz23q8u7hKWxUxCMSVzYZn69mQA4SoVKMnW3gXDZnd3R",
  "key30": "5WHdZfAK98yFUJtShWwyMpU3P74gPbPQ2sZLat4NmZqhXCyV8GuUwMVoBAnDktRKQf64WopFugMhPP7itja9XPmv",
  "key31": "4i2qtrg8o5vWj5aMUppybtW3BHmXf62GeLbfg2qZJXHCMeCbHKAMf3urWPsewLcxL6bEfBGJ2Xmrp7o6zextM9S7",
  "key32": "2wJzuMQWd3ehEoyFDA7unE8MvBeNkrA6HYW9Jb5NMiSB8cnfccNxmF5hahettw4jQkp6f7PgiGTcrePHxwZ8Ayy1",
  "key33": "4rAcoQ2FVkAHLRuh8FeTJdXbfniEZ3fvutRdN2ZVp1LiaAf7NgGn9jHQGnNX98Gfro6PLGvmE9kVJqvpM3pv5CDe",
  "key34": "4BYGJmJ8Yq7kjXBBeADar3yyxSpczpuJGEjAM4QiYPUftrpjixnmX7U9F5SrCL8Hxj6JD88E7mLrer58KH1gy34K",
  "key35": "3MMQ6jrbqQRcWsaaCaaNRLXywr83xB1rD1XopoP8bDaJ1amJMXR4WRkY7q5SayPP8nLsWj1imGUip9p38kWW7BNo",
  "key36": "3SH6u6ayjKf7jxCQc5B6FbBmmGDogvbgm5codBL6kohwecAET8ncoxFeaZHvvuHyXE9dtnMxDKuSLC3Fiw4ydNvm",
  "key37": "4PSUw3uKuYaBUGFyuu7tQHLCvidnM29QAu1acxFZsQzUmyV4BVECUwmkSU9ePqvHyfQph4siNjQdDqLFjoyPafK5",
  "key38": "3B17KLXYuNtiEddpRx1m7nY7AwLCDEWFFcvEKMy687LWzRvCpLFmcYNPhDmL62njkKKDaG7aK6MoY2Dm7NuKSAxY",
  "key39": "2hV1owvceUu26c1vSVDNN9KVHJD3VfTfPM42HTYgUH87f39cZCCgycmAKgrU6AuRg52d61UiF7j9TVAJABD4misq"
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
