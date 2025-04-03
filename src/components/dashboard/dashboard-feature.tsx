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
    "sQeYcvLfADwue982nmVjnZPuxMrvKqtfmSriEkiDqrSMDs9HPCdNRunMa6xVaJVBnKodprKaRXhuedZQ17kR3pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dEsSUimsxwWAwVgMEK2xhmDfNoQ7mYtTA5o2wAURXNCuLdgBudhLMSC93EgAkNprhtGwS1WyCMXP5kUcj89Tn4g",
  "key1": "67FtyvzY6Pyvxn7XoNnfGvwBk9PhUnuTcSfDfMwYqsbzBqs3D7wfGS22NqPHzo9VkmQhn3jK5bXAPy4EzFjUoBvs",
  "key2": "37rDbTCPBK27qXLB5j1Z9DENEgu4dZp7nJmGXUDFQ4fK3gcjAu19ByPwLcBWCSYogv2CEr8vucXHv2U24uYNGjFg",
  "key3": "5HGjdpXqhg8yhwBnPrjWZL6iC8F5nsBL85U55Ze45cRBUU1Lt79YxiaMCCSUfrPouXut1519NNebmukcVZzx3Qna",
  "key4": "Ck4FaTrQsi15FJQ4eWLGYonz7P9WcGpVPwT7FkLAVW3HTJfh72hrvQMX4f2H94JoYkiYEv7KJSSnJ9yo22Wxcw1",
  "key5": "3oyvEUfjcLWJJzCkazL2yuFwTgbtN9NRvmvH6qeHwjV4UFBvoeJEBRGybbBz3TvKFpUaw2fpAQz25n6qfCormt2z",
  "key6": "3frrD1ZmbqUqBjPS3zUWN5XbKH6Smeo4diJ2ZqTtU9vxpxeqAg9EgV5UhS7xmJ4NK236Z23KsfgJGanLeQfYrgJA",
  "key7": "CHfgya7NB4tiYcGZAdXGYPqr2iuudArXBX7enp6r2xoHYCTyrSNdvKYNTnUKZfut7Pa2CK6QBteVuJaHjE5rXS5",
  "key8": "5B9RYgnHx9kg2zLzuNJQ9pjwoyaS5jwSKxFiR8Utq7sZ3SpMBVamPhYvF1h2hAqgqgRahXWVPZVw5Hjza12wFEtC",
  "key9": "5XtBAaX9ApJWqwync9Rrc59Tug2tGLkZbLsnypkHtMPE8aV2DjVyoVDt1jBmRUrpHeQ2pZH5k9K9puTPuS1h9f5f",
  "key10": "m22sHWD1fz9hB1Biyf1aEf8KJQ8yWBRWDTyyrMqWiMy3Ce7JfStsjdKmxwkVpMTU3T1QnaywKqUxR3cVqk8KZk4",
  "key11": "2bSgTWDD7c4Py7FqNp8YPWyze6YmAuzJiq8HX8x1Wp7HVpg29zPC2hSXE8t8ELyR5VknzgVDE4jMxfW5inGTLr6T",
  "key12": "3B9ZCUwwmD5KDeGbN3ctpvbCorpDwpdiEBmWJmbhTQS2VLFzYx5CcsvkP7E6BRoozDk5KRFCUuno418xzYemWUhk",
  "key13": "2mTVBLN75MPAVaegyp1Zv88hZAx47mMJ62btzxFzFqyMEdJwsBFuecRjPStFrzwSBGYsxFxHAsouyjeECPtqK2CY",
  "key14": "2HMWn3fpmNgFJECzvAGJUysqwvkYz2bKo4Xx3FKehLztgeumKsfvtF4hgmx7upr5JetdV5tnDRqoPpjFovJtxM8n",
  "key15": "4aNgCaXrzsMejX2Uvxm8VvMe45qediBhze9zYKzvk5UcdU2atovn575ueuk22jpix6HKxhc8zgvUtsTRjDMaJYM1",
  "key16": "6VCF8AouYKjN9ME59RrE7KrqXk5oDX1oTosgV2wzutxBNuHu54b7fwaYjUEr7VTdHUbbZ71eVbiTrG9gmpWkoxB",
  "key17": "4TjXEjSvgbFKRiEsWNRHMjCo3xCVekQjYyTPw4YHiQSifgmzgXSdQ6znNN6fawge2PuaDNioeqffrVHo2chgBG1J",
  "key18": "yfyDMq9pDC2YFMh1CaswiRrXogQZwZySC6xmCRtg5uW4dowwTDYTXbUNvmyduujEnYuTxeoEcUbtyMesbrRyJT9",
  "key19": "cWnqavM4XyZW5orc8udsNFH7vRq2EUSLpU6pN8nfyzupBpDeQD8NyCwGGrVhVsotnCuad9wKRyhpZ3Fx1ZMZzYp",
  "key20": "5Egx2DDn3mkzY7rYwJYnY5ti8LWouDQFm5fvZfNKcVefdPnpoaaVo3x3xRuEtQnmXm5krUR9w4TB3MF6mKira2a8",
  "key21": "5oDzRQbTtCWVySkeNrtP6PN2otCK6ZSfa9Fo8kc3BoAoXMYhYtwoiMQE75Pg5XZ9NcWZNWqg1UWtpxRoZJkQnR89",
  "key22": "4KVQz6aSQ15GPgX1exV7BtKmnLGdPUj9DGpknzQ1RMa9K6kYnNxFG6Nho8mBYB5TCay24jE3YQV4KR3Ct2cXcyt",
  "key23": "4U1ReK4HiyzRePe6JWYuGSPBDkA4vyiJ91oUy3sSjTDyNfbLV4375jF2m2xHyrGwiHz1GeaFo7F6Fj2eRS32VURj",
  "key24": "5bQDkMbzAgDw1QMJDBaykV4H2ovr1uKmPowg3sp7TtbPtp1xKPNFMa6ENRuHeLuooiq3RhEZJCjM4bSZt5CZJBQo"
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
