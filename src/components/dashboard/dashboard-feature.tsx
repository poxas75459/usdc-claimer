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
    "3PrFdZkDYn2PyNAH9dhPSdzppdvguePEe16daj37Nb5rZg91odehQVo6fVSyDmoUbJaWVzWGti7gwAs6gaA8vrT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jtp4Cu7Sxrs97cSZG6AYJqKtXo3nw2XPBKi2gibCznj5V2wXujHJgibPVBNfNRuLmmoJmmZL18NtdZhduJLHcCA",
  "key1": "2KmrzfeNJceTsPc3beYvhBD11UUqGPs8hCSUi6SPYjecHXVnY2sBo66DjKCE35yaHHS4bU4PTvUqCBuWoBba1A8Q",
  "key2": "4bpXKcjCEZK6TbYjupM5LmBTvr28JzRrfrakmt25F4ykH8vFuC4LM2WKM7EJ5ApC6BpeM1JvGPTiQf89okH2n2k6",
  "key3": "2Xy1NEzNA9Ljn8Vq816ispFuVzgcQvBrMEDshS4cvwtdqWHf3EcG3AD9ceRfK32emYqobnfWciNYz6r8gvUM2D9V",
  "key4": "4nkZWs9tgTsyspBJc8tTGtAiDu3LFkdTjMBcjCH9VYN9388MHpbsoiLs3qqgUxrYECN45i6VH856bF9wZDGgnzTe",
  "key5": "2PstAzPo57LZahUg7hRxt7d7UsqRosiqBpx7jJMD54VKVK6EC2u1KcYxU56QStWAUtwJhoep2iSFPLEs5FC9YJwZ",
  "key6": "2AnSyUQ6R9Sv5sfEqMtq7iHHUofQsrNfctYi1oK7L29HQgk2CG4VvGcAm6NeTSj1yZSTgXxcdZE6uQ8KpAFh4jK2",
  "key7": "3xowyeQ8cU1oa6PtzMzL8oAM8Jah89ERu71A4BbmWyPLFvhhr6ukK2v3gD72aCJD7MSHvz9NXAQuoZNXmg3q4LMi",
  "key8": "3qfPNSsLbQZiueG2MKhMPziJwqRvspuAQZkgoWXDbPzHgefvxNVpXPAxgiUyBrqDrmt6BkwKsxDhrQZ8aA4Rkm8f",
  "key9": "5ScefUrZYPU222gCzKneTr5Lx9jKXRpUMYFUxUqG1qo1EQNGZnmD3zyMVizE35Btjv73onrTGjQia33CeyskHf9p",
  "key10": "5iBKHtcS4AofuPwMfypSzphMS5QoHXoSWX5QnY3MUnkUYnPHWdZFZ7PZaDrTz7CevRU9UBHYEPFr2tfR4DiDwqF3",
  "key11": "52GNJ2q7BudmbNky3FDmwybGck8tZsXYQxooYnbsf8i6yVBgWwgzT2Rop8sJi2ef3w77CPQvTPi3K7gQ6RyxHwn9",
  "key12": "4iTNpJAhNRRSefnfJqTeM3n2ipqwtTfrcRvKDp5xvJ1zqdUjKcPYC7btTeUEPNLBnKjvWe9BydNzMkhHtH4Ybq6P",
  "key13": "3yUXPVDFChU9d5SUkLf5UHFdadyoGnBtLLBVzqNKhJzJ17AGCoMmxKNcXrW2mXCWCakNRb6hDWW9gNjuPa2UXukx",
  "key14": "3mfLVoheFXm8xv3vLLw9RZqU9GegS1XizDvRVwT7ZXDGs7isiQEYEtiCBuxdxdrrmjoivJiiYcUJyq9cpCMZtg3Q",
  "key15": "3jPUqUkz6wqwUTtyPvpds5GJz4p6CB68NWhzEhyhZXE8eEnsdGS1BT98LW7GmmXaUBRww8UW1aeYDP6WUjGKUZqB",
  "key16": "37UqqDoQceVc1RHqs4YhpF3j62uWC1dqQCMQt9k14F1YJFR29XsCy8uQHbfEfGDbTvPF9QXJ68DcAgrK3Dd9kRzL",
  "key17": "4GxZgAUfocWC58ARNqfEjKcnP3Hcsmy1qRJBLSDsJ6PNCEWa1dzteeq1vnDQm16kNe6JK1bXZ29Y3Y8pcM1eY2NM",
  "key18": "HCS9QpfF5tSRXJgrDxPp5ibqdC91EaUEwpVYEAkfqbS2i5vvd7mprwksfRJVxuNPBM6c2JobMnhBKGjyoyGqQ1R",
  "key19": "2nSHmnDuwzHhGnaMXGca6QrKPSDMD8TLoNXHqdb2jBtkPP6cmD1LbS8yMFX1SpWg6E4Pmmxemty3Z9ofPRHXE9ji",
  "key20": "5VLJGMbur22qvUDj1vRZs1khbTUBEgkopdwPd8DHJBJsoDBZSoYXxbV78hQDVu3bXBUMjpb24r7WWYzUW5a4hvYe",
  "key21": "2HE9ZU1AYMHBzXvEJ8xbZxChUswY4GFaU3EXNa5NhPfZQrnCzHqtEstf97UfKEgkXBUnjvXeRj3bgbv3KkuoMhbY",
  "key22": "5ncm4EY4cbAVJteWxFpBy2YyfuMdHr28YbLaZ1KCe6c3cSF6RiPENtzxQwUcjdB94oAacnEmcAVWQHZXmztr9UAz",
  "key23": "5ErR5apsGSBvEnPLyKG1PTtNNx9tWoPQvrXnvYuh2AvKZDG3uQY4g9u192HfS7hFNeNBwCeV7R65AGbNPTGF2oCZ",
  "key24": "xhqBrEdncvE2uhzjwTQvVqCfcQZkFav27jHVUR4DzRNnmVkbipTiQxpViJ2CBLsLQ4xYqwDMDEAhm2saqAJBfB1",
  "key25": "M2KJ99UKQDkjNnv3if2FGcto2LwJG6pNWUgbrsViy4i8Hm9iHVKFW49K6xzkF8Um5fe8XofKqqck7W5Qpvr7CaR",
  "key26": "pCeDXq32ddKtPQofztXPw4x4xae148s2uyrKMtKBRTMCi36QSw4onFMC23yeAb9k5KvPxDo8XMwTZ24u6Ghv1A8",
  "key27": "5CSH3en76Dw6amhdgGgr3ChAihgosrgn8HargpLJ1KHQu8uh33SD2AJzkGarnan69qipFjSCZL4y9iqc22eZVqTQ",
  "key28": "3yAV3yMS4YBVnqJ7wbeeWJjZhJZnn9B81Xy2W1FE8bJozNT9xpreEcfxfrhszWkotm8Pr8ZCjVg4ivwEy6rdrHs5",
  "key29": "5fXUMuDoNaTscfWwnWpNPyyMzAhhcLS9W32HQ9wqTYnUzJHSYsPgK4ncWzUDTDvxVctau59BuRPQ6R3zVafbKWCC",
  "key30": "3n8rQT8FbQqPC5Zy7jYQR9qf642fZBhKdATsjtQmAocvJgKSEVsXnBqYuGNqmVX3GZ21eLr9pDDmsVqK3F7bfjtZ"
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
