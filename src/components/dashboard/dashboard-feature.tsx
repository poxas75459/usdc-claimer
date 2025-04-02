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
    "4TGW2ZMCCBv8YattxawY8Yfy6ikxUoqK1sCxhaCxxpWdiMJomqMtzV6ecLB3CvpqjvQKBHTmyQNJWs99GmLrvNd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xiYteD46RfxnHdyc282fEqPuLNWart1gvFF5NwgwxqJvtYTicR17rRURAJ742BCqoBMjQh7KnEwe13bQzRMzUmp",
  "key1": "D5kPznvbdRy1FQ63nDH9rkfKPGQWYiv5QtRdLDrB2h99xHmMRmv4gjQPw7iyvvdX4tBP7KyMu8UxZ1r4zH8bqKc",
  "key2": "3VasFpKzxpig8uKbbnAZ9dx5p1c88A2zcJ8oqAvHYzYXKofKYwA7i9hUe4wwopAac1D2VD5kZfRejoRmSkW17M8j",
  "key3": "4hu3mwCRFa63kZScT4FrZG1jA1rxHYHUUeBwyrVoCwiseQCDc6oACcBYH9Ut2bCYm1gR6husa2ejxMz8QUzkbvXD",
  "key4": "wfBjNFsJiNCEE8RNJ6Y4ncb6GjF3WXNFnzWS6kp99tBLXyeFYbvW6f9fFCxNcyLqgHXa8j2DLwz4G9Q1bZQUvNk",
  "key5": "4f5dbr6U8q4sodqNcsUzdHgqCHnHGqXty6dzdCiLXP6pNenSM5sC97erQVw84pu7gn3fcFQfW28xGWTrwybBRQ88",
  "key6": "qW5ZzLcARB75tGWMERuxnf9vehxkQh4h6ipD5GZPAX2ZKyk2vpeWTXVwUrGMfs9KVVoDRBE6ET4SLwSnGXEiXPK",
  "key7": "3fSjnHmcWR4diw99m4Q2CQGwyxeAXrqwC3H71WJghvRBByRrgow7TQGPhX7iaZP9DfqGDD9xNL58pdzkXpfLnrRg",
  "key8": "5q2hiCfEdvZiR2pR82FstpbmNYbEbxA3cj1BEScYA4sPc53nRLL77WUQ5VmeCRwLzxowMBmdwmKyyWfmYskgZEXe",
  "key9": "4wZyGum6q9gtpYNHKXHnQJaFd75YbPvdqLVLn7ZcgToZJo1BN9neBU1FvqwzHttUn6SEcchtaPYYqXeTT5YNPJk7",
  "key10": "noudRiDDDj3Ec5jy3r79KVKztRwJ2Xn4mD9K9EmmfNQG4PG72qWhfyRUsQAFwVqkk82RyPFjRmn5sYpYBucQHEL",
  "key11": "3DBHSSG6K7oTPMhkaUuxKNXJkF8wXvoXEKicUZcGZesd9HoPB2js7Az4mid3mEf5FVLw2PNGx4MszxMt5miDZ42y",
  "key12": "5tnRPv5QYxyidbp7w3zZG7LkwpWiHHyAcLd6E2gJPQCQ9cMr3MytqMMJZMjAVa2JQqyfUVTDX7pVxYPCDCsn9eU2",
  "key13": "4bSgpY2BnUGzpTRSCEGALGZrvZvsBV3TCgvz4J86d5Eu2vdR5xR3wUJY7KRhbTqohGRSmpFNJ9Q6nLKFYDT3kj4X",
  "key14": "4yjnwyZHvZrprSGkUcWedC1ZR9HyALgBWPdUxrdvGC7iKkMAHzmarm6SQHe6SHSdKEiDFrbP9DzGuwD2V6E9KaNe",
  "key15": "2fJVyzeMRSzwmd7QKoQGnFM4qX7AGNFVf7MLcUE5A35WGxfAyy2xyTtfUrcDeD1hqdSAe9K6xMec3dFeoWvDbRaT",
  "key16": "2RzoRDVhX1nPxuEPxYzcQ4FrSApfsKtvUAe5KAidiz6RVooR5ZyYRd26nrPs9zJueBPVfHbbmYWyXq3hGQg7RJH3",
  "key17": "2uMtGkodn5Bxr6gcJEtzHJhagEHgdmMaxJmKuiWgMzZ3cDZtyQUyiDvwqhS4xRDXKzAS95TwfLSToC6ySsqdZ1LA",
  "key18": "48bFH3zfkpoyp8t7NSAkuNcYf425b6etYrtsLUvspM6E3BpiaLt4pfqK2EXvhwDgXC6HpLch7dNUyhU219kLw9Cb",
  "key19": "CoHJrt4jKYiT3AXwuc14jNMajqoW27ai5r2XnovyctzdjjZ1MeZ2yVFaLwvAFZREPJ7zTrgdTnTM9VcRNHFcTxh",
  "key20": "38J3GwEbG4NQKDz2WBUan6QLoYSSRoDsK9sAHK8n491Wz9SAfuj715t6TCHZ2Mwx8h32u2MeGiYrC7nnjAvVf8t7",
  "key21": "331DnMHmsXJyMkeoXjxMExwXkjS65SCeAviEf4KqHZcTEyJSNxm1ZtkyaQCCQeSwfiHykNnhArKdUnbtcE1cw6XJ",
  "key22": "31tu7hioFZ24H7VSmG2jVnV4az7LW9tpYbXh1Pk1MUwvUsQSC5PhEc6Qo97PUyELjsLbFsXsQMf3B7qLi5wPxXs",
  "key23": "jZPUGkPejJdUSbk8MBymcn1yr6oq3KissFKGPHcKXaZVm8Q4bavT4dYmKBkbqQJLD4KvYzSbsoVcvR5tNr1xXtf",
  "key24": "ngaXAmA7rHebtT2Zv1h7Q8DcUpyzbWaattnfgcwJftbo5AE9FtNT28ie9F7N9EuVMaKeoQZ19u8JJ2Vao6dkzCG",
  "key25": "3o9JR3t91v7yEtA7k2rtXU3oTM8jR38gmbg4vYyk92frUXtHBDony2SJxPZQGwvceSCSZ3FkM4xQFwdsaaZSSz7W",
  "key26": "578rquhAUri6BMRL38EhpiQ7uxRqNwzhonDTNTTc7qsokRuZLNPKdcz64nafXksiVytsSjRwRhWXZtpor6RKWQpu",
  "key27": "Tzs1xE3MZJBo75am8TTKrjdTZmVUk16PXFUiBGzmnA3yP3AgyEfYJNS3LyHGKq5TyZcx99vDENzHNPaHR9egmCD",
  "key28": "3agHsvFGKJX5fJrNJJJQnDrRUoZHEgPKHsEpTiTPerasBDYrGm5zCgKGAeozC6YGK2oq5KgJoB8mgwtc5h4VnqpR",
  "key29": "66e5oDVMXMRXSnsoNXhxPHcPBGG6RkFfQpphB3Meedcmj2rQMcQ7jZaDaePPU47bNrEPbdZd1DzpUaw54Rr1E79A",
  "key30": "5Nz9QWHt4SZmNoQLEX8P3m5JeuLnQscVnfob9sRzNp4upAe1VDs932abK61MAEJvaJ1EB49pwrFDupoKmQkKNnp2",
  "key31": "2UCuGRg64zNXa9Na1witRcbZoweNfVAjtjGNwQJn7y11KC1bixNNkENmY2yBbRyixwzg2L8Ryu7GCFhH25BTED9",
  "key32": "WVbL824zEFDDPPicWKGCygt1fLtNuMKgy3i49GJEwhxrMi53m9852qV3pz9dogMHA4BvNRUyRhjuvaqG5zdi4tA",
  "key33": "2a1EHzUuT6TZTKUdzM7y9pE9dwCNvPmpkQfxpxidVzaPTYF7JPzKWSeR5nHi8b2TL8YvzMueh5LiYQCSdwo9dQ9n",
  "key34": "3qPPzjr369DmcXvFSqpk1K9Q7JzXFny3UWLRTdpQ8JNrotqGH1MqpeMatatNmhy5NKxGd8JKH2ivPHWT1rN21Puv",
  "key35": "5zTAuWxMDgrS7pqif8DnfE7YxYAghipiBQo7ivJ7HFPdqjMkpM6EUbRq2PQaLy2agmZvVATZWz9RyWyA4riJ2Veb",
  "key36": "2iCU3BmZargXQdoQ6yVu2tdZLiminCbvFciqWmEBr2ovjX4YKUTuwQCCKCXmJBbBdQ4ZRynC6c1ijyQQb7HyRqxm",
  "key37": "5tiC5tsMLsdb6Sp2Dd5MqMboWKz5FAVp45Xe9Lgp6kDnk81GmLUFS7MDRe1v5DPWFHUENubQXQjogkhZAJnw756m",
  "key38": "638PFsd1U7X2TH4H9Y576EphMWQSpJ7Z2mSjNFEFAg3xgMhxepDj5WmvD7ytdVtehPZUBWzCYdLpmGbpDDXkVEEJ",
  "key39": "R1i3HZLJ42BWXumTguCA22Y2dFYgKDHpPN9haTG49NsZhi57jNvq8LvktHG8Xbxmf6M26PkD4uYikBe9Ks5jktt",
  "key40": "3GxDeEDULrXUnQcLwvKSHkzDjF26qaB5oYm94mYAVxPpB4SsvNJixke7zUq6irGosHkQGgvqh14PM8AmfnKh364V"
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
