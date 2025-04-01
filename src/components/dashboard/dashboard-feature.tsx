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
    "5vrpBJhDqdEwezZjnQZZNdsfVsV5wruwHisAmVdKqdmSg7eGPYiWaMrpNknkdkR7oE284gH8VvaQmqwFxN1fESWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDSCXdJmUN2iAiRkiZzwK2Tf6S8TgRkmF98gJp1xk1VedJeYWqcYLcCT9VyLJvaL7QEsqyJuuT2JJka9sLPCWyx",
  "key1": "4sbQnqmEoqGgoEMkDsP3EWJqjQBp33r53Y7KSzNME1Rj4zwtZySPpVK1RUYfDQL2v4Zr81aBPLTNRzQKyrnPkc52",
  "key2": "8FKsrsb3R1HWF69GHtcEWjZigKEWLLRqCh45Dpe9dBeG7HVwhjGjBynNMueNgSatEPw95yskzBt2NmVVreLvH7Y",
  "key3": "XKycM4w8a6eXe5jTYVuZxJ2ZH165PM58LJgdnuorE1Ya7Udns2kSzD88UEvK8mLeSrY9DbN6bkK2Yi4u7hXv2GF",
  "key4": "58CWHP2NvQdsARCvJ38cf8yy8b3ACmPMjLwHuX2R3T9jjUHrwQ2ZHFVW7CK949shqry9kvEdU7avq6BQShG3aY9V",
  "key5": "HtYna5HE8ujRdiwMmVwv9MH4Cxu7wGTRyBxEio9eoCcUKs5gd7dcffLgDefww8wHDms3MfzMazCbNpAP8mewJt1",
  "key6": "5MN2LunTT3pmo3fcdhbvjCZjDwkdPevrescWzAGPcHwbkAmsviixU3YUcQ5pj2zSBRbQzvtZJ5fUrYMEboZhQXn2",
  "key7": "3kBfMyejVSMRf9EeGJJhE7bG8r2wxZfqstEFFuKetgZ9sTojYWLWPUQ2vse1BFavj1Qa6NG3vViaiJ18Sa522gVQ",
  "key8": "593oP4hzvVmwgYxMdfdqx5VC52fhzPTghtCJggEWAZ2WgPAKqv7TJgMPNP6d2595QrGUNov82fn3AjtagGugTsC3",
  "key9": "3b7h3ixaD8vq9jhs4QDFygoxHfkQaDKzvQ6DoDedjDfJS6befdM7GnmsdR1HGHiRpv688Cf3Z8H3grGxGsXvfrT7",
  "key10": "2SqSGyM8464Npef57VeXmbC757iN4rq2766V8bJz2BwLAtMBiR8ExJEXT6kjPYFu8drYaWvGAVfyKn2ZUF93cSbU",
  "key11": "p6xZFSChmjYZkX5Ly8Mu5acR1GpdUpsQo9hzKZBzfFYBxE7TWtA1dvRUQJn5dsnqyyN5LWUKH44wwUrRL7WLrKr",
  "key12": "wrJ7pSjEfG8HKWaHm6fNE2iKEc7T76H1KYBpBDLNQeMnXTw2onz2UK7fFokDfCCx1DKz161ZAe6GEUMZVbzQP6m",
  "key13": "vJydonRpeeA66s7W2utdXjRPtNvYxXi6yXDAeRQc9j4trV72ED62Kvg4Ujzih3zLK9Wpeqzv7xDVU3Nmd3c2zoj",
  "key14": "3NGDeFHrwVHE32g8nqgMCU6UQAMwbj8ixrbnpE39dvT7YiVyvm4cZbWvdmcShNX914jiabukvY95JJNyABbfDJje",
  "key15": "3z9qM5hzuvXb5ZkjT5D8jfnCsc8RGuFU6TLwuy2q7UodSKU5tNK3eFxxtSJrzgNX6xNBBU4n7jygYSpKP9Y6mtAi",
  "key16": "2ZLk12VRGVwLiTx2Gx8HSUC2TXJQr2f7fawmaCmyXVSiaX6nZsRfrCyPEuuNpYfPWS8SoXrcdAXM7qq2FmQGitVv",
  "key17": "4nF3MdzkTPfD78hDQREYFt4BZ2JRHfzJtpopGhRgEuZamaJfytaQLFxW6NiPa5HB9AoCZg1hUAoEJQCu5dLGBJqc",
  "key18": "3EvAYw2fD8eRiZuEdP67AwJbRL1p8UF9hV1TZeHUCPASmiJVFbp9pXbH6GX4QFjVpxYc1UPCAP2zQpSLmAA8FQfa",
  "key19": "32fV2TLbNHgyAbauUos4ogHo84Yp36Dr2rCKGhtC8zG1cGx3Y5rxfeN6reoREKjwr2JCrToFFzN7ac5XARpY1nnF",
  "key20": "4eqTCTr5Eb4AZmLLKyAsY2c2XdoExKdu2RAcpyT9dMyJe2qj7Ff7CKAckX4FNgzH4hvaTka5GpHGoi5s5QbQ6Dcs",
  "key21": "5746AzEMUxZZLtrCctsz5Nhxk6TqoWSJdYD7PGQB6JPFD6EjE7HZ2BwCc411RT8TESwmMA9sNaUvzoLzQPw8gAAg",
  "key22": "4pVF35rtamEBk8b83PRdsKBTQaqqgiBVwMc5WpNsrpvZ6AGMWX9b6Yjhc9PrnRf5khuvaZzQYnHnofACgkVnKehR",
  "key23": "3XgmaErdnuhR6RzeXnZL5ycARcyUQtcwz1WSLpn637AgBdKCTgGjsE3aRMMHKPijzCvhncMuGQ7KyCrh3Q7oZeJd",
  "key24": "65gNzMgcvQkygE5AQUq1h3jckYNPGyRsEa4oXh4c7sA1pfBxFNyi8NWq7eVWkRKQgEZjdgPkcUUPQADXqyynR7pj",
  "key25": "2rahvDGEsjA78taqBzfyNiwfYBHogkEguNpprZR3x146FTLFFd6NSysmQrMsttJdY31p8j2j5ipMntty3eotbGss",
  "key26": "66HcXMk9DRF8vJszrJiSoxiA32fYG1KnaBwXVhGAgAUPsG6g9JYms12CNAJkQZ8HLwYgzRii2ENPD8ovc9JkKoiE",
  "key27": "5YszJa2U8UcH8rK4aMbQnMHqZ41UTnX1WtqbTepUKfr5DaoMuiC7mTnAxutMSyAhotWGViURj4FdpUocYwcfkArC",
  "key28": "4PLoREh27bDmuyaAn8trZXMMXSNfpR9gJZWtZHroiKkFsSLsUjQ4i55vd2a2L88CDgxYpcfcgXZ4ug2QXsTVzm3C",
  "key29": "3oy1pTtNx3mUudsvDUtfNonxsdMYo7u8TvoKqidSDQfDBYhsimP5t4TR4DpwG3DWdRK38u7XdQsJN7R7bqTmCkko",
  "key30": "5P7csiCo4e5HNu7DnCgkEUgzLxRohYB1vy4st1zpK3wK7QAydJMgbXuVjkHMobDED6EhfiDnD9uEjxRPjy26N9Hd"
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
