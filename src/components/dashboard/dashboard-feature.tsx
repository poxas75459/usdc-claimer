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
    "UDLNRWK3w61k4f4uJFKiipctFwUt6e7AAn6joBAmRD96pPdD5sdgaDCMZ3BuhEimpSuqmJsWnniBoZRw3H7nQ2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rddczdDadyhHKvcbAp4Tr25NfWxDk9C142gBH4vnEkDC5cSyMWxDfxFzkvGdAiW3Vn713niR4Q7LkGehuyaz7b3",
  "key1": "uQeeJh1RMGwTW7nE5Mx5G7yL1uKGxyqUuKkXgftHFNik1QUxLb48brKvj9HQAxktzwEfGnV6StCqN7Es6WhQUWy",
  "key2": "32Y4J8iNY21e517bx8WTwEm6rcJDtuMYE47Z9E4KRFhqHsTgUht1ihSDdnwgY7s5iQy48SoUjXKNg9ihqHempM6o",
  "key3": "dYBG4yvqVrBBCHYC9FsRFe6XvmRdkD194J1uiYv4onx4Lu7tbY7vnDfgfEV3SiTaPAz35KgKbktYF7BZMmJkxy6",
  "key4": "2GhcASWnsYerAvhJkGBpB7xFAi9wXx5s321onpPCZAAeHfznxuYv32B2TrNUmFC7VnDo6dNHdxAmCch5pWLVULEA",
  "key5": "2LtF5jS9wNXUznWh7qWrEzosXijPkfxUbbggaWwsuQi9ceTd8jaNjFSMk8k1oTRVcafqQ1NuohpoHqUj3kvEp8gB",
  "key6": "FzJBku5VQUDCV69Wb1BW1wTQRjfedVjGLcnutNZBfEqi4LKnmnxRyNTyu3aXt8RGZecEfJG3z4izqZstfvbnFPU",
  "key7": "5NF8uoSnpKC9QkzqjNfTuHuxFVNkk7fzzkrFtrMfnKvmeVAeWr3Gakq3xwdMoASbqe9asrd8FRog1V5qmuke4e2L",
  "key8": "2Syjs1EwP6hPmoguhy7xkDxt27z84zdEuWREGNEMHZco1p8Wbrhhc3DRktcw1zP8nig9UBLoDcHf9ENBceEFi2i3",
  "key9": "5ie5vjGGhSYQuLK8eqgEAtDCfFM66qdGLk5mYAvMR5W4VYxz8u9b8VY27xbH9YQrhuGHniqy6vBY1tSWnY8EgWXf",
  "key10": "3pFPQRgtaWgfyzkPWMmHCMTLWFbcfjf2FriGdPp8LQBozGrwbDhSjchM5EMYCqjfzmL287RLqAvHSv3REmqvBkb4",
  "key11": "AfRy5iixvtpHJjoonRRdtFzWPKTfNxF9a2ouQkALyq5nNfQaFs2diq7RW43S1CfwT5H5rBmCvkiTHZAB2yknBtD",
  "key12": "4C4eCVyCjoZUEdGoS9wr5KozN2dAEaLCfJgqavthHc3XcGiogw5ELVCB9o1RPVFmQjVc75hQp9wruvGNerw5wvbD",
  "key13": "iBYxU28LN829K7oRNYQZgRtgYTgZ18onYWugZfnApgyx5LyCwyWkcyjDw35TbvNet7C7g3j9QHQdVgoZ6jQwo8B",
  "key14": "321ry7RtJ7sPQq7eW3kKYeeETAymTzrESWrVStPW3dcPUfmf4EAAvKmjHaYdnpnWf4D2RCxmUDLDhYanqVADP3P3",
  "key15": "5Ci3TC6JwzJh1jiewhWVmopCPuNruz7kYVuG5P8L4N5Bqxk2RJ1iW2gVUPRAm9FqotwegDFTcdEAVfVfZRfECvPP",
  "key16": "3BdQ1SQmxg3PevqNED8gyWPgE5NN2cQQNGpWSNMdU3b45V2BL1q1mKVGbywqhY1qyjBrjPiTnkmhvuLRz3FP9278",
  "key17": "2CwzAj47uHQjXPeRRCAvhzq2EQPEBQ3CuGbgQxHS2beYk9TW8d2QkgjweWBHAWFTNZkuWonmueYH1cAeMh2vFH6G",
  "key18": "2kgrRXD9TS1KfXK8ZzKvjaE4psmexQ9bFsgtGufGjf8C6QrTC3Q6X32TKoaa9zLvKpQFqHCZhA7haxh9JB42TC8M",
  "key19": "pwx8zQXDF7Rf1apg6hDVtYa9bFKvnj8KDznXZ3JxTa6SpcRnFTf45mB9yLATHpgkWWr8uyBsrhiwexN97tHkCf6",
  "key20": "2eL3oxvHd3s4KUq2qCwrT7U1ykmYfUbKBXGbRVi6fbLR1KvbNY9aPFY1mBtxvRMfkX14YQ5v9QNzif1HtZ7MUFKK",
  "key21": "4D3UqRzaSogr25jGeZkmCmSw6tLnfcoiuZ1nYpArk9egrXp2iZyrMx3MiEgvsMfXt4oZyyZBBtfdDSg4MiqkWrLP",
  "key22": "2G1TGkqvtrUQ9WeX5wGd3jofCfhBmPwaHzAofN99Q4HEx9gUJoz4h45ZrnwrkVGiocKMWn9axUDLRiHjsPrzgRzQ",
  "key23": "2BVT2Q9E86H5zztM6iaHhV6PpmjTCwZnQ49LoHKoiDm9n6t4hFKyDzwAgJsEgMe1wiyv1rjVBwGaWNYSCfPpv7bY",
  "key24": "2dZ4sH13s5kW8soYeSiFsywVLJnRQARTvZfBxz5Yz23vg61J5DZzETjxt7FEdTqSyjaKALyzyz7y7Cu2RHHFXFVk",
  "key25": "37v9AS38cXKT8kaXgxPpeC1KgAKzJTjsMgta2R2teZHziAnSpKBxs4yyuRSQtU3hCZQZgtvdzJ574jn4i6fFRT7U"
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
