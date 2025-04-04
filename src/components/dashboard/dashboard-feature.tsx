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
    "4kAxxr9eiqwvLGBv7AbTdEM6km6hrFac91C6ZX4MDZMJ58kJdPo3ZTA7sJsHBeyqoUfpV6tdvU7xnqzgLxsfM6S8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yDUradBytww7UFwGh4wCZ2KyVeeNBvGTnGGxWsn1gCanj7rPXTKQdCocgEwGG7mVCiXwmgutqCkDxWZskii6HfN",
  "key1": "4iZgVPaRprJ1iwtGXRjY7egq52q7JA3kZ3fpoXvB9pQHwZTC19Kw6iRyE7Yjk7iuJ9ij5b2uZmjVdj2UyjRkPzci",
  "key2": "mwbtd5tiNJYMntMR2YTGWC34ZqbFx4mvRsnQ3PxsW2BFo8K1uknBxJ1e18Hsk8MStvJk6wLVCvV6kXxcJpkPCVk",
  "key3": "3gZ6FvqJ61ti2ipE3AR2BqZJNwMFKH79D2zLzohEyK2kndc42KMNxv9STFnqCZgeNG2bCHaY6nGaBc7A8H2a9sjU",
  "key4": "gGaCKhqsuXi5fRHgJG1YpxcsAgfSN8TXFtRbL95VMX5hEayHq96C7Mfpw1QhsTLHQ1vJrm14YFvcozLV8WMfsHB",
  "key5": "x2EkKi1c6vzebAN8y91ACfHoxBo5LdkrDktNHahq61eSarYKq6BBVMLgTHUSEBbSB8AsJavtCnYaQLzDVuBYAsM",
  "key6": "2K2hH39ErGMdqbzpSPPDYJsY4rJ329UeNWDySy2hiwxFvYEpq23WSYx3HhgmytXwh3sZV1V3FyzDtDQN1qKWjv9L",
  "key7": "8fJTm94k4X5CYXgNQmvwct24hW1zdGjRy3rSZ2b3PttMwLxbZbTCJ45wFEogALUFvxNx1iGa2igjC8DBcodpvCb",
  "key8": "4EXwWDfC5yD4GE6zpJyWYhF4ifb2voKCgtGWpReMe6Cn75BrJpJ22AJXmFEV8cScVJzNYEjqy9VZGHTTchDK6F97",
  "key9": "4HtKGEjUYRzoVYHqvACYEPwj2dD9nEDSEFpawyhq3A2fRbpCijuCXxfQSSceqpLjY2JsRFTAF2wXiMc3a4AFc1eZ",
  "key10": "4izwpQWbXZwTpDV1ECp6PtedsqaAtK6BUp6MPV4kptvcRM9AZrcG46YWvoeR15ATEhZViWXpGJQLqRgZHk3itAkh",
  "key11": "3W4yfnLFnVCvQW4yjkWxMBbkW73ojxyyfVJevJPvtLMrcApbPAfnqBPHgeCAuegGD8PwSssepDbeBqLqFxdoiGgT",
  "key12": "m4JrLRJD6LpuBKQq6tVEcRVPxtFnoWNFUJKVu5cVvFJnhCXTmfaWr4PEmAFrbUwYCgv3XR6CPX4CCehPw9cN8Ra",
  "key13": "56mfwYZ4B4jpcujhcgGmzr4Gmn7GBvcWioe5VZUUomY9Z2NrsZneJ5JHy1cWv7h3ZGAvQPuU3jff3bCKfxqrY1DV",
  "key14": "2rFw48MxpJzw6rmAJxhJ4Kntdr5wbDKxVYCvg4mDkpy7MMLa8KAeE2ajMeXeT9rvm1qAEnmgBEvb2i7cqinBABPG",
  "key15": "3xqt9yau93q3VbvuPPJxo6N4QNttnXfknVAWJanyDTiyz5MTxmbxovRVRKLBi3bJF3wct6wQEhiWWe3mdHMWaHfj",
  "key16": "2ARHLeeVUGNGY5ZtF83HuL1Kiw1Z6FTUrkJMvEGEr9tQp5tP8gwntmHFBLCHa4oeRsZRFQV4YNj9wKBTGzdzmbPT",
  "key17": "4Ezq6XeSxU8B6B7YKVqWGkLJw6xobXzv2cNxkuYXkYTwMiESmU7iHw1MgPJ22orXmMZ3bXpeKYpSi4mVD5d6Nbqq",
  "key18": "3EmNWiKq1eDc1g7xww7auKqeYSmNY5rvtrUr47H7nHq3t4PT2jcM8zPM2aGRvWyhVRHqZMKN9Mc3AxcCbH3onoCV",
  "key19": "5ERRoT9XwrQ5Qk6ogS5TVYqCKx9jxAiVUnDKrmyUkQRUYHJhpjDodyYyVdJKjSAF3b8CaWu816WRse5hFSaKNesq",
  "key20": "2G5yD99KXEaFHRwykhbH4doG3h43s9CbLyM6kFxTRF5ksFHNKNDPnDddPxzfgcAdpEDDqLxAtk8PQ4DLdRdZFD3a",
  "key21": "nwEVfSL7Ww5gFNRrDTT3QBoMSDZsbgNZ2S7CkfAWZ5yg9cfpBTTxAAB1WveEyitwEucX711LaqMZQnwhFsyxUTF",
  "key22": "2WV4ozxENSayKusBbErEEmJqT4hKVebbnESoDEpp4NTVSsT5xpNEA1edCaWAQxMvSUwCNbbweopxnS21BeVj1Rfg",
  "key23": "3SKsb1ZKuPwuVohfNGZuhSPny2hWoaNeaZkKXLKaGVjMh1qD9R4bdBp7gvrmnBj5kVqVc7aPpxKjUxMSDySKye4J",
  "key24": "2KAxDxc39fEBSQu86ettFgaaPadwMrGRmJAy2JzdTveBNc4tJELyzac7hU9BiCnSMHH85t7Ah1VvhHkrJFV46NkN",
  "key25": "56Cf3umu5ZiYiubMyC41LkbgVBNZUFHrfty5tarDZM36Z2VeDHgvBzhRozn157TR8iM1RNKkQF4CsnTtVp9rcxLE",
  "key26": "3xiHgrYiBfTw2bsjEDsD55EPQtXPaRoeZLKxxU9HhpJRzNbRdJ1vY8iF5Qhe7zsfz2EFD9xw9TWGCn7pLxA2CaVE",
  "key27": "2uThJYYdcZZ9h3mngvZkoYxqHznQpszRMoKSmaJi1VUzXvfcBnC2bgZSagpkWGd4pUnJDyV2pMzsYNt2rUdSg8Qw",
  "key28": "Nx6ZErefYrLN2WqarCMe5yGBHgBWq4HxvB5gCnCdAXpg6c6Mhpwuu7GGxRrzCYkSU5QcnZy9fsvomicr8zeLrjQ",
  "key29": "4z4qsmLmNMXSsgyfXUtGqCTbxUJRmLdwEakSMFDwi6U5WGhmFDChUzgmrTHfU3yeJsMwmNiAJiYTKvySGQYiCcxK",
  "key30": "2oZv3TRNHaTGjQePbs55WfhvCs6PNCMAqb7zKwW6512mpqAeHf2Dr3tgJ8em8SKStcnDz6ACGtxVJ8hsmzdqBQbZ",
  "key31": "4kUvJtE3VQjjDwGe51s4vqhtm6ixkWYzv4QwdiSSAvo4N6crYRRzSQ561bpiwzYTqxqBHTf4Xtewi6w1YxSdS271",
  "key32": "3HoQJ2teYPMyuUsfWoh6b22VzMobucQjEmvkWwoEigRpJ54P5hyYGqBEoJu3xEaHg7tyRcniitHdH39smu26BYt",
  "key33": "4FfGWdtA7MQ1gfr677CRCmyseCGQ5b8m89TNtB18EzpC4poAxXNC1vB7iTM9ZeC3iAbfqtVzPvxU1kZxDefzdw9T",
  "key34": "4asumjSBDoHiryNbQsyzzLN1Dyctrz5aARL6nPJRGfyBq11U87cCC4GYyvcvaWGBduJamPecVsReRB4NL4gaNpSS",
  "key35": "5yitDu2q8XJjYWXh1iqUXjgT9DwSSW9PA6BTt9mb28MzR9Wk2UkZM23i3brCV7bPM13ArZudARF2kgpnxYTKjZYH",
  "key36": "2FDpVjk7jswPVYcU1CGSwrDN4Rjax61UAxcMkg5y2Uuc7q7idNzcNnNp1DdrUAeRqJ3hDkJu2NH8MN4QysZRjNim",
  "key37": "4LP8NQHzZxV5LJ2sgZ37hsi6MuSViGeNkozTfQA1PzYqzA7tWFiHsEgGkQVA5yWRer7bNE7KgXmm7LFG2n1DGfKT",
  "key38": "54JBb7FkMcQ7aWp8mR18PTTdxy4KREGgmszFWmZZJ7zuo3V6dHrivCpHWupf1Mn6TwiVbx7it2G1TDn5YJDAF2Af",
  "key39": "3hHChztJmitH7cD96b6KKiLJ94kKRkwQsr4A7MNsxSjwpKKJMaa4SCkvrMzdpyxARTBneEMwE5SXemKFJ272SHmy",
  "key40": "2Moo9DfrtztnbReJKgeTY3vdcks4aURmYt2x9erZZCQpQmkP9FMFczJvPLS7MUhCN6xYsz5rHgLyymjBRhssLghC",
  "key41": "2zmrL89JKMk1mvTZvNU6EcXFvMY6c94VsfH4GPsR1CffZRtBDZu1nXNoxXPZVZHwi42FouewrGEahGC3guj3AT2P",
  "key42": "5ULzAXBJtMhJPzUUyGMShMjpPG2FDZiExgnrdLHh5LtfjWin54wWpfrN4qcnVDj2RnmqZt3hTDEmSN2ojnVTy92X",
  "key43": "eDVgrHQZiJVadW2bxjA4Bt6KygKX8ThgMTybbbSF3uU5h6PmEKNhT8ufTM2VC7foXtKMeEHyA2poc7kx8g4zEY5"
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
