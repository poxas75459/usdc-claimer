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
    "EVsE9qT2UzqHiaZwj5UQzFpVPxs1gS2QLEGB6to2qv5kW9FeV6JdkzY2tTvTDFSn6C23NdoVi7pWNwpYCa1n3Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGheXoYaQcGhoPw1dxH7qK5WG7oVF4FJHwNQML8yoNScoqm9ETspSH3P5RAbtTGSM4BEAkekuNE5divJmA9ink5",
  "key1": "4Qq1muoXv6hEeeCpmd5FGEsLGFdqAnPtAKsfE755JvMnFd2S3WamPP5UZ2M7ngMAVfSX3dJSkAd2Z1DgTs78r55a",
  "key2": "21Efqg5sJHxfWhoVXVeh5fyCWfwkWn9SuAcM9kr54aB9GJ5T3LinoWJWcL29GxvsVngJVFX8GmJ3Nj95eo9Avf5a",
  "key3": "35JDG6Krivp6rPdrtgR1uDMXshK8evmYWW7hrzq9xNQmDLey49cA58n8aLJbPc5CUeZHtcBp23uEc8moNZEwyxYR",
  "key4": "2rTpSRnHB6k31a7tGJH7nQsRRqwdpii48iLHDnvbgoSHtmwBJS5cQ66rMS5Sb3TPspsBYsZZRAgrFY1vWHqHLVEy",
  "key5": "3Lgm6hGZQ3GLqJwuxP417zBKtHVyqHEWcNGqSu99XobGW2FAPr2Lhcr1f3ogLmKrGv6mkEA5DxSC5H3C4bQD9nmX",
  "key6": "56G1AXZNh4243Uuxr672bh4Woce6MqqhuMWwuxeKqBYAU444nUuMN4z3uFbnmJkPpjunzCv5WNrwy2AM8kmRoxgv",
  "key7": "2vrFprwuC3vHd7oyjmcYEdCkcGKLQskw7eyucF42NmRK6Gnu5NSkPXpzE7dRoWqUeYFQPH158RM3vzg5R8ck1uXZ",
  "key8": "2f8KfkPKX5ZVNo8txXpsGxtnG49uXV3TADu2MyLd9F14gGcyufQvc1YoHva75PYhnmcQkMSUo217gyTeGSZ4DQrg",
  "key9": "3CVunE27WgWbZSCVQbXKhuHm8yx1dbVQUqF3yXypxnCDubWbSkWJtekEySo9xF75cMXkmJPEW3oL3uhtSqNrzS8V",
  "key10": "4UTRma7Q5HoJ54axtYqimmPVYzmT1FyZqSqHeqYnMxnFh7ddLRv3XEkWD75qHL4tqfRVEygFBqLgrwTNkxMueMqk",
  "key11": "3XSzcLQnbTgyhzg2eV8XYh5JTCM4YX3uzw7QF6mr59RMuYTiPLLvnN7yTRZpM4NV98DfU9gsUZHtMhcWHGr87N6L",
  "key12": "2KPbkg6L9qGEGCn7fmsMzjtxVfTc21UAk91uEqWjBLRM6HLzSAopUBt69hyeSgbYYtRPFkzg4DuJsiCgfSwbbZ5K",
  "key13": "4LK9hvMnT3bpqKbyJ5KtXywP7M2FJV1TPfUN2YJi9Nb9vfhC61P91xcevbbjmffpS4HM9ksg771cLP96onwhUuut",
  "key14": "3XngXXTSg6Xkb6BXRVXyWw71MYbrgAY51G9V4RKKtqc6ww7zG4UdtqNNMpmRY7MnMLdF2ax6nQWhzLfWn3KzSgET",
  "key15": "5pkuxVGf9Lw1m2x8zxcxf9dDQfmatC33QoHxUZ5vPKogm6HJZJhyx6huVfxGvL98ctW3UPfHxgoSzDwE7KYTcp3j",
  "key16": "3fveXL3pCPzo5d2Ro9h6WPHmzMuypq82d3tmQ8rLupsQS6oUVs1sXHHEGFxbgMWsmpCaBJHLQqgJDmvEDSVzwejQ",
  "key17": "ohNcisMgVy28pMtjDh5hcqh2vX3xQeYFmKmBQmvbMLScg63S3JdXiupvtkiZiy2vkt5wHxBdSchSXvGE48GdzAf",
  "key18": "3Fnh6RsjLtiGNT8ySUoQhcKicEKeBZJfGxN3mpzLzc4ZuJ25fUspCeoYJxEQGDznWLLZ4Je57ngShBrfWCAeQDyS",
  "key19": "44WAqC8qZp2VBfzQGYumVpahTGgVah98uD6R9u8zq8atJpAJVk2b58j2ieMR81Qgf9ybZHb4LCR4sWPmuTF9811T",
  "key20": "5rZcg5soUuSxywur6WrKbKqKUyFfmzPsQ9kpyqNuz4oZy7pEY4MsqUbqq58v9FuLXAzGp1BzxXMn5uLULGkr8VEr",
  "key21": "7FhzUXLCbrrE1ZGcYrLKhphjintcdWWuZzPavBaZjqXzeRKb4diUuwcJoCXKfF6MzXzimExpYTFEW12hyR3QFR8",
  "key22": "NTZBkshmoK3qx33VFG9P6g2eZk4LtFJoN1BMZPCV4R7pfFXoRHQR84AwGaXno6LX5aA8j2Jsu8ziswxGFQxvuaF",
  "key23": "3P1H7baEC4hL9dtiBLG2aCYcTAun6GS4ThcnryyLbhW2zyPTsn21fY6XKgDJSnomnuXZZWwfA7XcDu1pHT49KXso",
  "key24": "2eLenJ9YHNRwEvU2JBi5xRJcRErFAvZeFwRBqwX6hEYEGZrG3nAfbf3unHzMej1K3m5SjxT1KKaBjCxXpMiVSfSh",
  "key25": "SgZ3XGr17yNrfS4CN56F6o8ZhA2xYdN6yPnSk9VaTxVN8Vw7dCkRKkG6KzckredYJuXZ1eyXgmqZv69vhrW8kYN",
  "key26": "5KkJ4os7whupJ1a8JNMyaKpwpCijJD7mZGenDjXbt6KepuiTzMMY2azeHgbuoNyHuRvMdETi7kADKh5VMrs7LKDg",
  "key27": "3NXicgNCcuSMnXhgUDDBWLXyQerAKnKuaV3QDhgNEKWPSNVQm1ufdwiW5rFDJZmNcs5FKo6eDzvgAwmyMHV19VFn",
  "key28": "N3a9oqziT6xUDmQF8nhiSiHgAE44pPgkkSRvghrRYRRnV2fLKm9N9NwKXGSwKQYeDfA3Zbfnm3nhKQENrvwuKLo",
  "key29": "JXq8egQbN4efjuyYhYquxPVxfj8AvdtufM2PfA96ADXureXmJdxgLPngWvd7iu6y4ULTms6rCEz3J2msCuN9JJR",
  "key30": "fsSDe6tdmnGu4h76pSfx4MuRVERBpBH22FidSV2ePCADNvURLSJd6XQeRnqAMi4Cdd4EWhfwfdsUgFfoepcmSCr",
  "key31": "672o1jHPYbiVxirJmMEwAHJTAUc3ttZjhXFt6jBqq28Cg4iHGt4LUuLMJiyKBVs9ePL1qgrW3fX9PctUp4RNdxUa"
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
