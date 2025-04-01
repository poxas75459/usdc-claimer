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
    "kauYXNKHaiy6wiWYm4oVVni4xLB6qDgxnhSMeA5eSEht1fWNtPssja45JWBXukn6M9FQiRs546CZ9gyWtZYcQJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zbF2gSfqJvbDC5ab5t4jQ86NTnPWhCjRiFPTfW1E1emw5FTKcfzcDYQBVyR35ACfLfbunLs3TxX823DnKbAVvcH",
  "key1": "2tniK4AwRfrGiVeNdi47SgLDxXX1kRqi5gKiSSoyftuRdfH22c5YHk9AEZ8RDZ9YArECVFRM6zQPQQMzmbbnezQv",
  "key2": "QBibMxPffFSMdqEQXr7qyFuu4Lo79xXw3Vumdsa3KpeoJTQkstJPC1zWcRNevcDcL4vrqigDwqzEhL9ACRXEAGn",
  "key3": "3CQs8THNELec1i42pHFqvv4wMTeE43HXLG1nQntNTsNyQCPA3MKeLepCmwvAxorVMV9NmbMy5Y51hiPQdKbsh6gE",
  "key4": "3xuePVtMCUTAzg2EFxKEEMc4zcv2PRKpjk155BCWZdzaX2XKBeVcxa1c4Uhdmkg2YDKaUwMJXu4UFDWfxWge5KH7",
  "key5": "3RWggTiCcvjTXMenvU7k6m3AiuxxhYshRUc9XXfnxzp67QNmobs4xm9zgqhuBQgoKzVABru5VSWMowzTwZMWWo4B",
  "key6": "4Ttjdmuc1RZDL75x4rRNeDca4whwBy2fDJGqy1wvMxpLcFRwYC6yeirZ4CXqfzppLrJSA6jC34QcQVbMZdv42vcs",
  "key7": "5PpcLVV6EjWndfYiPw7qzhtuMjzp4U6iVKQv47ArbMGGAUkThKJ35HiGSYpZ8zBpK4xeCFx1t7X7xYpA8wqVPrv4",
  "key8": "3B8HCoCSfcaYyJYZ8FDLSDhAjf9X2HU4dE4wiqPBDjSxUiop2NHiw5MDTKU1ZfiqPNdZz4FUVy4MY5zm2LyA2d4K",
  "key9": "3j4U1hWRh1qsapgaAcMYkiPFa8YEZo1ZhK2fXjfhBoNBxdwEkSPRzo8FXCkCuKK3i1N4MSVJrEeLwU3FauEJU3F6",
  "key10": "5bUovxCp9omwfhmSnMiPHPdfXpNDkGyyGJRGeeczHKagCjmwBedDBG6M1dVpTDcsQa1GGFiaR2Dn4L4uB2iLBp6x",
  "key11": "hqiuqt2TdqpkWW3nAZnaRdcrq6YtG66oUvXthcvfktYns96Ktf5GuhFKt3MM8Cq41UF8wamyoN94rTT85XNLTxX",
  "key12": "3xyX1Cthv68EQQ5PMuiL7TQUShVBxWEnjmq2ZRsNGo7jnmUBvNnTSv5fpp2jd5EiUUkELfBVuFnVnjcd8Am3CEyX",
  "key13": "3r2aVvTFJuygezJQzuAeqxtmihqiZFzYfrV1DkTqvJjj1PhRFv9iuQtdLNXPw25ADHKuCp5PQ4n6rhW4YuG778V1",
  "key14": "46dR6qHvBhuCmo46Jr1oKGj5AxzfjfbY2huhJcJejFAt53MYcFVo6tASa8WMRjRS92uocz5ZTfPE4CwXXg6c6h6d",
  "key15": "4xVPKdoVrDSmuob5rNsxRSawa7DtJC2YWJH3oB5AdSpRiade1oE3rnXg1yAxLsc411KRho4fd5fNz5zwndLTcoLj",
  "key16": "5XSgjoG2x9c1rxriVPLkfSCogLasKm8hsGNfkchqxkhU3bJLfna5ezDepXbbJnGTm8pXLNuzPJ6kR7sEVhUksxyx",
  "key17": "poiZicD4Co5HpN7NpDf474w7J2hSLSuEbtsn4bHXrMXG2KX7SQqUEmmf9ywa8sFZu5MXg8Kah1nkuhHj8i9CjEN",
  "key18": "21JJRGERF4n6WTTfXJ8MGHwzPBUfTxT2QUzEwbxhwwrGaXJ7KfXroZnmbd69v78u3XeAuYhbwgUxsBuCZCgAF8sE",
  "key19": "3aWVgQ8v7UhmWjq1skn4Dq9qa7AbkL8BzvZ4BCJ6dpbsZcECJBW626gkjGapBduETrvHTdD2QFtddTtrqLPKCadZ",
  "key20": "3wJ1E2d9L6ekMsrZ7DxtR4JuD36NaN9mMQ48XSTp9PVUfBJx1YZa6RFr5wdoVy7krprDvsBriSGpzL9p12YXqe91",
  "key21": "4DPC5sRCrZqZ3ekiNREaSksZfNi39QBKLVzoixvbNk9ugR5uRrT3GZZpF2qpAzMFNy9fwkJLCY8MA7mpBnYxfpDa",
  "key22": "2D4TmVRMojWnuMWkvYgVdHB7GbnYxfGiPL4aJBRxoekBiS5Zj54gjwyA8UnNFYab3dEenyLGdygVuvaTaVWU5MAA",
  "key23": "3JwHNiDj3qf3c6SGEC5wxDciS4yHxsLvq1hMFG8hbBVQrgRg2EUUBq1DvBJkG6AErtydX8CTA51n4qvYZkZ3ZAQw",
  "key24": "JGuZbSGkPjZqH7K84yt1WQxhh9oqbU4pi7xT5YwaLo5deGcXXA8Nhw5Dj8xZPrKLeKw4aDmr9SndR6BhgGsQh6w",
  "key25": "4xZAvdZoUqyA5AYni8XUxo6asKmgkEjHCvurfpLyCVp81Se5e2ougyTxnEzpQNDKV8pihYnTCpF4HLKy2a6BmSiK",
  "key26": "2gzKcYuyWVNw6cWUMWPwPgJaDwbCqKTnwkdTZezLcU2kXFMehmfzL6M7AUZ4TSGWenTm1FJBftAoWba59JG5q6WL",
  "key27": "2rDJEUnxvniEiHJydKLowN4i5SAChKAsme29YVD9d95VpgxAVMdhjTUSbjwmphfLiTyXzhwkyrtXHdHXuj4V9X2k",
  "key28": "VH7dYzdCZzwBPq44xGhdPBr1yUEZygNozTgd45ryPx4Eg1rT19fTdvTJtDWoqdR24qJzkberwm3p9mnt3bbqgTP",
  "key29": "5tE1kJ3TCzEb31BcS9xXK6Uy6SzKKdjtz3vPHtAqUqd4rFbMY7CzaVwdSZknTL1WJxrccHNn9G6fAoUxtbS1vPz8"
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
