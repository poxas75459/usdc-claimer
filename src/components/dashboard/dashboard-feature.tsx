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
    "3HUe7zuQFvU8KxNrc5fzhGsMX6T9HinemFQCYAjEeEY8ofKH4A6W3srA4LAdkV7HTbzJKwinL8Yzr4GRoueVabQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UrQokMbCSVhCNby4MixSfQGbDjoN7Qg6Y341fRRmyNEZqzFoU1FuVDwKLdSCA2RD8eW4MqPjFS9JmUAU1RYTTbX",
  "key1": "3y4NN9sAfRh5k5AREhoxtRR13jiMMLuU794PiXxQDKgGDTEQkdR6hYvTMQ2K8j2YnGkNPknCDYMfSonxFjGu49SY",
  "key2": "5E6PJJFoAsBQRArwrA5xZPEN1LPDrSy2KbmNyt8EK3wgaAhDD2twLAVjhSgxnKYbCt9iaZYMUA32ALgpntRbLme2",
  "key3": "5qC91wiAwQNcgeNMX4W9JYcavvYYNfxGW1wrzoFcpTktVHShgytpmczJVoThAYX6JqHPLNKz8gUEqQqG7p4RZRmE",
  "key4": "3rNLqCUFvWJKCy447caM6NNrbJKYC5YTsbgK1ssVNsB3eMa626y8Vc5EiWbzp7VogxZcDUfHA4gVKz7xgjxp4ykh",
  "key5": "2yXdehJVudd61bnTN2diK9D7rVdwNWSkgdkK8hhoiECmVmFhC2k8bv3r14XqPtDDPtPPBPYaVWVxrFTL4kYLg4mC",
  "key6": "4aieDcfyB4ntetUTWpAxpgStQ55NQHu9GCiqTRwHnkby9mpcTczJt4SxqKZyZQ3BYnDZE2K9ZHcte47vSP97wMs6",
  "key7": "5n1hiAiEz7acEsymkSFx7HNzxFFkyt7Kg6fDeF7eRUZg5JZiZnYa7biDFRTMDqLazyaW29d4bMujMwwmk6vh2Zmw",
  "key8": "tSWsGABok3GrXTAf5YKhmY5CpAdwH5rAkz3bUjxcFN6fKe2yixzNLkXAHx77vFxR5JAYTfv9H8UbG7uqYQhK2RF",
  "key9": "4rGcZCBYMm4kDkEW2p6cPBmEYqxeVpUf3kS7BkS1KemonMRxgvwCHF834R8Cde9MJf8R9Ugnrugt73CQaXg7aVAc",
  "key10": "5zyY2G4t1Tvw68WomLDXdoBzXy7RQsZGGdLzTzDKtomt8Vebmeqeua5e9EemeexmPpdBCgp4gMczoEeoPsu8jeho",
  "key11": "5ymop1Ba8F6E3BfxfMkf8Ubws5GpkQdNN8v4FTDJXemkrgEz69trae4bhKyZueuNrYc5DYbFZaJfkKodGUxB3Tmg",
  "key12": "3Ybe2PAGf8KeKXkb2cQodbP5sj6qQPQeHBxj2hDKjXqnZGPJ6tNRVD6WzT9V6GfGjMR4tWKCVmH2F142kwm6wyxP",
  "key13": "2rA7dyu3uj5hfVQXbwLiU1xh7v64B3AwpEY5QjXBf1qnX3aZD8TQara7zi3qZmthstzUag3fK7WXbVj86VuBnPGg",
  "key14": "5GR5RAcZTw4EhjjnbigWmuvgKm2D6u9Qw6pbGy8a5Z4mPyMMnKYVVvxNzsH7oTZ4wJTT3fNa18rtSZefugh7tE2q",
  "key15": "54D9QVP2mFhLvVZoU9T97WwEZS9jZa4fDznxRz8Zhidh4r4qXPm7vA5rYsNoAYNTnd9MUPh5BP5U1mpK6LKwjHUt",
  "key16": "2SnSMoNi4yzszhpGKKBgXHSVkHbQGJoefR9T8K6XcnzxDLRKECoVFkG6oZ3tN3w5eG5HvRbFHwUdwEtXrXGjrpSo",
  "key17": "45LBAK3NKUQzwNMys6b9Kn8yKh4pzShPVYqyCy8SuWXCTKZntpUjs2Y4khS3QwZhc7ArEWq3CMEdo7cHqnq23s6T",
  "key18": "4AfF46kaRRHABt8VCP4HxsZmHe6fMJKKNynA3wCAtedCQwmnNYQKcL3635kkzmzfMGwVH71EU4s2VxxUaM6uFs8K",
  "key19": "4S8nUaTkvAFsCRZErP7qpADCb5FcV2wqZYLSe6HPoiNXQMrF3vPRrcRwTj7KtGhTBqyVwzxUuZqe8U6mJQ2SrH9K",
  "key20": "2U29KRqtAhwFW8a2wugyr6rXtwTdViaUn8o3wx6K9WjZnaPEgtwpbidqJxs7esv9Zvq8o8HowoB3DHaaJYUGaSKq",
  "key21": "3Q4jrtzHkV7Xk2aiyXK3xXZGHhFLoWZdruqSzG2kbf4Y6MzzXk43QKKbD5wseYvh8zNyMfma15qpDTAw1B13AC4t",
  "key22": "2Vkfbne4BfkaYXD68RDwnDanpyJyvVKdFEcj7wdeW4m8gkGYTxvQHcPaB4xPuZRKUZTtJ6TVjStFBKdLLVTAYxbb",
  "key23": "3HJYLXut9C7kjqWwsjNJ1divyES3FXUnwq6wPsKjoxn38m1AioSgERC74Jkyk1SLpwUHu9j2EBtSoSZfhcSXDyWt",
  "key24": "3BZentVNTpG2hhNLg2u4W6bG1wFJJrm8g9KiPzQ85ScRYFzaUHS2GgM1WxBs82TC9qv4ymYqBjNX7vK8cqDmVrdC",
  "key25": "5XQQR2zceBx6QsG8fT99h36qLwbjXZEZhcHvKMfTephW799HNpAWRYcMdgzFp2WGAY8rC3yoK4NP5vTJpzzuubQN",
  "key26": "3JAGAEPjEWNPhfSs3YrZ9721ZEeHQqsHsadReBB7UHkQf88e5odyifWAU8wanRfFmSYMAS6ThqNvqZzep4QX1Xia",
  "key27": "5DEyWYbJVmDKLfNhTX2dycEk5miPaqnUZzbmx3Gya1ejVksuesFPnvqXfUoPRCXb7Cka9kbozKCfbyrWRgy88si1",
  "key28": "2kM28jGGrRqQxuWrEKe34i6GQhET5B3Ge4jvJWNRqFg5maD6QvjFi33y6LEeqQCZ3fBCyfKQnjXjnJaEq4rTCooD"
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
