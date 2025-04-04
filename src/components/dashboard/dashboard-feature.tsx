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
    "4H1i8mSkLPKzALHBnusGWPiuAmmb92sM7qvTuD9Qjy9eLKH66M8RFTHF6vmS86ayx2UhaE18t7cRkkU7PYR2DEEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kv7GYRcfoPj9KZ5aoThWNeDMyFtU62XdnqeDhh5ZGdVVcSRvxQQcGcfNqcyPgapFLejjjxWFTy2Te8Tkc2GbbSk",
  "key1": "3gPywaZJPcET95CgnrCVcSbA2Z6CKPAV92ayPesw4aBVcogHBWuURLUGQRBcWxwajMD89tWUDV6cVaZzQxuN9RCD",
  "key2": "dBq3RymgcEWNUJ3NYub524Bf47NkbeTAiAmaSBy9C7edvqjuz89QECjH2mssSowVBPZ1utCv35VN6Mh3gzjBYcC",
  "key3": "BnbdUQ4f1x2UysZ5jimPGJ3Az9HHhYxevYWkm2DSpP34M7rE55xoq2W39KwRw5wZHCtPYGNMZp6vtRLB6irBKy9",
  "key4": "5KZMuUFrkYpAQcBZZQH2r7WYrBLvhsFCVDfQyhzsTbCarGADHw5erT6QUGYCRnLw11jPALDQwcbTNyS3bHc3cUU",
  "key5": "53GWKRMYFY1rk5HaoAj5cK8rQ69CgjYv7GJBWHnaSdeFa1HD5uynyJARh1JSJYSUH1WzpMejcoMRApY681SBHMNo",
  "key6": "2s8X9NjkKTxSPkiwe2S2bvVrWpuTh7vGSLFfRB9zX2ySXij6w3n1w3B7Qawiy5q1ynBt9RCecYanRkGn2KSfdpNH",
  "key7": "3UhkrsDnjxxS83Y25WcY7nsJ6a2JeAkuGH4ABf7D7vck3SfsrxLAkbV3KtGE2zAN2HSF4pWqpMDKpZ7xSYYUbTTE",
  "key8": "4rJCtowzWmP8mojPp79tfLxMe2eYBiEn7Betkog5kuyHGATuPwmEVckbVNi61LnTE2MDddxkxnGdxTeAZpiCzQW3",
  "key9": "3xtSoRpYL2G8Wgfy8MYfPHp8iNdAbVxoAqJS4LTzKRABpgc84WJKpg4zchp4A6hcoDfU887f5HwnFEZQgjfDbyMb",
  "key10": "3HxkvC5pRWKbHBd3iHpwscZ9WMSZrhXXzuFdCHWRR5ceCmpHoiPtF5E2p1reeFC1kqAityhko4Jvc2kTH6MGLe4b",
  "key11": "33FpEjXNMYANQs2au6FSWj2Qdu5svogmXBp5bwrqSHh1uCXRPke3hncSqrK8UpuDpK46TDT9NVGWMzca1pRzfxcN",
  "key12": "2s1LYwPRiztiTnJJ41KGAkaGRN47rvdytMUho6PRzyzVUhuw2n92YaXBsVjgwp8PdDYTAp8LogQqxNjBXiHDZqiT",
  "key13": "3bvJPVRaY9w3ytZQuKJQWWVzRYT6nBGFt2Ksd8t5Y1k3xivcT6c6yjyCCf6gRCajhdzKaJKAvtWrzVa7NJ2voJmo",
  "key14": "5z3emEGVAiig8ujdYGZf9FZciDb8QyxheHLUqLGEVcXcakDsGQyi3pmBgDdfedNqiLRq8xgjmS7thXVgJBdFPtMP",
  "key15": "4Uac4QNhLK2GFF2jLdkE1qSdXCEaAtRdQt9tFHktWdFaZR1bYvpLRrAEWb9KW6rdSwziVt3v6XMzLbFLbBmJcujK",
  "key16": "4E4vKKoUWgUWJs5dHS7BbCyJA8F674nRu8ME9QRRpPsSY3MoR6xc2VthkmvsDdaFqDW7Qxmjv4GWpGRWetGEiHtj",
  "key17": "3swjmBasrJM9fUs4eB7GqG6CqFp6tsdYftP5V7cPbNW4m7S2nngbGEc2THYxE6sfDoaJM6VbF25VQUs4oWXeTtdL",
  "key18": "4MXUeBNBJAbMbkPchyK4gjw5VbBGyLjH1fGFVByx311TmbJryhhgfwNiy3LYaLWYGRkw25u79ayPHvXzyACJCfaS",
  "key19": "3rV5W5uxFV34c8mSPD3sM5gir1M2z5epHjzA6NYpfSFLXyg9nKshjp6F7j6HMMMgx2bXyB9c6sBTA5M21xk22X3s",
  "key20": "3i3JZbTdRJ4Wkx6fCUCSsKtvW2UUfpfqnzBtGaKvdbGr626wP1ivRUFpgDiGgjc8xbMLqKNX2Y8FhvMwEDtHHqoG",
  "key21": "4BwjX1ytyXgcqSa6jBabDDwNHYBD3ZKbgTWsYXurmDYy3vQ8nHpHyCcJzWb97cStBE2hG67m14f2miMyEE21dRZZ",
  "key22": "5DKvpsgRvKLeKn1MXKycjcXGtfN83AsmnhBR2qFT6gCZhod2P3NbHxPNLk3uDPxRfyc15d3sN6cyRRAY3gqFf32F",
  "key23": "J4pfSeP3N3rridZMA34W6UcA5dSH4NnzH4x2Lq5djZnGtoQH4zC8Wq4rT4XfPpyZAc7pvik5tCMXkD3PkjtQmoD",
  "key24": "2g6KY41rkBqyrjjHNAfBkVx2674NPSnZ2B6nYPpQm4wJ7ARKoC4XRSETHorgkM2VkswWkqbAfT1HQoUZAuFunpf5",
  "key25": "QzLMEHbkpgkGwizzUTaZTuGH1wZoYa6iAzkSRbZQdkDyff9G9KPAEW8L6m2SfdvYsEWX63ZJP4nxxciPrf8QnXz",
  "key26": "2oaeZjnCzHAthFed3cS63R7wATTu6B1kUyCqEkYTPY65N6uG6XsBR1pvkwXG83BZJ7L2RC6Fs4GVD44A6oooH4XK",
  "key27": "32iDAV6qgefFuEFdvtNZrpA8AtiMeRAxkcxynZTprBpVTStAjk9RKq4U3dxFDwH4L5Kqd7DPHqot2tUcL16yCgrh",
  "key28": "3ZAjMSjWWCxoeYQE1oAFkHwZopD6XRp2LWqypezEpBsc14X14ER1F98KDW1XhLce5v8UM3cVMDKRfFWNX6jNLm2j",
  "key29": "4tskx3UwfBPh7GWsdm3XWPZ5GLU2fC6BpHVAA8sXV59BEVfrVsx1ty6MxK42J7Wiudt3Ud6h1pmvTsZysxRRLUbq",
  "key30": "5YMYZ4wMTeNwLXPbmzvwwsCxdH4qHzmMoZ2cyFqXDnUuzj5ErL2v3J65w89ovnVdLtL4ZHS6Uj8PJLTynPTgnL7y",
  "key31": "fhKFRBp5HNxetn7LocCKGMEnUr8mD42MazdAkNqcBa8eHXvRGU5RBY4RQ5AEHxAE6LnFh5RhDTBPjXnrx3cpTnx",
  "key32": "5CoSzWPygpP5wLU2daYW1KHu3GMEzFuZdAu6j78o1EWxf8zSQ8886NrCDEdpbT8ozHa9FxqWZEzdZ5sGYswuis4A",
  "key33": "24EzqUqbiTghm6mKNuhfqexSUGU2JmxQXeM6iZdP6KZykS4hyxydWoVasNwqvcoTwNtdzJkcK4juJZE9Z9H3Wxcx",
  "key34": "3rwFLcXWLR5XGJDiTTfiRXda7DyX253n8vBh38bw71aDfrVuugn8rvPUWmzegSsR5NB28p3yp2deDjZmtAxuApTm",
  "key35": "5xHeQ5mMMEhJQQYZxjAdHyovBJA71Qh1NttFENss62STEFjLqLhubvwGEfRKgco9nPjykmribJsH3PVabCNy4gLT",
  "key36": "5SsyA31782UekrNCEeSRdbbkVYbkK3DYQcEhg4nvs6LPmc2yBgdLinVgf8TsibAMShqAqLnzfbKpwstgf4iYDxwX",
  "key37": "3YVnrHZBCyK8dQM9XvWdfK7nNNQYswvpjvqDYPjSSY5DqysvnNpYnVaL2Lx3WwtgHov6BxSLSafQKzKdPiSBgdBj",
  "key38": "2mt4jJFbUuFcu67VgArWbDJhucRjsYRg6atNS1SFfgp3o9E71oNwvBJW4eRz8UJEXTgb2VirQB2pBvYG5Q6LioFS",
  "key39": "3YnqtyDz5tTXjmS2aPgCKMQUyhStRXkjY4PDEEXFMtrXkbyddT17UFxkDAAjowZLvHeNQtSfTq1gYZMA2gfLwgMj",
  "key40": "4iy8ZVWcvehJUmjvMhbAYxfPzBCCAyZEg9Fa7ZtQaR4Eg6JbvARLtgPDo4MaWk1sZb9YRRQJkjJm7TrjhW5g5tfd",
  "key41": "2Q68sfxTbgtXPJ7KHhKxHEzcJFBNiTpUTuTV4QfbR2ddBrjk7B22nYVWpDZCMjTZf71QPsTBd6Uqjknka7qzLn6X",
  "key42": "5Z4P1LtduxcXYUoYLvAEBfS1jUnmYbsHewqDwKtkL8axJ8anC5AUBwffq6NVRykAjVnws9dAAUNnHENTZ2R5G7Yg"
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
