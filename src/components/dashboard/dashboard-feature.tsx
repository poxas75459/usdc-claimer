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
    "VmjB84gjy8MNuCSF9RZhpv8XYkKQJJc3qVCtQxbqGd5zVsPUc3s4kzU9Wc5JDpC5jrhhc9AGCgiWCZ9gtNUKYKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UV8oWAXQXB8PRnkgDN8zF8RZz8euJpCQpHVeoHxy3k3nUATqfjAXstWBRbjYB7vmMeyCwtHW3R7kHRwyqucWj9b",
  "key1": "5NKVCdRNjbPBuR5oomuV6EmnZv6xweEAuUjrZ9T6GgtoET1SyRFenpLMTiguE4bd8oS3LhWHPFYMdnPRYbQ6xxNs",
  "key2": "56YRK6bejTPP7XE9ovVZ8bUBEowHBsqayQxjt37qvRRPirmjuqtUupn9CCtiaxwX3PBwygFvHc3REquQ1rWE4ENL",
  "key3": "3rGEh2L21myDz1R8euW37cAjpZsK8ohfip72b4Zk7WSzXFhbUp2J97wB62Fwa9WkihggKFtrwPzbhqFheVAirrDW",
  "key4": "5sgoRpXH6War28h7w5eAqgYi4M1wbixnDxd1AYN5AdzUpwBCMyDBmZjgBVmRAu4VA3UfdXjNmxFXgU4Ckpu6Ve8p",
  "key5": "2YBQddcREWzb8gt9ggaNiTjKXFiw8divPuVkAQHHQae3ntcBPBd5dUWNzHeQzZtjPQki9S286pDpTZCGrCj5QtdV",
  "key6": "3jbSEgvqqdnmj6dc6847js7P8EiLbyyrTWWiWgXSRjeUPs3vrZbNWUemaGQBdRcsVeXcUVY65cKJzBrRLv4uJdAF",
  "key7": "5N3S2x9QuVArBfRgh8RURp3RqL1PrLRYk7QzkZaMThDeWWRLGfsQ1REd2FzVx7AR98bGxMmoneXhiG9yX3GUJNjJ",
  "key8": "3zSJAhu16KWzmcA94QrzoTcQ5RnZv2o2CG9SCLeBvfLpdnsVor8vHutwvWbjkBkRTeCgoCW6ibVXm1CDAGryRtb8",
  "key9": "5LZdQt2qwVZHK41kUKhAHFXc2vFDLJqJ3MvYGT68wA7gaPyKhc3LgQaUAwVeMsMHQZBV9qyCNLpKoLTRL2bikXve",
  "key10": "21pezMZJfdw8hWHBkjfRGjcXwe1dzg84mJFuzpcUAy5wMe9ceqD3qfkPrj9JEkotyCy6AA1X2TVcmXuH1ie1bHha",
  "key11": "42BwntkqvwBsufdtLsWpQL39m4VHVLfwzF86TKNk72YDmHrXmhzuVuUKjm5T3KBpFRoLGvTR6UNDDfnfUW7SxY61",
  "key12": "5H63Md5T2a48vJiBzcK115XiunEd4UDF3WwbBkcKVeAcEZm3GQ1ZuZzf8ce6S9uPwLkY7s2m7kn3E3RSoX7eyeTH",
  "key13": "4eZTg829BbC4x4Qim6UpwQAnDkWwcenerjVNfRaB3YxGRyN9CEUQw6AJxCjRjoGSKHdLWoBMTvAjPbz8wdpEhFCm",
  "key14": "5daCgUL7aHq8z4muQGvEkUbF6hxbQFTSWZT6fGngk7ZNfDcNU7CwqgE6MpaWfRGqkQZDLxZuhhbAioTBzXJVt1vx",
  "key15": "3PdnXhzCuMeBF3eyFE5gghWuZqzt5GW7MuhoG7LGwJbKcv8D5HBJ1TzQ6bfyiY7ggZmFt2yk8ZGxLzJ7Ja4koDwy",
  "key16": "4NrrG4vdXtMvv1GksnozonHappQ9SGnYWLeb4Bvoh8f8VqVtb2RFGZ3FzvAZaTUurFugXPp5iQ8xqxaDCn4VAndB",
  "key17": "35EkxKxhMUBSJVyHGv4qqNrhvj8rSAZzDETLHhMD4FXNnCS96R1yC2egFWiAiiGRaZkABVg7qxNPJSrEVoovaeCr",
  "key18": "5s7UE3qw3zLNCZ4Y6RzddmcEiv9CbjCnBU6TPP38e1ueeUPpLZmzkhJRH6VDqNN7XBY3344GDGmhSBP1mVKDkxwh",
  "key19": "2BpVTzLoXp2xiCc89jzbnWoiKMc28LC8UBnhVYTtHnpqqW8grQtK65Bpf8SQbyZ38YtjSCSzhaM5YRuLjJQw66q2",
  "key20": "3PoGM39Xnzu3Rc9L6qwZPDCtejz5v9vtLFb5SVPgsVmBWgc2kPQLmHPN7DwMMw5EQGGTYqgLvN7ExVK7k2msVCXN",
  "key21": "49RNqowR9wZyWpX7BnVRGT6rik4cvUNJPWg22twSG6qp8Z1jbJjj17pp6dDDQ8chh6X7V3Xg7gxiXucwaNeTzTpj",
  "key22": "5JNoQVAxkVf6RgaZDBBfx4wEqv5LJxCBdKQy6MdbnWWX2S6u8RPwXG58psEv3D6Eh83odH6vuF2viiWnSCyGdeZ3",
  "key23": "4VAtWeXgmSaY8kZxp3zHXiAmLdidwKJhJKafiR6rRLnYC57ZvW3bM8ABz3gfjEKTZAxposjLDYdPdmthUQY8fnT1",
  "key24": "2RgY2hKj2n9T82nxEzauUY4WBDPkdups4JYdMBN6Hhe27faLTGFwPQzA2MmHfHUpytMJS6di6cuaft2wFr7MkJjs",
  "key25": "2EcN276VwmZgcsSZG2Tf36UkD3w4yCJp3zsQS1fco6SXvtDyYgy7uPiLqft7TAUGwkGza7JwW9dM5SjwFYQ9wX6p",
  "key26": "4uj6Q7U6KMvNExtJGsTYt13kZUeCrnZmXNCTWk3c5UUVAKh2CKDQqYygfj7Pe3Zct4rG41m8QHtAAZBGk7dS4NxZ",
  "key27": "3iGD8JWNnVdoUdnwbRP9XU6HvHdifdqWr1NTwqQr2VDDFU2BdJtNNSU8o94GR6RLHXY6MpaE3csVR9Rt6FYznAY5",
  "key28": "2iZBAL9aaxuAntjCVXfsusnVo27uoCFyFcbf3c4jqunKoJPFqjsUSGB518XN4hKRVr73Bo2Qr9raTFGHs2y8mvia",
  "key29": "3gdU7aHKroVcbXrwrvXy7U9NQ158PF5vuzXE49GQwcaZon5ACBd2PfGCkrf2JY1kWe4QcPH5Ae6r1b8Xwj5AgkQT",
  "key30": "2ePwyJezJv2tEE4o7Tfj7GzX1F68eMZPrV8jahUmJGjVcwgfNzBDyK75poBZk43heW4o4XPGG5UieYUxHteYHeEV",
  "key31": "2prmcann3oEpWL866p5paJ31FjqKb1D1WZXtSwyJzyvro2ub8YyQGriN8PKXyfZPHjYtLnH44T9Fr2jf1Qudm6P4",
  "key32": "3iSTUPrdSiYU9WVBzrREjBNEDgjZUxqkJU2osUUaxVtwQ5KPVA8GRETcmnWVrA6qf1aQ4dkd3Z53TX9THBgintAZ",
  "key33": "2tL2xWYfXxRdniDc9EZuLYU43RAC6Hwd3RNJTwMMtaZXzh5HRBxxexjN4XfjZDKKMR1i6RdGFQQMB8MPRerwek6F",
  "key34": "2JKDibnY6E75F4knGk8Ca7QcQT2B9GBYTxbAWVDsahqx2dtK3nBreDDC4uh3aoDqmY3diXNULexXCVtr3THKq7i7",
  "key35": "4aRsP2paz2cbKRvCyTKU6iRY7K4vgzKhFubXWCt2zM8diFHsNJZWqq1M1BQgK58abBDevZtQy4tSKtK2uuDwAitG",
  "key36": "4TMiGdTK2QyERzjb32z3Mqw356HoZvXutPNfoFYi4Tm2w5fLEHqgWCL9d9DbjhNVJq2u3M6WLE6x63FjkQh2tpnT",
  "key37": "3yDQB1pvVVjFjyD7kKP3z1NNsN5mvLRCjJKFf4ej1RRWh5UzZUkHuKqgPNuHWiYQjV9pwm7Ayz2vvHf6K47SWM1Y",
  "key38": "22StFLvTAFZNE7RtzRUKTrx8T2t9VYTU6j8hVDkXGZ1nNwaLneEESPa2X7C7s4haWHaXdvPd3Ysfi4hb4hLaHVb8",
  "key39": "3VacchfmM6UuKRevakJ852oTCXwbbHHqvMNKdvSnKrVGyvLkAEsWt96Gm8W8RA6BrVmNjJnrYXqTXn8TjfzSUKN7",
  "key40": "3cEgYq9xfEa26YQL4FgWX2X6vURJrqCjEQAB9T1fyyd9mWyzwVPJWXiBPATrdpyKUKv6yYndzK2acuLX4X2DFNjK",
  "key41": "4DqXPbJbjGokKpb1ZRqnbx2XipAnrtrD4M9vjYc4Gm3YVxC7kgyaBARsGbmcgL6qbYH7g8JKcmAAtzeoQAYDurfi",
  "key42": "355BonkpTuZfJcyUMY4eGKQvSMo3FmNBDqYJC4SVYEa32AehZDrb6wmPzriKCMrkGhY72aqkeoVHh5ouZCxUb2rT",
  "key43": "46ayzf7KqaJRDgXsTa5Yk3MFbmpRCKN8TE42VjwhbrQwpVMu3XcP5gxRzeJYtkRcLQwm2KUUm2Gu8RZgWdcjYuhB",
  "key44": "FPLJTXYeDLUJMwVfPmtWd4QmrGzBkxRhmT3az7VvYLQ2tJAXfarDwYYR8Jh8zzhfrTiJF9HRACnQMWn2Ebi9FEH",
  "key45": "2JGgFkQa2JaHqRzKZVExQoXwZtD2uhezAcGFdGqQXrQVLhX4HxSV38RdZrhCKykiK1DM3UeBkmocRLnAMPbA1Mj5",
  "key46": "5N32FRfxNC2JVD1X29RAVb34fdZBaNxSkPF34JjiE3qGp4AKZA1HnAYgoKnoT2g1jFjU1YtR1FxMXFhkoq7a9155"
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
