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
    "3qPMGyVk9hY1iqUJJWvbjmZ7YL7wmh71n57Adw2fgTyDTH8ViDcgCo59HGibSrmG9AEsbJQsimp6N3S6VoYQKij6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cM8dS4yY6ZMJKNEnFPs1wrAmvnT4HnbGLpqYYt6qb7H754cY1iZtFYJmCyZKBjoSoA7MzB6d8P8ALh15nqB2ye2",
  "key1": "4uSXH4SeteKKSVgsroHzCPuTQ4CDmGJwbNWv7sCfpAN7Gm9ePmgQyWxRqyFxZvsaK2K15HeLZrMDNa6VsVYhpXsv",
  "key2": "bRm1kQNcJbFUYoBiFJworw4yar7KXr5HVE5p2oBtbQaNh5WJFU1BT3Nqz6GWJxHU79NMw2YvtrEwEFoZTs5JuZY",
  "key3": "4eftkTeViBQkURJULLpkPwMSh6o7ucHpVJQ1bvJ3CU6JYm9KQr3Pmrj8P5zr3xYo5RUaF2uZ8qswVrfFB7ZMsK8x",
  "key4": "obWgzAnT2mdtV35yqzoNJ4tjWhLtJvsFsDhd4NBQhsGibGzgBhga4K2dUDQhF7G4hAs526kRYEUaiSHzkjcB9sc",
  "key5": "5YcADDPkHrFag6TJF2pGmjtwjiohfJKCxCogLBDyGJUGy5Cmay2h3AYm7mZPLZtCjued2dRiZHDtB9igGyYxRinM",
  "key6": "659Kdb5zUGArxC5EsCRJpTEPG45pBTahpP1ZHMfMRqt8fcGfgRiveRAShxjB8WHevuqkE8bZ3tLN8CZteABM1EnU",
  "key7": "4kiz4cMPn4RZhUDb77p53bTAatzHRWJg9gcDicQremf76M8ER3asDtFpR7rG62uFJjKqjzrKRKTrQEwN38gjxdGA",
  "key8": "GnLuqf5gJr7xefQoJcCcoNRLfzxyMP1HRDx2zg2tDtdVUcr7vwZKG8DjY83GHvFCTbbAso6naEp9emam2wCRxeE",
  "key9": "3VemzVcnYZNLMoP9ue6MrcS9PRy3JzBi3o7d78BpwQxEZDWZGDGthPmNfuDw2Dv3TJsG2yb2voWNnF5E8TKZKxnn",
  "key10": "5MwqAcow4tc39zgH3iKonAgdVEhT8xZBMhEureuXTti3HHqp1HGEf7mtHFYQXHvDixcKupYeuq7QSkeH4dk2PP32",
  "key11": "2UuxSjQ1RZ5Zw2wonK56hPicrcTuERZhPaitx2AheWXK88XTAz6TW1qEkFyL37c2ARSdPCGiGb532JDPpRdnnUjR",
  "key12": "5SJXWFs9wWKXpLHKxfycGwP7BV5oaB9hLXjbdCsraGY4CdZzpUEoSmEZwAaxQNyruJREYjvV1GRL93zYpCMhACn3",
  "key13": "66uHZAwk7Ac1GLrX8Rz1PcbUMADjZq7n97UxUXbVJcZFMrKQd1eP9159YDPeEQmrhHGAzsY27kSEyCPaXMU1FVTC",
  "key14": "5NcvFpVKq11JohhEzHfVVMMsaWn9qMRpCSLqM9P14NrarDBtoqTiF73uRXgF6UB84ErvaUEmDBRiygosJeetJw8o",
  "key15": "298DLUxSXPUuaAbhVPbRDwBQpceKUm7QbKKWeDRxNbJffhD8VXDeKmPgE2yHE6v9FvE329nWXhqQdV222aoiZkeb",
  "key16": "5yG7UMEJdQFfdXCaExJ6UGrdypkyMSGNcQGMWS78UFgbFXp9Z9DzAtrEg7HFXf5QxWGk2ZJNvM7RXUheXm8ymu6q",
  "key17": "2zHZggLVdMdUwY8vkCeYQqYsRzvQN7kMxypoShHfJNyj5hEAWG298EpeaeQuHdVqKUqoCjVFn68gBakeMszx855g",
  "key18": "3W7miiejSXzFkboWjreaQnhCXzVtiLjxdFC2YPEQy8YTzVuaSmK3prKUbFykHzDDrPRnPxKUB3v5BKtox42pLv6T",
  "key19": "2eLBZ8XQefC4NK4zxPPGV7HgrsKSKw7edjLugK42jc3hk2haeSTg2bHNifGxCmq1m4jZD1Tfp3ooTcvsUbjFp4dj",
  "key20": "nETWgQAsVkkzNQW88iAeKVxa1qtbxK6pBLiNtfCb1tVUGpED4X4AAPBB2fyF1dc5RqBwdNKn6YuNeJ6Gkeed8sF",
  "key21": "3wd9Ac4P1qqxSekkdH6peuaoyaZfybLTrjyZc578bwxKMx6HRYu59RXUujJ1vmqK8WZTLpjGtPpAqQGMpzbWS9Mv",
  "key22": "qjGC5uJ9WVy6i7MDd3V38qqZRbNvv7oJS7px3JUJF7phDm8FgDB3Azy3iVXuvw41XKGa3HbwGrECVPvNp82zwCY",
  "key23": "3Vo1AJAugu9hmsHx9G68ERFoWmUmX47by82EBaiY9FRfJaSWo2oqNFxqPgJ2KPBKXC3EEF6wQuDJVuNsrbaTk52n",
  "key24": "3q5ZPf858ZYMVp77A6hH4U4rtLmAn9LwRrsdzKshZq3fa83FcMjfD1SaCS2AGyUMBR8GyEX1H2SR4YNk8EA9AXAA",
  "key25": "3PFhBTHU8sa68kHF8jobsuAJ5QjHjNaxdjw6wSfQyuRAcWRdP2mF2upwPRuZijniRpD9zMaAdhoMKyTJGEXKDeQD",
  "key26": "5en5ReE1QPPMewiBkGSXz9UcW7d31MxvY2hXXcC1BNzfmya71bsMTC8qJqcWNXBDzqbDrkAppFHHoPCpW7iATEpy"
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
