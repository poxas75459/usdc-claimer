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
    "nqm6WngtCmxDEPHxRXnqAxBCxgb56CBYzZQPSMGwtSY9PB6Vq6ZycXqU6WMtvHKvZRVTairhVnSjWYCgsR1xe5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUDJ5bgeapPFC1EFA3iRu4nkBYNSdCcEdyZQUUDBn8cXp7taizT6XWh7QFBnWzKVvYgrcJLqFZprTiV19byTaBr",
  "key1": "4cKgKj8UFveJMBnZKx5wFYEab2aPc848w5k2oHUiTojapNSGig5EK2Ex7eLZ113sddmxVCuQtPNdvE3aKpTTaBC9",
  "key2": "49hkuKcS1idpergL5Er12y86JVWHNATjDZKPCUJvsQ2Lhm8ca2q1iXcYwaJ3yPj8ZMztuqn49rxrKyvHunXgEsGf",
  "key3": "5cphf64DzDTSX5YgKSe9kZ1kL3PqkaqijRXJEykBn4UynXAtcZHr8iQ6gPqpEbUEAw6N49gT1fyc5eANTghzkfTN",
  "key4": "3H4T9yT2bUU1bvT2RLwUyBgxJGmRZcY78Kf3khiCdyfh4ARHAo8xogvNNyvvrK71pMC6WjQjigPPZ5KgzzknS8uz",
  "key5": "4KJcK8hJgadqRDt88VRcXL4coTHGLy962StjGHJZTJgTytk5yFdDYU9py2WhM1UZcrxJt7q7PJwdzPdvkkbskVP4",
  "key6": "2g2SnZQbXxYwmcfAE5bhcZjDxXT8mVKvSzF4suk1e9Vw7Fsdkt4fhkMAuLddAAVYHKUwRgPQVQTqzHcr1hEVLJjZ",
  "key7": "4ApdNvzeT55fhhGTZhFD174psbp6rS858vE3Mmeb2kbwPirSepdqnTmt6DP4DYtYC3HJhJf6Gf9GxuS4XrmypUuH",
  "key8": "kaW3kzcdVxKmbDVogt8Giof6G13VPRJAzfyc5gFTUpB9qZHqqZTwBw68j9ArgeYRJZ8yuWTdqqFFSvBgw1gtMVm",
  "key9": "3htwzqvrrKPesVQqY6d6FgFszTdFckpSEzfqPKd681LUaxpy4EiepyRTYNU9VxUpGvCnkkCZ45eTxm12m4G591Ya",
  "key10": "66jrWsjp36EJsW8R3kc9nibe2XpLWKqXGxz4LWwfenKjH6DLazudTRajeUsvBQF5WHzk8qENmMKoe8qEkbCVjAVw",
  "key11": "5c9NrLiYz7y262sHF7xvzjjnUodGjgyQKJSJZVcuTfX4Ktx19NvcAdeK7iHLmNrXqn9jb1wbEYcDwLBJ5xL5jDCP",
  "key12": "3xP5QvGHjkkicMCpdMJuABGjNjBfUfsPAb7FPhKvaXYrKeLZtDmdsL8ewoXj2ud3fU65QkTXY5QKNmVaoGqVcLMe",
  "key13": "2S4vsVEv6C6jq7W5hHESgWQrJNzRurwZJXkGTUAPae6iwJLBcdRAV6tk7jXotw8BjJwtmQqHxpoKSNFD38GkAdMm",
  "key14": "3HzawKouQ3rXAkRcC1rLofpT8Quc4CkFbygRxs3uHv4y9GNbi1ePd1boU85JY6vZ5w3U8BuDT73Jn974qw5kkB1h",
  "key15": "4JmTEB7uJCGTAaNnWbkCYnQTJLtoDen2kUHNQ4EBzbbDS74dpTSw4sxajrEeurPz5kjqUSLkZJY7Hcz13xAc4rSe",
  "key16": "3FWHuyVm7J3WXbFSg7McB8PXEKCmp3tRsiLUNcZzQYWLTcxGsc9ZSxtDSHp7kDWuEUuQo3aTFy7YJ8iiAztjNMXh",
  "key17": "3L6FmGGHcdEJTAtMSgTLD5QEe4hpwaQ12mmbtTGBDZweNnGX45SskY9gBTtMxFCHWPzUWhqPD4eBCVkq8BLsQaRr",
  "key18": "5niRiGcHT7j5U3B2PLVuff6AFTJ88pe3TQ2UQKhDg3v4nCM5TqiLcafdf2RMrpgafABEH7BGFQxumKjg1tvoSo9P",
  "key19": "5XNFhWpuwtqU3qX1biWBzRm9KGQsvojisCfkvtTkMt82ggTAt7gUoqi7EUeABXxRf7pWyZvoC8Pkwi8ksu2Lg6yg",
  "key20": "2RRgjDW7xHi6bPFxVE6DYWPBBKd1N6rBqhAMmqUr7nDM3eDgh2CtNqYDakjwYbNaF4LuVgYAnj6PZwqb4117hzcu",
  "key21": "5goNRTb4m4hV7E89kmbXyPf6T9f71rpM9MzDEGqx7BWPbxGBm6NQCVeyAjh5dBP48K3FNod8pXh1jc9gwfAUZ6hu",
  "key22": "55QE6Wzp9Jex9UHrRsoPhZ34Jj1BHxBcLSTHbYGVZjY9CHd7Gr2AseGrEeeZsWGwUvGQoB7mxyXdRAvLVfTRyFHj",
  "key23": "YGAT4UW3iqnhETMvXgdwPyG34a828foinQZdhW5GRAf6tjFDJVesoj3c7xHEDcZznNaZ1zHhwTi3ZYHTrCNvhpu",
  "key24": "Nd6FLDpaV2t4j4SmbwH525AJanxemEJSbZPD47YPN2mVxmgPKY6kRzXGQfmjXuKfM6LW2h9kssDhFkSaBFoKCEB",
  "key25": "29CQUj5qKRioqsUnZkMB1HAsVXoSwEHnvmt2MmjPRPRSgtAtDvi5Ax2neWpmZ7pSng2P5x8B8Pe7MoCtPffdpXdn",
  "key26": "3R3az117p9a6diSkd6HeHyQDsThk7qbF7hYEYEwKMMbJjdTmAKutjkLHpo91Hp23CwHZ8h3bseTEYiHu8WESwVta",
  "key27": "3XMow6B8UQgfPf4WC5qXiEy4FQZNHtHpM16tjGUHU7pvhw11qsVCnFahiyBYgYK7BZrLkeZCPxwLgufwkoGL2Ues",
  "key28": "RHUTWuVscc39WGh47AEjFuRFVjtkY152CTjwQHjdAZjLU3sECJMUbZMSRzAPC2NGUgEzDNgBDBEi5sDDRzYByeq",
  "key29": "2hKinVFadX2BF3G7M8p874UcQPgzZU4oWsoHnFs7KrfyD46MfnJ6uqffu5Zdc2UFeifVSGFY4bRW1N8QXZxNDDjd",
  "key30": "oXm8n3GsUqKXC191F638PiWANQW2ccxocDq4721gqnEjnZBHQaJrbNwDReRkAvE4C78iM5GwDttVswvvi9RZFgt",
  "key31": "24wUHnxj7Zyo57wSZX4n42n6FVEhXQSakGFGg6AgfDJ4fvxgDfNzooyN5zWXEwUT7sjrJdEhkVyHx2WvgCPYYBpA",
  "key32": "4RTF2BxqthBHGH97YHzcNXW45KKN8D2mdZUvTMQXgUCueD8zxKEzWvPuA6aL5j9Ys9UF7eRqwSxX7FwiXpNqSFux",
  "key33": "4ncMPFeAdZ7DwUCjW5wZknvnhAnnCzfq1MxREPyX2Zb15oGVSH39FB3W4B3tBMMrM6xtHSDFuZiVJu4Sujy4MZif",
  "key34": "59dGyBNN7fep5xsWQEmPYBxe4d6Z8JLURD2KqUptNBkT6bvuy4HpV7kzajG82z63Mbw39aPznWKnrJgiaT7GpSby",
  "key35": "3G5uRZogqo8UiCpHrrd1jj4KYE7vNFf3f8tJjcCcF9SCtwVqTqrHLYBJ3id5droiBiXfU3iwZxJi6TFMV5qxb7jJ",
  "key36": "2oSuqtLbT6SLj24SSbhAyJXthihcihT8qmFe4BDJZ6SThJszFmgywSUg2Qwg6y1UHN1kLpHAdnq7LTXfLQaFzMkq",
  "key37": "2Es9Hi34qca7UAfLM6tRstKKpvGbg7CTbtexUNkBjCBKhid5RjWw6BMqGhPKwH3kjDeAXLraRmrH481JptppDZxn",
  "key38": "44v115oA4jxnHFpr3ru1T4xPSZV8sJV1YsSqi5zPfr1QDdhnNoYqKuVuBeugviaBrYyH1XB48gLoFawSjejej5SH",
  "key39": "4fFMzmtLaFcv4Lmv2EaL72HgTvHMFK12pC31FUuvnX8LB4dqqZrErR99kjHai3bJrAKnzDRWWM7vMvneRLgLhva5",
  "key40": "3bX3KeyfWZHBppYZhRPsTRPKeTcNV4YqqChNKVvTkoaHPPTt2jTXcZhxfxTHK8anmFge2TZpXF8ZtjAcTRBBpqZN",
  "key41": "2V7kqNQtw7f1fEb66pGoEgZf56XSUyCEUdYenpLyH1eGYMfmg8wJ7oPY52BrEEU5jYP6rE7iRarfGeTVtxaDtS54",
  "key42": "FgCNHmSbW7KAjRVFU1iMSuuJjWa2JTSyQ1snVeDB8XsQ8QqAXttKnyc688jXBefqrMKWfBLeBGWTpjhNjjN1hY3",
  "key43": "4SFc8ESr2XpXQieW3S91bGrZD2sY8rbbyUsAQ2TAD7DHL99cyV4UTs1ZT1qzBwkRam3RKM112fC26LdN9HhTHs2c"
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
