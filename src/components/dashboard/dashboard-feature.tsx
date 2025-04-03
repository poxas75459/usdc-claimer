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
    "5YgtbM8MqjALEvXmwibj6rCfs6Wca6agMka2JCmCPGov7FecFbJ2RYh8tLTDf5eUNu3Y56DeWbT53y29hFueig7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3uznDWZHE7kuLQoFXSoWpBD4b4ozdGYDmFxALym2dbHi4PnG3CqQBKACWGrinaSjgDwNAZGP118DW1vrjkdzCX",
  "key1": "5DDmoqoQh2ugAm5H1CqfzcCm1pNAudzxhK5jLNP6VqpxodwJwjujcqXXufwZpkY4EQ8HUXZf8ezBX6USzENEy1Tz",
  "key2": "4WXgkmG2zznCkUQK81ndeBBmFaWvJKahEfHPb8FxBv5TyJ5dnbvqGRtpkj8NnnQJDiJ1sHBgR2EPvuLiekAQ7s5d",
  "key3": "4u1udMat72j2TMQxjGxTtFcpB1MxfGdBDbgHF4wve1Xpn86GpL9qybfNDjgH4FBrjG6bTTjeMc1yTpCnHdUPVRe8",
  "key4": "3gjxVhwhyDUGECSn66jbe7BcbqNtqD9dKzRiuaHp8TC6t9KHguKacDCers7n9CA5Ghr8ksDMKoUmH8zxALNU16zY",
  "key5": "7jgetWxNYS9kNdeKr8yx1ydkurx9K9ZW1KYeLQC6WvmzBCGEQD1diLDcFw4z5TK1w3wde32wmRvXt7cmxFhuaKh",
  "key6": "BBKJZtHHiJNX3GT1s3UERpXwNV2K734j1JJu6rqQxJtMHeb2BdCpXk7RfsdS9PzsCvTmXsCp7LnJXp1guHNpFUy",
  "key7": "5XmBZWXHa1M1mPrAp2icXNoGLhd6HrYtyRZBgFFMuxGMeHM6eRyRvPATuTwsjUqy2pbezm5ns9e2YJbD2dDg6F9Z",
  "key8": "4paz3ixrdmQW2W2jkH3ER59xkRUEWZdeFuin3w8HBdKHmDETPtDz5nqRRtXE3Dk3jijtPH7RCCDSd2VuqVTPLxoZ",
  "key9": "2gxS4AjRpu2bx5Eiei7SccaG1uFutgUGDahzGY2CD4aXUKmNWDuUHe2ZeoCqXzVxAQYc1pgqETSZ4vbsqxHiCidb",
  "key10": "xHMQA5Ahp6AkRCuBadpYznTjFXwY2ZJEvM5pzkHFywTURM3QbhPCkKe3awGeCgibnv6Y7QsN9xEeKhvFPdvGm2z",
  "key11": "b8krxgtjZiRq1fqrxeDgWuQYrpRKyubVxD7UYqounYthFmG28Aekmnp5akiwytACCB4asRTcvHzBNE8BYzrPHQW",
  "key12": "4VoHrcyrKdXuft52FRbFbUd69bDA4rinYggf479q4tagKyUG1rwzcRfLugkijrDcJrNUZn6z4UdgTL5VV5AE5LqN",
  "key13": "5fFQAAQwntLRKBaYUpcUK6yVDA9npvwRPqQcwPTrJwsxJP27MwnhtaJbaN3j9AgtKW5Kr1YoV8cVfWcdXsAbuf3n",
  "key14": "3BPSHKhpBdtAxveS5xXAE3r2paZvrrqh4xZDyVK4HERnPWY9xqajyKkfa595wz8XZrKjZh7xFR9DtgoMDhFaFGko",
  "key15": "U5sLZ5wR8PRdJZeMtkfL6TNBpLvaaSB4n4X2geF1tVAEjhXeoLSm7w6V4cWKKJkHAutW5rJbVEaE72uzSWNGxqV",
  "key16": "4F2JWnF2cXJ4hWqtSAiet5Wv7dznmH4vMtawVcNxsRjMwYUzh3ZMgv2P8tSWPCLnVsxr7oTbwNtNjFJjpeQLn13p",
  "key17": "3ToA4Zz3au4b7re8ZqaxacDw2sNBmYRchYnj3PaBH8FrkwhTqiih5RnvfZhpzW9uWoFUqPnjMnXSYVgu42hCqkCs",
  "key18": "5kYn6AsjpUqeQnmFr15iZhckDW1vBczcoSVoEwhGMi84AFcozyvvgJtgfW4iSFTp5yds4mjHQ4KA55DbB5pdmeFx",
  "key19": "uA6idyhXQsqfra4dQSkZceopgFPGcyVp3gAUbqwJiRBbByr4W1i2joSWTgF3o4Rxmb3akzCxbFnPyDDGtt3cJK7",
  "key20": "4D5N9GDvbTBzp8j1x2BZiJ4i6LnhzBw4CtKqkAfUMW4bDH5xgeLhDNoKjX3dT1RU5gv3X7oaH2vX4qGjxkCcrgjx",
  "key21": "55PzxLhsbxnn7kBHkmxcL5HryFz3cAEdDfHWQHoytyU9FjV8dqhUU577h8KPpTCT13bWcmgwoN7d8Y57BPP4hBPa",
  "key22": "5VGRRXgYhiSPYWbXjT72pdUqKk8zXX9DSUC9RKNuRg5U6X5oYaMmSdCXqwpTidQbsjSMMuCnTHeUUMYrKDRKaNXC",
  "key23": "3hWXWmpeEvChKfAX9sbnsNkJr9o4VDPYzRdBpNTzpEW8oADuKXsuX2FbadkgtVDXGstnpS5ns93Hf4mmwBXc71Ny",
  "key24": "65FcXPVQ5vxtMQnZhFxtqZBtgSajsUkB9wg4Lu3t61MUELHbXiv18gEaXXZcd89rFTL7v8sS3MYRrWxxCvy3QCEd",
  "key25": "2VPYwuZrKh3zuBJPCPYbEKqYvqL9hRHc79XBz1YaDzLKDNf4eqn4mcbuSepBVJC5tBiywYuyBQ4xtDZGpGoeGGiu",
  "key26": "3hjgeZVDzmMkkAGzf3Q9x3bhEfV7D2SPdBz69qwU7ZzHxSqgWS8JkZw1KF3RwZXEAQ9Fow6Cyn8QKA3SQXCtvuop",
  "key27": "3nyfofK3zxR6CpUuHG5cacD9ycWSi9PtaYsvfrhzG3W98DoGPUQPLxmDE6jweSUo2o3VWxUJmW7THpQFM1LzmC5C",
  "key28": "Cubb48fFeK99dcLhq6r7g2rJYi5bUCCXroDckXw7ADaWVboDxc3XFBY7yZh7NbXf9XEXCeB7MMeLXa8L8J7ybEQ",
  "key29": "S4Ftm2JGzGYfeXfRgvo9QEU9wMKziCAFjfyusk2mfSD9xLLxVWWGTc8fkPQLqXGjsGW2PrbumH1jnUa4Nbdnnkc",
  "key30": "5XxekBDyspmEU5oQ99vD4rf3cxZZ95CVpXQEyv3mzcw5LjMioW7W2PvbLhindDUtgqXZFYLcR9XDTx4qwTPWkQRi",
  "key31": "4W7zb69DDemxevgrsonZGoSYnA12dXJatB3nwp33nSsvyrXGeuX47Z6Ee9dxT7uezYoipcBHP1DfbP2NJRNk2LDb",
  "key32": "39MafnsoBouafHsEoXK9x3bLUiqKVjq1rM5yUB9EN6orN7HsdQ7NEqP2tKsKFPvBafxTp56kJoDTukDpFZYTFtnj"
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
