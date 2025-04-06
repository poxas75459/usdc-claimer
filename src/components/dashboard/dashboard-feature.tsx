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
    "2DiS4xwgtkRvydibLJWeieEC4VYoZ4iKhtZysVJXnvsjn7D9Lg7taF3diZpu8LF8Sjxb4zSxt6kMSKbgKz3zicka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MsY3VUkE6hfXZp4E4r6cXsgkt98yTGysHQAowRassNRoasg6dY4U8nmkJz1KdgPD8hzWNxzjU77Lxi7v8Xqgai",
  "key1": "nRJFtg5cXuC6rAESKBgAbfYVidKXvWrVZ1Kiy3hxqaZwhC8NdiRYHekUPSGokRu9dDLBJRcqeFZm9aAJn2Shkvf",
  "key2": "3VTUCYE4soXAEQtho8z5b6E481fKtUhL6HfQYUPkyMBZiQhPU531RrXuHfBftJtkGz6JCS1NdB6zsuFwgNdJAiGF",
  "key3": "rZD2gpq1vgBXFEbnKvg7ue7r9exSqiqn8TqKvFbv4YrnAoAeofyAUtR73FUFBdEF2SmUtK8U9st5f6p5srgez1b",
  "key4": "4gvShthP68pLVQEHf68UeXPxHJVT9j3uYo9w7BJSTy1QJLnGR6hvhC4DidkvLmX5p88c9D1fS9bXmtq65Ts8sKmL",
  "key5": "2bCf4KYMX1EKEXf3YxJhRdtZxQF2Jvs5WEoSGHJ2tECTHKYGuLjjbd97xUnawZa3bQGyWFQawNpjvN14eBu9Xs2y",
  "key6": "3rCcdLVdKSSL2yGkWG7cBxrMYm26FFy4BonS2pb1n4he25HvhNoZULmfdmKaQNZuweFXP2GciCTzcna3cg1ZinSq",
  "key7": "WZNmNjzC5sytVArVkygoagyLz6NZPhS7azTcm733ZsXhQW36hXv4uq2KP3JQLuu24FrCMsCKQ7o7nrtFSf8xxFP",
  "key8": "284qoR9GYTV6dMdnQHHdHKUEfmAtAfa9FDWcCTDAPtUbuTPCRFyXnAcQhNtgrbJxTrTLaJAdp9ePvn5N8bfKEHK6",
  "key9": "4tRHF63ZsAa9LkT7YenQNYims5RjoJQuAQdVLKS3dpmSbcwc2gjftZuDu9XRvQHDSvcoi7CFb8frYEiUM4GvQ3Nu",
  "key10": "5W4s9ahCuoaBtAjkRuA4bKbxgQEbAe3qubQZ3GsZi9WsUvXGGN5MuP5HiZYc7MSh9a3Q3deFDBVxU39Ka83wU8Np",
  "key11": "4y5g5ggFbQ64p98mBeiYH1kkQFq9mRisF8C6sxddPtT8MrDQz7xjF44wYukoFmLLe6hEh8whXN47KNaDqK9D4fsF",
  "key12": "2CPiJKMW8tN4XiHNK8GfP6WYzRWgEypzVxTnvUJ3gjL194zAC2gLcxM9yuM4jb6SwCZ8xE1BjJKKkr3ccXYFmSJ8",
  "key13": "4rQDCv9drZTKLrJLMyRdczsY4m4iShREsmzG2s5wPTdA8niFnjujRXgiDRzRRvfFEqkEMLMLtkErPZmmVT32aYNP",
  "key14": "4whQk9gw7Macr8NJGSoJKSF2FRaUjSvk9kXDJ3ZNKrWkGTDXyvp6KucKMXYGtkTMe34kMmzjNTh54YmiSGzJEkwA",
  "key15": "5hUhyApAUTmvKDu1LrRQ5Mg4Jjk44G8fmCm2k1CWzj8vQkA8TK8XyHuo7dUeLNdu9EepiPGg3d6X1S6c8nX7hye7",
  "key16": "4gE5L4anJ8f5AAC2gMa6NV5p2PW9KYGL2aDJeAH7KdFg7m1cpLyhcUkxJutJBfLYJhiShZx2MJSBJFgLMmuGym7A",
  "key17": "2hS5fjL47PN9aK5JQmCqXDfsfBcPAS3dEUxebe1GLJfAQCFsuk8daG9cksaVmhyB64WDWTqPwBpXvuvJ1x9styV1",
  "key18": "5MsgBXdJTHeWMnGF99wonzC1wYZs9dWJxYeqtiaLP1voEvKqjzvYWiScwWPMyRATvQVKqh69YMwmqfGsJDm3rUQ2",
  "key19": "rJ55A897SHxQtLJWcCUgdBa1xHa645cpyGpj13QtuDfHGeYopcHHEH2Fqx1p1gzY8tk22xKuRSSd97Fodsea2hB",
  "key20": "FVzfCkZ5MT3BbBYKwcQmXS1734zS2oQJJtvRg5rBhEZjNaoWqbiB5AVzmLbRHAVUWkeEisWJWKaQreJskYMz6xJ",
  "key21": "438pTy672Za8XWCMCwY8gVpQ1SNbvUHwpyUS889Qa7Wu7Bwo6Nke3KjBXsYUCKUrxrCbWU5AKxMN7RNJJb16kpFr",
  "key22": "3CYW2MdAMiRpKEovaypJja7gD4H5VHvKc2pRQxH6AucXoFSeYW5PC2daxBMcPf2dSuz5zFZy49vXc53bv1xNtGWP",
  "key23": "5QHkjQQ1sEGx3VMCLWtxTxv27RWmmr6HbMW4DebmX7atg1R2NY53nySCwahXmxUAH5RseD8EYJcKGtBGJbFhvdfB",
  "key24": "25xBgvrAJf3epzc2YDKBgtLZSNuKbyBgpqKu9pshzxnXB8WudXHFLw1rKrfGh6prDFRXNAqNow2Aqd2bXXZSxnYW",
  "key25": "3JafL1x5PN2eE4cbhPWr9J5yJrV4d5C1vSRAaVEzVgVPMS67nV5n7PPUVYHdfu1bd841RxRiy4t9BpCn3qQSZuQx",
  "key26": "4j3yrXgVMzynP6fLGV3WSj9sH8qQPtRHeDd6qHEGXEu56YApPZfCbc5ihDHQWcWisJo7ebbPbmjQFZxpqy3HDjwt",
  "key27": "3CCfDrEJnw21T7D8Y9XwNJ8DZ5feC3QD8rMDjtjEmGdU2WaeTMrZQQMjVxsU6rhWDnjjGY4AQo46i4Q2GtyHMx5V",
  "key28": "4uMrvD9c7P4j6FkHTc6wWBjPvmdjYs48KBU2xNhdfSP17iYocYkB82x1q3n1d2mXytJ67yFZQf1TPrPhvdtDAxtB",
  "key29": "4e3iShN5fXBicMHkUiQQTQYBVcWLVu7vEvss3wRU88PQTYkTSem8qJwQ9FpKnMDucrn7EndwZTjhy67SJpYHMSjb"
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
