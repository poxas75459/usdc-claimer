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
    "3mfwHUHrZE8BqycMzSrFy6yPNjCp39qXfin5QaAw7XbA5wzwDLiQ5ZTgFj6MEk3Do7Jmw29w9rae1XEDtJB1ta3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQ6dMuSG53m8DEddfx3MbaJx9yrdDJYhGbKTLvfeEGQcDVkVMPuPEbrukidbj3ankVKanwods2mKmtVd4auNqBN",
  "key1": "bc5Gc4GvpKjVw3fkGGZfnFu2H3eG9gmpZWaT1obVLkyJ2nCPTQrt4Zp9id16Y33m6Xu9XcuqAa78P1cKrkrbB2P",
  "key2": "4ewqRe1qgGY6HVr1PUt7Wuq4XUECG38bgCcn4kHW9v8wwjHcdr1saSGHhisLpGSSVfyX8wGbygqAPekapDLrHDYa",
  "key3": "vsT8yRD5ycehtrTACxCAWdCEudWx4ipjUYWqZKNts5Ze2PWPnfwpfrpMUzzxvaDjxLrqbj14QCR31T7jN8bnz9P",
  "key4": "4rM6fUzHJJQrHWq3jGS4iMnNQ36ZyrXVAyRCYQTEphk4ttwWwADKMkNkxKMZBh9BdUJ8VgJGb9KmD6DomQEs7jZF",
  "key5": "3orcvctxbgKS9hqNAPanRBHZ798eGknXJFUHhMhASB7dxoScYGhW7QvwZJppjHFcRPubcBqRzZGHNjVhCz1VxXNF",
  "key6": "2GwqAhW5Y5ZuppDAVts5LZ518Qj62NRKQUbgeajAiuPfvLqbZ7RLkKSP6qVuLU7Sq1sZPHvaGfLJPAt6h7tPM9ES",
  "key7": "37ifxTNsqPz6WFg7oGgu8bFBAyXuH5QAYvjWQvf7jnJ3CXKPk2Zn6Gex8SSkPnREShxFCaUui9nA3sZ9KymH4Cer",
  "key8": "4uXBVwuvQ6sinTEQaSFrNaxuEsagsSAGh5ssKb7ttHr7AhsZwRCAecJLwoU7wYLMPmkxz6DkQqzT9ixTQRSmRyYC",
  "key9": "1DMKEL9LMuoqugxLmoELsXj1VXufHf4Uv7Bkq9M44E6fCwEp9kNQGpudsqDbhWfHFvPHdEoZjwhwM2QFJhjUspT",
  "key10": "2YLJotBCEpoxufWkhaMxr9S8kgBFLQSGkrNaffvsRoNRCgTtbivpdDVH9Mp7dvXtZUtGXKVxxPk27nAgYMMXB5T4",
  "key11": "4T8V2gWdmLYRcYmsBfAdN4zTc7ZREybtcNX1wHtGji3oMbgp7HswJYpNcawpf4rhH96WwnqhZdaZAwJn3uW3xVMd",
  "key12": "32GuSUciDCmVvtWqT6PDDEZ5JEUutbjDgSSmNYFZER22GeZS6ts8yZR5jbGw44wSTh35XZPV68zgyPEn24A6HvaG",
  "key13": "5yg7MWjmtsefsarx8PaXDVqEyVj2xjzX4EJiCv6t4BjtBv7wkTQSuKaZoCmVrRQmxAoBfJz16Y1Ah2T4e2FkFpeD",
  "key14": "55T8JB2dVDPdbYWqQxMxVgR7tsHJj29S4xejjAeBGkmi9g21gYdKt3ShVFZXUyXSFaCkW958emfYhmyKatvHjNpy",
  "key15": "34NubV5LASNB28kMoVkf776Ei9NiEvhXEsqGKQYp7waoMKQkqqeoTbgLQdk3o3Y9i48MBS8WMjq8qoJbovGuWWkF",
  "key16": "3h7jkeuDmp2iz73xRuN1XrR9M46pAAVeq26rMbDgkwE5AsFM9RZHgPLdZND6Sns1wtuNQ4dSjJXf5afmqUfNyAdx",
  "key17": "uJf2o6NtTHkiT7p4bjH6udomvorsBw2GmeaMtxusoYR45udWLoAZD64EqWN7cjoA6v63TRpc45fLchDcdNXhfSH",
  "key18": "4jgXZCVLtw64inoKAxQ9SenCN9g3JCdKJg1EnxNhT1K5VWdX3Uojpu5LV5vCMfa2Z2s15qFfvJWPT8rNjBKuMX6c",
  "key19": "StTxmy8SGSdZQvKTEdBN6Gxaimr4vFbNcuoZWrT5wQAo5Kn1WduaCZyAT8Z8PY3fpqTbqt8Hw2DQoifG1ou4nJg",
  "key20": "3ohGN3rC6Uo6vb3xcme3gCbDnjFKoEbpSD24AAK7J6Ry2zfsj8T9q5adLH4z3FzxuC6D5LjNjgwVxjbT55tHhhjX",
  "key21": "43vAH2zBnLhD2B7A2ATttzatXvAeNxRxbc1YEKWXqL5ExLwqQa7C7jsLmaUbDScbWPa83mihaCZFX3pxPEzR1tUL",
  "key22": "5fy45hvxpK74hXpPnkrYCrjLiDAhRYh25SRTNPcLzs54zYAADqARFMUSDov3LYCmB1sQyhEq7hshhEDMYQcq99D1",
  "key23": "3mFQuyKhis6yxsugYjjJCrKmDvoFwBt48iFL2V5LfKwnE7jAzG6adPqkQa2mGfUbPwCMJ6MsrKouFMNJCjXDsVX",
  "key24": "2RHxSsbkzxP1AzrKENJiDvAtLgqMSzc6AJFNrDhdfwUz1F24EF5XuutSpMYcFS5FST9NrmmCSYWjUwMbbwhvyLdj",
  "key25": "2dbBhL6pyC76TRCAEJtkGzZPS7vNVjTezGB1XFYKsSoaibqYnUjNvdKR9nXjZ2uaEVxPyi4MT3HMmvPpwGv39NuJ",
  "key26": "2Ue8CykwgRaLEeW4TPykpy66781AvNgSwyYwmZkHS6BzjGYnZrzJ7D4qRF9tvhE9XNS1dzbMLTU5NzGKp5EEh5cQ",
  "key27": "2amhH8U139UHWJgxA2qtzCMrtutJuF8GyAgDvPpydZSzCgUuBaR9jsG2E7iutwxxQboixzCBAC2aodwC6bT1JYvq"
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
