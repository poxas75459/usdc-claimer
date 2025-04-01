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
    "wQEYwp9CpoCUcysyvQjUE91oSo4WnCZbTRiF9Mj61rmwrZjdsmK5fCQV3AjEhsKtkFuP9sMGhQ1gAEhiHxL6PYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nDb526WQMyKusvaYhxuKAKki8DzPrCYq5mqrWkq1zsPc9oRyQukfzyTm7wSnP4KzGE2yY8b8B6CJSLmD9M9x9nD",
  "key1": "4GJyaNqm3y72XnBjYdgg6BomKKaqtRfmDLWc3Y1jBXSDvhAAvq12HLmLwZJo3dhcHx1JUDsPb1awSVHbQSwh7hiQ",
  "key2": "3yBb3dqB4zZ9SEkQXVx5BVm2MbVWwRXthJn2hC1QzfaYCirRBPcDjS2rckJwbFyCC2vHQ5d8hp5CUvAnYVka6X2E",
  "key3": "291kXhPaJkxFg7qGE2sXQvcKd1fuyo4qvAynJ8zni7bitbdaijSUHjmRHuPsxCndy6CUSgK4J3hdJ8CDKcNQmaWx",
  "key4": "4T7ujR9DFfWhNHVnDk9A6FfpqWPPnwB9GKE8cSrCUt9Z1WFtZ6mjzWfx2WwjCAoqDQoBMjs3PubEmFVFrYk3U7ds",
  "key5": "yUWgqJF8HVkW98fjtBeM7RLyZKXs3pAXvRaRaDAAZkc3NRCL8YsP8CPNADqzQABSUka4XBKnENLBsLfCML9Kks1",
  "key6": "2pgMWJVkvVTvMwcqJjgijShAjLivxMKh7QeQsfgQY3AnDSw8VEyFEvLiQxqu9G4EKgnHoaUKbMf7mSMwbsP9rJRK",
  "key7": "5PBvQ5GfHDXbsMN2ufNQthYiqoLBbbgbRK9PrHiVajV99quyswuDgRbNP9k3CKiRMWUHgWzsUDf5rbJfaDWWP1mk",
  "key8": "2BNrqE5TYPKV4zb1abQUvqFpPoKnYSyGRKezLnQ2vx3tHr18cZ8xySGeRuYneJ1aRLLVVpnv3Cb1utmhatGrVYuY",
  "key9": "3oAHXqwM5vhKdJHqm5RoQeuVe7x1z4qU67UbypWYwWYef26hg3zdNawLYja6R4LigHHHMyKLd3ePAcnuiEWuakGd",
  "key10": "3Aq4kDjk3VKEanKgLEXeQLV5pgfFHoQkkr8fei6NNDde45CXh6KYWraTApr6eKpdshTKPYtaRVKPbVYyb8ifreLR",
  "key11": "2WiRdzjupkaWbqwtvwj9BVHTkp4j8wWdpLz3zGNKEEoyPj3UXt4nvKpkN57V5PFBxvHnLD9FyjBfxyZZizht5TWE",
  "key12": "5P6a1UdLmY253X1bayLQNg9VwJoSW2nCnjkY8XpdddpCtB71eBJNWhwHbwUqinqG4PpZBUYMYv4mvvMVcLLPEhmX",
  "key13": "2VeU6gPcZcm178kJCSQJx1QbgfG5HAgiAE7m2xL8yYq8rjMXJTgDYptZYwof9iNEZjL1P629XNwAWyjXYWvFCxog",
  "key14": "5Mf6TWqUVC3FDLgYvw5vAiV82i7hefsPDUXi4JwnszST68XVuULwYoBUNZjcvcKPLPHpQQWUeqceX4CMeurw72d4",
  "key15": "4KAH2GdEkg5WoCgTCrr3qJBxPwiifzPupWh6ghvBKiSnLAQzWrYaVEpiEuxDxprnoNR3Pu9GGtCTjtEJZa7WUcLC",
  "key16": "444GaSc8Pw7eNjQLQ4hvyZdXNVvjGK7HZsKfmey3bGBjijnxd6L5Bps64gGKEPhYp1DJaZEQ55qUVviiJueCj5xb",
  "key17": "4cCTCo9sJpjAh839qz8sSpU9MXqaXuL7jR3JA6H1xShyBFK83w1o1LTxArFJtFpWJzeHVGxSogqsxShv1uuCXGFM",
  "key18": "3LHVsdeyViqibqJrjAeePoRoxfwKo2NuSyChg3jYBLTKPLBXfXgVciEZR9fWvNctSp5khFoe2hMvynMxgKnRXC7x",
  "key19": "5ueJxTaCBB4EGmwQ6Tzw1acaH9fHRmj3GVKQMtb186FAAWkBJKPzkR42eoNjgqkiPhrwUsLqu7XN6qazueXy6no7",
  "key20": "3b4LksWnGcLJANfVTt1AvgHpAYosrpaWEvTd7PoYqoeJtW8pFoL4CsJ7ABz9aJhEa2g49jwehXRKL7NixSbqwox5",
  "key21": "2U8R2poTR1aJoAT44Cq2BiFs87U5veeVUTWKxW3jy9QHGcFeqSqoDjLCofu75QF99WiqLeo9nsUi1SmDDd3CPHad",
  "key22": "2rdaJ7veYMHtq4cinrevhErXQPdgo8qzzVph8GyVAJWRar3vzp5FbYBEiZjVVSnkHAzsa9SbkAisXYpmGoZ5sgTo",
  "key23": "28YGaEfNPjym4MhUYmYZXDTRKZTSBX5ehFvaqhocRhT4NWr5K4YySucyYMEWRYBYdk2B2uAD4Y9cVjMxUNzNwSYf",
  "key24": "2Eoa8DqTwZ5g71z6SaHoxp9tF67C6F8jw3FH7Tu2q735Nh99Zt1ujxCkC4xRY6G4rGvQti3NE2fg6XvsE5HRPd6P",
  "key25": "Mx719hZyPhvZ54zcc4YVrcrnGXqzvJ8nYTR629KEuBKFaA68HSRVwVTvfmC7R8P1EefKCkh9EyNcDLT2o9ShiJE",
  "key26": "K5AG7o4vB15UjtKw1ndEECwEiNf8GPTaX96yKqsbULxePxLrkutj6E6e4n6GqPb614s51vDPzqx7Sx2nsnES5dk",
  "key27": "5bVV7SwctJKGv4q1P9C1pC1hfXfBparveuz8h17zZ7RnkaogD765ccu6W5Pok7WbcATQsUEDSdLUY8CPmVGQRFPK",
  "key28": "AV4A6xgJWQXodLqYDEJzThAX733Y3VR3NcTtqMdSJzGQHbeiDEz3CaKzwdu9f1xZxwFYCHdgU1vimUrcekx7yCu",
  "key29": "5GwFTZLSe89AyEBXKfkkUuUBU3QMkisFfpmqDjveJRvGRsR8xGdH6GmqMXkLaZqTUDfUcAAgsjZ2AS9h5xnAnVzd",
  "key30": "39A6rdCwKABfaa2cLfEJR5rABNRr5KY28PSLbdPz4YcRWp7k71ETeamKKiJXUijAq6satQTnuzCYsUvxkERELXzr",
  "key31": "3xu5SopAKtdSpBWEWjNhPZzFzTeNY3FbHaJV65YcfTSFVxrmcWqZFqZD1KVNa8f3d29hoUuYAvu8VF6wDBGofnwq",
  "key32": "5v8gy6EBUiS8vtvR69rtAZdkDvAAzXxC4dV141xRZxiyGkvCp6dFgaCi88N9xbM1cMtrT4ZdNEvnkpGJ4o9p6vxN",
  "key33": "5FHWhhv4n82Xp5G9uvmeszyEMePMKSif28APrHa95ijLn5Fn4CvQQLKxLdjYmRR2GZNa1zsyD395TjraDRis4xtX",
  "key34": "3eqi51knDH9A2w9AjXQZ3y1jKN6tNMfQtTrNUjeFCPR9iznKQf2jiT2wkcaUsVLSeaaqTayLLa41zAkSmUtac7qy",
  "key35": "5UVXpcKaWjuPbgGDDq4no4M3nvwvqwZM6SQChX2gvx32nSQXy2kHsCWVjHZLkNME2jt77Su4FJdTLLKKVFxE6GxT",
  "key36": "4mSFgp7Vifsb2Fs4KnY2A8VgprURk1wFPvZXTQAvnXuHiBZjznt9X264k8Y1aodFgKxu14o6fkqxDfami5gTjYxx",
  "key37": "3qET8frYH6vkiYbmPCsXYBTVbAiuDFjUEDd3cNxB56vF6GY5n6ia97dSFczJLgwFfajtnS9MYdMhyTBrN2Diz5tF",
  "key38": "52LWfNSk4dYqnD95eoT7ebefa5RxM6rZ4QiWSLNChPxjKvAF1MYavGKqkpuaEJdDz423pCJ2TiPBMvunJm2rfRET",
  "key39": "44y9Gzu82MhqJSriFrM6vedJk7xcrhs3TY3c3pNor4WC9N4nNhLUwQ6t46WWN41wFQufaWztbWHSYLNu3hd1ebc5",
  "key40": "2LLBYcMGkDycBKxAasFc1JCatCgK8c4Db59s4gysWZprtrnExeTAHDmGT1rSqRqkK4PpjfjeNk8oZb6EwWz94AHb",
  "key41": "eaBN2vXitPA4rasefvq2iKsppKHQKne6YXD6yMvHKgQCGM9cTWaYbfAmZgCezy2GJgywKtTsPn3M9BADJjoZrd6",
  "key42": "64jpyT3UKFGRTceHbi6eXvFhZBuLWkT8MfE8gYfXdZqEXos1zvLPxZS7TrfPXLdJvvG8SpZwvyMLs1Tss1716cjK",
  "key43": "4oQSDqGgRAP29C2BjspUocG1SGnCPFBMRQWSa42sapHvKXS5fL2J5J3zRvPizRZbZTM4XH22FsScm4JDasMfDDXq",
  "key44": "4GktGuXVhJ8iLaLSmtL7BZUN9YGhm8GbmWWmp83CrTCFmxQAm2tQLGif5juPcm7sChnQwJtcy7AB4XnhixPM5p5T",
  "key45": "MyZgNs9oWHibTLrYm2BgxityXcMn4iXrBbV7EjMBvembf3mdJe4iqbrBteX3BtW14AZAjcaYTwsi5SmewxVn1x5",
  "key46": "297SnAoe21wLiAqAcNcnMzTNF8FTjfiYK9HDr98wKGXkT9ZKjfzVqZX37UBakyhahkKJ32LX8q19mcv3ytcsSQgY",
  "key47": "TMiszAGqQCmgTvqA3PJ6LitWEppDM4oMMeBuxFWPviKJZvQbyayoBeC2tUd7fexAoVoocWHtRHZQDX41x3sUWMs",
  "key48": "3cshX5BayrzYJsSm45DdL65G8GU8EGQQuEPreiMUuFvp72pVNWp3Be1bYiuzewYjXco2AxhyyWN27Q7u4y55r1bL"
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
