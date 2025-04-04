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
    "q31RWYCG436DJb4T2YjYZ9x56P9XsmZ1XDy4MXJAXCbsn2W3LnX4JS8Qyx4KDNa6nxeZGBtsckxro9qpCmARGo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rzzhNLToMCMbxrDDDY9cQQB8pog15DGNYFU779bifS3ZJjzrzCUiLwnmtzHxwZUXbrojTTx9c9T4nfXzgYybUD5",
  "key1": "2hCkWtUGw7Q6wzzdbstMS6ZHZ1M73o3P7PDEyQxDmUBxDoxckrBPEsvrEy3rBpk7sS9eQP8X3d5GrzrMnaACeKjU",
  "key2": "5bbahwHmTMBH4oNH3kqigpj7ETEKxnq1MAnzCMGoWaUFCeq44RUkSLiWsx4CC2bYb3x6PoB3uu4wEhnQrioWHpqp",
  "key3": "3URHcG4UpY8S6S1bcEcXaJ7aY4LF5VzjpjK4wmpjuD2cWHy2kmDCXXpaWZMdjE73WPxjNBtKru49PEnhW5yWwc6n",
  "key4": "2HuXifS8ptNbrNbu7YJsWHUQQpG4KxuN2rHc9ArLxtijqB8tv73iWNtZhqo7jhrdiQJ8bwZc6FsPL4xXZwbsnXKG",
  "key5": "BqbG2DqcLYTtAgTyTfFQGZGgLULCnDqBjvHQU4ZKu6hKFHyLZGWze1SxRFFhXk5jfeK9AWUwL53FdvqdgsRGd1z",
  "key6": "4W5v388MdGYubtm846YLHS5fqQUSF83MLCoXcn4X6es8XkuZREWxo7akbr29usBG46XghhisT7Fzfyyv9v7qqugr",
  "key7": "4Dmyuqca1sT4TpHP91QxV6wjfSzqco2DDHsYZkp1LwaHuar1yee69vEHCWTCvWn2Q65hT9W6oAFjyABoroP5ZQiB",
  "key8": "3AwaUfN3BGHJPPHZfwhSkJKYsydNyC5SH3qcYW8BZ4Ejyy3qg6nZrUotmb5SFDD2nUGk8NrZPFCq9rPbc8F5u9nu",
  "key9": "52hEWgymbWerqfaDhDKdkBmJbWQCnfuuysLvHDFav2BL7Vsm9ARbgi4YMZgGoBeZXRCH89vUMHgCPGsZgWW6pPDW",
  "key10": "2JcJbJJ5a7W3Wqkjg3AHY1VLsfG41ajMQhfEYLwTCfPDfuEaDXDSUd5wCLPTvnvAaRcM3ZSNZXgF9zwKWnuCRka2",
  "key11": "2RSgBJcfdCWYvYfxJNuRdfJRUtTYZUujrYU4fBHo89Qk4aDn1rLPzbXJ6wUXrJdogVgKy6vy9HZY1wAyKCmV9G2c",
  "key12": "35qxT7jyeeUfMF2dVjFoG7uQzfPQXb7q2nGz6tgR8SC8JPJbk6SPmYpjji3bxYoJBDSe91w5zdPSqHXwbsJmA9dd",
  "key13": "31eU12kRwPKuWetMwiuJjjyQauCD92Hhybiq8pWvBwceGDQ9SnXRr2e9BSyjhGpdu2ed3Ghfiw8CwA4cmyQii5oZ",
  "key14": "2RKH51JgDJPRtaMiA95xyEfdasPB8cK3MS2z7t77QPxjHi6dPVKz7Qkjt8dZ7gV7nAmQWbRLJFHwYszerXNtdBmm",
  "key15": "GngmkfDoQt4mkpphcRqGAsWgNdNLST4JwCQtQ53wEWJCjQw6jBsNzrshoZ47BWu3UJLZawxV23kDU39n42uTS7P",
  "key16": "3UnniJVt7LWckZfkwVh6KcRfkuccuNHWvXmnUncfX3WsjoAooEsw7xfi3J2L2g1mUJ1P616WgNXLNARpFSgKJY8m",
  "key17": "55sSFY426shTSpUZKDCzkMjZ88oyJRTDgYJUSs5U347G3gZxgpeE3C6Aq2qaEbTucpaAH1AEr5SGM2TSmMiLVtva",
  "key18": "21QmCeGXqKfWowUsKD3FZEe8XDZToJMGbzLUDa8fdKgJHWE1WtuVprmo4zyUbXdwkBHUMygb79Wmjkt1aSVLYuFu",
  "key19": "5dbJ43xkRdLc5cgC8ggyD1fvCbKWaZaTVXMJ3wH63R3PpKmYyrj4DivvfGt57ArPk3kJNKxu45Jj75hssAbCzNLT",
  "key20": "3n8yjXg5UF8x2UvBSVPMTvsofLhQhEJwoHFxMhEnqicJBtw2usdzG4Uqvq2Xp5sdw5gPRZjkbFVxRcagdSJnKuBV",
  "key21": "2RzWfpVcGbbaaDnKGE1exbypH6FqwigVDJ4U7T8ssAtxucPJBpX6LymTYG3TMW7Zth7y7WwU1gzzpMtbuH9xVYEr",
  "key22": "2d26EMEnpBGSdGymS8aQKsenCC5MCszjq6JVt9kHt8ZJur4wo8w9Hif1uJkfrYWmqMGBnYGdQKXP1NxcvRZ1PrW2",
  "key23": "4FkwHJBrQfjwcTqjziQRzTbwMuM7jJJqBQQUGhLVWoThDbX39UvJKrePudvXWytPG3Ja24xZKE24Ee75iKz7jgau",
  "key24": "5BBie3Ed3RMfEuug9zBfGPJApb1o4LrPF3nGUTx77jxk1z2G824CPK3iYcXHYif6GmhN1JM4aXdccRdeZ3p6K7eW",
  "key25": "4FGmzQUXTiKBT6UzneaTEKimxzxwHCxwWpvCVDyD4jEehKiSWjdWAiwit9f3wduRzyS165kf74qSkRE2chiay4qk",
  "key26": "4fhNF5MkgSXUwgJSBXXA524ByuVVoGmYFN4cXbLjuUaf9eue8NyZ5HQV1U4CRVsQM2obYic3kBz9NcazCWLTtEyJ",
  "key27": "3tfqc1xkQtYzgYoQe5we2DjM7R6ugtD194FQnnvapgNmwZWAaUoTwF4S2QoyPZNsFfhz7nQZo9HJwh94JNowmYM9",
  "key28": "u7B71eEecVC6T9X9S8bXtHun2iGPF3aaboaqymFijf7pEvLosd5zqp29u5ZXsegwtRWsD2bkVbZPzTCiAW8wKsn",
  "key29": "4bRgtHfaQXLhcFu8Vhfkfh99NACMNeM76V5D6Hh1JBSeDoZy9dT3GaS71hBH3d971bLRepSQYCXmciGrSKjHqNcr",
  "key30": "3km6xDrSK8MR2Ueu7VDZBddFq26ZKSaYRCq48sR6daQfnLuQskSuMiuWqsU2hfRTAnhYwbAUrNLPSyygX7rfhZvG",
  "key31": "4f51p3RVfgmc5B4uhYvppTdpfPEi7ELH7wkiHDkeGwgpMM2rQnQRdHF32EqBDLckHfjg45VPcT9MY2fRe3qRq6nD",
  "key32": "MtvwpDYZy9qS6YF2EpycgLNNqn2hVj5jrBooRo6W2vd84F2VuXE6MujVwfHmDqRtc2V3ikbkqM39ommyHc648mr",
  "key33": "k7KUG61wXR2KViS1MEP5cqkpG9CzjvgjDBMxiNPMBbnZKC8BFB1mVQJsAznJKFemLGicfDoYpRGFA47a71HPVGd",
  "key34": "3VfMxbXib4V2nWWdoxkLWJrhe4G5gH2y9q3K8tgPx8taMoeMJyDhP2Bxd1X7yi6SstasstkGmjZzDRHJuu4xicWd",
  "key35": "59Hu9fvF6awUPPD6K7QTYpr6Wg8dREP84iSfMx98V25o5f39Nm9ZrzsQUddx5cPEGxPhsWfWkQY2WcCbZWNjokwu",
  "key36": "5Kez7eJX5erQCGeWR9C79tPPqJ7rctmfJBceGzEHe8rVmJBqX1MhXqrcdhqLRjrVwqMHy8DmQXBHGcdY9EjWdNDp",
  "key37": "31w2iLr8kD2hdEqgMdTmCQa3SjZQjVGzLkJFsh2FjSB1ucQY9XAVHXfSsYGn2Jv1VKaT9DZn8BtcP3Xc8892BTjk",
  "key38": "3NTqmsyPUPkMruiJGgMcQSap5fGbfvidhmnw8Ytn1hxk1nTK4WuGosH9erxSeErCrc1wGUyHJbf6qzEBs94ViVuk",
  "key39": "67HWC6XnmP3cSTDp3m4SS2bRUPmxwG33y2hjtSqazy8qQZQdPwKQvyjBGwGh96d2ZXf9AjZ8XEDvYEcce2r48g98",
  "key40": "2SZ6PwebCE1U1FRQK6Fmk85ZZtgGBsSifvYZtK6banXfbdvNPZRSUgG3tPGef2SPQsE5HbBtu8VD16HgsCfdMU2y",
  "key41": "4PGhf141waygU32bSsADpcbD4N4UpbXt1Zxtv2A5g34L52VetF9DsEadF4HVL9g7ps9pW4rMpRcaLQQErD6TzsE9"
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
