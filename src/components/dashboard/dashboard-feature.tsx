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
    "63sh67tmzhE6hNptRPhLvvvauD7eEoQTu91Cn4GuBB7o1w4kFyTdQw67365ukgViAHQgnideNrPaFmAJgcipeAuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNSCMhgMJNF1oAK2dRhNffVZo1BNHsfUVgjrYDjFd8JdANUqLShRSjdFJVCZ1Lerk5W3o2rJEADXzpQEf5qR3Rs",
  "key1": "5RJ83FTKjJda9yXqfDDKRVf8ysXVCMzemBUM5CovjFvj6VXTGQF11xqT92TYJ4GxNiGd8sGgkkvUt1kTTFAvH5fx",
  "key2": "5rgHDmkvkphPd826ign3NNHFCE7nwSLK3Yd5ZRhDzk9wr7iGa2TK6Gca36h9Ddp4AiY7J4meh3g5ZR4Qc612jGws",
  "key3": "2A7cJadT82qoErB8WrSf2NqouQmaYGBvRG83fesPuqiHmg3dBdQiaQT9w91TWnNGyXH2v3YCXpqUwHY1PerahZaT",
  "key4": "65CQLZLxtaX273867KDaJAXs56TjAeJ2heEXaMRBbUYbfconxTTYN8NXe7gjGvG33SpAU49QyPmjhCfjj8zSJzwC",
  "key5": "4JFNqDWW3513kT64eJPewf5Pm5TfFx2sp9EbyyQXjhSfX5CLk3PXaKCfgtmN6EqrYVV43HEdbDbuEmLiWGUqguzc",
  "key6": "63tsT73Zo5KYnPpp2iZCNcLU17d8ei3Lunn1XSAgNtv5MgJxwWM4FVGZEyruZ7kkSg7duiVcYDjYtyuNHxbLTpis",
  "key7": "2s2ZbLVfVn1P6u2cSBa6xVLaXKuffVAik23K12UFJf3uKwiRyS47459kJqwuv3RsyW2ufSpJMHnxJFirRG8SuuGe",
  "key8": "66PSZkAxdi5uCcaFPFsJisPNaT1JpGHcdS4EACoat19ovW18szfChBLJB4fxEbNnXLRQUDgG7kk1Q4hFgRHhHiJ2",
  "key9": "qzHGEJzVQonNEpsz9zMXS28ZrEjXQyzFm8xa3NMjFYxg7Dq9CpiKUFkTd5KoY8ngaGNAsmgLg7nYhFp8Qe4KANq",
  "key10": "3t6SgquqAzizhN6FTSEfz8hAJG7EkFx3NKH7KYif8Rp5gCYRn8tyg18BLBAFYXjojoDkvzvt6t1MtYRFc5GNC8vP",
  "key11": "MaNGMPAWvHYMSSCzarxNXPkW2aRztMWMAuoWamAnZs9fbwVx8oPxLMhMa1dFLTF1ZFUpJ8MZHxQmqcwKbJLUdbn",
  "key12": "2h41hzLqNFXHH5u9RypXEH7gpJdAiNcYKxrE2moQumt8KG7PVuDKnoAYYyMmFp99i6NC6Y1uetC9nj33oZmJVn9P",
  "key13": "2jYFLouRXpWvtksQ7Km775KBsreTYxjuCoAbD6rMU2RE4un6S4EEnLKAcw4skfCVfQAgoA155m1Yp5ED5zf5P1oz",
  "key14": "kmZPpe3cRPKhdd8ChMPgpBuDCFqYfHBM36YCcrkdtJkUonmGwnQJ8zAzDC6UME6bqQeFPMtc3hbdngvcQu3a4Du",
  "key15": "2NjRZWL8WJL88AT4kArimyC1uLYN3TRkZRTSBjHptm2PNGZR4zVoidbAkuKVpKrp2857ioRJmKH2tp86iK1ZW3bW",
  "key16": "rSKi3cMwc8BKohj4p2TXJEVwDQ23uUx692ir9PSPHk9MwstH2bvXnyDim2eGhunxXvkn1zTUuiXBSGwJAgGYw6h",
  "key17": "X9k3VRXwDfYjQqZqpooL6fmjqYwSo3Duqus95Pzj7nudkxY3h4MLi1G1g8mjUjde1PDhPmwXvW1Pzf97zhCyepd",
  "key18": "62XXNHyfJ7YYvdX3t8QQSZzAzRCXPBsu2V96h37U2RHbQypHpVLDZSMSvJM5SHcmzSxu4PYbR7zjUHuixA1syow5",
  "key19": "53tpdCC1Cz4v6JkBw4ZosLgkfzpnTe8cGL5EyG3tgd4YqoCmqkSVBj28b6pJFdX4VGr1yyrmvq1oYkzNfjfYu1i",
  "key20": "4E57JeDtBuapRnonUEH9R7sp9yeBup6Fc6Pfuhc3rgyvXAYQTaiYe28e7vivQQM4aiYanJem3K4Zv1Y1L3gDMF7j",
  "key21": "3MXZFPt5yRFQf1z41egfx2dmZ2Cn9VWdy25gR8PguiTDN4EJvQyUqeWBZrCAeDuPPbohJRTeofp5xeyvqmLMVaFh",
  "key22": "3nb2UeQRiiy7sHVjsX1vGEL9ecS8oKHk2DtbKNf4PZvfJsDhBGsiarwh3oVRWgjP13Tr2hgM3wZiEfTJbvypUeDM",
  "key23": "PMQM7FqG7VwS9znCjRuNkotsy1tLaG5if2pmg471pQbJR6JKLsjsUWr5uCBGBbESeWTsLXKnAF2SaC42nWFdgEn",
  "key24": "2L72Qdc8aQrAkECdSjJ3CmVfCntHrnpgEzt4FzQkbLjGgzHBAiLjuP9hedDNigKYnApWM9uFgyB4CjCpocMaZJs4",
  "key25": "4sg6n5Wemvs1c6axRtUiZ2F3FfyJwSkq6cY7yAyNdNvhetehB1wuQZKvxHWbdfC3hZbbask7CUSuHjLdbJWYdqcY",
  "key26": "2UPPJgNESD3R8okgkM9iMB5Ms8vjjUuPPtMVWt3Q8xkfy1kSckbEhHobMKpZtvDPAHxjCaSvcdrET7WuxSYNKbmz",
  "key27": "43vESohT1Ueq56t3EYL4ycSBboJ57bZCesQjbs7HXvVHTFmFc5fowSjnHu1uGo1mccwUcT9kQCLznCD8qeDpJHnZ",
  "key28": "3hF2HXQg3qZBLNQPZYVg7gc8S1CQ95A8Cc6JUnpyaZzKKHEXYwPdcw2aTTSyvPCw8Z4qyefnYe1tjWwSJJw291Ke",
  "key29": "3E547BxgKd2qYhVs6vVWdVyutqe1MNtHfwJfSrTjjrdWkoc5VcEfh14LJMYaFPxcV6kbAKv8ZHHRepZmuwAYHNJ8",
  "key30": "2ETqKMs4nzY5GCpxU8jHaZrbTCTxzvnfdg1jWmUwSWrM3iAdyWj9GCJ6jUWrAviMiA2q1RZ1ZTRzw6DgCaRfDeLr",
  "key31": "38ktzXiDa3uy5W5DXPuCasKcbR78xyitezFbQBq81mS8NqxMAZbHAJKqaM1ePBi5EAnyiGWHW3M6b5MhuFgsxe2n",
  "key32": "5wy9MGaXZ4oP6B9uGu4MVKLWH6iW9upYY48hvUkVNDCGC24F9M1v45iNPB4hqVVXqW6QdQZZGg7Cm93tyMWytRUN",
  "key33": "5VKiYZhY28BogbBRVfcTn6dQrViZeWgDDsCVzNK9z6Q62GJEXjPiw3iYqg9afphrStNiumVkKbuQ2hQDPQX9mAQU",
  "key34": "61cQAM28ULEcad4pqt82TTqSd8oXD9hUUkFtbPUMaPUzfzBrppd6qDg4GxjZRpLJH51cXpRfCA5RKsKFwGmHDjNo",
  "key35": "kcR755NPhsZejLJ24GGocvKD8eZC3SdWFKsv157fhAQPvMAoBRXcGDUymDx84mw8vpiQM1Dn1bKeqAtoxj9mMG4",
  "key36": "5ydvLAwk9mgiG6AB8vcTfbihUFFYZTYRothp5Mc5ENmpcrVX67QzdrWC4BaWvvMtNUHRNBJzoA6FtyqXvjGJcWBx",
  "key37": "5Kdq5r7iVFpeBmUZTyyGcEwnP8Dd51k7GdGVbuG8ZPV4iA9tRHYr9WKtShDhJY63b6RB1g3Ce4uKoeqLjhZ1zyJo",
  "key38": "48CYj1X2Juw55pUN9BBp3uaQzGxYsHYoKyGbxnrSjGnFSBRy511DfNXsLFxV21YPgAvavfmiqNkpM253mKgMFh1c",
  "key39": "5MtGGCc7F9pU2BAFF3h4JUuXdanRYbVNvVE3oejbTd5GBimJhhnSW7Ngk1FrmU7QBjv2FFeDpTxYK1wtf1Y4EYVn",
  "key40": "2rNFJgXo6atFyJBT2SFMGQvY3AXG7vvUQ3PpPfydeorJM4DRpRthyQjjuFvbY61yeDWJounax9E1Rm2uE7s42rEP",
  "key41": "s3x3mf7kpFdHSfaivd1RhAPw65an3P5AKiwP6hRK5YqihGD369WyseZEkMqPMZ8YzkEZNNEtTUxfdur3RqEkjgq",
  "key42": "2X9p5iNR4fihu2tLobKYbMz94r4dBCQacz53a5FE9V86sU47e7jRsZZF4QNQvgdPJWLeZwskmcygT3C9unyAcp4y",
  "key43": "oV1VVB4tnGSqytgK2u3UMvFheqFybMLUKA6nTEg1rZ8GPdK28XWGhZX7CnCEkMruQM6RNo8ou1MTTqBXe9LnPvY",
  "key44": "GvFHYm6yMgqLTVWDkGDQNoqvVy7SoFQYX4HgVa6KehMEChDx5BfoRMAe5FYsDEisQkBW6MTtTTnLi3LMBuo46g8",
  "key45": "fDR2umATTR6br4zxVEPdo2qDyxpKKzYo6xCxwF346SHK27uagMUKv8s13Rd2cbAQG5F79iHNU3Grf3HZjqt4hNZ",
  "key46": "2mgXQd3oNPkpbMEJ35eKrCzUJea7T5L1nYyUxFZa1KgFA2HG4rxbdYpz5WqetoTvyDB4ykzuFaLVBNDVQnPA2jFk",
  "key47": "2EBgc5iWjSukNXufiozQrXRKzPgohgM9dQKXCwwSbXNSswPJkchQXFWPuiBoYbLqQPR6HAcA2hG5e6YySCnSm4d"
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
