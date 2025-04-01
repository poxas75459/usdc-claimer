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
    "49vPJcb14uSMzNfiNBQ1EdL7RgrNXDPNgnXYkTecwYbyazseRnUFjej3fLcMEALTna3pLKV3z8ym9zFcce45PviK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXMaD6TmRYGRbsmLL9nSyW2h5RKBsyish5Z9mzD1LevYHwNRq9z4e4tPnyhQpuTpzwmFEN6TiiX6WhzrQZYRsSt",
  "key1": "2nfgiLMb4xfzeWniPUyPm6rMymfPKxp9ynwaQtrDeGWARQfgPCVzRxfertUtE1UTChKZdBBGS86PVFdjRAUmTY4x",
  "key2": "5pG8VS7ER8ohRygLzkUfTt1RmFnLMevWPi6EL8tzPHhaNWBp3mdvf1hqkEcfZV9V5Ninju4n6mkGkTPEFJHFGwje",
  "key3": "5PbrtL38V7Df8uHzuwwoJgh9rPpaePxuPV7jgDw3ZZEHPfNoWUnu4Ex59hDjaPQPehRKoRVHwmAucrw35AdycYc3",
  "key4": "67ocbyMMMs3UqTzBZFUpXPehpRuzmugVqsyM7qkDQ1VhrDQPi7dYiJ8tG5X9Hig7ufsaKoDMFdMN9MLMBMhs3Krz",
  "key5": "5cm89jtgew2bogBfxoUU8K9qTeyB9TjgdUuARMmXyGZ9WeqR74XcEWx66w7AvXcqYJjHUoe3aZueFvWocFmsLiik",
  "key6": "4aS9EKUqqA91Ndf6LxVKshfMNM3NCCQ3FjmCbqVqBHrv5t5Cyz6FfKoCvkyiTsF18zUButoHMmvLmFBgD6X5jhdP",
  "key7": "64yuDCkWzUFcR5NqscrtbnsPbbjQT5KjY2SZepJpp68EAFjh7YRhi2QbUW1iE983jCizkaDArA4BoTkmvooJjRxk",
  "key8": "3WhnPUX3DQytWqQH5YdqxKDFgsdv2Ypu1Ba7jmYipucyzoEda5zJGUZRGUFvNgUoiNSuRGREBmsTs84qxJ8kq6mA",
  "key9": "4N9DcT7N19xUS6NoKU8axvt7e8NX23aSu8AT4QWHvRfF8nqMkBDzW9fGKjTY45nwM4EU7TckSNT2cZEhkD98uFBc",
  "key10": "2F7oqVALn4JEuLcTNsNPc3NQkdmvSLVhBURMfrXk8ovkHjygsPfqbJZue8iQCyb4j7jScEQsRKn28RAjVuyz1T19",
  "key11": "3JWsXy8fEoihJQNDmyx2tdDHV7J6GczfGs1y65aSvP6KcQShZxeq49YxZ16ENHQaPDUP7kRXyAnjCipfSFb2FEGD",
  "key12": "2aYbmC14BT37jAMVgoLM8G82aeVDLT8TPE4Rm9ANAdy8CHwXJyt5mk5dkNW9ZeRACjFNLj1NZ3UZF8jcGxjB93LC",
  "key13": "3SHFAtcoNWbzdrCgMcExYNXsdMBoBmfLS1NVbSq8exBn51Nq8FYwFTipMTt7ZsAxj6J9FWVat62diBD6uCNvL5Gy",
  "key14": "4g6f7n1oykuuMpFWeNFGRZXwLk1zWpbyjibhGKdQRNe3ZHsHVeU4dWXkduc4KpPFnfKmvcQJiDudwpo413Rif1ex",
  "key15": "4K9BSXUhwDMDkxd6qyc4pjKY5XiLt2ETyfAAfzf7aHSxtcyPkDFhHAaSipk6ps9FJk9iu4z89kNsSLuoBtpUk5dm",
  "key16": "5h29if2SsBNEZN5hqX32HBkWwFUuBes58duKcpBkvN1vsvpuJzs2Mixg8qBVXEf4MqYRsyGPaSQdkpT1skHonGAf",
  "key17": "4qgdxdSkW4o8e8jvuqMUfLGXMeTnJrBbnxe4E8DRHuhZabJZN4PiEeFU6Tjai5r1LphBbFYfHc8xDBmriFhCcLR8",
  "key18": "3YX2XT5DBdvNKwjqW6VJ3YTRMTSkAKjy91Dz5tvwNp2QcEQzz5EJpoNj7Umd1LXfFxdVPsjVwG7SdDP6A9byyaTF",
  "key19": "4FDUziJ5L9c9FzhMtJhZg8AkE1cKjss6MyWuENrHRsM368ymRjsdWhfNK5b6WGZTE9cG8LeVT8VoEKZWrCbYen6a",
  "key20": "4ZGnQxJdas7rVEKmmfBJkGHk4rVqmV35ioXMCHoz2gF9VZVEv4uFPwMmcKQo3fTbUMsKrbFVUf7Ab7KhJKJT1PVC",
  "key21": "5y6WSCv4XV5FmxWZFy6uJWesKGz6QBKFzTuYbGBnQaJLuEZzzH5BTxsfXJjbH5LcauXoDY75NgPpvsSydquzrPoM",
  "key22": "3KuFWL1Hds3KwgPaQHLnkgB96TcR196QGh2ebN6ykwzNve5SWfBj2JDKLMbVnJcueihYv7y6tAsiX4Fih5ncujR8",
  "key23": "2LCT65SinVdM81nNBYTvMDrtytnj1bvEnYavL8KFJ8CwZ83abWL5a7vHjTUqufvPoSCDxbDZzC3EwExe4DNpftGn",
  "key24": "wLkxwSRFR3mNvwvourxU21craH3z8zLmGHxnLg6aeEhu338jFjhR3j27KD1gP3jWm8dc8F6qrPwTxkMFhspMaDB"
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
