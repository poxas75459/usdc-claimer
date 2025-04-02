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
    "39ujB4Bka6TnWriUUWYRvfD8WMk6SG9tw5vFAVFWEX4jS7kVC8cthYzQkZr5YeYTxQ48vqXh3d4jQ3Ke3PVUD78T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qW6Zmdu8KFtcQ43SSEiwqzfAfFcr4YTHFgE6Mxrb2sH62XfPwtYj5kzU6i77fU4ZKksdk887WUfDdRdqbSYhJmg",
  "key1": "25r4fWHMHiWk2VPoshEg6iRknGeegngmo2iQUCW3YhQT2rT1HRUe48ohXUXwAfNfwNFM6mUYZxwX826xpV9sBweY",
  "key2": "4JUuY2pTyTmXN8HoqqLTxbwNr9ACYtEUqFn7dTwKtqsg5P9zbeoTT1SrhfesuLYZ7pqYsGviHSqhHkumt6UZDNRx",
  "key3": "vaecTT9WrjsGsvXcrJZMkaKS2CKEDy6Cj7n8fEXJ48yfgE4FYnMZ4LNKYMeH6LXx8ixfF6DQmewk9sEPq8cXFyQ",
  "key4": "29w9qMf1C1ncgKFKamRZksr1guHuuTVBpXLNgNBjGo7EML7qyaU3MaPAS75N9NataDFGQJjdnq4ikrAJXeKf7reg",
  "key5": "2y6maGXjFwNL71TPtkCat7z62vmqUD6CVNURKbzm4fo7dZDrPacebvYGr9qYCzPRtUQ8nA3igv5sNiTrGgSwYg1L",
  "key6": "2AvCLGoMjDYQwaAXriwmKP91G45hxhaeyrdnApscvQcMCqgJySLj4EbqmYCxLqKSbyzVgZm4XkhEaHiPwo9RVwNY",
  "key7": "4vJxj2gSGixrubAWUAUWVXEkkFwD9gg4ArCrxLyUZfX6u5St354QfpeCAgP8aFyEPCwXYVviz6dg32yt7nT7mnpW",
  "key8": "64CD1vKusfm58pD97Z6uPqEYfNovDNHJSQoLrpCoUQ2i8RCaMd1WiR8fA8FKcFiGAbKx286ydh1iNzdrW2CaoKva",
  "key9": "FarMXSEDuYoMQExUW7vctZvBiaNHUFXhoSNT4FrmhCiStxbwGamkRKzAX7Rx7AkdfuqSaHPcSN8yA3axiXuu3QC",
  "key10": "4pr7ejGJfv4aFQ22VGxVrKErF2JiDqqtNkecVXxE9k6t13KEGJW58YvvTEhPmdxgnB6cf2aPy2cMEWomwrgG269J",
  "key11": "3N7L7grdRbwwBKh5JDFW24sbTRBN8AEQEDrTCzc57CGAyJQBswYwQ1Br3ZTEyCPGmgxkxt9dMAYfuxWomoKvTEMD",
  "key12": "2d9uxPPVMbf3XGo7nW22vHzn9HU39TbV2TheBau2J1gHD9M4vddd3zDSTFNZ8cKkweNiNPANJVkN3G9RpPLKo8jk",
  "key13": "qQ5xiMSHJraE6ZmngRoiTuRMkkBaoVVmDZExvCzty78gcpNc8hAVXa7BMe8gELyzKxpw7WHbxqSP224bthHUsoP",
  "key14": "2yKMqbUwqYsMv6buD8BViQvHFL8aEbkxAneDJuP7oYeGnjt8pqnyR4RTuwpUzSsJGpiWgcju1C2ouN8s6WgtBxqp",
  "key15": "2SdoZwHPe7VbWq5DJDenD58hjVe2Sa5Ht4LmApBPgD5QupUSn3ZBPYEaw8dLpJu7GEBZN7WxBzqpqfRWcC8sJZw1",
  "key16": "3r2uJoBirS7zXsLydc8w54pknucb5HS84oduqhkkkkMPksqyTcKZP31p6PhQAHrn6v922j2u4TshMhKYGZ2AKBdU",
  "key17": "5rFnPmuygZXcw8raudYksMKfwRyF2dydYGAzyTvkYWXCgRnfxriCC1RqtQ3WK5fuo2vxjuyHMycuvETGfcuTZp2W",
  "key18": "5dffP7faNtgqLaQtddgDhXzhSZX5MT7tocqiEYxFH4qAfu6huomk7CusQP3TyQKQdbaxPcyKPPCDNH4ZymRFPmQi",
  "key19": "4WMvXbKTE7K1dL1LZUmXxbWDa6fAcZRy5SyPys5ukjehw2YeK6jnxe4XRFaT3jKpAxb6HJDTSdfBXNn9hgsstoaD",
  "key20": "2i4rUhKqt1H6rTismXDHw4VsCX1dSD2cqZdXFMjQtAJELXh1L8hWJbQ2GSBb46my391b1m2dgpMiPu9Vkj5cyrK",
  "key21": "4bC4v6rZy9M5Wdw57eT95aTC6uxCSYA8cJ2QEafMtKuYHemAyCtJuwKCKvM2ebjBhfDYHW36vPdAx14Bv1p4xWUo",
  "key22": "3zZT5TgaV6ZmdYNs8g7S3eBS3wD9cUxw7KyYLibE8ppUdMXqUrF8hajFdwZ4fURJ5wXvZBDPKivNqEmJKBKqWywH",
  "key23": "5bQZAsnACSSqnovMSAXL5Dkd88t5KzEJFrDRnfZJAemuWbMyGBVckLLKQjK78SHBZXQ6bvQo2dGBRQKkWumR1rmQ",
  "key24": "3cizNPn9iJFJ1ow9UiDAaMzwwiivRzMnATUNmNasGmtyrNgoGpzyLmPgeaTz8CMdH9AURTxk248zDp3WgQx8GfaK",
  "key25": "2Z3jrMMatHjiMUwJbP8mXSbf7oJ55Ly9q9eUhkPWBQqBRNkmtV7UP2CAyxbszN3UDa16zkKzu5obGgYPXNwDF8o3",
  "key26": "3vha3Wc3n7EnPhkgUg9YFWKJF4D3eL8KwhR3y2RpUhLnFbig8KcybRkwNLmThW3syTDRDbwWCJxRYRh9aBdax7at",
  "key27": "55YsfXXBPdiyrBSAEunaKVnnUutZJRpLi9oi6EegbRkQ5AjvujAqS7mS8qukuHBRnvphoSC4soyra3qG7nNKc2NL",
  "key28": "VKEq478pJw4V9LFrKy6JMjRgpooJvwpG4C1X5KrTFAxZA48TxML9Ab7DCZbmbgBDmK9ySxUSntgbJKY4J58jWZD",
  "key29": "45moCG3FjJtdFctdty5qBvP6wq1N16GYt4HdCj4d6ZipjNudCoigMy8vrYodkTsp6MaP3jHwjvMDbExW2rdTz7nA",
  "key30": "2UaG9JbfTb6XYbVGrHa4SugMhcQ49FjtScnUYXmKgoTCARMxXNQ6RuqJkqeqrvzcS9ejhBprEYse2s6yVEHbuATS"
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
