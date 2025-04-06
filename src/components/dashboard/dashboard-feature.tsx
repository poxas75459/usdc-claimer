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
    "2VS2AcTQ8sYjoNCxSSGboMSDtmHUH5WRRbMXUYvZ8eGjQ2XwvZVLRG5vxuPGmnNAmwn6n76WNfkcxE7CfXUz1tA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSE7791SrubT9dgzxoAEbEXcv9HrTY8oDW6VpwTA3dVVmdcJ76whKAdFK9mvPxm1ZbafreAaXjxYk5kzYA2AUSf",
  "key1": "5rGPzNJ4nZoiW69qUKxaM9dj1R6ZjBSBX27z2Qu6Dr7aMV4HLzP2MCATXwWv88dCdB1Caz5ndGSEo2igjzYzKQP8",
  "key2": "EppUrKetmfXgJ4MbDBBrTNL7tnHv8iN8BFe6ZJni6moigQ8gb8tVeT5ovoGUCd7NHwNjUN6MysCTCNrAW88gYwB",
  "key3": "5w1BWS4RWWwv7AMctaMpCWMJXZFivxnGHDBdYaq99GSRGnNPTRB1ij3W6JLvgtNXfJdvBGDyad6kPvdtLWUncqQV",
  "key4": "zJruUAnNLxCusyE9fmR4wea6sPoEqEXyQiHoJVk62hYGYtiPcfJDn3CmeJDcagvb6LUhRxgNQbYY7NTfCXMmWTM",
  "key5": "4MLEyi8DY8zvdpEDtLek8ACQ33ifRSozbycTJw3iRXgbDZnSWmUQvN3BcXj9TSf4tqSh5WH3a5cJkreq7ANwcXc8",
  "key6": "2NBw15nWGWHCuiLFx5wJgTzgXWtztGd4g5nKxaB3vhgb8KoVXxSq54PerduBzFKHrLeTgzkZ4ZK1EwQFGYALo4fj",
  "key7": "AxfgWwQfMu91vesHmQjCo4b59EihKtUmufQLCxasjFpgMAmiQfAB96z9f1TdPTcwEJxCej2aAJQWdZvpSBhgznL",
  "key8": "2wAbBJkwXrNBWGmBhKjeDERxZWnv8ZwPUGN2UZNUJnF7MMTjFwbXhUDR1rXzLeDJ8cp8GUaufyPrH4xsTegYN5zR",
  "key9": "3xDqvT2REsybsxHtKQcTcv8MDty5Rkp3T8Zs3xRBo9Y3eSX55zbb571DUp5jfjjNpgnhvXjXoRJc5pvuExdzcRMa",
  "key10": "4PgwDnwBcE13y1qh3nGja2B8do8fWcBMDY9912t1SZNKfLf2Y6PCLfv69wArGLta7R7n7Fid639ei9QRirESc3dG",
  "key11": "26kgcitqEUyfKBZv7dZQjaq9nryn5k3WFN6at5HAXW29qFYyN5fbx1JBFz8QfZngHwwPJXJX39xmG8p4UwzVZzHi",
  "key12": "61j1WbFH1UDtyzgdQn9Uza1JUN1zqiDRs3BbMe8E25Rz2j9aLk6n6nRwTmDmt7zYn3jq75pw615m3dzaLkRyVFfm",
  "key13": "42xhwgYnabLB9JTgWQ9PSUUoP9aPmvjgLoWMeK6SaCyvtX4Udc2oBYD6ZuemNbpYRw8N3ivhdX3GYBBsCMZQKunf",
  "key14": "5vFbcW9U9Lvo8Pb1UBNCucRnxmL9srknpCBkZUFfw6uqyfe2xL6b8pi9C8nmvAjdhSPqwHmcxuST1TroLm3ce8Ty",
  "key15": "4pk1TyaxjcTwCVX7UxbvxHsLAGotNhEg2Je3NLMr5EKJ5q85jDj5FQkZCoDk5bDj82zCRgBCqWCzGq38o9M6KvQE",
  "key16": "ksVJgzNkQiCQZXbyzERAZ8xb2icqZNUDCRAm5zRLYHBw3g6DGcH9hE4PV4My4N7kiv4UcZCu6uAfTQ812qURLxC",
  "key17": "wdbWMXrWF2CdraZpLZcUJT7spdQFX7orheP9fj577xditedhrEW53roitbbhqbaGTKj6h3u8JdUrTcvNhM6a4HT",
  "key18": "27zELT15AN9WbgGgDspYk8H4TTb8fZDMKngv5ajNEejX3Lz14yV3X3FDPRpzWEwPdmArezLQms5i2Szr6U8KnrSR",
  "key19": "eyp8oRaZeBNR9K6Xg1TZesQt4ugWLmi7Eh182WmbV33p5xG3QqdJjExiqWUFx26ZnQgoXwRCVNQpABfbaHTTiiC",
  "key20": "5DXoyD1QDfSRRzLqvF1aC5myC8qcmXz5kZmLYJdU92ZKwDBopUiPrU5qUZNpkYTsXaWFvTTCBNjdEnnrA4fUmtjQ",
  "key21": "vvha9GpBKYDpRKwnMpREZ1rK1SyF8zqbbGVGTzArG77wzFoS5hUkjWs4DbxctRLS7J7G5AwzXk6ci2tdBCUCc43",
  "key22": "36TyMvkeATcw5aypVxmXnxNR4EfxER52hYHEHwSFrDB6Gt7kGRuwVkLyGHfDQ7qzRK9gMkob56zivkSGzRfiAvrk",
  "key23": "4kLoo3BydAm9v576HLYreCVCHtz1ymtdXBDHjp4ZfqCNRhHPq31UA2feT8LodVk87iv2qVAJFMvVJebbWYQBHU3T",
  "key24": "fFkeZqwfhFPBrC2xkaxugoyzd9vh1AUCqBu57vRTZ7iutqgrQLc21nKbfCrK1ccu1VpWQgyu24m7PDPh3jjM7w2",
  "key25": "4FRcbdpuiVjgG6WpEsW5db5H7274aUP75fUbi4DMBcZUuQn2d8sSV7zVoizZ1AdqHmyd6t922CAaw3zWzu5cQsNb",
  "key26": "4RRc2c6wHDNnbGyjkCg171cFnLLnSSKKbsdS8Ar5x6MFya4g8JxmaoHVVBBquuufyywsmt3wd3uwyyegYrcRxW5c",
  "key27": "2SQE8U8HnJn8fCFnGF12HTG1CNnA7dREj6iPFZ4fJZoryo443nQ6JM7xXMG2NNpvh8xy2YSQ8Pto7uwhmS3t1CmH",
  "key28": "4bpQUXq6p1Nt93EzhshpJtXcFZ3QtHDxbgC7fgudBqWxHJS9NA6tyFEVukcgNeP8NegYnuj1WtvcGQ29HjKvvAZ5",
  "key29": "2CQWS2q6T8vmPu5F4KPkgM9jSwUYBQPxba7ooMPFAxErcAU5NrYVKG3gBQEeJVhC8fWvMpdSuqz7ZwDS7xvvFXyT",
  "key30": "3ESEQGQFhfU6Wh9R41Ve8KYwqgvV2wprVFJhTBNuHg3QdxP5krQjsun7tpV1Uw6SVQV14r5U43V3MYfN571GVPa7",
  "key31": "3S1VJ9YfQRsBWiQXhmkVu1mk9ycAX8es5ukdK8VT1KbQ9tF61RgbFFzDCHskQKtdo4dogJhSmh38ocAeFUh7y1Yg",
  "key32": "3grQNwzGF4mLWgt6xw5iFhQ3wJuNHz18CXndCEQaWm8Wfs8FRA3meaZvS9NSM8NkkTebaJMDF8BaBjgff4gPf9A7",
  "key33": "4VyGLx1F2cjj88Vn2s9M66yC2FHagtPG8h9ZraW61rN3Lth3wxSbxPNxNb23yMRBkfuQkLKjjWSShmiitaC6rhGf",
  "key34": "3L4r6PZq2ptXfxd2oESTo4hzcPFr2FD1WBjnAZE6ZiN4jYaWZVZmGLS2hsiSMWhaPLPLATLh1St5pP2NqsZcwMqk",
  "key35": "28DQehkSCjTmVRWv5V7DK5kSPdDt4651XPHsTueSHsGvzP3XLnTJ2CpS3PJv6vnPFJK4vTEuMWTPchjzk5xoAQgN",
  "key36": "4hBMDgndcaAi2m8RzPYJ6onVnnnd9GbAcuEwaCDaLbkLRbR7NzQDjvMrPcmi1ucVswCCSyqmWj9R8i7CUXtkDRJg",
  "key37": "3uNZgjSnv3m9zpMAWQFwVB3EnYHtGozruyHyHnec82VXPzGx6ztNodV4uUU7q5bY39F1FgKTuGM6yBeN86yesM33",
  "key38": "6QNMKJM6fJGkgv2kmFN89Q3Ed1TzqYVtq8ZSw7NnA6UwWbuUTZpFYptuZfmaJkt5RxyMC1YxhqTvXrgKXc1PWGj"
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
