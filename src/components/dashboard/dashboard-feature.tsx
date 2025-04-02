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
    "MxApGGVufXUUGTYLQSZLH8sSxr6WwBocRydEs7aHAcGipudztEgKtiAh81mHJr2XBq4NvY9J5Tyuf681mTJALVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AGavn995cyekfm8MLf9VrKz3etPAvJQaBNmvEfjttA52UFysht43qxndMQ6gWDHvxc4pmizhVgdcVpzDAVnnfSg",
  "key1": "PsXdhZk7qqdYiHkUoLoNPvjSAEkHgRqNgfkP9J9o9Nj2Cwd6gd5KZpZuVs18xTb5NRwaBz1fTwtG57hQGTx7Wdz",
  "key2": "4LUJxcxs4V1PWqfbc32pY8BKNgab2bb2ATfGWCMC32aLTK3fqSnpYtuWhVmqMzx7CLVfj5oMJZEVAK9Ypdv1GXUz",
  "key3": "hghfdAAwrV2nrz7ci3WYLH42tKUYd584bED1DgmKSmVLHTRPnM6GBfRAvJkFVzNC9tPogPqGjZAsKLQMLfVLutJ",
  "key4": "oLpKQjRcbVot3QxE4FErPxtoyDviyuWYiiXXafFTFJp529J6cXnh7hTyi6Z4ZxHEe3z5GW7yvc3WGhP4knZY1ei",
  "key5": "4GaxpSEEZa8qpQJpDepbaD4KCdUfoMsDsvnWQsgDoTXCyydHzfZVs33GiE9fzZkM2u5a5kAt5wvPAYBBHuynGic5",
  "key6": "4yKXX4QvMiCdmEUNxeMkNDjF1qUAgtVZQZjHdCCvk5SXawi1CHPRwBFCxM32Gkrg5dvL5fsaJXz6VN3zF6mPsT8K",
  "key7": "22d62pa1Y2X1cWkxk4ero27CEEwjWiY3npASJXnczJhbgS8z2a5jVA98gVP3Ua7PN86Tonipfx5DtnbB8naZ4RVU",
  "key8": "xs4NiKvJtmxEFAHAiBJjB2TYfcQ3SVLAtE6K3omCH7jfNDVCenJPDk1zruKLqcfMU54E6aK7vnHxUby9fs6jsqu",
  "key9": "4aeht3xkPNTijs3UecjFotv38Scdxqs9PzzVTqiaNKTmtph3x8kDPcUw6S7aexudyBumbAqss1eQPVH3Yx1GaFmf",
  "key10": "2xR8GkPAWb1henZop1r5ahqqY7YxfwKqewqYdto3V5Zyy7GKjYcajjjuAgyt42JkBrNRHMu88QNAMuramxNyrckr",
  "key11": "Zj2zFdE1kK6B1gAvHN3KqBPErzDRq6iUAbhzSyNEpk23JEgvz2wwyPR9AwDz4pUvRSwA8Eh6wVG9fx6GyWmum5A",
  "key12": "3A5CVWuRpvKimo53PEEPdMWDK9uZbjoHfcAXZcfMBjXRsXUeP5Yj22NupUYHZ8gpiY3NUU9Veg6S8dX8jWhaVCRG",
  "key13": "2Hh9xvKpr8ELm6HiJMzondyvmj8nAwjCCdq7HLk9tQm9Ea24qta9cv9ZqRYNGf9oEQm9X7kLA6hPaTW2NYZciAQV",
  "key14": "4AJZ2hLnYF5PUZBFW5Z3fk8n9kNhtEgbCRQfKQTSRAR4qGuYN5W4AnGgCSQTupmWfjfdU13e3NufPjV6gEE6vaS1",
  "key15": "ejnJpyhfC5mu7DhJJDUstjVKq5vY1djukhWvFCsFxERm8EaCs8sLuHiZg5kdiVniKtK1W1Zf6NMJsUPeqpdi5Nv",
  "key16": "4NCVFB98ctjYu1Tc1mepPq5a1yzVoTsvrZzTD3wp8CU1aiHXVcfMeqWpN3hFPwxpRHGEhuu26Yk41cr24D92EZNF",
  "key17": "27eRJmA6bMp9xh5mAsz7TcFMZVp7qzXPV5hD4NDHMoKSCEXvx5SZb6SrdAZHVgR6HygfA5CGHRUWUNrLWwMHgz4j",
  "key18": "5Eav8ARDgpSNKdejiqBbFuULmcZPf8nVHaxFsckVDfmmBbzoUYcHSRywSymhA6Nv76xsgL127AGzTb31Qga2FTVj",
  "key19": "5zptmY2AezKsQ1vwKfKDxiCusq76thvZnjxRyzrWxyL7D2s6BgJX1BLuwNrZdxj9p5HT5id291CDQioscj1TLhix",
  "key20": "58hPHPKFU6YNPCdRihKkjxu5oTk7S6SAomeSyCxJuLPkXi63uhasx2D6T4AyEn6Ert1cbGua3UpX3hLbj8ZKM3oK",
  "key21": "5QyArjbFr4nhD2HDa84CB47TtRbdBbPK9NazetVcSJ4G3MJo53U9dcVWPubYA1QKnKiLazm3Trwetbnj4RZ6H5NJ",
  "key22": "46Qoxa57U9jMWFU4ooE5HxT7ntBa8BT6hjLM79FR1q6F4fjXnXi7Td3Nn5VZcv8F8zTfHC7VUNTVsoG4SuF7RGZk",
  "key23": "xXtjyZwxbaYPGiutcAiP2aePedZQ2cgAryT1uDDKFv9Jc29iCeuMxq8HSN4GPANeJPpT3WFaDjrPftLpM3pmz85",
  "key24": "4A7k4rWeRYBcXpr5bFvSqTAWtzAFaREo5CMTrTupzSXtYuFvNbqQ6hfVsZzUyMec8T7eLd1JQWrnRyJVEvReFajr",
  "key25": "5kucHx63dc8XGFUx3NnEwFBCkKT7shgPHtzuSmiacC1kd5dNghLTpZdRBCdycnD1otinHuvsvjFiZ8FCV6WUrbr6",
  "key26": "3ik3oVRYjaVq3ePjYvf8imuSuB9mqmBbgGUotfoB5r4N1Jjs7zyd7Tt5cz4VSQtN2x6o7ZgwQodyqHwbBPP1efRn",
  "key27": "3KfhZeHerA466pjsqrkz8AcFdu8nS4wEvzHn2A8SCbhVzPDcdyTFVAvNFBTK1ZPVvXxL6nfkNkw4bQ2pJ71aX5KX",
  "key28": "3QCsjSJv8f1ycjLeFfrtfgZfyoxEQPnvcSa3exwVeGPcqvL575UUFrVkF2WrdpVqML1N3vce413DM8CmZvfheTS9",
  "key29": "3h8e8SLuB9Ve5ptjgLwLVaZqKX5Aekkkcm6Nk8tdvXBhfrU2gmtUBCBFnGDHmR98VZRBUuxTe9PoZsQ422EsLcYt",
  "key30": "442r4nqi18U5Dmi56Gkc7q44fUJE53HSwDDS1sZmUrVERKaYEWL7zubYZEqXS1zQF54VKxbLRuaWejRz9WoYn8rd",
  "key31": "2mQBrg1PWCr4MD7HUB5tEWtWjfN4Aq5BztFh2sr3FPz2JJtpMeBxHtDBV7PaX5UrbUp21PRtRRL1DpY5AHh1Gire",
  "key32": "3wDTS88Esk4DwCfZ9x2j6kkgUaRaN4ieNcsMwHUi5z9j5Q2kec9yCbahnNdpK2HifuW6GJtabACQtQP2pix1nMNk",
  "key33": "3rRJPRWTmb7adwR3DsDRhRotag1u6ypBAxXVdmbyBnYtiSpEYd89Et4HGiRYJ7wdxtcSD8Mz7AryzhiSBuBPcEJT",
  "key34": "2vaNdeMqDSFdEY51qHPgcPErwD6Hsyo8649XsRZzRe94MeiXxQhuy2PMofJ3mJsPDak5aFwpYNWMpQtDWiXR2AL9",
  "key35": "2undehBguyTEPBnZsVdzpP2vHxds9gHsLejEZsxPDwkVaY5urveWJW7r7Uf462HPhERSV3qRk56BLFt2X3QH6rC1",
  "key36": "2euSCHvY543HSoCahKxLHqK8XG1i2jpicCG5FqyzVrvKy9JRHZEDv1K2WTJD2EbfoZy5LGayJFu1ZjncVf2HAZv5",
  "key37": "2kPFBk8j1nK3BUaThc6h2dKgMFupjEQP66Sa9VXDFeonCWfftwze7WujcV7Ls6DTzs7wyQ8VhHK3S2MvFQrcPQM6",
  "key38": "4zHJEHk1kYMQNZJA2XDzMvUboKb78fHjTDqVEtsUbnqyX1XySbB7Mi2CNcgKeSZFC9dXb5i22ftojA5XjbwoKn3v",
  "key39": "4r6JACdVZVFczHfTePf2HsRCwwHh3T9QKa8FZW63LwmDxhhBVakZvEGGV6L6tf3qVi1fbF6MotTR3ipS8h8CNe5i",
  "key40": "4iZZdkNzqCXC8AevMxWAEwdiwDZNc9SKWKbhm8boVTPDLzfnvT5u8yCvCvVhrnH4iPahNV3u7NX6Nko3NNf6ZEmY",
  "key41": "2jqvxMtNbEsw9Wj3Gqjkvbzo5jCWszxPqgePKB9YLJZ3Ry5SuWGo7uns4gh8DLBX9NqZQa1ttAYMJbKrVVMCVduH",
  "key42": "2vDPdTxS1oCAoMMUUEXKAX5AV7pRvGEBDAoUsoewpCEKjx79NLU16KsgMhsfCoqdEjRUH5q1MBHxK2L99Es98J12",
  "key43": "4sYnSsjN5xuDr4wKkSjRvcjokfjp1yoyCaTEDqaeL8x8CvdCQZG5GShArPVyyHPUhEgT87jX8Aa9rCjonEK4V8tj",
  "key44": "Nrzm6ijpJjoM4P4LSSTbiDJc7TQWt4Cx9EnhBf1VjSZVVS1PJCRyeg9TemSAvET4WP6W7W9Ei7atLX2EmWp9Yvt",
  "key45": "3XCGjk3euvdcMAb7ka2cRoa4RDYosNhb2vU9WFoU7NFRLBpwt8wS7qxjALkfikRvvfffEubssLFceuBwRTePdNV8",
  "key46": "5AXRbFJE9sF1H7rb7dACQw2zSK18VEM9JPirq1C39cD3p29yfCdLi7EEHL3wSqRHhb2vv2H1czC5n5GNA8rRNsnB"
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
