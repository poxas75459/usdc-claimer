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
    "2hRJk17wTZhPjN43kQgLYbF9AdGqshMkVQ1bL9ACUnPXKneK2XLLvZGP8pyjmt8r5uHT9tgYCSpR1hEaA4YrCujA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M74fWUVgmSes7Ss79VXApycoxGb3ftP9mdadFxn8JuJH4ojGSQfDFVjcHLG7vn3WgvitWxYNLnrmKHKMXFFeDpk",
  "key1": "LVyc9Wv34bsFRKQhxPdGutGnX5EjGmubWNcSKPt7gvGi1Fh7AZKji5FUtgc7juGfnwc5NvK67Kk9tH9ZwDedwgj",
  "key2": "2v6pkeAY57WCujPtJeotMEFeV9mALwU5bEtboGoXB4nZy4cxoDPP3qPop2hoU8o8hEPkbgYi28UKg547qTTkux9s",
  "key3": "di5g4sFydPY2agFi9pn5kHjuhYXfucB5CLMXoH3VKExFYAy7omfRx8NHu3KH4FjuRYvurXkXVAjH4tAMirmicpW",
  "key4": "jvh1tWn5rhqVkTF6igezGtvQDD3kZ1pbGbQYLC1JWekySE4YiTkE1QoV8nyjscKkhbbvEtcYDnu29pvBqApZHxz",
  "key5": "5zqkdc7ud2Pns3YBHTdRRbjuZZ1pywQVwiiU9QSG23bYYo7DzRgqyfE3nmhYZUFCJwo9gswZ46rfwnqajDvfanVE",
  "key6": "gjn3XpsKXUu79smPHL83Z4N4efcG7oo6uVuv4ENR2i3KmF9oG7mcwXby54QBKKwjLUMx7tDFXa2jYy8Y5qxbAdJ",
  "key7": "2NLWzD8XLkzQZ7TtrwEHJZU9UVnPoCvZSNJr2E8CeNahiVZwk5s9SH4qfPT71nSZ9NScvWMFj43k6sBLxvP5LzLH",
  "key8": "2EUDdrm1Uqc3PVYQGsz7PKAtVDtwvAMzhWeLnWN9sA1cES1E7qi5yybn4D2JwnfXkafLD6NEWhyKYA4DsZFLaao4",
  "key9": "gCo3HA8NwnV4HWmDGW2QbwR6GYKZtW1hWYD83jQE5bYywmNNvzps2ZKaEQpHjhrTWWkby5EXUy272YekJgjsSYC",
  "key10": "5kMzMGugTxz6Wmpgh4wh98zrXPLHikvVisr4T2tus7dTMb98CuivRkFZKSXfbhv3ZutQ7StB1nsPZamVSx9M4Vws",
  "key11": "35bRMkZCu53hgGw6i96E313a1VQvayujVpbPe6x6z386qf6my8rGZM8NXwCyVKU1nKRhVj1JXVrkZSoFuicpgBvZ",
  "key12": "3rm3iLYKdiZbVijNkosfEFxRMq3Q5Rz29ZvT7KxFQQ9y8MZu7Sh3PnJ5oymaQ2uSocFsNA9XEfJno6gdZbzHg8nt",
  "key13": "4CzWM9jtxK4psR3oAMqpVSBJtYfjtRd1UQipv6cbge7oFnpfPYMrVi4dVJ4tyXCUZGAC2dh1f354mfkC2Z54DUPx",
  "key14": "2pq2XNQGqy72wrXnhfFPBiDrZ4tYDQ7z2YuVm9BYgHz3tUGUtqMKLwnmtqFEKHdqoyDJGiWekGCzbFEHNWGPnvVv",
  "key15": "5DDdhkkgtF7stKwsbNaqWeQPwEsTZeZcgp5fhCq5VVeM2kj85vTfTtzYpzGxqZLcK5QvbrWPoZ3HYdTFzj7C2GFx",
  "key16": "4jjdw3AmvVKwq64HPCuiTB3bsvU4ARzhUmbSRVEiiaTwRs6SbZfbENEPTcNHCJCDYLjarV5hjEgHU3w22xyhcoCc",
  "key17": "2dwwjWw5CeQk4kihGUjwYbqgvUgkR1reoQcPjuyoDcTZQHZNauD4dbR6BBZEK2eFESuMHkfb3GGJbZVH7aBCBb95",
  "key18": "2iFXfy578Xv8MwGKFSuTMGbdpJC7kXVg5gnxxwYNyfh5Gz7ASgj4qyuymWy2fgRtuCrNJkdfH4XsycANhLYaUu1K",
  "key19": "3HfB76WRueqH3bpPag6qUDK7uUyZjrRefFE6JMXzBuXMUGdjRMWHEmndj6cRhuxLW2osfxQMjZnjUBs7udcPRdvA",
  "key20": "2xG97gpbRsFQbygiqQDPcKKojY2HqALbyJG5YxyM6Jh5qRxTRtpe3khymsQgLNwG89tasvyU3K4oviDPBHE16t9B",
  "key21": "4CjWt2d3hcgSwsoxQFje5987DEbPGD3X4SdCGsaSR5HE7SvwSQyTSyZsV6tpoi9f8HpsRYKzAwn7pX8TJTi7xLBC",
  "key22": "2wVVkBBC1fQwcBxZfRkVEV2FLgsuMoCQZiWEQoZaEn9b7BNUZMVCJbuXawjHANQBkhr7xDBa9NLYSemSv2dJPRsN",
  "key23": "38nLMLhYwfRTk3SDKH8asogbUdmMKNFP5Ku3wvLcB9TCNFeC3t9PE3f3qu3vhXFvuqq2n6WJsxyn2F1cV5Hs64Rv",
  "key24": "VaRvkp9kBy9MxoGUt67mWDyTC8UMZVXKeHyvLzuqaNvoisBat6mpQjgA1nbnJbV99mD1Rujr24wb1fdegyvGx5S",
  "key25": "4vAujiPRxhttJLd79pDssf1eGu3nv5WqGzYMbz2BB4Pr3J2vD7pfx4C6cSoNrPvBtuupXuVmqT5Qv62wzStYRdeX",
  "key26": "ZyJdgYMnT7uvGpKgZEENpPNg5aRiHciKmxoBPTDbo8nuY1rNZfGpHtVLr4JyY4wn1F8pxgjyHCNhGEEY3ruUwfA",
  "key27": "3MnwH3guvJVkLSYmvTXuv7nrzqP2q1DpUWbV4MDmAhoLM7s7zggJ1ZH4MW3j3EAxhixCUJCGw4FhD5TMTpkECgYn",
  "key28": "4cUx9DWAEWtmLVJDvq49fLUtS5tZzNo8PeG2QwN6MreQuex5S1eeuvPvDxjjqYU8sX27fdAqtx8hcEvvSbiAkg98",
  "key29": "4kVbD8Qrnj4mch64irJbhUCAEudeRvfco6PQVnS951HgGFmLoCMdpTXhePikwi9WbggMr2tWA2iHLsTds727yzww",
  "key30": "2P39JP47wCLQWaDNoGAvMaAzo6XBtGLZP11rfHWj1bi3Ewd6k5PGYEuke1bTLCTfy47Y6e4Vfb1yMSZiXgD8t539"
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
