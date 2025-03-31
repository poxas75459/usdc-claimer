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
    "4wSRBK7k1kiZfP4SdoUsv3RvUthdiHxmWhVjkmHS1vparUhqY2LaBhLnSZx9CAGBToSjsAEw5do2BS6stZg3L5xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59W7Atdf5qb5aneqDFg7Hs68xnXveCdpGqy8RbYzE3ugRvQ1A94zW6toiVzfAsWoerz9xGoTht88JZUhtsr18sa3",
  "key1": "4du6KjH3ZRreDSgjQhJL92toJXSkBSVkj4AqQirgVcmqXdNPNBQ6FjFugyfC4mALweyeL5jUBPdkwRdmN9puzdVi",
  "key2": "32oU1hrzMJv3bwX8uHGG99EFPQ5dZyfP3xLdqm1YST7eiYEJo8qtvohBXnqGDmU1jrfP7Bx276uUD3AAK8KyJNTn",
  "key3": "26MtKmx9JCWK3ydX2bKLNy182A5Cg5i6TFg8NPkUAxDf8BF5mGxdHseru1NcANQNg2NXu4XN4hcBX7oaA94Aovum",
  "key4": "TjJp6C4m3SWqWnTepqypDHLBWcQ97tEZi2q6uJyZhkdJCEJarDtwTTgz7QEoJBpgiAGHWHbpszuy9vmxeXaQD84",
  "key5": "4vBckiFGfHvUiA5ZHSK9oUWc1C5G7R3pNxWFyVjcqaT31R2C5fzFZ4w4Mi6CPBfu9aKCGKmKG6qCrzEGAgXczSQo",
  "key6": "1M9RpiF6tyGtRkKZT3P5SeC62LLYxDsaqv3VSeSDP3De6rkLidB5tu7U8rvruxsveSr2FC5xGdK6ZyqYUb4ckuK",
  "key7": "2ctJ561usL4DkZd1F3XUFRAGtXnif9utdvVJT9Jzx98KnXYzZcgUGgaXC84ai5s7EPbY4dsXmsegnYLwmgAgjucq",
  "key8": "2ekCjKfGKGgXHvakgDf1rMWdtHewkCPiQpzc6MPEjr3BgDCoH6Dje99c3nkoEfiTAG8RXoBhBNZNL2QVBL4SdHt5",
  "key9": "5zUXiLnjZJvsUjp4GpjL9KPbg3UxAnzmXXiauotWX6ktx8Jh1DAg6xXNpgUSGhzkkYGVoByPAS1VAU8bXRw5Gpiw",
  "key10": "4kVhcb2R25S9UvcJDw332voJ52CCpyXtyztRQtWDkzRmAQzih38pEHDQsALGy29hhRqjC2oAVEKMzTwNXNjJuQES",
  "key11": "4mqvGUfNHpYpS556c2ACLWLqWFt9eKmzWhteYMaotoCVFhJ9AGqtc1juvQrBFkyYmwYQ3kybe31qsGKmfnX5MhVd",
  "key12": "3e1ASnRpJgnqERWrdG666uYXtWKbxaH5i7aEVygVYmWQo2yP5eYt836bpSg3nPeEygLK5xS7rTxDqQxmETFvXxK3",
  "key13": "2k39zaAkoqBBpNbooNxvFUKQtUzy8DZwKSSefvFQbcyWswR1f7hbxZndW3Z57oydmikKrrGZRM9ZJfx8wSqogfb",
  "key14": "2KakzWfsWYdbMxFmQEPvpF3E2AmXFi9rbCxBrudfEsv9dfSvTqv2aye9wiFPAJa9UfodBqTivLzCZoSAFawm9kZR",
  "key15": "2tcNpMs3GKQj172HE55T259bqDmxgGDmt4WURA4vseYZzCbBCxwa2emoNybMj7yMNFTdpRP8fmFfZCp6KbJCegB",
  "key16": "mpFZrmz5tQ5b8k5QsCD3jfgEGWLMXDkho2iDcTd8yLnoHrbCd2KdV88qbigAGgivuoZr7zBiCQF37eaHaPvzqGV",
  "key17": "n4S5pqiCuUeMskbiGQkKSBkiZbDjRz37fNCL6qotyx1PJqbyqwEtasVWTVkysgcRRH9gdfyAinQLiBoCe2hwybj",
  "key18": "4dfNTyQZvQXkgYZD42fmyFzGk6vFB65jLHwZDFpGUMLtpEMohvPxfjULU5VJSHVMgi4njKLyvnCXumeS24miXcZ2",
  "key19": "5KqKU28jFyqfjjJjyg5Ubm7t3iiDeeJ7EPjMWaD7m7nJvHFe1S7n5NZYXMNYTX3zCz3ehQFXBQ8nGd3tVyTMgjXv",
  "key20": "4KztkmhZrYi2iLgXoRzCiVeyPkdZm59ZjYhxXKQt9CqQGQXfvBnhu1JvAS9gbpYTSfBmNkeM6EAhhWf3byLAYwne",
  "key21": "66MSna47B5tCWzQqLkUyAWLZeUk5qPtJaLAFZsKebrB5UMmo6dyY9sJaTg4m7MseTpG9bCvpRAVZksKpHheSDT3x",
  "key22": "3e72aod9GNAAnN28JNb8ykMQctqX62MrQSgMwx3RGCGjAidWe3783UeE1GcSPSJGFAvLfL1TUzMjrTcox1B8MU5F",
  "key23": "UeXYKmm9PAHdyJzR8JoLCvvyH4Tf87K75hZiqdqGmG5Xkfv5ccX9Y9TDzey22MQKpHVMWHTK8vH2NynQx5petBJ",
  "key24": "21vtcLFaNLJYegnb8b7C14GncybzXgHeLR27p2F4FwEpRjCnug99FD7FEoXxmGCMSCMLW8QYnVhVph938GJQcptJ",
  "key25": "56T5tikFdRVqmk4fE4QMod6jtRjv44p4KKHN9zyDHrhivhXF1xXKJVABLuNPjeMrtLQRGJmNG8Jf4DpD3pikwMJY",
  "key26": "4Hizi1dpZo7J2HkpxPHmajXkfxwYf9rgDQdKi2xkKjXBfyuh94STn1qE3PBAGTtmuZ8xg5pc3HbPtAqPSyhDeB9J",
  "key27": "tFHyGjNzfipJJaSmoEukcZuYSAK2yj1oSHC11Quv5wQKfwUnxFgm71PX8VzppEybfPCAszyhsxLq8fRN7Pmj6WE",
  "key28": "2fnhWWTeJQqfxKK7QZogyp4QcZRkWJSjtWmSQBEarhLP1MpUMZY8J7cQY9a7v2RrSgihDxbKn49kTMgK8aiuMJ1",
  "key29": "24eqRSe2zhvU8b7JUL7UmLXJrH5b39qicG3T95Z615uH3AKpMGXaxWkNEqSyc8Spr1skw3FZhN4TV3cEmpB8fU48",
  "key30": "2zAtfhhqxuYizuEU8wLpJAMugGy9Q6FZpicdGNcwf8GUirBDjAAdJfuESZoTQPjXgJwFSeQ78WLDcgtUDhfn3APP",
  "key31": "588tZMxhfqBAG1TZzcGLdwhoMs6K7ctnspWSFyV7yJ72kruSnRFUDKZbDqdq45UL4X7a2G5vmDSEALLa4K3oRCHZ",
  "key32": "4CG2PcCTyPRRDLK9KGp5LwnPRQYWLyG6frd4zpCfRB3tBH1ZqD1UY2AKDyyD6tftjEVSLXERAmS8VswXMtNAHCQp",
  "key33": "4fYutouw1FnY4RvXNZtopbHaUD6K6RsHyGHX7Z3iy94TZno1LYgVuU1Lw28WGqNwpiBoX2kcy24ThcRddmH2EpAZ",
  "key34": "4jQNdVNJ26bDKUs1ikafpfg9fB8yocbnFuzgjimPHsESpKQQPsD8eQrvi7etTSLo2a8GBvGeS6QiJukuwodxGoEX",
  "key35": "5fThTGPM4TwEGho8CeiR1W1RDKZBnMPU4iJxLUeBaXh3VtwRiNmrp6SjgdnMh8Zoe8ZEcfAWK9qeKoR7mok4hZyT",
  "key36": "8AL33uQ6Q7WgxkKjUhPgYp2mY4fCPFKEhhn1aEzaUFeodVHYbVRbyTCZFeXd23i5HyfVr3u5um1N21fmSwHUL5P",
  "key37": "21giCdwmbvGdFcaxVubCYFeb3kZSLE6f8k4Ah6ukK9QSkytKfjqMY4UMk5BNp22YFHGaSi36csxt2qQgLXSfWpcg",
  "key38": "519AvPPXc829qZpfPj7qD7UuLpeYMm2usRPLknn3ayyHVBpcXTKPsZprdnpe7u3Qyh6bhN9n1en5oQfuZWMJSzra",
  "key39": "4QstcXfRt2oQLqVFMMbCc9JLL9RenBSiXPoRMZDr1CFAzunoCYubnfpjLab13AqSPsn83mLpbE5CDB1GNhsJV7BP",
  "key40": "2jbD5VMoqsSEMux2KhUwS7TWXz4aaFF3FHDBiPsEPyxq74HuHtPN5V9ABbD4bqVysKYY8kkHYbYwfACbNz5gCFaS",
  "key41": "64hjeWoyJGfFJ1gcfsBbXzM6qc5ZESTL4PUe9JTu5vRQgMnEegaA8hVWUF6obTpeh6QLy9JmqHutZr1roSRFrSwe",
  "key42": "5XLQkK1K7CYioZ5ZaEgFvPvSAAbYWmDkSZ3fRB6ptptjwjfDqjN5sEYhS94EWNVR3bUgttQCAA3Rm7jsjnYzjkeZ",
  "key43": "Bky5bnrFGXQxcAgCqEXwB1RLgTuCdoiBm3uTuj6Lfc1Xtdciq4F21SFiytxHMJkcvJtTTpdkYaWV6fm4HxjXMc4",
  "key44": "PBGrAGhLTqq4bc2AQFjgg5svPnhB4vzBqFP5EjptvYGNwX9pAc4kaULAwoTkGyQaQAWUoubUK9GwQoPpt5twJXb",
  "key45": "3hRGRttYSa69TqYm41HAGqKsVnrvUEEFnEnnyBSFigdb1C6H28QsPKfsT8a4rFDB6McqnveX5zhAxbzp3PFrNKoQ",
  "key46": "5yi7KK2kqhHvUPSjPdjgCUekabpG9HpaJdD2NJF1hTVP9mSNiT4KGVSDsntSE3B2jeavzNyUMRmMDyPZAFrxVCpB",
  "key47": "5NBSdUs3fb9sFjhN6mpRnU9X97oydE1tnyDEcWXZ7cUGwzoUpcTJkgXrsybA4d1arWs2tgEUSvxcXj4wpXprBQFM"
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
