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
    "5MjRGxBaPJSTSuK93MfZZgv1tvAZTHtKRQ5pZ6GMWeBGygLwLKNd1kiGtLEe7KMsA1uTXnQwpRupkFM3Ri48EAXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjntLPHArW2LgA8hjUdUnewxzETidmnDre8zS5XHDaorojMniApsaUnepVF1LeqGduiNshqJL1QLeakwcvbGJDk",
  "key1": "4TCn4hUHtJfhAufjGeZGenE8YdXcJVJTcmas98h5E1xdP7Fscoz6yyTDR45zEYaHgjVPiYowHydtAUPe1UALEKzn",
  "key2": "ScgA8HZRE6azxxJCrwMyZFK3J27FJ3h4Hj8sy8WDS3QkX35YqaPjEH3Vip9ALLCS87DNGEwTSG49MRKoymtKqWW",
  "key3": "4ymUPMKN2ng8CV4W3iMSSQgcfZWYPgvaAxswx5LgkQKiHNrFksVzyr6b3JEbCD4QajQ8TvzX9BQoo4gkVAcVjfpD",
  "key4": "3ykooYZvFmZWER9H9Zvns8XZQaxGHCK9UB9CYKKDnM7PAK8HQuLTfdfqUJFTGbs4DGHuVuVWnHSjSiJFm1wrxD5n",
  "key5": "4i9YjvWrRXRgrSB4zJHFMrSmBUQZTH8sXgfdMFsyAWD17dQA3kzAddQ5nnUR17D7WpKazkTJPjonGsZut2HMaw9U",
  "key6": "4sBB7p9pvGsbq71BGyFokHKq7shZb69DUohfcyu9UPj5rgD8pgf4jo16nzYQfwsMktuVhfX7SooEfbYBrYEXT1UE",
  "key7": "3cd4jvZiL65o7VXqq1NecDMGLx61N9PxSx81P55Kd5P7gGfmzKNaFoMnmkngY3x4MXQo9GXDHjyJfJ69KyYurEif",
  "key8": "2ZSzSYDB26dncCRTgv94K1rFfSsVTFXBeryAyTGhP9NWxpYEYZmeN9igGESf6pnjRAFqYVPr5d544He3SCthiobD",
  "key9": "4kGYAFaCAB8LTXikgSweYYZYWZHomNhWFEi7Dkdp8pycPYstw6DeLNYgyrNcrDfpSgKw6Mz6JVJJA7pLtDPYF2rF",
  "key10": "2Xm1qWCgT9WtFwnHMF4P4LD4ux3othv5BgzhCRfJAQB1x2pq4UeiAoN2CAtDzpgWHfPYWSHJHwEWTxKytQ5XgxLe",
  "key11": "65dEQqUGSutn95Xw5fEBTxZg6PR6vPKb3kGnXTnN8Ya2uBUvCRPkAmqbq2REkchnX3vAXHpVPU3yAYU8HPgppMaR",
  "key12": "4UFxzhoAToWc6UuTT64FGYsfHdkFeNU2aHymT6yZgXMicypAUhRaFsXthYCTXKbf5RT5Eq3KRHoCY3UJtwfsscFT",
  "key13": "5NLhXSwJMe9o5qEGrBeBLmXhxLP4QiCabkkY6DsojVDr9jc6iwiWLMmCbuDvu3JwY5DAPnBWT8EFzZtpUCzgLzZr",
  "key14": "4S81K7exSUQfxXiV4Dkdrc2XQ6EkXnuSqKgiunifdctVk67zNxLqyCgHT5R47uHHG4ecHNkymsRvaXNh1uZf94Dt",
  "key15": "3h9qujC2mJHNcwWdPNtPsrTFU68jghj1HpWjX98GwGHCug9Vdo39ifbhh66GEK7qsApomUCDscBcSNKSJy2CiYY",
  "key16": "4PknFxVtGx8Q53iqFZ1sBqFAc5VymmFQN5bwyiXMAbWUJyVnWqYJxsqqA1Mjgp1czhtj8gDsuQhiNJ3pkL5LoHwK",
  "key17": "2aSiYht13us8byRPrR772awU4FsFemSjKD7gJRd1ftVMrDpGzWZydCMX6KK2r69zv8fGPokKH24x2feMCuYvc8WS",
  "key18": "43LTdGqJfcceC3zR6ftyXTiB1sepLDhiiTP5nwss5aS1ehbpNij1yJ65wEGiUS5pMFrnoyJAchqGLNwsyWkx4xBF",
  "key19": "5tyQyKPNtFkiQuu5xEA5kmRWYHVs8C5R9bmLRyui9a3vo3fGZn5GFqn5nc6pp7uH3uHe95hUWJfGY8qtvvpiFHG7",
  "key20": "5t74TwW4FNAFFfQ8zGcXwWofK7VVGpHdAsKA21jMELn6M6wvYt76C3YPsWti6q6fSrGngTBgpFT4tAHid1MwVKn1",
  "key21": "5bVr5nqVarZeqGPBUtLUaa6FAhCav3XCMYtmgMHjGQS35sfgtrsA1rvU8a147qVYK44h2QcJgfjE2yrZREEXnnWR",
  "key22": "47JEzFW39UPFpAELwqJykdmdxPfQCq3mc6b9FYNsmkZTzznczGL3Avbrtpk4N6Ld8XgdL6H1vkDW9ouMWPoNua7M",
  "key23": "2Pscd7DzVqB8arEVChLqASterqx5HCR2gDdNmYztXyoqfyHWEKZmXUgvZpUPWxgBtgc8hMpJHcCVDhmsQbNwLaT4",
  "key24": "4J1pbd8jwnk7Gj3pW1fsnUqH9qj5H4eHQEXV9mRDtQ7gY8w8Yuk2fuzeSr99A3Fu5tfgHxwJji7TxbgcTzmiHcBp",
  "key25": "5PZqvLa1Xwe91d6Mev8EDV1nSPNN6dbHhRysjNHwmAXh4jiGJKmgYCurdVdAV7EE6UFBzckRxUW8vyyW8GAsksyR",
  "key26": "4GPgth1AzzXWRPi4qLud9Rr7DCu9N9gEdw4FnCyVh4B2CvjLgjTjDiguKFVadwWFXZexRejoj7ZC6uy7hAuMSsT8",
  "key27": "5JBmxDEmZ9ZDPAQ5L3tbpYwdEuDKAKGaBm8jTENLKjLxUMAeZ35iPA2k6JYYxTg7qTaXAw7DckAKyB28Vk9VNxyn",
  "key28": "kLAvMJQD34EABsYbhengXBTV35A5Z9MrYn1oXHy5zUj7Zd53EPKncY9zzs2fsvmEeTvwD6uUKGVkDR4VzyhPhgm",
  "key29": "5uzZuQou7ZDq7wNpprqL8cXfYgeZ2yDPuFb2nQkv8vzh1LgBmDL2mU7vxGUACU4JLyT5Zwncimz4mbTN6r4kBdK5",
  "key30": "4e8TUV32Jwq1Y5RRKDLeSyw78UrV9Cpm5aWbhSHbL8YFxduf7BC8kF4kJaRtXoC37wWJYSU3eqJw9HFgibrERfWa",
  "key31": "5DGV5nvXqosctmPExKMYa6AWWKot4ytK45LDxPdvgB9uowkD54cXKW9p3sz5ujLQrHsaPFbf7eogedUUiTyD2pbD"
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
