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
    "5zWoMvwd7TfKniM96o1eAAXU7UshJutNGLugFPkJyRtyvuNoG3CL9yF5c9phe5Bv6AGLzNthaghNemrbVFXXrTEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pn7RjeVFQGwVEipyCffeUYumHRf8Zry2nQ9CkBZVGRubwPe9tbsj14XpvPr6snqjuNLQix2SE2yfKaypvgnAXSG",
  "key1": "41WrxfxS2E9Ui5vDBtewXjVyd66MLEKNDdhsLjYMAVyfVrCZ9nPghNCLZkpdnrh8gvFPqjoZmeHLhVViAYAZhK7k",
  "key2": "3ZcFYKuUaPKDP3c1vemH1UHtWZx89dJxZyMCUfjG3cs5MqdW825szgGqC8TCtLLFpyKddG4CztFHqrWDMmys491M",
  "key3": "5qD2q3iVHmzbbwzdmxheYjC3UJxWG4W6GJxpAboRczgo7b7jzm8EZzcz7R3iLfxgRGK48vBmS3S1xWcxCCa8M64P",
  "key4": "3Vbk74686vS4BQXTw1W5BGGRtLYi2DMGMcoA74V54ThXUZzsNRc4dqYdVewB9HEnCL6nZdGbwBQ7YtX51EXAFnr7",
  "key5": "4Ccq78VPGJD2QhmvxVXJ9gMtAwGF1dPZNbRgewaG9HexuCCwaghcDXTuCCZxvRRKYHDtozxdsXtYcE1T9THMwSs4",
  "key6": "2iedibsvsZxfB2KuRExPqrsNofF9LKJk4hsnFw3KUQ9ZHBANyWv1RPqQ8Hq48RK3hGBrf9wXgsyWGh7QmJefvGt9",
  "key7": "G4W3zrGrg1mfeZGKjJ2eUpiWQug91goBp7pU11YE3FKZj8chjTKMhGuDpMur9eBibVFvBrauHhbZJ2wrdjYi2YC",
  "key8": "3gL1dDiEWGmFRKheb8Gqia42J7SYNKLDcvzQnGBgHg9wyuWPEcW9T8jLsyx3UEH2oyG4YdzDGuURASojDCYQbiVn",
  "key9": "2US6gHxAug1Z4y3FLpcekQuPds3Gzp97vebYt7LTDjJiGbuGWsuijoiS8DBBQjC3MYLfy9io2bDdCuLvUZuFBUuF",
  "key10": "3AANv5FD9qqo4seTRwBpkkjbd8CZu1VE9Xjo2jMBgk9BXG3DhMg7xapePPYVQJK2LPPm5N6XTru9Bfkv6YLTHeDb",
  "key11": "21QbLdRLjEKLxs1XULYNCxsXCZokHjBPnPn6aBfR7mnojmARY5N7mnWDLmfpd9kg8wa236WNBPjwvA2i8yemMKsW",
  "key12": "2wTzjgMFWpn6HwRRR9KgcoAKWoafsR32vFBd96XpqLF7wwfaUgzHnEteRkZAearRn94ih5Hz9UTM2ZVyGqtbF7Mq",
  "key13": "2GX2wKT87jWexucUVepNa5tWL38vzJjdhbYXAM9xPjcCyjXfaWX2vN5wNf2rrkXKFMfqLfJi9C4gbMH8fUCvB46a",
  "key14": "4998nca3FMvdSwL5zzV6cRPChGEj7q8PiPtGkrD9g6yzMsXfjAuWKjijhYVqmzvjhcPfHGM1KAyS2HtcsMAmyLq6",
  "key15": "25bzUZiWLahiEc1yjnqijR6sK5yw7V4ckYZbgUTrmXunDjbv34tzqwM517ZMKFhxJxTqViReHRxTygfWXGbR7V6o",
  "key16": "2RFe58b2oRUH1Feq6Gv3ztk2dS5WXBf2Lc4FUnMHBRM65hzWmUB9VM8cAQLYHZtS5v2Urs9Z8wKo5LkV9ZK4jnfs",
  "key17": "2ej5PXSABqMUkDbQpavf6Vzs8RmrjpszArz1S2PtrHmkjkCiPgHzt3isgbS2Jbijw2AP8YYi97c24Ua3JGgxiHBt",
  "key18": "5V9YZBDH8eYwx7kkvgEvJACnRV2Dt3JiMUXWd7vnoXgC6q637Ahk3AvrpeEfe9yizohgB5b5azEw8cxsSV6sArPt",
  "key19": "4cXw8mivTZ6iTug8NQ4s3w6NovUoLUe7bo8GxzV4Y31SDeJgjQexTb1WPC2BZz53dY7LkhSiv3piHqRHiRLWWQEW",
  "key20": "4jQCzdxCAErrSSD8dUssDsZCbiX9qrcVYSUXBRzv71QKLc8BvAfpmYGiDwCWYYQoPDERgDbkzCGGtbwCLcM4HPFu",
  "key21": "tHxX7qQRNyz63tcVPUTh16UJCaJyNdyH4Fqdqju6jeZaKzix17beovV7D62icmdiByCDYbsXVYchwYZ42bBNYv4",
  "key22": "3n6fBTLGAquG9inbZaGALrS3FF2jiwvmRciKmP511QTy54zjhVbQg19Ujvm18KmCaWPo2LjcUJM2Ng9N15dSYfXc",
  "key23": "3A9xCQe9UMtjMFVKDppEuqd6cUWQ3WA6tWdtbrJrE6EBxMkDQ2hdB3nCFw5gRxuBxjNq3NiNSSQybY4VFuhQ2agv",
  "key24": "2veUbs7UN9KPFgKqAbUsbGQ8ZRrDnmh6pJJFEkRrZyCNuwjpW4UjEuExh8HawvGbDE6EnavZba33a9Lhq27jf6Le",
  "key25": "JfB6oERXU9mp3ePNJa5TmSfe1eXsT1WdewwLaBDJciAQkzszLSagaiC29M1CZt1q6ggRpGkNXHZjJxyqo58HMYM",
  "key26": "vycbcyUGBGHwAio8Cx5fJHZkKShWtHuv31C4L4v2ecCx42JHKWGkWXkqb2VWBFN3qjsWTthsMUaPCvkXa2EXVgh",
  "key27": "8HYVnPvgbi5LmZxgrG3yTFDp5kn2SsEVXpS6p8C2YngdnpnUcv8GWvw65iKyrX3EULG1EzbJ2vXsEjDjEWx7biV",
  "key28": "5oJ2mkfzLc6wbrvUp5X7HF3bSXLQTmCpzGZeBZQjwXug4FrCs8MnAFLC3FyyKhhhryZBxQHv3CJJsq5Mdr6pLd3W",
  "key29": "4eiwLaPKypiaZS94rJNeFvD8iHzPXR94eLxUeh8gsQHdWip4U8NkfoaTE7YzMBuxbEGEGd8TDbPrk8zdEstPhU92",
  "key30": "kRFakE9rrvbfiL6UGQVbuBMF1dNCLEEEWM4PHMBxGQy55nxTPsU7Twi2czVgP6tuBPHPjVFMsiWHDB7HL1WwoCr",
  "key31": "3ecePjriUw1xjFRN5eTeF142NdQrr1N92trvkPF1UyxvapHVCJHVYYYPpebRrszXWy91oSctp9BRTgGQJs5Ar6ph",
  "key32": "4ckF94cw6Uv9vSHijPcerzAApfjuoYw7UGJ9zUSiPsNXhZhzQKQWLJCa4r7f2WWMsWowVpwjFNSfpAv693VeaWgQ",
  "key33": "3XS4sSCeU6D8XzKPytwg7GqcT16Ki6AjZZyVEkSgvuhAzqEeVP1UuHWmva3r3j1HSzc7JRyFAYwGiU53DiEyL1mF",
  "key34": "KeUPbAyt4bEhKbZtLQywh8Bx57Y5RRE8UE3isZE8QJFvfyDqoBQQmSAe2cFjg1694s2dkhB4BfbMXR4BetnRfq6",
  "key35": "67JbfapeoPYbRtWf1Prxj4MsQ4gTQN77WauiikKnAVPZ1LoEEUYKsUrG9aBA7iKnepL5j9oRHidyBVYLNhn7AwNV",
  "key36": "4FU9ZtTeSEYqiQa9bXDfYXUqgpGXvRBDLf2shm5rtML1iJTTD3hcwe62rWfHeJndiDUDHLZrkHnkE4EoJyfoibTA",
  "key37": "352yvxbSWtAwKNbQTyUyueXGW4RF1QppNTwsNKkbrh1KNUMVy4fGqhtbXKPhsq3PbpnjmZDkuPUZ5kzcXUeBUHCu",
  "key38": "317fh1yZWn7sAYwwf4cSQpvW1WnMsZkCVGAYaVUSCErX42wNFaMpU3isAHKNAdRKts6n98z7P2rghQeaD3BiGZXf",
  "key39": "2tK3yQXwspY5SnKTMhEiXpFsiDFAUetXVbF2sZYW7uiJyijgxKqBNKjjfK8YKYbLcE8jYtpqvD3tHDtKLKh4DbSd",
  "key40": "2PnhJoVYQ8GYcEGotupqyFADAcjzJRW9KZ46V2WwXeyvAcRFsJ4SpuZqbEf2pFsmU2kfEMQEQR8SWgz462N8NL3q",
  "key41": "2f7YPHi3aeaHr6AW5nXroBh5SfiiE6YyDVg9s2ZoLRUqvSLLgVza8bWKbpqUyqd1uEdjDxUzjNMPcm8X9sLSksAY",
  "key42": "MsZMPCwNAjhMXmzxbtCBK9SrQdknkQEfvfqHAUzu8w2CvXZz8Qwr4xfxZUon8Q9azDx9XzNQBuvuFQ9ARMm9vKj",
  "key43": "o6LW2qqYCEqepL24VzXtrC1EV589HwRRiNQFe5jkCs6xVhHh8AamsERihJkewaarBQK27T9ojBVPcD9f87qCYao",
  "key44": "5semTKUbcaa5AXhB2tfZGVJpmKiS191pdLSEDeCb3UGwujHaZqCfTbbQ5PP3FhLjPNLY8ffXaiCxdSdhPrQMR9JQ",
  "key45": "3aTdUokcLh2e3Tpj1D9UyJVbWjvFsz9GsUPuMnNWhV7RFGUGVaKhy8ZSyKK1xGSuKpHwHNSYwoirjyy1HK29dMCt",
  "key46": "3bELKVEsuX5C9WbvBHd8KLdZAFsDLtoWKL18ootKpsKzDLEpAnHYwz68rY1Cn96PQjYLrbagG3WhqXtv2Ko2dFBk",
  "key47": "J7LqK44FSPzGdddjdKi39f6X5b59qFkkDa9vkyZ53GLudyiXEPJvmicLheMch9zbbspy2ThPbLZiiobSrSXbbAx",
  "key48": "5poqB12LDtQ6xYmrqyduJcet1xogNTu7w2WQyr3U8kxPKZJe9foAT4KCANari3dmF57t7P6fFqyj1nhegzaModjw",
  "key49": "5ki3xLV2wqjmsrT6QwaBgmLQgW88MyJFs6RP3diT6n2zqqcrjEnAyxR5EvjTXYCZUmEUAL1zuavYLwACxygK5cJu"
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
