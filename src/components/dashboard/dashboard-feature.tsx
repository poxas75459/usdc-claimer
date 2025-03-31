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
    "5oE4s4KrjZKy4tHvsZ55wmprNdVJJ19hRuiNMP3y87hUGDcJHy8wusF65b78iFs4SLwX6kzesQziUMd74V8d1FuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQBZFuThWrexktE7DjT3eZRNANTE7v1XgXbVD6WJKdt3YHAVptwSsWR6DGipfoJEFZheCZcNMbCAK75mAASWA6T",
  "key1": "4GJwjEd4tYoWNBHzc9cPYxnW7Giy9SvW5V7sLGwtRQxNbujAb6VosJ8EaTRFgJAhoBDZsbYnTzdUrZVREZYyY7zk",
  "key2": "p9DiZ4v8RkauDnrpJzFJDNtbKeFuEsv364TvGbbepsjseqDGQg3Ch4ripzegyxtPcEi56NSFK6WdMhBqLH4KX6K",
  "key3": "59s2vjyX1HUY1ckeyeZZSZ7t6LJQMVa4Z5vscAHKtqnYtKpHfyr6upQxDWjJor3QmcoWe7NzgNVFqJzkx5Vi4mBQ",
  "key4": "3EzmQGEXnzZgud99QYGJymZCnHNnYFgct3pEd3No7KfbYNhjvBT817ex2EXijkHJf6UuJwZ1E7LM2ty5hyWiHDuv",
  "key5": "6o4VeuUNkUzBVH7mjvvqPLjFv1tgps443RjnPLiLUDUF5U9HP3g2VzXP94yN6qYuV5rqbcXht3cXMA3WwasdW9N",
  "key6": "43PgvGZUaYS1DuaE39vseDVQHUBaifm3T9NfoNQSbFe9d6TJM9p8DCSMGGCuYbatWNNLnyRU8JKMRPFELGyEEyoh",
  "key7": "2aqZxxpUCEscdtevFvNAUv7NosQ3jzN1kGdtAZpNCKujtXUyEEqcU45Mavu8UJTugsp3huNasAXSUHPpmz5gKGxP",
  "key8": "3J4szairvbwz265cn42eFe55CVZSgfoEJVjoQWmsnABFWiVmzzHqZ2qKagtdUKAd6nJVqgDMkaSqAgMW4a6Afzje",
  "key9": "475ySdfua4TnS5souwX7hthK5j3WfBnBQmRzJvWXteQ3hdDCrm8jXGFdDHA4MY8CdEJZ4kS8DTiEcxStRLpLcyJa",
  "key10": "2EhHngXX6KZfciHZbcimXDGT2UcGbhKNdMj3i7MALM9FHhnuzj8h1GVWKSqcmnUbFWceAT6Qt7fiJAz9vEm4kJsN",
  "key11": "2bRf8VBoRa5W1VFrehoMpv3FLbso8vcDEhr2WRQd99oQsLixTh5DBwQFM6A4zr9PK4xtjHhXimrSuo7Nc6hiJAce",
  "key12": "3heLVMeH7kwa93CcyFMk6a36SjQnyGWmg47659h5YBytgMY38MEKK2v9S32dqww65BzSBpnLX9a8AZkAV9tfGeZc",
  "key13": "3St5ACvTnFjERXLJ9xxrCyovjad3LpfwpwGaFCkSaDtH6LEi7xrRRHkkMCTJp5SbR7bKNGpvPmm9iD77vxV4D7kz",
  "key14": "5DBVKx43YGnoyh6ciYpKR9hs9Ds3TSSTJMSHA9E35wjXbceyPgXC13xVEoiWZYcEfYG6hba6cXp7YtkxvVbCH2R9",
  "key15": "2wxAwE3bBrUvniPGbxLzej45NMRpV1ioUSTyr3qj91TrFsbCnbmkJAuPhTSMBiCPxoYXEziFEFhxwb2YZiMsBdZX",
  "key16": "3gVQmxc5yUD7665PWyu8RHdATdHC3ZkMd99cmbnWPmK7FPGrKnnU7nwNuLk9z1UstUHB6wshSQ9LRRSuXfkULcaW",
  "key17": "2XVj85a4icwsmbJCHGJY3CfMbh3i2e7cwhBHaAaYPCf6uaDqJf7BXhcLoypqKRh22vbbyitnfr4Niw7ZHugDowfh",
  "key18": "3Lw3oVwMuWUF9LJGN776p7664zk6fAHpaBajLHJryV7D71FSoPfU9fPwqbUvDzxHP2mqfXJJWXeFSeyM79xMPfaJ",
  "key19": "3pKUvfQ3Ypqi5B3bhWuQAoy2UAkq1eRFa6EcBNKi4FQnpwRuf9iMSEZRyF6NaaM3vMKppBM4uSwMpKc8wG2juike",
  "key20": "45wioU73ZkveaeYkcFC3ZRpGzDmqV9kFMu8Ko6nmBhF7AF43N1ZyqbqQiaL5LBkm9UuXfCku9oShwAuSi3KZw6jp",
  "key21": "54eCUmqgQTBNo2cZGzL5pUYxJBdctmtZvGV41YwvSzR9QhoeKGJ3vDJ6oMGfnH1qimhQjQPqh4gFa1Pc4XQbf5GK",
  "key22": "5ZLAiciiigcCHfAAj2H1k7c7ybmSY24KdqmU67Sfgv2d1VyeeD1uPJVQkFyHsELNSLBxWHSqxJxmASyvKbu1qjCC",
  "key23": "4ntGhZFUCpC3C3fKHFix7GHLJk822eJySvoxQja9nBDiNWArkyEeHvdWAfyMt6xZRLmzodkhNLXCJQm1bMqkNK1A",
  "key24": "5AdjN6vvJuoH9vzo49HcdC4grh556kJPQ7PDbAf3SAQGNGrpKcfQ9hyN5FT1SRcwYZwcaEfobbfyJLGDHi49ijvM",
  "key25": "4SrtQQVUs3dVpeR3LhM89bBnnJLyXCw7WVm5rTRGoYxZxgRVCZZs7xb5E9Bw8rDwgYFq6N586coJQJdMCLkbpdoN",
  "key26": "2BMDgknrJEiZmDWWNRvW67PTLTmCsf5ApcaBRioGedS7k8UvteiRZJWJ6DogVmUwsAXsHfd9Sbo1EPiM7cSX5Txi",
  "key27": "4YVtgVHQDmuCV7YEmBQ8WpcyACbEhcKCzsVSJTCLBqipNmnqvTef9H8Fx9LghLvDCSgooVYCi2b6d1DuqvYAEnEX",
  "key28": "2PsV8Bvtk9Zg9eR7LTyTTbuksCAP9bPBnBs71d88fapyN2sgiDoKZmLCuj4vzps9az117xrNQwBLogUHJdsX3G38",
  "key29": "3Q4i1Cw5PRjDgq7zPX72DDwoMb9WWrSeWfEB2PYJBfjCpgRYzLUU875G7bdc1Aoae1KnVcuyDDJ7j71y5SeP8he4",
  "key30": "qQqd9PR5RQTpG6CcBkMkHaYeGbMH5v7vLvgh1FiHmTiTZ78vT8YKSeg8gAS9NktzFSAwzXoNXkHaEh7SXJondvf",
  "key31": "sNFtksQUzqs2Fn2QFK4ssp26BPjpzpQUaw2AXSYVnHbvpqyM9ZvbsimusYn7G5WbByhrg1FMDitnG9phdCbNzd9",
  "key32": "5cfdHfh6DbunUmJD2eSnXssKH5c9E255Tv9kKpLg7CFHgu5oFUfdwxuT69AepUDwutFWZUAQTQdUyhuDmLxfAntc",
  "key33": "3nhcLRh2zhk8qGWsfQ1rTJi3qToPmTG7bXjZWgaQgsWs3pJe27yKXoSGcDFzajLwbqSvoXu4DxbvQjPGHap7aULH",
  "key34": "mX5dR4apKirtz3vkGbFTH5x2vxfb2nu6JHEbbcVJwoGrgz6KX4XuR1PDkr9VNC45BvSoap2RkNir7FMjtJzF69D",
  "key35": "5qVu1uJDr9tMgyw7DGqZgDvkMFq8XFwhMbcXaLn4hWFazedxDitoEpd8y6DhPdvEEk4nrrpeYZYUZtnPy9DcY6Ui",
  "key36": "3ZCkfT6QEr9H66M6abeqWsYgBUY2SpnMQj4jkHkwEXxUyUm3keAkvGJfmztCHTKKTVUsG5WXvBfAWvZ3o6Dy7seE",
  "key37": "uRaEHggo8gknG2hW2d7F8pi5kRmpTaT8nwW3cic9FJG7uU99rFQp4QKE7EQ5fbgEFCx5DG4Nr8TZYLyc1N6gszz"
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
