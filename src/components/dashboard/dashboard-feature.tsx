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
    "k2CWmw1dGvnEz2fy7FhWabr18PHCPmaF11xExaTXMhifTPGj4a2eEivf9Pk4USJGJNfPwk4gujGYvKHfx9onKwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3McbvBCeaQM2NSyk6AdQT2zQRdvVBzDPL1nJ6KPYMsj4MzRCE1RazCoxrhEJs279cZZ9zNkx3mrtWyuTr5Z2jGKi",
  "key1": "3ipaEQ8KdKjRiimTVYby9moiB6MnJKyiyC59eSWmRLYm1qkQAUcos9PPLyhxsvM7HENikEsNfn8KRyMQXJro6RcB",
  "key2": "b2ubqT3UMK5pAfUPRQUYQ5jyTABtaRPbsbXVkUbSuPQcRxdE342asaS3NBSVvTkXXNJJtR4xbp96FzB8MpYq11g",
  "key3": "dUgCi2TUFCw7kc5w8Zu2sD3zkKCArXxvmVDtarLcKn5owkbBtcSNwiKwAVJYHCr2EpZ8RYWux8m1cAoQ4snRqBS",
  "key4": "3vHYHZQ3QNHavN3c521Zf2ZqETSEFYokzQo2LF9Ks6F4ZdYbpJaogaZUuahsgrGsxrLi9NCVM6nAZ28vK196XgF6",
  "key5": "5nNH61o8TtgACmL69MJFQPRFZxJiF898qoefawcFCHLP5quAZsvKcMiPNWQDnd4DWazBGnri8KTzzFZrma61Y4fu",
  "key6": "5x3MxoJWCbj71wJ7bZCWbH8QZBQ5e4y6ivZW7gDaBaACf7HcQHbipCS44K5RRRMUK3mZbW1DbGx64vdMcvUizprj",
  "key7": "4BawcdsQP3aDgDAZRu31sZUSiLxWDvs159NZsYp1gsz3mR66KRYd2FvEv3pWthrqMAVroRJcChn7d6scxEYDU4MC",
  "key8": "3CYpyVpAAtE4LAMrsyrTaf7Dbo5ZTEoAUegW4KeNHMrjfD9ohDi9U1fpPw9Vkpi2kLZhVSUCf29uaD1t1oKyqch7",
  "key9": "4wLbMA2SE3GNH2AC1JpHbcvW6P2Pg5rc8TT8Aov6F2qXt88B8ckRTKhEc8pzmYXvVcVK1cHbyuUWu2gxSBjY76H3",
  "key10": "f2aPa2G3kHAHWcdPefJbvv3Khci6KVF3vZiYCNhJz9L5LvjgPs5R2KriNQQK6vCvEJNfwcsgsYCZEm1aHuoJbFV",
  "key11": "EFsxNGXmjJNGuy1KuU4CC1FY4przmWau12ynUfbJjFGfJ5HU4BCunRyvumdrS6MyRTnpJBiAsdgTJNrGJekUgQ4",
  "key12": "23nX5j25cwiyD22ZN2bLwA85SSm7rUSoJx62t4GcNZPWYMLJW2RkdWshAhkLqaNR5fBX7mTCtPhU8XbwqDKgYgK5",
  "key13": "5UvXed3cJzfTq4ay5zwvjxKFRMWJ33rZdsQt7Xi8y2WvoWfz92cHie3Kf5vQTbPV5onUWJcdiJU84hGc84VtR3BQ",
  "key14": "3Px7wayrbXpes2bsBFcGUY4X5FUqKqwQtuMVzN71m6E9U8WJn2zSASWx1XJF4h738eZJHkKFH9vaenb4kbQVwMG6",
  "key15": "t2iDvtpPLSzMGtLjgLTCdBFFUmf1E4ZvW8633pXpQWuAYiccSPRByEugQTFcBMAQQ437XicZSQLS1JCY3dkheZx",
  "key16": "4CtuQ3qVFMDT1r7ttna6tzoeavtjEFuynVfDWkuBXi84hTFexM9U66JK8rwodi6KB1eLteahAtDTyZm34NAwkUxi",
  "key17": "5BTfFaLZLKbaLXKHghyP1bJECdjCnnwqyeEU8N1qdmx4GCz2UURvq6KXFRbWuHWYGhaBGGTht1YaPr5Rzqpz9ksK",
  "key18": "Qr4EZa3ev94iwcRfCXtMKewjSggiWyRRHM71KQcyzWYyvMz47iQme7MB1aWdEisYTQ5AspoFk6ihuzromWQXd4a",
  "key19": "4tj6Fd1pboD5zoQTCMX926Ju4ZKh81yy4euzy9Nj2938wF28UbkKoDXcR6GuRjkw1diVJcbZqnLK5e1Zm6V7jc7D",
  "key20": "5N2E1z8VfTczAb44mQQJPnmx1NYgWhM18S4fFmYLBzsc7wxaiCnQJwB3TG3MJdJZeg59j2A19Xy8QrjuwsggYtMW",
  "key21": "4UJ5aHsJG3VK8gv37UE1SszxadNEwZGwSQFpnLV3tBs1MDwFzdVM19qbevTqm1X7zgV5jeGiX3k3q8harZPnHdZf",
  "key22": "BaFfk78mPQ5sUxnck2xQFzA8sSqgeZm9mXcqzcZLcbdztQSWdkmCHqJ14VeTfadxWMk7BnB8U4MFiW2bcU92nyX",
  "key23": "5NqtJDhTeuCWbsRheKUxDpCQ8ZUumwYH2CxakHpgCJNe3f52LASd4JLdxzfHKeQMCsfRs9brdgoebo12FXdJWkr9",
  "key24": "5DN89AmbgorwNb61xn7xnzeZG3xQbbh4RNoiE9tQk4a7NE3s95oK86L5QeDWsVtc5tz69utWgGLfbdxbyjaRyqJE",
  "key25": "3TVPbnFrsRMHEcBUGYLt2XcWgtsC9c99hrmqiJZ4RuR5u31DWw6m15XZk23tkyXRR2wKmFCSvkszxXtou9pTxpio",
  "key26": "2YnFUeRU9WxpPiA1aP8yTLaSLCvxMrr9LZJpJpxn4fwKpRQyRz6MtCHLpptDL6nCFuMAXUA7vWJUtNRoczSArowz",
  "key27": "VeEEfq2sM1Sg2bLvHov14sG6gSd2uYW6MAWdoDiGsZpb9wJvTyGqvE4gRmCbjAfgoENLkEpeaifn2eurXdKSVSG",
  "key28": "2ujz4V7KLEx39qsxX8JsbfrkrjqugGUPduiFBVghKLAAALJSuuAkfNTkyEqnNuEEospEpewmQfAuaviNoK9tf7sM",
  "key29": "2jkVrTZVqfhhNuNHKK2SLy19cXU2btsKrmuhG5uVWCuobDhaqTCDqveF3AZpjWGT1AzQpD9gWV5bYssAwqvPuWBj",
  "key30": "2oXasMjNB8MPm2x4aZ5tVVYx2PCrAmVVAMAsc4zMawKrwkJJDoVkx7MAeKy5Hq7cPnvL7L2cCAEBQLsXyc6sLgiQ",
  "key31": "2wKSGT2kprbXLzyiA1gGAv8XvRd9UEmnvDYLmKScW7LitZBFii1W3uRqm2fBtgmGjqY5tWfCBhxKfqbxCnd1gibg",
  "key32": "5hFLMXyVt1xnyVqptRKohBZKM3bjv1XvREUkHqMRPFzocQjbimHPUmmXMmi4PvRBBEjNqKzwnfDEnLr6o8CAEB9r",
  "key33": "5zTb4GgfvFVfFJdtLbwNB2GhnRr7gyZiS2oU8j7Be5C1MyfUzMd8VpGvSRVYUpfwUFEwR9JHWXTk3yMsjthfm7jZ",
  "key34": "2w39H3yqijDoWoi5ug6s7mGyKYkcmSAdHn54qKx4w8MXZdSz4tFeHsMywaF9axRhcEGj6ZH723jn3HCGoB7jAu2m",
  "key35": "31swUY6phAMuqktCAuDcQ9srWeHmHgCeK38QAii3qiaMjK5Ev4esHdwqnAhjdR9vpAJ5UwGM7tWENo5AUa9spVMK",
  "key36": "24U6Ngi8UqQYYAKr5Ty2Vzfm3DkK1pD7dd3wLsBrpNpQxxJGjiEaEPExKbxs1Pi6YrcDETwrAJMV5ZjsNw1qDBAV",
  "key37": "4W196ohyqsuX2svJipDLKxDjw7cE8GCUFJF4MywsFRwc4NGvRscQxf8D1f1sGupn4VAfiJKbv4EtaW733DVqkWzG",
  "key38": "5QKfTu8diWZCBPLgq7QjSAkvdWh5cjJjSN85WuYrWmuVzWTCxRx8MfsxdWEzKCjQtbcnGFaXxhVvhpUukzu2J5LD",
  "key39": "37nt9tLxGcz4Fxemfh4ipZjbf8NdycAutecxUvaSxDChV3hT7nJrzbFzNWRnK1dGUUrYC6dGBd5jzt9oR6hwxKgt",
  "key40": "2cqQ1vxUE9jP7pWmnXpKjpDNRkJVegxkTjUDZGVXQNJ1bmXcqxWPKMGqvrsp6MgrUvB6YFAHmHVKANKvcepeU3Vw",
  "key41": "4HvDXLZBw3daUKvnt7UW5y4NdtvMWYP9YBazfN1qrx52g4SpjVDEcjf3ZTgmAMsZDeKbZsQ3P1kGwFHULE3CXeYy"
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
