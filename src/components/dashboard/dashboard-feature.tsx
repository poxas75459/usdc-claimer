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
    "4XokapBSshfrRz2ZAZ8FPZouxA29NPq5BxufEzJTS3p5t6L9kW9t3vzfaYRAdvywnKT6G3wbMWSf8vFmjx8F11Ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yvKfF37y2rJVrrVCsc8d9BJ5b2vH5arwFzsqug3MrztQQu1YWA3CAUBxmvLTkoQcQfzuFBnNmCs7nJjh1RwdNPi",
  "key1": "4WAUanBCtQWqpxkuP15GaUkjgVcVihJewbzEKRJWw6rFgeoCDZoXBV8F2HJcB2XaFvda5u2HeHG9bLPyZX2Dnoak",
  "key2": "52uEVoK81gfLt7sfhVmPWLWWCNYJh3TC8bzjcU1FN3s2xE8T8jzo5XKhjtUamqZRk36LXypZ7fPbwftYbvESb8Je",
  "key3": "2Nh1LacKWZfp7rUn9T9izAXvUYNwWKStwxgeXFq1KixMb6SXsYBqED8BHDzrv67iDFR9rYDDQZtTbSvoLpm4ccXd",
  "key4": "2Cb4aBfApuDEjcWfK2t9KzAkq85tpd58nvTNh9QWRdmvQxZMbJGuZkcF3DL6DJqPr2vfCQdWtgwNwxd6TwDRiAiJ",
  "key5": "4hp2qPYvpb6wawzQLr5CfbG2K3NpjsNahfrVQF7ysZAcqWwjYykwbeur2djXHFbYZNVfu6rqhX5LEd61ikyk1TtT",
  "key6": "2AxyghkNDYVUkcLavLVrkjDoizQonronudc8TiLDeF9T46ZYDtBMiuM1JYJ8H8sJUosFXDdLWkB9a3vncr2Svunv",
  "key7": "4upwWHYhbMS4VYjJvdZ2uq9QzWP7g7fa3UuyWn45ruM5bHkRJXsWce68zTiJg3mX3QwGKN8EvDrg1e5nG6uvF4s9",
  "key8": "1E7bW8m3u4r6GoWizKSWUdfR1F1FCSUVDmtcGyosbVf3J9Nnd5G6QTCXgYBaz2a2iYbfNuZvLdi9PjohxUNFP4z",
  "key9": "4RD482eTUW73rMFn4en9qkW6E7t7TjCJNFU3kc6ynfe8EvzoqJRSTJ3haYNumtEUM7N6TqT4WbKP3147rdYu2Ehp",
  "key10": "5cG4VxovrzPAJpsL8WXPexRnMFnL6PERhGbQGhTN3MY4qbryWSUubzg9wz7w1aEBgJZVcrMofVMyZMwVLod66L2p",
  "key11": "4pRJ4TFtwoY96kRXAZqEKgUDTTyLA8EVmEpbXKQjc1KtTdeFVDt1vhbokLrANZDYLcaBjWhv1bnxMbBGBQvjgRYh",
  "key12": "3hMkgvE2xu8BFovMEKsBKV65H6kRHT9hoN6wpkUn9KG3yjVaYRsVtqnaWo6ZoJQFNYgjrEnJjneMHhqfJL2VQiCA",
  "key13": "2MbqTBS5Uva8sW8VP5mXXYM5DXGPCMqRzWGj5xARTLPZTBeyqqvuHirtiN9NwAPG8KZUQjLYhVaLVSqBfgsZtCSS",
  "key14": "2nZPAHwEU6X41gkWTo9kQbBoRXzjRL1W2zska1PbRpkD2qTAafbRxB5PbqMWCMENbM1ouKVFQUybm44pzqSUBvJE",
  "key15": "5gqbg1URAEj5z1r3nkstVFuTYXKrAADwsant4mgyTjPqr2ErjHer4GYcQFZGkTCHRtrXQD8ZD9YB6oFUhyP4vzU",
  "key16": "f4iVLZVqLcNwvxnsVtLrGaWx311Vq8dS2gT2s17zbHeQzttykYdABdfTJPD4Xn8DJoRJgonb4PWebMXZAJb3C7n",
  "key17": "5grDCtbPy6SFY96oMDt2MF2cNi9Zs6FgzGQSiqdi6bZCDfQMNGZ8zWQxWLKERhEHBbzMVQCw9EFmujV615zfD6ec",
  "key18": "QhsdVK5EWY74nqaSbAoGKtNDzcSdovz4oFpQU2aqy1FoF9W1y5TPf8eSX4CR9YCwxJhbVFtVEx1fgKKCagHWhxX",
  "key19": "ychaV3X8rkopeYvnxjqB31KcVbP17wrDVDaePjy1YDZ3VWz88qGbqtyKFCc22x2wXtyHzC1GcfzxcE1W19tFLFx",
  "key20": "5GTYGqousbQsj1RZ9BWZrbVSfUoRawguCGYmCBnUxji5DZs3DvjWU3ShgtNUj2ufvkxVf6EaVitVjuyrLFnT2xPr",
  "key21": "c8ZSvrbt5qsvfjuuWNoyUfd7tyCVXVccNKbteXkCbewxMpnnCgwSCBiddKqWPCsnLnD9cQRxUF75cDtw2SQXXXF",
  "key22": "4q2ksXJ98BHY8ZY2JwuwY7esTzgHBU7okG1S8YeAhMeiheZzJ6uSNLsZsWEXv24rhtMucN98nRQneHcXvE7bqrV6",
  "key23": "5xxV7sig2MMxfg3fwUKK3C2xxB5ifFy61wfAMGh16YCqLM9D7VQXuPnfxxDQgdboJHFnLiJRWcY4SHxCmcvwH1kS",
  "key24": "46rviwe5bkCVrQtejpEkwiSmBJ4gSCeBR7ubQT4YPK6UARWAJXtCZfQnh84M9dz9k7bS2M5GJksLtNPWsGFxmKBk",
  "key25": "2Wxu4KS8i1W77BkjN7yzLWDTTiAkSvZ8gADmy1DkEXhVYeLjL5LTi2feUZkLEXogVsBsNr1yGbQyLsL5iy1iA5eT",
  "key26": "5A49G5PF2PL6MowNe8yi5UztXP5QHVVo2vtpafKgfFu1MxjMNpU8VZJCs3AMF62hwsR9DAWbrYxJf5651qtLAbPD",
  "key27": "4eZsEsQvEXmtukmN7s1HRjZRjk6hnV5eqiP9cwKST5xuMiaxAhEyXjTbj64piZeQR4fDgPFabfXJ8h5jGFhfERpm",
  "key28": "2px8YTg5wu3zs7Bzi1Nni2mWik1vSnYo1SD6B8M4bp6dPFW9w5GAXmRn7cqC3TBF4WGn1uw7jWMNkGAjYuPgwDTR",
  "key29": "37vvDHV5gjmr1Gv9HzEYjyVZ7gA3fyE2wnkRUVvXPsjPpr62AS3RH4o8Q9LqdLjouACicfkXWEhbHXmK2QFBRqMF",
  "key30": "2wZV59RWc2iCp4Q3rC85fzwPEvZdd4FvGHfzDqy2o5fhtaHZKJHKsKF697UW4BuHLHXLU3cGRhEFK1LtVrWpSKz6",
  "key31": "3tXooVx274DTyZ5aAwmGF4iq4J4udXGZGMMAAVgnoTpvjQxYxRM1gLUuMpn3wknfsJRzNNsE6gDjkuSzcao5DYEa",
  "key32": "5oBysMYF2ynegquAoYLrNczVfg1Uc7S2GBeL8FJy8SFDsC2ixMFC2s49t334sjjUYTQ9N73YqptE4BuWkWDSYEd6",
  "key33": "5bVcypSVmcd55JvzLWc4jxojZCU6Wm4a66vvJ5e8L94wj4r6qU42wwBP9mQWfHvWC6aaprcjyi2ZFuhnnYhUBV49",
  "key34": "5kVF8E1xXUrzoJnm2fFfrHyW1CQqxScS8r5vrFz1fQSqowAEZ6rf8dVid8TSNoceABNpPUaRZBk1Tqag4KsSNB8W"
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
