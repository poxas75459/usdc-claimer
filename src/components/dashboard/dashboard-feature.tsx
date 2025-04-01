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
    "cyppSBiK19Bzyi69Z3mVXGQ92u2tMajBD4hRCQEjwznPR1WgVHwEHjtFzt4GGGLBRuzoY4rtduEHk5qpvr89rTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f9aaVZLErRvGoCwdtFFtej5XT2LYXBsrkZMgidbkDAQwDGLqgbKzqbvRyfwy7DbDRK2qPvXKW4ZkJMmaqXgkhHi",
  "key1": "ED96Au5vEZBncovQxDwf5iQ57toZrvXVmR2ADjxjdFARhNn1twipk2s71zdUUZzkR3x8JDhSaWjLiNadv9Un9Yb",
  "key2": "4ncqX73Paeo8kXSHvg9SQEb3EfXaYTVNypKfqowTWmgAzNTqCvVcsEAednCbNQ1DLm94dZYA6wRrjwkyYVEvwrbt",
  "key3": "45zT1c1VqobhHSRnXRMDAtLxQXoRW3aKf914x4eQAUPmJLEA8yyHe1PvY8mNYZ91kXLKRBCLSe5zgKKzDAiRSTMv",
  "key4": "4aJY3nQNDayBTEpbad5dxzNwiEEnra7gVhPnG3kwtDkGz4j8Rtz37fbQtxyKWMaKS5ugPSaknmoq73TZoxifJwcb",
  "key5": "4ENDLsuJYWLqfEZaX8pTiMXS6hCCEUXWC2qdwFqvFvGqXCC173VwGpWrL3cQHN3EwRZdonGsvbx9yH9Mp7LGen9v",
  "key6": "5Uogr9Ko8vNAwxi1caRLZkawgKaPb2iWMsuyxJoYiswV2PwNW7iKuC1sabf1CrU6oi1Gv8TMhDqLyWjzhJoF2cPS",
  "key7": "5WoAbJAr3sfMVyxvqX5VZ32JkzdzCTm4Y9Cseica1W41pn5gkx5V9jJGo2JNqBcLVayEXNrqh8bZWnho5nzpmBGK",
  "key8": "38yUmga9pihvCSQREoz6Ek8a4HagPRSHm9sNCXMSF88UxMi4DpXsHw5muQpsNjcmnAgQ9zivXckWTCCk1bG4nr5t",
  "key9": "2ptBwSUay9NQESXJEWumjqdY2hCehWoQ53pCmHwjpTAr1wM5z6SN64cUbUAug3EqfKUMLUZ5BLR8J2mjp3yC25cY",
  "key10": "8CtHqoLoQUd4XS4RTV3GohnTHhAXx94Dd35zs4f7DYk8gSdLg7rfugnDVQq2KnGtTUHsiaUs3UovQ87Jh5Q6bg9",
  "key11": "2PWNFiURXKX8hFdY7mdnZ7jHGJunbptgkqesU9hToo4Brefwy6Jjn8jdPcD1q8H4CgUY7SpVcWhiDNhSKZ94oUby",
  "key12": "T35zeDLDo9iSdR1uytkdBctPjsDEZtcAPDH68chgDDx8Jw8rgLpJZPdDPCQ3hcywrbssXbFSMnPrKoYrXH5j3V5",
  "key13": "3A9J4vy9ZFzznWpbEQP8RuRn7jv3j2ymkfxfnsKk9etkLzMtZ7H7wGrs2YVPEsVqTcNBL3NmQs7wJnXLcVuHyw8T",
  "key14": "7gGNEsFHaGP2hkZJjJVtBCJbFwPms3jgo5NTJY5Tjnodqmf5mr1LJuAeqVPCEtzKbx7FnDhJkBgDRF4jayUmV6g",
  "key15": "3RxxXew49yCMjv5Kb3QzJPq9GSkZ1fppedbNt3BE9sedyHRBs8ATXdAV3M8xYJkt37cKcx9LpABSzFC9h7A7KTp6",
  "key16": "3ejDLM5dnoYz81Lab7AKx93UxGofWZxpaXz1fMUmJc5xr2GCqJ4kdNZd6YpreUsi98VK377CtEaRiF1JztyxqZAM",
  "key17": "2NCJZ12gePCTiTGWRgGPkLzrMDt7DDEnhwyXfBfsRoctTpXKDeBGqRkBtU1Vkcdc1Y5r57zNAd8skNNdhW5MF9sa",
  "key18": "bfa4gjrkf9jgen16GHG7DWZcmsd7ykN6ugB3znTV6y5XD3r5gFzWCQ34H1hGZuNWnvVCidmDRJ15XE5FGR2mt2Y",
  "key19": "NGzDyshunSXAGr2oZht6wS9wEqbNv87g6x8itrFRZ8JQb2XGBrow5uZDgy23bPwbcaPuDHhkXRbKZSQ3AqbisvU",
  "key20": "3aqc7TKFujCtrJboyiZbogfwdfdghHZx27m72Hdg16UQ9Gw4AZxPvFcViooERvyKmvyvDyeKHyJrxMdsjt6aQ7eM",
  "key21": "P2uqwftJVLnTbVYzcSPiYS99E6i8AFjF1e4ZYHCxfX2QrfrcPzGHLZFXtMeQckTtsT1gvqs3BtfCSXWX3U2aieQ",
  "key22": "3Q3FeL7zcJBmmB8AcKHCECsAxM3tBgb6BcuMJNAofnRXZEaYzzyH4K6KxyKMbvAXwbQAsAMzrqhBHaLffcZjiSD3",
  "key23": "4iZHypg1rYpPcq9TL37Nt4Jptm9zkTvtKz3cvqX9mqrgrXkbDrmTqkfKQwiGSBj8s8hb1SnZoB1XTPB36AVbBfNZ",
  "key24": "DX6j6JwRGrrdcF5CMXe1hNp9mT4bZ9tTGnQX5cWo37cocA593xZiXfDF1xmARfy9Ghs6jeLimYQ83xqFi9LLGvF",
  "key25": "4gA48VD5ZBWLGmBt85r1DXzvqWLyt5kQAEBDbXQnthLAUoJKzCFcfjD2YL3GedXhaXJEejHyPGMmVK9uFujfHjF6",
  "key26": "miertQgA3KTCAYsaXkgRGusCjuLd7TmmoMdYTvuhYCEeZNYuj2kTcFMnocRsreFyb4AuqRTsRjbL4gZGM7ppPDL",
  "key27": "gbK8rxHKf6ChyKkLDHQqJuTPWvdzjVuKtfYcpyUiVTiSjHDKzGVL4L6HSSv3s3bim34kptkDH9BqrVWMBxF62X4",
  "key28": "3BN8WTJFws8fU7HHhNgijtAksi5YNWKVBw4aaJJe3jsRrJwayLrAoJ28GiguV1NA9UqJdsNsRmuPu9ks4pxHJJBz",
  "key29": "59LXSURtvFmyKVZZ1MSLwWy7brFZqs3P4RM7fT2sHFGrS8QiLoLoUBGUSK8y4DF9QnUkK7hNE17DNzzAJXATYxLW",
  "key30": "54NvfYTRTZqffcHL1WVgV1cagRfohiNVRBcoEJvfDHtgu1wTcAQdWUYrsX53VtXXu1jWe5afrfnMnRHre8RvmbDo",
  "key31": "3Ea8dv1zE77udM36uocWBko56KmRRTz1BvHAQUVh8azG9cjLKgVVWZoaqx7Xx5vK28p1eZuntTmtLTZMVBPQn9oi",
  "key32": "67EeBdn9zLj3RocUxM6kvSeLbpGrzwGLMKHXVBj8WURLTFJT1KErZBrRVEwScV8RuF3z9ZobV5Jb7kq8UNhAVUdp",
  "key33": "3JQoVyBESXLjSCmd3P22F1AdBQ82zo3YoAntX8g9mqDqs7k7zBVEjSEJFuTwcug2GUZuuAhAgapAMxKJN6g7VsN8",
  "key34": "39ddjPj4pXp97aryJME3ftCtSJjAE48JES9UKDN1dSiWKDxoyJG5bF48egcPV63MWrVZeBeS7NEFDPWsXrEQ6BaB",
  "key35": "2gJ5D65EExjvcHh2oroHnUj5bNJv7aoF8jcU9v2R1xp4KRmtqiwaHRjvQqiFbzvbSa5RnnibEoGLX1ow9SKeKJZi",
  "key36": "6362fhAa7Yiz7Ffce8b1LzFrfJqH5PeF3MgZMmsnwPgPFhDmsDUkE3c9deJZmBr8RVYpaQFjKWfwW2P4gNrVJQHy",
  "key37": "5yvSoTq1sDdBqpfoUK3PnpHiwvg6bBAdmkebRwmDeuYrNxPTmq9wUPVKWaDnuLqZBm8mNdmWLbQMRaduFVakihPf",
  "key38": "5oKLq59eMgswRgnPzELBEeusgQ6scQpT27ne1iDxWids3ycd2BDnCZV7ARWniWAtVBHFtPu3CjYVHUY1c5BM1MsE",
  "key39": "66ScoFUGfqivFtvUDkQDZjEcUy7Ujaos78DKppYZPsmWsyX9RdxGY16CjGu7Dy511td7odqfvbmSfVensVBo8HFj",
  "key40": "deowFi1HiPKNMRVmpaZf3PZcsT3GKBsnsyegxqX4iQqmrTy6QnXGPj5PfMD8Z26JsepLgz65vkehrQhKus77rK2",
  "key41": "AJ6J5Dpe6X1Go5onauVXbV7u3gYbE5tcEmctG4ZMiqywURvJHubyjun7XnA5ehYRTEyyEFSseDfuzaQsowMzRXe",
  "key42": "2EwG7a5GJKGjaANgjefUZn7qXmhEfEmeB7Do7Xoytdgcb1DMxnrU29W1iqM5pPbeqb3y6mARh7JsgwjFkEkADFTD",
  "key43": "5HDRL6T65maTiVqUzsZbHqfCbuE8ucQuL8GhvKtvaVbKinafJCZbWohH8GroaG27NgLRmC9QXLjBTD2cQh1AA65",
  "key44": "h5RsTEMWGR8X8ZV9ECvW97fJaYBA1UYtNnv9HDpJdT3Ezjf4h4MdkMR3JsqA8HcTspwffaXHKFixWb9Fi8YC5Wh"
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
