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
    "4PGL4Wd12RgLnTVLpdS3UZFoT8zrxgWYHuNB4nRXsqKSijd3k24fqUh4UUkQs1oi1b7RoFfAKNuA9tsRH5pXARLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wG8ac49NXVFZyrJVMrQecrtHeJwFkHjtrNRGsRLkRBSyDWZMYgzGzGrign7AEGJLvcbGoGSAW7cPxfuDx57uLoj",
  "key1": "27SFWD4F8cTH5XCDwv8iNptWRUP2bMfWYBcJT9WZprVjh6NDsnDuvU2jx8N6chdGt4pyb5K1Pkhu3AdauutPdt1C",
  "key2": "MkCmiauHwJaWFBgxYA9oToSFbKu8mb7iM71nprSkLqxB8prPzgUJNTPWJnVTQ7sdYUYughHib5Y2RtykPARVTXH",
  "key3": "42tPa6D5qPBd6zeRmepAGsKq8N4DPNF4ppGLMKXKD7wULUrSiLSE1wsnoMuvGzciRz4AxYKrq2yw2sa1eAuw8U6H",
  "key4": "TNmNaQnngfW7ugBbh9JgyW3w9LDM5Z2WkytAzbChwLJegbLEHSJdc66gHsn8nG95ydkNUb2QYZK2Bu7opCJGADN",
  "key5": "58nXVrVW7GHqtRLUvTEsGnjzXUixB9eXFkbLbm2pK3pg8tqPPZv4gXMBBAXiqg7xhsNeh1pNQnVy8j13PLLjdw2q",
  "key6": "23S8QqmvYJVhhheavHR26cgVb6wxV7pENEP4NHfiD3yxpJZzcoWRGirg12Kydeuio81VYcFJBTe39dB9uY1ksEtR",
  "key7": "3G6hGkhnNmeFvQufoU9Go5kyMfEUHrMqMngS7b9NLw8c4Cbx3pRubJQrCMMcHgJQN2zWBGsSVrQYWj8xT4Y5kXQ9",
  "key8": "32J55Q3LFE4YLMdMD2WPAdDGtUTaJVGFWMgKhh1YzYAjKxvxtw6CCNmM8uQC91H24jFUryWb2JkiXj3Dw8nP88Wp",
  "key9": "czPigT4v55ZN4bKAQsnkRH71mFsnq9XbZQZNv1oLtHjGyZ8QiLU2cRybjPbXQ1EDZWt6FyDQTyhHVgZLnNKTQk2",
  "key10": "29CuoCer6382XixxD52wAyyCU6UxPFyjwirYRA7KsVj9PGngq2vzENjJ9coeKAhUbEo4QNNDeVG2XpjNKRCYS2AR",
  "key11": "2siw7arznm5FR3BAp9gHPNnHYWRHTr7VqyQVgrgrsm4ykGJovqzr5rpXuBRhFrpBFjUsvrBaPE4aECN57QasFAbu",
  "key12": "4bghUtnA7JgaYoiYsk4QjWviUFHfia3MqpmLaWv33cmtfHYJ6ER3nyTTtXHngF7DNnVPKvGPGBZepJAJtqSfrMZZ",
  "key13": "4oK2WPhGFRZ2CQJypbB4qpBREi79RfrUcTwDjHdcnJQwTpvP4wu1YaBfs78ua28PEUKV2FMnZE3uwCZ6o5nWNmDD",
  "key14": "3v8yr4EUw8nmq9oUD7uLbvwaKwcByetvLkWdyfQFQN3M4GNYrHpP1smFdmGLyW5GTm3LweS8g9g347pLFsQtRrYZ",
  "key15": "2ye7awBCfbVhGa4y79yTVQX3kjkg1wnvsKg7MaHAbKpUz2Fs3RURqA1Ls3RHqsBPQmW5M5bmKoXErxs6coS6Pn8z",
  "key16": "35hkFAHRkPaK4bJn8GzJHdPiV1pKfpvxFb4vGnhPwMvfbMgazrLa8imdK5XZENJSM1s2cxvgCPQn5hVDsBqZSc4s",
  "key17": "3BHiB9oxnNLM4Uewi1c5EhqcCwqSyt5fFBaspfEnxmXzTp88cbWSiiHeLJureMGVPe648vCBpb4XsJyPA27xbMru",
  "key18": "2b98XagwpfpKhJNNfwb9oRDuj3b4npV8UcoBe9kCRWrzYhWmXqN5HAf3PnRmnk2HV6rQoXMDXLd15yPUpnjZKkJ",
  "key19": "5zDcwNW2VLLeMLkizgEKrPCAvDP8dyvBJaPp3h8p8BEqqbQZN4uVrefapAUihqhGfP7znUQ46Kqufd3zCeU4XnbM",
  "key20": "46sU4d8pFwDT3ri4qTeZvjRPTpv1gGbtrnkah6jWyQAAej1EPS5JndgjmG2oCoszFX1e57s7wiutzkvNnEPciNoE",
  "key21": "59iYQKLMP4s9T5vZX6CYTy4YVFmcAdZ5VMPUh62JrmWCzDDB4KrpzM3W9YCbSskoxjU5o7wcRXPthbCXtMqxBBcq",
  "key22": "2G4zVdsKLKmp4giTGXmxyd1mStcabEawxuh5pzSUQWcqtY3ZizqrZaAjZmYmtNzrPZznoMevUJfiYs8K9tGMmWhU",
  "key23": "4x57D8Xh5rc4NPmxxmANnMpcQAXECXiz6Wr7iXN3m4iKTia7BHVH9FHFLToN5j7ybBLxcGYyCQv5jqURR4EvEHKq",
  "key24": "gjwEXZomkSZs8921G97X9pyceRPANX5cnjT2Za7XcLpjRwFoJ9xseTy4RaXe6tqr6gjYGccfYhiBdXb8KuBiZBE",
  "key25": "3yCfjQ3KvpSyKBz8tbYyfd9xTZPqSdinGbrLAHvoLrzF6HYgBVm8SjJPM5TL8CrHahZsAUZSncf63GR2p88h7xHu",
  "key26": "TtZVK3meoKyq9R6WCcgFgLm7rTZVudhoitZLT3Zp37x9b8jKxQjtrdKvW2U4qcbDXz5q5WDYdecjRok5PHUF8vp",
  "key27": "5Ykj3LVHPTz7RV2N8ozgregWg2UyGr6ZokSKRUTen3wMFKMM9gnE2ifF6qphLJCn1nv2CyVTSJRfMTv67Bco4UX2",
  "key28": "419jP3KpqH96uHKiYnBUYBUHWHDdxM9f45xjjHdqrGxTfu2cNNxcv5QiyGY3v1yMAyGTV84N3y7xdwzW8hUxuhMM",
  "key29": "3tAfSSMd2J9xCpB4MSWTp5r7Hk67wFaikPw2Akc2udufXtiomR6XsMrPHp9yYpqJr7oufnFH6J2jrUBXaSLyd4co",
  "key30": "2haboonXTV9Jf1Lvr3txr78fXi46p85a3TkjKwh5jWqkFNF8j1zynik1xVHrZeNDkfFEAGiWGmPC1xGjK7gy5ayK",
  "key31": "SiCZMm8dL1KZCDkQet1Fq2vnHWfZxz87opec8tNEGULE7e1wKf3rksyvaVnrojaAzXN3giG3rF6FJiKT5LVkjJs",
  "key32": "3raNjYBWBhmaRQkgaRRJNhJC88wukfoyXimqaBmEzNneMQ7KroerssS4Q44G9KLrr9h1CWsPCNCDVvujAk1hzsXZ",
  "key33": "cC324YkcpwRFzAUabUApLDEh3x3mSkxvQNYccdDXxSuU3gTfE74mCTxciEYL15AUGGWVTezrAugU6vEoBSxnRrB",
  "key34": "Fv28SJEqGfT1wQpVQ8AkPUYSe4oZBW7s5Q87ijx12GTFGzjBHpDr52hExdGkVWnMo5FSDSRUANm6V6bRj4fgk9X",
  "key35": "4NAbYxbEYv8uxzhknqmzU4r8JH7hsJRcTjXfCH7gpc48ysMd8vsmPoHpEYsddPbGGCS7HDX6zhToYXnRk7R5FcKt",
  "key36": "1N6fovXj35QUYyJUKK84Gi4rC6hoSDwyAPioisAXMvHwNJcXByfcdsXmrSB2rBYYyt2G2hkMqazmziibSdNG6KR",
  "key37": "2tKV9Wcu59HTjSURTLCgsD59yDXQVx1PrTSzXoQ5AxxGNtUmho9E3nV2gvf2YqwRzZMbmdsKxcbEWbNVuu16fpep",
  "key38": "3DyhkL6mzbg2f1MUVS1fXP7QzKBEXJevaTah9qByiCxK5soG8vTiXTpuw2n2aMa2NWZPEinKTUNctsoigx4W4h8x",
  "key39": "2FbcomhXgy4m38dwJP7WFSyRH66DyFeR9FBbthzjre8Xog4SZXFsdgYmLni9iFKB6rKDxifxRaFLNesngjgD5dys",
  "key40": "2FPUagXmu23jtpRW8LjwXH3kLXddRdgoj6QthuDBZKRn3NWPueyS6jTHDtr1GFFpmKGvWPVfckVC8seRc22oiN9A",
  "key41": "5rUzUW434u6mPnS365ey2iKUeM5CiHPEuNaUwZMKduX4AhoTQ1Cpw3mgPnUZ9W8NGQ4ZLUKuC12JCCVCfTYLsH3j",
  "key42": "RMKdwN5F3eLPd5gUZCxdHuB3sNkGaHMHiJpTkuSvooy6b7fTFw1cobssAEk45gYn9GCyDn33Pbzz88JRrspbvtx",
  "key43": "48ypC8JZY7fk4jtNAPnCMUGYRSaRg839eR39Sc67gR18Fcd8qmTe6TjoRiZV7KXfMYMu8NfxNWWiCoBBzag37mqW",
  "key44": "4xU3aSNHiobwSAZNZ2zhVuA9waEUJiXvjSxxiuE9LD3fTCpYD15FvrgYvpq7TCgmwn7Qjf765PwQBajkQqFh75Ji",
  "key45": "3HZ41iFPZ2UHzUat7mEJnYHJGR4YK6AAHhuwh7P4NAJweV89NXU9A7k8eEvhrufat7jCke38mhj6MbxUNo6TBiE1",
  "key46": "2Qmw3pzqK2vnpk3WEG3x7yUBzyKQkoF74Xu9nEgg4ynTkiJa2rdDxa61E4SEp8C8R1AEBr3izrrPWWUgDnDLVK8Z",
  "key47": "rd8tJQ3N7jkK3dwy34TiW5txNAmPzpgSY3c8w9Bg8Bm1wVEKWPAqKC4QYHpANs6xwj5hG1hHKvZbCTg8d7VtAmB",
  "key48": "3DB5ZixZEo78ZmDx3UQpjUHeofzckvwSYxcsdgZoEjS52kbV9gYixCEoKriHJNcaqSBabpuYGRYN2Jn86sWAibSw",
  "key49": "5sVEku3naYA6A7zsmtmYBCVvjJyhoEfmDUUKo76yu3cSdJDnWXherhxdibZQHhpAj8y5w3qLgwrHpoMQa4NPbF28"
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
