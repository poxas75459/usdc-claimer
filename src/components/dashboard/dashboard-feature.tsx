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
    "2R4tFgQnjb2c9JfsXMaw5feNVPpSiKsU7YVq1Nna4E4QKbRyb6cwczLQFRAXLZ7jCqowLPG7YaXuBADnirJimauE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLY2twfqt2edWipsLqamKzHKQJBTcPASxrbpP3xMXGX5TgHYm7XJPpRNneSHBuAmrxTaKAvxoD4dAcy44HXSScq",
  "key1": "3njXVRWp7ptygUNsw1S5ygVbGS1GjsTiXVREYEfYCg8ZciimGXnyHHH6BFsyzgL2VAb49CLdk2KgAMEktZ1GpTjr",
  "key2": "tWzoytU5zanECxBnEGFfDd38PW5EbWEVk8aEjgZ8JpssPHQPLHaCAqNwaP5MRBXX9VNBDuVKNgVHVSid2v4mLJz",
  "key3": "4t9dv4ikXivtYqSHqjFHvPdnUNeZo7yhNgPjnrpmZYzn3L9odqvUDCL1z3wL5JfadepfPDQPsjC8Hobsk3adgk6d",
  "key4": "4ZEKepDs8eR2qFyTXfwsUNH9SD59qGVhDZ9M2L36rPcVmKugoMBT2GbajqjKCsHNPG1WdkJc7kAJtuTJouAbN3Cd",
  "key5": "4Bu8Vd6K3NA5ukM1rxjAGUBGPpazhSh3pMGQoBFCACJBT5Q5XXZzeFYu2eWZcncJ8p3pdGw1BDevkqxzUQn2SJ3S",
  "key6": "2UmMMsKDCeQtkHAELAqnVQJyku4H8bDL7MvuQY8v49ULcSwEhfxddrxUkgRtuC7CL3xAQk5PDkg9uDoRZQNTuJk1",
  "key7": "5GYrXkmQwzSKMKkgrpEGmQYCDMrqEQxF7FKUvWHEUCqa56D3PuxoKVzMQttGD8RSywn3RrkbXgJ6E46vTnKk2oLw",
  "key8": "25KQLvaMAqrvj718BWrPsWjPAMqgCfWe9oCbDEQzWdwawFLPU6o2VbqVAjbWMBk6k1tCyaiTAwuVQXGpAEMh5LU7",
  "key9": "2hwsRrfCGjdRwR57WC5G39oVDmvWvBTV3FBV9XmqPsWcMVow9jAxKPX3tJV3yp1TPMyQywx3YQfpFMjWikLrW8U8",
  "key10": "5sochZ2aWpfRUuq9P71P23YT9c1w34dinMjtX4KXjqk4onebGH75SA14njAGvxUgGm7wd8fp7JBeviLEc6a8D31U",
  "key11": "2Z8iJq2YgR5wRgGNQmYBTjPrmnzquFU3VE3roTjxq7y2g23QoRjRnpUVjahGPzRHC7F68Y8z7cijt3rwteDJ8wtj",
  "key12": "r5jU4221kLBHME1nVkrPVi3jcD39XC7XbjkZvG7h8cGgZgT9uStYYUnjecUPnB6Kf5qb2MTtFs87inwstSsqPTv",
  "key13": "7QiJ7QK7to7okkuncDFnFmKK5iWZJMbLFkhEx7wqGp7V1qFSQPL6emXZ7SuXZZQYe2yRdovG8crsmVa7YmsmfsZ",
  "key14": "5FfeGcJPBaXVfFy4A3wGH4CChaDsXxv8VpdPBsAMnk86Ft5ihynD74qKUt66o4V7ar7qA66PfwtqRcGJLb5Rtm7E",
  "key15": "4cS1phLBcKi1kfHWBWmbyTLBKbQiFekXx1nWmK6C1bSZd4Zoz8VgBkwGddPmcq1N4b9yak8M6kXBtThenzguCYuz",
  "key16": "2Sbu7ex21XUnFRnYgtnBdyEmUS18KfB3rEob3R9ndpJh9wmWDF84g2HzgsU2FZEuerp3YJwozj71ixxKosQwsmjf",
  "key17": "3BHahAZqnduupQqR3muZvgZQodJFamJMJ3CmSXCjaXGH4asd2eWKGsY4AybHNFAPw3AEiJ37xkvMRhZXzWBaNqWH",
  "key18": "5Pi9vNX5yUQdpYJSQeRsL7rmg8HiZnkRtaR9WJWkkZU1KHB1kt2rXWWtC6xFwKujeKe7pbcViBugWYbgtjZin4fn",
  "key19": "4uVKuvNYQiqJ65MSoVg2bSgawUsVX8EEMQM5hpsXfftLm2UTs2wPKXXMZYqJxUXCDaXgPCD9vKUXaqXfFkWGjyPN",
  "key20": "5MMeWTRs81psBhJkxdRn5tLDEdE2DzjimhKhbvwPVmQzUWqjebZ7EDphTybvbMbYqbWf3P4B63qpjX9HszErB3A7",
  "key21": "5LAE632LutyPFEX4tPsAFDXGNty6tUa8iPh93Fhs4V5WcGJHzDkNDNMtzRJFm8ATHKH6Uf6zf1jF33nPzFLrvQyL",
  "key22": "2Ya4iLaCWjxV7H46AGDS2CtQy63Pgp3NNxycAJ3g9MemRyxioCaWEEZJUnokRfSvaptq87m7JPUmy7DMGK85zKwh",
  "key23": "4jZKD9Fqgd1nov19mp2u7beLUH867i9enG6K56km2MMvP1Xd2bKHujmUEJAzNnwpznt5XdwoV7GZdYfjpu386jv2",
  "key24": "5Zqu5BtKU8tSGkgRgKbA63G5qkGgtMdUkrof4kNgeYD2vJmQ3NJSbHVZdDTCW7Y1K1i6cUXX1QHj61td8SG9LFnd",
  "key25": "P5Lq88BHpXyhhER7ycQdRdd6uyNVsAkKacAn6y11disqM7YJxVUgijnSBdqgJutMHWbRHJbLYquUahvspgHPAm6"
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
