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
    "5r16eGNk3seUvo8eGX3wks8Ejp8dfxvZ9krseWUL7YZgCtSTmrkAZiPc2FyVhHpdztM43hgVbTQnGranZz8axfXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WXJvsFN6ii5RNJy3eesFNxnPxZFePtm5A89YaCNSYVgH7LY797tLqss2NYafnreGYFgPWygSjfcTfjjPsd3GN7",
  "key1": "cpvwfKye1RGUgumS7aiP6zzwKvXxj4Z6vMAkTResP4HmBKD5xhUu7L6P8dQneyu3FoFasF9aK1F4JicCNye14yR",
  "key2": "4aWDByu3YxuzzCpJMTfV6nb18f8o6VXAmmoUTPxDLrAmRFMjBh3J8ZjK4Xc1Euy78WFJjTSPcMKNKW3iA5zEG8cy",
  "key3": "31cditXFNpDtZMMu2NewTxhvSaU6a7EX99DKctQSvyp86jwWvNGjj6qxYq8Le6LDwn9Mnbvn7xDMpSpjjuYfWEem",
  "key4": "jgPzZ1BkHHRnadL1ZqyS2GZWupcqHSsuLuCMJsxdforns4rRNsHotfLEvourVcM3pqb2F15iJ8qUJTaGAANqTnd",
  "key5": "5hTnRvisNba9XyE4BreBa5s3v9SYgZiqfWhvuAKTLS1t6u9VPgdL8SUxJuEicR7wUayYW4xaC9mrtSJV932WAJ21",
  "key6": "3egCBYbh63rvvaKfQuhpPcQLrEmrfviwsoL4M59ZRqobMZFMpgYGpKssWfv4n6tNDsty2AMRzWvdeEZ5knwGHzZ9",
  "key7": "5Z2BYB7XBmxjKjMxsztPxApaAeLNXKth6HGvAJpobWqShXndqwG6mnhZ3wsPnMjs2ZPYCXfL1pT2y6wjqagzEA9i",
  "key8": "47cmFmAWd83AhRRfwbgTBahNAKqF3yGU4NthZALxuqWE2QSuBvh9VhpXQff7achrGarGAGGhwsB2v5s8LJquVibw",
  "key9": "4deebxaCM68GEFDZmJnxjuJEoBb8iHee9fMECEdF2czxUh1D3wKN7mjqpHLzP8rNAbvqMnsrhPRMcB88sJKojYsZ",
  "key10": "2UDAZrJz8zj9DbdEnK5ef1M84YniPzizxdneKNjKkPG3JZBkCzSeoCzAhvE9sTvKtvBbMNWaj13zrfCkAbw7w9sp",
  "key11": "5UjXSfoPwXXcBcTN7tENj8YSzJhJAuRWgcvrWvPiCPHe7Mn7NDBxtuDm2qrKENESc58iM3MqZNyjGwRHYaT87dQL",
  "key12": "2VVnA8ggUTcwwTPmsxCZuqYEhSFSZPWBfsGsWTr3wv1nV7wynqYxaqffhfFUFXgTNHGvAvvTTjXYvCbxAnHwuPed",
  "key13": "2LSue9H3aAsPtKQwj1CACXbbeVeyGPV7X6xdKesKk3J1X6EAsGAdCXy6QQcKiBhM2uoSsnWooXTiKRRkHmkk3Phy",
  "key14": "Q6g62BdQ4hj1zJEPMU7UFM5mNDSJEK8Gpw1JmVW1o3zbqMwKpJD55WhBbGWDhmWcZ35NhfuLvp1k5jGysZAocVf",
  "key15": "2opg6Jd2Lcj7SGbL83JYRC7qbJnhA3ma2sQ45gwzy9dojYxqfZm5qfMx5uPWhhGmhsyi4vvq4VJTLJvDuCGimb7y",
  "key16": "5adHVp6wUbsZyiKCpWCWQv99YPMkF9XpSTDHAghgNJfk4Dq6k9xeimn3fNY11JxsQL4UoW9f5NpaQUMFug2AVQGE",
  "key17": "4yrStMX2RrTo9c47e92TpAdsXJcvVKs3PuFHM18y4AwpwGgpqWUTEeskLExi9JPSzeACfnLYE5Ezaw7usDnRzuK1",
  "key18": "4j9ihcKk274DiGX9K4WHTx7nJhSfaJMQz645RiBJ4j5zpKSFMdbKiBupNQ5Lcw3tLDeLV5YPfxGtyNCgEKUm2Syp",
  "key19": "2HxvhRztzuMbidpBt7vg1Gj1c6bP4CVhCM94XcH8jU3HYSPivMPeDVvU2cHvi9ASe1ywBjx6FHdWMUgWynif21T",
  "key20": "3aZ1AdQk9riMN84LJjzAs38NmZQYBBREpzbr9HMgALE9NV3kwKwKbLATnjyYWa6ofzMfKZBacrZEwpM5JHrSTgSV",
  "key21": "ZzMAGXZzdcwefmqfAdppKqvXy8getsKGwZ4uzbeneYTG1c3artVpuzVcbN52vpHzGPoWS36yr5wyUU66j8ktj9M",
  "key22": "3TUvrxBN7Cgqhfej12DzaEKd7evivHoX4kFWYd5gfknGsFGuD5t9P9byGJvGLzx6521RhADE7bE3qyFTYJpc11VG",
  "key23": "2GXS9mY4HsGQ8Ho6e77BS8GRb6mjQ7ZkiT21mtkCMk3vxcXXCfdK6kcFcGKVzPmPrH1xTr21quraZaP7fTv6nAj3",
  "key24": "5qfwDzJPMDD8QmaHQA4MG3emqE5u2novL3Bp5uAjrLA28DepqghSgXi7qEEYni4omzeBW5WhvaFvzUNMpdEHtGys",
  "key25": "vdQPeEKULTMjz9foceJbabFARomK4sjUHF3gLxE8UV4WmRwmhVNwP3Si6PiEx5dK3j1LahA2VbEfMtvyZs76AJD",
  "key26": "3fHN8WAZdn4worBCWQPLz3wWPUeeKhAj6ZaDjmvam9s1bha4C5HKCUqwCW3LXgDBN64k4aRSYsTWQoQ5r6DMbNQX",
  "key27": "5x2ffojSx8ncW5bHYJYwKSX5JY6Y5JL2ub3qzEobeVVLEHbo8LBVR9UUDdFjNKKfaSHfPF5buN9kvE4kWJ6kgrEQ",
  "key28": "3SsdsA43VjgdtyimnuHALc6zygx3UgFkmcKq8Avf2C4a9MQZQucHZLZWL9DzyGNWN1HgJZUcP78J2Riv9ket5c4t",
  "key29": "5xeGANJYCUUTbkR9oW2qhXaMQCeXvdCowUBRm5xFeeTJoF7QxnBw8pbGmuBDhNNQQDqXtBTastVV3C7CHEACRhh4",
  "key30": "2V37tLeCXo2wUEVYXyCH1tizZzKpr5918ug5X7CS3EcrVn8shj1cFpDT4SP1bXq1eXyY4cg8v1CJ4ReA9braS5mK",
  "key31": "4FQCXYRRaGxooM8PRnEJuaRitWN8igsLytA6msN6TuwDWnFAKPpxReKT1PN7Uetgq4j1xzvSLNLq12X3cS57vJxP",
  "key32": "3ECSnp3UpUmQzMc8ELftzWVQRySqmqoqvGvgN4zHYz8yWhoCsjrbwWFtvEuXymaoHmdCnZK8Z1a4qMy7FoUVbbin"
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
