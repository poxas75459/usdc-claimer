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
    "37JrLXABLvPFXeBQ8KBZYxgT1ftAHXKmfbFqBhz8Gwp5oCGmnMLwv372Hdj68L6WvhrSxrL9kfEtuHPbKRzGSwYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iPHTV19qhmJoLgJhxUjJtpog5FGnwrs46c17mBxq7brf79MrYvhhyxAW1q2zBBYTp2vM45hCd9JW9Tt1x3YtQZb",
  "key1": "JyjWkqG1e6qCwwhprjDW1zmduoEwBmrTcWwywg4ny6cwW3XzaPKzmpk5C3Wz5hPj8PY2N18tojJt2miNL1VVfzE",
  "key2": "5uyxzKVrfESsV338MCZnQuA4MjACTM2Z3NuREiLWVrbmcg44NqqqMaoGuP4HAG8nQ4rYwkxRRhDxHDitGJ9PV4tS",
  "key3": "2T9aFMr6HMMuVeBfWN17px7TPtRi4YmUwND67n7aZf5tSez4NF7rkMPRPEdPEBpLDi8dgRtQrmDPBPu4AoE339Fn",
  "key4": "4nSXG9s1tWvjcXeGXBtyx3rg5HoSxu4TmZjAy6CVRAzMoAamYgHk7fPAimb9zzT2MMcFVtZBz4YNv7sRB5Rtm8kG",
  "key5": "4Qm8V1fy88Azf98mLmiFpWsrNrEzMEpTbBgzSEwCU6rXj3sMEJn6ZL3Z3XRcHb3awBnpKG1v2Vk3vJGDdiebtCic",
  "key6": "4WwPwdeXAxUqU6nkwzL1rnXUddfCLTCv2zZEGiUzK3mhwmidLoZD9ucHqgscbnKpBHqFo91eCqjtWqTBmTWFTZRk",
  "key7": "v8QPsTMkM8AnsxrDPspzga9Dvm9F6euj5Vg15uuPpKr5uNEV3WQd38aMT9JTpxYdhuSkCnRUtgN3jNqemGrTecY",
  "key8": "uDdxj3ZMV7WehjBpte34wECUpNfbv6ue4oSbou34pioN2q1JXQPyGHMdji6AcDVcYccrgH5bFGHK1H8xzHwtoPT",
  "key9": "5NFghq4sFsQ1Yxsmu1PTjJFvAJchkALKWTMmraxat9bYQtFeHMKt6Xav4Ym5KSNaQhb2CB7enhx7wHKezH8nXCjW",
  "key10": "uefmdWDNkXduuRksaWKPnUA9ZnRWsi4pUxq55VtJei8zLurpBEWeKVyDwmrfS21oz42Avk794bQoha4psupKj1T",
  "key11": "5QNNUXinbtPaGkaqgrKvTA3UcnLwBaCVf3c32yR2TxuYHpt7PxRvsXcx6xB8NU9hEuDf5rRawcjbCTzyDgyaNh4r",
  "key12": "2SLgvqAEctNGBKQ4eneY97i2J5FPLCY9PVgfuAdUmFoh9kLmwxP7NpG23qMrRRAAtZkLH3Q2rDD5gFWFtHrSbAn8",
  "key13": "3t9HtnKrBKB9pnAdctfTjxbafnk7oHNFsf33m86KZoWDGN7ZZ61gVX1Ts4PrtiiaiGe1nneYEAypnfARPFB6uqL5",
  "key14": "38bKYqxe2QFKTTd53TyBXbmssJtatg3A26JJEpb6ib81BgS54zDJU4oWUzhKxmWe8XZMuH6LwW3KMnugz7g596s1",
  "key15": "4eWM2pWY6sg7jYqi4MvJBanf4q95GHUjoPY2azJwZnLjRuBMy2XZZ7knTiUshwpfqQnZSAstENJRM6aNSEWbcv1Q",
  "key16": "2wixcGyKXiPybEVGvnXm3rCszTjvubyfL6BpAMRVNKPDJnNztgwoB7o1xFNLQdt2yE5VWYFTq3YJ7iU5VaQ7ERXU",
  "key17": "3BW32U9bKNSLxug3MNKQGB294Bv7oqyQWGZSTsdkBMEv8QesMz24b6NuJcqcQnqqNrubdmeC7AwLq35ZCvtDXoJb",
  "key18": "4zfA4zZk8ivsJw7e9NP1rqgXNSHDLM7DmzYbG1itkV2wsdd3Cogvt83Ds3yq669e1GYZwLrwmTET1sFmLLjP6cGP",
  "key19": "2GKfXj1m1ZaWc1Vbhn92xhrutAdcQWe7DFHSd9fDrxKgb1GiwAhNhAwwJELcRofcmYDJXiLGMcXWifuU1jknbuCt",
  "key20": "p9h7sV62iPyx3YtVL5LmHnEVKUhve4M2Vfn5L5Vc9ScN1nRzPMVKCR74as5M2S8SqYfKeg2ofLPe6YVftiUsci6",
  "key21": "4TaDMszMLuxwfCdXeac85s6bCWpCxYAyZxmcSqK6FTDZicVTAktVQsrVu4qrSnFHKLtQjBfZFpDwtzzLq2YXk26",
  "key22": "3dpvC29tf5sxqqvEffK8FENTqU6zGGEa5XYpWNVwWba2FwQtAg65DAR1Ycp1j7MgjPNgehtcYJVpm6LrvoQkKEt6",
  "key23": "2165viiuUEhrAeq4o7FL4UaHfkyq4e5dsShK4QFdBZUNy19UV6BUeSEKTjN52GuqB7A9B7JYU8RTLQx4ucBc3dDD",
  "key24": "4tpLMuxbgEJYsNwPHLtmHrt98QhBmMjpGDHbNwa9rGB8xqBomiiQxS5LKJskWDbE9FourfamPXepwKp4YtBgKXcm",
  "key25": "4qjgHXcRfcPJ733zxMswMJtK5rRa27Ki3iLHTefvyxAtoaFnzDWLB4EhKddTb8VcpmEMuYYHZFDqTz81iWAzn2rG",
  "key26": "4ksXW6nVLidJuxtBxuVorgAaxn786j7YWJyHE1WvDkCPgbhKacVrfVSHCoMaK2sirrtfZY2WtLp5sJHrVAZkEajJ",
  "key27": "3u4hpb47tLKTB8orHKUVN9LsGC7oDSgvfNV99bu8SyA3djrqtc5gou5p1yGj9DL4PAxhbAQTKaqonT4wWshekV4F",
  "key28": "4g5stdPkrTF7GRzDjXxBQ1WyTcPbMyPBrH8cYYxeLZ5rs3ip68q144XSUNotBhUzqyaCwnHM6SkD5sw97d9S6Q9b",
  "key29": "3Fh9hfs2SuDQtZVDwMZh2NHuAuPTY8KBj3T9XkVr1B3tAdKwkX6xStvGzAwrWtJohY3E8Va3uffyunxcyBi8K9UD",
  "key30": "5as8Zyu3X2G84ZmBWuPFW9LkUUUUr6SfavPU3oKZWboGpmRk8TP8thxdiNvGUqkoJLBAkbRcxArMtFXDBDk6sUo1",
  "key31": "y6QeBk9JHhvo84tRBbKvNk7bxezv47NnQ8xTrRAHoSDg4g6N9SqyzhCuKVc3UnsE4b2ywyvX4qinWk2idt3bJPE",
  "key32": "4WQzdx4xbYByRuNopjXByzX7QJPLBskyCYNr7LNvtrcyuntKwRWkKAcbHvxEMkYFQwbLdKE1M8t6eiBn756ATJqu",
  "key33": "5XZtk4oMCWY8BZJ5r5aS4GAFzB8Fx5homHW5mNw8GA3DegQPV33ZivbXTWX3ZeCJ3S94hvu6tbNgA5Fk5TL1ibC9",
  "key34": "67cCwB5JDDZAFZtNPMbS8TQLPdNc8tW4BD63C3QzRaVxqBvXdcuoTKb6rttbPJVFtY33pHRM13gxkxDBgtPawxgL",
  "key35": "59oXUbnCRMPy3u9ZYUTE2gEe52wFa98aafJKc3z5dRcoFGVBquqWFVsxuiDfTgg5SyL3Vv5AC3RAigkMWG7oYMnB"
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
