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
    "3p1mSV5eELztzHBzTM6G9mCNfYKa3X5HqyxrhPEc49jerovcYsQ5EXEixBfzPz6NVePnGLBpi79kMBWbNGKAJ1Mr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W5P2ghUdiGzwV2byThRhCN57DCKosJ8B6DEybZsLrktdTrAML3rc54uQHespuvGYZp8VkirMNxJ4eGpE35UGSTN",
  "key1": "2eUcz82nYXR8t9pjTswN3W7Q2ueYR37fVMcnGae19vJXKhpoKsy3fgbH4APAYUfsDeB5Pjkc7JZ8jviNxcDNeCwL",
  "key2": "5McptuezaaSvTjvX4KB2zgazT6QSa1byFrVkzmH533SB6rvh7DjMDQ4PQGNjJm6mGrWmtothryNxdCdjMBYQ5DR2",
  "key3": "3YeohhRs6U4ktpDbbhKTf8rvx1Ux1oG9Q4QvYTNMiJF9WUBpoPSh6pbYkQvnrPDb7dUbLw7Ao73MoEJB31mprMEy",
  "key4": "5KBnD1NExb4HUoXePxn4DX7wtAaUbRcZf51cpPHD4oapiLTZfWDzpdsHsv3pzrX6TfqGCZuuBFs9SzF6F8eEcgp3",
  "key5": "58NvyF3ENPcpzfZ8xtP4j7Qn48KJWpFN6WQXiVHQPMFh4zWGZecMhY5cHXZm46bTY3hhYzue18XVAWpJMkWQ3ADx",
  "key6": "3oSmLbPcqwzTozJ8mqAKybeh39sKi5kgwrRqtvHyWMP2qe46skGspyVbbQ5RsjnaJTnmAPTeU36ewLCVQr4FkCSQ",
  "key7": "3vyhk6iZWeDPS24gsUi1YZS5X8oYEDYtc1EPpYWVyGMNRNehidaeJXBk21evGbgkRau7UTTZfdK4WocHdEB3qCje",
  "key8": "2VXNvnin3wvRfzdxiaj3zAPrJYimKUaAMrxhmW8zwpGJCfrPyz96ED18kTV5fUR8ZsJoZcVDur1YGCgd25vy22UL",
  "key9": "2FZ7r42sLcB7cSfzpa2kGn6LYsW3Guzb2KAtWyQDzNMyZbaqfB2uGoYnvsh9MVmAbDzPn7Sno1XCtJbG8eG6Ua6G",
  "key10": "3PxmDg8aXmA8StbzCQbr4pEvoPKb4Y5Swf9CHG1u499n27cuvE4ZxFyskzRtNrL1w3AqrpPLDShTUsr1X1g5MUWU",
  "key11": "5fYS1GZjcMzHmD3LnoH26qL8tKibyiNKJ2UEqgUnu3ejE3aYuouS3kHJNZG4oBZBq3BQJwoKjKsgY6UB71hqhqMe",
  "key12": "52XD1ixTnk626AJLYgH3AJHaYiFReKLj1HwvTmNb2trGD8ZotSyaMNyvFphPMJd9H7owePNPtBCxC8AxE9PZpjjD",
  "key13": "3xKq4RZ7b1AhYWjNqm5Px6WgFa3gubwqfDiwUw6wHsT4oouGQfr5Pvp2ZQBp2MAeu8CCHEBYByKjdX66uCrSbZbh",
  "key14": "5pEZNwxomd6yG71BPnVPSYcPHfttcjLQ5oSsMe2QFAW5Pm2FboV3aLswDBaoLkUGdSdhNopnbUFxjxFL6gWVDJD7",
  "key15": "5Eyhqan3cqixPrpPRTa1DPkzmjJgZn5qorar8ShnyCG8s2RmPYB44rzxQ3Knci6bVki4oG6ey1nWwrn4hZMFK8p6",
  "key16": "2a84y98z8jrXHjDo4qiFXQGLFMSx4gZxnjEvnXDfoAU7PnrgWv2GgregaoNU2hRcbRLfQGmmgtDiDpLdWfGS1BrU",
  "key17": "3LprkVgUoNozApUPqbJC2EHmSyVKmuVG7fYJkT3vxiXx3nFSZ18YZdqid3vHtsNsdbsjQaCy4NvBaTkBs9uuBztE",
  "key18": "4xh9bKBREpBvUr4UMYzVAjsCZwmpw7DNhczejZnpZ5rgub1DtNRpFTD4KkX3fcRczkcYHX6HVvh4Lo1pSRU2LvQj",
  "key19": "2A9szw497JJ1Erj1ai2WcK4dCwYohDgVLFK6DSNz4wuhnqSANveBYhvVJZk9hy5vSsgmLriBKTCfGKkvBhzH3F2D",
  "key20": "3MZifWUoUe72rMBPmfvm4BUaZB1yWV3cvv4JcKtjTnyak8jaCJyAkih455vMUwuPe4fmSF6otqrqzZb87HiBVeL3",
  "key21": "2DhRTGZ9wif2CALU2DSiJcp7aGg6jHjsA8d7G7nfLzKnLkCg2eiTsLgjWttcmt97dYnqoCvs2dCCypdHhWdNDY77",
  "key22": "5fmgkAmzvNABTconh5mPw6JGjJbstZdzZ8vKxhCifmq7z9jGqyNY9v1L6tVgsuwVTJvsuK1NmsJ5CcBec6Fj4Wgx",
  "key23": "2grcph7DeBckYjA7NhTcHboyweg7xEm5azEifnRdjueQtyXkTgsaogXBSyHCDDDyWDs4h7C5GD7MPb7sdK5hjGWE",
  "key24": "2yNoopEy6okoowacXtjqBUUnrv76msDzdNRQzUYKDkVRyvrWMTgmFmrR13yiXKKzqcn7ehnxWoWYD6BoGZKdBUt5",
  "key25": "4XEnG8b6QkPTo8dmE5k8BH8kV2GEdQ3ZThJphpNSmS7hakBQpnVjfnK1XemMjBazU3RiTmo6KKAVbPSSyRxnxKEU",
  "key26": "3Xj1S6P7jauzjztYdCzKYj8WnGR4CRWeVLjRNg3iQg1yYa9nuDYi3bMYtFg54vVNQKJcRaeSyvmUMWbZNUqoYTqm",
  "key27": "3qugPhJag5iTVjVYEheT8VtZZyYZERcBQBiQAAYdzLf5fVF9nTELfceLPyCWEjkN6EPh4HYBJUZrCEzhJixhnYga",
  "key28": "3M6k6cF6M3C7E3k2hJMAZZSTJbyEk25TG5Up6ibaARWzdP678DU1i8kvuHPsdNXB3uBPoaSqsFMRVC947QaYs7WC",
  "key29": "4fhoXG5Amt3UgD5gUfpkrJx3UueciREcjpfRszwPKAcs4m21gpEw9tFUqVkr8YTP5hECpEQ83hpx1gFcywvUHUDw",
  "key30": "zCYUZjV9BSA7bbQqkcq1k1Zudf5i7FkhXAuRzAXcXfpL2tHUmaNrJFKEHJWBJFmdcUyzv7PXUxkDn9fb1pER351",
  "key31": "33DgHujeoydbQpJvFtegYuQD3AWJppoozBd2XeYSF2jgfhJUfEUYVezmQMZrcaLvozbVgUYUDjHM7cganj9zhEof",
  "key32": "3jD7nPzk17T5jq529LHhATMYdfYPvGFNkobsjbY3Qb7Yj2cj1vHHkmSWi7wkaQzVUco8awREdXZzxXZTftYRuvKS",
  "key33": "KPxoM5wmMo2MLvt2XWNERAjWZdXPD1mcNbLuUJE8oKHacSbWGpabb85WfkrCshzNyW6oxGnEXi8vZHXYaKKusKm",
  "key34": "5KBRNZzF3aPgbw82fJfGFmxWx2xHwoF7GaPLTQ3FHuG1kMDStLJi8VWDFoVGsMF1MmPEZVXw4Z46kEk4NUpWVHBj",
  "key35": "2XMmiCgzvREHwsBFwpYanLPEgV31SMJm7eSmCqFtmFYRovUZxsRX3RWVp9prjzPTgRn7ZyrJpZU94wTykE1frcAK",
  "key36": "5Uoc4zCsTBszqfUs6MjZ1F5FJVZUNiZm1G2FF6T1PjnHDHsZgcZe1bhJWynhPRr8BE9KMAJKyMGh5yKxCNaSDKAe",
  "key37": "4TJMfJ33AAXyfC8JRhwYaCNAvugYQBKmCYUozbJV63oWQuGghynjmYwMG6K3vA5XCA9NQYafuZ2T4kQW6URUQYWw"
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
