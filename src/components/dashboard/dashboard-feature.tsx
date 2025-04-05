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
    "4ZMtsXdavyFheP4Vesi6XVYUnypK7SXzLrC546CFiC8UjDgijgefeuCXCrQsvgGL2ppRnreuamT3GWX21uo3cA1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MMNEkBkZVFsqNAYdstrSGHU1VKbsmYKqA5VVaZnKHbdEYAaR8gLz4YmeRojjisYe4rxcu6FXznq6tG11HLCJd8",
  "key1": "5ikzWjbZ3dvMeJXUH8BPJWkDg8Ecazes1RcmEP2Fit6qFyuw9X2KYno3XazRHQhG9Xx19Ej9qVNWpq6bb3aKwgFS",
  "key2": "CJ7sHPiFy7GHxB4kt3VQLgBFotYGBDKwCb7eRvTYrxZgFipJeBMbTCFhULGcVFDpbh3qhjwixW1JLNAbnyMLHyQ",
  "key3": "3fX46NwRHbtEBMAMZCknSAinPb9BmTzop3Gv8fMuxCqt8f4988Ksg9qdCMX22ws9oQ6uuRYFdcmFgJW56wMcxJp3",
  "key4": "4hP8qsNx8supFFbJQcJocnPYhahejVmCwsQsBSuVRHtjpmrtVXG76FrpETvXSHzdSaAzCznSoC9a896ba8sTfYps",
  "key5": "BE2qb5NB6yvnm2W4auGzYnCHGXVY3UQottGbr7Y3EnhEfGJGaaDc9ndgx76EMMyvk7Yws4nyu52ouRKBUA4ucE4",
  "key6": "3S9X4p6pBeD3EMhS3UbL882Z43UhRuKvXwtLHtDbJ1ZRwdMQUHbccZy98397VAQrnTYUuq978obVA23k8EwpkxQ7",
  "key7": "4RvURXvBUxNdiu5p43FYmhb8y6dpsJhC2Zm1MrA3vw6MFz2ys8NzxLdf7czDH6L1uToFAeMFxRsPfgkBAPu27GmM",
  "key8": "oNEWPia9yxiGqxefj3XB81PNfWM3q6kHt7qmLmoFxmAh6CPC8CDCpuMCTyGd3FkbECNBoKvMPph2ZTUCjD9QThg",
  "key9": "25ZgsczU74PZio44QjNCyBEAgR3sJEMyvnMtgeDueAN1VaoMipb4apzDBSLhteez1QeDtn5iR7YTd8UyKdPEiXsd",
  "key10": "3s3pZ1eE9vSxB4X2YmUZ368ut85mBEDaYkcgyAqVdoD5nyUQLB2vsGSX2htC3Pa5nxqopSUzysXphocwHnDj2o8g",
  "key11": "2JoZUghMXGuLSWphsNzzg8oev54k7zCGqxwJWpWbitJpBqDjXhRYVvXALNqt41z7fDVqAbCr9jxNS2dmRowtCsaC",
  "key12": "3ZeUS4cSRNaXD5kPy384q6ty3a2XeN79yfvGYhzX9nD51E3ArndMSaVHPvSzLtGt2tBqfPo2ypKQuLk8Z2c3gQGE",
  "key13": "4iAPEZon7tgYmu1tTaMyoHb78zrBstiALVKCuqf17ie2cnjJex3qBvJU7mS3fXQ2tTebY5a4nD23F7ypm6wvXEv3",
  "key14": "pDTtAYHFQMrT9NCg4fxq3B69j5a7dN1CHNULvZ4WSxWfFw3g781mGkkVVqNmzDkGkXkhGyF92iRQGqm8t1BvotK",
  "key15": "44NN98TH3DfdqK44VTpemeDTWfLURDqQjCYWfAY6Uxcg5yK3nrC12xhgLJBJSgWnD4p7kDHniuXaiZLWdHqFc6Zk",
  "key16": "4ZomR7xvfRuZbSrtrqTzvUyFLxisYPR3ddXj3bcdXaTGSmRfPy2Z9nXqQQii6fv1x4HrxMJLc7moJbGJSnu1Wfnm",
  "key17": "5DXXCeeQT18AMFbKJjydTNtk6kUcu53V7DeSBHBJ8mvgs1nBTX5FHmHwoVybvau72VKC711zKBeh7A8QTNMtmBZr",
  "key18": "2gYuuWjGtUDRRhXviMu1tdbnGiPKirDgm66gmMiDJsQgFXj5ZpUURc3nsEeY7EwUrWreip6juwxxU1a2EQF4GKv6",
  "key19": "d4ggKoAatssykzpxNb6fPvvAb2fgW4ZjWApGvhXSHgvLFjxpEBJEM4ETyhcGMzmCH5uGysn7QrQf73kNikpxXka",
  "key20": "ebghJtUWwxrUNHNkXD7gJTcd9EsE3Kqqb27REz6XMz6tbYfVkT75gpqmvPwRaLTh5uKotSbJuRjrjNTuro4R3dQ",
  "key21": "2ia8nnhS7Z2jB2CM5dNBC6wqvc8ymBQ3TT9iwanGvbdhyRMq4p5nsQ9FCF7oJnPF4JEaaCULycfVozwW3pjvEbYQ",
  "key22": "28GuD5r5vkRwau774ff8fXCS65nhnE2Z7iPh9oHx4JKEXX8mkx5fKqmrVzD93XBdxg9dD4XaFsqbsBTkugLoXE5V",
  "key23": "4ec8aGnkeua9585eVuMDi4oC9EFTLxQJKmhBjV9N7S4BRjyEMWvHBbHkupNtKmUrhodhZ8H62c5JSqWsisWpFtXe",
  "key24": "3JjvYzNJRX1ifrMT1Wi2vH8L9NQa1DE5dawz3M3NYeMnnSu9sZwiYBWSCsZZUnKgT6XyEGk8QwdKBB1bL6Rm17Rp",
  "key25": "4MRdDwMeTsh8ocqYCRwKvcoEd46uuRZhPSmVC37qNywheX3peoGf8AyC1rKZaXdXHqDuWrBGTVfqTjpnWuyDrCZL",
  "key26": "4p26SGS1n3QAYxgQf3MQeLvBYvQ1xXSo6d4rvjrTtrMzfz7h9jQZ37HDvg1DtqbXYBR3HHVJrw61k2XBrNft1AR4",
  "key27": "2x5XB6FURmqYx2WVxtPSXjbd4t1XVUPrWMZs6LCkqMHHsRgruvfwNNhrQkSvvDJoukbMqRUicCxpM6gvW3CuYU4K",
  "key28": "2a3R3SFvJr8kNiogVUQNJ7rwi4yyc7tmXzWbj1po5fggUZe4u5TcUeo2Jhksm4GXVudBFeByt4zKu65KfgojcXgS",
  "key29": "58ZmeYQcFuG96ADqCGRRuY7DfCRBs8qfa1PcyegBJVXKmnp2XXw5rLTiY3HMQivrE641NyU9GFo8fho7GBQLdFVL",
  "key30": "5HbwTvzshh2vTY2gc3W9mvd4fhfphx5PdvX2a1DssZKskaHAyyF5r3H791inBKXvfRA32wuh5GB21DRkxpTC1L7j",
  "key31": "2NKkpNbXCP1x5wdLxuBZikZR2cBugkNvxWKDvZP9Kv2AjKw6Bd9rzqunoEzUMmL1xPp3kH6YqW2K1g9bAXmVr6nN",
  "key32": "3ZTdJdUdgybh2x1qMhsug4KQJ4pSfgDgWA3D3it7kFPB5A9XGgCGjafdbyGS9MZFkY5PBMMBMY3KK9XNFjULd32R",
  "key33": "2hFeJzMePaAenvjLR87kRiKvWxJJhbVrp9yX65tVheZrRuECetdvMVgAv4TTNWxbThsHmikY2U6QB5ii53EWBXui",
  "key34": "4xgLYRHP1ZAFxWnLVpQ513ay7fgmWXBvNaXBCksrnLuUW85PXxzPEB3phy2yzd191X8CqgwyR976soBSa9wvTXUG",
  "key35": "iuNbpVQDL4X9iwgUQ4uR6YRp9wc2665AcZjbbaVtxeptKLpD9PUxwbAHUMdrGfZSSYegM92UjXGqsgzkFMLZfwh",
  "key36": "2iaftf5gPdzVN4VDgneGfiAiUvzecmkD8zLGaWZbQcQRkfWubfr2eomFqt9rcDaiz6mYAggsJYXT3wFdKyVANcqu",
  "key37": "22eky3n3e2289Z6UKujCReWZyUPp8kJqoMkXna7633rHodMT6pUT746CqBDFujRBKr2NtVa4vKinfe6pMgtMSCwb",
  "key38": "3d59UnAXb6CkUmX6ZFG7HomaMGnMSBANcFFtj6hpHMYTJMcT6WYe9Had6kSwKJCv64YT1uS91GdPYow6sX5YVWiA",
  "key39": "3p3s1zH3ykmwPjweAVpcsmCam54rccdw6znnngnrA6TfjRueEaZXa6nBwioJrDP6zoDwWZ2PG4mXTmp8HdKXzway",
  "key40": "3SB5tNd9YdZ4HQKj6HCjFG3hRMiTNUHyMbXaM8gjcu2BGDiPehubMr7MVv63LiUqkMWrMwb1CmsPRq4HVS391nPF",
  "key41": "5x7mPeCAVxR37is1wh58szXnjkGAvD5QK9keJe11EBsQxXse3Fj7TKZeCdN6Tz8sfDMiRh7fYZYshXfk4UzynAtn",
  "key42": "4Q18KRqrK2QwdYRXMbaMwqdjiG5SBB7xTy1XgvjumyUBi25nMsjjv5bvPjRQFJCNcrX23Jasd5Coy3s5SVwjTknN",
  "key43": "2yoT5GBRC3UtJLcBTdhxXQ6sdquWXQgjkGMdAeu5zMcHxQCnkz2t1QZDJLAambsYjAcu5KiMSZbBjFQuKpvbDAru",
  "key44": "4vCmzJwq2MUJejkJUV7VPBSMi1qhoY1NYsZVg8uhjfcM8UzKZSxHSgxJpgHcmnj7EjLCi7rXhpEy6GqDKhtKBXSb",
  "key45": "P1A8S5uXGNonMGeffkhyMfTmec5GujSkUGJzES4XetCiJ7CWUjZBj33u9jBtk7qbp9X5UorPSYa3Bi8K4Lt5NWt",
  "key46": "3SD8ishKdHK2WKmLg4XW2Ybb2zMp3gGXChjodxrA3icBCHB5LWbNsGbwoHewfkaSWtPFK6YpikYhktyuBEFNyNN",
  "key47": "3GaMsGQk6WPb72cG7xE1Row24cYQeWd8xRwzTgoQJoSymx3ktghw53owTpGNcgTTcy2u2pj4Jqd12QPV6pMN6JYP",
  "key48": "59gfrBrrMrjRp7mE88Jv7EeTxZ8MgmFzZYKgYcmdvLWgSQS42vHqDWzikQTbykoednjFvHFpCBsZeA2vTTycsgKK"
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
