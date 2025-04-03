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
    "33StWAu1oGFXKbBv9BPnqLVwLD7X6F9JMtYew8aQLLU1LHMoLVCv8HyBFs4RUrk6jPXsyghvu3mDWL5msqc9W9Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dtfFQGozKGbGhrxr11CGhjUituYBUBp2LqXT1pfuBZr8KKcS69UARjY4QjN5gkpjs3a8S2DEwpqnDWyFVcHm4bH",
  "key1": "4id1xueWAg9P8xHecoTtXKGmHXk2i9RxXWnA3guAh3LVZKLJTk2SYHDKd86RcoAg3wkqzCuKhEzXuWx7RHoomfTK",
  "key2": "56PohLAcKQtgqfzrRKJu8tvCxKmeqbyVjhgALc5XpQ2qGUwP5wAbr1K4N28YfnaJrwHt28zPGmVMY4UwynoDL31U",
  "key3": "526ZmcVZrgxG5GZdCKg9qnTNratY8rWPfaGEWFu3BrS9drJzorFf7E3qf1VgqGoNEMCzjbtm4t5MHeEkK8V3SN6x",
  "key4": "3cHoM4YFf7NogN75xksXG8Zt6UbqxcGAqtipwKr3DFsHUqyZr92Khnh749Am9JxfwLvDGDhDziRntB81B6tMKGW6",
  "key5": "492wJGKJwNY4eNAhkJSLFHCbnq1A5MHYTtvDsgsZ2GbMB9XSmNNdDc6tNmTpG6wnpaccFrdNxWR5pTWfyoWETjmv",
  "key6": "2E8kSRpELHrrNCXSEK4c6hVCJGNm6S6Q7ZZN7VdZy3VSafLWJmnN9SzzYEv5874p9A7xJAqG49cntUMhet6aTnEq",
  "key7": "4pcBKUPCKBCPqfLUsQdXvfVTCW2sgEGsc9zBEMSsyPaAFiRRNAihNoxrQNgTgpaQmP4vBf2zGaa865MoN5aAnFfp",
  "key8": "51AcfVeyXekPHd1yBrKseuniFPZSEQ7gEF5UGpZad121ykkK1Zn6vfYaKzU4XpoZWyNPYqtKVx9UP3jgcYoChoaP",
  "key9": "4VUVMXrwAgvPZH8Aep2rVpvvKqmJFq3yXgTLvqhQLGDRnFubEZbhkwgyapsuDu5n1hbeZmCSnohbJAa7ZzycVdZc",
  "key10": "5w2EZDRXBLUtvLrrnqwu1At4rHNg43beYzKiPPBcyo45v4gejo2utAEUvazph54F8mCtG5W1oZG12CS5iEGEo9eC",
  "key11": "4HPUovPcK3WsSVJcw7EjHDQuNBHc3wLsh3KSqB8LmpuZ369SNe6tKbY6eji5VFi3eyk7xCSxVgBdv3Ap5rLESuYC",
  "key12": "5fNiT9YArE9jK7MebqWFSBi1h6oPKqJQ5SVcnXtK3vRpEe9TUxbX5LUN79x2wjF4x8xwDTZxrpSsWSG6dvLmDVUP",
  "key13": "5gMtSEhRJj8FThLVLCvP2EZPGz7E9oh2zpQVxJbjZikWwJBbSVBiJZt1SLfi63y1ywv7Lpo3vqd6NUBDPZCdxhUC",
  "key14": "4mBWHz2zxaZyaYv8ZMdrCYde3BYDsqeLnuvS3y4s7ehu4VBpqDoUyU1hnSaLLkMcWYPcNKiCJoi9nXfrA19iw1br",
  "key15": "47jn2ZRSQBPLVdA4518yUmAcewVG7hGUgG4AeJapMLEVScoUFCz7UAo8zQNauMFAqhG7cPN9G9AzJTRwzGmPkQF",
  "key16": "4imp558ETjNij2Djh1BKc9thJrYWSqNxRxtjFe7uJSV8CrpJgojD357ATonf46vP9em2NDZXEDFyzhwKfNEy6v3q",
  "key17": "5HUQgcA6ZXdgzHRYSuKQYT2Rmki6ph5cRs59RtU4azTewqKaXLNRdTVVAqSk72ZAfTF94M3HRpMKHA9znNseSpmQ",
  "key18": "APToRYaBYHRWUHUJmwt2QpLAbomRqpG2fwawMxeE4JnxpBPnvWFUfAWdndahriwhcKj8C4D4CwwEVJQXxg88q13",
  "key19": "3W4MezdAWXuNEbhz5VpS1tHLCvb7o6z3mKJPgnPoPuid9V8a2skSDom6rGYZbTjuP3zVXxm6rEqPhgrnFi363gzr",
  "key20": "xUuC2mkVPdNVhnu8dA6Ue3ygd5VTxsEeDYPtNwHsVrae3xVsXFxjASrLzPGGK9yhzwxWev6XCh2kh6hTv7CKiwo",
  "key21": "2Bo5t3BF1BLPRA66Z9fGiatN2e9CBwPNHuE9WDeaqVRHzotpAtuQY3G5tFC1aHsaKXAKMQS1afG6StXLv3DTNWNU",
  "key22": "3piXyQfdM35GyXhjK9TU9MSAjrHT8Pjh7GNet1JTkFqnVn1jZGwCPzNNPsgHquqRY27AfojsySpBqujnQfJhYEBb",
  "key23": "3q2zE1uNavRVmUntfKz6XrAG7HsraMKovVibz6xARiz76848D3sLgX87rrBjHXbd39driiN3ENLGphZXhsoSDULj",
  "key24": "3VxQqmfARTsEMVrnXnwPoTPxuZz7BpXnhT1cAKz1sXa1x6gftseRMrMCb4MGimC7rTcU7xsphSKTXv6AfGCoyEEY",
  "key25": "3gy8PN72SaK3yhUsN6mwdDHHFxtnHiWzhkjMXzkH5w7kEiGUzHyRswdynJFabk3YT24u1T5aghbidJR8Ycx1BkQa",
  "key26": "5bMjJCUXZFP1Kojiw2odkrLxu1o3XpVUTaozjZzDm2Y4xB9pLhDawkkuxDhNcdPWiKALoQk2ANbcckc6AQowsmnH",
  "key27": "AMwywytxMy3K1KG1VxzY9i582dj5X2s7ank3YxxraQM7XJ2wgSxCsbAmzmE8Z5vt82PprcPStpHGGGSw6oHXGKX",
  "key28": "3A4xzHxo8oX4o1fJmLaUJoHeQZ2xJcPgXFF7unLggZwrEJJ82ZFy9qx5W8txekwZDqvQsDGuZzTbHGAEN7KBhNCF",
  "key29": "4ZkFiMf3BbTdSRgCtWN2wuDNtkHZoTeFzd3TdaWphgquv2mnpCLJQKQMDyne79v95iey21SeEdmPjC382Tqo5WJt",
  "key30": "2fNvpbxiVJamHsFhmsst7pfZ4WwE1nSWHCrVB7cKXPLLLyQALcqH77JXsVNyZKyvpq7c2KGktVW3pUrxvasQeXnh",
  "key31": "5cZmHpAug7wmdhy32CpCZ5DSWXEf7FmeQMtav6Ef7rz2iVbTgLsY2KLVKtgG3FhNdQLnagiFSLtzjR9QUJfgXrmE"
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
