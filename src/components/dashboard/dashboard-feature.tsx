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
    "4SVEhHauoFCh9ovZoBFeMSdCr5aGNtkmPY7tS9sDuVvxs36jwX59sgspAtggZHQJ5K9j2uTBfDMW9cgbk3sKR9kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qDWgJoqETqmFjKk6PLVT1tadVeiAebtgVKwz74xjh1EAXR6vd1BoYhh588UyzhUHyak7f5gbS1iFfkpecMscwtA",
  "key1": "5wvKkkM7ZSoEqUEZmB3qa3tdxTMzoF9EMfQarguSb977ZwCSCb4ruvZesWJsagb5wuuGFcagRro1kBaf8j3sBrLC",
  "key2": "67J8DBRjk3Ctope36JGf8WRPNh96E7ChzvXB1hTfet5TcWqSyXNd61H7tXpxTnVVUQ8vkQHuSrajGbcyMikhWQR9",
  "key3": "4rDyyX8NZe2asmcvhxqeeSFieZdDy7Wzkxj79J1Ro5uP8H1xjML2ajnWH9FrbDoKkkLFxdQo3iSGyJ7bb6MLWaGf",
  "key4": "4t3UGskCCE3xxsVv3P5n1gX9Kjt2o2bTrRuoc2gJev1h9jfXz5nPFvAfc4BaXrfm7GBargs2eQjaWP42m11fbqqX",
  "key5": "29cDfshS5BGXSsQNFXrGJqn3v5y5cL1PvJ8qjzfKALHhEoPTHF382m2EPzzuag3jpxFEY4eKJi2FrZjM3f8xKztT",
  "key6": "Kpf279gBCV8vnapeCVpradXgZUkBUo3oktuE1KVmSqwyeWiqgxVq9Hm9Xd7hxU2q8ZMhHgx6ehH5fuq2QWh5YhT",
  "key7": "5ohbDsm349dyjRzhLKAsYbwCTYMGKoT6fE57SYJ3tXbppPzt1cWCSXsxoHj1nFEVi7Ai37JJ5uahBa91FjU5DLw",
  "key8": "3oUtgD1CHaaZJAKAxna7N9LPnMRpjc5YjCSqnM6484Msq4w51hgvehGrjHMMDJ1nkon9EAaAMVbw949SncfzGnHJ",
  "key9": "BCCK5c5RPDQjRUKqzSUuqANLZWbGCcLct6gwkGvLmv7jNLi8hSR1sfLXTwJ7HyLHeJftJ96euf5bKjf69Hz3Yym",
  "key10": "5aesEcpZX2itfwAr6EAsXVFQYnJvxSf2Kdg6RxKXktpdLJ7fELg1KBNHeYMEKztAXi5A2VhUwPaGwUyUmk6W6v1e",
  "key11": "34fZqdcdX5CiZNv9PbbZRV32heQL2RULsquZDQE2KHaXpTH7rSHL3njQkbzJooj51Vs4q2ZxLnXMXqdCLm8zAfhJ",
  "key12": "3Fn43beM5T3z2Bbam9MFHaGVhPiizgGTfaM1wwiqVpqq9k96kHfmKATBN9LFucdLY116pgHj1G4c8fVpBaTGLzKo",
  "key13": "3v4iafc8WnXzq3FxadkkK7yeDQx5dMTpqBtwpGKvPaMb7SfSYem2vXmsbkmcrTTjwp7wSL8iLgPsM5TxJJ8Ldy9r",
  "key14": "22Gx6evoUrnRNUMsjE1Z6e2YxMZVohFeDVgiAQ6TKs4bjUXjeACKh4TpmV87qR2VuV2NqPeSctbnPEaMqucCgMMy",
  "key15": "5L97gL9TicBNbMLp8KrYE3ZX5eqVZC6RduV2iJkL5wfqzBAgraSZdMerwhj999jKZMvNvD7UqGqHJTEDSxwHXfCx",
  "key16": "32Dv9Je7i1SDbdg6U2pQpeyrfrgGUSeZ259i5h9U3edrDXM25UXWhrso54kEYpCWkddjaRpDSnxuufFiSZyAYezS",
  "key17": "3h8TMUnc5E8gRjWeuoFfYqVfqYP6nEgefTxFgeSuoKxzz2njRdAfWMV1K5vWhi4iFDXNXMfbC4zDMrtGPKrDFiTx",
  "key18": "55PwHXWeVRvEHcggDQSA5oXsgc6jX8R9cNAZyPiPwjs7WkQuvULUni1d5FpdTrQKZBZpUDeBZUpYSSGbUJrSJVGW",
  "key19": "2Y5mgXxLy5FCLWLxoy7LmgDX3U1Wi2RkYjjX2cE9hbzwvYu1q8Kix3ZQSbo8kRmTBzMTuXPTahW8vCLwnodpks6x",
  "key20": "5thteCY4WDrMEN2ppssHJD1sAjKGaQeneBJAiygygkMKkSYKsj4KpotC7u6KCHdpdV4maN8DFv1n8mDSZRn3DJvQ",
  "key21": "2Q78AA2Q7BWgn6NnipgthptuD4nEsc35rK9SCt4i9psib514CoQtM5LBLH1V6auJUiFQpGmYdGPJ2uV4JaxbuHnM",
  "key22": "2LXxR87cauh4HnLUx8wHgMmGRunDMyFk46Tvue87YFBEpVUdavU2RMoksF7ko9mksAaUQzpjX3SH4UxJyXpmqtUR",
  "key23": "3KMuT3TKVrjcsaTeizJG8UxH5NKaFuP4pQACxkchD4mt1fx7MfoJXNMkYxyTZDRGKF2qhZ3kWciNofGxuN4fzbpm",
  "key24": "5ouzZ1HDdXdpczv5mTmi7qn2Cg5aGHTpBsMPCLkiiW7PtekR1YAKnSVuQVqFM6LtLPHPDyuxYwjhQjSH4ARXMr27",
  "key25": "3ich7SV1TpXNkbFbajR9A2dLBccNJkrURcv3rrarR8FBaAYexAo2iQuo8UyrD6R1SsJhe4otgG1KeiSrgVbBSmEV",
  "key26": "5bBEJY53oPTFNqJUyyFpPw71pcHKcRooRAAK4vz23Pko8qe6KgnQnQqJM54LpCu6Wn1RrcU5gCoaDwJ87xZ6aCLZ",
  "key27": "59hZ2eGjC6uiQQrLhjuzNDdgYAege7mXUgWe2aUxq3NAhHDzJAjKByMi9nRxnyku72dvp6ydV53vrnGL9Zgxr9ns",
  "key28": "5uphpcb3QzreuCG9rxqherBfm5UtBx2UN2MR1MXWFvna6aRqiBFkWnKWW5zyTrsEENp8bC8QC8tNidGmWxdXwHvt",
  "key29": "3CJUh72HGaDfNwhaAU2a1dkwKFaDAefroZZbJbuLmTpJZJpUp1TZihQqfjekqthUo7m4muNyyRXfAPPUimEMkJhE",
  "key30": "5RQQroBkPb14XAmXwdzbG19e13nLRzt5bEsjH6EppU6PJZjBom3BqXUkoLRPdx3KK5GGbfQWj4bhC8ZiH4FnQ4US",
  "key31": "64a1uNvJouH2SPycRRMg4g2FbaSuU3haJC1UG7LQtWqTrti1WSKBTYdtiGYHLX4SaSqF7TwpWHowECH4z35bLQu3",
  "key32": "2hC4Kk8nrvf5rgVQRzX4RWg3if9BSdyvLYjKz2Pqhs9xNAC9txrabyZGsNEWH4kH5p6XjyZ3ftnwQP6HRHuZ7wsy",
  "key33": "2kUT3uJCNsxd4aEtWJRnKKuPKXRioHPG1swddLgZwf3HQdhM923C2RK9KLikGV9UZjgwJ7du4R1HAyWuPPWh3Ggx",
  "key34": "2QWUNrfs5YzpNmA11LLQrk6gQ6A8LLFesDu2Qdy39kuzwmvutrwJRj8DDaFTmthY2oLvCDq9LAoWF9rqf3QPKKmi",
  "key35": "2h73wgWqacnvp9ntM2CC1Qtjdh4KDyX1RzwE1dmx9FWYaotzphSe9UrBM5mRPpWfReoeQGGNaKCBQpBYJqboBeP5",
  "key36": "59euUjogVWFwCe7V6mTYL8BG1tyoKpLGYWMEYjmAsYXhEn3W3JcacCDAEs7Mu2esoA5cWN7oMtu9gz85F8WJQ1uX",
  "key37": "4FpMtKSSKscw9uay2uuxmMNvJZRmT795EkKdktqquityXyifU7QCbbDfsMxe2GCKf6KscwANMXK5tBYgqF7x8i3H"
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
