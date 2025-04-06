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
    "2fxMaT1TUxHtwPQoQKwUV8abmPicgVdFVkyyiJzLeRcgTR9fCWDoFzHcn4Ya3sDd4Yj5SJW2pNrGqaBMSM3Kdh4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBXRphkNcGAxw7U6iNcwkpmM7MD9GDxKteKVbgbRZPgtwcxuLDr6jjyy59iaqc1dtiuaa72t5ZnDKP1JKkV9yPC",
  "key1": "2kX339Wp9HzSDjGkXP1VgCYcNMrCyqrMQ6gmRJFK17yz3q9kLuyTmsC4xXR6GhsdRPHnrXmnad7VkhX6uEL6M3WJ",
  "key2": "54DjkYHazgDpN2wPaiyVJkDvmTBUFL2hFiLakRn85ZqJ3Y58S2DxjZrM375kVicquf3Dy3fvywyDbwfPTeSQKWAr",
  "key3": "5k4jvuyFv75w9UTkjiadvvmH2Acwy9LoXmKS8numNiAU8kE9zc8oPszs86HwWaJNwUejbUybwqwZKGUGimfA5mBh",
  "key4": "2Z9469zyboVGZhCfZtvNC5GuCxUHDwChMZANNcLUZzznghvK6VQ4uE8dnXmcQWgCUvnHvsayUvJ1FGCvKmZBRxR1",
  "key5": "4d8qo8fK2mWa2eBEc8HsaSj69zUBdhs26LaE5DnZznsrxoDttQFW8fBqaCeq6R7kZmeVJ5LSRgPMXb419yV3HGk7",
  "key6": "3RpCSxPafoiAR5NS86ecWhszmyfWDLeZLfgQQVBqcoEHYhswSN6wYXXF3g3bCVSwcJ6fY4kcfRPFtNiMprECRrQa",
  "key7": "4F2nqnVYasj87HKUJA9cpnWfSBC5DwfNCqCKhXa1S7idRTQFXgimLKmFor9khjSY67hdF6k6vGS4oBQrAjztM1d1",
  "key8": "4cfMCkVv6U9zXz8VmEk1mc1oinr42YqJnPDSrPoxckyjdBmhxEY4hhfvSzmjbsYpJCRQGhRKt88RF6MRnFYTMtwS",
  "key9": "4rdY8j2Nakocd7UxquUQwHaE6PMfjxe7d4xu6PMjXUQTtcwG96pdhDdWV7F65FaVaGvM8ScmsZa3SEa9geCcEVoi",
  "key10": "46PwJYG76nxnXspPpu3KyAy7bPBbSUdi1bVbntuzzhBSFK7p5ckUM6b1ChNVCwmk3FrKHiCANq5ZFcNeaQDXmLyV",
  "key11": "57AoP6eCsNSDfkL2EbmjqJbKWeHGALUKc5Qt3HAC9xxth3C39GU3dDJXUTdHGZA18qUH1FuHtwoMTH6teqf3yn5j",
  "key12": "4dHeawwPndZaeEqNY7vuBexNDdXV76tEjQFz2b6x2BcEiVLRkSAs46Rj3YjDT7gs5mzHNEXVGmKHHyogNtohtY8J",
  "key13": "4MvEH8GYKxnECojZ67HTFWVwe4UF27xM1oh6VV37ihEusyWjEaZTC46tNPbTcHiY3CABySxtotXuFw6X9GWeBhg3",
  "key14": "2KRya5CH4uUf3kS7UjHpyKS5UrensFUtYFxb5Jh7qpC3xt461MQxWE2qnoU6ynzhRcxDdq7qRffwX9ENcK7r1skM",
  "key15": "53bVbaMxnCoiaUaaiT4C1EYYsJjTYhG4foSe3bwkhKgX4bEmKq28xky2UQVvgimmHXniuPC8efKtRS8NRDGc6RVD",
  "key16": "4CTRuTDDiue4kBYVHQfFPL66ZT5xpq3o9KtuiVUQB8wWyQhnmAEt9bBYPhy6UYWJmwsQLfG69xZ8t3aNXyKFWiGg",
  "key17": "3FBUpqkvgP9WMtXnftab53eTZ6heqZ4Sdo8LuWxjVsfrtv7cQkUTQfAQzRS43bWtAAUL87acUL9aggx5ZxNE37HP",
  "key18": "5h8VkNfQpye9zttmUHXWW11ysCacUYCaDtGkyTag8uvPrqmWLDu3AnE9WXMqSJ1zVupNtCupvp4vxnVrQfwZUDcW",
  "key19": "5VNqitYZEGG1rTP7boU6yGPfWRxgsfVmpGkiLpbVgAqRueAsXS3yPQXEup7REqd2FL5PYn1AQNHGVB1LWDLuNtZE",
  "key20": "RUk3BNvduJBHBzb4usTEw5i8mAuQr3y9zTQ98sbG1QyPLwkJjQiknbeHKEt8cmucaVAdWKnwSoiWTAEiBxMWZdr",
  "key21": "5iu4obWpTvBdQnHgB1UWYdpfpk8uferZrvZoffRxi3Z4KMRR1QtQYQCVEfe6SBFsWazc6Z7LJs2JXL6XUNH347tf",
  "key22": "5zXZEnq58U6B1wNrrfHcoRwa6j5tpFDMEBfpHAxi7uduytqfd69FSQmc1my5FakyM9yK7BAo2MEVTCd6n7fefRwB",
  "key23": "3WHhnSASx9bPrjGENWPS3AF3iXinXHJ8W8zPxyiqGXnvxsDKtPcHgcqaBs5KZcsqtRPWNbX1xzH4N5vHuVuJXah5",
  "key24": "6429WhxmbvxpB9j6ny3Q54U8NLirM7xH1j9mfu8TPp8He8rCuiBNohnX28PToQLwcWEHHFkacvDNaSqsBM3qCqry",
  "key25": "KVhMfqm4WXhwGDuPxPbgRXYRhBxq4j2ucCoq1Lxoc8E21c2FxBNo6jriKzQupqgGADK3CoXtqLk2AZqTCDj23JX",
  "key26": "3gS2MKgm4iRSXn3B8sSpjreEMJJoUfVTchGp5xFx5hxyCNB5Ea98TNzcQ4aatwYqKo5XyF7WapyNzFtC4LSE8Pm9",
  "key27": "2caPZzWDAXpkhiHdqdE4g3oueA1PUgCz6iY9xzgG6Vz6977UuZYpXMZdz8PXngz4Mo8EgKqLdntvVgiafuvemo2V",
  "key28": "mndqVe6tj5zTtKDfe7Ayv71GjSdxCD5P4rWhehR3sf4eY53dPwDFQLtAMZexnL31ekborgRFNa2dkvsE1xkZvSD",
  "key29": "33T9bEqHeWK2PWHUYD5sPdaLLDx3sbrqS72ZxHEjVcmJf4xJn94YjybBM5NQaFDqujTVhkKGdUnNcf1BvtSEVYm5",
  "key30": "2ndi9pPXCr2VuJKHcKuasexVad2UshqLNg9arJhtgvXKFzSpyWzG8oFaVJ3RQjF7dt9dnrdGS6JRd7KWW233FEkC",
  "key31": "2XLk92UMw2hUAnMiUQxUWtUK6a1VNG63q1gAo3N2c9hvrhBMGQC6f6PwBo3phQu1Qwf2tZhvuZQEwJCWDi8MN4QJ",
  "key32": "2nBReYQqUAK6Kix6RTz46QzXs5xHrndbSVzD99L4oKSHUNg9bV9BmkvipkYdWpJrER8n5o4epcyTqsuSSmKDSKNt",
  "key33": "2fDsbM7uJiNkc5zas6XrdEYGNf4PA9bPwwwoTnRp1fPPnUNvxxhQmBC2eExfmZTP6DMXRCDbWF5ygJ8cTm5qqaen",
  "key34": "4Nibc7mqALXPLF1bcpxGAu6GTUaMXrGpzkUzn1C22NEMjMAXirnvHzcUBcTu98HGRVUcbeLJAkoujnyGgQgoh7Yi",
  "key35": "3hSdnmHA4wkkciCvsGr9yHiwWisUn1U2yADZUwXwPgCTBzxkJQNuh53z3K6ggEbuuTwrhixruJUrtPW8DmugYXHw",
  "key36": "5KEW8NcXTY3uQk4oHsp3WoC2MjTXmYt32LecPWBMWFuVFswkskyN3MME4qSk4fpa8FGwGGdFf68fWGnU8BLe57aD",
  "key37": "4CdJ6xkA9E12FpvbB7GyNokX9AdsCS5UwJ3pHvWzVaKZ9iocSHPXjxpxryThARJpWxEEYY1jb5nxNAZgJwRWnGUi",
  "key38": "4dCss1UeZie8LiXqYxZYGWNek9vudDq4XBbrcheDTUHQY8QMizgT1Fw9SoiiYCjyxt9qUC3BYXFnnRWWVQKaqtMA",
  "key39": "2tmm2imDxY7LtJFZTaEfjn36UaqDzJTR6d4pbLZygLWNUSHs3gtFsvqv24NguBAj1s6rSZtLmZj4GaLXpfbisY9f",
  "key40": "WvzKwVejaLpesKAGfv1CSiCbjrdaEpVDnfs9nhKDBGgnrPNf5Nf6aaCxdfxgBHYF4nGnbDUZv4PuzoNzp8F5X76",
  "key41": "3zrQduo88e9EGogukJ8JnS7s9t5832YouoGw8dZkRsLbZBRP87LyxTz5H69iERUoFL65wmAKUw8CDEU3KFVcyzLh",
  "key42": "4cM6jPEhfVJAukTy9aYT5Az2Eh9yeGrPzHejjvSEZgrJFCy5oUwVzEZujXi9fPKQfahw3H2dADfFCLavqgagtb87",
  "key43": "GZKZFuqQEWBuaT17q4a1pxstNFGYBu8x5U8nbc1nrvNsyMMsFHEweevuByy99BrftEP1L8dvK6HewW9MDXKFny8",
  "key44": "5WXpHMDdiPFEh8vPpvJ8rT5fKuXTcXX7KghzArnWK4sXr4A3spZerctkUEbbe9CKxiVUhpgdiPka9JVUqoc7KqX9"
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
