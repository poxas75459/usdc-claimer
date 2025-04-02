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
    "3NDgq212QBNqcurVjzcpXYc8zhLMCd5cWm4EGGeAW97rsfXmvjivYEmcQ6Ht3ngfeGHnF1eTom7j8YAFToJAqwM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Go6LT46TaxAodDX8DqUcsfTkGqrjJYWxwy8J7GEa5FKRttk27vxudpbBv3TsPtPfHMrc5bFd14auJkD7WbSdFk",
  "key1": "219iuKDsWtjJgXfZvmEZXZ1uiAeFhz5GAPpJLGBCssNjw8Qqtor7MhYPLpHXwWNuMJgBgTSxDVVXK6rDfPexHTsr",
  "key2": "4jpXcm59tuBSHvwVvxCzo6MfP1XX2dNdvvEw2wqAyRvSP2vqi1VKu8VF5Q1d1H1P9XmsxAStx8p4bnEQb8owxXCH",
  "key3": "8AGYjaH9Ja7oSWiGdciDVYJYQz944hTp1seW8thNVir6KnbDacb3XYk6ekSMNa65sBFRrDNj5PNw4vvGUFD81TS",
  "key4": "5TDWjTSHRXcttobjWgC8wxgHZBJVWs3rZDWBHYb68RqbETZaWtEqwN35KtGZAF4dMdNABce1V1SZK1tPB1nBXUsN",
  "key5": "5fVdPwi4Ruj3B66mwG9Y2D5ktpDRvLXCMBcWFKfBJ4zgUPVyjNLLgmGwPArvxrQmRPYQdf4nYSTPfECHUxWAW64J",
  "key6": "3dTNRH9o5q2mmrmoaFHcvNJ5K19WzVMA3xjVpMGsEzD4QHo544jebfQDWg6mzQiyHCzjwwn3UGS6wuoizJzcqw6g",
  "key7": "4tYmZMiswyM6UDWJpThpEVXzTXtwzbBwfNRc3dgkDeuE5YHkQbLDb45jup4891fdJ1uphe7hRxEdmJUdCAkB8fPc",
  "key8": "6ig9VNew7ggyNapKAdvvJqW3wNVeLuBEruvgkAX3ibt1t7rnJeQDJj37KXsjVy7wKqUKizSmSHZubepE8vx9chp",
  "key9": "2M3s28Jv1enmSrE3U1YV4XkCPHrs2FkdF56xJbEPRHZQq56D3KoXiQFnweuCsBQJ7DCB33RiwKeM2K5b4BUVpfV8",
  "key10": "2P9Du4B2sigmVrGZikgZhpVSEaUampm4CXC6a77JLhxt6vnqq2dBqe1HbdEXNUeFXYY8gysijKeWR9RgWVuM3HEP",
  "key11": "4fCbj6SnwCh7EA7TnAGBbT2ZmW6yGdtyCLVXYSREyFfGPpkNQgF1DXexLV9Qur5Y5YhZkb3BRzDECbSDUkxLU9PC",
  "key12": "62Dy4dj3KWoveLQiKF6x9maHeBC7UNhvm6MBz77Sa7NjaKcUbPUYYgaL8fPUqLniMpjGXLfnKbvHhPLpJciZBRfK",
  "key13": "41wTRL9Kq9sAwa6Nzy3SfSU23CfR5WREmUpbiipVjBUkHY9mYBwW2y8Xyao3Cud9dvSLyqYX7Hz3QzWHboWhMve4",
  "key14": "3JFWCXAxNEQTRrCcBWrKfcwF8HQQKsGw1hs7jri1ADf7N5ix7xKVm8A2oUjgQHrT5wQyTTPSM78t5gc9bMKGQYj",
  "key15": "22yvctsTsUzHotrZwe68EcShWK8WtmhZM8EZZ3dQjvcv5rjuMvTeQCgUP7tPMNDnNekrw8Z1q2xrG53cpVFrBfsz",
  "key16": "5o8qN2UKwJ4yPNkdDdcgaREEGFtxFQNSAaYoQUYVyTinVhXMqcfbiZfABXhbXHffpb5roVv4nZ3HFo6BEcriSDgL",
  "key17": "48euVunNDaAn6e1YRDb72hgPJWiPypEYoZtFiBfz8e4MK4MEph31LKyyENrKacFftTfupsWHLjAkWamvNV2vpU6F",
  "key18": "5QNhKwLconjP4xVgWk5ggwQRiERjQDU1zqL4ZYN2rHToZeGgJ4Wix4Emnywzbb2vzWJaPST3WqEg3g67ZDeAMwL4",
  "key19": "3Y5xbqjYvNM4xhS5XpHehmddjkgNhkCRcb9RgeEY775XtZByQxpmJrfQ45d2jo2L1n6QqH6Hd4WhYs1prVcutJom",
  "key20": "Zz3VtVVcHEpeyNbjCXWKrcNMUrGnEdf8EKttcsAuqfUf2CEqJkGmWmgp5y9CaiRuHy7e5FhwQbz61Zqv57VBE1x",
  "key21": "3nuA8CFiYq4HPz4GxAcPj2x5infJo32owC1UDxwS7XsbCPVgxvXLYu3PqEvYhi429UFPYszFH9YDzFyo4vFb6VSN",
  "key22": "2hCt2Xmyw8odycUSsJtHkwPt6Mz8oGGhfgwhicMFG7WHCDksPvzeuZobN5ALovgwTGTG2uBvGHjXy1tC7dXf721B",
  "key23": "4REaRb81E1SHZS2qT86T2Xi98FaEbKgauq4VBk2sMM33VSGUnz37nT3E29HwEmAseRkPvUWGoMvbK8fXQ7G4thfj",
  "key24": "ge2eoTdUPpNwChKP27KprXgVeYRd8Gg5PkGZtJTc3ihin66CH6rmGbW2RqssEVyZWEhgq8ivBtJXrpU6SSPoGDx",
  "key25": "5pTbiuCqURUcVXoemgJwpNCfkQJYszXb2nwsVqmx61UhtRrggzJDGZMzKN1XVxsRCLGF1mn5zEVT9ShkDrtXQYdQ",
  "key26": "47XHL87dh8ZEkUW8KdKwoqb6X6AMbF8VjXterLC5WXLnuEy8jaAh2j23FsT3RSC6DdNg9eXLHgW3gc1hwXcfEhJb",
  "key27": "3KoDvxBiu6xd2M2NVDyNuuuurzRFkYFa2ppVEBC6z9ksywGhXR3xShb9uVu135RFbrBC3wBs7kMHqQPWqcSVmLkD",
  "key28": "2knAtyt57SC9x9tMVVe41gZKUyFpxPZVWTFcTjwg4huZZra885W8UNckJ9Y7eWCojkZfgZASEpWKz4kBq1zLwose",
  "key29": "e9LLfKKD97ioMfeMqH3h2yXxKpndLgXxgKFUXSJkedw77eArBYEgAivvJPo2sAXiPwMKxatVNZgeBKsyAQEL9ht",
  "key30": "SHrUF8mbBnBXMWv4y68fCCasoumP2bXyHSgGC9deg6p4LvPWWuV133HGDASk3FCBQsppp6zcnQL7grgggAGUk39",
  "key31": "2WB4yDZoLB9xFmSGx1uNH7u2zvmV26UDnkZkS7mUyv7L417gCZXYutTTuJxv7mkVwGesm7j5YixTfV7DsHG4xVBW",
  "key32": "kpwghDYCnbvWTSMQuELtG8J6wiA4JYtFZgba6wEZq24FKr7NM4EEod5jAwpS4Nb9w8C7eooVfA6fSnedpgnw7GK",
  "key33": "492veREy4B6TS2hHNy2FHmCaMC48ZKG46jD71YVxQh1KnJyCEnZSRJeVxQC1MDz4rjdPYx5age6eMWnQnY5TvwyX",
  "key34": "22UHjm45quw51A3XQ5boSVHrUSdNgjM1dgnwUXnxc779HLxioXtFDG84n3BCZPQ2KaNf5qPELYiEoMLUTmHaSt5P",
  "key35": "66d7qR6hAFTVjmENW7uYg2X9R8wPd2f8PSanggi3si4M2mZCwNmGS9PqbTycvh9fKfWr421ReTLur9Vg73QyMrfu",
  "key36": "5hZnckN7AHHzFxiSfpb5n9UZZg89LiJGn5bxZTrSaGdQnXSZUnmEe94HSLD8FoQXC5D18GuwGcZwcApkHFruBHCo",
  "key37": "4VY9K6RfhrtUaAWJ6TjgSkSmZwqdLbzDpGpvuW8B1ucAAExeTcwdXCGzSp9BrBcrHszgV1jjhXHvbFt519q9xG92",
  "key38": "4QF3Lprqk4oiZgFMxo4qEzoUQf4JW1qo8NcB5ky4XJe9KWZqDc3xRws87EVZQBuyS5exTBB3y8X2At6eFNCcnJXE",
  "key39": "58PTKpTSocFzLoWhuuAYwv3xyGnuXSvqUqFLbY6WnVRPwR82HVmWKTDNjCzkA1Ad36Uob5FUpUTJ47R9hFgJPaX1",
  "key40": "5uEqhCVeaxSd5tfRLgfoJPms8a7o3WFuvKLcuoWQSuQdV2BK41XU8wz4T3bPcgniTQrHUSWupBtY9WRmuTRncGch",
  "key41": "259YFc2KKZumb1776Y6WYNZVeNWGWo3c7cNKrFCDAua7rDPP47V2BvSmspaNqk3oV8mY2Puj9bdygsSHVRY4ZUiC",
  "key42": "5bina3W3iy4QSFJmYh4cDNaPAmHBZHirohSDKsM8KHxuWYFrdJGGvpFWXsZZRsZzuEiz8Z3axxJpfr3jR9c1PDFX",
  "key43": "4mYrRxjSD1UdqWKSwsAGH3SsNZL8w8csJ8nJUsvnqUggPCyfwarmBfAnxCengiPHTwWWqbh9spWKop33583wzzmZ",
  "key44": "LtucnLzfKaXo4bNZvfLDMAW5PfaYG5aH5rRGRGN6VCBTvWrSb9XYowHsMtwU8RyRYw6xGqNbCw7QYBw5nTYeePG",
  "key45": "2uPpH8J5XFLXKsFosjwaSCAX6PMCGkzGoBLoArfKeMwHAXgmSGYDzKzBGtJcAznimeTnEeidk7qiVRRfyJa2344X"
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
