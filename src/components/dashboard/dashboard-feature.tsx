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
    "43hRoxJwMTuYfBiNfm1ekrJFULpecUSQ1oLGz4QPdHB7A3gHnXWjdxY522CgtPXCS4eshwJRp5s6Nx6sXCtnTdnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UD2gZ2Mwc3o825ZdUpy3LdbjexMDjiWVWCJMz3BxdFHP2v5f1o8tDyYsEkJ3ykuNLjkBafNPrBmDTuoqG6Y2VVG",
  "key1": "24rKS26FJsoVm57Jsts1PUpk2zuqCQK4HMWZWckJKFCknuYerUP75X1U7GobnaxoiAnpBdfiytT7C1XVp2LcYm9Y",
  "key2": "4AUovjW1XV1M6Zeb8ptd69cL7oRNwERQ2RbJm3tiqQ2eXVhAgQT4z7qSkixmDJpoBJdfxvJtUKxbULrv9aq2nZaU",
  "key3": "3kphe7FTvJYps4ui98cYFbUxEaatxB4FCKJ67p43tCn348rZFrz6p55tX9RUV6YyxPBEbvjCQJZabLBXMzBoNzQH",
  "key4": "3nreASVzqFcmGLudkpb84969a7pRjAgsnjkFhF7dcjyhnhLJW4uXruvfyBVcA8YGRzGKmmDf3NS8z96zbu4PgYMT",
  "key5": "4C1KVQMEPBemycZkBXv2qby9Yfr9cHzp4nr8AKhN1xkcJg8rz14CrC5EFVMaHqFA9GbvKmhH85vdtLgHS1vf2r5g",
  "key6": "47AoUcUGuthBtm6QrreiYrGADrEWrincaPTdgf97SUwRuENKYYnV1tHfhmTfPo1655FHhbpxc2y7gQcyprv7eUnd",
  "key7": "5G4TTgqcX5t5sWh8qLoskKTqqL9cjzzNaNHYN8r39acsLtAJkpisnXUV9gTxuB6Ykny1wCU8UcqDetviQbr8UhLQ",
  "key8": "2dtjNQEWVA7dvhJGjHZKEyHAHrRSrJE9DDYckunePmdpyUG4XnqD92o4vmpujf98ftwNaiv68SUQpKCjFvMWWaKW",
  "key9": "2PRtuaRQV6TKSkLLYXVyH977Bvit8kCb96KDMQrB1nuuiQetFxp3XTRa1zt8tMSUUtH4xCCV4BmPVRvLRC1bRuTQ",
  "key10": "4prvyY2iiAxutU3Ywe6JRdhN6mv8F3UwEhdFSwEmmjzKqosn2ZMFSAgEckHEXHSmJBrWauDW5mf6xmXw46mVgsdS",
  "key11": "52kaR7bDdpKD98E4NoTfj6ZfPwQHtHYrNgRRsNmgCydUQCJU1PxNRAtnf55AUBZLfo3Y34wMUHMY8Fn6a6a3QoKN",
  "key12": "2DkLQzXiWuVJA85tzNbKmmskzxD43RVsEbfngmQ5poytBJANZBiEA55XhsQy4VdyLM8WBovH7WPM59gAhtAQYJMS",
  "key13": "4ffiJNCD79wphZ9jy3ui8TwaAj1knz9Av29LpqxNEpbNAoRkGTedUeJkjtrLVYGWP3uXkzJFSfgo8Q4PPUfioASv",
  "key14": "2nsPBXdgWzJ3TEkyKuQ3kwBea1KpXGhJV6E1CFfRMaY2nbBq8rqLevywsV6WYREfa5cWWY5ERtBJNTcUa6QgT2vK",
  "key15": "4LDuwSeCj8edRvrQTzQG1nsxUcZHhxs3MbFLPoxCn38Kfd8gUUU67cRqkRK8fRPB3U2CoDeivXx5NxcqgDCrvQmE",
  "key16": "3ngFGKLPvu3g1xtJNTTjH911yjXPT3FAp2UEQiZAh2evfk4P7ksSphJbkt5hhprtQNL2SsSQ3XoxKWq2EbAYRM8b",
  "key17": "5eTFbazkPhoY29GWGD9ce9FhYNTo7u5LtZSnfXFc783hyL11aa9aqLzPS4SMmC2gUtcHJZ97Xps1BZvLNKptYxTS",
  "key18": "58LioL38nVN2derjFj9ApEKBncqEphA7oviJKzD9J6D2goKxpGhJtqpmQ2TkGNHfSh89SNfVYULtUvTTvnCsedSu",
  "key19": "4it9p9AmCsmrGRpDo5FwLFg6bRVBLA7GodxebagchbmupMiCHKbM35cUXmvWZqoCT7PccSLcJKFQyyShG1eQ8KZN",
  "key20": "jyQ2gKqKJ8iaxVvBmuBky9iCp9YZga2R44cf3uASzbDAkw4db7KG5t2RixKy1RudxGPdgfYxj8p3kff4SgBStsP",
  "key21": "5WAV7JD8iKFuRCk3c5ZGi69qqYH5uMZzeWvAFhsGkXQLiAsDJ3u8jZffLyWYuVo1wYEDAEjptYUBQUsVyc974AYp",
  "key22": "4nYar42u7R5KTsxmodnS6RVL7UAdCizFqqQmZLLaXA9DDABEVjJqH9mRuBWcUXJSGexacbeXkM3YMiQFnPtSvcsW",
  "key23": "4SqbZbDhKSakogVYu3hwyhVFiUokTRK8dpao3iZbiKfRxW6ZMhhjijzjvQy9ocEA3us6WAUv47ZKKgLTwtHVMyM4",
  "key24": "56c6Wiokq2XieiZsfvJqSAts4ETASTtBP6Lx3Pyq8G8DgQFxdKHRGvhXwt5znvDvAEcaJh8LfdbGz4ujGYqULXqK",
  "key25": "4MraicNwL81Ju69ScGNTPfaUvDq96ea79x19TuDB9FiC6yt35mcb39yYUEu2jzyNhLLxe7XvET6cgLVHF8VSCe1X",
  "key26": "2unHuJCaVBAKD7QShhd6m8JWrtStAdQJijeQR2pwwgrtMvwJvLTHXoe5hJaLYmeeLM9nXVbbfBxFWzQpuFpsMnrB"
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
