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
    "5Tc16UVZ3R5Tg3WcVJj6XLGAXGKBZuXiQ1dsjqQpPi4yozhjNVdkqPUPw377vgcsmna9bduq8SnvaJeyEDWb6ugE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z7X8htmL5GjtgyE8BFs4bufWQGvcUTJW2ff48qyhv36N6EracgKSqDvGNv9FVQfh1gYck7tjAtgs1RRss2cbTNw",
  "key1": "3hMHH1kFG6yPXdvm2axNmoJypoqDe5S9mJqux6eB9XbAKfs6eBxjWJtxhZxnWA9mU2yEcptTa1KP3gvbCoYDo8d7",
  "key2": "4zXHeLTFxDJkgJLxF8yYrTj5WV7kKcm7qezPYmF8JUHtmaRFKPxvTQYoeH4VG3SEvmKmfE4dWqgt5WvaAtxQM4ou",
  "key3": "RycH9LsdZspSXKAoaKGtV6QY6dEAAjJ5ENPDEEZT6rnRxHH1Sbzp2YxG52NPbkyXV1ejFHZeUtFNyn7XxEtf5j2",
  "key4": "4VRvKifSmJaihrcwrFEsbkqGS9ya6moVZ4kHDuJWDpLgBVoNT6p4DUj3Y4E6LritSTYpYsDdCCZKovESEPJwcgRr",
  "key5": "JQUEqp7jbh3hBadKNPda8aoParYvfRdr5tZfXAvTBTwrotvRZH5TQuJrHCPRaBZAYMjrBzS1kx5SBVn6Amw7TdJ",
  "key6": "4nf6sT8t6kPR2BMc53wgp5rfHxaA4CzBsYW64gLpXZ5nBGLsCYzB7ER72WtguyvvL9afkWaeewSne4wC6cVpgwpm",
  "key7": "4qAWRZsRLQLYfRfPGFsycDvwR1wyb9MZWMorg4PWNT1p7FCY8mBr6hck8dPHpwywbye4BMafbUgxGMYWM1ADmr5Q",
  "key8": "2MjL6vCkkUeX6ir6SXCzTcykzkGqUht8CMfHo9E5Vp4juuoiNa1tcmXDpvUb83qNbsnDGvm89iTz36YvH21W1HHf",
  "key9": "5vs5F3st96iAcr9uAfkKGwQgXWEUrynjQbsVxcLAX7Bi6tTDR4abrsiS722eWNKz2X8FoUYJRCbGNjKqMnAyXpSc",
  "key10": "2dfoANKYmg9nSEqtV2L7m9pQfgMSvDZ4ancobAtib6w7SwYV6PexbkBLy5qJnDuD8hGVAiWeCcwNjkvniMfG13oc",
  "key11": "2w1F74dNmxexFRVTH3dV22kpaRpUdWikK4oY6c1ywYxUPm3t4jJsMQes2tAt9s5fywcbFQuuM8P6Mei3aRPArehN",
  "key12": "53EZZatE6VbGk6SQEcuYYXGPFWCaVEEihyVi6bCTq7AhFEUUFZDifkYPiV57yFNi7Q3JruFMtJTJZdb6dBXcpm4z",
  "key13": "x2CUDjWqdtC4Z94XGR9gZ6Ts147UE9qNaCyYQMgRxpBrEsnxTVEEwEuTvbH9LR8tHwB7KdVnySLaXGUwkeCY5F9",
  "key14": "5nSxBT2MtkbAGVH59hfuWh9iLyUk69QmKdr7ozCXow3F7c8uRh4B2TQQAiH21j1bRPpDwBfkxAoScVosKRpEUaND",
  "key15": "3HKKUjbWq3d1tcjJMsywK9KHrtHrExuxRn57mKxcfcnXQcGmzDaTQePnR4bqDMAjYm5QqSgVNbajWzX31Ei6eJTc",
  "key16": "32P8bnNPo9zGGmVsu3woVqJ1CyZENEEhy7VCs4AMsJbM4GGnUinWr5uF7y7LH6puPM6VWtudP2BRREyguUQ1dYSC",
  "key17": "519JjHZ6XjYq3ASZsGKB1LFa8rwZp7dh5ohCXErcWF27b1wTCRb6ubTebWS5iCgauajwebgnEeLoFKrvxYCCisCB",
  "key18": "3oC9Won43zoWo4youAu1XWwsM2Mt9fp8CxdXwhMpuEuwS6rKJpx3L5Hm774tamyBF2c6XQhyoZYsxw5VBC177TuW",
  "key19": "tDzAxYmBrN3D78QcXTwgkde44kR847YmZ8H1bDx731ACx6p38Xhwa4tEzQD4BLib9R2LM1AWiSW76wbqfETu3vu",
  "key20": "4fd5BG7PvpWqe4TqhJzrq2PQiSmoHzerwLcKGSsLztWQFeEczCXQDwsdZUT1jWCmQPTJZM1NAVbiPR1cZ7E54snp",
  "key21": "3DtUP2wKJ3K9DVaw9bGsteDtDkxxeQ9qpiLiVcYK4FVedr5Sj3bd5pJ4zsGgb1cHs3Myar1xUCzbVZAawi22S6PD",
  "key22": "fSQRx7t3MFTTRY8tx5oqm6edGBFrkh8nQRWAEZUqtYzZsz2M5BXWPoqqjoPEYE23ptcb6RCsyH22pyWNoLF9Ymz",
  "key23": "5qxfoFufEzYFhvwZcGBX9T2rWYP3bAyXsJpAH1XdWtKh7Ed8PqWzPFJevUrRwXa2sLr6VNuLCXaLUs8k3KJoKNgN",
  "key24": "73qXpAxxKMpkp8TpwXU2rtGKHvtgg1zLoxneLhkTmhwhP7zprCigTyUibE2JxE2NVQAiJzUnkCMUqCz6GCesccq",
  "key25": "5qBbidqXVHtXsWG1N7DA73pj2sKmEWzfnndHiiPbou4ScJEk3agbY6u1Sqcc6v9devsepJNeQ6tcG68K8cm9GfQs",
  "key26": "97TDZH8GUTu2zXnsVPtk9gNW4C3s9HonrEAWsaT5Sj5bEXSWEgyMEAanr5Ne42e6b3VDZ3u58CcmYMTXxpVgUEo",
  "key27": "27cbVAuMgnjFKiSHFBDqNj1WKyadQ4X3EExWfPrzX3kCdtivGPQ9Ps2SAGSEmuVM1FjdWFJ44k5HstFM24yukH6u",
  "key28": "3HXxWkAQMcHvbv3EnUuyKa1CEKTadErcnzfiWxX7PhnivsYffaDiCkTNMQziZP9jV1Wq6xJz4HrPp8ZmrVWg673t",
  "key29": "2XR5M7bVhc9K9buffpqxepS5aQofTW2xME9WxbZe6j95vdDWpkNtSneypG5dXxDpJq6pEa8DWxt4gALNXuUWR5bU",
  "key30": "3F6JEGEhkLzRNdeQgyXRprtwbqW6YDL4HjgEhHUWHRdi9CEp8awkWDjW2SejDYsqDj1WiBUUBjyCYUwBpFpgQgxv",
  "key31": "4KcgKqvexFAceZdop5sjyQHHuRD2zYGVZGET7sbeZcagt1pcVsiyQjemFfAzncGmEJ4xWi3W4hRKZgDdaex7MQby",
  "key32": "VrTywMK9RtRs6vQ3uDWosBuhLwYyxUDceMTcmzM4uWpuJJS4gYM39F72rj4Ho6bb5R5himxqbvgZoamjpqHhG8h",
  "key33": "SZQYfaAfyw38bncGAB2qYGVuGpnoQD4CCvCcu4H3ZLqZXJNNfDRvpcaRCZ8V1Ny7ETEF6iPPZdinTieFjEDuMyM",
  "key34": "5a6YpDhfKoPtxp9xzirNwEr8GXbPjRBZhoLatSsuHwcSpiSwfnkyyoJvb5UvmaPkJyGPgL8EAwBb7nBQv6Gostti",
  "key35": "47MgciQRatsZggvFj9KQamrRLPTPgGeTyB2vTNxMXgota8Ttp6neGBBuzKV7A9FoikWF9G4nBEmKrC7NmUyJtyaN",
  "key36": "4bSSRmrr3VAzRNTGrg9A8pkXJvEXnrQj3F79evP1LQSnL1f8aKBYmZYiUNP3SV2wySyCdx4xcgtMdYP4c9qEwe4F",
  "key37": "3QPMfXRiUdbYWax8eWmFXAtZgq51fvo7knPdxNaD2hxifhPiYpRDyX8VxNtwXR47jGMmG3nFcGcZ5BuPLbwkVBGy",
  "key38": "4J4cC6Dd7Eow7Yrg1SHc2oPMktdWDdSfKFW2iGGg66MeEn7WBtHWgZmXLq2GcD65wv3xw1fhYtucjhR7aEzvmnk3",
  "key39": "dHzGEzcmUg6CiKsLf9pKpMUEmxUnsi7w79UjnffYEyb5vJwZr4m1WWsa66aw6UjWmQpdmGj1bNTCMy9RZ3ytQq2",
  "key40": "3WQcnojKsL1CRad4V2VQFtCqKfvZN1gS52af3Ue5GRpf5fg9dj9wNWGGJcW6ueLAvsgNBLn7spdMu4zSYVp1F2gw",
  "key41": "39BWCrWJde2Ld4KNQ4MRuH1JmtcwmzGXs5iMesbJ87hQ3EX4imh7o3unbx5ovBJYVvNeMYW9TRRKS1yqRX35WGX3",
  "key42": "CgPu19LL2SSn6aHNs2apgobfn5k2BCp47gfituy854SXsdEgWsWknZxkf7HRGhuis232ZPTdmdVcXWcL6TrRUQW",
  "key43": "4wDyeaT4EoAvSWNZda8uRWpSTEKpVEZdbcRt29VbaT7352rJtVkyQFsKmRpUuDrk7ELVptDLYLZDWnXVrAJChme8"
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
