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
    "ddGBdeoKWCbmL3FJUjVA8wrHN77PhJSC13bcCjcT4B6V7FhfNp27qVPjTtbscGWnNGeoFF7ApqaQfBGDu1dKvyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KdKwcWYznmosJHwJygYm7gk5hauoaY1ZmsQC7oSvQfDHBcBY51AitMij51iyeuvfJPRuADTNogzCJTLDcL8ocD",
  "key1": "3vBVTyyWQAs5txZQuggrP56U4EDbkRHYCWkqFbzMY1Ba8iyTHppXZcK1kJPMM7GM2D9auhS9FkS4VR1eXwekyLsb",
  "key2": "3PSHtn3iLnU6eQrpWMMi3QiEkWoR3iz1qchmgrgdgU7pGERyTB7BHSWKEffvbjgcHhBdeKWV6KRxhGCs5PftKack",
  "key3": "42xdCmPN4PZyq3QB6P8vaoH6dGumoiBULjkTgmLWg1vFD7tge2tHHN8DTpuMsiTfddAkqR7zpjmdgcaUeF8UcKHB",
  "key4": "5tfkfZApLQCvgCdHyPoeqcEg8yGb65TL26ewpWi7BD6MGTA1tpwZwBCmAFEumnfZckV2mGR9vC4bzdMbiv6dNPZS",
  "key5": "53KjhsTBN8AAD9NxxDuysFcYjzbywY5BDmVSBxe2WiqaUtQuaRGbschGXZC8vdPQCJBiF3KmATn6r43dJFodF5cT",
  "key6": "2QgJmRSHFK8ZTuHzHWF121FCnwH1bSt1rB3JttN1YzivXNuDtZxFD2kts2Bhu8na6SKthox38ZEZX8m9ja2Y4LUA",
  "key7": "uA5Y1URM5DafxSAznBhnfv2snpsSNbnj2nkEC2PpWNVJ4DiNhiU5ZTBZ7SNMf6fkJBg6EtdrvckjFTP9h6mJo81",
  "key8": "2eTk6CwS6SQwmoXe28QFE1qshyrYiwuNTSvj7PVdQHpRkhoMCExGmn4JAGVYeGtbcHK2JpAApFouQaackqGeyY2m",
  "key9": "4UxRCjJGQYnYgmh3u2E61dyky3SCmuezveyEe4TVT9TGYoJpBX3sYNJyQmJKTLvhnxSU8vVmNY67qXo74YefeymD",
  "key10": "42ocR487dWFeJURqyEKLNQJ3agLjN8HxZGRRV1qwLtpaKbEjVQJ4dgVLd51vg7yyBuxkKJXUcSk3VSNwvmZFbvQV",
  "key11": "4acuknwFTvGpmYDfsUTNknNuyWor1LwuzDGgE3Brc6dgK3nMbiohZDdGMgFQxBLc86r9UuZYminXAxaiWusQ7725",
  "key12": "rubu5HXtd4fLtiZD6DWBKQas5c4Q9XcTrBBipar7yc3AGbkLbS3pzwLqQLGEyfa65L9jjUtCaEbRZGVngruBWbC",
  "key13": "5SM3HQp6Dovpfu8MFndqAEurhWfVaVtni9XdPn8ZuKyLdBZGxpF83J8nRvvaSEMXCiHuTyiZ5sxWZDJGjAKVp3gt",
  "key14": "2K9BGQWNncWJ1B5n1tjhBLL5mHettHoK6wYcsR2nNpa6o5ovtNdgbUNG53876W485xE8cbSi2QRooxeePuJZ9JpR",
  "key15": "jAg66QGhjHrjPQNoJ4cRs97ZZ3Rh1tHktqVaQkrSQeqZxYXDiXRQhMCbbgUb6Db6jTZuUDAfpai9grZRLMejQze",
  "key16": "66RJ9EVyzZeVEXySr7HbDQCF4YZGWxxoFgMFHGq2RT1vkDiELAoEdhhY2e3LffGfFePo32Tx7xNkG4sCYyemTBN6",
  "key17": "53k3tK6jHXjwAMmMZSLbo7vNrz6C3pGxuXBen9EuHiJhxysAwy65maBJBwnP8Nnu5LgnKcnsd1tKXHbJkTjTjA48",
  "key18": "3yvFJ5BoyxPdar1ULTTe7kLKYSAQNSz5hBCzR6REBUdk6Fc23Wdn3K1Re7an7qabLhTmb5xnsdTrdWjgBBCScXKe",
  "key19": "5sqNsqXsW8hNaEz5dcc8Z1doibHDsV6tWnrXiPUiV3FhZZWSqs8kAmGCDK5CNRiZQm2WoVxaWG5CdG3ebBPTQFMu",
  "key20": "5qmnPyaxK2qU8jupyaFWBqSE6LcjRSm8cPmn1SPp5szej6wwp1mbqvapeLm6n1PcWwXbew3XP6wqSxPEduLxxBBF",
  "key21": "UGbxxwAbaE6dwuEU5ZSS4DFdKZKh49tPTVDukGBVL7C83i9okZiYkEi8kXfkAQX6pyZJ6ekEa1ErVgyqqfEmF9X",
  "key22": "3AVseg9uK1gVUHYA1MZmSnxaskYsrPhTgaDkz1xcJ2Nr4op3hJRDgmmsoSG1Cs3Nd73F5hfgXQWL5WcHUewaMCpv",
  "key23": "5jL7PPnoZ9ah3a4pVzCvhYQW8i3HpPBrskX9mpVTLsGrGADrGiAvwmSBETnBfjvxc1tHYhsgsERwmpLiABAKw7wi",
  "key24": "5vXEh4QD7xYdFNhFa5WyCNRjDjd8F5ceHXZywoEwowB2RqB9jkrXTAKbJePDssGHLp9Mpw4oKVKu85bUtTKc4UAU",
  "key25": "4P18yvSJEWpiuEoRGQUSfykbg2eSVXHRSar8Avv3F2CyzgJtdKgQUziaNdQy2tpqKfGLEAhoS7JLuPPem6Z9vCub",
  "key26": "2bfZsPsFBpAS2wAfvMMgKfzzzF2Np7ifJaAd8NUpJRj7NrTzZA43i76EKF2yRd9KLEbH9yzeaogkDrnh92TfJaNw",
  "key27": "39eXWcZY8NZPuqbTdB9qpvZ4eZBxxiJyeqc1B3rHoEBM39RkcsCnJAaWuRcmpZHF5ndVzEkoVt19qkaVABN9rLjD",
  "key28": "5xrv9naKMtrQAzEnRu91HsGBhpgurzMhReBAV4kSfrg6NSk3HneWsh3Wt3bBvp7Ch5A1MsmHCbCMjtBGEnb1vRGx",
  "key29": "2YyfdktAWEuw6uuGcZ2HXtz1UautGHPGzKDQY5jLkzfLMVhEMJ3AySuJ7HSUQdTMZM2CH2y8uSTE6zejnWi5Mew9",
  "key30": "23pX92upyHHD4zqbYnJ1TxU4A3zVWveTREzvCYUQnkCs2V9gYfYGCKsJSVjs5KJf8hXmNDjYCYXcsckZsXt4XL9i",
  "key31": "3Rd9FYeKV4onDgJr3BNujTfgDNXgUvfgceW3SYQHsHrGyA3q911MPPruHsiegRgQhXQ5sgWXw5LMAc1vd2VAwgqY",
  "key32": "121e7PCFTYnEfBBD6EHwaKycvYQbYjLELuyTyc4yi43JGzfsxoxQpzdKSBXB4jSPWJcRZf5G1zPUq9s1gYvdyxKZ",
  "key33": "67JU3p6rwJfs9Eq1kd2ZTR61JVPBEMU18GzvNeQNJpgp1SXtnXhn4TJn1duAPq6VFsyMYgBeZjEiJcNxg89jw3HX",
  "key34": "4ec3LVGPCt8nRCzdhWAxGi7UFd8GoA5wfNiXzm6GUH4MfjAQiCo8KtGpo8PiA7c9Q3XcH91vGZcx26wUx1J18mEq"
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
