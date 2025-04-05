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
    "3nye16aWgtriMenHLwKBTmsGWh7bCmzL9qyPz6hPoV4rmedYYA2XipQ8FYgQsZ5P7EUdpaFS9LNtsgEaQfjDwCfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o4VSeEK5xYHBum7nNaYrBEFBUvY4vC1euz22kUGCrVb71d6HESFP5vUzFeqPkuvtY7s5yr1aVGMVNisAPZ7H42G",
  "key1": "4sWP1MfnR2Q4t11e5svr2bHro88MwLgpqZd3rpEiLtro17A4AqbJXvJgQ4peL57eayEVBAEgjsR9YHtsrx21cRaD",
  "key2": "oLutStcbmi8HmDZhA9GpEpGtdwfvmE1QWqUL2qdRMkhXYzFQgC9jcjwMpBnRz4N1RKDZdjgjBcCTdVtV4Xj2Avf",
  "key3": "4hgWSkbpdZhEwBiWEbV5Y3C3jFnLp6KZUgTzciVgoWCDqJ4hhNSrQ1E4EmfimEtCvgTJmWbGHjG65wvHf12QgpqH",
  "key4": "5nBdczHQZVskme5T99z5J7fEtkwazq5nJoaEDHwxDoBD1jbYCrBCE4hsfeVhwBaB5uE45YVgyiWzuZppKcNJxgCx",
  "key5": "3ZpJy62zUw4YonGjyyGRw22BqTnkMGGgBAsbbftG5SbenSY4mTb3FhxWLx2ZHffBp4Qb6ZQrruyGQHc5CasATKgT",
  "key6": "4FUu7dx4i7F9qEDuDEsuHAiStuCAWUYjnMVeucntgdY5qLo2uRt61JmYSQXCRtsWQt5pnfjTNcVsUAjdwD21PbbC",
  "key7": "2NQPNFn6VwJd28sShribNhtSUVieeZF1P3hgjrDUc7brr3sBo2aBEx7oDZj7DiXztDUqdvzhJ2m6Ck4vUtVnUgH8",
  "key8": "4uUa1GbTpyAV78YjvUegUtdgDo5JCtuTCAn2NgDVqSQUAPhKaPJQSym9Wo5dUieSaq3HYZWzvKQwt9WffK1enQFj",
  "key9": "2ZcD9D8W8voZrjCSNDyJvwNzKKMFB4MiqE5qC9cryjhVtetXRomLuHFHVu3buf8R7xeuJxLjxRsmgsy7w74PRoKT",
  "key10": "52hcfjWTKFE3Fh4pDSTxoCS71FpR8GxeiCPCvfg3pAYmmTU35veK69yJ1GX4RnQK72RysqYvfrKPh3e7PZsebfHy",
  "key11": "565wio4EZY7QQZzMV8heJ8PMHhCjqYaUfEgL5w7oY3umgvgHEp5g7U5GwCobWo9ETjR5j62dHN1d8P49dxxvSbL6",
  "key12": "4hKu9VSyc7xL5e15PyQZzRf6VheDMyGwSwDoV9UFHJfK7HSUDJ9TtfDCLLdETQQkfKqnvdg1cojCsNGKS2Hb3yA5",
  "key13": "xt4TLx7kbGDrkX2HbmJdSDAimJSuamtXcRYfk3hjQ7ThEcRfw9mMmZo8u3ZbMeUuVvc9S1noeon2Jmq7SUBjAZX",
  "key14": "3U3jAaqCPRLHsJdVoVvyrhSvkiySHBdtSyTaEtHVqgfzSPgQBAdGufxzfNS5bUVeeR9yDYw1DxvAeeaDYYUtnDqJ",
  "key15": "3Z6jyANWr3VwK1W9ZW8CmDAdRAfVbLSYyHdFLhFFdFxWzxzSWiDvcPU4DpTptA5v5w2q3yrGPhbT2GuuyPLhYGxZ",
  "key16": "5XqVi9cncEMLkxXoMtvhQmLM46H6Wm92Dn4bDGQzTP1Yf2LVUNgXh6VWHsp7bU1Fc36KYy6Sd7vrntZkWPADNHcy",
  "key17": "3cDzGqiyqXWuVfhRcFFiNi9ga6WG89qk5nVVJzHqYjQbgsg253NrJfDCTW5WHfNo7z63PQAp2m6UZAbuiySMxjcZ",
  "key18": "m1wdPvNhvCQajWQwWrotHABpTybMn3eL6sUJepAnioRG7cWckQgp1vG1xz9hrsCTvDAnrbFEA1NwekSBJBbG3o3",
  "key19": "4fEzTV3CV9xLhabpzncBFpEU3JaspA4ZHMTSK3j7nJqJwdCPBupPBMDyvtUX8hETVx1mvShkzpVVh8zeNuShEEbM",
  "key20": "XNUr5iuxNspANYUhiSLG7WfQC1AkDrdKi37P8kh3gj7GUEgTAHChBn4ncLRaWQABqARVkVYMjtf7QMn3cW9CWNJ",
  "key21": "5H7pw2Kh6c9kGKjBQpM4QmrEkzuvbowyeatjgugwZEzYcT1o7pbaLXhDp2cBS5qnf5GfMpLkpn6ma7ZBt67FFQH4",
  "key22": "mcpam2XaLtDVPUVBrDMoPswWvceAYmkNCxjLBttdoii1VK5z1yMAj6Pbow2LoTo6wLbcBULMFHFfrttnLiAebKi",
  "key23": "2xy1WTumHBg6yiTqdcY4cMc3kMWiuFF6xnFNkxB1Jp2x1KHcoUAp6pZYsMpG7W2KGUinMyBepykT2XSm2WDKmdhS",
  "key24": "4whdSWBRRKCvNeMu8RATeXNnpWe94VaoEFfwydmcgzCiNvLjEHYguqQBbgnB6e3GwJ4zQTog6Kwinm7H1bLETZUu",
  "key25": "3LZuK2LxV2WHAZ9SwmEzLpidntsqKJeZGqJRwzAJSFyeGXEkSbKnJHUXQTwxcofW3vBRaaKEJCADhA7c2qd2STx6",
  "key26": "3T1jvacVw43pV6GvSwz4q32HkcjjsBqJs41vxvqvcCV6GKQ3XyNdiZYqJNsfY2QDjVyLUUoqJrYYkwMhS9sp5YG9",
  "key27": "57siknupFnpd5YaHMEHDw8RHtFRNGX9gCNf1R4NDkGruitcs1662L8z53oDMjB1qaWVSzF7q5nofBVwFWkqy22bZ",
  "key28": "2bQ3Yj3eaYncg55D3MXeN6nEE3k56TbLwmVifpEsM6BTh5miRdmomQ5ed19eGmVSYN7Lci4M4YugQe1nQvmTGzec",
  "key29": "4c5ZvFqLseBTgBKvP72mmZ9qx3dgRi3kMHovir3ZvT6DB2dP74g1t5TjtDMiiFzWkbRaUyc3SXwqs1u5RARqai4p",
  "key30": "3x338FdiGqo81xCTtdRF7kdUzsi1Wm1RHN9e9WshHURUpgwdU71h2XpCGZ3DLFaefQfwwTUyuAGLoVZw6x8E3bHy",
  "key31": "3S9oEBzo4qEEYFUEFSkEJXEfyPQf7ujXKoL1Ka2J2sw9Pz25t4B3RqrMjuoypWdmJhEHqUszRoVwuxgv5bGGg3tg"
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
