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
    "42nraX4F172ttpoHXJuk91Dum6QiwHYwp73gPDaacyuJZo6szfhLw4MLjd4zdcbNcDi77e9hgRVtAvxgEUxEJQUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVvnsHThdvzH6zgbR9AYBZdJq5PhR8aqbrtsLpcirDhZKrkuevdeyUKf4o8hG8yciv3NYM2GQt6tR3DvQwGXmg9",
  "key1": "LmmaSFYHhoMyS1wATnD8di4zXuMCviDPhhmCvVkSg9XibQSJsN3bxx3gkWPfvDUepHnfGitJrwMNbVVU8Xt4FmJ",
  "key2": "5jebRbPDmXkAuEMFSwLHW2YwWGyf2zEYbiPvm92JDZbkJDutLJNZc3Cr6MbdwjKF3vGR8bjLonq8Vq8sm23Lu2ir",
  "key3": "3Czy2G6Vxx9rkPNiELX5kbyWFo8r9YSSUJzYWanSmpbgQeuUpijpoAzVZuTfjnnmdG72iYFU1V5XaxrVFMyFNEx2",
  "key4": "5BWfbccCsw5VqAmQSxAF9JXXve16aESda17BeNv8ZcJvYA9S1zAAKLK1MtcvBZwqP4qxQD28nSeSLRgTZbPGYwVR",
  "key5": "31qMa3XkKzCt3F7W5mZcPhjhQAPq9pwefD3CN9etTKF89LhLSYL1u4NN6WAQpw5NWCGcSMJFxnjrujpnMeQwZvoS",
  "key6": "2aUT7MHbWG4eq3vuZDLRhGETYvpYn5D2u6RUWp1ZPFpmAZTdxBciCZGJqNSSJEWaXLDv7UKaj557cCu7asJUxRb",
  "key7": "7wTRH11f5k1QnBqz9sWGNaupkdj5s9sbx6ytF2Nh6WHohu8sYBTYALB3sNh12ahFPaaF6t5juqmMnXK4XEMFFh3",
  "key8": "2SW1KSzuim1xzX7b2eqPGNZxs5itH5TWeDZS3s9EGi3KTnEoryyvkcbsrz4AY2TMsuxTenYdngSfmQozsGnK5sgH",
  "key9": "33NoJ1yHFG3969JGs3jVEuqrYCwoWN8UJPvHQiBdmT98yQFgVAWXMc4bxzkM1gxtHmfdwWhi1ZvzahFvj3JdmHHH",
  "key10": "3Hyb5Bka1NVDw7fvZurJ2GmVs1A6vjeDpFUVxE1yiSBKk4aByprCRfXHLigczX3aqrH6Mb2wm9c6h91MX3oji1DM",
  "key11": "3T8i3zwNdaGSZWxPCMrTJMQRoop33ya3pbcfUyTfyWEWQtxtjRGQJESmqZ58Nr9QqLKF1rGYNpwGqGdEyhCk6AQs",
  "key12": "3MR4WsLXko3qz4Hot9Hfy8pdAGc6YgqrpCfikZJfyvF9bEset1p8UoE7pNnF4UQ3ECyGwGF6JSyZC8RgMrwX78ct",
  "key13": "3YyfDvEeQYMk3iByYUT2yYgDyCHRx1333oneDrc5Cff7wT118qTpQa5uurBQWB3PaJDBuRCuWbWPtc3hJx7vcnPw",
  "key14": "2Pe5GLo3DztjaxRTLr7Hasv4JszLciTRQwCN5P3sebJ79eMfz94j6Lt9qTpNq1ZXdgoWH5ViDJhdFpB1aEgvHzWU",
  "key15": "5AZtxQ5anc2EBKdJAokgkNeNYfoBtoyJHgTDrC1MaMbU6eTfsfRhVPbEFGUj5YZoa4J9xJMEfCXcYyrVpjvhbxBV",
  "key16": "4DQizHQyayegCnVGycU8quLoNcfswHAiK9X3ddP4CPnGGVEAY4ycbfPRXwhw3C7Mu6P3GDzVtoJKL8gFkAwWS6YB",
  "key17": "2KpTx7q5vT3tDMToCcg9ZSuqnw25JHycpxHDDfvCcX5i8wUjXSoGPRt3KDcGBfDEbnBuCCFXkq1fPDi5AiWunDZn",
  "key18": "5fu1yJisZPxLQTkBk5Gfpp6tcxKpYQrMam2UBavwpvfJn2MKM1adZUTzxNxpjidvSMfLhk8VfGpUm6PSoYCyfejZ",
  "key19": "hUVCMQF8DUWPpCxvM6a8uQ7yM8Jxp43wLZ9G8Lz1iWrXsHPhFe23jBrx3VxR5wuuhJTWqmdrM5Z8tDC1Efm8PXu",
  "key20": "52of5RVdXExUJPoZ3ZX69VTaVtVfLG5TPKbDGP5yooDQWw7rqZ7R8NSfYe2tBYgCEJ4SjXRxjCXhiztHstuRRen7",
  "key21": "3nkhkH8jbJmnhU8kA7h5Zs16xi97sPbQboRxZn9jkVbAUGHXYdF3DuVNHF2diDokd7HrQ8SEhnAysAfGiewGN3Ci",
  "key22": "5pjeHTLcwRD2NQ6NF71H8CLCDbZVAXadjx6rDmm1YBi4x32dW7TXs567trDJdwWvq3VkSjBn5NKnxL8q4EBAbjfZ",
  "key23": "5BtSUQhuPRncJ8UmYJMVmyHEMNNBDKcg2Qs5E8EzzYMFygPf91nwJT2acZVW3LwChEdfLqCx63bmiSbcy6dH2x7Y",
  "key24": "31ZJvuj8uaLGmbjznV9aLhMrmpxvjnoyNsaxxpU62T4Z6vziFVyfzcr35MgPgXN4hkHWbuV7p3DEnSNM96bx1Fat",
  "key25": "4nYVsZKXrdQaZnAxVMF8wURQEsfSfKojzhA3NRKGCq6t13cvjCqrVaAL1CLdiqwQWYbpHoJbPWJVy6Af2NM66pEm",
  "key26": "5AjkdbdA5LNtB6iYRGCAam7PrHgF3FzydtDjAmZVGbnjUjRzkM4LxWmsVDRSq78ZydeWhcJePc3v4J2U98TKnqvm",
  "key27": "4C8c9EqJrkght3bThQk4zRn4rxaqXFdHMbqt8PjMvLLzvN9g195fUkgX7VbxNHYW34RxWGgoD3KqmYXD1HjxRSjX",
  "key28": "66N3yCUEfSH4qsFAFNT5HSn39a2v3PKV8eovNbLUQ87DCwM6Tmsn2pAYFf1K6QhV1XY7juNyHX3i8FZjDGzjVjcV",
  "key29": "XuQez5995YWC5RuhwNcRETgE2UEy4tqsDQVx185KNBqq1pdKxaLMsJwE8Zj1U8hK1CRkGYPDNipm7PqgHvYWHjF",
  "key30": "4UoVm9seuhUnLkaDjtCK4p597quZDnfAEit5gmecWVyDDyybpJAQkrAZWkRriydPGYgSFtz8XHbe49AjJpJ9vBM2",
  "key31": "4AxLizKChv68rKNv2eDHwG5vi8o2V1JTFNJs52QJCfgBh1PKo99qec2LGFiErywQfCkMnq9RLi5coE8uDemCc7qV",
  "key32": "58jEg4jkuvpYacgxQgg7ooJ7VvLE3vSg8aFamj2giQq6MsedjmhpgHmgYEYJSd1sEw9Ywky9XrccDm22HMu4xAgB",
  "key33": "37QzW9LoX3e9aCkovnMtH18uiBbqQWsZGaYmb5jZaieikKRoX5iLfki9a2HyKHSAx2q84VSUmvmiYWjiwxbHXHtt",
  "key34": "3oKpQh1aqb2TpkazSTUXeeS7ZV2vSQckmhtRKw6Dywg2tS2sy3S7Cdys1Mou67JhqgPnEfMv1zeXr3pg1CeNr56p",
  "key35": "22TRBGb4sNPLJbyXJjfWiq6iLc7ZHQsy2MoG3XhkzA7X4HXW3e5E5aUZw6qnrk9zSA6kFJkHNGnT9Bj9XpJb2DU8",
  "key36": "5LQKs9yoDnrYmXUsQNXWQiK4yPcgThf8PAyL3wGKC1pRCzqyPg1MzUF5J881a6bitLnbZs7E9qX2AMwiTFjcruei",
  "key37": "2wycF21TW86gQbJsDbnFtKyuGpL5HuaiXWeEB5aQdyPYqTRXLTYsE63DfzmGiLhrQ5NGyrY86k2uZoNoabHSftyf",
  "key38": "2kXQ7Ey4P14LwuKUCd7b7J89W22tLSr1sTFcoBzmxVzdScnEtvYNUFiW2quVD2jgVbKRkV56sFmJFfYjYXEEiMfz",
  "key39": "M3PBBdsNefNY87ZvBUGKA7qtnUTvywDAwFY6xLkdKh9HcJjxuz4sAEgWMqQd75K1htp6Cg2Eiu2sQo6xP8SCxTH"
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
