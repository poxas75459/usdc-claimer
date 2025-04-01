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
    "274LGDRt6hMc7htoDZcre69txmXk2XSxNqJiWaSoQKpHPC4yA6VnKkbQceqEp2jAoUFgs5Bj17fK5tzYrUGCJv8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "614vmfVDdtAiVLkXgVMRqYstJxMTiQLqC4bEHCybD1ibbfqH2Q78cBhJ51Sp2e4eLN9e31UqJEwFKyXoMsQ4eTJJ",
  "key1": "4W5Fi1qSDWy8QnzDgyDarF6BsRPcsirBjFhvxsPnyHb3EBsZy1PSTm6qPoAuBQpcpTrWQpy1peu2hhDo9srQ7Ne4",
  "key2": "2q3ACMMew5ZBqdLxhVUP8rAjqCwR35BQeT39jmiKaKaKWB5kTuxmf7AhZzACkeWVer4cN83hD97XyFwgj91gULJJ",
  "key3": "5uyBmNJhpDBSKLEEgkodrQzmUQbcuXr3XyXfGqcubNnfm7DVDAZhtg2seAezLQHxGYwJjDZRVihCozz742JNrN6f",
  "key4": "4nehN862BFjkggHqMgYEfwJpFTzccM3xLnUEA7UYbQvTR7sXruXPNuuhtRzsAiwZN283Z8SHU1dD7YWVQVEzY7Rm",
  "key5": "5kQurEuQAD5mExwpkAJghz5AVmXhhAa71i9NJoE9yE3sYVUkSUYmJQ8Uik8fSgy9vQkmsiCigpa9o4Yj23uSSvC3",
  "key6": "JVnEkFt1xw9ceDThZsTRC9yctgCYesqaGC2BKYn4cg4suKA8g8489CHocReUqiCbkaBJpbdYo4qF1v4CcAo7CHf",
  "key7": "4CCH3qYw2EL8FdktSerYDLDMEc16pmfEKUxfDUA1KWBDotgoBSwwNxZHC9RE5psa8JFp714m3EnX9Tc7zi6H8GPS",
  "key8": "2W3hCmB1PASW3ocPZmzWCE9qBSkix2KHk9rFvsJcmtdvaYVXfLeVjPpiCrwN4oshKB96NFAWsFvaxt6bw3wQXUNE",
  "key9": "38EKXke5gsidZ5nAsZwMVKNdgQto6Eb5migeqwmatB92JTt9jTkD2aEv159dvJeYk28bcjGXGg7cpxg5rMfPCbU5",
  "key10": "3Bm9qAk7SucQ4g2ZfE14SCBY74MJWnKsRyeTg2wRNS8qGUTT3ihcyX65uCmuWuLZ9sAEf3BnvERgF7U2Zt86i5Wm",
  "key11": "4z4RrUar8DyYS9nZRaC9G1pc4KCmmXoXaj1WuyoDdX8KowUxGBX6mFyRohr7f7FnDQC5csnptK52jb5eJ375orZz",
  "key12": "2y3b7tDU5ZWBaJbXDofbjVRdFEs2you7uKz3ede3LRzZjpLbZvyEvB6C8gF2TDvUN1Wh2WtHZA7FKD1zopPu9PDZ",
  "key13": "3Xudpk5NqTvBNkAaLU2wH2MbvDf6JcU6Zk3E2iJ5S2EMebM5BSp9NwmmYcXhVztMNorbVLYs2xcH6KaUKsThR3FH",
  "key14": "4QpYh4BZjZDhgiKdLX5Li1QydBjRWfPbAMxSeW6DMEa7Ty7pz3sXqbtXZ3EbHBv3LFgMY9qkUiUD5GayzLnof8KM",
  "key15": "5HtpLvdnyvfdWrMwXdpoMZei3D9fiNousnpnmRqGcUExGLvzmhF74CZc99eJTHAsTPeCLqojvs6Y1HkCYA5f3u4b",
  "key16": "3FvUA2AKoWNeiX4rsfxLfQAN7cR3DZSEbUdW21dBMYxCgHttzVQ2TRstHCh65cQCLV7Ei1E1k8QcaLuSgEExWTFj",
  "key17": "FSSrdMiYnkGxFtKPknmQzcmpbbsjxKDSAEyjWWdKYtx6C1AE89BF2vBsfyuaiaffg2G7LYg9b2m9m7WuyhEpMFS",
  "key18": "5aym7yWDbtgC7JHgoVi98q9ojLhNN2edmoweC1dJSykkAExR3RQTS2A14ZizziuzGs7GfrPjo8nBhHC3nYq5HgjQ",
  "key19": "3W8mWKhWYqKnbbasCf4LpfB382iXqkChWR5ep6mRqQn75vJPRk2RmXKrTR7PnHNdgyQZTbxKf12UBZaYKAtUQRF",
  "key20": "5AQijd4KfXY2L5c86nTLoHCvxgRAjZH9jSD6o6zBMTvv7UKDVeY1ZxWfEGPqrcm2Z4w2msLPdUAPoCQbYsW5o9vr",
  "key21": "TFjBHoRfRdWxosZM3ez3YTxRaBjtYijAHnsCtctQbhJPVnFMNVqXmDEYtvP8KPoS8k6pVWBeGcP9dBH9b246DCj",
  "key22": "5Vb5SPynKTLDpipQEqEhBzY74g5duHkfxF5hkFbytsbCgE7ziKBdhkJgnTsZxnub8pKobR7t3akKtWWm6DZSKwhq",
  "key23": "3MGdta97kwMuAvxUvFJanEd9QyQM5AQYLQPvubbZwTipe3pJ4zsksWJ7sYwgL1BToeTnZkKR6KNriggafBjY5wp",
  "key24": "2sD8NVPd75j7BUedRtiTLnaLajCvFYSVQTs3LagdNMHf6S5fe2EmSgRdJzv2cLCKeWo4Zz6jWgKFeFS85kHX395r",
  "key25": "G2jWeYNbNs4PyAjgNamW5oq8JZzbDsegNvLiR3Av9PdKbpwxbgs5NtAAWP5ox9m4ZHvMTx5CmropYXJ31uY87ys",
  "key26": "3LhLqc1ixm74pG4VmbCfcXM6qx6GWZB1GKpRAmDGeVAZMkuoMwtPiTBoWBqhqzZZYimrsQvGHa9ZJFdPosxNihk1",
  "key27": "3jncJBES4BCZicXQFgF5DcKHFKvEXy7HJp4suFDLTQpYJV3jAKb4AaXv7cN1ZsL8ix5yiwEBjpQ8zNRbrXbSaJG1"
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
