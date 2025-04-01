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
    "43TUeiLiMB8NShk2spXg9c16GyeSbikLwAaf2b6C8opPHbMmcoeGkXvnRVK4n7TpvfvjtdiCydKB7kxqPwNhQ82N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvecDCbciEcLutc4tF6HGnCHUCPQExDZjgxftWMujEG3V6a5AMhbLQTNexhLykmg9tK29BFsRkMME5f21JT9k7U",
  "key1": "2eRE5E3Tn7CxiLjqqXTrBmUS3FxrB6RVqAqRKoHQxUACz5QbVwR8V7oqPUdFHwTYXjV7XCVPW4JTDZEN2gdFKzfi",
  "key2": "55euHAwtgAYhyDN9wLMFeDBMzFQZMrJDG3FgKx8S5mddEppfNT4fy3b5u6q1oz2KWp4e2ehxwRdZZx9eX6eMJ7T2",
  "key3": "3vFSfES53aKmpZ9Mr9UA8Wkh5xf4sg7z92UoA4L6XZc5gwxCdcFCadKfV5H19AFcXSDbkE5aaSoUnHNbWUqHY1yP",
  "key4": "2SsqBWQLWueNLbiYKHygf8d8xZShBpzayaY8d8YWFmnfDXJ1pHrNb9uigPBhSPdAN5kyBeRHFqSCxqcJhdh3uDhv",
  "key5": "4uPXVq3FVAkD2gu7LUWtG7Mntdi6DdyPFh9rgdrDZUKrN5PgdoxzvzzSUQitNYcjEXfqPsHDpRHbeLNekEVDS4Av",
  "key6": "YWobKbzWViUdDzN9UjRHLHKxta7VuRMeZ4KWmVeqc8WnsMWH5Ee1YSPyVnc9aDciL26k3VNvQxsKcw5P2jHHyCM",
  "key7": "3r41AW8C7goNtp3yEBudhUvZaDhF8U37waoh4xkarpxYnJubiveq5jFaSpnUpbLXqhT2py1S3Dbe3MyyJbUmZtUC",
  "key8": "2urZv1xrXN8md3bUAnnswzgkysQYxwHg63PVwunF7jmU7bPLms9BafdSpeh3vGY73aU2cCtATT4SM9TkeDNwcZVu",
  "key9": "392RnFcAgKfzZWvmeZgACcUwE2BhtvPZEv3CRRCud4U8ouBKzY15HUKdtqLc3TNNBXgAZo2B4xwG4pEsakVWih62",
  "key10": "5ADEomLhiNxAfxqgiPrr5mnPUTFkprokBaWonv7eivdqyobKGNZNC3QJ719LXuzXpDF1hdk7nkcJ9cx7fFDu8nuW",
  "key11": "fbREgTTA9RLkYJ6Dmwc3GJBsurGr1S6y4zzAXU5wQGRRXraZS1L29V8PUVHbDUtumfGmJs7KHRWCynbsQzZ1ErR",
  "key12": "5TT9q9vDx7tNLnWx75S5iRmsd7x8aWy68RSjxy8s7XPSzyVZ7C1KUFhvpzMbSiodwCSZAdLaui18bfkoX6US8bdw",
  "key13": "38h1oBZZh6PNnpot9GAaYR3CoeDTueaADbPHWcA48f26nGMxNzWQgBHE5K5m9w6VaCPsUJJYnLoeuJgYqe5EsDL5",
  "key14": "62NsxNGVQGUGKdMaa1H1eWSm6TB4ixJ1H6eKf98pKSsNFwjcwW78KJp6JNxUGa2zUNBWorPtiUGsZ1QiFxYkUJn",
  "key15": "5x7eXUSf2PirpnqKnkrsA37iudSFGf9D9DWRiyg5LudoLBH49a9LZdiBpuHuzepm4KTDXZPs3QaVui2vYg73hG52",
  "key16": "5nLogf1m1uZ4YBbfTcAEyJZw1s5QeDBREW3orKKPccjVgbXmkj87jW3HLkdJ88zRjQZjEA186PdyjwVqyM373miw",
  "key17": "51bbMWWm3tceHC8QqpWNrEySnsW54eFQbQ11k4f6pMVSRQsT7UHF9xGPdybf7pw1qNN26Rcm7pmtwmt4FX8d5EMT",
  "key18": "4GbW6N544sryeL3fBiuDVRS2W974e23zPeTWeknFgtzZW44JSRvR7nBZVxGNNz3JdLsiwL8E3cgZYsjRSkK6eMhs",
  "key19": "9qU3aeMGanQ88G8UqkuqbYe2NqAFNgZmnu4pQeU3dMSFucZaAjbpERCbYK6Zkdyf4eysbGToiQ8j2uJ7DYAbxeU",
  "key20": "PWcMYhUfcS1ZuugDuRgqDd48S5xVsSNwEULQtd3KrhQxxhB1PgFdtRwLYudmVjyFydUXLb1BdCLktnyQiqd4FQK",
  "key21": "4V5dxdSKkz9vGuBgepmHSJoke44yiyBKpANhi9WkBndGvxXz8HeHr8cVntLAxTXYtCaHJBjfa3usKyT91bn2ebEo",
  "key22": "5bPAboECJY7Cx1HcG4t8dqCprbgk2QwysPTzqSjiiwuVuLjZBj7VFtGHhehsgPZtW7Bv7xBTf8SX6jrqGcqs8ZTm",
  "key23": "5s5WvyLFPLVcbMhxSXHa3PxSpX1TTF5rvCWmNpjmeN8ptuqTMDCF6FW6Vw5XnpBca9SUfLBq8ZzA6iM9r2hvUXHU",
  "key24": "46c3hzu5oqKbR7VNbcV4Btm8QHh7a4LeN5gWiCEdAvPGxWmXb8NArpSsMMiLxxDfGXh2kkxph7BANiesnkuB6w2L",
  "key25": "2gipXRDKoP27mCiiRvVUqN5hLVxgjjifmMkQfUcSTQ3Mnu37aqAP3rkdmNyLu1PZXNCd88raaykG9GibiRwmcjdN",
  "key26": "2jXd8Ey1VeUec1zsBUG7Eh8qqHABgmSUumhkSfBEpgREy98LVH4B26SndwHcyQ9cS85csiCY8NNhegqPYEWkg4YT",
  "key27": "HK8yKmJVvwDv51gj6ScMr7V2V2mqNetxgVgLW8FMi7tkj7WeQ12tYzwV6zySqHDohxGMS9X6At2NAp7be2QyABw",
  "key28": "2YRCaQWDgwc72rw2NupPV88Ry9nTk5T5BjTV1u4mJBCFxBwpZhWJWxMSJ3BPmF2p1iLGHNYLiopajzgt8oYeSYUY",
  "key29": "JRjFweGC7eftiCc85uh6gSyMwy3uwhP3KJzSZApm6kFeMYZmBuF83XcguDyoimup1RYnLnXCnFZQe9GP9BUr1q4",
  "key30": "3mHhVJ4LNWadx7fxj6jb1PC7s8VwMESNYKHHMaBpZsD2s8qvSdFzk6tnFcZmNafQ3YKxu7JJEZYvxvBs7896sbKk",
  "key31": "3oVYFRtTXRQSnMnQW27yWVgCUeG32FQu8HFBHm9TXBwaBJfka1i5caTHSEDLkaXQwn5fPyo3ktkzMMPMtdypZzG8",
  "key32": "4ZD8VcMF4YYfAfQAM6r1E3nfa5pRMapPhwSDo5AkrxFJBugY7HxN7bgWif8PpiXNn5y71Wcew2EMAzEtJBVoZX6i",
  "key33": "3j9fDyLF83Dd8udoHhnyz1E7EZfM4wHkvzEWH2WnmtsVqxXwKWuXd9s1m9ud9H7Ljtayq4XYjCd2Hwrvej5xVUeC",
  "key34": "2rdZzsabNqvCe5sXo6cTuCGuCXHVukrPG7AWHT2BCET4wsnEjfwy773BdwMs8on4v3tpqSwFWyqxLj62o2ZSh8c5"
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
