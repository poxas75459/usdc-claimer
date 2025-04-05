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
    "5x5aAQMnPnk1f5UuCLFFr1buJWszomwRKszNtQaV5K71XaJwcszvwGfx2RL5cujDK9q3SHcdmnWh1XEE1whb4rZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SVL7UDXt4v4sFdd68dDRSRQkDKJssioQ44yDUnth63kZyoXp2GZirt1UZo951uCmUXpexSWpXkxdM4TsgNNimer",
  "key1": "5M6a9YE22CAN6iFbs8WMEKZ8adpg4kEcvZRUPruhh7vypCTDHivqGDDMNTnYsp81butx7mz67gKAG2FNM3ho4NQq",
  "key2": "61yTZ7v3fP8ZPGEoX2AUDSE9KBgt2T6ybj5zYerxcdfdGEtvS5buyeQD5Q3ATc9nPSsr4ZvoSeQpws2UhcLG5sjt",
  "key3": "4MKckTfVYvyx34Uucg9PSiYUuh4MY1DFnY6aaYtL6YgK69ZbGMoYiAGzCUegiYcegJL9A6NWdat38rDHuwioMoqK",
  "key4": "2uyYzvss26tVjo1eBDBj2Nujxmqf5m4V1LfZ1KR2cWUzR6EuvCuVKEC3taxXD9bfn8gM4jKGjAUzVQRmEyHZf83y",
  "key5": "54F55Mt7Zfyvkj3pdoScXXnD2GHtpLh1cvkkQJRDLQiRtym2ftf8i29LPa9vGRFNspvrcQ1y5BzDpgMkfNzzUkCT",
  "key6": "2jyovpkuXYc6dahhBjwVsFrR2mRyqXXgkm4DnvZpfxpzPCE3iiHverQvXw7W88px8K4YHGJRiw3WvarJFFNFo8v",
  "key7": "Tt3bhbsRrGMAdQY3bxYGyjb2KcB1zJd5UBvorRDuC8UVuq9H7Jn1qh2jDaBLvA6XJunPJA4iktCM5tgoAZZWz3g",
  "key8": "2raXZAeJT5rgDSUBZxgnaKk8yJet7c6esYjdVbU3ecSgzggXR3hZ1g3v34f34iZ7HrKe3VMRSMRPCHtPk5DJFW1t",
  "key9": "2mzrjzzAz4jXUbS8hqaXc5YyJCVt7sFM6vS8BNkgcp5D2kN7rLgeZktPiCDgVcUvwabdjyQk3awvVHmGVuhsUnHt",
  "key10": "59BUkrUqZdS4u14yYhQri9of3FyLUUpmT9NxNcQqtSuuHZvkWUmHHKupPrSKVXX59yRqo5smcDSnXgUzzde3oTaM",
  "key11": "4ao6BdyLr2czbSBL7rSvKSXGgXudhfnhiWv3zjsMGegDwkpPn72ewxRNvC79yNpjtkHRXTLyDviPnVKc1w78pVLt",
  "key12": "5wGzPYa1ejrc2Jim39eYYd2G8YmHkCZfwmeGRP4L9wkHMFpQZw6epV9CYZRXavLfHXRUMabZexNb84R3PQJjJnQj",
  "key13": "2fg2bUF11URyoEpS2dWKeasEBjw4yRzv7Zy66mvVzpi9TN7c2GqU1H8DKPLezx9Ygi7fAL1tNMpca5wesK5qZaJM",
  "key14": "53GegBJjzu4L6scRQEUwRcTQtsvifbn15cwxvNB9jrZPWZ7yaBmtAncz9VyfnM3eXsjZFi1WxVPr56CNzcBSt9NU",
  "key15": "2ER456rR5Nr21CWt8LSo7Y96DukCkS421xi3pdFKMo9vup2BVjoJXehR8AaZotZeBdEMjB3V9GhHLcRLHT9Fsztj",
  "key16": "3qjjsHJVPX14bvrwutwyhuWN8ktN5UPShWLK1ACe5UDvmv8T6oEWLTqKDrbCLxzQWsNk9vcBAJLoxPigecyV36bT",
  "key17": "3raovcE7yPtux46zBtyPtTFLikfWmC2PbbeGgYCbJvwmJTiPXYGKMV1sUH2nA85LLiKDW81To7gU8ojdHJpcNFH6",
  "key18": "5LwYZEqv9PWSvcK4zvLNwEny93GcqPPG2KzDPET6he42R7cmxmXm1ppmCaHY87s38hBDifUxk4u6BpGnHR51G21X",
  "key19": "3XaUo8U6k7Rj7qeQ4HkzMbBW6zzSEf3v8wK6DsZzK6YwxvJNuyEeD2C6G9cnU6xH5eafd5bF9pr5ESogui2T8Rsk",
  "key20": "2itBvG6uSDDgDDtVKZQZVEuZwcHZHGQnVKxXdQHz4YY9qRK1MrYKUpoBfjesMkQxqqJseHcKf8seo5PygpwGN7aC",
  "key21": "5VF6AQ2wGop2F1xnatGXpTys58bshLJEnXR648qsLTRBFekEMpiCBVBswW4W1cKXa32hruRA5e1tKwy9ibS81fqT",
  "key22": "2sJENZN3ea8i1gRrPCTCwBHBKdVVQquAM1xomB1LGKKujgdby9ZSGyqYafzteATDGqTZvukGmrVBhsckYtLjtm72",
  "key23": "4gsEVm4fLScwSWrLNswVyijJAsEwrkrSGKQ2iYXkkMu5oaKr9T1TuD8hdBYYYqPS6yVnTn9EnGJswagdceuFrKDb",
  "key24": "x5voG4S4SBfAh13VEVyKYE237qoH5HBk9EyN4TmbKPc2xxSTttMTT7RPyacWcmAKA7W3rmxxQTYcLmC73VE8Ucu",
  "key25": "2URn16eWyH3yNKDY2a4KvZ1cL1z7LbZ1staXT6ApqpNSQ5QvD3CQYPSPhEzPz61WjWLRt3o8RhAwWKPrUCvMS7kp",
  "key26": "2Cy7C7m1uG5uw5TxtNx9GnNJ9N5ii4G7YPmFuahk9URzjvGKFZwxc5diU3REV1qNTqdbWWPkZZzXQcJfYiZQFKCd",
  "key27": "5bwujDJcFpGuqRerQAxdZpLQ2HDzSbKhX9VjxriiMKSzpSMAkaCzDLhvkqdcsL1iyKjXpgfxfiQD6i5TAEk8jEXh",
  "key28": "4ZuRzc85KyRwC9497sutVvJ8G7qdScB3HnG9zv8m4cf7eSdoaKZtRLfqz2B8CsCAd3HmBJMgq2wW6PZWXa1J1Ryp",
  "key29": "4CjWyJ9g2s8rSd7sknDoWjAMp9C3rCuHeQWE6zQbWmZ126z93p1WKC3aud1MMFBm7cuHpy6HQASvE3NYBiYNQJ67",
  "key30": "KEFHLYFkKgykM1u1WyAH2suxcSt9mTpwn8P3BFLdn7V115iGvcUByYCGxss4Ps2z1bW3MDHZG33n17uxmyNjLKS",
  "key31": "4cu2Qh4TQyriZapN5jpUVkiYR5r4mNALLGe8GV9zyAUHeAZ17obPRZNeXYF4hs4jCHTYY2WZKv7xBntnXWjRGm6D",
  "key32": "4nZdTf2FPs9EHZvyfCNLQVhpauN4UqW8aAq1UWEZBjEiiyVN1Xnx3tWr4iY4oMz9etDs3YsJCyQ5BL636iZVQywF",
  "key33": "628vj5jxFwdFVfTbbgNHwRiawH9QreXZPjuuHLd7n5h52yGt7RXqRFuaiaw6QuuChmAAMriqHpCGpj7Bi44KJW3s",
  "key34": "3gJioXGBs8jPUjp7edbLyuPkjivFz56zY5MBQxZ8CES3bbffajPFQvQGVmueqgLJBzQ2xFjkFhX9e4Xnfpa3znRH",
  "key35": "252SEZQW2K4joxRFqDBCSKpJb3jEkaudx7aq3f484mHnT13MLhwbTLLByJPTZw5ZbJC9hgxhXLLzc26QRU5feZi3"
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
