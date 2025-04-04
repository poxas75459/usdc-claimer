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
    "3aRhsNix7UyYLwDdseoXEP9btFcYCArmBoW6n4VG1BhjshtyaKd2xvmg8SHKD2cMdcDUidfKgf5pUsw11Bz8skKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42uPJDAgnmssrVMjDjKeoFbDwFwWtB9M2HzJQiNjSBv6uANzp2QrijFWxkoEwAY2RkbrbUtDNGNqhqVa8mXBkp1o",
  "key1": "fcnuoonKZf8g2kYxCHojhMY2ftYAaSfkP36WfzSGCkPR7WdUnezcsqP6uapGWnARs55JyAZNLyWxRdLMtEpG1Gc",
  "key2": "5r98BEuXVTtYivCta5k4KJahHKTGyEdswfiFS5wUQWRN2G8rQCmZQ1CNAsNkMh6QQW7QrgEHEwNDcpudiPkvU5iC",
  "key3": "2yTS14dt7koTYCcCPmVbn7ZY3i4cw9AfBPwkVMKBQJdwZWGzQogeRkeoCWSXvxBGRQnx2qn5topEbp9hPtdzotSA",
  "key4": "35QibeuQaSQzvovJtjs63YCJV6deRHCJyHzJ6YSu3WigCEEme4e8xmEEBauBeiKi6WSYA5FrVbGKR319aFoWtsb9",
  "key5": "4oP4LSx9dGdh2WjkQB4TAE8QyDZ9EAizreJmNpnmfb6xpahJk1FbJKH3L8auteXWVrpzu2Lenya9w4aR4k1oHspK",
  "key6": "51VTC5jtSVYHRvhJWPS6f5DrmeJfyfGQuFDwBk6cR49Ds5hzhfJ1H2TDb7mYEyYio8gd91sz2UC9xivBTK1NCg9",
  "key7": "5jpQPjeK8U1aNVtHj2cvbDCiD2PZpen3Ghy4JCamw6Xi1bwnM6zRtEgJ1yZAzDM9A7A9f1FtiToC6ZmYjs4umYeq",
  "key8": "3jeGbJrPKC4KXVjPFyPXwzqwBaNbtfMdysbVEWHsAnesGyf8wBq8ddDwksyXtCP385UKSzBBSTMcCGbNZQkD1vYs",
  "key9": "4NBJGumZFFNUYCDCnP6Q4q53yQVY9mwkeAH8sfqC4bTFvorkcrGmuKRgHqmkCuyLQf5vQYWC7TLeczy3PMApTpqe",
  "key10": "5vMKzKc1aWaN6dvzLy1ooQfEN5cg45aC6Ke779PaFQEaBRTfgMmuCWraxQe8iBw2PJzVUwSjqp5CMa6sYAmJn8LQ",
  "key11": "5GpD6CsSrK6fULE8JXqJyyEnpYoAEEG5xYffk6Fiti1A25TACVzFZLpYfKEZ4A9s2ty1CtLKEbETmVoRbxJgtC6Z",
  "key12": "2avMgE3T7GYSzW1cJaJmPB1H7zt1chdkxYW5tWU7HcNiH8eugBqAem5wmuYCQFhbceA2RHnXQg24dszFSk8nLPuu",
  "key13": "2iu2FX6uAuYLKaoukNDgkx885mdHAafbyu2WAGnkor3AeeriMjRNaGRePQ7cEtPvS4vunxWLmxwfVexvZqh3yXkD",
  "key14": "5qn67KCYxKggGgTXh5x3wXFS1dFRqBXEMe1a6fjfjPhnxMCU3DRaJb3L3e6UgxX1qwrbVNPRku51BkCzZxWqz5cw",
  "key15": "3EwqsXKB577QgDHVZ7Eg9yn2kJVWJF74eFEZMyPGe5kEcv7vSvi9G7286cw2E3bKrc6gpMCaLctZiiZZT1yELANT",
  "key16": "p9VeMeiXqxG6pCCdrQZkwxPAkBXjX7Nsc3D3nyuK51cRHE31nr8D2u8oVXmdTPf7NNBk439iHrrnpJiZZCeMx1D",
  "key17": "3e2gywexiXVrtB474SKyh49ETvXhr5prFA2worjmqNMDz9Eb2y2aX7964t97exnTRvdbNBdW4pJwWgDx48VCwcAp",
  "key18": "4dzu7HYEYzsxqX4fygbz7rrsCJf7RvhfZ34D7NUs6xYVwf3xUNoHs48j95PZZPr8U43XaJ2N6Jr4u4kvgVYWxkrA",
  "key19": "3FNKn7ZWJtufB2CQghqR1TTi3mv31wy63ZFpCHvFGM5DTNBBfGqrhUoXKgrxXDf9hEmvmDNgadAH63Re6sm6sCbk",
  "key20": "2QoLGdbViXYVpV7fSnmS5EDNtghjBEaeECtLVZqquMzmYt5ji6FV8GFNk7iUBZWvQzHPUNhFxoZ1pzxZzD8HCPgK",
  "key21": "4dvj2C9hegxLnQ7MJ57KsGqXyhUq1MJVmsjRnBFp1K2B8x7uQZ7b8SDnPENVuGBPnHGSXHPrF4zhmuBv1N251VQB",
  "key22": "64qewqrACndL9gw7BBr4QjaLeMPRWzFNuv3CaeDMtojggRNSX3Rr8uptnVRyjoGtVb9b3C7RdnMoFgadpzFCkyA1",
  "key23": "3YLJWkdJwRWUmihfRWDvi8NdCgwN5W5xSnQkCgfhRrKeufiXeESU6Rc9cvsQyDk9JnHzqyDQfb4zVqYA8AD4AEk4",
  "key24": "5zE4RwJv4ZmYkXDecuBhFL5LTznDctkvzyqyjusKtMLmkNaBYhbRym8YtRtVmXC2RYEKUC1d1HoTcAzPAJ21bSLt",
  "key25": "AfrzApXnuk8NqrhhpkCgUA1NZqnW1bDrLBvsR67VJEvb8XivJCsS3SYa24sZ9rfRJkkLRajfL4QbxQPBHm7VbEF",
  "key26": "3vsMKhDv3zKyQmtyHvoYyYYkhmn5Ro5q8mCrAXCCdG5cZTt22oT41YnutvUFN4T7YgaLTxXHc1QftcJ9RaJk4pcQ",
  "key27": "2oevXScDoXXDNw7hXCRvhFNJAoAcuisFYzwTyWHF8iwhgEdQND2ao5cfqoEaHh5f39eEh8XvzSLZ8MXUkkKB1HKR",
  "key28": "URRrFkjzKd4JzQN7sF8hPyvkbMN12qFsBwduv5eAb8jDJUef8pPiqtcE3MkrHPyDMKNi8f76vJ8F4YMrL14KBBT",
  "key29": "p29E6Bs9Yf4TmuzZVGfpkAVQfHQW3vyYBUen7eATBhs3whYvNphMiGsQPdWjbKqD6TieQCLb59UZbGyens2GmYk",
  "key30": "BZWaGEv2rPUrjzJ2NY6V1eb3u89eaTpTXAgmkayNwF24NWcQ4RWhse1ooV9fkSR75XsnaaDxZwDWumU7TjoRi8j"
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
