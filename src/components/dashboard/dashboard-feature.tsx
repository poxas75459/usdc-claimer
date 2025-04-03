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
    "3TRpj3CCcRMhWFCGqRbEVnhb6Qd5MWSp11G7C6mVDMxzKQ4dH8WbREvN2jJ8wDBxPo5xro6irHbv1Ptwdf7iWrQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AZZzDjhHn3ZEBNUHxsaPdABtsRoULPwScxkwcy4t41gMyktmFvPCzGUmsg2186BftpKXyKxLxxY4aLtiiUNsZF",
  "key1": "2CduFVtXZQRJFnGJDFVyEX2bzhVAPe5Dr7HESJN7osL8xv8TavA8gTWQ12J1icm6C6XS1FYZVMoQ4uUJmBKqkbxJ",
  "key2": "63gJZUDScBB6MCMv8Vx5dSKs6WkVwRzERf7rDoKiJBYUKdNVqbeJ2a2K2v7hQ8zhdCMqqpKAfV6XJ2NMScUZpA7C",
  "key3": "AJ4fiMENLZ9X4zuUQCbPYPxeH2tm3EjNSdJPJd3LYqfJRNGua4gjejdBTRYb7bHm2p3QF6j5EZeB4XtjUcpYEsz",
  "key4": "34rxjxzQy294pW3JKmz6meWY6ZBPTSFm6XPcaFp1qwZeezDw2FEbPjmRKppBZSaDLg1vqT4R7xFDVDfyAhZTHdgS",
  "key5": "24wCpmciW6Q1H6bePd1ye8dCuBaf1RayJfvVCfiPZ821TzV45nWSTD6N94FxCLaQFoHfZuWEUE1Xnd8s3UYwNC14",
  "key6": "4XomqkYSNb3dX7iUjmYYhkzaE7c4FVgpK5SVBaBwjCFywp1oS9AjDMzm2sBdZKfmXQ9ezPkHaiyFt8T8daFjp3i2",
  "key7": "tmhccoHx9YCAieoA77rpkZsHvXNpLFJqrF27joDsHTXR1GgL1A1PbCUfQF9Eht3yoKqYGJoi41LZ7a7Q6rhqpiX",
  "key8": "64HhF5ZefaAc6aYMNizS4PujCapBv5e8iJ9n7U85HaJopuJ7fmdWKMjuzKUB4EzFJCvQDVd64vXS27ZHRfWZF5Az",
  "key9": "5WANAL3RsNp8RmUz4j818RHxyNMbnkBq4n3aziaoRTX5f22ZjZXJGPLb2zy1NjLd5jRxWXsddBSVuEySnYEoq446",
  "key10": "zZSrsNT34ZCZRJnX8sic8pESN6wx2ixLhEwfU3zwttq7PcioiGNpQajTT9FHFCWz9aJEaJf2pYrPdHc99CD9hUs",
  "key11": "5YTqvZpyfwDPDWNAbmRTvgFzkPeAJDzEFbcTwawNXvzoArjykobpk4ASEfkJkaAGq5UGxRpx8zzcQ3HajfMZ4Ubn",
  "key12": "3393MTAamUpMHJCQoo5nPExoySVtxdLMwigpfYrV7QKYL8akNurAbJKvECEYgaqw5YVAuGAq7MBXr1pwhV84SVWz",
  "key13": "54zB46LfKt7GV268h6wnz2pvpzTzA8DDDASsrBGkULGBbAQLxJg6zETEdkVZv9wMdiSp5wv6rTPZYqLUuHhZJz6u",
  "key14": "vDgDEFBQ1WSwGBCouD9TF8tPjxRhaQdHxxtRoKHELvDrEEncYXhCdLjpn2qa95zJ6JHnDA8tKNaqBDiHwjDxcY2",
  "key15": "4gUqHSRDZGBvgKQP9yruchemf82S32uPjiDs1mG3oKPct2DFtq4gXW6RBCzKZSqFqb8ocYQBaw42uScFubWQCW1",
  "key16": "3JsaNSbVg6Y5dYwDLc82FFT8oeirDC7jG7452VVeuYbeaeL8uVfod5rfbnwVSYbXFQftGG4m8JbqL3fUiE7R3ctF",
  "key17": "2tuBxb3zi96ZGmuEphs9VsQBukuDRbhsmjKcepwEAaznuoczkBrPi6su3oKyHbiQR1UBcw7hAkFKQpdkZhnQscoC",
  "key18": "5QJjVjQkpkBL7fr5BUH4THLpMnLbGyqXro96BDpvGWqoucQ9gPncHiJrs35oAhnu6RYmA1AHL6EStx6KkWN6PSMj",
  "key19": "45qXF3WQmQ21MhcLySyTCoSrewup8kcPEe4rCpfQY5ssrXj2coZbow5tEyHJT1i7dEo1AjeRumshVDvo6GxvrnLn",
  "key20": "4m7M2JqczW21ccZWWBUwtsWZyTZnYJrt2KGoaWAWUBS1dbodpAdDv6Fc4ZEaWVHQdLDDvhsDNwnYGrpZoxazid2u",
  "key21": "gdkubPYUnqahr2BafDa7mpEEGL4xdgXb5xiGcqcZtCcTvZGYCf4Z6YHXLcfomoAeMJRYAtUQz17x86MZcMZgPBw",
  "key22": "3QZcHoMGr9CbA9CwdFTnCr6aVzZxU2hhCAXym5cP11GNDPxLFJCo6d6WtfqkQzr9SBnZPgSV2bjsBzFTdRdcpUmA",
  "key23": "2TBpHPz8YMu2FddjBE4eMFjiTuCCkFT9znEf34SavWHSPYWTpckroMefEoYvT69pz82vePWY6A8EFpCyeSPMtrDw",
  "key24": "3kCng6s1VHyEQWCajZsLAPHNTob91mrFmtUEB1uVQPKnc3A8QT3PFNHgVZ8J3wJ3hTpi89QXyJW96tVNHieKpuBG",
  "key25": "3aS5JpMP6cfqJrhjjgjtKeuDia9QHdHsr4X3XuzhbWYsnhWnEWQEvMSuJtdKmLgnVrb8NKWf5vTTuZcvYSRyj2jV",
  "key26": "3qVarvo7hXCmgkf7PC2yUBoqndJgTCRkZXwzZdvHPoLphr6gRVAzkSgTkTWKMPGxjvXgNMQ2VbXLFX12EXB1FufQ",
  "key27": "4M3XRmMfds4ngYn6kRyx4UPcJURrv6Px1YWPUvADaWiYJApxYBwTN8Mz8t9S7yVb39SLLd8GVg8G2JEXvrJtzY29",
  "key28": "5aMZ8HHhES2F7DtpGx3wKjR35ppLD9JR6a68EtyDDee9Mh9HVRHj7aDyiTqdPsXx1ux2YzVBJmhDw2S88prHHePY",
  "key29": "gnYttS8wJLRW2o2sRg3hMW2J9TFdME9MEMExiCdbae5AtAovYY82QV1udPXPvJ2thfdhNQXypih5m8Jhd2EqfuD",
  "key30": "3rw8Yo6FpiAUe9Pe67g1AyoyDfxeCwLMNxMjGBMrrt37PHVgedyVbqtXztXcbXYbgtpzuGZY6ZA3zsmGZeF9SL7C",
  "key31": "3JLswU2W3qXxhodvmyJRLPWA6t3BNaCaTU7YdomtaDe4Qd12YRjWvRAADKr6x1QgtC2uf2hLW8q259urMMdBJbsD",
  "key32": "p7RP2Mpd3UR3ot4o62vz4qmAKGFtH6kcL1KrxhvqxHQ41BrCicZSqktQyYwnQ72kdGjqe1pzocsiqWZ5eHwkjxz",
  "key33": "2h5tzdYMHkJJZ3HuSWVEST4uQVkqNwoRxGLhx8DTpR7T6yievtCaZ3nPXUt7YCSvqutfd6qH9KfLnMdsWGmH8vQE",
  "key34": "5mHYkFb37j2f594TCfaBCa6iteUtAgc88uRtWBBbLsqF1pNg24AUJNV6mseaYmrphivYQg3ZiYbCLvKQaBVbvF3o",
  "key35": "2SmiAikJiNpP64FkjeiTrWN5fNrZPeYE89VDasvPE6CeVNw426vKdu7A2NWpKfBWAZLyqRBJTvneeXv9pYrvVmTU",
  "key36": "65FPA1cpcpn1Jdg45LDJ4tqT8WTDksXrnL9rmA3UYfF6GUKmt7KtzDJznwVSJhbMFtbyAXYiVoLE7ecKYm7u5jwv",
  "key37": "sfqKjHAhjfUK8ryMAWHBVmDnRHSVeQzRQBuriMjiCkHc8i8MvNxzJrC6KyscnaRkATduqMrJnfEnFeeW4JitJV4",
  "key38": "2HjXVfWwMYk1cdbZsBoyHSkfADWPJv6FQvRxeycc53UgudM3SC9zdcRiBg1UMPQ8sfYpDDvkVF9ntc69HWeiuGNB",
  "key39": "wjxPVJbH5naJUUYzsBHtcSCc6NzFcgQgyfVueusDpZXsJEzh7ZY16zUgfQEMKJhpLCWBs4ED9tAXwGaBZRc2FVC",
  "key40": "49hJgn2pgmPsCFxuVhUyAQAyh91JCxEk78e2hSNPmLVV1XBvd6iZY5x23z8Ek6xQNdNZkE6tj7qjhQ9946SHbGt9",
  "key41": "AZZpxVWRTsvTF2P4tZL8SAsDW1GzqS1LnAriaemHwaHyjewuMahFgNACHTLozhxkJDC7kKDVrDAXzaAJwd3kvAm",
  "key42": "55tTkRfduJUaTsyjSC414BpJTSi6Be5diE5mzZwHYzGgpaUjEc8ccjCJG23VKwuuM8R93oHQRwyz39j6S5MoVoMV",
  "key43": "4SgB6rHd91kZY3vnBdUAYNcyYEG1iSs79As9xvECxPAkJfB3SY4Rg8UDr2afR1DVF7Ye1ZvjAt4JQsPjLSfmDcRk",
  "key44": "ZZmLt4bNfenXnjffgibfEaZVfmxmy86VWFH4ggwX6TXk8667jPmr7UBC9TvwAvsgPXZgWrBK8K5vYf5kDLvYxG3",
  "key45": "2P8kdMyH4oi2Pf3Dct48EPRHa5hWUJ9YzvVdsAWpJbtTdRQfMDxi15RoK2soWrT44ZhaZbhdhhZxZCNKX5tpLLbk",
  "key46": "2AmyHJMBkHLBxcoVkTLwKY5ynqciZ7xSytR6KtgckEDaUeZbWhRAXSAuQh6RNQ7FCKkzcnJDjGudnrTDu5K5KGEX",
  "key47": "5XwJo99zYtuuek2Gwd5Nvsfmwr38HCcvNSFtN8kHSEY268HY89cj3kNujFrDodJtHSTrkbhyS757UpzMjiGxfdrm",
  "key48": "9AsNi3NTv72EchEsmvB5wb8dYh6rJvMUyGuTdoj8ATDMyZPgvwzzD362HJi7X7aTK5aCFv1s2xjvMmHTv3nwoD2",
  "key49": "62aD2885Uk7QSfFK8KBfEZhn25251EdaF3BKA35hNQPP5qX9dte4biEeojPTrPrbn66gtQoyoyCbc6uWyx4Z1kmm"
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
