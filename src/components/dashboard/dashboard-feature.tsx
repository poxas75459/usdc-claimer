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
    "3sZuSkgVVuUxvNPV9YMuwYGEqRFRGSf9nBTTRufR4KaHtF1SXRUaVtc22c8vuWDkmj3PxjPiMnjxHZuYyyAQtoLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RsYKqSvhdapJjb4Peyh6mZvdhQE3VMoz87eFV8HBjEu4zn2Fk1ym1bXVEwMrd5DQQsvg5qfFQxUjpK5bE675Pj",
  "key1": "46t9Hoc2mxNLzLDDNEuP19hn4rNbX1gmSsJf9DwKMLFUHcau9AL7yRxVFMn6HPGV6TxwHvCDMRHcoW23upTiZwiB",
  "key2": "EGNMZZj5N6p4LEmb7mhcKBE8WHC6Ndabxw7xGWnKVQweGx3tQNk2jZSGtBVEyGStwZ22cWAD59TMSYMXwgKAYuT",
  "key3": "4L4o4tyrYd38B6W9GWMatBDqvi3diF5g3XQrCQbbjZQeDdmqwCvMipg11uyKM8Z3WBCT2mZTUjzvBmCpiasN9RJx",
  "key4": "3u5KuGAB2prUe3YFR7Gpj1Pf8p2bxxATMArcJrUstwhp8HyQGu7Y52bLP2tJewjESEJSJdQRpyhJwtEXqJZprYEM",
  "key5": "Mni9tP6JnAZ3n4SkGM5zXUPL8xEBX1Aiks7bCXeJ52FGrFY8xq5UGiEEe4QGFw1c6T9Tta1ZxEwbpMGxuFQKFmf",
  "key6": "jz5YBzWCmicUr1vYGoWr11sTHDbhYfVGMEjuNSUH2hVE7eAM3QyTg4R6CfVw6DqjQBgrLJt8dJmUxdssVRwxYyB",
  "key7": "23BAXPyLHk2TJNHgm5ZYqh3GpprCbRAgMf4iwTFsdcbmvA5gdmxYriLJxH6daN84umqTTxL6kQChbZHK4PH9CBZB",
  "key8": "5rs23rXMT76w3icpxEJM8967zkdvMmcPiYCYUmnFNZ3387g2CBKXWPdjTfEeL62vG7AZW2MkBbqXgvBf935RC4MV",
  "key9": "aYspywjReQRX18EsvP5qjvfgfc3wiKtB9W54PNFsN4cKWgKY6VdVttnJ33avhVVbpRp9LrgncBZPkXsgnEUWDxz",
  "key10": "4Rvss9Ce21qajdeupqtcbeBJEEhbHhHUoJ4uiyhef53iwkDfU4TmiPZuYPS9vSi6vGAnWX3gpAw6HwtnJXiCSQ37",
  "key11": "nraYLusGtpmW8cLxGwu4UTxBAEX6XKtB1zo5Z9icwVrs4MMaR7SsFnYkB5wvwMqKnyype8PWQUumNH3HvdnyzGg",
  "key12": "5WhMSEEMx6RuQfmo6fZjDx6T2zqqJgqbUrVaE4iC8jUxG4jtfHq3fVwpfdDMsePfKWChmPRodBxFNbjSqhyFPnKQ",
  "key13": "3YDvrrYhXV7rZqmppoF9LoWA95R8RZ4wjyCxqV4B2h4KdNpiRo3DHw6XFwe5kKQpQYq3v7rsttVsRDJVZet7D8Xd",
  "key14": "42WVX298UZHNYHG8qqbA1WynnQXk4dNgmRXAws6dH6DSo4EmKUaMynnyHkDatgrLCSCpMT4KnxN9mKmEwoXoyNcq",
  "key15": "618rBHkJoQhgJr4hMc82y8YQ89tkfw7oc84dsK24vMcX1ajzHTeKLqCoHuvXNwR6et8RTbEWKTFCJtQdoYj4dYcS",
  "key16": "2YLaMWzEs6hF1WazANNGbp3bzkPgWut7k4pLWE6dheR8rf9jvsNYw7PTsEzSuHxms2Vjco5hHRqrCymXQUcanBjL",
  "key17": "2GBT3uSGAZWkhWMJQiLavBQY57pmRjJyzygyvMsck4otf8MpZhhdiUFqUPYB2rPNZhV4XHqD2VjAk2pbVrmnM8q8",
  "key18": "5HjEp28xw8CCHTpHRJ1kcex4NKAyAj76a1iGN8yu2WE9TxbMZWMXtnuaSYY5MXFqwEYZZRYg8a8LspmUoJNkGd2W",
  "key19": "5ZV3AChHmzZwrMBW4w5JGQrT5bDSzccQXKWjgmBLYesCwZXEt6kmHn8aNMBPZ7egLfhoF336rWr8892GEmPPUvD4",
  "key20": "2aNwZvdz1cmfi3Q9mGB6H77hmsDFmwdQ5cxtW5feCMg3Kao4YVUFHDZVYALuwZhPVDrmh43RBy6pPXospHhV6yFE",
  "key21": "31269S3LwWusizbMA3U3jFYDt44kjYwCB6iLFNNHCHn46GnDusJzqUkaPct5DN6feaGzAd8BDBHZCkYmVNxqt1VN",
  "key22": "DYWo5yjAS7XJWyerZ9VbBsPfR7mWEu9WpjdVJcy8uzC2tjZdm9qXHg1kZ9MvS1WPRLVAiPR7omxCvqXAgHyiCke",
  "key23": "38qQm5opBM29hQzFkc8WwHP5TCFsXEFu6Su4tFRivTQFuPmf29XgXu6v31H6SzGucFrUFpf3EhxJiPSo5pfu5Q5K",
  "key24": "2kVy3Ht4ipxhgDEzFabvvuxiWAQty35X96RRgh1XrYVZxNxS7HhrmFSSvm6N2UNeBWmLxR4ph8r78rFyxpf3oH1Y",
  "key25": "2W1chvfjC4tPYbdornTF9LKbxTREFbxEuB5bCsfWaETwTTWkrjxZxCtsk63meuxxJc9Ds3kCrveH3Jg6sTa7wPy3",
  "key26": "4HnMAJ9Fd17uzGzeuxsBjsEwyEU5dnTXyGWN12jQnyNEbYBEtkCj7wyyW9KiM3RuXZKd95VCKGfURzPQLPtvXHFg",
  "key27": "5X9i9272JbzoUzyP2dtyvUZ4Jfi5L37eCSY7LS2qR6FKG6AiVCph7xMWrM69sE2CcBSxkeTJ1GAuNxSgeyY8ytNg",
  "key28": "5c4weZBZVjNgqha5PrUD1Pd1KirRedtwPBHBR81habDFzruBGGrgJQ2hSuf4P1dhoEHK25PyfQfmsS7DnVWmi6nR",
  "key29": "8qJd2BHaDmPxpqxnLmQDZCUXJepSzDR5ActWJe4kTGjHmiiRRaSgyQaXEGQhEtBkWuhKnPTdfn6nT3T8SYdcAJw",
  "key30": "48mJgQXr4F2gqwJ4gZ4GKAv7cM7Cqkoz8yPsh6FWToV4r29mAvXZw78ExBAnP3vM1DQ429HoqREGRHikofiSFRtj",
  "key31": "2kWwuMBnUPGoFaSgCVw1UPqaj32ePgtw6EeS3qL5m9gYUhUS4CqzPaPLouAWm9nnNYX39eAkEsdd5cEBkMkJJkHq",
  "key32": "5tyMPYRhV89NUkMZD2eUesjLKzujsXS3E4bBK9VMKKwNJ6YyX9KLpV8onLpAp3sfabWCMYrk98AMzmEpPY6PWgkn",
  "key33": "2AGCJibERcu7FWGLDdU7Em89rZiZnCManhKZdRwuHFTwCUT64fjUGsQDr23p7jWaN39hr2RdLtuYU8WRzMoHyA23",
  "key34": "2q1bJaK2YcCq9m54xeY1rBhhjU1iTJV7HBgCe9GmjPSbgYh79K6D3jh5DPzhPM7iq2ctTPgVLNpPm5tt357xKQbT",
  "key35": "4F3zLJqnEJ1UNofixpDPnxVWCc5x28S9LdTGEuceUt3EG9omYNrgtAar83ETou8JHNJxpo4CUt7bRMe57DEw4ReU",
  "key36": "MEXzXKKryUVMPDzG8zZwteTqtAbYYxUBkBjaiy9Kk788QRcMdJLvpkZsQkkTK2LJYyZyBxC3jtJoMe17PdjWjTt",
  "key37": "4sgRVcyFG9BRhSos4mSceRAQANjohMsDiad6cVdQTDVSQwcq3vcFKQD8uQMc6B9j44RCjawm2vVMMJf3j3BAZsRj",
  "key38": "4qWucrmeeeiMTVAx6VW2ufPLvFuWYUhDACRsqM88WaFY1zNqDWu6BP9AKWgXvatNigrEcjiWHp5sn2utS8ZG3M1K",
  "key39": "2cmLTUf1Qo1cVHcTzpM2BqBAiXSrMCUP7BmX8G2ViCZgGtVJxdhEu5KuHciz5zFxWWqZQ7u7HqDTCVejPvCUZmkT",
  "key40": "5LoSrjf2fCsUs4QEDA8fKQkZPbSoYd7eTWRw5M7J5hxeteBAUb9d7gQGx6kmH5okxhDSFVbR3gUoXP52NMASNm7",
  "key41": "3243y7BHDse5c6HnCq3yvr288tNUfAJknKFsywQgQzFQrJo7rzhtuhvaVC8MsjdKXydB7ApS2rjKgVUThRmRaMS8",
  "key42": "41ZcrqHPDDYUwn5oLsd9UyV9h3XajFwoa4mGTaGbMKFJdpQWyHkvHkS9aMpGQsbVS21yMU4bKjqGakftokCGdBXj",
  "key43": "3KZNdXzfvp3xyRSDmExsC8Rk8GtTRiJ73sDkSXpQCUr2rYdxdHHPs9UzLJhBb5fyCZ8VcjVwLWe6PMN3f4VopL9n",
  "key44": "rJgC5LEdV1rKVxN2cQPGSJ1bRogjQbJVHYDw6bt2fEQkmpMabfAHWtxzf9BbRy3CkeHuXSWMhgZCH1y7xniGHYj",
  "key45": "4SXd1QZxMpCVkbVNkqtPQmLW41Fky22ccekqRzxWZJbafkUejnXe8MVkhDithNpHLixjyCBtyvkqqjbpEf2jvQ8A",
  "key46": "4sG1cPSywGWK4ZQim9xQGFj9uYXXG58jgoMruV4VSYqdJF9K26W4ZzU8KjV7owyPnNabC5VniYPEiSkKrF2nkoG1",
  "key47": "3MSZwurX187LrQZpai4mrewPqXBijvuu12VAiNWQavnJartRByHskxkzx6p99tEHvaf4Nmv9LeK46fKGSURs2Roz",
  "key48": "4Zwj84uFVX7dCdJKQ1Q6PSAFsaayPkzptCnfHwtoEFu3f4BQyCMcj7ZyESG9djmXXRWL1bXTDFGz4Qzz8rio8ya7"
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
