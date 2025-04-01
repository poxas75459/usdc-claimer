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
    "5awutV9G6xUaE8cYvQnbYFXvwCCJ9AKzD6SK5TWwskaVEsG79RTjkExwrgyuykK4ZanPfsqhSFjVLddkgYmS5dmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R92KAVU7Nms9muSkKWSiTqNmXjfX4T7CdqbEEJJy8sQ7EwpKdJtp76hrYN12P9nsjJxKrUVZ2sRewo3X25Ssz1e",
  "key1": "3BE5Z4sEdGa2oKCHRNYj3tSPwFfJbVNUaU5hTdLPDZxQgK2kw5V2qPhYogDjXmfA6udt1YB5tGp2Ds3Sac2aYJNE",
  "key2": "2zmRHsAHaytQ6yfTokqheEPbvsSCmQfVmREtGV6q7zcBGFvc3rd7gXom7rKoibV1kPUeo2yvuSV9k5aZ8V6ERVJi",
  "key3": "5vvX1QbjmTAsy1SwctFfCTxXShWFZ8NHivQmZ8kAH7FHrnuxFUzF1yqn5trA2rDEq5zmEpF3UcubaQibwGzkt9Kb",
  "key4": "3mH9zkSDbq8M3wBBoqXRBtWVTSmZJkLbFZyedPg1D38eXL4ZAhaTbnF6CdTH7vwnXLFjtmbh98hvMjpbXM48MfQH",
  "key5": "jeEcdcQqv87AYqot1i93W6NHQxtw36s4An3PCn7eHH1YwNYUgrMCdgyj9gLtDq5NxPTFSA4jZDQqDb8mp69WYFC",
  "key6": "4VE2TJaMjTiYRYCJysfqDSxLye3TL22VZ6Xa6GuRSmA7sYqw1pvodaQyMR2y75meRpED54rhaYqq3TpxKZHNYxYc",
  "key7": "2uwL752Tzrv2Fa864xfUhf7zntM12fPVgksbcXZafjNTcegK6UxvYJ2FWAaUeAwxRm3wrj3LDmmkiykDraRSdmdx",
  "key8": "KZT3n1FYz2LEwKNgQvVfSvVtBxpLLp19nxmsNR1orUx6cReSHP6K54erin8TDLM4S3zjv2st8RNKVyAhRWxzetM",
  "key9": "99SFdhgb6jfiax4s5NdLQiqUTyboWNan7BFhy1ydTSkpyy75o79Jz6XGvZRWV9oDywACk7Kiz49tmH32S7junis",
  "key10": "4pNEyzGo1BtmCWFupm8n1aj8EYhh2ud58xz33UoKYFBZ6EZDWoJkhRh6FWND9dSSu6cEKM8V9jHQubEmtiuB7akX",
  "key11": "4HprZJSq7Zy7UGgF6GyQbt1NAcVjcnphsBqmXbidQGZVhGVgXzLowxBHNwWc83bihsYZxJw1o4kxfThY4n3AckpJ",
  "key12": "HBrn4EhVpBHRXZT8vWRBN2heHiNATqcFWu5pR9FhHBnmQ6T1PVWHLekwaEyWekB2m3LvtKZHMJJQNuqtYyFCmc7",
  "key13": "4Hofvugm7SjUBjhktKaXp1NPBqUVffAcNgy5n3SPqBSxT5W9GiDKmUc5SA8JJcBe5UMBN9VvvpNvaY36rq8zYugC",
  "key14": "5jZrhJiQUXKrSwF2WmyAJq8HtjKrCUpJ7G97sKC9ZS1ZVebVDWWaiXpHQZAoiLtUCrSNvsnfVFP9bm98JzwfBZ5w",
  "key15": "5m9x1KALkdnvvDxAsFtAL1zpFL8NG5NTsFD1PU6FJc62LP9S28vrPDxmLjbvpNEa1Y6xuH1vkQZUS7ReHBgXohXh",
  "key16": "41yB5hFpMRLMweUzcpWxAYoFbyyXjJr8tBvJzDjNPiCqCKDZczR1J5bza3GPkQZkrqk4rhA618wWkzyEMiQgB54T",
  "key17": "4QpbR8yN8pSMdataM2a99XqDatpu3wY683Dj31VVF1H8E5sToMC8FBPhfwZaVMfyxnrnTaq13cQSTtZ9uuyXr8jA",
  "key18": "2TSQUrwuiKNv62ydDePZAThTR2hrYTh68SYdw3bCVKTF47iq61gpx4fY4veP2PQ8UBp9kPAMkLAB7ZZVMvwETd86",
  "key19": "4xA2CckcPkwfR99AWAez3oMYjB5JLDoN6Q6zA2CfS2U2svKT4nj9SLyfyUrySTv6baPbo6pzNynnicx6era1Pr7M",
  "key20": "5uuZx4WgRLgDZXYjDyTZac58GHHsuFrgRhW41YAQYQbc24esJL7shTmYRsvk9PEYSfub5yW5BxJsXw1jsZn171sv",
  "key21": "5RFxnCgczSuQjtchM8yYuPNTeCnK5d34uay4cBCW9iirTk2yDnEV1Cb1xzgD2pZqiUSarkCQXL7j7QjsP1TL994Y",
  "key22": "4RVhJLYF4zpfN8tadMtSiADwpXnfdyUrxvaGRKmnEbLEmsvRt3JXvmueBgYHphprxneiorDKZgeYPEW7B2tRKUpq",
  "key23": "5Ftgru6vaWmkVmD8A5Xrs4ZVvbhoFyhgbN5nYAQZiPae2Qew6nkSqDphm3AfCjxqRZHLaFjCyMq5WkxYwTAkts2m",
  "key24": "52UHzhmSxMBj7NC6fRKyoBE9xGfBx7g78biuTHYkfdLxHLdQJvQK8ZvSnxNgfiHuF4VXNw3tSngA7wGtmN97QuGQ",
  "key25": "ZtFCcDuhaxmC6a8C1fAcDGxEwqMPxh2fRjrz3ckYbdupthZVsUq8sAmAYy9jeGTqpnNAtLdywk9r7eLzbU2QomH",
  "key26": "2XqHTkzLRn1XMbBqy1gKEucoaXR6HTjV4ZnDgqPbgyEg6SopXXfKbhXvkPXoHzuM7vTGTr7x5PSBXnnd94Mx3Scx",
  "key27": "5D5vC13vfHNeCvzbq46zvw5obxv9gakBQ4EVypydg9PqHPHq9PdMVvDUZAKq3grb2uGtDvrzj9hZqgXUYs5Bcjvb",
  "key28": "qNUZJExJDXCDVfXnDQWdJ6xh4XdDF5WsYQNMgqVtVYkfhndgEmcYjtdQ3uDWR8W8hmWi9HC7LDZshaBMoGM4Coa",
  "key29": "2FiKt7goZ5qidzzJbcR9P6cb59oDHiPbDbdxxbyzxesRbfGzctf9GYknfW8J13wyXatzQnxyLQfURzTNfoaUQDhE",
  "key30": "5DWv8zNDLeNybct6UPVD1PL4MH4LroQ62UZGCyRFV1rs1V5YdV77vLuXFE4vUn1WfFkUT2R3fxmU4MMchvJNEX6y",
  "key31": "fSCAPsj4v2HaQ1XwbYr1gXgRygCjorg6zGMbfx5d2D5k8hhXwGbbb9YEJ4Zog5qcxMMvhW3xUPiiv18Lp2j2cqe",
  "key32": "4hAoMGxNUe6jZ2GVkxJCo6QCxLcko2tvrx7YoVXdwqkAbcUveJwE5vPGe5yzdWFEknBDguiJ7mzs4fiG6pykiTQV",
  "key33": "4xrTjEgg6et5VP2o3EeAHBxWmfssTyXWkKJ5cFiEgtJCEr7Urxm44Kdwam3x1DR7ktSmHVSsRD8R21b6bxDTm8MD"
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
