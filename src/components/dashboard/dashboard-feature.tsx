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
    "WcByWzEByRk8dkqJQbHiTqArLx4UBMhmHHVeiA68h6jDXC8bMngGAbTuswYf2ksQeqeksKoA9j9spiTqimtWTc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JVCzU7ngUjHrLiwEAAv7uUHwVs6uEsqNnkroa7H6wirhghY3mJqtbcMypsLfYb3QqSJq4PZwb9tDMdMNVLcj5F8",
  "key1": "VmuJbYvKq43KrvLubsFrbZG8hjHH4k3q4G4boZdo4BK2NXQWN9hLdXxEPUCyV76sUnkBHrFv8orCGHWtdhhMwex",
  "key2": "3egedfn3pPjD7A7RMazK42qjPKJT1ewJviNp7cNHPgQmX2TG3dwCcKfD4UiSBYVVNBMCuCiVYtW4MTLEsarKXmqR",
  "key3": "2z962uHRVGfBG7VfNGuExAa83tWxmXxKFjD2XtQjqgpgoYvSZheq44xfspnNxkFWUJawBH7fv5SgH1o2ssFqcd8T",
  "key4": "2jVrZBVenzbAEQ4atbHAYz6ZSKt6MHpMXZfWGhADLQTJeLHNwaSuKhZYXC9KFKd7UQKRbDed3sr26ZKJp5ef58zJ",
  "key5": "4h4VPUYahdMW7EFa6RTtJR1BEEvRqfVh2Rpjtm2Zb2WNLW6oLkEQns4eBNBRcwK3XcXHjD4jfGp7q591oQVjbocB",
  "key6": "RyVARWYdbvugGXQs92RgTjnRnLnfeKUvaWBVvrhNyLFqMVnJNqqxyiWDEMzZNz1tt9sAG4th2x5J7U4HhknPfCb",
  "key7": "45twsx1XDP628hjf18bKSQyrbCMQsoKhKMDXCgbC1fqrxhXJ3D6AEPyi1TtWATAX29R74YWJL9QXgtJARhECEtmT",
  "key8": "fao6kaZZEtJdJJbzC1fE42QrEwYToz8KAFTipTynSS37MnhJEFNqqobeg7FUV41avHZ1jySHKQNG3qohgLGxAoU",
  "key9": "3UjjaSDLLjx8G6M5ows9T6t2QfPxZDzzrDf5CasUefHqCV1ojGkf3CxTdrCgkbf48MwaLUxZYQL2pTdDmWa11DSp",
  "key10": "5BJ2CpS8FX9Ppkdbn46wFXWvqfwayPMYuycWHtb6bX1w9UptYvvpT9DZRh26js5Vq8f2ix3czTAqYnM3cRDQoXXT",
  "key11": "BTVHTcaYYEj8uXxrns119sQvEucXLEfcPVoeQm1qvRQLAjE6qi2bKzoufUjwtEFWt9axgF3wecMUaGmnoqhhc2W",
  "key12": "4FWdwmmVZq6VEebiYxbTsxfYd7WarfV6W3dHG85dg5MKwi2shqLShxxtGPGnLV1BaCVnZZb39PjrKtN5EfBk3TSC",
  "key13": "57nAoyRcp8AUddzLH9c1N9BCxd8zk78hJqKucwoZVywEufyLjPjk9Nfw1mbVUJymqBLS6hhrZMA3V5ErF6bXEbJm",
  "key14": "2zweA96P9AxjVgaEcRGDqFAHK8wFxvzdWsfwh9VxEgB8ypELMhXyG84aW75LhizKEyKff1nGZmLFa17y3oxgsqCe",
  "key15": "46wM5x3Dc9724z9DGHkgprJgaX99bi4KxLp1KFHxoHd3R8iFESLPTqjRvpfDuCCRH2TFG8GAbGYALtGTFEksLKm8",
  "key16": "t9QXDWgUtikwAx1RnxkrQeqbKr7pQVc3iixutMiZrdU9F9mVPNDW4iyx5GvUTu9KtBumEyuLdepHcnfHmcYmn6g",
  "key17": "cGMs4Buvm6VxLqpG483ZA5HeDnu125y1zA7hDCrmG3M5u7MCQFfHYVb6X3sSW4PKm3CWKeabW3j5Nixbxzm594v",
  "key18": "2FDZPnBdjLQf39Y88B145LYnWyDewsTxUUNB3bR9jVpSuVEB9JUDFk1CNQxK6bWfKG4uNTYHiXkWBy91jsmWHQmU",
  "key19": "45KRu5EsjcFu1dnVHvDEUWEqqrhqMZnWG48V3SLbxUZaCrs1aUhMPdpaTS438S6XSug1YrgRmzGrh6YJVBLAXHNf",
  "key20": "5mBw5kJx8d2hAZ9aNA2Ddt2efaeD4FZ6WgpYdZ1akzzVDEoHVxtW1YdHHUFGJyVaqCHSjAup7WHUEkCdA6CBxMyk",
  "key21": "4Hpk77Si6kr3KVtXczYoDH4C2WhZxngVgA1g1V1nRWUJjqp2feqYiL7bSek4fJeXa3eVKnKoHsuZczTPLJYfpMB3",
  "key22": "CXAbxKkiV26VhqY1rptoNrSYyFXPFACW4vqaWPfrABAyeHSt4u93CxJJKZKngzVMYR5PUT9bNTGmJbTQtUFjAQk",
  "key23": "2GMSmL4jBM4adEmhUXWnUNnXkw4N5x3K5uNqyvzEkSD43j9eau4ek9T2LUqZySjU6q1EaxygD7PJ7zn4amHFBjAb",
  "key24": "dExXkX3PFrjCLM3qjq3Btjg2mequtWL1gW7m85xrGz6JZzQn5cPXRbq6XcKond28XLMNGkEq6se5t2sAA251Q1y",
  "key25": "iVcm1YGBmnUSCu6Kktsts3NZUxkzq1rLxDuxe1optMqZHZ1fMwiQYBsne8fx8oiWveVeimsxVJybsN1x9s53hZq",
  "key26": "FGBZFREmfWUvoZEJYm14D4YzHwRPZLdj34AFThRNajoMRGFg3pJGshpY5boxUgWzvBgNFKhL6CJVccZHp2LQmVY",
  "key27": "4UUvSTL65U11LzCfEH6HCam5SX6c9Bet4cGWJeLzXXKhEtJ5GYr7yVCWYAwCremSXhjv5dAa5DQGUgcYmb7UMTh4",
  "key28": "4v3fjpUdk4VaHpTjhajFvyEfkx7SpvYYcbaYfjmRRH9ho6SVfFuszybH7U6LE4St3aHufDeyeAUX4K5kZGoKv4dS",
  "key29": "2uHB8Eqb5Sb9ZPysZuUg9w4aw9QsGH23THMQDTRf5QRbnGJ9puz6byBKq4XwjEVcLXj3atvREwTWSxqM3PSYdUxk",
  "key30": "27GsFd7w9aVSqpyhJMJ4Vtr1PetaiHDw1edZiyDxyNLKJ9Q8gMNGxeZJE23FxL5fRr29vTVFFAYivUj1tz2mtteD",
  "key31": "32rCcgAcFighG9GJCepGstx1pJQ4oLRk3VniB8LQ6HCZBrZb3M9BBzxtNu5FuVok4BYvb8v9PtVwKHL8z9rzPdos",
  "key32": "39n47a2cnTdaoZaLvuXeqy6EdqZmM6tJ9uPwWSxfF2yuvqnbaw8SxnJzsazs1SLKzGEogxZNRnRpoMwNh7noUbZV",
  "key33": "38QVzUPYsbQyjuEfVSuc5rDb8de2D1QsRpFScPfzu9HMvQc7FA5G6R4sqiq5RBCYD6MzMq8WU9kfp8Z9SEy6myG2"
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
