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
    "5HcvyYksc79JjDH8JVBwaJDM82LePEwyKZApCydgDHUMF3bZR8QnZ7PWLTFPvRiVCX7Q49pBY2ove2ZrNks8PtWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MYuUZo9dmjo54EsCYAgGykTXk957S7UUZqcpmcNGL739YbWDX5nLWSMnwvazv4RaZmNT4Rw6rQgL2JBKyd68W2",
  "key1": "bTqsG8Mo73KqjwX59D4AQ9wEf8zhprerbUCyvxbbbWV2YdwUg3HhMXDHPVoxX541MqnULcxUBLqrsJY1ozvU26D",
  "key2": "2sQ6LDEvzEB5WKZcrCzFUEJQhJvaRL8Uo1i97UoXWet5PmNy3mn65dSVRhJVmxVczmKG43T3PKwT2hFLEP9ZdvmL",
  "key3": "2mR8L25V8HST1cJVJ3QVTYWUVv9zYPCs235Z93BDG9dbtymfm34hbythGoSjdtFJyYR9wAt1DLAPRW2WaLgQgAyh",
  "key4": "5UaMNCjjQodsF5K2ujRaENUQehhnGGfoSBKi6xEcXwDugaDQPJEqMKUmz7xJTsqmSXCwgjq9FXvg2kgHJsbdz5aU",
  "key5": "N5AoLqmL3jzpr9xunGyPnLdPXUKH1YPTNsEEyg5CGNx5smq17MpNmXLM8H7Gem2wZwPBWANQsLZ7Jd83jcDsYjW",
  "key6": "5Bq9x4sc2DQ18qNPwHAjxFnS25sJ6TzLSZNqkxq9y66JbonuCFgaaJ8XVpwutLAQ8L8Uxkn8LEvjrjUh3CYxsytV",
  "key7": "dcD5n2tcmZ9rNCE6ZL75A5NDjPhMeNxsfJQyxrnzeGAsRVHWCbL8pVNu9esnEgB6M4Q23awE5wJxUNKjJ5N7CDz",
  "key8": "5T4fEd4fweyr7riaMnGtk2tn52q4t7Ubu6kfjaX1mWgex7ohewXyRigvF8VHB1UVG2o9WsdvK2aFRriqcXJgkG2i",
  "key9": "4cUgmTK5zyng5M2njbm16jvQDhmQzQb7Ba44hfALZJfb126v8byTzcHPwfRXMGj2kBYQWvmMFRxk3p9Nncp79Jee",
  "key10": "3rt5PCQwUwS3EKznPNUbnvcGFMy6igRxkb5hf9vxjXAQ2XMW3FiF6LjG8MBhGUbsJAHv1PAAc641yv3xzRPXc3C3",
  "key11": "5wwth8nMurpX81JnsYhuMVoDaWEodHrUzGFV9FpbgBh4voy78auqLcgR6ivN5tF7qDn4XVbZqpDqX5JWzrCZZKeG",
  "key12": "3GBikRbjhwEhFffnrSahTWMJGbYBabmoYj6iRSBohsFMHhPMKjWyRyi6mKTGsrR1ammSU3FnJRCqpX2q21FKSPVW",
  "key13": "26ioWq3tF2R3ceXWEeKFDxBtGKiGX5KQ3YWiVFoSVBhYhxbDuVMpu8318EKKS5Ud9MKhg7JWhwpAMm4x8ov6FjUa",
  "key14": "5GjCoGY6HW9wB3e68kUcF5FCnoPsTbR86i3dvd9NLehWdu2ijqjABZq3T4RPKdPYZyPkYH1fUGCzqe7MvHoptjUE",
  "key15": "26nCLCZisMU8No7iJxR5pFyME3u2CTC8jm8w2oQwwGSD1wGxGohrdmD2VYMjAUavFDAm6J2mZq97JGZM8pdzzARX",
  "key16": "F5idJLibSEKxSDRuHytrB4zRAJrcEFHXbdYwKgN64goSej6t9pZWXxqrg4s4TAKavw1ypdfHJkgxCKyxUeQ7gWe",
  "key17": "4XYnPPZD8qiV4fAYSiwQkamhUthbVXaXbS92gcJQikkux8zoRFtGzaxwLPYuhCda1pqpXwBQHxX8gFRW5ZZH7Dtm",
  "key18": "3HLznxMYaPVgKNHLSe5DeVGvZ8ZRYsFXtP1KEVttBfisdBfGaUsC617BAnPj46Fym9nab3ka9sEXp8GshEah2cMU",
  "key19": "59iHUmcaYd2iLoDfWPfa1jwmwLnqEcZytTqrNUTYgEDg6FHBcGppBSK89xMjGByZNfAjfTZexqSjBB4yb3QAsssM",
  "key20": "26oH3Y2waSKg2HzbpzmbGYPAqauAs3dUG68SNVp17peFYU1DUHwEWEustfF82B2rgASirv9Wqdj8yWEtEExRFC5W",
  "key21": "9Ja6NoCkAcG4t57p94KnWcSqwJP1x42wSLfYT9RtZ8QF1vaPcpYsVni8G1Guep8WrfxcZBUcc9odm3wpgQi8n4Y",
  "key22": "4p3mzkxd2ssBhDYiQWzTobX2qXfoF8EmQ8axt4X8R8xCC4fYyX831nVj998qhtc1kKKpp9EpimjW2MzCE6KKH9DC",
  "key23": "3X877ehGnv8a35yytXjhpCW9jy1CJYyYz7EnBTqsTwz1hd8hoZPug72zZwyqqs5XaQHMqZrmxctYfLj1TVgnF6Fd",
  "key24": "LHQ78GoVXGTPkc5uMhY4NkqDu2ZUmcvu69YRDwb2hG3ihaFuaLLGDutf4T2DV9ZeCxXPBDsawbzzxb5HVrFLyC1",
  "key25": "kKwSQ1beUxJ4d14zKpFdmzhooQnSMtZVMJcfrYDKEtvDVLzvmAyg6VUS7Jjpa9gzpgKJqEM9bT7TYNMAPdFxuUn",
  "key26": "5i8pL146nwH7qVATRDGLpj41q5VU9KXdALTvnDqyBgntpUER669jQjGSUfcqsoLzxTU7dDLru4wHY73h3j6ifBdH",
  "key27": "LAyN5HTU3qsYQKTH5gGN6846c7nKCF5v8kxkUCcwpafPptkmRVw6sa5VqfacXgs6V7bLZtcoAdCWXHPDrhhHBJm",
  "key28": "2mFiEYWMN5mDmavXn2zQfhstV3PSkZ8rwLaqvvRNvH3gwQ5XXwuErzXXPYfBipMyz2jGakuxyibrFy2B4TBAHkwX",
  "key29": "36hTdDvuzf1RohsyuBpj1bGWnviKb33mWjcQtjcyPV6NcMFaaoYZcNK4CLYQNmXb2ktudzhdkcKMuym8cQ53qZC7",
  "key30": "4jgAMqQexJHVee4H86jkskUEgN6H47gqLBQCCRqMddCNPzgKyAvw3mmJLqFx8GEBCn6zUpbRLSfcSEhGDmVkeWt7",
  "key31": "4UZA5EUJXHoizraYULxoRm5WqEkEr42cm5YGwVa6FK2JpFqRobMCRkrRoPXtaX2KYgi8Dqk7RHDTHB58S7HHtS9B",
  "key32": "32VCge1i44M1eZx9qaB1VuaZMmaBhwXUpLF9Vk4H1hfQ4wJNAuyrNaVs5CC84nnJEBrSdPJGwE2Q5pHJVUwQwgj5",
  "key33": "4FZJpF6CiYhcoAE7Jdp2UiMftrM5eQXUE3XgzkS1gs2XAwmUr1TxWCfrZZNVZVqhpB2btmP5X9JWvoqnzwEVenLd",
  "key34": "5XVjpU5TQaRQw6bmiGoP8fAwDKi4sDv34EfuFLrJbumyYfV7pMydBUw8tEQGWNgomPfqubLDsugPjwD7TcWJYpgc",
  "key35": "5Sp5c1aKc1LtadBnS64sVfgbBQQok9MxQKPwj268SaA2ftrrVcvnTDx1xZSc34fGmVJNgLvTDs9k6P2BsbbZBZLC",
  "key36": "3FWK6JsgJxgtYU2MEyjv3VXJZA4gAZihJfZY8i4ibBTrGoGL3Dn4tCKE2524b9xc66QQihW5PXBWdknm2RCsB6eN",
  "key37": "4mrNAAWdSgHBY2XbsEt1B5M6YYhqjatRiF6QvaXkwcKbfwyf9g4k56MApGrbPtc2NbRpi3yHja5M2kM7nC8M1DtZ",
  "key38": "UvbMj9wYzE5n93F6vN9uiRvCMMNRHA9on7hi8J2JQTurkaps6AkMLHBCU2y1m25aSnV9TZUEfZrc8VaWa9rYW5V",
  "key39": "4LyZtBJ7g93u4aiz3vgZVVbkQbaFRgpw4SPkEDqEgCtjX1fHx4QLydM8iDX47kARmwzxERvrNRHQSjLxG4ndXpPM",
  "key40": "2xBFLk3uiB9iY1qAHQvZjTnXw44oY34Yi862HcAh6q31jAeP8zZBzQMpVMcmfa1zrn4rQCQSdsACzxyNSgCABTTQ",
  "key41": "3ER7NQVEdh1B8Mk1VajTV26yC5MGFZHN7iTTULdWLLevovincW8vJeEWitm6fqirhhikDvgiYthfwGaNDrSU5PLf",
  "key42": "3HkT9X2pQGuHnrACmnrvfujo5QWsq2MNTXz1c8BUNDT9BhewR6ACjuFDQyzt5qimYxkZZjGUKP7kECrNDoGocCgY",
  "key43": "2zmaZCxydVeuryCshK4CiEawiQLX8W1DdFsda5YdxrM2XR7pnByWDkUcpiYJg3KmkJj36XHUgxmNJPor5YFZyNiR",
  "key44": "4aWKFbhDBxqLzLua1ktjD8FiKJTczunt6mwLkvNVt7FBRHeNJJzHraEovscZviUeT8WQT7BmJMokDmxi4PgAqDgT"
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
