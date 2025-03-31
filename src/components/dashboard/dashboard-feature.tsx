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
    "531YvZcsRij5RAGaib58gPnD3YuEmveR1KqUsVJRpnbiSJC2pX92iRPqebxoY6c4boLqAQ2q1qt2qohjUjA3RXD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAm4KaKeQBNoUdocoQsYeAWJSe5qjs5HnciWzyscNzW9KnD18fRhKSF6oyfyG3r3UPiEJoDmjGzLyd5ZBJT38Yq",
  "key1": "3F8Qh9fkTeLuVj1rkTBRzSLo2rXE9Ak87ZGN5QFDD6C4sLNdnBXHLA6uQkpwX3uAnoesKPYG3BxagDvFyG2TSPbb",
  "key2": "5AZfZGaWBpmDbyp2MZBu3KyaAQ6bKphM8Cam9Ya33R7s6NL95rrkKDJFiFYY64RiDCAMiyuc6gHSf9WrU8iA1qGi",
  "key3": "4i9fvjueyhXgp2akXNWdHB2D6tYWfADioGiMdtzat4oVjDi4CoMP8S31uh11pSHiKsSjD8rfnUFZqv1PtMc5r6sf",
  "key4": "xnt8CNSKjsxnSAqo8DPQQsJuvE6dfuTRhTVA6A8EJppHK9D7KkP4av2yKd3L54XKv2rb5iH3WtSV5xM8XqBUGwE",
  "key5": "5puvNcF1RRmL28JSGwH5ibPcAsuSMp2dKX5XvP7KnyZCjeLw3V351AuZDjKKBSvc8jowwGPvPLyj6BmPsWYCHdqY",
  "key6": "XhvsW6uEA1X5SPtCg3PAMt1SJeQnkcEJoATqktWFzx5UEUC8xJnD8uzbZzkP3HCLqbtTjaGjLpycRx4bvstGczn",
  "key7": "3jqS64se75Y5nWeGfUUw4AgAsyvV6eYfogz6KbS4wfbeH3yg2nnSVogL8sfhn6DkXVEEKJz7p2kRAd72LBXUSUnv",
  "key8": "5yEKk2K1EcGTmnE6suxX49QpfV8pumfVteqad395FktGH4sGr3hBfEU4YDi8FJ7xiAoDStXqSwkDbAbxMQitAjEV",
  "key9": "5pMBa4fHMs5hs6VyvZDvTu7ETYkZWqiGK4MuMbkBEReWHr4exhcRwJV7WqYkvr8y63PHvVVWVS49uYVadbFV5LsC",
  "key10": "4mLSum4MUakhdEv1VUvgioUQX3fn5qkgnBbPorUVJ7dTHZ9DjyH6C1hHEPJWBrd4M9cVSZTXQ14GnLkFRfhtMX6C",
  "key11": "fdJdbcSCSxuJuid7aNpUemSwbAVd8fDZDjmkhCSfJ3gasoq2VrXQ2DH8X2mTUohUvAE7i5EysGYB9VMqAqme7Ds",
  "key12": "5P6of1DjCu479h2cxEQiyqKXGRYQCTB65ACymL3JR7ATvXzHxHRMdTeUTnQZEnDshnbPxnpUCg2q51aWCz7wqKzk",
  "key13": "4gAoXPQS3bXha8R8bXZDNb4Pg8e9GxcpqwR5n3Lr9sdaH2sxQrtPPzegh3BaaYc98GUq17LErPVBfkJrLxxMxvGY",
  "key14": "t136MMVdmQhFbR2Nt3GKH9jGvPFbj6R6cZfZfgxr9F8xcpXDE66qRQ7AH8wBDqCCTd9KEQHiYFDfSfKDjVt29HT",
  "key15": "4PonZ5hiJbCeZVuJgNA9dCcQvcV6sPVzQHRGihrpPMa42nUbgXyX31aypKLyhpxGAxGThqJ9YxPW66RFGUsF1biD",
  "key16": "38XvZgrJjgHLU3vYTbrEh851Kw9KQneef83YZvDDCJqEzRASHH2Thzt7APEjt1Xwds9ryaYNufQxxxvP9AEdZDyX",
  "key17": "5AzBAZBvgaUN2eQ5W51poVCPzVXV6AkyY85JGxb5FTGk3cJjdjUVyPpQzW4C9pk6aNaDVTGdtqRhNJk8wwXsH7Bu",
  "key18": "2n7vLmMC9iTYWz5hrTJtJurPJXR9wdFLBSZuz3rxEEcCpiUMhn465e6tUygtF37YfXeZ9DNn9HGUghY99Eqpzo6F",
  "key19": "7iTvSKupVRZwqGM1E4StTX1WZypUgPytnLy2pPAkbgt9j4U9PLpefVaRsQFoi3DR6tRxGKe4jq3dPuBhcYVT7Yt",
  "key20": "zESH6nYnaKKtNW6YXP4R7p29tHtd1ukxGvY78ubc85Jk4F8b8G8JugqYdMXaceM2VhCY1mF7skoTk86KZmxKcpf",
  "key21": "CPpTUD8RjYAVjD38ozYZTMHXmM3dMoqzKXsXfqor5tw9SmBYcwdZvAYLg6wakGwUpF4awuePXparpe5wyFCnAup",
  "key22": "oXU3Vh3zQv1PehBDiCSpfD5Fcafyi8C2xgMzTx2C3gyRZQktc71Grdm9Q2N3yUTjsdCCn84qTKTMbXWbndwvqro",
  "key23": "2oJj1QGeQWQACbD5TzWZd9amaQCiQkhVJPr8PQgqCTpp8kqWwL5hrYNUCwWq8naTVdsLFSZN818iVvJ6MWGYRdtm",
  "key24": "7DRYL3smCuyFdkJ4on8t2VrDH3X2oSwfLeHj5oSk3L2PzLndhFPPc7pqahSoEjXCH3Vp31dQn3N2mP4Ng1pjHFx",
  "key25": "5FCxekd5Nf2EioF86Gwh9NoBd6o4xTBz9XxJ3zLzZEhCviJeCeBawWiorauj7FDCjyzUYYWEWU95RmQbiBTB61CP",
  "key26": "5Fx7BMxnJH84faS8vwbyiRzpaJdJ2aNfmNd1c4mVbSZD2ZXmG77qWHKSU1Pi4PBjyfTeyk5Mdzp1NAVBVZZ4LnAo",
  "key27": "2abTwW3sFUCNnQFhn6fYd1NxYbXbG5DULxBEqFJz5gLGJzm5vdefZ6Bp7ug4FAB9EifjKiHiMJoF3V6iJR1eSwdH",
  "key28": "3XZBWj6iSrBx6MPcXuSn2j4ifqyUh35L7h95gCMsRULGPbynaGGya24GvWnVneQx1EZeTNPobLSj5H6UcyN3HShT",
  "key29": "SyCoUv2tnvp4dkA4JpaXjUQ2oXxv4QduU65acXcDRuHe2D7no1XCMFaQAa9NBckVct9aebT8pmfPvWhB2PE27dJ",
  "key30": "5fCW3QWDzjRxTpSZyoUNQyxX6UhkvRz8Nphyxu6WcamD9HPcfexY3ZHWhDHZLkrGbwqbYuG3UoAc8yVf3e8H4Zan",
  "key31": "5jiE7Dwf3eKQC5LEUXVV7PvcFGCv1WqkXVb2mZGidiZkqpbuZ7xn1FY7zL48xvfab776LxUtA9U5xqhpX88ZnNMc",
  "key32": "5gNPsR32LGAVJgzxSzTzZh5jpwRQQLqm7BD6KcmZF6csc59RMsmzUq8wFTL6WDoHw4sDqe5X1VomLQAuGuLPSgsS",
  "key33": "rBpXP4gw6qP43iiNrpqw7RGJBqL2Z8J6PCYURpjtw336wS4ZuvjxgqimJs7hUtyne9dzpqW5R3AwkDfQE2wDpTB",
  "key34": "5NgGmL8BAVHf5eogwgCqGd9rBXKVHfp4YR251SLrMJUuwzwPAfNGdC12bs8LYxQ3r9vKL8nnPq1DDntnWL4CdDcL",
  "key35": "46G5xUuoFbXF1QQGDa6TBWjaY5Pava2d5e7fTDw9dvWveQqCmv8Yw7WjH5k8bkXKJ1KMPLr89pz5519AGvPFimJv",
  "key36": "3qKsC6b3zQZKUFamn3688FTL621XJgFTKuzhF41V6pt5sCtyVXVMpsAMKkzEAhpKV7pbbaX39CRLJhMj6EbGUBTz",
  "key37": "3mxtPfdkaWmqNZMCjnTAUr7cvN91JyU3QSgZ6EvNcz4BDoF7FCFqqVrRH26twV1w3jdmkS3LEHvfDrj5crE3XGVP",
  "key38": "5VoXDTKMhuGu6ECVyyvfAxaAfSPia3ZD86XjVRh99LThfNTx9xcL7ubNtfRqKXY4psRq1mJbV18bGM99TaV8rAsc",
  "key39": "2fkDjVcC2CSU7ZrWKxpQmrBumCnrhLu1feJp3BUTNZed9TgDMnj2k2tC5tY4TKsW9qFnFuMXgJzqtYrWx7uarpSP",
  "key40": "5Ydjpq7CysiJLnssYdqmh6YABvYg3gFMtAmmqJeJECXjn4YVLauLPHjMvtpVW9T3j9WC7g56NMguqbSQfWHCm4Zg",
  "key41": "2LUTQVGkyrDPLXPU24Q7q3Rej1jYkNrj6Vc8bSVQ6DwaEA35xmCL4HqCwnwCJkAbXVcb45TAChtDKHgaG3cNeYWN",
  "key42": "2ybgRvEqCYiZRN4kQ8LrVwzXKJQDtfc6LGvrcye5pH2K2AF3AdEaHCxwMdfpiwM7Rp7rpsyMSDZGsVfF2H7Zz86D",
  "key43": "2kPrAuHPATim9CMWfQAefdUsyMTejhCVH3K2f24p2Y2kb9v3R8uZ62X79MKigxkpnFPWPrwzvJ5rGFCCAgSPS4Nj",
  "key44": "2dZxBJusrKM12LUQZ4pSi1DBx6Y3q7DXrkiC6kV1iYANWFyp6zxgg3tzHHGDRg8pDrDDjj8kMBigegaJUSz9xt8D",
  "key45": "2UDGsdXdXE5j9yNqrNP6VU9UFwFrmBFQyHidxMpXfuBhKxUNiJp5WLf3zKfqKqPuNQUfZKZnfeRcy3xH5KRvb8Hi",
  "key46": "49pMuWLoa32AjYfEJPRyuxJ7pYi2w6P2aukrP8tya8YFronFk5CpBJMJu4DWJrqfLmg6KATesXRfvWxgZbxKZvv"
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
