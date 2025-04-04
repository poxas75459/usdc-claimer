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
    "AW53vHGvhzAThudMTs9Pwx9Bvb55UCVJ2JWkfEAodvmegZmvLzgsAj8RzZcbtxrVwsSRYzVRsWUrJratoywzawM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oZ8K4Q6RA8DWoT7ZQiprgAMuTPXAeBaif2T3aL2pGGoUDRSjTJc2MGqV5kqnu5sCZVoQUuoxVyayanYSFrfvgRo",
  "key1": "2hNPvWJxmwSi3A3yYk5r3924FSTTnUn1kXk1WnGF8qQ8aHqLYFKNgw9KeKvcxWdXVjP1YFWkEWarR4sqPHLS6fKC",
  "key2": "3MCVWPgrd8QohtETXQHJ9htQDMuGMiGc7wL7pAEiUj53e9wAzbjGcgbiNRFeFpfYBm5aC9NpZRVoYBnGU4cyW2P7",
  "key3": "4kkvCLXcQjZgELtv9MFo4yGvbWcWLvDoRrbojwg9Fgberq24kuhWSLikbnQnkgEbVBTeqXKmrQjjFW4RS8uiDe2R",
  "key4": "37sA2TWEhxwHsrRtiSU9akKmtqiV2ELfe5CHroCqaJSrbZ4xiDiuzf1dVTmon3HWFYgyAeH5tvUTSyCs9GNgcRc8",
  "key5": "5zhRnBiS8WLJ9p5eFns6QoPeNtmsK6RMC6ePxvMBTJhV4hxmkyrpzJ2m6T2eWkubXifvdvXFffEtvdFchFQp3gxe",
  "key6": "9Mv85z8PRXZ3FgmSstWyRNXSZJ9rcXuJT7r8yXKgYHZLdgjQJrmGEv2sUnJxvGExx6cU5dnNM2DHw6C6XofNgcV",
  "key7": "2UyBGnGQRwEiPPjZX4gwfxMoeBmPjsb3yniTNZvAfBNgR1JJMMzZRsKppEdcsoaaJRk2ePpAhZ3vNZrPaKPovKaw",
  "key8": "3aiFBpTHd2yipjDtUcneaREP9kSzuSN1261zykCARmXG3SCKkgWm7SsSubRWhuKSxTMfAmLEE7uEjauS8KqyoMLb",
  "key9": "yMZbarjZ19hcSnK9MJnD6dPTme1YdK2djgZdcDbd1Sxggio4vE6buFCm4uEchRVuqXurHasPLPPQcdYCrV4fax4",
  "key10": "5G9N1M68SGfHwWeJUijCWrvVGFyHca1QurEbjV1RJ4X5sRwu6FwNFUbwuiraN39TFKLSu6tP8uWH57ZjxJ6ydRHp",
  "key11": "4ysp6MGyKAPa3rMyzBy7t2ZspwvspSQc1UmKPxfqH8cNBMfGm5GLm6MnphKhUj5LXMw5mciDjH7YTt18uuzmyvrx",
  "key12": "3auu7peYSSNzkUUFAZxXR3PWtHGZTYeW4yw8P7rn7CYczhkEdNsRutKC9osgj21W1RHG29PmrLd1vfruppAD4Jfa",
  "key13": "2GD2EuVtS7AVWyzVmSdq2m7boKfqLMQFakQQCVmZzLrpMT6F9nQUW18gW9ijhf4rnzC9LZCUv1RG2VrbPuKjcNx6",
  "key14": "3L1VUSwsrGjWeGnygDtCLwHa5MUuN6z3pUGBQbJMd8YeduErkyqSjKAdbFVgXFCqUkkviiFh6Dir26wACy215NXq",
  "key15": "3Z3J3nuAPkGtCDVHY3sheiM7LYHcWVKHk3Cu86vNS6onjgUdQ5pTS6bfXfaMjrVJ8MJVpgJezJyPR6x5SX6961er",
  "key16": "4WpN2LXdpd1i9VXtLSkQUZiu2CQSo2vNJErBesMmz2MkszYVRWnH12cGeuTZkmJ7e1BGC2ooyg93XNteTUb2AgXr",
  "key17": "5X8nbgHBr6gH18bHaoyoDYDDxDi2mgKF6rtAZVPyBhGiGtTXeWLaZFWkSzTrgEhVYNjYemzB7uJsFBvGM5uDZzLL",
  "key18": "wndKRDQUMdP1WjXz794pek6JtR7kiQxGnpCvwMimeYrV8QoVeYeoNEiTo8QbJTSfB2Hojfqi4s7iAn8CEEofhKc",
  "key19": "QHeFTP6CN8CfKSzeJWZ5Z4veGFCJeDfpY2dBMPgbWs4GE4WXPd4CgCzwsAhHSCqd8Qr4yq4v32qAzdBMVzuKAci",
  "key20": "K1ysVuj229qCMvv3wUWJVjdGR23Qv5gbVPXAUgCZkm4PozoR46ASpr3NRzfFS4W4CvX47RiH318ELXFt8FFERab",
  "key21": "5sj575y28vdMHA9QFB44FVzYuk4PMSDmEFSxvrM6eXqik2Vkxrz6ARtdwYRULnVJQ2DE49NH4y9Ld5oZS7vcdBUm",
  "key22": "Ft6WXr4An3f6oVtHyECxE4J6pCpVfjY1pi6VAFygu4zHp6fZ2x8k22w6MaeCA2dGwaaB7pBvXfJT66DkdZbgF55",
  "key23": "2NSDFwyYRxAyp4Vx6xUeJrNfS8CQ3MVLVaEo4nynbgGViBjvuGix1vKzbdWRkMJsEBaMXhhr4RVbXnv25xpVmoHH",
  "key24": "2DTnqSFFsjJ4i6yavfK5xqYLXYyhMPFjNkStMPwaCBjveF74cHanJfwaMiQVWg3bQNZotEkv7WnvHacufHoyfBy1",
  "key25": "5RDbbSM1trD5JJALzH6282UginvbjmGmifxgztNW3t67hKJsnfR1PJ5JMAg5EMpCkUoavVv6P9zxZkbbZojakhc4",
  "key26": "215Uk1fzmzKVzQTRCjHNpVBxnrBhE8RDRng65LqDoafcNPm4FGnHvGGSJga3taiQXJrp1fW4rLaAR9bmd3Sqp3B7",
  "key27": "4DYfk2uQMvDeUnc8kwfu2Qkz7PnB326Wp3KNLqpLwpBNu7eKgrxf9VLqvKfH11aaqooBbViUzMy7TxyHf9CoWZ3r",
  "key28": "4JmTmL5bWTRPxb63aNRJjAYxXmXxtGzfv7hoVTdEhY8iTuVxSJVKNu1XhYYc5RZdt7u5mCRsdWoVEBgpDt4aA4b8",
  "key29": "5e2Drs8LyikQY4T7HjjV388bZQM2cMahCoGMdM2EYNM9U9ZHzS8Z4NXwueZjXvFMUJ4YyE1gfg3eGd6vfWbohD97",
  "key30": "2SCJr4ukpv4YAipQV6hmq1g9z1mQsad7W2ezGALpJnPKmghXiyxkLG7H3vsvNYoTzbfjeGZECQdLTXAsYDS5Tr11",
  "key31": "EWKyR5tUo8fEMTrD3v6Jxv3nwcV2r9pqPLq6VbKwgfKhR3TRtkbZY7jko4ovn1joRC6tStkezdQzaqLH8nzgHG5",
  "key32": "3z53ckxBrNqKP3fBzcH66wTbEnEDGrjCwispTzYjcEZ6xRxFW1eHns7yYbvD363Q4EBTJx5hM6q7iZv1YQSeSkPr",
  "key33": "2NpeVU3XQjQisdCZm5iqkddkenTCewzdT6NgVSohs1SyRqVnQ6mPtCaUCocaAhCNrGAiomWnWVDL6Pyg2rBHeMoc",
  "key34": "XPuXmADJa83ipQDwmerwf6c6sqte9Y2Kb4kVXQrgVrB2pNb2v1Apt8ebuo1u5g5LbcnPsxy9hYAytk6WAS58WS7",
  "key35": "kcJex35Upp6g4sxwWDyTXNjMb7PczvSKN1aZUERzFwZaw1UJRtx3G8waUCNQcZSbByFNRb4c6tmhpnKacv8N9x1",
  "key36": "8BHR2kQ91SMnVt5xE6zPEoJK217yHM5aFFamLuft6dWnuJ4Swn2hqWNDnqcJSai2WDDiqJCVYE6TR6U6FTeHbxE",
  "key37": "36c8TsSHGLqPn42qhDKBB4HTT36UYVQeS3Jx7FTZgnVxRaVAqvURWsQBng9tB94tK1nEr8LADcs5NVhFkrDA1TAz",
  "key38": "WD6ezQaykA9mvHHy3jt293agNZcRrpJZY3nyNRa7Zex8rXbi5BndLoD4pGbYiBKDK7fw3KrZEo4BmMBaxP4QHdL",
  "key39": "3CkJbpuy7L89a2LSSpzZEDKhmDx1JNmjf18hwwbQMhtnQYWjNqrqVuAm4jPmAus7uxdio3bh8t7Q6Sg7EJbmNuao",
  "key40": "33MRc9c85DYwaAZ7UbrPvWe1B8heE6XVKkKyaSErhVwL76ytJRMSSPz632y7ARfRiq1Jy3LvS2ijGJN5JRYXtBkh",
  "key41": "3Cb138dBf9K7LsLgDqhgPi2NpjLpUMSL8tjP9nfUywLFUn9dQKFqT6J4ZcBUoMEm7LGoKfjx6qoZaGsR3HPAdwYm",
  "key42": "5ijLwMg8HAkjMTE4MMAF55KjS5xH3mB7U4o6WBeJyuzfYtEa5YFHRVPg27i9egkCAAWGCiacG7xoPtgK3tCUs9jf",
  "key43": "2PLGwwQR331eTXmBLrUNegP1qgVwaXSZJ1kbBCY32a39t7fMLTxcAP57dq1XQxjsW8MN53XYbTfiWoakBppgpH8a",
  "key44": "9rWHvREdipUJf91HA2vyQaBE6DNmcTuzwTANorCQsWBuwNxCJsSoa2bcEe8BbGqmbT3q7euHgSiBukz1tdNiPzx",
  "key45": "2d3ngbcffHDuQkxxdRf6YuyvGS3ZMRh1KacQT8qxVLvAXP9CgUtvwJagM2s5HaupgihQzaYAHWzG5dNJg4mYKkik",
  "key46": "2Gpp5ENZHKnsgSGBb3S2bH6j1ktkxUtqQvAvdtmyr9jpVLeFFvkpnAdQPTredWUaA6EQdeREg1NxdUUrXvM32QpQ"
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
