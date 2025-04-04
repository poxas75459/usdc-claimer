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
    "2DhY6jvCWeL5QFMpE118XEDHzf3GSuwPofQceW4tT2rJDUVeXLM5sCAcbtEcE1nXjc5ZmrF7dg4tQWRkgBjWjhEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RvD7UE8noMZueMaY1zQEUPrcZkxjkcD3a1Sv8DzvjuqUXrCpiHm6BSgtk83LVqqMfcyn9xwtQ6YaXN5zh7iR56S",
  "key1": "87zF7P4YzDjRKMAX8Ur8q23Wvw8KKkTxTTpcP2xYv8eP9h5XjEeNfc6FwTdtWmwuWkxLdYyRaeHNoJwoZie8CBh",
  "key2": "4jf9vfAfKzBPzvyMdD8rj45cpV1HNtKX52jxqJqbReWmZxdyafznqnvs65Ez7VKoEf9cEGwQPkF4ZKAXshAmZm8H",
  "key3": "2pPymspWR71JHAKcYQWkSrgxYPa1noL25E3gHoMRVdpP56Hx4FK8YYv89u7WrS3ForZnL2theKnudTJYMyMgqo82",
  "key4": "QdEyi4oBi145hoZmwTNU4L3Zr7kEjGA7F1pVCfZ1wcvK1ZZ2Bx6jFDgkTeUD1gKwkTWasyxUvkaCDsGV742faW3",
  "key5": "2RW2cMvu6ayTDiupKmqDVP5Q4Mj356UoeD6wG7GkCMaEVgG6zV2wMjEyJE6ukDJ7zVXnJBxgvpa9vLb54SYtg6Kv",
  "key6": "4qZb55MF93NKLWnMssWUhaHqyFe5zs7bVAQZg6JykdDNA18XW1qo1b8sCw9eAMCUXjhRyzEZL19MZyVpDC5sKcbr",
  "key7": "67n3dYsEZK1hU1yJN4F8AhFRSBpU3Vk8NiJvgJgJ8gfpXanqATFpX8PJQU8GXvasFH3vXeeVM6hSLbMoNzXzKur7",
  "key8": "4SLMNT6NqsY5VaSJyW1uAjNePw1t5pavitc2axs9yse2Schdh51nemAwxD2taGe2kbLRaMfy4aTjim2Co5HAgsnq",
  "key9": "62ejxrC7oa121aajTqLJDZiVuFV7NwNpWqVbZ1VfMzrop7aSukL1yzURGMJigxDCZb1YvwbrpaYEa1TpVwavavgG",
  "key10": "Ac35LJbEuyc6ZM1wYKEr8rjhZiq8mRgr8TsWFBUSfTZmqHbomrvpwHqoudofCQ3i4Pdw6yehMC3QU3T9ogjEuAo",
  "key11": "5NoJeKYhz2bD6oUadhUo68JebStYQJc49AgSgqA4USe2mp1ZMWaZTvWiRcrzFAoF9qSZ6e9uoaqZAiA4cevk9ozJ",
  "key12": "2TiPzg3MFL86gSupQpE1sWBrwabyJrtfUwVnYigBpoEqDtjFDiZeYYyv7k9g1shxXRdmhf1yMTEVcqVS86qga4Bv",
  "key13": "3H1Gmibakg5LkPJG6P2sx9ATaA2rbpVBtCWHe7QawUjATdNsdtUcLLaen5YgJchy9Spdw5CxM1NakssKi1ngJUTo",
  "key14": "3A93vaDDRQnqgnH56HUPBTDiN1HZKrgh94FHL18JFQrizk3UaxAsTHuSiLVE8dxbQaBJfdbP29Ue6VSmp98ooHLP",
  "key15": "5LitZmKHbcokwaTNJg38zxGbZDHVGMV1hJKFKQ18e8JJSaLDFHJB3bYFWrdtD4Yr4ibVCjPkgsSecJ2NwGAf4B6Z",
  "key16": "1k8M5boXf6U4DHq2JoHdtygEhaDWeQH5EyqPCH2B9CdFdvLPQUb1kBxj6DqHpH7wnPfRy5NupcxXKdstXA9PtAS",
  "key17": "voLSpFpEhHDkD4EvvRKLdqQgBySxzyMtkhRMrsqgKrkABz1DiSfNEThNvydzt7DsgFn3zdAiRvpQ3GwFPgSw5LM",
  "key18": "5Jfva7QfYQGkyxcsByb1wqNgYUmZJVVesfnsL5J6JSLnSBbqSHqHVteFDAx6Yzinq5osgLUFtXijyDSrScacHazD",
  "key19": "4qkTvhzf3wWDB8vQX61WpMbXn4Hv8EeKfCqoLGw1DKn2GrRkV22waRaSnpD5dvEo5M26eS3Qq34MkBJA29CzWfvZ",
  "key20": "Hm9Lhzc1biYJef7gqriZcsxBtD1FTYhaTgWeeQJzXKN4h9wEeWnaxwsac2NkNS2yogzTVDbWtrmBBtDemrjPdkX",
  "key21": "igeJ1HNS9fh8htP2dfHdaZLvovEkcVCcyxahRg7jfTHdp13fr1KVQq4kfWtH3xtavMYHsXBynTPuXyLeHavE47G",
  "key22": "4iYick1pvZkUEYQPxSE5sXUq1Zk8LP9hNZw92tWoUsA5D2zNhe9yodiox78tqZtty7qnxMe8mJzY8tnUotWLy9gA",
  "key23": "5uui1EoK9cb5ZmdhmwMokLDBcgsA1MWZmDKNEBALptN2kdgvEJ1oiYamhNWJofVDVVSe64ERnjHiVJqRtAfryCZk",
  "key24": "8py7kMYQNTdQtuJ937dReWbQmkP5taHczdSXj9AZJaLVznpNzcvKbiYCcs6JPUC1faCDModcroQLA1EssS7ijUv",
  "key25": "4Vf229BJuuxs5qAY9ZXt5hECtSzHPFUCsdVvEe1dhDpE4VVaKc5m4HTEr3hXoZYBALL5YpZnjpasfw5MqP58hSab",
  "key26": "66jg3QSRYedxR79pkJHXMCDWtW73gJUajfd8LyrTiYjzxrfgCgkUrZHy4GyCDRskbVbRUXCDHFyEb18qdip4dJ7J",
  "key27": "3zavmuac6BNd1HvfwoHy9g8DjFnjes1utvv4m83qCBVE1LddsxPxRkESg5eBrWm3or2fWanRN8ZqhCqjy7U3gUeh",
  "key28": "44QRfNFBNxjYTnyk1Q2JwUeNDAq6X1feifLTTuLbBHhWt8EmsCVLFJLKkQmRPGPtfW7nKbubwZLEQWa9VaRdCTar",
  "key29": "5dNsouzJzNvtC6fuiU4NxYHhG1uFcf5Nmsv188kmwKu5SF5bAA4Mm8caCGcsa5rA4FNByfxqSFhW2G1cJHJGPbYW",
  "key30": "3wmYssXhkAyHMe7RJJahwa7V5TJNX5aW6yUbbaqCHye5SPvf9Tro9rJZv8M9qi9rnV3YnbwwXWvEd3yfuEp8hhj3",
  "key31": "yeEgu9STW6ouJvgVQbyrJP1BibajKyV1kYkrvkFVLhf1Un4LHoeBtTy4gCq6bfvvXdGFF9oHo4ejGxupYgh6rdp",
  "key32": "2fWGvvm49AFKD4eK5EGfH2zybYXCW9gZ9evQbnKAP8FWtCnjcvNuBnsM1Y2XzzVmEzfSv6tvZETEtuBvHBCBVV3M",
  "key33": "47Pv5YoXgkdxu8CUU4VD8rUDeBaBszStSTttzdbEX6pMEGGo7uiGBmqcKXZhaXdtDMFoK7CW2sYjBxeYxGgM8RHg",
  "key34": "3gcKuU3oLWGjm3tmjauwQT8e724kwRwTB5HByNqnuCBkRVTx5zi7et52Rtqy8BR5s2yqRH3HkC7Adzf536xU6rdn",
  "key35": "5nw5KGrLYz6FCeMHT1h8As2ZkzcpQFR227sJNAeEzfy4heCHhwHrGdTKh31LaQwyRgKqhufpN7LWdWRRixTeaz82",
  "key36": "3uzu9ATj1mEWpeZ7PB4ZBiuZDKFYe1fepKBjnXpZM1Ku7HwJvtBHEbnmdKSgjR8i5QFCkpisuKNeuoXFQypPA4C3",
  "key37": "sFcMruDdf61auSq7LeazZvjPoQHd5AGMNsUoCeTreceSqaVqJzcYCj3Lts8gPWzK6ZaYjotaUT1222Moqtq6eKR",
  "key38": "516XWjvc77e5DhVYkeXAi6ypJENXUmBwwHT3AoKs2uzCeJ9oJXsZz9MSdtZrDbvoBqymLAvHTiojxhokZ1YYqTTi"
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
