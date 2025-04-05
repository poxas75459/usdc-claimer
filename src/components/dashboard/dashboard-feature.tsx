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
    "5gVSPCXnp7vwMW4RMgLQfjoUWn8RpcB66EMZ9tD7oRFHmqdVoRFGzAkoQgtkMk5CMt9ZS36MKVboNxTyKTxSxmdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nbCYxkBRpJ5gF3qZ1gUtk6Bp9MPgFURAKBgeRCwW6NhTugFY45e7WZEyzgxiCebwVvVitkML4w4V2wB5yZmgssN",
  "key1": "35XRKHiBKHnikwGCQLi5PacsxwNxtqzQHeQbfASpFqBazqY3U167Eq1UHSbt7trU8QAxA5SGpNFbbPG3qkvQSgdw",
  "key2": "2BCaEnShnNYJXzW32hf1Vpm2iN21W6veLy3emMELtPwANQ9Q9hTp57WLZRE4mckRUTX8HqSo7rsvZhMmRbmmBk2Y",
  "key3": "ECVCwRsDywT2tPs6muJAeTat1LU8pshTtnSUWpx9aVz7Lt7VovnmCoEcRt9jR8VxmBT8k4xKsUKg49DQxYmQvyC",
  "key4": "Riq6oa1FsqJAsB51dWjrA51TDSwpWdA9YKka2XpPGY7cyGFKAyq85UjARG5DZJRsWtswUDvYanqDHxxf8tp59vS",
  "key5": "Ls6hQGrhHZVAkdXqhQBGTzyY69ncCJon5aJPmUfWQb2WR9tu4QSDnFT1Gawh65wgH7CEYjVyEpmLSgB7aFd7U2V",
  "key6": "zYEfdu2sZ9LxFLCAbxg8doWyLLjRqk1h1xDCVfWVQ3P8vhJYziJXWZ289Uv9hLsCBseHF4Ws96cdvQj2471NQtu",
  "key7": "4W85nme7YDaxP2mZFJ9TNnAaSpVy5qhFcHFGWTAeYHEAFu1mpfyZcHsx5pN25XfqZkARn5JK4yEFjF5EzPbD9Wwy",
  "key8": "TKfWihvJcfbN3CpfpaNTkER5FfnhmNDSbNsSnDaNx9Uq7s79YLy1geGkGxXsfCryYQsZUKg2Dh7FTmdnKpLrHAf",
  "key9": "VH6SxXWytuYKERi65gutXbvSLmc3b1F6cfeHhPKAqCwUe3Ff1h1Cikw2poKfcGsfHPTbUXMu74b7eWCeqtcRhmR",
  "key10": "5f8APDk2K1sFTnGNSZeTE89V3acoQYCFn71F9rXbVsreV3vgeVwh1dDtAvRQZg6nR6L4T3YrSMaAwhnBhPJNp83R",
  "key11": "5ciPPfztW2HShY6avaAykhQvtcyyPj2w5NvewgWD17VXhqvb5BVF8jkqkZFNLcsrybaGvx3D1E3jdb4nEm41iy24",
  "key12": "5kq6CsRtAhG9k9sCYip5otTUJYABSFsP6FNeP5wtbwRt8xv4ybmEw1cGMhqFNGPHiwbA8SpNaRmnxLbfiv3gtk5D",
  "key13": "2ZNCv47vyAFSWgsVmcr97drse5RhuEpUBexHcHhdZi83htAuF3ERzn8ZX8rAAHtyejnnvPea1YPbAQCqXTL6x25c",
  "key14": "5w7jbv6ScauUQpyazwkzXf8Hm7k32TbGWVt2vjc9oqKaFS4X5BM8zUjXyFfG42NiXUkauE7CWWzJEvKn3FGNfsDv",
  "key15": "3cPgdgH2wQ8VmhbckN23UcMruy7qQDWQaDUT6PX7T39nKhV3wcHCSaynMADCUKZReXKPNTa7iqv7DB4iwvXuVAsY",
  "key16": "4RB7UPBeW2Ucry2WChjojwZvRtGiBwP1XrRURZYvws22BXSPimZ4PU5BJWUYsgzmhBJaBiqqMwdGK52USwv7fgNy",
  "key17": "HvxF1qG79b8BwAqASdBbx11xZKSJwkYkyFmFdDkFZae5QuWePA4gWw2g4Rag48EQDq2zhasoGfBYqv4zvtAjXzF",
  "key18": "WsVgrNXM41Bg8QcfQtMohef6HWRhTCKA9vUh8wPYzZcus6wnQEo1Ut5LznKKHBe1LKnEH6GkfAErwJRzjyc2RNc",
  "key19": "3eNwyQJEnckwnKT7WLLmp7daDdxCA1JkabgzvgWK2CMYR8qt2ypwoLb4SSuSMT1YdruXYmo1WksEaFdoQE8HdTY1",
  "key20": "hX61gzNJss1ZG3PWKFyYbqJ87RSXRDBFoAdUin1KpMCrdQqTjWAz6CEGev1E8MCcM8dmX6ezkYzZSFaeqjEyLuu",
  "key21": "2iTjwSpUCQZZLybzq15dvZVFFKsNqA7f5E7W4PVSAjNeHKGdGSvzv7E8yCbwftPv8iEZhiB4wAFTkir6CpGC1A36",
  "key22": "Xo41z938QsnvDffQEmW8etDkDoV2QFSLuvAnPoGzi56PcYRm284FcHDmWG3bb8w3jRw89JVYRTf6uPkyxtWL8is",
  "key23": "2Kb6p5zcXCgpLj8rhCQNM4MekZyB5GhSASFq5XvTMFuwqXikoqq5YjDsztPrtGaivW8KR7mgMAFnukr9ZAgpG2z4",
  "key24": "2nHr7HCDtD32WqD1jwpWvzBf6txpDGitzu2DDX2ngg5igne2ovUBXbVUHcnVvyoPfCZ4AXGZ4j6Jvth19QG3cDBp",
  "key25": "4mSYWhEwY2hTCuCXXc9FNXC6fbCnhUd6yEJnAFGQfQZ3eNnMp8dD6rCt872GjR9UW2tV6tVEBaPptNUVDTYqAJc9",
  "key26": "4KKr18XBZJvLNzf8TypTyWmiynJPPgXz8oWMbTXp9vHxbq8kwfjS1ADTND1jvs8D4V69WSkyRMVm6QGSrhwkjhaG",
  "key27": "3gFNd4Caz7GmCNeUZXiKw5zKzAZYc6yEwAcsPPtMskeHi4RB46m4De1QqTSsWSRwN1wirhYBSoXubidHKDURvrdM",
  "key28": "4p2uA4dap1MmwZNAp838hLFScreTF97aaBWrW2S6zKvWPqF8RsD7MZSNLtNGD8P4yddHfkUNrCbjiSRGhwucu69D",
  "key29": "5YnVXDdDxPhwiCYPim62qAsrxpcdALcExNsBjgnyCPpwjYzBSDKNmpGU8w6u82iqDXBfnVcjyHjFjTPB9SWBq461",
  "key30": "4jx5PKba1UrWKR5dhpB7TtDM8i83JAnLAuDsQ4pDwCwpxyBt8nQzxdyGcgn6XYAmZtz2k6FVcVi28669Cb4XKD3n",
  "key31": "2zdba4HzvtwtrwYQMXN41vgASugSdzULpao5SDZmrH9BGvprqf9FKuP9CRRxTR3nHXnyh7FhMNuAi4weJwKB3EQv",
  "key32": "3jMA9tJUu4v5YozmG7CWWGStCbfPG5FynDfod6EzKTbBdmnFny7hJN26B7TehEDpreJoyHUTVNaaZsoquwARc8ES",
  "key33": "27uQR6HLqsp2yxtKd7LLjSwbKdoipTfuZzDQT4EuYmN8kf8cL54ws4LCvqty1pHmxWcyWr2Nvnt6AFtkDvx9jq9M",
  "key34": "2dJ5Vtu3p5MrX7J5WLtdfPoPT4wDjSmbY3Z2DFi1AYNKUYboRkqRS1uD3ECcbCJSXWAf5uuJPPDMv4b7wBNM73nM",
  "key35": "3BzzS4RWBE5qK5xAcJ7TAmHtQgWDHKisVBuu7jDc3qLBg41kS19BNmXZvEd9UtrjoyLxQccHe7jBvnRu7W1cS9Gm",
  "key36": "2CQJkaABUzP8N1pzeceHdVzs6AspNDeGdNBVUvdimgd99NAGTDpKsRrtp9MKytZFNHt26HZdyBUuHoLvK75atYxV",
  "key37": "5JeSUwFTu8GRUXaRHsdkNKkCyqoebPutTKSyd5ZAsfX9PLGiERVPA262tojw47Ks6Eq7t2X9HWTYNr71kwjn7KW6",
  "key38": "2vyohUgrve7PqnfArmqTUhM53VMk84A84PCM6tEzwpZEJamfy4E58QSHcTgXkaJ8oBabEkFqs1QTGdga18waY3rf",
  "key39": "4QgWuxKNe4FT9MvFfRSaznFuTVT5LU1B3QHg2pvrSFpkXWKsPVgwDViC9DfA5fCUfwuEj927uzbDCVGCRPZ6pnVS",
  "key40": "5bFoBjoZpbcbgN6qhdcTFiLWaFDqd6zeUEFQqD9gNubzvJTJ6j2rHqA8uBnyqiEJexuBZ48sc2MHJYd1aWTVn5yV",
  "key41": "25S3yPjv4fDHJUoT6j55U7Q94ducqMMVkebvh9pR388TdAwCz6jDwHdMuZjcP3FyFHg4ktFKPKwxLQo72xeEUW5y",
  "key42": "52bhG9VkoekkHTRG8e566bdNBdueaNPJmLyUu8txmytXXQZsH598NwrS9vv3pyTjJgCmAe3KBSMYTpLL9j4nFQWf",
  "key43": "65bvow4ktDUAbryNWrHmonobQwMoDyWXrq4jkdNJbnsuyrC4vXWiJXadzdgnTXjBYt9zgsxhfLWMXwaC9hojL7Qf",
  "key44": "3XGzirT5AWow5w82Y7oraiF6XpYFvmCkHNexrEQVCicca8NBmpmCMFj5CxSmHBTWmTHyVvzWr7tEDyCgRym8mAAc",
  "key45": "3fzWNw1c952GiyksZg4heDdtvpjPbUSVhNeHJEMgDDACXNQa81tw716dn7EoTCqRcDM8zJKr56BbgP959fiKAHQb",
  "key46": "4PbTAALkuBV3gE7CqJxohcUSRx3FL2oWeYedmTpZLrkWHVR2LJU5somTC9kqUCWnMep9HUpqQ3wXqB38ELBLUuRb"
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
