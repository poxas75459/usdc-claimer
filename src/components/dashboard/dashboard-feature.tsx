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
    "5HKzuSceR2Dcg8TKWZPb8ou3CorkZaiGpgAwBgF7tXVy18CjTpi5Y4NCuo8exo41fuRXxsfpasrsSC5wvJVL2cuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BrMQXuYpLS1JZnFaZidWHvxX1PapbHxWXz4qFGfb65Btj7CBAUoL3F6AeXr2M82WWyYchv6g8rSpW4mdCHo2Gdu",
  "key1": "4Rv9nVNcB3cVM4icWFgATBtPDm7Jyrgep774Lwi9jvv7rGFXTA13k2boiVf5AU7UWf8QGyP8NRrAEXXuk2EoTCeJ",
  "key2": "2T8nn5i7XjJWd624Q7dyuQfPf1CNVn4AuMze7bdDw6adtpwedLuFtb5aLmaX6xkuyeDq1BaiwCPB6TDkvMzQSifV",
  "key3": "22d1bnFCYFDpUeJ1qGzMjEk9T2n6MRncEGamPMaQoBAMEt9zsV6TXmw6TMYnxkzzmqpw7XPKV8qtBbSHg6en4f3R",
  "key4": "3wnfcMphrnm5KL78ez9ca8qS51ii7BHBwtTL22fDhwDWwjLCFCxpeHgnmqSUCyCqcr16CcEYU2EVtZU7tn47msKo",
  "key5": "4RoRzEVyF6A9D5Fagz4VXvsDDYbsEaMhu7MRfbVcCrLaEBvkqTbmGz5zyxBecCnuvmJgjqfBECkwU7AtYpXwEyqG",
  "key6": "5xNpRcGGqNWw5rsUunP1tEH4GBG8rj1aPxTfGqkq7uUWKcgTQxDqMELhQxm2LUkmiEHmGyxDdX4dbV5ijHFTRvGv",
  "key7": "3Gnwcot4WuJVCniDL9Yd6FMqDZqhYd7sijzFkZdMRr2r6eQWkHzcR1xeeqeTrdRuo4eCLrQczDcxAT4M9uFL8g2t",
  "key8": "4zBWhpK7cEQM8zt2wPrpuSwBVjohEpDXqHTNgQE7EJLfERM7ncowXssvXDu1NecUqTAJR4VErpvfsv5QbWLjKovw",
  "key9": "2vLeQHGqSx4QTVbaPnqRid1Rs729hLDvbXZBnMrLuG4bZbLS3x5jawybJzhBNDdDj3xHyDDyH4ZoUXcf7sr4E3MT",
  "key10": "5RMaw1sbicApYz5KGwcJ8NpPy7CzDMxykhEWVwrdbL4Sa9K7hRD1JgSpuD9jNAXKEBuzGhr8ydnDsuHGce8JSEA3",
  "key11": "4CYLZeZMJo2sX5tJRVEeytZ9yJyzQXtS94cdmmyC9yrzBjVTDcsgzLm8vdLTtQTGojNXNwcRGA6Cv7b6Q6sNNnQM",
  "key12": "3j1hYXZAnNv5HK6TbdVxWTmcvVJiUdXaT6bxKiyegav7T2JcgNPMBq7y82VdfuJyq6775MxZsCd4p4kttkVyvuY6",
  "key13": "3snTrsJhS8WrUXU4Z4B35Cydm5715yAT4GAiUK7EcbCcXa6W6qgF3M3NsFVbHpTxkiVmF78VNHu93N7dsxrPv2i5",
  "key14": "qisgjYXDqEYtbr9mP4zj88cB3KBrgk2QfU5p5wvD7stzJtQKDHH8jepy99yQWPufsv3AHodMj1Bw247ZZpR4sN6",
  "key15": "3SZLuF5wBX6ogyXyXoA6DGdC35Rm5QdFAYSxkfnQATwUVEwtqtedjvZcVG5CLbyomMhB7Hi5vN448kFsgE4BXr9Y",
  "key16": "5jAC2mAhawmKbFMaiqiE2e8M8HB3dCL3Uzk9RZDQyhbYdfVi8fmw5N8RBs5GU13L6Thg4WtCXPcsc2hSawAp4p86",
  "key17": "2T4mHoPDpeLtpifNDjWe45v6igRHpyQrC68Bw6eCTdGuT7e4dmjR5AjXyr8aANiq947NZMof1R2L7aNsgNbW19Hw",
  "key18": "4dbVr3DE8SwzqnA5i83BgbpLqFVJj2dcxnVX21kwjdC9Tf2cBhu4uK8HtNJ1ghuV9yY55dnsuBixdKhwRtGHxoJy",
  "key19": "5X2sxNTH2D3TaB1rB1yuub1QJEgyZaoDpxs3Apsr2UuLGvj3FLLjc89NqFv5Mqe9Rojc1KdT2PJThZPvXLbMJ6mr",
  "key20": "21yUF8kddU77pQic22mweEkyJbUFMQmcb1UGE9JHv96daYDV3wBoffGowzCdfT6Pm7dZ9SmK6kbpZLbB1FjtXuMv",
  "key21": "4ddphxA9Z3vkRs2e6YXT3dsRdurCqmbKKyPbSrEc2qLznkyC2uoY5ggGi3jxZ7id4cX2xaoLKFvpzVKJwZCCvj8m",
  "key22": "524tAVipw8g3mT2RVDvEyixGs7s5nHeZF71vNiZFnVZem2aG9tuSuGeFkQmTw55zJJKxngoLvpK16WXEpKk6d33F",
  "key23": "3fCpMZUBmZhMGuTkNm1xpGLQS3ZfioJidEUnxunouho9YJXBBNaSfCeEwsmjka7XH7eF3SF1NaBYj8oxrbYGQ5rQ",
  "key24": "yC5CUPFarMZR6LTEidKEYgdvpRhngDh8UP6bB8evm2WGLJV7We1vdZgMuhLbSHcCYRPkv3vaKSzMn5zgGEGr9fj",
  "key25": "4uuoPnJC8xxJUrzhbtGLE1R3HRjzaJX2n8zZMrz9e2LfMtdkRqvhFbwzVi5bRRcb18gPujxreWuiqYEcCPWRGyqS",
  "key26": "5nGDMswu3zVfGd1nN93ihYYbQ3uk39hRdbnhqyhdcux1yuMjb68NN2cFT4kUkQcEmj6DW17FqS7NJvjtyrMbEUpa",
  "key27": "R4iZgEobn78ATk3UjDP5678H39VxsmGKTLrhwmAx5bvEQKPRztVsMivo8gVKDWZqZYGiNSfYbkhn3sb1qUemLKN",
  "key28": "4n4WAcYn1M3xG2F8WfGEBcV4u3BL1GLW16J58BsoZEx4dGVetLTD7PSprDjes4DkC9LkZv5hYa3zW9Qn5aZrSDP5",
  "key29": "44jXCf6M79W7FKTXm5tGXVRb8fVsxybH4XLGvTHBCTRh8gMZuBCv23TVnMT6iQxAq8jWdszB1iYy8jjiMuSueRHW",
  "key30": "4FQCVUzoZD9BQJa34kYLp26mJpBvzqhWhUWfd1Cj3nsg4gmGuAaS1nigDCeAZZ6KY9VFcj8PKpA64uy6rsWFNrBN",
  "key31": "2ehBd1YGLkBEJd8Udvc4pDD4r3sMLedcLBsjQ3ZGwf6TiXfy6SwQuZRLjr4dYsHv74Yz8B2U8mXdgK7kacBZNw16",
  "key32": "2WVoVW6CYHLmmRaMbW9BEnJ5njR6iuJJweBvznBZH1Q6TSPgBtC1Yz6Zg89LLCQwrXr7DMuQYGT1vQD2SGacfWTE",
  "key33": "4ZAuAc7Hj8RZTdpRVYH4jZ8N6n38NDDRMYF4cqGaPzycvFYm3sL3eUaszvYHktV43xj5vRLrow4X1xLYSiCcUYst",
  "key34": "dQi8Qw17uTr2Vb5keBFd74HnYyUPy2qgjHpBkP1TMhtLjBCTfYG7VGyZ4LWchEudbuxAbKMcbAtFag1X1kbgWUW",
  "key35": "3PoDAuZQ6WPdv8v6hJshxJoDqgtKQ5fc6pnMDQeZV9RpdtUSCUBmo4cibkU4zChvJTwUWLKZYide8csDnMjhvcMv",
  "key36": "3f774AJGNGPGnRwGDDQwE263Ug6YLiAEbAqodBw6fmhxn81x6Lgw69731C4VTkZ7pMf9wFnXPcZVPF7TQ53XPowR",
  "key37": "QHTYnScVA6xdS4yhrkq27VfJhwNp41EwUxxV8uwgLopDWuBW1ZAZj1NXB5NM81kEa3qnQuUXeQuN8Likut2g3ao"
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
