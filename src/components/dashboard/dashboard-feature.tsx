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
    "5zohixwi6SHMQC9MF1EAggNyDdwGXpR5r91d1FWLrc4hCbvEvTMPY1RthABxB2CaY94LP6UrjbAizKZ21TRbdcdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fE6UJ41DxV9Pv8PemQpwSdhPR1b6hgEttQ8qrJEmzEvHRsbmY2izDREsmMNpKAPJyf9pPoQiuaWkjYKpjsoH6M5",
  "key1": "3bpSqn8vczpgwRHuzCkzVEjuqYSCdd6vwuL5NDLRBsieFv58d1fNQEE3zEJ1To6cwFs6oAYujgJQJNRpSxuSvdFG",
  "key2": "2yECgsq8ig1tXFc1yAaPxZH4KqqcBvL5KAg14mrk67jx8z2GUrn6qomHJSfxWPoH2NkTDa1NeST4rtLzouz6FvYM",
  "key3": "3LFwuCGZnEp1bagCJmpBmPW1ERaimZivLQb1HGPTGcKVPBd9cntTonpi7wcryUsZfxVpuqjyMzdbqKWZpUeYXgx5",
  "key4": "pQVTSprGPMWmyTVeVEjWbYA5AiemTXTUA3A5CYKkR19nhGJRLDKmAi7adKvpDJEhnTHkXh3e1APdDNymUu4hFUC",
  "key5": "3VMi4ScZzNMq8Ta4jDbWRfUrvucWQyTL2YV2Bpj7WZdA9i58fFASFtQUQ8HQfNhA6gT9vRjK2Rh99DetXTM4D29B",
  "key6": "K2vkmQjgvaHHH6LXKBfn6jtbdkuvzCktTmL6ajyDqeVnkdMtaiiMfErk61sBVu2KWYmxcPX6j1Hocrzer7tbWDM",
  "key7": "24pASdURducJVm5PSMiHpE7dP1y2QfRtQjUBpdgKjKfSpZnN2JxjYNiacBnwt6Ya8S1WShjd2p9JgWGiQD2QNGtT",
  "key8": "qhizsnzohqq3pvrPx3dWc7rs75Nh1P3rnWBT9MpV2Q8aV8Q5PS3f8pziMasdVnR2Zke28tDBiVZ9FV8tyYFiF3k",
  "key9": "3k9a45wTFnt1XwTNfqYu4gaUEvhLkXFEdA5mLAhrZV5c4M36kVeEW2xekwFkMghXwzBFq9oSqK1zR3rC4DrzYg2h",
  "key10": "k6uRdrsXvnSurA14vTLGfzg6CpcSzVRstY6ybVD2aF5GTibNRcT8RQicKaJAVSVrBaKheYdbiZcymtRBWtmbvBx",
  "key11": "hcoNgPcA91pDrczReN8cAh2UN7spqkF1R8isb3Q5KPnPhgm13rtuVBMfqVwcwKvsX8EKJg2LwYsPupUt5hcHawq",
  "key12": "3iEa9hke5dKRTKs67oCWaz9r4zSpHPURcL3tS4pn6trUq5XwuZkZhq8Eqo2Gp8mepKnRmBVycQ5hMikdeHtUZAPB",
  "key13": "4H3c5sL9T9efUV8nzHficfBLc59jcgWfZthREEktaJ1gXvn6eUxrhzMpbnekhDPwGFMmGPwtJ64hZNki2irKFUQR",
  "key14": "5fQc3tizaRxpVFFbFuH47LkmeoNXhT75c1DwSJJDgeXe85SRd1uE1x627y6EBCcJVT7wcyBPPfjMwgMSqPE6nokF",
  "key15": "2bPexG5gfdXBjycXVrKoAtsq9m2gFxE82LTA7PRK6j7D1bq842YD3GgAjRTBMusQT3WrRuA2Ftuqzmg1ZM5TJgup",
  "key16": "3mzEwGfmxNzaEN2bHq8Epx5JowST1skjWWYX6Q37keCsJHmV85Kkjg598eCDB613PMW8CX1JP6cVCLJqtcYVu7sm",
  "key17": "3adYBb4eDGDoDXuU6fSy4nhpFhDzRmheSNwsvroXLBbv9zgFSNpzMp4ppZeU867UdrcmfSncSiudqwzjLvj4muwm",
  "key18": "5ha5etevJnC75Qb3wUD7t8hQ3RDpy6eypotKAPKQYwYU9hdrGH2A8nwYoDgMbAEYHXYMPvVWp67H8A3SEs1MF2fG",
  "key19": "3WLXWWtj9KDJVmmFBwJsTMcLcTrBS655aBWCDBHjuEuXFrMawDf44yhNTdKbD1UffWUNotYgWRg6jBBvqE1jrT1i",
  "key20": "3iyUktsbJPwg74MSo2xHYWAgtGQaxUnV26sQJHoFMtwhGdTQXb4XqynZaVLvV2Gyqe61KcQnRgDDk6rvWex2dENs",
  "key21": "3BGts1CQALe7qJJavrC82ywV8GSq8Rs1rzba86tPrwC5sHn6mDejv8qwW73YX5ZkkhUXGE4bGQqyozxej38iMQBW",
  "key22": "2x9sfTc4pi8JoRejPPp1C3cTS9zLM3qm6YKMgy947NULV3JYB3gvaH3VfSAHoFJ6ZNG2Rn9HwhiNQYLnZ4mdxoBN",
  "key23": "3Pb79BPo3q6Ze1QndX6WHkwEJs6r9iCzaLsZ5eQ2yQBGMm2fwiRHSb9xTkKTqHuQ5URFrNK6N5KSBKTQxqM9RrEQ",
  "key24": "v15NRWHjK483zCng6fSyV7VzQf3JahgoNLvhiaYEq93tYGiqyhmcqiCJP6gSfK3Tv2W9QWuEnJnac9nVevYunQ1",
  "key25": "4TmdoDVik5hVoV45NfyR7YBMRdqaF4gQLT9X9KMbg5ybPwSyTQ8A1itvPB7JKYoRx7pfdK38PNaaYg1673nEq1Le",
  "key26": "jVQRJtNdPvRA7X42amRjox141zNTbzgQhAyUpmuaakLxVQ36Frorfps9QnPd8y4FYmmWnzBWKY5Q5N4ehkYF4em",
  "key27": "5TozcgeVtmAxxjbRumuwSM5ymaECSnFSeUkxKfraH5sLurXnqtFto65kd79fhhG5oGDrTvU94fHrCxZnDVyfUz8i",
  "key28": "4xLTtTBihtrrdzQUU4JPLHrshzbgZDxXcayyraSkQA8iNucndT7Tog2APLP7jvBhwNe4BhwnxazSJ4REEVpEJhqU",
  "key29": "3H4YRD4tATZd4v5MYT4HgdgHx6JZCLKDPU7BExJRSmB1EtsnF6QG1diUJ7taLhDHRmgNVJX3MZHyFoDCjEmQJcw1",
  "key30": "2Qvj9vcyd1aX5Bdvnm3Zqm1PfRUyX6wc31CwXsrn42m26WU8n6iDbEGvFnLiFpqCUEjH5igCUTfBh6N4Sic5CWQw",
  "key31": "2XzKDWUg9FTyutzA5BBDB3Ztpjs3prJa9LjTkXE2G9RTBzyLao6eQ1LuWEYyKfqneE7eJD5V75ozVYqtzkiC8JEg",
  "key32": "4HVtutqimrAXmjSLhJ2hr74enYUsjQEkFQPJ1vQNTYZacPJp2DP4Cdv4TJH14vyTWtwgS9EHES1nY5m8X6C6LY2m",
  "key33": "2m74iTibzQTQumkuMi5yBi6eqEsfc8tKkpzhm1GFsH8zkbjTovPw6gAnDswrsVZt1uV2PtutSqeSZgx6DTGweXwG",
  "key34": "dNkKVt4cAR3vQoxkm8TRpdXFikTCDdcX2ib9q58U6x52e75sDZ3pVq6S1okiS66xxAweJekUKPTi1BKgqM3Wbht",
  "key35": "DY3cecyuTxpjHyfgmygG6aAU8VYDEZHXaoicraiG1EpheuYb81TV2fvy6hB6pvJcShtZCgJJR4soBLsazfSGzZp",
  "key36": "2Tgv5tdLQoMnzwtRtHijzBUkTWCedsJMmSzytV2gag2qToQibSQMadhyGYQq4NMr9vLkWwnaj8ftTbQh7TUUbj2p",
  "key37": "2N17Ej4ksJQE83qtvZ8QE92Ypo5w5QprC1gorx7Nid7A1xu7mvfwMs1CAqoWiuDWuALNTWQfH7AouBaDcApUcUwy",
  "key38": "tAwfsgwTUyygxwqkZMKqsMTXNgjKG8eLZrh6o3uE38j7tsBZsXx1xosx9tGKS7xxwC22112v2sgWd2FLiG43M2w",
  "key39": "AENRfMptTbFWrBiEYTYt51BR6TkuNDW9ZUMQoKfDeNo63YvREnWmumm7w3VNZvTSrAazwwFMdMTtevYW3eEG33M",
  "key40": "35bo66NWg3ijd7hwdH3LmkN1vrE826DDqHWuYnQDX1EHvYqVAws9V2nEHRjHZqz8bdfuv53ruBSdq7T53bbVkkJC",
  "key41": "tMhz3bBDdg8CFfGGtexMTaYHkRscjiLm3NmaAB7evXmFnFuu8HenEsQS6rN8hXPojNku5kmRx37vAToDnyEhEU2",
  "key42": "2VGJ8K4ibT9eL7yKHVfBiFBF8hZ5ADA2B6m3mTMZA8hGVdBkLswD1vgXFetavcg5kThD1huXSnCbDBspbdvvnPDi",
  "key43": "2utKdXymdMY11BXe7o5tePxFoiz2yBwcApQxK1MvuGkQhqCd7ooZJcnTgh3VYFoN9XbZ1cKBnBHjjohEYuu47AVY"
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
