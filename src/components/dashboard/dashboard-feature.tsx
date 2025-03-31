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
    "5L2wFnNpPYM3W3Eh62jqsdNfQyhNiAVaxEFzKtgUmz5nxzMExz7rN47G6Pt1uCFQWWX4RpzDWxEQ7GC2PxsiuoZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aE27eZKebdu49EhjXEj9dgSV3nqeddChZxjLrDK5KcsahgasDbgeR1K5ACMeX8mKoVCzuJ5Hfuew61EGWH9XdhD",
  "key1": "4j8cz8ks5yTT8Vz7Kwp9nJ8uVXY3XYkxkMkLMGxuarE1H8otW1QmHBdfDXVKVNbL8SYm46HbX9RRcXDdgAqmauvQ",
  "key2": "49z4wRWrYHqmNv8jx41uWiYmkAtRJYSktBzR2ChAyJ1w21AJi5TzRV75ztZEip6PVoUxpSV4wMbJCUcaUuD2Kj9K",
  "key3": "2TSUSFWaf9HtLicymsT7SsPySJw7e5XMx4W6Kk7cKmaTZNdjLG2AL2g37TkdcFTCRce16awkVFaZX6L2eaya5ir7",
  "key4": "3qLnrUbFW96DLJAB6uAVYsgEq7uXdzXuKEF6SJQhijsquNHzheXymXrfZ1u8Us7PwVZypuhh4QLXC9hLp2y3YqHD",
  "key5": "5f2DXZhHJ22KvhPg4zaqa69BJ26BwY5F33Uvz5AJQMMNy5UL4J7cCUZDhcMX5jwdzLdnLjg39zSoePR9AFWdbLoY",
  "key6": "Zz1M3bzLaPLNhfhGtaYYQweEPVbjrWXMCTJrK8kgj1ddXFNG8fbPLT7MaMrSS9yC2jJvC7GSSFmxeWpe3BVMRw4",
  "key7": "4r1ZHaRafAWde6byjdVJbqJKP4LHmdJWnUtAtxhywKRaCKQPpCqYWXJ5fuEdeKQTa6aAMaipo4zrf2i5BCUkKECQ",
  "key8": "262wkrHJncQQ3SCzBBomuo8c1NJ2cwb7ozVLKF619GZbkKvyGQsBKoYL1gsFUVW1CBrdLbpFdEKdov2XgVkRn92X",
  "key9": "W465pNJYVfHm6E4P6dFPk4HEJQnGF7rAB7uJYYhEbHcus7ABA3TpmnvwkJBYP3y5t9LR9ugmYKnE4eYRa3ibX8u",
  "key10": "yS6t4fiTXf5eGgrUUPDkk5PULbs3Y7Yt4hPcpDd4Z5gtV1msAvtQ1xabRvvvc1N3ij6NDbmp8gV1xMSAsVJNeYi",
  "key11": "66aCkys75j2dREz8jFLDoKNW9NTp83Ye4KyBDCsQGVuiLWPcHm58uzudQx51R3BvPugVBYTJCuYi9mV5SJJpYrRv",
  "key12": "iRscjdWiHQm2FvRCTJkiMt42jm44GY3uBzgyCYs7avLVHbStYPsAHu6iNadBevzAdoUgCjEVDzZG9zjhALCcQcg",
  "key13": "2PkUWLkCdwrZVndKMfFTrbq4ngTRPrvzuqnn2HCZ5AY3U85dCkYscKZ72ipn2P7hbF7YYfbx75xtHDZze59TLXbQ",
  "key14": "oyhS8iKVUgecqf3hT4Yz13BKPgFuEVAJhRLg7h7CxVuNCPTak8pMBjihZixgTnBDsCvYh1icK3s2C6AFqXUpsm7",
  "key15": "5L61zwSHzbWSN66xzNim3XmKBsSUogG511yvS47atEZfWoBNQhN5GRq6oPkCgcskCnoBsufdsTCvEURnB7u2vxTD",
  "key16": "5yq7UxLKFK5syaYuRjgASSpXCtTHjmXMzbr5Lo24TMy5BgJd1DaZNCrZCjtV7ZFv9Q8wwmJ4fDg2EvrQoRetnxJ6",
  "key17": "474JXY5cHQPKJRNcSUEH31FvtuWHE7qt7PFjBJUiRtMgm5VE2Ywb9dENsoWvxDUBPQyGiuJwi71RhjrcaJ72XoKz",
  "key18": "sZ1VcuqnpL2JqtNpg7vdSR7RCwpmUpi7LsgbUwE2bjj54hrPXqBXjk2Ukan5bg34johwCrfjNL2EGW7ZjkpH7sL",
  "key19": "55n8ymzD5T5YW9n3PTM5E8ymADWmD7HUo2Nryavj2z58oiFMZBqe3coQ5yHvBMKXSAZp8poQ5BnPFL442gjykFse",
  "key20": "5YZM2feYoGXe7LYQWHGake9cygEB8Xj5Tz5pNeM89i38EvYtKVbNGiz2NQFjbEqX77xYYvMm3mbSPLTFERcci9Qm",
  "key21": "2g4t2XPDqaDhuHrZd7hFR2r1c6kG1mGQguUXcDnXCSQGoU54dkPvMsDJj2F1gRxQ6qs9f7MZiQ6qGWgY1QHKNyCG",
  "key22": "5tFfWAp8eyn5UMWzLi9ugsVzUujetVHuqWRqYdPQXmDszDo7yGzyF1PdyDh3GDmkMXHT84jMadijrg5Fy1em6yA9",
  "key23": "erKNVdnVWcnijrgw5Pt6HBP8cF8PEv9yTXXBrgNabF4Qc3z2B8q13tSPU3WKEZLjWNkucKUppzpg4V1h6YiRb5w",
  "key24": "4F4EyQhtPchdx9eCyyA3DTTdHm3xCs66qrEMeWEAVesamsXNYVtUvkm76uLFLvQ2oeG6yiRd1CvXmL3qnyb1da6N",
  "key25": "5Hxg3PvSdjXLfDLpcurEkW63JkbjfE7Y64bhLqTomMYAN3X1VE7WoYXbnpC2EGCECgPmKESP2c7fgKca37AdktBc",
  "key26": "4KPPqd9YPrjbGoXrnrnM1hanknLSjfXpreUNLJwbC6BrqWdCGhLAi77kCMFWzLqbNQfHdQZyvjr3HMQBKumeHAvw",
  "key27": "39c7mzZtBhUVgpoijua52EXxkrZxaecrAdLaT55V9nsywEn9eQtJro96phfTaEd5sQL61KE5F9yVaABiTqZB7YUm",
  "key28": "2Svz44aLHEvbAwJ2QJsT27rGXqdZnuyu8sGimQJz1jnqC1D1cANPucRYUvpcR6y3qyTQVNjBb3Psnkk9218DY6mB",
  "key29": "3LYmZaohaPyfuxNu7HGZEr1WR6ueg5horDVr4oVKbJQE2XWHsQpwqtf6RGxYTEu6mA7zDzFnXcQh2SMqXZWhJ5zi",
  "key30": "38geeCUCB7pDBPcZmCpUCCAFexyHBj7nt68H92YpQw5P2LJM6bt7Y4rTmGPwQHYP6LqjHUVYvkTE1snpJWx7kBcx",
  "key31": "5urJPso89YCeyDTifPVJHWQExxErFE19VN4xZA5kcRbuS3h3GnigpKCLaHTwMDFVxWw41YsETuMcRfBgbAqGV5nc",
  "key32": "63yEK3DnKjd1wqdrqZXWcj5G2qdi9ENvAQE6k21ffCsFCKbURBVMHnYzmeQqtNKGpW8536DVi1c4F31xTfh7L1Q1",
  "key33": "cUy7rRcZzh9y8vHCYYZf2BKFbsF7mtqNNEVvYhSMmqNmDo9BPTFa578JmQFxutUdgTmNAyyjKYrNLRbrjguiyoY",
  "key34": "4rynGUvmpcfgWFQcyLnp9dnZm9MPrFQm7hueaGby76PViZWT6wT9zV9awCdhAb6kU7t33eVJpykiBg8MpLdYm2Bd",
  "key35": "5mV15MUwm8M8WemDkCge4SrqzYqjhYTiPpKwkWDnoqmiP1njNsHGS4KNzVG5GfkkW8ycUeyyXDpFxz1w4bMMnfCU",
  "key36": "5rNiWysk82z5oiRX9upbiUrAG38EfRBEqmu1sgnc6nfP18BJaFr7HdX1cVCBkMFNAQNnvw4qaccdiKapTCpFvm9j",
  "key37": "45DD6bcrxzxy6bHMHJ3JkaeAbfRXLT8z8vjBKFm6kATXc5AsAMKcpsvp2kKZry6vHvotCq3VJBCVz36FbbuKHyQJ",
  "key38": "3VXyBaqk7tGNE6UtmqArx6RsPNnprsuJTjpiybbNy89bjysNKt1Yw6nJP5Au8XBY2TmJDc1ZTMmk27KZzEVAJDyR",
  "key39": "5FhgJiFYPNNA5j3z3eCVYgTijerWUy5Xh6BpF6rjWm6bjUXAgZ5rpQVY9ayLveFuYeGk3MvJGGiWgCYodf5dB9HU",
  "key40": "4k8oyxZvpa12TDYaoEsdG7cgM3zKzU58SiTfq8iCbw8REZiq645KXcr46ubFd7Gd6ZvwCnNEBfzrwnQyvM9g6GVs",
  "key41": "2njKynFR4KUpYKvEWtmrYmoB8kaaaeqMwmooxSDRtCEbf16BqamZqueq8DeBuChu7J7Sw86WHS2UhX3nYBZRi1E",
  "key42": "DfWswsNnVKVErhWDf95kZALzUKusSTfJMDuS7tGueoDdKV7E3uCSvwwruk7kyh3TNPE8iYWRCNqEViMCEau5nKN",
  "key43": "29GEBW6RkitzaQN2bUJ1bC8uLrEt1ay3w3dkBcgpAfbmkNMAs2e8z83zi89hwFFGtgnS2KsBZLLQq8X2LRQnrQyJ"
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
