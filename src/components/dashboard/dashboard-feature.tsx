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
    "2GjhrSmJbn5BzhPBsLeEfR3LynWUXRFAmn82BYuDrH7Qsip3eN939FvSThUKWpcg7VAYGzcGGJxQMadfZ5P5QwS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebf2W5h7e5Du7SRKdcvbin22qzeBNKsc5AwSnuyaMbpEpB7ZYa8t7QWqH9JAzRqkCmaCe8jAXAkfc2sPh64b61a",
  "key1": "3KXUkgEuGcM5hYsupqFxViHQkafAFUS3bNjSUbKfz9WUi8ifusTEPmNfBYuR8fj6U3JXtXaMx2vfma2GFmv8UV9A",
  "key2": "5A5YJNvb5BYSu6iS8KvhAeb2q975ZJ6s4GfNMzDHyXgjP1fTaXuVD7xHBoEkcXA5WWdbUG6VW4X7R8cexiymhft1",
  "key3": "Z7yBfW5V7i5smEYTcE6YFWtEuwzQ2giDDR5os6PxBMRnREJ5crpXj4nunTjmCTHkm6KC8vWbAvWUw3pzSmaBPpT",
  "key4": "2fbLCwJSoL5ZLKYQNNBm8Gbbo1Gn2G7Lrn389YwTMtBZfzaK85rckPYPx5ougSavgdshNK6RUC3d4cPjqdUXVc76",
  "key5": "5c6a3WRWktZ6rHwKozx3gtHrmRRT945u6bh1PnMT61Z57SuKgVonPEhypma7sYjzbBPtKEz87DRgJ7DT4tQzQW5o",
  "key6": "MbWeKJU3cKScgR81rSkAKnWj8ZpMpiYBuPY6vzCDXjX9w3qFDbU7i3BiFiZaXRHtDQDfmaBFFZQ72Vi9qA9cBX1",
  "key7": "4B1fVMK4HFrxxTLmyhgkS2SJqp73uSrwCQBnLsnNLc1oTc7sWYRUVmi4g2eRK9NH4EEvCyzzxY1kLUjcsbscGRT",
  "key8": "2RqgFVo2mAmZrGdVj8W2DPufHbsbWMGkutD43NhQGLofUjdf7LaHsM4yXLruApnk1yfBbs5LzLtB1TGNd4s9xzXv",
  "key9": "3REfP2TMadwnckNm56iUysRRMWRvYQYCDD25LrK9svKXD5qsafzq7G1Q82GkSMNZBBHhAsJQjfQJhyixrPxCcC9s",
  "key10": "4CUMWcwn7wcqxixcj69unFKfeFW2uL4HBJzaK9fZgQ54hJquLHNapaMakq1rd1yzKFBN4kAiQCTefvxj1atJHeih",
  "key11": "3VqNpgQHxFP89x1cchFtFA1NDPbRfmjiMyMK67RrVJFRE7xGeWWraxzykZo9MEWtQtCBbuAY69sDTruvLasbsc8h",
  "key12": "46KJRLjXszk2CjYKMaVC3SKMh2tcHtpMU8b2D2t47wV8e28FxjR4rGQQ9SSqapncB3aCZSgdw4gxZYi18K6ERLhZ",
  "key13": "2KAX7xfhQzi2mdwLTddHdXqaQuGB6PHNwo1SWFpv4rcC7u2Gx785zMcvobjZ9FVT3nmmF4dmU3hDvdm37NjBw9RY",
  "key14": "3dbWVv7AsoTuEha6TnyGsWf9QtHwZQMXErdYHjGNJPo3zHcAcKCiaUTi8TJ2qt5vhf4yyLvvLvd3cHD3k8oL4Q83",
  "key15": "24A6SszvHUvicQyaTa6U2V5FxnAiBzkp6q2ncQVQByNteQJ9JVsGTUSGqAAbj5tSfcY2dwoVXUch17W3sCqj4AnV",
  "key16": "4ae1cSZSQko61SGdP7omt7ygGYhzbMn7AJJk1hLMXeQxQc2GFbv2Qqaj8iwBNEZduueQGjiSHy2mJwRrQWoVMaDZ",
  "key17": "4MoB7KE87Hx29votqwEq3ftVeoynqvthtAEiv2g7xXzpZ9hmksdmxdSvCiBZh77C9xT3ADhT7Zvm4zPJWTxfVGnY",
  "key18": "3mbiQM6czAbzejK4fVju4gNTmAGcZGm9wNBy3rBsqEDnwVrgiz6wZUAYi5Wpe9npsLYqRQMGUiqfavXYGex6HYvT",
  "key19": "2j5dVfexanHQBJUpiFD3UpaydFTv2kpVcnJ4VSf7noDQuovXjy7jCG8aGEMg8bXuJuEZpmZXBB4pGfpT2hj8Hast",
  "key20": "5R54mmaU8H4Y2ag8S4dbLr8LDXUJ6Gb5VEuByy2YCJ5vEErKws9M55MBcFo8yfGRqp15U2uwqtbBp47mLYEbe1bW",
  "key21": "2Sptcv1Skk8vsqG4UXjr5axWvJz5Trr4JCc2yFNH52MEQkug8k9enxaBAnQ39u3NAf36C8V2KzTunXbBB7y53XQr",
  "key22": "2MGp3bgomFoky161QCpAPwKZQHRW9ceeHuXE2pujhKPPyWRV4yq5pMSohSZwE9qUjGs2j1wcgToy2pfDfzDBQC8P",
  "key23": "3AELBbKT66KijgJYyyDSg8yUno3aPhzMbPRm4snbPfUVpESL15LJGnnu4R7DYCtrJhhPQ9PHcXCU2KowMSWeh3Gc",
  "key24": "2nLCAHvQm25sSMJH2FS8FidkWf6RZtcGBRgrp3tAqrPCmVbVP6urYBM5AbpsvwPrv5h7CHpRDH8xg5JLC3hUwLx5",
  "key25": "2Zyq53HeP89HTuw6XqnnEqeEdsmcmo3BMAFktHQbeFPPoBAd986CnEFaUN92ZNR2WtsJecy7dxnt7fSVHAHc429o",
  "key26": "gAhS1coqQbuUEG4vUKNZ7SUyorr2CicbkMCeU78GyB4vGrw3seAmZ5tqDuPJzNWYv9BA5NKRszrqvxzopJBgnrQ",
  "key27": "Xxqow3TY6FedMDvHSTvWARqNVqiesricVx2DaJXAL3i6w7B5kP1JifVuByrS5tWxx3c3rL5WpRMCFzrMasdwcRF",
  "key28": "2pxwNUSKQvKJcBYz5YXKJgWMhDVjh1qY3GsvAags2vJkrDJfgJc3RCRcb5s7XYfp3Zaq34WpV8cqBHp4bCaas1xt",
  "key29": "LyWzkfCzzLcTwWrCXahxhpD2bG9PatvcmmoM8tnuNqHFAQMgdYth3Vkwfucsm5HT8NV78s5bofJVJSzRsBkQSK9",
  "key30": "4EVZPGMt84jZAKWMGMbfVJZCfbmxjQ1kbi9GBVg9p4Ugd5a7WySzVFZy3VZUR2DqekuDUnPiuByoS9bJrmqxaMm2",
  "key31": "QxxpY2RctuWVte2Za4jH5AbUTacRCTqZxLrNypSkDgduw7Wpy32WTcXBqHdsJnN2hSmuUmvUd1i7wPm87NXFZXu",
  "key32": "3TMeRzTJyRCAto1B4BYhN1K5DUwGCGfTPuQZFBTe11QNUwn4BJJqiC6pWs82NDahYci84vWZ26c4rUvoLSRTUSng",
  "key33": "4eNsYA3eN9XQcRah875e59zEjuPXZqMkdfhbtCJEAXWpysh9zDJrnWJXVJfsFF5jRyX8h6NJLdT24mrg2t6fsyja",
  "key34": "2A27i5M4E4kh8WXkg95B5H1y4KgCaqnv3puUy7Ce4uAfP9w53K39W3QvyYMdPG2xGgduqrDprHsgSZGYXxncTDiD",
  "key35": "FJfref1gaiN9oGyT1z1Eqf6opgHHGtntibGNoiiu3VybQLpiD1Md9s4x7LTENGvYN2hvnWFg1SVAtx4QVz8WJh6",
  "key36": "4ZWfr8dwiSERHCs5B3zugLqRU9ERDSv4ZZp9ti2rJRbc6DJbewpybJo3qynmfaZQ2KDk8P6sEpt3SehEDgpDTPtu",
  "key37": "5DXxLEnBH7Mpzhm9YW8msB4Y9zcptjSf7GadQyEV1xNsxXDXMDtsHz1v7WjsopX1QEpSpYLLw6a2Lq63HYJib93j",
  "key38": "tHUcPXnE9jP7keGxdMXPvaWo5wEQa1fzdDRKyPMna8GFMMWTQkRg9R2v5CsmAuiU3gvcrX3Lm7XzTQCZgKWQSBd",
  "key39": "3wWjF6gbWhDW1e1Lyqqr1gBxrpa8XuRVmJUo5omZVQcFhzCjTx6UdjKHpi7to7U3dGyHChJQv7k84pFHSui43Pz1",
  "key40": "2ATcu8vsXLyxuwib3jvZUoL69bBaZrSvF4vHNBS1Rz1rEb9Fb45HuaTg8p76MTxCEEqiG6WhyiisozezSD9gdyq3",
  "key41": "36wEmHhsRCj3YeSMPhVFpayxQFqo8EWNjf4PA866XBk1cU3vt4huCHsokrcAF6AKmxmnECwpUxv5P8F36G4iqhz1",
  "key42": "5AKAUBbPQsHdMsk8BEKyfExBsRFEJGfACS5ZVtstR3asU1BmhKoRfXcS6k9rCBbsGdkKWBAwYBvnJSkWA3e71M7V",
  "key43": "2j6h7xW41YJGZcvgXnvGo42GEKzmUCmbS2CkXxtthsRpsQsqXzVo7YKiBZdLowXA5tugvKTafQfXNjn7cd8Lxxe4",
  "key44": "37Fz9hxQDPsW6PeVUCEcuZJdNUko9rz6hYWkFWhU8PjNeNCEtfQbyEooeEzTjwvd96LbbnrDGKsujmEqN1SW29bq",
  "key45": "5GC3FsbHCi8fasv7SSaWfNfnZBXCJoQxNeebPZjEQtg6KP8akMvgswdw3py4gTR3UvAHAbGYiXWiaCGuf826VYe3"
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
