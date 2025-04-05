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
    "FV2HutpemMWvJqyuUhqtjbDvRHP6XwY63FPQJ8zBEdG7BxRRqPxLVAJSZUWKBxgEPBoX8hgDE4pbSBQnZwi3dWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JeL79wZ4joV8NGxenWWw55Nc6T8vdheVmdyydUyqqzpKWaUdaTHUkMkmzMhmcqRg4YCkBb9LaSq8RJiHqM5m9yX",
  "key1": "45qPvKrfD8uqX2rpZdJv787vYfvqNAWyo8k8ZFGA38b5ZXLQ4EMje1JF1kKJsqyxMc8iNr2pKyu1hBwhuDdgytj7",
  "key2": "588SUjz7zMvAwfHNK7DQj5PbGh53qunkgW8Pew1Kg8nPPJTM4aHDwJUPxTpMm3xTeYrvRrC3eCS8uEAdfMBjgK5Z",
  "key3": "2Kza4WPMgdVTNRQQNgQHRiby2vq7E7yipfgcvfYFXgumKYp2ghmGzgR1jZK13wW1KRPEDGxc2Ck1o8k1Xt1UeNpz",
  "key4": "5nZF8HvrSCosfs7g6urEJrHunzCeC3mNumgMCnSjDcyz1TD6f3ey6uM3XaLtJdLCmfFnYLZo3FXRJw2jjuRV4LZR",
  "key5": "41Mv7P2fCqeee3TwTsWeDn76a92G8niGTZkgKGbWBdLSmfoWovB1fdEnj4EGvrnkxXRjPgEFyPWR2cRqTKaDLgNX",
  "key6": "ap38hL8KkjL4yNJ7Nu4LQMyfhgibkLD9UaDUFDjTZdrNqZbM5hy6SQfwyWKmKHiDKcKd5P3hNwzifUJEHEf9i7e",
  "key7": "4sjfj96utTyXWu9zgNyHJmDCtPJ8w5zLumJqMFLZZsaodPDz9imR9mZE2obd6QxgnbHBCdm5dUAU4F7iL5aDx2bf",
  "key8": "4LVTTtSFYSDtwNX1Mua4UHFSrxqZ61bosdWPBc8Z5T3FH4hKq1yvAErdL7o6PaSTLqKUYpDx1icbWi8wACxg2PVs",
  "key9": "4NmPN8fqCwq2EAzhd665aVrHUdrJkeLMU76UoDxpBsaavvXyZxF3NGaEUTc422fm6D53m8555KGXAWpNMSN2ejVw",
  "key10": "5taGo12Dm6jx3dWMRd8jwEBTVbRrw6TM98h617Ub7qFPFns3dGWobdQoisDjoZj5snLe3To9iZtHfBkUmXpcgYXK",
  "key11": "4YfRjvA8WtQpLqiMPo2tUhkmXJXak8CEZnLgWugEykVrH1qesD6vrz6wPPGHYkyjogFubegE21sGLcyqyoGSiRyF",
  "key12": "BVhfp3RoDaasfaaMe94L6qBXbAa11Zr4ZpcqKX3P5Kf1mLvL9QSPiAwuaF3jaGMGj3n1G43Qkivkx2UjKn2tZjK",
  "key13": "3S41jkGxLi4qfykNBpZmD5gdS3kPXJQetgaT7K46ij2e1VnyA6kMUN7jjcF2d97cRnVDBxizBpf8spR2w82GqCVX",
  "key14": "5uE6k5fSAQfHU2vjtXHjezMD7jxkefhT8wvuMGryxBNeySiseuTLpVLzXgJj3HgZ5tWqSYJBiM17FCXRcyXHxrW5",
  "key15": "5xdZVQVSkh17Nmo3kPzqdXvYJcogxCQyi8nmBC6kbME8KqTHb6RQa7qL93n98GEusUusydBrVhU5LpW95Kr3RYXZ",
  "key16": "4VLVEGBWEDhLjs1Z6cdfRchQqAf5LiY34WfA1JFhdT8jCjFoNojumstDEKVy2a4a1Tq8VDQHrmMhjt2Q2PnpNUqm",
  "key17": "2HbsvEVcj3m97UygQZGS2bwDaf8NNLcz8ZRR7M3mnPwUBPA9btWQpZ4p3TxRu2ACReaij32oVPmpKcYhYpUSyedH",
  "key18": "4LUrSokJH4y4vNXhn8sTZRQojqwBfdsV7XV3HYD1PgHK3XWJw6SKhoJTa7PnEuiYFkZaAoX2FdhQRkGAVwCYRFrP",
  "key19": "C4cn4dMezaiRPCJNpc84GdEwoiVUBNC5zjYfccc3hpgkmVXaNMBRzMLDcmHaa36XzBVnS1XHq8ZNxSUEDcvmmy8",
  "key20": "3boNKpmYLYk31mwFeTWKQqfpmmg8YVSFXbMM7fzssnRu2hTQXR9uyTS3cx2o9YkujjwA2e5fff36wZ29uigF7Ap8",
  "key21": "3QLF4WdPpFTXwA6i9EW2pVGFX8hJbtNVCcxyiMiR6cZN6SxapMkypP5peDhyCw5RBTVn32WdBFrMHqr11y8thTmr",
  "key22": "388BZzrmWw8wbY58AxFiiFvzb2uDWA9XVx1QAvMpZsWkax6HEh24XZfyTeUbsN5qsQQktbD8fnfiP3VpBhUzRdZJ",
  "key23": "3fM7iFgtXN1P9R3zskS4FDuMYhtEUUfcgdR8qRGjSuh3ervjM7cA2F3DK6p8zw7UoabvpvwEdC2HEL4je6utcSLr",
  "key24": "2tXTfQfn6W1jTgEpsFzLb5xsTmUnb7rStrahNrrRHJ3EyM9A8MDGdEe5Czcsmp6AJLLDytFwqGP2koScoEdRVW9y",
  "key25": "5pE9xK7EnYQudLMHkkaAY9yLwCvqDpas1AbcN4PjK2iAALtvjTHVDTH4nMhqNsb1tffqhZiwfreVoKBqVzEBdsa1",
  "key26": "oQ4MW6pkP7yxbEVwV3f9omLFdwGkbFfTnmZ7jwYW5KHCptpVm85NT1BUG2iMmA8zdpkFLt5bwGAeeZX2uA8XD7Q",
  "key27": "F5bUPqsuPHXayGTYg3TfYNazdenL7Cm4D8B6ZePDdRTVeZdBiLXvERkaqmZkcEdfAv78KZ59gUAixRC5h9GvVbs",
  "key28": "5A1vkeU7aHEpkauPZRy7FpBuJ55JZ6WijDuJkLeuHGQstMSp953dyARC14dNjiEVZzAAVGpEJfZq1a6iYWqrCUYD"
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
