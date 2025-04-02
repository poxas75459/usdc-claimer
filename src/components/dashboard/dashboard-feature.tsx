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
    "2eyWEZPWFD9TfryfgkcYLXKsVX4LkjCau1C472qBnGrtGhk88PjMERLarGEn2ZNMGLyGWAiiGqsq3MihJ6jnSZPo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91Pndv4YALccEasnhYgxmEDaNyeGTKmSMcMjtYStGWn6HhPRg9kJNKpyhxM244Qm63w3W9tzySpStogoRBJKMAQ",
  "key1": "XC9fgF3xt5JiHmN795B1N1n6AZKc9GaAvHu7sxgy9C7J7WF49TBmL7v4iizFeVxJhdVntuadxXkXp7L47aK3QDU",
  "key2": "2MKbtSDbKEoxM4pAdezWqAh5joJchhdwJqgeXx5t4bnyFJg3MaoAngtJYNw4z6FZAfKcwA7Gsvk9T36u9VjPJSVB",
  "key3": "2QDMihn2nyQEyuYywQ6utKCXAudPftPBt3UZEC8Fip7jnzEpWbSrCaEwbmUXahSbK614gYFPbeKB1KzyNc7LJegi",
  "key4": "3S2BpxvYe8wxmn33JTYANirXKZmDT1gyJ8KUVpVMSZuviJTCq1CrPdgavEqLUCWz9nZDgVo8CQW7bfbsJdCzZADv",
  "key5": "283NqigVG98jVWvEptzs8vjHor1SyF93KDNqMq37KgntCCyEi3rBKSt8uNsRKznWqMLVzXMuG7MTuW9oyyAxg125",
  "key6": "4G8uUHebk8SmgpuvHswryD6vYe6CWf4XK2RF6j9n9fnQW6CDKnrDn8QiigfFyJ1DcNukGVsMPkffgxrbdRzifYhR",
  "key7": "GSzDkR8Egb7CZddbCUTKvJnBBhFrLLtZp2aAgjH2daHEz6cw5tax9whwq69prreQKEdLAHv4gZttTjuQQo621Pt",
  "key8": "ht9P99zssAvpnXoMqHtjyqvdu4DUhtRcNjJHJ6bRL5qGBe3qHuk64xiY6FGT7BE5UeBg4WvYkWgxAAmHoRCeSWC",
  "key9": "5vWGLdYaxQAphDUTocGrZxwCBYpPKqEvuHwcDPRw7f4gEUmDJwjv3F7HDZezyMQy5a5XLYSPD9hrLGQ934UUm86n",
  "key10": "41JDxLtZE3B9NZ8gAw4sr5LbX4XWnsrrFXZXsckL391wSUFzpHPkXyBBJrmqSmU6REm5Z63b6ek1JTT138Y6ZLcZ",
  "key11": "2zUEK8Vc2EsvqZw4djg5AkyH2cxHspTWZSgUEMATPZ2uRJysWi3MzitKEUX7bier9prPg8zm2k7iEHym4mpmCr95",
  "key12": "3wcRJkaRqHhFVjAGbHonb9XueZsYNQsdwqeqWTTEwFymgwAzHeLHPxiHmFv6yGPrBAHbqVcgkmeCVEMcjHLYkU1X",
  "key13": "PCyq9irFhhMi9RaiWQkrk2Wshkw329CPRTEN2ojyK3UbWjTndBVYT6MfQM7KLKPPoMvayyZjr6AnEs4MCYa4R2q",
  "key14": "4TjZsH9bVBjMPAQBHXKgyY3zCiS7WTtp3sjfT5Wd63ANckwiXGVotzFB52GNkrSjJ5kPcL1BCcbJFxreopXFjkQq",
  "key15": "4AkaYE9P7wJKKPF5qKB38PmuhgfoKoNZbZYsJWnjSYi2Cyz8CV9X7UqRWnEYKtnn1twR7NkMAPq6DYaZ3HuaqzVz",
  "key16": "5QoMJFqtXmx84Kx1r7kQx7N3yBjQDLmGorqwhe1gE53ZS7XtftACHp9bdJYwSyXM5x2TkT4xtwzLH39TY42QpNpR",
  "key17": "61piyBNhV6PvTnNcLhLpa4BuupNC8mQVKdj5uaFfzhbHYpVx8jEsKWTNyVdMrqzWQS69uhnjZyXmWPeyvmPdqgdj",
  "key18": "RtV7GAUskqP2cvzcvF7EkN3TZhEbyRwdzFd62mKaF3YhFWcFuPeyBSGRYraLrsfLHr7qmFirpF53gAMqVrx5A1A",
  "key19": "4UA9nta1uGrpPALJoGMnUPtUyHQueHaFhupotKBwrH5CDxvGpBZP4sMYnEb2mHATbFyyHtGu8kxtMXPogDf22iTD",
  "key20": "4RwC75Na9Ro7dU9YnefiEDnfKxtcJgeWaUyrDrDxx54WwC6BMCdL3ZRVNWnetLz9wG5xhSLL6KJSvgAdwuzpWy1f",
  "key21": "5LNiWoEKrFZyQnmH8jC9hPpCZ2tGYz5YuZELyrTfmUH97kF8w5B7yLuYPrTRuYyG54B3zin2ZaDCKQKxxr8WTnPk",
  "key22": "5VFzpJaUhZpkBYMswmBjPxsjEzbWsV1ADwNUjbZ7cBsMxVAtho1AYsTLqa1TaRpQcg9F57vKQp6kKYwR5a4AoWt8",
  "key23": "4tz3vrgP9RnqjZqxgzyamH1AQfMHgMSPn3n8e36UaXVnSvjqDfat132FfskZyrheMjwau9hUX3Akv3pCHoQgxdG2",
  "key24": "2LpWMPb1YyeydqsCr2s47AnyL5r7zptHNvjChDoVcqKeCwKbWdfdxxHKCj4TW9F4y5uFjb9BDPf74ee5JTwj5M4J",
  "key25": "FzoKRuANNi7X4yueK4Qmn16JYwCJ7FLkrMH25RXWB21Psayqeo3DXLuSUFxoLjBH1FsfJpx78nktWkMHxNdjxed",
  "key26": "5CT6688igLTujp2uHvETV9bfpaDf41S5yHmTMTp4Uw1baTYEtdfU63rBdddxhVx3U264TDNoPTLKaWEa44mq8WEg",
  "key27": "2ikZWFSGkJUEQRaVnNPV3EpmuHHbkR9DTat4iejDyTUbhe4PhzdDYRVpvsz2oJHc5jshqqZYioM2dgfs5DCRQmcw",
  "key28": "4ippPXdTacVsX4yczStZYYeTZGNKvGi6PC2Z9TEyHiqGjeJ1vRFSYSBurdB1tYcVA1t7kKGmSMNQeAkQ4yxk9aCq",
  "key29": "2q5zKUA9CExhKPpj42VGFyQbANE5vgADreibgjW4vpxt6LCrRHks1Yj2DFVSnCBCuaaRWBdCGFMR3EpaamGr2t1Q",
  "key30": "P9hNmDnw5TYjjNU8HGFrgXzK8zqAAHfd31ur4LnH3g5ERF2h1SxAnykQkf5mG4nXcDMeSag65EgCqLh4qqqUfrW",
  "key31": "3UpZe3GwMQM8ndFstBJ6EhjLwhB9evHnY6WzoTbDMVyvX4YnCRREhWMWZNHf1eM3Dbr9yrQQFV1arFAPKNQzrkux",
  "key32": "4raBbMrUgyMwBW3m7jLbjKpCq9oTaLzaRFvwZMH5NmmoyDry4s3H4jCh8so1aiioc2TeuEz7TCzP9VbVfT5M11zt"
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
