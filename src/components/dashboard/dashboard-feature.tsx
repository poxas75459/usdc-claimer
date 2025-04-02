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
    "5nvM3y9T1PhFCU4y2tQsHBzGUo9rnsvijTAaKZd4vQA2jcajdTKhAXX7BRHMbVpATmFprU9xm59fjjC88jB5ozBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E55PnPbdVnpF5bXkj9skaBohjEhwCZJgdRKznM77ca5A19yEacdyktthwYCTamJeJeq6gt4XYSbjH8Nh85QFCws",
  "key1": "5U9VgF6qgTikUYKL7cfdVd9s15ZqWC6cpytwM5SdnocpWsgEaPuYFaMgJLwZYsa3E2cbRqKmEUWWchQAWSJSzKdD",
  "key2": "3KieCiK1P54ERYztSphiPURaPsXdALM19hDPjS8pghEpV7ScroAgc3VmDM9nfL2CSKs3VZcZNRWy1Qh4HKjpNB8p",
  "key3": "Nuc3zGEQPVDPmAGzokYw1W1t5Y9CWMXB1Mqx8mcAn7WQGw1f1VrYrC7mzUqge1Yx3ZfzYBLFFHHUT3q69tHxzHP",
  "key4": "2myGrnZuqgUBRjfqMZPsgMYU1roYQ7bRWC4M1tMvwkW1D9GFQR6fvZhxUTy9ScDqiDZqR5VEoRmpoEPxMHb223de",
  "key5": "4Ec2GTX9du1Cra4j7fkQzqZ4XVB4u7Mb11cr1Tk76skWo9P6KtBoRdepkKAykZW12htFFneittr6VpY7bC5Axo9C",
  "key6": "wVtyvYr8xMVf6Q6h5TjwRbdaz5xqRyrfnb9ZChoKRHLQ2jg87Fzs1iurZQh9kDC4RsKMZvE53H6R2mkuiLrNWL9",
  "key7": "4KR1unt1P2Uuus17C1ABchgLB3rQmqeAL7od7xmFpFrDTx2m5YncNN3XkQZdtWYvGdRonGwYAgLQaCo8nj3JznCE",
  "key8": "2kkyxsW1BMTYs5k3gMY93aWxLnMEQKxxUaFQ3GmE2sBQe7SBLT7LKB72spyj3YuAAuzhHPza3oDTPWERbdN3iaVQ",
  "key9": "5JT79jx7291EVd98CcPAwgpyWJUwDQfw42tJ7aHrS8GiTSGDPekAguw1x7kwB8Jsu9tqiELMQFNJ3qkXrvakrrkU",
  "key10": "g8SQrAkh26gyCSJjzKRsadTegCEhiyjCutdV514CPdjLJWRcCoBRt2T3DLpCnmiedU3WJm9aYgJhfGgDh8LGtS7",
  "key11": "5nron65wdCF62dQFpFQjJDPUkWYbS8W7JZhwewpc1Rsy4Jc2sWMsA6h8Mqy595WpucTpi1bCQ8Ss6hL1UcVmVuMo",
  "key12": "52zoiDthHDKUPkoyqCoaJCn7TnUGBLQxNuQ4q3qVN7bAYLsagteKjRUwJpXn1iw8RjfGZ2eagVPvXrWuDfyQeJaN",
  "key13": "4eznHb21jXWnat6nz6of5Ms8mkFNnZLFrV1Gjc8X9ArQAyoHyCK1LBQbq9YNwGPX8BdF34yL2wdHcbGspviVtkdo",
  "key14": "3GxaE76BSWd8571755Twm7AQaHufK1cyv5MihzmMacVhisKrXSLXv2tF9bp6nKGX5DnbEarGKNVLiYFsuykgLqiy",
  "key15": "2MQwL9U5irYmK93vhivaa1ukiFm8omMtf9QxbiowBNA2T7FxWLtjpN7EJf3sKbxepZR9UaBUFeiUT8YoEEvEnwaw",
  "key16": "2qtUqQ3AyYz5sKUrtjAoCmB7PMTKvenXZWLGwHdpjHmbpc6NbPGPVKH7gEAbno5xqLgLrtD2zrZ6PaynG5QVfK3K",
  "key17": "evMJnwdQYoB3E76VWzcEHZEWfXZHsjnqmJ9VwKTbdYpVZ8G5KuNDFDYAT2VYCboL6BZ2caKZ8mDyd3Zp1LMTZVT",
  "key18": "qRTiEoWQ5onrSue1XZcdZgS5Mph12QhdsXfnugtmZpQPZMTsJ9JjtRjK5WwC6WEFH5p5iBgEN7bBvAopAv1XtMU",
  "key19": "4AQWJZFN1QPVte9Qcry6FeeueskkB58XCUucy8vQUvWg3Q4JmLif1kyzmJFwnicurptqWaSr9pBjTJYgqu8u3eds",
  "key20": "uXsr2LRxk3urK5vuTisuAyHyTHp6mv6y6Mad5u7Vs9RKE5ZZyFPxAgRyVtmaHYUYV8HcfgQrMuLLdrz5yW16Efk",
  "key21": "4jSGofUiu8GhzP1RzeKF81FugpE7ge88pQwTLa9d8fAqpoT79yBXm4y1rocfQ5XkvG3wpLuXk1mcfnd7LKshAoJT",
  "key22": "4M4CQDExQ2cAcU42nYhVhaKsSDDguFWHY7oVBvofpPS8L7T8YthQqkbLgVrqMMsNqm5FbjtfJip68KX4uUia24iD",
  "key23": "4uAYJPPpa6psuJ5CatzJty571cTnYxN5wSbV4eF3rgwR53RzmH2PHf2qP6r75nWgvvo48ZEn8y1pD3RBDRFVZJ43",
  "key24": "67FUThwJFZVGBuEMsok4JpKnBKK7Vi5yi1bW6NfQhBXNw6S3HBUCA9M1qjmdKrqNXADvaHPcTu6tjwNA7qFnjkyz",
  "key25": "5Cdk9JgRbnKoCRqcW1KoeSEn4rWA9r2ECQ9bi27fEPhE7Mfus4wEkgPWMmL7TLKMJ6q8rSwMbaVELCXQFZ8qB6Gy",
  "key26": "3NYYRXMPF6iZKRtvr9m2AVnXcKZiJ3nxx7nAtfBso1C8WEYBF3EPd1HRJJr5U5qPKCLjmuiYU4MGy7cYGpazivdY",
  "key27": "4u71EUvEvrUqQmd45LrqDQPwpUyQXXPsbG5n7zPeSM7ENfqkbeo7hGbaLZEm4EhutSaCBi8vjbb2o7XmuwLNtNFc",
  "key28": "5SBtvjxepemHH7Z51B72uGS4q2J8bVowDLmQViqcTKrxtCPQDEt8SihC1uwyUEyfZ3jbds6yEMbAdA3M7GbjLoyr",
  "key29": "65fbxfHq8GyxCEix8XsMTxsMriSDv7vQ2hqcR6gddqN4Lo694WkkcsjSeyGjerrCaQTjMQVuPB5EdL3Rj8Ep2biV",
  "key30": "SEJjW9kmtTNNyK83ajY4yonqV9JN56w9mSeYN9hecUHnL63uhfZDKPN1dkeEPUd38TEAtUgWbiQ1AUHDtkfDJ4U",
  "key31": "3nEnQP55HHPKG45oVYH6nS8ZqLWkKS2sE1TSiuWUy2ehrPEuNNqRGCxX16DpCvaoLzydXLe97cA3z2tH72CiLFfq",
  "key32": "2kZtHjcd8nERqea9YuHzqeq7udoJdv1phDuUopYKfpK49sPRcgLEtpTBkhBkXtxrivt4m5d5pcDdd3NG7GWqS2GZ",
  "key33": "3ZpttiuXEKAQ3Hwn1zCTxm7fECuyZexbDrq4BEFDJZowVcjZiXCXw59961W9ohyqSaMA1niuPUGwmhoSEJ5SE68J"
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
