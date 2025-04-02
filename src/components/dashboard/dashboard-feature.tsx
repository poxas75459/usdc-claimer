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
    "674tEQLqNK347DZssRNxrxd6trxmemZ8DHQho7jxoqMcnjRY5csts2wrFEcpXGBcEtyRto5T6onKgaTw4jhMQWvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LAVJdk7eVJnCpHBDMjBhgYDEukJBx8TGkWZZXVXNdEZftKPikD46ruoBhoTCnKGSJVvKEZwj9iv4scDnvZfWYor",
  "key1": "5oFhYrqeaZRF629QyAD7K7vxCA8UQdvB1FqJM7U1evhujQzzSv8txxWNHZpbePsSAwYJMayjFWUNktm1wr62mWnc",
  "key2": "2pCRpJ2DMe8mYHeLW6DWpAAmqcYmBMMCG7JTTp4oi4hq6MYAoa5LMbWwXcotDdAnnpDowWgE866nAgRFowzgWVJe",
  "key3": "3twVMJZ2xFfuavBjU4CCJzgMKpGDf8THcxvpapJeKfi54CxwJk7VVE83C3ESPKTmYyDjQuZW2t2f89W1nPcKmDkB",
  "key4": "2aCGAEQz3PE4YkVsRNDhQchx6kUBvfKe9kmLpMtF8PeK4iTBTiAEnLk3gSSMa9oyCvkxdGYojmsmX6b9e7JUy1rv",
  "key5": "2FHwvqgnqaA49ysv4CyGyscfZUsWqVSCnPxLAATEp1WwuKZhYdEADaPPydCFD1au6KxeWTmkCs2HpbHRjPR84WK7",
  "key6": "5eG4GkEgPQwTqHGCWrh471GnkzAiHcmo9kvJG3Nr1i6kH4sxEp6rGepcjh8XMqG6L5jgAoKp8rtT3UDBBYoXjAHX",
  "key7": "5Q46Ca7UZTFr43CPkj68UBAGEvyiwLUu25opaFcziSxV6UG1hGhTcyvu466DdubbiXQCtt8PRUxcc5rAnYRCsACF",
  "key8": "3YWuSXoLi2qHyZwtQ1UYkHVUxgudMCdKzfKs1GEdDE7csanU4CLjmm1M2vafafHmsEMK8zqqeZCwG81QYjFn26FP",
  "key9": "4Gt4yHdjY3b4uptYEp3ZER91nWGL3FLYbfEi7qLtcS5ZXZo6mrtF1Rw19pU7DT3wP3inFGT1VdrRR4zL25ZHMFjy",
  "key10": "27HPGKgjH9KNXsJtEeZfu7qVvuKtexech6rmFxXF4rzybsqKsGDSD4hjDiTjYmVzte8V8TcyD81kEnFNsux4DARB",
  "key11": "3KaZURhqsVnqfNdbwDDcb2QGDN6bwjg4oxGYzT3MJexPwY3K3SvAskdTaH8Jxr2pp6zLBUeizQXDkKwdvGyjoX1F",
  "key12": "5runQ2wkd7cRogbq5pJZMFaNs68wi8PerM7F3EvtCTZmwMWuDTB97WdAEyfRsjNyyk5ivApccxArVDrqJKHHvfV",
  "key13": "42ffhn3Gggdjm5nhcCaq9oPWvuJBtGmxGyQw4K4wGUCK8Ph1N9TU7G3TKR3foeTW294QTzBxyXyB7ZQ9SRnT1fe",
  "key14": "4HzKxbumvtVqxJJ5UbmMK2hznqv2o16FbPav814tBA3w7jHtgTz8cZz2RXdqZa1ub8ksAXidjycZgvGixyFjxaEn",
  "key15": "ZRN1DKxvRKYkVJD4W1a3aiCD66unQNAK9VtZqn4HxxiyUYu8WREAa4F9vxBmST9QgWubBi1jiZj6DNWQPpg6bGz",
  "key16": "5cH51os9uY8FxvFq2NUzUsLHnrwLQTMfj9v7K2y1BbvfGdkyqhqaFYa5dcXXcu2BuGiJHCsXxsS6QyuifaoDDzNo",
  "key17": "4qrhez8EYtaHBF79j2AV1nmxscpJhuhWgkfNn1ZLLzrruHDe3BHuUnTGJNTdW4pn7NGLoPzuWLcrkEs4RRDv5dKA",
  "key18": "4NgMVNs9D9QryQqV6GCY3B4F8T7gbJ5dzRrr7kT14ETX3DCccCtrZe79RjsAqaUeYRX6zjhQuSJNzsUkCYvyESQx",
  "key19": "5YAPopVLav22WbjFqJU9wWxpg5ttz64r3iEw71KMc5nEqPSsdhKMNXyMFUhfM6MhAhyGn1KWe1zdsGwevuE4QeUR",
  "key20": "62V2CnqG4nX8iCBBmGsucDdTXp93TeZNKmsSFy8yTMorUJkQMembNS9ab49GV9zZN3U4X4dpUcdmkbxkdAX944oP",
  "key21": "4pqvy68byY2aoVnwxwf23JeivCX2V5VBbSDcxgH3PEbFDdPFeE57ubHpr9cR1UepkS5wEXxjwAnuXaFMsiviZPqk",
  "key22": "2Go75M3dicJ5JDyok2phAr2BD1SZnRBM5KKBfRvWddZWnfDvKNrFLQcVp7Y335SypDjACQTfJhSiucS7ACaQ4JP1",
  "key23": "2PRkZW21DA6gpEg11iddFub4rS7kwWtKE34JB6oSVx7TSygvMwCaaLVoHhSg6jfE4ucKanCza2UZyYMadDwuoMwS",
  "key24": "2P65LMgMc3eTyZiyFQ5GQ9cTC7Am9mdEnpDK9YNofhpSCgNjMEokNRcWqKLqS4x2opXHswSPKDDmWstpi3WscAMm",
  "key25": "GKwCbFYMAMqK1qXBFWav4H1Fw8JqtKKmUzKawQ2AkiLbMwJrds21YLM2XyPkWXQFUzT5G6UnMk3YmKoG4rAQjNp",
  "key26": "2UY826ms6vxmBULAShxt6TxeLfT1K7hha2q7UnxLyUR6PYvtJPa1Ec5mKgj13nuDd68wB21UmqJkp9PHeFdo1Hcc"
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
