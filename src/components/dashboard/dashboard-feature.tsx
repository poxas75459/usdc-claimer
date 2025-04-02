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
    "62TN4MkeJJJLyzZkyog3p5dzaox1PSh1D4KyXAEXeKZAUwnsETWmNzp31KBjs4f8KkasBVo2xhtZAwv1K96nwxEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJbZ49xU9GPzwaTDcQgAzPtf9X7J4acBE7KrSyGSzJn2eLJYFsNTu5KynKR5Qy1GzmW2cAD5ENadQPfSeQbHjsP",
  "key1": "4NPNYa3c1eccX5XPy1gkJqTpZ1ashHQRDBZY3FrUHDx6dXcXZAMr9zZhsyGZoUsRnAuLRn4XqxWhzXk2TPAzuJ88",
  "key2": "3nPtvEo5GXGV9dhkiT5Wkn7suJgExnGwLL1qmSr5uZwmQheSVjgFF4Ghs5Njd9aGVWxGJxcSDyxaJMCaeZQX2z8Y",
  "key3": "qU76FZEYJPDjhPYFCNZxsF8vw2AzR7xtocWSH2Vnwqw77sigpeYY81VNXpDHkbQnnjWmwBH4CJh4yCFg9QoPE2M",
  "key4": "21z5tLPAXViaukvHdNw5Qw535FXfPE2JNurr8FR46aKyP1HTviHfLTvhsEYVBb4T7kZrGaeSVvSQXkygd25s9Jif",
  "key5": "45FBA5ZubvFNGn3w3TwC18XpqEDf7vfLh8QFtyW2josR6dP15oswmyvXGEAmzCugXXyTudnnU4j3zZkEZdhS6Lr6",
  "key6": "xAJZvdWmHHwTV395VEAXbMJPKYh31kM48o8ve672v1absyjqnupQwc8hwNGtjjXtpDzVM4zXCJ6QLqXzFhg9WnG",
  "key7": "pAXU4DvcPjS1SswA3eXMMey39cXpstmW2LZX9yYgBS2uWvTXbfeMY4Asq4ji1oHx8nTsfpFEYZ7KBATLByR4SVj",
  "key8": "3yPDwCCGvBE6YUhz2iZc86hcEPzKGmEy28sGk5xAiLHr3aswaveot6p9PFh2oT2pvawinY1wp3VAwLFNB4ZcTF2",
  "key9": "oHwei42u3SZm2p4ywgfPC5jy26k7En9UAQo6gvjrL87PVbH79wYEkZkLoQwy12nEn5hdnM3bWwQHUGPjUYzqWsm",
  "key10": "4fhPMFUTGf2kuJpFRGohQZMqiQKWd21cnErjTcECSGT1g5Zorn8kCsHdX1wzkcMmRvyy2ZLr8Psn3cLBLv9bXUUi",
  "key11": "5pSZnTyGLeR6KdPM5whkAbUTDRayPLYkmLfUZfGVnhvr1L1ZYT3pmREHWpsdnTKdL8ymN4VGmpB7Uc8HZMVgucL2",
  "key12": "4eb8haghy6EWy6TyRe2GnmMW7WLXXeL2t1spxaPUZCXdTqoBSFqN2JJt5uQyMSKSc6BritEZ9zdzReFf4JdsnF8W",
  "key13": "463pj8GCsUNTSEF4RzHMXaXSd88kiWkfWL7mUFFhKNp3wNKoR6Ev4wu9pWyQFPJ38McAYBFcM326GLZAHc8cmGLK",
  "key14": "54ycUmxF4Dze9fUoPL6Y7N9Vrgv7W5CX9mm29L4cHBnfCq4kxzgXgNLToYtEgqYYpSXRPmRucCwoManjzaqiuRj7",
  "key15": "4dSkhUpEEeCyJG6vLh67u9Nh58PUbBfvxBQpEtQYZ2hKPw2TZSbd62sqzYta9zRtYNwWjvPoAvj4aKzXSJHSoSyC",
  "key16": "E5QsxqXRUdANYE9LTqbUnufd9QCPkp1oo4gnu1xJ2vosKdW5XrfCBko8wcZ7xTp3weBeJyxatuDZSyCbenh2kzB",
  "key17": "iDbWbrSNk6RC5Xd4YKZdwZ8iQaZBUNFmkpnou3KC8jxxks2x4CpJRPV5rMKjEsqq4csoUJFQ43p2euSsJ1ZRFjH",
  "key18": "3TrT76iF58doYeQDkaJjDEt43eW7iiW8VqSvH8nRUwrpyzkKvrSuGfMsbT5j2Rn7QD25bDZd3SVa2DL359u4kZ9R",
  "key19": "c9zkwpwvNjAscKCbgX4irmzxoxMXoaeJiLyS1zuYCvKnXQ6d4PLKw9pHYRXsMveYF5x1yvp4QWQTuBFogMrKPak",
  "key20": "45vysxGW3BgR97nEyvnPZ94kTJsyNYt3NfHDN8Q5m7uL6kC88uYxdjy6m4FDPvt6oCXPnvCQFUBJrQDjg6MfrcpB",
  "key21": "5Y1XzBWuXD35kwTKEDo1ywy4BDGkUbGkUpqeREgu1vxqcm2PwjybzqaExFzn64uUaEQ4Eu2y5KkTV7JvbTN4RzBX",
  "key22": "2WqLuZyYQ1TFdi7c7Wpqnp5uJ9Hqpn9PTfkcUKAhV1WMDG3ohwbAPsLq65A5BmwjkjCoWYTTzbqywrQEbGcNt9Ab",
  "key23": "4y3X2f9qS22rW4kwD6mdviEEAooYjacR19NG47UoMJKUJUCWLQd2EVJtKsYAbpWnPdBnaXs4jjrNjuTjStX4BBK7",
  "key24": "TXdbqftkWSAjwQHcsGjAVJpQnkiQ12nGiBZPmjCgxPpZuw2Mwma7NqPCs3UY2EmpB9Wa7Wzgsj6sokzFHJNNg32",
  "key25": "5AJgKXR73Eya7um3VGoLbhN1j4ZGrfZktEonj2T9F5og6ccszAzYPk4SUd1VrW7svjcaAmvrzqzeStCVT9xy1q7h",
  "key26": "4dTvtm1QuTARBEKEraD5FXjjM8QkVU4z1QZ2BSY6gEeBeexPJpTB4W9KqrnAM3YEiC6GbzYMpWvAeKcTstggzU7B",
  "key27": "5Tuo8JFpucxcUwZMa5tYLo7RWrtevsRDmuU1s8DATVxHSxKH3UGHUArK43CyjDBg6sZyb6trtmDsUVoZ9kTppXVD",
  "key28": "57j9wEboGsZbCA8HP8ppxFBDGgpNzmwuPmsr2Xv3VgMyEpDuWGoVS2pXQd96oKYiLahLQj21f2yeB13u1MMM8SHz",
  "key29": "3ceWMWc4UeNN96sELtMRGxddVoQyWLdwStegDLmVAYuB6A3cBDQErf6WFJvyxHLqtnZF5JYxZ2uD9wxiaPmDSrU3",
  "key30": "Ay4nyN6PXTuht1DAc9r5atGFQi5h4omVhgoFQfDUTsda2tTccG4KhusM68Z2QznB5tyiG9SeoVyD9d3PjqKgDxz",
  "key31": "5tv2f4PzmtFHGtXLBw5RFCaN8zsGpiKGvnM8aZfw8YWtxzyFUGuAidQBtNu61omV72VEAryJBs9jSnJEPf8SyB2z",
  "key32": "45tkCoDjzASeFApGqnBXWoD5Mb7Mu1eaAtXFuwt5oW1fhFamfQqrfEJWNpDg6mM4hudVdgoVugZJsKgxVvwVwn6B",
  "key33": "56HFjWEtL5mg5zMtFCZf3RZcesndXUz6Vod8erxbwthLJUh9BcdvQap3s1vgyC4GVkuHiYRQRdxcjWFiSwVXdAxC",
  "key34": "5GCVzEbF9U4ze32Dw5iJS5Xp48pMZcfL3ru5bY41BUhCBxgGbpY8Ya6hC7gUuDjyAd3Bv4nmcWDc49GC4T1j7Qyh",
  "key35": "3RvheWWSH3KiaUqFTykEKbyQTMrWS1YsUVUkqVb46e34PYxDkvBDbF9LdWacAhQE4Kx8GHtsKanARdpzNC29Sihy",
  "key36": "2A5ufET4LdQ4gNKoSy1ASL8Qe7jjUCQgdFc7enXMEX5ZtXE1LSzc82bZX3QWxgu2dxjVpod8cCX5M88oUe9hw8U4",
  "key37": "3Hf8Ew8U6J2nPsDHLD5oijei1gd9YGDgCzPqK9CBbTmFRnnqdRjcPt1Y3xLbUURR4gZS3uE3ks1igecnd3pLws8K",
  "key38": "4zyt4soufh6F9FYQ8CoYhyfwsxipYWvNRpoBvL7dBga3pDy5C5FiiQPhmoUu6P3ejEzobtCdYLuDzeCbJVK3cmkS",
  "key39": "ivsB5rVfqygW9yk84thwkBVFVj7rMeQ3Nh8oYmxdJRuEE8eE3Z2v6jB3YAQRRKJP9M6Z4XRq8CFuKjg9Fwt4orj",
  "key40": "5QtkeD6g1UnSNKwaDPafYWfJxjcAnf9rYyF4NGMx22NW9JSy1oSaApToSBjYLR3JSm5XQLDzMibyQq2dpeGdhgvW",
  "key41": "8UjqVMyBGSfAAeza6r8cxcFHTSekPd41Bu3mgZtdU4tTVxhRbCAt99qpg55etdaiBTqb52y13fsKdgceKFGxsD1",
  "key42": "4NbFHbFJtKZ3hJd5hDNrrnxVppNQghen4jFAvrd8Qvcwnbxvm9YYMA8f3EG8eTjRR3HTgimQk18cVzrcbq6KbfN1",
  "key43": "5md1N3ifQxWqyLtdmmp9JyrV29dwFbaWo2R4hqHZehDSWUpNWiZJpNzBTPc7kc8dUkxViDWfELu2kbc7L7FgVr9x",
  "key44": "4NbWt7sycNRCihxN1DePRFccxP9b6tGjtz52KfXkdhBW4oNLY57ffaH6t33PbzGteGyF9wNjTZK8TT7YgeVV8kL5",
  "key45": "TbRwYxs4fJgTiXJSPyqyQYpM6PDVTczfRahAT56Xhsb5Nrsv7M8HC6f1RoE367CdwC4NRXbTX7WQixoPKU8aQP2",
  "key46": "5JQAAFeWAb27BYTuTmHi4uj8UhRcAJt5R518dNQCZPh6dZ4Dfy3xvLJXnZhaah98mzvbNGuZUKNLJtoUiyEqwe44",
  "key47": "3J2wvNCXPqJXS2rJvndTt9cRXa9eD38ds7iKcaYEnTgJHSbUSTXhiH2TSfC71bXs4u4WRS45UktqSxoBxvBA5yfp",
  "key48": "K5tUugKKPGk69TgCjjALbaCKW7pfSpez4FpeXdzhBYMoB1yW9DWF14XSzjhRUDFSdnKSNKvKrU3mFcoKiyyX6DL"
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
