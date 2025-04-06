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
    "5S2fgma7rNVd7Hu6osYsCdt7KZkxP9zseSTBcpg8Zt5FiWsfYY72E3fnGa1wcMLE2hCsAtz5Q8WcMcD4KAp9A4qY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRagykq5TiAKM7LbMP9yQxrnarFaUdemxShMvp1KuxmsxTfqpq8Vzk8tznqz5cCpfYUgy9CwQqtBZMMSqduRsK7",
  "key1": "bcTptwZjJxhkM5vUTfdLhYuu5zKFM2Nsaq6xQ1JZgyV1FWSkDSBke4bKHZJN3sSdK4vRbV2FzGXy6pg7reHHzGm",
  "key2": "41h74dgdPyJWkGhiaVGqTJVvtTj6NC7jkzumndRGcUp2tkJHzxuYkVHtcgM9Qa5WNH26iNZsg94JqjoTtpvGqYQo",
  "key3": "5i3UbRfTppNF7DqU471hg2BPzTPhmtVkGawhcVRFxw6KYVoBGqZjarauqRSaMu42V8Uu8fqVSFqyaCDtPvCsaY6T",
  "key4": "25tJ4V9qwSQCqXAVYiED5e7xKAQKA9xKz68fhf1qWu9PdLy4eDgtsCLWQAGsAHYN3m9SavwRbuQ8dVo7d3HaLpMu",
  "key5": "4urFLL5bsS1JkxrkDLXJ5dVEsCe7rFpT4iTamMsx32q9pR29vPCCn2uooJCSK2Phh5tkSQCVraFPzSVHu9tT8dAh",
  "key6": "419BFwPXiYenBFGboyfFpNZcEGnb5BraTFATtu5iVPv1Gfe14ZBX4c9qJk7XqvPa8ywNPbQZJAoyhDibLHcKHZTe",
  "key7": "3H4X7SzzStw1ECLUW2nA9dgWE1ZXLRSPN5Yxa7WSk9GfkaGY9uVdcYvtX5iJySMYC3MQZHdgy1SMRFpqCP1EYm71",
  "key8": "2qhPxKMzkQ8qRSDM5fpibdMNCGxFQ5YPCcoC2J7P4sMV5NWHC2wWsHGroZkjzudbGTry6C1djE9P5V25HF9nD4iv",
  "key9": "64E3PkjCtvxRhM2ySqzT7BGCBuGmtex7kQb5yf1TEhr13pUx2AdKFQNjQWXga7VFN66gsUjVH8UgGYH4P68kGGbQ",
  "key10": "2uFXmhipMcX8Rm3hTeerwcdrEDQfwhZ8fVa3rcqAFEybWwnMxjc6ngdjtEgCtsbsZSNGaHw7fW8L6M5g71PnLQjc",
  "key11": "2MPK7cen87has3f9JueFPTd7FeBdQby3CXFMmtN5ro3r1xksWATWXPu1Ey7gDbJ9XhnoLF3APUeECNMGcJiy3Lu3",
  "key12": "5JXF4jbMABS9n7zQkMRC3mP5QiuGqKVeDyTzwZuzJVscVCY513d1uyooEMLNfgEcenoXMvwH4J2Ht66LTuAj2XUF",
  "key13": "2U1vic38Zq7MS7qSqWa6NcW9BwFjNxB7htsWJT142djC7P77qXL2SbrVYUr45Z13G2sTMDBEjnbP6mBSeiunP6vW",
  "key14": "4kupLFjGq1NPuH8bTkWeik8DLa2Ni4shYpdK8qFSwjhjLbknmDTUW2zHbMeyfYiZhRT8qmbKBp9MGTkvG6AaGrZt",
  "key15": "2UnFgiAtLucLgtjSKsqVNL6KxC12B7TdNHJwYg7bfKwZNzvTAMHHqwDMV6WK63pBwfdApwWRWvfmnNti1sVCbqRk",
  "key16": "65durjaB8LBnf3WExgNUyhih2ECLN5uzoyecCTaTw4YSMShwrruM3SD1E6DSmGXTrX5sFTUhBcbmAsquTftqY18N",
  "key17": "3g9jXJz65wJwoZ9vBiTERHbeeZbNMBnvVq4AhBa3ces16NmCac8SBP3Px7tPVsQnA7seNakMQroAdnL7643K9bhC",
  "key18": "3M5ByD36S46vUzjXzX3YjTCVAVD9hGfhGM4mTGomPke6sGmPV723KJyaR4YqpF2TU7X89AUJECqwKkziRbU4PKLM",
  "key19": "HwWa7rDDRU6gA6aYfouNz9s57TynbE71HcdA4UFnVaiWPTFCydKfrdZDjkkm3dAdBwwqHnvTzVqvfqjFxhdmSuE",
  "key20": "43bMUjr2WcLW6vm8puJyo1JR9uTogJnxjgQVmaeqJzC7bw3PDUbQZLMPSks3HDNof3UfAEYPocxq4YdPBh4GWBLi",
  "key21": "2L4bGsdaZP9Y8aewargTybcuRAV7jzJDrPPFX55wcPbgsXMVykPh9Y7zkKGYBbP5knv8mYRwPoCWyxWpmQvpnvTx",
  "key22": "5Lrgw999NMzos2mXvK9tcHWN5gtm4Zip7zZhDBb9DxGiWjMrwHsYJ9Eh8TfSrYP1Yf2LTPUr3dB4sAYvHPath63w",
  "key23": "4TV2DipisMfKAhjjAb32vCvsmLWGfKx2BnevcmwkRSUbFjUPBdBRs8vnpRUoAJhaVTstGHAb7CAKFXoMkAWwnogJ",
  "key24": "JkW6xUZn16779YkW4JmQx3KH5x6qDhSxPWSENpAT47ZhakndB6YRwBp6kXPdmn2oFNFYtUV9fMbQ9cRo5g4jGfP",
  "key25": "3UuDDXujZoEUpzzjnKrj7V3mK5jB8YQ9bLh2KVKtwcUjTwMqi4UnS324pyHFgCBB7b8d8FYJUdEY7jXZoEhc9tjq",
  "key26": "4F4ZggQ1XeNp1SzaFAxupiQQLvtzoAXU9asds2UwutKz6P1foHPqHPQmxR9QjeqyM72wQEeXU2qdztHJhKxuoZFD",
  "key27": "66RoPzEL93BomfpLjL5tNKvHFMGE5EGdY8YQdcaJTJ3pkexe8ywyv747jF2BJwWhTpL5fVevT2ndb7HZh3tx2Hx2",
  "key28": "5XMrvNhA2S79ioy9fJguuHgtk2GhGinBZwUrjVT8BAzQyQPFfK7REebQsadQY7tcRUaNtBK5jeJ9AGiEmFGWVSs7",
  "key29": "4bjbAZXTCSobZ4JkJoGsn72s8E23qhXK5jEXpdEtgQd6z1GUfNqAMExFw3hzF6ow9NUree5JyQigxQzVcwiyW27u",
  "key30": "3qeNhTp4JP5fSJ5X6ZufKnFkiQDSYD49wPWqTTr5vQ8qF6gzoBciJatVTV7QGz4AR9q7z5HLH2dzfTY2krx8a8W7",
  "key31": "39kNfek1ipB7vR3HkVaD1ggxmJsRXJK2JmH1C5p6py6uAFEJuxYAeEfuaEktKx72ovTFkhmC7bgX4dwZD6KAPN1r",
  "key32": "3ZwARHHgwv1oAaT4FAbjxdDzkFZ76Pxw9aAtThfZAVJ599pTHVsASYxYX32yBDVfs5rqhcS1TkJajv4FLJsR1TZ3",
  "key33": "4296zjsuPW3uVFpNRHcdwCQgpZNBcNj4AeTSXn37tggxF5h8wG1evE8mBiskPVpktd5yQnii6AC88Tc8w9PLwFAA",
  "key34": "VYBRJ7uTbtEZ72tcS3WjDgyggVFGWMEmsLaw9FJsGFrzSwDfdLCGoz45DFzwVoEsMTWE8zcK5cm9bn236YXJ8pB",
  "key35": "2mv8Y6QCpSpGmUN3fSRLdT9UTFnAACspsRh6haVEUNcjPc8hwHe9mR98S8hCMX92gmqXRepMpM2K8KJaD2Gq8HXt",
  "key36": "3JCWnPM5X2L4gGT4nzUuLEqFhoZoNY9qgahhjFXhuB35jbSrichJxjAuSDTYhMu12UA9AAcfN6kMfyy4FM1Z3CEk",
  "key37": "5GSGR4GWG33kBn1fGMVXi3JXDEzC2ix9fAfmo4d957Gohy8i1s25ZgWvY5g4UyJ57ue3JQJi2gM6zGZdNjr5fLsR",
  "key38": "3bpVbvbZ3qUh6FYFS2dRTnPWsySxK45GidWb2fTz3wTZ9D8xVqZSMniYQE6wNSRhWdE8xEP87M7syaC4cMzrFq8m",
  "key39": "61XWkBhTEXqQbh3QMT8MTePTMsrh2Hfb6zYyYU587sN7tJKrEQK744vm2B24KHFzP98nqxUpdCoZiQA3Mesr7R5B",
  "key40": "2gpJMQyEVfzziWm4wTANHpc9kzaF9QaikK1uB5gRheJwvQrKRNCyJXqA8PDaxKJVM7cNPc7RRuq8XMekNULHUeR9",
  "key41": "JVG1qA8q72iGwZEKB2AKuBcP5WDuTEoCfHu3FsBPiNZXUKuXt8BJZa2Wow2LViP3wY45aoz4Vvh3H4ggRtm6Hct",
  "key42": "5Ko9iR3DgM5ms7JZx69EnXDskjFb7B44abN41RUBxPwESZEF61NsDtvLWo38vGpNqikd3cqN7xDs58HsXJrT9pHL",
  "key43": "5hSTk1n6tHJ872mumvt4rir8BsPkkBsc1tZCzKcd6dBhmS5U3T3hFoQk3zERGFQ2HLDXPFmiQ9Z7mwdDdMaGWbSM"
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
