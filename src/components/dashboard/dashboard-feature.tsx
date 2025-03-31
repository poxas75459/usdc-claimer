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
    "FU6EMvcwxQyYMbx9bUUcT5vUiAAQ5XRsUzxGtCrHDti7jEEJeVtF4SFyGmJ8uCDr8MykUdmWhNjyvKymjKffg8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRHQrDiSLS1w34KqJnMxvbmN8CnGwVJzzRuqNWxTxDrCUNa5s4Ga3gpWwncyznaVQZkBv8ih8SBfewH7nrunNAS",
  "key1": "46CcCdypST3RrhUEQxjLF85g4YWX3faS81T6FVoxhuHv1vNo3EF2PDGq4RS3V5iSNCC4mvaMXLBmicF3pnKKSPft",
  "key2": "5k8Ds7fsUWckuRvJsbnk57BZVsDFQJE2boegh37dMQGZcLgvtQruKZPERdrrHFfkTrhyJpUUzgBcmgmvt5SDTQR5",
  "key3": "2rb4UEaFscCvdyoc7ZoYL3S5C8qJdxWug7HcYr2c3QVsGa4D8WyJzrdEXSUqGQWeXUKoAPyYQhN8J2w2cPe7a4oN",
  "key4": "u6vNHdiTbvnepduxFbZXw9A9ErpnVBXAW5Gzqh43xGCh5FhLLALgC6SDzY9JRZ6zs5b5KCvvPi9vFmby1VW8hMs",
  "key5": "3GhWWvP8iJVfrpWLVTpp9H9NZNmrMVszxjVkFgGkRtfV7DdYMmegSNh2RXgCkrv1AqACMUTYRVcNPjJ325MD5Zv",
  "key6": "4RZiCARQ4LDDFK85BPkcRSeFKbEP8qyqJjJ6B7LtFT2pE9YQi8cYSPLpP8yVEvrvyqrmNRPQhxQ5HoD41VHCquWg",
  "key7": "3FnCCpEMBB8WADE7Bbki4kVFoSmiq3wKveHHcyUB9ThuKKXdxPDCq9GNTVdbKAJFpepD6vJGGHW5rgeFKJDV9SUi",
  "key8": "3ZY6WpoaqJHeqU6tGZsnvwfAZ7KLA8E3DRWKrQqqKR4nocCY5Crqj3GDfhREQ9mJBHJqNcvwS9B1As7yxRA9v8r2",
  "key9": "3VkXDhPsZ8tQfFX1DUrSF3YpcbmVn3By8NQbzd52idNiDkBbHAdZEfiko33q7bRLT4n1W73guiw7gkstnhjDvF3D",
  "key10": "CTMYtAptRjUVauZmZw8VAh5WW7Rh8ebXgPfwoGiCnyYVnXQfk2byUZaLeKjgt4eZneb8MNk173VsutsavE43HnJ",
  "key11": "5tMyMXqYzBF8gbvjxwYDNB8Wta6q32CzPHocTAEtzciaGPqxQ4uzrpLdv17cZvmg5oiYkbnbH1RfvMaFjkiEmFe8",
  "key12": "4JzWS1trtUoe8iLYnnPKU1eC5ctvQ9xohrvJkd1VsqBFwspfNiqWqUNtuM1HE1GkKxHPA9YVpSvSwgfTCRPF16hQ",
  "key13": "4KkY77RnXb4yra9fdDHXBiGTNM1jUWjieJo8yTZNGosQzxVCWLWXhF8aynjaRWGkGg5HrwYqv24Y4xtHwCJjxYpP",
  "key14": "4TfZ2y69pDGVCjgGReLu7KZtNuydwb2JEoL5v3G7LPttUmDNSoA6WnnaWmBFX4D95HCV7h7xLQmnyCDZQxHmfrqU",
  "key15": "47HSUa1T8oDgHqE5HGwapxGxqUg27r2UjpUgMW7UaLeM6dUgGS3ddijV6RrJTujJqyx1pYhB3nndF9EGL1KDsQmR",
  "key16": "34TvNjGLiyVW3PCLc1QNgCRZi8wn5duXYFGhbjK6CED57DK7Y7d6cXFQsMcc42U5TfAscxbmihpKh9JGedpNVWWD",
  "key17": "5EMzZcb36tVtCA6e3Dz8SiPFQbsg4qhF1jj9hcfnKiJb69CeuWfh545sGeDQCPgV4VwzJaDGqi7jJi1jzZDeEpwp",
  "key18": "5fxyu526NQ9kpLCnUELafPxbsTCHJXiR5ZTVtbyzhKzYEH9KECzVMqoWiASjbsTRra6TBVjkKeGikweQPjnH9sve",
  "key19": "DERW6fF3CyfQ9dgSXwvkLp7wZz88WrjCK3vofr9rifR1e9t75cvp1FKndzoWGrVmpDLBu8BQe7h1qZuBjcuU1kz",
  "key20": "2id5Sv5zpRJ7HWex5B4VMWgAvpPWQX3rf1Ue8XetL4KsqSvFMD655dAZR8xFecLzFxzwU9GEw7DA4M4tb9gzbiKz",
  "key21": "67FLuAiUbSvA9u6RVsfwLwcRVBwMvcVF3ryoKh1RtDnDG1qDbeRavtuhMZ7UdCN8tFnig8YpXiDCV2vehcStGgh1",
  "key22": "3eDSmFGCvL4tsU5t3LKUZWHvkohs6bprERx1ygH9tTjN6ADmFTBytFPpwhe3DydT6XLNz7zW1xjFBzGBKcnxSfjG",
  "key23": "3xF9E4vkMzC2XzwnGGZ55gLfYRUxP4KHyVEgcKtwx8CxsryHmfyvNBQc8q4qHTWS6RbVzfQGfU52aWu37i2dakv8",
  "key24": "4KPn1Z8H5vgX2oWmRfypKg2xRNQD6615KVjKmyfLTpNxBdVTRwFx9C9qqWPMurwjHpyrDdkKEQ7xQ9dj5HjZxUju",
  "key25": "5miGwYreBgRQEShWcvirP1AWfZvpqdiVSuavTXiYV4y9M75guCUJmcEc2QfBgSfC42Dp2tGZCeXyoVFQtEsoZrEZ",
  "key26": "5gzy53aeeZSdcFHpid6NKUw2Vkh6PKpyVaurFggbrfFCKX4NS44h2dVLtFDUpy3oX4QJwh4EWFUJ87JA65G5qytR",
  "key27": "5Vp5yjzttHwsGtEW4uyH59vTgjM6hNT9ALgNYcS3GuwCRYgZrijJcHXVH1b9xoGF5NBs459xYzXm8XFVznuTzx3Q",
  "key28": "5ByN7UWCNk7TVw5vFLSFMyRhGim2G2jTZz6zux4PG9saZcLwX2srV1aU4wx8TmqTLkbD5M6dj6iNnHC4qEaoP8NQ",
  "key29": "YBBWLcMhWJaoJgWBLLDKkGnFehdXwjtZcTYD2heH5V6nTy6HyhTTFFBMav7VDKzhtdakgWyhtd4AH3HH8vafZTm",
  "key30": "5ce5u1Fam7ygzKifGLmEFxPeKKWkfJdECuvURPd8fGGNmvr9YH8NbiPWivCRonnBcJSZSsL1BNT4W6E6Fg3fFtwk",
  "key31": "4z2TGc6vVewohoXSracbZfibdWZjvVceuRYUeTsG89W6rMqQRQpfne4bLidv1VekJGnauZ2pPrAUgLQHWHx6jWzP",
  "key32": "4DpzhpGkpdGfMAAGSnoWVRkt9RHaT7tdvb7djgBgwTYLxBKGXxiwd7X22rUmhNpE6sjhJ2Qzt2jBWZomptEBzUzP",
  "key33": "612RP2JQ5Xk2N4T5gssjgj5VSz9aBspa9TW7TNAjwKH6nMsJiKTevabBvUHW3Wzh7i3SekBKn2Qq4zHiwGiHw7UZ",
  "key34": "AeAoXZ1K9ZwoCXqQwsgXDrRb72GuC7aF8Mvq9AzTKQ6nTJSBtVor39D939xJs35W5A6AadyrRbZa2RUCbZ8QXvB"
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
