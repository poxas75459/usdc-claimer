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
    "4xz17Rbo1xQNU7BrzbGAHDxL2Wpzkn34HQTK8VKsLssGpCn261sBXQMHAmCY6tWesjvq8gTKxhifLo9xEKfmu9GS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGrfUozS7uy4ZACyun4jV5NB1xfpHo2rDsNSr7hKGV735iAh8QQcKC7toYJQmx9ipbaBir7eMAFmRSZDF85zeh4",
  "key1": "5qYBgajE6cGZHSDdAaCnvsPgwokRmjMKpAQvszHTvNor4U2V2f4UCwjfq6AE7s2VJbH8P9BLPiT4spisf8KWFyb5",
  "key2": "nb5qqmHb3fGRBn6RhRgEG3wyAYzM3JKUGxs965GuadG987865ekLYMKWCK4BjJL1n7rCogJKPt5xpwY7tZ6aUTY",
  "key3": "39hvqnETGN4kA6VJC1tA998DwxkSQHzSHKMUWmrSRWqcgMsbjw7fGu9eBoWPxnk7dfw3kwjvhWtRQUSzjp699EUg",
  "key4": "37xDDkp9SVxaUrNJywNhiQzKfdp7cf3TPpnkpWWoCva4BAQW95gVn3SFR9xCr141gHmtpU56MiiMobEh2CWVcivp",
  "key5": "4MGHwwJvy4Hf8ax3N2Ktj9ZA5neAX3aZ1xFDbPhrm1VD6oC5uGBFfwEwhJCW4uGhehMbM1SeP5r47BNEbYQ3Bn57",
  "key6": "3fcqVZ7fNNNYq2DfB2VPHGVtiLEkAFNhoGz1yY6U1guFmHqBm5Q4GuJS9j9ZhsV7zn2GT6v6kMJidQdfYa6xfRHY",
  "key7": "q1x1PHBPZdkJMf5eZQPQxD39o45rHW5cNnbkcFnsay7nWbtf9JWr433huQXS5V1vbzX6VHBEHyoobXETRg3sfQR",
  "key8": "46GpSdG3vmwWDUtsKG4XbvyvsmGjWEHH9Fb1Kv3cXSt4ZB8HGRobA6bAzXDFiP2dMw8f8RrPLaX33pgh1v5fWjx3",
  "key9": "4WbNHFtkMPLr6scQLGnLkcJqC93jvVpsUy3GDB86sXtWe1VmUEDfVccx97mPqPEwNFsUwJst4z7BRdHbfxFMfM6X",
  "key10": "5kcczrHej7Lu3Hf3AufimimxRBHkoV2ePPT6dym2X2U8Bj4AkBNM7Sev4GxuTbgDCoTyiqnDpEHMRdVTzDLdWnb8",
  "key11": "vPUD5vpDtyAZgskycVtdMBQZEsGp8AaHARk7Uq4wCikKuBAhWcHZMsV4p5ZWm3bUotmGc3LwRyH2rep9weTLt4B",
  "key12": "3ZkX6kGDq7jMPxmBotnp9cchzYNWNyQm1q9qwKUn88iG7D4b7SaeRZkmAQYW51mQitGFPEJZUJLMj1auHJgi6x6e",
  "key13": "2tvdRdHCmQvrzFPY2hxoVb2hwStHw9SaJuPwPCj5bfsC4vY78ARCfQYw9UPCBpBerd8FEm29yf2qhzKVTPR2hH7h",
  "key14": "5RErJJqwUQ7knd34YeV4ygDy2k9nJdDjUxm9zTqSHoCdNKxgmG9bmZ78mpbYmNgoqQLmLLpE5aqyUga3ozoPPnMv",
  "key15": "NBqYauHN9nuwo5k5zU8Py11EX9BQCcnqqAVBAirWAuhV4drDRbmoknSst2QLwRmEavv8HtkDTeMu79TALVtEEbb",
  "key16": "4899QYbHJp4XiUSx8FExMh4LpKmQZKsduMMGRPdYpBqRDJZY2QpUMJ4y14ztZdZUUy7QDQyfSr13MjtUmeyqeFHM",
  "key17": "2CDtyu43c4yMM56nv3aUHT4qFSnydMH4iXBZ9G3v1HsZYpTcfoh9VFbDFYNkBZ1joDxoxErK1HSSExe2g4nGu3mL",
  "key18": "We51XRU2nC4GT1oCmbNSYDDBouEkSYuE8bCziuAH2A2qKX7fUHchupCAvwEw9kcJwjjVm9suk5Yw8K2MNURFt2h",
  "key19": "65VoQzTZ7yV8g6gCQHK1iwoh5NsYXbkfq7hpUT1a3YMHLdfvSPXPpg7fPL4qfvX1PCBbnWpJCzp5TLUhku8CvxRg",
  "key20": "34DADksH2kxUATPstLz5j6WUcAwZf25LJMRU8wT5HoQDPK4tswTwu7MddTjEu4rdNknWDN1pWhiq9udp45nhgzeL",
  "key21": "4BrCvKVCTxneWMU8DuHwLxvE6bKQLVCqeejgHY3ECoPuPL6JyMX38Ui7zAkexW3SyS8cBm6S8NoC6Hz92wn1taNx",
  "key22": "22BV3zWmqMbkgocv968CHaqn528uGUB8gXcRymXS66Pyrq1oWPydD1zqnTewdCj1CoTkwjd57KMLkCc1kPtugXAw",
  "key23": "2Zf4cS9Hg2LKQ296jXZJvq8v37ir7xgUkEijwCtp2AFoUW3rWfG6FncPgWPgJW9HhTteCB7Wr12hBo4PvoVFLQSG",
  "key24": "4EzqumdLkACWW51RkJEGrm5Qxvbxp1f1x2ia4tpSiMDKYAWwhNerReYeEfQyAFpRgD1r9DiMgcQr5DC4JUD7hp2z",
  "key25": "2pit9HYcWZbY57H1L7wP2R2Qxn1vLUnfq8iS4jMm5sYuhVQomxt2echTQxLEmCcWqJAYk1L4xwn3nQBb9wfCNcoZ",
  "key26": "ZQRxjYmc3wKw365haisdxNfzc8PDmdbzcuZKFfaj1mwfeQwvbdADcjXLgruXGywu8FDZQXbEEtwYuEiTyaep2ZD",
  "key27": "2awyksXYkUPgziQRxYMkesHigA3xRRmhG2k6UiCaztMd1vB72UD8G5R6rdNf8zFpakurCxAzSpTv7aj3dckVLtVQ",
  "key28": "2rGjZM8HZXcaWEjTy8kQChtsLCHvXtmbUNNsjwxQqmHUWQ6Uw3av8MWXgi66AVc9YnuCTxRtJQdHw98Xr8W4tTXh",
  "key29": "ksfydRbVHURPGpt1rzcbvVvVQpShZkpFAvaCLVL4nFESKZ74EQBYEvxvbByGwx5bB3Pchhz96sXVsNnfFcES5sw",
  "key30": "2x9dMftTgzFnSr7xwevDvFCy2pXhSCoir7djGgh4vmoFUd8Sz8ZWM7HuaT9uH5Rg7GXgxVa3PbSeSky3ueJogSA6",
  "key31": "4WZ5UbzTYi3uW7ysCQmvgWwdDC2Y54JnUjPMFyJufJWmPnT9heLkSwjvqhcQUXYCA2DWtDynrcYrEE11875ZhVGt",
  "key32": "4Rm2NopH7GRKo5Y3qKFiPrpxHn5fzT1ntsrvQAtYqgLvhygwJh7hVMN9ucAsNrNe975LGSPSjTRhcjFbeno7NofK",
  "key33": "4iExqZbb9DXcXpDgpkev2cJ6PB4jJpr1gmjpSg6JT6HG49F2K8gLEE1m13Hagjzuvk4w2WdTmG3mGwytm9YHShfQ",
  "key34": "4mFRZ9kh3Yx11NurzDQEEEUdyaz4BzhBKs8oheweaZCsXqzgFnwv8mQ7gT46B4W3ghJKB9QfSK42V1TiCAx5DoPS",
  "key35": "2WrhYKRfRBssYu4mcQmtuu6YrPjrM89tfoJhz4osNNDR31TVs7X3R8u4RUi5MzvjxXjTrwKjdV9mzprp4hRaBYKS",
  "key36": "2hD7G3PwHKeMDXzxKuUmnyFChimrRhqbz3a2GqbPYvQ4np4chQ4DsvCcaDvr5ASjpSLkVxZVvE1Q88E6RQpRT28g",
  "key37": "3J1fC3WDsHSou9ozvJSrpDHv2XUa2gdrqhYjkNGstSPFQZM3MCZpzrQzDoTgHhVirVk4LZAFqh6f1ybYyvt45hTD",
  "key38": "2kNSjU4hC1RHz9cj3yukCnFkjWY7NWXWUagCDs1ius3U6Lmt2qNNxtTTFFpSZ1VjDa4qAQynZBzTmGB8NkGCgEiT",
  "key39": "5LKzTMGbfw5zigkfuRNEemKmXugZwJX13q6Hd5km9p4KdjK8vV6BJhDnKfXRbpwNYJyQAJyFjAf5vCzBwcfgnYck",
  "key40": "4ACXSfRfeWgojJDp5VyfAXw4g3AhshRgKgyAFsRvWw7M1mMY5muaH6mkoMg3ZHSrN2bRv4Bfi4V9ZFxXgxHjQCe1",
  "key41": "3UVAxkBov3tdo8ssPheX3Grp4tMQT1ubjYeE87oJDNPkdzqfekw4DzFFNGR1tyNRYuzoFZTfUehWNeWeWCPKgEK6",
  "key42": "2HL6o9YMypQMFrcr1mkZKKbjS7yaFZMNmEj3xLA2iFmAqyeL11h9i7tn4ZuR72A3DHJDXrKfXndHJa6vSe3mcnRn",
  "key43": "2TPZr8zjLDHauMsDpnLNUJDKWheMcGXmhQHRo8EUWRtBJFJ2MUw2VUbgYSE3tVuhhofwxb5cvDZc8rnhLepDXmsu",
  "key44": "36SZjg2gGsVronvCG9bp2qeAKFj5fAY571VaHgForDJuD2v9cv35UmFdntUQFshu447xA6jUdg7ew2xNm7XUEJnN",
  "key45": "3fH2LFgUZRMXWGujbgTZWBLr8zE8ZAQD6dK56dxmcXnhrYTT94NPTKr8rAJMrQ5hxei8iJujtFLFXsF3UF3zLCa8",
  "key46": "3ZDpqKyTPk3MLTTjstFMMrPXYkXcKRadeXCoTKQf43K1fVmUjr58AmX41Xegpua7w8zDx671fqJhBSvPB77ThWq8",
  "key47": "56Ay2T1xpn8XPJfrquXvLRtiazHHA5FcUruwNweE4nZHQAFuEZbQ6Z1SAuq6bte8VPyDTRJropn1HH6rFWL1Jo5G",
  "key48": "4WyzPj4JF9hmEnXL6zPsQ4TzvH6W7sqp1nJL1KDLcZSCsXg5rBAaZ9Wfv3aWJitkmb7L4bAdhWpHP2YXQ2fvGCLX"
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
