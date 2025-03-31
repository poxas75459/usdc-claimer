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
    "3Q7fdqPVkrQDYpeEY9BGVMbbJtK7o3Zv6FRMEJm4Cu29Gi4sPr8ML3izVn4ASVfZCro48KDyM9P47x1NMq7MU6V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kfHyScQaAqp2umFnieMq4gHHvKhnPQXfHJv3qZcJEeNvqFcj2GTS8bdYymsAnTDQSVAtCHha3vRBVGz2DtfwCLh",
  "key1": "5WuD9NoKvKsNZphmRA3ZwvXyTSWUBEB1d13sctZYT53uQN7ro4Q5kRpYfsYmiX1cFQp77XXnQRCXdkzyWZGusJgY",
  "key2": "3fKMW2YocyUVzwMW8MwPjvkuxAtv1LJrNwvVGUqRoYfaToTUrYCynHrSjigwLAWcmLBwBgjgokeFERZzEWuRgRfT",
  "key3": "R7MwS5rdPadiJLJbN8QnppEKZiwj4gt1VeeKMPPCsRGVQLyYdEwiLKH6K3Avn1k6tn5QEQNcsaPZgYrTcwsrajM",
  "key4": "3AfhdpwHrruPcXfc7BiGdZw6qP7tahRhkPB7KeLdC9BUunzrcz98XwpgAmZqUrxc4qRpR2MgoZZmSnuWKE6F4tuf",
  "key5": "5VZrqWf7o8b7ZMjX9Qy3AXybWGzP2BTbLsm4Uxjg12HNh3Loe8XJufF8N2BsZWHP6qisDq2tkg73ZEbUD5i2xUKa",
  "key6": "tkEUYddjjhAiEjFGiqofpZt2Q5iEtvK6ENDrLgoFFuQ2ksVZTyqv73UPDbezkMsMtnWwRsjCSY3DK2FuNZxHJWZ",
  "key7": "4V9KqtT4Lcfw9tRys8wWWHuAww5myvKD56AEDdJ2msjUD1Hh6A4eiwjNnR63jYWJ181aPNtQXDZDLDLE2cCS2eWJ",
  "key8": "5dPeT2nN6r5F5s2jTnHHQ9bX6poVKenCTKd7v9Uzp7sYTmQvyzXVgw8qiSPz8rrULPVKGdeYzR4Xa9fdcX8BgStE",
  "key9": "paV6LQs8mp3WgXQBYTooScJjoghupN7vL9NGhzdnJdCrZtn6YSTvLhGznNDwXqjZbB1WS3jkyfUxA9YgyydKTsm",
  "key10": "WdjtPxjSraWPsFJC3wqxWDt38B9cWS1P4xKLojZzYLuXETvg4XKNT7tcybsyYdtw4knwWtYafSwQvZfFQdHKDec",
  "key11": "5ZFK51jTcE8ifPZ4wBfJ8nDrGBw1wJ1ft1zu4AAuy1hoQoCJ4VHUDeEWA4vtLPm79WKLcMp8UneNjMPQiqEFrfTC",
  "key12": "k9bNhNE51dQBKXqmjAp8yHKg2J2xjyPfQG1YTUWNmK5M7xRMm1TTJbZVHE6M1rvuRY7kMM8KvZrT1BfW5fX6Xrf",
  "key13": "23nWnCEwdcXCZBxRzPh8KoNF6wbThg3VsVi9uPU7uhCvGF8PuLEQh9SfSqX8xQZKucS5Qr8pa6nR53XL6wHGjYPY",
  "key14": "RU2YBcCDYbxEqpsjY51B7sdRVdzfW9Mj7Hf8H7BX4yS4fMv2xux3xjCe17epUGDDRdNbSKeNcpZ2poAV1m13xyc",
  "key15": "o43hSubNCLgkTL8qGN95FLimmosf5aptZ2QmdNnoxMkoFGQ58iyhWPcJVGaEkxy7GNzMhTsTCmwmQz8u72VWWMU",
  "key16": "atTQtnE9nEYtUidycuEFNf697TbyZWJBfXh5r6f566xzj6yUG3ifaD7AN1QfFomrNGeaHgPjHhSi8CZ7KgcPyJV",
  "key17": "5v7HvTZokyfVAksqJF3bjiJd3NSk8AQVoP213hABeRpZgrPygtStSUr8jkUZgPKGQU8okocAB5oK43VHYEX5DXC9",
  "key18": "2zZHJjqukC1cD3Dcipps13mULJbm17apiFL4gK3fiescEHgCTCKgqDAT9wKwBR238rN8toWc9UanTk2kM4KjS3CK",
  "key19": "28uuhNJggSUTiHyeopf9bHKsm2Df3NUtvbcyUrcM2jp9rji25NaZRGgpb6cBb3fEMq7gPXxi5HXTxCmHTDkVVzN3",
  "key20": "33keJMZu5312xC9RkvCR69NYfZp74iDxyL89aAWe6XU27foSLNTzQLn9xXwMY3ifCo8bpLKRVtbYcG4MEzsEo35E",
  "key21": "3PRjTKWZYkWCGdpu54R8Gr6momPBmAzGxdAcheFAY8ivwYMRERUdMtdSp4mQHXTMFXMnh2jDBYLXmT9TaVvwN4xB",
  "key22": "VMPvNgSSvYcTMg6Jc3E27bzG6AM9HcUtNnVPXHWZx8m1USHmJxFmcrfMNfFcjZdcEsTKEFRmToTvwj1ZAJV2i6Q",
  "key23": "2SW3DVVb5d325UFTow8mbXve84AVK2dXBfhqFgSAb6SVDG8bCL4gGictTxM9LpgLM4FbXLXtWPgychyLfWbAd6eu",
  "key24": "2xrGhB4F4jX7ouJh9pzFT3RVwcLuSvb9ciW6yBYjxie4tYNpqPbfhhL7Pq8RbzhAnGYRyqMnPEZPRpAkeY6qEd3J",
  "key25": "3fXzsJfiBxXiCovUtpmZo4RLUtvGhcezxCDpVCijKX4bXTJi642oKZ7377uBBfPcFDQfrUNNiHEemgy66moz6JWq",
  "key26": "5vHtR3WGzxqia9Yknky3DTZaPx8EPC7DrpkMn2b436gwdRwzNgLcHeYwA9pSGDW2MWwxsnYNZRfZRsyBhLhbM3uo",
  "key27": "32TyFDCJR8TMCA8MxotMesSyYE6CLBCxSgChiS4vsoNKfEVHxVVwx5RWardJACG1ASa1ky2gUkNimgxJnE8E3qWT"
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
