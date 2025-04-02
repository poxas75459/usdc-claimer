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
    "47gE4PRFkYJTMLGR2B3t7EsuapCqFMfyiRp9SqoSfBZugpPb1quzPejwiYhqreeEXCTzCR5ncCAEryyysr835sox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrarQtvv4Zhg95MSortgo4BS32Smag5okHGaCqSkQCRy2EqWtjRZ8DdkGNu2nHgPHmPPj5DcaphuEvPDhJEqJ9R",
  "key1": "2PZh6evS8Zcb3XvEFRpFgEf8avhiB1rwAu8gyns1xTiVeJV2evVJ6WFzSnQebg4qVCs1UC2XossQuCKfjUWQsqfu",
  "key2": "2FGGfoDuDe5TuuNjmBfQtQwcnu2KKG756xP4XBL26wBWmFWMR5mocZQNjAYKfPTxZZtvSJxzUyAmgNhzDL53uqRr",
  "key3": "4DbnSJThwVrmHyK2PHGwajR1hvgxqFAoxtkoYNqJwtBq2pbycWKw5pKnvqExtJuS3iWDjjyqW7RUnWQD9PntztNe",
  "key4": "4BK2jmLpZCeBmzm6u7fX7iaJ1HAE6YE5B2Ksrcx1wziREYJRHK9bN4Dqak4vxN97Hf9jCnLV52scL14CAu2nmBWK",
  "key5": "4ZuJWLLW8bhiVRTvGJX5vM1Y6SSXPySg2ckmieSCQ1zhM4G2JgUi3C2eAi7yrvcE4X5cc3Q5UdM1cgbECRHVQdaH",
  "key6": "p6CScBfPGQ5F8c9E5dsFmv4KuQJQ1o49D6tTepBK4fQCMUKBRnLUfnLoXkzy44Dm6LmJAgYmnSExv11RMKxaKy5",
  "key7": "41gVHu3wTf1q2Lwm8NF1QPgD8UiMUtHp49mnCnw9SoBtc5sCSJT8eb94FpGFzv9bZivCwH8xXDu43QNJEPxT9HcE",
  "key8": "2XCRnukkkb4qccEKWSwiR9ax5cG6GxKnXq1xTwb6AYwRoVxwXJQsdKFJWnK2RmWbYeHwYDV7Cv6LF3KAKsBY6Z9C",
  "key9": "9815o6HPZpe7cRVVKTfKKP6F9NEB6RPo2pXzVtq9r5pBRusEmu7CXLMXdWEPEShsQ7XKZ2rKAJdCrvZAxVtvbBe",
  "key10": "5xHFXWTX5rSVUrUFW5AvFt1r5hrmDrNi6ZSB5DRk9pf9J4n5416YN8SJwvAaE6b3T1SUafhhnmMvqq1MLK5iV217",
  "key11": "5Jv7Qzj345cjzcdZx1RoCUbxK3NkLt6p5yVfnSTLdAtnnsRZ5F9cEoaRQrCj6hKw3EUg8Eg5mwJ116wqEFfQLU13",
  "key12": "31VaqWvH28skcKhyjvkaGk3Cha243MePdqdSeUB4pVV5Rv8cWKfyV6BypJ2cdmTqS42YNTVpBgpVzY2wPwq4hHBQ",
  "key13": "5kXtHRZfwYzMNQZV2NiJrXCL2pVX8HLcJxeV59g3CedW6Dhnomaa4VvS6ZWfcVR71CtsiKjh5XYsvnaYSpBqjQ2q",
  "key14": "4nw1PQdvPPjUvfAANMCzTMx9rSQ3QRDrg2AB8oA7Yc5gX1ARPWtypjjyqRpMNmBbhhhnUX26GZ64WtxJ3BMgiGtZ",
  "key15": "5KPFd3LLfCGXhczUL3eKjnGU5G9GfzK8Fkn37DtidAmTPbAwEPnJBCiQoC69g4yvBEF8AxN9sTY1i5eGSKw79zdh",
  "key16": "5SDHLCkqxUtSWqhx4JAJksX6DBuUWswPec3FCHCQi2Qnj31fLiVZUQZDbEjNjrmPpM6VrPQe87FGmWhFr696facq",
  "key17": "2oHsfMLZMG8dzbALgg6gMDpkjvd59bBEZf3eQ2AVFJtpEWeZPW2au3KgMofbBxK9Kw9PfaVrhCRDfbRbRXiQ5iH8",
  "key18": "5yFGx92duhjtpeEq16mThZTYTJ8MBZGjqBibwnM5M6Y1jrKDtCTXo9NkY961L6KCTgXKBaG6AsJdXPFZaECEs62N",
  "key19": "5AZLZc5iGu2HhpZFL9Lmt4bE5SvifCb7ZjMHGf1p2A6iwv1rz3Ms4dFWJuS9SaCR8nSNxEZuLE95fB8L8ch7wEAp",
  "key20": "4romYoSZuu9DgWhJUjMeS5ui6tp1ongwdBmUJP37xm1ezhg8mAp844dyoDGZe13qHS1jfpPhf1Zb7ZVVvbqDuFPY",
  "key21": "53crMTNjqEb6QiyW1GJh68BEPy5uxSomoTczciCzAa77P3csbVa7DvCLVX6z1r8a5fLboKdH7cEnyhBgKHbwr7QX",
  "key22": "7agMmLzE3VrERW79bus2XqqHq7m3VsMthAmrSXia2TqN5cXK9x83aYokMEcUpDiueQsUx36nhgrqQk5dnEAAe9B",
  "key23": "4NwQTHS3iBpaamx59PFNXRd3UwdCHJhTTP58U8o4WR7BdNGDfNfKF3GxghSDicAoAo1jDRrDgU6Ug1htXUrP9LpM",
  "key24": "sMbaJFEDJWfqSxth2N6cvs5G3WYGLEotZXs2rBGr4Uj6u6j8zNGgzR4x1rpjwQMRNpJwWVwtto5S3yDixHSzgGA",
  "key25": "4DPy8SPWw5mn7aHY1cbJ5ncAFYi2m5vPhRPDFVsvLonbyFArryu3gxTnfReqXR2p9S9nQwn4AoS9PHCorTnHcfMi",
  "key26": "4fD9aS6iV3MBir1hDGyt63vjmyqneGp7gN2TRgnjBuW3HSD8gNFux4nRjZ3siw3n8bCyhFcB8Zm7MUA6eEpPBBrV",
  "key27": "gdeJH46WvsPvbjG9PQeuN9h6B1NT8cX9so5Bun6c29QQjnGNuNqeMtPHpaq4M2NoHVNWbgcqYvVHGMiTAKr7wjA",
  "key28": "2VTvsPzf72rVjmRRxN1utX7bPbVAQhR4ZTuPhG5EXSALbjFsMp7kaztquu1fVkVxb4ENC1X2xSZ1SNRgNmuGe8Cf",
  "key29": "5BJPWd2R2CD4wUd72Ntgb5T2ZS4EZNVCV8XAHFUwkVB7tv7sdYZmkVJNTcA8jkESBVGTtg18xaKBw4hQTRb9xe8C"
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
