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
    "Z9NxmjRZ5pg2wtD8KVRzsvuT4vL4qQ95bcKWSUGZfThNQijUz7v4DsgyeMgZdG2T8AjQDAXKnV9wMLgWyrRyP1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VA5vnAJs6YZDgsWCxV27Ukvq4gdG6yQXqJpJwhfftvHX24ZN9KutNLVhsWkFGtqjRjENwMgw4rnvx12GHxXDpWo",
  "key1": "9amPVF3c5JoHGXoAi7ozBReuyESMcGe6b3dKJzd3xcrixubiMsnmyG34Jzrcpo55jNJNazuLL7iNMA7iKfeLEa3",
  "key2": "2M7kua47SjoymzU6YtX2B62p8Pq1F2u4LvEt8EkYUa8yb6JEc5dgZBRU7v4s1PQFEDC61iV7RFUNtWjaci8gqZTC",
  "key3": "485M5U2YrxxhVTTxEr3S5TogCAbgGGHHm8aJ2mc5dynzNHTWv3KTuoo1dDuFsEM4v2xtE2GFwq8vVDDY3xSpA8rF",
  "key4": "5izMf7yDcMuzahYJZxVkw5if1gsKmocG3F1yDGaKhMBfgBT5NqjRQzvMEGAn5h1UzPPwbddwPctVB28fvHFndaW",
  "key5": "5KD8UWXArn454tyjLpGtcUgVtjYZMYpnob14mrvKMGUF7Dc6VQBgfFPRCmbdbLPzhvcBigk8cu7785yDV6DPQA2X",
  "key6": "gmPxDJ6cKKsZ9FdR4Guj1sPUPdYhVHpNCcxKGTzMJeE9bPCHQcXvgtcfHD6Z9JS43dN4xxQn3ZDSadMTQQWpfVP",
  "key7": "62ySzzsJCTTVSjae2sZ8WwgtGt9avkwP3Umr5QjDMHGtAQxtT28azmszAnz4DXgBTotswB5ZytPXoVo7YbsiBP3R",
  "key8": "3b1cYyLHt2edWTyFqXs5eWV1DLAeQcZpeT2Um21uzEtA6rsFKrwkqfsdruuvAfS3xyNvoTvFKQj8v4hCzZpCYJgW",
  "key9": "5udZH8H9j5jMRcStquhDwwLsnwemuCe1PbX9WxbWnxcf3bF6TWRmAeeQPAh2GezQ7crGJ51FraBwYFUQfQwZT9be",
  "key10": "3mBSt8NDctHx14uTeLprP4uQhUUC3hNzMrwvFA7QyCRZLEZxLE3hGPkpY2ekxH8frXA45SAiaACfuvfTgmTMeyno",
  "key11": "LULZF1AhzBBUR47FQFSJ2qpqLXF1NzW6Qf8c2uLPS5ZMKQtpFhrUEb3xzXnCcaKnTJsSKgmAmY764NQbwBTi8wp",
  "key12": "4PgJd3yoQBxaBv1tnG8Bs6rTf7fXthosAWfoaXgaojH6tqRbokkgQzkQS7NScUf3rxWiv9zc2teB4HGNtNb9DgY7",
  "key13": "3BLGxusPtzVT7Zzi32kde7qddt3C7fjCTwcwrCC9CZQTHu8yNStvesVkZvTBuZv8uSv5SiAVGKsmX6y27fmooqG1",
  "key14": "dohmph3bmEmcLhqvno4DBKWwdmLYWJXCFRaRZMH4sfSXzvJ85L6RGbX5ijLQxKqJe65cCnjpj8d2nvF5ZPgiZKH",
  "key15": "3Rs3ZXWoZE8Q1nPHnXgJAroNMQCED1ZFM33ALzuC91UFW9tuWyZcsnX4FDGu9jygBsAxA9oPKcjxiZZu3u2abEZX",
  "key16": "2Sj47broYHy8zfC9GfZSMePxhmbzK72V2y13ZLyneTadSxFetDpPL6kdrVSyqjstXPz2xbGRPKg4BxtAeR4dGrWo",
  "key17": "5JGbqqyF7SjdsY47n4nFFZMv6Py4Ftsy2tWFMvgTaXQxEEJafLFKq5t4YhvUh8BMtnn3z2JTWFHCLL2ZE6RDTJwd",
  "key18": "Fv5r7LxgDmQiWv4QN6CxH92GoWEDe8fiUnHqpVbLG1bnC4KN9c7PvUhx35Za4N3KBUvHPKVJegBHkVafwGr6og3",
  "key19": "3xonY8ZARbjCziVLBb6RueFX8e6mTB2LSo3jZgbrRQ1M8EJkYW4RzciocuWRFpgkoPmPbiuPQXXboPhZR1enRzBU",
  "key20": "38k8Y1jiX58vTszv8Ra4awHbSKyF3QFHqxFJWLbSbH8tJE87TQzsQ88LkTqp3YrnAkqsDFu5MoNGUS4oFFcizqqJ",
  "key21": "664r9AN6YUd4iqVs7M3y5TFdDMCvX6benBHCHtS1hdfEAbwqTPHQDkqQVmUtrREqGE2dYtYHYzVG7mjqir4h82ax",
  "key22": "4Jqt9rxZ2RDfhvHaBvyJUUz1zkhSTUgWYnMDnNrsoYgQzWMmCzvieWTJxPkJyaePVGoKYVwf7bntG8iUuQX9H2Mk",
  "key23": "3DHCDzxzxBGTdE3XudjwEvH7umDT6qwkMmhUAXuN91jq5NLG384cukciBsdbsyJFebSaTkEfUvtWDH6gDWrcvSsA",
  "key24": "2mjRBw49QHVSqD5LrkMGb2ETbYqQ2BWuyAiX7doXKd5mtAxL6BH2p3U6QicTfLrScUztC7jkAQwbgdfVwkTcvaBJ"
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
