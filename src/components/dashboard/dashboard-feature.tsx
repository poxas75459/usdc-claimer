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
    "45ijdhjogHcu3nLjBFCi6DZ1LTfG9uT7bmkNhCBXbWD6vuCA7YE1ZF9FjB2MLcrKT8o8ZwbPN2V7s6eu9FiaUZv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nb38qxJghLv38L3zQWStnkbQHLcTRDprSdnUcciCAq5aMaLMAfbPsK2AZsLbq89cA2ffVSaxqyB14GjnbmU8EyA",
  "key1": "4djXD2CWM62CJeeF4JVYrSvRikpoSzB2WbSNCK9pnvaoZnuzfGG2FvkxdkvXgU3PuKHbKnS43TKzkMVnjsUsa685",
  "key2": "26Vo44J9AoGsMGqaJHZY9mhm4aBhSoz3SFnH5i2Aqdomt51xEh9uCL3DGQptwXMno1VEi5GrJQenc9k27K4j91mX",
  "key3": "5Tg57nwJt3RcqKH3FtzLgvU4PZqp9psxeqpcUSqVPbJFGSXz1urJku1QXQMQyfMpSdnwZrpZQoeLaFFEfoQmkjQw",
  "key4": "DwwzsAB3D5SZArC4zsRAvS6Pa2AfmDdY4GSP7w584FYbYVTXYowdZhTVZiyjPB7kssaYckgv1FZSVapeXNotXzX",
  "key5": "bVfBrEa9nkPkGfGvGVNQ9hzq48quypakV9WEjJAxu7Hp5AhKgRJBJcczu9dXjf5xeU7Q6sQirdJ3JaHLNPoDAia",
  "key6": "5dt6SbHWUiVHqqinV6bvcG4zcymZ9qhrjnBqGXSut4WB5jRnKy7wg4RVvGFcYJN66vu7oZUEZWrtKgHYgmfM2AAh",
  "key7": "3sad36JaWnxAsZxFe2QkcEx8dybfzBaefySxV1eWLK1dbDnJjck3a5773enFaByraEKA9bUpZtjEksHnsUNRCSAo",
  "key8": "5YYw1RbRyjM4TE5R2AdKJZ75Q1SB5X1yMpPzFpouQovK12XC7esPdkfA6mpGgLfLrs59nVGocrZcUSmdgHQ3PvkD",
  "key9": "2N4G2if2SfH3bMz9zF1iiRRcWXQewoPt1RDxJR7b76mun3HhtVdnZCjuBErqoSGaSVrLsXbiJhTYjnGC8Sdhg3Ed",
  "key10": "639fsqFv6k73Aq1mwhtXVc6n8taJFZ6pJ2Czn74LY4zgWQ6qZTkwGmRwBRhC3L3YEUpdowrFk2ui1oizsNu6pS34",
  "key11": "BRgAaNuHUCsZqYufZD7dcw897ANUFePPz7FaSRPjxgQgFyuWmMpNfBrijLDBE87QPjj84JFmWoqQcrBrMVQV43q",
  "key12": "3jvpiicnjasgtZcQSQnebHUZFvuTBnEc28YaUTDXefiHWd2X1SFeeaaPmYG4Bv7W8eA4h9NRWraa7R3JLYSYKEGR",
  "key13": "3hdEbvoRqZChGHkUDvSNihGEzHPG9HTu3TkAmn17YEFDiHRyuBYad6crwJQtQ2gBdhAwMdXmmHqrSbP9RBkLfoth",
  "key14": "2LZui18kLG6fZVLRjVFP8H6SsW7Vbfbt1QXYBrvqBLoqgYpB5QeYeY626f4hJKNYTCsdVV1gqkttn833gfTg3Ujj",
  "key15": "5LfaMX4Ae7UUQ1FuT3R5gCFyVLDLsmrRDKwf8reRSfQf34jpcwKE1kQ1dCxePLeWETzwBsq37e6fgPXZ6J5BKzyN",
  "key16": "3tuwydEaG3zvhg7FRaFhpX7gniWoo9K6kcB1w34Z34b7e6oLz3j4BVRuB4bHjTAE9vk6Hw1S3NbaZBCYR7PW9AfG",
  "key17": "5VFqgov9bunmp9V7m7Mor3RHVgAMvoUnqNPjjs7MZRSDK8XBYVbSbAbuWFB7yTLLcg37VJmYGn7NbPtveHDuopot",
  "key18": "ujegiDWH82L8vbj3XSngkmdAsEhVAfhiceCtKFfi5PMjX88wqW4K3FnPkxtY1o577rjLsouVyxpU94p9dJmdKTN",
  "key19": "4R1aTfZaB5jXYCNDcDVwydiyLTwUwKzx3cz3xoci7LfMYCM6niCnEsmxr5XUaei9FRfheyL65ouAD34rVmYDUv8m",
  "key20": "5GmrxCFsKEa47kXKJC7Kw7Xbm2Z4Phr372YxqEPnqeJVpNA23b1NNWVbNRsHM8Xp4nydBQS211J1W54hGZBcxPxT",
  "key21": "xtiFWAXWEwWQaQyp6dKg269YXFUfo21p5aB1y8C5dBzsbDoqQyJfbchhvS3a99nttc6qA9f9bCCtGoxQjs2XHPG",
  "key22": "LNzm42RkTH5srxXF3Ufa6HGxoPKSpnmhSUjLYcYvkPp4KKcd6gm7CupKAo5vDqSjTucwPNPLuX9w7NVjEbW37G5",
  "key23": "2UqdD1UVD3uWFvwWwA3bKRLWPuLcDAvK4p6UbDTWiJ79KGa5AtnajLULMnz4KHnRLeWuenMvxPg7Cre5tMyLnk6k",
  "key24": "3Tg33E6ojJSjYBGwCexeowNSz1u5E7nL3KuKMFzcaoLwZrMvWmE1gEb5dtVW1ZmzWcF5Hjd4MLnBBifb25rQj48B",
  "key25": "LzS2VTWbR1xA3HQxqHeStjRsavPT9C1A9Svdty1FEhR6gFQEYU2ooo6e8x61KTny2hBQ4bzRSfQqwmF9KoBHY3h",
  "key26": "4fDvmm9vkhGxp8ixgQVFC5dcxMncEcdhS5Q7QWs7rVvz6RKXPEpdsdqJ7WjNPG5sxNC3zGMKpuGADPTSafBCFxvv",
  "key27": "5ekDAyELY1j9akArKUphskQ3xrFb1F9J9ko9xESh75gPxkVyFZgCfs6ca4bJBZfZPNoebhe2Dd1BJ5cjsg2RVUCo",
  "key28": "5dih7uNkDwmh76aAyvLLzFSmgH3mCHysJtxe94h6yN8nSqqUuivGx51cLEVxMR5EpEzXhCT5h6UtBn7TJCfnpyMu",
  "key29": "Kkg8FetE9UCQPoZZ7VQwkYLKgk6NBPfbYAHXEJwUSuxGsfbgEwNnezajnjwQ6X22WEmHB5vC2in39pzsJxX1p8u",
  "key30": "55PBLwq6vk3SMgUy8GUBJRA1vh89xum3n251DUieSMKb1W9Era7iMNh8LM4BB37Li7LrtK7RM7H8ps8S8pzgXD7b",
  "key31": "2cfyH7M5bNnbcTxWDrfhXrGiJkvey1uKsafqoADsf9foZs3bXnRAqf62KsqVxinpTMhqw1NwnPig3mKqDH5Cvn1T",
  "key32": "5Q96BJEgCobgxKmnsK2NQqMu33JCLdB5LBtizpyA4aGjaSKSjbRyneHMGmwecJWRbQB8SBzQiJi2WgcoDsPg935v",
  "key33": "1uJtpnwtJCsNcb6F9LUK287r67QmHGNASnPgFPnZ6GvaABxjpL4VRCnojmmaDAzMtWfyPpan7jA1WMjARb1c7MV",
  "key34": "4ATbbX2NANogQPxqs1oJ2iQKZNoA3UD7BgigXDPt6NEHmCQF6w4vBfvYVQpvFSF9y7ydS1ZHjghonPtiamASoxgd",
  "key35": "2MyGcEySU6cEUmW8AVTJhtNAYG66kvKEZctJ4FwshPQannBQiayLxPbortSWMwe2MUukySqzmE2Fk6y3dKKYppXv",
  "key36": "2GuCxVcBuLhJJvcTRJ55mMG8Ls8mrCSkPGbcGT3foUYqo1ti2PeER5cRdcpHd5sriXVP8vvMLGWzXfhba4B7w8pg",
  "key37": "3TiKkgJcCSavmcTdBuYpxsCDHJXtJLFaPz5LrjeSrea7UUEcY5KSa2x1sgZsihTJaRNjGe4WqFQupQV4xKJdepKL",
  "key38": "3scQzHSwJ4X8VHUfcFLTJwT6NhGBgb2MixbT5tAKMD25CTLQUkhZERCL3rinpknz2s8dMWR5CDS9gJeWcJfWvoAW",
  "key39": "4DVbZtcwS7Ckq5C8kRVZKeRCts8UmyFMjr9v6yeSx1UGZYFvAW76Zk2aPYunt8e4hRdrqwPn3enNVqS8pg6ksaQe",
  "key40": "34gRKFYSrW9983Q1gUJuT6q8unSJPfcUEM2khJNoPHZUmrUdh9muU8KcV2KXqjykgv5kk8Lc7jQgH6HkM5JqQQCo",
  "key41": "5FytqNoD2u5QYLLaPXdmtdUBwBM9XY6FXHd22qGhMGfxNbER8rQbR8edCKPUnwYNDSpxoaouZnnLN1rnvvPyWvAP",
  "key42": "21GKoC7n5DimoaTcQQzcrXckUUWemYCrneKJXKfEn3XzdoGL7Ty3fA4oSoegLrRSbXUUa9evEtLwxckBopuPVAZH",
  "key43": "34C9SiPJA8DqkKPrA9ncDM6jypZN63PESYTLiyXddg8VA6W5qhafvT9YizWjiQV7kVFwTT1Q1XHgQAh6oxsgczP9",
  "key44": "uY2wZR2FUK5aXWPUWV99zpFXnfkamhutKRH71Xqn6tLPafekkneBAjd64Y6Zru2kYcSijH3kHR7sPjuoFYZd7Wq",
  "key45": "64npoBDT2Hrty4pzRLJWRjT1B7nPihDK4LA9e7bEreAcacFQj7RuSKhaPv8i7786exfvA3oRQCzbuM7R9XRukBBs",
  "key46": "cXoPdumofJvFZtxGb32iAb1mkJiY9qw3enZSi3ecwQyb6W1dtLkGFFxTX9athaPbw847exLj5T713FTcChDHyMw",
  "key47": "4jV6M8Tya6UZZpZkbFdSqYUbGQhiqLutsnaVsnaGJuiv3LXr94m2mvqGuXpVnZfSVad2nWeWG9D1EzvkBvQV8vUQ",
  "key48": "3n9x5x8w65PTFgqXCU6ruGABdhYe78EJvRuRfBqeTGiBNx7xoFj4WrCHoiNFSDsTTv27FAeVBoqCYCx2p9G7w4Pf",
  "key49": "5MxqTFtyimVVrqBnxvUpYeiHmru4Aye2NeXgdZ2uLoABzGqEr4VTomrvPrnYZeKw7YfDR8sdB9i1fLsQnVjvnNGL"
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
