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
    "2mftSne5QspAYG7ZqDhghJ3Yqu6vGdwwEY5wKC3rJ88h5q4rUfRPNgXPT7NEhuTe7WYgETbsNsEBH5rMRY8yUW6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rKazN2TVEfdeNSZFnjNUCeEibLbL7oi3YgSqj1mbTHitzDLGpZFtGuVvecxCKs1W8mfof9C4EKuAxcEaE8jaMaT",
  "key1": "4rNwWhq8ZkmjCzEoqnacX3oZNbHkSxzTjK7LfaE2EBv4wcdERTrz5dZ9cRfQrQB2vXvVfRhKU4KRMFjZvX41e4hA",
  "key2": "7rvndczPY4EE9frYy6SiatSmThV3p8dte2Gq89XPeex9tH99XjAaJn6PQbcW2ES3rYbSeyPiDdByBju9u7sGMj8",
  "key3": "5FrvufEgYKQgZ5uEqfrGh97TEY5PfpEqpmtNMh3sQr4dNpqMx3HK4TRFtiXxAwPeUiguhDWEhctApBi8yrJj1Fvd",
  "key4": "47NWqu2M53UzRHdDDK3E5XoqdrPQPNJJK1AsyPBXfbqVJteYZm5MQKaTCoPhJymFRtgYkxQ7ewrSNFE9kWEuvJr9",
  "key5": "3eAsxcPBfncFvYumrdbfUQgyy9qtcVrwYxWE3zv2eeW8qiuiGVJvzqRfq9NDRJgbZuYUxv3b6as8esjPu2ngUepD",
  "key6": "3ptqL2P7Xa9U85ZDuku9i88YVpXW7KvUPAt9EdrmA4YM91SQJA3guPZHjTEdT5UdM1HQUh4feeNJj11qhkKGrkTk",
  "key7": "2Bj1PkNS7ULQPzf8zoXgRU7oV57Hk4rJ4PR2VSBphhrt17xuhGAXYpmugXo78bwYCyvCCi1fAvfrZZPPiG2ZxC9s",
  "key8": "4EbqThLTvM2S2Ed3WGNhUC6w2iMAw3FYyUX38DAKL93JrcGwKZLxfq6PevrFhze6MasUp7nfj3eiX1b6ZDMUFDxR",
  "key9": "51FN6PXqPhrjW5FJPWJuKfvMYht4nC9ASSJVSdCD9SiJvRNwrZ8cd3W1qaTS8HNt3j9rpaGzT8sXwrgR4mYZdJmx",
  "key10": "eJddab2pkKYDwrron7tYdapJsKWHo5S5bufTskebtJDuaAoenfHEnLgcpyRRndwFg8nyrNivn52fDvLbaZtu4YG",
  "key11": "3BWeaPmcixwqm4nLXWu515v5Hc6FpPAJnEotrgAP6x4ucD3JT9YPuvTEASpMjLax3pLe9VMYSBf8wzD14GBJrn7b",
  "key12": "5cJuQArBz57Y54SPUkoqJnX2s1jNbPwcQ25iTAooagmC9vT2oz6cLrQzXdWRn2RwXCWDPvg3r8WgRag9cZAzTpub",
  "key13": "2t5zecjAnsHPrZuseLJgvY3eYSg4ahmmTWsaAcf1nWVd3n4xZgtUFYVoAb2dVaTjrTHJgvyohtNpjxBnswUJdZfj",
  "key14": "fUWxnMjRCp9uYZog9a8hj4zbxLfiqc4ux8dzbW17jxuLHdRB5K2myPSqS2HF9nLDBS2AUGpLzGsVD7pPubpT52p",
  "key15": "drgb2MzQMYKRT7PqWedTqbuKb5ZTVTkyxJzfSWKZWEiJMnrjU5PPddrBXD1tUSMVmSUG1DGvkWbZw8pHiEywV7D",
  "key16": "3pDLmqN9K1ZSk3CSvB1frkzvgyHRQ1hmLjXscEy9G6vgBKjyEFP2UZ1fv71jRycjpRbTi6mvbXXY58eyz6EZPqyC",
  "key17": "2prEYVhoZRmM6YNR82ivwg5zU8tTmp7xjQJTew7gyAQNj9yPVMFXEaL6uudf26f6TCMe17uBZvVunvQ4oB9F7DSG",
  "key18": "2xFRfvWwoCdqtywyXGJcvpXUbF9ULXVGe656mwZ3Uup9MFYnsMbpNznkgEGVQ4mrswTiBt2UM9mv57k283NDD4Dt",
  "key19": "2pGTTwCFwkdiSCqkPrxYbrot8PW5onXrAewjdDmDvpCD1RALh1rMQg1G1UMbqzwQdccM6MSpyLFFhQVrjkAaLU1e",
  "key20": "3t45D3Dc4dyisdAV2X9SqKXboocBCE4V4FCQcUTjn58dy6XzMdWKL22HWVjh4EYNr6gtxVvpPW6t3gUynb9p8dL4",
  "key21": "4TeHkGvbsDYKpsknckgJVERpKSEkBRfgpNTknyiUcCmX5DLntdoH4Fe96xco8YQxqGNWEmxv5zDbDN6yhqbiPLkR",
  "key22": "px1J6UhfqquDQmzFohqs2PbJJqkHtnJ1RAHSB3wD61h5amAwsVNeEHw7z98GMYKNJ9t9Q1hoPyY9qpZPUHwSEam",
  "key23": "417pGRpNifwvfQLbSkULip9qahFfY6VkLnNwGC7ELRFTZY3XMPEKsaBtb8E6dgznpQ2c7RPjEHy4i6J4h5fpNsYY",
  "key24": "65z3YDybJbe5sPgfCLSPVzRcHbZc88j6kqC2U78KcRceu7Nju5c636tNn8RG2q9i633D151Sjsmpa4QewnDZYecN",
  "key25": "5WqyQ4BLGJUGDTgh9MBGC7HwWT8hgpQStitXDrh6xZQU3yahUHTkT6YREvmtsfwW2LyZu94BataDQGzVULTLnRNu",
  "key26": "3vT3GKp6Cgjaq6nBf4n4sBZMnPBUUTZMdiHuRTKZVSKHJoZYF2eTaTSJmBANd5vu2vM5GSQUuJo3qWdbYbR8ZF8p",
  "key27": "2KRjouSoFjMh7TTpRdHHA8wL8MTqUoMbMarYsKongGq2QRRYrypfqixG9ynfB6JGCK9pdgVRFRPdjxcsWKqzQX2d",
  "key28": "4ur1Hn6aV3KLhrKUiK9uhFBfxXdiWQSYsXnubdy7Zr8u5eUKvsgX2VjbQH2JqmRgnxxtnN2E4TQBbXSoARQKSHoZ",
  "key29": "22LN5MdSUgZdvsDsngXqi7i3hVU2xi7XFBKfh29gH8wkeCgAhCfbAjkVP3hmXQAGKVkWQ4QLjCYTUNFP2i4ZhNzK",
  "key30": "67bn4uD61wxz2YZPLeq1XDeCeR93tgJeY93UuxmtjqaMVccXxoEGyPraBh2vrPFF1YZfd7H5AovgD43pq3BjZ1Ji",
  "key31": "3K3UMSnDadaXde1LetYpoJRJPXgQx93DicxpQcVjBKpZy8YJqB1U5pAn5ra3WxhknAhSwwWycd8WiCrzMMRsiVwj",
  "key32": "4CyteBV4bV6brh5eRh11CAHAeF6pRqAWV4iPvtUiyKcDgXESGaRDeRBeWomQQ6YtebMKpZ2jV3NBfpohn6HEFYxu",
  "key33": "biEayts7x6mVttuKVYX8kSXBisdpCEkM8LbtvnQwbFKkzthogcfYQMc4H8g6B1hevTjiQp8iQX9buEnnaRuNKsC",
  "key34": "7kpKRGQdqMdWPSh27t9ckZs4MS8dLkHQzpe9LVgse7GfCQs9cqG9MsxjJn31SVu1n9NPPsd9qoizvM6aDwWnJ1P",
  "key35": "4EKAAe9DaiiQFC2GEU6vvgCDYjWtshxt6fx2c1RQA7we7DNDxSuwB3pvoxJVeMfHNbmqzNjxFE9Hn4QK84wji8ZQ",
  "key36": "B5iuQjmpK5jEZRnSAikbPcotGJ3SoiVcYYLkSJUk48Wig8D395gE2pQgob4cCE7GBZPZU1mhkghCpbewXuiBtGK"
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
