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
    "b5MajkaF1ph9BWCttkyJaxE698WcyyATFPAXJ9LdGbg1sRmXKjJPJeWtUg4RPCdKH5WsRxYYt4dSnnT2MPz2vWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2f3HXs2rte58nK8YzJkEpvC8VgVSqcE75f7WTLy7bCPa2nXUe9DuALBGzqJPb6tqKxvSanc41iaekxUPVX6j5o",
  "key1": "5TjRcq3Ciy5NgaGnBUcmvMQKYungGwcgHkzNVoTAKYXYRXKTdhfRsBfwhVo5RtB9BUxxQSZn8SjffWGc5F7s3maB",
  "key2": "XDQXP8pieNDAx2UtQzao4fXuEBs69w1CcCqKhDJgGkeK3pgnbMXgFmvxun7hEJzRUaEMtfLYGFeajE3d8at52XF",
  "key3": "5n8QQHgTpCtVCzTnGbSedw5YS254aMTwWyJRsfwXm6RkMd6rRK8TyGwubcu7CjDpa9ftmRyN2dbv3Bf5QkGNagCe",
  "key4": "NsAf1Fp7MqP5mUp7zkq9RmXBg74DJJuxVS66KzQkEbd1NMS45XVLWjv64mZjiYQZs65c67P9iWqZKWsK1j2Dpmq",
  "key5": "48wkDUQEr7GDnkErnYtnQAkw37YcWubvEwKJcTqrAF1gF3GvYQUKhtCRzLYELQ8hPLv3qcek7MB2hJTun1AuJVh2",
  "key6": "2K9r69DujtuG6HLiT2DCvzPvyisgLcas7jnzHfv9vWT5ocVj2taZYkGmW31ykgWUsxuNF5WUMuJgASBwMvMTVyiF",
  "key7": "2eiAR2MEbKcrm6XSozqJhqQzp5uiAziQJzKHF7FsaPKv5Bi9BAurNouuVpnT2oP5dkmreCH16jJVWE5oACGVFqJ",
  "key8": "4UCRRUY5FxEzs8D3AYsJpBJj7eEjGMPdMJAN3yfPqdN9kjmazwC1Dfm9WmiCpqjC2RtRzzaitzuRhVe625dSwZVG",
  "key9": "3yZyL8ZZTwgydsWtqDbZ3zNJ7fXvEfwXBPE7yzgYXKRVs8EbqDqZ5tgVsM3Pmp3AjSTjPYGzTMrSv7WvXv1aN2W",
  "key10": "5jrJ7TEnThMsW1gfSt4mN1gPgedzvfYyezyempfnbdn5f1ZqDHrkxEifiv8CpqzX8RkeeNTcwAzkH89KQDW4MqLY",
  "key11": "5ni16pyCYxBAfRSi9RBb5C9qD8ipW6KXbCPXSv8BuPxJQrhjBiZ1WaKuVSTuY72bhFHgqfBXkE4dC9n4t7ZM3eBw",
  "key12": "4mtZmxdch38VxJ6ur9E8r29nZbp9niX66RU76htei27VqBEfeLpUcXgUfWfUfSCM45S8MDwT1RmgZRSyfFZoumt6",
  "key13": "4v83u5kBpY8oLNfDTon3ayTt87pSU9u7y1YBd8PmBSNncwiqobSHwRFKe89p5cXJYEAw4nGcT8ZN8icjXqwCaPAQ",
  "key14": "4RW3shWLghA2pc8nvnVmECzAfD4r6VfvHFLkFSwvyCyoxzhjwCDUC3PJ1D8fV5Yx5L6KzP3JAxkV42jn3LA9LT3j",
  "key15": "26NuV36nCZxaXqPv8iGk8faYDWsPr5uHnobJvxWecs7bzixr48jsKNNmzSf4jc5Y8Csucn4Wa9mkF6omPT39sMHq",
  "key16": "Rqs6VSsoKNNapFgoAh6XNPDGcnwJHZizvzEbVwCCUTKSNv4eaAGhgJjNqvxkykwzSy52dZdV52jTuFY9fLmZSma",
  "key17": "2Tao87aMQUUY12RgJ2WiBCmM5uTZ9QFxiBx63xFsfC83vBBr2hRgumvNufGQbUKZ7tfeT8a6awmqvgimUkD5iBU9",
  "key18": "3HMz1zDfdKVppMhxPbbc4QwN6tYyZnReDi9cUc718nmN9ExNgg1uk3ipsTAE8no945Qv3g6GhHWegX4DbGtU7XPt",
  "key19": "4K2KYQoDanCDprkM8CKgDPZsYafWgd7We7YZM1BA71w6Np9QV7Qfkf1yYFPNqwQ4axznP92J3Bg91D7z2e2624VS",
  "key20": "57BAE1K6V2KVZtyRxAXnEnGEtvNcx72v94YUFBJP2GDEKyvgNoeHnVNyzXqGUVC7MD5RNreRpXGLCfGVuMNfHBcG",
  "key21": "U4FWiKn1vov3eouHxeb2VUoH7v7AZrZ4NwSWwzkMbrhjx6nX73KUAKUghFjUJ5MWducTgJj8aLrLUU9RMRgbqgR",
  "key22": "5MrzAKp1EZXtBEAUm65PYUcbV5XcWuRNDSAoGZsvJTPwEm6HCwpsPvguHKSoHUtRENGDCj8opcTVNtYs6dnNq6Ec",
  "key23": "27E9piwvYpNUkbbgiQXaugsfX6qfkZcipi2NFiwCvNozGpoFTgjGz89T9r7U8VPeTh6tYvregQ4HLEe151TMYcB8",
  "key24": "51c3QUm8ZAKEQemz5GP4bYFSareYHVdTuQj7rp6iDwXPmYNfCnvoyh9EgMZCzUrzZ7L54HvrCTBsa5ELVbfZwxTa",
  "key25": "5MKMp8nnWj2m797nWwEe2rBkijbZpzL6KJzs2sFP5dFTHYvZKZovbe4iEdFiJHvK2pbf6s4H6GgFKZEeXx1Xyq6o",
  "key26": "2HV2FqvS7uzE48616YojVpRTZsEdMWyCYMnfZCEXCmWvpSArPuUjikmWZ7Ua6dGFr9k4Lo2BqMUW5UwbKwPtC9BT",
  "key27": "4A39u2yPVyUsmUsuXmK3T3bcoFUrR97hwycpmBjnoYkJ7UVeKJ65NCyxrNpDMLfSZYTahmjhXasvQChhRXs1qXPZ",
  "key28": "5kRZ9cMbnfUhpiQDncUUEBqfmZrmPk1e1ysyRbMPs4tV59ezC8pzwAZmfcCz6dbStmeGZfi2Bm2PmozRVZGphqCn",
  "key29": "QMyAEqqn2ApYJGhtW25CwJ51yTeE3PvSgNNetoxZy2DCwVLQNfKG6zHurSh7XLhz7VRGgNxhkp1nXhh9msDAD9i",
  "key30": "5aqkPmNVd1Csp2DmQw4ALCFHoTFwRBuUsWFgKnKrPCfkHFMK9NAdJU3k8PXxEKEXHvfyBTNLm9FqKkmYZgxPL22W",
  "key31": "5uZRXnZg3UzwHeTYPfo73EPWtNXv4TCQXyQRQxhM3fkUnPn7LfvXCMTBfsTcGRepWKZpNJAPw7Thwh9RhTjZyYq6",
  "key32": "63Lrqtd4GjcRLg4sGZEomxuhfN2KoNtnY9ufLWoYEknRGq7x92ih4brdM2MgNPmWihmgx9bngQYH2CMQj9gdiXan",
  "key33": "4gMfWMHqECj9r4Foq23ruLMvacoQhjBD7J2fCgy6ZLPvBoERsKpRwzjKsD9Xp5drhpceUamjGntjqw6ezZ1RKrzi",
  "key34": "ZBx5xGBKPxeedGREuhqKDD2AWgo27GEjAjdmsDCx11Zr8CMkr3XCj9vfcYbTHiMwv491NVN6zbKb62cKPTW6vMe",
  "key35": "5jVbrWnkFXdbKyfTWBmd7dEA1HHdfCGJyR1pPUkHvxRRypiw6KMi1Uo6pv81rUTFXae4mqwXDnnnLtsE4CFvT3wQ",
  "key36": "vtkYYGvp4aoKpremHfB2U5Utkv4vkLHyh5UTMKnJZWVwPotRuKrUQfrVTrhncVMsZeyKTyWzt6jgCis3xSYfc6Y",
  "key37": "3oBHme4dNQvd7PwaccozbwDiC17tGi2nDTmBBrs44A4sVk8XXSAn4QtxfsMYV7i1pSMLcJjWnYbSEoTnhEPF1Yui",
  "key38": "5bhBYzkZ557Xrmcfi37bJS59ecrZq75zP5XQBnUfVCbZvj6rq87JFm3ze771hCYSXzGup1UZihV5TKeXby2HEYS4",
  "key39": "4HPvyDo37QuQhsZZbjzkJGEvCBJxeX8yTcSadtxLzPgsPHzJwQmG3h2BhKdk7QX5jRG8p5NGdpXPj612waacHbR3",
  "key40": "2GzTRdqHEquNyJEKc34xfKMnxkDKkkqMVv5hod7MhU7E217ZmuMs3P18txELP8uMjLnBDMzu4pfVaL221Rj4bgW8",
  "key41": "2uiqgwNn3fCZ9sNW6QsPYaWmAm5VwCx6RzWrJBND9EUiV9Lx3eh5RVpX6LDqwjZWRf56rwDwk5q6quxhjsqERgVT",
  "key42": "Bord5K4AgDFdBzs6ozsoWy63Z9wXKaC7x9otTAxGPtMReUep8HgTU3Tcd9y7qfK38hEovnCtoiKo5TWkDmkW1yG",
  "key43": "3XNLtqLQvzZQn67J3Vf9MHncmUsh8ijUHyZX4mCkg8pVr1hKspvpXXTDeVt6RXwHRkZQnqVUTornEeuxG2r29YfA",
  "key44": "64KdwqNyLhNwRK9xmi2bTU5zKA43aybLyDpdEUJn4gF1BipDbchoXteaM2RBfDmL7MQw7SxJZNi9ngJWp9W8xfEr",
  "key45": "4nbUPLCg9f3jDVB3g1MUQDv5QzACNWWxRJrrHjfjD6GNZN4AVVkHA1YBuoBoUGu4yTSuLEzNSx34YJdFttMPgLQ5",
  "key46": "5Qm2nc7LCWeg6mj72FY4jpA1yhuWNkCmpPMJDY1wteDsAa3SLCURhQRpxHiz8sLzapCA3aq5oaZcR4wxVQQgZG3a",
  "key47": "4D8RoBC2G35auUNVtK7eaC3KWH4Pz9XzS15jzg8uu1Wq6Dh9rKBE8G5hbZAy8mNPtsbPNsof6CWbvGeLUEFM5Lth",
  "key48": "35exF6G7hKitrFuhHVrXvVV7WpoEgVzEi3b9PubLHgYea5qVqs5UuTQgHgB9DTVkrscZM4Bk5x36kcFnn6xZEZap",
  "key49": "zh5ioDmSNX2L37mHGouzPTY7wZuf2gDZ9Sndd6eXUU5rHHC7kmcYBztrLgu5EgtAZeh6tjjYpoq6txnjbk7PRZk"
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
