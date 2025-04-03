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
    "3jw7k2zJRzJWr1MvBJkxHP6wv6szoiEmGZvQWJ2w75ctmk52uApb1DQo1XcYPukzZCtyBf6wEGF2PQ3QB4WZuKdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wXf8UghhsL9KvspXd4o9hZTkYWM9dEqVzjfMp5cddoKMwQDird2ErnChmgTi8bwr8snU3ez4tywksfynNYZfDZ",
  "key1": "3eLRN6majV9WRQGGesAScGsqs1bn64hzrMHMPLjCfdS9sRTsztQi6rKyxVkQaKi65xeZTq32tzwf4DvxPXZkxbkS",
  "key2": "J8VbTR369taVnVquDJk4VpVinAXkED4LirZhnqGQAhoyu2u88XmzkWgSWxP53BhSpxzxVUrYC2xcuqhX4TrdTHy",
  "key3": "2bXxTsngChk9MydBumZro1oGZAqBnEr3jWhkG56e13Fie16TSZd3D55e6oU9JkY5ZEDVz4GN6MUezcxn5nTH2pZn",
  "key4": "5n81c9adkDUWXjWZrgZZeU7iXaA2pUMcBMgKnhooEeYv9A3cyMKPM7Eb6vbQw4fWHwWnyZCxhz1DfxBiKEaTqpaK",
  "key5": "2mud4T2cMMzhSWVcYe5FuQ7ccj2Ar5uCzaDZVd1EPpY2T9wrBx2PzohyRtRFg6ebm5ubghVMtGWHmTuLs8en8A1b",
  "key6": "27A2zWEXiKQear68pdHgSBRw2HAwkcZaaR4ord5CWaFmNGw3wKbLLJZ6cafM63fRXNE8zNWtRJXPAUvgmMQUoo1p",
  "key7": "275Qkq1W5XSCCN8F8e3cadptBYLTKEfydQAp46gv6KQrrdhDm4W1cag3xFF3ksKUm5ECWRkAynzkFnWrzk1SMkFu",
  "key8": "26qTp2wg99BRKviv3x8cRMuRUns3TJgkbnaYkgCmEhuM24jZ1TNHE5X4ejmxkTVaZaCyJRqynHYEuDkvLMssdatQ",
  "key9": "3T4bgtyz5MJqznQnyX3qmEqCTk6ji9YDPWEpGXFNisgmQvwsVgWzSAQCGw3tp6mxjDnP2znLuy2xZ5Ps6aEkv5y7",
  "key10": "44mx5p6QqRf6PUa4UwnBbKUDG8EBx6Xsq5nFX1M3McXfTH45tZf7NHvfqRNSL1iWhMryqLgrA7dSpXVQShPXaRMA",
  "key11": "2yijvxF9M35v4r9SkVkaMAtDUrcEQFK9AT85PNE29XaYaMMXBf5VSJVR9drrRewgaMD4DXbPQ6r5FuER3SXb443a",
  "key12": "5kVYJxspqUNXAsFqzNJrCmmQMK4qxbDwKVmLipCkf9Bcm3DiuvjYwTcA2NM2TjeJ95rt1o5x9jeTADGKgT4PUd6S",
  "key13": "5AWw89bg2kkw1sbpujs3z9JhHMGkzHVZYqcC5BnqsoVfhNFLYvSPdWLuNaGEpGbLhKz7md7RiWjnrsbXaWBjZ8pb",
  "key14": "4YZ65SUYAyZsLPTkdonXerfSB3BJ7jG8FrViyzcMJJ8fkJJ9crFUgSkvS3KwPeMK8SXVf5NiwULuhv2d9xroqXuj",
  "key15": "v1jPZg4KZdiS8jkUJ4v68TJQuQiqKV541k7ebz9cYDuZtq3KzyFbAVhMUWqF5onPRvvkjoPdTjTeNC6uiTXyk1f",
  "key16": "5rh3orpiqV3w3ySTxXJjeZYBs8JDczLNCUGLkftk3NLKgckRz9vY79vpEw552SwWM2iNTfNvrH5V3ENfqZAGHWLs",
  "key17": "4PMtZd4MgDpu1HCGFnPb5u7gDVRLuth9oynT3GSuFd4TRxwbhVTHpiimhUqMAKdjqLgdmyuPDj2k5feJqUQY25PT",
  "key18": "39SFhS6FjtK4H4FDG4SmgkvsGQSJDwRorenw1VL8rYKnus9E3HHW1xbDdTrwhSWeUEAynE31JykpWrqja7eFMh6z",
  "key19": "WX9Dihs3EhP5N474mNsLb4DxVsGhD63pwYomA7bH2cRPW6e14fcVf1sAb58RwkSWxnv2zKRqNULQQxsatsA8vZT",
  "key20": "4tgMvFgHgq4Wh2gKpSKDbk5ioUZipx3WR4z8Q96P4tBVhh5ZV6uQJGMfTThcvsN8vJxrLsaXWsUbjn61LwNeNZtu",
  "key21": "5XkB2Mw2oQn6Ly1roNTicaubG5aNBPyk52Ayv2Dx73JGZpm9h1kwstigk223Aq8NVJ2DPMfCHAPtiuuKBmjA6UU9",
  "key22": "63R2sn1LaPjXvFKLtSmpw4RN4kwgmxS2hNVZKW7bGrJ6uCwAkhM9SjoAG95EbqZLVGcW3FMRMSoA9VBUQJG62Kgf",
  "key23": "7Z9A3zKkr8f3o4gNQQkhBE3SP3D4dDrEouov8ji48uE1cgi7E9y8MG3nww2j6nwAwyq9rt6sDcQ8d3bytic8fzf",
  "key24": "Vi7yRoA7coqeN5vLtFr4Taqcj47RRTg3qoyu14ynaNZy79SUg8jMYLZXxY8SanwNo58BpbMqWkYfy6qLofJJUny",
  "key25": "2hSaAdwyFaoQwvE6NC3beieDykQBrYdqgcPvRf1AiypmokVWvfKnEPd7TLt4793KhFHWDhCL1howyfXhSWLLqs8m",
  "key26": "3tqtS3nR79PENH3D29JLdj8uZNhwzUDzbPiYgCB7bcFxx2pDhHAvuVQ2EjkCHNvVxBy3uWgZ4Zkq11iSx3DvjKtT",
  "key27": "3ZfroMZPbp96zKcA6HqXLZLa4TrS6eutptaQwphNooFE3MmtiTRJ6KNrdRgxc4xD2Lx9tdgNAbghbZDwgZpnqVCJ",
  "key28": "4gC31zgZedLYP3sFTYsCoPB62Aw32aKsGmA7gvzc1d7226noCkDvSyrrsBxc82zVz41omCKBh1VACNjzxk2gUvrP",
  "key29": "4juEGMYE5hmn3LQk8DXh6M8u4o8dmAuBuVcdy76dhdxPRuUyEqZbCNkTbwVg1bzriksoxQhpcFXvRKgZxgxhnGoY",
  "key30": "24gXJQQjU7koyW6ZCpKJpBbksvD33nThHZaWirrVk9HReBZ9TE9xXyGn66EYbtQxC68QePGjmM3tH1UGvZuxjznx",
  "key31": "4vEWkjLikmixpfb4isqRN73jvpsvGkBEb31kNf7M73tPfdugYqGcVn1KYDDktpLSGCcuXZnB9c83sRVzsNECukXy",
  "key32": "2Ybu7Xe445oGYFrvjog4GcimcVMRGHG443BoxhJTNYJEFN5RtoinqF5ZkMX2kdstRdxTLVM6YgrhgZgLnUHEeEKM",
  "key33": "HUW2w8Gs2fp3MHc5WDXQ6FDXRYtgX8YNB5gxYkLpsBVasf5s6brgMu8kMtVQgi1XXZDZfQU47m2F7gJMR3VBxGv",
  "key34": "4PbdRo29D6JAVkFXtqeSd53extYVGKRmTBPdiNuGCfjaaMEVnjXtzuotkRXxNRpYYCWpXAABz45EnirwGwR2tQUe",
  "key35": "p71NgMFRmZnz34cAWG8TnRKkmzeTYGASufYE4WMoaoVqC9TAhh84SWX8pPFVsWoFCENskGyk8Wmn3C1DQHs9Xou",
  "key36": "XUuyfZjsLfJ5v3BDSJrkfQPKaTdESaNgrVc6UmbYSGoBGbRRMjkHXNbZ4Q5jefEFdutoAWy6XVYFkuWBXozD34B",
  "key37": "62SnnqcAKW4pwM7RFop3fhswkmmfhPCbU4uo6qXBxihgHuqobvac9rnw784hEPauWnvAztvJDnrXQpJGt3fZoTre",
  "key38": "3PbK1FxPP4bKUukZkcr44Xa2qKnpDrwYPBdWZwXEjGkBrrzTCKr1JpbwSPkUpPQ4VRz4Hk5JLa537XVzzACHeZDq",
  "key39": "2ynt8MACge1KKfPWB9K9aPhjQjQHZk6AnVqoQYE4kqGY95TurocGAaamAkk1EJhqJEoCHwrjWzrdrK2GpCXzrLnP",
  "key40": "3LNsg6sKUPLqvUJ6FpGwyp9Pc52ahio2BSFFE8DDZfN9rgPbW2HxRvqN2aSb8q9xkDZXA3fNYbnhFybM5ygiEvSS",
  "key41": "13FyM7ZJmDjctQqMFW5g6FHyubLsxqCYo3GwgrudoKCqHcqGPoiGWQxvuLE9P69gdSD5ArRZDyiXGRA37KnQjgM"
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
