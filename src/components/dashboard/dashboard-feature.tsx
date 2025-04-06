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
    "xtPcPqLPN1hdfgmHcujG49HvkwRiwm7FjsB22wM4yb7nL9WCpT4WeNc7mXCLjw5ZziyMT4fCkPPbTvxzRLqgpFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KRkwqT91Nix34thVZnkqKoT74qmsm7G2mht1N2cxXKi6WQ6BzrajShZTUDEgBAnN2WJFJF2EseLrQ3NGwFm8gYv",
  "key1": "3zPYm64qnQdDnb1NEgAvrWwCy3sR4b9odcyv5zAnFoist3T5YeiXBTecoaqFKHYxf6a8F7FzB9KA7XaPDW3cLV2t",
  "key2": "4n7ZzKjb3ySFi3avir3vyXZrV7RynQTdf3Pg8hETxj15zJEEid6eY6kTuCzXo5aMdJ1HTd7YVqZ85eJjofNaSpNG",
  "key3": "sdYTXgeednbX5jQQwATCvGxJcdrPeFtiWkjr92VHhBHTD1YxUDYEsyhodJnhKiPJXVrUTXU9TnU7JxvKbtTP5Eg",
  "key4": "41atMSnV5RpRq9pr8kXQDmz8TcCbNa48aYSzcDvKzUEzCh3Lem3WAZ9U6qt4hvz31NkKHnij9bsGyh6CpCHLknRc",
  "key5": "3ATDhCD8ZpAaakSr4JpZyjAwnrVDRrkZW5EnzUV93xbfYeUJMg1bL1NCzjymvGn89PeARvLSeqPgLb6VEmvSt62J",
  "key6": "2D2fsDSxaB1EZhmeaN1UHo9R1sJGh4zRTTLBEHVeGiDkuY8bVRABqUFsaPtK8VHkgQ1u69Cb9DqLzLryaB25ubv",
  "key7": "4foR4xS3PeYrE8aXqdp9Kf28gC8ZG8TMyUUFqwetkG7kYYX2zJt22Y5NQwVYAG44jJhzEmw3NK55MSdSdSGcrfYV",
  "key8": "624R8VVQrsxyX5kB7hz6fmi3SNtyjtpEXsoS7XPNBkvBiDZBUn5LGYzA5LmX1MoPygvoTFXAakJ1p9DDzvNtQZvx",
  "key9": "Hhf8dXM143EghTqPQ7Wq1ngtBT8j84mGyVUS83ELsnvfxy1gYum7Rnq4VMWVQe2bd6AG5AavC6d28BWaGvehWAN",
  "key10": "66MiSqM3sp6ErXXjUJp4gUVmxy7Cwpcw3TJLGMVKJnaJForC4P6JP8a6a9LakAv4v1LEWvnjCfrrRwWKusdSCJe6",
  "key11": "462WHUtkQoSkBJ2cZ3A1PR995ZaqZcrWRw7VVszfKcFvtuzwfbUZ4w3hnQLBsMgwii7ZaXuVENRGR53hMEGKiq7X",
  "key12": "3mVEVasCpCLtJ1xAjyVwVKeaaVUSBS2LCmc5AkqepqpgWsx7hod3wS7oYKHq8QvUEG2L7F2fB4MeMRkmHVLqhx6N",
  "key13": "9GihYVK5JhhRdnzDGHDhegX7yPpk7uLLgfqgcYSJJhGc3sjYEYApWL37bBwm5JehD6b8qqCM61ZW66b6c3ra9Fa",
  "key14": "37CC4Y8nbThtHwQvBQzQrQrbEfssk9SuwTquqHipbRNQCQnnQt9hVm2mn3i7Hvt2N6z3AYkH8apLJpsX4Zo3vTUP",
  "key15": "4CYNDmMH4UG57abg1gxfYmkJtLbWuRw6UP8W4RNhZN54EcnAvNzuQJDJYXoFeA3tpGFboEbJkoKwkwTMfAmS4wL6",
  "key16": "5xPPREkafSwjg8grWUbceiHgC5UizTsAzJpHtjggKu6co5Mxj1rnCqsXCjo7UyeJoyC8mBoZLsB3ZY22FAQYPKKB",
  "key17": "28wBN6cRAU9KsdhTULNNKcErtYpLeQ74jPe1KdoX2sLVqZzBkxbtx2aHgmnMSH5dmrjLJkemZx66JmxkM1ewnNo8",
  "key18": "4TrodyRLJdLd5A4PRuzEQDEPbNzbCAPBQSneLWgAFuiQ54J65DXAKC8pThreXbZ6CFaoFWRBnuTtXhEtPXNTHbnP",
  "key19": "4QE5Spv4CtG91N2LV8y8nGHyTBMQarYkE7oyQGykXQeubzLQcLKgy8Ufxct2BSZfrbuAQFnMaxBH4fo8kqsCrGjh",
  "key20": "3j8Fbh8QNvqfywHqNiHQf6G35tg5NoEAqs9hsZ7neZ6zhRg7Lf9L9wjYxxFa5dLDCfBwMVU8PzY8TyrqdiPaE9c9",
  "key21": "4dfpubRxubrFZ3RiEt5Yf2rWq2AVkBxQZChW5yf89qoR1Pz3LUBsaPrvRLeq7D44RXbYvfjPnkfFjfXuuTFYrbZz",
  "key22": "2SXoYj2okyFpVJNfwFJBArG6mBtG2L9jbXqLaMJTegaFbi5535wS6zCg44HCDRKEQ6eu3FsWcKC68kd2SGAx7rTW",
  "key23": "4N1nkKwd8Ds7VnrWixirnM5xunEmtdbc8D5gYg5N8HHtcS7DC6rfyKWBjm9AjoStsfYaQMwLfbJRC62v9DMBZnk6",
  "key24": "5eRGQcrCJETY2qDpimWrAEyyjpzb7urj1yMEajF4oBiw62gz5YJzCA8Auty6YvS1jvAGHkGCEPjaxkgv4rHYEXv1",
  "key25": "23Xsvm6Cy4mMnCY5wfQzXnd1ape3BTvJpZjQPwTG3LNRTt2dmQ2yzqQ2hQ7t51UYjgrLmR67pcu7ZFYqA4ueu9pa",
  "key26": "5QRoTXM2Rowzoye6DfPSA93KivXWv5BcXSy91uS698ReZr1zp4xbPzEC2hVvTJ3v3CoTqfErtKSa6Rj81oKDbvXk",
  "key27": "3wp1WYB6J7wKgTnXM1yszufdb9jcGKLJhj751PYAyhmmNvtooEtJqzz4gcZkbZqBnZXnDiEb4af5UvS4kRJcUutk",
  "key28": "4XtTk7DFyuUbAneeWQf9cA8AYHcuHmh5dqmcxWTm8kcfbX27dd74wbAd7CTJGGGt8VhB6UsLsAFHvRrzaLC4UbXw",
  "key29": "5pKE9E7E5LCzNSJXrSjuQbLPapDgES9kbzSRobiRSEz4PVRMYu8d6zPr5tfFCKDXd1627TZVjpT5tBsCfxuaX4Dt",
  "key30": "4NMmA31P24akLE6w29QYdYBmicDtnxAqQAS1CjBWKXHK4Pt5Jbu9nAoVSzC6hx9aiWiF3AFFuvbC7e8WwJPb2UiY"
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
