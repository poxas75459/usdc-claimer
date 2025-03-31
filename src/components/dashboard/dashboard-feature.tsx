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
    "4FFoX5JmiQpVaPNMtoy3Ersimoy5g3bHWGT6kkfbB721dkCwSmarDEdQxYvyfByjPyzg6k3kWfaGkT5NhRVt3sRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EvRoToPCZME3bkkXkieAedaVNKGG4KiBiv4pRPLiMnBJMarQfpMndwjibnvNa3dFL3b1iZF2nMXBFZ4Nqdb8akA",
  "key1": "4Ffai5o321h7fFUQ9MPiyGao14nuxNak1y18Lyaso51gtMXmKPVLTPGQCzwJiSapyH3Xd3a59a87wgSjB297VX1x",
  "key2": "4r2ec9GRPypMmZsdNHAM8AVo5jBdJfQD9Rk9bDqC4Zmktq5VFjzQh3bLzLwyti3STM1uqrdTYACWtqoVT8ZgUnAQ",
  "key3": "3wnXucarvAwHU134w6HYkcwyqYyrqkWprnCKkNpKcuCw9hpsRHW2q6uu15TvnKUSS7DJJBH3VYUbJmWgiuvDnxXH",
  "key4": "58B8Y7g5ydJbwQrTFtRm9JiKqLN7SzbnKaKyoBnM6yXp3M5kLKt2wGSxyzyHoLrUrS3tt6bGz8fzcPbVAsFdYhLD",
  "key5": "2Ux8YzfmxyB1Gvcz7xGf8kzPP4ZJnT65PDsJ31tBYu6npYi1jdhe4XAyHeUkJ3sZhowvBZd4NUuSCufPrskoegNL",
  "key6": "2tJJcD8Jnder7fMx5Fs6KKiAZhSpFuL8XRkkzbT3MRwJmQJRGhFXYyEwfpiqqnLRWA8HrDdLfjCwahpskfWU8NUG",
  "key7": "2HaHoFzCMYfY6uMUjSoY537Hoj1hjNSDqtGgxhsKdrLSzPoqvDPGXD3hkHBCpTdiDzmfUeoPSu95LfXztXBuT9cD",
  "key8": "5f2sEK4MNvApBgbe96wcHVY8cJTaUTE4DKqybcZftxwYyKFkeSZxZS6MXAAs5QbDXHjs39rhyN4gercygXvxkccW",
  "key9": "4oHTCK8eveEkwe2bLHtkeRGBZuXYWUXRNfVCv2ZpQZj3epyfaQimVDiFvQ17G3b5zA6xEM3pkfRv7a5CGpaaSDHb",
  "key10": "5btghGXvosPcq2xZSQCkDRfKuqi6GCUbMgHwGzWsYtUMSLemNQfkDBsHzE9aKJeNSWKLyd7tnKQCE7uuFUs3nzHw",
  "key11": "3AUvm7SuPefLcUyw7XtRik5jbBNAc2dDsxkhXhdcZrZqzR5e6wxKXXc4nKH5PwMga5m3cSjo1ZeU9BzWMPjykFUj",
  "key12": "3BTWkLq71Phfuh7rnNyXTeCpykNXBkAsQfGH4v34udqBcMauzt7HvZ5JQBqmvBSsjG6ZKwEZk9c1ZSeGAPX8WCra",
  "key13": "3dDqPfsx9bBP8uGtRK9nvwWDz1Zy5ag1d1urpsExEMzp4bDzJWwCsKVMNdYJW4adev3YpnWWG8fWxs5yyJbeM8jz",
  "key14": "31WYFUynfDaAq3xty3UdfFGKhWWaq8Dz847ABzXXHmv3SjGxygepyUzdhoGN95ywkjQW1cMMTwgLCWYoBS68RqgX",
  "key15": "4ggBNnS8w6npK28imVQyQhLLcmnDZU1pn8Gsg76t9vw66k1arHPDKsrrA5aHJbo3bYHyLiDVTiD1713VThs73E3V",
  "key16": "46oin1xTddkhMEAotR1eoEPKU8HsHgeM59phT3kTMyzHvHMSe3cwzbQ95njAzd2DxKzBUYkWn8He7b3y11UCzkn",
  "key17": "5dANrJYfbVLxmHLLoo3jQEmsP2ZuBURTevXXmVMAMDh8PLGTt6Qk4D2ebv5XaJkd1VeKpK4vpcPqskfJ3uCYiHE6",
  "key18": "URxCN5SrBn41VZeVK5etCrdUx5vv1XwxfyqGAPMKCv1DYyMg3TtURNF2QjkNDidRH2s7cSUNPyLRzv7VkYLkmxs",
  "key19": "2px18Tq6DZE4bbemwexqtdyoWZbJLk2N7bEnLiNb5hnd2vrm4PFY3oLeeU2yojwVjt1QwtarpQhUoyB5qshEUm2S",
  "key20": "4ciCxzAnsDmXNAfrhxHwuwahmZvRS9h1C9XSv2RbHd7FcYtPRV6QwwBs8rmv3ELp4f3Zp9xzvVCzAZRSKHxAXiqU",
  "key21": "45bZ4mHyJDmPmgW9xQrdVeJpVkTHkW8ohARmsZzV4xqUkFUJJA6uk9nf76X5NuQTXJiStPrRpeN44hJbGUt9MRRW",
  "key22": "2ojaWv1dxiApU7E7wLnTGWaneVvHV63Mj3SFwS1qzGLvkk8uixCEaBSqeVWUo5TWdr55FHVrYyCcndwjXCP42QvV",
  "key23": "4WZTSCdsLJJfeomw5ZKfaVoabuJSbujSfwHoD62Rrf7V7fzST3PizstATPFAVZtWgdEfRZKEXwXmnv8yxRdW2XLY",
  "key24": "2dGUzikSHEsNtFBRc4jfsyYDkKURVkeLKdEpiMN7ggRnTsu978ekgPTgtRN2LEHcSRCU9BNmuDnRP48ZwSDGHBpy",
  "key25": "3JX4rvd8JCnz5AWBVY6tKTQ4Kx2o3iMnyJSFr1hX7UdVE8qYo7pzGXeP8PXGAwabEmBY7F2kFzZiT6bEujRu1w6U",
  "key26": "4ALrQ8PEjgwRKQsZTpiwAc5U5DRuR84TiVa9uhQPePLXNWZAgLKtTVGm7bFUhGWF873mT16tTprQKoJYNPyN6k4t",
  "key27": "BLFvFHLDZQ6hfqkiaUKZDA8yVqJAaAeBMpffJkGCcC94yDGtPBg9y5hSkjjqCxLcSjs2EJj3ersTm7gf9BY7yzB",
  "key28": "2wtrd8gqD93C9kYerSft6X7onEwwnXiN2nBtVVPRTqDENN8QnFLZcCZNThq2aQR353ZL7BF7ZgBoJLKisUmxeJjR",
  "key29": "2ZoiQ4Li8BCnx43fZVAjayJCZ2dwhP1NMC23TLapv7XXGG7KJsb2sKPhY4mrgLfUBVfUrikbx8Yd5nEPpuhy5usJ",
  "key30": "5huBtsZMNvmkGVsBShuCBTrtn7KbKUNF8uiiDGh9EVBaSQ6LnDn9VfHi5GFmEpnfj3JCPCcSpbhVaNZfeKdXAYUF",
  "key31": "4UYCPNArfGVJtBvXySMUURGyu2NQV7aVAwo87n85kaHfhLcjdTaJzGR9QLCNHizaCnCxFD2LdvkobE23ZBVVmG9B",
  "key32": "5793P5DvAL87nFDCHYeqUxp2ptb8T1YegUXy5E8tvDoNqHAns8ib2gZNJ13iddjYHNdwtQwVHhBHnztG89tV9vaG",
  "key33": "5LDiiXwZu8x7PaFtLJ8q3aqSGC8DZK33n63knehiN5VkM9Kfu92S45SawoWfMvVbyCHSFb5uJh5gEpzaQtvtsaeg",
  "key34": "5Jo2xFetaFRoxatCi59pkKx8Cxf2jFbH3GomZhjiA1E2B7dXpCKtHAHftMnL6Hzfg2nzLrjngHBCtkuAbhNwwpDG",
  "key35": "4JWXguVBN3nBcb6EhygEUNLmNFyruQPVTFRZDMihD2rpSUk1pnXCZryocE2BX1hHVHAhJvoEGYPyMgJWFBeFaNP1",
  "key36": "2N9fAvuQWwiyHNeWdWfsZ6xS3grKeHxhCUdq5fiubzk3ot9LPrmGgvRLVaADn2ExjN1R8NkCLuNHyMfjGeWLowC8",
  "key37": "4m2sKNujGxNdzNT8T2x2BkH5DRCJrZXxmoeQfrnDTiuCboFypMpTxn4Yn9vdUY4yhQ3rHwEd43pbYrwa9ZZKMY15",
  "key38": "2bwSC2yXdQURK3LvMAqyZJxNZDT7Gc2XafsViZ57WBk77VxWw9inLYfUMu4KFzKNjgV3HtYPVSLNN7nYGgpYHGCJ",
  "key39": "63L7DbDUXUyLfH1EC9Dk3njYF65SvWGGswUsFmR7x5qg2Yo7LPDphi25FtYfuJ6ubpyWHNLwn8Z3FoDWssTv72U1",
  "key40": "5ntBmFwZomdbA7gBE6SnmQK2cuAitWGvVyuiCEZGtS4YjueBBt2Z37WEMFXMkjiYZKpYMhFjiBtPTmqyDyJLY1CZ"
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
