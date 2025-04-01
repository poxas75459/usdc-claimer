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
    "uzbhYo6uLFCAj4MV4d8q4SxAGN4zwhyomBac7gjjaPRs9gDHdqrgncBwMWY5aCT8FfCyX1craG3fKof3ACBB8HP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mr424UP3zRNvpjXCDAYWzXuzomEak7KLKRcsjwoPyR39A4sfuBYmEBgiPFL8yyeKhRjmTLURWunosFM2AqXPPtm",
  "key1": "4cejE3GQULQC7jXV7MTBnDww1DWMrAHwbrMSX2rib4xX3ph5oxJbsFWEWjRudLnJXQ1UGF55GSUwQus1JcVUUo6b",
  "key2": "3bCgR2QyLc4n2YioC5qKNsYHNpt7uuAaj5odSAmhRFooiyWa3yD35PEjXsd3BytNxLWpfK8aFhvtLkraWRHGReNr",
  "key3": "kevPTwrWGAkvASV9PZ7jFNkp75BSW4KKPn7cBLis2ufnuojMUJBAoEy2zuyahPw9xqMgtUMDjPdMdcCTjjgeNur",
  "key4": "4ECqbCHkNpMFMMQJfBCyL978P1hnbcePosUdprVFVTnUFHN1qWFE1ToKUZhPxwkosnnchbWFEnwgQ8ZgWe5YoFDj",
  "key5": "4BoyfkjHv62mX9ueFQyzmprTwHQ7ivkv6Rts7JJ36K7pxx2C2CpgNPLSm2R8Ky6u91boy2HE9Vz94cKQbvYXqsxP",
  "key6": "2QqE5SFjyMStbBtTRzzt6dn6eMuXoyrcLVVFwo698nnCVkY87xAJMWj9P6aXNJky6iTKKLuBy8nLcq43ipGynyW6",
  "key7": "3WcRgG6BKzBA4E2WRKpQSwfBoTcDz9oHtGKYWwh2CdsACDc7sxahhG1fd63FSeDoVTyEk832XkRAF1EXZSgwNUWH",
  "key8": "3zsWX1rUPP6x74bWvHFSB9S2Q4kuzybfXmoDg4HF6mQA73cpXRJgR58iFpaYZ6hxosiPWTAQ62uyRCig6sTb7pvy",
  "key9": "5vxESiHpciqSodzWw5Pfg2njFaimCva8xDc8Ps9HNwGyjLtqTKRKjT1ccSRFDB414Y1Pe45Zkqtmzs5pBQh5kMA4",
  "key10": "47ydBSmutdnicXqLuC6iXKc1eWnbGsNc3ok7uvSLJBP9HLqsPKJGSY7Xo8jrJ6kUWrSjTLmovRU6zgabtMPvHq1c",
  "key11": "4xdVBY3pmYaUNbrrHyxpZWEBgR3Wba3heTdzeC3MUWJB1iEAzFR7v5nYTbAw8RxnLDaiEpT4SBQGRuhhvPSMmZMp",
  "key12": "LFYjCcQGKz9qtkWBKgQMCfq3gZQDJNFqFU2m7q5dxmh1BGrtF6z8kEvqhZCdEuC7xjCyMSGNY2XSvUWoM7i9Mw8",
  "key13": "BTPY16GvsT1GYnLqg6dkcJ1evdpvFMkkxmYRTUQe6yKunNfEzH5BPg8f2Eyy7LGLi8nGKYqdNvKY2aeGKiWsaHY",
  "key14": "3UwXGgAAAmySbDMtAjv45m5587N47PJ4qiAxAwpUAjeFJCSPe6iQTcKQykkAfyzE9jhvqibA9wSCveKPNka7kmF",
  "key15": "3mA9sQeLhsyCUFiC4Ddmrb78TJCUPVdfzo7gU6oqXLRoumNM8bnN9hBzwX4PpdV1KbXEhuJJJrkKuNoDwZVgY6XM",
  "key16": "4RpGtUNBgSqfNJ6k1LuVQvxWJm1z78eEqq3K5rJWfKZmKeSExbqJJc7XBrGCuJUc1T1ZpxRW1GvzN5fT1ajCqkKx",
  "key17": "37b6EmWGNZuuGMCyfKJrgseaJxXVtDF9jfW8rooDAjiU8dSQNRdXVp63eRqEzjS8XiPArvUhfcPXMSG2bGHcqYBW",
  "key18": "5GWM7PhtndVL1TXnx5cNiwnZkJPiVS4MWA2Dix5MF3Qcb9sVABmquwsDYhxQLMywNrgYWXQ88HRD7E1EEvAFr1nZ",
  "key19": "3zfTo3KqyihXStJDnjbvVgUqhfArvBEDMXNUWhwua8zYNbeghKFTifdXYZskXhBMT7JSuHpDqKy8L6GRaMoxNYEb",
  "key20": "cHbXw58ufGh36GxRXGyFRd8q2vzNftbjPcv5kQDCCiYJqtyzu9ZZcbGTgKHRej3PW6bdbjeAsk9UtAcB5kQX1Mn",
  "key21": "2Wpi3ZZBXexs3PnvUQ86EczMcNBkD59Fa2FXRmu1J4JXAyBypaHvpyjjcgngdLdAqTaiGH4Fd4rJERWLyyGUr3Cv",
  "key22": "5EAy45xMqbP9XQBfiDS7a9A78dXtRgqs5WY8wqZBAiSCXQ9pSux4JFT7nku7ST4v3jncm6WfuztEG2EAnTPCQWJD",
  "key23": "dpjpWLDpGtNahDkx3vQkX7iKTsDauEED8DyGsab8nkg8H5fkXwuL68CbjpcNTcfwHpTu8ajLaTzYdqZFn88Jt5W",
  "key24": "44TpLFVD5qvBXz8Px8tzaArBTpcWS2kVxm9jsPkSbsmLkTKQ1BfnpuAuH7JR1KjAyTKaw4D95QKCpSKCDhM4he1J",
  "key25": "28zkt1E5jJX6Hf72d3MKKfKC3hjfX9tRuajBiAUF1rs1ppDVt1FbLZNrpepQWxZYwgJh5DSsf1ZDS5aj4z4R4kzZ",
  "key26": "5CP1Lsnw7j7uLHQ9QX6XkzMFf71ADe23DKQ1k1v96wpH6j8x3aduJpbphFWYqAApbz5m7priWABRTikaYNnKeVDf",
  "key27": "2Rs4fTKLuVVX1ywEhjBws82BhyoaaMFR4jZHX2MUoy6csRWAfkqjDMTzXC99F3cme1vUm12fkKsFnTZXzsezJRX",
  "key28": "4PjwdQQLv9FtKxxnLXYU37hEgKhXw6LW7NykK5MBSh2GefcbH89ZhAE6msqsTFLJCsjStxnafsrcKmXDyfurK2ya",
  "key29": "3detXezrNjsaCdTHmsFrJ7owYusT4F7pvMRPF98CTU6Y8sXVkekhVMJypGjpVGjWpzGSy6DnVg3e7W8M3CzRagTd",
  "key30": "4vzzdp7m5aVwXpeBehFXW23pY4ELkJtTKJGJcEM4z13ADepUruvTV3GZDkhx7Q3WdhdjSncdT6VbkXfVcCiWAKbF",
  "key31": "61WbB3WCKN5u9CdeW7A8itRUaiq3mwSzmQPaSjvHuzxnbesnYkNwN7RbmrhVii7GWrGxaLa5tr1C55R5KAxuUhxZ",
  "key32": "4PrhVAeytUpT126Q8HgRHCcmrgqRMUKc5P7vSk9ESDZ48RsWsDNYPyWxBcJijed3D1LJDQDKkwCd7DAxgNdJ8JSi",
  "key33": "xDnnnwP56NSVnu4XmND49H6smTr2Tp7K3BvksNgz59GnttHEYWHWVw2tg9eBjzJV7sZD5BpXPwbg1wPyZbCeQpz",
  "key34": "4HXtrMHEk2PoJhpazQGaMdQVTjuRcm7zNEmeEQNyGyx7GHtuYs5EQP7GGs51bR7ibdEtWCy48iFzYYspkmS3raAU",
  "key35": "2t3w4YBTsVBgGCFdehu8P9mevEMSjsNByhmtfom6rYSG4m22GTLo1Sohu2u6e7naApTZrSEHripma9n26Y5KH44M"
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
