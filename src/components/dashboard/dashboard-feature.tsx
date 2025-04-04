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
    "3rN9PXQ29DX8hfbyVGSKKcw5Ac4GL8cqVGa4Jfi3m1Whx1DiTtpKTyV9au3bSrtccJrp9vccxxMVuQ5Z5qSEtge1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dFhg21BhPGT9qne6pZzEpswhi8t8Dq5Q3649wZAGDKRF4tUc82BDt5QNnXAXiEuEqwJmm2AUGSxaVoez3PcHmJ6",
  "key1": "Q9idbzQVeqtQzSWhhYEDcD88KEDr8ZkRU6SDLCgqbNbfkGh2sQZ2mRrV7H6eav5XHxPaPzWafu4WnHnD7vsBayU",
  "key2": "3zU9PVixmaSxzCVfnMFHKzDT3ZmXvFMJMeehQsHKVKJGGUcbuH8xQkqS5a6g9AmRMQzrF8mT86K2rJvwajEgsgK3",
  "key3": "2n5KRWDbcdsS3Q8yhw1Wi5apcvQcE86jYz3L9MgQmEnzx7BbGeUijvxkGcbkdpu9XTb5nJESHMGfxwB4nhWyFbt4",
  "key4": "3ec47BbQWB8YgZZpuY9aE8hRk8JJbEAmehEtKSiaCJprFkt6MnVGhAaWeEnfjAGDLsmThVFvFfy4JvmJipSMpuGh",
  "key5": "5awSpRHHTc6fyz6nvZWWE9pFsvJ5Ggd1vp5zBLtk78tqk42bMyN3kmcdFEwiq562EMkSvaZp4Uu9ae6QRRuQLxmZ",
  "key6": "4wNfiprfXG1N9ZJW7ZFPpLj3T7DuKk1aadQD1nxusWkjCn1XAcwN8VZtpejujpiFptrTsEEFed8RdfzhUM7yXW2S",
  "key7": "4DVdfMBwM8c8gPVSZYysnF1VqHq2L3pryw35nYFRPRmUJgNBbW6u1WBsMwdaWbn4aRw1iDS3R5gpTdggFGeisQw1",
  "key8": "4A61GVn7y1HHjDUCYjxXjhiRpy1pnasnapqzPuYL5LH1a4DNux7wzVikRL17foPqjWEphWdhaYy7akeCRzKV5HPr",
  "key9": "51tfuQRsFdECriVnjsFEVc3KAKqa9iT7NcuMQTKNu7AWThVF5pPRm35eBrGSgD7ysd8DUouPrBZNs1U3Fs4STRco",
  "key10": "2cJ3wE9r1DBa2LbzEhmsrigc7MaXZ1LjnDhPSy8s8cnn62y4vxL3rt67ukhhvdfFdEySUESzBDUJfKXpvFzv9HCF",
  "key11": "52oa94gqAd6u9Mv6VFqP9E4rMvvkRsa7WyBFDimyRy58oZo4KTcfkwwU943nXSyTs7mZH5d3SKiRdW9p4e78P8AM",
  "key12": "4nYrQBXfd6p5zuu13vPujbzUWTCgw12QQoZesuntpXfLqSXiEPAT748rRbzaxPi4uCdvT8sSvgE7XoynHtBbi3xd",
  "key13": "4CtYQVVkYwdKzcJLb3DU4awU6cASYZbULku9MsAHXZYKV1GcLPZJzPkbk1qu6sE524cKbcErzrbwfrnYQfMhbjpi",
  "key14": "3XuEyWwCkgXrjfWNgFKSCMYdzYXPj7HwpPT897wuXiAg7jrLGWyYGm3TP6sQnzty8rSfapU3jS1WEyY862QZE5Fz",
  "key15": "4TZWMxeyVguJyZQf8Qmdp1x5TvvEyUddEWYeLWdcpNqVrrSRhD97cLWG8E8uvhe9G4JQMBiEE3D5ZmFs3awz2sjP",
  "key16": "3zRaT5NKJ3dwdQfBiXwGY3KBYD4EMvzXF4smjC7dXfXWr7SjsJXNg41x8nga1UrMsa69xR8431q7KBfq6LzUQE4b",
  "key17": "5SzEzy4DgsWSAJ8SeL2d2whUWuE5Xw4VvLGGD9GxNNKxUbx6wEvDzJuSKEgRRWJWLFZXvZR7GEhMnyyU5rxzZujq",
  "key18": "5nRfQYeYszZZDah2RaSi63bJUZNKhcjnDBy1ev8qfdhNtnSs59xvdnSWfZzznV4PYq3SUrnxsZvENirXgtSUQep2",
  "key19": "5cvbjHLjJbmFx2NwCUR3gWiUTRbigtztsZ2tGmJAnYACkjACL6GVUjhE6qSNz8XM3V7JXkTcrJiCsB5Q2jto6HeK",
  "key20": "3tS1wFAjEQ1bk15pshLtufTZ5P3a5c5rHAwxmgRDNzGeBYvGJJ1sJG2mySxYrbDCoKUmj5jUG7kfNr9AjH2CuLBt",
  "key21": "5WaMpqBTadJBXWDxtYQ6Z4aF9U8XcjoF5Dy7Yfk6dzfGqeQiAdRDABDyjvXvqPJvtbBFGNt3YXKEcK48G531aFhK",
  "key22": "59nnoKMu7QMzbKkb3AjVxFqUMZTjt9QUaVqrPioNW4oSxpsA3UNnchjU8YjbVVi4UgRDPBjEwx8XdqvYCycDoZZK",
  "key23": "5CgAkqyZE1SUCEyfwnVRr5ZHp6Aos7hVSDghhScsVPur5YhTajMXTZJX1kyjK122L2eL2fe3HcdHjDEVYDqj4ing",
  "key24": "3w2Xa9YSyiSRg9e1axPxT6FcBWtLrAPwcbiZjEArv8TY4T7LtMKW7z3SUAYe1zzogQn2kEqQ9Wi93eufP4EiiPnb",
  "key25": "2KEfmWVUfezi6A3BcdaDagigEcYkENvz99kJLxhLD5cRoxhq2ktpf6gBY7Bwnm6RDpiYSRmN66yzLxaKEAhyR47q",
  "key26": "2HmRhtuYG7p5b6D8giWXTwAZHSGRVPUeCTa7DaXS7A7rHEFJfDBC1qWKnFisQBiBMQDGWvjCh7BakYsZtmmTuoDE",
  "key27": "4DZ55Hez23Nw2gTPFdk3GX42jkENRXmv4cvyq3XzafUeBwK7jw4GcLQunCduNJEmeK7wzeEqGRP4KsCrSW6noLsH"
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
