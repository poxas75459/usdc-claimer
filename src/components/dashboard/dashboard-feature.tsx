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
    "VSTyu4Uq6HidZ3e7rkRhPkHWZFTYf1FcscDQDkhR65rAJMkJCFDYWXS3YjQQrPiujcysmTsuTfdAhjG8BUT2P1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66jZEA2J3G8xSEVFf2ptd5uihv59upmzBnYHDtLET79fHJVvRDkBsm98tqotcZcS7GNbsiSwhHSmz3KQbs4TKowW",
  "key1": "5AE2msRVYUq9mSFveQMszdRgpnDyDAgUY1eYBZjCQpTwPCP3H2HntVttrfDAT9gHKxZRjnbN7tKuWnQMwUgL585f",
  "key2": "2h57Sxbe3U29mDveqvsqYU8oKhm51xtwKb4eyCAb94u3aavYFwQKi9bKQRdnpSUdkQT2vMfCVW9UoS7R2aBY3YA7",
  "key3": "4oJh2Bnja97GHDAfSULzXdeq7CxgsjfZeYLTk3ub28z4TBTgFHhMra1vW7CVutbthmUega1NWbLxPPXGUH3XwTUM",
  "key4": "2gi4PoRSnQsjQXAZuJu5wTkmQKCYdgaM7nSyvYK3fvTLoWgGZ5FPCtREwGttasLV31Pf3yfHkFk8EJ1NrZ5xCspx",
  "key5": "jQNPSCJR8Zj1gSAT9E8AtPRM9Dc1TDmQiY2mZyf6ZZWbB2Mm1EyuMsxcCJy7PjwekppY6SEFAXfSiaSwAyCcsub",
  "key6": "tcyWsC3XyLozSZtv73CoQ7nFnw6rbRJHuqoNdqVnhyAKZ78w72rHA9jsGQFSLxtbFy5YuapYvGLTV1pwdrHh57e",
  "key7": "2CszFJqYL8HYpz7tmk2e6UCDyNFixRqSsV5etekgDruuXnqkgLN6trpnZ9AM8vEpG9CmwnigsTkCS4q5qTLHSbqS",
  "key8": "xzjwge3weKPMcFjRg7nX9NLF8d5Qm6CiMaU8jzHHtpL9SMwLTJKsdVMjgf2Q8b6jVDVNn7NrKhbMJ1vyNfh4777",
  "key9": "jCtmYXXpvPdZjvTeMASWpQT35cDsYC71PvNxfbg5u3bvzV8L4jm5sd1bBMfCfwQRiZGfjTm7JsHakyX8peZ9C7E",
  "key10": "5xbAQL6Na9dQVgoX8yBwCMgURq7YqsKwD2oybtNPX9LZ7MrzV1vaF6E5X2iNMrCNnw2kxHYQN9LtzDAFVoVoSLwH",
  "key11": "4bSvsKYrK6zwVutHnNHo5d7WsQWP6aVBjJEDqhPtyR5HhYftmPGygCczHpMGdZJ6p1ZRf7imCLAkovJwGvxrqYyV",
  "key12": "3vkqdmd9xyGJfr8oiqnLFUJM43mwDormpq4VNQfbm9j2ihrAwJALDksM9AG9bHq4H5M5mFisox5crWtTb6PT6VsY",
  "key13": "4v1yU1x6oAaU6YcV6VSK2bGLkFrzzZCxpVWqo3yPGGCnYhvEKjmMGRzTntduLmX697fZNzcxNokNVnsUJ45aKPFf",
  "key14": "21qMtb8c6NEdG2uznRUGoK4XmpvvPxcXuBJhAWHG5sP3dEsvnaG95RmMwenKySBQhYwtig6vHC7zvmatQvxYkuZq",
  "key15": "5WU3uskf6CmgWZL3QR3QNAAkvuPhm8Ayb9frJCyqjWswb4ErhFjhPNFzW37jSLymoMrSzSnRaeHb83YgNnHET8vA",
  "key16": "2oii9JndeGSdwbYKp6VLLKBoUcNJVGrRUEHosdiqWQWoKYJGqd1wq3xCQxcWUWTbwQQdVF3dkiDdnMCNHE6tPz5h",
  "key17": "8fK9yDYv6APKmKX2AVEYVdbAgQa5E3fkQwTEuBmtwL5kHXQy1niGnS1oe7o3bcBkKQP1PwHXkVX13hYWZFz8pKm",
  "key18": "uRoyx4nDWWmGpJGAumaDZV4rsNaMVYSWXqg6KCqBv1sv9HMJrjmWxgG1f9vmcDvamf1wsUKcr7VVsgrxybA4QXQ",
  "key19": "2SpC4myERiKKpk9GU5ZqNBqQyP7XSeDdDRTBk7SSJr6Tpmgbu2e8dVAms8JZVKdEqKTti5vfsNebf72cg4bScmvm",
  "key20": "4PbreYi4rYsr5qnJ1QVGXw63mxnEe8AybKbpVt55dTEshZqFrFEd53mqTeU8nqH4uVxUygjiTiCMAckvd4WSGgrQ",
  "key21": "2Ttm8pLXM8TtNz6KnRTVMvTeQqnZR873HjmfxvDDHxa499WT5aqcFXJFofSjNmG21TyH8dQUYcP4j6Ea1DvLqzQD",
  "key22": "523ngJwQh8qPD9FBxqf62xEyfKCP3qWFTgfkYkCbi3dZS3FwY8RVyKgWAbent7CTLnTi4YCcJNg4rpkEFzPCtatG",
  "key23": "49wZQrvN1Yqo3YePxArDJygzvno6QoRThhy3Pvm4D5SodyCxfFs3yfPhx3xCvst7mE6yf7fBfcADTm6tEYwZb3Dk",
  "key24": "5qjT4g7yygsPhYqMPbdrDT7jF2RFSzy7C78n1fetRqnsLUdMc8dSTamWFwUF6P8P5UdyvQVmarSsgFsYbwkWoZE9",
  "key25": "36s3h5TRGoMLMkBbMpXTJa4HKrE987UMdXgVphfM6nenaAhkPBvreexxyGZDag1kychAXeWbk88rkBWgMWo9Xi5F",
  "key26": "4CcFihcNAMCRubx8sQA7rtapDrkuW4HsUGeA4S33sgjqUYtcenhzvN4fTVGMLBfRbGQi7sayEQ3qhK5eL162wLDj",
  "key27": "4mjhDAmrkANrgMD9MfurfecXC2hYzCP25H8J1juayh91ydfgh5Y6DyTFdETmGUT6TRKSupXNd8PvUDWUXTKHxYvp",
  "key28": "UABrpA7kug1zLZ5ciPZCbBBJzUw4SUasyDEnDFQP72C8kj6RaV7NXQ2pr2zbSQdAfb1UAHzjUWxze15k1SAKMUD",
  "key29": "5EBMuP5BfXbQnXUu4rC4jRQrqQqRvktpwRNJ9CtaM2Quy6qqYLLQp1q2orUu5BUwMym9KfMtrCrm6mmKb5qHz73R",
  "key30": "2ioJJX1nFfBDAQxyekCxv9C7sjbC61GXdQo9VXYJCDszNp31rZpiygMSStsmCuUz8PUGnVNGfMRRP9U48o8hFwhT",
  "key31": "3w79snFtFL7rGv6ytSZLXiMj9vG1hz5VpNUEozkcGcWngGHCPDSykFkwTDjq9HvQx7DUu1ZMvHt9TCsniXFn4cEy",
  "key32": "2FnaRpk2pYcC4Tv9yHZ5b3LWza6u26ZfNXVExVJWD7Y2jmuCSzgaWwiJLbjRf2hcMTZoP2YVtgWL7Qx6fnQUc7Lu",
  "key33": "33rA86vCP3v5xUmtjkKtv88mGwswa3k43DbKxTE5LQYshqaAYeEQrv2gJekHMkFCfhDF53zUVRgkYL1x5A2uCLiM",
  "key34": "2HVNfVsRm8MNemGvAQAJ9Y4491WBBpwgrhqC6Cai8AzJoXJzoh4Dr42ErFDao1aeR48vDL1Ag7dRuP3QxeNnTZX5",
  "key35": "2j8SeGubqG79LiU6L47DZpoBayDH9CiZeHJiXyJuPehYfYfiA9o2zVW7YMVjSYYmCbU96gb9kJ2imEPW2ebzf1pi",
  "key36": "4XAEuv52czUF7qx5dxpUb4psHfLUSoXnum4h86UEg7uaG8Run8bX7uVQJ3zH8ccYjeX7rjUgiGrEhhYu9jakZKjo",
  "key37": "RRE7dgUvKj8wAiQDfrpnosgzzf5BGgz3Mo17mnHHTRRZ5eEssLKZsj6QQnCNENToW8nEYu75HYg3ihXqqrydn7T",
  "key38": "4jrDRCjhQu7kHVWHUmZJKgGv6NPqtcpidQfyTKshcjPek9QYjdgofh4iS6BUKAbchgA1ao7CwVNExJjWgFGnK335",
  "key39": "55NCDFrTy8LzTAwn5W3TXQhL3NiKACopP2DbEic83i62eay5SVFhvXyoWLxdfuUhnf5G7LwkVJ1nVCNmxGwPf15o",
  "key40": "2hBgVDS9L8Msb7GZ6kng542DCKzahRdjvBRackbatpKsWXQvD7mMycimt8Hh7wk8FWF1QWJ7jNcZUiYswowB3GDN",
  "key41": "2U9MF6pV2YUaMpf1WFmvYmevTe5dh7EJ4eMktAUdm6s9BSKjt9UHNQH5yfCAocA3xMp86jNF3QVhuwGj5Zu1ifai",
  "key42": "2HBgSAQUvB9m8P6CSq7JkkzvyRprLdUjohbDj7AJVGThMT8hFiwN99LBBmJm3aJmRxVr7bx1dx6SHTThKZsUomAh",
  "key43": "a6R45pVk7XRmX64hNoMsVx6yVgytPpyvaTGKudsyH1EpXRzGTpKm7NwtKmyEuZVyMGBa8g8XHGz8s1JwXfDdnj9",
  "key44": "YRbpYoXWCaXdL6sS8t3SsuWak2vUrLQrkwYHoPQSotyUTXZwzWUeyFVKZzHaQ2zLdumqdVjXNveLjkF8vXT421y",
  "key45": "5LrBsffWLWBqc8ntNHbaLyzsK7rKDpGHmLB9oWoioRahCvrcZzSg4GYeoKqZaNqyqCkTbRpDyi1uX61QYh3R6zSq",
  "key46": "46YK4zS4etapexeBcEUaH54yBRc5Ny5Hr7M2DCmaPSmeDtBVJFg1KBgYSXbAoCDNRZMbmDEFwTTnC6KRexWy6Uik",
  "key47": "3LwJK1zYXRgfF6GwStSYAY8xMcvxzLajLJddJu1QH7X9xVh5X6zPaZBJHsuwnupR1sm7um1ysfTG3kPUTGcbaud2",
  "key48": "na3R6kX9aRZYCo3r4e8PGZnhGjzSxUnVLinpvBaMyUuxp69d4U9eNvyMVuSuBCwf1Z8qH1tSpFyafj8JUkB2nDx"
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
