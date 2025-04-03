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
    "gyeDUSwdGGG8eQ2w9k5J79kCDdiAK7UA1F6fVw1DzaVo1VD57yJTRf7GbFmDPeAqhP9bZ4mLiwRZJAf3X4quvmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbDDyQuidZmD5ecFhotop59qopcv4dqjj7TdidKBk8a46EGKWtFjXLMiHATGXD9zwsKC4GRX9ktz6VBevGyF7xP",
  "key1": "24rNpbfcRTqMuyZ2GCoa9mmqnuEo5LGMbSXRq2Qt6M2pTYSkkumzA71UVM1gSxYSL3n5BdQh4qtbXk45HKSTJWy5",
  "key2": "2naH8vz5bMBRedVVVzePkwkWuiFxqw71GLMauKLqbEezT4RVX1gGWWGobJGJ4ti1pAxzyr9RPkARtiawYAF3LhYj",
  "key3": "3tvEfzZSNN52D2B6e9Vp3SY3F4zHgC3itbo1ppuRig7FxYSF4zA7AUaMbgsUwbdA2cBCDMSNEmajCMET4o6AXYuo",
  "key4": "MZ8BuEJ74behBdmMV9sg93m2uYfVeARmqej89QedATgXwvXgXojY2pDaSaMbuh8dBhvQrdGbC127ertSXHjZQMQ",
  "key5": "521U3QXWpYXtks5BUWo1C7zbD3U9gFkEJyY7GnniFUK5KormRS4KgLc5b1SKiN6c2Ftt2nZbg1gkqH8S5UDhFxDW",
  "key6": "44mp3mXg23kuXm1oUDYHEH9GqTwzxXi9YD2mRuJK3QrU7zT7wcFpCsmJRRiDZ2MfAmcs5aMTiudwCb7gTxfynbXa",
  "key7": "2fM77koV5SG6HJrPiKzZRfeQ9dKFSeMf1mqj4o3nmfSEJD4NAki97hGXngFCGehUwuiYSPxCA51HyUDqZnpGFNr7",
  "key8": "5uwvYMsF2tKNe3SCjX4U4V2bimSpbdbJsQ4cvdKUfjdVYd6xhgjPXGqyHXDSerNZ9rYNjB4KqwBWZC7C68cjuJvV",
  "key9": "3XKDicm5qPeLwtRJHyg1icbwyddBaL3ezJwQp5VJPJE2ZsuKr3GCLKPFUP2dga3Fxpxqsrxpk6KwQ1kDwPHztQ9B",
  "key10": "34foSH18my79PB7g382anrqmMTNymBw6jmaq9Djdk427g4GTZCJjC76iSEoZJ2g3CAja8UXq4Udh3AVWuekeHnHQ",
  "key11": "38LG8doGhKhJnee7cwHoqBpKGATs6mKzBiGq3EBpeibCq31THHdSMkT8oekafUKttEQ8TCU1TkHJ56PWzmR53eTM",
  "key12": "3QTJsoYfFbM1AiuH72m7vuQBbPxHnioypW1HGKrBEtR21nDY5k7duCfZJiXaAsuCVGXa8He6MbMjydAsfS32Ucqn",
  "key13": "5MqCiFGTSeDL9Z8HhA7AkZ35w3C8DvEodAkDwEdQMareQkCebSYpGzowULkoYcGJGAWwyi4EPKnajFHVuqDpNW1U",
  "key14": "4hPVGXTTRf1n5sXn6SaR3pnDWEtyobfwzJWz27cmm5duQtWtsoLycXUWkDkXxzRXHQT2Xa8AR5dao2Wbb1zbodoE",
  "key15": "4HS5RBCYfj27JN4jvTyj7jwZ79CSch1TGF2upWrxNfZRwjbmoJymTx1UCx1MvRiwqPLKrQDnhNmZrHBSjYLt2wSq",
  "key16": "5oXN8gRvSCWZ6HDikMf7M2WeZhLNLhQN1B37e4uBhsVteFhscnWuijAPaaZsYrKhQbDTuSuXh9Ty1rHh64PZPygt",
  "key17": "3uJfQckD1QfnhV44Z6gDFbHkBGo39nooHRFZvp1NuqUy9JPJVnQXEgYdw6DcejiiEUrayqE6b8qvHYnngHyoxLo2",
  "key18": "26dEmzyLxHJzWeUkqdkmusEEXD14VZ9fpJ6P2guwTZ869vzfExVvGGeGJPyAyWKttorKSTfdVwBjQyEXQmftpSp3",
  "key19": "2e2NjVa4vUdGsaxJpgzd3Gvc9s9bnox3Ni9xRanP1jet7p8XJp1qNg8H98wQF1CsbqHnbLwKtFu7ysiDFRrDaXaB",
  "key20": "4RotNGpMug7rVgxAeNX21LnJMTcFGf1QQD5VZXBZ32b6dNttDbbfjWjyERdk6ixu28BeCToLKTntCJepWkwtTdsz",
  "key21": "2zdnZ4WowPkWRL8KPGKf5r2J5ZQ4TMmYhMWHtT8jKyridasLhjyEH2th1HSMFJCnF8yL55fdG7jZsogKeGtq8fer",
  "key22": "5gt72dmYQ7TyNnvPQDomuGUi6sUMocQAb9vY6y1KPwTNp1jW9mAqFmXjwqeR88ZRUjo4zepq1o9vK6LZ2gRPQCyv",
  "key23": "4QeLtEuj16z4kgw8QEQqSs3PL1jGP2RiXwoGxzj7Hmq2S5jaHVypxFPjyxHFFX1g5r6oE4SL7vjQQjpvqFTAa5wA",
  "key24": "DXCws1SW35DZKMn3zGKhCQAgmz4ae4nKFKccaQTCSEXFnFGdhKpodDHNAyFKrGpKtGRjjUebukQ1efrQ6dGpxHm"
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
