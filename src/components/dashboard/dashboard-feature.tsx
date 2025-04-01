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
    "5PUtFG3vmwq7k3A112XWYa6QvuK7utDEKqVdSJaM7Qb5QTHy4KiHxW8WydaGFrVEdkdVxDSy6qkUxTSDckh5pXFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P7D6T1J9GKNY6UPcn1cbGnPq7wVr4QMcpKCLtc49y1qC9KW1ervh2KseVe5SX6oNorb4sTJ8ndV3rSQuZ3KDY6h",
  "key1": "5VXC5dMkHaposB84P5BLdN63cfHs8r6ch9ZBUgMU2pawLW7uYCQaFKRi93vYGCgVFeUENQFNT2BbwdFi2Tg63bWJ",
  "key2": "2zy4r8U1KaPXijzLaRrMSEzFuG1o9SBS2uqNBauPAd19J9197vkgRHoTt7xFWF4eXLsDaUgUbcvp2hruYbrQVPfj",
  "key3": "4x3kMZauSbYm6inrHvcGACDhyvsjrDsiRrHeTDorJtsRy8MYcyh9dNb6L4wuviJrrfFH1HSdEhfhycNnbf8TBoih",
  "key4": "33FuGF69LLBL2UETKkkg29JS4advsiS4dRUPXuKDisvZpuxaawpquLkapQR4Xx67Sv3uJK25dLf4xZPZDjdBwCBj",
  "key5": "5C6RaVBNgWxjFWWsNGBAUcU3QavmCpehERXLmRgRdL9AJTxkmoXK6n4PfGh54fWGbDS8W9zmyMjHgff2fKbuBm1W",
  "key6": "2r9oizAsGygqssDq6Q1nr3HBdyXSSrJSvooddpLtDfdGgcexEG8TksFvWeE3Qfycafud2o2GA4isUF48f9BreewU",
  "key7": "3QHkYB97LCEyGrsbEdRDhjN58KutjnNx2TykL7pur5z64fPYv5K8FzDgpV1Y4ZQUHUThArN9MxY5KNgXQJXCq4hQ",
  "key8": "23B9zRqYmuq96eXPMRN45tW5B14BmMAjQrChdv3cVLCfrFw1BWsPyZTNEodERYziDpdZzBBmUztBiyNmo9YNjwz6",
  "key9": "WZt8nzPzSZ4CzJAvGiDs4BwexcSLREQpWTyQApdMcoMXnX1gQgHqguyjr8MmpaMyaaxhRxJXAjWaF8dcHp9HWdp",
  "key10": "4Jx5zxZzzeNJgmWnbapg55D35UhYon6kXjqAmkyxL3wqoJuUiooJbGSTYSG4L4bHszxEzuyLzcEYFmDpt74WoFGe",
  "key11": "4zgwDmqhWdmxMYdE43d1jHxcfqiLT6CUTbEbrNgWyEgyhiqtDegDz4b4poSwZ128h7egkRLbBgwHGiDMyVZmQRmT",
  "key12": "5weActUVPTuRhTNb4FpDEvQy6yNTCe5FtF5UMQoCL1AMXMYz873vEqieSCi97nP56zTnWH82kWA1qXhrfkxW9Dgi",
  "key13": "4j46JjTCTa6QbVWzVgPtob7jcSxQnGGe4mm2NbWzUoWFCd3QBynrhatMyYPKtXBevo23VrEJ6rbBfd4jR8Q9fCja",
  "key14": "4t2yaBGLf9UikdJa6BmViirgMB9ASpdr3MM2TabsRsZQf2mM4bJXCgJ15whfh6jeiPutuccBKFHJLz6c6XEpe2VT",
  "key15": "3Nn6683Pp37Wa16N2wRoenoV9jcPKahz2VrCn3cXGVJgkGuDgbQVLYJgfJbu8A7kYyyUz9qMg9KT8CH223GaH1Cs",
  "key16": "5k2yUNc73Ma7bJHCzJWwt2VPB3PUJrMvnDPqAv2yutPxfP74hjqH5pE86EZyd4eHDQ12ULfBAzQwUcmQQ5GE5zN8",
  "key17": "3pogpnrutAgHyWWPLqHMrfQNdMTgVz8pGas1gxRHsvfFnGbRPVwSmQqHH4LW7q9Zn3BMgFoZyk4oJjZewU7TYttg",
  "key18": "5mmNba7xSRYFbNPjmKwSQY3nfC2SnzyRm5rP1ckmhsnZQTZSLCEsqmQDBGxE4w2jKYEuuc1K71Aipq3NQZZNnKL1",
  "key19": "3fj5zfUm8QkoRRiWop4DF4PC1jtW8Pc7dj7Hk13ZgrAYwAh1MHUPdNNWFyAV1cjdZwrpSFphMgK72yhVDLsmXtU2",
  "key20": "3fKc4QMf6ayeQobdWQ4rV2ZRB7MXgprBUWi9JNCAHHXWKgWCVhWhXDXLqsy5if7xNrji7bs78nEg6gMnz79YjbDR",
  "key21": "4f5mLMRuWGfG6NbJvTtkStPZczbf8n6xqkoYddoWkk2H2gHmyGrfNzkz3EAFPKXvenGnMhFVZkB2zNge5GiTfJuC",
  "key22": "3QErvjvdmRpwBZZokBBJBubnyZJGvsnZr3qr7G3bcRAgV34fBZETaTQ3UA1KadtND8TGgzZax7vAZgjW1VFkwX7v",
  "key23": "vGocp2uEZUAKSUvn25XM5e81dhQExFUXyjZSyRiY1YeJPQXfsRGkTcQ3SG7vLrt21LyT8Ze7cXHtUm1MoMJThds",
  "key24": "35SaDrmosHjLamhN5KnfTJHoEsoxjFoyJCj4UCWEaAKF4LajuuhpoKsJzPoHVeo9ZzNQsZpk2EBSxBTjAb1F5VF",
  "key25": "3ta2t4ZGcEct3hxByZFkQF9CExDDqwL9Ewf4Y64XvUFVQeSDqV5tdqMgQgJyuHUYm3mHiqkDGrzjhtDZ3SwGbk96",
  "key26": "4vAs4ntKUAtnAc39FqALgAGRogXE4h7A6GTv1k278nqHxsD264sYW6eX2L5CPzc8u5ptv9Sx6aWqpmAiqMQ2Q5BJ",
  "key27": "25N1bn1w9HULZ9UAfU599MEDuRrphocVazrvUmKSJ68Ej5LmDMdMJgptJhRnXRGMhuDoe2HKiQebBkGtn48YaWjh",
  "key28": "5RLnpnPwP3QgfG7zXLk1zgn2nBZpo5KWXzwijnRL54Gb6WZKJVFDoZWGw7MRvAwXkEqX7QZ24AwYVFwyMuBKCBxA",
  "key29": "3ngnU2mVhsiKdtr8P3Uhmg724ZkC85NkZq7b1jDn5oUYb4TDjqA1gwNJChDJmXSBhD8et5PR6LFXcDYuGseEaQSh",
  "key30": "5bgyw5hesAZHScr4jF2GsrGbPAQ6ZEfLjRbChaCzCkmF11PjHt1sB9YqVwYDQxzU2yRYJdznpEooLhe1Feb3BEW2",
  "key31": "1ydsAhmasNG81thoifcP2H7GJp4aRJLtkH5VfEjyi9YKpDrfxAYnrFvSMweJTv97G9QCizqEzaR8APwSWQgR44b",
  "key32": "3XbDTssDYg3esSUJ1A6NpbtRweKVFrPtZBiK1iYr4y3zFxkRL23ZP5wkZgMEvMmHsDVHurR1TQnKQypXWuuNv3vG",
  "key33": "2k2yYeeRa3jaL9CDdxJPLxapygieH6UuuPHDT5nA1Dzyq1CAheVN5qBpiftLWpS8kHda1zdUu9AjnTFP3scpz7CQ",
  "key34": "3BVcGU3kpcVzXMZSn73uDanMvaHBU9wLA997WzUvsRq9C1ZzL6CmpFxi2eSBWv81t2foBiWJjViYKbXe2iTr6bKb",
  "key35": "4qNepYH256T8kg7Bv2wkohsRgQHZMHG7xEZLET14siRPm4avQwrVvbymXbiNtom2snoVSvCMuYyPSX1dYTCdCz2P",
  "key36": "26p3cCBcpKcuZfmGzUSxaVh6qff4mkYtMmXN5kDWQtdwPjvk4Lr7eD2Qud4wu5T2TmZjCnKSPUbNHY2WtvDVJK4B",
  "key37": "4kJ5Ay5niWSKQR5zggPNBCZp7fudH9C5g2D4zFbBx4idyehjNhRKXQba56AXhYBzuYzxkB3gHpb2xHSnSPLmy6y6",
  "key38": "49R3WBYeqTijRexHHTsZzRkP3hjphN3KTNtk6woBYW6HLD2wKonkePpcAXPQHnDj5QeoNJoQh2oW8WWtGR2KTpB5",
  "key39": "cakgi1qfDXrjQ7q5se8fTV364UkPQD56J8raC9ZCHhcFYuMEijjwEwAmhmjNzLwtm653X4U1gofG5qJqZJ7MWVS",
  "key40": "49GyXwZvBurJfgu5pfP64qQDEfkmjmEsi5DE5iM44B8i46Dmeo8GMcR3tgKaWzbyxKHh7hxpe32wpCJviyGec96m",
  "key41": "5LdBqBS4kGvv8obZVdGDatZkMvUGEKP2SybjZ52BgdyYxh5cU4pvM2nuaxJDzoh2kDJAfmMcSQC5DT1icCL5cF2A",
  "key42": "4EQpqZijYRCwJ5fCU5Du7oD7SZ9WzVsGSUNvYYpVvcwapfPGNgwQFm7TzqcVyc5nzckLRW2ECXQ1aip7UkgyruFZ",
  "key43": "2jHWkZLVam2YWAiDFw6ZyAEqgGYY2ingRLdsqgeM52QE2hp4sEaHhgaUnrmefKeNbiD7LtDAMHsUEMr7a3YM6v5k",
  "key44": "4X1hJqfhmiKBYCLfs1w4NNLG4a9XgSBicWS7XDNsTLMXU8zF17gqtaaxG4JDc1raXFtFjDUPpskq6WC1e39cLGZy",
  "key45": "4f2KRNvqvGuKg8T3rw6VrrJZsSgHAVtNgGEx6dqkmXDQyybpYS3Jgiq1t4LavBKYGHVUmnPpS8Toz6teBmBojmbm",
  "key46": "Q4mvxAutpC9qh2Dxy7Wb9K8XFUhfnEdnX7nYPkQyaS1br2Lfh2bnKUNTZprfHUuFrJE4wJY77E9fXn5sdrU77wt",
  "key47": "22W4W3VvTYjdkNxKFWCWvSDNaAYeiVk9nkX9mvoNYh2edUEbphjAkVm6JzpDZ3ArH75W5EWu94DA6Ax4kcW53QWC",
  "key48": "ey4gnzqRbpRDc1twpfM3SJ6zkTmmNLdstrDnoMkgbmBjQHzbmxAaSeM51FxnwhieUinYyM9METpgfVN6mc1wJfU",
  "key49": "mj9mKdgWc8eZtktYYduegMHf6keFv6SATMFPzqYunXEp7b8kjzCSJ7VJfCEQup24KmFoYF7QbB45rKvNv83g6dY"
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
