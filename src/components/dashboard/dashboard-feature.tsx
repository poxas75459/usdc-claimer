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
    "5C97FRh1xWdQ1z4x1PfrkBYiQG6mKLPdpdBxXW7MEvvRW6tXF7VRTobMKqzG31EMEcLSj1eeReERWk8Jtw3CMNsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nf6ogfZVV8E64haDacnChJWKCVwX4RTRkb6ZojcwKouF9LRsLcWvwVnNhjXVVQUb9edyQH8zRZ49TPXxyKgM6Vy",
  "key1": "3eXw47asbXuTJEJpy92rzZ29VW5ZdN8cMcmCUa6j65SU6TbffugoJYKYRij1HjyHWVkyxCmhhbJoKuWCe1RJrgr3",
  "key2": "hmvtLqSL2NYeKumUFXLCywdQe77hE35HyVpC6KKEUsebNnz1WKV2ga29SxBeoGUJkDMNPYrSf89kQnqqATjBGGM",
  "key3": "Yed8EcrAhFbyMTQcak3TdHmSn8ofv5w8TpJAiLtcXNRPjLfWiMmCR39ix2KbLZ1K3e2wgAcqvCqGFY7s7kKcbDz",
  "key4": "DqMCj662TXxgsxZx6vSw859Hu9CzfRtdKUQRWvegAyXdxbMWuEGdHhsbUfLErh8atHFKihasBmgQ2kmwMhqyV5W",
  "key5": "3VhmZF6yWvpHnCgmcLm5qyCS2kTxWE7eNtcwZvBnUzMx7ThMX94Zourszq8c8KzmSX3frzsfgXMmruMVtsfzFcjM",
  "key6": "2MBYk7EBtEQx7qt4mpsKoWwgbDTbtLkTE1iSfneE8czd5hqq9Edex3FSKEpDFTB1532BcwBZsMNCJBj7F5o6YuTL",
  "key7": "3xihGBZC9CLnyHAZU2jF8BdjgjRpZvb4iDG57UKm4iy2carNmo6zkL9PVfZi8WDXcWFfcHEzFD7QfkrEUiAirSkH",
  "key8": "jAmztvWzXe38T7fXjoQR8dRy8v8GWYvZSQVeTHB3Po7n9ZYgRu1f1AG1p9Q18Ax4ffAhTxW368gq5Rhap5RxK3b",
  "key9": "67E7DPotuANCpBkf5YD8ygbDJaZhB2dSxgZUonMPSmCohHuZXH2mq22GUtdMU2NNMfqCDpMhBe4n1oMQukQUajjH",
  "key10": "3Sa8NEk5YYSJoS9jjJGhWUhqBoTnNtU2Kvjmex3hGKLQn9QBpwEWZYe156GeVg288m4QHsGRBG3HmdofmCLLQxro",
  "key11": "3FPgykZeMH1BcWd6GLPhVtXAjcBE5fF7pBizi1aPM6dM4f86bQhsm4mgQGtGYE8noPHQ85osaUcLWud2GZS5WYfd",
  "key12": "326QfexQtrvhqEwF7Ch9iFs2NyZ7qqyVLjYzD7mMDAtSqJjAMRryqSwMYg1CzDg7NsxUWePemGiiC8TJqKEomeAG",
  "key13": "5LV5z8w8JtKzbDWr76WiuuWr9Mc7FCtYoq1zY1hRzPbfkv66kyRQASh5NNKo1pXk2nMXemzowExDMsUfPQpLja5T",
  "key14": "qq5zz2paQfzUENpG6TB8hMvh7ewydHyL2rYheWWrSdsBM5JW931anGDV6u8z8SjXAM2JucvwqzGsPwbiutsXSuE",
  "key15": "QdgwEPaQiurFdPkz9JSSRSPb7v9cUoXXDkKWpNpxqQ6ectRF72ApFEvfvs8Wuo46j8nANjtpTF4XU5GPHR4QnHo",
  "key16": "48MisZqrMTE3RNmyxUMFqPeUVwnxRMizSZnq2jzY6uC49edEmgvYA4G7zJ5fCvNJ92SHZcKpLFk18kkkcrfhHzvV",
  "key17": "4PAhV3YPMYLdwSJTcPNnp8vYERbg1JNTVyfXXWb1JGryG4bzKZSpHRAUCkNtKNdwzuaqUt9m33K5bCSCem93u4qN",
  "key18": "3KZBypsdmU4bAfXQbKgp2gXHHrDEvv6MjuS9gHuWMSRHtRUWseyxarqNdzs1pJkDjNTS6mGJMqDmzJU1c5N4BCSS",
  "key19": "4bejvqb4S8TwHV3nYpVHijLeAgaAEmCLBzhk1NPhVWKJ5KWaqWxFHfBPwdEbn7yhJqB9tTBrWAPmAeB9guy7nBVQ",
  "key20": "5Roh9EHnqgzoA6mhftUwxCqEJQsUhnWgwBZ9RBiLxJjJvTx3Bddo7TTQoXgbWMC7m1uaK4EMnGyqjZLe6j6ucEww",
  "key21": "5HAHyQRiGam9La7sd4tLmHm34yEcXAHr4jrAeR4DscexFL7yReK8Go4DHMSPVUveNNEnPr2MGdczXyG5CEwPmosp",
  "key22": "4WFixSLryA2NVqwJnWAhLoQj13hfJtXMXSKrHpFMb78Gpbm5W7dPFMYm6GAnyiAirDnpQnhZszgrRgVD4pRjBNje",
  "key23": "aKjp4dophLYe4aoDBBmXjoHGTRZMwmXbx7MMr2U94FMdvoy3VYD4pBwTz7WZtKkWDKoNYSyEUeJWQKaVbV9LZ4K",
  "key24": "49TmnrhyuSDGUNpVWmMf8sNeJcGVcnr4QHeXEe9xUUFD2THB7w6RqjyEsgWqVVYuYarfZU6iM9v2UsTjV5A6WgXL",
  "key25": "2Lz1sPhREYeVADRpixBD6pMfi4chRUUprRgeYHKpcP7xVJrFFBd6mditmfBNv6vBmtNcrKo87qJyLyrze6WsRc7Z",
  "key26": "3fqsSs5ZfWopsNn3Y31aPkErKYc9Fm29aRe6MzhcJGmwK7BrbLAA7p4hgbFc2Hs66yt6fPFvZNqJntefVitqxZUP",
  "key27": "23NfYUZyr8NqARzWqKMzoNczVqn3r77kj7icdHTsj1QiiQg4Ufr4p7LQTFqBVdenQfUqwBRMhBj9gKyGfmMQMy1P",
  "key28": "2ju3P73mQoBRsd51nXbsYvptT1ZPkgjBRk5gTpSoLYsYiFQi9FrfaMf5A7sGhBvpj7JTbstuXhPN1GW4Sst8sZDz",
  "key29": "P6KYiaxQENzUyMzPj8PYYvi1mPuxEW3tLYrVvcJo5b2FWRn3oygtvrxnYMYFVmARu1PkApBtCXFbGp27vuTagTr",
  "key30": "52WfsHZvAZNRE9eqGCzqfLR7kh5jmCwQ2d38jsjk93DyXdWsq1tQYq1K1ben2x2QmhBprGLwgz4mNeCDAYHanYuM",
  "key31": "3ruaunGx52gf4iDQVZmxC8e9u1DCrXbthH1UjLhS62ZE3RTqqJkUSBBFyj9Vgqm7KHhNMF8ex2uAyZEm1dmUvSq6",
  "key32": "49ZzBiAFcjci1v58qepbf78dFhZopPw92c39vMfzJyNDt4Hn4K2XDtAYMmWTpwh5Kye2SsBAk3vdpKBuE1omGKfZ",
  "key33": "2gdgq2PA4mj6VtgoTgDdkZ7HK2kfmhcoRZAAU8QFmUzu9EkLGV3Z5N2GFuhASRU5eErRtqGviaqEpZgFaH4nDXjQ",
  "key34": "3pmYi4QsAHLo4Uw2mDg5gJxgjfEpUJj8JfpzXf5zvbC6E3yir41g4usVdPtvnNh1LdXG6WC7bPrUzus57FZahTEi",
  "key35": "4EEDmr3KFHYuLkQqy5xx7cZgVS73u2kRbsaoW16X6ARHNJWCLV2pfR8dSAxa2pePmNaLRU5QMmeyUBQwMJAKg8pY",
  "key36": "3usqznFPBUQ3r5Xd17G2qCQE9YonQ97JDRf4ug3CbCsRFETYvfwRbcV4UX7eCvPL9GVE9Mm8VqaUwj3hspyxcY5",
  "key37": "CwRNgcaN5C8Qu9X8nxgiE8e2WDzuGWXBpU3s6p21BBSnQYAfW6RmptamRfzbuQagrnufEkt9fDEy67f4ZWB9d5y",
  "key38": "NXgSnKLjQU5N6Fuid57t6rHGcpok7nVR1FJqjZoUCUAMtts7eEBVcvBXnsddqMgjRVVp2e3e1ugWenbRvmDMwvw",
  "key39": "4r1ZXehfJUYefuinhNbXkpeBuyuiYTDmzoWniRX8aRdm2LEHNgFqVYxCLRUEAxZfohJcuc5HNep98xP59wHj6MZ2",
  "key40": "3ZFCZ4Sb6rEQSwmVvdkCNUJVeUzz9d69S5T86XpKFewDoDqu8XxzYJVdqZRJW6WpwCaEGZF6kokzkQTciWWzLcf",
  "key41": "8iQAPHQgM4wkmnUqt6e7ZUsXyyAXUAkBxsVsXkS5J5PB5T5GvKnWQHeAgbFoKS4F42pGB4LFqmUN5opsCP2i7KU",
  "key42": "5i1TzBHSsXdmq6Dacs31Efu9xkJK8m2A8vyuN19DipZ7JA55gtS4GypADCpjM1y7rN7fWjcZHoN39kRYp6VFcgRf",
  "key43": "3cuqMCAQA86Q5GikNFr1TiAvAVWE6iXDsvWZMKBSxk4JUjTYGzWCTjKNU6nnZgBRrkFxqxbfyBMvVfJQJhnXZuZV",
  "key44": "3Snpm94TUz6bNM2Sec8S2cGPdjRjz9afmZe4qxd8HCDQSyzEJ6B3t8UG6p7X3sRtkQhyRayj6QCnF5RndFjoTnaa",
  "key45": "3N1unhBTRNveUG64g9fVLzKPQqABuKsJTEJzZeSfo29BMHc5C7mBNo67kW6gusVsrgC9VKJ9UHUiyozc7QY9VTGu"
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
