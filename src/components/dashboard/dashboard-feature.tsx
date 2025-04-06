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
    "5yXtThMe6p1tZymdP4BSUsQFCuW2uwBarhp1bELtH26qLUaWXKVWXNvDCUHdez1PrcMrCdfpvsyZVTkJ5jEkzrNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4granqut1XzcG3GdybA6k5UNK6gSYyqi5kDqLmG92LDboaEi5QYrJiJouDkVToRxSUjBTnBqzScCUxdiSaS3kt",
  "key1": "5PFcxwJchvzqBcU4ighXGCjs8V2UMA2LwXAgZo9KCeXoCnqwbpHYJbEN4jFu6DVtyuY16uG73ZSWgiyw26BXJtWQ",
  "key2": "48dpMsoFKVUCwPL7aSvnWxUhaAwyZ9trzb7bDtjDo858CbSiP5ADwjxEArMkts4D5m6pe3U5VYzdETeqxVGCkQxK",
  "key3": "2fgPahH86VA1AvFEwYrjJFoKygjufpLmqB5foXrxSnqu9WkhmXkk7r4Q6fTyQQvkSXCNCV4bN1nJ9Q2xLbYNHEM1",
  "key4": "4DLxpyXvEp7YAKsqgfR9p6diejRvfXj2nY8Pj9kgVDoeL39CTkJpRac8aKWNABK9PsEqh4Bsmxxx4JwzqzcEmoTB",
  "key5": "3pWtfcimRLqytugskTsmQSxRePw9CbcEqCh8Sq1y2h5aZZFfZ56iWACV6QX8uFDQhWU2C54ePFSGGd3e8s26Q2gK",
  "key6": "73B482qfM76cM2C2gU1UKw84czAeYZjPr8MvgsH1cHFZAefS4WgzAYJ38zhcSmAtfVbDteKhRzHdrkx8SE5RpMc",
  "key7": "4gxhQqpNr3kCWPScyKQJHCTuJMsoJqgggFXon6oQryBujAqCD7SiNqySV6XqqFpevZZA3DScDfFcv9hdZuUqWpRD",
  "key8": "4hSKFRk72zCX8LrFaHZjuJ3Nj9thaQMKJGyNM6FhBRRP8jC6qFMGEp9aMxMJqeuwJs2tq5iwn8HuCmA5FCehMaCW",
  "key9": "4wgzgKCDyKYwWiGWgoBBrjPJvo9YHZXp49Yv7Z9D6nECA2UaCDa4dyBKseeKHtTPJs9cXwhgAPSSJFccScqZPXVp",
  "key10": "4DSvbDh2AMudvW68vFWAZ8T2M1ZwczYbbrKDhmJLonwY3P9Q5eYUcr9xtaZdUGafY4TSmtRE2vhVKfpVsHvfbeSB",
  "key11": "MGRPS7diD4bfjbGAWtaMFkSU1K65Eix4A25RT7FG5aFrrmJdBPEdxBTBGDEYpZpkwwCH2xHD5T64S7KpipHpVoT",
  "key12": "2f1sJLFvjAXCHC8jAwD4gLcZ9FFuVzAeAfxvQxMDNEQ7QprAEyX25E5cbSxyKPwwc9zEj5Tsn8MwdBUN81yJA5uj",
  "key13": "MLBkeFm3Nu3DvHbmoLzxwHG7fUrYQ9pWdFqvEffGzYhM68epwUnrFzrVmBj85XXCGy6hbUJ1gfLfshU9VoAB1ja",
  "key14": "2dKBFkS26xZ82gLWfhq2SrLRNzsQubizwEcEq9vq3k1p75H81dpAqSjwYjPxcvazmLRL1negfbLtdJNfKhJquZ9h",
  "key15": "4uLSvZnLpTrBkDdXJqFtY8HsYkhAqgJcktzZM3YZi26LwUA14nqFK7wrAK6U8W5NSQC4yN3c2Rs5hiXjtCMn5zsp",
  "key16": "pM3FxEQd1enT19DCPQ5bprRX6FFAPVxx6DMQ6hXuDe83uYAB3UaFbgKgNPHp6xydab7jhdCohzaQedHPj9EWJ86",
  "key17": "5uRiYtsKoqwxSgDgTotQXinMkuWGK8aPnc7ttUfDTJv1HCby5vxcR7TuzKVN7iCDi7jQJFY2SrAGnHRe3RPeUKXU",
  "key18": "2uBXsMkeu7Qb51D2pmSCiFi2bxzHwM8USZ2YWK66QoVqAYFwSXxoXBeer3juGWk7EYHfwNauiCsqwdf7ZdCMKX7b",
  "key19": "4mSVY5qeNQHBRiZ4bLauu2ia359tPDLcpgUQqq27ZuZCoZANVnJvNxYrLQPup7AJyGq2vyP6UYpD4NytqAciVAKg",
  "key20": "TMgQoUpnKuNvDjaXHUMu3SMgyfCHc5JVBzsvrUwJeMfwqCJoH9ZxxQJAqE2ZP38aPFKAU4N5tSwxpRxFqb3E25t",
  "key21": "2z9dUSid5z5N4URT4GEPtjngk8A4G45UFk2N4Ti4ndC8bfoT8EMT2uVd7SGSW22oxsNwBZ9tck1JwEmYr8H4xQcX",
  "key22": "3Sy1Kpvwdg9AZuKC43UFokt3QKXs6HtbbrVveMwd5KHfabARAGYKtVMjM9EGxCyL2kPZyD5cFyuZ6K2Fizd9dVLH",
  "key23": "3YnaLh224MBTcmY3vUZ7szCEP9Y98zyAVWWdw3wfZWYiScoaYxbatMzGLPXYxvQ9ZHAj2AVknpZCHWESUwcbEZGF",
  "key24": "5UjMaecUYDLJvNL5xtRYtUiW9viUhgytgFgbvuoTySfdpT394nVWY21XC7YEVJ9auGfMStTaC8rhBMwQeRMLTp5c",
  "key25": "25s9gK2gFkcutQnGxwMWVHB7KH8qw7rkgzeRusinVaiqBuRgrZxptFVBmpnCBYFYmoUQe6FdokfUzDtudkLPDn7Q",
  "key26": "5ugsCzAmQvpJVqx6YByBto63RAxo8wa2oq4abPwWF29vBorhnzGsGqXcYfC2vJ9gfaoGEzQXnkxh3ygNYv78WwqC",
  "key27": "4AEHJGWYQLBDJt8gGzCUp3Y6kZVY3GHFYZnTmtcZ8iUgyxSVYcPnhNGTts1HUN8qUmcy3V8qr22UYensVH87Xo3x",
  "key28": "4HYYwWr53CCr954XFBA3ixXEQPNKfdukxdy2z7QhZSrFrMz3SNMj57Q64yKRztRaQT1SfWsxbMp7KRC1gxnCkJUq",
  "key29": "3St5qrhsgp2VUztHBRDihyQgfa3J3YHNBcqx2Cnh8bN4ZHYigrRiHHQj9RXYnPf3NyyZAkU7CYcrsChZ3M5NT5xA",
  "key30": "5gFW13Txvh19dtJxJfqqfsJWjXvbduor32QcN13xLVUHVmWNkKREhC8rFRPBSj2o1txQdCoJoR36Bx9f7y1FdujE",
  "key31": "LBGaf2Aefd3A4vpQTCvFyt13TDxSjFmKGeUZP6hJrM7p2hN82Dg17pUQBi6s92bsoAjtyP3v7e8rdQCVha5XvYG",
  "key32": "2EhFcYvNtDFFa13QLN1wXWQhS3NCRvvhAHhg7YfvegGmtMGpxejvn6AFVy3b8BbC7GECq8gBEdoZ7SMak5srGYF8",
  "key33": "236wxXrpKNziNeX6fcYVzB1kmLdQWjtKjeCbbVt7NwRJhBg8NMMRkZLFf5cEiHZkEEtvd1vKUfKx7gfzbMBEeUwQ",
  "key34": "5dai9MpD358Y5TaoZjbtYAppUTKHbzFe9CgPpDJjjcddFE6vuffzFmcas2L2oQcdxRWyJpRUmpjwwV8bye79ER4f",
  "key35": "54APGdzz5KwyLUbRvfvcjF9q2dkiAv6ju83dfFZubWKb28XyTNkJTocjQ1R5dFkDBB4aCdsoSaNyt32e2NEwLLiW",
  "key36": "48LPxh2ZA4X8nAqFsoV5HEtHqSYeHPJ3qm6ghwGvJFaAdHuv51FzYUMLrny6JaWLiAgG9w4t9L9vdKpRrUsYHFMK",
  "key37": "5uzdrk5WNCxAjMPmRPUKwg5oUFWPasnHdP9NzjipiNHCEGq7bHznyWu5j53kZqCtbVbAgbKvSUSYgTvLNdh4pciL",
  "key38": "xMmqVsFGoB3iyQdzvvrTqnFAR4pinsFWF7pHtF6EHwyk7pLS4zQiL1k7Reb7chECKZU3NGozkFo2TwtwFcT1R4h",
  "key39": "4YChaBjjSLmtnvzGgpnExX2yxT6iCDbfGmgvQcC2kLUTjS7ifFBe7KB93J79tuzXd7JcGqCdHA3q2gzaBmkzgQF9",
  "key40": "2XjirTvtyTS6JJvFo16VUT4PKc1TLUueijdMB8wuVYGSGh4ZCvAvawsFP19qvWKUeto7uBoRu4z5Gw3krygkZsnd",
  "key41": "3duEwMeUXCckfzA9PjTdamLJEcRBhoYcMrfVcqQMh4PXjsRZkPEftYM9WSt1DDxYDpSoPqQZbbTon2CeTdoVRob1",
  "key42": "3oM9mZyRiQfAJr53E6zwmpNsmvGd9DhRBdLkg6FMmqvWQgZwpm8oXBiDjtESDHmexXfoYzCfMgQ5J41NudTvFEwF"
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
