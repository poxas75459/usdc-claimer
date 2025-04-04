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
    "22xMyj2d2EUvL45mpo7jrWvXqjTY1H1ZnNgANfTt3QQGvj4pNDbNLUt7XJzUmTWZZ5hUEJZEUYoiiowNgSSszJq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PTXyNp3ihhzJvBoo11pcJi72jMdBPiSKvoQWWVvtGEv7hRJfcpi2tQrC4N6qNSAbajecSahuVfAaTrmzzCJhrrE",
  "key1": "32tXm7guwJbN1hF5mzoLvTw7DE2Y1pdFizL72RXiCWAkxYLfFe3YNGqWa4EZcqSZSa523sHyBj5aXm42FghTWwyW",
  "key2": "3TVdv5bRzHTjRCzP1UBi92YRBGQBKMcJ7NTNp1Btc465vbyvuRr4NLx8hdF78WWLfBi3h3369mXDHfAy3cMzBjXV",
  "key3": "5yA4LRcNUgnjYqBRcfnuERYT7uKzosAaMJ2YESNzbVFjuTcwK9exK5sZEVn8oaVHFHpTRcrvABKgXxocPTWtMjXx",
  "key4": "5QFcRTRo2f59KBVwXyijhnrjqcnFQ2MvEwSDVEEoDuiuWz3E2RKJX4CVc7dYvaov5vbPfF4wuVFkMUncWLWXKmbm",
  "key5": "2FVS8GBVCrMKpJwbNq2UvEzjNFJcsSarEqQPkSxtbNbsa1eDrDibdERtgf5sVYujJ942PtghFPEX6ejzKgwc7cDJ",
  "key6": "2aZwBC9AHrZVvHoXyerdvFKJD38AfBBkt16xjXuexuV3YPaXkcGUgWJnJeJs92FBw4CLcTcaaXmRGG24vqzjDQZt",
  "key7": "sTo6wiQA6DPtPGNaNLY9UsHZh88n11XAHCDTWWzyGEADTyLQHh4rgcSwsABQZ4Hfh9FTYxDdJBPd3J31u5HqgXn",
  "key8": "bhQ42tGfkcuVodbR8rD2mWTE26DdGqfCb26XgYtx5uVrXAdBVKAHBRXjUsoD6Agca32YGJThLhdXRZ3DbMgU4R7",
  "key9": "8KecFfsck5jVkkisWRiM7sA72EMsvVVxYqtZoGVeXohALDAcJLB59tyBvaUxTBTj1d84HnkG5g5cvRpvqW7aCdq",
  "key10": "2dcGFg3ThRa5bzJYBcCVpyRthqaMCwrYmKuCxMxLdTm2T7TGAapHcaRW2rdLDF5erDHR9JrFo4JXqmqcAUjrUz7X",
  "key11": "3n1tKrBdgURjcJaqfPyH1jq9r8hJZp83Wn9teCwE463Zqy8MG45JS19AqhHLrhKC5mFoayQKFgrisJwGqNL1cb8A",
  "key12": "4c8VXmhNfk71SSMoMUuJEJDcikYvRK1yuhCjuKzW4pXKy6YQCSn1bNwnbM7FurdH7y23EpMn753mDULp5mBHbXww",
  "key13": "2mEn69YaW15zUejRjnepveFshEFNDGe2uft5PudZD9U3B6Qfgu4tubrv1co81y5aEeZnfYq4CpeJr4aCoorNqbjx",
  "key14": "41hR9hGJn2kEsuHMFWw2byWpNuuS4xmh4DJ7d1YTieLEfAPqPGESDg4KGCoRn9ZLC8rS61NRHiJZQrioevgsqV4o",
  "key15": "5p8o8nrnpyPtTyX6Bbqf8hH9hZdJQKmMgU1cSY1ZzYganQGyB12YvPcmn7HgNe4GRpEj964VFSKJHzCJNrfVg5gH",
  "key16": "LJ7dVzkGC7exqfj36HYbkT1BTqRqbbP61vhUud3HcD72dYDiSReEZwpPxBEp24sVPMD7giYFmb6dULk7FfLcFWn",
  "key17": "593gsmgHXiuaLKQvQVuCm9JnS5Z2MxxPozncLgawMinzAAXGzETaUpzGvAGUZCcZesXArKtLsFwf8vetzi13PcPv",
  "key18": "2UR1PyrVeQmriWdEa9mygM77jHhrEohdwCcTSKQZ18xCYaLoQMMXoutvQokPe9UpyFAX15Zk6Dgq8XXD1hgr5VEL",
  "key19": "2YxHy95Jj6NYufgYFcHHLPzRbbgp3oukvAy8dVFfJ2E4WWPS5TwfsRMvbKzejczywjCHNCsYa7kKz2ii2GeUR6YA",
  "key20": "2TJDnF5M5LGCqg6C9uM2os4zA3J5VHgySriqkAVVGg9wjQxay2cSG7YoGgWsGFYqDfhwg4uUSYJLewA4TJRQ5eRk",
  "key21": "5kDqtw1MiH2rNNGyTiCTeAhVXqYRMNZKqZcnYdoNLv8uVGqUJkJkrd1driAFCYjB7q7yK34JFfj8q9GXqQkuR8ps",
  "key22": "2F2q1fqSLb4uYsXt2QE6H3r5pqRMTrMkwdMck4gKBUM53EEkpGJswteGZmsNBbF69JXnVhZoEU4KWdUZ1zDaV2jZ",
  "key23": "4KD84WLTzyeuhUwgRvpLWkXF6ByPbZYxQd65usgpinWcu5FkUpKN32WfQg1aYjWZ9c6Qr7BW1BVu3uTbGexLuAGQ",
  "key24": "3gK3eA2PC2aVvRz9RUKYpB6hpbTuk1kdvFLitAfeajrnPZC6znAzKZYYoSyXLaiC2ELimdYfR6LqmCeNR1N3n1Na",
  "key25": "3Apo5DECsYXLThdvHe7Rwc5nrFgGsdr3UnV5338VPqBJmqjQYSU8yNRk7d5thamAbC8E3oE2a7oJnUr19VceZ8jd",
  "key26": "3tCc7XpXKMHLzd95Yi1cjTsSFwEMpMqmrPoRDFxS3RYZ66gw6jHTtcF5wXiq3LvupKCRyauh9qHDrVHQHHL3n1Sb",
  "key27": "2hiLH77QToaKMgvPycV34axBfvJAPkrNsV8kaFF1ZKGSxGaapu2ksUdmMGDRYmz4Dm38q9pbRZLvfPMw2e7tzoJg",
  "key28": "42nkcikffFvyeHdcrHr1MGpaQvQ8bzF7jkKBkEDnkcNPh1thX3Pr3qAM1KbdHCmnhXcCbgj7q87vYcEPneJR4uGu",
  "key29": "4knYGGnqri38aGZjuTR6UcJsk6niQUP8VvU2f6XU4GJDZSajAEqGsLTbLv5hPzFzivYtSkjGFSxSse55ZDwnRAWe",
  "key30": "51PJW2DBDWtqApZjQSGT86nTYgg6qpeQxuJizbnT7bCzFMjGwBTZJo3qYAjn3854WcxbuMy1ujRCWMCnWYMtj3QE",
  "key31": "4XTbSX6EabbCpDaD5ErXSP3iLqbzSQXgdtNK54cERybXPthyVwYaLGzsDjrDXzSWJntY3PQfnuAC9C7tCu186SDy",
  "key32": "KEvCJh6aRCxsB8JRRtE92hBjCzi4HnTUVdi6rsabiqkcxQG2A41ePyrjWH3tQo9sUPuhYfGoZzvfjr5monUV2b3",
  "key33": "aNLqETMdBMCNDLN7WdRyZUQJVb83ZUQt3KuXRjP58yzNkc4SGH8N5EDPoHNvXSZ2cAVpTVWCz7Vo4RtA6GcNedu",
  "key34": "5xLf3qUNXcri4KoTybfvL3UPY1ZkhEEcYht8uShomsyQ5Z2jHeWMc9kxJhLU9YXiCD8c6STxq9qHJ82Kbj57S8Sn"
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
