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
    "5CL6TfmKnxPBV18hML7BWG4GZgBodXdGG4e6B3k5sxCFEJ3RHA46SU63KSVHAqZRE4gv3z4oMqpM4jbWSKrENxF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48iTuHheCPsm1AwpFX4xU9GUgZB48pmoS6kimcuHnK4QpkGARqMYzmLDYSvkdFAWaVF51duypuEWTLmLdxPu7zHB",
  "key1": "5qVDcoyzdC31jkmxC9tigtQmnK79ybw2dhtaKfQC3MZgmNenDKyAFD33xQBPNMUDCTFXVMVmEDt7NwEE5jJ1sfm9",
  "key2": "3bMWcviH6pCFSVkTwnQ4fbw59StLeP8vBC6Jsf4xM2mdRNJLvfMmU5eidhkssj1qDR3MsJr3WbWTh8KzuuctEKxw",
  "key3": "4tdJGw7L2Dg7Y41PDeyikndmQJfBaZL7pzxbn9QkbnksdVEyBM69T1Ezao2FHEwFxhv6QZgqRUwWMVQiwCopJ2as",
  "key4": "21xi7jVc2Jwnhy7C9HnZvnhZr9fjhEkqMX1iaX6Yi1pgGc4qESKrdFMiHgqwhFNEAqiPFV5w1QZ5uybKtDgtvLAZ",
  "key5": "4gyF5nycMMSbJs372Pco8VDu8gbJvEBTAsfDyioHm1qh5vTKFGFmScdY5oJcPoC8JcWc57b7FMxbP7S3VCW1oaXE",
  "key6": "5RuZzTCzpMQGSfnCoXAUKDVWPPLJiAe7wHmGkU8mfxyjHniy9DQNoFetf42NBqJBgkEmXNaMpWKPshXsK51WFe3g",
  "key7": "66Shdu6ZAVMkvnLA24CdhF3rzy2yLawAzpEJrebZMkVugSF5ahyRRpuTGi52Yjm5auRGfAwmvMmhUwhBiiCKr45L",
  "key8": "5io1rQRRDFXZd8gWXUBMEZCL2DgULXzJGJ1kWdAwZQ1GJdXkpxX4fyC79kvN2bMXoe13b3KX358UwwyST4MYTABY",
  "key9": "3YNvLELFm5M5Napo1S3kugQc1DbLpWjmYDnmjWDnYYW6PcHcwyKGTEgrFw9NoqYz5JihKUQhu3UEH9MknRTR7vLs",
  "key10": "89qWYcTN698R892UBRDGsj6Ls3MKkx5cdj9RzJmBaTxd6jyc4eRkSJ9CybMqYsZY8coMXjpKjqQt1oAVP3qyS5W",
  "key11": "22fRMHA3kca32VyfaSphdEJHYR3DHQLc2M1XA3jsbPq4UHEhhQRow4DYxrrxrYEWQKrQ8jvsprvXhbPN79Vnh3Z9",
  "key12": "4A565oAc8MPreoTTFNyuJrRJDnxpc3TABzaWKm9Lpq1L3zAuVmMCSggQ6D2DhTjmRaVsHGYmoaYDe9Thb68263Hp",
  "key13": "23KsaMXGe3trdkYeQgHkTSe4CnnCqf3NKzENyXPs8A95zRY4a4HmfBSCLtw1hDZPyDcnLRZD5jJnmiK6n6zGGtXo",
  "key14": "5GendxuZwy3vZoniX3ojUE3iCk7yxnzMgLBNbBYNLEAA6qftUx1zmDxpBHfTtsjFRBpWLVVCySY3bKEXMVngNNki",
  "key15": "XU933YfGAaAVxBz9xdYzcBspYNyo1weratHb8wCyXUr5YAFVy6hU4M3fBy8X97huX4nVtoaA6J9RbUnGrABc7eq",
  "key16": "h8Q73EEc59Qa7xMdeTpJxXBug2WmP3vwgBTEkUvM8Tp7GRivWED3yLn3NnWqvbNmirq2WbHa7CQnL4jtfpU5Ei8",
  "key17": "5mzBVLp5wR41DvyqAJqXtZ4Z6r7JxK6aw8TZVEAVThLJEerGXra2VpGqy3YvDbb72CkgdqhwULx1gfbrZn5nd1cW",
  "key18": "5NjW8J3Hsqx8ZLuFiefnKfWawKzqi8JuSp1ua7CZ3HPCaAfm3xkKGv7zt1RJg6vq9aPhDdZch2BeCRtuqzeAb41f",
  "key19": "3r4v8MDW8VT3zGh35HHPXKpCqfRK32F3humgq5vWqeQWkycfdN4yFQxtDJQkdybTGKQ9bD1Y996nBzABCGW8pwH4",
  "key20": "42EtGHUYy8cEMbrGpCuRTVDh6AxpuGFnMZGhuc1fqMxdw1DggRo1kPjWPhWx52mre7nuhw4VjQGnQ8mMuXnamWBi",
  "key21": "5XcTAGvDVK5aftGNQCrc6kMsPM1yowTPQ3rkx8fBzg7a8aD3Y7XjuXMq5REpj1woxDFRRQUsMch8Ate3aMZPPKqo",
  "key22": "dork2AEbB4zvUJndseR8R1nf5vDF4MrcZr9TR4fmbrQXKPYXNXmxmiH9g4TK7ZquS5aFEGrRX46ixuMAyppXGxu",
  "key23": "2QGcobWjSZAbM6qXYMGDEnjzz8RfqBb7dG6jM1KqXPXtTTem7qrHzuxRaXi4jeC4qBzcuqHU4XGC2Sym72sDnLsY",
  "key24": "5apYdm6DWnWPsCqNnqwU8xuJeiSoJA5H95FUhKxfDjCJVLTyjCdBgsW2gQdoEWwKDVB4T3H7LdQBCyhkUgr9NfJN",
  "key25": "3VTgm2ians1BYrXQ4ANUKB476BRGxw6D8NACmDrcfcJvcheyb1QhBVy3TxmrKEeUF3vdVrVHnnU8pbi1zYBTqEW",
  "key26": "3hWxNbTECf25XjAgiTCoUuvxeeNi5FcLGa28NtPf46WyV939U5p9bBhxq6MSTheMKZNm9XGWKBQPFeQHmskvkY2M",
  "key27": "27Y225KRGYPJzeY1GdE4eU1JZ61NbT7iPzk7Jux3B9BaUs1Y2rwRxpZvGfVXKa9583Bwm8xGoE7vvLZiVrh5S5uJ",
  "key28": "2djAhUkKK7Tsk73UKgRkuSj2kZC51sYjGFp8EH82e9dNUhrT5biXV3GL75PDCqL3m4zmBpPqVg2ZQJycyBgtPFTz"
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
