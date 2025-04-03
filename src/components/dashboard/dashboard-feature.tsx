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
    "2UejbJnBfC1iYarXkdZCdDQJCyAcNP4iJdeo9Z6cunfwzZ5AKubpD2LPw71ahhySqVC93DEiDCp5frrGHA9YnXjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUtRZETt4QxL4b8A66Na2jmyusYYXaWBPNxJ5fYRAedsE1DEVunFY7Ug1bhTQHXQeB6cBTEh8ESgPxWy6Xbzq8m",
  "key1": "38KWTxart1Wm5999L2PdqqndizZyoZ8m7Dbf8o88XYReecNUHXCjemdMD2QWKbBTSrEUoSH7cQCEtQJFiwGAvmKd",
  "key2": "5CmW182HjapKrpTKxvrcodD4uzTbzpB2CtevRuzWaxM5iDUQ4sDhPQzXrqkiYVge3ymDk99qNA1ChesbhP1rBMq1",
  "key3": "2dCQj8NMfn9TMoVP5P1ZgkWDdcH1gUqebSkJ7nZZPyvLA7tLLL9ZfJ79s7BvqC6FfgQeJw5jkosmscT44Gb79hcv",
  "key4": "5uAoBVot21jxJ4gpDBfUkVMSsY49Yoke8cqxJmi8rzG86gzryVLooR6SUE6zg5PCjn641iPEECUaDFoN1Bi9xE3J",
  "key5": "2rwrTLWoNkcLCf3rwL3Y7x9xY514eWt6NtSt2nV9RiG8bqCen54JCuW6sR4mKjx9WZ9aK6gwQ4ZpRXTy2BvFnhmN",
  "key6": "4F1eMMSos7biFovx4A8j2rmHrQXR3GYfF3VcLJf5Vmsc5kTm5JPQpbjqXL38t3NsKRgNyCUjxeRrHKo4b5jcBoHC",
  "key7": "QQXv27po49dQmcL1JBQFV5gv29aSJEiFNTh5cZ9R9cyL5AxftJZpw1dEsr4HPvd49oKE2WsF2nC66myqHJoAfh4",
  "key8": "4jubArrYnCGuw3FTNSqht7jkjE4Ngos5EQ3UgiBMnGKYeVTQV7krG1nxTuFDFiEDcsaxWVha3mxrEZLJPcn9VjNq",
  "key9": "3ew2K5TVcMHqbqgfPCXhEaZA8WBewxdoLstD2hebcoDpLCjWxwxqeA7cpFbyvcgJFQPfTPSoJWEuDLMW39Xj9PWZ",
  "key10": "5xAZyfuvvRHTGTMHdzqHYWdYbKx9GBLaihj7jHaYEupe5K72KRSTE3b3wMqF25ukHwiXWSCHxUiNJ58zFnJdYwk5",
  "key11": "F8YQGNZQaPjtt7jiKaw2bcrgbpLt7a5xuqgFND5qKZmBJVsDu5AfkMhgk4erJHFg56JaGMKmmHozWLeYL1UrEtE",
  "key12": "4NSFsDWt3mzYLjsDo4BNX5hULB85oeQPrdwYi6iYeM1WNMpNzAYdYWzAFgW4FDrTsTaAjiP5PCD5iVp2d56MFK4V",
  "key13": "Y2Y9mFdTMdSfkHraJ7CnokSH7tpi3PBGMunB5oUJAPCeiE3jDxRXXNC2T2rQKq6dsUMF6HGCXsfr97RXXDLEAGw",
  "key14": "5oB7HwDY1Sqrk1tg9hE3QnDCvWJVWPK2LZVFHT9hK49yoW1zZgeqP7g5gy1acT6aPwmkkM5VoKpc7DCy6w2SLWAh",
  "key15": "eeY2RB9iGTVYMi9KCzvqiz2KDQG7PjbnuSoqQvicVX2LpSWAEQ5b6oePiWK9tnrSNP63vBFdUehj7wVuReib6ek",
  "key16": "4n7B4kb7Q6bVUvFsqJpBL6pTQvkY7h9EE2aUQkyrh7vVTcpt1fs2ZqTWvvN6NHBXj3iLa2PULCevQYpLNR1n9ZLk",
  "key17": "4mojWw9RCNUyrkA3utp31ipQv2drgztVQ5faUgxfVmPjxbQ4UVjfQbdAJwAXnVHuhfGrj2DFLnDKmLvC6m67rwmZ",
  "key18": "3A4BU93s6vdPFenJgTVdJyAYrRreCyehABEi3rPwGSb6eV6Vk1nXCF64EmwHyeYZtWuDFvP4YAvpkNnMVdEih63Y",
  "key19": "2P5vm1MxRZnDNbPEyqd1CcSJw4VVVsjuh8eHyRNTvHiBFGwiRxUeoekrcMJuWUXG6d7u1AVgrFaEvDHgXuvs93ve",
  "key20": "3tVxbcZeWUbAUCwvW9BcTwMSTBjUUpXwJuwmRRiUJSihrJ4kenLtvrEYVyMTQw8e5fGH5PcR5hXLujQgc8WgCZqF",
  "key21": "3CxdKZf3Y1HUhMqaepWXaYHFDsxRtDaExazcgE7daXSD3Vq7shva4RyuWL7VukpoP8mGoWcCd4yNvEZioq5sbCvN",
  "key22": "2DoKgGrJy2jQjqiTTmE8ESwsiwWjiGymzyZkd5rRBvsuDGKzR5NiesixHsm33LT97jVqhiZzjo47Vhtw5KmW5CzB",
  "key23": "46YZE96sxa7CVM8vPZG9PhyYZWpEMuwpaTCZhuiARUJqsSLeSZhYLLu6TTmBhocN8YHmodjAadsdKCTDeQXjbCaK",
  "key24": "4nAPaTBVzC4zJjkhV5rskGXwqffscGKb6MJm5LRhZmgvMbtZT6abz5zXEiBY8d1F1BC9NRtzH1FBPdEX7QqDjNiu",
  "key25": "2rQ5v6hzafijZcyKUiMqTz5iJB4KAGdSU2epAhQe7FkdQ71p2DvfxrTZP2H47qXsh7P8pduXnjWEoXLizgrHvUwB",
  "key26": "4DY6VkUgLTyFL8gXTcbS3Cby43rJtuqUqrAHoURdoN2PqJpgsymNhFmxNH6z9RbVd787XoDHhMeRi1jqvohwQEuH",
  "key27": "22XN1wUjUg99mVmAu6VgPAPgQ1A1AqcZytNKxxpds2BY1CSk8eEEUdHmD4rqsmFkVt9KQ6LTkdVeozJx2cFAJ9Sg",
  "key28": "61ED2Cyv6FhqTmTRs6qb5PLzforhvr5qgMHVokiVu6y5gVgq8qWuktHwaE5WoU4pHFnQhTrp24qv4Ujv8LvxGN4t"
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
