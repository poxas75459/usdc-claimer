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
    "QBVw9PaNn6YPhYYBYpCST9mRcN3C28LNuL7LUyaUdc4yP8UddYZnn9EkDsxr2rhkYfjs5qjrfgFhzaDdfYtavhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9bXG1V9WtX3i4PcRbuN458GmhUyk68TQTqoVtHusuqs4tEsbYVgjYAVReznj3tPzTk1MPEJQEMD5KRHNAPqokH",
  "key1": "2pZfK2RAWHbKLG2aYStCkUwfUDsutkEdxfM8e6y4ZLk6siQHv6L98oqh571MBg1MDTQKqGaL7bcEK9ASJxvj5QBe",
  "key2": "3oagQrbKab6wd8Zuoc4Ewg3vXUSMCahLXhEFWTXwUL5ANFLvxZegqQGvtM32p7MccHcWxwCSZB2s2icnSUsHgv2c",
  "key3": "5JHfRCsW4M2yC8acuCTVwssEBGDnFW7XToqYQfENHHAF46NgXncXVafJE1WDVGznTub1huwPjprGPqEVSmGX4yki",
  "key4": "3F4vKjnATihTzP69xceh4wzMH85iSyHY6ZJ7TSA7xQvnrWaZT1WskwaCy8zyzwd8MsbKnFDCkqpjFQc78jgfzDN5",
  "key5": "2b2hdavPpWerWNTVCf67rrKaTfYRG7fdWDJXpELrMPoR1pJpWkaEFRH2SDhVXN9c5j66sF4phhednCnQHeW32jcv",
  "key6": "5dcJfr6JHMFcjeNbf6CVUNFitQmoDRLL1sep6SSRs3dffFvqXq2k84p5UzQb8gMCoF92p2ePRAiJQjkvhGN4yDk8",
  "key7": "34tb9KPSxCR6Lq8cr2uR776imcFjb9fgeriPfqCXy8VRWQZid6NTv7o8k7zRZQEoRArQkon7JESQUwFBQj1cPd4",
  "key8": "9dvAfvJM7FcaMGMYZMUsbhFTaWUvgLeq33QPrYzsc39qgwpmxH5EA98tYfW8NGGiHGbLbSSWpayGHakKRBxB3z3",
  "key9": "4thNZcm1vwmPAXXwXkaXqUGhNzjSDRhwid1FTYcYD8m6UDKdScJaBpMdv6CvayP9zioUuo5wN6nLXGNA8gduSKYC",
  "key10": "5zyESVJZoky8d4m8yDjCvh7b8wn66cPm2D4GxSamkkgTTQJnSioQbSNaeKMU68DEDzWPvp8vZSt6mGvwZNt6mfYM",
  "key11": "4FVRtniEaZiCxRoiDgfyDqKGDv2nvccw5PL6QqEThx8G5YjUpRW6w983sHipVr4fi8vdCeHQkFwZFKWJL4k3kBDY",
  "key12": "4heZQ1h7GRbV9PJShysBzD1P9MSr5FCXKYkRmXQ23w2TKeGquqhAPLTo1f9DN4rckX2nKorLhw6GENQyvva4pWcr",
  "key13": "5Yu5FZsZzvTtCH7y4cDdQqokC5nwPfpTA83BQpKSr91xFf4NtLLwgvByRs14QffKNaU23tjsZXuJHXx9ivJpV4RT",
  "key14": "2A99SFCdGp3DeeAUAYdJ6JFhkFwdLHpxqEFywk7VUQvgCiP6H6mJLNhZrtXpqm5HUGQZSexN2mv4pvBo7E4WwuaT",
  "key15": "r1j8g5VAPpPcMBYw5Yav4G5V9PcEGayrDRs6by414VEQAv57fWZdNGa2RvmVRVvHKpPB3qyTaTNBi1e3fUFfizZ",
  "key16": "4vA2tSGAE1nt4jLwttBRa8J4ntBJL8ZopTuoowyB9LiRv3bjovn4axQsg3Rqn7uU24tMLh3PfRnS8kPSdXoHuoru",
  "key17": "2xXewgNi2M3jVPwQ5vEqsxd8P8Dm6PSNxN751GdjKTJLWP2hhMbHokMUWV9P5ZNGk3p6Qvzc56Qp4guipaLJJ8E6",
  "key18": "512zaUua94K5HCAiJj9fm698v2db4kKcJx3fdX4NiLJKL1ZiwFvTocBSaw6dj4TKS2SQrpsr1k95LzEFevuvHCzj",
  "key19": "2Gv23KEZ36pyZMhjjuN5srwAq5zvNjuGNRk3B38Kg8PaFXgES1FmZysqV6Xm5iss9QJkNBQwQkSAyU1eriXZ3YQd",
  "key20": "4NMSdvrwGezkvyTrmVCv9So9ueDNEWu65LsCtDtYCwh5F5S7HVRdd37ZhrQwCC1ktSZGJVcV3GyH3pYAj5op36EM",
  "key21": "48VSz6vJnn7nk9xuQMdwhXmv6CwKUFJdffafNsxDCH69bMVkwBUfHn9jRkB3hQxNeHrHw4VyS7aVaqEprVKeaZMd",
  "key22": "GErGsmMAMayxpc5Gc1BBszV3vREPQns7uo88sZdPuYxfEeiVAc4776V9L4wFeYL4CtyR4pDvx2JVEYaXK5JUDKi",
  "key23": "vuLubmya8tSphZnF4V4DDF31ahFiZgxYDQp9YPaCTXhM9ziFYKGMUaXCJxPZ6APFY8agLzyaVSwcaXanN9hAczv",
  "key24": "3SUaz1DZ86CUZxeaC8dwMz2s11YBwCFGdoDSPhdNnaXjyYB7hbeuyrtdhYNm5tJxM741xZkZ7J6vwqQJ7sDcTwxK",
  "key25": "22KDDwmVKvt2gebzB8iWKdKsFBfKdnLTovBYtuwHaWwDUDJYL5JSdHnUddB6syb45sKKSG8domdQpxohtVgS6Lka",
  "key26": "FqTGupu5SCuZ8KCCXyE93Gt3ww8BNgHSf2KJH9prMKuE4w5CwFYvfsmgVQQ6DXzPoYAyrPU4qjaEw2pPYgCACpW",
  "key27": "2PMFuqGmdfK2ztDCsp8dfVSUCirGmSM9bFPJV5CLNQyScHhuFXoZPzFrgNKh1KxsRYm2uKMtqpNrvdxzE2Vj5aXD",
  "key28": "2Ak1S1DpY8K1Dp5AT2XkgcM3aLTriiEdhYDMf8hSeaVVPESG1DAiXUT9V7pEPAXXEQdpEYoukSYnTqYnf2Ss2cYr",
  "key29": "2RRcKiTZJtphBPKQcgNMFtAG1zwVhhSsK6c7BnmiF8cPWVUuxbpokfZ3yewhfdqVPyjB7TR4GXAz54CBAHgsMK53",
  "key30": "eURtCyQYkhE2TjP8HCWkN7LjPYTe9SQW3athgyr9RxXr858oVvrrKpF2JWPnuATMbXQvHrzJAB6svjnBEVHkXr4",
  "key31": "3EXszB5CHLecvXBvjBu8CUbHG74QxJ9fXZHytx8JtJLYkj7nAnaeVsfsNMHp2VaJ7ykTuqSekXbHPBbYdDpNrdbx",
  "key32": "3KZca8hSnrddBL4QL1aicWnodbLp1rg5DN1byWfoUB9gXBvQfK2PTGEisYaiVTZePMKRNR9wg3SDrAG2TLW6bLmQ",
  "key33": "3uQsBWwzAFpcoQq9GMMRK9xzeBFHC8X7jggJV9ggmWYFM7yoLXyV5t4ze8rduq1YuE1cB2Jq8gHQ7H6RnEw1xqwG",
  "key34": "4FWkjPETkh5cXDGUgknxYkuGysjfuQKdkCSF5qCuR7PPDkiPrvbQKFZLNwvb9pXyi9xaq2P1JzB6t6UexM37Ti8W",
  "key35": "4syJ5pNM8VmtnLuqzLBsk1Caw2vh5RxJU8T5HrXDU7aGDsZkgEfMLZM3sbFEJZdpz9QjgxbyyzM3o7yGMZjQRLPR",
  "key36": "QUPS8jcax3RbfLE68Xsx2RMgb53g8CmP7FjX7Z1DEqJFyEmwdppCR6UfYM4cn6jKW4K8YgadaoUbXFfezksFNUi",
  "key37": "42AruJtjCMpXuVDpYDtakvJ53w8hizJGXxDZquJAdkkZ6X2JPFM6P5zxDSwAM1MgGqo5N5GPoswqJmqwwYVRcPLf",
  "key38": "4Tk5yHYRgDETD2nqWEnyTLwAbAke1mRqWbYad5wERJdGUMmjrbsehTsdF51xLUsViRPWbruE2VMtRbtaqNWM5VH1",
  "key39": "41gx16LaY6WjktkpUxQSnNdvZ6tPB83qeQCnHKLi1gZXK52uNxJiXh52bMxbc5N7K9AbVNTXidsjfv8cK2sLjqF9",
  "key40": "2pJX6GdWKhjdrabkhoNrMNKKSXhVynz8xnLnvZQNAc6awpDzDEFSQGqu9RSVmRfcD4fmKg9M74NeDk7m4t2bGZu3",
  "key41": "34Nnhie1wxaCF9P2Lxj84qMZ4sbq5gDmx46h1iZh5BEiVuhExwCxy3feo8j8fUYNYLjupLfutKUv9Dg9N9UG7ng9",
  "key42": "5a5unGtCsz5UGi7neXRMAwh69sZw3VmNhGbTy7Narj8TDyfGgTjEShB4LbiYfumuay5AnAH13Kr3W79MUzgLhUNc",
  "key43": "G5C8cjNjVACnGgmQvAzwkQF93snJKoioahtxobuXH8gMXZ7ivdXL62UixoLBi9cTpoeWjmBN7fUvwK8kiNVXfsx",
  "key44": "3Z3bUbjg5iQonBE28NFM6WFE68JTi7q369Q3s4jFsKEyRkxW9VN82iYn5akiQEuTZsJZLPzorhdTsaB9tgB3MhCp"
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
