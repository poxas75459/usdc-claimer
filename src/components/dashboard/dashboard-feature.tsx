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
    "3zip16DEdEVcd2DAuFidRjJmRNFscVdXY9YxQTcBk6WLzpCwX7SBRcoKErJrCWDBgtg6T46SH22QpCvgQ9peWFpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kv3RxooKbp3ESm87jt2Ndh4taHCLL2Nae92FJ3dDjQ3X7Q9jg2F8jgeeZuuAGhCvDawXajmcHgY6r9H41Ecot2u",
  "key1": "kNgKCnUV6Scvz5jnrKiRxDmKZkgJDUeH4tsRrVqyB3FQrsbN6pyG5CSx5PbJoAHjVG1whZZGHXVkNY7HaEMgAV6",
  "key2": "3GzbPGFAZQh9JrzRh9E9QJ9AMax2W5xudiUt4pFHbaJwDizJSw7bNge2vGEKQBZdBFrHvdDioK8zwDwMhVrXrcwF",
  "key3": "3D25ZhizuNNkevBRtUZ3XjkQsZLh2DVv2FxHfpnvijSrKeorjACSgSwe3J5Xd3m6D1BJvTgsVjb6SScXeYZNQTNU",
  "key4": "ukmsBuozYpzBYEdGuCySptAiZGVXpsveMJnYqfBB9xb8QkJmUMAYHhBfANDnD3rCSDrmTJnd2yDZ68GhTbubDMc",
  "key5": "5PdWjJ3q6MTYQ1tnqsrYkELVrSr8VHd3w38P2jDcwRDcSxkjQQYXz5Rye5MaT2X4aephALFQHs4zvWxgRPqXN6xm",
  "key6": "5hLv1NgwaszJZvaNjd4qMhwDH7WTXtcEHzzbScgmmrqiei5aN95N2ipdBcSTQreGtmbMucgc6XhTmSj6fGF9NsGX",
  "key7": "38jDLHD7RXpQNfqXjeWQ5EoXi73QLCGyi18jidcK9gSsx7acSux9C6NT4aBqtvK8hbrmcYEoUz8xEyCDYD2ykmYb",
  "key8": "1DR7UMZEMKwYmbMrZKSzzUzdZSiHeQDdBtS32L4WPW9KtU4MaxdBwnz3j927Ns99yknoJwVpADCBkJjNRjWq3u7",
  "key9": "Hzui3PTNXL9jFDUjBZ7fhiVhUWP4sRgiaqgHVc66F2mr6Rw3MBBd8RApj9W1uQu4YYnjtngKRFGDqh2yEj439gt",
  "key10": "3cDpSJLqsuogz2LKoW2war84q7D54Ms1bCL5NGWCDcXjM9LymPoGgK8wV3pf8f7noosA88L4FDRvBgVxR7z4ki9N",
  "key11": "BvJ8gj8dg1Ep2qc5ShkKyWuee8RCWK9NXRxLHodu4FEJ89Pex8PJLg2538E4wTZ9SN3JNewUwzqKHwxburrwuMT",
  "key12": "fkfsCQdemVvbFsZ9tiB4AGoVQqtVSaTFf6Tmg5T6btPyvPmJj9tJaUZS6kMs1yJHQMSWKTS2rGzQXZHmHjC1L1h",
  "key13": "3Y7yAHV8K7beKeyJewNBKKG4VZ1vWbksrrKKenWxdD1q6RYFBQ3jPvyNuzARJ615FCNZEMfUeKCdsuJZWAXRsPHG",
  "key14": "4iKnH7ymLSaDvDVvftYqqQhJnVcfQJLyLEqPBhcrsMYAdRv17RwCMqQKgWTsbJ1szPTt5BJGYqCGHzRUYEHQexZ4",
  "key15": "4ZJtL3ZUEd2y344gABLwMna3jJxk5AKo7N2zkC6eDDxhgCzhyp6kwYkXAnf1hCewLC9iYH2huq1iem4b3JPAkqv3",
  "key16": "58Gi3ZKV9F6izWSzoagjmoJ6wgKbT1FP2ADbdRvxMkNZtb2XWQZm6dgHLTT8fS1beXsbp3fBrL2pTQ7MvZg6zQ9U",
  "key17": "3r5ffuii4SNmJhWsXmXTNtMQE3482vWE5s3mW33fbtQ5AKmorSJfxGgQUCgKRNpUAGJacF8jwsfkERHZnHJwtrvy",
  "key18": "3ptVNG1FozdeQSv3Go1URgpNaUrDZqBAuYvRbKKgr6Hpg1ndqEE8N3BYvCPWuhe9L4pw5umh6rW3WVCD3h42WSJs",
  "key19": "hrA45ZKftbYszWeG2aHTLXHufgM4PayHzLg1ENL8jgQWdziWSzpm68m2hBeew3GiunMzAXW8V4AY4aSBYYJyzUv",
  "key20": "5199XSZJdLUzeJkFeQGpmERCnjjfYx1WauBdwyEXpe5mLfafLYw6iyfz3T3UeFNg4Wf2rAQk1YUeTWj4Kdn2WqRJ",
  "key21": "3iVghjk7c3kGXVERBLRg8zJVvWcFNvc2Pcoq9PAoqWx8KxoWM8MVmapNujZcgrPvBdkJEtHrUDxcX941MGzMjB7x",
  "key22": "45xWoMKHVyYQh71zu8m8EqoRQi1Q9vg9v8qAVAHTenvuANFXGB8RrLSgMdFV7HnGKkoPEBDoBuT3eRF8ToapreLU",
  "key23": "34uPCLWC76o1i6ESA9uNnKSEsS9YX9GWr3f9P4GCZLHHv6wb7K3vXAMUt5r8s9ZDm88VG2YDhewy8tUXNhgxMcZj",
  "key24": "3cu8Rfvi9RVPBfPiedu5PU58wRadtF9ySdQKWJUGrrb3ZMR3Jp7R32DeVPKBpbcSXgqsctxv6CY7eCqzjs6Cseqz",
  "key25": "o21YPd2fXDT8vPXXVAhziiuqJbxz6arf4hnbuoD4QGhWt9iV2hrMu4xPzqJWzd7HFBn3cDoxmSTK3hnG8kzvx1f",
  "key26": "2v6YowyeuuhoywPPV37ujB8exFeneiy24xgqxaP4NJR3USn5544g98m7MBFGmScLBi9ywmcjywbM8jTgFD36EXiQ",
  "key27": "669548rWtp8vaJ6cXtHv2QgzAwc72aUaTymV6Pj5Q68nhREBY6GonGG9RG4k7iEjiAZDqeAmCmeoKyPGZN8fZ9t7",
  "key28": "5sK7UCqMW3nBqWvT38JAz42MLzdvNJdqQK8bpTeJtakZh1FYz88d4YzcUoTXLyTNM6mAsqCoSEDYKevB87RidAa6",
  "key29": "V3C9xvjZ5oZ1i4r4UoZXxzGHiG6qrZQPmtNbhp6NAyMrWw8Lg5ySstKQFKwfkueFXxtigGnAHH3p71u5uxWs7Ej",
  "key30": "2Nxyq7PrdTL3UeS92EB7umdsYm5iSQd7UknJeQUy65vXvaAV3Ds39rLCQCSTzYU9UuqzS77sYxSdVGtry45TXqUs",
  "key31": "271qVZRoyqwUuYGXe8PpRE4VDgUYgDCwaaNwFN6YH2A9yHLCYcv7sA6uUSngYMe4A3Yo8RW2skp2kyL28VS4Auq2",
  "key32": "ax1RbHDVtiGjZWJKhr2VZFNnDit2Q6mdBbAfxArAkeCm77TjsZy5uBcDWhPPxPZcUGAehBb77ZRrFHhdZ9iSPs3",
  "key33": "2KaDRa7YKNWPPg9x6QUtPVM1fiEyYPqhT1GWoQ3Sfzz4YzcX79UTbKPySMhnCQhFUQeEdxX8e3yt89fTGDnvKnh8",
  "key34": "5fiB5pFau93e4gspLuZL9SgVNpECkdaw16kEccL3uGxbQuySUkZHpW8bXEXLwm9k9ZYN1opZ6NkjM7Jdjs7tkL9H",
  "key35": "ma39ANyzt9eEHtax5HAWmxgBo9KKJGCtAvkccMvUa2MbJyctkJQwF2YoJmXSFZterzpRaMB1nd1eakp3kk93wAJ",
  "key36": "VSr9QYJCbToamtZNnrViYQcZJb2W5kV3VGE3PKwZeJCLYQDX8qYjHTWYWkSdhWSLQCiV4DJBFr7dHj9DG9bxTUd",
  "key37": "3ygdBHKn8xBA6Dw2VypjGKAvjgZ4anVgeXdx2XspjAFMnwmFcS6G3P28vtxjpnfo4is2tSxPQK2QkeQDApmZtaD9",
  "key38": "5ScW77BQ5n4DAjqwWyBdC8dUVHiTHNvM8pqL5LpSYi4fnQW78uvkuFKor3jXWfnpxYW2kqQrjUb7RL8kzYbjQcKx",
  "key39": "4bkvHYJuhsjomsYAT4wpRGNKqECmcDFEaPPoxFYCqZuyhoJGiPcPgoyHms6q9BwV1c3ZR1vNgkJoeUq39SDQBNXF",
  "key40": "qJGUqDcaNGbEQovtsT5CjeG9qzPVDG8UECXxZqQyj5pdB8iicWQxXLmJWK7BdXMzP8MKyn6NjdscMccveon7g8z",
  "key41": "4c7ZE8pkjx1LbEqhaLUJL9LDgRNAkZHNEBTUfawcY3Qz28uVouREQRnrfSyxvZiYTgHTTBCRNVotkQEVuVEeXw8t"
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
