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
    "2QkwniZsfUWsxTXAFg6RL8qqUaDgusUnhV5yXUSusoRJEvS49SX2ooLJoMBA8Rqs5Ne9CNfD6G4AkSqtg8C1T9mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294FUZaE4Z7GXc7qakbkPfaGiyYepACdZ9sqpXdZA3qUrutAojDY12dAinu953pxJ4fBwMaUpuUzDmE7bZ9fR7kW",
  "key1": "5HNSBRmTPT4DpHxZkpfcbPddNt4DzKQ7hdvFH4YP4rFZs3CG5T4rLNm7TQeDxAqJ7B2FCi43TysiGDadTYf9mr2y",
  "key2": "4xvc1xLD355WQcrszqKTH8rK2HrndMrhRb9b5rDmENWCbi3n1i2hVsz7ZRaV87KFEQip3g5SJJg6w5wAPufoSkKs",
  "key3": "2P7ccy8aX49TgkK1BRKDn1xB68wVLd1sp9w4GgJJzTfdtpsbWRAg6mtRHs95aTv7DZdCV7DkraqYrELB6YEHCRPM",
  "key4": "5poqKxZJBwrF8VT1cURnGWN4Gxt3V99ehsWJM73LPqqkW151AL5dYoHsna3FWhVEU6y4r9YxjFRdXn487kEECCa5",
  "key5": "odrb1TAb5Feaiv7Hs34hV8i3eRjNKH2r4U5zWHsN5AFRJRT1AxqCTofXTfpbrV7tEczN5B8CPSowWHYpkRwUDhE",
  "key6": "kWF3rncUEcLfcGfgXnRWWVRHuj7skgiJed5LgiEFL4LmocWVV1Wajm8aBazsKDyb8mxqEzzw1EU6LFBB8mGdg7M",
  "key7": "3MzvJSqGA3dxx3hc2DuMbmdxNa5futkTv6Lk1CUB6CPpgf4Voo4apg3mTeYCNjawWyMiyMJA2FmXbgGVSRZ418XY",
  "key8": "WsfYrYSABWndUN94hPBxbxmzcRt3FYFP5e6kaMfQ5RWJKZVwYdnCkRnHSA2LyKdV5ZwvgdASrTZz58oWWXqrkM4",
  "key9": "5LdrtuAYEL1ga5vb7zvGyoe5rXyffiwqzzJRMZZdy2xE1NsVhMELETFHRiSjnNfpgrkdSWo5ahtB4SmuFdyySgaf",
  "key10": "3p4AEDX5LRuKWKg96xMa3i8aCopVq5cdbLHahZGGGtWQ5seEdeuJqRJpQmmT4uriS8otJTmhSUo3x8qrD7irDpV7",
  "key11": "LNF5HKirP1bk8moqcSux1ra9Jd4o3A3QfVaS9UoCmiMvwZw8KkmcPVVcRHxqWJwJV3v46k6Xvbuu6sfCGDd4REE",
  "key12": "qcFgfNWWTcepVqY5izwTjnqHrJ97HhmRf8grJyVZAB7mDuF81Khwv3ZHHHmBLKmP9vy2qTrc37FHxpyaFMeZuQi",
  "key13": "RTctZhH47yVC3TxjjQEzmD6Uu1XVZCHwugUEfmdwsV4yEMVGBCMYXADQXkKryvbZfDSmfTRNZ8HUTyaDygcYrmJ",
  "key14": "3reSQ5vGHtZCJngi5hn6poobg1jxrmaUnDcAvkGHpEweTxtA8NtDKjWCX6CBUsUF6TFgYwjkr86Qf6uuKZ4uA4zQ",
  "key15": "5qpUEkM5cT381aQnhTtvwqj9HUPSzr1HFBQYKvUm9NhYmTKACNMUPyn2d21nStsMbCdtnpF5TrvQhNqncnzuKs3m",
  "key16": "qovwWJvKRPWHPA8Qjamj2eSDSMYUntWEtNv1zba9ffFvkWbX3eBthyDyBweWaVy3xFJFbTr1ZW9kPTVRWRz9dEs",
  "key17": "SyGX5sKVWSCYs8MLXVrpZfw5N7PQSfahzNs6yFHWpDjn9dgezDAFEWtPDTZYf87AAvwWg1tzSCre9twrEJQ5JQv",
  "key18": "QMwPJ4e9xTyNAJUGz7ctDUkg6Ws6uTcWDm21x8RgCAqJVDdn1qnyhMVq1Mh6QmVgRYbnfRTjDCMNiduM1uP5Uh9",
  "key19": "4C55wHNKShodruXNFUvA38TWGM1wGFzdfQ8N4YPBqa6vTWxGyRtxcaeudwvN77SSUzQtPBSPZh7iaAvhu2B8iSuC",
  "key20": "4yEHtm12rhXrRHvio12tMS1PJHv4afExkThmZYQF83jxggGCD4K1yYAfJsT2o1EqCJVRif4mh17KBrSFPP4L9VyV",
  "key21": "PEAc1an8DnFbXFXBsEsNUTLCogVq7Yobd4hu8cEQDnVACsA5qdiXVCFdfpFeyQQpPi83NVrThPGZSeJ6jxunGhk",
  "key22": "3N3ewt39ai4XTjrthbCNirCbyb1qDx9wwaEUM5sk7db4G7ECjypjkHZZvQb7FxSTEjvg1v9FKuX5fVi6QDDaZEWG",
  "key23": "4drkdEr8QYU6mLTDWg8UXyphn386vjCaeeoJAH1TPQiySAL3UtnN8cbVoFPh2e5C4A5kcsrVaTpr2wWr1dz6x9n4",
  "key24": "5oVP7LkY7qsxbvBuTkV3faMC1BniZpGRphV2aJfhDhZHbP98ApLvm78BXQQbMRoaGW8f1Cr3PRdLPDjzB6wa7h1w",
  "key25": "59DEJ5EBD28FNnzkhKQe77bHobK8iTib9ttEHYZBvC9866AM2siA9FqbQ9j9UNEtLBGsDZLZVwrjCS8Me9xetVpx",
  "key26": "31Gi3CACB4xVCYnTX4sWXCgqVEUCUWR4r6o1VP5sVFojqUXGiqsu6RfyuNkdWqkpbiAEZALo6Tivtnzms1FK4SbQ",
  "key27": "5JDkkCCz4bsyPZ45p8vZpPLdWuaR4REDcwTrVHviedKtU666jhMqxNnM8b4ikKyfyK9nnZVMSXgH2WyMJXCbuQek"
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
