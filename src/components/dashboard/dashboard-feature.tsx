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
    "5rUmqeEyQ19Dr46REciDJVma4HrwTsuXfp55TMZ5oTXjo6vNgfE5n7qD2kqNVdTApZZCxrDJaemS3gzhviDYXWGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K82vk3tgQjqVNrLk31NXgf7tcifdVCAFxfjeupT4hiFAvyzzFaudLsE2kYisNYyFa1XadgLdRE3Xwy4g1jGho5H",
  "key1": "4Fmm1Fr7rcEsCU3V5U5StcS72UdYbR2xTgsvXz3g5CxWJPzKVirZbxgPMaM1Wq21D1syE9NvNApkaeqWT2sPb8DE",
  "key2": "3TCLHJ645q68SmGC8bAXcizPFFKeuhDiKoHimdubQ5KgfcH1RQbsUS4RxrveJgF2Gwvffx6z78ekRNS3qGz6DmdP",
  "key3": "4oNxWBYH4YF8efbJJdrfWHxzREtY4F3c86qKB54mdSh28bzzVEitPRF7C1BHkawLCPcMJRwzNtrML8j9Ng4cYa5j",
  "key4": "4inTJXN6u7uKA7FtWGfSfPYWMbmgR9MHUEfDxRy34rgoaoKiCbAihPi8sksAngfAfFrKH5EpDCKpqRbqiLN27QLA",
  "key5": "5JpjdXiCg5hQ7qePX9dKuej7SqTdnoYBf2vaeJ8GGoe9AMabn3kz6RJ1uWZ29GttgQkYCE5TsG1jDfEUcQje74hh",
  "key6": "3B6ctsyDxftdhghTvJARnQ7jAnqx3SuA1MYvu9PuFcqcEt3L5y2tgXypnXXt5S6HLEpf86bXJxcKgosz3Kgt7ovX",
  "key7": "3jz8vg1TETqxuT9WeqP85HKzNGKBrHZzp7NLzDHqTbceVDZ39AZnZY6xyH1681XaZoMcwbjryvfWNznFXoepBpi4",
  "key8": "4WmFBMWmbM4nzCKZ1SHaNt4vNod4qy7TtS6uCfis4cQJfWypE2mq2QYfuniYsaNwNnVpLbsv2VJuQv1kqCRSwd58",
  "key9": "2EK1NSXyPDp69enTbUkjSCnt3bc5mwYMEE9sAoeLr3KKsuDTh1VNw7CvGNK6Rw9wwRasz9yxhFtcDBnT6tBABqg",
  "key10": "4sVTaL75TFKL1469afmUY1BJ2EKLBQ1vTfUShR1nTm32cxU9DTpnXhJdjYBvazi5MKV7JYQxnSwr5goBtJGTMwzU",
  "key11": "KL2f9jtTmcrvJm63TEekVViQBKCtLN8ssShnU2FRP1axhW2kxaV3FiCtsdTKgMN7yZMVibdwePQpx6VHFU1Rss3",
  "key12": "2JK6GvCBVvVWNDj9yc5s9cAHGn2RE5y3mgRhLEqMx2cTV7ymzwrWka5iDBvyG99tXWhcEPPcNWik9wm5McGCZHhQ",
  "key13": "4ysvSsuqK3dmGmvK6TUTps5pNvKcA74pbp7RLtJMs5kA7xeQBsc7rBG8NbgeoHw3BA3RtLZNPkLUv8ybYZASbok",
  "key14": "47boCQY29pnxXd8MSYbCedVyYSm7x1phyatt6kmBQ6VjEwtR2zc33GKXAg2jiSKYFGE86VJBKykQu8z7Skbezmmq",
  "key15": "5czckuva7aFCmZHiCX4GDUJP6xzCFoNKrtYiRnpcWJhAdL7HddfkAapmdFN5bxFq8ZY6yRviMTQHfk4yNPdPVawG",
  "key16": "iomJQxhSMkbwNwctsgG5yrartsTGqTah8f4vaGSpp9PnSc5zYYQP3qndhuEACEkYEiovkXCHZ9eiHBQ9eJTe8gj",
  "key17": "2dh3aD88Z4tmvg1eU72VKR4c82k3tQB11kaYcMNYqiwVfZwkgxvdPpGSbmVxaUXuBPUFhyv8KrKkBef7HJpnNQz2",
  "key18": "5aQCDAPkEDz2LxTghtkVRfHa8cnt3EPCwiwsex9Xhry8fS8oMSDHUBXAA5uLxdnV7KoPehygiFW3PD9QxqWL67zZ",
  "key19": "4ruXdKD26oCpCuVwvQBmesUhjmzN2rPTEXNYXfZQsBnwMgLM5ukDNJSHPapSj3uP9Zb9KasQCTne4hDky3kQTgU5",
  "key20": "3RuY4y4QiMsZnyxdtrqLXJTyNmnQGdZwo2gszz4ceaZDxZN5rVbTyyMEMFxxsZ9e4pXaP1akQxxS8k28mX1Rxx7S",
  "key21": "2UjVwkNCN3Wfxdpdb7hwFW771haw3c3YjLbQLSgaQVKe3kGcF8tyU6kShJRmM74b5BgiTv9xpx9aigeAKiKNSgXH",
  "key22": "Y3HTJfFBcjUUJigCasKMSgzaKoJNRXHp2UMz8X7HzdGjAareyR3eT3tPhxtSZXf8NfyyxF3RKhM98BtquVgnn7r",
  "key23": "4P5JiK7rW4KoRanwZq737euwkn71zqAoPatAiBisx8qKoq5U41Kqk2UtVVpVtGap7kec1FAFoqmeH6iMgTLABFAe",
  "key24": "5V4ao4zk47skrVjtXp8s9baxpWDHZFDVUNDxtAdaEk6M6CcBFMPr26RmijDDQkf6pg7n4xqGptWKnvXJjFR2JzwS",
  "key25": "4mkjiLYD8hNCe9BtGjwei23T1LvN8MbUe9V2xxFXrV6i5NsSE9xUSFk9UurjCM5mhwtpnUcEoSe5g1hx9WvYhWQ3"
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
