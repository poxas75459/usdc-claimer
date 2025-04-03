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
    "4ReqTaopK2SrSyz4m2o4hAKfVR6NQMrCPoNwgcTeNjJ5CrFo6qR5AAGry529Wc4RdSUVs5azB78rcSQgH3ykERgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UnSx9KcPXSM6AfgUbxMyQMKao4aJ3sXhXu8sWYQiENZxY8WAzJUgc71SxguipGesWKSUVsXj9RfR9w77bbWHDSg",
  "key1": "36nbr9HhWG5cqco5nhe4U2Hz8vVMimkaYi27CisYsGLhHg8PETCeHCS3jmdzYDQVZXZteUZ9nB2AtPPMAZXwoCsx",
  "key2": "29gmjaQguWdexX7b31gGUiF7YSc7euwAN7TAEc8XyCQMrRoTXHsVM7UwMSauYePLT5wRrZrDETzxJZke8TVYEzrd",
  "key3": "2iPSHHVkcmdtXrA54QcaWoZmny9V6fEoHDzGKMtL8ieko2aqpBp3pLMy2Mj3icPoqZEjN72TJyd8JudwhHkEnqDC",
  "key4": "55KKRwrUhw1wNGsRxTER4ekLjRnqT2zGWy89SzepZYGSxsfycckNPGXSeY6A956uqnMf2Q82uzAgzvcv7Hu5jEX2",
  "key5": "A6LAWPD1NkaiWHjCXuLwZPzkXPVUG1tr67B61hwbZcskdskvhz1GUReGstRZusxREnvntAQtmcyZe2pNuAbqUJZ",
  "key6": "413icRQLELDsWziU1sCsR9JiSGqhPkevyPZdUV7NuM4j8oGnU3x48UMv1mFeRknwmC5ovxEcPCXnJpEcbDoVpYf",
  "key7": "5JVwCz6thEMpppi69cjqzirKKxvTX8cgUQPGtFwN3GPybFgmm3PmHBVphc6a6oZVHMbwq6VGdZ2cbeaqUbiEphNt",
  "key8": "4MCHYza2UxvKjWgK3HHSmrArmbdeD1URtbohGnDdLfPUMrskAhMW5tMnSTptEtCNvb2fDEk3Vkq5KpFytpShDGeM",
  "key9": "3QzPdUJAkSEiYKGVRzhXpNt4cv3HBaHJvWCu9P5HEHK6cAum6AVqur959WeFvZ84U7kRF7cwcU5QtUwPrTSEaK43",
  "key10": "3bGUnD17PusiPTAYQ1s3Lvsjae3aXoK4JsmRKbmDAX3uBpwagNAKnXrcnERtvFjyiAfsH3KoZbwGgpKbDdvVNq15",
  "key11": "3zAV7WZbrWSi5FxmCPZ6j28zDdkY4xo98zmFTPMWQKDz6Neg61ajjgUduUmT2rHCx3Hojcqb8u5oQWBEz6egsTnb",
  "key12": "62Fbs8A2yC6Zm3GKGN88J1bJmVmkgqmDUn1t1AN8qz1X9YUVaC8Mmb1XxzxxQFB8PQpFLcESkpDcEsGKg1TPUWh9",
  "key13": "3KboDYjBZ3w9jFCGR4sx4FxK6V6A2vuVa1CAFdy8zuKJT2Dta6a6AAc4MkroTPacQqJ8txawQx2fm1xMLocqoGR8",
  "key14": "4YoZnDmh75DtmeFyfARXfVgGrmj3YhB9E3zY6AWKvcFKuHEMSaUGiMfj8KoF2PZZK1qSWnvQzz7WqrfXUMyajMRq",
  "key15": "3xPmC9Vjbfb1KRxKUGJZgmnZ5C9tECTctcUH1tPNcGdJDbs9PX7ngkvxbzrZerou3otUxCgQUL2EqzuhCbEZPmuW",
  "key16": "5VMkkEQPqr6oUkkLjCrkJTYFiSqYC5ZGP6iZYoH8abLU8dLe7J4tDhPwfsW4TmzSbsvKzEj716r5h44USMEpHxP5",
  "key17": "3oRLvwUqiDmrqa3ecYcpic4fHz9G8nCxa1mRsrtpvQDCdCnTUe5c34jm61nPkzUHibw1sTiorb2Uq1AvvBbZdDM1",
  "key18": "2nbexN2PzjpdmB61SH49G5RncibWt26PcwR4R55f4vfRRh8BnWmhnJuRHbW5Um3E7wXN9vbNmRLbfZD6Z7GNEigB",
  "key19": "44Mumu1168trFf3TvWProujMzAMDhHVS41Mo2ZwJqP3FbcvBjy87cmV36K28eKfUbRjG1CG5TUSGPccj3PYm1qt2",
  "key20": "AFZs8JR7QjzMgZhke4erJw7zGE4XuD7owewRd5AHkSjnCzFKC1LgrHzJQzqAdhUKAUiZYkwGxTk9GGFtEGW2GVF",
  "key21": "4uVXiwqivnjuQZh8ETywt9dWy2zJ7vhbCpqQuTGcEV5B5CtroqPjQtDU5Trm7xoCRYin7qeZfqoyqZzBi5t6E5RB",
  "key22": "2jSmGHwSSqNpitzU62TFtsZejCuKWpWC2njxhSYH9AJv7jdFgi89eo6dUdRZtauqpRZ6z42ZXcfcaHNZTn7VQoV5",
  "key23": "3XeT5HEDMN1B8wCirEY4RPF1wJorto8QeZkuja3idbs4mbkUkHZRRU862t1kKiiAudu8TwngZtSxjJehkLghN4mz",
  "key24": "51fo9CRvGU55W9iLB9QDzj88N5bbe1WLRhUjW7JENrYK59HZ9jZDKGjWPUxCpzg916oyCQmFENRR9fus7VB2nm2J",
  "key25": "3DTFT2WrjY2Wn9ipn6wAGD54nUi8qCsqRgwaysnBC6DXcuXH84kwkCu91UXrweURULfkdUWC95iCbzfgmkPxQ6jV",
  "key26": "5qBvtnUrsxHzgZaw7uqXYJ79grkgckZxhtkXNiet3C3A2XHcfZCB74GHWssP98GBokrYGWNy5zn9cfgPHkiGsYKQ",
  "key27": "3e249JJUjHwUtWF3t7AD7VHfxn2mGYipQ8wkDx19aWc8NGouxaqge4P1S1fVD6krfKVXMCHyFASK19gLw9U4XusD",
  "key28": "4YUW2CK392QotpaXhdtVus6XuJSz1ehc48hYJXFtL2uqiHpwwx9HcNrKLy8QGK151ae4kngeuqH5EGW3YyepCTLr",
  "key29": "2QMAMhvkq1PwaMvUBfua9uFbA42XH9H5nPJYcrBiSyvRQBzGSa2X7Y8THT2aSrYj3FLmALWQBgV917FXkyi9tLP1",
  "key30": "49K35W9YPKqn66cw1scpPgAJPorfpyymuWppD2GvdkpKbnXLNiUUxm4CyU7Uwy5tHZeDonMSFqursSEim6udfR6L",
  "key31": "2reWxAvme9kFfSBQURNCtzNSxQ6J37VcZLp7fwsCtV1KWH5nnHzRLuFwQJ5vCTKsCLJz9K1NYAsh4JYGCPwRyei",
  "key32": "27s7zyZTPNT1NoHxmiYuVAPScUSggLAqbeLzj7kxgGEEgD8ZTUeey9Ubf3r5b3ABHGLAbALGvY71bW34wBZexDvV",
  "key33": "4y7dko8sDqnA1Dwu7hmnigBMyZ1rqsiWKUZAZ4i3qFsXpa7Xx6z2g45bPDp3vKepaFoKX4ohRMe5zvZSyRKL5nzV",
  "key34": "3u226G7pcQZjY4dsj6cjc76wgiyGrJTrE5XdA6rawEue2Fg4FnNeNVsCv84gW4i4KdFARGiquUy7ZsdkduC2wZ68",
  "key35": "4hJniYyuyjtq9ru1AwCWCQQq4pirAX7NE1qKwinNiKKhxd6GpemhjPTrkDjsG51u9bth4R5z1CmrKfHfmRV6z8FH",
  "key36": "5Bf7noVWMwKmPASfGCdxzebSKabexyV9qELXkxBEeUSxrcUBGBVKiavz32mEe7qdyLRvPR44H89sRg6Twb1pPmyg",
  "key37": "2dSiDjRULdY7GA5M2351Zq5xUgGnTgGXrwb4ghcz8kSVBXjk6HmXW6VRbToaJuo8MZSQLFKz6MDpvUR8YZe4r5YJ",
  "key38": "5NsTrxUoSGRaBHJn3aJTsjVRiiQ4ZwcTh4MuqWwJtafhkCdCF1sk67FBN3T6qj6Q88c4VY3C6UzLAxbxaMH6tSYG",
  "key39": "42jUsmcmr1FCXpbGjyANxn9rdjjxsarh5nJxZsoBHTwjMhghEsB2JSp9DvPqDrSWSMxgLkWs1JMVXiGvteYgkB8G",
  "key40": "34Tugw8NW7kn1NpD5UeMWQP27ULCDrEuwEfnZpm1RudQSy41BDs8MCZsYhZYFUtZ9KgVAAtL5AXceNZ4szzLoW2t",
  "key41": "3RQtWPXJh4mtJJ8J1PeVrCyzod3zCMD1r29o5ZVGZWGqQwXEEbqbKRmvP2MCdjPR3NkEMXUouivX4ATY7ZkiQd9t"
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
