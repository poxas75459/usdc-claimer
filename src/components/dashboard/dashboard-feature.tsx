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
    "2vgnWZtTpt7s6ZjxM5v9kTAbXF4z9fdWrSaGCNyfCuYMp5dYPPbwgFM5mGosJ76rdVCgodHRbEs5N4u1vjH7c6Fr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NVH3bfxTedLbbyLUCHc49iTBfHMLdsTaD2M4DZ5qaaKntDwdtTktbFY6Ra5mEjdE3jnnxZsJrdfnjvWKpovtoRy",
  "key1": "twKXLPG9VivbB8o3rb9yKgzmW2AggQgjd6YcAMqd5zVEftbGD6WJp24zWwYufVmfZKHa96qmkMMU7KXiFZx8jXZ",
  "key2": "2dvsZxybDhLwhK2oq4mVCVpDq251kEMo7dCgN8PVrJzeLrbE1vheMrc2fu1ywdyqhSz3TP4eDyinLMBnYRs4PHQx",
  "key3": "HAmWSDKsygF9L5iQDTKtR78sLu23TTcSCeyEGBScccNy6ZHUe5dFdfqMLkzdJo5UF8iUupZ5D9T56XS9ve8ETaD",
  "key4": "4D4iPnWXpVNMojnDvh3Qe3GKPB9fdGG1zNdrAEQYQxnGedRZ8cHECEQw6MhWN2eueMbA3DZ5FRpbPRTL6jcQ1T3Q",
  "key5": "5sYPx3acWog2hpZ8NzScobehkLEexTYrJg8ZQDd9KSekKDbgfGYmPizYxnbtbEmMtXUVE4dGHFByhKcin1eVzWQj",
  "key6": "5WqQi57i2B9vfmzyUNmMPGyAJhWqgq6mRXtYxSCUJUMkc4LeQAo3MJL6NGC9C9GrkH4ACQZCvhFYMdbRUrTWLehq",
  "key7": "MDP1HtSf8xbxwLoPSaBySdT2GjkvSQ8gZ7nvk6Fh27cSnacbCUzNcDsj6XHRyrCjbY4ey91jKqVGM7dNakVkaUf",
  "key8": "3sxnw9dVhgkq5JjrsiFLXtGTgVGcqhtw98cZExmYsZJobN3qyArVdhQDsizLNd1NqxSTv8DfPHnopJkCrDRQKPQm",
  "key9": "5rzYkRA9spYDjU923QAkcgw7DCsh4gtJnsNX28GRjnZnMrZ9AZx7u45MCGMr4ABAynjoG2RCLKbnfSMGYzPnWwsw",
  "key10": "weHSa1c6gQLps9Dbn4WtANdP1rsq6DDXwjRkpFTvCSeZFiQSDmvHF1fnJufdaVohBQ6Hc7jKLYYLspww2CmSiXL",
  "key11": "43DrWtQ6TxBAhCmJGvHSFQvp3adtVnWajVH17c4HEGKoQqZioYAujfoErshYbyQVPxri7VEQSFhPHqdnAFsrehk7",
  "key12": "4TcC6MGG3vWGs3Xt3NFRJ2v3aXWqigyjjio8usG2fiKNNd58CRMUidsrwviy8YWVXhJumXoeRw1QWkP2CLqfZtDt",
  "key13": "5QrCSfZEs1K3Nok5VktzmA32Bfn5ZVP2NhaRxxN3K8hmgXeGUKhckWe5ZB9ue51mxJ4LdRUkU4ZZ4bSj294gPUTG",
  "key14": "2cUyToNZkuBpDyPCGyBGFCb9NmAw33XrxsvHEcus8AYvihWcEDgPjYNQauW2pmH69kWkYbkFnZFGE9SBPtsFaJxd",
  "key15": "5Jr6q3Y5qrZSU9steuJR4bRVNeQNBYqESx5vH7st9iwxNuykYi34fVSXdnBxuPFzpWPqLQvJFQzf2c2dq9pbSpq5",
  "key16": "3W6AR5mbvHfzGh2fqvfKcT4WnHB9JX88GG2rggMDCgbh7vs4bDdxG8VW2fmEjj3o5663tb4GuQomGgZmJUAmXmiR",
  "key17": "3XFwHrErVaCwebHfq3eY14nCnEz3sN1Uzamauc4423rVe2qJAqK87jy3uZPQifyejRmmEerobzXh4oiQSYottftf",
  "key18": "Ny7monbwsKwouuCGSvF6EKxKRyvtVaKxS2jJuVUX1t3UDK2sEMNoDmQwymZrZ4ujAZhuBX9zzJtS2rDKw5fHsju",
  "key19": "212ZuqU1jmfcXXwnrNnqRm5JHzkq6JQtaCEfRdUFQMBBMCZRmK491BqjYvG4YY65DKmXvbwyyPKc7vGZR7GkUkrn",
  "key20": "nGMR6izVLhakiQhQuVbwdW921KHsLVTcMDMSoHy7A36KSfLa7fGAAfpgPeZKvVrB5afFZpqNhDbqQGmj7pxzrP1",
  "key21": "5KuYjrm5oRXZXBhU9EJzj14sMM2aEqiVBiBLeePUN4FVRZ6v1hjjVMo96QuBHbdDq7FU4EYULGBhKgQS9oYFz5rU",
  "key22": "XZL7rnVVW3458CeSUBednqEYmexgADADjgmKzPJWHwfPJgYJHgT8qCaQSUyCszJFnM3NCeXCy7aYDeMamS5utUr",
  "key23": "5T34j7y8eSCYUxGJqPJDgQmWGaffmiSCZsG4Quk5e4pasKRdiaVsFtRhDr6F2LDRMtXy8bwupasb5tyRRpywQC86",
  "key24": "73iLpZUVMfpsSqNmV8ZZBsmSXuXnhcxR1BcuXSAGWRUheDZ1NWDfHBADRm7Cpjai4WxJEMKRju11tGSLY9T8fEn"
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
