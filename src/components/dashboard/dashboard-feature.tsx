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
    "3opq6FagkWTNh9qfhuXjdYq97qvGQoZ6Rpti4QEGjmctrq8yawA6B4UvWYTwQyQZFQ8iodMm8qF6pU5oVgsb4h1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ciNMkhVEjftbvWRbPEjYHRj48GtZTbMkcDkdXzVLqm5HiTRg8RryGvKmg6qTRnwP8vvnmvEDsnKLvHDeDHeRUfJ",
  "key1": "26XfwxuyV8m8Az6q97rdwB1mdMdtpo4z5v5T8VkyMAJLnLNYzdPemcmCB2VkGiFtz6mbrAsJPSPPHKCptfvWY2ev",
  "key2": "3Qy7GE2AEhoSxEBfUEf6er5kvLLsph9wEGdFjM4RpUAgHLtMDe5BPWkTuLivNZyBx7vjhdxVcgdeakYEnTQ4ouc1",
  "key3": "2ADghGADK9PcY8ZsE3hT9UKyy9vwaMEnvESCkanMGMUPB4wZw5jyHwAcuiPvi2f3DDEPSWhMD8bRE1AQTM4XTVC2",
  "key4": "3mbP9p7SLcshQ2W6a55Xo1rTeqzDHaaA2MxSjF4VckrfngNrQXfvZxLi5jxas4y53xwSWLNJyPqS8yQAjjx6jrNJ",
  "key5": "t4ue4TKbq8ikDza64fWjqo9BbSqTYd2yVnivXjs2x9hJ2fXEh1KRQWAhPApMqoBbcxDicK3wgo3mG7gwaXgDnLU",
  "key6": "2VtTdZvoXeMPUebMdTUQ3rZTceAKN78QFATNQtbX8Uh2MANZy2Hrky1Q69DiGA9JDeXdps8jfD6PS3NoM6EuhkD1",
  "key7": "4eUK5QoY5H1eug69M8r31sze36VeDXi3DLAxUPt1fwU62HmRK3uZPnVx6kjKpy9U8Z7ytMNFutnq9uGTPTnzoMWS",
  "key8": "4UjFNeufkaTj8PA94Q41cmj6dbKD6sv3Sm5pypH5xivrK3RcYhPhvBzWGoCnzNc75sV85C9U3RVvMWLuvs9SePMk",
  "key9": "2rvaPdx2ChotsyjLnD42YtTNwR5WNQnfVLBMXjf3L5DBxuC6SgP7dkDYsFVKVPj7TsxQzf5oazZPF3g6JSfTpxm9",
  "key10": "3hTwqb1RtoPHt4gfHD4bZ4tde66tXydHZKA7cJT6vmNJupKx8c8S9pogekucDb6vucatjvCuysEa6aFmbXPk5EdW",
  "key11": "4uwDMcRErhHufV8vFjAJNannBktaHGaDAz5mZMSN58krjh8AWkA5oFv64n6y2fgYAo1aec8vzF6i5wKtHnD3CJPk",
  "key12": "2VE2PadACLUkijt9QLqwtMxy8ryDdtPcb1TyDkEXu9cJhsqN1hH3cV4mZFm7rT6fgEg69mEMhC8Wm23eBSFgtQcH",
  "key13": "fCyGaudDtNmVi2tqGsJs9B2zx8ghK3wQGuVJiBMAFDtmcyWKBVLvfaTyCUoaNeAaH5fo4Ep2nLykEAT3oFWZx5v",
  "key14": "PENLq5kQQ8BASy4ia8kt6sVeBPTz4ukSV8uve9ZJ48hfYCAirgeCc599D5F5oEzWnSxRW96M6bxcptRaSG7bKXP",
  "key15": "49MkZXR6YygXGL6fHTVSwaC3mce45GC95CmNKrXTnZRKXnrk1HBN1rG6Av1dRsuNERijTqs4xm5rJF7ZV46BX4oU",
  "key16": "4NeC8zUcoEWmdgCV4ZZqmdSeNLVVtkW3b1f5bdb45ASJ5f8rhkS5oTkPhjPVmbKq9MDdyA7MecqHh71dvcjLJhDb",
  "key17": "5XgCNHSiZLDcPL6xGiABqJWdDqPLMQuSqEqbr6GNd5F9eqjeEG5UHyanR5s44QYsGZDdkosAXyg1EQbrzxpWwXQp",
  "key18": "2EmGLSfWPS9C2Jmf9iT5SbFSE9bMPFfjp5Xd1WoLzKUem9yNugBARZopXNfwJV15V9kTZGofbNhKo2jGX8roNnHn",
  "key19": "3V8Uw4rHESD4qDgq75PzEaPMKMbXgxABJcNUPvVBh31SEXWSEYKMJfC8DNtWLHfD74UNDpYFKTczvEvwVnvpmPhK",
  "key20": "v8wDBUUgvr5pccFNx9VA66yLpAJMnea4cXFebhxgj8KSPtNWami6LxDVm1ioozaERJmY3LZ5xz66Xpt3GgnSifJ",
  "key21": "3vHm3Swc9K5kRhPHfEjArLDkcJR2gbnGZYFBY9kkyWzvU7X2qU8eZHue2wuiiq28Mb1KTYds2iEHixtEPfUR5pVt",
  "key22": "4rrhv71TsHpwPm22hybmJVonmfZcta62v9GXg69yek5vHyhpRQXHr9pyqCwj6JWVvL999RVoPYcRnE29zeUhPpzF",
  "key23": "4hYVtRdRRHwNF72VYEYRryAeDB8sg5sFcCrUFkpAvcS6FrCqK3B92du5vpQWUsofvwqXZiN6YRJuwY3qtHiHrd7o",
  "key24": "41im2Vo2HEDFqUE1ATBgV2DYQz8qAdSgi81cYg42oxV9tvA23iffgmDPN8MXn6k5AGXk31nEY76FTcnYm4Wh2vwG"
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
