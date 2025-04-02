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
    "4YabjkB2zSruU1RzoS4arswguHf7P7DWZ2fVad4rTLu7mRb6pnegbibDNmTQGJV4i8cUbKmjRazgNn2gVoLA1qZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENyXJbKAtu1txgVnUb6iFiJu6THDecQY2xikkpvhv7asvW2esWW713Z1e2u8YoiXebV3QhZfTtAhtWZ3Z1CSVmt",
  "key1": "5H6trNDTsb4n9ZWUpRjmoR35vM4SgjZJktDzv7BGn6nNkgX8HJpbeE3kk8Vo14busZphopeyzbhBbyBwT7UoAPN7",
  "key2": "5M4y6kiwvDKngbB8kHWpnTR8drGXDwD4VU62A6fqnPhXNbGQx2mWaaLPVE7Lh8Dj3aYxWipEtn2uRiTcw6h19SAv",
  "key3": "5Ut2Haf5nXHfXm718G42EFDwkEemqhKUaE3uKD9EiH2pXe8gxggDX9bsza6HF617SSYQ7BAKJD8NQ7xYkT7veZon",
  "key4": "3asxuq72DYSsYVHun5jsp6VLzq2xB7GbuXPExENKLaWzCNgv98CRMyK5gTguiinHpnCJQkwRbkFWc6M658uZ8xG5",
  "key5": "3LhgxRbQpR3Jo4weWxqRKFCE4TXTRceMJwJqJPBij5njhhdDigbXey7pNorFWruXwxHfnzh6no9mQRB8fKV2wwE3",
  "key6": "3Xcs1EAt4XVAAJtqqvEaQCKGa741RUz2CqwTtjpUY81kkb6sbuZociJmCmPk7JjdRqbQjMBCW9ge78mdspyheUTz",
  "key7": "kf3L5yPxbYuMYHfBGKYgVKLRiUMNM94EEzDZUAELSiop2Es4EUnmLVgesTie7o2cpRNpg5dpGUxmUMUA2ag5iYK",
  "key8": "3hdpSe5Ai2g8pCDEyurYZhXieabAXMB3XYMkBRJUMpPMMcRgZGRkDpgsh9dArrUDnpTxikWoYEWFWWyf6NhEEFCn",
  "key9": "5TFj5cjWNNdV1GchxtaFNQT9B5cfVdW9PH8q1vUKmkua3fMm5Q5tiqPDiMivhZD6aYEidrS9T4Kf6SW826PwMsu1",
  "key10": "23StPcYceaVxpx71Sd3MAEgTRAiMcZLCGeVoy1Rq7TEe3cC5DUE4BSip4euucj7Uq72a7PHqwGTtoceeMPzaG7Lh",
  "key11": "4xttrK1Ca8iPvYZxoZ4xjN7LE7oJqqGgStDEvYmrhxiJEp2Pbap64T7VcEjqDdwsDnHYyZqwjNRt73CkiMnH2Yd1",
  "key12": "5qQQ8NiRn8NSG8qki3mR1tQY4Up9vnBhUrqPX8ms4wbZFj4HSNhJez6PuoesuRcLCQXuwtuHbdT4PVx67PfqdKr1",
  "key13": "jSme9r4uJJBjyVYUm21qvvx3iJ4124zH4fVCyYNNQSm8k4ag3i7p9cpzgCZGWvxx25Wnh7FnojASycfTtHsCqpW",
  "key14": "5WrLtok4dvQ4T8P87K46LP8eht7Amp4zMcYWNRzykwQ45Pc5jGZNn2Cn7FQGqH1D5RFLyMfGVASvF564Nje8irdL",
  "key15": "4DC16ZMjzSPqEouVxUzmjD86oS7BTEsRGiLsRLta2Mf764haQpgCMz29eKLaBSVKYntp8zvxSPgorZ8Ton58eq8k",
  "key16": "5bYbojJr51ciBS4sz9TJZfFRQy3MArRZvhfNGu7aoBTSPjfqz93zU3BS7HVpZCsobkab2FWjxefXmAmJGzoNjXMf",
  "key17": "5KJ1ktbpr7jpqHa1h8ead1TQVP5Za2hnGvZ1S51Fu2K93RHkLGSrE75Z64kyhfpSGnA1UrBHZ8aHCQmRYHUx9jHi",
  "key18": "2GqzDbkZQnxBwpvN8ZjMRccqzmzn3gBx8TYo1wcm3FwapQpGje2pjQi38ZqWBq8pLcwiLFeydbicwbQsYbt4fr5m",
  "key19": "3VC8g5dsNYEDFsTbhBXWQtKGsH9SXTiYy5UfodvGs2URXA8Muq3G78LvDUxuZojhJCtrRXc8oDUE9dEpdqoTXdzw",
  "key20": "5Q89i1kwg2yZGUMjePEVx99oRyquvBDvncE1Mj8F5VMf3reWjjp1nNEXCTuYaWSNbmXUCjagFWVopyeZbNsc5YZ9",
  "key21": "3Y4VUG4Q9H7ExXgPwWFd92pjywrdDRajzdTLRaNtA1FX84pnfP1HThLLDiSPpLov4D73V7KY75gMw7PQA1noEKN",
  "key22": "2ncd7iaSW5xRh1WmiWULpycpv5fnWZMaucfSCwhPrtv9MtySD76GEJGntA9d8GcyPyid5f3QBvrWGXJmWD73GZMW",
  "key23": "5ik8UEmfpW2RXUDyEnjbVSn3TBksgkXn3tXny2pnEc98D5bNY1o5agdKFXT4SnX89qckTEkQmPF1X9y8BTPx2Ngu",
  "key24": "3Zg8AsewdXc9tTd2kxgGnoeYU8ofsAykT8gAdBGAwSfRBFrqNWoHiBhhNUWTEfAXrcqH8q5gbTNCCcj5Qggb3N1x",
  "key25": "4UtTuC8aBjysr5Z7gfz2VpBJpPn5LJSaFNbHWeJo5UWFtuUNrgLtWvuNbskJEBTrUoQBk9tZMZ85Upv2cCbi3AYQ",
  "key26": "2vUEoW8wuCJqAS7MfdKorHTfdnRRs3kTfaiVsNLV4QKLsbLUQmEhzZqVcyci3dGGigQVQC3o53ZJLfkoxMUrPxWQ",
  "key27": "2wR4Y5ycshQejGqadB1BPfvjjdimzrMBG1iJn6zp8efSgbudxAVnUxDMVDsaGfSnaL7MtEP1LCWpF3WUsiLWvJFt",
  "key28": "2T9sVBzZBkRAa6AwcBBjG9BvTaXeE668BkTEZZ31jt3unppPszi284jhtLFMBZqTKRD3w57E2E49HTfTBraL6Y8m",
  "key29": "3rqMVfqiGjmyaXbi5ScMu6TjYkCnGg46EmNJB8VXLSPTZwrBtXftasWV2GxaERPHUtt8Gv6PcnSn8bPcoCGyGq6q",
  "key30": "tiXpqhGWHLscVYJLjhfrr81AZsP13YpNSvkg7rerweZzndiG4LuGj9gbomQuUDDoU4hhmrLPQMeHwszC5bpyEZ9",
  "key31": "3oAFkcXpYYp6jiKLfowGTMiA74QD9CK66te3qGbe8Cpyz8LjSNP4JDZjp8Gc8f9WjVMSRMUWePJsXMp96wKS9vLw",
  "key32": "4CkxcU9QAN9D3yFG7BRHoWd88btFKsgnQuQVYhHsE1e7TUjs5CiYA75XuDjqEBS92Zv5n7LiWQZZuLRwaTXG3r8t",
  "key33": "5uEakDvc7T8McWPjwzG2aG33u5iQqeQjFcXH6MKSJUVWwkbuKbMZcJanuSa6shUDPc1FgvhXcB7MNsT4TBs7fmHY",
  "key34": "3vuLtfSVc8AB98cUGRvMJxJsSmFc2oHZz4h15nM7dka88ABGcT9iNRvXY6vwdn2ahTRjQdSKXfBLMFUVTqJYickT",
  "key35": "4ECD4tcubmP3LwDdULyvJtBFRdQhyrzyxve8iLTP8crspcVNm5i5zM7GMmMcpeZmGCa9UMJ9seZaTLLu3it2kxqZ",
  "key36": "5iunkkWcyEpfZG2pBZDYh8EHvjoDZC3NTCTeDo7TfbKG26EKEfYzRQLvvCPSHAE4hSMn6HfLiJYjbqwZKUZdUFER",
  "key37": "65zxfgMoBRT1j62NHdH1AwWB4dvHxpBVM6p9wobYtd82mAWwBT9pidorpbz2k9kf5r9rkFhqcbzFyuMsFivd99zk",
  "key38": "3ikRG2WFE1VqAaUEd7fUi5WdWnrrcvBW9xmaF4J2uGCbtTfwDDxaZBonoUS9nzFczMcU9KC7sfAyQtZ1v24LAKxP",
  "key39": "29SHc3i3EgHt4M6we64CtG81sTNvJZmYQm1qP6zbAu9LtDctoUB1qnvEugHki5W7QULLEJ9MGRQqgSvMZwnbuaMr",
  "key40": "3CutJ699rtM1dGPC8owNdEEn7yqmb6bvx1MV2y3n1bRF1ftDVHkfTHrXeEZU7gcom33eYjynwNDejbpi9ZXAQQsM",
  "key41": "27F8uP64kk9ccogHob9dN7UZGmJcVkL33v7WuaAaRyVuWTsW354C19x6scfH49jhHcQ5ohrKH2Vcc7hgo2RkSp2W",
  "key42": "2B6qNqkeXUmPawLNgwDQwp2h2XaEJdzDDzWTWssjQ1b8Rj3steFhXCE14xdhtMLZDaZYqkFHxnDeVdB17B57ZsVe",
  "key43": "iRtQvQaxtB69vvg785YDukQGGbib7nVJkNQZYdh1c5fmvfkc4nzbD4dXssLyEcN5K8FtTM6m73P9MrdvGZ1cNA7",
  "key44": "5FBf5W4ZgQu8mZqL1Ew4R61DtixxhNew2sA1kjxkAoJKkkz6WMgfpz2FSwsjHrokP4jx14WuXYHTcUh89wdwjfqq",
  "key45": "9yd9ZBDwiijFTXGG1dARdZaGEXEMVh6UfDb5AKBPhcDWxMfsCmFoF7W4PuFh9anZFLNpxh4jbysrFMWKEoGy7Sa",
  "key46": "3qcYLJ8JsgGJtLZbcimroPJCcj9S2K1VqmN9GAhZ4ZZu9cho2cJNFNWqa6o8ZywuEFpMJx3ztW5AsJWfWNYgA7Qr",
  "key47": "4FSUDMLfKLg5qjYxCDjvA2k6QxwofWihWc5EtN9yZBgCpommzBjNyJ75x8ZFiCFQVefJMpDjG4AqPDHUikfFmo7K",
  "key48": "66yiQS9nwtDfq4CcXYooXMfTuzXp5UL8XoamCDfsvwTFpsdp4UvmxQ3ukRisN5cCNLqmU5L4CZBbpWHLaBs7Zq9k"
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
