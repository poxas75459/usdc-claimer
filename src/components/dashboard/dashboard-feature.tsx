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
    "uidhBGnYJvjZBZzDE1nnEYBETxBBNKYd2bBMtA4fPkshj3hNFgiUY2U7zRG7FKkRPZky723XfDLPFMhubhRFhQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jisBv5WrvZeYkjyYZDCV5HeueFtJun4huvJoPDvCyQQRoNfSFaW22XPtCBTt5CW7dP4DofQwxaff4kSgqe2561i",
  "key1": "4PrmUGwtvccWsBxJ2ix41T2GtyxQtgySenApcSLxkmKKMex38gGRJXjYxPfxUoLRKargXwsnbusLBZs9yJV2R6ZJ",
  "key2": "5ZFHwAcVqBVpbKzdbKxfuuAgZiykpfTicWMdBZ7mFh561z6QwRfJzmYFDxixcujFomK8M8eKZr2TBjTGweQfSto3",
  "key3": "4V65WbRjYBUpqpPPWk1vgPQW3gf1sg13TVk9w6xJFEQS2VCDnRVTXoLXAw3eZmtksDAQG8HF7iTWXUY2QzLGJi6A",
  "key4": "4L8JsSGDamhSTxkoSXNVsgXLxpmmmyRcohvSTUTmDPbmw4S47BhBpiN2hAs8cXq9sKi1yKVg8avLEwswxNg6W2Wo",
  "key5": "3byJYdLbsxH6fshUEYTimuWvmV296s1BGtppPFuMkk6mcSYZPU1HCaTHxL8jtBvkCBtkB3HhvSK3EES7QAzi5P9b",
  "key6": "eykfhn8m9RCRQiHt7t8m1hbqpEaX4E5otAUexWLAtnCyvfR5ZEUDXVUBGkoGiuRQMjnojWEv7y1RdqYxA4cVYFx",
  "key7": "474xHSGMRj9x4L7tDFkdN5TKR1ZSfmdomDTWJDRqjHRDXwCodx45P3W5Yk69csXrahekhZqYfXoWeuG7XuS5VQUS",
  "key8": "5BAUPcAhCtT7ad7uzWKaMjgm9vTTWUpb9f7cFHDEkmfGUZm15gZxx64GPjojD34T3qyG4EVLQGaWfXNC4VAAdCCJ",
  "key9": "4zkfCsyckQrqnKXPhqu4haKpfUjMVdKM6GBCmkQUkT9fWohoZ11HWKEtMeixL4srnVTNuumnvjSe18GYEYqY8ysX",
  "key10": "5jF8rGXJtaTnnAyXqdBdS8LTv9REgCnthq9cABTsjSjQGUSHS6RSaX6Z4Bt81rJZT1FKBnoHnX1Vk92jTSSBKqz6",
  "key11": "2Mk1oEN7uti4hRnd5PjTFoTVK1gci5R9DwfoXuPVS4L7aK66PaMWxRraaqsnBNJ7hAFhpdHBUTKfi6X6LCF3yXX5",
  "key12": "2dEz1zsKiMntPvVzxVDH24JQPk8SNvGVsnxfQrsAp9BYNDc1yyRgDLNYN13sCVX61LY5XeN6CWffcc3VE2Fbbq9Q",
  "key13": "5ZvBM9YnTVvH7nEmmmPg6ijftm5YuNbxQKGAjMicjcxG7jDtcjMHJbBgYG8DLNhDxHGY1xpC7e1FnRpHu6ApZxSB",
  "key14": "Mp1QCLyfuJg99V1heetpwsmzqvLcxS3iqdgs5BE3fErksHiK4ZC67pKzPYEm5L7mT9tBU1psqxr9dHzG9kZuHVF",
  "key15": "UBgLoz3Bj1XLn9DNZs1pELWh3fYrKDzJqSGFktadUmoeXauxHxoWsnr2jAUqXswGSMnhZsggC91L1U1EehyjBpe",
  "key16": "3s93CoWyNg6iDyDcFGZeybZtdV7CTxBHnp8jSpZzyMA5CFFvVzoms1jGXMZCov4XpPZtaZzsCktWDFKVHJ6ThvMC",
  "key17": "2vpkysG36ypDUFjEGYRGQYf34TtzK9kahdAqBNirGatbJvfxa4EU3mE2psd3k24xz92KmLkgxpQNHyXtgFfnQ5mp",
  "key18": "EZv9sFRZ6pBhkb9CEHt5hDBCjV1SW3Aa7cyozNxgNkQJm8tyHNCmCajFBgBYfR2iwsJGEYYBuuFz3UJBaLtsLxh",
  "key19": "3bMgpn5LzCSP35xFMrAVQu97kUKr5D7PAkkioauXPJE9Be5YZdjNWb9a4T1c4RB7SXDojcnkqpYLyLVXLke5o5XL",
  "key20": "2yv98DCt5kxix39giPq4zap4PsNQPQM4AaWpq5E9yJjfhRj3GXmU9AxixXg1ufuXLn9UKuCCBe8N9JASNbmPgvhi",
  "key21": "hfiyixMemEEjV8WgopjaeT4BMsxPQKMMg4wjXastgEXXTcaGsNvBoNBcKqm3eDcFFNky58FSpDmS7XqBnmeYLtY",
  "key22": "3tHqp49GpVMQXehPtVQvUS6sJL1WqBSoSXcPNynnJJANgGJPCngWG1r86DVee51vSL9JgtatvW8ze6nEHYKYA9nd",
  "key23": "3ByDU7xBDUYyLQztNzXqaVtKEv3YXJ1b3LNwz4VHiJowJ2DjqwJqzVeUXTnAeiurrGdnCopTdzH4CUityfVqvqfb",
  "key24": "W2xedXu5QcjehDwKoKKpfUX4guswEYfBZ8XBhhTpdH16xx9bsAbswUcNmyExdQEbvkmpGqhMU8kgMdjoTeJAAbV",
  "key25": "2fWKKVK5BMW49iq8GsE1DUNHfTrcYKRZMdDo8gaPhfD26bYEvAfK38H1979ofQX9CGBSdne1rKq2g3NUtMyUfyXX",
  "key26": "2wBjNfc4bRbgYUVGLt1QkHPUvVjH6zhwVoCgRy5j6sQUr6xxh3UMJVDUJSXvu3vESonhQR4B6Xu6s8zV9XgkBxVC",
  "key27": "9DpV5ZuF5cskSt5GNWTmQUJRri3LtURHcWBSgcSypAtN9YAK7FnoZqUgBFkNauPidZq9othbA4mZGqre1hNpHVf"
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
