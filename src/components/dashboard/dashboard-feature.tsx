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
    "28LCGNtU9aNUfZ8M92MGGbmJ3a8B2XLXUVUGnUC7cJJaCPuSWnWM7ZxgNQSDG48RY8TnuXd9Y5NHV7TNuNZNNA7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WpdaZDRkmgbonQ1eS2tuSfTAGmHPndzHx5ByJ1Qd2C4DnAhcn8qUTjX3UNYEZVz3KubF26N97LXT4SAhUiBxdGb",
  "key1": "5LdE8NfAWr89UqWskEb8dqqW8eSeuRBGyL4xUH2Uz6rXXeejLfvaYVHFTdusYhRKEgdycJJ9VuEFMtdVSJsndWz1",
  "key2": "3zunfsrmrW6FGnej7R2nw2p1mn1rj5Puj6yJ1uh1uFxNn4ZgrmETrvbwLw3NTWk9Jaij4YeHW1VjpvhamshLeS6U",
  "key3": "4DDRYZkpjbfodRdu4tzPgATYcyotjfHmULFGWSBePrNkErWxzJZ5X7tGcSWGr5QA9Lw9wDdnbGcVFCw7RJCsp9sQ",
  "key4": "53SkVbbnWNpL9UtLWECtEXyyYz7BysRJzy9odZAjVpgayiCpgdXFAErKtcVKWKArvqz1P6Dq2RkzPko2cd4CsRG7",
  "key5": "5pHavwBFH5n9zJq4BttGGpDRUHTsv8JULPPfq7roRNZpPamzLdboUAKvX9KsUzccnpaKwico93BV9jZUbYH1Mftj",
  "key6": "5NNmNfeL5JqAZ8S7s4WedKAxf6FxtTxNtV7hhBNryXyqaLje4wZyWiSq7QFZffGB7gzcWKsVE5jZ1TLMNbJneTqA",
  "key7": "4QJE6fwwe2mnbvqnafjH9WEBgaS4Tk8nV1nvfG3nWyzMPSieSdKCEkCxLZFZVWX6TCRGv3tE1RSUXpC9Enhm7rP4",
  "key8": "2oVrnkawwYr8RytYsuKakciQ68q1WS5ovA6vxUDLf2qeG53BqA2nLyJQZZM16zxBEPYLhdjvnCa4q5pTQte544co",
  "key9": "4tCwykhHDi3PveucDq6eAVi3rn1uCRDk3sXQNRNJUYHfAmtQA6yrAnEYVE3ATYeb7eRUAQuYqV5YVZWt1Di7wk2s",
  "key10": "5nMNwBdbSr72pEWWixi3V5zbadwj1sXwbLukirdHsdzhJXt4h9NjomyKvvDZfaChzuN9gc3a7CBqfCuDVkUnCgE3",
  "key11": "4c3TEutQMxCg5XKHVFyZTo8TdDT7n5V4Ph6yvn6z8jysBkGmZyg7cWiX6NQoKFVmBVUCyyE59fb29NLyQAjcwZoe",
  "key12": "Wb27fxJ8sjtXdryPmokQtf1aw3VqktUXLKLWQsLrgkQtvFKNUD6bPUuhxvJ5GTWSc56cqRdNxa4fyPmRq9oy5U8",
  "key13": "2o6U85G9ieSXzsuySucsms349XGyx4xpuXnw9DeehMpHKpCchZvKYFYBC3jA5pQUmc1d5GaPuqe2Qh7NnhbMSndx",
  "key14": "RYh5xMDKxgUHRpeyG8X2yT7jzzcwcRV6JkvzwT6x9wmc6sRbdmmDrhHzfM6z4FndeYAPSkzFHgpuqujtxgVhhyP",
  "key15": "5fiMASuCLoyymH6eg1V41CrunYVkwaepyRXRcABPovPUKhDfGqBKESZ7z4vepZaX7zpkA3EWjFYPVdxapmnS8mKP",
  "key16": "2YTth4CaVsixDipbzgVjUnmwxrzekWBzedTBbuW8k9qWuvB8yyg3xfNCedFAoaYH38jeazE9JFyVQMsbPXXry8TZ",
  "key17": "29eyFukLCPY6yG3cghjSugEV1PpC2zc3NzyZ7tWi6QKE8Zzyq85pKA8PdFuJ9FGZFafnQdktqQddLrashhH5435W",
  "key18": "3M76uwuTYKFQTat1YtXQjWkuYZxFirUjAsfx2y7pRsJGgdUPi8HyzviSKyUgP3Ynbun8zoEgVvGzLDL2BjYiRTgj",
  "key19": "5hBPZcZJBV44jQT1PTcZg2bdATjtXU7W5xUDbnEDmHcSwQX2cRoUbKo2HEoS5JPosusYiMabbp5enybEa2hjLYsP",
  "key20": "3aS1WGGTLYXPhdPTK9BMSatnvwuXUHSLRcNnTvMTBLLprkRou5RK6zCtj6reMD3ttJh3Pvxpy3pg5w7zvsTZMywg",
  "key21": "5wW1u5DdryUcJ9SYrJ4uxsVQx7T9yMtQSdoK9jWmX2ZmjmZPJyAYMXfW3QadTLjqcN7Srp1NchSMTYQATy3eCXaz",
  "key22": "5f96rmW1HcnLNGjBzDw9V5bEvSyeeihwYruh59R2pTnTAe9p3yPTRrqUH2Wek9iNJUxZWdZkhXmXLzkFfoE65n1C",
  "key23": "2u3rtv2iuhC3oAqjViRghuMnhLGE8Qfq5joX41QEUxwEA4psbr1KhiiSGpSKn3qFXGSpznuQbgAVnJVYSDuWrh4n",
  "key24": "2dUi2UNR4Ccuv52Y6RPD5V2hbDGEvpcHemRTcb2LVuVciQuP1BsFV3c4brobSFuXE2qt3fE5HaNoUHRqSvYdx76s",
  "key25": "hfrX8fTNEbjdvL9zmULiKYiDYjzYhCLSAsU7WtLFnofS6J5YqnqvJzkh8SLAmsQcqS1yAx55XKPT13tj9Ni9yya",
  "key26": "2GSgaNkkGJp2P6wGtPaEmfb7c1hcyR9KcMmatTSGRQBLTebyjBZYzCQ7iUbD2dF8Fx3Na1g8pPcKCt7RmpTkrwcS",
  "key27": "5rYmDNJpajYitQCZGJuDqgPfoBoXjLTGf1DCAHrzhkFTmwHCaiUY5ktbtynFkazEmsdQyVmF8dZ3bpgNaqN5HciM",
  "key28": "2kgfT1atbZfX1pnn3goQa4LJVdbp7a7kd97XjCjK4i3JoJcbsmThqCbDSUxM83YnHosP1EqcSfLyW1cuamBBqGKm",
  "key29": "kxXK8wnXJXCJKw7fLnZXwW1887kD7qUDo96Nxpms9YDHKaR3RBgqFYTwQKxdgz9Qm5rnWtWDKbrouadrVSGdPyT",
  "key30": "YDe5r9nv6bh72k4TR8hqvS6pThZDFrvJbrfYfymMSjBBzqNpqAuXCPRpuXqYoGmvFhyRTV8oucbWQnSvHRrkBay",
  "key31": "37dPhvCP8zJ6EnJ5dokozAzcrNwGUocMxw9AbNExcDW3axRQxG8JVXFwSqpeJixCqPVUFfyBRQpyhj6YC7GtXQ93",
  "key32": "4aZWvykUkaHsV2NQeVvA8eJXFZkApmd6KQQ8SMxb5iwk4FfrJcd3yroegao7tgZ3QpefdAGgirW2dXixuiJ4P1TE",
  "key33": "3nSNNA2QiW6rh1W5iMWmtqamvrrB7ytKiuLnTWFkB7Ktod71zPUTF2yvP6qgiDVzEAK6uuoefn5EdGvsripxwUJp",
  "key34": "xmopqqERodKF9A12NedUSsEGvuo4FJNqcea4j4XSoK5ps9VfHJBE15oTYSYCFPDTXX1qDx7y1dGvbmTCRxazhuo",
  "key35": "4Km1FBpAPZSa5THwgB387kwZ4x5RjtpYgeV9gJpoKg5K13Ubh7wWJJK3Z4abNw18LoFdXvz6JzstZWwnoDS9D8gY",
  "key36": "UzmSNSGPC3kZMTfUPicK57tfKUPFMxnuqrZRGnH1TcwUuRdXWQcYZPvciDRAUzdrxrK4ZuZuhJEZuwh7zjG3XMx",
  "key37": "nHjyNBsETnanwDxiGyvL5NGyfsKjycZVKeYKCdYeyWYs8gprmknt2B6xBmbX9St5SjvqWgCq8Vc1k1y1QyMvkzi"
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
