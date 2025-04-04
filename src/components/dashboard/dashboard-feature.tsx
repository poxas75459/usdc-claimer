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
    "DLY66ZsVe1fa8VmAqx3JJoXwtQJu3iwDqZxbKTtHpA1K9RvsCZ2B6Ff7oJJ1M7tYFuRqvKLKGiL5LubKkZRUquG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UDWAVA6RiJqpy2KsHGKsidYdM24Gh2WVP6bY7oVbeH2rhYidNWxFjYWccBc2yWaYdHxrRYHxMbg8x7YeUYtjLiG",
  "key1": "2WhE16GyfHCVNTzshLhyU6YKZvZ2ZMEgGhxmo4URG71KRduhhQtZRA2Tk9pd8PUJDK1ECa9RxaUmQ1QnqRPNi7Bv",
  "key2": "4LizkxZNifKU6LcBVn1ZFGrnts11VbBHt7t81ejA93Uu9b3CnoUGVfXPr7YJNAzAPfnEFWwSXhogPP9J1CJA7rKq",
  "key3": "6FbHvFBm3swvdjojYChfC9FNvEWXXdRYybTTaDwAAkXnHqjj1A5MoZ2GvqvK4GFhr8rV4qxDxfXfRuKmKeG24CW",
  "key4": "63vqziMeigy9JbouVFzy8wFBuXZ6S3UFtAiiyWwbHUSLa4MtgE7q3ffKksiBM8i82krAcAMcbSmhvwUzC7NwZeCA",
  "key5": "4xp1QYTr1tkhMPF9awjr4HC49z6vQqxZvLi8XnTHCPtRfybM7CFCCA3TGaBzw4hH99rW8zVCXuen4J9ZpDNA7c5",
  "key6": "5xcGKAXecnM1N8CSESevgxnLUbegTc18rgGSXuqEYsa9shPmW3YN2Vn3xpj4LTbGJqcFjRtytrws2vpw2J5gSLP5",
  "key7": "4GaUcAnLxWfA1HBwC1YXvCJ2Pv4vPZHbhMBYKCDcKfrRneSbnePxDMHWzNnTnawNCS8LHsyCLHqtonWSB7Knm7Vm",
  "key8": "24Mhzu9P12dHGkMSCHMYBzCowLPh329viquiFcnpW25SBjhwVVux8wuaJSwx4zjT9zt7tezpSZtShgSnWi4MLNYi",
  "key9": "5uoMX1Qy3BxWBYZktbp5wVy6PXxUtyQt9ScGcUKAWcG9634oGA58eMsThctpcdnTonSE6zdVBmv3A8ZRGvfg6Fth",
  "key10": "5FUGSUofDw26C2D5qSP4T93NyR1JhYxooMy9jj8iKAoyw72PvMXtXCm1jrW9Ys3z7xZoQqx2kmcRL6KU3u94bSML",
  "key11": "2TS5NB4pjBqCxBZqkW5G1PT9MNgdz89bFE7V6ZVRQ8VWpuWDLfxuPwV8wwyS511bmW6wcbdtZBJrp2Gi3tcyrGBY",
  "key12": "4zKrCV9b7AMLPZ9fuLJrVkciirDWRNYjUuoN4XinRhLovWSmhEk1GZ5jgMAvJDGRqtU3DNAKXdUSfaSRDwLDytt8",
  "key13": "5iz95NoEFdqNSxDzZRptioVkeSQCAP7R4b7xBqSJ42MCvLUkonsKDHqZcF6fgbrrxPznugX1oMLsaQK9of5XvsMc",
  "key14": "5eTo43j31V6vXuXmhuPgtZ2pjq9qSgCHsmkiMLNmDVYDaLV2tyf9HZBUh7vHW9xiyFPqEgUrEuzjE7zHkKmKcj7L",
  "key15": "2LyieZ7kUcPkUtDQUAGDm1daQhsQH9pyEpPMj3z8WxtSiYcvAov8XK1rLVNfjXiqYwK1pteP9dQN31NFttt78Dah",
  "key16": "5jSCwZGAoNDRxLGQYNSDEsJUPCi3QGp9VxBFzG7YzHaNFEfLrtiyogVGoWs8mQqjboasX9dg9orohVARNJDonw8F",
  "key17": "3ReU68QzaPMSuo7HhAtTqYKbqaEVjb31ELrBL1W5zDe4JyCgAGXNzr3yWjHk7vNNxrs47fsvHfmvzMcexj6eNShV",
  "key18": "2LjJh9MjbyLW72oq1GZrvtTVrFRjoa2ug8VEY7ZjZMgqCYtNHL1YKJ4U32aLPDqa22X2Uimo22YHpy147JiV97zy",
  "key19": "3YtgebzZNTVyBa1u5qhrmPjrvdf2e5cmP5VsjzbeiNw1kG98mn3WFEhihHJa4ikNU6AsXk558GNYqk9dahCj7K5i",
  "key20": "4v77QhTcBCL1m8peBysJXCw6hiKCWLMXse8MKt3JKpmseve8r6f7G1nA9mYsxKwMP8sfQrPN4rhhmHqdEZH5cFJ9",
  "key21": "Y7WysRxRrXGPN9sUWjZ3e6UF8niqUgmu45eCkxzcJQWSeCxGgrRMMiizfFPNyUjDm6jzWWEQJWa6VBnZiE6q5Gr",
  "key22": "2KV5x8RjhWSVTenWRq5yExBDmguStm7WNDywf7dXRMAJh86yRtQuqbsoWdCqoUTBeCCxH56k8L1tGJmUyrt4eK4y",
  "key23": "JnDm9TXXur4jYUMbiuNG1eyzNj8eJyep5MexxYnauK7hutYnwh5n84RoHo1wZPz5P5NnNuJz4v4iHXiEi29S8C2",
  "key24": "3xpTREbRFo1Zz781UR79aiUV5kKp2agmrHPbUk9Tq8FpoZSj4EEZB5QGiZCnwh1hZimYJpYkwD98NixcMJ84uKBr"
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
