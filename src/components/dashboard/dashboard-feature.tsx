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
    "3kCVTGcJmtfHAUtuY4Q2324uDBg71UbQa6qRG3xr7EwUu5RL59JH5GMGUcpTAFBWH9sszcc5FyTnPLYTBk6yvNHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjVhBAzfBZ2vArd2t6YRg8dQyL7GUEot8SfZeJqGvH2owKGdexymgEQDnY6bSZfzoC5gBrMHuWRhgW8AJJZ181T",
  "key1": "2GS4sdzFYxUcDGukZvLfDPGGzH3SzKMK8AmgryA1xbhzELKzqJaiRpMLFzE5yycyNx7zSD19cEtiD35R5ajKcy7Q",
  "key2": "3CoE4qNbamF9gAh7dYnGze5gt5gHkBmXC4b1fV2rN2tMxfi6HWaRsho842S53TTzASEYhKjFiHgyDYVTvLYHj5bL",
  "key3": "XTakZgNfq9hhevzTEa5Fpx5Z9PPpd9Em7Z2ENKLwJYebwAQLWoDeTKtLTgQuxvEDd77tDiwFju6k3ogVeFFvpif",
  "key4": "3SFZGGDSrR1pibY5aF9BSwgQs926ScQ54sjjDpuQNJAiL3S5b22kL2TKhrWsNmN1eoaNr6jbVTNm6GnCTqsVTEYS",
  "key5": "4Lvm2S7NBe7R2qwSM9ChTEsjkaLZPKGBW5bQHsPnUJwUVGFoNQBE4M7cBQ4heg87NnsvTgDbnWExRyWk9hSY1b5j",
  "key6": "5j21yXTVoyn4Mxr2cehinkmyES7TQZAS8AsbWFQwghX45oVWaNSL4bRYkExsKfs75AMJQDDymXCM7swjc6crTqr8",
  "key7": "4X8dy8KPCVW28CiDhHW6acCpeMhiyFpk7PS4xCo2uCXdAV65txim9TgHYuZ4gGATnmyM4oj2oJdPZRpqJn3UDvQF",
  "key8": "2Ji8L8LpA6YrN6kNrbDYsVZVqU5yq2XsSigzLmmVVdpqdw77DXK9knizi1CXXLEku7oDHfoNpbJrcQYyyKqK3wMg",
  "key9": "51oiHmmH8tebkGk9WjPNQC4nx14Nev9pkCAcy9sTJqihaKBmswHdAKPUKsuNbRJofRBn21xGxG3EbwvN1iwQBD2k",
  "key10": "3yFLuop5SmbeqKLtWz1W7yyhhhNhNzm4CvwnzxNAkUj91CymaGX4CBoVR3MLuKpEErzNeH3hNNrYYh6PJeCb75Uw",
  "key11": "5ny2SEyDmNLmsk8D7ZKP8nVd8r3Dzcs55kTejrmgZ2MBNjoat3ioSGGjwYkPZPy3pxyauZwZXx1zA68hGzMPHaVB",
  "key12": "p8JvnFBxYFVHUKHXNUzDVzEAuezcXnRddcs4vac4uo1HFDxUrYQvycpjSo1NZ2BuJpQF5ZL3LWuMWQjexrhTQWp",
  "key13": "28EGMQmyU4ctZPaaMidKXDYer1crLvZzdXVxffuGGUFK7L2f39w3YXZooA7WLu7hG4FgqPYyT9p1p7YieeNXbhph",
  "key14": "5NFBqbuhYxpbkiDTxsKYQJ1Ve4sG7CtYDWn8oQ54dQU5bckXmQoYC44KLR62hhUosP68XnaXdZ5WxoTSYZ1X9ysZ",
  "key15": "3QQ6o8LYt5dWqY5LPzKhEHXLxVRmVU83eJmCjAvXY83VXL1zSczGHfBLUQMqmyhUXgyE4ss7wqi52iHNtNUtLdrQ",
  "key16": "2EkuUauwFML9SsjfBLEbXSG2zjZ1hkWeVNoAy7CfkKKnMzt6tDBM2AtRp4ctsHyuhnQq1C9Y7GUJ1yakqvDMMNfe",
  "key17": "5zdb32aSWXvP9qtexXNAMuL4eifNwU4uYfz4WqbAwpj6R3HKRQRtRHgGfjyeYF98wTVPafKzPLGo4w2hvhCTcUZU",
  "key18": "5bmMWzzUdnc8SHSKkDKVmedLPMdPnrEDxXWrsFu14HBmLnsMb53Kh6jLsbaXhwyG5TMhcjrHzPmNpSkzJouhFXCQ",
  "key19": "4m5Yawr2go7jqCL6whqxzKkT3xxwvQjyGnhQWxGVrQQUFBEMk6U2knTeVsiWJgSLxDnBEHnzv1REv859EtDJzf9F",
  "key20": "3yoLi8xmaQ2QAXhbSbd8LubJB8TK2fGGVnyFxanTEouKT7d5w2LnJQkjf2vNjYLqcPBLRaWAXe3JJ6Exh3K2BtbK",
  "key21": "3cwLPnQZmQpG5MxKxMXiNkNFQJ5eecY6pporB2vHeZHKHu3Vb2aTYvnuEDuGFjW7bjziVJhBqRJtcUxAw7vz4J62",
  "key22": "3M67vhvEAmv3Hde9qZ7JPqhiMnAACX83ofQQC4aFMAcYCXHgNBi1Phta83TogYxNVHHBG4TNPymLsB3tmvufrXfC",
  "key23": "5CsiUHyAQP1q5nYBL6u7eHiU741utBqtX71FtgJWqCaDhr1Mtdei7zGbqh7WUxtJp6JKFuzSw8MuYJ3KUsCSiHUn",
  "key24": "66qnWPw23gb3e8XBmWh7dhhwKQvMWTHJX17QpJrWgptquQnikW5hviPnEEbMYUSZvoMF3Cddrjd6B9gBbcRMke1c",
  "key25": "iUuUYpQvvfS5mVUFp4LsECGoHJWn4N635SMtzmBXag9C7PugStQgZ4gKmFZJrAuomgLwBDr2FhBYfKwFRWzzo2s",
  "key26": "AmYGu5PVPe5KbNKkf8hgHHAi3aeT512nhYYkWwRdaMyJihXJhHnNe56yMBUwXKVfBfkGcrNLNkDz5uQqnAh5gat",
  "key27": "2FAcFeUUsdbEocYAfUtpwqNcQoKgd8t6uwnvSfJRNYwJJvwyT7pPnZuvuZaZnj33VWFh8C4yw9sEE7SotYUCnoUr",
  "key28": "4XMkyHhU4pCURJoaXQXRYa2q3CihGrjBJAikgcG3Ec2V18GRDhMTntYsGBFCr9wXYW4RCHRerdGnofyWv8z4QWDd",
  "key29": "5NvbfW9UzX84G5Ki1DyV8DARyRZbzyPC33zDAsJzvMY2aaBG8ErqeAFymsqXGXbczPQtoG6hzX6tuf1AApPKgk1Q",
  "key30": "3QMDHhJmdVBWDWrgzcRKKRveoQwfvc8MFHob1Sj5BbzCXzaDMcoGUM3CiyuQsZnvmh5uAAiAS2TKizRYLgeQVXVL",
  "key31": "2DLghhZUXVyNBwR33C3NcKrDX1TMAtFYc6q7D1CwB4Y7WeWvU4hpCoP6ViE2UKhs3KvtEYeM3kgypERRxVDyPALK",
  "key32": "4ktjJTxhdmEBZdGw8Uxtg15msdabkJJZ1umkVwBoUbTtJWku7ESnwGG6QsFZ7xp2H6WvrnM9BWh3kdG5vVAaNzNR",
  "key33": "qpjQauddRsdQdnte3PRFbJCaKrAPVcoanadMgwvXLBEfgkUW6BQNZFS4VR9ktLhyePGV6cwFzXxoWMgtwbWq4kb",
  "key34": "2QmWRhuKabGiMy81ZD6gsTJywiV2n7YC3NhGShDLPPfs6CVdFKcr4txEu4PGrUqEAX8iRveDt7H6nnSbtef9RLmS",
  "key35": "4man2J2wJGa1tgqKVs2toeRKPQoRv6h6k6k4QVXkmwVp4Ha7b9nW832fxfjb8Cbih64DePdLsSoE5W1r4aN5X1DA",
  "key36": "3DWei73hhzz6yVDhYPejK1MryHvLrvihTnzk4EmaqizdpQuVuyQRHwGAZ4iMrphz9GVKtN2BqaNf4SNzDQ7aJwDd",
  "key37": "mPkxEuLLFmgodiAoStPs83JthZyfJ9yuQxchUDLcaadqsrFb6Gbog5zb4hy4j9m1nHSjuHP6vM8Cj9Yv441U5Zn",
  "key38": "4cKgtLsmqceNZ21E6b8AGAoMmkDeVxD8J3P1mc9wJuv4R7wNaG5uJ34rD46TBoGabdrTRjUE9BzrLeimPbYXfHhC",
  "key39": "43VwNmjxVrKhkCjSkWXHFK24daEsmpPae4WnMkuEaddmRirDkYmp6Yp2AiRY8ZPCT69fuddJo73VhXvqGAP3QEzE",
  "key40": "2auxeFpoyRttruu962yBnW8ERBkJGqLLRN31vTVGY2QH1cZygxjDLubm9jvE3wHhrheX6dQUxDsk2Sneuxpe8P5E",
  "key41": "34gTN35d61P3EATKdyrkgZCxG1dhf8zH8VYXP1umXMhJB2yPiu3fvkYXydsPxVqh7TAiZbWyTwYDWJjWze4e5L14"
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
