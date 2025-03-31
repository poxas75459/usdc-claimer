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
    "2ffUs72wUGSTkmrMFfCagUCjPhkR8EckP2TrHLfCq8Ae3PLkbXisEg7MXMe2H5H4iF1E1QN5vdEwbrX29AY1yfBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXdJT8hLiwED75fBwYK5QdrQUPqM7DFmmgFBuntgHGMW6nhLo3djMvQthr7RF9dgkVqDMidsbf8HfEBTf8XNafk",
  "key1": "4yRY12diPCkF3vRhT9TF3f91PR4Ka7VdYvJmMqj6CGZFtK7VXnqPas4f7dvXzbU1iVNauxSSxZpgcXZumJCNibzW",
  "key2": "5voTMerwzZjHEg1px9DJTVwiUtm9ucMJDUKYNpAeX7ybrmoAvC1vQAXJdkT6ZEcmBo5BGcdHWVPjsoxSwg9Jm1uv",
  "key3": "4pHvQ94h32uwmK3mnQMvxmKoJq2pku9yWNT7s4FSEtgHCz6Dcp7VsiAUwNgVkRuND4qVmPjeKYYhE1A8NqR5vZ8P",
  "key4": "3meQuRbYzirntcZuuuaiaTYBjvdGp3NHxKNMd59KvfbfRFb4R375kWkBu8q93VkTDEeV6yeXRn5h7q87BWgQRAse",
  "key5": "57qND7Q5VHEoCwGgksVMEnGjyEmWvZP72JZ1wAaKVxsxarbd9xekwkX1T9Z4jBDdpEdLYXkV3PXBMft3yrHhXRfL",
  "key6": "4uar8CFZGu38PvRWjehjRG69V3sLR1CoEcAGvwAmgfUtocnzGKy88L8uqCQuf7qMhsPuGDN2sEG9KGAocckspMa3",
  "key7": "5amEWVSrska8np1RukJQCFttbLSHfyqKv2yRdAXTZMibBk19Q9ufqDnqwSR36A2URjzWmz9epK7dCqXwyuKrBDNo",
  "key8": "3iP58sDuHzrn8emxMbfCN1iUWMZwCMM6zAoRMH225Rqz1hCGq9Vx8EbcwaaE7hmhAA8QjWQ4QPqKsLwJvVrCphS9",
  "key9": "5WKiBubMD5673ijGAra45aPpGUcJEFBA4kDASXkCnMFCgaDNpguKAsVHkjqKXSNiybNFDRbBCHFstLXJuWWc4bMi",
  "key10": "2pwf7iYspNQniufCwSjhX4zAR93jttmRacwFdS8g6fyQVU76f11TavspyY9HY4yRyk449hbjnwWr5WpxU6a2HBw6",
  "key11": "5PvJSyZEfoKp4TReEMbswU5VuJXxiHVVjZ1V3Bw8aL16JMq3fXaMNgmhAknQD3D2cjquC8aEf3UwpUPP3prLhSnc",
  "key12": "2hsKWMChdRxMDa4m4f3kfk4oE3HMPgTV3Gav2F5V4wXnDvsYWB3RAWu6Git6v8HrxgShopRgcRX3baHppukGcF5m",
  "key13": "4eFRd4x6koGrhTAsy7nZANst2mXAEaobz7PGJ1rXHk5G1gh13HdqKcA1c6217yDjhsxgd49R8mz8KDe541RodBwn",
  "key14": "2AFE6D62q7wbTc2z2yDJmzzmmtn3JqiTJwmmGbW5dsedAj6jupHMYUVSyuDtc4hTpyCh6VWJX9fMeQCqrPnFgDJu",
  "key15": "5kr7F8LJ1sWfRnZCGfKkcb8xJwdRoPXfAmr1YhuH4vLksFuG5Us95U4hiWTjvtHWEcn27R4w5pc5LV9ewWrigdra",
  "key16": "KGoTRryMPzfrdJL31Eo8MYN1qWpGUmcfD9F1iHTME2vLBg7axj1Jk2yfxhaN8RHsDXzyLF6WtyzwmjGTrtK7aaD",
  "key17": "BtkVYS4C7ttMPkauk7RXFNubk1XUfnTasfh6NBvJhL9Y3Ru11UKDsKNWnChT3Rv4DcXb7LNcTrJ9HWsiBtF63ng",
  "key18": "45rQxiby1mz5NabkMLUbDLskuDohkfeBzhmPRGph3y299reiM1LZwq2929ULLwu38uSfxCe3N8vWARHz3hXiCDbc",
  "key19": "W2bTqwJFXTDi38XiFhKg2c9hVAnyjxDQb26ufr1tR1eymQ3EyLBLgx27nndMXiQNivQHavd2GAnjU7m8FJd8AR6",
  "key20": "8P3Ue2kr1w3gK7NZqbsaQohcfqq3AANDYZFCymhDH49hgayQtGuAjy87Y7FSEefuVkijHJ43RYmvx8nZ8NJv9U2",
  "key21": "4QeQMc3rFKNyFGKmsRdnwawNUUqk2dFn5REFSsjNLn2Y9j4hjiWLFass838WcqAVvq7Lr9zcZvq1ESPYGxQqWtZf",
  "key22": "2w4bwhjz6yfB46JgFWwSVrTr1Q9SpcgUe5VMNhnPWituAEoVf19uWDDzFLBp5LgzNNQqhthSNcenrHpRhzKB5uCM",
  "key23": "2n3JcpEzegRPBMWzC9CXMaCd2HfYk86X3mQZF8gd6X9Z6uCW2cPspY1AgZeGBoW1PYUqKrEzYhAjnnxrE8cvQ3s1",
  "key24": "3YohGdfnZ8SXWHvK7ttRGCENNgTkqmjHqCjaygmX4bXeBPC9gryN47rbGsXzy6ord5DBFYJwjWKGuViSWr6M23Gd",
  "key25": "5eVchP9wG7pWJqr7DzRYsDi9wiCUzpk8PYhCeN6oS4niKy6NDCHRSzRtiKpJmcvySTizL75zCxfmKeyuYSjdqF9Y",
  "key26": "3x4ScThikbaGSMuKyJRyGcJZ3Zoqg7gbnVJiSFke5AzBFNtANRiwLG3RLfPuCG14gi6VzEwpTU96V5CdguHJ9jVF",
  "key27": "XjCJvqrTJubPjZ4GCFgiMARVhv97bdY6ujZr34BYZPqGcGtYKH2bBuM5XDkjKZAAwNfsxHshDPUebgz9D5v3MEe",
  "key28": "2YWzXK6D8MKU6KycKBkWEaJCBXnSNSQXEpueeJ7ENXodZbQyKTo3mfXdegBJ5Bevmac2x9dyYwtHAAT7XrN8ZijX",
  "key29": "2MSDRKaYNNXoSR73FMjnVSixDr4pHuAk65oEWTfFfXbsZX9HA3xUDbxPMRwDmQvmcmUADt9FxwGLhsk7B2xzhhc1",
  "key30": "4BxCehvNJBtNR33njiVG9vPjj16wt2s5iY5WEDQ1tDmeae5pXXxgmYzP9Ak5kYLvjNxaBq8H9662ZYsnBBupTomu",
  "key31": "4j2NxGkjkQDTbckpcvh2ABiZoTSHuGaFVL3WmG2buVRqHArPKH5rmpbhuiTX7yF4w2yp4cgLpv2WoKmP8dmH5ydr",
  "key32": "3A9DqvmeGS63n1DecNHx6zoQUTXYEhuCYhgrjtqfgLeVqTSrxJ1Grm6Udkoiq9GY9j7b6h7nyWKeKssGo2JUSJAH",
  "key33": "2xZNRi5CzTm4RCKXwokrADe2EdX2y6sazJzzLhoqDTaDgi1YAygAZy6rm1JLULjtasGTPkLPLSCp9c1mroKKPMEN",
  "key34": "1adagwPSF1y5JuKH4YdCTSnSsr6XrNAvEFG5zfBcgsQTwYVi65GinfhpbCcerYwCGEj5HW7KFNtXjtzzbSfejje",
  "key35": "4LVJpWuTMZCJjdjPVQEBYC74SmPtoriebanKFi2r7mvfrdJB4uef5vMcjgY7tbAofrDL8o8iBrcRMpcrM5DargnZ",
  "key36": "47yp3MCMigFGud66oqbyypJZ4fdivvdufs2suVD7D5KAXcGNq4bByoRnHpacVFKxy4Wz6ZrWjgkpEV38cEfV6HaR",
  "key37": "3zFibSwG8uTxH8NnP3V9W514F2XULTttw7xBbPSgW3wjVaKR5iyyVi9E3VMtP3r8kp5S4PSbK4gEhBqQst4GhwcW",
  "key38": "259uzxCwrtF8M8RQtWFaLaQGaTtjzxDfhtjerDJ92t5WRcu4ZKn2eSBTHReYgJpZ79viSAWUqKkKUFBKpVytL3Vq",
  "key39": "2mtC2oeeJCrPsLiQH8wwKFkc2zbM9eqjZRqcFNfTSZrSERPfTAyvjF5kTxkHqYFZwFPCda7mPKciH83qyhZxzfCv",
  "key40": "2GiVyL28KM4bzvMegmk8m6Pkdj4xdtUiwSsnn1Mqaeo7cGTr6HyavD69VknA2wGrfhZdkyucMFFFUDFmJKRTHDny",
  "key41": "5WL7UupziTY3R5VP4nfsX495SCqCi6dWAkDFFBArQ5u9dUiGpuQFd8rZfLwgywWGfYsSQYEJEkmbR8NjNAUuvUvv",
  "key42": "4YMLUUMfM8Mnii9YCa3vBFfgbVDJKLwMGQFzcXQ11VQXsLfVbHQxUifnKpCB7qpDLaMUL2oubWgh6dVsgHjVwMLK"
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
