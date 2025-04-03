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
    "3mNHCdnVMB8K4vKtr2hewHK8Ntj4tuZ6bUocV2pRAfu4j3wydZxxCoaUxFnxMXYkAo1bCPrXB4TmxatSk4qnAKkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "478vFh9qDfaj1tJbMwYd2VEPoKAKGxHb2bjUnH93njryAj471RYtmEv4zBRKaJYQEafNxa85ApvRgKydnrrJeQwz",
  "key1": "Pajt6WjxWSZcNzLRFteN3msRZ1rY4E2VqMVooALxNnQftHqVsh79CsqpwRP9EPZfa7zexZ4U6rABaMu1wN54E7Z",
  "key2": "5QUJTpFwn2FkanniEgJQN8pBJPs8WA5YkpKBVLciPHLSK7MTPVMARYj2AhKk2G9RgzR7y13bUc8AYocQVUfj4wXr",
  "key3": "2QPCxdHb6RoZoRHsLMSxDCJDnuJXVCqNKEuwCnWoYMvc5JoQJd6GUpUtCd2u49Ecz663ho3hN7Yc4PtrnViTogdB",
  "key4": "47QgLwFon9vPpYTHEhUq1YiNkn4cDahbcDUGquATWqzGqaVXdqSipGr63Ev9ApZ1rcJie6nnJGdYue6RCdKvCtYJ",
  "key5": "53V8VAvx2sxhoTuSXnaVPThjM7CbgReSayq71ZQXpoXLiCkPEV7vZbus1E2uGNfcqMSJMXPnkVmdecc6ynb7pmYb",
  "key6": "2rYxvPbKVvuwdP56TLqNGxE4Wr8s14zNiNbjH9WbnhMCqH89mWMgqA7ttKsrg6jgD5kqgXpb1AqjBeFDL31kbwXY",
  "key7": "4DjZCtRJfxsLJHCUjnwXpk4F3BQ1Yy3fNep9zqK3nN7evU8uLdDEgo5QZB8w4XnM5Q3CJn11BXAv5TKDuRqKhHH3",
  "key8": "2RxzsEF9uU4NuWsXUPCuxLTF1EBMoxw93Cu52Bdamrwfm1g48wvQta7DiLRwa5xri845wc35barnHW8u9uubn1EN",
  "key9": "5VLDcKi8NW9ZFEbBqF9vXfarwQ6fQz7WcSQb8sRHmgRQjDCMsXCaz5B9zT1ikDhLCVWxAeDFnHVLAUqLB7N41FWv",
  "key10": "3VZTDNpYqkiNwkKTcYDgjsEg65dtVLGspJjUFuiSrZrwm5KjpvaQRXQmXmRjMAW2KRn6WmYP3AAfzh5NsG6Rmgom",
  "key11": "4NzvGUQaR7vkyvu8xBS1yNF7mfuvcqubGM8ERwwDj86grrEmPZQWaMPYgS3kvYW3z7ZEQjzGzngAMwPCVyTLmzYY",
  "key12": "5u2F5Y2HkiF5WHTRsAtt41qd2jkSj6rmC7pjxpqVZU964AtbhDRYtQMM5sAJh11JcP8kMBufuFCkNjVuV9qjW4N4",
  "key13": "3exkxP6MiDbqrZpkeFsyqkvyDkHCKdihpbPz25yNHWeqDdLAmH8bPqB3PDqFwoGsPZ4ihjdnufQ7Hfw6whxHNR64",
  "key14": "67D3aagBn5GYxcqCPrTbW5ZS3Tnd22t6Xa1jEFmyNoXaUimTrdZBd2XyzyrBiJHbxRV2n62QwCmBtH1WZMPWVuff",
  "key15": "4kAnNT1myVCcKiL46L3DvCgYfS9Mkr8ReHtaJ2AGPKBsB2i8Ri7jLj8dUXd99Et5Hn4h3ZJKU66yQTTpjPw91EJt",
  "key16": "5BLPBQMkV3cH41h5zfHYX1AHGgAt6W81uieLZNbi7K9cFnrWp1BDnWojpy9DeF5zgzvvYfZZRSMqskYFAMTDvn9b",
  "key17": "817qMgy96r9qUL5TNMdwoN3AZyzR4t18HBHC7DMzxii1Gcg6uYCTAb9LeewHKsdNJxk7viCp75ohekAnZeQrsfm",
  "key18": "JqhFtCubUfmknHYyKcdNeSMHHLzUCG8pZ9bsKvcvcbdzmLijjJ6FLRYdZFfMMeBwjR7AnZqUYYynUsV9Z4chDzu",
  "key19": "5C2YY2Xtgg1VWBMz9GSbSqETb8DTJ8W9WtTEsHU5UQftUDQ7sAaHNknpKFhNdMgKLeLYrbEwt3FctpC6fz8ftzh",
  "key20": "5SZDjWj5FBTycCMoUYUBYiZv1fTGWJzzTG7xRiAjzGhwJE7jkMQJCgThKZkpj4e71chkTJfpLb5SVMiScKBXvEdq",
  "key21": "4wyRDoc3SF9mXg2g9dTciDMT26gvDsFHDxwzcAFjRfHrpRZsXVfD3iXbQaXvuXF4D6G5MCFte4cBqNdV5tSQCH7t",
  "key22": "4voyhj4c13EjzhfZeZK24yyJC8rvvToMTU6pjWopeRUgAzEKMfPBExRZtTfYRfh6gkbF77nG2smygqnWUq5rGfHZ",
  "key23": "4JpAS7KyNnHJjcXsKsrnVeoasRVPUvPpyhe6DSVj5pHguAM8yiRkNF7c7955BYCMGayL8991ybq1o9DTB2DysGqM",
  "key24": "yiEGyfR47BfsgbUhAeQi3pBNm8hrh44TZbbZdQ4HeLVuyvoSRATrZPovmbSoY7BeyT8sC7EBvVHbiTsR1FJWZfi",
  "key25": "2scsVMHAnjHcqnBd3ki5QeBrtZGGnJJcihHdVvzt7rTwBrrQ89GkzMBTk5enCjpPNuVH7Y7jMoPsAPrytLDYxnfW",
  "key26": "3ngMitWDJDSv3qZVpoPjoWS19SrAcfjvWQzDeMihgTFkgiJ1C1CEmsTGmAxLYypQGRe1BRoU9yTi8YbxXvW7PhoU",
  "key27": "5C8vSQyTjx4k8egA7wXu4vsiyY8bH6cv8FL1z1oKrpLxjmzKT1Rhz9eTc1XoURYVjCB7v92MnziqvecJnY2DzCtH",
  "key28": "4oZCgYCad25UECaaZLND9VuTSnzG6DfNRzoy6CxzLGm7Mabji6whQkhV7SxzEmKdQ6mS1T2LjzCrrJ1kB6LRQwG",
  "key29": "2Bu2uerZyoZMWHsVzB296M7fbygsmFazaZhyYMoiNA9VDUCYftMCCD3F6gNh1WSPmstjVndTqSjQzAbXLTYH8kz3",
  "key30": "42taZtWrgdBGYo1X9L58esVwLmnrKQFaSZMQkSzRJFgrWApLZwyshUZrMsU16duS3NhKGJDu62FQrApoDd13NDbP"
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
