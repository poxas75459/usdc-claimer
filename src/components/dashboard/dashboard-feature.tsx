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
    "4Csq6RwGcGyNK5HsLu4tYELWdKBJPwZQfG4H7wnLLXxJEG8m5Ezye9omk5uXgkyduUmZpitUAvidWMaHohBRaAkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fik7zFgjwuCSQ7zjhbHwu1z4Drh1ZwcEVxUToozDpcF7MPjyE922XGLT29AxuSWEYHYTt6nDChpLgZ6DXGCuaHn",
  "key1": "xbQaoJjfxPBTFJ8vXhgPdsxAYZo9Hsxvem489s5P4x8KpHTX7V3HpyW3MtU5PZX8cLkh4JkdFPj7e7b6VC9T64r",
  "key2": "fS5gjmyM2cKC9nvVPB2EdAb18X1cCiLHDgwFivcoDKGZmmbfeuozMycg4AiCBWv2XEWEwp81gwURGfZP1VPjms2",
  "key3": "347G7LaU3niNW1vnbydzk4PRcjsgxY5qpZXzX6bHJ6fbhp856xzS6fermjZZxFKHGTk6HtPRrASh1XssUyvnerog",
  "key4": "2Q6jC9MpWd3rh8wcmF8VpXfgqxwsNGP7ssyUTsJPCGGoVBcbHe6emvyirKLjeJkh62hzacoErAkAsZnXMXeHXkNW",
  "key5": "5DtPhW7vcwf6nCZtepoyX4KsfX4BnUU8yRdTWAMYxLnUNCs7c9yq5dXEcAV8zFX5Hjx8dKo4dWo9iEMZ5r2EMEPV",
  "key6": "dKUuV2NxMgqS5cMZo5QvyJvtUPPWt36Ve46MWwCUchGJHiMnHGqwRhSfzC55u4Pxgi87dEXgAhrEFSGSgQThSvC",
  "key7": "234FmMqrmvAaQB3EduizdAKyFz8eN1pbAkD8XtCtE4RtE1FQJat5LGShZDQv9ZfgCKsLxsCz9xyFfwsGVrAeJ1Tj",
  "key8": "nmk8Jimoj6pMDPBdp336hTGd9phJRo71rqwr6a8JuCobmVvk9GwyTGjQeLQPfzH5wxSMdxr8g97v24wspBoXkVf",
  "key9": "2Wa86Vc6819EnaVUdEob4oYkSb9pNHFZcWZ1vGGw47MdzUnpuwFjPGshEyyGBP5hePawfpbS3erGc5wra8WHQhbV",
  "key10": "2WJgMDtpJpd67JTtPC5yjoSaSEtL2xzn2eLyLDkZxCwjNQG2RM7XJMmcTt3uNhZTyQVxEVLfts5fsREdwrsx29dC",
  "key11": "3CiuZskZHhUHS9J2nkiS4rWLpihtzfJhRs6XP6Fawu83GWNmcnRNig1cak8RyuHKxiiPA9NmBaD11TUJFejMzh2a",
  "key12": "F2aUxKLBYYs3CeWVkF5AaxdtGfXT1C2Eqe9aiJgxHpb1ACEu1x9n1HY2RAJaTQctg8HBuYb9LM1eVSkH5kG4Hi4",
  "key13": "3hA7cUgh5XyEtQv673ZpZqcXn98N1gyyuCBsucCTHYKkSLHX1NeXGuXnk2reFLnYa9YrNs5yNLP4j9L5uYU9CnSH",
  "key14": "4QZmAg84NxPGUpV33m9nAZYgCW9A2vCCAoUJE5wmTKgivqgpTTiWWYGVYN3d6GypmtoUZBP9mmueZ5MNpaxgbeWV",
  "key15": "DCaryDoA5qpXhgpLc4rXMV3jtAsFHhjXgGHWRm9WkxVSVmvPbXdPJwD2Woe7hEey3rQbzXnrS7x9VJ1TAuh8saG",
  "key16": "3ucT7dqS6ya7EpFeUoyLGKNP5NjiVGNi2dQcsdzrkDTvv4dTw59kZQVeCt5rUfCCdjfM5fVqNtt1JTqtcmYnLkjE",
  "key17": "vLP4CcZZYQYt5XpsZ6W3dzC9iuQBE8f66b8FBnZKo3knLYppYT5WWxT1bA7xuD9Fuu4ocXFpJt6aDcvcwGsQWmA",
  "key18": "3VDUN22eR2Lo44TzvvDRXALfh9RYWFciGq2LwQ3LcxzyXm9Zhr4p9Th7THuudMVNjZJ5d8z69ARn6taTcdka6d5b",
  "key19": "2qNFg6KyCxWiksi758pnByycYQnaCbQMtjvfkYQWrJgRknpDQUAaZgaK7xuQ5CabKDzpYXziFBG3xnA7cZ78bV2A",
  "key20": "3V77KS8pEBmpduwHbudTuuzoxSsto6SiqJmfEuwqs34RAgd31nd7jRnAeraR8BXKJuWJUNzVzdLKT57U8GSQnWpH",
  "key21": "5G6JbHtdHu5NTEZyJQReSABVEWKYfTeMrWaifcG2KYs7oJ877ddMyXeP3qhxbiHi5xj6K2vJN2UTbtcZZghdeMUZ",
  "key22": "35ZMWQXhAdc7vv282JzsFmbTwZjvMggTge5ueqVZoLkpfCJ9Cq9KAXH7FDdJA8Wbz8G9REy1QE3oEWRq3BhRBera",
  "key23": "3RjE7oMF6AadaZsKZ86JaHNRT4bbHQFdAYmfbHn3g3RtziFRxr1BYLesH1JmweU5Z1H8Gg6gLnHhjgjgRhXUTLVo",
  "key24": "5fi1EveiYfLDg2YANd4S8PfHE8R1vx2N4NjMm7Mzc8vmhAWgFvtuKBuH5tG852C9mMk33FzruBJekF8P8ydDiqZH",
  "key25": "3vwfcN2QbRye4o57J2AjAwvAHHt3gqSAYAUmuSYZxwhdq8j5ju9W1DjWfpFjUq9jev7SgcwJNDci4oUKHRqSpCiP",
  "key26": "4TRsU4gFnuTc9mKF74YasAXgPmKtSE5D5cZzbR1YEKbtVD5BWApwzRzdkhM2nDBjRV8UxVXHMwQpLMaQp7Z4Xjp2"
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
