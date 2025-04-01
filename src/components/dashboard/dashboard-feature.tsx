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
    "31rZBueY5iCggeyQ54TL6eASw1wrNdxayb2xJwuiTswcnrXK8megMCT2mzyv5CxdCGGUmQ26MSjfhyTc5Z95XnTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25yqoNkJ17S9tw7zs27Nx2KrXRqWD6CfskiETAoWUkgwepuRrSQ3qHjxWwtqMYbEXRsVUNwJbwXTVwGeA2CoYod8",
  "key1": "5AKQDs6pKSHUVMzbPSsWcfPZ58ASNq7L7pNQq2FJxDUqbuseSGnUrfZq33hzLFYAGv8PKfRkh91CmvYWBQuY1UC9",
  "key2": "ajENBw3fxHaUHM7LR3tZbmXFfT2MPdBkE9dMN7YiwFFv9Wc1u8sU4E9E9oECBL77YFMEezeaDZRrJYsV2jXibEN",
  "key3": "PKKwtPAMWmQcXbzHUVAxp9H5XjQeaJq8W6r4uutgtMv3VLpqGvujCyiSgKYSGgBxvAFBbnAWvF6BFxLsDJTzwtx",
  "key4": "3eyGRWz72AbpfmjkHwZEVucQDKcQQuQkw6YAkiKvkzjM5MPNmtcCSPRrHDMwhxZVDX5GAbbgjPw8R4nxpmzmjWrT",
  "key5": "4g35q55RtuiizKowWa1oorhAGaZSXUjVd24ZcZJvncGwcasTSTQsdtXGLKp1EjvKx7KQ8vPUPQC6y2EwXetjCaa2",
  "key6": "5yeAU9VjvjBZTJULFrMyW4WQ5KZ3VfBwBeMGMXncRad9p1XWTPbJPso6shJU6xosKk3UQNzHa9QDDzSsjz9Uds5C",
  "key7": "34N6nMR4YXcXkbNCpp9AZezMq7uwF5wc3W5FByPsMHvb8pXggiGXoaNPM7QBvFyekDSgNMVLJYee2jupEzDubW7o",
  "key8": "a13hPEsPHU5A1Tohrv2PyLbQ1uw5WJ8MdDZaHrjGd5xBrVDhdW7UuvSb5cDDQtuWWS2UkksuthHmoNGhCger1ao",
  "key9": "3uibjmh4zvur8tf1kniQZbmwFEpVMYZStTAwZyPtqrKYrQvaNQbRdSb49axQ9T3NsWaHxGqUX3T86ucfaqUhBRcN",
  "key10": "w8dyABcGYDyukjhs18ANzBM8rfHqkiJRC215bjsPnSYXQqBQgAPbvpT5xde2QHyGiNf1ohz3x2PPs2Z8YvCxcy3",
  "key11": "2YFzCJwxDuXo3fxth1PQFf2yu3odvmJioMfrYi414Kf6h5bsey6xQBAHTWvTKF9bypJeHFM1pnXAhdS5koTNiVj",
  "key12": "5w2TgaW95oMfGy371cYELw8Vx5X4TuH1b84W8Bg8zuAKVbgoXMSghMjGv5VTezuokyuHBdbTC1nz63XRfo2HaWZq",
  "key13": "EHANAR122BdCr2pt81UFDgLWGCd67EE3vJiM3NYEFdxtF6Et2QiLxcgJFvxkoVoTKYqLkALvFkDadTqxQ8dN7vW",
  "key14": "CqCnDmtH1zFxmLqKm2zm2YEGZ41M7zSivzbeFyeZcXCuY1Tg4p7Zqg4DUT6duh9CdspNHqxxwM7hMKkXbenEe93",
  "key15": "4Nij8FYtekDKTzKXSM6E4BYb1R4p4ReKjLmSFx4BtUCoUc8CTj5QcMfCqjfwyhwdob5Sj37DrWs5K9ZSNMo2uawk",
  "key16": "LmFaA5ZPro65jjyEoq4zx5xSLY3t7S6syznefhfN5BduY3X9oUCNjy9SHWhGUhUzZ5nWXWEnEtbtz8HA6tHps4j",
  "key17": "xMAkdcTffkJrZZRDjVFdFBL3mvkQZHXFPg5Nx6NDrMQQPTXqEGv43rnvo6REDTrMML8tkJ4kLSKd1aMuhe3Stq1",
  "key18": "633MxnEMuwwq9W5jNCN1YHCuTjySZNBLoofRgUqgtrHAEWfKRgkC2a56yeNk7psRz7z9MHRw3yRRThe6pBJery6v",
  "key19": "5ZUAT6auq4i6kKgUZGnVxFYi92QrUFGrJ5zvrDugnxqWu6cvz7dymFgsR37LSshJfSESEQ1LjhKASq9K8kiok5Zg",
  "key20": "2cJWLjqo45zxxuk6reyDSsGj8ZBAupQbpivutbT7MBCZksAJYnjUz7UHBPe8M5P7JMnN42CZGNtbTjfrzwZauk2X",
  "key21": "2T7zsUneUfHHU7GDaaJVURzM5Vu5eKznJqPfcePM4jHAVJfhXZ1SfqRvc5rnDkJnY5SXR3nvpqNHcUAeoESckfpA",
  "key22": "2B5qW7swnMQHzggCLToms5yaSxA2VKL9sRecnYB6rtGRA5zrFv6t8YksMq9GiAd5r3QDVVBhsLWZRALRFQZrNu4c",
  "key23": "4hvNo5AZvNPR2r3ZqDFi3iacbhywxLoamfo1dot4MKviDSPLXUdNE6QrWqj5pon7TRi9y5bnzGkeeuMsVKGTvJ5",
  "key24": "5pp9ywKxYW7PowMFuQN5equLcEMATcNqm8ks34t82XHFAF54cFywVa2fEaCeZWHPT5P3bXLrTufsoFWc53CSRtbm",
  "key25": "3xsTP9vVHbiJFo9NoUoXULd3mJojfYnKPrkzH3HmA5fDcR171eWGm2Hie9K2fLyYUCqLvGd1XM3uTnzXuAXDBoRC",
  "key26": "2zNYy76GcZRhdDm4BkeaRYoJjRHQ7fMgwzh2DczkkcP2x4iN9hmam2o17hB6mjUNWnCPCzadj8QZLzxqArUssYjN"
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
