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
    "2j1bVuWCXb5wkiZUNc33eVJa657ZdXpMyeKQm7qMLZ1Vje4TsZ2o7XnewjNYjx9xwHqkEwZsYb5SN9GinuM3GxS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cd9Q7eCCaQRKex9vxUTH6GD1Wg2VisTFAnpfeh9GfDeaKuMKgfZBjF6Qgk9oBYGLHW3H2FucjmqyTNfgEMaKRPc",
  "key1": "ZCQJ58GCqwJRD4LJfYCJKrvLvpR4C9WXHrKHWZgbEdXw9jk6C3agSvPadLqDbpmbDQmfUKaA6rntyehT4YGmKkt",
  "key2": "52utBPdEqtuhH4QqFAHoussMBybmbSR2N8R4Ya68Gqnnzgr22TaAKQUXkYn45VaHP132kXjh9veKgnjy2V6hsJNp",
  "key3": "28be6qhXYxvXSjR9SJg474vBatyXFV6qe8pGK8hebm9otbnS9KWsvG3KCTYYD5u4QXHLq2PdPLtzCJDPhvhSvoGZ",
  "key4": "49tMiPBG2J8o8XnF1JAuLoRogKkZCzKoDytmy1D8D4VBmqEAm3y7XGVD47MzofDnM87CuZ2n1nFC72BhH7fupwa7",
  "key5": "48xP874ZNQDAKHtEpWyZ32ZpTeG2HCZFeYnDoBvDbpJKH8xoSmWaec3T9igVBxxXGEk4a3cea61kJX68nbURfc7t",
  "key6": "SHW6rsCr9LLJ7oqk5LFK3Y21GrNN5ybY5SqBjZCAAoiJNL1qs3DgC64Eg2vNpGh5siWwMbhcsKBKNFSTgUkq64o",
  "key7": "5m9JfYhXEjZrq56CwJoGGo46iwqY2bpvptQrG5NUvG5nCTyptq5BVVZa9bMGkyBo5nCHFdsbg7wkTjj6pV24D5vo",
  "key8": "2Jjy2rYJnfrbZpnuBmMHAdZAn4WxStfHtVze1ieeaCiXU9h1BcyL8QCH6CoXd7TB2AN6ti4RWGKqtuPCjeKr4nKy",
  "key9": "485P1W4pzyLFwQs1wxQJfW3QLcg2mFaAvn6sRnhM7vTQirKb49y2WR3XDeFU1P88y7wgZ72AYxZTnejn7gL2th7Z",
  "key10": "329ujcQabCSctwZZdvFF1vx6TfV95F3sVCETrQihoxwsMPAPkbCAXRUcKU9LQgevQEFKEhPWDGHaKrPLEsHkG3c1",
  "key11": "4DUdgftY69EoEEZpKw4SUaahU5K9ByRgJRWPezgzYNvpgSMgcrgUdhY4iQPDHtgAvgqutxfzpd6t4W7KfnUxKYsH",
  "key12": "hN31wvhi84UyAGqKuVTpY1bj7Doxwh2AgTtDXGkYSnsWuh3Uc4zzv9pqZL72uCPW8a46uYkHmr3nzx1jyXGKvvQ",
  "key13": "3reeGqn5EEomiaJQ9MHqfDuAjWT7Z39wHYmQMq8JrN5bH7kEiGzNDbTnzpKruu2vGS3tnwP2BbRZc5AwTbeYV8Sm",
  "key14": "5DhmKumcFhvCEJBN6jHSenxFYQ4CpdJrJX9tJRHauXo2AtNcavkQe5BNPo6NxfL32V74LMhjQGJhjgCs9N1TNjP4",
  "key15": "4obz3rjb42p1jgKvno2UqUNkFFYKtPZ4HdcjdJ5pYZ7TZc31VUfUusBgUH9emLTpVAnyfphhJkjeGcZ99K1WNAg3",
  "key16": "5kGPtFt9ZcR5GkrpYWAVoVmSkyKqCNEdyoV5gHcRTriFe59Cr2soFHdBUV4YvCdLsHCAJJcq5HypbHrrn4foTeDW",
  "key17": "2sL2WVEbPk4euKLXbTMjThQsCsRQdonCpPtPwwwSpQfnMJWTzF3D45BgA22KS52YEoShyZbXJuuJ8hRBdVdKhX86",
  "key18": "4w9kovkNLRufZqGo8YD1ZnMQW5DLFNodTdtY2yqk1RU3govfWqjhGvaPKgh2dBeLNDPc3GDnBmhwMELSB4Jt2GnY",
  "key19": "3LPAZ3vcu8DRJiuvcYdfF8fmWdyniDvD7WFCa7izJxVV1tY1VVGVcPZugGa8vLvFsgGJiz93FmHR21D5s9RSXDEP",
  "key20": "2ebfW5rppY8ZEb4FSKdLVV7PjB49XW1DEMFzsVaMtJT15gAHqVcEEbxSR2PaM76ZUkqMJDwHfhFo738WdJChosm9",
  "key21": "5PL5sczaFgky3Dtc1KK9dEQEwvUKishZBzTQr4t3VSDSucZYhY2giw53bx45ZgmWnFNrMhc6w5Ki1AESnynjHozu",
  "key22": "4F7YuwKNaM3Rai8vsNLnPcFoKSrLf5d1mf2t4oRUpcYHvHuQRbjcmQ5MSicBj8n8kd2iwdaqEs7RhniHV5Gr5rVS",
  "key23": "4VXkQVPMdsCRn5TnXdn1aDaov6FiWHviw4iP4nD5CXWVRUeKx7kRCv2D5mvRFJaE7V4yEuFvU7SuCm3awcgAk4Cx",
  "key24": "4rBLmM9qoDY3PbtEg3JuFXpGXvfhuaXMsQRsKQ2CoVXmh7q13r8UwKFjfpDPfZprimic9EMMJR2c8et1ZcVRa3Yb",
  "key25": "3ihUwn3DWCazBJg51H3EgZ91LAach5SeTLsY8Ak6c2VH19Jrc4q9ZnSvmjzgHcDKcaxuppsU3LoXc8mtd5cmJzLX",
  "key26": "3eP8RvxcLppJQgsCqRMkQZpiNzo33ZEunBDrChMrJMgTBJq3dbXKGikY2RPToP5QeFpctmvLiUHBnMEYaizpbWcy",
  "key27": "5Ktj1mQnjoncaJC2VouymXNK4tkkAnVnLccpPiJxgWbYW9J3ANLeBDuBfTTyTE5e98hatebeLqqbnY4W6CpPoaTW",
  "key28": "3EcXsRoUAxpcCbKE2uH8FPjGcrKyPwydejfSA6EVu7GbQcGQDi97VvLoPMmudhBjpUMw98JGSX2FKuHyRKuduAU1",
  "key29": "2t6FyeKAqtm8n5HhdubD7g1da8EeFXaTDfxzTERdjHH9CNV3LpuLj2x4QdggQmpkMcM9V9gSQi8zpfpX2iH7smrq",
  "key30": "61njpoeGxD1Kbu4eEzR4jcbC6bkxcwaLTWd6qi3YceHoSvXXuvqrTc5coHpTTtZNDeKFEdxKcxiBLZGzf83RmN6z",
  "key31": "65G51cQYqZfm4uEUZfmGawfqRYbnqXuAXayR5e83KwTv676APpUXbvaznk44v68Hdfqffzh2Dr8K6QxntBUvffBY",
  "key32": "3UqbtFx93VA37u6CB724bHvVhadRtcMJgPTP3VgrHPnZ1Qt6Mrmpb3gCdkELuU4y5hXneBHmpEX2uKcxqYYXwNS4",
  "key33": "3ZcbWAYJpq7vpd5z4E8Y1XTbkkbo6zrBzP8t8MFoZrLepg8B96S9X4Y71PwAHTmhRhBJbdJM9TEfibzg7Trjtatc",
  "key34": "5seBbox4fV6S1K8ZxpbivNPFDnUzM9dGRG8hUDa3f8YFPmR3v925RM39Le4HeAectALYYSJBiPmpvxeXE1XzAawe",
  "key35": "5nbbdNB4Lz87f5ovqCfZcu8wSqHvmafC9bDHF72KJboXpFSC1J2RruiDCKbDxcyq3ZgM8C46cCBtonTVXAxBFShv",
  "key36": "2Z3UYY8dUz7VqtPjY5T85Qgzpo6x6VKmuKB6m6dfGJ8aqCRaC7BNYcDjufWGDfQyxsBZNC3AQB71udZ1w8Uo3bvJ",
  "key37": "2HpQJubDjCAgQKFgjSxVp3282pQHnLmBCHshRtmDei6ZoCJrPuAh1eaqVpmRH3RJSrFq7abrxpeNoGQWxeTMA1B1",
  "key38": "5RaSWiFfq9vgmftqB7au9v65R3nPN3FkTEXyzAT6jX6wnt9pBNHHXmeJMpMy4ETRszKPN5pXt5FSfhtqnMxcd2yA",
  "key39": "5CnsnF6RvVCoRymuq8oX7zhJgYeukczrcdFm7uG9tErJ2u1JP4kLMNgU7G9dL9uJ3yZWcqRW98wgY4CN6shHr498",
  "key40": "3qDK5Jgx1HAXwcak69mKQVfjoLwRr8c9jhWC5zor4MZ2YpGA4Saqy1f89YF98JZfrr9VHSKMhn8RtQTFCrJLMMEM",
  "key41": "3so2HCbCMkUJWmVT6P5jPJCgR9xYFtKp4gERB9TQQFzmLgmGZVdXEYkQFpKyv8A8KK914Ci6WLgKi5w6RkKV4zu4",
  "key42": "5twm3NWFVRo7beg5CAbNgDy4GgFFxWE5NKoijFDY91H4mXfLWGK48GxQCkfZCgPTpKA71nyjj8KZwoAPD8J4BNuj",
  "key43": "2tZtBrPJ5XXJKkcatsPQxKhHk4zoTnaPqapQh6JRXXNNyGksMBrMLvnbnqbTxU3QupjJSDgGKyR89EkjY7WJgRs9",
  "key44": "3DiWnqZMsstvBiYimDQd7VhhwEutgpnxSWXZnvjH3d6TgbYD3VuNseTHBTKRHmDdXkyU5bVRK1XCbJ4bxcqVk6qU",
  "key45": "4YpwTzDSNuobQJJUXt6f6zEazP33TrXLpDkpW4PEichZ8abc6NcsxvggARQpX5UsFBP2cCoJJWZiKHNTdDCLEfWf",
  "key46": "JxLtz5wxtwRYciyMawPfRikxjg8AnrUKPCUFgUTQPJQKVxE1nGoReCBCBpqLJmSyiBFnoTrjczDEQcFcpmHCUop"
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
