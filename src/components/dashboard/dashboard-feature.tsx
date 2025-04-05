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
    "3t1yBhGZz3a7dMN52hK9Mrc2xjhZmms9Y4fExQo7Kb5DckLgdyVNtSRbTnGcYZv2DW6bSWkjVBgQ8MqjoET1CL5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HxfBvXGJa9r3KBpdNHHzqFDbKz25ZfuHF8zxBLrTffB56kvQdYBMZEiPMzfxbK8K5A2Kptjm4ta9z3mqMdevtfc",
  "key1": "2zMLdraa2U11XRADFZhzwqtQMGpeNxkDuU8wBYb7giqDPMPxNuQnWj46Ecu3tfy3nrPvMwWNg8aa8CvJh6wGY6M1",
  "key2": "4UMR3h5jAHp4H8raUHLoTnfbALRg4bPKHEdH8449MYQPaTZSzqPAFqVo2rXHuza6QANwKpVKxbj4ftRPQ5UNjDj2",
  "key3": "44T3pNWzND9cKWUhR2naZKtTdwbeAQf3KxivHQKq96UuF5DRydY6peYKMVJfihgAwGbpk8x5T8eEMGTze4GbYSxA",
  "key4": "5RMXsXtXGcs3KhJocVcwPwwXT2vnmXQeG61wN6RiTjxv83jREUaWnTTyvp6W7qBDK7SVGxGpwuWgheDyXECWM7yg",
  "key5": "4JJNFPrg2TV3g5BXsS7hSmuLjBUz6Xz7qQ7VZBaSJXFVxyjc3TWx2MGBx5fmWMaUqMsXJLMJw51yeNeHPmXnqtZr",
  "key6": "4MUv5LQEn42EkvZBieoU2N8iFFhcR45YE6pEhMSvcPXTZVgr3dWCBJBUvnjfCZQkMWXpT9g1EkiwW2iqqvEd1Mqn",
  "key7": "dtfTMmoD3Dt1D99EY5WgtJxD9BspiTXDT3BT3xkryFbnMXDQyqeScEtShHPydTfMEJNe1Miwhu5VXRnpbjtmR74",
  "key8": "32L4wZBcTYYiJWZ6vYAENEaad497YzCqcQFAiBqbv1J7hGcG4rVJazQzEe8URuFYjzRcYCTEH2VdSBXsBeYxwABN",
  "key9": "5go9Ljn1KmRFG5z5HoN2BANWQfdoeYheKgJT7VpnpYjVDdYbahACPB8S83BPRPkHdW6MSp89yhK5Hd4vo4jRh49B",
  "key10": "3zGjUP4iznafhCnZdmJwugq26BRn1RdSM3A9dm2dajrurhX2dcj5KaKPCnXS2xkx3RVHwemnrLS4QvzNNVxxtdmq",
  "key11": "5NHzEKMnmkiWKfdRD2iRAtfTQe3e8WUiV9NRSxFiTycMvCCgq7dLybwk9w5hmDRMu6yCX5wkpH674XaagmuXDPC1",
  "key12": "5YqnGWVbEt6LWXnJvpku3JcE6jis2cRGdRitXfcxH6drkhZUXbYx6QjRvENr1kG8wxcrNWtDt82NpzzL1UvXz3AG",
  "key13": "633UGutRQvgbhuUjGKxY1J58vy7te32z1tKhu55wg2674fdtmwbb7HW8guvEKtFUyyQFp5BeBafNHYP83HeXYPd4",
  "key14": "26hoj3GRfoZ3FDrzMDLMDtghphYuHLGcmNf6rJqC2bD3JofSQxvZxGSeJW3M467oX3DPvixHd2GgGGKJV3CkT441",
  "key15": "51pRr3o9s2E4gaKEHbTToa57ZT73tn1zXhJuAqfJWuTKhEwKQ114KJDKebSnvKskJNdEJi6FjFDKieB4fVcJTiyk",
  "key16": "3iLL8JKV32hcAbtRZGwG2cnUvxje7dbBitvZYZ9ubJ3vqpdjFgz3TaSwMjcRvNQ7bGsDf8eSTKwTg4cijDqZLgEp",
  "key17": "3Ht9MfbYFVdUsFMMUrqimCoUtSBY838gV1Mgfb4p6JuDmBG49uovj3QELXCZ8CMwQByWoZTUKt75yjNK1b4s369N",
  "key18": "2EonXnda94GuNExmBM6UgNeW7KuWFvKWc3dS5MQQhfYSmXmRGWcWCZVbwuJffwXchX29cfa13CD9x9sfqhQKVNw8",
  "key19": "2GhBzY1w1qt2VmM8apqRNqf5X1rGDELPrnZShiSQKmqQ53J59aDEohCnrw3anVdTKc76bum3nXxrYP3A8aLPxDnt",
  "key20": "itF2gZFSh4Bq7Ar1d2oGqqkCd1AXjnNHZh9fuMtWvJNn6ShcYBQkvaJo3ZqCD6AR7hBqmMzXL6kRiJfMkC22ceC",
  "key21": "4XcEA8zwsYsRpYxomqNCcNnMThF4Sb3P2pU6GWBsHG8hDHC8dgK3v2JbcacGzLFSYFvcsowofsqFx8KeMCUuuSrK",
  "key22": "mS3Hoqeo8cTs8Qmie3ckjvYJMzrgNSeog4qtXbeN48dWbZhyowXvABqAgCnoAF9GaUT7X6ydVPxWtKn2uc3ABpf",
  "key23": "36K9xYh8b9PKtBj7kW2iFcnT2wNb9wzAXJSGrXsb7GbujWabtBsuehictMRgCZsZCoBnk9Mfq9d5uNnm8HTCf6up",
  "key24": "27AQs8bwPaFuLUJVaeu9YekHPFkd2jhgSZ6Smy4GQnvh4Xq9dC8f22412CuvXbuSEGUMouiGJZ61BuBcJ2WbQFZY",
  "key25": "5nsjkoTL99LvopHEEDY6eP2PV5oRj4dXoa1Cri2kEYKtRrjfnFgejDLLD2ET7qUvuQ6maVz2AiMJFC6sbtFbWARA",
  "key26": "2g2H5znjnYrxr3gKXthWwssrr39m5WBzH9VfA9C6jKZbSzzrGLbC9iymMNUzXLXVDKizNKLU6HS7LVfuMvXnp4p5",
  "key27": "49sahFyryTdJmt1cdYi6XZwdFA3gk5XFHRaeJ11CBiVQ37Zwfj3ywp5QASuKcLZshYWaDJQeL2y7WvdSKnRGV8SC",
  "key28": "33Dp3M47HmtUWvaRqHPBevL571d4ZoBfnoqTfF98mhyftSzyAPcCiZYFhw1RyGzgPusHWc5gD21aqAC9xWY8n5fk",
  "key29": "4k3CHGo5Ym2Q7ukGJP8SdwXeGQF58UwAesq7ReGqQGbkQDyHw4UapzoT62FpwpphbcotcJbRnj3rG7VbE6MsJuR7",
  "key30": "sqaWqrcKJoKNYArGd6Vje1XJ7sVNB2VHYp5YqAFTP6zhRb9mE2HkwiJvk4yDHpBjJYMS27RdWWGEDX8Mg8TfYBf",
  "key31": "4bxYCqsbKpX39gQQ2vwfMsgVCVDRwA4hfGqC4zM5yTN5YmYe4hjDWtpackai5bMoCKTLdUEq8nZ4xTXEDZa65n5N",
  "key32": "2bEcpkVsqyRFRnMoa6o8bdHEiih1bf1qe2hQPgBMNn7C9awt8Lzdn2EZwANs182zhqz66cLMCFuDau6AJZ7vjjdC",
  "key33": "2urQorgLgDJeergakrEYe74f7c1BPLYzUZxQCMtA69tfyGu3e2vYFoqj2fbGJfSrxpxxxh4eRMNiztXCdXPKvCsc",
  "key34": "uCWnzRGrEQ13LfmKNEpwK73kBUaxnfGYDkUj38gXB3zXBmkEoXJ6otPw6Ej5K9h8ZSYpVBE6jagrymTj7dcyKbT",
  "key35": "4UqHJkt3q72omAEcJj9tcLnkjdoWmewt87Cc4i2Fi9y81ed4LubmPoMr73wreP7XzXedJfxqD5dFFkSqNzAXJjwq",
  "key36": "5khKYkVM9KJSdBxwesCcPtokT3LgRNEp8bx3ZfWe5QVG5k2akQX5dNczKsp9j2yvuo53GaCFgZoyY6xrTKJiBwa3"
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
