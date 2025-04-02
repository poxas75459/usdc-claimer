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
    "4ioZGhZTSTSmnCxnYKcpNhF5M54vV4kioDTYzFWPeimUHhZEQJmZ1FhV6FZ4d2daPZ1mZDUBqFgFJjFTdqDSjWcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tfDkyotdHveFRHjPocXU5DyCqnywHvRZA7exjwFf16MPhUvLBqm9nySxUuFjf6UhuacGEnA4ZkbkHqLDxXDroDN",
  "key1": "3cm7Cavbmp8Ys3fqXDstJJYZYBehrqPtTMQRJj8Fhrt5onA38dHwTvBE3abVtXE2njtGJQFJNbLNp2efpRstFGJa",
  "key2": "5cE2ov4LkgycNrtJ7jSAFFJ9xuJun4KUznqtQRTN5EsANAJzMNLBwEF3rsqwa5SYCv8tMAP2xH4XXEDvyJ8nz4gM",
  "key3": "5WhjNt4Ev9oQVf8YMDVhpbUjkEQ4eeCUX68ziFTxF4J1ZWV1sCdCKLb65XCg4iuGBC7Yonk4tGcqPbMFMvvrEvpn",
  "key4": "2D9Lmj3N179MyRi34fkJpHi1hc1z3tdaYxqG9aUyMQJ23x7TpajV1wUwrb9nNtcVmEcA4nRT8xBRkmtBeip7tGQf",
  "key5": "41rWFckF1E9NhggUae9akYdx87e7zd9ibjyKojeaAahaqNUJrsjHokoF7VjGJ5UyGGXpSVK8BpRc1D64kYsuWSLj",
  "key6": "4tbYkkfiehajnTwEGBMXa8b7e7LErm1PF1z1cpLKK5EkmNFRrqYtWAKUFtb4DSUzNwrTjMivKu5gUJ3dH3zhDBUu",
  "key7": "2fwgPHUfw5xPXNeWPoeREA5uU4DsiWay8gkDmz7oqUsGfCSWkhryRUeEx8igXgKieruj41bTr4EUyePvWgkwH7SF",
  "key8": "xfpBAx4SfAyGmh5d3BBaFtnFwG3FjbBrCsosDT3wd4h9SbNWDrpPxxHtK4s6Nji7WLMGjcv7kHouZb6sZDAeQh9",
  "key9": "4pZvF2TLeRVuEtSasgHou23Ctia7ZvRxPZ7uhYxd8VrrQRFdd3E3FHqAQoPqgek2kAWPEDHXLqGBHxY6pSww2Ggo",
  "key10": "5YTs8bes6Hr81fkha1faHzLKbPxdrx5krKZf4RipzH1L86tgfngMfWfZHTUeGmX39zWQa1wFEmXDvqpSnTPjo5sB",
  "key11": "5J7RbLKd7of72f66yLMZVA1ykNW7wVxrYjhXq9Co7y15xGzQ82S7ZTfGchHawXQ48FuXgPrDBdChSt17UJ1xuQQj",
  "key12": "2VN4NWUu23DapGuPfbj43mGT2RMC6m3ZT8uXJqZ3FDwjGapgHV3P5qne2qVR6TeB78JYHnwG6wD92taRLR4YkZxe",
  "key13": "YABsBHjcPR41BtYymxJbv5mdWH4SmJRs1xUpcuAoiyrT8UTxBpPuSdbjYhmEdCzRbitJ4eijgfRHPYkykMaHTTn",
  "key14": "2KzCvwTJ5hsSCXcgUdYj8qXW1VQzbW44CfXXwEZ5N7FfLJ1nj2DnZ197oHUT2oR5wWAXkij2hc1EW63Swv7Nm83g",
  "key15": "2e3nLK5oYaYmgA1W2jPkDexEsrUh5FqkRUNmnMm1dC1Z6yb4Z3Nqz2dcwEHhdueHe5FVqtfFXFq9dqsjkErHNd6S",
  "key16": "2A6XbfuAgFWTUezxQAF6a1nyquMQgFDjcWziXZ5WKivCF7vDcU17DenCfXV71FHSoVj6RVDMesZLY8ZT9GNFDvBx",
  "key17": "RF58NoTv5Bq32NrECHhZiAE75c8MpsXnvtqX74knLS45TTZ1a3WRJC6mk2xsR5gnR2fnRekdbpXCA8wg9timdsK",
  "key18": "2d85DXfZMvRSZhCQiUMQXLFGK3aV9pzo5bc66XeLYstXnAvRJXAKQTCtvcRFg326v4dXsBca8QjqzWhCQnBm27gk",
  "key19": "3zzjWRnLqAGyZHMJadSb55yBXo7YQkdX2eR3DXamQfgLo9CnwX1HVeSrHvxMDsSbdMRBgNDaKHCdBoGhEeFc3gN6",
  "key20": "M9R71YKHna1t8VgxtsPHXyjvhrQgkvKZFhLHsuhM78fpRysHGRTyEPfcuwMe9maDJZbtDz2sq8PwcP5Pxsc8sPu",
  "key21": "5PwrunEeRh1GZq6QGfR66RUp7agb5eqd6VGrVE2Z5xL59v1JdaXiEEh8jCwEMXEckoKpmnmbzN5wq2NFssxoLmTS",
  "key22": "5N6XJ5JznatBVZ6GGWE27NFdgfeJAtVLzeA2sNai51AYeEzQcmWjpCWCibVFJvyaFZqdw7iW4MfT311XcCU1gPEH",
  "key23": "z8vvsbFnhByqy6LGoSKuNpYdt3Wn5aWeWxCqHi74suHZHnCS1picwfy2BVaDizGwN2ThxD2DgxinsL2C3nNsen9",
  "key24": "m98CB7QekXwrxMyA1E6ZF7KbFx8AxdZgamA7oxPWjW6QHgMfv79s6C9v2fn56NdcFa5TuCoZEbFTsdy9UEH9VPV",
  "key25": "42uo5yqLF4e6XkEC4vWyyhR9Xbuu1HVQ5FrkGE9MR3sWELmQjyaSiyiBoSiDbC5KEUtgUjBxkfWS7QctsvVaPWj8",
  "key26": "4PY4oVgQWpAwutr2bfTPovJYMpHRwSMm7b9ZFivhYb2tv39cUqF1rd1Y373Tfdpp2aeH3GUKg9cyBpdjZ5svAbo9",
  "key27": "5gDhx6gfTpHidUmQ4HzCWMV7DYb6xodXbvz7PCXw5NSsXDSAc69MjeNM5zpUBRkHpSDc262kjTmJ5yzmZ9WK2vpP",
  "key28": "3fHPhwzySsFBtq3j6kha4Do4FSPLTodpprfLQDoRoYx5ECTurj1voFpESpoi9twUXVP8rmaeiKycVhN1EUSLZhAw",
  "key29": "5VicKYzL1UZ8qWXDRCuVR7BgfB5stn7dNTZL2gZVo3voE7XqxeD8ZbYFMAe97tRziReXwVB6pB8Y8CEyNhcRDggi",
  "key30": "2VneHZNcLhbzRZQZrmTQ6b9iWW2m4Xe9HayugMs5j9Ki3jDmnKzrJMGRZjMctkFxmYxNnAdWZo7fh8HdYvqKmyLF",
  "key31": "Wq33skFbczdGjj9HUXTz2eWnhH2d6NffqTmLoSdHFpQUZMnZCMwYE4qhw3PXxwT9y8toyQ5KU323ziXLvRKVzAP",
  "key32": "3tqFEDqx47CirgGj8x12gJ2SQPGKQ7UdnBUX1JrHkpfNRKhQQ2UApGzJdALV1wA3ydiCUUXkGC4KZ7iDS3DXgeH7",
  "key33": "5QBnJVFapwBC9evJdT1YoXGWr7M4dn3XPddTprDzhrZqzs6V8HwUx124PfRu3bKJdE6LEh7kA6XvGvXUwuP1VKhp",
  "key34": "Qi7w3JZDwYhbwxztdxP9TwFeZgW3YagdA9gbKoobuu6kzKq9jorRt1csnSwRfKn86eUPZCd5aya9R4hYwoPrByM",
  "key35": "5XEdj6HYW8LYDLw2MLzJVPspYMNuSBwVr31BVjtydwwBw1xhY25ocyw4149QtdUrsgjraPWCXaRQ7mqNMRx44g62",
  "key36": "saZuMiyFun8y9LLYcPircfZWimrsZhQ6aTs5bBz96f9pW78XjhcUa2y2wK1SgqnBZfRnpYWCaZKb2xvNQ1tyk8G",
  "key37": "2Zj59kNMpgtSoYby7UPahRoPVTm3ucz7QZoijq9eGy22iCEuZFxcPrhMJeo2isypjbKwkKsPKiMjdWACMEqvCX3M",
  "key38": "38rDnGdgodSSvAFzbTmXUo12iC3AamMKaAdpcAqFFx3L5ZNSfp9Cb7FoZ1JGdPfQyszT1hy9WDzqZtyyFps65U2A"
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
