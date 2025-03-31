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
    "H6sivhoQvAni1E7prStv1uwRHaB2uqJrvueXrmP8Se2ZqAdmE7d4VvUdeYezUpLUqxJFU6mj7qXokVhpQoWGTFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "272GCrWsstXjNy2MR392DhZLP7SttY6wipcnQAexLDEbhrYC3sVoxLQMNBJaGQKTaZNQS7nukRgXrrqiue4cwHGz",
  "key1": "5L3w5SuAvki7fe1mP2HXv7UKgw7vBn7gmsKkZ9D8ZZQkd1SvHYYaYS321At7J897NWbFKVkcVETh9GvrcwQ9DDGp",
  "key2": "ZScpBEdfttn7yYfDfXtMF9hTx98j3cMSy67Q75rwj8rrCutBo86VP7kmHNUTtTjo5bcW6vpKJd74WXJhxtFxRpj",
  "key3": "rJRNFQFSmCGR6UGsQ111463h8mwoqTwUcmg5w9w7mb8vt1iB7yn1ezPekJ2GQJBX33aNVGiaoQGhW15BFg4Mo8v",
  "key4": "woqX7YxoL6ZQzD2GUkEuA1gtT7rUhTRwdgd7aDM7fdhEMNhaGUpPTT7nzGYG1u7M73bYbct3ZASbw7UUH52E2An",
  "key5": "459L8J7V2zZzhXFo5otrmRgK9WpLvt15bQ1Kx1ETbw8Z1PYcy4j9SGqq8hEXL7UMKbZveNxuvS6kBtEgs6JiwwbF",
  "key6": "2vr8Nyby1Xc2qmtCtM88d14Wxb3NpobKCe5MjfN5VntDLj5fmX9A3p7JSKDAnGUy7GNGNGKx3ptEq4jNZGpURkQG",
  "key7": "3G8HTXp5qmA3j8bLCgP24FsSYns7Xm8xSZoCsPKehDtHikGrQLaqFNbGcx97oEAYjX3QNUUw1smyMGztJtsFrgQF",
  "key8": "5tx3Q37KxV218yZxqnjvKMDmQWd19TCxTxWMhdmaG3E8rcjWxKczp3amcMLoGFqUwWSTFTEu4thqjApjeGEXKetx",
  "key9": "TUTCdwRpfFd2zCAighnkXyfCmfpXC3DoASPnfkdfNpbzBkG9EnCQpiSMQ1H3rLB4aR9Q9LVrMkRFVdt5htaJfQg",
  "key10": "3sto6rCjyJ8GMzZ6FBKmW54HKHoKwwhgK5zpRGM4B8qmBs8tP2tswTgmVAGPxW4SCUQx1Snjc1M6b94DwCX2ixNV",
  "key11": "5bS6smnLNDa5upqhT5NJpULN7xCXJiKsvDMnVsTFtdt74GuJLL2oNgwKarxm5vUHYuhXi6r518iMbEkTyCoZHzBm",
  "key12": "DnT7FbKzKFPXUpnTviokedGNV9BVekSwjqxLz1gmFcghuee6H33coiDjQswnEy2mPBnF7BLa34T7ZmB9WsnjwfN",
  "key13": "4x18yPdyk8CHdzhK6EZqWLWj4ANMDDFLzxEDJjzNz6R2aAER6gWsc3jviQjARKQ5cgQqTmFdpwAU7v5jqzDS6yry",
  "key14": "35gEvx1rwaBhoY6kCMCUtRoH5gc8PrRy3Z3hvVuQ5eDavw2WhitEYSWERXVuvSA6aB33FcnLWvHrJ1PAAqVFNzj5",
  "key15": "54oKfzDRQTWhNWone9k4UjFpDGcXmnp2kqxmsPXhfEBrQmntijw3A2e1a3jKL3La3bca1SXUks75ybGsJKUS3DGg",
  "key16": "2Ppn7y2pwHaNrUc6r83AssRuzKJv7eX1WoZabHo6T9GLqaJjGmkZWM4u92CHFcK2NKcmFWs5HsjeVHXwhyzxVnVR",
  "key17": "GbV9yuK1QRY5SGgGHg363oHwFCodoMzANSTGvmbKe5wAtSFCBazJ1cv79GuANoAYoou1KTnmmQVL12mt2DjMAKP",
  "key18": "5HTUiucjMEisVSQKWWoeEJ48E7CYBw58HTe5a7M4iMzv6EVASh3YxmjP3rpcDjZxbgqip17gPJSeYmvBdjvhQNSW",
  "key19": "2Khed87JcsHrmGX1BoSxAYohkbpaw8d5kxac47m5GYyqL3MiV4qEe15B2moiscroycPjGAdcjTWfVagCiopQxqtv",
  "key20": "5oCxjxyMkBte3JSeS9FGcNpmYaNeBWChWeWFaZVXcnb9F3nFmetFQUM3TfFDZZTQuAR2fPga9dQxVqEb1NdfxgGB",
  "key21": "4oqGob4P2opAD6MFzES3GXCXFYPsaHzHxNDb2BeV7UGYD9u4QzVBunuQ2KtJSg27SWXCbzkwGgXfgj2hFbcEbjew",
  "key22": "4B5zP82CCXVQqqbV1EFiVv4ifBXNZsfCwGaw9AG8Yqej2sGrMiE45ofnqCy6RbjJEBwLXPoRAHWCyZGmNrCNbnDL",
  "key23": "5zrkHUcsYsatzfaQddJNbtdMn2yPLiDro6SH1KtZTYwaB8nJ3BWUNqo2vfsXLDUmeyi5qW3BsLmEqmqx39YW1a4t",
  "key24": "4GboH5izUqtQ2tMF8USLuYYxkkECcvAkwCwtmosqWUZ15DhmJX4VTjVGXDLnTQDybJFvztV8uTHiFsQJGwdo8g8Q",
  "key25": "4u2b5xWfXmFCQfVdMmNvs4kaxgHV6qVtZshxAkZ8WW6ssaa3R1HpxsBJMzGknsLYYHkJk8DPLnuBzZamRhHsBXNZ",
  "key26": "DNWEbE13fWue6SbnBe972GLukihewgT2yRDsCx4YC9xwXVk3j2d6DtarXTSBV19sTjGorUq6QFBCtjwVz47RVvy",
  "key27": "S4DepW4pH29vkYdqMqD8Ckotdt62giPWzxcxDBMCjdFMbN2kgtJ6kophrw8v8QTtq6RbHxuuEccarDmNJvrYM5n",
  "key28": "8dpFqGWzo19xjaUMZtVJQ5dMkd8QGrrcKv7QSrrBsjsbsw7TAZLbjaR1JDd3wRfpkhub5p9yc3BBbWYKL3EhcRd",
  "key29": "4J4rWY2yTBLEueA4qd2zsxkd5HNZUF8WwdgmpWveLeJgS5f957iVJBUWscXXncGn7rLfuf8JzDoS89UGhS1xF9QZ"
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
