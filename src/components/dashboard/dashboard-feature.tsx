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
    "475vyxZrtUiDsQ59RSjZv19pnAhVkenP4J4AmcTYyFvUUYyUBUDCv5o7gFzah744CkXj6fCsBjZ2UpwApWawvvYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bhPMWpNe1859azGKiBTHfYF9Cjgaryxo1goaWpB14TjCxAE1rBJz6yUTfVNxgktPX4Xx3tGQck3j2P8k9KTRhd5",
  "key1": "5StyRK6Ujrj7GkkFciuaze3HkmxVAvgSQWL1AKpgJHEUniLuVS1vXfE3ScMnSUmXZid6zShKaYhtLpzDRGsFa12f",
  "key2": "2hu55TeuLG59bpt8dmbsbaTjB4deD7zGXAgp2MjpayyokQcN3HA1HWpfi5uwFXBKPUwANjPFDzjW5EtXa2VN91cF",
  "key3": "66F6uHqw5gQychcc7KvDMEFohBEGLXNJEC2gJ1toSssoTEz63UygS964s4bYqFaZgiBqmPUz6KeXPfxTdXuhEs7s",
  "key4": "2DEvuup22J9sbkQPiUyn5mmazJGqmZn42sjwma8NjFc2uYXofcMgpQGcAFe1msVjwAN4Fj1vpKAjcmeKLW36bKYp",
  "key5": "5gmWJaqxhmRnFBgmn8VvuJQfG2D3W6XJ1pCcYgAic2Q9HTLRoMWPphzngRbnUGeYzeFn3AtgzwpcskAVSxbri6Xt",
  "key6": "4iQihwhJJgAP8U74yHQbgTENB1uZD1AS7qqj4LR7JMtTNTFU1fjP4wtVvgNqtK3F3QHPyqsuunYeRbXDpdsMS2Yv",
  "key7": "5NCjHKyjboS8GJfPLb3sLoSa1e8vcK5rKUFxVjG9Efzdm74CUo3zqgM8zbuFXs2P78egM922rrpJC5tutdTgVTFz",
  "key8": "299Zz9ozzJtZYAp3BZqVpChu4mMrJ6RVMWsAVudJoUvb7EcyJxzBxb8yUWqw3QpbFNhrHsBWi2mgFmVwFiLt1yaz",
  "key9": "2GzZ9iuMGn7fsrUi1Zjj11zudCn96rHtWEq7vg5QNfjGVJ6sqz94EJECmXas8CxHwdQU4U1MjjQihp7v7vWHxg4q",
  "key10": "5pdSdwCiboyvFLyFbXao2aj2U9GhrVPYnQUA1ys99dpnt1f9FXMpjV8Z316HHsPttMy394uX6BLZpzp3gK79qxaC",
  "key11": "2hzaCkieZ3aEPXwrNfkiArzBhgv9Em9HE6RiJN9VXgBdvvcaggNVEyMnRAzKeXwpYihvvmbn1ByT9V2gPA85mPUa",
  "key12": "aAtcSqGfFVKtJ4zZ6FViD1pHBt5MEYr6SAe3kwFZzkVHk3QT6L8quov6T9AB9PhnrbtxqKPTiLi3be5zCbuRbCT",
  "key13": "SaCnutSiiXNzRssXrJayMJmUVB7MUxz7BJvEW9Qkh9XKCNfWW2iaJeH3pJH73GGBP4WJTKgzEiXG2Mk53Yc89nY",
  "key14": "544HUGunCB453B3MNiKHD4jhi8u5phqYsUPpWGq9PsN7DWqdzC99BA8rHGJBcNWQcdmZEwmYUHXCHCDCoY2t6YWV",
  "key15": "2qxn7B54ChPosi24BNYNrh3tkb9AnrV5zBtZUGVCjL1vFaWStuh2hzJMMCWETDA6gdb475hDQ2o1xG6GTar3CrGu",
  "key16": "2cAsy3Cj7qBjR33tQcwvvhyG42QGGZ7umQsSejcD4UgeWLaiyHjXDyQhUTmzqf13JGUmtfjHgXEEtDYV3Rn1GKfJ",
  "key17": "4oREo3EFNhjnMToirye21ZLjaS2bzumj2ihzkFCgks9kMZiqTyTF36Fx8PvRU6SYxkvyFJeM4QjG5JG36BuLmCx1",
  "key18": "4BJQK368LWGMoQtsm97EWuVzYbwY86CoBekXYiY5KcFjzPvNmxriwW5JHtHbZ126UeBzSwKFm24tMsAPQEVhqjUL",
  "key19": "2N1g7cjb1uFLnUFszpKPHnRtJ6Wqh2EwGp4zjUbfzdK8GUc9Wc34eLbrP8z5HKq4FBGDnWnaiBkEuf3PpSQbCtmK",
  "key20": "63chqX9mBgcz1FE6SYe55KJbgef7to4pBnFbiqgaHiNc3S5od7HzdSwFVuVcJky86zJjpFPxX3TMunHtyUQHV1Uo",
  "key21": "gKQjBE6yYH89DFe2PHDHirTeJJeGrrC6K5vyimSHVPpqJHjPnLSiB431GCpvLLzhKK9rgR77JKhBFrNZDk1xQBD",
  "key22": "2cFTDvpk9TEjPX5PUvLzv5gWnAKZztzdtYiyXPxbjocbKmyC9ewZu8Q8QmJdT8jfxCcLs57Hsob4hR7aCTcbXPvh",
  "key23": "2Ex4MwAgrXRX49iU9gn1YeqoKVcH5wJvbNQKBKNsheQKiZCEYm6m241St8cUJ5n8UW5fqK3uQF1L9uGuZFdK329u",
  "key24": "vuENpWqdYY8PBKyCuBdSzdpKFR4RXy4cEXemJrtBzacwhf41fsyouWCBM6MKXLCW2Gf2JLJ9GzhvcqodyZQ79D3",
  "key25": "2WhTSi4esCsqkdbaDu3mrjXMiT3Mi1gJ1hhWMdSRHQSU6McS8SNhfUystbu5k48GRWoFaeQaCNQZFFVyPYAkJm8Q",
  "key26": "3kiismAVFennyZ6h8NtVq4Wq4MCk7js5KofR5a5ywqXTrj4NeSoQ4htCoof9aWQ6ABVh3Yki8acEsFiRxYKJeCRE",
  "key27": "2Rv4ArTZu6aLDdjYv2eBQBqESr5nnwmMfbXAMYN5XHCwVk1kjM92EvUuKKMWQMdC2qWuVvV44zb25Bvh4xG2Rv3p",
  "key28": "5k4sK8uXY5zLmbhPVbWmHcMUzTC7F42Ey2GWc7UmznLvG9bj2L5Yzpyj46mxTxaXacJPNxvZicjSVJ2EVcDVYhBy",
  "key29": "471Hogv2Y4B7UT5WgQCGK91bRiZWU5ymYudsryaDpRjE1WXaPejC4LJW4CqMMQzDkqRq4kWggR82KyCLMibQrq1a",
  "key30": "4GdB4PD1zg67b3EVtsLZHeJG5HmnnJ62CUQ9FjK5xyeQeaXjX9QqBsF1vnWvFerBPomSD6C8twiUX4bkQVHaSbgH",
  "key31": "3iVPjcPuWRDf8ixTJ3E9nvhvNMzdvLaGTcpv7w6gQpqMvGAN97fBV4vbVwPvnBkc76RT2wFf6hiJfFrqaktA2XDF",
  "key32": "qZkN7nxLcXkqbgt4ySJbFeYSUH6MK29aFg8RwfdRxLppgga6ZWkLH6ZUzeY42faD6uD8mrxGSFKxcrpSVXuHBrt",
  "key33": "64NHDekJ3kHV1f18SKZt9eM6YJxQEhYodaBPPFjb3gSrRcuwoYCk1sN8hewF9dDvFN2EL8H4GtEjfUEMgPUCu47S"
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
