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
    "qNMQ7AiciQSr8NGtAmmCihCCQHTq24MorRWuXsEXshquGz9MY9JTK2V1ujSzTTmArQtkZ4NQ8gGKcpkKrxr9AaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRBZj8YQdQ8wnCuuc6FdpztEzkqXp2eAT6AXvKSVViBGB96g7JsUZ6nfCV6Vsu758mKT3QHNM4rJJU8EXiEMTNe",
  "key1": "2LMPz6k64eGZ1prLBJZSfefXDf2trPPTE4NTHiYXGt5dRXa4ybW2xp5fia4YQTGCSVsYWXD8T7zd86dTMAh9W3eU",
  "key2": "3aNpBcLN49b1D29TAE8kPTdBB1iuoRNyi9FweHtQcELekWp1CbqUNdd5MsMkW6AJjtDtJpRqRgNvW2na59xigxx2",
  "key3": "5oFAaxKhvhHrrN8XM2nVHMq6pDLhr8ePi6URQR9K9mtANo7ibsVUoM9PujMPZjtzoEB8TSXvNPBsb3ygMMsT6tg5",
  "key4": "27pyRkTayWMe8PQoiyYZXhVhym7WVetPVWjnzTBk9JsLmotbCmRAHbpfLQ57Fas8vGqguyMRRJyvrwTh5L36Ht9J",
  "key5": "3i8VyNrt5FJeDeyeVaHLLxuoYq1kcZNWRVnqQuX5mwCkFM9oXL7sw6J7jxct13pH6ZWFHfCJ1jhaUBVzvw4tG6BS",
  "key6": "3ftdT8L47xmgHXqUZS7vAu6pn8emdF5jVP85oGajFgaaETTmUGjU9dpBdkWFrbRHyezpes6BLSYRZqbLQmy5ve94",
  "key7": "5TSEEM62UkHBTN8oXMHMeqf7oKmmZBBTisfTAigH1jsaqFQs85RZ3K8tUVaPJNBJaQsfTpx2oCJiyaxx5zwDuz2f",
  "key8": "ecFFKxTsNyXVmuBZSJQ5BSief2aQjR6EgVdA3FiAT1Gdsjbi1vRMpCsEyQ53Zi8e2FEaovg7aNkJu1gdMLM783i",
  "key9": "3fHJLbKnqaGAfzwVe8GSnR6wnK837MbtDKWMCiRhoGfC1Kd2eEyj17YiiBTyeLSwKfAFB4MqCDNY4dareZJWCVvb",
  "key10": "t7yL7dST3XYXpSLnzXctjeq8DwBmQMfiVj28U32tKAgrh2GmjEsWsWnYzfN7UxLGwWfQJUMVCe6GUyDovp2CzSU",
  "key11": "2B7SNrXZA8mjgXGF5RcHNJkJosrn1q3wcRrPrH1x4ZpwjXrs8dD6hgBT5yheJzffSdwnwEVotS8oM7CmvWF54ep",
  "key12": "2xD3wH8HicUTvac4oF9nBu91sq95tyVu4Pd2PrDC7Sx8eZW2m8L35Vw3r2S28guPu6CD8sJMho8rL9ginqHBqKRS",
  "key13": "3atAY22t8T2NqBBiqcwKj7x9JHZFgKfLBPgnuzvRQyVndDjEhirfkbigh1aCoe8vbZLqCnPev3VA9oDeqwM3hr6h",
  "key14": "2m8sw72w6qcYyppyKBevr9Q7mPEUC9XJdKqxB6uGf1FmcrUvYyjDB8YtD6gUR87kNgDDcTat2ak1M73wrANeY8vH",
  "key15": "tEDsUN71GQThDhNboszTVXbu5fT25pxN1aGK1JQnb5sj4ap77mfqgiWkfSaHpbnNTY9EtNsPdfjg9iUiSoLyCAJ",
  "key16": "4f7CDWSj58pgot59gHe7qzJaDZ9yCBYH285KsCbX6K4RkqYcQpY7tUHWD8piLWoaqsP4UeZs78PJkU4cy2vDmoJg",
  "key17": "5gMEwdggStsSwToivJq59QbrgdZqm9NuUWjcr7w6dwuYe4sqEF4etCAt54A8FCi2W2e1fES1B4fT35Uta2oNY5Ch",
  "key18": "X8N8DuFrrK6XnybMUm6eRL1k3tZsVuQxDoinMt5Hz99mkoBeF9ee7YbbEKqt7q3vDu7qnB6Fkv6rjrNt3Wz8soz",
  "key19": "2hA2SPzecZeY79k31t9RUU16uXS8e3n3RMyem8hcrE4PENFcMYi1aaLJ2ADd1dVfiZBqJrBrajYSgH4Cvfbjs2Fw",
  "key20": "5hNCsfhN1ha47mesQ2vUwfFmyGp53GU5m4bfRx5HtJQAMX6shw6GddWjzXwyS4K3ozFsRdUwdQq6ENTZ9ERK5Xxr",
  "key21": "4YpZHHscHdqXfJrKxEbhnqTE252vY7R7kKVSsfwjSM4AyMYKcWgFtRCGUZx1QKU4Rg5g1qXZemuRPAoEM1bVC5mD",
  "key22": "3yjx4Fc3VKSeAenDZ8E1eB2TAh1gcByRuM5bF7BxStgBGF6BwUFmphJLoHNa4bPtg2ZYLkXZipwv29hvoURQGsPC",
  "key23": "2RfUfe71DeFLYwpMMXeFLa4caQZeUwhBk2VWkBm93LjrdgN6HTCqrXbWR1SSqjH28JGv48FriMtFQBZjtaao97G7",
  "key24": "4HyAxv5RBqzxKuih7DHccVDQeWLs7mPw7Ude4riEDmsec7xfFLFbf6X9kABHW8cPVBrc7tsnBykbSYje5D8iZhi9",
  "key25": "3f45yRmtG3h6mNhREChkb4cqjY1ttENPhkNGPWT1KcsVSsv3cTiCg3LRYA8327kryx6T4fu6intCSXShDJwmDe9p",
  "key26": "3iqC6HBe6gGP6QknBCm6bK5z7R49zuurxQbArDp5vRoYGLCA1n9YRU61ZrESXDFsXgXHaegV8djY2YEqyEGdvZfu",
  "key27": "5d8vouqAzu9SWnpxBrMerww1KTA3PpMt4c2dQydWmU9CNUV6tPo9ZE3ah3FYXqzaBpcAze55N5qDAC5tLP5Wt2iS",
  "key28": "3btiPxy98QRWGdrgyra46oKHwJ3idHp5Kc8gkSn239RtLdiyNbBdm7hMFQpdx7KJvYgizHnU8sDvExiKhZVsSizD",
  "key29": "4rHjavLGZzEiMWCa4oBSkQs1aMDkSaQiLZ26uemaNfUrmZBw7ZPqekkrXW1hgJXbt4GPtimgcvo8WzZEpHrbsTTU",
  "key30": "5b21HQFWVzpzmA2T7iWYXiZQpLS2nd8cR2vGTSGQWtCVQHMcVnyMMavFvf8jrim4mP5t4wkmts9xxJf9RDBjajQA",
  "key31": "3jYvztauEbiPLgAFUmuBPgUukNi26Cs76hVHWdTz7iRzvTuDQRheLCu7Z6w9MwAjivsr7ti4p1h8i5hAghVaXzgM",
  "key32": "3em9z7LPCDLufun3ZfrdkHcP5dsAk6EUt2gAjoe29Hi1wULyzMpsczqkCvuSz5KRwMq3BWV45UH31ede7ds5uMtY",
  "key33": "ebLQuoV7n1oJEz9CKtZj8UKXsJHXszG6BGfmsfVrS8tvaCiGhdujtZQYbw8dQ9s6o9h1RGCYqspQF2Y7fy2vtym",
  "key34": "2oWNacdF1pgBZBqHPkFk4TfVbvnqtVCzhV8FQPaJmW8FYoR6Dw8xtxFEB4XAQskTbA6gxR6GLuc8cP338iSuvzzZ",
  "key35": "4GnoEKXiU5YDPrZcyJKtvkTYYgmgxuEh8aGDckuXzzK3Wb6gkV3ngcQF2qL1hv4SHda9rfA71p55N9YeuzFLYU18",
  "key36": "35ThDBuW2V8RGQMfExrpUuWaW71CjZRHWvdEmoTivsbw41s1SG3c4zWhSiRj6Y1UYSWuhxNg88mV88ENcqzMrjrJ",
  "key37": "3XuApoSo8EEVxs2maPCafYS2x3w6hbt4D8M1PtNABUF7BbFQrBgQ6sYz1XneqwP1kEyHD3i224RhkDLZm8GqAzau",
  "key38": "49g7dnE4XSthJtnU1LdbhVC2pdqnH617PkynBHkgtwrkYK1cHbjEtunbq1Btasp6e6nkNDgJNvCV4N7azvZgkPee"
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
