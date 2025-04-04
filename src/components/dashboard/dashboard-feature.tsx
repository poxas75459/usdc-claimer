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
    "5W6vVqvhYurHswVCPE98hnx84FpBAvXYeVzWiahDGCxJ1zDd9BVwqG3cxy8hZn922yEnkWLD1k3PnScoGaE1RDin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gCncnxGfquZG4u1QGecsMk4aM1VAjuMy8V7fFaDYVYGSX6Pq5p59eUV9jaudDQEoowxofRXCiVH7JpoNAhbbJ2a",
  "key1": "3JUWeo2VY3hNhpUZC3e3vHgC9MPyfs68Y5fmny6pWKXhxfcQC4CUoTzjhNQdyv9iR2948ztQW1u9EMueUbDZzrPe",
  "key2": "2EhWkNpZX6umR2M3HVJaYSNP5Nd6LU51DVUsfswpPM2LJNgsZJqwPbPGLi3sAwcr75r9W4PRkbc366b2rAsDiZud",
  "key3": "nQRDMJ7EeQhUCekK9kh8FP7JRUHDKTcTEEUdNWL4zhAE5uAnBWsHNfysaTrGFQnav6CPseYiwSMGRrB53ZuWems",
  "key4": "5pbPCWyeznEUiiWFxMVbnTQcYkaUsTAGkwZrrnfzc2F1UYZbE9YZAJx5LK4rqCyTDCu156CE61LYMFsvCWcuXm1H",
  "key5": "3jHUYaXtWGR8GGRnY2dJVNUEsNsZW2jPqdXRBDrLmRChMpfHuAwmvFbU25KjczUXeHXZzhUc9nTCD7XY3zZzatDB",
  "key6": "3bYrFd1Y8ZdUhgK269u4Mjo3etrLqdaSHeWxig96V8E28v5Evm9exyKuYiKj689tQo7QuU9CgkHMwycKPMEVWytg",
  "key7": "34y9q1pf71uH8g7CknGkpvb2MKtVMy1GAKn4BVVnayof2mCrsKAbkmdY6HVC4fCX1CWE5LTEdFhYEsr7BjY9HQPj",
  "key8": "5cnHMA6XCPAcgKHEaYeKQfqfPw1nonqEHsZrrzrWugyJWwMMVrX5ZRjB1nxBVXHJAfkY8r7w7XrPupvb4kk1nZMU",
  "key9": "G6ibY83L4nH1dbUP6LcVzWg5yQTBFPZmsWZbaCKkkmdjVoaBapL5M2tdJivyHvSbMJWmvmyde8FLkVqkmKLEjkx",
  "key10": "22dBehn7RkdB9d8uYvrfsBiff6JM6giqXJEg8PT6Lw1HSGjRquvQ7SLnyCX4QLVBjbTUUMu7xm9Bt5jYAm8spCLA",
  "key11": "2y31mZ251DQmck8xJJhuBN6at3FwdGtf1jwGqB2dUFZ6ZGeMhnsF4fQrLpFeKuYELVCknQvHaieMdw3NrqseeB6s",
  "key12": "471DopDJdaiuVgpBzY4sqsbs2esbowE5ryHayx2jAXu18TFZAP6sEgXnbCUBdQgL78W7Y7MV1za6LLVFtf8dNR97",
  "key13": "3hLLRrdT1QeJJ2fDfTytkQCJj7ND2KE1Uc5LmX13aKm4rj1HPw6iBNhvHWg6acPiQPZgqc1HAjG81ZMEdXVJVdzX",
  "key14": "2uA9TjktdK6i9hvvT1k9UB35eHtMsvz4scdqJGVy8p9w7GLdBekW1NpJvx7Kh3av92WbAoADFPszLvyeh9PgCL7D",
  "key15": "JX655zSDZPkn6EdYbnJkT7PpbubyxMhjRD49T84YH78XuvWCqVtbdp7s5Nc3TVK4J1bTe4M54kg2zHX5sNNciio",
  "key16": "4SKFgmc9L56eQHMmp1w5Rc5wTD8xGZWbwWNcgsySByGSBpgEpvBp1zJzajHz45CtcMYUjMGbrkoyGyKvXWmjpucT",
  "key17": "3AC75Ep8RD4KSSBNkweTKL5MTNY39A594GBNcm7Y1ty6FDWt9e5WkirGpKUtahgAKCPuyQG1HJT5YZBwvFAZxvJe",
  "key18": "2J4y3K8dT6rVuBP9Ft9xXbzx8FFhNi8X18BWfKCnZ8UWauC4ysUG1aM9o2v6H3kP3UBRy29petEQu2cPFaDgTXfL",
  "key19": "2gp7zro4w68K4EAy86jrK4D1QQNFtpiUjHXQfb4quWiZQwAGCXd86rYnh8xAFRy8vqyHFhoLxfZ8BqDQvXUt2UXy",
  "key20": "2LGEbyVkbz3unBK1Q6B5xjuHYwMHtvFjBECpyoqXV7UgViqxHTBs2FmCPvFQK1vkdrNrhsYhMbDea7WkTHKZieiK",
  "key21": "5DokdQ3BULnKjpPGKq5fnCr5ZgSnY7JkoNytvYmXCrATo18KHmMHPPnd7bpUAJJeL4yRLL6kmqC2ido59tG6JdtQ",
  "key22": "2Y2sKXP4i6kzHRf8kmr6fBVsgeGtJQekB3sAMDFfSQdhCSARy8ieSQEadtxanAmYNDRwvbDEk98t66zPzQMeXDQC",
  "key23": "5gEeKZGJd9qn6fqt4e8ZDoUsBrz4oT2iTpabiFrmu7o29FevNP4qdDGxb3wfyJU2jQZzHY3kgFmvQfmufzSRSVKo",
  "key24": "58vjJ1JY3fxAwoa2epmVhjLrXDDmP8dPgcbiQY2E4piWNJj1UE7K7DQnrNP5BLzWzvKpVCZofJr4nPeGxqBdMzss",
  "key25": "2hGyqqToBGpZ61P9eFhqvZN4VN2tneNmWHCcdzvv3WDgBfXwKxdQbWTcFVbXScGYGnJpf7xpVxRLHSRz5wae1gCJ",
  "key26": "3skasob1fzByEibU8dVbsnezwnVM8xbEE4Nu6bJDmrxkRL5MvN7k9yAcT2QccVbmdoYBg6Revw98kWecc5eXmsku",
  "key27": "5pTmnR4UnKq2BXDesK42y6KKund9kTbW5Rj6xw8hYFyDZmbiyMSRH2A6R3gvKJHugjNRh19xh7YEXb1Wjd1JZie1",
  "key28": "CiHqd7peZ3X4VNSjMTjKsFpVxX7r3J4bis3mtH21mcX66Yzv5o5QbdS6e6xYckK54ziG3y8H6kMsEprCju8AS8E",
  "key29": "5UkP6MncqrKxLaV8hp84HK7NJoGNCF2PXycTQW4QgWJ7555uecVV9DrUCoDYeQdGFL6LVcZB9yoGJsNRe3tnRYtN",
  "key30": "2XhyEtVZ5XYM8EhwKkafoEwjs94pJqy5DhBdX4CK34f5vP7ucvBE6tXe4uiL8pgKzNLp3KzmYx7u3hKdG6iZ4oTY",
  "key31": "2hsXf2632Yx6vL6r3SEmSkrNxCrFMdGnMUFeGJ9ndA7HpWZrq8A6seJCwgudVCb4ebK1NSki9ScrJbs6etLfwupt",
  "key32": "5SXTAJEPJdgvkyU61H3jjtCU1n2NdK6D63hHuSxHo8qoyHFT38H3g8RmdEjQqEfmj8uM9VKssKKjc7L2TSEGERPg",
  "key33": "3njBa8cYy6DtWy7HE4b5PQ7VP2aVeehoxMnCoNWPfgnrbZdMFFQY9463UGmHys8gubs7q5DQThL5Cvp9uS3GnRUP",
  "key34": "WYWkfTx8JmXCTM8nmmWbh3EwGvkpcQUzD8owppJwwP2vHUFWqoipKBdYdnyxPxZ9f7xmwetTcZXEZEVQChh98ru",
  "key35": "4S9o6Toiz13FytTzLx82viT6qQG9WjUSo55y8eR97g2GG9D5C9e3PuiVoLeafNKpNvYHS4xDj8p7dwW7hm5efQV",
  "key36": "4FEgB9bjZRAy419ms8EyNCXZQaN2ZyLDkrVVEcDJ7g9mN2dqvb7aQCac7ZdVT7wyrzJL2QGgm4cs4gqW8qA12h86",
  "key37": "2gf9CZknCC3hWPKWpQsvJCwDXX23pPMpE6h68Up6zj9y3D1N7H8KgJVsFKSWyvkBNfjLUHb1mdYQsvhk4jy3TvQp"
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
