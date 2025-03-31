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
    "2PHwtDv4RAn3qw9njLqsv4gAT5XBuRhWWbtH1hKoQHAMDxEvbzpKNEjbHSZxE35DqEtbPbcg3ebxYEb4mG1tYpjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pY22X6g9gdzeDpf9usQ7xVJWxTi9Ykw7wrBn2fmdU1XbdMwGw3bEBKrS54K8hAVmWyEpmsLBzAJL3HbjCQ1AAY3",
  "key1": "3gnQgQheNfjEkakKwfJs7SibLka4pHiKXYG6Y1hFC38JLpTZRoGeVkPZuZ179w6Xsqjr8KaZCtuFzazdKBzigb24",
  "key2": "2XE1yuuxUbcxESkNTuxNKYZLD6d9GyVxPEwDR9cM78DNv85qtjqLGaPnLXFGWKmEgErDuA56zi2tLfTnWbf99Z5S",
  "key3": "3s4sBJeLaZtTSsxgXmkmA6moSsjBkSsutPChTvCLNM4PQHKtbaraC8unrbEzf3ZbJVxbbw2FTKmxTeMYuRqxcoH9",
  "key4": "5arSkSmCrqS9Kh6KSURjLtHxexZCpYQYY6GeKYuM7VBzEXBPDMkRWZK16wDDgFrrkSrFEJUNxFVaqwacU5Cw5xqd",
  "key5": "2NWdznT7XKEJ33KpNCsyJHD2Kym4PpswYhHi9t37dgsFQnKKwksWd5U61B6TPqzYPS6GeiP3nmLhpBLR43uHfWgE",
  "key6": "61rBXGHQq9WizHgGFVoZqA1RRKUF8ZAZ4kaQMBTXiJnCsP8qSjmG4pxpaKpJiNBh9YBR8DMha7xBBC7W7iTyDyV3",
  "key7": "5BQDzF39iKoaBY3AjPT5rmfmvN7qHLHzXH1c3u2JkyP5ydKMhmjjizZzc593Nt789RvD2E5vjf1A2GCEtQxaQgcA",
  "key8": "5sSwNmuRCg1wgEVUsBqhondUT8HyPtMgVZ4TyAnkYDQau3nDKViWFPahFCV4dWxVpYFMch3AwfRqvyDrGRxwJmzd",
  "key9": "59kaLkz9u1M8McbcPYYkSYBYRQySdv5vBPLnjJNtvCcUDV7R954SYH7XNJupVyJAwK6pNguAL156hHKaRCxmvbfR",
  "key10": "2Y1B5XPhaqQLzJEpgACnp99sv5i7z5wkARpt8VEXE13ynry8fXCsDobVftPix2dX3XPvCUqTtvU4aGYJbpgctpRy",
  "key11": "5pECudKxVNeJaqZdu8c5CmoWxySmX4RHFps24TUXqEcDLB98AghrU33FZoEKLLovTNVjWRbhDhZkfZTqEkm9mXUN",
  "key12": "3vs1Bt4Fgk6K6qt71LfewJnqK69WB35f6RBgaahgrLszjwcAhAJdKvLa8ao7jwutoAXou4PYr1ct4a69LjTAiWAz",
  "key13": "2FFo38wZBjJrK7Qxzx9k66owwtJuikDFkMuHqnQCvY5y9s7LXiFp9bNBkzXALNeKNuGFGnk2V4LpH5qYCxbHZ6Hg",
  "key14": "yzJWQvxjN4hSLGvAprU2isapug6ZojS5iwhwfQA2BhTd9oDddBSt2EjouXv6AdB3YRwMHahHW6nSXA9tQGDMWyK",
  "key15": "4jTzRPUkLCgUtx2rh4eXYs8iaP9LSN9R5rjAyx2RmkpzTkgFiJvACvbCitMtmPcoxmgQ7BK3VUZGh2GSjscRWFhd",
  "key16": "53VtTdHNCTsaJDr2critfwYhKfGeiK1m2FvFy2weuTkbnYYRCr1kQYzc9heNEpmqBw8pjAfA5gEhUVTjLWSuDTrn",
  "key17": "3VXUkTobDbTcoHRoG5mXQ3iTPwFuBcU1NSqB4dXEEm5mKWoSk69FwQVQBBBGB9t6yXh6tNNuzAwaEoKKCbW5d5Mu",
  "key18": "2TRPWiPtdAPXLUBkviVWgp85aPtdR2rtzk6q58s5MAtcZhR3EozUyyNHRPnE1EJqMXjmPRJH7KsZ5tsNFrruh88q",
  "key19": "YMJ8Kido5Ar4GFeysZa1wgq2BhvjMk8WA2uo1yNHBpqRvVSTxwJDG6T77oYkd1XcACRoj32bYWUaqigHYrR1rvd",
  "key20": "4b99gjQ9KPXHVmFzyzkWqoEiecAqnczHR1VoKUQWSXBRVrjCCboU5DvUwgBAD1JoYwsySJMHLAyq3V2G3M5ezPFW",
  "key21": "4HH4Xw6s47enidhqLPEiiFdxjufyy4f5FMb99G9DiKD4nSnRtF6GD2NoLRupoTMzjQ7ztXyFqdKADKEibK1ewH6z",
  "key22": "5btuffjqYcufd9vBucDgaR1APzuDygRwbLJtgJhZpiB2LB1pjVNz9nRzpw2fr2ngF2tkhWfCLsrVy2CuEK6jqJmK",
  "key23": "4ZNvWSSm9f36LDNjdmenfnE1wcwvNm1UVDzUWsh44Hiqk4MWQityZGxjE58sinGLmhemyEDu2S6fFkioH61iruVT",
  "key24": "2F76b2ZRW8mm22pfSW53pvGdmFwi3HXP2T776Qf7byeqWtTEWBeCcxJmzprj4G4DyjHR4Arytrzjf2pQfvVFSJSV",
  "key25": "5jDFLaMBft8Ec6nw4BE1L6vp6ACubC1QR8yqqqDQXPhURcJBu1aUwcmTgU1ZJ2cJW5uqbSoK7JXdvpTpg4ybG3Qu",
  "key26": "2EnrpDWE4xp8gAAnYsdKdQam1GjRuFyXvgfEY2ZriqE5HAPLsyLTFPMc7zReqVFVUnW3NTcKZZPWrsNPHsk6R6YG",
  "key27": "eTqwKvU9rbF2fvD5K3E1kKcbHSkTw76DsCP3dLCTdbZbmvzopSZdfhcW491Kr5mu6e8vHiNb32RMoteRZj6XyFr",
  "key28": "2Acj19SiJQGGeN5miAp8jLVnByJtZkEFUrudxLd9FE9ic7dDDwgE6eQfJYGwYZNbznREjeTBkEo193Tjov9adUdn",
  "key29": "2XiqCsBHDLoD77iQvL28iqSnbf2s42pcuvjzbc43FdbR6q8RnJLCvpu7tFNfxMfnkNeRYL3wJggkaaR75Lkb56PQ",
  "key30": "G7qFQ1SjceQhvNmYzTvX9A7SiauhM18zKeiG1kArTorcgRxgccLPndJ2qY7iQHzUchfjvgUEisPE5USHhPZqNdv",
  "key31": "4HaeE7k14cwGjp6fd36ZcDPdbWJXsxGyKYRS21pdyRuW4GLvjFxb5muuGDT49tjZSzJ1aJourYNEs7mCsmkr1fPK",
  "key32": "3U2CHHNEZPhcWdEEdCLRxfoQqVByJtqdCQRhii27SJB9nuTVe2r2hpQNcAbSKEfuzt8LNy6UhVpi5u6vTKtzEi9u",
  "key33": "53XgjyUhst8ApQuRbXSBz6Pt71kH2N1UsdrHt9mv4qupoVYo7LAfS4gZ4djbXSr5EMKM6kHK2nhoPENz7dzUViKM",
  "key34": "3T2C98dUh579o2WMnr9LG77QSPGzXKfboBSawzKoyrbLZipyUCrriPuyF7MqJb1teGyf66keBfVfRwgBQWjtC9mf",
  "key35": "49JkkcNwqYrzwNBDiLTgj7kwkpFSLe3uA2pZSPGQ45reUNUPZMSMbXohtqo6qrGcfHZHnuLZrBkv7shBNZzHoAfa",
  "key36": "Gc2aNLJaH4BWsTHesg5p6GYEHtzDkdJdctXabaEnd8xMY6UpaCLsrtkxJ1yFGucukNqvULNJzPhoqvshgoAoGjW",
  "key37": "8WP6ANQczwMNfyWVrST8myJHy3U3RYH8X1yGXBeTnRfwnav7y6DznTN8StkXJF3SspE4KcHDD99Khpk2VoD37aQ",
  "key38": "5vvL1vvg8NHmktg1SFAErryHBDJBzRHWYMvcG3Ag3VnZ3E6nzA7xKaPLbHw7wm3cvWfGx4Xu5KtW7JieUf4cR1o9",
  "key39": "4QTQafpwzB9yY7Swzgtuy7BntVsHNnrYvS3FKXxcVKxfNVXy4sxCg6wKK3qjn3enGZTctPZygiKSwfQD9hDcYrNJ"
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
