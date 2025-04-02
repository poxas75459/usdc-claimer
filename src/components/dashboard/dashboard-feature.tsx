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
    "4B8QSbfuuxYbR3J6JGy3b8JdFrZaRz7NRXWpxTLP5oWQ4SnHsVwEbgwGb8qfZujnNGsYKXUJuEramR88FCsK9y6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U8kD6duazu5or6QnsaQPM1rGQNUt99XR4WgUGQHkFNt8kwmXzVQwaSTCPtyAmi2fayhYE5EiwExKK1GBjPDPLQX",
  "key1": "tCuAadhChCNnFskC9aXyQmYwjgkcAK8ejuKE484x7wQQXK8a7VumMKowweKxxZTCJWbh2dxAff51iQK2NyMZJSv",
  "key2": "TwiVTTkLfxfgL93ymUB3bLMYq5nW5a25uv3BPHj2fwXQBVVC4Mg9Dp5mFJ6uzPMsatHMEYeqhmjcrmsTYYKkBAx",
  "key3": "4g3NJuDvgWNDjRccfjgg9SGd3DeTiGPrwForR1fbfsV2Cr4eBBLT8GBibb5XTgtSqdWXt7VcYMfDEkxod4NBbX1e",
  "key4": "2HPJJXas39n4RGBTkrrjJZeZ55kwfe7kqjxsDorRDW735s4KFHaNpq7tjuyNDhgdy2TmM2F6Uu7Ux6GvaM48b91d",
  "key5": "4ts8Nd7UFk6tRZpqb6XoyjuKBhcJFCLKRQjB3bKHxZN5eFS8qKHTVjzsE5C2j1LkDf5Rff6xHh7FERaVqJcamwTw",
  "key6": "3KNfThv4HHqCHPJYt587GFN9AmMaUnATe46sQCt3tXeECV4Ji6g1BjKwuXakb5YcwFV33SbZ8MK894ufikPV734D",
  "key7": "3dXJzPKvvfCNCHaaa2FoBsKXLT6VB6pAHWyrFpJ2P3MxsQcHEAL5SMA53LyUKbx2x5jnw2MEgY3H4N1RN3eEPJ1T",
  "key8": "2mW4omzrsjTwiVbt6uPHxCQBNJiVt1K9qWSHMDeMLcntSnwqRGDaMRzeeBaTo5amhjfDzwdw9LvcN7KvAwu2DGuf",
  "key9": "RaQx5DXGhrrr8KSkaa2oXtrZxQ4urQcVMzDSvR6qShjfiT99LvsDNvnSM2uGXKMnQSPfH8vDSUggqLpXAJZ9NSJ",
  "key10": "4kBMA3GmuruARoAQoFMb5C74rLGSFSRwWzAs1WaFUYesQJC88UiaAkargT5mYd8W9wLz9ab84wMYZ7neDgFioWwU",
  "key11": "2n28XFy1BuCRNnVXp66oovRw1ToJKUzgJ775fvcAma42Un8acssp14RJmxBPwrwA43p778WgyJrNZS8TaG964gTr",
  "key12": "5Zn8QgLtWu37oBj28y7bP9eHQCsjp36zqAj94qoPXTdh1uZ7dFgMp4wxj8xBsJjtbVapupK1ojtCN98Dnco1NavY",
  "key13": "2BKYY57NRGUFhRSMztTPeKqBRStrdThobhX4kJ7kKPunXUocPokCDYW6ADAKD4KSJqrkR1P9KpyWUwGgX3jNNU6T",
  "key14": "3G4tphftbjZ3mndH8tXtp9YmUyHBsPmPJGptY9BdQz5DEDWpGkqzjLVZgz6LR6StW34XjEmAJHv2ckcjE8JuSREQ",
  "key15": "RRhZwDw3SVG787jERvhSra6EML3y7sCGsE1ifKCf7xnSGCiNvigjHMehCnkJo6HG73q2msxRZz5SC7ajUEqLCBm",
  "key16": "TxE47uc7hhKm2g6DEfgLCxGU9sdXhNoG8LxxvHCVsV7NNNsZrz1s4iWruvVwCKkvh9RSEAtrRRemmSZyXktFuGb",
  "key17": "67BcMZw2ESmkygzzscsbagzniUti1fMbB5ntk4gfRteKYavnMXfRAgxxLHFDdKQ6dMfQ59CvLRHhEqWedctC8vZd",
  "key18": "zWQFfTJTZNVmbaErgiAfNtbW78ELKmTcmwKuNZrAbVDNzQ5NhLvghoQAazTHXy7gtqmiGocLDnnTAKgKqwfMtpJ",
  "key19": "AvBNPceo7JB536evHRb1Xnna2d4ULdUsZuWV5qafKopa2Zm9AbbTgyDMScMTkzhq6YGXNWXSzmzHxbej5gWTksL",
  "key20": "65U4V3J94WSRqiC3w6g6Cb4kYf6Nz5X7RRqQ222dT9d591FnvTs2jjxA5mMkHBrxhzJwtJ8R5Mkt4doxnm34Dfwm",
  "key21": "3MFRura3RxAMgWPuszse32u5bdKXhbGPQR1xMhKVB4UtLvUcRMQaK8YEuk35RsZZMLK8T3e4ze8hSUMWzUkHQPs1",
  "key22": "3CYiATqYokBMAVAzhiVd7vFmY8XfKweviW17LqF6QUQrdx2T7VC8fyiTgeHuHgGYM5cNSCpTtiNuJKK8kS72c1qT",
  "key23": "2iXCMiebEc9f2fsKAQvfBDYVeCdkZ3kdvtBHjKPdUc8Jx3r66kRDURk9xpws8QWytU7FsQDzivVL4SvxQyvpqU2w",
  "key24": "4y5SJEEsYASaXT5xrwCqPJ6vRSCw3BmREV3dNoR3Ypvs1uvM18SttgXEdQyLG5sy7QT2grMkugbLD4zrELJyLMFf",
  "key25": "3rqT5mccfoyCdEDzYjs7q18CjddnJCAU45w34XyG49ZB4dWeXitNMbXms7Y2cStpKG7sd33ap43RFJ7kKthmeSFH",
  "key26": "vdPc47A3mC4GAzEN2R23AZpfM89GyfXEU12473ac6z2bXr1KXme3GDhvTYoMXYQK2ZHFm2aSbDbceYAtxZXwhJn",
  "key27": "Mzu7dvLTm4KtcuZLHEjRDxFVDLM79h7666AP6nfCksgCVroFZf4AKpdupuawEezuYWKEGxfySsnhGDCuFsSHT8r",
  "key28": "3DHFeiFoWMv3PQgiboRRCZA92WbMCPNSpwVhd73f7UuarbkYsk8DbhGJB8Co75KEQu4Kib8rM86Db7DExQpJriyS",
  "key29": "QW2gQexQWUXTg1CByj5KPk9mu2hukZ4ygiakjWyssLo8MkLwW4rqqYPCXBVjtbsGgR1Zv2xpoyydZC58ck1fier",
  "key30": "2rHt6jHXn7BE4q4hqNd6EnZRcWW87eppf9ruTqzKm6xrA3XDhAE4Qr7VUv2KsB3UL1TEUd4HCLCGrvcb17p45r1B"
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
