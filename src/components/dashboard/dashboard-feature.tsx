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
    "3axi6G5RRfo2yonkc3dChaBKABFK7d7VcFcTXdiosijtDpMTAftEbYRen5Et5uU7Gzr7nRjtyDKtGmicL2aVV3gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRk55b1jZL9WkX9U31uDB3yZTV2VFBekpmWXryd6zmqMFe3RERFxKKKQRLLdhsWewrGLxnh9AJZ9KCAZpuXnX9d",
  "key1": "2kh6TJcFFtG1rWkSQRZr45jG6vA8MxeznbwGx5Gz4xZveKE6A3PePzLVUtec3Rk3v7husNrXVHFELa4XZXSCCruV",
  "key2": "fdZ4bZsrqdBHCaDvSqyqSy8qvrJNJnh6uCXERG1Q9qXhvtc9sHv3X1WSQ4ozcC8uz6qrUCE1spQWjEpuDUZQD4x",
  "key3": "FJrTxUXYKuMk1CWKBPcfSA29WRPHcMrpdd2HeHb2yhHzMrcVouX7FwmFUZtugv9uMzuT8rnTpdguXDa46g4ayxE",
  "key4": "2KgcLTsY6zkBb1V1NJb5hXHPcTz2MQUqb2kYuf8VTMuaXoJjkeYF2Mks2QKeisFsJXpCYf4iTYEq2RiFFg4Uq55q",
  "key5": "4BzRHh5fK2hJkSBxx5JR1DxPEBpgdquBq1QCC7HMwYbt3ScRo7KdhQUpfgxVz7qbRYdXiTn594CG2zUSFa8ii2nC",
  "key6": "5EMQFERPmJBz8Zwg8uyQUN9qbtvppSJFbEiPJP8iGp3QScbP71avgJP6vCLdkotqPzRaeryZu5tUJ8S2HFyQoCAr",
  "key7": "5Ybj66C9dCFPHNzmPKPNfHdxdQJt8Gj8SKCmDVK6YTonCdyi9ySaJvYM25mptWE4cXcB6hd2ws95De5GB35ANX5b",
  "key8": "3FemG2A5WnEB8dJWV4FdCkHA52AjoZyPitNmWh4rwSyJx8KgW23rsZJ6tqckbwA226YMijvNY4rqJfUy5aLnUvLm",
  "key9": "29irPaNGL5sKk6tha9ZYZNXfHMEbTopmtPqWmeHhgiABvD1bMt6ivECERTRyVoXdwLMEh1X4gQwLLtTmLiNuafkp",
  "key10": "5Kx7K7St5Zjyt7e9mj7CLcGfh7sMYVrwrBgK2afeJYja9pjcrKwQaS2b24BmJ4gDu4MMYB5frYkk31xtYRekEavZ",
  "key11": "38Mf2QVTcZZxdUUUaQQvjkwQDLzJqNQjYhMTpjagB3mYsys86xsu8vo8oyG7heEXaqmvi2RwJ9sYSN3v6h8GrvEk",
  "key12": "YtiSpQEst7vX4dTPcw1v1cxfQpYT2asHVUFkXbG1ZQEQhEgfgYby9x5mVs5dF5SVag2DuBsszdEWgb5nz8dFThF",
  "key13": "2JAgrqHwgiveyVWbwf3q2hBQU8VyBBHy1GWHX7w57Daf2hagVqx7AbM43St9tW8haUmdVaePpFpB2xAifpNJxwmp",
  "key14": "66nEj6JkSbdRjTKC3Sos36mwnVSHgWxCdngY79amNerSfrwZ7uZAHnpsJxmGu8o7Cz9gmBci78C2AQkkwZPbmQfS",
  "key15": "3TcaQnVk72CGznHN4ycW9FFWHbaCYgupAoDnpzH9NTGACmryAbWEkhZ6Ebw41fgEfwD5QQMgLQLqmrYJ3KJroWPX",
  "key16": "62p2pk8jfPUyx2gCQQYrZKPu4Yn6zBv4q9UUxcJBJhFjfDJiirxU9rmTQptxyLBN4CKop1QQ7kVqkFtKpRr92DJx",
  "key17": "5As5VC6xbgtNUDzHp6pkJghRn43U9HxPZPH6MfjCAXG8Y5UFbeM6Gsq1oqkHyr8TCk5QaMbgpbty5aatN83VEY7G",
  "key18": "5ZCBrjFb1DYSjmp4J1wjvQyUaeDTsqDaXoCPRo9EmeubA2D5AjR7vQV8qzYADS4xNoXSsvkTyCXebfhzjkabn5Nv",
  "key19": "3gMFCuSoAE5cE2CT24XoPybmk1AnZoyE1kkC89NXB2p8shQJfKPasheB91kgmGkedy3TA1N5EBwkMpxvSEe3yaU3",
  "key20": "q6j7xoo6rN85mFB7quVL93u7rYQYGpjzhxh1iAzHPKTQ5m7yYoQikSRQZSDv5qXP8fpGmor3LttUfkwTSHxWgjT",
  "key21": "67hDQLLSzP3QNFcEddjtYfWnKn5h1FpZ8yBeLMm3tKa7WG27BKBzNY1FfH9TJtD9Zx864p5ND9e2Y3QT2vUNoDhm",
  "key22": "xz4xV3jkCoBmojRuSsWBrT4amX6AW58oJYdze6mxDiJJaitF6w8cHex5Pifwxhh7ocDwppXDeCQ46qagC4AHcJS",
  "key23": "4njW1BXHo7cu8fd98Rzjvfw5WvZEe7dJ9uDB3HdicKUHhvoD7SYBeJXvnjCiHodk6Cm1DdYs8ATiNi5gKQBuKkMA",
  "key24": "4LzvFPzr6DQ59PfKnUsyeQXGH5qW1QYSQnxaQ1zUWzTBXtk9AnXkw8pRoUiBZisoRgDqpj3u9fT1JbBmPXGSFgS6",
  "key25": "2942TNBrgBwEJKsYRwTakFWgVnmn2ysXqCk7LpBCU5RSkmbyB84twd9Rdrs5CUTVpufytYGgXGZAbYZLN6cL1FFf",
  "key26": "4aouAQPFdWUNbbHqhH2HG1zS4ewgVvangkaNxpGaKCY68X1cUWSgEe9kWUgMwCoZFxzH6ZTA9jNM6f1QzN59dMrE",
  "key27": "2gZS88mg6WV325dYSnTGbbupeqvH7eHjRFaSy7YfyDtPwYRJdEsh18zKz4PHem9zvB2wX7hT69aexSjpMCycnB51",
  "key28": "4SnemyjQhJ5rH2CWNbCt1ixGHbgTgkC5mvE1N7NVYwNK7c3y7xddus5Kf2e9v9rfw1CAN6cZMu6uqurNNMBtmAd",
  "key29": "4P7tXLCcCkx1cKg4MpLiqcjHbyzRvjVKuXGS5wvPz47h3wrokE6n7WAPcr1r9rvrZPQujTmbFZnVJXWAxLf4GgsG",
  "key30": "3tHqaFmMEzg2wWZtgFXJRyGzpBTYjwBZYWynuXnXH981wKnt7yQdTp2CpT5X8wCZVUhLGPeaxaShphfBrFai7Bhq",
  "key31": "4PVTDiWrqxtYVSdTSMv1aV7V7rAXHWKtYnbqbujPG8RGmsy2TEJqWP6pNurs4StNSUroKHkZPv5TNE9K5fQy9DcP",
  "key32": "3ArLZNL1n2wbxD9rM7fpQ9Rq3Vg2Ky8mGihKW1LZr2FG9fxqDSLLCaFYsj9FBUuQw9eC8gjBtHishEumcqRi8jik",
  "key33": "pjB4REDvmPn55d2p1P5oEfNQ4xYfsjKxFFmTxfn7A1BqMBvnFRdZQWPu7d1Z5brujg2wFeZCMizDhVuMNoyNa1A",
  "key34": "37pFm9H3FqdxRGBmEcQn4A5HKz5m8YwxyAiTXkAzemf55y9cfzgxmVAqovgVLddrrRvwQ4kT2KjZiC7w4qqS9T9t",
  "key35": "23AKV1HrJAiGAs7ozb3S5V7L7oDecSh4DdxG3PBNEwPAvTNmtT3s4PyPDndMMuiRujS1dsL6SGKvwF8sNaZ52orx",
  "key36": "FAqYNPerR1bbuzghBjKdNWkbEUgVh7PZ3ngUT6H6RQgiEzXgYFB6qfqjUDVrne5eUkoYi6p8h1v1R7zqXhNrhQ8",
  "key37": "3kuwiEzJ2oA9mUPZvyETuHXxJG6A8Mgucyks5JfxQCPgN7muaCZMr36cHDogYvKwTv9bsVEqGwpNQ87EXvKytBue",
  "key38": "m9z5q4Rf5ANXAJm493WaySdyNKwxPM1QqKmFuL4mfd64re67D4wuKu3DB6bmuSqa6ucrHT75xmL3u4SveFQBUHH",
  "key39": "46kMJh1dHLHdYZ2dRyPtpuBj14c9mHYF22cEsF1k23a6pD4itcNsUTfS7opBCa5hhVUNw49Ae25gPkxHoA1FP84M",
  "key40": "5dYQypwN9PiU1KZteSmobG4QeZXQT6zfHiPdZwqZg9UHNTvAn8VTyQFqnQq1iZBu4UTxhPJkPvQTXN2vdpe3wVpA",
  "key41": "4WGkUrzkc6mgyMJ6kCdtJHMyJV61BXC7w8RXz1oD55Q2vz47fTuZjMvwSEiFyiiKdg6weYvLXjc3RpMRCfeEJsCi",
  "key42": "3aDbUVFXBYRoSutRJJA8kHvZAChfZHAnosNQxFrU5gW7GAgc55vR49rvCKASoGdHfHY7Yc4WfCSmx4Pcj8E9dCdx",
  "key43": "4wMnp9GqZfPxHVwBnLRxjahM2f87npTXNfrarWyae3mm2xY2iDRoFXU9ivKy2U4e6bDpKkUzncKD3sfmCDifvC4z",
  "key44": "321evLcSzH3pxHXR2QaHM3fWerh1WHjP1B1Ku55oPt9ydqMCB5eRVYumoLWb84E6Cu6mTcffyBXRZS7Kq8nyBUH8",
  "key45": "3p1LZg7YpCAuzCBh8PnUUengKc4Q5mHsGdWfeypPeFxmVXxC38AoP1zgs3L4ShSspMMUz5RLViH6ghW4dtgLfEhf",
  "key46": "Q9c22fnyFq1FWNGxr5KGmcP4iwN2BLPWQyhHnL5iiwgVnVX787uoH1RNPmG6w6arSfdCoR4FL3HwqiRg4c2WHxL"
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
