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
    "32qFA7hCYaPNtVvLCpKCM1dJTuWYuRb4ADM3NK3a2b4aXcYhJWmJYVT1mVMCnbMUrgj4aFYDqfzvTcuEai5ZZk7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwCvsQwgqRvh53zVgFnccvFiS1HTrpRPLj31LtfAmuiW66HvAvBFkxUwJgbppUTQDL6qAMe1jLbfJCBAx37TBBz",
  "key1": "Lm8efZ7VMe2zAtWwxmoBZ3FURzA7Kqrm66pAxSkdp8f7R5McNHPS1qJLJXHfeSnaXschLaTHZQBCRTc1Fcx2U8o",
  "key2": "2ebD1jraK73UaBWS6AUrZQ8EmSxnDanAr6hiCeQT99rSfPwYAagFKmifrchphFTXGRzRHYL4fBTnDfR7VEkMzmRR",
  "key3": "5CFRJnfkUyZzzZbBWBZqZx4VcJvVH9U8VdGqH5nMDZrg3JDrSEmP9GJfU8Kjj1tdaf6rjJrqFqyuCkKXy9TTV8i9",
  "key4": "5yCejA3KNERTLYKSZe5nprR5TMgafzGXKdQ3LC7DUfFrjdNPEo8duUFEYQDx3QvKxpfUX4FB3vh7TNARNkp11BLp",
  "key5": "7GeAgqFAaeLuAX3chCDefnJnCJ4vRMT81f9gnVsaxDizLnbWHXFfCfSuTesUFLL4WKPyqjcrttSHuHiczFtSbHq",
  "key6": "621fwEx9nGDfKFtei5eZdFhLocpzwnSH4ifgxeaFXA1n69AmWD8C9NGyioHQFPRz1aRnwsL97K1ThooHtkQYCnBd",
  "key7": "359CYWML7wG52k86NRpHaubBwHBuvg1LjULet7PFFrXZrPQHU6p8zKxpLbVHTAoncxLoNgvHUH49E1cjz61wEspx",
  "key8": "2Yt7qCyzcRGeAzQSwXDEd3Wnf9ogTWBgiCyb5XJyVNvp2GnmUrYyyMvK6RYaaAEZ8bzVHkwEGay7j295WiuoXhq9",
  "key9": "z2aPyoX3PnXNYv5xq9empMA9aUVuSVuZrscUSdChomMad5m7wNkuTU7TzZCSgFM6ZPoL7hykbu6yC5SrAWNTnZB",
  "key10": "4J4Ak6widishYqVPMs6PhPN3pQ3sdQjgpYs5DHFzuAa3SfuYiJFNXsFgd2pq2g4cE4U5oom6e3HtDSetFeLP9Q93",
  "key11": "4NUm3p2mSxoSa83ZRqa2k9YaAEuHntKnGcyprthGgAvrguby1aU4QJiFjzcrYGA64z56LJHLiaJHUJHGmri4aHmY",
  "key12": "2Bh6WHKi5vDXqoiTU9z2zYvKgT2Bt4iZciN5mPdZcPFdyWw58UseH4X7QP7SqEkUgkF62fAfxFN2kheX4siL4dzW",
  "key13": "29go7WE4F4GKL7goLVz8DrwCfffFs24X7mGPLgR3rh5P8seHToZci3ykCkT9Ycy2yhCkZnmTh7Xf96QkNKbU1hCi",
  "key14": "c9qHbFS4gTkaTyi1h8A29My8Kqv9o4WUghVP5sG6BTQrL1bTxFBhiDyNEZtDn2NmHvQHsRnoeNXTj6fw98jmaYn",
  "key15": "5qT2NMhkMqWdT6XviUa8Tb2PMYmSkhkrduFSu7katcxnjQyzXjv6WKEoSEiP95m84LEDDwWgTPfyRKn4SyXBmoUC",
  "key16": "16NSzy5e2uE6Qdvdf9F6VZCEJuXe2LWw5jLZwuk6pevQ27DiETFJf15uMPFfQs5jjxv7PC38vdk2yH2HdVnT6kb",
  "key17": "3a1v8ZHL1mDA29LdMuskeE1niUkkYfjNPstVTM12BPZchhJS2oVq89ukXrwaWRMRAT83iihYxakgN7sknfaQfPHM",
  "key18": "3FGSgUrTP3nix3gawzmT2Xo8A4FsjoedAGcuwu4uYYwsapH6UaGxDZdNywNnUiqevWQ4QVfD8mZtcLsJ7KZYamFZ",
  "key19": "5s5qLYYdDUFLNZ3xQFg61EFuiEcMvkqVrnZ6eALDNj2spQSZDY2PCDUpCMDDZ7p7ozW7Dknro6s33Lz5qFAibKaB",
  "key20": "tAwuaPABuanFstBTfn1AXiQnj4XchJAJ4FQxsFRvtsdBmbPLWSmppBG9RktxYpuP7mWxKXcy3TZeDGfemqHsjR7",
  "key21": "3pLWmEYGSDXdfm3kEb5z5ye2vZZCdHPBPMDy83zS3QQXdmsHpPLaF1B877rU9k5ATKNJRiemoMgpAi1x1DkWViYq",
  "key22": "4nyvSvysNH8WTx2dr6KNVp52ZfMgMPDXG3PgekVtSQe2TFhkjt6CMGztMM3DBzUhZgLoBacxrARMSzyAvMyALhiX",
  "key23": "LPV2K838i5XWb4Y9PbuqJfD1Z7nZoHivAX14Zvhrf93HkUEwqw3MRLPyZs4z416FHPeaJ4mPb3at9sfuhKi1uAL",
  "key24": "4xYA6EUte6rpYcdF5RPCVZXWC8xnmBnNmAFAywCtnQ2rqWYkcDEM7rk5WB7eGKcca5qF4VVYaYRuDauM7vFMJXGe",
  "key25": "2YboWRTSRBiB9Rz2Tyu42EfVZWxKAB83qWnndMvdpdMXLTE7gQc9wAcLKGgPgVzSBx32rBAhnaBq9s76MeNLBgwB",
  "key26": "YP5nwAXvc1fngMvQ4QuEVTZTbXJYawnW4TtEDaPN34hsNo6U35t7DE8bRakGR6mu8jMbfoe6CiPhK6tyZ9PjptK",
  "key27": "2c7Y5gPbiXXHvhBLSRKuMqwv28tMJvKi7L8UH9p5nEEJr9fc8KikS2RkyHcTNAQzPvvxrvLaKQJBCMWVK7WUXtDb",
  "key28": "rSUVWasEJu9BRExHRSyjkfLRMoTi7An8c27yxXLXtGpjpLjNybtCcbtFmFmKvRNTZqGbmJL3nezhsgQ7MmP1LrA",
  "key29": "3uBdK6BCp2GDAmrydDsVhBa5jUEmnDZ6TLxFyNScG9kBmo9gXwRAYeQPBW6rFd2jTPKru5VyMpoNTD32EbXrRLf3",
  "key30": "iQnkMVJpoWopkTRJyqjr3ek4ewTcgFv73vdyJ5ykA9YLfEJnuTGAbNhvn85iaQbUfCUgCcePwc2x9egXrwQG52a",
  "key31": "4KEsz8DvPQbTERwr5TEcYj3DGFGYrj1ANir145E23BFuHs2t7zkywLdmYCWXcXcrD22cVgB94PtFLauD6bDwAMVi",
  "key32": "Zap3WhwciX23iYNX9fbPr5VtzBXvGwu68ypbq1czXAnxMxYjHfNoY4Ju5WeqYTGYRb4BQiVuc9ednM11Gnp3id7",
  "key33": "4bA2Bu157LrsQr1JesLT7BW9RdHMndnafzi4Uy4Tymoopkpx2Gz8baYC1yxFE3VAJJyNsXXf9RjPf9Tg9WSsi56Y",
  "key34": "231UuocozzyYwpLyLcMddcbdAKzpaFUS6wGLmFcjQsWLQzZwqVMWBLEfcyXCfa26nVu1N7sysJvbrTVuJY9s4VsR",
  "key35": "44h532YXzHtpSdWa2ciZoT4p2pJ5D3t7kGkYQkt7iHWyLpiAnEczr62erqEysdceRbwxk3ghXtSLLkDq6qyhNQUC",
  "key36": "MruHog5FD665G32f2pAMuhVtEpfqNNdssrSZXJEZWzAosQgjV41TnGVDRmm7eHFpTw7WtiXZ7AjUhFSv76w7neG",
  "key37": "633q1JSvnrbiUK2XoDew1m7bgie339jYCUJsKHtwuRwkeA2WUPFh1FVTE4u5u9zuswzzDzjzi5Wf1yed919GUzsn",
  "key38": "2im2WpCEW49cAVpY4XoAZKGymdnpJaywbLrbPkgYcZbUSGndiVvJ9Fq6mKzpzyxkd11iFAGy4hM9wUUH7pwNQVph",
  "key39": "385FUfXkfHiaikyQShBZn1XdbhDrBhf3LUcNerrEB81LtHZ3zAhr7i5PpsjeDr8n9RigfsZBAYVJ4jDVynS79wqd",
  "key40": "598oWEJHohQJKEBn7exThBqmw9CYf8WgvzoPessFEnzisSbid3VmcJfPdeBa4dKQ7q4CVaW6LLfgmyXX5AYVfUWG",
  "key41": "wgVvHWmpbzTDjom796eb9KgdktjuDFb7JqVP8XSWobdop1QFtoBcneuX8caohxjVsa2hSrt2AVqP87bhzRJKHfw",
  "key42": "RZakNTQce9WjPfdbgYqoqW3QNzV36ZHrJrFxLaVqtwod2h64QcNGnkoY9xPURaFkqWM7VQ2iFDLRyntJaMu2bUR",
  "key43": "3RSDqAgBk1QQri8dtf8F4ke7LpTrKTTyUmTCY3tmrMcdbvkTciU3cVcMKyHeLVaBGdHqnmvRkswzaAf3K2PeUP39",
  "key44": "5uWDgDodx4iZXtVa472fF8SkWc6kKDTCs9eCa5kETE8a3gZG2gqSzSdugqtTVWgp6v6dXDBeLGcwfhtJNCRKUTc9"
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
