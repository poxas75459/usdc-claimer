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
    "3jkh7HLmAKmAknkcbNGVXuQy7vE25NFThWtNoM1PPsFEqpCzdvkjU7AjxVWi3bZfhdyj6FkJiHAuvmicjQow3WeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nTjFPoQj74k1ySoXPT7mLwxErM23C1oSRxSB3cQMnc3VAVjSdWr69PjMM9VXNpqiY2ZnM4bRDjDGaMQ7srWyA6x",
  "key1": "67db4GYoicyX6o6y42utZia9QAyg3pF9QhjSymSoMSLUzX3AtMZPAZNELJBKNjXrngm66Mbs91xDGmdxGQPz3csP",
  "key2": "4mpoBX2sGamMXyCmY47ZqAism42RBzTjFTuAPYAQiEDro5efLpkDPGLTUv8941ShnNAX9uncmrVv5bgUEcw2AS1f",
  "key3": "vZyeQaouKCsW9STypNfPuWUwsuxEW9rHos8WVeV2dDAc4Nx4SHZQJhzGHTQSmmPrvLMnhRYRWmGhjVpmCJ6riHm",
  "key4": "4ecqgGBTq7VdvL2QwNbAJQbtScWfWEvenoFNDAcT8a6wTtmtnZz2H6imjWXSNAx9CUKVw2uckcVVpuw8iAR1LxqG",
  "key5": "nX2A7hVkM8T7oMh9DFsHWBpkQvjwGXa7NRkiKLC3ecX9EaQ77MUCXrZbRjvHUi5nr4njKLsPSvJokZQBrzC2FB6",
  "key6": "4up9dda5PKJk4eL4ina8nULaBhPMfy551ySwzPoKmvX9NVLpCrrKGugqz8JfzewArYQXmYc9ywvkmRYiZ3M19eLB",
  "key7": "YfaJZDGbgAKyxmwDF6wHjBFf8ZYHpB4gihPwp3PqA43F2J9sBenAyPjLcnZ6A3nqJgSXzcu75SP6MnJ6dCC5ABo",
  "key8": "5ciwNzFWUMoUGoLAvVHijNVMws6GuoUe6tSKG9EFhpri28EW6kiMQv7NLSUTyZFNUxBwwHRKKN6XfxzycFqVrVa5",
  "key9": "3FD6AdpNE4DX2D8BGoBSK3KujhNpGQ6L2tqZ5KWp6dAdhxo79rAkoXZ7BBjfRGDsHfd5pDkwJF8zvdMXLWUYKC6Z",
  "key10": "3dXykuTQJ5wPrvuk4BDqX3KUV56S4DYdxtVF6KwV5rcocfsfRGFWdNengD6tk5gBLh6w9rAkWkxLiCRTrYpbgEQD",
  "key11": "4iVHFwK1BhgAaweRsGtwEww1hyVd55V9SrpcQJC3bte7hncPSFY27HstxWdPc1TvhmacZ2Z2hCcnV4Xv7eaJmc1Z",
  "key12": "38uGgi9r2WnKrAEzTK7KgcxMVDzU4VQ3jMm89tTbqeTaWUd4vmT2WUGVJ5Wfkb3MoB8qYGF4PcB3gtCYTsEc5gh5",
  "key13": "2AjgMbiLvNs33xupANcsXCJBj6ThVfiXVxFqxrckiLiKH1Qxkn17aaZ9RRJHzgXKCMnvMDn9pQtsnpnSHjPrbRSu",
  "key14": "33kLYHMqy88CQRCL2mQjoYC1vfBSZxzg6ueunkbEKTy6FWL5qiGwbru4mWu3XFzZqXmtBAzkN1meGagMr3ucBtoe",
  "key15": "3V3qv3GpZ5SwbdHk7sTdmPK5jQcyuvZPmtXf8Z2dAncjqrRusk4LutXLwUsVSSb4aQ4uxc467XS1LatRQsMdM5mn",
  "key16": "41myywwoBjnmhrCRNyVveCmP6vtAznNwJwFqtCkVgPwff6DYMpjrxBHn7kWefcHv6ihXQZY5kXt7FDZC4QT7NYFk",
  "key17": "668HSww8k3arPPt6vXJEdbac2aYQu2ef6uWjjfvVjdQHf8Knpiswaab2tZX3A4VvztF6nkz4UD81m1AakgMLd2jS",
  "key18": "3UVLXUS55qKRf7iKAkrsGxeeJb2WDLuNmspdCp9R6yoZExYWK1nqPRVsCGoCpsF7J64cgACAwQFxKfwdp2SNznJg",
  "key19": "5TcD2uG47RB3o7NaWs7jN2JfSK3cfn4BsDcbLTfLY3Wc6pQJt5fPj1XB79L4Ct9w8hXXJKKP9GFFDkVEBbs3zeEc",
  "key20": "5GUrgqeXAHibCz8WpTm6FooGuiidmh3Fz8cS457JraErpMQHrvqyvhG1EUP3No7Vg2xSJTvMLtz9NvVj2vmXb1a9",
  "key21": "5Fr8wp5WqTYdKr5mMmjf4RAK4RPuKBMNZmjyHDu9h1KcjEkdeBQ48ABCemMua9UxqTh1GwYpGLfoqB8uAtWAjvyy",
  "key22": "5ivrVnZ5FJppLby7jbXPchqchU7BmZBbPhqZMR2RpanfMoJY9XJJ2P1sQb1wwzTS8HmjFpb3RhRbPSTZjtqncvFu",
  "key23": "2vePcRKdD9aPRuQVN5HcJ1vHDevSXnTdzEMA3ZR2qMmnvPfSJBPZmvomY2F1HqUCRsPB8TUNxzeKi7yisw9Pq6B2",
  "key24": "4M2h28mTBH9BVzaGyLEsZBqTVX8EdBDsraW8TV8LkB4zmEDsrm9rwW2difGoAAYEmoyFUetTXJa8MoUBpfqtyY48",
  "key25": "4T9h6VH8RGobkneN5s6LyuKKMGBebajwzZ5wXeXxEkXJLDPdNearyPMmxiCbKXn41pRspkprSXX4ZHiFAs57yYka",
  "key26": "2hyiSAzjCmjox5v4jcA1oSaY2qL3gFfatZ1tYL9B4fSZJBpn2BDgncCLQtLRqiA2PeaFdkTqFxyxFzbTUSvRdvB2",
  "key27": "65eBBkUssmpgP7bL6FctPzntW966me6cgmxSR3smTSAGtTdCSJfbfFPpKZTRdzTXyTiC37GbsvUpsrmFEWDGgNv5",
  "key28": "51YExnmrG7V4zC9ayruBzZHVCMwPDtYSP7uN3dHbp3mo9aaSDtHWvUH9wwF5gpbnrFCdsPjjxFP5hrNigsqoZgyf"
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
