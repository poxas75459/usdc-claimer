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
    "5NKH3oVe1PQTgkQAwB7xCMZt9TawZvzrWVUZUSUSnZ2i1Bw17JiVAyw1zEXd4RawzoPMWwXxjdLMSNF7x4USFw1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGvPspRAvErrwot4h7ksFyBEhNWne3HuDyPYtpgxe2ZL1ruF1MFRX9Jisuo2WQv8Wnuc2Ceh9VEqxynX4HZ7MaV",
  "key1": "48ha9BajHP9yzeGudaAE6TzB4huzzw2cYtUpgZBkGhvZFHX472Pu8fujFhmT3MbJUkgr1vfDqTnVdDzpb1f9QQYA",
  "key2": "ZknggpFaL65s6L2zJT34GpeeUYALmF1miYA9pr22mbRhLPQGrkZXH4Xc8qpcknVeoxVJZPCXfPQcukvViBtHZ8e",
  "key3": "5Ujtu4bwXXXmK7YLR8QJNPwyjBZgZZsdHBEJXeB1Xu1soxRrK3HKsP9kgtbBh5z3Tu2ScDQbgG3RGf63Mq4iNb7Y",
  "key4": "2gN4kX7YKSRVicZCS2dvdyd3aJccnbTe8LP2sgTiJQKxm6DmGYABcYrchRD7a5idjhW216nHJjfE9XXNgoa2CRgb",
  "key5": "grW2d75jNfnf2zUsXhQx6A9uW4W8pKfUNkvtd25atFstVqcYikPbqFC1bksfKcPzV9Fy7DyKxNQPM6uXRvFpN8E",
  "key6": "4KTheqyHwZuRK9ShXnGpAh9JhchuJB6z2hYLYX4QNodQbFMrKuXzHGGjRp3PK4pWevQQ8iuwMin5rwgV83QFRC7N",
  "key7": "sGQPSZ2pKKuTxDfuesC3KUYRLAZsJJVTsRxUN6TtdmygbMZdch6BW2SuaZxz2RYGNpG8cejDmkX5XY8WTVodEkv",
  "key8": "3hKRwtp4mrSmnqLZese1nc2348oiF38CbThKnzKENETbYcfV8UMLjk5YeH6DnxEJozTbGZSvE6WcFA2fgz5eoYmj",
  "key9": "d3CTfW8zipy4Eim4quzQjqa4DD33KRsVPRYpx9y6setJZjWZBab1Q8x4TQt61DPtU4oGxzufcWebSNrgPhnwpoE",
  "key10": "3ch27beV1NBCFDLr84p8kTBzZMfwLeTQRfReGLq9sVXUED9GzoW9RPKUcyHz7Yqk5uHcJ4DXCMqiD6cieiE1C6Do",
  "key11": "3gaMAmuLnjXtNd6cBC6guTTMikYXsjYKbEUVvtWxeK3TQySZutGUDAnAXHGn3N6QgdfwQqVFn2oq429a7yBCEm4L",
  "key12": "66PQMuHTmpqC2z6UjDV8rsgNVaXnBsGMk3eNUt3zS2TMvRZSJ6dZV5oWDAK3Xz4qygzxapJj2xdc3eEsEcgXLwQg",
  "key13": "4oEkwe8M3jC9pwNrRh5Arwetvb8ADqVA8YNu83MtaSX9a6FodRnHxs4VgQoTBusnQuoK8aVqkxgwQSBs4rDimh6n",
  "key14": "4MWrw88Fd3M7c5hvc8kNN1ZKKmhjnWRyTE3DbYGFw4A77ej5oCztMnGMPNMzwx8mNqz6z8F2tCgZPRXoBKzgvo7T",
  "key15": "5n9WAYEA3MfAV5Kp93yygHS5KUz4AKvNqeB82s4ARkPi78kCsWkcj3boiZHRRJayBySyDCMU11fj43jKWsU42Ras",
  "key16": "4gts5RESu34N6LEJHRKSnpvtnAiWML5gyoBjRjHPunf2dSA7CEnxCa8GKht1AThSpRzdiMdz7r9o5MGM26jiRt25",
  "key17": "49iW6bY7sns4hAxKAGUUS8bayiQW2ozyrqHG55YS9qHCfuBMqWEKg2HkdypcBCYRmeu83wzyAesFpxvykKSJs38C",
  "key18": "5caN2siNoeCrfBSngRB3SieS7ovhupHrWccSLETsRyzaGsry8Tor61BN3Fn1cxFEg1EGuLcT7m53xS2huVSkz8Dw",
  "key19": "44V9NqbmxQPMDyeQc39nkjJYPktFKioHqFSvo6k852tPqtX7mdYZe9oTSPe3usqPMbU19Z7dLBi1wEqVDcanxiNX",
  "key20": "5wEsXEVKRjXuLaeh47qEoDNojLzFJLZokcAULek11MQfhTjnaE7xa3BzedoZZid7yqrescXV6F111GbggrtCXatG",
  "key21": "gPgmdd3r4JEvBezx4b7DWtfPxWkpPcNJmNLiCeseN8zxq4sWqteroHbTh1jiF8Tnk9ZigUS7wRxgsGWGnHAn6Tk",
  "key22": "3HtvzXYCz1XN4Tw49j1K8bUXVFHTKnL9hCtuSFKpGW9dLcZco23mhpDhEFwanbT63NUvTzQ2o9cLSbbqL7bhDyGC",
  "key23": "32zMMAbi9MM9yCMN5q8Cu3k1A3TX9d8aMAVvGB5jdsUFBU7p9PpBQj6rXSusqkCSGQzLJkJTpUA1S6KozytDXoRx",
  "key24": "262EgC5AFU2PYCk5de6z92nPxpgxZmkokHrEkq6rvrG6U6tCJbUxoPeppcrnxAJW6ZgsVE9SvNKx4nopC6FtJA21",
  "key25": "4ip6q5gjhcSJkg52WRwjXj1ewNSe5ajreyLCG6tmEcSVBDRsa8paoYVExz6aVyB1FEewqeb5D2GgpubRabWo22DK",
  "key26": "3DyTz7ZAGUqFPYcDfc7TVaNxyTGAvUgUTqYsVNANzPYQzzreBnFe7X4ukpBhSNQ3fpTVU6mZtrPcWFJzfwZy7gRN",
  "key27": "3puBeZovo1U7eWkzhuXLTZUb6m3n3XBeEubFwyZtXv3fiMz4jhMiM7pF62mSt6gEZV9arvFwSaB9awLX3TaBdoXi",
  "key28": "1ZTZ3ExNRyxH5cAHUP2G8rnigE2Djb1CqTUSgzDJKeNk1nsUszPYNbsHQNaW8qKiuyDEATbcLHHZ241hdzFjC14",
  "key29": "5z6tHg49uWkNgNw14xY1ZdxzxgTQd1mA7ZewF2PkLsH2JUUmRtqgQctJzvGDB7Qs4vT7YDbHmGvLFrMBvcdD24AQ",
  "key30": "2vdtFc5jRXCDxs1KEoeGh9BEiDcTYRYa19uEc2P4FyXx6yggsuzMvNfphTdAXT7jcNw3ynqxqDSMn7Y6e7xnH2b",
  "key31": "5LRKYmceWCvVbMQDomvXfSkkwbT9vWcVAUeFNmoifXHC89QXu4qSyfKkGXy5fzg2x24B7PdU8GrCiyzayRNXB9sA",
  "key32": "4ZMb98qFdpTtb31LTjpBjDLf8oqESK37kvrESSFVX1gcp4PxCQd3gW46sTjUKd8ZtV2cas2S53MZp9i6yEVE2KmD",
  "key33": "CwbKT235L5FzTtdyzxs86Ed6Fba2tNJamUoiFYrZdZy93tYkpRhdAfrMQPMkHE6WFbtYyEV2K1DB7CNf4mjRmNz",
  "key34": "2aJZ5QdGY9RJg6X6e15Hzat1ji4eB1JenXGLaikkVz3SfZr9pVXTtQms9WPxRzajE9VUp6ThtGMSt5QDeegBqADj",
  "key35": "5yYosX5zDGpY1r74zareNtDZMZ5JcRKwFXVAMKkV1zntDT7bp9jecBRJk4NSzjtVSbE5zfyjTgDkVsrPRcfk19D5",
  "key36": "3ZS67MgPSnZqJ849bX4A1GfGwgRyZU3zqxWs2pQyx5jqxbXtC7yWK79ce2gGvmn8J13b47QfHF3LpAxMm3pLsGrd",
  "key37": "4eTQ5aWUBxUyFXPTammcwdAzuxqGWorYj1MmfVfRtE2c3KzZzrsaJkWhACrjGUECqswPo9FrUEz2fUHC27KFDByQ",
  "key38": "65cT1NbMnv3FfrUTk3kfeWetRSjZL3i8pijpX7cAqQsoA97yuVU3GgJCCepA6KRBDhhwQo2MW5u9sKWT4rscxPgu",
  "key39": "2C9g7sSxWY7DmCcaPTnK5SkH5kffp3GA6dTYFPQuu8VPmnDLhgVFH9tidxLFVcHgYRMKqDcfFMFiS1ofNqVEbWrd",
  "key40": "5y8LsF7V6ywznfSLikEuXFbdmmPWFTQuQ4RFKcN8GjARb5QxDRMgYFzU1SYcWJ5F72WWu6TF334v9v4AiuEQLiyY",
  "key41": "2HCg56N1KyXkYmzvpEPYfV7igkkGSPZZCL8SwMsV6y5ZxXnUykwgQsARfQmoYMxPze9mXg8VztkcwTvhzsurFDie",
  "key42": "2LbPqgnzs8DpcLCZzBV3ZprS5V2eTawnrcJQohArPPhpC4JM9AAHVhZaUVPVHSWQoZkQmhe6q1iiSsxxgShoSrc8",
  "key43": "61FWd8QauSAcLE6hvv6NXVjDeHtyD4cNmZCk5vNrD5kXjcBq8u65RYaXxQ22JDyNWayDQnius4Vjn2jG1dkf9Aqh"
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
