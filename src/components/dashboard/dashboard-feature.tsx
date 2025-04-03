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
    "3qKs9CGxSfFSw8Pob42KMaZCfHg2t762cPCdVQieVy9ipJapcTo6b4Bixj8rSQWpxDLx1n4kfAipPCCykotszzdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z3FuwRv7XgCj9qGL2UnedQWho2dJoTLapmUVXB2snuSnBVpU7vm1rFCyXfHy2jhmmKMyb3Lz8ALE72sHNZWTio7",
  "key1": "41SPREFADspRWfc4hESUBKhVGoUBzEHdUnpKpzEqFRJ7EyzrRrBA3hwWfSDvW2Ffxc44sheUW8t2pDdVGEvkA528",
  "key2": "4GSRCH7xdFyRAgdEvULGH3Fg3sSpHMNgostNFMWeK8fXqK27H2FLLk2r2McroY6kbfBDovKiFDu7AxLWZtKgx6WB",
  "key3": "3PWT2zviuvCNJpkZTBezQW5UA2uoeHjzwkpBN89f4S6epQAsq1onVeZJnBTDsLuB5bEK6nh4Mqcqo7Dzbta1hYCR",
  "key4": "3DgmbtAD8DcL9Vp6RJUfhzC9NTSdBz1TxgdK54LG61LeRNAX8e6bxDcGVxirtijw1oZY4ipojd6n2MpVzS6Q5gy5",
  "key5": "2Eakksm58BdTiyfDZbESz8EBUgcUWsYZXfq122H7stZir1fdyhiNsskg1iuANUWBz2Lp4skouS3DUBpPx4uuFEJo",
  "key6": "55cV7nwHKPhbQvCxZRot5S5Bso1pWUh1HfZP8kJRR6vkfRKj66xBvURaW7Rx8qNgzmwr2idkacJ3MS48kdW8QBKu",
  "key7": "1QKYENWCZeTPctLc5SUHmynjfJfJR9kuHGCF3F6ecWyA6wT2Hf4Zr3FS6a1Ynvoka5fPdPaVp1RdA7LfGKQtQRX",
  "key8": "bNjmRzTctL7wZA6FiPpTgHMJW9K3m574q1KDZh2F8toFFEsrrLYPR2vKiNZxMLum41KPGC8jWag5smDpRzDTQTS",
  "key9": "3jSG8ZYHQE56KZbuFn4SRWEVAPG3paCp2deH97HpwzBGjjFjfZ77s5z3ssnjrsTaZVyw6M3JREvcEXHAY6Gf95SH",
  "key10": "5euC5yLKo5rFga9WDPZFTgakvz2EDmQ7jXN5jrtX5ZcSogVJa4vH6RmX9tUraiqbsVjjaveDRj1m27SSW1XfDgjo",
  "key11": "5aUBh3Y8Ha9X6gjnm6Yjza7KJb9FDsEA2doRgASp4aWocTSHffD38Se6sqEci2ooSy9hecfwikiPfUe5Knu9XR3H",
  "key12": "4FFjZE6PoJ34Wu3MFtLmKKmeHMQCsRwdrrVwgAKRJ3t3EX5FPjT87k5sxqtNsSUx6JhjSufwuGuDzKLiQzCjhkSX",
  "key13": "2D1SwxH1YnvnwBLprygHyniJb5KDm5QPAcKCGa5rMieyizX2HYX22yaQya3fACkGYKTcJyNP24xVr5h285QGpu9S",
  "key14": "E482xRM7rpBJd1Z3cPSQZtshdFaNrYmkiNBD4oKbG5dkyKBGrEWDAqejqacgnnu9aaW3Zu77UUpj6StP8Ywwz2F",
  "key15": "3rjkMFHs696JQT1VeCFYMH9bQAsCVGe3DV1Ux2szfPsQCbpY328nuLjPtVgy7H15HLUGYqAnbmZNCXc7NidcD92t",
  "key16": "26LeZS6k1MMKKWn4jXqmQvmWT5hvU53xVdmViVpetdNQc6tRMvgvofsuFh5gSJjZfrnj2UkNuQhWGbJx94hC6DtN",
  "key17": "w5t9menfF8qejKckfNckjJUb9C3H9DiZcpb4KDg3CA1TyXT7SvgBMDCBgo7KF7yn2NhCFdyjPwaiSgnDLVLNEHs",
  "key18": "N9KsLA2BRGEzdNzeWiWsXGvGe4Uih35XPNh8LCMCKYZHP72AjfbBCciHXRP9eXNrrS4HDgw9yXXtpjTdKoN8FAt",
  "key19": "2dtsMW2NVsTxPyLo8Nd9PrjrihNk3SwrBNgeVmkcH7nFUFb6CVkDAUuRnAG24TRuEiuqXYTm2ehfPJQebu2JDnB",
  "key20": "L4FrJCLhWEXPWKHLFuEQ8ea25Bjus4FQWmUz2pjS5FmjKBTi6NBYGx6erX6BFbTt4Npf1PDgkLQ5pdALASAWPcZ",
  "key21": "27Y6nmd3g2dAkM4U8nJzpnCWrng9HiFQi67cUzrvyqLNGyu28upZxkcx4MQhBjngJkA2X1Qwx3gK8pukzsVtsE4D",
  "key22": "31LUW3e6um9fncNzYYhZfaLAdj6YUGMNmpaxT126zq1RgiWm7MYZCPaDfdbQR96n53Fzr7cKE8V81hP3W44DoAcS",
  "key23": "2rfoeSPxw2QmpvX5fWvwjbY3pfYfhtnBT277EqJPKtptzpbxuoPVcD9r5QA99XSuMi6Y5iNcF6kmUYnsN8UHQE9E",
  "key24": "5SRfWahdhMJhyoFbknzhQAzqYXZgwNAECR7tZhR9tXt5T7nEr3SeDdYdqDGM6kucu5Z2KbEDZKZWSwUyJ9jwWs9T",
  "key25": "53YW9H9Bt3CYWXZ5t3kPgVniuLrJgQFdDFUGkTgEyymRBSfkdcmNp1LQ2BYZ88tW4rj6NDjFnLzMKXBLLJN89bAG",
  "key26": "YpjZJ1UkwfBUUa6zYyR2WrPktUUmjvthRRtbVMjetuEWSdDity6my6npZecQtbkLzQxYSWm7o3eUqH4GWpj8T9m",
  "key27": "24U3n9jT8JwsLnGvzMCcnubw7Z2uv7xhU8grogd77uASFASL9aF256dV7BopPNdhkcAYZMQSHg8gS3o1Xo8tRhHN",
  "key28": "4r2xiDsMpuS6frC1rVa4xvVLtukj3ZBqL963UzfrSH41fGLGZf617QdUq5vcqZEJahJNteU5iQ4di3DssvwGaFRo",
  "key29": "4cYZrLpontrvYDZScYg5wArGR1DnSy7aWf4zbQFPWfxAjFiZKo6eq1JMF5eE28pcbyhP6WSEQBNWFToWujRgCWy5",
  "key30": "z1VzfmFqemqmhvZzT2qGfoNN98CKP1ZE9PYWfBSUb1PToywvb6pCssnwShMTQrZM87uFV1LiUpejFfXQa5GNpMk"
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
