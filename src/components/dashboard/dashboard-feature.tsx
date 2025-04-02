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
    "4YN1BKzEqhL5BaSgbUKre1YBf873m2aDiAvFPDLaEveXoZ8xRevjH2CAyWcfa5gAaFss1w8PQ6QaLNJcjAii77MA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kV8xW3UjznNA5a2caFizwgnC1WAGu1yV7KqwT2UK3ToshwGFd55DBkMc1cnnVpAUBbrGjyWaRVA4jo1HmoyqsSn",
  "key1": "5K6cTg8QNbFTUTExe7kK4EPmVB1F1xoSQatURMjwpKDLmNeHzzNFi8Yvu3nY4m637kuJLDAjVnSK2mzbWYQQAx3t",
  "key2": "ckwqPegDHk7bK31EgRipXLFxdC2P5Bn4p7MgrSG5WP2CNNd7d6m68MuPqbBc9jkuNJ2nGXXNjNzL8XkFxTFtjd1",
  "key3": "239H35fszQFqynPkGZxMobZLegcdTMLmcZcKTm5BQ7VuFUEYWnVsSALsV53JgEkHFVv5oKF3qgseTZWBd3iSneah",
  "key4": "4feUBbaXfm3KaQ7Y1YgvnyqZsCFyqVjiQ9thDeBDxKtijnCwG1SRhp4cUA6eLnzTyCPnpjeVGgZR7j7Lf2JaTMEQ",
  "key5": "2zv58M2Vyt3YLPnYkyjkPyfiMkpdhqYYDNkVvBQW5XSMgJzGe6Ash9xfPdiunZEmxVYdLwrDB52JhGutUUab2tFj",
  "key6": "NQ4729beUQ39K3YpCeCPjCkiwV3bFyX9rZ4aRxVvfwT8S33u4NUzHho5RvzaJUU5zAc2iBdkxX9ewaAjioFJib1",
  "key7": "5uRRE6RypUTrV6REHeov16hdaEiUL2rhYSVtU56jeMh6HwsTAnq61xotRPGgyuoXFUedowmUA3yC46GoGzchREUg",
  "key8": "2tfNjuKojg637Nth92FseXLMWqYR5g2RoacpSWBhoT7S5z5Go6r1h2EJU6USkmGUJonWogeyADSHaVNMEij2uKpn",
  "key9": "5sFsyhwdgtWxmUyhHNCMMQfFtR1z8Do9wR51QFQY17gYMYTqYtxkhUsPE9kLm6GMaNF8RFNWUJHJELHyEWqFtgAq",
  "key10": "v6tSK7DzoYDgzS6FWx4NGC1Y8hW8sX9GkwVfZpzqJ1xszF9YRVjZGdgqynrbLJzTLYLnYNULVzcZRcbePC3d66C",
  "key11": "5rHn4yK5TsAoGAF7cj1MdsFz66dWdGTSixKdCWoY5FKoq2uuAgBuSSBNVT1ib2QqpJJDLQwii9dQpDtBuUhLnmHi",
  "key12": "5rsQ1PfcE1LdL4zmRyhb5PUXfw9kopFQF1GAmSioBA61y7cdybHys52Jb7UQaADVdbhyraquV24bv9hrFAdbCBkh",
  "key13": "2xpNuMSdThsBgdMN7sHbYNMRfY999cZDkxKj46cun3aN8vj5t5j9c4TcVcxrjvUVxCYe2eSKWuwhJ9wa9BYJ7gtQ",
  "key14": "5T7XH18spKXYJwgRxunZiNYho3Hk86F2yfT3wPc8zWHBPdpmdXQkTHQt4ckfCFTuju38BQuE6ZfHdvFios5p8era",
  "key15": "4FqUKL95A7N1t28Paz4CFWaeMjtbuA4cAHRkzMB4md5KgMq5S2w8fj4nSmTQG16S4UWgcAccUm2UHHsjBxrQqPcn",
  "key16": "4p8dkZ9ugorYG925fDrFaG3hQH35pkxEq5jczJ4U5oGGBEe5gp69VDa46StHxa2CMThtECETZpxL3Hg4kHuHSHuB",
  "key17": "3yyEPVLs93LnLD8fyvgBdPxUmMBTwrkZVrWsXUrBsPgYJximWfiSRMoexUByFpCzP2DR4yDNkQ9ggdPvswhAubHC",
  "key18": "5JxcPep9mYvXWuMq2zsAQpJMEUU3PHbBu9KR3bUFQxqK8sissMYeiyvJeQDDHpJpZJZVS1jBzzCKzdXfqwMvWh4u",
  "key19": "2pNF9i66tZeozH1dKAMAo9f2qpP8tzWJf6WWEZ4J7kMsLvfk6MW8zVW1hvqbxZU6WBXzXpq6NwJ4dspS3TysSaCt",
  "key20": "2FAek9dmqvQgXA7rRM1AUCrhPP5tV48ZUNwWPxstqyGrEwxfjMVrLHTohmjJJHHk2Pg6kjnMymUeq19824Mq3v6G",
  "key21": "oMLRACSe3NUb8mtA8WsXkk6A7jDbrjDDs8DKULyUrQXuKqkWYq4dTs2x9u7aTyC8PjkVWT8ZzxnsosPqq1iugZ9",
  "key22": "BPpKfAQBFeWaxe8ExGgTTUJG16wib9QeHKJHjCh7sGfchKCJ2xJejfcCdu2kWnYQCqM9C3DLxdRbDVmtfGPH4qv",
  "key23": "2Yf3tHkzp9AwoefnfRvfA91DhBCs67ZTqGJz3xNHHU4w2uf4SFcPkVADG48v9JR6X7GNcmRt1qqXcsJBXJQ3NHm2",
  "key24": "4i65ky63CcPbKHeENPADr1nojFFvsPypErAWf2JPdDtracvf9yiNv1vXTDYu8Xo4uDgpW8e8pfGg2SxHJ3rBnpAr",
  "key25": "vVnCar9eitHM9Vevj8EFa5kpmNafU9wNC1SvsazwU1gP797XPrGLmm898RC6ihNmyANmb66b1kVLPhxVfkA5eud",
  "key26": "3siEpQVZLDkWaiF5Ngyv1aSfiZt45mrdH7hqgRNnWqGLT6qY7qA4XnUqVxwFqVJk4DkeRE45AbQx5k9BEeVTMuiZ",
  "key27": "DbiSf3DhH6FpiWC9rCcAWonhTYauSTn7sjNB8gBktG8cHUWwTUC6x17RVjcbze2kBvDmysRSxpGrjhZy67ySc5k",
  "key28": "3MVDxLuTXAko1bnxaD4pFktt2xVXu3bj5haqcnA6Qnuyi94qfguZvYvTVgETfW1ChagBpiZQoKwoymYEVUt33ex1",
  "key29": "2PpoExLduQEVj4q7ZNuEWvBZBrLM2tRynG9M1mzqhrjf7zFFjET8Xgv23xmw8easXrj8szVEPdrPgCP3LMHT4Z4a",
  "key30": "uXq4D74E11BSVCStSFW1jgR6M6Q9iSx9F6KL326octwc64LUKSfeqGVS2WazGkVqYG1tn4EEqGn7vVXmxzV1EU7",
  "key31": "4jwfGmQCu2GLaJS7f4Xc5U6eNhV6E3cDhts4M9A1GYixmw9ywFQGu7BRayw1xU2AjuTMeWUJqpLE8yXdKTPxh1Uy",
  "key32": "42xX3pe8NGhC3c6CAuR5h77yxxBtUEYETntX7ocsXHg2C1chbCKUbNdosviMkWnnPAj3E7akaV8L5wjwhLf8qe3w",
  "key33": "3C3gEuZXGr8vELuXEtqyiYvMVgq7tDJCbzFpDLhFCaYBfpTdKg4KR8EZicoUijRyiQdF2awCSYcFMKuuqZWKnbFs",
  "key34": "4TX4CDtyqMynywKcum9kzXUHa3qz5Th5iTYhX7KK5rveJKnoQjGqeSo6NUaL7p3Ynfrrsi2bPzoKHddSjqo6UbWz",
  "key35": "3jGH54CmFTeC6FpaDKjzqAfGvPCoWwMAsLKyNV9AV2ijVdEubEWpf6uwvUNFGTtkkPD1R3zxHBMA3Yt26JoQJkcN",
  "key36": "5nVzKuJH3rUKx2ZP1NoYRaQM6fEDoJLJAzYRzxHoKTo1MW9ZwUfjfULeS4mj8qGKTjKmTrBD3pFJtTPQEgL89F8X",
  "key37": "4ComcJWCMfeNHS5r17wfEc48t5SbGUyGamGJwH3zKuc435Kk4bt1E1Qag6PbvvFG7JWVc35St9oN2c6x3ceqeXLK",
  "key38": "2Fubv4ihnF4mCN2bo9NiQ1P5x2uKmbJVpevnJJQ45vDbFJ4qYuTYHe4oG4TzZwpEn8WGGBos2FsJo6G6weqdbQkH",
  "key39": "2TeRimhmnFweuGQjVKkKoABbLBDdhhAbkyaVr3k2FNsZhsad1jeZM7Y6WHRM7jHnUcJYaQfn5aJb5rCywr9tYDLB",
  "key40": "YZFcYZD5mFfPPEj9cLXDM4ZFQ16oP4Mnx1LXptp4jSkgFLadk9WxkpdMUKWxbkZt1pfFoC3FHvmm6fssZLeQdp8"
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
