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
    "4rPYcnwTSR4iR32VxPGF7MNks52CEXevvyYJ49Hv9wNM63X5BCM14YLzo56N2t4QyvnccUNE3gMb42YdhJWEy3ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n96AxgDuZHxfS1Yt1f11HNjCg1U9Y8prN5dtsESZvVMCPLpENL3HPBjJLAQn9kMJwMQdMzB8FtfovrAegLpq8U2",
  "key1": "2LE49ZQaZn7BCX9bXyTe9H1Mvkt4nGxeTenAqFUkcywBsEiV6wvBVk3Qk5EL5tf4sW1hyeZoq7z4tkngzNvqxTGV",
  "key2": "5UjeZLYpRzRsP3Rs5jnwoSxFmZRBBM21KQ19LHMxPihmgXAumihE3oNY8pPjnCgxgJim8MiKVknhxHom8SCkpECU",
  "key3": "2tvF2VEFxXa3nVEqGSYG8faihwHATeJSzETCz3MLsUkiuu5hNMHVSvKCUBJDo5Nzp6Ea5xAw6hqP4HQnvNauFF3E",
  "key4": "3nJCRrbLxDnaM3EQnP7wrWibn79HtXtscBdFbPXJbc5rzRHtJ3hVPUojVrW6Cd4aauXVBRbbvYgXuQdi7dUhQvh9",
  "key5": "554KKkYJsBUczD3BxQkiKtKFvej7skkwEN1mLEkbzzRbEdmUpNMjkzUF4qKVBUAGMgNMS66zxaRhvKNQMLZk2Sxj",
  "key6": "2rgtQ8V2JTJRfFmXX5LBUa1dK2jTLU7EtqhFmtXpturzTT8UQbbPaQEKHc8WxWwzCoTt3DEYMG7WvLJsnmcgQPHH",
  "key7": "274exDwq4BxGtwFF34YVGPf51913VhkbwBoh1oLmQCkFyQXSE1zdVT7rGm7kEi6LxgUNhdNo1TqErL7tCeVEgUiT",
  "key8": "3pJ8Hnsu76CqCJ5TVMJ1L5riUqhsovE8EjLB22oyHrBZargn1hQVxac4Ci7NauiN9wqeYhsgNueGh6xvjLxSqtUb",
  "key9": "4E3pfuL7YiDKAzxF4b8JFWbSACg213RhQKnfM6LhukjpmnPsPf9M2EGUEoyiTifqfQjjHPsaRdpvD3nZjnAHBYy1",
  "key10": "2NAhEea59JeRZyP5bp3kYaatk5Jhm9QHEG4xuFDfLN4M2nPPFuV7VPwwRRF4MdrhX2PguSzLgNUZk12kCW7Cv7xb",
  "key11": "3eAMahh6tfQBDrhMeAcErd3WK8UXi63VZDpvKmAKKfwfNVuTQ9HMRrE92nW6cJBzZfVfFevGH9rzh5R887Uv47Jy",
  "key12": "41z7NCp4oLyJcfuX22UZnqkvVpYEmq1G8ww1acJRqc2QkLeESkkHGWF6ryKpsD3TD5wy8sYt2XUeNAyRktuBx2cf",
  "key13": "5Fq3tCH85zaF5BU3WGB9uBqkviAmMAJWUqbUbzduj46yySbAkP3RGG2RSJYtmo8uVHHWhM2khpK2jRv1JGyTpDd",
  "key14": "2hMzhTGqiz85RPbHNKd77cn1t3v9zT85ykwzcrqgR5UnrSaBdLpFk6XBiQnPjWDMzSiq8easyyM3B9PKbnZWLrNA",
  "key15": "2mQNBQvQLo8J9Rcq1E5UvfCheMMhBLJjFAXQb7rJFyT7oTRtFCpad7QiLikFfP6udWpqLBrJB2BQj4FhcU1eVtpk",
  "key16": "XQ1MGb2syAvmP6aBoHv7pTVq6qpztFQNzXtHcWnGAZz5QNQdH3NxvKRoXzfqEdWGkX8mRzg3YodnougZkESKX8M",
  "key17": "5vuRyiQDVcnz34p65i2YPfMaDroNUbYmhcuECfjE6FagxHV2Y6BZFnpaHtoL1dtf9NBpVmrDyf14tqNbVDbDXETr",
  "key18": "4xsvtZ7wYMcpDd6kKbyp4wzLzZDcEFp2cuE5rjccSKiHFB6Mxt6CsMw7BrVTZQRCGevWQ9rDjYiDUD7vQampfRw",
  "key19": "3XX2SMiobhEX96BGXi85xRdL79CKh8oAo3rG1QdYPFfVjDZiTSdAnqyXFExrZYYYaznfnifDWKRGsbNKAoYxL4YM",
  "key20": "bZ99kBrQ19CL252XvyjYSaX8wK9ALAekD4hC5Pu4GEFtmK9xixR6x78uv49qU18xCHp8fG4phSY14WzwxD3bDyB",
  "key21": "2zgVkzws3Tvk7vPJzeFuxEFgkXpM6DDU3Gfp3XgbosU7gDAiVY8mndLEvbobxzLPNoenvmzPJvo7MrT4PVhCQBJf",
  "key22": "2MPcwD2UGHGQ4RuB8Dex1prBk525Ecuw3jSrGNVPz1pXqegVU6mJnhecCtUsi2ujdyiybVG9Kba9B8nG2YXim71M",
  "key23": "25QG5QbLrknWZvUM5wKVvdK8P5orjGhc5aQFBpY3ipK7nrz8TCmv2LC4Bt9QX96PAgeyrg2t89W7RFc5MDXirb97",
  "key24": "45c6ezURhRfpDRQ88ApW4VNTTAP1w6Stsod5MvRUAaZNZDAZSis8EHteUsVcjNBUDrsu7DRmRW8XHXKewM9xuoyL",
  "key25": "3f8GEdAc7NzjccX5VAQ6DV6WvKYoL55Kh6MTcPB4XPH4k5VUgnp5gihUayGmN57c6nZsfUsUVsAMgGygAojEzZSg",
  "key26": "53RKLi85XGZ8Wd9cAhXYVu1vciKDiNBG2adTLmiebY4UtK72MuxKixHKG1vNbGtA31QrYnMLQM3vGQifHmzrVR3U",
  "key27": "27i3fFaGDzjna4cre6KXn3vySLQFmusungtUQxMqXcvstop7Cp8K1uLgEoUHhk9T9VGKNGQhnF3YH7ZZRa6HWaMi",
  "key28": "4CsLe4DD7ZThPvM4vNKLCSZTJVVXfW2MTDepGR7vRxJGMVEu45rPCANpohxddDCKZoracgyyewPxBcwPhDZ7hRy7",
  "key29": "3dfvjnwVY4pNAjmSKQfgHHZFJopCq4ag6VC6vXHsW3trS98SPasNVbBa5PvGGMsqUc5VU9b571crjUV8BpG9EFBM",
  "key30": "jsb4BUHFR6WSh8HKFCk7EeMFDForT3KhaACxPqMSKVBbFhKLymtFW6p5n2MKJ5PWtTXUZ13dd5Nf2ku7Ho9MioH",
  "key31": "4RqN8RAeMvGHeDbtRYCCbPrqdpXPPHwteFj15PBZfY1wLhgGnua6WV4fBaMGYXpMzfAt6u4YyXW2bqUf5hH9iv2C",
  "key32": "F1u3VmzEaCsDPtJtzUmVjGU9rjAkRqZo4UCNpxPELnWdmB3wH3VCYCxHvxaVMpjo9kBpGPetR8SFPvysrchU9wa",
  "key33": "2VsUnXhN1yufhC53thUefzznrBtbHK4M3wtTB6zuVaSJEt81PgZsS42qpySLS12oAifkDTgowddw2dayefVd2uKK",
  "key34": "2g1scEoGyf5p8U3fd7v7M39ukRVN5qF9ezvgjzau6CHBx6JkSFYr6mrD95rDG5HMECXDtV8LvWLTD4t4LKwrny8u",
  "key35": "57mX1qHcP5ACYBaUstHC3yCnonz4eE5zeZ8kxNWWdawVcXKX3i5c9CtrijsoQdQq5Zvjgyub1a2XutTfcZ6nXejt",
  "key36": "5GtBBtC6EeY9W1pxSxAcJS2ga25iysJK66AKBYuh8kD53bSAkuzM9bX1DvFxKL9kVzVERSjd4rU1rytNxqzyYXbr",
  "key37": "dKMR4stfy345t1sQAEjawUcwdbVDhge5XXLNDgQenQ4ZByCTzNHvGhcgXFFaFqYNK5Mr5RFoLdfSyxnmA67PYao",
  "key38": "jkYC8yqq31b8H5qZCaqLoW8fJVGQjurmmCcTej4hXHdMWhJUJz9yMeGY8Aa97osevfoJoez7XJphWb1DPoGdNcd",
  "key39": "36VHJy9wLgta6ZqKYkpyE9QvxeJCdWacqR9ZRFFJ2kA4KF6CNgy7bGNTNvqqEazhxzSBEQkuJzRd3gUATYu2mQbA",
  "key40": "Sbota4FQsgeMnWaKdHBXgZDstcfDTLrVhigqj6J527raJJ2idMEh5ThM6wtWNsLmXofYe3BUbJTVnmspfA7pjhp"
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
