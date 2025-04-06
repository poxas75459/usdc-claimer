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
    "2tzeDwgkk3ebfa3GxHwFsuxpk3TruWazXkMWvECBPbv94VgkGW3qcWmpL6umYtd8emsM4Jov52ba3Deww5mfXEY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q6yxmL57teGDZTuWSPLYB5JEiVN4E5kXe4wvPECCxU73RZ7fuNWgdF1zFdC3Vc81N2ae48KMME6d1Mp2ppN8Apj",
  "key1": "YY5mJBaMJwn7pSFarx8Z4ZHhpU7Q2QHGxW2BUXWj9ePYW8fgCRmBbbKempKUkWx3fzdyHthCD5k3bdicYAYTU4q",
  "key2": "25PXv74xs4JGMvMS5dyFuKqbmfegVqAsTVMAU7jQZXf7WcS12FAHzDB7NvdZEhcCPC92J1T4tGWfKDypkhxZpr47",
  "key3": "2V7vqp1VrqCrfc5jRBmxAf76ii9LENcvHCmGcbAjYhhTRkhPFBjVSLqfLftBxD1jZb7SY52qGM1aGnxyqNt2uPRq",
  "key4": "4hSeZYevCDyZDE9LT9fPuFKn5SPTsvkY4G5FxUMksJhpSMsW94G2dAuuBz7WNjXRVXeUfTq8U1Pd4txAL9phkckY",
  "key5": "3tEvprxsYpQB8S9Dfwxn2pacyZ4pximbUHB3igvDPXeQQQWc7AwondRpAMAY3W92RTeXDaQ2hrkdY2LkhVn5Dbdw",
  "key6": "65hz68MYWWmgjkf9sQvVLfLfjpyy7w9bjJTcBRJt2uGVtpUi38HZrwXuXZComGHjfArKS1LPaeGzk2QvTWkX4XhQ",
  "key7": "2gXoMEXHpBCrq972NiUQEi5njqf7PS5w6G4FrGkdT7kBEMALCkPhUiVCoNRK2y7ze9wsTQw8jrKW4cjPt7nuNb3o",
  "key8": "3uQeQsL7NgZt29RzfRJXXxDfgQqUxWkqpfQ7jEpYZVzEYqCsXcsqXQkdjSFxC5EJ2TFa5RaqfkSjeR3gJnoVFPeD",
  "key9": "5nnqgrBsA5F83eFcCZSytbufC8bX2T6ttREeFbvFPBvdXuHB1rS7uhcmCuAgzuRZQhNx9HFwCYmjUs1Qey1MiCpR",
  "key10": "5GN28hBjfQMCy6sPu5h7kjz67v1Ng1fW1eeL825mcqASLvMi11SwmhL9a2ejs6RxXn5ra8WfsvjKZ9jyRvTrov58",
  "key11": "oCQvRxxCMjvzAL6mLrWVN3C8TWEh82Qg5J5e2GAetLCECJb1N2WqUc5SNYP2J6uj3YRrmijLD656xfLQM9xr2RQ",
  "key12": "4KBXLozWuFy6enqwvfD3Zga5hYurKBYRBbPa167d1EFa8NJKvsNN3MaxKo2Gn1enD7RMwZNZUACddnRFBMxb9doa",
  "key13": "525EHEsSttjdHcbi4P6vsjYqpYs8C1BkBZQrfxkHQyRGpTqvHTQFtWvQRhxZiumRQNsCJbApyjXZD5jqXRsViH1i",
  "key14": "2kGtQSAubvsFUS2nAWnZCShhnv7TD2kHz4wviRcZNHAnXN2A39Y4yyQwwmwPsxWLQnTHdx6RumCv8jgQLf62PJpC",
  "key15": "fE45HChL58YFFyGZ9nyHgAgxmPSKt9ooFM7kEn4NAcy5B2W5uuBsxwsdgXKsoYUitV52eCbSwXmQeyBennypR1k",
  "key16": "2KfG34dhta16RGGV9tZWvc4Uch9wEgSMooyHAdQtrDrXfbqBzcsFN1q8eKX4XjGjcMpEKyKTNou9Rg59Viw1p7bF",
  "key17": "4K3U5erLycN4J1WHVR31Lewp1jEsfWHhGMXAb2ihnC1cv6fB5UEysgapatV27r6eQapVnYVZvP7z27Efp56MgRNS",
  "key18": "4ijWVUfEWpwFTjRk6Y25Hqb1gmCciCfPbLfmwDWzH29iCELpRX3yfxyJ2crZ2WpTLVihTRZTfSHR5ZXrem9oBU6E",
  "key19": "2fPPwqx2Xe6pVuug55H8cLVt5HitA6Y4AdSfbwgcKppLy2D5BsPspPdmi8LRWtnWpuHM7LHseFoiWCosM5VeT9kh",
  "key20": "3RbgVD9mpEw9yeCL83YK1rwfj5qKx2CLxoBs1N7ofZpjoqwNWWkMqMU9zXYaKK25RfeCjQgDnEkKehcpVqqt86bh",
  "key21": "2n4ije6wUyhsWW4i273tFCfijave3o3UxFDz25o9qhqLNSRct9RF6AfLMcvbQLnbBjcXZc17oJpZ8qHkMK4wDqQ9",
  "key22": "32TUPJKjjSyv9kkFmyJyxkudixQFqexk2y5TWZuVEibnXvJn2F3Htv1ErJAzL6fr5c4ugcEhYLseKdcKWGPS29cm",
  "key23": "iwteRMTuthNTdRSW5HQ64i1LQWJagbc433kua3fjn5p2GSKonrvwpxyJRhRzZk4CyJfgYBKf2uv7UTe5DUMwwis",
  "key24": "k6mUXjygTjKp5S1vred7Lv5GTeYNkgoSgedogcWTnyUQ6pMpKNkbSPPxjwsEUyNtHFNwZaBUDszfm4SQQT2xvX2",
  "key25": "4v2WANPzP54opMmfP9xSCSaL7eoTr5BEPbf5NaADVnt8q4UWnqVCQN8ZTXRtetPHVWdMF8ZZDzhdSsEyNPKGQmdB",
  "key26": "4j7WPjmZSSNhb9GBWnnssJYaLcEjeeTiyfoU7qUmAYbNaPt3wx5ffX6u6NNzUkB5p7SwNcqkyCDsXJJYcXtgN4jp",
  "key27": "36ZNsPWmBbtsp8ges962b35NMcE5HG54CujgCWiJyrYQZGupzdXZ9T2n7dZiScJ1Zx2MaESm3hXWQLVj3qAV7Y15",
  "key28": "3GHpT4qurRBxJeL7whme6r8GwwzGHK6Bxpdyn1br4VNTgmM1V2CwVweoMEiwcnhQiBS7bQWqRR3SDAaUeRGjf67X",
  "key29": "5YUE3FucgwBt5Man1uGs5tMrkd2y1cxtSHmMPFjCKQH11en2z1aenKQ3yQdy6H84NLDXFUMh2gDKRtHWjtYdB4bi",
  "key30": "63ipmsawfoAvZNwvFkqWaz1bA7fKsxoJEELWc1wVCfAZU99ZcrtjLqncguCYqwrZ843KSUB8KP7XcUWD8cHmTuy2",
  "key31": "63WZs74JNxikCgfgZzVubrSBZV8MhGo1CHhUMmgt1x5S7BEHc55r3gTvcWgWkMJdrbavUihGAVzsVUzAK8gydRPZ",
  "key32": "5PsNkWKebEZH8udUhBnzSXnBj2PLGkvMNRMSD1REthaB6j2KJpyc7Xac4XHqDqyJbTBH3b7LRtFYYeGoM5izboeJ",
  "key33": "3rdnrwNA49fDy5k41BVFwFqSkK9EShmmVbWWzaCG33XNBqHsgEHz9P8AaX3J7n1o84N3ytaZ1X8CEWUdxZH72xm7",
  "key34": "pZ8mJoMyAJjEA2YpXYi1hqF8sXvZu5dHZD4xEW7xSDXSMTTQZMe6s1cKhQToU84VQc55pdMqRMYdFtTkmMs9geJ",
  "key35": "sZER2NW8wjnFbesH51jo3RfFWi9utVs9JfS5NNENoxGssE2Bg26AQH5YXix9C8aUg3614UVqYTebBRWyJLXS4n2",
  "key36": "3hKXquAcASEtH2erWxDXLGypikUmCGv5sctncaMSUoVHY431o5AGCYoLTYsTPVMQWqEAuXxGuyAdaWFzgvvKh6qN",
  "key37": "XK7PGBULWDfZ3Kut3HFknBmxX9tmrmFUffMyDG3DRNB7J9AHV5BuVT3CSmZnqV34sLbCEpejSvPRaazGFcdMnZr",
  "key38": "3hDoAxxsHQyPMm8GWmD6VaW4NEGYk9sZn1sHr3VUN1oBuGXz2k9SU4rAZ1K1rpB4VKUe1DMNzoqFNsUzvesuF9jR",
  "key39": "46SML9Zr4Tdv8LftbL3eiBvE9ujdUyTY1iCrad1HcwTZaWckbyz7XSpz2ebee7sTqvqsCBfjMJTvZ17iZeACtMPU"
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
