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
    "2UomTQoyMzimEYMV5RBAAYCxCRuEqzN7RK7bsc5u57RxAZYjygTn8zN5ftThuKDLjeGhsJhR3qZWrTTXeeo6Um45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vHfTZ83otPqtDa1f3NpCUEeAyKCfDGuXQQZrtHqh6CRHWYpD3WD7533q46r63jftzmbaJ7BbkY5YX3KhyEMk29U",
  "key1": "5ZXq4sJjtM5gzJLe1RHxBvPoeR85zmrxNwH23wHLNm31Vwg6dsnb86mEnbWrc2qZyzwVVdCqA8yKCGQ4aZkgAG5K",
  "key2": "5Jmi7M226XTrn8N26Smx4X4SW1Kx3hQg37VDwwsCRmzD1kEN3uAoJVvP1Ju9wW5nF46VgZEr4ZBoSySMyBXnCLNg",
  "key3": "3gg1z92av7EtYRk4MMopK8jNKxFfHiTB9to1HJWhmp4c7NdHYwFzVRh6AreQqDvb7kf4TgGaWfxp3SFgib756HDx",
  "key4": "ED4KZzJRzAFCpVxpUotQpy9kRsESDKAkBwCoAW1Hh98toLfTxeBm5HBJQ5U6z7PBzwheA4C4xL5JkDa15yyDn23",
  "key5": "4aYGRX1CA7vT6vnZQFqWkGydMYKRvq44Qvr7WCifLGKGLnpmEk6mTcKRXARHjoHLxcHDfaaeUj71F1683CH3Korx",
  "key6": "27zZzAZbxJuv8JBCzHbiFFynFrKGrFjsukDu7xqE4eDZGAqyE9XwktEw93oe3E7QLpYVU8CaS43TLQxTmVXuToC2",
  "key7": "4ywXHJEiB5JTNHvCtat5FoyYN5NMVJsheoU7NHQq7teNFmaGkrRE1twVXA6nDzqoY7pCfqpadyKFyyT8WeSqqWjk",
  "key8": "2Db7bVX8iwpCjvE7BC8veg4PmhmD87LrtGHiPYDmP43xNXWwQ9wzTNajHfSUEedrrvPB4ZvsdM9eubQZtkVU7mJw",
  "key9": "2sgGvm7JPhYBxusiQFM6TZYnjJJertSZMFTgjUzQPVu7ZrecqEX3e9hPGwjEd2a7o6bnZ2VbshFbBehqNszgsup1",
  "key10": "2frJzvbRTnJPD3XeTXdMKMwoHeGim8nrqHu7rUcbpgrJxyF2Zj6RDRihZdtr7kr27dJB1QrCA5noA4iieQjUKnRv",
  "key11": "53jdvvNeCbwxKmtWafpzDNJxKgMwzNya1BCxdMvYNdjYndfiBT32s4JnHf9up5PMFLTnqjiDNrQyRGuaqwpHJ9b1",
  "key12": "5eQVhyLxGqQCN76Hz9UtXKWjdRkrVfTgF93RKeYWxiQ9jNpWoSnyWNVDgSnLrQxCZryhGXEV7zghUQz4Wov2bRYJ",
  "key13": "4M8N4JySXYzhtL2i4tr41bAsg8DDGD8CLNZkK8tr9Sar5mD6NtyAm3fjN1qsCXjx2rwVX78Mra8v12JeCVd2WuXB",
  "key14": "2rpBG3new8KC3mJaEQFttrB25q6R1xbTLZzRz21c3jHJCyRf6rt3mzNTMP9DApRjWTGoJEbfKnDZY4AA6we142zE",
  "key15": "4nTFDBUMUhZRG8aRy2K79JdsipDe6DkXW9qvbvB9knRNLZ1HtV2UFepsABo7QqN9KbagEFDPtTXiTxxgmKRrFMKP",
  "key16": "Z6gbU4ZuPPQ6qZh9Aht9vESyH9z6tEdfwLSCZBaJnGgyVo3ojhAEx5AmhzfZBFxJRhkJe7S1KPypo7LqKxSzpxp",
  "key17": "3VUho7SavPZepacsiUxw263qgivsf7znBvvTuG2N7aZT6akVr4cRJ9ogrvYiB4yZrCtaqryKy45pcVwAZt4kTkxb",
  "key18": "Rd1gUPrTE5W4pvnsQE5VP6QM5RB1XaN2MnS5TNz5hMu9MQf29SVyZ987U7e1ZrF4x4rAVt7hfBwuYvrMHw7Xq5v",
  "key19": "4Do4z1xFZdUyPqnda13RvqmY1tyMM6XG9U1s21LWdzikfKbq3f2qp8ZBTAu5xteQPaKPemYqvyeS378CU48jMtES",
  "key20": "44XtAEfiK3N7VBC4qUEzMnX5zsznXgyv7tLNBXe3EBoqhrjqVtvaGtnmt8S3tZ4p24Wq9oHALVJ25Mjx4RgEDpEz",
  "key21": "4M3mWkbey8ZPssrGs2D8trScgimeo4AhAc8mqGX9E5UvS3PRg9Uuk3Ff2afmExnJkz1i12qYmBBq3aGY8WbDd8t4",
  "key22": "4f2cjjkqEQ4nceWakjxJSkj3QZwhKJkn5BAnCobWfEYYGdk6P2HVWjiv62Lo5CXBvGZt5NBtxdEjnrcGM7VnmXJY",
  "key23": "yeeYoq79kjHvVd13orSADtEX45EXvGcRst1z197ah2Dea7FbhwM6wsqGLjvkxWRykGzfKihiNXkp8C19fDJ9DiP",
  "key24": "63WXAqBY5uCqfbsrk7DYYb8etKD8M4iASTNnpPVkifhZ7NRivwe25iUkAUAL4zZnCT4dGstXvD5CKZdeVjK46GbS",
  "key25": "pXpro6TLmzsKixShR7kFzdYmGz2rgm883CMKJzMTnQfde6tLTPRaf3jhAiWi6G1assZsTfVcSanNqQ3ZfVvLRmz",
  "key26": "5tLcvbZwQ8b1rAp2JDV1ShXHKvqiyRRf24tQDQT2TK8mopKxMKYTbNhQTRYPUXwMGPBdD8ovrG8hYwgfy5LrWkxA",
  "key27": "4ZvHCGADQY3itGUTxicZUoEkvGVadJgs3neFMzh1wnjXH7iAZWwbxmNa8M2Noe2Z8yD7geW5xJyCEWBmtKHjFkSY",
  "key28": "3BPtME6kurQutfTo6uxUNADSdp5xLXTbwToZBFUiqMYdGYqouxUMDZPYYjAft3J6oqx8PUe2ydf7uRrW4yg5NsMS",
  "key29": "jUg2XLJGg7AW4ZykNR7yThuTZxmEosw9GDT5XWw3JBQZsrRZCJvmcZ1Pmr4gSeKqUkjHFPLvUx3GtJFMVkRNSjn",
  "key30": "5B4TzCThDXi5z651uWfcVaFnPQvX4gwVMHWPuSe2TkrfHUFzajhgJvZaohRza1CEMZfVExDqNNDxVGRMxrH9fd2q",
  "key31": "4xe2n9gFWrYDvzErxUaj8tyeRBHGjrVAjAVUjHYGtzVrskCgkh6Sc5fU3v8BjC7arv53nfMk5urnE35MMtoDo6pR",
  "key32": "3a7hVmEncKdjqYUDjCSsPD1J7v4ppZ3ZwwCbK2i1iw9dq989nxrdkVb7EZYdZop3Mv2F4QVAQDTGppd43ayNvPY",
  "key33": "2giTSaMv2S5NPhabRz18TT2Sk3Mjf15KnBxvpg6moPNJTAkKNwU3aeYYTpZ5FN3P5NKPMFq35u1fiWHNLbSxDNDo",
  "key34": "35Pp5G3ZJRLnNKLDaL6pZqqSormZGG2PkjKMc9NUFVhWwv8vBUhPfHXGbJWBnrYxDjx562AoLTpdnK4KXR4MLgNx",
  "key35": "3PR28cZWRyXxZKG4MBcwWdQzXQmnnFzYUBs5iAQZqgoNA3NxSadCA7gBXKUXcTrCe2nyuyfQoaaM9A2NiGrsTxhB",
  "key36": "BNufeHsvrjFusVrvgZEsXNR8MhyAwDUJNGWxdWRRixYoKrXykgrqsnw8N1Uq7WmMy9j1D5Jj3cbtKZPrhWy13Dd",
  "key37": "4z4YdPicQr4aWaVNRGhVAtcNVHtt5UzR1KQqPesJhBnpYa2Kjj5kFkfMDiAKFhQUJUrRpFcmCvjTR3gPc81d2b9C",
  "key38": "22zEfaaVXAtF68vY83n9jSEfax8xz7m6nNRLshMXV1P96eU6QKjF9m9ueECRXeNci5MsLgvEW3V4KyeUwusLbDJ3",
  "key39": "5NA4Eq3GJM5tUDtpdeFCJBzZqSYNSb89B9KMN16jki5EWAdSFof3q1tv6ijPcnjSTLjqgocRQU2yJAj3m12ErBrW",
  "key40": "qn2F6Wv3s7Qo2TKssAws5ZEvPBiRAa38LGH6YrJHozrEQcZ51Zw5K2aCrAtqAuyAbmSymH6i8YyzuVQ4NN3zApc",
  "key41": "41MeF6T2FSBWBxwE8MsfB8XC1AJysTeUanc2D24v6n9nBCztZXfzS1tGfshmAf9k2WkuAwWvHe7dHLpiRx8HeyZW",
  "key42": "2hJrqVfg8rhiXrJ19BDwHua3n8wRaWWkr3Tpysm2yv6EbTjN2m4LBAdYbb792pCgFfoteCB3Qgwwfxw3QZAzhs7S",
  "key43": "3q62ru2X1j1xQfdC8bCu9Fbt5MYfcvXzyVXLsbFAeyJXWCzKLiddVuqwZv9aUDTPnn2yKyfiThu8Ru5pAdzAjQYJ"
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
