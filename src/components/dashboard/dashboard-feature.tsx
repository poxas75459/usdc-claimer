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
    "4KMm9YEqC2r4ZJ3h9yPCpZRvavXSp4cCJdijhx61zC129NfXDEeRq95tSNKLf2WCVoVxRkKNHRSoFpAs3N8qjZup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wfEcZsMfdBbG4Qyi3h4ACkBZEw1MuNm9ttHv2yYUuXa9VZ14Szfci2VW5NBQBaWNq2qSTgCLRV1C5QHoigKVuS7",
  "key1": "3f7n6pcFz2LMhNrmKoSMk2Lq6YXF7j8yb1trUUyiCqeHghxUxS3hFuJ711Q3e2i8vjTdHeivZxFKNMCZujqRvSxT",
  "key2": "Am9rNFDUUfssAf7nd8NmHKAV5ysESJ9trUmZzHErM8R2FiHzhpXtYW2Q1j8yfzm6N2wvktqEP9UFgeJcbTe3ywb",
  "key3": "2H156GXh8ovdE98RTE5ibFR8s797QYDFo298dyAFQRYnMQk7fHrfPzMK8sdZRHMv7UVrxVz4xP8QhZPLx3TpWaoa",
  "key4": "3oKqVPnBscdVY9EicjM2pHogmT53AcwdygPePnxB4dubYfbdPMV6aKUksookQ4BHu8QfK8LkNFhTdDGytL6heBTp",
  "key5": "CWdNTQqv9qdndkoBJwJkRmjsJEP7g2yfiXSoGQgx7v8GZSN1ZnFBp2EVWyEoG8M3MkV5Hgakbv62cd6j5xMqdPr",
  "key6": "2oWKKDV9iq2x5XhPiEbUescDdpfMfe5TxtARK1JqZzatJAJnonEjCqJ5K3rYdeCx8NHT9KWVeCAuc7jVWomAHYNR",
  "key7": "NgaQRnbgfzx1Cg66Cm1a2iqUYLARUHRLbwFMbZqbcoLnAfSFxGm5Eurn4197xKFcRkZH3MbXP8de7Yoz49qtBbP",
  "key8": "3kVprbpAcBBQ6dcH7yayqRw6UZ8kYd2yJmh6jmD1QECVy3UBtJR2RG8boCyrPuB7EgC2boQUv1sdtgLCLNyjQCP6",
  "key9": "5Wawav4ezPyXjrJiQEdaDNKB6CXHhYUxQL4VhrbgY4LrG9Hn8FnE29hBc3ZvMYzNZMivX1VciuhvDT73HXjWfYjP",
  "key10": "3hqhGd28LzEMhfjPDABhU3s6cvpvb8nH6Aio1BnxmUBNViK6eCDD8uV4kHBKRcYWmTfu79DbGAAvL1jfauTcJMij",
  "key11": "5TzGPjpEjxAof245DepRbVCSZy8vgJj9nS964YMcDKxUMRdnGjDiqXJ5Gkb5cbRPT4u2TXaRFjWGUQcK5WPNd2kn",
  "key12": "gZTjeyRY2p9q6TLisCekV4vgMzXRzJiLb7PF2KTo4kraJhDFQUHur8L7sQsTUkj1DNszYuzkTQdgWau9JuELJF1",
  "key13": "3hZMs1tBEAGdv49QqzvtJBr5y8ucCPJ6nwjW9DoQ381gXuvuf62ZAjusEHCGff8Z2YtZNmCxGuAJXJRnmv5ertM9",
  "key14": "4V637PT9cxAnNhgZLkVRpjUhsuuqrRQXQ84rHvHXVMAf4P7MSiobcah4brH58mJ1qYaDvkzc29JWBDQPkdedLadk",
  "key15": "2tkJ1j4Gv6qitXvatifEVakzURsvax5BGr4SoL6GAG4feva8QXtfcjNu5z5UJoDhsXHMoUhvWumEDhaLdT4vPPsm",
  "key16": "4gdh8n1K3Vu5hFb2uR6vxyhrYbELaDsSsFWDQvq6wJSJvAsSC77X8fWjoYY4KzQfuoAReEh4ZTggpQ17MufFriaY",
  "key17": "3vC8Map1Ncci128MMvHSozc725HWzgEoefbbTUExxHFdnp8kaY2DLjeRyMyWesDSiD3erNjLTtMYKR1DfpgJcdD1",
  "key18": "4JA1bJZfDp12wdaa8o7bQDUFRZLtSGKnxCw2PUGumEcmjjUVH2388ixkPfH3yqs9deLW97yo9PCGYQZ2Y8Xs5Mwg",
  "key19": "5xCHsoUs4KEie61kSJVrcCS1S6dRM6ZPZALpRV7Z2nnwZ47vDZZoRmiAKqL53FN2VFKrMCaiQ1a7dLVXoCuUxYQ7",
  "key20": "3RF5jzQSVZC2CBKafmSZRWhykcnwkxm2YPK8v9bYaJA4KDFL8y9gjTaVJPE86RMQdmHTD2kD7Y2Wqb1iZuoFmMUr",
  "key21": "2kyM7vTN5EYh7PMbAtTRuBbCzVpTw5XRX4CVVsKMRYXeF4np7aQ8SahuccER7j4X8cxktS92b4xA5jERc3ALALki",
  "key22": "21KSUMKd7KHGh7DmPdbJ7P9DPYbmH8jZU7e96Qd9qWGodTSnxxEqsxDyn5USWY1oA2DE5YZ8JwbqVoh6NFK1Pej4",
  "key23": "3eQY3CDz8kysqHHzhWPotXwdXXvAVpx1isjFw9WxmAst4XLnmp99fc1HCgZASArtqaX9pheWdLCmSwEHsTg626uT",
  "key24": "418VrFCXGNqGXRFpEfnhRx7wXePgrzD4SEXMfUhigrCKMDd8D2Z8RLTcBnNk4cWCS4kiXdzs5Wd1aunFi5RVLpKE",
  "key25": "2189B6U4NZApxV7FrFxF9F3LUXLJMRBs3NNNC7AJ4XZHXv7kq13gDcXNjMBNwqq8dKTW2vLAhS2F1NeNKDjZNtk4",
  "key26": "26Sh3NzrWA2wtAjqrC6fJAtAyMXzN5FtFMVfUd7LFZq5asE8b1kLQSzwoZD27RyVgkZT89TbRghhBArVLVjecjt7",
  "key27": "4BTMzpXUtxwRyexGHWudR9mefTSCQwtKncJPVqUTchSuPBhwgdAdsvb86f3m4e9FLiCFkGNAm6HVFtQykH1jVZMx",
  "key28": "5sTzwveJF6sFCZ5QxdVePXfTQ6TUKDQ8co58Jk9Y9UhVpjE7xwo1UZtKUVsjtAuzAMNeYwNNRDXf1ejQ2zdaBkv4",
  "key29": "3W3ST2KXsqbbTLTV8AQ4QvXYJiu5FwWi4AKAGVnmWYzER4fb2gvBm2vdRvjpz2Etn6vVP3iY41UvipnATNDUpH7G",
  "key30": "4Zjd7thmogaWt4K4rydauJv4vsDkc8ebSGgEZP6rQ7vLmrcj3dQRuidATW88FdezBjxtfC3zVrHJTJ3cwgk4ecry",
  "key31": "4YVH7CqQHc7EEwe7X5nETZheqWPTJaeyTNtV1aiz5nCxa3g4QdmdB3nawMNgPSoboxXgjhrAw3aTtMJ19Q16kSWf",
  "key32": "3FQepSGhqq32G3NyP5MBZiGZSmmyVkXpN8k51pTGWGahhjL5VFBZaWGVXY3WJggGKRtZ9G4bLVekUWUvwvqASF1t",
  "key33": "mW2GkXcUhrBCy8ykkeifvdpKh6sDFBDMapWveu6T3R5DhxVo2AY7m8LfbhyiBx1wCcRwKRKNwcJewRDfNnbNN4t",
  "key34": "3YWZawyyCTyUG57Y8A8bZB59cp81JBrefMb1u9Rnx7RsWSJUS7XDNyEQ2fELxLodoeeExrewe2uDirP13tpi524W",
  "key35": "3ajjVgu1eUq8fRpSitSgfe6P9ChyEmQ5dFwi86LmCMGdjtUWqLqHxP6j8XfPz7T5fqa5Mcux8Qm1NkXYWVuqcK5Q",
  "key36": "hw3Kn9CwyDuRYdJnzviApgEcmudJkRnZFbV2CKJ9yNu24LsYE4SU9hF2jbCb6NWywLzKK2fyzs4BfY5KNqU5U2D",
  "key37": "4XgA25mqzQQgvb2z5BCQcavLmq68oXbS1Dyo4DvxzjYtujAUZ5Qu29saP1ivhbM9ZR4tXHuRr4968oDnrmwGnkU1",
  "key38": "2Bq2N9YR8vPkRa1f33rpTouErwgtftn1mGqcCHjk1WwNKDVcih8YyEUmf3wg8ogQ6EqrR7xdphUGHsP3QKXdmy9j",
  "key39": "5XrmysbqYboyPvTBSx2o8g4npvMGPJUrrVeiSemgDyWAGLq58xBxyifiVGvfKRB4e4TV7rGnvwy7jyKcmd9TnxFM",
  "key40": "3986W6z8EfvYna6xvNqDPjiknqNkVWwovA6SYywccu23HgBkZxKFfQ8vr3JffuK62MQzapRsJdi82qEubQdsGX5M",
  "key41": "3z1b1Kd1kvybZxeEqiCFZjkrbKzZwYrAKZVz3u71fgYv8Uvqqj9bctK3sUMENrDVudDHCpKmgor93VBtgFs8JAVs",
  "key42": "5VCcWQ354ajvcDZM9UQm6SmtPSBYrzxBX6xHU7K5YqnCLj3c95Joq32F9SJYsazpp75ayUiNCmb3KdyakpApPtTX",
  "key43": "2FENsNXdE7f4PmASrZNBRePse9Lciua3oJ8jQVHDs5Ze7dpQ9cvgAK6FoFGRGDrymgbPQ6Ky8kiNnTsEAfSHiyG7",
  "key44": "5kZhxqSZvWfg6jTAQv3syeFnFEt2AYRx6NSqgsihg2dQ1YPWjsw39piy9D2q2zannBhifGfiCLTD32eCrkkt3Zjm",
  "key45": "2osbeW54TbP1soAZz6RRcCMqhZFapES2s5uoKfSEWmNeVojd1sn1fV2QU7mSDvwxCCu34Z9chGq4MAPYcBJZkntf",
  "key46": "4RhnB69rQCpH6TCoQNixNp1wwvawFuojpR6AHCd2tT7hXtr5oFffpwZjPe3f8K7qNGfKFYwHhaBF5px2wiW3kwga",
  "key47": "3VwS57N5QxvMvx8pNRhAJ1FdGzN1QgGF5PrwUxa4DFAaUFjDefFFrg8cfN4mExgmMf8gjVjKKkJ7LaZWtpkvDw3D",
  "key48": "4jMtJiLSKKtsJfBPCrwZopAHirx7NFW7ersDGy9tFva9S1WXiuffNUGNgVD8op6hSdfMFEDNQVxPDA95ztVtDkmg"
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
