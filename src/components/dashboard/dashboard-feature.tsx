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
    "5V3cNXwoLr9QJxfFoyBitnWDEV9j7M4QJ6yKQERtdiZzgL24F1HyPyDmPujzduX9qKUqNLkeymJff5MWdnsa4uNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EMyUZAFb7r86kVrDGrXQ7xeJP5QvXaCgx86wJPSzpe9uFFGmNBaVvrQpJcLrCDMdrwZ1d3BfW61HjpLKX77eaBL",
  "key1": "37nJAegaB9SoyKQGv1AstD4zbcRwiQRM6euYromrJGgnXsCNaUycvirDADSyERx63MjExifkzfhepagDpSP4575h",
  "key2": "3ecZXxyUwzc4ceWF6iUTXwKwRjWAFkPWd8iX7MdcfPegpJKHHttezZNBC46zrfAf21GdXQoRhjcdQ2WTinSsJQT8",
  "key3": "5z9TREc5GaYM8qK5CwotXLiPwCHKuzJ9dPBwwA1UppGt8PbMPPzF6i43fqesZ5prHpCdMgJMGLR8DDitgsusm5tm",
  "key4": "1FNvqJTcBJthUkGBrhyCsP5AXfN4CEmwWNFkWghC6oqiL7p8ez4YP6UZeaqH3kJMhL1JDVH2RPTpc5jqyzUxyVK",
  "key5": "4k3xtQ9XXos4aJpPjLh5iTo81roFcT7GL1iPzQ8c1aqNJqkpe7GRJf48ki186Jaav2V4oHGoe2nQtQRaFk14aHS5",
  "key6": "4TQQnXJuDVGtFSesMSFXH3JhHrEph3mM34eM7tYofKf8HM1THNvPsdmVoRaQqxEY4pVqENkcfP2ihD9sYzUYgwuC",
  "key7": "ZY3o6iwZhivS4nmG4RjRNEPXXLEdymRnzrGLdjFFasJpCgEvQ78p9gJbMPmXwJgQcaVZ9wFQ896rA44vMER1v1w",
  "key8": "35CUWgu2ts8fuPuYMVEMrSwdwh9JuF6kaT9ubBE5GviCNYXVJEEkhrHGizpUfRMXY31ppgtdqTECMd7hLDKk6HL6",
  "key9": "suVpSkJ7icg7dAgtpj6oh9icEAEBg3e5pfHce9YdWvoYTNT35sEyGFLCp3668rvaytcRxbxsNe9XbMbzLWgk67V",
  "key10": "2qPxFkAKsYpS63EZe6g2X7eXaRPpGvwH8UPwTNMZrNNFSGwUp15yKbsyXURMvXsYuAvTAsdMjcosf9qJ5u9HdLN2",
  "key11": "35WGtLE8ddMh66BgKZUANov6aGNe3P8SkevLjF92xGHebqjLP18tkGTCg9QheYzqmAjJDNrZuT4ABxEXmQ37ic2W",
  "key12": "ghFFjmr9vXPRS311sQdN2LCuzMiREybzL3GpS1RFx3eWaBGBtSGe2HfnUAFS8CmgShSqek9ADtQzrs2UErGCxJ1",
  "key13": "2DNKbqam8aQNCBhhcVybPhCjewiduLKPuUHRF2PjxJsdAr5eZcfEQUTDpJEaLezLjFMarNTngJGy8XcQNLTeM97z",
  "key14": "5Sq67GCUDsZEWBDSqfqbshmUpYALnEZacgxB3rG4dvtrR2nmnNmUDeYVAYp5xeNbBnxswajvEmEgWsdiarvyB76f",
  "key15": "4oeC8MCNtr7h346bw2Shyo1VRPEV2vWsiR8uHYjXjFzdSSTr9r97xAWUCRwVQxipAsVXHbFsr4x8b9XQjbi28f1v",
  "key16": "5Nq25JxiGWkGNoEw4yZFey74o2xL5waNaKK5Vo74gErs8pnkpLzDgkJ5kZfpHN9bs4YVHzjyA8bRWhioEd4YcfuZ",
  "key17": "4XJyDomtwm573z9zuP7gknh8bJ71dUByeiKi5irDY9ieagW2siXjHe9Ufe4Eb49efd9pHNhZmeTKpU2Gm2iS2vTE",
  "key18": "2hosKK1w5qhp85AmtJ3sqBWQRUoHDBDsiRYRpYYnvvhhFTuZQZVynJPaw6LCLAxsyNnrLEhYkodzp5DqfTv9ZAwy",
  "key19": "dBL4A9gF4PGvhJoQpqUan9ixaTo9BgfBC4iFy6P8U3PXVV729EmFkckBP3AZKYJ7YtNXmwYwEAunRhuQv82LW59",
  "key20": "nKVK2gQ7K3zLxatkfY2yKaDJaxvjBD5LzU92tsNyQaryqoEhwU6fAWHtTSJ4ogu2mNU5d4Q1JLQEkJhH12MAQY1",
  "key21": "28JEkvbpU3vQnFxDWy3VzmUTUQwTbz9aLrHttshbYFwZS9S55sQkHEvzwqvAWF55PF1PJTkpSCeSbLshK37rcAHZ",
  "key22": "4K1E2RuBE4zyGme4GnJBXjNZsS4hFausg8mYMtrwyCW5pWupZAHFpLqBxENFAZFnu22eNWRJcyX5kydNjEfJToqM",
  "key23": "5KZHgDqjY28i8daixnwgb5uGnKF4QzkvTYo2kb1pZwrbeCSqz8xd1TiukKJq4m32LnZFfu4MQpuyZyw7DA7EzWnz",
  "key24": "3NpS9KtCZYdg5PYaT6dyvX1JCSUBaNwLn5q3ca2PiWZgYgf1CBQArGgXv8nV3ecXgguxDkbKMFsyy4Ti9Kzap2Df",
  "key25": "7qkczfEoveWEwJTzeMGgxg9p863xdPrPZz7hWxwQwB83QzZtkKtea9ByigmXpYFiWubUSPN2kQjuh8UdvpMLyyQ",
  "key26": "5V78PbxzH5Kc1aY4pfDMHfizNoQNSc9zPFAXebbpkCV8UtwLvnHgtjus18WwHxEDoXX1pTDSykXg2utFGbdiYLUi",
  "key27": "2Kf4MPVqrUBawYkcLEkBJXp68buASZkUwfqqpuanbBRJq8rbpvViWyGQb7VBLfxwrMzFAgcv874gQjqGxJV8sNkH"
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
