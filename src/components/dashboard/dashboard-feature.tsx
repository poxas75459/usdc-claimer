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
    "29fn2sebT5mQaMvKwk3kfDXNnSxeBMBkn1kUjzWcY9inuFzTtBqgNjTsq2hTzmoNyTRPG1B32NyLxNGiyueXFU2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpQyxwQmD1P62M2GBGkcNTegC26L6efmoCVMpP7sXTnkG3PMXY63hBsozbEwFfzYvX6azwA3FDbXzQKKCA8h9a4",
  "key1": "3GzPyqokU6Eru2NXQnagPan9f98T4kz2DTBpYBNZVTNy3422zeBJ4cnNpLQRtHLj6SWFuC8usztRk1ZdWcqcKAYq",
  "key2": "5uxVhNUnEAaaoNwMN36obQMS91RynDeRSjR9DAukJjQPpo3eTQ23fHWGu5Fg9msHANUQgjsHSHEzGtuXXqp6pMKt",
  "key3": "5PRwVAdgrxDVnfDTdf8KwgPeenK5uU2X97EmdepK1q5FwakpAc5VnStR6PcyTiPXwPsMjJi7iXYNDG4ahWGVJmqw",
  "key4": "4gxTzYVRCZ1aa4E4o8iL31jERT3T534upwh8wWjCxcStr2AY5v9Ce3Jhi3xGx41p9gEQMa4tNsQ9eknjPJRSquKu",
  "key5": "3GaDYUBnfqsTLWqJ8n27wEALKdpdC6Txy7gLue2XJdYWJLivDYLKasyxVYUU67Y2HViPdqhtMGqSF7ZatknvGqUK",
  "key6": "5zdgQqnmZd3qqG6xdjfhXeEb1v9s9LvxWzHiBWRdYRZf8ooSuJV2jgXL1dPzn6uZPsWVaaW921PCxqEBX3m5j3ep",
  "key7": "52bGA291RJdy4qtVYFBwabFx9W6dHTh15MKyA16A13r4Ap4vTqGejcr1Bdxdg8QFNwsTqu7L2WcHjyYqs3XjYDV",
  "key8": "4b6QuSgWR5YYRFXPEehCySudKLmHZeH68fs5hZ3pJk4PEXezBU2aoPcgFandGRyAvrwhaeY28zvqqgNZmmPkvzEG",
  "key9": "4RyQXK5MbGsR6xewVKzMF5QVHRatVuWzG2GqnKLEiLxFUvQKamp3dHX5BjjY44oVW86HyU4AydrowEHgA7kWPZdb",
  "key10": "4ao3cWoKCiUaBK2Jg2whcPKKarrao4Ta7ZhDhyYN1Z4G6gdFscxM9iGizfWjr3qUjz4MTSFyiDvZ4GfKJZTmgHv6",
  "key11": "5APP9NWJjGLHY4qcZdWcozHLxESbV29o5ckoY4uGRoEruy2YfNnWmacXwAGgRhVHAf9UJ9inffYboP7xjWfJeQVm",
  "key12": "2eAxKVmnu5iFgwejGJTpW1kHNEnfon4SumtCGNgCEjKEpTiGhtDDPXVVDA8aYLYxR7HkcN6iteXb58M9rBH2XuKF",
  "key13": "2kYkrYsTjMBsHPan8rSe1MvgZnaY4NEbPX9XGPGnvRQ3oKQ7a4G94zq4AAHrdLn16AoYUkum3U5YduMLPgL9D38N",
  "key14": "3YK84jWqmLUYXKSzrNqUm9PhUcf3ss6cvBR6rLtjhEtxB3NYfz7iuy6oXTTYHF1iT7rfn1uefnf2of5txhAW2Se",
  "key15": "4ZbDsimDR83YXyQPpdFRJD4tE5X83JTUkQp58hrbjDooVbny5nsSdL6uDME8p6jBm5zNE4WLnEvHg7ZTaHwgWrpr",
  "key16": "2xeG9TcZGthnUKxmg1dXV1wXLW7BBkS2ruWoqaR3775hmErKDyEGPhGZbGkFE7Qmkx7gCqggW878aZu7wm813gJL",
  "key17": "5HMbUm7a1QePJpj7vRrttrpwrPgQJDMJRmaJXsv6va8h8neNtEisWW3N6SSANGRE4unHrNDyHSSJmRHewosVFAX5",
  "key18": "4UCUR5DFg2SCUGtJoTdJ2wTmZnixrMVjDKF3L7kABXNx2j5mP3zfRCgev6wHVxBQGmBFDtnaQFBHJDqCvS21v6hK",
  "key19": "3cZRxVgPjBnGeL9vy67UHAzC23F2gu1icbmHSSaKTf2Ft18vQQLCrJdRpHY3PCEB41GDPDGrGEE6J2EmfobUYHfM",
  "key20": "2PxNUiaom6B4fHinhRuKuk3FohWsiXzshX6k4kfDnHNMQErVSTbXVSgmeeWU4GtUMDwoaP7kJFBpn7ML7kU4r7T9",
  "key21": "5e5A2EmKtDaF9fGVjWsm2VY5TPme5ft2Qq4GvtH2CtJdKYjjGkaHFR6YfTUcaTJpeAZ3XWpXn2pZ8VSN4zX1y57G",
  "key22": "zb8u4TrZg89Yjvw2qsrpnNZkUjrtndVXuBbvVZfYxx81YkK517EojX2znAmTLff7tfPepDHzfXStYUrbrYgUSdA",
  "key23": "53KsDYsPdMwCyk43ium2SzDzQnnBo4MQGMhSsn5efjzXS7CYjbQWEvuM6EjbaoNmYxjCjtyoky45jcCT4M1Zi2eL",
  "key24": "5wBvdVfVXyikCKTWZWFq6SUvaN9A3jDmsGASq1WpVcpYpG2tr1qSV6KUmgP9sUnAq3u9Poqgc5Tk8sD2wkrWi69V",
  "key25": "4WWb7mh2ZSxvQznabn1Pvck2g73oawfowRNXaH3rsAFVWFXJaAynXpiNdvJWCd3YQuQxLipvwWkGGKFJC6QQGpr1",
  "key26": "3xioAEh1PLSYQR7Eft2meXVRYZJEF4t9pxNNt3DSnkBbvfBPB27eT36aLhCfh5J5GWo1tDfUbHasnFrSM7WiheDg",
  "key27": "2EkfoLNjTJ9i4DMj8ohzw3ArQFubWW5Li7mn6ehDE3dj98RzKMf9tsa4fU6p5GLuEHFvtg8cmLbKA1CLy34WiLAn",
  "key28": "5mVEQcAVAUFD1SMqiVVZpHnqgUYuTRfegC2oAMcRzYfK62sgHRuGFjECV5kxyVzVZH3wNYxtQMdYncR42VCfC4kq",
  "key29": "53d15wQGdcpqG7RBFymnqyAZAKrPC1cCNfwFk1QsVGni8rGtTfnPGQm1nkNytQiFVYamtAv1mReboD5ThsaRsaHQ",
  "key30": "nc9c3UEgY9voPQywivCCx35LaqSm7y56A7pDn5wMf3hCiYhMR1115zK6T5pivQbrq59jdwbL7RTGgAu76XBMjhL",
  "key31": "3zLC8VAeYMsr8kEzyBKBRs6sxNb6FJ5k9air4UMAiqEabVet6zYBjgcqmT3uiLVHN8g2PTSJUgD46vbhFgnnRv2t",
  "key32": "3WgfPpRbG9wjfwrSMwqU7PJgwDCJpc7vvwxiZsUPYaQvkt2zodmquuM89qXm9bqCSrcueCjRLhetc3daKLaCsUzT",
  "key33": "4wL3eifREN22MvkTWP8VzAtKyEPj2FBfBJvb56QktPUHr1pyJzVGvJRRYFyLqRoA6M9GCGHZZ4L4hazgM2WuM7Po",
  "key34": "4VvRpBHLteAs5PSmAp3hcXcxKM5xPBgpbxJL2UBMJgSzVB5RGySao1ymNnvK4r2q7Y3kg1BmQXB88Gp2wzdSPKfJ",
  "key35": "2KZDhcptYdHVm2TqgWuLMnkDduCAZGnPxK6HKtjBUcm8vD8WN1tzKj4WR36TURY4ajyykGGL2J1oyqn5NzJcPLs3",
  "key36": "3oGe8cwAcUGfcdgxtDJhtQhjzcC68a4QuALKqaabzs8ykXyVR1Jh9LLpv6U8MYGiY2gphMfXEuYGHuWT45NPSS2q",
  "key37": "2WBhcyCX3wN9wFoLcJxdxPPfTdwexPRFDBC6jbv23FLqy82zHTqTAuopQfZYzZMJoRwE8gTVq6Jid7Tjy6rKzcth",
  "key38": "5j8dNB6zhQY4hA1YZRwkHZ79XpYU2ayUeinPALJqdzVW7ziooPw3HkzghKFokKogpVtxhq2fmDomu8rDW6YpgdNy",
  "key39": "iAD1qt8mHaKsa1BQesn37PL5XroUc4JSdqHbe4YBfKgocjL77iY1pDpunBTgnm9NCWcYBcCCA7EBLAznvcj2csx",
  "key40": "4uHaV3GFMhipd5aTUhRY8MkUGsk9kacQLuLuzDfvyfyRcmf4f4d1dbf4qY2NBQHYdTJFJcmXz4gMQjSMWN3RLoK",
  "key41": "5mqoeGRp7J6odmCNWmHXhcsKQfg3XiCjZZ1zthSUQbbAmQtaK8c8snpvnJqwu54dTgNtZHJbX6k9dXe7qBxxX4Ki",
  "key42": "4sx7VK1Gaf5CmNetNnEzbotTKkcz6HP1JwY5Fn1P5fNA5ZprXzybd875D2yM7duKk8VW8sQboZA1F59uosguz1u8",
  "key43": "2TWKdsETTCTe4D9Vvs7qwUs2ohKbWqMmrzast53Zu9KYTVBstMHT7eCJcPpNPupYzfVtpKSuTUn7a7zDe4rEyMtd",
  "key44": "5NbF1AbxcFSbUu4Z8UbDyvJwXUZrbhjJT2ukqH66XmJAZM4uqcapWkMz27rt2MqEKoMHMw6ZiyakZi7eh78qhZsF",
  "key45": "52TvSg4WogyaaSuoVAEiNoh9oXsVwHXc1HBMUJvX39RTN1hfy9rznKEUeCYj7EWdzbLYhWiyLfYNUxSKmhFhG684"
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
