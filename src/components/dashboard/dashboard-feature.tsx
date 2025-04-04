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
    "2Jck5AdbehaQrMJmWfx6Bj2E1Kmtzza9DtFfPbxV4ziP1Zh67BKjQjHbEbt4TgnPe2cKuHj1kFbhLhCqvvmQcy9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypvcA1gHdbwsTS931D5roMNdj8uHkGDcXrwniE64f9Dvxz71mde3uKLVWkNpgfQtTUBiqrb6c4KCgChET4moghF",
  "key1": "HX2gJqVvLykUw8Tsza8M9AxgGsRGtqUG2sVoAFV6icVPLYkZWfXgvjCWEciJDcCU9rggoATJqur91fc3GpnemCR",
  "key2": "4e5ujXw4W8Mu8oFpcyFVD7uX6CBV6nW7PQa2sTEiJbCjyeN97Fhjg6UtXinp884FUojPNEgdSsT3gjJT8Drzz2Sc",
  "key3": "5Vmrc5isBqA6ztUYNZZ28Qi38qNJ6Y3qefoDU5HywNpXptxRh1nooLmaLM2PFTo3esKzUoLtyDiJencAUFr4nQjR",
  "key4": "3S7MnL6buZnAv6DQfk26Y7Lh4GQYu7cXpTVcDSDDcMd9h7mBD8jfV8MMEACXXevSESR6UMYNnw6J2dQo2E2br7wJ",
  "key5": "3Heiu32LwEM7hNS8CJAk7wDBiP8JtnBYtgRBnLXzo2zJy7XXgscGCcFuwUB21Vyb9nmTpmxs48Y2c46Eh3yaTqFT",
  "key6": "44dhFryJvqXvNjLEvCRA4WTTDWpsX1idWTaEw5dqsWhbQueRYXVWCXbEi9u5GkMFdZo3FrWCyuv3NYjvRBNWvy4j",
  "key7": "QUaMQ9U5PETyXWQwm7yiXTk88L96ZJ7V2xRosPx51rVDUVgEvW6T54dN5YYDaa2UAz2yjY2LBFNSakyP1gcKw4d",
  "key8": "5VgdaWeuNXyf7Y11yLXbVxJvrbXwyQp2BRuGb7gWZymX7DBSJFcNabiCYVLNTv9bL58xFQPWFmoL7U8GHSQRvnXL",
  "key9": "4jJYKaJsENRzYZjj7XnRx1vPv2WdYb4BUpFDagetPXZVXpWTrQYM1bMHyM24xZfxpawjgSSzSk4uJACZiFqBguSd",
  "key10": "4kcVPLtLmLxaKjgposLpgj8Vww9eicva7neyp3AvLAjpsDnVKVUknDadr4VcS8GmQx74heydJEQ1Sh3ixM2mfmm8",
  "key11": "JvheMWFfpWKHmv2wSdZga2XUUir7Pmx38yH2tb8H3ZRavsKUzeKdrvnoyRvgQtxjnFfbUjPuFWnEaHCtfBWKQfB",
  "key12": "4qPc5QymXwNSsk6XcHZkhJH9sWWscTkKErJyugnbPEkd5dWMAaB9pB9Uhsy8m1uuitaAVUWbTrtrzyceGApH858D",
  "key13": "2skJmS3JEFP1WmwDexeUk3XtyWVcKVfMyTDL9BL2F7DQBTpGAXsi1yZKPm7Gkc6b3w1TjWhiqhbVkNbSGYetjFdh",
  "key14": "25LiwdAuUb5KcCT9bUAKU5Awf1CiRwn4d8pC6Hp9fXCPmbs3HgA6396iWKGxJfcYgFZjk3Nfb1T6qTZQErBEiFLy",
  "key15": "2Pw1YHjXWCg3jU2dj2BGYDfZseREjUUsuBdLCi6qkLwSmTsqDRzJsxm378gZejiAmvhjPdMrkmP4ZveXjKorQMoL",
  "key16": "4ZrqzDVgjUifQPMzHLvNMygzKnbtzyhcHhYnSvzbUGSzXXjuYq3iJv8BL7J77ZwqrwfKQVggPrMje8fyEYcbZ92h",
  "key17": "qDzyAsrqo1KZw2pfXSHmp5RbBzpAMDJx45z7zTNpC3D5J3cA8jYxmhNze6hmyzt7oniqDZ1t4Qnx8G9YMxzXV7k",
  "key18": "2z45bgfbC5FVYAj35t3y8j22RwoXcJGXJcftKFR2UyC5uuX3YcpM5tDmVZwE5yCVD77w3xBZy17ZGCuCTvfCYbtX",
  "key19": "5cg3idF1YqJ2rvybmHTZziZyM8suUBybY7hP9Pqfq3cTWChCkhaYSG5HAYJ32uCEyNFM2Rd9dvsUukL22Lc4YxdS",
  "key20": "jghdv89LzuaY2J9pU8h3srNfPsRwk5CwLL7i9SnyCLvNmExfRx7JLiAyK2vQzAvLMiVnYd5wDxvithFhM9ET9SS",
  "key21": "3VKUcFc6qrPTJuajuaFAwHsU5xQwbvE1jJm9oQwQb2qNUw5QEUfRMqGxNBt3kHaGLKrPK7g54bHaMZ79njsnSAiy",
  "key22": "5FntRbwnsGaKNsey96BNeAb1X885sDVMgNomuy4abgC7TtMDPmaCw3KTCm4iN3cKGPyzUSnLNodpsM3hv81dfTyz",
  "key23": "PBD3UbymFDxD3XReGKSRF3oUR4FBPVEGbifQcSyf6Y3wxovX7UXawqprTNixxBATFwhx44NzaPWgPTB8LNcLjPY",
  "key24": "3T21V6FAtubxMJFcsvUfSoFWVLyEPj8KD19c86GqUhUw1Ljbvks24YpnGF5kuCb33Fkr4SNAh3fw9KH7AZPwRF3i",
  "key25": "2ckgdh4yWTGv9odBBLm7g93UXNLGtZtqZoX1hsCWCtjHcvKRGrFAx5MdQh6H1BYMWbaKgiw52d1Lh2uTBcvgFcU9",
  "key26": "4F4sLUKR7WZnAQVtQw9iWiyhijuKFtdwAXT1qCKLfzkCz2MAE7NUPAsn93i9vfbqmpdjqBGS15japKQS7G3iKZys",
  "key27": "61cd6Q9ueNamGYLF2zCDM1FjJ6hUaD5QbGVFtcZ5EAXwgSJwu8EnUjQMZtXdPSCdA546yFt8Jyqzj5Psn8RbZMsZ",
  "key28": "2L2JPyJ2EDWZPgxBMH7ZHhV4XvpcRiVqtXw3AWUqPGEbYjHyyq5eqHrmM3fyaEKQLoe33mhUkTneJFsVnRWKYr8A",
  "key29": "3ojDJKW71kBkEA1tqTihWZLunTBkHVCASMiTYMgk53Tyyz2YyhmbXCUoSuXnQo7vqicWamFYYfA373YK76VwFZZ1",
  "key30": "3cts5ewULPdTDPS7TvPMGz88nVMJ1SfAJpNmsUmQJBetABGYTjPVZBRSHjhHgRBkTNfEr9ppGcc561ei9zT5Z1vp",
  "key31": "5n5NUrHYy4cSDhfCzB2oXhfdkqEB3wRvMMv9uv8AGqFSXDZ4sU8hWfYqZM7tFbDAU1mbWGREbtwJuVAZ3DaNdP19",
  "key32": "3gRGbjH7cYsccfLMcrsxaiJ5UC5gmZyFxpnUdeNhXQHxVhkfFKkGmbJCNNJwG9h3ukQMHoEvCy17Lc4vzPeHhzXw",
  "key33": "3zLdqgFYCeiSTcHnHKF6iqEUTxBJAUoCk2dumUnku799HLKS3ivLddVQVk6TAxoUTxqW258FiircnscPkhZk1YGM",
  "key34": "FGbG6obwznrcWuSFEn7Wnf6zCuvmkPnm6Tfd3bDyk7knkAqmHNCxmoErWRtCCEAMoxm8QrMGL5rLpPoSNj5gDKo",
  "key35": "5EGM57JYg3pyTKvPCPfMyHEZszuRiackpykADmVb5kohwYBM6T9Gc6XP67YRjzgDtkxsYYhmPzKaj6MrQ8Dpm2dq",
  "key36": "4JRMRPbL6PQ83NtWB7yz58HTWG9SxeUggR6JRfk6z1EeyrQ7KTtMCrYKGq6udc5tQxhPLysU4rLd3JzEeMgmuX4d",
  "key37": "2LXmBCYxTgJ4xpYWcoXqnn52uVnPpY6yhbuindaVJ43XpKZPJiVkiDwxK9Fg4yU446FwfbGANbDFQBDnsXPZgutV",
  "key38": "5Bw1DUENVP1uTRVG5AFjGsw2bhZGVkwmrfsBXDVRvTUSZtS4XcShrn742Qu9zGQaB91pJJ9uCVvmJgNvMwVcYzRD"
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
