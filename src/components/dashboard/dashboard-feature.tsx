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
    "SDZP4E2oZXFDtxGeKVrc2ajwzxDW2Ez5pmwnBeGAJgVZdLD7Sddfa461LN3BngVnWv66mzWoQiDp37oHQ2vyc7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAbrev5hZneRzZDsGLD5kuBFMmB9L8nTRtVySdBrDr5S6nfQ6iu7JV3omSW4Z4witcjzadPRVr892me72EdhcHG",
  "key1": "2Ege1n8nZQLV6qT5g4jtjPMZxboEqPQS7HeT14jhHY4LDx5gDpdoQpe1TpDVWKQ6WKsE5mSv5aAc7BgzXVJEBH2R",
  "key2": "4WPXimtTCcfLwqcVtWrDzxkBjyBAo8X7LbYQFTgphNijhBwfPG2W4jeJoyimBieqFMFVAoqk4voEJiSg3AJAKJjx",
  "key3": "3oFqhnmR2fHqqY78TozYuwgfUrrAXeRfoMjr6LfMuz1pUxY3TeeruWnG328ejRQrkVp2LSX5soRcogkbE2A7FMPx",
  "key4": "2eSvTcNxEHyBfLoZvPo9cCrowbYKqQ2NVUP8pQtGuHpXyNceutgnhDkXNdmNgdFU4n9cJpGicyHgEFQZcTe2n9S6",
  "key5": "2uBajkF4SVxUFAVFYk8n5znqsf3TLHf5sggb34rynLoDxQuaYoBMSR1X4oxqzxpW3gDqUK1784FKMzf1y6ndbdRm",
  "key6": "3sjaQr1FvPSrc77BnM1RLYXTkvXrcwGSDq5s6FuhCoqr6za7N9NptkHq4a53bjKQjrLVTHHfvpvBJgyNaZvjruR5",
  "key7": "LeaPa4EaBv6kmX3SuwoSgo6WRhKayC5sYxDCBZWHtjPzNNBcMWH8fWNm7Vqh5Uqh46TXN1KCMdaeYkxDqWeVg2P",
  "key8": "2QAWxtTs9qLJkTfeQ1wWxTYNPy6D196dwcY3KK2hAGXgar8thicXDt6H3RKUYSJx8btn8Qtu3Rs2TrjAot6YbzGW",
  "key9": "3eVPe1NNCuoVNxFaXQiFJSDqA6dMka3qrzD5cYiMnnivX7jZGvXAa4YPQDhvP6dXBimkPfaCCYiZerd2p1jMFCba",
  "key10": "4PkCZG3KJokqQjPwVixmXsCWS8JE88UF9Wem9Piqhe5x9MjMTUugWtc7heHeDVZ7J5ZUDcGehHwVtfMKXMv8JwjR",
  "key11": "2AmrqA79XYryzktTAvDz2nKmtMxrcEr87Gm9boTSRnowutVemubfnvFjmEY3rDpdtya1pUz7KhmgUeMHHyqUpW66",
  "key12": "iGDNLPYaqDb8iJbb8ZP76w45Ywgy6YLscwkkcrfq7Av1sckVeTJ97kdUgbte5nbvMXs3z7beg1CPADKMVZswjHq",
  "key13": "2sfFDhc3DPhCPRJ2ZintZFFCVkgy43mEeDy1oA2o8bDKiMkJ9cGy3osx8FtVgpvHTmoCSvjDVUPWxWZZvvmE58Zg",
  "key14": "2ogCXdT1egTVJJqrqiCxqWqBtRQRzMNC2jPvohJKkfQ4fK3jTDxjYe24Hxfg8F4fb3cZwEdVv9Rd8vMGqjBC9Emg",
  "key15": "2G9Tra2QMxMiRHGUKRgKu1o4Qkxzn4v89FYQ8AkLDWWPrw8P2cgMKbBMEDXrrrwbxsCnH6nZBG9nyzK6UWGX24Wx",
  "key16": "3fZLn8PTsWgBZBcn66tFNRDvtdPPHa3Y6Yhz13968JrTdS5vrFo79TKkLGNaagu23zaKXjoTGgk5MekqPDMkpe8F",
  "key17": "Ph3i52HdaXpEZUctUhqUniohQmL6HMbSQjBwb84WUj49J8J2ehEY8WAugNyERyXR4jqpAjoR5tL7xYix6gaDE8S",
  "key18": "4nkGR3mioqKNrBFxDcAMyaecn45cWcZ6xqkHHY2gdArGejrQPYeYihJcPHRn9YuFLNZ8QBNeJT2ejiQVLVsQwp4P",
  "key19": "wG4G2nHnEtRL95gyPG1nMkDh3ZazwGCAZhwWdF2dfTxgUkkw4Wz4SWtwDzJyFXmvh1KhRaDvj2Vk2MuBwf2DEc1",
  "key20": "Cw6F36vkpLCB2tQpF6VjpySe28FYaSfW2SrtLGMrbaxw1RpdDv9by6M2ai1TZQ6etpRL6GckAQXnuauMEKKDXGB",
  "key21": "4U1UfCQ7gFh3C8xppXDT6umcdBiDs2RQ5FfUHyus4x5Bgt1XXCt3jxbG5vCqZvitkTbfVvccTUYif3n7dAjpN5Pm",
  "key22": "axRBrvQj4Je78Ea8TJN5r2v182MHtSrs1uYT1CfefeQuWD2oJbWyqC5HJB5z6t1QK2sMoJRDJvvrgviwZqUJxzA",
  "key23": "36mGCqD4th9iZDRWkrRryqEDfxd1p4LK81bZtaT6VvozUVpvt2NqoQiLvypZ8rdegxvfYP7sPjXd34451N7eHMyf",
  "key24": "wM1DiR5Jg9SEwUwXW7DHH6XjFAjLEMQiVtTmzng4f2D6iKmN5id7CsxixE1bEGfx4ek6vuvfrdP2U1WcfnnoTRE",
  "key25": "4H3KEgjxmsmVCUTgsH6Ao3uoXp9wdhwM6gi4xctv6CGZSEqjhgxgGRpqU67a8uSM2FEd5SxU4sWf9ufyuyYLy17E",
  "key26": "Mt4nFp41xt6kNiTmSp9qM3Q55aofcbEBRraqzcQW4u224ysZLcqqLTbvLyVKttyJP3hM6axEFWELpe2vuJYVrrp",
  "key27": "3mcLRSzdKm2wtfV1UcBVtahvxE6bGSzhdXppriXnfAmHgB5aXd5GfddRqX1moPGCEW4i8fkHr2HC3y27hFxGibKr",
  "key28": "65WAhDd91YH5WR8txjqSrAvBGXQJfWm3N7Lypw91tVwzAwivU7C9npuBMs6iLwjjEVKBMZt8zqha2dYTcpnQmqVW",
  "key29": "5D9Tnc5jkXsNrpnNShxTqQbXGea5JNKBGV8jwyxFB8AinzJBbfbHGYspBdVP4HKduvMRVDLPRZuydkLSQEMvFLL6",
  "key30": "hHwqpgAzKPagZ1tcrMVnZYSoGP4EgNKzDuYiyuUZzAku8syziYpKKKqEt1FvXRBdi1WEawChSQChnt7L8tFMqVm",
  "key31": "3qY7FbZnLr8pv5i8ZoH2rkieUmE76Mi9FB86LCQM5SgHzQDwVKuAYbEfR6NLizaWEuFS72P7YdAxPQ2wisLxQNZ4",
  "key32": "5MeQr6QY727K6p6LHawEYrdMJvYWtCHNVxBDyUc14Y7Xk4GSfNYYMPxE5U5TDzSCKu4Moaw9qD7R5h7ykrSaBrvL",
  "key33": "2A3E2oFjZ4RP4Nr4nrLpUjbCLGqiNukAzN8JboGC6X7b7NPQaEfuAGTYqhACz7st8NJ8E7xUPuXL2MT7g4Kk2AGr",
  "key34": "jAzt33EnUGf5TRR3pAJSChAEAN9QXtdqdBxDigNXjwTVY1miJXXTw4zsBAxHjN5dWXZu6UVJn8SJVJXXszSJ98k",
  "key35": "45dZMCxUHW6gRzrUUc8tpU6ffxeKSb2qHQGGQmv5M7KMEgJg6CX5i5xpkxQZznvqPdMknxybFX7uv2mzPZeAVPGe",
  "key36": "4JEQ1AavHSjczmm1cPyHk2jiW7JiFKFeeHbSYj2EmLsrdcnNW8d75KCgksYAra9UcF9gQxud7GrVtMSV4BbTCQu4",
  "key37": "GY1VnVvcKzRbU2A3CAZcRRT8JVD3h5iUnt7iK54AdpE2PDctysU2hEiNXi6tyd7BWRjr9bRjQ5ennLyvhvhcjK1",
  "key38": "39YJM86wFSUfuYPMcy4UWDNHict8NvkAoozjbeMYy839k5zeN2EC1rx1PPW25kDkFusReBHApKkjZQjj6Z27fHcW",
  "key39": "5SbU5UPa8oS85MnccF72rRQg44XhCKbXZRhyk5bBaoK1UGEjZTmGSgjAqguGkymacKF4vGcR9ZKjmxzwEVUDvZn3",
  "key40": "667DjyigQjgzAmkttuQAWCdfVqF7Gft4VCwtUsSTw9qcdDcN6k9TNxbV4jb1JQKJcSL5UJg6oVSy7JSJRfB8kdpd",
  "key41": "5ZfhJa18D1j4fBvz3XZ1n1wBHmVY5YX3zz6tbWbxrGEhxxN1qjZwRQXY3tzzmFd3nb4mWm13VHM7bQVgrdRcM3Sp",
  "key42": "4UJr2EWnxnaTHRwADt6eFi5vR63x7n4NzLrcDzu1y7T781QyN2zkoDirKrsoesyPSNcv876FJdsdHSJJgne92LiK",
  "key43": "3RRXTWbUDSkLF3VtossG7V6gBTh14QVzHzj9Yym5dNsv83Wq3hcpJVmHjkFWeUtJ3KXkL1SCeHGmtb48s5n1xfXU",
  "key44": "2zXmAc5au26n9LPKf9U4KXj9YVfHDUeJrgZBXU6ZVzaA9SdCG2H4rQ9deriwgf19ATQdYjVDYZmupniU38QJ9XW6",
  "key45": "3eBtQYidZHi5hu4FcPf57Mq1R8VTF3yHbUotcvJ7xqThWNRn3sABTr6JaTwXVat7vDWKBYEyaT7EKJUR3J5Z5zGx"
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
