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
    "2qYJTs9vr6kUnQy94ANEfhXiGxLiEHCG55xVedsaEfpkiFcQPjoEsvL43T3s4F5SofaiP72cG5Gh4sPH9mRKxzce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kRpDKF4ABxCmSP3mECeaSwu8mUJSri2ydAHWGbpzMbiJmaWtHMQt7CuPC2t7GxZ3khjfh21WYDn9WR2v2V8FRez",
  "key1": "2B8rgUCwsPfos4e2oeMFusYmay49Exo6YrJeaSyV4L3y3yf31zD7QZJzP6DR4CYAjGQPHi7qaYrkToCw8ZanrBfW",
  "key2": "52ZSPu3wT9VBedMnN3YoGkqZLTV5eUaCVMubMftfb4JgYH9dtf9WVQhrfGwnTXQ2g4W3WgAyj1kUuRDLVNswUohE",
  "key3": "MtYAdpKjnK6Zx5q5Gs74Au2jp6n3PNviZhrKAMWZMqZUU6cFKXMcwqAzLBokJkYmBZmHuw4xdC4fDZDyjpenP8Q",
  "key4": "4KSw85aWdZ9WzkbioGBwzj1raLRWestCbxmeTF3ujnpXVSX5ZoooeQJeYBMqBuhQvS332L4nGHaNyknWJ118oin4",
  "key5": "63NWdcqhhddpJWuhNRprKJrNVgJEVPZiEFr1kANP1pgqTr7GZJJRxfUTmupTfuCU1tKxe6ihy5RRUtfSQp9G5AbU",
  "key6": "RnUc3BNnXZ77iYeshN6mgguqoeRPGkdcjqANcEaTBWgAXT4PxPD1QUjPGErSaSQzRbKYvQ3XxisGUaiEiXWpRSy",
  "key7": "2auqudfcmx217tmDfzU9k3Yr5fA6mrkq3VUS1JjwFncjkSJGCJxQw4ABE9yhtfytCU6vqoiLNJr79jJ8A3stbN4F",
  "key8": "5me7yGKEK74hw3j9UsekY4qtMwHZT3WdbGuzwmBz8VhKHbcNMrnoZCwrZsBwUF9UP2nGrNtthUGZuuhYgMiUKGvt",
  "key9": "52Wke6G2C9oFes2GAFvNonmrsHu3zvkGwyeKAtAzzmTCjQAztR4571QCTDQxZXjfutN2HRQRsNTdyXZWBaUoXNRY",
  "key10": "2WQgRmBhTu6bhM9KpT7ZQuA2Pgj17LXa7MQbjop3eQeYsY4SDvLnYQVA13htCVhCzf2SivyPnT8RWcPCaiJZxahk",
  "key11": "2pKrboY7QgXL5U8iCft5faFdbeMNUQHH2fysH3iVQgWvcGni4fnDU2gNF4n5m238YYigMUE8p1xGfJcJEB3CkiGe",
  "key12": "2xnp7t8nr3krofFPd6zyPraZ1QuytFeh7V82wWGhKMNsrC47PmScpnmkjufCJbGx6sGGke7HVxQ6MoBJjBpvkBKp",
  "key13": "4pqVPSrUqTaLopJvMSEPQNSMtYkC6MDvcMLso7a2Dz2iUq6NG9rYQFfRL7eAh9hQoZTxbwXxEujqq3qJ8Jm6iEtH",
  "key14": "2chncu6Y759k6LWjrgpKRecXQgB4XypcqbxmSLGXs3L1P4DHBCYCu4XeEBficM25E5XXUFmy7cCm6ag9wL4kRDF9",
  "key15": "spN7cpmGky8s5etRwfWwRwaA4ex9dDxMNprwsvATFLigLxRCd2wPuF6s69AecQ64B1dvhsGn5nchQMhdTHQZ4fp",
  "key16": "4PPnV43eSA1uRowj3BBiPkGMco1PbUNSNTgydQPWg5WeGu6Pn74J1JUWG31M6Jm3CGbf9FPnSh99ruauHHM2cWfH",
  "key17": "2dxaycetQ4qouroLdyi43u2xt7RYLFnSd67Sx9KSjcXMn1d5EgJGSx2Bj5uwQZudmzMUFP5w4gMRTC8uY148H852",
  "key18": "UyuePP144Wnic1kzJ5WYX1rQ2vLcK1viUUUxZquFYrEpKRiThaCxbcgTKGcLWgf4EYbBq8Bf3uRYe2xDc71PHig",
  "key19": "5uyJkUTeAAET1bhQhHkh1yvTsNiYDaTw5A8A4eEMMgFxKnsV28jy7toXkR8NyVqamUxShw9yVNqrMAGZN9Jdnc2U",
  "key20": "44UsXosSrDn9DaDsj67uGsmPijkk5g2PEomCbYfiHV2tiY9hwrtbqZZJnT7wbn9CNYX7kN4NxwGcVuvxSEAqGhYk",
  "key21": "4B5HkStuauydRgALZAYiquJPRULs3zaqtyr8G21aELar3M7oi5fcqrzFQ5mhpnf8CFZSoBPEDBGs89qECPgMn4Sk",
  "key22": "3i3v4E1ZVSvEcSCsSpNrrbaQn6BQBkp74gnCjFgvQdeimiXbV7VYNRpuDvP3e2TXCmjBQMt1vMRdbreP5cHzhCXi",
  "key23": "EUsGXcyPujUBFx5CfvrjJK5Cw1wtjzix3tLhb3wqHhCTtTRRrjrXqbCLtfqk6w6JCxRbdUCjCaqet4iXjieSECw",
  "key24": "ejgtES5MNr4VN8dZAkM456Nnw16SQUP2CJ2mpKuEafxovZ9vUtfH2CKDeQ4oP9GwLA8ZyZMkTKMvdY6dPPsegAA",
  "key25": "3RN13RfJcV3FRfoAfLQrxbxRv7FJXTNtnEe19ATwURcrrbipe8wV7Rcsqe1x2M7RSrYi4W7y5uME6trSr9YM2mtH",
  "key26": "4icXcL8jiWZ9Ttzi2NCzQkW3qvvAKPq4qdJrn4tBD24UfrHVJc4tGCWdNPmEaGpYv4hsGYw4WeEXskXkNcdM4nA9",
  "key27": "32TjR1USTJYSdaswdPJ7vdmNS4jQG5FRSpKpebdPB1CQJwoLUwMSJ7NaYvrFKs2QKNFAf6xAeHMFbwN3XWCoi8LA",
  "key28": "3WanBVZWyjoWiJrovWQLZRCDNJDMAaDSFho8WoXmA5ZyGty4ebeVmmSwKw7wHf2Xny1TTMc9b1nBdiDcgseqkB2n",
  "key29": "3mwY6BRrM8qHa1gCDDRgJG4pmbkgT8DKNd93Fih4Rv5a9HcvT7RTtqZu5qzX6E8N29XktSjE2gj1dn6ckfdk4knE",
  "key30": "3JFwa9zvohW2DvF1RbfjoMsXYtmo7rCkmfgn6X6d1WDUjUNFmiKp32xCjTYBnKKdJU7ur2sbaWe1Nduu3r2QUwhb",
  "key31": "5etDhiAtCSRefGNysKTGGXdyh1dtFKv5mxuYneUGKN7CKpiiWe7ALoTxctSQ5haea3TdZxgYYMSsgWB7HLNZmW9b",
  "key32": "4sszk41b4esMBkSyqUZLqHq449efKNxQ9bu5g6M3DPZQiSvtgJoF2Jo4qN3AHazEGaZrcLFwYqyECNn2zvUgdvqv",
  "key33": "3rS88xkhyJpuvLHsu5oTvyKZF83oEF6Bp2H8zQLtCFtPjRUf9usQMkR6ceq3jgoQg9G5duB7CH7LhfcjamUE45Vt"
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
