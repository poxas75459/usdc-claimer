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
    "5WJApY4vodKaLpiSPTp2H5ztCWvzDj1Gm5uMfo7nH3QcAvSaW5TA61ugLhVu1YnddCdxiMfAPbfpZvZm7JJ3Thpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxX1BBDchLW6uy8Kwj24HEeXfQVdxJbgvEiQ8Mu3G1zn3dXTd5pzj8rtP3Xo9HqRhdom81UHHa3i88xYnZqhTaW",
  "key1": "5uZppGGRH1HzoaY1twRd6Za3fa2JbjyWgECJpYEyKaeqFZsJSgMov22VhEGzz7kufkGGvW3D4Gu7BWMGwY3FuQL9",
  "key2": "DphASMrNor7MWRSZmnCaC24DiEV4DnZ9LpU1tc2orvs87qtsxQFKUKqktvhsUGyEFkZoTrmbd3pg3mATdXUp4JM",
  "key3": "2yjWtHxpeKkrMWnzuV3Y4BBPQeR6xWkbfvrSmHEDMW28dtjWJLWUFLCVSgDFevzYXwLZZzszP8XoLKMmtbQXQz2R",
  "key4": "G3RzMGt98EGxPeihhS8amXNL3AxvrFpvEHMsHy64BecX6CmVU6jrMoDBf4y8X28fPVRDiCZWLoi29p3bgdaU8m6",
  "key5": "PgMqP5bxssUPC2d5DzVpLfH1wQeT1YUrw3Pkmi7TZLoTWaE4fHdnMBg5cYCFZt9on4yWRgYS96jPFMsNwDPFnyu",
  "key6": "4ZvhuCUXaFoWoYLGnDCRFEuiwEwM4KqAbyAvqVro5etxuLoXj9k3Pc1bKqn7eo6humUYKskiomvvFnnguSMLc9Jb",
  "key7": "4Q7m9Fbr9wfJRfbfPEBZyENfqdVsg8VBzvsTGz7qPoDyZDw39Gx4jFz7hRTn1FiS3K2GWjXSVjG6EdogC5LzsFdT",
  "key8": "5fqDP5dkaVVg2bfnSHr1ACbAqAQQgqh3yGxSo7Xf5ScFxW1mbnGMQVt7GdtunEDkUSQFxVz23Cy2FpXftePLJzyh",
  "key9": "3tW3yfHcDVn4WPuZyFZQ9g1AbLyaVJoGN9AofKmKBcpuxbjdsUDUBKzYEdq337XZxiqFReRRj7VtnfaiYEBbN6NJ",
  "key10": "5yGxygBC5nXi4yhLPUTJNqjZRsmb7hotm9hdZA66sPVAYnfomp5wXm6kjvY8KwfvNLVkhbLq5SB74QNgxguR45Y6",
  "key11": "24KbYaFbV5mVZYxm8wgut14hfBoPYmTSpDHADcFXgmTWNq6Exqxh9awPfHyDqbjFmpRtN9cLbsvEqRDDaX1joehx",
  "key12": "jYgaxmGA6hJqoGTDvQ11w5WnvtvBR7A9Z2TwJdHVRzGvMfZgrTc7QDfmm7fkPyw2Tidyag7gwBDCbVwFaCMpVgT",
  "key13": "YBCLwzghSNGucD4Uiu2WmM1V49ovdhAJo2x27TzX7tSnMiDWcR3Q9PRqpj92QSe3nwDFfCGXQWUfd5P5w2xx5eK",
  "key14": "4jc3YCe7UxKHnXghNRP1aqvB8tRpVN9ghZ7w81wLGG9kdkhEKSPNgCYeKLDcqhpWhSkbtQWnEecFvZ5eyGAZZtto",
  "key15": "ThbG4fsBys9kK1pxRCGKmTK8XeVLhMEFGurKBk3FDX5EFGs9CnzPLi6de8KxUBQRftZkWnPkaJwbyqTFrzAcG1w",
  "key16": "5YSD3B7XuqW5SQ7VVmrTsBbtij9LDQA4cSptr9mUwsRZ7vshSusscvDnzyyHcgzaY9pqxs3b9Py5b52tPfLMHwzN",
  "key17": "3fyHmjL5pndtHoAsEur8fBFbEt9Daw7K5J9z7Aza2bHU1wjY1WahyzPFBvNyMRPBvbn1QoUpBahZANrCsb4Xgzfk",
  "key18": "2dguR3MHWq8JvjsAVdYr1UFHGBbxK2usaPVcWABuEwZwJ9fxw1BpwabZDorgQKHeRPcgz2QVA7uNNDKLNHg2SFo",
  "key19": "21p1xgHWeLUBFrGZcr82phR43ogxjHutgF8SCBxDvZzp6Foju6p3Tu4Sv4wdLqtc8npb1NXFMtATSm5bv6BF3Ujz",
  "key20": "2okPNH1PHT7aBPVkhHb5tYreTw1WngrQpwwBX9FMFPYvTQp9WNjmEZdbG6XHM7Aw8sQJn6gkRK72HXm3Ha56fipW",
  "key21": "5Y18hgxkybocXPsJ3aHtpT5URsMYWXH54XD9ZtJfY7CWcp7QpWDEDNKH3KT7fW6nEGuYzD5fWdQEasKEzH9odspq",
  "key22": "5f9xrhDmKwZCMT7xYQpTWwGA4G5A45R5TntedU2DW6NhDpY8ZLWUMQSbq1HMTMsjmrds4dPTdVA4JBNLwfBqbyBy",
  "key23": "57tCR2AEjVsNHxGkQ6UfQyQocDT27AkLgYY7bAcZM1usMvkoYumyXKpRKpncAvqorBammuNeTPWtaA2t64oZ2bVR",
  "key24": "5AA5b9MSedEQpNSmVZkYTUEV7smTWv2f98MJq2aVcZJmLQkyhUi2vMH84Wh2CYanUea48WzMmHkMJcL32w9UUE6X",
  "key25": "2r8FuKaRHUXgtZNgnbypQ9ZxJDQ29S9SPonscUXYyXJsHBmamCYE5oXRw1nPFKg91mB8vs1iSVqAjFdKJiTJR8Bw",
  "key26": "4bZL381N6hcdQQN9GBL6hjrL6sYgyMfZvW7LEsKwJCFciXu1T86vRfTtUhX1yfJwXuBVSmToU3KNgWGRjbAJwTqW",
  "key27": "61QR1P9QfkhXZH8DueP243znyAb3RPGESJ8xj8kJLdkYmEnryohGDmQwMJeUxbuahV7MRhLDV9pTq6P9mXysVpCc",
  "key28": "5TCEJxs5MHkDaCTaebyQqo1bZEnvVgjNMwceC3zNNfb7mEuwc4bwyrDcoPFSjpS2Ty3D3UE2MoAeE77wyuPn1XTJ",
  "key29": "5Yq4GjCnn5Tp2QdF2M4FGN6zo9eJUJeRUwQcnDtjoYA2YuZGYpBzRfypvXdLXgGhCtcNFpkmurxMxKiqsLpb9DjN",
  "key30": "5RnQX93RzqT3xTPSEFC8jDAMdfGnFxZMAiQL8fRGAYw4XKWEkDUQAZ9Gas8dJfCpufR2n8endc9jYsEwZmLN9FWH",
  "key31": "3cbdCsj9vptUSrCAePvyZgFC7yk52UNyt5d2eNMhPcC9SXSeWkNKZRvZhwipcZweJ8Te6e6csXrYw4v5pKK754jC",
  "key32": "4gwvdkwvDVVQDZmhD1aWqiVfy2ooiQ31jm46S9Ezm95McYztc7zh7G34BqSV2hsABGtHTXYM2WHmRgaVNanEFkyF",
  "key33": "36qcrsQkzpYcRyzYtpoLUBTBCUNc2X2wmS4zizkwHQLBeWb1AQ3DkwPfAQhQd5Ca8ZJxGJBrqNSGdHrkXRhRF7og"
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
