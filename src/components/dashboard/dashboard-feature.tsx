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
    "5A45GJWqFmk1gDu3w5mGc4aKh1ez922nkfuxonjKLcrP14MwX4TQAqPwwfQMrh2octgYTGEwRPT6G9abRAy3QXD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqCWvv25KWTY3nK93tGo2tWsTxohuHCg1sHUbamHpHwKhnoZWsV6hc169613Mgwzmpx5UZKbh1yv4daQnB81GFw",
  "key1": "3DtDo4sprRt4Vmib7JrJ5asCuGXkqnCqhaeSAMadTxpeyk1JouXS3FisGjuJphm7qHxrL6ezZjzYPTWFxnZgQrTt",
  "key2": "4sp3jqNFXmg53b4qBfFSxg3E3cg51RXVkdf1HURUjdXMy5tAibHEJrkk6jzCGRfka4BvdMtWstCinuJGpEqjb4wJ",
  "key3": "2uh36MmxD9QCQwNAMB1QxNT3yW9yYdPkZEq661ZRgwWR4MFkxTi4vyvcaHP8g1z7UZU8Zr14t21BtpGSgsrVVkuy",
  "key4": "3fXSVQhfFzzEySia18FDo6XkiEAAib7trWPFjX6wrwLQwzCTNpTtUW3XsMW5S9xZfbE3UD6RhqobgKpNZzAV7ZTW",
  "key5": "X9nWVid7bBySti6VqiqnzQAH31qPyuAFxULwhi7NckXWRvpEukjQHAUsua17CC38fbTnw3CU9v5ihNq9zqca68S",
  "key6": "2yf7qH7MBCAGtUacXRhCGLL8N8NdZKuAYzCex8Y4SMuRKAK7vv6HAoAjA33PHjYLkfaDLtZzyr56yRyByc94Eagr",
  "key7": "4FRgpyVmQx59k5mywKN2mK3TzEPH6QPymWXtVX11ujofrVJpBxj5vto11aNd7eP9LRMZ14P6T5CP4kkAX1R4JStw",
  "key8": "2KYykNYA2Prhmy5dwyu36XVSsJuHYBq3rQpEgVBhXs6NKjuP6iJ8xxPbgQxqCYHfGDuTk3zbPma7176wSiQNcTSx",
  "key9": "3ahfregDSSeYmVmWgVAfA3EqF9zBYut9iZnBbjMGS5vPgt19wrRQ2XvanfvRkmAHXi7VwMNkp8FsGRV1UhkGrP3A",
  "key10": "2ZbbybomGmXRZb7cFeobGojYwnLwwq5R9c3J75Sp85t2guvf3GjnAtf3JNKwsnLM5CZcKu9fX5o3LNTbvFsRAxm4",
  "key11": "4nUg2Sie7rKzCvas1NsDiJsgCWdQisGacvrkkzLn5SvMiTdNnmXgMZGP8zhwvC5B1ALqcBSZtuwT7eknxhMbxG1f",
  "key12": "2NcFrHRMjYZQ5EUSBivQUnvrPXCir3ER8rwv7ATAa5LfDUKLbxmZNr5wGmxRQgJ37AdxeEMNqKhFU3c7V1DHmijz",
  "key13": "2WUAPNxkresHS6HcXhAQ5KVD7R7MmoyfkzU88iuKso1UsYbKHkB1m783pES1fJhoCC2jSKfAKyEJUNx6sefvhkoC",
  "key14": "EBs2UPXazXbv9RJpKLWVw3Jx2JYg3PuAXymEo2jVc1WS36RhnsiTRGydyiWwC2mQnHTP6da6cjxmcuHRpjFzhXV",
  "key15": "YJYFEmAEU1M7WGx1swz3DJcW2WuDYcKNiAaF5RdhK8bXMZjzRN1W3PCKVc94oBnTCMpWpbjHy9gMwiKmv4nXV1z",
  "key16": "5saT5K2mQsbd2YY8QyTvtDZMeKe5MML5DTezS7McKWqe1gBoRgTdgdHfR9wfWFrmQ3caB8VV4iP3gDh59Y42S5px",
  "key17": "4szpKjWf2XVoHgkHz4MD6WG6g5dXQ8QorcBzWaYCq5LwEKTjXqSZXSCdq4xzU2YsSh2CL5wavfEtAu9fpM9hikNW",
  "key18": "N59f2h8NhuFLV2JrWceKEvVp6bAKJo6MEHgGWxZLJwfa345Zqyh22GdJBPmhyzExQW51WtFGg8UUh9K9yRD5BeU",
  "key19": "5ySRZi6kUFABVeCst22NxzKUxP2HfhW6oBwAYyAeWGxpfynHnMjTbQ9darZS6Fsu9SpifAENbLRPLHXNz7ppAhAm",
  "key20": "5MqG9STTZtmChuK6vZUuAvC35DgpNMpbmJ8X4nnbZJtLAshceRux2Sqz3bj6GgfqAhrbb1CEcyH27FpGedGMckWd",
  "key21": "5PqZm4N2UEdPqFgcqAjaJMStxv5oGdVWSEY4JSf3rXXQ3PS5hTfwEShzcgtFZhCoR8aLL6TJurJB7YvWofRLyyHG",
  "key22": "5HpRWoGvA6Ag6GbxLmZggcfUbrniRFMBPWrsoWuXtHVQhLeRQBZxL5bdoSnKK3pbpfmQEjG8rMU6S6oAAuq6LJVv",
  "key23": "5fow8Xwf82zybwnosVzuAi2HYPmD5eQz3CMYRqBDiwPmyCXKG6xYtx6vvoESkJHryxGV8JFirTESQPDwnuFriFTi",
  "key24": "4ytDECugF6fh4ktmkV16oHrsKR3GjgbqRSkMLx5LzLvywzKskbZEvNbF2oK644p7yQAYihgQWioMu8hySRnxZmm2",
  "key25": "4t2cFmZRiwcd1XowW8eGnv99KZt4RS3gjq1xBvA1ksk4vec3hVDRt8ykw9eLQEPKqL4t7P55ipYJU8Bp5xfEhnoM",
  "key26": "fWRaNhq5PFwneMA7xUP2c3siGAeEZn8NqJ3vLAS2YYHPVgLQkYKmgus52hkR8WJFtbgRtv1myg5LCEjpr58B5gx",
  "key27": "428YJ6DYF5DCvw6ggt2cGMUa4jgz2jJ2UfoSp5spVrFV6qZC38Y6cbBzBpcfzzN899dmnW85VJi1iRr8vN8xNfAz"
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
