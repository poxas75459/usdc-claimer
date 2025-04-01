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
    "5YTGJ6KMnigBcdQ4jUBQTZktPNgcGejNkpr1V2ysqWFCcKboMYwCkcbGcZ1HuRyYfUWwF8t62fHgUyGQxxgGnBH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZcngVyioY2V2SgGaBCLjmXAVJ7ChjZqwhkbsFWpC9G7F4ZzxMXCLX9aQCTx62FoJatRfRBcZ6ZKdEQJ2zPeQ6U9",
  "key1": "4M8qvDD7ryG1tz649rcMDMcVDuP9TGbL68DfrfKW7HXaWbTmTSZcx9Mzd3ks6zq96HARH6y7XN6iwY9YuUd7CcPg",
  "key2": "5n1Z3ec4sbnFCj1o2fPFdopPDdPfT1XZjjq1J6n81BtcaJaLUtBRwcDQcGhCudtTgsYkogJSXHXhLYcTBTLsBYNb",
  "key3": "9gBN6sKh8WbD2nUsGGwhLYCKiV7yPVeGx4DMEMJ8sa4VockFgxaLurpF491Vg38PyWv5jGmJxDsGzXqn6Mf4Sx5",
  "key4": "3yvR8QCbRrtLZDP2J9gL5KR1D4xcUQZGBAdta86jrxyNdUFcbbB7ERc3aUSFZBGiRUcb7urYBDFRthT8QbJrF8Ne",
  "key5": "3Rfp8CngiZ6zxAPK46i2gDcxygLGTrvnuhLLfYf2RpmnQRyERK4udSXeeH99UfCGEbzK7w9MbpxwAuQfBzZh3bPH",
  "key6": "zSXtvixmPkLBRJCjBu44tYr3yrgE7kEcwDwHhELTy3oUPnAtUp2W2TPiexqFVdXKpbGY5atb3ZH4UHa47ipJTuf",
  "key7": "4SGNn6YyXvZYn7hPDTsAatPbBAtXZCeQfdpYJK1NMwMQAFeWazDs9bhFZdnRWVxAmD34ETcsBkkhXB1qtmptpnSM",
  "key8": "664rbJKsL2XX3zERrLMFFf8qgzHMoi1AhZi9EbMf3wBhmJ1tFAQpzjH2TPN1j7R6YUSzSfJVz375suhe18pewLdg",
  "key9": "4s3b4kCf1YGzE8ykriCQQCtnCJyGVqYVzstQY8KLMMP9U8YQWYStqTwQhK3otzaRLr8Wu9pg3CzvWSWqArAC9ZSC",
  "key10": "2J4zPkuQXaVVF3C8H2vsCcxyCPBjVteu1vzQPppY72wGw14KCNHf5g5SSDTKTDt68ZLhzsry59orALxyUhpKzeEz",
  "key11": "4pgxpGCNs2UBV68gc6AMCLz99H8AGzNcnPbEfK5pJRAgsRjxUfUwN3BpSQ5fTtg6LMcFbfgB1ormhGq5DSkGtzCf",
  "key12": "J65aUKL2Nx3R6efRbDJRYU2yYyUAJm3romDcLwKSgHfwd8iYP8kA8R9qtGjLpuVqz9QjD2pwWeRziwnJmroGP3G",
  "key13": "35Qou17cGg8FDVk5oXE3MDmFio569vntjs1Ds2NH1kZXSzhsCXG7dirWPTUCjoZVPmrqiH7E89toXeuUKPPN16vR",
  "key14": "4GJDTZUKezqiUmxmKXpvovUvEkn9V3MhcPaWXSVnNcW8xKKV5D6HcSQfPFrLoiZQp5zgorZADZzKoCmWFutrog7k",
  "key15": "2s8ng3DLoJYnndrMo9cwtLbPLhJtU5cCuAn4KHmLNsd2RinQg4rz9irGijKfNva3SyaYT7FUCBsVSX6BhUZZiQzw",
  "key16": "2BZPmMcJz2VTWriwVE5qzyNhoT77rybyVr9WSdxwbiNRACtLD5CcMjswNxqTKCp2yaTT5GDmWdx5cUVJa69vE3hb",
  "key17": "3GGGew1n7zK9H3xyASyCrrCgCVjkV6XNGDbQrHUqTsEUbBHezELnhPKya2qqZWKQDwy4vk3tzDAVr9SnC3Vu8vkV",
  "key18": "6aDXmxynSBgWi7L5eJcLpnfchQKT8MYNQ1HxhmwD6jEb5VAYsks2y2wpKn1z6BKsfpkrzqkBZf3HBvBqbkMTAtt",
  "key19": "28cHY6wvkBJJrWtomqk7wfLcMJoyv6c5vLJAooa8hw2XcLKMLzXhRSBhCHNfy4ntMjxmeuoKgwCbd24E7sEkHUh9",
  "key20": "4LYF6JMrQ3GLAaZ6DRgQ6HRUzssMvaw7PhHQenTqhmncTC7DmzaDWk5SbGWWj9DsuzxR4Th9ApuqLugwhi59wsjL",
  "key21": "ogzfVd6XNkeuSiYAst1RKQJZAJ48fvTEVuVrJQuoUyPn4p4vvb6kcWb6rK71rfKbwzZ6kaMSmKWBnsrAeDveetd",
  "key22": "4JbowZpA8xSrEVqr1JcFRmSUQvgfAVXcYYmjr86YwUk9omcguudJEiQF77uNSwtt5UwWysUqTAPJn6FxYYtes4gm",
  "key23": "2V6fGBnbEFRGoE8E2snP5gkKohZyy9CGM1jkPyaNZPUR4BttkzER2rQKwMEtLsoBk3GEpVEArtiVCcFT54mcLFsJ",
  "key24": "aHmYREv5Ni7inE8k2i3Vd4rDc52aHPGihwJvn6DTboW3D61pHvq8DD8g6A3wQE9b29J2CD4NiN6Enjv6vKhHL3K",
  "key25": "3NAR2fegLQwREkVjDBFvbWLyvvQ2UdQhRouV6F4xenU3cDXYitkZMzUnmQV1nQnR7J2sZsBr1sNYjVuULuuFzRQN",
  "key26": "4aNcZwiPym9crXL5imYzNzeWqgoKccpqutEmLb3oY9oz1z2W6Uuq7nWMAeeiWLMKhpVEhZbDHgxSXJ9PpJgyTdea",
  "key27": "2hyCveEYiczPzt21NZDAc3G163zjg3ckGXX4DvmFuvL7Pw7etD5x3cdcGezd3PoZdE9BWFHp4h8ZJ8aeZ2NHR9gG",
  "key28": "1DvBSzL65uSpF6Pofit7syQ8uZ3VhubkSEf7nzi7Vb2DLkcNnmgvqg7T3SWNMj2eiZDYj5Kx9Qu31hfG1YU7mnP",
  "key29": "AZQjnXK7SbPGYmCazMS3boUEfhgGqPTxmPmPJ2rihD41Uwxah4C9Tgik5J52v2CzrUNFX8GFLPmMqUzkxWW85mb",
  "key30": "3cE57uMUEzB5P7vZ6wNrbdpRpcXZRUpHA3qmTUfF3JfAi2ro8tXr5NJcdo8zPCGT4zLuxVBKmnu9xG47e7QFNzN4",
  "key31": "4efKfcZ4s34bVDYKwHTiiubn55XZX1vgXpsmuSP2tzZYzCAe3Y2RpPmiGQirkeMLWM9FKVysYFGsqc6APe3g3EKy",
  "key32": "3ThuxJvMSuuXcHPaUcmK4KRosd91avSEAV91rE1AxK8ZWKECd5ALaQ3xkc9z9krMqRcpMHd3RggGfGEQmhDJP2GS",
  "key33": "4NXuQfkYN3TioU6G4Wa87JoekK7cmn4BcEoJRwm5xcREDg1b6o9qFiFpJZmEtJMiPdwkmqhyp4yoJPJZXXsgNt1v",
  "key34": "5TtdHrc1AQ45et7geYwaBEHkaDbTywB53kKV4LBwzZL1vNkssanUzWKE1oH3ejwtyyMz3eUm9KWa8N6KQ8qHcrq3",
  "key35": "3JRrStTFCcZ7yvYcSgLdhZpoCNAEjjAJLvzZSkYrYJUZhwami1kwCdeUr8wgCuJVLuH3wh9pmFBJ6oHoSnQi9RXc"
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
