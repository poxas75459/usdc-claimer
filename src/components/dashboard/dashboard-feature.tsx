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
    "4YS8gj8yxWTJ254v51FV526QNgW7Ru95xaN7dpFLRoK7DX9wuLJEURr46miJTKTVrp3EUn1T1iTfaKR3THgWmk3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntBxi9eqzGhYzh6PUCPCvcX2jA87M8frTPJi3KfKtbpJ26EjfjjENV3y9Sj9CS6ECsAC4XXXFBXa6ggkH3zYytq",
  "key1": "66Q7g7nCE9Gf4F7AmTsZrBcW36i36FhDm4pAV9JHx96zcoHr3qgePJWpmGUo6xi2uQGUxaLmsHh56F8RVqEhUMAf",
  "key2": "45wCBJzTZgqZVuGKHEhtd7otMR4UnZEsVNv3nNd18bdjV243rU2oSqt9cimdpZLJUAjuuNpm2SczFzJ1tRufTPMf",
  "key3": "iwC1hRuWudZbRgRaHKLw75bymcq2MwBo9cQdj3EXQHkzzUckqZ8hJUHcmP6a2yPMaf23ZDD43Bt9MoY7Hb879S4",
  "key4": "5kn8vGxHfynicdWUNNd97Bso7s6kG4bkVYaSWzDDmgSA7YDfow2bga4XpybY4QAM6h49RvkCmcUxUnnp1PWCifnA",
  "key5": "u5JdZAX5iYnRoPnurpDrFwSDejt1ZYDbCGBaDFrG1qrAppP9vA6syupKSS8HFUZXaEctfpracGgcfbBeYKfFxKM",
  "key6": "4YRJ6ybCnUk8QaPSb5NcEhiRGRZF5siWa9LkYDkGyXnRPRwJXZ3bPQfk1fRaM6GhnT4WgQ615ifHSw9K9FbL9jFH",
  "key7": "4VsXSGx34r9dRcT6CHWBJaD9ZjxL5Hmas5gCdVEZV5axHMM8M5XRe7hdV9X9EEo85C6uQ3uoamFtEZwFdnAMnndK",
  "key8": "2tPGFkMSg3Pznzm7SfVRo9CAaWwXwjRtQWSV5GXZDoWsVzsytgvPHfJ1wqeJSQoqknJGxU2zP8KuhZHm4neZ3BSb",
  "key9": "5UVyhPUUamek7HJG3A1zpru3NPjXGZG3Qgh6XgeJrqFbmft5hAjMhsJhn78ZcB7HMsQmGsfgDT85pCBjojVn9tYG",
  "key10": "2ePrkKMKyjng7xXV6e3gF16hY2yfTjimWn28c3NAn1u9KQM88nfYvjyTPEuwoQ1rqWKJrEs2kw9fpWpcMxA2FUYf",
  "key11": "3ctN4WCyHwgbjAsLEB42mHzqZ2rCKDkvpQWDNBXN1mzsWVC1K3aDF6GfSGtFLbKe7V2vh4bC4vMBwpGjr3FigK79",
  "key12": "vx8ifoA4dB9ePTviUNj2ARh7PTARDCUYwjCRuCokANKoirQ3YaZHdnu8t674zJmch87XZhVjyafneUypEHYZ1xy",
  "key13": "4m69s1MSg59iXDaHREAiEM7afhM8ChHsAFFFE8j52QWhRcJ2raof2fonbzha3xQeqXXxHTENAb3S5AskJ95aSt1m",
  "key14": "2hn2GHYvMmBjih5uKu8dx1NLWaTTH1SYaRcFKgrSjjsQrV1rM7XXjspRGjDaKtxyeiCnLeDLcsmyjCLQHGsbTX6P",
  "key15": "2dmRr2JVQr4VuLLHXv14Lc1tasor2RBeVrew5P1piozLeDpFxkjt9BKqYR66eLevW15LkRPPYmCL4j3XTLi7frk7",
  "key16": "5PQbpsVtEZRXK5YpwzYEGTqKmRyoF4Wac699DvCUssmN6MFPrB5XGFvC8w3CtaheKHGXPfQm6TDPws5yBVEs2D7J",
  "key17": "3tB4axvkvMs6sMqCeb88HTcJeKTseYzH53SfDP3kPTak5LeSQUEi5o4havRhpK9JmhJJ3CitkLEVAM9WWax9ryd1",
  "key18": "532caxZXd2ddMfDzTThaLvEa5eSs5FaJRmJBwvXjeGs8sX9Gk6w1khDK1AXM7jycDetFPo7B4vvqnNMcHUehvfJX",
  "key19": "5dUPExRAv8hF48APCdFbpX4CAeLoxdxKi4HMKTwraqj7GVAUfnqRbREApUno2V7zQxx6kR9kxDdo6PXc2pKQ42UZ",
  "key20": "3QCu7sAy2YC4Tyk7kVfy6FgkA3h5XuQczDa2YWWRN3eLjiPzENpL8oqsNjXvHzMRTtKE62u4LUJ93kn94RjjWARm",
  "key21": "264rSQtjjebwQKJkCBGkSQ2d2iirKfX1HL29fvzvRXXLQ9zWGX5EfVwdazyXr8NksvKoj5ex79K6KkEBzcVZGYn1",
  "key22": "2J93Rvj1PKjEVHfq4knN4vkEBAuaA7GdzB2UAxDMd1q3q5sJTWpdhGJGv6FvVaZpYPnUZyLvMGeQJLUKc6seHYeL",
  "key23": "MUifv2bi5RcHG7Uw5J27Jnr6SoAp33VUKGiANf7ARWDBqUr2BYQznSRDiZaTaB5SJxTwzNj6YbWyT3ZG59NVnNq",
  "key24": "4TX4BRZMoTXXYFdVVT7tWmxtmBqUx9mxg6W3MyUBb7izmTugPH6X73c2KhqkmWLNNx2ccQ7AzmfNfEPozk8yeUeB",
  "key25": "23MveesYAne6St4fvbH6MKRkUtKhuWa9aQTf2Eotom84torfUyydbBKmCqR6MfGPxYtkVrEc1K12mtdFyjYXcipH",
  "key26": "T1UHD1wGVuTbYWKoh6HVkS3UZhMbhR3X4nX931HJYW4RbvDjQzG7LredaKKJQyY7fasCoGNKtvZoqGWKJnrPxGc",
  "key27": "W2jpFiUCSuWrut7CsKXDQkiH1a4FXt8etJQVnP4XGWnqEJMDn1uyKakLnbnY72Sx9fNHMcTHxKoq4FixXSyGVD4",
  "key28": "JFKwBeEQu4AnnX6TfnCSHbEFXw8W6FHGh1tjmE96PCavofGBaQoLHpKwp8zFj1RHkAApw4dBgAjouPXv1pCau3o",
  "key29": "53sDTWw73dUGvnDs2ToBWQWQCufW728ZKFqbc84kYBieVwwG9EnVsMWEcztCQKbTF6y5TeyuETnDdmd1LL1fmoES",
  "key30": "t7bU9VVqbbFKUzejmbbgjZ71tZf3YLLHJTaUscYg1WSpXVs9f2CCLXGQtfhLKNGNkQHMm77FALPHCZa774jwHLX",
  "key31": "4KyYCnsm3deRXdyUhq5wXEfzxnE72pXtaRm6UDmqPxVN7XrR4wPtmEuAqnpfhSf1oWMr5XwshLE2u5vKTCMiRhG",
  "key32": "dYXLWbAJDxigedLDvTb9UZhogBNS7ue1fv1q3r41jbvjrrXBNK2374gDTF1PwGgQzydVD653eXYD5CnUARtEaUF",
  "key33": "3C2AHTUVXbJxswGgsz2uH1qKjJNcn6CzinQmZvF5TU5Rb3Y5HPXkhgdfvZ2qNwejvmXxhE5xoUK3XaVWkNFVHcxe",
  "key34": "2SAHYdwpMJwK85TysXnEo3HE5N66NQnx4LwDhp9emVsJ3cBxTMhvj8fiWiaqfo9C6QwWW8Gt3A5uQQiBYDZ6Vq93",
  "key35": "4GR997tBXir4sgJo7LwAkzNfoXnWSUmbrYtJRp8ohXA8xDdH57qM6gp7oTbLoZUDvEdWerFjWdu2T7XHg5WvN7hN",
  "key36": "55dXKZZPKmTE48u1t9SxBcP4qoX7QeRGRciRVUmWePBhTmX5SRpkZ5hTh6uNMbXSVjhyJxhpvFuB7oJJnNPowfuU",
  "key37": "Sg7TgpZbH7TD2R4QrsE3kinbrKRt4K8rxCJZqPK8UyMoprNn9aoqJ3xSf98p4ZLPnY6QE18AgUk33PkmK5KYHD2",
  "key38": "4acsVT52CDnXJAFWNmrgFBhXyWjiuurvYA4gaN6mDB2t3PigNb4LunNdEGvbf8XyggpXCpJRV7SxdW2kYRUup6J"
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
