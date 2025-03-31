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
    "3czDGQW759Rot4MpPmzddwnNHMozzniJgxc6ag2RcpYZzfbAJeoHLR2CvF7C3YD6mWiBT2qT8omtAmGxSKo7kvGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pDKsHKwmVySbqmLipHpe7xX2pHyii9Hvm6ysX2VUUnAdHaHj7abpE8219VW4cJoPoQTaCAX5pKqVCTkdqc55GPW",
  "key1": "3VmBWiz6mriLovukBYqunUFosCaKBjG8CaNmn4NB97HytnSLbJiQeJweoUMJtFfbLs9DZhZWiNz1Sok9DVmqyoai",
  "key2": "3knDfk5NQi1zYsefY9tAQbiGf5YANfWfh94dDft76czown1eupY6bQZWjv2X3paLi7dd7JTu4aTdhwEXkHeUt1Wu",
  "key3": "LxvJnAxRSyutD6a1QaqBXT3xDYu4mGq75n2NNga5da1dCLDcphBi68sV9kjmLGh6LCQZXn3KTMbr46WghjxXyuh",
  "key4": "Hp9qLpQhwfCSU8Nzjdrn8kChcq4Li5ASecPLW87syHU2kx5a1A7XcoeSWRi4aTze4a47Q7mo7rEWzu1rAqsDWfA",
  "key5": "42ZsePcLHNNKKxJD1QfJfWgMm5gYonYwxSZryyVLSGb4SEfpxBttrFRw1gu5sFcqF2wG2u6oc6XN1Mrf3iVCAy5f",
  "key6": "3isBkPtPCSb4PWToWzJR1msZcFKYkWaLZursEn3zxwW8d974TxZttS9aatYAT6kEf2A1p5Dzi1sfqX47BhKrfdf2",
  "key7": "srvhKdcoyMvXbm4KHKyc4UvGGD8cCNW9nDuSJQ7PTaYtp4s28VTuuWY1kUNxahdXW8hSNUwkafULWbnxwzHn3zf",
  "key8": "3YCKB9WZJ6kzWjS2T528rfFYzqgm3p6qkULM6J54Tp6VGoAP8B99vdbzR6NaM25PvCFRgQ4nwULQrnYSEHa199pL",
  "key9": "4H62isKprBCtxMbsRy9sSmA2GbP7vyByw6mjhSRhA3A6EQQNQ8D6t1rK8thCCQXLDcTxRqawSEm878xyGtrYKp1Z",
  "key10": "gF5BYX6Qvx661RFT1KUNSYeM6HR4iK7mKfvVnTtbkw4W7SgASffBhUZBqfF69VXFZWhyj6iXCuwLPvDKqVCqNuE",
  "key11": "3ZZ1xhYkjmePWjJjRji9EdLaRje5vfpvgkfeaHPqoW2HCGmm1S9QG6woTyezeudk2Cb8EGM1th6SUN9bRWDxkVQc",
  "key12": "5v95e7gvkELCg4fVg52oD363JmGqqqUTbsXuzUQhuvgZETyULY8dZRrKGceG3NooceoghREazPZFfeX2z4cAJcqC",
  "key13": "5nvqgkPH8kWsmfmx4k86krBS77xxuEADk9idPYYub5nCNqnYfQTnsgsdiBzUAYx33JmPKD6LYTRoSkqpE5npDe78",
  "key14": "4H2vR7Qe3HrUzXHPGwbm7wCJJZiXfYfVEWTPFb9Avnaba12khBMX36GLRkwSQC7hA7Jjdxqmj9r4mtqr2akXQMvc",
  "key15": "2FqH1Rcj5V1UpGY71JLVzQfeC2epRpqKxqvFjUasE34v7xxPfUhZvjf6F3BUvhcdDa3xN7uNbBH9MMaoS1FkDGrV",
  "key16": "5bSimbB44qDAy9fJsRuaaEHPCTV4WFKCR66qk8rL7eQsVKy32bgAwmHMZLLTLR3pnXN5Pr7e2UJnb6bemRh11SmE",
  "key17": "uBCRTdXqctYshKwj8gPscJZJfGTJXANCMgFonZcbZk4N2i7vkY8F6wYB3xo9FKnTggH8DaGDyPhJSMCwWXY8buT",
  "key18": "4FM5r1LorEpRpfZdpfDixNJVUturFe7mVdpoh9mskH8A97zWm6wcbsmeXFJmt1u9fPFjGTq6LeeV8SVLpKf4p67f",
  "key19": "2U2CWU9MoRj5yMG5G9L8d5BfBxcBibXZu4p4K4Yxr55ZPCoNn7BPvSQQwjBn1WnEKwT9VBWB9HESxt73K2Gq8WtJ",
  "key20": "3TqhgPNnxjMohdXuHHPBUwqb1RLCtYxa1skcLA3EQZDRPp7pr4vVrQNcwjMnKSH8RqBoQR7fRsFP77vpGoFznmDt",
  "key21": "4xx5ye7vmPR3NxPEY4RxgyxsibeaBaNL8P4MBvGkhmcfDmfmFyu1YCFXK6QdmcdqSv9ZC5WDkprsLsiBCjtWhwND",
  "key22": "3xXGMTSqSybHNS97swaYCGgcRW3yhzfqYmuHLbyyM3KQBM52CJTdVyuWNRCdZDuCRu7h2uGrtv3mHQoktDZpUBKJ",
  "key23": "5o5rkRzSRh5f4nMqjo3Ndy1kkzZVB9RikPdKybsw22r9meMqv3dG88kFDCk4c4G2jTyUySF1jqeswkePgbYUidwq",
  "key24": "2kCzTNr8MksuyefppmiQpSoprR2L8r1jLyUPF9bAmUVbKuQmCVkTSuF9y9RmJPCjBtxwKkbit9NMNCWtSSiNmiYC",
  "key25": "4vLWBmEPZDLpj57mUduv7PpuNpFirtYb5oWZpyELGFg2D547JJKVTjvFJtH2MLnQ5stCB3XVcpJNz4QuYM5hfitf",
  "key26": "38nggqGDvhuimxoGC2BVH4SdboypZGuUv5rPD4pgJiJSdDHTLMYtme3A3QxXS3HG2ZPMFvxZ3urU2Q9CHoZNpoEA",
  "key27": "5Dd4ekffy4XPGUfVVrPoDsLbxhn8x7oCttoHgPnvQHGBQoTKY23rioS5R5H5h9Vv9eoJWV4TcjXsf4b8FePFUczJ",
  "key28": "4gP17gCW4zRaGoMUyuWBjgesA9Efa1bC9fd9Toq2MNBEwmPxEPfwtY6eeqrWNJWxa2ARdLvoP5zKHY2hZDeDdxoe",
  "key29": "36hd73dXsnZUT9TrYKueLbyqKzvcAJh8GAAXRreJ3pvupDE9GJ6kKy6EakgsSK7jZzszuYY8hXKyVMLUcXob7FzD",
  "key30": "3cRPuyJLC1xrfQi2syTYMj3e1kvuXAF5a3JowPRULffzTUmoY5BSdjGcQsXKf5HUrEp7v84w67sven9DEgSQ88N2",
  "key31": "36PyYsp55bACaqosVLxupP5HFQaMdvpY6HDkxMP4wjBw859LiHSS8CnggvxQKbnyMVnwP7VHHWAkyfepPRJx5JYD",
  "key32": "5EUyhXn1j3FvUjZSsKm8nHggm8oqKMJhQax3nPvAv5TF3BAnS9Yypn1LSUgijNdfvCSEMmSgVH4P8ktxoH83HwU",
  "key33": "4dVkfXPDiKyaxWabpNdFPQwa8ZNRQWMHn4vCY1yudw3wq92MYwLU7w4XWw8FKji2Hn3bbB93BiAtLq88dBRqy3va",
  "key34": "44xooSAxxoCzrXhk7u7QvXRQrrNWB2296h94F33AerrAzLAFrWJqqxX2FghGdzA9jgSWv8jaqzyy44RwwWyS8bPb",
  "key35": "3QifgU49W9RqtScLJYyffbSm7teNPZS21VXSNPiBpGh9FDbnrxBw8fKqNfjyfLBvJ1menD3cRVfbsCYCXgRrnxbv",
  "key36": "5vEDU91LNzGW5rzwQhhQPFUEizcM1Y2YEDg5jiRdGXz7kKWsVnx7sE1qsjEvytjVdHDhB4FbzzwBjWTW2JduCAj9",
  "key37": "3uuigYCf2s7m49zWeDnQxNrW6xeD616cB4SuDwFiRgspnRC4c6uQpD5YvkjQCuBXXbMKxF2U1JPmkXnoe5LGXpBc",
  "key38": "5SsxbKhUF6Y5Z6EMdnNSdK1KduiJMN8FzqMYSdoDRdPBWnmFTLoVW6dR9Mx1XovMghZVuNvTCJA7HD21N1eq7akZ",
  "key39": "3wy3aM6rmv1cak1Uuq2Y1prH6cVyJ9njQxZjh53Kuwsi3BuFjk7reqnto11DJD8juR3oyWG7DxaqpkSdKXW6UGmT",
  "key40": "3vtNbypTKREMD4Soq9v51HX3mLWRYLCdfbri6vaXQanFp39KJB6zWnDzgVRhT67N4y4uTT93Qd2PLZJed1wVVaMv",
  "key41": "5WGibtzsjXd1VyUJA6Ai3v4n3vZtMekHcdgAeVMT3Qcqbv68NW7F3J94ommQuhwSHa7qoNHyE4JKE7LiRjWBcdUR"
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
