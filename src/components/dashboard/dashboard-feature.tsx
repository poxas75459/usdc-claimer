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
    "5irg8Ci2Hmc366p6jjTKwwn4wHk1NY3aa78R49rvmnkfcs6RCNhuqti7N46FQ8BsMHHH6xxHrLKoQcBUwr3jU3Nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m81svUM7X6q9o6SD5BUwnfAcNz1jTjrudjYtTvCyjPRXqz6HWP5iFQoYhHq9ijs7vJFuoVVXEonaa5PXfkjTgfP",
  "key1": "2dgDD3DBpE2PKRUyh6tg6e154ksY6mMBT3U8ykggRqHErSbFuJYgq9ckewmrrMgrVbXFhaR7PyHBSBZawxba16gv",
  "key2": "48W7AopecHugjpeAKgBi9SXHe8rw8U6fE4hLHeP53cGokeJZZ82EHQVAh98CW93gs1sWxH2QSLH1zCEZmHpJXEYo",
  "key3": "CEt1XkbZy9GeoDKi5V559mehSCWw3LQXkRF5zWwhn9KfHp66a86W1GgmCbTEW28nmGyu8Wr7eqaS9RfMbHfmN4k",
  "key4": "3yXZCVcu8nZ3Z9WJuXqce1uQVDF5wda1WHH1kqDrbii1Pq7Kuw6X8eUPg5w4FUKkTX26NStP8cqF5XrjH8Gbivay",
  "key5": "2mc7FwZvQpMgYnMAnGJhVNP4nLCXh5KW85Vo4qKcztVD3m21pPgSjXjSCoKRtpBWrHMzyHjexvF544brxv2hkJfW",
  "key6": "bgdLCfPzCP9z5cumeMHN7UUCzc4JbVBsowN2pqW2QTGNHeWUtsfg4jPjEwwes2xU3jmF3CGQPPmpRdE2V22zmYW",
  "key7": "5B7dxp8fUobMtNQ2YmTccRnG63RxfAUhWJhEuuKYnq9Wq2bShxbnS36zx7wByPSEb8ietS62N6vCjGKzvbPSYRpy",
  "key8": "3EE8hDNi5hW8TKRFvvRoNUubyAhM6C6sdSKRYgJTCUWYyL62PT6qdYVMwLvyjR5C5z6N43F4RSdgwMNNBecm3Zca",
  "key9": "5hQDV46D41f9CAYnxyG2KHrsFWH1suqiZvLtkwnVAPNpP3NJhusL5dq5GLUXgLio7uRF2SH5TCnugjpusiztqB4H",
  "key10": "2xgCPXrpcb6GPUTc8gYfBofmNAjTjc3TbM7wCjTQgTvEBSBihV3DbtNEe3DjAKU1wShBep3pL977t8T8jRXYQxoM",
  "key11": "3LybjAFEU3zcdFEHZnxAuk82sL3rgV8WywuHBjgaKaEL3wo8NcDyW6finwPPabCgeKMhgszrT4qkPzRmeGZNjgz1",
  "key12": "5fpSChXeRcEgBJDU36R521itiyw3JSfQPisSbDbkQVK6r5cDa4cu9P4Ac3Nh8u9VwYvrfbagBZY6EjGHvCuya9Jq",
  "key13": "C2yLdRpF69LTWhECQJfB1sEiSztbHnRVgv35q7ScwqLaAo6xFd1CVY3fn5TYrcZXUCCN6aUkSFHVSn61BC6CxUz",
  "key14": "yHoxqSCWJpJtJ9JpZAL3kTU3npSDc9JJk9Uyd9od7AHx6Lz31xXfsFWFAnUcaPwchsiLTXDkiSaL1vCYZyqP7AQ",
  "key15": "24Gqu6XyesXimTsiJsyyrB1t4QNtnWrKujerP7xxbSute5ksVYDhn75srMGUL6jfHRquiQyNxzozp5iVKgf6R6fA",
  "key16": "5Fvvpuznys4dQs7C9NsJdGyAZPMqg4fsuX1zHAX53JjLJLScM9qS5cvBshvE3oy1gqJyPRjQ2MC22DCzWHH6atzg",
  "key17": "2sZA9a9SrvWY6my8WmHiDGuLU6NBw3AQKnSyYa7AA5HsNhfoufJqPwBPpJMchEc3a5wrX7c1ooqhyZZXsGA2Hrvp",
  "key18": "38dvd9DZZHatDZczZ8Ej1DQq6G6yEDFV1pxTxvyJsMxLRYk63KRgd9Hv4hxGihw9UW1acVBRAXpxBAob6zgfAk72",
  "key19": "3R89Ezu2TrRw4oJYQRiDW4k9CkWsFHCjs9dwXrmTyHqK5mpyFsfU1PEpCyi8FQ5DXbbjKcDmKx8BXoTMAXCRm9hh",
  "key20": "3RXsBWy1NZ6vdkYJ8qnRa1Wu1aAW78co2EnEunEdHAMdbyrcZi4RwDxDU4Xw8uVhQSDvAyWwkkk2MqXuXahQDWdc",
  "key21": "4ciDWVf3zbLGW7KSN5iPDUgmnYSP6qDVxVB6ci6A1XcbjHVGF6eqD5mhrrDx9tuQtPA5fruYjk6LUnZCjxyv5vrJ",
  "key22": "Hu6MqqVFuX8xwvMZtTrjWGBpdswJTUWwWuskzGCEYvjdjFf9VJx4PMDTjFAFN6XRCePExAug4eGyWhKvSWvHV8b",
  "key23": "5PAmm6nApXPMyoYk4Xx6XZDMkTB1BbeGwPHYeHg9jWwSwiJRPXWGsiVm6ACv7SBNdHt2c4uUDzfGiPmgxmtrPpoP",
  "key24": "3yn8bmCB9b8XRV6xr8Eve8ewM92r5o65LQy4ZxfEKHqaUnANYjUrJDeqG32xMbJedhNkWw9wcbCQwSzatkuuP982",
  "key25": "3BvkdnhhueQWUAbzU1xf8wwZtoAajNFHpChQ3QV3QEqzgmtNakXCeSrg9Z4yafaK2ToKqFRHHQy3XTzFgM5oGSvn",
  "key26": "4bfJ8AUdaQxQptUpbtGzD3sqBN2XmynQ5bffcMFHZ2tP1gw1UsY1D5GbMqsGQNQVYbfVsi4VzpCTmwhR3nZtPJDU",
  "key27": "276E91MXsyow8k5haRMdzSENDC5rWuCDgnmpY2H87vGsjriCGC1w2ZbXrFyM6qR27yvRiHnRV74PtFpiZJuYjjq2"
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
