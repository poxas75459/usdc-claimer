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
    "NsR72jNvwwe3UednvA6DJxptZ58aPXtW5QnpYcYoHNRvDzeHj1tAyTidRsSzMfQbfqxQKt7r6EGCMRE9TqRB4QL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VJe4gshjB27XtjAu78t2bDMxmZQvwxzkcncSsg9C6RzatmLrKXfwxris3kDpg5xJefuc8ibPpTmbuxSdoYPzyk",
  "key1": "2tnKeL9ccLLTZNmiYMweE6kdHFDozwScvhiXrsm75aABzSPH2UEgkMqWpThSEwd2NZ8H7aFtYDxdfpN3i9ZADYPy",
  "key2": "tFSQ8RFpp1a8c6bXFwKvPr54Mt8HNupN5Hwh7R9NnPyAsWZwUXubXf5nUoWGYZYRQfZFRaLrFtqkQJNvxvfojeM",
  "key3": "RFczjzrSpiHeFKqiSrT7SzumWQP98ki8imR1hXxzkaQRnQXowiWDtsB1YekAGUQkL9voBTBiEZvFr7S5hnDuWZ9",
  "key4": "3VVzuXvnK1EhrXNUgxwnhjds3AMCUSukNCVfhyoAUARzbgGi4JrSjm232XFwoi1xGAatgdLcA1nwATPH9dBJu64g",
  "key5": "5udCinhsGXHPmEvkJfYtD6fmdHGJQk31EHAtHHcaMTYSxHUMX164bjhzQ6rKZKEYmqkK5SQcc4ecgu4P34rdD3Av",
  "key6": "422mdMgCAxSYtMwQRUHFsCN9hVqNayC9bKgd7EEPEVCC9WMmQMfyciR8HH9QQGFv3RzdpysvQvTwZ4cPXZp9xF7q",
  "key7": "2JRnbL76D3Gv5NgfZPL94BDoSynQJxPmpJaMeZdAXsWFqvNY7Dtj3m5LG4X3dsET77vawR4hj24DcuEwUJjkdX4E",
  "key8": "5REDx7xjyd4jk7ayWACwW56CZTFCeBdREccoHvxKvsKopYFwEnH3VQFrDpetGZLGqFGszWQbHcoBufo7PBR9FZZk",
  "key9": "4wrFcbAE5hS5QVijcx2ZXsxqMntvPxxsPyPBDhhxASKeaJk1msgG2SiXThPLV7QU4aAZXomhsWfqfJtqUxSoNaQU",
  "key10": "2ij1ivavtCwRzdQ5Hx3AX6Uwbo93qYTSBeaVUm7chnBBMeR6NKLK8Et18VWUYL2pxSGRJr5zd4GCr58QzH2nZLG4",
  "key11": "4QeyDFSUfekiwUTZP89BhnAGALX1XgZ5jR7zBQ9W6bNHCmN9Etf4d773VtVCTG6EGhxKozck3q54FaKTjnikzJEd",
  "key12": "2JxaQ5RqMWqAQrEsBfUqLdZp3218DtboH3A9HTd99UEjxU8WcgBmaUcz24Dw4EX4Zm2QPwESencaEERGiETBNAB",
  "key13": "SZarpH9WBALJDwcF38g3e5Q52PYsburbLKTGThUuVyMAAGjWaaWL7ZTamhe1oiw1j24MUMKMn3WgMPZvzWTzJ7f",
  "key14": "31nCX5WvAMcaH8zYEXi6sr6qDJAVMiYSZnrN9nEihfuC1YStoyMHFiYEpH4zgw1ghtmtztUYnU8fikuLaqjBFua3",
  "key15": "3ekGtQwg99vusMMZ4PW5UgQV9j3DeYMboL72JdRWr56Rsd2usJWR2p3zQGebWWrLgMzJ7Rano5ZskYkQJxiwx536",
  "key16": "qofCAxPuQhJ5ipc4gsx2mRL9MdstLHb9RMzEXirp3Hos4R3L4VnL9BYhhSFCDTD4XbmoGkRmVqguk6gf5FW6Qmi",
  "key17": "5Na4ZHVddUWEeCx4z9f3C6V31SSq1auYaYHhQeSTDvr7VJ66kXY65cEYENmvJE5pH7H5V7kcHHxDRuaWDjVLHKsv",
  "key18": "3AdWphnbdLXzBHtkfsDy1QmGppzwAB2kzmBxK1maWRnAR7cZSHAdT2F4HiveimjePsthFP1WSF3a91p7DF7nPkMm",
  "key19": "4GJKHHvemt7jn2WTtNynFq4B5Xi2fsdBN16bnRyWkgV5K7BFUKDMotQc2d3f2NSnKRCdVHGXEpDg8LsH5DJjRXG7",
  "key20": "3XWmNnqZqSADQ81e98puxTS2pQj3HRJKSrmedveTKgyuBnYcCXcWQ52Q4apZyMgUWU58b3RQMVpmT8tncohbGYt1",
  "key21": "5wd76h8qZZrpANsDXfoEn8yaZvgZM3fFzbnJPWVvsnoWFLFY6SGid9N5zU5Ncfdc2JDSpYix7KnQbzMrV6SA6xnJ",
  "key22": "4recUXXXLZzwLfwLkUnxVzBqyY8kf226St6E94oFznawMyWpUAt7FpgtYW8PupZ8WFLeaBJAQvrkQEhvqZA6gcXC",
  "key23": "3xAMovp8BYxcgCDh1wBymyWzVQbg8W2BvLuUdwCJu1Pmw6WM9U7B5THG8t1Vhzf5D957REx1mPyFebZj4EFxSEbh",
  "key24": "5QExYYjZ95JG3udKbT4JxAW5DVRiGT3Q9PjEGgu38pGNdzXgyzjzG7Ps3QvkGUB1CaA3mieQpZTD9j9cS2kshf92",
  "key25": "59L81VV4MBfbJ3eVnoxX43j9z9yrCKNmiGqmwdZwCeWJfZpiqzdGyHyxvhj4RNQBVhwavgqszS9H4Vs7QAQoCgJx",
  "key26": "3szgADtyGFqSdNzKLuLvezoNpDWGD69hPuyq2nGRopELX5DLzBhLF7bST1j7oR8epk7SxGEvqpT35daByg3R9iKz",
  "key27": "4JhWB6HiGwgfe9gFseRKsuPRM2V5xkJ1LLHRXdYbTDDb7m7o4SvPemEv49MkExvgufHr6a3xxSjeWiqmXeW1gvSD",
  "key28": "2NZJxqfGqJh4RkFPf7Ra4JJivr9rFLhWhdU2dGeUU3DrTVRdtD5LtXCTbg3Jid34DMaW3jKVv5kz6dSCyFy1xyoK",
  "key29": "4hjyoTdrVxECtTUWQigvadZmJRVCd9cUGte3gXAmiX6FoLAJgMZnKYbUYq2YR1Pu5cu4JzhCCqc8Qe3zD7NxbrmG",
  "key30": "4Q6AnxnVAZSh8jfV55yPmwhoUfZBSKySJetN9w4kqpAgz8dT7MT9FbYbcrvsvbT6nxRTBHUdfxWwvPmafzGAKfPG",
  "key31": "5pdg6yi5Q2E4WC3QEoQpKoFtaE4WZgv9vr5r2u46Lifu89cSLFWRqxqAxuCAQqzbYeDfHZHXmM2ceKHoGgL7UBFK",
  "key32": "3aGRM8JAgHRc5UTnwbcDaQRMjmedvRJaTtDqWe8gUKt3f4oWyUu8kuo8KBHxQ5F2acwvA31f1R5HKxqqvGEqugCB",
  "key33": "TyhywsHSGHr6nj7GkBn987SUiRGY7Lzx3zBE5Pid69qSWEpySx4wunids2h9wSsBJRraHWYcosrmTT4ysCMcMf8"
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
