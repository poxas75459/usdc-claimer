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
    "jGRqzRWP7rhvpWrgXLoEfGtv2fPABCM1BQfe8tbx35V1s2syGTvEY2M1ZScNUpic4B3fFNa15CjiTCrDvqhd2Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52W4gZjNkCzues9JHVv5XiEWzC4TGvoFeqz5kgWG9zMF9hX4SHMRd65Pae9G6xxMEnmxN2qTcM5fD8UuMACjchQK",
  "key1": "3XLAMfw5hVi21TqNyuwTtae2EuR2RtSQNS3PH6WFmGM7Px7DLMLpZ6gAxenJ9ziB7F8q4SDDJupAPwcvRion7E1s",
  "key2": "3fkWcNfo8GviWTvKbGPfGdV6LXjadJ9VPowVrhBco9PTi7UFWnUjowUe7HaiHAAkqoSeXyqD3JP4eujsmQnBXV8Y",
  "key3": "2iTKdRsGt8PErBaxS8SLtxBtfisEcviYvveH7JW9QJsQaoHUwmEe6ijwkDdXc7TYiAYrYD2bJnQ2SRuzivUQfWPA",
  "key4": "5Uj3yPGdSuq2eJkTiRn4YLK5d9Q5D1kK43fS1F7ca2cSnJ4oc8i2WLG9Nx1h3The2Ffg4GFKWAfc3JRT9yeLCBLC",
  "key5": "23psvCtBtdBkxdPSTF6822wvMDu5eeCCaCpmVu4o9VrFzPTKpE6sVhbDAFiJRzgwFQF6MYfBFfUZPodaXFtH6D4T",
  "key6": "5sXUVcH2xGDt38FrTLpJTpbaNZuDLd81x8UmMawNpXNVJekDq8z76eYvgeEXDFVjYU8usvrUAmK1SGtfoVPqKyQD",
  "key7": "2w3keEkJyGvPs6cudPVBM56p2WxYCYox4qSpjhvhqcR6afQbfKhEicwj2Wk3x1V5XYo2EQqPxVYcxvyCEWG5i8Lx",
  "key8": "bxEHYAAxFWu2fGSf7ZEMEBth86YERRVBsvwSJTe93DqhYE8cQre3X11S6mpUQfgF4NoeUAPGYRaQjrWPBMfKFoe",
  "key9": "4drpnoQXq9GHy6zPiiXQfBV7kD7FvGWJUaJP6obZgAUBXMvPNw6qsegCkn14uy7uArGXVWMeMgno9pf24px9yisB",
  "key10": "tHw49huFjY5gYAU5x2bJGnMZ1EkPufQ7mo6d3vQBfpsdg7uw5nSCq3aF39ZsdWzZmiKX7BU1KLDgkXctgCH5isi",
  "key11": "25BPLnzyHuyzgZUxZwKhnVmgsXhAozUkcw9mMeK8TQCdsftTwaDHkqaA1ZttCKkNzgWmb6rfSq4EK7RpKJQcCV4Y",
  "key12": "3qhvUVQu31id1wS8NWpEBboXmckceFJtgYAKTvFFWQ3QL5HM8uCgZkxdZ9a4nKh9De6RSEEDU1HqRFiRLKzXLvQG",
  "key13": "55z14ZuHvFf9Cqho2115FmJzKfbWu84EWZddNW7BPxbxnDVVzKeDP81b5K8L3tApjRWYiPrn794kW4ATYAuRtkVi",
  "key14": "2G3STbaVfH1N7jSU3YTvWFTPtdY9PL5QDfLV38jTmHS39DSbbLqGrdsEeNx4vYJguagWZvjAdHvSCLCb24PvNuNX",
  "key15": "2cS2fBVhUYX5KWBhzYBCLuYbMqf2qSMhuuMtcm75m2ggFAS4qBFZV9Cauwp8ahBtvTDVuWgwEkCvAmr2J8W4My2K",
  "key16": "1Y2w3Xgdk3W1EGcaxcrFyJpeWQCq269hNt3CZ6Ai1MLFSLjT5PPscY18j3M5v3TEQUmHVAafowrR4ng7XhvSzdm",
  "key17": "5V4K8KCDXnYmhad9vRB7Mitx41F1kQrLscLubfTfKPnCkKyNMREigG1Cr7AsnrjoxLCwtY1kFPveeaskHQS3XAGj",
  "key18": "5kKpUUfJKnFaTiRrTvMSSAcqWPujMVXvUMLvSYHKXjxwTA6Jydqpv3DVjs1AYxbZk1td4ecSZ8YxCvahCvrWtLzG",
  "key19": "58osveWw3PzrZfyoywJJCbis65UaZwog1u7amqXQPGjGvyiRqdAmRUAKorB4uk3quCFibYstsbgy5HeUnpgZ9D5o",
  "key20": "4ctr5zy6MpR9vrYa1WwEmJM2KeKJebiVED9wcHee1DJQiQiMuppZsBW5j1nDw4HesfE45hUwVu9D7bMb3HLaajPx",
  "key21": "4KmUBqJzKdYx6KehJKt9D6YvUbG87fVWq6oyf2SHex7mc5qE9LPT3Hbbt2BQ2bdWPHrYVV9J3Y1oqCSsaYTCXpa",
  "key22": "21cJSH2mPUs7JV7M8pj55NNopTVTpURG7JGVQU4U5ef1uC1yf8Tm1VvPBkx7cbyRg6noTVFxgUdswS3iiQAmubPY",
  "key23": "61hEcEgEeEBeBwHztX3G9myZvSK9J8JK8QH9GT36XMHfhU7NVULjreDmhxSJH4KdjNeNHKdzkGpDkr8tCuZLKZJd",
  "key24": "3wXKwV1oyYUHpZRaofvqFBMeUC7bSJxwtte9gLb9Hce4GkZRbUJfHHxjo8JCPSk6DdPecFpAz7XTfkHpFidUWuYn",
  "key25": "wSJ3w2MZNqk2YimWWkNyHiD5QZYuc3XACC7cWJZQFRNQ9dAJDjeEFRXuqgJnaPQpy92M4eXBHtkP3ko532iUKMF",
  "key26": "4DsdZ8MXMQjfHCJKZshAtnU8JF83VERhdYGzqRGQTaPtePbvtd17EHxvSFoxFGkpd8KxnkM8amf4JoBX1wtMBbE4",
  "key27": "4DfhXSAKJFHwz5oTnhfGDBUgpEaG5jjdg167mJneQzeNGkDGmxw7izokZvE4Vvb8kMVZXuVzdYSxnvXp6d72xWn3"
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
