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
    "5L5aJaGQhXZVKpoTB84dFMoGHqb3yzq1wEa4oRzmaEGRFQcHUfpebzMeXhiS9T6svTA958jk2DRYoi1ygtwy8RGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTC62TjxCx7KtzzfRBV4UDck31oF8RRsAjT7rdTiW1Bk3x6vWSJDiubUZPs982xVocKxnPdhcfFX3QMnPn1XXiV",
  "key1": "4YbdSjaXqvAFKhQweRLtAj9DjatotWKke3oh6LDeN55CG4rR3ZyKmmUP8qujTchYW8HvTnK7b7AxNwJTGPDg5xDy",
  "key2": "3Mz5xm5qPXo3LK64M2wzBLATVPn3TYTMLWQF16ZvYv3kwraRgwsqBW5oS1RRMg5CgUaBiN6f3ZJBYtwQcopRQKo8",
  "key3": "363CS5dVmwmv4HCY1znzaQMYkBkSu63u6QHQMEjmbTymF6KgMARV3iuoudgit3NNQrREPi8Bw3SgtS1z8jD5vsLU",
  "key4": "2Cn3zrMXjXXFgzqxhuEA97yN5FDbhgNFZZtFmfEatYpouCZaMHVQVSZnR2Pwty53qFcPDhFhKKf8ByLeuPNZb15S",
  "key5": "23TQV2ysau1GQsLqDDpQWVCAxFtSrZYbFkj14QEXjuHKdkzWt1DN7aG1kXgoieygrEofi1BQeRaGDcq4kJSqCm9Y",
  "key6": "51UzAUK8wQBuUNts1jRYLQtuSt55dgmq3p9WLnBhDB31aJvmaRypAN35ZMZVSS75gNrenwXFwCMnmpW383C5DnA1",
  "key7": "4Y54GH8HcFibd9UdpUiHd6eqttyv2355Sm4kcXLQGvGQBzQkh3bhhF1vfYhbChE93s5a8qjgvqSXbESjNeAY62kz",
  "key8": "dSb4YoM5V32y8Cd8x4zdZDfugp97utuq4Xu6zJZyHqXhbjjXHUrvBsuyu1jSGFiQACfg5Fz8AbBjRXSTh4HfRRk",
  "key9": "4WNNnYCAa3T3DbvzKZVbskE2nShNeMpFCDPQoNBzu96jGPTtqBDrs1aMsdG1KdFqN8YDaPvKKBJBd8FMUNNyFSq3",
  "key10": "5jRseF5mrPzZHD9Uj8NH5BSY9Bfax5S2EvHhsvyyJbqWsdx5R8bXq8tyYevMab36JZSvCrHMrhdUveDcsDQWLNKG",
  "key11": "5x9ZCqtiRSA3q1kkvVf8j3zu2WTccvMn3my1xfGhvvMY1C2EyjiNmuiwZsdiMQQDGfpXZ39xsGL4WRj4WGbjudk6",
  "key12": "2JFvTZwcAYV6tY7v6b1wszGuwciNAg3gcM9GLgkEhC7nzwHgJK7u1HwnTdwiTaoP7TyaUyHTEcfnNrg34DdPRW6T",
  "key13": "3t4s8YViQEFWbaXDTiURmoDF1tSdHhH6Fo9QEXX5pHwCx9mzfrSJPRNA6jxfCpeXm3RfE1tjHTRYj3xmnmyU4N8o",
  "key14": "V4ZtfsnwVSRXEzw21pBPcPhwBMsqdo9A59AMxuYQ3yjFuqDCLGxYTe3auqhULtefi1EyCQjtUJy9R5MUC6KzXMt",
  "key15": "22uUwMQ9eckvmba5mCsRzMojymkGhvGYUuHZ4qRhkTK2D3HgwwP81h7BpPx68BNX3RVmRiTXZY8AExhKwaEfiL3d",
  "key16": "5KgsyRc6k757Z3ZDqG8Gv8P4Wn1avDBMco6tL9QBHEHDtRj2mTy6x1w4Hqr26FbAfxfmVbkGhMxqNcZwr6hGV53S",
  "key17": "5iSa4VtJz9tNDqVJBmVrdjzB2N5Gju3mqx8LRbNMJRgCyaxCLaQZNgoizQtTNeL7pgGPnFdCyPELfkdPqxvyHV2s",
  "key18": "5nwwgPfrCxxzk2RSzN2aPAy6xRXDWsq89ddSNarDmdQ88M8QQQEGeSqS7zGpUhCPQWaa7ku8FpwgtGwGGEzEpnc2",
  "key19": "8hrFXFb57neAsCFk41xvo39kRT3BVnVgvmwGBXjtcPagS9NU2WEfKoXQiGJ5AWnGNCxgJEUweGoD2vzoo3uNaCF",
  "key20": "5WT6DYfqUSoPTyq15NUrjaJksfKCbN2udD4chmfdh1Lxi5fZtVoRJy2QNktK2BFqXsaMxoRoToPiXup66C4eukKZ",
  "key21": "3xKnRi9a5UGKE2yZ1JtESK5GtAptaHnQ6svAG2p3XJrzWjXgKj15sxLkxUV8NofJc2Qh8pKBSu8iT5yHxp9Mj3X2",
  "key22": "4UcnAk1sRVkdzwjhh3T5GKoTR24ysorANe1aTKTKp6kNdbJTy8EPbMBKtoRK7HKLqz8k2ZT3dyj1zpYNqGS7GPtt",
  "key23": "5JM3Eg5PyFT2HjRFzJT25vet6hGHMVYLbDsKmuYxpENzQavSnph9mfh6tyhcVYMvdu3tropA1eNV2rpRYJWR6aSR",
  "key24": "58DRtN7fDBVwVDC4SQ55vFJ4tKfx15sYU4RnuUyNCczpeNydrNzU7oY67GfRrMvUikgBvnANR86op8s6p15DYyLH",
  "key25": "323AJzi6iFAxG9zLPvFBVpHQtGjeGb2GeuG2KfZQUWxgctsMXuDCjuBWT2GfNqPGCL82LWgq91whjhQGbCARcqDA",
  "key26": "4M5TtUPknLDi1cuP4daovrjA8W36Ci5uYigfU2WgLgd4BuQFU6u2FKypjm9hdKGpAdk7MaS7NLMt7SMu3FW337Bt",
  "key27": "2kkWTPDgyE44Bs6tS3FgiXwSwy48Tggtaqf2u9M1XfbQ6RkGH6ZyH68k5k7YteX6kNpBHgRjFZRfVfUbXhDSaE73",
  "key28": "3yTT57vue5vASLgdvTH18PBfVxxXDYXHWBPdCYLXjRjnB2ea5b3eky4TzorZYS1w1zrxnf2FHvxFe7Js9mK2XBD2",
  "key29": "3fHGvY6WwpZhY7AK8nx9jSg5bPVUX26ePZSLze9aKYtjmrcTGBNEFrUuLtWUGDHcMWRvysZ2mMBPtQpvJgq6DKuk",
  "key30": "397ADwB99nH8nohLeYkcaU62RBUpeH6X4aSCm14JuvVVFpAM131E2CN244o5FUMUraPurhuuAYcHKTZfVHyDM2pM",
  "key31": "2FXYTfgM18bnDrSP3wrhmPVt9uxeXV194pMx6PYeFSjSH1DcSNN1DEair5ft6wmYfuZsMYaRvoB6TbeTbW5jpvH7",
  "key32": "4UxdSctiZNhFjtf8i2uUnVrwCzh7gYzajE8kkeWzCzezFC5GSW8ovnraWjNAXZQQHn1zrrBMjahLYBr3875qCDim",
  "key33": "4D6VV6jfFSwZM4txxtkW93DCWXpkWEwjcdiy32Mfxmcu3gh94Sc5tRt9pxCcWgwkphrKT17yE5hkxmLyPbxwMpyy",
  "key34": "3PtV4QGVC7VXe7NtSnF9DhLuk78aPjP3FNVc1MK9LHDG6hYFRK1nJ5xubsX1rkccARWho1nDBfnKH25VXHdZzwa5",
  "key35": "3gbFBJsrasqimY2bCF6yJFjawyEwpx1XQKUxcRSi9Uuq9m7KoHzRc8vSeNGGaaE8EUEMQat9MwvSpMbcDcPGhLuE",
  "key36": "GcFR6BAKKUaqroUGcNmMM58SvqFW2x66AHim1tteAYZqrmL3U4nTxKMfCdUAKzpaEJTQDQb52PjwPrEYUDRN4r4",
  "key37": "37JgYTvUVQ8VZqX1fFLrT7ThWtCg28BB7SKsyBpmnkAyL1RqNkqTFnm4GB1RTz5um6xSB4A7Y2nBuxRyUEeh8eUe",
  "key38": "4UCkfRPTXLv1MLZKpuU5g5bV4BKfBmnbJNWtGEZg3r2RkDGgyXZth7Jui64yAvekqN1hJhPA7Yu1TjuCuRtMyJro",
  "key39": "2wvqNPvveYM5dZRWHHqncstGms31uKqcgyUYQxEM5oZSnn64PHk4EZaF3kpND8UfsD9SB1LF3i6JgLHk9mFKRzqH",
  "key40": "3qvvV6ZWp2wWznH6ZpYg7GV5EdPBgaPxRTfvSQfFBvfunQGfMzGeeEc3riToUkPhmcr38iehsAUkvZiBuKjgFaqc",
  "key41": "5J3CrfPgsE2F6qL1ptvNrvpLQjv1dPkwKHL7QSGfpxidSktsVjWjuJ7LnbUN6h5bdXv6ELGXx7ohenEJtmiSeZec",
  "key42": "TqfvP5G4Y1coGQwBSxgEDkPxQ7T8jNB5WRWVRisTVg6YbDBNfAcPNuWujCccvhGb46BWg5W1G98jFktT2shmNMN",
  "key43": "4DPCHfWNVLaYmVCH2mobJzcehMh8hwqCT98hRq25BvftWBGJGBCFGvWfbjWdujo2Kwu4nobFA4NU51myuXdfXw8i"
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
