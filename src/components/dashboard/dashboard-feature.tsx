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
    "48zcNhgNNVNjTNgoL26mhs9NrxjKdHtmGDG34ZNzBSt4ZGjkvKREtzK41rwvLGE9w9ercYMuzyPUBVUATYn17RAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YP8JkMcUHGsJct4oyX4htR1mTmVykYDun2tN1RUPJSstSNNkeFAuihVPNUrr4ofaFRU7g9kSKXPLtzeg19461k3",
  "key1": "2X4ETNFS6TyKHPhSiJ6ayFq4Cg1F7j7FgMsnksKs9Vprg1tAUxxyanSrpmahLsgL8snJPySZyzk3PdqZfpjWF1fg",
  "key2": "3kcNTsND1FPuKf3cWQRJthj1A3sA2QN8k5cazibiBRXTLq84Ki9EK3cT6rRZ4CtqF1HJHeHEigouFikssLppNHtX",
  "key3": "66e9FUknX6r4FiSzCNhgfxpaneikAdmfra6ryTkYCp9yJ5x9vvm4VvZCdvqKVTr6GUsSb152U8iRcBCxdVqaYNdT",
  "key4": "22Br9czy7SLVjnKYeXgczi6GpG3h7g24jhQfbw1H1bkuxvfFpZvV9nVdsjfsHBJ8y1537KockZVEn2jZAQSKp7tK",
  "key5": "28H9uuCoxpSwDn3zRBx8XRdyhY7Z3kS5we9T28NYFWbDFNKQPn29smVktpoftHq45b4ZMc2pPqtKc8NFjMYWcKe7",
  "key6": "2CuhU1MRoawQTTH74Czi8rQnB95Foto7QAZTUcXvvARp6aF3J5wBuhcRjRUmC8odmWNjkSv62HTZLqTJW1o3zmCi",
  "key7": "5QE8V96uwiR5P4HmCNvDiCQ7MsgxFp43JoXREwRW2xN7JDmDfGc35jbh9Fmt1vZMxSxCzvBu1sf92LucA47JJjxM",
  "key8": "39DTzPri9GUQu6ZEq485H4gJaV1jjPk3PJVNqXvXxf7pcrV5a9cj488fgnaPgju3qdN33s5ryimqKYQ348ABS5jg",
  "key9": "4GQ4n1GT4isCsgLybM4xmvN4KoDRFoPud5mCJmvxnd7ikUviRB3PTPhCESx7WVfNTSMmHECvWY4YgchxsrtfSq1t",
  "key10": "4s6PvdeNTD3ekufoqo5yexfGvstunXaBEUJQ3rNtj5JLTS2s7EJTdhgiWrrc7DhRTJQ6yCrUBQ44yT2NaneuXSss",
  "key11": "2G2ZuLgdKUq99Yqnsp6qCbQproowfKCyzZoFN8f9zg2dxgCHUvdRrHmXT9PtsQ1oLWjyXsNm923212Aj3Ne4Tcyq",
  "key12": "4CqzEL6vVb1Nfv2dVcDyVfoyJf4cmcshooeu6RuBSzLuXfkDNDybR8vxkQRLgGTzca57wA95Xn6i2j2cCN9wBcXo",
  "key13": "4aHvun9pkexzAeGmpXkiizf8AJLgmJJg6WK1KqCySSzzoBudc8DM9j7L1iqKHtdRYEwDL6ws76CdpGoLngDkkPEQ",
  "key14": "3h9CT1VKHYRSyDS59p19qo4Hr628GXMvYrJqKQVzsceHssThT37x5fPeFjunodrp2xRr8EvPWRPZ4Dwf1yHxKqHN",
  "key15": "4T8bryVdegrA5UyNdeYTPmCzRnFiCipHg3PuZx3Pfysv9EYE8EvtQLMoX344RGmgCNraz34BR1DPshvabVpn31JV",
  "key16": "3nmwyBddWjyyPjRfBybPGJYi1md7ePvtkL1Lgn2t225P5q9UVPMBpYJuYrkE4PnjKqs3AKSne3FBpk25gj43ymS4",
  "key17": "7JtgCEpCDnpMGqkJZZPgkCJLj4zixGyY2mJ3DRLfmPeoVquKza91LSefNUm95CSXGXGTGgXS8hDP44sdzsg3uuE",
  "key18": "3tNYcprqu1nWX2U5ggtdxVJVBoywiCAjDrzfWSMFbTUFWDyyFt7KLMFJpii6ML13wXTzXfid1vru5e67HoANuLLz",
  "key19": "NLs8YHmsKvpGhv4DY5eNZo5CL1qq28sp3q8yQjAjqayNbs84jsocYFuDgcay8s8EE5Es1rjZETbea5GVtjKB79d",
  "key20": "27v2cDEBBdxC2Li1nSPPC1QA72eRbvhqB2CSHaVbEEGoCU7qncAvmGgG2WEn5EfXf65zrUiNifWEjEUmF5sKd7J1",
  "key21": "uBxb1piAB2gWqkP9GKn9GZLwznPVw7vQs66NqWUXfsikKhCY4dPVsZVHJ1nkxRCHT7ieRKBE2D3C11kWbqPke7q",
  "key22": "5NSdBRkuXA1ub6E9QWsu5nKpCxAx5Ri319PWenDde8VFXPxC8RKVzs3RknfnQwsiqyLCW2NRtjC6TQcPFLd8ZVZR",
  "key23": "53EZAFUuEpXqU6LDYXME9XojtzoYASnW4FR715isTw1ZjnZBxg7Az1hk9cHFntgPbgbfcLcA3XvwkTicJSXakWFE",
  "key24": "2j938RjuEjQnYHcogGvQHpaWyz2RWCfNfNzV31FSh1KuV8tFoNmUjzAbBsyHt46hrZHWwNTF6CiLmRsej8e9zCC2",
  "key25": "5UssAD3a8CjmFqjhRo2Gou9NyvRACA7zy7jtjJNk49KAXf62f7PkYPpjb6fyLPFxSrqGRgBnynmxNxM47fKSad2o",
  "key26": "3etpZimEjm2rj7QWLsixAruHn2Ne9gKbMAenDrncq9KHojnpbZT3XxPK6Sy7rVdRCEPoYGhNmsyMKAJDMFwMnHRa",
  "key27": "4TLJNt3pJxKDQQwtJtVfYTPt5mMqs3NzYQt1XasoF37TXHFdw7HxUQMJeezaFGDp86NJyM6d97cSKziaaBj5ewBQ",
  "key28": "3eVP4aAr43sD248QBEaUkrv2ZuLTVHGJr2zVf8esVzTVEh8tCVvgyF5P1rvJ5MehGifYHy8kvDULoNQEU9hbGyUJ",
  "key29": "3Uh9KXBcimLXwAr5o7fUebmA2MjgbnbvFyEUFPxFdnrW6Ed1Cx7B9f73A2qbzLyfrtNSm2gcvaDvvoS19Gw3Z2ps",
  "key30": "2KQPFo3ktthczLeHWvEh7fM4pCKVWnZ2fsSQUK77TsLmCMsSnVQu6kTnKPNyvgqy6EFzVgyLhoEwkmDEaNXpqxxb",
  "key31": "31mRmeszQyC1ah1hN87qimz1cDCPkKzAwLqD6G2dzGgsfiPTwRDN83DSxRZD7VYwHoHtMFxhHeUHXZDHxYGDrpXD",
  "key32": "2TXg1M1w86y5fvZo6QTXG2TAdUR47coEu56aqUTQD1CWy6k2obSmHWUjPQAf78Zmufc5JhKn5GtffwzUjCzdUWxN",
  "key33": "4Jc1kri63o9cLwEmo7aTkKLF3kLtvPkrrsDW7VG2H4HYE3QXFBrPietGLHenGBppn7rh9ektENhQWEZA3ix5YbPy",
  "key34": "3skVcnoiFxA4YywWWbAEvgYTKHY8tGnAMQcG9oznaiW4qiVAHxiw2uNMbP1B9uFb7PtFzkQeuUxCfWTRLWE7iQ39",
  "key35": "2w2Eg7pdf4igbciqJz3hYWKcD1UGp9apsw9vyem1j1hm5YyvE7PP6D8JpqvWeg3emz6zPtWNwe2kT8BuESHsr8d5",
  "key36": "2Kn3UjgFPvJ6NywL3peciQH4eXG3Y2puWWpXqsPCTpjTCJpWwUieB4DUfKfp2r5QfoMqvfkwZ91wd36oaHthptGG",
  "key37": "UsvekqgB5Ei3ZxHjhWxy8E8WXiA1oTxhTsfpuBfvoF4Nm8CLRhZgYrPM6wwH91T2qvJu1LQDRYfYDSoWwoNQbeX",
  "key38": "23RpbHRRfVFvKiupt8sJT76raUhmPCRDCDjq8L217iwidb8NfZRPajSDDGXWwtTCLC9fiV7KP5SYW62MGQM8kH6b",
  "key39": "5KsRHxJS2Ad4bxNzgukeperEwWWR9spYgfLM1dm2dTx2caoysmRkgaKekuwTUdcSJfXgyP84J24wEEi2FU2nfw54",
  "key40": "4AkZCkRzWb1t3FUJcdYp8sKne8J46UA3knTo957wVt29zV7SkHjxvj1WHTu5WPBrwucfx9gDtoXtUWvWdDo91Yx7",
  "key41": "k23RtjVFGmwLJrRx29ErMWqkHDwRjVNMnGZZWi7Ue4bEYByrLj1PwVAkW7DZ9YSLvj9GehR2ZZuJWW63PmgyhQ3",
  "key42": "2yxpEsho7zcxGVEjhDU8WXx7qFrtxdnfSFGL2rtnswWcvG7hPVqQFAFV87Xfo1XgT4jwk3im9XZzFv8FAS2bfFvo",
  "key43": "QHxifnuNSuiz5hsudSibd8ie1YV1X54Jp5TZRAxE82kKyYi6GNBkc63Wb4jNtKi9pUTWT63rgZi3v7D5adrid5k",
  "key44": "arKZmib4Gv7kAJ4PDfLtBV3gb4FXAodgVBygteGsvvTa4UgzuRKCQKkWPEcyJVA1PqXLWdWNjoniu2Z9y5Trm5d"
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
