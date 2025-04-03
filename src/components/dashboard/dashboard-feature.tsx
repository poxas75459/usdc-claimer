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
    "53gZ7wJXTqoGohYC3B6aWoEhErGwmMGNQxdxNkcn2zbeg4QQp6pTpkkdqEDf3L8DMConz6WVBzmxvpX2VKmmMgZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5UxkZ2d6pFnWAChraN8qnbRh3DmcD3C71DdNcUU4n1qSf2gFv68zma8ocRnYTRgan748eUqDXKk8NApBMsjBMn",
  "key1": "4uTJa47QhDQJoM8s71YxwrvH3iPpvhV2ahVNhmyFjRxkUj5JUEpD6brHiRSzuz73dx7fttvyJGoKBSr3SYJ4sfL9",
  "key2": "2vqTZ7MDjmJ24CkLqjzdf9ybC9v2ujyJmrGF48YLAS7dQckwZmKr3pLKK4Dh8N512R68Rwg37sR6BmKTN9GWSFUk",
  "key3": "VniR5ieun8UW6TMG7anb7tTutt9T3B9wSXy1TqcZiLtUB66NjAUUYHJ3TwdtWaLeSMmg3Heif8CKKUdb1z16iFy",
  "key4": "5sK9i2e4HYKwZ28DutfVnxs8SLnSnk84zHrp1LvAqqoniSu5fmaTjMZg4VaPkuxC7UZGqUYbDmR8Pd4ymAipFF8E",
  "key5": "5KpmdqXrdCMjVAAkZUxdhCWer5wt5VP1xPLDCsmSk49azR4A5jioKwfJzHe5vE8mygQub14AVkskHu3XrmCugJVn",
  "key6": "Se2p6ksjKpbaxrRTG6aFq6LApt4DpZDNGD8pTFJYYWAwb7Hg9SGNa1aharUW7M1FWxc41fUhqED3aXiyUFhKhdD",
  "key7": "5EvZwYDaRQsQJecKwdg9EaXsKfBkjNeGEo3dSFs9sciAHBuaCXDiYMtveaWhRtBgC2NttFPAPt2eg6uQsjXbQghj",
  "key8": "HoEPncoq2d2eDstSD2qbY79oaDcHswMCRPhZinSxuRAD7F3hAAJ2wJFT3bVD26popoocCmuAZH5hEfsBroKuyAx",
  "key9": "5C4rHMBNhxhWY6JMk9wQM9q9N9ciKCUK8Kk7QcNUZv6pADp9JCGNRrVn8KF54Edwp5kKJ9HXa7MTN9UFPPga7Nqp",
  "key10": "2RuEtuBA5GW5hN7f47ofFa4swdCVfR4AL2DQUwgZJSQ7Liuw48KuH1WfrYq3vmuCVjdzv3MKb6868bpPwT1CBgYP",
  "key11": "5fMiVn7xmz6ZS6Badi2jSUh6pK1bHdPQZN1nwoBdeXLMXqK7JH4MAZDem8kq3JfbQpjyQvkNQ9g823UcuPPwJPGc",
  "key12": "4HvuSji89e2k8Cb5qLeaU8FTziuprAtay4aUVFV1dcZMJuZ6UfUH7yz9sYusC5pNvbP4dfUTUvVDeHHKkwPmq5Cd",
  "key13": "3gcvs5bQ79Bu9ANUmF49encnZgLpM2nXkt3KrRqWNjKNnUWAaztRE13XqEYUFyZ3vtkZdUQ6B7yKZZGJN5PE8GwQ",
  "key14": "3DEsXu7S98oxYsFjKQA8LdjaQUG9UST75SfsDpN671yzrMmDVe28qiqru6QNtKjJ4u7RAm6ZfYRhXVFAunTQ8Cwk",
  "key15": "4eQeqw8T5acYR8UXWSn3L8nxHC66M9MW5fCy8tJ1GnCSm8s9cq9HMZxWsSAbYXxvTgsnqz3nkgQRTYVBequ68UuA",
  "key16": "4xFJYE7eoYhRP4okEWLzxx6NVtjDyFnuyR7dHmBWm2nk77znEfW5bhhzC41hAAr3AS6gACDxref48W3vy5Ne237d",
  "key17": "57DJ9FZqFnqcJiQuh1yMYTWr9fRsWfqhc3pfBh2ub3wvDh7FVtDKyokRRpgCN4dTvNh6sG98mqpNwHshBA7GuvKc",
  "key18": "3hYKT28cr3rXr7ybpVA4yZcs8dzyzH6m2HztaxP9adERe4yfupVhAfHKyZjPFem8tcG9avz7exMn6PgWXkG632dT",
  "key19": "3vU3wi997kqZkSb7KMgKACRv7TF9vSPueBrNTiFWQkA2vJCg96NgnUDNmdaHYbNF3vwGVKY64q8ypuGG19ooWpdh",
  "key20": "3gw1MY52GRhY2iwtkTBawCRqVLWi6q72pDWUDEGcrtp2CSod9rfprX8fN1k3kP2yes51BusLX6Z68XtSdxXiEVoC",
  "key21": "2UTejKuv68aQEfKCStxkbjnMBtFipeMa6Ry1uXdDgdDjVarCBAdAKKqzmucimHYfRWnxnwtwbVqZNq6gUuVP7Ls3",
  "key22": "4Jj3SZUQg5oxtnkWdQcmxG7pPoRT7izLgfrgvzEZRZPsiSQ5NnnhGFUy9xycgz9zr1cLQDVcmLJ6UMKKEbJiwZyQ",
  "key23": "sowUh1X7g85ZwTEuTzNMqFxvTEftmi3piW7trE9oJeLRcmLqRM1KGQdx8jMyQbR9o25G62TxxKKP1HqTfz2RNAy",
  "key24": "4Dj1XKpQ6a2ECZaXFABNGsEZiN27oyTRsoBxwK8e2jHKbc9ei8NKoTu9BJBBQhUjHebgh2amdAmPgkn5FKEdQrYi",
  "key25": "4Z6h2zUcqdoiNT1zVWL5x2JfEu32SpoNDAac8f4YbjLpHQxZRtfvZiYK2Zkd5qFiXvWtxDNcLxeR5C1kBEBhLaEk",
  "key26": "52oVJfkH8sTeV7DzLRMwbVsA5anBMod46aNkjMVQyncJweNQyWFfyjonsEmWCEaizXSTmEDMZQza4ig3FLe3pvXS",
  "key27": "djm5ebY8RAitDbj2Cbt9CzpBEC3MfwR62P4Lx5HTcuYs2V71StXHPCB7eDvb24wmSUCSJsCUjSce2vQvTE3e6q7",
  "key28": "DpG8V3D1nzcdXF9LFeGepgdbcrKZYddPMEYuL5k1VEgTCnioLxrRWEtcwPqxDZuCbVHvSb1bEK8zbt5Rw1MEwWD",
  "key29": "47iK64fjHr6HcK3vbBxAq6TR6fdzJAi3pkzZqa9D8p3jC8aEQxNQob6hjU1aTYfugNgAjb7kJ3BMT7XVp2e1fny3",
  "key30": "NkMKjbCYsa4L1oP9rcwKrbKTqrfWeprgfAgtdHB9X9qnF774ytkVRrVbZ5zCkMBqZQGFiHEKs3gcS4r6VQjbLs4",
  "key31": "3hjp3uKVoVVbkXkjhsHsZHkg113RLu1cdRaY83A6qV6bvJGaEdsfWgoevzxdnHj63ZRaXzAPuZePbrgpqr2Xq9aA",
  "key32": "5pBNWJk8g1BKicy8P5gPw5jTSsDucBXeoFi6dmAvQ4vf8LwL6TmuBR7M9D4LwqW2a1MqVR3qYEd8uHGQ7rjxBf6d",
  "key33": "5AASfu4gtjWcGGURZKz7gqkFdMKjLUuysUrDXwf1ffrppP7yoHZTn7ZoPJu5oDALMeKcHRhLWykBS67EpVyUAD8w",
  "key34": "2SdQr61MABBs27SD8hjDQHppqsG7eg8YLZCygQJquZeB9KPbqcvEciKk9nc87Jft7PLVRP2t1FaUPHVGVfNtMuNR",
  "key35": "4XvYRscVtjBae943sRPaSdF2XJkfS3Hk9ha9xyTa5BrPpW5jrvKKggGAxPuHNe3prFdHquAkktAHV7zEpiKNiPYA",
  "key36": "QD3R9Mi3pXBxncYe2KUrL4rfUPrSJxzE8WjqfT8q6VuWZhofyDxZke22mFvpFZVKbbjxQfTJztJUFZ8dDKUAhHa"
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
