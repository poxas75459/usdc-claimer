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
    "41CtFSjGtfuWisJN2DKSY1GH4wHVKm4atRs8oWmUbmLcuuCHaSGeC2jtuRGzijrh39qfty6ZHzTjzf8ySDAiYSgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23W6utTGBJLmsL96nhvpzG8BmRiHCwxALxRNsNNYpDHLRC2LXVANQ64HHFYN3SkNVbmijVVHzBzWSjC33XY29pbi",
  "key1": "56w3eQnqa2YC1DnU1J52uCmRWZG1aWoSDLxLXUkRirKegpr6Re5SDhtZB9LcKhjEyyX5osQUe855tGN9Vs32dwgs",
  "key2": "2uPU8orbLiR2dLw4E11R26G2sGRJEbDHqbfTEUaVyoBiotTpWrZdBxJSZ5G3xQToX2oZqFQ8h5Sp8W1LKRwGWBAV",
  "key3": "24sYRZR3LDEWxe4xCWTMiu64yqqB1BicKN4n8SA848bYbb7BSmmy91yixLjrYJw6fezPDEy61jpEZKFzPveJbfSQ",
  "key4": "3hLkJtwgtyQZaffMLsoJFQzULa49pVRPi9Dpvktp1dPuB6qs6mEV5XLH7ivKQUm2sVd3DwX2nBKtRJUxnoASwHvE",
  "key5": "5TYtiubpNzHieC32RwiEtvtGsgVRUgHR5b9GGuzJ3GUAPHKbPhN2Po3KzU3VQNmP2jx5Z6GFaPTLoBJhcb16Bhch",
  "key6": "5NHLgX53CXdjx1TF1dRBvm1jcS375dxksLtNnri2LYzLyCWxJMxkdEAhnpYm4hNhgCqxp5Hn9jen8fdMe8oqDHG9",
  "key7": "2ewrQM5sEYSaGrAmGwt5hGJ3uX1x1wCH3AaMbDoWAfCXBYPkBjCPtdRP6NA7RY4wzqWxvu2oq5hQxUCRHDwzC7hz",
  "key8": "4XhGnFwuDxroraNgLgvoYShRPQDQYBoBzUtR9teyc4z3FHG8v5sAbyKKetzJugkCBBRCtXFZ6XZtUppyjHFihsPu",
  "key9": "5bmUZcRgKqsKtYvNvQj4ssmdTaHmdcZWMgZhS6PtPwMHYpnvJihtYVhraVGPATpoL3HRC5Vn3d82qLQdMG8DUvk3",
  "key10": "3CXNPmNYtNTSQpSTcDiwDS8t43jgAR8soHLd8MuJsdpPrmb3YnLWRmuRbv48yd8MsfPjvx4bXfjqnRMvnj5NWx4Q",
  "key11": "5wtk78kw1oVg1H6uVSYzfjYPr7LRc2pLvfU8da8UGbYUTXTuFXcLJgxxXkEdhYa56qNjNW7EUi1JFZQ2NzyswBNA",
  "key12": "3iNiXHuVrtvnfrCKKBKD9eNtoHYP6T2hs5qLf5cVgKMzHstgNg8WVKnkPzdR78AMyuZCwX2gHnvTEdAqifHkkVWt",
  "key13": "5f4o19kj89ekdTgC6Zcz6yfvHHPTBCRyRjZ2rDZe3ac5eh8kXPUbVvqKiQYk74KjxgFiFixc28EXd2YPS22vb2C",
  "key14": "ykoZGoZeBBvstK8cdhMizfdnyjRa2xpcW1e68EbzfAJ4owWgMwp4TrYbG5Hgm5JbYtTeJkbm8HxQ6Ed3pczBBzX",
  "key15": "kqSU76jEnJz51MEZvFKjPTXSLzztrzLxyu4FCxA6mYHdvVFdNKCZ6CtjZVgynWLqdzRQtqQLxT3pBVzM1R1evi9",
  "key16": "38181m5kZ3N1737L56jD2yGmBEfFzxWBiu2ciTRncauAeuWEqwzAvcM7JUFitEWZQSk5uNkABeavuKKc1k7CYvEx",
  "key17": "29w7pEoepzVsuKysuGxiXN29uB5EbhjZKhSRo5BK4oc5HjkmXgvfxjC3LNEgTe28eSSeWZxRjCQuUuy6mCr2vWxN",
  "key18": "2mqdtVB4pHbmpUeMfLsBpPDkWUdkb4kWunZp4xT8jZuUNdQRBuNbuoNqXz9mejkVJ4EK6sRFMAJMMh8ofbgCGrJK",
  "key19": "2JtM7jEKrHPVou6CJs7FXeJB2LWGfxG5JvTGjfyKJGqPE6t5RWBxcrpjqEkg4LdWVfBSczo8jzThwZfwPmGMioib",
  "key20": "3rEVsMD98sKCeb9ziJBgeAx1cQAfwTU8kNZgnQb8y2o3f8mWwRRoHNGoiuEbkFZxqLUhbPGCS3u2w6YsYRBBhvZt",
  "key21": "45G1XbAd9jKhYSQdSePTkgaPic9DMNEPVAZrPu27vTiCciiE3qDTqgshuaP4ch2WjEM1hSKcEGNwPzU9CuKkPuwc",
  "key22": "2GpZJXKmNHD6Y6VwVUsEzY5tKRK97WBCf7GBh4TT4mg1ENkN8cyWpHhRJrdr2iYF6rPRXhdffu5pV4jefn5UazCN",
  "key23": "2kuPRRk1moJND8FzjLfeXy5R5Ee4qHWd7ErJgDNkcPXuKYUrfqZacHk9oTRxWKLQwVFMvF1ekP8wSij7NGG8w12E",
  "key24": "2fMvVHchoNESy3SJdr3WHNnRwj3UforzLP9GNtPvoFGF7BE3xSwVTvoLcNa2cqi4PPJ2EF1s8oJef4uK1W67GHrf",
  "key25": "4ZgprFHcnxaBgJWGTrfYjTahpGmw4sE75UBgFJuysQgHv2uCti2LKcLsmgzLiws1B7QwiSJWrABTrt4BpEezoipF",
  "key26": "4SEUucJaYRAwDkhWUgi3WMPdfYicgsdPdNHkCHKtfcuoJtfZATkGcXmmvEZZ6NMsLYRa7hosbHpHpFi9eSJLiyud",
  "key27": "koq4FFt8CGBD9efDMW6BK7yF4wdWPy5GvFxjankVYHyYdoeQKBUYj93RN83GQa1EiQv5cR21E6fmJu7u1UmDsqR",
  "key28": "wqiYFbA2jnjQ6GXvArbHqv5X7UdXg7jEpBTce61wGUSbxMqPNsCC9HHbWgj4VNGZupSr4imLBc4MwPRZpdkuG1C",
  "key29": "5LXa1Eu2ACk4dZJYTEo2qUYcAG3YT6qUjWduTZP9qyZqt5vF5VLrWw71eCUVZUQuHo14xf71dobxJf4WoecNvjuq",
  "key30": "JkiXt1FvpJ3MmwfuWYgBDmQtppGVhewsEzigcs1KaE7rHdwHxCfHMwgmoPE458rxE2BTV67Rw5niJ9DxuS2M2d2",
  "key31": "2g4bJfrVdAfsT4qw8YSHANW3z4uKaJ2MV43rFxNU7QQBeXxtviMvenVuzS4NdGz4q6XDQjqtsDCPTHVLMnZkL9Rd",
  "key32": "4xzRnXy6f9ZWCjCyrmrNHccbVmv9khneUGwDejrd8iBoUwSLyXautRjFeqLqsaCZAviTEf2LYcwErERFxAWggMij",
  "key33": "oKSN9KEHnHo7UuLh83pXCrQwKj7z9RzEXAU6N4tFmJafBEXorujdzktryGBp6qULZyEj1vpWxsomYFYnguf7WWC",
  "key34": "3H4W4aQiySNy73rvoVbS3ZpPqaYzM3sVg54etejwM1yLXXfutri3zsKXNcz43EAwvmUgBctvd33pb53ned6Ce3BM",
  "key35": "2GZuHbEp3iAsnDRBGV4bacbFc867s26SonYjA4hS284B7zYFDat7XfdatABVZEPBNKHi6LYVCGYR5s2LnsippQa",
  "key36": "5FBVx1bfg24Yu2CDAKnL5n4ABswF5mVGyysw3GArcoj8zbTmdpgNRAKj47KJL5oqvNjadECcxJWgBcg9sj4s3SpF",
  "key37": "G4nwbcqATnGa7Y2bu9BBM23URtD4hTsWgfC5BGNobA1GVa1nLjhuBjstkN8AEGfYtj45kt6Re7xu7kX3GCztoJ8"
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
