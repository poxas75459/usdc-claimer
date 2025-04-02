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
    "9HUAaThLKEmjmhHPigHKdk4pBFAZGjCCNvcF9SmvQdz9pLyaH6MbNZBiv8KqXEP4cC3Y4vCkwc8mXjzYcmWVNMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogkWsbcALYNiyqWA5ydaY9VG9Kv7NeX4mUuwNSDFX48PeNKCToDjakL1t4xtCJHLCTAZbn2A1YsjrP3NkK5ccNd",
  "key1": "3L9XiLW1vS3Y7smwj7Frc1dfMgKv54UmSKPxTYBGKSTB2MBdJzkM9f7TPup6GrrKnhiWyqiqGcum4qDWWX6Do68e",
  "key2": "iRTJHbBxoznJRRHBn411dA2wJ8Tp5Q4qUcbvUJNNxA2AVhmckTSUN5kPtyy1yMuhCwEg37Vt9ASypiKT2rBwNxU",
  "key3": "4vqakT2pxSWQjyxzB9FeHicNdxbkWJrQLg8cCs7Rdt9RYXWxd55QjxQYAK722jKFaPm6D8pcjJFwTRMNvzKKCGDV",
  "key4": "65DDNv3UGo9YvGiEf8ghLQSsPoVGymHtEoYZ17XEDehiGs52Zen21bcoD9yvoj94tad8qTn7ws47naCbWfH7UUhp",
  "key5": "4Lx7i452WX2AScYWv2gtHEAvoxQtkArX4LxnVED5mvVUANTbxQYnXr5CyMyYL6x4T4Na6wj89naoEBdamfqHNod5",
  "key6": "2XrvpfcWaHtuNiLcoYoWVA7a22bmr8vPAx6hn6VWhBbvXjkn2D6PWALtKck8bDzm3uRZVeBRMKSkffTc4S138Tvq",
  "key7": "4aJ1dXGpyMoYbdFiMBkpB7rA8UGMrPW5xoGb5c9fJJJuZrGQ1J9QqVQAemMXsapdmT6Q5UWUDX9QF2J7J5WXhAJP",
  "key8": "DYHa3QkCCBAs96GsxDHqQrCwAutoR47NGKSVsHQ5kVeqhyVkXHF1yEXFRH9KXxcuDxB8EHrryCXS8ZDmnkTZiHP",
  "key9": "9PhtwPQYboy9ESTu4eggoATWrHqumaAs1MA79GSRqiV4uofzEDRnkNAfNtMXZdGjoZp1NWXD8FHg6nTcsWgY6dE",
  "key10": "5SfYFhdktMYAX15egC8PWYY3DDb9hzzk6yoUiZrCjCBPVYFEw6iZ36toVjrq77bXtwaKchGXGxcd5Kxj8wTEuhjb",
  "key11": "5nRBvhi3zLvULMn6sV39ebgVdMemgWLY2xCM3Pen7kCQXm8eQgdBbJfuBVcaNMgKvrjRo921XmQNooMVzKhqprcM",
  "key12": "42uA7PdwPJHb7ELkEZWifjFLEydFgNKSpg18kjUzphzCd8pdyJjzhH5qK4D1n2PVYrrwfFHu7WifyxvhwRoQEdJM",
  "key13": "5mriGLbcjng2dygBVFw67vKp6PReoWGjy3hZHXuAsLA5777LLUvDAmmnaFqsrkf3QdCNnbAN46AwiV89Bxp195xB",
  "key14": "5LZDWi57q2GH4Xrv9EL2WgxTWx2t7PVMEMKDvBC6bsX3UemYennB1FGkUzH1WP5ybeeDcu9z3CpYJUNPkkh2G4jy",
  "key15": "4Hynjis4QbcXsJHRn7GvSEG1McicszKa91sYnWLvHRdpuEVrssQUDPbxnPGU6re9p65Sso44y2E9NEbqWS8ANKzM",
  "key16": "4wEiCrhJZkXpykxnCsyGfx8yNMStSZBadaYjG11X114AZ2YUy98pG7zrwoXrv4di6sB8Tb4ZAGnxHPqs7LDRKSqn",
  "key17": "5sYka2nmn4HadzAnDfVrmd1d1nozugP6FyHEafwTHUizb73QwbbR47joVQVarFphXksYsLnot1nKq5qFHCSaTZ7x",
  "key18": "55gTFN42YEm3X35i6i5Gj6Bwg6GqStdxejGp88UGdiC9YHkqVaW2m6TmC33sAWyQR7NzuLypMrd68gLT4cNBzenr",
  "key19": "3Qzjejff39XgoYtMmeoKh5uN6kYUJS9knjXYPYpKukyyRwsZSvsAuQf493dFCjf1XdsAJNNwWmiuqNZViD63RhYD",
  "key20": "5xzVN5Aij4yGEeVSH4B5qiH878KW5Uf9m8QVwdEWLCUPXnLywPdkzspAXNvD5PNcPxAe4pij2bwLHMgJve5iQXMS",
  "key21": "58LPyUQCcfHEnAeiob2MVvxw8UjnBUJpjE7m7x6kkdANbXCL96U93zXEUi84VPXD48F3FpY5NNhZqFniPq1aXdoF",
  "key22": "3zYrfNvMP1F9MCeT3Ksek8G7ka2jKveaF55cmSFVhm6nvHcLuNRm1hF1NDsdd61buRDnqD6GVfMp3xPPEyYvtmsd",
  "key23": "3zTKC7gLthZ17Xe8Xah7uqw1wZhHxKaUZCL22f2UiLhBCFPSWKYMiwvN7h4fjttGKPNYFbfEZzMeZURrzw2Poy1Z",
  "key24": "4zzSm542SMzCmLBgBgSR9M5CAGdG2CCvwH2RzMsce6mLQKTU2Gyq3F99cRf9uedZG4tm1wfzcSA9G8pVfoEp2Rpi",
  "key25": "2izS4Tqd4z7Pfu9pPB6byUQQNuifT1tLJeHhQ725Zu2jiuNvYVQuhDVX63n4btsDTozrPeH66RpeDtLG5TT1doXM",
  "key26": "5gFTox7KMEL8BTL2yfVNi7aB8oFkgy64KhfgJ3D4q2biFHW7iK7RNHBuGPuEyie6XqswXkhWNC5ztNRfVNKhqGkb",
  "key27": "4xJM76wu3iPScS3pYpNgj5meLAmUNBibfE8jD8hnjL2zUmA2VYZwe3Uojg6VaXa9bR9Md3iYZdN2n3D1kDqNDekh",
  "key28": "TJtuTMZUZpYMD4Up1S3erGeVsWK9JpJhXHKQenHzLCKRVzNxrsb9RHJQEHc2T6M9uGTQQwnRZvYHZaXVjhnqWbs",
  "key29": "4o2YW97f2sUPYuf4iQ8rCHoWDHEnHDZHGNNT8RNJ8nSYV9bzZg3Ppxzg4JCotynPJT3WC2Rxp9ZB4VAxYmFpfzLW",
  "key30": "2dj6dnhdic3oJzuZULrcFD3yQfcriYjyhsQSSRPFNysrirdyvz9fixefaQKrxtm13xpXojN8RCQwUAuSRsKhFAwF",
  "key31": "1Z4KNo6S2YWZ5QFkzENQYwj3vLSuGVfJq9KzArY8ABLGym3TfBQus1QZM4oSHYaJBuuL6AHxuf3F6E2ZDVb474L",
  "key32": "5GTzr1DuqKc4MQsWqgQS47Xpm6ZqwJ4DCzmSfApVYoHjT3UGY5EKGbxCjUmLktVesUhMcSpQXa1EMVCiAro5x8Lw",
  "key33": "29NVGDVFgdS6JFdgnXnSp5rbuWqv4R368zd65koyW4bPmjJM7McSjjYMs6DbDrwTBdM4FKdfkQgxENRMiRV9y1Pg",
  "key34": "ynoMfDNpFRUTe7yCZjMz2cXzuQNRuZwWyKoUGxYmxRpSMeShnVdiTYxGzHEhGo2Se5FbSpAq1fx2sWTpMz4f5ZY",
  "key35": "3CmMzHjnpq7m2aStZjEi4fTgyY3KYbq9R85RuDAS4gxRk3LvVx9BeUoik7RV7sugFjkUBYzJtazyVXHTJ52F75u8",
  "key36": "4xbbdbQgNevyQG7X8Lsv4FkUmEL1bz1dV8kfK1nrBQE4nSQg1wBqxHoJYrUVR3ncFCHYtzsJohhgBGgSN1me2viv",
  "key37": "2Ycgmh7XjEEbRihvpnbtuhW2D5Gq1ummaUtgVZRPUeDtuSnLwCGZU18azGtNKTf5jzHfgdtwJRBXZfpH3WndG9bb",
  "key38": "5RVpnoRjprQwrJKP1Rtq8UetzTwiQZ5Ecxzc5EH6AnhqzGxcFPzJuUW2rqTrngZ7efJNBw5QHdNf283BxJqdYMZ6",
  "key39": "v6LRZXf7A5iHDcqSUEzcKD1TZEsrFpnHyYbt2u5WPp1Su4mWcwAwfceorQpsQ24roPy4NvyPsQqinSXT3J1Dju7",
  "key40": "4FwYLmjMeYRdPWDYwrhYP8UDD5fnWLxZZ34E6EGcmPXAHgPpRxR2pfSyuduFEzTpB1GMz6wo48zL2KNPPNUMmNqZ",
  "key41": "3VCy2egi6sEpkDvRCKoNWcwh7q6gZdGN74V1CRsBDkxh3hZLQZXTg1mmsrGgJLyh2EQaP32DrJPdgmAUiXRdNL8q",
  "key42": "4zxSiXK3Cem3jHzN82YP3ewhMPs7599wFaDMkh4Yr1Ubgmb13AVafJ3ShJmKiegUPdT14jMkjeSfRxE1nYw8Q4LU",
  "key43": "5MHN2DgfeVX5BS1rni3h7ueycKTXqc51ttz5DevTA4VCGSCUnXyo4KsUbHPGBL4ThescFjftAWR8okunH8j3iJAe",
  "key44": "3yox3RhFA3Qggat1hNNJgY1BkpMBp3isdorzxE5aY1CqKwogp7wW5QgjUNks9t8PLBD5b8mRPmDAw6EdXK1mZW2f",
  "key45": "qcoWLhvCfYJ6dnTHD9fGJgcYpejEG173LEmg92SajShsCqtdgdL1nDhMFXPVhJEosGsPHSpoF1xmSYsXo4wsGKZ",
  "key46": "5JNz1neUXn6iPkRbcA95XHWmMXCAkuYqhYNDHU3hLhhbB6F4j9aaTjzvYHb5tcj6gGdo2JC7MJy6DULEQhdxytRS",
  "key47": "5XtkQ184PNRWb1DD8QeafzrRvf38KgY8jN7YHYDWBrfaDH8krb9C8c61PbdgnChprdSTonFP2mGABkScDb3GwXcX"
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
