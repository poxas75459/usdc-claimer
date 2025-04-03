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
    "3tJdjTcM9NvYvpkFvi2r2xcgem1K889iYy9BdgxttFuJ1i729sSbGhtm95KtSbj8TgmLZL4uE8MPE7MduF5XyEH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUEWPeat5Dy6KgfPu7LU9iYkqDhBvBsMzUGfv9SkqmdbEufoTNScp5HDgXEYi4e7g48PdyWD6xjhLxUUeYRzKpp",
  "key1": "4vnm8JkhubXFsPaBb1MypMZXMn8dPeKtNzt3XzFwFZBReN9xsGmw5maNrRHDg6aEGDeSmsuoSL4P9j1gAw4JpDYq",
  "key2": "PuphxgAXR1pV1FX9Fq4maexUGdyfvkELFKgqcVBr7kuLp28v2Fs5yp3s4acUYDS4u1TgKRAXtDKoVANmeEwzy3r",
  "key3": "5h1XtrGwuA42XeKdtkXHab93HpY7iupMLpfvHb8468FDn5x5gF767HWU69kYZ8qqzoCxekNF82QGLZ163kfAReB",
  "key4": "5dbDJoPV8mb2cQfRXQvKYFcGqc9vinbzVL7AhLfegrDMohb9z8obR6b9Lcwio2xYrVVWDGcczf6Z3ZJKDDspAUWj",
  "key5": "pSceeBfaq254aeRBHjxt1SqKYwNPkKv8NzC4Ttm8kkA2dK36eTrGdgMSANMSr1weYnvVjkLrC9oyc7ip1qCM1nD",
  "key6": "7vPnDBVLuW21u8edfwYQVbi1QqweX5G2CKinzFxMniDkBu84ukYtvfU6zbX2hYr6LQqYsLtAvbyHT8GVNwFdUWq",
  "key7": "3mmy3mVyzbYPCswZoDQ1QMSrrBLH7X3MB4iFKk9nuaHSHYx1Es6cqnei4FNqbWdRU3t1gLbTsfLmyJLoYq6e86hC",
  "key8": "3t6iNRBu4K8VEKhqNkkfBAiEsNvwNeKgSAhiM4u57siLfACQTMJTZ7EAvdffsdaLFdivTW476hGQNa6CwumWKT5i",
  "key9": "2J6S3vJH15VSJSQvMSpxTMq7xkxix8ejLkngU1G5e2aZAqASsX3k51t57hhmephzCJtfofXmVrGLyE5YrLk6uywC",
  "key10": "S9MqXN5DQG1mYRENDDnM8Pu3E7jer9pUpYQvpPTNn7a4DAvT84RHN5bffbLmC9RkC9Zr9qZuCmuzK7y7P7NGCPg",
  "key11": "4zrJsLratkMpiGcBaa8vNyZu8eFwTNmjYo27XtrxD3CHDXN9zoR9ghYddZKp7x2S6aQL2KPW2HPBwbtZcyAYKuz1",
  "key12": "fRybbbE96Gv17oydB44Z77SzRMw2Mdxj9A77MXR612mr1Vb4DYETcx2ZFK1hgaMLmVn82QF973hn1v5TgLhUzgK",
  "key13": "2CnmbDVEPS9wzNEqU2jvkSWYCgqSmkdnM1BYGS2coPAHEzDTJv1Z5dHdTzkcnJsWZS97Ys4nXC1uZ7GqDZwFMBqK",
  "key14": "4monGMEYzNwaHgRhGS9ddQQHct7tT3VQwsJRPRsyLDWSfv6vC5DsVNcyS1fkvFixAhNB3JL3eTwujdNSs1eCajUb",
  "key15": "4pyLf9UrKR7LDupnZEim92SdgyWKYGA7vx3tMLe53PU892w32JYB2Cps2v4fBVVTCeEgbSNqRPjpWoGCLwDni2dS",
  "key16": "4ZziqHg5ey7nXTdnFeZeWbJ3XtpnnJ15m46dnMtSGX2pkcNxhmbEqw883hrdF3Jg1ziYpBhtpa9PoqmbPoBMNkUb",
  "key17": "4KSrmf3q6BvX7a32UzahUWgck52PwgthEArdG7F5pSHb66w592aDXM9C8KpoMubtP8WpTF5ggXk3qWBwM9RnEa5V",
  "key18": "tuWkWNuAV5duryq69EtKUoiZEJJU6utkHhS3eUoBks9evWUJxnwR9sM3mHghxp7D62tAzUXe2uYwSKDQSq2xmsL",
  "key19": "2yGBmxDxKxvV262FnBdyXsnPc7g1Czp86XY1R6ZEm3n22RjWn27zH8hkhJFjsJ6zrJQWFZauTLm3WzXiSzVxxrSw",
  "key20": "3nRXVYB4VwsM6EzXckffjeogXGKZ8jmyKU8AdrnxcNWLUoeVRGWjfPLgnsPVGQtZLix23Td4LHkBQ2yTz2eMCCdR",
  "key21": "5PjZn3Dep8UXBjyc5JxqmvV1emhNuR638DCjKLvpC3CNVirhxscDsd75shrNZXaof9q5QuXuzrfmRTz7d2vZqUQT",
  "key22": "4urUtsAoS7jovbNR8eTDkXcznaNsEzMC3M6CYzqEYU5Zg8XEXFvsDazr4wrveGGjaaFXj72c35RfDjH2mSemfszL",
  "key23": "5EfBb7EPrart37bpL8qsAYqhmcD5oamKq286k7dQzrP5KbC4NjLPQZGqMS2an2fysJ38x5NbFRPuLn2CJQ7KxGSq",
  "key24": "4PKKphXLPvWSTPgGszTaQ4y3CVqJtQxwyFZCze8SzoLrUHyccAP16NjBA5DdFyRQSdUsANuPZsw87s3XcDsGmBPR",
  "key25": "zJ6fQfHGwqF7w3jLncNQUae5ESCWReMafJFtTPuyipDFF84EVdBNbekk5QW7SaQW5dqmxUBsE4gFoi2oBFgj7Rf",
  "key26": "2FMhcFnrESPEYSou9GE8BaH69KHKbQQTRhzpbTSZDu9TjjkZR7aAwTqufXHXsRdRSjgJwNxQeBorXL4D9HfasD5r",
  "key27": "5Vd7djjuadMUs7j72h8jZJPEEXVPMi8et9h5dPECC3ErMeedbLQUF8H3YpyRZtCjFjAFaukQk6eRWkLLK1Q1BhSy",
  "key28": "4CH9uo8HVE6onkZeuXLVVfjPEuvrSakbw3sFXbv9zXaQKveGCpryYpiZYBQXK41zgSepptbRBaeZ94BEGpjy32HH",
  "key29": "g4havbHxy7tmg9ZNzYrDUgCMdGUJRKA99FonwNDDKAGwKuwbCrDzhKkmNiCqbhZ6WN6St2NNMwboVvZTaV1au8y",
  "key30": "2BFAeEtUFJKWFd8eddGFkRZ1s5cHoswEZDXkL2CJpZSWX22g6iHrPN7Egt7FFdYsiHjiLzBhsY9RfaiAwrWf7me3",
  "key31": "CcyN4jqiZzZkC9YLCCNBCcbZtDzKG469wZ8qfZVrjAareEKUxVxfHzXp8XReW6UKojTZioKDyBjoUWQt2uLKiut",
  "key32": "4KbK9kn1Ktdg4pvYKRMb38Cd7E8AYon6ALLpS3q4USEMpw7xL1qmpBWu9X79yFA6qtWQCXMvy4rRohfweWT5gXBw",
  "key33": "5Bgm2q3M1YCK2WHX1dDaCwK1hNKGswmAcJMeCnJqRzXPAsgSrHSPSLNuAFjJuE88MHxshE9KtFPP2BrtfTJMSVbM",
  "key34": "56G5iHgWgPXvpqkZmav2P3NVUK3YN6tCfypjtEt7Yt2ZLNsutJxaD4NEdM9xinfbNPRFigLh6Xy1Y73EdQXWYimP",
  "key35": "2XiW2ABi9UxeEzmE5RF3VhRtsjkgDmuwkMLos1UG4H1S1HAA4pQYHEy6bZYE3ydsexn5qm9GbvqqxRd6ErW3rpHK",
  "key36": "2vrdEuFto4CDzzvCu4yhHYjvnDhMzDRN7VVJUa1gKMWb6Xiisqai7PVErDqizFNLcST8p8ini6ThHfMHqvccwgSF",
  "key37": "mX8irVgfArHpzC9yAffBfwmfpNSvX443dz89DSxHKHzLi5XSD9NpEwPuTaXfmt4YaWxuCfzqK3ankUt1u3M6gKK",
  "key38": "41mr43gYPkT8VncxxTf9A4xB23MVza8hCYpQTnv7oL2hWJbxU2jTF5JLL6QNgk1X9BCCjUyZm7UDpajhHAurQGLC",
  "key39": "4kWQBxVjBiQN3rT4Hcg8x17bC8RHhjFQn3zL3mdbbaZ75ZMuCjJx7a1AXREJyQBULydzA2VxcAbWe6LmESchXwuw",
  "key40": "BJq9g8gTCfW2LmGaMEUdkvRkZ2Vn1CeG84JXM2FDHBE8pE3gb3CetVArpAQCTnxW6MEwZfudm7krjzJCXe4E3qR",
  "key41": "3zsPRgvLLEA1xYAVJFxFyZZKepeewGASJyy5vLPdYLUtcx4o4iCRho7HGR2FzzpRSC7y54BA86FbhVT1aKMQSwr7",
  "key42": "2V4CWZe64euM3YXyMqFyrXYgHCr5oaMUZD1QrXdtaXcpxCCiTW7AzpzsH8nzSCPA6UDriwPTkVargp9rp8w3cEBe",
  "key43": "4LSAYmj3RR8agGXJy8ZRYW7D3rpdhuCn4pVz87gzLmjUVLJVP3Kfd14HF76toEQ5kfh7fKDgBNGon1a8cv5q75UF",
  "key44": "grZqHEsNjmxkoc1Q48R7LyheDRXaMaW8Am9yVqyDp6rftFT8b2tYicPnyhZWBjXRBfz3UKpVu1tgvxL6Aqmx6wY",
  "key45": "3rnzgRTKk49vY1mQCFwJJzdraTszBHjdRfs7YWGkppm2i4kmLhvDzQgRFxrwuuJYGNbiWEQWDVFz6S95oYpUMHX1",
  "key46": "2rTQZGDBaj9RFwkdmQ8PnT4Vgf54xBb8ToayBbhtt5QZLtXtgiUou91DYh9ChgW6dba9GWQLbjjeL65G6vvPbEN8",
  "key47": "2rTFc2PNcv4Z8vMmF1SbM5rdxndeftw1QCgfvkZb64gTKoYgB1o4x7wLjAVXBhAvZUbcnAfQBXKcSbnS79DhazKj",
  "key48": "5LiGt166AQ4QRqeUV7QY45UjY3zWwELBpVEA2EsDkC9vqwLFjHEF7TsbvXBRo1Jp9vpmzPzhJuxg55XeWQJVwdGM",
  "key49": "2f1gRFgSqdY1bwKTSua8gK6ikjjhYR5iP2342s8RY26uLLfDPEmTAGMTmDKnFu9MuGNKGkaGFGSByX1w8uyYLa3T"
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
