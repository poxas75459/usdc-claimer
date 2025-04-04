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
    "4TWJPVGcuyjrDGjRgsKU6opqih7nCvjVWpqizYW23j6kn5tmxrVfkRir3ojQeVShT5ATVrS9UZ9dvXiDVAnXySpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sFB4gFXifnGRWbomHgCxDaBLSRop1MxcVprSBp3jUYQHFc7zdJNuWdkw1d4jPvPggqhwWUoEETgSrVPsw6cwcUo",
  "key1": "4iavvr3XzYtFBeFfZaZ7yHx5GCiYZXZmNNVnczgeRom5RLwSgd1dmD6WqG5CKJHXHGeVY5GSivKsmkP5sKKhaaeF",
  "key2": "xiU2LkDHwavBtX6PWKmPVrNgxgFaSCYT3B5dsZEvCdeesvgaU4HtAQPhexJM3uaMmrE8tpJPxKXyoKqy2LDjqXv",
  "key3": "33PuaXRkzvWrnSXvDpcSkabW5tkcT2BVXq9nr9oYgNWjsCf1Ax9whnq1aW2mxzGHVAYNPwEZaahbJdf1DTBuqqhj",
  "key4": "5wFL6ghMUwzkDSqZwAJ991CRptdCqdAnGhdkEEUhrdQqGaN3URGBfF4FyahGBEe8Fy6HGA4CTheWki5oY1w7Txhw",
  "key5": "bpEQjRWpnJXKVVGxhuguCMiQcJcj7SJKPPSYpDFrtaWDWB5mTFHEcczn4tenART12yxu3ejik3sT9UNpFeoVwAY",
  "key6": "4jGMBsXfVE63gvkhNgYodUiN5hbRiu4cVCDSKsok23Gmtks3wJFwSdDktmwPAf9C1oXPkFvUym5sevaHtNYLFU5M",
  "key7": "39dVqtgj6i5PgMWprfwTpQBCu1tC5RQJKU9c1kuWvXzjKU1Dbjso8RB2fyQM7h8KDkHEdga2VpFhZnBzwjB1rRU3",
  "key8": "572MbxjC3P8YWGLGjc67WXYVJQ6kgMqeDsCvZkHWN1TVmwYFma7ycCFRfgnwZ5XzXj2rFsNmQXmzov4DeVEsWTKH",
  "key9": "5K64XJAbgPGnEbwNWEdQT8Bzmq3t1U896L8DsL1LKyHaKrDiopS4Fk9k2ssFsJM33hUcZ2JQgA6HXHxuvGPCjeXQ",
  "key10": "3HbQHaLSUJ9HeUVNEsho9JiEhCUDfZpGoT4HuGVfdfEC6JVKyHquxqpMLTqiCsJsJUj3BW4jaiMEBJLfxknk4Bdr",
  "key11": "mMWucfg4VqNL5swoCjj1NiNQ7P5KfH8Tg4MWHUWyyGHki4ENBncJT77Zpw1fuYbzdn6pyLc9W7py4oh81SLzFHY",
  "key12": "2xNwS6AtCRBjFZ5BAYDKi6455dVzWmPDUB5BTham6FKqgvZaCCHbhALiZDReUWMRSBSpsrfViZ1GjnjyHZVmiK5C",
  "key13": "9Rz1uBuT9745DVoWxVJ6JhDnWwEPT3aBRi4JqCXm1a6H2o5GXwhgmMuAqVdN3xysZpUtjtyDYVt5M28dkLQbFod",
  "key14": "5XAkxV6wLTiuHSUNKmU9noWmRr2jLdtgF8Mb99qzmmb8KtVK5BDFecSRib8zpwGMkS3Fvj65XC5PVX3GmbWcX15r",
  "key15": "3DiWUjSzxiFun5tSHREFb7dciby9hxG7YHHeJ1wy2NmBoBBZ9FqKKEuoWXZRLMSSGY6VefcqFxtarjo1pzGAEJdX",
  "key16": "2Xq3u4Uhxv1m544f1K54w7KbjM5Wu5KgYJp2ErcvVk82zY8KTqmDBCKcqcM31JXNcz8TYdkNRyd6zxLrw2gHdmMa",
  "key17": "3JZan1ikCQjCsq3sYvto3PEG1gA4HPv4WcoXidDKhzFAraTDf9RXrHqqi9nSvdopkQM4SemoA5Q53E2tXXJGLh7B",
  "key18": "62xUDjwumPA9U2fNXByqBkkoxbrDtvokb9d8yDpHJTbMLzephvSRtg96pBjnYjLcoyRjgmbhzvXTZg8BeZuY5C2U",
  "key19": "4UpShmhyWxF6Gk3WhTAGFth7WkFjt9jixEm4QPG9XL3y41WZoA29NSCrk4ddMJT3h1pcKmmD92gNRDmD56TJaKw4",
  "key20": "3jW4P8RziwYJBNd2aTcDe8nvxCFP4qiZWx9kuUGyEWHzczpLPTJfTy8yQetsFPAPFfps95EbnvYotfD1VLQyvUvV",
  "key21": "3KDXaX3itv4jo5mNhqXDFUCWNqdLygkc8yM5PsNgX4mLq2R458L2wzHAUZJMSBG5sxgxLZZ4x8zQUxq8eGrPsqXF",
  "key22": "5Eok6DAh2xTXDme5gyoSE1hFbKGZDFbJg1AdgYigeNhrSKQ2GgHsbJpj1nJRiugfYucLQ8A6dfm9TTJysFBoBJxe",
  "key23": "2oABxZZKjmUBXTHmpwKxJFvmCBMTrUGLpgyStB5ta6CnPUjwp1j5XFg4fzjLGEtXsF7LVAicj7dSMtT19CQWTjkZ",
  "key24": "3DChWjYP8adDoxKBXMQybteL1EbJkPBEeR5TdG7AZb7ithyUNd4zcKW8YVQujtcKZdmoHcRzt1vMcCQLDknjr8ka",
  "key25": "2xVq13a3zTA6PhQtaeisdQ51gmDcsqHsFFrLgMX2ockf5Y11TF9DZZ3EHWsp9roJnACE9QxqCYyQczjJn6HJo8GP",
  "key26": "si7J4PDQJUqxLjmiFcAdMeEKaXSL36jRkde3rGprdo2xA8rymxvNjDuGTL32EtGVc3eRpyeCCu6GvDfoGtx7kDs",
  "key27": "28PURvDP2aA2pVTWCFpCoNHXRtU18SC2vWExX3DX9qA31Q5ZzVYBmvbbWSKVzPbbaxHfXAaaYz5WDbnm5MfppnNt",
  "key28": "31zAVH2PVoJePTFmXgBDWhQV1BcWv6P86JciegT8NExRXPndXFjd3JnpEwDNDPAtCELQvx4riNYxb1K71z6rnYkr",
  "key29": "2kf7nU2SB7iKRZ9ib6DKLc7AvMynKNgr3yG1GogXP3g1jGvNcj6jFeNb2rN4H2mjmMK6Z5nrSDLvxB256nf1uDKc",
  "key30": "4E4QDdBCUTHxR2sf6Nu2X4KdXYGcq2YzMEocFa5Mmzv8gQgGLEp1JA2kVv9EAriZgvhFRui39NydLkWnP1Z25UGP",
  "key31": "2NfY2ydYt4KM32rrWmkdCrPHH8WXaF27tJz4uo8Vdr2xQM2ZcSNChL7Di75vJENmjaU6saggX3dHcti1Tw5qLkFu",
  "key32": "5VqzFgKsw53Kac9FL5JkoQFAup7769PF6KdgRsT34dKMV4iYx9dyP9zUmhALx3D9yrnP1NaMey5g71bbKVmb7MtB"
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
