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
    "p1cG2Cv7oR4SKUagEHnUcLmpktS7pphZXd5oD7PxeXxbRedykWTocWzyAVwSis9EuTM7SRZa2YwHNAHwrskDmzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U2jjpcFqVBjEhCTgWCY2Ed94E4XEFrnFid8zQ4ydQyMCgjE3Ao43tgWyKF4YiuzXZ248oK94rg35UycWRTj5j5d",
  "key1": "WpfMDKYWYyx9w92QcYSm4tnmpPMVZTZ54eN6dXWj7MsQoQbxB7bsQpaqEsv6mR8S2uVbvozDnJmrFdPA1qWxZXE",
  "key2": "5pbTvWF1ZoV5sZuXg88rwWWa9MFbjqsM6oCDDxEfZSUY7ALjwoReCkuvWREQ8DXnBuYjWBMebYqdMBoYyTPDR1x2",
  "key3": "4fmcWjZKw4sffmDKqc9qP2X43tveJ4qhS2arVadS2NEkANwJmY5iWVSZdmUjPWVKphH9Mh4AC3t5iDq4oQvY7Drt",
  "key4": "9XvPYvUhyfhooFC8pubXupDcrk61Q4eca3iuvBYpPXvU1CxuZKwfjPKmcTJWae4iK1VMcXxHDc5rwTgA1zzAtmn",
  "key5": "VJenCfYFp3fG5omAigGsYxeD4RujQNjCsx4ZZjdk4rzSbthRrJegh4mrxf32Btp9dCEFSLksDgCXWAwY5Trh9Et",
  "key6": "2N5rNqBSeLSEjZwu55K9SjrjAxYGvmuYyGYoto9kmw5c4tpUiUebghZGsQjjr4PJKKmaDdUefhPkA4Wd17FuTNJt",
  "key7": "qtCp8mxkSeEwWe2LaiaTmK1XTdy5j1jfos9rpeMwc3gni9pjyCHTxS8jchvaVJGHdpDomcBj6sZiWGphHekWKeP",
  "key8": "5D2rSLhhVpJGsxoJiEU85qHhr53QNKQeq5wHTeTPiWSCVEzm7qYFYtGoJedT3vU1eitxmnF1WUVypJ4a3uj8qRK3",
  "key9": "2A8YmP4vXb5YmetLxecRGdAXHVtV4XjSadYcdjBvWU5dPvtnYRjePrMyc7gp9tFDxf8jMjPxPAmZ11vDQNLd95fq",
  "key10": "5hX917Ysh3yRtK2DrcskZDRVNkFLgox2EKbJkPYa9EB2jtZgUwxmxuq89LAPDEhuuquaSJX6k72rsQ6gSvqGtKPi",
  "key11": "5BDwLFDRbYAwnJ6Y6bG3Ym4fz9npKrMQFs9XL7nLm5WVS23mNsrNA4v78YByhNqLHdcoY9cGvqiJ4xYy4KvKD6yA",
  "key12": "tLijZ4RywTXmwpfXK9Rb59tLB5q1rtdccpHjYsqyPhuSmWSfPPyoMncBqVV1TCs2sPiH7pt7QiXxvmS9kSFpyDq",
  "key13": "8sucXmrk93qDN5u8R9oSagkLSHaZ85npmza5uViDeBX8LqwPDY6pr8AW9dJm5Kie69BocTkneGZZameg4RazCL1",
  "key14": "v9yYjtTbSxqZzbdP1BDhZpyQqjTWBxj97wTVjrfHDDrwiEEH4UA4CqD3vzKXGh8qkYPRT3o9gnZ3ZxCf6h6EUX4",
  "key15": "29HD3j93oFuYU3dEyZfhmKAK97htq5FQodKwBvaHsEkv87Ti5LNgEdXjaykuEPSDW8EBcB26HrVL8AZNGgMbF5U7",
  "key16": "26cPRnRs4PCLHcLXUtRy2ruFpfXdvzSsk1pZxJ4cFCYr8eELd5AyJHRyDQPnnTM4gYBtD5ABWC8Htysit2YdiQNV",
  "key17": "2At6CxTL5zgvdRsEcMq7j8ywvfUmAMAfVe4Zfh9FfJA3uTA8vBkPDzCrwvpdnk6Bai6FkMQfDbhsPc8uRF48vBWk",
  "key18": "4fc7tmXkFic8j8uLRj9QY814mY5Uv2Zz6kw2wGvVbip9fkqWD9ZMoBnZaWPCQ57ntE1tgvbowYaNW6DnBMhkN1gN",
  "key19": "26LSrpSdtJY1cZ7nBXjb9ZRoze7w2NR4mkpeXpvtm8JKxyUU3QVDX3EbbgFxZPEqcveJWP8UqThzqjDrFrEzXmag",
  "key20": "4xpDPoKaoQTmUtd5jNN1xSPxYo8D1CcuRq6yWGrZVBqCuWa4odMEc1Ufk9wbKnYpbRsMn8bPBJGXV18NMqDskcHZ",
  "key21": "4g4iUr4DhoiBYZPyFdsoW7ZU7mf97zU2phQVq9UNWD63VDCv7gEmWdjmrpcPcnwLLvmf9iQuYKm9q8w4yfeRt2Vj",
  "key22": "4LEm7CaeK9dqSR38yUZy4WSvzTEQ9QJxzBCqDoy639xCHjRW2VwZW9pkRv4Kygme3mw2e6XFWuBptex6NcAP2dpw",
  "key23": "5isJxAMNMw74uocjgbYBqHQGaQ1J2peG5ArasopTiQ39rdvEggTJFgdTntnS3rWbEuxdeSCGkbeGmHe8REeFGHMc",
  "key24": "5eZqs9y9DhBERYhRRFD3LrFVNyi9X3NMGXE6xKtzx1jUhw1oztgNvP5BmDMUfAApqv9vWLC9rYF4hD2KSbExCAqB",
  "key25": "5SkmY4HajtszcuLVjr24vkSZdfm3AHusxdSXUegf9ofND3NpcAx7sS191kXjFJsDXpmEeBB44LyohubFhBA5T3UC",
  "key26": "5nHcGmhtBbuZQ3knwpWBMc1tYKSKttqzNgvuNb7d7ztoVzQFiYRAuXxMRjAGmw46QEu5MeSwQ78rhxngd3jykG1n",
  "key27": "2TgHuGvsk3YiUHGLGEdXe3YUkRMNA2SkDsrdngrzurv22t8pZKdTmUurs9wJEwkkefSSNb2PVbc7uPYNZdPgKUkC",
  "key28": "4jc8pyskDnZumPWiWxxLQMqBDaEFYF2FAoGyNGWBtxRP6Y5wJov47JH8L4fM1ka4oCkYuAP1GMNkJUJ9vstmo5yL",
  "key29": "27QKoMupx5EGeuYM2w7CF9oYDuP6fJzzos1dRdrQMYMa7YRSCfyProagZCBCSASHErwUaxsXjwAx8nJAGht7ZzGF",
  "key30": "p3CSQeAgyMi6gG5SoRSvx3P1S5JpKBsBuNY8zLAxc6yRJtV2V1wBERPz8gTaK8JBoxovhwtjdK4hHnjdEZfn1n9",
  "key31": "2BB3kSQ6kHvpQWPNDSvLQWsVtMEfgfdzB8PdAeaah4NZXntYce1FNvppAgxZjAHJYFtNydyXYdjuK2aRAs8ZTrn4",
  "key32": "4spAKJk8miGC9JF3XiQfpxXcc9FTr2CHSwWn6m1Y3qefYZLqCRAy2Lf3vMDTStq5rHtKxKTpaoGjaTZGp2gbnwvF",
  "key33": "5oBggFKtiUgjZ75j4UYSut1g4duWPFoa1EZbEa8xEtPw9LpZAYYUKbzJ9bbiQxKU8xWNoEAWppZ53KWzEhGjrLEN",
  "key34": "3hjtumiA2G8fxANoctFfDia28faiSsNvFBDa3ZGZ4fWnFQamMnAjPF1uLNbqqfK79h3c7Wv6KQvseM3ssZ9mScuR",
  "key35": "tFBUSKy3Bh85VBrJFrtAoxfut6TaTVnQRpK1vedC5gmYRH9pdBbm2mNvbnFphiHQqfabfkGko2JPup5nJguZyhe",
  "key36": "4Rhf8btRCh6Tg7W17A7zTw2FfeT7u2ubvHDRgM6MPLThrFfbzyP9LAi95QLeDdtopCj4bPtwyKyAA8dZXTBn1RQQ",
  "key37": "5AQH1PVKg9bkJfPDiZjgqxx8RseNSnnRYUvdQ5dqgVC2FDM5JoADQquLUXi6N5f8bF7AzywSzm38VKfj5BfQNGpi",
  "key38": "4PPHCuoSqpzPGVsjMfUBXYCnkHArvxUTVi7recqfP1jV4xhHf2hYMvtzebFQjy6xGxXvumYmeHdKuLTEuMsW3Gdn",
  "key39": "fgT7Ldjk1NTuXLR5MfrJqLnzuKmBXNg8mUeJzAcskZiLoTrFVXzKsaePAboawCh86Q4zmo5JWQFBPnzm4BDuA2V",
  "key40": "45WmruA8jJQ8XfC4CTzYzhU1LaiRk8MLKzN2XGEpkJ99NEk53qTcPFVyFDWpDWDd76zG9rTm81sD1ym6Z118qaPj",
  "key41": "22UetNB6pa6eGQjuRXWxsB7K2RXoNzVVsgRGGCRMuemAwyfX9F8T8LyvLckpRcLDQQ5bzfqXTHWny8enoUTJ4x78",
  "key42": "3opkrQS6wjKgEdyiH23dz2UyoyRYcVzdGAZyU8tjtBMxmk1DW86WHL2ciS7J1Z4swsmaMdjY8HPSrF3Ci6U9mJhs",
  "key43": "242wEy8KA443bfT77174MNPw1SJEwKu3jZEZGzWoSpkZxYwVbVRJvMv53PsGNxi339AemMWTkM1Hh7bpKymAq61Q",
  "key44": "ezY6e5W3NZ3LnZs2xaEY5s7wyerLb8N6fK4P8AeQ43mCjRGeKLbz6RoMLySAF5UE6eYtawe9opceHcLqiQybFuD",
  "key45": "4xTuJsKyREANCkQ7Cfm5My3sUrNbF4aa22azDsvNiyKyTZyyg1SUAzRaWewT2Yaw2duSqMUkYqAKGuhMm94kAtBx",
  "key46": "Qv43CRaTg6EqmDDGUE8BrY4oNQuY272NerR5Z121KjZjBNfnXjsreUJabkkpFnqtJ5KDthP4NHr5NYJxipqdDjq",
  "key47": "3d95jCuNP9xVuDvV65NKT6TRuRjHxCr5xac5GZWva83YbCopJrSeSKvh9R4anieYasKaK6PBTP87jJPHmR3Mtis5",
  "key48": "sNc1kbnUaFQGxFUcc2eQ5eLcDjdnFk8y1Bw98MxvGyJWpJyvk3jkPcHDjrtVZr5jxnC3Vx7BLhq6fCxf1v5B4mz"
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
