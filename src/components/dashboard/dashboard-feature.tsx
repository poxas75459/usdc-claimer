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
    "5PcN1NDX12XxYdyahntkpcoBm6hAGdd9ekMYdb9YNFeQHyCMNJLqZZRhwCeBMW89B1LKBxP8sKeWv2igH3DcmpEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DbGWDGD1rXq5nE5S8aDeBbW9zcgQFjrBShqHhLFxzMZ74Eaw38BzeFZ6tdcdfeQWQshzjcGu3YzounufCw7Ns4",
  "key1": "5MUFoS1bxR1s9azEb3hevxxigrRUrzJP4fMGrULnatzheP4zTxJkStuRxmTB985rwm7E1cBR4f9EDkPS3EUKD8su",
  "key2": "3k6MXc5UK9ipvjmDWavFPkcYiThu1tPUhHE3DK8cgbiE1MVbZ6F8Bzk6GnLYEf6a6W1dq8eNVAHzRsB7yyBQAiAe",
  "key3": "3h22QUntU1SZphSVbA5ax1FgM3q9y8fPGp7FjyN8pLgEVemfc2DJhxJ4pHcqFL5sL9CSoCcS6qNQjj9aNFe33WQc",
  "key4": "MynoanmYNC8zxiEHJkQ4gXY5bqxAC2NER6QPhPVZhyLgNzb3JZSBzK2VPvaDEWHRSsqDbz3bwyrJXLKDq8LBasJ",
  "key5": "u3iDExV8oAwDqKrjvJuqXP7UDyZvh7NjapP23VEmYbMwuci6PCFR5QR4s3MBUqWASYzNCnSZjx3mx3FdEGkXWQy",
  "key6": "5Ckgy6CysVDdVEtrVSveP7u1ocXN6AGCefax28YaG4JnXY5qv431AhgijFH5tTRoLxxcQth4zkL7wWjbRZHKqG8r",
  "key7": "4GKgMWWBatkuvuWncwn8dMpcjkXkRou18no6gWYfdaPKm5Pf6D4D3PcnB8aYPo8xssggW6VvAJRt6kH5AcoWTBqi",
  "key8": "4gb68eKNfD1LTSZLFpWc4BDRdda5UdvB3wKoUhXZL2Dv4ZqXEnZqw2Mkqk8s7Q9qxqtCAAnLbqoNUvD9NKDWEjr2",
  "key9": "254V55J4xqDWFdNxFnb1A2T7t3DRZrKS2yx6RSLzxgsnEPZCvQXrUjkejdDk2yCkkZjmirpyaqy1HyS5W9MepxP6",
  "key10": "5RLp5ns8ea48ST7VumLMXqMtAK9obdXwvpbc8d3vufNQEgcQf7hjrHgSrpuze7YSAKptRubQmB4NLK5Vr4eg1Z3t",
  "key11": "4Bb4acu1XyiSegyGKaSMatSgng1Cvf9KUJoHpi9wt8XaEqA88MZojRkvS5HvFV67nX5U6erVckfgS5Eg66SSfYFp",
  "key12": "5oz9VY2QBRjrtuCMMEeQyhKaqLfrvGtVdYGTgbLJGB8ofnmPyXu3UGkJeVZQpT9UKTvmLwDNmMJcu8FDQWJaXLgv",
  "key13": "29bECtyRqrmxjhL2Mx81KUXGB22mmFDaKb7yRjaxTBYNjKtTzfg5DqLgGieNQv8dQVQaVMnu6oHPHd19YXmv5noP",
  "key14": "3wHKUUbsV2WDoBozEqp1ofguMsqYTcFS5mjyxGxDoNi5sbH9hikuXrYQJN4AVCFju8fA1UJMzhJiBtmiqbiv8FKB",
  "key15": "TMw2ggVtjRn4i3Fv14mXVzBPsWXhPSdmJF48qAven3pCqi3fKgKYUChhm2KNaJPmc7TA3H8YhkpMRT9zJPa4E3h",
  "key16": "43zvZiwicS6pP8X4Kcsw9jt4RMcBem6L1UVcV6M5fx7JsTUzoAnJTLHQWXFrUYymZge9aZiJGxYcdBtFUqKjn6nM",
  "key17": "5eWtRUc5odNMstFigTyHuauhpkZ2iA3ZKQ4UDBG25dhBevsZVaJQMnp6rFhjrvrTxfBfunvYFMHEtVZsa6k8Mnc9",
  "key18": "3thuUUEHpk6WG5B1bjK86TVas7odEFmcMGj1k5wjCYtbkr5FuakVGZRM1sAD8CWcqt5EKjdcB3bBcL8cXoAiTHHy",
  "key19": "3dsdeMm1efWDfTAGj9foVnZkPHWnWnohZwjtnF4A4oqZ1KSCPXjp7UdWoTsJrNYoGvv8En1D1SdVeRzyhUbg5pgD",
  "key20": "391dzEFb3Wpox3JfcDmei31MdcuvPw62bvDXy8bsFoHuhZfAmvLU8SiAvpE5jm8agrMY9Ps8PAVuSw5gfbGTU7K4",
  "key21": "3rKksQvpwwQcm8HNSBFFJyWv1zrG7TRvDNRrnvf5rsdigpvc5F9qsVL9LpN5YBhihwUv1gi1vgkMhBf9ZGoegpPg",
  "key22": "3nXArmoEKq1kNtddKUsm45wKs2j9PYwXww4kEYaKwQ7jMHeMFpUphdMa52y9gWJv7JvfWSWY9bXsTL5CR4XyF6ng",
  "key23": "3mfciwkLPBQMhCVciGEEoySKmuqesGfKRoKmp1Dq9pHZX6TECnuYyQgzyKKEJoHgFn6AG2QuEbJiQpYLJ21kYXQK",
  "key24": "5jA8Qsj3rkGoj14gxkmc2fT1rZfUVfx4gCPgxjUD4YRRmaNeng2hybc3kBihfT7jPZEWQLFTWDEmm9y4aRtPCQaH",
  "key25": "54Ev2N9tHqmHBGZoTLuUKxSososevUtGq4GyaeE44FJ6h1ABB2gET5x3DfPcfq7ENrMBMAaWe46m9Kguku6b6D3Y",
  "key26": "4LFnQMF5zTAA2mabh2nc9G5ycLKbYKYzSqRc39YosXgV5azEmMBN3SEu67QeGHc4vmBLbNLmTsXztGhJriTqh6JC",
  "key27": "4mJJjMbxC3G4Ft6eVeADGuGckbp19oPwehBKf3gCvWWfxZkvMke6J1959pU1GHEHf7YtBswENRVFk9pX8FnjZ73t",
  "key28": "4gnsCZnPhwtcbuKsk9Yoyv34yJjzrZgG2WyLdNLyZTekMr9yHRggacyKSQeBAmzhv5KF4YfEwzxH46bLrpUr9r15",
  "key29": "4oyV5XdDLbk6DVcF326eH4EcwRZ4ik44ubqVwP66R1tmHjqc9HS2SfpJx9KMdACr7vVPVkULgWGBdECNbbkN3oko",
  "key30": "4MJnZxVD5nnYj7FDhssN1TzXHabzLAGXu5W89nipZkLJNLB9j87vK7SXiSd9rEvPU61pFESkm2CLCZEcBZrmPfwn",
  "key31": "hACWYnGpbrqaYnZNfQsNPhJosAQ9qJYiiR4kuZvvcEdWWRbmmmwefozZNSFgFZbNNgjyro29jwntsQqgVAxHw83",
  "key32": "Hs2iykDGu7YKxmC4PfUrxcEKyqabaT1kdQ82g5xvtCjA84K8kJPMEnrjoYKjXLhqszaUa8SoNnsjrsJLWQEPXud",
  "key33": "AtnuNkgAwQVhgEyiPAvbguWDV5YMo8wLB8BESupUXibBTG2n3MR1WQ8KiV5Du4p5UiNGP5gwHRwSkGBnGNcbaMg",
  "key34": "TeNnyrtqbmrGuYGZ66fGfukaZBzDYc3y9hSWwr3g8zUEhXdiCSAaBr95rTsVAT7H51SC751QdZwK5kGy67dKneH",
  "key35": "57BANE81iE4uL8V8dGPnbRSKZNvartEWJRU3p2jwXVFVdfVzb6RUqWDiBu3wofcz4G84hXTG24rdDReHcuWWmAV8",
  "key36": "UzmCHsBuru4EDEGanfR3nubaHvqAmgkmx6HoAZp2MdfyJToqwDHQ5vGZMFh9iPmQwMN3w6jgDGLYkNDVMxWtUG9",
  "key37": "n3GoB3ubeuQ6t8ofQAQnMbnAXSTQ3gM6jXRxcenBCSxpUH3BPC4dj6sJs49M4RzsmsDfS4gXfsStXx32fNDrrPA"
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
