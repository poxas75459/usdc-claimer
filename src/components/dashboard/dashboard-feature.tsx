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
    "5Dd4TGNfH7mM5PB5szjYj7j8PtPVJBkXRpXPTCuDkkcHtMAwLR2cdf1eowHDy85mQWroLpDsMcWumQJNUsZJpq8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tgDUXLWG2tq6J1iaBhknkX1myQmZRYBaPGh5qnjqAo6wFHTbG74tvMWrWDJzw7vp5k3QWioAkM1gKeQHAHw7NR4",
  "key1": "5hvuiyWQxrXwJbnEMaui6wWuK7jo9tXBTpWnSDVKNgDxuZ5SggdRjsszxr29qVru2UoBFkU6ydbjBvA9fmmxzqiv",
  "key2": "4NczothPk9s2rDmHRazPWGRQAbkHHhdGy7cUvCx4qxx2ohjQA1nb7Y5FEqwjKVaxeQ5oEg2nKZhSMrZVEYB14Z3Z",
  "key3": "3z3BtXBsm6NqzPTAXxfmQcUYG59iNqdpsmfB5geZSTZcqphj1G31PE44mvavveNbna7FKTXcyAYNnwfGYoYLde18",
  "key4": "2kKhMU2nFbEhh4kZfxgNgYtAdQvGqBk15ngrzWjJ9svsEaExjyiXHTwsDQ6di7wkm22yujjyvrq8f4pu18MJqwFC",
  "key5": "3hScNr1qcKj7w5HxMp6XMa5xF1xbzTi7PUtjBaZABNFnsvHo6fShstG9RRdeVzd2P8mjAqx636z3ZAGodtPR8Jvi",
  "key6": "3oLZPSHupyjpadfwJzLSeExxFj5egJAP1YZ9wNVsk4ibhNuXyKvrfpMRPKjHxTco2cjKSkTVzWbRtn1bG1VZow6z",
  "key7": "51E55u3fxQqytosGQDUB1RFbzsPStQkcPunU99rpKrfdccQ5AYetQxrVbG4QrLjoTfoLQEABdu6tmABH6qVDiaeL",
  "key8": "RMXmRUVhonPHePW3jW1L8ESJYYUgZvMuUjnNA7zA6g77Lx8SzmBy4TixMKHN5h2ogC7izr2qrpTZQev6hYQwDXu",
  "key9": "5KBxjucw65ARbGDBWkbqr2sBNDUtmUzHXS7u6wzCraPycRovuyFZ8sSRnb3wR6MJFQLhnxjRpysv4yEBsfa1Hkgj",
  "key10": "3f3SHThWgQiCbNaF8uBGiCD3fMGuAnGhJTAXTHn6ppa5XVjtKXbNLb8HhBeCHSSu8FnrCAUfXYqeqJh7FNuESnoA",
  "key11": "4rP1GVmsy9eghDwQXycgGgLfH9ryfxmXNV19doSn8BkTKGc619mWgrRv8QadHaamD7Jx7cTKu4mkJuQLyv3GZD3B",
  "key12": "Tw1PHNmoxnnZio5gJGG4iU1r5dWCugUhMsUCu96zHABSaifkfnFQwfr6FYhNaCqa1NnNLCDfwZ87ckZVMKDxApy",
  "key13": "5GYko7Vwwb1eNXQCS3FguZdgsEaLyomB1x1jqWcxCY2DzphaCND4HWWKWfoJ52cSYNdX2gNYco7PszwtbkLcEsEM",
  "key14": "pu4z9sXjJqYdBGmqH4Qhd4KpjjpU2M9VQeD7rVu1GWnFz8qkCufC9eZQ6eF2oRTQtu6hTkUFKGzrDTbeB7ysXr3",
  "key15": "4iad57JngxZorKjKrpCu3t2PoNLxEz4XgUgx5pTXk8U75xNsQ9hxZR2f3A8PfQTd3YT52Rmne8G5Viv4Yv7JMwTe",
  "key16": "39hxAsnjWQcWUgq4eGeia2wHNZMFPMr2uhPqCdLXgwQcaSDSHWQM2Y4Q5JUgD88fCmPs7fucDwoMGf9YrCUBSuUA",
  "key17": "4FWDQdHFew7mcSs96htbeEMxe4gDsEK8nubTbvcuo8HkBDbaXPBz1YpyPRnyVydzu3DTjov5DK6Lnd8ZPZ3fEYmA",
  "key18": "xN1EaPP2mRpdNhLa7DEqHd2N7qj6CzWxB4LkffPNHNC2EM8VEhHv38HoCMJtWyuc88dgmvKQyxfSnnEUvioMxEW",
  "key19": "5yfpUv3xVue1cRmnjGnNiv23CQ8X4hVqFFrfu3LRpSVVk4eFeJFEfJ6wQun492DD8n4Tquai9d4wmCjvpXztx8Nx",
  "key20": "hFNwPjQcdj2W9MTBXL3cjMjNvM1BuWZg27yWUxKV7t4vbAtzUmxpWZJmg64kVkZiCAvPeNpkn9k1ndoTH4Z6Yvz",
  "key21": "4Go18GcjzfMEPswNcDFhNtsJgRktYXhGJuEizcZs7VxXCbeJARoiZhV5F1VDAStRf5fksKzXkTDKcHt3K1P89dku",
  "key22": "pxkb9kJwijr6XmQsiSBm9BKZbrJ5womZFCcxBCvx9wmc8fsvmDiAgnMueUzqPDF8gKuQmVnNT3oSxcWGZuwQ8Ev",
  "key23": "3CZapmkQsdELF2PXBEDSD8MwARixCaVMG3rtsPpMJU5WhaLPF6kNEJQuC671Z7u3ermVUmSmxUCdMt4k2Pf5cDNP",
  "key24": "bQ3NDgEuUQJVy4hrav3KTaDAFhAgmVaYwU9HvQRMM5im8CGysxbk2bNyQQ83S2tPJomqbuYCquvmQYjsQeBHHcJ",
  "key25": "xB1BTm2ucKfuAB2cfXdRQd5ywMZyu8LQ4PT2FhQVDFwcqsz1tasJj2WRsmXjbazwhLNB4QyerJRrzwLHZ2UYfRZ",
  "key26": "4t2efE3BvULCJiZi1UuAjT7JZH497xNbBB5ftMYR2stG4HnntbcUdwk49u2fjS2Aw1pRsp2tVy33cicThWjCLsEa",
  "key27": "iR3C21wDt2G8zJffsPhxHMAAKPskdN4afAgZJYVmk4B31JZ6Si2V3nD1yeyZJHSr8nx1B8N4FL5P3kJaoRJ9pLP",
  "key28": "4ipqcwGutBYjhqg46s9wscQ8q6JbX8ueqgXDaaVTLuiUsSscvApa1fjQGquy8jJE3gtf9GyZ3v3F9th93K8koRbA",
  "key29": "5k1DS1Sg6WEh6Cx7y89HuYaEy5H5Ff3d6E8KHSBcu8A4P5bnS7ZRu3gpZUMzx38dqsCT1bwo9snUK6vdsQVSN2nN",
  "key30": "67HkgfqZWHC9koUr3pZ9pMsAM57eKu4RYSiw9Fw59nJaEQVTe1mdLaw35BJfqz9xuEJQ141kvEJC1eXV86BKZhrf",
  "key31": "3o8fEFbcz2otKr6QuEenqYRdc6ym28jSLrwEQyZhGBW9uFAFQFUgFChgrvBxS5tgcwzrV7kzm96Q1EgNx9N9AyeH",
  "key32": "29x2m6dzUuMYmKcWofKZSHHkaDPnWk1muAATxPeETELJxdgRhU37eYkfzwiaQmfjbqeGDM73j7F54aaQ184B3eMD",
  "key33": "PooWhM4q8sdMRxrZwnDM2a6XjuZwFED482XoDvfNyyyNc4wKAG65YJn8gFziMEs9GVwSDWmnT4V4ZyqN2ZQopij",
  "key34": "2jFBdQpuhbvFWAGSbtPDySk45rcg6dMzNMPyhsRkKUdWk5cW5zVTzGzWmM4JUtPL2BZE4dwd2fZ7s8nEusweJpyy",
  "key35": "Hg4r5JQ7PkNG2PD5ojW5NJFVsH8F999gxkW4bFHt929kQ5qtUbW6obJFfZU9QDDY3jpyMTudRqCNfG4edLsHEmh",
  "key36": "5u5SqQ25HDFFyjpnje3akAyRDGTRR8xFWdjPP7apYZeivTnk87pTdyBBQvSu3drzbDJEdSQRXkYKPGtYGj6NW2e4",
  "key37": "67qpkXKyGsQWkNfa7LcugnAbGxcKQMw4Lu4TN3BzHDkk1DHke1g7yWmQrPW9qp6se6qFMwDiXadSjptJAEHqazNW",
  "key38": "3Zu2fZUTM7FLupUMHtALRTTYwrHtdFhj2yCou4a7hVLxxDgWWZFXpwKD62mxoYV7jCUibb6cEouVTnYVXsY97Qyj",
  "key39": "4xiQwkQrrF8MqA1FRjwiFLMbtHn8B8hxzM8rJBz6cGee25jWRLv911o9qAxf1t1j1Yap8XXr6FtwZkoruafnNGYr",
  "key40": "4QCYnqMM75w7ueX1nCt6i8j1fb8i4vjBHnKKonUsHKSPJchAqwWt649SZkBsUt8XURZjCqeQgEpgqrhzW4aECD6P",
  "key41": "5fFcKLHKbS53DDAaTdGQZNnF367VgU6J3YL9xLKF3YwBfGwrDuzRrR1GioCpXjVC1peruhM6TcJxCWavxnq6H1ip",
  "key42": "3Svu1pjtsR8HwnADd4xRDXFw9syqwAYEBe3zpXGfpSAQBF2zYp7FzNbR1zDqMfdcjrJ5aQSzcwA3oXZFFFkBd8Hs"
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
