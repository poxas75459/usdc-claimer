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
    "KRRnkzhQk1oMsTAbBE2FZ3sWREBMAb7tmMesXPaa9GGnNeoq64YKgmhVqTwJk94kBKFmp7Fp6zKPoYKogfHXg8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47BaPS9hd8ZxUJTxegLrH5XgBMA2RmvgJr6cbq8nQNba87qVcnseDTEyKwR5XbAkpUAN8VUeKGuDsV3oX8uEsdVr",
  "key1": "2u3uGVnpL1jcB7uA2w5wqGC2eRsDuisAEcf82xNJraZoYozzt9ShqEunjes7LDroy2RQwmLUittbMkSvBasMJDcU",
  "key2": "3EmVisGE9DG6txcDnKGLGDytGA5rNq5BqFfjNi3WSvQUHfzyEFxXwZXPv9NWPPRZk6ChfBsHsHrcSWVwgUFsCmEH",
  "key3": "47P9AKaX5KMeDxgTvQqDcLsyQX8dfAH8gTi9tBKJC3GpjpCNcDV1CfbLvirS8pt3Qjg9QKcUrfjS9ZAV6b9gPMBL",
  "key4": "4SqtHEHkkGdQXpnqoRTpLZZRaiRtw6Bk7FuNua183t8NKAddbEuS6zXukj2CwGT3KWaom2obbFn5EnML6WjWdRA",
  "key5": "5rq8qyurwpUerwNJvmMs9PVJSnYfpHGAH1r1iG2k9nF14oc3fzKFkwj7taa9ALrSH4ZuDLb3QK6akfcvcVi9L62D",
  "key6": "2U529H8Z1J1th8C7oYsMeB9i9j9YFui2a3v62dgjQ41swiB9jzYMHr6cVVBK17kJNMpG5yWzMH1VKcRFZUo6W2C4",
  "key7": "4xbhxEu3w66R36wk9ws2LNP7fVQvG6M9RMmhLQhVqv4qkZfiUnZ1Q238fS7FyvA3YMTEML6Xerx9RNtxKrmWZAW7",
  "key8": "3y24RYzHgSJpEpphNABzN44T1puunAZZAtaehMPw16xn3yn9jPJiWczKxhV4wuiwSoiVAeU1i7LHf7fmpcS9vbHF",
  "key9": "EQmsUMVefnuYMhy4LJSCr6j9JxBNoPWr8fBWhviCNPYMLh6JGjUZBeRx5NnMqEFZ9Q6t62XXEEVuSDreqiVmGe3",
  "key10": "3CdGBLMuTbV4b45CAtbCNDAPPW9XHsV1KTRgxZymXywbSdYQADZ4vTstHJepmitsdkJBNNo16wL7Nkt3tP2Mqi4S",
  "key11": "5GuMftf5fyti6YHtscqthD33pnBBDXn3pi7QMuESVXdwg98SQN22A9HSvSTA59TMgcFH5WAS1oJziRMUQnUAwJkd",
  "key12": "4JUWoZ1Mo11pJPrSdFHAkLNoH7o2Lb4QGvUnU4sCvdx7AECdFzWrmdwHFsiBcwkze7yPCksYQDJvQeXoPVGFUJRr",
  "key13": "YFx666DPKkwSWStaLSFpoYJS6wDJcUqcyPLLiCLNWnExWXzZgVEFhiAFTqP9GqNXsUAqYogzCzZfrvoxchHBnBq",
  "key14": "4VCNbAK8GN9i65aTWwqMAYGM5gcqz22B4PAGcS8EcnyVyHYdANhCNSzn6di71PtrALpc3yT8pEYAVuueu1UGt5YJ",
  "key15": "2XHV1y1QiURwwBaLCHPf68tx2GwH7FSifS2X1eD8XAPGmhCL3g25oPXPv361kr8gCkkZ9Zv1UAfWGGaAx2gHd7FU",
  "key16": "32SV8uzPqGHxA7irE5myjgsm5mUNvG384AQPXxwgqB9r7jswsRiuTd1bFcWHcPmStyCzaoTN4wwDuu1HEVmEhRbf",
  "key17": "vPuLXmPhinapJHXLyTbxx3rb2NBxFuKCekmwZk5eY19nGPDHy56QbkXAT5q7uTMoLyyZ1eRACgd5a4bM85vUVXa",
  "key18": "5DovgGXLv6A4PjXuko87k66PwBW72ToRu5cmorYS4LXk9Jm7bDrm4mJb2BGCKsd2py2vuiJFGrQnvRESkwtFyc7R",
  "key19": "3rWQkazU1Co2KxDDqkUDxBiFmG1DiWC5KWaCrEBs1aXPZ3o8t48J8cwyFvRbPTrS2fbpLo1XLPVXmUHckdPxRGfK",
  "key20": "3C2zjGFAcdGvst7AwrpmeYuZsa3SP2L63bJtFEoABgjuBnMVH3oPZ74QNW4afQD4BCoK7hCZKrfabA6ukVk5w7nA",
  "key21": "vtsP6D1FJfucsNwiGDxhYA1RHMCk2GMhQhczPVnpzeCHPRJTMAQCAjn6hegahceXnKW77zbyMtH1iMUtetRxEGd",
  "key22": "2HuF7tSBSCJ6JHeTxieqP384MtJaBAxkNoP9X97MEm9ucr3SiseYc7pvrm4C3mu6zgPr6VLaqnjPDV3RVabAEfcH",
  "key23": "2tzNPK7bt3jfqPbnzH9UfPBWWJqbpojJUhCP9yX6RQN7BR4oupps4kPfNCAErjw3fL6Fk9abVAS62Vxt5fW4KdpU",
  "key24": "EswJQDUyYuiZvrB8YxuekSXf4xgm5mH1RHKgAunsvUTwak8mFkigwG2vUWty1oPsr9b6wwDiN4ArcobHQbqYGc9",
  "key25": "5LnCVThS5gQU8z7jPYMV7eY11GMtFmJvv23w7prqk1jKZFBT2QG71rudwQibc1XTPeNZTdDX7mrWD5GVdi1eaMbv",
  "key26": "RGMswAtNxf25SsHHRewzayrnHejB4cgKw5sbCcTD21e3gVyoz41AxhKVRfjCYX7f8Yzn97YDYwiuKn8xmxcKzWp",
  "key27": "2mfi6WfpNc7jRVvTXqTLBvEifftNjxySYSnJq7RsJjtFdHSbszenrJgCuNqy3FJraQJd6kStUs21Ro9iUjZYgG31",
  "key28": "4iJx35trGafYr9dMdDr8pftF5vK5uZR9fcjxCUJe7VhY5WUrRNCFEY9d356UXsHWJ4Cpj2S1zRoam84Fok4W7XL5",
  "key29": "5YgsEwmuZQfSQbqXPF2bp7J9MSkopKvRcLNBL38VPmTCCF9cZtBpAc3YFqtEGCRhpZBydMKTDhFiM4PzL2QtjKpZ",
  "key30": "3Ng2DfdtQrzytyvUT9ywz5kiWGEFgG4XwsUuf6smJ7bJ67LMaNNyR69VkQnFKJeQri2mK7D5cCmGu8JimE3LeYjH",
  "key31": "nrA8uc59jKnYrJKZ9cm9UMN4b5SLP6UPF9nuUMWDSweez2LmRre9hu8kZjKoXaL2D5H9F7GGBeYUikqkuuQ5n9s",
  "key32": "36e41yqsvcn7s5W3fWr2E5HXg7EKH7oon17F5y2CufZtHYYxg34EZ9TBSth6u4k5J4eJksg1Xy34NN7LAoyDXUW1",
  "key33": "pP1ZeBs3VJiq8ue6GyqGrQnfWazA68xHyZ2mMs9QPhYAojYro3qT2rKSjPHDxyKa3xc1LaJEFc4TG5VQUBYkqrZ",
  "key34": "4TbtAGadymh7g33V6GK9Y9pLGfmjtZmwazFqwHDovgAFpTgYtLHEWqEoiPg9WU3LVPgFPsKm6TmY8XFVdmPXYSDc",
  "key35": "5KR7Ye1GfKdVBSLmm9mzWJqNomhezkTzUgFBGJiTuwvSL7iHGckJ4dnauAAFA9x4h5ZiPbYLMwLMG1omHYw7rK8y",
  "key36": "5o3GmFqc85LGUSkx4azR8bG3KUDp241BLYqjuDfcpYYPfZPgcbtAXXDFtJXxEsKAgBNGRqdj6vKQidYHuahUSWci",
  "key37": "fyUiKKAnnvpH28gSNZV6dkUuyye98TFrdHoDsdt6jBzodx9NxCmyTzjWLvZq6KXGHyowmn6fMDwwdNBNBPnys6L",
  "key38": "4AWCmmZEZi5SPQBGoNeM5FxsCwBRSsKaC76HX6w1x7JSL5KNe4eWDhh2aPhXwX7v7ENAdajoDG7NcCw8sDzTggmw",
  "key39": "tk9PMUtyLn3ASp4LQfY7Vpi5ntd2S8dnUD7wcKbZ7oDRLLyVbrKj1Ch5rCwgfdTk1MWwry8tDBQ1MV4kZhRtbae",
  "key40": "3KTNFFEVbb2Z6EWUpNHyAGX7hVQoChSGaGjnKh2DZg5b8JERBxcmmVVdbrQjDZJLoSNyK6uPvHacxukycHpgrJT2",
  "key41": "4khLX47kGSvCCjqzLT3Ez9bnLgskZYeKcjHqeLoPr3vHq9aJt1qyBDRybKdoVVhLHR9WDSLeG3CVpq92jd6gmEo9",
  "key42": "32LnASZ4ytReRUGSwKV3n2Vvjbz736bSjJe5kmChydwqXCgasMX62v93VLYLY8HKtwkCbWKsjaYoySf3f9KgVwWc",
  "key43": "2TBF8etumq9xb731k31is2mzrKRraTG5rhHZ5w3bB9n8yUnW2fsN5AYzUzPqTWLmdcddZrDZw2rzGvp94fWu2eGF",
  "key44": "3M7HFBG15b7XbPXq6R9PU3RXyCHc6YiPqPjV4Ti2UU9qTFkSHCy1EQnB3rxQcoCLF6GhjosuPP6B6DPQxLaYzuQm",
  "key45": "2Wwo2HinHbmwN4TywywQqBKuKHm9UciKyzfXobbv6fjDyjMbAy7SJUVYVsysmhBzjCHup4GFX8B1YE6YF7Mw6dj5",
  "key46": "XWy9k7vzAttc7ZNW2NJb1YcYxfYadVowvcJDGLNVnpSR98CXiSsdAn4FWaKmxPaqhM1EtKpUV3jvyDAA75s1arV"
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
