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
    "5q9MXipvPX4pqr7v8EDv6rymA2K1nGVQtekBrBXH4E4oipQEoMoJwu1QdKhSjyWHTu6gCGYEugcpvX62KrzdLd7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFbEvKsasyc5D4qa5z6HC33RWeJWFjeKdLLS36jQtCUm65o8DBEvrxhH1c2C6AREeXnnV7udYHEQP2nfPTn1Aep",
  "key1": "36jKAaHE7mhTKv1QYCXtj3yNQkfvZC1HcNLzEm8HYbZMbuc9H8Wk4MMRXci8UYPWQVG4cfnaf9L17mrg9Dn6JwNE",
  "key2": "JTYcVmxj25xDHQj21jjcPXXkSiv84uka28GjTEKBmjSjt2iNbL6uet4DBrWArX4dJxxMuSrQxdGZCMMaQxA3bSJ",
  "key3": "4zkrr49tzGWugTod9YsgTBDd5p9F6ZSTsLxy5Rg9pmUWxTZt2PL13ZVXjRtFsmkF7hpvPqnvnnij2obXFr6j72X6",
  "key4": "54HSdD6v3vMhzRRnNnWQEvjz3FZQjEF5js9Gij6rWP4DGF4US1zcCQMMyurRUbit69PxWDdJiB9ntqADjC3GHv8F",
  "key5": "2njd64t6Q2XDosxPRdx1ufLKWNpLMavUNC1W59pDMiTUnHjcMjdcdgMKduh4kyXAxuJQ5N8Jw6uTECBSucvcUDhr",
  "key6": "4UjiANx1wRoo8fuYVEs9KTcMxwMVSajmVchHqSHkjFHtFNEyEwr9PSzgPCoEsWLGxxLBpDEKQsWHuP6WaDK5trGL",
  "key7": "4mL1Gs6vHmEpZ9R5VNwXSgWNVmbiuWfVU5UbnJorfCVjDi2dnHQCCibMDLNng5N48uyNcCKG3roebwNksScXUyLB",
  "key8": "29K1LVYfWqdvJQcR7YkSjPtGoyjsdXQKYyphhPQxVJBRtvWYVCm2gG6KhaNUSn4V2oDwUhL2gdpBFfevoP2UXKCu",
  "key9": "gThtfbyAUZMHVzC5562HCb55hdypQ7qbbXWgKpDDrRNEhUARMP9yVpyh6eh5NaFwZoR2Qbp93KZTZovegTyuLws",
  "key10": "3VHSc6zWP5qEnPg7d58ggWoHQXeDC9mGzshRtNjYw8btoWvHTVDivxdPgP9FxdNPUNm2eBJrM88P28ZXdnYzshuS",
  "key11": "6k89GsiZZiTFuqkhAS4oVLDDsvtiaDAHLMxk5EwqGtYinewFU93eMknQ2gdEUUZpTHgKUhZ4kcLPPaD7QwTQ9Xi",
  "key12": "2q38mYqQrZtM4CNpx7ddHM52DW4SatN5aDXeskM3CpEYAfpkAnT4xz7gD4qMt6H2tSLVDmdKK4dVVsaQjKbhUDvv",
  "key13": "2hjSKfFzd1R8fQLbpcPFBqEVkjXDhCMFAxYPY6Ss6Yejbqb8S3ULbnL61qosDtbqnZXcgcd1z4wuzsfnt6BPJXwg",
  "key14": "4pTEkcusnNrN9RTQ14xeu4Z57z9AL1DAQUuU7fFA5LmwEbeHT8yeewAk5mADXAoSXmJDo8zPUwrEFoxqCApQqZWW",
  "key15": "663ZyGJxpWZVgwRvbnm4VdjR8XLUNMbL3sF1hTcZUVWtfSshhfGrgC2BrDDCodvsGs1U5saq1oBZVrubkNDbpYU3",
  "key16": "2R36fGpej3M8QVBN94X2EzTSxYnx527u8nSrn8KNNrDGQDDthinjbZbGgKM9dWbMz2AEbCfUUBqb7kzsvtbCGXpN",
  "key17": "6BtYiDHRrggJv6dF2XKSUsWNhzXaiDQEbE5JwgU7HchCcDWrTmidUutFCRLfpysvwCfpA5XDKbP31BLccL4opUy",
  "key18": "64N69Sop8pAztY2XyPTPXTgUc3SB7ipYX8osVTEkikXtuqt38NFKGoXpgfQ16ZKGrzoSXwsGnsAZXQuAEyUvQkXn",
  "key19": "3YRjHvM6bErEQKZGKAxJMZQMvAT9obJdxjKKxHK32LvZFVT4AsZEYDRtpi2jrH5g96HsLsWW8hbfHEgNgNinakAm",
  "key20": "2VBLXwufzbtkiJdzbrrZSun67eCEUByCzgBVPS1yLqDiatBNXCiaXZrAPaewXmE1yB3PJBU9AsmVATqmEcEnVTek",
  "key21": "2dTF2WUnZ5Rkkkbrf4oFn7QmJJyMc82P8rEfMztzypw2MniiD3DWjQVrNHC82zVsnmTfCgF6qZWSU94J93J1ki1X",
  "key22": "5GkUEDkpnuoHj2JkFt66cskq9TmHAUnkpiRdL8E88MntNLG6vz5fiwzn3j11nXHGdbB4m9K7aq4NwWCq2tFqCU1B",
  "key23": "3hXUHWUbSa1BPas3EpBShW8xEer9C4wLfxHQwuAUF1KQtRKT2bJfa43aPQUeSAjBfvxhKDGSb82AcEq8ee29UGK4",
  "key24": "26kWGjebheZtXHpDAF5TL5tf8kxyHNRVvUKqvaUCN9cYPJLdxLmQCnXPyxjTZXezG1zvECJpuwztaGdLcVoe878B",
  "key25": "4qFsTqFUmfsEZUD9Mt7JV3ouArwWzmU2JCEAFYexMykYfro57SFnxbyFUX2X6H16KL9myaGV8ZiUhdLkNst7vdbt",
  "key26": "qZMtBRzsEbvsySkd2hk1QTncr6Tsd9mkJuQkxiwzQXqbPkP6foBm8gWyvV7TfLkAzJYj4EUvJf9aA6G9Dx5F2bC",
  "key27": "2ZNqqum2WfUiBcLbFLk5dPVi7HAnFVq2q3Re1gLJqf25CzcuDZrEKhKKgdUSeqaZ7CtTHExDHD43MXgLazkEVcSU",
  "key28": "hpZzMt5FVkCeQbo5NZvagkqU6JXDC6geyiKconisZfeKjNGKaEDNto2JW7pEYRCf1YVdWAGfJ9ymGXQBGEUU1Ua",
  "key29": "2VZ9nPqA6rTqtKV36eWfWL8MZUCxp51aNEBG76KwAJftJPfcPFiLB2xibH1PGfHBzfrLMxxv61pWdki7pokqmbVw",
  "key30": "25XpLgFu2AZaF8wKWqcVFt8rCAQ5U6npXtBCuAZp7bd5ZMZzBHqyCSscQDR94ZcykQ879TF2i2jLLjretT2UJvYD",
  "key31": "5cTzACB7Z8phN5CYeSRJ4sNcxJP3xhKAL3VznJeZo3tQquMbhn7uKRgyJS18r9TgwzePkGtfD9WLa9W4hbRFzDTz",
  "key32": "4wZLuQ1QN6WyTWdG24Cc85Y2UFYosu1tTsPEqvsub17QP3mKVEw11W1RkGodkNeZBerBB5JsEvNehdJUT6UxPBxC",
  "key33": "23QYKoeSxLBHbPtMx3uphr8i3GoFJLQsAFWmPqHdCHUQZbkrwjitiB3PJMZqFF468WWFzKXURXjN32e7bZfCFELG",
  "key34": "b3YxHwvPLeMwfZJmJMLyAoVQwGxWqrdLDTTfmuCCzAzGcuwPmR7sGz4ov1epSYJbcz4S2boRphKkDydUUYVMr9N",
  "key35": "31NQYJLZFGKC77MQT4tWMu2BxrBDGajUvw6We4pCswVbQYbAfHRotgXc6imoAs5dxXKYBVnrRpCiiBWMNDgWWA1s",
  "key36": "4TUryQ4rr5h77ALN1AHkwHrXJuR3oZ4ztwXuhCrvRcLPPbThk5Sm876nq3ZjwyXSqri2nvvbwQEk9UReGxLsPq8n",
  "key37": "u5icYt6Gt1ShtJmDpnRNGWNbSL2dPntnhrhtGZXpemjLJ9tpy4gxGmz2WUKejpUScKVuDTR4Z31mYTVqxK7UMUY",
  "key38": "3cgcEF1Hsw9ZefuPvJtrWfmod26vSLLfG3nfFCwR3t3CTrVXeQb8B652Tcue93Mnjfu2orwPpLcYNf3YobMJYVvv",
  "key39": "3q5ppqH2GqizQiXa4Mrfo2hyddyYqGbdWNhAJ7PFE5Sd52pjeJJpicR5wue3HzJSWwVY9Eja18wyMTVN9ELqFf3q",
  "key40": "Z69zBXxX876zuBVbFa2KJrpGvj9UGVWQLyHMHxrUo3syCK7rzh7Hf8bvytgLtBZ42RiTAMGncMfQnmX9nfCjuWF",
  "key41": "2nWeCHbCJZAcbgoMV2RL1BwUAdZcENEz82Kayk2ZDv9KLQAjHAbceLzxDpUv9x2Ve9WnqXxXU97yfPJE3xsCwHM6",
  "key42": "2D94zAPGZi33JEeY4mVhgg9bXu5xdmKgnrDrpxoUhpbcsT3EjQo54Mpu1Ax4ak7bsMyrwXga5N77777Yv5npwrK1",
  "key43": "4FJykSRe89Q3MwrbrWZmReBsvWgH64nD5rjHxRCcPdbqmSEazVZT6KKcgKWsApn9uJUege68XzHvYvQFPiWLCjwZ",
  "key44": "2ZxtTryqLnQGSp6dHRbbVpkUavQG4ykwyD3D4LSmRg2FufsiFqhiqKhtygoHduGDviF3AspmREoxdUvhocT6iQsr"
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
