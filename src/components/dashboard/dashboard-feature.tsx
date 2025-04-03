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
    "3rLoRtXEDSaJiHCu1JrZhLcd5JWiut1SkzxAASxCSc91yjk93BRGLbH9M1W4W514MVWUpzDawvoC6AS7WnRVxvP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RBNqrVrRqAYeAQEA331LGU9uyc5ggXfGfhi7WRtpGeapqmHZ9MAWjykJM5ChnU5E2Mdi3pxfWNoQ3JLst4QtMHf",
  "key1": "2U7TLknqNodJSaECtfDbnXboKDKeHqWjUXC98NB3oKZZpZ3TmYHTqqwfLyM2t193Qmy2VzHH3wtaqzqWU3J1U9zS",
  "key2": "5xa7tRZppyyP1emGppiDn5jvB4XukbJgbMZtMTKP8fEcECM3obKq2bjBiYQX5aBpLEqYaN8C22rLBFshgaKU4Htc",
  "key3": "45fKZCPXGfhJ6XTnLhRhBQZ5fpsWmTFwupbf86XheRzLu3rb8Mp788YPfEB1ioR8VSuF7f7cNxJ6VXjVCWuhLMbA",
  "key4": "4mcb9L2KCJhxb361Ji78JrSgnLd52y41PQgfgVu6BHy2PaKEoRtGEQDNfyMCTCRDfXUqf4yYBeyKkFYMYVoiJoAt",
  "key5": "3SRFnJQN1ptgzJz57caPjArjD1hDzfeQVQc7ZshTkTx5dLMZQJiCUN5Bow68UT2WCjvHPLARSpYmLDfZPPXr8wYN",
  "key6": "menCtnSkEKPEDydNX12Qemx4GGXhkDvQmMfTEmTz3KA49FxkYDmyDw2F28wvLQSn9Up8aSGCLBDBL8MaZ3rYpAB",
  "key7": "3vHPF8vj3C2m5AeSCwfTX3drLapEWxFs5eh9m8yL2RVe89MHYeFCtUYc36hyKhX8EqT4CacA1QxM2PyHWcvHy79v",
  "key8": "31LqnimVb3VbR4AsowcMPKX79FJ3DDS7GGv4ChSQaHNXYG3neGsT2W1ysGQp86WFzN5HFTFzydxzixX7dUnfWB3a",
  "key9": "5bX3vHHfYo6bq8GpfwqSjJXyHsh68cPBwPW7Q8enPzyk1yM1Mhqku3pS42z5iNJJGGuk9wPTnqA2qS9PMjNChzCK",
  "key10": "3RQQ6doiAbqr4Ct8fqnigLsGyZaqrs8TYmDSSjfc91KBmeiJ5rr1yPR7ndtihuDtpixScyhfoZau7746Tw1EFWxM",
  "key11": "ebnoPsNGJsokXqjYPQiZJD1TRoFR4LfLdLGisAjonsu8fbGVxibiDjFdvyxjD3BpM6pxaeWDqJDMVSZsuPobGZz",
  "key12": "5XgTT3GBqAaXLpjaYS8qQA8bki6V8w2gR3LpXTPGndyg4fe7QH98NbAvTsSZ2dJ7eCZkphCSrhrgozZThKP9t2Qy",
  "key13": "4qxutXeyfHkGhEaraE29UYHBgrM3YNahGXTg3aV23FZzDughUZ8WPGU8uzzrVgaJQNAwBgwDM5PyRYk6RZxigVRz",
  "key14": "53iX3HzzdmLWZ3KA9VmoqQC5o2j5ati16GvXAW6CrGzr5hpE4n2hJhPcuTx6dJseXoskukLtLK2JG51HQbeMXpnT",
  "key15": "3PncKpZsRzQf7G8UG8D6pj4vBc4ARt78b5kRXYKirgyEyGRLrLSV6U5e7NhBhHkjQkFLZw6hHbHFfWLZ5BeN4add",
  "key16": "3AQ3EJKwagDDZ77cgTTSGQ9ADr1fXryf8Wo4rU79LsdVDTkaYsBBZYUyftjPtwJiNqm5X7y6DNQmmHoQkPM29Kfg",
  "key17": "4MP7CJ5fNVuALWzwWu5mQTCnnxd71475Y7Lk9tnUvoR3kSmKrBKoSNNkg1uBLowq5EdGCR46Zmq8Dv8GkpBx9RHc",
  "key18": "4xF6sVoBndBpJ3kxDYhbqjxcHXyReKyJSnQsVr8Lxmbwz4s7C8y6h7Sou1moEEjYHUjpYPyyhKVkGTgGzEWhs4Dp",
  "key19": "4h1Kd9YVXrqdTsrHYKS6EZ5C6u3f4xLKXNRTbcmFgE2m8ptexNasPLmqGon11M17GLeEqLgDrrUTDNo7S6kdJhBD",
  "key20": "28o8mfXtuHBdimoEqDsTH8yLHjwaxb4Uug8gMB1FSEcB6SRj1xzy6RAEoyWwQG63Y5CDpHyKw9LCrqkySgNrzbDU",
  "key21": "2hmrpDQYzGHZfhQpHJ7S8mtoSBvKuHTJe6ed1TZ95xHjtdoRtQLBo4aL3XR6yLmctpM5HLW9FP9WYAfzZcg5TbCb",
  "key22": "4YgNQvWLafAD3QbF2CypaJn1xwMoJkxiG4bD9jqKXuFc9m2xvBpAEpDskqke7nd6sACUX3T9hD6aXtvXs9NR47wK",
  "key23": "65c3dRqsJUGKQKuZTPDasHcfoYWU37RuwL8zSTA86uwUv8Kgm87Hd4S9gCGvF3zzTRwbMU3f5Ee8Rkhb9s7rJBpA",
  "key24": "22fh6FRhJZep3FqddAbma3Ge3ktcw8pvSEPcucfsTzBDgrfrnioaZWoYtcN493oSk1tnbwcMR5JPcMCr52p1Fvc5",
  "key25": "2xNxSBGFsMkQ22e8HFbQmCgE6jsjojA1ctszTMK4QqhQXSraQMs7jU5EGpSnY2nqQrJizZcNHmzEuyMcCxsAaXFp",
  "key26": "2X6e8XjsN9cFHYr9PfSDeUtkpFMF1jiGzUqBGCoZi2qMZ7rvFhytBxW5UJxrj87BWMkAQB4iiKELF7U2H4gTGwKr",
  "key27": "ifSrLaBbcJnWkq2FwM3hHEqGwVXYNA6mN9VNWLjJYhKVrwWesncJQkqgCF5C9udcahoCL4gNqTbBVYwGPEj9KAi",
  "key28": "4FPFo9rQLCXfv2zFS7b7aEc2r4B5pEeZ4YnW4r6xu9nUDY9opsswNpnVoZb54B5mbJMWakXvwxjKTsepKWGqhe2D",
  "key29": "dQRNihTgtqK3U4rtNhvpd7sYVTPGEtdqy2a2cSR1yuhVGGuybRhUo6sANEJbz67GUcWb3k9Bws3axWtdFBowXk9",
  "key30": "3yyzatCagbrKj9raMibTZFD6359V4ADAh74r4Ac2iQG91YD7cmHRXMrQ5M39xDXVLULEvtgMqLRpkzgieyeiwG2o"
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
