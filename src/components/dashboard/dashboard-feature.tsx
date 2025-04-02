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
    "5M2q497MUx3SATDeLM5cuWJn35nYmzGQNiW6BroCpVtyuppTQSPjhpFa5TxRU4e167eDCDAXNYJwGTM8FzJjUm8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sLpZ61kugvLWqu1i3qXxuL1Ain7BAtZniLLoxrGE2GsKJ6veA57rv2ToomD1LZVsM1JfHwRXL7xxDwVrQAjrh7P",
  "key1": "42N5KCTS8r3Yhnm5XQoHfi6uQKLHUW8MjANshrkQ9koC9c5z6aCQCexmnotk2f1ZSKJ5mfNBAFoPeaGV78WmiAFP",
  "key2": "37bvVDd7rDtUt93868BJVhjJmTRADa1hqg8niA2V7zumkxgLR6YarfMnbbQvh2H2QBDibF5rLte7fL1HNezvDEkf",
  "key3": "2j99Tg4YPsXLjaT1sP6bW6sZ1odzXvfnDVvMKG3mxDWzTi2K7jd5Rwt9ziQNPnCcjHm8EebYq9Rr35g1FrinCNsi",
  "key4": "taZZJTKH2eo6eZGvkXb9my8Ak5gUtPyS9ktm6vagKq91JNf3paVAifVSAYeD4D1nFRuem3NH8gSvT9eF1eciRyJ",
  "key5": "5SWq2jGaWpYnaKUGygSMthfTYWhihedQh6T9uXQHdL5caaCDRpxq5Zjbq18CiUer7ZkBPGinRvYj8qDVedM7GcQ3",
  "key6": "ib9YRAunLdhjvGv3hdni5Ginzs3cKYpKZtEQBUjqDdmdsQ8HHhsGragJz4LG2jiJrHAUQrEztWyKoqFamCwm6sG",
  "key7": "5pqTaJx6Q693kiRuogMjbb2u6srt3RPP7NPc9cW3BYAXoJVCU3ksuh2mmXGWdQECRP5gJzLrpfEe5VymSPZ4VwSm",
  "key8": "51zzSWiYTKb5Rf9y3r69RGdcvWusEkADGbrL7zeWDD9usM2Pm84AEkU5g621nEFaPD7JxHDGzvVkHQbRbed278Q4",
  "key9": "57AbFLPqcSzw5eVqgixe3mGGbxHFHcVYwos2YhHqf5E4a3Jpqz3gnMCYwbvbPsaNYFnrUTb7iPVGyLqnrhobtNtN",
  "key10": "63UbVVGXgNGfaeXWfgSEHcLGM3RN5r3NPuiv84YvpiqdoS6ujKe5Xhsot5symbgF7oM9YTEhG7QRs2N25ofW9Cy6",
  "key11": "4Pb83YJsdvRd6i6pcw7E9ctUrkRJTaA9UVp7C3eZnyBpX8We7x3wKUhhdDwez5iFLV9ddgmemivco3LjJcX67479",
  "key12": "24dufmVLD2DSsYga8Aj8pBREVocxHDVYEbHM5XVtdSbKai99cEVHwW3Z2enVBKYXk8MfMLHEZnvkgmbMCRTAervH",
  "key13": "46BKa4YTveKu4XBPuSmRNgfqtzZqJ1LAEffYiQtWeESm2ZLdvtj3sTucy7rRDoWqjdvGbLR6bqwNCYrvF6BtJagp",
  "key14": "61eBXwNXqsPNJCU87AzoLNWuVvaungDc3W7fm6jEgagFsviwRSkm8StG9mnxSVCKXuSdPwWWVyNwozdUqcm3Av47",
  "key15": "JrT4Dm4Mc9jXQQ27cvNUTQRQ18PUJntdbNiqg5wW82qhHueR4jBamsReo1BbwzkHWyu6UpB8rCXJ8rj9Chu6Psy",
  "key16": "3dKGiJcURLtazZvt9Bys4JLgUkiHf9gU1ibmPZWKjc78aX7ocxpxA7sRMEjqbB4g71U2k3inDty1ocPMctjURtom",
  "key17": "3hkbduvA3T5quNk1rRioC9ApBjdipeu1ZvVvZB93KffUEd1EkS8BhQiYLu3iSYy7RxKqKFuCV1HibJwZ3Cqrko1N",
  "key18": "2gtP5ntBuFwEAV4FbEGzWb1z2EnZtoreqBZHoiCWpt3tzk5GQn1VgKYNQZYuVuq4RdsgAkNwg2vFD2n2aCamMU2",
  "key19": "2X4bJq7fxhE2YxbUohfz8AcHcPVgXzVTDGGLWNWe2fiwYD7abwhqWpbhQrtaGWtbTDu7oK8KgEoQJowvMumfmamr",
  "key20": "AZsVyLWNbYLC6dMkmFxFM4hnxeDhkPyaCShUB7ZxPwDSrBZ1txH8BmQ2hYS75A3X9hCFgWw2575ufTfQgkbbBWs",
  "key21": "3V2SzMB7AxhymZozbnU2ozGe6WwF78uX9rqF9S7fttPTwss79xpxdC4sZsPKEZ8tKunHs39XBswAMpdEHA3tuQGU",
  "key22": "2vj4R8Nxynj2mPns4iZevPkZuLUnK3oXEfYf1SfgLZM2diw6Ati5yoPsQy2GuPC5gnydpizxpnkZY3VbeAtAi56U",
  "key23": "66Yvd5KgFp1nFfwhMxfWPkzDhxZNe731JTFw431wQGBdJdEQSjAj3xQ2YnqasuKWb9JniYXnZgMCPZr1VXFow4yG",
  "key24": "3ee5N3RU1jWbuHKT9kfwdgsMZwF1sr3FtEffReq5xzzAM3DTYxUPDJDEcUQph5eDj1YnWaoiURUAhwGXyRHLqift",
  "key25": "5wWD9jagJWtzbkvPyza1AEsy2KMBUfxxktnNTk7YicpAsfX7oLH15n1wSuWWZaYW1TB9UCbFJeejwbEsuT13a7gs",
  "key26": "3Cky6cZdFajnFgjx694zmL3gnjsXrXctPnbNAFMDW2SbFFKLUCtDkA7Md3GQKmG62SWFx3uhcPzDQ1V3BMzHb7oQ",
  "key27": "4L37fandhpidEBUe2mg519y6tMrddZHH9VxgV2QuHWStx7dk9o2NBZRs6joBpnCVCDATudEHPJpvCP8r3exkSWdj",
  "key28": "4d1hLqt6mV3iuGKbUCSJJQSHXWK495sznqEgtoopvXZSSFThZ2DBuQPCb9P3PhrYW4CT4Dc2xnxmDTGdDvG9fhFQ",
  "key29": "3k8eM3KisfjVEGQPonezDLBmTKp9N8PTFBzDySSWky8sZqELUy6j2vezmQAu32uFQAryXApzqNgiN8BjNSwV7SSo",
  "key30": "2aHoVSVhVEnUUPjbhSEMSC5z9kwVoYNTWrtTwhQmRSUvd9bAVN4FzJjZkBnLCpEV2bYi9TmRoTc2QbUJJ1jgJbKT",
  "key31": "2ZY4AcgfCiKBTP3qrPL3qctVQLuejvBEfk2R5X9CxLSNFeFR7vXEsPfG1hwxYfKYvsPZmsFnrKwDCqrMU6buu8uR",
  "key32": "8vmg4mdMCWmpJbrEf7rfP42vJ1bAEjRy6k6UjkxpbyBR1kAje1VDeVr1hFCJf7yMHaDPLfu1xNYwSrJWy3DwuUw",
  "key33": "3A1Qy7sTqAGNG9mf9vyo9oPDdv7LmUUauz1VFMk6fgFhdQi1f2USzP5VKUXbTtcQxcBJbnJvosT57YbcPn6qacQw",
  "key34": "ZRstPgATnd2ZV3Ys5yj9Jc6iw9EekgDF2SdDvprQCwJ1Mt451azqWWyhsrGZwsZ1jD8E7Cq9znKtLTsNB6ZAprr",
  "key35": "JEwZ3rshkWrdrE8VQaq5gkiW2E3Q93ompJKBdDKfH8NsM5nnjNjYW64KitQAZQfCE631hGyAKvB1JNxVoyhAuHC",
  "key36": "5kVaJF7HANXYZsfr9JeufLzhVAtTA4LEtoaFMjzrPF4nXL6oSzCwCF6gT4GkbQGGhgE8BMLGicrngDo4yqaANsRH",
  "key37": "VDgYNxEAyrdvvdJA7JMfKppEyAwA8ZRAKoCQ9ARF9AuBwcPP91ns8P1Lfg3212edrkEuv7HkyJVnFwNfgPisxYj"
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
