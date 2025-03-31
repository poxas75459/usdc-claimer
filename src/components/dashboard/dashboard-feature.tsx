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
    "4eH8jvNxT9jrREazoEPoaBrh1YBMDWi9rR2f7SRcFpbQCLK54PgXc9rVjfcWtWxpi2yqSbV4v9FhFcd2FUoW55nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6X6K5vw4xNtZYyUwvsGXBGXXoxQJDjZAHC3dNEwu8mxPZuLFAZB6ArNJbL6mKTt4z4qQ8H4SF1JNUXvh457emh",
  "key1": "4Rfve1MgA2ZB28ZVEfCD12N6bbmcbALGn7Af5kr6u9Wr1BwG59Auk4oJVWoikQsYuqqVzLL9Ac4g3AZPmvz5v22u",
  "key2": "5pxPuEEWv1PHP48GeRN5GkArEkJ9zTfX1fg4FDrhiQLeabymJafMNGccxoy9acDmRonWN4KRdEKmzJUUyQQuCbcY",
  "key3": "3d3ErxXUwxdMiqiyizUXiLBY94jN2UmDKfm7tUFTveJ6V4Lv1m8J8rgh8xbcv5f6dxfWKUfPV34YnPvewWLVW2Xa",
  "key4": "WUGZvVk9oNY7wBPTKYk6LaKY6yR8mULqQzxg35zcqoTXe2FQ8b2m8CLkHhZXeKk6mvkjB469TMugQGxLbagj3G6",
  "key5": "3fbdjVZvfHA4RBn9e5RwsSKaLWzyoRJADSxKahqjFCdBrVWmu2GqhQZw29yJUi3KLPfaKuTnwonSzGfmHjgCvk4j",
  "key6": "3UEj7XmpMVyv7kvFzxR4s2NJC43qkGeUHoVJxu39ZmCTvhXXvXPk1XsvSQi7u48uMBtLsxo2vFiRmgDhQFc6BBhf",
  "key7": "34zPHSv2NxneKcVMzFGpxG8dB1WLh8PqWmNEXwNjFUetLnbQNAyaudD1KZnQs2jtyMsTH456ASUSrtDGpU7fNt5f",
  "key8": "36hBMVbzATu4h6UepVt7EofkHMsZyxKEicqUt7WrdMoLVAUT8MgFD87bTEeSYL4RdtX6r7uQT5v3vsbxBFhHcp6x",
  "key9": "2q2guSi9uecq1bHg1PKtLb66Dgi7uf1TTCMXhEF1eAMLvAwgQNBbnMTsQujXm7YK3iiTMtRfdF4wzA1FZX3QeYxY",
  "key10": "5MUrvYqVrSZaQpvCcptUdhZnR4A7JCNU57FCgvAjZ9jjyejFUSZquuZpHDzRp6zGTNAV2bAh6oaVsY1AYcogUae1",
  "key11": "2ihmPqyj6K283QKZGfkibF44PPbwYJmsxpwXuyjzAGY8P8w8iqyR3tEYZ7UNo7o7JTSCPGhC5vmq1b1GYSiTCfNn",
  "key12": "5ADbtBoae9PqhJ2pa433DMwmHnwAUr8rNRDnYWUhNhH4FPjQxVbt2UZVea4hqwgQ9sqLBuBCc6UcHTpDEunaZAiZ",
  "key13": "64Ej2invyTu45zGLe8njdaxFLVKyfUcvYEhna4dNgJCgd3MdRutaq9CuGw6is7hBLyRHivHq1jaQXmWAeA8dAznT",
  "key14": "ALe2gwkt8w7YzKyMahLPPUDyXHYEhXb7157ZSXYjKEZqh31fhMTvmfrNCobpnbr5K9cmRrtv8qt4NfEd6ehui7j",
  "key15": "55NNi2CuAptRFhtsEBYZcNkyM8UFnuGWbB5s4xhtDLRp2yeU3A9yhKcPrf54nN18wnErXb94uxFG2puk3yZv3Miu",
  "key16": "2YEQSVr8cxV7VcUp6tBZ4KqqTM1zVMa6kjnk6t3CRPaoMRbN12hL4CmXdcDPUUYDZUvLYXX3TKYwQXteHdNpSzgR",
  "key17": "5JvQtgaxs6qsid7zK26QeU9TtPuHajBBbaRi8Tg2XTdXXGBk8GikEhpCncewkYHPe4t1PUcfr86fFS5JNM9StJ8j",
  "key18": "oBgULrqJXsS6Fc7BrkVfXrkSWwUJ8qoLC7bytQsDHU9bF3K8K5y4uLrYjvekmWdzc4QwmtEMQpxqy36sNLTLZx9",
  "key19": "3xxHLNszeH3ktXkpHDsCusLtr9UcZt5ztEbUjfoyKNHbh9ebYBnWcKm4hyjcAH2EhBsfyPRp985hugB8J23JdZFE",
  "key20": "31En5EmVgrhYon5DvD2yPhfHRwv6H21aFznmKUGkrSDKVTgHGN69eK1SWhurGd6aSUhr4mcxmsqSJKTniH8kgvyt",
  "key21": "1QtzssMc1h2UJLGkvR2pJ7Kbw7TH5icFf5M6aYU3tqB3zdUy3pgK8dFGtnw7d9cuJSykbyXN6F7W5PRnC9QdNkD",
  "key22": "N8EZkbuHWNGK99rrR8J52rMAd5jtmrzSdA81twTzMox9f3PwaiqxhzghikABn1RHAG6c1PYbcCC9YUduPsT7i75",
  "key23": "d59R3YU9aRYfwSeiXAjixt8Kftd7Kj34QXLm3Lit4eAx8w73ZQnk6PcTpNMyueXs44YBhrhVo3Uhq34uDawmtiB",
  "key24": "5hHc49XmPCzL3Z3vZoGXRp1NUmLUhQozZcsgc6pgZ7dJ6H1BSk1A1dx2z9rEAnMBxwLwBkSkm4WcDRK2RdVQ3oUZ",
  "key25": "3WdAS1kJTc5EZ2MBhoNrNrWbg1v5hkYsRhCGBgmWxwnFLVjyh2MQrbUUL3SrnXyTxPRRpYXUVD9FMxrqW75fwHBU"
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
