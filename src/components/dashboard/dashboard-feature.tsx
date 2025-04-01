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
    "5SGNNK7K6AeDbRPFnBCnhKHfpapc5FrKRrAmGfrjHDHaJsboyo5xF1CagdANJcu61cKZLucXCLgDBEaDnjsPFdk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bPgxF1GUxiEnKnVUQMVrzFoUhswTDPZpCPELYcjfShKEUrbUeZ5NHLigKAj2XnQfk4w9Fmbm3ZmZLjAKqBPZMFD",
  "key1": "4gS4B8ixgQPTjnPaA2uNrnMaNMy6HcNuhqRbo6kupasoK27XhisLxKJDXChdWUyu5F9oYYiggCXgqBgNEMoTJ7q9",
  "key2": "TKvdeJxuY77jqyRLw5XnzqgWAVXR6WYSdf7JpC5tdJjh7s1kyZkkDt5ZzP7Su7Unvaanh8nicBCxPxvTVpuwjxV",
  "key3": "Vu5zX1SuveGEXPgAQgcmT4pxpSk1hsbLA1sVvBvGAKLc2kvcF79QGFYuZoDYBvXXVKSR7F81tznobxrCXiAPbBz",
  "key4": "35czJhEnBPSWDxc8D93qMjHJzXJv64gL78FQ975gh3PrGUe48pFofPftxkFamLfar6o3MJFii5iTVH2Hyka6xqb6",
  "key5": "2AuQiavmZQb2q7f1JQ2ADedjJz6xAaGiF7i8t1YzeastqRaEvm5AVgpxiyEfDwiSV7gGcgo5h6kXJrTMgQstaxQg",
  "key6": "5jnXimUN93x7iUnL4uF7k2in7FAQ8gdqt6aeSt99yvXW2Gm1uY4CpHqykf2pJsjrGs5GZ5MBsdiwJPrpGq4hvii5",
  "key7": "4vVbCamJYKdcRbaKiKPyJ2e2saszwdz9D6birBRq4YhFejEkTynGGF41itBtZrQ2dwGEXybhMVukdq1SWsc8HhzU",
  "key8": "3o8mxBfD9og3G48DXh5AJwDbSFQ8JdonzvcFnURqr4oraUv8jn2MiE1QGg3fnXZ7yrdv8p6DmZq2Sovh2wceb2tS",
  "key9": "61UCQofny85EXRtEyj6pfgZe7gy9FhRfRSgQZaPhvJCiHrbeyCcd9MHsonvRtPwtQ5hkV3jkdr5xjLo4ZHu6P4th",
  "key10": "4okVLbYVs51dijRQ8iSqDhFFHs9LCs6k9E3ebgtpfGMAqCcMFNi7RXnXSa1pUaoKGJTHx9an3BMqNJuBVSBvqaNZ",
  "key11": "5HoN3LJLJByMqJ7f1RZvApJxUeyGecELcPErwkbFjsrTH1tVs7QzoxeFPkpwf2uMAwPLdpBwMyVnczQhmRDrv8Kc",
  "key12": "2kdia9fJAixyymfpq6YPNUdStQYSTX9vvA2XJPiAG1u7weArAZMtsieD8f9Y4fDw3UgrEZz6mA3vA37TtLGyYGd9",
  "key13": "5tQrZpjygDkK42LENoCpV6xpvr8aTPzcC1yog48z2kWZek1icGHwFNAXjv7qUw3SeBwngvfcHuYeQT5U4RCTTAzq",
  "key14": "2xgY96y2UyrBNjMHDWvUSSJmGUMJGFtmkySK6gfGSs7NnbZhb2t7iF7rnsUGLFv91z9SYXmCiFMh9rJvDXm2syvq",
  "key15": "tCmNuNLN7XVUpcq576jq6758dwjhpCaTYhPmhSUFUcZxkqNZNC9WB24poMRyqc1N8jW9BU2GrxrFyjDRvP8knnZ",
  "key16": "3NND7feh6Sgi7UdfLdbyDpBHyHeECo6uwK84sdpVLL1tXPtetcSHP4PWEznRaz4wp81Xb9QuLHJ9Ept5p87F6Xqn",
  "key17": "5EoUihoRkvZAySC2cDaKt68DkaWp5HACBFJdcRTAZVaxGSntCQURdeqihHArkupqiv67T8eBhztLW2wva7c2ZUGn",
  "key18": "5CsqFy8S39PbznwRzkMu9CYKtdFDr6gkcUCarjFwHomg3V7H6wPmX9QBUf8i7TkHbeU1E9ku13bwa7kqxrdeooMS",
  "key19": "24pPp5qzjPMgo8i7rgqeXwLzYUMxZfP9gY7njSpV4EApNaHJgPUa5WBrfpgB7aMKbFiu6AiZ5Gyk75LuvuvJz5h9",
  "key20": "5XqCTXS6N6hHSYPyN9tjfeMZNHdfJ74yefwcbWT15GcNyziYBF8kHjio9HbcRmUsfBoRTHziK3r9QiVa9xgJgCzJ",
  "key21": "5EHW8V5kfP1x1p4KxbpGHXio6MCmaK2BRtm8jzWmibg5E2WbjQPWfxCuAAaoiqkgdTXfEAJkqTDPkJKgUFHRWsDs",
  "key22": "5T2QBS3FBP17jNWj5mF8ydGtq4K4nJuNPwjy1SfnXXktXs22oQLCnrWPiEbqxAqCGeV5cWz52n9iapNhVnukycFP",
  "key23": "5kPSPQrAsDAxkmgaNMCRL8qp2TnsiwNxKXgXBF6bq3ghWyinWePmPf7dyoMbvcoaLWD3Y6W3QoAhdZqNBzJjTf4U",
  "key24": "4aaTqcuUfGyHcJuscpW55L8eQ2cHqGK5yvz563gs7cMMtiJwV5FzTF1StEEVFY1vF7cf6M9TsUX4JqModnwL4XrF",
  "key25": "3xsEQCg4DivyUBBL1NBWWmejFksdFD5r6WimYfL11yv5ruNU4cjtpJzenXMyvJyaAannvNp7pw98U6sWZP9h4bQ1",
  "key26": "2hgNtAUJPktYxQV1DsitEJ9a6cwBQopQoTe9FmmhYky6uurEa3khFibnUtcTi5MTBB9LnHuMUaMg2VEqABx77SZn"
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
