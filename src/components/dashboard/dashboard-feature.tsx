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
    "3aE8d1UKGtv56yPkE37R4wsUTnA1cdPX8BQARQnFY1EKPKjQ3VDJv5xciJteW9f4pENFJanBaeX3zkfrb5pRXiKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAnKYboJAqBgjYuvg5u3HSq11HEDS4BN398sJjPN3qShiFyymUHjpvXFhSVYE4GVPziQa8WLqsQVGewZLC5BRxg",
  "key1": "3gx9Ujqu8h3Hx9dEZHNzEHeFSHYztJjUxcwLvR5cMHXWgf8Sv6dXwCek4YvQdxKEdPxTsUAiECProrryhoXqcQJQ",
  "key2": "2KvwMgAUASvdFrpCcnW4v4Ts2pcDj1Hty9d2oewZdW7nVXAjJLdVr7EBAXBRrRnak8Afvq6vAFK4GeKNuhZmmT99",
  "key3": "5t52Ney5dBXeB9Um1V6LdCUtv7mKc7TecBGJ9toAcAruFtwPnoNpDQWyK4wMfpEGgoXCAVnyokgr9vR4CrRogwvk",
  "key4": "G3rTsix5PTp1XzkqfkwqEoJdB3dCGpDu6jRTAd4LDb6QzWxCvARNyS5ekCWtb6WZn4mjmb1AYCTRmFs6AENAoqe",
  "key5": "26VhModBE7D6LiUfkWrRFKCukSFejtKNdt2z5Lw1NjWnwXPPo1AGTJ7bT9E2hX1fFHHLoqos99aVxjycVzEccsxR",
  "key6": "28TXtcmBtBzS5e3jtk8eHPCRssDaVExxfcYeWYboLxNQVzTDEZ1TNqWgCk6FuBbs9YnZKEuRLMaER5pWehAuP8tN",
  "key7": "3iH8aaKxrSP7TNN7w5dHbeWkyL8XnLreBysqmE7eyu1D3L9Guiu5zfxK3ngRazKA1LZFuqk1SiWoevGGaJ45dg72",
  "key8": "4rNLYJE2qR8SxgrmcVaAGV9XYRsSp4RQq73gufxgSKLTbdaRQFMY2TfL9AJc22qC3TEjDQmZSTbFfWJkgLu1BjLU",
  "key9": "Xdc5wvRJJVRejDqXk1727b4qsFnvzGDYcLjdAYP34Qk36sAiRouxMuQc1Edv2w7Bmvng7uumvz6pZ9MSuT483Zs",
  "key10": "UErdKwkNVyFUJU1ibrmBvqWtiL2nAakXsSAhrb8E2bXYqkgDmR17xy3ptY1PsfRiRgp5CQP8rHP3FBW5SSQsaMf",
  "key11": "fHCGeFQYfgiW2fd8Lgqt1K5twKj6tnu4nWyRYHspnxGZyacCeRoCV7b9DtTyv16duNnjwvbnsnrsrszduEX4zXM",
  "key12": "wqnfGaXZfN5d6njghdFgrZEi8LceUmFf9GsNwEQJ6vTTeFbiYZaEqTMPsj5NPudMccBqv3xGH4GjpvS2vi71BfJ",
  "key13": "EGmcJounW19CD6DiAMFrkemFPH284LdA5qRbRdBjLqQgh55Kxxa2hDKHbZeZFVXn9ZWD44XrNRaoPEREMCqaECx",
  "key14": "5PGqGKRVi65GCwzeb8qXmqaJvKmVp435VTnfKbYBayvbqMbCLHSz5H26uHPuRdKUgUBVUKEUWuGK4Z6t4VtJab4L",
  "key15": "1U8vVf3hCi31JZ3LUr69wiGxQNoNiQU1GVKEfsPw9fdQjJZ7NGkiXGU78imsfpXh2Ff25VinqBspz7cQTfASpvf",
  "key16": "2BDobHdkYb7CsafAUMB4eWRBGdCMJpWNvdk3teqdQnAuAak7VFfCRASsAA7Yamsy9teXqiSNonH5tZYKqT1fqtzB",
  "key17": "4Xt5o4p4JZQL9hZGf4jiac6VWfVQJyEhChiN2C3sdaYWgQqs6snyQRG7hg6NSGNiubqqS4gnM2ezMa3Ses2ssrGX",
  "key18": "vD6HD4YFGb8g674AgWsQGFYgpwwJ7ZJvv1eQcj7VgRpXjwuZRrFsWro5oyKEc8wQUyLgzwSmyxz3ecQjZxbwnzM",
  "key19": "5NkB2EBgiNjbUQwUh3x2sXV97RrwP7TJGbbmA5boE4LPuReNLPy74ssPWMarta94yP7n6am66d6V2LxmxownKsT1",
  "key20": "4ssNzEc9NhvWEi5APXvsn7xyL4jqD48ZNYfwSUwry5WN59zSZ5NzAEkv7DHmmWtnb9H9XL1iB7dD8JHSJHUeqG21",
  "key21": "JxEke93fCMqTBTJSCxMHiwZQ133Q1S8sT6iYDgH7utxr8xCEB1JvH1o3Hb9LxzS1pzdRAbokd7h835E788kwNjg",
  "key22": "axdWXD3GecZ3fq9ysKwaQcPG48fgPuhqMVyBP1p9MNU3JgQiTb3X9E3smnff4HKpMNUMRRTNyzviY95bA4wRSSW",
  "key23": "LMZj949EAfkNjyTTjoWc9pLL2YaGA88aymkW6oW46EFdtxfquXCWBroSrgswuaRmnoFpZDLPhfRXiXHoDmyoXdb",
  "key24": "2ucJP42ZKjMAq1i6JS7Ms8owsrDe3zxLneLd5QBkfZ8vEXdycFids7jCeboyviQ577YyYujShx3N51zFuANZULS2",
  "key25": "343tVRGHxS2zLwB7ajcU5sMYY9h3iwqPmwZWYmceaGW1fp5cLqQ2pVzSmn4KQc9fHwucMQvFDmSS13J86DL2xRX",
  "key26": "2kHT2158gdTUJong7dvGjXVAXyAEpzovmRss8cHR2eyujZphVJyWT5EDg3jE9kdBHfNTN7qz3mjfz8vBxquXvNM2",
  "key27": "54hRWZDW8qpTvTRejRCHVvSyuCg7xHxFZPEg73cUvzKQ5sPG1L9i4QAqBedsFxCJqbx2ENXhZN6M3PQLyhXAjcQq",
  "key28": "28sTRJtHvRt89qYszfxPi7d6F4Nzm5VdhKwZSF1xzKUWSZJXVjZLBvqgLXF3kbK1jYBxHuaHbatBsePcLt1177M6",
  "key29": "Ss3i3Zvg5Wyaeu2DJq4soy3SFKCcXzn2hVWN6jbmJZQoTzeWYp8qLdxod2TmfZhuQoy8vH7naUWdbZrXkWcFFdk",
  "key30": "5w7H3Eed144ntqQ9joNfDeGxNRcjdqge9VDkq5XRbFHe5xhfqszWnfzpGRAJFjvPkVwASRvb7mbRuBWZPr8L2Qpw"
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
