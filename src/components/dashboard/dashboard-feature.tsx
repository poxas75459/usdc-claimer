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
    "4hcfpZteDd1aELpLkQ7Qu6QuPGnPPDs5ZvdNDhtGVJBirBCKwPSAPQ238Kwff2es2vEkrXwJXvhRmiSSDLFjZp2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VkxYMJyG2PWKfxFSjqUgUy6JoNbWAouRXafbg9Q3rSssyuakLqfjgMahKUKNBeEU2uSDEiZwPGkrczdx4gp3V7A",
  "key1": "2mqHEkCwHZEcgRyDAwoLrRJmKvhXuPxXUWBVRSJjc76Nz5QyZLcnQWnAf41G3j79qX5pXCMyB1tFG58XGz1Nxb6y",
  "key2": "5Hcej2k2sqXK42fhrksPtN3RTHT4JDr1CW6tCfVWyHfNVQvd7aJjQSMB91S8DFXbi4YAkuVrDPkRT8pDqHkwGWEZ",
  "key3": "5Vi41fnDDCZCNfNbzg8kNUhjZGSx2HkHouBhxXgFaYj7DBYyPfnPemA88FDYtHuFjouwD9N7NZKj3QxCZZcdxR73",
  "key4": "2iPCwnTwVUUidJzwVG51s2LALC7pmJwgmtWvYQ9hdnyemuKDfedwVSCBTVtwGeJBDxMjdxTCq8BjtBwb1yRwrYSB",
  "key5": "2GSr6A7AeiUZot5dNyfdJ2GRFneuNw6gYEaoGGJD4nrFZVBE5z6YLnM7PMmu5G12YjNRzrmG5H5HQSFDzYx76qTH",
  "key6": "54KbKchbF25ssykc3Uvhboe9Y7SJPdoV34Kc66TzP7XEK3KigFCGgmbFbNyTBUfycWxqz12JLTwZ9VtSN4d9L8W5",
  "key7": "Ggy32DwaBknaaX2mF5JW8r1TcK6ssyHx7PDSNR9KmWBQS8eHrVaDx9mNV1MszqaPPExiKcsu3Rrzd5sHZBytkw9",
  "key8": "5Zzs72V9hjvpXeMUkSG4iB9vbjc73ssCdo6CUVf41k1trcttzriVUtzgesxGWE2XZqCfNx2K9VhKbtUXJyNmroYq",
  "key9": "5zkXxddfLE3bEodzon6sRgetsUTE5puXudFz4wQ4oBmKjno7BMAu93DxBvoVCgcxLD8U8yrZ1hQm8KcbSqU3VuoE",
  "key10": "4hXDSTXX3VQyrgcgXWzV83gmuwsSjEYLT55JbJudPKowULyWAc4MgeNbnU8mNG85sRHtPKn9Ad39TpZQ6zpLtzeK",
  "key11": "5bKomLfbjojdZ9rxpCd6UqeGLdAHv1oXzsvTxZsmBZB2Lb5sc5nYc6Z1RvBao7tAA9ErSFf38DDipfpxkMh1pfmE",
  "key12": "ei1Ma5pegdSSjaFWemA43wYCPV42Ts3dVt8i8SBB886AWGQCQwyQ2euBAT2oE41y2eCcV5VGb2EE43hmSzzMU1H",
  "key13": "2APtVJAxBXU2a4S1Zt9DoDPZyimK3pTUxu2qKrgSTKEDnET8xWtEU7zmite6rMP5y1engtNyFusuZTCbv6oKtSmb",
  "key14": "5f1gAvbEzM7fg7mhXbVjk1wEmCkPDZzUL6aJGFD153HF8yBbvHjFbv2dQ7nDketngKvw9UtEk3C8ikF5X6Bu2yRF",
  "key15": "3zbWMJcmTDmTaDnCL6iZY35tVYV5bohgQgm1bdjQ5R7dfhsxvbRjPQsVTJ98gyfkCQ2dPMHbaFCcmbje4pWmsoiz",
  "key16": "4rnJvtPmCmUEwLPscxUukxQRWpYhpmFaUxCohBDy7qkg6rJ3EFJ2b3RtgQRcXx5ANeG43Du4rCf542xc7Xt6R6Qw",
  "key17": "3Py2vaD7UVXDjCzQt7Mv7ckW5eTRKrf18X4qMGiP4afUXE6WdLXrocBssHJTZbfHL3QpyhjBxAarTkzs9XyAtgSn",
  "key18": "2ds3hQvktfRTz4rsaVhS3BTp7xgyxPcVqaVd7tmfc1BEqCdnaUms5hckpq4kBpCB3zobjATUL3uH5aDTcHVnZrsi",
  "key19": "4fTXwMzucRwYqvnmrr45TtqhNxShCeqjzbYrcjoL8Tpn5rJiEbeCqhEM8bRYZtW6JGfhVD6PwxbShmDLGbNaPpCH",
  "key20": "4nea1XBp4DCB59qCFwF7Pwh419RuaXq3DskoPDCcaVoNhg7iiG9Mx3VqgiTqrT9efExihTP7c6U5D1cW4r9YKKWU",
  "key21": "4uEiuccJydnvmabtiEBgYyHywivRs3FcgVhYQHh1xpYtAzNkNoQQAR5yjB7pdvLcn7XhHWgFrPqGBnZB68aQVhNx",
  "key22": "bmSVkqAiRDoVuFGywzNwD1Tk1dsBK5zS8SWAFSx843sEsobKDjTqJhXiaABxbPyeHhAii3ffMTejAPEPfrs6BuS",
  "key23": "yAYB93c85KiEDHyeBjDnZ19uZyPHCSw53r7AMm3UG1cdpHvDmXr6TYwVv4b2qmYXqab4ZVZtMeMJTpRxP9AEFQ4",
  "key24": "5UVJy3rp9A3w2eHNctwv6Wxzjqbvehk9ZeiK2fnxQMhiTb13GwArzUZPiuLBnz7qcBzpgfYvREPfLoE1SFmk7FdN",
  "key25": "4S5p5cv9ykC2cnRjSdWKZ9EneaA9hmYC2uj3UKKrYi2aZxwZsdn8HV1BZVGMoNHPrkaD7456JXztcWSdtmgizdLu",
  "key26": "3kvCaFdMJwzBnvf5L8Xjjk47Jj4TWGhnjCNkvYQhBigntRw5wZLnGeNVZkfXQ43B52DDKvwgVS3sm7xfKciMq1he",
  "key27": "2sc8V2FEUiX1G92tuZTK7nkmBPQEDCRyZegdBMsyd3YcvNHmq5tHwSVXwkXzoU1ELV2vXXEZwfXMygEdrfxqXGWH",
  "key28": "72PqJiEPvjpZ9zwnx7Mxjw69RbZ7akdECWYViUT3XWCw9Nvv85vGSbhoanEzXSfWKBSLwroR2BNkKqsU4hxfH9E",
  "key29": "5QsmYUxdnuLUBEA2pNZU7uqPZ61q7Za8aLrbb7Du56EYFrd1pGXbMsj7kUnBVGpZUCWchy32SjgfvTyqEbVVGdo6",
  "key30": "3CGezn6EuNyEWdXjaXPMrRU2PmA45kfRHu2Wtb3frnjLiT5gwqeqWWKWRabYzUETNac6Zudb5JaVqp3c3P3KGDsd",
  "key31": "5FMX3qTLmZeuFJKHfkPNfh3TQ9QiJjcWaqLzP4ZdqDHnm21m6ADGydu5uDY4c3XKb578qZ9tqRGAq7NGk2cteaYq"
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
