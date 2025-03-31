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
    "5RAPKq45cEmfuCChseDcspHbcmmioynKTKH8UXUDEMgtnEzLcevSwtkJrFwsyruZCemJSnzUEc239Yx79ox41aUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UACM6paTkXwXWV9WC2Uovu7uwzD8EFZPbPhtBWhJouZVeSexRFbcvqcYS2Q5Y7omd4HGmuyiyc8dyZ7ffCrVrtf",
  "key1": "3CfLX91sTxqLkFnjQHc4naeyXB89XPUnnCQYEjT3bsjchKrWC1HKHm6Jj5K8ugTLcfGpDX8JieM37YLYfPXzXZkx",
  "key2": "2wzhQN2waV662vrDU2zcgMbLmr3evTyKjCB4ENGxAXpAHtHjL6NSKXhiozmGGYHVCX1J9sbmCKQygXWo3vSJDKNB",
  "key3": "2Ruh5Y6b5jaXCc6JGWXp6XPVaf16wPKHJZXwUrS9pegjje6nM4DCZncur1RBGoJs2FrNDrNiQrf7r3Raw9VPzzFW",
  "key4": "3pmEaqEcZJd9x9uy3UVTBEFqbqAzqpLRDxfAw63dpeyihQbowaCy3jmk3iMRoEMT6Q99X3HHTpjm2bod5DXGrDTe",
  "key5": "5P1NDJwoV8XovaLXBhd1WYQuJbNfXXSKdwL3nMjh6SLnuJgiZeXEcdEooUAx4Z9j4TStGpoMmCgn8AJbcDwe3FUY",
  "key6": "s3AUs3YVdfyVyZt7o6MzEPftJDjEXxVN1fCWc7kX7vn1CtZjuD1T7cvSyTdBNEBHANPQXepJrqv36kbhhV3ocji",
  "key7": "3CEZEYDfyqwrG3PnjpBMmxJYTAL4YWZ8vkA3iVEFCeetVaUan9fhxZyK1F3koXEqMfn1VuMmHfkNot2TmsUR1gpj",
  "key8": "3xYJZxTufDXsiW66cY739HAa57mGh8fH5uouZZN4mMQHTHorNkKKvPoQKyVNEy4k1n16nNP3zTbDCzeG7bqxLjso",
  "key9": "3zeJykpL1npL4CCzqs1LRweyrmEvetNNLpKoYcJ6dQqh2fvkchQZDQDeeVoTT61emX6t5Fh3ejBZPc6J8VrH2pMe",
  "key10": "3eR5eHMLwerdMXszh5fbVv92nMuoSzKHxNNh4R7cCFoHnn9k7JkaTP8YtjeobxvhRJR3uqKE1ULDQz7jfM4aMcvZ",
  "key11": "4N5fAESaeoco6VvYM6gbUdNDVi1ZxyLCcN51Vji9g9wXYf3EambR7Fa5PVQKCAcJB1XUUfzdiVfLzgqdniZcah79",
  "key12": "2JhJw6542Swkvdmzjg812UkRg7bEMVSQ4Gjt8GUgiyDUBcajHJSxXve8GvUUd7Gpmbz3P99pk3eovsFRHh82JRYv",
  "key13": "5MWkjbtRh98JKoToRcKXT45GN9btfEfCTYXd8cLSzdXPRWVNXTuswocLpEU89ep4hW8uHGBo9n5WgnGErNbSfYBX",
  "key14": "48UrmnHeiYyzmAiicnUxgeDW6ZogShTsbKwQhVq5qoRkJ4k7fqriW7xCpoyxFJTg8rbJ2VkMJiFQYam6wEyk1HES",
  "key15": "3zsJpdMwKjn9cgceDdsvuRyWJyt18zqcJz5iUXPbekiyKig6K52UywMhsn69Eku6Z6aaFuf7GohpHvTdq7Re78Mn",
  "key16": "3T8agw8JT3UUSevLJyJa9U2UQBdicd7GztKU2eLjcW2s7yFYejVCt5B6fBPrHiyA9KkVx7cYYZb7vMHCyL22KAYN",
  "key17": "4apqtxfazoKKhe9FWBeh1BtmYqTVqTXPtJTH9hmd3xByY2iSfxHreRT8d5GSDNAeZZWpuBpqgfZdFG9J2xcmCCcj",
  "key18": "4xarUetFHrWRDj16ZshbZDJg5nnRTpAgNZBGHVZYJmqP2SSTmuXCZ7VrTpKjbXT1R3VDsrLBsmLumRhRygzYAVqc",
  "key19": "3NH3XXW3qyizBi4MuHnGXtV1Q36PbmRynoh9JSngqRoawDJzy5YFXuDcGZMNEcxxrWNG3w5fmANBYFUSBVVgvXgE",
  "key20": "2MYnGBuiEFEBzKBtzvr2yYST7xu7EP8m565DLg4a3odxZJk7xpamT1LRYMWgN5HcpoQxwd81Ush44dqdmGYJ49Z8",
  "key21": "3mXvBGaVV6NpPHhkBRHPGkwvbYSFAcrX3vnTjncBUvUwGwRpDyRLaZcXMNZXMKhd8yCiHMBy5vXqS1occks7XCgN",
  "key22": "2J3r8Bue8yZkuwD7FVvynqwkCuyui9nZa7rvA6kCqVS925ZMUdZ9z74zq8r5h6ndgWwwdnvUrCb97UbosHrBSWWT",
  "key23": "2p1eiEKWPw5xbbckvRHutDCsh6hZVZ8trVEZNN1hET6atjaxAAJBAmeS2NoAhR1BqdiAfHA1KPdVY1VHdgELpkTm",
  "key24": "ptuAUYTYFijVLyWir2iSJLiF28JE5DA5rizQfrS74QskYpLqkhcF4CGpQ5QZP7rTVccPTRPfyTWzNSSndmphi4E",
  "key25": "5HZhZJKe9H2yg72XfraRZb9GT8LTZnXWnPSq57oomejzs1QijC8cmAqBkN6jz9YsprsCaKugQ5vjjNqKfdup3fSr",
  "key26": "5UNEDa6WNtjsSN7GrzYjGQEiYEAJ7mBmBVJyPDdNGenYqddY5XvpSznWGubQLaYz2v4RCFiv4SFpwqUoh6gBWGrc",
  "key27": "3akojgQKeZUW8xGYTchKHcdmkSyVtKdeJcn9Ud2yKzCxjfGL4AND8xfrV4Dbo71e9rMVYA9PCPPWKQvaxaMYQ23x",
  "key28": "532ewR8NEKTRZwWdqSS82FYevupNoGExjEurcBRusTYAqFGz1q7qFrkA4Hc2gk2XFzaGF4kafXaDBhLSVyqVSqY1",
  "key29": "2jeGiFETtDKUNufXL3dF2D1zTCkk2WF5n9pSxDtgBiz5D2ChvATs3Bu6vL2tyK5RdtjcHs2T7dpjvoQ2YMGeGSzX",
  "key30": "2ZvhPnSpHuRHJ2JjZWEU4WQAKtiYvW65wR1g91wM7uCyUbWJpUQPk6sGKYJpGzXDrWYudtyEUYwDgnk9XWBmT2sD",
  "key31": "37i258e51t5HZpVjpajMbkzpjunvHzuiZ6hqeCKQAZ3bywfFRfxha43NCXzM5E5if5WHQsw9AKT5BYNKBaPsQwEi",
  "key32": "2KKfHSuiYeotNsyxh6p5tRxug2dbXBsF6WJRUwhDYZVpKGsNbkH5TiN7kVcfww6MAmqfewUeDt4zn7ZoBuJJbdVx",
  "key33": "VkQ2rWCZWakHyU3s5jGEmWCWntf5EQdz79qsWyPst169Eumi6G4rzed7fVuPK263imbF14JQ1m9FK7NFi1wzdHr",
  "key34": "3cqvfx1jHzopNqB9Cj2zBeuqf84KapoKcj2JX3WzSbqZZqEjVMNSJA5KooKj8aqJ7JABDf4wv8EM1H2eNWvCDUH9",
  "key35": "McTyybvCeRs591ozsGFhnRxn5sXGHXKSQQXhFxUvuUdexC2ig2FLuBi7r3HqnbM61AEVXLv94K3KjPf2s6TGVyS"
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
