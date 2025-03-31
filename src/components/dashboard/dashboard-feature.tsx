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
    "3Yq46EegEQp4cSHKdoeBEL1Wkugust9NAMQRbRKSsdMX9XMbLHcvYTtA2EWoqRbP9HgLA53YqijmMa18j2FbXz9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vxm94FaMU2PPwgFL3pNM1pQDnMhheAkZVHp5jWK6Xv1Y8LN5M78KLsWz8sNysGWgzrxvQaU334nHCspHEQfj1GZ",
  "key1": "3kNYZKeZWfMah35PFkkCsw6SW5P3KZCn2RBVJGLxNwPLC5mTFEMDqqjuG1fZMC7jwpKc64om5wdLgNu2MLDBgoLa",
  "key2": "N2T9kL8156E8UrAYCV8bKvxmvPNUGMcuD2sDSy1UE2wfKd7k3pXRRKWZb8YxXMsKsG9LXZYvaiKyNE4vFpQA4F9",
  "key3": "3ysiVnTGMKzcdNMBmVU86FQozf56Aqq4f8Bz7wpXLf3VyTk3i61Ti2tM1GvCbvamAwgcJ21ruckZbHvBo9XDq3hm",
  "key4": "62st8bMDxxCLDDbdpQwPcMfuZ9C1DiF5vrvnthV7cB6KuMz7se2YnZRiFuGF8VS87npXy5QR4RxtmaagAHPnjcCZ",
  "key5": "2DkhbE67WyavD583R2j2fRffHBrbBd9GwozfpMRwMGPobP6wqMFYhc4niB4nv7oGmM8tXyhCxZdxrvi8CWfHR6pw",
  "key6": "3MKSTs2nb3NDVawjdh5eKoS3p1bazBgMyFBo6VUHiDaXSwdqCgsRqqGKk5TmuhtYTt81CXDC1SyDz5qrdi72sJJQ",
  "key7": "2LsJJjtf5xrgvVtgkaW1Ze1FkiUA51Y2N5WxeTfogz8La4PDsaThnfU7p8Peppq7m32zrmGvZpAU1Rx7gwAXrq2e",
  "key8": "tiuwYsbAq4ScaPzmRHyZuATk7Y51v965Eox3VVtDDZaxcd1UJToriNdwgjiEm9wEYfDdtMdDSqgu1FCG9wwYbHK",
  "key9": "5DK15aN7pdZyAqia5NP7JjfWF2gNJDEE7fTvv1vfgCDJ739AuBhH2p9w9qWjb2xvP9tRnFVbVYsNMwPHXaTCZBRM",
  "key10": "4aNNnGucFR4YbqVFGk6p2Pgy6yArjFgEAwh6SeJRfsy7ApW7oYrVLK2w5nTxvPrmRFmu5sKKaAnH1BcoFLSBQjqw",
  "key11": "LFneqnGLdrAJW8mBDUrakoUuvMhw1CX4xcadVZAmWPKegMeXZK8cgyibxwNtLwiDfe3cJifzv87CPYsATVtqeJm",
  "key12": "2qxmRm8i3squSCRmD3T2C4rSt11gmWtBbbwKaegkuMozTk8NCJNGZzzvGX7GtZ2xV4hKKKSriJwNvZZxDzCJxvED",
  "key13": "3wA1XdH5Vum3aMJPZ6HEshZNniAJtxqToM8deygq9W4YCPSps6XZaGsy1gNCaoGtsw1yw3vvwTu6PE1pbGaBYNWY",
  "key14": "eysEdD6aQuoeCGzmT3LvEGnz9P3pGJxJ85zJFS4BgGBDycF3W5hwXuccgbxjNNjyDJcxQiaMT3yuqQDob4BbPWw",
  "key15": "3B1H1EGsHeqNsER9JnMUddBz4VzUM3QaJQoMujuYFPwW6XaQAamvCGs98JGUspeTSMhmLnutS9vknwtLmH1owESD",
  "key16": "5FEfGeKyhW5ANVhMC3idRg5SbSDXmAtqAnQDrAjJxEnR99DD2SDcKSLY8pLEsazaWD7hTvjVKvwQuwBsTSLyUfBk",
  "key17": "5KoApkLysCBSxLERw9D42BnaWVtZcdxjCpHbkjvG8eyFo5JAypCGdEK6smzFWabQQzS5NUcJTZ9Mmfy9y8mXFrJM",
  "key18": "2i6ekb5s8xDUmW4SkymRjQjUz8tTJk9scCEfKsswjksbUcPdaXqJqEcWBkrUnfMCd3HMNXwSmBHocuHrsut9HSWS",
  "key19": "TMeLgk9xx5txWaaVu5TwUppzpL4s9i63wdhQYFvjfDmKVUWFrRBhd6c2e5aj8dJFgc3zCfQnUGxKdfTzSDZtqo6",
  "key20": "uFmZ2ZrjRYUqkfMmDnhNeds9pkLs2j1WZywc9N3rk9ZbVSKyyFrq1sX1g3JiS2c6vPY2pey4tCQ4cWMXq2FvKNU",
  "key21": "3t7nnH259iQX3Sg7aVnVr2NpDSBtJp9itnBPjH4EuRg2qAJhZJGutSBBgeQxvftk8aPhqfgAgGq4giTe1hm9fFbr",
  "key22": "PLL7iFbm4fBdiMSfeTZ6psFQqsCYuASLECZd8VW66B6ivtCTCiDCMFR7xppYkFWjWouLyaApVKNQxz39BVqrS7L",
  "key23": "3xCyufBrBoow6PHiMYp9mwECfT6rpEByYy2szLL2oyTUpXojHZ55DTekcbnbG8cZEapwKrjDRJQa3XhoM6vNHj7n",
  "key24": "3P8Ft4iDK5xuDicEE4ijGkx6mp9XGchUBY9gakM8u1Vs1zFuwcqdiyok9f6FC3oYLKKxxLj7uWuwdKnX5L1D1FTx",
  "key25": "3X1BREjgjhvugo9EtiH2sjCD6TnbBNQzKgsY8KksyE6pV57KUfw9kFV2yZABQY7QxgacmrKMkK3WsEwaPZ9UUTpW",
  "key26": "5fyE64xLqHt1XbNostiaabaWu44NTzHmUnwmj8BXUdWoGAvRJ5AnbzBLdt46fsGzSP8hmJQkCr6esSUDTQwqH6S9",
  "key27": "5rdF9UE99GJx42JTyjHSGKq9muFJou6WVQuqmXAwvoAbDj4vpm9AdbVPnGYKEJD3igzeHedUU3gob41xiqFuxGvH",
  "key28": "3YADbVTz1kd4u6doSp8WUuqaaLQyVU8igTWA7FrDyuXMnmxzwsXYy9nvtVyu2in6rG3kEvDK4wUKjNGEjaHAwsod",
  "key29": "4XYVn9EQnwAyLpZ9c3TEp6Fo2Z94DTM2KAXpsa3hS4vNHgv8pVEasM3QVMb1S8EYNhruRLMqmF94djZp2rNyFdJq",
  "key30": "3x4t5Vz1KgWQM28L9kv1CV8SEQzm34dmz2XTN8cvm9Kuw11XaMFVfWVCX1dV6LoVkV7F7LJBeLwGV4NgXmokhEag",
  "key31": "5TC4HFTe1yGT4s8XdRPL1cCY7LMhPquh9XZZ4G1Dr7RDggGSMQtKotgJR1uBP9TGn19meXz2WPjYzVJ1iunL6iZp"
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
