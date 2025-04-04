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
    "474UbtCVsaWTJE9CMHgtYexbAmusPdDXRtqXyH1Km9BQnsQeKkizofrnmezYMSerCF1YYYoskxiwE8DLHRxsWUJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24oqEanQayx4dLNf2HTbSHNwtsyWDJRfv2XhSRBzy9wKSHL1Xub6yQZCHamE8dkScFJU2cZvkjKCLoszMib2ZWBG",
  "key1": "4cquhsR2ae3FKXe2mSsGVScpcMnyPZ5UECmKeX7rGzbJLc5ZsZWJ3wJRyBV18pXYZn1nys5SsrNeRCJoSVjLcx2a",
  "key2": "2CYQQY58fhyJfvEAMsukiVhWWoNhEQuaotnw78UzNmnGsrwexhQAiFVVN3V6J8s9nz7Wmh81sHRd7yp7MFP42MvA",
  "key3": "53N7BZPJCFpnc7NYghadLz3PsnQ7PweTwZH3rFmyMvT1csHmNHcQiJedTRXVD1YaCgx8xUZrxH6ajrgdKsrUYbK2",
  "key4": "4scVHWLDqeLxXD2oj8LnajzqhEKUWRZBkKkCQNmw7nF16yA7aoSKD5mY9Ccjir7yBWiLiRTbVownYaXysWybTCPy",
  "key5": "6onuLACjg3XFJwvXtjYjZN4v584HaMHZoVRihkefNQz8F77CNQ3wzM9bWMtyVZg57wYBSNyuMagjakM6JZWPSyG",
  "key6": "pJ9sUa1KEL6eviCbxfiCHM5QwH3gYdqf2gt9gCX4cYQHzVMsDcfGxDQSwsqnkzmXAJoJKJRsL94iGbJsVvoAm5A",
  "key7": "5QBrYtaL13naDSVr2HZtj83qngcrFgMnPpitCM8T6m7C6LFWKt2LqTxzSseutj3FscCXKBDDLQqb6zxgRJiatLfy",
  "key8": "eH2DvhYkA8JtY6bCxaTnNvCbqkexeE2c9PJBfXcyXWvzDZX9mjQe6V1gCEJhU6L4ERHLZ76dXSXBbFF8DTNJm9x",
  "key9": "ezaWUuF1xfoFhogJMXmzPj4UNKq2raQPAw1metbjUqk3H4Sh4WrQHL7qVosEsPjw96LFQPeRoxMKyjhnzc9QyvJ",
  "key10": "3D2EtmeDJY12qcW8gVdDp82N3er6psPNkR92Le4qHe8ZovukrpUVn67cC5Xfst1Xey7o58zuSgUskCogMWt25sXa",
  "key11": "3KfNNy4aMtZUVKKnQ9TTcaaXXrbc5zSgMDTUTXJQUL6foK1FsRjwaCCc4DHh9bXKjYJpNskFabh6N7vErY8uUkZS",
  "key12": "3UugZg2yAdv7xemHBvKe4GyFSjzwZR9vkqUGi5zyVfM7B37kDhyQDd1sH21To8JXTVKAhCL71ne7bXNm8EgUkTog",
  "key13": "4ohtSpXpCdgWKVgtr5UfTXpvRjx69rRh4bz7AuB4W7G6UL3Wsnov2nywWfBaE977owGXWL5GCqpPpT1ZPFT1mqoJ",
  "key14": "9BKwuVqBBK9sSRPf9ygYvUApnnA59YLcd76XSMNvnAVmVxQZMPFbS3K2vojEXJ3HzpNm3fUzZoJEve6o17c1xCa",
  "key15": "2A4RcSvkyhPJq5rzBfGHBg8FMyAPZv5QL8tdfNPKiwb4bJ5XJafeq72KwdDEwRbuwN5EVNR3PbSYt37eK7Y5CxvD",
  "key16": "2ppPiTDnzBcLsJQMDBxBPs1Jc55fGg1HpbVaeumPFc4FMKe3PnFSYh3oam1HyZSqSerKueqXbVycMEagbbMsKtQz",
  "key17": "2xgTT7igJzgsjso6hBi3hB4fGB3L1E1wYhqp1Cp7MovhUJYj6oQstJHRzfXhAotHKQrFs7VW1Mq5qQEkD8C4JefS",
  "key18": "3Gjfv8sxiX2VZT4Mih1uoZVxFSYYSfRQFDHo9Yn5PWrqrp61GjH46kXYz7QSV7L57qfCbu15y277PKmtUgD4rwkZ",
  "key19": "QPtXeNVjGhZNQBHNQnZ3ZTDJpTYFMk7bzp1U5jdoW8D2onYU2qaF7BDSNV5dbFB6xnRos7LEQFmJCQ7fJbPxGic",
  "key20": "hgx4MASuENthVNEk6noRsUxn3RjsQrKpoqB7wQ9WZgTpsB3wiksqqt2z4WcpGcAe5BwdurTpTcLUC8Vz6Qgh72x",
  "key21": "3bt1pZsw7d33LyLQoz3qviLUbHwgHLQWZ5GW49aDK6oM4HgKSdewmdrdU5iQdKcUPEdkRCdpbTsngBM3E7u1Kwkk",
  "key22": "ytN1Qgg45fNHB2gtEAM8MdJrcFXLHznjmFngtTxA4J8K26qRQcWP7mN2yDcQMxSYP5fVsyRuQJJrRjpBcZk7Dkw",
  "key23": "2rdEx2EMra11b53ZnW4dAPkPqHCokFVExymtg1SyEAMsHUY8uYSfmhntXVSUwgmSUrr79PJnFwbzmrguJu6eJaEg",
  "key24": "2EXxp6kwutc1VEdF42zy7csSHvSv5ygYdHP5Ah5uwtqrEHotM59kf5WdjTvNKX2TU1CWMQkGzrwEyPc99WmrQChy",
  "key25": "5rgPTYmFfo6z2LiDqrqiyFN93wWEwV18SnEpprvm5dAqpEoy6G6Kh4rA3weCSQREeLzwwcosrcWZCHCSJ4GiP4ew",
  "key26": "2YxUaX8Afv36t7GHukMDqKiLyRhxf3XQvaFikxn7KKzkpwvjm1m7ftWfMaMMBN9fe47P1VdaSjhmbPe3hjx8Lrsh",
  "key27": "ySDBMDR3nRUdhmEToDLRHHzj7b6BfrEyBSrAupsUe77WNyFx7Tqah4U9iUVj8Dc6ycmbT86fPA38NXKHTDd6nJa",
  "key28": "4f3hVPDVnL6DSCUZfrA12ZH88hU5KARiLvhnSf8WG1K62aJsWmUoT8oiBcjTLwN67qjz9EcjXFS49Dp7TeK69j9W",
  "key29": "59YpmVjReMVKMLvp743tvEyrWzsByekbZcHmwPMzMxzfuBY3FA9ft1oeyaW5dS1B5fL3Y9Jh4RfFwanVTcbfE2Bx",
  "key30": "5DH8WyfxUv1WDiKtYyadZefQbQNuwPAvswqCn79EGsLYgwujKugtAqRDTgNY2m82h16Hc8pxv9RU8gjHH2yPVy77",
  "key31": "4d72QEDZq5w3AGHjFXZu3bpeqWNa6XsiMDpEtZeBX4pYoHpbxCcVFRKxNvvQbZEVx7iPhJvvWbi9ZQdM3bxGzGkV",
  "key32": "5uH6viDfQM2SB92HJEH7Jz4k4xqo6xR9nRbmBgg2c4H948qV4nC7WWo6Y1FkJzxBnVyfJagRxBdCBgtZuk3dtjry"
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
