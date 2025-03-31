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
    "5KyHnU9esM8UsxMYos6oyALKU7UoAA6f5RBFzLvk43v1Ddx4rbXLb2RCoSNrKrP1jrrPAGFkFBxKSWoFjuuDMuw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "towk4SF8SfZJ6RvCrDSo3ZdJR5Zzv1WsMBZyHEjdjrLg2h9ftxwoXpoJojp6d6x21GCxE4BWAHKWYp9FD41aVmh",
  "key1": "55kp6wdioieEL49sa4Z3aksk41kQzVxbeM2NNNWj2kSQDdpmLafuPhinj4ymEZGmU9jgzBTCkcCDjZi1zQeBqidq",
  "key2": "2DuFGiyuiUA9MUAj26uqWGUWiT2oGD9RNuVdZf1PNXCDMfNMN4GdKyx3NXMwgu7PnBpHgyB5szFXA11FkoyK8AKY",
  "key3": "277T2dbesECLwxqNjS74gYbiLJHiGgqjk2r1atDmvwzh7frf2GctcBtqVNo1QbHxooupb6GJ2sqM7jS8PF75bAfC",
  "key4": "5WQ6DjSrbSM4xm12mPXLKvWscsTD9Y9PvVTjH3so4VtmbWRE8qNNpM5gaNoR2vecxTKfFE2iFviaKi1D8cSrauGk",
  "key5": "31q299PN183RMrdjVfmgQi3bTCtHFFPQuLy7135dr4hET4zcD8nLYYqYG34okemvNRMcwtujzLNAsXuUjiFuAKGV",
  "key6": "3PaPEFUY9ZYDckPwvknxL6to1KYnyyDn4ovixuARTbRwUFyxvqG8ukp1S2SVDXqjM3M15NyzFHz9SzyP343Ye171",
  "key7": "4LMi75jHesMsiZgwZquXVavsJA4MHDW8tKnZgPFsAag9kZ7K1VC5NbyXCdTqWGiJhZLZy94aZQdCnJTZdPgCjeuf",
  "key8": "3Au4XXJzQHCnjwAuhs5oVU1MNbhjbMv1Som8i6ntuMqPM8GKdtFbD9yUEFyqSkrneVjhUd6LHaCQ3jCryUqFZDFH",
  "key9": "2XrzHKTUXtfmxfkmhCueBJ8W1vzb7BHSFfhjUVCp9Pof4RCnQBKpbTuHQohpXBnuHqctT1bnCmzPtAJ2aMaSHYff",
  "key10": "591ZSjqU26sYK2LEb1FMYDogkXTpCZg52R45zicdPpYvcm7TWsdrUKmT9pMsRxD9gWS4ahQqzzrKrLLfLwyhKhd9",
  "key11": "2gBAaB3jDmYkboiNvT2uHZKTxcx7EqaPEwUcY1mg5k39aeoVZQ47heNni5MbfLDUXNWKGF52XiN4nXj7VNe53PYC",
  "key12": "4jtpTxHjstknTCiQ7kYzFrYEYt1q3RhCoMKGMGbE8MzHue7e6r2xCY6GDvHhtYxMEw8DwJmAaoyrcY15WkAEdJgs",
  "key13": "8EzJpCMY5Ey8JdF4ZwJVC5857jTFDdjwaXW8fEgH5D6DWAaebTBj5J7ftMLRmFXjy83VR6cqpjn4nG4cLZPPMJ7",
  "key14": "4SVLWkBzHNj25PSSPfYtxr3W8JRRzPUFNgmFxfn9KXeCezvnCR2b47Ctg1cn5K3dDjM5tFaDF6DAoVSDg4Atahc9",
  "key15": "4u6F8hg2W652Ffzwmsj5gnKPPW8DkAoqDnNtbPrVrD12gq8ocsDPtmNoR4jKep5zfDmmsT62t3C8rm9uuFN1EnwW",
  "key16": "JGSV83zYDxfBZDiBPex5PxmdBEPtELMFp69XbUHu2oXqvSurMykoshkNuq7NpPMqCyid2dmUjpaDV9o7T3kFpqd",
  "key17": "5LcsApwJs3FB2tdqwUTNx9xyLHabACS2NAgNwGATSiBp6P5bLymgyGEZRTYPnTkZs47rUHDbtD2GcsAdpk2kvtmo",
  "key18": "3Dzyy7MMaX8yu2FrR2PSxH5EZd7XGGEqjdfu2g167rm88ZjQPQrFrNUJQDcWacnUZGuK4qzmXkBge8yMCZNBJCAe",
  "key19": "2govme2ti6ZR2tcjYowsMNrNHiz8DF2Dvu4ygb9Cu5KWh26Q3wDc498nqKeDeCsJs6RVJkKsFTpmtFhZKzNAnzoL",
  "key20": "nL5F1tbvnHiqSoC6N8Ns6UoDsxJvrXbLTAxWCkfPRAUEddJ1fehHoL9yXu8mHx7Xdrwp87wPE6ZFsjbv1fSFp7b",
  "key21": "2N6n7BaarWQLH6iTVvsb8EYABETfwMiuZLiDJXA6ajSrALdyMasehMghHgHcNh4kn3RK21p9aA2XZ3ppSdQKwuC3",
  "key22": "21ELmKaQMKMaS7xGzyZpKpkD73QYxqpiy7aujgvfsLePY3VXuBaxc7aEkqN4PiA3F9da4AeP1m8X1pVNmw2yXNG7",
  "key23": "RcYCNoUJqCVJ6GTzp9QeNtxyU7NoAcpdpJkf94Esrjhtm898dmSuWWwu1yDnycYhAEwu1tkgZewMEU7nmdfBE6U",
  "key24": "4ng5BTxQxvHiCgtWhmiSUB3hz5HZzhnsFPJc9P7WpZsm1GoNrhc2TRcdJBkQ5JBvHW1WQePJtHdXxuFxBvaDR9ZM",
  "key25": "L5t9Yqe5VuEsKGbEnQ2RhHULtraR4oErDYsJhFxH4peTK3FWhsbnq6ytPRWbjj3N5gUy3dFiNo32PE3A5GPiGVZ",
  "key26": "2aXRERKY2NPYieoatZCLF5Gs19r3oMhZzB6NSCKiY9GwSYNG8fkmkbu63t9QyCBhS87gk5jPQiKxWaUgepgzUkyH",
  "key27": "65yvcAGWsK78tY557cbVxSUXoF5QwAUfVyF1HXonqjpG5YPUBR9HVi4tCDFEKmzW3YLP4CnRcmiX31enuqZiJGhV",
  "key28": "4m62mand2LtWH1MeLM1PD2pxyjUUNcHsR1SYhefK7r1QgTorNUfmn1nHtmK14hzNJMZYcUB3snWUkaja59nc5QcZ",
  "key29": "2qLEFmK8yXgnKbbz36UGqSZsSYaFswUfMSYk62PvedktNgzbDwnwEgjDg8Ewzh1d1Ahunys2hFEFs3WV8nAyxQ9",
  "key30": "28Qodja3VhTiykWXWKnAjGbY8dwe3jbQu3cxher5NCnYYs5mGaUhxgSKwPjwm9rRweS1dbFM2fvWpgiUBhvUygPn",
  "key31": "5Etb5QbZroNnmFhdVTnUHhEHxCYgu17cvY65HYofQ9Ve4oJQ6BXVkRrNy8sfomMEM1ogSWySqWgZbMAG1GCFNpCA",
  "key32": "462EkMQq8HiZ8E2sRGnMkimzsuaLcFw9kNYpg3cShLkz5Ds6Zdt2FHjuAUt5WBKwHM8eg8LJCgpJ9N6NupNrMDTw",
  "key33": "3T9pvuX5sMtn2sHRrgXbTe42TpNNodav18svgk8oghHLsYAMgYjw6NQWoYRzk4aYn9axXVnVNPwDjfQyCGXKzU6Q",
  "key34": "3evszDD7tHSTaJ9obHJfcLpwsCNxdeXMrG6c74rcBHBZvNmyrPUW75Xsh7LM3aT3J3xkay3TPDFwTwN3DqhWXue7",
  "key35": "57irm6k3NXVLukj2K4on72G2pCv9vuCxYt8Rec5gQLkF7pV4oYZcKFM1Zqu7YL8R4M18iERXvHbiWVebazgJ4Pqz",
  "key36": "JAzDKN4iaidnFYa558TFHk7Yoz5ZyHM4SiruXhiJRDRwTqTVJmjB791PwQKCvwD3JGZjgQSE9DCLEr5hDUUJbP4",
  "key37": "4q1RtJyNq88jNT618wq3huMsZgX3mcQ52DtD5vESmdo46uMuKAH1Mp1jinmKiuh6yduJhJU21h1LbRXPiQdoH2Fd",
  "key38": "3o2dy87sAogFcQBzsTiqgSkVgdWqn4x5uv29N3JFLQSKhyTjVVPD5NxMjemMYz2fedepoQvMf8JTNoguThotRCG1",
  "key39": "41EQenjBeRoLhDm3P95gVmeArycmb9g2oEBr1PQYUGBwuaJiaBp7Q4gbz7PJi2Ekk2QJhBELiso8yPHqiCWPCtNY",
  "key40": "34wmgJvTZreVKs8R49Xk123DWLMprv6arPCEpUF83Mo63mhRWhx14YomxyhJGdeEtJdKnMYE2t75Yu2ATG6fWm22",
  "key41": "2CdShzofQhrAZmvUNq4pvBWMZuNtU8TAUsC4sbF55ApeM3rQpKpqft5XUqjM7j8cRodSFsirasihLuTy8SsyQXp1"
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
