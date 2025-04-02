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
    "EXhXCREABqG9S5PiAwa8av9QNYkGrwJNJM6TxEHuuaawyoHFnrw46RbcZxmV5RpLzDvxC917VNhWoFMaKWzMSXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDfu9kDtCdzYLnkjmmvaZCN2N2SaGDaT9io1j8PdnxS5QeysEaWLuEskmF6ymfbZ4XXzmEGCqByBmFaAfiUsC3C",
  "key1": "3NCPYhxBqRx72XptrNrwKXdLesFBZuK7FeqcMfasmtMVVYq39yhjnANWBSAutJNqCmHwnXCxaYB2Fev7XNbsjX1s",
  "key2": "5iijnUkhp1jTKC8huTAvsQ5uhnGa9Yggcd6oQNErsLk1hEpeNCvdMN9NFGHvMASBkdt3fsbeFUhnJU8jdJshUMyH",
  "key3": "2xbrFMiupRMMeeyjZcXVtLnpeqhVUNfaHQeXiS5kdjiPoQDNPAU4RYG78Nwm2vqb8BJ7Uv92qYwqJa755FRYUeLf",
  "key4": "27r32vdiKsYXKWy2xR2FiuzMYRTevT3NGqWjGPXan1CzTta3iYGgh5bXHoawkZXZpdh2YSenBYmZuFpWJuL6CT43",
  "key5": "1svEupTa87eBqPf3BQrL22TUynFXuUs93DJuXxFzUp31BfJ5jBiMVj9F8iFLemBuLWMY1dGfZCsmduwL2AXyHZA",
  "key6": "5AC6Zj9Jp79Bwq56MWBGsrdvNrM9s757em2DoiZcCP58t8LcjCZxytj7d2ec9rkCSv6BegvkuJJ1JsnEXPQxQ5E2",
  "key7": "5kSqjqBnFwzyGUSe5bmnFrns21X7vehjtEn7AuxWdihQqUt4nbQbh2LWj419BAeRGKg17LwSo6KW1KCwVvyVCQ9y",
  "key8": "5Nbqo6pe8LkhpKuX5zNG6dQ4AGRb3KjXzSffU5sBH2w9FrAVkixepCnhToDaVUMiKchBWgsJde35hptmX3meZyzm",
  "key9": "UXh1P5p4PwfKLa9tZn1oEH4zX2G8vr5mrKBJwAsVprsdzEcEqJZAUBM3vsnmRoz32hX8J9dwFBa17pSrQC34VYU",
  "key10": "co2CX4rywpd8F9BCiCCffGQ9cMFQttz5obtTDcfjLSNAj13BjZifQHE4VEqXMo6JLJwMtrxz479XHoUQm5eDvPj",
  "key11": "2VP9c5ikdc5Ws8dAxTvneHZ9rZs62JuqFUUNbGL2aU7Xf6FA8z1PpNgkBn1pQHYPt41KZG8DMwA4wAnqt8U3Bxca",
  "key12": "3xE2UYJ5r9xCvYTFE2SJewP6qXJHFqHFpvfoUuzDgT87zxUEh5uLLdXW57k54XWja1sjWFrvLN1pJ8rZLBfuwXKK",
  "key13": "63w2XYXMcqQrGokhEyz1SZtVCCvW1BgV1F2pm1VXn2qDV8urx6GPt8ZUze8gC8siW3u5eXuaqX8eTGrtZKdRKP3t",
  "key14": "ej4hg7xUzTwrSXZnL2dS4a1CAvR2ZsqG4acjNNW3Ze8XvxkYseioJAziBrS2jfQCZ2f1UGwdtJK6xVHvmWsHgJK",
  "key15": "HgUEUjkkot4n8MLyRJRh2Wb2qfk9nFFfr8Uo5tn2J3L5Mk5D3nG8ZcdNgU2HGJN7k9UUPNwHvtHPm3QNY6jrJwg",
  "key16": "xMKvpXg2Gom8drbaZBm4HQ6PNYNSrLW4RXWf3pfYDQnb57WvcwjS6AwptQX4T4rTDJVnE8MT9RAcbZzEYMYA7Ca",
  "key17": "25aBjcRUfc144KELJg22LNcYxUA44Qoggf7AhFu2SvdjETQiNKoMq7S3N3gq4z7HJvqAcaf9D4j6LjN3AGqRNtMV",
  "key18": "4xQENZaJNkfznX8YnkzEeeAqYDbgwQEG2Do4p8K3z52KC2EpbMwsNUqTCttacrqDCESpwfx8viLKpcKhKg4AHGx5",
  "key19": "3YESJUfbMQ8ABVyCXpbEiy9xMMHSRUAMRjZWyY4gYb9X8GEXRWbYitgTcKSXHq5oHbZaZUzf8RUxaXh1wjsJZGvk",
  "key20": "2T7qwyBHS8gCSJxrbdvV6LXFECZ7FJ1i6kB2cEAHArbq8HHUkzBaxu4ka5gkVNB8RAWp47n6Ypojp129LJiyYc3n",
  "key21": "48QbchyxtPSB6gmdoXYP8SaWj5zJKR7hb3uvpXzf9a48wgrp3c9R7xdAPQnWtczktKoebWB4iSKrTmsJHNBatEPW",
  "key22": "2HD8Dcz7CB9ABrGKprEy3q4eQ2as6zc6E8gUBLUaxaHaCNmyL3C26A4xWSMTUMgX7x4sn1WWSQeqdjPgUBBUKf2s",
  "key23": "3gXiVABeYzKSGy6pofRnMYHMBXzoxfi4yBStyTpKhuNngkbsYKXGrJbiqPQJN3Bx58XveakxXZYxNhinygRCRJsE",
  "key24": "64V7jHjY7CjRy2HG6aeujs9rBvz8t2eSmBr87oBrcNG3D2raTqaJRUWRPyUUAge5jEFWm4RmKjwE2t4hc2kKCEaJ",
  "key25": "2B9sJtukXEPfphqd7d3cTefFFFN7N3KFQMa9uTwxg6pRT4R7BxQHevubrAV1poCVmYiXqq3ChaR5Rw4z2io1zN4x",
  "key26": "5F5sqi9vmTfwpUuevxqoP7NDJ8igmttu2BXYpHQQsUWku79Q3SNVZEc6BDvHcDFjbocECkH6PUtyMcbWAR5Dx6by",
  "key27": "447V6mSXdsfiDtp3zLBMcgnATzZGuzc1jYUjSG7j5PToiG91LYrjWqZeAaHqAFvNbw6ErjNiRZc43rzsiu3AZSix",
  "key28": "3uYvbyYxLDcTB9qPQgZd2tTMQ1xPAR4imKjodKhXm22w9MGpyUR7T2kzLs5MuYS8GmBmAwX4AMquYxLjuX7KNVKB",
  "key29": "3wg9maP7xszR9uEsXrVU28RzMv82MtG4MSoroLLwcKyP3KBzRCh3853DakJKkdcBpNJVSA1rmNnFeK4ngTk3AK5P"
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
