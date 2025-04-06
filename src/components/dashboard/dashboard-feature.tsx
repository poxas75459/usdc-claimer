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
    "Z1EmVrYo1QYDJgVW7AVZTuopcH3voFd2sMWuHJ562WrxE9H4cfN6cBcLmfYL9hqfK7Q59Y7rWUKry6VGANVxbYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjcx2B1gZhZeo4xoMeVKMkGPpv4ap1SU6wXmr7JbN8psYjaux4EES2MmWKoSqMMYpgaMf58Df4ik11GTRL9VWhx",
  "key1": "qs3dP1xBsvZSuoEE1earttraeeQ9i8ueaVgfv76JTh2FZGxHQer5euq1cu31Jfw1PGahkyjdefRURLV8hruEN3V",
  "key2": "36pe58xaVnmDDxCn5my3k3StQPPpQWjLASkEKNiCKqKdfE7QLUAAMEZKL2GusDYDNfHBHWUens1AwSD2kJ9EUrnD",
  "key3": "61d8quKCUVLYUQpPFoLg46JGFrfG9JDrJKovzMeaQxf4Weyus79csUGT8pzYTH16Vf3SmoBg4bam9Hw1tBtuEdxs",
  "key4": "NARx1Q6EpHMEBFoJ26EpMvdWcSPdaTpw6KG9FrALgWoibarXXejSddhiG1q6DtatXJwV42qhiiaNc4JDiWkAdxn",
  "key5": "3i2fwhqXjXqWJFCf4iBpHAYtMeem2tapvXdHWcoyjBMYEm3CeuFLsvgPxo7jqNKHZADCis181VVRieiNT6Wp18Fu",
  "key6": "hXH5Zwv68yS4QWxKt91PRSUKth6p71Z7GgYpkjG95ucAkwXSebiXdLDtdvA3YBHtFeNwcLWcqEcz7n1HzGoyB6F",
  "key7": "3XT3udYP4iNKyCxn7igh5BFK4akQ7WJrdN2hiApHsZWDCTQQ9eN8Rk4pKeQzdE2nGjJkLLmrEWZ28UTzz1y7cYCv",
  "key8": "2bnKb69QzCKbb6z5xdf2bT7oRwFViQ8f33Fx7evwuNPqWKnLzxHaAB4t1h5WpurppFPFXB3nucLRbFVtcMijax9R",
  "key9": "3wiBSsn9jza9kAjnRZuWfQKfY2rkWFsfPSJjiDCcZ1oKVERkHBrcTCsKX9cd3owTmzE4gJTwmGEWiuXr7uo9bwt6",
  "key10": "2TzQh82hPLm9e74wLpjCV4WX5s33KCo5BaHkxXDkvLXroz4QDq2f73TmcCk7u3XmAEv8KuTTuDyZ4hYHmzsQKdkq",
  "key11": "4FDxSWFYdKMACq3BP8bbseti3mN89LjWj5zNrWiaTgB67EzQxwyytP5HtHzds4wLswUepfeowqfexfJsAnPWWPkQ",
  "key12": "2Xp7pp7yaLcc1F85hqYabCL9j64CfWRDMVoS49PKWdT81ZCqcZDR6PzL2BuobBeZwHc5VMQeEjBdNu3RuSMnRD1B",
  "key13": "4eZpJsmyF9Uk9XpvntnAVJEq1L8ZkF1AicroPx3b5gTQknygBhNnobTMg81U4hYwiw5cvkh7Txh8BxySHq29H4gK",
  "key14": "2vYzQ3mzi6CFBaa6wX1ZCGLhUR5gvba971F36tQnjMb846xL18VDSvCE3CqumPJjAmQ394ZQRMgfWWULVVqwXXn8",
  "key15": "62ddQk6bjRRCmYk4mSedVjJVrM4UtZNsSgArgWBkAHc8qbuMGpf7uBM48aP2oPGP5b7ircBGTTNFQBzKh6qZeBPX",
  "key16": "61sohkMZQS6HVED71LZyfdxayUZcfuKneMQ6WeNG882pB4Du9QPkuAicUo3ysdp7FqD7CGbD1tSYTV7hoiPTumwp",
  "key17": "2Ba8LRHgGVtNQAP3T8VSeU2ifBuGkeuYJcyeP9hJTiWkuF2jHDQtdnEGUQGTgb6sXRQ7fjoT8M6PRb96Y9c8GmDM",
  "key18": "3wVVNFroX7AJu7evP9Yg9ThoiFNRug6frm3xzbcDuc4JVYYynAJQ6XyjoHSGR7fYxt6m53H3btiQbPSVeCsbJ4tb",
  "key19": "5CXg4iGKd5Y78WJgpsVTTiwravHgkdCzwLzGQxCLJwGrQpzzZg4E4AhTGQveU8D23qJn55jPTLwiRcSwuRKUkqQa",
  "key20": "2V52c9Vt5Qh5gsSR1erugMxUHtHsKHSYoocYdbKJPTYCHo5feHwRZcT6QexbuFDUtu5JEWLBRrPftNXMmg5fVbfB",
  "key21": "2RnVK58D5iR9GJMjMenvHpvAKjhJXNJePNrNNKi6tHDgUMFsjQtseLqSwMrg9L15KjmuzHWQHfqT1NkEwCWp7GGj",
  "key22": "dZLngmUgES1gusWyhLTdfkPxxgBX1hZvLwJ32MxMH9AuCfkdmeUvBJsRpk79WqqTdUmXFizioJmbqBrypwrTq49",
  "key23": "4X9iqg5h5WKu1Nms32ZxZ4iBmUWKY6qApLewTtWpbrhM23AkZX4zvP5LUvjFG62BfDi89MKDUrD6jzfxXjnVGhnA",
  "key24": "3u95cFi3d4FEGRAvoQPiQCf9hTJuZzoZTjNArHcRR1jBD9gap7NEc5cQxMnGddAJ2Bvjs4wgVC67sqWzhK88idQr",
  "key25": "2vY7rMxsAJNXfmDwqNoow2K8DP61avhuYYBs7ApsmDvnNr1kJ6Z1tStMktRSbKenc2W265nXDQRYnRPSugXVeDoh",
  "key26": "581wi4vh6t1FL372PymDPP75WWaWuGLfbTfdPrsVC8CFk2RCTAjxEfkXR1xniBFoc5xYHpcRihWGuqDCpKfqw1rb",
  "key27": "Lx6EZRwkjWsCtmTzmgFjRxAz27umqd1yf3sntFMP6xp88wcQwUDk13fyKjqnAJcpa2nqXa5LsS4UP3kCSrnFgDL",
  "key28": "32a87SXeoV2Hzz2ZZxCSiuKUH7kdaybc98iUhyP4RZr6xKFd7vLHjN6V1b6y1QTzjEteA6zLkrYSS4AMgWZrunUm",
  "key29": "3mtXEsyifVvwBoZrSeXp4Xc3Q3WtggMGU1LWiXthBKvk4qcghfFxhGyeebmTdwuMvkUvDQDr45oZznJMg4g6gK11",
  "key30": "2mSWDtzAcC89wKJWqhN3DU2FP9nzanCUf3oqwV7h9TgyH74R32b3Y6zcCJEc61wKgoF27rbvAiyYJAm5F6yNoZCE"
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
