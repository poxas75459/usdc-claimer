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
    "25hRZ2P1v4NMmm2jvWVgd9aqhdgncF8etQxPRCBF3djtHNJqZFAzS6ubLbYph3HsupyP1PpxvvSToeGH2tsff6b5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Do7oe8rBE1bwPbJnTjg8pnZZ3td5nhTWFuzNAQzA3ofydibXsPDX2HmYCewPKXH3eJf17P7bFFqvbU4CvRzzRzB",
  "key1": "5W8ujW5ZBbK2RXphbDWTMngDfiBWEx7i8kJy2w3AivhHTxTDZWaoQ6r1WywPkFVWq3ABcEdLSV7MVAdQpgXTDhEx",
  "key2": "5nbz4N4PoHFi66QnuGc6h86GQyWhweQCEACgJnhZLRWPJ2dEEPxvnhsaYpcB6Fm4CiwnNLbexxBcwi7AhnZotuM2",
  "key3": "3iBaD5ycZouFp7a1cWF9Y3AKFRfh7hT72XDdK5fEjGxMQKTiQoiyzKw7zNCC9GY9AqT41MGiqV7J18g7H35SLADH",
  "key4": "5S7pAJb3YNJDMA6raB4i2fTnzXKtMH6eETjtiYWPgcFLLbfgkgao4wFj1Q96a3vGXPq27dRBhcKvAmDqUpzTpZEn",
  "key5": "5k6WVj7SxgMERYuPWnLnC4hbhXsFvUh3S5YpBxDP7YXfWAHuct8wcGcnveAEiTxHNvZav2HRX8Ma6vy48VpByUyi",
  "key6": "2XTGFnh244W6XyfpYEiFTYeaTMSeed3hkXNMPbkhVQonq7KMGxy88FsFnncJbdApzmq9HSLw4nr2hczaEZ4XKM6V",
  "key7": "2kpWYisBEpNYT7QkfCT4Q13m22bP5ve5j3VLpGL1b8UAxGXDktyiJhgKSPo2dzVYQE2fbFGvdgBiHGpvJXZSz79m",
  "key8": "5oouuMD8st9FrBajot5xSkspaB1Duq75D5AWmZwGA7LToEvB6QvmNQCBmxjXEqvHqjXyNirratFUSB7NJ9XW46zP",
  "key9": "3sjf1CCnJtbUGMfE7rLWzNX3vX3Pdutqnw1Q2b6Kbcubsptu24gsmGvjeztuzbkzNwwMHdeCRgTK3KRnN4zJjqA6",
  "key10": "66vme2sgAd8wcmPVGEjHaJB7KJWRBmw25Ja86sbEc8iTMNMU1tj8cYdMAiD4xBAPVUmWdc87EAx8yEYJisepGGyp",
  "key11": "57kmeR5EKqJicqYxUawnniMesLx7qQp4LgGhvJrRAfKXcS4pXoANFzxrRKZxMeDAGZKDG1cF1xBh1bVjrne4389A",
  "key12": "3GpDrBZZeLrswEcS5MRcAPxiqoxsyCLiaGP6ab1ofwDmcNWyZJKm3bSW5gL16MEeqbWRRdWGhqiiNfTtKUpKX3r2",
  "key13": "62p6XAbWkbi47CjkwvoaJMZsF6rrg7UytH5HLaWyKqkSonHHX2XnzKy7kT77HvZ7auQj6i2yLmBdrpkHCg4EEnHP",
  "key14": "5LtbAsqyvdJNH7wCtL5ds5Pdsu9PAceBozkzW9cxvqEQGtYrEMQXgW28R6nGNtEZShf749No9GfL5Ev2uUR3biwK",
  "key15": "3GwiLpKZVGjXFH3nRcko7dyVkDhhoyBRKj2sH6qEymCAEoHATn1idigZWHcAZR1v6qMAdKVTRTcWXv4WFYvHngMm",
  "key16": "VzbLVx2sf96p1zPnUcSCfi2rt7hz43huuQjvjC4pF9PrEz3A3XqsumjahNykSHE33QnGMN9XSzLsRgkV5MmkXeE",
  "key17": "2wCMrKEAQdWPXMAVLFT25aFpCNkPWJuMEG4ZzoYQu1FEEaxjuMMzVm1xUdoBzjf6aGy7FhbHKHUu7kXdCZkHbrhP",
  "key18": "s2nUm61SSJ4UywnYnK2SPy9C29w1ebYxi8H5Ty5xgAG6uvPZpkdoriyRWGXtiCxhe9hPvg8gmYQXg5swhFiWH6C",
  "key19": "5MAvw4J9AsBCaW9SsjJVuVmfDpzEb3jQ4iW8fgRLM8p9SKbaRdjDjQsgiGGMpjt8Uzeo2ZRSbwm2qwXohB5GXRF",
  "key20": "5nAWGptgnZMuR3L7BEhwjJqRnxTXDieZU6U3i2ELDo1aDxZaYQBBgzZ32uguzN1wK8UW6t1ViigJSH24Sb6PKLAB",
  "key21": "4DfWxDcrJC9TTHEuwU9NeXJn5LmTbzRnMYvb9wWuzUPwdoGXzWv6h7pEnH3xbE1jMBKGjiYoY9UCJ1DzevyLKFsH",
  "key22": "251DTdh6fsmgz8cUChqYb4ahExkBfWcmecFrns5LZqywDANS9SZBQZceH5uAjX3r11v5n7X6muZPq4nGPoBKwhu8",
  "key23": "3hsLYfCPxHqrLNXwx4B27WeN9nU7b2mLwHmDtDfSmiBpf34VAPdF3V9WT9bnk54mZMPEX1izQ9EVJCGGUSGHsJkj",
  "key24": "52FpbSxUKWdh4RVkLn6SPQYAAiwJ9s4bVpxvMZtSiD3Gd9aWhMk5Xz7uzFmKxazEtHqnJPYDcVc3o5GyAXei9szt",
  "key25": "4jFjE8RozYTaVj3b6tXVLKRN2XCgSoNZjrzCZyrr6rVeRJiVLmkHp7128tTHnthNWXRxSCMKypKSw8b8x7iQxK3u",
  "key26": "57EvKz3ewqtVDpjVBUcobadSFCizTEEeZRDwdruLJ7u6v9eCvR471aMhoFUXHaCAGtJsG1Ej1fG3iF6aThPmpnFY",
  "key27": "wNEJH8DaV9Jz3FE5XPZjvJwCCFuKfZpLLsiUAn4ewcF6Yquz5zoJ4YGXrCZw5JQCbijS2Z5PxkGwvmUDSsxdNuQ",
  "key28": "5taHHcGb9a8JRTiXAuF4jfSfwfKajxPvwXqYqSb8cYVaxhmWVsSF7qMN8GUnuwjoH4MpMMaPMQXjhV2Yf75pHTV6",
  "key29": "4JtionRWYncVhRL5cSsAnR8Un6GjnanhhoN6h7AVqqoo6j9qKy2Jx5BNNVi2Cr1uVT5mEkh7Xfwgt6U4q43wR2yb",
  "key30": "2ed7P2aXZYMMDKGCDZ11XmqxWuKCNBWMQHHvp8iKfmrxQid5fttaJrvLhttX6Xog3v8iA6MSkybwvfKQrCfjhg1c",
  "key31": "52LMrGbUybH2f3BiJcSsKj8FKmGgY8yGDhTAoDewGzeXURCzD8ukfVjssXj5SjD2gBQJFLKtDzH1cQtPnjCATC7t",
  "key32": "2kdBRW3xeb3VRKHQtsohV7tunogmFxAidbW86snJHHUpQpuxJK4hCNAkMhrYus2UEBuwjAHYWtS5JdVRWAHYmPfv",
  "key33": "4pE5nuA4LdqdCZw33tRG8xtC2uatLZ5u81xapEncGjXmQjMLSZsQihNg1cSNcZ1EBGZeEj5yBDJZNjPobuDzW43x",
  "key34": "21wrbXM21rjEpxpSrFooknKkAtf9ns6Lri6QhPwBVAMBHyPNk3T3Q3T9duo7peGFk5CS76LfVaPWhnu8fpHnQuM4",
  "key35": "3Ft1CmkBucsx8fVcqpzQ9BxjQHprapweBYZ1sjST3NhNfwmJwZpx9v5V7HEEijWSoZH2HDd31nkhuEDFiMDEjjj1"
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
