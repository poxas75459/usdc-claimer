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
    "33NBBub68ECnJHdTzChPE622QAmMvaFWfWmxFucTb1HF8WpxRzNKXWaihqK9dnCEH55kyPAmEk5ryv5q5mLfM9zg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBAo7msAHXf5NkKtuHEDYQNhHFTVvFC2s5Pa29nhQcntbcSzC4LS23CsERDFUmxmYXrfdfGf5SCvu2ZUiyB9WzN",
  "key1": "DkS2B53ZJvjP7hp276KRiiBYmUsYerS1qDmRE8SJxJSUS7bpe1E8FBVW2YjE6k7TWxcgdATDYTw397B5ae2hit9",
  "key2": "5Cv4A2UjB2pGNkzP2BUXstb7hUMENYRAwwiar8BdbSomcWjfipe26U5Z4B2CtAnegHSu6YSTmKBFHc7cFogJvAm",
  "key3": "5RxGD8iQUVHYDTLFLvVUXAh9ZcVBGM4zx4HEVWCRjDa1rqGDPTNLFx8gnvo7SWxDDex5UuzjM6a5mcf5a1ZiqRrJ",
  "key4": "3CHiVEaMRo86L8TSkZKdQoRLF9DgvvG5R5NUwdR4WUyfXXL717iQ8P7g5WTyqjdz1v19CrM2Cawcvd13v47pX2HK",
  "key5": "3UX1rnEGJYmsrutdd4KBvEmtcKWoW7YZjnHbPsbom7yLu5iD88nC5fDndLDBFmyM7LVQUQjY49AwmihnrfDJvuBf",
  "key6": "2zhXkYePC6WGX1vhQtpDg2UeachJWSvd97JkNnregnoM4ykBFwtW78rWAM5fP7QYX2ktxEQ47WEgXJmn7EXRKgSq",
  "key7": "5B9nexxK5Vu9WrZbbJYHLbLhk1F9bcRp4JaxdaJ37cu7FshkSQXEpwsYpqeTbuCw8LmxLo3q96o39ee8sxY3JRy4",
  "key8": "63KKAenSrqRAQuJTMLsPmNCFPmChgD7CdBz1SS8zGiPjnif3YGnVMx3rdViEcVFGBsBcSV68CmqxKeBeHoRMFaLt",
  "key9": "3SaGZ11REzcthCWR1bxKTudSVA8NdK9Q8nLaUUWS8Fn3T54fQ8pVjcsQvvr4uyqg1EAzryPUUeAQDdnbtNfuvFpE",
  "key10": "2aMyx3YAs2rKSknqmeNAdy4uoYjLizPz9ot6Q9mKKRLkvt6eYShLndkXbaWs6TkdZhJkEoKTuyo9YjbazwxC3aXC",
  "key11": "qieQGMd2J65Dw6vmC7BG9DFXyDWYzKLwCZXrP4Xkmbbu5MBGhRmN2ddHkfCdZkAuiJzazXiViSaR5yqnP62sAKo",
  "key12": "5Ur9nTJKjCBJrfcafXcbNJ1PtZEhZQDTsHjKAvHweJpAHXUjAkst1E86vYNDqvnWHQEmG5pNVw2rGJirS4HJjFBB",
  "key13": "5MHUJqwENtWnUAjGA7fgKbLVHQQtnshoCrwqPmXH48Smvu2vyHr9txm9GGDZMDQvPh6aPTMkdSKCh1pXB7LBzVAA",
  "key14": "3bjQ3B8UJ5npMTEJuUXP5vwBZixs3fdxBeosaKicxUW1Ga1zkQSeCzBPwhn2LsG3YPxABaB9bSqwErU2PENyNqK6",
  "key15": "4GtU7XgRVt4Mng5ok32QXTYCkuezn45Z9V6KMEAdYh2U3BqgfzLpVr7Tt84sUxUBZQM3CGjmDKw6LLvW1aqfrjsQ",
  "key16": "2uwNSbKRbhisTr5FYkEbbUaRC2SRRazWHPnU7eufbN4mHApFpv2yGqPrgVTDgnBLvXiRDZ7B5Qcq9CJ9BBttH7na",
  "key17": "55qfQsVXQS6dTatT54N9qCqdgSep2F1QJhtL44453DqwKHGFgu97rVbXsrcyEfgJpCT8eFqcMbfDndoUwz88s5HC",
  "key18": "4xDyhxcTDP7f3EeFhjPk1ZptrJoWM26syeYcx4VfhH8msQkHUFWNBZffkNfGikY7zMYnuJ378JKwVUZaz93KKVfb",
  "key19": "3tbXib3VejMkq4FA6YNipzdzFwZuDTqVhPsLiDtPUpZHgp8YEN1i2RT9zSCnnWQZbpi34MLg1VuPFkrJwnngfjEX",
  "key20": "424kYcNSV1bPYtKuAaPmhp2jQyM492CfbgM47RTo7wKzozjyr6mH7rFohrERma7B5w8Qk9CBPuutYU3xXe1nRxbe",
  "key21": "2DdKWGSqE1PJVeMmWL7y44EYKud1JURavvw425cpdsaMEAbJXSTZju8RXsp8BwYGisMaJmSe2SAFtCJZpfrezHW9",
  "key22": "5iaREktbwwVpSmpnHMjtcGydufpAM1EBZTU3w5FYUmyG1RcXEKwKhpYZUMRbX72aEAHYs8qp7fFyRMfR2ewwX3bn",
  "key23": "5PsebX859tv96vFr6aCHxgCna3wXg4edXjSrAc1De7c8GJ32PN99PfcLq8hJwB4CAfb2fbyYsjTjti5U4kDBgdSK",
  "key24": "3SMQnuaorQq2cm7TWYq96vqK61fP4Uw6eSmRyhVehB6u3V8fqovwumgJLK4foa88MzFMNJcsMGgFh7RTsdR2DniH",
  "key25": "4jZ8E49pCX8jjaCSPxYQmPBU7W5ZNhvxETwQY9eeMEYSopkpn9dZgsdJZhaAHQxyG3s1mYTcMUZDHQ6u2SmBt5pU",
  "key26": "5Hs16qsSFQLfo6Zk7m66Mk7g9HJens8wYXZRRDP4MKA6AnUcZSMSkf2sYZKrVNh2vLiRDaFTKqyWDeVqYm6YzSqD",
  "key27": "4Ee7Wj6mD3akXe825RCGHr6fMqLvztdkke4342saoZjinEjRZHXKZkfkyWYZDsh7YE2d9yPTDqPU1sTqJv6uqW4R",
  "key28": "4NW2Su9JNhLu4nJV229sQjJ32oBxgA3Sc9ETeU6eEjZ4Rbb7QmR7hML2CwfzGKjnV4iV9XuEaXKfPvsZRDq9GwmK",
  "key29": "2L9BTyFNyWcpMq1bciugoyx7y7CgnXwkwzFxXyRv67McckQQX931uRMHQHRnQtkHkdiYqVkjzKvqyWEnLNLczrYb",
  "key30": "mR7WXp7AKdBLXNuvMdpfQNLFw6MosmFV9Y1DLrsHXK5V6RLnoU1zCgezVhDMZw7NK4EPLqSBUZDXxZuUhJwYHx6",
  "key31": "5faPyWi854JQi2zgT3mBos5PWa6wHKVuepPXt2oc7baPsteUjsuCa7A4Cu2N9n543B4C75wHC6YPTvXricpz6dhu",
  "key32": "44HS7sw8WBc7Ar4rJfZ2EjuJqWSRSgQYeDV6Q1tpRHjJrFZHXJDo9FgfA2g7VjFDAy2pDE7Z76a5QX3PtEXwocG5",
  "key33": "3LMZtyPjdJwywFp2zr5akd7wX2P8aCtRbuAeVEeScPyeHUNAZwy4MmbnArpcWMBWGRXrgiHPaGr3iXhbaLzi4G5H"
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
