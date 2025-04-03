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
    "4ovZ9pNBmr7fDMs8qVXYHVUtYe2YoskRznwxSU7uahvZQHg5dGAktJ5i84tjNa9K2jEzgXUYaBiEHziuUZjHvyuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TC17sEjyzd94DNmF61sWv5UWcNj3Xgb5spYrEfeoDh94gYLrrbnM1sy9hp8rcLnEp2NW8q1Q1vTLDvXd22ckRDZ",
  "key1": "3XAtUAD9TLCytmTRVaWcF74vNvXgic82UHfoL793deeKGs3Xz62LjBHW5hfhrLsEnaE491kkd7SCmGgm9kXG2fzk",
  "key2": "4JSfBBP3G2XQLfFCoxoFhhYWmnKbk2dpQp3qy9KGusvukjMi5g5FoA7xhM4jbbyZGzH74axvqperk82vakDMkDTJ",
  "key3": "4hXuxvsus1prnLSRPxPu5hHmdhYYzfr8szQ1bAWnQ9yspD1W3L5YUEphZYrgqa3hHD8QjoNM8NxfCZuBEJ5Ui6LS",
  "key4": "2oGQiu95MLzhgCfGm78Pt8Zm8UWU41Kd7gzgy6ZnMcCAPtca5JtfdSRr3xvMV7cpvVKdijBkvvWCF6QXxuw3GqRz",
  "key5": "3E77fngirE4kuddm1eBNofhsnyULVeW84SCa8a7rG37Xywpjm9H2deUWwvUbu5aEZnc9WNRAuZ8hhZvVA2NHbNSt",
  "key6": "4vCTdvJtsHXPwQcbpm7jCLsvt4KnybaA3T5qf55wndwQjiEfRd4xPka32SUWxeGt9FT9foMdTKjjfTUoKqutHo3d",
  "key7": "4Zw3yhRPfRtpWkqDftLSJqmGpUZFKJSJUSG3GMNid6a8WM1QFy3VaPJ8cAVojSbfkiEd4FnRnQc6kw1CuZT7eSK1",
  "key8": "5HptuiZ8SRwoV3cXiSxR3jYxTkAp5P2vencHgEaxaWQwAXNduBwwmEHKXAzyxcYGXgfPuziRfH7DxpRUZAVy49Mx",
  "key9": "3vmxtw2iaN8HnS1fQacMBthubo4m6wdf5BuVd5crXZBat6Xn1LZhsNJjbMZz5PKEqaRVMMNbE1bKLR7KXeacUPor",
  "key10": "gHcXH7pUdyVtSkYLMC88gsGmrpVvMoJ57ThTsGVJEeL96JpkNAd9niAbMRrj3eKW3WSamvxfsDMPojsdw87yTkh",
  "key11": "2dnU35XbMVg6Bkt66Z74RnYgQVMFxCZSc82Cpg3Y4CCnhq89ZDpBnwC3wfqVWE3n4SRzQowLhv7FZQ2CsFwXvAtP",
  "key12": "37TnUZaT7h8fNBT4qEyZSoq6c92o66jysH3wDsUaEFvu9v64Q6E6YC9NfgLu5cc51tXa94CzHywtJjT2ZrMJ1PUj",
  "key13": "36D7nXvrK6rNq8R9E2gaAJZExPCBKREgieJ6coX1WcDe8RdaiXUFvtiSYCABxrBUYm4gJ5zp92PS2cxsWXSvCq6c",
  "key14": "5gB8SpbZCPe5ZfaA8iHaEgKRYs9RczQRLQDFdUQ4XZnBsdHn3cAXdeAwaNeQTbaPfoY2ogCLwRRpes7PKFtTzYiq",
  "key15": "4LR3TySdnA73RUEXmbwsjWWLySs7xCzByvtcgzXRMcfjiTYsJm1nJawqafdMxCCoVWce98gsGLDox5XSDmkcsGwR",
  "key16": "M4xmyd1X2XzFtKMKyjWoaGW2Lq39Shb2ypsAuErLtMuAf9aegBi9JidpTYT1NWxHh1oheupDDBeXVoz8x1R3Vjk",
  "key17": "5wLvSm482HRV4sJ3SQ3UcBiom79ajyRrrZNJnpQfiVQNJycx9nq3QoWfFbioUr1kJd23SeyhZDHvxaY5ft7izbVZ",
  "key18": "55XyE3F1rP8QHwXzYEhzuzy83BmhZPS9wywHjMqKSyeCwYGvUmTGTDqbe6ByCBJj18w6NJtd4C1heAnZMv33AP6S",
  "key19": "ZptAmWV3oQJg8ZTz8iNXYFfAyKBBp7fQ6GEgS9BFPRDBdhFD8EsWBtfgsYcHS5DLELWR6c9MRuPkpXUbmqiRTnd",
  "key20": "66URDiGYTMtt6d5xSLC7rbM7ZyPvwkV9rNRpRp2eyCXEfmLm4ZuycUsv3fL4BzLZbHsJx8U4oGdaRrfujLWv3HCp",
  "key21": "3ChsbF9AMwtg2pMMqSamPLt6SUSkjsHz2VrAxNtjdNbiaWAHmPmMuY8H4WvwmmtcwSXJyo4a5LPBYutLaLGA7gkt",
  "key22": "5UqwpMBJkSCjCrw4BH6ezqcPirhrp6yFzZkfMvxzyZk5eXXUkCA6QPG34sUhEqwrAFwKnR3QXCJxabcGMB7M5JvG",
  "key23": "5eqn761hNvukj8QMU4zWjkq6d6FhxqDNfjezjJadpJihx7bMQ7pAa4PCFqPSjX5sDDqg6wuW1BYnVercckZDKMD9",
  "key24": "5vPQgcXP7p1UCwRReK73D4Np91ysLRWt1ctVF5Xz8oKuoVV7g5Ck1UjW1tLEB6TE7oM7eG2KXxfi9ZwX9cxQzh28",
  "key25": "3wfjhvqCWNdEtHY624sBtoLP6sRfXxvm6h3NYsu94aWtwGsGBaQYpESX3w55caKqwXu955pQnwRZSS4yt2SLM1Qb",
  "key26": "4E2qre5WJ5NAWXn5tZM1ny8NPWFrHEu4ozHwhrAQU5UV2bwo8qtB7jSLZiRvSXsJ8b7ymev44utK97CYFDWVZZSk",
  "key27": "5KUB9RGQUZBUnQs3XvUVNE38qsbftamYCBwK6GfWxCpjVBFwpRdN41gKEVmBFVc9DJLvQ5yWhSQqujHkBvKw5reH",
  "key28": "46WFNQuMcgTwfnKbuP1cVoABcZ88zazVaVeUz5FrW3CWaLMWP7MzXvAUWTvTroJ1g5Lun7m4Pf2qR9fc2A7JjC2J",
  "key29": "CBCDBMypc6YxJhvGoFG5iEts6g7A5BnkvV58CeMDg2bUwoF3dyNabjrfcqY842pUCW1rhYgJox3qzA3YuKqav8E",
  "key30": "4V7VKKP5isH98uGcUMg9TzrDAiQsvgmBtkbn5nhSCj5PmtAFiv1wAiRcTvfBNDv7YXZ3hsioHvb2XfVHswxURpoz",
  "key31": "2fKnGeQeebREKMUYChvMEpi2r2GrwNy6awfiBtMDV1h9Lu5Ak2X16kJKb27V446Mm3DYrgHZo1yBdDcrXyHhsTN7",
  "key32": "5AHfFS5SmSxeiz4eFqajcvoq8QUhxX1kVTE2QFftjjjrcPNDeiHhhDQxWdsqV8TJqpkDdvEc2GnC1qvKHrPjQ4en",
  "key33": "3g7ndkBvyeDvS78qb4nSVomowDLEZhAaW7poWwBbJP7qi2QiBec7arjwT1q5GK5PTmSSDKK2f8sZFmE6gm9Z4ZF6",
  "key34": "3pVPM5N3bDGiHYXYvJQmiSKwFaYP1n4a4yEseiYq3DVodtwH5sanhD2MLBVD421covNDGSy3hm32K5KqtmQd2a7",
  "key35": "3XKobGePxsk8mTsXDMTSazLFrvMuG2gSoed8wSvR8bs5pe8rNGbJLXwFzwFK1WmnXC3vpGWvDMM2WdG5w6GpSZkk",
  "key36": "5aXwsszdQvhxJopJT1aEzN2nHcgdtJB21jG962QhydLqgbsauEUw73xqVsXUCESqbcxvTULUhnVuYNiyQgUHG8Q9",
  "key37": "22YehA5UM3aEw4zctyoNqFYtowewhWVvytY9Lm15tSK3XKiiJFepEU5nq3ZUW9QENBtx63ctysgJrrEXvbiiwF7B",
  "key38": "4KuP3GW7N6289o13bMWMaJ3iaQ6F4QtPy7aHwXozzV9s1fxgJ49dfzXpx8ZFWSDbgwYQqeEv95VN8omKBu8rJPXu",
  "key39": "3vShJ2SwgKWP2g4q75hjyR77dxpzTogoPREM6aCwHSjhM4gKS68j4D7arQdVKUugJAvZNV6tHHV3zG6Ua4bZ9Xgt",
  "key40": "4RVh9dzS63VU2pxjJ79EzCWTfb6DAAcTwFkXNkg7kEB86YwBmKxSmGNCxZzmvzaPKEruAXnZhEog8xKN2ffdFm15",
  "key41": "286ka8nwZYNh2fsQ7KmBzsMRuiZstWkVdYLcnH5PjSDnsnr6yYcH5PvnbiwjpU4W2XRh3uPxuSsFMfsZvn4LK3FR"
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
