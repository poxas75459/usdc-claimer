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
    "3pGEppTqyQDqdZd8X1itRsQJanVXh3bjMuy8YJepZRiGepQhXBecjdj3c2Nd8EoC4PDK4RGoqfbuTAQTyZfd277n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yzMYA2iLRuQCno7zaWH8cMLg3TPThEg5C1zoYYGzSiKEYhXMi5xn1LbbL8JpWBFEys54VhY5qBcMFR26MyXXJMy",
  "key1": "5wd4rjoSdcvEttabJNNLDzBVGANA6uL1k1hDDd4gSvjkKz3Mj1TB5kCQqw31SgZAwRjarQ4V5AZJ7JhktxSHdFkK",
  "key2": "7jps63xx5aoA2eVUywkFD5yRizFuxiFAZUWECf5AUcQnoqCUhPZva9qjbsDzUzi8rhYNSdu8Wyn2aBfNMV4T4Xk",
  "key3": "262v3eta4qJmfoeLbZqiMq2PuVi2abBcGgiZmpDu9ZFxeJfwWVsprvAKctXrqi5e4ykie3wMiYf3bJXHmbAkfpSz",
  "key4": "4SCpwWHDNjPRZzLLmoHWnvZPwNuFcScDgSFQs6C8grkYjnqm4944T6sy4NvJTDu1zu7q1rC8j97ovc7YJjBzosL6",
  "key5": "LZbH8tDL5w2ARpLzn5tHjopcLXyqTj3pxyyk8GDe7gFhdiPEnLpNmYSxbCCYHHkNbxkGd5KX3Z5EgLqZG4QtVh9",
  "key6": "2e7ATbJWSnS4RvScA45UJeQGSMuP1pVJgvk4Jfwx6h9DFNfh5tjQPDLLgRCzda7ABqGuqY5grzPaQouRLmVE8mec",
  "key7": "gmp6Q4fmankERnA2pn6Zzsi5yzqN6uvHY55PE6wiyHxu2gg9Zm9jXuBAJtEX39k9EGJwYa8wyfFk2rvGtBRJ5Ka",
  "key8": "447gtrKstjTWz1ey5ncati2ybUk6BZFjmaBLVtmYNTYybYXsiwiEds6LXZNq9d2jQysWbzwMS7HBuSjhVZwk1S6K",
  "key9": "2z18NpjHnkuSKpbH654cSW3HsJK8EXwsENMuUyWynmJEuHrUdCVNc5Y4KoAN4fftWGREcEgHBTohdzj56RxHfd9A",
  "key10": "4ANsocP1gVKoXwrw71aEFapqQcH5tfebQsPcKeQPkLxeLQX9WA8Kyp2z9gkmnuLbGSmZhrHNnxGMY9YPQT78K35t",
  "key11": "2tBHSa8XeHxaEbxmvaAqN6DVcfZBSrzBzeYjaBCeDKv7UiJaogro8eiuP5nyZW4XAmTbDzDwWs66gEJzmLbzjQZ",
  "key12": "2ZBJcQY6p5KaxmgQgqRr21LUJTczxyRfDz729fW1SQvS3bLmc3mHyakroqUGLyK8vdo6GTbn4p8mjWq7DBamDuYN",
  "key13": "5rYw41LsurSn6mYZnKNVp1G32GigwZocqtqt2Gf2VL5wwWsMabtDbAUYqfX2NoRJxkDKVpUKmfJPFP8kUNGexSfb",
  "key14": "4SksXgDuZoX8d2rdJs2PasEyGvU8U3FwnoJ51Hj9irqt6nDCaBqKRcJmT7Zeb8C8HUPQNc3FDMixFWTxezZHntdR",
  "key15": "kg5HkbKQxoEJC2vzpEqbEzhTdUvhzD3Fdr1w3fgALsVbyhU3LvHbQnDoFf9jP5hrihHtvXtjmusrQY6gFAdkRpZ",
  "key16": "Fk5Js9yoaw565jwyzXFTaqyGhXB1P9NoER5MRK1pbZnwTj6TTnRYctm7dDzdLHBR1MeVoFGwQL6qr4eEPZy3T2C",
  "key17": "5LGC7uiVWrwVHQirPDiRSZisiTH3MyqzJKjYWh3uba3PGqpNmcaMTqEvoLEBxAjX7z21JYtsmUQD8RUjwoaAaSmm",
  "key18": "24ZrkFjib8yunBTLQcspKspWuH9NBD91BiHVB2B1MPsssFaxDnzAnC5p2t3aLrjVPkBTVcVm8ej4exGPNq4qyfrS",
  "key19": "3qh2BERw7vSMLDSrYrT6XzG7W32DXT45yzTNaMLFv6SyYyvTG6SctdkmLVqt4hnmMSKczko2NnRofrFiTt2AoL1q",
  "key20": "5jY9T11NxrnoXPMqrRVEnPtEHSUw1uxgN9vP4LTQmYd6BQKQrA4rs94GHtbWuy2ZAKSg17WcDpBjwMDtD2zTEnhz",
  "key21": "2vLH595agqXqoHKwn7M6E56dKcxqpr9VEcdeCxG7EyZVYGuKcNJwqpFy7SYoakf7AhkhQyUXH1KDtk6abL3mbRz1",
  "key22": "2EHhCBvjd2VSmKsAKzk6H781pofsncctCFJHvn47cA56v4fkaPrnohUGJTpyrNHUK4cHULuBukZXudhwn8mktS3W",
  "key23": "61biTM9dhqfvXvCj6DTyd8BhPcK7NX4BUukkfQdShJy7C7EFPQpHpqtJBu5V7rp7ym59y3z6pEKj7HBDSv6bPsA6",
  "key24": "267QaUgeaoP88R4jssE2uw5EymM6LCthpjFififPCzCWw4As5CvHwvxDENBMopVMscgYvSFm9b2vV2QL4XYFfWzT",
  "key25": "3voYsVXn9y5pH9shhYHiC6GBHypy8oD42xkWzU59wndrTeGB9PQQY8HKyyzVunvciGDtTtQKDdJYnbQht5nHTYbh",
  "key26": "61xyG3Mo6CP1JVp1AVPj1RmNryfetHe9E2QUYoEUr8LtEZvpbxZyv2W6s6zjP5nsukVnhrAJuggsFHCBo1GZb67h",
  "key27": "3K34D7p26mbBVAR6adXx5iKCUfkGjqqoafVeSuyFnvcEAzS2FPUbSXZt9KULyQiEbVmTALGWfgQKSDDBBX9gf4nA",
  "key28": "5nddnpK2TvQNE2FnZo785tjn6KVqcrFXYfKnad6rKa4iP382PZX4b6UEkPNPRGEJ2TUAnF3r8DMENoKmERrc6DXp",
  "key29": "2E9STwjVrLjLjXuDxbsGg2CJRVFmKJavTMWcF87hzRRrvjQQidXHwqqVFawD5EYQFBwYunvk9LjHAefJ14UnCpnk",
  "key30": "yHUUeGhQ2L9n2tVcKBYoNvgTbsXUFjtN5nQfLUCY52JRqw9D4mBd58iBHQ1ke18YhriCA5GwBCQaWXN8cwWD7np",
  "key31": "3x55adHQ9mMasxZp7pzoeXjXNiH9ihYRWHijQy9jw3xUzV9jYHGRJPM8BAQHMktL2wNtEWcnbqN3f2B7xKSXoBT9",
  "key32": "416NgGsKSeAAnGxcQ6c9UMHLNNigokWMLgPkEUUhHsYgNHR3T3Hw53K9x5y49HKX3jJzg7iJaV8ZmV4UhUEYs4d8",
  "key33": "2RkySawQ9dGaeknULT6FbFDSKC7FuGS6cHyco8svV8Qy6F1qPd2T67o3HKefcrk7JyHAgRfdfBnesNz5E8wQVQE5",
  "key34": "5FZXGAZJv9Z15N8fLtxQBsgwzu8MTF9DQdqABY6X2qSe5Bj3FoC3UyMS2tM3py7UiaEDKb8i34u1XPGvMy1Ejsa2",
  "key35": "2ffs3P1zns4GZVZtL9k34xV5ypvNSqvN7vBjyA9E55DA8tGpcHVnmxASFmvFJqMwAtT8cHuoBn3DXi58Lrkp4pVv",
  "key36": "55ht3ds93YUy67JWJywZowV3a2Rd2LyteBTdgCLBXs49JVcugG4pEvqmcCpNHTV6WWe3269qS4Y6EV5iSCPFmZw1",
  "key37": "28wYEAL3ei1e3HDuycE7yKFy6zEPQ1tFuNE3ygmi9UFzG4bTz89HdYuouHcyck5sgYScKCb2kCp7RN2RNi1BtZTY",
  "key38": "4okPsTR8S6d7JfgLD6fCccxUzMsx48Foz1bz3wahZNGtQhHkHU4UezaKkfKUH8B93J3pVmnyJFfv2ernF9JmGywu",
  "key39": "59hP7QqokSVFuUY9HUMsmtbRU3zDZmDidtRHGgR8AnaCaoxfmwa9aKpeRaSYvjHYVogacJWPfkQfaQJGLw7A6Wvn",
  "key40": "2ZSyFMtKYCutBxhGE4vKrUmVVxhDULB7JUSu5opURy2kDM2LaiWxDpXqUDVZyZwwJA7129vF7Di2bz6fonNZDpPM",
  "key41": "3NVbBjDpcERK7RLBtNcJeFxry9EYCqPAeBoN7K442nt9PEUfWqtfAaCtx29q4RTx8jz6jhnzkGRhSrPLQ3eTAVod",
  "key42": "mQUkPQNzTGt24zHSUsSDbDFwKvc6xM3Y8CEQuUgND7j3mizVifCt9akfN6a3sNZEwjnwAptHQY31QkAZ6o6rdcm",
  "key43": "kYtcu2Xo1FKBHiCwFFZF1WUaQ5L4Cy7TgXeaA8jzmKXH9xcMTHbLYSHSMsMfGNL6Dw97jNHrFxuLrErvTUTNvey",
  "key44": "2GmM9dSDS4kKCuMyJWENpJnj9kbDdVFSJR1hR3XNxivQGV3uPQA4o3PXptZM9zsUdiXDQDC6BpHSudWZn6UeAnfz",
  "key45": "5kzEJpdRzcqrbfLmyET8VNRAQ2BCDHPGqupZJVHi1pc39zP6fNqxxccTGGMeEsDPwJVMDt1hX49H6codncZfroX8",
  "key46": "3T1Xg1YeGBFeW2QrGBCXwduQRR3py8zyepiesAiUVKjrNSFmTuSPjjNzV95WjmGALtooVbADNqH5ymMZpZE3i1aU",
  "key47": "51TKnd2NtSiBwacrwTF8akvBdpnheRi24ZmwZFtAvMqZabMUXthR8fHssg9dkgu3CzJ4d2CDg8ckN1vo5BRtJoab",
  "key48": "4tCsgpis1LYzzHGdEYULdoCTkvxWpMxTJMakjq67SCqqnSj2kDechPEAbjDMrETiXWqfwheUqAgpN6F4hpic2Cfv",
  "key49": "39va32dSU9uFdzTfiiFDixzHPVT8RTyt1YhtZfaob7Uv9dJchbYAwaMtWNPwM74PzVe5qYv4b3nhk1FW2r94mKeH"
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
