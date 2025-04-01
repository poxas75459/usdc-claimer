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
    "5c5M8Z2XqGdhhfBvD9CGAVUtcqmCthxdti9qcpWhNFaNhDWUApevfJVjcFQcAxkeVaZJQZP2dy9ZdumeyKXWgdHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gYt95geo3WbJeGHLBaPAqqaNyiJRVLcnsFksA9LrLQbB4HZm8ta39uUuxah9qj6yWvdxBWg2KnBd4sntY3VmXeg",
  "key1": "3Ymv7MpY15aZFdwY4FoaLf7UXuL5zLgmh22YxfseWxbmJqWp6syEHhiHzqYRrfvMaRETW3dm3isyJbZPEQMXCSCq",
  "key2": "4ZQtUcz4ARgiNvxKNc28TkJWB8zndjGuFKPBtLbedsmidWW4h2yoEto7rk3zJWYgSfd13HmM59YEPqkQUvjx9RXN",
  "key3": "4LZcdGEg2tk11qvSypJJ8VUCpazrAkhzX2j3nUm6p8wM69yevPTF7sRgo8vgyg5JLT7QXcECAi8jGpKqVWM64SM5",
  "key4": "4LxMdMqSCvtSVVAzQeHKQ1CpNbAgG9nGUvvgMm6m3EkBDoZNNKy5RLakApKAv7staq5a1n1ijLaxy59AtosipQdo",
  "key5": "4bFq3iJWS5HngyNqJgXntpAR9aVJPhCsp6FhGZyw8suAxj1rno2NVHHK9BKrVao3qJMz1fMMbgGR1mG5SNp3zb2m",
  "key6": "DpMUhR7TkCgFHEPtiRTN4UBvQbxjFfdeMYGbYEiQ8x8qCKbNgDJuComMLUnFb3hQtAniXQb3LKT3EPzshPDRkym",
  "key7": "oh52QszSgbW4PiFoMLwWDJtGc96xvo4EDjCMBtiR9V8eqFQScywSvjVWMq8Hc6hEcFPjk9BWURZZX4nx9r4CaHZ",
  "key8": "5rRjXLCAMXjJp2Ek5AGJF8hcy88EoTRu4dtX76UhqCDA211FBBfJAsgbz5ooU3pGGRTRmKmtZRpD1mNGoCQnK7dX",
  "key9": "2suefTLTuWsRWG3pcQGu4AELhLLht2ScCgPcWXzdyQjV3fQzzUZkW1z6YXLDYY8Q8M6cbETvmUY4PvMPfv13oPo2",
  "key10": "63NNsp9umM2gxGsmfPG6Ezzm974xHksLEJZGJSkBRhiSFN2JaLxXep4pivKjevQuVZKFZKsVAg1wDZ2go4Eo5eDL",
  "key11": "2HduHKmzc6zHGVsWKgEoGyHxPktRstuUJyNjn6zHnfoHE2HizKENmAzDJX4FG99JgmfYDYnkkRFsCpufRjpbBJCg",
  "key12": "4h5Ez1RRm4Nt8iLZi9Hv3LJVdCcfSe6nP2vRtecWZC5AJrV3SK2unPJNXSRx2jWJdCTnjtVacfbD5GxqpGEMYymw",
  "key13": "2tMzQAh1cJafSpY57YuGtnsAjqme5q7KeMaB6wrzEB1pB15jknfUud4qs4hfjjVRjbrvW5b11LhpXANXoZxM95om",
  "key14": "3BcesJqFyhTq9kWVzvXBr8x7vGQoYwUFjNRQuHUgiF8b3VLawU7tswyc1QFWwhbP2WKHn42829VygoEyZ2MUjt8f",
  "key15": "2zfyU3qWL8uYn82PqcfbtQLYteVBvBMVsU5EjsNz2x5x9ri7byNf7i3i9SxwpT3XvqvX9vYYSTfLoESXKEyU118K",
  "key16": "4nfx8BFjm5oP7t1dwnJVoHvB292Au2mAzfUMX6qcNJqnJLqhMwTVcwukmedmtv1ytFWUscLQqWcFmBCXnJZ3pQE4",
  "key17": "45rmt7CwLsQJd2Wagbch48FMWvvcHM3tswKsdsdwnSiv1cfC95V283zZcPeWTL6A4x4TRD7ViKhB5tykBtKpYAJ2",
  "key18": "3xcoD5E4PJAtnbhoZrso7442KKNHSfRLhtpxAae9DYkHz9WxgQinDZ8zsQAqj8SuYS3pM7C1Td3GuQfjJGJUWpSF",
  "key19": "2stxefH23aVUrdHmA26EYBpGjVT1i1mQE48wfR3AuTyEQTJ1saiqeGdKxPoNDX9S2Ym7Uk9KWxd9GNQnCRd8zcwm",
  "key20": "36pdBEqyvhd7VjyYeKC7xqzXt515zMKQekYSXVmGPTSBBzmYDh2ZUwe68ziX9p5oNhKz7hKkopERo49Fmqmd4ocf",
  "key21": "2RZqaSpAtRkeW1i1UYiKSSVzZGWF7ecWiG2BYAzTBGG5my1ZX1YecK1aH9otRB2uFxUgAUszanJFtHRzSW1TR2Dp",
  "key22": "2zk4VyW2MWu4HLuSzQCsWLRaCDQq4cnapQZdGuHb1P68j4xTRSiMhC1ukR9FV7Y5T2t75nzr8s85WwoqvhKANgax",
  "key23": "LceV27DSprCehvi1Po25zHEf4kb8dyCpxBjtG8FDZQqYJGyiGomHdvze4FsVt4njRki5YHVTA4WvgFKmsDhsBC3",
  "key24": "4dUWzaMGKb3Jb4yvPQwb1Nj2vMDLLdAxFPDsu3QYUo7p7vF5vC3uhZG7esuDk5gKg5XQ5R6NDc5XFu2oE7iVLEmp",
  "key25": "kCcksYZPaZn45T9v9x9jccYup3hfcFnnJ6MedhRJSBPBA9kyLJM6E8nR67oqWXLxHCZxqEKJntLtvAnBea98NHT",
  "key26": "61vymvX2umiLJKjAnG674wvfi9idvmohhFeopMZxsRfxWNbfP2tnyFiCJhhMCoPvoKSED9ymLaDqcP1qgGeJAWEM",
  "key27": "4DENZwAciZPSLcXRsp2MairQqiDyeRAPyJWDJocXzD6Ksm6LV9B2Wjrc6CUhbo7KpNe8D2DUUfKbrEJdi439nwPF",
  "key28": "5M6uNovdKfZ1kRx2HwAtfr8utZz6VE8mYhZNrvDawf9BWFkQ4PKnKYuyRXgGGHZHBw6kFJvq42EduJ5fmKQgoMXi",
  "key29": "42HB2wcg8FMQ2hnqJ9JgSqN73EgtHNV8uKgwmq3tBm4dR8RgjfTTFBNBNeANutSGHkM8Rbmv5cLazERoAHp6u3gw",
  "key30": "3QA4wGcGYhy7YG94VgNCcSQtG53uKf1YD9hCgyyCJCpzSDfduNfthV7TdMGiM1Bqww4rd1eTeics2ogBnkJEsP4h",
  "key31": "2F1QmwZHR2XsXTS6HWmYEKYLawDN71fHfzUgdTUrAnU1Jc1STLooPGkbF4uUL562W3uSpGfftiRNtUBRdSN6LK44",
  "key32": "46ycExCjQWeL9PmrAgMykMyGsHhtbnB5AMgU46BjihGxdDqZn8H2rB9tubUt3HjYrmuE14GQtzT9puSKxoRj4nQS",
  "key33": "4qX2TQhGMs3e7rcLebVpMMdfA2uTeV5ffZNWir46v8GVtJXCs2RDKuFQNsvafcN9Y7Lkm1r74YEWrQJab4h8c8SC",
  "key34": "4t8aNYXeBUvTwMhpZTN5ZK845bQd1V2dgzB5pzZunQ2yRkavewGV9u4SP2NaVjJwkRjZhEQnWmNB8V6H8L5V56E",
  "key35": "55p2zS2LNSxkL3x5QPX7Wo2HcnM26kFHjeHsvUzWw6VUeauDXtyeFUfMHbTPzs3BJ639poHjgPL4YMLXn17VCbvt",
  "key36": "CpCbq7XEvfV4bN2kjJjkspoa69SoKushWxbhLAm3xqcgBu1adgpyAnwDngMkjAGK7iJaKkjHsnrDExnPv6SRWzd",
  "key37": "67qVuw7qrirjzeJUCeDfdgGU7i9rbqvALFyP7CAFEpUskJFG76P1jzFM2pxt92s4Yeh6FiA3MkcZDryBSCQMHn5g",
  "key38": "2JVymxZTmwBoabBr9jD8aakrkeyDbwD1LiWCoSd6CDKBHrPdg464HumiBbYysy2tiTpoRSvzMydQte5SzPfJ6Hzc",
  "key39": "4TD3pJ4yv7GgVdkt1XvnxBgs3KLdnS7kMBTs9smsfWJNF4TdxX7APBxegfSJpZCdMJkNaLeBbX3xhv7wrpp9iahh",
  "key40": "4D8Dd1VaHpTcgiNdvTC1YkUmJZJc456wW2sXqvoyoi3r1CT3rvfsvnXjUuxu1qrfwrYTW1FAK2MuSVMLxVEns1FZ",
  "key41": "th9hM8GkvzNTg3wPEJo7gibMpCx8UCkyiWs3PsMqaVtZEm9raFiTyBKP6EEGoTVDw5NWMSFsMqEdKB75wyk3s65",
  "key42": "2wxjvYgZr9uZsQSnRdiHaWvs5rqBJKBCjtXhBzLNPJni5PJGFGd1hDMmcA4HSy6fxHG3mv8ZFfsUJxqC5FViN2Rr",
  "key43": "5bBhqMHiy6uY6HJgcVQkEYdfHezFwmTyoJdkMVSddS5sBAtcPGRw52axWgw9PQn5byojRGi4jNCrbKbj7mqp98VC",
  "key44": "GpUby3U6GXJMkgdHo46EaQaSHsEHcBBKaJVF2M6MM1rh4iwQbUY62itjWzPhkmZibFfZm1LuftWzzprsfMweGhX",
  "key45": "4RmaYWX4r7yHSTrUSD5HTj3vgUs9shoB5vj6XwAx9oAxo7NGix5TxpT5ybGBwWNiVC9fPga2kXqTTPmtSUsujy68",
  "key46": "5Zxk8BmPZtsoWbHSQ5VrQGQeSjnaJiHQHTsuefv51mrR3odUZVv4jhzLzjWLZq6dpZXs6rgtusNt16f3T93R5mKT"
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
