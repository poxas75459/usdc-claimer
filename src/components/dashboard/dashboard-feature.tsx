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
    "GtEYVnJKJu8xn6Gr9mTzHxzY8hiFPBNaxUvjqJtvdAKXf2bw6NSHCRHZmhev4njea5pBarY1Yk8xwXBgVZA75mV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XJx1XB36v3sJ7zj2EHq6UZZSqa66isqLsTjawb6DTh5jNY3QMwZE9Meox19nxduwnZL6Vxb4jyghjiAqii49AKz",
  "key1": "23CVVKyMjbHbSaQ3HzkJjaN7gXLMbBBhTdKNkVDrJvXosbn8Lsv89pnMuy5ce8wDLfcDmvhDy5HLg5N6Eh9NYqYu",
  "key2": "5jRurHanWo3aUQhwi4oUG2eRbiiUv4nfoAHmCGxr4UNcRieiL851NpT8pTynorUnzqbBajpNm5C8fdkkLKU8NpdM",
  "key3": "3BopJbgdbEh7QrVTvC5ZtRtXdXjBRQhoYHpBUNxSGZD24m7T7BECXDbGvWMHKMxrjTpy4rypM8oPYMzWmDfmNKYc",
  "key4": "29fzofV1XX7iaRTq1y8edLH8AfwsWwrgGkd4XNXu9oSMmiEF1C2VTxH56GBTwzfWRic3HPAnqtbpjT4gJ89LZgcc",
  "key5": "eqVhnjZAo5Artv8kQ2hxg7maqysro5hQefELR8xVHMu32pCKSarupnB23sGJEYjKdtEXiBXD6gueMEch71MZGvu",
  "key6": "YXALcVxx1JFYdLsYqHUaKT4TiM88mWpbF7HFJWNcWfCMCrWdRjY4bKtsixkXwRPm2ripGTwdj1UC1Q3CZUM6BvG",
  "key7": "2fGCezHswaYSBSo3RSPewjvfR6txgtJ1FZyUXVXG8xYUdpGfSi3QD6C9AutqxShbZW4pQCBqbgV1YWk7ax8GSeQw",
  "key8": "3ztU5RjU9PuvACnpMQtx56MKffUH1Kvf9jHhRWvj4zo2iHoJbxvRkktVEEJ3r8XJjrrv8yuPVDbB42LE2xTeYppK",
  "key9": "2TqPVNxyTGPiVREbUrJj1wNMnG6iioeaica5jVUpuHJU3iMaRTJFCMsovLQUWYQCzEvPH7bFhu8pqTBFStJdBbrd",
  "key10": "Vg4c4NmKpN4ZwhWtRSHidzDuCusm6tA8GWhDLBxYUG7x2kMybytnvUSmydwWLRrobVC6Gxv5nWTbFW9RUW5UDmK",
  "key11": "38c1pypoFKFgpphmA8oy3vxPk4Twyt67qKBqKVAfe8M8AQvvszMK11A5LGTLEZv5F8KeCEgjCSntojLS7EWqDLVA",
  "key12": "2TQT6yC78Zg69xVBARog4UkxF2vQsQhKSc8XQeTVQCsWLBYV7PTm9seyv1Z5FPAKkjttf1EmMcpFYLnBXU9gjGEv",
  "key13": "4veBrCZxGLkg3RkcZJt3XyS4W9z8nmLog2do4M4CypPykYJEo7omnbzsWRKY3spXYGM9LouatMUNZXvWUWhBHfF4",
  "key14": "ba6DtJHGy2jAFmeFykQ2xt3J5mch1cK8ExXAjidpoCHxMnQcP8HoPWeBjnq85SRvoPHpqQe1KgtGatawiRThmXm",
  "key15": "4fN57GQdvbMw25THsXeoz3A7sETXywgduMFpy1nvBQEry8vnfFiqa9sugGNSmTuVJJn3S287zoZu2AeM1cBEV5gU",
  "key16": "2t1B4x65VZSFH2johpWok5BjpxdycYEzF744iNQ1xPjLnr15Q4jiutX7suHksQcbabFqfZFfRJ8rwv4ebRG3EXYm",
  "key17": "2KRozwZ6NDKqyTd7sriXV4VksFDCciD5mCqhr8nQwvAVGBHAkpoTBxTzxx3drwtyfQgU7AsyfYZEyqYwn5DYtiUr",
  "key18": "32PWPEpGuwBvBnrM7B1fYrCsWYGLExHf2hb6zWUkU3GG7wzXN1LES9Fn3FJHSXRaQJFyASbNFnbmzo2bT7S7sWCH",
  "key19": "47zHSCJqG1Ndvad3pXUD3xEmafudHH4GcdbvK3ENL3AgswET2xkxD16EeXQGyeBZbkVqzopzPSeUM1VVdL27HF5s",
  "key20": "52jjLRu1xQ6BMJV9Yd7REiqASS2hfHBbS5TYWm1xcE1zXuFNDuNBLL3FZK3nsDnHzgVaGjcupMRrxKJrKVBaQadD",
  "key21": "31jdJarLJqyMYAS8NqPDmfHdKzAcGao4hygBsGN8sGvDYYainioiQK9ozwtaQP3gcWbPHH6bd86YYVnsfiVr1gqJ",
  "key22": "2TLttD6f3U3scwhg4W7GkK1Ltmzhfmj3Mmo8GdbjpLa4W1wPMeYLbnHG8JGDBcYYCZMLqQ7AYwoc1xmXx6kRUUt5",
  "key23": "34oG6bkcUR9B9jx2r19PXRZv4wBFjppFLTNKRwcYcntnHsfz4vXCqSfmJLrcGPJP2PhKp1hfdu5ga1spbbBaFrs9",
  "key24": "3MmSNf8A6w7DSioyJkfAJJR7gzhuuX29SgzYqecSvHzv8VT494YKQevASnpqD9uHivqCh6Xfo9Jz4hd5QTX2S8s4",
  "key25": "32YqbAJM7pA19JpHxzSSCj13a2dTmyDFyGos2LPkf2xy8vN8JWg95ZFcwtvf2AfjZGDgaLEFxP4g5aH9jy6KKkSx",
  "key26": "49zt3Wy8T5WYMdW6g7AwRUqdM9EXZ84iu9SNEgkjPLjZWfVaPovDUs6XhR8J9iThtXz1N7swHTUPKZdpnXYfgjva",
  "key27": "NrLsysucSLZr9wJyyGcwapBWiUr4hurqNoh3K5XkJkw5d9Ck2V21JW9zqyTbQtVrX4h2UxxBfFc2MMrpGYEot65",
  "key28": "2jPCJUxG7hoxEmuNxUibWJNcqRMK9b6VcYFaH6PEUx7kJ4pfAxfbejPsG6qYoAWCE6tRaH29yxSFvQfovewNGs9G",
  "key29": "4W9jLVBzDurmuGL8Yxju34AAo1QYvQNUFL17C6cDzcUWZJuZ6rDCHc4bYEgygfPXHsMBR9a4esnR57wWJCMqvav5",
  "key30": "27bcZqAutuBwVTEuz9H4HDpzGn6QkoV23RQMztcKxQkxRBG3LvvYWkytuw7PthzeDua8EAWfMw5eMMbre7vu8XpE",
  "key31": "skpetm3viCqzhWyCLCChR8PiGQ9tecHUFCYndF6aSAQGoM79zBBCPFfx5y9Yxv8pVkhehiMXhNfaVZCEDJnYKMU",
  "key32": "4Jus9zka21RDxn6cucjN61ixT7vqj6PYFhwU26VpxqpJ8marZPnyaJjUDeS1Ykk11JdZk94dfzciBuvA8daVXMHV",
  "key33": "jFRSdNPAjRtkx947FoT1sqUMFQmajjdRiD8pmmH1pPEy2SZvvNdmxVs4wDcqpDLUuAMfzgqGocHvF9zvEPQr5hd",
  "key34": "2zfEfM2PZotdoPiapTEEURoMZVqXGRRvZoPZUvn1sxeWugPvFyRqzimUnrJwmvF29NMLZfjcB4vntva9H8PrEYCV",
  "key35": "k9WHShJJteYQm9jP4vZHkSUAftMewpLVk23grZaEmXnhs17BxgkFXLyfMMEowRVJFq6sur8wo7VLmFREC9Vp8Ly",
  "key36": "5coT6xZ2MCWLezq4yi8DyeZnnAfCfbLxxdF4TtJQRwLxjmjcjqSFQFbq4GSxZ9sXLXaTvHBs8HQGTSqUB4ZySwLW",
  "key37": "3P87P8fzEeBi3itiVYkmBZzXMg28EmzPbMk3Ke4yakgVbLBDZxQPBzrY6qDKsBPPkVyYAViQ9j4wreh8SQRniD4X",
  "key38": "48V5i2UfHSXYxuX4FZSXNfbxY5AXapWLBLzskTjeBkYW7wroB6WQqZqvDBSSYqi9U94bpAmfgdDtZ4r2jbwE1PsB",
  "key39": "34dAqt5FQHZz6SJ9ybqEkTxfWyHqKwk2Qd51oE5vQVmqtW58kmnJyDJGeksvSdDgxwywZhz7Z6xEGsfDCusKw2kb",
  "key40": "5hMtQc1dmSpS3DwLjhSAHrq2hWi1cRB9AvuHZgaGtNDDdRHB3f4T9uPDyzozYhaHmqdLhew5YCd6UaFVceQqbx1P",
  "key41": "yDSNTPEHTeuFxxUEbQLEhXa5uKFTg28KoUcg7XBDoifikfSF2kPyTHFEK1EFJZLzgsraDSUSWhv5rQBuqTHBL6D",
  "key42": "5VBpcWvuYgK6GunbCFAW9mFWTqYrDMoxU7n1HPkCTUzCq3i3is7HApZYNRHgaj9WsJmJoGE3b3ntq5ChfGcPZDEh",
  "key43": "3Xdcoeeq9zU7MC8yXgKR9xT7yzxZXmVAtGgjfZrSYqThoC863soaAQNWM4BbPQcmSJ3z4V6TwtHBrM6JjPDHHC8p",
  "key44": "3xQY7adpefANYMJtpEGNesQYqhMkKEDA4UP4KFGXgbiMnyaNcwQRPqywGxSU7zyLwMP99rXTtGFBch68YsU6jfYy",
  "key45": "5bqKdAywaQuoqpGDmdDe4sjZEG9GdKXFwSywZVUgjRenw5VzdSJQDRpwJygTBjbvFoZEPeKbSneiDuyb4BQQN1Hg",
  "key46": "4Zmnm6JVoMN5XagbhkEbFEb5Qcz4pDJ1nBDqQH8FKD3SwQYc3GB52Rjhn9vwNGfi1XNzxa377tQEQe2n8q78LsFG",
  "key47": "2w5tjgMDFrFnJWC8FabKh5ruSa9fnkxrfffMsAGwUdDAejUiMtqo68vyf9oxCyRyH2YrC97EgUzdbQZCwcbE164Y",
  "key48": "bxehxtUXBC5HVLQUdzx7My3TzDiN7ZgsXZLX4xhBYNNunFzGaWmT7mU7PKykadmjgTNaisFbdK1yMiXFpJMgv1u",
  "key49": "5YA5Jqm1jquK9nf4XzW8qcQJwdampm74T8ybEjxxNozM94w4w4cHLYcVBWVik779abMCBPMJThWZSKkVP8Mw46dN"
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
