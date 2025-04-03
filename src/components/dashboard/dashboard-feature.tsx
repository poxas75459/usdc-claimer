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
    "qSK3KRMHDviT4VhDJCkD7Crqfz1s2ZriLwaGSVxhWNopwrHAcU3e5hJ8ftHP36DLZkVgEAb4kXby3uAZH86AbnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFB2XegxezTHQcvUbBaVy7HJCEVcHCRTPWFRSZDbnMUG2XtYkdAwUFwN5MTPuhtFmGYXfpuxoky8fWGaHYfF4Af",
  "key1": "41aN1eNzB38Dr7kMZVX8j1h9fGHw9wpYH3nuvDxnmFCW5TQuL8MNM94xktnUf6KN9vSfhqVYWPh7FZWuefPUztX4",
  "key2": "4PuTrWt5fMr6C2LksMDDkGCn8MjUqfT2JhKu7bV6s2Jr9xiMwzXN5me8TTg3ZwZyEScoUrJ8XBbr7iZfuz14KfSc",
  "key3": "5PqR8aV88K8fpMkuV6xZaNV9sd8vXaKU8js5eHr56SLapXpWWcvsiizAjEhb2gq2NfNtZzSX2XtwpMr82ZeccQZg",
  "key4": "5kaRZg4Ey9vrK7NW7sFcNn94iRD6VrA1SryDxjb7NJafaKDW23mqieAnHxquoV6Ce1N2nRQJbHmhohz9Zew2saNB",
  "key5": "5cDuWpaRAX3ZY817FVb2grdAYiybsnMt4vRiXSZdgksruYxmTn8qMUf2QDjTHgJQvMc6eukHhxGoqiapM7xw6tUr",
  "key6": "3ATKvyEqisq4wXTZQTvPCk2ztfsxPwQJodjkgg62VBFvtGwesQbUE3RyG18aQTt8hQoFzthYvnN1WgsyxqM5f3QS",
  "key7": "2v4YCfYAvvsQJLUTShRy2aMhuFrHt2eA5REkDYVWoSZYmxX32d358NZ7d4MqkRcZq5nzibVfnrVDZLzKTwqEFqwh",
  "key8": "29niXHpQUaYMYX1eLbPqAEiBz8mVeJLqKFRnCqzs8uuwzpEAXSexobrQxF5RzKaEx6hxemde6FmDrhVqL8Dh8YY5",
  "key9": "yTpgmFYKBhzK1PV8L8D6RtwvSLP2TuMsQ1JJ9tJjRJk5pP6BEtWD7syWqBaPPctsKL2BebAucKAZfV7V9gGEQKu",
  "key10": "QedS58XMeKUzoMtDweMch9P8joDrLJu3U6emaFwht31zPm2RZkGPuPBfcnNg8uLrqCWrAxjnSEZJFvSqvcatYRP",
  "key11": "5cSbgZShXqMmJbA5seY5n3KamKTryd9XxJRV5Pe8AR5SKPUEDVywhShMrGGw1L5SC5aJmqVRVpNsavf5gTRJH8wE",
  "key12": "2rNyXC6D5eujrtpV7mUgTUdFZndDEb7cUYzJKjA7aT36RKZdNR3KGg8xtnRCnFkFmghdkzs4W5Puun3ysAcQkDAF",
  "key13": "5rnsR9W8z9DpX5U6WeuEKChRum7feon3WD4SovN3SSyFF5keKYjzYKe5uwG3A4q47YTvGKRZbVQZm2uk4k7sCHAb",
  "key14": "3Ap8iQ6uZx9xUeXTVAP8VitWCpsaihdEhQtmycQ3tonTYwiqDoN9ZZ4g2VK3zpznYhVUCjQWp42jgXsyVhwcSrgi",
  "key15": "5zF8EExY9GihwBV2xa3vCXyaZ4G5yTLcDhx7HzBGTkeG6EUHmecH9bYZp2zByKL2jQn4UVvtoCP7AXPYLC24iyFR",
  "key16": "KZFe9GT26CzCZsoRRp9XXBSmKA8z8fkSGFwJ47QvGffC8aWj8uLHkhbPVLFJ7Xxh227CZPvtZEyUYzA7DHsUmcZ",
  "key17": "4wMKBrMsMjsXGPcdyxCsy8VZ6pVBMNo4r65AxeVDCvdjPrroaBvJuzHvCKKhQ6BLo3EXfSqfMqnbQtDt9bQevrz3",
  "key18": "4emdZKkGqbwj6RnkX7CVn2WsogpJumwB1LZB5eKLDf3AbfWuyGJXN4LZRCT8e9dNakxsWKG7xDJ2zBvJghqSC2C2",
  "key19": "4iHovPZbXxUb15jNkhMPjRaJYbBoVhEeBZBL9JaV4f2BiZh6uUUxvggv6xZN74kvbiCAsDY3uVwWxeQQMVq9Y9NV",
  "key20": "3zCVANkvyDa1sc1ptuCKKzNYVw1uwpSed872X69g92y8kJni6hEquzARZxoM2wj2jywW5QuyQGNQyUVWDpwmWPRo",
  "key21": "NMBzaxFrDvF8xSjYokuRtKsK6JU9TG3bEFY3oA7JZoBdUtLsS9ncUsiFQi4aG6wpUCJbHuDuwZHAEUNR4FF7QJx",
  "key22": "4KetZDtK956acFSEe44q3WcMqXPZLbfT3AZ3fN5ymy5VqiEWw5cFwJR324hqVWm6AzwGUF7szds6QW3rDdoKueFK",
  "key23": "49sis8BEyywafiSrbxmraGxJmFbWh3hAHX3uXv2ADKsCh779RS8egmqDXdfmsf6TbLpJ6rRFfeVY8iaWbFDbBmx4",
  "key24": "4yxHPzXPEg2NwkPyUAx9428ry69bJXfz7SG7BCBHNpXXq2Ru87b95JaCLRqP4jarXU3fqUZcgeiZcmQAMkjhHPU6",
  "key25": "3bdGPp5VXqKWTBuoEyD3TQBzwdudUY9kLnd2pHU3dQLETdx2CcUUqfGxBUB6fYe6KAVA59tYk7ZLs6YrebmoDdgG",
  "key26": "5TLBq1yTKFyBbbLbwcuv9y3FGhbn4ceJGgPQo29Nj7PKooLWqmTiP9dE1LVwdSK1NwvuLF23hefQuZVkLGeJtia5",
  "key27": "3Atve9bK9FxDPqdmaA69rCNUCvhmRoHNQa51tsHbSqwN6AeBEcg9zo8ph2p4f4JwS45SmjsJS4PQbnMXAJNE7bVm",
  "key28": "4ULoPX7YvyRoNv9tQoh4XdNBgVtcgapMwuSS6SpM8X8f3MSLf4XR5pcz9N59WKzfB1hWR5uBKL4EHw1nYZaDH5t1",
  "key29": "33ZMSutHDt2XMSbeaVjBjsouFS73L6HmKFnGLQxVA2JTF2X9MByUgn2ywHDKWdRrzdR1t3Dd5f4pTXVuA164Zq56",
  "key30": "3HAB9Gee2birXjoee8w4CpfqhwA7BaGfiyr76RNTbjBGuMrptDPswWfJF3JprJGLwUmX3dPJM2DaGfjD85mB5qHD"
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
