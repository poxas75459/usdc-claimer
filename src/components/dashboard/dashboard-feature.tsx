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
    "37aJB3rWNHJpjWDBYKN1qVJZdpUNLnqmL1kBgEsm1mXTvsL1qi2ceayrF8W61BW32hht7VYm3bpKy2cYhRA1joRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1S3gD1ohfSXyLmU3gFtThxa9weRhM9GhhZQZY356z1t1ysp7eRe6mddTxXnok5P2Q4VTccN63MKhmmmMiBCKfx",
  "key1": "25Kc2QTBZGjpEEXGnAf8dbFtSRiCQdqCPc8C3HL32YoqMcUZV2xMT2sEuUugs8tgdo5AySQfccxh6pi53srUdNNL",
  "key2": "5uXCa5fGZuN67gAVFR9otNotRtjm1HSNRcf8X1KX6YnpQeVbU15y1Rus52GwawL3iKxsdfDTMqsCVG1mSj4LchM5",
  "key3": "4h85ovBf8XBX43o9XS1Pkso5LtMxxhVX2tZNc8EJrRYrbiFRzW4215cDgjCQigMK2kzSgMWowmXNTLpbNVzX8hzR",
  "key4": "5wR5mQMD7vv5GB7Zi4WJqEAuB5fVkuZbXRmcHKEYxRLuwZuU19oNbxHKA7Q2aj55KBVxrfhqgmSReHqyGvvs2WoV",
  "key5": "3bB4wPYGj7bKerZkwrfMQQZXKH3faAMC2HnJ1E41thoQZphMLJR7PmfzYi9Vy4DUcTtuUy44EijGwAq3yYf5FjyT",
  "key6": "4ZaG27JTJZYR1oL7qgZnXjLN4n8BHqxqxzGr8AfUTwn2TwJgdMirSneoRG1CfEeqyVuzSAR3qUefPS3FPrZZbUga",
  "key7": "5sBvSsPiyfTHTphGu5zR5gAMKfwLu86ofyorN6cBU7Pr65qUk1DfLp19hvQBsfoTX7iPzVfYAFVnHWHRakBKqkue",
  "key8": "5HtrAgkkEpJNuB2nrrHC8qGs7NMpgJSe4E8EnwG6DrYrJ5GpHSBR8K13igoZ9t9XmfegMimYQ1YrRWEGmAgPSnXJ",
  "key9": "5wEDKvLKR3ypj1GvLU9S6kmo5bekpbScLNgDKM1CZSrnwembCUM65AkjdYNDGQMdDVLEpy3ofcCfvCczg5vR1bt2",
  "key10": "a8tqoHdjfFEGPLX1HehDfsTkRyEShoGay8LP199AjWW1ukdyBv6oPHpeMDCqUjenG1Hv3tQoxLdyX8EE3uHEPic",
  "key11": "52LjzgJdRSQk3DofTsAP1CkmQY3iHmWhrtq4QuZqpJfyYMtJ1gXHWQqaGks9q9XvjS1nqAiX4e6cWzGedSc4Tses",
  "key12": "4Dnn2dsjtxsK1w7W2RND6P3meQeCHrW4NGZ56kriPDLtKYJVMbwqppGv6X4VfYQKhvnJdyNKZUhceNPvrbwwHByJ",
  "key13": "2cqHV25trGvpQDMahh8toCLRfuVtgTvjGrbrmMo5oRtU4Ka5ngvFv1V55qb8whqBYLyk7fFDcFcCwgDk7KwP29tX",
  "key14": "5JCvQ4yqnfAtPJQt9xKVaUmFcViaxg4eHubakZXc6VXa9RjR75DssbHm9dXoit4p9tkK4bEFNDrxqDkioaU8hxC1",
  "key15": "4jmN8v2PGJpVzaRKhSWSJFH8eY4fLz5ARHqtMegcK2C6Jo7KsUeEj7hrcszMhcFv2xKAEvQtNH3ZVnKXubKxqeH5",
  "key16": "2wVtdZiP7YHT3u5q2swZi3NmXjifiHj5QZCi5yM1NDSxwra5HF9ia7qqvpWTgEWL16mSYTYYYVwJbKKrHL7yng41",
  "key17": "5KVdd55X3gZA1nn5u8ijZVXvmZLfZ4bKmd3cm3nBA1YTMHcqNbLcEFRv7ywMgcyrx79HiGYYCsk9Wr9EoP2tx9dF",
  "key18": "2trCdRPPqCDFgSPzcavLs4C8NbwfeBf2zxNTFgTJFzeCzG212dA2YgB7gYqPo65Y8JrAVPiS79dcc91D3GZnnN7f",
  "key19": "5rDZgVz1G8PdUHJkZqcEEdqXYtJ4zr7zqEcHgXyWy1QY3eeeb1CY1Gs4CneaDV1HZRPT6WvDizpfw5e8xnARVfgs",
  "key20": "4Xvj1z33qHDNRtRG2d2Mkk55APQMt9MDQZQ3tgMWVTo7duskm9K4jjwgMUJpC3PiLk3L7ZS3JzAmXBipbiQ5TAY5",
  "key21": "4D1U6xvPEbGFHw62Bck8f4qPTXRbY88A5BNw5uQD1HgXEtpGtew2TZF8WKupd3DB1r7dWGxZaxVjZ3xV6A3tiNV",
  "key22": "44gfTcau4XfxbzVzpzcRSbVvZyJt1EgaGAcN6uNTZ6AppUajYBUqSCow4LKgbyiC2tKqsyB1NWvP5YmRmP5eaHYe",
  "key23": "ZoYF2JApwgSwJKkGpwyY6NquiwqeaBvRNjmZnLCSjafVpcPMGHJ8KVHmya7d18F3bYCVZab8v3J8qqN43aNeJXD",
  "key24": "3XsdHfRa1jRKkyfbC24YJ7pN95w7jS69givEmsh89h29WzDJUGV6E6YoexiT3r2Fw5jzB6pdT9JRNfzMmpuHhUru",
  "key25": "66ac8vZSBpWTGD5xNSA3msCftLAM7XHtKNSi7NkNH3eTKJsdekUG6asdyQWXPwvhGtUTqB2ogFE9QECtsgJTciy3",
  "key26": "2ewvd5paU27vJyJJE1ZPVD1iN644ii1viHqVFKdPfiofWL1MgWY5SF9GQZCFrb5936Vcevf9Tdr3iM5rjLB8kMJz",
  "key27": "3Y3Q4TDuRmemGELNAv7Pty4CAV3L8Ukq9wjQ1BdmQFaamPCgKhYuPXY8cGZiQ82WT7uTWb5dk36K2KFHDXZkZ9Zt",
  "key28": "22Xqe7uPybPMpuokgNyFbhSy8ayKv9nZKB8RLPT7hTWiBVPu3rSKMzwKjU8wFtofh2MxMtM67KjHxKcT375y8FSH",
  "key29": "3H6rC3eRRc9RjSjph5XiAxWMz1q3AtsNEaaCGkHS6N18ypm7khwVPnopG1imLY33CnLVj1oq4jUEygtZo3ycdFt",
  "key30": "3LmrinHt5DvYH4nFk7YVQouqP5RAX1JMYFMdKs5WVzTFJjcScPidajzRApDiw63WUu6cztyCApGtShdYP5WpZnmc",
  "key31": "3qS6Re87PAtBP8HjxtEhjzWRpV7dC17tE6VaYVnWdfzM3J7vkH3vrcx9Nhcidaec5eSbwgiM1HajZTg2DRbonAEN",
  "key32": "5DRkKXmx1TybFuBG1QQiqrDNQzYjsJte5dkhfR1av4Rhfkeq76s9cr61YrsAvQZhvkWxS6CAMKP3auExcXWKo5h5",
  "key33": "4XRBfNkQYDFkkFnn4BSWKsCUhvwLJEtFpMj5nB9Giu8Brupip8q8kDKcRyUDpvNKsmhb3NYbWDTVMdosUnmQgQwK",
  "key34": "38ShxnpoPHAy1Yv5kdKg1b8gFkZRu4oLv8cKxMpU1aZmBPtQ5Fan6c95Cf1LycczStCnzbZyAurjcokBSgkgj7bQ",
  "key35": "4PWNY3sZ2f9ZWN9mXbTKT6RiNzbYTPRbAQMNMwJPRS3ThVyfx5mUorXyxsE2AxedpPPudEjTQi6qqJSCGdySDHvX",
  "key36": "62AiAxi8yq3gruKyZw1BoLYy69iJkBREBSSX3mppq4gc9JKkd2N2xD5XRewqrTr31LTzpMsAmcz4Q46bfYqaXMWb",
  "key37": "4oPorPXs6SV3GMxaZKRevAF9YJYzjihHNfAWQddaSB1xX9u7EN9antkXfMbx8GCx23Ae35dq1h3zKyxaDhbcQ1zh",
  "key38": "3ViAf3gkaaTY17SFjiyS4QjUFAjU986JBfoxHu51ZNcw39oQqQ2mwXCZzGJR6vypphmZyrn216bXVoSwirxorQ1w",
  "key39": "259dnVQ27LAyQXW21XwPgSTwMGwRGYVFvtotZcobbK2W1C31cVkvyqLS2rMC6kFMspmjWr5RjrFcdJah1y4rpqjb",
  "key40": "5gP87KK921rK7SjifkG67wbGyVBvNGZ65d6rWLoRRMkEiYWBJGCK4DxSDWh23L9rCJbLk4UZnEZHAB1b8suUsG1u",
  "key41": "568sYbtEEsELobuyo4nWmRypCSfGbCp34u4bEz1yAiWYU6RR4VRqPZqBnqH15BqQWh83F2g2qY9KZ7JFwTjdQqUj",
  "key42": "Fdw1ZXujzXj33tf8i6Cdkx1NtjK4jb3KV1DWeSfjQANZq1nhVM5Z4a4ByuPCnrfMrGFrHbZLan68PsbpEmogotr",
  "key43": "22PfQVUj8hQocEUXZXiSPMJaFFtsvsz4pGTCed7knioyMA4DLHnQo14ysGfbKWsrUYv3bxdzh4ymbtqm5pFUL2f8",
  "key44": "291KVwcxoiGgFMLqUYRsEGp7ttice7X2Qphqo3ijRsJHDijBtc4f3dT9Jap63GKGcpk2BfpMkiB6hCo839H7bGN7",
  "key45": "3SxGLsQpuRup63s4ysLg91MeWvYFRJZ2pPUbZe5eu2X3j1EUwbz1WJj2gRnGQXPSv45goqkkS6hKnaqq49ShrXfp",
  "key46": "2AZEKsarnSqMPWCzfkrCZ8JddFaEWv53ohe282HVDcpekB6XZs36N31dmeiZqZngN7v99pHGoZxW1Zz2EypXhM3x",
  "key47": "2xidZT5w7wjeCxoiHwJ4khN1XcRBrisqjnL3hdLSsbhzXNvwR59CcRVfA1h9PsRv3ivGz8PXxD1utwZWNgRtT1Jw"
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
