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
    "4gMKetN4go5G8CpdfCb7S62JKd4MVMzTna8u2pYbVu56RydGtshfyaoxwn36bGu8Zb8WMnXbb1266zFcwrkcS38T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCUHYmgYzyohZmGStdQ5ygCjtmu6gTzUeTu1hybGNSiciSMr5rNquNLuMds6vS8pBbfvFoiYsp7k4d5e7ws14C",
  "key1": "4t2QzXHuALkVKHDjSCP2w1xVKcsEQmxQxZw3kpGmd5wxyWDAfTMR72XoAeTRBvSCRpuXrSg96dHjyxDRZu85Hp3r",
  "key2": "BdT3DHiXVNNaJD3e13KesBjCDgjUJH5FnxfMZrmnjy5fhBGCc24a1MHJpdmP8G92LVnThnRPD2fep8VGTpqZADa",
  "key3": "3jT5F8rpHadrv63iekG47yrkAzCSYvawEvJMSiW7cGPtPFTjXNuuvWQ7aftQRKGR2TSGTVKYS2xPZruZitUXXSjV",
  "key4": "67KU53v83FKPLyYe6kDe2zgQ9eFGr6BPe8qzyAPQeMpPtetLWRmcYd4ejjqtKYDqK4BXuCnXgeNcGb4397uunYdn",
  "key5": "459xNogL4XiRCFRF7WMdjyY13PVNvXBqkkKaHQC5MFyQLgBUw7xhqWZcD7WmhghJTjQ4i7aqpBNf47cKu1hj8tpM",
  "key6": "53e8Y2u7hUVNw6WMix9tqGN74WtGgtdsBuRzEPgjEVdr2QdVERExj8QhCmnT65PaTnDRHdoDV69EJVRz87ZvmgrW",
  "key7": "8vsX3NqpNJzhTqk729hsGdK79m3S2qGX9P7tbxZdA1iLwMN82Y8gX2QpC1RtJ6FQEvWCFJGPZADLXJZWpjNwQjT",
  "key8": "4qZPHKvDJ9L3jj3Vq7LXM6RAwg79y7xYprcM3Xe7LwnUCGMF8KufY1hDxWVe8vHzrnoig3sD936jGYozAJQRgpwF",
  "key9": "45t814KhkATsTVEvXvtym2JuwxCJnMve5CreCPkmANMyPTDcBcTvAuZQUrNJFXh6Ry71KTZxu2FspAVxdS4msw48",
  "key10": "SbfUqwWL18HNhWsQEuQkku3pxQhk5KrXvU32rnongDtwnKNJRDC4N8Vhg8ZptdbHNcMCwTcThJi9SRq4Z7e5t43",
  "key11": "64XHqrHpM9KsLSU9SNqutrpE5AXdQFn3bmBhZQQdGARgKWCGFwpbTz6KgaaaEMGTEDwKH65aRySdQ3eNBzf2KCMD",
  "key12": "62gT6cdU8VQLoqnNw5aBsb5jwYZxNG593oc1omup8p1eBbVAduDKXWWQmLuR53Qog9EcxZxqt73388eWvAAvPcrK",
  "key13": "4mYUKEnPmNRP8VVvv5r9EQ8jF8TtdzDPWTMLRv8RRLF773GsVzpfgNK72o5wuViZe4yr9XJ3QYmJ3ooLnehmJPtK",
  "key14": "3DnE1EA5nVw2n4tCACrNvZDEkpR22JRTk5V5eAi69uzAg8iuvujvvNftSTxeuCXDddCMNTKp16ZMF7sHUjzPHBz9",
  "key15": "Bhxzk7dA52Hc1tAmgcugw2aZusUzVv7uRRxNn3fxKygk17YSWoBr6wycSmWq3cfNjn8XB23m6aMEeurYavSNSSR",
  "key16": "8cA1TZUb91b6h1B5n4W4JW6SWQC763xTxNtqtavDUqj1QXr4YXEkTWJ8ogvTU5sfgvowP46MEdjZpoZTq9SKEgd",
  "key17": "53PFyhy51KXQtvsZYsUUyAWkvEWNj2yRV7uzgSwE6GNDnoZGyooJy5rvWzvcPzjvnWMtTvTYi37pRfm8CGYhiGqo",
  "key18": "2DCB9uHFfAq67M8vL2hMFa3RH9VjDaR9ghCZPBHcSavrdgeZg4inimGkdyRKHwyc3UFTaeURjQZEA2oUyfCYief9",
  "key19": "z1kyPbtjd7oeFwwpMdRPQXUHwywDdh7c8iD2Bp8UGakq98XSMj2QBsneVVvWT4tcYXBmD1NdkiafthxNGivo8qa",
  "key20": "2hmnWyYDh47xzR2hB166T5zA7GcJYkG9Q1BFo7wdTmMxxw9mEnCVNtcBGFfc8RUQdAieazwxqGgAY6XhU215cDsE",
  "key21": "45sSvu7BZqsD9SzMG7tRWAZvn54ifjsUM2mZTCy6LskqHpLYW9exU7XfRnLxtfUNJYnYPJsz7jffJjTqHorRmgH",
  "key22": "2TPpqaZqZPXEh3HD9TPuNVPEfEC5f83q8ooqQsULW7rDHbJ8mnTKP4ZQGmj93t2qM7xJ6Ami1c7Q8AWsdz3iA2dF",
  "key23": "4dRbAM6UK2QAapGmCL68w8ydfSp36e8xspYKBjB4oHZT9KX3VNosdji3MUDdg8aDU8kyoFkfjPAy3KfjuS9jy8wz",
  "key24": "VXMbZuyeXdAUAwb4vyhzBEZesjcRmn11JoUKGeS2whq9U8gmXisHiuLizPy97Vyms6bCMfuFepgFPRPNkdPr4sc",
  "key25": "2gBbpnGMVFHiz3d6JG5mnKXaj8j2kAMV6uiivxERe95JhTqusdbuPsopWKSwRdWdGTAqJxc18QHnVoQ41fUuzKHG",
  "key26": "3ukEJKSj3PsfSEuwPZfdNCpydXsAm54ZsyCwBp1YUZajZoW2b9mK227gg4EQBunEkBUMbYa67vx65gwQ95nQccbj",
  "key27": "2mGkPd8NkCVFUJk5bj1Mx8zzd8M67f77hTxvv7yMtZM9EnJdpgSmjrHUsYfWBP13x3g3m7LMg3JNidNqNWamDuvd",
  "key28": "tYeEsjwNxT2ZXRcqbntuTVvLLENwbcnEbrGYfV8636MuTwKjBuXUzXhHJfTZwhF3oi4aX1o4GqTntyNSbAeEcpX",
  "key29": "ZUuRPyf6VEvBfev57JHxSgNLettZjraEwADCoSWy4vhUtGP8ueCfxdi8VQM6Hqse9tjcPwxMwhbvpc8Y74rHiTN",
  "key30": "25rCXtcbccqL9WUCgRYQ9oRYevYxNXAhL78mCThwFMcy5SDGPDajw8cCfA94qcEPBGFEQaPmEqMBx6wi8of8MbnW",
  "key31": "Z4ufn581dqBk7MGZKg4f2jKtfHNdBG6ZosHZJMNwHwjHFBo8ZvnGaW6WFmg17CKZvhQvfMQeeTAVaFj7iq5SUfs",
  "key32": "3znxyV8ujHnNq1qsVoWiHd5aJibqUACCNzwDZxoJBrd8AuAfKsRCScccYZjHYGrGWh2SsbLBapoaZxmk8ojqMMUi",
  "key33": "2UjHxggL58L5AS65LrY3FWjG1tvGoswEDwAZTYTXFdFrfepyrKZCbL8YNtHCi3jnaHRerdcTVYvf2FBoMdho8Gqo",
  "key34": "4AYDFLSeHDebMJwUXkdpSXksNJmTjhbUCJhYW5Vjp5TWfTfgaf7PyfJB2gGBk8W3zgQnjpCtuxZREpFc3W2GMDJV",
  "key35": "3UtL9SqtoeaZtsiz77u2KJ7nXw3apsP2uhwkFgUr4gMXvHpHck4VqrJ1k6RTNxFYQYsUTQm4pq1ZDFawbviE6WbW"
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
