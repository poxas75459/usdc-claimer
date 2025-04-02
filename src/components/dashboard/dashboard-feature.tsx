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
    "4WL632rPMYafX9kSpgTpf3B1zsv9ZWaktrVWxGUg8uiTDQzqjYQeYFxM3ev27q2Fjtp6WBFaT7fYrctYJxvv57p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uVgCHEKzxusB6CP2oQ8WojdbsM3z1NZpPt2PuFnforsr4ZyMJJYCmMLqF2jRmgkbRoYj8DQnKxMFXxGF5eeRyoD",
  "key1": "2SGmVWPGWbfaTFy8G3HBWHECpZCrceR2voy1ps8gYb2gGrqghBs2osqerEaUSBwDaic2BadoNJ187NNNJSNrXrd4",
  "key2": "3GMLGMvGP4xB2TN3uPFUXvuJfq5YD9j51eSYCeFwPEyDVCnUNDj93DEhUZF6PbcsQwSfQYcnAn97Kt9nNpPA7UsR",
  "key3": "3cEy5hVFmDUtRKhMhhVoUn6UZzXtANbZFRwEeMzrC1ZzUjQLoJFWYyE78vSTKEMnneWW8zLqrYEWx27x5tC6c2rf",
  "key4": "4xqZUEyj4W3aGTPKAxnhhXspXzUw41kh3vV8n7VU8uPvy6L7Nopp482aNbGneVVHv1GXb87TbTJGBMT44oigHGg9",
  "key5": "SggDV3j8K4tK1U6bSkUVtWSK6ch5aF4ddpUaB2T2q6gDAu4Zcwzt6ZzNsPJfrUtfbnwUX2kf2GUJRvbyQp78YEm",
  "key6": "emenUxi2y68RMMAz8vGD36cX2uGyfaYabJqKrJj87z6Pw8mtNkRn5J3C13Uqg6ehHGveKLBSxwnkVFdrxw4JwB8",
  "key7": "zVsyibC9bWbLgZ58EjvouiV3vkoVvLGRzCADTKduHxicmSXhiDxinhQeQWJcfgoQ7s5kjvNtJhbizp3muhSJZ3U",
  "key8": "63Hmm8tJ1zc4KuDpioYK99LnETn61yV5FnLofHZL8uBnjWYJrcHtKMwDLfwGrtxLuqdWipEQEksbdj6Uf9adRSnE",
  "key9": "4wigDU8sYw2txT2AbSQmv2SRMRx8xtzNSv8pPn4dzeRKKYxUhyubnLDtYVxJ66hCN7Hv3e7cPbEb9b1Zf6phyfth",
  "key10": "66SQRG1MgdQZJcQevo5JKsD9u1XmUQok21yCaf23DCs3XD63B7KBsAg4kKMpAQAPz5D1DA6h7DGgDb4CLpN9ttrq",
  "key11": "3PGqQV1paCoEGy6G8mvAHywgjKoVcoxZwDwku46EbmrCyQLHbeeWMoZSTdE3sJ9nvbLtUkNyHg6nXpN9JJ7L5v5Z",
  "key12": "4GW9qd4EjcChBpmvGWXHzp4rKBLz6EtGSjx8o3B8C2x731D5jmbPcbaPmXApCY6qdA1M94JEDdsDXVfq9rStYZZn",
  "key13": "2Nxc8W5ciUevkiQrxh5kGykxF7voGqozLKLPNUZAnoMpi9q9FT5F6obJ8Xc6Th6STV2sfkqmQ7KFQBWTL47GAoNn",
  "key14": "4SAL3Gos6yjrDdyqMBj5JJrntfYjTR3RbYS2mGSkmSWvAxNqb5tRUXCWZZFQy9YbWZ5JfsZFBH4H5T6GmZL2EXH7",
  "key15": "iHh3LHY1HvHpeHSeYn5Jp7yUWTbSZ1o8TqJ29G4hpFbBCGPzLyQiEnMt9nHTVaQb7ovT3ihuKgm5nSGKWcXmzxi",
  "key16": "5EetodVLYkjHJLnR6q1jrRD7yk4P1QHP4RSkNTKDgpTrevG4qsENQz4jb14CBoReEAgeo6RZt79BmiZGvDDxgKVV",
  "key17": "4w2Q9jZNfFvU7irNtj9746wEb4gehYmMAdX9LVYLXnbykrDTpap7eaToY8BFVMWkmWrDjj3n1PDSYCav2E4ZPRTd",
  "key18": "GNZYMBait4vAXDzhsoJWmCoLjedwSAex7bcV3h8Eo9UByWazheWvWQFYSi2mG4ijYkFaaNxWxjcozDgjJwkiqVc",
  "key19": "2kw4cfGidTwkS9mgpEJSZVVF91HV3JAY9XgTGR27NrxjGfcbZBNWQhNRMyA3enqMnSHTEcSbeaYDrNqcEYhCZ5JG",
  "key20": "ULt2S8cBVpQ3aNnrzib5RXMeJ2diggQUE8iMLk3n26jFN1CbDKnZHnPH1aPvLyK39DYRcqjmxz4X5pzGB2sZek2",
  "key21": "93ZxPNK69wb6Axuk1tHEMqQtKBYQ2K1aHqgACbp7yq9uxAsexMCmnbmXbigmxNT6SmEDTtV6DquuLrAEenU5xtz",
  "key22": "2cu4BiAcAFYKrLrZ1n9BDX4bH81yKhkxPzyzohvbctdpZFV45tWb1XDsJGmpL96hTRNfpnXu4royNvhc6kJuXGNZ",
  "key23": "25F9dguR4DTaFLDMMb86mbvrq6DA5g7eGe2qvFuhhTBEnVKxZr6yngKvg6RnV16z9bSj9mtimCQ6MRsWdL994Ssh",
  "key24": "qKArrjcPqLY51xfiNmmNmkrQuRh2is4bXNdEgGG3heXfDZDPXVTfApo6ojFf4gbCU9TExc5ChTTDd2NhXjpKVMp",
  "key25": "4Zn2QL97SnxVn3Gq5Enzpz3HYAeMacSBLL8SVLpViDsQ5pUrnsrnvKmzNCV73YArPaQrErHCDoRhjVtzydCpcZRx"
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
