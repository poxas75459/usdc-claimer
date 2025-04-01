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
    "WWeJq3osdPTWiiTGuoU8H5CSoZnbiWSYxVRTRgnQQnkN49JqeciE8cPtdWScWCLzANEzSWeQjGKdUUB1EZhwSpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poEiRkUdkvyrFMsvn3VhPPv6fzCkzBMnC2fAKFbYPkUBkWJ2EDMTvjRT3yo4d2YWhoT6bfgYu1zdFxn9HXeYY75",
  "key1": "4dmRA2EAfeVA2zjbCywyvPGj17K1xbUXD3hjxokXD92o1kc8yhsnDqSSQvMbogzk8pZmVNEjV5Z1XzqNmyfXnDm8",
  "key2": "YbD6p5RiNkVfzMxmaBYYbCf2q3Ejn1xpSFQ3seEbrL3NJsDSVmVUqwgez8iEBXgjKjGQGgbLaVVYr6fKxT5FFr4",
  "key3": "5AvoEbTFdPrABzw5JD6eFdZ9BuMhW49f5vKZG2jZ5y3Q9pBW6vWootf4RUc9pfc9tJLhxVXwgWapttYwzkQvv1yW",
  "key4": "5eezi8BeaUcEoGsk5ssNZc4wKvAiokL7QxkMNcHRHcYSSRjzj15vLZX1JE6ZznF1sX9Vc8muFhsZxQudtnvjHdGo",
  "key5": "SkX22C1wMivny5QfVpsDbJvMv66XF6g6axDrJek8c2yv9SMRMZi2tuYRyHpra1Y4WeV9FU9G6sBLU2bKF1HXzmY",
  "key6": "36777dgpQXirVeApqAEz1CYmxatq4P9wmvdaH5QTpbgV8Hd5eHbAxPSR79BdX4RRDt2QJsChPfNHqnJnx99aSY4t",
  "key7": "DikxfbBqDfV2S9vjR2BLFNghpXGvbfPgDX8MwqeNntbj3ehzELem19QLtvBSTNswLC8YnT7rzzSdnzWGULogySr",
  "key8": "5kLv1Kz8NSnkPUThD42rh8VeLffW1dkzHYE5aDCvFArdQs24JKbFhJzPiVkacVZtFLQGVBP8M8F2zR1nsVSDWxJn",
  "key9": "5UiNzTuj5LnYgFDNygvBqZwWemyey55yUtqudJn923UgrSPArHuciB6dN2wR8WXRoAd2kQ94hzdbumBBzzPsWvf1",
  "key10": "51T4SQnZajn9F3Lu6QLHDRKerAAE7TaX8F58L9NNsJFF36tnbqGty4NpBbM44nKaZYa2VbcW7jm8eo3deinQaYkL",
  "key11": "5pvhV3piw5zTXXTjn2oC9KZLnneKVrbZPFzD1TXEsv8fjaCXS8sYc9XxDUAC3Z3MJmGyZKQgWPW2EoLqavXCo8tY",
  "key12": "2zkp9hGxue1NnBgzv8LabBTSakNY4KeCawouYPJCfPoeg1M2G4NAMBNVjRrRJjb6zsTwKXRbCwZkf9vbKRKfG4X3",
  "key13": "58mdn3hKMbSWY6cwJnC4TS3BZt9hAp5j2edeJUxUh9ZfLUk1yoHgwb1j9kwo3cG1GemNbCFuXXY7zciwx7ewYf5s",
  "key14": "2DSbMjxgaAssoemAtyk6h6M2zhZM24nogJpgEMBgbz2zgUw9XJ1GCb5LgYLutht1UXZHvgyRhXZXDr4H2Mv8F88s",
  "key15": "5TaypUxbnHwyizp6231YqBVM4ik5ssYwzk4AvqWMj71N1yqi8sL2gvdgpUij9knFJ6szTn6jv1tv5GP6yPN7HnKP",
  "key16": "2h8RziMRFu7YFuUx47UYANEDmGYRKH9kPobQf1D8xoJTLq7Wd7XWx5xVhZXhmBVLCNsTsjW1PGxJ7CxnPMyzzvKo",
  "key17": "4YWa1FwcmgfMn9eK3Vw4yzGbEq4RQjhRSz4W1RV1kdMQdB6CUGKQXWnXXwCsTKxEdPNA8xWnsYLtx9UqPaq1AhVk",
  "key18": "2T9EQ56vGGBVzjrWaNJLYgCXYMV4RE9Lvct7eeoGPM7bKyBN1PHHAcbFnmB942eB66aycBPv6wap6L2pjj7zLDzD",
  "key19": "KJVbBwBn7kVnRVCkqfmSBgs1vhmMoVUtdUc95CYZkHT5aHLgARuTWcNkxwNxWGUngLUdSJf5RWymKn2iymAqZto",
  "key20": "34s1bdFAyPNV8o3GmMUtkJGmYQREyXv6dMfUmgv4ujdSQuEDhEgC1EgUysFoESFZq59ZJgTFLCa2LeYdYJWirUzF",
  "key21": "rcq9Z7DUmUqgLnx5kzvti5jizPsiz38j9FyRfE2gz68p43YYrCpXkFUhR5dTYdV6tdAAH7LLVhAy8ZoXvsshe6H",
  "key22": "4ibm5xas4BprXwPjcXmNWkosEnkzFFUU7rRLMUesqCcP7om58jNXCRN4j71fmx9U9kGQQayJjGxzsppLWHPx2aoR",
  "key23": "7DkdcQuWinrSxZcpdYFeHBeRUru99kfvEHUo1Zbfruw4MEUZbbo3xxLGLJ9BhAHtHnABNu1daLgUpkZSc9oNfBa",
  "key24": "44SVkU6kJsXXLyCeb6gELLjJRgngGREqgSa9jq8RY66DgNi4J6ke4oNLzGjrzKmahQLfdWdh2GBRYrRyF7dS3gEG",
  "key25": "WBtJeFS5hhCx1N4DM4jEnTVAtyxHrSEjkE62rHAWriYE9WTXiSfZ4m1pKjFLh5BucfFbtGHVNtQ9xZUCovz2TCH",
  "key26": "2vBw7fAyVnVMfaAbHBiNAHvFf7nb6rTPijkgFjXpGbQUSaDAH5veCw5iu36ViMs5Y9gDtCoDxkFmvFTNAnpzyfnC",
  "key27": "4FUziRa6utGsANkKrhpuVSrwfXEPPasVnTaicBpoxKJZhUCMpF52d4Q8VWWiBn4MRzW3gMHqTsmKSnLepK2N7jB",
  "key28": "5baRHU9dD2CiLDLn8qboFXJB15BCSZkHdw5NTAz1mqM3kLc8iFz4wSdX41zbM7hpuzRRB4CDYMXve6nK9id91VBb",
  "key29": "4gfMZMoRPsVeJPR8EaUfG7HrpsL5dS98Y5VArZ7zmM9fEKfhzLuPZPz933vpEtgDCFQsqeE9yBkuY3p2B1pCiKdk",
  "key30": "4Wa3PUB8yKfcozjPAfXdjQCCS6RpFCqErksKwDM1CQLEfAzyCcYKjF4zjyVMiwqiEkGWFKoPiCkGMEeAQPTeZA1m",
  "key31": "2W2iSa5hj9BT8AN8KZvuyic1Qc3ss3BQh1tXUR9PvT8h3huhtt8EDAWEXX7GnvUbAgBvrKToBy5CTYzgatKzDGVP",
  "key32": "5JTDvzRXUTRoV5FFJeQe8cSaD3wesiuC6oUctk5vDhR6sJ1rS2N4NqpLqUzTfKZ5qy6QTbxvAFjKriidKgyF41AN",
  "key33": "mmJtUDsnXMBiD37EHyUFBwXL9viS5cr9PuJvV4Sp2mCajSAo71LnyXciANtJ1T6RdQHFSuiSxgRFaV1mJYcURq4",
  "key34": "2c5GRFFadkcYxkQcU5So7iztJUaSKbd92oRJ8VPiuApfbiKr8bUdswDDbQzQfhLNCez3D7tvTy25vEBo2UwxhR1Q",
  "key35": "4wv2SNu7y2DgTbkjk7Vch4Hb9f4aHxx9bgbYaxNppQ6AHVKmc8EJjK9TKeUvbrdStyjqDtRReNRnmP2bDoSfAoA1",
  "key36": "3jVowmQpzcigxYJ3YpmwqXr78fazqgEYHwwNU9r72k8omzfLwiDhpujKf6Ugp9iPz78ci7PBzQibjoPhcftJCiFs",
  "key37": "2K1PNA8J9J9uX23NYQb7ShEiQ1xXdHj8wwMdMwbdaV5UPBqHk18gw73A2rG5sCBSfs7kKM92Te1ZvhnRSMdY5xay",
  "key38": "3fFHPQzDXKdDt7yKxaWaS2dse8ev8bGiceXucsQv1MhAM9iQRadfhajQz5z9YyZHDpNeBZSRy6A4piQaTydqjFAD",
  "key39": "3YABhBEZ88txSsWvWvGZtRNprCuLbxqX6JMKjQMRLLUJG1XiPcvhXgybGj4aGqQH3arTok4heNBuSSxEbqX9kQni",
  "key40": "2rw4bUfELXXHt3i9Eyuzp3kHG61TZJNvekapM76F2jALVmZFtcWMPfrVpd9xqgCcdZrWZPajTooqr4PaAXXwbLRj",
  "key41": "5nR11yyZmfryQF3QWdkvuiystk7Q2b5RkznArYydX1Ks22gKN9UKsB2X4temQyUQunBktRGfZMGVivjqtzXs9NuQ",
  "key42": "uVv14aBQBERc6bnFM8Eaw7LUL6mqUrYDQ87kwY37AH6zeux2CgxG9tASugHoof1uKmrEiKGLQnZwRqMZtkeY3Bi",
  "key43": "Q8c6gjaD7u95SnMn2H1jc97EmT45Z8YihoVgtjKPvmNPHQPR9gQe4A4ViPyA6bKcdQEX8CL3zZ8yae1UfQ8hu7M",
  "key44": "WxHs2BmYwYapVHcaVKkowA9uNJu25xKDyMzXrwThEPge38s89jCVBVY3GxPL8948YXHTjG5uVnbwsGi1ujeqfyP",
  "key45": "2WT8vaAusmutUpUCcox1UAQs2zqbkFsG7k4veRDVJxcAQaWt27jzVZCncFf78ygQ2B9VkkUcHPGsnGvRVtaxbgps",
  "key46": "2v1AyAL5Afw2PDEwondhmAvfaeiXJpQ8XfqJJwayDgxtvsphkjdBDwcUPmKFDXUKU27vimAWqCV7K7DBKJLLJrNG",
  "key47": "2F2CFp3A3kiLhASynoPvAHgjekDCPmSyyqAnjso7KzvjNxkG3RVy1R8WWtSSkJ9VmTeHNdxGCh3HkRmjdC9hP49W",
  "key48": "5RjzVc5hBSviLBsmUNigNoCwt9MR2YrTC2duF39C1b2D2R2qiM953crSZ3kaMTRsw5YBo8CdfQzvDQSNyAiBDWpb"
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
