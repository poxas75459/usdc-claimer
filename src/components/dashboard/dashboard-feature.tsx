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
    "HaF7esF1p4qFvXAeihZzaHYim5JkPHpZJtmjwxNJykAGWt4SmJViAEtKLabsVNLXKYNphFFo3x97NXTJrjtK4DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtJ7kkaHQZT8Zau21BVxNK5goy5uPxQZJzuknJMSEKAQWe5gPDtK2whd1QJHYCRAwNbGe14FjVD8Ut4xB3AEgkA",
  "key1": "4b5g3TyXoqrg8YcTDksQnfG8LC5ogSAt1aTmUS74DZn6RdV7veLEnfHLZcEby54cvVHWgn4S2FzP2qm3Vx3vj4pw",
  "key2": "4JZZKyqmnucV96gooErpmi7AxsgZ7pcuq3mGtkdvQJ45g4spajwAxdUvpbhgrWjWYptU3a9SWZ4S4sqUE2X18g6Y",
  "key3": "4yvJMCvvg2Dabo7P5WA3tKfRktAQppj9XjmyYBrpmwVHaz85WR2Ck3yfoMS1q2Tj7zDgp9UosimBHnnUEXxGd38d",
  "key4": "2D13V1gTJ95RsCtyde4iGxFKMZ4G1ucTPUdVjhDxTn4Sk2kRTpjsrRfFXab5SA351oKaqRPsMUcxsa3X9VxgVKUE",
  "key5": "34snR1cmYpp6U3FtyccSK5qwHh18AZ8rpvaD8EuQ2KTn428MMVAsPdzabnWjWMANUGKMesd5C9zpAKe2VyhrNH6a",
  "key6": "394dX5cBybt9AG2kk4dhNfiP95BL2Ws3r3GA6FbH9GHriikTBFk2jg9UH8bmPTLztmaDAc5NtkPZt8fQHoznoB3L",
  "key7": "CHiBXLU3vRAtxxfsLvSfUdsBuSzqE84JzdtGQ5ik8Rhwwo4W2FRenwK8tG9hrgNo3B5pi58fyYFQY6vEtMUmKRX",
  "key8": "5s75RjGLBq16sJeNAKmqbGxZw2buXHwnfWNz3LigepkwBq61Vxr7QuGcRnqRXnw4mYmgU3Yqg1nmYJzcF16Nuhj6",
  "key9": "5oikV9ikew2sswKjE8usDfunUcDBBe8cYXpGDzmfZer5pcHShsbWBmRnKDUfnbN9mjvYcdwsTt1sskAnCNthREkk",
  "key10": "25VA2qJqPF1jVEPwF6Yv9xM3fH6bYhdmqxQHiis9YWuuK15zSjavhUQYCHH67DcFZzpkHNrKnVS573PmFMELrfcY",
  "key11": "54u89dEyGgnoWQ44x7Zj2Y4v51kMptZ1ubdjus1aojMbH6SyNyEKmVGanscS6x4PE5E1YzpcKg76Sp7QqsVTvhE9",
  "key12": "2sUsnCBzfzwbVXFEVGnaF5MLn1xdhm48bn5fnQn3bR4dqJoXKWsvE7yAzS8Dns8ho12wTXx3HMFuxBWGTbRRhp3p",
  "key13": "4eg6M7mXza1dae9TY912xQUBmF7rWArLQrZwbDizaDKSHJ3j8mZ1phco3emQFBizbBq5gJPYt9pNBsiRt6otPwaH",
  "key14": "2hugWDGWANhzdaxxMwbV5xKhsEGjmsmJqJr4CNmiRamcxKJbT4KEx4o1Q7zfH2fyMShfG21W297eQBbqz8hGzbAz",
  "key15": "j6SjWzypVQT2cXP9n2wRdQWni5XDMsjtjfxbtZr1f4cJXv7VERY7L7h6Q7Um4i7SPkNXQQ3BDfFbvRxycVT2XhA",
  "key16": "cpjEm9fhv41fTXRz8nAqg2VDWXVZZmUBkwN8ULNtQHbpvrt2NRj7bCw5CLXmifWCGtqJEUFFmbQ1axipv1ox6KN",
  "key17": "2pZeSBwT8ewAMHtsaxNJdZbLBY95L8Q5G6vdWiE58xVnAA4HfMAcDtvC72qvN2f7sHE4Zs34mydvhReAPtfsgSzW",
  "key18": "4ea1LziRyFrsCqKawMZuKggRXSVva7WtHy3ACv2L1tHH3GAVxDbhMscQheQ2GUbHrd3e8VGNBwkjFm28VYMNCFXX",
  "key19": "3Wb2UZ4SEZMce6JBqbzowQeeb2S71n4idspBzPb7wwLGjo3cCbbZ5Dmp79sWEso1GoZjNR6NmVNjj4tHNqNgpeW6",
  "key20": "2PfgZ7FBPwMVsYGXwph3dPRTGkEFNsBg7bzgpqMBCNQbxxXQv1hCtsZSYTLPjt8xU3Zh2PMCJnujnUoRz5og75tZ",
  "key21": "4NDgzWhBE9wrSPKoMeTKqX1X2cXJEGaVYHQStNPF6hYtoSJfVWjTNeBeUbw3cPHekEHEWVqsS52xCJEMa8rT3Ekb",
  "key22": "38sP7Q3fnZoZvKNhc7dcyGASAnUwYKA5eubPhtfg2t3wktWxv46mcizc4X2jVSi6BGd7812z17B831egWDJ8biEt",
  "key23": "3Z6qgC7ybXi5GtEJs7oqedWQkvoWMukURS8kBfdYXofhVv2M5qG4UGrMyytiETPN91obHDq5LAxp8RVVPFjQU53a",
  "key24": "4JxQBig8CRQwh4KuUifaDdvzDrTUkKpne9U9aNzVSkLtVdZ99UHGwVNZEo8iwdHUYFWrP8UrcEkgbUMChDTxYdWy",
  "key25": "3TfmdfEi31nB1YQ4uRyfG9GMYeqFpZreSki5wbzcdSEoqTkD1wpuyj6JBWenFUxCS9SjosHXHMKcCvevygzmAvk",
  "key26": "2RFprSr7xayezVLzjw2QHxmhVVKGu7W1aF2noUvJUDZp6uTd6EuxH2MYCjJWeMtjHnbThEHDkLiPQkCFkwG59k2f",
  "key27": "2bNbDgMR26eaipxXMDpYLYs676guaHshCbVsLEm7wDBsvfNdixao1CKvpyzAKG5c7mGNnAPtjUA7fMnNcpsAtCtz",
  "key28": "55SZ6VgaEz2YfZ58iqA9qUUNTsX89pTuVgH4UvvEvXpZ2SuRbia2AvLMLUUSsGe4uBUUzuUELZ8jv3xubq5K5dUv",
  "key29": "5XtBbtCJXbL7t3d1Bdj2eo4ZKF9QVyaJ4EkjQ7xy7XGcnSVtdGwCdEaeAN6WCcC6WJKKGTs2nJ8dFP3hNo7kyetw",
  "key30": "3Da2Dk8gJRfnT9cJpGkJpMhoNKEwMXVAwPpBRjrYNJkGVKp9JU8pjMrZYqY8YBGGJQPpCYWM459PPLV7J7BYhfAN",
  "key31": "3uuUAdWw3DCt4j8imF69Ff42atGq95LaR8BJuKafHiPgWVxh6BZUDvmNaqzzwDdLTkmTr9g4J1r7EUenEmqNU8QL",
  "key32": "JoJ22XqYZpULvaCqW4V4pZiYoM2rAZJzSac9KaZEPz9DrWymeJWEQAbLYmPZHEdHBtPrA2yPLEnNj2KSt8hcG8k",
  "key33": "3m9MjRBtVQj35P8FJ4BjizUiynh3C9fVg78hityRgNWZRJBkKqa2tMzKa72opjSNXjSndfKPMbRso8NaLA4hFMyX",
  "key34": "24eJQHaDvuD8Gshya1bMKv5ivoegwr2kg9xQF8C6EnKy1YpkBzhUjChBPtdA85RxRecXgY239TT4XCqJ52zW8Vw8",
  "key35": "5PdvFWzYNPXg9Cqqq3XNra5aiSh8M6fXMJq8RH6bPgk1f3DacKcfzoEzJzJFmaGN4xsuJK6Q4TKopJzoUoFNZBv9",
  "key36": "5jxpgVD9nAsGVEqHXHkixqpFUpSYqf9ohoyWX3PXru5GXz8unHPRrkd98mGCVSvYbLyiHz1a8sWXan54VCVbok3i",
  "key37": "3XmDFfZhjh1fYfUq4XoG5pwjovvgRv4mVttBD25HcoAJAaisrt3AN7kPo4NdqXkku1HrRs94BPGBGFSbNp9KqAi7",
  "key38": "7RQeUigssjJy85MUgbNzUgATrQdXZc5s8Yfyht71KbNUMvEakSeEmUcZDQAnsPXZmzcHXUj98r8x8T9Ni6bGAe2",
  "key39": "2ffmk5re377Cab46urHytPw6oqEQmRbwNSpFFcZQXkaeVY6xvjLpwzxuuqSYj5URJUdaNxC6JZ7qdYnoHtHsrhYu",
  "key40": "5AfWK4cehjHfy1i1gdM2WA1CN78K7DnBpNKcLSw71FULiNBoEs83sEhviqQxPAQLJfa7HcsG6dUnGsqxGRdaz5J5",
  "key41": "64k6K3tanXSxe59bP4o59J1eN45eFL3SQR5wSehZc9aAdZW6V9vEdL4q7JA4VaRMBEYt8avLzbxFBZcSCWthc5gz"
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
