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
    "4iJDGmCMg8zNtMD3KQLmioPTRtjk62CMKc4JQZfCn92WCSkyfrsMhdiPAg9hRsQBKFkrPQiXyNuuuS9kSCihfScL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HgEwGNwZkLYw82p2jt6QRGLLFspBeaHSjwR9ZULtB7m7oLGKRotiGEMCWQmUVTAizXfd7qaDmXJMLvEm5Yb8niH",
  "key1": "FRGJexiw2qtCPTVb4EbxbSTjfL3sLfCePGYTyiWG7TLfoVHD8H5nqd8Ykb4U4X4kNAV4g5fschWDCJQMyTpUo1n",
  "key2": "53fDL8iCM6UgvoLmJ8ohPPaDMpRSMEX6BfhUhKqzJ4iaZFwCmEYFhgUBKCGzh5UwFYurTGYbxCLWk481HoaDST76",
  "key3": "a9ufNV341pqA1j5X3KnjcWY7PF3CAbbpvRnbhKPpnEoj13xQeStw9Byfr37WdXhWAFJPiGa2KijZD6iiytJEL1X",
  "key4": "4i5UsFBGnEhKTk8ikrDXmBQoJZNoVLMsgKPozhbfXxCqtXQVTRs5gvkrrkypKZnbcJeRu6zQL8pn5NFLtRV8L4QP",
  "key5": "4Vxwm8w2WcAQnbN5UpGyyiqV8oagN2wn4DgkGDzgsGZhHGKz1ryvfenfFpCex8dinJ9oP4HybdN36eFh1fR5g8SE",
  "key6": "n4gKwFfYkd2oXLKaXGjG6J8wwHXmX8qJYWwu5tL4c47uB2owkNJNwBRFm3VK4HnuMp8wf9FAoWXmHGgtmufpPDw",
  "key7": "4JZNiCjW3AKpjZJw23uUpn42N7HF9MdF2qQyzDJ3tZhdHBvve7R469FbNsSLdjqwmQ7jfYbZaHJYckTdyKtyay8L",
  "key8": "4GSdd82f4RcxKQ8hF8hhibBgZ5uL121rEwDuRqjbQAoEgHb2Y2TWStN2vGnGJrw9Pka2qg4xpGb3UxtfDkiw9Jpz",
  "key9": "2XhkGL2izC7BPNUkJEu2YbHHR4AzykSoLekfdmjkR136ka3SDeDeakrUbTuW2K2WQGYRRAQeugpLk5eGMYVuLAVr",
  "key10": "2rQN8iBAudm1C4f1vcfbnbYRU3eeGN4wrSt4a24qdgKth2xBWHTybesCSz4A8SmHpzN5xGHFQMW9aaAt7UwnGyeT",
  "key11": "3C5n4RmiQkFgsaQsWb7aHYaY3ikEwrrVYXx34ofpvZs5rWEjYf5h1zUEhvPYnoxA3ffAXrZMbPf9Ed66VHnej1JL",
  "key12": "4gWrJNAi2ZebLfwj7WgzTqmSiBxrTb9iWSroQb8RiXx8zru3wSpGSuBHEjU6FfRQY98oCkJnbM4ddyQTiheUaJJ8",
  "key13": "3kQXZJVawfF4yDLjUr1fQSjBbjAQAVHLCeysxJFmjCMYXZ8m8HciG7gdzKCrKnqG25gzRa9XuWKTV3azJEm1ZiC7",
  "key14": "5Ufn3EXp2f5pGduwF1M97A4N2917VGYXwMFHsescMqr4vA1y7g85PwkGwXqr51AQJ8Pr2ojju3Z2Gu2G9ffkVUDi",
  "key15": "2TqtcKtSB3gCWkcsRXFnoSD2Cq4y2WRfrWLAWRz336EbqMtTKPFPydRuoBA6PaVoEpHb2RyCKCLMedK9XCxc9U7r",
  "key16": "4WEPaLUnkewc4An1crwAeLdtFLEPCWMqBDo6fgmqCwj7sHr67Jt9X95UpYUaC6sPDngDfNt9vSrNYp1CS7viUUEA",
  "key17": "36T1ZDhX2xwf1PuWutKAH1bd4jTZDWJhpswrCQAF3yYKVtt9sx6X8rycabzjRgtyzGUAYGfvL31LeMa1pJhaa8wh",
  "key18": "3uvhikwf4zCGZTmF5wrKWZrzpknuiq2TconvmgsjUmveftLDmSt2wTwBdhbmvKV7uv2Jk6ELPna3nx4MmqV9Gkof",
  "key19": "7eS4XKp5rzfYGTiqGRd6tmTvGuRi2v6USTvTGbcXLjM9BgXqEx1YinaQfpJu18KnKr63GCZ7xMu4PNHwcj69Kro",
  "key20": "EJkVkyCCitvGijpQrgKZM1s3YC49enTCvZa4USWbwtbPhtoecddU4oPRRpUgrSPqUfBQNTRMMbDGE42d8w4v7Du",
  "key21": "5xE1THu1y5sLnbXgeqtbvivYPM4rrbwXvNd5uc9EMfQqzbmyL9SPiYxRnKJ7NWKr9BJngbPoUirTEfZz4zvDYJbu",
  "key22": "5jrx1G2KzFpyQLHteajGRDG41waLJZqtdqo9b8qVLUcNtko1JDM8XjkwYdRpUR9JpkPyFhC81LngemQQNcbjEoQH",
  "key23": "YUaNrxC53sWj7evdu9tPYZj7BYoLkqi9At3WxKHUvepQTeqeehaqq2JEpkTJYGynsFz3P42mNuMwHqQG1iVVrtJ",
  "key24": "4FHcXPhum9bCvwmiUuoCVgVayRbC9YCL8Xa51MNcjjUYR6LYYrPu359nYyJHB9DUq8qJibVeMfRDYdQDgfvScQiW",
  "key25": "4UW1LBPQDVV7VA3NqZsdP6tFTxiRV35N4BYrNF8DCYe8L8izw4pPaG1EUCJSGuhqhA6mg3oU5uqTYjEhKWN8kQHg",
  "key26": "37Ac5GYyRaDb38w7grNGZpXwsjmgDkGqP5oNBEvdS3GpfJDQX66MQdzx3W9nHrv9epTykJCk9Af1Xjzq4Uczj9gU",
  "key27": "2NgENcgjsVQbTo9PXRY5EysV9Qtbpqmt9s8tNE8EUfQFeioNSpMgeJ8vzYo55pAJSWa3ZZuR28EKmTxy2LDvjaYJ",
  "key28": "5auBSysYdoxyZ3cNgB83Jh74KkgSeqdRJ7hwCbFFwpcBRm5CXuHS2TCayY5VWeai81buu3RYQUWR7sgDDNwRu8iw",
  "key29": "4KS93XvefPz9iYATifu7FBG9BdhMVXt4cJJPHL3EaTgDwVxgiFWLqhTsiNdetYcm7CTFZ1HAhCn3pRU4YNNJv1U9",
  "key30": "2j5Egue7Gs5C98E4s1dqyDkrkHoYp2zN7nvKMhifjTem7M3EE9Frvqs3SWXaXb25xcigb5HVcAQ2EhAePqZqU4TC",
  "key31": "4UjfrcQZkMGartyp8U5Bqv7sT11VHDw6d9ZHtwFQXFXaCnEvN5NzJECtoNyiK3ocekoihhaDy2cyS8TRq6Dm3rB",
  "key32": "3xiTdihAbkWSz1mPpfERP8bspXBj9HMkixs7qxTka3RMjS7o5gwsMvjpiCLFjLN9jc27EaDPvszP88PbYTbddpC9",
  "key33": "42s8bzpa4s68DQwfvYFjREFMnaVGrkX5RLbUbYzcQsu28KwCfKeths3SeXJUuuvZSRMxfGPaN9JJ1CU2h3ZJ6PnY",
  "key34": "5vMrjskyvTRjHRmwAnY3ZMry44batAZihoMtbGKkXzd4GyrQLCvzg8X7yNdxPbvnKxpY6fJxqX2Nv9xBXci7eumZ",
  "key35": "2KajkjiYR7bkhFtav5e4RQtA3uAftiCgR8rUkL3PpQTpRRhf8kMF3wenVbYqX1aAwVGZW3NTLdy617bnsLzz2fdU",
  "key36": "3PqnnRqiWB5Tj8FyGix3zyxs1xwnEBcD3ag1o1GUo332oxjW5UwkwWkoHih1QEN7yAfngNNf8BzoSaRSp1vcbz9k",
  "key37": "5DjCvM76caWe6Y1fm9C5d83endZ8WJBfQSTehUHjQvBNkX3ZzPaQckVkb86JParmcKBfFwvCWKSF4CN4Ru5JC1H6",
  "key38": "5cs7mLbH4rwfvjScxKoDvLkwZSEGd7kpvaJd7n1qpndtWvNkrc2gSE2fgXDGiGryeF3h6hWXPwKogaZNwsiYpHoZ",
  "key39": "34DRUJSCxsby1RSxkyTRTKccb8NUVQBrpEkNDv6DaHo5eAkvmgvqEzXNdkqNC89DQ7s72pmC5Xrdgz8NKSYX9DKg"
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
