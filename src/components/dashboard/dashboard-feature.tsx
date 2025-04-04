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
    "4LBpnUmWfVugGVcCm9nLxfrbFfGFPFV8DtMSVxqatjJKVW3L6dkZc8Czbfz53zhaC6aDMXBSfUHsyAAAXywrFRtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNxnFon1w3oNRq2CwnqLtHZKfabFf6EMC1XCDNURrTWwT8oDBLxgSEfWTgwdnRbZEJEAf7LHKbR5zTECuopi7Hn",
  "key1": "2Z4TgLAvRWpaGSbZiZrLwTYTuSyX4eE8AEThztCM7nRSjZCRheMTDYH1bDsxcMcf9BEydQYVv5qQKK7Gqyq6Zoxw",
  "key2": "36Ru1i1UmmhPr7u9emmkrZ3CAWKkRd3Yr2FbMtADwXsbie7cf5kWcy4QMevBAt35sJM7z7zDcgTqs1cQ6nSvLpJg",
  "key3": "dQF5uLi5dDSo3Bk1Ciyp3jKJRZBjgor7CuiBmfPXzptDXKSca4Z6ALuMAbDhVbK8Ptxi2YFJRr3ZKAYnNz7Sv4b",
  "key4": "3USTv8iXK62MpYWdHuPeqrvrjDaRFXGbZqNjwVbmhP5mSSKjP61PaiANrwux1k6MmjxPzicYeBsQrFYL7kiUpFv5",
  "key5": "3FbdsBg9jxPFnCCQL5KLsw1jYTh5G2Ean7SvqfD4TT6on1bD43ZRyC9sqqHXoZDu3zuDsFLknMaqEZB9TXq5mCrq",
  "key6": "i92wWjmWetdDfBzYAW8ZLaHoj3ssGZGz53K6ZCCBEcn11HDuM4WuNMugPnupmNh3AwFgz4tUafnkfWFN3GR431C",
  "key7": "2mgzLNm2oJ8sawJbqHyDPWzqgqkLCjMhRkqP6Zo6doNscRSETsteihZsH5mkzA7BTeVWNs5b1yjKnHUgxPcbhKri",
  "key8": "5oguoEjotHxeWowcyVzse8BNaVWeSzSf9KM4tkFncqTc3ujJsANhx53kxwQwj8a2ihxKqmaUeYCuN9RwVwUxkMqr",
  "key9": "ta54uvMbTKME3ovoVbyJeRScxMnibhnmG3iRNAcEWFAdDrKgdbkfzBa4R4mBY4DTitPwkZQoQcaKtSY761fhDNR",
  "key10": "3HC9AqqsCLiUf4vrRjHK9WSgCHztgMMp6chuf9to1SwKzLxUbzPM9emSAMC1Zo3kXvgR565WSLoSm2AinJqrTC17",
  "key11": "fhLueKr7r5oMcgChReQbUnJp1EDBmfZfaKZAG4re6ReREdvzMK7CMbizPFoMDn5SBH3nFU3mv24SXi4vZWqrfhP",
  "key12": "8y3wooT5hd9qFzrHQXMpyBQwsFFuck4wbvKDaMaznbYc3J2tXp1ix5wLFJyxz5BNmw49f28no9n7vvi9ibtUVUx",
  "key13": "gm36rkWMHNASPmVHU9ttqKYm5jrzyt88uigjWDVX7eM93yAQ418ETmSVCRD9uouNzQNnFJjX55ZihuV79zVBqbN",
  "key14": "4a1ECcmct9HLPnNJoWiYNUqgJj8m9AwrzBuVcEta9E58uaFSxRk1VNCkVEhbDdeQjPit1eU6oBvCngquEuJrQgad",
  "key15": "5VAVdUp5xG8ZjNRmDuVBXkN2kVUF2HnVTLiiAD91J6UyZbCfPJeauwxSEwpi47T2x33RuC4N6k6WZeXk3tn3YEsM",
  "key16": "i5HC6mFfB12izMPKHNtuP5jTughUejrWsN8QERmkSH1UTGR94Sy9g3GQyadnmpRWprLoH48w3Q1gwC5mSqBouYC",
  "key17": "5idXufojNUK8Lh9FUh3wiDg4TsLt28AwNr8mV8jvLbMppUwPSk23Fe3yqoHmwZfZbcLBEN8UoMk5u3YhAbpmNkQA",
  "key18": "4SGUPEVsaASaBohPyjNzVPj9CCHY5rP9JSyZM8tPS2vz2LoeVufFC2eFE5y7XFyJy5GZViAWkSwniwiUk1R2L7SM",
  "key19": "R5P4Qx8BREqLrdwjgg15x4TUuqr3QZT8pTm6t8FE8aUozPhWkp2EP8nFbsBSeMQMs2KXft3tgRcamBYipVQNMcz",
  "key20": "2avQsLJJor5MiKiGMcjtDaAwttoCGS8u4qJjFZAYeZnivUkrrhQ9N9rLHUgw2kZpG9bJsPngYTcfG5QZLQVoWmMQ",
  "key21": "DogRpqjdmpRGNALf2zxXKRsidUC1th5NTdYmNuQCXMwgoAW8yomaaC5qm1WrukVG5Rqq5nW2h8AccrS44mmF5PQ",
  "key22": "2K9rz9b8GZWDH2DshE2hW5LxgqBo4CESSrjqUiL3Cibuup7hAxHC1dp4YQuTSfS5FMTe8eR7cA4Cy15jtLkLWpYj",
  "key23": "679HT6rgSqAsZh5mZYaTnQaaN48DiMxPkwiyYYKMN5564GauhXekFGxotEi1Gv2J1SirXvB9EeHDRvkzw2qc4n4U",
  "key24": "4MGjciGfAhF3oyh7B7dhaA81p2qc9uU9oobvCaQG6fJgkRrpsUB6R41Az3uP3GTwwLFaNLmU4wqyGJVEMaE8Y5TG",
  "key25": "2jSq7Y2ZxWQXzLn9t9wuCEcvKTanTDTu8i312uGZWLcafvphr9eHmHDMQzs9esC7y5QkLcKDjU8qPNBMKKx3BeG9",
  "key26": "4WwZiWWBQSv58r6obFZsMgnJFDGZdTntyuQ44md4Bew9cKNkDFtAFS8GHY2aATRQYdt6aBiZ9R9SrzNZMkyHBVwk",
  "key27": "2BJXHWFXV4ZHsKPDGEba9jwyBhczJ6kBE2mX2MonECkLt4SGycWycWX3GuasEQv5z86xQC4fQSLgo8HXrv5TMvEn",
  "key28": "5xyqfgy7rRmu27H3HKS1EZv551wh5WSjAjcXvJBNiTqrBCvsR1oSkyLgAsXPMUMdnno5bQkw3SikrYiNZv71eyKB",
  "key29": "5KGeYRRqLt34NMTVKLFTUfFeWTZSMPzLNLzfYfdFZFZwv8z9bqQ816Nu4tFk9CdVaCBfPT3kekZEeuV6Dynq9QDf",
  "key30": "5rLR9YXXQutaAYJEvReCvQm2biZmrMozX6hfWtBN1Ay44dkbhZ7mu3JesLUEBZUff35eAgMvZ4KZZY5ujwVgvUCy",
  "key31": "D2f6EPrhoJi5rJ2Q9hhaDx1vTer9ud7wsQNEDq8Z2yuFbwzSythfJwMmT7T9tacGyALPBwx5f424uKa1vxdbKVx",
  "key32": "3Pnp6iuyoD8LFco9yHmirbw2gxaCEVBgvE8v7bPtxsBQ1ACkS3TyNtehvB5eGPSFCQ3LK5HYWWdSsJQDdL3S7Xku",
  "key33": "3E2xK9i6V1SnFmbw9NY55YxPaCuyCMyxzufVssh8UojdN2eqbpFLA5tyKFDMuVsnxp1RZbAWB3eAmH3mS9PNuSnX"
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
