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
    "sw96jxxTxySEMz45mq661txKtSHHddsx9TE4cpfXBbdVkfxKLDF18LS5JxBZpnmpw3sqqJsLkVFRGbRWvH3khs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rhh7oyfT2VztAFkHZtyPG3g9eYypFSmi5gJhS5SsjgQEPVrpaSpJmyFocY8NX2hmrAvxTvoDHAdH2t94yMS27Ny",
  "key1": "5Sp7oNJRtd2ApBnhBYNjpsqv2LA4JqhM37xoBvt1siXzMbDfM2SpQmckMYL5J332Jb6VFM9VdvErY3nRKZmKWr2a",
  "key2": "3BuWEtw94pTFCwuaD1RSQEQftsvWGmKoJEPLmvv3V7vZQQ6bAJAUj195x9Mib6gpcLNi1BbjPDQM1WG1kScdqqEm",
  "key3": "54GoMMzaaAsykRmcegpUKiCQuSE6fhtBxYJv443d23YA2mqsUSvgSRwcx91Rr3WmC3qpxYPNDcsgy9h7eFKE4r3B",
  "key4": "R85ViL7J51u6xHGE6dYEt2d2FScmXXtTRayaVbzFJuAfyPbrG3Son7ZXL9PT49qRBtRgxTmbnsyMV3PDjkUJeR6",
  "key5": "5RcbfU37nvfWYcmKdixK5EzDfHMxHmkRGznretHca7ss4GK9At6LYJEAND8rt1jwR8yaraUpM4QWjaf3JksZdmi7",
  "key6": "5v1CEt6wXSQ4vneWMRVrTu627jZPCYjDxGZjjTYXssFcjGY3dDFVgJsJFLEQEXckqx29EKPKmjEiKYEwiRAu91ta",
  "key7": "jRh39DYNfFH3RfzdJ1XdAPdKBsam6L426owGbnFAsFNiCJaaBH8ugufgYewQVQVwytYqfaKPihLQhqb6TvTuwVP",
  "key8": "369oMhuGpcPVmEDbrRCGVrfGioXzjrWznBwuDZyWwjE3q2MaYp7fPLGL3J2UcM5FzTtrhCHPwDxo52XqQM9YVHji",
  "key9": "AQ5gV7HFMJJ3r4v6TgbuDFGcDWsuogJNU5NhJ3v3gm2aqUn5o6FMmpvhnC5YMbDcf9MnPPaa2BAwQRcrYmaBpmf",
  "key10": "mbp8RkK2zPh8vDqqraKjJ4TjqKxUL3J7u3FKuiYnbMDyX26Q7nCmfyXmAwXFWxqNpLQmA8VFoU4wujkGWGsYATu",
  "key11": "55Wf6QTo7cgb3rsecE1cPEXiNYKURvD8HVYMrsgcxs6n64TxXTU22g25hnRSgq17jLHko4fKf6MFB1mvjg6NcNrF",
  "key12": "DMkCN9iGsCJBqCb9tZ4nEEtpBvWve9n3iteJjaYxKa2gB4ce1jfTqiDxLHwHYKNCuHNgoazSwUxuFsUe9pWtzeB",
  "key13": "4EDSUMiMYdAXSovvBwVpVEp4MC5C88Cume8nZB6dG9GEAUJcpeNjpQ9c8sRn9Dw5xPy3GKtnqBXb7J8GTPnCyPZX",
  "key14": "5XrReFcrKkU4zfxCLbKMUGXinsnZvGD5sr5ZHYHbgqt66X1wBzqGWFB9zguZLiYWsgwWshP4DvjrNePsMuXAvWQy",
  "key15": "4yL8eA2cYhgSx2BnrxFaCS32NzmuX6vGEe8mVbyB9oUznYahzGj1yrta9FGq1vy4rWPoDghdbVqb33PziYL956rv",
  "key16": "5JWLokHWWjMiAT7mZviDcfuT8S8edKT4wh4VGWxyhsYgEAsLDzb82mHR2pT1JRNUPRrBGNd6Xifp2Wtikm8tyUZ1",
  "key17": "488NzCo2YZba4WZXDxKDir7i3HT3ryMfpeNGNyMzV7487kwYyJ9x8o2sa62rdzHcPFtN9dKjrRi4VycyMbcN4TQC",
  "key18": "eejiNmPh56TLw4f734Tb1z5kEsyoumpgtv5SzK4ABHWgvfy5ANkJL5SoEUL2o9E8puycA7rzYeVw6ehh7biWwpy",
  "key19": "5n9nfKqsagJYwQZ2gpMxyzP9doQLhhxNhJPgN5RgswDqCiBGT4Lvxa58fX4cXgC3VXv65HQBLgRfW3AEtvSP9HLG",
  "key20": "Erdv16n1u47oJycof5rvmwkU6FKeUx1yc3gxe3E3ZpwHKmDpqd9AZa7jg3iL8JF18ZpuHnA9sescjW653x6Wdkd",
  "key21": "2Yd4c5bsf1hGWbtmSxsU81evXkQnbgHWaeoir3a4sK8WkG5njGvHX5w9TpXFaC78dAk85X259PjZBn6fzRQWSNRs",
  "key22": "3huzCurtTB19t8wnAWdhD9jDLVRbhmdMb3dm6GaRFy62Y4WunkWTsaRoSzFGRHSbTWWRbWw1CFnHNKRyDyQ2SEg",
  "key23": "VHuTSW4ppHUgihqyCS84JHjkGQBTPuRBzswP5jzfHqUh24QwMeabzQ8R7bhJmjMM2h9rqRBuzUSFzPfU83NP84F",
  "key24": "gMhwpSXSxEvRdvkBw4T9kTeDkBeXSbAt2tgnUu64VJCVPFA54nDjcJpM4ALphoggNZbicezZtDJ52MpBd2YJ3R7",
  "key25": "2P8euPY7AmNYfMr4NJBWReAp4n2miPxqD3abAmYbxXU2aRE2rN8EefWF5AEABDuf8pi5awCcwhAiEPs2C5xdpz4Z",
  "key26": "5siQ9Uun9xtCQPcAmFydoUqnJr6NasNGsLvLdMNiWpspKgc9C1rTD79zB5EnEcnDacjvoSHxj3fupLs1a9xVsdZR",
  "key27": "5q8ZZNi1W2gV7EAFoBQJnVsQe4p25sc8gUorBxhdzhzas4zwAcy67DcxnVbK6UfMa5YvH3YkK3d9xgfbhqtrY5k8",
  "key28": "5he3VgwvqDTS7j895HRTX2Pm7daSMrewrY7NsR4KF68VHG1zCjmPvbftkwMLeEF7XPV59Ht98Hm42fPwpb8xjBZG",
  "key29": "5U6fmTc5BPzgqVRsmreX535gPPBDqRAjQTiCNmjtgSP2wQypvTc2RTKCCrvLPgNkthLc2L2okBN2yvAHt5Tw1tjf",
  "key30": "3vmFUiFkRmEYDikCqyRUrGPtucrRtrazeRD6pkVHhirpDHcwaT21M1Wseiz6jJ8Ah9GsX6hgtAUjkPaq9XmLvNc8",
  "key31": "2y2L9RyHoPMFU9rpQRtHYmmeW3VmBy7SqhjHJmqMrBXvAKYoXR4cASpogLQUxKM2cnN43Um3BSqX7oNNU2yNAGDW",
  "key32": "JkibE71NrkfoW8V6QXVSyrujRNugmYUdMeWQHdbEDZVUns1E6JhsTNHEBQ4w29TrYxu4SKwarAFBWxTQZsvQ4Mo"
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
