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
    "5C1te16HMUHsU3vcdrSr7mJbDJSS2qXQEVvGbAdHiAFWcPn7GZELJ8w7sAAe1zFRmp1ttZBPFfdBS6f7xEchCkUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MtmoaCGnmfgV6inE6D37ThDpLhWSDXttRyCfp8TdCJBkoDK6x9jHiueKv9ETJZXa3wv3dHE4XCKwzfT5DCRKepK",
  "key1": "NQmSw6k6CkPvzK2Ua2LSJJz3H29rWgeUMytBgUorcr1NuJMVu71PgSmSfyq52bqRfj3JiNDcXrMhSFi57HhaxuB",
  "key2": "23qgm3J9LJVoyuXDwUFqa2Lv1T1eSXKMvAiB2dPFkgxb6BA1GQUqb7CCv6Eph9uecgDzDydy844nV3m43vQrQJE7",
  "key3": "3Y8y2iPZzfVkPXXJvYyG56h63oFHQuDqKtAmsGMA57HUFwrtmzdhjsYyhNDZ1BHC9wF2Us9kdJE9Kv7BuggPPukL",
  "key4": "4eEHY363kXRFGiAsybauSxJEWMEbKkwC4dXmGEMxL8qtv3C3HkMCxYzW2GwLdEYi1emptymbd6g9LqCeRd3WTWLR",
  "key5": "QTxZnaaABv1oHShwpGJizSjTcPLYqsLoWzmdmf5mtC2wFwxkGAcF4LvfYB1DW9uxFLAY75xq9fX3M6ngGWxei49",
  "key6": "4ezgfJLsZvusEGK2oYvEGgj1XrypLjZUwj6s7KWn6A6pRKDDegkU3ogQUevp8fGRpeJoB1ayp5uhizqH98Rf8ws6",
  "key7": "2gdqLE9nMzBhxfgLPa4L4G78mrBPDktX75a3919hTGgVrPedqZF5ZUN5fkAqcLBaWG1CUbAuC2pP4jqfpm8AYyq2",
  "key8": "5U6adDF7BFD7uv384BqqzRgkr1uPCzp3i24dW4CL7qtYbmVHdJt7eio7a45oBfL3wQZi6zFwAonT4t5zKBnFfTDu",
  "key9": "532Pbi4V4sGYmGM71WqQF9cHEqF3HKz5PWUZWTuLGaDsm6RjZ3BsSs1BQhyWWfqvDCssBPg56Uzu6NrU3ZwaDStR",
  "key10": "3Nkg1yZosV33T38ei6odKMDcH8PJFCCCz3kn168HiDKKQsY5Xabf5uxsbBt3Zg9RCWPdmdGSguR7iBQER6vKWu8h",
  "key11": "3C8uMewVPRVNbbe4uk45okbEE7XR98nfZwKsenZfrZW5AzqivNXaZztDmzybnG6a4sGYuLP6mVAdcGPU9Hb2B3H6",
  "key12": "TRJE21NAvwYzqDwVL12ZQixumwu8XkL56YJNFte5bHRoPtr8cotitFaKtJvZEJSzRC29uexMf7TAinb8G5zjbNq",
  "key13": "64Uz1f8mB35LJQ93z4PstoQy439Y2Nh1U7W78MYtxx8BuHMXdXaNARLqaD2bKtZRLU9bToRbTV1ZzPyB1jei8hi9",
  "key14": "2jJP4fmNfLxzpN2irEwjBRFtP5qsdfWxwfK43ytMiP1XxeEx7ggiGChur4ZT44uFmdrjTS4VTe1EPbVUXHiwoame",
  "key15": "2UWNwndVpSXvNkzDz6Gjspt5L6XfSH3bWcwpDbZHGCrL1sUCiakq5hx9fFpUq3BFhMbKih9vwCdpjudSKwGCNYDT",
  "key16": "51nxYXvK89wC2f73aw681Q1Hey8NN8nUu984Fu71zK5a4BdCSft5JWA2Uc12ZSYTs8rTSPJSpBk8P2Qr36sru2vT",
  "key17": "2dDrHLWc2yuY5gFwLo7A51BFyV94NkVaodPVzLeBDXiUiYGAidK37ByzdgqFvumXNfbE86uN3s8f452VpW9wd4jU",
  "key18": "61Gnn2UaiDXbAW2cGLVGTyVBcrdqLaLiEBjjvp7VRMoyNX9y4AzPZeTWBjg34EtAzSXMnvYg1z7YQHNyvscMZXAc",
  "key19": "45YJJYBGSietVFa3icvgbQMLZcHQvRhjTa7Vwtai17dSRxysrXNY36ryRTrmqSuxr8EH4j2BYWbJYDEpPoZ83EfQ",
  "key20": "5BvZM57SgsYmzXXP13zJCRoYvoBtwvGbJodMrFHdErbz69Mv2i9vABuEUeYwcSotRacaD9DbgRaRYWapfpbsK3pX",
  "key21": "75oqT6344VMPLUbzB61xfPDJFVm8w3ejgSGJSr5ZvkfezASf7PNBxe2N1MMk8xA9WTHDjCBDLpafHEgmNPTKCL7",
  "key22": "3ja3CeE6H1XTtjorkyzcbGUWD3PnqPvwWETYchsVkYnSEshDDvX6ANERm2sjqM7wXEFmc2yELEHkmmpSgsu19Ash",
  "key23": "2QNQ5ByUTrJfdiP2BMSUKZzf1174fCGE5fcSkyZ9pXLDaZzztPVv617wpeg2hEryjhifJnoigCUXqQjiNWUNZZMY",
  "key24": "2cigNNB2nLTtFMW643sVz9kLku2XjqrRKbD9smS2e8r9EVVjGrFRaUuZJEgXcgaQtFumhV7TScgZ53LsAnau5s1i",
  "key25": "JdRHXQQno1VpSAddsxUfuZsPPuKbayBy3FMfCMznx288XuXvCQvuGfUkHjV2KG8uCJkzzcEEy9qCtBs4hK6pmmt",
  "key26": "2j5Qwx8UjQwhkcWY7CgpLDWENTjFtrJMmgSQJxdFRpq13YGSWJN1taCnnZvC21AuHoCzp9s3EzMWyBjgzxEM3mV8",
  "key27": "mkikohRLKDEzPCeqgQwk7PaW22AuagGhjuBL67zhDzYCqLzUijTTXtxcY1BceHaqKchrQDyusjaAfUY4j4phpJJ",
  "key28": "2k35sJ5xawcfTs4adoBUWREfnwM7TezxxK5L8ngE4zkp2HTih5RYL9X5xd4niGF8Vx6k7Zn92pig5sF9VMz2Sn2b",
  "key29": "3PUPukM8pHfFWVuTY48WJT3q232jXvPABPWVjj2DNEhCHAcNu5ZQaDwrdancUq3RD3b5aEPaLGnSucjsskio5YW5",
  "key30": "57jpV3t39yfLSvDiqNi4NFAPHyhTMa8fTmmn5Z3z1y9GpUHs6iiggLxzS4AAYYUpaKWjgYBiCWbY1Vpxe1dutnbq",
  "key31": "WnKZHB6C5KBiLQgoF4pnTgJEyq7yhj2TYKNaqgK6KQijA2Z9ytdLY1dKp33mPhrM9iSzZEzrJCzHnAMzQfgfQ2m",
  "key32": "5njqdGHygabCLDSVtSgrm8beuijATgneFM4gcf3ngVpJm7QDEuzgRYxPeVxji2Mpru9q6UDiRrTgFsFUyxZ6Gewb"
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
