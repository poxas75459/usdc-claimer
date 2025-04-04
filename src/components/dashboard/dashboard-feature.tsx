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
    "4RCqM1qHczQvq3h7sKUErFgdCYqYAxaFyqC8vFNJ4TamUV123w8ZxEkYcQBFvHUNkKaUzqYK7EYf4m5PjxtLQb1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X6iCPcFPWrtKLoy1P61hj8iCaiABV2Ui7d9W9CzokyCG82XgGHTun5JJksffyskyhiVYEyXJZotDQn8XujFu8Pw",
  "key1": "3FfqyYTofP4C1jyqBbjvWcp9xL5zFKnb3QnvVRAdkEG5rhqUBjj9fEv8ovezo5jUFfMLyQ4qJLqEQqa24URyUpuA",
  "key2": "43ZN2dgPEPY65xqsFih5JhqHobYTgnd8fteLkxGzbDzxPWWMbVVS9R9N82PQ4B4cLcqv28zALmhRfnrJ6PUfufCc",
  "key3": "8gMjGEzGaEvPaaspTFrQvHmsvYQZudUVmoiRzxTAykJ7mwnJfinGBiK4GrCtaEFwVf2xbHYSWLMrcVZYmEccQqF",
  "key4": "3UwZMPjthVBNFSGPEy9Pt6TVFVDf8kvkxMVFhr82RxPq6Xg1Swa7obpDnu1xKqHgTJViJhUkiJWMuTHjH86R6aAp",
  "key5": "5yFqqK653DczFQPNfNWL93c78gsJaHRnCCingC8kFaD4MJGHQ93F5NdYcFvbsZ3RrZv8dxVsiKgTJrqe276YaqZz",
  "key6": "34s63KnKgVwGKXx9gZ1KLzRfjjz1sYQ6ahCD5pYN9KL5jGhZP8vh14sQEK9KgM7Cor1FxAHEeMf3XecVjjJ8N42d",
  "key7": "3Et5EpeJXbBXoKgShGhxGK849vy329tTyyPnmNMKzUGtryVwEoT6fB88UjVm669yJ5P37wvAfsKoZha28KU5cj9m",
  "key8": "3593WJhy9X5WdQSub6uxzc7xjV3anRM5hQcmFAJoLzJghFX6NbFhChLG4eZfCgJXyBFzzh7R8cjH7FRRavBec2w7",
  "key9": "5FXH6cj7AXqjMTvUVdSLoj4gc4GhwFCrjqvGVeqCriHPs1f8eM1y2qr4ETBPaUAQKhreUgBugxujknz3mRQAyzib",
  "key10": "3A7bHdRtQLghVbERnqHkhV9AUpPHKTXLU4kyDkmU7zFrMk5KJzzv4bPAw1JSHu9KvWb7J6EdthS4JhJuBePagvBw",
  "key11": "3z46ARr1VPJuJkZBLz5ZoMoByeMXzej1k8n9NuEqzgWW4KVe4pbpYd8NZtqRsBh4wmaNNT8ByZVuYzwaTgHErEgg",
  "key12": "2DWDBz74gZmdcy9LsWQCzz5aVYdKMXDRPProCCPipRCwjUdfgBKXd5BVVFVdsnn2e4xQVwcXxgaki2mmZrWQZzPf",
  "key13": "3tMBwJ3M5PK9n7Wk13KFgFSVmaBqBfsVv4DcJcxwRnp5VWFURDEu3dZCruLaSe32dW95Fzr7qcaLLWGhAsusoRG2",
  "key14": "3oufQdwbsj4yqbX1gFQudnqedcpaXAE2ebtrmJwjYVuP2QLBPNAwXPC1tY72mk8modFQ28qbg92tLy6gokBU3V1W",
  "key15": "GgXnyUV6EWb5iUWnUiCZ9PdtHZSxyk293iywaAeGZRAeP3r5hfQKqMdfTKwi1wjR7DKptfU3dwpzeRMyBUSaMJ7",
  "key16": "vidmjih2swqngRUK5vW5Nq3wEJNhtQE4DHxKcBirBcwHmUFMVRJMmHBE7VPBPQgoinnHzLgwDxpmEQmB3gQJH5k",
  "key17": "vhqQ3inVXCokVrWu67DEjYZPUJAes3w5gSTR4GZLZ18izs9sxuTtd3jeCkjnmA9ybAxd15BqHtXG7LtnsvdXPtm",
  "key18": "28s1WkZPGWRK8rDmUgrZXgrFXzf8WTteyBKaQY3SdZvDatymKFZrUkGQaqgdLk1V5pGoqZfRyhXiFT6BDoos75By",
  "key19": "3SNEBtvkPA1Wvm1SRfAUJuEiTsqqC1kYDzo4qyF5rWKf3gfkehcn99FYrTUPQMotf2guu9fBQXqSJ2rxyqNnDX2X",
  "key20": "324YFnE5cPpGe2J9E3281Q8GAzwkjJeEc4EW3xAxu8BPeXPKrnp4XxhAX9eF9R7NA2dve56bD9KGB4nMfyfCTaKG",
  "key21": "3EdbYKymEqBrPbWXiEWbWRC43ihKZy4YH8qUZf2GD1Pw9iXKZ2jaxKbDnX48u9uXSWEWACDHtGfRJbbAVJgmdfD3",
  "key22": "3XYWnaismeCkwfY3yKZQDMaJE4GnyNQ1hmSnFeNkX3wELhwx1CWAaLhi2XWge82ifrFyo2W4veouuFrbVEbvnZep",
  "key23": "4qajCmyayPXwCF3udeNLeXn4mRKCkduW4X385ZwraQ5vm13beopDKbczZYbaPeiispi8v2pSvMwxd2MZCMQPhoJk",
  "key24": "28QkuDLunhVMUZDVuutrdH48rMGW6TKwRioxPR86t6sAnXEBq5CG3NfCZ9FMz7asHXXWkD9Pb4wS2B9Nf71Gijwc",
  "key25": "D9rkCtJEwKW9CXEmAVeyAdKrdp9iDoV2cfHidsdcJyYqEjwgsTXJCrYFcLxNpzvGR7h49sREHE5nHvPjenPSEQt",
  "key26": "319FpcjyC7unv8LgaiXE9pVWUmTemgYYMzYzGMw3V3SLksu97LGFMskyDZY8nKqfxnVpmPCsFvocCh8JsGJvkqES",
  "key27": "5c171zLUPw3aLxoXrdRqAJndTJgboCY3w3ubChiwUtaGhWGdYGQUURymKkAC3h2hd1Nr2GHTsgx3J88paLxikVA5",
  "key28": "3wRqBd4ya4hN73RNTxauDUiKZ2bMLArfPs5MztX5UtavyspAEB3ep1BCvcNQSg5CkPTvYnnf1KHz5pVAhxdqWWp3",
  "key29": "4351UbQupVQ8FKjxtGHZiCWqizYWieBwcammx3HkS24Mg9Hm7baEBnD1hnYHiPnQuBxEZjm6fmLNGXeRXQXo8A3U",
  "key30": "51eMLeiiGb7CwzsXCiMSrnx8qc5oZAY9yA6yC68KsGGN9FhKBrEapMLYkMjgrjYUEaQDU3muFUthhmg8GyGszWft",
  "key31": "5KTzdAox9Hv3G2wRj3DZ9mhM2YRZE9KfPiRXjMaryV99EFZ5aXWdF83LLSQhMCMXngvUGetDrnfu4pPzqMXCddXs",
  "key32": "38EDyLbEJcxKj9Yn817oyBzMKXDrJYvCS8LS4VeVU542SiMn13hQZwRLY6spPh3Fv9Bp66BY3S4EK7Xru5aksf4h",
  "key33": "5jHpx9BFEVbRoKSMGhbTtRjugUnGktJtdsc9cwxfMPUdkcVnA1pRgPpiQh5ez4txjwdnEdqkWzQtb8XsxjdQ1VWk",
  "key34": "67JcJqEuC9c6USDRphjJhAir7o8VdQxA6hrgJzvAnQrAEjXDyuDnvcWjUUeQR3WyC59dEe3rDR28KiLf2XRMVtQa",
  "key35": "M3VyebobGdFKzio4gqV4NB1oSVzTffavH6mvUVRnH2Lx8cjAb86sS71J7sAKbyFWYvWTG5Ub9dTv6C1n1fYCcEn",
  "key36": "Zqdkh3zNNZp8J58kUNPMEbN4WEc5JVAP4pvDQQHiXRJFUhzmSe9qkdcbwQSsjaifVBZ433Ue82CDdAwAF1dfAMi",
  "key37": "5KAzEGzW4gMbKofA8iRBXuWtmPLLaXYCfbwN79t25rqs7RFL6KhigUQvVcuvpsmeQBTPPB9AqS6mV32GXiebVPhH",
  "key38": "2WLrfK9jrpPX1YM3pq9EzFjVYhaRdc8YTpKm9XES1vzxituCjZnrTA8ZVSxpCYaD3cQgCJS3WGRJz39BEHEivDmr",
  "key39": "kR7sdbn4auFUkom14KF8He3xgefgnMCK4bW2vB7kf3F2CjfDKzMpAWfqMrwbGjmCLH6RyCkcFSuhVBjNUJHhhsM",
  "key40": "4Tsjf2dWJnRwdxUVxUH5onL6o4UsiUcrgu1pHjBTfibrrrEvgt3Ye3sqi7rQdLBtcoqtC3CSQwtQ1YtgCuWBdzcq",
  "key41": "61fMQfHctUyQfdj744Lf1FGBbCftuFeayE5DPw6bWSQuGo86P9UR9hZjyjap4fZoGPfdCgxANeiCkMu8CUufMxPS",
  "key42": "5mkqc81L7FUgaPfULWytPTXCKZEF41M6fNV1gYScqMy6wSyB2e1ANNQ8zXjjRwaHXjiGWRiNqGsdTseFyBMnUt2V",
  "key43": "5c7NhE7LYLjXF1t11hnwmzXedqwNPXvXobKjyXdqFckNMzmqjQ6Q84UfH1SKn43FL2wchpLjqjYGTW3ZsZGemzbo",
  "key44": "AgnvxkSnYMBkCJYw6hzr9MDkCf5AS8zv38ycxGHdxH5EMzdnFnCjAihyXQ5e9UzV1QEoSJDo5r2aFjDgC7Z2yhS",
  "key45": "3zdKVGTvyFjk9sAejytSySFXLp1FzM2xHbjFhapPAmhWSBGB9YCG8CSbQJU95Qu6LAFfWDH4K9HaHvPGug7JgYZo"
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
