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
    "erk8CPYAJ1bozoqsukt83ZTGJLdAqbr2hvBapiDdCL43hcJi8FyFvBXgfBi3VcjYtP56dNmYyDSkWMAcp48Vq23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yk38erd5UCrezzUjzQRUGNx7NRxuVZKNhp6gXmnS7gwi2Ud15MS9W9S6di1awmEq4SVdPjKUh4UHaaDBjAziyMG",
  "key1": "57jtqvoRHhUMnUt4vXXm4RHD7es9NYzi7E6apaD4kuytCuRQdgo4tY8wAcmy1SaqquGFhx1fm7jPRpMjuv2mSgeP",
  "key2": "3dWoBdD43hNzRUDz1U9hWrLoxVEvdiy4uXofE6mY47BWDMcYhKdfJMbi7HZAaanjwS1FKSPsJ8a8jq5CKSSC2fqX",
  "key3": "R8fakpzMMcHFKiLVrr9QpsnsnMNB9xWPG2rRDbcxD346B7ZrqDWNDmtWxAtN7LJkSJPCB5kspvu29cHSJmiHjW3",
  "key4": "nPCwBcsz8NHswcFb4bb26SyJbBUgohVDvxCN9CKTiLF4Ah3vmdsj6haZfd1w5f9WcWfJkiviWMpxmJqrUN6BfZ3",
  "key5": "2z7fDwfq9mZn2rb9ayttLbPpXpy9VKwNN8wvNNJuV15K1fKXN7DhigFsqXRYHCkAN8tRmHffwQkgCbG7mWYzWAgn",
  "key6": "7Go2LJwkzMYoaLhLdUUo965rG8NazvgudVKTqJABLCagxnsQVSwQXia3FCyRBrFD3NDo4EmKV6qDjpKRK15Jr7y",
  "key7": "ahV6rJgPjyyV9M49uSsTD5HU3YRHFtC8z3ytNdRUfsa1eyxDxQdKK4fSj1w7q9n6LvwCpRLS2ZWbgPXP8cC4ciE",
  "key8": "5ezrM4egucbKsCxmKQzvtmjWkLS1LcC4n1CsjpgQQKLzUycpw6uJS3ZgyMb4vACLU1gMD9hPfmp8hwKfoaMTm7cm",
  "key9": "5DSj3UBoGt2dat9xyjcrBSZYuPR2o9u9qkeK6tzxeqn7WviKC9MiHAKojWSXh1CFNTfHW72mK2L7zda134xepDqT",
  "key10": "61hhkmbjBxiL5jbPoyBgKJEPoG5kZcVFAxxDihpvug1L4hmzFJFMNPqcVvT48pwhwMuAYp8DvSAXQoiRPR8JKTgj",
  "key11": "XG87GjVVsnKGxyixyMzPR1MqcrkvMzUk1VMShogFY8M2DhaRAsZ61TNVM5deeiMGU2irUHWG4Kxte8XbH1jLKK9",
  "key12": "3rGLQBZKryx7469CqKKynr3NxfvPMNwL6RUg9QbB4d81jNvXgw7Gzc72uTmEdUMBGsAqvGBaNtTR6UgSjBAfqUfV",
  "key13": "2EkHN4Btio9Sb88mtabPpjS7hNLJkzwuBM4ttcYG3Csj4HPV1gtdz8rQspwdgXaWeGEPgE4r3RZpZex4sfkjBrZw",
  "key14": "5Sd8o5ftCMpB272kZvfBWUX31Ks7TpZi9d9n8aYD8RS82WLpGBSpJnwD1m72ANdyjQYUnHChCZLPowmbpoYQhwwC",
  "key15": "28CmKtzi2xqQ2yULyPabdk8P9mnhGKZszNUnNfvcLJuXY4xNt3159TyMcspU1xL5rX7tPuTzfxJVxhFLRgQJez5x",
  "key16": "sxH8BUzYMawotcks4eS4Boun95fuRG2WMrpZyuaPU94nKvGdLAXmmEKMvRmbstapWHHRJ8VEujSXkRs3G8hLyVc",
  "key17": "W1pwSJtvKw2gyE7kXshSzQZbNC4cEZSyhXhX5RK2FNbqgeXp8tMU3jZoH23fJA7sEDfSKGgymUzHjPDMMPATrDf",
  "key18": "4ihxcwYm4F1Mft6EnMdTMsZVTxX1Nna8ADws5mWXMsSHyesfxPHR36d5E3dGsSsNYWw2uPxxJHCVfDuqLQuCuQne",
  "key19": "2dBQRiTSwGcwcyev98zEJ3SDfX1GRc9DNBCZPkumCW7wz2r5FCTzvW1UrrRu9riJMEQ3zWZBoBoXd7Vyq3tJ6Nr3",
  "key20": "3tG8EoZrp3gtoBmFis2BvJa674PZTAk8GrUXRe9rX6TfbnytoYxagy6soxKNkLDBc9SFa3sUwxJFJfD6Hn3p4iPE",
  "key21": "2vV3ptv7NCxcz26KXheGJ8wCXMotVuhwSQHDmB1wLBdhsaeG9Hza1pkukDnVtVBiAtnyzx68GaeDt8EXoMXs56bH",
  "key22": "2k5k92rVEXudg2naXAW45HLtUq5wtwmQ4ixYZ78jcJAeQtK5pPftKKEQEpMQhRyn8nTtB42RT9Qs3rZzyCWDC9DK",
  "key23": "5fWRcEahncADACA2G2u2bvAL8d3EzQHibRtXQvA3E7uhw4CXjKLPcnsttmz7eA3rLCAB9L7as3WbsPTYEQb5s7af",
  "key24": "4j14Nrn3RGA5uZoocdS75uj6hXWouo7mgtgXBQVZevsmzLjEpqprrUZrQYHYraWWP2L2gFVtDXUGjzTDJvhDWAbA",
  "key25": "YWBEo486UXi43hD76ZsGDDmjZbZoYGTcntaGaWLjzBvEcHX1JXq8vBQJ7Z15uHybWGKS4vd1SErC59NP2ZJW7gY",
  "key26": "vxLrBa3FGoJqWshwLL6AHAV4TkBzoaYXohhzELCgJuA4aWcjudfddhgPRVLFGBUMnoUt4yfXGRhtw35Q6UAMbC5",
  "key27": "2ETrLPhA2QordFSwwwgQhYgYsyX53YjWEaPHoZWVuVeD3nEQD3uFooLJxd5bmAbf5TjGFaRw7dtUZyQ7tGecfeRp",
  "key28": "4ckrZzzkAUnsV934LVLQPuBAesADEKG3sEfp98c66SmvnAdRETi61AWZM4aknhVniYX9YehEhJXgsVZMaKhYPd5L",
  "key29": "2ctodyQ2ui7KPYV8UanLxuCLFvByBarqXfBdKoAS5HyX4xkHqPKTGmwHyXV5DRWqzraiUuvfHTGwS7gi5jRfykXS",
  "key30": "ZHAUEAPes9P9esRgXcAdUhcnCvJVY96sk5hBGVNW2U8EPAakDfra5V4UXBqeWztcWnW7NDpA2RgCa66Sydzt5sw",
  "key31": "42EPrfpPEGfL22UuBTitACH577LM89ngeocZqENDTBSSEahenc8zAAn6sGiNacxU1SVVLu5oAdfpmxaWqsMXxxJ9",
  "key32": "28sTdZW9j1q9Mj83wexhD8ivHzi8JR4xb6bBqCVxVu3D8xJX4vJV1abo3XAHS7FyEC2ucnEXnVTT47vxjfWB8HHs",
  "key33": "4agStSWBP12tnMyRTYffANE7pwFheVP7WMkgZ53v93sAR3u12DTwxr4mcyEFhaq3wRUByKRAFmK6QacdTdRoe8zk",
  "key34": "4nGS5P1rm6D1XUZWnqf8zYHLfWJ7ZDhAsoTw8fGMTBhUmSST74TMKiYW93BBT8TM5Ry7vWrXQ9ffF3U8mwae5ShA",
  "key35": "4UBdAxZssx3wXheKYiwSWn3A93QjYQFNXHYdiw4zw96jkwDFJMA66zznkmZDEEZUE62tkW1D3Ugz579e8PpM8TzN",
  "key36": "3NPw7qqLKjC7cv8jgRVEGBNA67tWLfCZeBRH7Jke5CebguoqL2N7oN4J4TM3YL1EukTgBQErv7WvJipRZfCaGDZ7",
  "key37": "3wQJC8YgqaitJ9q2CjebgDXZfhajZadRRyLAkSKQHm5MVoYNyud6eNbPwyTCv9fscQgEMvcwAGD2XGpZ1UGbQix9",
  "key38": "2awimk9MmdJKgKBsZVRWQviGu8DNZWjmA3fgbVheRzrmSK19EBQFP4T1VKjQkf5PF4ByJNjnZJbTywp5SuaTF2iM",
  "key39": "5k2KNY9QUZq6VUVG4NXXuRGWMuVzpxdXL838txNpTKyQQu24enRM7WNTj15qM66qhHEAu3MD7yPiBvpuN2uWghAA",
  "key40": "5xE1CuDRL2rrcx1ojfewZUznuau8b1ZyD1SNnTN6vSKfV3TAYCTt2YHPLcSxVUwgJoHUaR3fKdjeQHVkHDuMWnqF",
  "key41": "5eWeML9SeN3AW34SbLchBCRYgid4NrGzWcYhfSterdDcSkgiSuTENH6EtF7vJgbK5GfqcrNxVSJDky3U8vwDKuDD",
  "key42": "2T9YFS2vYeqVfhCpKC6XaDzQvezdJrNhuKDuR2tAU84cfD8bUyq5217Q6rbPuzjT66EEMsJHKhFDbU5T73nG3aWD"
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
