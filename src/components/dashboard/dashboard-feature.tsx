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
    "2FmHUMisP9ttaNPE12v8ssMeA63fR11XWqHxELykn7fzu3YTQvMkvC65QbiW8KPkk14P1zKcT9DeqY6xAmA1KYGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Kj62vKvfLFVX93hiHg7diP2mNsmwVEqgjKjktuex7hBQ6T9775LQs1WxzPfH4ibAPwu98NhEhjYLYYAYHCqbUR",
  "key1": "47H8M4QUwwASBh2vcR3C1cWv1iUF5qv7rTGfZMwufeWYLLVKYF8NXLyxJda89GgiPNW9gCdE8kwLjJ7qCpTopvBM",
  "key2": "5ip4ver7FzqrcSBpQ2kuXYocNm7ZY6EDBY3ez6YxFTNJwgajsPnrsXGr9KWkesaqai2igyheQJQjuqbHkfp618af",
  "key3": "xtFndg9Vo4kS43SkvTfajvPDuJftVMGSL6uq9BEd4VZDGTWvvbYcSU2LsDrZLEs6JZqcyCicDLrhB7ibiksW4xJ",
  "key4": "3sPYfnWj4oTBXGXMddHX76WTMZ7mgkw69FwqUkpEea6xJEF2HcgcaJmEYwjZ1QvQQEoZseaWPbkDXUmQ6aDi8DYT",
  "key5": "3fFJqzzCYj2zD41ovfeMJGcBaUxXMMKAwCKsg5YgdSEre6JqkS6nfxJVYHPLD7HHgzoNjNDLRVSYaJ2od2PfwzAg",
  "key6": "5LoCkg8Dgejed1tP4YE4YMxUApARvqdSzogQghwDmTbZrZrDjKg8ybGfyC77ECXA8QhSb9NMQir3i3G94gNpL5DR",
  "key7": "595CxzWbiifehdDo6fw5xjrN4DWgYHysrppsKJYuyKnBA4hn7SBsM9gRbhNV5TD4YsnqXdKsmJBA81T1kcFPfZyr",
  "key8": "4vGwFrc9PKZHDW1bK2pcfg2Cdt7iGHhNn9E4zwJZe56CN72557BFMKp1QtSE2ma8FyUvJbVG5MNGybsSx665E1zJ",
  "key9": "1JwtxwJRwsDtzahGn9eAZw9PF8shv5ZHZ7H6rFS3Z5CoQnKeUXMYm11ZJqLWFCyXbm7aSF5Y2vKuQLzko9iKbKf",
  "key10": "637MCxaPem9EwQk1V8GykYyqeEWVjHFESKZHezSD5f1KtHfR2nPeRs6hxB6ticfjjQYjvn8bPcbjskqrcRNaztQY",
  "key11": "AfXJMMxTw8gUWQnGfi7Mfepoe6nCxMVE3PHViSkCJkdwAxhnKYCJAQGchy2oRUunABZ9X8YXpS95WXzCj6YfkoS",
  "key12": "2dxRvQhc6dYAHay6vaAGF3GUCmukDpjPXTimqYg7gHJPWq4gbfNJbcZj291e631Qfd6kNvgb2oCPesd7TsoA1Jho",
  "key13": "rtJGhf1fey95jGjMcbUZFAojQZg8D1tb6FG4has2UwCiGBpRYi3CC9dR41wzxKKxxs5PFsq97Acy3obackf3hRA",
  "key14": "5Y4kZV7iGn7SGM4DnCVu1UaVeZWXrUMca8iHXdd6GxZAvZBaEDZpEB7zLrzbk9h5Z3SYR5zpF7qDhCV9ffYcHENg",
  "key15": "5CtGrumHFpDvDHpdGN4dfXT92ESa9G8cDEmZyjuc5hPbCpcDMYsTmCJFxx8aSQUVQHrTDYGbtkf3LhY7scZDaiQ4",
  "key16": "4uDtTjnFwDBgTNAJ2s5peDrFT4ngs2A55v8ZTD8FXafGy1AzMQM1Z5DQcUikSgwvHF1cYBo6KaXLarQFavsEUnxB",
  "key17": "4VMFL7n9mJBvWEk83pLuMYZ46W5uLBEPWFvCs729vpqXWHtrDTATAJ68vWSp9CRUaQkRpMXVZPx6wqUjAEg8yzKx",
  "key18": "iZxoVHVVthyszSZcHhSNgr4vTwhaCMLN4NczaL2Hg6J8pXYnUSP7tj2qzUhFScwLvGcWRyfHRLkqwkBoqu5Lvab",
  "key19": "3Hz2j569qcXqtzNWm8GUKmYKyW7NLYSYcu5aSMjt21A9XzNGjNfHwokYdu8mAgYh23ubKkAmW27WgiKKgnp6Tb88",
  "key20": "3wAtYx5EgRUqK9f2X1uUbXsQcaAE9rq6ejm8a2jvgSW7ZiX8MfaLvU1fWrc2tNpMH8geL5iwvvsgwWL75aZgu8x5",
  "key21": "7a2rgMwDxiG51nrG8AK2WPFHeTkwW98QfYwhHbjtXB9pGy8jtUbgABA3SpmNUL2UbafbHpxFGxL1VnVobMUYLVc",
  "key22": "7LwXr2zPHATN6iCzrdy4G3FXyr73gVr3EQrLo7peKxRBP3zeVHLn1ieUDnjRXZWAsj9diBzwi5PbB7ThWHV5Vvh",
  "key23": "31PdDBesmWf2thsQCwgJp4L54jirLDK5PURz912MqaCqsTRy4MutEUSwtdRNbDrkEZutq9euyhcs9Gm2YU4E4j7a",
  "key24": "2e4Hom9dGhJSHywc9nJHW7QpKT1HVLCdN1t1CK8PqmyyYWpwZZEeEytPCVmq1Wr9NCfxpRdM21M58o2EP6fPxzbA",
  "key25": "3UyfwQwReB7UG4kXVMFbqjKXyeHnUZmN3Nf9Gd7xPYG4qxd3bPSiqrxZ7YK1BZsJqsdMXPL3c5pX2eGm77Qt8JEg",
  "key26": "3XG2ibN62Q8GKLMXVjpCyP4eKambV1g4eeJKfw8VaF4iDTsXvsv4G2bpyd3FTpjuE6TFpazHqmxAENPWc4cb6SQS",
  "key27": "4up94hbwk3MZengAtn1itdzLiLvbxu87sQoQNneFBQAjCmNw89VTuJmKKAkjbW6ozAfLkvvvHKAt8psqimMg1DhP",
  "key28": "2Fut62cCDfTktUKxRkvdm1qGnTxirZirmiCZXyaZANaPXcpNd968SLcK43aefEMJf1zikjqZYpkVuZGm6xbdoJ8b",
  "key29": "CudAifmkLASqFMQRr4P8GANWvcowdohF8YQmZQ3puSikRbyMFxwtb6KqBGCNMsmi6DRZYXNFAJTEjd8VAZwCMvc",
  "key30": "AN7aPGqMaLXCSUqkxbVCZHekSkSNVRwi3Luo7NbjzhLCJQv35qQk3htXVK9wgmDJ7hRzsXDyF8DfSyuMc4w6vHw",
  "key31": "gWfbpSANdjMqsp4vyirhkyKjARDkFsGAFasFH9UJciA1iYmcYGCsyBPZWcMGvkRBB4Qk3xqEaiixRV5YfuiE3qs",
  "key32": "5YV9xcs7BmugM5R3roZMio3thiAM9Tq4K9Deg964f2BAQhutDiWf3D6EPF3KTtXqK3v2cQqySRoJvJUtdJ59y6fs",
  "key33": "3ditucKFE38jQ2tTc4RDaVzaM5AZHAmrAZ1HBrzXMtGLCxYAMdMRL3Cz76sYFY2jzXW3YVaVQQxxMPSvZVqGF5A",
  "key34": "4QcVkENVYxSvZYG8HJS7nDb9QKYvh2kEs649LaRWbRm5rhKQzuca7iUXExTr4CTCY8HKdPUupdjtg6zK3tmAMWHz",
  "key35": "3vvSrr5pt9KLSRPr9km7H8XKhHNS2oAoWrz4s6MTfs8Dmj937Jx2quSt3dSTKGxjfJMCKSSW8Jxnz3Yk59bJKCik",
  "key36": "426jP4L4JqUxf1ZNdvhhMXd3iN9uqGJZGFwtNSYfSWgZ1MXTkSshrHd57L1kS5mEyqTwvnoYRPXdMRL77kjhHkPx",
  "key37": "WDSS7pPfaAagWvkzH1kqDWJyfcykwMnVRsPNgR9bJebuz5U5EsUMGJ6gfwXL2dcdc8BSKdxu7wifP5rpWqRziX6",
  "key38": "5y8zHAVoP1MxABDdAemrRVbrj9EBNbMf8ezNBfFzYc7AR6j8ifPu57Lm5fhqZWDWnmNAnSR6S8vKdxAWNFEsV4Z6",
  "key39": "ycgrEyzUt4s4QASTTSeGAkzpC9aRri13QXJ2i2PBQy6AteNeUG8GvSbcrVvgsF34ZH9YmW37XVix9DPq5VtLJEa",
  "key40": "528yzoHuHUTsfRT9mzgqQg4RGLVpLLpVUKmsHKGba2sgqojk2rf8rKJiziRsxRRyrfSabtafbnT5ewmQnk61QoM1",
  "key41": "2eNAyooybVAvJ7MD3jhXrG4ss4YHsRpH6Vs4BgfLLhXP8ajiURcec5A6sDiy5DFVUR7c9rDaZts8ENvQSBsa1zzZ",
  "key42": "JFhqmSySkqYh5bAbXvEzDNTMeBaSn73Do9K9381RCNiwRkZT34zRWMhzHWeSeJHYTyoYAhbz7dMmAudpEnoW3fk",
  "key43": "2GK2V6ZL8SZr44x1w6HKiaJ2p7Miys1gXsfUQdMNnoiChHh4g894G4ixJ99nN6T7SumsndYoxjjANeJ1xZxZoZBE",
  "key44": "Ew89F3iDMUqji6DkcmsBD9xscj6YXnMkcqmrmwxbi5N55xsENBos4GmZT4aQuA5p9ebLwdDa5qBiRWdaswBwJ85",
  "key45": "2Y7rWqpnhdPxmLLie8vy2JNnkPRLSUA7Dz4VgFA4agd28b86w5YZ6KiRnPxwMMtp4SxnZkdeA7ZvGsFqe48XM5wG",
  "key46": "5VZ7CHg1V3p9KTWbZdFcmZcxhaE5pYVd9mGRgDvc1Jab7pXHq28vD2xe4Nk4kW74eznfVoz3BCHhK9uA39GK6em",
  "key47": "5QGJZXRsY6t9pAi7bCoc1zRiCuNM9MyQAb21tWRJNLLZfEcf9zJwnn1CsHRnHQQD2rCxVzSUQ7PbERCypN3zxSBD",
  "key48": "5et4S85cDxBGvx7PJuZhCxyJANyQwvSVQFK4X87Nikwyw9tK7huKNbNd99MbtqC7cBdsWxWRojQv3qQC9WDRe9W"
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
