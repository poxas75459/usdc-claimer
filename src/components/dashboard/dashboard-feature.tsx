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
    "3VniiYf7GgbmMpny2mxbYYmKMe8K4YD2W7EtUFQY2mTLrwrw4UhZmTwWQRrLoJ2UP2szixCJvm9m136uWQ3daUdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uBnRf2UTqcFSWZpyHXsHnKmbKmvdYR7nC22gb9bXNc4JTHuy3nauugAWxmUBq6NTfs3KqAWWJMv9KnLv4wf98ma",
  "key1": "XmvvYXjCY49STnxHJYFSRKag231XKyBmsGwqagH6p7CV96MxpMcuTUDtCcFcs7M2UmkpXhfPBNQHqcLeaz9gKry",
  "key2": "3DsqhLL7oEDkPqQHn2YSM2FMSmypBy1XxwBQYR2uQJqQKuiA45CXb3gvfrnSEVGZtah4VyLK3X7CZXT7cJ2Au2F5",
  "key3": "4yAwbRTJu7ffBs5ZMMYzR9qn2iW5RZFu8C3nkSmAAge83itYLUtAU7qHRf3b1u5fuTfBqZZdRYcdyyK1Tks2m83N",
  "key4": "3xkoaVRNmr4CX7KhKeLeyeeyXTK5sa7tpAGG9akH5YMifoyCUMDwq8mkaiG3VkmGrwnBe82M1YrPPygLuhc22TLm",
  "key5": "2rgRsCSH4TbvXF6nEMfnLVbZpFvbeQE7BNo5hCJxqySbX2TxEUrwNLHibHTEhNeYSfUiuo7weEpTbAAg4TPENex1",
  "key6": "4vgkhho1i61mxLAvz2RbBw9t7WbVoUaqbDGwh6uRmGAXtQzYHoWcXEX68iGswCRyPLCKzWN6C8MBJvn8HsLt8dX5",
  "key7": "4H3pUgJ4PxHPY4fHXWDjPUUzQQ3znh9rWsYXrrDWgeSnhJYN2uaxjfWsd9zKXHpiT746NoTKCsNM6MXPwyCnqB52",
  "key8": "2dWLuwmidUxLfwWpkR4VzTpxSQNZH3vUPYVc7V1xpJrShBFLbeMr4WoCQpvvzsevMgBF28z3fhQHB1dMNny6ZF4s",
  "key9": "2GafVhMGkqwMjPdrLXFB9smk8nec1YezyEZTa35MezNdESeTS3kPdvZcPseJPsfJMYkVEVwKAijrGkSvgHi1nFQD",
  "key10": "PmDacjM7L1y5ZVCVuZVhk8htK1gFiJmDXzjDRAZaQesv9Y8nVdHVpf5VwoN5zQArSdFxxLPZK2WRcSjMy1emaKn",
  "key11": "2LzuLSCzFkBEJ2P4Qm38zGhVdJTNRGeiPDCh6kDXDpFrh7PVBhyK5Uarjr5oUJzXoxBQajAXK2nKDbbGgCt1fEbQ",
  "key12": "2oVyfZfZTXYVXuRzCkYuwbBMm7ULZYQDc91jVyGtXToDaVVwrkBnm8QqrhB7SLjze9HbaUg94s1pRsnWUhh2rbwn",
  "key13": "63dPdgbPD43RzK6uiRSY9fJDnbw35A9y1NoYxbM7yP7VCaVFGXvP5ADfnB5Zp4oXhoKJ5yL9ZommMNY8BZVZgdH9",
  "key14": "64T3dsBxEgLcwK54XT7b1bKeHCBvokjXVcYLvWvW4hqe8WaBUVaraUQAzZBFtxV8ZkxiiDTKFXbtBTDHU6XG1oH",
  "key15": "2Fd8a5RWLVCUq6puvqeAvzYjQZGsYTpjTd9Ukvq24wXAvUuMEPv9DcfTCWVst3BHUnTrq55arXxUgnnZFhXHPWxR",
  "key16": "3wZpJP65GmVvv9fmUoma7sGopEvvcVc9mPR4RPtPZFDWix8SgQuzaqToLBHtC9GoWjciyQNf96JvuBWwTcHYgHvr",
  "key17": "psjtQtnaSoCaW59vz9QxAAxHrY87ov8ngtfVp4UZ1ZpP6AaqgmqqxWK6hwrBp7ERmDfPt6dPzcroDeZFajyoW74",
  "key18": "5bvseBLVtUeP8adqAz6LrygMcqpymkUJRVT4eaoG77k2qPuPAX88hdh7uSZkPZGoX7aXS5GgFLumTjTFpbTycL5p",
  "key19": "3wveqTWYfyJ47r9wbZHMHjm2mw2iKuugt8Qncu3g7feTQUpxfRejEeifpoBhxLwERQAKDXXjdjVjqq4mqgZwxq3D",
  "key20": "udU3QXJBduoPUCHbPxSbt3EeiVCxhiEHe6xK4vdZamFkL9uXTLy662T3hjVTnXTk594ZRUbMHbThr4noraSNBQj",
  "key21": "LyRV7eEvS1rXHNzZHpwCo6vw7ngsZ5A1SGQ1XRXnKnHQuirQ6qGJebtBEw46borxHUHMoJP95RLqQMz8dJMA63y",
  "key22": "4Wdmx9deC2GKtifKeTGPYYDCBxLSRi9K7shBj5veFTTqse9oMo6LDwz8PASy2PiimC6ugtfwHhnrjCD5XAzWykrz",
  "key23": "4t8aFrjwkEqTxrW4oiRsvFMwyN7MtG3mGLNzj31yxU59dYmztLTDMmno4uwzCAkAA2jvc7rAdwWvrKf8TWcDXzHz",
  "key24": "3uyM7PG2t1oGZbb9zjDfTsKXe7L2xLYBNVaq5EmkvrxXYjmbGFn25XbiGKsL2hriSU8gaJADh6mySwZCcBMt4Ytd",
  "key25": "2be3t8AWJw3PsXBhVYGAAic9uwD8JhCgJESi7DGafSYXmeMoQMi2X9tRhczv9kt8Ybtw4hbnThdXhx3V8CKDiwyN",
  "key26": "2Ken7d18HpMsdeSntc7Rvh3NuJkTvyW2YPaL85iSoQrxAbGKZvxkgH4fVhEv99qXz8iaNqjgouZPnoDgKLLYPynQ",
  "key27": "5RJX3AWFHkYvPFcScRMwzt9Fm1gaaaHaec4HTsYur4Vyz9igUZv6yYTVe2hy7jGYCQhqvBfqxgJSDpBGoXYXEMLr",
  "key28": "4RUiPExqRsXn7NDdk5tUDQUrEm1cuhfoU4tetMiLQzvXxY9WWThrhxz6Ejsk5UW86og4MBmhQR2iqChepUfkeo6V",
  "key29": "4cVpMt4SuVNR3mB7RZCE7sAmkZGenRVq6zSKhFauKme4ycxrLWwz2GneUfkhnqJmadDKfUpPeqfetYzRnz2AZfft",
  "key30": "4pBRS5ykVH5ChZ9Mbw4BabEhUyjtnGb9HpS72dspNn8TduiyLkMDULrtSK4SDrBhHcVVHnA9rEf51EKA5ooTKAJW",
  "key31": "5XRLpJN58Epn7uf74cxoFuzQaLqzgVZQ3PBNmTCHyQ9d5ztxpfbuzL4qXpNZv78A1gX8jBmCKMhf9S8VihXbp3HP",
  "key32": "t8KRaLmXo8mTjxQs7PMQSduBduMBPtRtUAev86zy493e5qGKM5ni2jpcaLZtDkfqJsHtMHBKqiAXBhsMvjCTsbb",
  "key33": "3KEmjPvu7CyTHYS85Y1NthCyfwGrseD8nmNba8MZn8iXY7LPZVmu3roqzicsr3F9CsEpcC5c2h41xdEWu677vT5Z",
  "key34": "3Ts8e1Jx8gvTQNqwTrPEk7yuABysYcZJufHWvqNA8JKotEebFaJGCnwcYoNNGEwaeW5U7JVNtgqG2TqSLJHqJEFv",
  "key35": "xgSMaW2J5t8p8j7NYKXFznGAdbqGkNKnMdEjpnQvWV56qkC3GWhqtRHDqP35uL1urpkGH7WDs5uwzYuSNEQzTyG",
  "key36": "5j7c7UWVYmjpbDg6Ti3T9EyYN22RPWUHTRRPhKg9hyqQwrDMzuBmS7T1QZ4aAaeuzcEWn4gbF6M4PBK7sZxm1aV9",
  "key37": "3GygvzE6xk9AE8qDzMorJGHP33zEPojVTcL7rNJ3x7h2satXgKZv8z3Et7kppSwsgQfzpmh2n7kQzEmruusw7fRd",
  "key38": "bqWAJhE5ewUPy4ntf8PgDfTxm9RV1aavnCcyHGT2cUeS2qKd9N6vaUJGsPZ56JUUjETMTYPEXTpw2NKr3HRb8uZ",
  "key39": "y6sfh1yVYNWQ2ptETGmo1FMSgBnEwwNMjviEjunBuv9C65bS677Sb7ovFbdHUbQJ8nvqTdmyyYiEn4N4WHQ3zPv",
  "key40": "39V1yXp3pe3UqVBzfXCYzSt5Vt7QauR2DdfLtUipa9WiMScfeBWuNk3Y3jeoeGN3dcaq16KVwySkUKsLGzqogqz",
  "key41": "3hjHmtTxEgtJu9Xbhh5Z5q4Gi2xVEpb5GmMVMbirfV8sVr33a34FwGYcNASPptQKBjcQJ7wHaa2SRAs4T4Ar6Lv5"
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
