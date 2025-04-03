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
    "2URLSs8iXBDawGaHnKeqchtP3obS4Rhea5f5QuP4VjZZPC4gLZ414gNjXqho1srZMivkowfmpGu3UrHWVtoqXf75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zXYrRXWhAtGjz3WVGJgnh6V5erGzv4UbrH4DQGfByqyw8euDtqRjpWhNU9czZrk5XBXHUZ4QX1ZoEVN7FCQ6qDB",
  "key1": "5ndsiDpu2uXN6vqhuRt8rC7ne4dXLPrqcM8gJnPG1uar1txBhqSFCSHEEca52B6bC4SDbL9zyPcwPGHp85WcE4hv",
  "key2": "2eeTyGcETgCVcPmDv5RZ4A4dYX1s2MddGsDNaVezrV9U87mXxiq8AtGGPH5XfbjJT6CuxSCdnKPiV8UpyJBycAFg",
  "key3": "u3PupCbRy1qG63uUCeR3LfdbQV5TnBPm6RL6Nzr5xpPMB7DbwHZVB8Xa9k9pUJwfR3A4cLaXTakLBdwSid9kmi6",
  "key4": "3jSJZQ9tfydbFwsN1YRQ2NVPYr7gE1gBppi2REiLnSGUVe6Cs4RZSW8x8LCqoCwFHghRtJ7vmKcRP25zjapYcDQ7",
  "key5": "2dij4VMnZe21E3ygvXnG4j7m4fPJrnpEQrbtCLh3hyR6988kbcXPTqNqjMuEvK28eHVZ5WWQz3m6eN2ojVMxz3Qm",
  "key6": "RymPwuG57iG3xVAu9HeV8GXSLtmAUWxLwcHhVE485RA6hBZYX8nfVsnRFAyuirgqxd2SRH9netT7aY6nQYEvKZV",
  "key7": "4qwnkFNj1qAV2riYPsPBrN3Cpy5g4y6JWZ6w6ffrPYSNW6EV7HXYzS64cANNs6Hij9oeCapSoiMQzgvehTMYha8H",
  "key8": "XDEYRWdgwMhft418tEcFthnH97nJnEnNDrh9fcLxmHobmznkuthpy68QfNiJKarnKdtQVjV4PDn9gUzcTLTmKJg",
  "key9": "2fKL9UU1Xar3YW55SQLkcYNSYU55A8BvDtMmTcfjXuSW72CUWYb1N1mWv8ouKFtP4p4mfqnaKUfnNYxT5bEnFvTm",
  "key10": "2RHL6CeA6NK8v2KQGr9EpYoy21dmFyGZbgDX8GFYZTtKf9BtfaNNBeqcZ7Yxvhw6w2oFTPHNuuP8ecxn9deHPtfv",
  "key11": "2eZGfLo6MKj7SVo4MbZaE6s1NpjZj3JyiXAPWtvBEaBFaB1TrT6Fbcq6CTQ8kC4K54cGarciVV7w1zGHigBowfGq",
  "key12": "51eMn7Qw8zDG9eSvwghEjt3eo6iRbzJirz7AW6rmwE9mGg82hq8ZWHBwoPT9cQnsdsiTdnj9itymA1CUXZactvzM",
  "key13": "5DZE6AjAs3yiSdg9u7WDaArqMKi7KCVy581tsHJYmCbRUpHrwMkstxfuR34vEMFHQpzZKk5gNPC9eEP98gm3K8A3",
  "key14": "2urcwUxK3Wg1MLd4fC1DXFEdSsa12jfpvqdyg4coh24Kvt4PjPCQwQGqvanBTPsgWVT6buSiF45bNCXTZesdaYfL",
  "key15": "3TXcTTGBJwqXyaGkAaAMnZjx8M7eoLmVE6VwqH3UeDTh5CvmraR64UBFo9VuSyLgwmST6VBQNXbMHcVEV8rcKfr2",
  "key16": "658s5jafkGsd7vbibD6DmdnzWgpTkUnxn9VAPdA8nAWLt4XBdwBwQPQJh8zGwXMwUEvLmgxQrq51ePybLFmGdThM",
  "key17": "2cEpdwLLcJHFnFirYxPrPLGhezBmo79Zhmd4RBwsssgC2tzxVQJLE9jWY1fdwjaKFFH5iSfBBoj3EbHVBmBApmqe",
  "key18": "3YaQuuRUEJwV9o5fPFF2Zhsevs2mDFHaBbE3VsBUGGSqJyKP4DycVN8dfcEBb3zLtyzcqJpUsihmCpiLExLh2vNt",
  "key19": "3MHK3nxpsw7qTWd4G1KCAa5c4kqbzmFniBsEv5KV8yZMMH1ttmLJRRd4879FWi34VVj6CowUy2dozwvhYy1Kcj4D",
  "key20": "w19gW5uNPfUAu4GXMPSQLGrCYP5CqhsEqttwzX5Qk8dgxxTT6kjdrLAaMHJK2LMp9sG1ML6rLsZFKbNYFkr563T",
  "key21": "5tvJQNucmq4e8d4D2zXE1fjFjUjFcWT3gsRfE32zxS1AVeEVojAJTJNJUN3rZ5EbmHX6rUVM9nrbuQyVSLE9oBY2",
  "key22": "2LSxqaM2zUjNHtUtYVU1mS65vPS63PaVwrgbue72obqeWHJKBXgBEARdcktYZaDtQffsLwWF58pizPbYhvU79MC1",
  "key23": "2vDmhb5EFVvxCG8vHincF6h6T69SDBnFcsdxAhXGtKA5w9DkDJGKEBY2gb1EKFFm37dVPTjmxMC7WAKHQm941p5a",
  "key24": "3eNjponEvEb8g3gD4KBkA52qzbLsobU9AKsmZ5TkweKALEuvD8gW4EsA2f82jCVLU7E2nKYP5SSJtohW5pkgHiSz",
  "key25": "FzadKw3WURf7jgwjsDf8dDLdJmQEs4kUTkmco877Yt9C3ZtwHYLjfonexR6Tn3w6Qj2WnnG1QxaG3MZVyxNXWsP",
  "key26": "2QPRzBLMJwfqirFYJU7d3sqYydrftvegvmg55XZRmxEv6jzmY5ntjEqbhw998EdkZ1aoetiEsPysYggH6sEkvBb8",
  "key27": "3FxXaacfWyU8UxFGo7Xp3WvBmjDq5Fh84oXvuoUQ665Ac8tVhGqLtBkggVa2GEmDcGGmyMPU9ZWc2jV9LvMCRQr5",
  "key28": "2S4HefmzqTcwXbhH7hq1Js74BWCLkFaHnCgvTdqSoMw12Su4xg9Trjffwn7oBMjHVxF3nRPEDSwpBKJU7pr98mDA",
  "key29": "2W4L165qbXNmGC7tNiBNu3bEoB1S6reqni1ffWYUZmsBabu7pjc6ZSZunHjtXeucjJT4Q8xgx4HUyqPtjQ9Do3X",
  "key30": "2vU5idxT6ahPXv9F2jzY4xG1zUdnsxMDFQQvJuecfQgdKMAozmSdR2KQPhrKkjTZu6ym4rCkkc9RTtzmaz5LCdQd",
  "key31": "35W9u6EiP3fDf6AWUi3BAKsHLpwLLpCLRCUuNGpDXPTKkZYeGTYGd9FnAa3cifPBaVuadYhZN6qc7ASsD7LAHM7Q",
  "key32": "5RyygPJJxnkHv432oTLnASuoYpTigyTbhnyDZ2aQhS7H2EagbLmgDPkv11MPq6DJao37SysSkeNe7ZALzDPb5WAi",
  "key33": "3BuZppNauvnA5Dfbq85epf3rYW1srcug9ZErxiMmA1YaqqtVmADfQef843SxSVEtjBtceAq7x9KCSvdUm7z5HLFU",
  "key34": "33Wnr39GeoNEytHQLxR6pSCuDFMvbxTnHB8TwunNEFtfrifcLFhpvKoNJVMENechPdw4ZSPmUXbegeKJivAE2KW6",
  "key35": "22GabJ7pSMaSxBPeLcsgcHH2S7iPAB1G6rY56BabQDe1ss8yFXmqq7XJVx9rGuphBtHrT41L2QnLpBxxSwNLD5qj",
  "key36": "4yg4s5KXAXwaDnZV3JYDTMeV25mfUgWk2NEpgB4fnSnXh5J1PRDV1ycinw2L4D3Gsr37g9gFDCZEXSEmJJY3V1nv",
  "key37": "4rfwz8D4WSpYxyqytwop1fGWrDiTc1fyuR8bWVKjQvbSYKPqHGi167844pFRaSiL5jgHS1EcRUjBL9528pLvXmmP",
  "key38": "5bSBrHLa5Su8c2dqRstMd2GHzvAeHyRhRL3PUfnZ29E9DRhmGozi42jSW4zzfdpTE3KPmj39ES859jHhFNsySJbF",
  "key39": "6SVK246j2XSzLtPoAijVWdHoxK2sLRxodtcLL1wZsyET5L8sF2NTqPFPjbjoekNWTZhfNNa1C6MNqR4PPfTxvSE",
  "key40": "2CVW7eDk5TbRNFur5W6k8gCQ4hfSDbNCd3pbtUFKRFbzzAJisWQgsViNTxAARdKWqgkJF6Lm1L5GR8dxtT4Lv5TQ",
  "key41": "P6MAYWQAiiL4p6DppYrcseXqQDNnFrmFp1YgKNEzXtGVVwknvsbJzggx6LSfEQywiwBKoTdwFQSJRezZhi6JfRk",
  "key42": "5kceyG6M1s4992hmuYP8p7H3czPp7hptghdi7ZL5mfLc6CQBkMiQwLoNS2mmB29oq3X7dC4vz65QJzoqtTz7QsYQ",
  "key43": "3AjjtxrSb3zwo9cGi79vW4eBRLPi7bVfrc8GdTMrtWgjNTLBCyq2dt2JVmaGpkhZhyjWTuMNCWLYxsjkPF8qZ2fG"
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
