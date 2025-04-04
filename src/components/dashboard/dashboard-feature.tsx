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
    "oiFQSHyUWK9tLTJJRjVmgY1iiUdEQ9xSgJSHPyixkHCLxhzgcP2JgmWVUof3Pu4GYmxszXpXDmEHdqfTniqPPVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dny7CNtdzx9q1R8LM4Tnw6hfbBo9aCip4xzK5JVMQk17MbySRkudz7H31HVgCEmyd5r3Tj7R14YoYFr4A9qTajK",
  "key1": "3RSjnAWJ8SKhPwY2cDqfToMpYttuAFDoCKf8aPN6dpGNVLuUiycNZ2BCPoWyzfVyzWivn4zxbGtD4vGk4MbzSHUA",
  "key2": "2puaoTgTDyXba3MvCnjZkBS5pJcFCMyfmioqAZS1AEZgxZbt6druGx8y67sYbkve2yY9XRNymCh15KmcW9fSZGKr",
  "key3": "M4anrSBDcxfh9ufLDu6JAuJZMoGNtJct7ximhiHx7NxcZ5L7omxs9VRGVR1yRm46nMdxMLu1Ai3e2q36F8GVoKo",
  "key4": "HjRidHHjgQqNUcz3qyzmd1gtuh3FPdH5z52rd4m1ddBjoCapqhcRaeT7TJruL7SRkZp93fRSakLMvuS2Jh5gwyP",
  "key5": "gmz42iCc6xfNjT1N5aFTpGHT9uErNxkCk3hzLqLzH1XpvKCBHHpCc9xMMuy8647D3g2SymCbcqCagoXS1AVdJpt",
  "key6": "djL8Hvwe3bXCm8PCcowusj9KhadGkbpewHjfqcoo4TswENhCyo7fg8ycqDxcVjhwKWr3SeZtiW36CeoivmTocgN",
  "key7": "3jbGpVGhewStJ2crG2sfaGWoxXJXkMmMLQcDaXxkdHUA6dMP8fpMeVq2w5wjFhNnyRdr12DdZPrQYRo4PFoJah2K",
  "key8": "28U9AkTbENdXh1j56HowCJgBKZjQGeJ6B22qQgi9si3g7yjPUoWFBahZNdRYks7s3A7iKmxveGcnMKh4fb3TLStL",
  "key9": "5N881U7EdyydAZ1RWrpiGWo2P7XwwVt8Hj3meBahWKcoUpe69M1aoevVtc9cPQD8TiAapKz88NNV2MUnaZAorYCr",
  "key10": "62gje8yft8L5yxMKAFSaaTCYCUiNCDMU8LVfRn77mMemXJQAU6FaaJME9iPw6jA318WxdZtGviucHPTgQ8bowM1R",
  "key11": "3YBtR4dqwZWeFFMWCTimfn5iV4ztbqb4mteTirZCfZdV4ZRX53GTQ8oxS2gzrueTdnkQ1jT6Gyk6bMTfGh25mTB1",
  "key12": "4wDwTmqtZ69d3RsXCQZ9uxGWL2moMDsJ9xKyRUGufiZgJLwL6vXgTywtHKAmPEPdqJHMfbSPjStMFL3DZf78exA7",
  "key13": "7uYv2mGmscEjcVvNiaif7jvmwXtM1baABKdPTuKHPpApQND1pcpBa2rkD6CiX4HGr89krx9aLRvjfFzQX2xe1yW",
  "key14": "236jZg7fXRqTqeCFEjS3Q8AhYBv89ux5DrWaW7aMM1JQLTnmq84o5xE5WHdjDtuU5c4ZCKjLENG45JzphTr5zoDv",
  "key15": "sMph3CUSjMSgq7yYK5XrpvDoDxUfRa3wAa4VkRxM9NT1aoZ2Q7vzZXTYbLmefnjA6TUmpRJvfxUNWRPT4wCtaRZ",
  "key16": "2XUfVhbKyUVnkXkKw63t5xA7Aci8VVKXmuEs72CwNvL2fS8Zc6Rc133HNFABNmcdmwssLD6yytHTNn4TEzutw421",
  "key17": "7nDPkub9TB8Zp2bX7Gw9sKtFqcJpTzBxtHSwcdLJRSZXkYd6vYG9fgLSHJQkKBZpcz3zuKE2RgLgVdmoMYdkVLS",
  "key18": "sgPVYsLRWeSZza6V7jYJNLauDxicjSxUzCYTPGr1i1Bw7Mryh5W6GN6W4MnbEtMyTWkQgagrmR1iw1US4pwUQYf",
  "key19": "35j234GE1HZwm2HAw5wmTbbftyy3CqWxMYU4PTw39JnbgTLHjM6AQ784UeVmZwzGzw2vxuSLfbE1kxCQ4iSbAeTs",
  "key20": "yQsZzx3cpqDoWfZ8WPAujLWZMX3mMPQNh8tVPrsRwmYQtn994B6ESMQzvXyRnQ8qwaaGnQ65xyC2SZzNtQ6wThe",
  "key21": "4hB39kkF1T9mvughrDe5mvHXWSmzJNQ1ctQMKfXXhbX6xVfiRx5Yk6B256TWjmz97J9hqB6MsjzpCmUygLwe6Tn",
  "key22": "3XQGBeJDo1rLNpHk6UdcasxEq3eYPGpRZSVqruBKioyaP81ZXpLKB5VY1BnMemJqT3JaDJ6ZcQgJhzexiTbc8Rzs",
  "key23": "5B2TUBnypLxG5HDXHrXqUusts1tpVkdoVF6T6miLq7BCi8iELEvPX58bfX2iGvt9j8boeR4fDFhXutcbcFn5pEr2",
  "key24": "48Zh9f8oW5fL7RCw9EACirkQuGaNwmgzB1SKw3Qpp6uP6eLFSszjyK4WGWBWhNDgsFVXAThJii5tdQMrCwtofTtw",
  "key25": "2QoD6Zjvh7UMfmu1AM9bKJzP7SGBazWZGhBXYycsMqume21hdyT1M9pnzNNLocQLYimMRzJ8reTW3kWmDEFFToxP",
  "key26": "7r64s9qU9rqVGwDw2pka8Us2g3kXYv5CMqXioETyupNPpMa2GCHhAZijo7QfqqH9SL3sH9RBv3DSHssnWa15kdZ",
  "key27": "VgaAkGDxrdprgHJXunskp8Hqku6Kf3WPeDvAnWB8swnyqrdZqjbiQC6ss5kqAUrdUPG7zxRFSi6UHtFSqPqgtnA",
  "key28": "3Nd4wcRPV2aDV2mb7PB5fxZREu6iyh9gHx5TdJFM9bgSbDTdcf67VtPFPGhRUkwgFcrnC3iVwqPQXAd8aHa3L4LK",
  "key29": "29jqQ2fLSkDhmechkXKjBH2fyRTsPFuTi7qFY5dSEWNNnL8rE1Nooy4c2zvgc2XmzKCPP2H2xhgTceq2XFNDk6sT",
  "key30": "54etHUgNMLoJphcyaNePXatb7qrCQs1SR6kBj99aNrxWYenKzsWZHXtb3w5ebTDgPnNQyYdJoKZPz9MkSZiPKAiB",
  "key31": "3xABr4wqqRmzz4sGY1x3NgsWEdbGhLFXJ5U6kxx8XtN1RVSxmHvkBjPpJ5pmvRMTXPGdd3GNFJvU8WWoSzJn3aGe",
  "key32": "532jfZkzFyXT9vQNdW6xggfezKQgcUymoXCTsTxPkmU1WoA3nqjkbuCU63TCPefzHwF4Dnbic9WV4MrC9RcuxFgD",
  "key33": "2U3tzKWG6CNczSPbqNAMYgfeVFoJV3v9SzJzVi2SyhtqGq3gijNCGfv83mMNcuHTxJLvcsxBWCV3KTzo8comBPxN",
  "key34": "2pzWjNdPg3mNCFFkHjGEU1gmcQ3tZXdnWEZuZULMSVdah9V8eyZjvyWD6Cr7fEgF7LzRJDJ7gv9C7U3b6RrnwTZH",
  "key35": "1s7oT7wMw61oE4QGoVRw2g5EFUpuwVin7ZnMWSdEonoJHqXtTvvv99SFiV73E9ZFy6cVKbtRPXxpgYjuYUHuPnJ",
  "key36": "9TCKVoZeWrxhu2s4CqbbYGmBz9eBjtxJFy532HfS1RjUaVNoaaALu2JV4aAAnHJi61GmAWT3anrpH1uVDA6W8a1",
  "key37": "5KEcgFNQJNYWk1x69MaPXLpBSkhintuo66GPo1Zv7FaFkkTzFVaJNqGvPK17vkCSPtVky7ZuWiHsiszCfu14x3YV",
  "key38": "3N2tyHdErFJ5wo9RrsYD4CdyC7EfhCNL5vtUc5WgQGJBSSjv9cvBLDz4HSNahXat5DWmGhQU3s2eSciwLtZ1SpLt",
  "key39": "3ABS1NWdCWskXXejVLeeui9eHdjz4uMmPAW7c2qW6qfWFz8xMNJDNzF1KxpYiUQHoEDxD1CfZ1Dwn7auG8gYqf97",
  "key40": "3nm2Q138gKWJs3xjscDy5t63J7ANdzaqP6TzKop9c6kvZxLmiUcQzZw2QQZpY2FJihakqWVB8JjT8WAsxqAC7wAJ",
  "key41": "4xPTSUtmDQW9WgiY86YSw2EeczcvvwAHKsjcEyKg4NQFajHkujZ4MBC1J24fh36oRzThddWqEeiLtU4jcvXbLUXg",
  "key42": "ZVA2rxtCXRiBHhXB518DUGPJ1w19LUWHYXGPQ1ZciQTbCWKn9wAPxsGQzRxJWjeCZDXP8FuS92aUMgS7fFMtkYa",
  "key43": "3wZc9SYcuZGYzJWDM35byd4cFTVSeBVDikEd9GV1daT6ePJVagB3r7cRpruNktJcuJ4ZfAfgzN9KDAyEYqnBL5gL",
  "key44": "2FFegkwEhYxNZAZ7dGJB1Cn81kzoU8gsfWxxQduVszoMLUSRPdNr6wacB7EXohSjjvao45ojvaoDcd9G7TqXKBkt"
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
