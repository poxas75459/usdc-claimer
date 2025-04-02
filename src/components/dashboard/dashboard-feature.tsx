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
    "HsxCkBCpSpqyzwu47b8Texz7xzm9kMDvwCxuUXe1Bo6m48fqrGcpByFbMgWzqP9XRgLUJaStqhsoJCg3aZUBoCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDT84U7YQvWdPavaTC5sJDmzt9N2knC9DDV2hNf8Ls9GV2SJTmECU8LsT6JBroeCs75ndJ4LJRZ1PykNMrA9X9f",
  "key1": "5h8CE7FMLJHWVe6AjjJSeiPgcQwSz5eu68T1JDcH8kC6aCXShQve44mfiiAaREkshNioidQA7QyAUMVBqpBNRX62",
  "key2": "463B3yzZVPczoNk92L4zuYYasfjVYoUTRPWHW3hoP7qhhzPFhcHxUbzRqFH5fjqXghLZqqfG7GRX8UAfqxQcnGbK",
  "key3": "414R4wk14LeNMQAVNFDBMJ25T9q3xzE4axzpztMTi23jsrnLPDgfHxPLGnduDL6VTFHQaogTvroJw36RvgZoM5U7",
  "key4": "5efuCdVXpbJpXCiM5sXV7SgkxB238vMM8ympFA6cQjwisXWKtLvtY4rSXqZhef5MNAnNkoSSxLpgUUe4tnEEjx3e",
  "key5": "5hxmfhXWTo7U3EcMT9mbZ7ohVH7cj49hCktY8zVYs1b7NyEjd2DFnD6XZS1A2P2yDdSYobWcNN31RQ1vHMN1wKoE",
  "key6": "3xutqSKkDe2VER2S29zNCWaHWaaFVfwzdn6M6NKfEm1y98B3ZRhfFhzqVZJtsc3zjFcgeqi8ToJRE9pCzt2EtBD2",
  "key7": "3aWR6weh8xV4yz6mRWnntu5uHZBg4UEAWHC4F8fpjKHERfUDia2Gd4pnDFHhZ5LP3t4wEkAaAcPxfJMb1HgTX8R2",
  "key8": "GNyFD7TudkxLZbcR1kmJvstu1tFqA3gWfy8GSVE4NjHsQoaaMNEQAjWahNgfiF2DMVSVPVQiZLFFXddQavqcdTM",
  "key9": "5JhZ7TP1xAzDWap1Bpf5oVDDAwjfkhgDKvbkK2mtK3HeBw3gYMZMayFT5DfwibUGmwGmSyDTQqXWGEEEJzNqwqGP",
  "key10": "DzRxVdFF8eS3fLqrmL8wvxqERsT9eswhzUW1ATuxtgKoRZWPK45yDygTnepWZcxP7GGovrJSKQ4dzAuBBGL21R5",
  "key11": "3zahzADzyaCWpPugSBbzFaZMmohY5Y7ASWbh6PA7S5UxQGW8uUNtzB7W4HN6RM1Qs8FcrWhBpXtP9UN8PsZ8Fjkx",
  "key12": "2hDuTEEMNzRNa4jBu2ri4CScNdWhYxJuFMerQFqQr5fKStzzWeP3Z5jLR53uR9XkD8iKgmE5iQd2Ugc9W6ey5Tvs",
  "key13": "RXy75VmK7QBmkBZsFE4iGKdeqioamJQUsS92gTL2WSUwJCBVYbTYbvuYBKbWKcb419NiU3YgWHnFafyoEvqd67j",
  "key14": "3DD8su8p2irh8rbGDj9UVKTfezFTpQ43UnVWdGiggQ5R3YEEbioeKqbpNuv3bygRpidyfFoavCvnAXmnaqUVf8tg",
  "key15": "3PY9RAs8XWWEnjpxqnaer9etNB5PoVzEA6SU9wTTzDH3dpKHqdbPxxgEWPzFkAg5xy29yYcWmLrdchsMA5T9W3YA",
  "key16": "5qw7KvvJDdhcR3v8ntxccGT4t3Hq7pUFA5WCwdGt1oQ1pAkwy5RSYb12MTJEihd2yh3Dkq4CXgARrrkUKmpG8aKZ",
  "key17": "2PWQAW2WSwSwvCJpNanAecg9KnYJjBpPHnyZvnWDFQXHSMPM6WRH6cXMPygoTpVkyPGRuazTyPbAN6noQH1qHwg2",
  "key18": "2EsXFtwHmgLukSTJPwwdMDynXt9RnjK9fgwZptpxY8jCht2YNRjF12r9Jt9p6Z4bVions9FMJ7owmHCM9obPNpQr",
  "key19": "3vbeGfhJ6RrrGteyyJeXeMViE1KgM56kecbNYCFVrLQHckJnWzWKjeqC9Kd2M2jBkDk4K1PuqGmqs6gMJ3vHvWcZ",
  "key20": "2ruBcqscXtWzFfUzUAKuQQi5WRrsBJFd6zfgguBQS1TeM9tYecdu5gBYynjQRHF124NGuLAKD97wXPWHqJLmikq2",
  "key21": "VQK8wtqnudUX96z1EqPW4Y8aoBP4UyXk94DcoXexTeri7i3WhWmE6BN6JcdymAifEemGUnm95gk4s1sF6Pz1qmF",
  "key22": "YyhgK24o4ysr92RMGTgzJF1XZABkGwx7Eaxv1uZTs9pQgdQo9TW81eEHW2uVaCookSyweUKFZWQjYkUGLiHhgC5",
  "key23": "2YWBp8pPvUTtHE6ukTqPb9tgfC5CuKFbfwYaZmg7CxHeAfUyk6me8x2esVjpspR5uLBYn1YNK6mFiLgCbT1zvax8",
  "key24": "5jixa3o9Z6dZmZFyjqRmCsYkQxejFoBf4Z3QpcrUZhZCDciKMNUqWBAUB7x7ZacBv5zRVn7KGoHXmnAbbYnP5czS",
  "key25": "61xRdjkBCu5gbfFsVu1o6X8As7kNjDfCVfey3z96sUkDNQP8WQ9foqUJKcYetLCs18yRJyy8Pc7tHyRpDBG8EhvA",
  "key26": "2Dcn6wexixMNVpRiPbn7CWkc91Sh6Yzk4jjSZioAj6GgrBSmngCq8nS7L6YZNTV4SaD9FAuRuvG8frsnkcWXPbeR",
  "key27": "pySKDjShg8qb2kdiezxkLyzBYfYjnfha84aetH9sFKVkaA6ZPxg4hyE2wMHrhmdvg1AsF2sH3bZSUZDgcREyBui",
  "key28": "5jhtt6p4s8jvJZCV9Qj4bcRXWAzTfVdjeD6Qx687EB1gpQ8yC6YeG9BDiFqQYvJcGG1gdyKH7JSGSmJDJrsuGQvq",
  "key29": "4TwMRMGVopxxs9GnwXekGhPHPd4tKTPETUrwpZPjwjhC5SxMk7wh982reNKHoxFDCFVzoqfiTjk3ynRyqEL9ZvGr",
  "key30": "3Mg5weJqAqMDTCBVr4KfhjUtovE2X8qSLgDKjnBTGX1pUcxTKe16o5g6UNcfaowcJkB6cFM2aDTpxWmAuvdvjY3M",
  "key31": "3HdLpfHBCdoAMrYZuQns2VdD56apQWEufjxUrgwjRiUGDJUgupD7DACL6kTrzuHgSTsQbXFLWyGhc7BYJGQ4D7AX",
  "key32": "zzxPJX6kt8YMQWMiTJAtBPEYuKAeHnUoeBnXAfkv1HNgauaq9PTuxxGUdbtAfX4p69QebxhEczX9uU1HV3kuECq",
  "key33": "4GndqdtkxAMnzRGqyokCCmVZ9mkax5KxDpRuwjPWnafh26WWLGLhqxqp8bdZaREfexrASivX4TMUZg7ggCHSPZSf",
  "key34": "5ZyvPfGnEQEtzt3YxRKzmDWoaXxJEWytzBaTXmfEBYbMjrw294nfVznUNoyYxq5avtZ9xZ3Zn64wCzGBXT83unHq"
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
