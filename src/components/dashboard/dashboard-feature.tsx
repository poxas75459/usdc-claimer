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
    "5HwhZ2MekNENBSgifrrpE4KZTLXd7b5ztxntWyFYgTfSPhVPKmmXFkd6b7ZGuXAaajMAEfKmcfyU3UeX5VtbPdpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K4tDp7mH59MM57cYerueGyMHXPwVT54Hyu1MhffdndYuuA92zZvj74FzzC3sZa4aZmmb1mQryFimHpkdmbJad6v",
  "key1": "5hLEtpeEJRR3Ze5VyqhtZZDc7oLiiHdMzFYhC8CmenmYvMjZVt5QTvQUDYfaTGtL4irQebonf5oekYFX6hbqnA7X",
  "key2": "5LzRYnbnWSzmgBsSKewGvQhFUPtRpBBe1hDRYhd4wYH1pTEVaPQBoXAtB1YvfekwiQn7JchpKZsxtvZARjjwCXEN",
  "key3": "3nTiLaMy28WMLwLUjUHfHaExAwpnnc64hiGrVr2JFerwgPHykZXCb1J5fZG8PX9fZQ685Xf1g5JqBHF5qSRbaHxK",
  "key4": "2c4Uy2NfU9gUMgmxbBHCyQQYQgjWMpmATns8mbrESFEAWdnCixmSciw6osBx2666kfvV51rN2sekkiB9o9bqozpT",
  "key5": "3zJcLtCe5YCDneSr5FSYgWNVYseKS5d1gHiopJ61gbgSHcMXDAfTtWoHkdRTS886ngMHhn834zKpbNQ9eqZnH6h6",
  "key6": "E2Vq8HT1gwwVDejw4zERgaTJ1kJ7Sr4m9VZfvoWo5rEbmwLAL7k7hmL833x3BGDTL3RbHzbnzTrmqTq3yjFydoj",
  "key7": "4RS4buSqZsHS5AqxZuhkscxFa1M9ZP6K7cZotLGxVqAgL2nUEDC2CVPpJqbbuhP16W1fKcSwgRX7iSNFnV7Nsaae",
  "key8": "4bqM9dBadJ16x9YfUUd7H3AVFqvogHE9fQYjXMETHaWVA8WDekRHCZSggnNziHe4CDeTkhH79n689TjeSWv3eQE9",
  "key9": "2tFaesEndJoUJFM9qBnq5z5sjPkQ8NVifBg7fuiwJeUAzTJEdLC8xpMsNWYhXcEUvua8JUZe5b42yNMNDP1dqzyM",
  "key10": "4j9sdBgzfMKzYi5ThUKzV2yWMnocbQNTz6AofW11s4bAp22ASYzQdo3jKDgsb5DuzCcjqspws4TTr7gTZ792TEW",
  "key11": "679d6H4FDD3CrCEpZJRXQQkhVTgdYoeHcP1p1KFqFPhmCLvuJGw9jcHySX7qv1XyufCwAED7UiHAxTFR6KSmDwb9",
  "key12": "oTtm9jevAtd5QuBVZ5H6159y44Uub8qRcnRXHE7y2A1kPRB68XfRWa9vYRE3CyiZ77CoKSdfXEpNB1mtu3fxDnn",
  "key13": "5PRAx5bPzomY848cxYXTriQWnSzLiyedVSZFTVgdwEVewGeDMiccfyin5DHtNPNPaVjwUdoZNp3TZyS6TcqPoMfA",
  "key14": "2xo28idDecdQuvYqJKiMAsfwzwLjmCRzbjms3Tp1SHooCy3ALHQbnLvkCTsrJG7CnLSABFtaZUqCSbgkkHNPBpoj",
  "key15": "4zK3fLrJMays45nd3d4o7fVWzx3LAty4doE6SxkW1uNxHLQjv1ydtF9PWPYhroeBq3nXTdar2FZXogiNoyXcbt8R",
  "key16": "5HNc1KjrxYG4qk64QoDtVeQFTk6JuMonKcgvWLHY6BeUZAfC5DPhb5tXSkqm5FmPUoud2LVHhVfKXPHR4G3FfcKF",
  "key17": "2xFCrrx3gUVU7vc1EEdXEtxkpM241Qi8rVizZGk1sQpcdtzKtuoca3cvRtxwPGBUbSnjLzsPvcMQjnJe35h3dx31",
  "key18": "2omTMsdWCBjverVAMMTtc9UbPe3LfLtntzte8y9oh4ZXBNyHBf28t2sQ5GxxG2fCx32HjGg7Uhy5oceKXzYrtGAM",
  "key19": "5329jz9VCjbxqtgM8Ktt85kyA35tvouMu27ecYiL5mwt543gt1usUW8uTgznjDVcRAK3n9EtRSgb2oYRtNweqG7p",
  "key20": "yXhSXSC4dcYR9LaW1P8JJVCWLRZtM19raT6r57vWftPTZPP4C5h5cjDTsHP3He31r2oJaiUtxasSZe1LS6UXb5P",
  "key21": "46tsfEQhByM7B5TV5cmL8unL9Tvb9tDzHWYvB8NPxycxL6h9BopqRrCqTTCfCjtDwNjsDqxrhoRjPJUZRoVv2Lmi",
  "key22": "3wMbATmhyLhFczE3K8hocCGW39wXHLyAow3DAHCzhR7Y81WW3toSHWnwmkJJ5JyYk6ZbSHwK5WbV2otwiC8Sch6k",
  "key23": "WXUQqGSknAPfNCUnXePae2HC9rMAYjARGRoKcPqTNpiwoCiyz8fzukcp4tTarUZcLgobDuUuYXMJbxqvdrjUiFA",
  "key24": "39XCHyGzzBZ2fd5x2ABFKgexwYS8aAWS3rupkMDtc6ZqS49K8iVf18iWq2uiJynWXkUpThQvwNC2vo4mjqrojgKP",
  "key25": "2URJYfdbvCasgebCqedh8dS2heYJ9hcmH6qwTPYoiZinSfFoVmAxNE4itmZdKHbKJbZFKWbhiRghrRu1H32pQriG",
  "key26": "22LCKsxb5BJkrQS7RDP88vA1XH3K7sJQY3Wvt73SQXyk6Udv3TEWwQBc6A6PFkRMMNsAquRNeonqrchtScGBP98D",
  "key27": "2sjUXavJz5sRi3yDuWMjqVhZoJXoz2o41LzBpfYPudsAy6xkAaxP71J6E7BpTj9vcZvNk8SeY3nZfheyBpBHrvp4",
  "key28": "2bmPvfiscWzi6RUJyPUAC3hTrQRTdsUHtJaGDwfoZUf2bo647JSL8g3QATeDuuudcPhVxz4R8wNR1EAQT2sUpERU",
  "key29": "4HziXxjijrQANmhu9YZ76Z4Ws247RmzNqKTzzozvvPor9pS1QHcFnSecuZhp78TAbRjanzN6XEbwr7WbkE6gvDHF",
  "key30": "4kSRNBo7zMm27DxSdBZRUhrPPN7Jiqes7n7oifVt6faEqTqBoYWRHcCovZvHwZuzhUci8gccMW9Y29XSZWm8WBz9",
  "key31": "5q1q3hfy4ePpZEgVMFdfwKbao5KMrjPFQeukKjteW2WnEeNvnqBeN2wHd9g7LUxHJxD2pfhTt6rsaYKHeJ8JeV32",
  "key32": "5RPEJoHArvFW8YHurjLwfq9YdDqZ26ffVsPoP5tTNU1XFjC5foMdF5vfxnrdAeEyhfXHjLQ1pUBHS4TzFWGUvCiQ",
  "key33": "4c8P9SKuufHxC3koJDnhyAkRvD5JYeZ4pU1ywSuqC1QbBmGCkFumrqA9RCvqBbyqt7wNA8qZcVHjqTpUmaifLzei",
  "key34": "4QpdWBRQuu3fpW326Hj4PwPG5F5ZPt6rWWXvFcQsAAV1bHssxxRa2pNgVTD1hm28NXN84xEwfJTGp1QnGYdpevUv",
  "key35": "5Qwo3eaKrgB6XczjaByZ4Whfr6VVginYDusYAuc4cYwGX8jjCxX235rBWWu7DFqk7DmZSMXTHxRbAf1QLbTGoeBJ"
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
