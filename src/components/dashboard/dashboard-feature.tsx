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
    "3pXujzLZLC9fDawrjfcfbP8FPgJPNooCvvp2Essjif3RE9Rr53XeekdCGbXMWKquX6V4VjajSTPvUmS6WoBSv42d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFmcJFnTs3ASbxCbHJtUeaetGP2suMPox3S3E6DrXQ1FpENmEpUzNEuRvs7iyNVYZsfyZLu5Lafpv37kWN3cTwW",
  "key1": "53FKJxLTH3MpbjhFKXRPpRN9VZBb32rSVSckM1rro9bphNshSoL3QtY56M1D6Mye3d3ht4BkRnPMtz3wU7NgBtaE",
  "key2": "iqWANNDJJqyz1WnDjZHDs28zerpT8pn7w31mauFEDYbEb2mLoet6L7ohaQJswcmB1mYa6av1SnXYVCRUU4MLits",
  "key3": "fq6f8BbM4k1u2UuXfUyuZN8gafqx4Zt9NU4k3McyCSKC8xfqm9uY6PVS8TNvZ2PA8yqNTReDFNSsJhaseEL75Rs",
  "key4": "2F1NmE6pCVzx48vsQmYuPhdPDMhaEpuZgpLh9jGRWbwxEYhSiRcEqYS1E5mHHweRCeY5HVVhEkCfYTdhuepwnZPN",
  "key5": "5PTSA8E3NALksYULuwDbe5rfdEMNcaCBKTrPLXFX9TFh8557Yu1PG6Cp9qqhuZttsRWWSMar6LyoqkKyBKWUjRx6",
  "key6": "34s6nUk5b9jJqLZso5Qn8XcKG1U9vKnp4CZ9AYuFB6ZDPsf37aZEd7dan7ckzbafzkUiWAmHaa873Fo4CqYAvzww",
  "key7": "61jKENsGGZF668L3EVuboqPL4LvhBMNvJTeREW1MrJD2foVtiq5mnz8urzRxYTFo6zeBP2L2xxTVA6ysZWsVEZnP",
  "key8": "3xjACHmX3xKn8MbphouckLGvwXFKhEJda26X6J4WQsUm1MdFy4KgLpwG3aoLtVzLSQ44ngnjyTn8XvpdymseFSgD",
  "key9": "3oQ5FoWGoWPhLQLGs9yZTbWoNrqDvzmJD6zeZBoYNdhcTzqqNNf71sWugRGR7vkDhPzidbDoExAtXXodffnMkre6",
  "key10": "4f7iWXttUy3Q5QuhgwnaSvbASZvEkMJEPkAZGjUfLpFuW3UiEMrHV3jjbHVSCRtkK5HvGUz59KYy8uzup3iM83kJ",
  "key11": "33F8LZvvKFG8jvskx88pxHqpDe6HDbDeguL65gPqiwrG24GNDRcDqyZbD5spw8NNE2pHFh5Abh5EsZ8tkgpeZBKd",
  "key12": "2RNuHvrwvYVebE72CUgLAZ1umr4Aq7xeN379vwJp8d8aDqEH5KoYwUDcYoAKr4ZJiNzkv3EigCyYJG5Jnx6J7qT2",
  "key13": "4BfVPxTpq8Q4iEEz78WCVH2X5g6ot2JrWhhZbxsFj3gCFazNLPiWxXPRXuhhps9SwwTT7Ejj2H7FsLXfYLywDaki",
  "key14": "4rvQ76ycU5sX6H1yp52TWrTz7RAti7L5vV3iT42S8h2f89hTHKVnBUP2KfPgYGK1sAfGvioSYSdaddBCC4KMPWnX",
  "key15": "2bHamqxCsQe7kEKsEjom3hHULjTEtNRfQvfNLqwWtPF6WftPDperw6VxuwJmjYcqHNaiaRVSf7TUDQ4xNSEyKEeX",
  "key16": "HzWpJwvThe98bCsZaGmMF6KhpbMqm7TCj2oJc32iTK5yucEpS23evFE9NDRoCdB6mNyrY6mgE2qz9gSZF3Mdu92",
  "key17": "3dwYiGKXAzWNurTreozjzHPU2dnuakBxaNj2VG5S2d3U2VMtdkkauxSqEQGA2DPFa96BL1qusy7fpRioNbwoM6Cn",
  "key18": "QrGLi15Ym7LwKg4CEexR7bniwCCK6PQWWoiJ4VSDEdid5zCVPHag6qeffyrSgVbAbh2xeQbpvncgmLhvGAiHX8L",
  "key19": "3NU5MS6ud3G2CVT98pvFH3vh1zjzWifWDtaXRQQeqUVqufdEAKE9PuiwA3h4oKHVPjrwbn6mrmz7gm7gVv4ccFUZ",
  "key20": "2fCSD2inYjvZL7nk7iqcFPEcAvkDosaHh9Tr7vSqMhoVcgjegXRXmQsHh6CBXsr3XBeZmd4XGeALhBe5XCcyLDYM",
  "key21": "3UKBsTw7CNsqi9iFkXbkMnJKgJ1D5DDyKtfqWzPCWBZMgiQ2rtzwwKaPGireGDdZZUhqEuzavJHvHFdqRK6kVCeB",
  "key22": "57ZsGbAAzBoCcrpDxmQNNj9AagdvKqf6cTNtTv6VYiF2bfNkB1aHjwqhy2cD5JXdwaNof5KjnG3DZH9z5pBA5enc",
  "key23": "KNnfY1KPH1ZQzJSJ8ES8tbqmrEd6L9S7uLLeJym6oUPcakWS61tbXShnhA3r9qjRV8cVi1L2ZyoC7C9nntnVMqh",
  "key24": "3usqhmsQ28mgH7BvbCSSvX2DSUruvNd4PUwdRGcgfs3vzhBnaiMKBbTUNa51zxGXXhntQkxR6yfRFFRZrsc2kVYe",
  "key25": "DAwzdwxmNshSFvcjvdUB9TAkb9NseEqqPc1K3XiWCoVC6aiedMbD6TzQWfjHLGP1e4mgmLZWNRBHarw2aLmSMfZ",
  "key26": "3bWXWuv4Xn4oENGEi4g3vbpBdhs3prLCALJRz1wBpSkKhohmQRYLaYB63dXzELGnmuqx23V3t5cGr4rZRFqETPdZ",
  "key27": "2cehHMRDfho9ZSt4KZ2dPpLuWHCeYhpTo5SUgtYgnwxVJbeBothEo6eHX2taUThBXtNi1LFUqp8bpNW1hmy35Jfr",
  "key28": "45m2DfguD8aaMSDeZUAHx2RSZNQ4v4v1XquxaFCwzTqAoqu4ygkZcgB5Z4YQH6tM4JGMD5kzquoPVj5KGxVQVHoj",
  "key29": "2j6L8jLzHMqX6G9M66i3DY3dxSfvKpWd3zE5Qbnq1mYxXPq1icksPiU7ErT1RMaCPTtjD8UQgqWQ94z8pCVokFWM",
  "key30": "3xGCWgD4oG5Tk5vhhbqu1aWey72tzJVd6YVp9XSkbcwvC4hNjQWCCKwe1pZoknEcPDoHPqwnY2fkyD7AauCzLQiv",
  "key31": "4KFDrheQXZS3vdYUVGiYxJNTe232jeAfNWaZ95cx11u2at4AY2NT76AEgjJHztpE3vdiKZ69DkdF3ZgU3oNMhuCV",
  "key32": "5n7zN9p57fHyKS764FH1r2zgwWQ8XT8JLkkGwuJY3h3dFyT7hWuitojz7aVxEwnpYqKAbtp5EAvL2bnoNEd8CHK6",
  "key33": "23wqEbPPgcRyW6jobNcZTaAdaSmH1nSb9RssNVCFG6qe5g9CCebvq9pEfod4z4dQeFfh19U53pHa4Z8FfbeyVCq7",
  "key34": "54JhyXBp4YLAxfE4DyjAqK3rAd5TYiKa2yxXzrwptdwNpzMCuv99Gyn5BRRr1grUZnEQ56YVunEwz9SB2rJerXKv",
  "key35": "3sTLvRy4Avpg1myBonUSjaxceXpkKhGeUtodBmwnRwX5kWuKRF6RFaxt8chFDdjDSATBFZZk6uhaZUNg4vhxs1FX",
  "key36": "3qftrp2m8LCbxKm22mYHqKHnZucsLU3Y1smNKbcnd56WPrcsdYyx2xsifX1pPPbyvD17WiXhTS1Jp2ANXR2GUjxz",
  "key37": "48KrfPgQpxyhUEN65ie9hWX9Q2y6Mb2ZBA5ZESXEC2D4B9YoGrsmtmM4iKK4w3kjHsLkGVKWDK6dyr4pqtKcGJcf",
  "key38": "5nZ44n1y7Ntx4wTfnSCdFzR5mA5j2pNT5oSCmCrdfUWczfqQsrUnKWC5NBBQX3MvNkURYXgAeKai6nxXKYXwRUwb",
  "key39": "B3kmK1QgRUA1HMd9yUrKQFBYUb5Ps8cwHRfiaDCvkV77dWJLdhJDW3LGn99hzUxCMJPNZfQkK7ebzc3Fzzqjcgc",
  "key40": "5bK1Hs9eVoKwed5EMM72S99cBZyWcnQvudvQDEkKKqBnCPQqMNVbbGwtfuwd7N3jZydEYCLee6jtgFeyVFvUNeeb",
  "key41": "59wZ9g3ugwy66N3ozjTKNFDpoVKRJtKY6gdTnA2RBy1kLJcqztDK2n43xqLzRKPYYMCkmTumeC3z2VZWfSNhvp9H",
  "key42": "3GUb8GXchxauE76FBioGmReNBPu9434N4phtsrEaAC9nMRUMdUt1UDTvuCMxcrWZpFwRzpWJy5q8jsuvzEGxLM5x",
  "key43": "4pCxDcho1sLVCZFYbacVhKaQXTp3wncS4MvhS5Y2LZ8QncvzLFhngEtbXLDiUKAAQkX7FB1JpvQSy2sir6sYcsVh",
  "key44": "ArsCHWB4sUR2PEPivwM8sdbLKqEJ1NjXBTS5qCx7jMaySAcEdU5k73LNaju78bDXTWnEMVi8g2hfjfoa2MnJd1K"
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
