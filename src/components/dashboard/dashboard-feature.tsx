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
    "2tyQCcYX5qWzCmAdyUSSEsdigdwtghLEmHUFLeokhdeAsJsjvwz1q3ARy1GsT7uWn6ntAwALsXhvWUArSEFitmko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CH4qJKgf7RXUiqtVNvBPvH57Cen7KwKVbQk8R22Uk5qkGHTM6F8DPMPMsEWgTf9fiUHdC6ZrsU38FCFtXjBLSo7",
  "key1": "2WN1kD3ChmJ7sLohUHkSiZnN2PV3DTLEbgHTK1sFFKpvU2UX9PpiSwVyYV2nkpBF1JFDXr548fffBcWyGY4VvhPo",
  "key2": "5ibYCp3JEVcbxRf6XWb6RbV1yUZaqDVPK3zKhH5Y64xqrSQ1EhSd2bud6hsLnscToUzQTEzE2SEutBQVfyGZSdgh",
  "key3": "2NLbDjFyj5w9Y5PRGg9ZXE6eHnxJkdVaQUGf3UidjFSUTJ7zu8XyUQsgJqkRTphyXXz8HAdxdtfBZRzbbDZkJ8T3",
  "key4": "53WQ8cYGTvJG5LjGc2QyVFwPeh18fJFXiKQweMRi7pWrXhbFgp4CyVTTQPNNuJoMrX5SyNi96NehVompkoJdcac2",
  "key5": "4RdYYyHpBMKTnzWbZWnV7nvT65aHHdERYKM7iSgrTt9pCRQait3wXnfnkKXo2kbkSgQQR93B2vFDT7LtSyZ5GAx3",
  "key6": "LjEzZmexKLGwNurT6oxKzHdejx7dHoZroea3oKTxoEirG8gHpnvet9ZASvusLjbMi5th18MbziEfXxFzmYwmeWM",
  "key7": "26Si4cbhcCZFjVbBmMuxxp4Sb4GtaNVUvTukAkBDN2k74s3ri4FUtTeZNXVzuBmev32CmdKWrAhQ1pLTjg3p5XgP",
  "key8": "8oEeVboWBeSNMhsAecJvCGpVUuUuFcwZiPdJ4zw5EBrF1hmKgrf8qUDp35a8TbDayLvjKcFPUEiVwLo8whnHzqd",
  "key9": "3xG8TSgGGqHMWFxCNaHDnd9S81Hcs3WR2MkMKWVni8p3RpmmP4sGPmzpSANABcTDqgBwV3NFm3jMTjuyjSucQQGA",
  "key10": "4ZqP17jsVTABbzyc9qhzNGG1GMq1ehHQ4CHebbk3Y1MKtZmPgEX5B2GSMrcxBeQh1t2jL1hXXJvjYnzmbCMJbwaT",
  "key11": "5ZVHP9BFMRW2ptUCCpnTF8bdR2iNxHuWAMQr9n68fwugE4GDGv4xUKUndi95nQRbJR9VjV9RgVJL5AB7KABjumXi",
  "key12": "5AJKgQSZxS7BsZzVUmpzvWbd2gULbsY7sHtfAikzs93Kq4LH7WCCEnsSVp9YTs6CQ2e1vxbCRB4jKrTeaqxuYLYi",
  "key13": "3UwkGNDUeiRni4WYwPzJQaovytHFhcavFhQEvLkj962sKk6xCQBozq2wDu1s8zkgYX99eAoJLsZqDznRhQtErGkc",
  "key14": "3kDacLUruJNTgFYvLx3tQoWCCjD7FAQN5HAuMbx3qDLNHa9LNZp3jMqaf5Djsbd7XcqbsASNyVbF9gqrHu8E14ix",
  "key15": "3Mu7DDz5M7P5958AGVkPMMa2nQvkTSyLM3JkGdyM1bWFUhxu4hWbDrXGehN6w8MJZ2apYMuPeG8BLw3gDCWYywb7",
  "key16": "yzrgM5vVoigwTbXcWcHBgbz5xPSKKvqKSxssCLgaAfVfy3uddSGr1FyzzAvkjNSQe7XELTRqYgv7SiNVUJ5VQSt",
  "key17": "2TvbrGNzsHKvJ1r3etMWQeQYBtXbMEjRn7YGRxKsFUJz8VMZ6CD1ab4HJswwkGC1s1kLqXFoZcPqVvEYjy3mcVjY",
  "key18": "5aExqq5CYYr1BY7B5YaQGXYhQo26NHDhsGtEYSnVY3WwBuQf3zEvXyPEzqK3T5JA9EVTqpRqxDY5UDqMsvduJZbA",
  "key19": "2fh15DGsDsaLz95YX68kLuWBPvQ1qAF318PbtAB62fpKGph9UDvSbq4HAXgvkVHiVdR8WvAMVKgH1kyG1sKwXnYz",
  "key20": "3DGuVLgnnGytxcK6ARUA2iyiW2nv5sVWrYYKuE2pixhZ3vP1PKf6Mzm9rFVRbXXsEWeuCTSEGx1ba5bsitdzFyn5",
  "key21": "2XDVZpGHcQ4ZCP6gUP3GjeHAYwGGAJBcHtH7nLHB5bhtX3WMies7TLJio7nTCjTvaJkMh9cDZM4fnvyS9yaDVYPb",
  "key22": "61XZ8xaR1GAoy1d5HkNfWDG6SEtVeZbAMFAzhAgLmetLukaXv6zYoy3rUFgDwdAWnRdnN3iL5UkejMCAddb6MfFx",
  "key23": "UnHyGp5JKsAydq9jYGgotSwDeo4YghpC7pmko7Yuo9BUFvHDdPgaEo2LLiyZUgueneqmHGqfE9fq6akabfDySZ6",
  "key24": "3ujJ5KNMUb2nJkLR8dRdxy4UpfeshXGL5C9aNJCMva8gz6Lqm47G4jYBMnUTNinPQXeS5K6uohSQeR9WJfxTLhBW",
  "key25": "3Xd6ZEGjc5VMAUpTM3FyVKxHexdrZpLJPRRHHyjJaWSni1bZTzEpz1ErBZ1VQobgEfefdTg3G8bUsnmE1Y5db7KX",
  "key26": "5NkcBdM5FTUSyKeMfnzzWrhuzbcqVyALFUzXmfZJKzuXvamMdwnBhHnMcZDZqjX7YAMMxJEe69UqdBP3Ccy7cJ3W",
  "key27": "5CzucuMgvdjhky2kgHKqSRhTi1gpomBRqf3yGXGoYBxFb1fFSR6WAJTENQ3uo86mL5up5zv3KFDgY7w3FSgsBp4t",
  "key28": "4vDZdz4Rh1M4889DHy8c4jU8GgCBrpewNf7Y4cDQbM7TH6KWs7hRd1Q8e7BFexdcj3EtBnPMJyc51BfNkY6AiueJ",
  "key29": "2DneeiCdqju6sbFagiiR6EhJb396rFefBJ4MDkrrHe3QrN1j95eqtWyjSAusSKtXydwdsMmNodDFWq1wKyn2Grbx",
  "key30": "3UfXJrcWxMsqrP3acjhecZgT6CkUb37G3crFJiFF1LXpLVcvJe3o56XipLhAbatR7VQEb93Hf1tmCFUrdtBkfeUM",
  "key31": "476gydxEW1RQib9HvpHkhYuiCDzfRNGDNnAUeys3jK4tVdJyWiwzcRqYHUNSUQBJpvxrEacbH18yHiioGJjMDF35",
  "key32": "cKUgZZHwTjt9XFgu3rgn3CwcQA24kquvovwWkq3WhiXgmp4eFB4icjHs3KjBRrfdqPqw3FfpofRtSF4yuZEmAYK",
  "key33": "4y9VkupGpnrvPxQsDt7nGsZm1Pc2HFt5tHSrRF4gqwL9CZHdMJgJDqkAVkXU1uUa7r9TFH49zLb1K2vvJL4A4WWe",
  "key34": "4NJAuriFM6U3d1icaqPYZ92TD3ojDX3JAxPPgGwbMLe5e1YVEVgRFyq8kzz7fVcLP9T1bpBTFQ4ZhbZ4ohvXroUM",
  "key35": "NeXeTc3CJoH5YKhyBbqsMyfXsRzQkrJ9fZtfXe6ioDeNWgu5P6UNLpZt7LhBrq9M1LkArxqLRMSoX9uxCNgpJe2",
  "key36": "9YzembcLH5v8uA32J5yGSytGTQiXPeCjvG6HfZbDHLBjSZxD46cBSQhwVdUiAirMiBrVZtLAmfBrW5vAUqZvDB3",
  "key37": "3q3wvCH7v3yXGBRkFmkykuWuG9gPVivhgVjfcJ8NCMwiFznUopGARTXnQvwmdXobicrhpBmXfVzDL2kWrKXs1rfg",
  "key38": "4k1R2zztGdqzWN8jqDXmsQ3hTx1yDGPoJrmzgkMp4LihVeRXi1JxEQKQdNgSyf8Zi2jaiJGN7cfJKM9NyPVJ92Ba"
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
