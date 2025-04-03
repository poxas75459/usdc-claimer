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
    "5A7UFieVVeeq4hyb7pEN2sNX5vtSFkXWAXpySUpyZTahd5w63qq9U8vUkTAr7WazL71vusMJEcPko5VDkGUxPUjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Z34i97QwQjJ3xjveSx95cbdkovCEPdmDA5WxFxQDcqn1jnsEEdexAnQemscwWYGKoRa81ycZv6XKuszDL8zrYa",
  "key1": "2Ly4mz9HNEgxuCDsXmnYHrh9UwT9NXVSPsKC4RyNjxoexxPKbEiqi1mYncEkszRrare8iCvfrkjbjZMZ7yKF4m8s",
  "key2": "4W5YYJgtR3Z6dpc6bisAKiUYXYWmTFBtvGQ6CCYsuCWZFjq8YcJwNL63zXsu6Pg6JyE8pkmHJ4X8VceDDKwsf6ru",
  "key3": "2R8NsNmFSCx8aLsmtVpBaRsm5QBCasRZjfKVNPBZSAcVPY7bw4ArFzMWmYjSbyge9TwkEVr2KUM3qG4KHseEv5Co",
  "key4": "4k55PfapJAgN2Tmus82fuLRwBGJWRAMjr1EkPkcXi8NpxD58gksxp3NEkaDkbJXXE5eZ6rq5iSuLG5Vhs5PE1zR5",
  "key5": "3FrXaw4HkXzFGNWXpJaCsFxMCYb1arv63XbK3nhrP7MuN9V8RQEwMgH7xGca7pAxgQzEeM9jgyAmZGkcD8wuBg25",
  "key6": "SsjJWETSEpSCQR6VSePkWREZLUhsCRzDr7Gd3yFtWPDKSA85Miex92ejDukdfQMttfGoM7RK4vdQ9PFaBE6wXyP",
  "key7": "63pGPwJmvNDqePFX5oJTuPEkJhdxnAd7FGCSTbwn7gHxokv3aiXN6nYoDusEkxRinZyZ7e8wis49B3bT25WMdwX3",
  "key8": "4Lu8heJJJq3UpRcQBWjvE8ULvy1hR7NqWbVJMJy9eBjkaFPWZbguk4JNL28DSrRTdRb1tt74Fp4UJXUh1GaW3tW9",
  "key9": "RkQp6gWWQgDidBeD6XZPNYfZ7XWMpUNRJygJxUf8UH55G1J7xpwdcXWx2cBNk8oghSsEASuzTnXfFAfp2VtDZpM",
  "key10": "5R9u3C6UbLMn5acAava695hpZNzfgt8j513EbjrtNoCL4KhjaXW83gupPLrAhKaHjJD6iWjnttbiQyCgaAAJeSuW",
  "key11": "4kw6DCgcXG75ideMwoM5h6p8amTdMUMwEvfQRKrSwGXfHD4WAs87unZHfRcHfAKdmJReVFV2cLN5f3mV37pPAZ3H",
  "key12": "461vVoiCC4jbfFbSaNFDnoR4XCNMZNCKZ2fPCMjNFPkThikC7z5z1qUYsDauDNcbdnwNXvYnWWuXsodVFoLUSAVV",
  "key13": "2FkoCT86ZUHH8pBX6yVgRV95iqEWzu47vmXeG5DzTZkQhmmdaKrofq65ppy5xqYL4sfeGdp6eUFoFvazHTF7BxbB",
  "key14": "2ncxSwFaCuLiPp1yvf9LkkDQM9ZYuwTPF925KjCUiseogx53sLRfBUNRoptyVhgHwi53GzNMEJvcgu9J4eAhtsH5",
  "key15": "3EpNggqtUiS3MiLAXeSjaQNrPgJqWpwbB4ykB4R7uesVRm4ZX4AUndCHs3qc6Qi2JPjRgKjCMioxEKZhD66PbPsK",
  "key16": "3gZGSLoVC3E4h7tnLPF9BXQbKGLEQXg5D2sh9AEfrQdj9wu9kjxe3vD441DQrxzPavbHTc6bfD5QapBdPd677Svz",
  "key17": "2Wb5nCjF6sybcsusgWxVZLzhUiMBJKrQtuiuQ6Z9amURy5yjGVMRLdt9u7XNq7Q26dtjXzWUxvudoQDMUcj7vJrr",
  "key18": "4FS8ZS7D4A7sWRi4bB17yvyzRE2U8mrKyAu6sZWkGcTrM2y24HPLi61q9jpf8bijM5Es1Pu1TaWna3uWDStCfy2g",
  "key19": "4eXa39nFdoPSGaEPFKujGCd7sxDzU7BxnzxG7YF83oGgf31AGqg8Km2MSbdtHZgZxJvRJV5eaGDkHwf3TX8dH5wE",
  "key20": "xAg4m1A3gGBbzNWKwTHy1n469ewvfYMWoB4zgovGMSZ1s7AFuef9cjUTrrETLcCQKnrvLsYBpPbuN17M4wT3ZNB",
  "key21": "5PyvMefUx9Es6yVEmzEuVf3n4Zj3fQJr3fJYSSVYs3N7VUh8gfwSRXridgeEUtuzisryvpGSJRMR4rYk91JZXyWH",
  "key22": "65BNyagrhdLKVxUsac4Luj8GjXvJsVHs95QKb5HaNYo8dNKpFAvzvpDNaDLkRGq87VQikCVuSPpTqrcjn1XVa1JT",
  "key23": "KmCUvTngamhFMX1mfJhhvHvdGctZsJgvFac8cQh72eX5ynj5pvsRysb53LQ1fESkyxBXZ3zUQmHs4gQfh1HcH7m",
  "key24": "5Z8gtVP3VKf7tkPXE47jPxmC84xqwXgnnnDgxRaVLD71PrJkb98NxFSVofQJeCtyu3jqSvZJcSMYGD2qJaap1ZPM",
  "key25": "4p4212pJLYKQi3zURcWBQq7dPLy52chRGvHAYLYd3wxqRirgqK34xFw89yzrF1KvxcLWuL6kQS3krr6CkDdWdHG",
  "key26": "5Qsux63KPC2mhsZTXznQwKxyxwNYt82NMTGT12budZnVzbhh45cpzy7iPXsUkX4MNgHKNJA8PF5CGTs8NTw3EA59",
  "key27": "2ec22de5NjAuCfx13AqURFhCMwHtJfpmaf7uVW6qpuM4EH6soDQxT8Qu2524xfJ6gWUeuwNt7ScFk1Pa9vMtat4W",
  "key28": "2Uavc8NmiFRNSvfyKw893qgZhJQhgwBjAVXyBfqaU8aZoXfmHexxPKfcEZBncQgM2qu3gZDMufYFQNXGecyWCW2q",
  "key29": "5XByY24NQ1ybuwDHAyjrZ9uxUJzQB8QCyRaNqrLY2yVSw25oRnceRrEB2PGpBgo3xHAgUEyDC3R9yRCgJtWLarNN",
  "key30": "2pKKM5ZxCdQ9NB4eUtxheU6Cmhspw85UCwcGmKNa1ozDJkHqsKdQeaFHbb9FWAu5Sh6eenAeuMeqC5ePzeHqkNLg",
  "key31": "3zJLk4fUXDe6VnNTN6Esbg5pUkWHy5mjxaYWpnxSWfEAwks1ZroLKPT9pAUpwYGsQLhR3oSz54HVGHB7xAaKZtZH",
  "key32": "5diV49dLkWmAxiH25oZNpkcfn8ZpU1VE2i9Y7CAmfdVJpEjXbZfo9cdJSkK3iqc8gFfa6kyeySDCvjeUN1kVYzjq",
  "key33": "5EVHcPUjYWFcrFrs8TQDC3qsLT4NdL4hXsNN2bRzwmNbGU8joJ7jE6Vk47zXcw7uxTPDQoiwxTyWKdZcToTXazxm",
  "key34": "4p2NpTESWPDZGidKgq9yRPRkqUTTLYdRPdHeyviXL76VXYoxkKoQ1xFBw8oYqZMiXpk56YshZMmT6bxxscDJwHDf",
  "key35": "3KyqCdQzYWzExzXRFf1dCUQn9uTHop8HQejhsuYETquB76ijMawwoZxWeGJSkJKBk6KnRptVd7CCLBRBPbbhxLEt"
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
