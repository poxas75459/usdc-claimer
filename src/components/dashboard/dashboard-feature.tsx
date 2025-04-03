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
    "54stpEt9ZQT2osPueEG4okqJ987iqkRKvsGsNYSSWCYkcMYvujjGmXJpjSY81bYM2optbUvV9F2G1U7v3pG52c64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gLWfveEn5uDm1eEJQSK4qqUcfPWfriMYzoacmQyeFmixghgDqv3BW4BeG3Q2x2uNtV3nHFyFpRdVYWhAsv4Swuc",
  "key1": "2iND8z7Kyc9RD6nztY6iaSaJfUn8ZZacUgLitKJZdZGoNAwwy9W7YpKjRAGVgwL5MGNqnQaU813KPkMJbiz23qWW",
  "key2": "zxJuVBHHLNTDED2PjDyujnfHqomkjPBG11i4DZ1BmLMRx5kgbS2iYCdeodPPC9AgAFpgJFwCa8vDRnyQ14UJSjp",
  "key3": "22iVFpsCsUkAqG6TSS3KmnW9zQAgeccAHXQbKmbUHi6uEYenjoe66zwykES7x94gMz2aXW5WrGhBmYzv3LBk7Rwn",
  "key4": "31sTbCBnm87RC6mGBj94h2DFai443rfddBoqx1LUokmqbzmhm3JDNjeVNhKXmHz4ii4x9Wum4Mwikg5mb6XhWMTr",
  "key5": "k7a1JX7qbaFmytY1AjY1bbJ7UyFydePLkZbxyygV88P3HGMjhE5MqfUvwWjFQvfFxbzVe3yLxKQzfPqcgsxij7X",
  "key6": "676mbMhYKL26zUZ334xLU8BxsW1iPKfhFyCy25qJR8PoTvNnxWCW7BZetnhQ3y2roPLi9TVAAPSAekRex4YY7XuJ",
  "key7": "5qzjUyfGMzwtMwEetZT4ZAvosGhJWX6xpSWZTuhZyTvWESVdum48iquex4ZnQMpnYPoVe35ww9ZXVTKjZq62CTWj",
  "key8": "2omcpBJtQLcnGEYPCWdV3Ny3Gwxzc8zaFRDrBK9yTd3xaBemRGoHvsFc2KYG6bmPBiYzWPK9eXky9WF9oNLuXcky",
  "key9": "4am3WNP3ENwcATez4zxTMFsKVkG4HtmpMabhTZyPRm1buttqAdPrK2iTT4Dfcy45JARM7ozqG92f9s43Djk5UgwG",
  "key10": "3AZZvCQL6FycD4H6wkfPj7tAhepRm1Kc6G2cXbZNeqpaFNxHASxFkmvLaas4mRjhmXkQwkrAZqwTMuKSRq2dpTUy",
  "key11": "2XQ2H8LYWrTRYEvRG9dcEaCmNoyhwespZqr1sXAG1xgHAcFTsV6yPYew2qeN41km2f7Rzkv5QrdsAR6NgqfcPERV",
  "key12": "KHVUKtzKUSw2FDbDmwXgvftdoNssVDjXnuSJeDPEdteiKzw5HSsNJRmy6ja7Uw5L64ZF8tP5ALRZw9ZPo656J1E",
  "key13": "ii1iRLbq2Dx8kExhL8KTvhmjff1JKpYKTgcs75rRU1scjktd8DcVquJ9pHHDTJh7EAN1fzNUa2RRMUnQ2EtAt4P",
  "key14": "3g4qG8BdAWy4e3XXTcSJkg9tPjBs9vcJbcGZeQyeExB7n82o7RsmG9esXB7J2bga3jiTagCYhBuJv99LCKdDgPsx",
  "key15": "2wyMeLYGSUzd7xUWmL1FsHdD2j4e3zQD8RDqZLpJPeVJ1nHQySH4DTm8d6hgaQ81376UYKdwXKSCXs7E9tYUsnxc",
  "key16": "2xGUD1dCDKDzReP78M7pJoMvRC65vDwfJkWsiSr2iMszPhbceeeaGvQvaj9h8SpfYkzLddUzmtnZKuKVFX3HT7qC",
  "key17": "48yApYzGH9kucYxr4YSA1ND8ZRz7sLZQa7jXFLsfbmbtnMzoRntZUfM7jD8pNG7LkJa7TehuFTExUdb6YWFXddxA",
  "key18": "4iK51XEexTGEEU5wXyEGaA1LzMtu2ZAUc881JBKfkwBfQDqrrqBzkZoKFWUfDnzYZLUkqvZhjnxajuUF3zdBY9wA",
  "key19": "4SDhpKjVfFffeiNQpGRkPguZXgsHanuzSVk5gdDchYFk6DSxraYQj1XKDZWYPThFyWfUuguK4N2isBjrgZiu6TJk",
  "key20": "5sgaLZQmDMxGCqgwYidpc8Rga7gscqhcvvoBkqr8BxTQ9d59YK9Fj9TPrJNStbnxManquTVfks2R4f9MJtFh4cVJ",
  "key21": "4bQUNcMYnz6rVYKo5rbvk3RwvjPNAr5PrarZBmqzhxyHzR2NdMikYynMjJ3QsiNkygkub6jfNSP5Yk44keShJttM",
  "key22": "3wUueNeHgfEos7rgpcUheqkWrRA9RXsoQxRvWJtRgCDcLgF1QKEjdEQo5wR1VrpvAHfq257iazKiPYrPUQWMoDZJ",
  "key23": "3m76EdbkPViWSyjoH4LLW16AkSAif8s1fRu65bNWif4oVGsd7aSefs7QTTEx49yb79DYjJHJC7zpBtwCEPGvTf7C",
  "key24": "4trJqnotM9xLkG5jxRPKAuaJPJ3AjKNwsGNJJFwTpvEHcRmxcHZnMz2AiqjzpkuFfPScFw8nQ7YJ9MYy3cyN9rQj"
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
