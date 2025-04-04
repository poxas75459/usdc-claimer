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
    "3QkHPSzEb4rKKaTQjsqphFMexSrQKGDhFMM4FEET5henHQeEZaaZjEATvdTvWbPaYNcjZu1NSDDhQ2NPpMn3j3NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7zgKcrcZgJuLUegxj8gH9Sh2YLrMbE2z3J1gUuBjAFDM3TksAUJH2t8fAqWUyor7HpDkDUF3tDenS5aJJgMfwK",
  "key1": "2cWeTqoE2W7tzQW2R5fJPGz6WCB1kpPnUCEq6YwMNZ3trWPuhgiuTXNhPq6uAYM5Jf2bh7uMDn2BFPdwDQbWyNEQ",
  "key2": "39RicBvPVNDuC7SkBwno5EzT7o7ep9HnPttLkLJAjhGj4sSrTW6yrLpib5Fow5aUxq8h2scfAHg264UdY1SFSU74",
  "key3": "5pEeo3STjx5J5TA6gBABrmWG2YD8T2nc9MQ62tf4z9nBtWzrHfR3tigoReQQJKwpa5G72xpcueMo8zVTwH6G3iRz",
  "key4": "5yBDRQAJogg7zRrZhpLWm2WJ4pZQk7qUBHhUPkb5sn9VvwRY9CHRv3VVYeAtCSifF1LUogZS3js43aNvDgajiXRU",
  "key5": "3DRHdpqh3YWw8eqmx4ryes4UHSCBkGj6rAXWSy5pY4LrFpzfkUcdQEB33MGGMhZQ2RC2MqeubKrQ2sxXqZhkXmt3",
  "key6": "H4iKhHAbqSz5JZGinqqjBqtBV7JMzbGXQZxv5cKp3FvdwfrBV6VgbpteHCcrkNZWrDDogKqQrKtDGvPnxFto3zR",
  "key7": "5w2XYC53sRonN59TqSaTwiqv2wvoPiHNfgo5Se9Ra1G4uCth8uKz45mbqQKv1xrWwBBd9pgdjrTuysYpyK2JLQEa",
  "key8": "27cz7XvcisGQetokmiVQfMvQbZR3omemZjwLtE6fBNvfjmbBPg7vyThm64MQXU9Aqutb24ii3AEQhJMF93kFp7tR",
  "key9": "35j47BeN3T7g7gy8iM3wg2iTReGJY9FnVM79ABZZ5ha13BTkdH3WPoS2u1543VvEWbdzkGzRrNtU4P99aWEoPKQF",
  "key10": "5H1QUFNH4x7HkRpys21GCsatCd152SJ2GmJrRF1ByibPZ6cmHACfmE7EWTGXRWbRpZCKJaxNkNLSKVE98KNneL3",
  "key11": "641pM5SZomFMDPViRXRWuW2avv9NQU3CVMFqcaoC9h5esCuZRUTvmgdJjKtABaZctm15StH1uTr7z4qsHZRY3oBX",
  "key12": "2ggRDAxJsuXypUz1W5rQaGrAYKVKhrTTbtYEM7Tz13WMPrf2FMVuiWwM48NSFDgvcnWUMSdYDRvPmPwYn5Ybydum",
  "key13": "5CMthU6FdJ5ancYtsiWLNf6xTBPcPSxJY5imdfd2nPomdGFMnbTUbTVP44dnTsccTE7cK97zSpCRhE5gk5w98gFM",
  "key14": "3BZArJvQA9W2L5QbmvsKvrqFgrTV5s2ixfwMceWt8bHYCT8XF1FbLW84FKdL9oXW3kxbRqVToEkHtnEs8mwzG1cH",
  "key15": "4gWt628NchCPKD3pyWLEP3TBkG64w2hTZUx1ocjHgF1qBdb7h1BcMF8bHUcxn1xWFRky8BsrGzxVW7p9MZX33ZNv",
  "key16": "4JGoqP7VvVfDMzAd14BraNCr5P6dsKvtm1UvnayPt1y79LhvfwZom5FJgDSVZ1x2GNLDGtY2vKkRWCrZi9KSq3NK",
  "key17": "tTV9Wi5c45zewuuTSo3FPedHc6Z1UEobL3Vuy95Mi6WeYVdcwQ4DADEcHfkN23fvauuD7MRx4HuQrN9pLpkMzN2",
  "key18": "4ie9QzAhkwyf51hF8Fr6qgPBGujASKdh44KqKHbVzFq36P5kREdJr7kKZdQsuZb3YDEtBwhEnUVNNr29MS2KQ4UK",
  "key19": "QbjTh4k2ocv5Y56Bnniyy2x5SqnQUZSE9xJwWsubpxpP2Vc9vtJAUK8YzKyVLcMJLnpCd1kH3UApZgDfxDCPqhP",
  "key20": "3Rud5YqiTraHuTUDkdniZBPSY7tr46ETUTLuo7tzmTuCxZ6kzRUXzTX7M8nnjRLKTQvT4vbQpxVNMPVSzEaDbMC5",
  "key21": "EnEBTqxfuSvmQ4DYse24P6EgTJFZErziHrdJC2eiMq2Xi8Fx458oUqFk7GurXhovJRbtGJ4Heh9ke7f5MqUWzAG",
  "key22": "4RDEbmgMr6jMcyeebJCpiTZPyVSgVBu3r9ztatHbH3QdLN6T4RMg3KRPTgSZjJcuxTMq3cmWW9AU3GYuN5LuD7Jh",
  "key23": "5QEumjiqyFdouaJ8uGXhwfD93e5iDHYBJLaShkGi4uEm1V6LLnxUSYDqSrsYSJ4457FLUvYwnT6JYDugnnvYhQLP",
  "key24": "5GjeQy7T4FseoyZ35W8tCqQJ8LRAPA8Jw5AcPrVYzmkCVA4w8HxcCadu3EG9T8UDSWGnb7kB6S61MyGttQCarNx2",
  "key25": "22L9UkikqSXWEeB1eh6W1pENrxrXNqMdtz3ZGs8KmWhWwsY3JViMS1fUtudJnYAUJQrUrcv62ii2mNBFBwnsw9he",
  "key26": "DTR154LpkptWeQE2DBgWjehe3cR4HAQA8hzztWvEuM2pyG5mH5xTMiP9LA3axAGPNWqB5yatyM4YUfpMX7zThJ8",
  "key27": "49jdDdSxH15Kz8hbxoWhQa3KQbpjcRvgEPhf6xdpu1qPrFfRHHZVYFAwYsQUwFcbYgSGWNuFPsF8uGXG1PdCVxEw",
  "key28": "5PVurQ4yavXdG1J7HNRdnEYh5WNisLrPHuszZabT74X8FrvLRaFgHpyZNDb7RvbgfmDYjEbnBD9QE97pTMS8jUru",
  "key29": "3Knz4Mq6iLNq2qYmmENQUbi6MeUbgndKdo6ojiA7PrAwqTVt5j48xyAJGajDaGAYM7UyeksoDSJqyH5uuJBVL2Mu",
  "key30": "3uRzj1LPf2nuDZw1YmnXUhW2tCdqPiFUrw8d1TCw1XyK7r6GroUdjYyRmxh6G9VCjh73sT9LRKy6MYnhdB8usxhB",
  "key31": "BhukpNaJ3PgvZLnq1dj6gBvm55fGTeRJCTHMgwTtyrthxm5RW2d9LCDANq3bymzdNNvJomgyjSEYieA3e7Gkk2g"
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
