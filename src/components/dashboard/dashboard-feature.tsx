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
    "3XqKeF4vxRzPcSdepSd7jEBqFqy4zL68WySPH1a7uwJakhZAwS5TCHSoe75JjPdEkjTDzshCLvdhpb5n8RBubLdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZfvpjZ38roiD1BznHeH4VKDJi7TzKxR3MjJCZzF2n5C5qeWP2pgYRkVS8PRaFKXiTxM4Tf6xKqMXSnq4SHRKtjq",
  "key1": "3yCvMFD2wQnzpqkZgQyUhUhY2UVFM826dTupAQVrDjJLKmLxxNJ5Fq3ij3vCLGCHcyrRErcrSmRvULYjMdCi3kd5",
  "key2": "4oLmkXGrEsfRUNwFQvLbNhd3hEiuiJGAfrqRkFPykkFDU8fv2P8EcrKfEbd5WiStomDSTBxis5mmQWf2HStbfxpo",
  "key3": "4BV1WTXywxoTktVDsDmmM6RFJDXLpPaWHY1MbiPkixnLiyR52Pw4EbG7GA3L3rLi9dwiL5EZzh5HFik1Cr8mMAk",
  "key4": "kQ9b8MJ5q3BEAA38kSRn7hDB78PscnaF62eAM3n8g5vJYpfFvwgNW7L8yKAP7qMnEjp4cbzdUP3umXjPAquPTV8",
  "key5": "5dEi8jAYsvqme5HtXJY8mphd4CjgSFC36LA6cnat6oGDgPoWkeHSNPN17Y14mYALcurqSAmZ46R5QvLbnu26bw7K",
  "key6": "4SHbR92Cqdj5M7pe5bk4hXMLRYmXSiEWkc4QrsEZSymNMfCSzbCnCVdg8AGDhEMc6QigGUb4snLB3mwwhcM4NSDS",
  "key7": "4vb2TV2oeauAipW2tGfRCoysVytHuzWHqFaj2u2AG1wM261KrxBrAypwretXw1gyRhWpP9L39YvFL6StsPqnjtAL",
  "key8": "4sg9ao4Xod6NEJFuHDKiAh41VufBwH8HHKPQGoN2JmeTLLpDWtFT3h1NuRFae4k4TW2y43k8qo6tLAvv7JXCBtt5",
  "key9": "4d76sjmruhSNrgde7xweyKxwWnDGB5GC1vpmmag7piLg6pK4wXizHSsDhRbqJMN4n7L3XvR5hC69hEEKQFwbxmAt",
  "key10": "5K31a2WT6YcyWxPwPYNewJHNM9gvDnjPoSphYq2S5dCeTdevbYFyqMonaQAVaZmGnDGbTsdGtoJbqdWf24wuVocE",
  "key11": "UXxgUcZYPFMTzyWz4tFeYeRJHehYonNDtRfEzggtSn8PnqbBbbf1xwjU35qSVzVVUCahfEXqahUHFfqdrx9eKAB",
  "key12": "MGhB3aqn8JgWEiX4Fi2q8f69nuTPrwNHQcbRpcpgHh8MqHLb7TkgqJs7f5mvsbeiVdi2EBvkuTWuEEWm6VTXte7",
  "key13": "5YgH3bXGRa7aJ1xe764mBJcQJZXNbMuzvnH78vaA2ydsiYP8pxfH9CkoVasQuq397Y4vTxvNrUC1HbqQcbyrQdiM",
  "key14": "5bj47So8ZP9Hh34SGnELtrsUuD6B2x8yqUq8GhNC3vKwZ4USfPMjXsBvniqQ7vECvCPB8KpfcEBNToJhjEWNDz3J",
  "key15": "2QGbX2iJB8tSJ8eWh7mCsaY6ggSC5v1aCxktHemMi3pXLCTCBZMB85ZmcSuYeRiErBHL8NKZc7ZdTHogbzWQ9y8r",
  "key16": "3fmaxRnbSie78f3vfpMUWrjEe1NxR3ownx5K77M2F94ghJ3LyF1sBjvZuQNhTQQKjCRTiBpZQnK2JphgTHuCUcHa",
  "key17": "UURxwrLcrDX2NqLn8izUvMn8DDjmT9URy52szqv3ZVm1P1Wi5Fza8tWygAGTkMu6vCbvkQ1tqgZSc1QN5PBcVY5",
  "key18": "G8uGDnCz8ds3S71mL45KLFSZaCbLLAAb1boUkLA5h4Ph19XURc8mcPXxcavc9xzD2BD5JGJEjDkpbk19541a6AJ",
  "key19": "3NnA5iwkK3LXZjvLjiEcGsKPKN42AhGXVoLKSggjK6UpgWWJU9apSb2rRZgcjpcnhPxarxBPX1bpQhaXH8zFoqAt",
  "key20": "4T7p8cRRf4bFcWwTtnNmnUcSemcaZ9GQcWkeajTnX5k6uU9P1PMmFL8277f1hZTjLu2pLcAvEa6kVsr7CrzCF7MY",
  "key21": "4QswxUAUsCPiah5PA1RsWKx3dT87DTZ3KXXV7FsQfYuZCjtcGBcxXN3i7TpiKCi7EME3hhR1PLv9tSVdG4FpFkWM",
  "key22": "5HamkuJ8WLeKPVHtJ5JmL7NJvAcprXtMrGLF5SzTX77uGhHxKLraHC3P3kh9tqqFimpQ9DEApsCZ95YCYZuj4cx1",
  "key23": "2NFYR4SpWFgByx44S5HAczLhpvrFLguqDJsf8dLs6SM9ipftF6ffhWi4mEKufhLDD4ugQ6eJ8fh3efeqy1giNT99",
  "key24": "2hyEsnjSHUAbGWNzoweaeUZWTdpQNBQN6FuioMhaYat649btuTQ5wDxMK5ywUpfUSxCHkhnwRTEWBqgwV27NT1uk",
  "key25": "51ugegDK1QwNtKHJpAbiy9ktqTCouUjKnnfW9Tv5bXqhmewh8LJKUZzbQyTPrZgQv5ABxUQMhzDmaSLigHM8CU5L",
  "key26": "5LGrVaMT84fMdKfMUR57P1ARrQWRc4tTkWmfy1o86byPLkwgytJDJbz1MHbf4GqhCLtECQmj3MhXaW4DDHCwbjzn",
  "key27": "zDa4YVfTyG4nMiThryEmDYjppRGYCEeAMQCTLNP9PE81idEf6YK4H6GGK45uCs6bmCqKVvakrVi4UMk8CfnwXJA"
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
