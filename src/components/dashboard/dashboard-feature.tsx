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
    "2ykrNddVHgbezCZsXfAe7CCCJNuTUbiY6ui11nZL5zZ6GfYdP8kXBjPAXfsG9iKBYMupC9tnvehvVGJHZ2n7pRx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4C5EQhwQb5z8e9nX8WkwkUoFJFgXtczEavT1wmR8w8FFJLFV4ZnT68LsdtQAtAXNmZvr5XytR6oeC1ra8XRsfj",
  "key1": "4gu4AsCLPxvsQY5WjPQvFYzjC7799Kynoq5TahgbUuH31neZ6fJaLRBqQtD1pBXcwNcF5XbsQbhW2xqHDvKgrXhS",
  "key2": "D3ssdPi1tAyt5bQGzaD6NMnCDfaRW8QBSuTiZHigVd1w9Semd3MYDtGV6iiYxuSxSxttTAva5KbjAwPHmiURPGg",
  "key3": "5PoQzLPahw2EZ7tvxBBtGxLzuFz4SFJgeT47qN1x3r3guGgCxjqwJwRPf1D4XL3qjmZzkQjgtvaSNExrnDbD8vdG",
  "key4": "3ecZ99tRrv7SbvUoh7UaSELy1paMYDZDTqVCZirVL5KEdQA1p1nfTqnVdQ2bXf2fGSqo3oyxwNmAPhTiVA5HCRJe",
  "key5": "56jDazS3KppNi6HM3XC8E7ankwkurc8UqdLnfcw1nSr5PEy9SYFx4bck1idyoKf5ZXAGw4HY38dCNci7m1A6einW",
  "key6": "5YX62ZmxTLdjs8eBLz67MGkUoTuy6KLowXkaEJjDACUR4UjgHecm8L99X7zhPQJ8rLqxy54JpecwzM8pKm3NjjNq",
  "key7": "5fU26iC3jZETno8AL23XJsqygxCbfjNa5Y2Ejx4Nm13mJHgXN8Yy1MjahJZeMfSMPiTtrNjiFRCobNjbQ7sTMa7h",
  "key8": "2joEghN3AhFDetnNZCkKpUauwumjcvcsvwFW9enUSRgsYUmUewWHQLvWXKq4NkYJkqTNnGvcHM77GtpEjAKewdQG",
  "key9": "2FqwiHftuRqmjamXw6D65Nh7AKpRx8qxwcpFkzHiEJX94bfRn6za6T8T3vsFg7BDPR5tgQ5GS7xwSHZJXf1chCAy",
  "key10": "4996SuC4MfUjB9aBTpot3g5pDKC5P4jvkty2M4PHFoz2ZSNtmT7LkA79WicUDsC7oMEgnMBJfkPzLJ98mJFnfUw9",
  "key11": "wSTw2G2xXCdiK479fJLHEFyzL136pKX4jfJ4Uc3X7EZePMMr3f2UNaHECLRBfGgrzG6qtXSnkHJFvqNr8qjzGbe",
  "key12": "2oCEhCkvMT2LTgWyHLUZ62zjU8bKFMX8XGM56SWfkE4xnsjpNi6Hf2PkdvmGhcYYWYxkcuFo6L9SUFiTQAr4QPj4",
  "key13": "2azhqfw5wfcN3mpK2Q7npvnhMsGvCEJJMhPrQFRnygP8udHmLBxZTWyQaGLTWHrh6zAJYVVnPCMbMkPvoDoaAhEg",
  "key14": "66eHaEbEDS9vYDXKjsZCqdRJf54WshPK1EA8j2qGUnB9D34KPPT7SXH5m6AKZ2tStK9tR2SnztRUHt8VEQNzWncV",
  "key15": "2q6Gti4m5Z1ddkUEdTWdM9GqHnctKBHVfkx6vPPd4RmsJABeUtKbWAV5hJKExDud4kZwTCyBdXt2g9MbmUUZXDPh",
  "key16": "2qAR26gB7JfQsJiHoGVpbQXcqDvaVtoqWfm5XuHHYPyPHZeFZEUGCjux3fkobimrMgx4cfYuzjqP5gYwhK34K5DT",
  "key17": "26zqH1C6Kcr7fdyVbXggMCZ3gYqQcAJK2pUzBzkNu7Y4fGQF4VC24aj9EQftEbGCnFrPNNyMaZkaosLceiYMd681",
  "key18": "33qAb4wTDv9CPRAxkQzLRPhMxue4LMcmMmNb8LjW2cKQK95JrV7eSbFZjuQL2cDCR8C3MAR9mzGG7WkVEg6C4Hgz",
  "key19": "2TesELNtZTM1SJV8vsfhUP7LnmEWuY3hfWKRmSryp5zQnbuYtgyGnnsCpUmf2NqPZungmBQTtr8vT96FeF1mJbP7",
  "key20": "3zhikDm77YDVucAwDeznsRnLVAtxALk9S5EoweZ3N3QLDBBoUFAySf14ZsV3xfA6orpum7oNRbp6oHJsicVidDNx",
  "key21": "5cFB9vZ5izKbAXgjHtcxVYoegGQ3xpWpJZfBWZJ8Nx2tYKF6hKc2z6ytQun4NpSSEAtCL2JjyxUEgdViyaaSKFaA",
  "key22": "5iuMNWaVvp79143DyJzrJTa9CoFb41Hobgvfc3XsDSay7xj6o8hZgCcVqWS1aYWMWGQBJixtSjYVdfV621Famhy3",
  "key23": "RsHcxaRPdC8q4RgVkjvBqJ6orfEDhFhzzeVKa3BWmziZSHHBrRfqteJW84KepPsf9EnLUmaAV7ZBYQKpFf6bawE",
  "key24": "2yJBhw6CtRYJ5xn1F9FMQZWk1eJRMYgYhB2RQBcQjV3ToYjc1qB5LKmuDUtyGS7Vm45qzukHgmm2hYEh1mFKy858",
  "key25": "4MeZLHdgjnM6GPb86ZL8NLYAMhdxEJFMq9GvrB5isQStLXUhRTK9Bv75cmP9idCNRhHGM53LC7ZKGQhsqXXzHk5v",
  "key26": "xn4r9Yve6oMHgZJENkjxdEQfCPFtjaspnM8MvnjkSsP9ZVENSZk84DRx3M5JePxSFsqcPaiLtgnUBENzBCDxvww",
  "key27": "AfFU5FxxxxRt81afvqoLgFzphenaKF39skjeLH6wa2JH6suWomstV5HbX9smNvyUrvojLQgD4NdTBtzguWtqZim",
  "key28": "3gXWyT7TEcp22QrWRHWhm4XjQnqjnjsmHhs2w2JNBi2CwzT75iadXi4Hiujdj66AbEJSMgu5XgUtNZnaLdGv8Meb",
  "key29": "UyexH8NQgf2WbQ6ezw3aZWw3WLAHC4kQfRB18acnF9D3NtpQUTPqJMwE4tTAb34jHTEUjmFki5hhFdvaYQH3Ug4",
  "key30": "cyqh4pFVCwQmZ1XJTSiHAyfSPUmpjQXJgrJkKgAaiqgk7KcJMu7MmeSPGRppFaCaNPpnNWKQ9NA3Vcf2gYVWQ7B"
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
