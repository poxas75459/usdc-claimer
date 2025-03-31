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
    "53jh9XfCVrXynfUsdyBTikVUc1E3biTuxNw2F9vbyEJsYYFr99DyMiSEfEDv6KWDoGUrVBxLiPjLLq9DkT8GcQUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J6L7uQyXzx6M1iC1ks8PmR98PVUcpp6C2ruxYQDjBFUcwJuJxAa9sNbZPNN886bQprQrW1e2sySLXeX3kHL5LTA",
  "key1": "2DWd9HDRqBPmUSPMEhFXZtjh2iCCJrUJ8GSKY2dkMNgEeqXb17Zj1J9Fg2PKcZpD28Tu9wUEgPXgEiczDDse5ZcA",
  "key2": "49mmPgQ8A4FiyfcEVeU3zgVkP3tsTcRhmwQkgNYfuMmfUANknzfMmuhKL5j6g6GEUvVV9tMdPK65GgADHvFmUphc",
  "key3": "36dy3HDAdFvFZSLcHgFStjdg5fqfPdaXqkwG417mvqypXcucEEJC3eAbeAqBpygvsUwrR3G9fSsFdtHWUqLn2KuW",
  "key4": "254Q2Hdnvr2j6hAKXcRpx6Hukx6BodadTmrM2oR84YxaNn7MhM5MFPA6buC6LdoEexsPiaqyy7sWXVd8rzisYf9v",
  "key5": "2JicbpLwrZmvXCnk9S2yGB2GyjHRZMqJ9r9jqpXsak1GZQ5pV6P4x65GtbCtuXmawHgqdP3Q5ATmfZkQTBRqFsTv",
  "key6": "5pfkMTcRnwCV4GWnuAFTDs1QNZeF3dNBzVQWrYVznH8mQBvBQer44xDpEJeS7ojX27vjYFWKCxNm4ySziUGaHyT2",
  "key7": "2c8Ka6mjNHV5wGfoh55HVhuck8gzZioxRhMBG3ms2Zxtx2Z6Jr8agdHKffseRXEXUHaxQneU792SNYLXnKDN38u8",
  "key8": "5MtUXLGkP3u3XNGWpo5niDGo2K4Ytzr6YX9X88XXErTqJXsn9UQ3JCL8Bin1hzsDSA6S8J3fviK8f4Zm7wbPzeMa",
  "key9": "4ZCZF3ZBUoHE1dczEVmK1L4c6TTEg1SSN1gBmiKECoHiuPMyx4ikH6HyPKzgmoM8ohAuSrpfy1zQfg8qSSjTAGR2",
  "key10": "4JEEewbv35eJmfc3Z8PDwYESywSWZFuQqrncA8LehziQQcG3PXsXwP7TFcJEqpGGhQeGrFeBphw1zakX9anaehGV",
  "key11": "2uEx7GnkAfGwYLpUNHmyd7vRHiJnofKFPMifU5tx2m9sphsXuwHGGuDQWuGSzoAdhn5sPjRvcR1UJzi3zCgY37qr",
  "key12": "97XtZLLmaFeiFbmh9Np7jafTAk5rs2PK5sfrC9NQEGpTMn1UWJ2xXxcgq9pLqfBECXGcbBLKbBKZCujm6oM3S2w",
  "key13": "3ngVr8zherjbNDBUFnaDjsYnDzsbasTrsKt5H4LwDypZwsPkdXnoNtbt3FMXxvmcNUBo6ANrmXqqTSZ6xZRbUibz",
  "key14": "5d9pGS5k98zA6d1Jmz5D95bMbJFE99TBaXoLdPJ9f2tV9QXGTJYvevTHDqQrpMvF4cS8UtTTFJM78rAbBmaBnAKY",
  "key15": "2TqEme4h7r7sRw68oPc5yJHauFnw4RCvMjywZZQKxH8oSQs5z5hmkRsyWc233JtPDh9DzbWSZoviegLeub7qn2bS",
  "key16": "gqkqEPWNaJQ9oPkjU424fX9iRdkjqaHcaUifyQqn3sR1zikYM1ipC7Pg5uGQDycuPfCUqzNhgb3BdhrQELukbVn",
  "key17": "5RvAfW5DrRM6co4irobpPZ4d3bDyVFfXfT56VTUNkPzcD3t7shXP5ERuZRTguqmBVWWhsPvKkymV36hbWrJpZ6rQ",
  "key18": "3Wf564TB65n1pSqVt2k95KKhHu3SsGfQsQLxKBzKK4tbGLam5Ch5YZrbobmJBxPQwbUGsG9BCnMfoBUatQbahFJF",
  "key19": "2rCkEeSDnTa1d6wncC6s1Tw2XRXVTPShA7pvn27nA4MtCy8Gm1UmhtKvjG9z2XKmUTEmhnoZ8hoYqffSZxVXXWfw",
  "key20": "Ua45f1q9jQ9ipLEA8PKDZKumsY319hAesCbcHfWd5orCmJQDyt7tacM6uGkhbHhuUtPPaExtsrRa6vURuoDkjrn",
  "key21": "56A8ct7HjVTzScMLpCvaeBseGUztFaXms9s6NvnVhqnWsdRCQUZFPaKvgPvj3dTtKNH9L5mbJ1GuQWNr5hWGE42S",
  "key22": "2udf5CyoVkFUEHbNRz8KtHAGefoBChGQsPgsQSQR7TwHkahvJeyLo94zDdfpB1EKPG7eajiaDaGCkMMDE3LDTQu6",
  "key23": "5mK3fgEm3jQQJhq8iK3wAA8PcvrCipzZwA55SH52n9dmupWMNNSCsYcLx7nMnSzRhejauAqbqwDnWhcN5pkWtrr7",
  "key24": "5LDsRiRMFAbnP1Xhy59yrTN9mxUuFHKRNPKHmAdAUeaw83TaUzWd8zzZNUzUGU2XxycjQhAZEikHrzmKUoHyouS3",
  "key25": "85M9VcXq1581mNvfzwU21nihkmMuAWytXhov3cy2oHk39uxFJJcmPDVc46PD9EX5wSFKbrURT11UjoFqdFDHHLn",
  "key26": "525dowAYfEdt9E3ceoqH8d4dAt4UgFUppwsgzAh3dCWGTHRU9qGzWDCfmKjXYLbTW4nJNRSyGU8Bp7CzY7Py3Bkb",
  "key27": "2xXLhBnv2gxU7puFUUy4G3hDdrovZKRkbNar5M54KBgR2eedyxfrhLUDNzb83M2Dj9Udpg8gkjuYs3XZBxmk3Z8n",
  "key28": "5Yqxia6kdcLYNf8f1cmx3gHS2zAYJvCoteoGo5PBfAaRe4skLhFPGLVDoB9t1doon1SJVCQTK76iqhHpshf3x3aS",
  "key29": "LUf8MzpnuaPqHxMA6TtLuUne1iQEC3eTYrhCaBYJg2PjGsVk121qEFhgX6pz2TWBQZbCzB62jdNnGqUxUKyjALJ",
  "key30": "2GMVDkJvrR1LMGvj598FKnNZs2xp1jJkyfk8tizt3vH4XCaa3UwSvUx9439FfFXxC8cFtHPFLLRBkdsF26EUYaTb",
  "key31": "45MEccUhHTNB9rzGtdZSFEJqdrUFRnRooG9TrvYPgC8bkYq8Fbnanhaj8nCqQqgHRuwHK16AjpAatiQKzEXpFKRH",
  "key32": "3829NnLWposKbWet5n8bwSwsNKC8As1MRr57trE6Hya1qKuDhD42qMkiTZFEbSfoJUxTGyVdEXokYyHfQpqk2Pus",
  "key33": "2CufSFHhaKGjt6eD1rqsWqsuEVUUufuGNbkjBzdUJC2Jx8egQxk626mZjXMVj72nage6GWMpfGJP9LkdLtyjcZs",
  "key34": "2KcDTedmqLjs76wi8YBhH6fqJcEF9NXTntQxJhLQLYnHRSgCyFfq2KWCVgbPhhaDHaPr6UE5WYshxwxKC8j2rGea",
  "key35": "mG3j5cEBWVEPez511wcszSDo7xgno6qs9FhpfdkUBczCF1DryPeSPhuJjP2ABSg8dkieTDtDiKNbHyY9J1fwWxU",
  "key36": "23kDuiC1Xd7hGPBDT2oWDwggSpNu4bjTkrr3WrPU1H9KwMjwa5U6umMwEpM7sAHtfbfSnMAeTvjjBSKSLXJNWJYk",
  "key37": "2FLBVHtWvEtBeeypNp7N1ZQ9x4E8CABA33AFj4UiMTCcSbUm1DLBtPXr3Us5A7Ct9Ph6bkXbHURY1kxDL5PT41Fh",
  "key38": "4s7ySS3demrMgS71uDznPha3XHaq3PUJP5i3b3nUocFTCFd2MShb1hVyrUKfY2fCakib83LqbpkBU6VwthfeKQYh",
  "key39": "4NFkTE7id7icaDcjTuN5cQkoE6aozjxd55TPoJCmvRnxKy1QDBroN34AWU11EuoawqCnSiXVovXfWmLhBN5W6WQX",
  "key40": "4tWFzGF6SNB9QDVJdJQoXFco86ARqHop8bzydyZ9LAsZd6gqZ6NmJPgQCcViUZHgtet93w2ZiVCFyHCxKh2jEHdc",
  "key41": "2vZfJNW5fj1szMHdH9YGZRpCL2kBWRxm3CyUmGy5BJhom9YLQvkUwbtNwXUADR68kC2CovhS4fp9cB6v3p5LG81r",
  "key42": "3atjgC3NCrMEtvcE2iLRXhq6pkGX4ztz9xTeJamAM27q7dJ5LGGNroRAe8sKm2kmshbxYrjk41gvLCgSnDCCWyvQ",
  "key43": "4cHVE4jfGup92Z2mmoaRXFMEbKvZcJatZGCj9GkSBuBxUfFiwWAToJ3xrtiwgWFg9ZXf9LwEY9ZehN8TN1dH7e6N",
  "key44": "5ekN5TniNg9VA2cT5D14K2QGtnW565ziYqS9g4LUzUE5GCk6KCNSmNFPcksZq9vqFZj9Lyy2YJBHtEvuyVceEmHd",
  "key45": "qZrKzLVzU49DTPpFXxn3MtuYXEXYEGWxqrnZvQTCUmcAqSevC5u4AmVUEj7PkXt4cwFXdA35ybNniT8cjqeeQwp"
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
