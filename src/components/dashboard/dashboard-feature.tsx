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
    "3J8DGaH6qPzkhFPR1R956EeGTrqUEygkwpegJ9NH8JWjzXrdVpeVcNmUDqJBS7TpcwNRw7HMBrikAfr6A5JYfvyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LfuorSR6P5GNuv74UjNpmFEu2rK2g1KhvsjohWa7kXZuiy8FoGw3NZHApQu2Bma9ZoRWL5tsmdtaVMfs4ffYKk8",
  "key1": "3BFKRSJR9eAe5ynaoRVzqfyjFzsid583s8bHmmx8Ls7jegNUqVL4DeHDxFkyUrJQGL3iQkMPxZXQqXRVwBo8CU3m",
  "key2": "54FDMU3uVKap8wKpqR7n44kTWV8P4Kf1EsWW8od6QRg6qhskceXpE9fPcYrWadxoxPfzfgC1uia9qYokXscJcyR",
  "key3": "3QGx2tjiVs5UQxJmXzfFPvPWJBqn4Ah7RbeQYuCyoKqxBw9FEDK2f5VssFKHg6ms2AKGaQMaqQgUnX2VR3y1scTT",
  "key4": "2KQZYLho8QLovds7dxrn4RJDUF2niB8MwPNizp2Ax3W5RxpFunR4ZTT2jyDcWRKpPiXdtkY56n1eGZeVkZ5qYXxp",
  "key5": "57hq77DvbbT1mstjceBEuBwYVNPrD7BRXfYFD1UVYq2iPbFc8apbGZkKvd2L6azSjtvGm2NJRY4HnYoKocakSZJv",
  "key6": "31ue3Jk4ML6jk1kpygzDj3d987Z8YkfSaYBx5uJeBGazXRVB2AjvKYkBnKfdJkzBLGu1jUJfRqBKBctoiUbfSgfy",
  "key7": "3VTpKpCqbMgRojKFjBw1mfCCb6KyuyB7qLZnejuQuos51TMgfdqPqcmjgeRRARUB9zFgn9uCbVjigEC3j2j8Q65s",
  "key8": "4BrbSAUecU8pXaPskNE696uWRYLXfk9d84Wng4LRbzvY81CNJJvYHyggy7YnpAgDb43zdtCRANM2RukN7zQLXHZb",
  "key9": "4uhETDbXWbGzNSyirmuwWf4MaGHxAxksYiz4kAiGV6epfgig7rs8PxNcJMzyEUz17cwiKkCJunyzcexw2mp4cnSH",
  "key10": "2dBNZurVgob5ypiRYUu2sDtSbRnoRG7yNjw4YabREZv91vvuh9Ytzcpi3FhQEHeFrVrGmdVj6PFdFbn6xETgFxmM",
  "key11": "51HNKXPj9Q8V2Xrn7GJtdwaBYLXXFMd8YvVFisemnqjKDzDKtSgWmntDyeW9pKBcfF3S3zz7TR7SS1bhtHPsAmh5",
  "key12": "3WmFzTGm5J7G9fkuubRTBPPW75z3BSnymyPuggw3Gk6EP3nGArZVC9N45vFTJwaUdb9Bxce1MPJyH1c2gdYDz1CJ",
  "key13": "2Rw9wBFqLZzoyEof164VpC3bsTASLC4ujHJxvWq7SPJaCf4ej52U4p8ur3RNXvAXVwwGtF6HDYfbZnLTwYvEQqHk",
  "key14": "5bVdBaxPY5efZJGHeZEqhmitnuKcGA2py72DvHh687Yb4cmToQ3A5ZHAujHVAuE3fHEAZaFovmBbc78aebV1NJVJ",
  "key15": "2Z2vPAVB9oQB3KmAsFvDZXWTbYrv7wx6FN4bTVbvEsqwM5qBz8kcchcV98yh1T8LRwGK61cbRuJ7bs18ztKPHdr2",
  "key16": "4YWUYgVyKRib8eUo9mtwEjGChzAc5GRP3fSNrsFisRM35vgjkruzzEVhnHSU645h5PpMiSZQE4sdrdX3VaGCDoJ8",
  "key17": "5GobnBa6JFGR28LB9M9yE7usSEGqwNsLEFDhmTWYRRSRksoHdW5TPBnsFfnJTon9c7MMTbNiSMGbqqT4QmerqsMq",
  "key18": "25dod1rtDtJ3A6FNpRWsv3ARr4cNh3HnvDYaAaCfjkgFW8qAFNQTW79WVt14cD2dkLXF3VkRwMpuK1J9c9Hmp2BN",
  "key19": "4fmoVf3pWbxmCssyUc9wSE5mNCyy7i3tw5ssJbcTmjtAdZN9j6UqTncePtNGJnQccQBQtFSEzFqXtK4yT4tsnDW7",
  "key20": "2Pkzzcgw7jYSXJUWX8EKNa1mNN4QHj8MxhnQNpUT1mY9C6bakXC6KanUKRAFaNkd7dftaNeJJmzs1RZmvhsrxL8Q",
  "key21": "cphd9jCuU8LnehxmHELmezJdi91ygz1A6txB9eejhGRw3bS5c3WsziLPDrvK69uabqBpr4RPoDSyaZjcp7PnFor",
  "key22": "2YFXdt1rdmQHVP3JxLxZdCv7Jadh9d4ntitDbVxVJuPYYLBEV9uvt19jbFaaRVBYjxHk1zptshc2jGsnc6GQQBe4",
  "key23": "3H1sBffjjUzWpKa1KjBy5Tn9cfyv4iAyqUs5mVjFvWkWHaE5h2NDgwEt1nDD8eWV1NB9RZW3K4fjPhWKePqXQcHR",
  "key24": "5TsKagey7dXZzZrKknFXrEP36TqteMBzncK93Aff2ESwf4sx5EW2FkFs4b9tg898WXE6ecYQAv9p4ZfjWMxKUcH1"
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
