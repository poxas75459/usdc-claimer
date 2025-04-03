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
    "4tfPGTFaSm3JH5UmHJqUXZaqhAx5Qr81BupuDSSVdHkCs8PUuS4oYGAUgSgShazt8VxnbnPukhaPAPs52wyKUx3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vaDBeC3b7S2KnUeDhuhKX32YyKUeRfdgGq6a8NnmowqxUSruWPLHbPMpgnH4xiV59n3AQeaxakCiCbrbi9YWpkb",
  "key1": "2cE6SLHGyV8mmksbZYMsp9QjejwtHtS71K8g8fi4gAxwNfGZPweS3qcJTgHR8Qhk6HtsQsoKVZWeD7SzDFq1PK8K",
  "key2": "4xmVzvbRhnK9ZmUr325kgXtvibDJpMdnanyrg4yQ8TQMLn1jgygHgNmkVh8L8XTahsidZNPg9fUxuVeZiKdR5XDK",
  "key3": "5Zz98ETy2Yu52Ethy3pZyxyTAvhgHeL8BdkHdSeK9Wr62t8PDYuQxnTdTzWTbz6dNHffbcg3JsUkUD9mC9aLW2mN",
  "key4": "2EfZpdPXUcJs7CcZHJFJMZbe1hMrkBPkqfRBHEuNUF9BBL6wdcrpFxhSinFG5fQiJuXhx1UsKP3pmXRjSenJ8FqK",
  "key5": "4UiC5Ub8Zd6QsgBHPutFncrSicXxsYXJkqFMg51whmDHCn8X6chKKBBAixM7CmWPjAmwPkDcUn5F7DWGxSvbdAra",
  "key6": "63JR2djRYUak1KNY8et1X3NR7tc6SGhmmgQm3cdeAV91jWyNDjYXtytCZFATnhASBvShcPRBzhy2iB48DWkXfue8",
  "key7": "4edG1YwVFjWbmf3uJSbBoma5SK6kLoEb7aDag2d9ZHUrwrsf9xxW2NMUNC8MuGkKRdqEi4DxeWNrjmsqk99EXuvX",
  "key8": "Ve3zXqWrqbgw38fi3HxRyyE1faY2396RfFJ2LaYDt4d7gB6xp4arPEXrDKQWR9L6peH8mEYVrtvcrTEofZ5D7JG",
  "key9": "GuQcogmJQYnujM5zt6x1mziXBcEvuDyGcJkEwZUanvbcbP3v99isWvB4E8KGWTDRaB1J49MqVetZwb58ckpM3Nf",
  "key10": "63DTUJY3W2pKshAhf7JUvioEf7B1bk5gVqKp6pBVngSwX3bGqTYBE9nLWLDY7AKX1jsyoBM4KRyNm5Rgi44J6NQb",
  "key11": "4CtwW2UFeLfhy4EJPg7syHsmpvQHP2Ksc2nQMLNieZH5VmiUCv7tRsL5KaHcjAFMebbfH5B2RUzq3mykokcdgkfn",
  "key12": "5tJfhDXomeN9zUCLuY6LTYizUa5bU6C3BgkLwv47YfeqRvibgqydQuHSuvQ8wFAXzQuxUxhXkZBhrb59iv8LANx8",
  "key13": "3NMLv9nt8Gn6USmigQpRPg6ug7Qjjxek3QvrH9Nwz5LWvtqEYGxXmhsN1F3ayxWSiEMX2zBUPZsY2PofVoGk28m3",
  "key14": "3BcKyMFHFDXKsBcdKkkKynCWDXV6DBicpxsp8eAVLPnumHn1MwwgAUdJfHzK6o4YKXMVbm4wY2kQ3Ze4B9T45onH",
  "key15": "4roc5wtbEqTtVx76THYHYgnmTWa9VUrV4hvkQaP1aPtUkdSq1QQt151AuCLhtD2hqNQdw7fmJoGxFTZtYMJfURgm",
  "key16": "44H1htV6tAy7VpjHq7Gfbm7T7NX1SeyTN97P1MNpdBGHjGRQsGda9mGC3fyhzVCc36bsfSSrM2Nz8xNBcTbo5VSi",
  "key17": "gXD8ybrHncRqafguVfDJe4PNPimRjEp5smyKiHt29krxatNx4yuYpcur5Hy9ZaxLWgAxFhBbYDA251a3uU3Agtn",
  "key18": "5EzH4e5EwgFYtSihVg3QhuTmR7qwukh1oPyja93GpQsRo2bBgpwEHHMwtL9F44d9jRDpAsfQuAfKAbCGyTBVGTYf",
  "key19": "64eqXoeyF9yHGciKHya4rE1216LohukhRvCF5vj7s8EUA3jXuYHJb9HVBHa4H4yirxp81mvfsKYtLWgLa1vPwvEU",
  "key20": "4ceCStcRMdjemcAwZ4gJQLNSXaCenJkpPu91UBMUTmgnr9yPw1BXb1usPLRr2tPmQf1DHzNgtuV5oJQsNi5ANkgg",
  "key21": "2kY8MJb1bhSZVfRrsKBxDuBXAfjdoSx4nDFoZded6zSXaZUohk6XwcyYcxjgKmEBEukFVkBaaFG5PSVXqM6o4iuS",
  "key22": "2vXVHgK3zstwi8Ey9nqAUzTnj5h4w9baYHWGtyijqUYTrbKKMyn4TsRxFruRF1wjaJL7JNNhkFapDBFsUGjBvP2f",
  "key23": "2zUVxhjm8EK73dFudDdpCVTZWZi8aHc39opJtXt5wgo2sVGPBcNVPgztateqfXQc6dKr4B7tWYnVCwPsazF8cpbu",
  "key24": "Wv46GQFi1HX77W6Nf9uWd66P5daexxsUPo7mNWipeHAF7yifSAYJZM5QEdSjG72EyJBSgGu8R75tkMe9beGpBPp",
  "key25": "4Ns7sSf1TgsDmuby8X5YV5DHKJxJgz8XUiXUXkisdfS1zHh2w8xAB4NLhzHibMg83WEH7QyKpBFq7Xmc7hdARdf1",
  "key26": "4EbyacF75bCcGWNxtr219a9qdMJAiC8mcYKTnUi9uc7HCeC7LLY3NjtK25mbmNmLqsfp4Q5XgxcATTru141G7EEB",
  "key27": "3SN4Na6DC1iyo9J5U2iXSBiRPVU6XseDEsvi7so8mGkPuiZcDzZhirwc6YT8aNTEFq1xQc4utCi3bpD7K9nFg4k2",
  "key28": "XwVPyG5kq9NEivHSDVWC2oGmWhTREN3T4H5KBqw6W72S1uqzniJPSt3X2hB5Fb8EgCF9EH9qVWsVsPA3poyEf4E",
  "key29": "63Db3xEwyVRUe9g41AtmCztSz7VYsSXRzuRxCGafmfU16hoGkcnyNiuMLe8fZqx3YD6zmy5hjenzpgpu1yWuShVw",
  "key30": "p72p3uv1xb2W6fQ3nzjvz19omg5jvTmonot2himsb5wosuZfLeSnKWnWCFfprucXQyRH54GVCKWAoJKLPHDshG3",
  "key31": "2DZ8bmwPpC5CuoNkDnEJD8efMH2BGwNjb12ai5ALinWixzyx9KAgur7Ekw6G7rbivFVr9YFXPQ3P4Aq3xBQKVyS1",
  "key32": "5m7FBcLE3UGpuKd5h13vkkaQYeQBpFStXDk96hWmR32TQDcATNfmJB7SAg9u4cyrP2D7jzDJANDHNVQ5TppaAhSo",
  "key33": "k8TYwzL3S9ZevzMvnpeagYmAgC3wDmoUU48bm7vut4HwpfaQeBcfHjikZfNhvK4QjV9ksh7of8KdYMB9Z4YhCiv",
  "key34": "573za2kLyufppmYifGtxRpZy2hrFtzwYVcKiRz7anFf4SYyaqZsK1iimHF73DfLy2b97ArFGMys4xzSCfeuAGdV5",
  "key35": "2J3F7H6MtBVaBVs6DMuCBWxPETBhqHQrhuzRg61jQwnRokJNN9k2vCrj3w5tVW3jGHy9bZi5PVFtz8J6xkfMNs8q",
  "key36": "3wMcmt1fmPnbpaUEWHq74W9XQVTBGamHmC7jQ7wXg8Qfw62JivAe8GtdLYED1Dsvo887QeEMVTyCaU798tx482HS"
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
