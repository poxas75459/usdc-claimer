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
    "2JzRNqkWNGMox4CE4EjgXCnTHtX9uaqyKBE4f7Zu11BoqKC3r7tZuSqE4nZuW9AhGvUH6wxU4Mrya6CAZKxKxPw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hN8275KiEdsVaM8vqxomnggJ8En9hMi2ZFQT5DycZPLeBKWRfdhBLh68bHp6q6P4oaCG4tN4mDgjmfEyuYRYHnM",
  "key1": "4UhhtQoPDHPqvieEYQ7M5KjhBmKktqtfrGqHRWTYQtdb3mR2XzeNAHK8RFhYBAjLjT1nDDzdad6EB456pptR4gUJ",
  "key2": "3eQYzMmNFDPjfNzKEnD2AzmvpTMiHWU6corL9absfbeV1mYgTzSowGsCfdWc6hW5LMcrmys4m39dL3PNcJCQf4Fs",
  "key3": "232BNDmUmUTNvWhvPhnQbyTbSfSHaNMmJVTYdsFNrJioC8brbi2hT2FdcV7FC4TvsWMpXLnDZS5rxcuAi483QVAA",
  "key4": "4oC3rcFbhaiPeTYnXRgAVfjf7gdEg47tCg4EBtvE2CKMkNdtXZ2otoFKucvZppBZrqhqFxaYsW3EvToXJzW3ucrf",
  "key5": "5icxJfWZehBZwwQifGxSKERzixL58vn6faFD7W9GtQvx4b3nbNgirXxa9nvjkA542VK4FfZEnp3vnE7t4qAZigs6",
  "key6": "49qneAbCnmiLu1toqamPQtzTFjsqHB8ioYjBWw8zh367BeH7VXY9i6CZJqcLPgL7SapE8MkHmzwJqNGzEGbhTLxC",
  "key7": "63UMEvrCa9reKgyZYoK98PoNgYXaaNpNUWrN7LMZBoGrYARCWw5LWCKXBANLTtvDWqLhsxzH9rHUpNRD4Z1Vk4mX",
  "key8": "4pc8dLZGZrZX3Mu9rpHs6tn4mkbhy1egL11JdzWrocxV37hDEG591V1vwi5kvtkFUMC83sShH6FdXaJgB1SojHWk",
  "key9": "GzbSwAuMpPrTNMW39uz3j3TXp76mTppWAbGcBDCU3yso69qRBTXZRJJmTp97PTNn2mj8Ftax4PBFcK2aJq7uWHn",
  "key10": "4VnxRrsZzVm76tZUcd4Zom7xHXqdwNcJH79gnJbAopGNU1vccwwTApXu5beG2Rjsi5asyq1qmTDrVv8Y6Q4oPswh",
  "key11": "671XvYkUmoLFTud9Va7CTYqoASpiS87TvJ3om8bKYP9EiitPcqfsQUSsfBh8dDWyzhif6X87fheUE2kcQ8mH32ZC",
  "key12": "2HP4FcC6tC3mk1KEEFnE9Zdk5jjWrTdahE8s8ojKc7QvE59kmMGsGE5LcENjRmkayxiNEVe3Z5QEsGHn6j834sV",
  "key13": "4fJ7pyvmxaSK6h4AJR9UCvbXzrTZ2FHKkABMan9E6o6JbYG1qPbBDAbvBKWoCqAm8eBS7zuGhe4Ttt37rEPWJJmJ",
  "key14": "4ZrmhmofWX2PGANHLXyDDYKDz8oRF3WnN8VDrkZaP9GDxKKm8GDCgn3oEyJievxckusvL6hZkZAEaaeQeRZsfgXK",
  "key15": "2c5gQ5cuZxgSo1n6jsz5wmh1HGFnbrH1eXKb62p9tyXRhKbq6G5sKhTUQQ3zkxkZ7MeMULEHLGXMqERbEez1B6Gp",
  "key16": "3dPbowDof1hqznZV2eFsv63NFZg7NcqohjzdGj1sKVVH2hiz6HscE2ZAftCQ3837rRNN99zbb2DLfSoeLymBvEZy",
  "key17": "4PN9NAkSA2CrS6TozmzefsW8R7UQoMTQ1r5Qxed2dQ5FhrmSHPXn8DgMg4pcg9uA6hwGqsYmLzDbwKXQPSGt7M7R",
  "key18": "4vxfqWbBEAc4EQeNT3CjPe7iai9vbGY4KB21mtbrwumSjrLPe4CitjWCfYybxGU7BEA6X4JCcEWPQ4VgG6JPUKMG",
  "key19": "5FVPsXxe3mBAVcDbzWbcHXkFEvUbodYB5t5vMTTjADoP54GXGSFmBmuPA5yxi1fZvhCzLeyZmwZMGsSJDuUUmGCS",
  "key20": "3EoNHpTP23x7SW5rsf5in72XkBKxzmrVBiibNw7VceXT7nnxspYtvvqF7UUxzyr8yuw3cBEPRA5GsJvazuVUW8ZJ",
  "key21": "4A6rU6PGWCV3zxaFe8Vhsd39ABqD5mwJWqHVinFB4edfEvKVPwYCaW6Jpdb7VkQGWQj49bE77DQhqyr2ig1Lu9Hb",
  "key22": "35idYeP33jUbUMnq9q33uUtfeyPhsjvtrLw2kr62t9jdH53r6YuxxpcWWtVMxn5qTpAKojp1AmMQi4Gy5Zgrwyei",
  "key23": "22wvpTJHqEKsmCPVwda5cjGAwLgmC37nAYZHhpmBPQhXETLR2XaQU5W6tWvxt4rk4qwWE7iuvByL3YbFzn14ncxJ",
  "key24": "5pUxVsSg8vm6qnLsLc2uxqprBVUPwWwcTYoq8ZKzfSuP2zyqUtXqwiwZxCbiKEp9kRQBFyrFLo8YhM8axu8b6MSG",
  "key25": "3ssJ1C8aG2bgz5CBGX9qJwNYicABJr4XUei3NGuKsaihNsF7Aurp1Aj1RYkk1SMdkayqhkJd3DDQQsR4UH195euq",
  "key26": "sWmki9rZeK6dTHpDSbLmyU1QPrnmB2ECXBaXmg8P6HPWnbqVWAxouuJwG4iAdFa5EWBmMgkAFwuxYmvM8GGS3VZ",
  "key27": "2kXLQcJkegioszMzmo3ncodE8vJjH6YJXe9Qx5j2BnNLbBzUraUK53SedBPK7ZcyJK1nXw8gyJivTFYSuSS1CDW7",
  "key28": "4vczEiHLoGdK3HV9y7Z9d2d7pN6RLJ2UVdV8zNUJrRDeAr5WobGqunf91YmFWxJgaEJqrmNcuuFF5guz37mnbdRn",
  "key29": "2jAuPX6kYpbpfKpWvTUJbSSjaxs8SNYuTvx8JaYYMHcPKmzEi1qFwvRr27S7NPp1CL1fGtonUMNnRNgitArJ8NJ8",
  "key30": "57oQJsN2CRwQqKcCy6kFm3rdzMQ3RUBCZrJ3g78ZmLq6dtZv3fSfXAtvYJUCChgRHWHQev3hZ3PTNEnQjmiAaNqJ",
  "key31": "5z6vtzjHnA4AcXB3omtcm5r6GyVfairCM14uvGkVmT2htVZo9JzM8scCGZui2u8orc2MtbcfdKF9LTRFBJXtQH4z",
  "key32": "2KbcYufw1CHALd2aiMT7oWA6Le4Q3uqyYze6W71gwdhhL3pfCedk5ugya5p3oqnjKi6y3W3z6e7DDQEVEFdL3SRg",
  "key33": "64ZH6rbjPvvzMYzux8AbKKizVpbLnmjtV5EfPotapDPtRRNZds6S9vC5oqf8cFZ8UsFogGCjnDyV5xP7cxvAnt2q",
  "key34": "DeQF4QtdvCPfNX77KuZfuPM7fq9ey14XaYSZSBRc3GNwqXmPUejhYMrrSjS7NuYbXxMZRKgRKXYbaTCfy6st61N",
  "key35": "2p12HrJ22z58hMfPGDb4SrVZi3mtc1Ca9WhAMHk4enxMf9fs9oKL3HQ9Kg4KgbUQNwMBW8cprVo29ToRumpZaPTd",
  "key36": "2vjvj7fcmd5dpyeEvHc7dXatSrrbGbCGVJqeDuqgbNgqBnffgGUHapaBSYgPKo1bk9MeyGJqB8nKssDzzjidromg",
  "key37": "4FMyLnHKhvXruau5JwyjNZjk4v4D964pXj3KLCyZoKajvb3Ar4rouEBUVndjLUwMpkFLLPBeYCCjBAdYMWNSzSz6",
  "key38": "462VhdcHzQRJjgQrUbWkG6JpcwvYpUcxFgx49XrEbY45f8T6YcsrNa7oXggD3gUFSzxgU8TyUdFAPkwKBZ3jUMos",
  "key39": "47qKCufwj2rYvdjegaJGh7DH2nNCWmfnr1gfMdX1RtMjtfS6Fh77qZbF9fCHAJVwnMyJmj9iWjRqthJcWEdfRXaA",
  "key40": "5XoJnGnSGrWpasCfN4MonwPs8BzzUzPNtcmPSBBWx9sHRt4WUSDSKbHGr5nnzqDrGxnpdTVg6pvByawwMaewJ41c",
  "key41": "669QDsV67dhVvgyWkPG254NedCz5xogcZkB2nWD2zRFjMtMWsEgRvdFzL4jU36Hrp5ZdFXvMWVNYYJStoTP5q98D",
  "key42": "4vDrSw3eYTFUAFcnSh2jZfTeZd1kiqTsE4R4aqhuT1beqWKUxuPfWo8hedrrvGe2D8mT7NszB4Y84CpkiFCs5Act",
  "key43": "5k6td3PGF9BDjAUGTLutCNrqrSHrj2RaiH5aoMGT6SwBaSDTVXCXiv9rBJcpWnW5c4JMkmBbpgF4vSoP7HeuWsbe",
  "key44": "2NLv1ig6dK5EJqX4Ub6YM7gieWo61f2pwukhwTNzwtCUV4TmBhXnfyJ9Ai7TtoLLxuK2m32C94McfwEbesfoe7Qv",
  "key45": "2wwWiRYRpNrUSZ6L1CjNKHbW4iC3taPgJ1XGSc8xc3TprcYLDEDDYVCV9eTeKK8oVF86tLRxukK24gXn3RKAtKmT",
  "key46": "zNHnFx4aSBS8UCnNQkVW6pNNpJTb2WGqnkc5vGrzBvvk7B43Hm96ucu3MjZqhezAX4Po7oqxL3674LcS33QFHEo",
  "key47": "4bX2vRNKPyub1CuN21sN7znEXXLdGKW8YRGXhEkdh33tjmEnGZ9ECCXdpZfAHHJSXYom7aXsTZu15vpAdcMEQbbY"
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
