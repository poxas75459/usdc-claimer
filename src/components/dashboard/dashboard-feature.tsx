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
    "5S1Hz46SPgLde7SDNgpwZSiFjAuHiJMhjLg9tCuZSp5hDEcAzM3X3NURV5D1FsXvMiQLDQWNvFyMT6ugnWUDG6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JQWehswdvhGvkYGeifVZ6KXphhFgorB3cMH5dd82m146VSmxoFxmT5DuCwRAeiCJHi2wFmU95CqfwVNUvUXMsGA",
  "key1": "4ssiQrNHtfPyTGX258ZvTd9i48JyEvTnQWWi6YpjRVcxnHffbCuMzcvQ64mNR1vCqsfUtZzuxNeAmnEi9eCZ8mL2",
  "key2": "4fHsbHXmuZ9hn73QBpjmdT8LvS3nJyHeCJ3iB3mELqe7bFzCu211PBmNDkWAgVfKh2JoEcjYUUMjWnsGg1rLBgN7",
  "key3": "Ysa5xivhYUb8GKEAVprZNjnHMAkX4rC93Rw8QMHRHLKWDC4zLX8VmdxcuNBmu8YzcYCYTjFcNFsAiTfsbdgn9F6",
  "key4": "4Wt2k12ckvDGrFSH1BbESyRAwgEWe2MawGjg2kT3zck6Vro2BMpjAdbs796SuyCsmiQyKkUFWV4QXRmoXAtAoQgL",
  "key5": "3r1LfmiV7gF2Q8UFzjcZEJqFquYfG3arQgG2KhVTKZA1a5YdVHQKmqQzGczwcJmXddD2mNcx6HDxhCapZuA6cpTB",
  "key6": "3nriiQLA71AVz1rchjJmJ2cQvmbGPV7W2WngUv2GB2s5puBYqpMwFurMjM4bdU2Y8kUycekz99zyS6XD7ae2S8qR",
  "key7": "RyGdFFeCATbr1cG9rgZBydEeqzRWmJUmByuZyjU9fkhafhmZUx8Z7wQyXQrXer7hbTsZzq6KVp5ugwUscqQZadc",
  "key8": "2VF9aCGwXcUjtEvhPuwde6SCDbgSKWMGsi8zRiMy5X8NsQLB7kbcdTiMsuUCVPxTN7TaPHi4WFZbThZWMpkVUNDa",
  "key9": "3z78KrgNMk4VBQ2Wn6soud6jMje2h93qWNxyPTacHTg8Uk6VWbEzhD11wwg9R8wB9oA8YMpGJHrDejKTLHCkSUF3",
  "key10": "5aZ6SMQSkvkfw559R3t7pmBtaMHaqL2xnC3gvwmoqXW8anLsuokUQTczQE8VdQ1VuwTB4NmTgooBs8daQarFA2Ub",
  "key11": "3PP9u56Rx4VXwRBE6TH7Hk6YqWTPQ3ZamQrLRF8Mzng4ry7RTBZASe9PTjvkPMvAEVpfBT3JVc4XWCGUAsZJWhF",
  "key12": "3svQcjDgGXneqK3DfaZeh7Jdim3JzAMgPbbrPDayMKL3hykzskWtbahEGWgH4ExXRFkWS4U2XEjMGN2C9EgoHXgu",
  "key13": "2n9145UdamiUwGTCnsacnoQEUFz13xMcTrzbhF1W4ryv82zzyG965wYCmzS1zo4SRf3iwkwht8LFYns2zuDQrFHJ",
  "key14": "4UYd1nQa8NX6waxcsiHsdTGg4nKRyhTcXG3VcyNL5FuxLJJSWe8yYTYg9GE5CNWNu49avQQ9GCMpncQBewKURZQA",
  "key15": "5b7kVSiXb35VbXxCi1YnJzZkBz56vkZSczsXHR8ywBJwoD6LL4gsrdL2uWmaxCedY8Px6fjG8uZJQ5cuUPZ1sWqn",
  "key16": "5jjX7a3W1krJ6goc4GAvVTqofoqLVDof9tqzBjZoCaY84nRHjEtSTgjpzhggiNRbsnrB1wBix4swx49xrwMzmsDE",
  "key17": "4Q8Ems6WGhY6WX4u2xRdNKrkaUzihvRE2T6C9Gne7ArhnHTcVH2u4PrjF9TekAtGf6448VqEiXtMTmBYvfw4vx62",
  "key18": "2PyvEQ1bkfnbRnr1FhR3J77MS1fH73esTBBLFYC93qpVgTugtuWyKYUB8hASszJCVZ7SAf4XCFTBAggxFRy2NkQz",
  "key19": "49oimeY83WpLfsyx5Z8FuWjCo4w6aaX98VjnUMPGAJDsHLoVJmUowaRHyJ4tVYM518zPPDrW8cJnBiKYJZLzL19R",
  "key20": "uopnQ4AVLNUQ7KihQqm5ohJyshUDkMRJSbwaTHau1hxeMqShdyoVHCXTheqdftiSF75D9HJuS9Ns9gBY6JtXVUj",
  "key21": "5iCkjiDvXkp6mKNQmzsXPysBRPSX2KXt4Qqh2WEp1y84k65tLbBVnbWHoWVf8Wh5btZA7sQa3cKxo2TfpVHB3WR1",
  "key22": "3vRM3XsvRPDH3wxQNbNABhJHo2i6XuKJfxuzkhLbt4LgHuiA2QwquSosZfziGB5V5sGCYNUCF25s2CCDBgjvAegF",
  "key23": "3Q44W8oNda2ye9m9PExF7Z54ZdYUPSAMFmGBjMPugwZHbU5wuhHVog9Xu88oNox7JJMD3b8hUawS3CKZ91Sc1cF5",
  "key24": "5vDxhX8SqcyrzBSqvQpsqy8wPHEey9MTWr9FCP3oeEPzVsWipNVUbbw2WcZZCwtLZ17Esueq5cSjvjrM5i4EvEJV",
  "key25": "3SkKyG1dexoBtNacAS3U1YJ9VyMBcw1PjXVdV8KaLc1xaPYmMAaPbdLj71hFEWVGUJmcFhu24AMb3Z2NFMgpQYZi",
  "key26": "zB7pNvoKexV25dDLq1Y7mRd3Qwx9JbCdsv7CeQ92TnksedKEYcTcR7SLUcnYg7kzDzF8AAqWjGczrEKdSXfrAAE",
  "key27": "37vXzahrz31Qz8zxdGhUoygyp2C4gLWEnMKRxDDvaDoTBovmN9hiUibsWhmjQ5figXwFR5fQNhUY2P3xirWEpPUR",
  "key28": "2r4CjVZMVuGDFuvo2PWpX7jJkZZVwQ5iGv782KdSohQbt4onTgxuS9AER64Ebox3KNrP9k9ydipuZVwEsiFm4S12",
  "key29": "3BpN7YkSiX9cnwxRtV1DGRmbUDM4jSpqpKJzkzaW41bhSGtMrkkoPURPoaXRRNdmmWcgJbaUUe1bgDJ6qayUoMv3",
  "key30": "4eUgHZfudMMVrqYxeWAyqyoc56tkiy2Jz6Ju8x7sf1m6H6YmSmVKuhy7PLvBNoJ12HSNfktsJ71YKbunewPt65LJ",
  "key31": "3c1uRG6NhWgJ9DDp1qvzia4WprHr8azURoVWyvQtG4wiR8CrF7cK58hXP4pmTmoCLD1e3HoxPmAxUPFSsCWpdTQz",
  "key32": "2CpE9BY2ctyW7WJ5nJQEox36s6TLE8XKkmGR3iFRVxEyRekJjEXZ9Q4eBEfPbhrRwVri6S6BpCAKnYXhJrKjXcjy",
  "key33": "1SEZGGXBbRpnS6fyxzR7sjskHCHmbz2JUddnLXcDPyS7mU3ypfv78ovhb8uPBgh5XpXADXAL2sdLWCby6sJ7Pk8",
  "key34": "3uJ4FszdtXYnfSxX4tSo4FUpM4h1qYLbPqLVAdpnXXHTXFoVCg4AgoJfkJeXyG26EADK4TEKJ8RuuAJANxgcYjS",
  "key35": "2HWqFFHKgbqCVCSZtKkAAYvZhgPd1RwPuLeUELuBwmtHgFAnuPtEGtf66ZprW4MtKcw79CcSFbpTy37K6sfvUWcB",
  "key36": "288YDpdmwoq48FCSjUhAZa6nzdm6R16hE2C5yqfy1F1pZRs3KwmwAuCpXUQSoP64xSeM259Rt96zaoUitqVc9EDF",
  "key37": "5aUu6kKYYS4kAkeRao5hw22tUgLUYTXYqvhyWFALCRQXGmXizKRB7q4jENauuF7mQadW7nv8eyzpmYkESY4nBNG3",
  "key38": "4J5YkrnmHiU6LC9KgL8F2pLJY2BKEteBRF6AR9ug2NuhvQE3WSfnr39bPk9wuocSjxpdXWZjjsfB4bYW8MEWbtCu",
  "key39": "2hwj6t6NQqxL4pZg1kGER7s5AsiyUkcYyJ5ZhQsAzbwPwZ1MJzCSNMxJng9pGy8eEEgDiC3LrSwjvzw3nkSEjWEa",
  "key40": "3mPbwxz25mhy9H6MoGqCx1Q28PWG2jTmddBvzxQMW5KepQ44N5wYyamxjxg3YRs6R3emQ9aDguvxSNP4q2sBJDdq",
  "key41": "2C9tcCxRUA3codaYVzNXz8Di2gAJaEdhz8mohpJGPAmYNeeApBiY79zeUx1mnuWAomksKYuj14DXmLfxg3NTJ2ta",
  "key42": "3UFBk6WptZ1akcrEcgWeogxZxmnjM5gPdPPTGo6ZwfR4SsocUtqAgypPzsd5oKrEWovAhdTzLQKP46jCtZFRVfVF",
  "key43": "RX9hs2LQALPWKU3RQHe3jEVyaiUPapJxcj7324qVfdPVCjZ3DuyBG7EYmrEssSz2r5rZFae9QFWiAiUDKDzAWZ1"
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
