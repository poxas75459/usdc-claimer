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
    "5XAvVvNqG38ksbk8NBSJCH4SaboyN5MCpsb7ECF4tXwHRCTiSUf5uq8McKk2gtWkQj4uPaHLkoNAaLx8fEjJaLGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "368XBDq7gzk8TPA8GeFFZwUc8x9AsrSdu2EosT2TUCsLtbsEHDEyHBKuzcy65seE2uqjApPqPMnzv27VH3MLoKtp",
  "key1": "4HxYTQ1ftKFsRP59LS3Zz9rWKHgZ5MiEmfQXcLE7MLNh6yv6oC9CpE8B2a4PsxTbrNvYnVMcs2VerAFKHoArmXQh",
  "key2": "2MQD5pTKDXyUotR4KGDh98XfK95NZSNFsHYCubaiW1f5ku3i63C4xNDn1ktKxLSbuzTUKcxPnDS4CLWyDUi1qdYS",
  "key3": "3YokUYCYRVq2x6bKpjnMUeWJ3cf9fKFWbK8MRbqmo51xg4tmqmt8j4PM68GyQaE6fMM8fpcFgH4wwNdot4HWerGC",
  "key4": "2yBEVeh2cvrn5UQrsokqzRJpUDQep9ouHzaYpMaJpv8j38fFLZbcyRF8515TJpZsqMzAnk999gLGehBTeM8SfcGt",
  "key5": "461nhdvQxuTvATPB3wRVxbfdYPbq3JECrZfhqz3AdVzSB95H3kGP8t3QKVxPnKY2W2EZCJoWpwJQfBY4z9HUfhsm",
  "key6": "2GAke1moBzTG3pM2ka758dzntW8gAWAMSXZW6y4DcDRb8jJtgfiQyP89knH7THovrVot3s1sbM4NYsZMY8g1gd7G",
  "key7": "4ZGWdkxZ2pJnMDks7FNsgV51SquK1qQkwr7LE4bfV7LZYyZn8V3n1JjVxmQpzR2d65qjPqBqkSB2ZzbsbPLEeLh2",
  "key8": "2UZx1GvKYS6SEiz5sRx16ra3PggvtMFjZzWbAimYQgUjYQCo4Pa1VYMmhhWTYTboAnfTrRsexKeXtEJCUn1v2GjN",
  "key9": "3hyAczKi9rco4wXthVPikXUB5REMSohe5QzBqA4r8AKJX8aAixy3fUijjbxeEDRqfajKqH6EjJncWojwYY5rwvEA",
  "key10": "5xp8ZMYkrcwsxFdrJiN4Y9RbTELLnQxapsrHdLrbAPbNdKbJZeWdfkAEfq9S4EEFgbhyBQZ2abgRFZRp3n8b7DaM",
  "key11": "3FnE75aHRDK8wshmdqacdNvvaLDTUscaxXhP3kPjwR5xRDk5f2T5caVF6p6e59bJb2NTPRnr75fruBcoKSvyDvb7",
  "key12": "62gC33Rzh1LfNCDGenSyXMTFKNQc8LVUAQhhTYmhVmexMBMiEqdM85QR6W5cVkDQ5dcGaF5PgVEBk9zWAn3K7dRP",
  "key13": "2dd6XXjGDC8QKL5ncqFr8YjR1PvyXF4Ep5htjdAhzynqH9vq6xwXAcnEShosrL65ukczAxQnPGyGbLEot7iaWQHJ",
  "key14": "DPu6WcFY5YBDYJ8aWTdXhWDtnpryvjXGJUTxGSvEVFNkrrtbuPWZdiGkw2XPQmMe1hL7g3a9BAzdZepxtHacERK",
  "key15": "4YoYdy5zWFxDLtmzDSTWbMjU77cdrrYG8JdjwDtCHfNaQSvYN1Urp5y2gRaVvLdvZYH6QJFRUcbjsdVZkA3PGgQk",
  "key16": "2givzzAziL6RnRLh5oocH4ZsZ91MaWwLUhXexVa3qyoeZKwtmFfbZLT5HrRZYi3yzA7Bdn87h4ZMnZ5ajNiHMbJf",
  "key17": "NuMoPJPsRqB9bWTWg3DfY4iFp9vWQYGM7VbiatJ1zNnS7yuEHTU7K7MiZitnt5W6NPk9EJ9EhaeYUGUMZ9aGuoH",
  "key18": "2woV65J3q9i5pri1at1EqGvsf9vNCdmN2fnV2kh6sDe1KQn69HGYjdTuhwRAsmnR46mTsnb4yz26Qydc1L15vA3e",
  "key19": "42BmjXifdtpqLESWDg8gxR5LDJeWpeHxD8stHfboybUHgHAXFD9RyiLPsHsTUq4SwLPqHPjiGLA44WFVyBn1S9uA",
  "key20": "3LQSrrgWwD9PBzW6ZUToLDeKKX8atXQ6wkTnXPVntdcUffCFEBnR1WKJDbix235tWFSsrvkoYewfdv73PoT7TtMr",
  "key21": "4rNS1dpSojyEYaT4YNK6hsAU1XFzwcNWqMj58xox1SAyKLPaSWssSNRs562tQXfH9X2hqsGvZCgs1imw4c4xR6Bk",
  "key22": "46hVKyzUPJnJcj6B2idPi4JTG27PyazuTJs2hh4zPFqs5isfR7kbzVMZSYfxjHuGWTy7smXXw7MkSibb8vFQrNph",
  "key23": "3PUeNjHTMnfCdLLnMuiXt8C9m5JF2KNK3mLctnywbbsFGkXW4yAyxxjuUCKpp19fDR9M3dU9BHk5HgoZ2BHHkAfc",
  "key24": "3ioDH4xTM8qXrShXYz2zwiB27yKJprRXTCh6nAoRAq3WknLB3PTJgHX34VoBco5V74gRHQEdd9niMBeeUcnP6eD2",
  "key25": "3Q3UeHanyfwhz8nFxenS3SZaoqGE4hX7gfNsgDArQXXeBbkVT5e2Soz8peZ6tB7JVGyQjY8fcrFbdchVmUMUusKM",
  "key26": "3YaNNwkJHA2he7v5tghTKgzCHHL28LsWbSV4cDEnQkbyRt3nNycCoTdw13nE45FNAVZfVyk4fprd1xxTa8HTRiyT",
  "key27": "2sR4jMBPvGCbxXNs7HHdA2qLzf8z1MSacmpatFBoqav4okw5t62Zw8TaLhRbh6F1Vwsf2cGoZaiVKzgk9tCffAxL",
  "key28": "4n3rZ2vhYVpj4GhQj3ZDNrooy1HBKNfivroZ6KAVrVxxPXa3sr95EunZBhJhZ9W4MvLCCH9DMi57BZaoTAPC1XqY",
  "key29": "2bXHVaVCybDyRZnApc5jLVjAWpkjhV3sFLVdrRyb1oyMGqGg3TEsAcAMfFKDYnGacZpGFWaiDrYDXoYZuxsrkhXH",
  "key30": "moxWssiTkCehACF3vo9oid4wmmgezMiRrFZSgSoepHqVq5Q92PWuVTcVxvJ468qhbP9d8tAPJY8rZZfMCKrUYPr",
  "key31": "a1EJr5k2Qb3M6QEJ86z79aeEeyWTkfJEdfWjUqCXpmoHJ3UUYENDDG3YL8fay56YFfguYA8ekJ9sdkQib4Q5PGX",
  "key32": "43pJcSm7yQNAj8sWSxwWt48TGjEyveg8mrqzQXFgmts5MuvRz42DWUSQHhJD33FiwZVN8CzNW9xRbbz8dQVs78ts",
  "key33": "2f8cDnaqshGhWyeZxpBzZt9VnsoSe63vBVCHKXcjwrwLqRZRRGHzgExbPdd7xDK8XyqaW7LYgdn75JFa4917eC49",
  "key34": "2LViQ5dyDtGSwpVfHwmLzs5QNxrrv3rQwP6F7KrkycA97EgyfZAe9aTo9t9tqahwDk7JMubpafdfFDFKRSjeXLVb",
  "key35": "2PMZUDB9b34gkFkZvpcgCWZ9esZxtRdLn2S2ToNZYVM8FFbJNqxD4bjgtKMLDzW2y4yewHAD9JE3VM6AaMXgHoef",
  "key36": "3j2NC8EiWHYTz6VgeMKyiYwiQacS89Kb8av3urNm6hJSAb63nR9PxvPMP66EAjWWVpmmBrjvjR7sKZJiC3ATZSs",
  "key37": "417Rkc9x7kGpXFwNJvskR287og9sf8MwZjZhcM3QLVRp2NEU2qmmxYbypGyt1n96VbycaCTPBJ6pVqCu86i7sxq",
  "key38": "3Sei1J6wXNJEWj6bJ9AQwb9RiDZqMUYK6yFF93nDBBKvzW74RDM1k7dnP7SfU8Dhqoo8T17eKc1qHPPqD3bCtjAF",
  "key39": "63azPS9kLpHZEqpYwauarNjU1YYp9wrpXMygJUDFB68tK1HnUhZVLiGDprrfqHFupVaocyu3YxtsTg9Y2DFY3Uxb",
  "key40": "3H7zhZYrrJc6VUMVvCwbaz7FHkFqRBuQYCgxEDhMHLChAfxJDATfKos4SYU8vDwFum787w9wAShJ2aXV81AFbTSE"
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
