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
    "5Yi5Bbo6NvR8PzaiNrPCgTo3ocz9bGRJ8Scav6TQf2qTQzKi64ZvcxAfyMb4w77F4ceK4mtrDiuJ8mnAFo4A8viz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ewUP7Ea5fnoCjG9uo6TzCzYggAa8itgU3qi8wUxBLuxY7wKk9vwqdupHeEUyEij9XBgEDCHsFoopEfoa3g8344",
  "key1": "2WMRPSU6AKrv2jU7HzCvaUpYLCcvXur7Hm4vvU88u4YDvdxxvvpFKYDHzEiGS7DKK5GrA3SiWdQncPWLx599oWjq",
  "key2": "4hcBjYZzBbyXAavEBXbp9fArb4WXtZ31XF6DqgJiq5isnaN5g3a2uk3jnGXZpo19caYqxXh3WXDx7sWAba3REfpt",
  "key3": "5J5PvHsAgJ8r15qK4eZJXqSsz9A7WYmfbjaFpBgaabfBcupGkqsN9p6KT873vM5hP3o9BfCErq7hF5PXzT23gnZU",
  "key4": "127VS6gsJHA4buSjromNFT1JcGr5ND121BLTNPE9SAJ4NGzPVoxFsMKWp7NrkhM7pDyYtYGFS2kkc8v2Yhpbq4EM",
  "key5": "2ke6YHwQRixdqsMqKV5AiMTFaqTfbAjjJpxXjQxctArmPQTqCejjzQ2J92qYSNkRiskcWF6wTZ2srJ6qyqnEYmAE",
  "key6": "4pjCu1YcjczfDhW5SVJDPLf7YNU1s5M4Zg5Q8Ew9ciSQqRNp8P88beBc3D44zEuVJEHEJb9MJdtjZN54nY1Kwrmu",
  "key7": "3AZAW8eMQCqnL1WuL3FGxn8QZZP9YkKfrSkAbn4gqZWM6Sd4ec5YJvaJ2H3Zon1tCSUS8nBMU5qRW6KGD9xpWD3S",
  "key8": "4m5WDWoJVMhqvtxpWU2QduX2Y2SjbMUXWzRL6NFyXWiyuE6V2SYFivDyikpuFYizcAL2eoUw9RWLubGtV1X8KKih",
  "key9": "2UHLwFkgKxfKr3DuJL4sB8ZSH6iwykWuXY5xYLdxR2La7VbewvprPa1H9hok9xb6cE9hSXumFrkpLw5aRY3gKdcP",
  "key10": "rPdW5sofSsuQfqkxgogwiAf7WjhaJNmb4AwWVMvPG2D9KkXGpqXe5PkppBwcycZJ2udEUGMP3pbhagntkaw9seR",
  "key11": "VUGm1utwX5ZbcCsKCYp2Xc685DmksDs4CtBctKTuUZPtBTiNeaqzPzeiFnxVQim5GUaayKkhXJtsfQKudvLypED",
  "key12": "5cDYoupCAd3ax13RypkztZC7Z12UZuZy6r1oCYh2LRfPqi5ErjRSyF5HrLZdyFLTV1Tv1oUshvdtPaBYgxWRYFjL",
  "key13": "2usQRXLmx8K6NHCGghGUB656bWqGnEmsYQtryY1yYDcSnxfUeexoHnR8w59fc4azVWaoDsxqem5pjXoLG92jH2fJ",
  "key14": "29bfkZ14QtBHcvk6Nnk2kgu79NVCCA2SBYSNiVCa3aEf3j7EjhDEfP8BB5J6yn29uEqxS8rbv8TfwtBeMr7ZorY9",
  "key15": "2LdFJEgXkqLQBAJHTMtnoP57nAzDMNaV5mUyyk3aYjP3BSz3YbiVYiF3r9wwxUbfZ4dRGRYT24bFGmdqSjCzGYwG",
  "key16": "2D2ffYfgeZ9SrFF9z5PVii7x8bzMQe5m7DvomnEnBPDwDbZzD6SVk2MfuWxXzbsCLbaEgJVJsXPAMCDdA6nYdJr7",
  "key17": "2yJ7Ta1piPqek1ax7Ueyd1tbwgPpsEnKFW6Bfc9JnXFkPnNAbbvTo4YbUhFMKjuxQAXg6D4xrMhJNxWsAeiZALf5",
  "key18": "4N1w3PXboDnyNBYtFo5q25TXLJQpUc6XyojwKcB3px82BAnQDsCFmiPx7QqTsCbu6gycEFeScmQsnfQziVoa1NFT",
  "key19": "RRKJzu7ZzzRdXMuhS3z9H4v15qJ6GcjqZb7YCTMKsRknWMgjZp7zSjvE1KBN1BosayQVvZFdQu13bYpGWRPHJRZ",
  "key20": "2r9Mr6JWGtWbYud7D4kyKBMsLuJ7anSHzsfd8RbxLYk1BcBfHbbjxz3pMiUSCE7JqJVSUyUqEuxo4fSuwiuQ3fpr",
  "key21": "4LYgi5uyaiU2raCLLSZFsY7pJM8WAiYFhe8A2UUW6krk6XrAPtFt6z7eaRp9NNkLeLsz1RbG5nEkUg1sgh9dyQGx",
  "key22": "5yZkcCaF5LS6K6UZdGVGvaWy5dcWGPVDVTgYUTgqcG4DjQUaPv74AqfaPBGfhhoypLyoag8qBcvC4MBNST4w95bf",
  "key23": "4g3vzBTsheddFCXHY6xsaPaBsopyGRKCGQMHbyBCL2oJF5o99kiJyRKmJe2mCVyLTtCK9h7GR4qyN8s4EjXBVjcS",
  "key24": "mxA264EVD7qV6CUX13C2GfTzfHHwoEvbVwUusjsJsUji3oz5VfFNHnw7xbdehTuwEmCpPgaPawtnfucef4dASo8",
  "key25": "3pyxVcouBZvSNfv8br3TVWdhuQNJywwKtcV6xNDHQEHiDD3JZsekW3j2XgGJNgsiBft76115SyhiYzMBQxJYCriA",
  "key26": "2ouf2f2s29RMEbFgHLXPMcJrQmC1WNEDHBi2XKJomPg25TzvvZ1DECXir68AuUXaF7Bt4sAjLW5CLwpdYsGoCfof",
  "key27": "4kP5bUwhtJvpnpJQ1SjbPmJmaEfq3HW1QXK9Wakoo3ZiBfer29BUFPqKF1L4iUvztQ3zGKvn3CitFdDcU1f8qZrA",
  "key28": "5XDuCtMKjPF6FoZ6U6PKkez9LwbCATS8z3F82KNd7iBeU5FGTbu6LuQzoKZwsG4S8VgDDHHr5FHDcmFzeNHE3k5C",
  "key29": "5BtcKHMRj1WfhRe5WqfRwCNn8w1JNKns21WrMcekzouFg5bJQWSwsGmxyXq3rPDPgDmUXXLEanBXDfcSCxZjKPwQ",
  "key30": "2rciHjmyQXSeANNStGQ1Dh9DhDtSAqHE87bQX71u8ptNhcyhyy31dMQXEZSvSHqvN8eiH7UJvst7R3k9njYSHDJx",
  "key31": "7BdMGeREgYr9BMcWb6Yij4sWH79SKDzMRV7KtiEzcQZm6U1T8C7Tp1GtUxEiL1BxiqiKv7yUpegx3xpPvY58tv7",
  "key32": "5wmVL7mQbvNwXq5CnpES9nk6RSXuH1iEW5SUJn44NEUb5aFqntsi29pFkdEXzBYa3fUkvZKKLMpou1athrtX4gcA",
  "key33": "qUqoZstmHYgijN7aot9WCz8cQ37V7x7ukoNcHxT8BaqkS8jLvHZnSnxr859ZAn13UX4cZ4EocjX83HS4jsRwBo4",
  "key34": "4VPNK1fTfQBvVgP2w7wZYz8oaM27QHHUWHb67auZeGNDWGRg5M1k75xHRc7u1VUUjwuM7Pt5cQFDJ3T8x2sh3fqo",
  "key35": "5DVX9B1NhEUpdZXaxKHNqpTrrn9sGFgccinYFn23cJM2t6TraER9uXmMxtarDEe9xHrg6MzrPnt1PbA9oCGDVVie",
  "key36": "2pmmh9RELTzu99AVTHYFWe29w9z3jv6ejeb2dfJDkX9FuJ36pnB1s4Anh9Np9TDFZcJ6SJva15ndHCwtFksNCUks",
  "key37": "2Fd86iBWrHvCpqtxsWGk6qnZjCVH3XVATzm4emsfByLKJJdu2tGkapaLXBsXaRyuq1NJ3b7mu1jbrZmumVrUhhLr",
  "key38": "3Tc1Ye2gfoLxAPYp9gQadKAxiZCQ4QeymKHZfBs5B77uSE6wKvgqdNNhQsbdp5a1rLocHHxzSjNPdurXwpXzGpLR"
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
