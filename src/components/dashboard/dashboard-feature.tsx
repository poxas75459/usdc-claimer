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
    "3HADJG2LftKffjb3HHBTcTzzZ3maa3eAMLGN6rNK2ugGG8Xej8LFiWymteRz7BYcTVk7egwEAXxHSqfA9C5KKQR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37JVtpKomz9NKpp3NxAMDzgtVGWqDJ6DsGKdzxNnozFf5FjNiMrGAtTthUKQPcWxX1gZgsikDYJukdGcbf5TsvEB",
  "key1": "27G9LgzZh6a9nDTJchNPCWFCYXp2XFtgcnwdYy7t9GtRY3njxUZDKHVQZfrUeP1Y2sRRMFCVdLRHBKENwCqXNaZX",
  "key2": "3ZsaH4GcUG59tsf24N11snY5wgsgHxwKoQQfwS6q333LMU9rZ5bp59s17D2fFqJMmgBGCSKB8GjTgukUrDruAKvk",
  "key3": "3B5681mQxq3sZr2UVphYCiuMvEFrN5dDhfHzszhkn1Tust7Grwdbnag8VFZJ8wFdKbj2u1cSyYcTrtkMW5VTR8U5",
  "key4": "3SU9KDMWvhYe5LrxgAUX6mE55G16KAuPNfCVviyxhzkdj7v5XBLgzBonEXHyQwJcAHAEdB2HhkERmnF18DcNmRgv",
  "key5": "4dHzSUTaSqEJvihrzYDSPcQ2PWwGAV8xP96TyP6UszYSAHhifCoTjL67sEBNG4Xcs3pch6gHrThtnE2RgTuauWVZ",
  "key6": "3CtQT31tUVSiXdHvXNS5ovh78KCpg4Aks9WsvcHtP4zkCabQXgRFCKmkd872pyc2FBwfsHkKsj2z7L9mRvpMNoqH",
  "key7": "4qodJs78XGPc3a6RUj3u6UBussZMTXCWNKtJ3KWXunVwYLNPCm9DUXM5vmhpHztEF6rF3fg195RmqhfoQBWD5cnx",
  "key8": "5PwnNVZ36nMZJSLNUrs3QBgqKeJ2XAR2M5QpkKPN8MF9pULBAVMNFJcTBCfMygE1FcQSsqoHGSLMBvMQg5nZfK92",
  "key9": "31xZVdnfeEscSD397iNRX6nguhC1BEDFdDJnbH6j3gt1rrun1s5AQ7E8SNGwfy3FyYJej1QwaMHbA3aCVTs5SC51",
  "key10": "2L4mt53qMbwdwZyeCBpLmiXuhPKBBzEPMGw3vaZSZ81J5ZgjrwcqupXzLXQaTi7hoUcKcLL8kskFU4xiaGHaVN7x",
  "key11": "5rn9ACjqBh435atWNasjDyW6RbmiwAiSiRAHTdgrgnpTTgmpm4WZgU1MJK8Cme9Lpx8ZVYRg2HqoBpenMBm8VyN3",
  "key12": "54tVWaG2Rk6KjAsFWzGYwDKTVuXQAHVnPpj9jCjK8UBbc8oe8fTkSnohsJBGnYdemuVT6gkQ5x9AMZjC6ZpYU9U9",
  "key13": "2xhBXJDT6aFKEWaUQsKWEDa4SZqNpJPSQtnMZ8KW4iHnw8iyNLmHoFs1wzde71NRrXJUmU7cpCEHTbdewr7M8T9u",
  "key14": "4weKBJj1Pwi1KCNRFLedJFro221gdCkbUrc5r9D2MSqiWM6GPHcgmMKdP17LjaWZCmxNR2UYvsgx6LxSjfL6iNLv",
  "key15": "oryfSJJLcVu2C23L3653k9zFys4QiqWohAfip47WmVaHjY2GmVHJPr4K9vEhNxRENULyCbo9s6vnZkuRSwUbFsU",
  "key16": "595byTrMNCdDieURyzRUBtGzJ7gbfNLjDBwbukFFq6tiJp7kmaUGMuaJzCZsALF1yTT6UkkhXRegVbko2bm8Ksc1",
  "key17": "GaUhYRci5xcsyKt19HYmYeZRwZcKv7ZTx7Jcdv6UE6fkpB1bHA2QUR2fJRhSKV4pSB5xdr8Dq2NwERfzNfmtXWa",
  "key18": "5JRBmNqmnTdV8X1MRdqiosNe8Bs57g3rcxnXkmuD8174s6BU2qPmdeKkAGYSfntrDHCh8GQAveKivMrwhnj1qdfm",
  "key19": "3GWnPWQ1AxVbFvuUpXJAmfv4GhyXEzLE8T4Nayv7g1vgdFfhuwHAxHpmLNDR5nXxonHua5KdHDzG3CZQjsXJCbCW",
  "key20": "61tgMoK2mRYxWmy4ML336SuFSy6ozWDzhjmajdQoNmi4Hx9yTJJZtAXJZPaoXxnSjDXbykgAEedyRbqytjbcxmfp",
  "key21": "5fixSFecpHGJRdf2VB9f6oA8LXVxdVVMprPi2vYKps2f1bATXL8gq73FGkaBv3UU45XFxfRHecbthNwLEcRVczTF",
  "key22": "5JxyRF1g86vXr9Aq8sdopCRMQLjjBu4rAr1R36BPbyzX9rugiMMYLHUMKi4vvNWY1eQqW2emYhTjJ2d2XuAjuDJV",
  "key23": "2VCrSpr4xMPBA6CxvedYFDAXyeYHd8xFQYF7irTfKEXV4r5nWDjBvc1uB6GZmBVXFPHc8ByXrYFupkc4ofEcio66",
  "key24": "2i7qseBeUrh7frUtzGQfc91aHknAumQoFCAka86zAz9iptfWDBsJALEyx6GKkTJzDn47E8yTUEEvrpFmMYQqFtK7",
  "key25": "aEwsKN5u8u1ygizf3XftFC6Bkx3reJ7py16HcHPcP689DgxoaRchUoUBJ1rsGMXC3rhveRd6ADHixR6gzfbKZVd",
  "key26": "25wfT5hCFMAcixiMDvoT8zmBxqmbjVVUhvDnmeHvDKhq4NYDAZwLsYk7Fvmg65H6pfwx711VkpjYvxdzcZyu1uoS",
  "key27": "29d5Tysu5JmXVqrAD3BQ2saqLxmC3gc5eHCxhLj9ipDFaMNpT2M1i8XsdKEdhrqHmLvVmFHgT93aSw12LeZ3jV8c",
  "key28": "5T3kJ1dpPZaSb9KofptHGi4HtVqbxFdmwi5vMyaGuNrBSgZUkdrr6m5ix9MXnsrNk2QXqR5pMMfCFRyotAtaR16V"
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
