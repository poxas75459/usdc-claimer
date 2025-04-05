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
    "5Z6YaFfE5hfvZdUFtLc6fFBezNhMqJ6JkfbiAq6ubpczAT3GBsDv6UHfmNjREZqaV3weE924EJjTRJZib2ceBiq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p1rdZnK19B7AGF3ZjXpvcJBCnRSKoTfgkPHV6bk8FHCnQoVTAsBgaTFhisBzvX9yFViczEhNJCSQeeKd2zTTK4P",
  "key1": "3SkrYGF8eVd3dXCxkmWpnUcdz8yLNuRcitUFUKv3d9TcLNCvjE5h7YkcwFTs2hb85yJuJmcZeqRJG3fv3TC1avdK",
  "key2": "67iEU8c7xZVk7qkEg1hxRnwMYx5xo3ydWMKrDJvcjSL1P4MyhsZmG3vugZiUTCPkgYhF2ES8upbD2LxQDKBf4y67",
  "key3": "WiRPcQGfj3teRgot5hyuy8fhHK2AaY8Um7XptfyDQBSHsiXiCWRbeax1RHtCpQXrnPcyiNDjdCJR8VtPUEjC8Wf",
  "key4": "9dGtkoLZD66d5wAKDxgsbqqrkun9RQsA5qDeson6arV4RgZTeYcpaxEoyGNSHdTwvSjy6K4KjjXsWxpgnaujzCH",
  "key5": "4kmReKcdSPcGB6wWkKBAqkPk8JdEGjbPCQ68bs3MvvRLBZ6tPPXVFtveyGGWx5yqrz8HXXrEBQgwNBF65o5ftNoY",
  "key6": "t4ybjebnnwfUKceJ27Ti8ebaTVKbAuRwz8GB57P534LF4zmRVfxC3rvvSAXTx47vRpP3Ju43QnGGYFHwD6ytc63",
  "key7": "2HTtuhR7CRXXD1zBMTbw1KtvnLMNBeVjWWTU6NDE6tZFjTUqCPvPxpLhkQt3fn5CX1WXEgAzhoXeSGipjVUpzdot",
  "key8": "3TRSYw8ojYXJDCuciNKv8gfRnSzD4ahKgRYcAaq1P753UERDH723RPXqQitM4Ri6nTr1rjwZmkYhWNsVhTBHACum",
  "key9": "3vHCd9S7qAH7743VVXRgvyfb1mn8gXoeGMZBxRCDAUjvWpjf892TskiBtQqAqQ8kKGjQ67Pu3FH5xnTcMQRy8rDJ",
  "key10": "5Wers89s42AqEpxvxZiPPMQmBBb5z7yyDVQd8HyF81xdRUmLbBVAaNS2R3eScTxFF2LzQ75KnKz6H7PrzrmvmCm2",
  "key11": "5TstKyCpvbaHnWY3NjAXyHLUBCEWcTqU9WjHPDSgu8iFMhKrC4PPAexW3gAp1Sd3Vj9GCVhitNaPFgQvien21uFi",
  "key12": "2sGHYd6rKyYwkGrctrsmwwL6hezLfhSqqKjKRyGtLv6YEkbbqMiYhhqS8D4HGvqz4uyscioaqgY5972SP7nmC1d9",
  "key13": "qpEVg8FhS12AYYsb7zgc8knk2AWjHypqd5Zxe5ZC8f3GzHMj8cuzGd2RexddVwexdyUEUUYY8hvbwqb75dde8aX",
  "key14": "2eg3EXtrrUcAdgTRzHJx4QmC1Lotz96d414BBfi1KiAZKrCqSMDDN7xrDxoaEvMTewhdBY1TPYUfW3C98hQLfYCu",
  "key15": "2KCxxp9uAantn4iy8nSZZAqAbbZAT6pHsUmKAYHp86qRvsedfMx67JpQadsuyiSi9zuEnNwTTBa8FX7bBVacS59y",
  "key16": "3GuQmaMj2oLNuaQzHMqFVvbgpoHxgmFhMco7oFGaob5nxnRiFVFuGdcT4KagFzJ9o54vp9xYQZPvZqLmsV76nqr5",
  "key17": "5HX4EZf8ozmtN9zoJo7ggtM8ScuNCKVZntEBkm7EpnrhNG8fWXtppfMUMcfyQMWhsDDdiStBSNdkzqBep1SnMiKo",
  "key18": "2qDrCd6tiw36z5dSjhjTJAxPHCwAyCF7W5YuNFwxZCYX1Fv5LqPLa9obiEtARWKyafLhkVqzrHrBPCPpJazatZHU",
  "key19": "3EZTNuRfYk9aHUkKSmSNPKscuJD5qopCFFsqrqCTqLzNrXpjSRYsfaxb4ay5hNGcr3CnoZFeMg4ayYAysJ1eRKu2",
  "key20": "4tRnTr4PGZZNqsyrTp1Vik5cenNvz4rZb95VBXoxu5PFfF7yUUxhxQqh4v6GDa5HGa5AyhfjQHpeSxekyEoip72t",
  "key21": "5xg9btZDEjJQsx9mJCpY6dMzYTD4DksxW6CjVBJr4c48PUD6M5qvk6C59exQiatLo7sgmVEVrjiJLPnxmaz7YvaZ",
  "key22": "4yy81Pvj8fLuw9aCHpyDiK79Bd7hWMWHAgqsUowyQs9pgjA4n1McuBDiFMERt3sWgP1VfqawEzbzKwVrBCaS8Pv4",
  "key23": "4nch9bmanmvusG5eWaWcHHBceRpEiGD4FQ85tXt8xsbxkz9vSxa77rxY3Nta6M45kjAtVK6R19MTYBPKnZTomj5J",
  "key24": "63svs5L96ttmpmFFCkRJp46EhxDqkaTjxxV6q3CoSLVYFpPpxcGjBdVMMUfK2ntHqnvXXZoWPvYDpUAowHTc8H2D",
  "key25": "QPLAExDofhhAMDFZaD5wpdrYAwnLNvSk2uLeBcYQapdkTKrqmcv3CpA1qAXqLMMqiDwsa8VhNWeB5p8TEHNHWr5",
  "key26": "UbFrAE4UX52yv82oTWvSi4N8mm1wCjzWBmQKjU8rLmgWmzAScmFtCtaxjcVuJXgoAeTkHmx57D67LMLxP6KHFV3",
  "key27": "5VNhjTRUGfg9miJ4DbR2h4DfAsuZNxNpNwvys9uCy5jcwrXeTU3ngngAVS3Bb2vsf1eAN5DkfDcsD6ZqZ9VLYEFN",
  "key28": "2v6us8eVC4ZM6duGFmtSzLXpTXxcamfmXEvRFS4sFN4gQhcG6gER3TXj3ejchK6nJBtiuMcSV9PEf3BSjK5QTvhV",
  "key29": "2GvXQgiP1S2GqRU1vCqoWWuY3dP3aiZGCu2VCd6H9oHVLb7bueY7SFhgpmcgn9GFbTnao8LfYSRKE4YDCSenqjtZ",
  "key30": "417AhxhRE26xTk6rVJTHmgjfC97BDupLR9dLBERwPpdJNbcgqfUouSf51gGSDsLkABwjQYAKJegatD1LDn8GSg77",
  "key31": "2PQbiwvFfcBNF1kbj8618wfQ3hJ5i2yqNfUWP5wsx5hBSqaCzWS8N59SieGNmkYrdiptdQrXpEGwtnzMjGBZYeHd",
  "key32": "3FJfFMkJaCr7iY4Q4JoZFdWwXucvNyJtyuxx9oKA3dTYyVf5jg2xnsNQ7YM9TRuKYGqzpwkf448Q5PR2uHfBwY55",
  "key33": "cRwfweH3RRJVFELCm9NBDDDSrQeLND41AeEabkzgLVTK7k4JnXkpPAH3yeHdBbdQSiBFn82HzEUmeWuCdmwqTxA",
  "key34": "5AoqUfZckG8ASsgQFDad9it6Doy4E8oJSgKBeFm7UV9saJyCe5PZWZ7hgFhgLmQAv6cc8BoDsKJZ6iM8PKm1WEky",
  "key35": "3osTcxFQt5LTSGSgokiVwHgSGqudRz9hTDC8J9beCHcWwqLzwjWiRp9D4SRQMRL829eNCzgPbKQ3QfMTx4yory1F",
  "key36": "58GeMGSTh3FojMvqqp877msvrBoSeeiRes8nyggUndKzNNr89h28wuaGQQ8ae4dNR8K94K29mnsHy1Bc6zdsTUxF",
  "key37": "3A7i4LwyJ5uYMUPnRte3vKhqncV5ScAp2LfAsfnx8NuTME6hKc8SmELVi3AKihouvEiFUa32eymD69wK6AbsLgpt",
  "key38": "ct2YCMgsDWnjztrD5nKcW3xKpBrYxp34Pqjun4skcFn4HdNpoKHEEUGq3pbkF3UecWD1DbhRMC52d4ofeUW2sUD",
  "key39": "RnxFwLK1kYMy3LbgaRYtHDtJvv3HR8u1m3zt2A8ZjduP93hU5BKrQRXgKPyKiQkX8dimXxNNeXptUQd1xzi5oSE"
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
