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
    "5RA2ycVKi8GnJXhD5mfkoMgkbFN1TSpB3VqfLwAn7mr2Wx3rg59TUXws4HrBrU3AfdTY7A2NQ8Qa114tUf2aLCvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bQrVf1ySh4LhVvfYcFET9grNL37BAhoBZcVys5z2wJkwCYR2ntToEaD3utYvreZAw8C1A5Td35Mr9aB2WAT2wep",
  "key1": "2aBVcbhiqxraJF1k9EhCbf2yxhRRYhHjtgofD1TEohLK76dntf3yF2Kh3xEhEiqp1NcREG1URCD9mppA6Jgu8HU3",
  "key2": "2LbHpJNsYgNir6429peBfg4TXrdDEfegcD8oLLtoZxc8fqapyiDATb9jJiGd1f3HioGTyS4bwdfjBJNXUazKw2oV",
  "key3": "5GDLK9sUTnLPgQgKkFy2ybMzuS6o3C4meJhjwzAmy5iPiPaq8Kmfus2VSqAhkAy7bfbuWkbsAcuXGrahdo2NqFKg",
  "key4": "615H4GAda26fQeauomndedrjqsvCKZTdn1xTFd6PGN1bAXbWXoneZjVPMui6Frv8msh8vMFtVu1TyocLMafyr7pM",
  "key5": "4ANbzNfu6dPMPQMbWFgAUXJHxF5e2ZVw2BwsuEB8Sf56WjxTBNUFmH7t4o1DS5eb8P2JdHViF6kGtd8JM2ZGF6Zv",
  "key6": "4qimsJVUENLXDhqLgaVq9FBo5NjBJbEZ43YfjTQvy9z2werWEK7u6hfPcx87xHRh4N3jGe7fQsW57xPWyToRxkFF",
  "key7": "2uF62YDP5HrqY5BGUnjKMkUeSkhP6WmXfyJ8D5eyHiXDeRMfN3jmBvkrxwhWtagq8ABkmyjipSgNS8UpT39WbzNM",
  "key8": "LkkkRwfxT2qSnUxJWn5v4jVCpWzQhPbXxeSpDtT2LzLy785EPv95tUbqRB6yHbHN6qmgAJksAvi9G8kFD7TNqc9",
  "key9": "Zbo24kEMeKxc8oqnqJJfSET3s9FafzHVxYfpjt5e196a8R48tiUk2cWGCbXFTPvXmfXartTXY5R6fnrUdfotoyh",
  "key10": "5bxrH7VFiFWKkjLxWZAvFBFz5hmswdTYBDSPXB9sAsTWBMPzcHqE6XjvWdNg2TTcWSacQQtVAK1C3VLiwUGiftsp",
  "key11": "FbJEudjvrcFAiieczvoshVqYhtGhKBKLDRSrNH1bDy4oFY1U67faSqMnAwFVegD95Duy2Pz2BjhJ2GffDd6dXzh",
  "key12": "aPyit2S5xJSNWnbwvAzhBEaGq1RnoPW7qKPXJGg4Jr2UF4HRgLMfySYePzKWmYJChTv64K75f1H3JAzBqDwL6Yi",
  "key13": "mthJntpBMrXQqXdCqwBP5CcD1m6BdNU8BCgxdmHuiKM3EnLwThHmdns5kAQQ4M9M8tGRLCohS34GuJmhqGaw8yh",
  "key14": "5mE5gjgn8PRHaaANpw9mvnehpKizNnnbcA45D5RryAY48tti67w6xnQgSLytG7K4S95haBLGndwLhhFRowi7Xmar",
  "key15": "5ajBEowsA4W4JwEKWp4KYFSCYoK3nNJeZbu12oj3iho2Zs7HaQScuBqL9Sv15hTCFuX86TZ6T8FYNCHzP1KZedqa",
  "key16": "3hJvoxrSczmFbHba4X4TtoqPbxTNDHQmNYT3G6L37ie4cqQZMxSSj1o1ns37pxTofLbGQYPzjNrpMspsytjz5BCo",
  "key17": "4bTr8w1vbCdXSUBvZX3KGMyjknkar4S1Q5zAkg9ZyyuVm1wwE1xJQwmAhrMSeaVxGLGFCLNK8nDSbaebiRHEPsVD",
  "key18": "4GckUZGLGRaCA6HEPrwCaLarwV2hJZHbdbLbwiXpC4AVseXStR5qcFtnz2po8UqzzbFgyXTWtHADH6ht3uFGgB2h",
  "key19": "3RgWoPrX2aKsw51EdHjFHXS11vFmRmsq5fY5hBook3MUint92XUg9W67Z9AssnPJUm5CFaFKAAX9VD1y3q1pSh1W",
  "key20": "4qKbqAiszbd84GdGeNtXgMDdDJ5sRgQoBCDu4RnQCGZdXYJTmHS4TZzfF8PCNWNwF8EZnwHD5RS3qBvRBYAAxG3j",
  "key21": "5sjzXR7jLfizYMbErHJWz2A11czfjAysBsvu2v3NuGRC3SpXJrK8W1LEtvMgFWqVzurhHmiukiiQ4ADoQwjY5Vpt",
  "key22": "3i17TUXY27NWXkkQddeMmD4HjxKgw2kAfBhCaebKuNbyz71p13QxjitJXBbctvzKiZFRzxYBPccBKNfQHvWXrmFf",
  "key23": "2eeVwjNrvzVAJE3rBhimfMDaDzKTMsfgfWgHuLSHkQCZjsjYb8bCiZtBA8qmKEpaz3NK7x86M82GM6MiepU3rHGU",
  "key24": "297jzNdw1SV6iUNBvBr8Tg82W5PQQ725gLbtZRsHECeUx3xYdU2Vc7VZ5nDJFUnMixN6dWeD4qAcBx4hygKEfRxS",
  "key25": "2W9sduNWim3tk3WkJVmAdhwdkww322zQsCxXrU76qnr5ywKni6yVHmDq1VHuaEzibL9huVTAfgjnSskdbFE3R2wd",
  "key26": "32Pa4KLFn2tQJMUtGAMB3iyvuUQCD2yiPWycxzt6NpabsYDkAedMmT4GAsT5BC9ZhfGkVEEuzhAonKAU3hdASQH7",
  "key27": "4JZ1kEsXNNtpZGHDTCaL6RY8cp7a2uhdjbTvUbt4fAW79pmcPbEMQYUhsxfpKnyZEeUYUxcLsF16a46rNg7qEukA",
  "key28": "5WZUoDjBLTKwHRoyFqAM9WtkMEBzeUDuxoAmouWdN51f8FXaHDeUQLANnLShSt8va4VgVK83GGQpA6ghea1j8pkv",
  "key29": "5WTrfE9XvGvLT5muRYri1JyzU1z4rdQ2nqhZvPnUSQHJTyPyqj7QD85kehkKzF6zCJQcxzgaPD7N1JSGtLMiHzq3",
  "key30": "2VKH33Aohw7aeKTVqufFgCDWD8wVBTwvBzF6R728anmV7XyJL4FFTKvQSk4vDwPZioVxx8nQXetoBCwWWxtLDxjL"
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
