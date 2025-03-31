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
    "ed5FKHyYHzsPv2Da1P2je1x2en3LTsErrx5CXzztvkUr6u9FfvQFEx7w2BZytLRxeGu9xDp6LqqDJVg44okEneq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NHbPjsBqVTShg9fJCHGGPp5oQNrBt1rGBoZVGkVucK2b7ySjoJW9eWYw98iYNVtMQEDysSmqtKgUV2gkJKBRRdE",
  "key1": "4GkwUaNjmYWPrVsq8othsQ3sujYvVY1u6Fy1tZMBJDsvy9FV2fvEz54AnDMZ3rLkznxeo8c9FGBpdvhxZxaJy6qA",
  "key2": "4wNhVjK5mN5crzHKez7RuWLNQGQGLnKiw3CLieRK4GJdSE5jcWk9ofY58zp1ccFRhY2p3YJQy1Sqzsq9up6LHM9R",
  "key3": "2WemK6jYe1swQBhGa3k76AHhLxwsU6g8xfBAmh2PzxSjzPwsSPj6C2L1bW6YsZ569EWjEmJV8dWnE9VrKTJB7Zji",
  "key4": "4YmEr8Vj2by5p3aJhE5CuNmTzEs4DzzAGSudCd9tJCTqbnCrtugwEzwN41pKVgBVisaBK7AKJTHifGwaGwb4HNrR",
  "key5": "bGYiGuuk4J3WH9t1C3gG9T4f8e1BK4akRnR3dLTdjHVPUXTZ8Sc77pu2m9eStStYL3yDqvurHJyqUq1HYEpmeTX",
  "key6": "bbaX16uJJSfNA7sWVDhMqg8ATiVtRUdYD2mGbYqaLuWDBhwndALCtcAP6a82Sa8qeahakxg1VHLcL1TKo33LPS3",
  "key7": "35qRg5jouh3XZ1J4HePBEQG72CVCR4Jb47QbQVXcNAHkdgqrJ9tNkdRKWSKcWJNC9rXRWRc1d7eA9wYAL18BhDcv",
  "key8": "33uz5z8uFGCLsWkyDeoc3vXEu5QFrBxDgLFoc45zAfsHR2Qa1XR24Em4B5r43FBGnYYFJmqXggR2xcXBbthAAUHc",
  "key9": "2zaXqZwngR1QdkL74U692kKPGiVHKSiaXJbctkR5DBJWUorTwS14tGxyYNHL8tLbaMSUHs8DDZbbCS6yvQhABTnX",
  "key10": "2UnFGsZafRjvBNGc65cEtPqkjwVhLmSYMZqr5EstpJ77MhKtmf9tp4VH2tgo4WENLmgCMJCqMSjvaZKdqhBd3xJ",
  "key11": "2dXrTeRJREBDaAUhTeQV67xkRHTz2AUFcjXEUgTG4GrTVhHeC9jFznmKi9TZW3JSuyYrAAxCx6UUQZPwifi8gX5i",
  "key12": "4YeEVWacL4WCjhihwCh8LkZtuw9KLSHqzx9ZmBQq5kbsVdynHHN1SMCiivegnqVw4FGeFKVzzTazkatE3enQWuFB",
  "key13": "4SMJPeFoYCQfUi1C4mCyfitAAeanq7nvH8ukhwUphrxKNZqvoKbV3hE1cdoiYokYkjEiY1w82CJHeafjvTfkHVjm",
  "key14": "5BXPd9D5hN1fmWi7rzk71B8mDfdaJr6o1tYisR8UxSAGqgGWom4jAYAmRKdxuSnSXfRdUnuoseEng6NiD5WKZm85",
  "key15": "3U3GMSnSgNnwc4CN1U6NMLXnjkxFWoCiuzz8RzcG1DWc5nVqsFH1h3RrvuESeNkCZuYVfeGQTfdnuCoLgz7ecbuy",
  "key16": "2GSpRE8VjTs5HsXWq6ftwYJMjNPrrknntwGFXhoEMmZCparJ9nAuZfQ3ToFSnyBMpPrEEbtkXEU3ut9gWLAHMPro",
  "key17": "5jqdfStNFKux5EvnY28v7Pseet4gpNsywYMGHLxdhmHz4UQ9URTpSAiDBprpvZaPEcWpLqHwt4cn2jCXgmskLhNM",
  "key18": "nWWur62PEpippwu141KpJGHxg8LpFYicYq3H4haQYA36V7UEf54APCCepg84VigVYvyjExQaYN5oKMYoKGZZp3R",
  "key19": "BKNnzc2hZGoBjX6E3dNSQXVpzAVWLyXm1YTWhSwHguTAVGFuz59HsmZmuXteyTjMDdYPJxFCSkmmD42NEYsSB1Y",
  "key20": "3MzuVCD3wta1jeKKFgfGtzquU8i4EGzo3v3LQRDPhpRF5qNtycqVFnyaeqnQLm8zeJKUs1s4LBHeEvzJWAzkYCEf",
  "key21": "3oXWWriJZgmUpehEW4tL3sUg217XaMAcXLkHTCCeyGMuPKfKLoFmSpQj4d1sycnDXsSV5sZ4amK8oRQ2MekinVf7",
  "key22": "4MmUNYKPBPzA27NZLeKeTsPTFGeqLJxtLWQGsYcLVPCYG346Ys1DDJv6ftKZjAAhfkkgwreFw7sHZb4xwr3pMk7z",
  "key23": "5tGbeudfuNMDM8sy3VkKydt836jzVkXUsWZ77iaoaB2tUNpmhWMZFraCM9CAiVMHgeoco6ZLNUWPfe6fqD9GGvxY",
  "key24": "3kJB14MpnEpKv5QJBbDiAWpHAbZArzmoQqg51AJztS9PL7J4kuw7pxutGRvvXLgzCmD7DHxqvCKfRmv6gedjmSFv",
  "key25": "rSRD9ZioWX4rQHPWxbQMrfX3R7BTRAFiyXQxEu7DJXzNvxLPxUu1HTmEkfohmczSob3CyWqumVA7hcRkMthddE9",
  "key26": "4ECmJ8QwcW6g5KCbg5NQp8cEsPuGzJ6F66GNzaQmd2eR6NXYhuqeNkXrbjGGDBggZXfy3rCcoBhe3UFLKKWEXEuw",
  "key27": "2p8swqQnWvkKQHDgYmHmP1kbwgMBCC8ZmCdjWEr73XHsZYHpv4dYQhaKdgTXAeg4tujty9kvmjmnPLosYh1Z8XKd",
  "key28": "2PupTcYCijFR5MjCEf7mzscWoP2wpwZygopYBphw717e6tpKrkxXc1aKsma3CLturyQ44SP9JWt73uLZUjz936xL",
  "key29": "46fun49bFi1dWBULvrpnnz3YRqz8hsdCvhqEkwpoG4acy4qvjjZ3XQzHTnKzLxKsQ962n19UN4WAx5hTgCXUR4XT",
  "key30": "3G1mVTjmux92qonGCi6KxcaWZb5QtN3NHpLgdPvqNHhyaiyJL9bwXyvUeY62Egx4LeRBx5LDxYN8anMdVisRSeKm",
  "key31": "5q8FX6RL8ZGY3bGjFKZHu5AdY9AxuHNC94NMgQtQBH8QukJstHYvyDrYvbAnZ9nSLzTin96jNLfyZ2qGkynrBdNQ",
  "key32": "4fKr7ghiaY6PjNy4afVnnRaY42yG8Ma79KzpQ2kRMv22cV1Xq6EUzU25WSLrEtvXCcGD12amcSGoviaDs1cWwrv4"
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
