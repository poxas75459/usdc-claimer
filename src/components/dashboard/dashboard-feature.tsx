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
    "4BMEFpxTUWN1unjRz4YtEKCGRj7AVVcNZVPM2tmrwKzs41oYrRoSZ4CvGYmxxp3ogetxxdmwXxZp4NsPtnCKxFPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHynNcWs3y4sD87c3JywoweYEpUwXJpohpx1DWbnfyJrhRvm1vhSHStdU2JxnQm22LrXdZYb59B892kngtUMuTN",
  "key1": "3qLQ3MoK9k2czzFKEPr5MWaf3YSJzAgQPtat9xaLenFNJ51qQ1CQCtFq7pX6gDmJZRyfAeP9sktNVMfDsRtmLn7r",
  "key2": "2a6DBEhduYz2U1w9n5XXjRJKPZjJEMEEFMwy3hMbHttgmHNvdt4iwWyqSfyu1xvxwpmPMx49VJ8UpMFqjMM847sr",
  "key3": "4eFYXPEaZE74Udz8NndHYZaoQe4Yx4SvNxhy5kHMuh5zaLGNveQth6GKfjwgY3vGiZMhazUpq1AYGVxPaP4EqCbY",
  "key4": "25SPdSQXEVUKfUtj4SERjziK8rNgeS72F2oePvaK9Ws9wL1RYWvxUHZCj8rsfUicjicF6q5out3Ka3VnobvxfKiK",
  "key5": "5uvmnVSssP79Tk81T7ioLEEUwsRNxtuvcuLnwAuZqoNvgZKcrPoJggaFbk8JoowzYkcA3HL4qxMWuh2Yyd3Pf5gc",
  "key6": "3yfpUVtZ1AkAKVRWagPKV9NSKuUuEyHhc7gs5tPAJPEfs5e2epZCKxRpxCRf39cQtPDCoHKvD3BLCnw2AmnH1r7Y",
  "key7": "4SvFZ1mYd1JLDY7D4Qfbtp9N6Fh5khLNc1CD4s7PhpmfTgipGmupgV3SU9RfS4Cww5qKeQS2DTuU2msUF5fViuLS",
  "key8": "25qHpgATTv7ogHB2iFdtQ9nL3BzPksWvaRrNSPDnabbbN9s5BxK47adjQFZty4n9XpQFLJwnEipxJPij1kk7y25z",
  "key9": "5zTfeBbpXcD3GQcApFR6WQnuav8yfsThGwpxmt3dvR1qj1QwXXJQEvxj2PtdQV57pvVgaKxM6Sm22uQEenBKemLg",
  "key10": "5jSzDJforg2fYontyeSHk24xeiuxWpS6GHbHavTiuZtey4wo4n5n6eXoBfouVLXVfEP7mbi9fGRWMwmSCkX4SSxV",
  "key11": "2KJcbMBLESE9cGPaoh4mgSVcbPMijpuUnSBsim4NQrFvXpLca7HkFQVTpBZwQrhLSsTbs38DUTa5A5oDd8LNJ1xp",
  "key12": "4C6uiif7txFcxrFoKhNf9H9P7Shv9j6UadTgYZ3yuUuvxaj8HYWmnPZCMiiwhBqBiP6ZmQNxLkZASHdRacHLxxv",
  "key13": "3AkszG6CTZCDAXDNF9iaQijxcjJk4sSEZFTVjmViZHGaAbwv8caixjGiNeqgfN2Q81dqfhTNCHN9Z5pbNWtsjx8V",
  "key14": "5xCL9XUnkXs4Urue6b8odHMVTyKnv974MDXJPXDbzDWvJUFx6F69GWN89pDzrNfndPpYetahL719k3K19CDQYfgD",
  "key15": "bxu8oe16LD67EU6AKzTYmMm6FanCKYZuuvrEJQCLyq5z7GxwYzoXPvSfyKRvhHVYTVMWWASEABEzqP69SExpxHq",
  "key16": "4YeDL5LxtyCvrBE4QESKykdSL1owmLPmMcnNVmiApTuixvywSEkdTuZe5pUTDG18CS9mWQyCPZBG5GKVEZ3emjbk",
  "key17": "3ze6ba5GsdBCgUtHY91FnSdyth1ef4ifztQQMYGpfeaKCQdzktXdfr1jy2LJ6CMvJqNSur6TuY5VHpJMJLpVqVxL",
  "key18": "5MdCzNC81PXY6tSVamKEzNhTpamBopLfsEwxJGd63oYWbvtKtrXhAcApeRF6rzaLy24RVPkjGbS391VzdctkumWs",
  "key19": "j8qqV2viuzG3vZZturBKTWTmcBPdmrLE7K9vigDhkQH4oY8JYZJUjFgDsRPFf6wmxVe6kbum3zfLeiYF3K8ZAN1",
  "key20": "4cwVKoWSPGmZecsTBvSQUu7JvYkhpYsf4MwFNAVgvoVfkzC3jnKT8Vz8DsXjWJeFtBx2Ukt7FzcEThJ5oP6uKtDY",
  "key21": "4VgPLZsJpNktPNdqG5gA5JvxByVWJnepUSTvDzgvdRmGEZtKqYp57bXWR2dtboanftmGSVrNykGHfd8oc7PmcJXp",
  "key22": "61iSjPVxLVGhDsReUMJS6GqzCgnyjbms2HWiVBZVUkz2FKbmD7tUWZXBeAJgDNwm7CcqR8NF3KNYSPVXLPQ8mtLs",
  "key23": "4okFV3tqh7qtuyZ5SwPxnDSkG8WMdJQZB3L2QWC2WXLpeSD9x1YuPch9YRzxvPz4zDGAJPYGvhjC6NcXf8fqA4da",
  "key24": "5F4a13jAzkDDZL4hUAZvBZ3X5qtwiTMajeUcDJtK2TRiNGibPX1SL9uDsZXyofPYyZQ3kyhKNLwrz1UJ5sQo1Ch3",
  "key25": "2zSrLggwYvEc9P8tkvBquzz5Bb4gEesfw3qaFJHAKn1oT9738MZCvgaNC2d9t24RKmhHv5gWKFDiRC6ixjieSJEG",
  "key26": "35DNV2hJ7v7oEPLRGJdYZQKjVeoQtnjAR9oLtBjiMaRQSGkqMgGAca7UAHgHZu8W6wpNJmAjMSyeLzSswkbPWegt",
  "key27": "cSnLUaCSL5MgayseU2gQQQF1tZ98g6SLU8ZPcLQ8ATr3AGMvugUTD1kjAqJ5LsmTjHhgZqk1QzhiidEvRWX9tRF",
  "key28": "4w4mTLYSaXVKBxXMkBtRY1FZW6uWCC5Uicmkn1EHX6U7MnYXiYs6FetEAgFScEsToAjapvKWatp23hJnQCxp56Vq",
  "key29": "31nVUwMUFBkHdHu8mdqTqwNciPeG34cthjohV4zJFK4oANBoqG3hUAtFZaqAgzVizt9EmdRmn5Y4Q1xZRGjWj1Bi",
  "key30": "4gg3okXaUYL4fpgu6qiJqVhzBPXevzggorQrXe1biEEmqSeE18vR949r2UxUtxM3w2HpD2AAWNFq3hRyr3btJ9Ah",
  "key31": "5P4f6csX4zYQycyZEV9CqiYaHhUomX7Jx7jmgKKtuWkMmfAzjSx2f7rtQjdyvFeVCoYEubNPV4Qo5J8XjtRLouvN",
  "key32": "3ajK1m5AEHMEWfNB99Vd8tTm6v9UzfDy52sD37s4Z3N4fCneU5xzsU9dAVhmU8y75oqWreRuXnN623HAHcFuM6Gs",
  "key33": "5DAJ5J6i74cBLR8DTN4XUsvCbypsMLpUCdbDbNWucu8ubHNKAep9jJLby5tLEDMTYJimqH1LcoQxgHvrMYMvi62e",
  "key34": "28yd2TdjEhkH2DcPcMd3TNTuk7U8C2bGzyWo9Fgehv3Rkcuq8gHRnx1i6V9gVmZnZBhfMvSFn1SS2MMKArUsz2Sw",
  "key35": "4ChGuhzMdfaoPTrWh6DQGaTE6PFoYPm3yGvA2v9w8uvDut2N1U71ksQHgu62VTMY2cw8teyX5ETNzKW8MCk8sZDN",
  "key36": "3yCSTi9FbTJpmkqDuX91tiJ7eomAR18tUkVeduWTLoeRX6E7YGbrYMcmMKhKHhg5g7zNwgmy2cCd5ChXsumsNHcp",
  "key37": "2LRkBgp4yKV9VPepof3EyNj3AVDyTpbK7fH7FFHG3QHdKeYAYMbpeX7wBYHvft18DFuegjqgi8ScGqLPRqyEXFmQ",
  "key38": "3pes4kB8Kqx2CmrQx9Y7prQoSU7NG9cd3Upk5Vj3Q8ArfC4zKv2pnqQeMasQc5mfFRmWFUcYh8gEYp5yjnNaZwuo",
  "key39": "2PR7PWQSQ2AA98FAcmZQQRNUrTNoXu8tuVr7U6feeJWojB5B5uSNzUep1XYCwW2ActvzDgRApZPff4uRPEfuALSh",
  "key40": "3mzxqB6PjXvrLX7MN2FAPDj9yKGm97MzYRg7g1CTDTUxYY7Cyg1EMcBCWsozWiQLYHXPzrfY6NRGYx7fCudY1e64",
  "key41": "4hJRTpr2brhMJDsPmYUNfnKQTuNG7ryhgE5ryCJg1KDHcVJtTdfzPgeyC3tk8xXuUBsFsE4swnd5NNfui96sgAM3",
  "key42": "3RxwsQDAWiZXepzNPNgp2eaD4epZWRpmQfo87XBQ3CiYXUCCwXprz7hbsv4nZtD5UQtESGKfz7W2kYHWdiHUUBCk",
  "key43": "4RHFj14GqgpApdDqJBu1irw2X7mdDBnp5PpGciE48r18ojdua1KpGTSTMDjCfHSZboq5mgz1fXF7X8bRwYqo7R4n",
  "key44": "5A55pewzZvrTUibDzjSDVjsdcKz3rSMSVuugZtqVSSSq3zmiNsc3hooi3QYGEF31JfFiWoH7ir6wsj4EXM4A52B5"
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
