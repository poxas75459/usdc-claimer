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
    "5rxoKK96Te5t4M2WeWK4xkr4gkZoZGSeBSYkew1voP4tvyb5YkUoWexooc7p2UsS7NSWmZWV7zi82U6foFAzbHJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfVgYkkDYKZTrLn43EyHzLHgqN9CERw1s2sbo6Et1d414oYq5FXEJvgnYFMs92o78XuCo1uJ7YSjB8Uagb3keRT",
  "key1": "pxx6kQsZS7Pk2vWSoG6oYvZARCn858jFzovdZCrdopYePfuT8rVRqEVAaMcWFBXs27QQCk36QwhYs699FRx3qwj",
  "key2": "2vCXmY7KysGbo1QFZD17oDPTYhjLPFQZ3d4sS5AAQvseTfTSvZLPHeYvtQ9sz1qQF6PNQTK7romBznVsvYzKw2hX",
  "key3": "2oovXAXQSej2KA1HRNgCf8S5AuFdXGiQmcUwfD2jRZc8LqzTJMHAGM2eTSGkXsw2fdQwu3siTDdJg3ahQFUNyshp",
  "key4": "GgYf4vu3JUbLtVw8Kik2f1E3GW4DY93SzN9b2pfTYsnsWRPMVVHuMeAAPHxUVAgwuxGdKJHayMR2Sjmy3rSopFF",
  "key5": "G5QFVPqeqMGTsrUT5ABdJsTEu24m8EBZgF69e5JtgohJKjhmaMN3C1f3STiWTsfi8aaYqdE4kXeyoeRGm9BK9st",
  "key6": "3wcPoTA7G9QLExZVQoKwxrPYuNhPqESQL7EHnB5NadgWKkyjXV9Q2Z2QPAeSwMay6DA7DXmpk7oieLfLxd5zRUxT",
  "key7": "2yBDK57xaGgYYqy8o48Xz91H6ujAe6Umn4YkttofCBVJkdt9QbNk3vrZsrAb9LBMwnC5XWPbdsZ89UueSQSPPksB",
  "key8": "4QyH2h7EaJnkkU3rtA6hWHShECVLsi7WsZZMNSzrbN3GkNotYYCt5xuoAjeiEkrfJoWY2kZmycPjRoLDavupLvfC",
  "key9": "3W4w3BLrsERsM1STo237p84ckSqyxut11jy8ioJErvjd3YXNVZCsAb6kJpVtAxdLoVzNPbbN89zWgSF63eE5VX1T",
  "key10": "31AJjeBLWKCpBkBEg26MpGFfQV9pVo47Xz2sszUQkbLmc8aW8hrswbe4ML2vCgiYEVfMavBD2MMDxSaW7DuD9BM",
  "key11": "3horcz2bJ1bm33K5V8fWLLLDgGweXFVEQf5JfFHNt8UmrB5LR92Xv1s7Qu3c8VhmswJNPHsLEVY4f8yvPo5bd7AY",
  "key12": "3XL4ZeFUzs3cekbdRvamjHPjL3F8AGEUKa9jt5EMdMxnFF8Xwp8Jx2YFY2HkfxXgzcg9PQJzdjNcKNXsdtmYeVHU",
  "key13": "2zWkLWLRxh5YstXyiAj4BQDNchgpBiHdBu1LzbqHVZEyf9YeB5rfnCWHQw1FosLGdgcNTUAcj5mh3HWsaqiLMkVw",
  "key14": "zV8HTgcediGtKDNLZdH6unVMzab8LyJhvarN4RtQFJ1TKyg7Znht6zX1RxLJvr9N1t3BDLUohk2hgQaB6LZuLv4",
  "key15": "2JBYEhAexMcWXNyBYYaKWTV9o64fU1SaZEccxrbdbauUPdxjvE6CLF5HDHavBfMXg3FdcWSQipMti1rezk4K2dJq",
  "key16": "4dQUZoUpVvmRYbthqavFRqFpPdR45Pwy17Gr5SUR3Xv8RNYYfRCJ6w6Xm4ePwY9WB7wvoGGJ1joE8H4dSyYA6RpQ",
  "key17": "2Qq1SCCRQhb4uTdCvAWuMUcpmburmf2hNKmco5wnyA11zhLeDbeFZoTt2Ff7paABQJi7um3SiTdZxnTAZVLtdNq",
  "key18": "5V52XQkqmBT9wapofvRC8WdTL32MmLhYBcnsoeCgRmgNVNvUfJt4ygeE71xWru52TA9Xbu3VGTL6e7RrC2jTYQqk",
  "key19": "4wKNEj7j1EBd6nYB6zzeBfarka2FRAXDFMyhtwdsLnEao2RV4DgqkqwbtJGRgpH6SmspA9vExeuW3Z6jTzr4zdm6",
  "key20": "4idpE5XRoFgWsSFFHum1wGXzUjxCzZNhDqXXixZJhqeGqJjBd9oLhMS4oAFWxrtgC2tRKJMev9WQsHi4nrPbnHA6",
  "key21": "2hYfrT47ECXV1J7panPHKzhzMcoLKRCHLAV3HQGWXi2TWDiEueYe1KUNRoy4ZM8GR4VTfbwZCPkH1X5b98jE8CNE",
  "key22": "5H3ey9c7CxvDqHMXhN8o84Bae3Xi9K5MDg1vj4Vh294x7UgT67vQW49Kui2oe92jRKszWMrJtqTT4BQiDjtRqzom",
  "key23": "59t7BWZnzCCy8f4LVTkHnScrGXAv1o82L7XAiot5fBDhVwarFXhMrDPS3zJrXheGaAdRs8tGKoK7gtDdYuVWw6ab",
  "key24": "2d9BunXcNVvMUsxuF7dgAnGq7k6ftsW8hfBp2wM2y2T2oYPToJH34jj8dNEJkACfkwNsLqhrW7jh1qUhRrukYN93",
  "key25": "3XJJJsrRJCrx5Cz7r9izYKEHkCtXsAdRYKY6AsFC3ToM21JYHp8Bqgua4CQNTjVFpWE2TeR9wJFxamvRDvwbXXdr",
  "key26": "4y31qf4TThuGhAcZ4crvsuTMtXJkeHnurQVCYCZCRohHeRc8tdNjeSDUSDoopK4Ujzb5gceeUH21iPCcWdsu7CgD",
  "key27": "5KDgJBF5h1JuvHWWaA1rUp7N4zzVyfoMPuGAhaQsfEpP4GAEHDZmmv6To2LEsMXqMuKHjVbRLyCXDVKFaMK6Gzbj",
  "key28": "4qzEWRwQV6zvumh7x2WSN6D7oCYScMYz7QFa5aX8knEQmsJvj8EHkVbjya3hdTKWdDZd54N1qUCtcvJ6NTzBN41J",
  "key29": "ia9rca7krEtCZxvsxeXbGVsbS7DW7YDae3uyBbesccG82RttJzQAkbkWgYW9wYZqgYgbAcH4nZdGEX1xyFTF438",
  "key30": "2d8LaJ7mV8N5pcmAiyTs4Pp1ZgxPePjr3FnuRf4duaT7pi3gvnBdAVCNAJ7JGRN4u7yuiZYGNYj1d8HGubvWJT2y",
  "key31": "5rP1KLFkMKnQuWgNmWqE9hnzT6NaPmHsuP1M1iTDQbhr5Nk8ikbfu1EzfUHsEdLSbSeE6Fdq1s3nDFwPUFw8HDVG",
  "key32": "56cbBCWYAN8gDEwCBXfTTx6rLbdyYPL9javA68i6Y3BN59iKt1TU5cQhUBTtJAAZzWvnzcKTgWPh2jryjTE8aXpu",
  "key33": "2CNFaJqAxEgodi9exCz5BNfjt5jBXPTD4LsGutWnGxNDPgYNW5z1m3VV6UcPTg98hPbpkRoHZvrd6BpttQE61uAt",
  "key34": "5UCdRpdpGe92gW4R4YAtMFEUUMc6FXtks9xUwnDqUZjTmry2QcxU3x9gezUacu1qv6DhECKq8vBRqp5JYPLxvpmB",
  "key35": "3CdqGsRUDJnpHoZsmP627cKTp3ZQQP2waXwG18AaJiL5XBfix8boJg15dpzXPGr13cKyfDB3wi8eqU2SQYhGshRh",
  "key36": "3PsvCaJSaxJY3Zi4oHEMFejtyjZ67smbVopb5uwAmkSdRG2HP3nyPFKMi5SPtVA3sEsnutGau4mFvf9KigfDRTwx",
  "key37": "3oY447yivHU1k7qa273xGMNXrxwHEVgx7fV8Trsrw7ZKZQZAgxQQ33DdjCCUjNE7qCEV1Fe7KUdcbEdm7h5gKXyW"
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
