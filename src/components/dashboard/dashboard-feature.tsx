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
    "2eoX8GnCYXKL9me54hmydpx1Bzz22cUiUkQm8SBeNdVjwvnos5R76uuprucqCPJYqiFH3WAcVESZXKJ49YYQ27y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pyYeG2epsA5XpCyztJcUnxBHb4kfXohaRz2nceeL1oxzRqSo9sezMy5DUwJErMLnpcMzpU613wR41CmK3V82RSr",
  "key1": "2jgEKjnQ8Zja1CK2VjYZRRZiWNY1aaRgiMdL5Z7PUgGvRCmPPxKvSonRxdJXER3HZMKfuaL3mBHUycTkHodmoT9Z",
  "key2": "4eAmm6QaHtUirckDDwqaJBB5VoXWSF2yrun8VTaz1Ph8Q6NyMQVLb6CShK1zcdXGNeSc4p2w2EG4dwrPoyVNkmzt",
  "key3": "2sgfKcQCaYEaWQMqRbGUX4jiGAz81aU7aCs8FfirVL4Ecbq8ComVxSzFf98LDxAzNEkbDsR9yNPEip738vbFegqY",
  "key4": "38y8KgQ9KPfbtWbFEKMYvQ6pQEG6n3RfHVZL9LzLGizDYTj7nDPBdsKLwibMiRpfjyzFv29n1etVEVhp3TXDXrvG",
  "key5": "3cDzBMAYBNg7kcuvP1SEwYyKBcQRCrnJFbaTL48Wpva6EZN7zy53CZKQ7SxDKJSfzhuFd34wqJzwuMnnKZ3Vc25s",
  "key6": "5betLPUkKDjHoEmhNYiQYwZfQi4LiLcYPxpFe3EsEMxHk7WckWXrHk6KeMeBsDLogV7uJPvm9hYxYmKSTBgr5EhD",
  "key7": "2HpDQVnAq7KsfzpFt8gD37WYngbM128knp4DDxzvfvM3yQYCsfoufEnhx7Lf2RQBuceNNp3fDsdr8M1RSw72BQxb",
  "key8": "3L9dwSHghyFR3goxWkVcJNrTg6DcDgkCxknpv93rLpoP1uDfjBPeSs1caDJZS4EH4JxkLPwS4TgQZLRVhRKf5kvg",
  "key9": "3etdPtSd1MNBPfAXhcLm6jNd32AswirANkxdvycvTEN3iPtMM7CQCPAS5sJYbbeh6Z7cqyHAJZCHYFash15cChdu",
  "key10": "5ahtLZntingBWKGrN3pzCSqQBxjywMY51UU9FaweWbbCvVUXnVzqH9HrSt5XCiZ38B461GdY1cALsiwgUKZ43HmD",
  "key11": "57rfiYtKrtu5LuARGb6FnoPRts9SV6FWoSoce6eQ7Yq2zoDEDBDgXAMAHcFayXNTdckgnqBadPHhsoZdzJkk5NTP",
  "key12": "3nLThWeMo3jUSfEQ53o9YuriPNCnTRBQqDa8BWn5HKaF1mV3a3puNsRi1y5M21VkegnRcN5G14ypfr8uMEkzw6v2",
  "key13": "2ejzHTyEppXfzXfePSsP6XCig6M1FTiwkFY982mSm4qzgVcohGkrbpPWNCaWGWHyWbj5RFEDtMKtwMCv9XUKvMou",
  "key14": "2Bm6CRHr6AKewsZ2AZZZr9YXqhXLRLKtfe4PmwUYmLoY3ffuH7p3hX72WtLzhuTzNyfUjkn9ANi4ZrXuC5bqnv46",
  "key15": "2vmV3MsxBxAbyqxfT1WEtYWwVSW3ADDG5Q6W1nUFMKVfnFeHpZavp5kjgu3wu6dQbK4J12STyxN35v7uMVfRwMq2",
  "key16": "31MKsJg87H7mGyFNRSsyrLKrLEGQ7PL6Mdf5JNyNKsLMdepQfRkhRyyoLY41th6KYL7FgrS3xA8x9A3ZoPZmGUz4",
  "key17": "5o2Xk8NEEk47QjGYrwme1qjYsTZ4DE57W1TxPF4WYNRE6oibCUgTmorZB9ACMPFooK9LnZXKYtnENngnvyxyshi7",
  "key18": "5tUFELoyzQ23cbLsHEhZMALrDRJ5L6T7bFstRenCSpb1jSX2ZYPnwUvY2Etw4uKw1Xpa8V6AfBkVmMq3qxotKYb6",
  "key19": "5UWnbd22eEoQUWeGmkuvihPQC3XzWRwuEXhjTTm9Mmqwrzkbx1nCyMbzzQjXqKbBFeh1fRQfRmnBhjw8hZpnt46H",
  "key20": "ymBxn3aiwtuiUq66FVycFiLZ1uUrksfJ5hPC1DSTX28RGRcuufScBMDgD8MptMMjXeRKX7G6L6X5KKepFPmeMM2",
  "key21": "22Xt4N5SM4yHRTHPzsLYsXeMNN2KsG4qVnfJbYEJZJrD44d9cjv93ST8yGuj3dCiTWfZtciX7KLDqburX4pi5wbc",
  "key22": "v3saKxnp951dcqoBF3BCppyTuKnbpQts8ZcUtS2UXLqQbe9Z4RKzb3VARWctbgCFf3dof87PvEMNEE6xZMPooKx",
  "key23": "4fq8aqYKMyoj6sTMA4tmC3PJeTRkJgyMk3UhHcUKSTryEYfJAnzfvqAypLXTbtwv2PXdpAPxaudE9hHznNtcLiZz",
  "key24": "5okhf3fFg6M2e3uWEkEu3HwnQyBTh6f55pTUC8rgTbbo5bNDJuBAAoLavSzfqx5ENTnZCd2mYnNkKNeyFWM4KYea",
  "key25": "2uArv7ThGnW4KxuwidHHh1fawmYTEkDTVxB5ivQHkwKjGrcr3zqayRbyCgVY9Br43rDozztHMAdmefd73WnGmQQx",
  "key26": "2DgKMJQZfsHKYeg7iFcaWMiP6PiA4FaZP46tXsXVKjzoT58rTJhQC7NkBDnY7jkeD9nw4Qx56AUSRz6WfNphShci",
  "key27": "2fBLfMCCPdaktPmfjfAypETfvMDx7pJ7NNUDLQHixEFz8aobuYErSc2Y3f8kRRQyzdGhAWXs6PYJGFdLBQP9xfTL",
  "key28": "5SokUA1q1VGuwefkGRYzrG1KaDhBrWhyUKxjZL1p756Yhr2ioUyq83Nh7fgr1T6DXAkfsoJEYiHbAERxsE8AaZwH",
  "key29": "4qvbKDM2Mic3sePYgs1XPeGhTtkfdRx4JkMGEwYSWawGXCJr6PeqmonKWGS9MeYjbLgnJq6w1Qz13NMWgNfcPmAH",
  "key30": "5hVp3HgwHshmJ5QVXixpZtojkf9tx6vURHrm37U11ieHT3UX4Ubp1ZGFmC53eomutcDdPstd9Bhgpf44W3nLgtnM",
  "key31": "5vsZrpBotp9dF4NijGoDn8mAqtTwyyZyQdLzyZKvDupyTaSgDwVy4UE8mPvs7ectrhaaHTEfAoXHKrKDLRbtx9La",
  "key32": "4E5ZrRkUk6ULBD5QySytCiAAeEC9hor5qvxPx1XFNUb72abDHNvMCvMoHfCEGGafc1evyouC2CvLfYwnTecygXEA",
  "key33": "4MNrbm3Ebf2TAKRsyK9zpxymFBpVMF7W8zCPZd766Xq2WZ3YHZddtqt2uqWBuJbmN4jdhymDNMjdxcEuxcw63U2F",
  "key34": "3bgf2KS9K1bouwJcJx6bzB7tfNvYHUSVFyGFTzrmo5B3aezdpKYLCDzG2mPyGoKhVVJ6oRMC4v5rgT8vKfVvF2iB",
  "key35": "5uHFXC2nFfgH3jQ2ESxiQVUGbKRvJEm1kn5ZMjkVcbQCSW3eoUf2SGniy81yjccAPZtpgan2iTVfwWRKNBpB1i29",
  "key36": "4vFZzz4BF6HmKLLwX5gsjSwbtnpfXrUnj869qjr7g5vJeeufrYyGnx7biHC4NerSqgYCqNiLRhUfUduFSxgfCmtm",
  "key37": "uefu1B4q3U8myjpi36pGHkT3rFFVUGEZV2AHb5gCFxvMjpLtoc2KPZFGTCucz3PRXdb9T9vMX8NTqQygipuuZNm",
  "key38": "3AvXHbFQzLwfXta3jHsQRLgPqAwsRhx9TBDkuLf2gzZnUNewoidgWVgVaM1qHUBkeYxL5P5PivYmwcXX5Q61ZvKP",
  "key39": "5dAsRFEshKdZFZz7U8pPeFWSEHeAq532xMoCqxFZJWLMcRXv5sEdiaz5XuHkAJekrSr1sGgJffgU3v3rG5bh3y6q",
  "key40": "KmTnuQgCYmzzojESiAea62trJfhsQ3Zq2ByQLtyv4C3xT16tFP21biP5yxHFGEfLqoFaxqyqYMcJk1MPRZPWxkj",
  "key41": "3EF9b1jhiu1vquHvdAzSfqUf5rpYnQocoEfiqwTEHAmweTi2eafz9uDBbYviQDdSUeyXXRezWEbSG19Gk341ZEFu",
  "key42": "3ASm8szzee1s7KCse16sj5MTjyb41ermDfoX7JR8EWFLHwxoyhtVXFuc1dqNQvzYiy5NkLzHEbrEpufQLYjFEnzJ",
  "key43": "43xnHAo77wuGExfcgza8XZ7jbkeg5wHMgmgMpW6CHCvdfprgDMNyuKmKmFQeDaiqASuo6QowLX41GBQkk6R7hoCA",
  "key44": "66iQ1wucmAcsHMHnAjDn5cTnTdpL9rqA2h45uEgvSLF52NWNGq988mxVNbQZwXV2snGN39fDF4CfXMe9rT3rQQof",
  "key45": "expt2S2jAFfTBZiiurC4nAQDCrBQFi3U2vtGMVyz7gRFZwPAS5E6AmkjkoKo2gyQRzknstpuuBPTSncQsSwbYNv",
  "key46": "36WeZDzdFiUqNhwfAwNC6wHNRxEebjgeXNkFGiSDafGh5rKqC286hbmybHQSnXks2rkwCvFL7mWywTgHzvES4gWW",
  "key47": "27tVVtkZA35TxnyV3oiBoe6c38w3CWwJVfCiF4isrGTtzHQia414urfMbLy3MWPwo35W5bNqe7zbFeCX14nbnJFM",
  "key48": "MnNCaJjxt8AAF27RqoR7ZL1enCZSEmqHGHBCVUS7zoPtdZ5gaDfQ9XRLux3X1PTPsnypWBPcx5bPw7QKaKmj6ZG"
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
