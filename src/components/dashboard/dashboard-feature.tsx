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
    "M4QC4NRwYckyBMPgui8ZGJaVpdVNve9E7WYNjHfqrZcAqT6AcCykw1CmR3dvuAkd58PqhCSPx5xmXMzMTMCPfZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35X8KyqEeQqZs19eD5Ex6CTWSFRmpveYDNe1o85SdNYDaAo258TytMZqQnnNQUrxKN3ozzoB3VFfb7kxJHu9r75U",
  "key1": "3Zym6Fz3xAUZvWuz6rzQa5uDgUGCQFsTYRnfWFor3rXXAx3pHvZSPkSWMBHQeFWV9mXgNpuwFkMHNTZM67SHMvVn",
  "key2": "3gDvqmz9ifSw4GvaTMb3kfG9ore3iQVXg1NQA6QF18BWP9dYVsQAjz9NXnxN4dMDT6UJyuv8oQnV5kez8hzhupU4",
  "key3": "VYspAhycb6wc3fzLsW9iTeoZvNwUXbLtjfcwwo6DGF68Q1uCgKiykbee4aNuMHnuN9j5hHJG9a9UpW1AhNRgsw3",
  "key4": "3fdVnWXpkRpZvXXGbEWg6T22tspRVpeAEYuzmRFnfYp93J3J2HKdsZCSPJUKk3wpZCMuKJUdjeKMS4uLVcibwhN4",
  "key5": "4Zaz9AHuiETacC6kkJBsGZmcRauGWTZLaT1W5BmwNPAYXg4djGBticp1xbDx7LztNvvi4vaYkGTH4iW5Z54AdVjR",
  "key6": "5Lv73uKAqDiXSWH68yf6aJ2JgjqzoumodQYdcqRdth4gy8oUNtzYXVbXG57Va3ceARy1DUX5f3zMLKGdG7wopuan",
  "key7": "3793hQ8WyY79xECGDB1A7K2hMkf1LEqFoDJ6mxTzJ4Ey8e6NDQ4U11NHMH7MDt64VbGc2qbFWNr7DGeDCVH21mFM",
  "key8": "GJKa6LwKyziZez7NBX3HGjupbqeZNjJ83RywtYA71ywHjYSBVkoRs1mEEVUkZTi47WZtN34qgweby8fFUAGR9tG",
  "key9": "67ndhYEebYGXgsJaVE8ErWTZywQMk3sU3J6qGnfVav1SmVGqGPP9imv8k65WYcPXzdKVmAd1CMzAJo4N7CNibQcD",
  "key10": "3mpDkENnWFfcNeLGWg71EtAv55q8pwE2GK1kBHzXvw19s4jxz4D8ankGY3rivyf31C2EZVGGUvi5YX8AgmbqpKQo",
  "key11": "5QhvPJvhrvjccY14ZorMMsLiCUWWrBD1mjinkQUyPWckqSBDUeD9FC8q2tnkBeinhw4QRPg4qu8GWGAqdJgy9ui1",
  "key12": "4p8fzPs4xqrBcJrG2ENebt1QDGRqhaWW8Rg95uB1wECcihK752QsEVbnr3GZhsUJBVKt36RVavqv7mZWS4qHckLa",
  "key13": "2juWFjrREDDaAtozcEc8jCQEUqBMRWPBtZxuCCT5U2dN96GPscFB8qY15AxdYK9jRMo2YB3XrbnoDy9KSZRxCTYS",
  "key14": "3mpSYD58o5nB1DeTHtVGCey6tAqGzAwh3NFfcnac9dktH74p4YVCMRAb4jQUVkGYynfPuBzuSqprvLqcphmkUvAd",
  "key15": "51o7FnnAkegVjHuHCMuYB7VhL2dkpLd3yxbHYRBfnLtYDXbx22GvUa91F8zkJsSDbDpGSL4PX1K3Nwcv7RPnBq9d",
  "key16": "4kyecRxZehf4QipKoFf6Sw5DYSseXdUheTTAWqzYFScumqhxA1unGVZehPdUEdhP6KRe5ZnATafe5syeAefddcQ3",
  "key17": "62kug89fWk5nuL88oWyiXKvudKU2uk2vYdDZWP9DEPRZ4zpT9rL1oPw2j4Hk8Uko8drq9SH5BhPayYXd3VRDWkQ2",
  "key18": "65Zf8fJoYQ6SmCjm2uVd3Ra1JmETuYDLuuDvodwpQEe9FemxbTTAcXUfe4TqLM6rVk5bXtn2nf4DcrLGaRRbbk8H",
  "key19": "4jCa1xSohqY7NqqxZa9coVEHiMJo47y5baj6HVr642ZtXv4185YsHxT1M1Mz6zBUGw7FJjnt9bBhm2P57B9a4LZh",
  "key20": "3hcubneyvvVi7x2TCjbyNWpnQ71B4rySpVDJD5UhjjhDsawcHp7KAXYUfXUfeqpqTPsyUQvww4CRzCDEX6McM9ne",
  "key21": "uBZ9se3yvwmXs8yLWSBnJh9AcpNKe3R4i46wecb2onxiWdncZZdfEmQQhtV9X23d3jbsDFzzroMegwBZmdkYvRj",
  "key22": "2kf6i6H8nJ9UT3wS68e3rUxZibsugF5GX5SVQ6Wp64vHpfYRrDXLJMDyg7Be15GrjXqZRiqTGkFEbqLieTR4UjJz",
  "key23": "F3cfFn67jAiuGWpPZ4qpV7iu8SR89vVnAnbW7M4yshDfkXv2TFQTMfLNeJPfmfyNB6mz8CnY8xe3HTbggh3r8BR",
  "key24": "fctHAZFBv7sewrjbiWNqUtvuMxhSRo2FSfTHyP2Sh2kye5ijBWTrhycCcEVUrPNiGTQUMtqDNmHL6gCC3rYcbk5",
  "key25": "4gPduskJSDPJKzDCzddCKSKMXE91Gag5UeXub1pHs6ikRFW1oLzVyNurpuNkfnphQXXiPrq9AhpQRfH3pq8coSSi",
  "key26": "4HZcydZHhijxj3q2SvM4SdkhpPGxN2PvTcBegb2fSvuQ8Gi8ecFKHqLkHVaayZTthWHbqsA4vup8ec3bbJpjBKiD",
  "key27": "2mbd9AYCFDHrkityCR7uZLtNBqxCXExE8i9kpGkEkhRBhjU1FesaxMBMbdaiMe8MiQ78CexEgEoxTuBgEvMFtkjv",
  "key28": "EGH7Vh4auGXBrDWstp17iwXYFNZMCvk6tmBeKkUgxBm4mVjzEjPRqksNgDRiG4WKH2gYCpbm2uVfLmh1hLvK3At",
  "key29": "G9PX36BmAmVPHV33BBmdAzqK1kGCWepLNqTZwW6uBMbTqCsMMEZwP9Cty1KVW6PsFaoSFryVNkEQHBaaRNebZpW",
  "key30": "PUgBq92zBn9cnPSvysK1mjW7S1X4aw5czmxbXVsDmhUfxZbcQWyVC5VD3eciFqBt98niYbrL9fH9QKV8NGwBaun",
  "key31": "2yfJoXuwpTcQ5fLcQLb4CdA7zzR6udALe8ksNC5D59ivRYYLzkCQbGR7JJZ6vFgRjLC6bEAhfPBPorCmvUtuTiUS"
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
