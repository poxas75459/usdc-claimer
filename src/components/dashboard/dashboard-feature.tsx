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
    "4DXMPFareA1FxsjCLU6EBiCTCrJ58sPrGquNZN2uz1VE4Dg3R7stVLgAaAUnTvkxLoSAcAV5UkWaCeXgFCnKbbC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P2feywHr3ZjESHYmxsPNaeyLMe4XPh9BVimyw3oGoyPtjpL9EGnXmEuCky49kudg8r1P8DF5JuQfasTVAKZWbPC",
  "key1": "uaXJcfAkAiXzBnUx9hQ6RgFv6ZQhisRYC4gTDTFXCJ8FAvgyPcstgAN754faFdmCbLjdkAx7StfEDf7m9nCL7eG",
  "key2": "2XJYoQ59ZvXufP2DGLmfAJB61YhGKsVCRLAJ2hiPSEmEHYs2G9Fe6FNt6W5mqKt5F335iDz4W5fmLg1RGXPSvxUN",
  "key3": "49WpagvN4KkpybZs314johHQ1BJsxomNd6LQ5rCHmfpyjY8nm49ZqvFWzrhiSVKzWKcCoQAsFSrYckwAG93RXEa2",
  "key4": "668Dre2zdVYmD8Cs1zp9NAE3Mwuget3GVKDqLCXGdX7zwouC9W52kQYvajPSJjDWciQTbDXQKoRUg1paN38tD5te",
  "key5": "3QswXvw16JuRVuopS6e9N1PxFmqR2NweudiA4wpxTr2Ade5xaJYa6fLNH49LARJw2UK8VnkSytDriNgXfrpGQNF3",
  "key6": "2CT5hXWAZJmuQXGKDbq6Yp4EhbUdbLEFeo5doKM87yupqMbWqkGF8TwtW4mPw8YGFK37ozXMxz4KB31TRbDgfkdY",
  "key7": "yGXAtcJzGMro6US967fppbmqsMNvEupnXZ62GJutu1xQZaoBq3RdwAc5LEnsjZsk1gQ3sVYg1YTkPX8HgziYxPz",
  "key8": "nrhqrzZFNHmoqo7fJpKwZ3ptyV9dZSog96tyuEbSgqnXw5mVYRrnx1HT3jLzzyBejwURatSrryV1kUbzAkpkdA8",
  "key9": "42WdD24jFYRMT9nQcffL91GoTdqPWj6LPcR6peVAvQ5HEv4pvruFCtAp8dczGdqsmBi2Rg8jSBuiQxkHiTHgz9ZP",
  "key10": "4p3WPNXtN3zCbNFqb8ZfV2ShvHU9k3knRqHX3nzyz66MEi2EsYEYxFzWt9dCQyDx8Y4W2DZUXCYWZc4dnknNewfJ",
  "key11": "hdA1d7ej6cQ7Gnd2HqtqbqpfSNbmoccox4Mx7BsPr7MroW6JgUMhsSzwwZyuMwZs9r393uKTqgyghWFS4twSrDY",
  "key12": "3eTbxtjfebuQha63DTLGbUTSbMiMGbsGsS9mwJucMyPr3cxoCVzbi99w19qajsawVLiofdnnfNSh54FgnJYoopGx",
  "key13": "3uG4GgnEXvDJejT1hr7MHSqmkKeEsDv4kUFN3FwsHH2UG9ZQseCHjTVh6f42bD3UAC9gWcCaNZQBCEq84ob4Lr4",
  "key14": "VH4V7yn6WCFmiC7pbzfnQ8sZekEU8MSZVWTHayFwKjQcwrYE5aqA93UV9dA7SAT2zoVfDqQH8jxQKidroXLJXDj",
  "key15": "61oX2QdpvwBvZrHr5BdSUc1P9PF5mFRJbsxHw2uCX9bFCuT4NcecNAFRXTtckXUnhjPkhNjjR1akgVSsptnVxaek",
  "key16": "5cGHQpXbs4LNNNTAE3CyDPrSNvLfhvvWBs9qUyH3De27CAajj3k5jxmU3G79bpmkfdZgErmnqfVx1XcgbH7JpjXm",
  "key17": "4AtPgiL5tFFZafGyRuudnZFY8FYdnECbaGiQgT26Y3LMJymtnG2mosBpJu3NShqE4tArCjVb5Rs1HgbDGPsXvjPo",
  "key18": "625Bd19PqMtHoW9QRdMaTiit4hB7iCTVA7tx7dBAk45vkUhioGZYkV121Gi2KyojnMjCcUzjNsdoqEHLLpECkYMg",
  "key19": "3G3gmkbf57dUVZA5187AwRvTsjv3hHkSXyBaKejyMu84tgrMZgPkeSabCq6S2E57iE7KrKKp96UkYrS1o1mB6G2G",
  "key20": "3YfYY19cH8xWReHeNPLHRzu8t4WNttP8W1VhB9PUN8Pb1WwXJutn1NJDM9YDfAFNN8cDahY8YFNABhzsK2rDx1Pb",
  "key21": "4to4bNMN2nmJQyPvoPvX3mRbqYKkyXJuwFCnxVZ1NCUpvFXdLpgekQVs7dqEHfYRYkHv4yBf1vDvs9QZDrkzayAp",
  "key22": "ppdXgrTamuxtbn5rCZBvUVjz11aHSuAZNWxBURfVKKjc4UdB9fw1bWMYCN2VmNuM8DNzGGaeLMi5vrNn9Ljx6D8",
  "key23": "4PXa2hkRUdFnck4vgoWTuxsa8fz8A9bMtRwtuSS6JRBsedrhdq2hKsGucPiiTwR1vfaTQKve72C9z79Ygb5xd9A7",
  "key24": "3psfchoED3GdDhcKV8RuQCRMknHwGxqYsxsnwAAgTjmn7HnGrENZr1zNGfAkQfTTHXBDqZ8xXzJXW3thioH9VKQn",
  "key25": "3HYTQAGdUToePieneCtdEQX2VDttxNmDERD9DczHdGKjCj5jwxi7HZ7xCGpTqgKVuU1RzXqoyL9wWoroQYY3jaLw",
  "key26": "LXdRzbVivJUxANBBSqVu86YoSNVzXEqHViwFvgKg4JEy4H9N2WWDvhAGKYt4mJUh2xA5ssFWNaVJ3EnDALeDkNu",
  "key27": "67hSV85TUwp4CSaweUcFfwXSQLNoQPuhpyy7wSR1ecQXRdgLy1RqsMUtv1vA9MsJCv7DpytcowWZCqVasssMAWWF",
  "key28": "24FiNc8xWbu5DzqeZ4b6WnJK6BRxSDj8ieuRcJ9NAxwax6KjVh4WhBFKDzPk7LJEUCoa7EWHM25uQF8mfhciikYY",
  "key29": "3TpHdG36AYzDB7EZwVGTfDqWUvyo4VAxW7dcx18YN2EW21hMW64Dvhn7sQNMKa7uZxvRyJNCJqqwVGdTtoPVqTsg",
  "key30": "2Be1BVmoER1mR5EqMKrrQyZn3a63GhN6JQvxhLGwFWhxmn5zFnBtutoA4AiJko7iT7yUJfALNscboUPMn6nnq414",
  "key31": "WbXzD937EB9pKfqCUoVKNr9HDpUo3uwKdC45byHWVgW1RpMirkBfMTKr3Vc8gBy4eUfFZ3w4qFPQCdTTtizTdGg",
  "key32": "2RSaFisg28yWoruMv4TicPuvb6kZKGh3FG3rsTw1RwfvG1e4A3Nq7saxrgjvvchJq3pCdZJzqfQ2nABK95tLdvHW",
  "key33": "3SL4KdYNAPi14NyEEae3P946uHjD5rMMe9bD2JuVpMTKwKtRJx9YLmhhJEFcddaAtB2Xw9Kuy7c1rFLGH7mdnBoF",
  "key34": "3oXArJWwq5YBJQ6U1oGfkfF4qx6zqj6Zqh3V4g6V9rbmBpmaDnvPwUS1oikZQAooouF2ARoyEdDN164w92aDEqrM",
  "key35": "j9vBEuPZYPFN9MCoFGRqZqu6MDAF25KvL5Epno6tQyHVrLkqD39oiD2ybQttEZ7Zy2RvoteiySrYnrDteMgtQed",
  "key36": "718bEn93jEUmcPbBiMaH7Hse2MsEa5Eh5egQ9jWgfzJUtc8BmvciKfcFWWHzFYsVq78oVL2YFMVkLJWub4W21VX",
  "key37": "fHcS7Fm7d81au2a7NiafZD1aei5KAZQLrqqwi6EhFF7JfUTeP6k5vM1TNyj4573YQcRw5Ef9MQMXXB7zp7h8xGD",
  "key38": "uDNMByMvinpU8ft9xBGc6EBXWSbdU52QQLD3PQGwS8wK9bNBsaeKVAHBun8VMKtMgso1uMbFUQwvXya6Ddy6dgg"
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
