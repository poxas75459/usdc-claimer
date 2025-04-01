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
    "3FFAzrRsJnkr7wMqSW7oUSxTXjguyXK1MFrjHX1Z8yVJTr7Fk3n6joUz28Uc5XeG9zBjffJr1jsqhvPruePPg1zE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5228ZmBEgQonuvxNKxHiBnYE5u47A56B7qHAPBfHtyP94wjVLjLqkQ6xSi7QnEz6wPuNewUrD2NT3NnS44xE2eEh",
  "key1": "52CZeoTLERZSGJgR2PvQELR7wCMSefa8PQBVN7abkav7jLCoAYGCPHTqA4HpLdDHU7PVK3Nv4wq4CeyJw4hvQnLa",
  "key2": "5noZCqjwNcJGiGvBJaq3BwkGHjLieu4WUJYmKMFFwzTfCm2zjshnWa9jcz6h2sj7zRnSExgWi8BX6LBWbq1cyYcx",
  "key3": "5E1aeUn94oCPBdX7TQecNWSwf1VMiPfYZVKBWXRn6g1uJhunssQGmbW1TN4f6cgonMi2Mtps6RJZPvSi52eKSunG",
  "key4": "5g31Y9PUJgkPUMf3tzcpjbbtSQdtNwpX7CrK25746AuToeNytBFbMd8e8YtDc4fvDfrbZDhv74yaRHLZVvDdj572",
  "key5": "4YweceUJGkRYGi3nrSHVFTkvGm1uqES3eiSBu9M8PGD9VT2QZbE5aTyWsxm9JdWg94cej9NMiCMXaHW3f8aTMATh",
  "key6": "67Cumuv36ujuoQDqCAxCEJeyAdGztfbBGRTJhGe3vQ2PpWB6LYSCcZu941QBfiuFehVhx4fyjKHtkKevRAirEGdR",
  "key7": "3EQPR69GCBQE4aBdcv5Yv2QhKrgKTJvzBTNHGXWGbM6UUtQo7GBqSQk35TsPVjvkhry2SGBvXDU6mojSaigw5WZg",
  "key8": "4N6uvxyrhguJ8znUNUJRwdBSGkbA8c9S4gpJFFF3Nd7CkEQSkcD8omdPm1TbpS3Vq47ZGw3jeeVfp9zJtwTUkuqG",
  "key9": "2uCap2NyeicCuUxAHdbrQd9QMU62ipks1eM27GjYsDhkELCCNHDf2enCP9n9deo43EWD15B933RJk3uCVbK6G82p",
  "key10": "HVBKCrdNmHyNK9JkdWiHPqFJrj8atnbTzqqMnq6FRvtWV4C7kE6NKMx8JuyDDJ77YmwhqqdGipzn8zJDRoZqXxi",
  "key11": "3g8dEeSMWRct5ifGfznwF9nQaGg59jyRPf3X1Hg58bFs4jgvA8n9ChsEopgbwE9axofrSUbd26G4eudWdDvneL3A",
  "key12": "5uvsZbjhPUQ5DQSkZqnWk16HviGH9pk5P8vGHfWyixKM2Drhp2mmQ9oHTohBmMaYL1DN4adViCzdnvPCjk44JT6d",
  "key13": "6C5sTCdSKRaESX7JEkVj57ic6X1cxdZPWkQvFw2zQxuG9Bj1qgaGLzjaA8kK5Wf9dg5ML13WcBDfw5im7rCLQqj",
  "key14": "58hwwy91b3ix3MXrbJxGDAvW92msMb5wwMUT9my9fSSDR8Z7Vf7LAsNTe2jjeyY3dC4GkYBwKPXwe2mPj8RHoZZC",
  "key15": "2VtJif5RPyGxEvEQUFyYzHxvBo3ztyb5eqLDLnpLmRN1KJa267XZ7LvUJDirH7T5tt63ZBD1BYGavpXtmKUqqytN",
  "key16": "9pstC5RAkNFqGfFdMxNKv7RQ19iKYoAqWKtYUrwdr6enSAjjm7MENgvQkSNL6rWHtiKBs7R2QBuQcFRwKwTe92e",
  "key17": "61sbWSQ9WdX97eHuWj3P49hDdBytncaMG6Y8iYuQaT6uoxhcvXvpLidYwx2AQLHetCuYrpULWErbkT7s97jdrite",
  "key18": "2uHUsSPGNdCBqHp3nyCg83sg4T54SdF92axNv23d3Ejq5MHTtHyKBp7soBDY6mJeEgdzQyeaGRK9AR8UP3EUR21F",
  "key19": "faMhYyUToA1hpaUNdC43PEjWnXhmMsLkCNmeX1kP3bsdADZXPiGtqX1zLgScjTDXooxi2MsbvJRSzBHkuP1P9fo",
  "key20": "367kNNG4xjGxaGxgiYXFboDNKAgxmCoikaDefvDr62gWREMC4CWe25oaDNyAx782MjLkpEhquAYXdvrkh4ixEMPy",
  "key21": "kRtVfHU3UbutCEFX5NzGQ1weBbwc2hwPMEqkwbN2cnN9YjKYts6SVjDzGMrShUXefvNHwRzzna1WQtsgr5hJqsS",
  "key22": "5CLDc8UwAHsqrc6VHQvf43UuXaUjvG8w491ZcKQ7ntqZsFNtDprWok5xnCooQR12r58K2G25QQXTpiZUTjXik5hF",
  "key23": "2c6294WmCQ9bvRKspx7uAa4w2g7xCVft6qzA8At9b3yJK8jzKY1EBc4zcYwUJSGACVRtjyaQbKjm5MCB2qUyvEDV",
  "key24": "2DY1RBJ7bdRkTWRpk2eFy731GJHTu6DZ3DRH3VeF3X4SeBkMLBehdNFqUJgNTe5cvYRhVK6Fq5vyN6ccEJbcT2TC",
  "key25": "2eL2qMZJzUsxJd3R2LpY9DcdBRDxu3nQrsKJTPeiYmdcsFtQFfvFkzoZreJZHUmrwBB5FTFyKoob4FebgNqPktrv",
  "key26": "62D2sf8iJDJJzfgb3yHoyi6aHYsqsTEZfHXzNpjdBnPh5WUAtUiwQftrjypGGbiusxbf38dqHjNUigZEw6KoEgh9",
  "key27": "58GoSjvPzEsWpHvxQvaX3Xka8x8zcYAsapQyukxurWhdzNqRaMYmTxHUVHtkCfDTCoQNRxYkfxiz1FR3UUtaqB27",
  "key28": "64abi3CV5MMGrEDXKi6aHzAae91vWnu498xNk3pw7JPVrKhJuwJ2ZvvpoKQvKatyZtke7v5yHY97xMt7EuGpb9ca",
  "key29": "udvQtAUVisJhPZMHnDoCFp2YRfaMHUpMWqeYFVwdz2E9Bw1bNU64BZwNow2EXmctg6x9tqjVqCj7EUEPp56YHMd",
  "key30": "2YNUXEeXvk3BQaCy6J51nyk5743DhCFSyA69FZvYyf4CexqQqaVAjaPjYmHWv9i8dj5nXW6LY6oRtFZHTH5KJg2y",
  "key31": "35B2VJekietErNMX6BxVmF3oXSDeXEvgBb6KjkFyPxLDbvs3mWQP2ArRrSym9cxcRWfVPtSbPJniWDpGXPUYhw2W",
  "key32": "3k1B2R5ZnkUtvMH8xHqRZdsgqhuHgP1K1aHFB9mss8yHKhgabGWeBxzmZFw6W6yu385DNJQtGsYHNPRKRZnuG7zi",
  "key33": "4hYuATrLNZACQob3khF4xPihCS4TnrbR8PcNpeTEsMu5EfjGcvcUVoynJrvGURDd1PQK5sfS4iDocgN4VR5ukUcZ",
  "key34": "2HjTGo2wtbuDuSskJ1aqdqkjHapsGtG1cgf6N78q2cfWaeHNhPWbd4wrzqc9E1yGrmhwn4wjGxjb5YjB5Hwq6soF",
  "key35": "ZbNuSVFXz3FHDg49Mn9LzqEmkYckKCXEJUVYLcUfWpuYoDhkGQqwYL7m51EPmk5N8neajV4QDbVBQC5qQ856zL1",
  "key36": "4zzVESHSNzuhExsa776RaUKk35dHENpsoXDx1tEbEuRuh9ZgTMkz1Bkp1n5P1fp3nVh8b1uPBTbW4WxXgAhV5a9i",
  "key37": "2Pjx8835p5nW9LZTKiBTegUF8Gv3cNyZzGZiw5N7sVr5ont3ytCehaQE3UGVWWao9hLXEmpwtBWT6UpDLuMUwWCZ",
  "key38": "5q4joahnPduPYCgdVxLH98FuFheD477PvXGdwniSC212iLPQihw2Cc1W4WrZ94yDc9iMF79XfA98kriJ93f2Pq28",
  "key39": "7yYJDdnfAGaYoy7q6MWKhRFtrhtSDYX8EaJvKTg9HHwrdCY6ojdxaFdkfNnLVamBb6atrVukxosj2NZrPpKC6aD",
  "key40": "3hktvjqEpLAfd6iFBHN6qn2ULVWWm8LWrMkCx8NdTSiWyZX8Zgs88Sn4srn9HP6mmsDQ5aVLFCDdzU4GG8N4SBvK",
  "key41": "5mpHp8FhkijL4dgFoGaCHE8wCrBDDyiZ1r3BwxRfLczRQK72K7VkBdLs1onbL4GDbHa89rQpaFZzKtzV31QMYpiX",
  "key42": "5uFkQj6cTeRj3o1DdqcKTHNHXt3kHmR6L1Li7QVx3zGNqsgBpYRGpyCu58mT965KfmCgWWWQ29msYhTWdoYYJAM8",
  "key43": "5JtZJntDdeaWsymd79NXBPGEPhVhezYEo1z5LLxKyrL2uJacaeCi2f6yjEF54dXZcuAjfGuSnJZLEhZTHgjjderg",
  "key44": "5urx3KV9jrZcincUFyYqkBQLkSjYEHj1w4X1CcxbJqXzkznyT2hyrae123DuJ42SDKW8VutSCRHGHZPN2dNWhs3S",
  "key45": "4sYQGbtMVbaqr8qg6fkPSwM7MiHoA6uNmfW3iBHVPeEoososuytUt4GJba7aCqLzndvtvmddKWQnMRPBYtoVkHWZ",
  "key46": "573tXB9cmJDAkoiub291ypGUosF7mzCZQanu29pioc8ZoL3imjuwmfcjDZHsHDHzxAbmcJj4jrBXLVDK7b2XHB7D"
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
