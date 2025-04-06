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
    "3x8sLkCY6c4kGW7D1b8F6TBNJsfnUBRZUMxfTtGq8GJCqzsEN6GGLepRM7DFZgBt1qYjuKMc58G6V5UJzb6HNyRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NAM5hgqMpFbVBsKZRtSaWtmgzq1LnmPPBa12zejfRKP5J1AAcQ9ZLgA4j4NeqJpx8CzVzGpQDTJDzYu6UU75KLe",
  "key1": "4Qb1aTLE1jxA2EkTqZ8AUWcpGWozLTXgWYunnSk6y8Ki2BeweLaB1GK9yKkwnxQoVBwNjr8EeK6EYUwSNkhbwnby",
  "key2": "5HNG6k33TZs4As2TopwEDcy6kVYy64A5vB9EAk1Cee2H74mc5xcu6ZTcnBL6w4q9bbmpnsCAF5HB2a4y2tCrpSt7",
  "key3": "svqBntkmqBC46zS2kfAFDjdVQNQU8X7gWXMHNMKZ1unKWbvCZNVaAZy3uW58nXhFAkr8LXxAnsuinQxxsmitdUF",
  "key4": "9fzwSVBq75gyQfmykeuQCznBVUUUHsXduN9pRuRQstpEuBhzpXtn9NUM127x2rXyTE3KDPsegZja2t9hSaEtD2g",
  "key5": "4Qe88DG9LAweKbky982yq9hVhtoeojJ6giebpLjJ2qMZwQsfJ7czmLSvoCQWDtF5YXqbrMjmYPp6WoKpS99xMLkp",
  "key6": "5JA6McDTVv42JrpFrWRFRLhQm882F5vsK1fpvnjdaAuFLL26XhbQYMniaJi4ypF2VbVmtX7tAfbQd23bK7Wwv5sA",
  "key7": "5r4cDjz23f6TmL7noL2NazZnmSf3wWbohpmFM6kaBtoyXNTnWtUNnm3KVs2dpAfmwUPQ3dRBfRH2xujBgUAs99H3",
  "key8": "2HtB7TVRnxm4NhWxEEKuSZ4dtktPbVC66jHbzw5Vy1xLK1Q82377GkQmx2t4tDNTFRs3AVrrsokWNFo4eLKAf5yy",
  "key9": "4YtUkmbE2L4PkwDHweYHFopFV8LEiLfSHFfFUrfeENBdtADBo4GDmgrM61VUtKtXbPH1oyu1Qj1tW9vuatVH1BXB",
  "key10": "38WBYD2yVcjrmrK8oKCQkYkj5ziaDpc781QA2aJxEizVmvDUuLhjoiHFhUBg1FDwZtngwbwzuy92JxKNCU76sbW8",
  "key11": "gC4Cc8ZDRUGhHSGCCWFpDtghYfg4s8y22RjFttqWNfobsEcnk9127vqkKEkafEzQo9veMVRx3ESW3iG7McaVNvH",
  "key12": "ZtVaqsSYagBQLgB3RGK5BcPmpFv78LPA9B6btk2YVRFDpD25712dTCMy3G1TvrsFQg23XggzVkTbfew4sTPHt53",
  "key13": "3R9CAZrdEQrjpd8j2iB8M8M463CkKGJLDHXKYjQcphiMKUYaVkxjJ2kCQVTF59mZf1M4fFUZEe4BfUGu1Rcjrdk1",
  "key14": "46GzbaFacTqSunyVsWu5jk5iiAhoLGRvKZewq4ertVu3bcYt5TQP9tTHh8cC1UiBenQGZR9UM8oXBXuxHwQWcLzG",
  "key15": "5dNKtBvtY54JyHQQEVBGkKZSQ6z3Ro3RXJ9pbDmgR7Txx6NzYE7WozbZwV5NDrSDwGNTqDcH6YLvASAu8WfnERc8",
  "key16": "2fy9rXqE5BrgKCNH63aoCXeJKq7bxWvCAiPZ6a4ecXWH4k5cieexygSReRKm3VeKeuZdX4HTpwmYzRDwdAimYxi3",
  "key17": "3Cq9y6XVGJRAVyhhFMNvofLvzY6F6SJ8Gp8mq6Brf9eAo3tX56wQ4zn8fgbHfYbhY2jBgNTUnFc8Nycea8Vp3RK4",
  "key18": "4dwCL1jW2FMY6WFSkeR1XZDJ7E67rqBCU3gZzprjuc1y4niuVTZjMebznTnmALcg9ZATmoaHcyN1WaKNaMYY8Tcr",
  "key19": "2usqAMyomvjFtpUstACEoAmEfJfj3ZeR28CLjpiWLUcEdGiqkP7XixSCPzjNM3vn4t8GcDBzbaA316gsw8VAGxCM",
  "key20": "3xWhJvVossYxjGcFynQmxhiGs9GiKiQ4e51z34DQjLGeCiNwQiMuBSKBZ7t2CucvwbCm34eWU8F5cbvBP7ANc3Pa",
  "key21": "2nxczcEc9K2oeACwSjPoKtsYX2TzYNc88gA7avLNMrX1Bz3x4m93vYXpd2bHrcHKKQ6RguwfqrJbU8bgZsyVA3JQ",
  "key22": "3oCVuBW9DNTSE1a9pCwoazLZ5BLfnj17hKKRoUE1tg9Dc48Ep6WJeanY2Bkt8h45WkNzKRFUwq3fvCMc4c7Xmx1e",
  "key23": "a8KPEPb3ZNxen868yMEtBERnswN3Qp7mqwpKivVjoMvAfrheYteS9FvhUoSfSPGQpzUvheCF8ZocuSwtSsSmeej",
  "key24": "4UXeri7XX85FJZRb4fFWT9EGNGFKGCejimAy3wEJcH3Lq2nhybVbPGF5FHDxUqVvxGCdcD2wtfyC5MVALnnQrn21",
  "key25": "2P6ButQuzSFcPGkUeNQQGi19tBnBuLbSH8ckdX2zYwJTwPM18zWSN2RFHyA1qFu8wJSsZgLSBiRxjhyGYGeVnceh",
  "key26": "4dXxhPP646DpSEBtKSzsU1KUF8Mq2JpYF7WQdeCong3ZDorVN3yay4JCs5v2boPd1f4UCQEKqf2GM9wgj6hudzaU",
  "key27": "31iTVLJUkdTSopvDrTPkXKkufyj1J1ZJgkwtiZGuY231mH5BL8gJEg244LGMYbC4kWNqXtM3z5bzKrMdNUq9hK7X",
  "key28": "5cjdvWjVuPsaCzYBr2AxHE8kJ41tmVPLZU85jACM3yC2LMHznHqu9iLEWwuRZHnf3ihPzdzPdCQYrgefPyiFhH8v",
  "key29": "2iPdCd5cndKoxw26sZbJewMtZZmB6oGMtThdtaGiGfSCPDdvXakZ8Zo7a4WdB3ymEhFV2VT51rqX852HEs62G5Hj",
  "key30": "5AbEkrXRHMy2vTyKGVH3USb7hwpJfsBherAW5rrz1faSVUi8aUZUAAhTYQtV1Mf46D8fvvX4wDim7YgmgqLAhEL4"
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
