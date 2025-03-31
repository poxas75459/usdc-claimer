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
    "FZw3udouwYozrJHmGFTwsosG5SMWHLsvhvFTpGkwVVysFPLdS2iR8M7dUspKkwhVQyouRUHbmLELXunJ6TtAvki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48yiCjpt2U3VLfdT3pHVfmt4JdrNXiPTiKVHSoSurptHQUCBMVDEa11PND32XFgv6wqdj1wtnPgwFRGJZT6a2QQA",
  "key1": "3LWyoV5qKbxkaNtJftucoNnrKQ2LyJbhGGsaFUJP3vTp5CG5MEyB5AbDGCTJ7fRsJ3gjoE76qwz6zjfh1knrJ1AF",
  "key2": "2TYwRbTj2r944WMFgwx9W5YmsunuU8VNH7VjiZWrCrFSDmX6oEYD2k6qfeEcTYK7cUEH7wGiPbHpqLJaEtLLrK4J",
  "key3": "3szayYXFWToZnzg6Jj5tjsCqFn3AbBe7PV6rkVxCPECjhD7spRxdM2wx7HVnGgptghdxQ31UbKhqiThW5yGh1URS",
  "key4": "3me736iEaAeMLhuihNPzCNZLbdXniE5w5Tg2gzgVdMXZo4nJkzFuwn6A45N5Qh65hg22FPDYnfYbhEvGWFWJ3FDL",
  "key5": "5TSSMyubRdd8bWzi9FFCB56txVmyxmdkLSzUJeiwMkwS9bt7vZrFMBWhDdWYSFGL6ggVTea39mgfLGXKLVNWEy9V",
  "key6": "54vHdpk1xf4YGR6HuKkvbznNZBFG4bQu4cHVF8RojKp1tTzhboXSixCckKvDj43JAmmituST5q93RV2LEEW7SWrA",
  "key7": "4kg9oxK4SrzbYPKhUQFTtkAiZbxASAMfXLr1DPMjEtnb6k2S4gaA9wybUfp3iKXam4JUv2aP5w3Lvu31v8a1krTL",
  "key8": "3BXVvJgEbt5vkvwkW4BzJ6mCui9K16xfLdAmm5xQWSpFb8q43grVeMsDDso5D75HpCcaKE7YwBjm72VdMN6WBQVU",
  "key9": "y8j3QjsVvDDivaeRRzdnZPwTPkaaiyEBE3JZPo1cbDEqA9ETWv5jZAjTcDaXCUz8tgsoxmA8YN158f3pgDCGvqG",
  "key10": "26KkP6EVHTwBpLCDzz1hcy1zHSDmZrY2UURL8d1AGAciKEKLavhkXZtGD3XXAEpGA5suU3u4G24Ycj2jv3s3dNK4",
  "key11": "2wAvnujcqGRT3aQgEeeaSKVjsfvVLAvP9oogK17H5zeAz4PsM8vfDguzmL52STNUk462N1rCcs1RhDsuvqyPnbjp",
  "key12": "mP95zHSbKKqVfuCDEDHDmckZc1YCE7iwiPoegrdpo3MWuNUTMeZb8J1Z2Ni2A3ttCXRLoV9VpBojAhhur7jtJ4E",
  "key13": "i3pg7W7YG76puueGFCKD1ZEjTetFd4qheL6NxcBUUZRagikAj2akMuP2gQ7ppirXu2hxgH7mdLccbwL8sdPVqUF",
  "key14": "yBEV8aoDwtRLovmvnaNN9NRFkzPThsuoSSXxRuj695AQBkt5RUg4iW6HVDdtwYBBcbv14CZPJBawo1pxtk8TLGc",
  "key15": "66RXim7aVxuRQCjD5HBj331xFZSLWyAUV7Axrd5ZtnVU6sMzNyswk1Gmq5sSCLsG9bpMnp3dWymzX3Js5n5CtAN4",
  "key16": "52WmesT48XFjvLPeBePFemP16Z3pR2izWBCcNwkZPFFZAFb9jk1WpnP1RVy1uX1TXyJsH5xahCFgq1bXayEU3ArW",
  "key17": "624iw4Qc2YYEb5TLzu5W5wVi62MjxhF36vyUxjHFvHvpYJtsinCUGT6MpGYtwB7Hs2ZCpgNgSfTzgj7HJvbNd9zb",
  "key18": "tuAJsZz9DYHLdz4h44VLTjaC9rr6q995QKErEu64UvmQvt5fB49JZgsH2UwVtDpHDjHrASxwoTao7Ui5dMTnxhQ",
  "key19": "3QDVT57jvNAn7jQXGN2gaX96qQHsoB3Asjb4VPd8GvMQpeHu91CA7UvmDTfnKi5iFN6iAvwnMc6pSvkLigt26Ffh",
  "key20": "4xLTLcd3CfbWX1PN9FLZPCzCeLFxwh1ouhyPqc1ggBiVbMoGXJaprhQq35SwpLHsTNrdCB3WVQqmXN45CsmPSKsT",
  "key21": "24hh9UtBTXKcTB3bPrXd7mMWQ775gyvVTf7NpvsTqWoGzoqnZFPgpmvNqtAJ6NknXtqT9VxxPHq2M5ZqnJHZj99C",
  "key22": "24TEb113QC1ELhPdTEq15hKcSqZgPBAj3zaE9RfTJDw9ozWkD7ZuNyAFQjBNe8b6P2mueXmQ6L9Qw3RGBWYQFX31",
  "key23": "5gUQ9o8TUFqLyDXkJwqnXruuHrBpsPnDwZQf8NmEgpa5dN9ysvQ1J73yC3AU6vQEvjU3rWmKGC8ZXSAu76T3D424",
  "key24": "6194qgJ9yiEcCwrmhEd1aRjF4gRud7bXTdNxypHyKptWkmDNHDtZvHyjqQT8HCzuKsz8Qqxz6mwxatdXhYr8ew7F",
  "key25": "21sv3qQo7QRvTZ3iyppsnPjmLNjULHrfVZ5XtJxAFNaeREp1z4yv2kosPxvQhy5AJAZYm3RUdxuTi5oqPy9rBqy5",
  "key26": "3LFzRsgjyXo5LhWdrYFSNDEJ4xzva7A6GGdT4GoD4h4HwNtcCTBktjbpFq3rbGmGjD8C5uj8gRoJrR9j6YsFZJYy",
  "key27": "2NjR6xbCHcxB9tVXwQdCy3FBFGJ7bWZVdgzFKxkVTAcUhx4EGdAu9xa3URNQht36FKRs2ENMVckNXdt7gas3Tpuj",
  "key28": "3Db9qUwdK92vSa9zA4mxnZEHqtARdeyeXPJ6DkaW4GbzBFkWaaGPGCdGaqjzAAU86RathqmQn4o5JK1PSaZVw3VX",
  "key29": "53hoQPfyk6BQRtp49V6F1KzWCA7dHrWZY96n2n3kSg2e2GZ3Mc36GiJmhffUksvAu9NyT9wmNB66LHzZumutvZ5Q",
  "key30": "4zECW9hS8PBBMLoz8R7rJFLmHJkoX3ZnspdkKKscqtSzHGF5VGXdQSFMUTaUHHsbaxWQeawuR5fsRwvdFpLMeEzd",
  "key31": "5mLEGuPPYjC191ANkhvMgMDCYcFrHHQE1P39RKCvHcZysyKMA5a8YrhsnjkzM2Nspj5ZzR4HfdZT4AxfdzEtAHZ5",
  "key32": "JkCwt92hLhNBRnQXdW17H3ejx5bJWTh28ouoYqXX5YPg82j4WLQPuUAqneXu4RaaRu9RfNWynSboifS6DrY5zks",
  "key33": "23JDfxmkxETASsN9Vy7gUUruPyUjYesqNdEZ5dga6n6yoNuXXooUeDTuawyWCTvHz1XtpTmRyYEk892y3Br2TYwo",
  "key34": "5v8GL59CD4zYTu4TBehrow9s6FTvj7EqVUPPW2DgRFCnqbPhsoibaywp1QJKNTzpfE4MrvdLzAjiU2vuuF9pyPER",
  "key35": "5D2jEkNfPjBn3Wp6GfbfUdHho1StYFFNArh8YTZJ3hGeHaG38gG7KgVMrZcPMjyxYuU4nHw8qpNeGQhrVNRvsTJu",
  "key36": "iR3ymoeqcJ1dSbDhX532chqddh21KiE4femkT82qtoC1ADUy9aHarutqQPHE3VTnHewVpK3hC476t38bTFmCmhk",
  "key37": "2METPLYeAQvh6js4F6ypbYSBRDLoYUc4hWgwt1UBiRkuPmyprAmjr6ynhVbszJxywXniBpTS99ZV7wQ29y9wMAx2",
  "key38": "2awoKz2M8RWZzegSkyk9961eiAKKneJW2ezZunyexdGQg2W6uX8fB328yuPypvfgJDq4KvLiJpjsLZ5nEnaZR8ok"
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
