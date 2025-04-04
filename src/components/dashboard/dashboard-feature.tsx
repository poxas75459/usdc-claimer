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
    "4aCLpy8SPHYpMj5HdzE71JGhc5SnKPNqf29SF5Kk4qN88KjWJRE6axKeB43GzcYA74L4gLFhfakYwswm53nBzzN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oEHwoxvVgA4dtimxdWFmkhum917fgpi8JFsfhHh6YcGr6W75ntvK6ia6vGjig1MNB7tEixoSnuRJ71Gogfa7eTG",
  "key1": "23jyD8YhXNWqM665D3nNxn4JCq3C22rHbTJbKxfdTwaeybbmKGv1Kr8Bc65sqgRShzcjRCjaJWYb763VYUVXB5gS",
  "key2": "fvrxpyGuFxNSfB3eW1BqJ7Y1j2FNvu9y1pbf82eoCDLs7ftr5oUS7zxfnexpvTZhMBigNjLSmGS63qpJ9t9C1tT",
  "key3": "33aW4Q1bdsCNY57KZRwuJHYzTkWfPozAe27SiP8xhyW3BaTracAnP8cZCyqpFWV7uz2FD1LNPGjUNXuvsmU8jLHC",
  "key4": "4bdY1kkHSkRAkFkt2xVvqPyZjrRPfgjhWWLZFwWNshEWfigUokuYS5Q88HeR7ux9x9qgtAM129gbpRsQhjvvk2dT",
  "key5": "N2YeP4jobwDZg4ijea7wiVFR1mxhRK59yRsfy1RQLSCMjQ4UvGomhiGfsAknLvwESfnS5UxyvJzBkrWxab353Rv",
  "key6": "2KJotE74BYCjoSJXVeASmJdX6jEjXZWwDiELPbAWMptR9xfqQP7rm1kTc5Z6kuQ5TysdL7yRSQiYdtXWyK5UwtiC",
  "key7": "3itMtQs2VChyX6nT7GY5JsR7dEg9NeHL1aSfhKdWGWCWNMh76wN8BJBWa8JEAsmMbnxP3awrbVNmmj6XUNn39ows",
  "key8": "3mBH5RhhXfWn5pnvpCyJo6GbrRo5P3DmcRRb2Csz7aL1DDNTYbdPGHtCHe96xHQ7LA7eiNi5LWnbWMpdSBDTUn8X",
  "key9": "44gqBjfCj3ecPtVwz7bMrjrpYzCRPiQrLh1ofJi4HmUwUHQ4QZK7vWfjPsW5wha9mWxKUjPacJVhezLPV5iNEY6T",
  "key10": "5LrHuwFVoyVLYJLSj7ZJDQWNKMt6mVYTd2MJjq8oj2orK6Qrz99KcaJyCLXr9U7zMD5vBSMejdw86LKnVtQRG6Ev",
  "key11": "31wULTwdYjt2TWE4SCaNRfcnhcNmPhoJdx84tfH4N2nZKx2DAVaAFAaYdMLwGXvz6n5D5cy81wpYj2gUvYJqWsiq",
  "key12": "21WQ3Hq5LgMbCcKwCR41k8H4Xm5fp5RriFAVWYJkTXWBQ64J8aTXwmsMZ55TevZQc6nPR6x9oMdSgLNBEZ6kbRjM",
  "key13": "29ebjoteCZmXrnsJSC1zSKwWxAE1g3QoZASjcH98wCeMjRwFk9aFmrggkWFasGCc67m3xdscbLVoMpi9WyYoCB6Z",
  "key14": "31GihrxnrGGdw1aFvbFB2gbG5tLSa6PXGgvtKa8vXu6ECb6NeTKEbiSZCRa9uxHe5BwcjegmineWXSyc4XkDY7jE",
  "key15": "2JEbEk8n3j1b6pW1DLcxcsXtxhJZTKo6aybZvpUXhvQbuQucMyyhsFyWuo1iAC1iEbnxXPqQi2NfGmsXVomeVFHe",
  "key16": "3Gbh7Nt47LZSSs16mdDEkDYrbXc5v4m5qEcGf8N6A4UJ2wCGrTXFR8KDt3vb4SoXuUQ97rHewg6TjbKWJjujB3y2",
  "key17": "3QFLqNJExnnRFdV7VRGEMrK9D395UgA9KXn5FyA2sLW33wug3JfcpQgDqtUGj3TTPKuLQ33DfnKFFV2eM8GiicUr",
  "key18": "4NvabccsfviPiSDNnBo6kRvb2egXqVGmrAATeiMAojqxdtEdba4qkACbQV7VU1FCP9Xj9HAsWmXSXsBzHQGdjeQU",
  "key19": "mj5BVWE9e8CNYVi6ehV4ENb7kk13SPtiwDo9FVv7ZzD1hNjjQpUzmee9xQihGEHGddy3s1X7DRFRRYqMSAkmc6E",
  "key20": "4nnVfX5dtaiUYjfndodzn9HfDjDBmVT2wzJ5q7brbQBnYXCzVwAVQydLM359ckShVdEzvNbkX91sJY96ziUAQyNx",
  "key21": "5vdLQ71iwYqWChgKQ6hgjXVrZHPaBSpdL7VYeYTAsDquP4QAshfav14wSUNSZV6s9s8EWK1WaFDqPwV4Q3ssSVK9",
  "key22": "2QbDkP1fPhR9pLKZpDxDREiNoQKEBh2ZsVNNVCQL3GDycJbfNATDQa22NiwmpqCdx17by1GFKEdGkCxQeUbcJTGa",
  "key23": "39HfBrAfXKvGQgJg4xLGGLiHkJPhYLyhbsCv8Cx7fjzwUELr9ftK5a4FrSbUyso7fz2gQaYM3SDNjxt82BCqrRmo",
  "key24": "4Y8UG4W14AGVffqvVsMCHJEabZboLE95EvzC8V7FyLhYMu7oPPptxYmBiYrSSFXZqXG3RSC1K7bQPvtcBiS6eHDY"
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
