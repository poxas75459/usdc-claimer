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
    "4xMkryXkHDkKARJTE6sFnqqkNCMBxbpbQfuXmfNEWVZbtJKVc1wFmecYKKoT4wQQ3m6kNp9PNuRBnLEyUsiHkCWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cmVKrBUXoCTpiBoZRxrhSeYHiaYDPq3DtgAyS1x4AVUWLwgYE7tYCyzUa8JV7EUKWieddSk328a2utRdxxQcSNX",
  "key1": "2eT7MKGVMfRR4F26HrPP1p3fTJytzV4RHqUYUgmgbQrD7zHT413pzJNmkgLPh6kLTqgVwMuGFxBsvEv7f5gQut1H",
  "key2": "CidhGV6BS5Jd4ZKPtsLj4TWY3vTL6FdwPTCBx4JiYms6L89JTk62EPdwUs3YSnM88LQTZR3hSh8P32UeUscMdJu",
  "key3": "2fAf9B9EBwQZAG1RLxfvzx3KN6G2PYkWd7bgm2F1vu99VZ1JGGx3zdXBSYGuyyfaoAX6QEgaoUgqDDFTAWJaeUEP",
  "key4": "2sL7RH7JSM99ruBNdwrJUjFtec3atjxFUXt6GdeqvgXqyh92oxChGkJFCGjatTD7Uomhhza4bk8NEiy2itvhJyP3",
  "key5": "JrFGjdwsFXqSszxBx9wD9NcTfnLdHcJHdfLpq1jGuW5fuHdmjsxRvHxtCNzA8K5RgGH67X2HpPecDbp1VgVzx72",
  "key6": "4bpJJa6Z9WzR84b732qnLJPGcJSCmQBVpPovsKX6iMuY8XeBCNfDev7pkcC2b2w8Leht34zmD9J9VMQr5wEhpkjX",
  "key7": "4qoe1cePJBJVqHtZ3h7iP1TQSyf7nKSSEwNZT5xY3PNaWMCdFcJcbFzSN1B4ePGAn1Xbfpa61bgrwinBDUrDfC5N",
  "key8": "2L6kX9QqBtHRqgTmEtPBW1YH6ZNhc7hDuCQrKozAjBibH4PUkKt5uPbzPM9NuLLkhMxHQwcdXViusCmFRB31pExT",
  "key9": "hF4hpaX8G7NtsuDX8gpy8umohdGtuY2Sgr7MUjRrDp9XWcaiJxCXLQPJ4UQ74oWoFz5dJTNF7H2VVS2ZtmA4ub4",
  "key10": "MAFK1WiLiuGABzQZH2fdXMzAab38kEU9gnHXHX3NujoAAJzDic648ZBUtcfjVFxU3Uvom7rKnqBp8brjTLo5PxX",
  "key11": "4jLHgMt27cXfZyzFCCmkduaxrm7S8gneBTtoy38RuXSjYHjwxrKppHnMoT53wrk6W1vAQeJRVVS1CWE2AA3fVpJY",
  "key12": "3Nt9NY9AdzbkcipKkL7fwKKYGr4zLQeG53QYrGUkHUqH3mhCuy8xu23b4zfFFkaaXQun61hybs82rifVg63oXxGm",
  "key13": "2b6shpwzk1bqUv1utoz7PPcUBViJsm6dh2aHdMMFwrM3EDwNTtNdRmr23khyD4UaZ3MDdeHzLHwqeh8hunvuYDJF",
  "key14": "4dPTiyk8wFUuz5dQxpX5tyuxWspy2Fg34aq3N3KpdSkKazzF6dF5j8BeZGYT1y4XmqQVCaWzcuMEN2E6Rq6pcvad",
  "key15": "5EtLhbE9H7np7SQ8X6dhn6HveRdbqbJQw6bLW6q7BbDp6EtStYR7w1W7CSHbauiSnwaCYF4X9zWkYxyRUHpt4cMK",
  "key16": "3ufonFPUnYPri4yDz6TgLPAx6RNes1k9R5iLZdMvwpYHS7vq7eQuiWPtnu5U1LR553BH4hRDfzYa4sbSa5vQaAtc",
  "key17": "MrdHwQziCZXDcUckGjTheq7g4GLPKUMbjmAcNjpiR79QxNdyma7YLRXNRiwuKwXePqz6TgSPu1WF9vtDXkqB8cN",
  "key18": "2sgtrdRcN3uu7po2ZymK1mj6SGHn9xkmDpyVQtsTQ8SUcQaH4yfF4jKGm1RA5fHteqHnrL3qoqqru4zxHg91riZA",
  "key19": "3CkwHBDytG4CqJYFCkEqRsfyiZkwH7PgHi72K27cXTwgJemxgHT7fub1rS7senHM6HGLkz1MQHas5VyktfP3VDGU",
  "key20": "5GagtGiVSw5AhGZi7rf3GY1iTRc8nzU7sJCnK5xQ165dCY3HvW71ALM8yz5ci5HNGu6iaJ2wpfQYJMtfHyhcyBXu",
  "key21": "6LjQmM65MtRSGQK6HVSHfWKoPKedv1WsCMrJBZKQRVDWZAzXJbUKwEChCZ3ZBHgr2jXBXCbrz5gwsGF5YTZbyFa",
  "key22": "ehfGQK1uZo9i3rXfK942tTGkUmJXdzMyWm2GxL3fMuoKdY1x3YvR7zWpGwdjX394RKKLGWTTW6Hre2EdwrREySN",
  "key23": "3evtaF746mHPcgePj3DD6whxs3DyDwkQNCumPa7Se4i7QSQSWjJewjgcHFhQM2eEHFPUYjZYtzXKAx4Fcgq9aLib",
  "key24": "4Q4w6KoZseCrbhWkRM6RYpUg5z4HKnyKfzJtoutJBtFi7C763nLqdGkz3yYsrecaYwKuFKUC6xdgMQHgjeaDan22",
  "key25": "2d2mLs51Eue5dwThqrnbga7d2FGsXEuLvRNNx4gT2FjAm5fuczUZreiSuoEuw85JweCLc6Lnfrz2bcPNmBdjEThb",
  "key26": "5PoJjanZcSiKaoZFFShPLFWNDtMkRokK3W3m4hWFEdaWXcLb2wqWNbPpUG6aEmztz2c5YpHgqXyNTHqJ21xf1Egq",
  "key27": "2wWKBCCdAnPkiS7MTYghk1pHUYAj6uXWYsZRFWnXyCv65BWE1NriKbqor3DNPeY2Cqrcb4JaYaLq3HjEGk6qGijm",
  "key28": "5DE1syd9Ufsf4Hrr8KiJC9WsEo9knR2VDoLEZVRFErXDxUWwEgZAcPLuUH3DXh8838GF6gGYNftpsH5E4F43D4eE",
  "key29": "3PYnaNh4eRWyvFziJZ7MnhozH7wkMgjPdfj68tuTViZmVyLmak6sATsFkwiLs9ZuQLft7AKJUjJ8pJDqc3uQnMph",
  "key30": "3g3NX6QDqUcSb4Q3ddj5TcHUW7rf35ewM2UeHc28yGvhdaJmudY9uTjE3F2PX3irBsUa3JNonwcXhFqxMJTPFty9",
  "key31": "3sXvhDpGMxKju74bcWtqgW36f7mw1ELh4d7C6CRibkvtXZV4UUAGys5XYvnFRiUSQ5bzgDNuFBy4Zzka4v3N5RuT",
  "key32": "5frAboc5HfRb9UgmJqUpDHSpLq1J1H72rqUaGji9sqTVAimCzLDr7QHXSUYFEChttpb5K8UAG1cujd2nWe8YSR8Z",
  "key33": "61CHauDXrLrs2n4ZokFYS213TmqJ1WNj1UJXYrnxGNG1hweSVvNdoPZ4PkzBhYvsU6pR2P61JoDmFHgyLAkEwVgi",
  "key34": "2XmWyPsqXzPJvtYJV79682Xx7fCSYiZ9ebMfpVLcqtunzQmmd6Tdxoj5HFGHRToBcvPZ5b3ofdCyNd2tJuwrGtVm",
  "key35": "zw5PsnpfZBJriwCcJXMPDZyDcHgRUBc2iFEpLFkjNJLz8a4Hikw8dj2tQBTB9iaMKaY4GXe7E3serxJD1dvc4T7",
  "key36": "3taztngCbm2fyCfk2nyPUDbbnwshVXpzK211H2BPtpYE2JWHcwxt6fS795jBdyDCFjejDMNqoDrRnkLCinv1g44U",
  "key37": "3sMVuUbWouGZTA9pVeZ4W5EPXCpkpL4nnuDtdX33U5WMgDqoZ7jtncmEnPPZX556727TLCfSJpMZMMNTe9E23epF",
  "key38": "5cYu7ZyvHVxAPtzE8beV1c4zMjLis4yiXpaeTAkvW3esTtqZvwm4zE3RXh8SESe37yMh27DWWhK5dzRw8GJepaew",
  "key39": "5mWfxbV5G4hsQaWfhipX7G5qgcfwn9mnTeVSFfxNzBYUrhJL7gJ3xWbUDmhkzz1zBAL6QTQ8qjgp5xdeRFuyD5ad",
  "key40": "42a3j1R8LzTbJvR1Z4SJNh8Mc2Pdqvn3w3DnUNVwzX27vGmVzVUUmZ32nXm2gLG8bQWMgVZKuMy7nqW2mAvPU237",
  "key41": "3gvhVMXB12M1fCpjDVzxiDJuieGqZZNvJynqRp7a8YvK7xhTQum3u7bTRPa2wAxC6zMAJPiwK3fYCVDy8zXqiWUb",
  "key42": "5odZpfwNs457agCeCGJzjfqHCJ771H1MNxdfNMhnZrvnbSU41eSyBipVg78UzuR9bwSyWEBt5cPoFM8WaEqxHNde",
  "key43": "2nmM2ovN7pkG9pZoMp3iDAKLKRQcTo4FYs6zaDzYZXQTsf5JvnNToJdCdyY932dCQeBujVdgKfaXJczrVwm6rYha",
  "key44": "5Rjwg8LQW3szPi3ZGZp1cbmSBQYAHWGjkj95Ur96z2XzaXRPW4Q2GWtomStBVy3MKoJX7w8wuKqpsxegwkBGwP9P",
  "key45": "2baR2cUCnBwxczFKatQUbkkj9MURPjwMMgmhbcQS1ryQVQsoV7edXKCjowo9vch9xB99ejYjvWrfDfe6eRRQzM9Q",
  "key46": "3ShifpUUS982c7PLgLWx8gxwWKSykHuXWzbGE258oh8JWzp2owpFfRA7t8BDhZmzavfTEJUS1EknfdcqHCTkhjK7"
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
