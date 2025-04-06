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
    "3y9uv7nT6QkkDeCh6e8uCkdVyo2Zdjr7XL2iwbeEANpFncRz3N9bFZmXGVni1QNTMUJcWxhTdLn7fGMuqY2XF3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jdK9pL2aLVekiTwQPRvzqsyLmAhLmRYtBGwcdcvwgbCpXWDeNNnnmH4BkkRoGuWjy3c7k6Vdm4J8m3TQ9gTAqt5",
  "key1": "4eVKbJZ5kWhW7CYFvyTs2FedHcDdcRfw3XgTCTQVDCw3UPf3DVbVZbJJ9hm161kXrNh3MyrV5tetVyjnHSpg2iao",
  "key2": "5qUXhYKWXe3xzSQbC94m79d83VDpgtdKQD8NcvqFLt7F99Ab3TyaCCqhnbZRcarTfo9VB1rH1eX73xo91s65dw7B",
  "key3": "2yXV9jdomprZCKSbosmt7v5NgXsbzgzSPKs9wU5ZrjfuUETMMr4eubofCMuNheGjzYapUAooBsKDdb8EgLUe7Y89",
  "key4": "25boNhGSqrkmmiAFhZkePEtmXteygLytAFWsU6dEtui5meVK6edwvD9F29YYZAheHznCW9iY2GpjhyqnU7Z2GHnn",
  "key5": "2z6NRdnea9bovSkbmYAX85ahoQS9JjevX8fU5V5gw6SzFwVMMwFN29KMUfpik8M2qTXnBZjwoAJ7CpzGrfNaFs6Y",
  "key6": "2saKVuHLpvHJ8UcMKuawEPvqXGmxinpAj1XBSRygfh4sJz9TwTwbqv86kAqpPpkUkTAxVbhEqpJGrRVjaBHHSMeM",
  "key7": "2evHnCDRG4nT2CkyzrQDXcLe6w69xKGVkZ1cK8kABfsfAzHfYxXzasUrwckKYdM9c4sxQXGNUc67J4cupj1FcvDo",
  "key8": "3D7zKQj3PyEUMyF6s9NyrWM1wkFcCv2MrBQZSfekHtykKyKTXx6AHdcefu2pZHqZQBJF6B1rcj1VLuXFy8pu3Crn",
  "key9": "Zq2sHdZrBof6niDEwkLJRpHMLALmybay8Q7Z7vjpgGwKJgR4k9sijNEjVB8BWvJwQT3M5Ys2QgxpzVnuaQjven5",
  "key10": "UJWqqJbmU3E539r1AYHZ5MRnoH2cyG3qdDjJJjJ5S93uxa8cWL6Kc9BftrCLuHU5KrLtGvv4KVWs9NqvQtxj8LN",
  "key11": "5VUYAYeYKuAb9hoqpqJWNCvj3YmGyDTVX3vchEEHFyxRe8uZ3A3gVbfeJgF7ZtNS8VheXR6SahFg6z4GPeWBUd1U",
  "key12": "4gQ21bD7hLc33JQFp9JpnqhA2FFD85i7kE5dXmF69Pw4Bq2GTGGzR53XR58mQbYuDXTF5ZMmjrAFdG11W5raLMJv",
  "key13": "WTHds9r8AVkXMsHvzZE6sVns6XvdivnVZH5uZ5eurzURjnup3bS1bC3fEDjGQcpvYbeRytgsgxrdGJrkRoUU7sZ",
  "key14": "63tNrKmwnRmDeY6HECQKREQWKJJkKAiQSQCxSbF2gGfj3uL8dgEJqP48TRp8RheZ4jpDvr9YS1d5CPy5XvegTabM",
  "key15": "38aYUnrB8ZyZeYGhQ64d73yvfHaFwFWrBqtB4tiv4KjWttwA4QarCwt34y1JW98z45NdCmrMwM4yTgcdgdTW3efs",
  "key16": "3kAfRiHhd43ahgz79nwRXvDPbWLPq5Yb5YPiNM6gLzTP8bnHKFTaHoJ3PqKMUfSbvg3NNXGdpwgoGbahDf8ZALCR",
  "key17": "2fucmFqe8EGStM8Bu3RMr8rtfscQHCCGgQrx2pSjGfGYFHzdP18xFqLbzikmoKdTtHLKUJ6vuinToAt8hJkfYFgn",
  "key18": "4CsyNMTAwxUDk6Vy52AsXdqwqpQMGBCyFxBdG6cJJHMEQTsr1quJifpx3WdQSKi7bcKcEJdVMiMd59bEX9veirPN",
  "key19": "5jCRhGssgkjDRgMgUG5jJRAoEP2SznEuMM2wm9C6vcQggmtkB52fFc7EujUBXeyr7cv6Fnwg9w8EU4PGBycm3r6N",
  "key20": "pVGSuSh1uzRrhigbDZ6isMMXCdAjWLuqUjXxEVxV9ncQstt3hUqD3kHbVKLAMqmsaySjUS2QP7wYkciUP5KZniQ",
  "key21": "2K8Su3e7YWQgY1aKEx7rZi6qBKpV3eqUQTJE7YFyCoamVsWtDCERHLjzEF721zBTj72vxb4pfmQcH762259R96Yf",
  "key22": "5teLJ6DsreMutFx2yt6NXstkABDbdUeEXi1dLi4bwofq5TKhRo9RqBTcKJx6EqC5RQER55MwKr1ieGtcZziaczVD",
  "key23": "hB38CoW4swRpLvRXAaffYhmTP7gdj2knzxdz4hyeZEz4kahC6ahR5x3m14bNqYN1Xc8FntFEKYjRQCxC325s6WG",
  "key24": "4864UkVBj34RdG91iCn4QfBtBWEhwEnDSZc6vhwy9wZLgF3Uwgs9TxywHNHVcEZXPmTMryreybPG5e5efgKVYnrx",
  "key25": "3px2BQ9rWkMLJPMmM76UwU8hcGd3ntCdYXsPv1ZGCbv6dMQfrQqS2vt8SArpXuPdFZzMWMtTXgWDNtS7KSzmrBYG",
  "key26": "3aVRPXjrZe9Xr8W7tMStioYf1afpeSKkLdwBkTRNEPhhA1aiu9wmEZ6YfmahjF2tk9A3kk37DCxgYCGxUwdtxVc2",
  "key27": "2TzxxVTSAurn1UmzBrD8YiV4wsxkt6XTkzFcjMNUGuQt5AUEcuVAUHC1LhRxZsr2WPTbi7tjWWob7c14Xo6CVbzH",
  "key28": "5KhiVv1dHzzKRaV74is6cAFkp4tvdVKzfsKWBXNFGE9ey847NAc5UxfdxAgHA7WUTUfGb4JKPyU2qpqSyLVYj5SD",
  "key29": "5ZLEeJoZeQvR72qHtunV94nDcdgn7Z7kYZFPExxgJzNMuDHb8sZRFy3N8SPkNGZmnMC6U2ef48N3g9nRCqK6WpRi",
  "key30": "2M1DeP7T2FAX2pxe3E5PLfqu1AsYp3EHACWpwbE7tmxnwr3UDJvMNn7Wgy74imPsgMzYKppV6DHBeQUQSztWV2bB",
  "key31": "5oiSSppG2WvcZ88WgnqRHbeEgdAXrriCbfqC8ga9jLrjBe7L7SZYGzEDjEXvd6wvNNwWoj6cxi1jDSxhcysabNuV",
  "key32": "3s8QDsnRZLAY7F4NH8UvfkS9bb4KKKuPMnpXijPp88NQKgr2YSGKDN7HAvNzcAieAK18VG5nuQzBuVThFdr2m2t5",
  "key33": "xryKfjmtpfNkmprF34dEK2hEZAVfRFcbwvmGr3JocWqrhC1cy3nkrVEzmZ4aCqpo4CuY6BdFepbc2ByJPoWJSDi",
  "key34": "21TtAU2HLX3eioxtN9W98CB5qAwezKMbwRAenjyAGcEvhjrXZ2FikoZdZ8xqRFPdxUZCuuEX53sZvJuH7DRmyqYb",
  "key35": "58Nb7qVoJhsqmLtVrFUvBq6qBKuu8NfstKJzyB82pRVZB8VzsdFXEgEwffrCGWmeDRL4YsMoLpF8r5gmF5AZ3nib",
  "key36": "4PSmBHogtrm6XHBVmm6kTNkLxczTexdErCgHqvfwy7uy5KCNm5idxQrhvcpBTU4uwQU1i1hvczUcoJXjZEgZwtxv",
  "key37": "38a1sEDXmQjZooTvfW9hmk6FkVV46VrZ4QP81HTSCB6GTKqd6e3bZtKaRS3RvMkBcMoZgjzW7xY6RwGrF7tdaK1m",
  "key38": "UUaWYrTAvzGonb2tWHyaxAPK4ALC9z8H8SPWUsumiiaaryqcsSwfwR4dRypCXPyEzdBADFMgknLgmK1pKrMSkXP",
  "key39": "8ts1XVVUGdH49Qy4uqNRHtGzYhK1shGGbBwzTx3vEVhvQr9h3Fey6jnEs5WyGWPhC5uCa5dWMt7ECBYAoyPrsCn",
  "key40": "2cKnA48rkMmjw81DSJz4gvZNuZs8WAFVzZVCxoLiA5Dy5dbJkb2coz9oAtKLGdZrf8JqYEtfuHAsmPgFC1eRZVaf"
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
