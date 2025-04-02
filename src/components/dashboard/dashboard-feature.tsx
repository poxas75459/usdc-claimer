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
    "23xu8yog2VRMX4hkVjEYb4WDQFxSEyrvxwEaNTjCdvzoSXkU3TJSZXzcpSLLThsEHRpdFz4Jyx3MnauYJyQB9mSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MYGoBWdPyEbw3ZqDmELsAouXVRBpLkYzxqF2uodA12S2jtBSdVKqKCu1iBrRTTLngkFSmevyUpAERZVf1svQgts",
  "key1": "2n5wHwrMxRy4fA1VxG7tZgJe4tzpQvGmvFMBbLbaBg6x4Hgqmdaococ9wnnwewcSVFcdxymofHPoHrAnPgJiaUA9",
  "key2": "2YzAKV72jjGtQmR3Qm9QUDxrFwgFKeEePdPdqQsyndqfXPvmdPX5ojbcqLNEgAyHqgqyDDrkJXxm6Z1cX6ZzT6jt",
  "key3": "5fnFAQFczAP4qrkyzk9ovcoKJraFf6ttKBKx7N3skx6wQqiDsNyNjRXyTWK1QXRTUDQCFbTYk6Po1o5fqNjMo7Fn",
  "key4": "PEE2rzpukmnNKJHzhdULkzssYE8ApmHcUqxjsAdPEUYg76xPxc2aRf3Uo6b1DJZGMQtz1XvKdj4JjzD4TnGsobS",
  "key5": "5ckNftfxf2zNDDAbAJdHRQqRndsB7cTAu9DKANnDXiMoSnFVwqzyz4DgtnbJSTdrfzH2S13rgvptGNiez8ajgYry",
  "key6": "2nYhNedtgQxGUXFSzfZFEWH1Dg2tXkJRt8NdgNnje99bp25RMvL4ARS4fxQVnpTdwgNfBrk2mYVQmCM3BfkTuW2w",
  "key7": "42cmRw6FwZfkJSZ95q4V2JaeZi7XkNtKrtFKf5Jhwf7MDg9ngHDeSGfiYUouB61hgpmFRgNHgf9yH7jdTpFr5rVV",
  "key8": "4gDvBS4GGzJzpxUEPtYheydWTxXX8vNgYqHcXDW759c2riF6ixqkSKSRK6wsvh4XQKDc7evA3KWSzxJ7hxe4iBCD",
  "key9": "5emd2VenS1msFhBRnzoCnTCeQSuHHjXYTVthuA2eKYYnm4RA6puyWFT9SBveTku5fcpWm5bAFpCSH2X3bTy6szer",
  "key10": "5RwcZUiiyqU8vXs9DMx9XWcFUYSE1xmrEnM3iURohhF3ZwjXEDKvK1ir6RowLSbKxVxnhUcNj4FSycEjFP3FzqWB",
  "key11": "xeWiNmVUxWE2nfyLFfqiC3v7mVKiNGjtY5RqrENZf3jZVQC2hWHWY2SR6xbr9JSG5ZznZeZUPQ4vHJayf2qwhwq",
  "key12": "5ViwFHWgFUSVaETq2qbtjCmStWPKYUktyHWantJXNZyDNiTzLCoccfC7ZyzuJqk2z8DnyuBSJStLVMHX2CQs2cJh",
  "key13": "2PL6DxBb5cgWLMzf8tyBDawE3SfSP2kbd2QsF97cr7e3UAg8MqyuiXLD4nq1DbTjzYfhqPGVxMZd44N6nqFxQ7RC",
  "key14": "36Tit3bW16wz2oWBMC9DgyeAndUc5jfRyqbvJsLDezZ728M7Uwq5MArihysZgYTty4XcoNZM7gAbDhN6XAjyANUH",
  "key15": "59VpVjrN6iWqkyfA2FuZXwfUPTKtayHberJXSWRocmDjpTjUacZvaBDuG8AQ9eVujHU813BnryTS3TLrR9pevd3y",
  "key16": "KkpuaZ9oEAoattwMNJSJ5PSgvip1UGnTxK4Agv4fPKDw31knr6vdtvKzS1UmULwuPA37AkJU7pZF5hMKx3cQMZb",
  "key17": "K1FsF6cGi6jQLpb9Qhe5MnW7cADEawK5mrxmwoHX61zoZhHfr8dUzKpmioc65tGKCR7Yo1tHSpqr6e1X8ExD6tq",
  "key18": "2TvUXquWemL7mGExufZUCSjuerx1ExN3ihMey2nmFFV9SSfXDKYCn5tBScUok24oKZLPQ9PeKR8WJ9sHmNJ87SUu",
  "key19": "5vNYYkkYJxBeArpazF63PefbC6rrVQ2E834W6fpfjZXySp3ZDfFGKoTnpzfQbT1dQwoZ2xW8zwYHW4ne2WtEcpKV",
  "key20": "2XQYK1iGbgmH7nTwW3DCzFwTqDrBPdCwbsEd8KpKUA6ym5x7kzz5vVZrbBm4tXrpsUVELNX8QoCeqsjsPQRsRS3D",
  "key21": "5W7VYfWUXoqDo63Zf1BLpvSM5iJD1XLJ4S9jSXfEmGGBK9M5LnJci5BjCgXg7rYJMPddSKMcQ5NQ4HKR5ywMbPo2",
  "key22": "LtBpeEc67dpqvyAhHUJmPiC5d5rdQR2LDkhxcRAp6XZvKgcKY1uvXnCMfYSqvkg4wSzwyR8oFVm6haJthu47aCQ",
  "key23": "2i3uaQpkvagtafsmdh6mZR2gtskDEhPoHr6rqRzf9A9d4ptmzZN65gw5k2J51JaNuA24yKNsxaD4bhoz9XajcqPx",
  "key24": "2k6ecgN1fxPHx3Hc69Fe7FDZaYAmoEoLUkbeSc8YZmHo3k9dWHDBrmfboE5nKcnQ2zYiyhnoLAFArr3fBHNSikGf",
  "key25": "eXwLEWhnffCYYikAt5kQd1LbxFeG9zZXRLr9gQhw8BUmyb5Cs8UVZ2waKBZEvtY4g3p7VUnmfNfnzmoPLx7adRU",
  "key26": "2uNiVLGJpJqWbQMPDfdbCAmDmrAnNgiwxbFbXXpneWsJtbAmQekgUhsNkYVbFLhKRH8hbqTwTP2tjhePfjjH9qMi",
  "key27": "3NG9qYNVgcDLdWPTtjvU4HVMcpEdZimqW1U7dKew7iChTyghgu1Zn8BTn792Uqc2cZC6NVacdqXZVUc3DTAVbBST",
  "key28": "3Zf7zJw3F6m793a2gshf2SK8Y28P4fpfkDHqDjwpgK4VFhgLrRavh2iiVLbzzjj3VC3TLbhPPCycaghyAWQrg2Pj",
  "key29": "4XPFJ8A91cY6FH4DcQoPJyEKyjrEJPR2YGvWuGtWDsWMGJRAL2xfoWTJnHdzBrADpK26r5pDBpr6VYyZ97jrkqoC",
  "key30": "4w3DukDYGZ7ZQuf6KqQbB7bjGBzfuj7reZ25LyAs9Z1jNeHXUa8UMynA9pJN3YP2yo83pXyEWkEvFVPhLiue5LjH",
  "key31": "HXSHwHsWsJF1QnqkWyqrRJW8H9rj9mYNia2XAnLXenQ7qnUPdAsTrCA91Be7ExzVXXLviYPJRnjDUnpDyZG8w21",
  "key32": "4zubwAh6nfPEkgU8F3iDAfeUYdqKV1MrEUAvKUAw8EpWgfzQiviZAcvciiyULQE6sn5KurWim1QJN4YtLMFCsXxW",
  "key33": "331gEabcURwK3YZNeUwargAZUSkf3azG3abgAtjSuJk7NLaGrFmpn5cb3W5XaYxd8YjJ1KCdikxdnL27Cp2cSzq3",
  "key34": "4DiuovL8VzMcFYaLgJMdujnephoBjvcQMcFhostsgQpnwr2Ee9yNfotnmmraYFTjDMbrj1Lqxy6qwCuv2A5peUqL",
  "key35": "4BfnUiPMNXPaLmKMaLdd6bWpSVQKG9Nc5Jj7mtdRsLrnENRZiHrhzatFcMk9LEVK6X3k5b71ZPYHvcjRMxWGn4fJ",
  "key36": "2gMkwmap4tKxnceSbGKYLp2kg2xuMtYva18dmWh3qqoaLRzAV6pdPsjLtS2eWz3twEJTad4XznMY4rmHaENAwy3W",
  "key37": "4Xmf6BQ58WaCrocXdHJaWZVzsvzMj3rhCU3vbPdwWsPH67cEUsU96GW59pYT3A26bd2d4eVg1kqoeLvz4xwWz9Hn",
  "key38": "65vfb8ku65zziCsueHYn14Gyh76jPmKZTaj9K4qBeM8ffcmqV4xJm7rSjFWVWsaYZ6EXn1eP3TXbUMpP3aAmhmoL",
  "key39": "2zhpmtUQdYyJLSQRweyW8j8wy7H54nYpg6n6WY4CMBoLpd76Z4BnRjWp6YNEmbcu2AwnAnTv6jJiC5ZXxv4ihvef",
  "key40": "4kxihGLentAR1UpzwwDnui2mP7g1s2HMUF6TPcZdphbVAai1mTVGz4bMz4jDQBGAuc4Qgyqeg9xXX1QchSHUedwM",
  "key41": "4A1oshWkduUEcRUj8o8tLf1PNYKLwULdGa5TeQfxqhT9gqow9QQSe7ZBasdwuyYg5fx79QKxA8xwkFimvXmUvEk8",
  "key42": "4qr1SpFoag3bPjdqWzc6N7CHYQATkfNPFEbJ3Msq6odCegsrqbusKVcK51H77bJ8QacQtR2mSUtg2WuxcL4wfxM"
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
