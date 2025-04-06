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
    "rxqbiMSqCMTqGKPYCPAUMcra3dFeecGQDCTxsubPwGR6MKTsiFD9QnAwteLMYqXtfcc8VWAMMFaohN4xLsQeNrY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hgzwGEcNwtxkU3funfd9WmsM5sU3XghHVQodfd6duLcr5XHqwhsvNYa2GkfR6iqSHni1SEuvpqpuZ7EFe2hiRG6",
  "key1": "3WHf8LRuHkNeaxpH1f4ioGq81BUXPKfVnvdbZCdfReXdH3vJmHB8hS9cKi671fQp1gtk9ns7DNovrfGicdxqGdy4",
  "key2": "33LU34CTzWZzoUeGwBF7MusNtKYFbLTFn4mv9duggfcSjnYfAdzLJUJXcsCzdR192TFfz6ZNwmo2ZMREPpGxzY1J",
  "key3": "5p7fmQz624spqyttr5kWHxNbi4SEiDvrjgxT1XLCoyqMqjtAPVxeZ9YK3CceDnhzZiUid36GDRusFhEXonzCGB14",
  "key4": "55Fa9KCAqTF6JxpstLoQKSoTko4VF3Sri6qxvmK7d79AC6QBQUpYsuEfBTKwsGBjbg4X2Knzv4xqjYWQhDMG6pB5",
  "key5": "SsbjEVjCC6onyoM1uLN6m4NeaZLeF7wgo82YYVG2SGgN1TqcK3PJNbQWQyy9sg7ox4FMnpYoeegcVqBBwKF7Hrj",
  "key6": "2V4xNDbahpGtyLFFzmonV2U7x5yo6EUJqtHeckgSr75cCd2PjZcKXnEShJcHFuuqUFG2rvcAdYJepW4dYYeok2ar",
  "key7": "2425Z8urnGu3TiQhHbaUxhR7PctVbbd6HKU14sFBeku6QJJRMXtFGPqBVQYNe6GivszL7ucQfiGKN6Zcm56vTBpc",
  "key8": "2XbcLF93EVckxqimfFQfCtN7XJpnNzpJj9TLgXNc8nw1AEwqUAi3T3msefU43B5WBSi5qdWiYHJ7qMui3zdUDZTz",
  "key9": "4qQmidZHJqL9kx5LkwghGDavDBkEmLVBm3Qw7EC4LfMmoVkET6GRJ9yZ7n7qDuYq47BvqNFGK4gxNQd9e3noyDW1",
  "key10": "5KHiX1xdQqQdX7M15CBWDVquzJkgGDJ8fWjYPunMfpbD5WY3fDfyRvgs7jHW89b6PexTkDSSV6eCSLRyurahjMDc",
  "key11": "39dSDDofECJu4DBW6XFDnGwmhU5LZVNmidNUEQbz8YFRkN9LPrktUgD5x5DWrBzAs3PNP3kZGPDGcg1fvRkdn64j",
  "key12": "2WN56vLTfMX3avC7v4xNydCWH84FiQepdZ3r6jg69Db67uVHu7QhPVUv55rDfNt6qzXErssimD7aTtByDy91GKnC",
  "key13": "49bNrCoyKQe3ji93sWtGjBxiYYMDBbs8HJRyvs78qyFTMfShPY4gVSEiud74YXHeuzbF8jRwBGbP11UhMJdyUJ9M",
  "key14": "3PBHAMtHCuEdpT5D7zjBMtPK3bMLeRm6VnP5uvNaLntJfgwFSmG7PmRNc28h1FSCnYymzaq2gJZFUEFSadQHUear",
  "key15": "2ovN24CaJiq6T3xRkjDHAC5EknReEK19tUk6Uh68qEkwBEjdsAVv1cvFX6Y9EoE8aZu9Ji785VWih8j5bUs1AWV9",
  "key16": "2evNPQEUcSE64jdJTQ6ZBC6zJg8YyMvi2cTs25DQAw1taMqWUfhj763AkBDoaq1AtkF97C73UMMoq5mqZNXBjHZ9",
  "key17": "2fofM6nAgnqavpwbemUjpT1EhhkE97a1wtdaVQBhMuAk7fgTqcMXWVKK4SQ6AuXqokNrqfihRuVjLxSHTsNS2iY2",
  "key18": "4uWxcwwUaEUe8VLTqGpaMU63DzkXFjPLfohBmtrCeDZTCSwuUXf6QmQ2CRi5iKTZtPvudBTrr2Gd6NLR42Ph43KY",
  "key19": "2tnfVRByKn3SjijT1FEguCvausSgj3E5S6XYQ1JdVQB3xeLnKwL3D3g1W3YPU1iNwp22R23R3swXWkDhq2ohG9ng",
  "key20": "TjMRqMBwPngPtcLZJrXhimtYUB24nnPB14x1LuqrAKbKewovY95RbE7YS3HcjhwpTgASpMrtAK47kxx11cD4gJN",
  "key21": "2SfeD3PPt2QD3vMzncgJcPxUKRy9tktAhqqk4HLML6AdQax4wtdCdPQXRTPsGB8EjyAFbzTtUg6AkM8xHLMrjXni",
  "key22": "2qHA2GMHUSwZfjzpoN8VA51NznXA2i5QzBKjsvepQYGa1i2Lv76LgGnKxQQGkzoPQXdDG8b3mrqBrBwrowyzY6JR",
  "key23": "5896N2g9N5SXFaQ22D94E7xPV7UdgRn4Pz28cne8wqZyUtJSt38dLueTjz9WM1yXCwNZaPRChcKC92AX6XXBmpZU",
  "key24": "4iYEXPEy4wnJUoMt3n6bCMLjKtMkkN6LLiAgGkRMxNKTBUemBibJzyfSZR21wbV1sWvVuWxeABx1tE8QEWum1fMB",
  "key25": "33k64nrkzKBEVjFJ21YLmnwCuQ2wrGSLASFSPTqLHFLXRkDkzDwoE2JoZDYKk2GcBjmgxShTWcSsMFWu65Vkz5Wf",
  "key26": "35PR998HTQQXa5a7BJakZ9JSctfW2yMBjFjQHYBZsy3Zs2NwtTZAsB2976CCCVttcGSMU1tw3TAdzEmnV75e7Pdq",
  "key27": "5zoqCHLY9KDxU71dNQke1VbR2njWugMnGiMr7RB9HHGMVdaQ6ZWewWVUDgbmMqmNVfmvT311eCSM8dypJeWywVZy",
  "key28": "3sgdfsJfyzvx3pNDV68WVGejN9PiWRGUJCdKuhkubRVs9Ew5c1BSt7Z1i1Yp6u5MM2FSnhY7dwfD69kxEeKRzXWr",
  "key29": "3F8HnuTmNVfug1d46kwRjuXPPQfuyWQq6UkMwLdimLUSc5ZUBm7dRJ29FP2xFgBJyEREHD8yAtQoqnrkZNeWPpNP",
  "key30": "kPjtCDx4RHP1r1hhkeweb5cw8DqZyVCJatMGh9pM8SX1iZhgGQGAM8NRcL9iWRvgXsgX3QiqmAs4J1ncChv4i95",
  "key31": "3oMeQbRhzmNsPmav1iJeZfU3Q5aX7nfj794LshS7gfKPZuv4J7bu5To5AvPHiVjao8HatjHJQ9bTRquo5661wSn8",
  "key32": "53H2S63VLMAjKggHf8ceXWhPuFD1Um7kerMqCC8G4bsRxdW3yvPTrXRZ2QNetTwqLs6hGHRNcA3wUsPNNYXLpCPH",
  "key33": "5ZmJC4tJVSsrhKwmceFv89KDvcFLUNUYvgSSZqWZ2UUBYxhTLTK4jX7t2bUC6QJNLdVHfXYgZXgGSaXmSQZXTPfi",
  "key34": "TTWH9QqHXzPXYjrY8zBbuArJs9t8iX9G6ALnw9DcZwxMKHT6siqMdRWExX32HphUKd4YRMdTN8gYZto1n1422Am",
  "key35": "426DdKmxtoPFLVbMceAndDmDb5XxFw2oCwJHCSn4xcp7fankArWYSoPBrUYc3VCEQp5wRrncHA1CeTTZvYq7quEK",
  "key36": "NfTUbhHcEVKepaGC6LK52TeMogBTPAyjKxWXKnN9ndB6JFubrA62YivcFy3pbwqMyZbuXKj6ugoYb2mnHXR4L1T",
  "key37": "fV1gNEcVfXwFUKYrj3M7NiGJkHtidxocY1QYvj95VQ6mjG69EpMy9JY8ZmufEHENSJ1GooJorEwfL5jcKPZ3XDN",
  "key38": "3er3ortReAP4PL5NzmtHjGQh1vk2qiAQAUEcZhujrJruNLaG5wZFmu1dKqPPWxnuaK7QYbNNWqhctvoBNKRq8Ce8",
  "key39": "PNU4MmHotXhhfMKpcMx8uNXxxTfiaByQGS8Do4eQqbyiXEUEt17JhmpmhfJER2qw7xyKBEXCpk6Cb6BbBUDi5cB",
  "key40": "Td4LVXmwKnoA3A9L3CXq2pc3Eqm1TdcPFp1Lctw6J5QXGnaRP2TgY74ndRYwj3wcbPRHX8mDmUubtrvXR14tMeJ",
  "key41": "4K6g1oT8pHiERMtvPp5nix35SFStfQL7tVoWy26sC8amV3krtRjM78VYyZxMrQx7byCTnZTCK93xUpdcXV7BuJ49",
  "key42": "3ib4WfdgXoMFudX5R1AikHZUFqcoxGMm9gAAXJ8YiQbAqUQdGc5g1E8R2tCm2YR28MfpPnxjQr96fC3rREtHpFDW",
  "key43": "2G9Rkc3sB8d3dLRJC2MdNZ4C8K1Nva76ewCooGbyLsbbV7YshtLDkmoRZoL1pGcyr2iTV7PqniCheW1tyhXCePWC",
  "key44": "2iy93Zu1fA8xGbRTrSUU4xkhUZqubcBzsaFQfprYTP3niVXvvy9tgi6hSCPJeF2WPpnsvZSsnW21XfC2aXThXtBa",
  "key45": "28wsYS3u7X8mTc6jXRUC1JnWLvePMy4duHsSdQAUsEbgYDJ29RqbwxuBAS56kyx9J4MgYHvgeTq39DA3rWYqBRgt",
  "key46": "4yGaQZQ8kyvqJWmpYsim9k2xBiJ978hiKLeTFtjvg9HzA7vihpyyTPud6QiY7C5awSAZjX6dUtBzWCxW6Km1SBT7",
  "key47": "2kMHGPZyB4pSjentUYZXU3ZFvcPHJLEyVpswaqbLms3ntA9LBh8v7R1YGCQ3pZ9ugFFNjmdh4qyysYT1fuCg3nHa"
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
