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
    "2QmtZ8tuNUisicRZHZpqTANGUwkReEnCgpi4K9rBDKRgDjs8ZKsyC1UZVdft6oWehjcKrnaCZUWeF6wkinKjQJSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YudMdNtoVq3CKeUfR535hS3kzDUz2N5im73mbNrTnk6EgJBTF1Jv8saGCsqeGJo7mcbaZctSbXw7DGRA6jUbSEQ",
  "key1": "3YMKceqRhogio2APGwW2dsdgGJoe7oveiAeQFi7BidypsXGY9Pqnz47mkufemk6jLchfvqAiVZnbDt4Bv1bRFm6G",
  "key2": "36ySJcpp15WDMKpDWgWdjYk6nXTKbBnQ1Q42w8jx2U53jy2G5MbtZuognJnNiiwNXcKSsw2koyojNFM5BCnePxSd",
  "key3": "3PtwNzR7SRb7fNgVqG4Bt1chBxLwFW9eG6YcEosLBtkLoYPSPNZabwS4n13fUxHGsts3rf7zHCsWYUPCYwtoDVdA",
  "key4": "27o1x7Htq7trefZjyrR7Lf1vhJHcVTsh2wKLDECu2LAhtpfyFXeUKkeTSz7QBwsVXhycXajfDAFYYd8EsAbZn3JL",
  "key5": "qxCqt85M2WbASB3qP12N1RuBb82gB7saUs1sQQmpGsuWV58m9AztBBp7X3ziFLgRzo4cvnRdPCBRS98rb4DAyHT",
  "key6": "8cT3tjxynCrYP2vXiJ6GpVc7hdtkHiseFGoG4F1dLk5YJa63BTZxyJWtUz5Nyou2aSRvBEDG1dvBamjtsdcGE5U",
  "key7": "DgxzzavRHN88U1pEGMzc7DB88pHWcVWrH5GFZqBmq6akWXPv9ySGuBEvayof8wqz3mKP9rttHdbpcfkSxdzKeiQ",
  "key8": "3sxzsvyzZPYoprggpj8huJSqAY5wPN4N31KVPovVeXNgkm8TFCVZmAGnNKEasymQjbyRDCg64WJmLi9JX3fHKzxF",
  "key9": "3bPVFmeKFGm9unWLBGoJKGhsYHSWjPvAnEYuetdwHfDLAENbwWjT7SMT6m5P1toHGStq6bjBRdZdEqYa3549rcfu",
  "key10": "3PkitHW4Noj32DQ1Mdqy9L4rcL9eqpDteCLBaTcdqEy28QZDHrx9wEx1ZPNqe932pNoEUEBdgQpLFJRqbX22uR7o",
  "key11": "2sfuEXLRbLQT2JMbxsPoBqEawCHkpRXeUyvPh3jSN5fEhazpHkM9Y8pQ2HrqnQ9a9B2cMzpRGnURMdma5a7g9tmM",
  "key12": "2YCRopAiEPmdNwztqnxTNxtWrsC1K2FNit3oXFE3qy3FYWX7PDH8JQDtuJbYaYxtWA2Ax1b5cSfRePeZum96W3Fh",
  "key13": "3GZ4pJH68VF7sUQxDbxb7SqPynSAurPecsM91W8LZ2kqnwmVZ8T3kbRKMyfcvBpLA8CW2PqKDVT62XGTB2o3993J",
  "key14": "4gULLCQbDU5pdNgfbh6eLNgbtY6LZM3QSuRAugrbeYmWqa9V2NbNjJ7QHUSDLfYYe5wv1z55bi9wWWU3ut1t7Uy6",
  "key15": "2oZTS38aYa7UEGL5bE7CbMLh9VMjbrj4tzUppnoU2HNAAZpLDWTMCucV1usCC7CRo5JUEbxDZvKE56GcYWcdWECQ",
  "key16": "Yrjmmz4ZzZg8Mp6cqxeSswiR6RP7xCzU4d918NeeSKJNjLgpHKnziL4Wks9w71pNtw9o11VRYZMFcbcNHcDpC2d",
  "key17": "EvjnQYCmtUbtm4i2XLPCph7fp77ff4kmXvXRa3pvRFwSwNnmBEFTEooYV5tpLimqtBCoxgVDBqhWKZBvCdrTUwH",
  "key18": "VWVNnzE8vZTXXBSANc7CVcrfdjLvMneKPqnorvw7VLQX38U6NV3S2uxP8hUYCgtG8qrTTTtGrqQpQ3TwUsvgGnS",
  "key19": "ZRV1jG3eA366iybJqP6dxaj3MmjXtEmVD5mderZjSHBdAkFyuRKB5gD6srdRfFmxrgPD9c1FQvdvnPi8gEMRJR8",
  "key20": "3M83awuwS9stAT6VzRgcivwnK8dGDP5L9fRbiKnuTf37nY93w4gXUHc29WT3jgrWsznLn4xiQzuUJ9hL59vMX8Fi",
  "key21": "2BCSbydhWySDqF41V2Fuj7pbc94n2DhPsECDBPL7436SBbcw2UuqRF2EEMYm1vhboD1pTG3Vn5MqPAQFwZXUvQhZ",
  "key22": "63sFBLj9DmjPCm8QVjzfGJ6VcrtWFF3vfPF3Z4VYNq7kCsWueALZetTBUtQ16Hx2KZmip9SCXgYdww43nUwLRfK5",
  "key23": "2rayE6bf8GezgR3EQJGj6BdM5BmgfZnSpwvG2RVK6tpzszENnepvPWxTwNbnZUUHdBcQohRAGDbCWSbroPxPAbci",
  "key24": "2HVssn9QmioZEJQBRkC2gsc1cMyaoFrNgjFBRkS1phj5J8PzZKQ7egvTSE5g7F7ux3QEmoYGEgb1nmBFm3ekzQZT",
  "key25": "64wzUSkjQgucGWChebcqHkDuiVscxnWUB5q7CiCw1w46Sw84thf4CMZuuXwX15WmzyoZ4rXUkPiCbXcCJSEAi58U",
  "key26": "59w6p5YNQ6XbG8Yxi2qHGFW7Xqi6vzoJVERagm83nUWHz1BzXYmPhWUqbdpw98aCuePGRN4RVqAXrGaJSS3L1DCm",
  "key27": "4oAB6qHQNX5AfM96ewqDtNcgbsFTsCWSHDCNTmgoFwKCwwFCUXFDfpEzhecRtpastsb6JQe3WNCdMvfw6SDF9B6C",
  "key28": "5iZwojQ3NP415xQUXcg5RthSuMikB1ZcDHrXDycF7pNocsGqK7rLxBPAM9gAwpabBq66SGbrtBEchj7p7KvjimEM",
  "key29": "eWG5s5ynX3Fom37xZ8vMmroa5BFNneEPQtUaJ3uP6WvaDtrutmkDrjPFen4wwFrR3cK9DSo2UBSyLGY3J3Cjb7r",
  "key30": "3dnmPgbDVeXAtgSTbRWHYnRBaLBK6WgiRB75oo5sDA9hoAXyu4eKLupiyKojjwtreVga8vqBz4p5TDR6tAeTrbHW"
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
