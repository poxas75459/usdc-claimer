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
    "SohV7P6zJm3iUSZiXydb65nAvK456Q7uzd1vW3Tfpxxh1SDMjPJVtSXi3EH9dD7jnwFre7BrBANvUww8HirGEoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EHxRwDYRqrwExgiYAxawZCXzAk9YWF7q5Ma7CsNQWSf5cByZeutRS2f3JoagWQLdB728FJgtrJScZT7T5A2XJ3U",
  "key1": "3HpTeJ5t8N4Dhqs5rBQnJVCNKmba2eKBpk1VYieZntzZrbqhf3H2P9BYfhYWfsUjv7cVEQTzF1hxofXDXgR5S4LX",
  "key2": "28txwF2ik5xippQqyAY79GbkN6hyMWgpGfdLnrbXEVvsizEZVHTLzH6yvYpgLsmkkN64KfZPjWmh2ujHFcAesBbF",
  "key3": "2JSQBYnPTcLseaZXoSYYsP321XsCjP1McCVdBedXtbidgAHZTHpPgoY4GeM4JgrPKwi8QzTNxZXWVZJKFhb1H1P4",
  "key4": "2E5xUJv1eiKx6N96Li4kVpk2v8QvsNa4dVC9xSQVXyBES5LyMxScEJTohxaAD91Wxp1Grznvb8h4tqiUTPXfRi2g",
  "key5": "F1K2mtyxYxVNQ4xEmrtP253MipUeiKnDLgknT1atEuUW1Ft6BPBuWtNQ4ZyaLK8ej46AbzZEEjL9iwceirwt8X7",
  "key6": "5bLh9FcEUiU4dLruLqvVNzBFLp32ztnxncyxHexcLDRTmi3xncrXAwd7ZXHGFxnhT7StVvhN6i8MgbA76Z8C8rLt",
  "key7": "397noZWS9uJ7qEvWFM3mLMrrcSugHZvbhSjw5phzX3TzBJK2pv8DkWdkvWELcwb2ZaH4KdW3rrj3ZtCs2EBjaqFd",
  "key8": "2SJtLDKMHBYrdAAhw9Ljgt8dAAHGin6HBnbZCLWLkWGRBnADBGtiqr1b1Xh2DRTTmrdUGp2Frn6Eiyjjs26xg2df",
  "key9": "5Gt8vRBCdgrLt3Rtse2gAAzStb3B8QTMN7LGKv3FwWYEmqoNGb1QSRW1ZThBWUkGBmw93saVHjtHWXfhnqhSqSy6",
  "key10": "SzU6pTL93sPj2Rn7xP28DqUpKDkG1jwLCwS9w5tWjb3NcBBRTPCxm9Gr4ZYRYWnM6EM6jotoLGv1LwqGRy7Vqim",
  "key11": "bsaYbqWCcaTjvZdzkyjWYj9ACk2DU4a8XR7Kj1JXjp5fCGGzbLf6bijHCL2fnNGnU4jWkwomkcShLXgE9L6ENos",
  "key12": "4LeGLrDh1ZKeM2pyfvzVrG9fU8FGGdWVUp87dY73fL7vR2SC9F7yaUr193RPAuqix6imsjE97HhJ45LN5k1mdXDS",
  "key13": "3xH26MFcHyWZof3kB9Wqkr52DrLK8dXpbGWQB4Fgew6gSmcttVBAqiqf5MUCafHjP41p6wkMsNWEZ25Z9uaNVjeo",
  "key14": "5uuRbW6XVPBjyGJZuJWtW5A6vD4hZvAztGYiQBEBUYfhxMhgEN6gMnwSRB1BDSoAkFwuFp5KveTAautdzNNviWn3",
  "key15": "5f64a6KvrXTefBDewsM8yPq9JeC8h8RcfgY8s6vF8gWC6oBSfDYMxiGTP3XuKxgUZWxE6yJqCYy7SzWAz7CeEczr",
  "key16": "2Xk8fRrhWn3WGuF7z7h8N5C4iTg66aj3ukt4L14LZ6vnxscKocswEGR443ZpvJm3AMBn6yHfD9icr4nExZZUp89F",
  "key17": "4wrTi834eBixPc6CnXdDcCjVMUS1pdc8fW3Pm7qjvaKJvrVZZbZEjKw4K6NGzPNwMkUfRPJobd1BjTZis7DRCF3D",
  "key18": "39NGzZ4Foqer4UgbCbSkCiWF5Lma6hwkKhLR2LTKEbZEkYSFDWvRA4izW6cP18NiRdAyGVL86B5Tzs6BSyPe1yC4",
  "key19": "5T13E9kMP8DT2G2HVrx6jQAmJxMaGnwz5b2j6VSMHumNmLzQverqK5oQ6mi6bbmeEeCbL3sn4KZ117wMjpF9WRbX",
  "key20": "4crEVn2DYao4ALti7S6HE1NVb6H4csa6q3ZycG3nHzgtPwrRcBfYKYMdYHz4D6HX7AF9Jt7Gh5eCfjYUKHiSBDam",
  "key21": "HSXtdW37SShucjr3f8estX4YnWCSyRs1HCQShpz24XLpsg8Ydif97BAeWkLohdkb9DKHzYhZ6Rm59pC9XZbg7dL",
  "key22": "364qA4pSSgXasja2cWQTT4LmRETC61u5xmt3xzJFbtRcrCP8fD2ab4xJ38dXLV2iKTpbngFNxvgYsoY1UL3SvCjX",
  "key23": "289vTuHtX5JWzrvq23FfwFRRTUuFjEKARysr6Jo4hAm5We5MbyWK3h2AmTurPkfuyGnmmaeWLX24wVCapf8WMcvQ",
  "key24": "4nmFGoZ4pP9abtKLrUy7g2BynkXdzRJ53uqeY6dFbZ8u8mzkpon2a138nrfQ5y974k48UCZ4fowaVJABrXBxMbAU",
  "key25": "2nm1KRpB6aqsxRXcgefW6e7PZHPnNEdTLE7i3Behqqx1G8dbRVDMA8ix9oXKiu4obf5BTUx6bw1YrN9ds1YyFyNt",
  "key26": "3nm9i2GY9fPhuhvziZpk7hQcFq1TqUSKuyguGcxD8iHsRAX9XHNfz5CgGrTaZ48fkpJTZkduo7ups6Yeyk6Rs7h6",
  "key27": "q9P7AjQHP1NQV8Te8GnbtbJroCELzU8izgtFeDYXhn3TocBQPyxS3hSTcD2FEoQceGFqUsm8jGqCnwqhuwonAFY",
  "key28": "5rgkk2N4D5E8en2GTC7TJtdmH1Asx4KrjJ8BWWf8YEYgVBFYfD4TfyrivegXiAUYZ5PMDas22mZV3X2EJxiDUr5u",
  "key29": "49RyJM1cErWa2sffHZZC2eQPdBp8yK7P5wj7G1FPNoZPem3fthsQFRCDHUY2YeHvRJJYGoeHwxRkY7rzPHc1qdMt",
  "key30": "3Kc9V1nP4iZpnq46MbqKrYDD1yqHPd5JwE3TERDU5hyvjud9XdJcacH6MHwWGzGLAWL5k8rTEbywDAzHPUiwQN4D",
  "key31": "5xn7LhGY2UR8bBYaXMF8W9Jxt1jY4SxzZCDbVoyVFtGrzuxrnyVnUVxGU8c89ErPhTWcFDZAuJLvxfLbPYUCyQKH",
  "key32": "47GENtqYmMNzVxFU4g2Gausn28kRJarkGmjKXqpC3D3wcGC3m19FA7mBbrWTShwiKTgPtTQcbZbZjZa69TxVCJd3",
  "key33": "5Wtb8dVLo3u2kYzeh59Dpm6zrXXyje9mQSvhwsyo9Puxp926KcFQCVCAwdTCXWB2wYhfTbj6eNL3gmGQ4MrfwbFS",
  "key34": "5yabCWsmtpe5iR1BwaCPuU9a24nAwaU5hptzMxwuHBQbAYF1ZpLhuixiRHaGch7b5AL1k6DjShHPt4V7Y1ZXwSQ8",
  "key35": "5jo6q3farKZDc8UUMnMaMbF1y6qM2TUfG35JK5GPtZEht6taXqWuy2Nt4SVmin3TyatX6FHRgXUGG2zKsmn8Ex8H",
  "key36": "27nVeqQKBnNjqAJyVjr192duhVo6PE8t39UckFwzzkfz7zDRFqDpgozkVncDRMmRHtdEfHDPwgPujcUxH1jrQNXV",
  "key37": "2n6tFPbgSf4t7gqMaM5xyadF2XJLcXPQSYkfGqVPTdaaZkdthCSQgLYxidYPMpbHG4qj2EissoeNGhQvqf4quWSJ",
  "key38": "2o1khJL3TAfMg4CnK8m27a999wpNFiVgno6HfE56q5diMajSYSXpwevxcykwixJCkbP26sEtwmbguwbVSRYbUDmn",
  "key39": "52eDUCTmV2xLozpL52PUQbbaTf7i3DVHaXSnM1TbL6f116jftLeQdUQWhwFjcTmCZ77HDCPUUVnu2osfeiEiZsG2",
  "key40": "4vne79pr7LaKBA8jm3yuJrBx1frfTpihrDreaVmXcR5gAHNva3BKB3VmeAkTNbcsY3XoSnGL9ovLphssti85ZLAc",
  "key41": "4U8m3haAGcmWVcX9yib7KF1xHUKLwU2g4fLupyuUDZBZopxx5k5uGErRDbc7etZpUJbYTBZ6QPVwqjLtqqBUrnJB",
  "key42": "2si6P4tPNsEAABFZzqvGRJ9u98VE1B8Ee1ZzJiueeoQHRpvGtMpezYu9Bvb5axVVS1F1QYTt4VjzK8sGYu59JAfc",
  "key43": "5cUWjK9C5B4pTdMh71jpxJfBKZ5Bud1ezWRMqUqPwduKnyYfZRp85YUVx6aVzmG97tW8C79Vz1UmSFuARV6Fzu6x",
  "key44": "3JBDPXBnV6LatTocvjLkxF6vKrwNwkxFZXQnpZFc5GJvtJjbt6DSB9U1y3w29btnESW85Y9FJ88u2ZoG5mSHBrEz",
  "key45": "5qbfzi9eBJwFJSJ6fp2CMGSsQ8Aw1fZWHMrXqHbEPB6WUcgHxaSQG4YfS9jpQox88ucunHykfwA7VFHstjVhPkNX"
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
