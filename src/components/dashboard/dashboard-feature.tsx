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
    "JT9rEGzoL4bQLRSwR613cn4M1dQQtN4EGq2mrio1UXnHQ7bJ2KzN3QQqrJnzV6hJEg5JKhBdo2sqWj9QSaVyjja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8apTbxekL1sSRYeS9LHD3PPDzxgMmU9Mw2soQkddH31nXTYFABSP7gbE8fS3Hq64Jvg827fn4Ge4WEGu8zstza",
  "key1": "5CWVj4D8RV7Zwzj8AbaMTck5Rx7Beq1W4pw2hk8UFFuGgbhbDudj4mXL7W68UdZADsB9rsF4sa7T8X6nGQwwYnZW",
  "key2": "3nTZ6ggN1EsbDvChNZJe1YBhpADKcYHX2Hb7G9qpLMjbyuAERdGnByG4ghByEx4m16BEgmtrEUnqAPxh5noRdLLY",
  "key3": "2Gw9E6QN4k99ZVWqJFyX3ZjhQUvrXuKTGLQcTsNkRMsxeMNP2TiZUNLye2AaF8mLRqBDF77iDJqyfeYnmkvkZGra",
  "key4": "3U3jrarFRipB8J8MYBS3CYwLUyJiwfj8cQXBQmFyE82KREWs267f9EBPNod3aTH8fEheqvnKRbpN73E1zQxKcJop",
  "key5": "2GSFwE2ZxNRDnFGnubSD4GRV6piqvrryi2njRDaqZfxsEEGSTRYdKzDshXPfkmgHfexurVaH3vbZkYJgZyPCZFef",
  "key6": "2byccMv7ZvKzsbBL9PCRENLbcqZMjU6u7LWjs2rHwes9dH1mGcdLNU4oVpVQq1Qf1vR1ovn66XQnzx1ajXFjwVRn",
  "key7": "iU3qHUJgF4S4ZS3UA91T1e1RoEzjF8HNBpeyvtcCQTN4ahkNB8ZmdRjek4NWcnotbJ46ZFr7YWo5vi13M2Ahiz8",
  "key8": "5z8YfW9h4DgdvX2X7ZNU3crxa5udXZwyRUSuYwMqV2icrkdwTspLDUeHThn28eTaUoym8qLw4jTR1TUvqVK9ymG2",
  "key9": "Si8iavmbTfRF4FqvyrQdi4nqwDqgm9TREvnDW27JPQqxDEktCAMuUzRi4peepF7HchEPwkGjaZr4QoB5GdAfQ83",
  "key10": "4SsN4KpXG4dcmWzMHaXQPQ3AxdHsd17Y4mCtYCJouav5cKynJ6VwcNFzg8c69trLm4LkcF72xLUh2zCSV6vX8xtY",
  "key11": "55Zo3a2MoBMKE6gKNFVheCgfTR5GzYmgKXNCq6rd7TbAuzsCHdmB5MppQYA3USxb1d4gHd2oF2x2KphF5VjfshC8",
  "key12": "638cAEGRt7uj992qX6cRm8gFFxQBskfhTNsqZt8vezYQWqHxxFEg9AJpc2PDQLbaFsXxZD9mtFzJZRUnNgkYwM2p",
  "key13": "canc6ycR3RD2S2MxukbsW52CAhoZaq5TMwXH4eXGT6njxRLRMLwh9p2Jfes3afw2PVAYrNuti2GhGnWvtYghwKB",
  "key14": "5DNd6QQoStPV2seuKvHY4diQNYdxRcC43mygSBuJYDdQBuSvFr8URbFAAGozBQMyApWdZABBnkKnVxKa3gKLcCmw",
  "key15": "2oSVDXeriTLMCB5UjLbSgYVpXbw7xXF33zVTnPqAtcEqi72LWWSXCcmPwXTFcPCwT27zNtHNP71RK7csAxhFkrRk",
  "key16": "GS2vUSjcPcRjizSixc4JxAYGzQyXYY9A2CCdR5j1G4q1thAUEVYsALMTZpH5486XbMMdXhidGPJaz4XhDXPcw2c",
  "key17": "gbwX3KwcwdV6JPQAmGxhBkpPF6SMCJAG8dJvGk4A7wP3UvYqhWfpuLtvT2gs79hFFXPpgbvZZsGjPEgDAzg2EMe",
  "key18": "5HGQTRA6vmzfhzT5a3N1TAKgXnqFQSjAfcVmR55cf7vzLgNZAyGa15t4GcQ1bQZtZEECAbe8EU5gaE5BXs1FkCCD",
  "key19": "VRTqG5ohmdFazYncuenW7NucQZ9zANysD1YKpHAAQy42C3Lz3pH8D4JmRPDsZzttjcXKPenR1F1Fx7tbkjxVLnN",
  "key20": "5Q7DjvF7tc2q2HCiJnsJ8qKuPtwce6n9DQqMbpSDpbe5AcACCUePLF7BJq8LPr8ABifmjzAet96A8ediYGcodCUd",
  "key21": "3vkh4MkBAufacCrpxk6TH9KEApJ5o3nLwwEALHjcowdagMYcUWQJoFhg8ip1euKBLUnhKCjYaFNDHzwhf72aRa8S",
  "key22": "4UC9W2WWHM8hxBXAURdueWJgyk1zWxbWf13HysnH6rJ8bGiox6wdVKnXmsnTnJWbqvWQNwRWvvitVwSYbjTrxKww",
  "key23": "4qPRvH5ULzNGZh32rZXwJoU1uPug5HDmxXe1cD5FLy3AWYKGjV92dexkud31JxwBv8P54h9ResdZowAt8eiLb8NA",
  "key24": "4kQctVPtjmwvYpeGe5n2df1xXkwmDAaiK6Av1CHqfHCFqTu8hfeHXQ3iSsiQzRapNXsp4zeDGawcKRq8nkuLR1WY",
  "key25": "41SgB3ezzavfgg6eoy5rk7BFY87kRTVpcxLV7TLzst7piNWNFeSocjKSAkKMJhwPsAaqUYnk21T8LE6WM7gy2rKh",
  "key26": "2o7Kg16CyYHBc1Km86iMFsXBhX1Kbx2LTEvRnkNTPEoarzic73kQ8fLbzgmQwJA6J8BacZCQvMr35hYQpDvuSEmo",
  "key27": "2w9s9C8BN1i6wegP75ZgntL1fTFs9kEY97eGEQ9aobkTKrrcPdRAobiJfgACR5wZxFDiKhtobiMB2v3sncGZjaKh",
  "key28": "22FVdfwrHPZRx4L1fRx5xp2Ud7xkyKxhKdMRwNmProQ8z32Ghi4ict4oZYz6d3RRU8NMB9JbwsGb8AaTLg2twBFf",
  "key29": "5fWkEU1nzJPd64Zyry48pcn59ZrPKrQ7yoojL9KFCEXSj2cHZA3DZBDayMQNgugzrFetcPMdnh6BbxSwq8hSTPT2",
  "key30": "biwZ5Y8feiQ3pDQg9tatPvHtCrNgoGHDm4Y6JfLGJ5h1neAtLQG3saPzgP8CHp1GfXcuDkzm3wvajxYDpZF41FD",
  "key31": "3vLzXWDFk6TFVCVXqD8sCHdWCeZJtnQWCo77nU2GBf2RkxbunwLQYS3ghDybEQHF3kXUvc3BQhhjcW6JSQ97nr8N",
  "key32": "gY7Tg2zzeg6XPwkkzL4WXSmNkfdAZL1rystXrTeuuofwbwLeX49wQQZkVaKU1nro8rDbptkKJ1mUFmH2RHHRWLn",
  "key33": "4YamifNSuHwbVt3C3XhTuaAcj5RD6mJT5V8To6iLJi4KhLt6f1YHSVDhVgMwB6r1NsWq7TinZiHBvR6pyWxqnk86",
  "key34": "2ayYk8w3nsVgCCa6BHvhH2SbUhkCNzajwLqYPGpA5wmopkzk7THfQvENBbKiKJLJTToTLhQ6Nig3tRESB4xNswAt",
  "key35": "2Sh6nf9kNGVJ7xtFTC2UyGrADsqgTDAqzh1bUTeZny5p6zjRR244TLF4HSxtUbC1VwacmrR2hUP5utcqB37fzJYq",
  "key36": "XTQu6Ae6YhKHqZ71sXW7f3KWCF2ccQs3fQzzS5jLeL6E7cLhxx7UPzFtkkQdQvvJmQgzecEbVxMs2gjHwXXd1wE",
  "key37": "MSGZ5ke3sQzGv9kkDFbDdNS8ZCtiJihLu3VqSC58rD2HbsmFMbhrgHjcNrtqQHSd25ETrgR8Gv6ZGtcTYvMrecc"
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
