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
    "34w5FAJNsFGjPtt4ZhDSAYp33iQS6dDreokxvYrDWKRVcdtbBi6EAnTtBX8bdXnLT2N8nJc1RNgZg4aSKjANYXEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uvwzLHB95qKBTBspdzYavYKwarUhUquV8fYVyuiNtaPfJBXoi8GvxqRNDzwEPW4feTM4xVzpV4wFMtd27GpBJJM",
  "key1": "4ZK7V8M8xSv6Jk7vAX7DS9ULqTrgMKyYbLsBQUh8auRrttKijpJZSi7uGPYidKmdTkYsRzJvJkkhTry366Hdo5DK",
  "key2": "iQzNk4Bw2NHvnETByci2EXjauTEQm9rpRfxjKpTvbgBFiqB3fJbc1KzMYAxEwcyfcWDd7s5fZy55T751upyPYc5",
  "key3": "4xKfF8Xy5Kh4ALSYax8fjeskoy1DNL5QkMBGxuQ2u5J3rmS26ScWyppdrT2kGQwefbnPisoAfPYNSVMTXGyJtBcJ",
  "key4": "M5NQwFKW2jKSYTusa1SJ61Eu37HVAjjjZU7NJH3dPyRqrHSuDwXQaKLXyuXaCXxJdrgHCSJoaSzQppTk9TjwtDo",
  "key5": "w23VEvjGD64Y6VnejEAdqH5i6ogtnrB7Lxth6H6ZKwPAvAFJx7pT2w4AA9jxeD4aVpcZUAVXcfxBecaufm6tUN4",
  "key6": "3KwDbhUis8t7y2xg9AafQawR8k7Q3ssatnbqhWV2EWyQ8oBVHxDS3pt7My3CzNFyxDa8AVjMLk2LhthksNJZBMqR",
  "key7": "2TN319udzMNZWFUvtddw7CWJYamG7Ee8KvKKNi9PUMRmAe9uzUmsV9BXTA9P3gBo3CL9N3EG1sBgXk9BctdZeJn7",
  "key8": "ExS1WV4YqregmNG4AvxCZWeBFeDkr65QD9DNeG1Nh8MFZ8ywpz5MQGNXC8MsNiPg4zwh7k3WNfwv9wUfJAUxWXh",
  "key9": "3oGBgyKeFyowLu7PRkpjVgvKsir3Vs7rHxAKyDxcfPiqEPMoYYeUFcZSR6MV3tG6V8qPScft4hNQCUoqrpj5aTud",
  "key10": "5MhBxcmSdu2LHPS4jK6C5YQAkzy7Rmt72qVMF3JptPkPNhinZA7FtE4rnDPK25VEg6jJaU3CskNKU4tDy9G4NsGx",
  "key11": "u69w6i2MsFzFrpDx1tseUjZ1rauq7YJxtmax2mZrP7UePT52QCkeAA2CkxKKz4xHkVQ1neVCAxhCxdY8hv7Nz5Q",
  "key12": "1Haz64xS51P9LRMDRm991e7NkeF4WoGqkv9xs7G3aM24pdotMCwxxgBWHPBwQvMosU69D4DTc3TTetWqXg7zPdJ",
  "key13": "tno9CVjVT5hsuGGYhtqTNAMTBDuMKHxCa9KrYUAew9YoAyqF74txP4BmqGrqfHZirUkQMFP6GdhhgQXtQsoBpRG",
  "key14": "3HeCo8PJEzNKGh2xPpem3xUxwx7EikzMngsRg5chxAASRAjfX9W3zNDP3B2xDJgjMYU5huUuJrC322TRRUBFSRuL",
  "key15": "5kzoe7WQSCFrFrcNkWGvDCpBprk5LsbGb5N5gxnjMByp2zk2XkWCCWdECmhuDGkxt2oHvVVj9sDhXs8Dfe8bDK5y",
  "key16": "3uKsovLnX5DYE6qeq5P2DUwxqEXTyEXsP7cV2rFxHxRmMBAfqNmiQxVJZ3pteQrFXbXnpQDVpx6zycKutCrAWAon",
  "key17": "5jTNFB1Q2o5k7KPff8mRvp5LcjUWc18g1DN7wHFfFhE2VVMvQ9vn9ArtUc8LE7LKUaFV9SRUiNQzsL9E7EAE95CY",
  "key18": "4GtKqqffaTKwRnnhCgVGDHJkFuM1DDFdhy6SwWVNWPaZ1jN6sn6H6xVe2irPfZeJJBCuwfZXanqNrMZWsUq4dR3P",
  "key19": "25zwMWDkZf9sq3po2Y7ordgUg2D1gwmA7eEzdasFxNx3ioKtDSTdb32viZGHMvCjrzjyUi5wnUwNPB5rA4WGwGpR",
  "key20": "5QZdUpk2mz9BoJWtfPTx4YqiGKSfKhzUxxew1SwyE7g2HmwS39wfEiSVL5YQi6wjx74hFbaggzQVdYxSKCLHFqAH",
  "key21": "2S2xRHjkkD4dcbKptUqfD4GgH8oUbB8w9Nf1N4GnZHKPLmMFvNtVyPp6vv79rFUqVbLEv9SkTJgdcF2E2hNv3JzU",
  "key22": "3dZDEqGGQdfx18z1ejAjnR4McNpU8tYYZrKFH13coAofdp9pGUGPN55mwNdqtWS921T6va6zoKqFrYs4f8pBSLYN",
  "key23": "22Sdp21CCmxsBiUjSrCzYgiPLHYh5dxJiBQBSN8g87m83zHUPP9fZG6j8dAx7A4LXfK1E9m5UeLKaLVmytbKocdx",
  "key24": "5FAQV1G75AA8s6weRMdXpGX1gFsMWMje1NPruTj7vWotCzAgpeEbMLZ8Tnk6qYX73QYEBoBb9jq51SHWqhUU62aY",
  "key25": "5YLi6qeSRaQSBGR4GZfaumQ5k4kc5PLJrMXfUcc4sC6R6LEvU4Y2JXpe1vig2AkdYt9Drr14jeP2d8S5Chpv5jty",
  "key26": "529tUNvZv5KaM4c9CWEBTdY99Q7Zc8m8Z8GkydYkkwaqWykQoT5rwen1p6ybpTVrkVhYZNf8yD2JtWP21QytHRKa"
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
