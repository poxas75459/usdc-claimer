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
    "41hooMpr3nuq9R29u1gXyT4oidWxig3wpQy4St85zqDqPdzGSSTnZP1csCPRaZ6H8qPcFUAAvvGJ2scR89fZCCdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PETXDiuiTA7pwbxNM4Nr8sP85798deD4zweRUn7hww984zPqkWnDzJ5UKpBU2HacJumtLUebBur4hpQ1SCooPBG",
  "key1": "33oUA9qSLXeVB1FHqPEdpSPFigqPqiKB46Zu8d9xyHFZSvfEoqkrGi5zU3oiE7zKeLJ32xe1Q7tSr4Fc1P3VmQDd",
  "key2": "5MeK9k9VLnWYoeKfdmnkzxA6pegHM5wNeLQT1NEhz2EPbG8opGHFcxCdpPUoT5ztxBnxxytG7Sf811Red9EX8Upc",
  "key3": "5Piudxbi1QWBRojvnqpR7r3ccTYTCCGF3pqYSivgHGvTnCvHg9NSLV5yGRZ3ELWnU43n9Ge6kyVWbP1G82amZR6Y",
  "key4": "2FFQBmonGd52oWfBEhGQ3EWdhEcTQi3Pc5Nw1BEYDYhxTSsubRiJZPtDBu4zGHb7azhEa9rAugpJfqZp9Z5zMKLn",
  "key5": "MLU3zgoXB4Hyh2i37Fv2aCuY8oVaat2bAebyZMnFiFYb6YGjUSFDn8CpHmENXbcR5cXJzqcmW1R78KVjStBJnS1",
  "key6": "4tKzNUrBtxnE5K6Q99MBuPnGKnAArxF8XfAa8hSBq2QxdLxCiiCz1QEH5btWjE8nUmZomeF17jWgzyaVaYAhXWMF",
  "key7": "C8LRauw2q38LSzMPrFKTF9F7h2devLWXNV5nxK4PHFjubeWND9G14iqFXPAGY78A61Be6UL7L1aUKV7ui4TeadW",
  "key8": "M16wn5dwtNYhTPPjCNwkMtDaWQQZtAVYVAwpdQXQQqZ7CQ8FAQpYEeChYm9WhVsGL4H5Aknzmq7vV6LJVdR3ExQ",
  "key9": "gpr3DV9w6E7YJHygMDP12Wz9zrwqGGdgh5yAw76L4JmrKJYytqkxXWSzbzDgdpyS7crNeivPcrH7s4MfG2PH2ip",
  "key10": "2JtWZmtbYq32s2WXCrSwBjbXXbsb4WxFogQLGNmSNusFLCpcx473Lx8S6utkDnQDC5gvcdZ8nHYkG99myzTS5Mts",
  "key11": "4bsmsCdiqUQEfpRC3Bh4ksqKc12KZ96R4qoRQf7FUaye1eskCVbspx61zgQoDhAeGJ4k6y8ujuqxTNCAvgaH9Eww",
  "key12": "5jxAjYLfEnnUvhZVdxd3vG2WGkbJdVJ7xpWJmZSLa4MXC9zPa9XYTmqU6czA8gCuTrY77jKso3wqcnacvQSVSjHF",
  "key13": "4nJcSidDEm3syFEfmoXxhqourDoeeUASSzuWiBwNekRjLgboEFZynNsdi7cGpcE3eegis4LdJ634gr3SNxYm7Fve",
  "key14": "5kFanSCkc8YktAVXLQXeMK2JxfzMwnaat9QDW2LQoF3WuyoLwAEfQ1tGJV1KefwoHauxgRnkqF8Qh8cSfRKRGiGS",
  "key15": "3RVroJQMZgCckabJyD5GMsgP1rGNemwsA8sKj6dnoF7BJyQAsgffZmqPBhr34rcFjtNrWNg5Bj3Kd2HzFnALSo3e",
  "key16": "3B6od4UsgoKiAcs7z6ESu1iKUop6MEYJF4Aa4yF1hurGS2iEZCjgUPZA5cadFgc4k3v3Z1GuiQXBGRgJj5hEtqWP",
  "key17": "zCiZ8ATWN8SxTqPnGjiE56JCisiqN7ezTCTWr7TX5jqTQMwsafzpZdradgyXvjuuzTW8a7E5bNAFAUDVpVGDTCF",
  "key18": "4tPiAcUGBgTDvmdoP1vcaaoUWFUWgr8fFTUfmSsYxFq7h5JcW3Svi93tfWKv9ewo5HkGSTttGKPcsgEJ2JGAV2JN",
  "key19": "5bqLhnmw7MRoNVkSaezTcUrQcQgZCzSPG2zPqDutqmtgLwfegfB6yNN6okySZbb7vV8fkazXSGSkvahvr8vyfihm",
  "key20": "4kzxeM3fCw4W9JjqpgvF2TVL9GgXuZmt4dNDD8Dxi2xG2RAuSPZLktktUsj4wCfLx2Cvn93fGTqgErxs5znPfdjB",
  "key21": "4oms9BmUqRYA53ctNSxNxQuQQsCAH9Fh6DpBB2CTZhxCkvAZzjJwWzbtiU5ycB4YiwbKk4k7UoyDwLSfi2dXyFPQ",
  "key22": "54BweTcuz8afgVcnTic5STkJF9m9V7qcLQyqYqxBhQdLtCGfZmPjGSuh7VbT39rq7A1NJAxntTuSccNu1UuCGZvK",
  "key23": "2tTLr2j8kkMPXFazSUWCKGWzTVdpWCoUnqnnobgvkS7AeVGbJhHmjNCXoYrHF1fkVmwkTFGodYQpYeGj8PVaZs1Y",
  "key24": "4wBT5NAE4bqQqTh5ucbbqQ4n2wNHyTg5RuzFSoCvERwWUaRghcs6vFFmif3rNxjYzcyfVqT5YHU6HToEXcfhqW8v",
  "key25": "intgD94CCnbLEGWUW15EW5aH7LdPuNitst2Twp1PtAzv8hXTiDKm8DE5eg1cF8RgiW2cgfr35VDpHqKDjMh7uJb",
  "key26": "4zB2bAHfFeSS4ArgQS4dTsYKjHP6JNQmSuyWk2r93h69yX4zm8Es8tB7afK9uKNmBiwJSxmvcMEkq3VnYTnCuhF8",
  "key27": "56XSsG7zAEo3QkJkXoEwyzFakoX1h3DbKJDFnWHgRvTmcb8GVBmoEVXYBEtv4xyUPVY8FCNXXumR1vqz7EpXpk86",
  "key28": "u2dcb3bvdhgVUiWfQA8FyGbN35oQ7uA9QXsW1ZPfpwW2FNMNNmduXXdHwErY8GdwxVdCGRzgFahvJY635XZvHZz",
  "key29": "4G9PeUYCUHR4xUFhm6kjF5uyi3e4rXTRwq5M1REhjtS7y72s2wkU6b8Kq1rvoLSJpUwzcKGT9eemx389dbVbya9g",
  "key30": "28tAZ3C7yP1teRscTo2ofEiXi3eLNDUXnjUB7w1SmVevADXRnMz2eynQHAw9t5uRaACN4CBqJ7xKYzLDzDgeMz5u",
  "key31": "4NjBf4h49qZfHdtjA8Y14YA1rvebtvumka76jZTkF6Gk58rPDf7wUGSr7fEh3Me7jaEjTmir6tEXZbFV6Q9R3UKE",
  "key32": "2Wp9xHsJiLTD7emdUqQTGtTzQBtiU1G3aQzqhJidZaC9PbiJ4bPexY5euMu6oNrpRPGZyQ4FejfETo1QUhnMJnWU",
  "key33": "22xutKefeVDm1nxj4uB5kiXpNi1b2ST9EZMq2ZWJcJyvCBxJMdNwJyXwyH66ASiuTVbX89iuGW6oqVaPtgHKnmos",
  "key34": "4CcSN8aD6gffr5BK54tN4pyss3YeqRjfejpajF6vwty96iTSaw4pX35ptwYFzh4zGS5eXYGg6tZcjqyRrZEgwfBJ",
  "key35": "5RCAgG6TDbQEadyGtujLT1KdmStvhV1G16N5vcjwNgLdcLyrZR4sQuq32t9Aapsh2Z6GH9dNs1fYPXF2UNxXrPRp",
  "key36": "2V5daGkGNtvV4ox2zUh6LHtYu6rTHoX6sdxp7XQDHy5EFwAq5yvWxzyMxqrFHXcHkJHu1sYv1hirFqWEHTvDrukM"
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
