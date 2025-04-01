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
    "5tvcZ6b7c887ok9NZj8KS4LqdEYTRJnemxUCvJifwdn8USUv7ExiN3ZuEA8UUS69atAq3b6VtZhrquCEZuGzfcdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u79wkWDzxpEygeSaBV1sbtkoxmeJe9zj35seZJ1zj2JArih7LEU64LY2jkUa8Zre17JRBPdwbwTj47fSM5WS5kr",
  "key1": "3fD3FXHauCfQGbJzZvn1v8LeHaWNmzjMw1ArYbsLqFw8BVj1YNyHCZRS9fZKk4QdtQu2DRRjSwV6gpDqQHreu1rf",
  "key2": "5pyexJsmrmyfFQ4eNKxtRgXerat1v9a1P9zFvrR5YBRQqBe5Up71v9kgXTm1zoVww9yB6iJren9i6KrjfucoqVTp",
  "key3": "4RhLmTMRUF1bBuW8zo4SfBZ5N4RUzihSergjoFuV9md9GbZieiF7ZfnDHyTg9UZyf9JwAenXpYFPyu7cfihpV4YB",
  "key4": "5nAUGLgXVgELt9AKFKR2RqUZZemGLsD7tjYw6hPb8fJkCUpdmkAgQSz3E1p1anzXdeD8TstZPxAwafUUAcZSUDse",
  "key5": "2CiT57euNbq59Je5tczxoAyj9feksxZLxKhDvrqdGU2Tep3VmPtJKKDfWewUhAk6sk3ARP5ig1PPEnXkjMiqXGKP",
  "key6": "4jVQPCzCFM8fZiPSwdPXGALCnqZqQQa7bMNkKSAW61U5jmjtNEpZ2icL92XTkQCTKzSykhgkCQ1qVEaKfvQ5QuW4",
  "key7": "txyXrN5H6vq6eTydxDupfM2eYyJNBZmQKPGQ56mk9ehuEahXVZkRLAQBH6xasW61gdSymdNhDdg3rjjfugwWWr1",
  "key8": "4TnyCANotiTxWiGY6c4giMbyJ5xCF2L3rd97o4BCyr2WdxiBwt37S1Dux4uqi6F96HPDNBJV1em5btPTjJJFfBYE",
  "key9": "3Z66ad4zKjnCrj4H3TFu6S3b269p5qSqN5PV2vR5jcixPZV7cN99fNezPN5SWGfHUfUUjx6PXWy6tzvTgsQfXgEr",
  "key10": "3aDzPT8L4EgmSHPGP1HD1BYYHMAC8Dk2EcSxRsXuHY5H5kRnLV9hM1EFMMGsj2bMH3v6XVXSwbgvZSq5A1aELgG7",
  "key11": "U6qRBivzeAiaZe6ogAdHjnk3tsbuRPtHtAEf3zcsHNGaRairgXSYgFh7wnGQV8pW61vupC8juQYPVYZ4K7vuhoK",
  "key12": "2BQWhYxuEMD8kueJstkdjQHJMVvLoHJq1JuNQZEAvHEkrfVrJatgPLb6CLQjEiDGRxjeQwfMETL5WtzxN2uVEU7x",
  "key13": "5fGoFkhcThcVPqmPjLMD2ppqiDmZp2Tsb76Lxqa5sG7QJX4xhfWoV3986jxF2v25UTV5WEejXt11SHdheD2pmy7a",
  "key14": "5YuoCnKox7itnKEunC9fmaUsD8xqeEeep16Jw4NezyrCc7jqMxsAQ4naSHXbRpWpS2hUzD29JX96FwnDgveAZJ2M",
  "key15": "5hFYyNYAvK2UqcTXVUan12d8bK8THEmhKJCHoqCgKGNCTb3Fx4ELrS1aPhkqxj1STP34DYcJjZ9GX9d1VovJWUb2",
  "key16": "5aLVeRpGpT2HPCeTj2iQBHPSrxESmNx3s4Gdm5an2DG3M3rxLn6d4rrW6VsVTDCPSikY242BrAnhoFiAGgR8MY8e",
  "key17": "7JCDCDMacyQgtQ4fuc2VBsh7x33ama5uwxArKhY9XJN6dSRR8Bj68yMK2psb51eT75a7iEE2hJohfNzU1bg6Tvj",
  "key18": "2rbfuyQDHiECcJpzQFK5w692qKm79aVRJEYnU7C4QKhmZ8r82yZFrDE3P3q7BXqu44LRS6AwHJgf7tCDhfKbrK2w",
  "key19": "2L2SkJyp1Lsb9tDg3J2vrYQGPp2RogSGo1ZDQZxJ72ZpSqLua1GU2bQxTnTTXXa7YMJ44FUyichR86BUeBoYA2RG",
  "key20": "2xjq33vv1hmVFs3F1CKcXLGnuUAo4NBthw4XsDSKdW9mj6GDU58CZuQDStZg6SECFqsK87tyMB6D3tiyKNSsiQM8",
  "key21": "5EVLYpH5ZX6M6HKvCLpapNEG6TzSzC6cfrsBEagT7Qc2zcnGcQj8tSK7dmcmywPyagaprQqKBfQTG5m5MQELxMJQ",
  "key22": "2VFArPE3tfKSrg8mkE25YPzwhAHUwvGg3zZPstDCkXvM4FBethrAAaym4RgWqUSpibNHbwsWFcNqGFFWFV3x5VjR",
  "key23": "3tFVHRDyeKvpVkmnZ2CMnAJqJwtWwPe8CSsmzAYoHhBuFkoaUTsH13RFgXTe9b29yRkkGC8WSrqTU9u3bh7b7zoo",
  "key24": "2C93rnkpbSPwEhSeSaAQamuuu7VWtx1ciKCmdH7PE1WLtnCBNqacrDJ6fM5AVJz1Sq7H5AiweedrLyWTSnANz4AV",
  "key25": "2XoADEVvVN9rShixktDutmBrHtGm8NCz7tRG76gu8JypDpwhaUjp2GsfmjvrmFeVFTSbWF8kvPFCYfn5a3iM9GwL",
  "key26": "zZedqQj5gXCz7c51SbPp6Yt3SrxQv6B6KsUQDM7MEZAZacq4BggQGkpchtxPfUDpjBmxCGxXyve8zANsrsPHhbL",
  "key27": "3ohdvALnnzNiizYX1JPrWEaGoph6yuWMLVKA63Ttq9C3z2Mwq6WR8rSTBbLZUfaTm7qMgQ7KVNQS3AMxUHJhjdfD",
  "key28": "5sPnwV46recRTnhQzFSFF8HrenVvxfiCZ4YXncGVswBfXoypKVXwLyL8KVniCp1gTM68cogCaQcuBmKV7r5csE5J",
  "key29": "Q1h1UipHPRvWDaL6douajWhddpJRusEj6RBkB4bKoR2RqQno2Y7Wi8rMKCLXmBCatXfM4CxkMYx411U8JRGS7bG",
  "key30": "62HPFE2bnwfer1G8SvQSMnuGhwA4xV4DmHta7xLwPuw4URhqLuBcRAUsVrgDhWH2d5KsyZXi5Hwbep5nitDWPVc8",
  "key31": "ez46sg2Wz2j76eBAGQpra8ERSBi8zcoohBJV61hcD1e6J3YjtEqantygAiLY6t7R8mcALjbGu1A5BVqgzSUKA8P",
  "key32": "5Vq3mEi9nBtFj82eJWmDb2uV4xSVFbRCP9gPkqGWJ3y7JMfMNCqrs6PgcVMJ72hdp9Ew6tycdynKYycANV8VHNT6",
  "key33": "3vHEj9MDoDsSR5sbRCD8VS3kK3jCe4WS3rzSrfXq9VhwcZpibCjBcymnFEpz1DAiUPVCb16RDbKX6TwackjDsJuo",
  "key34": "WeGEHPrKLn18Zo2R1eVRpUp5H7uDQZXiuWESAcp8rPVysH2s5NcxEhDEqGJPTxUjBorNhr7ayyHUJDJ7AKmyohj",
  "key35": "5dgSewFKUSz7GqzzDxR16vkqADKSKLgYSHXQhe88mRat3hDPWU7ThYSSk4PhQREEB7Tma4opKnZKfJb56VsnEdNm",
  "key36": "4HY3AozvHZA7BzgfBGDzpsGwq8xjhAtAKiP6NRAxDSkqzBGkmvGKEfc5PySUnp4TGfvyqhQC8kvSKDgxvuGNA8Dm",
  "key37": "4rSD3t7UKTR55jPH46SxEwpPwTnmgTvMuHJkDJaBpiMJw9omaa9CN96wP9SunKouix3iwuSRBUjyb1UGh5PfSDEG",
  "key38": "3mUpjt89m6jDxZ2HVBYtdZyyABHtFps8kNn2mjU2fE9mMgyoyszMG95NjAUkuQwn76aXFL1rtDBHMnULtyNXZzXk",
  "key39": "96byev3a89bc4Lw51ySpFNy4bofecdsDrzDF7fVyu8cfTFuFupnFemYzHddVn4z8b2YqumXkc6NWiQY5DLcGK6X",
  "key40": "4o9EJ3xpJ3NJZ7vss7Qv1NbutzzSWxy5sGs8FWe1cqLaaakmfcGDcUDDkNiPoUf7EuC3EjWqkQunBHeDdcPNH3Eu",
  "key41": "5rQmeRa7r3ztDKghMH7awfZurGHWArGKd2mysdrWFNxZfNB44RgudTAnY2KY4q6akBNKpXzoG9LUXVrADEJrk9nY",
  "key42": "3rarSWjxS2nrWE5CjhkJr3ndfwdsK4r6vi5MccBi1mqG7RHciYbPLqfrKVuKftqMzJPKr2BanwJVzSNrnFvBdJ7d",
  "key43": "RdYjG81zC2f6DSSvCXMfvGjAFuPhfpC7G25yXhytwJ9nLFucVGr5GKZWr4QGvN7Bab7ahEDGm5ZvyQTa29zym3w",
  "key44": "3TgPd6T2gX8LhymprU3VmndBthk9FLyjAtZnjdbWvfhMe5CzWhci5c6oMk7YYDrGwbZnuNQANpLUcU3svY19ffq1",
  "key45": "2EKiZdAQcU32Nu9uhyNXWRgfNa4NDqd8aJmKxsiydnP39WdPUJhiUVErgTXCcVx2aYB8e8WcRDkqcRszTuCxLuVJ",
  "key46": "2UgWT4gDaXd2MWgRkoB5B7vTPViENNaF7Ya28dZAkUsLNFJwEeAaMhqqDVChjKqHfNF5cpW7kn5zF8yDb8ffTxKr",
  "key47": "5GECYxJ4W3aCZZeDMm9Qdshh8wXtKK8ApUT8wQUaZrq4pUpDVU7pBzT1fdq2sdwSA6C9x6B3Tadv3Lkh2JbSAqhw",
  "key48": "5aZAtSneCu17SCtSMyRMrLY5tWiBCdKUcFPu6etofcKy3Wn41UqFBozEKh7rf4dCSwUrdsJ5ocHQV6KqPY9K9Pnc"
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
