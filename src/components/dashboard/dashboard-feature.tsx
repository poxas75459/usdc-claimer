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
    "3qmgeLHR9EVwZzTXi8mFunDB3Gcbj8nuwcE273SZEpqtK8RC1LTVGPKRpLvPgriWEXdTCUqW11gVSqDu5ic6E2Ej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NHJrrtUnEb6oUxpa8Pi1ig6u2NZLgtEPDxU2BUXHvmZxhDYERm4vTd6cXGzthcZr2oWQHP7K9zXT2mLQQEmUaPA",
  "key1": "3DZf8K4tGmA5AMSvcNNxqW3t6iyoTNmiCce6HLW1iafVBUEgmM3XmT8GtGccmEbio1bwMHBevgwHg5DGKngheUzz",
  "key2": "2E19Uv5J9ZDbz9aEAThRcNT8B4KYifKLV6vLj4oWEz74Mp7j1b533yjCCww6gAor69e9mxHjGC3brar8GPqUULFj",
  "key3": "4awttf3GdwRJbMkY5q1xbLb3HAEZW3TdqanXFxx9f63ecxrMZv2NzXcSzqfpz2sKFnvVPveWYo8FZBF7Udke3Y41",
  "key4": "nkrQrvAQQ5xDPXCqxsCWi6eFXXws52nrTA2x4UXHDKcAitWm9BZLkmTrAUbV5gAXkDkmQJNWMsj8dkVgbEyoQGv",
  "key5": "476VPfwKR91Vw6SHW9qUcb3mybf63deqwxrCWua3aQMHeCgUPN8xNvR8KBXzmAhmehTjdkLtbDhuz2KC9ZCdbuQL",
  "key6": "2J6Qr6doJ4egXtWwo1Vv5gYPVTwfdEKNThKidRiPuJgQtfAdptWxQUDLBYo42fQkm8gEF8RygyURufn8tej6xEU9",
  "key7": "2hNGELwKLitX5DYHhVp3MojwAizSqAT4kkrs8ZV6aUfPyUyNTKKkveGNPCMJq7dky6q3hxQw3ccQHXwJVDmiNDxh",
  "key8": "y3ZkepZjkcpNXgzcPTvXoVHaKkhHeadNyD7keZSc3XqV1FXEZP9XdDNyPinTiCwnz1VhoN2TapfDdPXuMSgJiET",
  "key9": "uPgD4EUkUe9pidrDg5kYpo11pR492a1Abtp5zJDCF6MVjzZceaKTiwWLjV93gpNGN55iwsHTdh41MdsdCrd4AnE",
  "key10": "5xhGi1RAHeFhCS5f3x7mDnUn3KPc8EF1L6yn6dhTAYQRNADxAUzy1f9VmToqioYwEevabbw8ynoezAWvvt223eMo",
  "key11": "22zV3Q2VzPJCpt6gjb4bTnXhfv9JsAdF5iQjS4rMS3nh6U5ZushhPA4PnoNHgaq7ZRQpKL2RUmudoN5msjLGqD7M",
  "key12": "61N1UXCj22Knx43cnSW4icoXdEc5FWK91rfLBgS1EnFBHsgyTjaSCoR3VpSDbc6AVVxugS2Wyme1ZhpLjp1hrAN5",
  "key13": "4LgHxKwDJ6wbac9GmseJ4sPkQRKiekpX6Yo8SPQSH29DaUmNDZe4RYHCuY7ZPG4FVQ9AXjUdZ2kbuigkh7idKFp7",
  "key14": "UtDvo4Mrcsq7qvFYvrr3qgmy7duKZdDDy39M7o79TejEXZ7uoUUUdZW35JdkWrWzY1RNXCZasvB4MmjJj7D9b8W",
  "key15": "3ZTFv4udzF5LRBmzKsn633AUj411QyFe8ToRAXhMDpskiTMismkNfyjeaK43QFNF1r9HR2UdLZEfZvotVNxamr6b",
  "key16": "WR3E8cutva2PM4x2QgLiTKL9jZkuzjBotMUkVDNMx8AYFWajYL4Bn7KLAUdrjxQHwVDcUACyH1P2NXAXMpmJ1ew",
  "key17": "611FxNeHjEQ1swvAmnce4JTzP7yeqan6s3bCVtsLU3a2mytSmcZXHfP6q9UUoMSppnCMGWSZuw3LnuTqcUZ8ZTb5",
  "key18": "3NAuWjfTgw4xWJjX6FUh8DGoL54BwViDcS5YxUfq7A8BmLG3zMYQJE4Z4SL3WMPqntRXL8qhaFv3VAehPgjHVqjQ",
  "key19": "4UpwZYccgAJL2oStWqQggtRSPXXBZEVWp329nWmGfEDyRKoBNZJSTha8kpHLfFVjfN3FAZ6sk3bbuJuvDhgECqie",
  "key20": "5BGLU2NtKMV4tWJQ4fwqwGKX1xNKAJE5Bq6Y9sLx2c1d52QC99873sK2X17VK3m9Nuiiparz1wET7SWY4CyPfj6k",
  "key21": "4CMKR3rV7H2YmkYExC2vashMR1SM93dRQjXYHFzPbZTqFARBy7BL1THzUMFQtdU8MRQaEeFnxRbuE9SpiKThx4SC",
  "key22": "2VqZirU5bzTDERiDNfFsmTZpKtqkATyJ4Lae94xKJAzmGK8fFUrUdotkqSbaHFGJiJrkDPbSmDJbuVVnqhUKUeQY",
  "key23": "5jU1dFkFbAEEWKqB58N1e34yyuphJEt7q7oJss7uyaX4NByRQPbehVHL5uFtSC2ssgnaoZqxdVTyxUji4nphVz9C",
  "key24": "3oHeL4H6tc7kcWiQpu4aXR2skUACNGeQF5RpZH9fEuERax8LNx4i3U7X54gPzBLbRpZ3WxSv2sNGSF5D43NRiTJL",
  "key25": "54Usp1oJ3qzydDt6NcRatGA9QKVgfGwTPQ4dyQZxjo3WzFgMJouMqpgnRnhSzxDjt2eF8xTB3xf7MUXp7LcrRtim",
  "key26": "5qatYETKikBp1YUNvY2X7jE1MDspQ5yJB3PFbAX3AyeJSGscsPzzmczXCKErmKo39F21BGStUU5Hc9hZTaVPJq5J",
  "key27": "2fN1EEEHf5CN41QaJoi4GQUubprXqELLk516ck6NSgDMgTGi1BqcdVyDRfmQP7794fQJ33mR2fCZURtzR84t7RxW",
  "key28": "27262SRRwRnw3XxhAoh1EunmtQc6QWSpY5BXgaA6PRj7t8DipEt5EJckUUQknJgdLHseUecM3yVwsnJhKCy1mYHp",
  "key29": "4JqA611hoKzymH9nSZkm3aoFxrfv8VyFSY7GqiiMBxUYMKyvpTFpu4MjrDo8Ha1jFVimbUtznHLDaVPpURxqkMUh",
  "key30": "ZSFDJ3VYymPvqgP17fY2h9owfZpCDQCnWf4BnwiftTB9HGwkEhGznA2zFsiYbTKatY3rFgLEj84vQw5ojT9tKMP",
  "key31": "8XorKCNzxTfQxVrZTaHBoQaoe1WqduTcADoa55JEWbckfq85gxdzR2hcQcWXMYhvuEZFCKE1yccsvdE5Y2KhNHj",
  "key32": "4a25ire2heDTr47b7VKuNpFXmmbQ46p4PgWGqRWQZNx721Syf4oEEgWVDe1ZbhuRTbVMfZLJGqHt1UNuPsgDZJMB",
  "key33": "4Sb2YM1v7RL47PkFyRoJ4i7z44eA8AbmwjEVeYpatMvyW6fP6PGvtSZJR4MVTfCzpHWTLQFhTLALi4mRvr4qLfcz",
  "key34": "d1ycKHGECqKq2n5BibNzCzApohkyV421caRRRCoqyowj5LD7UoUvnVLnozhkebs7Gwk6Yj9zYsk7BKMhiUQg7aq",
  "key35": "2eksfiVXVV7KvoaWhwcLjP9EFjDMuAw6bkd6JPGG1AjaNLwax8ERHgppUu7NE54t4LC7XpPKyTJopJYKqgV5VguH",
  "key36": "5qZMNcNEiRW3nqomhY1N7t4PJ9JpPjgaCRSowp4zS2W4s8GmPJqVwCwZdMYfKJoGws17KUqZUdk1RFb4YzF5uDcQ",
  "key37": "23zcvNZa47fQrZv6EZyXR9GB9gCe15cvisrEHSe393YQcQFHGrb8JYbVTYRtrtzz5pi9CVEQG1DCGp4xHJJvEfd4",
  "key38": "Df3jvzadPZ4fXcsJB6HJS432GrkbrJLFEeXT9EVbqaENY19SxBVLrrBqUA7YBgJfAbk89vGBrTy4mBFsu6PMVCd",
  "key39": "y2JX4iGeQqqxNwx7KgsVjLkqvpZDE27Y5LeKoJaNq6M5nhRVTrWaDEQ4WfU3aScdpu7H7dqJ4NoouVRcEypJbdm",
  "key40": "5JvtaLtTGzezhqeQ5Tr57jrWjTnVgMegu3DZ7dVsx2peeyMdyHyZyFk7BNkvLdMmJ7boiqyT9JRhQdb15Fneft9Q"
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
