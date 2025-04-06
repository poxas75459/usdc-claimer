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
    "5uFyfPkrkV2eenDfxo4jEY9ma6QRHTYf4Ye9RL7xARx9KYf3Ai1cjhdpY5f7KqGkvpsnZNnrw1eTz4hodUJRpcvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZbjE1NRWXm9pk5d1TEyDwo3btdP1XAXrjS8rgV8QyCEJia3xZFF6D6s7263JLGtvhheEnWhzdzuZx6ui8SLm3p",
  "key1": "4fHEVEFQtj4nvMX5GKc5e9HCcW8eJo2vmmtMoKwnwoX3Eh5M8B5G5BxvWr59vn7VL1ysk5f2JiExbKNGpUrqokJr",
  "key2": "53wtUwhLWNTKH5r5cUx45YQj4PYq7TNjz13qBuSEkk5e2uj75W1qjNWo1abFM9hkgxWEb1ThfxXrrNvakUsLURc6",
  "key3": "5Ei7d8JnM5peVUZJp1MbpYur3zyz4RRodoNrJgypFCU5gsaCNZkamFMSzQzorG3Wr9m4uLieYCLJbFs9jFZZAxSD",
  "key4": "2HwQL7xgib4KUNqBbDyLVQE18265fobcnS8K2pmXhagpdM29n2XdXhteRaXPBk2Wj9dBXrphUjF8yc77sHJLKoQf",
  "key5": "5WtjUHrBvXSYucjWq6ijBHsv739ZAs9gkUtD1zUkwfZdJ7vooxY4Zr1ZKxuYazfRbdLYv7ZS3FXYvyvgcCScGqK1",
  "key6": "64pn7nxv6Z9DQeFTJegzGfCgeQLQ8Mzj5QZ7ZFKnbWkubU2aaKh9rBjQtAE6eqbeKQniaFAob6nfra5vqaRvvXRu",
  "key7": "5WGCYkJjhKKckwEtPX6GmvHaUwPprgqRbDg6FBQbRZ9f2BDhrgR1tWvxwGqtj4KrnijD8fzEgGDcBfPjEE5z2UWo",
  "key8": "4sGiQQsHmGH6Cx7TCQyZQsaXZZKtiNwAv7t44XUqhkTphT6bPFkUg4RQr11TokpLEZ9boo6rSdKtSZBqZ76H1Teb",
  "key9": "5jWGii2BnSX1am1p9RKU32BhfacBRtjJ55XQULx4dp5uy9Pe52bTx8JGHhzhiGXQfHhJLjuFQP6d2UtG1JcvMbuM",
  "key10": "4Ns8TzuudJzYBr3ToVmgffic3uUu3Y99TSDXyMAeavpEMAieyUih2PPbynMHGZP4qA3fpvq4xPAoZ8EuE7snXp1q",
  "key11": "43fW1Eb9qyzQX55pN93MNpdktPmNX1bMaApWdpiGpqY5L5aELuwhF61bFoYMzDN3KeL2vYpoWjN2fSoxw6sEachq",
  "key12": "2mqL8W32BjEEUt6h1Mw67z4PaF9M7GRGn9tVW1ZXvSPxzGCpKaFLAhfVegFi2UeFHnCh3sNjkn7kRqp1E3YU3qz3",
  "key13": "2UtP5tyvVYM1agBWT2orAHKVDWF7uGLHPBmd8JR2rVyEoVXmMcvwUSN7pGDXgHAjHSTgFxgocnho21rgmztr8dA8",
  "key14": "2HmvQ5tocs8moV34aCYmQ6UctbDdueLapiJshFZVC2H5s43DEzDSiHJwgnaguEE9NNGQ34HHbdvjjA1rFGDWHYzR",
  "key15": "3RaULzam6qTHKtNn7UjSkFRP729iMUemyCVr8XP9gEh3q7zdTTzsxigJ7jfXe8Uut6YJr1QqmRpSJdXbBjduj2Mm",
  "key16": "5wr6THLYDLDRLRkf3Vf7JWe4Ap2fkpmAmSmiV8bu8aPB2wtxFt52DAp8vbmUKs19LcpVGoj8syEDTwKfPSxe6NrZ",
  "key17": "4ofBkK2BESQXPLsUQ2WS1YAAiGBkQxRBKgEe4joYKkQc4yXLFyms4Nw31fEMaeWX5nzSo6g2MoYqhBwafc4mC1R2",
  "key18": "32hQEvMXvmPMTR1TQgmj4VAgtfhKL3s2WH1EpQrfnqrSFwDuEHBTM1pACHUB968t5ND2hqH6jgQvgMYQfv2XY7gY",
  "key19": "23c2AbxH4YcY2hDauqSE5KbJkqLKs4vhdiDgjUzzGUwiaxs3xg4bAsLTynHotqjcWbVunSiDapgNiKJzoAxQG5w9",
  "key20": "qZSSvqAN8w6EzKKWbVjvNtTKcNye3V5es3AmXWexQwNP9y5NmTwfKomxZMu7xpCtyGWu8qhzES1iZgSeRCN7ipv",
  "key21": "4k5docfHeTpKA8HnX9gZcYTLXQAeMtb2bW51NodRezcoddK27DV6BbD5QDt2jSkcG7wx1NWD3HerrGFJxcS52C3A",
  "key22": "62gyEbvygRcs79Eg9NUGvSnM7od7eyAddyDj2FSHTs2SCx9UucPw5BXYoKKnB5uYRNYD36otMCW95mwXZKKkbvMx",
  "key23": "5rYVWhuhWr8M7FPKjUEppUuiXex4Qeff6PUEnSdHhYWXnDHoLy1veMJWeA7jZXfsCFmXhmJmvMg2av1XksJV5vmR",
  "key24": "5Wz3wqmwCjVKw4E1UUo6R8bSZHKvh71bExEHJoQMU4Lc1p4oCdSJx3gddxKGF8wXyKJnpjtsovxLAZ9MCGkAAVre",
  "key25": "5qWGqp2bwrASupt92w6X9xj4Mwo3szWgjm6PD5xGEB4n5utwP5LBAAAPi1UCHTNmFuS36ouc1kYUUVfFpMDV2Wy3",
  "key26": "5xFRJDkiD2Je366RJvofdayFs8aeqTugpkTTx2wYSkMG5d9WP1cvK52ZPbwbwnojtAXkVTwD3oUCRm75JkiBnQMM",
  "key27": "4oFUR6CdJ6uYnE58dsu6k3zf2qAT1MsaNXKzrJoAmzYX4au2WJSBhY3EkZtGQNDa78S7btBMVhgoGyDvfdqP64bC",
  "key28": "6CMfDGpf5Rr7527obpek7nNAsjQUqaVkfT9vk5vPcwwbgTiNy4kkkRzDwB68au4RJD9o8SuRTLmUeSqwGjo9L93",
  "key29": "3gsMLgGNH7yB8SGEomm3jHwDrKKv1TpkjUusqBksdgLNBJbQngW7n9bdBnE5pisagMW1pPGqDKGLNvMKH6psUyr3",
  "key30": "2mTg3vLjwMyDWNiPYjb4zev2ewgRaBb4QJpKtY4uHbhnMPeSv3ywozYmaTdeW5cAtc73TwSueZFqwmsnn375vMmZ",
  "key31": "5yxvE6hnZHtJwJtJFH1U4brjDgashCG5UvMkHCwFRnc2bBSBT1cnPjCunAawnTHe8msMYtWaHvcCbueTRcE1T4aF",
  "key32": "2o6auUdVtHdoLCz7GPcNhgKmrRCzmVoBKvqPtX4E89pZ2m9MLPPQPVdwXXAvfyE7ou46SaaXbdEiQ5GXsPoH7deW",
  "key33": "3WsXg9EUdFHtrRg58DmHSBmduvMMD2XwXJQpezW7yJh7ZzSUAszH2yLeE3so88KYZrEw8LusS8RAmWJpuif18rgH",
  "key34": "5NspU4dwBkeSow7Xg3wwQ292K6928JHc1uyj1u4w5t4Vah2QhSxVPq7wmBTNc6oVCgQnKZ7AUSuQLCP7dbAMCoXG",
  "key35": "3qHZhadKKAcoXEZn74aPHM1Tgn45gX6SQFwLqGQm9MfEySSJFR52s6SWwu8Fs6wJP8ArWn6v92yqfkeVsZ6QGox1",
  "key36": "2PyzRHy9Xia212TmpdjSrwQxpusKKjuj7MDJWTua6FnxEKTQtJgJPuGuWTioXytw9HwkNhH1eCGMEURYENGkCEpT",
  "key37": "3ex9Q3z7gcHQRBZTKRtwNrGv3Ks2cocKdoSjvceche1R4rReJ2xyxaJ2b1CbtvQW89vhkB5PmS6CgzaKwF7dCUE1",
  "key38": "2LZM42fCdNz3XZDgvny5HWFPc4e9cg46QK9b9XSwBsRKWsaNJn2SYimkmsut2cwujEsjLDjVnxGRDjunQW96kr7n",
  "key39": "2wsy7pZt3WLedxfbtbfJsQ9HafcL4L5Mj4kPv5QNktFs5845BQH5d9FL1gfGD5GU9GAomiyeKSWh4ksCgkf34xQh",
  "key40": "3xxB1GGzGfHvVUdVGDgmh8eftexX9rc4CyfeTVVFCbSuzVaxkuNDx1sHFdbChfNtef5wvGn4SguW1BS58ZnpxZ9B",
  "key41": "FpRZWtX9ZVoD1ebYgfE8yDsLx31HVu6zY7brMfj6UTK89gD3VmkQUN6ZuX6uYzG9ED68kricA48V41f3xgcDMd4",
  "key42": "2D6hF7Cnx7BUvPE2HTEaj7wBBzS9ayJNqmVd2Y4bwb2oVqTRJZbbxC9NAtVF78VYwgMkvmaEyiZLnc79GADkYKdg"
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
