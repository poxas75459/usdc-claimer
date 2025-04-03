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
    "3ks1SWzVHNqCvCbSJ6SVter4i6gwsg6vGPMyXQsCBFudDTLCZovDM34QE5JjBFrTWfSTn5EwfPa9nd4wYwRuALKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HcTd5wcve15Zoq3KqQRnyKZXqRUCmT8o2mqGrdBDdCxxVxQRd4QBg6n2SEx3EQv7EekcgEDUZiH1PqQHzMXTF47",
  "key1": "5wt7FoHe3sq8pqMT5k2kifnq55tKeQ76NtSrcSRJqTLNLzddszExHCemMXcKpcYbzD7grR6U5oK33Xw83S7wpzsp",
  "key2": "2xvsj1M1q3gEEuByJu7QWXNXzKDLY7oYtnpnzVnGo4J3GVLytRfhqpGM48d1Fh2RU5RMSxZj4sAZodmSJGHGw7Bg",
  "key3": "p7BbhVD3R2YfKV3SsZUejjuBMrew1wQSoDw6duSdusgax9UDLDupSdC6TtJ59LqvMujcMfpLJuucCzoEQMmvQPX",
  "key4": "5c38RLaVp7arrdLPrRUjC3JbyaDyHEt2hcGUfGfaGsCo6Sn7S7JoFDwMoZnTRD2DNJfYB6fWh9nNNb5hFKDXsGVa",
  "key5": "3jBMSpGMjAgGLJCjKZgbToo8nmircJb1X3tX1reHkJ5k65SKJu6PpQzckmoQohz6FBPg4AzFBfMcw1TEEpS55u1Y",
  "key6": "2xu8J8qnFxw9mzd4sZ1rS2eP3usmQS4F6sXvoqUjojjhotDawnwxDXGGqVwUm9uMHDH983hd6aNjutvJovyB8a1f",
  "key7": "LC72y7gNZQToSZbZZeHzztm6LgEP9p1yjnQrAn1qzt7tUn6xpgufXaNQjPLYaEMvoArbnknx7ZKsLztjap73gCG",
  "key8": "3rixtDCp2TjStHRXySzC93ETgAsgDDBsw1cchT9EqgnreVU3isL6jnX4cuEKzM8tzotGUwizU4a5FBKrficToxFS",
  "key9": "3yvPX46xaydYF6c7Ym5htUMX3kZtGXpFqskLLqd723C4b37NWfTjQ5aXxbAVsc8RKyoatiKFKgAc1vdC6KjgK3yB",
  "key10": "47WY8oPtcyBeFkRXAgJUWQdjbeAQrdbnEFqsAzWCBAmg33oYsLcaQmbVmeCUgYw9uyM3ZmHDoMLJSr4ifzpMb357",
  "key11": "4NTPkA2CJD2xWCzmpwmpvm1ADAyuubdM55bTnE1Ghx6rRSMD1v2aJUL9Phatw9QtRveRYC7ELfQHFxK8f5ZzvY4C",
  "key12": "2RZrPN5uN7bwrreaCPSUhEccHpwDWbUZp5zK4pX7ZmHueP4vumsfgvhe7cjxQCTpD9ykewZAR1NRiPU83GFTDbnN",
  "key13": "ysdtYYVisbCBzTUxZu1njQuELGeyh22d3jTRfaSDK3DneJBfg3MNMYCFYPuWuV7AmA8gKdefoPYmFa1ZapxpA5H",
  "key14": "L8ADy13tn9E1HNbMzgp5LuGorS89cGFVa6S25XvQ9FK36Hnva8YNxnpqD8o6rhzJ7p7AaPfmfXHT31YoAhHPJnF",
  "key15": "41TMtrug7kzaTd8akML5qYz7tukkZsECLpZFp34eTXbSxVHZ2pcgp5cwL3FVryeacBbDRJwTtrDiA3EH7xhMQeuu",
  "key16": "4fmmEW9SoJP7NXRh2HRqNPhNHjzb9GNcbx5MJ5rcmPDNjSpyxT7jttknd5NXsQkz99QEcDFg8TaBUToquKbcyEjz",
  "key17": "VSfw81ww3E47d1yFU34KtCnuJtpQiKtC2cKDNTYm4pPy9WaRQWcb2T6UtfXuzdKiXbas2jNrSDjJrht1EKp1cY2",
  "key18": "7qT4bvFgwf2WJU2YBmtRg8r7US9oZtGW9PUtuho7VA7vYPGG573YJcRwda4j9MPRG9vZCQojSmRkSbtnUFd4bJA",
  "key19": "4eV6WHJox5ixGUwHg71bc8ryrRt817fyGS3y6psU9ehtebfdWHusFxCPSpQh7eEmQeSazjFq5shDk1HDaX9XEWXH",
  "key20": "asg667hGWpeAqanTkGMmBwe87xgrgugQ7a4iEnCNjgFt3crrWvWEKJaCyCWPzjtYjBkP7H6PFm7BUVeG58XJFD3",
  "key21": "CKTDoLvCMzHMhxLH4pMrkjGWZXs6LZtmRDMtoNKTt6aEnV6YqSH6NvC147G3NjGqDAPGWSykDYNn5XVJyXj33y3",
  "key22": "5YE4RJNPzZSv6WcTXf5VwvVGQPvWCsvCCVQnMsaNB9aRN4S7ubCx6kirdB51LmxDbcpNCNGyu1Sb1JU95Mgiam4H",
  "key23": "43q7GpGvNFfwakG4bb1juJVFg7h3mRTg6cStHixbvwyd22iUUursWhyPVE2p6dsptJCj5TNXgDThyHH6j1hie9Es",
  "key24": "3weg1T2cscBZ2qJGooT2yP2UueyqAjoZNmfNChjHibtVgfcPwjyCDzdPvvnh3nrHebLHG6cMkNUmumKG5yG6JXyF",
  "key25": "2WsJaUa6t2PypRZxqgrdGMwkPjqgjHBh2jTytz7UtA5J99fbvVDNVxwNJQqvzDNXy8dYKK4LQM6gzXH2ECVGFsSj",
  "key26": "3CFexYrU4ucheQPdZakLLcRWr2T2FnXm2scx2unP8So3PQ416R8eS5W2WU39TE5XvXN8biZKk5rQ83WU1g35ytvS",
  "key27": "5R6xXDmuqYX6rSk9vWaB6FCmSbJBjCErydK2Cxq9sGPERLEbGMjWBvLhTBVVE5Ptw8gyGDWs5RRVQQxARB7q3cCh",
  "key28": "3kMBJPiK1PitELreYE3My1dNfa6yQHZ5HKUt5uYAbKKPhpV2dLJmeQcU7ZwxZycfXefL61Cmm1CgxfRNhVXxnsbv",
  "key29": "27zbYWx3r4bWpiQXuGviXaB9YgMtcpza4JfNyYXi4x7Ys14edfMG94iiUahqZEzTxYGRYKV4fCj9NzrYEWk58fio",
  "key30": "2Bdar6BdB6SDHPqBKnQGGwrcuC3FaY98YfYFE4Dus5kuVBJhEm3bBom7HfNL4KoHsfB8ZAH2bCxcVdvseBp42egQ",
  "key31": "5sdW3RDBSxqnT7YgaGX8EjsP8uKkBsTdf8hkamDNRrUZpnrMBr6h863fFa7ir2iE2cQE8NvGbWPjf9FKJMTSFZSY",
  "key32": "7fMU8GBKmKoiorjbiahBotgubQkYDWUw8vDhhHpu8zwhPwvKkY2EiXLMGqhod6DJCkit51wgBhq68FqrJ91ZfBd",
  "key33": "47xgzGzoKd2yT9HhdyPJbxMGafXRJCPCFwfCu5taVi9xepNjGPKF5W9cUXtUogspynuH3jhRWYJ5Vuigi5nqfErF",
  "key34": "2nsao9eii6mjaRBG7R9HrQcd1GqVhsKL7PEru3A7yUMQLFbxfSDAgusGL2eXnG3gsKHbMTph4BXaBiAycd2WtLcb",
  "key35": "4wEqVKZsWwzaxJG2kp3MH5y4d3iByJ8bu2NCv1SRzw7Kp7oH4sZwuBNNLMoRPkJesL1WNN29mAT7NapRpBefrjX9",
  "key36": "KtqdgK4cbubFunw9Zetgx37cm8jiJnL1eWA9D8dJHLGEoAjehBypsnG8DgKKhGaxm6LKRUpgpJzT8tBBXgcqaik",
  "key37": "3pwCLQxpZs9kywjD4NaoQ3SSRhkM6YA54K3m1NWXABWNVnJuxVB11hxBXfNuYUzMaZiXhUJPbMG5DDoAsdDm7hfi",
  "key38": "3WSmhvNdZDqWWxt71gxQi1bG2LNmfuqvj1qcesWvHGSsy12SMcQt3WPAJwjjt8iqSaHLUNE5ejqb4vjwm4xiRxMh",
  "key39": "5eUdWHUSKZazbKuPX99mp4tqKCJstVHMMCFP5vz8ZYvoqR4bWc17PTWNwTZvw1ar3xKQgQLdRgfdWaJNHahSoiYo",
  "key40": "ttQnYy8Wz9gG9x4BC6Jo9QCTbmsZzgWs6Cf67Ro5V6o3pd64ShLrf4W1sCGfyMb3zGLZ9VShsxDEfFPCnzrdvWX"
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
