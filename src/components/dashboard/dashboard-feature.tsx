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
    "2hEADWyPVJica9V1vZCS88QLdCuueHmno9VYpxnJGTF3fXkzb7jBPHnF8sLVfZTXaybjYhrUgA3cs295WQ8iSzq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SqEeTWGscjdrFeAL6zKqyusJhKJCEYPyRuMwbwTMZoP4b1zSmefXBis35MsbPPwM6FJgGDpgtQaAbwjpRvED6E",
  "key1": "3UUK6ZjqvRMRub3jKyZAePPDVBRsJjfgyYTkj2u4qZCMkfragEi8jnjLxidrVpstGxTfyYCYJovYnCmNmbsgjR7j",
  "key2": "59xH7ZdfVuSCPfCmswzN3HoeQMALNXG33qFYqQhq4mZ2AWhgajEP9quatf6Z6DwjN3uJGGBSMsDdHnp8uD77Ag1P",
  "key3": "5Tgf6o88n9nkUtfCmCMmaubNT6NEY76iS3RLSs7tTKsbLjNpYGCPicPu4wq72CXLdrBoRUGvQFb69msEtjZCEN2v",
  "key4": "4w22hLLrHKovzXnBWfF7WheSwn2pgQyKCA7vmohMhaHc3o2ZQPMRV4154SQpw7sAfTTnHPS3tvWW7rqx78tW9X7T",
  "key5": "4QxCjdRgbF4pV1qLbUevRj4ENwSq961MHTKvhhKeuHHiYQpQyMtWEA9iqjT7qMnK9QiLhhadSTv8D9caocL2PXqe",
  "key6": "5f1nHeuHnxtuFokkXhd6z16wAzbsGJg8BeDn3xfAXQef2Mi5S5YqbVuxRkFQBbkBjUZdgYTvHYEW8poqwqhgjL1Q",
  "key7": "53NDVwkVSvtPWoyBYnFoDb4P8xSM9GM97y1zXu5VidtGwW5N7sKUQA2HiHN1NmVcGX2naHSegS6SEtAFXE6d7D19",
  "key8": "LwZVKm9N4mnkuCpcoFKxs8ZCAyYJoCrutVrkauccRF8UGD5mjEeGpymtuHiVJahsTG2m31F5CMC9Ct21JuU4SfF",
  "key9": "etQq6zZWtVatsJon39tbQYT2E1NjNov6S7gsVhUAttaXP4Sk5LCW9ofVMpKDfWp7b8Pvn5qBSeZdmV4EMEg5bkr",
  "key10": "2FUpE2nByAu3eKXnVcWkX7L782gtjpbNtLfEsLCaSPe1ZQojymcnY6iKf5SvLNL77Vjeaj9HzY3m2k1V8YqmJWKs",
  "key11": "4crYPAoRjKSxsHok4Hmv57wNR1HoWfJ52aY5guP5sCxz7racbv5voDEdLjTjdvP82KeMmqBzfWMTmh8dGZ15ZnGC",
  "key12": "xntuTxqeuwLC7WTRgGcpS24hukFJScGapda2Dkx3neAewTeXhRdbW7GXANNNcRPTTnvZde3fwy1Q6BVoEeVPv4D",
  "key13": "25s2cPVBAhTU1HDBwUNMkLAQyh5NwYMvKAU1jxqzFYqoDa9i7pM35mz5gckwNc7WBNURvvmJRD9GBJzEGvkwCYCy",
  "key14": "4uFgw5N7tmktzghwJBfraZsyneBscNvpLUDBd5RWqUcfYhb4KLVjRKeA6U1FeGPHYnN71yKSFEqpJkT1PpKfnZ6f",
  "key15": "5tP6c4p9e2aBzNoeE9M2fd44h9ds2qka5Jffr6nuTpKVRrnm9shSGD3ED48dLbZGmV3Tftqn8a8khxmxbTDZhdZB",
  "key16": "55bXHuc7S7J7mQtsHXuwaiXWQ6WFjjLDqnUgKf9foMhpdkeaGnDuFXsP1BCFGbpxtxgJhKcxHj2fEzkrDV6NdkDA",
  "key17": "7a8cmUgoQ7TDgc9KDsVrpWzVB3NQ7gDyhh4AoWDs7iEvAm2eGEFZE8GrUF2tv4GYaJnX3NUp55ZH6sr1ua65Pwd",
  "key18": "5yF6YhsNyXeo3Mg34UzaFXGp55aA6CXwNv38F6RTGArkAoDPrbUXNpbHy4fFvsNsmqxTNpnvFrWQa8SLeQ6x2urB",
  "key19": "3oxShbEaXxKnbPBcVno6YKd2LGXtbyLbCy8sMktpq1ipywHPAcPmZ7a54fKpFtAzExiqXyouQtVY7S2TXHjWayKn",
  "key20": "5wNTt6gNE6Gi1kozuBMRbjWLJTjtwxMPYaAT3a3F56poPmHjiLAva8SfYUyuNczKLkyCC1mFvA5Av7UeTc1yLtPT",
  "key21": "2S7VpL5Rhx1WWp3J6oNbyCqaXyHjHZZUKhpefKEwAf3awTNc7uTqvrQr954SDJ2FXPC4A9KeR2MojVW3LTThALhz",
  "key22": "4MtvjLgAgGEcfsGBZQXKxRJ1PLM6dFmXN6sVbx5PGfNqCrMmwFRsz26p3Jk32NeZEwZF7KPKBQvWnF6PtRRVz6wR",
  "key23": "3UJF9M4mPePiXhrrRmyCDFvxA4GyBYDjN9Mr8VP3gF1xhMieSnmXWyLGc3nQZqUpYGiAuH9cQLqPv96YrowwCwqp",
  "key24": "4rfma5u1zEFPo5bbNMTBhu8tXDogeV5XZnSrXX5EGpsHUYEUMGN2z9zdf6M1FEARgcb8QzABDhUhe4CJouTTQUbE",
  "key25": "5bRHHCYjqGyrGi5Rq9QhpWDXKXh5UGVskPRQdTWGEvozZyquhSVC9YCCWbvUeztFChWesHNjSoRJTxRfrFuCGFS4",
  "key26": "64DDwZaYYTGJhDVThTCKaH2VdEcmCjfn2NopARDbY92ovvmivShgN2DkszzPpkPUMm3NRToohhTgcgcDYRPg9d5F",
  "key27": "5KhuzcTbK7Yr1bfj3Kb335bfyWU3y6qjqBMo3HXN2NiK32zYeCU91SbngnDmNdru7JQpVKk7TmQQg13FWa5nXE68",
  "key28": "31c9Ehr8Gn2stfBPJDsVb2GFkVNXob7orcZ4DM3bc12pTcTcyRQQYiYXpoKCDYeu2mGXEvuowYX6hBKVsL1qnohu",
  "key29": "PvocgFJU9i96ZyUQTxfzaAJPkbZsH9xaX64c6x3RD5socpjJYHC5FDpT4rrn8Uizc2u1HZZ8k7PH8MLwWDD2TB8",
  "key30": "271jgkxX95bbJrvvxMqKEYf7akxCZkDeW45YJiaVmy9TLs8zRaGrpw4XaVXsAna53GLiztMMBCgXQhKddrfD6STE",
  "key31": "3iAhvg7cC6rfXLX1GiC5qDoUWTxUokELf7JuXTE9jDGmf7iD94rVcpmcuutrE2LRUT513SaraNCr66aTpkPy6Cxt",
  "key32": "2Y9Vc2rPacW3HiuftXR77iEAWcy9e8GWtCNTRmydAAU7s58GpTDVqCiQmKjCNiRnckH74FuwiFpLW5sVTCED7idE",
  "key33": "5tDGCv5fnttWiF6oDY5cPijFgPHpMwsANtaDYFfDkEmnEUF4UqcJh65obzNHbvNdzv34AbCkT8r5FLJUrnSQQgHp",
  "key34": "4TKcMidhGLxBTLtj4pbCmPkRtsLNNm6Npxh5ehN9Cp2cM9AFUvu5P7z2ZEjssxyLr2Cp7o65VgPbusA1Rs3uo951",
  "key35": "3w4ohrSmKtih598g8JQZwXt7rPdcksa7UMT8z2xsN9gQNU7XjyUmbsMm2DiYek5xGUfhFiqP9wQZxGCmMKuyGea9",
  "key36": "57p6p9hCMDaAk5JJFsrS3bdnVqjMio1m3ykEwqBLxyjoBepdPXm6f3imjHsko5ALtWKZ1Dbu168762Q8VSrF5JgF"
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
