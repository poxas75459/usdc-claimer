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
    "2yR6JsTZFL6bEAozENZbQWLC8b5fmkcL7hXCsyxiFBWu4QVZRvx8UyWnaDDxvotCkHdqSTB2mPbqUPvh5UAKt4Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wFvP9pfb8DrUvQqwnArQ61vmcq8QEShRk8EHTaMJ7EQdRuFModMzGoHBPR56S8uz9H9NfiXz9kNGLCmNWyfYevM",
  "key1": "35BuAV37L5TYEFyiAbZKWH5hieGKT2YQKi9XtLgt2if3ht98skaaqrZY4pdKdKb9fLsLUPvT2pqUx6SwvySe8PuW",
  "key2": "556uCFnFnZnr7MvVAUv1teZroNdQsNWQ4FJgaPCBPQLW4hGR1Wttw8CJrEQvcxCHPqgzBNe9DA5e7pzLXMQEoYvn",
  "key3": "RUmAV6HGgFuJhUuB9mEXkZrgHph26yyZwgHepMYZV18yknseBEFDfCuaTMBd9FTZRqbc3ghQCv9dEjFUvm89Df7",
  "key4": "3BZiH9HpvKaDNEL5CtpUQqj7QVQVjf5LB3CmEYXPaFYYoDfThXbKmSxZ7Tk1nqHEu1eswuMtNxnffL26CTStQRFV",
  "key5": "3TZvEWSec37ig4DZMrar8vKYkzHtaxorjzzvFKi9e31ekCdpLN7abMU2vUeTkn36H9igp7CRMKjVMrRGiRgyW12G",
  "key6": "EQTjDvfazfCFXgQ8HmqMWuiJLjyGoiAuJY7jhGUeQ57N9vVZfzkyae8ZeSgNuE6Ka9BLmze98cYfrnc93H3Zs15",
  "key7": "5breX6GtbLXWyD7TQpePZgGmLinBSqHwpKgoGCTShhPfARY2H7YszLT2qLbbdkoEYHwFfVn8ytZfDZ1vcyetk1Mj",
  "key8": "4VLERNDWcnUuWv8qsVTXd4K13U3hSGsoStPt7h9XW4vtWMcGAvVF5bSDSQqpwwyWAvQopne4yetx6SnRNUfPZHSw",
  "key9": "2rfMF7kQraqeaWp5U4DuhwS8sw6nXrJGbbrhrUo4f6CEoam4cgFpytEg3mKpq1PWqQv4Pyh5w5ZnrqTQAvFqn1b1",
  "key10": "3kRxEZ5eyZwrBu9oDAGD7ELgGqNEQYMBzt8ckodjtkaAfRGfqcX8o8VbjEAesLba3Gfni1ArD7JrTgF4UYvaaNVU",
  "key11": "77atuedNfwXr9gfSsZJV6FhC3mA9MYu54TdmrGweDNq9zT4D1m9URJVJ9TopdNu1DjudbGfiamZEQxJo5s6u6Wx",
  "key12": "4TS1SpcCDAwgnCQorzEkyJuphGx7V8L25kirYQ97DaxHhAXBCNgYZjucWz5hGQMW83phApACa7jce5TJ1q1dQDqy",
  "key13": "4t7gWxw4wixqp3Aqc2sVAHsgwHerYGwChr12BkKfhVuagov3wByMiDE9XB6YSAyHbr1siddR8vooYmfCfjs7yuew",
  "key14": "rxmq9WmmnFjRoCT7hB7yFGe7un548mRcpJwRWnRZK3xpFVUnbAu6mwELWeedYYDxpoxJMEHZfy6DX8SSu4na1hG",
  "key15": "2pLj9GmVo7LTAZ1y29BN7QJPHY3qG6FYS1EkCaR7G1uXpiB7TQGxAjx7ocNPYP84J71in1otrtrzpp6iA1BRvrtU",
  "key16": "2GUqhGZQQNMk1vSfsmrnHiBbt7Q9jrKw112X6ZPKri9wDsU2ju4RwtRq9ziLbBkFqc3J9iwPg9TFp5d5oDvN1x65",
  "key17": "3rgPmT6b7QGX9CJNcUUA9siSuTz4dJbNZsu16HhjDm4NttaTQ2ucGwwcGoRzhMayij78S2C1kNxiS7NFYoLJjeSx",
  "key18": "4MFnBL88VfT47B763mQtxyG3PRg769L1CgJ16tN3Ao247tJknBM4b45D7yEkrn9dA14aLtahXQGmYBZFGkuzzNfP",
  "key19": "3EgC5YtzEWpKETaKHjb9B11wh7XjKSzY7L3U5rAJvUBJpBNvYWN2tbh3Q9bd24KdqawM9eT8Ti9P26aq31uyPzBd",
  "key20": "2AMxpjvgzcEwVKMQG11GAMYoz15dJQ4FE4mobsZqpUw6YN7kyxhBHSa62T9rVbhnjtBomEmcFrLuxL4vRaEW4RfD",
  "key21": "5TajX871tS1AjcbUMZnbrfEQEM8eBtNebg4e3FWAGRUbvykegF9vDqdJApEp6A5RUhdyaUpKsoABGuWH7TwJQXtE",
  "key22": "Ec8FSt9ZyWwyLZW8HJJbHA4Aqc6vyrw2rRGS4VP9TMyJnKk8C8ujsTA4hwXGYi5jZVCvNFhMCDRZVkA3o9zFBeD",
  "key23": "3zS57ZU5Tv1j9XLXHLTmDgGuMyot1gyskWvLZTvAnqP2gsDndw6Uy2L3JgSxZVncPgcSkN4MHvVtnFQv4PBvzoPj",
  "key24": "4tQRTtxJTzoREcnMtehkXfg2ioNMBRgkWaJppwVYVH2cfvrNf49m6j689ZRkuZqqtyzWFHstY9sdxN4HpMb2B9jD",
  "key25": "5Z1K8pgmun3WJDCzEkppGfvutbMS8WZnBBm3hXzC23wNtuZc7EyHhVMESGtbUyhYNDxVjfhtZrD8u4Nwc3nhqo6V",
  "key26": "4nMboSQ2yz5NyMwSyuAVHETySNmAFpjuHZZ1RARF2HbCa5VQgMJJoskL3yL7jGHy9WeP78i1HUpc5bCNeVuodfMF",
  "key27": "nhdg5oqFoJkRVmdKm9VPs58GAiBSE6ApoaQcYCKvyG86GrLobXgeY39huF6a7gEtRPmV76VaqyH3JFFZUB9x4JF",
  "key28": "2xQdmKQmy3Gqxiqp3iXEizFwvQuQLEkX2KdSdpdx7MYUQoc9iKgXvepBADRyeeUnCgsDXRXzSBhFsMa6BS6w3HZM",
  "key29": "51oveUAhH5BiEAng3EDusSfEhfYrBezfhvRNpto9qrdyv3itJXK1xdRLTgXFq5daUrPRZjZfj4HiBd8Lmkd81hwT",
  "key30": "u5uVwHFheMVZZVw9eqfHm9mz2L6kZYXioAuSqwp37SQbwCaZFM8uKA2SCZQyYtBfWFWzy7pLRVSYyjoQgCRAfwf",
  "key31": "uiDjfdFSG3AD9LaJbmawyPqfzbyvjLQy7wcLjjoPWMi1fSuxzamoGK6x3dc9CWEDA26ADChizGb98JpBXFPqoqw",
  "key32": "LpBukVkqPBuW1byWYq8SLp3dz8vcy8QYuVTxXrZ7d9ejPFvb1RQa6cMci4vXsjcrwznPTcUxfkAxnPerY9yvs1p",
  "key33": "4fnsqEvyqwLX4QTy4EpJKh2HeU42As55kRjfDbhBCNwMD8bKKSy1GSGYUj1YJfWKnE8udma2ydaiFrPsJLLPT9qG",
  "key34": "3UUbFhG3JYbX7ryeNoLCVrw34mQXi6nVSzbufsS4wDRZcjZ9Kbq1RjznaLSfQwnC5AFXifHMfgkjxJBVMyDqgWBc",
  "key35": "5AzjEpMrFPmovNqMuGmx6HfPPYr98J1ZDVQ3Q7kJAMFLkG49C1onWhR9USDabUfkFH8BwkZPgChAxd367oVtB2jP",
  "key36": "4Xf9qveY9ozdoDyWM8Qy1sn7os66XkorqB2XGeNFzf7WdwFWHpKLMNtPnH7QrS21WzEgYXN6Ff3n23c4F5sD8NsB",
  "key37": "4yazaCxPNXEsqDiavUfikFDLLYHRRdrsScpJHG6zKHZyvKaZnUiufSwLreQpK44Gxi7TZN3NUuvRdhLTX5hFBUBF",
  "key38": "3qAYDiAopvGBQg2dxar3QGvGcjtuFYRpC65m3uDRbQTYzUbHGbjjfPAUFNScVoAv5ytRvmh2Q4RkBCXtthFKXxpn",
  "key39": "64U1HCyULEf8FGawDGQ6Z8qeXfwVzRckT3ckjeFw32dsjf5W5hheQsGDqHKhRTWZNVBKvreZme3sqBQ7LnAGnw1K",
  "key40": "4UWbzqomh1m9bYzTJsBeNeLHDF27Cuh9JnEe4rDZKFdeUSTPqeXUKRTNSjFKPzQrtVFtHprvGhGdKkMqY14LkJTD",
  "key41": "4RhCRKoWU2EuJuRkb2jBAM9tC1GE6sGKQRoksPGAakudrR1NNn2RHrdxeXt2dwY2uomy2nFNo54VCpj17oC33ULz",
  "key42": "2HCzrBPMsxYaPUqCAtfsNEKUw8p6tkKX4xV3BUC83e4SFMDyMNMJbCmRqnRioWWtU8jJqbwPsvWDbb1qgKkuTEZK",
  "key43": "KyM1hDfofRz8f9KozDtQsM8zhorDmAWdY3wfxrmqNHrvue1feEXUB5tZrZA6XJv4e44K7DCDhbNcPVSzrHnMBTK",
  "key44": "5T1B13Tb7EvFfFyaq8YimMzV4BqJgcW8E3oJ8qqurrE85j6vKoyNYrSMQK7K9pZTezgj8XS3eEVN2dQqRrUDQuNB",
  "key45": "jCPheFR94paXAD1N1L59kXE72hrQx5S8k9sK8eWpREtu8GScDU28DMjWnF2w1zyUpZGXk8SQphBxePNGqDhvmuG",
  "key46": "48nwtfEU33DgrvrdpHd9t9jdfTepCeuwAUjzX61dLVrF2vZsBfm6aFQCBrJqfyNN45E6PJsKzQoG6izE1YA3oRx5",
  "key47": "5HyuRaZg4YFqtwEXFWcMMhL4b2HALEe3H9WcYj7pyTCd8MHi15LbaTXLRfS8ysgYwXoAd3BfYSr6tkszsU978sVR",
  "key48": "32GUnkqHFyctqjSmxr4VGJ6YyULCBSPqVHWBTd6XafsVkPUjr4AYS7miS9tJcHZmBqnutEfaQ2Wnqjn6ggodDTXE",
  "key49": "2dVrsz8vUtRx1m5xajXrsrX8MRHxFiNtdZp5rsS9QDNUs8yZPLnn69ExHc5NxFnAzmF69MLuTzn5r6YcUbJCVaNs"
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
