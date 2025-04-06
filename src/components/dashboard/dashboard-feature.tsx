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
    "3ktbV3nQ12dEoAMd8MyNFLQWxVkHvSpQD5ZUbfEBxVCb8DQuFKo8FhKR3ceAwupjAHxFWnawbosDE4LtFWZSX3yA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KtumEcMEb31Augfcn61pEjcw1RNVjdjqxawntRWqxHQ7vDpWzpDVMvEgwL29JrM8qoHxJ5z3rCTmQh9ggLhyBBc",
  "key1": "43Zus173HrChXia6U66prihdTKjDezcUXYhf4WPNAUQLyJnR8s6b7vPfHrCc72UDTr16B1r2yP2oAUvLp7VsrphK",
  "key2": "2fEDAQoKZre9cpnZeFkD8zdXns482Lqa3koGuNcxkM3c3UJqRV4Dcr6QeBVviMc9LyDA5HvHgKLEWgWRbCyv7Jan",
  "key3": "33XQE8H5HTgTakZcnEEY97WRvJPYXLFcWJuKta6ksfhgCEiQ3gmvhEEEZC7yfjtiSRWAxjRpKasRWqadm4qn7niJ",
  "key4": "2vXytdAoT8gJjrYgFU5sCcfKY1CKxATdQ4KSifESUMAnsjGwHS8pQjicmTHAPmxcGzxBjDj36uSfpNj4jWpp6tPc",
  "key5": "4scF6ijhmYwyAtu8gG2FK1vbxeEwQwMV43o4HxNpJKtMpYmFppgy9WipZ3TJRgH2mzMkwZdKNmcVBo7PNSBVVEB7",
  "key6": "3YmrfWcm2qdvpJW4Eg9oNPLLn7juKxEsWRLffX7Tu84rhjTSB95GMyP8teu1krq6Y3XEb8WLSpmvG4XSGv95wU8Y",
  "key7": "3gw84pYghaVB94REiMAaCeqMqEpwLb6mSomahZhWWV3JcwsYi3bAo1xFmArcpSdBGn74vYExriLEaLJ8FvHqEQ1W",
  "key8": "3CVPYs6EeiDuLcfeCwv7aHpTxLbBFiXke8jcYNFEB6jZ6NeSHpz3yg1xVgqh9eTh29wMBfsEUFUezKxHRqvn8Wb3",
  "key9": "2TyvHjLiJf8VikHQ6Jqh1HVMK4upmYsJCezKoDoUtzyofyRHMjtWzvC4u7zG4jKokj4D8Qtaz2MdRSXzkVoA7qvi",
  "key10": "34JRntYykf4a5rDvXqr6FLwLUxsUzY1SWJyUiL3eWAfYJ6qe3RcoFZCYaP7GV8f2ATuVMx5g9SmjQotsoTsCaBho",
  "key11": "5ioHiy9F3aEtxgNCrZoNcjEAGwWfzfF6FfCSx7eGKUPFdxwYgNg5UA1cEHFvc32Dn5Zh5SHNxfZJ9grSf5XQaiVU",
  "key12": "2n73DnmQ6JV9toWxbNAGLTkz9ZXBxuML3u67FjZqSk7aBofywm9VT7TLwQpADNPBwmtXHfMvUdTrgjoEsV4pi7i",
  "key13": "3TdhsKvG6N9un2CkbLiQz6xE2Qrg3dqTkDTtD6Jmfq4Mw4krVSNZn696j99rQbBsdQpwqCfXbXQqZpzi5X8Nwf2s",
  "key14": "3uZY3mBFFW2592FhnUVgyvJmBriw31N5oTkjoBdVumdi6zdfCEa4dW1GKftvGEH3e9e625BbLWvR1W8eozRxkrv6",
  "key15": "GsQpged82JknXQ8BtyEUz43HXQmrRBy4eBEvWsfUogS8ZTcuu1p8Ywpana7tD8GzHnYkzX5MK75EB85xSuAq1Ne",
  "key16": "2BDSRNRyMuPnRMniHRoHh2banPRhqH38GX2bdE7ib27NUxw1yhKq51MxqaWnGorZxNYv7g9dcCCiZvWSNbuwg1Nr",
  "key17": "5gR9LWv7FNdZ2ZxRCu8BbRoCgNXAtErxAiD7SChWXGvWfxZfNrduFcdc1VF5dtL4Yg1fQwwJNczXtUTjtHw4AdTP",
  "key18": "5k4iX1HNLh59EUduDaNSp9CC4F2ikv3aupiMxEgMnJKonZqqgVadvmbMDJNt9EKLGS57KZPXfJZQnUDHYVuN82Ua",
  "key19": "4MBMCeM4p34Y44EMhtiDK97AG4FvmUShvxt2pdsf41ocy27hWgzzL648jQJRufx2FCsx6aAX5F9qBdRpPaYsNiX4",
  "key20": "5C1gxR99sCvw3gArCVdBA8Pz92zGpWwcmMHawMCFWgdPKMDXc67oC8pnP1LdxmzpmdtcbbfmNRoXNYYr7v7Jc8oN",
  "key21": "4S5TbQLna7iTFW94fYd62VjhPnpiBt7c2KSQS9Y3inU92bSBZwAVajebDkc7ko59VY8TqfSm2UHHXLxEUtRx2NjA",
  "key22": "37tVhCaP8PWmi7Fo74BxMQcXpdUdLx1FaZGa3RSBUEKWgMcWzXoev5SBZL8FE9onFZQtycHc4RBHoy744GHZcX4v",
  "key23": "5fBpe2wexDjYeEztoCL8D2WYPBmw7timj5XKJpxpsP1aqEsPnW8syjtDTanDQvqcozYBKyRaZgYJHjFRQLSG5Uy3",
  "key24": "5E57DPU5chN6x3NRabCuWNdfBw1magdWkwQ3ZKzMjh1sxinBmNohoTh13roLi6bFdnTLvvwpZH7dcfniLQtQBTPz",
  "key25": "5c4ujNU5iUzfUSs1vqVs1eXq1b3sT9KoRqkVJfm8pmaj5vwP94neD4hmm2NjT5bZMXPdRwAZYuCUisiEgxovS8Jx",
  "key26": "5e6TecMwmujMwjiHeNiidaYKqFK6KG9CHpkD1tWccJQ1gBuhkncjvGDZ382zwcPdn1zPkYFN3GKesEk97P9nRmDN",
  "key27": "56fHDJJXd5i2kNuMMiv9MJGnittUyzvCBm5FXd64rVKBwAjidmMnZHm1ATHWS3rjEiHvgCkxaS9qFLRh7xta29nZ",
  "key28": "3y7Z6L75Dsmh549KEC1t8RaZ5zAb43YUSxwBA1bEKcQyXKQAGEEzaWXigNtPpfJNj55uSV3sBdByDtR86qx4oECo",
  "key29": "3xTrZHRVdacbjuExNbFGdzTM6SJ7MZKURteTBP5kty5oJZnfh4dAQS1bAyYUoQxGmz8WMG1Tx7s5c8NKgovKRGuu",
  "key30": "51FGCcYtGRU8vJ6YZYGssBiNgUHKhTKEcJXyqo7AUFx6wy6w7d4xTRfvid1vyUG5Fp1CyNNqKbc41NXQWPci7Ash",
  "key31": "5BrHr61WD8koe42P4PBeebb4aNKHLdVkFvDMgvMHEkB5uHa63F1B9td4beyQkuBePfysR1Y5q3xrEikHbeAWgUxW",
  "key32": "5cCV7hD231w3pYVGui97QXqE9SiamqafbvPrAPUMtamXvxMNVKJiS7yVB8gZ9gfun8BysYvn8cCkVZcS1NSyym8x",
  "key33": "4bkNyPXiQ4r4XZDvN3ZW8JDwdXyiuFHAfj9FJ1Xo5WAMQtRMdqfbs9FXbocYbtsyAWCPBsK8RZYw19URDVRD4t4G",
  "key34": "2iogm9hXuCD7cko2Z4cWQJshgB9BTH6hJHT1zhSFeCff5HwUjLSae4S9Fa6eiQrVRj7G8Ef1usNGvokAZqN8eXaP",
  "key35": "5VJkt4iQHBgCrdBYzfAeT1F2K3czPnP8dywVoGXuCTXmwzJYMPPDKZZr1W9BnGMzwCoi6Kn1xXXMgmUtkUon6pkj",
  "key36": "5kCh3AExzxVVpVfwvYe8JQYgbyQj8uzXrSzcuEPYV18TozNgHozmCJDhNuUCmi1QAJ7n336mThH3hqfPWWgDQBQ4"
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
