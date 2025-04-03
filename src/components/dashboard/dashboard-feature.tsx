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
    "4JWsSA3YNg7SqYmcDGAyxt1XZkQQ6mmvpNnyC665SHp7r2EcVYpPDWfeRjwyeSyqHqHdrKABBSsGYAkfiRf25PLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KHpm4BW8dtMvQGP3dFCfiDtb2Ech9SdPTskyhHL4PjiNY7c444o8erjD2rzT52hkRvsNvX8yEbQkGJA6JihH6G6",
  "key1": "2SxaizE6bcD4WvsSTntxNPocEcb2eDu9cydZfGTNkkhDTrCaQGApaNDCtvhX1wm8qAtmpG6a8bY2YyrchVkConZV",
  "key2": "62QLGVoz9GKn4feVzXzWEDsSAQekX7Nj34oqMmbV7z4Rb3osveopp8NgyRSb52cX4y3TMzQLyWg6HTHE8oGvmYqV",
  "key3": "3kqvd5aDfCueNDgu4ZzFyxLZQ29sqhqzty5n51omonCN6vHRJsWUFNnWZDm9LXwinSEZLfYivXRUTacfBVT7t3jx",
  "key4": "22WxNxSxqf4VDhCp5tkt7jtMh791vAwLhyxRMXMUMkWDXRGDeu9aN9tkZMsMtvRX2HgDAxceLwRy5dgfPZWDTJ7n",
  "key5": "FGBTEVFK3nYKsBP5XmgnXxE8gBprNMRqGjfp5yH4EvVFS1dXsA6343Ad1tk73osqT17ScUc1LBfNzSA2tcwLZsu",
  "key6": "4eZNA54DsxDmaTFEFYDRKuNjS6uNd7yPsKi25pqjKYTesJ8vf29oCSYhK7yt5MtKsfDLoShXRiZEx9rFtEwac7aT",
  "key7": "vtzeWrrkd4sRnMpmMfm2gu2rfHbw4aeKFuMngsWcG15DMesyrU532hZg9LydooRmSw8TGRrpeQ6aXiaZi7ZLei2",
  "key8": "3gPy5WeaVNaMzxk64fNHKvnrkUug1SKxhmmB6azTfud6HBu5PjmLCbLtRQuu8mZ7YcF1zDU8Ct2f12xEBTLmpi9J",
  "key9": "52AtX6U8mAj83q3g9DYNnFvuXRVb2diUgkKsCfdkhzkhTBpi87GvFYBvGzbN9bqwgqeGzhCFwEff7Xq75ojhdUJH",
  "key10": "4BF9kd6Vj5NevxKaykVp6nXbnmmNWyvZhdwcmfHGN4Ljd54Jw991ZgsM3SxzKTcNxstEg26w9hWVUXJu1dsDvfQM",
  "key11": "3CXQmamrq8gJ2vDsvJBLsxXfV58847ZTWZu54UvwjrCVGpca5jc2uV3Mg31ZP3DJHNXo9PQzmN4Cib638AM1otih",
  "key12": "62mjmgKfBFzbPiM34XRvgiB6PsF64MRWjAbWFdpokrDpRhwCJyZiZZQuZMUCpLZg2Vhi1tYixHtG1neeMkrWaw8h",
  "key13": "4GURSwvhHXdsQ5SmMyC77UmaQedsRP4MkjTGYVGc93ewfptsFUE9kcv5UKhYyndSL4MPq7v2so7Jd4zuEQ6YNmSE",
  "key14": "W55y24jXHRWkkbjvkyRgygFPJsNizkni3qwnsuiQ1NKSxCagXrGpqsr8og8AvVZtN6xpskun1LaeJjmo9EBaGhy",
  "key15": "2X8Cc4mpQgJTYjBCz2yejtKci1GVFApUqANcjjtaTv8Z3144upgG3ydkyzyMPr5Ei4yoGSWZkdPhfgixf8E1sLjg",
  "key16": "5uHsGKgLduToHEHfFfaupmS5bay1bY3iwtxzd1STrqZMXhnnhZn5gemCQ7sUtFA5GfNd3TkQMv6HAzZ2p4ai2Swd",
  "key17": "446qzhaXqmXpasnUyTRquLYvPRxHC57SFLunuN9BHitvDHJzUim7coibUQSotLZxWXzkAVDTsZbZtUF4qt8Yxwem",
  "key18": "F7CSShHGuxvrnxbDwrV1S2BGe6pRfeAJ532qaypcSr1KCt7GNp5JwfgQrx9buExpJZrgdj7chrWZ6vHHGRExduX",
  "key19": "9jQ4mgUosAFPuVt6ExKQqTfs5WdPVMvwaAL8RENXX2o2atfjPUrvPsVBQyYLP4GmqwYh9buL3xXXQUurEqrRxDw",
  "key20": "2CFhBRj2HDjzCPGLepuGwFe1oabENqL2ifJJ6K6je2iPuerSwid5JHpvHsXPcSDV9dho1r2qHBZgQrAKDTQG34GN",
  "key21": "3twyu92KWpx7jFN46JC3FcSu7EPAGfkEv6dXto1goLMaAGtD6u6PoLDMjbHeFYhTwcmpArSJRgDJ1Tfk4TYfPZWw",
  "key22": "5CkLqWRJ6txx1yprpKqMnDizaZq7ohMwAswwW3MPz21tLLtRyUcaCFsSo3XgCuf8YNVpSumrQphUwDy7xuLJ5FAr",
  "key23": "4SmAQoxNnyvML9RJeMi6btLdUJXVJNTEBNXkAgoqxeT3oYZFiBpYmU3dJiYHqu7WJSvBQNib3eWH2A6X5tNT4M1z",
  "key24": "34BeMU4zStXGWizW8CBZmBUTZXthY5Re48EL6rvZcxTFjd34Q832mgTUrHPrwjxaKf8rz9gV5taf9vY3qUhY8Kwc",
  "key25": "4Xefk3tbbLaB6ADwkbKxdGuQHGWXcuy797zkFESAoXxyvJhEVpzqbSgY2gCWiMMZJrEZWg8Qk57wcZ4LcWhUuYe8"
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
