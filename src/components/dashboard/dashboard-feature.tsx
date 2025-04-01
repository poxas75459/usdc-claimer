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
    "5Ps3V4BtX3YyFpdH5NbQPe5MhUNHKxR1DxePXBq8B3RnHsUXoVGzM7fpgmfnvfJsA5WARjoDn3SEbv8jCveSvLL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i41aLuhJjCANQCiSGXgwqr4gUDbPLpv4RRPcndVrhMZfemsq3HX88W836yzQSGqVtnjpzrkjNM3hBxVnCHyqRH2",
  "key1": "3NVL9Tr5W8KwKiM3x29eyoZoRbfdv9e1ckFg55QHorEFc4RUKeF3Unkeezv3Yu8cicRbocAmAzWuRdmfKCSShG1h",
  "key2": "u3k6hFTXzLdxoDLZ7VvbjMDXv8ggXwiHRzby6vdCz7oaGkRkJPba4uDZkwPwERqviRyri1WRYgshkFgAtwVMo5A",
  "key3": "3LzVVTDUsodqndcoCNem1hMakpC1P61GFiHdGLt8seGBFP9zahm7DDeZCvapLoJniWC75M4FbNHH1otQ9snFmrkA",
  "key4": "3ZMSTqKLDXEJtKnRQM6fG8yi4GJSRTAN3NT9V22uAYVEiQVv6UpptzGqmytneben9Z6U2P6cBYX8fXpCbuL6DAPJ",
  "key5": "CuCmNDWWjtZ4psDFJLwAZJrKb39BzXLGRP3R594bemcctSrst3ACJbCg2XwaY4GScPMLu51jQgQ5grUn3MM3UBS",
  "key6": "3DHjwPLP7y4arZCGHpWEH2LBKb8F2k7uXbTyAAqPQhLS16Db5F52nLgvDCbu13D3WCpgxcPYo1FAYpCk6PSGC5SU",
  "key7": "2s9CkuhLr6nZ2uuPuR5uxZMBdhQu9nvwRgqJYcLZDp5bu4i6AHGn5AMgWv6hFYPdzrN4V62eCUodb6nVW6cHGSbL",
  "key8": "j89rqPWM8JTwPdjQn6SSQdXfauF3zM4f3Tz2ZFptrhTCm4esTRcGYJfhKTds61HsVXkPn8PzvrfLnE5usoEwDxi",
  "key9": "61MoMy1zmtdaGRqfA3vBHyjZw8xWAaejMrNbw9n3Aat8oPyH2Y3dEuGbYx2YaMxXhEPvvoJytCzaDLFmorB2VKi1",
  "key10": "2EZ3R3AuVS47WT1Ly9GGKFSqjcYrth4sDaQfJnbpLArBEHkTg2HzobmcqyxobJ3Kc1qZrTi978qL2K9Zdun3mD6p",
  "key11": "2Z5HL1gV32nvUxVHg5Zfgrjpm9DDPktoGFCftN4aByE3kdYUFF3skS21RKeUp2bWSzYJqaxmgdHkDVtRomHfXubS",
  "key12": "2jYoait96r8H8XB5M6bCoUMak1FbbCpbWaZj6XPSJ9dgXYJ73mQDXX2JnZWkZRF8j22Z8iq5WKY2EpmiDRLdJufG",
  "key13": "418o8dvoHGNaXjDWGpRauxi5J3pi6X7PMAu7DBkdwBbdBCHcc72pimrbPc625V1YGEuAvuGs7uGYuECfMN8v3SiX",
  "key14": "5nf2jzHyqa2iJkWV9ws9HKqmbdi2FB45fA7CJMMu9Q8JTdJQqjw6zeLgUsVucUhipstNRg5K2k64NcxpkGQF6YUS",
  "key15": "4FKRSxiZu9gzUUY671UvoUqrtv3j3H1U4zMUGeD68HDy5BsuiPuLUF8DP6PxnReXSAjFWN1xLs2Ld8ndtNfREWWD",
  "key16": "4W6cdYodEgh2Ls8ErLahrBqeNZAeeUrF7gk8nTJKs7iefo9syumu7bcTXbuTUf2f6J5XCXfNtKFCwM9GDJLnnABm",
  "key17": "5CDrWTYL3gAKf9zwd34wo943YJqZxEfgPxFhbnjd1SBocMpwAgdwq1tn9RWLLH4SgLSv4mfrwqLg23H9213iuxvv",
  "key18": "2cBs1rjmd9Fccz6Pk91fuE6LaEoYuG58YZtvXWBTvo91uAUCN5xvgGDuUGwMXzBaZoBheD6CDGV3CCsYHuySxo1X",
  "key19": "4HF3ChvjrvN7dogmECkNohVRoxqAnWX9r8jy8bSNLKoq5hsEGBEUcmiUpXaLPyXxSoa1nE372h3CETnE5KyCKKiN",
  "key20": "3y81vMKDBRtob1pnLxCUaZeHmMF4MWti6Zm9VZ72bJPShCWAxSSrHE2PuCTh9sdcRqQXRQsRTgZzGpczZu9TpuqM",
  "key21": "4kcGkc9UwBz3n8VEL2Wno3sn3fYdLDwafpEceVoKV5VujtWdGjSuvtA7HEMcFuHJeALZgyvxsgVr6xMZrZ77eavh",
  "key22": "4QBoWcJ2d9Pd73kRmPYaAm2wdCYccBa4997NMuMn4ErRHjSYoGXiHzJvJCyhSugXXrmSJDr611JvGSFtCbW5gdSu",
  "key23": "fTVSrmML8UMfNbQf94oVmf2BZwqPcmckGZsmtAwQbbEvzhVHjxXRmKLPRRyhhEjVedGSsz4S4xD7hVE8ZFdutXh",
  "key24": "5UMa5RqCrpNjYHc5dstgFdFtUn4UTyx69VP6JnY2erAP9rmNA3CsCxBv7Enfzxn4kLUWLnuRy69d3R8PrnDrRDRn",
  "key25": "34ueBMWhnio5WzngyWKPNGMQ44z8aUZSnvrDoQoNdS6CymhSE6JamJbk8WC8qhe79x59gPvALuxkao4stRGRwbVx",
  "key26": "2cJJhxisdHdwEjbXSNWPP4CJiw52KrBWhmA1FsVju9mTSWt1CWApi6hkhMYFiZpgp8hnH5b6EVh7bmeZQuDe6jsU",
  "key27": "ZuVxmH5FA5DMggJzb6HnuyrhkcLTFmdmHqprHuMdZkqfQXAnLAi5uWVkwGXWEtvroQsRycsGbzyH6LJ5L9seYUQ",
  "key28": "4xyy2P5SHqzN7kC1Z3CBxTaq2N6vCD3GM3a1Hiwt5YgGmrnvWu6TNfuFZ9hEzmnn7FFZLaxvsStQRdBeYTW9j18Y",
  "key29": "4kHUUWZRrxf3g2AhpwLHHr9DpUaKU9sQ8jTyvhEcV97T1oSE1xzHVwoTF2rJiiGz63fkFcJCNLsZLgWa8hJS4bw6",
  "key30": "333Dv3EDP6tJ1YuVYq3T5UaSoB4g4uCbiHRHn2kQj5Ux6EBgZnbFuUU7iKqSa4dfuvd4EueKucX48JeTg3ZCfzAE",
  "key31": "s6ZQzUnei66DbVv3MmfXWjv61obZEKo4ALdEmuxRY5AdSqbKzHwf2VWrHh3GU6UU2j99b8z3R8DGAiQ9VMgSUMv",
  "key32": "5XgbfvU5eQWJQdGQBcs2NLibi4QDEw9KS1xav1MHAw15PyWe9hFspRSa7TzXrjfLFde4KQsEHGrNaftox9cd9CAY",
  "key33": "5KPAZ3aCrWAYJnra5TqJdXeSB9zbtPtRDBWy4MSjcGUgS28URwGBSWBt2K4ncwd7AXmbdzq5mmgW2SkW5npKoRoz",
  "key34": "48p4RwM4ZBFJCghJ7Cj1CmDdepiadFeQ4BaQVRRuTgvNrDmkCRXkTkKDnhxtbBqtkLpHPs81Su86etUDnejNikCD",
  "key35": "3pi358EoyfJ75HKTAiu4LMNtXr5VrYC4SWTgTF5yoTy5618LuENN152c9mkJWw9wL4QseJ5dfwiNEet9ckks6hKW",
  "key36": "dF9PU3kLqZL5q75ppsFhnTKGgj9HfCuCrCrFaf1KsCAL7jKj1SkuaS4864aWiT6f5KnVDxKisWWZcUmqxhUXvjy",
  "key37": "4NoQZq5apCyrXc4z4jbd6TQGjhZrauR4A9766c9deRLqY7WkPop98vDCZsi2YcMVx4tvf88kTfpaKnPpsJK4LyR",
  "key38": "bo26dw7wrDDiyd6n9yHKJknWgHWhua18Ws1nFagtXqK65EGT1dvzkZgZ6LbyrDCVYj4e3gQsQrFPyGeG1wSWDmf",
  "key39": "5bgUKsTG83XY3gisUKmjjsH8VYKVWxmio4UfyVaoCBp3tcewD32RacsCR8oEfUsWBEpk96WesnNRtJTnw2nW1Urc",
  "key40": "2avd1T48sKeJWq9erBxkxCtsCFUcVXJ7TNqivCc7WVhBwPktdyCdGGkvP5qbGNXvMxnridNvdkLHh67Rbj315oW5",
  "key41": "7mGeYYYjvYYC6FRAUYau9JFketarVHvUbSim5VfEjcBePxoZFcNsdsQ81RZbwQTjHvfoF3fEUHKsB2ceWfqS7db",
  "key42": "42g22wf9VasxXyozeE2n23HNpb5A6FMwh2h5swKYQKn8xSyq9UWevs1uGb12MKGoztSrEE4tB3tPrbXy1LaFwpa1",
  "key43": "5hRQ3D26TozKo5sCzxNVPxtDJ21E6ha811j19wCrwDiq7LU8Jv9ozLuTbXJM3iR8UNZ3eoZ7eV8YxAh6cr4wScEm",
  "key44": "A6yoASgB5zAjstRMhmVFNzPPZNBP8YN9UUEyCuZ7aDpe2Qs3QwAdDLtW7qbR6DbJFRTcvfosW4U7367qzAQFst1"
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
