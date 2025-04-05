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
    "m5hvtnxgaJwo7612GT9eyB78Tkjx8w15iwd9jzWonoBZ2UBTuBg14kKKdXqgggC1q46fy1xDkh8PgwfxtKwLuWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zAbCgJyTvWiCRuY4WCSGCzLYHUVCzgrt34LMfm8UYHRVeQaUWF5eNNpvYfJiHXhJuLsis8fxjyVM291gyETt6H3",
  "key1": "4DMf3sgabECq8aTfGjx4uFcUfW3AgCbqA2THmLsa2rRGSqMhehWL8eLdFfRoEFojZsTrqB5b5EN6Ntkv7U69WzCy",
  "key2": "5J5nVC3pUQCFFuqkK39JVWM1jakTMRxFJ9h2BvChyiB4SjxdDeN1Y2tgF9gz1Q5jc5JhT3gJTUo97MpzdGVDpzw7",
  "key3": "2nmYH1MSBwSMWd6sRifHK88RpxxvvC5poPL7HmC1VTgse1VYRGZhHxkKSCpCHWxRaxTFGpQsQYfVJShc1Zk3UiJP",
  "key4": "2dyY6yqrTmWZzvmPYcPNv5wuJyGpicMDHTz7vd5ceRShnajLDsVa4PF5vq3SAFawe1CRwSFZ1PtrLkN2WTuoX5yk",
  "key5": "8p4TrFzaBHAeEqQt9d3xDPg6aU85D2W5hmtDFzdUddqz7L6gZ9cjKxrGzbkrQzjrBkodxuEuZ65j7LKarewWh14",
  "key6": "353Fugz8akz8UFTe9MPBFE1KzPeyrRqv4dTwPLHpK1RR69VoMd72NT7y5FNTEEk9AB8eycvCiXjvWy2QXdXQS85d",
  "key7": "9R5Q3otFNXte7H4yD4vAgJmq4wZA6Z5qsgcoTz6C4MnBB74FruMEXCADNjqrs6wCz9cQDcwnLW6MzNw1brAcR8i",
  "key8": "5kdrUEhJMpryhMiw9onxcoEA7c7Vio668yvXWtcXeyBfKKHHwVVZAPR9KSASHWSy9CBgnjUpTBELLrUwfnivAeeQ",
  "key9": "JpmABkCXUERCpthQx4jn7cJ8Rb2fyxFZUw79mNQkRZGrJg7SCFid9ADLaMMPcGLdEQ7ihy3EG5tW4vFJfs1S69s",
  "key10": "63CC8uCxJeX3mdJ8Up8Sh4dPW9ZE63SFfpuPtUBaHaNv8ZZWZ6THA3Tjt4YCaBQ8zK7xi6qFTYGCoGd5yq5H3PUr",
  "key11": "4aE7U9WffSG2TcK2DzUZd6SGFUZMYLVfPGe5UfJqg3fULVk2URLx4eoxhvMKAKYHQ1DJx3h31qXeHGW8bt3bWvXE",
  "key12": "3Q9ub6Sw8Frp5xVKqph1Soy3Wbb7nRDTjTa3evZKGjFw37YBfR4zPc1DnN5eBnrmpQHvUrm4dhUCfuyXhbDxKQUQ",
  "key13": "4WxFWPxFqfCGVGzte1mXLFkichmhokdJB4NgXns8jvhiDAiHKwzMwiZabxEfHxY1nBdEMKnLnNXxkkUBCkZrfLXT",
  "key14": "5Bq6uY4jr4kYMdwRuYz9JpxAAKQBY5GpiE4nmwEvrzQ6XSXsEiXDSfovabwpgvzVTcEXxUbnfCbPdVWPFzVZz3W8",
  "key15": "TdvMZ9WtueYiMn6Y5Z9JdujHcAxdBfW1ePMBWmzMu9t4cLGPfFywPdGTZweQBySpuyanBZzzc8upUAWAmUdzxdy",
  "key16": "5KVVkE9rn1r6W2RDEugu3UxXRGo7U8aYrCkYVfQW3w5BuTHth1G4VrxXKCkDcRem221ESDihhxRcRRp53xJRSWyX",
  "key17": "4AzdjVpbZd1RJRTego9Zkd7tdjeVGZxdeRtWQ3R4nXK6o5h45ReHTEEPmT5P5XDMFibpnGDRzj7wPAaTqhHHiiEx",
  "key18": "4KPVLzeXHtBDVzTTN9LawXZyokv9qyCMPfG1gHSPnoX6x5cz33cDC7wvaXHPrAVrFBfdTyJaAgojHbVUEVBd3Vje",
  "key19": "3uEhr9ZjB3zuojq63auXDiGLAfhzuttJcGe7pLkGp7BL2bNBUdJUkjSZjqDiHFicJpajG8okmBWLiUPSUjVpGmv3",
  "key20": "5TCSGbeqVgXDm5U19C4mx4DYg8tG1xbLpg9eDCJ3q9c8sQjja3xb52GtyeNjuXwfQUxY6itZT8ZNBJHzSZgGamYq",
  "key21": "2bTTqeEhT7wGph8s3BEJBkeJVujmcvRzpjfWm1mEisszoFRaR4osFJjEVmuauAq3iWjJMvnWSbZnGbkCtK3Aq7S6",
  "key22": "5efvW7BS2M8ner1sGwPRfzguKnc8utQMpMpViGcxw43gxBT6Cp3ZoPieidJo15ryaSyVdLQKozwHu7UrTK9sFr51",
  "key23": "4gwtdKbN1Bft2aNftJZ8XZ3iQ1uVeGfqPfmjByZ8mfnY3QwgoSF4NeN8WxAtRUfEYAgVSqS3oHYLa4g6eYbKkYY1",
  "key24": "665g2oB5s5MMhLA7KaGmvp9KfrtgkyyUWvQbFwagVzHte7MLhvvwmyPsBNx2H7Tnqp3rDANhPBB4f3dinrCdpFDx",
  "key25": "3BtLW6ePybVuuTAr2TYyD6Wg5VQARpvmWDqm24CuJPqtNS3kUNT7ZEVxLSwfnNWsiYvBQ6uY2iXmDzge7SMzrUhc",
  "key26": "43Vho6URE7csYLuQWTeNKhWeNGNFpJsX5XeNMnuXPoMCMBwd8KNzy9dj8TreLf7pnLosWD2uNhiRv8TSJxdVxgd2",
  "key27": "5ezniZkBx5ZnADLvHZAUBWog8sHyrx2VbSiFbR5THvCccYGex1UGUCunsCy5dG87tMYJgeDJz6KYqRYLgBPNXJTW",
  "key28": "41jTv6M1RxEgkKaqWJLjwGbV9yxCa5oc9fJtAmJafrPdhYyohV39aXDwEtFxcbo6xYBVp7zbyNjfbGsxGkxMpBd2",
  "key29": "5TPXnAZLLET6A7XrZ8Qm5xe5Zo1PnZjehVdZHaPHR8GxtNLuPJK9C9dzsbsZnpdtq3nh1Jt8fMKSsUBcQ4PKhSty",
  "key30": "5wBJwd3Z8wNFmmh5xfAdu4GPiEALMChPbrV9Ymqy4aBZHu3f2HSWaAUdrYwMbzF5xTEoCkc5x1v2mttiMnKxjEq6",
  "key31": "5mdyKtJKTDuQyVcpuunkdJJZQJ1TASoSDRHfjbHJDj6YEZzhm2rgiwuem6fPkw4ogt6hyVNmxCn1KyHmM4aVf3Ah",
  "key32": "4pxVmx93iY2a8vP5Ch9HXFX7ufUp6Xxk9KML6XKVDJpuSHwPwqy71gNGQgkXRf8TtecqG6gLnu6xCVUj1KLRYBAm",
  "key33": "27vkfAb6RE11kXAJN9BEbkUf9oDjGvxCnCPRPtqwVBHfiBCQBC9ao8Qfj7YHtWo8H9RECqipjTjvW4VZRhxhuQXz",
  "key34": "2mkJ92c9tiprRKs2EWSgNZFXVNN9xLEcNo5hAjcnduaYyL8Z5zxa1n6EaM2i5ZKQjcv3JqKzW4WCKG5dvJzrLPAc",
  "key35": "5o5iNfSHKQuJNNnExcZgmZUYGPcB7PCVP8pzmifmdcbkxpudSDanaRAbrAiyNCDHPC6mvTSxPwGT7XQXdehfMm47",
  "key36": "JrZCCKoubJfUAMm5xyEPfkPZBA6GRQpdLHcFRjQgoFaa6P3xeCvk2FSyYFzVhc2ku9fRGXHudzjNc5MW2FqpSbt",
  "key37": "q5FjGG2AzJvE2AxGWZSzH4ScErwbRe5SQ5f5UKn5A7kfJyjkY8K2nnym6F14eMiq7pU2F9VXF3WxbuwR2YYbf5j",
  "key38": "2UrM5kfmyvMXbBwEPZ3FinjYa9eh3QMTjoo54VQe1TUXHVZDXJh9xohbXdJABJzdW2o3gUjjkWu1S6SCnLSFBAfn",
  "key39": "3eYum69NV3LRKTrRPqLcgehgqQ5QqGDPkCCKyPj9k8M8CKaYcbmdGSsb2YFDNAhCk2XktQkCe34fGQPNMKTobzV2"
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
