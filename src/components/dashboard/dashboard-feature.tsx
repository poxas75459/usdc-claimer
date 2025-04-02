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
    "2qTvnXXBTEYzz7EWPNpZJ9JzTK64vKPS4dVwuUZ1guhrcVAbqMq3NnVD9YUgV3uUKjgPt4wHyJCzf7qrWi5SrJp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dZYPgqUssW5rUp2rwMpNK7fcXeY5v9CSqNSYZFfSSfJaKUnhUuAXcZQDpq7ijrkknDz1MvnoCFyzLY8o5Mr6W3M",
  "key1": "3TjEucbpEruetiAyf9bGSAfkcZjPBEDRvnro2FJeQ6Yq1DanBginVYGHzdp14koMH22E1bDJkHhwukVmG1kQntSp",
  "key2": "5waZ3ao7vj9f8jNVZFwMYuoTXftFwzsaJTZdqmEWbgTHroHWDyc6tMN6tgi1TjTUHKxKHEkyKAP5iY6kqNmqtEtr",
  "key3": "4n3iASdA7gbVwetssgNWdYN7SMPWzws8SgngYjrA5ZNXNkZuodMruYpSgysAWDMj4zgLbPNEEJomkBPHBWiRPwyc",
  "key4": "26sWKZtrFsbQYhWCiJrgD3Eynvcwf2YsWpj1LhP5XS9x2hucGVWwdgSMndKt2a1NCVyEaJ9rpAkbR3Rg5cLoBwB4",
  "key5": "5wCDof187k3aHWr2iNYgz6o7VrjXxbuUB9JdCbfdHXLo234PPFpJoreKCpTpJpYdGwugmrSh8rP6CHC4z1iaVZv3",
  "key6": "4hXboDhqjTago99UM1oBcStcSvnpv51SkGq5JDJjV6n51QUGqeeNszKoXBYQx8ki2gJdu2dsfAANK2mcTj5Ek1PW",
  "key7": "29HXgAXBdtmY5kBSkxAcSyai85AcybM3NVFCHubH9gUJpgA5kCCEL8SuquATyc8Mc6TFS1cW6b7i13ipdSKwZqfx",
  "key8": "5KcmTZyzPjHP55wPq4ujJhfHLj9qifZf1P8TFCZC39FRmWRq7zJbe9KknDmu67Lcd4K6Bn6D9oSukcbEs8hXZZaD",
  "key9": "2issdszj1BJnfbYL4X3LuS7o94nTF6Z5Qm6sWFa2ww1mjFejURPWtLp34i1k161jc7n4NJjjNf9k2MpaDhsKnSxf",
  "key10": "2c2kiJzvzm5ycKRAegv9Fgd6i89Agh9PK4Lh5V57dpzoH8sPw1CGkTpgAixqDfuBf5xkXrXEhwPJ6rqifnsPcA88",
  "key11": "pdJMR3fjU2L7zpbeuroG4JGfHWRb56J8NFqDkcXL4uxW53eT6GN2DMg6tYgD7u63wQWpr54w8RbpioVGV1oK26J",
  "key12": "3nDL1sebNMZu3kQYMq3F9dv3MRpp93R1AJeDLSneF92iz3ndvxmJJmbJDUAzEGQazR6w86EbbE2eYKKYW3scWBpx",
  "key13": "2DS64eEAm7i3MyxvXmY9Ntu8YLsfidt99gwqaDZrfacJCwg8aEdbooo1WxFuaFLYWYtuAdGW6yUtRxan98bUw1vW",
  "key14": "5fnQDXMSGgour6CynLBfeK9buq4X64atNF45tWaKpEoVhN3ag2fUNKLUW9vje6up6cyMUBFqP1Q95ttVm3GRzVKC",
  "key15": "2KEpTfKZiBJRQtgCP2QHw5guBkHv9mTgjdE9ncSg1B6a5gFcQLXSZdEDWNWPPYVwkcXn67Np6zLaJu72H7Pv1Wte",
  "key16": "3xPDF6eKsLtfxw8YiUUtkojbXaBrU3fAUcSDnCsYymGNDRUWf1WtqfaiYHqETdmw5jLyCS1UiYJ9N15hqW24Bf5C",
  "key17": "4JZHmuWGEkyAAPTau575ZUFKUj4gWKox9o296RkoBizJnbT914UHbZcFR5Ana4XV8R7poFitRmoSXhT1zpHsXDvu",
  "key18": "xJmsUz8zaV6fepdwB359Ba4m15oKtMRdqCRbhvXaVXjKb5m1cpJbT63jRdSmYe5fAMEbt7zEKSJA2cHk6eDVisE",
  "key19": "3XGGrxVbzzSyFWc3wfx2nmWJ74G3Xk7LEyxEJn79WDrEBujRLcmBXeHq8q4ytZk37trCs4nhyUtq2D3fLetWhTGT",
  "key20": "5Vcb4zVEaJoetkDy5ujEeR7NZAL3hSa2e84oBdQdFXMkFNgP3YmGxjRHRud9UAUDzQ7mm3H2czvWVMvRJNzDdifT",
  "key21": "5bzQFNdnHGEv4uQqHuu3gM7gmFErsUt5rwidCwgwDiA3qd9GCCUSZQdkcnntbiwk4pMzbnyoysZ1WT7hMjxbG672",
  "key22": "4egq65g3mUa8LtFW81he6sXBq7wKDsTGwLH9DUUe5qB7fR6eioaKFFZBMNabXjiWNYpYwZyP3krGUVgrj9EFyZhs",
  "key23": "jA6iZ3dkNu5fhBWqcmFLfXNRdBCFk7aNdrAB4owBuPnkyzqfRWpFwMprpsVY2qwm9osr6nVozk9tCzPzZVZdMDD",
  "key24": "dMGHqhVQNSWzk39BaeUpaVu6urXzxJcLVcoFe9DhWQfat3TphXk6DdrqLrxK8E7oDrN3C8Ccb3JV1DkRh4bp27i",
  "key25": "dwCy7YEiv2uqrSt3BopmG59UeJu6757wfgQj33uqGUA6U1qKyjctkg8Z41NwJnq9g9LXi3UMV844Rq5DwpEv2LV",
  "key26": "2Q8GbVRcrV7YkhLtGZdbgrcJscv31rHF3YRJcoSTa9i4HuCTreswLmPFdrZejtNrHdmVvCcbhkfNxBJfmi8FWxT6",
  "key27": "Xv3XNs2icDBiUyKqQZGJwMoPcQBHzLPNom1oXcGT42BH5FZLE2c1sHSkoNkfhgmcV1HwJmoJ8qjJAnnKxwBHSTZ",
  "key28": "2kJd7PcjnWSKfKFhQFdisJc1LVsQ8872xrqiNGRSbGS25j83NBEjAxibmhgfv8v1TuDcHC3AjytYswfcB6WWW15g",
  "key29": "WoD6YxFPxwgnnEraNuR1AXqoKJT5Uu4zKAucx5Twtoxvrzrida21vP7soQpxgE3PwxfxDFDGRV8PkEHL7ZqjCrL",
  "key30": "3UA38QXYo7d9tFsr3RdKBKnKViZRi4BrgqRJAeEnWCdPGoHQNbNMbJoGa37A2H1Thx43iKyNcWP4KFV6tiuy76mk",
  "key31": "4e3tnEn3k9hCwSLqX7fjHFwMupiwSPjxZ9NvbJfT4DSHwjiwtf7Pz9yZrwhpK9SjbfbBAhQ42yEESVR5etKEJ5Bq",
  "key32": "3XB7RExUZ3FMzx52w77XhJxs3BEi3WbkS3tPDAytny5Avh1Wr9L7tveD75Rhhcyv2RhN4qH24AaoAW6Gg4qpg6A7",
  "key33": "2sm5mXUfat4ceAgcZKywS9rqkbV2y7z7QMe3V1E5y1PXFiuUfbythToVUeEcs3sVQkEXxK4qPjjdNVBq7AVYf4Xs",
  "key34": "28Yvw4eeKG4zpyVhygjuv7skLqAU7mN4QByWnBUuW3cVjb1uFeEZ1zdXZiJHJzesbkB6v1HYbn77dH8SaKHgR4ZL",
  "key35": "3zAM2PaUcUBUpQiWdAH7vBuG5u1j5mui9AqP2a1znfPCBTFQs6D23NeQo4EVXw5QTXZ9PQ5bfTCkLEAF8yP16ifC",
  "key36": "5bMaRJujQeyRXmcdnk1A49HjrApLTxZhWsGxfEmLfZ8Yg5hrzTPQ7uerA8S99mZz54NSJufSdFaX2gqDFJCyBBqV",
  "key37": "2r84uZ6MwJW93CzwNspnLWeUEZTqEgJYVQ4Tum9fxgrA3t53XpLRNYL4Rnuhjj4e66Kk8q1k4DjAy5qUs7ErLymS",
  "key38": "5M6bg4pCAMjDQ62JqUbPBpku7XUE6qw3hRtVqgLqPAVqAzrShKf6tRBqQNMTUBNZX8ag7F867CYNiRiXqh92hW3z",
  "key39": "3kd4c4tKc4kXv3ft9xyKZzKPHznK3pckN9qmQxfGaaApd1x5GYmeKiKz9WVRHx8dGo7W8tgABTayz8Ps5DCLjSGE",
  "key40": "2mTR7gK8c4FLNJng1D6iBJTNonGWCcA1ydvVMVxoxAh5tbEfTHARr7Qwu4WcveY7Dp78Qc1bb2hQuujqkBfrKh8m",
  "key41": "27ogcweMbHm39nBEHJcGdqPLN1HMYwN1UE3acuwMxTzEd4nE8eBSLwPawhkXZsXW1XV1cGbPpT5XqACc6ix2xSG5",
  "key42": "2APquRove6u7FokJhbMxR4yU5VSVVdZgER4RTAmrjc7evVA6mCn93JQEHvjfhTyJ3BdUoY7KtVWLk6NDrbPDp1au",
  "key43": "2gzvx2p7mbqzExyiLQp9jEAfxS5vSS8hthPFtJo4ShwhTm8ZRbw71VuKEicuTKnFEPwRHGpdtEiwRoaW95QZ999K",
  "key44": "2yx5n6PwvrZpbXebW39ietMYj8ZZTN3zUdFe1gSFagLt9SrH598YVJJmGHAyXMLJXdgP6FdfLfwFX6BzqXfzq5ac",
  "key45": "4LBgAPjqURLavHnpeYhsizrwGq2xspFcjymtn8xjRpPhMi4TN2Z8DTPnZQGangryRuQNzrjPLLAj7wAVCuCZUsw3",
  "key46": "2496QecP9VibzAJWZRJFzxz3eZDvf5RDgfxJfP4GxH8cKCbxb8fKRam8zNyXAGMFrTgwScUS5m3P2wgmwX9H8nZp",
  "key47": "asBgPckoCQq2cECVxs2ZUsbqXb9qmCkEBEWvpHYvNJ4VCCg3h8TCrvVvD8krWDn3jspaRbh2ZLzmrXHnpUJTj1w",
  "key48": "3vRuJPW8Va4K1E2a8Znot7ehSxj7GLwoJeaot5JShr22i5iQ7waB7LXdUAHyizb4zWa7szpd2AEwjLrSpU2iX8f9"
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
