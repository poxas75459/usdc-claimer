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
    "4tMraKUEHjHkyGhch43k8WZUV758KEjH4u1sKTKS7BKQjYmhtqpjGsUeRiQBVPeiXqKBi9LGSGDU4seaFYaj7Mdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T3n525vi6Njdeg3F3Znoht76osxnPeMuKM5bWvnDbM7DABacougBfR7QpGWcHS8fu4V56oR4uwgqJKedFTnMmhM",
  "key1": "5H93J5AdVWfa4Cr3njGwSUoDBKjU7FavdxQvtYrPU37sBJTwzgiJAGpagVn2cvPkhgXg3wjnpKcvghhBJC78raU1",
  "key2": "2MpBPwZ7FoxrpbHDMqVnd2i7rZ5NgRcWE3zvm2XPjG31soWp3bCHbnd9PcJmNuXD3t9TnkZVjSamNHr1mCwVuPPa",
  "key3": "3Vw842xAEidXKKeANzhTXcbuf11A2vpi6o7PCjigbvLDu6L6tPMkA8iuffjDrjBpFrmkdf6rN22DEL72ot7PcP7q",
  "key4": "3AxyJMue53S2cnqnxmanwUwE5rXts9msW9gXSPzac3UUyXD13StenyW5Cc1RcRqhqM2ftThE8G1nf7y8YUcBccJx",
  "key5": "35sg1Khs96T3Dmzb2SQgxK65noEQ4RHTp63YuxHr3Rb2r62fd1VneW5RB3eQ7e9Lk5gPxW3V4mKLHjo6fDDKFJAM",
  "key6": "3YgrbFemfb9w1H3e9C3Lhxwi6anZ8L87H6ZAgD3DDTDQUW3T4PaikcRQYau27USUNbBb4V5m9TKMsczzgeT4Y76f",
  "key7": "3rSEXkjeB2JVgtq4cYC9yp1jzGUSDQ2fbWNfVPr8w8WwTJFgNaJugoV3kdiVT1oG4Xd7RwdGgreJUsWnUrSjbSo9",
  "key8": "3AVfq1F1HMSARKiNxPQEj36kXwCYHmtDsXF6QFL5mwLdLTGQuTvsJN6MUTxUFmFAm7NuvtWERmVXKwRyxgrGfa2W",
  "key9": "2Gk3UEki7Jzyo6VGKFYJ8vQNqoUKPgH7m2vjE4RU3SdunnUHTMzmVR7n7UbykS4zNnqWFyYZiYfkRePi465vfDMk",
  "key10": "4GFAcpBDCo89jF766a2Y5QxDnH5i2vTCMNPF4tuXfAYvSrU8bVnYueSxbtJ6STQrnF4cCuY2zxRwRtyPE6C5hzPU",
  "key11": "4161Eo6aiiuaDbkDCJzaVoCyGieKLNQLqiiUpb9PjtfRVwxpi6AUfHmxWUoTz3FAWdnr6c3rfE1XYz4jkqHPYkZs",
  "key12": "9bEBDEYfHgMFAruCY18UpVVWfJhrhGQZqCbmifrS4et1SQKHwYWchZwa4FCJA4un3PPRqE2r15d7aMbjUqgrVNk",
  "key13": "4ipmVZgKZ23EnPsCmgXuxa8YNQikJxmA8aHbhbAPFXjEotP28cuP7a5Sh2SpEvA6RZGWCsaCHLQ98naQKntkqwPV",
  "key14": "6vupsVqKeTS6Bc3m3eq7iCZ2YBDtAeZSUmLCNvQT5PkbswGwbGkzsEArGiXVypFwgVz29QU3XzxC2oobWgLq45B",
  "key15": "ep5B4N9gm3KYmyAWwzbgCVMPyUyiPtNNikada3VgjALb39SFTXH39RWeK2UZHyoWKjC5oHpGKdvcQnJ7pwUKbcf",
  "key16": "2zFKDHxEAqaJiEu21bBQ7Avxgi79Est2T5BKyAqT5KwSjqhZptmpqsDtWFLqMxEqNYtR5YBQZbw9NSgE1Zd3S26Z",
  "key17": "2pFPsh15brjjwfr5Kcu9ZRGxxgaMxkepevF1ZdXT5jtky8Nuzw6iNXsFzihA5g2wTvPcrd8Xrj7cUsgHJz62AwTF",
  "key18": "nyaJpbMiaQReabeoEZDMNQZh8R2YMNdTVkK4zZ972JsXm3turX9wYe39LqMfZkPTZNjSPMbBjzvTJA6d31WJvSp",
  "key19": "5EcnUSQEdpfY6BVE6RFQZzUFqf3hEVjwSPmrN1xkZH14S8vMBXjEAB98dgnXioC8F9D9rDh6SBSEUo9xWQeiNLun",
  "key20": "2H9odPkDDWQDue8ybPotdR8FoC1WVC97QXwyLQq3y4YXC1SsXatpFANYj3sMHURWzKbCwYwJp7iC1xLKcurXQBga",
  "key21": "3gFsVbmAgyk4G7CBi5bc6ktpSboGvzxwJT4uy5uBbkx6rjtGGECfACy3bNPC26sMA748dp6DMV4bZgcUhj9dFXmD",
  "key22": "4pBMLdcbF3HdZk9gZpt6u6FmQU1Py8ovFd5ntZNHQXCndDGW8Z1ARe14HkEDJcxCXAW6mgjTH6tLyFfGiCydJxeC",
  "key23": "rZJxrsNe15wQGpp3nJK3wP7jfsSvsi6mcEoXw8YKo7vfBaM8PWyXGfmG1WiBuDDgnRSypNTwoxRJw7eD5DDuZMo",
  "key24": "34itRCXHMekWoYHeEf3dJ7d7kKut9VD9c5VC1qTfPaexohFSnE3To5CZS2UHkDYjR8FjAxHy3L8VBQWSqiAU21TA",
  "key25": "5vVBqLJGGA4yWjt8dL5g77fjmx1oFRn5Sdmag49G36K6JHgVZJ7obnGen3SGUxjHCyU2Fa82uAJwDnNGcApZWxr8",
  "key26": "cjqr7nay6kL6kXVzsg8ozYreh4EU7p876VRntYTWa4bU1JNMZ5L6EUGaAmFYnW6q8FkaR2xQgpsU64tiCNUvqDR",
  "key27": "RCqVkBDv7dB8LSe3Hp2iJWUJqJLbxqW1CRMTQoLjxKWebCaeEPJpaZdRKqD71K7xTVMGovK4LmxVgTMZkyuVZAp",
  "key28": "5SSZM8RVWao7AFipowW6FoX3gJCnntZy9BCw4dprz7wgf3Tstbg4jPaTtSwm2HxwnGda6LL7WEtwHqgq8LAE5j8N",
  "key29": "5FPiLPo9HjvvTbQbny1U6yBreZHq8yZGHqusU1hbf53SyzccHuPig5QNs9vmjJCNmmZViETnAQ49HyTkKuMCx3f9",
  "key30": "2iA9mD7FtD8rajX8J1tRrt62SVVNmpAPbtYS8AD5eQzJCrsb6tgC2MCVoqG8uwA9jiwpoMVu6wTfjzByN8vJzpYp",
  "key31": "55QtgYvTYhaXP3QaRmJ1SjpZRp1j9YvT4j59hBYAZwfYaEGTmqmQ29b5k8XXbbazDi6CiDv8pPxx1MxjBWxAfYfM",
  "key32": "4mewpLP8ZMFJ8Q9pahYCuKkMyEuAEh9HJ31pzo9WVT7K2TqtumRenGpNVkifxkMpQ83JYRL1YnDfeU3T24NrePeF",
  "key33": "5nct5Dv98AGfpJdR2N9B9eQZVu7jRRMiuTjUPV9z62R8kDkJNBCX5jtjwqaTRrBsxg6FRv2oHjKJQx8VHefmaFSC",
  "key34": "dZwtLDa7vPKTVJapLNEqwTAFyne8GiwcQ95oZKhBCShd9aEvr1AgMugnv5JNmrdv6xJdWqp2N63k8okWec2XtW7",
  "key35": "5Z4quRjV7pW2EZjhKHYpd4MWumXetsnE1nqqNDYtwNQbTf4evPwS8CWUeC5SRvnpxr5hPRJBKMs5ZGNeAj4cqaNH",
  "key36": "2xc2zxdZ7qTkcGxRrjoZsxc5nbiigRhysacdnDaj3cm9vDmzf3PatY9PKQ2jgLz48uSh9yy6Z5P5xnMKLGwGzrgR",
  "key37": "66mhLdBemo6YpdcoK2hTU3TCyd5vHB9LeyxEfRhNyGbG9NFhFpW2NbcRf73EKKQcMNZcJqY6NdZZxN4mFWS5wn44",
  "key38": "3WzWKvjQowZdH4ZAwcP9EaX7ZcjXoyPfFUw2gCjBoBVPELCy13xSPK7tne3uj7454GCnjwjvSVBciPRarptqnhhe"
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
