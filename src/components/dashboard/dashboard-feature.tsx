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
    "3T5pzVt8W6RSVtgMQnBy4ZgtuF4ru1x1SG2JukrELV8Vpr6RQzBWkUoh38fiLLb1MWendzmYXbZYWNpg8TfHfsEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jstAHzJVrCmsfLk4xuPRzkmF9Mzqhr6VrV8jR8y5bdCiUeipePkQjKgecUvoefMn5wXPpPGjJxyfRMXRiw9MxtU",
  "key1": "2ws6bnpY2gk3T9Rrdh2YDcyCfZ5viM1BLtpoHv9Bt5T9qgnXf4EP8FtpgrJKzSYxT18w8YzEGyM7pZkoeMK7x5St",
  "key2": "2pwbuySQRwGuGgjtEXja9nwxNpRkzuWNA7t6RRmZCLrNDP1jz4tEgqnvezxVFt6WanM7GJGLctyxq39Nfe2F9Bsw",
  "key3": "5qCLGA4z2sEEtLRufKqQWwrV5dYjTi6CVNH2sXyDYLZSs9DBkumkZpo8U1EGcncKpgm1cYi2PeczLHE1swJNBhwm",
  "key4": "gwdFihRadFtCYJNZYsyzQ22JeifuLKc51TSL7uxh5GX9zqApTpm7ZyWdqoMJpUkcpuvCxGfbX1163e4kYYErCu5",
  "key5": "2NXgbs6fPr3LERnYaEH8WJgEWLsWT4xnndyhgFK87Gf596mVmGgZGp7zv3GuMM6spk1rgBMwo6PN1mjhFLdaq6w1",
  "key6": "2Wefs2MzSuifgBUCC7YnJDrrWCtNC2aQJkKXeKbg2W1yhaVoMeXjTv39hd3CBCky3FnkwJdpcbJHNUcbF19qB7Kt",
  "key7": "XdWAzsABXT8EfN5s63XHkwMBSPxvWdZL3j5uhtz1DMXxDyGJFkv8bmDmQSxT8o1MbV6MFGiLeLCpEuC3R3bDMTD",
  "key8": "Y8XLroRLf3QN7Ea2MkWma65eMSYTGppPZ56wDvu17HGEtG77mtVJAL1mkTs3hNK9cMNBvjMmw2gzAvwkJbncPrg",
  "key9": "5CY3NuD7t7i1yyNd1bhUkrpEC1bfyFaqBst5FvMF2VwWZEn9J9ad3sxJD84pUmwvdSS1CwD7f2wjYnbtKmVjGdNV",
  "key10": "9R1bLLyNtdaLoeEe9FHAKh8mgwR6AqbBxh8uw5nPSW8zJutc2bJyyrXzJqtAibccedxyxa4PvdtqvmiPUrFw9ur",
  "key11": "5xZTh1ijkouS53qqFRNZEDEBqw7AxF4KEGbG4NvTxmYHtGL1Hf9U59BvwTqwXgALch9sYJUytWBCgP1Wh2LkWESJ",
  "key12": "5iGyn1HsFSViiMygQZ3XdZ4xBjbjEj1EmqXeUG2uUfaVYyqDGdc3Cc2uTowtYkND9sXKfzjVVbYwj1qTxy9E5rdf",
  "key13": "5DBFXcexg87YJDFnyXByuYqu7qXWEpJXDoCgDvZApR36yLRFWitviRzHB2iXimwsVKY2LhdnaaqFHPSasjbHyzZE",
  "key14": "8TQpLatJBd3XzJx9Uf3Sd1wD5w6YhEoipP5fW41Dk3BL49jkQuTn416ueJZ9QBhGUuQiNnCmuefXpr8bPWtVPjH",
  "key15": "2Qb25NajpZj6dg19msWwHGjHagoddg31XcTbK9ZyGMYcvZTfPLQtBuDXFCEMzJn88nDtsZkTExts6SdFuPXwWbFT",
  "key16": "2tQaevoXbkWJEc22iMg2srSnSYvKw5MUtUPzowf6tzpuWNjoBmDJJkbbYevzkZPswc7D2nwMKahejZEShiBGn1Lh",
  "key17": "5RyoFBdESwj3bSPxyoMgknE21DVXWFgABrgTCCkAPhu3Mfff9KCiqudjfsGxzPtqMz9HTvqAseW7j9wjnKQYshvW",
  "key18": "47ScVg4QmcAhJyNPRW8hXLqinxtLAPZNFmzdKYyaUoF7dd61b9v4ptbrm1KXrPAprGTBQ5kKVVR4UKFNdmkViEA8",
  "key19": "3ehYSKJ1VKNELpogggB6uhZv8PMbKtQTqLE12PEreNybcM4cPpymEcBygVAHuHJVMw1ofJstytS7hZZvpKcxnAEH",
  "key20": "3LjomyowcfmknPjQcvZyRYaxYGGNkBRu4TyWLUzK4GKRAF7XE4UPchuVedQirMEH7Fqa8EmF4JqyHA2ySgNXA5sC",
  "key21": "2iSJqV7bo47uM8UCVkRTvbKEDqMVCCM4YDuJ6ByxksLGLGhbgNMvGpaHEu4fnkcHJp36rqP13fA5t9FftXwYtBGD",
  "key22": "w3juUvN5JXKYnAHE4k48cxFYkjcXPmC63fPTrwyNwVGNSs8fBHTDbp95wsRsYeqDFEiUxU7CxbSNmAyMQbZPrz6",
  "key23": "25X4dzR3oCkDu7WWNA1R63ZfCPRTPsaY51pr5viZtg4GzV2JHyR6Km3G72xjAbGDzNwhAcp3ZtKVuDYeuM5cTTEU",
  "key24": "2MwNz2Dn5eotXEdFsxxL154P8msoaPfieD87T38Q6ih3tySUVtMg4fAU5UDpPDknCRvMBQTUFPqTHoAECx3z3jZC",
  "key25": "3KTfD8zVBFhR7sYfRU1u8R6sG8Hm7L4BALy5r718vj4Lh4AQHcTKgPCkPpjYtY15wDLMLwJ5yveD1xkQQg9wm7s9",
  "key26": "jYPPpqkJFrnSTgnDU5aTE31haRL7ehvCmeVK8uQznqAnk2xyhYZvArhZM75MfvaQBmVkZAdQKpdJpf4BzWZuc1z",
  "key27": "y9xWG828wyFNpuCR6YBs7DTrcXCW6qRjTCtwa4ArwLMjov8bryYGYPMmfxSim7pGUPJFzVai8whN39k3JKh8nsF",
  "key28": "3bVmwoycSZHZpgmAqPwcQ3z2w9D7TAVEEsNNt6nVh37D9Pwf2PwjkSED75MwoKztk53DWRBoED1hEhMtrZBUHGXF",
  "key29": "2SPv8vx9mYqBuHQaMXcGmXrmqJ1bLZCnynx836tucBvjMhkgRxRWKoNCX3GHv4uqbXaushZ3fSyLrsJ1ihuuDZtn",
  "key30": "3YfWfmfxuQe1rNTFw252tYF36ZHPdgEJECjS2VNfZ6E3uDVBEMuCtiXo4pXvHs2F7gumNihMJ6aUtwrNXK2FmBxa",
  "key31": "4EtNKyUE3n8VkFnuP1JK4UrghayPKnEf5CjggnPDWuzXfHXXr2zfTXN2XzCw5qhfNhbVsPFmk4oCj2ZMwbVZcdNL",
  "key32": "5NAZHa2Dhtgymq41D69bEhr3j1V3WSG5L4pbpUj62U4bDJSxAMnXk5YVFH1ZuHvNY38A7FTJspZjraGZRXdhmThf"
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
