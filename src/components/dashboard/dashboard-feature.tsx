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
    "cWtTrGWNmU85U8yV9ZNCAPqdJW36Pzph8p79rsq7ivCbHYbVshNVGBhiaDaW2hh3Zs8YHE1mc9eQ7XCNedaRBJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3rMrhgfVTgx5fynCPm9EainR9tydCEMJMepCvKRaXtLAy2qPuqt3nLdVo9zEM5uLXUQZLYVTV6S9Yxb6VGermk",
  "key1": "2HinPko3NTWKnfEn9aBzLczHTvQKXXBvToAjy5zoc5nSTFVzjM6hoWabtTjxxdptVkVwBGg64EyiDWwa1fquWM98",
  "key2": "2PRNn8KymBTMQ36y3bUmzkCBBPvahNkDsJW9po2oRnGnCGxrRhgGKRiioC5VMcE4BmK8DNQFySQJA7KZAqJZUmLy",
  "key3": "2cjibHGwicRWDYUUCpuynFWwEmmvRGuzhdkaJZbd3dCPVwUiZA8J77RYiwGjLV3Fdgscw9VC5JMt5VYxz55njE1W",
  "key4": "qGmMD4uQnwnMQYB4xSzZCouvyUng58dpNHoVBxbwq2DpVVpWx3TLoo5Cu7qow7dkXY5oPbbUABCxn6b55Np4YVk",
  "key5": "2SsTpGbaWqY26jhNmdKCTsizSATj6yKgjncoD835AvAuNysWCRCZPc2fWaQyX9PS95wfGY4fx7Rztqx3FfYJmLUT",
  "key6": "2kecYatyBFVaCQWHPk7wq6jpSwWcutMbrQ7UMHqGQtUVTNwVeKrd8bzABWLncQ275WbXTz42bnizFq4DfuHCPuGe",
  "key7": "5mU9CtQkT4BdZoiVuVjMmWC9RW3dyKwv78577qyVfWsXqHRaH4r1MqmFvjWUrrMiHo3kXrvvhRwAamnBg1PynoR2",
  "key8": "5sCXA1hbk29s9tf4xtyiQKm8xswBo5ipVCLgyCSo1NNrkb5qwDhwTn4ritEb6bk8kErtJXzMvTXDYTaTKN1ngGyQ",
  "key9": "4EcFpQnDu2uckraktQRanNRgts19Tc3gcdNCgBjncxo2ZtLtckLtQCRfALB3wrdwKWaBMZJ4NAy7MahorNtzUBQq",
  "key10": "5mKna7rGXipoVg2mnrUnd5GSdrVDCesMpkzK1DzA5RamYWvwMZz6MsAAtF2JGmHok6wgfpwYguR1FUSfpqgThJPu",
  "key11": "4giFaffk88rGUrnRDMbDuTMhxJM5kcH9whXpyacYzFSZDibuJS3oubX2Sq46dbnvESzw49hydMnBskb7jbbZNiJJ",
  "key12": "44YfocA13d55KpN8nLWqj64LsMHvL6HkmDRtMA8EvFyCCGo6fwCEzmWZf94G2yAoPGvHRxdzJ5Ff1oKHYsdELd85",
  "key13": "5tEsyt1XBFRKHmfxesbpv8wUeZEWQrJMjWf3RBFhGMUHwMQoaozXLo4az3F5bZRFbmiXLRYAFRSTXZgq9GmN6tbf",
  "key14": "4juRiKNqbAJ3CcqzJBxavnhxB9BPhY2XkwngWjvZxdBofH65tzL6q2VmktVas4GTtTpUB56bmbEg2T3jveRBaq2c",
  "key15": "8LbEkoRdF5gscghF5yGXD1Th51dSHsLEMYyV1RbS41Me15RvvJdANtNuNmbSoNdmaEbTwbFQFv3EpFTjYoJW86T",
  "key16": "3msPUoWNffPm1JkykZpYQkEwCht76PZkiP1ryjEuNWss5xwTDHcrt91WRJLkGAsPsgsmqUjgdw7pXPsuEAFX5fU5",
  "key17": "2KezRF9whME6stk78eD6WZN3z8yxjqtVWuoJpAeWzbqwrbczkYPCt6UXjihjZp8AKgvUSmNVvV7iD7j2hgEpCUP8",
  "key18": "2SzbpoHMy4vHEcKp5PH3MmrJLXukp6Q331nvaLsxtbD94LaUscZdvSYnMPzYd5E7kquwbpdG8BtkZH8g71fFHGof",
  "key19": "2bJMUduQcSwnJ7aEDXJM82zzPQgCtNXedFm8FrXsincsrpKoXwKnnzEp4d2xEjWLyRqTFPm8eJVqmaJN5mczjjKs",
  "key20": "4L5G8L9NM2PZFWnWH9Yq1c6Ff4CWXhDT8C2AbhbQhkeotQBmDeq3zAwKbqJMjMU8SPfYT5MsCRoHq34LUxGTzMRi",
  "key21": "5dpLLkWLZpWe548nRzEPVq87G5tZbPHnu2nNt7usfNMMuJTKS64EBi4q2wtmct5JkuSgBnxdMEVn2dXYXjsnR69o",
  "key22": "2q2EFY43e2XDTTrZSTGgNqkSVDN4RzvzFxVCr6BXQqQX8GKhCYC9m5Qf8NHQq9cNZPdVphFtrDh5Nyt8XzL28C2p",
  "key23": "5S3CwmmrfoHNoDsDJ42G267PqjoHEteSywtjQX6te6ma1gDhUarGet2JZRsH6AUk6c1AJw2bDXGag1ZbzEyMXpjB",
  "key24": "3tc32vACQG3CkFCYhMLF33L5NhFJmpZjzUoFaEisiBPdce3teJcYMVZzsw652T4eDjoCk8xf377r7cwzHyfx8Sb2",
  "key25": "397RWnFX4beGnKWBRPS5qFpaizuV6bJintRkDecC9mPWdgMpuC5wPn5Rx8az1Swha3DcybJa1XcTR6CdHzk6otwZ",
  "key26": "2TteuiR5GAkSC4B5Kgvaugv6fj4pYfawzj3erUGwrndSDBLupuknMB74yWziENiC2roExGDTGtbBySW8ssWzvd6Y",
  "key27": "24Y1qMnYqng8yGLe4ANVXnNfUKrGAUndqKhT6xhMJfFRutR5TkUXxHXdDiXbYTSo5UVoBhXgBh5obRxWFWcZNvjY",
  "key28": "5b5z99pdtfePqTiA9bzfvJ2X2zL5CaUvRdDLgr9bufezUxSG9nAstvLH9TEX6BfyNw4Z6hNhrSMDuSdbNs9iz4Hj",
  "key29": "4gyug7tDm1RB16WqdNzHxeJMaGmDj23eocLkjFkUhQZsfK5nqMG2j9SHuk2EhGq21J3wSoKrLw5hGKYbSbto3SeF",
  "key30": "4AWvV7iteGBZMT4yMQtsyUj3yCJeW2SEQRT8vyAJDQxTSs9hEsvHSCmZrXzWbryzpfC51eAoH6UDujYy7bcveNvH",
  "key31": "22FG9KszzJA6ugzLANn7qqnTutnfPPa7sWmU2ujYdVLm6Dob75VXX8zsjqSdMqSZ9b9WeMmB6woXcUkSeVBKMXGg",
  "key32": "qGt8weqVrbZegnX6nJFqfNyLJKkqyvU6Mz2NhabMNcKj9hKjtfVwap8Nw7MBsUUXH1GnrEc9GmwejkA1vySQmN5",
  "key33": "23sHLm5DQFjMhSLbfSqDewbLWoad4ZtBWnHyzHDtHwN2ynuSiDTVzo6k7iwaS6wy5BiMNzDDZU7CnmfQ2otyFyvD",
  "key34": "wvxM3Fm4XtXseujLWAsfRr4UHGswDYSR8JbGRZvpmDYVuf8veBmCCzv4EaM8MGjL9YTnKs2bcCFFa1YMEoYU6b5",
  "key35": "2G7NhTmnP1YZsZXruDvhAqLqy9bg2hxkhQZ8c4PnZSnnfmdxvoRVFDxBggTyJ7yKrELRQjQ2BzFsUbuar8Y231P3",
  "key36": "53r1hnZLfCsdjRmea4fTJig79VsFh7SYh6PNveud378VvEssuGu1WWHvvj8FG8Sgd5GXusSzBDUv4WMsdSq1r2Vo",
  "key37": "2oorGt4T6wjeokA8Jv2UNgKJgNi6gZn4zkZ4zW2twy1MSN5cXhFWUkuhLbQYFrxie1u3QeoMeCvja5g9uHYEAxuq",
  "key38": "3MCV5fCn5NNs6V2EHFw9764xat2LNwGX9tiTS4e58GoHP4STEGetJcoD9RuB8jGNXFjgs9eUWqABzcWiZ2iEg5Ej",
  "key39": "Nh3ndmwe1q3WwTZmYjn6tu3dkqtNDuxJZqHVB9tJbgnCVWNJtgqarLXM6dyyU7ouVTatQZnebw4Gc2ZLK1FTyEs",
  "key40": "57Uhup1j47P7uqPHFbbfrZPu1TogZv7mTGJJ4L2weGqqPMUJ58Pvg3owndL2heSzNsucsS7mniU3npgMJnyxjyYK",
  "key41": "4iNnYzeYK1J5JgiuJ2a5QUo7Hc1PHqXqoXuuTkfy1QgKJWZKhQCosT4f2anRWuZiE3BrYzxRDnUrbNj4N69t4Dd1",
  "key42": "2HLYUQSBrUpYetSp8tVPHQABqKDdgPMo58uRbSJ2MHK77Zd9CSNjZXWoDca5SuXG4CDecerETfneD59haJHFvqSy",
  "key43": "fR7oBBUTJ3hrdbGzJshBF5BDPnwyy9kjFhie1uWvFKAE2safSR1tt4HtJqYeZhS5uwxGUszbTRoi6GyKKcJEXLW",
  "key44": "VkDMWw1jxLyUCc4bU7yPXsHTaLkdVpoqBeR3tZopviRXE8EkF7rLznJHY69MRkRbUKvzrye5SGkFeMXib2KUZof",
  "key45": "62owiDmFzaMGUozZ2sD3qUqQvDcdgVWixFrwrrM7MaCtoXK4ao5aQ7zyGAZaQT4g1mK7crDhZ2XJLHQcXiLARcLC",
  "key46": "8SjLwRYh5FskCaqCWJKpvRvzB5pVHVh8zKsXmxkt4Kh3gKtsuFX7P5UQzYDrfi992SwELz9opU2DvYiBBsgYkiS",
  "key47": "3bqt2nTuesf4NoLjqYBYZzeVZ6NreSFr5RfAXrdGmNi1vfRiLATLWimspdn37yDXM1NJgYV65cmjqFYAf21At9br",
  "key48": "397ysVKDR2okYb4QtttiYUHRpS6X3VApsbjHKo8roxieDVzAKdhPUAY5iYkoftydri1K2cPWAL4v9DwuWNuRLYSx"
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
