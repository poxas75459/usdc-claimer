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
    "2ERA8QhL5uYj59XutDxY7wMeC6nRW7Qv357AiJU59fqcwbweZqrALigZmB2qwrD4w2jLQcSgwRZQ8gcB3xa5CEr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33tbG6gVXL2vuSEsj3U5ZTUoxxfmqvN2idmzYiEvFcVHsY1faoBZhUFqeAdEFXmoZc4PT9sVTK5B6UcW1jjUaZwp",
  "key1": "SJgcWhUdzNvCGFBWSGZxxB1PzvRSVi69f1g4fpcAQ96P4rG3p6qhLRxDRsW6XjoHFBHEMKAcJiB5iiVKoRJUgPE",
  "key2": "JVasUri6MxmArjquK8JHSoe5AhK6LZKxQDMjtZoHAnHzoEAJVU9mQHAQPin4LWjMtaM39NL6ZykjLFBNK13MFkH",
  "key3": "2kUso8utZVV2AjovaZEvyx9nc9iK5gxTrq1Xy6hcuE1guViPimM24tu7vvEnBa8MfxMgR6uUyciyeSusUdvX4eou",
  "key4": "2uysH1RCFK54ZMaN4TK7GKxT8YwSiqq7bWQuF7JMuh1MtCnKb94DWQr5fUb78oxRuBa7qJacSBqqUM3JkyZwSGwy",
  "key5": "4omNttvSzQDng1Xn5rx1P97a61yHtNoE1Qi5oYQx14TfSdMgyjoicRKgrvyKxD277wb8kagw7EGUfjEPt18oL8Du",
  "key6": "5E6BjewjgQqxkBdRymjd1XkxgWrnSAuHg6tsGQ3koBEVewHc8hWDUsrBfFRaSKPVtQh1Awuu9mJeExPCXanguVGg",
  "key7": "5BGapCJCGsrVWtcjkPmVTHE2hN4Y2rD3ofFkKJ3mxVnRiZAGBmCwNdBV24dESVgMwPxM6xDtVrSSZT7L6AvXGvf",
  "key8": "4iNiPKnhqTrzSoVXN16WYxtjNNx66zAkimqQy2Gunk6UJ9yYgFJhD5yLKkjVbN3z4nS17s4RfT1UhVptwQEronzb",
  "key9": "28QpXFEU8tUhFmecvxWQzrij85WoodgZ38LCHa238jQy6GNWvenQ81fHCtPSJNWEmBDS58WZRriGtc8PUWX2PZeJ",
  "key10": "5K86GigHRQqoB5gLpAtezQg9iBxMGUpo4nx5NHAh9YaiK2TouGjwuYgMrgGA8JrZTAUDWvpWkBhq2GAfGyjgzf5o",
  "key11": "3vPN38amLRekqFDAmhYapdLBQQgEjo3pmkH9JNRduvDmg31UDrRuggq5LeWb7VEPJFRcoucuUigYCVDgZ7f3jsnk",
  "key12": "2WVkKgbaRvwwpK4evZigv66NnpkCsJGyJbc1GToX4eFwALpncedMhieKqsBJ3bCrU8PaNjNNcxi8uRVb4C46ZnFd",
  "key13": "3GDeeU1TVUaMZPFFghUuyEmL6Mu2McFjjN1qyKJA5zN4BxDx5ck5JPkW7UzGN1V3Qxjt7dmeVseR9Rf2C96tRW9G",
  "key14": "41G7NJM51LAy6kwTde5FjV3W4t5ijSvaPRUZqjqeDPtpsh46QHK4RUmZhPkgWH1uwoihyjeWDpRn3LLhfk7QhDk1",
  "key15": "45G2sDYL5C73781uBQtGKopjEu63CaTQ5YqwgGuF8qhB7gem881iUWCjG4MrrLUp3QyvsKXa9VL3tTxJCjYyLYVw",
  "key16": "wYkSSgRNPjsRWqYPBfCMktX4oxbmmj1UPwb5C6wrSQgngHmdHcxCqZGznhf94xJbCPBnqghENbRoacMer48BKPY",
  "key17": "3Q4Nc1wWxoMh56YFhRvRC64dv1tfkZou6xzfck6NZLz9fVDRhG8WTn2i8HG6W96yg2UFCEg4icKXxdFoCaCsUCeA",
  "key18": "831FGvwW67ScdESNtp7WZJRidZindJNRJMuuqob8qRkLWhLVwJx8Xn828NqfkAmVzTM5xz1DJidd35kdb31y34V",
  "key19": "4k7BX3cu1AFhHznGAfYR6iSNp1VtvjavXwiM8iUCqJfvKhzdGT8DEFUTs6jJ8vsBMTYesDEXhxk3DZhc9Bhpe8mH",
  "key20": "hLSDHnjhZE9QVHtst9KaeHHXAZpmZxB4f63uTBJTkX7NnjSUZVGR5boZ4kmPzoJckJEYqYsUWqtrwkikV2kGgSW",
  "key21": "44xHyGL1cHb8rUPqVjYEe3zUbxUH8svRTiGuTkkktw6CticmMYgU35XYUFz8n8qyMWPQihhoMfMp9vVDcm419Gcb",
  "key22": "2keLM6qxYeDM13P1TSz9U63XYCj6RA4AWDTtqrVJ452cG8bdY3SkTdsoMm2JqAYDioEtzvwTAPUktX1R7xTYmb1p",
  "key23": "65uFzA1FuZMUQ55KrVHJPk8j13jsKuut55cHcx13w3dAXEBs77AxjSdQJYY6i2pcja7EivFJSco9zfYRGTEfRb9j",
  "key24": "2hTbsg1yAPd6fGsUZimcxCWvRxLHRVwdpCFu18UXRWuivwRViG1YKtFuwFZatt4dtoRrhE3jQUfaU16zTbCBNrz2",
  "key25": "DHAfmNcBG6U4eFT6Z4p4tc98noh3oT5C8iSWpJvkxtdSqUSuA6ntohUEL5uQyM1UYZWKqoKPAEedqCKUCbBxZHi",
  "key26": "3UnoeXfSdnew2NmMUiiw3sADFgJN5kGpbxP7PyNaAra96b21LPN1vzWfr9AzDu78W9XQbBwrt9nsFpwZqtrw4t1s",
  "key27": "BwxESC5McyHy8YZhaCXHU9DxywNPbUhisBNDtT1NQ1WZ7yAHwnCsEfAWtdWWS7AXxENAwah7nA1ypPnugj7eM3U",
  "key28": "5BgFmigXCsKtZ7qb41YLfoRRHD7RyuETdQU4HsY2FP2qja8CYMNNBCgt3TzjJJsEv9dhjKZ621ysZiNoqExszRyo",
  "key29": "62D8pgHbGJvToTiaA4nhCa325v4kQAu5UQZGU7GKWkXa4TufqYjEwFPPYWU792QfqrkdxeXydMGqbKkuuj9wrqqS",
  "key30": "5afMAFbmwJBhM8g2Kt22t3CX6WtUCcoMX2WDr2e3tdnfA5c6uASfq9PdMZWZo6NHWdA1gNYjFR3f9dAQzrLUP5og",
  "key31": "5X8C1HXC83FswYBkwoDTQZwhGf8yNU5hHGU9LWyB8ytQiDkvmvtthGAvWbVzJqo59VXjK1Vu5eNd4DNqcV3eEZDW",
  "key32": "4F7r4GC8sdusj5oxeYAACChiYGEWA13PPQFETuGo9zYyZh9pWuDZ1YLLcGiDncbS4d835DZUu8wfkxCrVnjLhYm2",
  "key33": "2z8yRHUmn8RCDsh5JjQCw5EGb9WsvqUH4aBjY2hnPhynwHNNw8VhSMoDev6ctDzd1dZXV9GWxHZoP88JHbnBbrfc",
  "key34": "5SjFcRxNKwkyYv9vSWsRzjMih7HZV4ajzJB8wfSZeEkUR5Cpss2MhV5LQPJCUVexrvN9oXT5XCwFKKxDZbHERYZR",
  "key35": "Pya28d3WNWiATBaQHn1gMEWjT4ewdbdn4m7LtnXJwY6yheJwcJzB3qrfjnTr6t6yFd4Ejevw7yKxSvFKFfxUUHB",
  "key36": "43Y6bQjwwsdPvNCbW6GeRdrNgqL4q8ajBZreQ85pK8P85nHPHmrFjjTgD98DZWwdiCTv7mCREb899pxev1nGUtub",
  "key37": "D4YyuMipu86LUh5EdnQCCDTB76ECqJ7hS2SPY6ojSjmHjanmr6Eh3McMrVHUK2MGYKYRkW6BKoHPvuQoNhip7oT"
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
