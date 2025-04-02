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
    "3BvKbjuX2D85Kuh7BmcD5VBsbhRyHsfkdeLSHmtDynmJeg4VMYjQCMNfW1U4DCdMBDfxEZbykbg7ykDtsLQxHWxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XtwnneHFx9KJWiHzsQSk9XeG6xcAHVUSqiQDaxuJb2KcSL253b4JWERy1yQdLEtrpD3Jnzkas4qjsoEAFNqy43q",
  "key1": "4YbPyLcHMGhVgcKiaxwGWnLFvVTeTwyqBidEKioR1PUZHhgTqnEjqzLC94PrFxhgdDeNmSh4VGXac9McoX2voMmy",
  "key2": "2wmuWMBAuqNYcmDaEFQ4W48NmP2B73aLUs9YEE65LdavM3DmEGbeLxcWm2p9QE6qX5LywxXcPZSLbB6CJJ4ewWgL",
  "key3": "3VdZA23twRePHoKanZdeZE9ap85vebq6UQcUNPmNH9cujtMYFcmt5RUuLz8yAJeXgVoGKZgAEgzKwBsnRLabgnb4",
  "key4": "3V73vtDehPwp29HdKmA5pt5kBnr7uCNVXTEJT58XyLVmqvwPbqxinqkufws98XDT2KEDeRTBQUcZyDmoz4picVLg",
  "key5": "3dYo7GXogjHGxMiGCpQFbeNjPr5aptGSZehesWLK3yQn7rmGK38H56uHUt1Tgt1RZvubTQk5y6uYdmTjH5PLTayA",
  "key6": "593anjcMqFXnxPK2BS15UmPJXjri4GsVysPheUJXgsjsVvYg5fh6BhkDDe9kJCDMLZZLUBWiymj2SLBc5KQUkqCi",
  "key7": "4F49HfHEtQcBqzqFPgnN1WQRTaFk3j3DkWLCaMtCW62sKe7D2uJ9ZwG8Ju3qaCcsPB2bZo5x3FWqRJVgUguXATCG",
  "key8": "5bridxmMuVFBYqVngsgrQENRun4E62hbs252bnS5sa79LNbrwjun3PzCEDncQCHTAhUPvEZs1Zi8knFEFrTALJWk",
  "key9": "2jDfBk2erZLaVFjkRpxt4bg2xXSqF96B6jPYwuqUDD3SL4vrzUwnB5YgdMktAVfGBRk1daSbWwhzBUNVGWAzzAhe",
  "key10": "4E5sAobW7A5aEmKBtbiLmnX73jfbM2wVgWUJ2CGj9uw8Abz5dPE5SaQbiS54Ae36KQUsuGrkiTV2TEdTXHuefCYx",
  "key11": "dKWHViq5pFLa9TQdWSu86gLhxCCdasqBVJLR2i9dCcVXZUHtPN6wLgvyEk65X5B61WY6SAquz9Uh5dWz5JUKx2J",
  "key12": "3scBScuaYvjgkZk9h4KJB8HNjftbzJN9svUtKQbiR2ymNd37P7mm9acojD45fyFoc4ia1Z2iadysqk9rStTdG7WX",
  "key13": "3hr9oWJiXFygNiwcBM5LKm2cbb9TTNkzhLZ8ngjiU8dUsSChVqUDfKMt92qnaGQQz5aX4pXAyuJHmqfgu5hWud1B",
  "key14": "2XuVAuPGjVfLaghCoQ7TvxpqKjgf6EmZeeM1MKaBVZ5kSPzC6KVwoG4hAcsN6a9xXQoBTtquLWaRuhXSnZT3Ctr3",
  "key15": "3uMVkMWXniFnX6nrjz2LuK3SmqtRgqmwEiMkPUdWFiyEPbgyhpAVZHksYjTAWW7eJY6gcyz23M5Q6u5RkqooNQRt",
  "key16": "3476sHxG2Ztt9gvL42m9zeDNTKqP4FX8wp3tzGgia19vX5qGNRKd9Qz8bGwadDDKqCw1s5YzB4ASQqHjxJAE3qY4",
  "key17": "cV6wjRLSa8NTmaaEXBjmTQ14TujNmxbmyLJP4dFXnUs456ZoR47iTB65fEoQPKhf2VssZV3GBCH66CSTDhDZVac",
  "key18": "23RgPi94x2qjrnUzjpdgYbwV875vHwzArQHmXUWH1pNMXf3JiqCHHwT6VpYjCYPnUUuz2vUA5bSdQynfpNS5ZXhU",
  "key19": "JJ5QuYBYs7kBK9ZnSieDWxhV5FXGsMtQFmxHVFHvLoQXZzQQoUzVVB4HbzRfkpTr2LyQQNJve1tjLUBmH88obS5",
  "key20": "5cx2e7QwDNVzWeENTzgFTTLd44gkrCwSooTy9UxGh1sEZET2rrQZf8WxoLk1jSLnPZpkPbBs1Mj5oFosx6yBFpn4",
  "key21": "2vNvWKqBeAwbUiJKU2D2DZqtwjmQwNyr5UsNr296BsvKeoz8qLnHESyyJpRYy5gCYaUuHFnLXJ3mCUzUaPfv72Sm",
  "key22": "5arPEuhT242aE4R7u987GiuDYKrJxqoc2uKLHkHWLAa8QTd7frBcdWSUXxad4TLWrdWWDx35LNTR2V9qQaeUqzwo",
  "key23": "5Qmx9dKAdBzYdn9kcrdKRZdAsBbyHjbKaX4iEkvy7X2t5iiRC7zfAcnQ7X529pUuUZuWeVgHeCZ7teYRPckD662C",
  "key24": "2N8pZ9LpkkFCVVfrqHvLWZjptpso33H5txLYiPwCvpBjmKW9u686w5weWwAUXwm7CygkGjNbzjjaCidyPRbLPJtU",
  "key25": "4icUmeBeDNnHZacLUmUhqFquK5UGKQQ2HcYrmga6jUUY2ifDurNsiSqZAVNmHCpVP2pm6Dmgk5eGvWiyNgLrV1xd",
  "key26": "3coS6aihSkHsSLpAV7V6j2oRJyzXph27KNcnRdHBZEskrGekxr88BJ7dfabU3YW6crNTUNUc3VtKGzDmLuV1wnH1",
  "key27": "4v3gBq1PJzQRgkiQ7i5bgpb3A6EY5hAx3dRqfToHQ8fkQDb3sJiEeWFhdwwUVEGuNAzBjAQXXSHBUZW84E6miEuW",
  "key28": "3uAKCxcejQVzsdLQYrtrfZJ3pncYtiSoE8CNyQvDwZ8HX5fvbPVweCWmunKML58LbtiPAr4ymtdMdWLtnAjfEyGE",
  "key29": "27yhs6TUGNeERg28wMHhZumvoFBkkfXPNL11tQkzMNbxjE9tB8EC9aRgJn99gFZunEKjo9NnG3owsvr3CCoFep23",
  "key30": "3Torwy6mTu5phJ1zQhbHhuQzjJxBNQLUwxa5VbPd8PYN9Mv2sAwczx2egUDHwX5HrZp8CPujGu6beDxm6cn5V9XP",
  "key31": "2ZNhqP9B3eAgBG51AggAVSEVqcErCjsuQ33grq7TVgZQe7Q3VhLVWYqGR25PHb1V7G8ecUZ8xCBwTK24uKUH7xfj",
  "key32": "q2rFPa6QwyUDrfnXofguPadf7H9Dpktjn4XEc2p7LhMbCZ9o5DhwgoBethdzUE6DA6yJyxjkKAaCzwzreFM1b44",
  "key33": "3X6eFUV8VqHfa8WMhudZEif5MvnkjTX5QUho1HNGNPnxYrX2CtSVCMncDw5yGuzybbCAB5tSwPxTeYLJf3EX7a8T",
  "key34": "4Ush4d6kKtMPCc3Bfq5ML7G4R74M1AjXoYEERvigTg3xskwwunSf2NeDhUus2M8WxB6fMzMRSct9DKv5VSsRYdxC",
  "key35": "2HLLWN9kajv1Dt83ZF9NKEzjkeXgoDGdLRSzgerLeN6Wws6yJYwF6p1u69xsS2mk4u9HKup2JGeNKLSo1UU1Epo7",
  "key36": "4oUYunK91uoScMyUpbPoVPYD9q72qPqBAQX2s3tqXSFVb6x6jXwRxkfGmyjkChAdEfGhkHSGD69wTop7NS3zXGwz",
  "key37": "28s36M7SqajJhyhgM6efRS9vPnejbUNPgChPrqF8ryy2LAFWWwzeEUGwZwkTt5RSn4KPdbGNGj6KXJYpTL3ATp7z",
  "key38": "mEGTspt95DSZRh2K17T6tGw2FkdwxdXFqotGsVhRFZpU3UvW4GCrM6sTFBcFgeTJfwzrygmJ2AgG7a5GR752XiF",
  "key39": "56iwUfcAFQDEAnWhCa8cJCcYgDdHPnt6tTY4c6mcwPpj4q9CB456WhZw4WgondafJJHaFo4Z4DY2Hvu2vEiQKNea",
  "key40": "23d3XGE4nuzE4zyn6HjN5JcKUGUFrks6dL1ocuaJ4iW7UUf79iC9GZtpUmQF7fK6QGC6sUtonzcNrE9tF66r3PXm",
  "key41": "5CFfY3YzghVcW1GY1j2iLzcNbVQUqh3Me2CPkVPoE5rXWupZ9PMZ1rLqgBbBHyH8Tk97CBjwuSspzHseAMMA9KQJ",
  "key42": "2FM3w2yDcyF4AJtbg7sgcsU9SYQ6FcB895b8BucKLVg4Q7JaBLuPKGmAPA5p25zUezzkiYwJD7x8zyJq9auc2tcD"
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
