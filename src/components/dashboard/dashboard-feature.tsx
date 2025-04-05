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
    "LxRYHuA384vZy1WXsNSTnExJ2ZXAfxYVTY94D3qUNfJ7fy2cncMaRYNhQjxvVKdJA8ESkZtZoqUcWgiTpgq67nq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zokn6ep4uuTNXPkrbqhoNdgcUcRhnAmF2oVtdGFwPvyq2ajtBRVsMZxoi74wFtJ6Zk6N4J2GyTaCPecpocXmoj4",
  "key1": "dirVzLHKEYFT8p8L6RvvZmSdod2hgb7DDTYGhnL3ByyCbjvbMQpR8T16KmpM4H6Bwt56Cx8TpdT86bDAGZVb4in",
  "key2": "41hEYdT56xj5qQcWNYw4hVxe8UPcjL5zaGBgtkbpJRUDyzpH1HNgX6i4JPeCDK2Z83SXdSJXqk5swAXSoGPX5J1t",
  "key3": "2coCdM3NLc8xisz7fx8sbwYytE1LoCWx8zy9ucZ1acksYRYNC46DKDVKyA63k861fBkXE6et4CEe77VnQvugTRhH",
  "key4": "y6FGCuVLaSS5KdxTqJDA3Z67kmZYhyLDQgm8D6sg2JiszToYtMH3jubgHPpU4AwUgqYhTnmeEyhKedB7p46Pccu",
  "key5": "3ztBigEbyyqJx7ajzQ3KqGALmgtWx9JtZDVTFizgpiWK7MDhzGPdPANMvt12HhLathmCKmhpH95c2cTvMzfgKmjR",
  "key6": "3TP91XQ23PapTvmnWeSfiRTQvfAa39CBDMJugCk3beXFoMH1DzzxNPn9a9E52uzz7jsjPmY7T5SqKr8AFa42Nubq",
  "key7": "3VBAU7Bq9rpBn2rzaxmN564z6tHcjZ2x8HLViMWysuGX2tsN6NFmxxpst3FEGT2qUFin73ncENWfvY5nZfUepPxD",
  "key8": "3f58uD7N5pZ6VB3ZPa3CEDRyjRUKhtrLxUBEYgGsMZqrQhZdAwAxwunxbUgvhHVhWmvxkZoCjyDqz9z3xbrgjQ1j",
  "key9": "Sb513XVDy49TZxcjJPHTuYgvcYYVN5Jg1BYWLq4xyWofMWCUaa3j58pUrNDB1BZq5LwENsWGuAaxeb3vkz7J8VN",
  "key10": "4qFWH4T6K2KbMXhnzoc21aKrpwzSa3MJ9LPadhAiPproeNwR4wNV8QNEur1aAhBtzJWHcPdviPwWJQLW3gQcRTR",
  "key11": "4Lgt5NpEcACSp1NMr76TLjPMb7w1Xk4y2xfbch88SXwkWgkHJWVFEKEuuGSwjuVX24zdBTnYoVMHUaX7BXf1hYm4",
  "key12": "24qQpSnpPx5ASNU1B5MuYQzRHmwe5R7RxRXuqeEowyqYBLY2bZHpro3dTPaEncvo2dWDLjG9UXkxKdXCLLJwWf7i",
  "key13": "smFNwurCzzSHmgWcNgj3euc9ksb3NnRFB8pV1WrRNuru2yo5cM4NSvxCF4CtL6T7jYR1vQMtkSMbJ2i5LkQEn4a",
  "key14": "66mmynXapFpbzANN5FQgPvr7a5mCuDyLi3qq88EEgPLgce5e6AfNnj37RPSFrVxZ6PLsuiKg2UgWAZVGrZXySK62",
  "key15": "3A9ekUunrbd9As34JkEMyt1A6t2YAUtEJGSmtNSkdP1r6F7Ayg9FmopNBrVGCVQDzTWceSSTmzXmVbtDzEUg3r67",
  "key16": "m7jPqno3gtugyYqWEbLXa78zcRn2LnBewXVL9qUd9c63XweCUoBxJGioGSbH6zB959DkN4ifGGD4wS1WKa1sJ6T",
  "key17": "64vR5dBeoVsHFM5hDuB4c87DcEvWf4E374w3da8Vk4rQan7wW5cSR3EC9DAt5vVcKGo9ixcL56bQnP51Nw9HtMjx",
  "key18": "EFsc4xASdjsFqCp6ZFNvjefgNPV2HHC5VRE6aN3uSayf7QfqiRZWgSFYGSKVviTvt5qc5VSNxnMZqS8ZEJmG11u",
  "key19": "c1bEe98UE75H29MZytUVKiv1jCqqhQzwAeSzSMKTMd92vRg3fgesg6cu7iiRuwpoijXqSi5xtscRCw67J7XJSHS",
  "key20": "3KzFEeuGtP7ccpU972t86VDiPoR6caqyxMFLKFVkhnYk4WDnxVspFnN4fmna26HoPFWRYNMnZUgUMvQQ28LGz1yX",
  "key21": "3Rk55SD7xAmdXjoXUsoXPqFrwiapj7pCK61H83btK4pp96sMHjuiVsbJAGAwghw7ePN2URSiyfP8M8o2ru7b6zyR",
  "key22": "2whUXLug5R2movMbreLdiXDphy1oG4r46XGsUn8iKi79ogRL4FSXzn5EdLA2aWeuAmBnZQhNhPbR21d7Qj4Z48fR",
  "key23": "2ZB1AZP3rjvRKqTN9Z8JWr9iQxpMLfCvzAedFue27BHn76E5fATMVmrQLEGVabuKcMTF59iEhqXhKKyJRhYgdcvZ",
  "key24": "36NZQqnkQTZW5Q7Hik6H7eobAd8bQAie4TKTg1nvgr5kjJ1cmNStZ7WX8RcMnCwUzJtb9NSF749eFhuEShdNj58k",
  "key25": "2Sp8o72SxpZu4D6UVogaZyoeYYbtEEhE7YJNY8RfwryJyv4QE9wQyMRnBD3RC4N7WPzBzN4jFTBGGpVFzf3gehTy",
  "key26": "5qESXhfLwtHASCAyLRPopyCrysTM1wzie2fznGDDabY7TzLaisZc1Ud88o7VScF4GfCNcSsGGoyYAerxux8ERZxG",
  "key27": "5mdji4YLqoeCwSi44Z2huGUDZ6aCU6qam86TksS82yzw7o6CJJR3kYgyoTKEJapBekAqm5mWuPCFYj36fjS2Xhwb",
  "key28": "2euj64VEoPjYAWoBihweypySTyyyi4viN2rQiiY9qDgovMabH3iFmXBfqRZLz928xYSXGyooad67RsoTXMutbJ26",
  "key29": "2Y54F1UVTBxZSUAwUHsGqz3wsQoyFjz5epbrEdAwE8ugqwwJcmVqniKSKSKQoQkXJLJ4RWfqQ9yLFnwDPoXtukX5",
  "key30": "MwfKguRbDggwChjLabe6EeVpXFmkCRDdSajeW2H6FQi5e16z4pfRYfXqw2w2CNVuMKcz5djiobCju4A8xuYhrkF",
  "key31": "5JQ2kLALAACpSsTF2rdfZQqbdaTTjy8zwXEjMuPoK36DFqYc5mYwebyovXpBBT799EU23Cuov9eKWpqHAugEk24T",
  "key32": "bnMFQmXZ6XUSZipLEZ6hyE94BzwG7VGYFZnWzxvyQqKKc5xsXr3Q73CpaReCZcaWcweqrAWLWaGsHVRZQy3ydLS",
  "key33": "16LZg8Ljjsc1ohBVpzRz4Si1cEJoXzT1UHWr6KFzrGvXvpUg4di2rsgHnvGen2mBzUpvV6yhJqWLzzs2v4e14tU",
  "key34": "iKCcx5c6fbgyXwXuFX3YHckGpnWsT2txHKUsGF8RXC9RjZ8MHHy3g64TR4Twg7AV93yuiMm7MqvG6bYHV2cDTAf",
  "key35": "zrPVrbSqcYxWgkGBXtCF1w7d85eEq5ApwRRR8KWbDcM2zHkYjNmKsrHygNDBAm8owNmonYAjiMxNtZNcNoYE2bx"
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
