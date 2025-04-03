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
    "3FVXfeHnaTHTss1RpPx26oDUgoRoEEFVfZBHKYvjEgShpMki3Yg4CBebAZgwDXxNEdF3SHXZazmfM76H3FLp5CDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edshNm4EyjtX6wqCKDXYsGNRb8JfirMXE1vcELGDri63D5L9PJRGa85PJUiGPzdSNGP1HWmAkxJudU6tjBdCUHG",
  "key1": "54tTqXeBvTL3PparBmrWdaxFfsjKymTxKDkaugpgM12PBriGACxBnPfDUU67VmrBw7ujrEP39VGzhqnb5NeUvg75",
  "key2": "4BJt8CnzLhV6F84FwJkixtEfSWahCVdbRFQpxEm7oxEMYunyr2QvMPWts737wT26DXZCc7vZBTm8Sp5KpcmBopec",
  "key3": "2zkjqJewDLVaZgAjcNBEYnNR71dTgHyWjMRWhsmTtuxqT5UcSidDA8M3QiQdSRihKeJmfu1x7wph1Wh3caTwTTfY",
  "key4": "ypAprezwz5ZnNZL7VDqkMaNSJvCpjYt8q57cGqtKhhqgxPWFoYq4rFG5vTC9HvQTkY6MVcXWZdMUnuQNEwFWuC9",
  "key5": "3byjeHKysViu5A79UhTAuWbi8Rr3Zja9Uqx1HRmYyk9BCe9kcjyQuDVFkjACYhaNEjLhVrn1V7ZPQ6ULtNR8z3zE",
  "key6": "2pqkcn4sxPVUCc9NGHoHQHQygdTEFt2BkJy4XNTNMEgZANomz94EkbtqfN2Zt2xMyNnbPHPejhvEjFns6srYsnm7",
  "key7": "kjaUCvYry6ESrNSX4xnSqZtuZXxQqyWi2V5h2ZoR1nun72ViMPnnAF9HM8dVX6PhyJVxBV6hyR4MhmbmXGk8yNR",
  "key8": "2N9BZwyWs3k8xcpDPBQ7TzBEFib2YYGHYZya6PnFK1zrZuvzUCESDuYL3eC5Rb6EKw6qMb3KWWm4bYBSrKkk5ckr",
  "key9": "2EVgSBpQhXhVyGV5XY1cMk9bzPF1PdcyJu4MuLWdyELbfLTsUvh1eGiMFQkdsxbWsKmoWKnnuQE2fYS8XXD7jTSX",
  "key10": "2ZD7sM4Rjk2rVwQzTnNwo6MKcV24Fa9FKEs5MwZECBS9VtDXbkmtLyqJ6xJzSEbdxtdvGsVGbMNSwtvf9jhq2gem",
  "key11": "4zkFKkCk5kZSHkiYFV2CyaBZtd3yR4Zu8EGEZd19JFHAaMr2LaEJnrKj78tuZ2Rn5s1oWWmHdMLCnhpwReVGBsui",
  "key12": "T2b5tws7zthpaf9LwJEEak6Rrw3VEP62ZNASP98Qdt3ySQtLrCa1jKihhwJoWkmG7575x9xHEWBceeQ2C6gajzp",
  "key13": "4p8xjNWiPPwneyXHWqXTMrYMgV6EU8QL9DvpvZbgZ7WDY76PGht2FBjXBi5czqevFnaWJppHuX5WDAxodCJ8Gueq",
  "key14": "5FE1RwFWSjKM58fkSmodGuju5wQ1q9qR46LWLvpynm7g4mLiBw8M9RRiUmUbxsggwyJo1R1c4QQWyeipJKoSKH1r",
  "key15": "44Ryc4wQ1hLWADWC8NaNqpL3EpkL4ZGvwa5S8pnJjsshbLZuzRz3NAQpRBNDeiPDNAEjDGrTkvFNdLLYLs2Psdgh",
  "key16": "5xTxVMbFcYuGTpjcjTMywmvzGftWcwrbChbPgCQvyy68avpVjsUKLPDVZUYyeqPYaLb2fdhAHmZkFTHUS5uz9Sw4",
  "key17": "2Uj9kDdbEz7CEHAiVwKC6h4snTKHtkAhQZvV5XqR8YcJQGmWYV6BMdJjX9Z4x2tnPFvx3TdukiA9xXoZpKZqAcMe",
  "key18": "318vHtFYAiF7aPRcW2maus6SttrU6UfVQKjqU25igSYTen2pWDu4ZyiJ8Yp3Nd1RNpvrj9bgbtpxrCtqyVkXhTRH",
  "key19": "2MGzKaUyp4KoRvZM5tNKHcpghDPjjD5AYKkjPna4sNBhJN965D2xS1Gjb6EWgrEmrXcWaA2QEn24s8geWDgkLwYA",
  "key20": "51ZG8jfVbeiPHhXnrrcYzg2f3gJesYNpBQPHmWH56pBJW4ZxgnQ2EWTUnZPScUXTAkyNCoTYnT5m3P2JfHbMMcCX",
  "key21": "4y9mjuL9ZDq2QinUkYhJyJbeTthnKdysJYtGAU1MNpaJnsqwjcDNrhbzrpPxVb4ADPeBjEkBySRpHG5CD6kYa6AD",
  "key22": "2i5DX5TykjonsELQqmEZgEmFYpap41KbXV24gcCdH6GNfqMhZtk2mwvvaCaV6um6dGbrUVhR2ergL8i2rcf1JbmZ",
  "key23": "48qrgZ6dbc7zzaQC4booHKPTwSA4sXD8P3VQ8ZSP9X2zNAhrXdCXbbuM5T5aLjeT8XVcMW43FJyFrAx73zWwSaZ9",
  "key24": "66rwGyLMaYeiuMaxNUszKk8EEFhzqiv8yTE2vrYzXLvVHNGdSWcybhT6cbHdf1gDSn14jV1Ksw2keUt8M1JiT4Re",
  "key25": "5vvhMCtZFWXh7FkMLGfwqafkPZWnYohftSRWHjwz3nM3tPjvjkVhX5fstMfwvmz4LjXUSRM4kBH6hEM46wdhNkDh",
  "key26": "2G2enw4GKvwyC2cJPWYgmJSdExsd2qczn6sBQpfL74qRbbHk3u5cdndT5NCMBbP3avwmQ85mGhbFhNuBzz1znxtN",
  "key27": "2zc6A6aYd6bUMCmnykaKbJjGpVTP5DWnhEyvjQ3GNobMnjvy4rixpcsFwBUMrVbLq9gk7v4n93KtaLzbUbizaDUT",
  "key28": "2u5WQwC3YWWj4oThSSAsgDDc3ABcwW9kr6iePsxpWUfAeSsefMWeSUiZqaymus4m7HbeXzVaSe6AJn3NVJSqCNwW",
  "key29": "265CkDHDB8j9Vx4V2mTqCLx1j58uJytsp3b2Vmv8kHtvxR4o13X3AgkeAyT65W1c6q2kqTnJfZT2W2BkQ5rNbuL4",
  "key30": "32Z3Fh2QB6Keo77M45sdQtf9VtBnqoSy4xxhVgWEvCAGUeGqMwBzDYYjhqdeqE8bRFQgd7Z81A2279gUBWgmwXiW",
  "key31": "4DMzSgvpN2DA1AzR6vBByBVA5QaMmSqpKU7LbdoW3QmkgzxDg25JaXH64gJPhkpub6ZuTVTZT3UTvTYjaoKFQs32",
  "key32": "36KXmMatti2dB6eFMyiQqv8gVxCStZ4dyjWncBALM5hVKVnjSozZspCcVuWYNBQXaZqZTSJ2ziwXSamVzstaHnRv",
  "key33": "3hYkwYzmCQrtMhRmCap4jLhtL9Ksw4ccpvH5pMFx629fguVXu3mVF7CDEfzpKB5yd5Jh891i3w8eBw2zAs4EuqSE",
  "key34": "Mhn9s686WPfMiDJmuA1kzvsuoWTeb6MzV2a2QVzwoYoWftzmqDXeuDmowqTK32k11p8foPpz96H1PKJJkDgSXzk",
  "key35": "26noLKpdKyrcbJbHELTQeEn3ijwZri7Ji1YoHCGY5yUJkXw7cxMe1Xi9mdnvRaHHmDJtakQru75i73Dqp4pc2WWj",
  "key36": "bF4gJYffxZajBCSVhDTnznFSjiBrF579zziCQQF1tGYZec8yYgdjWSWT6KcgHQxhNwGgcpPqUnyeF7P5LAeC2DG",
  "key37": "4GtW7yotyaPUG5Xbg3TSpyDMjEpMpEAc8VaZCqzfKfMTUoKvvEoEt9mZk9eZ4btTa1dhxJ69z8dmEyhcWbF96HqD",
  "key38": "2cuQYahyXde2m8mVhmKWZVy4eCZAys3g95ewjdsMkVLQbCy6BzGHWZJXKMB6b6zNzw5BPeygPfAFhsYwFAwUxKzb",
  "key39": "2da5kuXPjiDJhA47g81CyAAQRsHFcSA3EQm1k5X7Q9R8TE37SJTb9e1tDMuhyfVzmbW8Redc4RSEYtwEZzaN7SwA",
  "key40": "2Stotf4qBgR7FxWsHRhR5QyeMHPNaQUHB1WQreuyiGqd1Yt7SRsdem9Xo3QdgsiDznKkaXqxjWrRsH1Qeh4BVFee",
  "key41": "3vJiFY7x5TdoXLpb3huFctzCphHAoEpsY882D77Eyy1HoSLd9RKfwXWJTCTgARs54ksw19eQ2YfCTnb9eoogRcWu",
  "key42": "4QQ1QGHynfxhEvRZvRrmUDnAwDrq8rL353F7QMi7HL66Pwb82LDN3igswynfpvVLUBT8npVMkrJFLbuc7WgqAjuA",
  "key43": "5bJ4vab6CWCfJ95QxMwkXhoVbhFRXMR6oHa1zaKGH7xtUp9LqsDCrg8qu8Bj5bZzGaxSMfZEnjgDuGqX1rqserPN",
  "key44": "BHGkFBUGZtbyCWwbWHtqFc3yhBtdnMdFbde1Dq4qUHgYrQ81r7jneeEZWMgdvrAbjoP6cxcac8kqHwJS3bN63kJ",
  "key45": "5rNpi9D9TsxHh5APg1nmuo54twfyioFSijeWsQJ5eRLRxm8DSfA2EAgfFLQYHXHEbyurb9Vgj7mVMiboEaK9TExc",
  "key46": "3YjVSRrS7th4e3FyKmvmaqzftcK1jRPorZuGJV4FLxjvfkhsf7Vre8aYkYB4AQFjDwzJtwsxcov2MpjmettzRNda"
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
