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
    "xXhuLp9R6zz2VuE6eU3CRQJgGKnosPJ1hjdMjK9HQcGUqbW21F7hLzq1oR5LoC9N5RULkZLmqki7EYGYVHd1uU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KWsDiAQhiWu8NRFndBBPa94dUDa3QE46s4wZkxLq541PumzNyccBSw5PQzbkTPcEBhBseoHq2BAbEBJ3Pro9Wtw",
  "key1": "3fECoauh2yt5x6jo9RHAndc93UyauHn65JLMQtz4Xjquz9NYRQqx4dKqS6RguZPrRbejk4iKVBhJmFKCsfQovuT5",
  "key2": "238JRDkQt8MHVVmmPLKkdzLvyfydL1mNij94XKScr4F8EKGgPYeBUpqLw4ZJDupiWW4RiFaoa8RFbZXcRrDMD85U",
  "key3": "3EPM9oGx5628Cn8jrm1bZ86nE2pEHDwhZcVYKqbL8CFoyAYmHK1rieUzHn9t6bDR6n8N8VfKAsKtJbrijiXYUUSU",
  "key4": "3yuNWmsc1uZrgQVsSWyNucDeYV4EoAiWTeyC7kRZZz9FNK2CV3n2XRqF4fU31A5ZJi1CkLnNkxHWr7NiNPMwo1nc",
  "key5": "3nLHV5su5YBwzdE48EhZy7LKhLQ6WBogxRygNGzPUspwhLUzVK6HPaz9WeXW8UAYKaP1JwGtWyn4KDmw9QYDmfZR",
  "key6": "gubVyibA4r7HP6e8Sj7cjLBJJLkTmBSDJ6v6UXgeRRXGuamZaGGzsBPkJHmuFkrRAA7cLi5ZTBYigZ2fM5XD6s5",
  "key7": "2RuicKSHd7yPHAjNkz3xBWTutSapjkVpXkiKUpUkUgayScj6dqsNGtYkxZSgHSGm2TrvDYozYVCJLq2SZNJ3znYj",
  "key8": "2ZvLqAe8VrQdLASVjraMsrnauwkNQYAwQf6EL8uWvdZLDNUgM7mjUNd28yDMpSTAsFg95tw5jcK6yuh6hkboBfKu",
  "key9": "4M8msyWiPvwaKxBvkJe8tyfRu5EqhaEE8B3q1jD55u25cmKeHMBytAU8PFSx817RwhMUQX4bn3QZhqGkaz9a2kfX",
  "key10": "5yS6MivNAKue53rHiSTfFvUvNf44oEod5jgZ3nFEtpzRmzmqUYBqX9LnXSvyC3mkiMJ9dJEJgrNFCcMmHzJ4vj1c",
  "key11": "3LLChLGD8e7tjKqfrBaxDqrRfa9YpaTVpi5LSqox6BrNqVBMoa2FkpeB55qnoBS4pUx5wmZtsexpniiAAnwnTJNM",
  "key12": "44zrA4kqKxkJmWGVSLUy7aHECSU55J8rB3M59aZw6iUf1WPEowMbaDq7VEWERGYmTnVr2KaiuNE8MRuCKVLmVG94",
  "key13": "3WVC1eJTQr4BRhr8sX1aBYDBtWDvRtGEn63xBYzcrpba4tM3fTyS2jxCYQqvgD6pWYf9heRmqbpvafZehqJ7cN8K",
  "key14": "2TMjpZeQqPJsQnVVL4WArShuFSo7Q7R1kjba4VQ4UpjrceNz5imNzuLp2ABS92BwELKCwVjJMGghVFnjUh2UL1gv",
  "key15": "3FoZE6CbB9eYoppvtkos7kFvggFkPqVEwRf8VMVe3xbrATUds99sVDz9X9QKJywNj3VnH7SRKYK7ECd7FLGHYvkm",
  "key16": "5Lt8XrGNtrk6uSgKuRn7LCvVUVHwwPENw1b52zodnDAZ2kRMadp4jTpAxR2Fp7we2TvU2sZEv6xM5rrm9X9jReM2",
  "key17": "4htFqEhfhzsKebPhg66SX2WNXFBbs9qvqQBdw1T3rVc1e2ewWmFL6fZgRRU8daziPBfr4x51Xhf492sqLaPLqTGj",
  "key18": "3Tj1ZVUqPfGafp4jVnJYzhGjYnqDfiRHSmAarvTMDALsdGwJd13GQ3DRqmt8TCBG4CRUzVJAdw64MNycMGdDMpCf",
  "key19": "4uVhFgGpMztAF7QFWtbcSUozsaUq6jiwS3bYkjfUTWuAu7mJqCfWVEEQZme24RfAvwU3KwxMtuRcjePDJ6HVbYfh",
  "key20": "5onGSJB8PMV5ArztgXjta1DbUTqdbtLNMZ943wsQTiz3xWhiV3U7kijQL4KcEfaWph3xeSypZBB9UFHpNfuMbeHr",
  "key21": "3pYmph6JcLX7E8yYbyB9MxttjvpWgBY21Lo9gmyp7TEumXoDXdGfAFaciYSdEaUeZY8gv1smr1VZsijmS7zV6Bza",
  "key22": "4cUiapD1CyjL6C9vkbQiPN63L6d2HbDuuH3cxvTxey3KSdqAxPzQfochE3YqpY1ynVTkPXQbzB1Yed7GMF8DN93F",
  "key23": "3teUFMPbNPQNsvrHksq57co6DsWu9T9uyGSnFW85dR7PQNhR7i5DEPP2Xwm6xkUrseYLV7pnDttXbdXeRSa5ztyn",
  "key24": "2ucEYiFgXkC6hr5txxs8edJn8CaF31St5WgAta7qWmWC1MXqFWfCAZRZJuPjtmZdMQVpJBZig8Up6yT49izNdMhM",
  "key25": "QTsNmZyM8ugoUAP6pVY7vbsq2eEMEBDv8bswR8fgt7qwSoa4QVqU5vyFut51j8DPenQKSHJ3JmCq6rNxhfsiEQ6",
  "key26": "TXUUNyZxJ85jx44mUrFBmugkgukWVXGBFBPz959EE5SqRjNYvihUi1N5f92pwBsLsABVepu3nDogL7J9yRgmZAc",
  "key27": "3p4HXCutW9MZpN3T6WMNzCZST84LM18GTYzLWXNwqJDYByQU51C2i46z6q2QxQfhCeamHMaSCarLQoAsrc4pLddL",
  "key28": "3pnDc4d29n3q2CKsEvau5i8g8wzqYWcqPMXruGsakA6FDhHaX2VgnuWCzVN9WikJa7nsaqHuz4TD6dLmwgLj6UsP",
  "key29": "3Jdy3WNGv213xbcEtdUfE2S9ANaYa9mSRa73N2j6i95N3yyynhw5k9rqecPCbiDw5DPi7tcZEKAG9jB56Gtmu8G7",
  "key30": "3gSGA5zfxNcBgTJGBxQ16UU37nNn2ahognYjgu9YkZKZgvyyZbL7XvZ4VaDfRLVruxHckdniSH4kYEM7tDa8g9PA",
  "key31": "KAB96fJ7AXHdc2Ha1CN8o9GCygbDcui2omQQ11qe7inNgowvuuPCJLgi1yseopU21WkuRRuCaaChx4KfoH9NYKk",
  "key32": "4NdUsS59D9Xidva6PKyAuRRoCzh7BkMETb5BPhPrh89Ajx9HiLfj9oTVZd852BPFsWmFpMAUv2jcxSsfQhFcxfGV",
  "key33": "51zuP4dmHDLkcBTeDvc9ysMRQLGVSTk2d6THQhNriT3URzj81rX14Zvsq5evKakPGmGwyzyHggDaw7SbsBiGsbSn",
  "key34": "4wNV1PcreMkzpN9swcbEtXDvTwmBTq49yFfPQHeFrrtcNqTTnVveeawu1cwjJ7HFs9eUiVZ6KijsEbRKV9wHpfNb",
  "key35": "3YRe42wE5zxzFTifyknTtd3P7kr3p3tt8pyUZUmi7GAHo4h2EM7K81EkzwjK3cNBH9qpsoQ73P6EfgbiGbFjfcso",
  "key36": "2UGE4U6aevtuguDXHAkPGEY6Dj93ZygG9ueB37gfuqXC6cNeNryoJbe8b6BePvbHLtsXcp9RRL32HducSK7jAWXW",
  "key37": "4DXjPRh7JXFwshobUR3ZbJy8JLo9AmxHKLqFm7eeWqvjWiKAqj68xgrTrZ34UaHV7SKP7xygVFoG99jY6BpNt9Qi",
  "key38": "58DCvWT3cz2JLgg43eLmiL2F52FMcApAuFEJex9DP4C9zsiqtNDwuUHr8W9ei6WhVFMh2nFGkcsVx9xMeamHuMqR",
  "key39": "5P4bT6qQj1hT5NML4iu1FgWpH1fQCkiq5Pm1djSCZmDNTpLfEu8RBhSeNi7bx5SgMVg5RjPvceZj6LA5RKxZTdXM",
  "key40": "2DE84vnK7F4DhdWPZakn3iiMVd882b5DaM8i6xfeCEv1NyoVkGTa2E6xZQJiRed1vEvFr5jRWFi4zYyXkqZa1ccH",
  "key41": "2GU9e4zBfe5m2CgG7dgqTd7yjMJdTsmPuYwDxpx6JcDbHzL99mxyVFzaTsuhTnhJobavXYHXfTZpAYmwJ7Ho7ey8",
  "key42": "5hzgW9R1etqvNaxBvYdJNtUo9tMMN2pwmbV86jXDC4Vuuxxp9vwYPUojp7e2rXKpgfAAUTyLUSkiMW6z6o8AeDKX",
  "key43": "28HnUy3i4SeGqQ8CutHiKZktCiVCLSSixJag3QKU23NVUKZN5C8GrprDmG5zRQvR7m8H9uRDne5ysAjpLDR8GFaH"
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
