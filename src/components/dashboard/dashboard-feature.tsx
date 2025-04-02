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
    "51obiwKBiz3rzGcRx3ictAnYMaWjZpmybbwYWU5DC3AM5x39Yz3iVCT2aWVryFSwwDNjqJczYDfg8NGxP6dBDJsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHWSzAimth6ceKQu93S5zG3NyshK2ZAHmRb7jvoLy7kx4qKMaLh6bfD6Zz6Pbja4DoVnFVG7WVtJQn1oFRPw5LY",
  "key1": "cVdKswudrscVHRb52K4RJLYUfB4h3mPkKm4u8FsF2cTLX3K4N2xfn5Mn1nB4LUEBLPA5prY4Dy8ekNML9mS6MTi",
  "key2": "5GsKwbTUosb82pKUynirebWkvUmmaHuZxvmSeDadsJUqTiXCb9RfKsXJxjmxJvmiF98WbND1arAK2eFA9ZTJHJXy",
  "key3": "5PpvKFL53BpbCcZDmcdSXmzVdNoTHNmxvCyVtDtrifeLsMc2EynM3HfyvjiuEj5y4NrsvGE4CotJ7WovXhC1ecdK",
  "key4": "4MKYvRMWpPEVLZSoE7GMKFyd4DQE57K7tK1waD7RAK3JbZXeXLPRbBJxHbgjxXostNtoiBNdYH9dJCn7WxJWEyJb",
  "key5": "67QuZ8H8qtSZiiivDGMFGLMCyCW8ZKcAMKpn8HGVmA9whdFE7M2LQCHBhpCkmjnP8tWhiLEBGTqRoYhuymARRENY",
  "key6": "462EGy2QJzzDfL4bFf41LUHdNfCdjWuXs4LwERRMkAeC32Gn6QN1TtVwuBEQZBA9LaPtKaPCtCTojrHqvfKUMpKW",
  "key7": "3fakHD6nxS3kp7rGDchA4eHJKkW5Ec1XDBJXbF1gNDBduuLvKQbjKZVVGBMZ46jEA7zuRCg54CChpSb8oFrjVtZw",
  "key8": "47gVDXQurJDvshnztNcanE4syp84NK7R9S2itZ8F7CwzvBJqf2YnnbhdzmGn5zdfzznQCGKfymZDFC6QsNeDHVHo",
  "key9": "wsQXZp99wsT3Apqa6nBTPRvugkpvifWGXZ3ZyfW8wQXPhLGtrCPAdyJtnVKCPtrSFAUQyoPL2SnwtqdzdJfpfdc",
  "key10": "2wqhZDyjFSCxCygJ9JeVQR8tnpKbX4ZmHBjDq2qJYBC7m1JvgNmXjVXQ56cQyLozPswthMhNUtvaadXZDNMcjtUJ",
  "key11": "3CUSXG5MV8iv1GuFNbkcc36hyStVkqrSBFuj7t6pMiaQfCH5HYnjjBpW7ixn4UiVMy7ZQMBhGwHrNzb4kp9e3NPU",
  "key12": "2LeeWZiw1UdUMjRg4r68MAwzUnCYkQXuY9Tqy8uyp227uRnWKRExfsBwUwhwaeD9r35CpcvpEdZCbtTzuHkPwJGv",
  "key13": "2J47X52QUNtShtDQSjCwBeJhkn1wZqndoLCY9noDfxC96sPxF6rTb3WZMpjbdJPVqdQyrgqU6LNfphACJg6F8A5J",
  "key14": "4nsVAQei3nAcPjwbL2jfSSFaEZmw4p1raTVZm3ZcdVcWoWvLh8DwrwfvYQGFTej91uaKdDU8yfcLP24k1geymxrU",
  "key15": "tJyKZqKmZpjtwUUJJe1QwitFLLrtAr5wwuHz27a2ZJUWmHw1tikXUBXPMXEst7M9TbjPjy8wVwof1EfKPUhDRL3",
  "key16": "3NoX22Ufjq4dPKCC4CRW8fcBizCRA7ApgLtGQAjZp51dAmVjW3szn7pkssp84us75QqfK7js6DrAnqqUvGwVh4nB",
  "key17": "65r52o6LH5rNhf4fs2HuNNexfw4vD3hsZ6hMYqd4543GqBxaGwPVs3TBc7mzopo84WTtUo1eMDFZWH3C5oaKZf6L",
  "key18": "55KQYrVSVxMjDmJDcKkd4i4WRA8eRjewKfTMhjSgLYrPsjK8PMgtYLuSNTYnsWTMGruyTXnWduMVAxNuX8oG9Aj",
  "key19": "4v18DRybCY3RbummJEeqCDkx5pjGGuVaVY1J4wyYALa3usUbUSt27M1HE16mCgTxJ1PjJXRTLPAAEWt4PUVmyWyH",
  "key20": "4C843Pd27LPbqXANaDH9bbAdP5nHeWB46iCAt4UeksKZRc4mswpN4ta5SPLmTYnGpYTR9y7sDNPigR8rE3GooSUc",
  "key21": "3Dd8V9MwtSBMXfu6cRdFmqnFHWvWNCtCj2yW6NiskFaXixAkxQPJWTuf2NHVaS7J3jnCFW29wWXNSzrkQUHvj4b1",
  "key22": "26ETEz4wPwmJuZjp8Cd1LLHLScgLu2tb1Vg3ogXvwkAk1VEMaGFAdhCBUoZhvdnHRXCSwfZggy4dnDXeDvRcMgux",
  "key23": "2hAYJjzhGbUoJMeDRQfGpH6jtjwyVPLBstZCowNeefBaMKLbhWZZndhnB6fkkhfQgs9vux2rzwJaAzSdHtRHiRnw",
  "key24": "3h1wbNcMy8y84FAy56Xcp3WA96LLgZ2UCWM4WgDjTxtxqQZndBxMjfjUr1Nhvptqvj5KwQXwsdughfoZ5tz3hnMi",
  "key25": "4dZRBUtCQVu4fqW3cyCWPGZGKPzC2TTyJuk6LovyAiV9Cmbfcf8B6QhNptfCDt7sjBDvS5a5ZaAfSmCmydUjgA6a",
  "key26": "3ZoeKnTWahJTZZatXdo2wnY95AizaAPmgxbWgyCcdkukCXkhSvACcKBhkuM9zRWd788CvnCRJQ6T7Sd1EZhxMT1z",
  "key27": "43fKgysAFatsKSDdbRjZhkZH244acoP3aLBYaPU3vKcFjpaMmX7XipppMoMEcaJjUUXqNqjKSKy7Cy7ikkafoztw",
  "key28": "2PBMWRHNeHHu6jAQnrycyDQ4wZ1b9kf7rnrnWgiZ6p4r2ExmxzxdhsLxZiqYtgjUtGuVCU2napLcuSE6qvp72xju",
  "key29": "3m3iDy6fRL3btQAESKGBkiSedg1bDdiQLsY2TNenCz4MbVrYqXsYyDmSEvdaEUsHeHGm86Bd3rGv5vyiqkDDV4Mq",
  "key30": "3g34xA4q7dHas8AsVNPWyLnveuopXxjEngbYMkqBjMxTbpkWka9rYzNqZKTtUk7a8eb1r1H5AzMbJMxRUZFKJuzJ",
  "key31": "3PaD1diZTja2TUR3SaZy6KYnMV5Gb1UUs4FxdbDMQEc4czjN9MEnhNCN9rWPeo6VdB4PoFRqgYynaYpSrTRH9sq5",
  "key32": "3ff2wXcfRTECVtPiDut3KWF8dP4RfoGhrwGYm986Aj4VPVai9VXoiaAaf1PfiRmw8y9WV6Vb2A7o8U3XUaZGGR8y",
  "key33": "4xnZnFJgXrahvC27UM5nj32CXvb6nTAqvmrz6bVs4G3VqxsApWbp9YFEWjN8AAJgyQqozUUG4sqbMYdxNp1gmeqm",
  "key34": "3SdECvL7zWUxdta9vkDSykJWBBcs5SiiENxSDgi83bbW6VPopwVJP8nB3FvY8qYTytFdhX9wAFfFpwsYM4TKfRSR",
  "key35": "HuMpsc183Vjiia2thUyHa8RuV3uDXFqD1M3QxjG9qBPc5ADDkhXLnSP9ngJcYbEHWgXhFfJFgf3zBtpz3FazmPj",
  "key36": "tU9g3NhdWy7KKt2MPaVK3enMJK38j7uUcrzSMc4qFiMuuDLeGQKRC2pkKviYnFykRxmuoYaDVn8AfmmDMqDAwed"
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
