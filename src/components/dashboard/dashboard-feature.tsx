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
    "3Az6wd5zsaK6QJzktTj5rWr8pHvs4zpEqS3EVRnAFSBN9HfjdwSN5C8Rym6hHdRdF1nSfcTnJ5pUW3T1jJ2DkPFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LKeQ8nKNvVE75ELYf7ayyZ146zDPiXJtCjPmVwUKx5ooptE1erfUr1X5CyMEwmoPb6WSMvkjQFjju59BQyeXF6y",
  "key1": "628ovmTFWWXVECup1sMtLu6YTrjdmCarenYyFow9xdhRSrUSH6etE1d6qeGPeVVW9cR6YMuYuYRuNyKG3oRNtZns",
  "key2": "2gDWSp94GBPVcu4rUncmL8kb6snjt7fyTenUMsEMiXQBHdvFMqBC7WroBmS7D1ktFiEDAbdtjcb9coPvdyRPgSxr",
  "key3": "3jNwm2aj1AZmUtj9yJ7kszT7ksMePNBKqfaumdCuxkotaf9XxDBxGsiCHfYcNbBN4f2gS6mpDNNVq11pjrngEAR8",
  "key4": "kTuBfy6Ssx761f7dXku3EzooZm5u2VCznXfuBSjEDThBxizgDr5HzFCCr6ViUPYR5YPC6gFakFMC8owxzx28mew",
  "key5": "2jWF2PjWhSpJTTrARp4EozYPgbotUK1dBNURQtkexycmb7fA7JZJ2KqQL6Vt31GRku8twX1VFUCeyoqehx2Dk97K",
  "key6": "4PuygxtnpNXyrfyJG4wV648QZvq4Vzo8gx7x8ztP7t21xPzwTN8AeDpiQ9Dc2CuT2JdUrMie6XniJj346ducy7FT",
  "key7": "246nz4xaaSy2b5X3ibkaEgneJFrEko5BrWZ3nJpweqAY1vEXD5vpDnt3Rvchk6hrRCh4yQYsGuaKEexWBRiqbNfj",
  "key8": "62ASNtx2hmVG4Dgpa5PaYEmzQqiWQEvJ3PwM5UK6SnzR54Z8dAcrRvtwTWistPaLgahMnkXf18CkiXk2sger4Jkc",
  "key9": "qhPzSPPpBGWpfd4gTRPEsp5gYBAeMjbxBHdzbJqKZ6UguYZmmy1rB35CdExgbZGEJe6Lj4aTwb7rWmGDTQQRdf6",
  "key10": "JGdXKHLQ8q4QBadvsrTFbs3n4DSRUyjpRbUmFzXh549vJ2gcKv1sawmXeZutXLMx5kWBseQjt4kQS5k5ZiDbYsU",
  "key11": "N3svD1CqrDN5SQSBBN2fRBJPgCzieJyhZXN33S6bes8PXKvdVArpPHc5wyZ1MHE221P5VmTn9RNHYmT3B9TGUo6",
  "key12": "2j22TKxjWW94of8qa68Bsw3sPsKiUxS46i8riSEsmoT5BCQX5Zetry6F6vETfb1ytQXaGuAkVrWjJGJ39Sg2hL4n",
  "key13": "4eFrrRcKAr1abv2mXsBpdQrDPqXaCVygcAmugCbzcJka49yux6knxAKWP57FzRgKdfDgxoy29uyvXw1a4EQudG6h",
  "key14": "2ZgC8Q31Da8LVQXBYwqKaDpvz6Zpt4t3j3eBCdzT9rHSBerh4skrZz9UBivZdDFNEF58r1DBxC3nq4DSWfRHy9eA",
  "key15": "nCXDwonxSHZ7unpgtqxNfyZhHRcp4zwPGVwHYePwgQpnsDd7GBEQptbh3WWqMmUUdCuG3JWc8U6DaGM75TxRFGt",
  "key16": "4V7wRmvtFjzjcn7QN2DGBUEhs453HzEEg4wczc3jWH3S6BWzseswFothPbPQCC2nwLGRpXoiLG6ouDHu6o76bZca",
  "key17": "1Lssh7n731F99zqcc4UQEASiQMEty3JXdWKwtHDxCf7eTmmiaospaqJq9Fn5FmXnAk3zPhFV6EiwZY7V6QaM9Ay",
  "key18": "4xfL15F7J5aKgsjGwgpQSEMJTqxQ1ShUJAsxe85uhLZfAtKahMeVBwpAQEsnuzwzZ72k4t8wUgVnAjNb7Yw2Xvrs",
  "key19": "3mmcKgZLMTBh1Yc2aeAWBmm7591RWggpg3ghsDxrhFCW5niD8GmeyWQ5zyQhWc3GDKeAEtxJFn7HXCasVMFyYPZ4",
  "key20": "2rR7vQdi9SnLySB3iN9PmesydKd56whCHCj88znnj74kGJNjyQ3mWjL6gbcqbsFtbuMEpPseA8sDGBZrpwhDxxSu",
  "key21": "sukn6WqVLHNCQvsYZmoiScsoTaDFcihMXiz2rSf4PM3RrNFZy35AAokc4D9FDaDvaxGwNnxrWRs1PW1AN7U9SPf",
  "key22": "4QqPap9nCFeBVUVuk2Ga395KK8249STuwNUmkEb9ef4XdnzQ879NSajU9yN3qrHKvY8zWt4vWMnwUxVif7GJ9QMf",
  "key23": "Fr4UXGYxuLuFhK9ma5cC53f8cZPbN7LmHhGKGs7D44GeAn2M9eTzrLb47mycVNSidLsu7chUnuFKtRJSiAkAcfr",
  "key24": "5DwMRNmC7ZG3NFGy4HXKwHWQ7cGPpvwCuBjJzoCaVo6rY2mQY3dWK5tdy6gbxbNSjXbcSaRkAHaQDmw1CKsZNFic",
  "key25": "5wviWXHibPV5dg1zwif2b5eKnkW1bA4EbeUqAWhSTuarDgmhHtDRyfkDZTuyNYw5h2oawVS4vV8zrBiqiXVqvysk",
  "key26": "4UyRe2EHw3jjpTeJibGaEWQkXYzb8dwZTHFVAMzcCWhTvhEZTyQdYWFC1my21MPfXa9AxbUPPzWbBrn7oCTDxW3k",
  "key27": "46nMbiswfWUwM9zwrvqi2i1cv3qnAQ7JZsDHKuPkezMcU5DCc52qsw3ZXCHyjJyZFoy9k3qNCeYLmNXrHobMWg9D",
  "key28": "2rMKV9vX1Mgvx68xpULJzdedCT9pLw4XrCSPBbySQKYtENgnA4qY6XbCUULPHaVsqqjU3Spcp5zG8zTSfq1hu2UN",
  "key29": "5q1f776k27qrhaqcSSRyr2t4VQRV2jLMC29MhpnPAo5JjhvxKAz8oST19sSagee7aXp11fwUruWNZL9ZFmNjjArd",
  "key30": "UjZxqsTUcyLoHhW3rgtBGEdwfEcwkQackYayD6CNSXXTC2m7ahLZhfRWbGMvjuvXmoTVPBdvzy6R6sKLGhvfWXg",
  "key31": "5JknattbSFcUv1xThDqh7toCZPa4tWL8TPipPHF3cu94nmzw7SbX1dvZz39Rgdfn1ihamwWNaTJJjDTo1CpHKest",
  "key32": "5JtsaB9wrbDQuKy1jyriDpRvpLqtzQXKvqjvCAoEzZaHW5P8XbBJbRwjHwPkabnfsW4imQYvfuJzKygP1337KdTw",
  "key33": "2fuwP8jhHQT4a89igRDW6JDWr6kwJp1PDFD8LPzhoXkJXYnhCN8RHc42SkPNVuQfe54KTuFkcdSxUW77mxfwdexb",
  "key34": "3Ey8xqrWcDu3H3pj8PKcrLEzkakeweLEXZoM2fySWsoP6Zyrarqg7q57XjCcixVJbP54wWeQoo3QtHhpu64198fT",
  "key35": "2hYYzAwkp71oCyn1w6xymu3hdUobTHxrAcQCsztXggPk15HypoPJXgxKkkjFzD8s1VrREUsfKKwQhoZYTGEmpatn"
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
