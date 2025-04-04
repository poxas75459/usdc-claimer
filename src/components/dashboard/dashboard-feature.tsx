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
    "4biUbbjqXuCwxSXWU5EidWJZNo1piZYYnMpqHqJzmKfzaf4PpeavfFR6xcJ72w2NBqXVAQjkpkdFuTFmiHLgyfBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GhwmuLi8LKgELbxVXjYFddcA6hJFa4ZQEDSxmdNiWMnBADWLo6SHj7KTXcAKizSVi9HEEA8LNkaFWXmgd9Yi791",
  "key1": "51dd7n65mNsdc3pFtvGMf7vPNw2XFzB4M1p9vU7VX45pa3j9TSiDhkG18V5KzRLqmGEK27WAM7fMDbWMbGBii4cu",
  "key2": "4widL6poHZG3WwHWsL2UxnM1b4ouaQCJtPb3v3i89b4876i5Lfwfc8KU5i53B3jxdN25qSmGdSuPZf1zfCy7Vrtv",
  "key3": "3pgwxWG54eaj8xoPt1zvNNZRoK2C17Phw9axZgFeQrGz2yVEa5JJTdyVmkmWcrDpZRgtkXYmvBuLMMJs6eQDn857",
  "key4": "3xUAGGXZSY5VSuikxUraiQiWKtm1wF1VRYB6Lecnj56ALRUXXb5AxVPPgRiGz3NHpt892F83ULkeS8cyHRo7gBiX",
  "key5": "3nE3MA2LXUZdu9YvJS5ui14cMWZY1XgXWPnY8PEtUDURLJhggZ2vWUAq5FgijUL17WRpB8N2zFVe9tY4QVskSDua",
  "key6": "21SEUwkVRZR82n2wH96fkDsMmyH1MTLxkwMZem3rVWzDPzTp1fkEr7ViVkG1QWNqZCq6qEUXPAvDcQw6vhU4hojG",
  "key7": "5umwM9zMgS38keVGtJt6jDXA7HMWUQ2ULrszHXuTJJnXW1cZTcYSTd48zLGiM6SKKUPEUn3UE1PxmRwmZpLCmC51",
  "key8": "5dgUy2V4gAjE73gdTU75miTfyn5xuiobxUDdgg9uf2QFTZr3c49X6Hzy54XhXM4up68dJybTMj9WfyaiYPp6RW6t",
  "key9": "43H4ugoVBgnFjNDNYXQFWYBc6zU56F9oJnymQds8munf29NHNBd4sBS9m66d8pGwvEMHLQVnnez1F5BZj9ch4NFr",
  "key10": "zH3oDLJvDBzcme7LjJcN6qgsQ2pcoSGPLPG7L7gFztQcLGbAXd4e5kumyb9W7QASsk1CiTS7RU7zNsFnYRd76d1",
  "key11": "5E8emv76Urhc2xkWKGhzbCgHVcATqX1VoHzJHyWYTqqg6EAEZEZY1QGQ3vGirDHA24N5ezC3jZqU6ptWFonL5EdD",
  "key12": "2EacfeQbGSyDjJB83vFATmMAasbamAgEW2berVhmMSNEfKgyFfbJtLaV72ddmWpgmjNDvamBJb8CDkQyj5BHfu1x",
  "key13": "5CmMzCsHfqwTh67XoJNbFTT4s3esU4QRnwCeEM3zuC5DttG5ZysypuUVdCrwmbAGTqjBtFvVARhTY7p2anNmsjiV",
  "key14": "dz4HppcBNgTKF5e27BJvLeGZ8NgbD5AqJk4sRMY3fY4g271ubYocBx1kQvzCmA76UBd3ZinS2tCMGdcAsB2jGu1",
  "key15": "vSRW9L2gBsvYBeKSQy5dF3jXkCH7Yp1gyN1idLCGdFaVByi9yBV88e5dcgmzXzFFSFVZhdT3p7W5AsdH4FPofNY",
  "key16": "5SztPYMdp6yk6TgsuUdHi2J476N9FgoGmTRrmVEVUc134uG7SBeFBVXJToZx61mY7fT4xoqvaJ8Lb92NHj8e2i8n",
  "key17": "5SCZFqYQDUzJQEaWSoAfyTpb3byzDqx9ZHYc675Q416BWCadtiahQnTwKNAt1uyqPGJwwCu5AdKjQ8udqtogqKQE",
  "key18": "6i4jE29EH17FWwnLjPiAU4kUUvjpQn4Sx7ce3Ckt9HdC8UxEj9Jw5Mvc1gpQ9A29u3Xsexk7nZpiDdsB2bEZpC1",
  "key19": "3WpApeWAELedJ2vFF9atiHXki57jdZjDPxJB1Hy8u9YciYPPrCYj5m2tz6jRvQUrsV32Vh2ZjQwn2H7bndM386mr",
  "key20": "3Gf4GT5AM11PbJKbbyb1uLn6B6hXhT239Dd83hEaJnTG3ywDzqr1kKDhZpejNiJocXwbsGvUnL69UJAABcYgLDdQ",
  "key21": "51Zgjh8StnALUT5pozRG2Kv6KxDFQST9qmKPQhrcg5kKmKA9baasGceQ6ZnzRJULpAZL9W2HkgcWj3zcVbKxcukS",
  "key22": "5A5g4hMXxYKAAvr3bEnm4K8XrVi2ZXcXbFoNhRg7MUYPdRxrkr641kkUHS4swgyEhseEn7vfcaJptgasJ4UxFG8A",
  "key23": "5s9uKAiLXxugC2QkcsLo2mS25q8o4SmTeaRQjjrR4osPBVSfkH48tP7scgXtfQpvDrw9NMHRvh6paCWkmdh2ha2y",
  "key24": "J26M1MnESUTG3PN3QD4HoRMLTSd5Fibet26MkiJY7hZ9DykBTzvPCrTEpRrG26qzhAcvezS1LKchdzPgx25EE2C",
  "key25": "257c1V3puENeBvRSwH2vPRgXDhKUgGJr3m5jMQeBSqhpVdWYEh5ZEEdDbfXbaKM63BMbetFk8vu71Y5kNyqTpdoX",
  "key26": "3KNw4DRaxJtHYBtjtyNvmnJaLcjaMoafyPmMozmiNwT7BSVwUkj7yw62tzhKayy6jXtoH4X1KXRVFV1Lx4bPeyDQ",
  "key27": "2X82dpU1HkVyPkXuxFJx1vR3WFPtwreFU4C2PzJDsjBk1vap7FoAJvaEySnJtZ7gg3brn6AYPKHmBRKGfRtpAmNw",
  "key28": "4QKccuniyDhqpSiUwoVk9xMtfTbMgZXob7r9Lu1JVSJ2obN6fVY9LX7KrB1JsQMHsxKGk8vD4CdsCXjjwXGFZQZH",
  "key29": "5PQixECaWbpj37DN3taC2equxBESEBvBxof3CiS2gpHG8bo9Wbd2TkCf7MKoWzAVh8Gxzu9r87LD18NbxR5SUVR8",
  "key30": "4UA4CTd6QEzurjA6wigVySP1M8umwhH4W4BvrkDeqEnd5dtfAcpTtEEurPdZshJmhkEyafpMkEDwAx5Stoqjj62",
  "key31": "KWiZALJYAwfNkazhzCYrYDTHMAUWNs8zqRCfQ1zQYk46CkDZrpx4wP786GwVBcYFVUKikYZte8UA1xE4ruqcwDR",
  "key32": "3XrcNQcq2abSJkwtuY8gnjaRQMZX9CZXNLYEYH5udLt6bg9ECWd82YDxpDt7U1cnSfzs1NnSbxDgfyMfp1FyEoQP",
  "key33": "gvJRf43AXroAUEKrTjQYp1KRE9UxaYVAmgdeBUNQXtyiX7MyFHANXWyLvG7bpMvXwzoo1xdVCHgR1trqVnGmGFi",
  "key34": "2sv7oRkKV71df3vk6E1qhq6ELej1MgdsXT7nfqU8pfqJnn7NWHfsRknQhxjBVE3hv2rgS5iJ8Wk4QB6nVyt4N95A",
  "key35": "5sAkdWA3XuRqDiif47nvH7SQWXrNBeS9rpdsWiiX2xosKdyoH1NBxitK9MqMGbxgjEL5jasQi3pXV8QR7eMcytfq"
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
