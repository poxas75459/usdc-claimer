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
    "5esY1bFDxXakqf6iZVPqeszfWxpnXVsdYwkWvjo9mPyKo2URphGjrkz5iy1Jmeti71ZCUTpJqUu4nbTP96WbZ4bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51crFD6rGJn2tnLAoqYw5pu4BRjqSDqHVeA6dpioq2MVJ3GJckmTwZa2NxvoBdR6v5f3L266kfAcLUCyjAwYuhWJ",
  "key1": "3EtQwZFGPNDyaqj6YHeXpCaGUvfrhv16nJxYufP9CcYmNCXLFokSGn35kDnTgWCj4LTHbaLRD4aEX6DPe5wbmJzK",
  "key2": "4dW4sLj2MFAKjo16M8SATgdVS4SeadLXHLheroi9CuTK98zjimrVrFYT8K8fxeVAgjtJfEEGiDBdWNmSCKMcSvK5",
  "key3": "3mH4fzkHm2TA1zVh4VyL7XzHozDfTmxRZk4kbKEdDPjj9isJNivVkxgKW6SzkFKRiPY8Cbnz6GH2iZHEGohrwew3",
  "key4": "4M8jmydz73Px9PQZgvpwaqX3Sx6xdXHbvrya7X2vHTpDhxxw6xbXig5LPYcyFAjLxs3r4aK6XyQox8skMQnQWf8g",
  "key5": "551x2U8zJnb5t9DApwXTq6szhnYiz76JjQid16WuzUiUAjHQssx5joSwK334TVC5KN2qen4585N7kf4Hk5Efz6W3",
  "key6": "5M4Y6xXdPvXp6vDHnm2zurTKUE4Y3AqTki5qMkmzBCQoRBhf6adWTztRVW28HNiW5E19Q3URHJ8yiNTB1L2wvLsw",
  "key7": "3SfGxZcjBDDKd8MivWit3w2Xf82dpA162AW1DwTKrcsUa7S5iVJvPBtCWKJacDQzQX8mSMcqH6t12Ks9gTuHgFqT",
  "key8": "5nT4Lt7KzMXCb4Bo3YxchBPWRCbwtEnRF4YBMZWRpetWGzoXbKorAMyDsXpqhQT9M4ND7Mntr3FYeBg2o5dYFBtA",
  "key9": "4JoSP87wFBBMb5o9NuSavD5B6iTCLidyXUeUNuXvQrBnV88oCbeuJhxYXkLyhXCaNTVDpJhtr1YnvogvphmwCZKR",
  "key10": "2FUi6CZt9kdh1Smc6LDv64LGMnMdTh2cUTijgot1qGKzV4QvVrcRSFmBcgaAUD4t7pr2btK2sXAFbtATnpL4MFAM",
  "key11": "3dArrrY55qfuKxX879AfQUHrqSZqMVkREHWVww5cq5ARUNVVo7Q1KwRD6ge6YZsF9KZtbG74noxbgQ4k5AvuBQun",
  "key12": "5txWM8H6k8tF25EWqAYEN75Keh8tKYQHQrnvrpidSDrpcBbLepiCpwtyfgudduqZhMsTrdSEfvaJPX3orTbyurmb",
  "key13": "3BjZsFVbCSQF6qpysmWqQVsKoZ57qNevA7YkNoFxrw4Gp252HZ4sihQF9Ha6XAti7n6SZm9p8x4dMcvipSDrnQ9N",
  "key14": "4DJu7zrD5Urs1vdtZXfqiywRBVEktwNddotiCfoPBRJTiwmv5D6sGt9QDkYWZfbTyGDzPBPhGaLs5ELgspCwfZ7Q",
  "key15": "wu9aHjhHsaUwrj2piSNs37SW172UZ6F6PU2m4wzsB5PvCtF6xmoibvz2PwNncZW9Mb2CjrQEaBwQSpKmi1V1XPC",
  "key16": "3zuwmvjizhKU7mnv4ouBmVNV5sCv3AArkEjW1AkEaWGfcF5btwqUXNQDdy4TAcm2hDCqsjsAYZyDfLvjev7wnKG5",
  "key17": "5B7tg5tvYB9UiqBXoA8yrMjVyqSLWwQ4JAG6zMBaA1iStCJkB2o8Qy7gAUrpMQaf2fH9HAkongDsjGT63ZuftRkf",
  "key18": "3b6FdKqWUdyUATPLuQxZgzHSY52UkfTs8Cgq4eqqgcn8jZUEkkgb33XMg7nSfMQ1RmZGYr2moRgvPWdSXpmesLsi",
  "key19": "3Wo9cfvHzCQ2x9CRLjLMPpYSM5j7E4fzEXLUv4RW8ZfbxDEVbjh7bAFZmL1PzuskcXxi14N5ewx2c8D8zRxVRqJc",
  "key20": "2XUHsQJpXLuFrHx75hQtc1AV5Lb3rw6u1uDZk9dFm2WtRcr1UdHfQNsjFfcEfEff5weyuMhFMTyioNzUjVDro4Mj",
  "key21": "2FX6KJQg1tvqZG2KNk8yyuSH5e5r5nMqJYTE1fqnbUCHYNsvnYHMBafkc3663FiCTbwgkAdUsn6jSqSvojRt89ED",
  "key22": "4YM9VN9ESejw8ZrvTyymwMNDbNBhfKpHFQrw3GFjm6PAPFpkuWDeCe4RzhFRV8WwvLDNfLj55Ltfigua1BvuxKu1",
  "key23": "2C1ZwdoNqGrs5owEvB7T2GVkMeNFaSwNGpox2RxHrHzkuMXV9Uz2LeK9KaFnJWtYRu8UviUGy6rySyQMo3KREQ55",
  "key24": "3JuGS9HyFN4x6RGTPnNiVi5EXyrtVVxHBJXf5HmXUPpV7wfU64Rd2aYjPZY4NxCruPd4V5AydPFJiuxDS1C3E3ZC",
  "key25": "SEowZ2shJmcQ3x6w5WaBxzz7KB9kNxh6dKkKzouCzQ95z2TcUyNFnpkkKGnf1Yt5zGzXqmKv52jp7ptWmgwYYhV",
  "key26": "5cu78a9w17DfNFEHDLsgLZVpopY9kNtLJsxbNAE9FzKASBzzTn3deHXRkzf3fwwLpBeBVVgtvknPHMoMADTTatw7",
  "key27": "3UsXJirWjgezX3awagQC2ubGnvphq527SNYqR4BUsJpVmWkPec3qSGbTVWGqXYfEYyb1gtU2KGz7pm22hqBghvzz",
  "key28": "2QDF9ienyRjSvA8iHjd7x9bDhDEgjDuCiT51mjKRTjXFv4MxaB8pgqgdtJXRsnZ672rJNNkuWC1b9MbbQMzMDk3C",
  "key29": "3xcLUXsQNj2v8QLM9im6ma2sWpMK9Tr16P6wx2sUHaLZDJCY2HSbQZD4Qs6o3iFsuaf98SaRmmHKSYbiqfkn166Y",
  "key30": "FNW4czSvtSJtVk8xwWnzJnKNbNd4WWpWGEfkdAoX2645GyJPzoJHoJLtTaYdCDu9aT69gj3J4nVXDcsFxUGrtAM",
  "key31": "22UJnZcjgFUrLb3ajpyasbcL5efPDhePHQARnp3Mw4u9KcmAzupgN8X1WWTdPM4d9VKfVpFRtff7vnrPuASy9TQf",
  "key32": "4YiYTaXmYhVQQSKtyhorBvTD36yDdgMhhbHT1ZC9rbNWyvgUYjJB6pzVQCKdVfwBaKkXHowadDD57WxGLptQBwe3",
  "key33": "55VoEbRCd4McV7s3Cf4bUR5pNzkhd8pJAeUFRKd7PCGvnGBsBk3QRDncW7UwD9h6tMEi46c5tzkC4q7t7DLDFHPD",
  "key34": "449evs666gi5UEYpq3jSFZrg398nqzGD9nvkyk8T4j9GChH7ynZijU1i12hGazvxqZEPPBzWSsBrL1hsMYHkDbC9"
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
