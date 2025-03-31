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
    "57S9ByNkFyCngUMeifjhWiMcjuUUKQvnyEAK418obimnUJLbXSdnkQVCQfKzAfxjGAHDn9MqFcdviS7WDAyN314c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfUMTMMQyJduNJNYWTMhQYYGWtjke9LB6DvKy1sc7poBoDp2FnbQDuy7TLhTzV19oVRBJAfbntaW5cQpbgakAea",
  "key1": "5qaDHUvQmSYZrfGJQaHDDHGw3MUYmQMWCUPNBfy6NtnC1sQE8mhCHifCv3zM6L3rz6EWuG2XY6GnBdtyYPNjdbsU",
  "key2": "5CwWGRPVgcGn9fkJKZdLMHvx8yh1RACbKjX2SB8EvX3XXX8oXkauhNiYQ1tG4ZN64Uzy6nU1xFQ2u5RPxNBx356H",
  "key3": "24kUg8eEdn6Ls7ij66pcHLM8Af1SrZEXKxt2For7TLV3g9pJg8SEvcCw1fLTXbeH24zrq4mehduLRmr5s1KEFZGN",
  "key4": "S1ACnoBySag6vERMpXcrp9zJAFQ4kAKti9rcLNoCWDPuNwtpPTQwHUhvf4poZScLaky1B6mx1fdAd5E4gEjQAiP",
  "key5": "4VkNSq1cDc2F2516nZjCTkoxrZbEWCymKvAJDbYgDavHhfs1divZc9BjAtq5iFw8SwEVxthHsxTFDLFG8mBHE5Qt",
  "key6": "35n8rT9rW1N8koMajyPRTnaUQHYvCi3HHnFsgeHB1C8sepHkLUXhzCc7omF9avXNmF1vUrbuxUUhMH8GyydXRFaS",
  "key7": "5AGEkM6texArfMjXkbmFAHVChzqRGepWGkURk31Y4TCTG8cbYsYhqWHCpVsyRhD2HP9XGAau1wP8E9eoneMxtBNY",
  "key8": "2WFVT71gmyUrXgEfcZkLktFjRxjteasxSmbc7fAcMyNamnNyzHCoWqdxtAuhHrUDE1pdeL8NJVbbnFJEZw7HSnEh",
  "key9": "5GhXqFpKnY91pZS1aDuhTPpsN3HnjgRwvVbY71eNtm7XWHwqWQamnUJAe2suDhQgCibNKh1UWFQzuhCLokYqzchp",
  "key10": "5fs7zGUsGKydSXsgq3WXHrinXujPSj9PqtkjEi8iQ2pysHh2p6zwi6nUxCJD8jDTJDCgy2hsFQypMTwegQdeozuW",
  "key11": "2kF5DEWZh8QqWNvGSTXZtm8rKkHTPQmqkbrpneA9Vv3narXz6XVgq7pC5ALRHCL5vcCrBpYYF5ZxGX7mMHmtsqmK",
  "key12": "3mUxHTcjvwf6m926ExDgp6yUMjaS5ecu9QEPwwuiQTDbbDZ7Ex3uaXWnmfDtGyVPvYQ65BPghUu6y88zPmAeKVaN",
  "key13": "Fm2F7cDUAigPzScEA4xtavyzsHFKPyqafwzncKG4XLP7HqkPNv9XHLt5d2HUmekZpfmDFyU3Hw2aT8VWS388qQ2",
  "key14": "5MFXuT7J2M2hX9edrNwn849LeWwMbVj77JfoPr829WKfpybH2Zz6vJ843sorLpQzv65kjJ2VKpocda1sN6N2pXTw",
  "key15": "2S5bixzN2tS32UtyjFqNkEQPj3aFUziSY2GDd1L7F2yVydhYaBLdtXydaNRCEHe27EQ3ShurrbpLnmWeEoY3an6Q",
  "key16": "49y6urAeVmhKQc4TRFDTi7y6BedFv4SBWrPzXChgE7w2u33Zs8wdpkhS819LdtMn8zqgJ7FUeFVpXexwDr9nTVHB",
  "key17": "5ZneSZ8T8zQ8Ca2WBmQPQXmW4wR1x1facmQTrC57bXeeXj7mUTR1szsQZCuNrm9cTPsBkhL6ptN7AAv7o8aHQo5D",
  "key18": "212aQ1JwDQym5kqx7VAQ5HzB52UutCgiTMfhmdfaYUCE9SDXAX1La4v1mkvjU2PKwox7HiiVX4KmU7sW2tVYpDqM",
  "key19": "zAMoiG4u9oiRjb7mgSp5hcttruGrtDzqRoyrfWQm2pMW1sGBX8yv5uwyPJL6A11FN8nmzXKzAK6EYkaF4Qoetwx",
  "key20": "4JwDYHKn67WqPn84jcDNxQyKXL2eAwiBWJkGLU6GBhGZxtBheq4p4JKxBPTX6pnr8D8junvNzdeUVD6Pi7m31fKD",
  "key21": "5WY1z2MYVtMbo1M4pTwhL2fiFyKnNgwU69hrRwa8nvQsjrQ6uVcsMTkQXx6iyyuCQGYrRzgggWhNwnbCF9tmfok7",
  "key22": "5Tkb5jRaAmL3H93ngbgTuHvh8oSTzSbSytRjF57y7m6LPKH8D8ULQ5jJvAa5gHTdPSFFGBmbLu1rJy46wqE5JoN",
  "key23": "2n4rRX4BiaQ9mhZCioKEAHYZVaP4qJLHquQixqfgKYG967k6jhDc4La7q6arzQY5oohgvke7dmdoyzB5nVcyZDsz",
  "key24": "39mVfFNkhbUXQ5yqz1a478MSpzoi3Ld9PEcJruUDrEW3VcpNhHDNeJoDFGUybG4mGXQ7ZqdVHM57iomP1QTA6qcW",
  "key25": "4DiBD6RKAh5W7EfV3QSyP1upNuqytjLT1BEscMQraMtBoQy1WEe4n5mK99oVqk3iRqkABF6sYGvpnUWqQFaB8rMN",
  "key26": "PFPGfXdfWr4UJGEgXsxAoNZtcGqMJsHHMSVgGjMXGnNRfBZS3zsVfEszTCUfHp7uQvhsQQU3bEuCdkCmsk75nxR",
  "key27": "3X8HCSZfL7vyMkd9Nb2H1opQZ4myhXgo5AUpue6RshsfctoXVbsNVG7MJDx4meKx5sXKWwxiKHh89LGh2SSGardc",
  "key28": "2oJQA7HoanxeuLYKAP4FXMkVFGHYYC5ofM6iAeL5yxNqZUCr4yVyyZZNk4x2RcXb3Cban3K7AtX2CaSf6beAwcFH",
  "key29": "3DgP3xJzwhBK5kTcudS6tTid4f7JN6N44K3DN8tdtZJrcJva2DNz9YH6hymRGBAfEFYigQNVxzpYWMLgr3EsDsoz",
  "key30": "2tqF9LvsmY5XZeL1t2QgS4KaFxmCoV9W4jZqDhF6dt7KrrGBC73FoGUsfQ1X5cQqtqCf81Kw8gq4kQsud7xnUjJw",
  "key31": "3yLwB27DfvwVVB4YzWzMuLqmuyg9c2ycQprtQQk69SZ4HYoV3jrs4yJvMWZn5AbAVTsoQSZM5kGujoZqF3Wraogf",
  "key32": "2Q8uH3yC3YpJpvkpbTJoiS576MdqRro9Ye2K4eqhXkMzMdhMv6JgebCSM4BESXEBePX3NDaGGCQBvyhpcs79wheF",
  "key33": "3m1YKguQ4bSf68t7bUQKSo4yoXqNoFZgwo4PKFAwY5FjiwFGobqhpCRxiC667woLV9xy2a3SaHZBxfom4s9qDcww",
  "key34": "K5KGHu5kMu63hN6yxhstijBUVKzMNnHJVmP8Z1jXXQXohpHrdLjj41fYFAG4Ttio5gdfQhFwafvn6moGrSTbTbQ",
  "key35": "4JoK6u8xn2yf2NjVZUgtywFG3adjdq8cFLaNtP7HfFjkaETfGxZozoQe57JNUcav383jKX5YKChFnSpfNdtYkcu6",
  "key36": "5RqqvUnUCzygnLfUZEbjVQ2kLrKHszVawsfuP1EACf9FGfmCf6W19xAFiKfeVxXZEU3DS3LxvymN6YRrQ5VUicqB",
  "key37": "5LgUjyyb8oXJyFvAkHxuVM4XYxCnX6CAdmo2EevPAjzg3CFUuewwfg6u9CqhgQ9irY5iuJzZeMyVQ2eMUpUUMNL1",
  "key38": "HkCW4LrSvnG16TNUEvPGGwxPvmt3ec27398NiQqSwVndCzHyn34hzSHPWy8YiVZ7rarbUfAxffuCoBs7ewETHC5",
  "key39": "3yr8zVJvpFLdh57n97REb6TQJ53rjuTg8inW1QVvtvBVHDTJvtxAMvdZQ15QeePbXPGSrpXWh7RFwy5hVzcCThBR"
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
