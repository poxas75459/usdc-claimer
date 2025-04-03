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
    "27qnHER3WNSnMXkMDmVeBtdgpNjTBn3EE4i14n5gK7zZ29FzjSwQPGVDieyFNGcFM2PYdC1G7WT5QoEde9Eu4gWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUvpahAyGRmkB2UC7h7Av1XJRkTm3YrbpT9vYZ8mgLC5xnnz4nBabtEJMCkRhEvDHF6odT9bftomYviTwHkL4ig",
  "key1": "4Rd6s8LXo36RTpius7aQ82AowjfDVYttnd7HTmA7XLR3CPNPkDD33EoLJD9E1qvURpM8DzZ1EV3ZQwdnwPqpfUx1",
  "key2": "4ZPaQyfScmagGuvtnzKGTHWdBxVeRbvKrzTs54RqPuQrJTXfbpPR9oykmvhRVMRApNWd3G19TN1Xz5epko9WYP73",
  "key3": "C7hVNZYKkjfCYnWqdXVD3NQdoTT7FJS3gUWWQZBeL62AiKtTx5uEVMz2dpXBzgQRCcf17RA76x2TkQggHaRq8BG",
  "key4": "5DRgQNKVEsuxMwQQfmi5ND8C6HAryifrNTJ7ftb1jJfYpGWUNRgHHhk1tivS2emoLXCojb5E2Jwf8vKZrGyWRuf1",
  "key5": "3zcmLLZZeZYhWsx3HH5yVuVhFx4eR71gdYMcHe3Zorx79RNMZQvBKiD8uJ3oXvDL8tZkFh6zcAUQvNJb3stNjsYo",
  "key6": "5zK3LWAJ36fDgSvfMFLBemXTqm7WNkptCjXL5xp8JNnHJRv3oSKZLgA9TFBWAxxkKCHJxan2y34Dw8wcS7u2wPZC",
  "key7": "2aww3ounkKrNpVkSnbrDZiYZredrkv3Jg17rFpMToxW85U5fRyrgtpb3UV8hSPzDUXaqoJDaEvNfe4BVawAiHRdX",
  "key8": "4LVfoaJyGD7NTbFgVg3pJq5EbTPYuohLUNpbtuziGCM8o6jp6r3U8ZMg3ft9wgnn8AtsADxQbWnHuZN5QC81PnVD",
  "key9": "1WRT9ZqyzJdzmSy4BQE3S4GaiyNoaNHb1iCTUxgnM6if2y8PPnA5WeAqBwT6vdLZrw3UrrU3oAhD7pwtv8sG2Dz",
  "key10": "3B7C1dh3sTRDnbibgux71B8DtPP9QAdUBHMmJyjZj5RrzzaKYP2XyVWumm3h8F64U2tkjrerzmVuuBgaJRpfciVq",
  "key11": "5zhygmVDHS9Q74F1rSmc2m2NouNwHMNe4UbaMu1ZsNZEZ9hy2Cjph8zkbMir7qqLZpTNp9VUef4TiSTsZfZNFpkp",
  "key12": "2MAssALWmcewzGkZZBdpqaL6qnDnNVcF2JyqCt5836LLEGW9wa1MTXHyCe8EqWVPWUPjmrow6LzT7vpNWAGCCz2J",
  "key13": "5ZGVqVggCpoyg8Hg5ruiQd1mRtRhtamf29KPCfAg18F9UpQnvTbyE3a5edKwBmHipofmoS5FvBLXiuTg5RG8EYsy",
  "key14": "5ZenrLrvbDQTk6QHMQCHRpw6cwdLxobe6cBwmwHgjQLaytPnUiG7kZusS9cacduvapSZa4dzNmES9SyjsE3croj9",
  "key15": "2yEY2HxM2RayeJinCsCm9Xpogxv9kqndisDpr8ZsvFHLq3uUeYeNxHfL8m6rV1oF5R7NAHALhC6xrtMLuft7wF3c",
  "key16": "X9K5sHK4NLsNv8abWQbZsLa1jJES4TXBrdPEmaLxtE3J8HqWoXG12acRQMW7zoLmcUhYdQsj7tRVPTp7F81zAw5",
  "key17": "3oH9F85D5yQnYCRJbTcVbK8PVYo7uPURtVvK6CKZ8a2PoSF3t1u3JaZUAx4ZpnVGEveZVMdndeq5ALVtATCyJJL5",
  "key18": "5FcYz49ZvFQyuMJ7oXha6QyMdzdjzJ7LN6UBU6xMjGzi5wFRATsBv4KR91ykyA3xkSM7F4zVZ113kEEwApFcW8gv",
  "key19": "2Z5aNvLtkA1LjQfDYePQqRH3hQWEn7RyJPqqrSFc7cRKPCae2VFFMTGS2jYDTtnf5q8VvexViP9jDV7XDRom4cu3",
  "key20": "5XDtc6oWXFLHEdeVADqYbJDUVQbRpFJDgAbq8h4kS92Roboy4js2a1f859mjMzKWP4Da4NkVeNebLm8bGRHffswj",
  "key21": "MX7s2ZFEQHViFC348EDuSoUnYdoZ6vYFF5bTDNarP1DXyY8eqmBV1QGyt94VyxzggdRjCmaxgpicmckwjPqGDJd",
  "key22": "an18cS8QN9BL4LN4opCuun6HwF4n7ztW2tdBSZuY6VTJZdRgtn96P2xToCCXYKVm526bxMmZjA66HLpEbQhA1k2",
  "key23": "4xLV7VtmREj6JuPc71vVjr7y225aZ8AkwsNjE5fNDQonavY5WbZDxGubQogEK3xGdMXqmM1UYLJdRiU1agBonUyR",
  "key24": "5wLsK7w9eaueWwFBkTcP27CVeEUUnGrn39gaBcS8a3nxWhM4DDcidJwrhFYhqVRChLtWtHXHMGWw5a2hA53bmdAp",
  "key25": "3Dg4eaymSEmzG3xZsRJr8h11axnPyMXexBJANCGjHgd4sGa5c9whrCtxDrARzNCpytHMLZ4Uyhpp1cRfiYG8DQtc",
  "key26": "UBMEWQZekGxGo3mJ5aX24YJmftwYgpng35UG2VdsnKjsKaSFLhJ2htDvUZ2mCELUgrNHs5RevsxLAZMfGYaa9aM",
  "key27": "23pY9Ug9AppHahYdrSxpFqUp5YpSK4spDyNdpX9bZtJghVRp4KFfjuGFw45EPovBXRqnj3aaKGGXnZfywu6JGnKc",
  "key28": "3oxfzT1zcRXX2NRXysTHwNe1yKDTecAghVHYBiS7jNCJVobx5Zy4SR19N6qW2tYoZ73eGQayCRKnCpD6U5UxagUT",
  "key29": "4dYmG2fCXZ8LWpztn1V6f6eQJrBScjvu62Jk6RhkBNncBF7JpQeqYKtrsvaxU3bnFgBPLycwGgnKBK1yLdWwquNq",
  "key30": "4oti3RGxdhfp7x4sbQUTyKfstHUkhZw1J69LfHoc3psX7ABiptJr9HP3skgamzwCMSZG18kUMCYZuPWiyej8sKyo",
  "key31": "ZhWPmLKn9K8AK31GY3WuTMWr5kBJJnKXFi5nJS6ygQGHR3KxBhJpBXqA1wcTG2MjhcGZhyQKb8eNn4mdQt62RjJ",
  "key32": "5ZJYVFuAuDdH2mM1gbArgNup7iZLvU7wXVd9CmifY13cxo8aEkmdmn7NUSH5t3AqV4f1FWmEKf3uHk1WgqMoCzhg",
  "key33": "3Z9oUb9gxcug35vbk98GefpQMomoehb6AZXwX7q3Aeo5NWRdpwTmtbRgXyy36gQLmW8ZNpCh3AFsBE6nSX59uW5n",
  "key34": "3sp9RZSFtBkGY3aqwNhdPAxnEhvoshFAbH6h5AYkXn9vz2Y9sNPbzEsbgrNVJKewEFBWKysdKBwYEy7Bfvgwuqs7",
  "key35": "3hFq3q6j9Ve5MjGZihd188y9tHHLNNGrm6U2AxqbtUL3gi6rEYqkWSamJrLZxo7zBve9vcfKApjfJihobZmLjUnk",
  "key36": "4yErjrBcbW4iLd8b5Qmi5e8DsdiHvVjT64TiDMwc6TX1dzC6x4SeZTmWTAUmo8NwWsivGdarcFnbkVh3jBApWEc3",
  "key37": "2nT1oA7SFeZHJkLPKtS43TGQJMmshEx9ad1ATbmFezkpWcbpwHXys5tU65J73ch48dqjnQjkNadEDYZKqFyX9L8r",
  "key38": "3UNfgAFtwAheksdzocPLaKWJe3MxEC8e6doT9mMmcriHyyuW3dC1kPZwpJTQ3C52hJYd4AaNk4DbAbtGVSuPWMMb",
  "key39": "4WxkZPXMkUBAnVuSkRNB2uz7rEvBSdDhGP8kGzqAA5qHbBXyPJ5ovgnRquy6HeFGUGxBiy6iqt4uAPqnzMbcZX4j",
  "key40": "5n7kkmZpLzp2eJE5W79KFMo7fTrsWemuXaCkNWK4vPVtbWHfM5qxXXypHYtWUypzzimiUPC6AZ2mbsA54YYAyWhm",
  "key41": "3ZjSvUwjbsQE7JwqcvUC4HaFfUfScKMrxz7DSpJQeDz2p32EKDVkAdertHDkapTJZS1gk8P9XLF8RP5GqPZUdCRf",
  "key42": "255m9YLU3X37rj4MvA8zAbXvANXCtAW6qeAjALXkbQDfd1pkjYPfEBLBQVjZ5irSk4X8C4RBWfsHLBwASsnsVZNU",
  "key43": "3ubKA3AtYdL8CpfiVzGPHr3gXXZYtoUobM5ni3mpvedMdyGnmAL8YZYf6t4Av5kMEygSr9sXiSJLFe3FyNWRF6Zf",
  "key44": "2aWySavSGuVpXMyfcbzvNRnvkeauuwXwcj6QgKdR5uQN4yPGSg9f83JktiDbbtfayC68CkXKgNixdy5qqAbC7mQ1",
  "key45": "4kUEe7ztBciSWfX1skvnxKheuuB58ygkVBeMiKtDEx9g9HiVPYwH6K7ZzFU5aPyqsYm839gKF3EchMdHZPHYWiEi",
  "key46": "5qniNzUnpjLy9MNZSruFKTnLNCcN5VqQG2aiffz2ENYLRqE6HKuo2jXFryQNVFqBJCoinkRsFgUimnC1fsJjUmVU",
  "key47": "2d7bWTPr5rg4MdqMGYHhyMp8JFWWRwqNHNEPWYiFNP5qHLbzSr6GLd2BQjGKKMo6HekeqoywBv8ukUpJWYm9PQQp",
  "key48": "4MhcMMYNiouKCC1YVy6pnd2gh5GKmEgrMjBmLDAqHZXjeywEdjDekYm3f8hUtBuXMMzk4q9XzmzMTGDsccDiqYFZ",
  "key49": "4aSn8HxxeUi2mWRWmPX7yGUeDQG46YJAaNWwP5cb1ikQPFfMc2VZMMSPiDNTn2UN2aRmt7Hb1KZQRKJ24Tm6jiaX"
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
