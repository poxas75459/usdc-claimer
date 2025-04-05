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
    "UTt3C6SvWqLUAKM7uZqfbWsCUsKyHm6fGaaVK7FuADunqgz6LBqGJbayqh318AUj3tvdqozpm69qytWEi2hz2sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbT4iwTUDRaqetQw8YgQauh8tV5CvRGi9EfhiefdRshbMUjGTYMJ5BXV2uGKNt7tE6sBmzHk6FGtnHPPTdYbMBs",
  "key1": "4cMsYt34E3rp6ggDELM4zq3pBJ6PfbdDx1hmhkYSfmr4ZwSPZAabmQzNBPJRDky5PJ9XXmcvk749hyre45SrYCR8",
  "key2": "3PkbtJURYSPTnqnTLDBbr2AnPj5c83NAbVUtHBpAQeoEMGRmpe3fT85ZEaaarAZdPoPvtQ6Dcc77FaDdcFBAXVd4",
  "key3": "3LQythrarWFbwUnoAVNvqYPRfB5U3zeWsxm1QQ9xyg6bxuEy42SSAyttD8u9Jr9DQvEjDS5PkicevPMhZhjoU6q8",
  "key4": "2nFASEPfVxQUgade9tnxxYmdgqyP7YUTzHLosqySEv6BQnQrdJNdXD6wqMCaZmaRGWxzQ1eGfj54V741rpaM55FX",
  "key5": "xWzPyA7yMQnFEw5SyYVQQkHhB8PPR1QLYBPsUaCsfZAvaGMv2d5zzV2VgGt7MsCfi8ywGov1BvqjR78HQC42yMv",
  "key6": "HuubjmKeDifY4tAcNbCfRCzn8N6j3P2tb85L4a4t1xgT3W2WqgkSYxmE1x8whbxKSoRUiGsiVmVkQC4GViq8pzS",
  "key7": "2xzbDMf8oiHFw8bBDwSgwtnf5nWUnwf3jyLNZzBmCUfkkMfEycZeFv2y4rkscGxN2NheprJumWaXTW32VDnZ9K8a",
  "key8": "wWW9ryDyAoqwcwBn79GsRaXiDw9gQjuj7PYQccjvkb85j1TF8DFqynpUv3P2KY6zvS3iwJNeZTMnhR6sScsF73W",
  "key9": "2PnjNX1Toko5WqMrYRnrc5X8GtyHeq62nGxJQiFvKn2242REuq8zAQjzraF2GZYqZpPAb6UExx8hpuXDBtuLxZqK",
  "key10": "5c7FKXn6WhEd59tLngDGLsPaRjLkdmEdo2MdFxQQCwMCBFRT7wucTrRfdUWhyXiJ1ag8DaZVcopdB5i1DVWKFZC3",
  "key11": "654iZiZPN3SkqpUUi7bUExeDoLTfktU2nvQVhPFpiwzNZGLqvoA7DBRbsU4w3ANEEgtdJcDGvnQYZkWosXKc5Spe",
  "key12": "2PSvG3mF4yU7AwdxXJrdmPT8hh7VTDTFQ9NE45J5AmgRLhi5heh1YUNAprJDLLhQHYELNjCZXbuGqiQR2DJeAuVh",
  "key13": "im2mtZsdYHfz3jQvxiwN9yJf9Yt3yGFongYh35nBNNps6d6z3wKVMNguMYWGZpYku6SYsPHWUz3NpJFWXUdaAyg",
  "key14": "4fYXpvdwrwuidnocBMaXEG7dhpWbAT8x8WfVNNPSaDqp7dvj3MkQ57kSu2tmho8i3jKajGmVrAZocQGbP14hRV54",
  "key15": "2af8KnDF7w1bE4GbFwdxsknBG42yrsbCczzJr7oDRN3H9woRSUuNoSx2Q1FGGjvzhk2AE1jhvdNmXLb5Js1wejmS",
  "key16": "4wd1QC2VJ4LwhWarnmyYCgA5Go3FBV8n3Kb1EPDaDuopcH2KojQgBNLYspWMVbDH9NZHELnxcAvbvEFFkJA2usgB",
  "key17": "ytcEsQSNTfjNaSPensihFLuFqqg8aE1QUghuyn5sXppWhbqPbsSkhcHnnbQbMMgCQiTdU7sidD5dy6NvKHo6AmD",
  "key18": "44CrH5XU69gNMeunLKuk9LJq5yP3W3XnbcB7ufW5bv8CGABREfNrU9HmixQACurFmN2UXcP2wgaQoTSD5xSQtxjn",
  "key19": "5RGLtou2yVUkisjxvz7eDDWzCYNYkKkAKdybXegCQ6GwzR8iuY75aetiroGhjwMipnMankkURPmPs3g6X9qRfvvF",
  "key20": "5YYwfjasvbaRNtfRn7vMw47LvrauMZcvKcE8AeRqLgqo1yyP7R6tT1SUaTGwUPNETvuiRQM7wLwezTn6L7wk37NF",
  "key21": "m96ZkfzS6MBLX6kfshRPUtpLoQ2aRpBLJJg5kRUEtAU5DE3iGVcCBjAXGeKhtcttgSK2tEQywXzMr79Zx67GpTW",
  "key22": "4okETgNgpCCcP4uCWVQTnBfgdNSiR33Ha4fCYV55vk9RZBF76nmuUMyb1er9DjJMvu2hWxMnhgaUZ444FgYxremy",
  "key23": "2NV8x4Qb2wwDwjxEYevLgkJdjGZeCtdq5uzu43HwgyjcKC4EPwmdAuH39WKJj4ZogsTMZaWnNPA12f2cMerqfDt2",
  "key24": "2vaktnHVvH58EqHjVsQ8UZysVn86rVjbtfS7DmpNzc5V6dxwGc6LoJUrEQ3rBYH1MQimYyrBYmicDxHS6booHSSj",
  "key25": "xvpe5CYCPZzquUDHhA6EzGWprH8VSCqvvW4jJDKap6fjQQpgpyB6DERe7aRwMQKe92BTMVZAom9iZHhpj38VH68",
  "key26": "3zEyPAogsBEfMmjaqhSTZXtK2bX7MQbPxH5txzfzfxAEnJjS7QdLDhg3W4TED5gm4DXMX5XpmbKyDBtB6yo2HQ7y",
  "key27": "pmWJqGnZ5eQto1SXQhNAwX3aPowodGQnE1L4SM6hRMFfWUzRpqMurKkJCzKoxWHD6VYsZmtvGgSHuGsPTnDv3Zp",
  "key28": "5LxX44qJg9VuxhVgAsT9A6eLUYzvnLRWt1pcrkdH5mZJt8hvQVGaXi1Xv3KN5ucuCNfXauA5sxLUcj8VoZDUvA3U",
  "key29": "5PFk4XfMuvzxbqoUpv7L4HPKXGsGBSncYBZD2uecdAKupr2mKS9GDoJJap6ShxUDmiptnaF2nWKA29dZLEaP7ckK",
  "key30": "UqgbQi16Fc2e79eR1HFqJjLcxyenWaSMC73XCYCscf4c9MosYE8NRa84JCLg1kBf3LDzZKE1e9aCzVGLu1kUbCe",
  "key31": "5wtgSm83GSxjfMuBE9jbNmKmnfC184rWfiyuG3HcFSnZmihddJdvReYJ8AGBa3wJSmNncVpS2wuXDqKjs8u4EoRd",
  "key32": "48VvsNv9AtGLuD4tKgvA1CYUtBRrQ1xWQqDp3eAtEFA67Rf4nepxhQytTEoag77FLfSkPc345Yhc5U2b1Sp1SPQQ",
  "key33": "5aWriu6yLhZ9MEuaYrf3X7P8D2rdDetJLEGFYi7ArRtenXFQdi8VsPiefTWj4ZRYuwSV7fMafRsWUc47F95oM5kS",
  "key34": "4CHJEQdx6bHBjUjesnSdU1KiY1spLHpVqXwoxUfZkioejUuyF738GWYgBScu1WxjLTgVGn7BuqCpDrP19inksin2",
  "key35": "ERRCMVGUQfw2r7rRWKwb1578i7opUg44z64b7C7UKC5518L5P1RcZUXAzTV4qd9VTJj1uq7ZQt4wuzsfZsqkfAf",
  "key36": "53SsvVQYk6bn9RALG5NrXtbAuvsfTU8irawdFP8NxzRUNZyb2ZgChwghkL4tMnVVGkBmgn3Vgjk9HkxFjUTwu4BZ",
  "key37": "4VfyDNtTspdaRVW7nignscjnTTcre84rFbrxyBqaq7d7npz47oi2JmxYHB7bjEJo3fTqjDRwbS6VdqHLcNsRS3ot",
  "key38": "37bKiWhWrErZ5vHze5AUKrJ91LT2PRxGfbGz9LbqPZYdrQ9ZCgqx6xQqrfqMARZBiG51ZZ9SW38CPd2cSVp6hTZw",
  "key39": "5AgAjzrbYux8NGbiuFs5S3Sxxmxnfkh2n8rip6q5FsW7B8FxDL2fouqNNVSRWXZs8byhtNgqqTK8AEBuai6MQH1x",
  "key40": "VEcusA1fP7Q8UmNahdaM88gvMcBfvGMRKwJgo2FxoUSkdDzP16wy3fBr8WEpmiP3xXJ9szmyshPejYLa1tLXsSM",
  "key41": "3B2J85n1uJ5Nv2wPVHPAac4F3Vr4haim1pBmnrGRmF9wevSWeGt2BFR7Ann278wuYttyE6krng6eKMPgFrar8kh5",
  "key42": "2YNHqNtCRwRYUVT4nha8WgJ18wKnHAf3TZCmc5TWRsu7wZtn1ciQ4Kh8NKnEzGE395JFqZCwqiKrfaG9iBpuZco5",
  "key43": "2noQGBprkyCxruYTJPncmg2UdUhxyETmwYRYskkpT9M6v6pGiXJ9REXphfGjdTbmF5BMUPVZ5iRHns5axF8ruMgd",
  "key44": "2xWEbDX1q7gwVqN37kAEFKUMf2achg3pC9m7gFjswCRe4BVn1Xf9CkrGxKFgtWTiTacgUne59mHqB3yPb2Xgg48L",
  "key45": "yjyyvfodFPzAgeyMxhoZTGyZGjdLCMrJ4wCasXkkT5iNpzm5F8mYCvAAv6BVFGXp2KRo69uTnwvfXJaihzjSZuF",
  "key46": "2ENwBD2akztLh3dy71b99fSyZF8vCFymj7iXNZRaoyqwSPPUdTxqq6ZdcQc8VbZzFXDkuXv7mrZgzgvV2QNVHbkZ",
  "key47": "36V8j7c9DghPNCr6d1fGqnQ2Uh2hTMXDJzQ1h1z9KF8zPvCpzfu1o4DPmbwZdQ21ESmx1W8DimPyeLvNk8Rehudw"
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
