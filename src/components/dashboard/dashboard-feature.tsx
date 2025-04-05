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
    "3Q2YzsfnWDjcH2qp4hnikp1nKaXTc8VbQXUFERqe82az5oJiVV8aTj9JRAwZx7t9b5bPzELhGqCnuNZZEa34AYZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gqV1McHiMiNCXNSww3pnAZ6tiM4jj2EXZ3xKGzC5AFx5MsfWZamF354batYAWw6vg5gHx884ALJmqZzEuWrYYZX",
  "key1": "ihGneTNa5bYfeyeSrvWfeo6DEL1pc7BHdDpbHu9ghFLUosVe4PSRGQ2PEzF7DhZ6UWeLtsTDd3pGdRG1nthSmqm",
  "key2": "swCMHWQW3jzvipr396dF2opYcF2rZtrkK7FZpMpywBMgVKPiegvTV1EKBkaWFMYbN3GBYmza7iq9159RJMkgzb9",
  "key3": "3JS72FjN28G5cqAVd4ufK2xYqwGoSGCteDzGjESQTRiLypkMtyzaCV3Uyn1p2keHZkoH6DR9CNapHUpZBGoHoyE9",
  "key4": "9BLJAS2JpP4csNf1hGpUnAUruzzMmEjerF6XVx1jD3qtcnP5ozjy99YQhjn6CZYgkSUvZtQKB3A7pf69JdngCRy",
  "key5": "5S9VGXRBAHW5L8dnMxdkPwTqtMHz1sXH6Womvp5rLyGUAjAnuzCejmix7xKH2JVVM6URttwChj1mPGWt7ccDTHP8",
  "key6": "4bt6U7PqMWqCJVQ3Duyvk6UguANjuWE2qzqwufkMSn2o6Kxx1KaaFTFk69vzGh3X3cyGsStFnE3jdkJupPD3tiwN",
  "key7": "5EVGTD9TvFJi5BtQsfMfpSCF1dAwCeTeDvjV8aezLmrZWP5ZKdzmS1GxfPkdHiiYBJCTebxKLAKxY3V72reXogAv",
  "key8": "5TcujzvS8umfgBeTJ26rMhuEJ2FA9ceJbfrjWacTCS93GiiUN4N26vd42iEy62eZcm2BEAFCXVJHN9AYKRo2m5Hy",
  "key9": "5McEhzKeFJPeBTtkLes67xMdsmrmdagiGhDWFBBEFQqGBFdTpfZQFP7A28k9ZzcstjDnQZeroCGdTwSfiEoLPJuj",
  "key10": "5fXRtFLPucE2cWqk4Ui7KFo69q57b9n9XsqB8sJXcE71fP8N1CveyE8QQ3x79zgTQo25TcMJhDGfp4XmWi6tFT9R",
  "key11": "5Xd2chRtvhuxDM8RtFhvjwNMLdYDrpxBYQAWLjjZnvBmotJSGbAFtvuyy5zNQH3fK6t96r3teB9yyEfeNzSLLDb3",
  "key12": "22oQY9TWNu2gyKQDvdQdDa9s8tzaZECXt7tu6U2p1hoFrpc52ys9nyptrZT9dGmpHDeLYH84MXTYYw6uMW5EnPUa",
  "key13": "5BJ64cpKpjzFp4nYxdmhwZDFs5N9BQgpBr6SG7AAHXn1qEAcScU8VJVZeP6ESqnkfLiAbLo8hsEGTAFHT2M1T3Pq",
  "key14": "54z2cq3D5bXe16WVCbQ6tUQw7rnoUwvqdaj36zS5A7utJMVtoSFXjm2S4gCcY7LMYz7Vzu8Q4o1ApCpQyeHieC79",
  "key15": "iPjDpM4Hc7ZFqnZ6qyRxhuJ1JnUBsXf2agR6h47EAKEGxSPmsCNFJEvBxuFsFahwkntJJPSwHgd3thsm37PQD7h",
  "key16": "4e5amyuXyMqR3bGt7uvUCxRG3FDyDJrjCPHXS3JXDFQMb54b7vywLaB86phsuALXojonM2Qb9SmB9XMoDMHpSFFj",
  "key17": "2YjFaNhugJ9myzxMnDhK7ZDEH7APNPyg8j1ZHrKwUT1bBFH3YPj1im6A5eoatL1KTCmE57P42ErDoFyUfzAdRRnr",
  "key18": "3PgUucsJpf9L9FG1P3UArxQwNBtKibJdcULB9KpznC5sZNhc5UTD7WuB1cjtw3UfgKx6qSLayiGKw6VsJsA6kVzC",
  "key19": "4YcsTRL5XrLNwK7AY23Ud8P3wLzYfBXdXnaEA4H92xHAVRDsVvvzx4MFmqrqVzJjQR7LaFLCzbUbVoSUD9USzNE3",
  "key20": "2dhrRPTtDppXNzid6b94jyJaQxxx64cqUW5q2HnhAkY5fmBzdsZXxse1wkWURpSTtVdGAmiSzvPXEoP9VtzHcvoX",
  "key21": "2wxKXfWCEWB5uG1GKYBCKBwJbJRVeHx2iRj2DZbs4yKa1RPkPfCEZJzaBAnf8cHdQhdepyKP4jbHhwN8yLHmmrwp",
  "key22": "EAT4oaM7L5nQ8sk1KBUuD25ADzbPKvBgA95UQej8eqjgDfFvY6qoEaLzYnG2Uy1jhKJ7YqLTw7cfw1FJu53tMQv",
  "key23": "3RbwTLE3c9mLnGWfX1D7ZED6NMMi8oER9rz3dCRWk9h7ApBXBmPrgTMj3cBxcfTjMbrUYKYy54dDk9E25RvQ81oN",
  "key24": "siXm5MByLfEVWus8vMkcpWzpNgsHgSpTJUch83HdihmRUBDy3AZsrJnju3W8kQDc4VafoTwV6A4Ms2Ce4ynnvJm",
  "key25": "4fpFAkoyuAkNFpiGU4CSqT8Mv7XVQ4U8JwaCSo73fnz1njhWkAiXMBt85p9xdPGegmuNZYxysbuo3NiU93wdTU51",
  "key26": "5UQ2BNqGwQWVaiebnPqkKeyy9WLK8TyUgWbTcettim7MWcdMyMvjiRpwZKNtkC3P2e8uqPtzNe5bnnY9gxdzSRev",
  "key27": "2XuGNs9ixKtitCny3ddiNFPDF9BDSGM4jvcAk8UpgaoUueBmPp7LbYVnK6xnvGgGzpR4uDY7UA9qtVHxFugA7ZcH",
  "key28": "3W1EaMF7U4FbTzATXW6s9Lb5xVSt755Hqrt8Q3ocHikvHmKaU9ZrPuBJq2FeWDEV4awcsWKTKrFkM8pM69iMSVX5",
  "key29": "62t9EvCoJDd6hM4EAVrX8BuBfY6bPcH5hQBEro3DPaVLePamyAVMucBif13y3e2DcHfQrgdE5TEHy9oCCCqNXN7Z",
  "key30": "3J4KDWmiaZTpgVEG224EEd7Be9ikayXo28TpGwPSLZQnDPCZQmwLeenMe3FnPbgJazAsweMvt7uJY2B5vG2P3wAQ",
  "key31": "4dLRHa5uqJPrsTQVJ17bby4XG9Grk5jaRPaAs5PRovg1M4fCLdRuravEpaMbk2aqy7LTi2tEHZoALinUwWxrAxEQ",
  "key32": "5hEB6FtxLfjGERjNwfLdLRP8CFGxCyggVRsqUQbmdwKTrHBG2Uxsd6EejBffQJT9muygdDjS9Jk3jMHhXsTZWnjw",
  "key33": "2tqh1ayAqVWL2iWTh9nc92D47SPzqXTcjJi1qSrN5MxGF2VQjs5VDqVdpNmosgojNc3dFRHZTzzZghbPseybderu",
  "key34": "J5n1rNnskf1Sca38bfANYxgz4yWCB12QYbee97ThhTshtMJPhw4AeUKuyKv83umA9wMa4mVhUpDRgVwejbQP2Rs",
  "key35": "43nVqHLD4TMn2vkbNkbnGVAeToQZ5CqfanssNy95Y3iUzt7N9TDYsaiZaRrqruSFeDtEX38qJmEuMxJqiTypTkgd",
  "key36": "2oPY8oknmN4hKP2PRhpcedcCdjvVj64q8RKEvSbZ6grJMjGKeiSc2WmJfUiciBpisxziZawA2ZMkWLQWVb1becAa",
  "key37": "27PWGwicHS8N1RVa3pofndyt1hF74JendHi8p3GTKd8AcX5P9QwM5Xa8BLA9wM9SZGuWHLo6czMUFkS8HeTgHV3W",
  "key38": "3Gjw7vr1hu6ykrx8rXHithHuTwnXjwRmPCQsysKGxjU717CsMKpQ9WgBLyaKJtwmeqBVf5MGW5E7pmjcGrnJsaF5",
  "key39": "3NxgJfGCLokHYNFCGycEtKneSnqTnwaSKNrmmG7ELKcmqaXYiwxJsMHree2SrUbjzEFjqoW5N3bC85hX4QWbvTEj",
  "key40": "2owzbXeBs5HrPAoRUrE56WmrRW4tFvVf1kBjrQsVw2zBX1nvjiVCw9RxyKYkR3dJdrrVZQmtGfNTHnivgARwi7o5",
  "key41": "2XH7bfL471Usok2fN71pUyuyzYr9u8NaYJ5gx133PUXCu6D5EDykXdWbkJdcDggs1WA9D3araveJ9dAr9rZ4beYo",
  "key42": "35ukor2QFC41hX2csAkqPRncQzj6bJGGis6qg9vjBrmb8oEuqm77EWzhB4HBbGiLCf1KU6VTwCqxdq949912tGRf",
  "key43": "3eEBu1nEw8mmMxV5K1kupC1u1hrzfBD3ca6iCQ9yMgsUscbuRNMKG1f4WZ3f8q9kpbXaK3neb8TsDycrTSp41mFe",
  "key44": "oQEmuyaDPM2bhMeQKd5QwUsyHBcmWg4yRt4ovzSS6d6UppLGuj81dm4zZbQb5gPr3YBqmynfqGMyUGmruh3wkhw",
  "key45": "2kZFKWXYtXEAx7bqUYDSPVaTQ2oWkpXs8SPoaXqt2wy6anyJApb3CQH2gGe8ZkGwaz7ffZJVUwXwafjkCgSGmwKj",
  "key46": "4RCDL3GkHdX3on1W49iJuyEsfh6NzRXvgAcUh8ui8fKXbTS2pLWag7ADxg8qZH8oFr3EJvM7BtvqfidZUuMhLd7k"
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
