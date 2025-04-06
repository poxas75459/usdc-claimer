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
    "5eFgXngaNSqJGUQnUvP6Qvz3gzjPrpbpZgW8crSTKXMYdDBtFZsyovMNqUxjPNLVBSacHh7UMYX5kcQ1MHse3yk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nixAFUouXetLkUVtDt17Ey3ZQiTLzRTuBbQCNzK4wWckoMiu3UXnT9Qw78nEScCVAYsdqy49BXhmTFnsaN84V6s",
  "key1": "2a6ir9yd3byenVSathKbdkW4spLTsini78qtj8i8mC3dDPq1Z6ThhCfYR4EyigfjxwtKq1Win8nXrD6cnfnTN6fH",
  "key2": "8frWeA5x2ND264kMswQbFwtRhWCCT8xTyKEqFePQBv9rqHBfJkBUHNWVtpLgS6cher1Qh38j1y8gDEWY1iCYaE8",
  "key3": "5REvzWw1wE7mUdqAHqCm4Ux5QWYvnWWJ93b1NGGHkQLfrkGzzfS9PUcCrHDciN38WJuN3LjBw7UDA19dLaRhBrGT",
  "key4": "2N7dvyfErDaTt6DR6jds1T5gm2dM9kJmXn53h6tQ3qpUYY33jANo4iLty7LaxMN9FzwMxPq5xkTcuWYYntE7MZy3",
  "key5": "5tJ4Pt3ED8TFprMi573Lb1Y42DvuCqdYiK7fBDHfAAhrEFmXch5SZD4HMVNwKPrrvneWuYrgvvahU8NYAT1UEKsT",
  "key6": "27zgVrpVWQGEVjVMzDue1G6HNxZjUebSEEvanY9dkpW8tcJsDB7c7AgzzdoLYCZDHo4HaUvFPDdm39f6AQmv1SVm",
  "key7": "U8SF98SGjuSEhYd5apSznhVHFTuonMqPXG3wjV5e4enzNQw5wG6cVjsXg7xTFSbrmHM77GFY5W83CZBMkZwRCSf",
  "key8": "67coSjicjHPmsHcGcEWe7DPgtowu789nZZ4UCy9Jv14otEAfy5y33iyATWWKFTc7xgg1aAC5iRwB8J1oR41mriU6",
  "key9": "45Nvqg5ARrSAEVhhuuvTrt5zsXUqggzXLB8aqpaM4D6tuNPwd2v9uLuaktez56WzS3cTDfnfXLbDBefsVan7c6iN",
  "key10": "2GwtjtHfWTzVzTUZDVwPmkHhFTwKptoS7C8zbtDhFTMwTkx4mAANFSKv7quPUS4hB7rxJkStq6vDRgKbU5RvHg9Y",
  "key11": "2P13dLhYFLWFWxXowjpqnxGxwiCd6eJhhAF4sYTxWrAAtXu7aKrRQriBs6fww7QQ5mJT38pgR7NucrY6jNJBdp6w",
  "key12": "2LQL8TcTvTF14bnHSK1rpKTrTgpFF6ySJmqAWUGvA8KWLC9wrDHA2Pjpfq7nHifYL3A4bGCwcUWsrHQZBEKLWRyj",
  "key13": "56FQJxamXP7aqKgqrs1fvNDSQE1Lc7Qa3WU2AycaeRds231mc2GNC3nk5MyCVoGo3WkAag7Udfbj2bHf7yRfUAXu",
  "key14": "37arjPFCpSdre1ghVaxXm9M2RuRFAJzyVCa6o7zXsVpDDLHeDtNUFMY2zwzfvvkKajeAumeiAayfePuSzW2J5w3B",
  "key15": "3wa2kjrJdTiSwsfUbnhuytpgJvu5JhPuzjkEA4W1r9kERzZXTyairUw4Db1C3RVoJE9krq6gvxHg22GKv27uQPeY",
  "key16": "3qWz6yeQgV1zCWVmZavn5VvYUqGs5sLqP11Vsi5zvP7XXKbLqKTvgVY9Jqy4mrfaRu3fSGXykFh8R82jpQXhSWzD",
  "key17": "4R4GEMJ7hv5KeCRNKT1T9D2NamE5bs65seASwofXCGwsXvePesYsyqJuVsz6urgXAUkXXGxSbg1natxYuubYqWMq",
  "key18": "4S3vp5dH51k3LfXLkh5UBejtAUk4tZHurp79tXfn1GTVeiMoqAiFc2AkZnW4rGp5DP5xpBctMi7LofrpZczn7rnr",
  "key19": "572aenDLCnXcSSVH9FLvaiJxjoSFAG71FQjWYdARKRYdg1iXgZRExEceEZY5bscNN69FBBAS77qVJog5pigPiJZd",
  "key20": "5wMyQwLoJyKWwXmJAYUVZcnbm3tcGDdE3dfTMm1u5mXMmsqaWg6EkbLcTT6E1fywQw1zdpcvJAsSnpCVmqApbTDu",
  "key21": "2994dupuTfZ1Pk4HEvCLszXdDjXnt9ysMeds3eVuGGM36JsTsZYLk9Jed3p6H5w9od24YbsvGFiqL6B7XdXnmqMy",
  "key22": "YexqutXfS5c5hYMYd8BVxRs5DoQJmJY88sgqRCpfnfRwNTq4Kn9rJWsRo7BSEcph28FToefgoVragdMj7VnnLu6",
  "key23": "5nxsBc6V6bsK3wqzQyFgikxiDQwxcfkZf9d4Xc3eCtkK5qg5K3YtDqrFUAnwiseaCuEY5MStB8E3uDA4QMBepdgN",
  "key24": "64arA1eMFPrAtTMU1Vu2eG1yMFpz2CGREoUp9ZLybC9fZnNcSXty6XXpBgnXRAt97n97fJKpTwG13vBAoZYF8kFL",
  "key25": "4gmENquCEEyrfStvfiHEMgMSzZtMmH9cQT2V7bEX8VLMArRfm5hvs4KUbzyk8x4c1tmpakKx5uMv6hvKcPiCBWLn",
  "key26": "bccuktVqj3ZVTf51eQViMkF393ndFbSfzwxQjoMB5s3oA6JkCgbUUZWD49MA68sAdUXexvW37eq8jeoMffYnLFT",
  "key27": "523TH638UJMNkaXBmNY9k9TpMBdKSvhrao5w6jFPMjBZK9oxQU7Ecc4mRqxVqEi8RcvpQmajWr8iDYCGKZYJr1AX",
  "key28": "5i8ebPcqSXThMBERUY2nBZdBxKggunj47UTHbgXjEanfuR2gjnNnQReQ9GoMeVAnL6Lfh8n9iFbG962SZiPfbZ9Q",
  "key29": "3LjnK2cWw9iJcasE4nVADBhgbAc9M1s6wK7iKV8KqLeK8sdCykeKpTefLjhano14ztuv1sG43vbBgbw8o8hEDe6U",
  "key30": "3FGbo1ddGofyfEBecE2Px2Z3LLzkomXmchyNYwUMp1Adxsc5fTHZbmsGcHCVG5ohdyWEpmfCP3y99bfmY8kG6Lrg"
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
