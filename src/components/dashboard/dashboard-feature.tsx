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
    "3Y1Ljb9zBWY5NtynjKfASWucDC73v3q2BUX1PXprR1jFcaW4dHg2gQZwGHCgWUhgdcqfeubAyz8y4KRfZmcmwETk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xwmrQY55mkzgbbHnjJjotc8Cfcb4f2FZYh25LEoegbBhwkwLtWcDH6Fjt8Q1cT3HAXSFkin9aSpzUS7u8tbXNHF",
  "key1": "2ErmLZ5zbsFaxLCVJ3fQ9JzA1Lg4eG2QtoBHkEKPQJChMYJeBZJxepJG5d1DuMzWVZCUvUbHMiaBYFDAbtmcStkd",
  "key2": "3cBqCnupmrJAUWCfHSeiaGd75DFVsDL3iSP51SsE4XUSoaopTzXopBUorHGDq3q8h4oggG1o49WZUrEum8C8gKjJ",
  "key3": "5S9WAsmV3hjN5t8i7EEse3sCph5GAYMAZEg3vR6yyxe5yahaxHWCmJHNBrbA6Jf56SkemJdmpFKwZGSNmFWnDHjp",
  "key4": "2bDdrXdjo5JbAUXScPdHL4Fg8eWpqr4y9HW8ED53gfQDu3vZkZ21rEZJurGNitqsBsH32THfu6CB2okLRNbWYm21",
  "key5": "5XhxRBeFyitbKFGNzaBEU5VKmhqURGkxA8LoBH3gyDsHtLDcmynnmwsGHVToziN6tqyjMiF22aHquobsQhyrz7Fu",
  "key6": "41BSj1xkjn92fNLJKcRi14ciwmEZRbtLDYvm5TXNb4GZLe7jE9iX9z6RRsn6teqng4unRW456vYbuaSaH5L1ByS2",
  "key7": "5BeW7R6AMX69sEbD44QExETwM3EisXFEBQCvsm5ELPPKQitgbDgYxRy3NDB6Qb9ePKNeCPdYEGFEgcekU8CjP5hi",
  "key8": "5US2SkYheHsxs6tb1qNSesd1yVaUYzW6qKUykHhe4qpPz4KCPve2piMujYwVyXUC1usLctjtUzCbCnJUb57LjvM7",
  "key9": "5z9eW91cBYR9rUnfewnM2pZ72ZgMo9n6VmY3RQNQ9kNKdRQC1h9iw5dEwaaMHSkZFdcMGzejGygEQ6gEfWPC7X28",
  "key10": "2wodRbq28mWVh81dJS1G1dWdfF8NRd97CSrTtvi4tZwFrjDASwwz64FJJDJD9f6o1y2BGaNAL9YLEosLV3ituQvZ",
  "key11": "2WGE7XW7xbMCQ2deBYmAsE11VkZTPBbp1iAf9EYcmecA8Ke83V6oLb7VYiNF9HQxSqp8f395MaQ6u7S23yxdEX78",
  "key12": "5XKPfZjCJYW93KpdjLmmDGPtnmRGcqBsPAp9Z6UWC5Twyqxrs3whRhsbExr43CdNQr8bncaEwM5pVviNmaapUz4b",
  "key13": "cH8o6cbbtuDYNsCqMZXpBDFTknbuovJNeQpADn8DfAq9A69gom1YWj4CzfdD73hnfJgsEfmQMThZdfXcDiFAdu8",
  "key14": "25mESGTKe6v4qJxunP4tU4qYz1zGP9jwRoBrVBgT1uRQWE9WGV6ZwUR7APQ23MhjEDe5H1MwiyVY7TjwBnF7CwJj",
  "key15": "KkBgw7b4dkBkMwBEU6hrvdsnLev6aadkSyE12vCSRUThF7ij96pzYQk3EGo9ZVV9iAU2SbEPvSkajSw3hpRFnyj",
  "key16": "4edqdG7tngDkcUpmJwEKEaC4Pmjomg5cQT8ujo6Fkr5J3j4S9TkYU4GD16f9UNpJWFHPbWeDAYgs8mrCGZdbb646",
  "key17": "ffsZ2vDcbF4frGZrbg5Cr95ApgCqyUhsAZakNB8nnLFeWQhyeTFdqH16NAQdiADagzU8F6k5jzX4ahwTWhRM2CQ",
  "key18": "4vJBEZactuhF5bKwXRZjGVEYrJAyHD5HaG6fs4S9FqAxHmFNHJJBz4PMRAGtUDfQZabZ77rZ2jCNtVSGoGD5tSRy",
  "key19": "UhFQetGuLoYgwkwJ63VY2ACsYL6v6Fd97mwUiUvauQEkXZ7YM2gKu9Xyun3XuAUv6yWF2wgpoqjq1agLbbrC8hL",
  "key20": "54dCraftbNsvvjKo2t3mUBwSQdyK8qS5pK5hEWszSw18BphFqBsPcZg3dTLdSSodUwRz5F23rkKrJiDeoKbvUprq",
  "key21": "2MwEuLutcftDRHXUXS44chZTftC9v4mLHcdtQBxVVdHt1z9u8ofSgrDJ98ERVVZjaWxtXttPesrK9JJ5GCCvQsTz",
  "key22": "1sZKzAzvxmgratKQrUrzj8jteq5YFLS7jsnntsq5iT7TCiviA8zGZhjdeJatHSkvz1ykBv7ChhCnMWdDiXnV16q",
  "key23": "4nGbu96xc39hwoB81szq9cUZDoejaG8mdC8YkVYTWAwZcmdVNjZod5h6PdX6nisSKQ37aMt17q6w8EVA6LTRTs1F",
  "key24": "44kDYm9dNBNCNv1nzt8e7fza6iABAnT2kKDKBtfqhsuXHjjwUFBzCnKSwUanW3gtrnGjWqHffwi65isWikmzeG2H",
  "key25": "2CM5Aasz4Yrwtm86p8iH2Sx1vF5aFQbpwsxXutuLqNNtQ1geXof6QHuT44KyXnMewdMUp5eU92HiVJd6BD6fG5kj",
  "key26": "9paqCXWL53TjqKwToKZ6CLjk6rcC6NKP3R7etBnv6ATpRbng2srYkwup423LgMs2wxbe7H68Lm91VopXNbPwUUN",
  "key27": "5djTy3YvnjL7TBXMp3bzG2CaeVhT4Yapi57DJedfcTK1WA5kHcsKCAHgoDVfzcu19o8ayg8AhYKGTSAeFF6zJYQw",
  "key28": "2DL9SVqFepEwh37fRMXULBFmPGK3NQ6TsayKgjV6VetJcyLKkXfAy1wR4YiGiZaAYkN5ocXaeFkaghqVQgiytuyz",
  "key29": "493JRFGeS61nCpDHXbdzTMbwCKe6R1iK4dRHcCWSfVtzKudHbkfgRittTAkfyMg9bZiKDFdreLn7QUk4SPQd5kUg",
  "key30": "4tHhEUoa1GKEt4qbfFeSTUBupKdRaLazoCAVvFzHofgKNZMsobT8rCy2136AozuTZque7cB8snn2XwDZt7R1cNHX",
  "key31": "5UG6CgkpQdwiB9dmCpWmQgZnzgngfiFvUzhAZgfDB5FJpC3pS24D5XQLbTPitcKWxrZ6JAyWCsvXmxYLtdNbGkRV",
  "key32": "55Yq1bG1uSnwdHmDtFuzThQsDPARQjWn4iVnNuTtWgfnpHhaMa5cyqy9EDERrm4f9zTZ2n9WUAiPZwthqXAdEECT",
  "key33": "3TVkaYuvMfwYiwDRFuPhRYBu8KNZMaSFYeKddVce7CjCqC3Ex4VKRVSVX3tSRT7M1aug8ehF96RCa1MXfe18S1cM",
  "key34": "5pxYJAmLVctJsXwD6wLvzCqQrd6JJonyKubKRjNG76LtWdiigWizruQQp6X13uhUWkSCh98b1xTftp8LDJz6tHrE",
  "key35": "2sSEP3YKaPQL8jdLMNEXkkPSkzfvXqcqVQvAY5fUSQN5ZvUKuQVaaBpaYJpu128oj1vY4nkgX7UxbnAqeis2s3Yv",
  "key36": "5wFCb9TXwqNWuuATqpZxqUS79JSo6tX5j6G2uRbMMdMMAsCaPvM9z9Nyb4xFX9d2joha7iPJoaANmBQkodvYnxGx",
  "key37": "2aM65PCMKzv1VA6SA9TqC7Q9Fv2S6eSPc5GxY5usEBHaqS49wjkq4g1wjANCzPZJp3Aoua8TLwTNcmt2ow2tQz8G",
  "key38": "418QdHTxNxEdTuYKsfFB118pjk9zZrBi5ZgdKysNovPsbzVTaKKm99g517yaCZA6itwWMfNwXqQ6CC3PaYVShnPk",
  "key39": "562vNsqrHoQaZBbo5S66asX2xw1MFwJ3Ne5LdSSoudLEXj8JuAoCfzZEmVDR8yjSKkMGeXSCB1kySy1p3wL6hmy4"
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
