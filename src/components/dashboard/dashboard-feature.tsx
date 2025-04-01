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
    "2zoWsPmxiTNrV8Zr5gACfJm6Ah9NqtmMRceY2cBDyyhtigEjvZTZV6xky2RGVKqUzPxTh8gJzXhmCz3t3QWsreRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zgPE8KWvAy1EArLue6pQKHHBgao17XNxzA8X4dLMyQaVXByQm19QtH3xaGed6svubKHcXDx1tTNYVZKUyPnesq",
  "key1": "4dTptQBUm5QxmoFyybmLWRCjagHEWzyAJFmGLMqQAwLinXuxBxCt8JEBNhXt5h3zHwyd8htqogKD95y85DsFLfwG",
  "key2": "4xyjHaxdJ8NESyD7nKufbFpPnABz2qU7NwAaJYNgJjj35nZaK5LiweWGmat3WXxf7873BVunAyUyeVYLs3a7otz7",
  "key3": "3EGbdDzTZXNPYc2nEe8qandsAfsumNMmmiUV2Z7jMYqR8DfAFvZxw9w4gymjhj95RfZiwCAWtfeF3LwBEJRWqfov",
  "key4": "24otxVgGtezzJmiKTYWwwcAB9LLfYf6yZD3QisgRyz2P2PHbZqT6LD9yBLz7WSvxoFRXVX7KjmwKjWSDWM1N4KWy",
  "key5": "5tUReJmzvT6T12o4naoQdfpqsdguseArppWVL5asSCciUj1wnH1rxCXoyTMh43Qs7KpbFGL6CT9Scb4dUCh5Ejaz",
  "key6": "46z4fCyf2uDQauJwuTuTkhe7vK71runhgRdA272ynWig636etKEMDebGcFj9kvWjdRvPK68erLr1Mr1vYSFDWngZ",
  "key7": "5xGRu6zWK7zy5wdYq7npkQCohegg7mcDxtLyT4A3Ntj6pv1nEeD6hqrbEyZYuSwv4v3EWFs5xVg8vG4eMuyVm3k3",
  "key8": "58Rs1rWGjS5jdNHD4qUMLCJNmUp1fqXcfDDmzdujptJexj3gyQapiXyw4oVPgW942yomvwHgCCtK4WtsUSfR8ML9",
  "key9": "yLdK46kj6KvGXyFvbMrxsNSajWAahk2p8mai648nCrne1CDd4fyzkBmfEhsApmkawgmuf5znB4NmFe1wvrgc7Ag",
  "key10": "43YJcrefxHx3xd8twoXLP4o5Z7qvdBY415ZkM8UpVM2qEy5AoHNjJtDVJ8HcNokkRBF9pzkxMSfU49jQhewtRxq6",
  "key11": "5inm8Qz6GSGaMeHCc3Wpgk8XXwKWajSd73QvxdaZNy6ouJJFBTKcLhQSG6ELLafafKo5hkvanveH1UvXvZ52E8zd",
  "key12": "3WbkTJzbZKq173LLPwsSdrDAoFh8VD2hUNFU64hwHg5y5dAinyiJtkFdzM9yTjYXHDEw8jkBqMgb1Z3c14puLfBV",
  "key13": "4XC6R1VJYSSj2hQ7tea2YAVKuQZ4nuRQcvCB6LtLw1mtySLY1fxH9tWqsR8gyc83M3RJ1MsnbGY7b1FingYLSEXV",
  "key14": "vNRUon5V7G2SB9U9qZXz4edQcTxYwc4AJZehcBwT1FvpDWPaiq2GWW6k5VBhba3HRavdbc7CjZ1vwpPevkfnNBC",
  "key15": "123Dm5pw1WjK2KmzVH9yquzgLq2Ybn7DJTriy8yLaEkKW7GoLs2LSiLJtQAoPjjW8pUUYiT3G8P8NTM6NJ7u8giY",
  "key16": "54S9mP6X3sDhxsZjtyVT3UhpmreGLwo1agDsg7o9fsc9FRoJ65cpbGTHqj96YfmTxh2JbVkQzYpLpcbXDbi4fMW4",
  "key17": "4LM2LcWWqYd3WzQMRMM65B8K8kHKC3q4GYZ6tCk6Z7BKBJgBB4N9kAKzQLtKPnh7aUUn5G5mogq1p4XgC44GJkp3",
  "key18": "JzKhW4tDu8MXYXWt3vSKvH3F2uNRvTt6Y1cjhvmF8QQjn5ViJMJkSQJ9L8XyH5RhWd4jUZfQxfs7fhLSFNWeHmQ",
  "key19": "2kejsZDHUx4PuvLGoy4Y12qvApAw1cxjfKdJg29VP2ywCJrG1u6o5F88KkpLLTDaxqwAGij9PS1yG691QQMvyWsz",
  "key20": "2iu4ohh4iHRvHbKRx3NDYWrLcxrDXCHu6icfcJRciQPyavkdjvdiDGeJVjhqaKgcrBBGd2DwFq1wkrj1keFKo8sT",
  "key21": "4H7JSynqL3RVRuWBF23Gqd9FTd9KGiKMVVyf3PsL62jYuw617N2H1pGsj876uBmFrELUbKfBknYFidvfG2gmEnmZ",
  "key22": "4vcGyecjvgkzz3U4wrgckHVxVY5xM1DdruimnGpSFyCQbsrqVFnYAewg9N6t2z2YZxhbcRPsMxSjFnZ8ik8EN3o7",
  "key23": "dbeiCCpzk58Kc56wVTNqywpzaqxgtq9NsnHpKmtSEfkEJ3zfrwiBymc2j1GaTkNTNBmhbPvdpf3Py2oXgJ1XXtJ",
  "key24": "XbrQuLDvp1ioiTGi3DqghmAdCCHspuEK936grvmD7VQ88S9KaCdwKfLGWheip7tvjzN5bYrj4ydxktuF2douZjH",
  "key25": "khBtGoZ3mE1YbVBZfWVQpQcgmxqtD3FMzA29uZYjM5vtCtY2ogoD7axSQErBGNFVYMqNmmysU516yta8SAHE75y",
  "key26": "3FLWKe6VS5PBfmD77f5GWYcrmRE5UX5vVvHbMAoexACuvcKGFjR1JoaQ4XRKMnqWFtufDEKghGKuepoQGsbJzqUz",
  "key27": "5TwYmBxyt74S4gJu6JKJdWkSRovBxaayaD1CiEUDGyj9WcdGDaZrhsGjEXTKsLu9AmrQAeNotciGi8cg6jzfsUWQ",
  "key28": "5H9XYV3xFex8x7kDCAtYgLBvqrqcecTRxThvM66M5aU2jz3NL4T6k41TyLeZ5MzGUU2pfKcYHmdsgy2c5RapKdwj",
  "key29": "4yspKHF8PiutEuX6ueFbw6kEUaRzSNBZWEofowE22UV3w4Di2b6cdQYjCvGSn7qDhvFE7AtH3Uu2grwUGEjR5ARQ",
  "key30": "2vpSdD35ziKm6G2zSfpBjDa216LtWoNBrwMib8nJui2SekT4mDXiN3Am3MgyWVB6KJuo6LToGm7PZ39mZn7aXPrr",
  "key31": "2DRHCEAM8TAZP9A2AHeVSPazMzvZe64qnwaMushbmf79MjrkpPJREE14DCy59WdfCT2ba86F5i8iFYYFntaJScaW",
  "key32": "3oFcyikN5ttB7mmTDJmDp3uHVC1rTVUqVPYzJQGfsx7LN7fCKzqQ9zzitxsUHoz9i9evegsb39BCuLQmm6f8LATF",
  "key33": "3Zyc9XPeVVn6k3JQxivta6Qco8gGuUyFDQaKPhKSmugGKbx38xpAfpSAt8i2DspWThvNYM4G6DVsrZKAbiMLz5u9",
  "key34": "36BzozixHkHogaxGz8HPsu3CqbSSSYRwLPmV1pdtxtfJXU3nFrWDuuMbRqiGvHyi8XP98mNygDL3PFnPpJTDh64Q",
  "key35": "4eTvhw1uR8hfmjnE6E2SWQEA85iWxBu89KUBpky6FfqWyKAhj5Up5wYsrVrrrsHRkAR8oVC3KX3YxsbSdoc9a3Hh"
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
