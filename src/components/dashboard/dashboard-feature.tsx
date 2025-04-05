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
    "oQ1MnH5EoA7tm2wdguxTktVC8twmUkJ6kBrihSph3mPMo2irEegP3MBVGoTdwBCsL4vKM3TsUDgawggoJ2JvQRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BgZn9NVkGMJ2De1FXpM1scnkCYVJZcNyLuMovp6ozXztJZawqhFxjrewt8otkkCYSjE2Ajfe5p41sdJ5poURXFY",
  "key1": "3zsuUxCYAi3sEjNNNoN59fURBgAoHnXiAPxCU3ZgfAfYpH7TX8aCuZ5WQuiaLUwppY62QdioguPrzUwWo6uZLSA",
  "key2": "5SRkT3WL5FikCKBFEqvDyXQBUQSfjdPJJ8dJyKGBMY9YMhSpaiSwMkD7z7HHtzR93NLmNCmwApkNTbzzDrwDSkEH",
  "key3": "36538REvTox9gzG3u41NiZZ12qjV1fo7pySPGiBYQjD7yc11SftQoeeVh8zAx7Y6vn3Q9SCMwyAFipPtVN2ry4Wa",
  "key4": "4KtFVFCXqVommgYYtATu3tuC7ycPkS7uNMBcK9TSqm649JAMnwiifA1bmQdVqbmoMTxfGXA6aZ1iDLayTJReMWYP",
  "key5": "4KQwmBfq8mwahASZ3hDxvCHZS8Axu5wMWoSXd4RcbXDBJ6hM98pkh62RnAWsxLg5tWoEbv7iWqUZgLtiHkAvsjA",
  "key6": "5BHT1XySbsbN8SUWYPBCusmW6ijjLDziavsQkAgN1SXYWZZ6fhmVuarjEtgfKA5JKMXXXsmianKUcJqrfbs2AsCa",
  "key7": "2NgeUT5qzVuDA9QUWpSezGZDpbxFMUxFab2u6mMXXCsqNUgkqrF4GQS8JwadekrNCKRh9YkSdQyGyB2gtuiFCap",
  "key8": "cggJdLC5D6LbLN5PELK6zwcyfy5UxGfeKyBW1TAd3XzYNppVTm3v2xN26tXff1WWKGKkfFnCPPNue2vBjqobHWY",
  "key9": "2KPhu3o1NfuxQ6tsaReTjVh1C6i59uiehpkXghsYjEQRxkpjHnByztRYVd9jL4XcDLfe9YPuYMtzUW4xuGbm45hD",
  "key10": "2hr1YJpQbD8PBcjiiF1TeTSvvCx6henhEunmLxhmtoP2qPagdfaU5HynukjvQGgLhFFK6wegAYVLf1j6kqEYWEK5",
  "key11": "55E7dvRPHJSYAsdG7aEHZWhT46Nr1XoVTCpaewD7tZiYPqxtBg6ggqLTYxLr7Ns7sX3F5DEBZtRDRF8briFPGipK",
  "key12": "PEtTLMU6Zo4hXG1gqomYZAAxkBAhsPbh7QD2JQqj4qJaEmvvj1xnZ7LyvPxWsRBQCe1ff5gFKodUrGLnuBeX8oG",
  "key13": "5apu2h5AiJsqteRu44SgQyTPKbnuoeeRSHJUAkzY8hp7DVUtZcpdVEbi6qd1XqNHhE4vNbLRvk6i29A2zZf4LizZ",
  "key14": "4qTkjVxmmkGcFQKyCpGPLaZxa3qmWwTXT5uRdmL8DiKmcAkEZFyRzNZAXt388dW6ST8yzkBuJFaCTx3gEB8Wp2Kd",
  "key15": "3N7BjFm2yYzJ2tvjYaDzEPXXqfBGHBnxjTL3hhKibmz131i5bexHvKkvWdBSxWydD2VZ6z8UNoiCYQ1NCMy5yTut",
  "key16": "3izMFX84aWzjdvZV7zkFMbmCNBNwVsDN4sx7jeXEkDXiGd4maMJuYAq2mWYUwddtAXQQBEvZEJX18oZBMQoAEVjr",
  "key17": "41ifeB311DJmY8e2QawXGLB4TmeojVXj96Pyop2kGtU199cqfUV7tWu7KQwFGyRLKfyzLoHxco3WQEkNdMD8g5kH",
  "key18": "3zsWpvEjAJe6P2k2rXAj4r1dQ3mqPkCsjd61BopivjXGmP4uixE3XTZMZRJM3dRwC9uU4F3Uektq99zVUdroGDEU",
  "key19": "3MT17hQemVGvRaywkbo3UnuQbMaJCKDcQFGDfQA9K88igvYPQm35d6EQNWz6PVc4WE2uPQ6TVWHU6gXX2kZi5uzt",
  "key20": "4x29MDbmYM87iaMb6K6tb7CwcWq8DRvud39qoudgVg7xuUD7Tckd6mZxLC5HXdV5ELSBZdC29fAe4NBUR8yQkj3g",
  "key21": "2nNJJz8ciauqeAX2JVsrUpsQApsAecDAaXmo5EeCMZpKAizsnVizfg58hDrErVzoxweYMEefhLgXJ6mKNhTdAsXQ",
  "key22": "2L8PcBMYZByW6vcFwqan5CYKBzVGrmw73UVHsQVsKq3TinoN1C4bZRWM3S211f9AP5LSHzMkQsAju8r2EaBYM4FL",
  "key23": "3RFLFPFyeW3xsyT92yBfjTWkwjZEQmjVhnn6z43pL5rH5pQzezQ6JsvSFLxYHL9KEAKuNdQyYdqNi2gqSF8FyiC2",
  "key24": "Lr8za1pgftiNbXUNM74FSRnZEC47LfhuSR4qHUYpABrepgxfdJAEAfmJBZeMbL2zj8ZumEsQHJLhDqzDYgm7jNN",
  "key25": "5umNFvZBNx2knKPXy4PN7Ci5t929L1kdU1HwDwVoo8PZ6MxgnDfbLELkQ58oVAWootcAVn5bXAwK59oZnCKSCTcj",
  "key26": "33pbAotjFCuG6nebznZDYNcnRzhxtZtrD9XYo42bsYGNcokSf6AG8RrpyxPSd2LkTEpRGoopkEifxt4EP9y3XsqY",
  "key27": "5ReHq4A72XPUEUWSpEEF5EugU13H7ZseFcmB3FGgH1yrKaNsuvQdmD14QCWJ8spM4RsjT85ZUUmiTbzCQjoj6eZ3",
  "key28": "2t9QBgoVuPj4BChkbKSfyifL6UFGpYG6eiWSBua7iafxe7boW4my73kEQ6KL3rXVuvzG7xuaFnrF3sES31tbcu3i",
  "key29": "4q3Sxf3qReDL9CzySMojihedKqHmrD39FUbVm4KgMjcp15n7WGuRx5u2MzJkW5PWk7og3VQMcH4waAHcWiDBQQtJ",
  "key30": "2EywhCuA3LanCdkpHmBwzBHt5yum4NZQ45pr1CW8J4JP5fK3CCfLm4eWvw6ArSRDvKz9E26chaY3EfCHfgsCTkkT",
  "key31": "4Hrb4FQGsRG6V5b96FL8h2QC1VW4gyecmQYcaADHhLV52rmGWnSrKsK5UekVmPifYi11jjfTKtGzmhfsbE8qHSGL",
  "key32": "5AEqjGi1embaZuWxAfW6XVvBzvZstSk6AcYymcoBu93iQVXsrpDwUurSu511xtSnxsGd3z17pQP7rqB5ei7NLcER",
  "key33": "2KrLwK1KKMMjfG2dUw6nEUeo5xJSwhpmASm5syrSRsxJ17jkyWaCoPkRPEb59598Cea4TjJzpjYnmrhd2jYrki5B",
  "key34": "5bFUTLcsKd6aBJBLjwps3gZLWnCFHYXgQFkKYDomCQk5GiMqmoVkYuEsfQkkuzwSsTZ5oVLtfsFTLZpZcMuB2nmb",
  "key35": "3oDNepPCL5n5nxXzQuJmh2TkZ4Wf4RSa3eickQvHE7aK8ViACQzgV6YyXDC1ehSmBo3WTuA7uGz2VqXEpEXEcr2Z",
  "key36": "3PQ7nribtLRe4bUrxyeivrtjpRD9ttu5g5hGh2FUVTav8YQk4vBz2dYjpd9iXiNdt8hcZoPooSRe5AcpTtWNfhEt",
  "key37": "3Eq9dHP2BbAUQUxWcrpZRLrfHeYKqLiYNyrXMQJuHnDWcTieimmsgQKJAfTwLLKLVeQ3GAiyTg7XGULHmW5hThmV",
  "key38": "3Bm1NzrcAPvjjKDVSokdD5i2e932HVUVzzoroonBH6d28wx3TYsH46RhU8ZaugufoHHQvVHtKxUJJMSAV1pySCCY",
  "key39": "56PcUZmJaAPg9rVtuyeLUU2m74m1kPxNDggwGatfwvYqgjMHTNrwJ7N1TvDuM2wN9mZttGs6G39JJm8dwZSCfLde",
  "key40": "51nF5brQ2YNkWKbvzmkuWDtjQAvxEWL4fdiw69aS81JRaM6FHv5vbDnrDiGqJCsaozVdpZr4cFAhMCQdJJYjRrJP",
  "key41": "4zfmsUfmj4J2DBfzoksMrWsJAEprjhURR4c54MDj37weqEFLxwyv6561MfwtMXYgx58MTUUXHM3jKX38uoDuJ8f5",
  "key42": "2vF4NgNUpJmnMPTuXMweWXD2UJuUB9tP891u1Ribtxqk27x74CrapFExFuk6AyVu1RbW7mprwcTpAr5sx8NZgmpF",
  "key43": "2uJ9it6kAdEM1aEnv32c2te7tcaYis9mfXDXaW7wtaEvgHBmeRiMU6AhBfewYuR3u6C43ySqwFFRD35WTR2iVTLf",
  "key44": "4ZkkhYcedPjw64EeCKHrooU1J2So31qQ5ikozFiLEnyrKR3LThPuKbd2GHurjzZRqTbN8MJz66tsUJQhexkfLuK6",
  "key45": "4zDC71x2yLeEYU3wmHfpuN2pfxsvJRQNap5z1Kr5gxrVSDCrXTTpbkrkZbkymLSZrAXByoYjqPCx7QRw32vf8YwQ",
  "key46": "3YEzk25Zv2FYy7LuVUcUDcstptF3tmFTRqsD9QdEB5kxeeEsPwWHkQnkUJwSunH2D1ZWGnPSJ7dGDmqrk5Hnm8Do",
  "key47": "57w9sssnXhAEc138m3K5XnHD71SCGBbAk7YJwVB5xZhAcFx3KgDeBe37qnxAaNSAjf1HsJYE9PmwsfLyfg2mEaaA",
  "key48": "2dFtKqD2RgakZeLCWudi3iqmVANJW3XgvCtNPQC8uRefN5u2ZpCWjf2PZa4R8mxJqAKg7mEudiErwTcBxBUcaiNC"
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
