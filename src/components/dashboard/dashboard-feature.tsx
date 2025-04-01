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
    "3TDx72EVpRn3SDDMVii5WGKRdu9SkdVD3CXPAuvtRYECNTVVb5XKefJbBq6XAt1SMDnWbkkPV63ysY3VvM3Rpitk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9U5fsYEK9ZimPrsKDuHrnjk94KBF8Po36zSYD7f6J2QyqXCf6hP14hGdctFytZu7wgGKHBCpLG6VcybBfACM7St",
  "key1": "4WZHjqQiDQeMDEmRavGjDaq9WtCAAe66i5X5zH2JZsM4RSMtVu3N2uPxFJ9s22WcLmJzhVooo38uNBGP4px9RkAP",
  "key2": "X1AdNTPdK6Drv3ffA25pK13kLmaKkGjJW3bhmyy7b8xoxRfEBo1xB79Mo73tqCWATCowinMNdHMBQjZjgj5imFk",
  "key3": "2xSjzTMBne2LwvBWMmpXxomVbv3fnQrkXEvHJcQPjWynrJCFh6oijzToGQUSP67i2MfwdUzmrSwuq8NA24qViMqK",
  "key4": "3FBzW5nC2K5hArqG5U5zjcG1fwGBewwucB75f9m6JzMY9ueWy6KwkWJdyGu6sgRgUxDcyjFwdxiaenKiThfAdDQg",
  "key5": "MT5WUvrCv9jBLjfPNRFgkv7HSMTkYhnPmGWqHFj96CuWhdZRkbKXFjjNJAtMhimBaT1QvAe3Rr9sCzRjRu5PhR2",
  "key6": "3r4fpnbLu5AbBq5YQNmFSeJqLSrEJBG7BpPdycu5aRrR1WFq4PbniFisA87oNYzaxYtpEpkR87drsF5bc5UMM8Qx",
  "key7": "3DvtHiLqk7LQVAocmLh7KCGZMrnBrfJDVZ66CW9295UsaoNBh5BXJPJUWbizDoW7xrbPr8YpxytYYzQFw35Mwf1v",
  "key8": "4UpnsRwhTDx2aiSoB6mg7v9E4WxXzKBGBjSwKtpvFmYBGATWTGgPmSZ6sNf7tJZPojMmyAAS9pSjczupVYkBkLY6",
  "key9": "23AnafzXEpft8mqKgfd4z4EZYi7ZK9bc8fV4GH9y8Cxt1eijkyHdMFYw4VT994rKDczJwCVpTagwnpSfKstNL3e8",
  "key10": "5UWPTUq7qH7VkE8zCv7fsvHMEFxkVDdc5qYFbiVXUZnUqu7BsEDQTfXK3xfRtTbyp2ac8nCvnEMtiyva1zko2BDX",
  "key11": "voWvvNrgeu7x84GX5K4EcCRLXriNuBu1fDNESHEqjrZZJmjCUgRPRn5GVgenWgzVgyEpkFwa1vGkEeievgu6pEz",
  "key12": "4R4CFMfFXvmQmvqUJuUUqdyfZZFbR3LZKL1dEAKC8vBHrWct5fShYDRYQ1Y4D3oG2ZfDsTqkdU8KTeTTMsWzsti1",
  "key13": "2KpWvVweSozZbMjaWQqPPxdWpHAhe8FZJfnF7x3mmUKav3AHjLoojfjWqPRgpYeMpVBiti9TJf5UAt4Yv4W1ndet",
  "key14": "3CJAxzPyWmeWDLzd2jTBPW4ufAivWJSBqEMJJjNAWMB4sDZ2STfNyp3RUaqgiRZSGHeZGfaJ7quoWKQC1ytYNQtB",
  "key15": "2iaCnR5Uuy7h6VN2buUiNdTWo2kGp38sZAQ8wL1S4ewrJe9qSj76mqJVWPbNhRMrMNnV6foAMijnYijFwbXFAqbF",
  "key16": "2mFcUPUXLXWUY2637LuYq9TnFE4qxCqC2Nwti8rFKKtjeE4PCZaEXVLbE1k5QKLc17J1W5eMVpxsED5LpeH33Ah2",
  "key17": "43H9bVYcnYZLD5dwht1Z32wEhXT5ruResctvoqFe2ncxSwfLwSkmzAJ3ZWmFrJXtvrgeJdGowKBRuhsTQSSgtqoT",
  "key18": "A1AXvMA64v2HHsLkQqGtLAQJX7oRRAyFdCLdJUcAEk7vZxghxkQD6qwgyauTHRcs2Bqqe7RcWvJuGPoDB8neb4p",
  "key19": "4pF2nMLVFQsuNoUtVpC9x9HGf48ojRmxsZfWJhEFEgJ822E1uHUR5THa1feVZnEhFsP4pREBTtYH1RRNyfs38CM9",
  "key20": "5DTq1g1ED6HtEmj7jCE6NnpnVCnh3Zehgrasr3s3pwQ7SG3hUUcHH9ZuykxCX7gbDbNqvr1mq4cuTRK1XHdo1edp",
  "key21": "4BZJFCDVkXhEXPPD5FJFo7KbtrKr9arBHf3stvoaXRt7BvA68z8BQAUZcMoD24fA2pjtxAzxoc6PL2o2VhsTbkUS",
  "key22": "38vZTEEu6hukynMth7mwETMHM4kUoK7MRpaCP2V5L2vpaBt1gJdJDysJKK9uzeCjTeqNTq1jUhHd26wcFm9CqFPc",
  "key23": "5d47hcrpj6JXUafYPbhPEo6sZYXmV62RzsoWF2ekYVW3cTXeXAd9m8KwRxmfv9VnRap1vyHAfJgv2Md6aisvr7zD",
  "key24": "2rNULddBFZH6Rw4i8xX2ofEL3McCVYSV2FXb9dDdSXif9jFxck4NF5mgXCz5kMh8Vqprcu2yVMmbXSKCDA4yqSgH",
  "key25": "4JNCfyjHhtifYg8faLb1EJDkntJVtu3zSn3Qq9Sde5M5Hx3RLwbQEdANYtxkUJbBpjNbYnYwfUKXDdQH7PzA2hq3",
  "key26": "3gGerv2uNkVk3ht2TaVVkFE7mgcirAvT7KQdB2P13u9tNzBFAwXer5cYCXbE5YWYwX3VhEMiYZ32Y9LCLeN8bEu1",
  "key27": "5QZKBfBMAKfpn3adGWgoU3Ff5gEEmgZdkXSvoX31y2M6zEKnBUJb6RDDLbRDbNtQ7zxRSM5oHeBePgAEgA9E6FqG",
  "key28": "4zVxehqBTYMMiA4D7V2HjCAF7fSBFG9gNGcf9ipSkRV8eBi1NDxPyGXUxGycQTcjwLWUVS3ddZjWijAnnupn8kNF",
  "key29": "2hZsR8NY7VyVGsoebezxLQ5XsLcBptmXikk4vKwBRdX52UzZEUywVvtxTwuMWBjuA4EjwEnsEGqw7YDZrGTbXNNt",
  "key30": "3U6ZXT6kP3mi9kr2Qg6cwMrJx1qB1vm6raT75YRLbAfgg9RftZ1LatT7LNZEeeGvYqWPwtYJa7LhH3HaCG9tdAZm",
  "key31": "2fwXR2mXxbXQffgCxfvAkaJUsdto8sDGdaypy3R4iqeU2ieogKaiFwEZYTfMpzuQS1yuZJaLYhUEaaKQR24rbqJi"
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
