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
    "CoPGUpaSbHF9VGoJ8ap9J63zrc4uCtumcj3wwc9FXJAEmENkAKMjqPcQnZHY5bsfjE8r6YLwxVzJYtiwhmrHT4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D5p9bVC8sRPU1uZtuXnnSUuZBSJhb954ucJj5ehWKM4X7g3y3bFv2TjtBrfPiQH4SwjEGQ4kZzuaTqHWDo969xe",
  "key1": "2Kx8DUJQdYxfhN2asyYwdiybQT1BCsmzSFnTCdXeLiZg7zcNSqWkAaa3KaLBNC8f7vzbPVV6cjZAgC1StUHs8DwM",
  "key2": "3dDv1eALSAPuFA1mvv1bQjyZRzi2uZLcw1FFW1FGenTpGUpeomMXiLkxnESpnT4XQYrJxRKbj6buRLJ3VTrogDDL",
  "key3": "34af6M5JJnPV4xUGRiahTLH5LbybH43VDttzivcpzGQhA3wG1YwH9ahhjKNRWPLdW6UmAuhUBK73ncJJx9TUmmm8",
  "key4": "51mKC1p4wz9dgCrzz6qDpPspt2VxLrcZbgBZm3uxYzdMv2Y6ujnV7CoeoigArM9sfr5WWNdZWN71ssNeb8eN9JLG",
  "key5": "42uNoUnhFhfMW833h5nU1ih2R1Twt5Y9ZLYgBwXTq9yUg8G3EmNkKJAu1o9zxmgpVREJcRR1QE8dx53cfDz9RESh",
  "key6": "4xJ3VJcJSBv95BNvFAgvdMJmBxPMNK7jtg8rDJPp6mdDq83VqkQLMaHLjYTXXiHFJ6jhoJEUEsdBcgUTpf4Dkk3E",
  "key7": "4QC7J9GPj7tUdMuQFTkRoNfay8vG63rW9KMH8Su9BeDkRGoXnKXR5q5SWPwstsn5LcCWvPTx4HeCXLJztqavfmmu",
  "key8": "bmQffUDZpd1QEbcxk6EoYR3phDeazA3qm9dsrK3bjXNAKQEVKU6dRAd1yT4KUMQJo95VSbkJpK2qV9ccHKprc7x",
  "key9": "64cAfUd2dgVCzypV4gMnUTihnzU24rCaUmMrGKrD3dtRZNEH4XTf4Y17yZFhAk9CEWJPLbYXYE6eYvS6HL9ZByLr",
  "key10": "T1Frh7Mn8cfVL77dNZZ6ACbjq47wKKwNwjz8LGLwRhrZ5C9qkEfMn8KYdos7JJCnT5rbbD7eumJS22rFgGSJSmU",
  "key11": "574qnncNqhqPJHa4TD5RGtGV7JtDF4cWnUZzVebPiqF96tv4w1R65NMkDw8E2pDbHTcRJsYvZnh9wTDiUfmmVbAT",
  "key12": "qUkJacd41edR4KYzMumY8sWA1bLMQa7zTTq14315VcYQJPRGqXhk37L1DDdZ4Jr7Cyx84R6LEU3fZMbvRTHvxRN",
  "key13": "pQzyy6M85j7cdJqw7hQ9dUoY4S3KNTQN3cnCtEeu6eHJF23H8YZVFoQGA46W97wGdgfnHoCRdaRy34XDbFPZCg4",
  "key14": "45g23zY8WDaRW1Q7NYKV1DKeEHHpHByLGsVq5Gw43V18QDLJ7GYnqUefvX2Sy42az16gsDLrCQFtwvSSYNDx2Qj6",
  "key15": "3AYsru8DKais7NHpPVJ6fdK4JgZyeEH8Hjpw8ndVobwJb6QwxDRczt5EVN4zh3eih2huQA7C1UkbeFoGWmcp7tDc",
  "key16": "nhAhMqUGrxKoPfbKpRMK1RQg8GKoLpgZNgyvgh1ovD6upUP46j8wX4f4Nza8ft7fp1eNc4QhQjXsZy7zCLG1Ehb",
  "key17": "3o27kixgaWJo2CsBSaHSRAbtvuqt6ZftTbFSiip1dyQuNeVAV8FZUT6NWZ9xoimM63vUW5MbYVq96mTrjAWbYj49",
  "key18": "4WNCFLpFTuvNoVA2rSffZu7rRk1AqUVn5xSKTmHwRDcNwANyEJGmCqqyKLz9DwszisiPek3FupTotrqebPSY8n61",
  "key19": "3faVptg3CdNRzRw4gu36mxqcPd1iE8zxU9hm5EZzG5DMA3qXRoVo3U3oQGSinkBR449JvxMQ5QLLhuCkRbEVWcRC",
  "key20": "3S2jjiJm8cVs7eeDbwpWWwA1eGKbQcYrHS7Rosxah1iytnBakYHsqPrK3VX1iqFN6J3oHPRmB7JPoRNdRq1MWqN6",
  "key21": "4Uz93E32MhSYqPA4pAFMuA3vkCFSb67RLF6cBkuZPTUZLpsPTcveGSaoVBi2j1y3PRz3okRPPbrPeXo5wagv7Jvt",
  "key22": "483xgwZQiebPgqaHk9S2F9dsQjD8kwPAf2aRPDa1PNRAssSNj2sKTQFreAJBGHhpewJVUh4ZWYMBv39hNknuqZJh",
  "key23": "3mdjyBDTy2HonaXyHURnBqvPb3kegXax4Dikzm9MzVcYo95hCnHEcSnhEd9RaXAGh8Jtd7MrqyeNd9vHk5RhyeDK",
  "key24": "5ydBX4LT457NVrvyJ9EotqsUQDWxruTR71XC6d1ecNZ1npvCg5Xn2zfapQMxZZsRziD9yP7YAbT4s6YZcSZ9TY1B",
  "key25": "4eFauxN7Pwth7y1zKuwUeNYz6XgiYECM5Kf9jBB9j8LoG1FE2QcWQ8jdTvu1MsnRQsG6qUgZN9hLHTAVahZ8kNF7",
  "key26": "5ngfJibxrNVCHDi8mwUkK1n7xxVRfSQEop6H65dZPbLwHDHgWJSCiF9WDKEo6sAGPozRVx4oFYZ39q4AnepGw7Hk",
  "key27": "275xJM7dQCZZHrg6wyn5uAYYjYYg6jmB123rXN1rtQM29TwvqseNKJXZNboZE5Wb6USCgz4JhjLbq8LCHQXrRN6E",
  "key28": "7eavB1pj3DWvxcpY53tPjmBeLJnWDJMx7G2TyunsC5y1ZFkwgG4VmR8kEjW4H1mKBVgsYNKvf4yhz6BW6cxV6LN",
  "key29": "4ZpwmkUw4mCj8SUSJZab1aKmtnFfjv9teVWXYFTJXXLGTig3fmezAhbdQhqWhd9pGDfDpdBo4brCygdQRqDQHoPB",
  "key30": "31qTr9bwKhK7c9zrMjgzuRKYabyT2XCNm9YWWFJqmT7BM5YWxvE4RVE77JgJ68SQLQp1iBMaGYpqjPjMrVzrJVPW",
  "key31": "5WqRXhV9NQt3xKAe78NuCydZMsZd2Hm3hdqqD1MgCWDmsSMNoMqekd7bwZwV2kmaHoom7GCLMZk6c1Nkk9MbDmbd",
  "key32": "3fZY9mtwvR3DVY7QK44HvzvqRmreZB7SMSHHe9hCLtGeX36wK82VzN7zD3EHpfSTHjwwKwzWGCWBEdPqaYzgdDnW",
  "key33": "2Eq7LuiCT1iYb3ox24rM39tLyH6ec13WNazC3GFbb7Zso6a1nXJEY8cqdj7sbkq7KfQkLdoPS23ytifU9m3NULPv",
  "key34": "2ogXGoFYxG9ZUt4XyFQMgjmcL9V4PPW1mLEKQJnqr6DpRpU5ao43NwiBF2M5dGZgeJ8AJu96cCkACnmYaJHozRAs",
  "key35": "4WS7K5d4esWac8h9iHQJH7NSDg4FVBhNqZQB2ooKakrh6hHTLrGs8oRRefybvUXCNBWYZoP5v1V7nbDcMeVfVFDh",
  "key36": "5RxZHXhZjiRojHdA45eiDep9ZwmPAXEGU7dHk4goGTgguUcXoo4DvSn2cT5LvQBxk1pbT346uzMSMAGK5Ge1ZMnX",
  "key37": "648bSZRviexz86y9WiYB1QNxV9eygyBHQ5B98QTBcj2Y5PjmRyvH1LvbwdVt9kVwNsgGsyxBFXBUB3BbiA3NePx3",
  "key38": "35n4e9sxdby5TpTbnusmAPd1Y4Bgs2pp6UCgYwgLrVqA8FYKNbcuzwgRCFKQvcSytBRv8MmiWTB7JqWBvD7VmqhY",
  "key39": "5dwFu9sS4NDeGMAyyvVCzqHK6aF8mvq2pEveLi1jPf2spiyfX7BKF1PYZjiDU14KcPPo4ihYriUQ7YcPPsd2zFyu",
  "key40": "3PQW2e1w364rpRKEQXXtYNLrgUwxeZ7CLtHhL2aCzqUc7TtZ2y1P8S3LSHgAhnk4STFRLPge9yej4mREaeQAGoH6",
  "key41": "3eQEztfVBn3WgUdauiTBNjdTbGm3Ah6iwc9SMSM4PzHeBKF2oEt89FDJu7GpMHaNoLLeq5WUcGqQnS3QnHhsDsnL",
  "key42": "5uW8wBNEY1MTDKaXZ6tyK1CWShy4rS44p5hP5XPwjkgk7VgREoYNLY3CNLDcJD6yG1EGRmWFeTKDKCxHRRaY9UqT",
  "key43": "4tBc7uvj6ggXvDLqXT3NPrLTMo52sPb3KRhjLWCdxLvuRcyTdywkijBNLDG69G4pHCg3xaq98FpTMEyLYsjBDLWB",
  "key44": "31QKoQq87D37ACqXBPrjufTohZyvKp3Ztg2Czosd4U2mhUq1hSqozyRzKVVxj2DEiTcaoTsKVAqxLt1sxbiBZD5T",
  "key45": "2DLs5T1BpqyShdB98brSFg2WMycGVLRZQ2x2uALaFyGKrBV51nB3onLjXEwiGPzgRLXLZgqA756w2Y33XDooDcwU",
  "key46": "4MbmtRRbdydjYWA5anEmKnpwaANfKRDvx9GLvxKYsoFyAqbGKba1q4bfJAUJjAJJSHG13fnoVt2S3FgNGNgefQnN",
  "key47": "47Gtkc6wYGcWeQuWW4kcSAVmgyywfpuidZoThTHLrBtGzU1QJZaZu9mhbSo5c83Nh1TbxnvyqnbSiCkK1QLxyTuM",
  "key48": "3xDctFVHBKgrVF2SnFmerdWR9KxNRYUqU4L35XWNCCz3LZ36FB6mN5oKaUmhKEgibw2iLJ7RtNfKy4NbYGDNbdua",
  "key49": "3KACT877jBfgpJTgcpnUwzAbteSaizojBtq93NrPSuJYLPPuKPCAAxdiTgxxUdB5PRiJNBkFgKSJekoiGQ2iAASF"
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
