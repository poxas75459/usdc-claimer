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
    "2itw2tFJpUrCs5KgyrQ8SBc8436WqMgEaoL749ck4V7aeQMLFcNF8sQovFPYAQxJni5f5z3MVos9PNY8f68sWb5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "367X7Ca62jkvTKxUkwLYKsm2iUorp7M4trwJU544Q8EfDwT6etCh5YnR7v1GRcc3U2D4NMkeZXgysVGJux4GCwZB",
  "key1": "3LZMqBM7fHmBt7kr9BJVQfsuQbKn1gnE3tDnW71cDjAyP7vgX4zCbu9JQVPM8bE1AUWi5fjstFiRcsVmKFN3a9zc",
  "key2": "2NEECiVPFg44YsRNHoADPFXJmEU7nbvViVfr2VCMiQKq2PhkVq9EAsUmwiBDKckgBeScwd4XymwDZXwjpc1crkhy",
  "key3": "x2XGRgYrRxuK6QsfutHq41pyukQTHCdmKnmEcf7aTwZehdXGtdjrqR82mX3ka4tdR6JADWQuy71nuANZi9a7y8Z",
  "key4": "4wqQWdWeEawxZHqg5xCoNYJgc29MdBjGTzvC4txkHk8LaD49fkcp7Km9UZvUJvV1HLBKcavvLB4saE334B8qUdQY",
  "key5": "3wQsqMTx6vfK4VNM99zePQ9LzTzAULqo4a3odunqvEtiwKhZo3pXH4d7z7eQLEjTQCMnge7Z2BVY4TqZz3N7KvZW",
  "key6": "3M1wCzH9w7i3JM1Qe4H8bEm4V2XDvxFYYpP2xftEJzvh3CvWYyaaMHmzpK42L8y56w9jEM4akAArqrRCWPtmeDqQ",
  "key7": "4m25cmb7VFepXyGpuprss2eKHaCkZFq7cncL6uMZpFDBXdfwysPRd7A6vD4HyiAYyDT3JgVAzqyutXfDjC6krkm5",
  "key8": "3zxG9pfKsHH4W7C22rKP33q41PRDgDb1XmnqNtduK9XUXyJxNqEffcAj8WtFHcEt7oyRogGVoNTNXFVZLMFK76yd",
  "key9": "47hafahuZbm8zX3JanQBnKr7hrvqweqH3PQYkQZJPXJg3JJ8c1jhn1G5WGuQfHzBEGZUabQpA9s8NB9MuhDsDWDu",
  "key10": "5gBFbNsBVUN83u7pcV15qkbmvnScuaU72hcqKD9N1SZgMCbN4Y1SEHQsDWyTyY6vVWCNnQ372q852zXChviCYDr2",
  "key11": "2YmdFa4yfJZQnRCnKU1dN1LM9W7cnFJuN3FyvM4YXNnPMbWTovKZgWNv7wEH4HgSuECK7KBLNkQAbpMRseZynS4F",
  "key12": "2THq3U7prF6TeabHpKxP7CB2RYZS9o6vu1m3s3NY2djSqRuVAVgWMZWqoXkAauMHFcFgy8FJDWPyp6hXdF41h5Zs",
  "key13": "3paGGLU3qCJJeqhXYa1XmbL9M1griiJ3vStL1qxxmjX6Teqx8rUESHNDJxT1ZaEAHnPDiNooVZyUkvNS3PiLszqv",
  "key14": "3cJmzyqe7G4skG1zwp4aSeFpz7MqzSurEz9wg2PmYYkWLpBySTsw6piXyCTf3GAfaWXqkWotfTdPF5t3BZEKX5Kn",
  "key15": "5drMWfEA9FJvbtB8K4ZJ7Ku1Kk2gZPATKFdaWcyY3SthfCQGgsvxuETrL9uweY6BpYZ5xMfaBK7Q9ngbbGymE6nk",
  "key16": "2KKYz1wK8SydAdFnrsauYuY5bpZWd6WSvo4wiQATpfqHHrXPXiWoh48Cc6fEFebGnPr1sNyhCMpHbRJhP2JKTzqB",
  "key17": "3NtE1nVj3YfExAoSf4DBMNCzekkDe9yn6vSaDF6zy2kJwspU6hDWWTzPE4BLnVczESMpuMeBqsRqEJ5gD4wFkV5m",
  "key18": "2Uhz6fPmXsHR1qrBUgFpD39nGFEryceTzmYug1Yee7bZYfK1jrj5YXk7m5yvduKzubq5FhPBNqu9ms4eEhQtvZUR",
  "key19": "5QxWeMrUEsCLo7jeA4Ry9P16R5sE2cNM41fTQtNrhzQL4S3bpMePCZH7RBuJuHXtBwFvBD9WDbRgVGL9M1F5ZHiR",
  "key20": "SSLJBMwXmbhVcuHyo1T4RK91nRWguXpr1CGsoZSJBVbnRZKrJjEwspk4Qnjqr9XTy5jEawgmHnYQCKWA52bXmkP",
  "key21": "3gboVrWNG9dN9BuGTyN3FvWHmkLv3zJ97izkw3NaUQnk9buy3bqUvAkGeHp6jWsFUqvbBtRfKHv6GuTVheugGNoC",
  "key22": "3ZQ4DGBbxo4ic8aAxvv8n1mrXS1tF18GEtEtfwtChwXMa6bP9hMfsSqT6GQCd7QWuSbn4PmkBpD7JFwErB7NXsxn",
  "key23": "pS2XeA13Un7VawcF6nVQGuPJ8kx99m7dF3xZphxw4PfzXP7JBTiLiZLorXTMCqe2G7Q1YEVJ2cuVTe6YgpiX9Xt",
  "key24": "3ThD77VxrhnhxkW5B4s526EUhWPZBDk4s2Q3eo576x85Q6jqMujGTXgSFgcBKJUZ8uuuYs9T9mL5wnq1NE9VqchT",
  "key25": "4xU7Bf3Jy4Cge9NiktuDh74aU81YBa5dmNAkGsUme7JaMP9FzFtBV4raHnukQfaHoPkpPPbLepMTcNJpnqn89jNh",
  "key26": "4a7UmCyoHrA7CUeZtPt8wAAmG3riDf1UgfHSCMJmGmnb2ydd7rY8XMxe872tmniZdznKqkfj13bYgF1JZi9hVYb5",
  "key27": "3tQPX3qieTuiRmiXdPxUjpU6fK5dF1ur3VHtWXsDzWKr3GX5nTM2wZWbLZsSnnZz3zTmSrV3XbPzwfTzfnoKuoNj",
  "key28": "5RADXWBi5Yp3MeQXA6e6KwDWiwXhGz6e77kKhD3SLohT4sk4YGhgXwaxe8woBmtspXmjv2zgNiwpbP1mAXmTyy29",
  "key29": "4taUFgcsFUCha3JeziCpDb3gMHq79qAyDkTxHTsmhqHHdp2mYcNTJewytmxXkGjzbZMmq1qVcr86aEkVoZsQji4e",
  "key30": "2Qrh9Ch4purbfMqks8GsQpx2n4UPAFH4YjN4mmEBDi17TcQbDh18DJy82iZEBvTTWLbWFKAYmqVQ5Q5EctkB3cd",
  "key31": "2eUujMGEJmm31Kykdvuj6Mr4JQ8rKbG4Syc1KVs25YLY3ASKV9EiuvbdiWhfV3LhfJ8oaiDaEsdEdFjyhXD7TBCu",
  "key32": "5Shx7WyQpcPi1HhUm8up6KDiTJo89zegcWWkxVdyQ4K7tqMi9KAEAwR1JS2HHB2xAquj9mvv3x9hGJFMyVobfVVi",
  "key33": "yMjYEM19gCtNDcHQCEADB86TKkZPzpMJs2wKehhP5VHresnmpnvdpKAE3cqmsrjhH83WRpBuTJmUs5FJpGkxjJ9"
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
