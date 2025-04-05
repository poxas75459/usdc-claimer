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
    "4PFtevoZrfiHfa5Rogy4vKUEn6ekLAcgkNy2RQK7wRvdFjJa8HJ3cJz68m1hRecNvkgfjKPSt8Bz71xukwLhVtLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecerj6d6XmvRFpnLUUyMrjMAdjhSzNspJSP1bePN6SjHtCP2a4sj3W1LCVL31zA2LfAiFNrYt2CKoTENY2EiYLu",
  "key1": "5pDmMcWFAFbcZw4vF4SVKN3RjGMpsFGD5SzRF3GP8kKgScgHvGQzsrRPQgPLaCDP14gSZUEJdJzqFNh62T8h5Li6",
  "key2": "5nYiYmYR5Xz2ZErUvREbk7TUSbzbtdGoJZquD1U3TyoN6PUqxjNgYrbv2NUs8hcNcECPgWtsqmxgstraUEqPp3dB",
  "key3": "Ybbw8mZpqkkedKqkHrcVzqy14KnKgoUucR5UMgtzs9HW4UXnHTi3DE44GXtHJbvE2GLs7w4KwZAudBqAkfQ8vvJ",
  "key4": "hzgMaUjAzwG2abaEL2i4TbuZRHLyKiURD8hs5mnVuS3mr8v8qaa9tBGV5jwQ68hZeshsPgprvjBjs4UV7g29TXi",
  "key5": "tqSidrm4WcgeAprbK5YbsZwcN3RLL45NPZnr3zFejqpfhXDBxKS5uqe3GAFd9CLACkA36fczKUvSdSLvHxoFxG1",
  "key6": "3zAzpGz9iLoVvmnW4RyzzzqGTqAL7Ucprx2bMMmfMYJoDzYhFKAA49HiePGBGG1eVCpobLci5gnTuzJ7WdnPKMCw",
  "key7": "4RMw6N4UUauhzpp8vx2UpFshYD1LNmJ5VQ5XPSxEbHhWfkX88P5Rp1KXg4RRzwLq6Kjv8EdwwLY2Si3eonJTTp2J",
  "key8": "CPFHa1a96tcoj1NdGsx36kbBityZ74mTGUWQ7MViGmjPyq7hQu1xQVTqHYQR57FrKeC6hVokfzRKxkyj3SohrGz",
  "key9": "2yznQ88etgpEF3NkrVdY3fbSvRp8Yt4vWnsNzuZqZ622FeztriPJ84LPZm2rNZJbF88vYrj4QbeycCoG6EqqN2bM",
  "key10": "3Tn8kBUXrY4mpABcPMoZ96eZA6MLFPAi1SoWpueHbM4JxWfvos1U3rYKbKvSC7oBcYxo8xWsVmti9eF1aTkgg9WB",
  "key11": "MWw7yf2v2F5fWX6dWg3h7WZmc4FQ4RWdaxWzAZ4dLr34qv4k9AZy4tZXn8k5x7eZGEsTfui7UgdLSGHyvA9ouKT",
  "key12": "4hZfhY6nvd2y4bmYseh7orHTh7VDFNgGYyqJe2RzaX7FtN88UtxZviC6nB28huLKLXunUKLU5TPnRQ8LfNKsQ4JT",
  "key13": "5egswbaUoJrNfY7ghKWBiy3FCgjRGAzgwwqf7mosmHS2KYMgn8BadyY6Dbxv8RF7gZJedqmBCEWfRt5aWuMb4HiR",
  "key14": "mhLKZcgQGucirHQe3Y17qxryPCMcBWjqLACK9iq59dJ7T2xnDpjAD7ZSQnnnUPUuaDmmWuCc9HJ1WQui6U54K3y",
  "key15": "2fujrcs7iGVv68K2XxAiBmpPumzh85uj7zDbk5GvVKU89ZXUDxb9pCNREgq8BSwFQQnPdNJwJ3ZUc7kexcdSGHqo",
  "key16": "4Wx4V72veHgWv4yHgSc9mNWVeZrgoNYq6egrgMnvwuSQHZ1NfBFwZRgQACSiRhHWPh39p4gBLKzk79r1MNyEGDMZ",
  "key17": "47tLWEwo43wqsoPENSA7z1Y741NzTz79YLys5u5gnTMrA2qktQ9D3KJDmkL1FsDTeYhRGaDF4dWgLSiHcjCgmNbB",
  "key18": "3pMUHPm8B1xVURKUhDTLu4GCuQ9aC5jHbBZzoAMVwuta8UYGYQmFhA8BqcE1oo4zqawX3C11JBk7SywuKY6pn3KS",
  "key19": "z2f8SHwMD2KMoik58DQRq3fJzkfFgKYPLHqJuoXBbbVUSyRrwpMxTY61ujmMxeqHe8d38Eu21j7CPSAimLLf81w",
  "key20": "2kRFfLR8KLU5gYK9ansTChN7pkEkGSpqa7GmhKo7gAXpvMmNWbHnBLE3YtUuTMaR1tgpLWJXnwgzMpXisMKQS4Ms",
  "key21": "2TCofbE3tYfyp9ZGXQD9vw5NMSCbjjjAEBqWS2CMB2AZ756DcSU8Vgje9d9zMjdDHbnd7EyPVnvTTnrtUaCPBgxf",
  "key22": "4kEM8CuVyJzZ7PanxxBHJSNVJUuxwbWnwCehwLqXXF9ppkwK6bKsQ1V53nAag8uAq9chS1gBWTpCfFFPHviEk81T",
  "key23": "2dqnr6A73x2yyf37SepgnTgENwnRWQGpJVi2tFLWDLq8Y6NXjiPfJ5RbwpaV7iBecNMDEC42bbvuAwB16nKjbqTp",
  "key24": "4kdVAdZeNF6aZb7xsTbKBtXSM6CYLrTNnpVRACoxNBSQcHysqAu8gokRnkKCPwZo6wN4MmrxUZkyxkFYttYDAJjq",
  "key25": "4qm8GFcfbzSe5GWA6pawctBQCXEfEEjZXzoab7cgqEk7RqKMUAs9sqoRaNdty8RmZs5PC14kM4BwqmjCkJnZPQ7b",
  "key26": "SanitVjPFR58XcChHeN8W7MY8veSjeCxLBueZt4frNqBijecg8XCukvag2dsDjUj7u6Bu1EVPSThbwPY1dDNgfU",
  "key27": "5mqgGihSUvftrH17cS6Hwbgc4jMMAjjBz9sMm5NJako9VErCtLovFT81hgzR7R8w6FSrrMuGjqjbbgDzhB3BSwZP",
  "key28": "4BgqvHMxpFkQgMDM3yeqQGgUyxga6J4EFDy2qmvgMiyAHD1rbE9E7U55ekUE53srGGuLZ7nF83PxNQd2UyJvmx1m",
  "key29": "5X87XguhXQzoe1fGHd59fzzXWABaKx9Gm9SZzVMmPKtXw5ijED1YLgxt89P8W9PoQqdUUTfKEAUuRseEpWxZBp5J",
  "key30": "4TGjF8rjEuDfion8YQtqY1GvYpXuGMBmZAt7ew2EQEqreNHcBM8TwN5GU1kQBUFbxb52gbcrFzFpadEdwYSmZYwV",
  "key31": "CrcWM2P6Gckjc99k5BtrbBNSEnqdpRBDEEABVTPhQLQZW8zn7H2T4vuE1jyy8QPaMrsSb1gpUzqEbAVLEj8KnEM"
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
