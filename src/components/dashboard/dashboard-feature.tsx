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
    "4h5LgAjej4y9K2Us1qF3bo1hLeGwSUEwWBoshEDdJwaPHQJwbzSPjTi4dBFaAovdtx9ncWrV3Tx21GMFF7vJM2co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yDapNLDP5Wg9hvP4AZod29p58Aru4cjA8phjmHp2BUnGk8DH3fELrWuBrGsdnq85sWiSwFMFpVWpz7zLjyAaLbR",
  "key1": "5Qana6VSq5xrJf1WGY1azA8dX4rsJZL5isMrfAsspCk1ALEjP1V8JRe8jhdU4optBMZsd1HmjFhJVxmfRCgSdFAd",
  "key2": "4noNpmpxrbD5HQggo9bomqn2F6WKEoSW8N8UWWVnfunyquiZ9HMmYCPgAjoRSifu3rocvCdyrUqbMiRUQsXXJT4M",
  "key3": "5iR7Cc7FUaoMCUbXvF29Knb3Nym1uAJ6LAk77QHuNNMwKtEBs1LMW2vrKmAnJMM8fFJJdeYjSkfKhXSjeMbR3Pr7",
  "key4": "rXeZBmMr6B29eoSYSgMZSaSVV1j3SPD5s6ExN27PPSScnBgXJtz1b1BU1cctFRA25FFKrejCeDzm3oPT714cSg9",
  "key5": "2G9KEygxjVYPQEVYPBGfT3dfrHHzrboM1agddRNcwW4k1a2rPkTTG2NJ11rXArJXjeKYX1g1grTzKjkHTjnerGEj",
  "key6": "3oMzQxsECxbiaR3665kyHFYUd5hRYcsPuQbpWJ9XWznCxDaWzXFWCWRCMVcTwKxVcZxHud7nCAHq7rZ5AUGEKg1e",
  "key7": "4Fu9Z95oY2VHnfHUpEm1VcSYSWLrbmiRUxrk1NtZd1RGo4iiX75wnHGnjv2Fa3KG5mNxcJ1KXjhqstrLjALn3Yh7",
  "key8": "2rczy2DGa7H38ECpucMr8ZXGUTszr6Hwh25ZMXaqAYm6pxK4VHAAGiYyocAqj5Ha7cmwknS2ivZkUkz4SXJB3ykZ",
  "key9": "o3YXLGP47PJuVAxBHPUZ49xDc45n6KcrrUGY5sYb5RGmFUrcZrntf1X2tjgs7zXst91fFo2zXv7Dz1EM9kpG9VF",
  "key10": "5Mq7xFTbk8GmNPowgbAYLiepKBVZPZgL7PtEcyVgWxBpiVdJkZSRioP8PcnQss2D9NNECPzy6SgXCF8c8kqEP1c4",
  "key11": "5A6cua6mrFsrngmiqe3JtePJPLhEVhaQWjzGzawXS9fWTD8LqgU4FENKW8rvVe1vEfDRDf88U7w1cCdcJuMvy356",
  "key12": "2WkGcykB3i13cyPupt4bWnNTY4N7QKgDft9tqzdwV6yjxeUXHkvbhwqFmytDQZYLMTHLu81SSAjtYECwypJCAscL",
  "key13": "2v3q9a3cCbrBdk3tfiu39YqAKtSNLtPweHu2b1UVg9B56oGCXDdPBunhq6vBiiTbt7Y5E5gZRsmyRfy7n4asL1VZ",
  "key14": "4ukGhzynbstUtXPwYvpinJjW6MJFfh858anvfZxeFXCW9pe2EHw2dcb2w3Zs4SKpA9TAGhWr4eQLboofgXXCQEXr",
  "key15": "4wBc25ShombHpM251mk2Gh47bXHLhgtUSnak2EvhZmabjMPJcfyddTj1D52avAvCR7yrquJN986HpeX32ww1eRUJ",
  "key16": "EnoLu2CZuzmEDCAh2667db6Ew9foNj2yXvraqU3cAfh4DtiNpc19CV3jo4yeqwq223AiTsWX5hAAQJAu8JFaRFV",
  "key17": "4Xa3BPB2HUZtaYv9wYnMNgt8xesdqNn6NeeyJtQt7oGQCHQLcCcz7r8JKaqu3oTENNCN7ddYXC3ADnEUchoP2ap2",
  "key18": "3Kmfum5JiYeVCrn1s6G4wz9YMGVgMgYd8ovYe3ojWcGpGSJ3bVWDeW5bygMy5QCFwrUArP8DwnYfeeSccqrCKgii",
  "key19": "5LqsYsS1mTZeWJ5LdmjDj636xVFoquUMMYTvf7jwiDQ2vmVM4fNzpMXfPaFs8m1ZrrvbmFqBZWR7cCjMEbNe2qMM",
  "key20": "5APDqdne3ArE47MumWeFry4o5cuHA2AfgJALRAJkwYm8SdM55kdERo6ZWgUfxoukB1BJBAHqziccfx1BDgAUzy6n",
  "key21": "2Vw2PQiMGD5jDTqqCxQ28qS8J3EBFfm9qjNUk2JePLyP8vHzZcyCCCxjGaTBr7TjJT1YDgd9DfPTbriTp5SM8j7g",
  "key22": "3mHj4Y4C6qgj1smEaXjzRvJS6dXwfr4VVnA7m2SKsFRBF2HZ4ZFtV7ohfykUxmPmAQfBNaacTKveVcBktBtgLm6N",
  "key23": "5Sd4aM5HHfs9WMUmkqNowQGi6iF6rAaW4XRDbtEPwCEys8eBo8cvVvSTSzsBaLBJBANotfP2sEVKNs62ZZGgFDSR",
  "key24": "ZUgHSAbLbMpAvU8ZKCsCbWHHzpimyHK7WoEV5FyucBomd5JfEQbAUa8xA3rVkDKiASrDUpRAPsdiA5J6MNyke9r",
  "key25": "2mDzTW82bMy7XwhP23s11TvK5RXTL9iD8jErv9GB29dynKC5y9BQFbt6wc5DFENG5keQPYCLPwetWtrDvUgLUgEy",
  "key26": "5AQ8ZKby29ufmn1bhG92w3jBKfK9Bhhh4ejhiRBXG3rRodkm2uD7Leo4bZLYPrjyMxJ5xsmMxZqpNoF7SSuyhBka",
  "key27": "Ne9ze5VC8Yywkxp2hqDzRiRREdquatZH8fjPoSwiojJ2iaSYZY1AApRPkDYYctNE2iefFQzJhwpninkohhJTBE2",
  "key28": "2ckTsVV9zv8aTbd67rSLwyF7mbqUeythwTeeCj1U7s7TQLLoS2qv2efcwWCQEC7DgWiVubfmQBEauyKS59cX296Z",
  "key29": "4iUZGf6Q7dBAsSqESYR97PzR6F3Tj1i8B8JtcLNoeHnKTxEs9jtfqM3D7HxsJBFdMtz75S9BYb5a8r21zEQNbKCf",
  "key30": "4MQ9vTVMXGE1UUL4QyLLUZ1vKT2GCA3CFRYQcpUT178sncgvy3LJDJkuPYTESwSJKcyhuoabmFxSPj3r75WBThUa",
  "key31": "AjifuowetVg3ArPhPunV7x6c757TEoTzAUeoM4dCjcwX78zaPLMNv8UAnwTwNBkYoUtSpSdtiniuDVA4NQhAE5P",
  "key32": "2nnt6X5ZEJdUEcLaqAFyhjAFDWg3m6Q3aUKcpiYTwG8qaJ5E71WTKDKP7vZWsTDSCFb1QduoGyzNPRerwupFr4Ek",
  "key33": "5pZPCMXhXJ5qeGVf7hTYMoxL3itRSDNDXChaf97CAbEzAERmKQu2XLEPTbs2pQAw4ggLh9mTQexp3P5N2WwEjK4s",
  "key34": "TfJ9efRGgGzmDNbFxtDpzWroLQpcUJ3cWhD6Qe9jQ5Wx6TWyQdNuurMDYFQjKNiJrxYcSa635oHTvf4tKxqamjG",
  "key35": "21MW3DfE6bSN1fqaJdPUUbBLh8Lk3qEJKRAuD72MeN6zdf8mVWWRcrpfuGbJR54WHfD3wqpPJEsZgQoK8aAJmmHw",
  "key36": "66seCAJ9wPsA9JrAbAKwumvi5RQfMFiybay6g1QJe4JzLqhD3opWWcdgaGokrDfN1KdS74RDFhFBVF9DutiBMWcH",
  "key37": "2HQramakkpAzbpNfW1pmGiNfg14ZNGSa4JFDpteG2Fs36ZxmjFxrC7ck1gnuKiC3nnJCnVVzsi1BZPX1vRrLk49A",
  "key38": "odYhrmz1C6w1GHVgGTMkTPx8Aqupx5Z6BY9Km3Fm8N2WMK2kUhUGBrBiQzC88LTFb5cJYu4VvusfytB1P9HVaxq",
  "key39": "4fLtbq1XZaj7venHv432J5NURgoqrxtVYroSWS66N82sqU4zd6VWdWwHcbTALsM5rFQrFMjsBB8yJsxZJnUG1PaL",
  "key40": "vXavRuhFAniJb5kGxaR9emWAReLnxZDmwadXS6xrbJBW6PEYEiV3uj1QZbp4ocsWMrZNM2SgXKo6MUZ1xZ9mWVW",
  "key41": "5qqDy2eXifbBLVXVtAALkDyZLNLSUJazyoiDGq9CT9NfL6KJeynv9FobxcM9Bo2qCgyvT4UGiP1RdzsmNRkeKB2T",
  "key42": "LgS57z7kUZTZ2mp8MQ7eaUXhdLRGKHpT55Ym6zvwZ3WC1Wo6cq1yFD6AcVoWoyk2JgRaaQR284NwDnxxYkA6zok",
  "key43": "5fEkLQCUssy8nndEJb5A7GjPMuxdqC86r2Mtw5LgaowCL8GdPoa4yJrnF1dJ9cxgVSFU7kP6GGdngq6E9nT9BWej",
  "key44": "5z2FpGvYczTVsUUjjYqSS7mt1cAzsfQ8mopP9J9BvqNmbipr6qEPmHvs1AqoC3uLiJpCskYM5RwoDPj8SSZUsY3k",
  "key45": "35uxPg5eyNpLe3bdu3Zs9gQJC8o3suZVaT9S2rGHfBKQiPHQdoanYfq6ZCZVQ1E9E5KquuofyyLo7dyPnvXizMFr",
  "key46": "25ob5N1ZSHyEUv7QKg9LWFEd4KG16VXutqd4PSQNYPVMr6GLys3uKBJa5z2jKvqJnRxgLmysPEvECP1RLnn8aeqw",
  "key47": "2ds6Dzkz7UY8uVhZMjo7tjjBSp1fXui8YS6Ea98X1fb69BwUySXaUfGpUcEEzXGke3ePG58G1kcdAtaXsYyj6CPq"
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
