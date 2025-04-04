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
    "3GDVE9PQbmnkjCDyd5puE4BJCLchQLSERycgPAQFt51fFjPgVNzNnvkwoginDsEGWQZZyST25tS9MRVg7LhYBGuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wLUN2ST5XQMR31TdwtAKdSncMML9riJDvk1ugcpTVZDofSkAuD21eBn1SPEsD8vERpPvYYEjTaL8FgpDSW66RGr",
  "key1": "4aPnqb8L2mvfLB3epKGjyb3pmoxUkzbRPAk8Jvza5cZhLuSgPYvs4ymUFXRFYiBYgVtriG7QsAMtjXMM6kT7TUMb",
  "key2": "4xREKu2aiQBjd43zJo8PrADR84imAFGd7UCajZUD1hbYUEPFxNantJX5qa6tQ9TAqXt3wC61t1mRrYRdh7pWVBao",
  "key3": "33GEnTceHz1knQSrbqtgQgVTRjwdL2CN9K6aFYrUDMe8FDnAgXCqz5Pq97jmE8vXtEeFTW6a6V8PmuStcvnUHZwn",
  "key4": "4GxavoRn1cBmEHAvN2jRa5KFEqxnvtbUrH8Yx6YsFPhYv3Jwm3vTD5SCQHJLxW6ie6VaDTeK4FHYrZKveydqTPx5",
  "key5": "3G461F16x7bENibMJjZdpxDuGGNL8mYFu5KmwybepdER62WeCCBPCCspTz6Uc9A4SicYvkzgACGmf48VjqJvU4P9",
  "key6": "2bVM3PcH5HnB9MjKF3TApbXjYGmQJ9H5dAHqNwnVWZZVAAvR5561kvPi1eTEzvYoME4EPN4XBHErhyynfeuYXCWe",
  "key7": "3oxT6EVodPUh4QSgiMUmLDmJ4LtxinTTTubc5TDQbSbnMSCwwoGjuTmDhTZFB5Eci26E1cpNTQqxVctRgb5j3691",
  "key8": "4iyEerYoommssCBokhQ6H9C5inWGdYKXQ9E1wKS5QtVV6YcEcJiBRYauT9v615smjUcy9jpinAn1KVviGV8mkDG1",
  "key9": "3zq5Mtgi9ELoGoBBiBHeUEhFBK7JsBq6p4saqa9VGcUqs6wzc83vu5i4JUTMqSyXzM5xkJ7srFgxt5aicUBa1qFm",
  "key10": "331jd238RHzs6terno8hN8xTbwsXgmdxD6say5WM7hgTjMd6r7oq7WA86fydqJT3s1SReRHkzn3bFz7WFziUFsi3",
  "key11": "Y9CRxw8yEfQcwmvzmSeNQmxrHczy6eqZu5H1SVPuPeNP3v3zMfWVb86tUEAwoo7zk4MeMtNHogsVDgUBASApJP5",
  "key12": "42ruAYaXSQ2XZG9vtdxsjxvfLUsQWjEEu3DoziPyN93LaGUpfmQYq6U7XkZJtzZgzWdM6SyRxuWAgfBBvwDmfzZu",
  "key13": "3R59Cbuod9AEiNcGGvL9itMAkgPpnSD4bq22rzwJ2dQkscVCLCKE2Dvw85sCsKaHTBwxTQ3XfrXCHc8jJAcQ9oFM",
  "key14": "5B96GNLUoWuRtFb679MZyEk7yxLiNrnyTKL6VaJH6homngNAwoDiRgJ7yYsrQ5VazNQeaRLtNw6ETqijEZCSq7cf",
  "key15": "5BTq7eB71X9QHvgyiJULbXiAWL69KKUmaGETVj4kKgBwocdMGcAc1gNv8fURhqDnRuH2xmjVRWPomcKfj82cuhBj",
  "key16": "33RSdXVXUyo8UbpE54gC6WBPEg2poPiiunhyEynoVXe5pKLkR5ayQJmktcjz6gfaHk3v6AfGNUFioDZQHGiwXWho",
  "key17": "5LG2Y3NQPsqJ53BotYvh2cEja4Hgq2qjq3Tf6NkDMqHvT4fhz8P466NY5mT4M5oGrkjb577R75u7U5t6w6wFK5N4",
  "key18": "kZJ43wvuuK2DSRpBjxMoumkUjt2DWBURco9CRCXPu2sWHMPau8nLssRneKG2UcL6bRqzNZsvKJwvdzLjzVwBPuo",
  "key19": "4h7atCZ8ZpEVFQbZgYgPNqdnNkmqQin1o8mbxSgVMxBY7AWEFaJBJRt5M3cK8T3zefXc8u86RQGgBeK1AER92h7n",
  "key20": "4WdjzewbQ6hpygk4kNdKbue28ckLiLAHJr1JJpSPLo9v3i6bdDi5oN14z2cAzkLbTR54q2m8CFTeDD3fLzve7spz",
  "key21": "28Svbqje9KkzQ1izeMY5VEWUdoSC4HGmn5aY4QXP7ic2EPHsQJbQKccf2Y6qU5ugnkHvEx4BMTTnDkWTK6PSLdiv",
  "key22": "3Q5Jj5ekCA4NQJw1E5SEcVFNUBwnBkJJhHi8qhUJK3cVRUERMRbNpLtsbWVXnxpFUZergypxZoL8DaF3B5ALG49J",
  "key23": "4eqXPokgWKBFtQpbgx1kGri18uGzKrU45ZQePKKZBr6E9KDWyutrap9QiB5GfPsTHWu263RssK8b4euet1Q66vaz",
  "key24": "dhiksjqSHqgsJVPBkji6co92S4uz71vhxvWm61qFcaeHWWHu7Q5wzrnAtVSxDcAD6PT3a7dCu3nGc16qmoSP3SC",
  "key25": "2ZKVsNYGJ2M3xnmDKANgiPFCL5et3YYgR1QX7GmJLzBCys6ZLkUpmFfUvo3EXaw7oDQeyTq5fTfNf2SgHmikDaYf",
  "key26": "4QXt9Fw7aGDpWGRmm744P1HtJTYLVEW5HKT46L39eATnAFCvHpi16Qe9B3WBqoyxg19hJ54FfATXownU2DsRoqs9",
  "key27": "3qsXSLCDSMuyL4DkgzkXQ8C8CNMwXj258kdEdeCAwxaP6p3tetSsbFZDAB53qAeS2jxevQ5eVUNf62G5JY5KouXR"
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
