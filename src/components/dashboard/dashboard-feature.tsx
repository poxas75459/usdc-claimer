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
    "Ze4bQDMbz4TEnN4mSTEuWG8G2g6at6rJ5EtnPNmCuy4AYwSbKqA4qzdaBfirBhbPPMhvieVGABiGc3Q7DXks19s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sTuAhNwxB1pTPnWGv2RwKjLxMTwgZjGqekkPR5Rs6AixMjwtcaLVvFm3zmU7wktj8C7Dba5zhhj7149Z4ksSQa7",
  "key1": "38shi3yhXqkBLRfRG9QMjJf459pgSfvTrcWX6zG3dUuwStxCGkTmeo3GZw1GNBc4SQ9UfvnN3jHdxsHHasK4rn5f",
  "key2": "4fAbHaggrt3PP4jL9omAe7yxFG5Xj6xkLHYik77x2W9mLRhMpgcJ46oFEhhxDfVTkNLEsw7aiQ3WpWGGumePyC5K",
  "key3": "63DGpcfriHVjvvRY1WX4hrunz5xbSkuC9jwjVNz6pRmbnMjSyEPccXo79EYAfkmVdhUsoyjhiVCYpQ4ZqTyKZvTo",
  "key4": "32L2vAi4vzzU3Hpif4NNuGoQcWCbAT3AecL3hi8uumBquwHpURBfH5UQTpbiwZSRcQU15nG1SmcjKGgKXuSDWCB6",
  "key5": "2LHH4wGgPnHfDysx1yCBVTh5q6846wp6NHiw52HSS63fLPxna9Tw1bFqbuhACkA47Jcgs2kqzdBnsfi1vzbHJHyV",
  "key6": "5SZELZYdeCm1XCPgidRsvPX1JYAaayLLTY7b4XorQe3S8RDLcRBCPzE5C1H5Ct7CMUf8zJTtp414NLsHJLFtYTz8",
  "key7": "2KLYMSLFZioWEWFZMUeWW3GrCU1UEk2oGD7uJdBAEYc2oVGy1K1mqAaf9tJHXVE9ECVFt1Cui8U7tZRFDg2BKzpE",
  "key8": "4cYqF9nT9HpzYSWYM9xJYirTDhvNeisp2v4baztKnYdYBLqoYCRTbhUrMUW74taDABYQBkixsazfMCSoLe8G8tL2",
  "key9": "5GSpFgzzdjHZp5XpfHVp8yYGcTPyqdNNpzN2bk3X6dbTsxLgrgmHgUKTpVmcgyJNdGvquXMhTSvvpCxTkz11qjSR",
  "key10": "5zAKVByZMQxsDDEwiPvqqunGyqzxvmXWQXxqhypMgAVQ6gEvrKosgVitioe9fe9HadrNgetxayznhhXYWvnP6j7H",
  "key11": "3BvEXpNt7jaDqa5egpfza3KM4wund8yBG4zo8RGYHuCJu9fNmP8yDBHLjo3WeTwMjfSmGPwBPmCNT8EA7eLTcmx1",
  "key12": "sLK562YcfPgtK9Xg2Jbcryw2XoH961acvCdp1R66UEBsKhCudideyhHwaNL3GWZasvwpRirFYAmPQ3ZhJ7s98mK",
  "key13": "5DQqvVvbiLJFk77D54odU68BJrGJVu3n8crNxt16TdGRsmH4fT9nDK93hyXkAgW9egsKLp6mfZfjNotpSVe2KNbq",
  "key14": "My697RV6sEWETcYXpXSjgEEyH75FrEumVJpfuK5TcYG8VS9hRu9WJ6F34xeKLdfshymeKhznVfLMsmR4ehPxkaG",
  "key15": "2PWPRfdBXsutCuzs31d13CZSKTgn1N528WGdJVAtBPhtAA5zVCdi2q4vw7c5RLQreXA1Qcdd94V46WbvjGfWzXtL",
  "key16": "3Xw6Kvog4e2jdRs3diZdrv7iAnzuhdd5Sa8mUtsD4PcCYHybXcoj58rqpESFb67LTSpcjBXywJTZzr2kGXbM8fS6",
  "key17": "45GS11mFEa2fcpsMXC1Mjc4And3fHiRGgMLCs5zM9STyMkEkiCBB5VNsdKh41xrrFtB9fVUsZyojYoDTzvMv7J77",
  "key18": "2Zq8jGMXovxGzBnjjNc8Su1GSsYgP3fvxVLaPSQjDYQZbwzS7nzRGJVmskqvTqnBPr6kA29KWrHw3E6ftkGtRYsY",
  "key19": "5tKw1WZP9YR1gx5Hcw7ctrd9JE7uC6d2hkRqh2MP1y2CAH3dcjuGs2NNqWHhX7K1uYuDhxbfLgqJVrRgwhGJzHzr",
  "key20": "5tCDBY43LorYjA93bLPdGyjUQnUWFPMvFXHgDNhKM8K1tVBbKhVDQ3ZPzaA8GA3oxWeE9svcPGVfTd6o3n9J5sMR",
  "key21": "4om7VYmky4vNkSEXkcgDVQt6ZAjVdzXyphz2XwKTeJLqPcN77R5HLrDmuZgAkikRZyiiduWhpj3tVwcN3CLqKfwu",
  "key22": "3jfSJPz8PDpXMTTa2JFdHC9aJfjuL6Lqwo3NFFbU7c91aH7durtCgJ4QtRBRe2ZAERNABjY5hmvS9QyAG8mkSnhD",
  "key23": "3tpgdBzocZP5VM57LWoDLf15DkYf7EU6MZNPXD7ijTHHU6u7dXLhgkj4zjFgxemnFFxtxpPeoF7eXaMzmSZoFQub",
  "key24": "2h6fmwYZY96ap1DTTeaPT7REBAjsiSZufAYzo6Unygktfpp5Pmy6b2gPWkzwnQAiiWrAxeRcPiPReSzxxcefZxi9",
  "key25": "2sATUwMs7M7tZuPMgLQ7hBaMJjue7Dgxa8C1rTEKb7X7Cz3MnTbqQuWVGkxLXZH39Mh8Xoy8XrTa4tvUEXaahx9H",
  "key26": "2n9vFZ1ZQoSCR1MNJVfqXBftVewwwTdojEtEcMzsE5yd5Cq947KqQx187Y4WxC8FVvE4jUXBjtUBPd2TwSNnNTSo",
  "key27": "5VZoAaQubLavmw3nyTmZ7LzWgfSyA6qS1sqYN2rQATnU2fuoDAvwtx8TrK5tFgox1yZpMqhToGFT7cnEdno5FQfQ",
  "key28": "4a7cHJs7M32SSi225Q4SB3Vq3P26opsdiEwsMXMTbsx3nXK16GJv58wCNyhwBLFCSLMGobKihP8wn2RiD1Y5bcxS",
  "key29": "5BqLdTSEytG794EgzoJWZQMDEFXSpWzGWboB2zkGxuiT6fPqfy9RFNhx6Hc4pPPT8fiWEcKJYYamLbmA1WGgakHv",
  "key30": "5wQ7V7wfsLbSmaiTviuzj8yc5YHusz41cVG9H2RjFYNaavSbU1r3znVTDJ58NFsVpF35BBkPHSJ4ETa5EQ6eGsXV",
  "key31": "4gfyif8hC7WBceqiymaMDWWad6Z21dZVzbpRUMA8yjnz2LpwYjLgcjJPVhozoXSNcC9oQwok4xxrebaBmsQmrVPc",
  "key32": "V5rC5zpwmLS2QzcZ5zh858dRXaAmFY4A27RbKQEMySGWVXaUJyyrCk7KfiBEqg3W9fi2UEXQejUrxnWgze5tvEk",
  "key33": "2s9sacj32a1VWteQugJY83F9XX4fZEKibyyrngdXWaRZ1yrMREELzR7DFzaZmy2yb2r4bsWGFB5138wSNQNoVN6S",
  "key34": "54ZPdf1ThS7VBbFGZ5fjFL2PpTMmR7B5PBzfx1Qdvs3efEn7RMFZCwdr2ZwYW2gtNBL2GoHqCCKy7NwTACByrW73",
  "key35": "5Y3WSEiiZNK9yoVRpaMEhp1GeGE7vGMTDgeSEQBGddD3Aqs3FFekkxcJYyZPEEstVkCKM8G16CYv6po7QcJnC4tN",
  "key36": "4nngo2V4nXVtNosMnwLr5cywmN1ZE9CBrqHas7gs9QJB5NcNWrVrxusAfYqW5tgMuujiBGdGiPRcTunSR3JuJ1Te",
  "key37": "2Cnv712o1TPdtCW5xX1nPT6dbKjyE5wZUE59vU7eVqUy2rtkBpWU4yUkwbB2p1L53fwxK7rmcfpZ5Dbw3jV5gy9g",
  "key38": "Tpg7YkWLUKSKAjZCTwv1LUJaNM2yx2DnS6zE2c1EymbD96k557hY64WSmKeoFmNpcr6728wHBydGJkpu7HZMMtE"
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
