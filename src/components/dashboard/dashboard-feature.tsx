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
    "2GXPwC7RsrunYeXfSQ9FCG4hCLqjuaaMvJaam6ukec8BmRazMsPfXsgpQHGJYeXawHuyewoTGsr8nKggUUyuNZ3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sGYTd4Dev5Y5QxAceEjx1cLeJhpLkuNgwncbfFerAajPDCiXgV8EfAoapzoiEZNrUafrmGsqL3zw9pwaV533Gx3",
  "key1": "27RqWJFvmFLQsnMc4izNgSf7FFe7b5UTLkvaojkcrA8USNUPKiHGnKZv16FniZUCGfey6V1nkzwiDUsXD1NaN14P",
  "key2": "2esZGBFky64Gvi71VNSWg3STb2VNzMGMdjd5EP83j2o5vxU34rdniDVwRNvcE6b7jr4iZkFaVfFEAiPY2m7SGKhT",
  "key3": "UfWtDpDdz8DA7jUcXek9hjXHPgVhFvzRaRPy9EwJK94bChhyXi7Dfg9yGnwuL8Rea2FBQNSDiweD7uW4ettL4SJ",
  "key4": "QedohnbQn6UwEqji5oDvwuiE4dondDF1hdrnUvCvYTfpFj5BFQSPXzt4cEfDXADdBnxcgNvNmYNq6a75DEyQiec",
  "key5": "62nYWLb4xyqngn6uEnunoPJEPTP6i3yQvx4TNm72ovsetVZpkj1gf6R7Dp2ePaenbpfY3TY5pNyqsx5y4YcqiaE7",
  "key6": "5zL7qfJErFGh1fPjaREtZcNE9APkU2PfX3WuYVPPfefrHVSXSWfjuqDbDMPxZg3YWq1PqR4fiUW1Zzi8M7VoAUaS",
  "key7": "XFX2NQ2ugRfqchVQtG2w9MEhBPaWBf6Qx2Uci7TXuzgGnMJmrZKDoVwtAHRLVdYWxnjPuP9VCH8xku7i6Gi87om",
  "key8": "222gULuHJMfHtjk6GCNKyrBmBpJxfcopA33GxoyFrMqVXw5sHuFc3Y4bRvp2LKSfbNAeV1SQeBh5g684mPR6Pv5Y",
  "key9": "2rZtYafjJmXHmAyaUjLzrcqpUUmNafpEF2xWRjM4cbfjciTk1pscKXp9AxA714vWnwgnY31YvNcdpRrC67AyHeqM",
  "key10": "2G1QdL6xteNxJ163FQiGFtDNy4DeV2SDNVkqZMeM79HpEpinWjdh1dUCtXwQZFAb8Cc4UgZed3qxVfge5rLThswK",
  "key11": "gDU7KoDxF9HWTS77QXJyHZWhKqbskRBhtnVFCnad7uNw1QNTrzGiV4Pop2kQGQf8Wrx9c6heBSYz32xqRo9w75p",
  "key12": "4BYGvJ5hZh8TS7mMLNwFxReHdDC1H6ow8YEhKEJoR7knb9UENYQGLVq937uAUDoQxrdrpXhsvkB1Q7FY9rpNzoq9",
  "key13": "46LhaZ6iap1XZ4V7Rbmfkye6XyLRFrzo47wx6c2bN6Rd5JNbrdMNGz6L8iFcMLmdJXE7tmo1KoJvTWHtuViCtktR",
  "key14": "4br4fhPYoJ4sYpS2bbBKT4LsDdn6mK9CLwSgFBrfHgGaw4S3nUYHo6owpiy94GUNLaDPYk1dmTpxALTpDNj2H7Vw",
  "key15": "3FLPica2SUZd3hRBmfoMV2FKQqy5zBYGEa1yfiQQptJ1LZVtzRRLRQ3hvEN8yEUckSBaBqP9fazfuQBrKcHHibA8",
  "key16": "3CbKZfZDhnH9fHLgv6HzCg7u8ukpbhvvELbtxx8Tn3AdE8XPvydYwZcCRUFHnx5z1fG59Y4XD8S23DGnNFbQMr3B",
  "key17": "4zHkUzzntoKDYSVykTLJc317UvUYaHamahAkQbpieS82uCDPoAGa5j84rHciVS7XJwg2EpRQo7ekyz9sq7vNix4p",
  "key18": "3nmocFy1BFNzckAffXqvy4aMmeZFESEULoNAKEgYEeCUp1NrJD9Ro776kHnXVGZCyra4RUCJ1pJFdFX2KMM1gcVe",
  "key19": "25BfW6H3aK5gULAxvCzhqJ77A12GYQ4A8qE6MCNhLTu6FJNxcDKT4rNMBSPjr9fBA9Dak8csFqqT3yaNyDbfEsA5",
  "key20": "HxPyDgVFBdZtDJHzC9NS3LNxwtWgApv9JgSR4bXCGnuEe8x7hrhQWMNKn9mXECiCJQzr5v66pJYZh5fKhuJKKWb",
  "key21": "9eeaFE4seh49NweqcfNZnY6XA68cUybouYetfTAEfjmQerPeb2pDPPmJtLGR13VbzHmHadMxhhYdZVj3uPe2ggL",
  "key22": "3ErE9UVi5KTxGHpbZaGQcVhxdLkLX9pf3dwjLdQaDJjYX6LSoisCZAgY5ALtF9nDGN1rkHJ8Nfu3YTvunjGQy8D5",
  "key23": "4KNQEi3MQhHoVBPSs1qoVnCv3C8XcSg6H2nsocxyXtddocFKxNwQMxy1TZQi97YcVoSk6w8L2FjkfMM3texGmoXj",
  "key24": "5ckS33agh6qJxCQnGB4zKWiusqrEQbBMEnu8WTUvFAAWR6eZA4sHEt88whSbsCXFicmybmfc3FuCDKE7yBrT33PS",
  "key25": "z8dxoQmCog9gVLj73R3Tg22e8C8Yk3NnugtoXCCfm9j1JgpiNMoNxjSG3gEuTfHUuWkZ8oFuJKcceWGX5Qq5WGr",
  "key26": "3BecGd2B8UBXc5FKPx7DCJ5bTSJPdMtih5PTFCUUZpZhe1uh9jXdJ1H1uB3c2ibscKz9pxyWzTYbPdcXC2FzmsKT",
  "key27": "4WrHukcGM4EYWopWPYZ35y1n8s6Tgue2zJGRgMv2DnABM9xKNhvVvwrUtoKh8Sd9nbVFToUSqhm7QMyjPaYYjEn7",
  "key28": "3ErnYXE9y6qoQDGisX6WCxnjHvJoPZg9FZ68vDtDde4GU7v6kaAYA8PaH95vnDiMZHSLjfNDYxCPwhva66NvaYvY",
  "key29": "582Hm4qr5LvEhcfdLkywABPx27U5pLRrwj56tBcnrZ27FMJg9LqnphskCsPZJzruaQtWBzH7VKx5ZhN3nySRqZgF",
  "key30": "5ywdXX8DhEVuuwqCEdqEbYyaKs2fFAeLTkkAqrLDo9p5zRL3vj1thsZZ2fcyPfmcB4P43Wfozu3iLCEyQnjkjBrr",
  "key31": "5gn5NXq6bZq5fMWL73ZAs4TA5GUo3FK26hsohYwSPGNRWy2sXQQmkNeqDhqKz2veRQjAyeCg38YMxmdY1Fwh78jw",
  "key32": "5ou5ThY4pxdbaBPWRQb2BJ5LFPvHPc8F5XEdq9xDCGv9q2SPNuyY23VRVqznWFfpzA6k7hw42LqbYDEpjM3Mr7kE",
  "key33": "4WnVZeK8KqiERQTLKW9DvFLXxc9WS1AxH7M6C9GaECAZmMikJYZeM9doSPzAMKLaxQ8wKvJLHAJb1fwGckqbyToh",
  "key34": "5BsPaksMmUjL2fhzuM1enomve6g9MBsVdQvfaW9V93Dyhzej1rHHsPeCZAja14FifKJLRHPtUyJSEHmMEXxFqs7D",
  "key35": "54MD6TYJnYc5sBJakEWbRxHTgb27C4aGZXkdx21rgNjXkpsYXwst7kZmhjQithzifB4bMcPLNp7t9AcSQv4z2yk9",
  "key36": "rD4fPt3YGEzpx2rMjY2uRQCoHvjuYBH96FnU3UHgTiMZH2HvVeZj6K8b46h4CXK7efZfyFdjZ94Zi3doWFybH8E"
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
