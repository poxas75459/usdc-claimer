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
    "62MT3VMdyBB4sq6ABtXFaX1S4YCREHfoo9Hqf3kjVzx6vKWc5fvLN23jiFM7V1qh6R8iYBH2Rj2ycavLq6DUzvng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rW57Swbyzrjt9tBHwkmfVYsarZvirToFDmudG88Yc9NwGUbY16uDDPUSzRZqcXTERkVj7Crzzncnn3y7nWrtDHf",
  "key1": "42NoHHLWZLtee5ygpRBKvnkSC5f12rhYE4ySojHhwFA1B9eoBCkNiCjSaRb99N1TjygbH6mRibTd9dYyLmqQs4Nc",
  "key2": "55uY6EVeE8M3FTQAyrNa7XNoVLVveR9kHsFyAH6qrKEuHxeE1hz7kDKoSEWg2U3aApvSguZ6HsakQnjDY6WuuB4t",
  "key3": "5faBZcYfcdNeoEpzM2FuVPMYRubx6tcp8d3irbWSWX1nUjotqKFachNrMnr1DBZmqxUKk3MdAufXce5tNxd92mUZ",
  "key4": "f3oAe8iF8YQsJpw3GioVNFDLjyWV2deKQrjoemoWki5Fc9uh5UW63mjcFT9Meu95AAzasVJkCn3FdCHjQGtAZTx",
  "key5": "EJtjT3c4jLwhS4Exq84C94U6pzkheFvy5ai6P8Jw9KW2ujBfqMpLGdpCKXA15QgXCxAFZYwAKnUoRAz6ynd82NP",
  "key6": "5td5kWQfwyZpdCQo5tiPaXFpw6w5YJXEzF8YyDhmGZ44JyW2m9vNXyCBC7ggaj5hWj5116epJ8FrUseHggDVerRh",
  "key7": "2gyzoUteDZynx8q2eeUPsL2i2PWK8t5VNrw3AkqvH1NQkY2R745qLr6jU1RUkaajWCGoeCFs4oq3PSoj1zoJoJas",
  "key8": "2g983cBvHb26PcCv1x3YaPozVbLcRfPdvi58mpkq6gPLToxUHxhAM9ujB1KwrhfdQTqLxthhEMjSN2So3j2nsAd3",
  "key9": "5PXsnWWLwsFHNk3Lm7V2NpzeYmSGaeKn6YxQeFZsL3wKZGvTLJeebV9Hgxikr1bov24aEX5qBmw1FjiGRP3jQA8p",
  "key10": "41i9tcySaRzrcwnBvQbRdSZrdPxne3Z5a3Pp1uEyS7ziST4NYKzuEBrxNysXpt1v8q12ymGZiuByuQL6KFHyiaAV",
  "key11": "4n9Fin7S1V8ojcpR526rhaAui3TWq5NiZj8BukZ25uvAUfaoY2i7wf1tc8bwNAKLz943RASJES7YbSTRtdLEMSDr",
  "key12": "3SZF413VqGjhRaq11X8U8eRjA4Khm9MQ9bDMQiGHAieuVaDL9W26L5qXBwkj167ahcFMgr5W9N2C8vY31dvpszbh",
  "key13": "5ZSP7htnNwfmqyGFe47q89TUuE6KyHEcuuhDnTPEC3z3SWJ9iP44g9mNDmcdS8TjoU3Q7vhAWHJgugvk5pXxEjrW",
  "key14": "3W397CJAqEZ4Dk4bB62nh2a8AaNpShHRtpdWupq1i1HfSv8q8QYubShuSETiXL6gEoaDXexS4VKgMtrMjwr5Nhzt",
  "key15": "3mV3yKUKu8BdZEut6JokhHswN8fAZjHex4VX38eqyg1YwidLySmMhxQTDqhcAZ8hd1B8QzUtgiekKR1k3PGTXuwL",
  "key16": "4F8gbhobkJB22uT1jTX39P3og3vfHVgAuELYzUcDSiTgYr8JmVStbogQaBTRe9P7JE38gzQ8RjGdzfSqDyCEeVjD",
  "key17": "5J2VYka1EUUskgLbhjUUgsWYsHa2bayfczFfDbi4R9wFYiKW9ERPyr7xNJecj4cijxxoCSDuzNgLBmoRZzdMPedo",
  "key18": "5FtaZcq3vB53xVdhxgoVbdPwRbjJcWqfMXGkG2vW338fjVxQST8eYumjEhEsyE6kJyre2JVuHVzPzSnR1HFmkb8K",
  "key19": "3RBzVwXR5qvUin2hYMGMGomTzgiENVXjsWSXumWn9UxKB4AAH2fAx3GGSxMGRTP9qCzThbsSL9h8DMmgvPnnUo86",
  "key20": "456oWhekiiufJqiDgYziJB58xf6aiWMbeGw36UEzg1tGdpcR3otZVASVq5JV8KbTH2UA5b8V7958SmpayChSpBLe",
  "key21": "23cyG7f3jwP5zPQi6ymg8rRJCARJEFgWCjwqVjPaZvQbCAtDDQJP5j3GvAvjdxLd4W6aYXVQsMS7GVZF3mR63aGk",
  "key22": "3HSSVJTSd2VXPzpyHpWCwj5CrDYZ9Gnx5DGh846eJsKprPjKy3drs7KmJacS9EyRNaBGQLjo3kD85HjcWWjfqXWe",
  "key23": "3ZkwcpE6xNkR7oXGtgLQdHTjVGwF3WJTi4eNu2cKQaLGcPhg3sT8cyGmieLK4cuerBWNvouRgm3QL4WZvybtUjRQ",
  "key24": "5p1AFdEsQw268Nka9YwBssXnngYEQW6XwBWzmmgaHQcgeJojBWWkrZPFEXFq8aeCuytmRUZGdbiPqp4nnE9jyGGL",
  "key25": "47avi6VFcVRKTEw6FXZfxhvBWxZdxd7tMrCGQvBXeBwQWH3xrKGGXnMQbuX8JAehYxLNiVS7TYBVDaSenPx56h3x",
  "key26": "5HZYySf5RqbYaEp5pwpbXDt4dq3qnWYB8hmVW8FMKDkf9drYgcWMcJg68UqVTiy4UqdgCEa2WisiFhVyrrT1kEyy"
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
