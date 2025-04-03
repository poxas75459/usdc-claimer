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
    "1hmqfcFdtRRtCZ4KVyDjxhuEZHxWgegikj5xai12A7B1UmFCtkQmvqsGyT7pMWSf4HpN2xU3w5MZecvDxCPnS1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B1KqkCoPNe2QY4nmm6V26nmMcWz53RWA5og2wWE1wQgvr9AbAezvbn2jWjLy4d4J6gucHVwmmFJ1odWiMh683dK",
  "key1": "2dpCogTDSCCzMvMeRNQ6S4SYYhggiwgynb5ByNgZuWai4eDNS93DpUc1js8iUK3JEWNihXyWDbSfL2PorLM2dMiy",
  "key2": "Jx9zy7hxDeRQMYpjrCxV6ztYG7dVdGgLDLE81UEwa2cw88DSt1pgWgxTBBCttbFLPN7DS783c4AqVVJiLV19FNX",
  "key3": "5c6z39tVdb6x6nRqnLNBCb8TTZK6TDaCfj2ZR2mYzpY9xZdxBq8eDNTEQoKfnk3Q8oXpKgzfYaJXPmVuBdxZ7oHo",
  "key4": "5qPXkGVN7z7AX8JmZiPaGbJrCNYLcnYDDV2akTtH4mYe6ARSNndrk6BrxwEjcN3MM1dv69LkFrXJrkKajC4Cx58",
  "key5": "2c8WrQqy7EPF2uFbmpNQU1YpynSc85gYDPp7cbEW8V3d4at5HFQUdFsbgSWya45DK4ySG8J3bDNVtbt1J6frjnrb",
  "key6": "3JPf5LywtWcbiDZHMzjhfYMvLqpN7LLeQaQeZ4AyM6AzbpBvxsp9bcrdZWYNd2CT9iN1xnHzhGuTuzDEu7wwxJzy",
  "key7": "28prBeqCqwYhfXtymPah7QneuLVp6A5ALqPw1DUrZH6imHFnRUh6UAe47qJbyNsN3YrJHTtVTrgdeJSwE6Wbx4GG",
  "key8": "MxWctKQ1pbytg6j2M2wTGeNuMX7ZqnPZv7r8JfLrqXEeHvd79nvi2QZm2BaBGWHhJso1j15LLjMLWPjaJzySLhP",
  "key9": "46u9mikoxDF6tbCRdcuCpY1FTF5yt8DFYCvHRH3rM6JvMcsfp4pgJoSzUZtrhZAF3CqgjLGh7QF6ohn4s9VTAG7H",
  "key10": "3U7nA7tuDTb823GsXRKmR4UPSG8YYgN1xazsuvfesPPMtzM4Y7eYr9NLDdovix7cckbSF3B2BMB652zz6Cc1KUGQ",
  "key11": "26Pu9TXhn6efAc8XtSe5jyr6zRR7HLY74MyknzAdEFyC9KoJwpLajGpLaZNHhVPjSWHFNqDWsXEn6t8WFWv8MNDC",
  "key12": "2L6Rndc1SotQ4CHrAS9MXQQ4YmcFY1eMvez6WgS1wzEXv5BxwDvUqufjgzfhZn8ZEEDBdHDny7cZwBCLMJiF1MJr",
  "key13": "48RWLR35JYshUA3Nqn2C8dvntPkpCELcrLJzXapCj9H557s18rJjjmWvk72CXgBwV67eHeYdsaoKDpRbvVUYEbyG",
  "key14": "fDZ7uXFZWMiA8AAspZMLwgPBRLLVfFqvsK7JtP7DBf9EkH37fMm5SSAt5LXDymoiVML6s5XH8389LthhKc9hWDP",
  "key15": "31VbdcsgpquYg8oz7PMHYiRkgdJitgaHM6uvTkeGsaNLG3rGP73YEcZkHcyynxChxCK6xaHB4Paxn3EhFd6WkwZJ",
  "key16": "4mV1xQs3CVoJThydVUEzdzspbW4P3VWMu8AMtffMehAhrwqbLkmFU69gcNQriL8zZE3rGqfRX7PwonP8Rox5hUvC",
  "key17": "2NyfGGYeVk39pcvzCPyCuXaW58PT6LNs8SgpJpYD1PLHPcMFzJ7vtYb7bqWHZmnx76AYVQHW73gof5e3NNuZkAjX",
  "key18": "4MfuhJdUSLBRBxGuhA1nHyDH6TdP4zmVLdduPif1BfLThn1msxu1RAd6DyFP9YcCoJp1PmUraVotutz8wJpoL64B",
  "key19": "4GboE6aEZgdbrkA9NGEHM8PbnDB25vmzsqLExyYa99z2RGoNSpJvy5VQ8LWVicrQ8uhqah7xorWudDkogB9HTM8e",
  "key20": "49UdBFQ3mUpDujGvYUiWhumMj134hYSgYyEw912GEFmY2VoVeW5JBj44zktE6wMqarn5rNSkFsHCwSxWRB8gNdrJ",
  "key21": "4EhZEFJaRQPuhm9bJXU48tAiwxS74EgSLnvprLEmwisjjQAG8jF9av5UDgynZRDVaccv3sTaC9JNtbdztV1SWCoJ",
  "key22": "4nVw61mJRSGLDCPNBLaSScZdRPyerFsPS7RygwGrvhU8rsqLLi5rcq1cGtfeHpBEq4c6JyW8RFfxNKUCCCZyCf66",
  "key23": "2Cqmh2vgywPz1ibxi3QcQGbxF67jTeCHusx18CSPqc5AnaoBX5wdPBu8GmS1QiCjjx171ZhSMEPHvy9WGaiqfKuG",
  "key24": "5i7Laz9vW39B7JjtvQcGVntnzKXfmUH59CWM2Y6sgzqzYBSNfWc2zJGXhD2Tc7LDPR34tN9wFqcdzi64aqPNdvaA",
  "key25": "2dwsvQPr8FoesFQMeWRwoaof3xoJo3fvzA4QAn9QsTnRjM25K9t5LdBUoxxPEko4LGFRaTXLj6FguQ55j2zzcQaQ",
  "key26": "2DLYmtfjoxhZEsLFXrRVnFaSeTBruUiTTD1yLdf3Ruao2GUh8RpC9r1GEMraXfix1shTDuD3AN1YfGBAXHRQf3Wf",
  "key27": "YzSDabAMMRwVErYeJz6cYV5oNkELAB2fxKQPge93zpKuykud9mDb1krGfgPZkY4aLjmxj2McViNHjkjdY2Vmzt1",
  "key28": "4CBiCAgS2brwvyKCLLSTW647Ujkx8Ly9NLiJtTpoBWCknMb69yWrph8TPibEHByrnCoFVj7WduAhHAZ8T3MZ8Frs",
  "key29": "zdQ2bes66nRRu8UFjFJ4siLP1g6ZuTj3C5TwtTf3ummCHUGgn1jRnswhFj6xVKS1kSCYuUhaVNpD3uof3KBjdJq",
  "key30": "3NfCYJ3XEkd6Y8in7vAc4ybasYmM6s7yEu56McukiNMfKkwJAWHrSt6Hq8RpbBzGiay8cTfUVyZZMsngiscMrbNi",
  "key31": "hFWp6co1Dh5QKoK2uo3z4J7rJRwZFAn2YAvzd5CiCaMurc4mKmaKgxW58FV5agBe1837FH1NixssgtyXLxKUrHN",
  "key32": "4bMUMSh2Ec5evMbtNi2E4dyVamArgifBBU6ak8J18znQVeqNfMXsmf7rXosHBiqfVxWezXvzpQLPQb3dAEy1wuEt",
  "key33": "DiouLbjxdXbFbVsgZiHdE8sbgU3svu41oQ7cRZAGxzQ6N7CbwjjLye7Vrzk42uH9y98Ga2EqKcJWGHyMftVMsC1",
  "key34": "4UQ8nQr4TKdnnwFQ2cd2vVGUQrEym9N7fz2ohJq9Rq1Z9x7KJWPYViSk7hgTcSwRfwVKqrAFZWoYkrsKLfGB99Es",
  "key35": "21r8v2v7a84AkgNbR7955JKr23oFkkwEAYZpMPc2637kPBFmsG5Vt6akiruhgaFzWH7Yy15YdVR5a4Gkz2qhFN3z",
  "key36": "9EMRDCCnLrJ2NKcx6Aij3qctTk6JYL3UNpxyBoinZVewxXeCb4GHepBYtND1PmtAzAaRzDueF143rf7YAHE6dHn",
  "key37": "4eW4WqkFSkxmGHgXxgtk6yEL1rjADdZYnxp9AJfMhwNYeve8AuidTsXyJzjMsXskyr7fZ8BQyKtaKJPpRU9USTXx",
  "key38": "w2r1G1pBy8aE7hn6wgZubFqCMyS8fv4YBx4eTKepnDTy4UTKdCMrNczfbxGYdhnUXN62rT94LS34XsVpGVhh8Ko",
  "key39": "4VeNKsNopsavs839ZvT6rKbdPzAsdhmfFrwfgNqMPbGX255FU49VkE25MsdKvb6zELE2wMcWAjGXBVfjQJ6hqfrW",
  "key40": "5BF5sZKrzrtXZWejf9UTD75Qv9n1CChLdF6RnFfyKo2AgpRHNLahjoP2vqDUiFuTTQ8kLpJjG7oo4UYudsYmBNdh",
  "key41": "2HUVVux7E1xRhXgymBYjWb3vfMDpcXXJ3fuqR6X1QFQTxK4iUQXRX34JKyjSMNnTHPedgrATVJi1RkUXVkwwPtak"
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
