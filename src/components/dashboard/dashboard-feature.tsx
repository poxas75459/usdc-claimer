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
    "2u5vb7CSqJW3ZuWnSPAiQ1EYXWhSf2eCAXLr6zBPqXchoRP9gFK94Xbb5JNpJmfGrsvkVRCQQiPQt2m66uFrwhS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DQC9Z5QKPjB7iZkeD8AUGXeTAYCyF1k67Yvo5SxBDJGES7LiqgvhZxvpUyWUf9vDgjUjssoHSkessZ2MW5pTcvw",
  "key1": "WyXicwcjSZUT1FJiyYbNHBh75kY7ZdL35vQXpoeXcRmRVMbZgowZ3jM71JVFmAAtRHxHxY879WX5e4nukVJGfpR",
  "key2": "3nAAdXy4hf6dGKCEY57a5FqvnFLkjhhM1qgYEKpqsEYTRK3rASmNA1FyyreY1sSrkV8bBmAeANkxJxeMsc3GG1Fp",
  "key3": "2c4ff1sEBBMFVJ5NRKxpLgi8LZGLHresiteVJ1o67JqLXPYd2VERpyhQvVBniTP4HXAFLDDNPTHc8tZswEsi7b3u",
  "key4": "Mr2ErmEeAoiSgvmUwGtHFmnj5SrXkq748SrRZpqB4C6EKe2CN5uoQqbxgaJ5gjFBeuJVLQDxyoixpE9mSufhCqk",
  "key5": "5khgKWQTXvwkpw22ex3pnkNpYXLisht4ufam2Qu7ozVAKpJwsE9TmG5F8ysBDVm75XuzgtPmRZaMu3tiTGqQA1PK",
  "key6": "q69wvyZBEDtKck5shna59LsQY4DMEKoqJXtX8C8PPJ2a4X8fT4gH21fktnMEUqeGLA2zZ2dKU5WtVnqwwwHX7PM",
  "key7": "5XUjUUwAnxRRveWAE8CTfo8TVqRPdSu1xWk1uhzRwkFtQbG5AMdFaHpmAW5AZn6JkyQ8338fnp6md4kAL4cAAybM",
  "key8": "2mFwyBhwEX1q2KbTYj7wTHJYP1aTtyggMPj6p8vo65edv6xiDJhWB7rwJ6Ld89D7P2QGRX3JRKLC8TDEKJHKskbC",
  "key9": "28z7CJUvgLamSC2Y7KZJ3ad5nUn2XudAviRbw2Kn78ECAGnJAJMsxiEsXDhSJZ8YqHh9Y3bE2dJAwro4JdSVkdHD",
  "key10": "tb6oNdeCMgfEyNpbgHHigA4BFPdYYUfmg4WhPeJBesEdqLdw1X4FAuNTxcj8RDhcMnPdddxHPG8Hy4CAYCPwH2F",
  "key11": "5BRC5hCqzsh4BsffATfrPa65zv5wvvLrED3WVdQeAxmUMPTxsTDQkHrUgSJu52iMVdUh1LxC5uWYE2fMZiB3UpE3",
  "key12": "LM67SChzmRAwnAoGXJEUnx3uGPugdffPhufhGTTTH9igapqwxQFpsVcBCCueDoGSG8AJv9MhVtdTriMfGvzpaTN",
  "key13": "3xbDWSqos5JLMUHNYxRruxCKUCKpB6NiS9ZqMYgYkY3CFD3AAVJwLqzqofzxggCLtRYrGuKvKv4y1eokdCHu2seg",
  "key14": "2g3ttFYp7xwe6F1j9UyvbCHn68PvxEXMGGNHmYvZimfsKWje3ern3FMcc6Wcf6zL2CCrmU4yUHKhx3etje1sKWGW",
  "key15": "3waS9WHvbNQdxw6cMyBSPFvPeu1H9Jf64bERMTmCRjngaScnwRttshdpSnPdGcxE4hWkX4QaqxTmvYChcfoUUtCU",
  "key16": "5mk2bvSfFsmauc9Xjrq7cNsyDHBSNjhV5v7opP8UwjW7fUATNzDNyiuGiZB9kQNKToXorsSkrQHkf85Ux8QgpG4B",
  "key17": "59Z3n2xe3QBihF8mHqhVYaRpRc4YrdRPqm2sooPLb6R4ZPyD4MiLQ3h8u5anSnm4rm6WJAopwnfLhhmrA5WCKDbA",
  "key18": "72swKw7Bn5Q63TzEicmmuj3qJBNpkoafrntZ6aD6FX7MKNUwpzFnhUeP9pbw3h3yZM8vg6hCBgj9E4JYNgKrCVH",
  "key19": "4RENvjb8oDaG3FaffJ7XrpHxoALiZDgaB855pLdhgxNMDZFSLju3UxjADtV4fbY4aQxnVawfJM6rCW6j2zg6BdFD",
  "key20": "2eWuTYFJuf3auwi7FKiNs9PyuYPYsCsWBRb7LW1xPUhZ3HnFALQp3G525tsg8sp6Dfm4nzEgR4uZ9LS6Bx5KLmyr",
  "key21": "5TxAwKRbL4RXj6Un4edyf3S6RwUNSb6odb8dgjWHgpRZTpCUKvkgs1KWfdGkUpu8S3gTSPK7ZcThEYzBGYussiZY",
  "key22": "5ax92dR1AEGHrA63Uc9o34cr9hhDg6m6hCUfdmexufLRtfbsNa9q5LtioERcS8yqWcFjDVu6g9q2gigeekFhWdJs",
  "key23": "5Tgp4Xc39oqw3BDtRQEMBPDJvcxK2zYB1QWvteBJuiYYtyuDfkPMzefGsnNFNXqXn3hH8XaagtMCpsFxKJjTWVJg",
  "key24": "uuzcNMzRdBVh1dLDyUSas1bdH9SNuePK8Ukq8EwGUzwvSrgAnnCchgAAJDKiuaVoWkYhj3WnAo7btx69WxUb7Pd",
  "key25": "PcpD36SE4GN8pEoUPJFkYMTCu4dVUXpjucVCm1MQVQmkdsjf3Z6hzBRtZgr15KvZ49Z3ERaapaxSbp1UuHsV1Vy",
  "key26": "cq17gLr8dxbhsH4d6zaoDKgFLkYSBvmpvJ99uGsEFAWUWkWmGvxjNaoXVmdy7v17zrkqyUwYJKqnBfJ9ZsYPtXB",
  "key27": "3A8Yj2H7xqJ8bxpF1mzZWE1ENwrZLJwU8TVCtoKUGue5jMxgWQ9RNKwTEg3iydrmUFXJeBYSMTqpWNFAheSQnAJz",
  "key28": "5SBWKb1d3eRxVNKk8KL6cF9ht952Vj4K4oBf15FQBoAFX4hkCK1oPFndo55GDipjJoTP7jLeTS7yBcKQ2gTDeTQd",
  "key29": "4uGfEWFsE3Sgy1oFJwergXYbSVBM9FxjehovUZMB42dE713tYkSU6C7VvMXQDbbtTTtx6GDU6GUL4vHs2735J5rv",
  "key30": "5xBjpehCdSrc3Ux2im1Mmewwpu9csDUZNk6agJahbJCDT26TXZXi71F387k7JabKQ79nHtEhvFuwAPXb4CAAXm9y",
  "key31": "2UjWYMtZFU3NCS2MSaMBeBWfY3cx7pPNGYweaVw613ee5LD3Xi1Dg997RXowbKTMiruLsJpvsbWHzgAyYEwgPGaD",
  "key32": "2S8inAbg6261kqkAKDnKT9TPPA9fwqBRW7idJkvxy1peEbU2a3onCJYPh228M2n5KhH4znzVNR9kFN6ALE8fP4Cf",
  "key33": "52PWSN4V2tEbJxTcpVnV8E3d5pxyjrxRuJo9A9yrcM1LQTPZeQHJP86G4v9QjbVBzE7e48Wm9pSeuqC3Y44dMbgC",
  "key34": "3WYZjN6DRujzPm2XTtHp9itMffoXrP21srthrwykUStyNvkrzVx2brcwQCd22GVhH3BnvL8jJiyiELvRTiHqubSu",
  "key35": "2g1LoNL8T3nVyYgxjQtn2nfQMujPcY1TuWPUR1h3Ne9Ce5xCE8FTZ86VnmmjGutbHYboSPWoGNcbsjwWP14GvcPu",
  "key36": "48CGBVydM6ZzkGSsGfM852w6Hp9jRDh7f7zoyHtZcVw6j1WWgTwsxvygZgAy7Zes33aSgEk4dGN4yUNH3ojmntY9",
  "key37": "31m6jfKdJ9KiGDdHZLtfvgpfVGFPUq1DLDMQuw4XcDeuqVHkFBb45bPdn52BRfaXhDtQtSonbdxxJM1hNYumM6La",
  "key38": "25EiPnjaJXrc3zLp4vzEF3XXWf6grX7b2hbVwDY2bfoLwmBhTo5GF7pvoAaE7p35pYGSpdB75zoAMS3zCBLbaTmU",
  "key39": "3VPiNACQKBgE99ZwhyYPC6K8NPuhnPmpqiq3hcQzgJK5CLQs3eL7HpPiMLwagg9D5tNFGV9GxmGgGBZFt64jYPkD",
  "key40": "3J7DdUorPJH22eSyrLqwPxj5ux4iDmetkZFTa3Wn5MLHkVjFdi7RdsvY8b1gwwnuvJATwL8UfLH3bTCLDs8hDJ6F",
  "key41": "3M9vv1mo39W3n1poT1U8tf9EMLdSdPYb2Jekxg8EdukenRSwLdG1K8gyMa4KJPUohevuX6ksPgji5EmztRjq14ku",
  "key42": "5W5SrLXXts92ZckWKZcHq1zdrUekQov5bB2YE8sT9r3V18wo3WJG7gJUZYjfTkkjcwn49Epz4YR5gecy7jMwVvaW",
  "key43": "rjqrW97c4CXXtvqJwqSqzk2zuZa83aQUdUvqi6rob8HSFdJMBv914ssyyCm4CtvXCzD3iLUH9XMWmBUFQxaLRPZ",
  "key44": "3yEhU6r3ywD8USgxFf5XzF3WnNanPDShARWwESzvRycVmuGNmksKX7LW1Xa9qLRbJUA6B9VdEB9Qt8XfNPhaPMK1"
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
