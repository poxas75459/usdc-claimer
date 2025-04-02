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
    "cXpHCMpHtUUZjrKz5Vk7cWH4YPF3t8Vt3UNAeuVovmqUyMc1Kp1F6saBjzMxWjESWeE3CCF19Y2wGcHLh3HiWDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AzyT58sAmi6GZ7XFec1WnQtA6p4okDY4t5hjFHuUzrkKagLY3oye5p2xzgEX9iP5WNjtJH5FURPuLAPzAtdXKwy",
  "key1": "4pQUGKBMCPA76U6MDZiaUxxudQGfdn7MUiq1irgF9n2vrEsYjxactYi3Ne1pj3KSdbwa7ibgAriHJr7jnkczexH4",
  "key2": "3sGad5aHCGU1vTzrWzE7LPo7KcyQeLY2HBk7ebo3LC5o5i6bsjWe1QaRq4rgkxUbcQb4pZmeGKw74gpnMNYCrzdo",
  "key3": "2ynRBtqz8jP7z1KLptyMjNCsuVbtF556svxqsfLMkf5HFYE4uUXLhqSHdF6UH6GTgA7qNTAphq6GoCryNrjU83Ct",
  "key4": "3euc9A3EgFmhruVTBRGvWwHXGRWKAagrhSSMsVgb7TzLdyTYtJkGbbxzL3dEFfyKj2QcrmPsqGmAZt9pJ92H22Ui",
  "key5": "2MZ9GVqsCNz2zJcB1oUKjThJXcoE6nrTKHpxrMezMA5c1UtoPTvivhNMtCVANNqeVWYH4SZGYXfSapZxW8P6gPZa",
  "key6": "5knqjccVBcMzjAKfkYY7fnvKpAe5xnCZ4kWCTcp6oTDbqAddbForxTHAoxJFP4WnyR3GVvBwZP8Mqyo551rAH1oU",
  "key7": "23EUep6dhZPA41kdhp9pZKNcwtsXaiJqGJvPAcCDcjyQxqZeJedK6oWKUVaxVUbeFutdJibjyaNJVrbgFKBXqUYW",
  "key8": "57sEePfgQwsTGZquDH5vrZYJkovDnTuuaRzuDiv9agXUkjKfuR9kCt4rMC7kbEWrB4X6vBz8gc1gYBWHyw7DiSfA",
  "key9": "5JSDLTuLC9tVc6me5q5WGsrkJDXP8BLEeqJ2HFrBmrzr7j68dLSwpYQWybTGoc39KJ9i3XUWpar2qs8QqYTybWt9",
  "key10": "4cjSGu5N89m3mF2wqH6VChE9MkyYWthwyLD1QGECvodFdNHmNivzRaLCevdLR6uDzqi9tvoEpK4L8wCRheCs539U",
  "key11": "2DSPtdXG2W63qNVdFQ7HaW182on5HEF95qEsexpbZh8zqzZfcH59S2jRTmmW9PFCPtuKSqW2UZZRDZixigFbRPp5",
  "key12": "3L5Dj7aWuZanwYSeLn1Sx9fYKTBXfTkp56DEV4nSRfSxCnkgj57uvfMiS8tU9SJ7UtoAxh97ZRMgsFhNASfDfxAE",
  "key13": "4BNVfF87qrfM2pGG59PyHadJoBPE8nTC17no7dwuANETvzw6xyg3dbBi7aMykM3UEWFx2dbnNrwXWppiC8e9aVG2",
  "key14": "5S1dAw15aRVXey7rEofZDAftrEQtmMjkEri94vaBLAbjJ9F5pRm6fiH74odJKwPpb8GGEonCy1DdBuCsYZhCeXqM",
  "key15": "3yNducy1cdmbKhxDVoh1bWqbG3X8xtNmvU69mfHeaPMMpYXKU14QzcyGPtqMY5Qe9YrcJAhwSe67ruTqTn9923DK",
  "key16": "Wv2cKbqZiC2MQrgzJaEzamtJujH2WiTtpneBtLkgzzzbDiiinU9A9cePAy2mbA5gvmvpTG1xx6EjxpdJuZmYP76",
  "key17": "4z1uZUNFFaMN1PzxuX4MsFysLqTNZBuM43X7FUVMiY7VPbzJzKrL8Zo2FBzNy3d6apsPBBq1HtUvXSZXC7PgjWmw",
  "key18": "51suuPZjEaTKPBPJKEhXYKaDPAwa5XN8RGCgh6kvdBAkswsnhxV84X7pKwk2dU8RcTXC18e5G91AzQZgyxdLTU52",
  "key19": "k4SwaoKzq2eZAqp17FzZqPB5JarUUNNF3r11fxTpxbRrnAwW7Nbu5zmryB9AM49QRnfjNdSHxUqG9uP1RxgGW2E",
  "key20": "5GHZG7pJSyUgFV7aMHM6Nr9zwSZg1WD5ZcESwXEgM46ibrFwBLQFeBCQMmeeBwcc2jFNfTBaiY5ANizY8kaHopAp",
  "key21": "XY7uhD8b4KUQAw41n2ZGvTERHLb7Mmm2RvteSyBC6MkwVWfJ3XXxv9YUxW3UQwNpimSXDTfhggqx2NoqUPDCXg2",
  "key22": "4J9ByVByGkAAbdwgGB5iNBZ7XKscb5xWuYHh6HSShTpXXcQa4dK2BGDEqtfN3HUZyxXh8UcR3rQqcn1ZCSAwJW99",
  "key23": "2uVs5iwyRFfv1B9J2yGyXMcgpPeLNJbQ1Zc4WLXhaiPHJHf3y5E4m4YP467ghDHXphznkwavzbe9sdcEkBVkBjnL",
  "key24": "4KGDsr8sqqZVAz71WMVvdYxfpARzy4pQ2X1hYSrtit5kWkrNknLjpoUY6CRDR1SQ4EchvURp8ZGnV8CcSXsqF6X4",
  "key25": "56k2fvscAGyi98VJvZoxvrX1rE2Va2hYe9M9YxqhpZxTrcHXDWmMYdqKBTSMnwqiEpZnBRKTNwwrD9baU7ocEHPo",
  "key26": "4WdjCFaRhJGksSLtGx1m1nqedxpj7kibJLxJ2kbwhMexUPcvEhcJx4mawV4BtR4UqFyB1AtJhrbakPJNaV1zMffu",
  "key27": "W4NpTikJ9jXPYzXXLQeabN35ykSBCoVTJ3ngELoXDS9ddAWesk1HuGDhbKunmKVko3YLVEHvLJ3rZJT9XRAjQQs"
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
