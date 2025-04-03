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
    "37NREcNvuvMBRJxX88ByTxXKqie3n7MPoa8FkEabZzFsQsSUnro1VJhD4RzcBZgGiePsF7wRupcx8pFqm7SxTfuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d3PPTWtcjFS6U5fprmgeZjb7xt19NHsfbzYz5UMh2dx6Toz3K9f5BXrk2DfY2EQ8r1QekJ76xZEdaquz7UT5pw2",
  "key1": "5h6viWTzVyuLFB6upK9FZ6eJbC5svRk3tMXJChU4JrNkr8HjXwtP2cZNoaT4xNdKq9JM4fHfjWnuAJnjj6F73m9m",
  "key2": "4aTJqmvJV8hobCS1gZemQzgZdhTDTYyiLcRoebunJ6A7DghZGxbaxX1BTrEY3LuLbAgtsoGTqLYivDqmFfXbPG19",
  "key3": "3a429UEkZ9HiDcpNSiDqNAPNBZtDZxUZCavPkcyw7XPBNHLdwphCHbM9C6Pw9v6c6moq6Katzwz7nv51Q4MrDCWj",
  "key4": "4mRY1LzdLK3CU2goz6DK7FvNDqBa22gAuDSR8oA3sWFf9waoDikfu8HkAahASNtEgvZZd3kSgShhdTn9VwCVnHF5",
  "key5": "5K12gi96N6MHJSiET4vu1qMi2JJqSEnE5dggqjZgHpesXrG5yefTp175stMixcJtVkDVHG4Sgudi4oVzjWRbnES7",
  "key6": "4pMYQLXvDPvLqZaEcUVvu1fN5t8SqhftqUbsdSiqivPLECiYwpH6dRB9nVkJzgwQ3KbhbXNXYUfxc8zbfPjitNjR",
  "key7": "2nBWgbNyfn6tPyWZUqVrNVobp2i29SMWkkV8kb4BEbPH1R9yYWCagJuTZ448f1VMFMUxr3MhbC9SaeZyw4HdbiCG",
  "key8": "3Tu9TGTGdER35G2G3M3zhdR7jAbqiQjmsDdd6XD4jfxcqUWwY2PcP93iKNqfp2xUjQW7mzeTbF11cj1mYa9fTxDh",
  "key9": "gSV2f1Aqvs5m4vBoqvjNkt2WccuKB5VYpUuZ9gh6HKzseppKcpCrQjr7jSW341hDm1WXnshNrB7LLx2QK6RyZqV",
  "key10": "4BNj7aCfDZw4mLkCHhVNSUNE3vzhujwAYUBbb25gxXDCaWduYo5zdKyFym3uy8NDVVL4dHJPJXuz6JbNow8Rqgnq",
  "key11": "4582j9zRavLxxRfCBiX6FeytLuRpESMLpGvnVyppcGo9CByWaWCiUyDGpCyPcQUyLU9brsr2DYszmGbgCHzD2uST",
  "key12": "2GAxMMFrTK4msgoZ8SFquok4m47cbaVPRZbH64FcDE6mofNNBfz35XoD2pZjCqP3bkqvN5o2SrtaLSKc1yaTuFEo",
  "key13": "39dLXGX9f8AS3vTMyZSmJd7fjEr3b6goHbHxmBCy1dwjuRDRUv9GYAZiMxKM3LY8Sp8zkqSu2KV45h2z2MdXEnpN",
  "key14": "3h22QHQNG2sPb2uPKSaESuu8twpi3dynXM5rytTiA1N3cDSomXkBDmdnBvLP5LrmpXdybukNo2yuetzAeesm388P",
  "key15": "129scqaY6LCqKFrXTH156VZ2KQeUgWfeh1i1uoX24Nb3p6hS1ib3U9uuZvxMCDEnVWSdV7QtT33cMaSVqwLB7Tqk",
  "key16": "oqwuQ5fA7ir1i5PvBbQNFbgircEJsoystqYM2FgrkxqeabPSX7wynSPkKsfkaGiMY2ZxjzX68HgK7RoixUpwyqu",
  "key17": "2VZUQxnRKpoXS4HC22s3AGHH1uAbbWwg5Z8AYG7diYSuf74Kb4s1L515kMNHLMkdMnJhTuExUaSUJsdVJsEaPS7e",
  "key18": "27KwhzixvENqryrewCJaGDGrtzZ8Khj51BHWnnyuBKi9Buv5djxGzaBjzxECLXpQNSwx8PuTVjrTvfhbsNyWZpC7",
  "key19": "f92LvYQfPwu76FVFf1aJeYYhzpuKPVBaop4fD4Yn5JdVbJMuDkkMxAQhzdbdPRombm7CFsDArEKE6LSuu3m9DZm",
  "key20": "4bPnUW9M4priZ9WbN577F9oiFJkq5zMrd6UJN6LTTLBtMCWourRmcXekG8BWirYuxAUQLp6CvbPfp1HaGnQZe2dZ",
  "key21": "41CTc3ce5bDDsenBRNvc4pve93rgBrBdQLce9SnM1SNUYdFSZdrjFoG4n9MZo8Sv7V1jdaxsvzwH6uaK41LrEJzi",
  "key22": "3kGwpQvX2P2WUdVWTViC5SaXtMS41QEwvhQznueM2QAenZsYEoFYM9EM3HgR2jZ4ggf8hgdfJSKQpe4Cmb4Gi9sf",
  "key23": "4hrLC934WNQa52uBNFTonCFRXdk6sFwbP4Hj12wuC26nEMRV2Yd7A7V2pNvgdoufBas5CMzRac3vZUVeGwFjsu7J",
  "key24": "34nnBkFhuPSvJkxivgPnK4wcNaA87jFQcxTn4xSgJmzXZYGTXggAt3DXtyDzKPZHbcSwUqVjkEeSWkReP9w5UMY5",
  "key25": "4AfPwYWi1ETtdgftN5dgfuzj5EdSR53o8VgWVrmohYxGnhv2DZfvpmT1azDtN6WGH19VVqnRHWZF5DSfJABNAAVn",
  "key26": "2tMe1YW6Ukco7nQwFyqz4upuiw7qrygjNU6tGB2VsedWvEyWfPXigVJCZidQrwjqoVpru9W2ZAQvn3kxJAuYay7y",
  "key27": "5g5k4wKL4c4kqtjrh2ZnW7k3UsyeV2G8bcNBpprzTvCYexVLuEg3T3e6MFwXmDZQo7npLcbmaVDf4qDgtMoTs9y3",
  "key28": "3MaMXRKAHZXXHrUxJXKGH1D8kUc28owB6x3H8cMyNLSKNs55iPziQM8Jfg9XZtaNPv2AUqrAp6pfFfQqF6NE8UFj",
  "key29": "2KWsc38oVe44NDAK4bJDki5NkjfUynMHkCLsn8PSV7uNtCm6sJriEe2aDYJNMFC9XMRU85ALgUjTtTg1wdSPV7TJ",
  "key30": "9gjCPHTbfp48CaTnVCvs3o9EJ1HQiKLMzG6FfZGR9XDdpcY1YtLB3mLVixovydEScNxA3hfGCmXgeXwfNFwAsFA",
  "key31": "2eD4Pok2BL4Nn9iMJ1GKe9hoYdqJUjjRGRsyB84arS618VojMq6UdmjvGpkrsRZ5QxALfP32qwDBhfGayxvLd4Kc",
  "key32": "4C1TTQdLpaTZmPH9kGNoH4xX45CWKRKw6yBxcLTCrdRUeHSJYZdwqZjtrwoM7gtXidvxr5kJhAd34Nc9yBbYFxKN",
  "key33": "4YfD6kCGKvLkUyiBtZqSVkJY5dLzMfydn423xWMqtC7gSTfRnoWt2ntgyCGzmPAwPoyJN2Zm3QgqiGwer7K8a2qf",
  "key34": "2WYFLTu2py8PXAkozquY5cENnnryK8WXq4SgKULMZCjug8XeVwxSLaHEJzAWAvGWsigCD9H7vsvib6omMkvjUduT",
  "key35": "2NPbcQq2EWhWqH6uZDqVQjm5PWokGbotSe7Vanob3WFNiEAszFxgw5fkdtc44i3pUpatve98kYPGJCduCJtWAwAm",
  "key36": "3mLjwMmQBaZasjkkBX48uT7NSo8ubFbna4xCqsLNZGixvgT39mSWg6iQMoXeyqwPpz4S4NiTqWEZpqnJzi6EMKuX",
  "key37": "4K1PsvG2j9vff8BiGBrfwsvhWB21r95uAXH9cNePf6CcwiFMWZwSXNuxa8ZDhkSZM7sUo5WRrEbrvRqe99zLeKc1",
  "key38": "3GoWzc6sN6ohbxcoryXTYYeQNQmZZnwwZxLonzGd83GQfFA9WefC4F8rCEkSj5ohP4Y8ZfKTiN7oCSbq2koHb2K2"
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
