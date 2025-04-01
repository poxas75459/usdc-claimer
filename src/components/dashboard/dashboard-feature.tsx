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
    "8BqRCZ6FXPkNxLjGNfYMKqUP9e3TxWepahLcaWZ1tiShucfC1aXEm24epGigrGbxqCgwvBiXQVpZKkeDvzrRpLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h7oeQZxtHdnavyHtLn5CdePvXG57UnQefyXibmvGxvk5KVBqxCGGNg3hPNvPJgHFVeHyFakhgwTP7wMRCsGkMKp",
  "key1": "fuiCspNCFtVdDp1PsoGpuKiMZG8GWW4Qa37RZzHtuusk65FZDZ3TNCPD2TaMQBxoaHRU9dVsU7WkWjEbifiRea9",
  "key2": "59iSPEBKezTeajMxL1ASmmKhnp7HL9wWZ3ktCUURn25xJoT1ososPjtzpKupRwQgvtZEUCVg3g7untW75pT3g7md",
  "key3": "3Xhdo4ZwL2Rp6K8zkEpeYoL1hYJ5bShgx4bRT1h8MUftKgNyfv4p4K7mQkeHxkk2szXS2Sq6f6pY5zAVe1RQSFNx",
  "key4": "3N5CsyhMaDhab648TsTNcEaqCRqHz3gHoD3HbMFRNRrpF2Cv7qVtavuJZL3AEGp9vaKSxrrJHiyYmtfwDX6KsgcA",
  "key5": "36osq1yJZps3uuvZyj3zeFsf1hyjs88NswJWEba7BcsW1SxQthpLnXagPMkxHeeVgVNzK2oMy8CAALwbHqtPkgny",
  "key6": "8Ldex1ynMC1nFR7nVFxemidNXag7r6qbMPFRxWENjuXUJFAZjPus1fH7mKugn5nfvgiztiyz31VuufNGjGLgFSu",
  "key7": "2yXRQZYEhXcna7RsQnwUEbWfGZ9vfgNxTpbCmTaetJhWLyYQ3zoBtPHNf5hLAzpoi8URCp2NfbJxhV2TkY2HtkaA",
  "key8": "4Y62zkXKbKrQBWNASaZP1rfjKuitaU8RsLHLJACvNzGNW5CoBDS8uY9FDz17aanTzG185ikeLoHFCakosKzdC4MC",
  "key9": "3AF3huJWXw2kRznwfpZd4t7xz9kxDGyUMXdJvswkmePZ4tc99hwZoaA4gx4c1YWH3af7wgDkELHvqJqu4LRmfjQJ",
  "key10": "5QJUFZNR29xzBvoh9RhMKhmHpwnNV3kmnhHKzjdVSVBcvMjGsay7gRif6QAv4gdCJRgwNFKN5WKaGKFyH336rfKT",
  "key11": "5xMGTgRH2fVWcv4DtXoiC5E3978X5gobiE7RDnwtdhfhvdsxLCGa2na3nndQGiSWwmnAMw9yb6pHcnrr92sH46um",
  "key12": "5PzeNLSvRBbAQ8PL5odQRcLcFM3fRnzTdy3fmZEaQnPWFcYFsP2oLJba9949jH9sWdsfC95fJgD4zdnAbqX7SGG9",
  "key13": "5f7uh7owQzMu9MMzfR1trdC1cGhf8T4CrZa9oQi8hqhNv5WTk3AxXTpdGam8LkZFu4DZWRsFsF4GvgHsUHn6FF9p",
  "key14": "4hLb7Gw74Kcg3qdMwYzyu5navcvDvg2iAcjzvpfmrPHJhzbfh62CtEQgnMqa3mPTy7WmmZD5Liz3Kbb7ic8c7QhM",
  "key15": "4ct9FkeKZzJQonL6DN7yAueDeZf8busBD8JYPWtc7uZ94xb51y1ctRVbEdpYHTfRUvvXPagXEUiWYGTvEzD3kYF9",
  "key16": "3m1wkzJciTcZowoTzK5SwU7DExCqhkwGUaXsuJT4JFvNWHqDDAu9BjAh3Vr4yw1NbE3U5yo9ZnmqrhN55jtEKmwf",
  "key17": "4sdbYfJPiiDdvuXvjb9GbuXRq88D3vjJevxyDoKtdb3R7DJakegQosLePbq9puQhEPQEcG2XUNTFBvELMJEpd77d",
  "key18": "2mHi53yHDBgBeEc2o6ztp3Y8EVzpwEVfV6BAsTXb9nauATFHETN1rr1TT454vRQcftUMhrhjYCwMZW6fTgim8XvW",
  "key19": "36Z2uiJQBkok62ffc9mLfQw4qrFWPVNYYD3nR4gj1dzxUhN5WGuxAsAxSkYbFChue8omwjy5RAhgQ2uqRUk1tUN2",
  "key20": "upCKEeY9FGidovsnsifnUfums7HK51DXxxtLvheu5RwLWjhk6gZRDgZjrJipMo25BfrsYcHgvM7REffLGTmUGii",
  "key21": "4zErnc1DHfCwMrXEtU2Nuj8C5BbuN478GF2YsS8tCVhEexDm24QUQUwzeih7YKnfuSQGe1TvDh4Nb8UjKMorHREx",
  "key22": "2TTD6R74WwXWksQkvmjwJfzievHYco4t2ZsgHyWQwCqkejcKSDzFh8pfw91yjTUPUe8bNZYR7XySEnDrDvauD3iS",
  "key23": "5rwuURPgemrXpQUnkPy1MAh1uXbXz3A3Hx4MPHG3qyQNnE7L4XG6GWe2RxdLwgRmUyeWaFW2BGvnoLkjEmtFJ5Gn",
  "key24": "2PuLcj2LwthCiB4SxhSGDcFg6iYjvmpMLnWUHnWVdun21XtqZ2vTRk8CFStKuPY8n81FeFWzoE92x6fCaXVvsfjE",
  "key25": "35zRZxQ5G9AMwVZXfiwHvCEFN5aWahfnHFzkvrCV6phePTGcsX4i8dyY3kuD5EpceX6MdY7k1oX9HEdcvidxu7sS",
  "key26": "2B8QevR1eznE48q91R7VSo3oa7J7QaJqTQSTnRRW4nfWc9RDgxm5dykBwZrTuV184rdKfZUhqMvUyTbndscNYRb3",
  "key27": "2ETvYHtiBiTEr2ERGDaL5eoWzPfFfLoHDoRegehmkTGrF5XKg7Aizi9J1nmXxMfveCexKvdYpdB8961Zt9f7YvEJ",
  "key28": "5aXVdhkS22cWcUehRVeqcFRiRP3c15YtbewAsQT22UsQorxAvaKQDxc8TPwdBQiRW83GZkzu3DjvHU9mWv7y83Be",
  "key29": "62KJn8Uvs6tHGDrsEXnbMs7B2dgtYtyFFaczWmUtp2FFzXhGc8SaJ9LvZRnyVFfNiY8sQ1VBXuabNWtE3hWwcSrz",
  "key30": "3XZzi6Bb4W67mEa7mZLzjjdULPG7VJudBSek4xSbVtKfqXmbuuQr2X37kX6ieaCPc8ZNLf8bf3tRTqDXE8hABDk3",
  "key31": "562Zh7bryzK57rkvy7ednxLz4mt48gBcnKGRHLQNhM6Gyc9CcjdqF8SydFCw2QB9Vtn1oedQCnyUmtsSymU4nM3s"
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
