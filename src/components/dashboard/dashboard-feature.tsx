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
    "w6Zmadgm26DStL3ebQcNunngzh3twdDndn7s81dqAFC2E1Pvb9ZZugnzTZFrQdpz5eRZtHf2KxfHULhiDJNw23q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YhusHitrtVs3zwq1x34SACBRCJW4oRBk8XnYF96yZfw6uzkgHQSZvRaf4XpJGXWcyP1wyUsjYoP7LNbUSKyubBg",
  "key1": "5quBg8pg3eZiRCKjtzAbu5mmLWZCoubLcerXYVpp63du2gy8siRZkKY7KfmMWQyMLfHGfx73FoiNbxe6nRPYq6S6",
  "key2": "3gxw6kEyqqm5UkXL9J7MK7ij33HTaCUoLhqEFohouQi2RkuVYw3wNxHE6L3ZnFmeg4eSw3QDXnKUvRFiZfm1W94p",
  "key3": "ZYmzSa42XXUtvvFexYMWWSGttMWYPbTt2SMrf31D2Bu1YxPXY38GJHvV2RD7DBTyLWCyTA6ZEkwQQ27Za9eBQ9N",
  "key4": "3rTPYWJYzYS8673HV9aHvma8LnaeggW1BpPzzFudyhSyGK2fKd5qHJUHzLD7svWrzJU9WH1yPYtpoxJh1Vpdi6H6",
  "key5": "Lsv9svdu1kk1X858hVZmmMeznDQ5hqTpS55nYLPXaHFAxZGhGDwDPzBcYrG5YbHkN9w8mjDxhM4SfLEweJ7dK9v",
  "key6": "opBL9PMtu1mCbfxDmHLacH89XLkfEMaNz8qEPzPQoYqeazpf6ihWiqvfbdPNHivFR5yXQG9Q6t8bUi5RLxPZUUd",
  "key7": "3A8e44ihzwkdiAZ6sQ1zk2A61LuoDgp6fTJNvGBJYKbCRrwQDbZw19xRq2RKAb7Sa3RQ3dqoWYDGwVAtoazJ9evq",
  "key8": "2xSxaMib4yJRh3jmRMmS3hGkU11JkQdZauYtBc9GnyWWbXyUzXWsWDTTWjAy9YqSxoUzpAMXzVoqfSCwaFMhN7k1",
  "key9": "3AG1ViDfU3WZWw157XHgqgKUgNiBkRNwBPo1ruN6NLxoPgVQb4vhc1RxedCmZk4HFEmjYzXPWcZrHNkbfFptoKJ2",
  "key10": "X4upXDwfDGJsaRd19V5BqXSzfog1RStC521K76t67RNRQAu2VaR7C3hadLRKEAriKVSfpy7nUsTHfCXkKWk6aCM",
  "key11": "4heX2eRQ88fubSraQ27UiuG73XwHYi2dpayzSfuJMgvEA7tf53VF1nFMLRHmFVXGPfzJA5BS2Y37nupafhXtz4w",
  "key12": "4CnbbUJHHGF1bkMWFKdgmtP6QRG3zrWzjzVCz5EBDJfYKVHXSGxPaPs3AbHJ4yRVNf4hXyGYWo2CY7PEGs4xpAty",
  "key13": "VgjQz6x2v7DZ6gdaaPPns69Y8nUsWLGsBcuaa7izRQiwXqXmW8RKobGwgMSMxoidhxKd2V9zE59jL9a4BRnxevi",
  "key14": "5cTcjKKaa67ZH4TwyYuGLhcPknf7Hz3vqjJCN2tbkRHirWbyNeE4bhmNbFZvAnDmB915bzHM1KV2kTchEyDfWRbp",
  "key15": "2UZiCHLaEehKixdB9oPjRRF7Sr7Y5AQeGG4g6HSywtvNKp3hcd62sDFqxtsw5gfWyxLDG7uVsys5CbzBhisouXLF",
  "key16": "WP6st5ARXEDmhdaAvnomcRpb7PruFHtUnfn4Zfa8QAMubAiAJo8Efc1ygVBkCZ55TGamSpzhXvgRk3ye7e2bDm8",
  "key17": "36juRcxshUv6SyriLwPmixsCbJ4e6DzMWq5Hi47C1u6WeBCZHp9EDfiyJkMsqphbkeMoTUYGsLXC5X96AKu48kGe",
  "key18": "3PYy7SG7jHaQyJfR9VAELiReEnbozQFCZ9FqfGUciGJvqDi1KnjCJeaz4BAj7G3pcvVJQJFV93qSJa6Eucq5oQe2",
  "key19": "54j27xk5MdUkTy1dfsbkW3xorSDcDDAivYmNbHk3iDx76Y6CXo2ja9AUiun2ypf8G5UrRyk8w1SoTVQDrezFTh4r",
  "key20": "khjVEAh9WM1zzaYtTFEdzLNUdZJZmQzia7Yy1xsZY5UbGP2geFqKgUr73g3GDzqUUtM1diQ8niRM3GA3pHNHrn5",
  "key21": "561tezCMYRHuaH9KMYWKTNzFDJfRQ74wSvsVkFSWhwbFj5SPo8r9FKqnbdNwx6a38pxhTGuQHYoxGfWCaYiuNYUD",
  "key22": "4GtUBbvVmCYE7Zr2ZxdSASjm56geg6y3YbopsogCiNhpZx1WJ7Xu2WuqRtiXoLuBZR8jcyxcVxnFSUAzNbM4TwSA",
  "key23": "5oVvNVDShqSXjJ8UAuqAYXkFS9MeMREgCbDq2as4dAfRBXHcdhLEdtAKLN4vp6isX8LUgZzCNwjxzC5Eao5hCdnJ",
  "key24": "3nzCcrkqrXYtbwXkz93SFg597Sor2HbbcB49pVpVe5PcnPG374W51YmpGQPbpzAQzccYh5aDQKuMLchevwqMqiCc",
  "key25": "ExUMAhCNnM9wZs1f2odhqhdGzxmpjFB2NCaSfaxwVHUi86qJjSdZgkCmtpPNg9bFDTaFL4drhnoFHnnXZ9z8TiH",
  "key26": "41u63sArdSXDUgU5JA96mDsXn7DUizsQkqPymoQP5UiUgAEN8xTrNUvAZQtnbPeSTPLeWm9hK2DBs1fMVDJfewfF",
  "key27": "3kNMmpDKQuB1cWfeggGnWbBx3PvHfGocyj3SyqFJ1BhFwLTQnLiCF5UxF8mTC6AbguduMbH59f53nJCVCXrekJJF",
  "key28": "47KNkoAo2TbcrNd1vswYRohhi7NASKa6CQYakxzkdABE5M5g3zE3G4SpRkk52jeG9EyMWA9MzWMymwQWqwAFpvjb",
  "key29": "igELPaJ2hNpRgMaXhiTWrFdTnXM8ewa5rfDfCU1gpqDuY6JgPNHRCEGnAe6hZkvWsjfbA9THUbFVRDP5PWgk24q",
  "key30": "4R62jxw8QaMiFaNR172oMeyMzgwg7Pq12DNj9w1i8pbqZ7c5DdydA2sNLoGc5R8RB1YW3sEdZEb583UBiDcJ9G4a",
  "key31": "2vNFBC73JnwWLDGyBMHqTYKf6y1Hwmb3iEHv6y55Pf2mXZw61L6Zqkdmw8kEckDXy63tKU7ZCPCvQCWDzuNrUxsH",
  "key32": "3uVnqhbnihwFvFik5xparTgDeH5buzidCMcaoSQ4o2M47vzd4Y12DG5T7Gi3eAvm56qPxU145a2SK8MVBQ6dCsiP",
  "key33": "5FAz5cXBzWeyTcmZ4EKBPF1ZBdR6VFgsFmzfy683hGQuV8bXmXXcMjSHbpK4xUSpVgW1ReS6ECxp24DuNQMEH7h2"
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
