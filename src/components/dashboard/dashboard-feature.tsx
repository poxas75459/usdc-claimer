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
    "3kcoHBzJn5jzQrrDTTbFbPVvH75gLKauESu61TQLahRpSakBGDnsMS29hmvPBqLbExruvyMQzBenR1MAZ5XKasiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEBgRi76b8gPrEhBKvMrUrjbyAki2Bhz7TA5xm2mWtMFGNsMtvEC4qpdH3dzNCLeKtKrnVcFAxzNVwnNEeVHcau",
  "key1": "44wJ2m4ztg2y8cdD8fXz7KVbx1FzdXvgET6Gz8VJSfkr8SDMyd19ydJBUwH5kUCjLdiBAo6uz9WcUfqTiSXg5WbK",
  "key2": "3zmJpyuE56nt4SaaLbYNV8PqqtSuoQVbM8nSHYet2EDjZGeJuUjkkNNWn2aHFZetCjGgFoSzgdiUKDGEdMYAkz5W",
  "key3": "4S93qm67qw8PQW2nWrS6fdEPjMy3pryKSbb47VyQB5BYYYSjbAsFtN26cka4h2HkkE1rg7cE4jr6rguKJgeQHPvb",
  "key4": "5ep7cNaTfS1EmF7dQHnojua13LBVDBqN7uLEaJxrtsCt8DxWEq3yqgxVKvdrum5UgoN6CZq5KdX53N4uWDCPujRi",
  "key5": "3cYNAS3Q8okpd8v354T8cYa8dkSPYnXx4HFWfzqp54QCMbFFEnk5Q4WAKxNEwFYnp7dNgRPkHzUWNdYfUL4JbPSm",
  "key6": "2NtcsKh7uemVqVnkiuQSPv8knt4AgUjwPithnJ31ZLec4PguEwea4snAS23pvwkh1NNBj95gyo7jUqvp4MQQg6e5",
  "key7": "5jWL3H53KUvnto7pfmLzULbrdDeTmHcSPghBsd1XM9wtim1EynxUeS6kinnj1fsuQHERzPRMsr8Lb1xmVGdwXRhx",
  "key8": "3Pis6rLCstyU8H4dP3SVdywShcL6yjFjNNufvChMVjDw8trzcd221JqizSbCz4x4neQKhNxmpAxw3Co9jq1pzG5k",
  "key9": "22qAketGw1MfJjbzt8UgTDwNngbmgm41Kqb7zR71Kweg1BiC6Mbby4HL7yYhLdK8RZZtnaLzc122fK9Bozk2Pwze",
  "key10": "3nwQfEnGi78U4hFZgQ5XLptyzrsCfnmgBEKNZiAPrJiM2pA9RyKvLpQjaXr4Mj8wm1pwyhtso4RgFdnfZeMnxofc",
  "key11": "32j8WMKp1z3hD1cwbEM2cBAqLHSUnLB11CGrr9Yh711Gc9DKzjyBZhWZTzNSaCGcCyk8tcu8ChGvahW56w2xDLPq",
  "key12": "EFDpGATswLiG38bQEiLWRQgLYonutiXboXnsAqJbeYXzrYKU9WYP8ADvoV4gR13RkFrfueajhgCveLZ8du1A2Wa",
  "key13": "4iyK5QQqNSs9CNUmSKjYPx58PhvWyAL6eQru1kvALe8MC9Ms9aYkGuAkp2NM7REgrmdu9HBE9nQ4Loy2FJyX8YVG",
  "key14": "2TnLP2hm8xZw9Azno32Zzq352GArceB8qBpvnPQ5YxXtnZKPn14mHcaSRMhPx2QZN3ZPwMUAB4VthyuXZEpuUJK1",
  "key15": "mH16iu8vTXqYozPhbCuQjW1B8g9mASUF8PcBToL745Uu7gjm9PCkvt6BE6ZeSRGqYpbfdynWe84gXCtQPrNUkhq",
  "key16": "2H5zLSGGuWub3kCCfDZ5z6FbkDgeQnEYDgNYDJMbkmTajT8Qf8g5qahH1uMiTV7T86FnxMDTfh2yqGwZQxbyBsBH",
  "key17": "52wPQqRicZPwsoDhsvN6r1jPbVTWqSfZqYDiNUQ8V552esHzHL6beJUQFSqRMuP59F4tEaZYfHRKkb6WTguH9eXN",
  "key18": "4vJyFLiepawngxUBpNzZ3NRLSq1GMZ4NZwgCohSBRp7XJtU8SekwmLYtBCLJvMcTAXAHPfu53EK7Qw3JTdEfeYpW",
  "key19": "5bvxN5p5rFFxyUQSCKH5apKJC8Nx8Kskge5eUWzfYUmCufptXsKgVaH3mKrK57zWMwtM462RigkzL1CjbzHtPna8",
  "key20": "4XVdfHJH3PMu4qv2Qm3MffMw5btZ9SASxKrEd6AH3NBvgotPJyGsgC211oAHoQQRv2DehDVJrLDGeb76pKvqWtJB",
  "key21": "u9Fqycapb4cqrbW84wJPhRTBSc2tqXpPE238nDb6ARUwxq6DP3ajieDUQDWyPyyZcoDTDAY2on9yHiYac8BLX49",
  "key22": "5cJrAzMNJBrNGu2FTSmgsuQHA2g61ZQBxFS7hGG4UMckS3dzMS9YVr4ThU6DFaAgjzSD5mAhoD2i4kEyLAqdkMw8",
  "key23": "57gBBqZRjsjiGEd88zeWHqMT3pPeDK9jWLtmgzr6ojbCMyshNnCYPRR1Qm6Yqj6UUgDXES3dJ6NT96htRrToUA1m",
  "key24": "2EP8j38RsyPifcBb81qReFLPkMqHspyi25jAqrSmZpouwoRoqefnmfk8ro4sXgYXJS5mtaU5qVvF4x73zGRJwgWx",
  "key25": "2P34gXxhrnCcLcNS3Ek7WkJB8jtfH8KFdAg1fmUadcuqSvpra25bdmG2UZJ3esKq2M5KPtWhdxhuvbTnCGs5UYe3",
  "key26": "4irgMfMPMcSi2b8FgNaDkSY5LWVRMbFwEGcVLEE4DXb74dh55fV2nQcrxw3hiVq9ruFaQJKrJn5xsgYTU4r6G3cw",
  "key27": "54gjb1P2pk29XpdAVHiTeVF9hmo8ZpuBhLhmv1bxoiJW2qKh8KUdGjUHMQLGTvDZYNUN3iFkumhcKbXTjVp5VKay",
  "key28": "dHgs2qXhGgfT5MFXvhKDzEeA5KtQ2DKf7ydTvH1DZSmf282EbVkiWMif81BLRvbwCcdSqoJRc6Lfmymb1g67kSF",
  "key29": "2VeH5E9bayd9te9ah24SnEWn27RFSQD7puCszBPg8vyjv6sZhyzqq5d1USxtW4LTeAE7a8JLjbsdcMc5CyZYfrr1",
  "key30": "iUW7q5h13Rx29ASuBCv5PT8PsgLe69UP4QjRWvTiywDgWD3iTQkDeHnQTye9gFB6FwYJ1tA4xt142ZbBBUCs8gT",
  "key31": "3ub5R7sp1DE44pW2ZvGx2hQAE3YJHQY1qdtsDGtKuvp38HksniA75up52uFVi6YuWojhwH7S9VsFyUHKhz3eqeDG",
  "key32": "4a7gzAGvxYTDANnnuTMPyCNpsJzD9cUURn99GWfQW72rzSa75UpYDziqkQqG9o29agVmXXahDBiHRgtJEd96HDh1",
  "key33": "xwQATf9Pb1FRcosYW9nkvCzRH421wKRQFf9Ld7U94NFZ9JiupKvB3QQe6f81QuTgogRawT3VrdS2eKHJWSMPnaW",
  "key34": "4jbKiqeD7QhKEPtV67H9xFENXC9z9Zm8zH8zod9PrF2nn33XZfqXC8pGMWhiZUEZfRRveaEi1EUChXYr9pRb9Vv",
  "key35": "4rtFH34p52VRnRNMzknqyNDpzwsfdPhaPtSZWGor66va9wEx4imowoz2kGWhsdEvTeT4c4PQQUsR3wiv4AiReWBn",
  "key36": "5NvwKRY2SSmB91VRCJgawu3GGoATRmtP7D9efScVUn1vhND2BGbQGnXjuSy3DqwDkNcTgc9J2xPuRMo5ydLQmsJe",
  "key37": "3JTwCD4PVLGogoVF3ALTAbmX5ETgGB6spJ5JD73gHPEWCs51ZAfoGaVapwaQPfU2CVgTDokmfHLaWLd52cc5Ux1Y",
  "key38": "3irB91UkcSycCb3xNVbR1Fr78YiFev22S32ThzLY6kNjBSwxePbgmRGv9GfezZTLKLe49EnGVNWLkLgEX2FHx5ec",
  "key39": "4BVWzVaDp854DqTaRrM7E4VB6gfgufYEiZCviHJ8ykExYC7VgatLtySmJG4bBwLeGo9YQqCTxTxAn4UUfCgMFiTV",
  "key40": "3qVUav8PWFWuhebpXPDfbh4oYbcPB9QAFJdXdYaAg4DkT1U43BkiZfZQEkiZLtrbjat7kAVrSNEoYg61dCN1db4S",
  "key41": "2ia1cc8EM6gMUU1Ly3L8L52p1FgK7AjaePoQCpTz1CeWDYbfUiR9YGDo8UiMpFjBgLbuWL4GcMUVLJy2NJSj4c9Y",
  "key42": "2qJbS1PgnAyzpi8vZm7WKhegyhbURyL3PDFD9bWMFoZ7GegNZe2cFVBqFVMTv28tSn7HyBcpwTq3BD9nBmFWGX1b",
  "key43": "3AWcoX7B1YZS5ZgXEZgVGgvPUzB7cxoLLXfx5JTcugmC7C2xxSTeq3u48WMeze8Y8P1fDph2ia7u5o3yMjCuqMUF"
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
