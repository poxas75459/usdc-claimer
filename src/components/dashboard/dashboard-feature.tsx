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
    "5D1mZJLJcs31j2A95utVV3HPERATEoX9nXNzaRrea7jpXeTF4M9Mr326P9vyfCtCka7aQ67bVom45qDhV46iBsV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kwgn9rXfanjqkYNPFzooF4rqUn8GVfxPXGbqnUPNnh969QMANqkXQ4X2g1w9WpQokcHGDZnqjT2mrJzGUEunaCV",
  "key1": "2gKivcHj2pK8NyuFxuVJQoUhTAFBdJBaV7o9x3vy27nf6MqVmPZb2nmz72ABxjyy8QrSwEEMPh966s8Vi8UnJJph",
  "key2": "64fPrfmq4VbNkSZSo8HJAK5fZdv26VupHEPYW9BXH2pjqemPfCoueLrWaCyW97nMy8KCkUuuq2nG2C7xXE17CoZS",
  "key3": "ECf6TDEUuRp97Px3zESG1TR8aNtmsq65BUcBr1zbLQJ7zHrBGf3tjfL8DfN8EGSDG94a76B59N2D1U7LShb7oJL",
  "key4": "31uz5TJGkQGcByM7wq3xhToFKdVnhfN6971sFsGSDtDkN8neWrXWJuQr8qMXWpxhMojMC5oFX16ScT1JS4YZB2Mr",
  "key5": "3voDrviLLWRsAdrCfoR4PCdhV815wLNxfMQbsjNScJBHhT4wgTjG7ax6itM8LTvcxzAE2ye8GEVDxNGMBWZ88QZa",
  "key6": "5zQhrahdr7QvjsW9XEBnvPpfEzsv6BmANh3se3TkZxd5xLfgWpdya9vcA55vDdi6obni5ckmEHtqedtgNTRWP4jE",
  "key7": "5BHT6PqX8kNUuDa2HMmM5oMUsqK8MPJSUmB8RwhYuJwHk35xQfZXS5fscF9wCNeu8MUGkCmSfQpKyTwa5H4w7HUS",
  "key8": "4DsKBJYZwnkmUvKpDM22BnhzPckF7RKeEqGoDrhcPzkpjELXZdEaG3PFbmqwauoik9pXi6oY9DWEgeBKxaASP2vc",
  "key9": "3Rw6mB7da8FBopurFxHF2PHvyZUw7hxwbjCQWFZAioPUUg9X4rDYeciL5ik46q8BQJiXkgUdnFt1neLMu7HSgpsw",
  "key10": "5qtpNEB34QuL8j8zgcNHzTfCkDzQD73hg2UoCqLG33dPf7mSsJFkFJkWEHuL3xs3By15hjfG5xVQ7wGu4rptYyJ",
  "key11": "N98WEK5aZZjYZjbbi2WnH42wmiXPJfA4E7kZ2UkyLiRW4PxcSYGDLwnNrBzqJFPLc4dfDbuQrhneLr5Z2m9nPGa",
  "key12": "31YLaAn3RyXcXMmnQs6cx6wuQJviRzpAsNe1P6jdprRqFyA62FsCBjtxK3aZ88YopjbEk7AEwVYwcvfHRJmQHSwS",
  "key13": "2xz2v71y8ghU9wwNC4baMEfbqVGMFsE3CyyuvVaPj1CwiE8GkhguhkKsBmJ7MfhQShvu1EQ8zp3tnWcw5GamDhw6",
  "key14": "3Uv9ojXi9T3QNWtFQqvzPDSPkDpzERdaAoK5QExtzeWfyAc7znX2SwPWjrHdC42vG8NeeU3W7Ay8NPZhLRHNxTrn",
  "key15": "YYro4gHyodiHoKxf9ciyAxCWndN5SEZDCwfvoDxQKFvXns5xE4aUuk3VTekfwhQKErmwLq75CLV9nCjzKnrX382",
  "key16": "5xeDaXLw3ikxKCiap7odnXBY757YQx3TTLmL3WXXYTPqZ4gmbZXkP1UTs8kjkX9Bkvb5DY8jSL6VLStuzLq2cp2V",
  "key17": "NamqwNt2xsvXvW75wJF2xAwSNxjk7T9WAPGUK3CNN5DakK1nNbmi8WYN8W33nfkGskdi2gVXQk33gNpkd2uDBG3",
  "key18": "5xjGrqGFM7VcUuexepS2LSahKYJ4PZBx6vxT7JE9jmwxmbWzzYjKvAXYQKTUbLLRSAxpoMN9Q5EE1aHyijXhdkNS",
  "key19": "2q6F6nKHDqLCi5YZZNtQ5oXFr41egVdjPgkBTU88is7n2p2GLybQ3Li1YcFgFhjwSSYAUP91ig43JyuAMZtSMEMe",
  "key20": "4Uggrw1h8D7MUd6JZ3iEqLjX2zHUoXHhnkLh6qGv49WocSVMd1S1fmBQSbQqc8fNDJUdmpMbgVhMifLGH2UJSPgg",
  "key21": "3dMHWA8yiz5LFewnfsuH7AYhVqs9f7fQcnXS4KLkS9zwgbG6GcxPyT9HmYGiWpZepxyqFbqpUGtXDszwqKL29iL4",
  "key22": "ywmGnEnYC4kbK3rG6rMmCY8pLoLUcDTCs49zwMgF5zd7Du79Wfq45kJUKrC7GEvHm1ifKArgs4Hk1ztncdCQ1UY",
  "key23": "29nwYZtEt9AoMNFB46Y3M9D2DmxpGWGiwsW5wxD6yV4WAaXWeTzgShhUpcSvn6ZKDHyVTf6LouWsoxnM1BJG4YnE",
  "key24": "3dBrgKHt4pLHcHckHq5BniMeRnNhdvZcE1PYt8djzGj4X9sm8NAawxU8KBRbKXX8igqT6u4GTZP6QcP8orqLycgZ",
  "key25": "5FPM4WJqDsV45F8QN8Gnjv1X6JMEzXiqPFPhRfM56cL5YqYnjbR9ogTJ1TMC1uR3HvaqhBAgsbLgD2FoCQbcU3Li",
  "key26": "2GGiUZRKwqjsfmLxEUWsnUHYc94doaiGDTgaUhx5P9CWRmPLj2SHJcSjUiARbJpjQKAjgwusTaS9smn2yWckoPhi",
  "key27": "5qJjcmWv4bMbjqjrckeJ3ZuzcFeDQQ5SZiuRGhtMX2SNLZwAswdq6H5dSMmvcU1oTizWzpLcHaTJL4MCAr9XcghW",
  "key28": "6w1d7XbbvTcBxCfC2LKCnrPJA3VB9HjToUL32UF7e6HRCFqiYngKAzDibxm9VMAmRVSvRrzagXsumr89mK7A6A1",
  "key29": "28LPKzeToUmmNm4DgreX915zFHC1gcz5eTbcFrDY5kByKcB8dVzdp799n84CALnjciDfbfjerz2KfkehKM8jULgG",
  "key30": "4Ywwax5WB5XVeMuip7ncCkwjq38dpRuHhrpenwiAzrzQdwc3cEWBnfHFMWu2fEWZaEEb4TK9uJANGyQhgD67T4ND"
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
