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
    "5RJwwscxqHnY9V1yDZbAXC8oygsjdDixBWYDQNXwGZYTYDQZgKUynwKKKYYaL7ij7Uz3HSgPnUr42sybXcBAMFUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vXULquqTEaGPcCDyyccYoCubiP73QdNXda9sqFS96R9JV1oFJgkH5FjE1cCqHXozvHD9wsPzzh4c39zESaJR8gx",
  "key1": "B8dp5hs5v2XNJszEWuWvLwksdxfJ2Jt2hWqm7zbeD2bKY3gVK4KESBdbSM8LBjobw28bfYQHckJc8v1mmjMURt5",
  "key2": "2icg1E8zeLe1SCAGErwhwiRW13VAXU6k5cotXrEwCvUpnAhYjj4eNWsYRmtsMcDoj4zuu3wjB8EzQgTMWDw45YRh",
  "key3": "5rwVW32UfNHyf1L8b3bemp6avizFZ889f46gep5a7U1trg3c8djnaBfTophgbWqx3x44fqUg2NSF2pExC2JJjVmT",
  "key4": "JzGwWDfZ7PEcjmMNUEmXEFaoQC3QmSg4cARLxpC1qf4bmo5AJhY1QNtmNjeE7ELNxiV3X53aMF2N14UYWCLUBki",
  "key5": "549xMTn7DXHdLdevPoSk7BRgMPfaC1EVrZabanHfZy9Bov4mXiufPWiUcJCt1dJiG7evWjWMacWsfz7RZddMhDFT",
  "key6": "3VceKY51sYXVSQYzgygXq7Vm7ECKLA9SCVEHLkh6qLRNtkfhVub31gAHATrGbiqyhwmF8ByK1DKdnUppoFfHh2Es",
  "key7": "66JLrSSbGcnyqu6AznW8feMbrLT6CirtABHDMoRC8S8Cv7KGgPyUGwqdTqVj1cjz9aggXZKw6AQNA5mtSEarYrax",
  "key8": "5z1K3S7NrgKGWMMaRaQxGA2WyGaf97HtmBReZV9XbmWnibXxxQz8EGJqjqfeVmNZYFschWWHpQdEVTGd12vt1nbh",
  "key9": "5o3NZ3M7B8U1tQQWX23QF9yRcQTtpPY4zZygp8adqtf7KJFSj1HY1NuhJm6WPReT5sihVWpGF4woCSBBSDG5AkZK",
  "key10": "3K6BViEfYVZ8KRGH4NamdwSV8tkjJvSut8g6dotrWBWoMVmz7yaHvCLumqPt7b4HQqCAhPnGFPwqsoFk1REDaZb5",
  "key11": "2WUnH9MnC9gWsMSSDxQjH5yXwL5cU4LCtW6w6xqnbgc9q3xFfHMjzUku7tjFWtUXP5MpfSBLFj5TY7noSktBGbg5",
  "key12": "2EnsZaWrNrkHyCtEFHVqqRX8jz75rqDLfpPT3aNoQB28QVqbnzQzrMPJHdvJDa1vwL5CtmFbMs7i9LvSsQj4HVGs",
  "key13": "4cVK1XshBEcZ6Hh9a4pQWQEPhbDAyLR5M37qJbqjCgMP5qfqfwdA15un3RKFGVGT2TYBCgRqWN9XrFP9oDeqyQ6N",
  "key14": "3NJPgou1qmt498tsjxVS5YyuoUj2nAVGi9eADXHRC3cSBx6ijSNJeqCsc88v8ciCEiwha6TsCX1dwKtDzjNPeypS",
  "key15": "4mB5HoVgquYfauG1iYnBbmcKitMqWahyqYvS8jTuRBeDBqGPHZKTHbNrjqrWwoBjFkXP6FDDxBey6GkqtNCdaCN7",
  "key16": "4QDzUakYLMgtuhkX4uNWeqmBQCRtNaUkYwNu6nBKRBvijPNsWaugbdcZ2NinUuLH468Gi4baZ286mWcmmwHsYsT8",
  "key17": "C2rmffciMVFXyPPw5edidykFH974C6eyU9TQWGHa9MNiid6R2Tmiq8fqyJ4eLsLRCfeUNo7N5vTtkCLp7QE6c3P",
  "key18": "4GJSqP85tPDu6Swypph8N6pzrsfGPG9C8DVnSMA5aCWtM5Pscnf8Pnp7f5cT9rWPZxa18tTw4jj7C37kwhWad2Wi",
  "key19": "7Yuc9yP8TJhioy7io6NZ7pBYCT4bkLBhva3gLB8bFzGujeeMaSP5ZDHYnq4zcSmQviyacGypQJ4CjFw5WokxiDj",
  "key20": "5d3RJ48bmJmPwr8n6V5HPMvwxNpdFaCN5c76PgenYhpQP9CZPP4zxNvoXV3Yv5Qm5zsgpUKanYfaTCMdYt4u9jKw",
  "key21": "48WmPzHR1RQq9jLJz7evrVrJLmarSVGSFbL6EfCKTuswjPce5NzTs9kfmQ9tq247Qi17uy3WAjqZ7Bfnee8Xy5ns",
  "key22": "4RjXzFCg1fMtop24PMrLcL6VPc9AycCPK7nGS5fpeZpZun59ugrUVqkcvTeJutBqmkvd4XzZcYgneEGJEhoQSYpu",
  "key23": "2U9FCeaPdZ8VgU3Vf92NboGKaEtmPKrsVRNWnbqRbiJDrQvkEfq32huCNzAo4PeF7US5yT84jXk449D4KnwNNjxP",
  "key24": "2ZCpJTfb154oKDvVzYS4kJfm3ec2g9HEkwJd8gRx5ps1Gk6ycimXZrxJ1ti3hEQEzhmVPhh6fnVjVFDAk2uCDvJm",
  "key25": "QcRK98N2cNA3vyT3LjxUm3M5xc5vQrqxF3cr4DWmBZR7aQwv1goZkg543CmLg4hxRFYvTuwZreqQpuaGsBbrhJZ",
  "key26": "2rJPew4S7bzqRMYqoyUjoSfF1nWDewGdids8Cs2PBNxbNjNg27F6RGoppQKH7Uixaba1ZKNwdu9XESWeE6dfaW4v",
  "key27": "3y594NASQYGUbzv71YQK31X4j2sCYQYnz86GQJeogjjpntuX5B6499T1wnKDBYJoBcMaKNQHt7JbepuQSAVbpLD",
  "key28": "3SCQkWcbXuDBYEdq2bganTssCrtK1azBnhUJ33zzE5C9J9MFT9uSGyfsfM5iKxqZtRYrwXJhjrE3oSZf6DSMQRp1",
  "key29": "FzGmwbALi9zdZKri7amkjuBh183VuYSJPbEknkMXTEKsoLX7xqWdPa5ioHsHiHBzAQjHQx4MgwygF1tdtePyNQL",
  "key30": "4RErk22JhduNz3qboW5Rhm8uutkKQpx552Yo5f7fYhjTyzhHhkKxc5kB86hGt46MKn5vkW8PMEgN8DAn5fyunsDT",
  "key31": "2ATMUpwMNEdodEDTURdFjDVxKgh9JqHbvNEbWVXLZGpsDhC2nbs53CwtX3wckzqSEQCdbek3rejmSPRSGqjdbBvr",
  "key32": "FHWmjnV8NbWFFoYND7Ec7pQvZHXUz39sjuthRB9ZGXEjVmwdrLpStfbAbKc6wHe1H4Mf4BZCctUonbkLYM6sSmC",
  "key33": "3avxPbqkvpaVmUkJwHecqKb6HJWDEdvMvEZseGyc6RNaKReyM2vUfm637rnDSbEv6xirfcsXk9j7mZxc3MMCnyCi",
  "key34": "3TJq8idQbg733GF4WY76tsr2k3jN4LfcdpCWrBhSNywkkPyLsmEC8H67mNkV8eT13RNTQJW9SZbL7b8i8Tav8L1B",
  "key35": "5hv4VM3vsNY2SbPDin2VHbwideoJNbiNFTyemKaABdnSkRCHvXrjVYfhs3X4eUuUhJTZ1PmoJKd8F5VdSiTusVpk",
  "key36": "3yg8bawKh8qkr7M4wkNuMndj4wPeQBcNR6ymbfHpc5aHDoYJjzDu2q1gY3WB8fW4dU8AzsuJLQK9SDhtAvgjnkJe",
  "key37": "pj6dgZfmYPxEooGASKiVup56zo9e6M47DLnftbJmWF6NgxSzedZLF5bTnufDEwGisWh5VvysWfsz5X8zHHczWmX",
  "key38": "4bm9iPbHYgHtDxteR9aqAHFgyGp1iBEkqtvBn5wWSBGNQmhp4apxVdmGvqCFpg7CsZffqXhdshveGc3VmY37yaLY",
  "key39": "3sANKcuCzjL77iaaPvEkt4km9JRB9tXAqB2SqEJXnL8cScXtXHPxho3YjjDBtPeCM2oqhk712obkVWYsF2xdCYW2"
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
