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
    "2E8uRN5bAmEhGcbq5znaE1XU9Wn7mRsW34jUgjbLZca8dgxDx9gmuYyyf4tHL2NgWQz7cizeTFLyomNvo933Ag3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReNWgJKhZCuy2uNUovVqaXj1YS5nmUabrYm2aUjPSgAKvFXR3eab64wrYZJ3DWdy8kvRzqb28ir1NEhv38BXofg",
  "key1": "5HReYXmZNZ7LMncjVPUWCjQ3K67J7pN4pKCDQrZJ9jVgFNNPPE5HqtZvTsKp5ATU5zZGpVDE7QV5r382b69cEfnA",
  "key2": "3ZvVmHasMHeNMyyA6eBkq4aAA8JycGcSGNJKE3wXnL8MJPveGE5xfhWmKzauGtCLnz3fE7NQu1GZeZPYG4oXhHsN",
  "key3": "rzjMW7XvxMKkTibuDYRPVfmJDU4NWapJQrcQkRaQRjRF8FGR2mAAfDggsuuq13QFy1ENM6uq4pfv2ZQXi53TRDd",
  "key4": "5hKMR21qTkPTornnix99FAMxQ32WWvtGM4rWNCy9Lxt1fnfULy6ayPAiUMizzyL6Fqg2KjgDpPhefVYHoz7ovueb",
  "key5": "5hjWEKeJNjjHEVTRmR22A5Hbn3hrh86W3CuN9TnGVo71qg43EKssr23R4i2uygycx8ckPHSX1eCxk91J2jG78Kzv",
  "key6": "5Mhh9kk6Qhp3nXbQqYb1mL8kffmU2MFq2dRwcPHS2RadfXYyyTdL5vXa1NsWx14CvrG8orHzqpqZktoPQukNxt6W",
  "key7": "3pbXKwp47UTf8kQR4zk5ogj7RFimxmULiMAWiFXL4jDoR5466Tp5wWhJ78APJUyLnwPczXQWFL7wJyWSQJG9K5Li",
  "key8": "3uiCcVb4346VYPj2doRATD1uMxWwbhD5ECQSomDYq8TTKbvpU9RobAXxnBmCWDS9SikJigCieLWk9DVknbjGSdyU",
  "key9": "3GQvtSwmsRfwpQwoytZ71E6GweFeJZFDBwZdCZD4ewwRj4jC6SpSFa71hKqs5yYVMt5qtp3zqD1QGbJLRm9TVNpy",
  "key10": "yhRtutG32fTcrHdY718TdrptRvH7KcVR7pDujCPvMTDeN1iJR971jZSuUa3DWwbcDxrdisj7znKN4pDFAwYwN5g",
  "key11": "2TH8LudSyZD9xY5ht4o664FHCsVSx5M3P17NV1feWWAJRdtaA9k6oNcR1aKxnhuG2rmejzbRy8ev6ssgaevw4q6q",
  "key12": "ZVJqxS6HA4RHSHv39NezCR9Aj6LhmqP46EdqFoiLyQy5UxSNqynrL2vaBFShxw2vBBBRDLvye9EsVRK5uXtSyFP",
  "key13": "4wTTn71J3edsdWsyoYr6wHvJAftxdTCrgwF63Ke4KWavvURqzz3FoiutjXXycS12HRvQffN1z6FspDGrBpRxnsgK",
  "key14": "3cz1nSZjRBg2bwKVpKekWN71Ha5Aq6q5GoKvbdg4rJ6XozcSvrWmZqgzRxUPUViZSqy4EpiLyXKp6oxeocx24iCS",
  "key15": "4GeHpa31qozDVSq5huTni6YMJs8jRWm5ubN4Hk8Ao6HBRPNnXMfhHJpTBZwid3jhS9QHZyjs4eLe9MiKcjQkppzd",
  "key16": "23BVLFDKERb2KNfLhSKdxyEBC3gVMvQq3FgexbhivEudwBia1PxU5wHVmJSPMDU4G8eYworX9TAurhVMATshGo6p",
  "key17": "4fRGoS6uiLQhfiWTzFSii65pJoj2B3FkXVqRN3XedSLezN8jWJ9dRgZ81tedhthjXoY9eL5vFwqbRdEtVzPY1RuW",
  "key18": "55bBLBAX36PZipR7CLhWL1WkSt1RUnhDDkhuixYNRNn5j423J42sXhwnkf9wpDFj1bUVSFDazWT5o8LpRF9Kq4rv",
  "key19": "4sMfaZdsiiP9f5GhszhDCLH4ECz8wxtCnX6iFVE2nz6KVirP4uC1zc3BUmEmHWy1bg5g1g3G3XnGyrPYBTozdMcP",
  "key20": "4hB2Gt1hxHQdFZ2ppvCndNQFq47u8LJv4Q86R9rVKnvpv5JEsrJFPDau1vtPwtnE4yxUL3puYB5q5tPf2WSdMJai",
  "key21": "5UECvAeo79r9pW9MK2ZzxjeKxz38raeQ5MLTuYJGTa92aQrXuc9o6D7wBZiuimFw2N3Y2g9wasLQy3mk96NJCPdu",
  "key22": "3GQkc8cFtt5C59Xggo56nZ72xWyFn634HVbrLrT6aXtchxJndE4FzaHPapw5eVKeU6Ma2xYoq2neZvMt9tWXvweT",
  "key23": "5DRHd9MVhQVrVoiandCCLFJPVy15qVr4gcp1BMFAhcdeJXcd4HPLdDjrH3q9Hj3egM98SaLt5CG6yHmej37VJCL7",
  "key24": "4Xt71YoRgcqCDk3QauSMXU3zaAVJUrtxUab5J89tYz8y9yoEkpDWHiXHxWK4vPsCL82GvaU73KHnVHdXUgUDHJTZ",
  "key25": "4rQBbjzmhAWvbQzapB8sdk6e4XxjpK9Dv4fsixtgnjw4SkYjXQwPdfMauAfN3ZReCwJJBiGTtcPVMFZUHSVr5Z4U",
  "key26": "2tdwB5aFjZ49m1xHE9bGDGMbtupBdRVayWcQa86X2gTkKizF5dphCGS2RKQe2ULfPChjbQxkDnutvxQWPP2GWMEY",
  "key27": "25v6K1qjkzLCWem47YW8FZJmyNbZK99v2QPTYew3pssaRhQEQqbiWibN6iG1ckS8x2CfAxTw92r8gMXLbry4wXVY",
  "key28": "5pXwoJqnYGuPQi5PYqDHLpRYPpqf6pqKzrGfNgpzgCnxszxcsD4n7ePSv3cC7kgR39pN2evcEy99Wyeb2WpcJNB7",
  "key29": "Nk1qY3tTARSMsaCLw69b73GdRVsQK3hcoTCSZBffacoQZ2j7UsgeeQrGr3Z6f1A2mQbDcrCz8oGR9PpeFqAoyLJ",
  "key30": "5emH7tpkNFGAviMuReroM83umUJQCsZ8hgYrCZFg82yyHgw1kP2q6YStgyEtTZtHV4o2ub1N1jot84Jcho2SeAfb",
  "key31": "4Zw2dRpmyjha21v8PVLN2eEyxHar5P4Co356uxHLmVrLbe3TVaJKUvxXDR17MxEwtFdPVziwBabMdf9eqoeqXEgC",
  "key32": "4QnT9MLB2YMYp5PxSWDcyNAqsdmsAt3p29MbYLLFFYFxnTZQfThfucjiduZubmnQ4Wj54oHX4tn83BnuoDhvCjBP",
  "key33": "3fy17f57K28DWY5UG8rS4YinEMoqQS6p935LG7BTwKSyV3khvCPYkSZKx44zppyM7LkMHaMZDrhUpzouvGsizaq5",
  "key34": "7ntEuS2CajfTcohqH8R8S6LTrNLK1soV8QyhvVhcQixhW5tHsGiNe3GVpGP6Am7cTCqcR6YDXEzQma1ZXPSr7Pk",
  "key35": "2XPW2XBAgi7AYU6TvBwwNv8CaxMvWWBGmAm3NWho4Y2qshmzVvynmQXRRMn9wgMeXR1tYMbUvzyaqpGsvvqmK6Ni",
  "key36": "4xFz848qrJ84nSQR1FZ9WUjsVxH6au2LUdgF9ukkDM8k8X2frFJEUZxoC9gPG3nVJ1UbNdFGXf1TJqp7Ti1ZPJKc",
  "key37": "5JNuasJs4HKNEw62grpeHnVKUkCthSv89UuP4xmJzDP7PPc1GELrHMeEPuXjsJWkxNm4TbZ4Z3dyW158gypAz1Uy",
  "key38": "3Kg2w1njPSVAFamXdAbSE3JhezUz5DAkzapDbK92wfXubVHADCpRAAc1hfhyBk2gXaVr43LkBT7q8EfLWqfPYpBf",
  "key39": "5xCxFbfYfqfLvHgCrgCwtPfVx3hjVCnfHm5eCTp4jfvGztedQ2rCvx2Dmus3kAo21JuSiXXrnkYtwpRfSipMYmY6",
  "key40": "5z97howEY2qoXrRXqZQMsqwxSXnrXXbFVvtc3KKQxvPUfisn1KkkJjhprrSPALPtPXBF8BWJMFs6rg5WyWdiUCfM"
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
